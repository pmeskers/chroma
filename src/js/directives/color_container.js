chroma.directive('colorContainer', function () {
  return {
    link: function (scope, element) {
      element.css('background-color', scope.currentColor.hex);
    }
  };
});
