chroma.controller('AppController', ['$scope', 'Color', function ($scope, Color) {
  $scope.currentColor = Color.createRandom();
  $scope.rgbValues = _.clone($scope.currentColor.rgb);
}]);
