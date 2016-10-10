import { WidgetBoxController } from './widget-box.controller';

import './widget-box.scss';

export class WidgetBoxComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      color: '@',
      icon: '@',
      isLoading: '<',
      link: '<',
      privacy: '@',
      text: '@',
      value: '@'
    };
    this.controller = WidgetBoxController;
    this.template = require('./widget-box.html');
  }
}
