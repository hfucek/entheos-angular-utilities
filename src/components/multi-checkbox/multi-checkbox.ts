import { MultiCheckboxController} from './multi-checkbox.controller';

import './multi-checkbox.scss';

export class MultiCheckboxComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      key: '<',
      model: '=',
      options: '<',
      to: '<',
    };
    this.controller = MultiCheckboxController;
    this.template = require('./multi-checkbox.html');
  }
}
