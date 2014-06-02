describe('Color', function () {
  beforeEach(module('chroma'));

  beforeEach(inject(function (Color) {
    this.ColorService = Color;
  }));

  describe('.createFromRGB', function () {
    beforeEach(function () {
      this.color = this.ColorService.createFromRGB(135, 210, 151);
    });

    itBehavesLikeAColor();

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
    beforeEach(function () {
      this.color = this.ColorService.createRandom();
    });

    itBehavesLikeAColor();

    it('returns a different color each call', function () {
      expect(this.Color).not.toEqual(this.ColorService.createRandom());
    });
  });

  function itBehavesLikeAColor () {
    describe('returns a color', function () {
      beforeEach(function () {
        this.testColor = Object.create(this.color);
      });

      it('has rgb set', function () {
        expect(this.testColor.rgb).toEqual([jasmine.any(Number), jasmine.any(Number), jasmine.any(Number)]);
      });

      it('has hex set', function () {
        expect(this.testColor.hex.length).toEqual(7);
      });

      describe('#setRGB', function () {
        beforeEach(function () {
          this.rgbValues = [20, 30, 40];
          this.testColor.setRGB(this.rgbValues);
        });

        it('updates the rgb value', function () {
          expect(this.testColor.rgb).toEqual(this.rgbValues);
          expect(this.testColor.rgb).not.toBe(this.rgbValues);
        });

        it('updates the hex value', function () {
          expect(this.testColor.hex).toEqual('#141e28');
        });
      });

      describe('#setHex', function () {
        beforeEach(function () {
          this.testColor.setHex('#a1d20f');
        });

        it('updates the rgb value', function () {
          expect(this.testColor.rgb).toEqual([161, 210, 15]);
        });

        it('updates the hex value', function () {
          expect(this.testColor.hex).toEqual('#a1d20f');
        });
      });
    });
  }
});
