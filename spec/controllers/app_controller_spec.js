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
  });
});
