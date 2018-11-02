(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Text = PIXI.Text;

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 1,
      framerate: 24
    });
    var instance2 = new Text("12345678901234567\n2")
      .setStyle({
        fontFamily: "Times Roman",
        fontSize: 30,
        fill: "#0c0"
      })
      .setAlign("right")
      .setTransform(748, -2);
    this[instance2.name = "aaa"] = instance2;
    var instance1 = new Sprite(fromFrame("Bitmap 3"))
      .setTransform(0, 46);
    this.addChild(instance2, instance1, instance2, instance1);
  });

  lib.pixi.assets = {
    "Bitmap 3": "images/Bitmap 3.png"
  };
})(PIXI, lib = lib || {});
var lib;