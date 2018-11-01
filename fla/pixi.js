(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 3,
      framerate: 24
    });
    var instance1 = new Sprite(fromFrame("Bitmap 2"));
    var instance2 = new Sprite(fromFrame("Bitmap 3"))
      .setTransform(121, 96);
    this.addTimedChild(instance1, 0, 1)
      .addTimedChild(instance2, 1, 2)
      .addTimedChild(instance1, 0, 1)
      .addTimedChild(instance2, 1, 2);
  });

  lib.pixi.assets = {
    "Bitmap 2": "images/Bitmap 2.png",
    "Bitmap 3": "images/Bitmap 3.png"
  };
})(PIXI, lib = lib || {});
var lib;