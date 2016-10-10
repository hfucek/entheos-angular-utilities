export class PanelComponent implements ng.IComponentOptions {
  public bindings: any;
  public template: string;
  public transclude: any;

  constructor() {
    this.bindings = {
      icon: '@',
      color: '@',
      panelStyle: '@'
    };

    this.transclude = {
      bodySlot: 'panelBody',
      titleSlot: 'panelTitle'
    };

    this.template = require('./panel.html');
  }
}
