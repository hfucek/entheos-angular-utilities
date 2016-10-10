import { RadioButtonsComponent } from './radio-buttons';

export const radioButtonsModule = angular
  .module('ewRadioButtons', [])
  .component('ewRadioButtons', new RadioButtonsComponent())
  .name;
