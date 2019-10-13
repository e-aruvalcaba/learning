(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"template_menu_atlas_", frames: [[0,0,505,330],[222,332,220,165],[222,499,220,147],[0,332,220,166]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.mod02_c_istock_831277780 = function() {
	this.spriteSheet = ss["template_menu_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Módulo11 = function() {
	this.spriteSheet = ss["template_menu_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Módulo31 = function() {
	this.spriteSheet = ss["template_menu_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Módulo41 = function() {
	this.spriteSheet = ss["template_menu_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.sa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "default";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvrSCMAAAgkDIfXAAMAAAAkDg");
	this.shape.setTransform(94.4,115.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sa, new cjs.Rectangle(-6,0,200.9,230.8), null);


(lib.mc_Actores = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHABgOQgBgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape.setTransform(97.5,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgFAyIAAhjIALAAIAABjg");
	this.shape_1.setTransform(92,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgQAjQgFgDgDgDQgCgEgCgFIAAgMIAAgsIAMAAIAAAnIAAANQACAFAEADQADADAGAAQAEAAAFgEQAFgCACgFQACgFAAgJIAAgmIAMAAIAABIIgLAAIAAgLQgIAMgNAAQgHAAgGgCg");
	this.shape_2.setTransform(86.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgPAuQgHgFgEgIQgEgJAAgLQAAgLADgIQAEgJAHgEQAHgFAJAAQAGAAAFADQAFADADAEIAAgkIAMAAIAABjIgLAAIAAgJQgHALgNAAQgIAAgHgFgAgMgHQgGAHAAANQAAAOAGAHQAGAHAHAAQAIAAAGgHQAFgGAAgOQAAgOgFgHQgGgHgJAAQgHAAgFAHg");
	this.shape_3.setTransform(78.5,36.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_4.setTransform(71,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AAlAlIAAgtQAAgHgBgDQgBgEgDgCQgEgCgEAAQgHAAgGAGQgFAEAAAMIAAApIgLAAIAAguQAAgIgDgEQgDgFgHAAQgFABgEACQgFADgCAFQgCAFAAAKIAAAlIgMAAIAAhIIALAAIAAAKQADgEAGgEQAGgDAHAAQAIAAAFADQAEAEADAFQAIgMAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_5.setTransform(61.3,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAJgKAOAAQAPAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAEgDAEgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgBgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_6.setTransform(47.6,37.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgBAwQgEgDgBgDQgCgDAAgMIAAgoIgJAAIAAgKIAJAAIAAgSIALgHIAAAZIANAAIAAAKIgNAAIAAApQAAAFABABIACADIAEABIAGgBIACAMIgKABQgGAAgDgCg");
	this.shape_7.setTransform(41.9,36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgTAgQgIgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQgBgEgDgCIgMgFQgOgDgEgCQgFgCgDgEQgDgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgMACQgCgGgEgDQgEgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgGgGg");
	this.shape_8.setTransform(36.3,37.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAKgKAOAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgNgVQgFAFgBAKIAoAAQgCgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_9.setTransform(28.9,37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAKgKAOAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgNgVQgFAFgBAKIAoAAQgCgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_10.setTransform(17.2,37.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_11.setTransform(11.6,37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgTAoIAAAJIgMAAIAAhjIANAAIAAAkQAIgKALAAQAHAAAFADQAGACAEAFQAEAFADAHQABAGAAAIQABATgKAKQgJAKgNAAQgMAAgHgLgAgNgHQgGAHAAAMQAAANAEAGQAFAKAKAAQAIAAAFgHQAGgHAAgOQAAgNgGgHQgFgHgIAAQgIAAgFAHg");
	this.shape_12.setTransform(5,36.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_13.setTransform(-3,37.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAFAEAIAAQAJAAAEgEQADgDAAgFQABgEgEgCIgMgFQgNgDgGgCQgEgCgDgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgMACQgBgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_14.setTransform(-10.4,37.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEADAEIgNAAQgDgEAAgFQgHAGgGACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgCADAAADQABAFADADQAEADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_15.setTransform(94.3,20.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgTAlIAAhHIALAAIAAALQAFgJADgCQADgCAEAAQAGAAAHAEIgEALQgFgDgEABQgFgBgCADQgDACgBAFQgCAGAAAIIAAAlg");
	this.shape_16.setTransform(88.7,20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgBAwQgEgDgBgDQgCgDAAgMIAAgpIgJAAIAAgJIAJAAIAAgSIALgIIAAAaIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGAAIACAKIgKABQgGAAgDgBg");
	this.shape_17.setTransform(83.9,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAbgkIgZgjIAQAAIAKARIAFAIIAFgIIANgRIAOAAIgZAiIAbAlg");
	this.shape_18.setTransform(78.4,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_19.setTransform(71,20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AARAlIAAgrQAAgHgBgFQgCgDgDgCQgEgCgEAAQgIAAgFAEQgGAFAAAOIAAAnIgNAAIAAhHIAMAAIAAAKQAIgMAOAAQAGAAAGACQAGACACAEQADAEABAFIABANIAAArg");
	this.shape_20.setTransform(55.4,20.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_21.setTransform(47.6,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgFAyIAAhHIALAAIAABHgAgFgjIAAgOIALAAIAAAOg");
	this.shape_22.setTransform(42.2,19);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgWAcQgIgKgBgSQABgLAEgIQAEgJAHgFQAIgEAIAAQAMAAAIAGQAHAGACALIgMACQgBgHgFgEQgEgEgGAAQgJAAgFAHQgGAGAAAOQAAAPAFAGQAGAHAIAAQAIAAAEgFQAGgEAAgJIAMABQgBANgJAHQgHAHgNAAQgNAAgKgKg");
	this.shape_23.setTransform(37.3,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgaAgQgGgGgBgJQABgFACgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgNgCQADgHADgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgCgEAAgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgBADQgCADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_24.setTransform(29.7,20.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAlAlIAAgsQAAgIgBgEQgBgDgDgBQgEgCgEAAQgHAAgGAEQgFAGAAALIAAApIgLAAIAAguQAAgJgDgEQgDgDgHAAQgFAAgEACQgFADgCAFQgCAGAAAJIAAAlIgMAAIAAhHIALAAIAAAKQADgGAGgDQAGgDAHAAQAIAAAFADQAEADADAHQAIgNAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_25.setTransform(20,20.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgTAlIAAhHIALAAIAAALQAFgJADgCQADgCAEAAQAGAAAHAEIgEALQgFgDgEABQgFgBgCADQgDACgBAFQgCAGAAAIIAAAlg");
	this.shape_26.setTransform(12.4,20.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHABgOQgBgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_27.setTransform(5.6,20.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgKAzIAAg+IgKAAIAAgJIAKAAIAAgIQAAgIACgDQABgFAFgDQADgDAJAAIALABIgCALIgHAAQgGAAgCACQgCACAAAHIAAAHIAOAAIAAAJIgOAAIAAA+g");
	this.shape_28.setTransform(0.1,18.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AARAlIAAgrQABgHgCgFQgCgDgDgCQgEgCgFAAQgGAAgGAEQgGAFAAAOIAAAnIgMAAIAAhHIALAAIAAAKQAIgMAOAAQAHAAAFACQAFACADAEQADAEABAFIAAANIAAArg");
	this.shape_29.setTransform(-6.1,20.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_30.setTransform(-11.9,19);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgXAcQgKgKAAgSQAAgTALgKQAKgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_31.setTransform(330,39.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgPAiQgHgCgCgEQgCgDgCgGIgBgLIAAgsIANAAIAAAnIABANQABAFADADQAEADAFgBQAGAAAEgCQAFgDACgFQACgFAAgJIAAgmIANAAIAABHIgLAAIAAgKQgJAMgNAAQgHAAgFgDg");
	this.shape_32.setTransform(319.1,39.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AAlAlIAAgsQAAgIgBgEQgBgDgDgBQgEgCgEAAQgHAAgGAEQgFAGAAALIAAApIgLAAIAAguQAAgJgDgEQgDgDgHAAQgFAAgEACQgFADgCAFQgCAGAAAJIAAAlIgMAAIAAhHIALAAIAAAKQADgFAGgEQAGgDAHAAQAIAAAFADQAEAEADAGQAIgNAOAAQALAAAGAGQAFAFAAANIAAAxg");
	this.shape_33.setTransform(293.8,39.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgXAcQgJgKgBgRQABgSAJgKQAJgKAPAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDACgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_34.setTransform(280.1,39.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgBAvQgEgCgBgDQgCgDAAgMIAAgpIgJAAIAAgJIAJAAIAAgSIALgIIAAAaIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGgBIACALIgKABQgGAAgDgCg");
	this.shape_35.setTransform(274.4,38.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDAAgFQAAgEgDgCIgNgFQgMgDgGgCQgEgCgEgEQgCgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAFAAQAIAAAHACQAGADADAEQADAEABAHIgLACQgBgGgFgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_36.setTransform(268.8,39.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAOAAQAPAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAnAAQgBgJgDgFQgGgHgKAAQgHAAgGAGg");
	this.shape_37.setTransform(261.4,39.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAJgKAPAAQAOAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgGAFAAAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_38.setTransform(249.7,39.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgTAlIAAhHIALAAIAAALQAFgJADgCQADgCAEAAQAGAAAHAEIgEALQgFgDgEABQgFgBgCADQgDADgBAEQgCAGAAAIIAAAlg");
	this.shape_39.setTransform(244.1,39.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgTAoIAAAJIgMAAIAAhjIANAAIAAAkQAIgKALAAQAHAAAFADQAHACADAFQAEAFACAHQACAGAAAIQAAATgJAKQgJAKgNAAQgLAAgIgLgAgNgHQgGAHAAAMQAAANAEAGQAGAKAJAAQAHAAAGgHQAGgHAAgOQAAgNgGgHQgFgHgIAAQgHAAgGAHg");
	this.shape_40.setTransform(237.5,38);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAFgDAAgFQAAgEgEgCIgMgFQgOgDgEgCQgGgCgCgEQgDgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgNACQgBgGgDgDQgEgDgHAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgNAAgIgGg");
	this.shape_41.setTransform(222.1,39.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARABAFQAAAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_42.setTransform(326.8,21.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAagkIgYgjIAPAAIALARIAFAIIAFgIIANgRIAOAAIgZAiIAbAlg");
	this.shape_43.setTransform(310.9,21.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAKgKANAAQAPAAAKAKQAJAKAAARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAnAAQAAgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_44.setTransform(303.5,21.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AASAlIAAgrQgBgIgBgEQgBgDgEgDQgEgCgFAAQgGAAgGAGQgGAFAAAOIAAAmIgMAAIAAhIIALAAIAAAKQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIAAALIAAAsg");
	this.shape_45.setTransform(287.9,21.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgYAcQgJgKAAgSQAAgTAMgKQAIgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHABgOQgBgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_46.setTransform(280.1,21.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgFAyIAAhIIALAAIAABIgAgFgjIAAgOIALAAIAAAOg");
	this.shape_47.setTransform(274.7,20.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AgVAcQgKgKABgSQAAgLADgIQAEgJAJgFQAHgEAIAAQANAAAHAGQAIAGACALIgNACQgBgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAGAGQAGAHAHAAQAHAAAGgFQAEgEABgJIANABQgDANgHAHQgJAHgMAAQgOAAgIgKg");
	this.shape_48.setTransform(269.8,21.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEADAEIgNAAQgDgEAAgFQgHAGgGACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgCADABADQgBAFAEADQAEADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_49.setTransform(262.2,21.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgTAlIAAhIIALAAIAAALQAFgHADgDQADgCAEAAQAGAAAHADIgEAMQgFgDgEAAQgFAAgCADQgDACgBAEQgCAHAAAIIAAAlg");
	this.shape_50.setTransform(244.9,21.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAJgIAMAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_51.setTransform(238.1,21.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AgKAzIAAg+IgKAAIAAgKIAKAAIAAgIQAAgGACgEQABgFAFgDQADgDAJAAIALACIgCAKIgHgBQgGAAgCACQgCADAAAGIAAAHIAOAAIAAAKIgOAAIAAA+g");
	this.shape_52.setTransform(232.6,20.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AARAlIAAgrQAAgIgBgEQgCgDgDgDQgEgCgEAAQgIAAgFAGQgGAFAAAOIAAAmIgNAAIAAhIIAMAAIAAAKQAIgLAOAAQAGAAAGACQAFADADAEQADADABAGIABALIAAAsg");
	this.shape_53.setTransform(226.4,21.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgPAjQgGgDgDgDQgDgEgBgFIAAgMIAAgsIAMAAIAAAnIABANQAAAFAFADQADADAGAAQAFAAAEgEQAFgCACgFQACgFAAgJIAAgmIAMAAIAABIIgKAAIAAgLQgJAMgOAAQgGAAgFgCg");
	this.shape_54.setTransform(510.6,41.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgXAcQgKgKAAgRQAAgSAKgKQAKgKANAAQAPAAAKAKQAIAKABARIAAADIg1AAQAAAMAGAGQAGAHAIAAQAHAAAFgEQAEgDADgIIANABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAnAAQAAgJgEgFQgGgHgKAAQgHAAgFAGg");
	this.shape_55.setTransform(471.7,41.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAFAEAIAAQAJAAADgEQAEgDAAgFQAAgEgDgCIgMgFQgNgDgFgCQgGgCgCgEQgDgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAFAAQAIAAAGACQAHADADAEQADAEACAHIgNACQgBgGgDgDQgFgDgGAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAABABIAEADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgNAAgIgGg");
	this.shape_56.setTransform(460.4,41.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AgXAcQgKgKABgRQgBgSAKgKQAKgKANAAQAPAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAIAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgCgJgDgFQgGgHgKAAQgHAAgFAGg");
	this.shape_57.setTransform(453,41.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgXAcQgKgKABgRQgBgSAKgKQAKgKANAAQAPAAAJAKQAKAKAAARIAAADIg2AAQABAMAGAGQAGAHAIAAQAHAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgMgVQgHAFAAAKIAoAAQgCgJgDgFQgGgHgKAAQgHAAgFAGg");
	this.shape_58.setTransform(441.3,41.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AgTAoIAAAJIgLAAIAAhjIAMAAIAAAkQAIgKALAAQAGAAAHADQAFACAFAFQADAFACAHQADAGAAAIQgBATgIAKQgKAKgNAAQgLAAgIgLgAgNgHQgGAHAAAMQAAANADAGQAHAKAJAAQAHAAAGgHQAGgHAAgOQAAgNgFgHQgGgHgIAAQgHAAgGAHg");
	this.shape_59.setTransform(429,40.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AgXAcQgKgKAAgSQAAgTAMgKQAIgIANAAQAPAAAJAKQAKAKAAARQAAANgEAIQgEAIgIAEQgJAFgJAAQgOAAgJgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAGgHQAGgHABgOQgBgNgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_60.setTransform(421,41.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AgTAgQgIgGgCgLIAMgCQABAHAFAEQAEAEAIAAQAIAAAFgEQADgDABgFQgBgEgDgCIgNgFQgNgDgFgCQgFgCgDgEQgCgFAAgFQAAgFACgEQADgEADgDQADgCAFgBQAFgCAGAAQAHAAAHACQAGADADAEQADAEABAHIgLACQgCgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgEAGQgDAFgHADQgHADgIAAQgOAAgGgGg");
	this.shape_61.setTransform(413.6,41.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgNgCQADgHADgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgCgEAAgFQgHAGgGACQgFADgIAAQgLAAgHgGgAgCAEIgLADQgDABgBADQgCADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_62.setTransform(518.4,23.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgBAvQgEgCgBgDQgCgDAAgMIAAgpIgJAAIAAgJIAJAAIAAgSIALgIIAAAaIANAAIAAAJIgNAAIAAAqQAAAFABACIACACIAEABIAGAAIACAKIgKABQgGAAgDgCg");
	this.shape_63.setTransform(508,22.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAagkIgYgjIAPAAIAMARIAEAIIAFgIIAMgRIAPAAIgZAiIAbAlg");
	this.shape_64.setTransform(502.5,23.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgXAcQgJgKAAgRQAAgSAJgKQAJgKAPAAQAOAAAJAKQAKAKgBARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDADgIIAMABQgDAMgIAGQgIAGgNAAQgOAAgKgKgAgNgVQgFAFgBAKIAoAAQgBgJgEgFQgGgHgJAAQgIAAgGAGg");
	this.shape_65.setTransform(495,23.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AgWAcQgJgKAAgSQAAgLAFgIQADgJAJgFQAHgEAJAAQAMAAAHAGQAIAGABALIgLACQgCgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAFAGQAHAHAIAAQAGAAAFgFQAFgEACgJIALABQgBANgJAHQgIAHgLAAQgOAAgKgKg");
	this.shape_66.setTransform(461.4,23.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_67.setTransform(453.7,23.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AAlAlIAAgsQAAgIgBgEQgBgDgDgBQgEgCgEAAQgHAAgGAEQgFAGAAALIAAApIgLAAIAAguQAAgJgDgDQgDgEgHAAQgFAAgEACQgFADgCAFQgCAGAAAJIAAAlIgMAAIAAhHIALAAIAAAKQADgGAGgDQAGgDAHAAQAIAAAFADQAEADADAHQAIgNAOAAQALAAAGAGQAFAGAAAMIAAAxg");
	this.shape_68.setTransform(444,23.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AASAlIAAgrQgBgHgBgFQgBgDgEgCQgEgCgFAAQgGAAgGAEQgGAFAAAOIAAAnIgMAAIAAhHIALAAIAAAKQAIgMAOAAQAGAAAGACQAGACACAEQADAEABAFIAAANIAAArg");
	this.shape_69.setTransform(417.9,23.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgPAiQgHgCgCgEQgCgDgCgGIgBgLIAAgsIANAAIAAAnIABANQABAFADADQAEADAFgBQAGAAAEgCQAFgDACgFQACgFAAgJIAAgmIANAAIAABHIgLAAIAAgKQgJAMgOAAQgGAAgFgDg");
	this.shape_70.setTransform(666,39.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("AgXAcQgKgKABgRQgBgSAKgKQAJgKAPAAQAOAAAJAKQAJAKAAARIAAADIg1AAQABAMAGAGQAGAHAJAAQAGAAAFgEQAFgDACgIIANABQgDAMgIAGQgIAGgNAAQgPAAgJgKgAgNgVQgFAFgBAKIAnAAQgBgJgDgFQgGgHgJAAQgIAAgGAGg");
	this.shape_71.setTransform(627.1,39.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AgUAgQgHgGgCgLIAMgCQABAHAEAEQAGAEAHAAQAJAAADgEQAEgDABgFQAAgEgEgCIgMgFQgOgDgEgCQgGgCgCgEQgDgFAAgFQAAgFACgEQACgEAEgDQADgCAFgBQAFgCAGAAQAHAAAGACQAHADADAEQADAEACAHIgNACQgBgGgDgDQgEgDgHAAQgIAAgEADQgDADAAADQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAFADIAKADIASAGQAFABADAEQADAFAAAGQAAAGgDAGQgEAFgHADQgGADgJAAQgOAAgHgGg");
	this.shape_72.setTransform(569,39.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAIAAQAFAAAGgDQAGgDACgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_73.setTransform(673.8,21.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AASAlIAAgrQgBgIgBgEQgBgDgEgDQgEgCgFAAQgHAAgFAGQgGAFAAAOIAAAmIgMAAIAAhIIALAAIAAAKQAIgLAOAAQAGAAAGACQAGADACAEQADADABAGIAAALIAAAsg");
	this.shape_74.setTransform(634.8,21.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AgaAgQgHgGABgJQAAgFACgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgFADgCAIIgLgCQACgHADgFQAEgFAHgCQAHgDAIAAQAKAAAFACQAGACADAEQADADABAFIABALIAAAQQAAARABAFQAAAEADAEIgNAAQgDgEAAgFQgHAGgGACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgCADAAADQAAAFAEADQAEADAIAAQAFAAAGgDQAFgDADgFQACgFAAgIIAAgEQgHADgMABg");
	this.shape_75.setTransform(609.1,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30,p:{x:-11.9,y:19}},{t:this.shape_29,p:{x:-6.1,y:20.3}},{t:this.shape_28,p:{x:0.1,y:18.9}},{t:this.shape_27,p:{x:5.6,y:20.3}},{t:this.shape_26,p:{x:12.4,y:20.3}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:42.2,y:19}},{t:this.shape_21,p:{x:47.6,y:20.3}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:88.7,y:20.3}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-3,y:37.9}},{t:this.shape_12},{t:this.shape_11,p:{x:11.6,y:37.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:41.9,y:36.7}},{t:this.shape_6},{t:this.shape_5,p:{x:61.3,y:37.9}},{t:this.shape_4,p:{x:71,y:37.9}},{t:this.shape_3,p:{x:78.5,y:36.6}},{t:this.shape_2},{t:this.shape_1,p:{x:92,y:36.6}},{t:this.shape}]},1).to({state:[{t:this.shape_30,p:{x:220.6,y:20.4}},{t:this.shape_53,p:{x:226.4}},{t:this.shape_52,p:{x:232.6}},{t:this.shape_51,p:{x:238.1,y:21.7}},{t:this.shape_50,p:{x:244.9}},{t:this.shape_5,p:{x:252.5,y:21.7}},{t:this.shape_49},{t:this.shape_48,p:{x:269.8}},{t:this.shape_47,p:{x:274.7}},{t:this.shape_46,p:{x:280.1}},{t:this.shape_45},{t:this.shape_44,p:{x:303.5}},{t:this.shape_43,p:{x:310.9}},{t:this.shape_7,p:{x:316.4,y:20.5}},{t:this.shape_11,p:{x:321.2,y:21.7}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_4,p:{x:229.5,y:39.3}},{t:this.shape_40,p:{x:237.5}},{t:this.shape_39,p:{x:244.1}},{t:this.shape_38,p:{x:249.7}},{t:this.shape_37,p:{x:261.4}},{t:this.shape_36,p:{x:268.8}},{t:this.shape_35,p:{x:274.4}},{t:this.shape_34},{t:this.shape_33,p:{x:293.8}},{t:this.shape_27,p:{x:303.5,y:39.3}},{t:this.shape_3,p:{x:311,y:38}},{t:this.shape_32},{t:this.shape_1,p:{x:324.5,y:38}},{t:this.shape_31,p:{x:330,y:39.3}}]},1).to({state:[{t:this.shape_30,p:{x:412.1,y:22.6}},{t:this.shape_69},{t:this.shape_28,p:{x:424.1,y:22.5}},{t:this.shape_21,p:{x:429.6,y:23.9}},{t:this.shape_26,p:{x:436.4,y:23.9}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_22,p:{x:466.2,y:22.6}},{t:this.shape_51,p:{x:471.6,y:23.9}},{t:this.shape_29,p:{x:479.4,y:23.9}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_16,p:{x:512.7,y:23.9}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_11,p:{x:435.6,y:41.5}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_7,p:{x:465.9,y:40.3}},{t:this.shape_55},{t:this.shape_5,p:{x:485.3,y:41.5}},{t:this.shape_31,p:{x:495,y:41.5}},{t:this.shape_3,p:{x:502.6,y:40.2}},{t:this.shape_54},{t:this.shape_1,p:{x:516.1,y:40.2}},{t:this.shape_4,p:{x:521.5,y:41.5}}]},1).to({state:[{t:this.shape_30,p:{x:567.5,y:20.4}},{t:this.shape_53,p:{x:573.3}},{t:this.shape_52,p:{x:579.5}},{t:this.shape_31,p:{x:585,y:21.7}},{t:this.shape_50,p:{x:591.8}},{t:this.shape_5,p:{x:599.4,y:21.7}},{t:this.shape_75},{t:this.shape_48,p:{x:616.8}},{t:this.shape_47,p:{x:621.6}},{t:this.shape_46,p:{x:627}},{t:this.shape_74},{t:this.shape_44,p:{x:650.4}},{t:this.shape_43,p:{x:657.9}},{t:this.shape_7,p:{x:663.4,y:20.5}},{t:this.shape_11,p:{x:668.1,y:21.7}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_4,p:{x:576.4,y:39.3}},{t:this.shape_40,p:{x:584.4}},{t:this.shape_39,p:{x:591}},{t:this.shape_38,p:{x:596.7}},{t:this.shape_37,p:{x:608.4}},{t:this.shape_36,p:{x:615.8}},{t:this.shape_35,p:{x:621.3}},{t:this.shape_71},{t:this.shape_33,p:{x:640.7}},{t:this.shape_27,p:{x:650.4,y:39.3}},{t:this.shape_3,p:{x:658,y:38}},{t:this.shape_70},{t:this.shape_1,p:{x:671.5,y:38}},{t:this.shape_13,p:{x:676.9,y:39.3}}]},1).wait(1));

	// Capa 2
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(242,242,242,0)").s().p("AheGEIlGAAQhkAAAAhkIAAqeQAAhkBkAAINJAAQBkAAAABkIAAKeQAABkhkAAIlFAAIhgBfg");
	this.shape_76.setTransform(27.1,32.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F2F2F2").s().p("AiGCHIAAkNIENAAIAAENg");
	this.shape_77.setTransform(27.2,61.6,1,1,-45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F2F2F2").s().p("AuYGzQhkAAAAhjIAAqfQAAhjBkgBIcxAAQBkABAABjIAAKfQAABjhkAAg");
	this.shape_78.setTransform(77.1,27.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#CCCCCC").ss(1,1,1).p("AzDAAMAmHAAA");
	this.shape_79.setTransform(329.7,29.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F2F2F2").s().p("Az2GzQhkAAAAhjIAAqfQAAhjBkgBMAntAAAQBkABAABjIAAKfQAABjhkAAg");
	this.shape_80.setTransform(332.1,27.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#CCCCCC").ss(1,1,1).p("AuDAAIcHAA");
	this.shape_81.setTransform(498.1,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76}]}).to({state:[{t:this.shape_78,p:{x:77.1}},{t:this.shape_77,p:{x:27.2}}]},1).to({state:[{t:this.shape_80,p:{x:332.1}},{t:this.shape_77,p:{x:247.2}},{t:this.shape_79,p:{x:329.7}}]},1).to({state:[{t:this.shape_78,p:{x:497.1}},{t:this.shape_77,p:{x:447.2}},{t:this.shape_81}]},1).to({state:[{t:this.shape_80,p:{x:672.1}},{t:this.shape_77,p:{x:643.2}},{t:this.shape_79,p:{x:669.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-16,104.2,96.7);


(lib.indicadores_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAtAAQAAASgOANQgNAOgSAAQgSAAgNgOQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANQAOANAAASg");
	this.shape.setTransform(4.5,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFAFA").s().p("AgfAfQgNgMAAgTQAAgSANgNQANgNASAAQATAAAMANQANANABASQgBATgNAMQgMANgTABQgSgBgNgNg");
	this.shape_1.setTransform(4.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgfAfQgNgMAAgTQAAgSANgNQANgNASAAQATAAAMANQANANABASQgBATgNAMQgMANgTABQgSgBgNgNg");
	this.shape_2.setTransform(4.5,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CC33").s().p("AgfAfQgNgMAAgTQAAgSANgNQANgNASAAQATAAAMANQANANABASQgBATgNAMQgMANgTABQgSgBgNgNg");
	this.shape_3.setTransform(4.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10.9,10.9);


(lib.ico3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABVisIioAAQgdAAgSARQgTASAAAcIAACOQAAAcATASQASASAdAAIAsAAIBZBMIAAhMIAjAAQAdAAASgSQASgSAAgcIAAiOQAAgcgSgSQgSgRgdAAg");
	this.shape.setTransform(-0.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhAAAICBAA");
	this.shape_1.setTransform(0.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhAAAICBAA");
	this.shape_2.setTransform(0.2,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-17.1,32,36.7);


(lib.ico2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAaA2Igzg0IAzg3");
	this.shape.setTransform(1.3,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhEB4QA5AAAogpQAogoAAg4QAAg8gtgq");
	this.shape_1.setTransform(7.8,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("Agag1IA1A0Ig1A3");
	this.shape_2.setTransform(-0.2,-14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABFh3Qg5AAgnApQgpAoAAA4QAAAeAMAbQAMAaAVAT");
	this.shape_3.setTransform(-6.6,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-20.9,30.2,40.6);


(lib.ico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("Ai4AAIFxAA");
	this.shape.setTransform(0,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2).p("AAAi4IAAFx");
	this.shape_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-19.5,39,39);


(lib.ClipGroup_2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnZHaQjEjEAAkWQAAkVDEjEQDEjEEVAAQEWAADEDEQDEDEAAEVQAAEWjEDEQjEDEkWAAQkVAAjEjEg");
	mask.setTransform(67,67);

	// Capa_3
	this.instance = new lib.Módulo41();
	this.instance.parent = this;
	this.instance.setTransform(0,-4,0.904,0.904);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2copy2, new cjs.Rectangle(0,0,134,134), null);


(lib.ClipGroup_1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnZHaQjEjEAAkWQAAkVDEjEQDEjEEVAAQEWAADEDEQDEDEAAEVQAAEWjEDEQjEDEkWAAQkVAAjEjEg");
	mask.setTransform(67,67);

	// Capa_3
	this.instance = new lib.Módulo31();
	this.instance.parent = this;
	this.instance.setTransform(-38,-2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1copy, new cjs.Rectangle(0,0,134,134), null);


(lib.ClipGroup_0copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnZHaQjEjEAAkWQAAkVDEjEQDEjEEVAAQEWAADEDEQDEDEAAEVQAAEWjEDEQjEDEkWAAQkVAAjEjEg");
	mask.setTransform(67,67);

	// Capa_3
	this.instance = new lib.mod02_c_istock_831277780();
	this.instance.parent = this;
	this.instance.setTransform(-86,-6,0.436,0.436);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0copy, new cjs.Rectangle(0,0,134,134), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnZHaQjEjEAAkWQAAkVDEjEQDEjEEVAAQEWAADEDEQDEDEAAEVQAAEWjEDEQjEDEkWAAQkVAAjEjEg");
	mask.setTransform(67,67);

	// Capa_3
	this.instance = new lib.Módulo11();
	this.instance.parent = this;
	this.instance.setTransform(-46,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,134,134), null);


(lib.botontema_btnmini = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.098)").s().p("AtMCZQhvgBgIhnIgBAAIAAhRQAAh4B4ABIaZAAQB4gBAAB4IAABRIgBAAQgIBnhvABg");
	this.shape.setTransform(90.3,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AtMCZQhvgBgIhnIgBAAIAAhRQAAh4B4ABIaZAAQB4gBAAB4IAABRIgBAAQgIBnhvABg");
	this.shape_1.setTransform(90.3,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.botontema_btnGDE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.098)").s().p("AsaEVQh4AAAAh4IAAk6QAAh4B4ABIY1AAQB4gBAAB4IAAE6QAAB4h4AAg");
	this.shape.setTransform(90.3,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AsaEVQh4AAAAh4IAAk6QAAh4B4ABIY1AAQB4gBAAB4IAAE6QAAB4h4AAg");
	this.shape_1.setTransform(90.3,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.botontema_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.098)").s().p("AsaC7Qh4AAAAh4IAAiPIAAAAQAFhuBzAAIY1AAQBzAAAFBuIAACPQAAB4h4AAg");
	this.shape.setTransform(90.3,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC33").s().p("AsaC7Qh4AAAAh4IAAiPIAAAAQAFhuBzAAIY1AAQBzAAAFBuIAACPQAAB4h4AAg");
	this.shape_1.setTransform(90.3,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.sa();
	this.instance.parent = this;
	this.instance.setTransform(704.3,165.2,1,1.1,0,0,0,100.4,115.5);

	this.instance_1 = new lib.sa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(254,166.2,1.025,1.065,0,0,0,100.4,115.5);

	this.instance_2 = new lib.sa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(472.9,173.2,1,1.1,0,0,0,100.4,115.5);

	this.instance_3 = new lib.sa();
	this.instance_3.parent = this;
	this.instance_3.setTransform(33.5,162.3,1.03,1,0,0,0,100.4,115.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2,p:{scaleX:1,scaleY:1.1,x:472.9,y:173.2}},{t:this.instance_1,p:{scaleX:1.025,scaleY:1.065,x:254,y:166.2}},{t:this.instance,p:{x:704.3,y:165.2}}]}).to({state:[{t:this.instance_2,p:{scaleX:1.025,scaleY:1.065,x:254,y:166.2}},{t:this.instance_1,p:{scaleX:1,scaleY:1.1,x:472.9,y:173.2}},{t:this.instance,p:{x:704.3,y:165.2}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.03,scaleY:1,x:33.5,y:164.3}},{t:this.instance_1,p:{scaleX:1,scaleY:1.1,x:472.9,y:171.6}},{t:this.instance,p:{x:704.3,y:165.2}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.03,scaleY:1,x:33.5,y:164.3}},{t:this.instance_1,p:{scaleX:1.025,scaleY:1.065,x:254,y:166.2}},{t:this.instance,p:{x:704.3,y:165.2}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.03,scaleY:1,x:33.5,y:164.3}},{t:this.instance_1,p:{scaleX:1.025,scaleY:1.065,x:254,y:166.2}},{t:this.instance,p:{x:472.9,y:170}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,38.2,874.9,261.8);


(lib.mc_ico3_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjiDrQhehiAAiJQAAiIBehiQBehhCEAAQCFAABeBhQBeBiAACIQAACJheBiQheBhiFAAQiEAAhehhg");

	// Capa 1
	this.instance = new lib.ico3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.4,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.4,regY:1.3,x:-0.8,y:0.9},0).wait(1).to({y:-2.8},0).wait(1).to({y:-9.2},0).wait(1).to({y:-18.1},0).wait(1).to({y:-28.3},0).wait(1).to({y:-38},0).wait(1).to({y:-45.3},0).wait(1).to({y:-49.6},0).wait(1).to({regX:0,regY:0,x:-0.4,y:-52.3},0).wait(1).to({y:54.7},0).wait(1).to({regX:-0.4,regY:1.3,x:-0.8,y:55.2},0).wait(1).to({y:52.6},0).wait(1).to({y:47.9},0).wait(1).to({y:40.8},0).wait(1).to({y:31.3},0).wait(1).to({y:20.5},0).wait(1).to({y:10.6},0).wait(1).to({y:4.1},0).wait(1).to({regX:0,regY:0,x:-0.4,y:0.7},0).wait(1));

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEAA2A").s().p("AjiDrQhehiAAiJQAAiIBehiQBehhCEAAQCFAABeBhQBeBiAACIQAACJheBiQheBhiFAAQiEAAhehhg");
	this.shape.setTransform(0.2,-0.4,1,0.966);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-32.4,64,64.2);


(lib.mc_ico1_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjiDrQhehiAAiJQAAiIBehiQBehhCEAAQCFAABeBhQBeBiAACIQAACJheBiQheBhiFAAQiEAAhehhg");

	// Capa 1
	this.instance = new lib.ico("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.4,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-0.5},0).wait(1).to({y:-4.1},0).wait(1).to({y:-10.5},0).wait(1).to({y:-19.4},0).wait(1).to({y:-29.7},0).wait(1).to({y:-39.3},0).wait(1).to({y:-46.7},0).wait(1).to({y:-51},0).wait(1).to({y:-52.3},0).wait(1).to({y:54.7},0).wait(1).to({y:53.9},0).wait(1).to({y:51.3},0).wait(1).to({y:46.6},0).wait(1).to({y:39.5},0).wait(1).to({y:30},0).wait(1).to({y:19.2},0).wait(1).to({y:9.3},0).wait(1).to({y:2.8},0).wait(1).to({y:0.7},0).wait(1));

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEAA2A").s().p("AjiDrQhehiAAiJQAAiIBehiQBehhCEAAQCFAABeBhQBeBiAACIQAACJheBiQheBhiFAAQiEAAhehhg");
	this.shape.setTransform(0,0.3,1,0.966);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-31.8,64.2,64.2);


(lib.Copiademc_ico2_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjiDrQhehiAAiJQAAiIBehiQBehhCEAAQCFAABeBhQBeBiAACIQAACJheBiQheBhiFAAQiEAAhehhg");

	// Capa 1
	this.instance = new lib.ico2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.4,0.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.5,regY:-0.7,x:0.1,y:-1.1},0).wait(1).to({y:-4.8},0).wait(1).to({y:-11.2},0).wait(1).to({y:-20.1},0).wait(1).to({y:-30.3},0).wait(1).to({y:-40},0).wait(1).to({y:-47.3},0).wait(1).to({y:-51.6},0).wait(1).to({regX:0,regY:0,x:-0.4,y:-52.3},0).wait(1).to({y:54.7},0).wait(1).to({regX:0.5,regY:-0.7,x:0.1,y:53.2},0).wait(1).to({y:50.6},0).wait(1).to({y:45.9},0).wait(1).to({y:38.8},0).wait(1).to({y:29.3},0).wait(1).to({y:18.5},0).wait(1).to({y:8.6},0).wait(1).to({y:2.1},0).wait(1).to({regX:0,regY:0,x:-0.4,y:0.7},0).wait(1));

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEAA2A").s().p("AjiDrQhehiAAiJQAAiIBehiQBehhCEAAQCFAABeBhQBeBiAACIQAACJheBiQheBhiFAAQiEAAhehhg");
	this.shape.setTransform(0.2,-0.4,1,0.966);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-32.4,64,64.2);


(lib.b4_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKBoIAAgqIhTAAIAAgjIBYiCIAiAAIAACCIAZAAIAAAjIgZAAIAAAqgAgkAbIAuAAIAAhGg");
	this.shape.setTransform(98.5,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AjvC+QhPhPAAhvQAAhaA3hIIADgEIABgBQAogzgrgeQgNgJgUgHIgRgEQBvAABpAjIACACIAYAJIADABIBIAhIAEADIAWAMIABABQAlAXAgAYIAoAjIAUASIA6BEQBBBUAjBkQgwhXguAIQgPACgMALIgKALQgjBBg+AoQhBAnhLAAQhwAAhOhPg");
	this.shape_1.setTransform(104.1,20.2,0.721,0.721);

	this.text = new cjs.Text(" Herramienta SuccessFactors- TMR", "bold 16px 'Arial'", "#D73D45");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 182;
	this.text.parent = this;
	this.text.setTransform(72.8,137.5);

	this.instance = new lib.ClipGroup_2copy2();
	this.instance.parent = this;
	this.instance.setTransform(69,129.5,1,1,0,0,0,67,130.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b4_i, new cjs.Rectangle(-20.4,-5,221.3,179.3), null);


(lib.b3_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBaQgTgRgDgaIAngEQABAOAIAIQAIAIAMAAQALAAAJgJQAIgKAAgQQAAgPgIgIQgIgJgMAAQgGAAgLADIAEgfQAQAAAIgHQAJgIAAgMQAAgLgHgGQgGgGgJAAQgKAAgIAHQgHAHgBAOIglgHQAEgSAIgLQAHgMAOgGQAOgHARAAQAcAAASATQAOAPAAATQAAAcgdAQQARAEALAMQALANAAATQAAAbgUAUQgUATgdAAQgcAAgSgQg");
	this.shape.setTransform(96.8,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AjvC+QhPhPAAhvQAAhaA3hIIADgEIABgBQAogzgrgeQgNgJgUgHIgRgEQBvAABpAjIACACIAYAJIADABIBIAhIAEADIAWAMIABABQAlAXAgAYIAoAjIAUASIA6BEQBBBUAjBkQgwhXguAIQgPACgMALIgKALQgjBBg+AoQhBAnhLAAQhwAAhOhPg");
	this.shape_1.setTransform(101.5,19.4,0.721,0.721);

	this.text = new cjs.Text("Ejecución del proceso Talent Management Review", "bold 16px 'Arial'", "#D73D45");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 218;
	this.text.parent = this;
	this.text.setTransform(74.6,137);

	this.instance = new lib.ClipGroup_1copy();
	this.instance.parent = this;
	this.instance.setTransform(67,129.8,1,1,0,0,0,67,130.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b3_i, new cjs.Rectangle(-38,-2.7,223.5,186.7), null);


(lib.b2_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" Pasos para identificar el talento", "bold 16px 'Arial'", "#D73D45");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 168;
	this.text.parent = this;
	this.text.setTransform(71,138.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBoQADgVALgTQALgTAigeQAZgYAHgJQAIgMAAgNQAAgNgHgHQgIgHgMAAQgMAAgHAHQgHAIgBASIgogFQAEggASgPQATgOAbAAQAfAAARAQQASARAAAZQAAANgFAOQgFAMgLANQgIAJgSASIgXAWIgIALIBOAAIAAAlg");
	this.shape.setTransform(95.7,21.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AjvC+QhPhPAAhvQAAhaA3hIIADgEIABgBQAogzgrgeQgNgJgUgHIgRgEQBvAABpAjIACACIAYAJIADABIBIAhIAEADIAWAMIABABQAlAXAgAYIAoAjIAUASIA6BEQBBBUAjBkQgwhXguAIQgPACgMALIgKALQgjBBg+AoQhBAnhLAAQhwAAhOhPg");
	this.shape_1.setTransform(100.7,20.2,0.721,0.721);

	this.instance = new lib.ClipGroup_0copy();
	this.instance.parent = this;
	this.instance.setTransform(67,130.5,1,1,0,0,0,67,130.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b2_i, new cjs.Rectangle(-86,-6,243,189.1), null);


(lib.b1_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Introducción a Talent Management Review (TMR)", "bold 16px 'Arial'", "#D73D45");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 216;
	this.text.parent = this;
	this.text.setTransform(104,138.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGBoIAAiVQgVAVgeAKIAAgkQAQgGASgOQASgOAGgTIAgAAIAADPg");
	this.shape.setTransform(135.2,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AjvC+QhPhPAAhvQAAhaA3hIIADgEIABgBQAogzgrgeQgNgJgUgHIgRgEQBvAABpAjIACACIAYAJIADABIBIAhIAEADIAWAMIABABQAlAXAgAYIAoAjIAUASIA6BEQBBBUAjBkQgwhXguAIQgPACgMALIgKALQgjBBg+AoQhBAnhLAAQhwAAhOhPg");
	this.shape_1.setTransform(141,20.4,0.721,0.721);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(104.7,129.5,1,1,0,0,0,67,130.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b1_i, new cjs.Rectangle(-8.3,-1,222.3,215.2), null);


(lib.mc_rollover3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.instance = new lib.mc_ico3_anim();
	this.instance.parent = this;
	this.instance.setTransform(32.8,31.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.008)").s().p("AmEGFQihiiAAjjQAAjjChigQCiiiDiAAQDkAACgCiQCiCgAADjQAADjiiCiQigChjkAAQjiAAiiihg");
	this.shape.setTransform(30.9,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-23.7,110,110);


(lib.mc_rollover2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.instance = new lib.Copiademc_ico2_anim();
	this.instance.parent = this;
	this.instance.setTransform(32.1,31.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.008)").s().p("AmEGFQihiiAAjjQAAjjChigQCiiiDiAAQDkAACgCiQCiCgAADjQAADjiiCiQigChjkAAQjiAAiiihg");
	this.shape.setTransform(30.9,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-23.7,110,110);


(lib.mc_rollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.instance = new lib.mc_ico1_anim();
	this.instance.parent = this;
	this.instance.setTransform(31.1,31.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,0,0.008)").s().p("AmEGFQihiiAAjjQAAjjChigQCiiiDiAAQDkAACgCiQCiCgAADjQAADjiiCiQigChjkAAQjiAAiiihg");
	this.shape.setTransform(30.9,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.1,-23.7,110,110);


// stage content:
(lib.template_menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
		var root = this;
		var raiz = this.submenu;
		var modulos = 4
		var botones = 4;
		
		for (var i = 1; i <= modulos; i++)
		{
			root['b' + i].n = i;
			root['b' + i].cursor = "pointer";
		
			root['b' + i].addEventListener("click", function (e)
			{
				raiz.gotoAndStop(e.currentTarget.n);
			});
		
			root['b' + i].addEventListener("mouseover", function (e)
			{
				console.log("new over");
				//root['mc_ro' + e.currentTarget.n].gotoAndStop(1);
				//root['actor'].gotoAndStop(e.currentTarget.n);
			});
		
			root['b' + i].addEventListener("mouseout", function (e)
			{
				console.log("new out");
				root['mc_ro' + e.currentTarget.n].gotoAndStop(0);
				root['actor'].gotoAndStop(0);
			});
		}
		function llamar_tema(id)
		{
			console.log("entro al llamar tema");
			parent.ocultar_menu();
			parent.ir(id);
		}
		
		this.cambioEdo = function (n, edo, cambio)
		{
			console.log("parametros para actualizar menu son");
			console.log(n+"-"+edo+"-"+cambio);
			if (parent.backdoor)
			{
				cambio = true;
			}
			root['indicador' + n].gotoAndStop(edo);
			root['btn_' + n].removeAllEventListeners();
			root['btn_' + n].mouseEnabled = false;
			console.log("entro al cambio " + n + " " + edo + " " + cambio)
			if (n == 0 || edo > 0 || cambio == true)
			{
				console.log("entro al if" + n + " " + edo + " " + cambio)
				root['btn_' + n].mouseEnabled = true;
				root['btn_' + n].cursor = "pointer";
				
				root['btn_' + n].addEventListener("click", function ()
				{
					llamar_tema(n);
					raiz.gotoAndStop(0);
				});
				root['btn_' + n].addEventListener("mouseover", function ()
				{
					root['btn_' + n].gotoAndStop(1);
				});
				root['btn_' + n].addEventListener("mouseout", function ()
				{
					root['btn_' + n].gotoAndStop(0);
				});
				
			}
			else
			{
				console.log("entro al else" + n + " " + edo + " " + cambio)
		
			}
		}
		
		try
		{
			parent.getMenu(this);
		}
		catch (e)
		{
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// capa para temas
	this.submenu = new lib.menu();
	this.submenu.parent = this;
	this.submenu.setTransform(195.1,316.8,1,1,0,0,0,88.8,111.5);

	this.timeline.addTween(cjs.Tween.get(this.submenu).wait(24));

	// submenus
	this.indicador12 = new lib.indicadores_mc();
	this.indicador12.parent = this;
	this.indicador12.setTransform(727.3,267.6,1,1,0,0,0,4.5,4.5);

	this.text = new cjs.Text("Introducción", "15px 'Arial'", "#606060");
	this.text.lineHeight = 17;
	this.text.lineWidth = 157;
	this.text.parent = this;
	this.text.setTransform(736.7,258.9);

	this.btn_12 = new lib.botontema_btnmini();
	this.btn_12.parent = this;
	this.btn_12.setTransform(803.9,272.8,1,1,0,0,0,88,11.7);
	new cjs.ButtonHelper(this.btn_12, 0, 1, 2, false, new lib.botontema_btnmini(), 3);

	this.text_1 = new cjs.Text("Sesión de sucesión", "15px 'Arial'", "#606060");
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 148;
	this.text_1.parent = this;
	this.text_1.setTransform(505.4,455.8);

	this.indicador11 = new lib.indicadores_mc();
	this.indicador11.parent = this;
	this.indicador11.setTransform(492.8,462.4,1,1,0,0,0,4.5,4.5);

	this.btn_11 = new lib.botontema_btnmini();
	this.btn_11.parent = this;
	this.btn_11.setTransform(572.5,468.8,1,1,0,0,0,88.2,11.6);
	new cjs.ButtonHelper(this.btn_11, 0, 1, 2, false, new lib.botontema_btnmini(), 3);

	this.text_2 = new cjs.Text("Sesión de calibración", "15px 'Arial'", "#606060");
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 154;
	this.text_2.parent = this;
	this.text_2.setTransform(505.4,421.6);

	this.indicador10 = new lib.indicadores_mc();
	this.indicador10.parent = this;
	this.indicador10.setTransform(492.8,427.9,1,1,0,0,0,4.5,4.5);

	this.btn_10 = new lib.botontema_btnmini();
	this.btn_10.parent = this;
	this.btn_10.setTransform(572.5,433.8,1,1,0,0,0,88.2,11.6);
	new cjs.ButtonHelper(this.btn_10, 0, 1, 2, false, new lib.botontema_btnmini(), 3);

	this.text_3 = new cjs.Text("Metodología 9-Box", "15px 'Arial'", "#606060");
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 146;
	this.text_3.parent = this;
	this.text_3.setTransform(505.4,386.3);

	this.indicador9 = new lib.indicadores_mc();
	this.indicador9.parent = this;
	this.indicador9.setTransform(492.8,392.9,1,1,0,0,0,4.5,4.5);

	this.indicador8 = new lib.indicadores_mc();
	this.indicador8.parent = this;
	this.indicador8.setTransform(492.8,346.3,1,1,0,0,0,4.5,4.5);

	this.text_4 = new cjs.Text("Identificación del Desempeño", "15px 'Arial'", "#606060");
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 157;
	this.text_4.parent = this;
	this.text_4.setTransform(505.4,339.2);

	this.btn_9 = new lib.botontema_btnmini();
	this.btn_9.parent = this;
	this.btn_9.setTransform(572.5,399.3,1,1,0,0,0,88.2,11.6);
	new cjs.ButtonHelper(this.btn_9, 0, 1, 2, false, new lib.botontema_btnmini(), 3);

	this.btn_8 = new lib.botontema_btn();
	this.btn_8.parent = this;
	this.btn_8.setTransform(572.6,359,1,1,0,0,0,88,11.8);
	new cjs.ButtonHelper(this.btn_8, 0, 1, 2, false, new lib.botontema_btn(), 3);

	this.text_5 = new cjs.Text("Evaluación de Potencial", "15px 'Arial'", "#606060");
	this.text_5.lineHeight = 17;
	this.text_5.lineWidth = 143;
	this.text_5.parent = this;
	this.text_5.setTransform(505.4,295.3);

	this.indicador7 = new lib.indicadores_mc();
	this.indicador7.parent = this;
	this.indicador7.setTransform(492.8,302.4,1,1,0,0,0,4.5,4.5);

	this.indicador6 = new lib.indicadores_mc();
	this.indicador6.parent = this;
	this.indicador6.setTransform(492.8,267.6,1,1,0,0,0,4.5,4.5);

	this.text_6 = new cjs.Text("Panorama general", "15px 'Arial'", "#606060");
	this.text_6.lineHeight = 17;
	this.text_6.lineWidth = 157;
	this.text_6.parent = this;
	this.text_6.setTransform(505.4,260.5);

	this.btn_7 = new lib.botontema_btn();
	this.btn_7.parent = this;
	this.btn_7.setTransform(572.5,313.1,1,1,0,0,0,88.2,11.5);
	new cjs.ButtonHelper(this.btn_7, 0, 1, 2, false, new lib.botontema_btn(), 3);

	this.btn_6 = new lib.botontema_btnmini();
	this.btn_6.parent = this;
	this.btn_6.setTransform(572.6,274.4,1,1,0,0,0,88,11.7);
	new cjs.ButtonHelper(this.btn_6, 0, 1, 2, false, new lib.botontema_btnmini(), 3);

	this.text_7 = new cjs.Text("Definición de perfiles de éxito.", "15px 'Arial'", "#606060");
	this.text_7.lineHeight = 17;
	this.text_7.lineWidth = 143;
	this.text_7.parent = this;
	this.text_7.setTransform(285.2,402.2);

	this.indicador5 = new lib.indicadores_mc();
	this.indicador5.parent = this;
	this.indicador5.setTransform(275.8,411.4,1,1,0,0,0,4.5,4.5);

	this.indicador4 = new lib.indicadores_mc();
	this.indicador4.parent = this;
	this.indicador4.setTransform(275.8,363.3,1,1,0,0,0,4.5,4.5);

	this.text_8 = new cjs.Text("Identificación de puestos críticos", "15px 'Arial'", "#606060");
	this.text_8.lineHeight = 17;
	this.text_8.lineWidth = 157;
	this.text_8.parent = this;
	this.text_8.setTransform(285.2,354.6);

	this.btn_5 = new lib.botontema_btn();
	this.btn_5.parent = this;
	this.btn_5.setTransform(352.4,420.7,1,1,0,0,0,88.2,11.6);
	new cjs.ButtonHelper(this.btn_5, 0, 1, 2, false, new lib.botontema_btn(), 3);

	this.btn_4 = new lib.botontema_btn();
	this.btn_4.parent = this;
	this.btn_4.setTransform(352.4,373.4,1,1,0,0,0,88,11.8);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2, false, new lib.botontema_btn(), 3);

	this.text_9 = new cjs.Text("Entendimiento de la estrategia de negocio", "15px 'Arial'", "#606060");
	this.text_9.lineHeight = 17;
	this.text_9.lineWidth = 143;
	this.text_9.parent = this;
	this.text_9.setTransform(285.2,304.2);

	this.indicador3 = new lib.indicadores_mc();
	this.indicador3.parent = this;
	this.indicador3.setTransform(275.8,312.9,1,1,0,0,0,4.5,4.5);

	this.indicador2 = new lib.indicadores_mc();
	this.indicador2.parent = this;
	this.indicador2.setTransform(275.8,277.3,1,1,0,0,0,4.5,4.5);

	this.text_10 = new cjs.Text("Panorama general", "15px 'Arial'", "#606060");
	this.text_10.lineHeight = 17;
	this.text_10.lineWidth = 167;
	this.text_10.parent = this;
	this.text_10.setTransform(285.2,268.6);

	this.btn_3 = new lib.botontema_btn();
	this.btn_3.parent = this;
	this.btn_3.setTransform(352.4,323,1,1,0,0,0,88.2,11.5);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.botontema_btn(), 3);

	this.btn_2 = new lib.botontema_btnmini();
	this.btn_2.parent = this;
	this.btn_2.setTransform(352.4,282.3,1,1,0,0,0,88,11.7);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.botontema_btnmini(), 3);

	this.text_11 = new cjs.Text("Mapa general del proceso", "15px 'Arial'", "#606060");
	this.text_11.lineHeight = 17;
	this.text_11.lineWidth = 143;
	this.text_11.parent = this;
	this.text_11.setTransform(64,326.2);

	this.indicador1 = new lib.indicadores_mc();
	this.indicador1.parent = this;
	this.indicador1.setTransform(54.6,335.4,1,1,0,0,0,4.5,4.5);

	this.indicador0 = new lib.indicadores_mc();
	this.indicador0.parent = this;
	this.indicador0.setTransform(49.1,265.8);

	this.text_12 = new cjs.Text("¿En qué consiste Talent Management Review (TMR)?", "15px 'Arial'", "#606060");
	this.text_12.lineHeight = 17;
	this.text_12.lineWidth = 143;
	this.text_12.parent = this;
	this.text_12.setTransform(64,261.6);

	this.btn_1 = new lib.botontema_btn();
	this.btn_1.parent = this;
	this.btn_1.setTransform(131.1,346,1,1,0,0,0,88.1,11.5);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.botontema_btn(), 3);

	this.btn_0 = new lib.botontema_btnGDE();
	this.btn_0.parent = this;
	this.btn_0.setTransform(131.1,285.6,1,1,0,0,0,88,11.8);
	new cjs.ButtonHelper(this.btn_0, 0, 1, 2, false, new lib.botontema_btnGDE(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_0},{t:this.btn_1},{t:this.text_12},{t:this.indicador0},{t:this.indicador1},{t:this.text_11},{t:this.btn_2},{t:this.btn_3},{t:this.text_10},{t:this.indicador2},{t:this.indicador3},{t:this.text_9},{t:this.btn_4},{t:this.btn_5},{t:this.text_8},{t:this.indicador4},{t:this.indicador5},{t:this.text_7},{t:this.btn_6},{t:this.btn_7},{t:this.text_6},{t:this.indicador6},{t:this.indicador7},{t:this.text_5},{t:this.btn_8},{t:this.btn_9},{t:this.text_4},{t:this.indicador8},{t:this.indicador9},{t:this.text_3},{t:this.btn_10},{t:this.indicador10},{t:this.text_2},{t:this.btn_11},{t:this.indicador11},{t:this.text_1},{t:this.btn_12},{t:this.text},{t:this.indicador12}]}).wait(24));

	// rollovers info
	this.actor = new lib.mc_Actores();
	this.actor.parent = this;
	this.actor.setTransform(293.9,51.8,1,1,0,0,0,31,31);
	this.actor._off = true;

	this.timeline.addTween(cjs.Tween.get(this.actor).wait(23).to({_off:false},0).wait(1));

	// rollover botones
	this.mc_ro4 = new lib.mc_rollover3();
	this.mc_ro4.parent = this;
	this.mc_ro4.setTransform(762,98.4,1.154,1.154);

	this.mc_ro3 = new lib.mc_rollover3();
	this.mc_ro3.parent = this;
	this.mc_ro3.setTransform(529.3,113.9,1.154,1.154);

	this.mc_ro2 = new lib.mc_rollover2();
	this.mc_ro2.parent = this;
	this.mc_ro2.setTransform(314.7,101.4,1.154,1.154);

	this.mc_ro1 = new lib.mc_rollover();
	this.mc_ro1.parent = this;
	this.mc_ro1.setTransform(99.5,100.5,1.154,1.154);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_ro1},{t:this.mc_ro2},{t:this.mc_ro3},{t:this.mc_ro4}]},23).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhHAAixMAAAhFhMCOBAAAMAAABFhg");
	this.shape.setTransform(485.5,260.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:true},1).wait(1));

	// imgs
	this.b4 = new lib.b4_i();
	this.b4.parent = this;
	this.b4.setTransform(778.7,152.3,1,1,0,0,0,48.5,81.5);

	this.b3 = new lib.b3_i();
	this.b3.parent = this;
	this.b3.setTransform(547.5,152.3,1,1,0,0,0,48.5,81.5);

	this.b2 = new lib.b2_i();
	this.b2.parent = this;
	this.b2.setTransform(308,149.3,1,1,0,0,0,24,79.3);

	this.b1 = new lib.b1_i();
	this.b1.parent = this;
	this.b1.setTransform(109.6,169.5,1,1,0,0,0,79.3,98.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4}]}).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(497,312.6,918,467.6);
// library properties:
lib.properties = {
	width: 950,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/template_menu_atlas_.png", id:"template_menu_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;