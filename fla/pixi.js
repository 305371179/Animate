(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 1,
      framerate: 24
    });
    var instance1 = new Sprite(fromFrame("Bitmap 3"))
      .setTransform(108.9, 153.5, 0.99996, 0.99996, 0.7854);
    this.addChild(instance1);
  });

  lib.pixi.assets = {
    "Bitmap 3": "images/Bitmap 3.png"
  };
})(PIXI, lib = lib || {});
var lib;