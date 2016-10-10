interface ITableListBindings {
  addButton: any;
  config: any;
  data: any;
  extra: any;
  filters: any;
  onAction: Function;
  onSort: Function;
  openFiltersPanel: Function;
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
  sort: any;
  title: string;

  /**
   * Properties
   */

  constructor(
    private $log: ng.ILogService,
    private $parse: ng.IParseService
  ) { }

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
