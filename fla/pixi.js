(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Graphics = PIXI.Graphics;
  var shapes = PIXI.animate.ShapesCache;

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 14,
      framerate: 24
    });
    var instance4 = new Graphics()
      .drawCommands(shapes.pixi[0]);
    var instance3 = new Sprite(fromFrame("Bitmap 12"));
    var instance2 = new Sprite(fromFrame("Bitmap 11"));
    var instance1 = new Sprite(fromFrame("Bitmap 1"));
    this.addTimedChild(instance4, 0, 13)
      .addTimedChild(instance3, 0, 13, {
        "0": {
          x: 105,
          y: 99
        }
      })
      .addTimedChild(instance2, 0, 13, {
        "0": {
          x: 200,
          y: 262
        }
      })
      .addTimedChild(instance1, 0, 13, {
        "0": {
          x: 384,
          y: 92
        }
      });
  });

  lib.pixi.assets = {
    "Bitmap 1": "images/Bitmap 1.png",
    "Bitmap 11": "images/Bitmap 11.png",
    "Bitmap 12": "images/Bitmap 12.png",
    "pixi": "images/pixi.shapes.json"
  };
})(PIXI, lib = lib || {});
var lib;