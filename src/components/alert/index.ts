import { AlertComponent } from './alert';

export const alertModule = angular
  .module('ewAlert', [])
  .component('ewAlert', new AlertComponent())
  .name;
