describe('RgbController', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $controller, Color) {
    this.currentColor = Color.createRandom();

    this.scope = $rootScope.$new();
    this.scope.currentColor = this.currentColor;
    $controller('RgbController', {
      $scope: this.scope
    });
    this.scope.$digest();
  }));

  describe('initialization', function () {
    it('copies the current color RGB values', function () {
      expect(this.scope.rgbValues).toEqual(this.currentColor.rgb);
      expect(this.scope.rgbValues).not.toBe(this.currentColor.rgb);
    });
  });

  describe('on change of rgbValues', function () {
    beforeEach(function () {
      this.scope.rgbValues = [33, 66, 199];
      this.scope.$digest();
    });

    it('sets currentColor rgb', function () {
      expect(this.currentColor.rgb).toEqual([33, 66, 199]);
    });

    it('keeps rgbValues as integers', function () {
      this.scope.rgbValues[1] = '10';
      this.scope.$digest();
      expect(this.currentColor.rgb).toEqual([33, 10, 199]);
    });
  });

  describe('on change of current color', function () {
    beforeEach(function () {
      this.scope.currentColor.setHex('#999999');
      this.scope.$digest();
    });

    it('updates the local hex value', function () {
      expect(this.scope.rgbValues).toEqual([153, 153, 153]);
    });
  });
});
