import { PageHeaderController } from './page-header.controller';

import './page-header.scss';

export class PageHeaderComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;
  public transclude: any;

  constructor() {
    this.bindings = {
      addButton: '<',
      helpText: '<',
      onAction: '&',
      headerTitle: '@',
    };
    this.controller = PageHeaderController;
    this.template = require('./page-header.html');
    this.transclude = {
      next: '?nextTitle',
      under: '?underTitle'
    };
  }
}
