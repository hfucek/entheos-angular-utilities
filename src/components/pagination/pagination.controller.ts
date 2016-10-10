import { fromJS } from 'immutable';

interface IpaginationBindings {
  changePage: Function;
  pagination: any;
}

interface IpaginationController extends IpaginationBindings {
  $onChanges(changesObj: any): void;
}

export class PaginationController implements IpaginationController {

  /**
   * Bindings
   */
  changePage: Function;
  pagination: any;

  /**
   * Properties
   */
  page: number;

  constructor(
    private $log: ng.ILogService
  ) {
  }

  $onChanges(changesObj): void {
    if (changesObj.pagination) {
      this.page = this.pagination.get('page_count', 0) ?
        this.pagination.get('current_page', 0) : 0;
    }
  }
}

PaginationController.$inject = [
  '$log',
];
