describe('HexController', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $controller, Color) {
    this.currentColor = Color.createRandom();

    this.scope = $rootScope.$new();
    this.scope.currentColor = this.currentColor;
    $controller('HexController', {
      $scope: this.scope
    });
    this.scope.$digest();
  }));

  describe('initialization', function () {
    it('copies the current color hex value', function () {
      expect(this.scope.hexValue).toEqual(this.currentColor.hex);
    });
  });

  describe('on change of hexValue', function () {
    beforeEach(function () {
      this.scope.hexValue = '#ff0000';
      this.scope.$digest();
    });

    it('updates the current color hex', function () {
      expect(this.currentColor.hex).toEqual('#ff0000');
    });
  });

  describe('on change of current color', function () {
    beforeEach(function () {
      this.scope.currentColor.setHex('#999999');
      this.scope.$digest();
    });

    it('updates the local hex value', function () {
      expect(this.scope.hexValue).toEqual('#999999');
    });
  });
});
