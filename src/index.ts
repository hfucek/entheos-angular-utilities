import * as angular from 'angular';
import 'angular-bind-html-compile-ci-dev';

import {
  accordionsModule,
  alertModule,
  filtersButtonsModule,
  filtersIconModule,
  filtersSidebarModule,
  intraLinkModule,
  menuItemModule,
  multiCheckboxModule,
  pageHeaderModule,
  paginationModule,
  panelModule,
  radioButtonsModule,
  sweetDialogModule,
  tableListModule,
  widgetBoxModule,
} from './components';

export default angular
  .module('entheos-angular-utilities', [
    'angular-bind-html-compile',
    accordionsModule,
    alertModule,
    filtersButtonsModule,
    filtersIconModule,
    filtersSidebarModule,
    intraLinkModule,
    menuItemModule,
    multiCheckboxModule,
    pageHeaderModule,
    paginationModule,
    panelModule,
    radioButtonsModule,
    sweetDialogModule,
    tableListModule,
    widgetBoxModule,
  ])
  .name;
