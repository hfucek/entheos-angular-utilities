import { IntraLinkComponent } from './intra-link';

export const intraLinkModule = angular
  .module('ewIntraLink', [])
  .component('ewIntraLink', new IntraLinkComponent())
  .name;
