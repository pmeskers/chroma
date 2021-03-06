chroma.controller('RgbController', ['$scope', function ($scope) {
  $scope.$watch('rgbValues', function (oldValue, newValue) {
    if (oldValue !== newValue) {
      $scope.rgbValues = _.map($scope.rgbValues, function (value) {
        return parseInt(value);
      });
      $scope.currentColor.setRGB($scope.rgbValues);
    }
  }, true);

  $scope.$watch('currentColor', function () {
    $scope.rgbValues = _.clone($scope.currentColor.rgb);
  }, true);
}]);
