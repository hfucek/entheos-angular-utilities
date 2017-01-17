interface IValidationBoxBindings {
  error: any;
}

interface IValidationBoxController extends IValidationBoxBindings {
}

export class ValidationBoxController implements IValidationBoxController {

  /**
   * Bindings
   */
  error;

  /**
   * Properties
   */

  constructor() {
  }
}

ValidationBoxController.$inject = [
];
