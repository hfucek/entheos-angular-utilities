interface IFiltersIconBindings {
  options: any;
}

interface IFiltersIconController extends IFiltersIconBindings {
  $onInit(): void;

  isActive: boolean;
}

export class FiltersIconController implements IFiltersIconController {

  /**
   * Bindings
   */
  options: any;

  /**
   * Properties
   */
  isActive;

  constructor(
    private $log: ng.ILogService
  ) {
  }

  $onInit() {
    this.setActive(this.options.initialValue);
  }

  isADate(field) {
    if (_.isObject(field) && 'startDate' in field) {
      return true;
    }
    return false;
  }

  isEmptyDate(field) {
    if (
      (_.isObject(field) && 'startDate' in field) &&
      _.isEmpty(field.startDate) ) {
      return true;
    }
    return false;
  }

  setActive(field) {
    if (_.isEmpty(field)) {
      this.isActive = false;
    } else if (
      this.isADate(field) &&
      this.isEmptyDate(field)
    ) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}

FiltersIconController.$inject = [
  '$log',
];
