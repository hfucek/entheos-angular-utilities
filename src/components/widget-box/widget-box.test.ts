import 'angular';
import 'angular-mocks';
import { fromJS } from 'immutable';

const expect = chai.expect;
const ng = angular.mock;

describe('component: widgetbox', () => {

  beforeEach(ng.module('widgetBox'));

  describe('controller', () => {

    let $componentController;

    beforeEach(ng.inject((_$componentController_) => {
      $componentController = _$componentController_;
    }));

    it('should expose a `color` string', () => {
      let bindings = { color: 'red' };
      let $ctrl = $componentController('widgetBox', null, bindings);

      expect($ctrl.color).to.exist;
      expect($ctrl.color).to.equal(bindings.color);
    });

    it('should expose an `icon` string', () => {
      let bindings = { icon: 'fa-filter' };
      let $ctrl = $componentController('widgetBox', null, bindings);

      expect($ctrl.icon).to.exist;
      expect($ctrl.icon).to.equal(bindings.icon);
    });

    it('should expose a `link` object', () => {
      let link = {
        text: 'Show something',
        icon: 'arrow-circle-right',
        url: 'http://entheosweb.it'
      };

      let bindings = { link };
      let $ctrl = $componentController('widgetBox', null, bindings);

      expect($ctrl.link).to.exist;
      expect($ctrl.link).to.equal(bindings.link);
    });

    it('should expose a `text` string', () => {
      let bindings = { text: 'some text here' };
      let $ctrl = $componentController('widgetBox', null, bindings);

      expect($ctrl.text).to.exist;
      expect($ctrl.text).to.equal(bindings.text);
    });

    it('should expose a `value` object', () => {
      let value = 45;

      let bindings = { value };
      let $ctrl = $componentController('widgetBox', null, bindings);

      expect($ctrl.value).to.exist;
      expect($ctrl.value).to.equal(bindings.value);
    });

    it(`should set default panel color on init`, () => {
      let $ctrl = $componentController('widgetBox', null, {});
      $ctrl.$onInit();
      expect($ctrl.panelColor).to.be.equal('primary');
    });

    it(`should set custom panel color on init`, () => {
      let $ctrl = $componentController('widgetBox', null, { color: 'green' });
      $ctrl.$onInit();
      expect($ctrl.panelColor).to.be.equal('green');
    });

    it(`should set default icon on init`, () => {
      let $ctrl = $componentController('widgetBox', null, {});
      $ctrl.$onInit();
      expect($ctrl.icon).to.be.equal('tasks');
    });

    it(`should set custom icon on init`, () => {
      let $ctrl = $componentController('widgetBox', null, { icon: 'filter' });
      $ctrl.$onInit();
      expect($ctrl.icon).to.be.equal('filter');
    });

    it(`should set default text on init`, () => {
      let $ctrl = $componentController('widgetBox', null, {});
      $ctrl.$onInit();
      expect($ctrl.text).to.be.equal('Nuovi Compiti!');
    });

    it(`should set custom text on init`, () => {
      let $ctrl = $componentController('widgetBox', null, { text: 'Anything' });
      $ctrl.$onInit();
      expect($ctrl.text).to.be.equal('Anything');
    });

    it(`should set default value on init`, () => {
      let $ctrl = $componentController('widgetBox', null, {});
      $ctrl.$onInit();
      expect($ctrl.value).to.be.equal('12');
    });

    it(`should set custom value on init`, () => {
      let $ctrl = $componentController('widgetBox', null, { value: '99' });
      $ctrl.$onInit();
      expect($ctrl.value).to.be.equal('99');
    });

    it(`should set default link on init`, () => {
      const defaultLink = {
        text: 'Vedi Dettagli',
        icon: 'arrow-circle-right',
        url: 'http://google.com'
      };

      let $ctrl = $componentController('widgetBox', null, {});
      $ctrl.$onInit();
      expect($ctrl.link).to.deep.equal(defaultLink);
    });

    it(`should set custom link on init`, () => {
      const customLink = {
        text: 'See more...',
        icon: 'arrow-circle-right',
        url: 'http://johndoe.com'
      };

      let $ctrl = $componentController('widgetBox', null, { link: customLink });
      $ctrl.$onInit();
      expect($ctrl.link).to.deep.equal(customLink);
    });
  });

  describe('template', () => {

    let $compile;
    let $rootScope;
    let element;

    beforeEach(ng.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;

      $rootScope.color = 'green';
      $rootScope.icon = 'facebook';
      $rootScope.link = {
        text: 'Show more',
        icon: 'arrow-circle-right',
        url: 'http://entheosweb.it'
      };
      $rootScope.text = 'more here';
      $rootScope.value = '87';

      element = $compile(`
        <widget-box color="{{ color }}"
                    icon="{{ icon }}"
                    link="link"
                    text="{{ text }}"
                    value="value"></widget-box>`)($rootScope);
      $rootScope.$digest();
    }));

    it(`should contain panel heading`, () => {
      expect(element.html()).to.contain('<div class="panel-heading">');
    });

    it(`should contain panel footer`, () => {
      expect(element.html()).to.contain('<div class="panel-footer">');
    });

    it(`should contain the correct panel's color`, () => {
      expect(element.html()).to.contain('panel-' + $rootScope.color);
    });

    it(`should contain the correct icon`, () => {
      expect(element.html()).to.contain($rootScope.icon);
    });

    it(`should contain the correct link`, () => {
      expect(element.html()).to.contain($rootScope.link.text);
      expect(element.html()).to.contain('fa-' + $rootScope.link.icon);
      expect(element.html()).to.contain('href="' + $rootScope.link.url + '"');
    });

    it(`should contain the correct text`, () => {
      expect(element.html()).to.contain($rootScope.text);
    });

    xit(`should contain the correct value`, () => {
      expect(element.html()).to.contain($rootScope.value);
    });
  });
});
