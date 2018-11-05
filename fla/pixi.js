(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;

  lib.Symbol_2 = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2
    });
    var instance1 = new Sprite(fromFrame("Bitmap 4"));
    this.addTimedChild(instance1, 0, 2, {
        "0": {
          y: 0
        },
        "1": {
          y: 97
        }
      })
      .addTimedChild(instance1, 0, 2, {
        "0": {
          y: 0
        },
        "1": {
          y: 97
        }
      });
  });

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 3,
      framerate: 3
    });
    var instance1 = new lib.Symbol_2();
    this.addTimedChild(instance1, 0, 3, {
        "0": {
          x: 0
        },
        "1": {
          x: 497
        }
      })
      .addTimedChild(instance1, 0, 3, {
        "0": {
          x: 0
        },
        "1": {
          x: 497
        }
      });
  });

  lib.pixi.assets = {
    "Bitmap 4": "images/Bitmap 4.png"
  };
})(PIXI, lib = lib || {});
var lib;