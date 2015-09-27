canvas-from-ndarray
===================
### Updates a canvas RGBA pixels from an ndarray

Updates a canvas RGBA pixels from a ndarray with shape `[width, height, 4]` and with underlying array structure ordered as `[R, G, B, A, R, G, B, A, ...]`. If no canvas is provided one is created internally.

Install
-------

```bash
$ npm install canvas-from-ndarray
```

Usage
-----

```javascript
var canvasFromNdarray = require('canvas-from-ndarray');

var canvas = canvasFromNdarray(arr/*, canvas */); // updates the provided canvas if available
```