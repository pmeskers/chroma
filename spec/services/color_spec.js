describe('Color', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function (Color) {
    this.Color = Color;
  }));

  describe('.createFromRGB', function () {
    beforeEach(function () {
      this.color = this.Color.createFromRGB(135, 210, 151);
    });

    it('returns a color object', function () {
      expectToBeColor(this.color);
    });

    describe('the created color', function () {
      it('has the correct RGB set', function () {
        expect(this.color.rgb).toEqual([135, 210, 151]);
      });

      it('has the correct hex set', function () {
        expect(this.color.hex).toEqual('#87d297');
      });
    });
  });

  describe('.createRandom', function () {
    it('returns a random color', function () {
      var randomColor = this.Color.createRandom();

      expectToBeColor(randomColor);
      expect(randomColor).not.toEqual(this.Color.createRandom());
    });
  });

  function expectToBeColor (color) {
    expect(color.rgb).toEqual([jasmine.any(Number), jasmine.any(Number), jasmine.any(Number)]);
    expect(color.hex.length).toEqual(7);
  }
});
