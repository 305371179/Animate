(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;
  var Graphics = PIXI.Graphics;
  var shapes = PIXI.animate.ShapesCache;

  var Graphic1 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 15, loop: false });
    var instance1 = new Sprite(fromFrame("Bitmap 5"))
      .setTransform(-44.5, -44.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  lib.Graphic2 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("Bitmap 5"))
      .setTransform(-44.5, -44.5);
    this.addChild(instance1, instance1);
  });

  lib.pixi = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 16,
      framerate: 24,
      labels: {
        bbbb: 0,
        kkk: 8
      }
    });
    var instance2 = new Graphics()
      .drawCommands(shapes.pixi[0]);
    var instance1 = new Graphic1(MovieClip.SYNCHED);
    var instance3 = new lib.Graphic2()
      .setTransform(505.5, 44.5);
    this.addTimedChild(instance2, 0, 1)
      .addTimedChild(instance1, 0, 15, {
        "0": {
          x: 44.5,
          y: 44.5
        },
        "1": {
          x: 75.25
        },
        "2": {
          x: 105.95
        },
        "3": {
          x: 136.7
        },
        "4": {
          x: 167.45
        },
        "5": {
          x: 198.14999
        },
        "6": {
          x: 228.89999
        },
        "7": {
          x: 259.64999
        },
        "8": {
          x: 290.35001
        },
        "9": {
          x: 321.10001
        },
        "10": {
          x: 351.85001
        },
        "11": {
          x: 382.54999
        },
        "12": {
          x: 413.29999
        },
        "13": {
          x: 444.04999
        },
        "14": {
          x: 474.75
        }
      })
      .addTimedChild(instance3, 15, 1)
      .addTimedChild(instance2, 0, 1)
      .addTimedChild(instance1, 0, 15, {
        "0": {
          x: 44.5,
          y: 44.5
        },
        "1": {
          x: 75.25
        },
        "2": {
          x: 105.95
        },
        "3": {
          x: 136.7
        },
        "4": {
          x: 167.45
        },
        "5": {
          x: 198.14999
        },
        "6": {
          x: 228.89999
        },
        "7": {
          x: 259.64999
        },
        "8": {
          x: 290.35001
        },
        "9": {
          x: 321.10001
        },
        "10": {
          x: 351.85001
        },
        "11": {
          x: 382.54999
        },
        "12": {
          x: 413.29999
        },
        "13": {
          x: 444.04999
        },
        "14": {
          x: 474.75
        }
      })
      .addTimedChild(instance3, 15, 1)
      .addAction(function () {
        stop()
      }, 0)
      .addAction(function () {
        stop()
      }, 15);
  });

  lib.pixi.assets = {
    "Bitmap 5": "images/Bitmap 5.png",
    "pixi": "images/pixi.shapes.json"
  };
})(PIXI, lib = lib || {});
var lib;