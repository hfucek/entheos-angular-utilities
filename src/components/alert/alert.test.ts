import 'angular';
import 'angular-mocks';

const expect = chai.expect;
const ng = angular.mock;

describe('component: alert', () => {

  beforeEach(ng.module('alert'));

  describe('controller', () => {

    let $componentController;

    beforeEach(ng.inject((_$componentController_) => {
      $componentController = _$componentController_;
    }));

    it('should expose a `message` string', () => {
      // Here we are passing actual bindings to the component
      let bindings = { message: 'My test message', type: 'danger' };
      let $ctrl = $componentController('alert', null, bindings);

      expect($ctrl.message).to.exist;
      expect($ctrl.message).to.equal(bindings.message);
    });

    it('should expose a `type` string', () => {
      // Here we are passing actual bindings to the component
      let bindings = { message: 'My test message', type: 'warning' };
      let $ctrl = $componentController('alert', null, bindings);

      expect($ctrl.type).to.exist;
      expect($ctrl.type).to.equal(bindings.type);
    });

    it('should set `isShown` property to true after $onInit()', () => {
      let $ctrl = $componentController('alert', null, {});

      $ctrl.$onInit();

      expect($ctrl.isShown).to.exist;
      expect($ctrl.isShown).to.be.true;
    });

    it('should set `isShown` property to false after closeAlert()', () => {
      let $ctrl = $componentController('alert', null, {});

      $ctrl.$onInit();
      $ctrl.closeAlert();

      expect($ctrl.isShown).to.be.false;
    });
  });

  describe('template', () => {

    let $compile;
    let $rootScope;

    beforeEach(ng.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    xit(`should contain the default template if you create the component
        without bindings`, () => {

        let element = $compile('<alert></alert>')($rootScope);

        $rootScope.$digest();

        expect(element.html()).to.contain('alert-danger');
        expect(element.html()).to.contain('Errore caricamento dati.');
      });

    xit(`should contain the correct message and class you pass to the
        component with bindings`, () => {

        let element = $compile(`
        <alert message="Custom test message." type="success">
        </alert>`)($rootScope);

        $rootScope.$digest();

        expect(element.html()).to.contain('alert-success');
        expect(element.html()).to.contain('Custom test message.');
      });
  });

});
