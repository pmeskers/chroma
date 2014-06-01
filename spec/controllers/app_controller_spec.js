describe('AppController', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $controller, Color) {
    this.randomColor = { rgb: [1,1,1] };
    spyOn(Color, 'createRandom').and.returnValue(this.randomColor);

    this.scope = $rootScope.$new();
    $controller('AppController', {
      $scope: this.scope
    });
  }));

  describe('initialization', function () {
    it('sets a current color', function () {
      expect(this.scope.currentColor).toEqual(this.randomColor);
    });
  });
})
