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

  isActive(item) {
    const current = String(this.$state.current.name);
    return current.includes(item);
  }
}

MenuItemController.$inject = [
  '$log',
  '$state'
];
