describe('colorContainer', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $compile, Color) {
    this.scope = $rootScope;
    this.scope.currentColor = Color.createRandom();

    this.element = angular.element("<div color-container></div>");

    $compile(this.element)(this.scope);
    this.scope.$digest();
  }));

  it('sets its element background color to currentColor hex', function () {
    expect(this.element.css('background-color')).toMatch(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/);
  });

  describe('on change of currentColor', function () {
    beforeEach(function () {
      this.scope.currentColor.setHex('#00ffaa');
      this.scope.$digest();
    });

    it('updates the element background color', function () {
      expect(this.element.css('background-color')).toEqual('rgb(0, 255, 170)');
    });
  });
});
