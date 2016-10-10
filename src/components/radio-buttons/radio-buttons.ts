import { RadioButtonsController} from './radio-buttons.controller';

import './radio-buttons.scss';

export class RadioButtonsComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      buttons: '<',
      label: '@',
      model: '<',
      onChange: '&',
    };
    this.controller = RadioButtonsController;
    this.template = require('./radio-buttons.html');
  }
}
