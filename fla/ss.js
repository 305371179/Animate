(function (PIXI, lib) {

  var MovieClip = PIXI.animate.MovieClip;
  var Container = PIXI.Container;
  var Sprite = PIXI.Sprite;
  var fromFrame = PIXI.Texture.fromFrame;

  var Graphic1 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("ArmPadL"))
      .setTransform(-15.75, -17.3);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic2 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 3, loop: false });
    var instance1 = new Sprite(fromFrame("SkateCuff4"))
      .setTransform(-8.2, -13.4);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic3 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("ArmStrapL2"))
      .setTransform(-9.45, -9.25);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic4 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("AboveArm1"));
    var instance2 = new Sprite(fromFrame("AboveArm2"));
    var instance3 = new Sprite(fromFrame("AboveArm4"));
    var instance4 = new Sprite(fromFrame("AboveArm6"));
    var instance5 = new Sprite(fromFrame("AboveArm8"));
    var instance6 = new Sprite(fromFrame("AboveArm10"));
    var instance7 = new Sprite(fromFrame("AboveArm12"));
    var instance8 = new Sprite(fromFrame("AboveArm13"));
    var instance9 = new Sprite(fromFrame("AboveArm14"));
    var instance10 = new Sprite(fromFrame("AboveArm16"));
    var instance11 = new Sprite(fromFrame("AboveArm18"));
    var instance12 = new Sprite(fromFrame("AboveArm22"));
    var instance13 = new Sprite(fromFrame("AboveArm24"));
    var instance14 = new Sprite(fromFrame("AboveArm26"));
    var instance15 = new Sprite(fromFrame("AboveArm27"))
      .setTransform(-17.65, 23.8);
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          x: -11.4,
          y: 17.35
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -9.55,
          y: 8.6
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 2, {
        "3": {
          x: -9.5,
          y: 6.4
        },
        "5": {}
      })
      .addTimedChild(instance4, 5, 2, {
        "5": {
          x: -9.35,
          y: 5.55
        },
        "7": {}
      })
      .addTimedChild(instance5, 7, 2, {
        "7": {
          x: -10.45,
          y: 14.05
        },
        "9": {}
      })
      .addTimedChild(instance6, 9, 2, {
        "9": {
          x: -17.25,
          y: 9.2
        },
        "11": {}
      })
      .addTimedChild(instance7, 11, 1, {
        "11": {
          x: -51.05,
          y: 11.9
        },
        "12": {}
      })
      .addTimedChild(instance8, 12, 1, {
        "12": {
          x: -101.7,
          y: 13.6
        },
        "13": {}
      })
      .addTimedChild(instance9, 13, 2, {
        "13": {
          x: -122.45,
          y: -0.65
        },
        "15": {}
      })
      .addTimedChild(instance10, 15, 2, {
        "15": {
          x: -130.2,
          y: -20.6
        },
        "17": {}
      })
      .addTimedChild(instance11, 17, 4, {
        "17": {
          x: -130.1,
          y: -23.6
        },
        "21": {}
      })
      .addTimedChild(instance12, 21, 2, {
        "21": {
          x: -119.8,
          y: -6.95
        },
        "23": {}
      })
      .addTimedChild(instance13, 23, 2, {
        "23": {
          x: -110.5,
          y: 7.05
        },
        "25": {}
      })
      .addTimedChild(instance14, 25, 1, {
        "25": {
          x: -66.7,
          y: 12
        },
        "26": {}
      })
      .addTimedChild(instance15, 26, 1)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          x: -11.4,
          y: 17.35
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -9.55,
          y: 8.6
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 2, {
        "3": {
          x: -9.5,
          y: 6.4
        },
        "5": {}
      })
      .addTimedChild(instance4, 5, 2, {
        "5": {
          x: -9.35,
          y: 5.55
        },
        "7": {}
      })
      .addTimedChild(instance5, 7, 2, {
        "7": {
          x: -10.45,
          y: 14.05
        },
        "9": {}
      })
      .addTimedChild(instance6, 9, 2, {
        "9": {
          x: -17.25,
          y: 9.2
        },
        "11": {}
      })
      .addTimedChild(instance7, 11, 1, {
        "11": {
          x: -51.05,
          y: 11.9
        },
        "12": {}
      })
      .addTimedChild(instance8, 12, 1, {
        "12": {
          x: -101.7,
          y: 13.6
        },
        "13": {}
      })
      .addTimedChild(instance9, 13, 2, {
        "13": {
          x: -122.45,
          y: -0.65
        },
        "15": {}
      })
      .addTimedChild(instance10, 15, 2, {
        "15": {
          x: -130.2,
          y: -20.6
        },
        "17": {}
      })
      .addTimedChild(instance11, 17, 4, {
        "17": {
          x: -130.1,
          y: -23.6
        },
        "21": {}
      })
      .addTimedChild(instance12, 21, 2, {
        "21": {
          x: -119.8,
          y: -6.95
        },
        "23": {}
      })
      .addTimedChild(instance13, 23, 2, {
        "23": {
          x: -110.5,
          y: 7.05
        },
        "25": {}
      })
      .addTimedChild(instance14, 25, 1, {
        "25": {
          x: -66.7,
          y: 12
        },
        "26": {}
      })
      .addTimedChild(instance15, 26, 1);
  });

  var Graphic5 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("ApronReg2"));
    var instance2 = new Sprite(fromFrame("ApronReg3"));
    var instance3 = new Sprite(fromFrame("ApronReg5"));
    var instance4 = new Sprite(fromFrame("ApronReg6"));
    var instance5 = new Sprite(fromFrame("ApronReg7"));
    var instance6 = new Sprite(fromFrame("ApronReg9"));
    var instance7 = new Sprite(fromFrame("ApronReg11"));
    var instance8 = new Sprite(fromFrame("ApronReg12"));
    var instance9 = new Sprite(fromFrame("ApronReg13"));
    var instance10 = new Sprite(fromFrame("ApronReg14"));
    var instance11 = new Sprite(fromFrame("ApronReg16"));
    var instance12 = new Sprite(fromFrame("ApronReg17"));
    var instance13 = new Sprite(fromFrame("ApronReg19"));
    var instance14 = new Sprite(fromFrame("ApronReg20"));
    var instance15 = new Sprite(fromFrame("ApronReg21"));
    var instance16 = new Sprite(fromFrame("ApronReg23"));
    var instance17 = new Sprite(fromFrame("ApronReg25"));
    var instance18 = new Sprite(fromFrame("ApronReg26"));
    var instance19 = new Sprite(fromFrame("ApronReg27"));
    var instance20 = new Sprite(fromFrame("ApronReg1"))
      .setTransform(-60, -71.65);
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          x: -60,
          y: -71.65
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -60,
          y: -71.65
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 1, {
        "3": {
          x: -60,
          y: -71.65
        },
        "4": {}
      })
      .addTimedChild(instance4, 4, 1, {
        "4": {
          x: -60,
          y: -71.65
        },
        "5": {}
      })
      .addTimedChild(instance5, 5, 2, {
        "5": {
          x: -60,
          y: -71.65
        },
        "7": {}
      })
      .addTimedChild(instance6, 7, 2, {
        "7": {
          x: -60,
          y: -71.65
        },
        "9": {}
      })
      .addTimedChild(instance7, 9, 1, {
        "9": {
          x: -59.35,
          y: -71.65
        },
        "10": {}
      })
      .addTimedChild(instance8, 10, 1, {
        "10": {
          x: -59.35,
          y: -71.65
        },
        "11": {}
      })
      .addTimedChild(instance9, 11, 1, {
        "11": {
          x: -58.3,
          y: -71.95
        },
        "12": {}
      })
      .addTimedChild(instance10, 12, 2, {
        "12": {
          x: -58.3,
          y: -71.95
        },
        "14": {}
      })
      .addTimedChild(instance11, 14, 1, {
        "14": {
          x: -58.3,
          y: -71.95
        },
        "15": {}
      })
      .addTimedChild(instance12, 15, 2, {
        "15": {
          x: -58.3,
          y: -71.95
        },
        "17": {}
      })
      .addTimedChild(instance13, 17, 1, {
        "17": {
          x: -58.3,
          y: -71.95
        },
        "18": {}
      })
      .addTimedChild(instance14, 18, 1, {
        "18": {
          x: -58.3,
          y: -71.95
        },
        "19": {}
      })
      .addTimedChild(instance15, 19, 2, {
        "19": {
          x: -58.3,
          y: -71.95
        },
        "21": {}
      })
      .addTimedChild(instance16, 21, 2, {
        "21": {
          x: -58.3,
          y: -71.95
        },
        "23": {}
      })
      .addTimedChild(instance17, 23, 1, {
        "23": {
          x: -59.35,
          y: -71.65
        },
        "24": {}
      })
      .addTimedChild(instance18, 24, 1, {
        "24": {
          x: -59.35,
          y: -71.65
        },
        "25": {}
      })
      .addTimedChild(instance19, 25, 1, {
        "25": {
          x: -60,
          y: -71.65
        },
        "26": {}
      })
      .addTimedChild(instance20, 26, 1)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          x: -60,
          y: -71.65
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -60,
          y: -71.65
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 1, {
        "3": {
          x: -60,
          y: -71.65
        },
        "4": {}
      })
      .addTimedChild(instance4, 4, 1, {
        "4": {
          x: -60,
          y: -71.65
        },
        "5": {}
      })
      .addTimedChild(instance5, 5, 2, {
        "5": {
          x: -60,
          y: -71.65
        },
        "7": {}
      })
      .addTimedChild(instance6, 7, 2, {
        "7": {
          x: -60,
          y: -71.65
        },
        "9": {}
      })
      .addTimedChild(instance7, 9, 1, {
        "9": {
          x: -59.35,
          y: -71.65
        },
        "10": {}
      })
      .addTimedChild(instance8, 10, 1, {
        "10": {
          x: -59.35,
          y: -71.65
        },
        "11": {}
      })
      .addTimedChild(instance9, 11, 1, {
        "11": {
          x: -58.3,
          y: -71.95
        },
        "12": {}
      })
      .addTimedChild(instance10, 12, 2, {
        "12": {
          x: -58.3,
          y: -71.95
        },
        "14": {}
      })
      .addTimedChild(instance11, 14, 1, {
        "14": {
          x: -58.3,
          y: -71.95
        },
        "15": {}
      })
      .addTimedChild(instance12, 15, 2, {
        "15": {
          x: -58.3,
          y: -71.95
        },
        "17": {}
      })
      .addTimedChild(instance13, 17, 1, {
        "17": {
          x: -58.3,
          y: -71.95
        },
        "18": {}
      })
      .addTimedChild(instance14, 18, 1, {
        "18": {
          x: -58.3,
          y: -71.95
        },
        "19": {}
      })
      .addTimedChild(instance15, 19, 2, {
        "19": {
          x: -58.3,
          y: -71.95
        },
        "21": {}
      })
      .addTimedChild(instance16, 21, 2, {
        "21": {
          x: -58.3,
          y: -71.95
        },
        "23": {}
      })
      .addTimedChild(instance17, 23, 1, {
        "23": {
          x: -59.35,
          y: -71.65
        },
        "24": {}
      })
      .addTimedChild(instance18, 24, 1, {
        "24": {
          x: -59.35,
          y: -71.65
        },
        "25": {}
      })
      .addTimedChild(instance19, 25, 1, {
        "25": {
          x: -60,
          y: -71.65
        },
        "26": {}
      })
      .addTimedChild(instance20, 26, 1);
  });

  var Graphic6 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 3, loop: false });
    var instance1 = new Sprite(fromFrame("LegPadR"))
      .setTransform(-10, -11.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic7 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 7, loop: false });
    var instance1 = new Sprite(fromFrame("Skate34R2"));
    var instance2 = new Sprite(fromFrame("Skate34R1"));
    var instance3 = new Sprite(fromFrame("Skate34R2"));
    var instance4 = new Sprite(fromFrame("Skate34R1"));
    var instance5 = new Sprite(fromFrame("Skate34R2"));
    var instance6 = new Sprite(fromFrame("Skate34R3"));
    var instance7 = new Sprite(fromFrame("Skate34R1"))
      .setTransform(0, 0.25);
    this.addTimedChild(instance1, 0, 1)
      .addTimedChild(instance2, 1, 1, {
        "1": {
          y: 0.25
        },
        "2": {}
      })
      .addTimedChild(instance3, 2, 1)
      .addTimedChild(instance4, 3, 1, {
        "3": {
          y: 0.25
        },
        "4": {}
      })
      .addTimedChild(instance5, 4, 1)
      .addTimedChild(instance6, 5, 1)
      .addTimedChild(instance7, 6, 1)
      .addTimedChild(instance1, 0, 1)
      .addTimedChild(instance2, 1, 1, {
        "1": {
          y: 0.25
        },
        "2": {}
      })
      .addTimedChild(instance3, 2, 1)
      .addTimedChild(instance4, 3, 1, {
        "3": {
          y: 0.25
        },
        "4": {}
      })
      .addTimedChild(instance5, 4, 1)
      .addTimedChild(instance6, 5, 1)
      .addTimedChild(instance7, 6, 1);
  });

  var Graphic8 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 13, loop: false });
    var instance1 = new Sprite(fromFrame("CuffSm"))
      .setTransform(-12.3, -9.6);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic9 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("AboveLeg1"));
    var instance2 = new Sprite(fromFrame("AboveLeg2"));
    var instance3 = new Sprite(fromFrame("AboveLeg4"));
    var instance4 = new Sprite(fromFrame("AboveLeg8"));
    var instance5 = new Sprite(fromFrame("AboveLeg10"));
    var instance6 = new Sprite(fromFrame("AboveLeg12"));
    var instance7 = new Sprite(fromFrame("AboveLeg13"));
    var instance8 = new Sprite(fromFrame("AboveLeg14"));
    var instance9 = new Sprite(fromFrame("AboveLeg16"));
    var instance10 = new Sprite(fromFrame("AboveLeg18"));
    var instance11 = new Sprite(fromFrame("AboveLeg22"));
    var instance12 = new Sprite(fromFrame("AboveLeg24"));
    var instance13 = new Sprite(fromFrame("AboveLeg26"));
    var instance14 = new Sprite(fromFrame("AboveLeg27"))
      .setTransform(-75.85, 98.1);
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          x: -105.75,
          y: 89.15
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -109.2,
          y: 84.15
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 4, {
        "3": {
          x: -109.4,
          y: 83.7
        },
        "7": {}
      })
      .addTimedChild(instance4, 7, 2, {
        "7": {
          x: -108.25,
          y: 87
        },
        "9": {}
      })
      .addTimedChild(instance5, 9, 2, {
        "9": {
          x: -104.05,
          y: 91.2
        },
        "11": {}
      })
      .addTimedChild(instance6, 11, 1, {
        "11": {
          x: -98.25,
          y: 98.75
        },
        "12": {}
      })
      .addTimedChild(instance7, 12, 1, {
        "12": {
          x: -63.7,
          y: 99.4
        },
        "13": {}
      })
      .addTimedChild(instance8, 13, 2, {
        "13": {
          x: -37.15,
          y: 101.6
        },
        "15": {}
      })
      .addTimedChild(instance9, 15, 2, {
        "15": {
          x: -36.35,
          y: 97.05
        },
        "17": {}
      })
      .addTimedChild(instance10, 17, 4, {
        "17": {
          x: -36.05,
          y: 92.95
        },
        "21": {}
      })
      .addTimedChild(instance11, 21, 2, {
        "21": {
          x: -34.3,
          y: 102.45
        },
        "23": {}
      })
      .addTimedChild(instance12, 23, 2, {
        "23": {
          x: -34,
          y: 106.5
        },
        "25": {}
      })
      .addTimedChild(instance13, 25, 1, {
        "25": {
          x: -70.15,
          y: 103.9
        },
        "26": {}
      })
      .addTimedChild(instance14, 26, 1)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          x: -105.75,
          y: 89.15
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -109.2,
          y: 84.15
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 4, {
        "3": {
          x: -109.4,
          y: 83.7
        },
        "7": {}
      })
      .addTimedChild(instance4, 7, 2, {
        "7": {
          x: -108.25,
          y: 87
        },
        "9": {}
      })
      .addTimedChild(instance5, 9, 2, {
        "9": {
          x: -104.05,
          y: 91.2
        },
        "11": {}
      })
      .addTimedChild(instance6, 11, 1, {
        "11": {
          x: -98.25,
          y: 98.75
        },
        "12": {}
      })
      .addTimedChild(instance7, 12, 1, {
        "12": {
          x: -63.7,
          y: 99.4
        },
        "13": {}
      })
      .addTimedChild(instance8, 13, 2, {
        "13": {
          x: -37.15,
          y: 101.6
        },
        "15": {}
      })
      .addTimedChild(instance9, 15, 2, {
        "15": {
          x: -36.35,
          y: 97.05
        },
        "17": {}
      })
      .addTimedChild(instance10, 17, 4, {
        "17": {
          x: -36.05,
          y: 92.95
        },
        "21": {}
      })
      .addTimedChild(instance11, 21, 2, {
        "21": {
          x: -34.3,
          y: 102.45
        },
        "23": {}
      })
      .addTimedChild(instance12, 23, 2, {
        "23": {
          x: -34,
          y: 106.5
        },
        "25": {}
      })
      .addTimedChild(instance13, 25, 1, {
        "25": {
          x: -70.15,
          y: 103.9
        },
        "26": {}
      })
      .addTimedChild(instance14, 26, 1);
  });

  var Graphic10 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("TorsoSkate3"));
    var instance2 = new Sprite(fromFrame("TorsoSkate2"));
    var instance3 = new Sprite(fromFrame("TorsoSkate1"));
    var instance4 = new Sprite(fromFrame("TorsoSkate2"));
    var instance5 = new Sprite(fromFrame("TorsoSkate3"))
      .setTransform(-135.3, -71.65);
    this.addTimedChild(instance1, 0, 9, {
        "0": {
          x: -135.3,
          y: -71.65
        },
        "9": {}
      })
      .addTimedChild(instance2, 9, 2, {
        "9": {
          x: -134.85,
          y: -71.65
        },
        "11": {}
      })
      .addTimedChild(instance3, 11, 12, {
        "11": {
          x: -134.85,
          y: -71.65
        },
        "23": {}
      })
      .addTimedChild(instance4, 23, 2, {
        "23": {
          x: -134.85,
          y: -71.65
        },
        "25": {}
      })
      .addTimedChild(instance5, 25, 2)
      .addTimedChild(instance1, 0, 9, {
        "0": {
          x: -135.3,
          y: -71.65
        },
        "9": {}
      })
      .addTimedChild(instance2, 9, 2, {
        "9": {
          x: -134.85,
          y: -71.65
        },
        "11": {}
      })
      .addTimedChild(instance3, 11, 12, {
        "11": {
          x: -134.85,
          y: -71.65
        },
        "23": {}
      })
      .addTimedChild(instance4, 23, 2, {
        "23": {
          x: -134.85,
          y: -71.65
        },
        "25": {}
      })
      .addTimedChild(instance5, 25, 2);
  });

  var Graphic11 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("TieLoop2"));
    var instance2 = new Sprite(fromFrame("TieLoop3"));
    var instance3 = new Sprite(fromFrame("TieLoop1"));
    var instance4 = new Sprite(fromFrame("TieLoop2"));
    var instance5 = new Sprite(fromFrame("TieLoop3"));
    var instance6 = new Sprite(fromFrame("TieLoop1"));
    var instance7 = new Sprite(fromFrame("TieLoop2"));
    var instance8 = new Sprite(fromFrame("TieLoop3"));
    var instance9 = new Sprite(fromFrame("TieLoop1"));
    var instance10 = new Sprite(fromFrame("TieLoop2"));
    var instance11 = new Sprite(fromFrame("TieLoop3"));
    var instance12 = new Sprite(fromFrame("TieLoop1"));
    var instance13 = new Sprite(fromFrame("TieLoop2"));
    var instance14 = new Sprite(fromFrame("TieLoop3"));
    var instance15 = new Sprite(fromFrame("TieLoop1"));
    var instance16 = new Sprite(fromFrame("TieLoop2"));
    var instance17 = new Sprite(fromFrame("TieLoop3"));
    var instance18 = new Sprite(fromFrame("TieLoop1"));
    var instance19 = new Sprite(fromFrame("TieLoop2"));
    var instance20 = new Sprite(fromFrame("TieLoop3"));
    var instance21 = new Sprite(fromFrame("TieLoop1"));
    var instance22 = new Sprite(fromFrame("TieLoop2"));
    var instance23 = new Sprite(fromFrame("TieLoop3"));
    var instance24 = new Sprite(fromFrame("TieLoop1"));
    var instance25 = new Sprite(fromFrame("TieLoop2"));
    var instance26 = new Sprite(fromFrame("TieLoop1"))
      .setTransform(-1, 9.35);
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          x: -1.2,
          y: 10.1
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 1, {
        "1": {
          x: -1.05,
          y: 9.65
        },
        "2": {}
      })
      .addTimedChild(instance3, 2, 1, {
        "2": {
          x: -1,
          y: 9.35
        },
        "3": {}
      })
      .addTimedChild(instance4, 3, 1, {
        "3": {
          x: -1.2,
          y: 10.1
        },
        "4": {}
      })
      .addTimedChild(instance5, 4, 1, {
        "4": {
          x: -1.05,
          y: 9.65
        },
        "5": {}
      })
      .addTimedChild(instance6, 5, 1, {
        "5": {
          x: -1,
          y: 9.35
        },
        "6": {}
      })
      .addTimedChild(instance7, 6, 1, {
        "6": {
          x: -1.2,
          y: 10.1
        },
        "7": {}
      })
      .addTimedChild(instance8, 7, 1, {
        "7": {
          x: -1.05,
          y: 9.65
        },
        "8": {}
      })
      .addTimedChild(instance9, 8, 1, {
        "8": {
          x: -1,
          y: 9.35
        },
        "9": {}
      })
      .addTimedChild(instance10, 9, 1, {
        "9": {
          x: -1.2,
          y: 10.1
        },
        "10": {}
      })
      .addTimedChild(instance11, 10, 1, {
        "10": {
          x: -1.05,
          y: 9.65
        },
        "11": {}
      })
      .addTimedChild(instance12, 11, 1, {
        "11": {
          x: -1,
          y: 9.35
        },
        "12": {}
      })
      .addTimedChild(instance13, 12, 1, {
        "12": {
          x: -1.2,
          y: 10.1
        },
        "13": {}
      })
      .addTimedChild(instance14, 13, 1, {
        "13": {
          x: -1.05,
          y: 9.65
        },
        "14": {}
      })
      .addTimedChild(instance15, 14, 1, {
        "14": {
          x: -1,
          y: 9.35
        },
        "15": {}
      })
      .addTimedChild(instance16, 15, 1, {
        "15": {
          x: -1.2,
          y: 10.1
        },
        "16": {}
      })
      .addTimedChild(instance17, 16, 1, {
        "16": {
          x: -1.05,
          y: 9.65
        },
        "17": {}
      })
      .addTimedChild(instance18, 17, 1, {
        "17": {
          x: -1,
          y: 9.35
        },
        "18": {}
      })
      .addTimedChild(instance19, 18, 1, {
        "18": {
          x: -1.2,
          y: 10.1
        },
        "19": {}
      })
      .addTimedChild(instance20, 19, 1, {
        "19": {
          x: -1.05,
          y: 9.65
        },
        "20": {}
      })
      .addTimedChild(instance21, 20, 1, {
        "20": {
          x: -1,
          y: 9.35
        },
        "21": {}
      })
      .addTimedChild(instance22, 21, 1, {
        "21": {
          x: -1.2,
          y: 10.1
        },
        "22": {}
      })
      .addTimedChild(instance23, 22, 1, {
        "22": {
          x: -1.05,
          y: 9.65
        },
        "23": {}
      })
      .addTimedChild(instance24, 23, 1, {
        "23": {
          x: -1,
          y: 9.35
        },
        "24": {}
      })
      .addTimedChild(instance25, 24, 1, {
        "24": {
          x: -1.2,
          y: 10.1
        },
        "25": {}
      })
      .addTimedChild(instance26, 25, 2)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          x: -1.2,
          y: 10.1
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 1, {
        "1": {
          x: -1.05,
          y: 9.65
        },
        "2": {}
      })
      .addTimedChild(instance3, 2, 1, {
        "2": {
          x: -1,
          y: 9.35
        },
        "3": {}
      })
      .addTimedChild(instance4, 3, 1, {
        "3": {
          x: -1.2,
          y: 10.1
        },
        "4": {}
      })
      .addTimedChild(instance5, 4, 1, {
        "4": {
          x: -1.05,
          y: 9.65
        },
        "5": {}
      })
      .addTimedChild(instance6, 5, 1, {
        "5": {
          x: -1,
          y: 9.35
        },
        "6": {}
      })
      .addTimedChild(instance7, 6, 1, {
        "6": {
          x: -1.2,
          y: 10.1
        },
        "7": {}
      })
      .addTimedChild(instance8, 7, 1, {
        "7": {
          x: -1.05,
          y: 9.65
        },
        "8": {}
      })
      .addTimedChild(instance9, 8, 1, {
        "8": {
          x: -1,
          y: 9.35
        },
        "9": {}
      })
      .addTimedChild(instance10, 9, 1, {
        "9": {
          x: -1.2,
          y: 10.1
        },
        "10": {}
      })
      .addTimedChild(instance11, 10, 1, {
        "10": {
          x: -1.05,
          y: 9.65
        },
        "11": {}
      })
      .addTimedChild(instance12, 11, 1, {
        "11": {
          x: -1,
          y: 9.35
        },
        "12": {}
      })
      .addTimedChild(instance13, 12, 1, {
        "12": {
          x: -1.2,
          y: 10.1
        },
        "13": {}
      })
      .addTimedChild(instance14, 13, 1, {
        "13": {
          x: -1.05,
          y: 9.65
        },
        "14": {}
      })
      .addTimedChild(instance15, 14, 1, {
        "14": {
          x: -1,
          y: 9.35
        },
        "15": {}
      })
      .addTimedChild(instance16, 15, 1, {
        "15": {
          x: -1.2,
          y: 10.1
        },
        "16": {}
      })
      .addTimedChild(instance17, 16, 1, {
        "16": {
          x: -1.05,
          y: 9.65
        },
        "17": {}
      })
      .addTimedChild(instance18, 17, 1, {
        "17": {
          x: -1,
          y: 9.35
        },
        "18": {}
      })
      .addTimedChild(instance19, 18, 1, {
        "18": {
          x: -1.2,
          y: 10.1
        },
        "19": {}
      })
      .addTimedChild(instance20, 19, 1, {
        "19": {
          x: -1.05,
          y: 9.65
        },
        "20": {}
      })
      .addTimedChild(instance21, 20, 1, {
        "20": {
          x: -1,
          y: 9.35
        },
        "21": {}
      })
      .addTimedChild(instance22, 21, 1, {
        "21": {
          x: -1.2,
          y: 10.1
        },
        "22": {}
      })
      .addTimedChild(instance23, 22, 1, {
        "22": {
          x: -1.05,
          y: 9.65
        },
        "23": {}
      })
      .addTimedChild(instance24, 23, 1, {
        "23": {
          x: -1,
          y: 9.35
        },
        "24": {}
      })
      .addTimedChild(instance25, 24, 1, {
        "24": {
          x: -1.2,
          y: 10.1
        },
        "25": {}
      })
      .addTimedChild(instance26, 25, 2);
  });

  var Graphic12 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("CollarFR"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic13 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("PupilL"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic14 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("PupilR"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic15 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("Bitmap 1"))
      .setTransform(-93.25, -61.05);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic16 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("StrapL"))
      .setTransform(-12.6, -88.2);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic17 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("EyeL1"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic18 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("EyeR1"))
      .setTransform(-0.1);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic19 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("GlassesArmL"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic20 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("GlassesMid"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic21 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("Nose"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic22 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("EarL"))
      .setTransform(1.45);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic23 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("Hair"))
      .setTransform(129.3, 130.05);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic24 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("Mouth3"))
      .setTransform(-1.75, -1.4);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic25 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("BrowL1"))
      .setTransform(2.25, -0.1);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic26 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("BrowR1"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic27 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("Head1"))
      .setTransform(-0.6);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic28 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("StrapR"))
      .setTransform(-7.5, -73.95);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic29 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("CollarBK"));
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic30 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 11, loop: false });
    var instance1 = new Sprite(fromFrame("ArmStrapR21"))
      .setTransform(-7.7, -8.8);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic31 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 26, loop: false });
    var instance1 = new Sprite(fromFrame("SkateCuff3"));
    var instance2 = new Sprite(fromFrame("SkateCuff4"));
    var instance3 = new Sprite(fromFrame("SkateCuff3"));
    var instance4 = new Sprite(fromFrame("SkateCuff5"))
      .setTransform(-8.65, -14.6);
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          x: -8.9,
          y: -17.8
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 8, {
        "1": {
          x: -8.2,
          y: -13.4
        },
        "9": {}
      })
      .addTimedChild(instance3, 9, 2, {
        "9": {
          x: -8.9,
          y: -17.8
        },
        "11": {}
      })
      .addTimedChild(instance4, 11, 15)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          x: -8.9,
          y: -17.8
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 8, {
        "1": {
          x: -8.2,
          y: -13.4
        },
        "9": {}
      })
      .addTimedChild(instance3, 9, 2, {
        "9": {
          x: -8.9,
          y: -17.8
        },
        "11": {}
      })
      .addTimedChild(instance4, 11, 15);
  });

  var Graphic32 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("ArmBack1"));
    var instance2 = new Sprite(fromFrame("ArmBack2"));
    var instance3 = new Sprite(fromFrame("ArmBack4"));
    var instance4 = new Sprite(fromFrame("ArmBack6"));
    var instance5 = new Sprite(fromFrame("ArmBack8"));
    var instance6 = new Sprite(fromFrame("ArmBack10"));
    var instance7 = new Sprite(fromFrame("ArmBack12"));
    var instance8 = new Sprite(fromFrame("ArmBack13"));
    var instance9 = new Sprite(fromFrame("ArmBack14"));
    var instance10 = new Sprite(fromFrame("ArmBack16"));
    var instance11 = new Sprite(fromFrame("ArmBack18"));
    var instance12 = new Sprite(fromFrame("ArmBack22"));
    var instance13 = new Sprite(fromFrame("ArmBack24"));
    var instance14 = new Sprite(fromFrame("ArmBack26"));
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          x: -103.25,
          y: 9.75
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -119.45,
          y: -1.95
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 2, {
        "3": {
          x: -119.6,
          y: -3.65
        },
        "5": {}
      })
      .addTimedChild(instance4, 5, 2, {
        "5": {
          x: -119.7,
          y: -4.2
        },
        "7": {}
      })
      .addTimedChild(instance5, 7, 2, {
        "7": {
          x: -115.6,
          y: -0.85
        },
        "9": {}
      })
      .addTimedChild(instance6, 9, 2, {
        "9": {
          x: -95.35,
          y: 7.8
        },
        "11": {}
      })
      .addTimedChild(instance7, 11, 1, {
        "11": {
          x: -9.55,
          y: 58.15
        },
        "12": {}
      })
      .addTimedChild(instance8, 12, 1, {
        "12": {
          x: 9.4,
          y: 19.1
        },
        "13": {}
      })
      .addTimedChild(instance9, 13, 2, {
        "13": {
          x: 12.3,
          y: 11.35
        },
        "15": {}
      })
      .addTimedChild(instance10, 15, 2, {
        "15": {
          x: 9.65,
          y: 3.5
        },
        "17": {}
      })
      .addTimedChild(instance11, 17, 4, {
        "17": {
          x: 9.7,
          y: 1.35
        },
        "21": {}
      })
      .addTimedChild(instance12, 21, 2, {
        "21": {
          x: 11.6,
          y: 11.3
        },
        "23": {}
      })
      .addTimedChild(instance13, 23, 2, {
        "23": {
          x: 11.7,
          y: 14.4
        },
        "25": {}
      })
      .addTimedChild(instance14, 25, 1, {
        "25": {
          x: 8.2,
          y: 18.1
        },
        "26": {}
      })
      .addTimedChild(instance1, 0, 1, {
        "0": {
          x: -103.25,
          y: 9.75
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -119.45,
          y: -1.95
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 2, {
        "3": {
          x: -119.6,
          y: -3.65
        },
        "5": {}
      })
      .addTimedChild(instance4, 5, 2, {
        "5": {
          x: -119.7,
          y: -4.2
        },
        "7": {}
      })
      .addTimedChild(instance5, 7, 2, {
        "7": {
          x: -115.6,
          y: -0.85
        },
        "9": {}
      })
      .addTimedChild(instance6, 9, 2, {
        "9": {
          x: -95.35,
          y: 7.8
        },
        "11": {}
      })
      .addTimedChild(instance7, 11, 1, {
        "11": {
          x: -9.55,
          y: 58.15
        },
        "12": {}
      })
      .addTimedChild(instance8, 12, 1, {
        "12": {
          x: 9.4,
          y: 19.1
        },
        "13": {}
      })
      .addTimedChild(instance9, 13, 2, {
        "13": {
          x: 12.3,
          y: 11.35
        },
        "15": {}
      })
      .addTimedChild(instance10, 15, 2, {
        "15": {
          x: 9.65,
          y: 3.5
        },
        "17": {}
      })
      .addTimedChild(instance11, 17, 4, {
        "17": {
          x: 9.7,
          y: 1.35
        },
        "21": {}
      })
      .addTimedChild(instance12, 21, 2, {
        "21": {
          x: 11.6,
          y: 11.3
        },
        "23": {}
      })
      .addTimedChild(instance13, 23, 2, {
        "23": {
          x: 11.7,
          y: 14.4
        },
        "25": {}
      })
      .addTimedChild(instance14, 25, 1, {
        "25": {
          x: 8.2,
          y: 18.1
        },
        "26": {}
      });
  });

  var Graphic33 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 11, loop: false });
    var instance1 = new Sprite(fromFrame("ArmPadR22"))
      .setTransform(-8.6, -9.15);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic34 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("LegPadR"))
      .setTransform(-10, -11.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic35 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("Skate34R1"));
    var instance2 = new Sprite(fromFrame("Skate34R2"));
    var instance3 = new Sprite(fromFrame("Skate34R3"));
    var instance4 = new Sprite(fromFrame("Skate34R1"));
    var instance5 = new Sprite(fromFrame("Skate34R2"));
    var instance6 = new Sprite(fromFrame("Skate34R1"))
      .setTransform(0, 0.25);
    this.addTimedChild(instance1, 0, 4, {
        "0": {
          y: 0.25
        },
        "4": {}
      })
      .addTimedChild(instance2, 4, 1)
      .addTimedChild(instance3, 5, 1)
      .addTimedChild(instance4, 6, 5, {
        "6": {
          y: 0.25
        },
        "11": {}
      })
      .addTimedChild(instance5, 11, 1)
      .addTimedChild(instance6, 12, 15)
      .addTimedChild(instance1, 0, 4, {
        "0": {
          y: 0.25
        },
        "4": {}
      })
      .addTimedChild(instance2, 4, 1)
      .addTimedChild(instance3, 5, 1)
      .addTimedChild(instance4, 6, 5, {
        "6": {
          y: 0.25
        },
        "11": {}
      })
      .addTimedChild(instance5, 11, 1)
      .addTimedChild(instance6, 12, 15);
  });

  var Graphic36 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 12, loop: false });
    var instance1 = new Sprite(fromFrame("CuffSmall"))
      .setTransform(-11.95, -7.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic37 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 27, loop: false });
    var instance1 = new Sprite(fromFrame("LegBack1"));
    var instance2 = new Sprite(fromFrame("LegBack2"));
    var instance3 = new Sprite(fromFrame("LegBack4"));
    var instance4 = new Sprite(fromFrame("LegBack8"));
    var instance5 = new Sprite(fromFrame("LegBack10"));
    var instance6 = new Sprite(fromFrame("LegBack12"));
    var instance7 = new Sprite(fromFrame("LegBack13"));
    var instance8 = new Sprite(fromFrame("LegBack14"));
    var instance9 = new Sprite(fromFrame("LegBack16"));
    var instance10 = new Sprite(fromFrame("LegBack18"));
    var instance11 = new Sprite(fromFrame("LegBack22"));
    var instance12 = new Sprite(fromFrame("LegBack24"));
    var instance13 = new Sprite(fromFrame("LegBack26"));
    var instance14 = new Sprite(fromFrame("LegBack27"))
      .setTransform(-41.85, 111.35);
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          x: -24.55,
          y: 102.2
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -23.9,
          y: 88.8
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 4, {
        "3": {
          x: -23.7,
          y: 90.4
        },
        "7": {}
      })
      .addTimedChild(instance4, 7, 2, {
        "7": {
          x: -25.35,
          y: 90.75
        },
        "9": {}
      })
      .addTimedChild(instance5, 9, 2, {
        "9": {
          x: -25.35,
          y: 90.75
        },
        "11": {}
      })
      .addTimedChild(instance6, 11, 1, {
        "11": {
          x: -57.85,
          y: 107
        },
        "12": {}
      })
      .addTimedChild(instance7, 12, 1, {
        "12": {
          x: -62.35,
          y: 110.2
        },
        "13": {}
      })
      .addTimedChild(instance8, 13, 2, {
        "13": {
          x: -79.4,
          y: 102.35
        },
        "15": {}
      })
      .addTimedChild(instance9, 15, 2, {
        "15": {
          x: -80.4,
          y: 95.5
        },
        "17": {}
      })
      .addTimedChild(instance10, 17, 4, {
        "17": {
          x: -80.8,
          y: 91.95
        },
        "21": {}
      })
      .addTimedChild(instance11, 21, 2, {
        "21": {
          x: -80.3,
          y: 92.25
        },
        "23": {}
      })
      .addTimedChild(instance12, 23, 2, {
        "23": {
          x: -77.05,
          y: 96.3
        },
        "25": {}
      })
      .addTimedChild(instance13, 25, 1, {
        "25": {
          x: -61.7,
          y: 104.4
        },
        "26": {}
      })
      .addTimedChild(instance14, 26, 1)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          x: -24.55,
          y: 102.2
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 2, {
        "1": {
          x: -23.9,
          y: 88.8
        },
        "3": {}
      })
      .addTimedChild(instance3, 3, 4, {
        "3": {
          x: -23.7,
          y: 90.4
        },
        "7": {}
      })
      .addTimedChild(instance4, 7, 2, {
        "7": {
          x: -25.35,
          y: 90.75
        },
        "9": {}
      })
      .addTimedChild(instance5, 9, 2, {
        "9": {
          x: -25.35,
          y: 90.75
        },
        "11": {}
      })
      .addTimedChild(instance6, 11, 1, {
        "11": {
          x: -57.85,
          y: 107
        },
        "12": {}
      })
      .addTimedChild(instance7, 12, 1, {
        "12": {
          x: -62.35,
          y: 110.2
        },
        "13": {}
      })
      .addTimedChild(instance8, 13, 2, {
        "13": {
          x: -79.4,
          y: 102.35
        },
        "15": {}
      })
      .addTimedChild(instance9, 15, 2, {
        "15": {
          x: -80.4,
          y: 95.5
        },
        "17": {}
      })
      .addTimedChild(instance10, 17, 4, {
        "17": {
          x: -80.8,
          y: 91.95
        },
        "21": {}
      })
      .addTimedChild(instance11, 21, 2, {
        "21": {
          x: -80.3,
          y: 92.25
        },
        "23": {}
      })
      .addTimedChild(instance12, 23, 2, {
        "23": {
          x: -77.05,
          y: 96.3
        },
        "25": {}
      })
      .addTimedChild(instance13, 25, 1, {
        "25": {
          x: -61.7,
          y: 104.4
        },
        "26": {}
      })
      .addTimedChild(instance14, 26, 1);
  });

  var Graphic38 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 24, loop: false });
    var instance1 = new Sprite(fromFrame("SkateCuff4"));
    var instance2 = new Sprite(fromFrame("SkateCuff1"));
    var instance3 = new Sprite(fromFrame("SkateCuff2"));
    var instance4 = new Sprite(fromFrame("SkateCuff3"));
    var instance5 = new Sprite(fromFrame("SkateCuff1"))
      .setTransform(-12.15, -17.3);
    this.addTimedChild(instance1, 0, 8, {
        "0": {
          x: -8.2,
          y: -13.4
        },
        "8": {}
      })
      .addTimedChild(instance2, 8, 1, {
        "8": {
          x: -12.15,
          y: -17.3
        },
        "9": {}
      })
      .addTimedChild(instance3, 9, 1, {
        "9": {
          x: -9.2,
          y: -16.25
        },
        "10": {}
      })
      .addTimedChild(instance4, 10, 2, {
        "10": {
          x: -8.9,
          y: -17.8
        },
        "12": {}
      })
      .addTimedChild(instance5, 12, 12)
      .addTimedChild(instance1, 0, 8, {
        "0": {
          x: -8.2,
          y: -13.4
        },
        "8": {}
      })
      .addTimedChild(instance2, 8, 1, {
        "8": {
          x: -12.15,
          y: -17.3
        },
        "9": {}
      })
      .addTimedChild(instance3, 9, 1, {
        "9": {
          x: -9.2,
          y: -16.25
        },
        "10": {}
      })
      .addTimedChild(instance4, 10, 2, {
        "10": {
          x: -8.9,
          y: -17.8
        },
        "12": {}
      })
      .addTimedChild(instance5, 12, 12);
  });

  var Graphic39 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 12, loop: false });
    var instance1 = new Sprite(fromFrame("LegPadR"))
      .setTransform(-10, -11.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic40 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 19, loop: false });
    var instance1 = new Sprite(fromFrame("Skate34R1"));
    var instance2 = new Sprite(fromFrame("Skate34R2"));
    var instance3 = new Sprite(fromFrame("Skate34R1"));
    var instance4 = new Sprite(fromFrame("Skate34R2"));
    var instance5 = new Sprite(fromFrame("Skate34R1"));
    var instance6 = new Sprite(fromFrame("Skate34R2"));
    var instance7 = new Sprite(fromFrame("Skate34R3"));
    var instance8 = new Sprite(fromFrame("Skate34R1"));
    var instance9 = new Sprite(fromFrame("Skate34R3"));
    var instance10 = new Sprite(fromFrame("Skate34R1"));
    var instance11 = new Sprite(fromFrame("Skate34R2"));
    var instance12 = new Sprite(fromFrame("Skate34R3"));
    var instance13 = new Sprite(fromFrame("Skate34R1"));
    var instance14 = new Sprite(fromFrame("Skate34R2"));
    var instance15 = new Sprite(fromFrame("Skate34R3"));
    var instance16 = new Sprite(fromFrame("Skate34R1"));
    var instance17 = new Sprite(fromFrame("Skate34R3"));
    this.addTimedChild(instance1, 0, 1, {
        "0": {
          y: 0.25
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 1)
      .addTimedChild(instance3, 2, 1, {
        "2": {
          y: 0.25
        },
        "3": {}
      })
      .addTimedChild(instance4, 3, 1)
      .addTimedChild(instance5, 4, 3, {
        "4": {
          y: 0.25
        },
        "7": {}
      })
      .addTimedChild(instance6, 7, 1)
      .addTimedChild(instance7, 8, 1)
      .addTimedChild(instance8, 9, 1, {
        "9": {
          y: 0.25
        },
        "10": {}
      })
      .addTimedChild(instance9, 10, 1)
      .addTimedChild(instance10, 11, 1, {
        "11": {
          y: 0.25
        },
        "12": {}
      })
      .addTimedChild(instance11, 12, 1)
      .addTimedChild(instance12, 13, 1)
      .addTimedChild(instance13, 14, 1, {
        "14": {
          y: 0.25
        },
        "15": {}
      })
      .addTimedChild(instance14, 15, 1)
      .addTimedChild(instance15, 16, 1)
      .addTimedChild(instance16, 17, 1, {
        "17": {
          y: 0.25
        },
        "18": {}
      })
      .addTimedChild(instance17, 18, 1)
      .addTimedChild(instance1, 0, 1, {
        "0": {
          y: 0.25
        },
        "1": {}
      })
      .addTimedChild(instance2, 1, 1)
      .addTimedChild(instance3, 2, 1, {
        "2": {
          y: 0.25
        },
        "3": {}
      })
      .addTimedChild(instance4, 3, 1)
      .addTimedChild(instance5, 4, 3, {
        "4": {
          y: 0.25
        },
        "7": {}
      })
      .addTimedChild(instance6, 7, 1)
      .addTimedChild(instance7, 8, 1)
      .addTimedChild(instance8, 9, 1, {
        "9": {
          y: 0.25
        },
        "10": {}
      })
      .addTimedChild(instance9, 10, 1)
      .addTimedChild(instance10, 11, 1, {
        "11": {
          y: 0.25
        },
        "12": {}
      })
      .addTimedChild(instance11, 12, 1)
      .addTimedChild(instance12, 13, 1)
      .addTimedChild(instance13, 14, 1, {
        "14": {
          y: 0.25
        },
        "15": {}
      })
      .addTimedChild(instance14, 15, 1)
      .addTimedChild(instance15, 16, 1)
      .addTimedChild(instance16, 17, 1, {
        "17": {
          y: 0.25
        },
        "18": {}
      })
      .addTimedChild(instance17, 18, 1);
  });

  var Graphic41 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 14, loop: false });
    var instance1 = new Sprite(fromFrame("ArmStrapR21"))
      .setTransform(-7.7, -8.8);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic42 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 15, loop: false });
    var instance1 = new Sprite(fromFrame("ArmPadR21"));
    var instance2 = new Sprite(fromFrame("ArmPadR22"))
      .setTransform(-8.6, -9.15);
    this.addTimedChild(instance1, 0, 14, {
        "0": {
          x: -14.2,
          y: -14.9
        },
        "14": {}
      })
      .addTimedChild(instance2, 14, 1)
      .addTimedChild(instance1, 0, 14, {
        "0": {
          x: -14.2,
          y: -14.9
        },
        "14": {}
      })
      .addTimedChild(instance2, 14, 1);
  });

  var Graphic43 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 15, loop: false });
    var instance1 = new Sprite(fromFrame("CuffSm"))
      .setTransform(-12.3, -9.6);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic44 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 13, loop: false });
    var instance1 = new Sprite(fromFrame("CuffSmall"))
      .setTransform(-11.95, -7.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  var Graphic45 = MovieClip.extend(function (mode) {
    MovieClip.call(this, { mode: mode, duration: 12, loop: false });
    var instance1 = new Sprite(fromFrame("LegPadR"))
      .setTransform(-10, -11.5);
    this.addTimedChild(instance1)
      .addTimedChild(instance1);
  });

  lib.Graphic46 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("Skate34R1"))
      .setTransform(0, 0.25);
    this.addChild(instance1, instance1);
  });

  lib.Graphic47 = Container.extend(function () {
    Container.call(this);
    var instance1 = new Sprite(fromFrame("CuffSm"))
      .setTransform(-12.3, -9.6);
    this.addChild(instance1, instance1);
  });

  lib.Fizzy = MovieClip.extend(function () {
    MovieClip.call(this, {
      duration: 27,
      framerate: 30
    });
    var instance37 = new Graphic37(MovieClip.SYNCHED)
      .setTransform(170.1, 250);
    var instance36 = new Graphic36(MovieClip.SYNCHED);
    var instance43 = new Graphic43(MovieClip.SYNCHED);
    var instance35 = new Graphic35(MovieClip.SYNCHED);
    var instance34 = new Graphic34(MovieClip.SYNCHED);
    var instance33 = new Graphic33(MovieClip.SYNCHED);
    var instance42 = new Graphic42(MovieClip.SYNCHED);
    var instance32 = new Graphic32(MovieClip.SYNCHED)
      .setTransform(170.1, 250);
    var instance31 = new Graphic31(MovieClip.SYNCHED);
    var instance30 = new Graphic30(MovieClip.SYNCHED);
    var instance41 = new Graphic41(MovieClip.SYNCHED);
    var instance29 = new Graphic29(MovieClip.SYNCHED);
    var instance28 = new Graphic28(MovieClip.SYNCHED);
    var instance27 = new Graphic27(MovieClip.SYNCHED);
    var instance26 = new Graphic26(MovieClip.SYNCHED);
    var instance25 = new Graphic25(MovieClip.SYNCHED);
    var instance24 = new Graphic24(MovieClip.SYNCHED);
    var instance23 = new Graphic23(MovieClip.SYNCHED);
    var instance22 = new Graphic22(MovieClip.SYNCHED);
    var instance21 = new Graphic21(MovieClip.SYNCHED);
    var instance20 = new Graphic20(MovieClip.SYNCHED);
    var instance19 = new Graphic19(MovieClip.SYNCHED);
    var instance18 = new Graphic18(MovieClip.SYNCHED);
    var instance17 = new Graphic17(MovieClip.SYNCHED);
    var instance16 = new Graphic16(MovieClip.SYNCHED);
    var instance15 = new Graphic15(MovieClip.SYNCHED);
    var instance14 = new Graphic14(MovieClip.SYNCHED);
    var instance13 = new Graphic13(MovieClip.SYNCHED);
    var instance12 = new Graphic12(MovieClip.SYNCHED);
    var instance11 = new Graphic11(MovieClip.SYNCHED);
    var instance10 = new Graphic10(MovieClip.SYNCHED);
    var instance9 = new Graphic9(MovieClip.SYNCHED)
      .setTransform(170.1, 250);
    var instance8 = new Graphic8(MovieClip.SYNCHED);
    var instance44 = new Graphic44(MovieClip.SYNCHED);
    var instance47 = new lib.Graphic47()
      .setTransform(96.95, 373.55, 0.8455, 0.8455, 0, 0.3646, 2.777);
    var instance46 = new lib.Graphic46()
      .setTransform(84.2, 409.95, 0.8515, 0.8401, 0, 4.2423, -1.1007);
    var instance45 = new Graphic45(MovieClip.SYNCHED);
    var instance40 = new Graphic40(MovieClip.SYNCHED);
    var instance39 = new Graphic39(MovieClip.SYNCHED);
    var instance7 = new Graphic7(MovieClip.SYNCHED);
    var instance6 = new Graphic6(MovieClip.SYNCHED);
    var instance5 = new Graphic5(MovieClip.SYNCHED);
    var instance4 = new Graphic4(MovieClip.SYNCHED)
      .setTransform(170.1, 250);
    var instance38 = new Graphic38(MovieClip.SYNCHED);
    var instance3 = new Graphic3(MovieClip.SYNCHED);
    var instance2 = new Graphic2(MovieClip.SYNCHED);
    var instance1 = new Graphic1(MovieClip.SYNCHED);
    this.addTimedChild(instance37)
      .addTimedChild(instance36, 0, 12, {
        "0": {
          x: 150.7,
          y: 426.9,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          x: 154,
          sy: 0.8474,
          kx: 0.0462
        },
        "3": {
          x: 154.7,
          sy: 0.8481,
          kx: 0.0612
        },
        "7": {
          x: 153.65
        },
        "9": {
          x: 150.95
        },
        "11": {
          x: 123.1,
          y: 423.5,
          sx: 1.1235,
          sy: 0.849,
          kx: -0.0251,
          ky: -3.0353
        },
        "12": {}
      })
      .addTimedChild(instance43, 12, 15, {
        "12": {
          x: 109.45,
          y: 401.15,
          sx: 0.7936,
          sy: 0.7936,
          kx: 1.0506,
          ky: 2.091
        },
        "13": {
          x: 92.45,
          y: 377.9,
          sx: 0.8454,
          sy: 0.8454,
          kx: 0.3051,
          ky: 2.8365
        },
        "15": {
          x: 91.65,
          y: 376.05,
          sx: 0.8453,
          sy: 0.8453,
          kx: 0.2911,
          ky: 2.8505
        },
        "17": {
          x: 91.25,
          y: 375.6,
          kx: 0.2863,
          ky: 2.8553
        },
        "21": {
          x: 91.65,
          y: 376,
          sx: 0.8426,
          sy: 0.8481,
          kx: 0.2972,
          ky: 2.8543
        },
        "23": {
          x: 94.2,
          y: 377.7,
          sx: 0.8451,
          sy: 0.8451,
          kx: 0.2694,
          ky: 2.8722
        },
        "25": {
          x: 110.55,
          y: 387.85,
          sx: 0.8436,
          sy: 0.8436,
          kx: 0.1286,
          ky: 3.013
        },
        "26": {
          x: 126.95,
          y: 411.95,
          sx: 0.8152,
          sy: 0.8152,
          kx: 1.2289,
          ky: 1.9127
        }
      })
      .addTimedChild(instance35, 0, 27, {
        "0": {
          x: 183.55,
          y: 425.95,
          sx: 0.7187,
          sy: 0.7349,
          ky: 3.1416
        },
        "1": {
          x: 187.05
        },
        "3": {
          x: 187.85
        },
        "7": {
          x: 187.25,
          sx: 0.726
        },
        "9": {
          x: 184.6
        },
        "11": {
          x: 165.8,
          y: 427.25,
          sx: 0.932,
          sy: 0.7043,
          kx: -0.0251,
          ky: -3.0353
        },
        "12": {
          x: 117.25,
          y: 434.8,
          sx: 0.7419,
          sy: 0.6651,
          kx: -1.4431,
          ky: -1.6985
        },
        "13": {
          x: 65.3,
          y: 395.5,
          sx: 0.7175,
          sy: 0.7337,
          kx: 3.6799,
          ky: -0.5383
        },
        "15": {
          x: 63.05,
          y: 392.3,
          sx: 0.7174,
          sy: 0.7335,
          kx: 3.6265,
          ky: -0.4849
        },
        "17": {
          x: 62.1,
          y: 391.15,
          sx: 0.7173,
          sy: 0.7334,
          kx: 3.6033,
          ky: -0.4617
        },
        "21": {
          x: 63.05,
          y: 391.5,
          sx: 0.7139,
          sy: 0.7369,
          kx: 3.6127,
          ky: -0.4641
        },
        "23": {
          x: 64.5,
          y: 393.15,
          sx: 0.7169,
          sy: 0.733,
          kx: 3.5766,
          ky: -0.435
        },
        "25": {
          x: 78.7,
          y: 394.75,
          sx: 0.7296,
          sy: 0.7002,
          kx: 3.3268,
          ky: -0.1853
        },
        "26": {
          x: 116.1,
          y: 445.35,
          sx: 0.7265,
          sy: 0.7265,
          kx: 4.3439,
          ky: -1.2023
        }
      })
      .addTimedChild(instance34, 0, 27, {
        "0": {
          x: 161.1,
          y: 398.6,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          x: 163.1,
          sy: 0.8474,
          kx: 0.0462
        },
        "3": {
          x: 163.65,
          sy: 0.8481,
          kx: 0.0612
        },
        "7": {
          x: 162.9,
          sy: 0.8473,
          kx: 0.0428
        },
        "9": {
          x: 160.8,
          y: 398.85,
          sx: 0.8464,
          sy: 0.8471,
          kx: -0.0187,
          ky: -3.0801
        },
        "11": {
          x: 146.25,
          y: 399.85,
          sx: 0.8441,
          sy: 0.8448,
          kx: -0.3344,
          ky: -2.7644
        },
        "12": {
          x: 136.05,
          y: 400.6,
          sx: 0.7699,
          sy: 0.8422,
          kx: -0.3469,
          ky: -2.7518
        },
        "13": {
          x: 112.35,
          y: 392.15,
          sx: 0.7706,
          sy: 0.7706,
          kx: 4.6136,
          ky: -1.472
        },
        "15": {
          x: 110.95,
          y: 390.5,
          sx: 0.7703,
          sy: 0.7703,
          kx: 4.5627,
          ky: -1.4211
        },
        "17": {
          x: 110.55,
          y: 390.1,
          kx: 4.5579,
          ky: -1.4163
        },
        "21": {
          x: 111.15,
          y: 390.5,
          sx: 0.7689,
          sy: 0.7716,
          kx: 4.5582,
          ky: -1.4278
        },
        "23": {
          x: 114.25,
          y: 391.75,
          sx: 0.7702,
          sy: 0.7702,
          kx: 4.6111,
          ky: -1.4695
        },
        "25": {
          x: 142.4,
          y: 401.7,
          sx: 0.7691,
          sy: 0.7691,
          kx: -0.7452,
          ky: -2.3964
        },
        "26": {
          x: 148.5,
          y: 399.85,
          sx: 0.7709,
          sy: 0.7709,
          kx: -0.395,
          ky: -2.7466
        }
      })
      .addTimedChild(instance33, 0, 11, {
        "0": {
          x: 121,
          y: 259.05,
          sx: 0.844,
          sy: 0.844,
          r: 0.555
        },
        "1": {
          x: 121.95,
          y: 245.6,
          sx: 0.8448,
          sy: 0.8448,
          r: 0.7946
        },
        "3": {
          x: 122.25,
          y: 243.9,
          sx: 0.8449,
          sy: 0.8449,
          r: 0.8216
        },
        "5": {
          x: 122.75,
          y: 243.35,
          sx: 0.845,
          sy: 0.845,
          r: 0.8353
        },
        "7": {
          x: 121.75,
          y: 247.95,
          sx: 0.8446,
          sy: 0.8446,
          r: 0.7202
        },
        "9": {
          x: 123.15,
          y: 260.45,
          sx: 0.8439,
          sy: 0.8439,
          r: 0.4488
        },
        "11": {}
      })
      .addTimedChild(instance42, 12, 15, {
        "12": {
          x: 196.1,
          y: 304.35,
          sx: 0.8417,
          sy: 0.8417,
          r: -1.6673
        },
        "13": {
          x: 218.9,
          y: 295,
          sx: 0.8426,
          sy: 0.8426,
          r: -1.9999
        },
        "15": {
          x: 222.25,
          y: 289.75,
          sx: 0.843,
          sy: 0.843,
          r: -2.1314
        },
        "17": {
          x: 222.95,
          y: 287.85,
          sx: 0.8431,
          sy: 0.8431,
          r: -2.1716
        },
        "21": {
          x: 219.9,
          y: 294.3,
          sx: 0.8426,
          sy: 0.8426,
          r: -2.0745
        },
        "23": {
          x: 215.9,
          y: 297.6,
          sx: 0.8422,
          sy: 0.8422,
          r: -1.9601
        },
        "25": {
          x: 192.5,
          y: 305,
          sx: 0.8412,
          sy: 0.8412,
          r: -1.5912
        },
        "26": {
          x: 143.6,
          y: 294.15,
          sx: 0.8422,
          sy: 0.8422,
          r: -0.137
        }
      })
      .addTimedChild(instance32)
      .addTimedChild(instance31, 0, 26, {
        "0": {
          x: 85.85,
          y: 278.4,
          sx: 0.8519,
          sy: 0.7038,
          kx: -1.3657,
          ky: 1.4168
        },
        "1": {
          x: 72.8,
          y: 260.65,
          sx: 0.6428,
          sy: 0.6254,
          kx: 0.8136,
          ky: -0.8135
        },
        "3": {
          x: 72.4,
          y: 257.8,
          sx: 0.6429,
          sy: 0.6256,
          kx: 0.764,
          ky: -0.7639
        },
        "5": {
          x: 72.8,
          y: 256.65,
          sx: 0.643,
          kx: 0,
          ky: 0,
          r: -0.7583
        },
        "7": {
          x: 76.6,
          y: 268,
          sx: 0.6419,
          sy: 0.6246,
          r: -1.1083
        },
        "9": {
          x: 90.45,
          y: 291.85,
          sx: 0.852,
          sy: 0.7039,
          kx: -1.3347,
          ky: 1.3858,
          r: 0
        },
        "11": {
          x: 165,
          y: 318.95,
          sx: 0.6769,
          sy: 0.6009,
          kx: 0.2511,
          ky: -0.4434
        },
        "12": {
          x: 220,
          y: 311.4,
          sx: 0.6413,
          sy: 0.627,
          kx: 0.8834,
          ky: -0.9553
        },
        "13": {
          x: 252.05,
          y: 295.1,
          sx: 0.6905,
          sy: 0.6752,
          kx: 1.0453,
          ky: -1.1172
        },
        "15": {
          x: 256.3,
          y: 277.25,
          sx: 0.6917,
          sy: 0.6764,
          kx: 1.4267,
          ky: -1.4988
        },
        "17": {
          x: 256.05,
          y: 275.1,
          sx: 0.6919,
          sy: 0.6759,
          kx: 1.4729,
          ky: -1.5403
        },
        "21": {
          x: 254.35,
          y: 285.7,
          sx: 0.6897,
          sy: 0.6889,
          kx: 1.5353,
          ky: -1.5374
        },
        "23": {
          x: 246.8,
          y: 296.7,
          sx: 0.6889,
          sy: 0.6882,
          kx: 1.177,
          ky: -1.1791
        },
        "25": {
          x: 215.3,
          y: 313.25,
          sx: 0.6881,
          sy: 0.6874,
          kx: 0.8538,
          ky: -0.856
        },
        "26": {}
      })
      .addTimedChild(instance30, 0, 11, {
        "0": {
          x: 124.1,
          y: 266.3,
          sx: 0.8442,
          sy: 0.8442,
          r: 0.4895
        },
        "1": {
          x: 123.2,
          y: 253.4,
          sx: 0.845,
          sy: 0.845,
          r: 0.7291
        },
        "3": {
          x: 123.3,
          y: 251.7,
          sx: 0.8451,
          sy: 0.8451,
          r: 0.7561
        },
        "5": {
          x: 123.65,
          y: 251.25,
          sx: 0.8452,
          sy: 0.8452,
          r: 0.7698
        },
        "7": {
          x: 123.6,
          y: 255.65,
          sx: 0.8448,
          sy: 0.8448,
          r: 0.6547
        },
        "9": {
          x: 126.95,
          y: 267.4,
          sx: 0.8441,
          sy: 0.8441,
          r: 0.3833
        },
        "11": {}
      })
      .addTimedChild(instance41, 12, 14, {
        "12": {
          x: 196.5,
          y: 304.4,
          sx: 0.8423,
          sy: 0.8423,
          r: 1.514
        },
        "13": {
          x: 219.3,
          y: 294.95,
          sx: 0.8435,
          sy: 0.8435,
          r: 1.0722
        },
        "15": {
          x: 222.65,
          y: 289.6,
          sx: 0.844,
          sy: 0.844,
          r: 0.9756
        },
        "17": {
          x: 223.35,
          y: 287.7,
          sx: 0.8441,
          sy: 0.8441,
          r: 0.9354
        },
        "21": {
          x: 220.3,
          y: 294.15,
          sx: 0.8435,
          sy: 0.8435,
          r: 1.0326
        },
        "23": {
          x: 216.3,
          y: 297.8,
          sx: 0.8431,
          sy: 0.8431,
          r: 1.1031
        },
        "25": {
          x: 193.4,
          y: 304.6,
          sx: 0.8418,
          sy: 0.8418,
          kx: 4.6188,
          ky: 1.6644,
          r: 0
        },
        "26": {}
      })
      .addTimedChild(instance29, 0, 27, {
        "0": {
          x: 216.7,
          y: 225.9,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 216.9,
          y: 218.25,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 217.1,
          y: 216,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 216.65,
          y: 221.3,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 215.5,
          y: 223.7,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 214.9,
          y: 225.5,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 214.5,
          y: 231.1,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 213.65,
          y: 223.7,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 212.95,
          y: 213.5,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 212.45,
          y: 212.3,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 212.85,
          y: 217.05,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 213.55,
          y: 220.05,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 214.5,
          y: 224.35,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 216.05,
          y: 234.25,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance28, 0, 27, {
        "0": {
          x: 231.65,
          y: 189.6,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 234.3,
          y: 182.15,
          sx: 0.7898,
          kx: 0.007,
          ky: 3.1332
        },
        "3": {
          x: 236.65,
          y: 180.05,
          sx: 0.7894,
          sy: 0.8063,
          kx: 0.0356,
          ky: 3.103
        },
        "5": {
          x: 237.45,
          sx: 0.7896,
          sy: 0.8064,
          kx: 0.0482,
          ky: 3.0898
        },
        "7": {
          x: 236.8,
          y: 185,
          sy: 0.8065,
          kx: 0.0667,
          ky: 3.0711
        },
        "9": {
          x: 234.9,
          y: 187,
          sy: 0.8064,
          kx: 0.0894,
          ky: 3.0485
        },
        "11": {
          x: 232.3,
          y: 188.55,
          sy: 0.8066,
          kx: 0.0844,
          ky: 3.0544
        },
        "12": {
          x: 229.6,
          y: 194.05,
          sx: 0.7894,
          sy: 0.8065,
          kx: 0.0606,
          ky: 3.0796
        },
        "13": {
          x: 225.35,
          y: 186.3,
          sx: 0.7893,
          sy: 0.8063,
          kx: 0.0313,
          ky: 3.111
        },
        "15": {
          x: 222.95,
          y: 175.85,
          sx: 0.7892,
          kx: 0.0389,
          ky: 3.1041
        },
        "17": {
          x: 219.15,
          y: 174.65,
          sx: 0.7896,
          sy: 0.8065,
          kx: -0.0021,
          ky: -3.136
        },
        "19": {
          x: 218.55,
          y: 174.6,
          sx: 0.7897,
          kx: -0.0112,
          ky: -3.1264
        },
        "21": {
          x: 219.4,
          y: 179.35,
          sy: 0.8066,
          kx: -0.0236,
          ky: -3.114
        },
        "23": {
          x: 221.4,
          y: 182.55,
          kx: -0.0248,
          ky: -3.1134
        },
        "25": {
          x: 224.3,
          y: 187.1,
          kx: -0.0301,
          ky: -3.1089
        },
        "26": {
          x: 230.4,
          y: 197.8,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance27, 0, 27, {
        "0": {
          x: 246.65,
          y: 74.6,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 247.6,
          y: 67.1,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 248.5,
          y: 65.05,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 246.05,
          y: 69.85,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 241.5,
          y: 71.7,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 238.25,
          y: 73.1,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 236.45,
          y: 78.45,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 232.85,
          y: 70.6,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 228.85,
          y: 60.05,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 226.9,
          y: 58.75,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 229.15,
          y: 63.6,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 232.05,
          y: 66.95,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 236.45,
          y: 71.65,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 243.35,
          y: 82.5,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance26, 0, 27, {
        "0": {
          x: 246.2,
          y: 119,
          sx: 0.789,
          sy: 0.8052,
          kx: -0.1731,
          ky: -2.962
        },
        "1": {
          x: 246.95,
          y: 111.55,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.1778,
          ky: -2.9573
        },
        "3": {
          x: 247.65,
          y: 109.45,
          sx: 0.7891,
          sy: 0.8054,
          kx: -0.1829,
          ky: -2.9522
        },
        "7": {
          x: 245.75,
          y: 114.3,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.1695,
          ky: -2.9656
        },
        "9": {
          x: 242.25,
          y: 116.1,
          sx: 0.7891,
          sy: 0.8054,
          kx: -0.1468,
          ky: -2.9883
        },
        "11": {
          x: 239.75,
          y: 117.45,
          sx: 0.7893,
          sy: 0.8056,
          kx: -0.1294,
          ky: -3.0057
        },
        "12": {
          x: 238.35,
          y: 122.8,
          kx: -0.1203,
          ky: -3.0148
        },
        "13": {
          x: 235.55,
          y: 114.9,
          kx: -0.1021,
          ky: -3.033
        },
        "15": {
          x: 232.5,
          y: 104.35,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.0805,
          ky: -3.0546
        },
        "17": {
          x: 230.95,
          y: 103,
          kx: -0.0714,
          ky: -3.0637
        },
        "21": {
          x: 232.65,
          y: 107.9,
          kx: -0.0837,
          ky: -3.0514
        },
        "23": {
          x: 234.9,
          y: 111.3,
          sx: 0.7893,
          sy: 0.8056,
          kx: -0.098,
          ky: -3.0371
        },
        "25": {
          x: 238.35,
          y: 116,
          kx: -0.1203,
          ky: -3.0148
        },
        "26": {
          x: 243.7,
          y: 126.9,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.1553,
          ky: -2.9798
        }
      })
      .addTimedChild(instance25, 0, 27, {
        "0": {
          x: 179.45,
          y: 109.95,
          sx: 0.7867,
          sy: 0.8038,
          kx: -0.0404,
          ky: -3.1004
        },
        "1": {
          x: 180.25,
          y: 102.15,
          sx: 0.7869,
          sy: 0.8039,
          kx: -0.0451,
          ky: -3.0957
        },
        "3": {
          x: 180.95,
          y: 99.75,
          sx: 0.7868,
          kx: -0.0502,
          ky: -3.0906
        },
        "7": {
          x: 179,
          y: 105.5,
          sx: 0.7869,
          sy: 0.804,
          kx: -0.0368,
          ky: -3.1041
        },
        "9": {
          x: 175.25,
          y: 108.8,
          sy: 0.8039,
          kx: -0.0141,
          ky: -3.1267
        },
        "11": {
          x: 172.65,
          y: 111.3,
          sx: 0.787,
          sy: 0.8041,
          kx: 0.0033,
          ky: 3.139
        },
        "12": {
          x: 171.15,
          y: 117.3,
          kx: 0.0124,
          ky: 3.13
        },
        "13": {
          x: 168.35,
          y: 110.6,
          sy: 0.804,
          kx: 0.0306,
          ky: 3.1118
        },
        "15": {
          x: 165.15,
          y: 101.45,
          sx: 0.7869,
          kx: 0.0522,
          ky: 3.0902
        },
        "17": {
          x: 163.6,
          y: 100.75,
          kx: 0.0613,
          ky: 3.081
        },
        "21": {
          x: 165.35,
          y: 104.8,
          sx: 0.787,
          kx: 0.049,
          ky: 3.0934
        },
        "23": {
          x: 167.65,
          y: 107.25,
          kx: 0.0347,
          ky: 3.1077
        },
        "25": {
          x: 171.15,
          y: 110.5,
          sy: 0.8041,
          kx: 0.0124,
          ky: 3.13
        },
        "26": {
          x: 176.75,
          y: 119.05,
          sx: 0.7869,
          sy: 0.804,
          kx: -0.0225,
          ky: -3.1183
        }
      })
      .addTimedChild(instance24, 0, 27, {
        "0": {
          x: 211.15,
          y: 189.8,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 211.5,
          y: 182.2,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 211.85,
          y: 179.95,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 210.95,
          y: 185.25,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 209,
          y: 187.8,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 207.75,
          y: 189.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 207,
          y: 195.4,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 205.55,
          y: 188.05,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 204.05,
          y: 178.1,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 203.2,
          y: 177,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 204,
          y: 181.55,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 205.2,
          y: 184.55,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 207,
          y: 188.6,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 209.85,
          y: 198.35,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance23, 0, 27, {
        "0": {
          x: 251.6,
          y: 8.5,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 252.85,
          y: 1,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 254.1,
          y: -1.05,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 250.75,
          y: 3.75,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 244.7,
          y: 5.45,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 240.3,
          y: 6.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 237.9,
          y: 12.1,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 233.1,
          y: 4.25,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 227.65,
          y: -6.25,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 225.1,
          y: -7.55,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 228.2,
          y: -2.7,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 232,
          y: 0.65,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 237.9,
          y: 5.3,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 247.1,
          y: 16.25,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance22, 0, 27, {
        "0": {
          x: 140.75,
          y: 144.45,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 141.3,
          y: 136.55,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 141.9,
          y: 133.9,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 140.35,
          y: 140.15,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 137.4,
          y: 144.35,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 135.4,
          y: 147.55,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 134.35,
          y: 153.85,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 132.1,
          y: 147.8,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 129.75,
          y: 139.45,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 128.55,
          y: 139.05,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 129.85,
          y: 142.7,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 131.65,
          y: 144.65,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 134.35,
          y: 147.05,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 138.65,
          y: 154.25,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance21, 0, 27, {
        "0": {
          x: 227.3,
          y: 155.55,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 227.85,
          y: 147.95,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 228.35,
          y: 145.75,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 226.95,
          y: 150.9,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 224.25,
          y: 153.05,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 222.4,
          y: 154.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 221.35,
          y: 160.25,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 219.3,
          y: 152.7,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 217,
          y: 142.4,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 215.8,
          y: 141.2,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 217.1,
          y: 145.95,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 218.8,
          y: 149.1,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 221.35,
          y: 153.45,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 225.4,
          y: 163.75,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance20, 0, 27, {
        "0": {
          x: 224.15,
          y: 147.8,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 224.7,
          y: 140.2,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 225.25,
          y: 138,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 223.8,
          y: 143.15,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 220.85,
          y: 145.45,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 218.9,
          y: 147.2,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 217.75,
          y: 152.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 215.55,
          y: 145.2,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 213.1,
          y: 135.05,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 211.85,
          y: 133.9,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 213.25,
          y: 138.55,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 215.05,
          y: 141.7,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 217.75,
          y: 145.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 222.05,
          y: 156.1,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance19, 0, 27, {
        "0": {
          x: 151.85,
          y: 152.4,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 152.4,
          y: 144.45,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 152.9,
          y: 141.9,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 151.5,
          y: 148.05,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 148.75,
          y: 151.9,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 146.9,
          y: 154.95,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 145.85,
          y: 161.1,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 143.8,
          y: 154.9,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 141.55,
          y: 146.25,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 140.45,
          y: 145.8,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 141.65,
          y: 149.55,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 143.3,
          y: 151.7,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 145.85,
          y: 154.3,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 149.9,
          y: 162,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance18, 0, 27, {
        "0": {
          x: 245.45,
          y: 134.8,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 246.1,
          y: 127.35,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 246.7,
          y: 125.25,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 245.05,
          y: 130.1,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 241.85,
          y: 131.95,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 239.65,
          y: 133.3,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 238.4,
          y: 138.6,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 235.9,
          y: 130.7,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 233.15,
          y: 120.1,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 231.8,
          y: 118.8,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 233.3,
          y: 123.7,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 235.3,
          y: 127.15,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 238.4,
          y: 131.8,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 243.2,
          y: 142.75,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance17, 0, 27, {
        "0": {
          x: 177.35,
          y: 132.3,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 178,
          y: 124.55,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 178.6,
          y: 122.1,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 176.95,
          y: 127.85,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 173.7,
          y: 131.25,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 171.5,
          y: 133.8,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 170.25,
          y: 139.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 167.85,
          y: 133.1,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 165.15,
          y: 123.9,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 163.8,
          y: 123.25,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 165.25,
          y: 127.3,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 167.25,
          y: 129.75,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 170.25,
          y: 132.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 175.05,
          y: 141.45,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance16, 0, 27, {
        "0": {
          x: 131.1,
          y: 165.2,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 134.85,
          y: 157.2,
          sx: 0.7898,
          sy: 0.8068,
          kx: 0.0295,
          ky: 3.1097
        },
        "3": {
          x: 139.35,
          y: 154.5,
          sx: 0.7892,
          sy: 0.8057,
          kx: 0.1004,
          ky: 3.0354
        },
        "5": {
          x: 140.2,
          y: 154.55,
          sx: 0.7896,
          sy: 0.8059,
          kx: 0.1167,
          ky: 3.0185
        },
        "7": {
          x: 139.35,
          y: 160.8,
          sx: 0.7897,
          sy: 0.806,
          kx: 0.1387,
          ky: 2.996
        },
        "9": {
          x: 136.95,
          y: 165,
          sy: 0.8059,
          kx: 0.1615,
          ky: 2.9734
        },
        "11": {
          x: 133.95,
          y: 168.4,
          sx: 0.7896,
          sy: 0.8061,
          kx: 0.1527,
          ky: 2.9832
        },
        "12": {
          x: 129.9,
          y: 174.85,
          sx: 0.7891,
          sy: 0.806,
          kx: 0.1035,
          ky: 3.0349
        },
        "13": {
          x: 123.05,
          y: 169.1,
          sx: 0.7889,
          sy: 0.8059,
          kx: 0.0257,
          ky: 3.1169
        },
        "15": {
          x: 118.85,
          y: 160.75,
          sx: 0.7888,
          sy: 0.8057,
          kx: 0.0043,
          ky: 3.1401
        },
        "17": {
          x: 115.7,
          y: 160.2,
          sx: 0.7896,
          sy: 0.8063,
          kx: -0.0317,
          ky: -3.1051
        },
        "19": {
          x: 115.2,
          y: 160.1,
          sx: 0.7897,
          kx: -0.0407,
          ky: -3.0957
        },
        "21": {
          x: 116.05,
          y: 163.55,
          kx: -0.0582,
          ky: -3.0779
        },
        "23": {
          x: 118.2,
          y: 165.35,
          sx: 0.7896,
          kx: -0.0591,
          ky: -3.0776
        },
        "25": {
          x: 122.1,
          y: 167.7,
          sx: 0.7895,
          sy: 0.8065,
          kx: -0.0459,
          ky: -3.0924
        },
        "26": {
          x: 129.35,
          y: 175.15,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance15, 0, 27, {
        "0": {
          x: 178.45,
          y: 96.3,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 179.25,
          y: 88.5,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 180.05,
          y: 86.1,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 177.85,
          y: 91.85,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 173.85,
          y: 95.2,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 171,
          y: 97.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 169.4,
          y: 103.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 166.3,
          y: 97.1,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 162.85,
          y: 87.95,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 161.15,
          y: 87.3,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 163.1,
          y: 91.35,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 165.55,
          y: 93.75,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 169.4,
          y: 96.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 175.5,
          y: 105.4,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance14, 0, 27, {
        "0": {
          x: 243.1,
          y: 162.75,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 243.6,
          y: 155.3,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 244.05,
          y: 153.2,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 242.75,
          y: 158.1,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 240.2,
          y: 159.95,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 238.5,
          y: 161.35,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 237.5,
          y: 166.65,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 235.55,
          y: 158.8,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 233.35,
          y: 148.15,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 232.25,
          y: 146.85,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 233.45,
          y: 151.75,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 235.05,
          y: 155.2,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 237.5,
          y: 159.85,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 241.3,
          y: 170.75,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance13, 0, 27, {
        "0": {
          x: 175.7,
          y: 157.85,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 176.25,
          y: 150.05,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 176.75,
          y: 147.6,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 175.4,
          y: 153.4,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 172.75,
          y: 156.8,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 171,
          y: 159.35,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 169.95,
          y: 165.3,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 168,
          y: 158.65,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 165.85,
          y: 149.5,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 164.75,
          y: 148.75,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 165.9,
          y: 152.85,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 167.5,
          y: 155.3,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 169.95,
          y: 158.5,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 173.85,
          y: 167,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance12, 0, 27, {
        "0": {
          x: 177.1,
          y: 231.4,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 177.3,
          y: 223.6,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 177.45,
          y: 221.1,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 177.05,
          y: 226.9,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 176.05,
          y: 230.2,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 175.6,
          y: 232.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 175.25,
          y: 238.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 174.55,
          y: 232.05,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 174.05,
          y: 222.65,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 173.55,
          y: 221.8,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 173.85,
          y: 226,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 174.45,
          y: 228.5,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 175.25,
          y: 231.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 176.6,
          y: 240.5,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance11, 0, 27, {
        "0": {
          x: 131.35,
          y: 315.65,
          sx: 0.8488,
          sy: 0.8457,
          kx: -0.2971,
          ky: -2.9299
        },
        "1": {
          y: 307.4
        },
        "3": {
          y: 306
        },
        "7": {
          y: 311.5
        },
        "9": {
          y: 314.8
        },
        "11": {
          y: 318.9
        },
        "12": {
          y: 322.6
        },
        "13": {
          y: 314.3
        },
        "15": {
          y: 308.8
        },
        "17": {
          y: 307.9
        },
        "21": {
          y: 310.6
        },
        "23": {
          y: 314.7
        },
        "25": {
          y: 315.65
        },
        "26": {
          y: 324.75
        }
      })
      .addTimedChild(instance10, 0, 27, {
        "0": {
          x: 74.55,
          y: 315.25,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          y: 307.8
        },
        "3": {
          y: 305.75
        },
        "7": {
          y: 310.4
        },
        "9": {
          y: 313.15
        },
        "11": {
          y: 316.3
        },
        "12": {
          y: 320.2
        },
        "13": {
          y: 312.3
        },
        "15": {
          y: 306.5
        },
        "17": {
          y: 305.75
        },
        "21": {
          y: 309.65
        },
        "23": {
          y: 313.55
        },
        "25": {
          y: 315.9
        },
        "26": {
          y: 324.55
        }
      })
      .addTimedChild(instance9)
      .addTimedChild(instance8, 0, 13, {
        "0": {
          x: 67.4,
          y: 358.25,
          sx: 0.8463,
          sy: 0.8463,
          kx: 0.0247,
          ky: 3.1169
        },
        "1": {
          x: 64.3,
          y: 353,
          sx: 0.8464,
          sy: 0.8464,
          kx: -0.0462,
          ky: -3.0954
        },
        "3": {
          x: 64.15,
          y: 351.95,
          sx: 0.8463,
          sy: 0.8463,
          kx: -0.0681,
          ky: -3.0735
        },
        "7": {
          x: 65.7,
          y: 353.9,
          sx: 0.8462,
          sy: 0.8462,
          kx: -0.0889,
          ky: -3.0527
        },
        "9": {
          x: 68.75,
          y: 357.05,
          sx: 0.8477,
          sy: 0.8446,
          kx: -0.0264,
          ky: -3.093
        },
        "11": {
          x: 76.15,
          y: 368.35,
          sx: 0.8447,
          sy: 0.8447,
          kx: -0.2087,
          ky: -2.9329
        },
        "12": {
          x: 106.25,
          y: 409.95,
          sx: 0.8428,
          sy: 0.8428,
          kx: 1.3001,
          ky: 1.8415
        },
        "13": {}
      })
      .addTimedChild(instance44, 13, 13, {
        "13": {
          x: 160.05,
          y: 427.45,
          sx: 0.9307,
          sy: 0.9307,
          kx: -0.1099,
          ky: -3.0317
        },
        "15": {
          x: 163.05
        },
        "17": {
          x: 163.8
        },
        "21": {
          x: 162.55
        },
        "23": {
          x: 154.3,
          sx: 0.9227,
          sy: 0.9415,
          kx: -0.1867,
          ky: -3.0307
        },
        "25": {
          x: 109.75,
          y: 425.85,
          sx: 0.9304,
          sy: 0.9304,
          kx: -0.2336,
          ky: -2.908
        },
        "26": {}
      })
      .addTimedChild(instance47, 26, 1)
      .addTimedChild(instance46, 26, 1)
      .addTimedChild(instance45, 15, 12, {
        "15": {
          x: 164.7,
          y: 394.95,
          sx: 0.8453,
          sy: 0.8453,
          kx: 0.1735,
          ky: 2.9681
        },
        "17": {
          x: 165.15,
          y: 394.75,
          kx: 0.1828,
          ky: 2.9588
        },
        "21": {
          x: 164.45,
          y: 395.25,
          sx: 0.8468,
          sy: 0.8437,
          kx: 0.1728,
          ky: 2.9591
        },
        "23": {
          x: 159.25,
          y: 396.65,
          sx: 0.8449,
          sy: 0.8449,
          kx: 0.0512,
          ky: 3.0904
        },
        "25": {
          x: 126.7,
          y: 398.25,
          sx: 0.8325,
          sy: 0.8581,
          kx: -0.3265,
          ky: -2.8881
        },
        "26": {
          x: 115.5,
          y: 390.25,
          sx: 0.7726,
          sy: 0.7726,
          kx: 4.7123,
          ky: -1.5708
        }
      })
      .addTimedChild(instance40, 7, 19, {
        "7": {
          x: 29.4,
          y: 358.4,
          sx: 0.7824,
          sy: 0.8414,
          kx: 3.2044,
          ky: -0.0628
        },
        "9": {
          x: 31.6,
          y: 359.75,
          sx: 0.7799,
          sy: 0.8436,
          kx: 3.1729,
          ky: -0.0096
        },
        "11": {
          x: 37.2,
          y: 365.55,
          sx: 0.7887,
          sy: 0.841,
          kx: 2.9896,
          ky: 0.1521
        },
        "12": {
          x: 99.65,
          y: 447.5,
          sx: 0.8391,
          sy: 0.8391,
          kx: 4.4983,
          ky: -1.3567
        },
        "13": {
          x: 197,
          y: 425.65,
          sx: 0.8235,
          sy: 0.8235,
          kx: 0,
          ky: 3.1416
        },
        "15": {
          x: 199.9
        },
        "17": {
          x: 200.6
        },
        "21": {
          x: 199.35
        },
        "23": {
          x: 192.05,
          sx: 0.8381
        },
        "25": {
          x: 151.8,
          y: 427.5,
          sx: 0.9433,
          sy: 0.8233,
          kx: -0.0788,
          ky: -3.0628
        },
        "26": {}
      })
      .addTimedChild(instance39, 3, 12, {
        "3": {
          x: 77.3,
          y: 372.3,
          sx: 0.7712,
          sy: 0.7712,
          kx: 4.2035,
          ky: -1.0619
        },
        "7": {
          x: 79.5,
          y: 374.1,
          kx: 4.2528,
          ky: -1.1112
        },
        "9": {
          x: 83.75,
          y: 376.65,
          sx: 0.7643,
          sy: 0.778,
          kx: 4.2973,
          ky: -1.1696
        },
        "11": {
          x: 101.6,
          y: 392.05,
          sx: 0.7701,
          sy: 0.7701,
          kx: -1.0825,
          ky: -2.0591
        },
        "12": {
          x: 126.75,
          y: 402.05,
          sx: 0.7691,
          sy: 0.7691,
          kx: -0.6146,
          ky: -2.527
        },
        "13": {
          x: 162.5,
          y: 395.55,
          sx: 0.8452,
          sy: 0.8452,
          kx: 0.1474,
          ky: 2.9942
        },
        "15": {}
      })
      .addTimedChild(instance7, 0, 7, {
        "0": {
          x: 37.3,
          y: 376.75,
          sx: 0.7862,
          sy: 0.8413,
          kx: 3.596,
          ky: -0.4544
        },
        "1": {
          x: 28.55,
          y: 360.3,
          sx: 0.7825,
          sy: 0.8418,
          kx: 3.2917,
          ky: -0.1501
        },
        "3": {
          x: 28,
          y: 357.3,
          sx: 0.7824,
          sy: 0.8416,
          kx: 3.2388,
          ky: -0.0971
        },
        "7": {}
      })
      .addTimedChild(instance6, 0, 3, {
        "0": {
          x: 82.5,
          y: 377.45,
          sx: 0.7714,
          sy: 0.7714,
          kx: 4.3332,
          ky: -1.1916
        },
        "1": {
          x: 77.85,
          y: 373.05,
          sx: 0.7712,
          sy: 0.7712,
          kx: 4.2254,
          ky: -1.0838
        },
        "3": {}
      })
      .addTimedChild(instance5, 0, 27, {
        "0": {
          x: 138.7,
          y: 315.85,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          y: 307.9
        },
        "3": {
          y: 305.75
        },
        "7": {
          y: 310.1
        },
        "9": {
          y: 313.7
        },
        "11": {
          y: 316.55
        },
        "12": {
          y: 320.85
        },
        "13": {
          y: 312.95
        },
        "15": {
          y: 307.2
        },
        "17": {
          y: 306.5
        },
        "21": {
          y: 310.8
        },
        "23": {
          y: 314.4
        },
        "25": {
          y: 316.55
        },
        "26": {
          y: 324.45
        }
      })
      .addTimedChild(instance4)
      .addTimedChild(instance38, 3, 24, {
        "3": {
          x: 250.4,
          y: 277.65,
          sx: 0.7569,
          sy: 0.7365,
          kx: -0.0093,
          ky: -3.1328
        },
        "5": {
          x: 250.55,
          y: 276.45,
          kx: 0,
          ky: 3.1416
        },
        "7": {
          x: 247.75,
          y: 290.85,
          sx: 0.8699,
          sy: 0.7355,
          kx: -0.1657,
          ky: -3.0906
        },
        "9": {
          x: 202.85,
          y: 315.1,
          sx: 0.8677,
          sy: 0.7386,
          kx: -0.44,
          ky: -2.8393
        },
        "11": {
          x: 141.15,
          y: 311,
          sx: 0.8692,
          sy: 0.7689,
          kx: -1.1753,
          ky: -2.1875
        },
        "12": {
          x: 85.9,
          y: 280.95,
          sx: 0.8024,
          sy: 0.7115,
          kx: 4.006,
          ky: -0.9076
        },
        "13": {
          x: 72.35,
          y: 257,
          sx: 0.7943,
          sy: 0.6983,
          kx: 4.3401,
          ky: 2.0333
        },
        "15": {
          x: 64.85,
          y: 239.25,
          sx: 0.8093,
          sy: 0.6882,
          kx: 3.6862,
          ky: 2.6898
        },
        "17": {
          x: 65.25,
          y: 237.2,
          sx: 0.8096,
          sy: 0.6878,
          kx: 3.6634,
          ky: 2.712
        },
        "21": {
          x: 75.4,
          y: 257.3,
          sx: 0.8045,
          sy: 0.6906,
          kx: 3.8762,
          ky: 2.5037
        },
        "23": {
          x: 81.3,
          y: 282.1,
          sx: 0.7908,
          sy: 0.7008,
          kx: 4.6214,
          ky: 1.7387
        },
        "25": {
          x: 113.25,
          y: 307.1,
          sx: 0.7949,
          sy: 0.7199,
          kx: 1.427,
          ky: 1.6507
        },
        "26": {
          x: 201.35,
          y: 320.05,
          sx: 0.8154,
          sy: 0.7045,
          kx: -0.4059,
          ky: -2.8237
        }
      })
      .addTimedChild(instance3, 0, 27, {
        "0": {
          x: 190.95,
          y: 296.9,
          sx: 0.8239,
          sy: 0.8446,
          kx: 1.7836,
          ky: 1.3465
        },
        "1": {
          x: 194.3,
          y: 291.5,
          sx: 0.8246,
          sy: 0.8442,
          kx: 1.8305,
          ky: 1.2972
        },
        "3": {
          x: 195.1,
          y: 288.3,
          sx: 0.8225,
          sy: 0.8461,
          kx: 1.8808,
          ky: 1.2548
        },
        "5": {
          x: 195.5,
          y: 287.85,
          sx: 0.8226,
          sy: 0.8458,
          kx: 1.8949,
          ky: 1.2401
        },
        "7": {
          x: 191.75,
          y: 295.85,
          sx: 0.8221,
          sy: 0.8462,
          kx: 1.8641,
          ky: 1.2722
        },
        "9": {
          x: 167.25,
          y: 307.15,
          sx: 0.819,
          sy: 0.8464,
          kx: 1.4803,
          ky: 1.6767
        },
        "11": {
          x: 128.05,
          y: 285.6,
          sx: 0.8389,
          sy: 0.8281,
          kx: 0.4159,
          ky: 2.7554
        },
        "12": {
          x: 124.7,
          y: 266.85,
          sx: 0.8288,
          sy: 0.8333,
          kx: 0.8981,
          ky: -0.8713
        },
        "13": {
          x: 121.6,
          y: 255.5,
          sx: 0.8338,
          sy: 0.8294,
          kx: 0.7012,
          ky: -0.6744
        },
        "15": {
          y: 244.75,
          sx: 0.8365,
          sy: 0.8273,
          kx: 0.5905,
          ky: -0.5655
        },
        "17": {
          x: 121.9,
          y: 242.85,
          sx: 0.8374,
          sy: 0.8266,
          kx: 0.5499,
          ky: -0.5258
        },
        "21": {
          x: 120.95,
          y: 251.2,
          sx: 0.8343,
          sy: 0.8306,
          kx: 0.7182,
          ky: -0.6912
        },
        "23": {
          x: 121.05,
          y: 263.2,
          sx: 0.8314,
          sy: 0.8343,
          kx: 0.8634,
          ky: -0.8363
        },
        "25": {
          x: 121.35,
          y: 284.95,
          sx: 0.8426,
          sy: 0.8199,
          kx: 0.0362,
          ky: 3.1073
        },
        "26": {
          x: 162.4,
          y: 311.4,
          sx: 0.783,
          sy: 0.8399,
          kx: 1.336,
          ky: 1.8446
        }
      })
      .addTimedChild(instance2, 0, 3, {
        "0": {
          x: 243.25,
          y: 294.7,
          sx: 0.7872,
          sy: 0.7374,
          kx: -0.2234,
          ky: -2.9623
        },
        "1": {
          x: 249.75,
          y: 282.45,
          sx: 0.7566,
          sy: 0.7364,
          kx: -0.0739,
          ky: -3.0716
        },
        "3": {}
      })
      .addTimedChild(instance1, 0, 27, {
        "0": {
          x: 187.4,
          y: 301.4,
          sx: 0.6776,
          sy: 0.7343,
          kx: 1.8114,
          ky: 1.3056
        },
        "1": {
          x: 191.2,
          y: 296.4,
          sx: 0.6788,
          sy: 0.7335,
          kx: 1.9012,
          ky: 1.2117
        },
        "3": {
          x: 192.3,
          y: 293.35,
          sx: 0.6767,
          sy: 0.7356,
          kx: 1.951,
          ky: 1.1688
        },
        "5": {
          x: 192.8,
          y: 292.95,
          sx: 0.6768,
          sy: 0.7353,
          kx: 1.9652,
          ky: 1.1541
        },
        "7": {
          x: 188.9,
          y: 300.85,
          sx: 0.6763,
          sy: 0.7356,
          kx: 1.9343,
          ky: 1.1862
        },
        "9": {
          x: 161.7,
          y: 309.85,
          sx: 0.6728,
          sy: 0.7358,
          kx: 1.388,
          ky: 1.7612
        },
        "11": {
          x: 123.9,
          y: 283.75,
          sx: 0.6894,
          sy: 0.7196,
          kx: 0.3509,
          ky: 2.8056
        },
        "12": {
          x: 121.7,
          y: 262.75,
          sx: 0.656,
          sy: 0.7017,
          kx: 1.0065,
          ky: -0.9332
        },
        "13": {
          x: 119.55,
          y: 250.9,
          sx: 0.6599,
          sy: 0.6985,
          kx: 0.8107,
          ky: -0.7356
        },
        "15": {
          x: 120.05,
          y: 240,
          sx: 0.6621,
          sy: 0.6967,
          kx: 0.7007,
          ky: -0.6264
        },
        "17": {
          x: 120.55,
          y: 238.05,
          sx: 0.6629,
          sy: 0.696,
          kx: 0.6603,
          ky: -0.5866
        },
        "21": {
          x: 118.75,
          y: 246.7,
          sx: 0.6603,
          sy: 0.6996,
          kx: 0.8276,
          ky: -0.7525
        },
        "23": {
          x: 118.2,
          y: 258.9,
          sx: 0.658,
          sy: 0.7026,
          kx: 0.972,
          ky: -0.8981
        },
        "25": {
          x: 116.6,
          y: 280.8,
          sx: 0.692,
          sy: 0.7124,
          kx: -0.0198,
          ky: -3.1339
        },
        "26": {
          x: 157,
          y: 314.5,
          sx: 0.6443,
          sy: 0.7282,
          kx: 1.2851,
          ky: 1.8909
        }
      })
      .addTimedChild(instance37)
      .addTimedChild(instance36, 0, 12, {
        "0": {
          x: 150.7,
          y: 426.9,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          x: 154,
          sy: 0.8474,
          kx: 0.0462
        },
        "3": {
          x: 154.7,
          sy: 0.8481,
          kx: 0.0612
        },
        "7": {
          x: 153.65
        },
        "9": {
          x: 150.95
        },
        "11": {
          x: 123.1,
          y: 423.5,
          sx: 1.1235,
          sy: 0.849,
          kx: -0.0251,
          ky: -3.0353
        },
        "12": {}
      })
      .addTimedChild(instance43, 12, 15, {
        "12": {
          x: 109.45,
          y: 401.15,
          sx: 0.7936,
          sy: 0.7936,
          kx: 1.0506,
          ky: 2.091
        },
        "13": {
          x: 92.45,
          y: 377.9,
          sx: 0.8454,
          sy: 0.8454,
          kx: 0.3051,
          ky: 2.8365
        },
        "15": {
          x: 91.65,
          y: 376.05,
          sx: 0.8453,
          sy: 0.8453,
          kx: 0.2911,
          ky: 2.8505
        },
        "17": {
          x: 91.25,
          y: 375.6,
          kx: 0.2863,
          ky: 2.8553
        },
        "21": {
          x: 91.65,
          y: 376,
          sx: 0.8426,
          sy: 0.8481,
          kx: 0.2972,
          ky: 2.8543
        },
        "23": {
          x: 94.2,
          y: 377.7,
          sx: 0.8451,
          sy: 0.8451,
          kx: 0.2694,
          ky: 2.8722
        },
        "25": {
          x: 110.55,
          y: 387.85,
          sx: 0.8436,
          sy: 0.8436,
          kx: 0.1286,
          ky: 3.013
        },
        "26": {
          x: 126.95,
          y: 411.95,
          sx: 0.8152,
          sy: 0.8152,
          kx: 1.2289,
          ky: 1.9127
        }
      })
      .addTimedChild(instance35, 0, 27, {
        "0": {
          x: 183.55,
          y: 425.95,
          sx: 0.7187,
          sy: 0.7349,
          ky: 3.1416
        },
        "1": {
          x: 187.05
        },
        "3": {
          x: 187.85
        },
        "7": {
          x: 187.25,
          sx: 0.726
        },
        "9": {
          x: 184.6
        },
        "11": {
          x: 165.8,
          y: 427.25,
          sx: 0.932,
          sy: 0.7043,
          kx: -0.0251,
          ky: -3.0353
        },
        "12": {
          x: 117.25,
          y: 434.8,
          sx: 0.7419,
          sy: 0.6651,
          kx: -1.4431,
          ky: -1.6985
        },
        "13": {
          x: 65.3,
          y: 395.5,
          sx: 0.7175,
          sy: 0.7337,
          kx: 3.6799,
          ky: -0.5383
        },
        "15": {
          x: 63.05,
          y: 392.3,
          sx: 0.7174,
          sy: 0.7335,
          kx: 3.6265,
          ky: -0.4849
        },
        "17": {
          x: 62.1,
          y: 391.15,
          sx: 0.7173,
          sy: 0.7334,
          kx: 3.6033,
          ky: -0.4617
        },
        "21": {
          x: 63.05,
          y: 391.5,
          sx: 0.7139,
          sy: 0.7369,
          kx: 3.6127,
          ky: -0.4641
        },
        "23": {
          x: 64.5,
          y: 393.15,
          sx: 0.7169,
          sy: 0.733,
          kx: 3.5766,
          ky: -0.435
        },
        "25": {
          x: 78.7,
          y: 394.75,
          sx: 0.7296,
          sy: 0.7002,
          kx: 3.3268,
          ky: -0.1853
        },
        "26": {
          x: 116.1,
          y: 445.35,
          sx: 0.7265,
          sy: 0.7265,
          kx: 4.3439,
          ky: -1.2023
        }
      })
      .addTimedChild(instance34, 0, 27, {
        "0": {
          x: 161.1,
          y: 398.6,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          x: 163.1,
          sy: 0.8474,
          kx: 0.0462
        },
        "3": {
          x: 163.65,
          sy: 0.8481,
          kx: 0.0612
        },
        "7": {
          x: 162.9,
          sy: 0.8473,
          kx: 0.0428
        },
        "9": {
          x: 160.8,
          y: 398.85,
          sx: 0.8464,
          sy: 0.8471,
          kx: -0.0187,
          ky: -3.0801
        },
        "11": {
          x: 146.25,
          y: 399.85,
          sx: 0.8441,
          sy: 0.8448,
          kx: -0.3344,
          ky: -2.7644
        },
        "12": {
          x: 136.05,
          y: 400.6,
          sx: 0.7699,
          sy: 0.8422,
          kx: -0.3469,
          ky: -2.7518
        },
        "13": {
          x: 112.35,
          y: 392.15,
          sx: 0.7706,
          sy: 0.7706,
          kx: 4.6136,
          ky: -1.472
        },
        "15": {
          x: 110.95,
          y: 390.5,
          sx: 0.7703,
          sy: 0.7703,
          kx: 4.5627,
          ky: -1.4211
        },
        "17": {
          x: 110.55,
          y: 390.1,
          kx: 4.5579,
          ky: -1.4163
        },
        "21": {
          x: 111.15,
          y: 390.5,
          sx: 0.7689,
          sy: 0.7716,
          kx: 4.5582,
          ky: -1.4278
        },
        "23": {
          x: 114.25,
          y: 391.75,
          sx: 0.7702,
          sy: 0.7702,
          kx: 4.6111,
          ky: -1.4695
        },
        "25": {
          x: 142.4,
          y: 401.7,
          sx: 0.7691,
          sy: 0.7691,
          kx: -0.7452,
          ky: -2.3964
        },
        "26": {
          x: 148.5,
          y: 399.85,
          sx: 0.7709,
          sy: 0.7709,
          kx: -0.395,
          ky: -2.7466
        }
      })
      .addTimedChild(instance33, 0, 11, {
        "0": {
          x: 121,
          y: 259.05,
          sx: 0.844,
          sy: 0.844,
          r: 0.555
        },
        "1": {
          x: 121.95,
          y: 245.6,
          sx: 0.8448,
          sy: 0.8448,
          r: 0.7946
        },
        "3": {
          x: 122.25,
          y: 243.9,
          sx: 0.8449,
          sy: 0.8449,
          r: 0.8216
        },
        "5": {
          x: 122.75,
          y: 243.35,
          sx: 0.845,
          sy: 0.845,
          r: 0.8353
        },
        "7": {
          x: 121.75,
          y: 247.95,
          sx: 0.8446,
          sy: 0.8446,
          r: 0.7202
        },
        "9": {
          x: 123.15,
          y: 260.45,
          sx: 0.8439,
          sy: 0.8439,
          r: 0.4488
        },
        "11": {}
      })
      .addTimedChild(instance42, 12, 15, {
        "12": {
          x: 196.1,
          y: 304.35,
          sx: 0.8417,
          sy: 0.8417,
          r: -1.6673
        },
        "13": {
          x: 218.9,
          y: 295,
          sx: 0.8426,
          sy: 0.8426,
          r: -1.9999
        },
        "15": {
          x: 222.25,
          y: 289.75,
          sx: 0.843,
          sy: 0.843,
          r: -2.1314
        },
        "17": {
          x: 222.95,
          y: 287.85,
          sx: 0.8431,
          sy: 0.8431,
          r: -2.1716
        },
        "21": {
          x: 219.9,
          y: 294.3,
          sx: 0.8426,
          sy: 0.8426,
          r: -2.0745
        },
        "23": {
          x: 215.9,
          y: 297.6,
          sx: 0.8422,
          sy: 0.8422,
          r: -1.9601
        },
        "25": {
          x: 192.5,
          y: 305,
          sx: 0.8412,
          sy: 0.8412,
          r: -1.5912
        },
        "26": {
          x: 143.6,
          y: 294.15,
          sx: 0.8422,
          sy: 0.8422,
          r: -0.137
        }
      })
      .addTimedChild(instance32)
      .addTimedChild(instance31, 0, 26, {
        "0": {
          x: 85.85,
          y: 278.4,
          sx: 0.8519,
          sy: 0.7038,
          kx: -1.3657,
          ky: 1.4168
        },
        "1": {
          x: 72.8,
          y: 260.65,
          sx: 0.6428,
          sy: 0.6254,
          kx: 0.8136,
          ky: -0.8135
        },
        "3": {
          x: 72.4,
          y: 257.8,
          sx: 0.6429,
          sy: 0.6256,
          kx: 0.764,
          ky: -0.7639
        },
        "5": {
          x: 72.8,
          y: 256.65,
          sx: 0.643,
          kx: 0,
          ky: 0,
          r: -0.7583
        },
        "7": {
          x: 76.6,
          y: 268,
          sx: 0.6419,
          sy: 0.6246,
          r: -1.1083
        },
        "9": {
          x: 90.45,
          y: 291.85,
          sx: 0.852,
          sy: 0.7039,
          kx: -1.3347,
          ky: 1.3858,
          r: 0
        },
        "11": {
          x: 165,
          y: 318.95,
          sx: 0.6769,
          sy: 0.6009,
          kx: 0.2511,
          ky: -0.4434
        },
        "12": {
          x: 220,
          y: 311.4,
          sx: 0.6413,
          sy: 0.627,
          kx: 0.8834,
          ky: -0.9553
        },
        "13": {
          x: 252.05,
          y: 295.1,
          sx: 0.6905,
          sy: 0.6752,
          kx: 1.0453,
          ky: -1.1172
        },
        "15": {
          x: 256.3,
          y: 277.25,
          sx: 0.6917,
          sy: 0.6764,
          kx: 1.4267,
          ky: -1.4988
        },
        "17": {
          x: 256.05,
          y: 275.1,
          sx: 0.6919,
          sy: 0.6759,
          kx: 1.4729,
          ky: -1.5403
        },
        "21": {
          x: 254.35,
          y: 285.7,
          sx: 0.6897,
          sy: 0.6889,
          kx: 1.5353,
          ky: -1.5374
        },
        "23": {
          x: 246.8,
          y: 296.7,
          sx: 0.6889,
          sy: 0.6882,
          kx: 1.177,
          ky: -1.1791
        },
        "25": {
          x: 215.3,
          y: 313.25,
          sx: 0.6881,
          sy: 0.6874,
          kx: 0.8538,
          ky: -0.856
        },
        "26": {}
      })
      .addTimedChild(instance30, 0, 11, {
        "0": {
          x: 124.1,
          y: 266.3,
          sx: 0.8442,
          sy: 0.8442,
          r: 0.4895
        },
        "1": {
          x: 123.2,
          y: 253.4,
          sx: 0.845,
          sy: 0.845,
          r: 0.7291
        },
        "3": {
          x: 123.3,
          y: 251.7,
          sx: 0.8451,
          sy: 0.8451,
          r: 0.7561
        },
        "5": {
          x: 123.65,
          y: 251.25,
          sx: 0.8452,
          sy: 0.8452,
          r: 0.7698
        },
        "7": {
          x: 123.6,
          y: 255.65,
          sx: 0.8448,
          sy: 0.8448,
          r: 0.6547
        },
        "9": {
          x: 126.95,
          y: 267.4,
          sx: 0.8441,
          sy: 0.8441,
          r: 0.3833
        },
        "11": {}
      })
      .addTimedChild(instance41, 12, 14, {
        "12": {
          x: 196.5,
          y: 304.4,
          sx: 0.8423,
          sy: 0.8423,
          r: 1.514
        },
        "13": {
          x: 219.3,
          y: 294.95,
          sx: 0.8435,
          sy: 0.8435,
          r: 1.0722
        },
        "15": {
          x: 222.65,
          y: 289.6,
          sx: 0.844,
          sy: 0.844,
          r: 0.9756
        },
        "17": {
          x: 223.35,
          y: 287.7,
          sx: 0.8441,
          sy: 0.8441,
          r: 0.9354
        },
        "21": {
          x: 220.3,
          y: 294.15,
          sx: 0.8435,
          sy: 0.8435,
          r: 1.0326
        },
        "23": {
          x: 216.3,
          y: 297.8,
          sx: 0.8431,
          sy: 0.8431,
          r: 1.1031
        },
        "25": {
          x: 193.4,
          y: 304.6,
          sx: 0.8418,
          sy: 0.8418,
          kx: 4.6188,
          ky: 1.6644,
          r: 0
        },
        "26": {}
      })
      .addTimedChild(instance29, 0, 27, {
        "0": {
          x: 216.7,
          y: 225.9,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 216.9,
          y: 218.25,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 217.1,
          y: 216,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 216.65,
          y: 221.3,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 215.5,
          y: 223.7,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 214.9,
          y: 225.5,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 214.5,
          y: 231.1,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 213.65,
          y: 223.7,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 212.95,
          y: 213.5,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 212.45,
          y: 212.3,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 212.85,
          y: 217.05,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 213.55,
          y: 220.05,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 214.5,
          y: 224.35,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 216.05,
          y: 234.25,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance28, 0, 27, {
        "0": {
          x: 231.65,
          y: 189.6,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 234.3,
          y: 182.15,
          sx: 0.7898,
          kx: 0.007,
          ky: 3.1332
        },
        "3": {
          x: 236.65,
          y: 180.05,
          sx: 0.7894,
          sy: 0.8063,
          kx: 0.0356,
          ky: 3.103
        },
        "5": {
          x: 237.45,
          sx: 0.7896,
          sy: 0.8064,
          kx: 0.0482,
          ky: 3.0898
        },
        "7": {
          x: 236.8,
          y: 185,
          sy: 0.8065,
          kx: 0.0667,
          ky: 3.0711
        },
        "9": {
          x: 234.9,
          y: 187,
          sy: 0.8064,
          kx: 0.0894,
          ky: 3.0485
        },
        "11": {
          x: 232.3,
          y: 188.55,
          sy: 0.8066,
          kx: 0.0844,
          ky: 3.0544
        },
        "12": {
          x: 229.6,
          y: 194.05,
          sx: 0.7894,
          sy: 0.8065,
          kx: 0.0606,
          ky: 3.0796
        },
        "13": {
          x: 225.35,
          y: 186.3,
          sx: 0.7893,
          sy: 0.8063,
          kx: 0.0313,
          ky: 3.111
        },
        "15": {
          x: 222.95,
          y: 175.85,
          sx: 0.7892,
          kx: 0.0389,
          ky: 3.1041
        },
        "17": {
          x: 219.15,
          y: 174.65,
          sx: 0.7896,
          sy: 0.8065,
          kx: -0.0021,
          ky: -3.136
        },
        "19": {
          x: 218.55,
          y: 174.6,
          sx: 0.7897,
          kx: -0.0112,
          ky: -3.1264
        },
        "21": {
          x: 219.4,
          y: 179.35,
          sy: 0.8066,
          kx: -0.0236,
          ky: -3.114
        },
        "23": {
          x: 221.4,
          y: 182.55,
          kx: -0.0248,
          ky: -3.1134
        },
        "25": {
          x: 224.3,
          y: 187.1,
          kx: -0.0301,
          ky: -3.1089
        },
        "26": {
          x: 230.4,
          y: 197.8,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance27, 0, 27, {
        "0": {
          x: 246.65,
          y: 74.6,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 247.6,
          y: 67.1,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 248.5,
          y: 65.05,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 246.05,
          y: 69.85,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 241.5,
          y: 71.7,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 238.25,
          y: 73.1,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 236.45,
          y: 78.45,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 232.85,
          y: 70.6,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 228.85,
          y: 60.05,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 226.9,
          y: 58.75,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 229.15,
          y: 63.6,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 232.05,
          y: 66.95,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 236.45,
          y: 71.65,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 243.35,
          y: 82.5,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance26, 0, 27, {
        "0": {
          x: 246.2,
          y: 119,
          sx: 0.789,
          sy: 0.8052,
          kx: -0.1731,
          ky: -2.962
        },
        "1": {
          x: 246.95,
          y: 111.55,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.1778,
          ky: -2.9573
        },
        "3": {
          x: 247.65,
          y: 109.45,
          sx: 0.7891,
          sy: 0.8054,
          kx: -0.1829,
          ky: -2.9522
        },
        "7": {
          x: 245.75,
          y: 114.3,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.1695,
          ky: -2.9656
        },
        "9": {
          x: 242.25,
          y: 116.1,
          sx: 0.7891,
          sy: 0.8054,
          kx: -0.1468,
          ky: -2.9883
        },
        "11": {
          x: 239.75,
          y: 117.45,
          sx: 0.7893,
          sy: 0.8056,
          kx: -0.1294,
          ky: -3.0057
        },
        "12": {
          x: 238.35,
          y: 122.8,
          kx: -0.1203,
          ky: -3.0148
        },
        "13": {
          x: 235.55,
          y: 114.9,
          kx: -0.1021,
          ky: -3.033
        },
        "15": {
          x: 232.5,
          y: 104.35,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.0805,
          ky: -3.0546
        },
        "17": {
          x: 230.95,
          y: 103,
          kx: -0.0714,
          ky: -3.0637
        },
        "21": {
          x: 232.65,
          y: 107.9,
          kx: -0.0837,
          ky: -3.0514
        },
        "23": {
          x: 234.9,
          y: 111.3,
          sx: 0.7893,
          sy: 0.8056,
          kx: -0.098,
          ky: -3.0371
        },
        "25": {
          x: 238.35,
          y: 116,
          kx: -0.1203,
          ky: -3.0148
        },
        "26": {
          x: 243.7,
          y: 126.9,
          sx: 0.7892,
          sy: 0.8055,
          kx: -0.1553,
          ky: -2.9798
        }
      })
      .addTimedChild(instance25, 0, 27, {
        "0": {
          x: 179.45,
          y: 109.95,
          sx: 0.7867,
          sy: 0.8038,
          kx: -0.0404,
          ky: -3.1004
        },
        "1": {
          x: 180.25,
          y: 102.15,
          sx: 0.7869,
          sy: 0.8039,
          kx: -0.0451,
          ky: -3.0957
        },
        "3": {
          x: 180.95,
          y: 99.75,
          sx: 0.7868,
          kx: -0.0502,
          ky: -3.0906
        },
        "7": {
          x: 179,
          y: 105.5,
          sx: 0.7869,
          sy: 0.804,
          kx: -0.0368,
          ky: -3.1041
        },
        "9": {
          x: 175.25,
          y: 108.8,
          sy: 0.8039,
          kx: -0.0141,
          ky: -3.1267
        },
        "11": {
          x: 172.65,
          y: 111.3,
          sx: 0.787,
          sy: 0.8041,
          kx: 0.0033,
          ky: 3.139
        },
        "12": {
          x: 171.15,
          y: 117.3,
          kx: 0.0124,
          ky: 3.13
        },
        "13": {
          x: 168.35,
          y: 110.6,
          sy: 0.804,
          kx: 0.0306,
          ky: 3.1118
        },
        "15": {
          x: 165.15,
          y: 101.45,
          sx: 0.7869,
          kx: 0.0522,
          ky: 3.0902
        },
        "17": {
          x: 163.6,
          y: 100.75,
          kx: 0.0613,
          ky: 3.081
        },
        "21": {
          x: 165.35,
          y: 104.8,
          sx: 0.787,
          kx: 0.049,
          ky: 3.0934
        },
        "23": {
          x: 167.65,
          y: 107.25,
          kx: 0.0347,
          ky: 3.1077
        },
        "25": {
          x: 171.15,
          y: 110.5,
          sy: 0.8041,
          kx: 0.0124,
          ky: 3.13
        },
        "26": {
          x: 176.75,
          y: 119.05,
          sx: 0.7869,
          sy: 0.804,
          kx: -0.0225,
          ky: -3.1183
        }
      })
      .addTimedChild(instance24, 0, 27, {
        "0": {
          x: 211.15,
          y: 189.8,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 211.5,
          y: 182.2,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 211.85,
          y: 179.95,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 210.95,
          y: 185.25,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 209,
          y: 187.8,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 207.75,
          y: 189.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 207,
          y: 195.4,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 205.55,
          y: 188.05,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 204.05,
          y: 178.1,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 203.2,
          y: 177,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 204,
          y: 181.55,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 205.2,
          y: 184.55,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 207,
          y: 188.6,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 209.85,
          y: 198.35,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance23, 0, 27, {
        "0": {
          x: 251.6,
          y: 8.5,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 252.85,
          y: 1,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 254.1,
          y: -1.05,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 250.75,
          y: 3.75,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 244.7,
          y: 5.45,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 240.3,
          y: 6.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 237.9,
          y: 12.1,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 233.1,
          y: 4.25,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 227.65,
          y: -6.25,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 225.1,
          y: -7.55,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 228.2,
          y: -2.7,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 232,
          y: 0.65,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 237.9,
          y: 5.3,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 247.1,
          y: 16.25,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance22, 0, 27, {
        "0": {
          x: 140.75,
          y: 144.45,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 141.3,
          y: 136.55,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 141.9,
          y: 133.9,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 140.35,
          y: 140.15,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 137.4,
          y: 144.35,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 135.4,
          y: 147.55,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 134.35,
          y: 153.85,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 132.1,
          y: 147.8,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 129.75,
          y: 139.45,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 128.55,
          y: 139.05,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 129.85,
          y: 142.7,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 131.65,
          y: 144.65,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 134.35,
          y: 147.05,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 138.65,
          y: 154.25,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance21, 0, 27, {
        "0": {
          x: 227.3,
          y: 155.55,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 227.85,
          y: 147.95,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 228.35,
          y: 145.75,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 226.95,
          y: 150.9,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 224.25,
          y: 153.05,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 222.4,
          y: 154.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 221.35,
          y: 160.25,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 219.3,
          y: 152.7,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 217,
          y: 142.4,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 215.8,
          y: 141.2,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 217.1,
          y: 145.95,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 218.8,
          y: 149.1,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 221.35,
          y: 153.45,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 225.4,
          y: 163.75,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance20, 0, 27, {
        "0": {
          x: 224.15,
          y: 147.8,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 224.7,
          y: 140.2,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 225.25,
          y: 138,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 223.8,
          y: 143.15,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 220.85,
          y: 145.45,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 218.9,
          y: 147.2,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 217.75,
          y: 152.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 215.55,
          y: 145.2,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 213.1,
          y: 135.05,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 211.85,
          y: 133.9,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 213.25,
          y: 138.55,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 215.05,
          y: 141.7,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 217.75,
          y: 145.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 222.05,
          y: 156.1,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance19, 0, 27, {
        "0": {
          x: 151.85,
          y: 152.4,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 152.4,
          y: 144.45,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 152.9,
          y: 141.9,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 151.5,
          y: 148.05,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 148.75,
          y: 151.9,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 146.9,
          y: 154.95,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 145.85,
          y: 161.1,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 143.8,
          y: 154.9,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 141.55,
          y: 146.25,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 140.45,
          y: 145.8,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 141.65,
          y: 149.55,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 143.3,
          y: 151.7,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 145.85,
          y: 154.3,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 149.9,
          y: 162,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance18, 0, 27, {
        "0": {
          x: 245.45,
          y: 134.8,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 246.1,
          y: 127.35,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 246.7,
          y: 125.25,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 245.05,
          y: 130.1,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 241.85,
          y: 131.95,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 239.65,
          y: 133.3,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 238.4,
          y: 138.6,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 235.9,
          y: 130.7,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 233.15,
          y: 120.1,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 231.8,
          y: 118.8,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 233.3,
          y: 123.7,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 235.3,
          y: 127.15,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 238.4,
          y: 131.8,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 243.2,
          y: 142.75,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance17, 0, 27, {
        "0": {
          x: 177.35,
          y: 132.3,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 178,
          y: 124.55,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 178.6,
          y: 122.1,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 176.95,
          y: 127.85,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 173.7,
          y: 131.25,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 171.5,
          y: 133.8,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 170.25,
          y: 139.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 167.85,
          y: 133.1,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 165.15,
          y: 123.9,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 163.8,
          y: 123.25,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 165.25,
          y: 127.3,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 167.25,
          y: 129.75,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 170.25,
          y: 132.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 175.05,
          y: 141.45,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance16, 0, 27, {
        "0": {
          x: 131.1,
          y: 165.2,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 134.85,
          y: 157.2,
          sx: 0.7898,
          sy: 0.8068,
          kx: 0.0295,
          ky: 3.1097
        },
        "3": {
          x: 139.35,
          y: 154.5,
          sx: 0.7892,
          sy: 0.8057,
          kx: 0.1004,
          ky: 3.0354
        },
        "5": {
          x: 140.2,
          y: 154.55,
          sx: 0.7896,
          sy: 0.8059,
          kx: 0.1167,
          ky: 3.0185
        },
        "7": {
          x: 139.35,
          y: 160.8,
          sx: 0.7897,
          sy: 0.806,
          kx: 0.1387,
          ky: 2.996
        },
        "9": {
          x: 136.95,
          y: 165,
          sy: 0.8059,
          kx: 0.1615,
          ky: 2.9734
        },
        "11": {
          x: 133.95,
          y: 168.4,
          sx: 0.7896,
          sy: 0.8061,
          kx: 0.1527,
          ky: 2.9832
        },
        "12": {
          x: 129.9,
          y: 174.85,
          sx: 0.7891,
          sy: 0.806,
          kx: 0.1035,
          ky: 3.0349
        },
        "13": {
          x: 123.05,
          y: 169.1,
          sx: 0.7889,
          sy: 0.8059,
          kx: 0.0257,
          ky: 3.1169
        },
        "15": {
          x: 118.85,
          y: 160.75,
          sx: 0.7888,
          sy: 0.8057,
          kx: 0.0043,
          ky: 3.1401
        },
        "17": {
          x: 115.7,
          y: 160.2,
          sx: 0.7896,
          sy: 0.8063,
          kx: -0.0317,
          ky: -3.1051
        },
        "19": {
          x: 115.2,
          y: 160.1,
          sx: 0.7897,
          kx: -0.0407,
          ky: -3.0957
        },
        "21": {
          x: 116.05,
          y: 163.55,
          kx: -0.0582,
          ky: -3.0779
        },
        "23": {
          x: 118.2,
          y: 165.35,
          sx: 0.7896,
          kx: -0.0591,
          ky: -3.0776
        },
        "25": {
          x: 122.1,
          y: 167.7,
          sx: 0.7895,
          sy: 0.8065,
          kx: -0.0459,
          ky: -3.0924
        },
        "26": {
          x: 129.35,
          y: 175.15,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance15, 0, 27, {
        "0": {
          x: 178.45,
          y: 96.3,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 179.25,
          y: 88.5,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 180.05,
          y: 86.1,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 177.85,
          y: 91.85,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 173.85,
          y: 95.2,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 171,
          y: 97.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 169.4,
          y: 103.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 166.3,
          y: 97.1,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 162.85,
          y: 87.95,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 161.15,
          y: 87.3,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 163.1,
          y: 91.35,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 165.55,
          y: 93.75,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 169.4,
          y: 96.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 175.5,
          y: 105.4,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance14, 0, 27, {
        "0": {
          x: 243.1,
          y: 162.75,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 243.6,
          y: 155.3,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 244.05,
          y: 153.2,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 242.75,
          y: 158.1,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 240.2,
          y: 159.95,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 238.5,
          y: 161.35,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 237.5,
          y: 166.65,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 235.55,
          y: 158.8,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 233.35,
          y: 148.15,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 232.25,
          y: 146.85,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 233.45,
          y: 151.75,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 235.05,
          y: 155.2,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 237.5,
          y: 159.85,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 241.3,
          y: 170.75,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance13, 0, 27, {
        "0": {
          x: 175.7,
          y: 157.85,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 176.25,
          y: 150.05,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 176.75,
          y: 147.6,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 175.4,
          y: 153.4,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 172.75,
          y: 156.8,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 171,
          y: 159.35,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 169.95,
          y: 165.3,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 168,
          y: 158.65,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 165.85,
          y: 149.5,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 164.75,
          y: 148.75,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 165.9,
          y: 152.85,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 167.5,
          y: 155.3,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 169.95,
          y: 158.5,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 173.85,
          y: 167,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance12, 0, 27, {
        "0": {
          x: 177.1,
          y: 231.4,
          sx: 0.7897,
          sy: 0.8069,
          kx: -0.027,
          ky: -3.1144
        },
        "1": {
          x: 177.3,
          y: 223.6,
          sx: 0.7899,
          sy: 0.807,
          kx: -0.0317,
          ky: -3.1097
        },
        "3": {
          x: 177.45,
          y: 221.1,
          kx: -0.0368,
          ky: -3.1046
        },
        "7": {
          x: 177.05,
          y: 226.9,
          sy: 0.8071,
          kx: -0.0234,
          ky: -3.1181
        },
        "9": {
          x: 176.05,
          y: 230.2,
          sy: 0.807,
          kx: -0.0007,
          ky: -3.1407
        },
        "11": {
          x: 175.6,
          y: 232.75,
          sx: 0.79,
          sy: 0.8072,
          kx: 0.0167,
          ky: 3.125
        },
        "12": {
          x: 175.25,
          y: 238.7,
          sx: 0.7901,
          kx: 0.0258,
          ky: 3.116
        },
        "13": {
          x: 174.55,
          y: 232.05,
          sx: 0.79,
          sy: 0.8071,
          kx: 0.044,
          ky: 3.0978
        },
        "15": {
          x: 174.05,
          y: 222.65,
          kx: 0.0656,
          ky: 3.0762
        },
        "17": {
          x: 173.55,
          y: 221.8,
          sx: 0.7899,
          kx: 0.0748,
          ky: 3.067
        },
        "21": {
          x: 173.85,
          y: 226,
          sx: 0.79,
          kx: 0.0624,
          ky: 3.0794
        },
        "23": {
          x: 174.45,
          y: 228.5,
          kx: 0.0481,
          ky: 3.0937
        },
        "25": {
          x: 175.25,
          y: 231.9,
          sx: 0.7901,
          sy: 0.8072,
          kx: 0.0258,
          ky: 3.116
        },
        "26": {
          x: 176.6,
          y: 240.5,
          sx: 0.79,
          sy: 0.8071,
          kx: -0.0091,
          ky: -3.1323
        }
      })
      .addTimedChild(instance11, 0, 27, {
        "0": {
          x: 131.35,
          y: 315.65,
          sx: 0.8488,
          sy: 0.8457,
          kx: -0.2971,
          ky: -2.9299
        },
        "1": {
          y: 307.4
        },
        "3": {
          y: 306
        },
        "7": {
          y: 311.5
        },
        "9": {
          y: 314.8
        },
        "11": {
          y: 318.9
        },
        "12": {
          y: 322.6
        },
        "13": {
          y: 314.3
        },
        "15": {
          y: 308.8
        },
        "17": {
          y: 307.9
        },
        "21": {
          y: 310.6
        },
        "23": {
          y: 314.7
        },
        "25": {
          y: 315.65
        },
        "26": {
          y: 324.75
        }
      })
      .addTimedChild(instance10, 0, 27, {
        "0": {
          x: 74.55,
          y: 315.25,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          y: 307.8
        },
        "3": {
          y: 305.75
        },
        "7": {
          y: 310.4
        },
        "9": {
          y: 313.15
        },
        "11": {
          y: 316.3
        },
        "12": {
          y: 320.2
        },
        "13": {
          y: 312.3
        },
        "15": {
          y: 306.5
        },
        "17": {
          y: 305.75
        },
        "21": {
          y: 309.65
        },
        "23": {
          y: 313.55
        },
        "25": {
          y: 315.9
        },
        "26": {
          y: 324.55
        }
      })
      .addTimedChild(instance9)
      .addTimedChild(instance8, 0, 13, {
        "0": {
          x: 67.4,
          y: 358.25,
          sx: 0.8463,
          sy: 0.8463,
          kx: 0.0247,
          ky: 3.1169
        },
        "1": {
          x: 64.3,
          y: 353,
          sx: 0.8464,
          sy: 0.8464,
          kx: -0.0462,
          ky: -3.0954
        },
        "3": {
          x: 64.15,
          y: 351.95,
          sx: 0.8463,
          sy: 0.8463,
          kx: -0.0681,
          ky: -3.0735
        },
        "7": {
          x: 65.7,
          y: 353.9,
          sx: 0.8462,
          sy: 0.8462,
          kx: -0.0889,
          ky: -3.0527
        },
        "9": {
          x: 68.75,
          y: 357.05,
          sx: 0.8477,
          sy: 0.8446,
          kx: -0.0264,
          ky: -3.093
        },
        "11": {
          x: 76.15,
          y: 368.35,
          sx: 0.8447,
          sy: 0.8447,
          kx: -0.2087,
          ky: -2.9329
        },
        "12": {
          x: 106.25,
          y: 409.95,
          sx: 0.8428,
          sy: 0.8428,
          kx: 1.3001,
          ky: 1.8415
        },
        "13": {}
      })
      .addTimedChild(instance44, 13, 13, {
        "13": {
          x: 160.05,
          y: 427.45,
          sx: 0.9307,
          sy: 0.9307,
          kx: -0.1099,
          ky: -3.0317
        },
        "15": {
          x: 163.05
        },
        "17": {
          x: 163.8
        },
        "21": {
          x: 162.55
        },
        "23": {
          x: 154.3,
          sx: 0.9227,
          sy: 0.9415,
          kx: -0.1867,
          ky: -3.0307
        },
        "25": {
          x: 109.75,
          y: 425.85,
          sx: 0.9304,
          sy: 0.9304,
          kx: -0.2336,
          ky: -2.908
        },
        "26": {}
      })
      .addTimedChild(instance47, 26, 1)
      .addTimedChild(instance46, 26, 1)
      .addTimedChild(instance45, 15, 12, {
        "15": {
          x: 164.7,
          y: 394.95,
          sx: 0.8453,
          sy: 0.8453,
          kx: 0.1735,
          ky: 2.9681
        },
        "17": {
          x: 165.15,
          y: 394.75,
          kx: 0.1828,
          ky: 2.9588
        },
        "21": {
          x: 164.45,
          y: 395.25,
          sx: 0.8468,
          sy: 0.8437,
          kx: 0.1728,
          ky: 2.9591
        },
        "23": {
          x: 159.25,
          y: 396.65,
          sx: 0.8449,
          sy: 0.8449,
          kx: 0.0512,
          ky: 3.0904
        },
        "25": {
          x: 126.7,
          y: 398.25,
          sx: 0.8325,
          sy: 0.8581,
          kx: -0.3265,
          ky: -2.8881
        },
        "26": {
          x: 115.5,
          y: 390.25,
          sx: 0.7726,
          sy: 0.7726,
          kx: 4.7123,
          ky: -1.5708
        }
      })
      .addTimedChild(instance40, 7, 19, {
        "7": {
          x: 29.4,
          y: 358.4,
          sx: 0.7824,
          sy: 0.8414,
          kx: 3.2044,
          ky: -0.0628
        },
        "9": {
          x: 31.6,
          y: 359.75,
          sx: 0.7799,
          sy: 0.8436,
          kx: 3.1729,
          ky: -0.0096
        },
        "11": {
          x: 37.2,
          y: 365.55,
          sx: 0.7887,
          sy: 0.841,
          kx: 2.9896,
          ky: 0.1521
        },
        "12": {
          x: 99.65,
          y: 447.5,
          sx: 0.8391,
          sy: 0.8391,
          kx: 4.4983,
          ky: -1.3567
        },
        "13": {
          x: 197,
          y: 425.65,
          sx: 0.8235,
          sy: 0.8235,
          kx: 0,
          ky: 3.1416
        },
        "15": {
          x: 199.9
        },
        "17": {
          x: 200.6
        },
        "21": {
          x: 199.35
        },
        "23": {
          x: 192.05,
          sx: 0.8381
        },
        "25": {
          x: 151.8,
          y: 427.5,
          sx: 0.9433,
          sy: 0.8233,
          kx: -0.0788,
          ky: -3.0628
        },
        "26": {}
      })
      .addTimedChild(instance39, 3, 12, {
        "3": {
          x: 77.3,
          y: 372.3,
          sx: 0.7712,
          sy: 0.7712,
          kx: 4.2035,
          ky: -1.0619
        },
        "7": {
          x: 79.5,
          y: 374.1,
          kx: 4.2528,
          ky: -1.1112
        },
        "9": {
          x: 83.75,
          y: 376.65,
          sx: 0.7643,
          sy: 0.778,
          kx: 4.2973,
          ky: -1.1696
        },
        "11": {
          x: 101.6,
          y: 392.05,
          sx: 0.7701,
          sy: 0.7701,
          kx: -1.0825,
          ky: -2.0591
        },
        "12": {
          x: 126.75,
          y: 402.05,
          sx: 0.7691,
          sy: 0.7691,
          kx: -0.6146,
          ky: -2.527
        },
        "13": {
          x: 162.5,
          y: 395.55,
          sx: 0.8452,
          sy: 0.8452,
          kx: 0.1474,
          ky: 2.9942
        },
        "15": {}
      })
      .addTimedChild(instance7, 0, 7, {
        "0": {
          x: 37.3,
          y: 376.75,
          sx: 0.7862,
          sy: 0.8413,
          kx: 3.596,
          ky: -0.4544
        },
        "1": {
          x: 28.55,
          y: 360.3,
          sx: 0.7825,
          sy: 0.8418,
          kx: 3.2917,
          ky: -0.1501
        },
        "3": {
          x: 28,
          y: 357.3,
          sx: 0.7824,
          sy: 0.8416,
          kx: 3.2388,
          ky: -0.0971
        },
        "7": {}
      })
      .addTimedChild(instance6, 0, 3, {
        "0": {
          x: 82.5,
          y: 377.45,
          sx: 0.7714,
          sy: 0.7714,
          kx: 4.3332,
          ky: -1.1916
        },
        "1": {
          x: 77.85,
          y: 373.05,
          sx: 0.7712,
          sy: 0.7712,
          kx: 4.2254,
          ky: -1.0838
        },
        "3": {}
      })
      .addTimedChild(instance5, 0, 27, {
        "0": {
          x: 138.7,
          y: 315.85,
          sx: 0.8465,
          sy: 0.8465,
          ky: 3.1416
        },
        "1": {
          y: 307.9
        },
        "3": {
          y: 305.75
        },
        "7": {
          y: 310.1
        },
        "9": {
          y: 313.7
        },
        "11": {
          y: 316.55
        },
        "12": {
          y: 320.85
        },
        "13": {
          y: 312.95
        },
        "15": {
          y: 307.2
        },
        "17": {
          y: 306.5
        },
        "21": {
          y: 310.8
        },
        "23": {
          y: 314.4
        },
        "25": {
          y: 316.55
        },
        "26": {
          y: 324.45
        }
      })
      .addTimedChild(instance4)
      .addTimedChild(instance38, 3, 24, {
        "3": {
          x: 250.4,
          y: 277.65,
          sx: 0.7569,
          sy: 0.7365,
          kx: -0.0093,
          ky: -3.1328
        },
        "5": {
          x: 250.55,
          y: 276.45,
          kx: 0,
          ky: 3.1416
        },
        "7": {
          x: 247.75,
          y: 290.85,
          sx: 0.8699,
          sy: 0.7355,
          kx: -0.1657,
          ky: -3.0906
        },
        "9": {
          x: 202.85,
          y: 315.1,
          sx: 0.8677,
          sy: 0.7386,
          kx: -0.44,
          ky: -2.8393
        },
        "11": {
          x: 141.15,
          y: 311,
          sx: 0.8692,
          sy: 0.7689,
          kx: -1.1753,
          ky: -2.1875
        },
        "12": {
          x: 85.9,
          y: 280.95,
          sx: 0.8024,
          sy: 0.7115,
          kx: 4.006,
          ky: -0.9076
        },
        "13": {
          x: 72.35,
          y: 257,
          sx: 0.7943,
          sy: 0.6983,
          kx: 4.3401,
          ky: 2.0333
        },
        "15": {
          x: 64.85,
          y: 239.25,
          sx: 0.8093,
          sy: 0.6882,
          kx: 3.6862,
          ky: 2.6898
        },
        "17": {
          x: 65.25,
          y: 237.2,
          sx: 0.8096,
          sy: 0.6878,
          kx: 3.6634,
          ky: 2.712
        },
        "21": {
          x: 75.4,
          y: 257.3,
          sx: 0.8045,
          sy: 0.6906,
          kx: 3.8762,
          ky: 2.5037
        },
        "23": {
          x: 81.3,
          y: 282.1,
          sx: 0.7908,
          sy: 0.7008,
          kx: 4.6214,
          ky: 1.7387
        },
        "25": {
          x: 113.25,
          y: 307.1,
          sx: 0.7949,
          sy: 0.7199,
          kx: 1.427,
          ky: 1.6507
        },
        "26": {
          x: 201.35,
          y: 320.05,
          sx: 0.8154,
          sy: 0.7045,
          kx: -0.4059,
          ky: -2.8237
        }
      })
      .addTimedChild(instance3, 0, 27, {
        "0": {
          x: 190.95,
          y: 296.9,
          sx: 0.8239,
          sy: 0.8446,
          kx: 1.7836,
          ky: 1.3465
        },
        "1": {
          x: 194.3,
          y: 291.5,
          sx: 0.8246,
          sy: 0.8442,
          kx: 1.8305,
          ky: 1.2972
        },
        "3": {
          x: 195.1,
          y: 288.3,
          sx: 0.8225,
          sy: 0.8461,
          kx: 1.8808,
          ky: 1.2548
        },
        "5": {
          x: 195.5,
          y: 287.85,
          sx: 0.8226,
          sy: 0.8458,
          kx: 1.8949,
          ky: 1.2401
        },
        "7": {
          x: 191.75,
          y: 295.85,
          sx: 0.8221,
          sy: 0.8462,
          kx: 1.8641,
          ky: 1.2722
        },
        "9": {
          x: 167.25,
          y: 307.15,
          sx: 0.819,
          sy: 0.8464,
          kx: 1.4803,
          ky: 1.6767
        },
        "11": {
          x: 128.05,
          y: 285.6,
          sx: 0.8389,
          sy: 0.8281,
          kx: 0.4159,
          ky: 2.7554
        },
        "12": {
          x: 124.7,
          y: 266.85,
          sx: 0.8288,
          sy: 0.8333,
          kx: 0.8981,
          ky: -0.8713
        },
        "13": {
          x: 121.6,
          y: 255.5,
          sx: 0.8338,
          sy: 0.8294,
          kx: 0.7012,
          ky: -0.6744
        },
        "15": {
          y: 244.75,
          sx: 0.8365,
          sy: 0.8273,
          kx: 0.5905,
          ky: -0.5655
        },
        "17": {
          x: 121.9,
          y: 242.85,
          sx: 0.8374,
          sy: 0.8266,
          kx: 0.5499,
          ky: -0.5258
        },
        "21": {
          x: 120.95,
          y: 251.2,
          sx: 0.8343,
          sy: 0.8306,
          kx: 0.7182,
          ky: -0.6912
        },
        "23": {
          x: 121.05,
          y: 263.2,
          sx: 0.8314,
          sy: 0.8343,
          kx: 0.8634,
          ky: -0.8363
        },
        "25": {
          x: 121.35,
          y: 284.95,
          sx: 0.8426,
          sy: 0.8199,
          kx: 0.0362,
          ky: 3.1073
        },
        "26": {
          x: 162.4,
          y: 311.4,
          sx: 0.783,
          sy: 0.8399,
          kx: 1.336,
          ky: 1.8446
        }
      })
      .addTimedChild(instance2, 0, 3, {
        "0": {
          x: 243.25,
          y: 294.7,
          sx: 0.7872,
          sy: 0.7374,
          kx: -0.2234,
          ky: -2.9623
        },
        "1": {
          x: 249.75,
          y: 282.45,
          sx: 0.7566,
          sy: 0.7364,
          kx: -0.0739,
          ky: -3.0716
        },
        "3": {}
      })
      .addTimedChild(instance1, 0, 27, {
        "0": {
          x: 187.4,
          y: 301.4,
          sx: 0.6776,
          sy: 0.7343,
          kx: 1.8114,
          ky: 1.3056
        },
        "1": {
          x: 191.2,
          y: 296.4,
          sx: 0.6788,
          sy: 0.7335,
          kx: 1.9012,
          ky: 1.2117
        },
        "3": {
          x: 192.3,
          y: 293.35,
          sx: 0.6767,
          sy: 0.7356,
          kx: 1.951,
          ky: 1.1688
        },
        "5": {
          x: 192.8,
          y: 292.95,
          sx: 0.6768,
          sy: 0.7353,
          kx: 1.9652,
          ky: 1.1541
        },
        "7": {
          x: 188.9,
          y: 300.85,
          sx: 0.6763,
          sy: 0.7356,
          kx: 1.9343,
          ky: 1.1862
        },
        "9": {
          x: 161.7,
          y: 309.85,
          sx: 0.6728,
          sy: 0.7358,
          kx: 1.388,
          ky: 1.7612
        },
        "11": {
          x: 123.9,
          y: 283.75,
          sx: 0.6894,
          sy: 0.7196,
          kx: 0.3509,
          ky: 2.8056
        },
        "12": {
          x: 121.7,
          y: 262.75,
          sx: 0.656,
          sy: 0.7017,
          kx: 1.0065,
          ky: -0.9332
        },
        "13": {
          x: 119.55,
          y: 250.9,
          sx: 0.6599,
          sy: 0.6985,
          kx: 0.8107,
          ky: -0.7356
        },
        "15": {
          x: 120.05,
          y: 240,
          sx: 0.6621,
          sy: 0.6967,
          kx: 0.7007,
          ky: -0.6264
        },
        "17": {
          x: 120.55,
          y: 238.05,
          sx: 0.6629,
          sy: 0.696,
          kx: 0.6603,
          ky: -0.5866
        },
        "21": {
          x: 118.75,
          y: 246.7,
          sx: 0.6603,
          sy: 0.6996,
          kx: 0.8276,
          ky: -0.7525
        },
        "23": {
          x: 118.2,
          y: 258.9,
          sx: 0.658,
          sy: 0.7026,
          kx: 0.972,
          ky: -0.8981
        },
        "25": {
          x: 116.6,
          y: 280.8,
          sx: 0.692,
          sy: 0.7124,
          kx: -0.0198,
          ky: -3.1339
        },
        "26": {
          x: 157,
          y: 314.5,
          sx: 0.6443,
          sy: 0.7282,
          kx: 1.2851,
          ky: 1.8909
        }
      });
  });

  lib.Fizzy.assets = {
    "ArmPadL": "images/ArmPadL.png",
    "SkateCuff4": "images/SkateCuff4.png",
    "ArmStrapL2": "images/ArmStrapL2.png",
    "AboveArm1": "images/AboveArm1.png",
    "AboveArm2": "images/AboveArm2.png",
    "AboveArm4": "images/AboveArm4.png",
    "AboveArm6": "images/AboveArm6.png",
    "AboveArm8": "images/AboveArm8.png",
    "AboveArm10": "images/AboveArm10.png",
    "AboveArm12": "images/AboveArm12.png",
    "AboveArm13": "images/AboveArm13.png",
    "AboveArm14": "images/AboveArm14.png",
    "AboveArm16": "images/AboveArm16.png",
    "AboveArm18": "images/AboveArm18.png",
    "AboveArm22": "images/AboveArm22.png",
    "AboveArm24": "images/AboveArm24.png",
    "AboveArm26": "images/AboveArm26.png",
    "AboveArm27": "images/AboveArm27.png",
    "ApronReg2": "images/ApronReg2.png",
    "ApronReg3": "images/ApronReg3.png",
    "ApronReg5": "images/ApronReg5.png",
    "ApronReg6": "images/ApronReg6.png",
    "ApronReg7": "images/ApronReg7.png",
    "ApronReg9": "images/ApronReg9.png",
    "ApronReg11": "images/ApronReg11.png",
    "ApronReg12": "images/ApronReg12.png",
    "ApronReg13": "images/ApronReg13.png",
    "ApronReg14": "images/ApronReg14.png",
    "ApronReg16": "images/ApronReg16.png",
    "ApronReg17": "images/ApronReg17.png",
    "ApronReg19": "images/ApronReg19.png",
    "ApronReg20": "images/ApronReg20.png",
    "ApronReg21": "images/ApronReg21.png",
    "ApronReg23": "images/ApronReg23.png",
    "ApronReg25": "images/ApronReg25.png",
    "ApronReg26": "images/ApronReg26.png",
    "ApronReg27": "images/ApronReg27.png",
    "ApronReg1": "images/ApronReg1.png",
    "LegPadR": "images/LegPadR.png",
    "Skate34R2": "images/Skate34R2.png",
    "Skate34R1": "images/Skate34R1.png",
    "Skate34R3": "images/Skate34R3.png",
    "CuffSm": "images/CuffSm.png",
    "AboveLeg1": "images/AboveLeg1.png",
    "AboveLeg2": "images/AboveLeg2.png",
    "AboveLeg4": "images/AboveLeg4.png",
    "AboveLeg8": "images/AboveLeg8.png",
    "AboveLeg10": "images/AboveLeg10.png",
    "AboveLeg12": "images/AboveLeg12.png",
    "AboveLeg13": "images/AboveLeg13.png",
    "AboveLeg14": "images/AboveLeg14.png",
    "AboveLeg16": "images/AboveLeg16.png",
    "AboveLeg18": "images/AboveLeg18.png",
    "AboveLeg22": "images/AboveLeg22.png",
    "AboveLeg24": "images/AboveLeg24.png",
    "AboveLeg26": "images/AboveLeg26.png",
    "AboveLeg27": "images/AboveLeg27.png",
    "TorsoSkate3": "images/TorsoSkate3.png",
    "TorsoSkate2": "images/TorsoSkate2.png",
    "TorsoSkate1": "images/TorsoSkate1.png",
    "TieLoop2": "images/TieLoop2.png",
    "TieLoop3": "images/TieLoop3.png",
    "TieLoop1": "images/TieLoop1.png",
    "CollarFR": "images/CollarFR.png",
    "PupilL": "images/PupilL.png",
    "PupilR": "images/PupilR.png",
    "Bitmap 1": "images/Bitmap 1.png",
    "StrapL": "images/StrapL.png",
    "EyeL1": "images/EyeL1.png",
    "EyeR1": "images/EyeR1.png",
    "GlassesArmL": "images/GlassesArmL.png",
    "GlassesMid": "images/GlassesMid.png",
    "Nose": "images/Nose.png",
    "EarL": "images/EarL.png",
    "Hair": "images/Hair.png",
    "Mouth3": "images/Mouth3.png",
    "BrowL1": "images/BrowL1.png",
    "BrowR1": "images/BrowR1.png",
    "Head1": "images/Head1.png",
    "StrapR": "images/StrapR.png",
    "CollarBK": "images/CollarBK.png",
    "ArmStrapR21": "images/ArmStrapR21.png",
    "SkateCuff3": "images/SkateCuff3.png",
    "SkateCuff5": "images/SkateCuff5.png",
    "ArmBack1": "images/ArmBack1.png",
    "ArmBack2": "images/ArmBack2.png",
    "ArmBack4": "images/ArmBack4.png",
    "ArmBack6": "images/ArmBack6.png",
    "ArmBack8": "images/ArmBack8.png",
    "ArmBack10": "images/ArmBack10.png",
    "ArmBack12": "images/ArmBack12.png",
    "ArmBack13": "images/ArmBack13.png",
    "ArmBack14": "images/ArmBack14.png",
    "ArmBack16": "images/ArmBack16.png",
    "ArmBack18": "images/ArmBack18.png",
    "ArmBack22": "images/ArmBack22.png",
    "ArmBack24": "images/ArmBack24.png",
    "ArmBack26": "images/ArmBack26.png",
    "ArmPadR22": "images/ArmPadR22.png",
    "CuffSmall": "images/CuffSmall.png",
    "LegBack1": "images/LegBack1.png",
    "LegBack2": "images/LegBack2.png",
    "LegBack4": "images/LegBack4.png",
    "LegBack8": "images/LegBack8.png",
    "LegBack10": "images/LegBack10.png",
    "LegBack12": "images/LegBack12.png",
    "LegBack13": "images/LegBack13.png",
    "LegBack14": "images/LegBack14.png",
    "LegBack16": "images/LegBack16.png",
    "LegBack18": "images/LegBack18.png",
    "LegBack22": "images/LegBack22.png",
    "LegBack24": "images/LegBack24.png",
    "LegBack26": "images/LegBack26.png",
    "LegBack27": "images/LegBack27.png",
    "SkateCuff1": "images/SkateCuff1.png",
    "SkateCuff2": "images/SkateCuff2.png",
    "ArmPadR21": "images/ArmPadR21.png"
  };
})(PIXI, lib = lib || {});
var lib;