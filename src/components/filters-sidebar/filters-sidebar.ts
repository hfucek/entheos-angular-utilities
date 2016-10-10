import {
  FiltersSidebarController
} from './filters-sidebar.controller';

import './filters-sidebar.scss';

export class FiltersSidebarComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      field: '@',
      filters: '<',
      formFields: '<',
      isOpen: '<',
      onClose: '&',
      onReset: '&',
      onSearch: '&',
    };
    this.controller = FiltersSidebarController;
    this.template = require('./filters-sidebar.html');
  }
}
