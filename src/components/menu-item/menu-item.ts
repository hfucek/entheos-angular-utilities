import { MenuItemController } from './menu-item.controller';

export class MenuItemComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;

  constructor() {
    this.bindings = {
      item: '<'
    };
    this.controller = MenuItemController;
    this.template = require('./menu-item.html');
  }
}
