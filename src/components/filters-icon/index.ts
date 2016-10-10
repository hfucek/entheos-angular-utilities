import { FiltersIconComponent } from './filters-icon';

export const filtersIconModule = angular
  .module('ewFiltersIcon', [])
  .component('ewFiltersIcon', new FiltersIconComponent())
  .name;
