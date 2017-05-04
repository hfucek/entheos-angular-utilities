import { FiltersButtonsController } from './filters-buttons.controller';

import './filters-buttons.scss';

export class FiltersButtonsComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      filters: '<',
      onHelp: '&?',
      onRefresh: '&',
      onReset: '&',
      openFiltersPanel: '&',
    };
    this.controller = FiltersButtonsController;
    this.template = require('./filters-buttons.html');
  }
}
