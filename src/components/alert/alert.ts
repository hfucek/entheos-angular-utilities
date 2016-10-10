import { AlertController } from './alert.controller';

import './alert.scss';

export class AlertComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      message: '<',
      type: '@'
    };
    this.controller = AlertController;
    this.template = require('./alert.html');
  }
}
