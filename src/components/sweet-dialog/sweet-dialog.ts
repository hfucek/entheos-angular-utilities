import { SweetDialogController } from './sweet-dialog.controller';

import './sweet-dialog.scss';

export class SweetDialogComponent implements ng.IComponentOptions {
  public bindings: any;
  public controller: any;
  public template: string;
  public transclude: boolean;

  constructor() {
    this.bindings = {
      action: '&?', // azione da eseguire sull'ok del dialog
      config: '=?', // oggetto di configurazione per sweet dialog
      dialogStyle: '@', // delete o confirm. Default delete
      params: '=' // parametri da passare all'azione eseguita
    };
    this.controller = SweetDialogController;
    this.template = require('./sweet-dialog.html');
    this.transclude = true;
  }
}
