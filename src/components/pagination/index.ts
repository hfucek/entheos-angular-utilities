import { PaginationComponent } from './pagination';

export const paginationModule = angular
  .module('ewPagination', [])
  .component('ewPagination', new PaginationComponent())
  .name;
