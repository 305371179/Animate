(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Graphics = PIXI.Graphics;
  var shapes = PIXI.animate.ShapesCache;

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 2,
      framerate: 24
    });
    var instance1 = new Graphics()
      .drawCommands(shapes.pixi[0]);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  lib.pixi.assets = {
    "pixi": "images/pixi.shapes.json"
  };
})(PIXI, lib = lib || {});
var lib;