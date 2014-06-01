describe('colorContainer', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function ($rootScope, $compile) {
    this.scope = $rootScope;
    this.scope.currentColor = {
      hex: '#ffaa00'
    };

    this.element = angular.element("<div color-container></div>");

    $compile(this.element)(this.scope);
    this.scope.$digest();
  }));

  it('sets its element background color to currentColor hex', function () {
    expect(this.element.css('background-color')).toEqual('rgb(255, 170, 0)');
  });
});
