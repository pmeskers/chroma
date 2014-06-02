describe('hexInput', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $compile, Color) {
    this.scope = $rootScope;
    this.scope.hexValue = '#aabbcc';

    this.element = angular.element('<input type="text" hex-input/>');

    $compile(this.element)(this.scope);
    this.scope.$digest();
  }));

  describe('on change of hexValue', function () {
    it('sets the element value to hexValue', function () {
      expect(this.element.val()).toEqual('aabbcc');

      this.scope.hexValue = '#424242';
      this.scope.$digest();
      expect(this.element.val()).toEqual('424242');
    });
  });

  describe('on keyup', function () {
    describe('when the input has a 6-character hex number', function () {
      it('updates the hexValue on scope', function () {
        this.element.val('001122').triggerHandler('keyup');
        this.scope.$digest();
        expect(this.scope.hexValue).toEqual('#001122');
      });
    });

    describe('when the input has an invalid hex number', function () {
      it('does not update the hexValue on scope', function () {
        this.element.val('abc').triggerHandler('keyup');
        this.scope.$digest();
        expect(this.scope.hexValue).toEqual('#aabbcc');

        this.element.val('210efg').triggerHandler('change');
        this.scope.$digest();
        expect(this.scope.hexValue).toEqual('#aabbcc');

        this.element.val('210ef01').triggerHandler('change');
        this.scope.$digest();
        expect(this.scope.hexValue).toEqual('#aabbcc');

        this.element.val('#f0f0f0').triggerHandler('change');
        this.scope.$digest();
        expect(this.scope.hexValue).toEqual('#aabbcc');
      });
    });
  });
});
