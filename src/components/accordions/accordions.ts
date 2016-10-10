import { AccordionsController} from './accordions.controller';

import './accordions.scss';

export class AccordionsComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      data: '<',
    };
    this.controller = AccordionsController;
    this.template = require('./accordions.html');
  }
}
