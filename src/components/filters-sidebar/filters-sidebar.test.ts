import 'angular';
import 'angular-mocks';

const expect = chai.expect;
const ng = angular.mock;

describe('component: filtersSidebar', () => {

  let field = 'id';
  let filters = { id: { active: false, value: '' } };
  let formFields = [{
    key: 'id',
    type: 'input',
    templateOptions: {
      label: 'Id',
    },
  },
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: 'Name',
    },
  }];

  beforeEach(ng.module('filtersSidebar'));

  describe('controller', () => {

    let $componentController;

    beforeEach(ng.inject((_$componentController_) => {
      $componentController = _$componentController_;
    }));

    it('should expose a `field` string', () => {
      let bindings = { field, filters };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      expect($ctrl.field).to.exist;
      expect($ctrl.field).to.equal(bindings.field);
    });

    it('should expose a `filters` immutable map', () => {
      let bindings = { field, filters };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      expect($ctrl.filters).to.exist;
      expect($ctrl.filters).to.equal(bindings.filters);
    });

    it('should expose a `formFields` formly fields array', () => {
      let bindings = { field, filters, formFields };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      expect($ctrl.formFields).to.exist;
      expect($ctrl.formFields).to.equal(bindings.formFields);
    });

    it('should expose a `isOpen` boolean', () => {
      let bindings = { field, filters, formFields, isOpen: false };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      expect($ctrl.isOpen).to.exist;
      expect($ctrl.isOpen).to.equal(false);
    });

    it(`should call the \`onClose\` binding when clicking outside
        the filters' panel`, () => {

      let onCloseSpy = sinon.spy();
      let bindings = { field, filters, onClose: onCloseSpy };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      $ctrl.onClose();

      expect(onCloseSpy.calledOnce).to.be.true;
    });

    it(`should call the \`onReset\` binding when clicking the reset
        button`, () => {
      let onResetSpy = sinon.spy();
      let bindings = { field, filters, onReset: onResetSpy };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      $ctrl.onReset();

      expect(onResetSpy.calledOnce).to.be.true;
    });

    it(`should call the \`onSearch\` binding when clicking the search
        button`, () => {
      let onSearchSpy = sinon.spy();
      let bindings = { field, filters, onSearch: onSearchSpy };
      let $ctrl = $componentController('filtersSidebar', null, bindings);
      let data = { id: '' };

      $ctrl.onSearch({ data });

      expect(onSearchSpy.calledWith({ data })).to.be.true;
    });

    it(`should add focus expression to form's fields on init`, () => {
      let bindings = { field, filters, formFields };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      $ctrl.$onInit();

      expect($ctrl.fields).have.length(2);

      $ctrl.fields.forEach((formField) => {
        checkFocusExpression(formField);
      });
    });

    it(`should add focus expression to form's fields on field changes`, () => {
      let bindings = { field, filters, formFields };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      $ctrl.$onChanges({
        field: {
          previousValue: '',
          currentValue: 'id',
        },
      });

      expect($ctrl.fields).have.length(2);

      $ctrl.fields.forEach((formField) => {
        checkFocusExpression(formField);
      });
    });

    it(`should set focus to true on binded field`, () => {
      let bindings = { field, filters, formFields };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      $ctrl.$onInit();

      let idField: any = _.find($ctrl.fields, { key: 'id' });
      let focus = idField.expressionProperties['templateOptions.focus'];
      let scope = {
        options: {
          key: 'id',
        },
      };

      expect(focus(null, null, scope)).to.be.true;
    });

    it(`should set focus to false on unbinded fields`, () => {
      let bindings = { field, filters, formFields };
      let $ctrl = $componentController('filtersSidebar', null, bindings);

      $ctrl.$onInit();

      let nameField: any = _.find($ctrl.fields, { key: 'name' });
      let focus = nameField.expressionProperties['templateOptions.focus'];
      let scope = {
        options: {
          key: 'name',
        },
      };

      expect(focus(null, null, scope)).to.be.false;
    });
  });

  describe('template', () => {

    let $compile;
    let $rootScope;
    let element;

    beforeEach(ng.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;

      $rootScope.field = field;
      $rootScope.filters = filters;
      $rootScope.formFields = formFields;
    }));

    it(`should be closed when isOpen binding is false`, () => {
      element = $compile(`
        <filters-sidebar field="field"
                         filters="filters"
                         form-fields="formFields"
                         is-open="false">
        </filters-sidebar>`)($rootScope);

      expect(element.html())
        .to.contain('<!-- ngIf: $ctrl.isOpen -->\n<!-- ngIf: $ctrl.isOpen -->');
    });

    it(`should contain the filter icon when opened`, () => {
      element = $compile(`
        <filters-sidebar field="field"
                         filters="filters"
                         form-fields="formFields"
                         is-open="true">
        </filters-sidebar>`)($rootScope);

      $rootScope.$digest();

      expect(element.html()).to.contain('<i class="fa fa-filter"></i>');
    });
  });
});

function checkFocusExpression(field) {
  expect(field).to.include.keys('expressionProperties');
  expect(field.expressionProperties)
    .to.include.keys('templateOptions.focus');
  expect(field.expressionProperties['templateOptions.focus'])
    .to.be.instanceof(Function);
}
