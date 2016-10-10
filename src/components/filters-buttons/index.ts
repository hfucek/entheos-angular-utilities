import { FiltersButtonsComponent } from './filters-buttons';

export const filtersButtonsModule = angular
  .module('ewFiltersButtons', [])
  .component('ewFiltersButtons', new FiltersButtonsComponent())
  .name;
