import { PaginationController } from './pagination.controller';

import './pagination.scss';

export class PaginationComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      changePage: '&',
      pagination: '<'
    };
    this.controller = PaginationController;
    this.template = require('./pagination.html');
  }
}
