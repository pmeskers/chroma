describe('FavoritesController', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $controller) {
    spyOn(localStorage, 'getItem');
    spyOn(localStorage, 'setItem');
    localStorage.getItem.and.returnValue("[" +
      "[120, 3, 200]," +
      "[100, 100, 150]" +
    "]");

    this.initController = function() {
      this.scope = $rootScope.$new();
      $controller('FavoritesController', {
        $scope: this.scope
      });
      this.scope.$digest();
    };
    this.initController();
  }));

  describe('when there are no saved colors', function () {
    beforeEach(function () {
      localStorage.getItem.and.returnValue(null)
      this.initController();
    });

    it('sets savedColors as empty array', function () {
      expect(this.scope.savedColors).toEqual([]);
    });
  });

  describe('when there are saved colors in local storage', function () {
    it('sets savedColors as colors from local storage', function () {
      expect(this.scope.savedColors.length).toEqual(2);
      expect(this.scope.savedColors[0].rgb).toEqual([120, 3, 200]);
      expect(this.scope.savedColors[1].rgb).toEqual([100, 100, 150]);
    });
  });

  describe('.saveCurrentColor', function () {
    beforeEach(inject(function (Color) {
      this.scope.currentColor = Color.createFromRGB(2,3,4);
      this.scope.saveCurrentColor();
    }));

    it('saves scope.currentColor to savedColors in local storage', function () {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'savedColors',
        '[[120,3,200],[100,100,150],[2,3,4]]'
      );
    });

    it('creates a copy of the currentColor', function () {
      expect(this.scope.savedColors[2]).not.toBe(this.scope.currentColor);
    });
  });

  describe('.loadColor', function () {
    beforeEach(inject(function (Color) {
      this.scope.currentColor = Color.createFromRGB(2,3,4);
      this.rndColor = Color.createRandom();
      this.scope.loadColor(this.rndColor);
    }));

    it('sets the scope.currentColor as the specified color', function () {
      expect(this.scope.currentColor).toEqual(this.rndColor);
      expect(this.scope.currentColor).not.toBe(this.rndColor);
    });
  });
});
