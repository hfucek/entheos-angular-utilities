import * as angular from 'angular';
import 'angular-bind-html-compile-ci-dev';

import 'sweetalert2/dist/sweetalert2.css';

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
  validationBoxModule,
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
    validationBoxModule,
    widgetBoxModule,
  ])
  .name;
