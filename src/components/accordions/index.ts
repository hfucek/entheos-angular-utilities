import { AccordionsComponent } from './accordions';

export const accordionsModule = angular
  .module('ewAccordions', [])
  .component('ewAccordions', new AccordionsComponent())
  .name;
