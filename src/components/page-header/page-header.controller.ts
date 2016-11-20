interface IpageHeaderBindings {
  addButton: any;
  helpButton: any;
  onAction: Function;
  headerTitle: string;
}

interface IpageHeaderController extends IpageHeaderBindings {
}

export class PageHeaderController implements IpageHeaderController {

  /**
   * Bindings
   */
  addButton: any;
  helpButton: any;
  onAction: Function;
  headerTitle: string;

  /**
   * Properties
   */

  constructor() { }
}

PageHeaderController.$inject = [];
