import 'angular';
import 'angular-mocks';

const expect = chai.expect;
const ng = angular.mock;

describe('component: page-header', () => {

  beforeEach(ng.module('pageHeader'));

  describe('controller', () => {

    let $componentController;

    beforeEach(ng.inject((_$componentController_) => {
      $componentController = _$componentController_;
    }));

    it('should expose an `addButton` object', () => {
      let bindings = {
        addButton: {
          action: 'some',
          icon: 'fa-filter',
          label: 'custom label',
        }
      };
      let $ctrl = $componentController('pageHeader', null, bindings);

      expect($ctrl.addButton).to.exist;
      expect($ctrl.addButton).to.equal(bindings.addButton);
    });

    it('should expose a `title` string', () => {
      let bindings = { title: 'My custom title' };
      let $ctrl = $componentController('pageHeader', null, bindings);

      expect($ctrl.title).to.exist;
      expect($ctrl.title).to.equal(bindings.title);
    });

    it(`should call the \`onAction\` binding when clicking the button`, () => {
      let onActionSpy = sinon.spy();
      let bindings = {
        addButton: {
          action: 'some',
          icon: 'fa-filter',
          label: 'custom label',
        },
        onAction: onActionSpy,
      };
      let $ctrl = $componentController('pageHeader', null, bindings);

      $ctrl.onAction({
        action: bindings.addButton.action,
      });

      expect(onActionSpy.calledOnce).to.be.true;
      expect(onActionSpy.calledWith({
        action: bindings.addButton.action
      })).to.be.true;
    });
  });

  describe('template', () => {

    let $compile;
    let $rootScope;

    beforeEach(ng.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it(`should contain the binded title in the template`, () => {

      let element = $compile(`
          <page-header title="some title">
          </page-header>`)($rootScope);

      $rootScope.$digest();

      let h1 = element.find('h1');
      expect(h1.html()).contain('some title');
    });

    it(`should transclude correclty next to the title`, () => {
      let testText = 'Some text next to the title';
      let element = $compile(`
      <page-header>
        <next-title>${testText}</next-title>
      </page-header>`)($rootScope);

      $rootScope.$digest();

      let transcludedText = element.find('next-title');

      expect(transcludedText.html()).contain(testText);
    });

    it(`should transclude correclty under the title`, () => {
      let testText = 'Some text under the title';
      let element = $compile(`
      <page-header>
        <under-title>${testText}</under-title>
      </page-header>`)($rootScope);

      $rootScope.$digest();

      let transcludedText = element.find('under-title');

      expect(transcludedText.html()).contain(testText);
    });
  });

});
