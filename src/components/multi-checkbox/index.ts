import { MultiCheckboxComponent } from './multi-checkbox';

export const multiCheckboxModule = angular
  .module('ewMultiCheckbox', [])
  .component('ewMultiCheckbox', new MultiCheckboxComponent())
  .name;
