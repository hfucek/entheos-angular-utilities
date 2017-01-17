import { ValidationBoxComponent } from './validation-box';

export const validationBoxModule = angular
  .module('ewValidationBox', [])
  .component('ewValidationBox', new ValidationBoxComponent())
  .name;
