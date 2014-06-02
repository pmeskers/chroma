chroma.directive('hexInput', function () {
  return {
    link: function (scope, element) {
      scope.$watch('hexValue', function () {
        element.val(scope.hexValue.substr(1));
      });

      element.on('keyup', function () {
        var value = element.val();
        if (/^#?[a-f|0-9]{6}$/.test(value)) {
          scope.$apply(function () {
            if (value[0] !== '#') {
              scope.hexValue = '#' + value;
            } else {
              scope.hexValue = value;
            }
          });
        }
      });
    }
  };
});
