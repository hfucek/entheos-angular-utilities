import { WidgetBoxComponent } from './widget-box';

export const widgetBoxModule = angular
  .module('ewWidgetBox', [])
  .component('ewWidgetBox', new WidgetBoxComponent())
  .name;
