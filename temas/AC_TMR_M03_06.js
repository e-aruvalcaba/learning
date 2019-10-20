(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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


(lib.titulott6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Sesión de sucesión", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(92.9,34);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,32,189.9,146.7);


(lib.tituloestatico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// TITULO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgLgKAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(-293.7,-230);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.8,-230.1);

	this.text = new cjs.Text("Sesión de sucesión", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,193.7,27.1), null);


(lib.tapageneralblanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.retosactualesfuturos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A7476").s().p("Aj/AJIAAgRIH/AAIAAARg");
	this.shape.setTransform(365.5,179.4,1.173,1.173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A7476").s().p("Aj/AJIAAgRIH/AAIAAARg");
	this.shape_1.setTransform(204.7,179.4,1.173,1.173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E33239").s().p("AggAaQgDggAFgWIAMACQAOABALAAIAYgDIACASQACAUgBAQQgUADgQAAQgQAAgOgDg");
	this.shape_2.setTransform(185,156.1,1.173,1.173);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A1213").s().p("AgWBqQgIgDgBgPIAAgQQACgDABgGQABgJgDgSQgEgRACgeQAAgVACgMQABgDAFgJIAJgRQADgFABgMIAAgJIgDAAIAAgFIAdAAIAAAFIgDAAIAAAJQABAMADAFIAJARQAFAJABADIACAhQACAegEARQgDASACAJIACAJQAEAdgNAFg");
	this.shape_3.setTransform(185,158,1.173,1.173);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E33239").s().p("AgPAHIAAgLIABAAIAEgBIAXAAIABAAIACACIAAAKg");
	this.shape_4.setTransform(185,144.7,1.173,1.173);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E33239").s().p("AggAaQgDggAFgWIAMACQAOABALgBQAVgBADgBIACASQACAUgBAQQgUADgQAAQgQAAgOgDg");
	this.shape_5.setTransform(352,154.8,1.173,1.173);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A1213").s().p("AgWBqQgIgDgBgOIAAgRQACgEABgFQABgKgDgRQgFgWAFg6QABgDAFgKIAJgQQAFgJgBgRIgDAAIAAgGIAdAAIAAAGIgDAAIAAAJQABALADAGIAJAQQAFAKABADQACALAAAWQACAegEARQgDARACAKIACAJIAAARQgBAOgIADg");
	this.shape_6.setTransform(352,156.7,1.173,1.173);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E33239").s().p("AgPAGIAAgJIABgBIAEgBIAXAAIABAAIACACIAAAJg");
	this.shape_7.setTransform(352,143.4,1.173,1.173);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E33239").s().p("AgPAHIAAgLIABgBIAFgBIAWAAIABABIACACIAAAKg");
	this.shape_8.setTransform(401,148.4,1.173,1.173);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#252931").s().p("AgFgQIALgEIgCAoIgFABg");
	this.shape_9.setTransform(134.5,225.4,1.173,1.173);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252931").s().p("AgDAWIgCgsIALADIgDAqg");
	this.shape_10.setTransform(140.1,225.8,1.173,1.173);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252931").s().p("AAAA1QgIgHAAgLIAAhfIAPABIACB4g");
	this.shape_11.setTransform(134.8,216.1,1.173,1.173);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#323436").s().p("AgIA3IAAhvIARgBIAABwQgGADgEAAQgEAAgDgDg");
	this.shape_12.setTransform(138.1,216.8,1.173,1.173);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2E32").s().p("AikBBQgQgBgRgFQghgKgFgVQgEgWAHgZQAEgNAOghQAGgOAVAyQAbA+AbAKQAjANAjACQAfACAwgGQAwgHAngBQArgCAQAGQAYAJA0gEIgCAFQgFAFgTACQgdADimAAIgdAAQiQAAgIgFg");
	this.shape_13.setTransform(135.3,201.9,1.173,1.173);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2E32").s().p("AgZANQgFhCAOgNQAOgMAQADQAIABAGAEQgUAAgIAEQgUALABAnQADA7AAAiQgGgfgDghg");
	this.shape_14.setTransform(116.1,136,1.173,1.173);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#323436").s().p("AgQAXQhPAAhAgRIgwgPQgJgFACgFQABgFAHAEQARAJApAKQA/APBGACQBJACA3gLQAegGAqgMQAfgIgBAHQAAAHgQADQhIAQgPACQgrAHhKAAIgLAAg");
	this.shape_15.setTransform(136.5,183,1.173,1.173);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D4658").s().p("AgRAdQhPgBg+gRIgvgPQgJgIAEgKQAFgKAHAHQAJAHA5ANQBBAOAwABQBKABA5gKQASgDA4gOQAmgKgQAbQhfAch2AAIgMAAg");
	this.shape_16.setTransform(136.6,182.9,1.173,1.173);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#323436").s().p("Ai/B0QgugJgMgaQgLgXATgzQAYg+AAgeQAAgrAjALQAIADAsAGICEALQBogBBAgQIAYgFQAGABADAJIAMA4QALAvAYA8QANAggeAUQgUAOgcAAIlDAAIgJAAQgXAAgVgEg");
	this.shape_17.setTransform(137.2,196,1.173,1.173);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#323436").s().p("AiJDzQhBgTABgkQABgggCgmIgak2QgDgWAIgSQAQglA3AQQBHAVBMABQBVACBCgZQAXgJAYAOQAcAQAIAnQAFAbgOCRQgPCZAFA4QADAfhAAUQg7AThVACIgQAAQhLAAgzgQg");
	this.shape_18.setTransform(136.5,154.7,1.173,1.173);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#626666").s().p("AjkAdIgEgRQgDgUAJgTQAQglA2APQBMAWAtAFQA7AGA2gRQBCgUAdADQAhADAQAjQANAegCAVQAAALgEAFg");
	this.shape_19.setTransform(136.6,129.9,1.173,1.173);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#252931").s().p("AAAgFIABAGIgBAFg");
	this.shape_20.setTransform(156.9,205.9,1.173,1.173);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#717677").s().p("AgFBKIgIiTIAbAAIgJCTg");
	this.shape_21.setTransform(137.2,232.1,1.173,1.173);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#717677").s().p("Ah8AhIDthYIAMAQIj4BOIAAARg");
	this.shape_22.setTransform(120.7,227.6,1.173,1.173);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D4658").s().p("AiCBJIAAg9IDuhUIAIAAQgCABAIAHIAJAHIgHAmIjmAuIgBAug");
	this.shape_23.setTransform(120.7,230.1,1.173,1.173);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgBAbQgEABgEgEQgEgEABgFIAAgdQgBgGAEgDQAEgDAEgBIACAAQAGABADADQADADABAGIAAAdQgBAFgDAEQgDAEgGgBg");
	this.shape_24.setTransform(168.1,237.7,1.173,1.173);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#717677").s().p("AB9AiIj9hPIAOgJIDwBUIADAGIgDATg");
	this.shape_25.setTransform(154.4,228.4,1.173,1.173);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3D4658").s().p("ABsBJIgBguIjmguIgHgsQASgIgDgBQAAAAgBAAQAAAAABAAQAAAAABAAQAAAAABAAIAFAAIDvBVIAAA8g");
	this.shape_26.setTransform(154.2,230.7,1.173,1.173);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3D4658").s().p("AAfANIAAgIIgZAAIgvgRIBTAEIAAAVg");
	this.shape_27.setTransform(149.4,224.8,1.173,1.173);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D4658").s().p("AgoANIAAgVIBRgEIguARIgZAAIAAAIg");
	this.shape_28.setTransform(123.5,224.7,1.173,1.173);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AAAAcQgFgBgEgDQgEgDAAgGIAAgdQAAgFAEgEQAEgEAFABIABAAQAFgBAEAEQADAEAAAFIAAAdQAAAGgDADQgEADgFABg");
	this.shape_29.setTransform(119.7,229.2,1.173,1.173);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAAAcQgFgBgEgDQgDgDAAgGIAAgdQAAgFADgEQAEgEAFABIABAAQAFgBAEAEQADAEAAAFIAAAdQAAAGgDADQgEADgFABg");
	this.shape_30.setTransform(153.4,229.2,1.173,1.173);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AAAAZQgGAAgDgEQgEgDAAgFIAAgYQAAgFAEgEQADgEAGAAIABAAQAFAAAEAEQAEAEgBAFIAAAYQABAFgEADQgEAEgFAAg");
	this.shape_31.setTransform(106.4,238,1.173,1.173);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AAAAbQgFAAgEgDQgDgDgBgGIAAgeQABgFADgDQADgDAGAAIACAAQAFAAADADQADADAAAFIAAAeQAAAFgDAEQgDADgFAAg");
	this.shape_32.setTransform(137.2,243.8,1.173,1.173);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#717677").s().p("AgFAUIAAgoQAAgGAFABQAGgBAAAGIAAAoQAAAGgGABQgFgBAAgGg");
	this.shape_33.setTransform(155.2,229.2,1.173,1.173);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#717677").s().p("AgEAUIAAgoQgBgGAFABQAFgBABAGIAAAoQgBAGgFABQgFgBABgGg");
	this.shape_34.setTransform(151.6,229.2,1.173,1.173);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#717677").s().p("AgFAUIAAgoQABgGAEABQAGgBgBAGIAAAoQABAGgGABQgEgBgBgGg");
	this.shape_35.setTransform(121.6,229.2,1.173,1.173);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#717677").s().p("AgFAUIAAgoQAAgGAFABQAGgBAAAGIAAAoQAAAGgGABQgFgBAAgGg");
	this.shape_36.setTransform(118.1,229.2,1.173,1.173);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#717677").s().p("AgEAZQgCgDAAgDIAAglQAAgIAGAAQAHAAAAAIIAAAlQAAADgCADQgDABgCAAQgCAAgCgBg");
	this.shape_37.setTransform(108.8,238,1.173,1.173);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#717677").s().p("AgEAZQgCgDAAgDIAAglQAAgEACgCQACgCACAAQAHAAAAAIIAAAlQAAAIgHgBQgCAAgCgBg");
	this.shape_38.setTransform(104.3,238,1.173,1.173);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#717677").s().p("AgGATIAAglQAAgIAGAAQAHAAAAAIIAAAlQAAAIgHgBQgGABAAgIg");
	this.shape_39.setTransform(170.5,238,1.173,1.173);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#717677").s().p("AgGATIAAglQAAgIAGAAQAHAAAAAIIAAAlQAAADgCADQgDABgCAAQgGABAAgIg");
	this.shape_40.setTransform(166,238,1.173,1.173);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#717677").s().p("AgGAZIAAgxQAAgHAGAAQAHAAAAAHIAAAxQAAAHgHAAQgGAAAAgHg");
	this.shape_41.setTransform(139.4,243.9,1.173,1.173);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#717677").s().p("AgGAZIAAgxQAAgHAGAAQAHAAAAAHIAAAxQAAAHgHAAQgGAAAAgHg");
	this.shape_42.setTransform(134.9,243.9,1.173,1.173);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#717677").s().p("AgaADIgdgJIBeAJIARAEg");
	this.shape_43.setTransform(147.7,222.9,1.173,1.173);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#717677").s().p("AgpAAIBegDIgXAEIhSAEg");
	this.shape_44.setTransform(124.9,223,1.173,1.173);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#717677").s().p("AgZA2IgFgDIAAhsIA9ABIAABrQgMAIgXAAQgOAAgHgFg");
	this.shape_45.setTransform(137.4,216.6,1.173,1.173);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3D4658").s().p("AgTgjIAFgkIAdgCIAFArIgNBoIgRAAg");
	this.shape_46.setTransform(137.4,232,1.173,1.173);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B3ADAE").s().p("A2JAzQgVAAgOgPQgPgPAAgUIAAgBQAAgVAPgOQAOgOAVAAMAsUAAAQAUAAAPAOQAOAOAAAVIAAABQAAAUgOAPQgPAPgUAAg");
	this.shape_47.setTransform(245.2,172.4,1.173,1.173);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7A7476").s().p("A2IAyQgVAAgPgOQgPgPAAgVQAAgUAPgPQAPgPAVABMAsSAAAQAUgBAPAPQAPAPAAAUQAAAVgPAPQgPAOgUAAg");
	this.shape_48.setTransform(245.2,174.5,1.173,1.173);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B2E32").s().p("AiXgGQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIANADQANAEA1ADQA2ACA4AAQAwAAAxgLIASgEIgeAIQg9AQg1ADIgQAAQg+AAhTgUg");
	this.shape_49.setTransform(204.9,174.4,1.173,1.173);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#626666").s().p("AhFCfQhggGgUgMQgSgMAGhRQAMhjABgtQACgqAOgPQAKgKAOADQALADAOABIEEAEQAgAAALALQAGAIADAWQADAuADBRQADBvgIAQQgIAPgiADIhQAAIgpABQgvAAg1gDg");
	this.shape_50.setTransform(205.2,125,1.173,1.173);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#626666").s().p("AhZDOIhHgJQg6gFgdgwIAAgBQgCgbAOgyQAQgzADgOQAEgRAFg8QAFg4ABgXQABgQAMgPQAIgJAHgFIACAAIFbgJQAkgBAMBdQAGAxACBGIAMBUQAHA8gIATQgJAVgMAFIgrAKQgdAGgzADIhpABQgvAAgkgFg");
	this.shape_51.setTransform(204,165,1.173,1.173);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#717677").s().p("Ah3AfIDohUIAIAPIjvBKIAAARg");
	this.shape_52.setTransform(186.5,208,1.173,1.173);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3D4658").s().p("AiCBJIAAg8IDuhVIAIAAQgCABAJAHIAIAHIgHAmIjnAuIAAAug");
	this.shape_53.setTransform(187,210.3,1.173,1.173);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#231F20").s().p("AAAAcQgFAAgEgEQgDgDAAgGIAAgdQAAgFADgEQAEgEAFAAIABAAQAFAAAEAEQADAEAAAFIAAAdQAAAGgDADQgDAEgGAAg");
	this.shape_54.setTransform(234.5,217.9,1.173,1.173);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#717677").s().p("AB6AhIj3hMIAKgKIDvBSIACAHIgCASg");
	this.shape_55.setTransform(221.1,208.6,1.173,1.173);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3D4658").s().p("ABsBJIgBguIjlguIgIgsQASgIgDAAQAAAAgBAAQAAAAABAAQAAgBABAAQABAAABAAIAFAAIDuBVIAAA8g");
	this.shape_56.setTransform(220.5,210.9,1.173,1.173);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3D4658").s().p("AAfANIAAgIIgZAAIgvgRIBTAEIAAAVg");
	this.shape_57.setTransform(215.8,205,1.173,1.173);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3D4658").s().p("AgpANIAAgVIBSgEIguARIgZAAIAAAIg");
	this.shape_58.setTransform(189.8,204.8,1.173,1.173);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#231F20").s().p("AgBAcQgEgBgEgDQgEgDABgFIAAgfQgBgEAEgEQAEgDAEAAIACAAQAGAAADADQADAEABAEIAAAfQgBAFgDADQgDADgGABg");
	this.shape_59.setTransform(186.1,209.4,1.173,1.173);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#231F20").s().p("AgBAcQgEgBgEgDQgEgDABgFIAAgfQgBgEAEgEQAEgDAEAAIACAAQAGAAADADQAEAEAAAEIAAAfQAAAFgEADQgDADgGABg");
	this.shape_60.setTransform(219.7,209.4,1.173,1.173);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#231F20").s().p("AgBAYQgEAAgEgDQgEgDABgFIAAgYQgBgGAEgDQAEgDAEAAIACAAQAGAAADADQAEADAAAGIAAAYQAAAFgEADQgDADgGAAg");
	this.shape_61.setTransform(172.8,218.2,1.173,1.173);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#231F20").s().p("AgBAbQgEABgEgEQgDgEAAgEIAAgeQAAgGADgDQAEgDAEgBIADAAQAFABADADQADADABAGIAAAeQgBAEgDAEQgDAEgFgBg");
	this.shape_62.setTransform(203.6,224,1.173,1.173);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#717677").s().p("AgEAVIAAgpQgBgFAFAAQAFAAAAAFIAAApQAAAFgFABQgFgBABgFg");
	this.shape_63.setTransform(221.5,209.4,1.173,1.173);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#717677").s().p("AgEAVIAAgpQAAgFAEAAQAFAAAAAFIAAApQAAAFgFABQgEgBAAgFg");
	this.shape_64.setTransform(218,209.4,1.173,1.173);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#717677").s().p("AgFAVIAAgpQAAgFAFAAQAGAAAAAFIAAApQAAAFgGABQgFgBAAgFg");
	this.shape_65.setTransform(188,209.4,1.173,1.173);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#717677").s().p("AgFAVIAAgpQABgFAEAAQAGAAgBAFIAAApQABAFgGABQgEgBgBgFg");
	this.shape_66.setTransform(184.4,209.4,1.173,1.173);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#717677").s().p("AgGATIAAgmQAAgGAGgBQAHABAAAGIAAAmQAAAIgHgBQgGABAAgIg");
	this.shape_67.setTransform(175.2,218.2,1.173,1.173);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#717677").s().p("AgGATIAAgmQAAgGAGgBQAHABAAAGIAAAmQAAADgCACQgDACgCAAQgGABAAgIg");
	this.shape_68.setTransform(170.7,218.2,1.173,1.173);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#717677").s().p("AgEAYQgCgCAAgDIAAgmQAAgGAGgBQAHABAAAGIAAAmQAAAIgHgBQgCAAgCgCg");
	this.shape_69.setTransform(236.8,218.2,1.173,1.173);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#717677").s().p("AgGATIAAgmQAAgGAGgBQAHABAAAGIAAAmQAAAIgHgBQgGABAAgIg");
	this.shape_70.setTransform(232.3,218.2,1.173,1.173);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#717677").s().p("AgGAZIAAgxQAAgHAGAAQAHAAAAAHIAAAxQAAAHgHAAQgGAAAAgHg");
	this.shape_71.setTransform(205.7,224.1,1.173,1.173);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#717677").s().p("AgGAZIAAgxQAAgHAGAAQAHAAAAAHIAAAxQAAAHgHAAQgGAAAAgHg");
	this.shape_72.setTransform(201.3,224.1,1.173,1.173);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#717677").s().p("AgaADIgegIIBxALg");
	this.shape_73.setTransform(214.1,203.1,1.173,1.173);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#717677").s().p("AgpAAIBegEIgXAFIhSADg");
	this.shape_74.setTransform(191.2,203.2,1.173,1.173);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#717677").s().p("AgGBKIgHiTIAbAAIgJCTg");
	this.shape_75.setTransform(203.6,212.3,1.173,1.173);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#717677").s().p("AgaA3IgDgFIAAhsIA7ABIAABsQgLAIgWAAQgPgBgIgDg");
	this.shape_76.setTransform(203.8,196.8,1.173,1.173);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3D4658").s().p("AAACDQgCgCgCgIQgDgKAHgqQADgNAEgqQAEgvgDgUQgCgVgHgTQgGgPgFgFQgDgEgDgHIgCgHIARAOQAPAQACAGQAEAPACAYQACAngHApQgQBiABAGQABABAAABQAAAAABABQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_77.setTransform(380.9,158.3,1.173,1.173);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3D4658").s().p("AAACAQACgGgQhiQgMhEANgzQACgGAPgPIARgOQgDALgFAGQgFAFgGAQQgHATgCAUQgDAUAEAvQADApADAOQAIAngDAOQgCAHgDACIAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_78.setTransform(331.5,156.9,1.173,1.173);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B5B7B8").s().p("AgICFIgJgDQgEgDgEgpQgFgwgDg0QgFhJAEgOQAEgPAVgKQAKgFAKgCIAaADQgMAWgPAQQgKAKACAwQACAbAHA1IAIA8QACAYgJADIgKABIgKgBg");
	this.shape_79.setTransform(329.6,156.9,1.173,1.173);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#323436").s().p("AgIAYQhKAAg/gSIgwgRQgIgFABgEQABgFAHAEQAOAIAoALQA7APBBACQBFACAygLIBEgSQAdgIgBAHQAAAHgPADQgzAOgbAFQgoAIhEAAIgIAAg");
	this.shape_80.setTransform(356.9,142.2,1.173,1.173);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3D4658").s().p("AgRAdQhHgBg5gQQgegIgRgIIAAgBQgJgIAFgJQAEgKAHAHQAIAHA1ANQA9AOAsABQBFABA2gKQARgDA0gOQAXgHACALQACALgHACQgJAGg2AKQhDAMhFAAIgLAAg");
	this.shape_81.setTransform(357.3,142.3,1.173,1.173);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#626666").s().p("AhFCfQhhgGgTgMQgSgMAGhRQAMhjABgtQACgqAOgPQAKgKAOADQALADAOABIEEAEQAgAAALALQAGAIADAWQADAuADBRQADBvgIAQQgIAPgiADIhQABIgiAAQgzAAg4gDg");
	this.shape_82.setTransform(356.8,123.9,1.173,1.173);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#626666").s().p("AhZDOIhHgJQgmgDgagXQgQgNgGgOIgBgBQgCgbAOgyQAQgzADgOQAEgRAFg8QAFg4ABgXQABgQAMgPQAIgJAIgFIABAAIFbgJQAlgBALBdQAGAxACBGIAMBUQAIA8gJATQgJAVgMAFIgrAKQgdAGgzADIhpABQgvAAgkgFg");
	this.shape_83.setTransform(355.5,163.9,1.173,1.173);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#717677").s().p("Ah3AfIDohUIAHAQIjvBJIAAARg");
	this.shape_84.setTransform(338,207,1.173,1.173);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3D4658").s().p("AiCBJIAAg8IDvhVIAHAAQgCABAIAHIAJAIIgIAlIjlAuIgBAug");
	this.shape_85.setTransform(338.5,209.2,1.173,1.173);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#231F20").s().p("AAAAcQgGAAgDgEQgDgDgBgGIAAgdQABgGADgDQADgEAGAAIABAAQAGAAADAEQAEAEgBAFIAAAdQABAGgEADQgDAEgGAAg");
	this.shape_86.setTransform(386,216.9,1.173,1.173);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#717677").s().p("AB6AiIj3hNIAKgKIDvBSIACAHIgCASg");
	this.shape_87.setTransform(372.6,207.6,1.173,1.173);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3D4658").s().p("ABsBJIAAguIjnguIgHgsQASgIgDAAQAAAAgBAAQAAAAABAAQAAgBABAAQABAAABAAIAFAAIDuBVIAAA8g");
	this.shape_88.setTransform(372,209.9,1.173,1.173);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3D4658").s().p("AAfANIAAgIIgaAAIgugQIBTACIAAAWg");
	this.shape_89.setTransform(367.4,203.9,1.173,1.173);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3D4658").s().p("AgoANIAAgVIBRgEIgtARIgZAAIAAAIg");
	this.shape_90.setTransform(341.3,203.8,1.173,1.173);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#231F20").s().p("AAAAcQgGgBgDgDQgEgDAAgFIAAgfQAAgEAEgEQADgDAGAAIABAAQAFAAAEADQAEAEgBAEIAAAfQABAFgEADQgEADgFABg");
	this.shape_91.setTransform(337.6,208.3,1.173,1.173);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#231F20").s().p("AAAAcQgGgBgDgDQgDgDgBgFIAAgfQABgEADgEQADgDAGAAIACAAQAEAAAEADQAEAEgBAEIAAAfQABAFgEADQgEADgEABg");
	this.shape_92.setTransform(371.2,208.3,1.173,1.173);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#231F20").s().p("AAAAYQgGAAgDgDQgDgDgBgFIAAgYQABgFADgEQADgDAGAAIACAAQAEAAAEADQAEAEgBAFIAAAYQABAFgEADQgEADgEAAg");
	this.shape_93.setTransform(324.3,217.1,1.173,1.173);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#231F20").s().p("AAAAbQgFABgEgEQgEgEAAgEIAAgeQAAgGAEgDQAEgDAFgBIABAAQAFABAEADQADADAAAGIAAAeQAAAEgDAEQgEAEgFgBg");
	this.shape_94.setTransform(355.1,222.9,1.173,1.173);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#717677").s().p("AgFAVIAAgpQAAgFAFgBQAGABAAAFIAAApQAAAFgGABQgFgBAAgFg");
	this.shape_95.setTransform(373.1,208.3,1.173,1.173);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#717677").s().p("AgFAVIAAgpQAAgFAFgBQAGABAAAFIAAApQAAAFgGABQgFgBAAgFg");
	this.shape_96.setTransform(369.5,208.3,1.173,1.173);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#717677").s().p("AgEAVIAAgpQgBgFAFgBQAFABABAFIAAApQgBAFgFABQgFgBABgFg");
	this.shape_97.setTransform(339.5,208.3,1.173,1.173);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#717677").s().p("AgEAVIAAgpQgBgFAFgBQAFABABAFIAAApQgBAFgFABQgFgBABgFg");
	this.shape_98.setTransform(335.9,208.3,1.173,1.173);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#717677").s().p("AgEAYQgCgCAAgDIAAgmQAAgCACgCQADgDABAAQADAAACADQACACAAACIAAAmQAAAIgHgBQgBAAgDgCg");
	this.shape_99.setTransform(326.7,217.1,1.173,1.173);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#717677").s().p("AgGATIAAgmQAAgGAGgBQAHABAAAGIAAAmQAAAIgHgBQgGABAAgIg");
	this.shape_100.setTransform(322.2,217.1,1.173,1.173);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#717677").s().p("AgEAYQgCgCAAgDIAAgmQAAgCACgCQADgDABAAQAHABAAAGIAAAmQAAAIgHgBQgBAAgDgCg");
	this.shape_101.setTransform(388.3,217.1,1.173,1.173);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#717677").s().p("AgEAYQgCgCAAgDIAAgmQAAgGAGgBQAHABAAAGIAAAmQAAAIgHgBQgCAAgCgCg");
	this.shape_102.setTransform(383.9,217.1,1.173,1.173);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#717677").s().p("AgGAZIAAgxQAAgHAGAAQAHAAAAAHIAAAxQAAAHgHAAQgGAAAAgHg");
	this.shape_103.setTransform(357.2,223,1.173,1.173);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#717677").s().p("AgGAZIAAgxQAAgHAGAAQAHAAAAAHIAAAxQAAAHgHAAQgGAAAAgHg");
	this.shape_104.setTransform(352.8,223,1.173,1.173);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#717677").s().p("AgaAEIgegJIBxALg");
	this.shape_105.setTransform(365.6,202.1,1.173,1.173);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#717677").s().p("AgpAAIBegEIgXAFIhSADg");
	this.shape_106.setTransform(342.7,202.2,1.173,1.173);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#717677").s().p("AgGBKIgHiTIAbAAIgJCTg");
	this.shape_107.setTransform(355.2,211.3,1.173,1.173);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#717677").s().p("AgaA3IgEgFIAAhsIA9ABIAABsQgNAIgWgBQgOAAgIgDg");
	this.shape_108.setTransform(355.3,195.7,1.173,1.173);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B5B7B8").s().p("AgLCFQgJgCACgZIAIg8QAHg1ACgbQABgwgJgKQgJgKgKgPIgIgNIAagDIAUAHQAWAKADAPQAEAOgFBJQgDA0gFAwQgEApgEADQgKAEgIAAIgLgBg");
	this.shape_109.setTransform(382.8,158.1,1.173,1.173);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2B2E32").s().p("AiXgFQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIANADQANAEA1ADQA2ACA4AAQAwAAAxgLIASgEIgeAIQg9AQg1ADIgRAAQg8AAhUgTg");
	this.shape_110.setTransform(366.7,173.3,1.173,1.173);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#252931").s().p("AAAgFIABAHIgBAEg");
	this.shape_111.setTransform(429.4,192.2,1.173,1.173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73,105,356.6,142.7);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(69.1,21.2,0.593,0.593);

	this.text_1 = new cjs.Text("3.6", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(67.9,51.7,1.094,1.094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.8,69.7,1.504,1.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.mc_seleccion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,51,0)").s().p("AhQBvQghAAAAgfIAAieQAAggAhAAIChAAQAhAAgBAgIAACeQABAfghAAg");
	this.shape.setTransform(8.4,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AgxBGQgUAAAAgUIAAhjQAAgVAUABIBjAAQAVgBgBAVIAABjQABAUgVAAg");
	this.shape_1.setTransform(7.1,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTBUIAAinICnAAIAACng");
	this.shape_2.setTransform(6.7,6.6,1.057,1.044);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhTBUIAAinICnAAIAACng");
	this.shape_3.setTransform(9.1,8.9,1.057,1.044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-4.5,22.7,22.2);


(lib.mascaratapar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvWACqIAAlTMBetAAAIAAFTg");
	this.shape.setTransform(303.1,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,34);


(lib.M03_TMR_sucesoropcion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egh6AVbIAAhmMA/QAAAQBmAAAThTQAEgTAAgWMAAAgjKQAAh8h9AAMg/QAAAIAAiNMBD0AAAMAAAAq1g");
	this.shape.setTransform(222.6,135.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAF4DA").s().p("EghwARAMAAAgh/MBDhAAAMAAAAh/g");
	this.shape_1.setTransform(221.5,108.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B7B8").s().p("EghwAEOIAAobMBDhAAAIAAIbg");
	this.shape_2.setTransform(221.5,244.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_sucesoropcion, new cjs.Rectangle(5.5,-1.5,434.2,274.2), null);


(lib.lapizmueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ah8CUIgEgCIgCgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBID0AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAh4B/IgBgCIAQgwIABgBIABAAIAcAXIABACIgBABIgsAZIAAAAIgBAAgAhiBEIAYgnIAggrIAsAkQgSAWgRASQgSATgPANgAAGAMIgmgfIgBgDIAAgDIBUhpIgGgEIhBBSIgHgGIBFhZIAOALIABgCIADgBIBDgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgBAEIh2CSIgDACIgDgBg");
	this.shape.setTransform(21.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,7.8,26.2,29.6);


(lib.iconoactividadesyretos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyEUIAAhpIBoAAIAABpgAgyCHIAAgZQAAguAPgeQAPgeAtgkQAuglAJgMQAOgSAAgWQAAgegYgWQgZgWgpAAQgnAAgbAXQgbAWgKAvIhggMQAEhDA1guQA1gvBVAAQBZAAA1AwQA2AvAAA+QAAAjgUAeQgTAfhBA1QggAcgJAQQgIARABArg");
	this.shape.setTransform(57.5,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AC9AC").s().p("Al/OEQivhKiHiIQiGiHhKiwQhMi2ABjIQAAjIBNi1QBKiwCJiGQCHiGCxhJQC3hMDJABQDHAACzBNQCvBLCFCIQCGCHBJCwQBMC2AADHQAADHhNC1QhKCviICHQiHCGiwBJQi3BMjHAAQjHAAi1hNg");
	this.shape_1.setTransform(56,55.2,0.49,0.49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("Am5QYQjMhXieidQididhWjNQhajTAAjnQAAjnBajTQBWjMCdidQCeieDMhWQDShZDnAAQDoAADSBZQDMBWCeCeQCeCdBVDMQBaDTAADnQAADnhaDTQhVDNieCdQieCdjMBXQjSBZjoAAQjnAAjShZg");
	this.shape_2.setTransform(55.7,55.7,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.4,111.4);


(lib.ClipGroup_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRBzQBYgwABgGQAAgkACgnQADhOAOghQAKgZARAAQAJgBAHAFIAHAJQAGAMgBAUQgCAagNBPQgOBTgEAGQgLARhrAtg");
	mask.setTransform(8.2,15.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D8D8").s().p("AhRB2QBYgwABgGQgIgngEgqQgJhUARgeQAPgaAbAEQANADALAHIAHAJQAGAMgBAUQgCAagNBPQgOBTgEAGQgLARhrAtg");
	this.shape.setTransform(8.2,15.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, new cjs.Rectangle(0,0.6,16.5,30.3), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhFAGIAAgLICLAAIAAALg");
	mask.setTransform(7.1,0.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhFgFICLAL");
	this.shape.setTransform(7.1,0.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0.1,0.2,14.1,1.2), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhUACIAAgDICpAAIAAADg");
	mask.setTransform(8.5,0.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhUABICpgB");
	this.shape.setTransform(8.5,0.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(0,0.2,17.1,0.4), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhTAJIAAgRICnAAIAAARg");
	mask.setTransform(8.4,1.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhTAIICngQ");
	this.shape.setTransform(8.4,1.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0.1,0.2,16.8,1.8), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPBlIAAjJICfAAIAADJg");
	mask.setTransform(8.1,10.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhSBjICfgUIhBi0");
	this.shape.setTransform(8.4,10.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0.1,0.1,16.1,20.2), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgbBPIAAidIA2AAIAACdg");
	mask.setTransform(3,8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgahOIA1Cd");
	this.shape.setTransform(3,8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0.2,0.1,5.5,15.8), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZBCIAAiDIAzAAIAACDg");
	mask.setTransform(2.8,6.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgYhBIAxCD");
	this.shape.setTransform(2.8,6.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0.2,0.1,5.1,13.2), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTAxIAAhhIAnAAIAABhg");
	mask.setTransform(2.1,5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgSgwIAlBh");
	this.shape.setTransform(2.1,5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0.2,0.1,4,9.8), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgNAjIAAhFIAbAAIAABFg");
	mask.setTransform(1.5,3.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgMgiIAZBF");
	this.shape.setTransform(1.5,3.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0.2,0.1,2.8,7.1), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOBIIAAiQIAdAAIAACQg");
	mask.setTransform(1.7,7.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAQhFQgJAFgHAUQgRApAGBO");
	this.shape.setTransform(1.6,7.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0.2,0.2,3.1,14.5), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOBIIAAiQIAdAAIAACQg");
	mask.setTransform(1.6,7.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgPhFQAJAFAHAUQARApgGBO");
	this.shape.setTransform(1.7,7.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0.1,0.2,3,14.5), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag0CXIAAktIBpAAIAAEtg");
	mask.setTransform(5.5,15.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("Ag0CXIBpkt");
	this.shape.setTransform(5.6,15.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0.2,0.1,10.7,30.2), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgyCGIAAkLIBlAAIAAELg");
	mask.setTransform(5.3,13.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgyCGIBlkL");
	this.shape.setTransform(5.3,13.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0.2,0.1,10.3,26.9), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgwB1IAAjqIBgAAIAADqg");
	mask.setTransform(5.1,11.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgvB1IBfjp");
	this.shape.setTransform(5.1,11.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0.2,0.1,9.7,23.5), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag1CnIAAlOIBqAAIAAFOg");
	mask.setTransform(5.6,16.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("Ag0CnIBplN");
	this.shape.setTransform(5.6,16.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0.2,0.1,10.7,33.5), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag2CrIAAlVIBsAAIAAFVg");
	mask.setTransform(5.7,17.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AA2iqIhrFV");
	this.shape.setTransform(5.6,17.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0.2,0.1,10.9,34.1), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFjAQgFBDgCBRQgGCiALBL");
	this.shape.setTransform(0.7,19.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0.2,0.1,1.1,38.6), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFjAQgFBDgCBRQgFCiALBL");
	this.shape.setTransform(0.7,19.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.2,0.1,1.1,38.6), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFjAQgFBDgCBRQgFCiALBL");
	this.shape.setTransform(0.7,19.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0.2,0,1,38.6), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEC8IAAl3IAJAAIAAF3g");
	mask.setTransform(0.7,18.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFi7QgFBAgCBPQgGCdALBL");
	this.shape.setTransform(0.7,18.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0.2,0,1.1,37.6), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.8,19.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFjAQgFBDgCBRQgFCiALBL");
	this.shape.setTransform(0.7,19.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.3,0,1,38.7), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFjAQgFBDgCBRQgFCjAKBK");
	this.shape.setTransform(0.7,19.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.2,0,1.1,38.7), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEjAQAEBDADBRQAFCigLBL");
	this.shape.setTransform(0.7,19.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.2,0.1,1,38.6), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEjAQAEBDADBRQAGCigLBL");
	this.shape.setTransform(0.7,19.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0.2,0.1,1.1,38.6), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEjAQAEBDADBRQAFCigLBL");
	this.shape.setTransform(0.7,19.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.2,0,1,38.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEC8IAAl3IAJAAIAAF3g");
	mask.setTransform(0.7,18.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEi7QAEBAADBPQAGCdgLBL");
	this.shape.setTransform(0.7,18.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0.2,0,1.1,37.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEjAQAEBDADBRQAGCigLBL");
	this.shape.setTransform(0.7,19.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.2,0,1.1,38.7), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEDBIAAmBIAJAAIAAGBg");
	mask.setTransform(0.7,19.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEjAQAEBDADBRQAGCjgLBK");
	this.shape.setTransform(0.7,19.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.2,0,1.1,38.7), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag6ARQgSgSgEgYQgGgcABgOQABgGACgCIAuAaQAQAKAhAaQAcAVACAAQAFgBAEhKIAfgBQADAhAAAiQgBBDgRAJIgCABQgPAAhtg7g");
	mask.setTransform(13.4,9.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE5EE").s().p("AgcAwIAvhjIAKAEIgvBjg");
	this.shape.setTransform(2.9,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE5EE").s().p("Ag6ARQgSgSgEgYQgGgcABgOQABgGACgCIAuAaQAQAKAhAaQAcAVACAAQAFgBAEhKIAfgBQADAhAAAiQgBBDgRAJIgCABQgPAAhtg7g");
	this.shape_1.setTransform(13.4,9.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE5EE").s().p("Ag6ARQgSgSgEgYQgGgcABgOQABgGACgCIAuAaQAQAKAhAaQAcAVACAAQAFgBAEhKIAfgBQADAhAAAiQgBBDgRAJIgCABQgPAAhtg7g");
	this.shape_2.setTransform(13.4,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(4.8,2.2,17.2,15.2), null);


(lib.estrategia1mc12t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2D7E9").s().p("AgUFAQgvgDgpgQIgsBIIhxhGIAshHQgggfgYgoIhPAaIgqh9IBQgaQgFgwAIgqIhOgfIAxh7IBNAfQAYgkAlgfIgohKIB0g/IAoBKQAqgNAvAAIAQhSICCAbIgRBSQArATAiAcIBBg0IBSBoIhBA0QATAnAJAvIBUACIgECEIhUgDQgMAugVAmIA+A4IhYBjIg+g4QgSANgUALQgXAMgTAHIAMBTIiCATgAhQiUQg9AhgUBDQgUBCAhA+QAhA9BDAVQBCAUA+ghQA9giAUhDQAUhCghg9Qghg+hDgUQgZgIgYAAQgpAAgmAVg");
	this.shape.setTransform(129.7,78.3,0.529,0.529);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E2A8").s().p("Ai6HbIAXhoQg2gYgrglIhUBCIhniEIBUhCQgZgygKg6IhqgEIAFinIBqAEQAOg4AegyIhPhHIBwh8IBPBHQAugiA3gUIgPhpICmgXIAOBpQA7AEA1AUIA4haICOBZIg5BaQArApAcAxIBlghIAzCgIhkAgQAGA6gLA4IBjAoIg/CbIhjgoQggAxgsAkIAxBeIiUBOIgxhdQgcAIgcADQgaAEgfAAIgWBogAgbjTQhYAMg2BHQg1BHAMBXQAMBXBHA2QBGA1BXgMQBYgMA2hHQA1hHgMhWQgNhYhGg2Qg6grhEAAQgPAAgQACg");
	this.shape_1.setTransform(114.6,125.6,0.529,0.529);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0878B").s().p("ABQIzQgnAGgpAAQgoAAgngGIgyCLIjdhQIAziLQhFgrg1g8IiBBKIh1jLICAhKQgZhOgChPIiSgZIApjmICSAZQAdhJAzhBIhghxICziXIBgByQBGgmBQgRIAAiUIDpAAIAACUQBQARBGAmIBghyICzCXIhfBxQAyBBAeBJICRgZIApDmIiSAZQgCBPgaBOICABKIh1DLIiAhKQg0A7hGAsIAyCLIjbBQgAjSjRQhYBYAAB6QAAB8BYBXQBXBYB7AAQB7AABZhYQBXhXAAh8QAAh6hXhYQhYhYh8AAQh7AAhXBYg");
	this.shape_2.setTransform(69.6,78.3,0.529,0.529);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DFE5DF").s().p("AlaM0QifhEh7h7Qh7h7hEifQhGimAAi1QAAi0BGilQBEigB7h8QB7h6CfhEQCmhGC0AAQC1AAClBGQCgBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7igBEQilBGi1AAQi0AAimhGg");
	this.shape_3.setTransform(91.5,91.3,0.911,0.911);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AmGOcQi0hMiKiLQiLiLhMizQhPi7AAjMQAAjLBPi7QBMizCLiLQCKiLC0hMQC7hPDLAAQDMAAC7BPQCzBMCLCLQCLCLBMCzQBPC7AADLQAADMhPC7QhMCziLCLQiLCLizBMQi7BPjMAAQjLAAi7hPg");
	this.shape_4.setTransform(91.4,91.4,0.911,0.911);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,182.8);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,152,152);


(lib.circulo_blanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmrGsQixixAAj7QAAj6CxixQCxixD6AAQD7AACxCxQCxCxAAD6QAAD7ixCxQixCxj7AAQj6AAixixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121,121);


(lib.cajagrismc1t2m2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Durante o posterior a la sesión de calibración se realiza, junto con los ocupantes actuales de las posiciones a discutir, la sesión de sucesión para identificar, definir y validar a los colaboradores que son posibles sucesores a corto y mediano plazo.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 286;
	this.text.parent = this;
	this.text.setTransform(28,262.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("A6SVuQhoAAhKhJQhIhJAAhoMAAAgjnQAAhoBIhJQBKhJBoAAMA0mAAAQBnAABJBJQBJBJABBoMAAAAjnQgBBohJBJQhJBJhnAAg");
	this.shape.setTransform(183.4,311);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,172,386.7,278.1);


(lib.cajagdemc12t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Mecanismo", "bold 22px 'Arial'", "#333333");
	this.text.lineHeight = 27;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(177.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Aq7GUIAAsnMA/zAAAQBnAABJBJQBJBKAABnIAAFkIgEAAQgOBIg3A3QhJBKhnAAgEg02AGUQhoAAhKhKQg2g3gOhIIgFAAIAAlkQABhnBIhKQBKhJBoAAMAp7AAAIAAMng");
	this.shape.setTransform(363.4,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AlPjNIKfAAIlQGbg");
	this.shape_1.setTransform(244.4,63.5,1,1,0,0,0,5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,726.7,99.1);


(lib.cajagdemc1t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Definición", "bold 22px 'Arial'", "#333333");
	this.text.lineHeight = 27;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(140.1,267.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Aq7GUIAAsnMA/yAAAQBoAABJBJQBKBKgBBnIAAFkIgEAAQgNBIg4A3QhJBKhoAAgEg03AGUQhnAAhJhKQg3g3gOhIIgEAAIAAlkQgBhnBKhKQBJhJBnAAMAp8AAAIAAMng");
	this.shape.setTransform(378.4,276.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AlPjNIKfAAIlQGbg");
	this.shape_1.setTransform(199.4,315.5,1,1,0,0,0,5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,236,726.7,100.1);


(lib.bullets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgoApQgSgRABgYQgBgXASgRQARgRAXAAQAYAAARARQASARAAAXQAAAYgSARQgRARgYAAQgXAAgRgRg");
	this.shape.setTransform(5.8,5.9,0.59,0.59);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,6.9,6.9);


(lib.btnacept = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACfBAQgJgJAAgNQAAgJAEgHQAEgHAIgDQAHgEAPgDQATgDAHgDIAAgDQAAgHgEgDQgDgEgLAAQgIAAgEADQgEADgCAHIgZgEQAEgPAKgIQAKgHAVAAQASAAAJAFQAJAEAEAHQADAGAAARIAAAgQAAAOABAGQACAHADAHIgbAAIgEgLQgHAHgIADQgIAEgJAAQgQAAgJgJgADGAZQgMACgDACQgGAEAAAGQAAAGAFAEQAEAEAHAAQAHAAAHgFQAFgDABgGIABgNIAAgGgAAqA6QgNgOAAgaQAAgZAMgOQANgOATAAQARAAANAPIAAg0IAbAAIAACOIgZAAIAAgPQgHAJgIAEQgJAFgJAAQgSAAgMgPgABAgGQgHAHAAAPQAAARAFAHQAGALAMAAQAKAAAGgIQAHgIAAgQQAAgSgHgHQgGgIgKAAQgKAAgGAIgAi4BAQgJgJAAgNQAAgJAEgHQAEgHAIgDQAHgEAPgDQATgDAHgDIAAgDQAAgHgEgDQgDgEgLAAQgIAAgEADQgEADgCAHIgZgEQAEgPAKgIQAKgHAVAAQASAAAJAFQAJAEAEAHQADAGAAARIAAAgQAAAOABAGQACAHADAHIgbAAIgEgLQgHAHgIADQgIAEgJAAQgQAAgJgJgAiRAZQgMACgDACQgGAEAAAGQAAAGAFAEQAEAEAHAAQAHAAAHgFQAFgDABgGIABgNIAAgGgAELBGIAAhmIAZAAIAAAOQAHgKAFgDQAFgEAHAAQAJAAAJAFIgIAYQgHgEgGAAQgGAAgEADQgEADgCAHQgDAJAAAaIAAAggAgTBGIAAhmIAaAAIAABmgAhLBGIAAiOIAcAAIAACOgAkaBGIgziOIAfAAIAkBpIAjhpIAfAAIgzCOgAgTgvIAAgZIAaAAIAAAZg");
	this.shape.setTransform(87.2,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AoWCvQhkAAAAhkIAAiVQAAhkBkAAIQtAAQBkAAAABkIAACVQAABkhkAAg");
	this.shape_1.setTransform(87.6,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AoWCvQhkAAAAhkIAAiVQAAhkBkAAIQtAAQBkAAAABkIAACVQAABkhkAAg");
	this.shape_2.setTransform(87.6,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.1,0,127,35);


(lib.tema_entrada_titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// destape TITULO
	this.instance = new lib.mascaratapar("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.6,-226.5,1,1,0,0,0,303.1,17);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({alpha:0},12,cjs.Ease.get(1)).wait(1));

	// TITULO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgLgKAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(-293.7,-230);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.8,-230.1);

	this.text = new cjs.Text("Sesión de sucesión", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulott6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.2,32.8,1,1,0,0,0,94.9,73.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(51).to({startPosition:0},0).to({regX:95,regY:73.6,scaleX:0.04,scaleY:0.04},15,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// circulo bco
	this.instance_2 = new lib.circulo_blanco("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,20.1,0.24,0.24,0,0,0,1.3,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:2,scaleY:2,x:149.3,alpha:1},10,cjs.Ease.get(1)).wait(62).to({startPosition:0},0).to({scaleX:11.1,scaleY:11.1,x:180.3,y:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// circulo rojo
	this.instance_3 = new lib.CirculoRojo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.4,0,0.033,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:2,scaleY:2,y:20},9,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:9.88,scaleY:9.88,x:201,y:-22.2},11,cjs.Ease.get(1)).to({_off:true},5).wait(12));

	// Layer 6
	this.instance_4 = new lib.numerodetema("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(98.1,-13.6,1,1,0,0,0,69.8,69.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({x:-40.1,y:-113.6},9,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({x:98.1,y:-13.6},12,cjs.Ease.get(1)).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.9,-2.5,5,5);


(lib.prioridades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M03_TMR_sucesoropcion();
	this.instance.parent = this;
	this.instance.setTransform(536.2,124.1,1.244,1.244,0,0,0,216.2,135.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274.1,-46.7,540.1,341.1);


(lib.pregunta1tema2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("En la sesión de sucesión se realizan varias actividades, ¿Cuáles consideras son claves en esta etapa para la organización?", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 658;
	this.text.parent = this;
	this.text.setTransform(124.8,-37.9);

	this.instance = new lib.iconoactividadesyretos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.7,-15.3,0.803,0.803,0,0,0,55.7,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(154,201,172,0.498)").s().p("EA2hAF2InUAAIhrAAMghFAAAMg5TAAAIi9AAIpYAAIgoAAIg8AAIgBAAIhaAAQgggBgagGQhGgUgQhIQgGgYAAgcIAAj4IAAjGQAAh0BcgaQAZgIAhABIBaAAIABAAIA8AAIAoAAIJYAAIC9AAMA5TAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAcAGBcIABASIAABSIAADOIAABVIAAA3IAAADIAAAPQAACXiWAAg");
	this.shape.setTransform(416.5,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60,816.6,104.5);


(lib.instruccionesmc1t2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// flecha 
	this.instance = new lib.lapizmueve("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.2,14.4,0.231,0.231,0,0,0,23.4,23.6);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.4,scaleX:1,scaleY:1,y:14.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(43));

	// flecha mueve
	this.instance_1 = new lib.lapizmueve("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.2,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(5).to({x:-8.7},0).to({x:485.3},37,cjs.Ease.get(1)).wait(1));

	// tapa circulo
	this.instance_2 = new lib.tapageneralblanco("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(3641.2,91.6,34.414,2.053,0,0,0,106.7,44.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:106.8,scaleX:14.35,x:1925.4},26,cjs.Ease.get(1)).to({scaleX:0.5,x:560.6},10).to({_off:true},1).wait(1));

	// Instruccion
	this.text = new cjs.Text("Reto rápido...selecciona al menos 2 afirmaciones que sean correctas.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(-82.9,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(14).to({_off:false},0).wait(38));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgxAuQgUgTAAgbQAAgaAUgTQAVgTAcAAQAdAAAUATQAVATAAAaQAAAbgVATQgUATgdAAQgcAAgVgTg");
	this.shape.setTransform(-453.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460.4,-9.3,664.2,52);


(lib.Group_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.3,1,1,0,0,0,0.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_26, new cjs.Rectangle(0,-0.2,1.5,39.1), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.4,1,1,0,0,0,0.7,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(0,-0.2,1.5,39.1), null);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(0.7,18.8,1,1,0,0,0,0.7,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,-0.2,1.5,38.1), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.3,1,1,0,0,0,0.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,-0.2,1.4,39.1), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.4,1,1,0,0,0,0.7,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,-0.2,1.5,39.1), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.4,1,1,0,0,0,0.7,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,-0.2,1.4,39.1), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.3,1,1,0,0,0,0.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,-0.2,1.5,39.1), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(0.8,19.4,1,1,0,0,0,0.8,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0.1,-0.2,1.4,39.1), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(0.8,18.8,1,1,0,0,0,0.8,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,-0.2,1.5,38.1), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.3,1,1,0,0,0,0.7,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,-0.2,1.4,39.1), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(0.8,19.4,1,1,0,0,0,0.8,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0.1,-0.2,1.4,39.1), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(0.7,19.4,1,1,0,0,0,0.7,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,-0.2,1.5,39.1), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(5.6,17.2,1,1,0,0,0,5.6,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,-0.1,11.4,34.6), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(5.5,16.8,1,1,0,0,0,5.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,-0.1,11.1,33.9), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(5,11.8,1,1,0,0,0,5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,-0.1,10.2,24), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_15();
	this.instance.parent = this;
	this.instance.setTransform(5.3,13.5,1,1,0,0,0,5.3,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,-0.2,10.7,27.4), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(5.5,15.1,1,1,0,0,0,5.5,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,-0.2,11.1,30.7), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_17();
	this.instance.parent = this;
	this.instance.setTransform(1.6,7.5,1,1,0,0,0,1.6,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.1,0,3.5,15), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_18();
	this.instance.parent = this;
	this.instance.setTransform(1.7,7.5,1,1,0,0,0,1.7,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,3.5,15), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_19();
	this.instance.parent = this;
	this.instance.setTransform(1.5,3.6,1,1,0,0,0,1.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,-0.1,3.2,7.5), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_20();
	this.instance.parent = this;
	this.instance.setTransform(2.1,5,1,1,0,0,0,2.1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,-0.1,4.4,10.3), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(2.8,6.7,1,1,0,0,0,2.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,-0.1,5.6,13.7), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_22();
	this.instance.parent = this;
	this.instance.setTransform(3,8,1,1,0,0,0,3,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,-0.1,6,16.2), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_23();
	this.instance.parent = this;
	this.instance.setTransform(8.1,10.2,1,1,0,0,0,8.1,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.2,-0.1,16.7,20.6), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_24();
	this.instance.parent = this;
	this.instance.setTransform(8.4,1.1,1,1,0,0,0,8.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.2,0,17.3,2.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_25();
	this.instance.parent = this;
	this.instance.setTransform(8.5,0.4,1,1,0,0,0,8.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.2,0,17.6,0.8), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_26();
	this.instance.parent = this;
	this.instance.setTransform(7,0.8,1,1,0,0,0,7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.2,0,14.6,1.6), null);


(lib.estrategiadenegociomc12t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.estrategia1mc12t6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(179.9,162,1.968,1.968,0,0,0,91.4,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17.9,359.8,359.8);


(lib.cajagrismc1t2mc12t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bullets("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.9,157.3,1,1,0,0,0,5.9,5.9);

	this.instance_1 = new lib.bullets("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.9,228.5,1,1,0,0,0,5.9,5.9);

	this.instance_2 = new lib.bullets("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.9,86.1,1,1,0,0,0,5.9,5.9);

	this.instance_3 = new lib.bullets("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.9,-3.1,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Capital Humano presenta las posiciones a analizar para determinar posibles sucesores, presentando posibles colaboradores a partir de los resultados de la sesión de calibración.\n\nEl líder de cada posición selecciona posibles sucesores y estima el tiempo en que estará listo para asumir la responsabilidad. \n\nSe revisan las acciones del plan de desarrollo para reforzarlo e incluir experiencias relevantes para el avance de la persona hacia la ocupación del cargo.\n\nCapital Humano comparte la información con el jefe del sucesor propuesto y coordina que las acciones de desarrollo se lleven a cabo.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 441;
	this.text.parent = this;
	this.text.setTransform(5,-13);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("EgiHAdxQhnAAhKhJQhIhJgBhoMAAAgztQABhoBIhJQBKhJBnAAMBEOAAAQBoAABJBJQBKBJgBBoMAAAAztQABBohKBJQhJBJhoAAg");
	this.shape.setTransform(218.4,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-88,486.7,381.3);


(lib.caja_respuestasM2T2mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var botones = 4;
		var resp = [1, 3];
		var raiz = this; //guarda el MC padre
		console.log("entro");
		var cont = 0;
		raiz.aceptar.visible = false;
		for (var i = 1; i <= botones; i++) {
			raiz["Mod2T2mc3b" + i].n = i;
			raiz["Mod2T2mc3b" + i].sel = false;
			raiz["Mod2T2mc3b" + i].mouseEnabled = true;
			raiz["Mod2T2mc3b" + i].cursor = "pointer";
			console.log(raiz["Mod2T2mc3b" + i].n);
			raiz["Mod2T2mc3b" + i].addEventListener("click", Eventoclick);
		}
		
		function Eventoclick(c) {
		
			console.log("evento click");
			if (c.currentTarget.sel == false) {
				c.currentTarget.sel = true;
				c.currentTarget.gotoAndStop(1);
				cont++
			} else {
				c.currentTarget.sel = false;
				c.currentTarget.gotoAndStop(0);
				cont--
			}
			//c.currentTarget.mouseEnabled = false;
			//c.currentTarget.gotoAndStop(1);
			if (cont >= 2) {
				raiz.aceptar.visible = true;
			} else {
				raiz.aceptar.visible = false;
			}
		
		}
		raiz.aceptar.addEventListener("click", function (c) {
			validar();
		});
		
		
		function validar() {
			console.log("entro a validar");
			var finalizo = true;
			for (var i = 0; i < resp.length; i++) {
				if (raiz.Mod2T2mc3b2.sel == true || raiz.Mod2T2mc3b4.sel == true) {
					finalizo = false;
					parent.llamarRetros("mal", "¡Vuelve a intentar! Esta actividad corresponde a otra etapa del proceso de Talent Management Review (TMR).");
		
					break;
				}
			}
			if (finalizo) {
				console.log("final de la actividad");
				for (var i = 1; i <= botones; i++) {
					raiz["Mod2T2mc3b" + i].mouseEnabled = false;
				}
				try {
					parent.llamarRetros("bien", '¡En efecto! Entre las actividades de esta etapa destacan “validar con el jefe de cada puesto, a los colaboradores identificados como sucesores” y “garantizar que los prospectos cuentan con la experiencia y se les proveerán actividades que les permitan desarrollarse para estar listos para ocupar el puesto”.');
					//parent.llamarRetros("bien","Respuesta B.  ¡En efecto! Contactar al líder del negocio o territorio nos permite tener claridad de los objetivos más significativos del negocio así como los retos que enfrenta la posición analizada, alineando de esta manera las necesidades de talento.");
					//parent.siguiente_verde();
					parent.final_tema();
		
				} catch (e) {
					console.log("no se pudo comunicar con start.js:      " + e);
				}
		
			} else {
				console.log("no ha finalizado la actividad");
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// checkbox
	this.aceptar = new lib.btnacept();
	this.aceptar.parent = this;
	this.aceptar.setTransform(428.3,182.2,1,1,0,0,0,66.2,17.3);
	new cjs.ButtonHelper(this.aceptar, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(252.9,-90.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_1.setTransform(245.7,-93.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_2.setTransform(236.3,-93.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgLABgIgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_3.setTransform(226,-95.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_4.setTransform(216.3,-93.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgoAvIAAgNIA6hDIgSAAIglAAIAAgNIBMAAIAAALIgyA6IgKALIAUgBIAqAAIAAAOg");
	this.shape_5.setTransform(206.8,-93.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_6.setTransform(200.3,-95.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_7.setTransform(196.3,-95.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_8.setTransform(189.3,-93.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_9.setTransform(179.3,-94);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_10.setTransform(169.3,-93.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_11.setTransform(154.7,-93.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_12.setTransform(145.3,-93.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_13.setTransform(135.3,-94);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_14.setTransform(125.3,-93.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_15.setTransform(118.3,-95.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_16.setTransform(112.1,-93.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_17.setTransform(105.3,-95.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_18.setTransform(98.7,-93.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_19.setTransform(89.3,-93.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_20.setTransform(79.6,-92.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_21.setTransform(64.7,-93.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_22.setTransform(55.3,-93.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_23.setTransform(48.3,-95.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAGgCIAOgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_24.setTransform(36.3,-93.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_25.setTransform(29,-94);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAEgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_26.setTransform(20.3,-93.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_27.setTransform(10.6,-92.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_28.setTransform(-4.3,-93.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_29.setTransform(-13.7,-93.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_30.setTransform(-21,-94);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_31.setTransform(-29.7,-93.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_32.setTransform(-39.3,-93.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_33.setTransform(-48.7,-93.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_34.setTransform(-57.9,-93.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_35.setTransform(-67.8,-93.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_36.setTransform(-77.3,-93.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_37.setTransform(-91.3,-93.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_38.setTransform(-100.7,-93.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_39.setTransform(-107.7,-95.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiAIAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAGADAIQACAJAAAKQAAAXgLAOQgMANgRgBQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAHQAHANANAAQAJgBAIgIQAHgKAAgRQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_40.setTransform(-114.5,-95.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_41.setTransform(-121.7,-95.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_42.setTransform(-128.3,-93.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_43.setTransform(-137.7,-93.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_44.setTransform(-147.4,-92.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_45.setTransform(-162.7,-93.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_46.setTransform(-175.2,-94);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_47.setTransform(-187.7,-93.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_48.setTransform(-196.9,-93.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_49.setTransform(330.3,-113);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_50.setTransform(320.9,-113);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAIAAAGADQAHAEAEAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQAKABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_51.setTransform(310.6,-114.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_52.setTransform(300.9,-113);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_53.setTransform(291.7,-113);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_54.setTransform(284.9,-114.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgNBCIAAhQIgOAAIAAgNIAOAAIAAgKQAAgJACgEQADgHAFgDQAFgFALAAIAPACIgDAOIgKgBQgGAAgEADQgCADAAAIIAAAJIASAAIAAANIgSAAIAABQg");
	this.shape_55.setTransform(280.8,-114.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_56.setTransform(275.9,-114.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_57.setTransform(271.5,-114.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_58.setTransform(263.9,-113.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_59.setTransform(253.9,-113);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAKgGALAAQAIAAAGADQAHAEAEAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgJgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAKABAHgJQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_60.setTransform(243.6,-114.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_61.setTransform(236.9,-114.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_62.setTransform(225.3,-113);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_63.setTransform(215.9,-113);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_64.setTransform(208.6,-113.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_65.setTransform(199.9,-113);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAKgGALAAQAIAAAGADQAHAEAEAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgJgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAKABAHgJQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_66.setTransform(189.6,-114.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_67.setTransform(179.9,-113);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_68.setTransform(172.6,-113.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_69.setTransform(163.9,-113);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiBIAPAAIAAAuQAKgMAPAAQAJAAAHADQAIAEAFAHQAFAGADAIQACAJAAAJQAAAYgLANQgMANgRABQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAHQAHAMANAAQAJAAAIgJQAHgIAAgTQAAgQgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_70.setTransform(154.1,-114.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_71.setTransform(143.9,-113);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_72.setTransform(136.9,-114.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_73.setTransform(129.9,-113);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_74.setTransform(120.7,-113);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_75.setTransform(106.3,-113);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_76.setTransform(96.9,-113);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_77.setTransform(89.9,-114.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_78.setTransform(77.9,-113);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_79.setTransform(62.9,-113);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_80.setTransform(55.5,-114.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_81.setTransform(48.3,-113);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAGgFQAFgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_82.setTransform(38.9,-113);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_83.setTransform(28.8,-112.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_84.setTransform(19.2,-111.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_85.setTransform(3.9,-113);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_86.setTransform(-6.4,-114.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_87.setTransform(-16.1,-113);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_88.setTransform(-25.3,-113);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_89.setTransform(-40.1,-113);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAEgKQAFgMAKgGQAIgGAMAAQAIAAAGADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgKAAgJgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgMAAQgJAAgHAJg");
	this.shape_90.setTransform(-50.4,-114.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_91.setTransform(-65.1,-113);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgMBCIAAhQIgPAAIAAgNIAPAAIAAgKQAAgJABgEQACgHAHgDQAEgFALAAIAOACIgCAOIgKgBQgHAAgCADQgDADAAAIIAAAJIASAAIAAANIgSAAIAABQg");
	this.shape_92.setTransform(-72.2,-114.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_93.setTransform(-80.1,-113);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgRBSIADgOIAHABQAFAAACgDQACgDAAgNIAAhhIAQAAIAABhQAAASgEAHQgGAJgNAAQgGAAgGgCgAAChAIAAgTIAQAAIAAATg");
	this.shape_94.setTransform(-88.1,-112.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_95.setTransform(-96.1,-114.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_96.setTransform(-103.1,-113);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_97.setTransform(-118.1,-113.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_98.setTransform(-128.1,-113);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_99.setTransform(-137.3,-113);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_100.setTransform(-149.4,-113.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_101.setTransform(-158.1,-113);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_102.setTransform(-168.4,-114.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_103.setTransform(-175.1,-114.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_104.setTransform(-179.1,-114.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_105.setTransform(-186.1,-113);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgIBBIgyiBIASAAIAiBeQAEAKACAKIAHgUIAjheIARAAIgzCBg");
	this.shape_106.setTransform(-195.7,-114.7);

	this.Mod2T2mc3b4 = new lib.mc_seleccion();
	this.Mod2T2mc3b4.parent = this;
	this.Mod2T2mc3b4.setTransform(460.2,125.1,0.845,0.843,0,0,0,6.9,7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_107.setTransform(303.9,139.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_108.setTransform(296.3,136.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAACAIgOAAIAAgMQgJAOgRgBQgLABgJgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_109.setTransform(286,134.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_110.setTransform(276.3,136.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_111.setTransform(266.2,136.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_112.setTransform(257.1,136.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_113.setTransform(247.3,136.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgGgMABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAHAAAHAEQAGADAFAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgKgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_114.setTransform(237,134.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_115.setTransform(227.3,136.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_116.setTransform(212.7,136.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AghA6QgJgHAAgMQAAgHADgFQADgGAFgDQAGgEAGgCIANgCQATgCAJgDIAAgFQAAgIgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgIgIgAgDAXQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADgAgIgoIALgZIAUAAIgTAZg");
	this.shape_117.setTransform(203.3,134.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_118.setTransform(190.8,136);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_119.setTransform(176,136);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_120.setTransform(167.3,136.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMAAgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAHAAAHAEQAGADAFAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgKgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_121.setTransform(157,134.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_122.setTransform(147.3,136.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_123.setTransform(140,136);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_124.setTransform(131.3,136.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiAIAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAGADAIQACAJAAAKQAAAXgLAOQgMANgRgBQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAHQAHANANAAQAJgBAIgIQAHgKAAgRQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_125.setTransform(121.5,134.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_126.setTransform(111.3,136.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_127.setTransform(104.3,134.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_128.setTransform(97.3,136.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_129.setTransform(88.1,136.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_130.setTransform(76.3,134.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_131.setTransform(69.3,136.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_132.setTransform(54.7,136.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_133.setTransform(45.3,136.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_134.setTransform(32.8,136);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAEgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_135.setTransform(20.3,136.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_136.setTransform(11.1,136.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_137.setTransform(4.3,134.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgNBCIAAhQIgNAAIAAgNIANAAIAAgKQAAgJACgEQADgHAFgDQAFgFAKAAIAQACIgDAOIgKgBQgGAAgEADQgDADAAAJIAAAIIATAAIAAANIgTAAIAABQg");
	this.shape_138.setTransform(0.2,134.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_139.setTransform(-4.7,134.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_140.setTransform(-9.1,134.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_141.setTransform(-16.7,136);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_142.setTransform(-26.7,136.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAACAIgOAAIAAgMQgJAOgRgBQgLABgIgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQALAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_143.setTransform(-37,134.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_144.setTransform(-43.7,134.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_145.setTransform(-55.7,136.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_146.setTransform(-65.8,136.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_147.setTransform(-76,137.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_148.setTransform(-90.1,138);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_149.setTransform(-104.7,136.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMABgOQAAgOAEgKQAFgMAKgGQAIgGAMAAQAHAAAHAEQAHADAEAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgJgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_150.setTransform(-115,134.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_151.setTransform(-121.7,134.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_152.setTransform(-128.7,136);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_153.setTransform(-135.7,134.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgMBCIAAhQIgPAAIAAgNIAPAAIAAgKQAAgJACgEQABgHAHgDQAEgFALAAIAOACIgCAOIgJgBQgIAAgCADQgDADgBAJIAAAIIASAAIAAANIgSAAIAABQg");
	this.shape_154.setTransform(-139.8,134.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_155.setTransform(-147.7,136.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMAAgOQAAgOAEgKQAFgMAJgGQAKgGALAAQAHAAAHAEQAGADAFAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgKgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_156.setTransform(-158,134.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_157.setTransform(-172.7,136);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_158.setTransform(-182.7,136.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_159.setTransform(-189.7,134.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiAIAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAGADAIQACAJAAAKQAAAXgLAOQgMANgRgBQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAHQAHANANAAQAJgBAIgIQAHgKAAgRQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_160.setTransform(-196.5,134.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_161.setTransform(343.3,116);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAEgKQAFgMAKgGQAIgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgKAAgJgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_162.setTransform(333,114.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_163.setTransform(323.3,116);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgJgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAKABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_164.setTransform(313,114.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_165.setTransform(303.3,116);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_166.setTransform(293.2,116.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_167.setTransform(283,117.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_168.setTransform(268.3,116);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_169.setTransform(258.9,117.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_170.setTransform(249.3,116);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AAWBBIAAg8QAAgLgFgFQgFgGgJAAQgHABgGAEQgGADgDAGQgCAGAAALIAAAzIgQAAIAAiBIAQAAIAAAvQALgNAPAAQALAAAHAEQAJAEACAIQAEAGAAANIAAA8g");
	this.shape_171.setTransform(239.3,114.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_172.setTransform(224.3,116);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_173.setTransform(216.9,114.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_174.setTransform(209.7,116);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_175.setTransform(200.3,116);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_176.setTransform(190.2,116.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgJAGQgLAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgIAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_177.setTransform(180.6,117.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_178.setTransform(168.3,114.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_179.setTransform(161.3,116);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_180.setTransform(146.3,116);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_181.setTransform(139,115.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAEgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_182.setTransform(130.3,116);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_183.setTransform(120.6,117.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_184.setTransform(105.7,116);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_185.setTransform(96.3,116);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_186.setTransform(83.8,115.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_187.setTransform(71.3,116);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_188.setTransform(63.9,114.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_189.setTransform(59.3,114.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_190.setTransform(52.7,116);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_191.setTransform(43.3,116);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_192.setTransform(34.1,116);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_193.setTransform(24.3,116);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_194.setTransform(14.3,115.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_195.setTransform(-0.7,116);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_196.setTransform(-10.8,116.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_197.setTransform(-21,117.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_198.setTransform(-32.7,114.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_199.setTransform(-36.7,114.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgMBCIAAhQIgPAAIAAgNIAPAAIAAgKQAAgJACgEQABgHAHgEQAEgEALAAIAOACIgCAOIgJgBQgIAAgCADQgDADgBAIIAAAJIASAAIAAANIgSAAIAABQg");
	this.shape_200.setTransform(-40.8,114.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_201.setTransform(-46,115.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_202.setTransform(-54.7,116);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_203.setTransform(-64.4,117.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_204.setTransform(-76.7,114.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_205.setTransform(-83.7,116);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_206.setTransform(-98.7,116);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_207.setTransform(-108.8,116.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_208.setTransform(-119,117.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_209.setTransform(-131,115.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_210.setTransform(-139.7,116);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_211.setTransform(-147,115.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_212.setTransform(-155.8,116.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQABAHADADQAHAFAKAAQAKAAAGgFQAGgEACgIQABgFAAgPQgKAMgPAAQgTAAgKgOQgLgOAAgSQAAgOAEgLQAFgLAKgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAHgHAAgSQABgRgJgJQgHgJgLAAQgJAAgIAJg");
	this.shape_213.setTransform(-166,117.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_214.setTransform(-175.7,116);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_215.setTransform(-185.3,116);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AApBBIgPgoIg1AAIgOAoIgTAAIAyiBIASAAIA1CBgAgIgZIgOAlIAqAAIgNgjIgIgbQgDAMgEANg");
	this.shape_216.setTransform(-195.7,114.2);

	this.Mod2T2mc3b3 = new lib.mc_seleccion();
	this.Mod2T2mc3b3.parent = this;
	this.Mod2T2mc3b3.setTransform(460.2,50.1,0.845,0.843,0,0,0,6.9,7);

	this.Mod2T2mc3b2 = new lib.mc_seleccion();
	this.Mod2T2mc3b2.parent = this;
	this.Mod2T2mc3b2.setTransform(459.4,-28,0.845,0.843,0,0,0,6.9,7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_217.setTransform(-100.1,73);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_218.setTransform(-107.7,69.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_219.setTransform(-118,67.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_220.setTransform(-127.7,69.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_221.setTransform(-135.1,67.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_222.setTransform(-141.9,69.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_223.setTransform(-151.7,69.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgJAGQgLAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgIAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_224.setTransform(-161.4,70.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_225.setTransform(-171.3,69.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_226.setTransform(-180.7,69.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_227.setTransform(-188,69.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_228.setTransform(-196.4,70.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_229.setTransform(296.3,49);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_230.setTransform(286.3,47.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_231.setTransform(279.3,47.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_232.setTransform(273.1,49.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_233.setTransform(266.3,47.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_234.setTransform(259.7,49.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_235.setTransform(250.3,49.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_236.setTransform(240.6,50.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_237.setTransform(225.3,49.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_238.setTransform(218.3,47.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_239.setTransform(209,49);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_240.setTransform(200.3,49.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_241.setTransform(190.6,50.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_242.setTransform(180.2,49.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_243.setTransform(171.1,49.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_244.setTransform(161.3,49.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_245.setTransform(146.9,51);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_246.setTransform(132.7,49.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_247.setTransform(123.3,49.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_248.setTransform(115.9,47.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_249.setTransform(108.7,49.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_250.setTransform(102.3,47.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_251.setTransform(98.3,47.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_252.setTransform(89,49);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_253.setTransform(80.3,49.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_254.setTransform(72.9,47.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_255.setTransform(65.7,49.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_256.setTransform(56.3,49.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_257.setTransform(41.3,49.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_258.setTransform(34,49);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_259.setTransform(25.3,49.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_260.setTransform(15.6,50.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_261.setTransform(0.3,49.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_262.setTransform(-9.3,49.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_263.setTransform(-16,49);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_264.setTransform(-24.7,49.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_265.setTransform(-31.7,47.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_266.setTransform(-35.7,47.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_267.setTransform(-42.7,49.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_268.setTransform(-50,49);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_269.setTransform(-56,49);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_270.setTransform(-64.7,49.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_271.setTransform(-74.3,49.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_272.setTransform(-83.7,49.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgKAAgKgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAJAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_273.setTransform(-94,47.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_274.setTransform(-108.7,49);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_275.setTransform(-118.7,49.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_276.setTransform(-126.1,47.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_277.setTransform(-130.7,47.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_278.setTransform(-140.2,49);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_279.setTransform(-150,49);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_280.setTransform(-158.7,49.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_281.setTransform(-168.4,50.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_282.setTransform(-183.3,49.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_283.setTransform(-192.7,49.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_284.setTransform(-199.7,47.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_285.setTransform(355.3,29);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_286.setTransform(345.2,29.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_287.setTransform(335,30.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_288.setTransform(320.7,29);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgJAIQgLAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_289.setTransform(311.3,29);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMAAgOQAAgOAEgKQAFgMAJgGQAKgGALAAQAHAAAHAEQAGADAFAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgKgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_290.setTransform(301,27.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_291.setTransform(291.3,29);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMABgOQAAgOAEgKQAFgMAKgGQAIgGAMAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgJgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_292.setTransform(281,27.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_293.setTransform(274.3,27.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_294.setTransform(267.8,29);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_295.setTransform(261.3,27.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_296.setTransform(256.9,27.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_297.setTransform(250.1,29);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_298.setTransform(240.3,29);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_299.setTransform(225.9,30.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_300.setTransform(211.7,29);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_301.setTransform(202.3,29);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_302.setTransform(193.1,29);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_303.setTransform(186.3,27.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_304.setTransform(181.9,27.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_305.setTransform(177.6,27.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_306.setTransform(172,28.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_307.setTransform(164.1,29);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_308.setTransform(149.7,29);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgIgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_309.setTransform(140.3,29);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_310.setTransform(133.3,27.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_311.setTransform(127.1,29);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_312.setTransform(117.3,28.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAGgFQAFgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_313.setTransform(107.3,29);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_314.setTransform(100.3,27.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_315.setTransform(96,28.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_316.setTransform(87.3,29);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJALAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_317.setTransform(77.6,30.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AAZAvIgUgdIgFgIIgYAlIgSAAIAigwIgggtIATAAIAPAWIAGALIAHgLIAPgWIATAAIggAsIAjAxg");
	this.shape_318.setTransform(67.8,29);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_319.setTransform(58.3,29);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_320.setTransform(43.7,29);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_321.setTransform(34.3,29);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_322.setTransform(27.3,27.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_323.setTransform(15.3,28.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_324.setTransform(5.3,29);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_325.setTransform(-3.9,29);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_326.setTransform(-18.7,28.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_327.setTransform(-28.7,29);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_328.setTransform(-36.1,27.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_329.setTransform(-43.7,28.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_330.setTransform(-53.7,29);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_331.setTransform(-63.8,29.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_332.setTransform(-72.9,29);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_333.setTransform(-87.7,29);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_334.setTransform(-97.8,29.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_335.setTransform(-108,30.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_336.setTransform(-120,28.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_337.setTransform(-128.7,29);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgoAvIAAgNIA6hDIgSAAIglAAIAAgNIBMAAIAAALIgyA6IgKALIAUgBIAqAAIAAAOg");
	this.shape_338.setTransform(-138.2,29);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_339.setTransform(-144.7,27.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_340.setTransform(-149.1,27.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_341.setTransform(-156.7,28.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_342.setTransform(-166.7,29);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_343.setTransform(-174,28.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_344.setTransform(-182.7,29);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgbA6QgQgHgIgQQgIgQAAgSQAAgSAIgQQAIgQAPgJQAPgHASgBQAOAAALAFQALAFAHAHQAGAJAEANIgQAEQgDgKgEgGQgEgFgIgEQgIgDgKAAQgLAAgIADQgJAEgFAGQgFAGgDAHQgFAMAAANQAAARAGAMQAGALALAGQALAFAMAAQALABALgFQAKgEAGgFIAAgYIgmAAIAAgOIA3AAIAAAvQgNAJgNAGQgOAEgOAAQgSABgPgJg");
	this.shape_345.setTransform(-194.8,27.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_346.setTransform(150.9,-14);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_347.setTransform(143.7,-17.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_348.setTransform(134.3,-17.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_349.setTransform(127.3,-19.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_350.setTransform(123.3,-19.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAGgFQAFgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_351.setTransform(116.3,-17.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAANANQALANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_352.setTransform(101.3,-17.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgLABgIgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_353.setTransform(91,-19.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_354.setTransform(76.3,-17.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_355.setTransform(66.3,-17.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_356.setTransform(56.2,-17.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_357.setTransform(41.3,-17.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMAAgOQAAgOAEgKQAFgMAJgGQAKgGALAAQAHAAAHAEQAGADAFAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgKgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_358.setTransform(31,-19.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_359.setTransform(21.3,-17.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_360.setTransform(12.1,-17.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_361.setTransform(-2.7,-17.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_362.setTransform(-10,-17.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_363.setTransform(-18.7,-17.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_364.setTransform(-28.4,-16.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_365.setTransform(-43.7,-17.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_366.setTransform(-53.7,-19.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_367.setTransform(-60.7,-19.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_368.setTransform(-66.9,-17.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_369.setTransform(-76.7,-17.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_370.setTransform(-86.7,-17.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AgbA7QgLgHABgQIAPADQABAHAFADQAFAFALAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAFgLQAFgLAIgHQAKgGAMAAQAQAAALAOIAAgMIAOAAIAABQQAAAWgEAJQgFAJgKAFQgJAGgNAAQgRAAgKgIgAgQgsQgIAJAAAQQAAATAIAHQAGAJALAAQALAAAHgJQAIgHAAgSQgBgRgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_371.setTransform(-97,-16);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_372.setTransform(-103.7,-19.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_373.setTransform(-110.3,-17.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_374.setTransform(-119.7,-17.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_375.setTransform(-134.7,-17.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_376.setTransform(-142.1,-19.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_377.setTransform(-149.7,-17.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_378.setTransform(-159.7,-17.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_379.setTransform(-166.7,-19.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_380.setTransform(-173.8,-17.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQABAHADADQAHAFAKAAQAKAAAGgFQAGgEACgIQABgFAAgPQgKAMgPAAQgTAAgKgOQgLgOAAgSQAAgOAEgLQAFgLAKgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAHgHAAgSQABgRgJgJQgHgJgLAAQgJAAgIAJg");
	this.shape_381.setTransform(-184,-16);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_382.setTransform(-190.7,-19.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_383.setTransform(-197.3,-17.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_384.setTransform(292.3,-37.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_385.setTransform(285.3,-39.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiBIAPAAIAAAuQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAGADAJQACAIAAAKQAAAYgLANQgMANgRABQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAHQAHAMANAAQAJAAAIgJQAHgIAAgTQAAgQgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_386.setTransform(278.5,-39.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_387.setTransform(271.3,-39.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_388.setTransform(264.7,-37.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_389.setTransform(255.3,-37.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgJAGgLAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_390.setTransform(245.6,-36.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgIgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_391.setTransform(230.3,-37.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_392.setTransform(223.3,-39.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_393.setTransform(214,-38);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_394.setTransform(205.3,-37.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_395.setTransform(195.3,-38);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_396.setTransform(188.3,-39.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_397.setTransform(178.8,-38);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_398.setTransform(169,-38);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_399.setTransform(160.3,-37.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_400.setTransform(152.9,-39.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_401.setTransform(145.3,-37.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAEgKQAFgMAKgGQAIgGAMAAQAIAAAGADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgKAAgJgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_402.setTransform(135,-39.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_403.setTransform(120.9,-36);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_404.setTransform(106.7,-37.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_405.setTransform(97.3,-37.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_406.setTransform(90,-38);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_407.setTransform(81.3,-37.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_408.setTransform(71,-39.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_409.setTransform(61.3,-37.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_410.setTransform(54,-38);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_411.setTransform(45.3,-37.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiBIAPAAIAAAuQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAGADAJQACAIAAAKQAAAYgLANQgMANgRABQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAHQAHAMANAAQAJAAAIgJQAHgIAAgTQAAgQgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_412.setTransform(35.5,-39.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_413.setTransform(25.3,-37.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_414.setTransform(18.3,-39.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_415.setTransform(11.3,-37.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_416.setTransform(2.1,-37.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_417.setTransform(-12.3,-37.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_418.setTransform(-21.7,-37.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_419.setTransform(-28.7,-39.7);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_420.setTransform(-40.7,-37.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgGgLABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAHAAAHADQAGAEAFAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgKAAgKgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQAKABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_421.setTransform(-51,-39.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_422.setTransform(-62.7,-39.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_423.setTransform(-69.7,-37.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_424.setTransform(-76.7,-39.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_425.setTransform(-82.9,-37.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_426.setTransform(-92.7,-38);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_427.setTransform(-102.7,-37.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_428.setTransform(-110.1,-39.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_429.setTransform(-117.7,-37.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_430.setTransform(-127.4,-36.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_431.setTransform(-139.7,-39.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_432.setTransform(-146.7,-37.9);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_433.setTransform(-159,-38);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_434.setTransform(-164.7,-39.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_435.setTransform(-172,-39.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_436.setTransform(-181.7,-37.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#333333").s().p("AAtBBIAAhrIglBrIgPAAIglhtIAABtIgQAAIAAiBIAZAAIAeBbIAGATIAHgVIAehZIAYAAIAACBg");
	this.shape_437.setTransform(-194.2,-39.7);

	this.Mod2T2mc3b1 = new lib.mc_seleccion();
	this.Mod2T2mc3b1.parent = this;
	this.Mod2T2mc3b1.setTransform(459.4,-107.7,0.845,0.843,0,0,0,6.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mod2T2mc3b1},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.Mod2T2mc3b2},{t:this.Mod2T2mc3b3},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.Mod2T2mc3b4},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.aceptar}]}).wait(1));

	// numeros
	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AAJBaIAAgkIhIAAIAAgeIBMhxIAdAAIAABxIAWAAIAAAeIgWAAIAAAkgAgfAYIAoAAIAAg8g");
	this.shape_438.setTransform(-255.8,122.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#DC686B").s().p("Ah7B8Qgzg0AAhIQAAhHAzgzQA0gzBHAAIAHAAQBEABAxAyQAzAzAABHQAABIgzA0QgzAzhJgBQhHABg0gzg");
	this.shape_439.setTransform(-255.7,122.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgoBNQgQgOgCgWIAhgEQABAMAHAHQAHAHAKAAQAKAAAHgIQAHgIAAgOQAAgNgHgHQgHgIgKAAQgFAAgJADIADgbQANAAAIgGQAHgHAAgKQAAgJgFgGQgGgFgIAAQgIAAgHAGQgGAGgBAMIgggGQADgQAHgJQAHgKAMgGQAMgFAOAAQAZAAAPAQQAMANAAARQAAAXgZAOQAPADAJALQAJALAAARQAAAXgRARQgRAQgZAAQgYAAgQgOg");
	this.shape_440.setTransform(-255.8,46.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#DC686B").s().p("Ah7B7QgzgyAAhJQAAhHAzgzQA0gzBHgBIAHAAQBEADAxAxQAzAzAABHQAABJgzAyQgzAzhJABQhHgBg0gzg");
	this.shape_441.setTransform(-255.7,46.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("Ag7BaQACgSAKgQQAJgRAdgaQAWgVAGgIQAHgKAAgLQAAgLgGgGQgHgGgKAAQgKAAgHAGQgGAHgBAPIgigEQADgcAQgMQAQgNAXAAQAbAAAPAOQAPAPAAAVQAAAMgEALQgFALgJALQgGAIgQAPIgUATIgHAKIBDAAIAAAgg");
	this.shape_442.setTransform(-256,-32);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#DC686B").s().p("Ah7B7QgzgyAAhJQAAhHAzgzQA0g0BHAAIAHAAQBEACAxAyQAzAzAABHQAABJgzAyQgzAzhJAAQhHAAg0gzg");
	this.shape_443.setTransform(-255.7,-32.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("AAFBaIAAiAQgSARgZAJIAAggQANgEAQgMQAOgMAGgRIAcAAIAACzg");
	this.shape_444.setTransform(-257.7,-107.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#DC686B").s().p("Ah7B7QgzgyAAhJQAAhHAzgzQA0g0BHAAIAHAAQBEACAxAyQAzAzAABHQAABJgzAyQgzAzhJAAQhHAAg0gzg");
	this.shape_445.setTransform(-255.7,-107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438}]}).wait(1));

	// fondos
	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#F3F3F3").s().p("EAx1AXHInUAAIhrAAMghFAAAMgh2AAAI9ZAAQggAAgagHIgHgCQhVgcAAhxIAAgUIAAgKIAAgxIAAgfIAAgUIAAgUIAAh/QAAh1BcgaQAZgHAhAAIdZAAMAh2AAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBcIABASIAAEVQAAByhWAbQgcAJgkAAgEAx1AMAInUAAIhrAAMghFAAAMgh2AAAI9ZAAQggAAgagHIgHgCQhVgcAAhxIAAhuIAAhFIAAhGIAAiAQAAh1BcgZQAZgIAhAAIdZAAMAh2AAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBcIABASIAABSIAAAuIAABGIAAAVIAAAwIAAAkIAAA4IAAADIAAAPQAAByhWAbQgcAJgkAAgEAx1gBHInUAAIhrAAMghFAAAMgh2AAAI9ZAAQggABgagIIgHgCQhVgbAAhyIAAgTIAAgKIAAgyIAAgeIAAgUIAAgUIAAh/QAAh2BcgZQAZgHAhAAIdZAAMAh2AAAMAhFAAAIBrAAIM+AAQAsgBAaALQBJAdAGBcIABATIAAEUQAAByhWAbQgcAKgkgBgEAx1gMhInUAAIhrAAMghFAAAMgh2AAAI9ZAAQggAAgagHIgHgCQhVgcAAhxIAAhuIAAhGIAAhGIAAh/QAAh1BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaALQAiANAUAbQAWAgADAwIABATIAABRIAAAuIAABGIAAAWIAAAwIAAAkIAAA3IAAAEIAAAPQAABxhWAcQgcAJgkAAg");
	this.shape_446.setTransform(143,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_446).wait(1));

}).prototype = getMCSymbolPrototype(lib.caja_respuestasM2T2mc3, new cjs.Rectangle(-273.2,-141.6,786.4,341.5), null);


(lib.perfolescpacidades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQALAAAHAIQAHAHAAAKQAAAKgHAIQgHAHgLABQgKgBgHgHg");
	this.shape.setTransform(181.9,171.2,1.173,1.173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRASQgHgIAAgKQAAgKAHgHQAIgIAJAAQALAAAHAIQAIAHgBAKQABAKgIAIQgHAHgLABQgJgBgIgHg");
	this.shape_1.setTransform(171.2,171.2,1.173,1.173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRASQgIgIABgKQgBgKAIgHQAIgIAJAAQAKAAAIAIQAIAHgBAKQABAKgIAIQgIAHgKABQgJgBgIgHg");
	this.shape_2.setTransform(160.5,171.2,1.173,1.173);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("ACxiIIhMAzQgwgZg5AAQhJAAg0AlQgzAmAAA0QAAA1AzAlQA0AlBJAAQBIAAA0glQA0glAAg1QAAgigZgeg");
	this.shape_3.setTransform(171.8,169.2,1.173,1.173);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B1C0C9").s().p("Ah/BnQgzglAAg1QAAg0AzglQA0gmBJAAQA5AAAwAZIBMgzIgeBZQAZAeAAAiQAAA1g0AlQg0AmhIAAQhJAAg0gmg");
	this.shape_4.setTransform(171.5,169.7,1.173,1.173);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6D8D8").s().p("Ag9CaQAIgcAQgsQAUg3AFgFQAFgEgBgOQgDgZABgQIABg/IgBghIAYgcQAcgSAUAzIgGAxQgGA1gHAZIgDAfQgCAKgbAzIgoBMg");
	this.shape_5.setTransform(209.2,186.9,1.173,1.173);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_6.setTransform(200.2,201.4,1.173,1.173);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_7.setTransform(200.2,196.8,1.173,1.173);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_8.setTransform(200.2,192,1.173,1.173);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#747887").s().p("AgFAAIAFgRIAGARIgGASg");
	this.shape_9.setTransform(216.1,174.2,1.173,1.173);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_10.setTransform(217.8,174.3,1.173,1.173);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#747887").s().p("AgDAFIgJgQIARAGIAJARg");
	this.shape_11.setTransform(216.6,166.7,1.173,1.173);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#747887").s().p("AgDAFIgJgQIARAGIAIARg");
	this.shape_12.setTransform(214.5,166.6,1.173,1.173);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#747887").s().p("AgGADIABgTIAMAOIgCATg");
	this.shape_13.setTransform(217.2,170,1.173,1.173);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#747887").s().p("AgGADIABgTIAMAOIgCATg");
	this.shape_14.setTransform(219,170.7,1.173,1.173);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_15.setTransform(219.5,175.2,1.173,1.173);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#747887").s().p("AgFAAIAJgRIACASIgIARg");
	this.shape_16.setTransform(216,178.3,1.173,1.173);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#747887").s().p("AgFAAIAIgRIADASIgJAQg");
	this.shape_17.setTransform(215.1,182.7,1.173,1.173);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#747887").s().p("AgGAAIAJgQIAEARIgKARg");
	this.shape_18.setTransform(217.6,178.7,1.173,1.173);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#747887").s().p("AgGAAIAJgQIAEASIgKAPg");
	this.shape_19.setTransform(219.1,179.9,1.173,1.173);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#747887").s().p("AgGAAIAJgQIAEARIgKAQg");
	this.shape_20.setTransform(218.2,184.2,1.173,1.173);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#747887").s().p("AgGAAIAJgRIAEASIgKAQg");
	this.shape_21.setTransform(216.8,183,1.173,1.173);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_22.setTransform(214.6,187.5,1.173,1.173);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgGATg");
	this.shape_23.setTransform(213.5,204.7,1.173,1.173);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgHATg");
	this.shape_24.setTransform(215,205.3,1.173,1.173);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#747887").s().p("AgDAAIAHgSIAAARIgEAUg");
	this.shape_25.setTransform(216.2,206.2,1.173,1.173);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgGATg");
	this.shape_26.setTransform(213.8,200.1,1.173,1.173);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgHATg");
	this.shape_27.setTransform(215.4,200.6,1.173,1.173);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#747887").s().p("AgDAAIAHgSIAAARIgEAUg");
	this.shape_28.setTransform(216.5,201.6,1.173,1.173);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgGATg");
	this.shape_29.setTransform(212.7,195.6,1.173,1.173);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgGATg");
	this.shape_30.setTransform(214.4,195.6,1.173,1.173);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgHATg");
	this.shape_31.setTransform(215.9,196.1,1.173,1.173);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#747887").s().p("AgFAAIAFgSIAGASIgGATg");
	this.shape_32.setTransform(216.2,191.7,1.173,1.173);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#747887").s().p("AgDAAIAHgSIgBARIgDAUg");
	this.shape_33.setTransform(217.1,197.1,1.173,1.173);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747887").s().p("AgDAAIAFgSIACARIgDAUg");
	this.shape_34.setTransform(217.6,192.6,1.173,1.173);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_35.setTransform(208.2,205.1,1.173,1.173);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#747887").s().p("AgGAAIAGgRIAHARIgHASg");
	this.shape_36.setTransform(210.1,204.8,1.173,1.173);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_37.setTransform(211.9,204.7,1.173,1.173);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_38.setTransform(210.3,200.3,1.173,1.173);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_39.setTransform(212.2,200.1,1.173,1.173);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_40.setTransform(214.7,191.6,1.173,1.173);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_41.setTransform(217.9,188.2,1.173,1.173);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_42.setTransform(216.3,187.4,1.173,1.173);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_43.setTransform(200.2,187.5,1.173,1.173);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#747887").s().p("AgDAAIABgQIAGARIgBAQg");
	this.shape_44.setTransform(199,201.4,1.173,1.173);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#747887").s().p("AgEAAIADgQIAGAQIgDARg");
	this.shape_45.setTransform(198.9,196.6,1.173,1.173);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#747887").s().p("AgEAAIADgQIAGAQIgDARg");
	this.shape_46.setTransform(198.9,192.1,1.173,1.173);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_47.setTransform(198.7,187.6,1.173,1.173);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_48.setTransform(198.7,183.3,1.173,1.173);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_49.setTransform(200.1,183.3,1.173,1.173);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_50.setTransform(198.7,179.3,1.173,1.173);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#747887").s().p("AgFABIAFgSIAGARIgGASg");
	this.shape_51.setTransform(200.1,179.3,1.173,1.173);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#747887").s().p("AgFAAIAIgQIADARIgJAQg");
	this.shape_52.setTransform(200.5,174.9,1.173,1.173);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#747887").s().p("AgEgBIAKgOIAAASIgLANg");
	this.shape_53.setTransform(201.7,170.8,1.173,1.173);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#747887").s().p("AgBAAIAHgQIAAATIgLANg");
	this.shape_54.setTransform(203,166.9,1.173,1.173);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_55.setTransform(201.5,201.5,1.173,1.173);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_56.setTransform(207,175.8,1.173,1.173);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_57.setTransform(206.8,179.8,1.173,1.173);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_58.setTransform(206.7,183.8,1.173,1.173);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_59.setTransform(207,187.9,1.173,1.173);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_60.setTransform(205.3,192.1,1.173,1.173);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_61.setTransform(205.1,188.2,1.173,1.173);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_62.setTransform(205,184.2,1.173,1.173);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_63.setTransform(204.8,180.1,1.173,1.173);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#747887").s().p("AgGAAIAKgQIADASIgKAPg");
	this.shape_64.setTransform(205.3,175.7,1.173,1.173);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#747887").s().p("AgFgBIAMgOIAAASIgNANg");
	this.shape_65.setTransform(206.7,171.6,1.173,1.173);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#747887").s().p("AgDgFIAKACIgNAJg");
	this.shape_66.setTransform(208.4,165.3,1.173,1.173);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#747887").s().p("AgCgHIAJACIgNANg");
	this.shape_67.setTransform(210.4,165.1,1.173,1.173);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#747887").s().p("AgGgBIANgOIAAASIgNANg");
	this.shape_68.setTransform(208.7,167.8,1.173,1.173);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_69.setTransform(203.7,196.3,1.173,1.173);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_70.setTransform(201.5,197,1.173,1.173);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_71.setTransform(203.6,192.2,1.173,1.173);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_72.setTransform(201.5,192.2,1.173,1.173);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_73.setTransform(203.5,188.2,1.173,1.173);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_74.setTransform(201.5,187.6,1.173,1.173);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_75.setTransform(203.3,184.3,1.173,1.173);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_76.setTransform(203.2,180.1,1.173,1.173);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#747887").s().p("AgGAAIAKgQIADASIgKAQg");
	this.shape_77.setTransform(203.6,175.8,1.173,1.173);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#747887").s().p("AgGgBIANgOIAAASIgNANg");
	this.shape_78.setTransform(205.1,171.7,1.173,1.173);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#747887").s().p("AgGgBIANgOIAAASIgNANg");
	this.shape_79.setTransform(206.8,167.8,1.173,1.173);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_80.setTransform(201.5,183.5,1.173,1.173);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#747887").s().p("AgGABIAGgSIAHARIgHASg");
	this.shape_81.setTransform(201.4,179.4,1.173,1.173);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#747887").s().p("AgGAAIAKgQIADARIgKAQg");
	this.shape_82.setTransform(201.8,175.1,1.173,1.173);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#747887").s().p("AgFgBIAMgOIAAASIgNANg");
	this.shape_83.setTransform(203.2,170.9,1.173,1.173);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#747887").s().p("AgFgBIAMgOIAAASIgNANg");
	this.shape_84.setTransform(204.9,167.1,1.173,1.173);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#805F50").s().p("AgDgKQADgHAEAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQACAPgIAKIgHAIg");
	this.shape_85.setTransform(211.8,148.9,1.173,1.173);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3F3231").s().p("AAjBdQgGgCgCgGIgNg5QAAglgKgNQgDgIgEgEQgHgFgggEQgUgCgGgEIgJgIQgBgCABgEQABgEACgBIANgKIACAAQAKgGANgEIACAAIANgCQA8gLAZAmQASAcgEAoQgEAugMAVIgLAMIgGAGQgDADgEAAIgDAAg");
	this.shape_86.setTransform(206.9,145.4,1.173,1.173);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#35343A").s().p("AgBAAQAAgCABgCIACgBIABAHIgDAEQgCgCABgEg");
	this.shape_87.setTransform(201,206.6,1.173,1.173);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#35343A").s().p("AgGACQACgFgBgCIAFABQAEACACACQADAEgFACQgIgFgCABg");
	this.shape_88.setTransform(203.9,206.7,1.173,1.173);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C3C3C1").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_89.setTransform(202.2,206.3,1.173,1.173);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#35343A").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgCACAAQAJAAAAAIQAAAJgJAAQgCAAgDgCg");
	this.shape_90.setTransform(202.2,206.3,1.173,1.173);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#323436").s().p("AhbBmQgChpgJgVQgJgWgJgSQgFgHAAgFQgCgRASgGQAFgCATgBIBfACQASABATADIBJAJQAGABAAACQgCALgtgLQgcgGg2gEQgygDgaABQgWABgIAEQgFACgDAHQgCAFAHAMQALAUAFAPQALAegBAcIACBLg");
	this.shape_91.setTransform(213.6,220.2,1.173,1.173);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7BBC1").s().p("AhSBpIgHgBQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAgBQgDhlgIgUIgNgcIgHgOIgEgOQABgNANgHQAJgGAMgBIAEgBQAHgBBMADIAPABQASAAATAEIBCAIQAMACACADIABAEQgBADgDACQgJAGglgJQgagHgzgCQgqgCgfACIgaABQgHABgEAFIgCAHQAAAEAGAJQAHALAJAbQALAegCAaIADBAIAAAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABgAhVBiIABAAIgChEQAAgXgKgbQAIAZADBdgAhWhiIgFABQgPACgGAEQgJAGABAOIAAACQgBgFACgDIABgDQADgHAGgDQAHgDAUgBQAggCAwACIAwADQgTgEgRAAIgPgBQgugDgVAAIgOABgABPhWQAiAIAHgEIg3gHIAOADg");
	this.shape_92.setTransform(213.4,219.9,1.173,1.173);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#805F50").s().p("AAFA6QgJgCgHgFQgJgJgDgMQgDgIABgHIAEgRQAFgOAFgLQACgGAHgHQAFgGAAgEIADgIIASAHQgDAGABAIIABAIQAFAOgIASQgFALAAAKQABALAGAGQAFAEAAAFQAAAEgDABIgIADIgDABIgIgBg");
	this.shape_93.setTransform(201.5,211.5,1.173,1.173);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#805F50").s().p("AgEgLQAEgIAEABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQACAQgIALIgIAIg");
	this.shape_94.setTransform(212.3,149.3,1.173,1.173);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B6BCC5").s().p("AgmAMIBJglIAGAaQgDAMhPANg");
	this.shape_95.setTransform(209.2,162.3,1.173,1.173);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#ADB2B2").s().p("AgDDKIhQgEQgJjYgEgdQgDgSAbg5IAbg0IBZgbIALAIQANAMAJARQAfA1gPBUQghCwAMAoQADANg+AAIgQAAg");
	this.shape_96.setTransform(208.9,185.8,1.173,1.173);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#805F50").s().p("AgTBoQAEgTgDgEQgCgFgQADIgXAEQgJABgHgJQgBgCABgHIABgHIAAgCIABAAIgDgIIgBgDQgCgEABgFIAAgKQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgFAAgCgCQgDgCgBgEIABgDQAFgPAGgJIAFgIIABg2QAJgiAjgNQARgHAPAAIAOAAQARABAOAGQAtATACA6QACA5gWAbIgWAQQgJAWgFAgIg9ANIAFgWg");
	this.shape_97.setTransform(207.7,149.4,1.173,1.173);

	this.instance = new lib.ClipGroup_27();
	this.instance.parent = this;
	this.instance.setTransform(196.5,180.3,1.173,1.173,0,0,0,10.3,17.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#805F50").s().p("Ag4AwQgJgGAAgFQAAgFAIgJIALgMQAUgRAAgDQAAgCgGABIgIACQgKABgGgHQgCgDAHAAIAMABQAIgBARgHQAHgCAVAEQAGAAAugdIgIAnIgRAEQgSAGgEAHQgIAPgNAIIgOAMQgKAJgIACIgIABQgHAAgHgEg");
	this.shape_98.setTransform(184.4,200.5,1.173,1.173);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111011").s().p("AhfDBIgxkSQgBgEABgGQAAgNAGgLQATgiBBgCQBAgCgBgTIgOgRICLgEIAGAsQAGAtAAAKQAAAUg2AWQg/Aag9gVIAWDxg");
	this.shape_99.setTransform(200.8,231.6,1.173,1.173);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#353335").s().p("AhqCzQgUgzgVhAQgph9ABg5QABg4BmgIQA0gEA/AHQATgBAbgGIBvANQgoApgLAKQgGAGguAVIg0AXQgMAHgtAAQgMAAghgDIgegEIAnBtIAOAyQAOAwAJANQAKAOgBAKQAAAFgDAHQAAADgNAAQgVAAg3gIg");
	this.shape_100.setTransform(189.9,231,1.173,1.173);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5E4A39").s().p("AhNAlQgCgBgBgHQgBgNATgIQAPgHAhgRIAJgUIBQAEIAGAPQABAegEADQgFAEgjgCIg8ATg");
	this.shape_101.setTransform(190.7,258.3,1.173,1.173);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5E4A39").s().p("AhNAkQgCAAgBgHQgBgNATgIQAPgHAhgRIAJgUIBQAEIAGAPQABAdgEAEQgEAEgkgCIg8ASg");
	this.shape_102.setTransform(179.4,256.5,1.173,1.173);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#323436").s().p("AhbBmQgChpgIgVQgJgWgKgSQgEgHgBgFQgCgRASgGQAGgCASgBIBgACQARABATADIA8AIIAOABQAGABgBACQAAAEgJABQgMABgagGQgbgGg2gEQgygDgbABQgWABgHAEQgFACgEAHQgCAFAHAMQALAUAGAPQALAegBAcIABBLg");
	this.shape_103.setTransform(212.1,219,1.173,1.173);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#323436").s().p("AABACQgJgLAAgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIACAAQgGACAMAPQAGAGACAGQABAFgBABIgIgQg");
	this.shape_104.setTransform(217.7,223.2,1.173,1.173);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#626666").s().p("AAGBGQAFghgCgYQgCgOgMgsIgOgpIASAHQAFACADAMIACAQIAGAiQAFAiAAATQAAASgKASIgKANg");
	this.shape_105.setTransform(225.3,219.4,1.173,1.173);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#626666").s().p("ABgEGQgRgCisgkQgVgEgUABIgdADQgjAEgKASIgCARQgDgPACgPIACgMIAPgLQAZgNAygIQAygIBWASQArAJAkAKQADAAAAgRQAAgSgEgJQgFgMgFgYQgFgdABgPQADgWAahBQAVg0ARgkQAQghAAhdQAAgfALgJQAGgEACADQACAFADAAQAIAAARgTQgHAJgBA6IgBBPQgCAPgnBgQglBcgJAPQgGAKAMA/QALBAgFAIQgJANgEACIgHABIgNgBg");
	this.shape_106.setTransform(205.5,195.6,1.173,1.173);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#323436").s().p("AA9BeQgdgHhDgHQhTgJgaAIQgcAIgPgSQgMgQAGgYQAEgTAWgEQALgCAKACIAlgDQAIAABrAWQBsAXANgCQAQgCACgXQABgRgIgrIgJgyQgCgOAGAAIAgAFIAUA2QASA9gLAkQgKAhgUALQgLAGgZABIgCAAQgbAAgkgKg");
	this.shape_107.setTransform(203.7,220.8,1.173,1.173);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#454748").s().p("AAQAGIgNgCIgXgJIARADQAMACAMAGg");
	this.shape_108.setTransform(225.1,243.6,1.173,1.173);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#717677").s().p("AgEgMQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgBAAIAFgDIAMAHIgIABQgBADAFAYIgGACQAAgbgDgEg");
	this.shape_109.setTransform(211,242,1.173,1.173);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#717677").s().p("AgEAFQgLgBgEgEIgBgDIADgCIgBABIAEADQAFACAHABQALACAMgIIAAAEQgHAGgMAAIgGgBg");
	this.shape_110.setTransform(208.5,239.6,1.173,1.173);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3D4658").s().p("AgjBMQABgZAFgMIAthyIAIABQAJAAADgCQADgBgcA3IgeA9QgCAJAAAdg");
	this.shape_111.setTransform(205,249.1,1.173,1.173);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#252931").s().p("ABZAzQABgBgIgSQgGgKgNgGIgkgMQgWgIgdgIQgRgEgegCIgagCIAAgeQAiAFBFAaQBEAaAJAMQAMAOADASg");
	this.shape_112.setTransform(222.6,246.4,1.173,1.173);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#252931").s().p("AhtAuQgCgDAAgFQAAgJAHgIQAKgKBWgaQBVgaAjgEIgJAhQg7gCgcAGQgVAGgeAIIgnAKQgQAEgDAGQgGAJgBAGIAAAFg");
	this.shape_113.setTransform(193.7,245.6,1.173,1.173);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B3B5B8").s().p("AAAAlIAAhJIABAAIAABJg");
	this.shape_114.setTransform(210.7,235.2,1.173,1.173);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3D4658").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_115.setTransform(208.3,235.5,1.173,1.173);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#252931").s().p("AgMAkIgHgEIAAhGIAnAAIAABDQAAAIgPABIgEABQgGAAgHgDg");
	this.shape_116.setTransform(208.6,235.5,1.173,1.173);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#454748").s().p("AgFAVQgHgCgCgIQgDgHACgIQADgIAGgFQAGgFAGACQAHADADAHQACAHgCAIQgDAIgGAFQgFADgDAAIgEAAg");
	this.shape_117.setTransform(180.1,255.1,1.173,1.173);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#454748").s().p("AgBAYQgIgBgFgIQgEgHABgJQABgKAGgGQAGgGAGAAQAIABAFAIQAEAHgBAJQgBAKgGAGQgFAGgGAAIgBAAg");
	this.shape_118.setTransform(202.1,262.2,1.173,1.173);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#040D1B").s().p("AAAAXQgHgBgHgDQgGgEgCgHQgCgIADgHQAEgIAKgCIAIgBIAAgEIAWAAIABAMQAAANgBAEQgDAMgIADIgIABIgEAAg");
	this.shape_119.setTransform(178.8,253.7,1.173,1.173);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#454748").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_120.setTransform(234.5,255.6,1.173,1.173);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#454748").s().p("AgEAMQgEgBgBgEQgCgFACgEQACgGAEgCQAEgDAEACQAEABABAEQACAFgCAEQgCAGgFACIgEACIgDgBg");
	this.shape_121.setTransform(229.3,246.4,1.173,1.173);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#454748").s().p("AgGATQgGgCgCgHQgDgIADgHQAEgIAGgEQAGgEAGACQAGADACAHQACAIgDAHQgDAIgHAEQgEACgDAAIgEgBg");
	this.shape_122.setTransform(198.2,246.3,1.173,1.173);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#040D1B").s().p("AgOATQgNgHAGgTQADgHAHgDIAHgBIAAgFIAbABIABAMQAAAMgBAFQgDAMgIADQgFACgFAAQgHAAgJgFg");
	this.shape_123.setTransform(197.2,245.2,1.173,1.173);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#040D1B").s().p("AgHAOQgGgBgBgIIAAgTIARAAIAAACIAEABQAFACACAFQAFALgKAFQgEADgFAAIgBAAIgGgBg");
	this.shape_124.setTransform(228.7,246.1,1.173,1.173);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#040D1B").s().p("AgKATQgHgCgCgKQgBgFAAgKIABgLIAXAAIAAAEIAGABQAHACACAGQAFARgLAGQgGADgHAAIgCAAIgIgBg");
	this.shape_125.setTransform(235,254.5,1.173,1.173);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#717677").s().p("AA8AWQgCgDgDgBIgQgEIgRgEIgOgFIhUgXIAAgEQCQAhAFAEQAHAGgEABQgJgCgEADIgBAAIgCgBg");
	this.shape_126.setTransform(220,241.8,1.173,1.173);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#454748").s().p("AgFAUQgHgCgDgHQgCgHACgHQADgJAGgFQAGgFAGADQAGABAEAIQACAHgCAIQgDAIgGAFQgFADgDAAIgEgBg");
	this.shape_127.setTransform(177.2,253.9,1.173,1.173);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#454748").s().p("AgKAPQgFgGAAgJQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_128.setTransform(237,254.9,1.173,1.173);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#323436").s().p("AhbBmQgChpgIgVQgJgWgKgSQgEgHgBgFQgCgRASgGQAGgCASgBIBgACQARABATADIA8AIIAOABQAGABgBACQAAAEgJABQgMABgagGQgbgGg2gEQgygDgbABQgWABgHAEQgFACgEAHQgCAFAHAMQALAUAGAPQALAegBAcIABBLg");
	this.shape_129.setTransform(212.1,214.2,1.173,1.173);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#323436").s().p("Ag3CzQArhkAKgbQAOgtARgtQAEgMAAgwQgCg2ADgQQADgTAJAAQAFAAABACQACAEACAQQABALgDAwQgDAvABAQQACARgJAbQgMAkgBAIQgFAdguByQgIgGgcgDg");
	this.shape_130.setTransform(225.7,186.4,1.173,1.173);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#626666").s().p("AgSAtIAlhdIgHAmIgEAZQgCASgCAFQgDAIgGACIgEABQgFAAgEgEg");
	this.shape_131.setTransform(225.6,203.1,1.173,1.173);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B7BBC1").s().p("AhSBpIgHgBQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAgBQgDhlgIgUQgFgMgIgQIgHgOIgEgOQABgNANgHQAJgGAMgBIAEgBQAHgBBMADIAPABQARAAAUAEIBCAIQAMACACADIABAEQgBADgDACQgJAGglgJQgagHgzgCQgqgCgfACIgaABQgHABgEAFQgCADAAAEQAAAEAFAJQAHAKAKAcQALAegDAaIAEBAIAAAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABgAhVBiIABAAIgChEQAAgXgKgbQAIAZADBdgAhWhiIgFABQgPACgGAEQgJAGABAOIAAACQgBgFACgDIABgDQADgHAGgDQAHgDATgBQAhgCAwACIAwADQgTgEgRAAIgPgBQgugDgVAAIgOABgABPhWQAhAIAIgEIg3gHIAOADg");
	this.shape_132.setTransform(211.9,218.8,1.173,1.173);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B7BBC1").s().p("AhSBpIgHgBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQgDhlgIgUQgFgMgIgQIgHgOIgEgPQABgMANgHQAJgGAMgBIAEgBQAHgBBMADIAPABQARAAAUAEIBCAIQAMACACADIABAEQgBADgDACQgJAGglgJQgagHgzgCQgqgCgfACIgaABQgHABgEAFQgCADAAAEQAAAEAFAJQAHAKAKAcQALAegDAaIAEBAIAAAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgCABgAhVBiIABAAIgChEQAAgXgKgbQAIAZADBdgAhWhiIgFABQgPACgGAEQgJAGABAOIAAACQgBgFACgDIABgDQADgHAGgDQAHgDATgBQAhgCAwACIAwADQgTgEgRAAIgPgBQgugDgVAAIgOABgABPhWQAhAIAIgEIg3gHIAOADg");
	this.shape_133.setTransform(211.9,214,1.173,1.173);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#717677").s().p("AgEgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBIAJAFIgFAAQgBABgBACIgBAFg");
	this.shape_134.setTransform(207,240.5,1.173,1.173);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#9B9D9E").s().p("AgEAEQAGgYAIgHIgKA2IgJABIAFgYg");
	this.shape_135.setTransform(201,254.8,1.173,1.173);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#9B9D9E").s().p("AgkBMQgBgTADgNIAPgiQAOgdACgNQADgOAKgOIALgNIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQACABAGgCIAIADQABAggBABIgUAEQgFAFgLAaIgQAkQgGALgBASIAAARg");
	this.shape_136.setTransform(206.5,249.1,1.173,1.173);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#9B9D9E").s().p("ABWAfQgEgGgOgHIglgMQgQgFgJgHQgHgHgOgDQgRgEgngQIgjgPIAIgDQAiAEBHAcQBFAbAQANQAMALAEAZIgMABQAAgJgKgPg");
	this.shape_137.setTransform(222.8,246,1.173,1.173);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#9B9D9E").s().p("Ah5AyIgBgKQABgMAIgHQAPgMBWgbQBWgaAkgFIANAHQhOAYgdAGQgWAGgdAIIgnAMQgPAFgEAHQgGAJgDAIIgBAHg");
	this.shape_138.setTransform(193.2,245.2,1.173,1.173);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#040D1B").s().p("AAAAZQgIgBgHgDQgOgIAGgVQADgIAIgCIAIgCIAAgEIAdAAIAAAOQABANgBAFQgDAOgJACIgJABIgEAAg");
	this.shape_139.setTransform(200.6,261.1,1.173,1.173);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#454748").s().p("AgBAYQgIgBgFgHQgEgIABgJQABgKAGgGQAGgGAGAAQAIABAFAIQAEAHgBAJQgBAKgGAGQgFAGgGAAIgBAAg");
	this.shape_140.setTransform(198.8,261.2,1.173,1.173);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#454748").s().p("AgGATQgHgCgCgHQgCgHADgIQADgIAHgEQAFgEAHADQAGACACAHQACAHgDAIQgDAIgHAEQgEACgDAAIgEgBg");
	this.shape_141.setTransform(194.7,245,1.173,1.173);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_142.setTransform(-166.7,117.9,1.173,1.173);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_143.setTransform(-158.8,117.9,1.173,1.173);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_144.setTransform(-150.9,117.9,1.173,1.173);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#FFFFFF").p("AiBBkIA5glQAiASAqAAQA2AAAmgbQAmgcAAgmQAAgngmgbQgmgcg2AAQg1AAgmAcQgmAbAAAnQAAAZASAWg");
	this.shape_145.setTransform(-159.3,119.4,1.173,1.173);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B1C0C9").s().p("AhtAmQgSgWAAgYQAAgnAmgcQAmgcA1AAQA2AAAmAcQAmAcAAAnQAAAmgmAbQgmAcg2AAQgqAAgigTIg5Amg");
	this.shape_146.setTransform(-159.1,119,1.173,1.173);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#252931").s().p("AAAACIABgHIAAALg");
	this.shape_147.setTransform(-202.2,222.1,1.173,1.173);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#626666").s().p("AgKBbQgOgVAAgXQABgXAFgqIAIgrQACgiALgDQAMgEAKgFIgRAzQgQA3gCARQgDAeAGApIAIAVQgFgGgGgLg");
	this.shape_148.setTransform(-230.2,208.3,1.173,1.173);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#626666").s().p("AAHA8QgHgDgEgJQgEgJgGg0IgIgvIAtB0QgFAFgGAAIgFgBg");
	this.shape_149.setTransform(-230.5,188.2,1.173,1.173);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#717677").s().p("AAAACIgCgCIAAgBQACAAADADg");
	this.shape_150.setTransform(-206.3,232.8,1.173,1.173);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#717677").s().p("AAAgCIgFABIALgGIAAACQgBABAAABQAAAAAAABQAAAAABAAQAAABAAAAQABABgBAIQgDgJgDgBg");
	this.shape_151.setTransform(-207.4,234.4,1.173,1.173);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#252931").s().p("AgFAwQgMgBgEgGIgCgFIAAhTIAvAAIAABXQgKAIgOAAIgFAAg");
	this.shape_152.setTransform(-209.4,228.4,1.173,1.173);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#323436").s().p("ABrAjQgBgjAOgmQAGgSAOgYQAJgQgDgGQgEgJgGgCQgJgFgcgBQgigCg9AEQhDAFgiAIQggAIgPgCQgLgBAAgFQgBgDAHgBIARgBIBZgMIAfgDQBlgEARACQAXABAHACQAWAHgCAVQgBAGgFAKQgMAUgLAdQgKAagDCCIgJACg");
	this.shape_153.setTransform(-213.9,207.9,1.173,1.173);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#B7BBC1").s().p("ABlCDIgDgBQgCgBAAgDIABgFIAEhPQgDggAOgnQALghAJgNQAHgMAAgEIgDgJQgFgGgIgBIghgCQgkgCg3ACQg+ADggAIQgvALgLgHQgDgCgBgEQgBgDACgDQADgDAOgCIAHgBIBLgJIAPgDIAegCIATgBQBfgEAIACIAFABQAPABALAHQAQAIABAQIgEATIgJAQQgKATgGAQQgKAZgEB+QAAADgDABIgKACgABrAlIgCBVIABgBIAEhFQAEg6AGgTQgMAjgBAbgABoh1QAYACAJAEQAGADAEAKIACADQABAEgBAFIABgBQACgSgMgIQgIgFgSgCIgGgBIhkACIgTABIgfADIgOACQAagDAigBIA3gBIAtABgAiKhmQgGAAgEABQAJAEApgJIATgEg");
	this.shape_154.setTransform(-213.6,207.5,1.173,1.173);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FDD5B7").s().p("AAMAcQgZgDgIgHQgGgFgQgFIgQgDIgCgWQAhAEAFgCIAPgEIAUgEIALgEQAGgBgBADQgCAFgJAEIgIACQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAQACACAaAJIAQAGQAMAFABACIAAAAQgCAFgggLIgBAAQADADgCAEIgDAHQgDAEgDACQgDACgDAAIgBAAg");
	this.shape_155.setTransform(-197.8,186.2,1.173,1.173);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#050505").s().p("AhACLQgbgngIgUQgKgcAEhSQAGheAbgdQAfgfAlAEQASADAOAJIAKgCQAKgBAKAEQAdAMAMA6QANA9gIApQgJAtgTA3QgZBJgUAAIAljeQAHg1gqgkQgEgDgHAAQgUACgSAQQgfAZgSA2QgRA0AXAvQANAaAUBgQgKgDgcgog");
	this.shape_156.setTransform(-200.1,150,1.173,1.173);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F3C9D9").s().p("AgGAGQgGgHgCgLIABAAQAGARAOAAQAEAAAEgCIgCAJIgGABQgHAAgGgHg");
	this.shape_157.setTransform(-194.1,176,1.173,1.173);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F3C9D9").s().p("AgSAMIgCgKQAGADAGAAQAJAAAHgFQAIgEADgJIACAAQgCAMgIAHQgJAIgKAAQgEAAgGgCg");
	this.shape_158.setTransform(-203.9,176,1.173,1.173);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F3C9D9").s().p("AgIgJIAFgCQADAKAJAGIAAAIQgOgJgDgNg");
	this.shape_159.setTransform(-192.5,189.3,1.173,1.173);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F3C9D9").s().p("AgOAKIAAgBQAUgFADgRIAGAEQgEAQgRAGg");
	this.shape_160.setTransform(-206.9,190.4,1.173,1.173);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F3C9D9").s().p("AAJhXIAWAGIAFA1IgRAEIAHAOIg9Big");
	this.shape_161.setTransform(-194.8,170.7,1.173,1.173);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F3C9D9").s().p("AgdgBIAIgPIgRgEIAFg1IAVgFIAzCdg");
	this.shape_162.setTransform(-203.5,169,1.173,1.173);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#ECAA86").s().p("AgEgLQAEgHAEABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQACAOgIALQgDAGgEACg");
	this.shape_163.setTransform(-190.8,147.2,1.173,1.173);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#ECAA86").s().p("AAAAKQgIgLACgOIADgCQADgBAEAHIADAdQgEgCgDgGg");
	this.shape_164.setTransform(-209.5,147.2,1.173,1.173);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F9BD9C").s().p("AgZBpQgegUgQgiQgFgCgEgHQgIgLACgOIADgDQAFAAADAHQgFgRgDgTQgFgpARgUQAGgJAKgKQAYgSAbgDIAIAAQAcADAYASQALAKAGAJQAQAUgFApQgDATgGARQAFgHAEAAQAAABABAAQAAAAABAAQAAAAAAABQABAAAAABQACAOgIALQgEAHgEACQgRAigdAUQgQAKgLADQgLgDgOgKg");
	this.shape_165.setTransform(-200.2,143.3,1.173,1.173);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FEE5EE").s().p("AADBnQg9gPgIgRQgCgFAag/QAdhEAFgPQAFgRAJgKIAIgHIAIALQAIAOAEAQQAHAjgHAIQgOAUgQAcQgNAaAAAEQAAADAmAOIAmAMIgEAmQgdgEgfgIg");
	this.shape_166.setTransform(-211.2,174.3,1.173,1.173);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FEE5EE").s().p("AADBnQg9gPgIgRQgCgFAag/QAdhEAFgPQAFgRAJgKIAIgHQA0A8gKAEQgQAHgaArQgXAoAAAIQAAADAmAOIAmAMIgEAmQgdgEgfgIg");
	this.shape_167.setTransform(-211.2,174.3,1.173,1.173);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FEE5EE").s().p("AgzAXQAHgfgShIQgGgTgEgbIgDgYIAigHIAEALQAGANAMALQANALAXgBQAUgBALgIQAIgGgCgQIgCgPIATAIIAJAjQAEAQAEAYQADAYgBAGQgDAPgNAKQgGAGgCAOIAAAmQAAAiAeBDIi/AUQAnhsAFgcg");
	this.shape_168.setTransform(-200.7,178.6,1.173,1.173);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-187.6,166.5,1.173,1.173,0,0,0,12.8,10.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgLAgIgBgCQgDgHgBgLIgCgRIgGgNQgFgJABgEQAAgFAFgEQACACADAIQACAFAEAWQACANAPACIALABQACAAgBgFQgDgKABgDQADAMADAFIAHAHQAFAOgKAIg");
	this.shape_169.setTransform(-190.7,247.2,1.173,1.173);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#1B1A1F").s().p("Ag0ACQAigEAsgBIAbABIgBABQhBAAgmAFIAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAg");
	this.shape_170.setTransform(-191.8,202.5,1.173,1.173);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AizBqQg6gIAQhfQAFgcAMgjIALgdIAGgDQAIgEAKgCQA5gMAUAAQAaAAAbAOIAKAkQADAMAJArIBFADQBUADAnAGQAsAIAGAUQAEANgOAeIAAABQgGANhIAJIhGAHQgnADgxAAIgiAAQhNAAgvgFg");
	this.shape_171.setTransform(-186.7,202.8,1.173,1.173);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgIAaIAFg2IAMAOIgJAqg");
	this.shape_172.setTransform(-193.5,247.3,1.173,1.173);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgTAdIgBgEQgCgHABgLIABgRIAAgBIgBgKIgCgLQgBgFACgDIAEgDQADADADAHQACAJgBATQAAAGACAEQAEAFAIADIAKADQABAAAAgBQABAAAAAAQAAgBAAgBQAAgBAAgBIAAgHIABgHQABANACAGIAFAHQADAPgMAGg");
	this.shape_173.setTransform(-184.5,247.5,1.173,1.173);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#ECAA86").s().p("AhvDGIgBgEQgBgHABgLIABgSIAAgBIgCgKIgCgLIAAgBIABgEQAMgQADgGQAGgJAMgdIALgaQBFhWAKgQQAJgNAOgbQAMgWAGgHQAMgOADgRQAEgUgMgMQgNgMgvgDIgtAAIALgEQALgEAEAAQBQADAjAPQASAIABAHQAHAMgFARQgFANgKALQgGAHgMAWQgOAagJAOQgIALg1BCQg2BCgQAZQgGAKAAAJIAEAdIABAOQAAAHACAFIAFAHQADAPgLAGg");
	this.shape_174.setTransform(-173.8,227.7,1.173,1.173);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgMAZIANg1IAMAMIgRAtg");
	this.shape_175.setTransform(-187.3,247.1,1.173,1.173);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#ECAA86").s().p("AhuDKIgBgDQgDgGgBgLIgCgTIgEgKQgDgHAAgEIgBgHQABgEACgCIAIgHIAHgHQAXggAwhjIAphdIg/AHIA9hrQA5ACAiAOQAhANgCAQQgEAqhKBaQgkAsgjAlIg5BCQgHAKAAAIQgBAIABAFIADALQAGAWACADIAHAGQAFAOgKAJg");
	this.shape_176.setTransform(-179.2,227.3,1.173,1.173);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#ECAA86").s().p("AAABEQglgDgQgjIgJghQAbgDAJgMQAFgIABgVIgBgQIAAAAIAAgFIAsACIgBATQABAVAGAJQAIAMAVAIIAEALQACAOgCAKQgHAfgsAAIgLgBg");
	this.shape_177.setTransform(-199.9,160.9,1.173,1.173);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#110D0B").s().p("AhjA7QgNhFAMg1QAMg6AdgMQAPgHAOAGIAkgJQAngDAaAbQAbAdAHBBQAFA2gJAaQgKAbgmA2QgMADgzACIgOgDQgFgBgRAHQgngFgOhQg");
	this.shape_178.setTransform(-199.8,146,1.173,1.173);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FDD5B7").s().p("AgZA/QADgmgBgFIgDgMQgEgIABgEQADgQAAgHIgCgLQgBgBAAgBQAAgBAAgBQABAAAAAAQAAAAABAAQAHAEABAIIAAAIQAAAGABgBQACAAAGgJIAHgLQARgYADgBQAFgCAFAJQAFAJgCAQQAAAGgMAWQgDAFgOAQQgGAIABAkg");
	this.shape_179.setTransform(-173.3,157.7,1.173,1.173);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#323436").s().p("AgJAPQACgHAHgIQAOgTgGgDIACAAQAAABABAAQAAAAAAABQABAAAAABQAAABAAABQAAADgEAGIgIALQgKAQAAAEQgBgCACgGg");
	this.shape_180.setTransform(-220.7,213,1.173,1.173);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#626666").s().p("AiPFFQgFgDgLgQQgHgLAPhOQAOhPgHgMQgLgSgvhzQgvh2gDgUIgChhQAAhIgIgLIAKALQAOAMAFAAQAEAAAEgGQACgEAHAGQANALAAAlQAAB1AUAoQAWAtAaBAQAgBRADAbQACATgHAkQgGAdgGAQQgFAKAAAWQAAAWAEAAIBigYQBrgWA9AKQA+AJAfAQQAQAIADAGIADAPQACAQgDARQAAgIgEgJQgLgWgsgFIgkgEQgYgBgaAFQjZAtgSADIgQABQgGAAgDgBg");
	this.shape_181.setTransform(-205.6,178.8,1.173,1.173);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#323436").s().p("AgnA4QgBgKgPgtQgLghACgWQABgTgDg7QgEg6ACgOQACgVACgEQABgDAHAAQAKAAAEAYQADATgBBDQgBA8AFAOQASAwAWBBQALAhA2B8QgVACgOAFIgKAEQg5iNgGgkg");
	this.shape_182.setTransform(-230.6,167.5,1.173,1.173);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#323436").s().p("AibCAQgfgBgOgHQgZgNgMgqQgNgsAWhMIAZhEIAogFQAHAAgDARQgBANgKAyQgKA1ACAVQACAcAUADQAQACCGgcQCFgcAJABIBIADQAbAFAGAXQAIAfgQAUQgSAVgjgKQgggJhoALQhUAJgjAJQgvAMgdAAIgEgBg");
	this.shape_183.setTransform(-203.3,210.1,1.173,1.173);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#454748").s().p("AgZAHIAJgEQAMgEAIgCIAWgDIgdALIgQACg");
	this.shape_184.setTransform(-229.9,238.3,1.173,1.173);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#717677").s().p("AgFAWIAEgTQABgNAAgCQgBgBgFAAIgFAAIAQgJIAHACIgCAAQgCABgCAEQgCADgBARIAAASg");
	this.shape_185.setTransform(-212.4,236.3,1.173,1.173);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#717677").s().p("AgQAEIgIgFIgBgFIAKAGQALAEAHgBQAOgCAGgGIAAgCIADAEIgBADQgEAFgOACIgHABQgJAAgHgEg");
	this.shape_186.setTransform(-209.3,233.4,1.173,1.173);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#3D4658").s().p("AAYAxIglhMQgihFAEACQAGACASgBIA4CNQAGAPABAfIgRABQABgkgEgKg");
	this.shape_187.setTransform(-205,245.1,1.173,1.173);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#D2D6D7").s().p("AAAAiIgLhEQAOAOAKA3g");
	this.shape_188.setTransform(-200.1,252.1,1.173,1.173);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B5B7B8").s().p("AATAmQgEgHgQgmQgNgggGgFIgZgHQgBABABgpIAKgEIAKACQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgBAAIANAPQANATADARQADAQARAkQASAmABAFQAEAQgBAYIgSABQADglgMgVg");
	this.shape_189.setTransform(-206.8,245.1,1.173,1.173);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#252931").s().p("Ah4A/QADgXAPgRQALgOBWggQBVgiAqgFIAAAmIghABQglADgVAGIgeAIIghAKIgtAQQgRAHgHANQgLAVADACg");
	this.shape_190.setTransform(-226.8,241.9,1.173,1.173);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#252931").s().p("AB9A5QADgHgLgSQgEgHgUgFIgwgNIgjgJIgdgIQgVgEgtgBIgpAAIgMgpQArAEBqAhQBrAhAMAMQAJAJAAAMQAAAGgCAEg");
	this.shape_191.setTransform(-191,240.8,1.173,1.173);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B5B7B8").s().p("AiFBDQAEgeARgPQATgRBWggQBYgkAqgEIAKAEQhPAjgiAIQgRAEgJAIQgLAJgUAHIgvAPQgRAHgFAIQgMATAAALg");
	this.shape_192.setTransform(-227,241.3,1.173,1.173);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#B5B7B8").s().p("ACBA+QgBgMgLgSQgFgIgTgHIgwgPIgjgKIgdgHQgWgFg5gRIg1gQIAQgIQAtAFBpAiQBtAhARAPQAKAJABAOQABAHgCAGg");
	this.shape_193.setTransform(-190.4,240.3,1.173,1.173);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#B3B5B8").s().p("AgBAuIAAhbIADAAIAABbg");
	this.shape_194.setTransform(-212.1,227.9,1.173,1.173);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#3D4658").s().p("AgJAwIAAhfIASAAIAABfg");
	this.shape_195.setTransform(-209.1,228.3,1.173,1.173);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#454748").s().p("AgHAWQgIgFgDgLQgEgKAEgJQADgJAIgCQAHgDAIAGQAIAGADAKQAEAKgEAJQgDAJgIADIgFAAQgFAAgFgEg");
	this.shape_196.setTransform(-174.1,252.6,1.173,1.173);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#454748").s().p("AgNAWQgHgIgBgMQgCgLAGgJQAGgKAJgBQAIAAAHAHQAIAIABANQABALgFAJQgGAJgJABIgCABQgHAAgHgIg");
	this.shape_197.setTransform(-201.4,261.3,1.173,1.173);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#040D1B").s().p("AgOAbQgKgDgEgPQgBgGABgPIAAgPIAbgBIAAAGIALABQANADADAJQAFAJgDAKQgCAJgIAFQgIAEgKABIgDAAQgHAAgEgCg");
	this.shape_198.setTransform(-172.5,250.9,1.173,1.173);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#040D1B").s().p("AgPAdQgLgDgEgQQgBgHABgQIAAgRIAkAAIAAAFIAKACQAKADADAKQAIAagRAJQgJAFgLABIgDAAQgHAAgFgCg");
	this.shape_199.setTransform(-199.5,260,1.173,1.173);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#454748").s().p("AgMASQgHgHAAgLQAAgKAHgHQAFgIAHAAQAIAAAGAIQAGAHAAAKQAAALgGAHQgGAIgIAAQgHAAgFgIg");
	this.shape_200.setTransform(-241.6,253.1,1.173,1.173);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#454748").s().p("AgDAOQgGgDgCgGQgCgGABgGQACgGAFgCQAFgCAEAEQAFADADAGQACAGgBAGQgCAGgFACIgEAAQgCAAgDgCg");
	this.shape_201.setTransform(-235.1,241.8,1.173,1.173);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#454748").s().p("AgFAWQgIgFgEgKQgEgJADgJQACgJAIgDQAHgDAHAFQAJAFADAKQAEAJgDAJQgCAJgIADIgGABQgDAAgFgDg");
	this.shape_202.setTransform(-196.5,241.7,1.173,1.173);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#040D1B").s().p("AgOAbQgKgDgDgPQgBgGAAgPIABgQIAhAAIAAAFIAJACQAJADADAJQAIAYgRAJQgHAEgLABIgDAAQgHAAgEgCg");
	this.shape_203.setTransform(-195.3,240.2,1.173,1.173);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#040D1B").s().p("AAAATQgFgBgFgDQgMgFAGgQQACgGAGgCIAGgBIAAgDIAVAAIAAAYQgCAKgHACIgHABIgDAAg");
	this.shape_204.setTransform(-234.4,241.3,1.173,1.173);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#040D1B").s().p("AgPAVQgOgJAHgUQACgIAJgCIAHgCIAAgEIAdAAIABAOQAAANgBAFQgDANgJADQgFABgGAAQgIAAgJgEg");
	this.shape_205.setTransform(-242.2,251.9,1.173,1.173);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#717677").s().p("AhNAcQgDgCgHABIgGAAQgFgBAJgHQAEgDBagWIBbgWIAAAFIhpAdIgRAHIgVAFQgPACgEACQgEACgDAEIgCABIgCgBg");
	this.shape_206.setTransform(-223.6,236,1.173,1.173);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#454748").s().p("AgHAWQgIgFgEgLQgDgKAEgJQAEgKAHgBQAIgDAHAFQAIAHADAKQAEAKgEAJQgDAKgJACIgEAAQgFAAgFgEg");
	this.shape_207.setTransform(-170.5,251.1,1.173,1.173);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#454748").s().p("AgMAWQgIgIgBgMQgBgLAFgJQAGgKAJgBQAIAAAIAHQAHAIABAMQACAMgGAJQgFAJgKABIgCABQgHAAgGgIg");
	this.shape_208.setTransform(-197.4,260.2,1.173,1.173);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#454748").s().p("AgMASQgHgHAAgLQAAgKAHgHQAFgIAHAAQAIAAAGAIQAGAHAAAKQAAALgGAHQgGAIgIAAQgHAAgFgIg");
	this.shape_209.setTransform(-244.7,252.4,1.173,1.173);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#454748").s().p("AgFAWQgJgFgDgKQgEgJADgJQACgJAIgDQAHgDAHAFQAIAFAEAKQAEAJgCAJQgDAJgIADIgFABQgEAAgFgDg");
	this.shape_210.setTransform(-192.2,240,1.173,1.173);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#323436").s().p("ABrAjQgBgjAOgmQAGgSAOgZQAJgPgDgFQgEgKgGgCQgJgEgcgCQghgCg+AEQhDAEgiAJQggAIgPgCQgLgBAAgFQgBgDAHgBIARgCIBZgLQARgCAOgBIB2gDQAbADADACQAWAGgCAVQgBAGgFAJQgMAWgLAdQgKAZgDCBIgJACg");
	this.shape_211.setTransform(-213.9,201.9,1.173,1.173);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B7BBC1").s().p("ABlCDIgDAAQgCgDAAgCIABgFIAEhPQgDggAOgnQAKgfAKgPQAHgMAAgEIgDgIQgFgHgIgBIghgCQglgCg2ACQg+ADggAIQgvAMgLgIQgEgDAAgDIABgFQADgEAOgCIBSgKIAPgCQARgDANAAIATgBQBbgEAMACIAFABQAPABALAHQAQAJABAPIgEATIgJARQgKATgGAPQgKAZgEB+QAAADgDABIgKACgABrAmIgCBUIABAAIAEhGQAEg5AGgUQgMAjgBAcgABoh1QAYACAJAEQAGADAEAKIACADQABAEgBAFIABgBQACgSgMgHQgJgGgRgCIgGgBQgEgBhgADIgTABQgOABgRACIgOACQAagDAigBIA3gBIAtABgAiUhlQAKAFAogKIARgEgAhRhuIACAAg");
	this.shape_212.setTransform(-213.6,201.6,1.173,1.173);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C4B98C").s().p("AgdAmQgKgHACgGQADgLASgOIAogjQAFgEAGAFQADADAAADQABAEgDACIgtA7IgBABg");
	this.shape_213.setTransform(-6,72.8,1.173,1.173);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#7F795E").s().p("AgMADIAUgLIAFAIQgBAGgMAEg");
	this.shape_214.setTransform(-16,64,1.173,1.173);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#7F795E").s().p("AgMgBIAEgJIAVAOIgKAHQgPgHAAgFg");
	this.shape_215.setTransform(-19.1,63.9,1.173,1.173);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#DAA675").s().p("AAmANQgBgHgNAAQgRACgHgBQgKAAgJgHIgHgGQgEAOgCACQgBABgCAKIgCAJIgEgGQgEgGAAgCQADgJgCgGQgDgLAFgFIAAAAQgBgBANgGQAOgGAOgBQANgBASAKQAQAKABAHQABAHgCALQgBAKgCAAQgCABgCADIgBABQACgGgBgLg");
	this.shape_216.setTransform(-17.7,52,1.173,1.173);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#C4B98C").s().p("AABA7QABgLgCgTQAAgTgBAFQAAAEgRAoIgeAAQAchmAHgFQALgGAUgCQAMgEALAHQAGADADAEIAABpg");
	this.shape_217.setTransform(-22.7,70.4,1.173,1.173);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#C4B98C").s().p("AAUA2QgOgggBgHQAAgEgBASIgCAeIgyAAIADhpIAJgHQAKgHAMAEIAMACQANACAGAEQAFADAKAcQAKAcAGAfQADALgUAGg");
	this.shape_218.setTransform(-12.6,70.4,1.173,1.173);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F9BD9C").s().p("AgGAzQgSgIgKgRIgBgJIAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAAAIgCgGIgCgOIABgDIACABIABABIABAAQgBgGAAgHQAAgPAIgEIAJgHQAKgGAKAAIABAAQARgBANAOQAJAEAAAPQAAAHgCAGIAAACIABgBQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABABgBAHIAAAAIgDAPQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIAAAAIgBAJIgBABQgJAPgRAJIAAAAIgHABIgHgBg");
	this.shape_219.setTransform(-17.7,56,1.173,1.173);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EDAB86").s().p("AgDAUQgcgBAHgHQAKgKABgRIANgDQANgCAAAFQABAIAMAaIgUABIgJAAg");
	this.shape_220.setTransform(-17.6,62.1,1.173,1.173);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F9BD9C").s().p("AggAcIA7hBQACgCADABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAEgDACIgCABQgFAFABABIAEAFQACAEAAAFQgCAOgVACIgKAKIgVAWg");
	this.shape_221.setTransform(-1.9,68.6,1.173,1.173);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#FFFFFF").p("ACNBQQAtg2AAhGQAAhQg4g5Qg5g4hPAAQhRAAg4A4Qg5A5AABQQAABQA5A4QA5A5BQAAQAMAAASgCICtBWg");
	this.shape_222.setTransform(-13.4,70.2,1.173,1.173);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C0C9CE").s().p("AAaCVQgSADgMAAQhQAAg5g5Qg5g5AAhPQAAhQA5g5QA4g5BRAAQBPAAA5A5QA4A5AABQQAABGgtA2IA4CZg");
	this.shape_223.setTransform(-13.7,69.9,1.173,1.173);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A9B3BC").s().p("AgcAHIAugbIALAUQgCANgcAIg");
	this.shape_224.setTransform(32,113.1,1.173,1.173);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#A9B3BC").s().p("AgdgCIALgVIAwAhIgXAOQgigOgCgMg");
	this.shape_225.setTransform(25.1,112.7,1.173,1.173);

	this.instance_2 = new lib.Group();
	this.instance_2.parent = this;
	this.instance_2.setTransform(43.2,144.3,1.173,1.173,0,0,0,9.3,2.8);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(44.9,142.9,1.173,1.173,0,0,0,10.3,1.9);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(44.9,141.4,1.173,1.173,0,0,0,10.3,3);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(44.1,129.2,1.173,1.173,0,0,0,10.1,12.1);
	this.instance_5.alpha = 0.391;

	this.instance_6 = new lib.Group_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(48,129.3,1.173,1.173,0,0,0,4.9,10);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(46.5,131.2,1.173,1.173,0,0,0,4.6,8.7);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(45.9,133.9,1.173,1.173,0,0,0,4.1,7.2);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(44.8,135.2,1.173,1.173,0,0,0,3.2,5.7);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(44.8,125.2,1.173,1.173,0,0,0,3.4,9.3);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_9();
	this.instance_11.parent = this;
	this.instance_11.setTransform(17.4,125.2,1.173,1.173,0,0,0,3.6,9.3);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(12.4,141.1,1.173,1.173,0,0,0,7.7,16.9);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_11();
	this.instance_13.parent = this;
	this.instance_13.setTransform(13.1,143.9,1.173,1.173,0,0,0,7.4,15.4);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(13.4,146,1.173,1.173,0,0,0,7.1,13.7);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_13();
	this.instance_15.parent = this;
	this.instance_15.setTransform(10.9,138.7,1.173,1.173,0,0,0,7.5,18.9);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_14();
	this.instance_16.parent = this;
	this.instance_16.setTransform(9.8,136.8,1.173,1.173,0,0,0,7.7,18.8);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_15();
	this.instance_17.parent = this;
	this.instance_17.setTransform(32,138.8,1.173,1.173,0,0,0,2.6,21.1);
	this.instance_17.alpha = 0.391;

	this.instance_18 = new lib.Group_16();
	this.instance_18.parent = this;
	this.instance_18.setTransform(35,138.5,1.173,1.173,0,0,0,3,21.3);
	this.instance_18.alpha = 0.391;

	this.instance_19 = new lib.Group_17();
	this.instance_19.parent = this;
	this.instance_19.setTransform(37,138.5,1.173,1.173,0,0,0,2.8,21.4);
	this.instance_19.alpha = 0.391;

	this.instance_20 = new lib.Group_18();
	this.instance_20.parent = this;
	this.instance_20.setTransform(42.9,137.8,1.173,1.173,0,0,0,2.6,20.7);
	this.instance_20.alpha = 0.391;

	this.instance_21 = new lib.Group_19();
	this.instance_21.parent = this;
	this.instance_21.setTransform(41.1,138.1,1.173,1.173,0,0,0,2.5,21.4);
	this.instance_21.alpha = 0.391;

	this.instance_22 = new lib.Group_21();
	this.instance_22.parent = this;
	this.instance_22.setTransform(30,138.8,1.173,1.173,0,0,0,2.5,21.1);
	this.instance_22.alpha = 0.391;

	this.instance_23 = new lib.Group_22();
	this.instance_23.parent = this;
	this.instance_23.setTransform(27.9,138.5,1.173,1.173,0,0,0,2.7,21.3);
	this.instance_23.alpha = 0.391;

	this.instance_24 = new lib.Group_23();
	this.instance_24.parent = this;
	this.instance_24.setTransform(25.5,138.5,1.173,1.173,0,0,0,2.6,21.4);
	this.instance_24.alpha = 0.391;

	this.instance_25 = new lib.Group_24();
	this.instance_25.parent = this;
	this.instance_25.setTransform(19.6,137.8,1.173,1.173,0,0,0,2.6,20.7);
	this.instance_25.alpha = 0.391;

	this.instance_26 = new lib.Group_25();
	this.instance_26.parent = this;
	this.instance_26.setTransform(21.2,138.1,1.173,1.173,0,0,0,2.5,21.4);
	this.instance_26.alpha = 0.391;

	this.instance_27 = new lib.Group_26();
	this.instance_27.parent = this;
	this.instance_27.setTransform(23.7,137.8,1.173,1.173,0,0,0,2.6,21.4);
	this.instance_27.alpha = 0.391;

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#3F3231").s().p("AhbBEIgGgCQgFABgHgxQgEgZAVgRQgDghAfgOIgFAHQgFAJgCAGIABABIABAAQAKgMATgJQAfgOArgBQgQACgMAHQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIABAAQASgCATACQAcACARAMQgFgBgHABIgBAAIABABQANAFAKAKQAQAPAAAVIgKgLIgBAAQAGARgEAQQgBgFgFgEQgBAZgHAhQgIAAgFAIIgDAIQADgvgMgRQgTgdg0ABIgxAHQgKAVgMAPIgEA3QgBgOgHgEg");
	this.shape_226.setTransform(28.9,87.6,1.173,1.173);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#3F3231").s().p("AAYAPIAAAAQgEAAgEgDQgFgEAAgFIAAgCQgEgDgFAAIAAABIgBAAIAAgBQgEAAgEADIAAACQAAALgMABIgBAAIgmAAIgBAAQgLgFAAgIIAAgCIgLABIgCgHIAOgCQACgFAJgBIAlAAQAJgBAFAIQAEgCAFAAQAGAAAEACQAEgIAKABIAkAAQAJABADAFIAKABIgBAFIgIACIAAACQABAHgMAGIgBAAgAARgHIAAALQAAAFAGADIApAAQAFgCAAgGIAAgLQgCgDgDAAIgqAAQgFABAAACgAhAgHIAAALQAAAFAFADIAqAAQAFgCAAgGIAAgLQgCgDgEAAIgqAAQgEABAAACg");
	this.shape_227.setTransform(28,95.4,1.173,1.173);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E1BB93").s().p("AgaAsQgLgHADgWQAEgVAOgQIAQgZIAeASQAIAfgDACIgDAEQgBAAgCgFQgCgDgEAEIgIATQgNAZgOAAQgHAAgHgEg");
	this.shape_228.setTransform(1.7,160.9,1.173,1.173);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E1BB93").s().p("AgRAdQgIgCgCgIQgBgGAAgNQAAgKAIgEQAFgCAEAAQgGAAAEgJQACgGAGADIAIAJQAGAFAIAAQAKAFACAOQABAHgCAGQgGACgDAEQgEADgMACIgKABIgKgBg");
	this.shape_229.setTransform(29.1,139.1,1.173,1.173);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#3C3D3E").s().p("AgZAAQAAgCAZAAQAaAAAAACQAAADgaAAQgZAAAAgDg");
	this.shape_230.setTransform(21.6,134.2,1.173,1.173);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#9B382C").s().p("AgTAsQgFAAgEgEQgEgEAAgFIAAg9QAAgFAEgEQAFgEAEAAIAmAAQAGAAAEAEQAEAEAAAFIAAA9QAAAFgEAEQgEAEgGAAg");
	this.shape_231.setTransform(21.6,138.7,1.173,1.173);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#BBCACB").s().p("AAXAbIhjgJQgFAAgEgEQgEgFgBgFQAAgGAEgFQAEgEAHgBICSgPQAGAAAFADQAFADABAGQAHAcgMAHQgKAGgYABIgJABIgRgBg");
	this.shape_232.setTransform(42.1,139.5,1.173,1.173);

	this.instance_28 = new lib.Group_20();
	this.instance_28.parent = this;
	this.instance_28.setTransform(39.4,135.1,2.622,1.173,0,0,-63.4,2.5,21.4);
	this.instance_28.alpha = 0.391;

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#BBCACB").s().p("AAxDAIgrgJIAJhwQACgSgEgzQgDgygBANQgBAKgtBsIguBrIgpgYQAVhTAYhTQAwioAOgKQAWgOAxgDQAagJAYAOQAMAIAHAJIACC5QgCC7gOABIgFAAQgQAAgngIg");
	this.shape_233.setTransform(15.5,135.4,1.173,1.173);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#CCD0D0").s().p("AhhDIQgOgBAEi7IAGi5IATgRQAYgOAaAJIAbADQAdAFAOAJQALAHAWA9QAXBAAOBGQADAPgVAMIgWAKIgYgKQgfhGgBgQQgBgNgDAyQgEAzABASIAJBwQhNARgcAAIgGAAg");
	this.shape_234.setTransform(39.7,135.4,1.173,1.173);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E1BB93").s().p("AgOBxQgKgEgNgJQgagRgOgZIgBgDIgBgQIgBAAQgDgBgDgDIgEgQIgFgfQAAgHACAAQACgBAEADIACAEIABgBQgDgNAAgQQAAgiASgJIABAAIATgOQAXgPAWAAIAFAAQAXgBAYAPQAMAHAIAIQASAJAAAiIgCAUIgBAJIgBADIACgCQAGgGADABQAEACgDAPIAAABIgHAiIAAABQgCADgFABIAAAAIgCATIgBADQgZAjgiARIgBABIgMACIgDAAQgJAAgHgDg");
	this.shape_235.setTransform(28.2,95.2,1.173,1.173);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#D6AE89").s().p("AgHArQg+gCAPgQQAOgNAHgZIAEgWIAdgHQAegEAAALQABASAbA7IgtACIgUgBg");
	this.shape_236.setTransform(28.5,108.7,1.173,1.173);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000007").s().p("AA+FUIgfgFIgDivQgFiygCgRIgPidQgbDBAAAHIgVFJIheAAIANmqIAYj7QAZARBhgFQAwgCAsgGIAMBSIAGA+QAEA0AAARIgLG/IgWANQgHAEgPAAIgUgBg");
	this.shape_237.setTransform(27.9,196.1,1.173,1.173);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#554437").s().p("AAUAgIg0gQQgfABgEgDQgDgCAAgNIAAgOIAGgNIBGgDIAHARIAqAVQARAHgBALQgBAHgCAAg");
	this.shape_238.setTransform(41.1,238.6,1.173,1.173);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#554437").s().p("AgpAVQgEgJAMgRIAMgRIAEgSIA8AAIAAArQAAALgBADQgEAIgQAIQgNAHACAAIgkABQgLgFgFgPg");
	this.shape_239.setTransform(16.1,239.9,1.173,1.173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.instance_28},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.instance_1},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.instance},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247,41.3,485.9,223.7);


(lib.mc12T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_184 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(184).call(this.frame_184).wait(15));

	// CIRCULO2
	this.instance = new lib.retosactualesfuturos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(472.8,188,0.3,0.3,0,0,0,91.5,91.5);
	this.instance.alpha = 0.23;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).to({regX:91.4,regY:91.4,scaleX:1,scaleY:1,x:465.8,y:215,alpha:1},16,cjs.Ease.get(1)).to({_off:true},59).wait(14));

	// CIRCULO3
	this.instance_1 = new lib.perfolescpacidades("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(825.1,295.5,0.3,0.3,0,0,0,91.4,91.4);
	this.instance_1.alpha = 0.23;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({regX:91.5,regY:91.5,scaleX:1.06,scaleY:1.06,x:736.2,y:174.1,alpha:1},16,cjs.Ease.get(1)).to({regX:91.4,regY:91.4,scaleX:1,scaleY:1,x:731.1,y:188},7,cjs.Ease.get(1)).wait(8).to({startPosition:0},0).to({_off:true},44).wait(14));

	// CIRCULO1
	this.instance_2 = new lib.prioridades("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(275.4,325,0.3,0.3,0,0,0,91.4,91.4);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).to({scaleX:1,scaleY:1,x:194.3,y:188,alpha:1},17,cjs.Ease.get(1)).to({_off:true},58).wait(14));

	// caja larga
	this.instance_3 = new lib.cajagdemc1t2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(574.5,-75.3,0.454,1,0,0,0,363.4,93);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({_off:false},0).to({scaleX:0.99,x:367.2,y:-75.2,alpha:0.98},13,cjs.Ease.get(1)).to({scaleX:1,x:363.5,y:-75.3,alpha:1},2).to({_off:true},39).wait(14));

	// caja gris
	this.instance_4 = new lib.cajagrismc1t2m2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).to({y:79.6,alpha:1},15,cjs.Ease.get(1)).to({_off:true},21).wait(14));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,506,50,34);


(lib.mc3T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// pregunta
	this.instance = new lib.pregunta1tema2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.3,80.1,1,1,0,0,0,408.3,44.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:441.3,alpha:1},18,cjs.Ease.get(1)).wait(14));

	// instrucciones
	this.instance_1 = new lib.instruccionesmc1t2TMR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(328.2,66.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(8));

	// reto
	this.instance_2 = new lib.caja_respuestasM2T2mc3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(855.9,380.8,1,1,0,0,0,257.5,142);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:594,y:379.9,alpha:1},24,cjs.Ease.get(1)).wait(8));

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCaQg/AAguguQgtgsAAhAQAAg+AtguQAugtA/AAIA9AAQBAAAAtAtQAtAuAAA+QAABAgtAsQgtAuhAAAg");
	this.shape.setTransform(-48.2,462.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-24.6,1318.5,502.2);


(lib.mc1T2M2TMRmc12t6s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(22));

	// Layer 2
	this.instance = new lib.estrategiadenegociomc12t6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(658.2,-47,0.922,0.922,0,0,0,165,136.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},46).wait(21));

	// caja larga
	this.instance_1 = new lib.cajagdemc12t6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.5,-75.3,0.454,1,0,0,0,363.4,93);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,x:363.5,alpha:1},15,cjs.Ease.get(1)).to({_off:true},31).wait(21));

	// caja gris
	this.instance_2 = new lib.cajagrismc1t2mc12t6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({y:89.6,alpha:1},15,cjs.Ease.get(1)).to({_off:true},13).wait(21));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgxAAhHQAAhGAwgxQAwgyBEAAQBFAAAwAyQAwAxAABGQAABHgwAxQgwAyhFAAQhEAAgwgyg");
	this.shape.setTransform(-191.3,293.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},2).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,-189.4,1045.5,499.8);


// stage content:
(lib.AC_TMR_M03_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		parent.iniciar_tema(this);
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// PAGINAS
	this.instance = new lib.mc12T2M2TMR();
	this.instance.parent = this;
	this.instance.setTransform(17.4,40.2);

	this.instance_1 = new lib.mc1T2M2TMRmc12t6s();
	this.instance_1.parent = this;
	this.instance_1.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_2 = new lib.mc3T2M2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(385,288.1,1,1,0,0,0,365.4,228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// TITULO
	this.instance_3 = new lib.tema_entrada_titulo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303.6,249.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,218,255,0.6)").ss(1,1,1).p("AhoioIDRAAIAAFRIjRAAg");
	this.shape.setTransform(-123.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhoCpIAAlRIDRAAIAAFRg");
	this.shape_1.setTransform(-123.6,16.9);

	this.instance_4 = new lib.tituloestatico();
	this.instance_4.parent = this;
	this.instance_4.setTransform(303.6,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245,249,686.5,581.2);
// library properties:
lib.properties = {
	width: 950,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;