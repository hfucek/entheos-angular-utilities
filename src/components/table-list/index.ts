import { TableListComponent } from './table-list';

export const tableListModule = angular
  .module('ewTableList', [])
  .component('ewTableList', new TableListComponent())
  .name;
