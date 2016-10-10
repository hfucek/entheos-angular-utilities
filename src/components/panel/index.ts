import { PanelComponent } from './panel';

export const panelModule = angular
  .module('ewPanel', [])
  .component('ewPanel', new PanelComponent())
  .name;
