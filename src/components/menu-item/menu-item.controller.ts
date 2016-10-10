interface IMenuItemBindings {
  item: any;
}

interface IMenuItemController extends IMenuItemBindings {
  $onInit(): void;
  collapseOnClick(): void;

  navCollapsed: boolean;
}

export class MenuItemController implements IMenuItemController {

  /**
   * Bindings
   */
  item;

  /**
   * Properties
   */
  navCollapsed;

  constructor(
    private $log: ng.ILogService,
    private $state: ng.ui.IStateService
  ) {
  }

  $onInit(): void {
    this.navCollapsed = true;
  }

  collapseOnClick() {
    if (!this.navCollapsed) {
      this.navCollapsed = !this.navCollapsed;
    }
  }
}

MenuItemController.$inject = [
  '$log',
  '$state'
];
