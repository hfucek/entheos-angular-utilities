import 'lodash';

interface IwidgetBoxBindings {
  color: string;
  icon: string;
  link: Object;
  privacy: boolean;
  text: string;
  value: string;
}

interface IwidgetBoxController extends IwidgetBoxBindings {
  $onInit(): void;
}

export class WidgetBoxController implements IwidgetBoxController {

  /**
   * Bindings
   */
  color: string;
  icon: string;
  link: Object;
  privacy: boolean;
  text: string;
  value: string;

  /**
   * Properties
   */
  panelColor: string;

  constructor(
    private $log: ng.ILogService
  ) {
  }

  $onInit(): void {
    this.privacy = Boolean(this.privacy);

    const defaultColors = {
      'blue': 'primary',
      'green': 'green',
      'red': 'red',
      'yellow': 'yellow'
    };

    this.panelColor = defaultColors[this.color] || 'primary';
    this.icon = this.icon || 'tasks';
    this.text = this.text || 'Nuovi Compiti!';
    this.value = this.value || '12';

    const defaultLink = {
      text: 'Vedi Dettagli',
      icon: 'arrow-circle-right',
      url: 'http://google.com'
    };
    this.link = _.extend({}, defaultLink, this.link);
  }
}

WidgetBoxController.$inject = [
  '$log',
];
