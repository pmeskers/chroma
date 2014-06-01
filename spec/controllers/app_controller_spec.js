describe('AppController', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $controller, Color) {
    this.randomColor = Color.createRandom();
    spyOn(Color, 'createRandom').and.returnValue(this.randomColor);

    this.scope = $rootScope.$new();
    $controller('AppController', {
      $scope: this.scope
    });
    this.scope.$digest();
  }));

  describe('initialization', function () {
    it('sets a current color', function () {
      expect(this.scope.currentColor).toEqual(this.randomColor);
    });

    it('copies the current color for RGB', function () {
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
