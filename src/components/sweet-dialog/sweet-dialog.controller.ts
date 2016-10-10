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
    private $log: ng.ILogService,
    private SweetAlert
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
          closeOnConfirm: false,
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
          closeOnConfirm: false,
          showLoaderOnConfirm: true
        }, this.config.sweetAlert)
      };
    }
  }

  onClick($event) {
    $event.preventDefault();

    this.SweetAlert.swal(this.config.sweetAlert, (isConfirm) => {
      if (isConfirm) {
        this.action({
          params: this.params
        })
          .then(() => {
            this.SweetAlert.swal(
              this.config.successBox.title,
              this.config.successBox.message,
              'success');
          },
          error => {
            this.$log.error(error);
            this.SweetAlert.swal(
              this.config.errorBox.title,
              this.config.errorBox.message,
              'error');
          });
      } else {
        this.SweetAlert.swal(
          this.config.cancelBox.title,
          this.config.cancelBox.message,
          'error');
      }
    });
  }
}

SweetDialogController.$inject = [
  '$log',
  'SweetAlert',
];
