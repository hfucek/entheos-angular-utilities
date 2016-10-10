interface IintraLinkBindings {
  danger: boolean;
  icon: boolean;
  params: any;
  state: string;
  text: string;
}

interface IintraLinkController extends IintraLinkBindings {
  $onInit(): void;
}

export class IntraLinkController implements IintraLinkController {

  /**
   * Bindings
   */
  danger: boolean;
  icon: boolean;
  params: any;
  state: string;
  text: string;

  /**
   * Properties
   */

  constructor(
    private $state: ng.ui.IStateService
  ) {}

  $onInit(): void {
    if (!this.text) {
      this.text = '';
    }

    if (!this.state) {
      throw new Error('You need to specify a state');
    }

    if (!this.params) {
      this.params = {};
    }
  }
}

IntraLinkController.$inject = [
  '$state',
];
