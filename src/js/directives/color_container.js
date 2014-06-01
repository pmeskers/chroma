chroma.directive('colorContainer', function () {
  return {
    link: function (scope, element) {
      element.css('background-color', scope.currentColor.hex);

      scope.$watch('currentColor', function () {
        element.css('background-color', scope.currentColor.hex);
      }, true);
    }
  };
});
