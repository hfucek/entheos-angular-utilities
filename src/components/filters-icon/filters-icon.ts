import { FiltersIconController } from './filters-icon.controller';

export class FiltersIconComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      options: '<',
    };
    this.controller = FiltersIconController;
    this.template = require('./filters-icon.html');
  }
}
