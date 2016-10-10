import { FiltersSidebarComponent } from './filters-sidebar';

export const filtersSidebarModule = angular
  .module('ewFiltersSidebar', [])
  .component('ewFiltersSidebar', new FiltersSidebarComponent())
  .name;
