import 'angular';
import 'angular-mocks';

const expect = chai.expect;
const ng = angular.mock;

describe('component: filtersButtons', () => {

  let filters = { id: { active: false, value: '' } };

  beforeEach(ng.module('filtersButtons'));

  describe('controller', () => {

    let $componentController;

    beforeEach(ng.inject((_$componentController_) => {
      $componentController = _$componentController_;
    }));

    it('should expose a `filters` immutable map', () => {
      let bindings = { filters };
      let $ctrl = $componentController('filtersButtons', null, bindings);

      expect($ctrl.filters).to.exist;
      expect($ctrl.filters).to.equal(bindings.filters);
    });

    it(`should call the \`onRefresh\` binding when clicking the refresh
        button`, () => {
      let onRefreshSpy = sinon.spy();
      let bindings = { filters, onRefresh: onRefreshSpy };
      let $ctrl = $componentController('filtersButtons', null, bindings);

      $ctrl.onRefresh();

      expect(onRefreshSpy.calledOnce).to.be.true;
    });

    it(`should call the \`onReset\` binding when clicking the reset
        button`, () => {
      let onResetSpy = sinon.spy();
      let bindings = { filters, onReset: onResetSpy };
      let $ctrl = $componentController('filtersButtons', null, bindings);

      $ctrl.onReset();

      expect(onResetSpy.calledOnce).to.be.true;
    });

    it(`should call the \`openFiltersPanel\` binding when clicking the panel
        button`, () => {
      let openFiltersPanelSpy = sinon.spy();
      let bindings = { filters, openFiltersPanel: openFiltersPanelSpy };
      let $ctrl = $componentController('filtersButtons', null, bindings);

      $ctrl.openFiltersPanel();

      expect(openFiltersPanelSpy.calledOnce).to.be.true;
    });

    it(`should update \`hasActiveFilters\` property on filters's
        changes`, () => {
      let bindings = { filters };
      let $ctrl = $componentController('filtersButtons', null, bindings);

      $ctrl.$onChanges({ filters: true });
      expect($ctrl.hasActiveFilters).to.be.false;

      $ctrl.filters = { id: { active: true, value: '' } };
      $ctrl.$onChanges({ filters: true });
      expect($ctrl.hasActiveFilters).to.be.true;
    });
  });

  describe('template', () => {

    let $compile;
    let $rootScope;
    let element;

    beforeEach(ng.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;

      $rootScope.filters = filters;

      element = $compile(`
        <filters-buttons filters="filters">
        </filters-buttons>`)($rootScope);

      $rootScope.$digest();
    }));

    it(`should contain the refresh icon`, () => {
      expect(element.html()).to.contain('<i class="fa fa-refresh"></i>');
    });

    it(`should contain the panel icon`, () => {
      expect(element.html()).to.contain('<i class="fa fa-filter"></i>');
    });

    it(`should contain the reset icon`, () => {
      expect(element.html()).to.contain('<i class="fa fa-times"></i>');
    });
  });
});
