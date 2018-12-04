(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,108);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(35,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(35,0,87,108), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件9();
	this.instance.parent = this;
	this.instance.setTransform(43.5,68,1,1,0,0,0,43.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:507.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35,14,87,108);


// stage content:
(lib.bb_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AkSFjIAArFIIlAAIAALFg");
	var mask_graphics_1 = new cjs.Graphics().p("AjqGQIAArFIIlAAIAALFg");
	var mask_graphics_2 = new cjs.Graphics().p("AjCG9IAArFIIlAAIAALFg");
	var mask_graphics_3 = new cjs.Graphics().p("AiaHqIAArFIIlAAIAALFg");
	var mask_graphics_4 = new cjs.Graphics().p("AhyIXIAArFIIlAAIAALFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:27.5,y:35.5}).wait(1).to({graphics:mask_graphics_1,x:31.5,y:40}).wait(1).to({graphics:mask_graphics_2,x:35.5,y:44.5}).wait(1).to({graphics:mask_graphics_3,x:39.5,y:49}).wait(1).to({graphics:mask_graphics_4,x:43.5,y:53.5}).wait(1));

	// 图层 1
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(8.5,39,1,1,0,0,0,43.5,54);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,55,71);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap12.png?1542463240796", id:"Bitmap12"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;