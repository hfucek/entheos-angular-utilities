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
      this.page = this.pagination.page_count ? this.pagination.current_page : 0;
    }
  }
}

PaginationController.$inject = [
  '$log',
];
