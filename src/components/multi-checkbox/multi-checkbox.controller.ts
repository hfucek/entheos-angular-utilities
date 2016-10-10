interface IMultiCheckboxBindings {
  key: any;
  model: any;
  options: any;
  to: any;
}

interface IMultiCheckboxController extends IMultiCheckboxBindings {
  checkboxes: Array<any>;
}

export class MultiCheckboxController implements IMultiCheckboxController {

  /**
   * Bindings
   */
  key;
  model;
  options;
  to;

  /**
   * Properties
   */
  checkboxes;
  getter;
  setter;

  constructor(
    private $log: ng.ILogService,
    private $parse: ng.IParseService
  ) { }

  $onInit() {
    this.getter = this.$parse(this.key);
    this.setter = this.getter.assign;

    this.checkboxes = [];

    const checkboxes = this.getter(this.model);

    if (checkboxes) {
      checkboxes.forEach((checkbox) => {
        const index = _.findIndex(this.to.options, { value: checkbox });
        this.checkboxes[index] = true;
      });
    }
  }

  updateModel() {
    const checkedCheckboxes = [];
    this.checkboxes.forEach((checkbox, index) => {
      if (checkbox) {
        checkedCheckboxes.push(this.to.options[index].value);
      }
    });
    this.setter(this.model, checkedCheckboxes);
  }
}

MultiCheckboxController.$inject = [
  '$log',
  '$parse',
];
