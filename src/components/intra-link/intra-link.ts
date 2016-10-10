import { IntraLinkController } from './intra-link.controller';

import './intra-link.scss';

export class IntraLinkComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      danger: '<',
      icon: '<',
      params: '<',
      state: '@',
      text: '@'
    };
    this.controller = IntraLinkController;
    this.template = require('./intra-link.html');
  }
}
