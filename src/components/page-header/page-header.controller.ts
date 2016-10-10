interface IpageHeaderBindings {
  addButton: any;
  helpButton: any;
  onAction: Function;
  title: string;
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
  title: string;

  /**
   * Properties
   */

  constructor() { }
}

PageHeaderController.$inject = [];
