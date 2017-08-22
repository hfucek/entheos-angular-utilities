interface ITableListBindings {
  addButton: any;
  config: any;
  data: any;
  extra: any;
  filters: any;
  onAction: Function;
  onSort: Function;
  openFiltersPanel: Function;
  rowClickable: boolean;
  sort: any;
  title: string;
}

interface ITableListController extends ITableListBindings {
  isFunction(field: any): boolean;
  isString(field: any): boolean;
  parseField(model: any, field: string): ng.ICompiledExpression;
}

export class TableListController implements ITableListController {

  /**
   * Bindings
   */
  addButton: any;
  config: any;
  data: any;
  extra: any;
  filters: any;
  onAction: Function;
  onSort: Function;
  openFiltersPanel: Function;
  rowClickable: boolean;
  sort: any;
  title: string;

  /**
   * Properties
   */

  constructor(
    private $log: ng.ILogService,
    private $parse: ng.IParseService
  ) { }

  $onChange(changes) {
    if (changes.config) {
      this.config = angular.copy(this.config);
    }

    if (changes.data) {
      this.data = angular.copy(this.data);
    }

    if (changes.extra) {
      this.extra = angular.copy(this.extra);
    }

    if (changes.filters) {
      this.filters = angular.copy(this.filters);
    }

    if (changes.rowClickable) {
      this.rowClickable = angular.copy(this.rowClickable);
    }

    if (changes.sort) {
      this.sort = angular.copy(this.sort);
    }
  }

  handleTdClick(td, $event) {
    if (td.disableRowClick) {
      $event.stopPropagation();
    }
  }

  isFunction(field) {
    return angular.isFunction(field);
  }

  isString(field) {
    return angular.isString(field);
  }

  parseField(model, field): ng.ICompiledExpression {
    const getter = this.$parse(field);
    return getter(model);
  }
}

TableListController.$inject = [
  '$log',
  '$parse',
];
