chroma.controller('HexController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.$watch('hexValue', function (oldValue, newValue) {
    if (oldValue !== newValue) {
      $scope.currentColor.setHex($scope.hexValue);
    }
  });

  $scope.$watch('currentColor', function () {
    $scope.hexValue = $scope.currentColor.hex;
  }, true);
}]);
