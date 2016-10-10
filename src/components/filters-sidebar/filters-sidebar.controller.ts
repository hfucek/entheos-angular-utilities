interface IfiltersSidebarBindings {
  field: string;
  filters: any;
  formFields: AngularFormly.IFieldArray;
  isOpen: boolean;
  onClose: Function;
  onReset: Function;
  onSearch: Function;
}

interface IfiltersSidebarController extends IfiltersSidebarBindings {
  $onInit(): void;
  $onChanges(changesObj): void;
  addFocusExpression(config, field): AngularFormly.IFieldArray;
}

export class FiltersSidebarController implements IfiltersSidebarController {

  /**
   * Bindings
   */
  field: string;
  filters: any;
  formFields: AngularFormly.IFieldArray;
  isOpen: boolean;
  onClose: Function;
  onReset: Function;
  onSearch: Function;

  /**
   * Properties
   */
  fields: any;
  form: any;
  model: any;

  constructor(
    private $log: ng.ILogService,
    private $parse: ng.IParseService
  ) {
  }

  $onInit(): void {
    this.fields = this.addFocusExpression(this.formFields, this.field);
  }

  $onChanges(changesObj): void {
    if (
      changesObj.field &&
      changesObj.field.previousValue !== changesObj.field.currentValue &&
      this.field !== ''
    ) {
      this.fields = this.addFocusExpression(this.formFields, this.field);
    }

    if (changesObj.filters) {
      const filters = this.filters;
      this.model = {};

      _.forOwn(filters, (value, key) => {
        const setter = this.$parse(key).assign;
        setter(this.model, value.value);
      });
    }
  }

  addFocusExpression(config, field): AngularFormly.IFieldArray {
    return config.reduce((acc, curr) => {
      const index = acc.push(curr) - 1;

      // adds custom wrapper
      acc[index].wrapper = 'filter-icon';

      if (!acc[index].expressionProperties) {
        acc[index].expressionProperties = {};
      }

      acc[index].expressionProperties['templateOptions.focus'] =
        ($viewValue, $modelValue, scope) => {
          return scope.options.key === field;
        };

      return acc;
    }, []);
  }
}

FiltersSidebarController.$inject = [
  '$log',
  '$parse',
];
