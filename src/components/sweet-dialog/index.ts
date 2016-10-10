import { SweetDialogComponent } from './sweet-dialog';

export const sweetDialogModule = angular
  .module('ewSweetDialog', [])
  .component('ewSweetDialog', new SweetDialogComponent())
  .name;
