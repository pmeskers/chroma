chroma.controller('FavoritesController', ['$scope', 'Color', function ($scope, Color) {
  $scope.savedColors = [];

  _.map(JSON.parse(localStorage.getItem('savedColors')), function (rgb) {
    $scope.savedColors.push(Color.createFromRGB(rgb[0], rgb[1], rgb[2]));
  });

  $scope.saveCurrentColor = function saveCurrentColor () {
    $scope.savedColors.push(_.cloneDeep($scope.currentColor));
    localStorage.setItem('savedColors',
      JSON.stringify(_.pluck($scope.savedColors, 'rgb')));
  };

  $scope.loadColor = function loadColor (color) {
    $scope.currentColor.setRGB(color.rgb);
  }
}]);
