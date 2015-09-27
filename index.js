var setCanvasPixels = require('set-canvas-pixels');

function canvasFromNdarray(arr, canvas) {
  canvas = canvas || document.createElement('canvas');

  if(canvas.width  !== arr.shape[0]) canvas.width  = arr.shape[0];
  if(canvas.height !== arr.shape[1]) canvas.height = arr.shape[1];
  
  var pixels = arr.type !== 'uint8_clamped'
    ? new Uint8ClampedArray(arr.data)
    : arr.data;

  setCanvasPixels(canvas, pixels);
  return canvas;
}

module.exports = canvasFromNdarray;