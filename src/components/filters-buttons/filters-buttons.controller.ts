interface IfiltersButtonsBindings {
  filters: any;
  onRefresh: Function;
  onReset: Function;
  openFiltersPanel: Function;
}

interface IfiltersButtonsController extends IfiltersButtonsBindings {
  $onChanges(changesObj: any): void;
}

export class FiltersButtonsController implements IfiltersButtonsController {

  /**
   * Bindings
   */
  filters: any;
  onRefresh: Function;
  onReset: Function;
  openFiltersPanel: Function;

  /**
   * Properties
   */
  hasActiveFilters: boolean;

  constructor(
    private $log: ng.ILogService
  ) {
  }

  $onChanges(changesObj): void {
    if (changesObj.filters) {
      const activeFilters = _.filter(this.filters, { active: true });
      this.hasActiveFilters = activeFilters.length ? true : false;
    }
  }
}

FiltersButtonsController.$inject = [
  '$log',
];
