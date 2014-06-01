chroma.controller('AppController', ['$scope', 'Color', function ($scope, Color) {
  $scope.currentColor = Color.createRandom();
}]);
