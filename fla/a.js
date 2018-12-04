(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Graphics = PIXI.Graphics;
  var shapes = PIXI.animate.ShapesCache;

  var Graphic1 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 10, loop: false });
    var instance1 = new Graphics()
      .drawCommands(shapes.a[0])
      .setTransform(-12.5, -24);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic2 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 11, loop: false });
    var instance1 = new Sprite(fromFrame("Bitmap 13"))
      .setTransform(-33, -40.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  lib.Graphic3 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Graphics()
      .drawCommands(shapes.a[0])
      .setTransform(-12.5, -24);
    this.addChild(instance1, instance1);
  });

  lib.a = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 11,
      framerate: 24
    });
    var instance1 = new Graphic1(MovieClip.SYNCHED)
      .setRenderable(false);
    var instance3 = new lib.Graphic3()
      .setRenderable(false)
      .setTransform(12.5, 24);
    var instance2 = new Graphic2(MovieClip.SYNCHED);
    this.addTimedMask(instance2, {
        "0": instance1,
        "10": instance3
      })
      .addTimedChild(instance2, 0, 11, {
        "0": {
          x: 33,
          y: 40.5
        },
        "1": {
          x: 81.4
        },
        "2": {
          x: 129.8
        },
        "3": {
          x: 178.2
        },
        "4": {
          x: 226.6
        },
        "5": {
          x: 275
        },
        "6": {
          x: 323.4
        },
        "7": {
          x: 371.8
        },
        "8": {
          x: 420.2
        },
        "9": {
          x: 468.6
        },
        "10": {
          x: 517
        }
      })
      .addTimedChild(instance1, 0, 10, {
        "0": {
          x: 12.5,
          y: 24
        },
        "10": {}
      })
      .addTimedChild(instance3, 10, 1)
      .addTimedMask(instance2, {
        "0": instance1,
        "10": instance3
      })
      .addTimedChild(instance2, 0, 11, {
        "0": {
          x: 33,
          y: 40.5
        },
        "1": {
          x: 81.4
        },
        "2": {
          x: 129.8
        },
        "3": {
          x: 178.2
        },
        "4": {
          x: 226.6
        },
        "5": {
          x: 275
        },
        "6": {
          x: 323.4
        },
        "7": {
          x: 371.8
        },
        "8": {
          x: 420.2
        },
        "9": {
          x: 468.6
        },
        "10": {
          x: 517
        }
      });
  });

  lib.a.assets = {
    "Bitmap 13": "images/Bitmap 13.png",
    "a": "images/a.shapes.json"
  };
})(PIXI, lib = lib || {});
var lib;