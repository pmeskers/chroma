(function () {
  var Color = function Color() {
  };

  _.extend(Color.prototype, {
    setRGB: function (rgbArray) {
      this.rgb = rgbArray;
      this.hex = '#' + RGBtoHex(this.rgb);
      return this;
    },
  });

  function RGBtoHex(rgb) {
    var r16, g16, b16;

    r16 = rgb[0].toString(16);
    if (r16.length === 1) { r16 = "0" + r16; }

    g16 = rgb[1].toString(16);
    if (g16.length === 1) { g16 = "0" + g16; }

    b16 = rgb[2].toString(16);
    if (b16.length === 1) { b16 = "0" + b16; }

    return r16 + g16 + b16;
  }

  chroma.service('Color', function () {
    this.createFromRGB = function (r,g,b) {
      return new Color().setRGB([r,g,b]);
    };

    this.createRandom = function () {
      return new Color().setRGB([
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
      ])
    };
  });
})();
