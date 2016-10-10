interface IRadioButtonsBindings {
  buttons: any;
  label: string;
  model: any;
  onChange: Function;
}

interface IRadioButtonsController extends IRadioButtonsBindings {
}

export class RadioButtonsController implements IRadioButtonsController {

  /**
   * Bindings
   */
  buttons: any;
  label: string;
  model: any;
  onChange: Function;

  /**
   * Properties
   */

  constructor() { }
}

RadioButtonsController.$inject = [
  '$log',
];
