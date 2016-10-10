interface IAccordionsBindings {
  data: any;
}

interface IAccordionsController extends IAccordionsBindings {
}

export class AccordionsController implements IAccordionsController {

  /**
   * Bindings
   */
  data;

  /**
   * Properties
   */

  constructor(
    private $log: ng.ILogService
  ) { }

  $onInit() {
  }
}

AccordionsController.$inject = [
  '$log',
];
