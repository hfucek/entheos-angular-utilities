import { PageHeaderComponent } from './page-header';

export const pageHeaderModule = angular
  .module('ewPageHeader', [])
  .component('ewPageHeader', new PageHeaderComponent())
  .name;
