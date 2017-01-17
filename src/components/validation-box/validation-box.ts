import { ValidationBoxController } from './validation-box.controller';

import './validation-box.scss';

export class ValidationBoxComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      error: '<',
    };
    this.controller = ValidationBoxController;
    this.template = require('./validation-box.html');
  }
}
