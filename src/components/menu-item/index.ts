import { MenuItemComponent } from './menu-item';

export const menuItemModule = angular
  .module('ewMenuItem', [])
  .component('ewMenuItem', new MenuItemComponent())
  .name;
