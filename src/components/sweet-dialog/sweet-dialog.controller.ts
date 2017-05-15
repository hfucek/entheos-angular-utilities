import * as swal from 'sweetalert2';

interface ISweetDialogBindings {
  action: Function;
  config: any;
  dialogStyle: string;
  params: any;
}

interface ISweetDialogController extends ISweetDialogBindings {
  $onInit(): void;
}

export class SweetDialogController implements ISweetDialogController {

  /**
   * Bindings
   */
  action: Function;
  config: any;
  dialogStyle: string;
  params: any;

  /**
   * Properties
   */
  cancelBox;
  defaultSweetalert: Object;
  errorBox;
  successBox;
  sweetalert;

  constructor(
    private $log: ng.ILogService
  ) { }

  $onInit() {
    if (!this.config) {
      this.config = {
        cancelBox: {},
        errorBox: {},
        successBox: {},
        sweetAlert: {},
      };
    }
    if (this.dialogStyle === 'confirm') {
      this.config = {
        cancelBox: _.assign({
          title: 'Operazione Annullata',
          message: ''
        }, this.config.cancelBox),
        errorBox: _.assign({
          title: 'Errore!',
          message: 'Si è verificato un errore, riprova.'
        }, this.config.errorBox),
        successBox: _.assign({
          title: 'Fatto!',
          message: 'Operatione completata'
        }, this.config.successBox),
        sweetAlert: _.assign({
          title: 'Confermi l\'operazione?',
          text: '',
          type: 'info',
          showCancelButton: true,
          confirmButtonText: 'Conferma',
          cancelButtonText: 'Annulla',
          showLoaderOnConfirm: true
        }, this.config.sweetAlert)
      };
    } else { // if (this.dialogStyle === 'delete') {
      this.config = {
        cancelBox: _.assign({
          title: 'Operazione Annullata',
          message: 'L\'elemento non è stato rimosso.'
        }, this.config.cancelBox),
        errorBox: _.assign({
          title: 'Errore!',
          message: 'Si è verificato un errore, riprova.'
        }, this.config.errorBox),
        successBox: _.assign({
          title: 'Cancellato!',
          message: 'L\'elemento è stato eliminato.'
        }, this.config.successBox),
        sweetAlert: _.assign({
          title: 'Confermi di voler eliminare l\'elemento?',
          text: 'Una volta eliminato non potrai più recuperarlo',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Conferma',
          confirmButtonColor: '#DD6B55',
          cancelButtonText: 'Annulla',
          showLoaderOnConfirm: true
        }, this.config.sweetAlert)
      };
    }
  }

  onClick($event) {
    $event.preventDefault();

    swal(this.config.sweetAlert)
      .then(() => {

        // do action only if it's passed
        if (this.action) {
          this.action({
            params: this.params
          })
            .then(() => {
              swal(
                this.config.successBox.title,
                this.config.successBox.message,
                'success');
            },
            error => {
              this.$log.error(error);
              swal(
                this.config.errorBox.title,
                this.config.errorBox.message,
                'error');
            });
        }

      }, dismiss => {
        // swal(
        //   this.config.cancelBox.title,
        //   this.config.cancelBox.message,
        //   'error');
      });
  }
}

SweetDialogController.$inject = [
  '$log',
];
