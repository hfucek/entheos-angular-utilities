import { TableListController } from './table-list.controller';

import './table-list.scss';

export class TableListComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      config: '<',
      data: '<',
      extra: '<',
      filters: '<',
      onAction: '&',
      onSort: '&',
      openFiltersPanel: '&',
      sort: '<',
    };
    this.controller = TableListController;
    this.template = require('./table-list.html');
  }
}
