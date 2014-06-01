describe('RgbController', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $controller, Color) {
    this.randomColor = Color.createRandom();

    this.scope = $rootScope.$new();
    this.scope.currentColor = this.randomColor;
    $controller('RgbController', {
      $scope: this.scope
    });
    this.scope.$digest();
  }));

  describe('initialization', function () {
    it('copies the current color RGB values', function () {
      expect(this.scope.rgbValues).toEqual(this.randomColor.rgb);
      expect(this.scope.rgbValues).not.toBe(this.randomColor.rgb);
    });
  });

  describe('on change of rgbValues', function () {
    beforeEach(function () {
      this.scope.rgbValues = [33, 66, 199];
      this.scope.$digest();
    });

    it('sets currentColor rgb', function () {
      expect(this.scope.currentColor.rgb).toEqual([33, 66, 199]);

      this.scope.rgbValues[1] = 10;
      this.scope.$digest();
      expect(this.scope.currentColor.rgb).toEqual([33, 10, 199]);
    });
  });
});
