interface IalertBindings {
  message: any;
  type: string;
}

interface IalertController extends IalertBindings {
  $onInit(): void;
}

export class AlertController implements IalertController {

  /**
   * Bindings
   */
  message: any;
  type: string;

  /**
   * Properties
   */
  isShown: boolean;

  constructor(
    private $log: ng.ILogService
  ) {
  }

  $onInit(): void {
    this.isShown = true;
  }

  closeAlert() {
    this.isShown = false;
  }
}

AlertController.$inject = [
  '$log',
];
