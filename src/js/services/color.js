(function () {
  var Color = function Color() {
  };

  _.extend(Color.prototype, {
    setRGB: function setRGB (rgbArray) {
      this.rgb = _.map(rgbArray, function(value) {
        return parseInt(value);
      });
      this.hex = '#' + RGBtoHex(this.rgb);
      return this;
    },
    setHex: function setHex (hex) {
      this.hex = hex;
      this.rgb = HextoRGB(this.hex);
      return this;
    }
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

  function HextoRGB(hex) {
    var r10, g10, b10;

    r10 = parseInt(hex.substr(1,2), 16);
    g10 = parseInt(hex.substr(3,2), 16);
    b10 = parseInt(hex.substr(5,2), 16);

    return [r10, g10, b10];
  }

  chroma.service('Color', function () {
    this.createFromRGB = function (r,g,b) {
      var newColor = new Color();
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
