(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;

  lib.Graphic1 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("Bitmap 1"))
      .setTransform(0, 0, 0.84033, 2.04082);
    this.addChild(instance1, instance1);
  });

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2,
      framerate: 24
    });
    var instance1 = new Sprite(fromFrame("Bitmap 1"));
    var instance2 = new lib.Graphic1()
      .setTransform(124);
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          y: 31,
          sy: 0.99997
        }
      })
      .addTimedChild(instance2, 1, 1)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          y: 31,
          sy: 0.99997
        }
      })
      .addTimedChild(instance2, 1, 1);
  });

  lib.pixi.assets = {
    "Bitmap 1": "images/Bitmap 1.png"
  };
})(PIXI, lib = lib || {});
var lib;