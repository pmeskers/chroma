chroma.controller('RgbController', ['$scope', function ($scope, Color) {
  $scope.rgbValues = _.clone($scope.currentColor.rgb);

  $scope.$watch('rgbValues', function (oldValue, newValue) {
    if (oldValue !== newValue) {
      $scope.currentColor.setRGB($scope.rgbValues);
      console.log('updated color to', $scope.currentColor);
    }
  }, true);
}]);
