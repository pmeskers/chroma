chroma = angular.module('chroma', []);

var ZeroClipboard = window.ZeroClipboard || false;
if (ZeroClipboard) {
  window.onload = function () {
    var client = new ZeroClipboard( document.getElementById('copy-hex') );
  }
}
