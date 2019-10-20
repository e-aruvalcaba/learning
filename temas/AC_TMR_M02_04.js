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


(lib.titulosss23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Definición de perfiles de éxito", "bold 30px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 200;
	this.text.parent = this;
	this.text.setTransform(92,20);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,18,204.1,124.1);


(lib.tituloestatico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.parent.fixed.gotoAndPlay(105);
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

	this.text = new cjs.Text("Definición de perfiles de éxito", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,319.3,48.7), null);


(lib.tarjeta02grmc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7DA98").s().p("AgEAkQgBgCgFgCIgGgBIgDAAIgFAFIgJgIIAFgFQABgDgCgEIgBgDIgFgGIgIABIAAgMIAIAAQACgBACgFIAAgBQACgDgBgDIAAgCIgFgFIAIgKIAFAGIAIgBIABgBQAGgDAAgCIAAgIIALAAIABAHIABACQACACADABIAAAAIABABQAFABADgBIAFgGIAKAJIgGAGIAAABIABAHIAAABQADAEADABIAIAAIAAAMIgHAAQgDABgDAEIgBAEQgBAEABACIAGAFIgIAJIgGgEQgCgCgGADIgFADIgBACIAAAHIgMABgAgOgMQgFAGAAAGQABAJAFAGQAGAFAIAAQAIgBAFgFQAGgHAAgHQAAgIgHgFQgGgGgHAAQgIAAgGAHg");
	this.shape.setTransform(117.5,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3989C").s().p("AAOBHQgEgFgKgBQgHAAgGACIgEADIgGANIgWgKIAGgOQAAgFgFgHIgEgEQgEgEgFgCIgEgBIgNAGIgJgYIANgFQAFgDABgKIAAgCQAAgHgCgFIgDgDIgNgGIALgXIANAGIAEAAQAFgCAFgEIABgCQAIgHgBgGIgFgNIAYgJIAFANIADADQAEACAFABIADAAQALAAAEgFIAGgNIAXAKIgGAOIAAAEQACAFAEAFIACABQAHAIAGgBIANgFIAJAYIgNAFIgDADQgCAEgBAFIAAAGQABAJADADIANAGIgKAXIgNgGQgGgBgHAHIAAAAQgGAFgCAFIgBAFIAFAOIgXAIgAgNgjQgPAFgGAPQgHAOAGAOQAFAQAPAGQAOAHAOgGQAPgGAHgOQAHgOgGgPQgGgPgOgGQgIgEgIAAQgGAAgHADg");
	this.shape_1.setTransform(107.9,60.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6DB5C5").s().p("AkmHGQBHggAMACQAPABATgYQAngvAWgWQAWgwAdg4IAaguIASgGIAFgaIAEgCQAJggADgSQAGghgFgKQgGgMglAIQgpAKgLAAQgPABgJgHQgGgDgHgKQgDgFADgPIACgSIAAgEIABAAQgFgIgCgJIgCgJIAAAAIgCgEQgDgJACgEIAAgCQACgHAAgRQAAgBgJgBQgLgBgHgEQgIgEAAgKIABgIQAQgsASgaIAAgDQgGAAgCgCQgCgBAAgIIABgNQABgDAGgDIAHgBIgEACQgDACAAACQgBAFAEgBIADgEIABgGIABhiQACgJAEgKQgxhLAAgPQAAgKAPADQAfAHAdgCIgKgkIAUAMQAYAOAYAFIAPgCIgKgjIARALQAUANAVAFQAPgCAKAAIABAAIgEgSIAHAGIAUAMIAIAAQA6gBAYAIQAzAUAiAwQAuBBgIBhQgHBbg7BDQgSAVgWAQIgRAMIgBgDQgJAagGAbIAKgFIAOA4IAMAIQAOAKANAPIgBgJIAEAMQAoAsAWA9QAdBVgJBtg");
	this.shape_2.setTransform(105.5,75.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F9D2").s().p("AiBIIIowAAIAAyyIaNAAIAAQ8QgJBrhtALIslAAIhhCjgAtlIIQhtgLgJhrIAAw8IEpAAIAASyg");
	this.shape_3.setTransform(112.8,83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_4.setTransform(163.5,166.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_5.setTransform(154,166.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_6.setTransform(146.6,165);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_7.setTransform(139,166.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_8.setTransform(129,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_9.setTransform(122.1,164.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_10.setTransform(112.6,166.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_11.setTransform(103.1,164.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_12.setTransform(96.8,166.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_13.setTransform(87,166.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_14.setTransform(77,166.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_15.setTransform(67,166.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeA7QgNgKgGgPQgHgQAAgSQAAgUAHgPQAJgPAOgHQANgIARAAQATAAAOAKQANAJAFASIgRAEQgFgOgIgHQgJgGgNAAQgOAAgKAHQgJAHgEAMQgEANgBAMQABAQAFAMQAEAMAKAGQALAGAKAAQAPAAAKgIQAKgJADgQIARAFQgGAUgOALQgNALgVAAQgTAAgOgHg");
	this.shape_16.setTransform(55.7,164.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3EFB9").s().p("AqSOEIAA8HIZXAAQCWAAAACWIAAXbQAACWiWAAgAvEOEQiWAAAAiWIAA3bQAAiWCWAAIEyAAIAAcHg");
	this.shape_17.setTransform(111.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta02grmc4, new cjs.Rectangle(-1.9,0,224.9,180), null);


(lib.tarjeta_para_textomc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2E4F0").s().p("AyWTsQiWAAAAiWMAAAgirQAAiWCWAAMAktAAAQCWAAAACWMAAAAirQAACWiWAAg");
	this.shape.setTransform(132.5,81);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta_para_textomc5, new cjs.Rectangle(0,-45,265,252), null);


(lib.tarjeta_para_textomc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9E9C1").s().p("At8OEQiWAAAAiWIAA3bQAAiWCWAAIb5AAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape.setTransform(104.3,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta_para_textomc4, new cjs.Rectangle(0,0,208.6,180), null);


(lib.tarjeta_para_texto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3EDEA").s().p("AyWOEQiWAAAAiWIAA3bQAAiWCWAAMAktAAAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta_para_texto, new cjs.Rectangle(0,0,265,180), null);


(lib.tapageneralblanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.tapakakigeneral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.perfilexitobanderita2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4D484").s().p("AhpFJIAAg5Ig5ARQgIACgHAAQgPAAgMgLQgKgMgBgOQAAgMAIgLIBhiFIADgHQACgEAMgHQALgHANABICDAAQANgBALAHQAJAFAEAHIAFAGIBgCFQAIALAAAMQAAAOgLAMQgLALgPAAQgHAAgJgCIg5gRIAAA5gAgDEhIBLgZIgBAAQgQgFgIgKQgIgJAAgMQABgKAFgKQAGgKAMgEQAMgDAPADIAIADIAAhOIhlAhIhmghIAABOIAIgDQAPgEAMAEQAMAEAGAKQAFAKABAKQABALgJAKQgIAKgPAFIgBAAgAgwAmQgTgSAAgbQAAgbATgUQATgTAcAAQAaAAATATQAUAUgBAbQABAbgUASQgTAUgaAAQgbAAgUgUgACKhNIBIhTIBUBIIhIBTgAklgfIBUhgIApB5gAi/i/IAMhDIBCgXIA0AtIgMBFIhCAWgABLjKIgxAbIAJg4IgngmIA3gJIAYgzIAZAzIA4AJIgoAmIAJA4g");
	this.shape.setTransform(485.2,40.7);

	this.text = new cjs.Text("2", "bold 40px 'Arial'", "#F4D484");
	this.text.lineHeight = 47;
	this.text.lineWidth = 34;
	this.text.parent = this;
	this.text.setTransform(161.3,19.3);

	this.text_1 = new cjs.Text("¿Qué debe saber el ocupante para ser exitoso?", "18px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 211;
	this.text_1.parent = this;
	this.text_1.setTransform(328.9,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AjEDFQhOhPgEh2QAEh2BOhOQBOhOB2gDQB2ADBPBOQBOBOAEB2QgEB2hOBPQhOBOh3AEQh2gEhOhOg");
	this.shape_1.setTransform(171.5,40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AtZBcIAAi3IazAAIAAC3g");
	this.shape_2.setTransform(85.8,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(244,212,132,0.498)").s().p("A5uGSQiqgEhyhxQhyhygEirQAEiqByhyQByhxCqgEMAzdAAAQCqAEByBxQByByAECqQgECrhyByQhyBxiqAEg");
	this.shape_3.setTransform(336.2,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,541.1,102.8);


(lib.perfilexitobanderita1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAVIABgqIAYAIIACADIAAAhg");
	this.shape.setTransform(513.5,35,1.083,1.083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAPIAAgiIAigCIAAArg");
	this.shape_1.setTransform(510.1,30,1.083,1.083);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAgHIgkAHIABghIAjgCIAAAcIAcgIIAIgBIAAArIgkAJg");
	this.shape_2.setTransform(504.3,33.5,1.083,1.083);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZBnIAAgEIAAi+QAAgLAIAAQAKgBAAALIAAAmQAAAGAFACIAVAGIAAAsIgagHIAAAgIABADIAaAJIAAgkIAkgIIAAAqIAjgPIAAgkIAeAHIAFABIAAAZIAVAHQAJAEgDAIIgEgCQgjgRgmASQgYANgUgCIgRgDIgQgEIgGgCIAAA+g");
	this.shape_3.setTransform(505.2,37.9,1.083,1.083);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9EDDD7").s().p("Ag3CGQgHgKgLgGQg5gZgeg4Qgdg3ALg/QAKg8AvgqQAvgqA+gEQBBgEA2AnQA2AnAQBBQAPBBgdA6QgeA7g9AbQgKAFgGAJIg4BhIg3hgg");
	this.shape_4.setTransform(505.3,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9EDDD7").s().p("AAUC5IgwiFQgDgIgGAAIgFAHIgkA5QgGAKgKADQgJACgIgGQgfgVgegZQgMgJAJgOQAIgNAOgBQAJAAALAIIAbAWQAPgSARgjQASgiADgRIhMAhQgJADgIgFQgJgFgDgJQgHgSATgJQA+gfBDgXQAegKAWAUIArAoQAEAFAGgDIA/gVQALgDAIAGQAIAEACAMQACAKgFAHQgEAIgKADIhLAZQgTAGgOgOIgOgNIgCAGQgMAhgKANQgCADABAEIAyCIQAEANgFAIQgGAJgNABIgCAAQgSAAgGgTgAACh9QgNgNAAgTQAAgTAMgOQAOgNATAAQASgBAOAOQAOANAAATQABATgOANQgNAOgTAAIgCAAQgSABgNgOg");
	this.shape_5.setTransform(460.9,44);

	this.text = new cjs.Text("1", "bold 40px 'Arial'", "#9EDDD7");
	this.text.lineHeight = 47;
	this.text.lineWidth = 34;
	this.text.parent = this;
	this.text.setTransform(160.3,20.4);

	this.text_1 = new cjs.Text("¿Qué debe hacer el ocupante para ser exitoso?", "18px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 202;
	this.text_1.parent = this;
	this.text_1.setTransform(328.9,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AjEDFQhOhPgEh2QAEh2BOhOQBOhOB2gDQB2ADBPBOQBOBOAEB2QgEB2hOBPQhOBOh3AEQh2gEhOhOg");
	this.shape_6.setTransform(171.5,40.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AtZBcIAAi3IazAAIAAC3g");
	this.shape_7.setTransform(85.8,40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(158,221,215,0.4)").s().p("A5uGSQiqgEhyhxQhyhygEirQAEiqByhyQByhxCqgEMAzdAAAQCqAEByBxQByByAECqQgECrhyByQhyBxiqAEg");
	this.shape_8.setTransform(336.2,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.text_1},{t:this.text},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,541.1,99.6);


(lib.perfilexitobanderita3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6A8E2").s().p("AgcE6QgOgFAAgPIAAjWQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgagHgVgPQgegVgRgfQgFgFACgGQADgIAGgDQAGgDAHABQAGACAEAGQAQAbAbARQAiAVAlgDQBDgEAjg5QAFgKAMAAQAJABAFAIQAFAJgFAHQgIAOgMANQgXAZgcANIgYAJQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAIAADXQAAAJgEAFQgEAGgIABQgIABgGgEQgGgEgCgFIABibIgBAAIAAgBIgHAAIAACfIgBAAQgGAJgJAAIgHgBgACeBoIAfgbIADAMQAkgKAfgqQAQgWAIgUIAOAGQgIAWgSAXQghAvgsALIADANgAjLBoQgrgMgiguQgKgOgIgRIgHgOIAKgEIAEgCIAYAqQAeApAmALIACgMIAfAbIgnANgAgfAgQgMgNAAgRQAAgSAMgMQANgNASAAQASAAAMANQANANAAARQgBASgMANQgNAMgRAAQgTAAgMgNgAkgg1QgIAAADgHQADgJgBgFQgBgGgFgDQgFgCgHABQgFABgDAFQgDAFACAHIACAGQABAGgGAAQgOABgMgDIgJgCIABgIIACgIQADgLgBgIQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgCgCgEABIgJABQgJACgEgIQgEgKAEgGQAHgIAJADIAHACQABAAAAABQABAAABAAQAAAAABAAQAAgBABAAIACgEQABgEgDgNIgDgRIADAAIAKgEIATgBQAIAAgDAIIgCAJQAAAGAEAFQAFAEAGgBQAGgBADgEQAFgEgBgHIgDgIQgBgGAGgBQAIgBAYAFIADABIgEAWQgBAHABAHQAAAGAHgCIANgCQAGACACAEQAEAFgCAHQAAAFgFAEQgFACgGgBIgIgDQgFgBgBAFQgCAEADAOIADARIgQAEIgKABIgGAAgAEMg1QgEgBAAgGQAAgGgEgCQgEgCgEACQgEACgCAAQgDAAgDgFIgIgQIgCgFIAEgFQAGgCAAgBIAAgIIgFgDQgEgCgBgCQAAgCACgFIAKgQQADgGAHADQABAAAAABQABABAAAAQABAAAAAAQABAAAAAAIAHgDIABgDIAAgDQAAgHAGAAIAWAAQAGAAAAAHQAAAHAHACIADAAIADgDQAGgCACAFIALATQADAEgEAEIgCABIgEADQgBAEABAEQAAABAEACQAGAEgDAHIgKAQQgDAGgGgDQgHgEgFAFQgCACABAEQAAAFgEACgAEIh5QgHAIAAAJQAAAKAHAHQAHAHAJAAQAKAAAIgHQAHgHAAgKQAAgJgHgIQgIgHgKAAQgJAAgHAHgAgHhFIAAgyIgOAAIAVgjIATAjIgMAAIAAAygAFlhlQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgDgFgCIgEACQgBAAgDgEIgCgFQgEgEAFgCIABgCQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgFgCAEgEIADgHQACgCADAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIAIAAIADACQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAADAEABIAEgBQAAAAABAAQAAABAAAAQABABAAAAQAAABABABIADAEQADAFgFACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAEACgDAEIgDAEIAAACIgBABIAAABQgCABgEgCQgEACAAADIgBABIgDACIgIAAgAFiiEQgEADAAAFQABAEADADQADAEAEAAQAEAAAEgEQAEgDAAgEQgBgFgDgDQgEgEgEAAQgFAAgCAEgAFHiSQgDAAAAgFQAAgEgDgBQgDgBgDACQgEACgDgEIgGgLQgDgEAFgCQADgCAAgEQAAgDgEgBQgDgDACgDIAGgLQABgBAAAAQAAgBABgBQAAAAAAAAQABAAAAAAIAFABIABABQAHgDAAgFIABgEIASAAIACAEQAAAGAGACIAGgCQACAAADAGIAFAIQADADgFADQgEABAAADQAAAEAEACQAEABgCAFIgHALQgBAEgFgCQgDgCgDABQgCACAAADQAAAFgFAAgAFDi+QgFAEAAAGQAAAHAGAFQADAEAHAAQAHAAAFgEQAEgFAAgHQAAgGgFgEQgEgFgHAAQgHAAgEAFgAAui4IAFgFIAUASIgEAFgAhGixIAWgQIADAEIgVARgAAei6IgcgVIgfAWIAAgDIAIgbIADgHQAAgBgHgEIgWgQIgBgCIACgCIAhAAQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIAJggIACgBIACABIAKAgQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAhAAIADACIgCACIgbATQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAIALAgIAAADIgEgBgABAjhIAAgGIAZAAIAAAGgAhUjhIAAgGIAZAAIAAAGgAA1kMIAUgPIADAEIgUAPgAhBkdIAEgFIAUARIgEAGgAAAknIAAgTIAFAAIAAATg");
	this.shape.setTransform(485.2,41.8);

	this.text = new cjs.Text("3", "bold 40px 'Arial'", "#D6A8E2");
	this.text.lineHeight = 47;
	this.text.lineWidth = 34;
	this.text.parent = this;
	this.text.setTransform(160.3,20.4);

	this.text_1 = new cjs.Text("¿De dónde se nutre la posición?", "18px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 184;
	this.text_1.parent = this;
	this.text_1.setTransform(328.9,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AjEDFQhOhPgEh2QAEh2BOhOQBOhOB2gDQB2ADBPBOQBOBOAEB2QgEB2hOBPQhOBOh3AEQh2gEhOhOg");
	this.shape_1.setTransform(171.5,40.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AtZBcIAAi3IazAAIAAC3g");
	this.shape_2.setTransform(85.8,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(214,168,226,0.298)").s().p("A5uGSQiqgEhyhxQhyhygEirQAEiqByhyQByhxCqgEMAzdAAAQCqAEByBxQByByAECqQgECrhyByQhyBxiqAEg");
	this.shape_3.setTransform(336.2,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,541.1,85.8);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(70.1,26.2,0.593,0.593);

	this.text_1 = new cjs.Text("2.4", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(68.9,56.7,1.094,1.094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.8,69.7,1.504,1.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.no3perfilsale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Conformada por los puestos semilleros, la experiencia profesional y los logros más relevantes.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 21;
	this.text.lineWidth = 484;
	this.text.parent = this;
	this.text.setTransform(568.3,42.9);

	this.text_1 = new cjs.Text("Trayectoria: ", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 499;
	this.text_1.parent = this;
	this.text_1.setTransform(568.3,13.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,168,226,0.298)").s().p("EhF7AJFQigAAAAjbIAAqcMCQ4AAAIAAKcQgBDbihAAgEhIbgEzIAAg2QAAjbCgAAMCL2AAAQChAAABDbIAAA2g");
	this.shape.setTransform(586.1,58.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.5,0.6,946.9,130.7);


(lib.no3perfil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A04D98").s().p("AgnG4QgUgHAAgWIAAksQAAAAAAAAQAAgBgBAAQAAgBgBAAQgBgBAAAAQglgLgcgUQgqgdgYgtQgHgGADgJQADgLAJgEQAIgFAKACQAJACAFAKQAXAmAmAXQAvAeA0gFQBegGAxhPQAIgOAQAAQANACAGALQAHALgHAKQgLAVgRARQgfAlgoARIgiANQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAIAAEsQAAANgGAIQgGAJgLAAQgLABgJgFQgIgFgDgIIABjYIgBAAIAAgCIgKAAIAADeIgBABQgJANgMAAQgFAAgFgCgADeCSIArgmIAEARQAzgOArg8QAWgdAMgdIAUAJQgMAegZAhQguBBg9AQIADASgAkcCSQg9gRgvhAQgOgVgLgXIgLgTIAPgHIAFgCIAiA6QAqA6A1AQIADgRIArAmIg3ASgAgsAtQgRgSAAgYQAAgaASgRQARgSAagBQAZABASASQARASAAAZQAAAagRARQgTASgYAAQgaAAgSgTgAmThLQgMAAAFgKQAEgNgCgGQgCgJgGgDQgIgEgKABQgHADgEAGQgDAHACAJIADAJQACAJgJAAQgTABgSgDIgMgEIACgLIACgLQAEgQgBgLQAAgEgDgCQgCgCgHABIgMACQgMACgGgLQgGgOAGgIQAKgLAMAEIAKADQAFACACgCIADgGQABgGgDgSIgFgXIAEgBIAOgFIAagCQAMAAgFALQgCAJAAAFQAAAIAFAGQAHAFAJAAQAIgBAFgGQAGgGgBgKIgEgLQgBgJAIgBQALgBAiAGIAEADIgFAeQgCAKACAKQAAAHAJgBIASgDQAJACADAFQAFAIgCAJQgBAIgHAFQgHAEgIgCIgLgEQgHgCgCAHQgCAGAEATIAEAYIgWAFQgIADgHAAIgHgBgAF4hLQgGgCAAgIQABgJgGgCQgGgCgGACQgFADgDgBQgEAAgEgFIgMgXQgCgFAAgDQABgDAFgDQAHgDAAgCIAAgKIgGgGQgGgCgBgCQgBgEADgGIAOgXQAFgJAJAFQAFAFABgCIAKgFIABgEIAAgFQABgIAIgBIAfAAQAIAAAAALQAAAJAJADIAFAAIAFgEQAHgDADAHIAQAbQAEAFgGAFIgCABIgGAGQgCAEACAGQAAACAFACQAJAGgFAKIgNAXQgFAIgIgFQgJgFgIAGQgCADABAGQAAAHgGADgAFyiqQgKALAAAMQAAAPAKAJQAKAKANAAQAOAAALgKQAJgJAAgPQAAgMgJgLQgLgJgOAAQgNAAgKAJgAgKhhIAAhGIgTAAIAdgxIAbAxIgRAAIAABGgAH0iOQgEAAAAgFQACgEgHgCIgFACQgCAAgEgGIgDgGQgFgFAHgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgDgCgBQgGgCAFgGIAEgJQADgEAEABQADACACgBQADgBAAgFQAAgDAEAAIAMAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAFAGABIAGgBQABAAADAFIAEAGQAEAHgGACQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAABAAAAQAAABABAAQAAAAABAAQAGADgEAFIgEAGIAAACIgBACIAAABQgDACgGgDQgFADgBADIgBADQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgMAAgAHwi6QgFAFAAAGQABAHAEAEQAEAFAHAAQAFAAAGgFQAFgEAAgHQgCgGgDgFQgGgFgFAAQgHAAgEAFgAHLjNQgFAAAAgHQAAgGgEgBQgEgCgFADQgFACgEgEIgIgRQgEgFAHgDQADgDAAgEQAAgEgFgDQgFgDAEgFIAIgPQACgFADAAIAHACIABABQAKgEgBgHIACgFIAZAAIADAFQAAAIAIADIAIgDQAEAAAEAJIAGALQAFAFgHADQgFADAAAEQAAAEAFADQAFACgCAGIgKARQgCAEgHgCQgEgDgEACQgCACAAAFQAAAHgHAAgAHFkLQgHAGAAAJQAAAIAIAHQAFAHAKAAQAJAAAIgHQAFgHAAgIQAAgJgHgGQgGgHgJAAQgKAAgGAHgABBkCIAGgHIAcAZIgFAHgAhjj4IAfgWIAFAFIgeAXgAArkFIgogeIgrAgIAAgFIALgmIADgKQAAAAgJgHIgfgWIgCgEIAEgCIAuAAQAFAAAAgDIAOgsIACgCIADACIAOAsQABADADAAIAvAAIAEACIgDAEIgmAbQgCACABADIAPAsIAAAGIgFgCgABak7IAAgJIAjAAIAAAJgAh1k7IAAgJIAiAAIAAAJgABLl4IAbgVIAFAGIgcAUgAhcmRIAHgHIAcAZIgGAIgAAAmdIAAgbIAHAAIAAAbg");
	this.shape.setTransform(498.2,80.8);

	this.text = new cjs.Text("3", "bold 40px 'Arial'", "#A04D98");
	this.text.lineHeight = 47;
	this.text.lineWidth = 34;
	this.text.parent = this;
	this.text.setTransform(307,8);

	this.text_1 = new cjs.Text("¿De dónde se nutre la posición?", "bold 18px 'Arial'", "#A04D98");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 162;
	this.text_1.parent = this;
	this.text_1.setTransform(322.1,75.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E9D3E7").ss(7.4,1,1).p("AEXAAQgEB2hOBPQhOBPh3ADQh2gDhOhPQhOhOgEh3QAEh2BOhOQBOhPB2gDQB2ADBPBPQBOBOAEB2g");
	this.shape_1.setTransform(318.3,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AjEDFQhOhOgEh3QAEh2BOhOQBOhPB2gDQB2ADBPBPQBOBOAEB2QgEB2hOBPQhOBPh3ADQh2gDhOhPg");
	this.shape_2.setTransform(318.3,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(214,168,226,0.298)").s().p("AWPJIIAAyPIXNAAIAASPgEgkUAJIQj3gGimilQikilgGj4QAGj3CkimQCmikD3gGMA6jAAAIAASPg");
	this.shape_3.setTransform(290.8,81.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,581.7,161.5);


(lib.no2perfil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2A14B").s().p("AiHGoIAAhKIhKAVQgLAEgHAAQgUAAgPgPQgOgOAAgUQAAgOAJgOIB9isIAFgJQACgFAPgKQAOgHASAAICnAAQASAAANAHQANAIAFAIICDC0QAJAOAAAOQAAAUgOAOQgOAPgUAAQgJAAgKgEIhLgVIAABKgAgEF0IBhggIgCAAQgTgGgLgMQgKgNAAgOQABgOAHgOQAHgLAPgGQAQgEATAEIAKADIAAhkIiCArIiDgrIAABkIAKgDQAUgFAPAFQAQAGAHALQAGAOABAOQABAMgLAPQgLAMgSAGIgCAAgAg/AyQgXgZAAgiQAAgkAXgZQAagZAjAAQAiAAAZAZQAZAZAAAkQAAAkgZAXQgZAYgiAAQgiAAgbgYgACyhjIBdhsIBsBdIhdBsgAl6gnIBsh9IA2CbgAj3j2IARhXIBUgdIBEA6IgRBYIhUAdgABhkEIg/AiIALhHIgygzIBGgLIAghAIAhBAIBHALIgzAzIAMBHg");
	this.shape.setTransform(508.5,82.4);

	this.text = new cjs.Text("2", "bold 40px 'Arial'", "#DD9936");
	this.text.lineHeight = 47;
	this.text.lineWidth = 34;
	this.text.parent = this;
	this.text.setTransform(307,8);

	this.text_1 = new cjs.Text("¿Qué debe saber el ocupante para ser exitoso?", "bold 18px 'Arial'", "#B2770F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 162;
	this.text_1.parent = this;
	this.text_1.setTransform(316.9,63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F9E9C1").ss(7.4,1,1).p("AEXAAQgEB2hOBPQhOBPh3ADQh2gDhOhPQhOhOgEh3QAEh2BOhOQBOhPB2gDQB2ADBPBPQBOBOAEB2g");
	this.shape_1.setTransform(318.3,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("AjEDFQhOhOgEh3QAEh2BOhOQBOhPB2gDQB2ADBPBPQBOBOAEB2QgEB2hOBPQhOBPh3ADQh2gDhOhPg");
	this.shape_2.setTransform(318.3,27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(244,212,132,0.498)").s().p("AWPJIIAAyPIXNAAIAASPgEgkUAJIQj3gGimilQikilgGj4QAGj3CkimQCmikD3gGMA6jAAAIAASPg");
	this.shape_3.setTransform(290.8,81.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,581.7,150);


(lib.no2perfilsale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Conformada por las competencias críticas, los conocimientos y la formación académica requerida.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 21;
	this.text.lineWidth = 484;
	this.text.parent = this;
	this.text.setTransform(568.3,53.4);

	this.text_1 = new cjs.Text("Conocimientos y habilidades del puesto: ", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 499;
	this.text_1.parent = this;
	this.text_1.setTransform(568.3,21.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(244,212,132,0.498)").s().p("EhF7AJFQigAAAAjbIAAqcMCQ4AAAIAAKcQgBDbihAAgEhIbgEzIAAg2QAAjbCgAAMCL2AAAQChAAABDbIAAA2g");
	this.shape.setTransform(586.1,58.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.5,0.6,946.9,119.1);


(lib.no1perfilsale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Conformada por las responsabilidades del puesto, los indicadores de éxito y factores como la movilidad.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 21;
	this.text.lineWidth = 484;
	this.text.parent = this;
	this.text.setTransform(568.3,55.5);

	this.text_1 = new cjs.Text("Estructura del puesto: ", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 499;
	this.text_1.parent = this;
	this.text_1.setTransform(568.3,23.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(158,221,215,0.4)").s().p("EhF7AJFQigAAAAjbIAAqcMCQ4AAAIAAKcQgBDbihAAgEhIbgEzIAAg2QAAjbCgAAMCL2AAAQChAAABDbIAAA2g");
	this.shape.setTransform(586.1,58.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.5,0.6,946.9,121.2);


(lib.no1perfil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAVIABgqIAYAIIACADIAAAhg");
	this.shape.setTransform(536.7,74.5,1.536,1.536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAPIAAgiIAigCIAAArg");
	this.shape_1.setTransform(531.9,67.5,1.536,1.536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAgHIgkAHIABghIAjgCIAAAcIAcgIIAIgBIAAArIgkAJg");
	this.shape_2.setTransform(523.6,72.4,1.536,1.536);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhZBnIAAgEIAAi+QAAgLAIAAQAKgBAAALIAAAmQAAAGAFACIAVAGIAAAsIgagHIAAAgIABADIAaAJIAAgkIAkgIIAAAqIAjgPIAAgkIAeAHIAFABIAAAZIAVAHQAJAEgDAIIgEgCQgjgRgmASQgYANgUgCIgRgDIgQgEIgGgCIAAA+g");
	this.shape_3.setTransform(525,78.6,1.536,1.536);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3C9990").s().p("Ag3CGQgHgKgLgGQg5gZgeg4Qgdg3ALg/QAKg8AvgqQAvgqA+gEQBBgEA2AnQA2AnAQBBQAPBBgdA6QgeA7g9AbQgKAFgGAJIg4BhIg3hgg");
	this.shape_4.setTransform(524.2,84.2,1.419,1.419);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C9990").s().p("AAcEHIhFi9QgDgLgKgBIgGALIgzBRQgJAOgOADQgNAEgLgIQgtgfgqgjQgRgNANgUQAMgTAUAAQAMgBAPALIAnAgQAVgZAYgzQAZgwAFgYIhsAvQgNAEgLgHQgMgIgFgMQgKgaAbgNQBYgrBgghQAqgOAfAcIA9A5QAGAHAIgEIBageQAPgEAMAIQALAGADARQADAOgHALQgGAKgOAEIhqAkQgbAJgUgUIgUgTIgDAJQgRAwgPASQgCAEACAGIBHDBQAFASgHAMQgJAMgSABIgDABQgZAAgJgbgAACixQgSgTAAgbQgBgbASgUQAUgTAbAAQAaAAAUATQATATABAbQAAAagTATQgTATgbABIgBAAQgaAAgUgSg");
	this.shape_5.setTransform(461.2,86.3);

	this.text = new cjs.Text("1", "bold 40px 'Arial'", "#3C9990");
	this.text.lineHeight = 47;
	this.text.lineWidth = 34;
	this.text.parent = this;
	this.text.setTransform(307,8);

	this.text_1 = new cjs.Text("¿Qué debe hacer el ocupante para ser exitoso?", "bold 18px 'Arial'", "#1B665F");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 162;
	this.text_1.parent = this;
	this.text_1.setTransform(322.1,63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D5F0E6").ss(7.4,1,1).p("AEXAAQgEB2hOBPQhOBPh3ADQh2gDhOhPQhOhOgEh3QAEh2BOhOQBOhPB2gDQB2ADBPBPQBOBOAEB2g");
	this.shape_6.setTransform(318.3,27.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2F2F2").s().p("AjEDFQhOhOgEh3QAEh2BOhOQBOhPB2gDQB2ADBPBPQBOBOAEB2QgEB2hOBPQhOBPh3ADQh2gDhOhPg");
	this.shape_7.setTransform(318.3,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(158,221,215,0.4)").s().p("AWPJIIAAyPIXNAAIAASPgEgkUAJIQj3gGimilQikilgGj4QAGj3CkimQCmikD3gGMA6jAAAIAASPg");
	this.shape_8.setTransform(290.8,81.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.text_1},{t:this.text},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,581.7,150);


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


(lib.m02_tmrTrayectoria = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC686B").s().p("AmfFAIAAhrIDrAAQANAAAKgJQAJgKAAgNIAAhHQgBgQALgMQAMgMAQAAIFCAAQATAAAPgOQAOgOAAgUIAAkwQAAgQALgLQAMgLAPAAIB2AAIAABbIgggBQgQAAgMALQgLALAAAQIAAE2QAAAUgPAOQgNAPgVAAIlWAAQgHAAgGAFQgFAGgBAIIAABkQABAPgLAKQgKAKgPAAg");
	this.shape.setTransform(140.2,65.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AgzBqQgMgJgDgRIAAiIIgBgLIAAgDQAAgYAQgLQAPgLAOANIBNBHQANAMgBAUQABAVgNAMIhNBHQgHAHgJAAQgHAAgGgFg");
	this.shape_1.setTransform(186,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC686B").s().p("AnGDiQgQAAgLgPQgLgQAAgWQAAgWALgQQALgPAQAAID9AAIAAhQQAAgWALgQQAMgOAPAAIB0AAIAAigQAAgWALgQQALgPAQAAIH2AAIAABqInRAAIAACfQAAAWgLAPQgLAQgPAAIhzAAIAABQQAAAWgMAQQgLAPgQAAg");
	this.shape_2.setTransform(49.3,109.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABC9CE").s().p("Al/E+QgQAAgLgPQgMgQAAgWIAAjiQASANASAAIApAAIAACgIFZAAIAAhQIisAAQgIAAgFgIQgGgHAAgLQAAgLAGgIQAFgIAIAAICsAAIAAhpQAAgMAFgHQAHgIAIAAIBMAAQAIAAAGAIQAFAIAAALQABALgGAHQgGAIgIAAIg5AAIAADUIEzAAIAAkkIiHAAIAACfQAAALgFAIQgGAIgIAAQgIAAgGgIQgFgIAAgLIAAk+QAAgLAFgIQAGgIAIAAQAJAAAFAIQAFAIAAALIAABqICHAAIAAi3QACgBAlAAIAmABIAAJFQAAAWgMAQQgKAPgRAAg");
	this.shape_3.setTransform(42.3,132.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ABC9CE").s().p("AmmkqQAAgWAMgQQALgPAQAAIL/AAQARAAAKAPQAMAQAAAWIAAE7IgmABQglAAgCgBIAAkGIi2AAIAACgIBCAAQAJAAAFAIQAGAHAAALQAAALgFAIQgHAIgIAAIisAAQgJAAgFgIQgFgIAAgLQAAgLAFgHQAFgIAJAAIBDAAIAAigIi2AAIAADwQAAAKgFAHQgGAIgIAAQgIAAgFgIQgGgHAAgKIAAjwIj6AAIAACgICaAAQAIAAAGAIQAFAHAAALIAACfIBNAAQAIAAAFAIQAGAIAAALQAAALgGAHQgFAIgIAAIhgAAQgIAAgGgIQgFgHgBgLIAAifIiGAAIAAEkIB0AAQAIAAAFAIQAFAHAAALQAAALgFAIQgFAIgIAAIh0AAIAAAaIgpAAQgSAAgSANg");
	this.shape_4.setTransform(42.3,82.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AAZAyIhChOQgDgEAEgEIARgNQAEgDAEAEIA5BMQADADgCADIgKAPQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_5.setTransform(202.8,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AggAxIgKgQQgCgDADgCIA5hMQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABIASANQAEAEgDADIhCBOQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_6.setTransform(223.5,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9BD9C").s().p("AgLgBIACgOIAMADIgBAFQgBAGADACQAFAGADACIgMAHg");
	this.shape_7.setTransform(199.8,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AgGANQgJgIgDgLQgCgLAFgEQANgJAJASIAGAKQAAAAABABQAAAAAAAAQABAAAAAAQAAgBAAAAIACgCIACABQABABgCAQIgPALg");
	this.shape_8.setTransform(198.3,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9BD9C").s().p("AgLAJIAIgIQADgFgCgIIAMgDIACAOIgMARg");
	this.shape_9.setTransform(226.8,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#41523C").s().p("AAAAFIgCgJIACAAIADAJg");
	this.shape_10.setTransform(216.6,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#41523C").s().p("AgBAEIABgJIACABIgBAKg");
	this.shape_11.setTransform(209.3,32.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1A1A1A").s().p("AgeAFIgWgFIABgIIARAFQAUADANABQASAAAigHIACAGIgtAIIgIABQgLAAgTgEg");
	this.shape_12.setTransform(213.2,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9BD9C").s().p("AgRAOIgBgIQgBgIABgBIACgBIABACQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAIAFgKQAKgSANAJQAFAEgCALQgDALgJAIIgJAMg");
	this.shape_13.setTransform(228.4,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4D").s().p("AgNADIAWgMIAFAJQgBAGgNAEg");
	this.shape_14.setTransform(214.4,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4D").s().p("AgNgBIAFgKIAWAPIgKAIQgQgIgBgFg");
	this.shape_15.setTransform(211.6,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#744C28").s().p("AgsAaQgCAAgBgLQgCgKABgIQAAgJASgKQATgLAOABQAWACAVANIAAABQAFAEgDANQgBAEABAGIABAGQABACgKANQgDgVgCgBIgHgSQgKAOgRABIgZgBQgOAAgCAIQgBAMADAHQgDgGgDgBg");
	this.shape_16.setTransform(212.9,3.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AAWBcIgWgEIAEg2QABgMgEgmQgBAEgLAMQgHAEgFgFIgkgvIAOAIQANAGACgHQAGgfAEgHIAJgGQALgHAWgBQANgFAMAHQAGAEADAEQAICygLABIgBAAQgIAAgWgEg");
	this.shape_17.setTransform(208,23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("Ag0BgQgHgBABhZIADhZIAJgIQAMgHAMAFIANABQAOADAHAEIAIAGQAFAHAGAfQADAMAZgTIgjAvQgCACgEAAQgEABgCgCQgMgLAAgFQAAgHgCAYQgCAZABAIIADA2QglAIgNAAIgCAAg");
	this.shape_18.setTransform(218.2,23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9BD9C").s().p("AgGA2QgUgIgLgTIAAgBIAAgIIgBAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIgDgQIgBgGQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAIABACIAAAAQgBgHAAgHQAAgRAJgEIAJgHQALgHALAAIABAAQASgBAOAPQAJAEAAARQAAAHgBAHIgBABIABgBIAFgDIAAABQABAAgBAIIAAAAIgDAQQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAJIAAACQgMAQgQAJIgBAAIgHACQgDAAgEgCg");
	this.shape_19.setTransform(212.9,7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EDAB86").s().p("AgDAVQgegBAHgIQALgKABgSIAOgDQAOgCAAAFQABAJANAbIgVABIgKAAg");
	this.shape_20.setTransform(213,12.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D4D4D").s().p("AAeCjIgPgCIgChUQgChVgBgIIgHhMIgNBgIgKCdIgtAAIAHjLIALh5QAMAJAugDQAXgBAVgDIAFAoQAGAoAAAXIgGDWIgKAFQgDADgIgBIgJAAg");
	this.shape_21.setTransform(212.8,48.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1A1A1A").s().p("AAKAQIgZgJQgPACgCgCQgBgBAAgGIAAgHIADgGIAhgBIADAIIAUAKQAJAEgBAEQAAABAAABQAAAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_22.setTransform(218.2,65.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1A1A1A").s().p("AgUAKQgBgEAFgIIAGgIIACgIIAAgBIAdAAIgBAQQABAJgBACQgCADgIAFIgFADIgQABQgGgDgDgHg");
	this.shape_23.setTransform(207.9,66.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F6D9B2").s().p("AhpHuQgeAAgUgUQgVgVAAgeIAAtOQAAgdAVgVQAVgUAdAAIDSAAQAeAAAVAUQAVAVgBAdIAANOQABAegVAVQgVAUgeAAg");
	this.shape_24.setTransform(213,117.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9AC9AC").s().p("AhpFhQgeAAgUgUQgUgVgBgeIAAozQABgeAUgUQAVgVAdAAIDTAAQAdAAAVAVQAUAUABAeIAAIzQgBAegUAVQgVAUgdAAg");
	this.shape_25.setTransform(164.1,131.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C7C8CA").s().p("AhpDlQgdABgUgVQgWgVABgeIAAk8QgBgdAWgVQAUgVAdAAIDTAAQAdAAAVAVQAVAVAAAdIAAE8QAAAegVAVQgVAVgdgBg");
	this.shape_26.setTransform(115.3,144.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmrTrayectoria, new cjs.Rectangle(0,0,230.6,167.1), null);


(lib.m02_tmr_puestosemilla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFE1B5").s().p("AgHANIAAgYIAPAAIAAAYg");
	this.shape.setTransform(33.3,127.8,0.619,0.619);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFE1B5").s().p("AgMANIAAgYIAZAAIAAANIgKAAIAAALg");
	this.shape_1.setTransform(33.6,125,0.619,0.619);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFE1B5").s().p("AgMAHIAAgNIAZAAIAAANg");
	this.shape_2.setTransform(36.4,124.7,0.619,0.619);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAYAAIAAAOg");
	this.shape_3.setTransform(45,124.4,0.619,0.619);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFE1B5").s().p("AgMANIAAgOIALAAIAAgKIANAAIAAAYg");
	this.shape_4.setTransform(47.8,124.1,0.619,0.619);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFE1B5").s().p("AgGANIAAgYIANAAIAAAYg");
	this.shape_5.setTransform(48.1,121.4,0.619,0.619);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAOAAIAAAZg");
	this.shape_6.setTransform(48.3,103.5,0.619,0.619);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CFE1B5").s().p("AgMANIAAgZIAYAAIAAAPIgKAAIAAAKg");
	this.shape_7.setTransform(48.6,100.7,0.619,0.619);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CFE1B5").s().p("AgMAIIAAgPIAYAAIAAAPg");
	this.shape_8.setTransform(51.4,100.4,0.619,0.619);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAYAAIAAAOg");
	this.shape_9.setTransform(79.8,100.2,0.619,0.619);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CFE1B5").s().p("AgMANIAAgOIAKAAIAAgKIAOAAIAAAYg");
	this.shape_10.setTransform(82.5,99.9,0.619,0.619);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CFE1B5").s().p("AgHANIAAgYIAOAAIAAAYg");
	this.shape_11.setTransform(82.9,97.1,0.619,0.619);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAOAAIAAAZg");
	this.shape_12.setTransform(83.1,79.7,0.619,0.619);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CFE1B5").s().p("AgMANIAAgZIAYAAIAAAPIgKAAIAAAKg");
	this.shape_13.setTransform(83.4,76.9,0.619,0.619);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CFE1B5").s().p("AgMAIIAAgPIAYAAIAAAPg");
	this.shape_14.setTransform(86.2,76.6,0.619,0.619);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_15.setTransform(33.1,148.3,0.619,0.619);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_16.setTransform(33.1,151.2,0.619,0.619);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_17.setTransform(33.1,154.1,0.619,0.619);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_18.setTransform(33.1,139.5,0.619,0.619);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_19.setTransform(33.1,142.4,0.619,0.619);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_20.setTransform(33.1,145.3,0.619,0.619);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_21.setTransform(33.1,130.7,0.619,0.619);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_22.setTransform(33.1,133.6,0.619,0.619);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CFE1B5").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_23.setTransform(33.1,136.5,0.619,0.619);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CFE1B5").s().p("AgHAIIAAgOIAPAAIAAAOg");
	this.shape_24.setTransform(42.6,124.4,0.619,0.619);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CFE1B5").s().p("AgHAIIAAgOIAQAAIAAAOg");
	this.shape_25.setTransform(40.7,124.4,0.619,0.619);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CFE1B5").s().p("AgHAIIAAgOIAQAAIAAAOg");
	this.shape_26.setTransform(38.8,124.4,0.619,0.619);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAOAAIAAAVg");
	this.shape_27.setTransform(48,113.7,0.619,0.619);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAOAAIAAAVg");
	this.shape_28.setTransform(48,116.2,0.619,0.619);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAOAAIAAAVg");
	this.shape_29.setTransform(48,118.7,0.619,0.619);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAOAAIAAAVg");
	this.shape_30.setTransform(48,106.2,0.619,0.619);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAOAAIAAAVg");
	this.shape_31.setTransform(48,108.7,0.619,0.619);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAOAAIAAAVg");
	this.shape_32.setTransform(48,111.2,0.619,0.619);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_33.setTransform(59.9,100.2,0.619,0.619);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_34.setTransform(57,100.2,0.619,0.619);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_35.setTransform(54.2,100.2,0.619,0.619);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CFE1B5").s().p("AgLAIIAAgOIAYAAIAAAOg");
	this.shape_36.setTransform(68.4,100.2,0.619,0.619);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_37.setTransform(65.5,100.2,0.619,0.619);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_38.setTransform(62.7,100.2,0.619,0.619);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_39.setTransform(76.9,100.2,0.619,0.619);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_40.setTransform(74,100.2,0.619,0.619);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CFE1B5").s().p("AgMAIIAAgOIAZAAIAAAOg");
	this.shape_41.setTransform(71.2,100.2,0.619,0.619);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_42.setTransform(82.8,89.6,0.619,0.619);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_43.setTransform(82.8,92.1,0.619,0.619);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_44.setTransform(82.8,94.5,0.619,0.619);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_45.setTransform(82.8,82.4,0.619,0.619);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_46.setTransform(82.8,84.8,0.619,0.619);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CFE1B5").s().p("AgHALIAAgVIAPAAIAAAVg");
	this.shape_47.setTransform(82.8,87.2,0.619,0.619);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CFE1B5").s().p("AgFAIIAAgPIALAAIAAAPg");
	this.shape_48.setTransform(90.5,76.4,0.619,0.619);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CFE1B5").s().p("AgFAIIAAgPIALAAIAAAPg");
	this.shape_49.setTransform(89.4,76.4,0.619,0.619);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CFE1B5").s().p("AgEAIIAAgPIAJAAIAAAPg");
	this.shape_50.setTransform(88.2,76.4,0.619,0.619);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCCCCC").s().p("AAZAyIhChOQgDgFAEgDIARgNQAEgDAEAEIA5BMQADADgCADIgKAPQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_51.setTransform(96.3,35.7,0.862,0.862);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CCCCCC").s().p("AgcAzQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBgBAAAAIgKgPQgCgDACgDIA6hMQADgEAEADIASANQAEADgDAFIhCBOQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_52.setTransform(114,35.6,0.862,0.862);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F9BD9C").s().p("AgLgBIACgOIAMADIgBAFQgBAFADADQAFAGADACIgMAHg");
	this.shape_53.setTransform(93.6,31.9,0.862,0.862);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F9BD9C").s().p("AgGANQgJgJgDgKQgDgLAGgEQAMgJAKASIAGAJQAAABABAAQAAABABAAQAAAAAAAAQAAgBAAAAIACgDIACACQABABgCAQIgPALg");
	this.shape_54.setTransform(92.3,29.5,0.862,0.862);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9BD9C").s().p("AgLAJQADgCAFgGQADgDgBgFIgBgFIAMgDIACAOIgMARg");
	this.shape_55.setTransform(116.9,32.1,0.862,0.862);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#41523C").s().p("AAAAFIgCgJIACAAIADAJg");
	this.shape_56.setTransform(108.1,48.6,0.862,0.862);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#41523C").s().p("AgBAFIABgKIACABIgBAKg");
	this.shape_57.setTransform(101.8,48.5,0.862,0.862);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1A1A1A").s().p("AgeAFIgWgFIABgIIARAFQAUAEANAAQASAAAigHIACAGQgYAFgVADIgIABQgLAAgTgEg");
	this.shape_58.setTransform(105.2,48.5,0.862,0.862);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F9BD9C").s().p("AgRAOIgBgIQgBgIABgBIACgCIABADQAAAAABABQAAAAAAAAQABAAAAgBQABAAAAgBIAFgJQALgSAMAJQAFAEgDALQgCAKgJAJIgJAMg");
	this.shape_59.setTransform(118.3,29.8,0.862,0.862);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4D4D4D").s().p("AgNADIAWgMIAFAJQgBAGgNAEg");
	this.shape_60.setTransform(106.3,32.6,0.862,0.862);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D4D4D").s().p("AgNgBIAFgKIAWAPIgKAIQgQgIgBgFg");
	this.shape_61.setTransform(103.8,32.4,0.862,0.862);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#744C28").s().p("AgsAaQgCAAgBgLQgCgLABgIQAAgIASgKQATgLAOABQAPABAPAHQANAFAAACQAFAEgDANQgCAKADAHQABACgKAMQgDgUgCgCIgEgJIgDgIQgKAOgRABIgZgBQgPAAgBAIQgBAMADAHQgDgGgDgBg");
	this.shape_62.setTransform(104.9,23.1,0.862,0.862);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCCCCC").s().p("AAWBcIgWgFIAEg1QABgNgEglQgBAFgLALQgGAFgGgGIgkgvQAaATADgMQAGgfAEgHIAJgGQAHgEANgDIANgCQANgEAMAHQAGAEADAEQAICxgLACIgBAAQgIAAgWgEg");
	this.shape_63.setTransform(100.7,40.4,0.862,0.862);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CCCCCC").s().p("Ag0BgQgLgCAIixQAEgEAFgEQAMgHAMAEIANACQAOADAHAEIAIAGQAFAHAGAfQADAMAZgTIgjAvQgDACgDAAQgEAAgCgBQgMgKAAgGQAAgHgCAYQgCAYABAJIADA1QgmAJgMAAIgCAAg");
	this.shape_64.setTransform(109.5,40.4,0.862,0.862);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F9BD9C").s().p("AgGA2QgUgHgLgTIAAgCIAAgHIgBgBIgDgBIgCgIIgCgOIABgEIADABIABACIAAAAQgBgHAAgHQAAgQAJgFIAJgHQALgHALAAIABAAQASAAAOAOQAJAFAAAQQAAAHgBAHIgBABIABgBQADgDACABQABABgBAHIAAAAIgBAJIgCAHIAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAKIAAABQgQATgMAGIgBAAIgIACQgDAAgDgCg");
	this.shape_65.setTransform(104.9,26.3,0.862,0.862);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDAB86").s().p("AgZAMQAGgGAEgMIACgLIANgDQAOgCABAFQAAAJANAcIgbABQgkAAAKgJg");
	this.shape_66.setTransform(105,31,0.862,0.862);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D4D4D").s().p("AAPCgIgChUQgChVgBgIIgHhLIgNBgIgKCdIgtAAIAHjLIALh5QAMAIAugCQAXgBAVgDIAFAnQAGArAAAUIgGDWIgKAGQgEADgHAAQgJAAgPgEg");
	this.shape_67.setTransform(104.8,61.9,0.862,0.862);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1A1A1A").s().p("AAKAPIgZgIQgPABgCgCQgBgBAAgFIAAgHIADgGIAhgBIADAHIAUAKQAJAEgBAFQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_68.setTransform(109.5,76.8,0.862,0.862);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1A1A1A").s().p("AgLAUQgGgDgDgHQgBgEAFgIIAGgIIACgIIAAgBIAdAAIgBARIABAEQAAAFgBABQgCAEgIAEIgFAEg");
	this.shape_69.setTransform(100.6,77.3,0.862,0.862);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D15A61").s().p("ABfCbIi1AAIAADiIgkAAIAAjiIjUAAIAADiIgjAAIAAjiIjRAAIAADiIgjAAIAAkFICOAAIAAj3IFVAAIAAj+IEeAAIAAD+IFQAAIAAD3IB6AAIAAEFIgjAAIAAjiInBAAIAIDiIgjABgADxB4IDYAAIAAjUIjYAAgAjAB4IGOAAIAAjUImOAAgAm0B4IDRAAIAAjUIjRAAgAhfh/IDYAAIAAjaIjYAAg");
	this.shape_70.setTransform(102.5,117.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_puestosemilla, new cjs.Rectangle(32.6,20.3,131.3,135.2), null);


(lib.m02_tmr_idioma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21CDAD").s().p("AgLADIABAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQADgEAJgBQANAAACAHQABADgEADQgDADgEABQgEAAgLgGg");
	this.shape.setTransform(110.1,113.4,0.789,0.789);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C3EEED").s().p("AjwDyQhkhkAAiOQAAhEAag9QANAHABAKQAAAFgGANQgJAQAEAWQAAAFAKAiQAHAbAFAJQAKARATABQghgpAPgYQAXAfAoAIIAQADIAPADQAYAIASAkQAbA0AFAGIANAPQAIAIAEAHQADAHAHARQAFAQAGAHIANAMQAJAHAEAFQAJAMADAkQACAgAOAMQAFADAFAAQAFAAADgDQACgDAAgHQABghAQgcIAIgMQAEgHACgGQADgLgGgaQgGgYAGgNQADgIAKgIIAQgMQAJgJAEgJQAEgMgGgHQgFgJgRgBQgVgDgFgDIgMgJQgOgKgWAAQgIgBghAFQgWADgSgFQgWgGgHgRQgEgPgEgGQgEgFgKgHQgNgHgDgEQgJgKABgPQABgOAJgMQAKgPAdgWQAagZgEgYQgBgHgGgLQgGgMgBgGQgDgMAFgOQAEgMAKgKQAMgOAfgQQAKgHABgFQABgDgEgKIgSgjQAigHAhAAQARAcABAVQABAIgBARQABAQAHAHQAHAHAGgDQADgBABgDQAKgNAHgQIAGgLQAFgFAKgEIARgFQAPgHAIgPQATAHAUAKQAiATAbAXIgEACQgJAHgBAFQgCAHAGAMQAGAMgCAGQgDAJgUACQgVACgFAIQgCADAAAFIgBAKQgEAVgdAIIgXAGQgOAEgIAFQgLAFgGALQgHAKAAALQgBANAHAKQAHAKALADQAMAEALgFQAMgHADgLIAEgOQADgIAGAAQAEAAAGAFQAOAKAZgFIArgHQAUAAADgBQAHgCAJgGQAegOAeAKQAEALAFAVQAEARACAWQgXgDgMAAQgMAAgTAFQgXAGgIABIgaAAQgRAAgJABQgOACgKAGQgNAIgDAKQgCAGABARQACAbAFARQAIAXARAKIATAHQAMAFAFAGQAIAIABAQIADAcQAFAYAcAWIgHAIQgvA2hCAfQhEAfhLAAQiNAAhkhkgAA7E0QAEgBADgDQAEgDgBgEQgCgHgOAAQgJABgDAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABABIgBAAQALAGAFAAgABojGIgCACQgCAIAEAIQADAHAIADQAFABACgBQABgBABgEQADgNgFgHQgDgEgGgCIgCAAQgEAAgDADg");
	this.shape_1.setTransform(105.8,89.8,0.789,0.789);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9CD6CA").s().p("AABAQQgGgDgEgIQgEgHADgHIACgDQADgEAFABQAGACADAEQAFAHgDAMQgBAEgCABIgDABIgEAAg");
	this.shape_2.setTransform(114.8,75.1,0.789,0.789);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9CD6CA").s().p("AghAuQgIgHAAgPQAAgSAAgHQgBgVgSgcIACAAQA+AAA5AVQgIAQgPAGIgRAFQgLADgEAFIgGALQgGAQgKANQgCADgDABIgDABQgFAAgEgFg");
	this.shape_3.setTransform(110.5,66.8,0.789,0.789);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9CD6CA").s().p("ABqFBQgOgLgCghQgDgjgJgMQgEgFgJgHIgNgMQgGgHgFgQQgHgSgDgGQgEgHgIgIIgNgPQgFgHgagzQgSgkgYgIIgPgEIgQgCQgogIgXggQgPAYAhAqQgTgBgKgRQgFgKgHgaQgKgiAAgGQgEgVAJgQQAGgNAAgGQgBgJgNgIQAghOBBg2QBCg3BSgRIASAjQAEAKgBADQgBAFgKAGQgfARgMAOQgKAKgEAMQgEAOADAMQAAAGAGAMQAGALABAHQAEAXgZAZQgdAXgKAPQgJAMgBAOQgBAPAJAKQADAEANAHQAKAFAEAGQAEAHAEAPQAHARAVAGQASAFAWgDQAhgFAIAAQAXAAAOALIAMAJQAFADAVACQARACAFAIQAGAIgEAMQgEAJgJAIIgQANQgKAIgDAIQgGAMAGAZQAGAagDALQgCAGgEAHIgIAMQgQAcgBAgQAAAIgCACQgDAEgGAAQgFAAgFgEg");
	this.shape_4.setTransform(96.6,89,0.789,0.789);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9CD6CA").s().p("AgPBSIgDgcQgBgQgIgIQgFgGgMgFIgTgHQgRgKgIgWQgFgRgCgbQgBgRACgGQADgLANgIQAKgGAOgCQAJgBARAAIAaAAQAHgBAXgGQATgFAMAAQAMAAAXADIACAjIAAAKQgDB0hMBbQgbgWgFgYg");
	this.shape_5.setTransform(125.3,96.9,0.789,0.789);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9CD6CA").s().p("AhsBnQgLgDgHgLQgHgKABgMQAAgLAHgLQAGgKALgGQAIgFAOgDIAXgGQAdgIAEgVIABgJQAAgFACgDQAFgIAVgCQATgCADgJQACgGgGgNQgGgMACgGQABgFAJgHIAEgDQBMBAAeBcQgegKgeAOQgJAGgHABQgDABgUAAIgqAIQgZAFgOgKQgGgFgEAAQgGAAgDAIIgEAOQgDALgMAGQgHAEgHAAQgEAAgFgCg");
	this.shape_6.setTransform(121,77.3,0.789,0.789);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B1C0C9").s().p("AnuDiQhNiKAFibQAIjtCyiiQCxiiDzAIQDzAICnCuQCmCtgIDtQgIDsixCiQiyCijzgIQhggDhaghQhXgghIg4IkIDdg");
	this.shape_7.setTransform(105.2,94.2,0.789,0.789);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("ApGEOQhgicAAi0QAAkUDKjDQDKjDEdAAQEeAADJDDQDKDDAAEUQAAESjKDDQjKDDkdAAQhxAAhqgiQhngihYg/IksEKg");
	this.shape_8.setTransform(105.9,96.7,0.789,0.789);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_idioma, new cjs.Rectangle(50.6,38.9,110.5,115.7), null);


(lib.m02_tmr_formaciondeseable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CBA7").s().p("AgQBFQgHgHABgIIAEhqQAAgIAGgHQAGgGAIgBQAJAAAGAGQAGAGABAJIgFBpQAAAJgGAHQgGAGgHAAIgCABQgIAAgGgGg");
	this.shape.setTransform(90.8,108.9,1.089,1.089);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C53C54").s().p("AgRgiIAjgKIAABPIgSgKIgRAUg");
	this.shape_1.setTransform(90.2,52.4,1.089,1.089);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_2.setTransform(96,53.4,1.089,1.089);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_3.setTransform(96,56.4,1.089,1.089);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_4.setTransform(96,59.4,1.089,1.089);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_5.setTransform(96,62.4,1.089,1.089);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_6.setTransform(96,65.4,1.089,1.089);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_7.setTransform(96,68.4,1.089,1.089);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9D2D2").s().p("AhZAPIC0g3IAAAZIi0A3g");
	this.shape_8.setTransform(100.2,71.5,1.089,1.089);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9D2D2").s().p("AgghAIBBgUIAACUIhBAVg");
	this.shape_9.setTransform(106.6,57.7,1.089,1.089);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9D2D2").s().p("Aggg/IBBgVIAACVIhBAUg");
	this.shape_10.setTransform(94.2,87.1,1.089,1.089);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_11.setTransform(104.7,76.6,1.089,1.089);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_12.setTransform(104.7,79.6,1.089,1.089);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9D2D2").s().p("AgxAIIBjgdIAAANIhjAeg");
	this.shape_13.setTransform(104.7,82.6,1.089,1.089);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9D2D2").s().p("AgxAIIBjgdIAAANIhjAeg");
	this.shape_14.setTransform(104.7,85.6,1.089,1.089);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAANIhjAeg");
	this.shape_15.setTransform(104.7,88.5,1.089,1.089);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9D2D2").s().p("AgxAJIBjgeIAAAOIhjAdg");
	this.shape_16.setTransform(104.7,91.5,1.089,1.089);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9D2D2").s().p("AhZAQIC0g3IAAAYIi0A3g");
	this.shape_17.setTransform(100.2,97.2,1.089,1.089);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_18.setTransform(67.8,51.7,1.089,1.089);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_19.setTransform(67.8,54.7,1.089,1.089);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_20.setTransform(67.8,57.7,1.089,1.089);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_21.setTransform(67.8,60.7,1.089,1.089);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_22.setTransform(67.8,63.7,1.089,1.089);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E1DDDD").s().p("AgxgGIAAgOIBjAbIAAANg");
	this.shape_23.setTransform(67.8,66.6,1.089,1.089);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E1DDDD").s().p("AhagLIAAgZIC0AwIAAAZg");
	this.shape_24.setTransform(72.2,72.3,1.089,1.089);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E1DDDD").s().p("AggBCIAAiVIBBASIAACVg");
	this.shape_25.setTransform(78.5,62.1,1.089,1.089);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E1DDDD").s().p("AggBCIAAiVIBBASIAACVg");
	this.shape_26.setTransform(66.2,84.4,1.089,1.089);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_27.setTransform(76.7,79.8,1.089,1.089);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_28.setTransform(76.7,82.8,1.089,1.089);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_29.setTransform(76.7,85.8,1.089,1.089);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_30.setTransform(76.7,88.8,1.089,1.089);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_31.setTransform(76.7,91.8,1.089,1.089);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E1DDDD").s().p("AgxgGIAAgNIBjAaIAAANg");
	this.shape_32.setTransform(76.7,94.8,1.089,1.089);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E1DDDD").s().p("AhagLIAAgZIC0AwIAAAZg");
	this.shape_33.setTransform(72.2,98,1.089,1.089);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiEDxIADgBIgDooIEJBIIAAIpg");
	this.shape_34.setTransform(72.5,75.2,1.089,1.089);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0F0F0").s().p("AiTD7IADgBIgDooIEnA0IAAIpg");
	this.shape_35.setTransform(70.8,76.4,1.089,1.089);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AikgNQASgJATgHIEkA0QgjAAgUAHg");
	this.shape_36.setTransform(69,106.9,1.089,1.089);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1DDDD").s().p("AgRkMQALgNAVgDIADIoQgQAGgTAKg");
	this.shape_37.setTransform(53.1,74.4,1.089,1.089);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AikEGIAAooQAIgLAZgFIEoA0IAAIpQgjAAgUAHg");
	this.shape_38.setTransform(69,76.8,1.089,1.089);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F0F0F0").s().p("Ah6jyID1hEIgCIoIACABIj1BEg");
	this.shape_39.setTransform(100.4,75.4,1.089,1.089);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AikAfID2hEQAvAPAkARIkTArQgUgHgiAAg");
	this.shape_40.setTransform(104.9,106,1.089,1.089);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E1DDDD").s().p("AgCEWIgogSIADooQAsANAmATIAAIpQgOAAgfgPg");
	this.shape_41.setTransform(118.2,73.5,1.089,1.089);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AikE0IAAoqID2hEQAtANAmATIAAIpIkTAsQgUgHgiAAg");
	this.shape_42.setTransform(104.9,75.8,1.089,1.089);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#ECCAA0").s().p("AiaEDIAAopIE1AkIAAIpg");
	this.shape_43.setTransform(63.5,78,1.089,1.089);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DF8A26").s().p("Ag4EOIAAooQARAMAnAAQAoAAARgMIAAIoQgRANgoAAQgnAAgRgNg");
	this.shape_44.setTransform(86.6,80.7,1.089,1.089);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ECCAA0").s().p("AiRj+IEjgrIAAIpIkjAqg");
	this.shape_45.setTransform(108.8,77.7,1.089,1.089);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C4B98C").s().p("Ag/iVICEgBQAAEegGABQgyAOhNAAQgJAAAKksg");
	this.shape_46.setTransform(93.7,143.5,1.089,1.089);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F8CBA7").s().p("AgxBFIgBicIBkAFIABBuIgqA8g");
	this.shape_47.setTransform(94,129.6,1.089,1.089);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F8CBA7").ss(0.2,0,0,22.9).p("AAdhCQgJAbgNASQgUAcgTgTQgTgUAGAuQADAXAGAcIBBgbQALgPAFgUQAKgogagdg");
	this.shape_48.setTransform(97.4,113.6,1.089,1.089);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F8CBA7").s().p("AgtAPQgGguATAUQATATAUgcQANgSAJgbQAaAdgKAoQgFAUgLAPIhBAbQgGgcgDgXg");
	this.shape_49.setTransform(97.4,113.5,1.089,1.089);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCD5B7").s().p("AAoAgIhagdQgHgCgDgGQgEgGACgHQACgIAHgEQAGgDAHACIBaAdQAIACADAGQAEAGgCAIQgCAHgHAEQgEACgEAAIgGgBg");
	this.shape_50.setTransform(93.7,99.8,1.089,1.089);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8CBA7").s().p("AAVAxQgIgBgEgGIgvg+QgEgGABgHQABgIAHgEQAGgEAHABQAIABAEAGIAvA+QAEAGgBAHQgCAIgGAEQgEAEgGAAIgDgBg");
	this.shape_51.setTransform(101.6,105,1.089,1.089);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F8CBA7").s().p("AggBHQgHgBgEgIQgFgGAEgHIA3hrQAJgRAOAFQAHACAEAGQADAGgCAIIg3BrQgHANgKAAIgGgBg");
	this.shape_52.setTransform(101.1,114.5,1.089,1.089);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8CBA7").s().p("AggAxQgQgSgFgdQgEgZAOgVQALgTANgBQAMgBATANQAWAPAOAWQAOAWgTAcQgSAbgWADIgDAAQgSAAgOgQg");
	this.shape_53.setTransform(93.6,118.9,1.089,1.089);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EFBD97").s().p("Ag6ARQgGgFgBgHQAAgHAEgGQAFgFAIgBIBegGQAHgBAGAFQAGAFABAHQABAHgFAGQgFAGgHAAIhfAGIgBAAQgHAAgFgEg");
	this.shape_54.setTransform(94,108.6,1.089,1.089);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EFBD97").s().p("AgsA+IgRiYIA9AFIA+BGIgzBqg");
	this.shape_55.setTransform(97,110.3,1.089,1.089);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EFBD97").s().p("AgvAQQgIAAgEgFQgGgGAAgGQAAgIAGgFQAFgGAHABIBfAEQAHAAAGAFQAFAGAAAGQAAAIgGAFQgFAFgHAAg");
	this.shape_56.setTransform(93.2,107.2,1.089,1.089);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EFBD97").s().p("AAsAcIhdgTQgHgCgFgGQgEgFABgIQACgHAGgEQAGgFAHACIBdATQAIABAEAGQAEAFgBAIQgBAHgHAFQgFADgFAAIgDAAg");
	this.shape_57.setTransform(92.2,104,1.089,1.089);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_formaciondeseable, new cjs.Rectangle(46.7,41.2,78.1,118.8), null);


(lib.m02_tmr_movilidad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525558").s().p("AgUA2QgTgJgHgXQgEgNAAgLIAAg4IAIABIBXAAIAFAtQACAugSAMQgOAJgGACQgFACgHAAQgKAAgMgFg");
	this.shape.setTransform(79.1,82.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDAB86").s().p("AgBAKIgHgmQAMAzAFAGQgIgHgCgMg");
	this.shape_1.setTransform(73.1,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDAB86").s().p("AAJADQgMgBgagCIAdAAQAYAAAGgCIgEACQgIADgHAAIgCAAg");
	this.shape_2.setTransform(72.9,25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDAB86").s().p("AgegCQAIADA1gBIgnADIgBAAQgMAAgJgFg");
	this.shape_3.setTransform(57,25.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDAB86").s().p("AACAAIAHgdIgHAnQgCAMgIAHQADgDAHgag");
	this.shape_4.setTransform(57.4,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDAB86").s().p("AALAqQgMAGgKgLQgJAGgQgLIgIgBQgHgGACgTQABgNAHgVIAHgTIBTAoIABANIgVAoQgFACgEAAQgGAAgDgGg");
	this.shape_5.setTransform(24.3,124.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDAB86").s().p("AgFAPIAEgIIgCgLIAIgQIABApg");
	this.shape_6.setTransform(29.3,124.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#827978").s().p("ABWAzQgFAAgFgDQALgVgFgVQgJgohMAEQglAGgNAHQgVALgVAgQgIADgDgEQAAAAgBgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQADgQANgQQAagiA4gEQBFgCAaAVQAXATABAzQgJALgMAAIgCAAg");
	this.shape_7.setTransform(23.2,130.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#312F31").s().p("AgUgDIAKABIAfgGIgKAGIAAAFIgfAGg");
	this.shape_8.setTransform(43.5,158.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD8660").s().p("AgoAPIAAgqIBRANIgBAqg");
	this.shape_9.setTransform(20.6,156.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C1986F").s().p("AgoANIABgmIBQAMIgBAog");
	this.shape_10.setTransform(20.7,152.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4A4A").s().p("AjUA2IgBiYQAAgLAHgIQAFgHAJABIF+A2QAKABAHAKQAHAKgBAMIgDCgg");
	this.shape_11.setTransform(21.3,145.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AD8660").s().p("AAAAbQgFgBgEgGQgFgGAAgIIAAgQQAAgIAFgFQAEgEAFAAQAGABAEAGQAEAGAAAIIAAARQAAAHgEAFQgDAFgFAAIgCgBg");
	this.shape_12.setTransform(10.8,135.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD8660").s().p("AAAAcQgGgBgEgGQgFgGAAgIIABgRQAAgIAEgFQAFgFAFABQAHABAEAGQAFAGAAAIIgBARQAAAIgEAFQgEAEgFAAIgCAAg");
	this.shape_13.setTransform(30.8,138);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2D2F").s().p("ACvDVIllhEQgIgBgGgJQgFgJgBgLIgBkuQgBgLAHgIQAFgHAJABIFtAzQAKACAGAJQAHAKgBAMIgHE9QAAAMgGAHQgGAGgGAAIgEgBg");
	this.shape_14.setTransform(21.3,154.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#312F31").s().p("AgYgIIAigIIAPAVIgpAMIAAAAQgBAAgHgZg");
	this.shape_15.setTransform(12.8,133.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#827978").s().p("ACdDeIlIhKQgIgBgGgJQgGgJAAgLIAAiWIgJgCIgdicQAAgLAVgHQARgGAMACIBIAKIAAgCQAAgIAFgFQAEgEAGAAQAGABAFAGQAEAGAAAIIAAACICrAYIAAgCQAAgIAFgFQAEgFAHABQAGABAFAGQAEAGAAAIIAAACIBRALQAKACAHAKQAHAJgBAMIgEChIgKAGIgECXQAAALgXALQgRAIgKAAIgEAAg");
	this.shape_16.setTransform(23.1,153.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#312F31").s().p("AgXgGIAggIIAPAXIgvAGg");
	this.shape_17.setTransform(33.2,135.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#303335").s().p("Ah7giQAMjGAQhMQAFgYAFgJIAEgEIBsE1IBhFYIgTAHQgXAJgTALIgTALg");
	this.shape_18.setTransform(99,89.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#303335").s().p("AglFOQgdgmgeACQgPABgJAIIC/qFQACAAADAEQAHALAGAYQAUBOAMDFIiaFrg");
	this.shape_19.setTransform(33.1,88.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525558").s().p("AAaiyIAnBbIgnASIAIAfIhiDZg");
	this.shape_20.setTransform(73.6,68.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#303335").s().p("AhyF4IgFm4IBblmIBJAOIAUAFIA3ATIg5GYIArGPg");
	this.shape_21.setTransform(79.1,93.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#525558").s().p("AgggmIAJggIgngSIAnhbIBWFng");
	this.shape_22.setTransform(57.8,68);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#303335").s().p("Ag+AYIg6mQICVguIBYFuIAEG4IjiAng");
	this.shape_23.setTransform(52.4,92.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EDAB86").s().p("AgbArIgQgjQgHgKgDAIQgEAIgCAAIgFgGQgGgFAOg7IA4giIAfAvQAcAhAGAnQAHApgWANQgNAIgNAAQgcAAgXgwg");
	this.shape_24.setTransform(110.9,128.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EDAB86").s().p("AgKAUQgvgMAPgWQAQgXAlAWIAjAaIgFAOIgDACg");
	this.shape_25.setTransform(25.1,121.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A7ABAB").s().p("AgUAdQgjgUgCgOIAUgnIBfA9IguAcg");
	this.shape_26.setTransform(60.4,52.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BBCACB").s().p("AAMFYIARjSQADgigHhgQgHhggCAZQgBAThVDNIhXDKIhNgvQAoibAtieQBak+AbgRQAbgSA3gJIA0gHQAxgRAuAcIAjAfIADFeQgDFggaADIgKAAQgwAAiIghg");
	this.shape_27.setTransform(44.6,88.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A7ABAB").s().p("Ag3ALIBbgxIAUAmQgCAPgdAOQgOAHgNADg");
	this.shape_28.setTransform(71.1,52.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BBCACB").s().p("AjZF5QgbgDAGlgIAMleQANgRAWgOQAugcAxARQAXACAdAFQA4AJAaASQAbARBaE+QAtCeAoCbIg6AfQi+l8gCgeQgCgZgHBgQgHBgADAiIARDSIhZASQhTAPgfAAIgIAAg");
	this.shape_29.setTransform(87,88.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#71706F").s().p("AAvABQgQgOgTAGIgcAHQghAGgJgKQAGgEAqgHQAPgDAQACQAiAFAEAdg");
	this.shape_30.setTransform(72.5,19.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#71706F").s().p("AgUgQIAfAAQAaAFAOAEIAIADQgJAKgggGQgQgCgNgFQgTgHgQAPQgIAHgEAJQAEgcAigFg");
	this.shape_31.setTransform(57.4,19.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E8AF93").s().p("AgXgFIAKgEIAGgBIAGAAQAKAAALAFQAMAFAHAHQgJgFgLgCIgUgEIgFAAIgPADQgMAEgFAIQAEgLALgFg");
	this.shape_32.setTransform(72.6,21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E8AF93").s().p("AAXgBIgPgDIgFAAIgVAEQgKACgKAFQAIgHALgFQALgFAKAAIAGAAIAGABIAKAEQAMAFADALQgFgHgLgFg");
	this.shape_33.setTransform(57.5,21.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#818189").s().p("ACbBfIgJhGQgGg0gugcQgqgZg5AGQgvAFgQAHQgLAEgXAPQgVALgNAdQgGANgCAMIgJBHQgBABAAABQAAABgBAAQAAABgBAAQAAAAgBAAQgDAAgBgEQgHg0ADgmQAEg1AZgCQAEAAAAgEQABgGAIgFQAPgMAfgBQAagCAWgIQAVgIAOAAQBkgBAdAqQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAQALAFAIAPQANAagDAtIgEA6QAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgBABQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_34.setTransform(64.7,9.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E5A683").s().p("AgZAIIACgCQAEAFAHgFQACgEAGgBIAEAAQARABAFgEQACgCAAgEIgBgBIADgCIAAADQAAAEgCADQgFAHgTgCIgDAAQgEABgCADIAAAAIAAABQgGADgDAAQgEAAgDgEg");
	this.shape_35.setTransform(67.1,31.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E5A683").s().p("AAKAJIAAgBIAAAAQgCgEgDgBIgEABQgTABgFgGQgCgDAAgEIAAgDIADABQgBAEACAEQAFAEAQgBIAFAAQAGABABAFQAHAEAFgEIACABQgDAEgEAAQgEAAgFgDg");
	this.shape_36.setTransform(63.5,31.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6A382").s().p("AgrAAQgKgFgEgGIA5ACIA5gCIgNALQgSAMgaAAQgaAAgRgMg");
	this.shape_37.setTransform(65.3,36.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E29F7E").s().p("AAAAGIgRAAQgVAAgTgFIAogGQAEAFANAAQAIAAAGgDIAEgCIAnAGQgVAFgVAAIgPAAg");
	this.shape_38.setTransform(65.3,35.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EDAB86").s().p("AAyABIhjAAIgyAEQAbgFAXgBIAZgCIAYgBQAcAAAXADQAXABAaAFIgygEg");
	this.shape_39.setTransform(65.4,11.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EDAB86").s().p("AAyACIgygCIgxABIgyAEQAagFAYgCIAxgCQAcAAAWACQAeACAUAFIgygDg");
	this.shape_40.setTransform(65.1,14.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E8AF93").s().p("AgHARIgNgDQgOgFgFgFIgBgBIABAAQACgFAGgFQAMgKARAAQAXABATAOIABABIgBABQgCADgJAGQgOAJgQAAgAgbgGQgGAEgDAFQAGAEAMAEIAMADQAYADASgSQgSgLgUgCQgOAAgLAIg");
	this.shape_41.setTransform(72.6,22.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3F3231").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_42.setTransform(72.5,22.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgmAFQAEgNARgFIAPgCQAJgCARAIIAPAIIgKAIQgOAJgRAAIgCAAQgMAAgWgLg");
	this.shape_43.setTransform(72.5,22.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E8AF93").s().p("AgnAAIgBgBIABgBQAMgJAQgEIANgCQASAAAMAKIAJAJIAAACIgBABQgIAHgYAFIgGABQgYAAgRgSgAgJgMQgPAEgLAIQATASAXgEQAWgFAIgGQgDgFgGgEQgKgIgPAAg");
	this.shape_44.setTransform(57.5,22.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F3231").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgFgFg");
	this.shape_45.setTransform(57.5,22.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AADAQQgSAAgNgJQgHgEgDgEQAagRAPADQAHAAAIACQAQAFAFANIgOAGQgNAFgHAAIgCAAg");
	this.shape_46.setTransform(57.5,22.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9BD9C").s().p("AgcDWIgrgZQgxghgbgvIgCgFIgBgfIgBAAQgJAAgDgHQgDgEgFgZIgFglQgDgMAAgLQAAgMADgBQAEgCAGAGQADACABAEIADAAQgFgaAAgdQAAhBAigRIAAAAQAOgOAWgNQAsgbAqAAIAFAAIAAAAIABAAIACAAIABAAIAAAAQArgCAuAcIAlAcIABAAQAiARAABBQAAAdgGAaIgBAFIAEgEIAIgHQAGgEADABIAAAAQAHAEgFAcIgGAnQgFAbgDACIAAABIgDADQgFAEgFAAIgBAAIgEAlQAAADgCACQgNATgWAXQgjAkgoAVIgCAAQgJADgOABIgJABQgPAAgNgFg");
	this.shape_47.setTransform(65.1,23.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDAB86").s().p("AhnAxQAagaAMgvIAIgrQAcgIAcgEQA4gIABAUQACAjAzBxIh7ABQh2gEAdgdg");
	this.shape_48.setTransform(65.7,45.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C2C2B").s().p("AAnA9IhlggQg6AEgHgGQgIgGADgxIAKgZICFgGIAOAgQA2AdAaALQAfAOgCAVQgCAMgDABg");
	this.shape_49.setTransform(85.9,254.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2C2C2B").s().p("Ag7BFQgOgMgGgRQgGgRAWgiIAXgfIAIgjIBxAAIAABTQAAAUgDAGQgIAPgeAQQgXAMADABIhDACg");
	this.shape_50.setTransform(45.6,256.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#525558").s().p("AB1KAQgfgDgagFIgIlLQgIlQgEghIgdknQgzFuAAANIgnJrIiyAAIAMnzIANkwIAtnaQAvAgC3gKICugPIAWCcQAFAnAGBOQAIBhAAAgIgUNMIgqAZQgMAHgdAAQgQAAgWgDg");
	this.shape_51.setTransform(64.6,186.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_movilidad, new cjs.Rectangle(0,0,117.6,264.4), null);


(lib.m02_tmr_Metaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AgwDZIBiAAIAAj/IAxAAIhjitIhiCtIAyAAg");
	this.shape.setTransform(92.7,153.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F27B82").s().p("AgxDWIAAj/IgxAAIBiitIBkCtIgyAAIAAD/g");
	this.shape_1.setTransform(92.7,153.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AgwE5IBiAAIAAnAIAyAAIhkisIhiCsIAyAAg");
	this.shape_2.setTransform(74.3,143.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F27B82").s().p("AgxE3IAAnAIgxAAIBiitIBjCtIgyAAIAAHAg");
	this.shape_3.setTransform(74.3,144);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7F795E").s().p("Ag8AOIBjg4IAWAqQgCARggAPQgQAHgPAEg");
	this.shape_4.setTransform(47.9,149.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F795E").s().p("AgVAgQgngWgCgQIAWgrIBnBFIgvAeg");
	this.shape_5.setTransform(35.5,148.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAA675").s().p("ACzB8QAGgegFgiQgFgig+AAQgkAAhRAFQgvgBgqghQgUgQgMgRIgLAkQgMAlgHAFQgKAHgOBYQgpg3ADgIQADgJADgRQADgbgEgSQgEgSABgWQABgcALgJIAAgBQgDgGA8gZQBFgcA/gFQBEgGBTAvQBPAtACAkQACAlgGAtQgHAwgJACQgNACgKAYQACgHACgKg");
	this.shape_6.setTransform(41,101.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4B98C").s().p("AjECKQBEjYAXgPQAfgTBAgLIA5gHQA4gSAzAeIAoAiIADDeg");
	this.shape_7.setTransform(24.7,161);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4B98C").s().p("AjLCKIAJjeQAOgTAagPQAzgeA4ASQAaACAfAFQBAALAeATQAQAKAcBBQAcBAAcBcg");
	this.shape_8.setTransform(59.6,161);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9BD9C").s().p("AgfDqIgxgbQg3glgfgzQgBgCAAgEIgBghIgCAAQgHgBgHgHQgEgHgEgZIgHgoQgDgQAAgKQAAgMAEgCQAEgCAHAHQADACABAEIAEAAQgGgcAAggQAAhIAmgSIABAAQAQgPAYgPQAygeAvAAIAFAAIAAABIAFAAIABgBQAwgBA0AeIAqAfIABAAQAmASAABIQAAAggGAcIgCAGIAFgFIAJgHQAHgFADACQAHADgFAgIgHArQgGAdgCACIgEAFQgFADgGABIgBAAIgEAoQgBAEgCACQgQAXgYAXQgoAngsAXIgCABQgTAFgRAAQgQAAgQgGg");
	this.shape_9.setTransform(41,117.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDAB86").s().p("Ah0A1QAdgcAPgzIAIgvQAggJAggEQA/gJABAWQACAYAdBHQAOAkAPAfIiMABQiFgFAhggg");
	this.shape_10.setTransform(41.6,141.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC686B").s().p("AgUGKQiTgIhqhmQhphlgNiTQgOiRBUh1QBUh1CMglQCMglB7BAIiNCJQgGAFgMACIgVADQhPAIg3A3Qg3A3gEBLQgFBMAvA+QAuA/BJAQQBMAQBFgmQBGgmAahKIAPhFQAKgnAdgVQAXgRAegfIAzg2QA/BtghCKQghCLhtBWQhrBTiFAAIgVAAg");
	this.shape_11.setTransform(119.4,98);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC686B").s().p("AnAHlQgJgBgKgMQgLgMgBgKQgEghAGgYQAHgdAYgWQBGhFB0h0IC6i4QAPgPAFgOQAGgPgFgTQgRhMATg7QAUg9A9gxQAigaArgvIBJhOIAYAAIATCbIAlggQAWgTASgIQAYgKAXAQQAIAFAbAeQAZAbgGAUQgGATgzA/QBWAIAcADQAHABAHADQAIADABAEQABAGgCAIQgCAIgFAFQhvBxhkBhQglAkhAgQQgwgLgnAOQgkANgkAnQg/BEhqBpIirCsQgXAWgeAFQgJABgLAAQgQAAgVgCg");
	this.shape_12.setTransform(168,48.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC686B").s().p("AhAMhQgogKhRgSQhJgRgugSQj4hjiIjoQiIjnAdkMQAckEC5jEQC6jEEEgsQD3gpDhBnQASAIAHAIQAIALgCARQgCAKAGAZQAXBhhVAuQjiiAjqA/QjTA5h4CwQh7CyATDVQAVDXCYCVQCdCZDYAPQDWAQCwiBQCyiDAvjYQAyjkh/jZIBGg5QAGgFAUgBIAQADQAKABAGgBQA1gKAdAeQAVAUAWA4QBACwgSC3QgSCwhaCaQhbCZiRBlQiYBoi4AbIg2AJg");
	this.shape_13.setTransform(119.3,98.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_Metaf, new cjs.Rectangle(5,0,211.1,178.2), null);


(lib.m02_tmr_graficos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSASQgIgHAAgLQAAgKAIgHQAIgIAKgBQALABAIAIQAHAHAAAKQAAALgHAHQgIAIgLABQgKgBgIgIgAgPgOQgGAGAAAIQAAAJAGAGQAHAHAIAAQAKAAAFgHQAHgGAAgJQAAgIgHgGQgFgHgKAAQgIAAgHAHg");
	this.shape.setTransform(31,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgIAKAAQALAAAHAIQAIAIAAAKQAAALgIAIQgHAHgLABQgKgBgIgHgAgPgOQgGAGAAAIQAAAJAGAGQAHAHAIAAQAJAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgJAAQgIAAgHAHg");
	this.shape_1.setTransform(22.9,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIgAgPgOQgGAGAAAIQAAAJAGAGQAHAHAIAAQAJAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgJAAQgIAAgHAHg");
	this.shape_2.setTransform(14.7,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7D6CA").s().p("AhkETIAAolIDIAAIAAIlg");
	this.shape_3.setTransform(257.9,95.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1DBAB9").s().p("AhkFXIAAqtIDIAAIAAKtg");
	this.shape_4.setTransform(257.9,128.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A7D6CA").s().p("AhjCqIAAlTIDHAAIAAFTg");
	this.shape_5.setTransform(301.9,124.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1DBAB9").s().p("AhjD/IAAn+IDHAAIAAH+g");
	this.shape_6.setTransform(301.9,137.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A7D6CA").s().p("AhkDgIAAm/IDJAAIAAG/g");
	this.shape_7.setTransform(346.1,97.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1DBAB9").s().p("AhjDyIAAnjIDIAAIAAHjg");
	this.shape_8.setTransform(346,140.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A7D6CA").s().p("AhjByIAAjjIDIAAIAADjg");
	this.shape_9.setTransform(213.8,106.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1DBAB9").s().p("AhjDyIAAnjIDIAAIAAHjg");
	this.shape_10.setTransform(213.8,137.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A7D6CA").s().p("ACPiyQBpB5AXCeIodBOg");
	this.shape_11.setTransform(125.4,91.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1DBAB9").s().p("AiTC7IEnnLIAAIhQigAAiHhWg");
	this.shape_12.setTransform(77.3,139.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C9E7F4").s().p("AhOFqQitiSgTjgQgTjiCSitIGhFgIkhHPQglgXgagXg");
	this.shape_13.setTransform(64.8,118.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#085466").s().p("AkQjqIIchNQAFAnAAAmQAADjigCfQifCgjiAAg");
	this.shape_14.setTransform(122.9,136.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C2D5A1").s().p("AmchTQBNhZBpgxQBug0B4AAQB6AABtA0QBqAxBMBZImdFlg");
	this.shape_15.setTransform(91.6,85.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#085466").s().p("AoCAQQgVgBAAgPQAAgPAVAAIQGAAQAUAAAAAPQAAAPgUABg");
	this.shape_16.setTransform(109.2,165.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_graficos, new cjs.Rectangle(12.1,25.1,344.1,142.3), null);


(lib.m2_tmr_baggage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#827978").s().p("AgJAGIgUAEQgIgDAAgLIAXgEQAfgBATAFIABABIgHANQgQgFgXABg");
	this.shape.setTransform(73.1,24.5,2.26,2.26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#827978").s().p("AgGAEQABgFAEgCIAFgCIADAEIgEAGIgEABQgDAAgCgCg");
	this.shape_1.setTransform(54.2,34.8,2.26,2.26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#827978").s().p("AgCABIAAgDIAFgBQgDADgCAEg");
	this.shape_2.setTransform(53.2,34.7,2.26,2.26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#827978").s().p("AAAgCIAGgBQgGAFgFACQACgEADgCg");
	this.shape_3.setTransform(89.5,39.2,2.26,2.26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#827978").s().p("AgBgBIADABIgBACg");
	this.shape_4.setTransform(55.6,33.9,2.26,2.26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#827978").s().p("AgEADIgEgCIASgEQgEADgCADIgEABIgEgBg");
	this.shape_5.setTransform(87.2,39.4,2.26,2.26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#827978").s().p("AAEAMQAAgZgbgIIAHgOIAIAEIAAgCQARAHAIARQAHANAAAaQgDgBgDACIgSAFQAEgLAAgNg");
	this.shape_6.setTransform(85.3,31.6,2.26,2.26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#827978").s().p("AgQAAQAPgQAYgHQAAANAHACQgOADgJAFQgKAIgLAPIgEgCQgDAAgDACIgFABQADgNAKgLg");
	this.shape_7.setTransform(59.4,28.6,2.26,2.26);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#312F31").s().p("AgLgBIAYgEIgGADIgCABIAAAEIgRADg");
	this.shape_8.setTransform(108.2,80.2,2.26,2.26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#312F31").s().p("AgDgEIAHABIAAAAIgBAHIgGACg");
	this.shape_9.setTransform(104.5,80.8,2.26,2.26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AD8660").s().p("AgfAMIABghIA+AKIAAAhg");
	this.shape_10.setTransform(67,77.4,2.26,2.26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C1986F").s().p("AgfAKIAAgeIA/ALIgBAeg");
	this.shape_11.setTransform(67.1,70,2.26,2.26);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4A4A").s().p("AgEgBIAJABIAAAAIgHACIAAAAIgCgDg");
	this.shape_12.setTransform(51.1,38.9,2.26,2.26);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D4A4A").s().p("AAAAOQgEAAgDgFQgDgFAAgFIAAgMIALABQACAGABgBIAHgDIAAALQAAAGgDAEQgDADgDAAIgCAAg");
	this.shape_13.setTransform(49.7,41.3,2.26,2.26);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4A4A").s().p("AAAAPQgEgBgEgFQgDgFAAgFIAAgNIAXAEIAAAMQAAAGgEAEQgDADgDAAIgCAAg");
	this.shape_14.setTransform(85,46.3,2.26,2.26);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4A4A").s().p("AAaBKIABgfIg/gKIAAAeIhjgQIAAgJIgHgBIgQhZIAAgXQAAgJAEgGQAFgFAGABIAyAHIAAAMQAAAGAEAFQADAFAFAAQAEABAEgEQADgEAAgGIAAgMIACAAICCASIAAANQAAAGADAFQAEAFAFABQAFABADgEQAEgEAAgGIAAgNIA4AIQAHABAFAHQAFAIAAAJIgDB8g");
	this.shape_15.setTransform(68.3,58,2.26,2.26);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4A4A").s().p("AgKAuIgBhfIAQBZIAHABIAAAJg");
	this.shape_16.setTransform(34.9,57.4,2.26,2.26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D4A4A").s().p("AABBLIADh8QAAgKgEgHQgEgIgHgBIAGABQAHABAFAIQAFAHAAAKIgDB8g");
	this.shape_17.setTransform(103.3,62.7,2.26,2.26);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D4A4A").s().p("AgJgJQABgFAEgEIAEgCIAFgBIAFABQgGgBgEAGQgEAGAAAJIAAAWg");
	this.shape_18.setTransform(33.4,41.1,2.26,2.26);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D4A4A").s().p("AgCA/IgBh2IACgIIAEAgIABBfg");
	this.shape_19.setTransform(31.5,53.3,2.26,2.26);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AD8660").s().p("AgDAEIgDgIIALABIACAHIAAABg");
	this.shape_20.setTransform(50.8,37.5,2.26,2.26);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AD8660").s().p("AgEADIgBgGIADAAQAFABADAGg");
	this.shape_21.setTransform(50.4,35.7,2.26,2.26);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD8660").s().p("AgFAEIAAgCQAAgCACgEIAGABIADAIg");
	this.shape_22.setTransform(48.5,37.2,2.26,2.26);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AD8660").s().p("AgDACQADgEACAAIACAFg");
	this.shape_23.setTransform(48.4,35.6,2.26,2.26);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AD8660").s().p("AgFAFIAAgJIAJABIACAGIgKACg");
	this.shape_24.setTransform(86.4,42.3,2.26,2.26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AD8660").s().p("AgFAAIAKgBIABABIAAABg");
	this.shape_25.setTransform(86.5,43.4,2.26,2.26);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AD8660").s().p("AgFAEIAAgCQABgEABgCIAJABIAAAJg");
	this.shape_26.setTransform(83.6,42.1,2.26,2.26);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AD8660").s().p("AgEADIAAgGIAEACIAFAFg");
	this.shape_27.setTransform(86.2,40.5,2.26,2.26);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AD8660").s().p("AgEACQADgFAGABIAAAGg");
	this.shape_28.setTransform(83.9,40.4,2.26,2.26);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2D2D2F").s().p("AB+BfIj/g6QgGgBgFgGQgFgIABgIIgBhsIBjAQIAAAiIA+ALIAAgiICCAVIgCB6QAAAHgFAGQgDAFgGABg");
	this.shape_29.setTransform(70.6,90.2,2.26,2.26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2D2D2F").s().p("AiCAsQgGgBgFgIQgFgHABgIIgBh0IAWAEIABBsQAAAIAFAIQAEAGAGABID/A6g");
	this.shape_30.setTransform(65.7,89.7,2.26,2.26);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#312F31").s().p("AgKAJIAAgBIgCgIIADAAIAAAAIAAgEQAEAEAFgCIAFgHIAIAMIgWAHg");
	this.shape_31.setTransform(54.8,36.6,2.26,2.26);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#312F31").s().p("AAFAFQgDgFgGgBIgDAAIAPgEIAAAEIAAACIAAADIAAACg");
	this.shape_32.setTransform(50.8,35.3,2.26,2.26);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#827978").s().p("AgNADIADABIAAgBIABgEQAGgCAFgGIAMARIgZACIgCgHg");
	this.shape_33.setTransform(90.4,40.7,2.26,2.26);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#827978").s().p("AgDg+IARgDIgDBvQAAALgYAJg");
	this.shape_34.setTransform(106.2,95.9,2.26,2.26);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#827978").s().p("AAAhNQAGADAEAGQAEAIAAAHIgDB+IgYAFg");
	this.shape_35.setTransform(108.7,62.2,2.26,2.26);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#827978").s().p("AAgBcIACh8QABgKgGgHQgFgIgHgBIg+gJIAAgBIgBgCIAagDIgMgSQAFABAEAFQADAFAAAFIAAACIA/AJIAEABIgPCbg");
	this.shape_36.setTransform(98.2,59.1,2.26,2.26);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#827978").s().p("AgZAAIgGAAQAGgDAKgCQAIgCAGABIAhAFQgCADAAAEIAAABg");
	this.shape_37.setTransform(40.3,36.4,2.26,2.26);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#827978").s().p("AgDA/QAEgGAAgHIACh1IAAAGIAHgCIgJCAIgKADQAEgBACgEg");
	this.shape_38.setTransform(102.9,96.1,2.26,2.26);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#827978").s().p("AhCgFIAXgGIBuAOQgCACgBAGIAAABg");
	this.shape_39.setTransform(67.7,40.1,2.26,2.26);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#827978").s().p("AgDgFIABgCQAGAFAAAJIAAABg");
	this.shape_40.setTransform(56.7,35.6,2.26,2.26);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#312F31").s().p("AABADIgFgFQAEABAEgBIgBAEIAAABg");
	this.shape_41.setTransform(87.2,40.8,2.26,2.26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m2_tmr_baggage, new cjs.Rectangle(30.7,22.4,81.3,89.3), null);


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


(lib.flechainstrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1,9.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCg1IAFBr");
	this.shape.setTransform(0.6,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,2.7,12.8), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgzIAFBn");
	this.shape.setTransform(0.6,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-0.9,2.7,12.4), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgyQAEBBABAf");
	this.shape.setTransform(0.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-0.9,2.7,11.7), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgyIAFBl");
	this.shape.setTransform(0.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-1,2.7,12.1), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgwQADAwACAy");
	this.shape.setTransform(0.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-0.9,2.6,11.9), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgvIAFBf");
	this.shape.setTransform(0.6,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-0.9,2.6,11.5), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADg3QgEBHgBAk");
	this.shape.setTransform(0.6,5.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,2.7,12.8), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgzIgFBn");
	this.shape.setTransform(0.6,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-0.9,2.7,12.4), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgwIgFBh");
	this.shape.setTransform(0.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-0.9,2.7,11.7), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgyIgFBl");
	this.shape.setTransform(0.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-1,2.7,12.1), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgxIgFBi");
	this.shape.setTransform(0.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-0.9,2.6,11.9), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgsQgDAugCAw");
	this.shape.setTransform(0.5,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-0.9,2.6,11.5), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AANgnIgZBP");
	this.shape.setTransform(1.5,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,4.6,10), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgJAeIATg7");
	this.shape.setTransform(1.2,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.7,-0.9,4,8.1), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgTgnQAbASAKBC");
	this.shape.setTransform(2.1,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.8,-0.8,5.8,10.5), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAUgnQgZARgMBD");
	this.shape.setTransform(2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,5.8,10.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgHgVIAPAr");
	this.shape.setTransform(1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.7,-0.9,3.5,6.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAOAmIgbhL");
	this.shape.setTransform(1.6,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.7,-0.9,4.7,9.6), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAbQgLgGgDgNQgDgMAHgMQAGgLAOgDQALgDAMAHQALAHADANQADAMgHALQgHAMgNACIgHABQgIAAgIgFg");
	this.shape.setTransform(3.2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,6.5,6.4), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9E7F4").s().p("Ai4EoQh7hMggiNQghiMBNh7QBMh6CNghQCMghB7BNQB6BNAhCMQAhCMhNB7QhNB7iNAgQgqAKgnAAQhfAAhWg2g");
	this.shape.setTransform(34.9,34.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(-0.1,0,70,70), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgUAUIgDAAIACgBQgFAAAHgFIAPgIQABgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIgDAAIgZAKQgLAFgEAAIgBAAIAAABIgEAAQgDAAAKgJIAHgDQAKgHAHgBIAJgCIABAAIgCgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAGgCQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAABAAQABgCAHgCIAAAAIADAAIABAAIAEgBIALAAIAFgBIABAAIgCgBIABgBIgCAAIADgBIAAAAIACgBQACgCALAAQAPAAgBABIgFACIAAABIgEAAIgBABIgFABIgBAAIAAACIALABIACACQgCADgGABIgKABIgGACIgBABIAAABIgFACIgUALIgFAEIAAABIgEABQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIAAAAIABAAIAAgBIAFgBIABgDIACgEIAKgIIgIAAIgcAOIABABIgDAAIgBACIgBAAIgBABIgLAAIgFgCIAEgBIAOgKIANgGIgDAAIAPgFIgLAAIgEgBIADgBIAFgBIASgFIAKgBIAAgBIANgBIABgBIgCgBIgCgBIAEAAIAAAAIACgCQADgCAMAAQAPAAgCACIgGACQACAAgCAAIgEACIgDAAIgCABIADAAIAGABIgBAAIAAAAIAMACIgLAFIgMADIgFAFIgDAAIgaAQIgCACIgDABIgJABQgCAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIAAAAIAAgBIABAAIAFgBIAAgDIADgEIAJgIIgHAAIgcAOIABABIgDAAIgBACIgBAAIgCABIgKAAIgFgCIAEgBIAOgKIAMgGIgDAAIAQgFIgLAAIgEgBQAAAAAAAAQAAAAAAAAQAAAAABgBQABAAABAAIAFgBIASgFIAKgBIAAgBIANgBIABgBIgCgBIAAAAQgBAAgBAAQAAABAAAAQgBAAABgBQAAAAAAgBIADAAIABAAIACgCQACgCANAAQAPAAgCACIgGACQACAAgCAAIgEABIAAAAIgEABIgBABIACAAIAHABIgBAAIAAAAIAMACIgEACIgHADIgNADIgFAFIgCAAIgaAQIgCACIgDABIgJABQgCAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgCATIgEgBIgIgBIABAAIACgBIAAAAIACAAIgBgDIAEgFIAAgBIAGgFIgCgBIgNAEIgEADIgCAAIgJAFIgDAAIgDACIgCAAIgFAAIgEgBIADgBIABAAIAAgCIAYgLIADgBIgDgBIgBABQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAEgCIAIgCIgDgBIABgBIAEgCIAPgDIAQAAIAAgBIAAAAIgCAAQAAgBAAAAQAAAAAAAAQgBgBABAAQAAAAAAAAQADgCADAAIAFAAIAIAAQAKABgEADIgJACIAAgBIgFABIABAAIABABIAIACIABABIgJAFIgOADIAAAAIgFABIAAAAIgBABIgHAEIgCADIgDAFIAAABIgBABIAAAAIAAABIgBAAIAEABQAAAAABABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgFAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,9.6,3.9), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgBATIgEgBQgHAAgBgBIABAAIACgBIgBAAIACAAIgBgDIAEgEIAAgBIACgCIAEgEIgCgBIgMAEIgEADIgCAAIgKAFIgDABIgEABIgFAAIgFgBIADAAIACgBIgBgCIAGgCIAEgCIADgBIAHgEIAFgCIACgBIgCAAIgCAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAIAMgEIgEgBIABgBIAEgCIAJgCIAHgBIACAAIAOAAIgBgBIgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQADgCAEAAIAFAAIAIAAQAJABgEADIgIACIgBgBIgEABIgBAAIABABIABAAIAIACIACABIgKAFIgIADIgEAAIgCAAIgFABIgBABIgJAHIAAABIgDAEIABABIgCABIABAAIgBABIAAAAIADABQABAAAAABQAAAAAAAAQAAAAgBAAQgBAAgBAAIgEAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,9.6,3.9), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgXAUIACgBQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEgDIAPgIQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgDAAQgLAEgOAGIgGADIgJACIgBAAIAAABIgEAAQgDAAAKgIIAHgEQAKgGAHgCIAJgCIABAAIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAIAIgDIAAgBIADAAIABAAIAPgBIAFgBIABAAIgCgBIABgBQgBAAgBABQAAAAAAAAQAAAAAAgBQAAAAAAAAIADgBIAAAAIACgBIANgCQAPAAgBABIgFACIAAABIgEABIgBAAIgFABIgBAAIAAACIALABIACACQgCADgGABIgKABIgGACIgBABIAAABIgZANIgFAFIAAAAIgEABQAAAAABAAQAAAAgBAAQAAAAAAABQAAAAgBAAIgDABg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIABAAIAAgBIAAAAIAFgBIABgDIACgEIAKgIIgIAAIgcAOIABABIgDAAIgBACIgBAAIgBABIgLAAIgFgCIAEgBIAOgKIANgGIgDAAIAPgFIgLAAIgEgBIADgBIAFgBIASgFIAXgDIACgBIgDgBIABAAIgDgBIAEAAIAAAAIACgCQADgCAMAAQAPAAgCACIgGACQACAAgBAAIgEABIgEABIgCAAIADABIAGABIgBAAIAAAAIAMACIgLAFIgMADIgFAFIgDAAIgaAQIgCACIgDABIgJABQgCAAAAAAQgBAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIABAAIAAgBIAAAAIAFgBIAAgDIADgEIAKgIIgIAAIgcAOIABABIgDAAIgCACIgBAAIgBABIgKAAIgFgCIAEgBIAOgKIANgGIgEAAIAPgFIgKAAIgEgBIADgBIAEgBIATgFIAWgDIACgBIgCgBIAAAAIgCgBIADAAIABAAIABgCQAEgCALAAQAPAAgCACIgFACQABAAAAAAIgEABIgCAAIgDABIgBAAIACABIAHABIgBAAIAAAAQAKAAABACIgDABIgHAEIgNADIgEAFIgDAAIgaAQIgCACIgDABIgKABQgBAAAAAAQgBAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIAAgBIABAAIAFgBIAAgCIADgFIAJgIIgHAAIgcAOIABABIgDAAIgBACIgBAAIgCABIgLAAIgEgDIAEAAIAOgKIAMgGIgDAAIAQgEIgLAAIgEgCIADgBIAFgBIASgFIAXgDIABgBIgCgBIAAAAIgCgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIABAAIABgCQAGgCAKAAQAPAAgCACIgGACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgEABIAAAAIgEABIgBAAIACABIAHABIgBAAIAMACIgEACIgHACIgNAFIgFAEIgCAAIgaAQIgCACIgDABIgJABg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIAAgBIABAAIAAgBIAFAAIABgDIACgEIAKgIIgIAAIgcAOIABABIgDAAIgBACIgBAAIgCABIgKAAIgFgDIAEAAIAOgKIANgHIgDAAIAPgDIgLgBIgEgBIADgBIAFgBIASgFIAKgCIAAAAIANgBIABgBIgCgBIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAEAAIACgCQAFgCAKAAQAPAAgCACIgGACQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBAAIgDABIgBAAIgEABIgBAAIADABIAGABIgBAAIAMACIgLAEIgMAEIgGAFIgCAAIgaAQIgCACIgDABIgJABg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgUAUIgDAAIABgBQgFAAAIgFIAPgIQABAAAAgBQABAAAAgBQAAAAAAAAQgBAAgBgBIgDABIgZAKQgLAFgFAAIAAABIgFAAQgCABAKgKIAHgDQAKgGAHgCIAJgBIABgBIgCgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAGgCQAAAAgBAAQAAAAAAgBQgBAAAAAAQABgBAAAAQABgCAHgCIAAAAIADAAIABAAIAUgCIABgBIgCAAIABgBIgCAAIADgBIACgBIANgCQAOABAAABIgFACIAAAAIgEAAIgBABIgFAAIgBABIAAABIALABIACADQgDADgFABIgKAAIgHAEIAAABIgFACIgUALIgFAFIAAAAIgEABQAAAAgBABQAAAAgBABQgBAAAAAAQgBAAAAAAg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgBATIgEgBQgIAAgBgBIABgBIACAAIAAAAIACgBIgBgCIACgCIACgDIAAgBIABgCIAFgEIgCAAIgNAEIgDACIgDABIgJAFIgDAAIAAAAIgEACIgGAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIADgBIABgBIAAgBIAKgFIADgBIAGgEIAIgCIgDgBIgBAAIgBAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAIgCIgDgBIABgCIAEgBIAJgDIAXAAIgBgBIgBgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAFgBIANAAQAKACgEABIgJACIAAAAIgFABIABAAIABAAIAIACIABABQAAABgEACIgFADIgIADIgEAAIgCAAIgCAAIgDABIAAAAIgKAHIAAABIgDAEIABABIgCACIABAAIgBABIAAAAIADABQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape.setTransform(4.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0.1,9.6,3.9), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIAAgBIABAAIAEgBIABgCIADgFIAJgIIgHAAIgcAOIABABIgDAAIgCACIgBAAIgBABIgLAAIgEgDIADAAIAPgKIAMgGIgDAAIAPgEIgKAAIgEgCIADgBIAEgBIASgFIAXgDIACgBIgDgBIABAAIgCgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIAAAAIACgCQAGgCAJAAQAPAAgCACIgFACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgEABIgBAAIgDABIgBAAIACABIAHABIgBAAIALACIgEACQgDACgDAAIgNAFIgFAEIgCAAIgaAQIgDACIgDABIgJABg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgSAUIAAAAIAAgBIABAAIAFgBIAAgDIADgEIAJgIIgHAAIgcAOIABABIgDAAIgBACIgBAAIgCABIgKAAIgFgCIAEgBIAOgKIAMgGIgDAAIAQgFIgLAAIgEgBIADgBIAFgBIASgFIAXgDIABgBIgCgBIAAAAIgCgBIADAAIABAAIACgCQACgCANAAQAPAAgCACIgGACQACAAgCAAIgDABIgFABIgBAAIACABIAHABIgBAAIAAAAIAMACIgEACIgHADIgNADIgFAFIgCAAIgaAQIgCACIgDABIgJABQgCAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape.setTransform(5.7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,11.3,4.4), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgXAUIACgBQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEgDIAPgIQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgDAAIgZAKQgIAFgHABIgBAAIAAAAIgEAAQgDAAAKgIIAHgEQAKgGAHgCIAJgCIABAAIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAIAIgDIAAAAIADgBIABAAIAPgBIAFgBIABAAIgCgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIADgBIAAAAIACgBIANgCQAPAAgBACIgFABQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgEABIgBAAIgFABIgBAAIAAACIALABIACACQgCADgGABIgKABIgGACIgBABIAAABIgZANIgFAFIAAAAIgEABQAAAAABAAQAAAAgBAAQAAAAAAABQAAAAgBAAIgDABg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgXAUIACAAQgBAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIAEgDIAPgIQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgDAAIgZAKQgIAFgHABIgBAAIAAAAIgEAAQgDAAAKgIIAHgEQAKgGAHgCIAJgBIABgBIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAIAIgDIAAAAIADgBIABAAIAPgBIAFgBIABAAIgCgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIADgBIAAAAIACgBIANgCQAPAAgBACIgFABQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgEABIgBAAIgFABIgBAAIAAACIALABIACACQgCADgGABIgKABIgGACIgBABIAAABIgZANIgFAFIAAAAIgEABIgBABIgDABg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgUAUIgDAAIACgBQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEgDIAPgIIACgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgDAAQgLADgOAHIgGADIgJACIgBAAIAAABIgEAAQgDAAAKgIIAHgEQAKgHAHgBIAJgCIABAAIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCIgBgBIAAgBQABgCAHgCIAAAAIADAAIABAAIAEgBIALAAIAFgBIABAAIgCgBIABgBIgCAAIADgBIAAAAIACgBQACgCALAAQAPAAgBABIgFACQABABgBAAIgDAAIgCABIgEABIgCAAIAAACIALABIACACQgCADgGABIgKABIgGACIgBABIAAABIgeARIAAABIgEABQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgUAUIgDAAIABgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEgDIAPgIIACgBQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgDAAIgZAKIgGADQgFACgFAAIAAABIgFAAQgCAAAKgIIAHgEQAKgGAHgCIAJgCIABAAIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgBQACgCAGgBIAAgBIADAAIABAAIAPgBIAFgBIABAAIgCgBIABgBIgCAAIADgBIAAAAIACgBIANgCQAPAAgBABIgFACIAAABIgEABIgBAAIgFABIgBAAIAAACIALABIACACQgDADgFABIgKABIgGACIgBABIAAABIgZANIgFAEIAAABIgEABIgBABIgDABg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgBATIgEgBIgIgBIAAAAIADgBIgBAAIACAAIgBgDIAEgFIAAAAIACgCIAEgEIgCgBIgNAEIgDADIgCAAIgKAFIgDAAIgDACIgBAAIgGAAIgEgBIADgBIACAAIgBgCIANgGIAGgDIAGgCIACgBIgCgBIgCABIgBgBIANgEIgEgBIABgBIAEgCIAJgCIAHgBIAPAAIABAAIgBgBIgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQACgCAEAAIAGAAIAHAAQAKABgEADIgIACIgBgBIgEABIAAAAIABABIAIACIABABIgJAFIgQAEIgDAAIAAAAIgHAFIgDADIAAABIgDAEIABABIgCABIABAAIgBABIAAAAIADABQAAAAAAABQAAAAAAAAQgBAAgBAAQAAAAgCAAIgCAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,9.6,3.9), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgXAUIABgBQAAAAgBAAQAAAAAAgBQgBAAABAAQAAAAAAgBIAEgDIAPgIIABgBQABgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgDAAIgYAKIgHADQgFACgFAAIgBABIgDAAQgDAAAKgIIAGgEQALgGAHgCIAJgCIABAAIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCIgBgBIAAgBQABgCAHgBIAAgBIAEAAIAAAAIAQgBIAEgBIABAAIgCgBIAAgBIgBAAIACgBIABAAIABgBIAOgCQAOAAAAABIgFACQABABgBAAIgDABIgCAAIgEABIgBAAIgBACIALABIABACQgBADgGABIgKABIgGACIgBABIAAABIgZANIgFAEIAAABIgDABIgCABIgDABg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgXAUIACgBQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEgDIAPgIQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIgDAAQgLAEgOAGQgIAFgHABIgBAAIgEAAQgDAAAKgIIAHgEQAKgGAHgCIAJgCIABAAIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAIAIgDIAAAAIADgBIABAAIAPgBIAFgBIABAAIgCgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIADgBIAAAAIACgBIANgCQAPAAgBABIgFACQAAAAABAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgEABIgBAAIgFABIgBAAIAAACIALABIACACQgCADgGABIgKABIgGACIgBABIAAABIgZANIgFAFIAAAAIgEABQAAAAABAAQAAAAgBAAQAAAAAAABQAAAAgBAAIgDABg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgXAUIACgBQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEgDIAPgIIACgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgEAAIgYAKQgIAFgIABIgBAAIgEAAQgDAAAKgIIAHgEQALgGAGgCIAJgCIABAAIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQADgDAFAAIAAAAIAEgBIAAAAIAQgBIAEgBIACAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIADgBIAAAAIACgBIAOgCQAOAAgBABQAAAAgBABQAAAAAAAAQgBAAgBABQgBAAgBAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgDABIgCAAIgEABIgBAAIgBACIALABIACACQgCADgGABIgJABIgHACIAAABIgBABIgZANIgFAFIABAAIgEABIgCABIgDABg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgBATIgEgBQgHAAgBgBIAAAAIADgBIgBAAIACAAIgBgDIAEgFIAAAAIACgCIAEgEIgCgBIgNAEIgDADIgCAAIgKAFIgDAAIgDACIgBAAIgGAAIgEgBIADgBIACAAIgBgCIANgGIAGgDIAGgCIACgBIgCAAIgCAAIgBgBIANgEIgEgBIABgBIAEgCIAJgCIAHgBIACAAIAOAAIgBgBIgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQACgCAEAAIAGAAIAIAAQAJABgEADIgIACIgBgBIgEABIgBAAIABABIABAAIAIACIABABIgJAFIgQAEIgDAAIgKAIIAAABIgDAEIABABIgCABIABAAIgBABIAAAAIADABQAAAAAAABQAAAAAAAAQgBAAgBAAQAAAAgCAAIgCAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,9.6,3.9), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgBATIgFgBQgHAAgBgBIABAAIACgBIAAAAIACAAIgBgDIAEgEIAAgBIABgCIAFgEIgCgBIgNAEIgDADIgDAAIgJAFIgDABIAAgBIgEACIgGAAIgEgBIADAAIABgBIAAgCIAGgCIAEgCIADgBIAGgEIAFgCIADgBIgDAAIgBAAIgBgBIAMgEIgDgBIABgBIAEgCIAJgCIAHgBIACAAIANAAIAAgBIgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQACgCAEAAIAFAAIAIAAQAKABgEADIgJACIAAgBIgFABIABABIABAAIAGABIACABIABABIgJAFIgOADIAAAAIgFABIgBABIgJAHIAAABIgDAEIABABIgCABIABAAIgBABIgBAAIAEABQAAAAAAABQABAAgBAAQAAAAAAAAQgBAAgBAAIgEAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0.1,0,9.6,3.9), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgXAUIACgBQgBAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAEgDIAPgIIACgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEAAIgYAKIgHADQgEACgFAAIgBABIgEAAQgDAAAKgIIAHgEQALgHAGgBIAJgCIABAAIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAGgCIgBgBIAAgBQABgCAHgBIAAgBIAEAAIAQgBIAEgBIACAAIgCgBIAAgBIgCAAIADgBIAAAAIACgBQACgCAMAAQAOAAgBABQAAAAgBABQAAAAAAAAQgBAAgBABQgBAAgBAAQABABgBAAIgDAAIgCABIgEABIgBAAIgBACIALABIACACQgCADgGABIgJABIgHACIAAABIgBABIgZANIgFAEIABABIgEABQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape.setTransform(5.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,10.8,4.2), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgCATIgEgBQgHAAgBgBIABAAIACgBIAAAAIACAAIgBgDIAEgEIAAgBIABgCIAFgEIgCgBIgNAEIgDADIgDAAIgJAFIgDABIgDABIgBAAIgGAAIgEgBIADAAIABgBIAAgCIAGgCIAEgCIADgBIAGgEIAFgCIADgBIgDAAIgBAAIgBgBIAMgEIgDgBIABgBIAEgCIAJgCIAGgBIADAAIANAAIAAgBIgCAAQAAgBAAAAQAAAAAAAAQgBgBABAAQAAAAAAAAQADgCADAAIAFAAIAIAAQAKABgEADIgJACIAAgBIgFABIABABIABAAIAIACIABABIgJAFIgOADIAAAAIgFABIgBABIgJAHIgDAFIAAABIgBABIAAAAIAAABIgBAAIAEABQAAAAABABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgFAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,9.6,3.9), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgBATIgEgBQgHAAgBgBIAAAAIADgBIgBAAIACAAIgBgDIACgCIACgDIAAAAIACgCIAEgEIgCgBIgNAEIgDADIgCAAIgKAFIgDAAIgDACIgBAAIgGAAIgEgBIADgBIACAAIgBgCIANgGIAGgDIAGgCIACgBIgCAAIgCAAIgBgBIANgEIgEgBIABgBIAEgCIAJgCIAHgBIACAAIAOAAIgBgBIgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQACgCAEAAIAGAAIAIAAQAJABgEADIgIACIgBgBIgEABIgBAAIABABIABAAIAIACIABABIgJAFIgQAEIgDAAIgKAIIAAABIgDAEIABABIgCABIABAAIgBABIAAAAIADABQAAAAAAABQAAAAAAAAQgBAAgBAAQAAAAgCAAIgCAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,9.6,3.9), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgBATIgEgBIgIgBIAAAAIADgBIgBAAIACAAIgBgDIAEgFIAAAAIACgCIAEgEIgCgBIgNAEIgDADIgCAAIgKAFIgDAAIgDACIgBAAIgGAAIgEgBIADgBIACAAIgBgCIAZgLIACgBIgCgBIgCABIgBgBIANgEIgEgBIABgBIAEgCIAQgDIAQAAIgBgBIgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQACgCAEAAIAGAAIAIAAQAJABgEADIgIACIgBgBIgEABIgBAAIABABIABAAIAIACIABABIgJAFIgQAEIgDAAIgBABIgGAEIgDADIAAABIgDAEIABABIgCABIABAAIgBABIAAAAIADABQAAAAAAABQAAAAAAAAQgBAAgBAAQAAAAgCAAIgCAAg");
	this.shape.setTransform(4.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,9.6,3.9), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj7CiQgZgBAAgXQAAgTABgSQAMheA/hGQA/hIBcgTQBdgUBYAnQBZAnAwBTQAMAUgVALQgWALgMgUQgqhHhPggQhPgghPAXQhRAXgxBFQgyBCACBUQAAAXgWAAIgCAAg");
	this.shape_1.setTransform(27.7,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,55.5,32.4), null);


(lib.CompoundPath_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIABgDIgBgBIAJgDIAAAAIAGgEIAGgCIABgCIADgCIAFgEIgGAAIgSAHIgDADIgDACIgCACIgBAAIgEADIgGACQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgGABQgBAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAIAFgCIABgBIAAAAQABgEADgCIAGgDQACgBACgDIgCAAIgDgBIAFgBIADgDIAMgHIAOgFIAGgCIABgBIAKgDQAJgCAIAAIAKAAIAEACIABABQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgGADIAFABQACABgFADIgSALIgDABIgIAAIAEAAIABgBIgBAAIgDABIgBAAIgBAAIgOAIIgOAFIgBAAIgCABIgBABIgBABIgNAGQgBAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAgAASACg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_65, new cjs.Rectangle(0,0,10.2,4.8), null);


(lib.CompoundPath_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgoAUQgDAAgDgDIAAgBIAHgCIAEgFIAFgCIABgBIAAAAIADgDIAEgDIAAAAIgDgEIABAAIAIgBIgCgBIAIgDIgBAAIAMgDIADgBIACgBIAMgFIANgBQAJAAAFABQABAAAAAAQABAAAAABQAAAAAAABQgBAAAAABIgGADIgCABQAAAAABAAQAAABAAAAQAAAAgBABQAAAAgBAAIAAABQgEADgEABIgGAAIgBABIADACIgGAAIgDACIgNAGIgDAAIgCACIgRAIQgEAEgBAAIgFgBIAAgCIgBAAIgBAAIAAgBIACgBIAGgBQACgBACgEIAFgCIABgBIgDAAIgCACIgRAIIgBACQAAABABAAQAAABAAAAQAAAAAAAAQAAABgBAAgAgKgGIADABIADAAIAAgBIAEgDIgCABIAAAAg");
	this.shape.setTransform(4.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_64, new cjs.Rectangle(0,0,9.4,4.2), null);


(lib.CompoundPath_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgTAWIAEgCIACgBIgDAAIABgBIACAAIALgGIACgCQABAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgIABQgOAEgDACIgGADIgGACIABABIgDAAIABABQAHACgQAAQAAAAgBAAQAAAAAAgBQAAgBABAAQAAgBAAgBIAFgGIAMgFIgXgEIAOgDIAQAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQACgDALgEIALgCIAUgCIAEgBIABAAIAAAAIgBAAIgEgBIADgBIABAAIACgCQAGgCAMAAQAFAAAEABIABABIgEACIgBABIgDAAIgDACIgFAAIAGACIAAAAIAFABIgHAHIgLAEIgCABIgFAGIgBACIgKAFIgLAEIABAAIAAABIgDAAIACABQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAgBAAIgGABg");
	this.shape.setTransform(5.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_63, new cjs.Rectangle(0,0,10.8,4.4), null);


(lib.CompoundPath_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAVIAHgBIAFgEQACgDgBgDIgCgCIABgBIgDAAIgDgBIgIAFIgRAFIAAABIAAAAIgBABIgEACIgBAAIACgCIgDACIAIgIIgYAAIATgIIAJAAIAEgBIABAAIABgBIAAAAIADgBIAMgEIAFgCIABAAIAEgDIABAAIAMgEIAFAAIACAAIADgBIABAAIgCgCIgCAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBABAAIABAAQADgBAHgBIAAgBIAKgBQAIAAgDABIgBABQAEABgEABIABAAQAAAAABABQAAAAAAAAQAAAAAAAAQgBAAAAABIgMACIACABIABAAIAGABIgCACIgKAEIgBABIgDABIgFABIgBACIgNAHIgCAAIAAABIABADIgIAFIgHAEIgFACg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_62, new cjs.Rectangle(0,0,11.1,4.3), null);


(lib.CompoundPath_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIABgDIgBgBIAGgCIADgBIAAAAIAGgEIAGgCIABgCIADgCIAFgEIgHAAIgRAHIgDADIgDACIgCACIgBAAIgEADIgGACQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgGABQgBAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAIAFgCIABgBIAAAAQABgEADgCIAGgDIAEgEIgCAAIgDgBIAFgBIADgDIAMgHIALgEIACAAIABgBIAGgCIABgBIAKgDQAIgCAJAAIAKAAQAFABAAACQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIgGADIAFABQACABgFADIgSALIgDABIgIAAIAEAAIABgBIgBAAIgDABIgBAAIgBAAIgIAEIgGAEIgOAFIgBAAIgCABIgBABIgBABIgNAGQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAgAASACg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_61, new cjs.Rectangle(0,0,10.2,4.8), null);


(lib.CompoundPath_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag0APIAJgEIABAAIgbgCIAQgHIAQAAIAEgBIABAAIAEgBIgBAAIAIgFIAPgGIAIgCIAHgBIAKAAIAMgBIABgBIgCgBIAAgCIAIgCQAMgCAKACQADACgFAAIgBABIgCAAIgBAAIACABIABAAIAAAAIABAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIgBACIABAAIABAAQAIADgBACIgDABIgIABIgPAAIgOAIIgEAAIgZAOQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgWACIgBAAIACgBIAFgCIAAgBQABgCAKgEIAGgFIgEAAIgEABIgEACIgIAEIgEAAIgBAAIgOAGIgEACIgEABIgBAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIAAABQgCAAAAgIgAApgOIAJABIADACIAAgCIAAAAIgFgBIgBgBIgEAAIgCAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_60, new cjs.Rectangle(0,0,13.9,4.5), null);


(lib.CompoundPath_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNATIAEgJIABgCIgCgCIgIAAIgBAAIgEADIgKAGIABAAIgCACIgBACIgDgCIgCgCIAEgGIAFgDIAAAAIgDAAQAGgGAHgCIAHgBIAFgCIABgCIgJAEIgYAEIgBABIAFgBIAEAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIgGACIgCAAIgFgBQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAgBABAAIAYgFIAQgGIAIgBIAIgBIgEAAIgGgBIACgBIAGgEIAfgBIACABIADACIgEACQgDACgFAAIgIAAIACABIAJAAIAFABIAGADQABAAABABQABAAAAAAQABABAAAAQAAAAAAAAIgWAFIgIAAIgOAFIgBABIgPAOIgCgBgAAVgFIgCACIADABIgBABIADAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_59, new cjs.Rectangle(0,0,9.8,4.1), null);


(lib.CompoundPath_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNAVIgEgBIACgBIgBgBIAEgBIgCAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIADgDQADgCAEgGIgLAAIgRAHQgHAFgHACIgDAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgEABIADgJIAPgJIgBAAIgCAAIgBgBIACAAIAEgDIAFgCIAFgDIAIgCIATgCIAFgBIABgBIgCgBIAAAAIAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIADAAIABAAIABgCQADgCANAAQAQAAgCACIgFACQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEABIgCAAIgEABIgBABIADAAQANAAAEABQABABABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgCACgIACIgCABIABAAIgHABIgJgBIAHgBIAGgDIgBgDIgJAEIgDADIAAAAIAAAAIAHABIgHAAIAAABIgNAJIgGAFIgDABIACABIgEABIgBAAIAAABIAAABg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_58, new cjs.Rectangle(0,0,10.2,4.2), null);


(lib.CompoundPath_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgvARQADgEACgBIAMgFIgYgEIAfgEQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgCALgFIALgDIAPAAIAKgCIABgBIgBABQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIABAAIABgCIATgCIAJABQABAAAAAAQAAAAAAAAQABAAgBABQAAAAAAAAIgEACQABAAAAAAQAAAAAAAAQAAAAAAAAQgBABgBAAIgDAAIgIACIAFACIABAAIAFAAQgEAGgDABIgNAGIgFAGIgBACIgVAJIABAAIAAABIgDAAIACABQgDACgFAAIgNAAIACgCIAEgBIgDAAIABgBIACAAIALgHIACgBQACgBgCgEIgIACIgRAFIgGAEIgGACIAAABIgCAAIABABQAGACgPAAQgCAAACgFg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_57, new cjs.Rectangle(0,0,10.9,4.5), null);


(lib.CompoundPath_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AguASQACgFACgBIANgFIgFgBIgTgDIAegEQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQADgEAKgDIALgCIAPgBIAKgCIABgBIgCABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABAAIAAAAIACgCIATgCIAIABIABABIgDACQAAAAAAAAQABAAgBAAQAAAAAAAAQgBABAAAAIgEAAIgDACIgEAAIAFACIAAAAIAFAAQgDAGgDACIgOAFQgEAEAAACIgCACIgVAJIACAAIAAABIgEAAIACABQAAAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgFABIgOAAIADgCIACAAIACgBIgEAAIACgBIABAAIALgGIADgCQABgBgCgEIgIACIgRAFIgFAEIgGACIAAABIgDAAIACABQAHACgRAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBg");
	this.shape.setTransform(5.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_56, new cjs.Rectangle(0,0,10.9,4.5), null);


(lib.CompoundPath_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgTAWIACgCIAEgBIgDAAIABgBIACAAIALgHIACgBQACgBgDgDIgHABIgRAFIgGAEIgGACIAAABIgCAAIABABQAFACgOAAQAAAAgBAAQAAgBAAAAQAAgBABgBQAAAAAAgBQADgFACgBIAMgFIgYgEIAegDIAAgEQACgDAKgDIALgDIAZgCIABgBIgBAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABAAIABgCQAHgCAMAAIAJABQABAAAAAAQAAAAAAAAQABABgBAAQAAAAAAABIgEABIgBAAIgGACIgFABIAFABIABABIAFABQgEAFgDABIgNAGIgFAGIgBACIgVAJIABAAIAAABIgDAAIACAAQAAABAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIgGABg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_55, new cjs.Rectangle(0,0,10.9,4.4), null);


(lib.CompoundPath_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgoAUQgDAAgCgDIgBgBIAEgBIADgBQACgEACgBIAFgCIABgBIAAAAIAHgGIAAAAIgDgEIAJAAIgCgCIAIgDIAAAAIALgDIADgBIADgBQAFgDAGgBQAGgCAHAAIAOABQABAAAAAAQABABAAAAQAAABAAAAQgBABAAAAQgCACgEABIgCABQAAAAAAAAQABAAAAABQgBAAAAAAQAAABgBAAIAAABQgDADgFABIgGABIgBAAIADACIgGAAIgDACIgMAGIgDAAIgDACIgRAIQgDAEgCAAQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIAAgCIgBABIgBgBIABAAIABgBIAEgBIACgBIAEgFIAFgBIABgCIgCAAIgDACIgRAIIgBACQAAABABAAQAAABAAAAQAAAAAAABQAAAAgBAAIgEgBgAgKgGIADABIADAAIAAgBIAEgDIgCABIAAAAg");
	this.shape.setTransform(4.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_54, new cjs.Rectangle(0,0,9.4,4.2), null);


(lib.CompoundPath_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNATIADgJIACgCIgCgCIgIAAIgBAAIgEADIgKAFIAAABIgBACIgCABIgEgDQACgFACgBIAFgDIAAAAIgDgBQAGgFAHgCIAHgBIAFgCIABgCIgJAEIgZAEIAAABIAAAAIAEgBIAFAAQABAAAAAAQABAAAAAAQAAAAgBABQAAAAgBAAIgFABIADAAIAAABIgLgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBABAAIAYgFIAQgGIAPgCIgDAAIgGgBIACgBIAFgEIAfgBIADABIADACIgEACQgDACgGAAIgHAAIACABIAIAAIAFABQANAEgCABIgXAFIgHAAIgOAFIgBAAQgOAPgCAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAgAAVgFIgCACIADABIgBABIADAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_53, new cjs.Rectangle(0,0,9.8,4.1), null);


(lib.CompoundPath_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIAAgDIgBgBIAKgDIgBAAIAHgEIAGgDIAAgBIAJgGIgHAAIgRAHIgDADIgEACIgCACIgBAAIgEADIgFACQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgHABIAGgDIACAAIgBAAQACgFACgCIAHgDQACgBACgDIgDAAIgCgBIAFgBIACgCIAFgEIASgIIADAAIAAgBIAHgCIABgBIAJgCIASgDIAEABIAGAAIAEABIAAACQABAAAAAAQAAAAABAAQAAABAAAAQAAAAgBAAIgGADIAGABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAgBABIgGAEIgJAGIgEABIgDABIgIAAIAAAAIgIAEIgHAEIgOAGIAAAAIgCAAIgCABIAAABIgOAGQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAgAARACIABAAIABAAIACgBIACAAIgBAAIgDABg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_52, new cjs.Rectangle(0.1,0,10.1,4.8), null);


(lib.CompoundPath_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag1AUQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAKgEIgbgCIARgHIAPAAIAEgBIACAAIACgBIABAAIgBAAIAIgFIAXgIIAdgCIACgBIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCIAJgCQARgBAEACIgCABIgBABIgCAAIgBABIACAAIABAAIABAAIADABIgBACIABAAIAAAAIABABIAAAAQAIADAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgIACIgQgBIgOAIIgDAAIgKAGIgMAGIgEACIAAACIgWACIgCAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAFgCIAAgBQABgBAKgFIAGgFIgDAAIgRAHIgEAAIgBAAIgOAGIgEADIgEAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAgAApgOIAJACIADABIAAgBIABAAIgBgBIAAAAIgFgBIAAgBIgBAAIgDAAIgDAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_51, new cjs.Rectangle(0,0,14,4.5), null);


(lib.CompoundPath_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAVIAHgBIAFgEQACgDgBgDIgCgCIABgBIgDAAIgDgBIgIAFIgRAFIAAABIAAAAIgBABIgEACIgBAAIACgCIgDACQAEgGAEgCIgYAAIASgIIAKAAIAEgBIABAAIABgBIAAAAIADgBIAMgEIAFgCIABAAIAEgDIAAAAIANgEIAFAAIACAAIADAAIABgBIgCgCIgCAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBABAAIAAAAQAFgBAGgBIAAgBIAKgBQAIAAgDABIgBABQAEABgEABIABAAQAAAAABABQAAAAAAAAQAAAAAAAAQgBAAAAABIgMACIgBAAIADABIABAAIAGABIgCACIgKAEIgBABIgDABIgFABIgBACIgNAHIgCAAIAAABIABADIgIAFIgHAEIgFACg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_50, new cjs.Rectangle(0,0,11.1,4.3), null);


(lib.CompoundPath_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIACgBIgBgBIAEgBIgBgBIAFgEIAHgJIgLAAIgRAGIgGAEIgIADIgDABQgBAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIgEABIADgJIAPgIIgBgBIgBAAIgBgBIABAAIAEgDIAFgCIAGgDIAHgDIAYgCIABgBIgCgBIAAAAIgCgBIADgBIABAAIABgBQAGgCAKAAQAQAAgCACIgFACQABAAgBAAIgEABIgGABIgBABIAUACQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgMAFIABAAIgHAAIgJAAIAHgBIAGgDIAAgDIgKAEIgDACIAAABIAHAAIgHACIgNAJIgGAFIgDABIACABIgEABIgBAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQABABgBAAIgJAAIgFgBgAgRgDIgFACIgBABIAFgBIABgBIAHgDIACgBg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_49, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIACgBIgBgBIAEgBIgBgBIAFgEIAHgJIgLAAIgRAGIgGAEIgIADIgDABQgBAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIgEABIADgJIAPgIIgBgBIgBAAIgBgBIABAAIAEgDIAFgCIAGgDQADgCAEAAIAUgCIAEgBIABgBIgCgBIAAAAIgCgBIADgBIABAAIABgBQAGgCAKAAQAQAAgCACIgFACQABAAgBAAIgEABIgGABIgBABIAUACQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgMAFIABAAIgHAAIgJAAIAHgBIAGgDIAAgDIgKAEIgDACIAAABIAHAAIgHACIgNAJIgFAFIgEABIACABIgEABIgBAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQABABgBAAIgJAAQgCAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgRgDIgFACIgBABIAFgBIABgBIAHgDIACgBg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_48, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag0APIAJgEIABAAIgbgCIARgHIAPAAIAEgBIACAAIADgBIAAAAIgBAAIAIgFIAPgGIAIgCIAIgBIAJAAIAMgBIACgBIgBAAIgCgBIAAgCIAJgCQALgCAKACQABABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgBABIgCAAIgBAAIADABIAAAAIAAAAIABAAQABAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIgBACIABAAIABAAQAIADAAACIgDABIgIABIgQAAIgOAIIgDAAIgKAFQgGAEgGADIgEACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgWACIgCAAIACgBIAFgCIAAgBQABgCALgEIAFgFIgDAAIgFABIgEACIgHAEIgEAAIgBAAIgOAGIgFACIgEABQAAABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgBABQgCAAABgIgAAqgOIAIABIADACIABgCIgBAAIgFgBIAAgBIgEAAIgDAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_47, new cjs.Rectangle(0,0,14,4.5), null);


(lib.CompoundPath_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIACgBIAAAAIgBgBIAEgBIgCgBIAGgEIAHgJIgLAAIgRAGIgGAEIgIADIgDABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgEABIADgJIAPgIIgBgBIgCAAIgBgBIACAAIAEgDIAFgCIAFgDIAIgCIATgCIAFgBIABgBIgCgBIAAAAIgCgBIADgBIACgBQAGgCAKAAQAQAAgDACIgFACQACAAgCAAIgDABIgCAAIgEABIgBABIADAAIARACQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgKAEIgCABIABAAIgIAAIgGAAIAFAAIgHACIgNAJIgGAFQgBAAAAAAQgBAAgBABQAAAAAAAAQAAAAAAAAIABABIgDABIgBAAIAAABIgBABIgJAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgRgDIgFACIgBABIAFgBIABgBIAHgDIABgBgAAZgDIgDACIAAABIAHgBIAGgDIgBgDg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_46, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag1ATQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAKgEIgbgCIAQgHIAQAAIAEgBIABAAIADgBIABAAIgBAAIAIgFIAPgGIAIgCIAHAAIAKgBIAIgBIAEAAIACgBIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAgCIAIgCQARgBAFACIgCABIgBABIgDAAIAAABIACAAIABAAIABAAIADABIgBACIACABQAIADgBABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgIACIgPgBIgOAIIgEAAIgWAMIgDACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBABIgWACIgBAAIACgBIAFgCIAAgBIALgGIAGgFIgEAAIgIADIgIAEIgEAAIgBAAIgLAFIgHAEIgFAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBgBgAApgOIAAAAIAJABIADACIAAgBIABAAIgBgBIAAAAIAAAAIgFgBIgBgBIABAAIgBAAIgEAAIgCAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_45, new cjs.Rectangle(0,0,13.9,4.5), null);


(lib.CompoundPath_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIABgDIgBgBIAJgDIAAAAIAGgEIAGgDIABgBIADgCIAFgEIgHAAIgRAHIgDADIgDACIgCACIgBAAIgEADIgGACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgGABQgDAAAJgDIABAAIAAAAQABgFADgCIAGgDQACgBACgDIgCAAIgDgBIAFgBIADgDIAXgLIACAAIABgBIAGgCIABgBIAKgCIARgDIAEABIAGAAIAEABIABACQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgGADIAFABQABAAAAAAQAAABgBAAQAAABgBAAQgBABgBABIgFAEIgKAGIgDABIgLABIgBAAIgIAEIgGAEIgOAGIgBAAIgCAAIgBABIgBABIgNAGQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAgAATABIgBABIAEgBIABgBIgBAAg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_44, new cjs.Rectangle(0,0,10.3,4.8), null);


(lib.CompoundPath_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgTAWIACgCIAEgBIgDAAIABgBIACAAIALgHIACgBQACgBgDgDIgHABIgRAFIgGAEIgGACIAAABIgCAAIABABQAFACgOAAQAAAAgBAAQAAgBAAAAQAAgBABgBQAAAAAAgBQADgFACgBIAMgFIgYgEIAegDIAAgEQACgDAKgDIALgDIAZgCIABgBIgBAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIABAAIABgCQAHgCAMAAIAJABQABAAAAAAQAAAAAAAAQABABgBAAQAAAAAAABIgEABIgBAAIgGACIgFABIAFABIABABIAFABQgEAFgDABIgNAGIgFAGIgBACIgVAJIABAAIAAABIgDAAIACABQgDACgFAAg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_43, new cjs.Rectangle(0,0,10.9,4.4), null);


(lib.CompoundPath_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgwAWQAAAAAAAAQAAgBAAAAQAAgBAAgBQABgBAAgBQACgEACgBIANgFIgYgEIAOgDIAQgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQABgCAMgEIALgDIAZgCIABAAIAAgBIgCAAQAAABgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIACgCQAGgCANAAIAIABQAEAAgDABIgDACQAAAAABAAQAAAAAAAAQgBAAAAAAQAAABgBAAIgDAAIgEABIgEABIAFABIAAABIAGAAQgEAGgDABIgNAGIgFAGIgBACIgWAJIACAAIAAABIgDAAIACABQgDACgFAAIgNAAIACgCIAEgBIgEAAIACgBIACAAIALgHIACgBQACgBgDgEIgIACIgQAFIgGAEIgGACIAAABIgCAAIABABQAAAAABAAQAAABAAAAQgBAAAAAAQgBABgBAAIgEAAIgEAAg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_42, new cjs.Rectangle(0,0,11,4.4), null);


(lib.CompoundPath_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNATIADgJIACgCIgCgCIgIAAIgBAAIgEADIgKAFIAAABIgBACIgCACIgEgEQACgFACgBIAFgDIAAAAIgDgBQAGgFAHgCIAHgBIAFgCIABgCIgJAEIgZAEIAAABIAAAAIAEgBIAFAAQABAAAAAAQABAAAAAAQAAAAgBABQAAAAgBAAIgFABIADAAIAAABIgLgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBABAAIAYgFIAQgGIAIgBIAIgBIgEAAIgGgBIACgBIAFgEIAfgBIADABIADACIgEACQgDACgGAAIgHAAIACABIAIAAIAGABIAGADQABAAABABQABAAAAAAQABABAAAAQAAAAAAAAIgXAFIgHAAIgOAFIgBAAQgOAPgCAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAgAAVgFIgCACIADABQAAAAAAAAQABAAAAAAQgBAAAAABQAAAAgBAAIADAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_41, new cjs.Rectangle(0,0,9.8,4.1), null);


(lib.CompoundPath_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgLAUQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAEgJIABgCIgCgCIgIAAIgBAAIgEADIgKAFIABABIgDADQgBABgEgEIAEgGIAFgDIAAAAIgDgBQAGgFAHgCIAHgBIAFgCIABgCIgJAEIgYAEIAEAAIAEAAQABAAAAAAQABAAAAAAQAAABAAAAQgBAAAAAAIgGABIADAAIAAABIgKgBQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAAAABgBIAYgFIAQgGIAQgCIgEAAIgGgBIACgBIAGgEIAfgBIACABIADACQAAAAAAABQAAAAAAAAQgBAAgBABQgBAAgBAAQgDACgFAAIgIAAIACABIAJAAIAFABQALAEgBABIgWAFIgIAAIgOAFIgBAAQgOAPgBAAIAAAAgAAVgFIgCACIADABIgBABIADAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_40, new cjs.Rectangle(0,0,9.8,4), null);


(lib.CompoundPath_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgoAUQgDAAgCgDIAAgBIAGgCIAEgFIAHgDIgBAAIAAAAIAEgDQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABgBIABAAIgEgEIABAAIAIAAIgCgCIAJgDIgBAAIAOgEIADgBQAHgEAEAAQAGgCAHAAQAJAAAFABQABAAAAAAQABABAAAAQAAABgBAAQAAABAAAAIgGADIgCABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIAAABQgDADgFABIgGAAIAAABIACACIgFAAIgEACIgMAGIgDAAIgDACIgRAIQgDAEgCAAQgEAAgBgBIAAgCIgCAAIABgBIABAAIAEgBIACgBIAEgFIAFgCIABgBIgCAAIgDACIgRAIIgBACQAAABABAAQAAABAAAAQAAAAAAAAQgBABAAAAgAgJgGIACABIADAAIABgBIADgDIgCABIAAAAg");
	this.shape.setTransform(4.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_39, new cjs.Rectangle(0,0,9.4,4.2), null);


(lib.CompoundPath_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNAVIgEgBIACgBIgBgBIAEgBIgCAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIADgCQADgCAEgHIgLAAIgRAHQgHAFgHACIgDAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgEABIADgJIAPgIIgBgBIgCAAIgBgBIACAAIAEgDIAFgCIAFgDIAIgCIATgCIAFgBIABAAIgCgCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIADAAIABAAIABgCQAEgCAMAAQAQAAgCACIgFACQABAAgBAAIgGACIgEAAIgBABIADABQANAAAEABQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgCACgIABIgCABIABAAIgHABIgJgBIAHgBIAGgDIgBgDIgJAEIgDADIAAAAIAAAAIAHABIgHABIAAAAIgNAJIgGAFIgDABIACABIgEABIgBAAIAAABIAAABg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_38, new cjs.Rectangle(0,0,10.2,4.2), null);


(lib.CompoundPath_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIACgBIAAAAIgBgBIAEgBIgCgBIAGgEIAHgJIgLAAIgRAHQgHAFgHABIgDABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgEABIADgJIAPgIIgBgBIgCAAIgBgBIACAAIAEgDIAFgCIAFgDIAIgCIATgCIAFgBIABgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAAAIgCgBIADAAIACgCQAGgCAKAAQAQAAgDACIgFACQACAAgCAAIgEABIgBAAIgEABIgBABIADABIARABQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgKAEIgCABIABAAIgIAAIgGAAIAFAAIgHACIgNAJIgGAFQgBAAAAAAQgBAAgBABQAAAAAAAAQAAAAAAAAIABABIgDABIgBAAIAAABIgBABIgJAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgRgDIgFACIgBABIAFgBIABgBIAHgDIABgBgAAZgDIgDACIAAABIAHgBIAGgDIgBgDg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_37, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIADgBIgBAAIgBgBIAEgBIgBgBIAGgEIAGgJIgLAAIgRAHQgHAFgGABIgEABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgEABIADgJIAPgIIgBgBIgBAAIgBgBIACAAIADgDIAFgCIAGgDQADgCAEAAIAUgCIAEgBIABgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIgCgBIADAAIABAAIABgCQAGgCAKAAQAQAAgCACIgFACQABAAgBAAIgEABIgGABIgBABIAEABQAMAAAEABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgMAFIABAAIgHAAIgJAAIAHgBQAFgCABgBIAAgDIgKAEIgDACIAAABIAHAAIgHACIgNAJIgFAFIgEABIACABIgEABIAAAAIgBABQABABgBAAIgJAAQgCAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgRgDIgFACIgBABIAFgBIABgBIAHgDIACgBg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_36, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIABgDIgBgBIAGgCIADgBIAAAAIAGgEIAGgCIABgCIADgCIAFgEIgHAAIgRAHIgDADIgDACIgDACIgBAAIgDADIgGACIgBgCIgGABQgBAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAIAEgCIACgBIAAAAQABgEADgCIAGgDIAEgEIgCAAIgDgBIAFgBIADgDIAEgDIAIgEIALgEIACAAIABgBIAGgCIABgBIAJgDQAJgCAJAAIAKAAQAFABAAACQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBAAIgFADIAFABQACABgFADIgSALIgEABIgHAAIAEAAIABgBIgBAAIgDABIgBAAIgBAAIgIAEIgGAEIgOAFIgBAAIgCABIgCACIgNAGQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAgAASACg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_35, new cjs.Rectangle(0,0,10.2,4.8), null);


(lib.CompoundPath_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIAAgDQgBAAABgBIAJgDIgBAAIAHgEIAGgDIAAgBIAJgGIgHAAIgRAHIgDADIgEACIgCACIgBAAIgEADIgFACQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgHABIAGgDIACAAIgBAAQACgFACgCIAHgDQACgBACgDIgDAAIgCgBIAFgBIACgCIAMgHIAMgFIACAAIAAgBIAHgCIABgBIAFgBIAEgBIASgDIAEABIAGAAIAEABIABACQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgGADIAGABQAAAAAAABQAAAAAAAAQAAABgBABQgBAAgBABIgGAEIgJAGIgEABIgDABIgIAAIAAAAIgIAEIgHAEIgOAGIAAAAIgCAAIgCABIAAABIgOAGQAAAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAgAARACIABAAIABAAIACgBIACAAIgBAAIgDABg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_34, new cjs.Rectangle(0.1,0,10.1,4.8), null);


(lib.CompoundPath_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIABgDIgBgBIAJgDIAAAAIAGgEIAGgDIABgBIADgCIAFgEIgGAAIgJAEIgJADIgDADIgDACIgCACIgBAAIgEADIgGACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgGABQgDAAAJgDIABAAIAAAAQABgFADgCIAGgDQACgBACgDIgCAAIgDgBIAFgBIADgDIAMgGIALgFIACAAIABgBIAGgCIABgBIAFgBIAFgBIARgDIAEABIAGAAIAEABIABACQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgGADIAFABQABAAAAAAQAAABgBAAQAAABgBAAQgBABgBABIgFAEIgKAGIgDABIgLABIgBAAIgHAEIgHAEIgOAGIgBAAIgCAAIgBABIgBABIgNAGQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAgAATABIgBABIAEgBIABgBIgBAAg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_33, new cjs.Rectangle(0,0,10.3,4.8), null);


(lib.CompoundPath_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWQAAgBAAAAQABgBAAAAQAAAAAAgBQAAAAgBAAIAAgBIAJgDIgBAAIAHgEIAGgDIABgBIAIgGIgHAAIgIAEIgJADIgDADIgGAEIgBAAQgBACgDABIgFACQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgGABQgCAAAHgDIACAAIAAAAQABgFADgCIAGgDIAEgEIgDAAIgCgBIAFgBIACgCIAFgEIATgIIACAAIAAgBIAHgCIABgBIAFgBIAEgBIASgDIAEABIAGAAIAEABIABACQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAgBAAIgGADIAGABQACABgFADIgGAEIgJAGIgDABIgEABIgHAAIgBAAIgIAEIgHAEIgQAGIgCACIgNAGQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAgAASACIAAAAIABAAIACgBIACAAIgBAAIgDABg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_32, new cjs.Rectangle(0,0,10.2,4.8), null);


(lib.CompoundPath_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAUIgBgBIACgEIABgFIACgCIgCgCIgJAAIAAAAIgEADIgLAFIABABIgDADQgBABgEgEIAFgHIAFgDIgEAAQAHgFAHgCIAHgBIAFgCIABgCIgJAEIgZAEIAJgBQABABAAAAQAAAAABAAQAAABgBAAQAAAAgBAAIgFABIACAAIAAABIgKgBIAAAAQAAAAgBAAQgBgBAAAAQAAAAAAAAQAAAAABgBIAYgFIAHgDQAFgDAEAAIAIgBIAHgBIgDAAIgGgBIACgBQADgDACgBIAfgBIADAAIADADIgEACIgJACIgHAAIACABIAIAAIAFABQANAEgDABQgEADgSACIgHAAIgOAFIgBAAQgOAPgBAAIgBAAgAAUgFIgBACIADAAIgBACIABAAIACAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_31, new cjs.Rectangle(0,0,9.8,4), null);


(lib.CompoundPath_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgvAWQgBAAAAAAQAAgBAAAAQAAgBAAgBQABgBAAgBQADgEACgBIAMgFIgXgEIAOgDIAQgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABgCAMgEIALgDIAOAAIAKgCIABAAIAAgBIgBABQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIABAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAGgCAMAAIAJABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgEACQABAAAAAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgDAAIgDABIgFABIAFABIABABIAFAAQgEAGgDABIgNAGIgFAGIgBACIgVAJIABAAIAAABIgDAAIACABQgDACgFAAIgNAAIADgCIABAAIACgBIgDAAIABgBIACAAIALgHIACgBQACgBgCgEIgIACIgRAFIgGAEQgBABgFABIABABIgDAAIABABQABAAAAAAQAAABAAAAQAAAAgBAAQgBABgBAAIgEAAIgDAAg");
	this.shape.setTransform(5.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_30, new cjs.Rectangle(0,0,10.9,4.4), null);


(lib.CompoundPath_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgTAWIACgCIAEgBIgDAAIABgBIACAAIALgHIACgBQACgBgCgDIgIABIgRAFIgGAEIgGACIABABIgDAAIABABQAHACgQAAQgBAAAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBIAFgHIAMgEIgXgEIAOgDIAQAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAAAABgBQACgDAKgDIALgDIAVgBIAEgBIABAAIAAgBIgBAAIgEAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIABAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQAGgCAMAAIAJABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEACIgBAAIgDABIgDABIgFABIAFABIABABIAFABQgEAEgDACIgLAFIgCABIgFAGIgBACIgKAEIgLAFIABAAIAAABIgDAAIACAAQAAABAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAIgGABg");
	this.shape.setTransform(5.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_29, new cjs.Rectangle(0,0,10.9,4.4), null);


(lib.CompoundPath_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgTAWIADgBIACgBIACgBIgEAAIACgBIABAAIALgGIADgCQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgIABQgOAEgDACIgFADIgGACIAAABIgDAAIACABQAHACgRAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBIAEgGIANgFIgYgEIAegDIgBgDQACgDALgEIALgCIAPgBIAKgCIABgBIgCABIgDgBIADgBIAAAAIACgCQAHgCAMAAQAEgBAEACIABABIgDACQAAAAAAAAQABAAgBAAQAAAAAAAAQgBAAAAABIgEAAIgDACIgEAAIAFACIAAAAIAFAAQgDAGgDACIgOAFIgEAGIgCACIgVAJIACAAIAAABIgEAAIACABQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgFABg");
	this.shape.setTransform(5.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_28, new cjs.Rectangle(0,0,10.9,4.5), null);


(lib.CompoundPath_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgLAVIADgBIADAAIAFgEQACgDgBgDIgBgCIAAgBIgGAAIgIAEIgRAGIAAAAIABABIgGACIgBAAIADgBIgEABQAEgGAEgCIgYAAIATgIIAJAAIAEgBIABAAIABgBIADgBIAMgDIAFgDIABgBIAAAAIAEgCIABAAIASgEIABAAIADgBIABAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIADAAIABAAQADgCAHgBIAAAAQADgCAHAAQAHABgBABIgCAAQAFABgFACIABAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAABIgMACIADABIAGABIgCACIgKAEIABAAIgCABIgDABIgFACIgBABIgNAHIgCAAIAAABIABADIgIAFIgGAEIgGACg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_27, new cjs.Rectangle(0,0,11.1,4.4), null);


(lib.CompoundPath_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAWIAEgBIAAAAIADgBIAFgEQADgDgCgCIgCgDIABgBIgGAAIgEABIgEADIgRAFIAAABIAAAAIgBABIgEACIgBAAIACgCIgDACQAEgGAEgCIgYAAIASgIIAKAAIAEgBIABAAIABgBIADgBIAMgEIAFgCIABAAIAEgDIAAAAIASgEIACAAIACAAIACgBIgCgCIAAAAIgCAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABAAQAFgBAGgBIAAgBIAKgBQAIAAgDABIgBABQAEABgEABIABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgFAAIgIACIACABIAIABIgDACIgJAFIgBAAIgBAAIgCABIgFABIgBACIgNAHIgCAAIgBABIACADIgFADQgBAAAAAAQgBABgBAAQAAABAAAAQAAAAAAAAIgHAFIgFABg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_26, new cjs.Rectangle(0,0,11.1,4.3), null);


(lib.CompoundPath_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag1ATQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgEIABAAIgbgCIARgHIAPAAIAEgBIACAAIADgBIgBAAIAIgFIAXgIIAIAAIAVgCIABgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgCIAJgCQAQgBAFACIgCABIgBABIgCAAIgBABIACAAIABAAIABAAIADABIgBACIABAAIAAAAIABABIAAAAQAIADAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgIACIgQgBIgOAIIgDAAIgWAMIgEACIAAACIgWACIgCAAIACgBIAFgCIAAgBIALgGIAGgFIgEAAIgIADIgIAEIgEAAIgBAAIgOAGIgEADIgEAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBgAApgOIAJABIADACIAAgBIABAAIgBgBIgFgBIgBgBIABAAIgBAAIgEAAIgCAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_25, new cjs.Rectangle(0,0,14,4.5), null);


(lib.CompoundPath_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag1ATQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBIAKgEIgbgCIAQgHIAQAAIAEgBIABAAIAEgBIgBAAIAIgFIAPgGIAIgCIAHgBIAKAAIAMgBIACgBIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgCIAIgCQAMgCAKACIgCACIAAAAIgBABIgCAAIgBAAIACABIABAAIABAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIgBACIACABIAAgBQAIAEgBABIgDABIgIACIgPgBIgOAIIgEAAIgWAMIgDACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgWACIgBAAIACgBIAFgCIAAgBIALgGIAGgFIgEAAIgIADIgIAEIgEAAIgBAAIgLAFIgDABIgEACIgFABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIAAABQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBgBgAApgOIAJABIADACIAAgBIABgBIgBAAIAAAAIgFgBIgBgBIgEAAIgCAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_24, new cjs.Rectangle(0,0,13.9,4.5), null);


(lib.CompoundPath_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag1ATQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBIAKgEIgbgCIARgHIAPAAIAEgBIACAAIADgBIgBAAIAIgFIAXgIIAIgBIAJAAIAMgBIACgBIgBAAIgCgBIAAgCIAJgCQALgCAKACQABABAAAAQAAAAgBABQAAAAAAAAQgBAAgBAAIgBABIgCAAIgBAAIACABIABAAIABAAIADABIgBACIABAAIABAAQAIADAAACIgDABIgIACIgQgBIgOAIIgDAAIgaAOIAAACIgWACIgCAAIACgBIAFgCIAAgBQABgCAKgEIAGgFIgDAAIgJADIgIAEIgEAAIgBAAIgOAGIgEACIgEABQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgBABQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBgAApgOIAJABIADACIAAgBIABgBIgBAAIAAAAIgFgBIAAgBIgBAAIgDAAIgDAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_23, new cjs.Rectangle(0,0,14,4.5), null);


(lib.CompoundPath_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNAVQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIACgBIgBgBIAEgBIgCgBIAGgEQADgCAEgHIgLAAIgRAHQgHAFgHABIgDABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgEABIADgJIAPgIIgBgBIgCAAIgBgBIACAAIAEgDIAFgCIAFgDIAIgCIATgCIAFgBIABgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAAAIAAAAIgCgBIADAAIABAAIABgCQAEgCAMAAQAQAAgCACIgFACQABAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgGABIgBABIADABQANAAAEABQABAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgKADIgCABIABAAIgIAAIgIAAIAHgBIAGgDIgBgDIgJAEIgDADIAAAAIAHAAIgHACIAAAAIgNAJIgGAFQgBAAAAAAQgBAAgBABQAAAAAAAAQAAAAAAAAIACABIgEABIgBAAIAAABIAAABgAgRgDIgFADIgBAAIAFgBIABgBIAHgDIABgBg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_22, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgoAUQgDAAgCgDIgBgBIAFgBIACgBIAEgFIAFgBIACgCIgBAAIAHgGIABAAIgEgEIABAAIAIgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAJgDIgBAAIALgEIADAAIADgBQAEgDAHgBIANgCIAOABQABAAAAAAQABABAAAAQAAAAAAABQgBAAAAABQgCADgEAAIgCABIAAAAIgBADIAAAAQgDADgFABIgGAAIAAABIACACIgFABIgEABIgMAFIgDABIgUALQgDADgCAAIgFgBIAAgCIgBABIgBAAIACgCIAEgBIACgBQACgBACgDIAFgCIABgBIgCAAIgDABIgRAIIgBADQAAAAABAAQAAABAAAAQAAAAAAABQgBAAAAAAgAgKgGIADABIADgBIABAAIADgCIgCAAIAAAAg");
	this.shape.setTransform(4.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_21, new cjs.Rectangle(0,0,9.4,4.2), null);


(lib.CompoundPath_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAVIAHgBIAFgEQACgDgBgDIgCgCIABgBIgDAAIgDgBIgIAFIgRAFIAAABIAAAAIgBABIgEACIgBAAIACgCIgDACQAEgGAEgCIgYAAIASgIIAKAAIAEgBIABAAIABgBIAAAAIADgBIAMgEIAFgCIABAAIAEgDIAAAAIANgEIAFAAIACAAIADgBIABAAIgCgCIgCAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABgBABAAIAAAAQAFgBAGgBIAAgBIAKgBQAIAAgDABIgBABQAEABgEABIABAAQAAAAABABQAAAAAAAAQAAAAAAAAQgBAAAAABIgMACIgBAAIADABIABAAIAGABIgCACIgKAEIgBABIgDABIgFABIgBACIgNAHIgCAAIAAABIABADIgIAFIgHAEIgFACg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_20, new cjs.Rectangle(0,0,11.1,4.3), null);


(lib.CompoundPath_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAWIAEgBIADgBIAFgEQADgDgCgCQAAgBgBAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIABgBIgGAAIgEABIgEADIgRAGIAAAAIAAAAIgBABIgEACIgBAAIACgCIgDACIAIgIIgYAAIATgIIAJAAIAEgBIABAAIABgBIAAAAIAPgFIAFgCIABAAIAEgDIABAAIARgEIACAAIADAAIABgBIgCgCIgCAAIADgCIABAAQADgBAHgBIAAgBIAKgBQAIABgDABIgBAAQABAAABABQAAAAAAAAQAAABgBAAQAAABgBAAIABAAQABAAgBABIgMACIACABIABAAIAGABIgCACIgOAGIgFABIgBACIgNAHIgCAAIAAABQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAIgFADQgBAAAAAAQgBABAAAAQgBABAAAAQAAAAAAAAIgHAFIgFABg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_19, new cjs.Rectangle(0,0,11,4.3), null);


(lib.CompoundPath_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgTAWIADgCIADgBIgDAAIACgBIABAAIALgHIADgBQABgBgCgDIgIABIgQAFIgHAEIgGACIABABIgDAAIABABQAIACgRAAQAAAAAAAAQgBgBABAAQAAgBAAgBQAAAAABgBQACgFACgBIAMgFIgXgEIAOgDIAQAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQACgDALgDIALgDIAYgCIABAAIAAgBIgBAAIgDAAQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIABAAIACgCQAGgCAMAAIAJABIABABIgEACQABAAAAAAQAAAAAAAAQAAAAAAAAQgBAAgBAAIgGACIgEABIAFABIAAABIAFABQgEAFgDABIgKAFIgDABIgFAGIgBACIgVAJIACAAIAAABIgEAAIACAAQAAABAAAAQABAAgBAAQAAAAAAABQgBAAAAAAIgGABg");
	this.shape.setTransform(5.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_18, new cjs.Rectangle(0,0,10.8,4.4), null);


(lib.CompoundPath_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMATIADgJIABgCIgCgCIgIAAIgBAAIgEADIgKAFIABABIgBACIgCACIgFgEQACgFACgBIAFgDIABAAIgEgBQAGgFAHgCIAIgBIAFgCIAAgCIgJAEIgYAEIgBABIABAAIAEgBIAEAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIgGABIAAAAIAAABIgCAAIgFgBQgBAAgBAAQAAgBgBAAQAAAAAAAAQABgBAAAAIAZgFIAPgGIAJgBIAHgBIgEAAIgGgBIACgBIAGgEIAfgBIACABIADACIgEACQgDACgFAAIgHAAIABABIAJAAIAFABQALAFgBAAIgWAFIgHAAIgOAFIgCAAQgOAPgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAgAAVgFIgBACIACABQABAAAAAAQAAAAAAAAQAAAAgBABQAAAAgBAAIADAAQAHAAAIgEIgJgDg");
	this.shape.setTransform(4.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_17, new cjs.Rectangle(0,0,9.7,4.1), null);


(lib.CompoundPath_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNATIAEgJIABgCIgCgCIgIAAIgBAAIgEADIgKAGIABAAIgCACIgBACIgDgCIgCgCIAEgGIAFgDIAAAAIgDAAQAGgGAHgCIAHgBIAFgCIABgCIgJAEIgEABIgUADIgBABIAFgBIAEAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAAAAAIgGACIgCAAIgFgBQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAgBABAAIAYgFIAQgGIAQgCIgEAAIgGgBIACgBIAGgEIAfgBIACABIADACIgEACQgDACgFAAIgHAAIABABIAJAAIAFABIAGADQABAAABABQABAAAAAAQABABAAAAQAAAAAAAAIgWAFIgIAAIgOAFIgBABIgPAOIgCgBgAAVgFIgCACIADABIgBABIADAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_16, new cjs.Rectangle(0,0,9.8,4.1), null);


(lib.CompoundPath_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgTAWIAEgCIACgBIgDAAIABgBIACAAIALgGIACgCQABAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAIgIABQgOAEgDACIgGADIgGACIABABIgDAAIABABQAHACgQAAQAAAAgBAAQAAAAAAgBQAAgBABAAQAAgBAAgBIAFgGIAMgFIgXgEIAOgDIAQAAIgBgDQACgDALgEIALgCIAOgBIAKgCIABAAIAAgBIgBABIgEgBIADgBIABAAIACgCQAGgCAMAAQAFAAAEABIABABIgEACQABAAAAAAQAAAAAAAAQAAAAAAAAQgBAAgBABIgDAAIgDACIgFAAIAFACIABAAIAFAAQgEAGgDACIgNAFIgFAGIgBACIgVAJIABAAIAAABIgDAAIACABQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAgBAAIgGABg");
	this.shape.setTransform(5.4,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_15, new cjs.Rectangle(0,0,10.8,4.4), null);


(lib.CompoundPath_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNATIADgJIACgCIgCgCIgIAAIgBAAIgEADIgLAFIABABIgBACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgBABgDgEQACgFACgBIAFgDIAAAAIgDgBQAGgFAHgCIAHgBIAFgCIAAAAIABgCIgJAEIgZAEIAAABIAAAAIAEgBIAFAAQABAAAAAAQABAAAAAAQAAAAAAABQgBAAgBAAIgFABIADAAIAAABIgLgBQAAAAgBAAQgBgBAAAAQAAAAAAAAQAAgBABAAIAYgFIAQgGIAIgBIAHgBIgDAAIgGgBIACgBIAFgEIAfgBIADABIADACIgEACQgDACgGAAIgHAAIACABIAIAAIAFABQANAEgDABIgWAFIgHAAIgOAFIgBAAQgOAPgCAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAgAAVgFIgCACIADABIgBABIADAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_14, new cjs.Rectangle(0,0,9.8,4.1), null);


(lib.CompoundPath_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNATIAEgJIABgCIgCgCIgIAAIgBABIgEADIgKAFIABAAIgBACIgCACQgBAAgEgEQACgFACgBIAFgDIAAAAIgDAAQAGgGAHgBIAHgCIAFgCIABgCIgJAEIgYAFIAIgBQABAAAAAAQABAAAAABQAAAAAAAAQgBAAAAABIgGABIADAAIAAAAIgLAAIABgBQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAAAABAAIAQgEIAIgCIAQgGIAIAAIAIgBIgEAAIgGgCIACgBIAGgDQAEgCAKAAIAJAAIAIAAIACABIADACIgEADIgIABIgHAAQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAJAAIAFACQALAEgBABIgWAEIgIAAIgOAGIgBAAIgPAOQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAAVgFIgCACIADABIgBABIADAAQAGAAAJgDIgJgEg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_13, new cjs.Rectangle(0,0,9.8,4.1), null);


(lib.CompoundPath_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAUIgBgBIADgJIACgCIgCgCIgIAAIgBAAIgEADIgKAFIAAABIgBABIgCACIgEgDIAEgHIAFgCIAAgBIgDAAQAGgFAHgCIAHgBIAFgCIABgCIgJAEIgZAEIAJgBQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIgFABIADAAIAAABIgLgBIAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABgBIAYgFIAHgDQAFgDAEAAIAIgBIAIgBIgEAAIgGgBIACgBQADgDACgBIAfgBIADAAIADADIgEACIgJACIgHAAIACABIAIAAIAGABQALAEgBABQgGADgRACIgHAAIgOAFIgBAAQgOAPgCAAIAAAAgAAVgFIgCACIADAAIgBACIABAAIACAAQAGAAAJgEIgJgDg");
	this.shape.setTransform(4.9,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_12, new cjs.Rectangle(0,0,9.8,4), null);


(lib.CompoundPath_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgMAWIAEgBIADgBIAFgEQACgDgBgCIgCgDIABgBIgGAAIgEABIgEADIgRAGIAAAAIAAAAIgBACIgEABIgBAAIACgBIgDABQAEgGAEgCIgYAAIATgIIAJAAIAEgBIABAAIABgBIAAAAIAPgEIAFgDIABAAIAEgDIAAAAIASgEIACAAIADAAIABgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgCAAIADgBIABAAQADgCAHgBQACgBAIgBQAIABgDABIgBAAQAEABgEACIABAAQABABgBAAIgFAAIgHACIAJACIgCACIgKAFIgBAAIgDABIgFACIgBABIgNAHIgCAAIAAABIABADIgFADQgBAAAAABQgBAAgBAAQAAABAAAAQAAAAAAAAIgHAFIgFABg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_11, new cjs.Rectangle(0,0,11.1,4.3), null);


(lib.CompoundPath_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag1AUQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgEIABAAIgbgCIARgHIAPAAIAEgBIACAAIACgBIABAAIgBAAIAIgFIAXgIIAIAAIAJgBIAMgBIACgBIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgCIAJgCQARgBAEACIgCABIgBABIgCAAIgBABIACAAIABAAIABAAIADABIgBACIABAAIAAAAIABABIAAAAQAIADAAABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgIACIgQgBIgOAIIgDAAIgWAMIgEACIAAACIgWACIgCAAIACgBIAFgCIAAgBIALgGIAGgFIgEAAIgQAHIgEAAIgBAAIgOAGIgEADIgEAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAgAApgOIAJACIADABIAAgBIABAAIgBgBIgFgBIgBgBIABAAIgBAAIgEAAIgCAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_10, new cjs.Rectangle(0,0,14,4.5), null);


(lib.CompoundPath_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIADgCIgBAAIgBAAIAEgBIgBgBIAGgEIAGgJIgLAAIgRAGQgHAGgGABIgEABQAAAAAAAAQABAAAAAAQAAABgBAAQAAAAAAAAIgEABIADgJIAPgJIgBgBIgBABIgBgBIACAAIADgDIAFgCIANgGIAUgBIAFgCIgCgBIAAAAIgCgBIADgBIABAAIABgBQADgCANAAQAQAAgCABIgFACQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIgEABIgCAAIgEABIgBABIAEAAQANAAADACQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgMAFIABAAIgHAAIgJAAIAHgBIAGgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgKAEIgDACIAAABIAHAAIgHACIgNAJIgFAFIgEABIACAAIgEACIAAAAIAAABIgBABIgJAAIgFgBgAgRgDIgFACIgBABIACAAIADgBIABgBIAHgDIACgBg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_9, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIACgBIgBgBIAEgBIgCgBIAGgEIAHgJIgLAAIgRAGIgGAEIgIADIgDABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgEABIADgJIAPgIIgBgBIgCAAIgBgBIACAAIAEgDIAFgCIANgGIAYgCIABgBIgCgBIAAAAIgCgBIADgBIABAAIABgBQAGgCAKAAQAQAAgCACIgFACQABAAgBAAIgEABIgGABIgBABIADAAIARACQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgKAEIgCABIABAAIgIAAIgIAAIAHgBIAGgDIgBgDIgJAEIgDACIAAABIAHAAIgHACIgNAJIgGAFQgBAAAAAAQgBAAgBABQAAAAAAAAQAAAAAAAAIACABIgEABIgBAAIAAABQABABgBAAIgKAAgAgRgDIgFACIgBABIAFgBIABgBIAHgDIABgBg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_8, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIABgDQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBABAAIAJgDIAAAAIAGgEIAGgCIABgCIADgCIAFgEIgGAAIgSAIIgDACIgDACIgCACIgBAAIgEADIgGACQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgGABQgBAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAIAFgCIABgBIAAAAQABgEADgCIAGgDIAEgEIgCAAIgDgBIAFgBIADgDIAMgHIAOgFIAGgBIABgCIAKgCQAHgDAKAAIAKABQAFAAAAACQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIgGACIAFABQABAAAAABQAAAAgBAAQAAABgBABQgBAAgBABIgFAEIgKAGIgDABIgLACIgBgBIgHAEIgHAEIgOAFIgBAAIgCABIgBABIgBACIgNAFIgBAAIABgCgAATACIgBAAIAEAAIABgBIgBAAg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_7, new cjs.Rectangle(0,0,10.2,4.8), null);


(lib.CompoundPath_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIAAgDIgBgBIAKgDIgBAAIAHgEIAFgCIABgCIAJgGIgHAAIgRAHIgDADIgEACIgCACIgBAAIgEADIgFACQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAIgHABIAGgDIACAAIgBAAQACgFACgCIAHgDIAEgEIgDAAIgCgBIAFgBIACgCIAEgEIATgIIADAAIAAgBIAHgCIABgBIAJgCIASgDIAEABIAGAAIAEABIAAACQABAAAAAAQABAAAAAAQAAABAAAAQgBAAAAAAIgGADIAGABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAgBABIgTALIgDABIgIAAIAAAAIgIAEIgHAEIgOAGIAAAAIgCAAIgCABIgBABIgNAGQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAgAARACIABAAIABAAIACgBIACAAIgBAAIgDABg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_6, new cjs.Rectangle(0.1,0,10.1,4.8), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgdAWIAAgDIgBgBIAKgDIgBAAIAHgEIAGgCIAAgCIAEgCIAFgEIgHAAIgRAHIgDADIgEACIgCACIgBAAIgEADIgFACQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgHABIAGgDIACgBIgBAAQACgEACgCIAHgDQACgBACgDIgDAAIgCgBIAFgBIACgDIAFgDIASgIIADAAIAAgBIAHgCIABgBIAJgDQAIgCAKAAIAEAAIAGAAIAEACIAAABQABABAAAAQAAAAABAAQAAABAAAAQAAAAgBAAIgGADIAGABQABABgEADIgTALIgDABIgIAAIAAAAIgIAEIgHAEIgOAFIAAAAIgCABIgCABIAAABIgOAGQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAgAASACIADAAIACgBIgBAAg");
	this.shape.setTransform(5.1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0.1,0,10.1,4.8), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgoAUQgDAAgCgDIgBgBIAFgBIACgBIAEgFIAFgBIACgCIgBAAIAEgDIADgDIABAAIgEgDIABgBIAIAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAgBIAJgDIgBAAIALgDIADgBIADgBQAFgDAGgBQAGgCAHAAIAOABQABAAAAABQABAAAAAAQAAABAAAAQgBABAAAAQgCADgEABIgCAAIAAAAIgBACIAAABIAAAAQgDADgFABIgGABIAAAAIACACIgFAAIgEACIgMAGIgDAAIgDACIgRAIQgDAEgCAAIgFgBIAAgCIgBABIgBgBIABAAIABgBIAEgBIACgBQACgBACgEIAFgBIABgCIgCAAIgDACIgRAIIgBACQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgEgBgAgKgGIADABIADAAIAEgEIgCABIAAAAg");
	this.shape.setTransform(4.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,9.4,4.2), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgoAUQgDAAgCgDIAAgBIAGgCIAEgFIAFgCIACgBIgBAAIAEgDIADgDIABAAIgEgEIACAAIAHgBIgBgBIAIgDIgBAAIALgDIAEgBIACgBIALgFIANgBQAKAAAEABQABAAAAAAQABAAAAABQAAAAgBABQAAAAAAABQgCACgEABIgCABQABAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIAAABQgDADgFABIgGAAIAAABIACACIgFAAIgEACIgMAGIgDAAIgCACIgRAIQgEAEgCAAIgFgBIAAgCIgBAAIgBAAIABgBIABgBIAGgBQADgBACgEIAEgCIACgBIgDAAIgDACIgRAIIgBACQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAgAgJgGIACABIADAAIABgBIADgDIgBABIgBAAg");
	this.shape.setTransform(4.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,9.4,4.2), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgLAWIAGgCIAFgEQADgDgCgCIgBgDIAAgBIgGAAIgEABIgEADIgRAGIABAAIgGADIgBAAIADgCIgEACIAIgIIgYAAIATgIIAJAAIAEgBIABAAIABgBIAEgBIARgGIAAAAIAEgDIABAAIASgEIABAAIADAAIABgBIgCgCIgCAAIADgCIABAAIAKgCIAAgBIAKgBQAIAAgCABIgCABQABAAABABQAAAAAAAAQAAAAAAABQgBAAgBABIABAAQABAAgBABIgFAAIgHACIACABIABAAIAGABIgCACIgKAFIABAAIgCAAIAAAAIgDABIgFABIgBACIgNAHIgCAAIAAABIABADIgFADQgBAAAAAAQgBABgBAAQAAABAAAAQAAAAAAAAIgGAFIgGABg");
	this.shape.setTransform(5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,11.1,4.3), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgNAVQgBAAgBAAQAAAAgBAAQgBAAAAgBQAAAAAAAAIACgBIgCgBIAEgBIgBgBIAGgEIAGgJIgKAAIgRAHQgHAFgHABIgDABQAAAAAAAAQgBAAAAAAQAAABABAAQAAAAAAAAIgEABIACgJIAQgIIgBgBIgCAAIgBgBIACAAIADgDIAGgCIAFgDQAEgCAEAAIATgCIAEgBIACgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAIABAAIgCgBIADAAIAAAAIACgCQAEgCAMAAQAPAAgCACIgFACQABAAgBAAIgEABIgBAAIgEABIgBABIADABQANAAAEABQAGACgFAFIgLADIgBABIABAAIgIAAIgFAAIAEAAIgHACIAAAAIgOAJIgFAFIgDABIABABIgDABIgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgBABgAgSgDIgFADIgBAAIAFgBIACgBIAHgDIABgBgAAZgDIgDADIAAAAIAHgBQAFgCAAgBIAAgDg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,10.3,4.3), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AgRAUIACgBIgBgBIAEgBIgBgBIAFgEIAHgJIgLAAIgRAHQgHAFgHABIgDABQgBAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIgEABIADgJIAPgIIgBgBIgBAAIgBgBIABAAIAEgDIAFgCIAGgDQADgCAEAAIAUgCIAEgBIABgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAIAAAAIgCgBIADAAIABAAIABgCQAGgCAKAAQAQAAgCACIgFACQABAAgBAAIgEABIgGABIgBABIAEABQAMAAAEABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgMAFIABAAIgHAAIgJAAIAHgBQAFgCABgBIAAgDIgKAEIgDACIAAABIAHAAIgHACIgNAJIgFAFIgEABIACABIgEABIgBAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQABABgBAAIgJAAQgCAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAgAgRgDIgFACIgBABIAFgBIABgBIAHgDIACgBg");
	this.shape.setTransform(5.1,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,10.2,4.3), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("Ag1AUQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgEIABAAIgbgCIARgHIANAAIACAAIAEgBIACAAIACgBIABAAIgBAAIAIgFIAXgIIAIAAIARgBIAEgBIACgBIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgCIAJgCQARgBAEACIgCABIgBABIgCAAIgBABIACAAIABAAIABAAIADACIgBABIABABIAAgBIABABIAAAAQAIADAAABIgDACIgIABIgQgBIgOAIIgDAAIgKAGIgMAGIgEACIAAACQgBABgVABIgCAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAFgCIAAgBIALgGIAGgFIgDAAIgJADIgIAEIgFAAIgOAGIgEADIgEAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAgAApgOIAJACIADACIAAgCIABAAIgBgBIAAAAIgFgBIAAgBIgBAAIgDABIgDAAg");
	this.shape.setTransform(7,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,14,4.5), null);


(lib.Group_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgCgyIAFBl");
	this.shape_1.setTransform(0.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17_1, new cjs.Rectangle(-0.7,-1,2.7,12.1), null);


(lib.Group_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgCgwIAFBh");
	this.shape_1.setTransform(0.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16_1, new cjs.Rectangle(-0.7,-0.9,2.6,11.8), null);


(lib.Group_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgCgvQADAuACAs");
	this.shape_1.setTransform(0.6,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15_1, new cjs.Rectangle(-0.7,-1,2.6,11.2), null);


(lib.Group_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgCgxQADAwACAu");
	this.shape_1.setTransform(0.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14_1, new cjs.Rectangle(-0.7,-0.9,2.6,11.5), null);


(lib.Group_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgCguIAFBd");
	this.shape_1.setTransform(0.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13_1, new cjs.Rectangle(-0.7,-1,2.6,11.3), null);


(lib.Group_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgCgsIAFBZ");
	this.shape_1.setTransform(0.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12_1, new cjs.Rectangle(-0.7,-1,2.6,11), null);


(lib.Group_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AADgvQgDAwgCA0");
	this.shape_1.setTransform(0.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11_1, new cjs.Rectangle(-0.7,-1,2.6,12.1), null);


(lib.Group_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AADgwQgDAwgCAx");
	this.shape_1.setTransform(0.5,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10_1, new cjs.Rectangle(-0.7,-0.9,2.6,11.8), null);


(lib.Group_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AADgvQgDAugCAs");
	this.shape_1.setTransform(0.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_1, new cjs.Rectangle(-0.7,-1,2.6,11.2), null);


(lib.Group_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AADguIgFBd");
	this.shape_1.setTransform(0.6,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8_1, new cjs.Rectangle(-0.7,-0.9,2.6,11.5), null);


(lib.Group_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AADgtQgDAtgCAv");
	this.shape_1.setTransform(0.5,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_1, new cjs.Rectangle(-0.7,-1,2.6,11.3), null);


(lib.Group_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AADgqQgDAegCA7");
	this.shape_1.setTransform(0.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_1, new cjs.Rectangle(-0.7,-1,2.6,11), null);


(lib.Group_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAMglIgXBL");
	this.shape_1.setTransform(1.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(-0.7,-0.9,4.4,9.6), null);


(lib.Group_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgIAcIARg3");
	this.shape_1.setTransform(1.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(-0.8,-0.9,3.8,7.7), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgSglQAZARAKA+");
	this.shape_1.setTransform(2,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(-0.8,-0.8,5.6,10), null);


(lib.Group_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AATglQgZARgKA+");
	this.shape_1.setTransform(1.9,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(-0.7,-0.8,5.6,10), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgGgUIANAp");
	this.shape_1.setTransform(0.9,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(-0.8,-0.9,3.5,6.2), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6379B7").ss(0.5).p("AANAkIgZhH");
	this.shape_2.setTransform(1.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(-0.8,-0.9,4.6,9.1), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAiIgjAEIArhjIA4AYIgrBjg");
	mask.setTransform(5,6.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AgTAuIAnhb");
	this.shape.setTransform(3.3,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AgSAvIAlhc");
	this.shape_1.setTransform(6.8,7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.3,0,9.5,12.5), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxglIA4gYIArBjIgjgEIgWAcg");
	mask.setTransform(5,6.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AAUAuIgnhb");
	this.shape.setTransform(6.7,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AATAvIglhc");
	this.shape_1.setTransform(3.1,7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0.2,0,9.5,12.5), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAiIgjAEIArhjIA4AYIgrBjg");
	mask.setTransform(5,6.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AgTAuIAnhb");
	this.shape.setTransform(3.3,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AgSAvIAlhc");
	this.shape_1.setTransform(6.8,7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0.3,0,9.5,12.5), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxglIA4gYIArBjIgjgEIgWAcg");
	mask.setTransform(5,6.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AAUAuIgnhb");
	this.shape.setTransform(6.7,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AATAvIglhc");
	this.shape_1.setTransform(3.1,7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.2,0,9.5,12.5), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAiIgjAEIArhjIA4AYIgrBjg");
	mask.setTransform(5,6.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AgTAuIAnhb");
	this.shape.setTransform(3.3,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AgSAvIAlhc");
	this.shape_1.setTransform(6.8,7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.3,0,9.5,12.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxglIA4gYIArBjIgjgEIgVAcg");
	mask.setTransform(5,6.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AAUAuIgnhb");
	this.shape.setTransform(6.7,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AATAvIglhc");
	this.shape_1.setTransform(3.1,7);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.2,0,9.5,12.5), null);


(lib.cortinabcam4mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhFGATgMAAAgm/MCKNAAAMAAAAm/g");
	this.shape.setTransform(442.3,124.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,884.5,249.6);


(lib.cortinabcam4mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhFGATgMAAAgm/MCKNAAAMAAAAm/g");
	this.shape.setTransform(442.3,124.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,884.5,249.6);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,152,152);


(lib.circulo2instrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ACAFA1").p("AB9AAQAAAzgkAlQglAlg0AAQgzAAgkglQglglAAgzQAAgzAlglQAkgkAzAAQA0AAAlAkQAkAlAAAzg");
	this.shape.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,27,27);


(lib.circulo1instrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9BDAD").s().p("Ag/BAQgagbgBglQABglAagaQAbgbAkAAQAlAAAbAbQAbAagBAlQABAlgbAbQgbAbglgBQgkABgbgbg");
	this.shape.setTransform(104.6,9.1,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.5,1,16.2,16.2);


(lib.circulo_blanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmrGsQixixAAj7QAAj6CxixQCxixD6AAQD7AACxCxQCxCxAAD6QAAD7ixCxQixCxj7AAQj6AAixixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121,121);


(lib.cajagdemc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Perfil de éxito", "bold 18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(50.1,28.2);

	this.text_1 = new cjs.Text("Es el compendio de funciones y capacidades clave que debe tener el ocupante del cargo, así como las experiencias que debe traer consigo para tener éxito en el puesto.", "16px 'Arial'");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 401;
	this.text_1.parent = this;
	this.text_1.setTransform(50.1,63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Aq7MkIAA5HMA/zAAAQBnAABJBJQBJBKAABnIAARTQAABnhJBJQhJBKhnAAgEg02AMkQhoAAhKhKQhIhJgBhnIAAxTQABhnBIhKQBKhJBoAAMAp7AAAIAAZHg");
	this.shape.setTransform(363.4,80.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AlPjNIKfAAIlQGbg");
	this.shape_1.setTransform(244.4,165.5,1,1,0,0,0,5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,726.7,186.1);


(lib.bulletrojoarcachico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA3030").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(5.9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,6.9,6.9);


(lib.bulletnaranja = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD9A34").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(5.9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,6.9,6.9);


(lib.bulletmorado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A04D98").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(5.9,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,6.9,6.9);


(lib.T1_Señalar_btn_gr_1_lineamc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.569)").s().p("AvEOEQiWAAAAiWIAA3bQAAiWCWAAIeJAAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape.setTransform(111.5,87);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T1_Señalar_btn_gr_1_lineamc4, new cjs.Rectangle(0,-3,223,180), null);


(lib.T1_Señalar_btn_gr_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.569)").s().rr(-132.5,-90,265,180,15);
	this.shape.setTransform(132.5,87);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T1_Señalar_btn_gr_1_linea, new cjs.Rectangle(0,-3,265,180), null);


(lib.tema_entrada_titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
		this.parent.fixed.gotoAndPlay(105);
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

	this.text = new cjs.Text("Definición de perfiles de éxito", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 299;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulosss23("synched",0);
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


(lib.tarjeta04grmc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m02_tmr_idioma();
	this.instance.parent = this;
	this.instance.setTransform(114.5,90.4,0.871,0.871,0,0,0,97.5,114.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F9D2").s().p("AiBIIIowAAIAAyyIaNAAIAAQ8QgJBrhtALIslAAIhhCjgAtlIIQhtgLgJhrIAAw8IEpAAIAASyg");
	this.shape.setTransform(112.8,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_1.setTransform(131.1,166.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_2.setTransform(118.6,166.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_3.setTransform(106.1,166.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_4.setTransform(99.1,164.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgKAAgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQALAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgMAAQgJAAgHAJg");
	this.shape_5.setTransform(91.8,164.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIBAIAAh/IAQAAIAAB/g");
	this.shape_6.setTransform(84.7,164.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3EFB9").s().p("AqSOEIAA8HIZXAAQCWAAAACWIAAXbQAACWiWAAgAvEOEQiWAAAAiWIAA3bQAAiWCWAAIEyAAIAAcHg");
	this.shape_7.setTransform(111.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta04grmc4, new cjs.Rectangle(-1.9,0,224.9,199.1), null);


(lib.tarjeta04_mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Funcion global para deshabilitar las tarjetas mientras corre la animacion
		//Para el funcionamiento local de este MC
		/*validar=function() {
			if(this.currentFrame == 0 || this.currentFrame == 29 || this.currentFrame == 59) {
				console.log("if " + this.currentFrame);
				newRoot.parent.funcion("enabled");
			} else {
				console.log("else " + this.currentFrame);
				newRoot.parent.funcion("disabled");
			}
		}*/
		newRoot = this;
		this.stop();
	}
	this.frame_3 = function() {
		//console.log(this.parent.funcion);
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.busy=false;
		//this.parent.funcion(newRoot);
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		//console.log("frame: "+newRoot.currentFrame);
		//this.parent.funcion(newRoot);
	}
	this.frame_59 = function() {
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(26).call(this.frame_29).wait(1).call(this.frame_30).wait(3).call(this.frame_33).wait(26).call(this.frame_59).wait(1));

	// Contenido
	this.text = new cjs.Text("Inglés avanzado.\n\n", "18px 'Arial'", "#333333");
	this.text.lineHeight = 30;
	this.text.lineWidth = 234;
	this.text.parent = this;
	this.text.setTransform(43,104);

	this.text_1 = new cjs.Text("Idiomas", "bold 20px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 231;
	this.text_1.parent = this;
	this.text_1.setTransform(111.2,57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},24).to({state:[{t:this.text_1},{t:this.text}]},6).to({state:[]},4).to({state:[]},24).wait(2));

	// dobla inicio
	this.instance = new lib.tarjeta04grmc4();
	this.instance.parent = this;
	this.instance.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(30).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// color de tarjeta
	this.instance_1 = new lib.tarjeta_para_textomc4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:132.6,scaleX:0.88,scaleY:1.09,x:143.1,y:90.1},8,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:143},7).wait(1).to({regX:132.5,scaleX:0.04,scaleY:1,x:132.5,y:90},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,224.9,199.1);


(lib.tarjeta03grmc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m02_tmrTrayectoria();
	this.instance.parent = this;
	this.instance.setTransform(133.8,77.1,0.585,0.585,0,0,0,115.5,84);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbArQgKgHgDgQIARgDQABALAGAFQAHAFAKAAQAMAAAFgFQAGgFAAgFQAAgHgFgCQgEgDgNgDQgSgFgHgDQgHgCgDgHQgEgFAAgIQAAgHADgFQADgFAFgFQAEgCAHgCQAGgCAIAAQALgBAJAEQAIADAEAGQAFAGABAKIgQABQgBgHgGgEQgFgFgJAAQgLAAgFAFQgFADAAAFQAAADACADQACADAEACIAOAEQASAEAHADQAHADAEAFQAEAGAAAJQAAAIgFAHQgFAHgJAFQgJADgMAAQgSABgKgJg");
	this.shape.setTransform(218.4,165.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAnQgNgOAAgZQAAgaAPgNQANgLARAAQAVAAAMANQANAOAAAXQAAASgGALQgFALgLAFQgLAHgNgBQgTABgNgNgAgUgbQgIAJAAASQAAATAIAKQAIAJAMAAQAMAAAJgJQAIgKAAgTQAAgSgIgJQgJgKgMAAQgMAAgIAKg");
	this.shape_1.setTransform(208.5,165.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAzIAAhiIAPAAIAAAPQAGgLAFgDQAEgEAFABQAJgBAJAGIgGAQQgGgEgGAAQgGAAgDAEQgFADgBAFQgDAKAAAKIAAAzg");
	this.shape_2.setTransform(200.8,165);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcA+QgMgHABgQIAQACQABAIAFADQAGAEALABQAKgBAHgEQAGgFADgIQABgFgBgRQgKANgQABQgUAAgLgPQgMgPAAgUQAAgOAGgMQAFgLAJgHQAKgHANABQAQAAAMAOIAAgMIAQAAIAABUQgBAXgEAKQgFAJgKAGQgKAGgOgBQgRAAgLgIgAgSgvQgHAKAAARQAAAUAHAIQAIAJALgBQAMABAHgJQAIgIAAgTQAAgSgIgJQgIgKgMAAQgJABgJAIg");
	this.shape_3.setTransform(191.3,167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghAnQgMgOAAgZQAAgaAPgNQAMgLASAAQAUAAANANQANAOAAAXQAAASgFALQgHALgKAFQgLAHgNgBQgUABgNgNgAgUgbQgIAJAAASQAAATAIAKQAJAJALAAQANAAAHgJQAJgKAAgTQAAgSgJgJQgHgKgNAAQgLAAgJAKg");
	this.shape_4.setTransform(181.1,165.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBEIAAiHIAQAAIAACHg");
	this.shape_5.setTransform(173.7,163.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAnQgNgOAAgYQAAgYAOgOQAMgNATAAQAUAAANANQAMAOAAAXIAAAFIhJAAQABAPAJAKQAIAIAMAAQAIAAAHgFQAGgFAEgKIARACQgEAPgKAIQgLAJgRgBQgVABgNgNgAgSgdQgHAIgCANIA2AAQgBgNgEgGQgJgKgNAAQgKAAgIAIg");
	this.shape_6.setTransform(161,165.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVA/QgKgHgFgLQgGgMAAgPQAAgPAFgLQAFgMAKgGQAKgHAMAAQAIAAAHAEQAHAEAEAGIAAgxIARAAIAACHIgQAAIAAgNQgJAPgSAAQgLAAgKgGgAgRgKQgIAKAAASQAAATAIAJQAIAJAKAAQALABAIgKQAHgJAAgSQAAgTgHgJQgIgKgMAAQgKAAgHAJg");
	this.shape_7.setTransform(150.1,163.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgHADgFQADgGAGgFQAFgCAHgCIAOgCQAUgDAJgDIAAgFQAAgJgEgFQgHgFgMgBQgLAAgGAFQgFAEgDAKIgRgCQADgLAFgGQAFgHAKgDQAJgDAMAAQANAAAHACQAIADAEAFQAEAFABAGIABAQIAAAVQAAAYABAGQABAGADAGIgRAAQgDgFAAgHQgKAHgIAEQgIACgKAAQgQAAgJgHgAgDAGIgPADQgEADgCADQgDAEAAAEQAAAGAGAFQAFAFAJAAQAJAAAHgFQAIgEADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_8.setTransform(134.6,165.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBEIAAhiIAQAAIAABigAgIgwIAAgTIAQAAIAAATg");
	this.shape_9.setTransform(127.3,163.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAzIAAhiIAPAAIAAAPQAGgLAFgDQAEgEAFABQAJgBAJAGIgGAQQgGgEgGAAQgGAAgDAEQgFADgBAFQgDAKAAAKIAAAzg");
	this.shape_10.setTransform(122.8,165);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAnQgMgOAAgZQAAgaAPgNQAMgLASAAQAUAAANANQANAOAAAXQAAASgFALQgHALgKAFQgLAHgNgBQgUABgNgNgAgUgbQgIAJAAASQAAATAIAKQAJAJALAAQANAAAHgJQAJgKAAgTQAAgSgJgJQgHgKgNAAQgLAAgJAKg");
	this.shape_11.setTransform(113.6,165.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCBAQgFgDgCgEQgCgFAAgPIAAg4IgMAAIAAgNIAMAAIAAgYIAPgKIAAAiIASAAIAAANIgSAAIAAA5IABAJIADADIAGABIAIAAIACAPIgMABQgKAAgEgDg");
	this.shape_12.setTransform(105.8,163.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAnQgNgNAAgaQAAgPAFgMQAGgMALgFQAKgHAMABQAQgBAKAJQALAIACAPIgQACQgCgJgGgFQgGgGgIAAQgMABgIAIQgIAJAAATQAAAUAIAJQAIAJALAAQAKAAAGgGQAHgGACgMIAQABQgDARgLAKQgLAJgQAAQgTABgMgNg");
	this.shape_13.setTransform(98.5,165.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggAnQgNgOAAgYQAAgYAOgOQAMgNAUAAQATAAANANQANAOAAAXIgBAFIhJAAQABAPAJAKQAIAIAMAAQAIAAAHgFQAGgFAFgKIAQACQgDAPgLAIQgMAJgQgBQgVABgNgNgAgSgdQgHAIgCANIA3AAQgCgNgEgGQgJgKgMAAQgLAAgIAIg");
	this.shape_14.setTransform(88.2,165.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjBDIgCgPIAJABQAGAAADgCIAGgFIAFgMIABgFIglhhIASAAIAUA5IAGAWIAHgWIAVg5IARAAIglBjQgGAQgDAGQgEAJgGADQgGAEgIAAQgFAAgFgCg");
	this.shape_15.setTransform(78.3,167.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgHADgFQADgGAGgFQAFgCAHgCIAOgCQAUgDAJgDIAAgFQAAgJgEgFQgHgFgMgBQgLAAgGAFQgFAEgDAKIgRgCQADgLAFgGQAFgHAKgDQAJgDAMAAQANAAAHACQAIADAEAFQAEAFABAGIABAQIAAAVQAAAYABAGQABAGADAGIgRAAQgDgFAAgHQgKAHgIAEQgIACgKAAQgQAAgJgHgAgDAGIgPADQgEADgCADQgDAEAAAEQAAAGAGAFQAFAFAJAAQAJAAAHgFQAIgEADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_16.setTransform(68.1,165.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAzIAAhiIAPAAIAAAPQAGgLAFgDQAEgEAFABQAJgBAJAGIgGAQQgGgEgGAAQgGAAgDAEQgFADgBAFQgDAKAAAKIAAAzg");
	this.shape_17.setTransform(60.5,165);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIBEIAAh3IgtAAIAAgQIBrAAIAAAQIgtAAIAAB3g");
	this.shape_18.setTransform(51.6,163.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F1F9D2").s().p("AhhIIIr0AAIAAyyIfPAAIAAQ8QgKBrhtALIujAAIhgCjgAwCIIQhtgLgKhrIAAw8IEkAAIAASyg");
	this.shape_19.setTransform(132.5,83.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3EFB9").s().p("AyWOEQiWAAAAiWIAA3bQAAiWCWAAMAktAAAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape_20.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta03grmc5, new cjs.Rectangle(0,0,265,199.3), null);


(lib.tarjeta03grmc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m02_tmr_formaciondeseable();
	this.instance.parent = this;
	this.instance.setTransform(114.5,90.4,0.871,0.871,0,0,0,97.5,114.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F9D2").s().p("AiBIIIowAAIAAyyIaNAAIAAQ8QgJBrhtALIslAAIhhCjgAtlIIQhtgLgJhrIAAw8IEpAAIAASyg");
	this.shape.setTransform(112.8,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_1.setTransform(185.6,166.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_2.setTransform(178.6,164.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAtQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAHADAJQACAHAAALQAAAYgLAMQgMANgRAAQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAIQAHAMANgBQAJABAIgKQAHgJAAgSQAAgRgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_3.setTransform(171.8,164.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgJABgEACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_4.setTransform(161.6,166.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_5.setTransform(151.6,166.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_6.setTransform(142,166.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_7.setTransform(132.6,166.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAFgLQAEgLAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgIgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_8.setTransform(122.3,164.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_9.setTransform(107.6,166.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_10.setTransform(97.6,164.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_11.setTransform(90.6,164.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_12.setTransform(84.4,166.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_13.setTransform(74.6,166.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_14.setTransform(62.1,166.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_15.setTransform(52.3,166.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_16.setTransform(43.6,166.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgqBAIAAh/IBVAAIAAAPIhEAAIAAAoIA7AAIAAAOIg7AAIAAA6g");
	this.shape_17.setTransform(33.4,164.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3EFB9").s().p("AqSOEIAA8HIZXAAQCWAAAACWIAAXbQAACWiWAAgAvEOEQiWAAAAiWIAA3bQAAiWCWAAIEyAAIAAcHg");
	this.shape_18.setTransform(111.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta03grmc4, new cjs.Rectangle(-1.9,0,224.9,199.1), null);


(lib.tarjeta03gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000007").s().p("AgcAFIgWgFIABgHIARAFQATADAMAAQARABAigHIABAGIgrAHIgHAAQgLAAgSgDg");
	this.shape.setTransform(160.5,71.6,1.606,1.606);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#35343A").s().p("AAAABIAAgDQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAIAAADIgBgCg");
	this.shape_1.setTransform(164.2,44.5,1.606,1.606);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#35343A").s().p("AgCADQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQABgBAEgBIABADIgFADIgBgBg");
	this.shape_2.setTransform(162,44.5,1.606,1.606);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3C3C1").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_3.setTransform(163.2,44.2,1.606,1.606);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#35343A").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_4.setTransform(163.2,44.2,1.606,1.606);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#947668").s().p("AAGAfQAGgagFgCQgDAAgCgCIgDgDIgPgJQgFgGgBgGQAAgFADgBIAQAFIAMAEQABAAgEgGQgCgEABgDQACgDADAKQABADAHAFQACADACALQABACAAAlg");
	this.shape_5.setTransform(160.6,42.8,1.606,1.606);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0DADE").s().p("AgPA6QgIgNgHgqIgGgmIAYgDIAKBEIAJgtQABgHgCgUIAAgVQAaABAEALQADAKgNAuQgKApgNANIgKAGg");
	this.shape_6.setTransform(166.5,53.1,1.606,1.606);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0DADE").s().p("AgcA3QgCgCgFghIgHgrQgDgPASgSQARAQgEAEQgFAIAFAbQAEAXACAFQABABAUgEIAVgFIAJASQgrAUgSAAQgGAAgEgCg");
	this.shape_7.setTransform(155.6,52.8,1.606,1.606);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDEAEC").s().p("AgMADIAUgMIAFAJQAAAEgHADIgGADg");
	this.shape_8.setTransform(162.4,43.3,1.606,1.606);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DDEAEC").s().p("AgEAHQgIgFAAgDIAEgJIAWAPIgKAGIgIgEg");
	this.shape_9.setTransform(158.1,43.1,1.606,1.606);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3231").s().p("AAlARQAAgEgEgKQgEgKgFgCQgEgBgHAEQgJAFgDAAIgBAAQgCAAgJgFQgIgEgEABQgFACgEAKQgEAKAAAEIAAAQIgCgCIgCgCQgFg+AtACIAAAAQAcgCAJAYQAHAOgDAYIgEAEg");
	this.shape_10.setTransform(159.9,27.8,1.606,1.606);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#805F50").s().p("AgGA1QgTgHgLgTIAAgBIAAgIIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCgHIgCgOQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIADABIABABIAAAAIgBgNQAAgQAIgFIABAAQAAgBAJgGQAKgGALAAIABAAQASgBAOAOIAAAAQAJAFAAAQIgCANIAAACIABgBQADgDABAAQACACgBAGIgBAAIgBAJIgCAHQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAJIgBACQgKAPgRAJIgBABIgGAAIgCAAIgGgBg");
	this.shape_11.setTransform(159.9,32.5,1.606,1.606);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#947668").s().p("AgWAKQAKgKgCgNQAbgHABAHQAAAGAGAMIAFALIgbACQgcgCAIgGg");
	this.shape_12.setTransform(160.2,40.7,1.606,1.606);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2F2F35").s().p("AAcCcIgOgCIgEiqIgHhIIgMBcIgKCXIgrAAIADh6IAOi9QAMAIArgCQAXgBAUgDIAFAmQAFAiAAAaIgFDNIgKAGQgDACgHAAIgKgBg");
	this.shape_13.setTransform(159.8,95.5,1.606,1.606);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00011E").s().p("AgTAKQgBgFAFgHIAGgIIABgHIABgBIAbAAIgBAPQABAJgBACQgCADgHAEIgFAEIgQAAQgFgCgDgHg");
	this.shape_14.setTransform(152.4,123.1,1.606,1.606);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A0CBD0").s().p("AgJAIQgCgJAAgJIAVAAQAEAOgEAEQgDAEgHgBQgIAAgBgDg");
	this.shape_15.setTransform(156.3,53.6,1.606,1.606);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#35343A").s().p("AgBABIABgEQABABABACQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgCgDg");
	this.shape_16.setTransform(143.6,72.5,1.606,1.606);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000007").s().p("AAJAOIgXgHQgOABgBgCQgBgBAAgFIAAgGIACgGIAegBIAEAHIASAJQAHADAAAFIgBADg");
	this.shape_17.setTransform(169.7,121.6,1.606,1.606);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AEC7C9").s().p("AgDBbQgQgBgPgEIgMgEQgHikgDgBIAdgEQBFgGAKAFQAKAEgKCnQgaAIgWAAIgHAAgAg4hTIAAAAIAAAAg");
	this.shape_18.setTransform(160.1,57.2,1.606,1.606);

	this.instance = new lib.m02_tmr_movilidad();
	this.instance.parent = this;
	this.instance.setTransform(112.3,70.1,0.385,0.385,0,0,0,61.5,121.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_19.setTransform(191.1,167.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_20.setTransform(180.6,167.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbA1IAAhnIAQAAIAAAQQAGgLAFgEQAEgDAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDADQgFAEgCAGQgDAKAAALIAAA1g");
	this.shape_21.setTransform(172.5,167.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_22.setTransform(162.8,167.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg");
	this.shape_23.setTransform(154.6,166.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfAoQgNgOAAgaQAAgQAFgMQAGgNAMgGQALgGAMAAQARAAALAIQAKAJADAQIgRACQgCgKgGgGQgHgFgIAAQgNAAgIAKQgIAJAAAUQAAAVAIAJQAIAKAMAAQAKAAAHgHQAHgGACgNIARACQgCASgMAKQgMAKgRAAQgUAAgNgOg");
	this.shape_24.setTransform(147.1,167.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglAuQgKgJAAgNQAAgHAEgGQADgHAGgEQAGgCAHgCIAPgDQAVgDAKgDIAAgFQAAgKgFgFQgHgGgNAAQgMAAgGAFQgFAEgDALIgRgCQACgLAFgHQAGgHAKgEQAKgDAMAAQAOAAAIADQAIADAEAFQAEAEACAIIAAAQIAAAWQAAAZACAGQABAHADAGIgSAAQgDgGgBgHQgKAIgJAEQgIADgKAAQgRAAgJgIgAgDAGQgLACgEACQgFACgCAEQgDADAAAFQAAAHAGAFQAFAEAKAAQAJAAAIgEQAIgFAEgHQADgGAAgMIAAgGQgKAEgSACg");
	this.shape_25.setTransform(136.1,167.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOBJIAAhZIgPAAIAAgOIAPAAIAAgLQAAgKACgGQADgGAGgFQAFgEAMAAIAQACIgCAPIgLgBQgIAAgDAEQgDADAAAJIAAAKIAUAAIAAAOIgUAAIAABZg");
	this.shape_26.setTransform(128.3,165.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_27.setTransform(114.5,167.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_28.setTransform(104,167.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbA1IAAhnIAQAAIAAAQQAGgLAFgEQAEgDAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDADQgFAEgCAGQgDAKAAALIAAA1g");
	this.shape_29.setTransform(95.9,167.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg");
	this.shape_30.setTransform(89.1,166.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgjBAQgQgJgIgSQgJgRAAgSQAAgjAUgUQATgUAdAAQAUAAAQAJQAQAKAIARQAIAQAAAVQABAWgJARQgJARgQAJQgQAJgTAAQgTAAgQgKgAghgrQgPAOAAAfQAAAaAOAPQAOAPAUAAQAWAAAOgQQANgOAAgcQAAgRgGgMQgGgOgLgGQgMgIgNAAQgUAAgOAOg");
	this.shape_31.setTransform(78.5,165.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F1F9D2").s().p("AhhIIIr0AAIAAyyIfPAAIAAQ8QgKBrhtALIujAAIhgCjgAwCIIQhtgLgKhrIAAw8IEkAAIAASyg");
	this.shape_32.setTransform(132.5,83.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E3EFB9").s().p("AyWOEQiWAAAAiWIAA3bQAAiWCWAAMAktAAAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape_33.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta03gr, new cjs.Rectangle(0,0,265,203.6), null);


(lib.tarjeta03_mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		newRoot=this;
		this.stop();
	}
	this.frame_4 = function() {
		//8this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		//this.parent.funcion(newRoot);
	}
	this.frame_59 = function() {
		//this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(25).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(28).call(this.frame_59).wait(1));

	// contenido
	this.instance = new lib.bulletmorado("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(17,110.6,1,1,0,0,0,5.9,5.9);

	this.instance_1 = new lib.bulletmorado("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,36.9,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Haber diseñado estrategias de mercadeo que incluya segmentación, posicionamiento y selección de atributos de productos.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 16;
	this.text.lineWidth = 229;
	this.text.parent = this;
	this.text.setTransform(24.5,101);

	this.text_1 = new cjs.Text("Experiencia en la generación\nde estrategias comerciales\npara redirigir esfuerzos de posicionamiento.", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 243;
	this.text_1.parent = this;
	this.text_1.setTransform(24.5,26.9);

	this.text_2 = new cjs.Text("Trayectoria de logros", "bold 20px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 228;
	this.text_2.parent = this;
	this.text_2.setTransform(131.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.instance}]},26).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.instance}]},4).to({state:[]},2).to({state:[]},22).wait(6));

	// Capa 1
	this.instance_2 = new lib.tarjeta03grmc5();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.03,x:130},14,cjs.Ease.get(1)).to({_off:true},1).wait(30).to({_off:false,regX:132.5,regY:90,scaleX:0.04,x:132.5,y:90},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// Capa 2
	this.instance_3 = new lib.tarjeta_para_textomc5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(133.6,99.4,0.038,0.712,0,0,0,132.5,90.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.tarjeta_para_texto();
	this.instance_4.parent = this;
	this.instance_4.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},14).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_4}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:132.6,regY:90,scaleX:0.99,scaleY:0.89,x:132.9,y:105.5},10,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.06,x:132.5,y:102.7},5).wait(1).to({regX:132.5,regY:90.2,scaleX:0.04,scaleY:0.71,x:133.6,y:99.4},15).to({_off:true},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265,199.3);


(lib.tarjeta03_mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Funcion global para deshabilitar las tarjetas mientras corre la animacion
		//Para el funcionamiento local de este MC
		/*validar=function() {
			if(this.currentFrame == 0 || this.currentFrame == 29 || this.currentFrame == 59) {
				console.log("if " + this.currentFrame);
				newRoot.parent.funcion("enabled");
			} else {
				console.log("else " + this.currentFrame);
				newRoot.parent.funcion("disabled");
			}
		}*/
		newRoot = this;
		this.stop();
	}
	this.frame_3 = function() {
		//console.log(this.parent.funcion);
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.busy=false;
		//this.parent.funcion(newRoot);
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		//console.log("frame: "+newRoot.currentFrame);
		//this.parent.funcion(newRoot);
	}
	this.frame_57 = function() {
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(26).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(26).call(this.frame_57).wait(1));

	// Contenido
	this.text = new cjs.Text("Licenciatura Administración de Empresas.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 134;
	this.text.parent = this;
	this.text.setTransform(51.9,109.7);

	this.instance = new lib.bulletnaranja("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.3,120.6,1,1,0,0,0,5.9,5.9);

	this.instance_1 = new lib.bulletnaranja("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,68.5,1,1,0,0,0,5.9,5.9);

	this.text_1 = new cjs.Text("Licenciatura de Mercadotecnia.", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 197;
	this.text_1.parent = this;
	this.text_1.setTransform(51.9,57.8);

	this.text_2 = new cjs.Text("Formación deseable", "bold 20px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 231;
	this.text_2.parent = this;
	this.text_2.setTransform(111.2,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.instance_1},{t:this.instance},{t:this.text}]},25).to({state:[{t:this.text_2},{t:this.text_1},{t:this.instance_1},{t:this.instance},{t:this.text}]},4).to({state:[]},2).to({state:[]},24).wait(3));

	// dobla inicio
	this.instance_2 = new lib.tarjeta03grmc4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(28).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// color de tarjeta
	this.instance_3 = new lib.tarjeta_para_textomc4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:132.6,scaleX:0.88,scaleY:1.09,x:143.1,y:90.1},8,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:143},7).wait(1).to({regX:132.5,scaleX:0.04,scaleY:1,x:132.5,y:90},13).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,224.9,199.1);


(lib.tarjeta03_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		newRoot=this;
		this.stop();
	}
	this.frame_4 = function() {
		//8this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		//this.parent.funcion(newRoot);
	}
	this.frame_59 = function() {
		//this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(25).call(this.frame_29).wait(1).call(this.frame_30).wait(2).call(this.frame_32).wait(27).call(this.frame_59).wait(1));

	// contenido
	this.text = new cjs.Text("Otros  factores", "bold 20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(137.4,53);

	this.text_1 = new cjs.Text("Movilidad requerida.", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 191;
	this.text_1.parent = this;
	this.text_1.setTransform(55.9,93.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},24).to({state:[{t:this.text_1},{t:this.text}]},6).to({state:[]},5).to({state:[]},24).wait(1));

	// Capa 1
	this.instance = new lib.tarjeta03gr();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.03,x:130},14,cjs.Ease.get(1)).to({_off:true},1).wait(30).to({_off:false,regX:132.5,regY:90,scaleX:0.04,x:132.5,y:90},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// Capa 2
	this.instance_1 = new lib.tarjeta_para_texto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:132.4,scaleX:1.11,scaleY:1.11,y:90.1},15,cjs.Ease.get(1)).wait(1).to({regX:132.5,scaleX:0.04,scaleY:1,y:90},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265,203.6);


(lib.tarjeta02grmc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m2_tmr_baggage();
	this.instance.parent = this;
	this.instance.setTransform(128.3,71.7,1,1,0,0,0,65.3,65.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAnQgMgOAAgYQAAgYAMgOQANgOAUABQATAAANANQANANAAAYIgBAEIhIAAQAAAQAJAKQAIAIAMAAQAJAAAGgFQAGgFAFgKIARACQgFAPgLAIQgLAIgQAAQgVAAgNgMgAgRgdQgJAIAAANIA2AAQgCgNgFgGQgHgKgNAAQgLAAgHAIg");
	this.shape.setTransform(249.5,166.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBEIAAiHIAPAAIAACHg");
	this.shape_1.setTransform(242.1,164.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaA2IAAANIgQAAIAAiHIARAAIAAAxQAKgOAQAAQAJAAAIAEQAIAEAFAGQAGAHADAJQADAIAAAMQAAAYgNAOQgMAOgSAAQgQAAgKgPgAgTgKQgIAKAAARQAAARAFAJQAIAMAOAAQAKAAAIgJQAIgJAAgUQAAgRgIgKQgIgJgKAAQgLAAgIAJg");
	this.shape_2.setTransform(235,164.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgGADgGQADgHAGgDQAFgDAHgCIAOgCQAUgCAJgEIAAgEQAAgLgEgEQgHgGgMAAQgLABgGAEQgFAEgDALIgRgDQADgLAFgGQAFgGAKgEQAJgDAMAAQANAAAHACQAIADAEAFQAEAFABAGIABAQIAAAVQAAAXABAHQABAGADAFIgRAAQgDgFAAgGQgKAHgIADQgIADgKAAQgQABgJgIgAgDAGIgPAEQgEACgCADQgDADAAAFQAAAHAGAEQAFAEAJABQAJAAAHgFQAIgEADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_3.setTransform(224.2,166.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAnQgNgOAAgYQAAgYAOgOQAMgOATABQAUAAANANQAMANAAAYIAAAEIhJAAQABAQAJAKQAIAIAMAAQAIAAAHgFQAGgFAEgKIARACQgEAPgKAIQgLAIgRAAQgVAAgNgMgAgSgdQgHAIgCANIA2AAQgBgNgEgGQgJgKgNAAQgKAAgIAIg");
	this.shape_4.setTransform(213.7,166.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbArQgKgHgDgQIARgCQABAJAGAFQAHAGAKAAQAMAAAFgFQAGgEAAgHQAAgFgFgEQgEgCgNgDQgSgFgHgDQgHgCgDgGQgEgHAAgHQAAgGADgGQADgFAFgEQAEgEAHgBQAGgDAIABQALAAAJADQAIADAEAGQAFAGABAKIgQABQgBgHgGgEQgFgEgJgBQgLABgFAEQgFADAAAFQAAAEACACQACACAEACIAOAFQASAEAHADQAHADAEAFQAEAGAAAJQAAAIgFAIQgFAHgJAEQgJADgMAAQgSAAgKgIg");
	this.shape_5.setTransform(203.6,166.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAnQgMgOAAgYQAAgYAMgOQANgOAUABQATAAANANQANANAAAYIgBAEIhJAAQACAQAIAKQAIAIAMAAQAIAAAHgFQAGgFAFgKIARACQgFAPgKAIQgMAIgQAAQgVAAgNgMgAgRgdQgIAIgBANIA2AAQgCgNgFgGQgIgKgMAAQgLAAgHAIg");
	this.shape_6.setTransform(193.6,166.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVA+QgKgGgFgMQgGgLAAgPQAAgPAFgLQAFgMAKgHQAKgGAMAAQAIAAAHAEQAHAEAEAGIAAgxIARAAIAACHIgQAAIAAgNQgJAPgSAAQgLAAgKgHgAgRgKQgIAJAAATQAAATAIAJQAIAJAKAAQALAAAIgJQAHgIAAgTQAAgTgHgKQgIgJgMAAQgKAAgHAJg");
	this.shape_7.setTransform(182.7,164.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIBEIAAiHIAQAAIAACHg");
	this.shape_8.setTransform(170.4,164.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgGADgGQADgHAGgDQAFgDAHgCIAOgCQAUgCAJgEIAAgEQAAgLgEgEQgHgGgMAAQgLABgGAEQgFAEgDALIgRgDQADgLAFgGQAFgGAKgEQAJgDAMAAQANAAAHACQAIADAEAFQAEAFABAGIABAQIAAAVQAAAXABAHQABAGADAFIgRAAQgDgFAAgGQgKAHgIADQgIADgKAAQgQABgJgIgAgDAGIgPAEQgEACgCADQgDADAAAFQAAAHAGAEQAFAEAJABQAJAAAHgFQAIgEADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_9.setTransform(163,166.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAyIAAhhIAPAAIAAAPQAGgKAFgEQAEgDAFAAQAJAAAJAFIgGAPQgGgDgGAAQgGAAgDADQgFADgBAGQgDAKAAAKIAAAyg");
	this.shape_10.setTransform(155.4,166.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAnQgNgOAAgZQAAgaAPgOQANgLARABQAUAAANANQANANAAAYQAAASgFALQgHAKgKAHQgLAFgNAAQgUAAgMgMgAgUgbQgIAKAAARQAAATAIAKQAIAJAMAAQAMAAAJgJQAIgKAAgTQAAgSgIgJQgJgKgMAAQgMAAgIAKg");
	this.shape_11.setTransform(146.2,166.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaA2IAAANIgQAAIAAiHIARAAIAAAxQAKgOAQAAQAJAAAIAEQAIAEAFAGQAGAHADAJQADAIAAAMQAAAYgNAOQgMAOgSAAQgQAAgKgPgAgTgKQgIAKAAARQAAARAFAJQAIAMAOAAQAKAAAIgJQAIgJAAgUQAAgRgIgKQgIgJgKAAQgLAAgIAJg");
	this.shape_12.setTransform(135.9,164.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgGADgGQADgHAGgDQAFgDAHgCIAOgCQAUgCAJgEIAAgEQAAgLgEgEQgHgGgMAAQgLABgGAEQgFAEgDALIgRgDQADgLAFgGQAFgGAKgEQAJgDAMAAQANAAAHACQAIADAEAFQAEAFABAGIABAQIAAAVQAAAXABAHQABAGADAFIgRAAQgDgFAAgGQgKAHgIADQgIADgKAAQgQABgJgIgAgDAGIgPAEQgEACgCADQgDADAAAFQAAAHAGAEQAFAEAJABQAJAAAHgFQAIgEADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_13.setTransform(125,166.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHBEIAAiHIAQAAIAACHg");
	this.shape_14.setTransform(117.7,164.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgGADgGQADgHAGgDQAFgDAHgCIAOgCQAUgCAJgEIAAgEQAAgLgEgEQgHgGgMAAQgLABgGAEQgFAEgDALIgRgDQADgLAFgGQAFgGAKgEQAJgDAMAAQANAAAHACQAIADAEAFQAEAFABAGIABAQIAAAVQAAAXABAHQABAGADAFIgRAAQgDgFAAgGQgKAHgIADQgIADgKAAQgQABgJgIgAgDAGIgPAEQgEACgCADQgDADAAAFQAAAHAGAEQAFAEAJABQAJAAAHgFQAIgEADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_15.setTransform(105,166.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHBEIAAhhIAPAAIAABhgAgHgwIAAgTIAPAAIAAATg");
	this.shape_16.setTransform(97.7,164.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAnQgNgNAAgZQAAgQAFgLQAGgMALgGQAKgGAMAAQAQAAAKAIQALAIACAPIgQADQgCgLgGgFQgGgEgIgBQgMABgIAIQgIAKAAASQAAAUAIAJQAIAJALAAQAKAAAGgGQAHgGACgNIAQACQgDASgLAJQgLAJgQAAQgTAAgMgMg");
	this.shape_17.setTransform(91.1,166.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXAyIAAg7QAAgJgCgFQgBgGgGgCQgFgEgGAAQgKAAgIAHQgIAHAAASIAAA1IgQAAIAAhhIAPAAIAAAOQALgQATAAQAJAAAIADQAHADAEAFQADAGACAHIABAQIAAA7g");
	this.shape_18.setTransform(80.8,166.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggAnQgNgOAAgYQAAgYAOgOQAMgOAUABQATAAANANQANANAAAYIgBAEIhJAAQABAQAJAKQAIAIAMAAQAIAAAHgFQAGgFAFgKIAQACQgDAPgLAIQgMAIgQAAQgVAAgNgMgAgSgdQgHAIgCANIA3AAQgCgNgEgGQgJgKgMAAQgLAAgIAIg");
	this.shape_19.setTransform(70.2,166.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHBEIAAhhIAQAAIAABhgAgHgwIAAgTIAQAAIAAATg");
	this.shape_20.setTransform(62.9,164.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAyIAAhhIAPAAIAAAPQAGgKAFgEQAEgDAFAAQAJAAAJAFIgGAPQgGgDgGAAQgGAAgDADQgFADgBAGQgDAKAAAKIAAAyg");
	this.shape_21.setTransform(58.4,166.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAnQgMgOAAgYQAAgYAMgOQANgOAUABQATAAANANQANANAAAYIgBAEIhJAAQACAQAIAKQAIAIAMAAQAIAAAHgFQAGgFAFgKIARACQgFAPgKAIQgMAIgQAAQgVAAgNgMgAgRgdQgIAIgBANIA2AAQgCgNgFgGQgIgKgMAAQgLAAgHAIg");
	this.shape_22.setTransform(49.2,166.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgqBFIAAiHIAPAAIAAANQAGgHAHgFQAGgDAJAAQANAAAJAGQAKAHAFAMQAFAMAAAOQAAAPgGALQgFAMgKAHQgLAFgLAAQgHABgHgEQgHgEgEgFIAAAwgAgSgtQgJAKAAATQAAASAIAJQAIAJALAAQAKAAAIgJQAIgKAAgSQAAgTgIgKQgIgJgKAAQgKAAgIAKg");
	this.shape_23.setTransform(38.9,168);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZAxIgTgeIgGgJIgZAnIgUAAIAkgyIgigvIAWAAIAOAXIAHALIAHgLIARgXIATAAIgiAuIAlAzg");
	this.shape_24.setTransform(28.6,166.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgyBEIAAiHIBiAAIAAAQIhQAAIAAAqIBLAAIAAAPIhLAAIAAAuIBTAAIAAAQg");
	this.shape_25.setTransform(17.8,164.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F1F9D2").s().p("AhhIIIr0AAIAAyyIfPAAIAAQ8QgKBrhtALIujAAIhgCjgAwCIIQhtgLgKhrIAAw8IEkAAIAASyg");
	this.shape_26.setTransform(132.7,83.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3EFB9").s().p("AyWOEQiWAAAAiWIAA3bQAAiWCWAAMAktAAAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape_27.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta02grmc5, new cjs.Rectangle(-1,0,268,180), null);


(lib.tarjeta02gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m02_tmr_graficos();
	this.instance.parent = this;
	this.instance.setTransform(79.1,93.5,0.536,0.536,0,0,0,103.1,133.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape.setTransform(188.9,166.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCBEQgFgDgCgFQgCgFAAgQIAAg7IgNAAIAAgNIANAAIAAgaIAQgLIAAAlIASAAIAAANIgSAAIAAA8IABAKQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQACABAEAAIAIAAIACAPIgNACQgJAAgFgDg");
	this.shape_1.setTransform(180.7,165.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBHIAAhmIARAAIAABmgAgIgzIAAgUIARAAIAAAUg");
	this.shape_2.setTransform(175.6,164.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbA0IgWggIgFgJIgaApIgWAAIAmg1IgigyIAWAAIAPAYIAHAMIAHgLIASgZIAVAAIgkAxIAmA2g");
	this.shape_3.setTransform(168.4,166.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0BaIAAiOIBmAAIAAAQIhTAAIAAArIBOAAIAAARIhOAAIAAAxIBWAAIAAARgAgNg9IANgcIAWAAIgWAcg");
	this.shape_4.setTransform(157,163);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_5.setTransform(138.9,166.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWBCQgLgHgFgMQgGgNAAgQQAAgPAFgMQAFgMAKgHQALgHAMAAQAJAAAIAEQAGAEAFAGIAAgzIASAAIAACOIgRAAIAAgNQgJAQgTAAQgMAAgKgHgAgSgLQgIAKAAATQAAAUAIAKQAJAKAKAAQALAAAJgJQAIgKAAgTQAAgUgJgKQgHgKgNAAQgLAAgHAJg");
	this.shape_6.setTransform(127.5,165);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_7.setTransform(111.7,166.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJARQAFgDADgEQABgFABgHIgJAAIAAgUIASAAIAAAQQAAAMgDAGQgEAHgIAEg");
	this.shape_8.setTransform(104.7,159.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBHIAAiOIATAAIAACOg");
	this.shape_9.setTransform(99.9,164.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag1BHIAAiOIA1AAIAVABQALACAHAFQAHAFAEAJQAFAJAAALQAAASgMALQgLAOgfAAIgjAAIAAA5gAgigCIAkAAQARAAAJgHQAHgIAAgLQAAgKgFgGQgEgHgHgCQgFgBgNAAIgjAAg");
	this.shape_10.setTransform(90.8,164.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiBHIgyhHIgXAWIAAAxIgTAAIAAiOIATAAIAABHIBGhHIAaAAIg7A7IA9BTg");
	this.shape_11.setTransform(77.8,164.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F9D2").s().p("AhhIIIr0AAIAAyyIfPAAIAAQ8QgKBrhtALIujAAIhgCjgAwCIIQhtgLgKhrIAAw8IEkAAIAASyg");
	this.shape_12.setTransform(132.7,83.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3EFB9").s().p("AyWOEQiWAAAAiWIAA3bQAAiWCWAAMAktAAAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape_13.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta02gr, new cjs.Rectangle(0,0,265,180), null);


(lib.tarjeta02_mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		newRoot=this;
		this.stop();
	}
	this.frame_4 = function() {
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		//this.parent.funcion(newRoot);
	}
	this.frame_58 = function() {
		//this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(25).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(27).call(this.frame_58).wait(1));

	// contenido
	this.instance = new lib.bulletmorado("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.4,250.8,1,1,0,0,0,5.9,5.9);

	this.instance_1 = new lib.bulletmorado("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.4,231.1,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Ej. Para la misma posición de Gerente de Mercadotecnia, la experiencia laboral deseable pudiera ser:", "15px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 266;
	this.text.parent = this;
	this.text.setTransform(4.5,163);

	this.text_1 = new cjs.Text("Experiencia adicional en otros roles o proyectos que dan un valor agregado para desempeñar el rol de manera exitosa, es decir, la ruta de carrera que el colaborador haya seguido que le dé un mayor conocimiento general para desempeñar la posición esperada.", "15px 'Arial'", "#333333");
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 266;
	this.text_1.parent = this;
	this.text_1.setTransform(4.5,41.6);

	this.text_2 = new cjs.Text("Jefe de Logística.\nJefe de Operaciones.", "15px 'Arial'", "#333333");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 215;
	this.text_2.parent = this;
	this.text_2.setTransform(23,221.2);

	this.text_3 = new cjs.Text("Experiencia laboral deseable", "bold 20px 'Arial'", "#333333");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 231;
	this.text_3.parent = this;
	this.text_3.setTransform(132.3,-5.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A04D98").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgYAiAAQAjAAAZAYQAZAZAAAiQAAAjgZAZQgZAYgjAAQgiAAgZgYg");
	this.shape.setTransform(33.3,141.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A04D98").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiABQAjgBAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_1.setTransform(33.3,110);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A04D98").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgYAiAAQAjAAAZAYQAZAZAAAiQAAAjgZAZQgZAYgjAAQgiAAgZgYg");
	this.shape_2.setTransform(33.3,81.5);

	this.text_4 = new cjs.Text("Experiencia laboral", "bold 20px 'Arial'", "#333333");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 22;
	this.text_4.lineWidth = 231;
	this.text_4.parent = this;
	this.text_4.setTransform(132.3,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3,p:{x:132.3,y:-5.8,text:"Experiencia laboral deseable",font:"bold 20px 'Arial'",textAlign:"center",lineHeight:22.35,lineWidth:231}},{t:this.text_2,p:{x:23,y:221.2,text:"Jefe de Logística.\nJefe de Operaciones.",font:"15px 'Arial'",color:"#333333",lineHeight:19.8,lineWidth:215}},{t:this.text_1,p:{x:4.5,y:41.6,text:"Experiencia adicional en otros roles o proyectos que dan un valor agregado para desempeñar el rol de manera exitosa, es decir, la ruta de carrera que el colaborador haya seguido que le dé un mayor conocimiento general para desempeñar la posición esperada.",font:"15px 'Arial'",color:"#333333",lineHeight:16.8,lineWidth:266}},{t:this.text,p:{x:4.5,y:163,text:"Ej. Para la misma posición de Gerente de Mercadotecnia, la experiencia laboral deseable pudiera ser:",font:"15px 'Arial'",color:"#333333",lineHeight:16.8,lineWidth:266}},{t:this.instance_1},{t:this.instance}]},26).to({state:[{t:this.text_4},{t:this.text_3,p:{x:51.2,y:69.2,text:"Gerente de Ventas.\nJefe de Ventas.\nJefe de Mantenimiento.",font:"18px 'Arial'",textAlign:"",lineHeight:30.1,lineWidth:215}},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_2,p:{x:29.4,y:74.9,text:"1",font:"13px 'Arial'",color:"#FFFFFF",lineHeight:15.2,lineWidth:16}},{t:this.text_1,p:{x:30.4,y:103.4,text:"2",font:"13px 'Arial'",color:"#FFFFFF",lineHeight:15.2,lineWidth:16}},{t:this.text,p:{x:29.9,y:135.7,text:"3",font:"13px 'Arial'",color:"#FFFFFF",lineHeight:15.2,lineWidth:16}}]},4).to({state:[]},2).to({state:[]},21).wait(6));

	// Capa 1
	this.instance_2 = new lib.tarjeta02grmc5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(29).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// Capa 2
	this.instance_3 = new lib.tarjeta_para_textomc5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.5,96,0.038,0.718,0,0,0,132.5,90);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({regX:132.6,scaleX:0.99,scaleY:1.1,x:132.6,y:134.1},10,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:132.5,y:136.3},5).wait(1).to({y:134.1},0).to({regX:132.5,scaleX:0.04,scaleY:0.72,y:96},14).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,268,180);


(lib.tarjeta02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		newRoot=this;
		this.stop();
	}
	this.frame_4 = function() {
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		//this.parent.funcion(newRoot);
	}
	this.frame_33 = function() {
		//this.parent.funcion(newRoot);
	}
	this.frame_59 = function() {
		//this.stop();
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(25).call(this.frame_29).wait(1).call(this.frame_30).wait(2).call(this.frame_32).wait(1).call(this.frame_33).wait(26).call(this.frame_59).wait(1));

	// contenido
	this.text = new cjs.Text("6", "13px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 16;
	this.text.parent = this;
	this.text.setTransform(21.1,150.9);

	this.text_1 = new cjs.Text("5", "13px 'Arial'", "#333333");
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 16;
	this.text_1.parent = this;
	this.text_1.setTransform(21.1,116.6);

	this.text_2 = new cjs.Text("4", "13px 'Arial'", "#333333");
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 16;
	this.text_2.parent = this;
	this.text_2.setTransform(21.1,96.5);

	this.text_3 = new cjs.Text("3", "13px 'Arial'", "#333333");
	this.text_3.lineHeight = 15;
	this.text_3.lineWidth = 16;
	this.text_3.parent = this;
	this.text_3.setTransform(21.6,77.9);

	this.text_4 = new cjs.Text("2", "13px 'Arial'", "#333333");
	this.text_4.lineHeight = 15;
	this.text_4.lineWidth = 16;
	this.text_4.parent = this;
	this.text_4.setTransform(21.1,57.9);

	this.text_5 = new cjs.Text("1", "13px 'Arial'", "#333333");
	this.text_5.lineHeight = 15;
	this.text_5.lineWidth = 16;
	this.text_5.parent = this;
	this.text_5.setTransform(21.1,36.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9ECCC8").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjgBQgiABgZgZg");
	this.shape.setTransform(24.7,156.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9ECCC8").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgYAiAAQAjAAAZAYQAZAZAAAiQAAAjgZAZQgZAYgjAAQgiAAgZgYg");
	this.shape_1.setTransform(25.1,122);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9ECCC8").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiABQAjgBAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_2.setTransform(25.1,102);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9ECCC8").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiABQAjgBAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_3.setTransform(25.1,83.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9ECCC8").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgYAiAAQAjAAAZAYQAZAZAAAiQAAAjgZAZQgZAYgjAAQgiAAgZgYg");
	this.shape_4.setTransform(25.1,64.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9ECCC8").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgZAiABQAjgBAZAZQAZAZAAAiQAAAkgZAYQgZAZgjAAQgiAAgZgZg");
	this.shape_5.setTransform(25.1,43);

	this.text_6 = new cjs.Text("Rotación.\nPenetración de mercado. \nParticipación de mercado.\nEjecución.\nIndicadores de satisfacción\ndel cliente.\nCumplimiento de la cuota de\nventa.\n", "16px 'Arial'", "#333333");
	this.text_6.lineHeight = 19;
	this.text_6.lineWidth = 231;
	this.text_6.parent = this;
	this.text_6.setTransform(43,34.5);

	this.text_7 = new cjs.Text("KPI’s de Éxito", "bold 20px 'Arial'", "#333333");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 231;
	this.text_7.parent = this;
	this.text_7.setTransform(132.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},24).to({state:[{t:this.text_7},{t:this.text_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},6).to({state:[]},5).to({state:[]},24).wait(1));

	// Capa 1
	this.instance = new lib.tarjeta02gr();
	this.instance.parent = this;
	this.instance.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(30).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// Capa 2
	this.instance_1 = new lib.tarjeta_para_texto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:132.6,scaleX:0.99,scaleY:1.1,x:132.6,y:90.1},10,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:132.5},5).wait(1).to({regX:132.5,scaleX:0.04,scaleY:1,y:90},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265,180);


(lib.tarjeta01gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m02_tmr_Metaf();
	this.instance.parent = this;
	this.instance.setTransform(134.9,75.3,0.561,0.561,0,0,0,108.1,90.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F9D2").s().p("AhhIIIr0AAIAAyyIfPAAIAAQ8QgKBrhtALIujAAIhgCjgAwCIIQhtgLgKhrIAAw8IEkAAIAASyg");
	this.shape.setTransform(132.7,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgIBHIAAiOIARAAIAACOg");
	this.shape_1.setTransform(193.2,165.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAoQgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAYQAAATgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgdQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgUQAAgTgIgKQgJgKgNAAQgMAAgJAKg");
	this.shape_2.setTransform(185.4,167.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAnBHIgTgdIgNgUQgGgHgDgCQgEgEgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUAAAKAEQAKAEAFAKQAGAJAAANQAAAOgJALQgKAKgVADQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgGQAEgFAAgHQAAgLgHgGQgIgHgQAAIgsAAg");
	this.shape_3.setTransform(173.3,165.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBHIAAiOIARAAIAACOg");
	this.shape_4.setTransform(157.6,165.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAoQgNgOAAgZQAAgZAOgPQANgOAVAAQAUAAANAOQAOAOAAAZIAAAEIhNAAQABARAJAKQAJAJAMAAQAJAAAHgFQAHgGAEgLIASADQgEAQgMAIQgLAJgTAAQgVAAgOgOgAgTgfQgIAIgBAOIA5AAQgBgNgGgHQgIgKgNAAQgLAAgJAIg");
	this.shape_5.setTransform(149.9,167.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXBCQgKgHgGgMQgFgNAAgQQAAgPAFgMQAFgMAKgHQALgHANAAQAIAAAIAEQAHAEAFAGIAAgzIARAAIAACOIgQAAIAAgNQgLAQgSAAQgMAAgLgHgAgSgLQgIAKAAATQAAAUAJAKQAIAKAKAAQALAAAJgJQAIgKAAgTQAAgUgJgKQgHgKgMAAQgLAAgIAJg");
	this.shape_6.setTransform(138.5,166);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZA1IAAg+QAAgLgCgFQgCgGgGgCQgFgEgHAAQgKAAgIAHQgIAIAAATIAAA4IgSAAIAAhnIAQAAIAAAPQALgRAVAAQAJAAAIADQAIAEAEAFQAEAGABAHIABARIAAA/g");
	this.shape_7.setTransform(122.1,167.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiA7QgOgOAAgaQAAgcAQgOQAOgLASAAQAVAAAOAOQAOAOAAAXQAAAUgGAMQgGALgMAHQgLAGgOAAQgVAAgNgOgAgVgKQgJAKAAATQAAAUAJAKQAJAKAMAAQANAAAJgKQAIgKAAgVQAAgSgIgKQgJgKgNAAQgMAAgJAKgAgJgtIAMgbIAXAAIgVAbg");
	this.shape_8.setTransform(111,165.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIBHIAAhmIARAAIAABmgAgIgyIAAgVIARAAIAAAVg");
	this.shape_9.setTransform(103.3,165.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAuQgKgJgDgQIARgDQACALAGAFQAHAGALAAQAMAAAGgFQAGgFAAgHQAAgGgFgDQgEgDgOgDQgTgFgHgDQgHgDgEgGQgEgHAAgHQAAgHADgGQADgGAGgEQAEgDAHgCQAHgCAIAAQALAAAKADQAJAEAEAGQAEAGACAKIgRACQgBgIgGgEQgFgFgKAAQgMAAgFAEQgFAEAAAGQAAADACADQACADAFABIAOAFQATAFAHADQAIACAEAGQAEAGAAAJQAAAJgFAIQgFAIgKAEQgKAEgMAAQgTAAgLgIg");
	this.shape_10.setTransform(96,167.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBHIAAhmIARAAIAABmgAgIgyIAAgVIARAAIAAAVg");
	this.shape_11.setTransform(88.8,165.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAyBHIAAh2IgqB2IgQAAIgph4IAAB4IgSAAIAAiOIAcAAIAiBlIAGAVIAHgXIAjhjIAZAAIAACOg");
	this.shape_12.setTransform(78.3,165.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3EFB9").s().p("AtkOEIAA8HIf7AAQCWAAAACWIAAXbQAACWiWAAgAyWOEQiWAAAAiWIAA3bQAAiWCWAAIEyAAIAAcHg");
	this.shape_13.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta01gr, new cjs.Rectangle(0,0,265,180), null);


(lib.tarjeta01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Funcion global para deshabilitar las tarjetas mientras corre la animacion
		//Para el funcionamiento local de este MC
		/*validar=function() {
			if(this.currentFrame == 0 || this.currentFrame == 29 || this.currentFrame == 59) {
				console.log("if " + this.currentFrame);
				newRoot.parent.funcion("enabled");
			} else {
				console.log("else " + this.currentFrame);
				newRoot.parent.funcion("disabled");
			}
		}*/
		newRoot = this;
		this.stop();
	}
	this.frame_3 = function() {
		//console.log(this.parent.funcion);
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.busy=false;
		//this.parent.funcion(newRoot);
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		//console.log("frame: "+newRoot.currentFrame);
		//this.parent.funcion(newRoot);
	}
	this.frame_59 = function() {
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(26).call(this.frame_29).wait(1).call(this.frame_30).wait(3).call(this.frame_33).wait(26).call(this.frame_59).wait(1));

	// Contenido
	this.text = new cjs.Text("Misión del Rol", "bold 20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(132.4,14.5);

	this.text_1 = new cjs.Text("Crear, desarrollar, y monitorear la adecuada implementación del Plan Anual de Mercadotecnia por marca y canal, para garantizar la rentabilidad del negocio.", "16px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 231;
	this.text_1.parent = this;
	this.text_1.setTransform(132.5,54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},24).to({state:[{t:this.text_1},{t:this.text}]},6).to({state:[]},5).to({state:[]},24).wait(1));

	// Capa 1
	this.instance = new lib.tarjeta01gr();
	this.instance.parent = this;
	this.instance.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(30).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// Capa 2
	this.instance_1 = new lib.tarjeta_para_texto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:132.6,scaleX:0.88,scaleY:1.09,x:132.6,y:90.1},8,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:132.5},7).wait(1).to({regX:132.5,scaleX:0.04,scaleY:1,y:90},15).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265,180);


(lib.pregunta1tema3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¿Qué beneficios puede obtener la empresa al contar con perfiles de éxito? ", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 658;
	this.text.parent = this;
	this.text.setTransform(124.8,31.1);

	this.instance = new lib.iconoactividadesyretos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.7,44.7,0.803,0.803,0,0,0,55.7,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(154,201,172,0.498)").s().p("EA2hAF2InUAAIhrAAMghFAAAMg5TAAAIi9AAIpYAAIgoAAIg8AAIgBAAIhaAAQgggBgagGQhGgUgQhIQgGgYAAgcIAAj4IAAjGQAAh0BcgaQAZgIAhABIBaAAIABAAIA8AAIAoAAIJYAAIC9AAMA5TAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAcAGBcIABASIAABSIAADOIAABVIAAA3IAAADIAAAPQAACXiWAAg");
	this.shape.setTransform(416.5,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,816.6,93.4);


(lib.perfoles1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87AE65").s().p("AACAkIAAgzQgGAHgLAEIAAgNQAFgBAHgGQAFgEADgHIALAAIAABHg");
	this.shape.setTransform(136.7,97.8,0.911,0.911);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9AF48").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(137.4,97.8,0.911,0.911);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED264").s().p("AALBDQgIgDgDAAQgCAAgIADQgIADgDgBQgEgBgEgHQgFgIgDgBIgLgEQgHgCgCgDQgDgEABgHQAAgKgBgCIgGgKQgFgGAAgEQAAgDAFgGIAGgKQABgCAAgKQgBgHADgDQACgEAHgCQAJgCACgCQADgBAFgIQAEgGAEgCQADgBAIADQAIADACAAQADAAAIgDQAIgDADABQAEACAEAGQAFAIADABQACACAJACQAHACACAEQADADgBAHIABAMIAGAKQAFAGAAADQAAAEgFAGIgGAKIgBAMQABAHgDAEQgCADgHACIgLAEQgDABgFAIQgEAHgEABIgCAAIgJgCg");
	this.shape_2.setTransform(137.4,97.8,0.911,0.911);

	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(134,104.7,0.911,0.911,0,0,0,5.5,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CC1A4").s().p("AgNAiIgkAEIArhjIA4AYIgrBjg");
	this.shape_3.setTransform(133.7,105.2,0.911,0.911);

	this.instance_1 = new lib.ClipGroup_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.6,104.7,0.911,0.911,0,0,0,5.4,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CC1A4").s().p("AgxglIA4gYIArBjIgkgEIgUAcg");
	this.shape_4.setTransform(141.3,105.2,0.911,0.911);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#87AE65").s().p("AACAkIAAgzQgGAHgLAEIAAgNQAFgBAHgGQAFgEADgHIALAAIAABHg");
	this.shape_5.setTransform(90.3,97.8,0.911,0.911);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9AF48").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_6.setTransform(90.9,97.8,0.911,0.911);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EED264").s().p("AALBDQgIgDgDAAQgCAAgIADQgIADgDgBQgEgBgEgHQgFgIgDgBIgLgEQgHgCgCgDQgDgEABgHQAAgKgBgCIgGgKQgFgGAAgEQAAgDAFgGIAGgKQABgCAAgKQgBgHADgDQACgEAHgCQAJgCACgCQADgBAFgIQAEgGAEgCQADgBAIADQAIADACAAQADAAAIgDQAIgDADABQAEACAEAGQAFAIADABQACACAJACQAHACACAEQADADgBAHIABAMIAGAKQAFAGAAADQAAAEgFAGIgGAKIgBAMQABAHgDAEQgCADgHACIgLAEQgDABgFAIQgEAHgEABIgCAAIgJgCg");
	this.shape_7.setTransform(90.9,97.8,0.911,0.911);

	this.instance_2 = new lib.ClipGroup_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.7,104.7,0.911,0.911,0,0,0,5.4,6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6CC1A4").s().p("AgOAiIgjAEIArhjIA4AYIgrBjg");
	this.shape_8.setTransform(87.2,105.2,0.911,0.911);

	this.instance_3 = new lib.ClipGroup_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(95.4,104.7,0.911,0.911,0,0,0,5.4,6.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6CC1A4").s().p("AgxglIA4gYIArBjIgjgEIgWAcg");
	this.shape_9.setTransform(94.8,105.2,0.911,0.911);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#87AE65").s().p("AACAkIAAgzQgGAHgLAEIAAgNQAFgBAHgGQAFgEADgHIALAAIAABHg");
	this.shape_10.setTransform(44.7,97.8,0.911,0.911);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9AF48").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_11.setTransform(45.4,97.8,0.911,0.911);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EED264").s().p("AALBDQgIgDgDAAQgCAAgIADQgIADgDgBQgEgBgEgHQgFgIgDgBIgLgEQgHgCgCgDQgDgEABgHQAAgKgBgCIgGgKQgFgGAAgEQAAgDAFgGIAGgKQABgCAAgKQgBgHADgDQACgEAHgCQAJgCACgCQADgBAFgIQAEgGAEgCQADgBAIADQAIADACAAQADAAAIgDQAIgDADABQAEACAEAGQAFAIADABQACACAJACQAHACACAEQADADgBAHIABAMIAGAKQAFAGAAADQAAAEgFAGIgGAKIgBAMQABAHgDAEQgCADgHACIgLAEQgDABgFAIQgEAHgEABIgCAAIgJgCg");
	this.shape_12.setTransform(45.4,97.8,0.911,0.911);

	this.instance_4 = new lib.ClipGroup_6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(42,104.7,0.911,0.911,0,0,0,5.4,6.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6CC1A4").s().p("AgOAiIgjAEIArhjIA4AYIgrBjg");
	this.shape_13.setTransform(41.6,105.2,0.911,0.911);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(49.7,104.7,0.911,0.911,0,0,0,5.4,6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6CC1A4").s().p("AgxglIA4gYIArBjIgjgEIgVAcg");
	this.shape_14.setTransform(49.3,105.2,0.911,0.911);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F3231").s().p("Ah9BcIgJgCQgBAAgDgHQgFgQgHgrQgFgiAdgXQgDguAogTIgGAKQgHAMgCAJQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAAQAPgRAagMQApgUA7gBQgWADgPAJQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAQAZgDAZADQAmADAYAQQgHgCgKABIgBABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQASAHAOAOQAVAUAAAdIgNgPIgBAAIAAABQAHAWgFAWQgBgGgIgHQgBAjgKAuQgKgBgGALIgFAMQABgQgBgUQgCgmgKgPQgagohIACIhDAJQgNAfgRASQgBAGgCAkIgCAiQgBgTgKgGg");
	this.shape_15.setTransform(137.8,65.1,0.911,0.911);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F3231").s().p("AAgAVQgGgBgEgEQgHgFAAgHIAAgCQgHgFgFABIgBAAQgEgBgIAFIAAACQAAAHgGAFQgFAEgGABIg1AAIgBAAQgJgEgEgFQgDgFABgEIAAgDIgQABIgCgJIATgDQAEgIAMgBIAAAAIAxAAQAOAAAFAKQAHgDAGAAQAIAAAGADQAHgKANAAIAwAAIABAAQALABAFAIIAOACIgBAGIgMADIAAADQAAAMgPAGIgBAAgAAXgKIAAAQIABAEQACADAFADIA5AAQAGgBAAgJIAAgPQgDgFgEAAIg5AAQgHABAAADgAhYgKIAAAQIABAEQACADAEADIA5AAQAGgBAAgJIAAgPQgBgFgGAAIg5AAQgGABAAADg");
	this.shape_16.setTransform(136.8,73.3,0.911,0.911);

	this.instance_6 = new lib.Group_19();
	this.instance_6.parent = this;
	this.instance_6.setTransform(155.1,97.1,0.911,0.911,0,0,0,1.8,4);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(153.1,98.3,0.911,0.911,0,0,0,1.1,2.6);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_2_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(152.9,96.8,0.911,0.911,0,0,0,2.2,4.8);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_3_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(123.2,96.8,0.911,0.911,0,0,0,2.1,4.8);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_4_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(122.3,97.8,0.911,0.911,0,0,0,1.2,3.2);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_5_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(121.1,96.9,0.911,0.911,0,0,0,2,4.4);
	this.instance_11.alpha = 0.391;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A9B3BC").s().p("AgnAJIBAglIAOAcQgBALgUAKIgUAIg");
	this.shape_17.setTransform(141.1,92.2,0.911,0.911);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A9B3BC").s().p("AgNAVQgZgOgBgKIAOgdIBBAuIgeATQgLgFgMgHg");
	this.shape_18.setTransform(133.8,91.7,0.911,0.911);

	this.instance_12 = new lib.Group_6_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(139.6,96.3,0.911,0.911,0,0,0,0.9,4.9);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_7_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(142.3,96.3,0.911,0.911,0,0,0,1,5.4);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_8_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(144.3,95.9,0.911,0.911,0,0,0,1,5);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_9_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.9,96.3,0.911,0.911,0,0,0,0.9,5);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_10_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(148.9,95.9,0.911,0.911,0,0,0,1,5.5);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_11_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(146.4,95.8,0.911,0.911,0,0,0,1,5.5);
	this.instance_17.alpha = 0.391;

	this.instance_18 = new lib.Group_12_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(136.7,96.3,0.911,0.911,0,0,0,1.1,4.9);
	this.instance_18.alpha = 0.391;

	this.instance_19 = new lib.Group_13_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(134,96.3,0.911,0.911,0,0,0,1,5.4);
	this.instance_19.alpha = 0.391;

	this.instance_20 = new lib.Group_14_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(131.9,95.9,0.911,0.911,0,0,0,0.9,5);
	this.instance_20.alpha = 0.391;

	this.instance_21 = new lib.Group_15_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(125.4,96.3,0.911,0.911,0,0,0,0.7,5);
	this.instance_21.alpha = 0.391;

	this.instance_22 = new lib.Group_16_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(127.3,95.9,0.911,0.911,0,0,0,0.9,5.5);
	this.instance_22.alpha = 0.391;

	this.instance_23 = new lib.Group_17_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(129.8,95.8,0.911,0.911,0,0,0,0.9,5.5);
	this.instance_23.alpha = 0.391;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BBCACB").s().p("Ah0A+QAdhXAMgHQATgNApgHQATgEARgBQAkgMAhAUQAQAKAJAMIACBZg");
	this.shape_19.setTransform(128.3,96.6,0.911,0.911);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCD0D0").s().p("Ah4A+IAEhZIAZgWQAhgUAkAMIAlAFQApAHATANQAQAJAeBVg");
	this.shape_20.setTransform(147.2,96.6,0.911,0.911);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E8AF93").s().p("AAQAAIgLgCIgDAAIgHABIgWAEQAEgDAJgDIAPgCIAFAAIAMACQAIAEACAFQgEgFgIgBg");
	this.shape_21.setTransform(131.9,72.2,0.911,0.911);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1BB93").s().p("AgUCbQgOgFgRgNQgjgYgUgiIgBgEIgBgWIgBAAQgDAAgDgCIgDgDIAAAAQgCgFgDgQIgEgbQgCgJAAgIQAAgHACgCQADgBAEAEQADACAAADIACgBQgEgSAAgVQAAgvAZgNIAbgUQAfgTAfAAIADAAIAAAAIABAAIABAAIAAAAIABAAIAAAAQAfgBAhAUQARAKAKAKIABAAQAYANAAAvQAAAVgEASIgBAEIADgDIAGgFQAEgDADABQAFADgEAUIgFAcQgDATgCACIAAABQgDAFgGAAIgBAAIgDAaQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgKAPgQAQQgaAagcAPIgCAAQgGACgKABIgHAAQgKAAgKgDg");
	this.shape_22.setTransform(137.1,73.1,0.911,0.911);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D6AE89").s().p("AgKA7QhVgDAVgVQATgTAJghIAFgfIApgJQAogGABAPQABAZAlBRQgdACgcAAIgggBg");
	this.shape_23.setTransform(137.4,87.5,0.911,0.911);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C9C9C9").s().p("AgmBMIAWiXIAeApQAeAtgFAbIgHAmg");
	this.shape_24.setTransform(105.4,94.5,0.911,0.911);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C9C9C9").s().p("AgdBGQgEgXgEgLQgMgoAgglQARgSARgKIAIAiQAHAlADAXIAGAtg");
	this.shape_25.setTransform(76.6,95.1,0.911,0.911);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BBCACB").s().p("AgOAUQgXgOgCgKIAOgaIBBAoIggAVQgKgEgMgHg");
	this.shape_26.setTransform(87.3,87.1,0.911,0.911);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BBCACB").s().p("AglAIIA9giIAOAaQgCAKgUAJIgSAIg");
	this.shape_27.setTransform(94.1,87.5,0.911,0.911);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9D9393").s().p("AAdAaQgGgBgEgEQgHgHAAgJIAAgDQgGgFgFABIgBAAQgGgCgFAHIAAACQAAAJgGAHQgFAEgFABIgzAAIgBgBQgPgHAAgOIAAgFIgOACIgDgMIASgDQAFgJAKgCIAvAAQANAAAGAMQAGgEAGABQAHgBAGAEQAGgMAMAAIAvAAQAMACADAJIASADIgCAMIgOgCIAAAFQAAAOgOAHIgCABgAAagIIAAANQAAAGAFACIAsAAQAHgEAAgFIAAgNQAAgBgGgBIgtAAQgDgBgCAEgAhQgJIAAAOIABACQABADAEADIAsAAQAGgCAAgGIAAgNQgBgDgGAAIgsAAQgFABAAABg");
	this.shape_28.setTransform(90.2,68.7,0.911,0.911);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#71706F").s().p("ABqBBIgGgwQgCgIgGgJQgMgQgWABQgJAAgOAGQgpATgdgWIgBAAQgRgGgNABQgcADgFAdIgGAxQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQgLhhAdgDQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAHgIQAKgHAVgCQASgBAPgFQAOgGAKAAQBEgBAVAdIABACQAIAEAFAKQAJASgCAfIgCAnQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_29.setTransform(90,60.6,0.911,0.911);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDAB86").s().p("AhEADIAjgEIARgBIAQAAQASAAARABIAiAEg");
	this.shape_30.setTransform(90.4,61.9,0.911,0.911);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EDAB86").s().p("AhEADQARgDARgBIASAAIAQgBQARAAARABQASABARADg");
	this.shape_31.setTransform(90.3,63.4,0.911,0.911);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F9BD9C").s().p("AgTCTQgNgFgRgMQghgXgTghIgBgDIAAgVIgBAAQgEAAgDgDIgCgCIAAAAIgFgUIgEgZQgCgJAAgHQAAgHADgCQACgBAEAEQABABAAAAQABAAAAABQABAAAAABQAAABAAAAIACAAIgCgMQgCgNAAgNQAAgtAYgLIAAAAIAZgTQAegSAdAAIAGAAQAdgBAfATQAQAJAKAKIABAAQAXALAAAtQAAAUgEASIgBAEIADgDQAIgIAEABQAEACgDAUIgEAbQgDASgCACIgBAAQgDAFgFAAIgBAAIgDAZIgBAEQgfAsgsAXIgCABQgLADgKAAQgKAAgKgDg");
	this.shape_32.setTransform(90.3,69.5,0.911,0.911);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EDAB86").s().p("AgJA4QhSgDAVgUQASgSAIgfIAFgeIAngIQAmgFABANQABAYAjBNQgcACgaAAIgegBg");
	this.shape_33.setTransform(90.6,83.1,0.911,0.911);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D6D8D8").s().p("Ai1BUIgBgYIAAg7QADgfAVgRQAVgQAigJQASgEANgBQA3gFA5gBQBAAAAQAGQAYAJAUAzQATAuAAApIgBAOg");
	this.shape_34.setTransform(91.5,93.9,0.911,0.911);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7F795E").s().p("AgiAIIA4ggIANAYQgBAKgTAJIgRAGg");
	this.shape_35.setTransform(48.6,87.2,0.911,0.911);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7F795E").s().p("AgMASQgVgNgCgIIANgZIA6AoIgbARIgVgLg");
	this.shape_36.setTransform(42.2,86.8,0.911,0.911);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DAA675").s().p("ABmAiQgDgUgjAAQgtAEgVgBQgagBgYgSIgSgTQgLAogGAEQgEADgFAbIgFAaIgLgRQgMgRABgDQACgEACgLQACgPgDgLQgCgKAAgNQABgQAGgGIAAAAQgCgEAjgOQAngRAkgDQAmgDAvAbQAtAaABAVQABAWgEAaQgDAcgGABQgEABgGAJIgDAHQAIgSgFgfg");
	this.shape_37.setTransform(45,62,0.911,0.911);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C4B98C").s().p("AhvBRQAnh+ANgJQAbgSA6gDQAggLAdARQAPAJAIALIACCCg");
	this.shape_38.setTransform(36.7,93.4,0.911,0.911);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C4B98C").s().p("AhzBRIAFiCIAXgUQAdgRAgALIAgAEQAkAGARALQAJAGAQAlQAQAmAQA2g");
	this.shape_39.setTransform(54.6,93.4,0.911,0.911);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F9BD9C").s().p("AgRCJQgMgFgQgLQgfgWgRgeIgBgDIgBgUIgBAAQgDAAgFgEIAAgBQgCgDgDgPIgDgXIgCgPQAAgHACgBQACgBAFADQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIACAAQgEgQAAgTQAAgqAWgKIABgBIAXgRQAcgRAbAAIAFAAQAcgBAdARQAPAJAJAJIAAABQAWAKAAAqQAAAMgCAMIgCALIAAAEIACgDQAIgIADACQAEACgDASIAAACIgEAXQgCAOgCAEIgBABQgDAEgFAAIgBAAIgCAYIgBADQgcApgrAWIgBABQgLADgKAAQgJAAgIgDg");
	this.shape_40.setTransform(45,70.4,0.911,0.911);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDAB86").s().p("AgIA0QhMgCATgTQAQgQAIgeIAFgcIAkgHQAkgFABAMQABAXAgBHQgaACgYAAIgcgBg");
	this.shape_41.setTransform(45.4,83.1,0.911,0.911);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#87AE65").s().p("AggA2QgIgFgJgQQgGgKgGgPQgDgIAEgEQAEgFAIgBQAFAAADAEIAHAKIAEAHIAVgYQAYgcAegMQAKgEAGABIABABIgEAEQgcAWgTAbQgOATgNAeIgCAEQgDAGgFAAQgDAAgEgDg");
	this.shape_42.setTransform(137.9,119,0.911,0.911);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#87AE65").s().p("AggA2QgIgFgJgQQgGgKgGgPQgDgIAEgEQAEgFAIgBQAFAAADAEIAHAKIAEAHIAVgYQAYgcAegMQAKgEAGABIABABIgEAEQgcAWgTAbQgOATgNAeIgCAEQgDAGgFAAQgDAAgEgDg");
	this.shape_43.setTransform(91.4,119,0.911,0.911);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#87AE65").s().p("AggA2QgIgFgJgQQgGgKgGgPQgDgIAEgEQAEgFAIgBQAEAAAEAEIAHAKIAEAHIAVgYQAYgcAegMQAKgEAGABIABABIgEAEQgcAWgTAbQgOATgNAeIgCAEQgDAGgFAAQgDAAgEgDg");
	this.shape_44.setTransform(46.8,119,0.911,0.911);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DFE5DF").s().p("AlZM0QighEh8h7Qh6h7hEifQhGimAAi1QAAi0BGilQBEigB6h8QB8h6CghEQClhGC0AAQC1AACmBGQCfBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7ifBEQimBGi1AAQi0AAilhGg");
	this.shape_45.setTransform(91.8,90.3,0.911,0.911);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EFEFEF").s().p("AmGOcQizhMiLiKQiLiMhMi0QhPi6AAjMQAAjLBPi6QBMi1CLiKQCLiLCzhMQC7hPDLAAQDMAAC6BPQC0BMCMCLQCKCKBMC1QBPC6AADLQAADMhPC6QhMC0iKCMQiMCKi0BMQi6BPjMAAQjLAAi7hPg");
	this.shape_46.setTransform(91.4,91.4,0.911,0.911);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_18},{t:this.shape_17},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_5},{t:this.shape_13},{t:this.instance_4},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_3},{t:this.shape_8},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,182.8);


(lib.perfilexito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.perfoles1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(179.8,180,1.969,1.969,0,0,0,91.3,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359.9,359.8);


(lib.m02_TMR_PERFILDEEXITO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59595B").s().p("AgEATQgIgCgEgHQgEgHACgHQACgHAHgFQAHgEAHACQAIADAEAGQAEAHgCAHQgDAIgGAEQgFACgFAAIgEAAg");
	this.shape.setTransform(263.2,244.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7DA489").s().p("AkLjwQAtgMDBhpQBfg0BYgyIByIaQhPBHhlBRQigCCiVBjg");
	this.shape_1.setTransform(283.7,281.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEEEE").s().p("AiyCJIgUisIFSh9IA7DQIl4Byg");
	this.shape_2.setTransform(277.8,241.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6D0B4").s().p("AgYEbIgIhHIhEiQIhXh/IhCg9QgDgJACgKQAEgTAaAAQAugBApA9QAFAIAbAZQgBhWACg8QAEhyAlgNQDJhFBeEOQAYBCgBBGQAABFgYBBIgCAFQgDAIANBLQAMBHgBABQg8AThMAQIiAAZQgFgTgFgzg");
	this.shape_3.setTransform(263.7,207.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhiFfQg+gRgyglQgzglgjgyQgkgygRg7QgSg+AFg/QAEhAAag6QAZg4AqguQAqgtA2gcQA5geA/gIQA/gJA+ANQA9ANA1AgQA1AhAnAwQAoAxAVA7QAVA7AAA+IAAABQAABLgeBFQgeBGg3AzQguArg5AZQg7AZg9AEIgaABQgxAAgxgNgAgJlYQhBACg7AYQg4AYgtAqQguArgcA2QgcA5gHBBQgHA/ARA9QARA8AkAyQAkAzAzAiQA1AkA+APQA/APA9gJQA+gJA3gdQA3geApguQAqgwAWg7QAWg7AAg/IAAAAQAAhdguhPQgfg1gvgoQgxgog5gUQg5gUg6AAIgJABg");
	this.shape_4.setTransform(202.4,158.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1DBAB9").s().p("AgrBLQgEgCgBgEQgBgFACgDIBMiDQACgEAFgBQAEgBAEADIABABQAHAFgEAIIhNCCQgCAEgEABIgDAAIgFgBg");
	this.shape_5.setTransform(254.7,190.9);

	this.instance = new lib.Path_28();
	this.instance.parent = this;
	this.instance.setTransform(229.2,151,1,1,0,0,0,3.2,3.2);
	this.instance.alpha = 0.309;

	this.instance_1 = new lib.Group_18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(200.7,142.6,1,1,0,0,0,27.8,16.1);
	this.instance_1.alpha = 0.219;

	this.instance_2 = new lib.Path_27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(202.9,157.9,1,1,0,0,0,34.9,34.9);
	this.instance_2.alpha = 0.5;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1DBAB9").s().p("AjWFYQiPhZglijQgmijBYiPQBaiOCjgmQCkgmCOBZQCPBZAmCkQAlCihYCPQhaCPijAmQgxALguAAQhvAAhkg/gAhNlTQiOAhhMB6QhNB7AhCMQAgCNB7BMQB7BNCLghQCNggBNh7QBNh7ghiMQggiMh7hNQhWg2hfAAQgnAAgqAKg");
	this.shape_6.setTransform(202.9,157.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#085466").s().p("ABnChIk2i+IBSiKIE2DEQAVANACAcQADAcgRAbIgBABQgRAbgbAKQgMAFgKAAQgNAAgLgHg");
	this.shape_7.setTransform(272.1,201.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AimgWIBGhuIEHCrIg6Beg");
	this.shape_8.setTransform(247,187.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DD2CA").s().p("AgKgQIAOAAIAHAfIgTACg");
	this.shape_9.setTransform(201.6,164.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgGAXQgDgGgEgPIgFgOIALgCIgJgZIAbgTIgDArQABASAKA4QgUgagFgKg");
	this.shape_10.setTransform(199.4,155.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#414042").s().p("AA2gPIgKgJIhmgFIgVBNIgDAAIAPhXIArgJIAAAJIBHAHIAUgJIACARIAAAAIAOBJIgQAAg");
	this.shape_11.setTransform(203.2,171.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDA96F").s().p("AgSAPIgFgUIAagJIAVAAIAAAMIgbARg");
	this.shape_12.setTransform(204.2,163.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDA96F").s().p("AgSACIAHgQIAPAGIAPASIgcAEg");
	this.shape_13.setTransform(195.6,161.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DB635E").s().p("AgMgGIALgUIgEgNIAJgKIAJALIgHAMIAGAXIgDAOIgLAng");
	this.shape_14.setTransform(201.6,156.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414042").s().p("AACA1IgTgZIgegEIgTgTIgDgyIAWAtIATATIA9gDIAPgoIAWgdIgPAhIgGA0IAIAOIgnAJg");
	this.shape_15.setTransform(202.3,159.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgLgEIAKgTQAHgNABgGQACgFAAgOIAZARIgZAaIAPAJIg5BHQAPgyAHgQg");
	this.shape_16.setTransform(204.7,154.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbgDIABgWIABgQIACgJIAPASIAdgeIAHAGIgBAPQgBAGgIANQgJAPgBAEQgFAJgIAeIgJAbQgMgxgBgRg");
	this.shape_17.setTransform(202.8,154.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AgHBpIgNAhIgxgDIAPhXIgLAAIgJABIgKgBQgDgCgFgFQgFgGgCgEQgBgDAAgIQAAgHABgEIAJgMQADgIAHglQAFghAIgLQAGgHAXgNIAWgLIATAcIAigrIAYAUIAVALQAOAGAEAGQACAFgBALIgBAQIgBAZQAAASgCAHQgDAOgOAsIAQBbIhbADg");
	this.shape_18.setTransform(201.9,162.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AhLBsIgChRIAEhwIAvgYIBlAbIADCjIg2ATIgFgYIgJh5IgYABIgDCag");
	this.shape_19.setTransform(203.4,183.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDA96F").s().p("AgBALQgGgDACgIIADgIQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQAHABgCAKQgCAKgEAAIgBAAg");
	this.shape_20.setTransform(205.8,144.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDA96F").s().p("AgFABQgCgJAGgBQAFgCACALQACAJgGACIgBAAQgEAAgCgKg");
	this.shape_21.setTransform(199.1,144.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#403024").s().p("AAcADQgDgBgLAAIgOABIgNAAQgJACgEACQgEABgCAMIgBAMQgFgQAAgPQAAgLAGgJQAIgMASAAQAXAAAKAGQAKAGACAOQACAUgJARQACgZgGgEg");
	this.shape_22.setTransform(202.5,141.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDA96F").s().p("AABAnQgGAAgDgBQgGgDgHgHQgHgHgCgGQgDgIABgXIACgWIA/AAIAAAWQAAAYgDAIQgCAFgGAHQgGAIgFACQgDABgFAAIgCAAg");
	this.shape_23.setTransform(202.5,144.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FD8A5A").s().p("AgNABQgKgPAHAGQALAIANgDQAHgCAFgEIgCAJQgEAJgJABIgDAAQgJAAgGgJg");
	this.shape_24.setTransform(202.5,149);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDA96F").s().p("AgWgBIABgVIAqgDIACAkIgiAPg");
	this.shape_25.setTransform(202.7,149.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgGIgCgLIAAgLIADAAIACASIACAGIAAAEIgBADIABABIAAABg");
	this.shape_26.setTransform(272.6,86.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#83582C").s().p("AgOASQgBgBABgEIACgIIgBgFIADgJQACgJAHgBIAHABQACABACAFIACAFQADAEABAEQAAADgBAHQAAAGgCABQgBABAAAAQgBABAAAAQgBAAgBgBQAAAAgBgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQgBgFACgEQACgFgBgIIgMAAIgBAFQAAAFACADIAAAEQACAIgBABQgCACgEAAQgEAAgCgCg");
	this.shape_27.setTransform(274.1,79.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEBF87").s().p("AgFAFQgCgFABgDIABgEIAMAAIABAEQAAAGgCABQgCADgDACQgCAAgEgEg");
	this.shape_28.setTransform(274.2,79.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDA96F").s().p("AgGAAQABgFAFAAQAHAAAAAFQAAAGgHAAQgFAAgBgGg");
	this.shape_29.setTransform(274.2,80.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEBF87").s().p("AgGAFIAAgFIACAAIAAgJIAIAAIABAJIADAAQAAAKgIAAQgEAAgCgFg");
	this.shape_30.setTransform(274.2,80.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEBF87").s().p("AgCASIACgCIAAgEIAAAAIgBAEIgCAAIABgIIACgFIAAgOIAAgHIADAAIABAfIgBADIgEADg");
	this.shape_31.setTransform(276.2,86.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAQAAQgBAQgHAAIgBABQgIAAgCgQg");
	this.shape_32.setTransform(274.2,81.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DB635E").s().p("AgPAhIgBgKIACgRIABgmIACgBQABARAKAAQAHgBABgQIABAAIABARIAHApQAAAFgBAEg");
	this.shape_33.setTransform(274.4,84.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#213D60").s().p("AAAAhIgBgIIABgVIgDAAIAAgPIAAgHQABgIABgCQABgCAEgCIgDA2IACALg");
	this.shape_34.setTransform(272.6,84.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#213D60").s().p("AgFgdQAFADABACQACADABANIACAOIgEAAIABAHIgBARg");
	this.shape_35.setTransform(275.9,83.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DCA042").s().p("AAGAfIgBgRIABgIIgCgHIAAgaIgFAAIgBASIgBAOIACAaIgCABIgFAAQgEgRgBgIIAAgLIgDgYIABgCIAfgBIABAFIgCAUIABAQQAAAHgDAPIgDAAg");
	this.shape_36.setTransform(274.4,90.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DB635E").s().p("AgCAIIgCgCIADgOIAFABIgBAFIACAIIgCACQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_37.setTransform(275.2,93.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DB635E").s().p("AgFAIIgBgBIAAgBQAGgGAAgCIAAgFIAGgBIABALQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCAAIgDADIgCABIgDgBg");
	this.shape_38.setTransform(273.5,93.9);

	this.instance_3 = new lib.CompoundPath_65();
	this.instance_3.parent = this;
	this.instance_3.setTransform(278.5,92.4,1,1,0,0,0,5.1,2.4);
	this.instance_3.alpha = 0.398;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EEBB59").s().p("AAAAAQACgCABABIABABIgBAAIgHADg");
	this.shape_39.setTransform(236.8,91.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EEBB59").s().p("AgCAAIgCAAIACgBQACgBAEAEIgGgCg");
	this.shape_40.setTransform(233.7,91.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAAgCIAAAAIABAEIgBABg");
	this.shape_41.setTransform(236.3,80.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DCA042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_42.setTransform(236.4,83);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DCA042").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_43.setTransform(234.4,83);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABgBAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_44.setTransform(236.3,77.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQgBAAABgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_45.setTransform(234.7,77.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FD8A5A").s().p("AgBAAQgBAAAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAQACACAEgCQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_46.setTransform(235.5,78.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6DB19F").s().p("AABACIgFADIgCgGIACgEIAFAFIAEgFIACAFIgCAFg");
	this.shape_47.setTransform(235.5,78.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgEADg");
	this.shape_48.setTransform(236.7,80.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDA96F").s().p("AAAACIgBAAIgCgCIABgCIADACIADADg");
	this.shape_49.setTransform(234.7,80);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#443123").s().p("AABAEIgIgDIAAgCIAIgCIAGAFIAAACIgDAAIgDAAg");
	this.shape_50.setTransform(236.9,91.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#443123").s().p("AgFAEQgBgBAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAIAFgDIABgCQACgBAGADIAAACIgIADIgDAAIgCAAg");
	this.shape_51.setTransform(233.6,91.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#403024").s().p("AAFABIgFABQgDgCgCABIgCAGIgBgHQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAQAJAAABAFQABAEgDAEQgBgFgBgBg");
	this.shape_52.setTransform(235.6,76.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FDA96F").s().p("AgCAJQgEgCgBgDIAAgMIAOAAQABAJgBADQgBADgEACg");
	this.shape_53.setTransform(235.6,77.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_54.setTransform(235.6,78.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6DB19F").s().p("AgFANIgHgCIANgHIADgDIABgKIACgEIAEAIQADALgDAEQgBAEgEAAIgEAAIgHgBg");
	this.shape_55.setTransform(236.3,80.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7BC0B0").s().p("AgMAKQgDgDAAgGQgCgHADgFIADgBIAIAMIAUAEIgDADIgOAHQgJgBgDgDg");
	this.shape_56.setTransform(235.1,80.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DB635E").s().p("AgEAVIABgkIACgEIgDgEIAEgBIACACIgCADIACAEIADAkIgFAEg");
	this.shape_57.setTransform(235.7,81.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3E5665").s().p("AgNAAIAAgCIAOABIAMgBIABACIgOADg");
	this.shape_58.setTransform(235.4,83.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8DD2CA").s().p("AgOAVQgDgCAAgFIABgIQgDgGAAgCQgCgIADgFIAFgDIAIgCIACgEIADAFIAFgFIACAGIAJADIAEAJQACALgCAEQgBABgFACIgCAKIgOACg");
	this.shape_59.setTransform(235.5,80.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EEBB59").s().p("AAIAYQgCgEgBgMQgCgLgCgDIgBAAQgCAFgFAUQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgDgVADgNIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAEQADAVgEAPQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAgAAAgKIADAAIABgNIgEAAg");
	this.shape_60.setTransform(235.4,85.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DCA042").s().p("AgMAsIgFgDIgCgDIACgBIACglQgCgaACgJIAEgJIAaAAIADAKIAAA1IABARIABABIgBAEQgFAFgFgDQgCgCgCgRQABgYgBgIQgCgJgBgBIgCACQgCAOgCAYIAAAMQgBAIgCACIgCABIgDgBg");
	this.shape_61.setTransform(235.2,87.4);

	this.instance_4 = new lib.Path_26();
	this.instance_4.parent = this;
	this.instance_4.setTransform(238.8,89.9,1,1,0,0,0,5.4,2);
	this.instance_4.alpha = 0.398;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8DD2CA").s().p("AAEAKIgIgSIAAgBIAJATg");
	this.shape_62.setTransform(225.7,70.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BD3A3A").s().p("AgIgDIgBABIAAgBIACgGIAEAGQADACAKgCQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAgGAAIgEABQgBAAAAAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAFIgDABg");
	this.shape_63.setTransform(227.3,67.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgBAAIACgBIABABIgCACg");
	this.shape_64.setTransform(228.7,67.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgDAAIABgCIAGADIAAACg");
	this.shape_65.setTransform(225.9,67.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgEAEIABgDIgCAAIgBgFIACgCIAGALIABgLIAEADIgCADIABABIgEAGg");
	this.shape_66.setTransform(227.4,66.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FDA96F").s().p("AADAPIgCgEQgKgLgBgFIAAgIIABgFIAGADIgCAJIAJAPQABABAEAAIADABIgBABIgDAAQABABAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBABIAAgBIAAABIgBAAIgBAAIABABIgBAAIgBgBIAAABIgBABg");
	this.shape_67.setTransform(226.6,69.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FDA96F").s().p("AgDAKIAAgBIACgBIAAgBIgCABIgBABIgBAAIABgBIACgBIABAAIAAgBIgBABIgCAAIgBABIAAgBIABAAIABgBIABgBIAAAAIgBAAIgBABIgBABIgBgBIACgBIABgBIACAAIACABIACgBIgBgIIABgDIADgCQACAMgCAEIgFACIgBAAIgCABg");
	this.shape_68.setTransform(228.3,68.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9A482E").s().p("AgIARQgEgFAAgIQACgPABgBQACgFAFgBQAGAAAEADQACADACAJQABAIgBAFQgDAGgDAAQACgFAAgHIgBgIQgDgBgCgDIgBgEIgBAEIgGAGIAAARIADAEQgDAAgCgCg");
	this.shape_69.setTransform(227.4,64.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FDA96F").s().p("AgEAGQgCgEAAgDQAAgIAGAAQAHAAAAAIQAAAEgCADQgCAEgDAAQgCAAgCgEg");
	this.shape_70.setTransform(227.4,64.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6DB19F").s().p("AgRgCIAZgOIAKATIgZAOg");
	this.shape_71.setTransform(227.1,69.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DB635E").s().p("AgGATIgBgTIgBACIgIgCIAFgNQACgCAIgDIAFAKIACgKIAIAFQACADABAIIgDACIgCADIABAQg");
	this.shape_72.setTransform(227.2,67.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#122A43").s().p("AgBAWIgDgWIADgNIABgJIAFAAIgDAJIgCANIADAXg");
	this.shape_73.setTransform(226.5,71.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#213D60").s().p("AgKAWIgCgWIACgNIACgJIAUAAIACAVIgBAWQgGACgIAAg");
	this.shape_74.setTransform(227.4,71.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FD8A5A").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_75.setTransform(227.4,65.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FEBF87").s().p("AACAaQgDgEgBgFIABgHIgDgTIABgGIgBgJIAJgCIgBAsIABAIIgCABIgBgBg");
	this.shape_76.setTransform(226.8,75.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FEBF87").s().p("AACAaQgDgEgBgFIABgHIgEgTIABgGIgBgJIAJgCIgBAsIADAIIgCABIgCgBg");
	this.shape_77.setTransform(228,75.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DB635E").s().p("AgBAGIgDgHIAAAFIAAAAIgBgGIAAgDIABgEIAHANQADADAAABQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDgBgBgCg");
	this.shape_78.setTransform(227,78.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DB635E").s().p("AgBAGIgCgHIgBAFIAAAAIgBgKIABgCIABgBIAHANQADADgBABQAAABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgDgBgBgCg");
	this.shape_79.setTransform(228.1,78.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6C2615").s().p("AgIAKIAAgUIARAAIAAAUg");
	this.shape_80.setTransform(227.4,65);

	this.instance_5 = new lib.CompoundPath_64();
	this.instance_5.parent = this;
	this.instance_5.setTransform(231.3,76.8,1,1,0,0,0,4.7,2);
	this.instance_5.alpha = 0.398;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQgBgBABAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAgBABQAAABAAAAQAAAAgBABQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_81.setTransform(193.3,84.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#050001").s().p("AgHAGIAAAAIgCgHQABgDADgCQAEgDACAAQADgBADAEQADADAAADIgBAHQgBABABgBQAAgGgBgBQgCgBgGABIgEADIAAAHIgBABg");
	this.shape_82.setTransform(194.1,83.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FDA96F").s().p("AgBALIgEgDIgCgIIABgIIAKgCIAEAGIgCAMIgCADg");
	this.shape_83.setTransform(194.3,84.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FDA96F").s().p("AAAADQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABABAAAAQAAABAAAAQABABAAAAQgBAAAAABQAAABgBAAQAAABAAAAQgBAAAAAAQAAABAAAAIAAgBg");
	this.shape_84.setTransform(194.9,84.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4E5C6E").s().p("AgPAXQgCgCAAgEIAAgIIADgPIAEgKIgDgEIABAAIAGABIABgDIACAAIgBAEIAEAAIABAEIABAEIgBADIACAAIABgCIAAgEIgCgEIACAAIABgFIABAAIAAAEIACAAIADADIACAMIAFATQAAABAAAAQAAABAAAAQgBABAAAAQgBABgBAAIgDgDQgDgDgDgIIgDgHIgEADIgEAFIgGAPQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAg");
	this.shape_85.setTransform(194.6,93.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgDACIAAgEIgBgDIAAgEIAFAHIAEAIg");
	this.shape_86.setTransform(195.1,86.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FD8A5A").s().p("AgBAGIgCgFIgBgEQAAgBAAgBQAAgBABgBQAAAAAAAAQAAgBAAAAQACAAACAEQAEADAAABQAAAJgDAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_87.setTransform(194.1,85.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2B271C").s().p("AgMATIAOgXIAIgRIADABIgJAUIgOAVg");
	this.shape_88.setTransform(194,88.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BCAEA4").s().p("AgEgDIACgDIACgCIACAGIADAFIgFAGg");
	this.shape_89.setTransform(193.6,86.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FDA96F").s().p("AAAAFIAAgFIgCgBIADgFIACAFIgDAIg");
	this.shape_90.setTransform(193,91.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6B584B").s().p("AAAAAIgBgRQABgBACAVIAAAPIgCABg");
	this.shape_91.setTransform(195.7,88.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#95847D").s().p("AABAXIgDgcIgFgPIACgFIAIADIAEAbIgBAPIgCAAIgBAHg");
	this.shape_92.setTransform(195.4,88.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgHAFg");
	this.shape_93.setTransform(192.5,91.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6B584B").s().p("AABAUIgDgKIABgYIgBgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAIQABAEgCALIABANIAEAJIgBACg");
	this.shape_94.setTransform(192.8,88.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#95847D").s().p("AgMALQgBgLACgOIAEgKIANgFIAFALIACABIAAAFQgDAagEAIIgEADIgGAFQgHgOgBgFg");
	this.shape_95.setTransform(192.8,88.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4E5C6E").s().p("AgGABIAAgCIAEABIAEAAIAEgBIABACIgDABIgHAAg");
	this.shape_96.setTransform(195.8,98.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4E5C6E").s().p("AgFADIABgDIACAAIAEgBIADgCIABADIgGADg");
	this.shape_97.setTransform(193.1,99);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#293544").s().p("AgUALQgBgFACgMIACgMIACgHQADgFAAgDIgBgEIACgEIAPAEIAGgCIACAEIADAEIAEAYIACAIIgBARIgCASIAAADIgLAAQgBgVAAgIIABgFIgEgLIgDgHIgDAGIgCAHIgDAOIABAOIgCALIgIADQgDgWAAgJg");
	this.shape_98.setTransform(194.5,95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2B271C").s().p("AgDAGIgJAAIAAgGIAAAAIABgEIAIgBIADADIAFADIAHABIABADIgEABIgGAAIgGAAg");
	this.shape_99.setTransform(196.6,99.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2B271C").s().p("AgCAGQgFAAgBgCIABgEIAAgDIAHgCIABAEQAEADADACIAAACIgHAAIgDAAg");
	this.shape_100.setTransform(193.7,99.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5D4736").s().p("AgMAUIAJguIAJABIAHAXIABAZIgNAEg");
	this.shape_101.setTransform(194.3,88.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2B271C").s().p("AADAPIgQgMIAGgLIALgJIAJAGIgFAcg");
	this.shape_102.setTransform(191.9,92.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FDA96F").s().p("AgDAKIgDgMIAAgHIAJAFIAAAFIAEACIgCAHg");
	this.shape_103.setTransform(194.2,85.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDA96F").s().p("AgCACIACgHIADABIgBAKg");
	this.shape_104.setTransform(195.8,91.2);

	this.instance_6 = new lib.CompoundPath_63();
	this.instance_6.parent = this;
	this.instance_6.setTransform(198.2,97.9,1,1,0,0,0,5.4,2.2);
	this.instance_6.alpha = 0.398;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#8DD2CA").s().p("AgCgDIADAAIACAGIgEABg");
	this.shape_105.setTransform(264.7,72.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#231F20").s().p("AgBAFIgDgHIADgBIgCgGIAGgEIgBAKIADASg");
	this.shape_106.setTransform(264.1,70.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#414042").s().p("AANgDIgCgCIgPAAIgKgBIgEASIgCAAIAEgVIALgCIAAACIAQACIAGgCIABAMIACAJIgDAAg");
	this.shape_107.setTransform(265.1,74.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FDA96F").s().p("AgEADIgBgEIAGgCIAFAAIAAADIgGADg");
	this.shape_108.setTransform(265.3,72.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FDA96F").s().p("AgEAAIACgCIADABIADADIgGABg");
	this.shape_109.setTransform(263.2,72);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DB635E").s().p("AgCgBIACgFIAAgDIABgCIACACIgBADIABAGIgBADIgCAJg");
	this.shape_110.setTransform(264.7,70.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#414042").s().p("AAAANIgEgGIgHgBIgFgFIAAgLIAFAKIAFAFIAOgBIAEgKIAFgGIgEAIIgBAMIACADIgKADg");
	this.shape_111.setTransform(264.9,71.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#231F20").s().p("AgCAAIAEgJIABgFIAGAEIgGAGIADADIgNAQg");
	this.shape_112.setTransform(265.5,70.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgGAAIABgKIAAgBIAEAEIAGgIIACACIgBADIgEAKIgFAQg");
	this.shape_113.setTransform(265,70.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#58595B").s().p("AAAAaIgEAIIgMgBIADgVIgGAAQgDgBgCgDQAAgDAAgDIADgCIACgLQABgIADgDQACgDAKgFIAEAHIAJgKIAGAFIAEACIAFADIAAAIIgBANIgEANIAEAWIgXABg");
	this.shape_114.setTransform(264.8,72.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#231F20").s().p("AgOAoIgGgEIADgDIgDgDIAAhAIAMgHIAYAHIACBBIADAEIgCAGIgFgCIgGABIgBgEIACgFIgDgJIgDgSIgCgcIgFAAIgCA1IABACIgBADIABAHIgJgBg");
	this.shape_115.setTransform(265.4,78.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#414042").s().p("AgKAEIgBgBIAAgBQAAgBAFgBIAGgEIALADQACADgBACQgBABgGgBIgFAAIgFABIgFgBg");
	this.shape_116.setTransform(263.5,82.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#414042").s().p("AgFADIABgDIgBgEIAKAAQABAFgBACQgBACgEAAQgDAAgCgCg");
	this.shape_117.setTransform(266.7,83);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQABAAAAgBg");
	this.shape_118.setTransform(265.7,67.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FDA96F").s().p("AgBABIABgDQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_119.setTransform(264.1,67.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#403024").s().p("AAHABIgHAAIgGABIgBAGQgCgEAAgEQAAgHAIAAQAKAAAAAHQABAEgCAEQAAgGgBgBg");
	this.shape_120.setTransform(264.9,67);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FDA96F").s().p("AgBAJQgFgCgBgDIAAgNIAPAAIgBANQgBADgEACIgCABIgBgBg");
	this.shape_121.setTransform(264.9,67.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FD8A5A").s().p("AgDAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBABABQADACAFgDQAAAEgEABQgCAAgCgDg");
	this.shape_122.setTransform(264.9,68.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FDA96F").s().p("AgFAAIAAgFIAKgBIABAIIgIAFg");
	this.shape_123.setTransform(265,69.1);

	this.instance_7 = new lib.Path_25();
	this.instance_7.parent = this;
	this.instance_7.setTransform(268.2,81,1,1,0,0,0,5.7,2.1);
	this.instance_7.alpha = 0.398;

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#263C48").s().p("AAAAAIAAAAIABAAIABABg");
	this.shape_124.setTransform(178.7,79.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#263C48").s().p("AgDABIAAgBIAHAAIgBABg");
	this.shape_125.setTransform(181,80);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FDA96F").s().p("AgFAPIAAgDIAAgCIAAACIgBAEIAAABIgBAAIAAgCIAAgEIADgFIABgCIAFgVIAGAAIAAAFQgBAFgGALIABADIgBADIgBACIAAADIgBAAIAAgCIAAgBIAAgCIAAACIgBACIAAACIgBABIAAgDIAAgCIAAgCIAAACIgBAEIAAABIgBABg");
	this.shape_126.setTransform(180.5,81.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#263C48").s().p("AAEgBIgKgCIgBAKIgBgKIgCgEIAHABQAHAAABgBQACgBADgGIABAbIgFACQAAgOgCgCg");
	this.shape_127.setTransform(179.6,79.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#263C48").s().p("AgGABIABgBIgBAAIACgCIABgCIABADIgDAHIAJgIIABgFIADADIgBAEIgDABIABACIgMAFg");
	this.shape_128.setTransform(179.9,77.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FD8A5A").s().p("AgCAAIgBgBQADACADgDQAAAEgCAAIgBABQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_129.setTransform(180,76.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_130.setTransform(178.2,83.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FDA96F").s().p("AAAACQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIAAgBg");
	this.shape_131.setTransform(180.8,75.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FDA96F").s().p("AAAACIAAgCQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIAAABIAAgBg");
	this.shape_132.setTransform(179.1,75.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#231F20").s().p("AAAAAQgCAGgGAAQAAgMAIABQAEAAACADQADADgBAFQgGgCgCgEg");
	this.shape_133.setTransform(180,74.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3E5665").s().p("AgGAWIgGgCIABgGIAAgLIgCgDIACgHIACgGIAFgGIABADIgEAKIAJgLIACgEIAJAIIACAIIgCATIgGAAQAAAFgBABQgEACgEAAIgEAAg");
	this.shape_134.setTransform(180,78.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3E5665").s().p("AgBAVQAAgXgBgHIgCgLIAGAAIACAKIAAAfg");
	this.shape_135.setTransform(180.9,82.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#576977").s().p("AABAVIgOgEIAAgVIACgQIAWAAIACAKIABAfg");
	this.shape_136.setTransform(179.9,82.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FDA96F").s().p("AgFAIQgCgEAAgEQgBgLAIAAQAJAAAAALQAAAEgDAEQgDAFgDgBQgCABgDgFg");
	this.shape_137.setTransform(180,75.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FDA96F").s().p("AgEAOQgDgIABgCIAGgHIAAgJIAIAAIAAAQIgFAAIAAAKg");
	this.shape_138.setTransform(179.6,77.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEBF87").s().p("AACAcIABgEIAAgOQgCgLgEgKIgFgJIgBgHIAJABIACAGIAEALIABAKIABAKIABACIgBAFQAAAJgCABg");
	this.shape_139.setTransform(181.1,87.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FEBF87").s().p("AgGAdQADgHAAgDQABgFgBgOIAAgUIAAgIIAKADIAAASIgFAXIAAADQgBAHgDADg");
	this.shape_140.setTransform(179,87.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#231F20").s().p("AgEAJIgBgBIACgEIAIgMIACADIgBAJIgBAAIAAgFIgBADQgBAFgDACIgCAAIgCAAg");
	this.shape_141.setTransform(178.8,89.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#231F20").s().p("AgDAKIgBgBIAFgSIABAAIACABQABABAAAEIAAAFIgBAAIgBgFQAAAGgBACQAAAEgCABIgBAAIgCAAg");
	this.shape_142.setTransform(181.7,89.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#BD3A3A").s().p("AgJgOIAMAAIAKADIgBAaIgYAAg");
	this.shape_143.setTransform(178.3,85.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#231F20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_144.setTransform(180,74.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#BD3A3A").s().p("AgDADIABgBIABgEIAFAAIgBACIgDAAIAAADg");
	this.shape_145.setTransform(178.3,83.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3E5665").s().p("AgBAFIABgKIABACIABAJg");
	this.shape_146.setTransform(178.7,79.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FDA96F").s().p("AgCAYIgBgGIABgDIADgmIADAEIgCArg");
	this.shape_147.setTransform(178.5,81.1);

	this.instance_8 = new lib.CompoundPath_62();
	this.instance_8.parent = this;
	this.instance_8.setTransform(182.5,88.3,1,1,0,0,0,5.5,2.1);
	this.instance_8.alpha = 0.398;

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgHIgCgKIAAgLIADAAIACASIACAGIAAAEIgBACIABABIAAACg");
	this.shape_148.setTransform(210.7,63.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#83582C").s().p("AAHASIgBgEIABgJQACgFgCgIIgLAAIgBAFQAAAFACADIAAAEQACAHgBACQgCACgEAAQgEAAgCgCQgCgBACgEIACgIIgBgFIADgKQACgIAHgBIAGABQADACACAEIACAGQADAEAAADQABAEgBAHQAAAEgCACIgDACIgDgCg");
	this.shape_149.setTransform(212.2,56.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FEBF87").s().p("AgFAFQgCgEAAgEIACgEIALAAIACAEQAAAFgCADQgBACgEACQgCgBgEgDg");
	this.shape_150.setTransform(212.3,56.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FDA96F").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_151.setTransform(212.4,56.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FEBF87").s().p("AgFAFIgBgFIACAAIAAgJIAIAAIABAJIACAAQABAKgIAAQgDAAgCgFg");
	this.shape_152.setTransform(212.4,57.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FEBF87").s().p("AgCASIACgCIAAgEIAAAAIgBAEIgCAAIABgHIACgGIAAgOIAAgHIADAAIABAfIgBADIgEADg");
	this.shape_153.setTransform(214.4,63);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAQAAQgBAQgIAAIAAABQgIAAgCgQg");
	this.shape_154.setTransform(212.3,58.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B6D876").s().p("AgPAhIgBgKIACgRIABgmIACAAQACAQAJAAQAHgBABgQIACAAIAHA6QAAAFgBAEg");
	this.shape_155.setTransform(212.6,60.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#645858").s().p("AAAAhIgBgIIABgVIgDAAIAAgPIAAgHIACgJIAFgFIgBAmIgCAQIACALg");
	this.shape_156.setTransform(210.7,61);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#645858").s().p("AgFgcQAFACABABQACAEABANIACAPIgEAAIABAGIgBAQg");
	this.shape_157.setTransform(214.1,60.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3C4A65").s().p("AAGAeIgBgQQABgGAAgDIgBgGIgBgaIgFAAIgBASIgBAOIACAZIgCACIgFAAQgFgSAAgHIABgLIgEgYIAAgDIAgAAIABAFIgCAUIABAQIgDAVIgEABg");
	this.shape_158.setTransform(212.5,66.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#DCA042").s().p("AgCAIIgCgDIADgNIAFABIgBAIIABAEIgBADIgCABIgDgBg");
	this.shape_159.setTransform(213.4,70.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#DCA042").s().p("AgFAHIgBgBIAAgBQAGgFAAgCIAAgFIAGgBIABALQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgCAAIgDADIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_160.setTransform(211.6,70.7);

	this.instance_9 = new lib.CompoundPath_61();
	this.instance_9.parent = this;
	this.instance_9.setTransform(216.6,69.2,1,1,0,0,0,5.1,2.4);
	this.instance_9.alpha = 0.398;

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FDA96F").s().p("AAAABIAAgBIABAAIAAABIAAAAIgBAAg");
	this.shape_161.setTransform(198.5,64.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FDA96F").s().p("AAAABIAAgBIABAAIAAABIAAAAIgBAAg");
	this.shape_162.setTransform(198.4,64.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FDA96F").s().p("AAAABIAAgBIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_163.setTransform(198.3,64.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FDA96F").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgBgBg");
	this.shape_164.setTransform(198.2,64.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#231F20").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIAAgBg");
	this.shape_165.setTransform(197.5,70.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#231F20").s().p("AAAAAIAAgBIABABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBg");
	this.shape_166.setTransform(197.5,69.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#231F20").s().p("AAAAAIAAAAIABAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAgBg");
	this.shape_167.setTransform(197.5,69.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#231F20").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBABIAAgBg");
	this.shape_168.setTransform(197.5,68.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#231F20").s().p("AgCAAIABgCIAEADIAAACg");
	this.shape_169.setTransform(198.2,70.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#231F20").s().p("AgEABIAIgDIABACIgIADg");
	this.shape_170.setTransform(196.2,70.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#231F20").s().p("AgFACIABgDIgDAAIgDgIIAGgCIAIARIABgPIAFADIgCADIADADIgGAMg");
	this.shape_171.setTransform(197,66.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FDA96F").s().p("AgEAEIAAgDIABgEIAGgBIABAFIgBAEg");
	this.shape_172.setTransform(194.8,71.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgBABIADgDIAAABIgCAEg");
	this.shape_173.setTransform(198.7,65.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#403024").s().p("AADADIAAgDIgHAAIgBACIgBgBIABgEIAMACIgBAFg");
	this.shape_174.setTransform(194.8,72.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#403024").s().p("AgQgCIAJAAIAZAEIgJABg");
	this.shape_175.setTransform(194.8,72.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#403024").s().p("AgDgPIAIAAIgBAeIgIABg");
	this.shape_176.setTransform(196.1,74.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6C5549").s().p("AgNALIACgdIAZAGIgBAeg");
	this.shape_177.setTransform(194.3,74.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgDgBIAHAAIAAACIgGAAg");
	this.shape_178.setTransform(194.8,71.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#92251B").s().p("AgHAHIgCgHQgBgEAEgEQADgCAEAAQAFAAADADIAAADIAAACQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCABIgFgBIgDACIAAACIgBgBQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABQAAABABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAIgDgEg");
	this.shape_179.setTransform(197.1,63.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#DB635E").s().p("AgBAAIABgBIgCgCIACgDIADADIgCACIACABIgBAHg");
	this.shape_180.setTransform(197.2,66.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgFgHIADgCIAEAEIADgCIABACIgBAPg");
	this.shape_181.setTransform(196.9,66.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#231F20").s().p("AAAALIgEgCIgCgVIAEAIIACAIQADAFAEADIgCABIgFgCg");
	this.shape_182.setTransform(199,67.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#231F20").s().p("AgCAYIgBgIIACgbIABgGQAAgGACgBQADAAgBAIIgCAKQAAAHgDAXg");
	this.shape_183.setTransform(195.5,69.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FDA96F").s().p("AAAALIgBgBIgCgFIgCgBIAAACIgCgCQgBgCABgGIAAgGIAPABIAAAGIgBADIABADQgCAHgCABg");
	this.shape_184.setTransform(197.2,64.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FD8A5A").s().p("AgEACIAAgIIAJADIgCADIAAAFIgCACg");
	this.shape_185.setTransform(197.1,64.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#122A43").s().p("AAAAGIgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBIABAAIAAABIAFAHQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIgBAAIgBAAg");
	this.shape_186.setTransform(198,64.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#213D60").s().p("AAAAFIgEgHQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIACgBQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAFAIQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgBABIgBgCg");
	this.shape_187.setTransform(198.1,64.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#414042").s().p("AAAAiIgTgDIAAgIIgJAAIAAgSIADgWIADgKIAFgBIAKgFIAJASIABgQIAIAFIAFAJIgDgIIAFgEIALAQQABAEgBADIgEAFIgMgDIACAkIgJABIgDgIIgDAJg");
	this.shape_188.setTransform(197.2,68.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#808285").s().p("AAJATQgBgDgCgKIgBgLIAEgDIgGACIgEgBIgEANIgHADIgBgXIACAAIACgFIATABIACAFIACAAIAAANQABAQgCAEIgBAAIgDgBgAACgRIAAAHIACAAIAAgIg");
	this.shape_189.setTransform(196.8,73.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#58595B").s().p("AAHAjIgBgBIAAgDIABgIIgBgEQgBgEAAgJIABgKIgCgSIgDgBIgBAFIgGAoIABAPIgDADIgJgCIgCgEIABgCQABgDAAgJIAEg7IAfAAIAAA7IABAFIAAANIgLACQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_190.setTransform(196.6,75.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_191.setTransform(197.4,71.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#443123").s().p("AABAFIgHgDIgDgBIAAgCIAKgDIACACIAGAEQAAAAAAAAQABAAgBABQAAAAAAABQAAAAgBABIgDAAIgEAAg");
	this.shape_192.setTransform(198.4,79.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#443123").s().p("AgCAHQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgKIAHAEQADAHgBACIgFABIAAABIgCgBg");
	this.shape_193.setTransform(195.4,79.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FDA96F").s().p("AAAAGIgDgDIgCgDIABAAIADABIABgBIgBgDIgCgDIAAgBIADgBQABABACAEIABAFIACADIgEAEg");
	this.shape_194.setTransform(198.4,65.2);

	this.instance_10 = new lib.CompoundPath_60();
	this.instance_10.parent = this;
	this.instance_10.setTransform(200.9,78.2,1,1,0,0,0,7,2.2);
	this.instance_10.alpha = 0.398;

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#8DD2CA").s().p("AgCgDIADAAIACAHIgEAAg");
	this.shape_195.setTransform(245.2,98.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#231F20").s().p("AgBAFIgDgHIADgBIgCgGIAGgFIgBALIADARg");
	this.shape_196.setTransform(244.6,96.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#414042").s().p("AARAMIgEgPIgCgCIgZgBIgFASIAAAAIADgUIALgDIAAADIARABIAEgCIABAEIAAAAIADARg");
	this.shape_197.setTransform(245.6,100.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FDA96F").s().p("AgDADIgCgDIAFgCIAGAAIAAACIgGADg");
	this.shape_198.setTransform(245.8,98.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FDA96F").s().p("AgEAAIACgDIADABIAEAEIgGACg");
	this.shape_199.setTransform(243.7,97.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#DB635E").s().p("AgCgBIACgFIgBgDIACgCIACACIgCADIACAGIgBADIgCAJg");
	this.shape_200.setTransform(245.2,96.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#414042").s().p("AABANIgEgHIgIgBIgEgEIgBgMIAFALIAFAEIAOAAIAEgJIAFgIIgDAJIgCAMIACADIgJADg");
	this.shape_201.setTransform(245.3,97.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#231F20").s().p("AgCAAIAEgKIAAgEIAGAEIgGAGIAEADIgNAQg");
	this.shape_202.setTransform(245.9,96.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgGAAIABgKIAAgCIAEAFIAGgHIACABIAAADIgFAKIgFAPQgDgMAAgDg");
	this.shape_203.setTransform(245.5,96.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#58595B").s().p("AgBAaIgDAIIgMgBIAEgVIgIAAIgDgEQgBgDABgDIACgCIACgLQACgIACgDQABgCAGgDIAFgDIAEAHIAIgKIAGAFIAFACIAFADIgBAVIgEANIAEAWIgWABg");
	this.shape_204.setTransform(245.2,98.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#231F20").s().p("AgOAoIgFgEIACgCQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIAAhAIALgHIAYAHIACBBIACAEQABABgCAEIgFgBIgGABIgBgEIACgFIgDgJIgDgSIgDgdIgFAAIgBA2IABACIgBADQAAACABAGQgHAAgCgCg");
	this.shape_205.setTransform(245.8,104.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#414042").s().p("AgJAEIgCgCQAAgBAGgBIAFgEIALADQACADgBACIgMAAIgGABIgDgBg");
	this.shape_206.setTransform(243.9,108.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#414042").s().p("AgFADIABgDIgBgDIAKgBQABAGgBABQgBACgEAAQgEAAgBgCg");
	this.shape_207.setTransform(247.2,109);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FDA96F").s().p("AgBAAIABgBQABAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_208.setTransform(246.2,93.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIACABQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_209.setTransform(244.5,93.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#403024").s().p("AAHABIgHAAIgGABIgBAGIgCgIQAAgHAIAAQAKAAAAAHQABAEgCAEQAAgGgBgBg");
	this.shape_210.setTransform(245.4,92.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FDA96F").s().p("AgBAJQgEgCgCgEIAAgMIAPAAIAAANIgGAFIgCABIgBgBg");
	this.shape_211.setTransform(245.4,93.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FD8A5A").s().p("AgCAAQgBAAgBgBQAAAAAAgBQAAAAAAAAQAAAAABABQADACAFgDQAAAEgEABQgCAAgBgDg");
	this.shape_212.setTransform(245.4,94.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FDA96F").s().p("AgEAAIAAgEIAJgCIAAAIIgHAFg");
	this.shape_213.setTransform(245.5,95);

	this.instance_11 = new lib.Path_24();
	this.instance_11.parent = this;
	this.instance_11.setTransform(248.7,107,1,1,0,0,0,5.7,2.1);
	this.instance_11.alpha = 0.398;

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#122A43").s().p("AAAgIIABABIAAAJIgBAGg");
	this.shape_214.setTransform(96.6,230.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#122A43").s().p("AAAAAIgBgGIgBgCIABgBIABABQACACABAGQABAGgEAEIAAABQABgGgBgFg");
	this.shape_215.setTransform(93.7,230.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#3E2D1C").s().p("AgGAHIgBABIgCgCQAAgFABgBQACgDAFgCQAEgEADABQAFAAgCAFQgHAMgDABIgFgDg");
	this.shape_216.setTransform(93.5,234.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#122A43").s().p("AAAADIgKgCIABgEIAJACIALABIAAAEg");
	this.shape_217.setTransform(95.1,234.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#122A43").s().p("AgEABIgCgEIACgBIABAEQADAEACgBQAEAAgBgHIABABQACAIgGAAIAAAAQgDAAgDgEg");
	this.shape_218.setTransform(95.1,229.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FD8A5A").s().p("AgCgBQACACADgDQAAAEgDAAIAAABQgCAAAAgEg");
	this.shape_219.setTransform(95.2,229.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#DB635E").s().p("AAAARIgGgBIgEgDIgBgFIABgHIADgNIAGgFIABACIABAIQABAFgCAEIgBAGIAOAEIgCAFIgHABIgEgBg");
	this.shape_220.setTransform(93.6,231.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#B86331").s().p("AAHAKIAAgFQAAgCgDgCIgDgBIABADIgGgDIABAEIgDAAIABAHQgFgBgBgHQAAgEACgEIAFgCIABgCQADgBACAAQAJACABAIIgCAFIgCAGIgBgBg");
	this.shape_221.setTransform(95.2,227.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FDA96F").s().p("AAAAFIgDgCIgCAAIABgFIAAAAIACAAIACgCIABAAIABABIADABIABACIAAAAIgBABIAAABIgBABIgBABIgBABg");
	this.shape_222.setTransform(95.3,232.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#6C5549").s().p("AgGAGIADgNIAFgBIAFAGIgLALg");
	this.shape_223.setTransform(93.4,233.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgDQABgDADgVIAAgIIAFADIAAAGQgBAVgFAGQgCADgMAIg");
	this.shape_224.setTransform(95.2,231.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#213D60").s().p("AABAZIgLgCIgGgDIABgUQADgIAAgDIgDgKIABgBIAJgEIACAFQADAFADgBQAFAAgBgJIALAFIgBAKIgCAHQgBAEAAASIgCAEIAAAEg");
	this.shape_225.setTransform(95,231.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#DB635E").s().p("AgEAVIACgiIADgKIADAEQABACAAAJIAAALIgEATIgBACg");
	this.shape_226.setTransform(96.7,232);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FDA96F").s().p("AgFAHQgCgFAAgEQAAgIAHAAQAIAAAAAIQAAAEgCAFQgDAEgDAAQgCAAgDgEg");
	this.shape_227.setTransform(95.2,228.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FDA96F").s().p("AgHAGIABgJIACgBIAAgEIAIAAIABAFIACABIABADIgBAIg");
	this.shape_228.setTransform(95.1,229.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FDA96F").s().p("AgBgEIAEACIgCAEIgBACg");
	this.shape_229.setTransform(96.4,234.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#8DD2CA").s().p("AALAWIgHgZIADgCIgFAAIgDAAIgEgDIAEAFIgGASIgDADIgDAAIgCgNIAEgXIAFgDIAHACIgBAJIACAAIACgIIAFABIACAFIACABIADAgIgDACg");
	this.shape_230.setTransform(94.8,236.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#6DB19F").s().p("AALAmIABgCIgFgIIgEgUIgCgDIgDgXIgCAAIgFASIABAKIgBADIAAAWIgCACIgEgBIgFACIgDgEIACg9IAGgLIAPAFIAKACIAEAkIAGATIACADIABAHIAAAAIABACQgEAEgCAAg");
	this.shape_231.setTransform(95.3,237.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#576977").s().p("AgCAEQgIAAgBgBIAAgCIABgDIAKgCIAGAEIAFABIABACQgEACgHAAg");
	this.shape_232.setTransform(97.6,241.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#576977").s().p("AgEAFIABgEIAAgDIADgEIAFACIAAAJQgCABgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_233.setTransform(93.6,241.8);

	this.instance_12 = new lib.Path_23();
	this.instance_12.parent = this;
	this.instance_12.setTransform(98.1,240.3,1,1,0,0,0,4.8,2);
	this.instance_12.alpha = 0.398;

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#122A43").s().p("AAAgHIABAAIAAAKIgBAGg");
	this.shape_234.setTransform(4.8,269.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#122A43").s().p("AABgBIgBgGIgCgBIACgBIABABQABACABAFQABAHgDAEIgBAAQACgFgBgGg");
	this.shape_235.setTransform(1.8,269.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#3E2D1C").s().p("AgGAHIgBABIgCgCQAAgFABgBQACgCAFgDQAEgEADABQAFAAgCAFQgHAMgDABIgFgDg");
	this.shape_236.setTransform(1.7,273);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#122A43").s().p("AAAAEIgKgDIABgEIAJACIALABIAAAEIgIAAIgDAAg");
	this.shape_237.setTransform(3.3,272.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#122A43").s().p("AgEAAIgCgEIACAAIABAEQADADACAAQAEgBgBgGIABAAQACAIgGABIAAAAQgDAAgDgFg");
	this.shape_238.setTransform(3.3,268.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#8DD2CA").s().p("AgEACIAEgBIAFgCIAAAAIgFADg");
	this.shape_239.setTransform(5.3,279.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FD8A5A").s().p("AgCgBQACACADgDQAAAEgDAAIAAABQgCAAAAgEg");
	this.shape_240.setTransform(3.4,268.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#DB635E").s().p("AAAARIgGgBIgEgDIgBgFIABgHIADgNIAGgFIABACIABAIQABAFgCAEIgBAGIAOAEIgCAGIgLgBg");
	this.shape_241.setTransform(1.8,270.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B86331").s().p("AAHAKIAAgGQAAgCgDgCIgDgBIABADIgGgCIABAEIgDgBIABAHQgFgBgBgGQAAgEACgEIAFgDIABgBQADgCACABQAJACABAIIgCAFIgCAGg");
	this.shape_242.setTransform(3.4,266.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FDA96F").s().p("AgDADIgCAAIABgFIACAAIACgCIABAAIABABIADAAIABACIAAABIgBABIgBABIAAABIgBABIgBABIgCAAg");
	this.shape_243.setTransform(3.5,271.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#6C5549").s().p("AgGAGIADgMIAFgCIAFAGIgLALg");
	this.shape_244.setTransform(1.6,272.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgDQABgEADgUIAAgIIAFADIAAAGQgBAVgFAGQgCADgMAIg");
	this.shape_245.setTransform(3.4,270.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#213D60").s().p("AABAaIgRgFIABgUQADgJAAgEIgDgJIABgCIAJgCIACAEQADAFADAAQAFgBgBgIIALADIgBAKIgCAHQgBAGAAARIgCAEIAAAFg");
	this.shape_246.setTransform(3.2,270.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#DB635E").s().p("AgEAWIACgiIADgLIADAEQABACAAAJIAAAMIgDANIgBAFIgBACg");
	this.shape_247.setTransform(4.9,270.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FDA96F").s().p("AgEAGQgDgDAAgFQAAgIAHAAQAIAAAAAIQAAAFgDADQgCAFgDAAQgCAAgCgFg");
	this.shape_248.setTransform(3.4,267);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FDA96F").s().p("AgHAGIABgJIACgBIAAgEIAIAAIABAFIACABIABADIgBAIg");
	this.shape_249.setTransform(3.3,268.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FDA96F").s().p("AgCgDIAFACIgCACIgBAEg");
	this.shape_250.setTransform(4.6,273.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#8DD2CA").s().p("AALAVIgHgZIADgCIgIABIgEgDIAEAGIgGARIgDAEIgDgBIgCgMIAEgYIAFgEIAHADIgBAJIACABIACgJIAFABIACAFIACABIADAgIgDABg");
	this.shape_251.setTransform(3,274.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#6DB19F").s().p("AALAmIABgCIgFgIIgEgUIgCgDIgDgXIgCAAIgFASIABAKIgBADIAAAWIgCACIgEgBIgFACIgDgEIABgqIABgTIAGgMIAPAHIAKABIAEAkIAGASIACAEIABAGIAAAAIABADIgGAEg");
	this.shape_252.setTransform(3.5,276.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#576977").s().p("AgCAEQgIAAgBgBIAAgCIABgDIAKgCIAGAEIAFABIABACQgEACgHAAg");
	this.shape_253.setTransform(5.8,280.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#576977").s().p("AgEAFIABgEIAAgDIADgDIAFACIAAAJQgBABgEgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_254.setTransform(1.8,280.5);

	this.instance_13 = new lib.Path_22();
	this.instance_13.parent = this;
	this.instance_13.setTransform(6.3,279.1,1,1,0,0,0,4.8,2);
	this.instance_13.alpha = 0.398;

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#58595B").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAAIgHACg");
	this.shape_255.setTransform(226.3,101.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#58595B").s().p("AgCAAIgCAAIACgBQACgBAFAEIgHgCg");
	this.shape_256.setTransform(223.3,101.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AAAgCIAAABIABADIgBABg");
	this.shape_257.setTransform(225.9,90.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#414042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_258.setTransform(226,93);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#414042").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_259.setTransform(223.9,93);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABABQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBABAAg");
	this.shape_260.setTransform(225.9,87.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIACABIgBACQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_261.setTransform(224.3,87.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FD8A5A").s().p("AgBAAQgBAAAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAQACACAEgCQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAIgBAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_262.setTransform(225.1,88.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#374553").s().p("AABACIgFADIgCgGIACgDIAFAEIAEgEIABAEIgBAFg");
	this.shape_263.setTransform(225.1,88.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgEADg");
	this.shape_264.setTransform(226.2,90.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FDA96F").s().p("AAAABIgBABIgCgCIABgBIADABIADACg");
	this.shape_265.setTransform(224.3,90.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#443123").s().p("AABAEIgIgDIABgBIAHgDIAGAFIAAABIAAABIgDAAIgDAAg");
	this.shape_266.setTransform(226.5,101.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#443123").s().p("AgGAEIAAgBIAAgBQADgCABgBIACgCQABgBAGAEIABABIgIADIgDAAIgDAAg");
	this.shape_267.setTransform(223.2,101.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#403024").s().p("AAFABIgFABQgDgCgCABIgCAGIgBgHQAAgBADgCQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQAIgBACAFQABAEgCAEQgCgFgBgBg");
	this.shape_268.setTransform(225.1,86.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FDA96F").s().p("AgBAJQgFgDgBgCIAAgMIAPAAQAAAIgBAEQgBACgEADIgCAAIgBAAg");
	this.shape_269.setTransform(225.1,87.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_270.setTransform(225.1,88.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#293544").s().p("AgFANIgHgCIANgHIADgEIABgJIACgEIAEAIQADALgDAEQgBACgEACIgEAAIgHgBg");
	this.shape_271.setTransform(225.9,90.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#374553").s().p("AgMAKQgBgCgCgGQgCgJADgDIADgDIAIANIAUADIgDAEIgOAHQgJgCgDgCg");
	this.shape_272.setTransform(224.6,90.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#2E211A").s().p("AgEAVIABgkIACgEIgDgDIAEgCIACADIgCACIACAEIADAlIgFADg");
	this.shape_273.setTransform(225.3,91.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#2B271C").s().p("AgNAAIAAgCIAOABIAMgBIABACIgOADg");
	this.shape_274.setTransform(225,93.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#4E5C6E").s().p("AgOAVQgDgCAAgEIABgJIgEgHQgBgKADgDIAFgEIAHgCIACgDIAEAEIAFgEIABAFIAJAEIAFAIQACALgCAEIgGAEIgCAJIgOACg");
	this.shape_275.setTransform(225.1,90.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#58595B").s().p("AAIAYQgCgEgBgMQgCgKgBgDIgCgBIAAABQgCAEgFAVQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgRIABgRIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAFQADAUgEAPQgBABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgKIADAAIABgMIgEAAg");
	this.shape_276.setTransform(224.9,95.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#414042").s().p("AgRApIgCgDIACgBIAAgGIACgfQgCgaACgJIAEgJIAaAAIADAKIABBHIABAAIgBADQgBACgDABQgEABgBgBQgEgCgBgSQABgXgBgIQgCgJgBAAQgBgBAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQgCAOgCAYIAAAMQgBAIgCACIgDABQgDAAgEgEg");
	this.shape_277.setTransform(224.8,97.4);

	this.instance_14 = new lib.Path_21();
	this.instance_14.parent = this;
	this.instance_14.setTransform(228.4,99.9,1,1,0,0,0,5.4,2);
	this.instance_14.alpha = 0.398;

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FEBF87").s().p("AgFAFQgBgDAAgFQABgDADgCIAFgBIAEAGQABADgBADQgBAFgDACIgEABQgDgEgBgCg");
	this.shape_278.setTransform(211.7,75.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FD8A5A").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_279.setTransform(211.8,76.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#DCA042").s().p("AgKgDIAUAAIACAGIgXABg");
	this.shape_280.setTransform(212,80.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FEBF87").s().p("AAAAEIAAgEIABgBIgBAAIgCACIgBgBIABgBIACgCIADABIABADIgBAAIgCAEg");
	this.shape_281.setTransform(213.4,81.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#213D60").s().p("AgNAfIgBgNQgCgPACgDIAEgGIAAgHIgCgMIAAgEIAMABQAGgBAEgCIADAGIgDAMIAAAFIAEAEQAEAHgEAbQgBACgMAAg");
	this.shape_282.setTransform(212,81.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FEBF87").s().p("AgYAjIgCgDQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIAJgaQAAgRADgEQABgCAFgCQAEgCAAgBIAAgGIAHgBIABAFIADADQABABAFAAIAFAGQANAQAAADQAAAGgJAMQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBgBIgCAEIgCgBIAAgDIACgCIgCAAIgCACIgBAAIABgCIACgDIAFACQAEgDACgMIgKgNIgDADIgWACIgCAPQgBAFgJAPIABAFIACACIgBACg");
	this.shape_283.setTransform(212.1,80);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FEBF87").s().p("AAGAkIgBgKIgBgCIAAgFIgHgQIgBgHIgFgJIgCgNIAAgJIALABIAAATQABAEAEAJQACAEABAQIACAEIABAHQACAFgBABIgDAAIgDABIAAAAg");
	this.shape_284.setTransform(213.3,85.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FEBF87").s().p("AABAjIAAgOQgEgSAAgFIAAgKIgDgWIAKgBIACAjIgBAUIACADIAAAFIAAAHIgDABg");
	this.shape_285.setTransform(211.3,85.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#9A482E").s().p("AgGAPIgHgFIABgDIgBgHQgBgFABgCQABgCADgDIAEgCIALAAIACADIAGAKIAAADIAAAFIgEAGQgCACgIAAIgGAAg");
	this.shape_286.setTransform(211.8,75.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#231F20").s().p("AgBAFQgCgCAAgEIACgDQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADACAAAEQAAAEgDABg");
	this.shape_287.setTransform(210,83);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#231F20").s().p("AAAAJQgCgBgCgEIABgHIAEgFIACAGIABAEQABAFgCACIgCAAIgBAAg");
	this.shape_288.setTransform(214.3,89.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#231F20").s().p("AgBAJIgCgHIABgEIAEgHIABACIAAADIABAHQAAAFgCABIgCABIgBgBg");
	this.shape_289.setTransform(211.8,89.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FEBF87").s().p("AABACIgEgCIAAgBIAEABIACAAIABACg");
	this.shape_290.setTransform(210,83.5);

	this.instance_15 = new lib.CompoundPath_59();
	this.instance_15.parent = this;
	this.instance_15.setTransform(215.8,87.9,1,1,0,0,0,4.9,2);
	this.instance_15.alpha = 0.398;

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#8DD2CA").s().p("AgCgDIADAAIABAHIgDAAg");
	this.shape_291.setTransform(99.1,209.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#231F20").s().p("AAAAGIgEgIIADgBIgCgGIAGgFIgBALIADASIgFgJg");
	this.shape_292.setTransform(98.5,207);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#414042").s().p("AAQAMIgDgPIgCgCIgPAAIgJgBIgGASIAAAAIADgUIALgDIAAADIAQABIAFgCIAEAVg");
	this.shape_293.setTransform(99.5,210.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FDA96F").s().p("AgEAEIgBgEIAGgDIAFAAIAAADIgGAEg");
	this.shape_294.setTransform(99.7,208.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FDA96F").s().p("AgDABIABgEIADABIAEAEIgGABg");
	this.shape_295.setTransform(97.6,208.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#DB635E").s().p("AgCgBIACgFIAAgDIABgCIACACIgBADIABAGIgDAMg");
	this.shape_296.setTransform(99,207.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#414042").s().p("AAAANIgDgGIgIgBIgEgFIgBgLIAFAKIAFAFIAOgBIAEgJIAFgHIgEAIIgBAMIACADIgKACg");
	this.shape_297.setTransform(99.2,208.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#231F20").s().p("AgCAAIAEgKIAAgEIAHAEIgHAGIAEADIgOAQg");
	this.shape_298.setTransform(99.8,206.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgGAAIAAgJIABgDIAEAFIAGgIIACACIAAAEIgFAJIgEAQg");
	this.shape_299.setTransform(99.4,206.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#58595B").s().p("AgBAaIgDAIIgMgBIAEgVIgIAAQgCgBgCgDIAAgGIADgCIACgLQABgIACgDIANgIIAEAHIAIgKIAGAFIAFACIAFADIgBAUIgEAOIAEAWIgXABg");
	this.shape_300.setTransform(99.1,208.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#231F20").s().p("AgOApIgFgFIACgDIgCgDIAAhBIALgFIAZAGIABBBIACAEIgCAGIgFgBIgFAAIAAgFIABgEIgHgaIgCgeIgFAAIgBA2IABACIgBADIABAIQgHAAgCgBg");
	this.shape_301.setTransform(99.7,215.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#414042").s().p("AgKAEIgBgCIAFgCIAGgEIALADQACADgBABQgBACgGgBIgFAAIgGABIgEgBg");
	this.shape_302.setTransform(97.8,219.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#414042").s().p("AgEADIABgDIgBgDIAJgBIAAAHQgBACgEAAQgDAAgBgCg");
	this.shape_303.setTransform(101,219.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAg");
	this.shape_304.setTransform(100.1,204.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_305.setTransform(98.4,204.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#403024").s().p("AAGABIgGAAQgFAAgBABIgCADIAAADIgBgIQAAgHAIAAQAKAAAAAHQABAEgDAEQABgGgCgBg");
	this.shape_306.setTransform(99.3,203.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FDA96F").s().p("AgCAKQgEgDgBgEIAAgLIAPAAIgBAMQgBADgDADg");
	this.shape_307.setTransform(99.3,204.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FD8A5A").s().p("AgDABQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAABABAAQADADAFgDQAAAEgEAAIgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_308.setTransform(99.3,205.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FDA96F").s().p("AgFAAIABgFIAJAAIABAIIgIADg");
	this.shape_309.setTransform(99.3,205.5);

	this.instance_16 = new lib.Path_20();
	this.instance_16.parent = this;
	this.instance_16.setTransform(102.5,217.5,1,1,0,0,0,5.7,2.1);
	this.instance_16.alpha = 0.398;

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#8DD2CA").s().p("AgCgDIADAAIACAHIgEAAg");
	this.shape_310.setTransform(206.7,195.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#231F20").s().p("AAAAGIgEgIIADgBIgCgGIAGgFIgBALIADASIgFgJg");
	this.shape_311.setTransform(206.1,193.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#414042").s().p("AARAMIgEgPIgCgCIgPAAIgKgBIgEASIgCAAIACgMIADgIIAKgDIAAADIARABIAFgDIAEAWg");
	this.shape_312.setTransform(207.1,197.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FDA96F").s().p("AgEAEIgBgEIAGgDIAFAAIAAADIgGAEg");
	this.shape_313.setTransform(207.3,195.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FDA96F").s().p("AgEABIACgEIADACIADADIgGACg");
	this.shape_314.setTransform(205.2,194.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#DB635E").s().p("AgCAAIACgGIAAgDIABgCIACADIgBACIABAGIgDAMg");
	this.shape_315.setTransform(206.6,193.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#414042").s().p("AAAANIgDgGIgIgBIgFgFIAAgLIAFAKIAFAEIAOAAIAEgJIAFgIIgEAJIgBAMIACADIgKACg");
	this.shape_316.setTransform(206.8,194.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#231F20").s().p("AgCgBIAEgJIABgEIAGAEIgGAGIADACIgNARg");
	this.shape_317.setTransform(207.4,193.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgGAAIABgKIAAgCIAEAFIAGgHIACABIgBADIgEAKIgFAPg");
	this.shape_318.setTransform(207,193);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#58595B").s().p("AgBAaIgDAIIgMgBIAEgVIgIAAQgDgCgBgCIAAgGIADgCIACgLQABgIACgDQADgDAKgFIAEAHIAIgKIAGAFIAFADIAFACIgBAUIgEAOIAEAWIgXABg");
	this.shape_319.setTransform(206.7,195);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#231F20").s().p("AgNAoIgHgEIADgCIgCgEIAAhBIAMgGIAXAHIADBBIACAEIgCAFIgGgBIgFAAIgBgDIACgFIgGgbIgCgdIgFAAIgCA2IABACIgBADIABAIg");
	this.shape_320.setTransform(207.3,201.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#414042").s().p("AAFAEIgPAAIgBgCQAAgBAFgBIAGgEIALADQACADgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAIgDgBg");
	this.shape_321.setTransform(205.4,205.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#414042").s().p("AgFADIABgDIgBgDIAKgBQABAFgBACQgCACgDAAQgDAAgCgCg");
	this.shape_322.setTransform(208.6,205.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAgBABAAg");
	this.shape_323.setTransform(207.7,190.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_324.setTransform(206,190.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#403024").s().p("AAGABIgGAAQgFAAgBABIgCADIAAADIgBgHQAAgIAIAAQAKAAAAAHQABAEgDAEQABgGgCgBg");
	this.shape_325.setTransform(206.9,189.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FDA96F").s().p("AgBAJQgFgBgBgEIAAgNIAPAAQAAAKgBADQgBAEgEABIgCABIgBgBg");
	this.shape_326.setTransform(206.9,190.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FD8A5A").s().p("AgDABQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAABABAAQADADAFgDQAAAEgEAAIgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_327.setTransform(206.9,191.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FDA96F").s().p("AgFAAIABgFIAJAAIABAIIgIADg");
	this.shape_328.setTransform(206.9,191.7);

	this.instance_17 = new lib.Path_19();
	this.instance_17.parent = this;
	this.instance_17.setTransform(210.1,203.7,1,1,0,0,0,5.7,2.1);
	this.instance_17.alpha = 0.398;

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#8DD2CA").s().p("AgCgDIADAAIACAHIgEAAg");
	this.shape_329.setTransform(168.9,264.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#231F20").s().p("AgBAGIgDgIIADAAIgCgHIAGgFIgBALIADASg");
	this.shape_330.setTransform(168.4,262.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#414042").s().p("AARAMIgEgPIgCgCIgZgBIgFASIAAAAIADgVIALgCIAAACIARACIAEgDIABAFIAAAAIADARg");
	this.shape_331.setTransform(169.3,266.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FDA96F").s().p("AgDAEIgCgFIAFgCIAGAAIAAADIgGAEg");
	this.shape_332.setTransform(169.6,264.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FDA96F").s().p("AgEABIACgEIADACIAEAEIgGABg");
	this.shape_333.setTransform(167.4,264.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#DB635E").s().p("AgCgBIACgEIgBgEIACgCIACACIgCADIACAGIgBADIgCAJg");
	this.shape_334.setTransform(168.9,262.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#414042").s().p("AABANIgEgGIgIgBIgEgEIgBgNIAFALIAFAEIAOAAIAEgJIAFgIIgDAJIgCAMIACADIgJACg");
	this.shape_335.setTransform(169.1,263.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#231F20").s().p("AgCAAIAEgJIAAgFIAGAEIgGAGIAEADIgNAQIAFgPg");
	this.shape_336.setTransform(169.7,262.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgGAAIABgJIAAgDIAEAFIAGgHIACABIAAAEIgFAJIgFAPQgDgMAAgDg");
	this.shape_337.setTransform(169.2,262.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#58595B").s().p("AgBAaIgDAIIgMgBIAEgVIgIAAQgCgCgBgCQgBgCABgEIACgCIACgLQACgIACgDQABgCAGgDIAFgCIAEAGIAIgKIAGAFIAFADIAFADIgBAUIgEANIAEAXIgWAAg");
	this.shape_338.setTransform(169,264.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#231F20").s().p("AgOApIgFgFIACgCIgCgEIAAhBIALgFIAYAGIACBCIACADQABACgCAEIgFgBIgGAAIgBgFIACgDIgDgKIgDgRIgDgeIgFAAIgBA2IABACIgBADIABAIIgJgBg");
	this.shape_339.setTransform(169.6,271);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#414042").s().p("AgLACIAFgCIAGgDIALADQACACgBACQgBABgGgBIgOABIgCgDg");
	this.shape_340.setTransform(167.7,275);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#414042").s().p("AgFADIABgDIgBgEIALAAIAAAHQgCACgEAAQgDAAgCgCg");
	this.shape_341.setTransform(170.9,275.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FDA96F").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBgDg");
	this.shape_342.setTransform(170,260.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIgBADQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_343.setTransform(168.3,260.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#403024").s().p("AAHABIgHAAIgGABIgBAGIgCgIQAAgHAIAAQAKAAAAAGQABAFgCAEQAAgGgBgBg");
	this.shape_344.setTransform(169.2,259.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FDA96F").s().p("AgCAJQgDgBgCgEIAAgNIAPAAIgBANQgCAEgCABIgDABIgCgBg");
	this.shape_345.setTransform(169.2,260.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FD8A5A").s().p("AgCAAQgBAAgBgBQAAAAAAgBQAAAAAAAAQAAAAABABQADACAFgCQAAADgEABIgBAAQAAAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_346.setTransform(169.1,261.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAKAAIAAAIIgIADg");
	this.shape_347.setTransform(169.2,261.3);

	this.instance_18 = new lib.Path_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(172.4,273.3,1,1,0,0,0,5.7,2.2);
	this.instance_18.alpha = 0.398;

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#8DD2CA").s().p("AgCgDIADAAIACAHIgEAAg");
	this.shape_348.setTransform(295.8,107.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#231F20").s().p("AgBAFIgDgHIADgBIgCgGIAGgFIgBALIADARg");
	this.shape_349.setTransform(295.2,105.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#414042").s().p("AANgDIgDgCIgOAAIgJgBIgGASIgBAAIAEgVIALgCIAAACIARACIAEgCIABAEIABAIIADAJIgFAAg");
	this.shape_350.setTransform(296.2,109.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FDA96F").s().p("AgDADIgCgDIAGgCIAFAAIAAACIgGADg");
	this.shape_351.setTransform(296.4,107.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FDA96F").s().p("AgDAAIABgDIADACIAEAEIgGABg");
	this.shape_352.setTransform(294.3,106.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#DB635E").s().p("AgCgBIACgFIAAgDIABgCIACACIgBADIABAGIgBADIgCAJg");
	this.shape_353.setTransform(295.8,105.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#414042").s().p("AABANIgFgHIgHAAIgEgFIAAgGIgBgGIAFALIAFAEIAOAAIAEgJIAFgIIgEAJIgBAMIACADIgKADg");
	this.shape_354.setTransform(296,106.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#231F20").s().p("AgCAAIAEgJIAAgFIAGAEIgGAGIAEADIgNAQg");
	this.shape_355.setTransform(296.5,105.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgGAAIABgJIAAgDIAEAFIAGgHIACABIAAAEIgFAJIgFAPg");
	this.shape_356.setTransform(296.1,105.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#58595B").s().p("AgBAaIgDAIIgMgBIADgVIgHAAQgDgBgBgDQgBgDABgDIACgCIADgLQABgIACgDQACgCAFgDIAGgCIAEAGIAIgKIAGAFIAFACQADACABACQACACgCAFIAAANIgFANIAFAWIgXABg");
	this.shape_357.setTransform(295.9,107.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#231F20").s().p("AgOAoIgFgEIACgCIgCgEIAAhAIALgHIAYAHIACBBIACAFIgCAFIgEgCIgGABIgBgEIACgFIgDgJIgEgSIgCgdIgFAAIgCA2IACACIgBAEIABAHQgHAAgCgCg");
	this.shape_358.setTransform(296.5,113.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#414042").s().p("AgLACQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADgBIAGgEIALAEQACADgBABQgBABgGgBIgPABIgBgDg");
	this.shape_359.setTransform(294.6,117.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#414042").s().p("AgFAEIABgEIgBgDIAKgBQABAGgBABQgBACgEAAQgEAAgBgBg");
	this.shape_360.setTransform(297.8,118);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FDA96F").s().p("AAAACQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIAAgBg");
	this.shape_361.setTransform(296.8,102.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FDA96F").s().p("AgBAAIABgCQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAABIgBgDg");
	this.shape_362.setTransform(295.2,102.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#403024").s().p("AAHAAIgHAAIgGACIgBAGIgCgIQAAgHAIAAQAKAAAAAGQABAEgCAFQAAgGgBgCg");
	this.shape_363.setTransform(296,102);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FDA96F").s().p("AgCAJQgEgCgBgDIAAgNIAPAAQAAAKgBADQgBADgEACIgCABIgCgBg");
	this.shape_364.setTransform(296,102.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FD8A5A").s().p("AgDAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQADACAFgDQAAAEgEABIgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_365.setTransform(296,103.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FDA96F").s().p("AgFAAIAAgEIAKgCIABAIIgIAFg");
	this.shape_366.setTransform(296.1,104);

	this.instance_19 = new lib.Path_17();
	this.instance_19.parent = this;
	this.instance_19.setTransform(299.3,116.1,1,1,0,0,0,5.7,2.2);
	this.instance_19.alpha = 0.398;

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#3C4A65").s().p("AAAgBIAAAAIABADIgBAAg");
	this.shape_367.setTransform(230.8,53.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#3C4A65").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_368.setTransform(229.2,53.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FEBF87").s().p("AgEAAIAFgDIADACIAAABIgDAAIgCAEg");
	this.shape_369.setTransform(228.4,53.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FEBF87").s().p("AgBAAIgDABIgBgBIADgDIACgBIAGAEIgDAEg");
	this.shape_370.setTransform(231.6,53.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#DB635E").s().p("AgEASIAAgaIADgIIgCgCIACgDIADABIgCADIADAIIACAaIgFAFg");
	this.shape_371.setTransform(229.9,50.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F1F2F2").s().p("AgHAAIACgDIAFACIAFgDIADADIgCAEIgGgDIgDAFg");
	this.shape_372.setTransform(229.9,48.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGAEIgEAFg");
	this.shape_373.setTransform(232.2,53.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAFIgGADg");
	this.shape_374.setTransform(228,53.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F1F2F2").s().p("AAAATIACgFIAAgNIgDgJIgCANIABAKIgBABIgBgMIAAgMQACgLACAAQABAAAAALIAEAIQABADgCALIgDAGg");
	this.shape_375.setTransform(231.8,51.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#F1F2F2").s().p("AgDAKIADgQQgCgMABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABABIACAFQABADAAAGIgBAIIAAAHIgCAAIAAgFIABgLIgBgEIgBAKIAAAPIgCABg");
	this.shape_376.setTransform(228.5,51.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgYAYIgCgNIABgIQgBgQADgGIAMgGIAPgCIAGACQAGABACACQADAEADAIIADAOQAAAGgDAJIgDAIIgFgDIADgGQACgLgBgEIgDgHQgBgKgCAAQgBAAgCAKIgBANIABAMQgGACgGgBQgHAAgFgCIAAgHIABgJQAAgGgBgCIgCgFQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBABACALIgDARIABAJIgDACg");
	this.shape_377.setTransform(230.2,50.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIABACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBg");
	this.shape_378.setTransform(230.6,46.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_379.setTransform(228.9,46.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#403024").s().p("AAHABIgHAAIgGABIgCAGIgBgIQAAgHAIAAQAKAAABAHQAAAEgCAEQAAgGgBgBg");
	this.shape_380.setTransform(229.8,45.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FDA96F").s().p("AgBAJQgEgBgCgEQgBgCABgGIAAgFIAQAAIgBANQgCAEgDABIgDABIgBgBg");
	this.shape_381.setTransform(229.7,46.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAgBQAAAAgBgBQAAAAABAAQAAAAABABQAEADAFgEQAAAFgEAAIgBAAQgCAAgCgDg");
	this.shape_382.setTransform(229.7,47.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FEBF87").s().p("AgEACIAAgEIAJgBIAAADIgFADg");
	this.shape_383.setTransform(229.8,47.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#DCA042").s().p("AgJACIgFgCIABgCIAbAAIABACQgIADgGAAIgKgBg");
	this.shape_384.setTransform(230.1,53.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#3C4A65").s().p("AgUAoIgBgCIACgDIgCgDQgCgEACgPIABgIIAAggIAFgNIAbAAIAFAOIAFA3IgBAEIACACQAAAAAAABQAAAAAAAAQAAABgBABQAAAAgBABIgJgBIgCgCIACgDIgCgDIgBgJIgBgKIgGghIgHAAIgDAZIAAAOQABAJgCAEIgCACQAAABACAEIgDAEg");
	this.shape_385.setTransform(230.3,56.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#2B271C").s().p("AAAAFQgDgBgBgEIAAgFIAHAAIACAGIAAADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCgBg");
	this.shape_386.setTransform(232,61.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#2B271C").s().p("AgFAEIAAgCIADgHIAHAAIAAAFQAAADgCABIgEACQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAg");
	this.shape_387.setTransform(228.5,61.3);

	this.instance_20 = new lib.CompoundPath_58();
	this.instance_20.parent = this;
	this.instance_20.setTransform(233.6,59.7,1,1,0,0,0,5.1,2.1);
	this.instance_20.alpha = 0.398;

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAAAIgBABQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_388.setTransform(244.7,66.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#050001").s().p("AgGAGIgCAAIgBgHQABgDADgCQADgDACAAQADgBAEAEIADAGIgCAHQAAABAAgCQAAgFgBgBIgEAAIgEAAIgDADIAAAHIAAAAg");
	this.shape_389.setTransform(245.5,65.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FDA96F").s().p("AAAALIgFgDIgCgIIABgIIAKgCIAEAGIgCAMIgDADg");
	this.shape_390.setTransform(245.6,66.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FDA96F").s().p("AAAAEQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQABgBAAAAQAAgBAAAAQAAAAABABQABAAAAAAQAAABAAAAQABABgBAAQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAIAAAAg");
	this.shape_391.setTransform(246.2,66.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#4E5C6E").s().p("AgPAXQgCgBAAgFIAAgIIADgPIAEgJIgDgEIABgBIAGACIABgEIACAAIgBAEIAEABIACAEIAAADIgBADIADAAIABgCIgBgEIgBgEIACAAIAAgEIACAAIAAAEIACAAIADACIABAMIAFAUIAAACIgCABIgEgDQgDgDgDgIIgDgHIgEADIgDAFIgDAFQgDAGAAAEQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAIgCAAg");
	this.shape_392.setTransform(245.9,75);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#BCAEA4").s().p("AAEAIIgEgFIgEACIAAgFIAAgDIAAgEIAFAHIAEAIg");
	this.shape_393.setTransform(246.4,67.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FD8A5A").s().p("AgBAGQgCgDAAgCIgBgEQAAgBAAgBQAAgBAAgBQABAAAAAAQAAgBAAAAQACAAACAEQAEADAAABQAAAIgDAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape_394.setTransform(245.4,66.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#2B271C").s().p("AgMASIAWgmIADAAIgJAUQgDAGgLAQg");
	this.shape_395.setTransform(245.3,70.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#BCAEA4").s().p("AgEgCIAEgGIAFALIgFAGg");
	this.shape_396.setTransform(244.9,67.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FDA96F").s().p("AgBABIgCgDIAFgEIABAFIgDAIg");
	this.shape_397.setTransform(244.3,73.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#6B584B").s().p("AAAASIAAgSIgBgRQABgBACAVIAAAPg");
	this.shape_398.setTransform(247.1,70.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#95847D").s().p("AABAXIgCgcIgGgOIACgGIAIADIAEAbIAAAPIgDAAIgBAHg");
	this.shape_399.setTransform(246.7,70.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_400.setTransform(243.9,73.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#6B584B").s().p("AABAUIgDgLQgBgFABgEIABgPIgBgEQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQACgBAAAIQABAEgCALQAAAIABAFIAEAJIgCABg");
	this.shape_401.setTransform(244.2,70.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#95847D").s().p("AgLALQgDgOADgLIAFgKIANgFIAEALIACABIAAAGQgBAXgFAKIgKAIQgHgOgBgFg");
	this.shape_402.setTransform(244.1,70.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#4E5C6E").s().p("AgGACIAAgDIAEABIAEAAIAEgCIABADIgCABIgIABg");
	this.shape_403.setTransform(247.2,80.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#4E5C6E").s().p("AgFADIAAgDIADAAIAEAAIADgCIABACIgGADg");
	this.shape_404.setTransform(244.5,80.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#293544").s().p("AgUAMQgBgGACgMIACgMIACgGQADgFAAgEIgBgEIABgEIAHACQAGADACgBIAHgCIABAFIAEADIAGAgIgBASIgCASIAAADIgLAAQgBgWAAgIIABgFIgEgKIgDgIIgDAGIgFAVIABAOIgCAMIgIACQgDgWAAgIg");
	this.shape_405.setTransform(245.9,76.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#2B271C").s().p("AgMAFIAAgFIABAAIAAgEIAIgBIADADIAGADIAHABIAAADIgDABg");
	this.shape_406.setTransform(247.9,81.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#2B271C").s().p("AgCAGQgEAAgCgCIABgEIAAgDIAHgCIABAEQACABADABIACACIAAADIgHAAIgDAAg");
	this.shape_407.setTransform(245,81.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#5D4736").s().p("AgNAUIAJguIAJABIAHAXIABAZIgLAEg");
	this.shape_408.setTransform(245.7,70.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#2B271C").s().p("AAEAPIgQgMIAGgLIALgJIAJAGIgGAcg");
	this.shape_409.setTransform(243.2,74.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FDA96F").s().p("AgDAKIgDgNIAAgGIAJAFIAAAFIAEACIgDAHg");
	this.shape_410.setTransform(245.6,67.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FDA96F").s().p("AgCADIACgIIADABIAAAKg");
	this.shape_411.setTransform(247.1,72.9);

	this.instance_21 = new lib.CompoundPath_57();
	this.instance_21.parent = this;
	this.instance_21.setTransform(249.6,79.5,1,1,0,0,0,5.5,2.2);
	this.instance_21.alpha = 0.398;

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAABQAAAAABAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgBABQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_412.setTransform(161.7,196.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#050001").s().p("AgGAGIgCAAIgBgHQABgDADgCIAFgDQAEgBADAEIADAGIgBAHQAAABgBgBQABgGgBgBQgCAAgGAAIgEADIAAAHIAAAAg");
	this.shape_413.setTransform(162.5,195.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FDA96F").s().p("AAAALIgFgDIgCgIIABgIIAKgCIAEAGIgCAMIgDADg");
	this.shape_414.setTransform(162.6,195.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FDA96F").s().p("AAAADQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAIAAgBg");
	this.shape_415.setTransform(163.3,196);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#4E5C6E").s().p("AgPAXQgCgCAAgEIAAgIIADgPIAEgKIgDgEIABAAIAGABIABgDIACAAIgBAEIAEAAIACAIIgBADIADAAIABgCIgBgEIgBgFIACABIAAgFIACAAIAAAEIACAAIADADIABAMIAFATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgEgDQgDgDgDgIIgDgHIgEADIgGAKQgDAGAAAEIgCABIgCAAIgBAAg");
	this.shape_416.setTransform(163,204.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgDACIAAgEIgBgDIAAgEIAFAHIAEAIg");
	this.shape_417.setTransform(163.5,197.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FD8A5A").s().p("AgBAGIgCgFIgBgEQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQACABACADQAEADAAABQAAAJgDgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_418.setTransform(162.5,196.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#2B271C").s().p("AgMASIANgWIAJgQIADAAIgJAUIgOAVg");
	this.shape_419.setTransform(162.4,200.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#BCAEA4").s().p("AgEgDIAEgFIAFALIgFAGg");
	this.shape_420.setTransform(162,197.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FDA96F").s().p("AAAABIgCgDIADgDIACAEIgDAHg");
	this.shape_421.setTransform(161.4,203.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#6B584B").s().p("AAAASIAAgSIgBgRQABgBACAVIAAAPg");
	this.shape_422.setTransform(164.1,200.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#95847D").s().p("AABAXIgCgcIgGgOIACgHIAIAEIAEAbIAAAPIgDAAIgBAHg");
	this.shape_423.setTransform(163.8,200.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_424.setTransform(160.9,202.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#6B584B").s().p("AABAUIgDgLQgBgEABgFIABgOIgBgFQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQABgBABAIQABAEgCALQAAAIABAFIAEAJIgCABg");
	this.shape_425.setTransform(161.2,200.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#95847D").s().p("AgLALQgCgNACgMIAFgKIAMgFIAFALIACABIAAAGQgBAYgGAJIgDAEIgGAEQgHgOgBgFg");
	this.shape_426.setTransform(161.2,200.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#4E5C6E").s().p("AgGABIAAgCIAEABIAEAAIAEgBIABABIgDABIgHACg");
	this.shape_427.setTransform(164.2,210.3);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#4E5C6E").s().p("AgFADIAAgDIADAAIAEAAIADgCIABACIgGADg");
	this.shape_428.setTransform(161.5,210.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#293544").s().p("AgUAMQgBgGACgMIACgMIACgGIADgIIgBgFIABgEIAHACQAGADACgBIAHgCIABAFIAEADIAGAgIgBASIgCASIAAADIgLAAQgBgWAAgIIABgFIgEgKIgDgIIgDAGIgFAVIABAPIgCALIgIACQgDgWAAgIg");
	this.shape_429.setTransform(162.9,206.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#2B271C").s().p("AgMAGIAAgGIABAAIAAgEIAIgBIADADIAGAEIAHABIAAACIgDABg");
	this.shape_430.setTransform(165,211);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#2B271C").s().p("AgCAGQgEAAgBgCIAAgEIAAgDIAHgCIABAEQAEADAEABIAAADIgIAAIgDAAg");
	this.shape_431.setTransform(162.1,211.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#5D4736").s().p("AgNAUIAJguIAKABIAGAXIABAZIgMAEg");
	this.shape_432.setTransform(162.7,200.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#2B271C").s().p("AgNADIAGgLIAMgIQAJAEAAABIgGAdg");
	this.shape_433.setTransform(160.2,203.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FDA96F").s().p("AgDAJIgDgLIAAgHIAJAGIAAADIAEAEIgDAGg");
	this.shape_434.setTransform(162.6,197.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FDA96F").s().p("AgCADIACgHIADAAIgBAKg");
	this.shape_435.setTransform(164.2,202.7);

	this.instance_22 = new lib.CompoundPath_56();
	this.instance_22.parent = this;
	this.instance_22.setTransform(166.6,209.3,1,1,0,0,0,5.4,2.2);
	this.instance_22.alpha = 0.398;

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQgBAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABgBAAQAAABAAAAQAAAAgBABIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBgBAAAAg");
	this.shape_436.setTransform(110.3,269.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#050001").s().p("AgGAGIgCAAIgBgHQACgHAHgBQAEgBADAEQADACAAADIgBAIQAAABgBgCQABgFgBgBIgFAAIgDAAIgEADQgBABABAGIAAAAg");
	this.shape_437.setTransform(111.1,268.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FDA96F").s().p("AAAALIgFgDIgCgIIABgIIALgCIADAGIgBAMIgDADg");
	this.shape_438.setTransform(111.3,269.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FDA96F").s().p("AgBAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBAAAAg");
	this.shape_439.setTransform(111.9,269.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#4E5C6E").s().p("AgPAXQgCgBAAgFIAAgIIADgPIAEgKIgDgDIABgBIAGABIABgDIACAAIgBAEIAEABIACAHIgBADIADAAIABgCIgCgIIACAAIAAgEIABAAIABADIACAAIADADIAGAfIgBADIgBABQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAgBgBAAQgDgDgDgIIgDgHIgEADIgDAFIgDAFIgDAKIgCABIgBAAIgCAAg");
	this.shape_440.setTransform(111.6,278.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgEACIAAgEIAAgDIAAgEIAFAHIAEAIg");
	this.shape_441.setTransform(112.1,271.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FD8A5A").s().p("AgBAGIgCgFIgBgFQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQACABACADQAEADAAABQAAAJgDAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape_442.setTransform(111.1,270.3);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#2B271C").s().p("AgMASIAWgmIADAAIgJAUQgDAHgLAPg");
	this.shape_443.setTransform(111,273.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#BCAEA4").s().p("AgEgDIAEgFIACAGIADAGIgFAFg");
	this.shape_444.setTransform(110.6,271.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FDA96F").s().p("AAAAFIgBgFIgBgCIAEgDIACAEIgEAHg");
	this.shape_445.setTransform(110,277);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#6B584B").s().p("AAAATIAAgTIgBgRQABgBACAVIAAAQg");
	this.shape_446.setTransform(112.8,274);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#95847D").s().p("AABAXIgCgbIgGgQIABgGIAJAEIAEAbIAAAPIgDAAIgBAGg");
	this.shape_447.setTransform(112.4,273.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_448.setTransform(109.6,276.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#6B584B").s().p("AgDAKIAAgKIACgOQgDgHABgBQACgBACAIQAAAEgBALQAAAIAAAFIAEAJIgBACg");
	this.shape_449.setTransform(109.9,274);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#95847D").s().p("AgLALQgDgLADgOIAFgKIAMgFIAFALIACAAIAAAHQgDAbgEAGIgDADIgGAFQgHgOgBgFg");
	this.shape_450.setTransform(109.8,273.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#4E5C6E").s().p("AgGACIAAgDIAEABIAEAAIAEgCIABADIgCABIgIABg");
	this.shape_451.setTransform(112.9,284);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#4E5C6E").s().p("AgFADIAAgDIADAAIAHgCIABACIgGADg");
	this.shape_452.setTransform(110.2,284.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#293544").s().p("AgVALIAEgdIACgHIADgIIgBgEIABgEIAPAEIAHgCIABAEIAEAEIAGAgIgBASIgCASIAAACIgLAAQgBgVAAgIIABgFIgEgKIgDgIIgDAGIgFAVIABAOQAAAEgCAHIgIADg");
	this.shape_453.setTransform(111.6,280.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#2B271C").s().p("AgMAFIAAgFIABgBIAAgDIAIgBIADADIAGADIAHACIAAACIgDABg");
	this.shape_454.setTransform(113.6,284.7);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#2B271C").s().p("AgIAEIABgEIAAgDIAHgCIABAEQACACADABIACACIAAABIgKABIgGgCg");
	this.shape_455.setTransform(110.7,284.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#5D4736").s().p("AgMAUIAIguIAKABIAHAXIABAYIgMAFg");
	this.shape_456.setTransform(111.4,274.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#2B271C").s().p("AAEAPIgRgMIAGgLIAMgJIAJAGIgGAdg");
	this.shape_457.setTransform(108.9,277.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FDA96F").s().p("AgEAJIgCgLIAAgHIAJAFIAAAEIAEADIgDAHg");
	this.shape_458.setTransform(111.3,271);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FDA96F").s().p("AgCACIACgHIADABIAAAKg");
	this.shape_459.setTransform(112.8,276.3);

	this.instance_23 = new lib.CompoundPath_55();
	this.instance_23.parent = this;
	this.instance_23.setTransform(115.3,283,1,1,0,0,0,5.5,2.2);
	this.instance_23.alpha = 0.398;

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#8DD2CA").s().p("AAEAKIgIgSIABgBIAIATg");
	this.shape_460.setTransform(71.6,229.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#BD3A3A").s().p("AgIgCIgBgBIACgGIAEAGQADACALgCQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgDABgKgBQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAABIAAADIgCACg");
	this.shape_461.setTransform(73.1,227.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AAAAAIABgBIAAABIgBACg");
	this.shape_462.setTransform(74.5,226.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AgDAAIABgCIAGADIgBACg");
	this.shape_463.setTransform(71.8,226.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("AgEADIABgCIgCAAIAAgFIABgCIAGAKIACgKIACADIgBADIABABIgDAGg");
	this.shape_464.setTransform(73.2,225.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FDA96F").s().p("AADAPIgCgEQgKgLgBgFIAAgIIABgFIAGADIgCAJIAJAPQABABAFAAIACACIAAAAIgEAAIACAEIgBABIAAgBIAAABIgBAAIgBAAIABABIgBAAIgBAAIAAAAIAAABg");
	this.shape_465.setTransform(72.4,228.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FDA96F").s().p("AgDAKIABgCIABAAIAAgBIAAABIgCABIgBAAIgBAAIABgBIACgBIgCAAIgBABIAAgBIABgBIABgBIABAAIgBAAIgBABIgBABIgBgBIACgBIABgBIACgBIACABIACgBIgBgHIABgDIADgCIABAHQAAAHgBACIgFADIgBgBIgBAAIgBABg");
	this.shape_466.setTransform(74.1,227.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#9A482E").s().p("AgIARQgFgGABgHQAAgLACgFQADgFAFgBQAGAAADADQADADACAKQABAHgBAFQgBAGgFAAQACgEgBgIIgBgHQgCgCgBgDIgCgEIgBAEQgCAEgEACIAAARIADAEQgEAAgBgCg");
	this.shape_467.setTransform(73.2,224.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FDA96F").s().p("AgEAGQgCgDAAgEQAAgIAGAAQAHAAAAAIQAAAEgCADQgCAEgDAAQgCAAgCgEg");
	this.shape_468.setTransform(73.2,223.9);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#6DB19F").s().p("AgRgCIAZgOIAKATIgaAOg");
	this.shape_469.setTransform(72.9,229.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#DB635E").s().p("AgGATIgCgTIgBACIgHgDQADgKACgDIAJgEIAHAKIABgKIAIAFQABACABAJIgCACIgCADIACAQg");
	this.shape_470.setTransform(73,226.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#122A43").s().p("AgBAWIgDgWQAAgEACgJIACgJIAFAAIgCAJQgDAKAAADIADAXg");
	this.shape_471.setTransform(72.3,230.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#213D60").s().p("AgKAWIgCgXQgBgDADgKIACgIIATAAIACAUIgBAWQgFADgIAAg");
	this.shape_472.setTransform(73.2,230.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FD8A5A").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_473.setTransform(73.2,225.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FEBF87").s().p("AACAaQgEgDAAgGIABgHIgDgSIABgHIgBgJIAJgCIgBAsIABAIIgBABIgCgBg");
	this.shape_474.setTransform(72.7,235.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FEBF87").s().p("AACAaQgDgDgBgGIABgHIgDgSIABgHIgBgJIAIgCIgBAsIACAIIgCABIgBgBg");
	this.shape_475.setTransform(73.8,235.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#DB635E").s().p("AgBAGIgCgGIgBADIAAAAIgBgGIAAgCIABgDIABAAIAHALIACAGQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgDgBgBgDg");
	this.shape_476.setTransform(72.8,237.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#DB635E").s().p("AgBAGIgCgGIAAADIgBAAIgBgJIABgCIABAAIAHALIACAGQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgDgBgBgDg");
	this.shape_477.setTransform(73.9,237.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#6C2615").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape_478.setTransform(73.2,224.5);

	this.instance_24 = new lib.CompoundPath_54();
	this.instance_24.parent = this;
	this.instance_24.setTransform(77.1,236.3,1,1,0,0,0,4.7,2);
	this.instance_24.alpha = 0.398;

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#EEBB59").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIABABIgBAAIgHACIADgCg");
	this.shape_479.setTransform(90,210.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#EEBB59").s().p("AgCAAIgCAAIACgBQAAAAABAAQAAAAABAAQAAAAAAABQABAAABAAIACACIgGgCg");
	this.shape_480.setTransform(86.9,210.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AgBgCIABAAIACAEIgCABg");
	this.shape_481.setTransform(89.5,200.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#DCA042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_482.setTransform(89.6,202.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#DCA042").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_483.setTransform(87.6,202.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FDA96F").s().p("AAAACQAAAAAAAAQAAAAAAAAQgBgBABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAADIgBgBg");
	this.shape_484.setTransform(89.5,196.5);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQABAAgBABQAAAAAAAAQAAAAgBAAIAAABIAAgDg");
	this.shape_485.setTransform(87.9,196.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FD8A5A").s().p("AgCgBQACACADgCQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_486.setTransform(88.8,197.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#6DB19F").s().p("AABACIgEADIgDgGIADgDIAEAEIAFgEIABAEIgBAFg");
	this.shape_487.setTransform(88.7,198);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgEADg");
	this.shape_488.setTransform(89.8,199.9);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FDA96F").s().p("AAAACIgBAAIgCgCIABgBIADABIADACg");
	this.shape_489.setTransform(87.9,199.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#443123").s().p("AABAEIgFgCIgDgBIAAgBIAIgDIACACIAEADQABAAAAAAQAAABAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_490.setTransform(90.1,211.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#443123").s().p("AgFAEQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAIAFgDIABgCQACgBAGAEIAAABIgDABIgFACg");
	this.shape_491.setTransform(86.8,211.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#403024").s().p("AAEABIgEABIgFgBIgCAGIgBgHQAAgCADgCQAAAAABgBQABAAAAAAQABAAAAgBQABAAAAAAQAJAAABAFQABADgDAFQgBgFgCgBg");
	this.shape_492.setTransform(88.8,195.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FDA96F").s().p("AgCAJQgDgBgCgEIAAgMIAOAAIAAAMQgCAEgCABIgDAAIgCAAg");
	this.shape_493.setTransform(88.8,196.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_494.setTransform(88.8,197.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#6DB19F").s().p("AgFANIgHgCIANgHIADgDQAAgIABgCIACgEIAEAIQADALgDAEQgBACgEACIgEAAIgHgBg");
	this.shape_495.setTransform(89.5,199.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#7BC0B0").s().p("AgLAKQgEgDAAgFQgBgHACgFIADgDIAJANIATAEIgDADIgOAHQgJgBgCgDg");
	this.shape_496.setTransform(88.2,199.5);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#DB635E").s().p("AgEAVIABgkIACgEIgDgEIAEgBIADACIgDADIACAEIADAkIgEAEg");
	this.shape_497.setTransform(88.9,200.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#3E5665").s().p("AgNAAIAAgCIAOACIANgCIAAADIgOACg");
	this.shape_498.setTransform(88.6,202.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#8DD2CA").s().p("AgOAVQgDgCAAgEIABgJQgDgGAAgCQgCgIADgEIAFgFIAHgBIADgDIADAEIAFgEIACAFIAJAEIAEAIQADALgDAEIgGAEIgCAKIgOABg");
	this.shape_499.setTransform(88.7,200);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#EEBB59").s().p("AAIAYQgCgEgBgMIgEgOIgBAAQgCAFgFAUQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgRQAAgLABgGIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAEQADATgEARQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgCgBgAAAgKIADAAIABgNIgEAAg");
	this.shape_500.setTransform(88.6,204.8);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#DCA042").s().p("AgMAsIgFgDIgCgDIACgBIABglQgBgaACgIIAEgJIAaAAIADAJIAAAMIABA7IABABIgBADIgFADQgDABgCgBQgEgEAAgQQABgYgBgIQgCgJgBAAIgCABQgBAJgBALIgCASIAAAMQgBAIgDACIgBAAIgDAAg");
	this.shape_501.setTransform(88.4,206.6);

	this.instance_25 = new lib.Path_16();
	this.instance_25.parent = this;
	this.instance_25.setTransform(92,209.3,1,1,0,0,0,5.4,2.1);
	this.instance_25.alpha = 0.398;

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FEBF87").s().p("AgFAFQgCgCABgGQAAgDADgCIAGgBIACAEIACACQABADgBAEQgBAEgDACIgEAAg");
	this.shape_502.setTransform(161,277);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FD8A5A").s().p("AgDAAQABgEACAAQADAAABAEQgBAFgDgBQgCABgBgFg");
	this.shape_503.setTransform(161.1,277.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#231F20").s().p("AgKgDIAUgBIABAHIgVABg");
	this.shape_504.setTransform(161.3,281.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FEBF87").s().p("AAAADIAAgDIABgBIgBABIgBABIgCgBIABgBIACgCIADABIAAADIgBAAIgBAEg");
	this.shape_505.setTransform(162.6,283);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#DB635E").s().p("AgNAfQgEgZADgGIAEgGIAAgHIgDgMIABgFIAMACQAGgBAEgCIADAGIgDAMIgBAFIAFAEQAEAHgEAbQgCACgLAAg");
	this.shape_506.setTransform(161.3,282.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FEBF87").s().p("AgYAiQgEgEAAgCIAJgbQAAgRADgFIAGgCQAEgDAAgCIAAgFIAHgBIABAEQABAEACABIAGABIAFAEQANARAAACQAAAEgJAPQgBABgEAAIgBADIgDgBIABgDIACgDIgDABIgBADIgBgBIABgDIACgCQAEACABgBQAEgCACgNIgLgMIgCADIgWACIgCAOQgBAGgJAQIABADIABADIAAACg");
	this.shape_507.setTransform(161.3,281.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FEBF87").s().p("AAGAkQgBgBAAgJIgBgCIAAgEIgHgRIgBgHIgFgJIgBgNIgBgJIALACIAAATIAGAMIABAKIABALIACADIACAHIAAAHg");
	this.shape_508.setTransform(162.6,287.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FEBF87").s().p("AABAjIAAgOIgEgXIAAgLIgDgVIAKgBIABARIgBAHIACALIgBAKQgBAHABADIACADIAAAMIgDABg");
	this.shape_509.setTransform(160.6,287.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#9A482E").s().p("AgMAKIABgEQgDgKACgDQAAgCAEgDIAEgCIAKAAIADADIAFAKIAAADIAAAFQAAAFgEABQgDACgNAAg");
	this.shape_510.setTransform(161,276.9);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#231F20").s().p("AgBAFQgDgDABgCQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADABAAAFQAAAFgDAAIgBAAIgBgBg");
	this.shape_511.setTransform(159.2,284.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#231F20").s().p("AgBAJIgCgFIAAgHIAEgGIADAHIAAAEQAAAGgBABIgCABIgCgBg");
	this.shape_512.setTransform(163.5,290.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#231F20").s().p("AgBAKQgCgCAAgGIAAgEIAFgHIABACIAAADIABAHQAAAFgCACIgCAAIgBAAg");
	this.shape_513.setTransform(161,290.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FEBF87").s().p("AAAACIgDgCIAAgBIAEABIACAAIABACg");
	this.shape_514.setTransform(159.2,284.8);

	this.instance_26 = new lib.CompoundPath_53();
	this.instance_26.parent = this;
	this.instance_26.setTransform(165,289.2,1,1,0,0,0,4.9,2);
	this.instance_26.alpha = 0.398;

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgGIgCgLIAAgLIADAAIACASIACAGIAAAEIgBADIABABIAAABg");
	this.shape_515.setTransform(180.6,253.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#83582C").s().p("AgOASQgCgCACgEIACgHIgBgFIADgJQACgJAHgBIAHABQAEADACAIQADAFAAADIAAAKQAAAFgCADQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAgBQgBgFACgFQACgDgBgFIAAgEIgMAAIgBAEQAAAGACADIAAAEQACAHgBACQgCACgEAAQgEAAgCgCg");
	this.shape_516.setTransform(182.1,246.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FEBF87").s().p("AgFAFQgCgEAAgEIACgFIAMAAIABAGQAAAFgCACQgCADgDAAIgBABQgCAAgDgEg");
	this.shape_517.setTransform(182.2,246.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FDA96F").s().p("AgGAAQAAgFAGAAQAGAAABAFQgBAGgGAAQgGAAAAgGg");
	this.shape_518.setTransform(182.3,247.3);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FEBF87").s().p("AgGAEIgBgFIADAAIABgIIAIAAIAAAIIACABQAAAKgHAAQgDAAgDgGg");
	this.shape_519.setTransform(182.3,248);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FEBF87").s().p("AgCASIACgDIAAgDIAAAAIgBAEIgCgBIABgHIACgFIAAgOIAAgHIADAAIABAfIgBADIgEADg");
	this.shape_520.setTransform(184.3,253.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAPAAIABABQgBAPgIABIAAAAQgIAAgCgQg");
	this.shape_521.setTransform(182.2,248.7);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#8DD2CA").s().p("AgOAiIgCgMIACgPIABgnIACgBQACARAJAAQAHgBAAgQIACAAIACARIAGAqQAAAEgCAEg");
	this.shape_522.setTransform(182.5,251.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#149347").s().p("AAAAhIgBgJIABgTIgDAAIAAgQQAAgNACgEQABgCAEgCIgDA2IACALg");
	this.shape_523.setTransform(180.6,251.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#149347").s().p("AgFgdQAFADABACQACACABANIACAPIgEAAIABAIIgBAQg");
	this.shape_524.setTransform(184,250.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#2E211A").s().p("AAGAeIgBgQIACgJIgDgGIgBgZIgDgBIgCASIgBANIABASIABAIIgDACIgEAAQgEgSgBgGIAAgMIgDgXIAAgEIAhAAIAAAFIgCAUIABAQIgEAVIgCABg");
	this.shape_525.setTransform(182.4,257.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#213D60").s().p("AgCAIIgCgDIADgNIAFABIgBAIIABAEIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgCgBg");
	this.shape_526.setTransform(183.3,261.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#213D60").s().p("AgFAIQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAGgFAAgDIAAgEIAGAAIABAKIgCACIgCAAIgDADIgCABIgDgBg");
	this.shape_527.setTransform(181.5,261.1);

	this.instance_27 = new lib.CompoundPath_52();
	this.instance_27.parent = this;
	this.instance_27.setTransform(186.5,259.6,1,1,0,0,0,5.1,2.4);
	this.instance_27.alpha = 0.398;

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABg");
	this.shape_528.setTransform(252.9,53.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FDA96F").s().p("AAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_529.setTransform(252.8,53.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_530.setTransform(252.7,53);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FDA96F").s().p("AAAABIAAgBIAAAAIABABIAAAAIgBAAg");
	this.shape_531.setTransform(252.6,52.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBACg");
	this.shape_532.setTransform(251.9,59.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_533.setTransform(251.9,58.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIgBACg");
	this.shape_534.setTransform(251.9,57.6);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#D09335").s().p("AAAAAIAAgBIABABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_535.setTransform(251.9,56.8);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#D09335").s().p("AgCAAIABgCIAEADIAAACg");
	this.shape_536.setTransform(252.5,59);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#D09335").s().p("AgEABIAIgDIABACIgIADg");
	this.shape_537.setTransform(250.5,59);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#D09335").s().p("AgFABIACgCIgFAAIgBgIIAFgCIAJARIAAgPIAFADIgCAEIACACIgFANg");
	this.shape_538.setTransform(251.3,55);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FDA96F").s().p("AgDADIAAgCIAAgFIAHAAIAAAFIAAAEg");
	this.shape_539.setTransform(249.2,60.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#6DB19F").s().p("AgCABIAEgDIABACIgEADg");
	this.shape_540.setTransform(253.1,54.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#403024").s().p("AAEADIAAgDIgHAAIgBABIgCAAIACgEIALACIgBAFg");
	this.shape_541.setTransform(249.2,60.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#403024").s().p("AAJADIgZgEIAIgBIAZAFg");
	this.shape_542.setTransform(249.2,60.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#403024").s().p("AgDgPIAIAAIgBAdIgIACg");
	this.shape_543.setTransform(250.4,62.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#6C5549").s().p("AgNALIACgcIAZAFIgBAeg");
	this.shape_544.setTransform(248.7,62.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#6DB19F").s().p("AgDABIAAgCIAHAAIAAACg");
	this.shape_545.setTransform(249.2,59.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#92251B").s().p("AgGAHIgDgHQAAgEAEgEQACgCAEAAQAGABACACQABABgBAEIgEABIgFgBQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAIgBACIgBgBQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIgBAEIAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBg");
	this.shape_546.setTransform(251.4,52.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgBAAIABgBIgCgBIACgEIADADIgCADIABAAIAAAHg");
	this.shape_547.setTransform(251.6,54.8);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#6DB19F").s().p("AgEgHIACgCIAFAEIACgCIABACIgBAPg");
	this.shape_548.setTransform(251.3,54.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#D09335").s().p("AAAALIgEgCIgCgUIAFAHIABAIQABADAEADIACACIgDAAIgEgBg");
	this.shape_549.setTransform(253.3,55.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#D09335").s().p("AgCAZIgBgJIADgbIAAgGQAAgGACgBQADABgBAHIgBAKQAAAHgEAYg");
	this.shape_550.setTransform(249.9,57.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FDA96F").s().p("AABALIgCgCIgCgFIgBAAIgBACIgBgCQgBgCAAgGIABgHIAOACIAAAGIAAACIAAAEQgCAGgCACIgCABIgBgBg");
	this.shape_551.setTransform(251.5,52.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FD8A5A").s().p("AgEADIAAgIIAJADIgCACIAAAFIgCABg");
	this.shape_552.setTransform(251.5,53.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#122A43").s().p("AAAAGIgEgIQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIABgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAEAHQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgCABIgBAAIgBAAg");
	this.shape_553.setTransform(252.4,53.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#213D60").s().p("AAAAGIgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBQAAAAABAAQAAgBAAABQAAAAAAAAQAAAAAAABIAFAHQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCABIgBAAIgBAAg");
	this.shape_554.setTransform(252.5,53.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#EEBB59").s().p("AAAAiIgTgCIAAgJIgJAAIAAgSIADgWIADgKIAFgBIAKgFIAKASIAAgPIAIAFIAFAIIgCgIIAEgEIAFAGQAFAHABAEQABAEgBACIgEAFIgMgDIACAkIgIABIgEgIIgCAJg");
	this.shape_555.setTransform(251.5,57.1);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#2B5785").s().p("AAJATQgCgCgBgLIgCgLIAFgDIgHACIgDgBIgEAOIgHACIgBgWIACgBIACgFIATABIACAFIABABIABAMQABAQgDAEIgBAAIgCgBgAACgRIgBAIIADgBIAAgHg");
	this.shape_556.setTransform(251.2,62.1);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#213D60").s().p("AAHAkIgBgCIAAgDQABgFAAgDIgCgEIAAgYIgBgSIgDAAIgHAtIAAAPIgCACIgFAAIgEgCIgCgDIABgCIAAgMIAEg7IAgAAIAAAyQgBAFABADIABAHIAAALIgLADg");
	this.shape_557.setTransform(251,63.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#6DB19F").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_558.setTransform(251.8,59.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#443123").s().p("AABAFIgKgEIABgCIAJgDIAIAGQAAAAAAABQABAAAAABQgBAAAAAAQAAABgBAAg");
	this.shape_559.setTransform(252.8,68);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#443123").s().p("AgDAHIgBgEIAAgKIAHAEQADAHgBACIgEABIgBABIgDgBg");
	this.shape_560.setTransform(249.8,68.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FDA96F").s().p("AAAAGQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgDIABAAIADABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgDgCIAAgCIADgBQACABACAEIABAFIACADIgEAEg");
	this.shape_561.setTransform(252.8,53.7);

	this.instance_28 = new lib.CompoundPath_51();
	this.instance_28.parent = this;
	this.instance_28.setTransform(255.2,66.7,1,1,0,0,0,7,2.3);
	this.instance_28.alpha = 0.398;

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#122A43").s().p("AAAgIIABACIgBAJIAAAFg");
	this.shape_562.setTransform(247.3,40.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#122A43").s().p("AABgBQgBgDgBgDIgBgBIABgBIABABQACACABAFQABAHgEAEIAAAAQABgFAAgGg");
	this.shape_563.setTransform(244.3,40.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#3E2D1C").s().p("AgGAHIgBABQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgGQACgCAFgDQAFgEADABQAEAAgCAFQgHANgDAAIgFgDg");
	this.shape_564.setTransform(244.1,44.2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#122A43").s().p("AAAAEIgLgDIACgEIAJADIALAAIAAAEIgIAAIgDAAg");
	this.shape_565.setTransform(245.8,44);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#122A43").s().p("AgEAAIgCgEIACAAIACAEQACADACAAQAEgBgBgGIACAAQABAIgGABIgBAAQgDAAgCgFg");
	this.shape_566.setTransform(245.7,39.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#8DD2CA").s().p("AgEACIAEgCIAEgBIABAAIgFADg");
	this.shape_567.setTransform(247.8,51.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgDQAAAEgDAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_568.setTransform(245.8,39.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#DB635E").s().p("AAAARIgFgBIgGgDIgBgFIAGgTIAEgGIACACQACADAAAFQAAAFgCAEIgBAGIAOAEIgCAGIgFAAIgGgBg");
	this.shape_569.setTransform(244.2,41.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#B86331").s().p("AAHAKIAAgGIgGgFIAAAEIgGgDIABAEIgCgBIAAAHQgEgBgBgGQgBgEADgEIAEgDIACgBQACgCACABQALACAAAIIgEALg");
	this.shape_570.setTransform(245.8,37.6);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FDA96F").s().p("AgEADIgCgBIACgEIACAAIACgCIABAAIAAABIAFABIABACIgBAAIgBABIgBAAIAAACIgBABIgBABIgCAAg");
	this.shape_571.setTransform(246,42.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#6C5549").s().p("AgHAGIAEgNIAFgBIAGAGIgMALg");
	this.shape_572.setTransform(244,43.6);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgEQADgFAAgSIAAgIIAGACIgBAHQgBAVgFAGQgCADgLAIg");
	this.shape_573.setTransform(245.9,41.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#213D60").s().p("AAAAaIgQgFIACgUIACgMIgEgKIACgBIAJgDIACAEQADAFADAAQAFgBgBgIIAKAEIAAAJIgCAIQgBAEAAASIgBAEIgBAEg");
	this.shape_574.setTransform(245.6,41.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#DB635E").s().p("AgEAVIABgiIAEgKIAEADIAAAXIgCAOIgDAHg");
	this.shape_575.setTransform(247.3,42);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FDA96F").s().p("AgFAGQgCgDAAgFQAAgIAHAAQAIAAAAAIQAAAFgCADQgDAFgDAAQgCAAgDgFg");
	this.shape_576.setTransform(245.8,38.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FDA96F").s().p("AgHAGIABgJIADgBIAAgEIAIAAIAAAFIACABIABADIgCAIg");
	this.shape_577.setTransform(245.7,39.5);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FDA96F").s().p("AgCgEIAFADIgDAFg");
	this.shape_578.setTransform(247,44.4);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#8DD2CA").s().p("AALAVIgHgZIADgCIgIABIgEgDIADAFIgFASIgDAEIgDgBIgBgMIADgYIAFgDIAGACIAAAJIACABIACgJIAFABIADAFIABABIACAgIgCABg");
	this.shape_579.setTransform(245.5,46);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#6DB19F").s().p("AAKAmIABgCIgEgJIgFgTIgBgDIgDgXIgCAAIgFASIABAKIgBADIAAAWIgCACIgEgBIgFACIgDgEIABgqIACgTIAFgLIAPAFIAJABIAFAlIAFASIACAEIABAGIABAAIABADIgGADg");
	this.shape_580.setTransform(246,47.7);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#576977").s().p("AgCAEQgHAAgCgCIABgDIAKgEIAGAFIAFABIABACQgEADgGAAg");
	this.shape_581.setTransform(248.2,51.7);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#576977").s().p("AgEAFIABgEIAAgDIADgDIAFABIAAAJQgBABgEAAQgDAAgBgBg");
	this.shape_582.setTransform(244.2,51.7);

	this.instance_29 = new lib.Path_15();
	this.instance_29.parent = this;
	this.instance_29.setTransform(248.7,50.3,1,1,0,0,0,4.8,2);
	this.instance_29.alpha = 0.398;

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#263C48").s().p("AAAAAIAAAAIABAAIAAABg");
	this.shape_583.setTransform(38.6,266.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#263C48").s().p("AgDABIAAgBIAHAAIAAABg");
	this.shape_584.setTransform(40.9,267.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FDA96F").s().p("AgFAPIAAgDIAAgBIAAABIgBAEIAAABIgBAAIAAgCIAAgEIADgFIABgCIAFgVIAGAAIAAAFQgBAFgGALIABADIgBADIgBACIAAADIgBAAIAAgCIAAgBIAAgCIAAACIgBADIAAACIgBAAIAAgDIAAgCIAAgBIAAABIgBAEIAAABIgBABg");
	this.shape_585.setTransform(40.4,269.2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#263C48").s().p("AAEgBIgKgCIgBAKIgBgKIgCgEQANABACgBQACgBADgGIABAbIgFACQAAgOgCgCg");
	this.shape_586.setTransform(39.6,266.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#263C48").s().p("AgGABIABgBIgBAAIACgCIABgCIABADIgDAHIAJgIIABgFIADADIgBAEIgDABIABACIgMAFg");
	this.shape_587.setTransform(39.8,264.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FD8A5A").s().p("AgDgBQADACAEgDQgBAEgCAAIgBABQgCAAgBgEg");
	this.shape_588.setTransform(39.9,264.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_589.setTransform(38.2,270.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FDA96F").s().p("AAAACQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIAAgBg");
	this.shape_590.setTransform(40.7,262.9);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FDA96F").s().p("AAAACIAAgCQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIAAABIAAgBg");
	this.shape_591.setTransform(39.1,262.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#231F20").s().p("AAAAAQgCAGgGAAQAAgMAIABQAEAAACADQADADgBAFQgGgCgCgEg");
	this.shape_592.setTransform(39.9,262);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#3E5665").s().p("AgNAUIACgGIAAgMIgDgCIADgHIADgGIAEgGIABADIgFAKIAKgLIACgEIAJAIIACAIIgCASIgFAAQgBAGgBABQgFACgEAAQgEAAgGgCg");
	this.shape_593.setTransform(40,266.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#3E5665").s().p("AgBAVQAAgXgBgHIgCgLIAGAAIACAKIABAfg");
	this.shape_594.setTransform(40.8,270.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#576977").s().p("AABAVIgOgEIABglIAXAAIACAKIABAfg");
	this.shape_595.setTransform(39.8,270.1);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FDA96F").s().p("AgFAIQgCgEAAgEQgBgLAIAAQAJAAgBALQAAAEgCAEQgDAFgDgBQgCABgDgFg");
	this.shape_596.setTransform(39.9,262.8);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FDA96F").s().p("AgEAOQgDgIABgCIAGgHIAAgJIAIAAIAAAQIgFAAIAAAKg");
	this.shape_597.setTransform(39.6,264.9);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FEBF87").s().p("AACAcIABgEIAAgOQgDgLgCgKIgGgJIgBgHIAJABIACAGIAEALIAAAKQABAHABADIABADIgBAEIAAAFIgCAFIgBAAIgDAAg");
	this.shape_598.setTransform(41.1,274.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FEBF87").s().p("AgGAdQADgHAAgDQABgGgBgNIAAgUIAAgIIAKADIAAASIgFAWIAAAEQgBAHgDADIgBAAIgDAAg");
	this.shape_599.setTransform(39,274.6);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#231F20").s().p("AgEAJIgCgBIADgEIAIgMIACADIgBAJIgBAAIAAgFIgBADQgBAFgDACIgCAAIgCAAg");
	this.shape_600.setTransform(38.7,277);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#231F20").s().p("AgDAKIgBgBIAFgSIABAAIACABQABABgBAEIABAFIgBAAIgBgFIgBAIQAAAEgCABIgBAAIgCAAg");
	this.shape_601.setTransform(41.7,276.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#BD3A3A").s().p("AgJgOIAMAAIAKADIgBAZIgYABg");
	this.shape_602.setTransform(38.2,272.6);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#231F20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_603.setTransform(39.9,261.4);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#BD3A3A").s().p("AgDADIAAgBIACgEIAFAAIgBACIgDAAIAAADg");
	this.shape_604.setTransform(38.3,270.9);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#3E5665").s().p("AgBAFIABgJIABABIABAJg");
	this.shape_605.setTransform(38.7,266.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FDA96F").s().p("AgCAYIgBgGIABgDIADgmIADAEIgCArg");
	this.shape_606.setTransform(38.5,268.4);

	this.instance_30 = new lib.CompoundPath_50();
	this.instance_30.parent = this;
	this.instance_30.setTransform(42.4,275.6,1,1,0,0,0,5.5,2.1);
	this.instance_30.alpha = 0.398;

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#2E211A").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_607.setTransform(28.2,299.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#2E211A").s().p("AAAABIAAgCIABAAIAAADg");
	this.shape_608.setTransform(26.6,299.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FEBF87").s().p("AgEAAIAFgDIADADIAAAAIgDAAIgCAEg");
	this.shape_609.setTransform(25.8,300.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FEBF87").s().p("AgBAAIgDAAIgCAAIAEgCIACgBIAHADIgEAFg");
	this.shape_610.setTransform(29.1,300.2);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#3C4A65").s().p("AgEASIAAgaIADgIIgCgCIADgDIACACIgCACIADAJIACAaIgFAEg");
	this.shape_611.setTransform(27.3,297.1);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AgHAAIACgCIAFABIAFgDIADACIgCAGIgGgEIgEAFg");
	this.shape_612.setTransform(27.3,294.9);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGAEIgDAFg");
	this.shape_613.setTransform(29.6,299.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAEIgGAFg");
	this.shape_614.setTransform(25.4,299.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#CCDDEE").s().p("AAAATIACgFIAAgNIgDgKIgBAOIABAKIgCABIgBgLIABgOQACgKABABQAAAAAAAAQAAAAAAAAQAAABAAABQAAAAABABIAAAGIAEAJIgBAOIgDAFg");
	this.shape_615.setTransform(29.2,297.9);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#CCDDEE").s().p("AgDAKIADgQQgCgLABgBQACgDACAKQABADAAAGIgBAJIAAAHIgCAAIAAgGIABgKIgBgFIgBALIAAAPIgCAAg");
	this.shape_616.setTransform(25.9,298.1);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#E3EFFC").s().p("AgYAZIgCgOIABgIQgBgRADgEQACgCAFgDIAFgCIAPgCIAGACQAGABACACQADADADAKIADANQAAAFgDAKIgDAHIgEgCIADgGIABgPIgEgHIgBgGQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgCAKIgBANIABALQgGADgGgBIgMgCIAAgHIABgJQAAgGgBgCQgCgKgDACQgBABACALIgDARIABAJIgDACg");
	this.shape_617.setTransform(27.6,297.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAg");
	this.shape_618.setTransform(28,293.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FDA96F").s().p("AgBAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_619.setTransform(26.3,293.4);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#403024").s().p("AAHABIgNAAIgCAHIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQAAgHgBAAg");
	this.shape_620.setTransform(27.2,292.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FDA96F").s().p("AgCAKQgEgDgBgDIAAgNIAPAAIgBANQgBAEgEACIgCAAIgCAAg");
	this.shape_621.setTransform(27.2,293.4);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_622.setTransform(27.2,294.4);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FEBF87").s().p("AgEACIAAgEIAJgBIABADIgGADg");
	this.shape_623.setTransform(27.2,294.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#645858").s().p("AgJABIgGgBIABgCIAcAAIABACQgIADgGAAIgKgCg");
	this.shape_624.setTransform(27.5,299.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#2E211A").s().p("AgUAoIgBgDIACgCIgCgDQgBgCAAgHIABgJIABgJIAAggIAFgNIAcAAIAEAOIAFA3IgBAEIACACQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAIgJAAIgCgDIACgDIgCgDIgBgJIgBgKIgGggIgHAAIgDAYIAAAOQABAJgCAEIgCACQAAABACAEIgCAEg");
	this.shape_625.setTransform(27.7,303.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#645858").s().p("AAAAGQgEgDgBgDIAAgFIAHAAIACAGQABABAAAAQAAAAABABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAg");
	this.shape_626.setTransform(29.5,307.9);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#645858").s().p("AgFAEIAAgCIADgHIAIAAIAAAFQAAABgDADIgEACQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_627.setTransform(25.9,307.9);

	this.instance_31 = new lib.CompoundPath_49();
	this.instance_31.parent = this;
	this.instance_31.setTransform(31,306.2,1,1,0,0,0,5.1,2.1);
	this.instance_31.alpha = 0.398;

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#2E211A").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_628.setTransform(268.5,100.5);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#2E211A").s().p("AAAABIAAgCIABAAIAAADg");
	this.shape_629.setTransform(266.9,100.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FEBF87").s().p("AgEAAIAFgDIADACIAAABIgDAAIgCAEg");
	this.shape_630.setTransform(266.1,101);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FEBF87").s().p("AgBAAIgDABIgCgBIAEgDIACgBIAHAEIgEAEg");
	this.shape_631.setTransform(269.4,100.9);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#3C4A65").s().p("AgEASIAAgaIADgIIgCgCIADgDIACACIgCACIADAJIACAaIgFAEg");
	this.shape_632.setTransform(267.6,97.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgHAAIACgDIAFADIAFgEIADADIgCAEIgGgDIgEAFg");
	this.shape_633.setTransform(267.6,95.6);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGAEIgDAFg");
	this.shape_634.setTransform(269.9,100.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAEIgGAFg");
	this.shape_635.setTransform(265.7,100.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#CCDDEE").s().p("AAAATIACgGIAAgMIgDgJIgBANIABAKIgCABIgBgMIABgMQACgLABAAQAAAAAAABQAAAAAAAAQAAABAAABQAAABABABIAAAGIAEAIIgBAOIgDAGg");
	this.shape_636.setTransform(269.5,98.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#CCDDEE").s().p("AgDAKIADgQQgCgLABgBQACgCACAKQABADAAAGIgBAIIAAAHIgCgBIAAgEIABgMIgBgEIgBAKIAAAQIgCAAg");
	this.shape_637.setTransform(266.2,98.8);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#E3EFFC").s().p("AgYAZIgCgOIABgIQgBgRADgEQACgCAFgDIAFgCIAPgCIAGACQAGABACACQADADADAKIADANQAAAFgDAKIgDAHIgEgCIADgGIABgPIgEgHIgBgGQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgCAKIgBANIABALQgGADgGgBIgMgCIAAgHIABgJQAAgFgBgDQgCgKgDACQgBABACALIgDARIABAJIgDACg");
	this.shape_638.setTransform(267.9,98.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIABACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAgBABAAg");
	this.shape_639.setTransform(268.3,94.1);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FDA96F").s().p("AgBAAIABgCQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_640.setTransform(266.6,94.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#403024").s().p("AAHABIgNAAIgCAHIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQAAgHgBAAg");
	this.shape_641.setTransform(267.5,93.2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FDA96F").s().p("AgCAKQgEgDgBgDIAAgNIAPAAQABAKgCADQgBAEgEACIgCAAIgCAAg");
	this.shape_642.setTransform(267.5,94.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_643.setTransform(267.5,95.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FEBF87").s().p("AgEABIAAgDIAJAAIAAACIgFAEg");
	this.shape_644.setTransform(267.5,95.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#645858").s().p("AgJACIgGgCIABgCIAcAAIABACQgIADgGAAIgKgBg");
	this.shape_645.setTransform(267.8,100.4);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#2E211A").s().p("AgUAoIgBgDIACgCIgCgDQgBgCAAgHIABgJIABgJIAAggIAFgNIAcAAIAEAOIAFA3IgBAEIACACQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIgJAAIgCgDIACgDIgCgDIgBgJIgBgKIgGggIgHAAIgDAYIAAAOQABAJgCAEIgCACQACAEAAABIgCAEg");
	this.shape_646.setTransform(268,104.2);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#645858").s().p("AAAAGQgEgCgBgEIAAgFIAHAAIACAGQABABAAAAQAAAAABABQAAAAgBABQAAAAAAAAIgDACIgBAAIgBAAg");
	this.shape_647.setTransform(269.8,108.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#645858").s().p("AgEAEQAAAAAAgBQgBAAAAAAQAAAAABgBQAAAAAAAAIACgGIAHAAIAAAEQAAACgCACIgEABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_648.setTransform(266.2,108.6);

	this.instance_32 = new lib.CompoundPath_48();
	this.instance_32.parent = this;
	this.instance_32.setTransform(271.3,106.9,1,1,0,0,0,5.1,2.1);
	this.instance_32.alpha = 0.398;

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#8DD2CA").s().p("AgCgDIADAAIACAHIgEAAg");
	this.shape_649.setTransform(94.1,289.4);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#231F20").s().p("AgBAGIgDgIIADgBIgCgGIAGgFIgBALIADARg");
	this.shape_650.setTransform(93.6,287.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#414042").s().p("AAQAMIgDgPIgCgCIgZgBIgFASIAAAAIADgVIALgCIAAACIARACIAEgCIAEAVg");
	this.shape_651.setTransform(94.5,291.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FDA96F").s().p("AgEAEIgBgFIAFgCIAGAAIAAADIgGAEg");
	this.shape_652.setTransform(94.8,289.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FDA96F").s().p("AgEAAIACgCIADABIAEAEIgHABg");
	this.shape_653.setTransform(92.6,288.7);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#DB635E").s().p("AgCgBIACgEIgBgEIACgCIACACIgCADIACAGIgBADIgCAJg");
	this.shape_654.setTransform(94.1,287.4);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#414042").s().p("AABANIgEgGIgIgBIgEgEIgBgNIAFALIAFAEIAOAAIAEgJIAFgIIgDAJIgCAMIACAEIgKABg");
	this.shape_655.setTransform(94.3,288.4);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#231F20").s().p("AgCAAIAEgJIAAgFIAGAEIgGAGIAEADIgNAQg");
	this.shape_656.setTransform(94.9,287.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgGAAIABgJIAAgDIAEAFIAGgHIACABIAAAEIgFAJIgFAPQgDgMAAgDg");
	this.shape_657.setTransform(94.4,287);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#58595B").s().p("AgBAaIgDAIIgMgBIAEgVIgIAAQgCgCgBgCQgBgCABgEIACgCIACgLQABgIACgDIANgHIAEAGIAIgKIAGAFIAFADIAFADIgBAUIgEANIAEAXIgWAAg");
	this.shape_658.setTransform(94.2,289);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#231F20").s().p("AgOApIgFgFIACgCIgCgEIAAhBIALgGIAYAHIACBBIACAFIgCAFIgEgBIgGAAIgBgEIACgFIgGgbIgDgdIgFAAIgBA2IABACQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAABIABAHIgJgBg");
	this.shape_659.setTransform(94.8,295.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#414042").s().p("AgLACIAFgCIAGgEIALAEQACACgBABQgBACgGgBIgOAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_660.setTransform(92.9,299.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#414042").s().p("AgFADIABgDIgBgEIAKAAIAAADQABADgBABQgBACgEAAQgEAAgBgCg");
	this.shape_661.setTransform(96.1,299.8);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIABACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAg");
	this.shape_662.setTransform(95.1,284.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIgBADQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_663.setTransform(93.5,284.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#403024").s().p("AAGABIgGgBIgGACIgBADIgBADIgBgIQAAgHAIAAQAKAAAAAGQABAEgCAFQAAgHgCAAg");
	this.shape_664.setTransform(94.4,283.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FDA96F").s().p("AgCAJQgEgBgBgEIAAgNIAPAAIAAAGIgBAHQgBAEgDABIgDABIgCgBg");
	this.shape_665.setTransform(94.4,284.7);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FD8A5A").s().p("AgDAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAABABQADACAFgCQAAADgEABIAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAgBgBg");
	this.shape_666.setTransform(94.3,285.7);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FDA96F").s().p("AgFAAIAAgFIAKAAIABAIIgIADg");
	this.shape_667.setTransform(94.4,285.8);

	this.instance_33 = new lib.Path_14();
	this.instance_33.parent = this;
	this.instance_33.setTransform(97.6,297.9,1,1,0,0,0,5.7,2.2);
	this.instance_33.alpha = 0.398;

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#8DD2CA").s().p("AgCgDIADAAIACAGIgEABg");
	this.shape_668.setTransform(144.8,251.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#231F20").s().p("AgBAFIgDgHIADgBIgCgGIAGgEIgBAKIADARg");
	this.shape_669.setTransform(144.2,249.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#414042").s().p("AARAMIgEgPIgCgCIgZgBIgFASIAAAAIADgVIALgCIAAACIARACIAEgCIABAEIAAAAIADARg");
	this.shape_670.setTransform(145.2,253.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FDA96F").s().p("AgEAEIgBgEIAGgDIAFAAIAAADIgGAEg");
	this.shape_671.setTransform(145.4,251.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FDA96F").s().p("AgEAAIACgCIADAAIAEAEIgGACg");
	this.shape_672.setTransform(143.3,250.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#DB635E").s().p("AgCgBIACgFIgBgDIACgCIACACIgCADIACAGIgBADIgCAJg");
	this.shape_673.setTransform(144.8,249.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#414042").s().p("AABANIgEgGIgIgBIgEgFIgBgLIAFAKIAFAFIAOgBIAEgJIAFgHIgDAIIgCAMIACADIgJACg");
	this.shape_674.setTransform(144.9,250.4);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#231F20").s().p("AgCAAIAEgKIAAgEIAGAEIgGAGIAEADIgNAQIAFgPg");
	this.shape_675.setTransform(145.5,249.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgGAAIABgKIAAgBIAEAEIAGgHIACABIAAADIgFAKIgFAPQgDgMAAgDg");
	this.shape_676.setTransform(145.1,249.1);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#58595B").s().p("AgBAaIgDAIIgMgBIAEgVIgIAAIgDgEQgBgEABgCIACgCIACgLQACgIACgDQABgCAGgDIAFgDIAEAHIAIgKIAGAFIAFACIAFADIgBAUIgEAOIAEAWIgWABg");
	this.shape_677.setTransform(144.8,251.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#231F20").s().p("AgOAoIgFgEIACgCIgCgEIAAhAIALgHIAYAHIACBBIACAEQABABgCAEIgFgBIgGABIgBgEIACgFIgDgKIgDgRIgDgdIgFAAIgBA2IABACIgBADQAAACABAFQgHAAgCgBg");
	this.shape_678.setTransform(145.4,257.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#414042").s().p("AgJAEIgCgCIACgBIAEgBIAFgEIALADIABAFQgBABgGgBIgFAAIgGABIgDgBg");
	this.shape_679.setTransform(143.5,261.6);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#414042").s().p("AgFADIABgDIgBgDIAKgBIAAAHQgBACgEAAQgEAAgBgCg");
	this.shape_680.setTransform(146.8,261.9);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FDA96F").s().p("AgBAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_681.setTransform(145.8,246.7);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAABABAAQAAAAAAAAQAAABABAAIgBADQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_682.setTransform(144.1,246.7);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#403024").s().p("AAHABIgHAAQgEAAgCABIgBADIAAADIgCgIQAAgHAIAAQAKAAAAAHQABAEgCAEQAAgGgBgBg");
	this.shape_683.setTransform(145,245.8);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FDA96F").s().p("AgBAJQgEgDgBgDQgBgCAAgEIABgGIAOAAIAAANIgFAFIgDABIgBgBg");
	this.shape_684.setTransform(145,246.8);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FD8A5A").s().p("AgCABQgBgBgBAAQAAgBAAgBQAAAAAAAAQAAABABAAQADADAFgDQAAAEgEAAIgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_685.setTransform(145,247.7);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FDA96F").s().p("AgFAAIAAgFIAKgBIAAAIIgHAFg");
	this.shape_686.setTransform(145.1,247.9);

	this.instance_34 = new lib.Path_13();
	this.instance_34.parent = this;
	this.instance_34.setTransform(148.3,259.9,1,1,0,0,0,5.7,2.1);
	this.instance_34.alpha = 0.398;

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#EEBB59").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgBAAIgHACIADgCg");
	this.shape_687.setTransform(129.9,242.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#EEBB59").s().p("AgCAAIgCAAIACgBQABgBADACIADACIgHgCg");
	this.shape_688.setTransform(126.9,242.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AAAgCIAAABIABADIgBABg");
	this.shape_689.setTransform(129.5,232.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#DCA042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_690.setTransform(129.6,234.5);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#DCA042").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_691.setTransform(127.5,234.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIABADIgCABQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABgBg");
	this.shape_692.setTransform(129.5,228.7);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FDA96F").s().p("AAAABQgBgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAIgBACQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_693.setTransform(127.9,228.7);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FD8A5A").s().p("AgCgBQACACADgCQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_694.setTransform(128.7,229.8);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#6DB19F").s().p("AABACIgFADIgBgGIABgDIAFAEIAEgEIABAEIgBAFg");
	this.shape_695.setTransform(128.7,230.2);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgEADg");
	this.shape_696.setTransform(129.8,232.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FDA96F").s().p("AAAABIgCABIgBgCIABgBIAEABIACACg");
	this.shape_697.setTransform(127.9,231.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#443123").s().p("AABAEIgIgDIABgBIAHgDIAGAFIAAABIAAABIgDAAIgDAAg");
	this.shape_698.setTransform(130.1,243.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#443123").s().p("AgGAEIAAgBIAAgBQADgCABgBIACgCIAHADIABABIgIADIgDAAIgDAAg");
	this.shape_699.setTransform(126.8,243.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#403024").s().p("AAFABIgFAAQgDgBgCAAIgCAHIgBgHQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQAJAAABAFQABADgCAFQgCgGgBAAg");
	this.shape_700.setTransform(128.7,228);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FDA96F").s().p("AgBAJQgFgCgBgDIAAgNIAPAAIgBANQgBAEgEABIgCABIgBgBg");
	this.shape_701.setTransform(128.7,228.8);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_702.setTransform(128.7,229.8);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#6DB19F").s().p("AgFANIgHgCIANgHIADgEQAAgHABgCIACgEIAEAIQADALgDAEQgBACgEACIgEAAIgHgBg");
	this.shape_703.setTransform(129.5,232);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#7BC0B0").s().p("AgMAKQgCgCgBgGQgBgJACgDIADgDIAIANIATADIgCAEIgOAHQgJgCgDgCg");
	this.shape_704.setTransform(128.2,231.7);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#DB635E").s().p("AgEAVIABgkIACgEIgDgEIAEgBIACACIgCADIACAEIADAkIgEAEg");
	this.shape_705.setTransform(128.9,232.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#3E5665").s().p("AgNAAIAAgCIAOACIANgCIAAACIgOADg");
	this.shape_706.setTransform(128.6,234.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#8DD2CA").s().p("AgOAVQgDgCAAgEIABgJIgEgHQgBgKADgDIAFgEIAIgCIABgDIAEAEIAFgEIABAFIAJAEIAFAIQACALgCAEIgGAEIgCAKIgOABg");
	this.shape_707.setTransform(128.7,232.1);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#EEBB59").s().p("AAIAYQgCgEgBgMQgCgKgBgDIgCgBIAAABQgCAEgFAVQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgDgSADgQIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAFQADAUgEAPQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAgAAAgKIADAAIABgMIgEAAg");
	this.shape_708.setTransform(128.5,237);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#DCA042").s().p("AgRApIgCgDIACgCIAAgFIACgfQgCgaACgJIAEgJIAaAAIADAKIABBGIABABIgBADQgBACgDABQgBABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgEgCgBgSQABgYgBgIQgCgIgBgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAOgCAZIAAALQgBAIgCADIgDABQgCAAgFgEg");
	this.shape_709.setTransform(128.4,238.9);

	this.instance_35 = new lib.Path_12();
	this.instance_35.parent = this;
	this.instance_35.setTransform(132,241.4,1,1,0,0,0,5.4,2);
	this.instance_35.alpha = 0.398;

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_710.setTransform(84.6,252.2);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FDA96F").s().p("AAAABIAAgBIAAAAIABABIAAAAIgBAAg");
	this.shape_711.setTransform(84.5,252);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABg");
	this.shape_712.setTransform(84.4,251.8);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgBgBg");
	this.shape_713.setTransform(84.3,251.7);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#D09335").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_714.setTransform(83.6,257.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_715.setTransform(83.6,257.2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#D09335").s().p("AAAAAIAAgBIABABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_716.setTransform(83.6,256.4);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIgBACg");
	this.shape_717.setTransform(83.6,255.6);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#D09335").s().p("AgCAAIABgBIAEABIAAACg");
	this.shape_718.setTransform(84.3,257.8);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#D09335").s().p("AgEAAIAIgBIABABIgIACg");
	this.shape_719.setTransform(82.2,257.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#D09335").s().p("AgFACIABgDIgEAAIgBgIIAEgCIAJARIACgPIAEADIgCADIACADIgFAMg");
	this.shape_720.setTransform(83.1,253.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FDA96F").s().p("AgDAEIAAgDIAAgEIAHgBIAAAFIAAAEg");
	this.shape_721.setTransform(80.9,259);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#6DB19F").s().p("AgCABIAEgCIABABIgEACg");
	this.shape_722.setTransform(84.8,253.1);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#403024").s().p("AAEADIAAgDIgHAAIgBACIgCgBIACgEIALACIAAAFg");
	this.shape_723.setTransform(80.9,259.4);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#403024").s().p("AgRgCIAJAAIAaAEIgKABg");
	this.shape_724.setTransform(80.9,259.7);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#403024").s().p("AgDgOIAIgBIgBAdIgIACg");
	this.shape_725.setTransform(82.2,261.6);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#6C5549").s().p("AgNALIACgcIAZAFIgBAeg");
	this.shape_726.setTransform(80.4,261.3);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#6DB19F").s().p("AgDAAIAHAAIAAABIgHABg");
	this.shape_727.setTransform(80.9,258.4);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#92251B").s().p("AgGAHIgCgHQgBgEAEgEQACgCAFAAQAFAAACADIAAAFQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCABIgGgBIgCACIAAACIgCgBQAAAAgBAAQAAABAAAAQgBABAAAAQAAABABABQAAAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgCgEg");
	this.shape_728.setTransform(83.1,251);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FFFFFF").s().p("AgBAAIABgBIgCgCIACgDIADADIgCACIACABIgBAHg");
	this.shape_729.setTransform(83.3,253.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#6DB19F").s().p("AgFgGIADgDIAEAEIADgCIABACIgBAPg");
	this.shape_730.setTransform(83,253.4);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#D09335").s().p("AgEAJIgCgVIAFAIIABAIQABADAEACIACADIgCABQgEAAgFgEg");
	this.shape_731.setTransform(85.1,254.6);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#D09335").s().p("AgCAYIgBgIIACgbIABgGQAAgHACABQACAAAAAGIgCALQAAAHgDAYg");
	this.shape_732.setTransform(81.6,256.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FDA96F").s().p("AAAALIgCgBIgBgFIgCgBIAAACQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBgCABgGIAAgGIAPABIAAAGIgBADIABADIgFAIg");
	this.shape_733.setTransform(83.3,251.4);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FD8A5A").s().p("AgEADIAAgJIAJADIgCADIAAAEIgCACg");
	this.shape_734.setTransform(83.2,252.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#122A43").s().p("AAAAGIgEgIIABgCIACgBQAAgBAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAFAHIgBACIgCABIgBABIgBgBg");
	this.shape_735.setTransform(84.1,252.1);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#213D60").s().p("AAAAFIgEgHQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBQAAAAAAAAQABgBAAABQAAAAAAAAQAAAAAAAAIAFAIQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgBAAIgBgBg");
	this.shape_736.setTransform(84.2,252);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#EEBB59").s().p("AAAAhIgTgCIAAgIIgJAAIAAgSIADgWIADgKIAFgCIAKgDIAJARIABgQIAIAGIAFAJIgDgJIAFgEIALARQABADgBADIgEAFIgMgDIACAkIgJABIgDgJIgDAJg");
	this.shape_737.setTransform(83.3,256);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#2B5785").s().p("AAJATQgBgDgCgKIgBgLIAEgDIgHACIgDgBIgEANIgHADIgBgXIACAAIACgFIATAAIACAGIACAAIAAAWQAAAIgBADIgBAAIgDgBgAACgRIgBAHIADAAIAAgIg");
	this.shape_738.setTransform(82.9,260.9);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#213D60").s().p("AAHAjIgBAAIAAgEIABgHIgBgGQgBgDAAgIIABgMIgCgSIgDAAIgBAFIgGAoIAAAFIAAAKIgCACIgJgCIgCgCIABgDIABgMIAEg7IAfAAIAAA6IABAHIAAALIgLADg");
	this.shape_739.setTransform(82.7,262.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#6DB19F").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_740.setTransform(83.5,258.4);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#443123").s().p("AABAFIgKgEIABgCIAJgDIACACIAGAEQABAAAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgDAAIgEAAg");
	this.shape_741.setTransform(84.5,266.9);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#443123").s().p("AgDAHQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgKIAHAEIABADQABAFgBABIgDABIgBABIgDgBg");
	this.shape_742.setTransform(81.5,267.1);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FDA96F").s().p("AABAGIgEgDIgCgDIABAAIADABIAAgBQABAAAAAAQAAAAAAAAQAAgBAAgBQgBAAAAgBIgDgDIAAgCIADAAQADABABAEQABABAAAEIACADIgEAEg");
	this.shape_743.setTransform(84.5,252.5);

	this.instance_36 = new lib.CompoundPath_47();
	this.instance_36.parent = this;
	this.instance_36.setTransform(86.9,265.4,1,1,0,0,0,7,2.2);
	this.instance_36.alpha = 0.398;

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#3C4A65").s().p("AAAACIAAgCIAAgBIABADg");
	this.shape_744.setTransform(64.2,268.9);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#3C4A65").s().p("AAAABIAAgCIABAAIAAADg");
	this.shape_745.setTransform(62.6,268.8);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FEBF87").s().p("AgEAAIAFgDIAEACIgBABIgDAAIgDAEg");
	this.shape_746.setTransform(61.7,269.4);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FEBF87").s().p("AgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgBgBIADgDIACgBIAGAEIgDAEg");
	this.shape_747.setTransform(65,269.3);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#DB635E").s().p("AgEASIAAgaIADgIIgCgCIACgDIADACIgCACIADAJIACAaIgFAEg");
	this.shape_748.setTransform(63.3,266.2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#F1F2F2").s().p("AgHAAIACgCIAFACIAFgEIADADIgCAEIgGgDIgEAFg");
	this.shape_749.setTransform(63.2,264);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FFFFFF").s().p("AgEABIACgFIAHAEIgEAFg");
	this.shape_750.setTransform(65.5,268.7);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAEIgGAFg");
	this.shape_751.setTransform(61.3,269);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#F1F2F2").s().p("AAAATIABgGIABgMIgDgKIgCAOIABAKIgCABIAAgZQACgKACAAQABAAAAAKIAEAJIgBAOIgDAGg");
	this.shape_752.setTransform(65.1,267);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#F1F2F2").s().p("AgDAKIADgQQgDgLABgBQACgBADAIQABADAAAHIgBAIIAAAHIgCgBIAAgFIABgLIgBgEIgBAKIgBAQIgBAAg");
	this.shape_753.setTransform(61.9,267.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FFFFFF").s().p("AgYAZIgCgOIABgIQAAgRADgEQABgCAFgDIAFgCIAPgCIAGACQAGABACACQADAEADAJIADANQAAAEgCALIgEAHIgEgCIADgGIABgPIgEgHQAAgKgCAAQgCAAgCAKIAAAYQgGADgGgBIgLgCIAAgHIAAgJQABgFgBgDQgFgJgBABQgBABACALIgDARIACAJIgEACg");
	this.shape_754.setTransform(63.5,266.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FDA96F").s().p("AgBAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_755.setTransform(63.9,262.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIgBADQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_756.setTransform(62.2,262.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#403024").s().p("AAHABIgHAAQgDgBgDACIgCADIAAADIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQABgHgCAAg");
	this.shape_757.setTransform(63.1,261.6);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FDA96F").s().p("AgBAKQgEgCgCgEIAAgNIAPAAIAAANQgBADgEADIgDAAIgBAAg");
	this.shape_758.setTransform(63.1,262.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_759.setTransform(63.1,263.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FEBF87").s().p("AgFACIAAgEIAKgBIABADIgGAEg");
	this.shape_760.setTransform(63.1,263.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#DCA042").s().p("AgOAAIABgCIAbAAIABACQgHADgHAAg");
	this.shape_761.setTransform(63.4,268.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#3C4A65").s().p("AgUAoQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIACgCIgCgDQgCgDACgPIAAgpIAGgNIAbAAIAFAOIAFA3QAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAIADACQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgJAAIgCgDIACgDIgCgDIgCgSIgGghIgHAAIgDAYIAAAOQAAAJgBAEIgCACIACAFIgDAEg");
	this.shape_762.setTransform(63.6,272.6);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#2B271C").s().p("AAAAFQgDgCgBgDIAAgFIAGAAIADAGIAAADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCgBg");
	this.shape_763.setTransform(65.4,277);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#2B271C").s().p("AgEAEIAAgCIACgGIAIAAIAAAEQgCADgBABIgEABIgDgBg");
	this.shape_764.setTransform(61.9,277);

	this.instance_37 = new lib.CompoundPath_46();
	this.instance_37.parent = this;
	this.instance_37.setTransform(66.9,275.3,1,1,0,0,0,5.1,2.1);
	this.instance_37.alpha = 0.398;

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#58595B").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABAAIgCAAIgGACIACgCg");
	this.shape_765.setTransform(117.2,225.7);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#58595B").s().p("AgCAAIgCAAIACgBQABgBADACIADADIgHgDg");
	this.shape_766.setTransform(114.2,225.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FFFFFF").s().p("AAAgCIAAABIABADIgBABg");
	this.shape_767.setTransform(116.8,215.3);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#414042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_768.setTransform(116.8,217.6);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#414042").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_769.setTransform(114.8,217.6);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIgCACQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABgBg");
	this.shape_770.setTransform(116.8,211.8);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIgBACQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_771.setTransform(115.2,211.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FD8A5A").s().p("AgCgBQACACADgCQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgBAAQAAAAAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_772.setTransform(116,212.9);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#374553").s().p("AABACIgFADIgBgGIABgDIAFAEIAEgEIABAEIgBAFg");
	this.shape_773.setTransform(116,213.3);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgEADg");
	this.shape_774.setTransform(117.1,215.2);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FDA96F").s().p("AAAABIgCABIgBgCIABgBIAEABIACACg");
	this.shape_775.setTransform(115.2,214.6);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#443123").s().p("AABAEIgIgDIABgBIAHgDIAGAFQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_776.setTransform(117.4,226.4);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#443123").s().p("AgGAEQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABAAQADgCABgBIACgCIAHADIABABIgIADg");
	this.shape_777.setTransform(114.1,226.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#403024").s().p("AAFABIgFAAQgDgBgCAAIgCAHIgBgHQAAgCADgCQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQAJAAABAFQABADgDAFQgBgGgBAAg");
	this.shape_778.setTransform(116,211.1);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FDA96F").s().p("AgCAJQgEgCgBgDIAAgNIAPAAIgBANQgCAEgDABIgCAAIgCAAg");
	this.shape_779.setTransform(116,211.9);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_780.setTransform(116,212.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#293544").s().p("AgFANIgHgCIANgHIADgEQAAgHABgCIACgEIAEAIQADALgDAEQAAACgFACIgEAAIgHgBg");
	this.shape_781.setTransform(116.8,215.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#374553").s().p("AgMAKQgCgCgBgGQgBgJADgDIACgDIAIANIATADIgCAEIgOAHQgJgCgDgCg");
	this.shape_782.setTransform(115.5,214.8);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#2E211A").s().p("AgEAVIABgkIACgEIgDgEIAEgBIADACIgDADIACAEIADAkIgEAEg");
	this.shape_783.setTransform(116.2,216);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#2B271C").s().p("AgNAAIAAgCIAOACIANgCIAAACIgOADg");
	this.shape_784.setTransform(115.9,217.6);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#4E5C6E").s().p("AgOAVQgDgCgBgEIACgJIgEgHQgBgKADgDIAFgEIAIgCIABgDIAEAEIAFgEIABAFIAJAEIAFAIQACALgCAEQgBACgFACIgCAKIgOABg");
	this.shape_785.setTransform(116,215.2);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#58595B").s().p("AAIAYQgCgEgBgMIgDgNIgCgBIAAABQgCAEgFAVQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgDgUADgOIABgDIAFgCIACgCIgDgCIASAAIgEACIACACIAFACIABAFQADAUgEAPQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAgAAAgKIADAAIABgMIgEAAg");
	this.shape_786.setTransform(115.8,220.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#414042").s().p("AgRApIgCgDIACgBIACglQgCgaACgJIAEgJIAaAAIADAKIABBGIABABIgBADIgEADQgBABgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgEgCgBgSQABgYgBgIQgCgIgBgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAOgCAZIAAAMQgBAIgCACIgDABQgCAAgFgEg");
	this.shape_787.setTransform(115.7,222);

	this.instance_38 = new lib.Path_11();
	this.instance_38.parent = this;
	this.instance_38.setTransform(119.3,224.5,1,1,0,0,0,5.4,2);
	this.instance_38.alpha = 0.398;

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FDA96F").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_788.setTransform(274.8,137);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgBgBg");
	this.shape_789.setTransform(274.7,136.9);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_790.setTransform(274.6,136.7);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FDA96F").s().p("AAAABIAAgBIABAAIAAABIAAAAIgBAAg");
	this.shape_791.setTransform(274.5,136.6);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_792.setTransform(273.8,142.7);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#231F20").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_793.setTransform(273.8,142);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_794.setTransform(273.8,141.2);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#231F20").s().p("AAAAAIAAgBIABABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_795.setTransform(273.8,140.4);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#231F20").s().p("AgCAAIABgBIAEABIAAACg");
	this.shape_796.setTransform(274.5,142.6);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#231F20").s().p("AgEAAIAIgBIABABIgIACg");
	this.shape_797.setTransform(272.5,142.6);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#231F20").s().p("AgFACIACgDIgFAAIgCgIIAGgDIAJARIABgOIAEAEIgCACIACADIgFAMg");
	this.shape_798.setTransform(273.3,138.6);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FDA96F").s().p("AgDAEIAAgDIAAgEIAHgBIAAAFIAAAEg");
	this.shape_799.setTransform(271.1,143.8);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FFFFFF").s().p("AgCABIAEgCIAAABIgCACg");
	this.shape_800.setTransform(275,137.9);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#403024").s().p("AAEAEIAAgEIgHgBIgBADIgCAAIACgFIALACIAAAFg");
	this.shape_801.setTransform(271.1,144.3);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#403024").s().p("AgRgBIAJgBIAZAEIgIABg");
	this.shape_802.setTransform(271.1,144.5);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#403024").s().p("AgCgOIAHgBIgBAeIgIABg");
	this.shape_803.setTransform(272.4,146.4);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#6C5549").s().p("AgNALIACgcIAZAFIgBAeg");
	this.shape_804.setTransform(270.6,146.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFFFFF").s().p("AgDAAIAHAAIAAABIgHABg");
	this.shape_805.setTransform(271.1,143.2);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#92251B").s().p("AgGAHIgCgHQgBgEAEgEQACgCAFAAQAFABACACQABAGgBgBIgDABQgFgCgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAAAIAAACIgCgBQgBAAAAAAQAAABgBAAQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCgEg");
	this.shape_806.setTransform(273.3,135.8);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#DB635E").s().p("AgBAAIABgBIgCgBIACgEIADADIgCADIACAAIgBAHg");
	this.shape_807.setTransform(273.5,138.5);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FFFFFF").s().p("AgFgHIADgCIAEAEIADgCIABACIgBAPg");
	this.shape_808.setTransform(273.2,138.2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#231F20").s().p("AAAALIgEgCIgCgUIAEAHIACAIQACAGAFACIgCAAIgFgBg");
	this.shape_809.setTransform(275.3,139.4);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#231F20").s().p("AgCAYIgBgIIACgbIABgGQAAgHACABQACAAAAAGIgCALQAAAHgDAXg");
	this.shape_810.setTransform(271.8,141.5);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FDA96F").s().p("AAAALIgBgBIgCgFQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAADIgCgCQgBgDABgGIAAgGIAPABIAAAHIgBACIABADQgCAHgCABg");
	this.shape_811.setTransform(273.5,136.2);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FD8A5A").s().p("AgEADIAAgJIAJADIgCADIAAAEIgCACg");
	this.shape_812.setTransform(273.4,136.9);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#122A43").s().p("AAAAFIgEgHIAAgBIABgBIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFAIQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIgBAAIgBgBg");
	this.shape_813.setTransform(274.3,136.9);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#213D60").s().p("AAAAGIgEgIQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACgBQAAAAAAAAQABgBAAABQAAAAAAAAQAAAAAAABIAFAHQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCABIgBAAIgBAAg");
	this.shape_814.setTransform(274.4,136.8);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#414042").s().p("AAAAhIgTgCIAAgIIgJAAIAAgSIADgWIADgKIAFgCIAKgDIAJARIABgQIAIAGIAFAJIgDgIIAFgFIALAQQABAEgBADIgEAFIgMgDIACAkIgJABIgDgJIgDAJg");
	this.shape_815.setTransform(273.5,140.8);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#808285").s().p("AAJATQgBgDgCgKIgBgLIAEgDIgHACIgDgBIgEANIgHADIgBgWIACgBIACgFIATABIACAFIACABIAAAMQABAQgCAEIgCAAIgCgBgAACgRIAAAIIACgBIAAgHg");
	this.shape_816.setTransform(273.1,145.7);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#58595B").s().p("AAHAkIgBgCIAAgDIABgIIgBgFQgBgDAAgJIABgLIgCgSIgDAAIgBAGIgGAnIABAPIgDACIgJgCIgCgDIABgCQABgDAAgJIAEg7IAfAAIAAA6IABAGIAAAMIgLADIgBgEg");
	this.shape_817.setTransform(272.9,147.6);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FFFFFF").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_818.setTransform(273.7,143.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#443123").s().p("AABAFIgJgEIAAgCIAJgDIACACIAGAEIAAACIgBABIgCABIgFgBg");
	this.shape_819.setTransform(274.7,151.7);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#443123").s().p("AgCAHQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgKIAHAEQADAHgBACIgFABIAAABIgCgBg");
	this.shape_820.setTransform(271.7,151.9);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FDA96F").s().p("AABAGIgEgDIgCgDIABAAIADABIABgBQAAAAAAAAQAAAAAAAAQAAgBAAgBQgBAAAAgBIgDgCIAAgCIAEgBQAAABADAEIAAAFIADADIgEAEg");
	this.shape_821.setTransform(274.7,137.3);

	this.instance_39 = new lib.CompoundPath_45();
	this.instance_39.parent = this;
	this.instance_39.setTransform(277.2,150.3,1,1,0,0,0,7,2.3);
	this.instance_39.alpha = 0.398;

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#58595B").s().p("AAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgBAAIgHACg");
	this.shape_822.setTransform(260.3,51.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#58595B").s().p("AgCAAIgCAAIACgBQACgBAFAEIgHgCg");
	this.shape_823.setTransform(257.2,51.8);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FFFFFF").s().p("AgBgCIABABIACADIgCABg");
	this.shape_824.setTransform(259.9,41.4);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#414042").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_825.setTransform(259.9,43.6);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#414042").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_826.setTransform(257.9,43.6);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FDA96F").s().p("AgBAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_827.setTransform(259.9,37.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FDA96F").s().p("AgBAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAABABAAQAAAAAAAAQAAABABAAIgBADQgBAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_828.setTransform(258.3,37.8);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgCQgBACgCABIgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_829.setTransform(259.1,38.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#374553").s().p("AAAACIgEADIgCgGIADgEIAEAFIAEgFIACAFIgCAFg");
	this.shape_830.setTransform(259,39.4);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgDADg");
	this.shape_831.setTransform(260.2,41.3);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FDA96F").s().p("AAAABIgCABIgBgDIABgBIADABIADAEg");
	this.shape_832.setTransform(258.2,40.7);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#443123").s().p("AABAEIgHgDIAAgCIAHgCIACACIAEADIAAACIgDAAIgDAAg");
	this.shape_833.setTransform(260.4,52.5);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#443123").s().p("AgGAEIAAgCIAEgDIACgCQABgBAGADIAAACIgHADIgEAAIgCAAg");
	this.shape_834.setTransform(257.2,52.5);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#403024").s().p("AAFABIgFABQgDgCgCABIgCAGIgBgHQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQAJAAABAFQABAEgCAEQgCgFgBgBg");
	this.shape_835.setTransform(259.1,37.1);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FDA96F").s().p("AgBAJIgGgGIAAgLIAPAAQAAAIgBADQgBADgEADIgCAAIgBAAg");
	this.shape_836.setTransform(259.1,37.9);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_837.setTransform(259.1,38.9);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#293544").s().p("AgFANIgHgDIAOgGIACgEIABgJIADgEIADAIQADALgDAEQgBACgEACIgEAAIgHgBg");
	this.shape_838.setTransform(259.8,41.2);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#374553").s().p("AgLALQgDgCgBgHQgBgIACgEIADgDIAJANIATAEIgCADIgPAHQgJgBgCgCg");
	this.shape_839.setTransform(258.6,40.9);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#2E211A").s().p("AgEAVIABgjIACgFIgDgDIAEgCIADADIgDACIACAFIADAkIgFADg");
	this.shape_840.setTransform(259.2,42);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#2B271C").s().p("AgNAAIAAgCIAOABIAMgBIABACIgOADg");
	this.shape_841.setTransform(258.9,43.7);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#4E5C6E").s().p("AgOAVQgDgCAAgEIABgIIgDgIQgCgJADgEIAFgEIAIgCIACgEIAEAFIAEgFIACAGIAJAEIAEAIQACALgCAFIgGADIgBAJIgPADg");
	this.shape_842.setTransform(259,41.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#58595B").s().p("AAIAYQgCgEgBgMQgCgKgBgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAFgFATQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQgDgTADgPIABgDIAFgCIADgDIgDgBIARAAIgEABIACADIAFACIABAEQADAWgEAOQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAgAAAgKIADAAIABgMIgEAAg");
	this.shape_843.setTransform(258.9,46.1);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#414042").s().p("AgMAsIgFgDIgCgCIACgCIACglQgCgaACgJIAFgJIAZAAIADAKIAAA1IABARIABACIgBADQgBABgDABQgEABgBgBQgEgCgBgSQABgXgBgIQgCgJgBgBIgCACQgBAJgBALIgBASIgBAMQgBAIgCACIgCABIgDgBg");
	this.shape_844.setTransform(258.7,48);

	this.instance_40 = new lib.Path_10();
	this.instance_40.parent = this;
	this.instance_40.setTransform(262.3,50.5,1,1,0,0,0,5.4,2);
	this.instance_40.alpha = 0.398;

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgHIgCgKIAAgLIADAAIACASIACAGIAAAEIgBADIABAAIAAACg");
	this.shape_845.setTransform(279.2,68.9);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#83582C").s().p("AgOASQgCgCACgDIACgIIgBgFIADgKQACgIAHgBIACABIAEAAQADACACAEIACAFQADAFAAADIAAALIgCAHQgDACgDgCIgBgFIABgKQACgEgCgIIgLAAIgBAFQAAAFACADIAAAEIABAFQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgCACgEAAQgEAAgCgCg");
	this.shape_846.setTransform(280.7,62.3);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FEBF87").s().p("AgFAFQgCgDAAgEIACgGIALAAIACAGQAAAFgCACQgCAEgDgBQgDABgDgEg");
	this.shape_847.setTransform(280.8,62.3);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FDA96F").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_848.setTransform(280.9,62.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FEBF87").s().p("AgFAEIgBgFIACAAIAAgIIAIAAIABAIIADAAQAAALgIAAQgDAAgCgGg");
	this.shape_849.setTransform(280.9,63.5);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FEBF87").s().p("AgCASIACgDIAAgDIAAAAIgBAEIgCgBIABgHIACgFIAAgPIAAgGIADAAIABAeIgBAEIgEADg");
	this.shape_850.setTransform(282.9,68.9);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAQAAQgBAQgIAAIgBABQgHAAgCgQg");
	this.shape_851.setTransform(280.8,64.2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#B6D876").s().p("AAAAiIgPAAIgBgLIACgQIABgmIACgBQACARAJgBQAHgBABgQIABABIAIA5QAAAFgBAEIgLAAIgFAAg");
	this.shape_852.setTransform(281.1,66.7);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#645858").s().p("AAAAgIgBgHIABgVIgDAAIAAgPIAAgHIACgKQABgCAEgCIgBAmIgCAQIACALg");
	this.shape_853.setTransform(279.2,66.8);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#645858").s().p("AgFgcQAFACABACQACADABANIACAPIgEAAIABAGIgBAQg");
	this.shape_854.setTransform(282.6,66.3);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#3C4A65").s().p("AAJAgIgEgCIAAgQQACgGgBgDIgBgGIgBgZIgFgBIgBASIgBAOIABARIABAJIgCABIgFAAQgEgRgBgHIABgMIgEgXIABgEIAfAAIABAFIgCAUIABARIgDAVIgDAAIgBAAg");
	this.shape_855.setTransform(281,72.7);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#DCA042").s().p("AgCAIIgCgDIABgIIACgFIAFABIgBAIIABAFIgBACQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgCgBg");
	this.shape_856.setTransform(281.9,76.5);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#DCA042").s().p("AgFAIIgBgBIAAgBQAGgFAAgDIAAgFIAGgBIABAMIgCABIgCAAIgDADIgCABIgDgBg");
	this.shape_857.setTransform(280.1,76.5);

	this.instance_41 = new lib.CompoundPath_44();
	this.instance_41.parent = this;
	this.instance_41.setTransform(285,75,1,1,0,0,0,5,2.4);
	this.instance_41.alpha = 0.398;

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQgBAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABgBAAQAAABAAAAQAAAAgBABIgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBgBAAAAg");
	this.shape_858.setTransform(153.8,147.5);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#050001").s().p("AgGAGIgCAAIgBgHQACgHAHgBQAEgBADAEQADACAAADIgBAIQAAABgBgCQABgFgBgBIgFAAIgDAAIgEADIAAAHIAAAAg");
	this.shape_859.setTransform(154.6,146.7);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FDA96F").s().p("AAAALIgFgDIgCgIIABgIIAKgCIAEAGIgCAMIgCADg");
	this.shape_860.setTransform(154.8,147.4);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FDA96F").s().p("AgBAAQAAAAABgBQAAgBAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAg");
	this.shape_861.setTransform(155.4,147.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#4E5C6E").s().p("AgPAXQgCgBAAgFIAAgIIADgPIAEgKIgDgDIABgBIAGABIABgDIACAAIgBAEIAEABIACAHIgBADIADAAIABgCIgCgIIACAAIAAgEIABAAIABADIACAAIADADIAGAfIgBADIgCABIgDgDQgDgDgDgIIgDgHIgEADIgDAFIgDAFQgDAGAAAEIgCABIgBAAIgCAAg");
	this.shape_862.setTransform(155.1,156.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgDACIAAgEIgBgDIAAgEIAFAHIAEAIg");
	this.shape_863.setTransform(155.6,149.2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FD8A5A").s().p("AgBAGIgCgFIgBgEQAAgBAAgBQAAgBAAgBQAAAAABAAQAAgBAAAAQACABACADQAEADAAABQAAAJgDgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBgBAAg");
	this.shape_864.setTransform(154.6,148.1);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#2B271C").s().p("AgMATIAWgoIADABIgJAUQgDAGgLAQg");
	this.shape_865.setTransform(154.5,151.6);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#BCAEA4").s().p("AgEgDIAEgFIACAGIADAFIgFAGg");
	this.shape_866.setTransform(154.1,149.1);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FDA96F").s().p("AAAAFIAAgFIgDgCIAFgDIABAEIgDAHg");
	this.shape_867.setTransform(153.5,154.8);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#6B584B").s().p("AAAATIAAgTIgBgRQABgBACAVIAAAQg");
	this.shape_868.setTransform(156.3,151.8);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#95847D").s().p("AABAXIgBgOIgCgOIgFgPIABgFIAJADIAEAbIAAAPIgDAAIgBAHg");
	this.shape_869.setTransform(155.9,151.7);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_870.setTransform(153.1,154.3);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#6B584B").s().p("AgCAKIAAgKIABgOIgBgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQACgBAAAIQABAEgBALQgBAIABAFIAEAJIgCACg");
	this.shape_871.setTransform(153.4,151.8);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#95847D").s().p("AgLALQgDgLADgOIAFgKIAMgFIAFALIACAAIAAAGQgDAcgEAGIgDADIgGAFQgHgNgBgGg");
	this.shape_872.setTransform(153.3,151.6);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#4E5C6E").s().p("AgGABIAAgCIAEABIAEAAIAEgBIABACIgCABIgIAAg");
	this.shape_873.setTransform(156.4,161.8);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#4E5C6E").s().p("AgFADIAAgDIADAAIAHgCIABACIgGADg");
	this.shape_874.setTransform(153.7,161.9);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#293544").s().p("AgVALIAEgdIACgHIADgIIgBgEIABgEIAPAEIAHgCIABAEIAEAEIAGAgIgBASIgCASIAAACIgLAAQgBgVAAgIIABgFIgEgKIgDgIIgDAGIgFAVIABAOQAAAEgCAHIgJADg");
	this.shape_875.setTransform(155.1,157.9);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#2B271C").s().p("AgMAFIAAgFIABgBIAAgEIAIAAIADADIAGADIAHACIAAACIgDABg");
	this.shape_876.setTransform(157.1,162.5);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#2B271C").s().p("AgHAEIAAgEIAAgDIAHgCIABAEQACABADACIACABIAAACIgKABIgFgCg");
	this.shape_877.setTransform(154.2,162.6);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#5D4736").s().p("AgNAUIAJguIAJABIAHAXIABAYIgMAFg");
	this.shape_878.setTransform(154.9,151.9);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#2B271C").s().p("AAEAPIgRgMIAGgLIAMgJIAJAGIgGAcg");
	this.shape_879.setTransform(152.4,155.3);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FDA96F").s().p("AgEAJIgCgMIAAgGIAJAFIAAAEIAEADIgDAHg");
	this.shape_880.setTransform(154.8,148.8);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FDA96F").s().p("AgCACIACgHIADABIgBAKg");
	this.shape_881.setTransform(156.3,154.1);

	this.instance_42 = new lib.CompoundPath_43();
	this.instance_42.parent = this;
	this.instance_42.setTransform(158.8,160.8,1,1,0,0,0,5.5,2.2);
	this.instance_42.alpha = 0.398;

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FDA96F").s().p("AgBAAQgBAAAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAABQABAAAAABQAAABABAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAgBAAIAAABQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_882.setTransform(274.8,39.5);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#050001").s().p("AgHAGIAAAAIgCgHQAAgDAEgCQADgDADAAQACgBAFAEQACACAAADIgBAIQgBABABgCQAAgFgBgBIgFAAIgDAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAABgBABIAAAHIgBAAg");
	this.shape_883.setTransform(275.6,38.6);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FDA96F").s().p("AAAALIgFgDIgCgIIABgIIAKgCIAEAGIgCAMIgCADg");
	this.shape_884.setTransform(275.7,39.3);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FDA96F").s().p("AAAADQgBAAAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAAAAABgBQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgBABAAAAIAAgBg");
	this.shape_885.setTransform(276.3,39.4);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#4E5C6E").s().p("AgPAXQgCgBAAgFIAAgIIADgPIAEgJIgDgEIABgBIAGACIABgEIACAAIgBAEIAEABIABAEIABADIgBADIACAAIABgCIAAgEIgCgEIACAAIABgEIABAAIAAAEIACAAIAEACIAGAfIgBADIgCABIgDgDQgDgDgDgIIgDgHIgEADIgEAFIgGAPQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAIgBAAg");
	this.shape_886.setTransform(276.1,48.1);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#BCAEA4").s().p("AADAIIgDgGIgEACIAAgEIAAgDIAAgEIAFAHIAEAIg");
	this.shape_887.setTransform(276.6,41.1);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FD8A5A").s().p("AgBAGQgCgDAAgCIgBgEQAAgBAAgBQAAgBABgBQAAAAAAAAQAAgBAAAAQACABACADQAEADAAABQAAAJgDgBQgCAAgBgCg");
	this.shape_888.setTransform(275.5,40);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#2B271C").s().p("AgMASIAOgVIAIgSIACABQgFAQgDAEQgEAGgLAQg");
	this.shape_889.setTransform(275.5,43.5);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#BCAEA4").s().p("AgEgDIAEgFIACAGIADAFIgFAGg");
	this.shape_890.setTransform(275,41);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FDA96F").s().p("AAAAFIAAgFIgCgCIADgDIACAEIgDAHg");
	this.shape_891.setTransform(274.4,46.7);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#6B584B").s().p("AABATIgBgTIgBgKQgBgHABAAQABgBACAVIAAAQg");
	this.shape_892.setTransform(277.1,43.7);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#95847D").s().p("AABAXIgBgOIgCgNIgFgQIACgFIAIADIAEAbIgBAPIgCAAIgBAGg");
	this.shape_893.setTransform(276.9,43.6);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgHAFg");
	this.shape_894.setTransform(274,46.2);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#6B584B").s().p("AABAUIgDgLIABgYIgBgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAIQABAEgCALIABANIAEAJIgBABg");
	this.shape_895.setTransform(274.3,43.7);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#95847D").s().p("AgMALQgCgMADgNIAEgKIANgFIAFALIACABIAAAFQgDAagEAIIgJAIQgIgOgBgFg");
	this.shape_896.setTransform(274.3,43.5);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#4E5C6E").s().p("AgGACIAAgDIAEABIADAAIAFgCIABADIgDABIgHAAg");
	this.shape_897.setTransform(277.3,53.7);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#4E5C6E").s().p("AgFADIABgDIACAAIAEgBIADgBIABACIgGADg");
	this.shape_898.setTransform(274.6,53.8);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#293544").s().p("AgUALQgBgFACgMIACgMIADgHIACgIIgBgEIACgEIAPAEIAGgCIACAEIADAEIAEAYIACAIIgBASIgCASIAAACIgLAAIgBgdIABgFIgEgKIgDgIIgDAGIgEAVIAAAOIgCALIgIADg");
	this.shape_899.setTransform(276,49.8);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#2B271C").s().p("AgMAFIAAgFIAAgBIABgDIAIgBIADADIAGADIADABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABIABACIgDABg");
	this.shape_900.setTransform(278.1,54.4);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#2B271C").s().p("AgCAGIgFgCIAAgEIAAgDIAHgCIABAEQAEADADABIAAADIgHAAIgDAAg");
	this.shape_901.setTransform(275.1,54.5);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#5D4736").s().p("AgMAUIAJguIAJABIAHAXIABAZIgNAEg");
	this.shape_902.setTransform(275.8,43.8);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#2B271C").s().p("AADAPIgQgMIAGgLIALgJIAJAGIgFAdg");
	this.shape_903.setTransform(273.3,47.2);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FDA96F").s().p("AgEAJIgCgLIAAgHIAKAFIAAAEIADADIgDAHg");
	this.shape_904.setTransform(275.7,40.7);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FDA96F").s().p("AgCADIACgIIADABIAAAGIgBAEg");
	this.shape_905.setTransform(277.2,46);

	this.instance_43 = new lib.CompoundPath_42();
	this.instance_43.parent = this;
	this.instance_43.setTransform(279.8,52.7,1,1,0,0,0,5.5,2.2);
	this.instance_43.alpha = 0.398;

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FEBF87").s().p("AgFAFQgCgDABgFQAAgDADgCIAGgBIACADIACADQABADgBADQgBAFgDABIgEABg");
	this.shape_906.setTransform(105.5,186.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FD8A5A").s().p("AgDAAQABgDACAAQADAAABADQgBAEgDAAQgCAAgBgEg");
	this.shape_907.setTransform(105.6,187);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#DCA042").s().p("AgJgDIATAAIABAGIgWABg");
	this.shape_908.setTransform(105.8,190.6);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FEBF87").s().p("AAAAEIAAgEIABgBIgBAAIgCACIgBAAIABgCIACgDIADACIAAADIAAAAIgCADg");
	this.shape_909.setTransform(107.2,192.2);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#213D60").s().p("AgNAfQgEgZADgGIAEgGIAAgHIgDgMIABgEIAMABQAGgBAEgCIADAGIgDAMIgBAFIAFAEQAEAHgEAbQgCACgLAAg");
	this.shape_910.setTransform(105.8,191.7);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FEBF87").s().p("AgYAiQgEgEAAgDIAJgaQAAgRADgFIAGgDQAEgCAAgCIAAgFIAHgCIABAGQAAAAAAABQABABAAAAQAAABABAAQAAAAABAAIAGABIAFAGQANAQAAADQAAAGgJAMQAAABgFgBIgBAEIgDgBIABgEIACgBIgDAAIgBACIgBAAIABgCIACgDQAEACABAAQAEgCACgNIgLgMIgCACIgWACIgCAPQgBAFgJAPIABAFIABACIAAABg");
	this.shape_911.setTransform(105.9,190.4);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FEBF87").s().p("AAGAkIgBgKIgBgCIAAgFIgHgQIgBgIIgFgIIgBgNIgBgJIALABIAAATIAGANIABAKIABAKIACAEIABAGIABAHIgDAAIgCABIgBAAg");
	this.shape_912.setTransform(107.1,196.3);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FEBF87").s().p("AABAjIAAgOQgEgSAAgFIAAgKIgDgWIAKgBIABARIgBAHIACALIgBAKQgBAHABADIACADIAAAMIgDABg");
	this.shape_913.setTransform(105.1,196.3);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#9A482E").s().p("AgMAKIABgEQgDgKACgDQAAgCAEgDIAEgCIAKAAIADADIAFAKIAAAIIgEAGQgDACgNAAg");
	this.shape_914.setTransform(105.6,186.1);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#231F20").s().p("AgBAFQgDgEABgCQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADABAAAFQAAAEgDABg");
	this.shape_915.setTransform(103.8,193.4);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#231F20").s().p("AgBAJIgCgFIAAgHIAEgFIADAGIAAAEQAAAGgBABIgCAAIgCAAg");
	this.shape_916.setTransform(108,199.6);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#231F20").s().p("AgBAJQgCgBAAgFIABgFIAEgHIABACIAAAEIABAGQAAAFgCABIgCABIgBgBg");
	this.shape_917.setTransform(105.6,199.6);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FEBF87").s().p("AAAACIgDgCIAAgBIAEACIACAAIABABg");
	this.shape_918.setTransform(103.8,194);

	this.instance_44 = new lib.CompoundPath_41();
	this.instance_44.parent = this;
	this.instance_44.setTransform(109.6,198.3,1,1,0,0,0,4.9,2);
	this.instance_44.alpha = 0.398;

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FEBF87").s().p("AgFAFQgBgDAAgFQACgEACgBIAFgBIAEAGQABADgBAEQgCAFgCABIgEAAIgEgFg");
	this.shape_919.setTransform(265.9,27.3);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FD8A5A").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEABQgDgBAAgEg");
	this.shape_920.setTransform(266,28.2);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#DCA042").s().p("AgKgDIAUAAIACAGIgXACg");
	this.shape_921.setTransform(266.2,31.8);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FEBF87").s().p("AAAADIAAgDIABgBIgBAAIgCACIgBAAIABgCIACgDIADACIABADIgBAAIgCADg");
	this.shape_922.setTransform(267.6,33.3);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#213D60").s().p("AgNAfIgBgNQgCgPACgDIAEgGIAAgHIgCgMIAAgFIAMACQAGgBAEgCIADAGIgDAMIAAAFIAEAEQAEAHgEAbQgBACgMAAg");
	this.shape_923.setTransform(266.2,32.8);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FEBF87").s().p("AgYAjIgCgDQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIAJgaQAAgRADgFQABgBAFgCQADgBABgDIAAgFIAHgCIABAGIADADIAGABIAFAGQANAQAAACQAAAHgJAMQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBgBIgCAEIgCgBIAAgEIACgBIgCAAIgCACIgBAAIABgCIACgDIAFACQAEgCACgOIgKgLIgDACIgWABIgCAQQgBAFgJAPIABAFIACACIgBABg");
	this.shape_924.setTransform(266.3,31.6);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FEBF87").s().p("AAGAkIgBgKIgBgCIAAgEIgHgRIgBgHIgFgJIgCgNIAAgJIALACIAAATQABADAEAJIADAVIACADIABAHQACAFgBACg");
	this.shape_925.setTransform(267.5,37.4);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FEBF87").s().p("AABAjIAAgOIgEgXIAAgLIgDgVIAKgBIACAjIgBAUIACADIAAAFIAAAHIgDABg");
	this.shape_926.setTransform(265.5,37.5);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#9A482E").s().p("AgGAPIgHgFIABgEIgBgGQgBgFABgCQABgCADgDIAEgCIALAAIACADIAGAKIAAADIAAAFIgEAGQgCACgIAAIgGAAg");
	this.shape_927.setTransform(266,27.2);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#231F20").s().p("AgBAFQgCgCAAgEIACgDQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABQADABAAAEQAAAEgDAAIgBABIgBgBg");
	this.shape_928.setTransform(264.2,34.6);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#231F20").s().p("AAAAJQgCgBgCgEIABgHIAEgGIACAHIABAFQAAAFgBABIgCABIgBgBg");
	this.shape_929.setTransform(268.5,40.8);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#231F20").s().p("AgCAJIgCgGIABgFIAFgHIABACIAAAEIABAGQgBAGgBAAIgCABIgCgBg");
	this.shape_930.setTransform(266,40.8);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FEBF87").s().p("AABACIgEgCIAAgBIAEACIADAAIAAABg");
	this.shape_931.setTransform(264.2,35.1);

	this.instance_45 = new lib.CompoundPath_40();
	this.instance_45.parent = this;
	this.instance_45.setTransform(270,39.5,1,1,0,0,0,4.9,2);
	this.instance_45.alpha = 0.398;

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#8DD2CA").s().p("AAEAKIgIgSIAAgBIAJATg");
	this.shape_932.setTransform(148.3,297.9);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#BD3A3A").s().p("AgIgCIgCAAIADgHIAEAGQADACALgBQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgDABgJgBIAAAIIgDACg");
	this.shape_933.setTransform(149.8,295.3);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FFFFFF").s().p("AgBAAIACgBIAAABIgBACg");
	this.shape_934.setTransform(151.2,294.7);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FFFFFF").s().p("AgDAAIAAgCIAHADIgBACg");
	this.shape_935.setTransform(148.5,294.9);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FFFFFF").s().p("AgDADIAAgCIgCAAIAAgFIABgCIAGAKIABgKIAEADIgCADIABABIgDAGg");
	this.shape_936.setTransform(150,293.6);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FDA96F").s().p("AADAPIgCgEQgKgLgBgFIACgNIAFADIgCAJIAJAPQABABAFAAIABACIAAAAIgCAAIABAEIAAABIgBgBIAAABIgBAAIAAAAIAAABIgBAAIgBgBIABABIgCABg");
	this.shape_937.setTransform(149.1,296.7);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FDA96F").s().p("AgEAKIABgBIgBAAIgBAAIABgBIACgBIgCAAIgBABIgBgBIABAAIgBgBIABgBIACgBIACgBIABABIADgBIgBgIIABgCIACgCIABAHQABAHgCACIgFADIAAgBIgCAAIgBABg");
	this.shape_938.setTransform(150.8,295.7);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#9A482E").s().p("AgIARQgEgFAAgIQAAgLADgFQABgFAGgBQAFAAAFADQADADABAKQACAHgCAFQgBAGgFAAQACgEAAgIIgCgHIgDgFIgCgEIgBAEQgCAEgEACIAAARIADAEQgDAAgCgCg");
	this.shape_939.setTransform(149.9,292.4);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FDA96F").s().p("AgEAGQgCgDAAgEQAAgIAGAAQAHAAAAAIQAAAEgCADQgCAEgDAAQgCAAgCgEg");
	this.shape_940.setTransform(149.9,291.9);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#6DB19F").s().p("AgRgCIAZgOIAKATIgZAOg");
	this.shape_941.setTransform(149.6,297.2);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#DB635E").s().p("AgFATIgCgTIgBACIgHgCQACgLACgDIAJgEIAHAKIAAgKIAJAFQACACAAAJIgCACIgBADIAAAQg");
	this.shape_942.setTransform(149.7,295);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#122A43").s().p("AgCAWIgCgXIAEgVIAFAAIgFAWIADAXg");
	this.shape_943.setTransform(149.1,299);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#213D60").s().p("AgKAWIgCgXIAFgVIATAAIABAUIgBAWQgFADgIAAg");
	this.shape_944.setTransform(149.9,299);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FD8A5A").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_945.setTransform(149.9,293.3);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FEBF87").s().p("AACAaQgDgDgBgGIABgHQgDgOAAgFIABgGIgBgJIAIgCIgBAsIACAIIgCABIgBgBg");
	this.shape_946.setTransform(149.4,303.4);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FEBF87").s().p("AACAaQgEgDAAgGIABgHIgDgTIABgGIgBgJIAJgCIgBAsIABAIIgBABIgCgBg");
	this.shape_947.setTransform(150.5,303.4);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#DB635E").s().p("AgBAGIgCgGIAAADIgBAAIgBgIIABgDIABAAIAHALIACAGQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgDgBgBgDg");
	this.shape_948.setTransform(149.5,305.7);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#DB635E").s().p("AgBAGIgCgGIgBADIAAAAIgBgJIABgCIABAAIAHALIACAGQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQgDgBgBgDg");
	this.shape_949.setTransform(150.7,305.7);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#6C2615").s().p("AgIAKIAAgTIASAAIAAATg");
	this.shape_950.setTransform(149.9,292.5);

	this.instance_46 = new lib.CompoundPath_39();
	this.instance_46.parent = this;
	this.instance_46.setTransform(153.8,304.4,1,1,0,0,0,4.7,2);
	this.instance_46.alpha = 0.398;

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#5D4736").s().p("AAAgBIAAAAIABADIgBAAg");
	this.shape_951.setTransform(211.8,217);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#5D4736").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_952.setTransform(210.2,216.9);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FEBF87").s().p("AgDAAIADgDIAFACIgBABIgEAAIgCAEg");
	this.shape_953.setTransform(209.4,217.5);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FEBF87").s().p("AgBAAIgDABIgBgBIADgCIACgCIAGAEIgDAFg");
	this.shape_954.setTransform(212.6,217.4);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#DB635E").s().p("AgEASIAAgaIADgIIgCgCIACgDIADABIgCADIADAIIACAaIgFAFg");
	this.shape_955.setTransform(210.9,214.4);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FFFFFF").s().p("AgHAAIACgDIAFACIAFgDIADADIgCAEIgGgDIgDAFg");
	this.shape_956.setTransform(210.8,212.1);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGAEIgEAFg");
	this.shape_957.setTransform(213.1,216.9);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIAAAFIgEADg");
	this.shape_958.setTransform(209,217.1);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#CCDDEE").s().p("AAAATIACgFIAAgNIgDgJIgCANIABAKIgBABIgBgMIAAgMQACgLACAAQABAAAAALIAEAIQABADgCALIgDAGg");
	this.shape_959.setTransform(212.7,215.1);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#CCDDEE").s().p("AgDAKIADgRQgCgLABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABABIACAFQABADAAAGIgBAIIAAAHIgCAAIAAgFIABgLIgBgFIgBALIAAAPIgCABg");
	this.shape_960.setTransform(209.5,215.3);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#E3EFFC").s().p("AgYAYIgCgNIABgIQgBgQADgGIAMgGIAPgCIAGACQAGABACACQADAEADAIIADAOQAAAGgDAJIgDAIIgFgDIADgGQACgLgBgEIgDgHQgBgKgCAAQgBAAgCAKIgBANIABAMQgGACgGgBQgHAAgFgCIAAgHIABgJQAAgGgBgCIgCgFQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAAAQgBABACALIgDARIABAJIgDACg");
	this.shape_961.setTransform(211.2,214.7);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIABACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAABgBg");
	this.shape_962.setTransform(211.5,210.6);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_963.setTransform(209.8,210.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#403024").s().p("AAHABIgHAAIgGABIgCAGIgBgIQAAgHAIAAQAKAAABAHQAAAEgCAEQAAgGgBgBg");
	this.shape_964.setTransform(210.7,209.7);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FDA96F").s().p("AgBAJQgEgBgCgEQgBgCABgGIAAgFIAQAAIgBANQgCAEgDABIgDABIgBgBg");
	this.shape_965.setTransform(210.7,210.7);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAgBQAAAAgBgBQAAAAABAAQAAAAABABQAEADAFgEQAAAEgEABIgBAAQgCAAgCgDg");
	this.shape_966.setTransform(210.7,211.6);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FEBF87").s().p("AgFACIAAgEIAKgBIAAADIgFADg");
	this.shape_967.setTransform(210.8,211.6);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#443123").s().p("AgJACIgFgCIABgCIAbAAIABACQgIADgGAAIgKgBg");
	this.shape_968.setTransform(211,216.9);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#5D4736").s().p("AgUAoIgBgDIACgCIgCgDQgCgEACgPIABgIIAAggIAFgNIAbAAIAFAOIAFA3IgBAEIACACQAAAAAAABQAAAAAAAAQAAABgBABQAAAAgBABIgJgBIgCgCIACgDIgCgDIgBgJIgBgKIgGghIgHAAIgDAZIAAAOQABAJgCAEIgCACQAAABACAEIgDAEg");
	this.shape_969.setTransform(211.2,220.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#443123").s().p("AAAAFQgDgBgBgEIAAgFIAHAAIACAGIAAADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCgBg");
	this.shape_970.setTransform(213,225.1);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#443123").s().p("AgFAEIAAgCIADgHIAHAAIAAAFQAAADgCABIgEACQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAg");
	this.shape_971.setTransform(209.5,225.1);

	this.instance_47 = new lib.CompoundPath_38();
	this.instance_47.parent = this;
	this.instance_47.setTransform(214.5,223.5,1,1,0,0,0,5.1,2.1);
	this.instance_47.alpha = 0.398;

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#5D4736").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_972.setTransform(173.3,189.4);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#5D4736").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_973.setTransform(171.7,189.3);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FEBF87").s().p("AgEAAIAFgDIAEADIgBAAIgDAAIgDAEg");
	this.shape_974.setTransform(170.8,189.9);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FEBF87").s().p("AgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgBgBIADgCIACgCIAGAEIgDAEg");
	this.shape_975.setTransform(174.1,189.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#DB635E").s().p("AgEATIAAgbIACgIIgBgCIACgDIADACIgCACIADAJIACAaIgFAEg");
	this.shape_976.setTransform(172.4,186.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FFFFFF").s().p("AgHAAIACgDIAFACIAFgDIADACIgCAFIgGgDIgEAFg");
	this.shape_977.setTransform(172.3,184.5);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FFFFFF").s().p("AgEABIACgFIAHADIgEAHg");
	this.shape_978.setTransform(174.6,189.3);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAFIgGAEg");
	this.shape_979.setTransform(170.4,189.5);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#CCDDEE").s().p("AAAATIABgGIABgMIgDgKIgCAOIABAKIgCABIAAgZQACgKACAAQABAAAAAKIAEAJIgBAOIgDAGg");
	this.shape_980.setTransform(174.2,187.5);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#CCDDEE").s().p("AgDAKIADgQQgDgLABgBQACgBADAIQABADAAAHIgBAIIAAAHIgCgBIAAgFIABgLIgBgEIgBAKIgBAQIgBAAg");
	this.shape_981.setTransform(171,187.7);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#E3EFFC").s().p("AgYAZIgCgPIABgIIABgKQAAgIACgCQABgCAFgDIAFgCIAPgCIAGABQAGACACACQADADADAKIADAMQAAAFgCAKIgEAIIgEgCIADgGIABgPIgEgIQAAgJgCgBQgCABgCAJIAAAZQgGADgGgBQgGAAgFgCIAAgHIAAgJQABgFgBgEQgFgIgBABQgBABACALIgDARIACAJIgEACg");
	this.shape_982.setTransform(172.6,187.1);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FDA96F").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_983.setTransform(173,183);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIgBADQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_984.setTransform(171.3,183);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#403024").s().p("AAHABIgHAAQgDgBgDACIgBADIgBADIgBgIQAAgHAIAAQALAAAAAGQAAAFgCAEQABgGgCgBg");
	this.shape_985.setTransform(172.2,182.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FDA96F").s().p("AgCAKQgDgDgCgDIAAgNIAPAAQABAKgBADQgBADgEADIgDAAIgCAAg");
	this.shape_986.setTransform(172.2,183);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_987.setTransform(172.2,184);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FEBF87").s().p("AgFABIAAgDIAKAAIABACIgGADg");
	this.shape_988.setTransform(172.2,184);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#443123").s().p("AgPAAIACgCIAbAAIACACQgIADgHAAg");
	this.shape_989.setTransform(172.5,189.3);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#5D4736").s().p("AgUAoIgBgCIACgDIgCgDQgCgDACgPIAAgpIAGgNIAbAAIAFAOIAFA3IgCAEIADACQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAIgJAAIgCgDIACgDIgCgDIgCgSIgGghIgHAAIgDAYIAAAOQAAAKgBADIgCACIACAFIgDAEg");
	this.shape_990.setTransform(172.7,193.1);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#443123").s().p("AAAAFQgDgBgBgEIAAgFIAGAAIADAGIAAADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCgBg");
	this.shape_991.setTransform(174.5,197.5);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#443123").s().p("AgFAEIAAgCIADgGIAHAAIAAAEQgBADgCABIgDABIgEgBg");
	this.shape_992.setTransform(171,197.5);

	this.instance_48 = new lib.CompoundPath_37();
	this.instance_48.parent = this;
	this.instance_48.setTransform(176,195.8,1,1,0,0,0,5.1,2.1);
	this.instance_48.alpha = 0.398;

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#5D4736").s().p("AAAACIAAgCIAAgBIABADg");
	this.shape_993.setTransform(301.7,52.5);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#5D4736").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_994.setTransform(300.1,52.5);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FEBF87").s().p("AgDAAIAEgDIAEADIgBAAIgDAAIgCAEg");
	this.shape_995.setTransform(299.3,53);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FEBF87").s().p("AgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAgBIgBAAIAFgEIAGAEIgDAEg");
	this.shape_996.setTransform(302.5,53);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#DB635E").s().p("AgEATIAAgbIADgIIgCgCIADgDIACACIgCACIADAJIACAaIgFAEg");
	this.shape_997.setTransform(300.8,49.9);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FFFFFF").s().p("AgHAAIACgDIAFACIAFgDIADACIgCAFIgGgDIgEAFg");
	this.shape_998.setTransform(300.7,47.7);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FFFFFF").s().p("AgEABIADgGIAGAFIgDAFg");
	this.shape_999.setTransform(303,52.4);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAFIgGAEg");
	this.shape_1000.setTransform(298.9,52.6);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#CCDDEE").s().p("AAAATIACgGIAAgMIgDgKIgBAOIABAKIgCABIgBgMIABgNQACgKABAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAABABIAAAGIAEAJIgBAOIgDAGg");
	this.shape_1001.setTransform(302.6,50.6);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#CCDDEE").s().p("AgDAKIADgQQgCgLABgBQACgCACAJQABADAAAHIgBAIIAAAHIgCgBIABgQIgBgEIgBAKIAAAQIgCAAg");
	this.shape_1002.setTransform(299.4,50.8);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#E3EFFC").s().p("AgYAYIgCgNIABgIIABgLQAAgIABgDQACgCAFgCIAFgCIAPgCIAGABQAGACACACQADAEADAIIADAOQABAGgEAIIgDAIIgEgCIADgGIABgPIgEgHIgBgHQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgCAKIgBAMIABAMQgGACgGAAQgHAAgFgCIAAgHIABgJQAAgFgBgDQgCgKgDACQgBABACALIgDAQIABAJIgDADg");
	this.shape_1003.setTransform(301.1,50.2);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FDA96F").s().p("AgBAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_1004.setTransform(301.5,46.1);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FDA96F").s().p("AgBAAIABgCQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_1005.setTransform(299.7,46.1);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#403024").s().p("AAHABIgHAAQgDgBgDACIgCAGIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQABgGgCgBg");
	this.shape_1006.setTransform(300.6,45.2);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FDA96F").s().p("AgCAKQgEgDgBgDIAAgNIAPAAQABAKgCADQgBAEgEACIgCAAIgCAAg");
	this.shape_1007.setTransform(300.6,46.2);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_1008.setTransform(300.6,47.1);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FEBF87").s().p("AgFACIAAgEIAKgBIAAADIgFAEg");
	this.shape_1009.setTransform(300.7,47.2);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#443123").s().p("AgPAAIABgCIAdAAIABACQgJADgHAAg");
	this.shape_1010.setTransform(301,52.4);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#5D4736").s().p("AgUAoIgBgCIACgDIgCgDQgBgCAAgHIABgJIABgJIAAggIAFgNIAcAAIAEAOIAFA3IgBAEIACACIgCAEIgJAAIgCgDIACgDIgCgDIgBgJIgBgJIgGghIgHAAIgDAYIAAAOQABAKgCADIgCACQAAABACAEIgCAEg");
	this.shape_1011.setTransform(301.1,56.2);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#443123").s().p("AAAAFQgCAAgDgFIAAgFIAHAAIACAGQABAAAAABQAAAAABABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgCgBg");
	this.shape_1012.setTransform(302.9,60.6);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#443123").s().p("AgEAEQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIACgGIAIAAIAAAEIgDAEIgEABIgDgBg");
	this.shape_1013.setTransform(299.4,60.6);

	this.instance_49 = new lib.CompoundPath_36();
	this.instance_49.parent = this;
	this.instance_49.setTransform(304.5,59,1,1,0,0,0,5.1,2.1);
	this.instance_49.alpha = 0.398;

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#EEBB59").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABAAIgCAAIgGACg");
	this.shape_1014.setTransform(299,49.4);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#EEBB59").s().p("AgCAAIgCAAIACgBQACgBAEAEIgGgCg");
	this.shape_1015.setTransform(296,49.4);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AAAgCIAAABIABADIgBABg");
	this.shape_1016.setTransform(298.6,39);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#DCA042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_1017.setTransform(298.6,41.3);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#DCA042").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_1018.setTransform(296.6,41.3);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBABAAg");
	this.shape_1019.setTransform(298.6,35.5);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FDA96F").s().p("AAAAAQAAAAgBAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1020.setTransform(297,35.5);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FD8A5A").s().p("AgBAAQgBAAAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAQACACAEgCQAAABgBAAQAAAAAAABQAAAAgBABQAAAAgBAAIgBAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1021.setTransform(297.8,36.6);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#6DB19F").s().p("AABACIgEADIgDgGIADgDIAEAEIAFgEIABAEIgBAFg");
	this.shape_1022.setTransform(297.7,37);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FDA96F").s().p("AgCAAIACgCIADABIgEAEg");
	this.shape_1023.setTransform(298.9,38.9);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FDA96F").s().p("AAAABIgCABIgBgDIABAAIAEAAIACADg");
	this.shape_1024.setTransform(297,38.3);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#443123").s().p("AABAEIgIgDIAAgCIAIgCIAGAFIAAABIgBABIgCAAIgDAAg");
	this.shape_1025.setTransform(299.2,50.1);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#443123").s().p("AgFAEIgBgBIAAgBIAFgDIABgCQACgBAGADIAAACIgIADIgDABIgCgBg");
	this.shape_1026.setTransform(295.8,50.1);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#403024").s().p("AAEABIgCAAIgCABQgDgCgCABIgCAGIgBgHQAAgBADgCQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQAJgBABAFQABAEgDAEQgBgFgCgBg");
	this.shape_1027.setTransform(297.8,34.7);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FDA96F").s().p("AgCAJQgEgDgBgDIAAgMIAOAAQABAJgBADQgBADgEADIgCABIgCgBg");
	this.shape_1028.setTransform(297.8,35.6);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_1029.setTransform(297.8,36.6);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#6DB19F").s().p("AgFANIgHgCIANgHIADgEIABgJIACgEIAEAIQADALgDAEIgFAEIgEAAIgHgBg");
	this.shape_1030.setTransform(298.6,38.8);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#7BC0B0").s().p("AgMAKQgDgDAAgGQgBgIADgDIACgDIAIANIATADIgCAEIgOAHQgJgCgDgCg");
	this.shape_1031.setTransform(297.3,38.5);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#DB635E").s().p("AgEAVIABgkIACgEIgDgDIAEgCIADADIgDACIACAEIADAlIgEADg");
	this.shape_1032.setTransform(298,39.7);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#3E5665").s().p("AgNAAIAAgCIAOABIANgBIAAACIgOADg");
	this.shape_1033.setTransform(297.7,41.3);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#8DD2CA").s().p("AgOAVQgEgCAAgEIACgJQgDgGgBgCQgBgJADgDIAFgEIAHgCIACgDIAEAEIAFgEIABAFIAJAEIAFAIQACALgCAEIgGAEIgCAJIgOACg");
	this.shape_1034.setTransform(297.8,38.9);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#EEBB59").s().p("AAIAYQgCgEgBgMQgCgKgCgDIgBAAQgCAEgFAUQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgBgRQAAgLABgGIABgDIAFgCIACgDIgDgBIASAAIgEABIACADQABABAEABIABAFQADAUgEAPQAAABgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAgAAAgKIADAAIABgMIgEAAg");
	this.shape_1035.setTransform(297.6,43.8);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#DCA042").s().p("AgMAsIgFgCIgCgDIACgCIABglQgBgZACgKIAEgJIAaAAIADAKIAAAMIABA7IABAAIgBAEQgBABgEABQgDABgCgBQgEgDAAgQQABgYgBgIQgCgJgBAAIgCABQgBAJgBAMIgCASIAAALQgBAIgDACIgBABIgDgBg");
	this.shape_1036.setTransform(297.5,45.6);

	this.instance_50 = new lib.Path_9();
	this.instance_50.parent = this;
	this.instance_50.setTransform(301.1,48.2,1,1,0,0,0,5.4,2);
	this.instance_50.alpha = 0.398;

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgGIgCgWIADAAIACASIACAGIAAAEIgBADIABABIAAABgAAAAMIACACIAAgDIgBgCg");
	this.shape_1037.setTransform(64.8,213);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#83582C").s().p("AgNASQgDgCACgEIACgGIgBgGIADgJQADgJAGgBIAHABQAEADADAIQACADABAFQABAEgCAGIgCAHQgCACgDgCIgCgEQAAgHABgDQACgDgBgEIAAgFIgMAAIAAAFQgBAEADAEIAAAEIABAEQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBACgEAAQgEAAgCgCg");
	this.shape_1038.setTransform(66.2,206.4);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FEBF87").s().p("AgFAFQgCgEAAgEIACgFIALAAIACAGQAAAEgCADQgBACgEABQgCABgEgEg");
	this.shape_1039.setTransform(66.4,206.4);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FDA96F").s().p("AgEAEQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQABgFAFAAQAHAAAAAFQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAg");
	this.shape_1040.setTransform(66.4,206.8);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FEBF87").s().p("AgGAFIgBgFIADAAIAAgJIAIAAIABAJIADAAQAAAKgIAAQgEAAgCgFg");
	this.shape_1041.setTransform(66.4,207.5);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FEBF87").s().p("AgCASIACgCIAAgEIAAAAIgBAEIgCAAIABgHIACgGIAAgOIAAgHIACAAIACAfIgCADIgDADg");
	this.shape_1042.setTransform(68.4,212.9);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAQAAQgBAQgIAAIAAABQgIAAgCgQg");
	this.shape_1043.setTransform(66.4,208.3);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#DB635E").s().p("AgPAhIgBgKIACgRIABgmIACAAQABAQAKAAQAHgBABgQIABAAIABARIAHApQAAAFgBAEg");
	this.shape_1044.setTransform(66.6,210.8);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#213D60").s().p("AAAAhIgBgIIABgUIgDAAIAAgQQAAgOACgDQABgCAEgCIgDA3IABAKg");
	this.shape_1045.setTransform(64.8,210.9);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#213D60").s().p("AgFgdQAGADAAACQACADABANIABAOIgDAAIAAAIIAAAQg");
	this.shape_1046.setTransform(68.1,210.4);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#DCA042").s().p("AAFAeIAAgQIABgJIgCgGIAAgaIgFAAIgBASIgBAOIACAZIgDACIgEAAQgEgSgBgHIAAgLIgDgYIABgDIAfAAIABAFIgCAUIABAQIgEAVIgDABg");
	this.shape_1047.setTransform(66.6,216.8);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#DB635E").s().p("AgCAIQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAgBIABgIIACgFIAFABIgBAIIABAEIgBADIgDABIgCgBg");
	this.shape_1048.setTransform(67.4,220.6);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#DB635E").s().p("AgGAIIAAgCIAAgBQAFgEABgDIAAgFIAGAAIABAKQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAIgDAEQgEAAgCgBg");
	this.shape_1049.setTransform(65.7,220.6);

	this.instance_51 = new lib.CompoundPath_35();
	this.instance_51.parent = this;
	this.instance_51.setTransform(70.7,219.1,1,1,0,0,0,5.1,2.4);
	this.instance_51.alpha = 0.398;

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgGIgCgLIAAgLIADAAIACASIACAGIAAAEIgBADIABABIAAABgAABAMIABACIAAgDIgBgBg");
	this.shape_1050.setTransform(152.6,227.8);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#83582C").s().p("AgOASQgCgDACgDQACgEAAgDIgBgFIADgKQACgIAHgBIAHABQAEADACAIIAEAIIgBAKQAAAGgCABQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQgBgFACgFQACgEgBgIIgMAAIgBAEQAAAGACADIABAEIAAAEQAAABAAABQAAABAAAAQAAABAAAAQAAABAAAAQgCACgEAAQgEAAgCgCg");
	this.shape_1051.setTransform(154.1,221.3);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FEBF87").s().p("AgFAFQgCgEABgEIABgEIAMAAIABAFQAAAFgCACQgCADgDABQgDAAgDgEg");
	this.shape_1052.setTransform(154.2,221.2);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FDA96F").s().p("AgGAAQAAgFAGAAQAGAAABAFQgBAGgGAAQgGAAAAgGg");
	this.shape_1053.setTransform(154.3,221.6);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FEBF87").s().p("AgGAEIgBgFIADAAIABgIIAIAAIAAAIIADAAQgBALgHAAQgEAAgCgGg");
	this.shape_1054.setTransform(154.3,222.4);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FEBF87").s().p("AgCASIACgDIAAgDIAAAAIgBAEIgCgBIABgHIACgFIAAgPIAAgGIADAAIABAeIgBAEIgEADg");
	this.shape_1055.setTransform(156.3,227.8);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAQAAQgBAQgHABIgBAAQgIAAgCgQg");
	this.shape_1056.setTransform(154.2,223.1);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#DB635E").s().p("AgPAiIgBgLIACgQIABgmIACgBQABARAKgBQAHgBAAgQIACABIABAQIAHAqIgCAIg");
	this.shape_1057.setTransform(154.5,225.6);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#213D60").s().p("AAAAgIgBgIIABgTIgDAAIAAgQQAAgNACgEQABgCAEgCIgDA2IACALg");
	this.shape_1058.setTransform(152.6,225.7);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#213D60").s().p("AgCAGIgDgjQAFADABACQACACABANIACAPIgEAAIABAIIgBAQg");
	this.shape_1059.setTransform(156,225.3);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#DCA042").s().p("AAGAeIgBgQIABgJIgCgGIgBgZIgDgBIgCASIgBANIACAaIgCACIgFAAQgEgSgBgGIAAgMIgDgXIABgEIAgAAIAAAFIgCAUIABAQQAAAHgEAOIgCABg");
	this.shape_1060.setTransform(154.4,231.6);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#DB635E").s().p("AgCAIIgCgDIADgNIAFABIgBAFIACAIIgCACQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_1061.setTransform(155.3,235.4);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#DB635E").s().p("AgFAIIgBgDQAGgFAAgDIAAgEIAGAAIABAKIgBACIgDAAIgDADIgCABIgDgBg");
	this.shape_1062.setTransform(153.5,235.5);

	this.instance_52 = new lib.CompoundPath_34();
	this.instance_52.parent = this;
	this.instance_52.setTransform(158.5,233.9,1,1,0,0,0,5.1,2.4);
	this.instance_52.alpha = 0.398;

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgHIgCgKIAAgLIADAAIACASIACAGIAAAEIgBADIABAAIAAACg");
	this.shape_1063.setTransform(138.4,167.5);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#83582C").s().p("AgOASQgCgDACgCIACgIIgBgFIADgKQACgIAHgBIAHABQACACACAEIACAFIAEAIIgBALQAAAEgCADQgDABgCgBQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAgBQgBgFACgFQACgEgBgIIgMAAIgBAFQAAAFACADIAAAEQACAHgBACQgCACgEAAQgEAAgCgCg");
	this.shape_1064.setTransform(139.9,160.9);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FEBF87").s().p("AgFAFQgCgEABgEIABgEIAMAAIABAFQAAAFgCACQgCADgDABQgDgBgDgDg");
	this.shape_1065.setTransform(140,160.9);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FDA96F").s().p("AgGAAQABgFAFAAQAHAAgBAFQABAGgHAAQgFAAgBgGg");
	this.shape_1066.setTransform(140,161.3);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FEBF87").s().p("AgGAEIAAgFIACAAIAAgIIAIAAIABAIIADAAQAAALgIAAQgDAAgDgGg");
	this.shape_1067.setTransform(140,162.1);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FEBF87").s().p("AgCASIACgDIAAgDIAAAAIgBAEIgCgBIABgHIACgFIAAgPIAAgGIADAAIABAeIgBAEIgEADg");
	this.shape_1068.setTransform(142,167.5);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAQAAQgBAQgHAAIgBABQgIAAgCgQg");
	this.shape_1069.setTransform(140,162.8);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#DB635E").s().p("AAAAiIgPAAIgBgLIACgQIABgmIACgBQABARAKgBQAHgBABgQIACABIAHA5QAAAFgBAEIgLAAIgFAAg");
	this.shape_1070.setTransform(140.2,165.3);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#213D60").s().p("AAAAgIgBgIIABgTIgDAAIAAgQIAAgHQABgIABgCQABgCAEgCIgBAmIgCAQIACALg");
	this.shape_1071.setTransform(138.4,165.4);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#213D60").s().p("AgFgcQAFACABACQACADABANIACAPIgEAAIABAGIgBAQg");
	this.shape_1072.setTransform(141.7,164.9);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#DCA042").s().p("AAJAgIgDgCIgBgQIABgJIgBgGIgBgZIgFgBIgBASIgBAOIACAaIgCABIgFAAQgEgRgBgHIABgMIgEgXIABgEIAfAAIABAFIgCAUIABARQAAAGgDAPIgDAAIgBAAg");
	this.shape_1073.setTransform(140.2,171.3);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#DB635E").s().p("AgCAIIgCgDIADgNIAFABIgBAFIABADIAAAFIgBACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDgBg");
	this.shape_1074.setTransform(141,175.1);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#DB635E").s().p("AgFAIIgBgBIAAgBQAGgGAAgCIAAgFIAGgBIABAMIgCABIgCAAIgDADIgCABIgDgBg");
	this.shape_1075.setTransform(139.3,175.1);

	this.instance_53 = new lib.CompoundPath_33();
	this.instance_53.parent = this;
	this.instance_53.setTransform(144.2,173.6,1,1,0,0,0,5,2.4);
	this.instance_53.alpha = 0.398;

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgGIgCgLIgBgLIAEAAIACASIACAGIAAAEIgBADIABABIAAABgAABAMIABACIAAgDIgBgBg");
	this.shape_1076.setTransform(284.9,39);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#83582C").s().p("AgNASQgDgCACgDQACgFAAgDIgBgFIADgKQADgIAGgBIACABIAFAAQAEADADAIIADAIIgBALQAAAFgCACQgCACgDgCQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBQgBgFACgFQACgEgBgIIgMAAIgBAFQAAAFACADIABAEIABAFIgBAEQgBACgFAAQgEAAgBgCg");
	this.shape_1077.setTransform(286.4,32.4);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FEBF87").s().p("AgEAFQgDgEABgEIABgEIAMAAIABAFQAAAFgCACQgCADgDAAQgDAAgCgDg");
	this.shape_1078.setTransform(286.5,32.3);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FDA96F").s().p("AgGAAQAAgFAGAAQAGAAABAFQgBAGgGAAQgGAAAAgGg");
	this.shape_1079.setTransform(286.6,32.8);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FEBF87").s().p("AgGAEIgBgFIACAAIACgIIAIAAIAAAIIADAAQgBALgHAAQgEAAgCgGg");
	this.shape_1080.setTransform(286.6,33.5);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FEBF87").s().p("AgCASIACgDIAAgDIAAAAIgBAEIgCgBIABgHIACgFIAAgPIgBgGIAEAAIABAeIgBAEIgEADg");
	this.shape_1081.setTransform(288.6,38.9);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#F2F2FA").s().p("AgGADQgDgEAAgGIADgBIAQAAQgBAQgHABIgBAAQgEAAgDgGg");
	this.shape_1082.setTransform(286.5,34.2);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#DB635E").s().p("AgPAiIgBgLIACgQIABgmIACgBQAAAFADAFQADAHAFgBQAHgBAAgQIADABIAHA6IgCAIg");
	this.shape_1083.setTransform(286.7,36.8);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#213D60").s().p("AAAAhIgBgIIABgUIgEAAIAAgQIABgHIACgKQABgCAEgCIgBAmIgCAQIABALg");
	this.shape_1084.setTransform(284.9,36.9);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#213D60").s().p("AgFgcQAFABABACQACADABAOIACAPIgFAAIABAHIAAAPg");
	this.shape_1085.setTransform(288.3,36.4);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#DCA042").s().p("AAGAeIgBgQIABgJIgCgHIgBgYIgEgBIgCAfIABASIABAIIgCACIgFAAQgFgSAAgHIAAgLQgDgQAAgIIAAgDIAgAAIABAFIgCAUQAAAFABAMIgEAUIgDABg");
	this.shape_1086.setTransform(286.7,42.8);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#DB635E").s().p("AgCAIQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAIACgNIAFABIgBAFIACAIIgBACIgEABIgCgBg");
	this.shape_1087.setTransform(287.5,46.6);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#DB635E").s().p("AgFAHIgBgCQAGgFAAgDIAAgEIAGgBIABALIgBACIgDAAIgDADIgCABIgDgCg");
	this.shape_1088.setTransform(285.8,46.6);

	this.instance_54 = new lib.CompoundPath_32();
	this.instance_54.parent = this;
	this.instance_54.setTransform(290.7,45.1,1,1,0,0,0,5,2.4);
	this.instance_54.alpha = 0.398;

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#122A43").s().p("AAAgHIABAAIAAAJIgBAHg");
	this.shape_1089.setTransform(290.1,82);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#122A43").s().p("AABgBQgBgDgBgCIgBgCIACgCIAAACQACADABAEQABAIgDADIgBABQACgGgBgGg");
	this.shape_1090.setTransform(287.1,82.2);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#3E2D1C").s().p("AgFAHIgCABIgBgCQgBgEACgCQACgCAFgDQAEgEADABQAEAAgCAFQgGAMgEABIgEgDg");
	this.shape_1091.setTransform(286.9,85.9);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#122A43").s().p("AAAADIgLgCIACgEIAJACIAMABIAAAEg");
	this.shape_1092.setTransform(288.6,85.7);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#122A43").s().p("AgEABIgCgEIACgBIABAEQACAEADgBQAEAAgBgHIABABQABAIgFAAIAAAAQgDAAgDgEg");
	this.shape_1093.setTransform(288.5,81.2);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#8DD2CA").s().p("AAAAAIgFABIAFgCIAGADg");
	this.shape_1094.setTransform(287.1,92.6);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQACACADgDQAAAEgCAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1095.setTransform(288.6,81);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#DB635E").s().p("AAAARIgFgBIgFgDIgBgFIABgHIAEgNIAEgFIACACQABADABAFQAAAFgCAEIAAAGIAMAEIgBAFIgIABIgDgBg");
	this.shape_1096.setTransform(287,83);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#B86331").s().p("AAHAJIAAgFQAAgCgDgCIgDgBIABADIgHgCIABAEIgCgBIAAAHQgEgBgBgGQgBgEAEgEIAFgEQACgCACABQAKACABAIIgCAFIgCAGg");
	this.shape_1097.setTransform(288.6,79.3);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FDA96F").s().p("AAAAEIgDgBIgCAAIABgFIACAAIACgCIABAAIAAABIAEAAIABACIgBABIAAABIgBABIAAABIgBABIgBAAIgCABIAAgBg");
	this.shape_1098.setTransform(288.8,84.5);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#6C5549").s().p("AgHAGIAEgNIAFgBIAGAGIgMALg");
	this.shape_1099.setTransform(286.8,85.3);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgDQABgDADgVIAAgIIAFADIAAAGQgDAXgDAEQgDAEgMAHg");
	this.shape_1100.setTransform(288.7,83.2);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#213D60").s().p("AAAAaIgKgDIgHgDIACgTQAEgJgBgEIgEgJIACgCIAJgCIACAEQADAFADAAQAEgBAAgIIAKADIAAAKIgCAHIAAALQAAAJgBADIgBADIgBAGg");
	this.shape_1101.setTransform(288.5,83.5);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#DB635E").s().p("AgEAVIACghIADgLIADAEQABACAAAJIAAAMIgEASIgBACg");
	this.shape_1102.setTransform(290.1,83.6);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FDA96F").s().p("AgFAHQgCgFAAgDQAAgJAHAAQAIAAAAAJQAAADgCAFQgDAEgDAAQgCAAgDgEg");
	this.shape_1103.setTransform(288.6,79.9);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FDA96F").s().p("AgHAGIABgJIADgBIAAgEIAIAAIAAAFIACABIAAADIgBAIg");
	this.shape_1104.setTransform(288.6,81.2);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FDA96F").s().p("AgCgDIAFABIgBADIgCAEg");
	this.shape_1105.setTransform(289.8,86.1);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#8DD2CA").s().p("AAKAVIgGgYIADgDIgFABIgDgBIgEgCIADAGIgFARIgDADIgDAAIgCgMIAEgYIAEgDIAIACIgBAJIACABIACgJIAFABIACAFIACABIADAgIgDACg");
	this.shape_1106.setTransform(288.3,87.7);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#6DB19F").s().p("AALAmIAAgCIgEgIIgEgTIgCgEIgBgGIgCgRIgCAAIgFASIABAKIgBADIAAAWIgCACIgEAAIgFABIgDgEIACg9IAGgMIAPAHIAKABIAEAjIABAEIAEAPIACAEIABAHIABAAIABACQgEAEgCgBg");
	this.shape_1107.setTransform(288.8,89.3);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#576977").s().p("AgCAEQgIAAgBgBIAAgCIABgDIALgCIAFAEIAFABIABACQgEACgGAAg");
	this.shape_1108.setTransform(291,93.4);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#576977").s().p("AgEAFIABgEIAAgDIADgDIAFACIgBAFIAAADQAAACgEgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_1109.setTransform(287.1,93.4);

	this.instance_55 = new lib.Path_8();
	this.instance_55.parent = this;
	this.instance_55.setTransform(291.5,91.9,1,1,0,0,0,4.8,1.9);
	this.instance_55.alpha = 0.398;

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FEBF87").s().p("AgDAIIgCgDQgCgDABgFQAAgDADgCIAGgBIACAEIACACQABADgBAEQgCAFgCABIgEAAIgCgCg");
	this.shape_1110.setTransform(289.9,14.6);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FD8A5A").s().p("AgDAAQAAgEADABQAEgBgBAEQABAEgEABQgDgBAAgEg");
	this.shape_1111.setTransform(290,15.5);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#DB635E").s().p("AgKgCIAUgBIABAGIgVACg");
	this.shape_1112.setTransform(290.2,19.1);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FEBF87").s().p("AAAAEIAAgEIABgBIgBAAIgBACIgBgBIAAgBIACgDIADABIAAAEIgBAAIgBADg");
	this.shape_1113.setTransform(291.5,20.6);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#2E211A").s().p("AgNAfIgCgOQgBgOACgDIAEgGIAAgHIgDgNIABgEIALABQAHAAAEgCIADAFIgDANIgBAFIAFAEQAEAHgEAbQgCACgLAAg");
	this.shape_1114.setTransform(290.2,20.1);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FEBF87").s().p("AgZAjIgCgDIgBgEIAFgSIADgJIACgLQAAgIACgDQABgBAFgBQAEgDAAgCIAAgFIAHgCIABAFIACAFIAHAAIAFAFQANARAAADQAAADgJAPIgFABIgBADIgDgBIABgEIACgBIgDAAIgBACIgBAAIABgCIACgDIAFABQAEgCACgMIgLgNIgCADIgWACIgCAPQgBAFgJAQIAAAEIACACIAAACg");
	this.shape_1115.setTransform(290.2,18.8);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FEBF87").s().p("AAGAkIgCgKIAAgCIAAgFIgHgQIgBgHIgFgJIgCgWIALACIAAATQABADAEAJIADAUIACAEIACAHIAAAHIgEgBIgCABIAAAAg");
	this.shape_1116.setTransform(291.5,24.7);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FEBF87").s().p("AABAjIAAgOIgEgXIAAgLIgDgVIAKgBIABASIAAAGIABALIgBAUIACADIAAAMIgDABg");
	this.shape_1117.setTransform(289.4,24.8);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#9A482E").s().p("AgNAKIABgEIgBgGQgBgGABgCIAFgEIADgCIAFAAIAGAAIADADIAEAKIABADIgBAEQgBAGgCABQgCABgIABIgGAAIgHgFg");
	this.shape_1118.setTransform(290,14.5);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#231F20").s().p("AgBAFQgDgDABgDQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQADABAAAFQgCAEgBAAIgBABIgBgBg");
	this.shape_1119.setTransform(288.1,21.9);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#231F20").s().p("AgBAJQgCgCAAgEIAAgGIAEgGIADAHIAAAEQAAAFgBACIgCABIgCgBg");
	this.shape_1120.setTransform(292.4,28.1);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#231F20").s().p("AgCAJQgBgBAAgFIAAgFIAFgHIABACIAAAEIABAGQAAAFgCABIgCABIgCgBg");
	this.shape_1121.setTransform(289.9,28);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FEBF87").s().p("AgDAAIAAgBIAEABIADAAIAAACIgDAAg");
	this.shape_1122.setTransform(288.1,22.4);

	this.instance_56 = new lib.CompoundPath_31();
	this.instance_56.parent = this;
	this.instance_56.setTransform(293.9,26.8,1,1,0,0,0,4.9,2);
	this.instance_56.alpha = 0.398;

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FDA96F").s().p("AgBABQgBgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAABQABAAAAABQAAABABAAQAAAAAAABQABABAAAAQAAABgBAAQAAAAgBAAIgBABQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape_1123.setTransform(48.1,214.7);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#050001").s().p("AgGAGIgBAAQgCgGAAgBQABgDADgCQAEgDACAAQADgBADAEQACABABAFIgBAHQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQABgFgBgBIgFAAIgDAAIgEADIAAAHIAAAAg");
	this.shape_1124.setTransform(48.9,213.8);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FDA96F").s().p("AgBALIgFgDIgBgHIABgJIAKgCIAEAGIgCANIgCACg");
	this.shape_1125.setTransform(49.1,214.5);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FDA96F").s().p("AAAAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQABgBAAAAQAAAAAAgBQABgBAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIAAAAg");
	this.shape_1126.setTransform(49.7,214.5);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#4E5C6E").s().p("AgPAXQgCgBAAgFIAAgIIADgPIAEgJIgDgEIABgBIAGACIABgEIACAAIgBAEIAEABIABAEIABADIgBADIACAAIABgCIAAgEIgCgEIACAAIABgEIABAAIAAAEIACAAIADACIACAMIAFATIgBADIgCABIgDgDQgDgDgDgIIgDgHIgEADIgEAFIgGAPQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAIgBAAg");
	this.shape_1127.setTransform(49.4,223.3);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgDACIAAgEIgBgDIAAgEIAFAHIAEAIg");
	this.shape_1128.setTransform(49.9,216.3);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FD8A5A").s().p("AgBAFQgCgCAAgCIgBgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQACgBACAEQAEADAAABQAAAIgDABQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBgBg");
	this.shape_1129.setTransform(48.9,215.2);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#2B271C").s().p("AgMASIAOgVIAIgSIADABIgJAUQgDAGgLAQg");
	this.shape_1130.setTransform(48.8,218.7);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#BCAEA4").s().p("AgEgCIAEgGIACAGIADAGIgFAFg");
	this.shape_1131.setTransform(48.4,216.2);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FDA96F").s().p("AAAAAIgDgCIAFgEIABAFIgDAIg");
	this.shape_1132.setTransform(47.8,221.9);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#6B584B").s().p("AAAATIAAgTIgBgRQABgBACAVIAAAQg");
	this.shape_1133.setTransform(50.5,218.9);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#95847D").s().p("AABAXIgBgOIgBgNIgGgPIABgHIAIAEIAGAcIgBAOIgEAAIgBAGg");
	this.shape_1134.setTransform(50.2,218.8);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_1135.setTransform(47.3,221.4);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#6B584B").s().p("AABAUIgDgLIABgYQgDgHACAAQABgBABAIQABAEgCALIABANIAEAJIgBABg");
	this.shape_1136.setTransform(47.6,218.9);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#95847D").s().p("AgLALQgCgLACgOIAFgKIANgFIAFALIABABIAAAFQgBAYgFAKIgKAIQgHgOgBgFg");
	this.shape_1137.setTransform(47.6,218.7);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#4E5C6E").s().p("AgGACIAAgDIAEABIAEAAIAEgCIABADIgDABIgHABg");
	this.shape_1138.setTransform(50.6,228.9);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#4E5C6E").s().p("AgFADIAAgDIADAAIAEgBIADgBIABACIgGADg");
	this.shape_1139.setTransform(47.9,229);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#293544").s().p("AgUALQgBgFACgMIACgMIACgHQADgFAAgDIgBgEIABgEIAQAEIAGgCIACAEIADAEIAEAYIACAIIgBASIgCASIAAACIgLAAQgBgVAAgIIABgFIgEgKIgDgIIgDAGIgFAVIABAOIgCALIgIADQgDgWAAgJg");
	this.shape_1140.setTransform(49.3,225);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#2B271C").s().p("AgMAGIAAgGIAAgBIABgDIAIgBIADADIAFADIAEAAQABAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIABADIgEABg");
	this.shape_1141.setTransform(51.4,229.6);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#2B271C").s().p("AgCAGIgGgCIABgEIAAgDIAHgCIABAEQACABADABIACACIAAADIgHAAIgDAAg");
	this.shape_1142.setTransform(48.5,229.7);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#5D4736").s().p("AgNAUIAJguIAJABIAIAXIAAAZIgLAEg");
	this.shape_1143.setTransform(49.1,219);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#2B271C").s().p("AAEAPIgRgMIAHgLIAKgIIAKAFIgGAdg");
	this.shape_1144.setTransform(46.7,222.4);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FDA96F").s().p("AgDAKIgDgMIAAgHIAJAFIAAAEIAEADIgCAHg");
	this.shape_1145.setTransform(49,215.9);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FDA96F").s().p("AgCADIACgIIADABIgBAKg");
	this.shape_1146.setTransform(50.6,221.2);

	this.instance_57 = new lib.CompoundPath_30();
	this.instance_57.parent = this;
	this.instance_57.setTransform(53,227.9,1,1,0,0,0,5.4,2.2);
	this.instance_57.alpha = 0.398;

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_1147.setTransform(194,228.9);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#050001").s().p("AgGAGIgBAAIgCgIQABgGAJgCQADAAADAEQABABACAEQAAAGgBABQAAACgBgCQABgFgCgBIgEAAIgEAAIgDADIAAAHIgBABg");
	this.shape_1148.setTransform(194.8,228.1);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FDA96F").s().p("AAAALIgFgDIgCgIIABgIIAKgCIAEAFIgCAOIgDACg");
	this.shape_1149.setTransform(194.9,228.8);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAgBQABgBAAAAQAAAAAAgBQAAAAABAAQABAAAAABQAAAAABABQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQABgBAAAAg");
	this.shape_1150.setTransform(195.6,228.8);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#4E5C6E").s().p("AgPAXQgCgCAAgEIAAgIIADgPIAEgKIgDgEIABAAIAGABIABgDIACAAIAAAEIADAAIACAEIAAAEIgBADIADAAIABgCIgBgEIgBgEIACAAIAAgFIACAAIAAAEIACAAIADADIABAMIAFATQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAgBgBAAQgDgDgDgIIgDgHIgDADIgEAFIgGAPQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAIgCAAg");
	this.shape_1151.setTransform(195.3,237.6);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgDACIAAgEIgBgDIAAgEIAFAHIAEAIg");
	this.shape_1152.setTransform(195.8,230.6);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FD8A5A").s().p("AgBAFIgCgEIgBgFQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAAAQACgBACAEQAEADAAABQAAAIgDABQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBgBg");
	this.shape_1153.setTransform(194.8,229.5);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#2B271C").s().p("AgMATIAOgWIAIgRIADAAIgJAUQgDAHgLAOg");
	this.shape_1154.setTransform(194.7,233);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#BCAEA4").s().p("AgEgCIAEgGIACAGIADAFIgFAGg");
	this.shape_1155.setTransform(194.3,230.5);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FDA96F").s().p("AAAAFIAAgFIgDgCIAEgDIACAEIgDAHg");
	this.shape_1156.setTransform(193.7,236.2);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#6B584B").s().p("AAAATIAAgTIgBgRQABgBACAVIAAAQg");
	this.shape_1157.setTransform(196.4,233.2);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#95847D").s().p("AABAXIgCgcIgFgOIABgHIAIAEIAEAcIAAANIgDABIgBAGg");
	this.shape_1158.setTransform(196.1,233.1);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_1159.setTransform(193.2,235.7);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#6B584B").s().p("AABAUIgDgKQgBgFABgFIABgOIgBgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQABgBABAIQABAEgCALQAAAIABAFIAEAJIgBACg");
	this.shape_1160.setTransform(193.5,233.2);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#95847D").s().p("AgLALQgCgNACgMIAFgKIANgFIAEALIACABIAAAGQgBAXgFAKIgEAEIgGAEQgHgOgBgFg");
	this.shape_1161.setTransform(193.5,233);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#4E5C6E").s().p("AgGABIAAgCIAEABIAEAAIAEgCIABACIgDACIgHABg");
	this.shape_1162.setTransform(196.5,243.2);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#4E5C6E").s().p("AgFACIAAgCIADAAIAEgBIADgBIABACIgGADg");
	this.shape_1163.setTransform(193.8,243.3);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#293544").s().p("AgUALQgBgFACgMIACgMIACgHQADgFAAgDIgBgEIABgEIAPAEIAHgCIABAEIAEAEIAGAgIgBARIgCASIAAADIgLAAQgBgVAAgIIABgFIgEgKIgDgIIgDAGIgFAVIABAOIgCALIgIADQgDgWAAgJg");
	this.shape_1164.setTransform(195.2,239.3);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#2B271C").s().p("AgMAGIAAgGIABAAIAAgFIAIAAIADADIAGADIAHABIAAADIgDABg");
	this.shape_1165.setTransform(197.3,243.9);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#2B271C").s().p("AgHAFIABgFIgBgDIAHgCIABAEQAEADAEACIAAACIgLAAIgFgBg");
	this.shape_1166.setTransform(194.3,244);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#5D4736").s().p("AgNAUIAJguIAJABIAHAXIABAZIgMADg");
	this.shape_1167.setTransform(195,233.3);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#2B271C").s().p("AADAPIgQgMIAHgLIAKgIIAJAFIgFAdg");
	this.shape_1168.setTransform(192.6,236.7);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FDA96F").s().p("AgDAJIgDgLIAAgHIAJAFIAAAFIAEACIgDAHg");
	this.shape_1169.setTransform(194.9,230.1);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FDA96F").s().p("AgCACIACgHIADABIgBAKg");
	this.shape_1170.setTransform(196.5,235.5);

	this.instance_58 = new lib.CompoundPath_29();
	this.instance_58.parent = this;
	this.instance_58.setTransform(199,242.2,1,1,0,0,0,5.5,2.2);
	this.instance_58.alpha = 0.398;

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAIgBAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_1171.setTransform(232.3,171.9);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#050001").s().p("AgHAGIgBAAIgBgHQABgDADgCQADgDACAAQADgBAEAEIADAGIgCAHQABABgBgBQABgGgBgBIgFAAIgDAAIgEADIAAAHIAAABg");
	this.shape_1172.setTransform(233.1,171);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FDA96F").s().p("AAAALIgFgDIgCgIIABgIIAKgCIAEAGIgCAMIgDADg");
	this.shape_1173.setTransform(233.2,171.8);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#FDA96F").s().p("AAAADQgBAAAAAAQAAAAAAgBQgBAAAAgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBABAAQABABAAAAQAAAAABABQAAAAgBABQAAAAAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAABAAAAIAAgBg");
	this.shape_1174.setTransform(233.9,171.8);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#4E5C6E").s().p("AgPAXQgCgCAAgEIAAgIIADgPIAEgKIgDgEIABAAIAGABIABgDIACAAIgBAEIAEAAIACAEIAAAEIgBADIADAAIABgCIgBgEIgBgEIACAAIAAgFIACAAIAAAEIACAAIADADIABAMIAFATQAAABAAAAQAAABAAAAQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQgDgDgDgIIgDgHIgEADIgGAKQgDAGAAAEIgCABIgCAAIgBAAg");
	this.shape_1175.setTransform(233.6,180.6);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgEACIAAgEIAAgDIAAgEIAGAHIADAIg");
	this.shape_1176.setTransform(234.1,173.6);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FD8A5A").s().p("AgBAGIgCgFIgBgEQAAgBAAgBQAAgBAAgBQABAAAAAAQAAgBAAAAQACAAACAEQAEADAAABQAAAJgDAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_1177.setTransform(233.1,172.5);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#2B271C").s().p("AgMASIANgWIAJgRIADABIgJAUIgOAVg");
	this.shape_1178.setTransform(233,176);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#BCAEA4").s().p("AgEgDIADgDIABgCIACAGIADAFIgFAGg");
	this.shape_1179.setTransform(232.6,173.5);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FDA96F").s().p("AAAAFIgBgFIgCgBIAFgFIACAFIgEAIg");
	this.shape_1180.setTransform(232,179.2);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#6B584B").s().p("AAAAAIgBgRQABgBACAVIAAAPIgCABg");
	this.shape_1181.setTransform(234.7,176.2);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#95847D").s().p("AABAXIgCgcIgGgPIACgFIAIADIAEAbIAAAPIgDAAIgBAHg");
	this.shape_1182.setTransform(234.4,176.1);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_1183.setTransform(231.5,178.7);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#6B584B").s().p("AABAUIgDgLQgBgEABgFIABgOIgBgFQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAIQABAEgCALQAAAIABAFIAEAJIgCACg");
	this.shape_1184.setTransform(231.8,176.2);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#95847D").s().p("AgLALQgCgOACgLIAFgKIAMgFIAFAKIACACIAAAFQgBAYgGAJIgDAEIgGAFQgHgOgBgFg");
	this.shape_1185.setTransform(231.8,176);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#4E5C6E").s().p("AgGABIAAgCIAEABIAEAAIAEgBIABABIgCACIgIAAg");
	this.shape_1186.setTransform(234.8,186.2);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#4E5C6E").s().p("AgFADIAAgDIADAAIAEAAIADgCIABACIgGADg");
	this.shape_1187.setTransform(232.1,186.3);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#293544").s().p("AgUAMQgBgGACgMIACgMIACgGQADgFAAgDIgBgFIABgEIAPAFIAHgCIABAEIAEADIAGAgIgBASIgCASIAAADIgLAAQgBgWAAgIIABgFIgEgKIgDgIIgDAGIgFAVIABAPIgCALIgIACQgDgWAAgIg");
	this.shape_1188.setTransform(233.5,182.3);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#2B271C").s().p("AgDAGIgJAAIAAgGIABAAIAAgEIAIgBIADADIAGADIAHABIAAADIgDABIgHAAIgGAAg");
	this.shape_1189.setTransform(235.6,186.8);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#2B271C").s().p("AgCAGQgFAAgBgCIABgEIAAgDIAHgCIABAEQAEADADABIAAADIgHAAIgDAAg");
	this.shape_1190.setTransform(232.7,186.9);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#5D4736").s().p("AgMAUIAIguIAJABIAIAXIABAZIgMAEg");
	this.shape_1191.setTransform(233.3,176.2);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#2B271C").s().p("AAEAPIgQgMIAFgLIAMgJIAJAGIgGAcg");
	this.shape_1192.setTransform(230.9,179.7);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FDA96F").s().p("AgDAKIgDgMIAAgHIAJAFIAAAFIAEACIgDAHg");
	this.shape_1193.setTransform(233.2,173.1);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FDA96F").s().p("AgCACIACgHIADABIAAAKg");
	this.shape_1194.setTransform(234.8,178.5);

	this.instance_59 = new lib.CompoundPath_28();
	this.instance_59.parent = this;
	this.instance_59.setTransform(237.2,185.1,1,1,0,0,0,5.4,2.1);
	this.instance_59.alpha = 0.398;

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#263C48").s().p("AAAAAIAAAAIACAAIAAABg");
	this.shape_1195.setTransform(141.4,205.3);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#263C48").s().p("AgDABIAAgBIAHAAIgBABg");
	this.shape_1196.setTransform(143.6,205.7);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FDA96F").s().p("AgGAPIABgDIAAgBIAAAAIgBABIAAADIAAADIgBAAIAAgHIACgFIACgCIAEgVIAHAAIAAAFQgBAFgGALIAAADIgBAFIAAABIAAACIgBAAIgBgCIABgCIAAAAIAAAAIgBABIAAACIAAADIgBAAIgBgDIABgCIAAgBIAAAAIgBABIAAADIAAADIgBAAg");
	this.shape_1197.setTransform(143.2,207.6);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#263C48").s().p("AADgBIgJgCIgBAKIgBgKIgCgEIAHAAQAGAAACgBQACAAACgGIABAVIABAGIgGACQABgOgDgCg");
	this.shape_1198.setTransform(142.3,205.1);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#263C48").s().p("AgHABIACgBIgBAAIABgDIACgBIABADIgDAGIAIgHIACgFIADADIgBAEIgEABIACADIgMAEg");
	this.shape_1199.setTransform(142.6,203);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAABABQACACAEgCQAAADgDABQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1200.setTransform(142.6,202.4);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_1201.setTransform(140.9,208.9);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FDA96F").s().p("AgBAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_1202.setTransform(143.5,201.2);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBgBAAg");
	this.shape_1203.setTransform(141.8,201.2);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#231F20").s().p("AAAAAQgDAGgFAAQAAgMAIAAQAEAAACAEQADADgBAGQgGgDgCgEg");
	this.shape_1204.setTransform(142.6,200.4);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#3E5665").s().p("AgGAWIgHgCIACgGIgBgMIgBgDIAEgMIAFgGIAAADIgDAJIAJgKIACgEIAJAIQABACAAAGIgBASIgGAAQAAAGgCABQgEACgDAAIgEAAg");
	this.shape_1205.setTransform(142.7,204.4);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#3E5665").s().p("AgBgJIgDgLIAGAAIACAKIAAAeIgEABg");
	this.shape_1206.setTransform(143.5,208.5);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#576977").s().p("AABAUIgKgBIgEgCIAAgVIACgQIAWAAIADAKIAAAeIgIABIgFgBg");
	this.shape_1207.setTransform(142.5,208.5);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FDA96F").s().p("AgFAIQgCgEAAgEQAAgMAHAAQAIAAAAAMQAAAEgCAEQgDAFgDAAQgDAAgCgFg");
	this.shape_1208.setTransform(142.6,201.1);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FDA96F").s().p("AgEANQgDgGABgDIAGgHIAAgJIAIAAIAAAQIgFAAIAAAJg");
	this.shape_1209.setTransform(142.3,203.2);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FEBF87").s().p("AACAcIABgEIgBgOQAAgIgFgNIgEgJIgCgHIAKABIABAGIAEALIABAKIABAKIABACIAAAEIgDALIgBAAIgDAAg");
	this.shape_1210.setTransform(143.8,213.1);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FEBF87").s().p("AgGAdIADgKQABgGgBgNIAAgUIAAgIIAKADIgBAIIAAAKIgEAWIAAAEQgCAHgCADIgCAAIgCAAg");
	this.shape_1211.setTransform(141.7,213);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#231F20").s().p("AgGAIIALgQIABACIAAAFIAAAFIgBAAIAAgFIgBADQgBAFgDABIgDABIgDgBg");
	this.shape_1212.setTransform(141.4,215.4);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#231F20").s().p("AgDAKIgBgBIAFgSIABAAIADABIAAAKIgBAAIgBgFIAAAIQgBAEgCABIgBAAIgCAAg");
	this.shape_1213.setTransform(144.4,215.3);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#BD3A3A").s().p("AgJgPIANABIAJAEIgBAZIgYABg");
	this.shape_1214.setTransform(141,211);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#231F20").s().p("AgEAAQgBgEAFAAQAFAAABAEQgBAFgFAAQgFAAABgFg");
	this.shape_1215.setTransform(142.7,199.8);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#BD3A3A").s().p("AgDACIABgDIAGAAIgBABIgDAAIgBACg");
	this.shape_1216.setTransform(141,209.3);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#3E5665").s().p("AgBAFIABgKIABABIABAJg");
	this.shape_1217.setTransform(141.4,204.9);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#FDA96F").s().p("AgBAYIgCgGIABgDIACgQIABgWIADADIgDAsg");
	this.shape_1218.setTransform(141.2,206.8);

	this.instance_60 = new lib.CompoundPath_27();
	this.instance_60.parent = this;
	this.instance_60.setTransform(145.1,214,1,1,0,0,0,5.5,2.1);
	this.instance_60.alpha = 0.398;

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#263C48").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_1219.setTransform(276.9,25.9);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#263C48").s().p("AgDABIAAgBIAHAAIAAABg");
	this.shape_1220.setTransform(279.2,26.3);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#FDA96F").s().p("AgFASIAAgGIAAgBIAAABIgBAEIAAABIgBAAIAAgCIAAgEIADgFIABgCIAFgVIAGAAIAAAFQgBAFgGALIABADIgBADIgBACIAAADIgBAAIAAgBIAAgCIAAgCIAAACIgBAFIgBAAIAAgFIAAgBIAAABIgBAEIAAACg");
	this.shape_1221.setTransform(278.7,28.2);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#263C48").s().p("AAEgBQgBgBgJAAIgBAJIgBgKIgCgEIAHABQAGAAACgBQACgBADgGIABAbIgFACQAAgOgCgCg");
	this.shape_1222.setTransform(277.9,25.7);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#263C48").s().p("AgGABIACgBIgCAAIACgCIACgCIAAADIgCAHIAIgIIACgFIACADIgBAEIgDABIABADIgMAEg");
	this.shape_1223.setTransform(278.1,23.6);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQACACADgDQAAAEgCAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1224.setTransform(278.2,23.1);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_1225.setTransform(276.5,29.6);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#FDA96F").s().p("AAAACQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIAAgBg");
	this.shape_1226.setTransform(279,21.9);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIAAABQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1227.setTransform(277.4,21.9);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#231F20").s().p("AAAAAQgCAFgGABQAAgMAIAAQAEAAACAEQADADgBAGQgGgDgCgEg");
	this.shape_1228.setTransform(278.2,21);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#3E5665").s().p("AgGAWIgHgCIACgGIAAgLIgCgDIACgHIADgGIAEgGIABADIgEAKIAJgLIACgEIAJAIQABACAAAGIgBATIgFAAQgBAGgBAAQgEACgEAAIgEAAg");
	this.shape_1229.setTransform(278.2,25);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#3E5665").s().p("AgBAVQAAgXgBgHIgBgLIAEAAIADAKIABAfg");
	this.shape_1230.setTransform(279.1,29.1);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#576977").s().p("AABAVIgOgEIABglIAXAAIACAKIABAfg");
	this.shape_1231.setTransform(278.1,29.1);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FDA96F").s().p("AgFAIQgDgEAAgFQAAgLAIABQAIgBAAALQABAFgDAEQgDAFgDAAQgCAAgDgFg");
	this.shape_1232.setTransform(278.2,21.8);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#FDA96F").s().p("AgEANQgDgGABgDIAGgHIAAgKIAIAAIAAARIgFAAIgBAJg");
	this.shape_1233.setTransform(277.9,23.9);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FEBF87").s().p("AACAcIABgDIgBgPQgCgKgCgKIgGgJIgBgIIAJABIACAHIAEAKIABAKIABALIABACIAAAEIgBAGIgBAEg");
	this.shape_1234.setTransform(279.4,33.7);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#FEBF87").s().p("AgGAdIADgKQABgGgBgNIAAgUIAAgIIAKADIAAASIgFAWIAAAEQgBAHgDADg");
	this.shape_1235.setTransform(277.3,33.6);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#231F20").s().p("AgEAJIgCgBIALgQIACADIgBAJIgBAAIAAgFIgBADQgBAFgDACIgCAAIgCAAg");
	this.shape_1236.setTransform(277,36);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#231F20").s().p("AgDAKIgBAAIAFgTIADABQABABgBAEIABAFIgBAAIgBgEIAAAIQgBADgCABIgBAAIgCAAg");
	this.shape_1237.setTransform(280,35.9);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#BD3A3A").s().p("AgJgPIAMABIAKADIgBAZIgYABg");
	this.shape_1238.setTransform(276.5,31.6);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#231F20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1239.setTransform(278.2,20.4);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#BD3A3A").s().p("AgDACIAAAAIACgDIAFAAIgBABIgDAAIAAACg");
	this.shape_1240.setTransform(276.6,29.9);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#3E5665").s().p("AgBAFIABgJIABABIABAIg");
	this.shape_1241.setTransform(277,25.5);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FDA96F").s().p("AgBAYIgCgGIACgDIACgmIADAEIgDArg");
	this.shape_1242.setTransform(276.8,27.4);

	this.instance_61 = new lib.CompoundPath_26();
	this.instance_61.parent = this;
	this.instance_61.setTransform(280.7,34.6,1,1,0,0,0,5.5,2.1);
	this.instance_61.alpha = 0.398;

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#EEBB59").s().p("AgBAAQADgCABABQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAAAIgCAAIgHACg");
	this.shape_1243.setTransform(262.3,122.3);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#EEBB59").s().p("AgCAAIgBAAIABgBQACgBAFAEIgHgCg");
	this.shape_1244.setTransform(259.3,122.3);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#FFFFFF").s().p("AgBgCIABABIABADIgBABg");
	this.shape_1245.setTransform(261.9,111.9);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#DCA042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_1246.setTransform(262,114.2);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#DCA042").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_1247.setTransform(259.9,114.2);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FDA96F").s().p("AgBAAIABgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1248.setTransform(261.9,108.4);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#FDA96F").s().p("AgBAAIABgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_1249.setTransform(260.3,108.4);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgCQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAIgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_1250.setTransform(261.1,109.5);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#6DB19F").s().p("AABACIgEADIgDgGIADgDIAEAEIAEgEIACAEIgCAFg");
	this.shape_1251.setTransform(261.1,109.9);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FDA96F").s().p("AgCAAIADgCIACABIgEAEg");
	this.shape_1252.setTransform(262.2,111.8);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FDA96F").s().p("AAAABIgCABIgBgDIABAAIAEAAIACADg");
	this.shape_1253.setTransform(260.3,111.2);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#443123").s().p("AABADIgIgCIAAgCIAIgDIABADIAFACIAAABIgBABIgCABIgDgBg");
	this.shape_1254.setTransform(262.5,123.1);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#443123").s().p("AgFAEIgBgBIAAgBQADgCABgBIACgCQABgBAHADIAAACIgIADIgDAAIgCAAg");
	this.shape_1255.setTransform(259.2,123);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#403024").s().p("AAFABIgDAAIgCABIgEgBIgDAGIgBgHQAAgBADgCIAFgCQAIgBABAFQABAEgCAEQgCgFgBgBg");
	this.shape_1256.setTransform(261.1,107.6);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FDA96F").s().p("AgCAJQgEgDgBgDIAAgLIAOAAQABAIgBADQgBAEgEACIgCAAIgCAAg");
	this.shape_1257.setTransform(261.2,108.5);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_1258.setTransform(261.1,109.5);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#6DB19F").s().p("AgFANIgHgCIANgHIADgEIAAgJIADgEIAEAIQADALgDAEIgGAEIgDAAIgHgBg");
	this.shape_1259.setTransform(261.9,111.7);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#7BC0B0").s().p("AgLAKQgDgCgBgHQgCgHADgEIADgDIAIANIAUADIgDAEIgOAHQgJgCgCgCg");
	this.shape_1260.setTransform(260.6,111.4);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#DB635E").s().p("AgEAVIABgkIACgEIgDgDIAEgCIADADIgDACIACAEIADAlIgFADg");
	this.shape_1261.setTransform(261.3,112.6);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#3E5665").s().p("AgNAAIAAgCIAOABIAMgBIABACIgOADg");
	this.shape_1262.setTransform(261,114.2);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#8DD2CA").s().p("AgOAVQgDgCAAgEIABgJIgEgIQgBgIADgEIAFgEIAHgCIADgDIADAEIAFgEIACAFIAJAEIAEAIQACALgCAEIgGAEIgCAJIgOACg");
	this.shape_1263.setTransform(261.1,111.8);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#EEBB59").s().p("AAIAYQgCgEgBgMQgCgKgCgDIgBgBIAAABQgDAFgEATQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgRQAAgLABgGIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAFQADASgEARQgBABAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgAAAgKIACAAIABgMIgDAAg");
	this.shape_1264.setTransform(261,116.7);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#DCA042").s().p("AgNAsIgEgCIgCgDIACgCIAAgFIABggQgBgZACgKIAEgJIAaAAIADAKIABBHIABAAIgBAEQgBABgEABQgDABgCgBQgDgCgCgRQACgYgCgIQAAgJgCAAIgBAAIgBABQgBAJgBAMIgCASIAAALQgBAIgDACIgCABIgDgBg");
	this.shape_1265.setTransform(260.8,118.5);

	this.instance_62 = new lib.Path_7();
	this.instance_62.parent = this;
	this.instance_62.setTransform(264.4,121.1,1,1,0,0,0,5.4,2);
	this.instance_62.alpha = 0.398;

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FDA96F").s().p("AAAAAIAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_1266.setTransform(226.6,191.1);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#FDA96F").s().p("AAAABQAAAAAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAIABAAIABABIgBAAIgBAAg");
	this.shape_1267.setTransform(226.5,190.9);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FDA96F").s().p("AAAABIAAgBIABAAIAAABIAAAAIgBAAg");
	this.shape_1268.setTransform(226.4,190.8);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_1269.setTransform(226.3,190.6);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#D09335").s().p("AAAAAIAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1270.setTransform(225.5,196.1);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABg");
	this.shape_1271.setTransform(225.5,195.3);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBACQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1272.setTransform(225.5,194.5);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#D09335").s().p("AgCAAIABgBIAEABIAAACg");
	this.shape_1273.setTransform(226.2,196.7);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#D09335").s().p("AgEAAIAIgBIABABIgIACg");
	this.shape_1274.setTransform(224.2,196.7);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#D09335").s().p("AgFACIABgDIgEAAIgBgIIAEgDIAJARIABgOIAFADIgCADIACADIgFAMg");
	this.shape_1275.setTransform(225,192.7);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FDA96F").s().p("AgDAEIAAgDIAAgFIAGAAIABAFIgBAEg");
	this.shape_1276.setTransform(222.9,197.9);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#6DB19F").s().p("AgCABIAEgCIABABIgEACg");
	this.shape_1277.setTransform(226.8,192);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#403024").s().p("AAEADIAAgDIgHgBIgBADIgCAAIACgFIALACIgBAFg");
	this.shape_1278.setTransform(222.9,198.4);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#403024").s().p("AgRgBIAJgBIAZAEIgIABg");
	this.shape_1279.setTransform(222.9,198.6);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#403024").s().p("AgDgPIAIAAIgBAdIgIACg");
	this.shape_1280.setTransform(224.1,200.5);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#6C5549").s().p("AgNALIABgcIAaAFIgBAeg");
	this.shape_1281.setTransform(222.4,200.2);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#6DB19F").s().p("AgDAAIAHAAIAAABIgGAAg");
	this.shape_1282.setTransform(222.8,197.3);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#92251B").s().p("AgGAHIgDgHQAAgEAEgEQACgCAEAAQAGABACACQABABgBAEIgEABQgEgCgBABQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAIgBACIgBgBQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIgBAEIAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBg");
	this.shape_1283.setTransform(225.1,189.9);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FFFFFF").s().p("AgBAAIABgBIgCgCIACgDIADADIgCADIABAAIAAAHg");
	this.shape_1284.setTransform(225.3,192.6);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#6DB19F").s().p("AgEgHIACgCIAEAEIADgCIABACIgBAPg");
	this.shape_1285.setTransform(225,192.3);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#D09335").s().p("AAAALIgEgCIgCgVIAFAIIABAIQABADAEADIACACIgDABIgEgCg");
	this.shape_1286.setTransform(227,193.5);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#D09335").s().p("AgCAYIgBgIIADgbIAAgGQAAgHACABQADAAgBAGIgBALQAAAHgEAXg");
	this.shape_1287.setTransform(223.6,195.6);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FDA96F").s().p("AAAALIgBgBIgCgFQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBADIgCgCQgBgDABgGIAAgGIAPABIAAAHIAAACIAAADQgCAHgCABg");
	this.shape_1288.setTransform(225.2,190.3);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FD8A5A").s().p("AgEADIAAgJIAIADIgBADIAAAEIgCADg");
	this.shape_1289.setTransform(225.2,191);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#122A43").s().p("AAAAGIgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBIABABIAFAHQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAgBAAIgCABIgBAAIgBAAg");
	this.shape_1290.setTransform(226,191);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#213D60").s().p("AAAAGIgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBIABAAIAAABIAFAHQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIgBAAIgBAAg");
	this.shape_1291.setTransform(226.2,190.9);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#EEBB59").s().p("AAAAhIgTgCIAAgIIgJAAIAAgSIADgWIADgKIAFgCIAKgDIAJARIABgQIAIAGIAFAJIgCgIIAEgFIAFAHQAFAHABACQABAEgBADIgEAFIgMgDIACAkIgJABIgDgJIgCAJg");
	this.shape_1292.setTransform(225.2,194.9);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#2B5785").s().p("AAJATQgCgCgBgLIgCgLIAFgDIgHACIgDgBIgEANIgHADIgBgXIABAAIADgFIATABIACAFIABABIABAMQABAQgDAEIgBAAIgCgBgAACgRIgBAIIADgBIAAgHg");
	this.shape_1293.setTransform(224.9,199.8);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#213D60").s().p("AAIAkIgCgCIAAgDQACgFgBgDIgBgFIAAgXIgCgSIgDAAIgGAtIgBAFIABAKIgDACIgFAAIgEgCIgBgDQgBAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIABgMIAEg7IAfAAIAAA6IACAGIAAAMIgMADg");
	this.shape_1294.setTransform(224.7,201.7);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#6DB19F").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_1295.setTransform(225.5,197.3);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#443123").s().p("AABAFIgGgDIgDgBIAAgCIAJgDIAIAGQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIgDAAIgFAAg");
	this.shape_1296.setTransform(226.4,205.8);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#443123").s().p("AgDAHIgBgEIAAgKIAHAEQADAHgCACIgDABIgBABIgDgBg");
	this.shape_1297.setTransform(223.5,206);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FDA96F").s().p("AAAAGQgCgBgBgCIgCgDIABAAIADABIABgBQAAAAAAAAQAAAAAAAAQAAgBAAgBQAAAAgBgBIgDgCIAAgCIADgBQACABACAEIABAFIACADIgEAEg");
	this.shape_1298.setTransform(226.4,191.4);

	this.instance_63 = new lib.CompoundPath_25();
	this.instance_63.parent = this;
	this.instance_63.setTransform(228.9,204.4,1,1,0,0,0,7,2.3);
	this.instance_63.alpha = 0.398;

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FDA96F").s().p("AAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABABIAAAAIgBAAg");
	this.shape_1299.setTransform(125,172.8);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FDA96F").s().p("AAAAAIAAAAIABAAIAAAAIAAABIgBgBg");
	this.shape_1300.setTransform(124.9,172.7);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_1301.setTransform(124.8,172.5);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FDA96F").s().p("AAAABIgBgBIABAAQABAAAAAAQAAAAABAAQAAAAgBAAQAAABAAAAg");
	this.shape_1302.setTransform(124.7,172.3);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_1303.setTransform(123.9,178.5);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#D09335").s().p("AAAAAIAAgBIABABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1304.setTransform(123.9,177.8);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#D09335").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_1305.setTransform(123.9,177);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#D09335").s().p("AAAAAIAAgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABAAAAg");
	this.shape_1306.setTransform(123.9,176.2);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#D09335").s().p("AgCAAIABgBIAEACIAAABg");
	this.shape_1307.setTransform(124.6,178.4);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#D09335").s().p("AgEABIAIgCIABABIgIACg");
	this.shape_1308.setTransform(122.6,178.4);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#D09335").s().p("AgFACIACgDIgFgBIgCgHIAGgDIAJARIABgOIAEADIgCADIACADIgFANg");
	this.shape_1309.setTransform(123.4,174.4);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FDA96F").s().p("AgDAEIAAgDIAAgEIAHgBIAAAFIAAAEg");
	this.shape_1310.setTransform(121.2,179.6);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#6DB19F").s().p("AgCABIAEgDIABABIgDAEg");
	this.shape_1311.setTransform(125.2,173.7);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#403024").s().p("AAEADIAAgDIgHgBIgBACIgCAAIACgEIALACIAAAFg");
	this.shape_1312.setTransform(121.2,180.1);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#403024").s().p("AgRgCIAJAAIAZAEIgIABg");
	this.shape_1313.setTransform(121.3,180.3);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#403024").s().p("AgCgOIAHgBIgBAdIgIACg");
	this.shape_1314.setTransform(122.5,182.2);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#6C5549").s().p("AgNALIACgcIAZAFIgBAfg");
	this.shape_1315.setTransform(120.7,181.9);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#6DB19F").s().p("AgDgBIAHAAIAAACIgHABg");
	this.shape_1316.setTransform(121.2,179);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#92251B").s().p("AgGAHIgCgHQgBgEAEgEQACgCAFAAQAFABACACQAAACAAABQABABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgCABQgFgCgBABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAAAIAAACIgCgBQgBAAAAAAQAAABgBAAQAAABAAAAQAAABABABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCgEg");
	this.shape_1317.setTransform(123.5,171.6);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FFFFFF").s().p("AgBAAIABgBIgCgCIACgDIADADIgCACIACABIgBAHg");
	this.shape_1318.setTransform(123.6,174.3);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#6DB19F").s().p("AgFgGIADgDIAEAEIADgCIABADIgBAOg");
	this.shape_1319.setTransform(123.4,174);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#D09335").s().p("AAAALIgEgCIgCgVIAEAIIACAIQACAFAFADIgCABIgFgCg");
	this.shape_1320.setTransform(125.4,175.2);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#D09335").s().p("AgCAZIgBgJIACgbIABgGQAAgHACAAQACABAAAGIgCALQAAAHgDAYg");
	this.shape_1321.setTransform(122,177.3);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FDA96F").s().p("AAAALIgBgBIgCgFIgCgBIAAACQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQgBgCABgGIAAgGIAPABIAAAHIgBACIABADQgCAHgCABg");
	this.shape_1322.setTransform(123.6,172);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#FD8A5A").s().p("AgEADIAAgIIAJACIgCADIAAAEIgCACg");
	this.shape_1323.setTransform(123.5,172.7);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#122A43").s().p("AAAAGIgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBQAAAAAAAAQABgBAAABQAAAAAAAAQAAAAAAABIAFAHQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIgCABIgBABIgBgBg");
	this.shape_1324.setTransform(124.4,172.7);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#213D60").s().p("AAAAFIgEgHQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACgBQAAAAABAAQAAgBAAABQAAAAAAAAQAAAAAAAAIAFAIQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgBAAIgBgBg");
	this.shape_1325.setTransform(124.5,172.6);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#EEBB59").s().p("AAAAhIgTgBIAAgJIgJAAIAAgSIADgWIADgKIAFgCIAKgDIAJARIABgPIAIAEIAFAJIgDgIIAFgEIALARQABADgBADIgEAFIgMgDIACAkIgJABIgDgJIgDAJg");
	this.shape_1326.setTransform(123.6,176.6);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#2B5785").s().p("AAJATQgBgDgCgKIgBgLIAEgDIgHACIgDgBIgEANIgHADIgBgXIACAAIACgFIATABIACAFIACABIAAAMQABAQgCAEIgCAAIgCgBgAACgRIAAAIIACgBIAAgHg");
	this.shape_1327.setTransform(123.3,181.5);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#213D60").s().p("AAHAkIgBgCIAAgDIABgIIgBgFQgBgDAAgJIABgLIgCgSIgDAAIgBAGIgGAnIABAPIgDACQgCABgHgDIgCgDIABgCQABgDAAgJIAEg7IAfAAIAAA6IABAGIAAAMIgLADIgBgEg");
	this.shape_1328.setTransform(123.1,183.4);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#6DB19F").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_1329.setTransform(123.8,179);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#443123").s().p("AABAFIgGgDIgDgBIAAgCIAJgDIACACIAGAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgDAAIgEAAg");
	this.shape_1330.setTransform(124.8,187.5);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#443123").s().p("AgCAHQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAgKIAHAEQADAHgBACIgFABIAAABIgCgBg");
	this.shape_1331.setTransform(121.9,187.7);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FDA96F").s().p("AABAGIgEgDIgCgDIABAAIADABIABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgDgCIAAgCIAEgBQABABACAEIAAAFIADADIgEAEg");
	this.shape_1332.setTransform(124.8,173.1);

	this.instance_64 = new lib.CompoundPath_24();
	this.instance_64.parent = this;
	this.instance_64.setTransform(127.3,186,1,1,0,0,0,7,2.2);
	this.instance_64.alpha = 0.398;

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#FDA96F").s().p("AAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIAAABIgBgBg");
	this.shape_1333.setTransform(18.5,244.7);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_1334.setTransform(18.4,244.5);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgBAAIAAAAg");
	this.shape_1335.setTransform(18.3,244.4);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FDA96F").s().p("AAAAAIAAAAIABABIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_1336.setTransform(18.2,244.2);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#D09335").s().p("AAAAAIAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_1337.setTransform(17.4,250.4);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#D09335").s().p("AAAAAIAAgBIABABIgBACQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1338.setTransform(17.4,249.7);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#D09335").s().p("AAAAAIAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_1339.setTransform(17.4,248.9);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#D09335").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_1340.setTransform(17.5,248.1);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#D09335").s().p("AgCAAIABgCIAEADIAAABg");
	this.shape_1341.setTransform(18.1,250.3);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#D09335").s().p("AgEABIAIgDIABACIgIACg");
	this.shape_1342.setTransform(16.1,250.3);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#D09335").s().p("AgFABIABgCIgEAAIgBgJIAFgBIAJARIAAgPIAFADIgCADIACADIgFANg");
	this.shape_1343.setTransform(16.9,246.3);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FDA96F").s().p("AgDAEIAAgDIAAgEIAHgBIAAAFIAAAEg");
	this.shape_1344.setTransform(14.8,251.5);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#6DB19F").s().p("AgCABIAEgDIABABIgEAEg");
	this.shape_1345.setTransform(18.7,245.6);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#403024").s().p("AAEADIAAgDIgHAAIgBABIgCAAIACgEIALACIgBAFg");
	this.shape_1346.setTransform(14.8,252);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#403024").s().p("AgRgCIAJAAIAaAEIgJABg");
	this.shape_1347.setTransform(14.8,252.2);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#403024").s().p("AgDgOIAIgBIgBAeIgIABg");
	this.shape_1348.setTransform(16,254.1);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#6C5549").s().p("AgNALIABgcIAaAFIgBAfg");
	this.shape_1349.setTransform(14.3,253.8);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#6DB19F").s().p("AgDgBIAGAAIABACIgGABg");
	this.shape_1350.setTransform(14.8,250.9);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#92251B").s().p("AgGAHIgDgHQAAgEAEgEQACgCAEAAQAGAAACADQABABgBAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgCABQgEgCgBABQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAIgBACIgBgBQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIgBAEIAAAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBg");
	this.shape_1351.setTransform(17,243.5);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FFFFFF").s().p("AgBAAIABgBIgCgCIACgDIADADIgCACIABABIAAAHg");
	this.shape_1352.setTransform(17.2,246.2);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#6DB19F").s().p("AgFgHIADgCIAEAEIACgCIACADIgBAOg");
	this.shape_1353.setTransform(16.9,245.9);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#D09335").s().p("AgEAJIgCgVIAFAIIABAIQACAFAFADIgDABQgDAAgFgEg");
	this.shape_1354.setTransform(18.9,247.1);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#D09335").s().p("AgCAZIgBgJIADgbIAAgGQAAgGACgBQADAAgBAHIgBALQAAAHgEAYg");
	this.shape_1355.setTransform(15.5,249.2);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FDA96F").s().p("AAAALIgBgBIgCgFIgBgBIgBACIgCgCQgBgCABgGIAAgGIAPABIAAAGIAAADIAAADQgCAHgCABg");
	this.shape_1356.setTransform(17.1,243.9);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#FD8A5A").s().p("AgEADIAAgIIAJACIgCADIAAAFIgCABg");
	this.shape_1357.setTransform(17.1,244.6);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#122A43").s().p("AAAAGIgEgIQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIACgBQAAAAAAAAQABgBAAABQAAAAAAAAQAAAAAAABIAFAHQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAIgCABIgBABIgBgBg");
	this.shape_1358.setTransform(17.9,244.6);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#213D60").s().p("AAAAFIgEgHQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBQAAAAABAAQAAgBAAABQAAAAAAAAQAAAAAAAAIAFAIQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCABIgBAAIgBgBg");
	this.shape_1359.setTransform(18.1,244.5);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#EEBB59").s().p("AAAAiIgTgCIAAgJIgJAAIAAgSIADgWIADgKIAFgBIAKgFIAKASIAAgPIAIAEIAFAJIgCgIIAEgEIAFAHQAFAGABAEQABADgBADIgEAFIgMgDIACAkIgJABIgDgIIgCAJg");
	this.shape_1360.setTransform(17.1,248.5);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#2B5785").s().p("AAJATIgFgYIAFgDIgHACIgDgBIgEANIgHADIgBgXIABAAIADgFIATABIACAFIABAAIABAWQAAAJgCACIgBAAIgCgBgAAEgKIAAgHIgCAAIgBAHIADAAg");
	this.shape_1361.setTransform(16.8,253.4);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#213D60").s().p("AAHAkIgBgBIAAgEQABgFAAgDIgCgEIAAgYIgBgSIgDAAIgHAtIAAAPIgCACQgCABgHgCIgCgDIABgDIAAgMIAEg7IAgAAIAAAyQgBAFABAEIABAGIAAAMIgLACg");
	this.shape_1362.setTransform(16.6,255.3);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#6DB19F").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_1363.setTransform(17.4,250.9);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#443123").s().p("AABAFIgHgDIgDgBIABgCIAJgDIAIAGQAAAAAAAAQABABAAAAQgBAAAAABQAAAAgBABIgCAAIgFAAg");
	this.shape_1364.setTransform(18.4,259.4);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#443123").s().p("AgDAHIgBgEIAAgKIAHAEQADAHgCACIgDABIgBABIgDgBg");
	this.shape_1365.setTransform(15.4,259.6);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FDA96F").s().p("AAAAGIgDgDIgCgDIABAAIADABIABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIgCgDIAAgBIACgBQADABAAAEIABAFIADADIgEAEg");
	this.shape_1366.setTransform(18.4,245);

	this.instance_65 = new lib.CompoundPath_23();
	this.instance_65.parent = this;
	this.instance_65.setTransform(20.8,257.9,1,1,0,0,0,7,2.2);
	this.instance_65.alpha = 0.398;

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#3C4A65").s().p("AAAACIAAgCIAAgBIABADg");
	this.shape_1367.setTransform(242.4,164);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#3C4A65").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_1368.setTransform(240.8,164);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#FEBF87").s().p("AgEAAIAFgDIADADIAAAAIgDAAIgCAEg");
	this.shape_1369.setTransform(240,164.5);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FEBF87").s().p("AgBAAIgDABIgBgBIADgCIACgCIAGAEIgDAEg");
	this.shape_1370.setTransform(243.2,164.5);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#DB635E").s().p("AgEATIAAgbIADgIIgCgCIACgDIADACIgCACIADAJIACAaIgFAEg");
	this.shape_1371.setTransform(241.5,161.4);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#F1F2F2").s().p("AgHAAIACgDIAFACIAFgDIADACIgCAFIgGgDIgEAFg");
	this.shape_1372.setTransform(241.5,159.2);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGADIgEAGg");
	this.shape_1373.setTransform(243.8,163.9);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FFFFFF").s().p("AgDgBIAHgDIABAFIgGAEg");
	this.shape_1374.setTransform(239.6,164.1);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#F1F2F2").s().p("AAAATIACgGIAAgMIgDgKIgCAOIABAKIgBABIgBgMIAAgNQACgKACAAQABAAAAAKIAEAJQABADgCALIgDAGg");
	this.shape_1375.setTransform(243.4,162.1);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#F1F2F2").s().p("AgDALIADgRQgCgLABgBQAAgBAAABQABAAAAAAQAAAAAAABQAAAAABABIACAFQABADAAAHIgBAIIAAAHIgCgBIAAgEIABgMIgBgEIgBAKIAAAQIgCABg");
	this.shape_1376.setTransform(240.1,162.3);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#FFFFFF").s().p("AgYAYIgCgOIABgHQgBgRADgFQACgCAFgCIAFgCIAPgCIAGABQAGACACACQADADADAJIADAOQAAAGgDAIIgDAIIgFgCIADgGQACgLgBgEIgDgHQgBgKgCAAQgBAAgCAKIgBAMIABAMQgEACgIABQgHgBgFgCIAAgHIABgJQAAgFgBgDIgCgGQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBABACALIgDARIABAJIgDACg");
	this.shape_1377.setTransform(241.8,161.7);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIABACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBABAAg");
	this.shape_1378.setTransform(242.2,157.6);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1379.setTransform(240.5,157.6);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#403024").s().p("AAHABIgHAAQgFAAgBABIgCADIAAADIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQAAgGgBgBg");
	this.shape_1380.setTransform(241.4,156.7);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#FDA96F").s().p("AgBAKQgFgDgBgDQgBgCABgFIAAgGIAQAAIgBANQgBADgEADIgDAAIgBAAg");
	this.shape_1381.setTransform(241.3,157.7);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_1382.setTransform(241.4,158.6);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#FEBF87").s().p("AgEACIAAgEIAJAAIABACIgGAEg");
	this.shape_1383.setTransform(241.4,158.7);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#DCA042").s().p("AgJACIgFgCIABgCIAbAAIABACQgIADgGAAIgKgBg");
	this.shape_1384.setTransform(241.7,163.9);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#3C4A65").s().p("AgUAoIgBgCIACgDIgCgDQgCgEACgPIABgIIAAghIAFgMIAbAAIAFANIAFA4IgBAEIACACQAAAAAAABQAAAAAAAAQAAABgBABQAAAAgBABIgJAAIgCgEIACgCIgCgDIgBgJIgBgJIgGgiIgHAAIgDAZIAAANQABALgCADIgCACQAAABACAEIgDAEg");
	this.shape_1385.setTransform(241.9,167.8);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#2B271C").s().p("AAAAFQgDgBgBgEIAAgFIAHAAIACAGIAAADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCgBg");
	this.shape_1386.setTransform(243.6,172.1);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#2B271C").s().p("AgFAEIAAgCIADgGIAIAAIAAAEQAAADgDABIgEACQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1387.setTransform(240.1,172.2);

	this.instance_66 = new lib.CompoundPath_22();
	this.instance_66.parent = this;
	this.instance_66.setTransform(245.2,170.5,1,1,0,0,0,5.1,2.1);
	this.instance_66.alpha = 0.398;

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#58595B").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABAAIgCAAIgGACg");
	this.shape_1388.setTransform(162.5,179.5);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#58595B").s().p("AgCAAIgCAAIACgBQACgBAFAEIgHgCg");
	this.shape_1389.setTransform(159.4,179.6);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FFFFFF").s().p("AAAgCIAAABIABADIgBABg");
	this.shape_1390.setTransform(162,169.2);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#414042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_1391.setTransform(162.1,171.4);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#414042").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_1392.setTransform(160.1,171.4);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIABABQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAABgBg");
	this.shape_1393.setTransform(162,165.7);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAIgBACQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1394.setTransform(160.4,165.7);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#FD8A5A").s().p("AgBAAQgBAAAAAAQAAgBgBAAQAAAAABAAQAAAAAAAAQACACAEgCQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_1395.setTransform(161.2,166.7);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#374553").s().p("AAAACIgDADIgCgGIACgDIADAEIAGgEIABAEIgBAFg");
	this.shape_1396.setTransform(161.2,167.2);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgEADg");
	this.shape_1397.setTransform(162.4,169.1);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FDA96F").s().p("AAAABIgCACIgBgDIABgCIAEABIACAEg");
	this.shape_1398.setTransform(160.4,168.5);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#443123").s().p("AABAEIgIgDIABgBIAHgDIAGAFIAAABIAAABIgDAAIgDAAg");
	this.shape_1399.setTransform(162.6,180.3);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#443123").s().p("AgGAEIAAgBIAAgBQADgCABgBIACgCQABgBAGAEIABABIgIADIgDAAIgDAAg");
	this.shape_1400.setTransform(159.3,180.3);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#403024").s().p("AAFABIgFAAQgDgBgCAAIgCAHIgBgHQAAgCADgCQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAAAQAJAAABAFQABADgCAFQgCgGgBAAg");
	this.shape_1401.setTransform(161.3,164.9);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FDA96F").s().p("AgBAJQgFgDgBgDIAAgLIAPAAQAAAIgBADQgBAFgEABIgCAAIgBAAg");
	this.shape_1402.setTransform(161.3,165.7);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_1403.setTransform(161.3,166.7);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#293544").s().p("AgFANIgHgCIANgHIADgEIABgJIACgEIAEAIQADALgDAEQgBACgEACIgEAAIgHgBg");
	this.shape_1404.setTransform(162,169);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#374553").s().p("AgLAKQgCgCgCgGQgCgJAEgDIACgDIAJANIASADIgCAEIgOAHQgJgCgCgCg");
	this.shape_1405.setTransform(160.8,168.7);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#2E211A").s().p("AgEAVIABgjIACgFIgDgDIAEgCIADADIgDACIACAFIADAkIgEADg");
	this.shape_1406.setTransform(161.4,169.8);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#2B271C").s().p("AgNAAIAAgCIAOABIANgBIAAACIgOADg");
	this.shape_1407.setTransform(161.1,171.5);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#4E5C6E").s().p("AgOAVQgDgCAAgEIABgJIgDgHQgCgKADgDIAFgEIAIgCIACgDIADAEIAFgEIACAFIAIAEIAEAIQAEALgEAEIgFAEIgCAJIgOACg");
	this.shape_1408.setTransform(161.2,169.1);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#58595B").s().p("AAIAYQgCgEgBgMQgCgKgBgDIgCgBIAAABQgCAEgFAVQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgRIABgRIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAFQADAUgEAPQgBABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAAAgKIADAAIABgMIgEAAg");
	this.shape_1409.setTransform(161.1,173.9);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#414042").s().p("AgRApIgCgDIACgBIACglQgCgaACgIIAEgKIAaAAIADAKIAAA1IABASIABAAIgBADQgBACgDABQgEACgBgBQgEgCgBgTQABgXgBgIQgCgJgBAAIgBAAIgBABQgBAIgBAMIgBASIgBAMQgBAIgCACIgDABQgDAAgEgEg");
	this.shape_1410.setTransform(160.9,175.8);

	this.instance_67 = new lib.Path_6();
	this.instance_67.parent = this;
	this.instance_67.setTransform(164.5,178.3,1,1,0,0,0,5.4,2);
	this.instance_67.alpha = 0.398;

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#58595B").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgCAAIgHACg");
	this.shape_1411.setTransform(299.5,98.2);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#58595B").s().p("AgCAAIgCAAIACgBQACgBAEAEIgGgCg");
	this.shape_1412.setTransform(296.5,98.3);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#FFFFFF").s().p("AgBgCIABABIACADIgCABg");
	this.shape_1413.setTransform(299.1,87.9);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#414042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_1414.setTransform(299.2,90.1);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#414042").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_1415.setTransform(297.1,90.1);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FDA96F").s().p("AgBAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1416.setTransform(299.1,84.4);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#FDA96F").s().p("AAAAAIAAgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1417.setTransform(297.5,84.4);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgCQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_1418.setTransform(298.3,85.4);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#374553").s().p("AABACIgEADIgDgGIADgDIAEAEIAEgEIACAEIgCAFg");
	this.shape_1419.setTransform(298.3,85.9);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FDA96F").s().p("AgCAAIADgCIACACIgEADg");
	this.shape_1420.setTransform(299.4,87.8);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#FDA96F").s().p("AAAABIgCABIgBgCIABgBIAEABIACACg");
	this.shape_1421.setTransform(297.5,87.2);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#443123").s().p("AABAEIgIgDIAAgBIAEgCQADgCABABIABACIAFADIAAABIgBABIgCABIgDgBg");
	this.shape_1422.setTransform(299.7,99);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#443123").s().p("AgFAEIgBgBIAAgBQADgCABgBIACgCQABgBAHAEIAAABIgIADIgDAAIgCAAg");
	this.shape_1423.setTransform(296.4,99);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#403024").s().p("AAFABIgFAAIgEgBIgDAHIgBgHQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQACgCADAAQAJAAAAAFQABADgCAFQgCgGgBAAg");
	this.shape_1424.setTransform(298.3,83.6);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#FDA96F").s().p("AgCAJQgEgDgBgCIAAgNIAOAAQABAKgBADQgBAEgEABIgCABIgCgBg");
	this.shape_1425.setTransform(298.4,84.4);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_1426.setTransform(298.3,85.4);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#293544").s().p("AgFANIgHgCIANgHIADgEIAAgJIADgEIAEAIQADAKgDAFIgGAEIgDAAIgHgBg");
	this.shape_1427.setTransform(299.1,87.7);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#374553").s().p("AgLAKQgDgBgBgHQgBgIACgEIADgDIAIANIAUADIgDAEIgOAHQgJgCgCgCg");
	this.shape_1428.setTransform(297.8,87.4);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#2E211A").s().p("AgEAVIABgkIACgDIgDgFIAEgBIADACIgDAEIACADIADAkIgFAEg");
	this.shape_1429.setTransform(298.5,88.5);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#2B271C").s().p("AgNAAIAAgCIAOABIAMgBIABACIgOADg");
	this.shape_1430.setTransform(298.2,90.2);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#4E5C6E").s().p("AgOAVQgDgCAAgEIABgJIgEgHQgBgJADgEIAFgEIAHgCIADgDIADAEIAFgEIACAFIAJAEIAEAIQADAKgDAFIgGAEIgCAJIgOACg");
	this.shape_1431.setTransform(298.3,87.8);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#58595B").s().p("AAIAYQgCgEgBgMIgEgNIgBgBIAAABQgDAFgEAUQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBIgBgRQAAgLABgGIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAFQADASgEARQgBABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgAAAgKIACAAIABgMIgDAAg");
	this.shape_1432.setTransform(298.2,92.6);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#414042").s().p("AgNAsIgEgDIgCgDIACgBIABglQgBgaACgIIAEgKIAaAAIADAKIABBHIABAAIgBADQgBACgEABQgDACgCgBQgDgCgCgTQACgXgCgIQAAgJgCAAIgBAAIgBABQgBAIgBAMIgCASIAAAMQgBAIgDACIgCABIgDgBg");
	this.shape_1433.setTransform(298,94.5);

	this.instance_68 = new lib.Path_5();
	this.instance_68.parent = this;
	this.instance_68.setTransform(301.6,97,1,1,0,0,0,5.4,2);
	this.instance_68.alpha = 0.398;

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#8DD2CA").s().p("AAEAKIgIgSIABgBIAIATg");
	this.shape_1434.setTransform(245.3,121.6);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#BD3A3A").s().p("AgIgDIAAABIgCgBIADgGIAEAGQADACALgCQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgKAAgCABIAAAIIgDABg");
	this.shape_1435.setTransform(246.8,119);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#FFFFFF").s().p("AAAAAIABgBIAAABIgBACg");
	this.shape_1436.setTransform(248.2,118.4);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#FFFFFF").s().p("AgDAAIAAgCIAHADIgBACg");
	this.shape_1437.setTransform(245.5,118.6);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#FFFFFF").s().p("AgEADIABgCIgCAAIgBgFIACgCIAGALIABgLIAEADIgCADIABABIgDAGg");
	this.shape_1438.setTransform(246.9,117.3);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#FDA96F").s().p("AADAPIgCgEQgKgLgBgFIAAgIIABgFIAHADIgDAJIAJAPIAGABIACABIAAABIgDAAQAAABAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAABIgBgBIAAABIgBAAIAAAAIAAAAIgBABIgBgBIABABIgBABg");
	this.shape_1439.setTransform(246.1,120.4);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#FDA96F").s().p("AgEAKIABgBIABgBIABAAIAAgBIgBAAIgBABIgBABIAAAAIAAgBIABgBIABAAIAAgBIgBABIgBAAIgBABIAAgBIABAAIACgCIAAAAIgBAAIgBABIgBABIAAgBIABgBIABgBIACAAIACABIACgBIgBgIIABgDIACgCQACAMgCAEQAAABgEABIgBAAIgCAAIgBABg");
	this.shape_1440.setTransform(247.8,119.4);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#9A482E").s().p("AgIARQgEgFAAgJQAAgKACgFQADgFAFgBQAGgBAEAEQADADABAJQABAIgBAEQgBAHgFAAQACgFAAgHIgCgIIgDgEIgCgEIgBAEQgCADgEADIAAAQIADAFQgDAAgCgCg");
	this.shape_1441.setTransform(246.9,116.1);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#FDA96F").s().p("AgEAGQgCgDAAgEQAAgIAGAAQAHAAAAAIQAAAEgCADQgCAEgDAAQgCAAgCgEg");
	this.shape_1442.setTransform(246.9,115.7);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#6DB19F").s().p("AgRgCIAZgOIAKATIgaAOg");
	this.shape_1443.setTransform(246.6,120.9);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#DB635E").s().p("AgFATIgDgTIgBACIgHgDIAFgMIAKgFIAGAKIABgKIAIAFQABADABAIIgCACIgBADIABAQg");
	this.shape_1444.setTransform(246.7,118.7);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#122A43").s().p("AgBAWIgDgWIADgNIABgJIAFAAIgDAJIgCANIACAXg");
	this.shape_1445.setTransform(246.1,122.7);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#213D60").s().p("AgJAWIgDgWIADgNIACgJIATAAIABAqQgFADgIAAg");
	this.shape_1446.setTransform(246.8,122.7);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#FD8A5A").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_1447.setTransform(246.9,117.1);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#FEBF87").s().p("AACAaQgDgDgBgGIABgHIgDgTIABgHIgBgIIAJgCIgBAsIABAIIgBABIgCgBg");
	this.shape_1448.setTransform(246.4,127.1);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#FEBF87").s().p("AACAaQgDgDgBgGIABgHIgDgTIABgHIgBgIIAJgCIgBAsIABAIIgCABIgBgBg");
	this.shape_1449.setTransform(247.5,127.1);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#DB635E").s().p("AgBAGIgCgHIgBAEIAAAAIgBgIIABgDIABgBIAHAMQADAFgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgDgBgBgCg");
	this.shape_1450.setTransform(246.5,129.4);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#DB635E").s().p("AgBAGIgDgHIAAAEIAAAAIgBgFIAAgEIABgCIABgBIAJARQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDgBgBgCg");
	this.shape_1451.setTransform(247.7,129.4);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#6C2615").s().p("AgJAKIAAgUIATAAIAAAUg");
	this.shape_1452.setTransform(246.9,116.3);

	this.instance_69 = new lib.CompoundPath_21();
	this.instance_69.parent = this;
	this.instance_69.setTransform(250.8,128.2,1,1,0,0,0,4.7,2.1);
	this.instance_69.alpha = 0.398;

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#263C48").s().p("AAAAAIAAAAIABAAIAAABg");
	this.shape_1453.setTransform(199.4,112.7);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#263C48").s().p("AgCABIgBgBIAHAAIAAABg");
	this.shape_1454.setTransform(201.7,113.1);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#FDA96F").s().p("AgFAPIAAgDIAAgBIAAABIgBAEIAAABIgBAAIAAgCIAAgEIADgFIABgCIAFgVIAGAAIAAAFQgBAFgGALIABADIgBADIgBACIAAADIgBAAIAAgCIAAgBIAAgCIAAACIgBADIAAABIgBABIAAgDIAAgCIAAgBIAAABIgBAEIAAABIgBABg");
	this.shape_1455.setTransform(201.2,115);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#263C48").s().p("AAEgBIgKgCIgBAKIgBgKIgCgEIAHABQAHAAABgBQACgBADgGIABAbIgFACQAAgOgCgCg");
	this.shape_1456.setTransform(200.4,112.5);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#263C48").s().p("AgGABIABgBIgBAAIACgDIABgBIABADIgDAGIAJgHIABgFIADADIgBAEIgDABIABACIgMAFg");
	this.shape_1457.setTransform(200.6,110.4);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgDQgBAEgCAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1458.setTransform(200.7,109.9);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_1459.setTransform(199,116.3);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#FDA96F").s().p("AAAACQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIAAgBg");
	this.shape_1460.setTransform(201.5,108.7);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#FDA96F").s().p("AAAACIAAgBQgBgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBABIAAgBg");
	this.shape_1461.setTransform(199.9,108.7);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#231F20").s().p("AAAAAQgCAGgGAAQAAgLAIAAQAEgBACAEQADADgBAFQgGgCgCgEg");
	this.shape_1462.setTransform(200.7,107.8);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#3E5665").s().p("AgGAWIgHgCIACgGIgBgLIgCgDIADgHIADgGIAEgGIAAADIgDAKIAJgLIACgEIAJAIIABAIIgBATIgFAAQgBAFgCABQgDACgEAAIgEAAg");
	this.shape_1463.setTransform(200.8,111.8);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#3E5665").s().p("AAAAVQgBgXAAgHIgCgLIAEAAIADAKIABAfg");
	this.shape_1464.setTransform(201.6,115.9);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#576977").s().p("AABAVIgOgEIABglIAXAAIACAKIABAfg");
	this.shape_1465.setTransform(200.6,115.9);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#FDA96F").s().p("AgFAIQgCgEgBgEQAAgMAIAAQAIAAAAAMQABAEgDAEQgDAEgDAAQgDAAgCgEg");
	this.shape_1466.setTransform(200.7,108.6);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#FDA96F").s().p("AgEAOQgDgIABgCIAGgHIAAgJIAIAAIAAAQIgFAAIAAAKg");
	this.shape_1467.setTransform(200.4,110.7);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#FEBF87").s().p("AACAcIABgEIgBgOQgCgLgCgKIgGgJIAAgHIAIABIACAGIAFALIAAAKQAAAIABADIABABIAAAFIgBAFIgBAFg");
	this.shape_1468.setTransform(201.9,120.5);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#FEBF87").s().p("AgGAdQADgHAAgCQABgGgBgOIAAgUIAAgIIAKAEIAAARIgFAXIAAADQgBAHgDADg");
	this.shape_1469.setTransform(199.8,120.4);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#231F20").s().p("AgEAJIgCgBIACgEIAJgMIACADIgBAJIgBAAIAAgFIgBADQgBAFgDACIgCAAIgCAAg");
	this.shape_1470.setTransform(199.5,122.8);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#231F20").s().p("AgDAKIgBgBIAFgSIABAAIACABQABABAAAEIAAAFIgBAAIgBgFIAAAIQAAAEgDABIgBAAIgCAAg");
	this.shape_1471.setTransform(202.5,122.7);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#BD3A3A").s().p("AgJgPIAMABIAKAEIgBAZIgYABg");
	this.shape_1472.setTransform(199,118.4);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#231F20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1473.setTransform(200.7,107.2);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#BD3A3A").s().p("AgDADIAAgBIACgEIAFAAIgBACIgDAAIAAADg");
	this.shape_1474.setTransform(199.1,116.7);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#3E5665").s().p("AgBAFIABgKIABABIABAJg");
	this.shape_1475.setTransform(199.5,112.3);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#FDA96F").s().p("AgBAYIgCgGIACgDIACgmIADAEIgDArg");
	this.shape_1476.setTransform(199.3,114.2);

	this.instance_70 = new lib.CompoundPath_20();
	this.instance_70.parent = this;
	this.instance_70.setTransform(203.2,121.4,1,1,0,0,0,5.5,2.1);
	this.instance_70.alpha = 0.398;

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#263C48").s().p("AAAABIAAgBIABAAIAAABg");
	this.shape_1477.setTransform(301.7,6.1);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#263C48").s().p("AgDABIAAgBIAHAAIgBABg");
	this.shape_1478.setTransform(303.9,6.4);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#FDA96F").s().p("AgFASIAAgDIAAgDIAAgBIAAABIgBAEIAAABIgBAAIAAgCIAAgEIADgFIABgCIAFgVIAGAAIAAAFQgBAFgGALIABADIgBADIgBACIAAACIAAABIgBAAIAAgBIAAgCIAAgCIAAACIgBADIAAACIgBAAIAAgCIAAgDIAAgBIAAABIgBAEIAAACg");
	this.shape_1479.setTransform(303.4,8.3);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#263C48").s().p("AAEgBQgBgBgJAAIgBAJIgBgKIgCgEIAHAAQAHAAABgBQACgBADgFIABAbIgFACQAAgOgCgCg");
	this.shape_1480.setTransform(302.6,5.8);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#263C48").s().p("AgGABIABgBIgBAAIACgDIABgBIABADIgDAGIAJgHIABgFIADADIgBAEIgDABIABADIgMAEg");
	this.shape_1481.setTransform(302.8,3.7);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgDQAAAEgDAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1482.setTransform(302.9,3.2);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_1483.setTransform(301.2,9.7);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#FDA96F").s().p("AAAACIgBgCQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIAAgBg");
	this.shape_1484.setTransform(303.7,2);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBgDg");
	this.shape_1485.setTransform(302.1,2);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#231F20").s().p("AAAAAQgDAGgFAAQAAgMAIAAQAEAAACAEQADADgBAGQgGgDgCgEg");
	this.shape_1486.setTransform(302.9,1.1);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#3E5665").s().p("AgGAWIgGgCIABgGIAAgLIgCgDIACgGIACgHIAFgGIABAEIgEAJIAKgKIABgFIAJAIIACAIIgCATIgGAAQAAAGgBAAQgEACgEAAIgEAAg");
	this.shape_1487.setTransform(303,5.1);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#3E5665").s().p("AAAAVQAAgXgCgHIgCgLIAGAAIABALQABAHAAAXg");
	this.shape_1488.setTransform(303.8,9.2);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#576977").s().p("AABAVIgOgEIAAgVIACgQIAWAAIACALQABAHAAAXg");
	this.shape_1489.setTransform(302.8,9.2);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#FDA96F").s().p("AgFAIQgDgEABgFQAAgLAHABQAJgBAAALQAAAFgDAEQgDAFgDAAQgCAAgDgFg");
	this.shape_1490.setTransform(302.9,1.9);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#FDA96F").s().p("AgEAOIgCgKIAFgHIAAgKIAIAAIAAARIgEAAIAAAKg");
	this.shape_1491.setTransform(302.6,4);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#FEBF87").s().p("AACAcIABgDIAAgPQgDgLgDgJIgEgJIgCgIIAKABIABAHIAEAKIABAKIABALIACACIgCAEQAAAIgCACg");
	this.shape_1492.setTransform(304.1,13.8);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#FEBF87").s().p("AgGAcIADgJQABgGgBgNIAAgVIAAgHIAKADIAAASIgEAWIAAAEQgDAIgCACg");
	this.shape_1493.setTransform(302,13.7);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#231F20").s().p("AgEAJIgBgBIACgEIAIgMIABADIAAAJIgBAAIAAgFIgBADQgBAFgDACIgCAAIgCAAg");
	this.shape_1494.setTransform(301.7,16.1);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#231F20").s().p("AgDAKIgBgBIAFgSIABAAIACABQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAFIgBAAIAAgEIgCAIQAAAEgCABIgBAAIgCAAg");
	this.shape_1495.setTransform(304.7,16.1);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#BD3A3A").s().p("AgJgOIAMAAIAKADIgBAZIgYABg");
	this.shape_1496.setTransform(301.2,11.7);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#231F20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1497.setTransform(302.9,0.5);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#BD3A3A").s().p("AgDADIABgBIABgEIAFAAIgBACIgDAAIAAADg");
	this.shape_1498.setTransform(301.3,10);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#3E5665").s().p("AgBAFIABgJIABAAIABAJg");
	this.shape_1499.setTransform(301.7,5.6);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#FDA96F").s().p("AgCAYIgBgGIABgDIADgmIADAEIgCArg");
	this.shape_1500.setTransform(301.5,7.5);

	this.instance_71 = new lib.CompoundPath_19();
	this.instance_71.parent = this;
	this.instance_71.setTransform(305.4,14.7,1,1,0,0,0,5.5,2.1);
	this.instance_71.alpha = 0.398;

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#122A43").s().p("AAAgIIABABIAAAKIgBAFg");
	this.shape_1501.setTransform(234.6,106.4);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#122A43").s().p("AABAAQgBgEgBgDIgBgBIACgBIABABQABADABAFQABAGgDAEIgBAAQACgFgBgFg");
	this.shape_1502.setTransform(231.6,106.5);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#3E2D1C").s().p("AgFAHIgCABIgBgCQAAgFABgBQACgCAFgDQAEgEADABQAEAAgCAFQgGAMgEABIgEgDg");
	this.shape_1503.setTransform(231.4,110.2);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#122A43").s().p("AAAADIgKgCIABgEIAJACIALABIAAAEIgFAAIgGgBg");
	this.shape_1504.setTransform(233.1,110.1);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#122A43").s().p("AgEAAIgCgEIACAAIABAEQACADADAAQAEgBgBgGIABAAQABAIgFABIAAAAQgDAAgDgFg");
	this.shape_1505.setTransform(233.1,105.6);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#8DD2CA").s().p("AAAAAIgFACIAFgEIAGAFg");
	this.shape_1506.setTransform(231.7,116.9);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQACACADgDQAAAEgCAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1507.setTransform(233.2,105.4);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#DB635E").s().p("AgBARIgEgBQgDAAgDgDIgBgFIABgHIAFgNIAEgFIACACQABADABAFQAAAFgCAEIgBAGIAOAEIgCAFIgIABIgEgBg");
	this.shape_1508.setTransform(231.6,107.4);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#B86331").s().p("AAHAJIAAgFQAAgCgDgCIgDgBIABADIgGgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABADIgCgBIABAHQgFgBgBgGQgBgEAEgEIAEgDIABgBQACgCACABQAKACABAIIgCAFIgCAGg");
	this.shape_1509.setTransform(233.1,103.6);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#FDA96F").s().p("AgDADIgCgBIABgEIACAAIACgCIABAAIABABIADABIABACIgBAAIAAABIgBAAIAAACIgBAAIgBACIgCAAg");
	this.shape_1510.setTransform(233.3,108.9);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#6C5549").s().p("AgGAGIADgMIAFgCIAGAGIgMALg");
	this.shape_1511.setTransform(231.4,109.6);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgDQACgDACgVIAAgIIAFADIAAAGQgDAXgDAEQgDAEgMAHg");
	this.shape_1512.setTransform(233.2,107.5);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#213D60").s().p("AAAAaIgKgDIgHgCIACgUQAEgJgBgEIgEgJIACgBIAJgEIACAGQADAEADgBQAEAAAAgJIAKAFIAAAJIgCAIIAAAKQAAAJgBADIgCAEIAAAEg");
	this.shape_1513.setTransform(233,107.8);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#DB635E").s().p("AgEAVIACghIADgLIADAEQABADAAAIIAAALIgEATIgBACg");
	this.shape_1514.setTransform(234.6,108);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#FDA96F").s().p("AgFAGQgCgEAAgEQAAgIAHAAQAIAAAAAIQAAAEgCAEQgDAFgDAAQgCAAgDgFg");
	this.shape_1515.setTransform(233.1,104.2);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#FDA96F").s().p("AgHAGIABgJIADgBIAAgEIAIAAIAAAFIACABIABADIgCAIg");
	this.shape_1516.setTransform(233.1,105.5);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#FDA96F").s().p("AgCgEIAFADIgBACIgCADg");
	this.shape_1517.setTransform(234.4,110.5);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#8DD2CA").s().p("AAKAVIgGgZIADgBIgFAAIgDAAIgEgCIADAEIgFASIgDAEIgDgBIgCgNIAEgXIAEgEIAIADIgBAJIACAAIACgIIAFACIACADIACACIADAgIgDABg");
	this.shape_1518.setTransform(232.8,112.1);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#6DB19F").s().p("AALAnIAAgDIgEgIIgEgUIgCgDIgBgGIgCgRIgCAAIgFASIABALIgBADIAAAVIgCADIgEgCIgFACIgDgEIABgqIABgTIAGgMIAPAHIAKABIAEAkIABADIAEAPIACAEIACAGIAAAAIABADQgEADgCABg");
	this.shape_1519.setTransform(233.3,113.7);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#576977").s().p("AgCAEQgIABgBgCIAAgCIABgDIALgCIAFAEIAFABIABACQgEACgGAAg");
	this.shape_1520.setTransform(235.5,117.7);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#576977").s().p("AgEAFIABgEIAAgDIADgEIAFACIgBAGIAAAEQAAABgEAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_1521.setTransform(231.6,117.8);

	this.instance_72 = new lib.Path_4();
	this.instance_72.parent = this;
	this.instance_72.setTransform(236.1,116.2,1,1,0,0,0,4.8,1.9);
	this.instance_72.alpha = 0.398;

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#122A43").s().p("AAAgIIABABIAAAKIgBAFg");
	this.shape_1522.setTransform(67.8,290.4);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#122A43").s().p("AAAgBIgBgGIgBgBIABgBIABABQACACABAFQABAHgEAEIAAAAQABgFgBgGg");
	this.shape_1523.setTransform(64.9,290.6);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#3E2D1C").s().p("AgGAHIgBABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgCgEACgCQACgCAFgDQAFgEADABQAEAAgCAFQgHAMgDABIgFgDg");
	this.shape_1524.setTransform(64.7,294.3);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#122A43").s().p("AgBAEIgKgDIACgEIAJACIAMABIgBAEIgIAAIgEAAg");
	this.shape_1525.setTransform(66.4,294.1);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#122A43").s().p("AgEAAIgCgEIACAAIACAEQACADACAAQAEgBgBgGIABAAQACAIgGABIAAAAQgDAAgDgFg");
	this.shape_1526.setTransform(66.3,289.7);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#8DD2CA").s().p("AgEABIAEgBIAFgBIAAAAIgFADg");
	this.shape_1527.setTransform(68.3,301.2);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#FD8A5A").s().p("AgCgBQACACADgDQAAAEgDAAIAAABQgCAAAAgEg");
	this.shape_1528.setTransform(66.4,289.4);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#DB635E").s().p("AAAARIgFgBIgFgDIgBgFIABgHIAEgNIAFgFIABACQABADABAFQAAAFgCAEIAAAGIANAEIgCAGIgLgBg");
	this.shape_1529.setTransform(64.8,291.4);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#B86331").s().p("AAHAKIAAgGIgGgFIABADIgGgCIABAEIgDgBIABAHQgFgBgBgGQAAgEACgEIAFgDIABgBQADgCACABQAJACABAIIgEALg");
	this.shape_1530.setTransform(66.4,287.7);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#FDA96F").s().p("AgEADIgBgBIAAgEIADAAIACgCIABAAIABABIADABIABACIgBAAIAAABIgBAAIAAACIgBAAIgBACIgCAAg");
	this.shape_1531.setTransform(66.6,292.9);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#6C5549").s().p("AgHAGIAEgMIAFgCIAGAGIgMALg");
	this.shape_1532.setTransform(64.6,293.7);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgDQACgEABgIIAAgMIABgIIAFACIAAAHQgCAVgEAGQgDAEgLAGg");
	this.shape_1533.setTransform(66.4,291.6);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#213D60").s().p("AABAaIgRgFIACgUQACgJAAgDIgDgKIABgBIAJgEIACAFQADAFADgBQAFAAgBgJIALAFIgBAKIgCAHQgBAFAAARIgBAEIgBAEg");
	this.shape_1534.setTransform(66.2,291.9);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#DB635E").s().p("AgEAVIACghIADgLIAEAEIAAALIAAALIgDAOIgBAFIgBACg");
	this.shape_1535.setTransform(67.9,292);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#FDA96F").s().p("AgFAGQgCgEAAgEQAAgIAHAAQAIAAAAAIQAAAEgCAEQgDAFgDAAQgCAAgDgFg");
	this.shape_1536.setTransform(66.4,288.3);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#FDA96F").s().p("AgHAGIABgJIADgBIAAgEIAIAAIAAAFIACABIABADIgCAIg");
	this.shape_1537.setTransform(66.3,289.6);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#FDA96F").s().p("AgCgEIAFADIgCACIgBADg");
	this.shape_1538.setTransform(67.6,294.5);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#8DD2CA").s().p("AALAVIgHgZIAEgBIgJAAIgEgCIAEAEIgGASIgDAEIgDAAIgCgNIAEgYIAFgEIAHADIgBAJIACABIACgJIAFACIADAEIABABIADAgIgDABg");
	this.shape_1539.setTransform(66,296.1);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#6DB19F").s().p("AALAmIABgCIgFgIIgEgUIgCgDIgEgXIgCAAIgEASIABAKIgBADIAAAWIgCACIgEgBIgGACIgCgEIABgWIABgFIgBgPIABgKIAAgJIAGgMIAPAHIAKABIAEAkIAGASIABAEIABAGIABAAIAAADIgFAEg");
	this.shape_1540.setTransform(66.6,297.7);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#576977").s().p("AgCAEIgFAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAIAAgCIACgDIAJgCIAHAEIAEABIABACQgDACgIAAg");
	this.shape_1541.setTransform(68.8,301.8);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#576977").s().p("AgEAFIABgEIAAgCIADgFIAFACIAAAKQgBABgEAAQgDAAgBgCg");
	this.shape_1542.setTransform(64.8,301.8);

	this.instance_73 = new lib.Path_3();
	this.instance_73.parent = this;
	this.instance_73.setTransform(69.4,300.4,1,1,0,0,0,4.9,2);
	this.instance_73.alpha = 0.398;

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#FDA96F").s().p("AgBABQAAgBAAAAQgBAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAgBABQAAABAAAAQAAAAgBABIAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_1543.setTransform(298.1,64.5);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#050001").s().p("AgGAGIgBAAIgCgIQABgFAJgDQADABADADQADACAAADIgBAIQAAABAAgBQAAgGgBgBQgDgBgFABQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAgBABIAAAHIgBAAg");
	this.shape_1544.setTransform(298.9,63.6);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#FDA96F").s().p("AgBALIgEgDIgCgIIABgHIAKgDIAEAFIgCAOIgCACg");
	this.shape_1545.setTransform(299,64.4);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#FDA96F").s().p("AgBAAQAAgBABAAQAAgBAAAAQAAAAAAAAQABgBAAABQABAAAAAAQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAg");
	this.shape_1546.setTransform(299.6,64.4);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#4E5C6E").s().p("AgPAXQgCgCAAgEIAAgIIADgPIAEgKIgDgEIABAAIAGABIABgDIACAAIgBAEIAEABIABADIABAEIgBADIACAAIABgCIAAgEIgCgEIACAAIABgEIABAAIAAADIACAAIAEADIABAMIAFATIgBADIgCABIgDgDQgDgDgDgIIgDgHIgEADIgEAFIgGAPQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAIgBAAg");
	this.shape_1547.setTransform(299.4,73.2);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#BCAEA4").s().p("AADAIIgDgGIgEACIAAgEIAAgDIAAgEIAFAHIAEAIg");
	this.shape_1548.setTransform(299.9,66.1);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#FD8A5A").s().p("AgBAFIgCgEIgBgEQAAgBAAgBQAAgBABgBQAAAAAAAAQAAgBAAAAQACAAACAEQAEADAAABQAAAIgDAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBgBgBg");
	this.shape_1549.setTransform(298.8,65.1);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#2B271C").s().p("AgMATIAOgWIAIgSIADABQgGAQgDAEQgDAHgLAOg");
	this.shape_1550.setTransform(298.7,68.5);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#BCAEA4").s().p("AgEgCIAEgGIACAGIADAFIgFAGg");
	this.shape_1551.setTransform(298.3,66);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#FDA96F").s().p("AAAAFIAAgFIgCgCIADgDIACAEIgDAHg");
	this.shape_1552.setTransform(297.7,71.7);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#6B584B").s().p("AABATIgBgTIgBgKQgBgHABAAQABgBACAVIAAAQg");
	this.shape_1553.setTransform(300.4,68.7);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#95847D").s().p("AABAXIgBgOIgBgOIgGgOIABgGIAIADIAFAbIAAAPIgDAAIgCAHg");
	this.shape_1554.setTransform(300.2,68.6);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgHAFg");
	this.shape_1555.setTransform(297.3,71.3);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#6B584B").s().p("AABAUIgDgKIABgYIgBgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQABgBABAIQABAEgCALIABANIAEAJIgBACg");
	this.shape_1556.setTransform(297.6,68.7);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#95847D").s().p("AgMALQgCgLADgOIAEgKIANgFIAFALIACABIAAAFQgDAagEAIIgEAEIgFAEQgIgOgBgFg");
	this.shape_1557.setTransform(297.6,68.5);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#4E5C6E").s().p("AgGABIAAgCIAEABIAEAAIAEgBIABABIgDACIgHAAg");
	this.shape_1558.setTransform(300.6,78.7);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#4E5C6E").s().p("AgFADIABgDIACAAIAEgBIADgBIABACIgGADg");
	this.shape_1559.setTransform(297.9,78.9);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#293544").s().p("AgUALQgBgFACgMIACgMIADgHIACgIIgBgEIACgEIAPAEIAGgCIACAEIADAEIAEAYIACAIQABADgCAOIgCASIAAADIgLAAIgBgdIABgFIgEgKIgDgIIgDAGIgCAIIgDANIABAOIgCALIgIADQgDgWAAgJg");
	this.shape_1560.setTransform(299.3,74.9);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#2B271C").s().p("AgMAFIAAgFIAAAAIABgFIAIAAIADADIAFADIAHABIABADIgDABg");
	this.shape_1561.setTransform(301.4,79.4);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#2B271C").s().p("AgIAEIABgEIAAgDIAHgCIABAEQAEADADABIAAADIgKAAIgGgCg");
	this.shape_1562.setTransform(298.4,79.5);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#5D4736").s().p("AgNAUIAJguIAKABIAHAXIAAAZIgMADg");
	this.shape_1563.setTransform(299.1,68.8);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#2B271C").s().p("AADAPIgQgMIAHgLIAKgJIAJAGIgFAcg");
	this.shape_1564.setTransform(296.6,72.3);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#FDA96F").s().p("AgDAKIgDgNIAAgGIAKAFIAAAFIADACIgCAHg");
	this.shape_1565.setTransform(299,65.7);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#FDA96F").s().p("AgCACIACgHIADABIgBAKg");
	this.shape_1566.setTransform(300.5,71.1);

	this.instance_74 = new lib.CompoundPath_18();
	this.instance_74.parent = this;
	this.instance_74.setTransform(303,77.7,1,1,0,0,0,5.4,2.2);
	this.instance_74.alpha = 0.398;

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#FEBF87").s().p("AgFAFQgCgDABgFQAAgCADgDIAGgCIACAFIACACQABAEgBADQgBAEgDACIgEABg");
	this.shape_1567.setTransform(51.9,241.2);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#FD8A5A").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_1568.setTransform(52,242.1);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#231F20").s().p("AgKgDIAUAAIACAGIgXABg");
	this.shape_1569.setTransform(52.2,245.7);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#FEBF87").s().p("AgBAEIABgEIABgBIgCAAIgBACIgBgBIABgBIACgCIADABIAAADIAAAAIgCAEg");
	this.shape_1570.setTransform(53.5,247.2);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#DB635E").s().p("AgNAfQgEgZADgGIAEgGIAAgHIgDgMIABgEIAMABQAGgBAEgCIADAGIgDAMIgBAFIAFAEQAEAHgEAbQgCACgLAAg");
	this.shape_1571.setTransform(52.2,246.7);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#FEBF87").s().p("AgYAjQgEgGAAgBIAJgbQAAgSADgEIAGgDQAEgCAAgBIAAgGIAHgBIABAEQABAEACABIAGAAIAFAGQANAQAAADQAAACgJAQQgBABgEAAIgBADIgDgBIABgDIACgCIgDAAIgBADIgBgBIABgCIACgDQAEACABgBQAEgCACgMIgLgNIgCADIgWACIgCAPQgBAFgJAQIABAEIABACIAAACg");
	this.shape_1572.setTransform(52.2,245.5);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#FEBF87").s().p("AAGAkQgBgBAAgJIgBgCIAAgFIgHgQIgCgIIgDgIIgCgNIgBgJIALABIAAATIAGANIABAKIABAKIACAEIABAHIABAGIgEAAIgBABIgBAAg");
	this.shape_1573.setTransform(53.5,251.3);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#FEBF87").s().p("AABAjIAAgOQgEgSAAgFIAAgKIgDgWIAKgBIABARIgBAHIACALIgBAKQgBAHABADIACADIAAAMIgDABg");
	this.shape_1574.setTransform(51.5,251.4);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#9A482E").s().p("AgMAKQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQgDgLACgDQAAgCAEgDIAEgCIAKAAIADADIAFAKIAAADIAAAFQAAAFgEABQgDACgNAAg");
	this.shape_1575.setTransform(51.9,241.1);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#231F20").s().p("AgBAFQgDgEABgCQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADACAAAEQAAAEgDABg");
	this.shape_1576.setTransform(50.1,248.5);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#231F20").s().p("AgBAJIgCgFIAAgHIAEgFIADAGIAAAEQAAAGgBABIgCAAIgCAAg");
	this.shape_1577.setTransform(54.4,254.7);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#231F20").s().p("AgBAJQgCgBAAgGIAAgEIAFgHIABACIAAAEIABAGQAAAEgCACIgCABIgBgBg");
	this.shape_1578.setTransform(51.9,254.7);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#FEBF87").s().p("AABACIgEgCIAAgBIAEABIACAAIABACg");
	this.shape_1579.setTransform(50.1,249);

	this.instance_75 = new lib.CompoundPath_17();
	this.instance_75.parent = this;
	this.instance_75.setTransform(55.9,253.4,1,1,0,0,0,4.9,2);
	this.instance_75.alpha = 0.398;

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#FEBF87").s().p("AgDAJIgCgEQgCgDABgFQABgDACgCIAFgBIAEAGQACADgCADQAAAEgEADIgDABIgCgCg");
	this.shape_1580.setTransform(250.8,144.6);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#FD8A5A").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_1581.setTransform(250.8,145.4);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#231F20").s().p("AgKgDIAUAAIACAGIgXABg");
	this.shape_1582.setTransform(251,149);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#FEBF87").s().p("AAAAEIAAgEIABgBIgBAAIgCACIgBgBIABgBIACgCIADABIABADIgBAAIgCAEg");
	this.shape_1583.setTransform(252.4,150.6);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#DB635E").s().p("AgNAfIgBgNQgCgPACgDIAEgGIAAgHIgCgMIAAgEIAMABQAGgBAEgCIADAGIgDAMIAAAFIAEAEQAEAHgEAbQgBACgMAAg");
	this.shape_1584.setTransform(251,150.1);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#FEBF87").s().p("AgZAjIgCgDQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAAAIAIgbQABgRADgEQABgCAFgCQADgCABgBIAAgGIAHgCIABAGIACADQACABAFAAIAFAGQANARAAACQAAAFgJANQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBgBIgBAEIgDgBIABgDIABgCIgCAAIgBACIgBAAIABgCIACgDIAFACQAEgDABgMIgKgNIgCADIgXACQAAAKgBAFQgCAFgIAQIAAAEIACACIAAACg");
	this.shape_1585.setTransform(251.1,148.8);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#FEBF87").s().p("AAGAkIgBgKIgBgCIAAgFIgHgQIgBgHIgFgJIgCgNIAAgJIALABIAAATQABAEAEAJQACAEABAQIACAEIABAHQACAFgBABIgDAAIgDABIAAAAg");
	this.shape_1586.setTransform(252.3,154.7);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#FEBF87").s().p("AAEAkIgDgBIAAgOIgEgXIAAgKIgDgWIAKgBIABARIAAAHIABALIgBAUIACADIAAAMIgCABIgBAAg");
	this.shape_1587.setTransform(250.3,154.7);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#9A482E").s().p("AgGAPIgHgFIABgDQgCgLABgDQABgCADgDIAEgCIALAAIADADIAFAKIAAADIAAAFIgEAGQgCACgIAAIgGAAg");
	this.shape_1588.setTransform(250.8,144.5);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#231F20").s().p("AgBAFQgCgCAAgEIACgDIACgBQAEACgBAEQAAAEgDABg");
	this.shape_1589.setTransform(249,151.8);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#231F20").s().p("AAAAJQgCgBgBgEIAAgHIAEgFIACAGIACAEQAAAFgCACIgCAAIgBAAg");
	this.shape_1590.setTransform(253.3,158);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#231F20").s().p("AgCAJQgBgBAAgGIAAgEIAFgHIABACIAAADIABAHQgBAGgBAAIgCABIgCgBg");
	this.shape_1591.setTransform(250.8,158);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#FEBF87").s().p("AABACIgEgCIAAgBIAEABIADAAIAAACg");
	this.shape_1592.setTransform(249,152.4);

	this.instance_76 = new lib.CompoundPath_16();
	this.instance_76.parent = this;
	this.instance_76.setTransform(254.8,156.7,1,1,0,0,0,4.9,2);
	this.instance_76.alpha = 0.398;

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#FDA96F").s().p("AgBABQgBgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAAAABQABABAAAAQAAABgBAAQAAAAgBAAIgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_1593.setTransform(255.7,128.4);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#050001").s().p("AgGAGIgBAAIgCgHQABgDADgCQADgDADAAQADgBADAEIADAGIgBAHQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgGgCgBIgEAAIgEAAIgDADIAAAHIgBABg");
	this.shape_1594.setTransform(256.5,127.5);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#FDA96F").s().p("AgBALIgEgDIgCgIIABgIIAKgCIAEAFIgCANIgCADg");
	this.shape_1595.setTransform(256.6,128.3);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#FDA96F").s().p("AAAADQgBAAAAAAQAAAAAAgBQgBAAAAgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAgBAAQAAABgBABQAAAAAAABQgBAAAAAAQAAABAAAAIAAgBg");
	this.shape_1596.setTransform(257.2,128.3);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#4E5C6E").s().p("AgPAXQgCgCAAgEIAAgIIADgPIAEgKIgDgEIABAAIAGABIABgDIACAAIgBAEIAEAAIABAEIABAEIgBADIACAAIABgCIAAgEIgCgEIACAAIABgFIABAAIAAAEIACAAIADADIACAMIAFATQAAABAAABQAAAAAAAAQgBABAAAAQgBABgBAAIgDgDQgDgDgDgIIgDgHIgEADIgEAFIgGAPIgCABIgBAAIgBAAg");
	this.shape_1597.setTransform(257,137.1);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#BCAEA4").s().p("AAEAIIgEgGIgDACIAAgEIgBgDIAAgEIAFAHIAEAIg");
	this.shape_1598.setTransform(257.4,130);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#FD8A5A").s().p("AgBAGIgCgFIgBgEQAAgBAAgBQAAgBABgBQAAAAAAAAQAAgBAAAAQACAAACAEQAEADAAABQAAAJgDAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBgBAAg");
	this.shape_1599.setTransform(256.4,128.9);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#2B271C").s().p("AgMASIAOgWIAIgRIADABIgJAUIgOAVg");
	this.shape_1600.setTransform(256.3,132.4);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#BCAEA4").s().p("AgEgDIACgDIACgCIACAGIADAFIgFAGg");
	this.shape_1601.setTransform(255.9,129.9);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#FDA96F").s().p("AAAAFIAAgFIgDgCIAFgDIABAEIgDAIg");
	this.shape_1602.setTransform(255.3,135.6);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#6B584B").s().p("AAAAAIgBgRQABgBACAVIAAAPIgCABg");
	this.shape_1603.setTransform(258.1,132.6);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#95847D").s().p("AABAXIgBgOIgBgOIgGgOIABgGIAIADIAGAbIgBAOIgEABIgBAHg");
	this.shape_1604.setTransform(257.8,132.5);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#BCAEA4").s().p("AgFABIAFgCIAFgCIABACIgIAFg");
	this.shape_1605.setTransform(254.9,135.2);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#6B584B").s().p("AABAUIgDgLIABgXIgBgFQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQABgBABAIQABAEgCALIABANIAEAJIgBACg");
	this.shape_1606.setTransform(255.2,132.6);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#95847D").s().p("AgMALQgBgLACgOIAEgKIANgFIAFALIACABIAAAFQgCAYgFAJIgEAFIgGAEQgHgOgBgFg");
	this.shape_1607.setTransform(255.2,132.4);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#4E5C6E").s().p("AgGABIAAgCIAEABIAEAAIAEgBIABABIgDACIgHAAg");
	this.shape_1608.setTransform(258.2,142.6);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#4E5C6E").s().p("AgFADIAAgDIADAAIAEAAIADgCIABACIgGADg");
	this.shape_1609.setTransform(255.5,142.7);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#293544").s().p("AgUAMQgBgGACgMIACgMIACgGQADgFAAgDIgBgFIABgEIAHADIAJACIAGgCIACAEIADADIAEAYIACAIIgBASIgCASIAAADIgLAAQgBgWAAgIIABgFIgEgKIgDgIIgDAGIgCAIIgDANIABAPIgCALIgIACQgDgWAAgIg");
	this.shape_1610.setTransform(256.9,138.7);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#2B271C").s().p("AgDAGIgJAAIAAgGIAAAAIABgEIAIgBIAIAGIAHABIABADIgEABIgGAAIgGAAg");
	this.shape_1611.setTransform(259,143.3);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#2B271C").s().p("AgCAGQgFAAgBgCIABgEIAAgDIAHgCIABAEQAEADADABIAAADIgHAAIgDAAg");
	this.shape_1612.setTransform(256,143.4);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#5D4736").s().p("AgNAUIAJguIAJABIAIAXIAAAZIgMAEg");
	this.shape_1613.setTransform(256.7,132.7);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#2B271C").s().p("AADAPIgQgMIAHgLIAKgJIAJAGIgFAcg");
	this.shape_1614.setTransform(254.2,136.2);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#FDA96F").s().p("AgDAJIgDgLIAAgHIAJAGIAAAEIAEACIgCAHg");
	this.shape_1615.setTransform(256.6,129.6);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#FDA96F").s().p("AgCACIACgHIADABIgBAKg");
	this.shape_1616.setTransform(258.1,135);

	this.instance_77 = new lib.CompoundPath_15();
	this.instance_77.parent = this;
	this.instance_77.setTransform(260.6,141.6,1,1,0,0,0,5.4,2.2);
	this.instance_77.alpha = 0.398;

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#FEBF87").s().p("AgFAFQgCgCABgGQAAgDADgCIAGgBIACAEIACACQABADgBAEQgBAEgDACIgEAAg");
	this.shape_1617.setTransform(174.3,221.8);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#FD8A5A").s().p("AgCAAQAAgEACABQAEgBgBAEQABAFgEAAQgCAAAAgFg");
	this.shape_1618.setTransform(174.4,222.7);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#DCA042").s().p("AgKgCIAUgBIABAGIgVACg");
	this.shape_1619.setTransform(174.6,226.3);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#FEBF87").s().p("AgBAEIABgEIABgBIgCAAIAAACIgBgBIAAgBIACgCIADABIABADIgCAAIgBAEg");
	this.shape_1620.setTransform(176,227.9);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#213D60").s().p("AgNAfIgCgNQgBgPACgDIAEgGIAAgHIgDgMIABgFIAMACQAGgBAEgCIADAGIgDAMIgBAFIAFAEQAEAHgEAbQgCACgLAAg");
	this.shape_1621.setTransform(174.6,227.4);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#FEBF87").s().p("AgYAjIgCgDQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAIAJgbQAAgSADgEQABgBAFgCQAEgCAAgCIAAgFIAHgBIABAEQABAEACABIAGABIAFAFQANAQAAADQAAACgJAQIgFABIgBADIgDgBIABgDIACgCIgDAAIgBADIgBgBIABgCIACgDIAFABQAEgBACgNIgLgNIgCADIgWACIgCAPQgBAFgJAQIAAADIACADIAAACg");
	this.shape_1622.setTransform(174.7,226.1);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#FEBF87").s().p("AAGAkQgBgBAAgJIgBgCIAAgEIgHgRIgCgHIgDgJIgDgNIAAgJIALACIAAATIAFAMIACAKIACALIABADIACAHIAAAHg");
	this.shape_1623.setTransform(175.9,231.9);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#FEBF87").s().p("AABAjIAAgOIgEgXIAAgKIgDgWIAKgBIABARIAAAHIABALIgBAKQgBAHABADIACADIAAAMIgDABg");
	this.shape_1624.setTransform(173.9,232);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#9A482E").s().p("AgGAPIgHgFIACgEIgCgGQgBgFABgCQABgCAEgDIADgCIALAAIADADIAEAKIABADIgBAFQAAAFgDABQgCACgIAAg");
	this.shape_1625.setTransform(174.4,221.8);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#231F20").s().p("AgBAFQgDgEABgCQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABQADABAAAEQAAABAAABQAAABgBABQAAAAgBAAQAAABgBAAIgBAAIgBgBg");
	this.shape_1626.setTransform(172.6,229.1);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#231F20").s().p("AgBAJIgCgFIAAgHIAEgFIADAGIAAAEQAAAGgBABIgCAAIgCAAg");
	this.shape_1627.setTransform(176.8,235.3);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#231F20").s().p("AgCAJQgBgBAAgGIAAgEIAFgHIABACIAAAEIABAGQAAAEgCACIgCABIgCgBg");
	this.shape_1628.setTransform(174.4,235.3);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#FEBF87").s().p("AAAACIgDgCIAAgBIAEABIADAAIAAACg");
	this.shape_1629.setTransform(172.6,229.7);

	this.instance_78 = new lib.CompoundPath_14();
	this.instance_78.parent = this;
	this.instance_78.setTransform(178.4,234,1,1,0,0,0,4.9,2);
	this.instance_78.alpha = 0.398;

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#FEBF87").s().p("AgCAIIgDgDQgBgDAAgFQACgEACgBIAFgBIACAEIACACIAAAHQgBAEgDACIgDAAIgCgCg");
	this.shape_1630.setTransform(274.7,118);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#FD8A5A").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_1631.setTransform(274.8,118.9);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#DCA042").s().p("AgKgCIAUgBIACAGIgXABg");
	this.shape_1632.setTransform(275,122.5);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#FEBF87").s().p("AAAADIAAgDIABgBIgBAAIgBABIgCAAIABgBIACgDIADACIABADIgBAAIgCADg");
	this.shape_1633.setTransform(276.4,124.1);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#213D60").s().p("AgNAfIgCgOQgBgOACgDIAEgHIAAgGIgDgNIABgEIALABQAHAAAEgCIADAFIgDANIgBAFIAFAEQAEAHgEAbQgCACgMAAg");
	this.shape_1634.setTransform(275.1,123.6);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#FEBF87").s().p("AgZAjIgDgIIAIgaQABgRADgFQABgBAFgBQADgDABgCIAAgFIAHgCIABAFIACAFIAHAAIAFAFQANAPAAAFQAAAEgJAOQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgBADIgDgBIABgEIABgBIgCAAIgBACIgBAAIABgDIACgCIAFABQAEgCABgMIgKgNIgCADIgWACIgCAOQgCAGgIAQIAAAEIACACIAAACg");
	this.shape_1635.setTransform(275.1,122.3);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#FEBF87").s().p("AAGAkIgBgKIgBgCIAAgFIgEgIIgDgIIgBgHIgFgJIgCgWIALACIAAASQABAEAEAJQACAEABAQIACAEIABAHQACAFgBACIgDgBIgDABIAAAAg");
	this.shape_1636.setTransform(276.3,128.1);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f("#FEBF87").s().p("AABAjQABgKgBgEIgEgXIAAgKIgDgXIAKAAIABARIAAAHIABALIgBAUIACAEIAAALIgDABg");
	this.shape_1637.setTransform(274.3,128.2);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#9A482E").s().p("AgNAKIABgEQgCgKABgEIAFgEIADgCIAFAAIAGAAIADADIAFAKIAAADIAAAEQgCAGgCABQgCABgIABIgGAAQgHgEAAgBg");
	this.shape_1638.setTransform(274.8,118);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#231F20").s().p("AgBAEQgDgCABgDIACgDIACgBQAEACgCAEQAAADgCABIgBABIgBgCg");
	this.shape_1639.setTransform(273,125.3);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#231F20").s().p("AgBAJQgCgCAAgEIAAgGIAEgGIADALQAAAFgBABIgCACIgCgBg");
	this.shape_1640.setTransform(277.3,131.5);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f("#231F20").s().p("AgCAJQgBgBAAgFIAAgFIAFgHIABACIAAAEIABAGIgCAGIgCABIgCgBg");
	this.shape_1641.setTransform(274.8,131.5);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#FEBF87").s().p("AABACIgEgCIAAgBIAEABIACAAIABACg");
	this.shape_1642.setTransform(273,125.8);

	this.instance_79 = new lib.CompoundPath_13();
	this.instance_79.parent = this;
	this.instance_79.setTransform(278.8,130.2,1,1,0,0,0,4.9,2);
	this.instance_79.alpha = 0.398;

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#FEBF87").s().p("AgFAFQgCgDABgFQAAgDADgCIAGgBIACAEIACACQABADgBAEQgCAFgCABIgEAAg");
	this.shape_1643.setTransform(208.9,96);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#FD8A5A").s().p("AgDAAQABgDACgBQADABABADQgBAFgDgBQgCABgBgFg");
	this.shape_1644.setTransform(209,96.9);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#DCA042").s().p("AgKgDIAUgBIACAHIgXABg");
	this.shape_1645.setTransform(209.2,100.5);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#FEBF87").s().p("AgBADIABgDIABgBIgCAAIgBACIgBgBIABgBIACgDIADACIAAADIAAAAIgCADg");
	this.shape_1646.setTransform(210.6,102);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#213D60").s().p("AgNAfIgCgOQgBgOACgDIAEgGIAAgHIgDgNIABgEIAMACQAGgBAEgCIADAGIgDAMIgBAFIAFAEQAEAHgEAbQgCACgLAAg");
	this.shape_1647.setTransform(209.2,101.5);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#FEBF87").s().p("AgYAiIgEgGIAIgbQABgRADgFQABgCAEAAQAFgDAAgCIAAgFIAHgBIABAEIACAFIAHAAIAFAFIAIAKQAFAIAAABQAAAHgJAMIgFABIgCADIgCgBIABgEIABgCIgCAAIgBAEIgBgCIABgCIACgCQAEACABgBQADgCACgNIgKgLIgCACIgXABIgBAPQgCAGgIAQIAAAEIACACIAAABg");
	this.shape_1648.setTransform(209.3,100.3);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#FEBF87").s().p("AAGAkQgBgBAAgJIgBgCIAAgFIgHgQIgCgHIgEgJIgBgNIgBgJIALACIAAATIAGAMIABAKIACAKIABAEIABAHIABAHIgDgBIgCABIgBAAg");
	this.shape_1649.setTransform(210.5,106.1);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f("#FEBF87").s().p("AABAjIAAgOIgEgXIAAgKIgDgWIAKgBIABARIgBAHIACALIgBAKQgBAHABADIACAEIAAALIgDABg");
	this.shape_1650.setTransform(208.5,106.2);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#9A482E").s().p("AgMAKIAAgEIAAgGQgBgGABgCIADgEIAFgCIAKAAIACADIAGAKIAAADIAAAEQgBAFgDACQgCABgIABIgGAAg");
	this.shape_1651.setTransform(209,95.9);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#231F20").s().p("AgBAFQgDgEABgCQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQADABAAAFQAAAEgDAAIgBABIgBgBg");
	this.shape_1652.setTransform(207.2,103.3);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#231F20").s().p("AgBAJIgCgGIAAgGIAEgGIADAHIAAAEQAAAFgBACIgCABIgCgBg");
	this.shape_1653.setTransform(211.4,109.5);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#231F20").s().p("AgBAKQgCgCAAgFIABgFIAEgHIABACIAAAEIABAGQAAAFgCACIgCAAIgBAAg");
	this.shape_1654.setTransform(209,109.4);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f("#FEBF87").s().p("AgDAAIAAgBIAEABIACAAIABACIgDAAg");
	this.shape_1655.setTransform(207.2,103.8);

	this.instance_80 = new lib.CompoundPath_12();
	this.instance_80.parent = this;
	this.instance_80.setTransform(213,108.2,1,1,0,0,0,4.9,2);
	this.instance_80.alpha = 0.398;

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f("#EEBB59").s().p("AgBAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgCAAIgHACg");
	this.shape_1656.setTransform(238.1,136.3);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f("#EEBB59").s().p("AgCAAIgBAAIABgBQACgBAFAEIgHgCg");
	this.shape_1657.setTransform(235.1,136.4);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#FFFFFF").s().p("AgBgCIABABIABADIgBABg");
	this.shape_1658.setTransform(237.7,126);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#DCA042").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_1659.setTransform(237.8,128.2);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f("#DCA042").s().p("AAAACIAAgDIABAAIgBADg");
	this.shape_1660.setTransform(235.7,128.2);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f("#FDA96F").s().p("AgBAAIABgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_1661.setTransform(237.7,122.5);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f("#FDA96F").s().p("AgBAAIABgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_1662.setTransform(236.1,122.5);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgCQAAACgDABIgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_1663.setTransform(236.9,123.5);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#6DB19F").s().p("AABACIgEADIgDgGIADgEIAEAFIAEgFIACAFIgCAFg");
	this.shape_1664.setTransform(236.9,124);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#FDA96F").s().p("AgCAAIADgCIACABIgEAEg");
	this.shape_1665.setTransform(238,125.9);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f("#FDA96F").s().p("AAAABIgCABIgBgDIABgBIAEABIACAEg");
	this.shape_1666.setTransform(236.1,125.3);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f("#443123").s().p("AABADIgIgDIAAgBIAIgDIABADIAFACIAAABIgBABIgCABIgDgBg");
	this.shape_1667.setTransform(238.3,137.1);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#443123").s().p("AgFAEIgBgBIAAgBQADgCABgBIACgCQABgBAHADIAAACIgIADIgDAAIgCAAg");
	this.shape_1668.setTransform(235,137.1);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#403024").s().p("AAFABIgFABIgEgBIgDAGQgBgEAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBQACgCADAAQAJAAAAAFQABAEgCAEQgCgFgBgBg");
	this.shape_1669.setTransform(236.9,121.7);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#FDA96F").s().p("AgCAJQgEgDgBgDIAAgLIAOAAQABAIgBADQgBAEgEACIgCAAIgCAAg");
	this.shape_1670.setTransform(237,122.5);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#FDA96F").s().p("AgEAAIAAgFIAJABIAAAEIgFAGg");
	this.shape_1671.setTransform(236.9,123.5);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#6DB19F").s().p("AgFANIgHgDIANgGIADgEIAAgJIADgEIAEAIQADAKgDAFIgGAEIgDAAIgHgBg");
	this.shape_1672.setTransform(237.7,125.8);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#7BC0B0").s().p("AgLALQgDgCgBgHQgCgIADgEIADgDIAIANIAUAEIgDADIgOAHQgJgBgCgCg");
	this.shape_1673.setTransform(236.4,125.5);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#DB635E").s().p("AgEAVIABgjIACgFIgDgDIAEgCIADADIgDACIACAFIADAkIgFADg");
	this.shape_1674.setTransform(237.1,126.6);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#3E5665").s().p("AgNAAIAAgCIAOABIAMgBIABACIgOADg");
	this.shape_1675.setTransform(236.8,128.3);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#8DD2CA").s().p("AgOAVQgDgCAAgEIABgIIgEgIQgBgJADgEIAFgEIAHgCIADgEIADAGIAFgGIACAGIAJAEIAEAIQACALgCAFIgGADIgCAJIgOADg");
	this.shape_1676.setTransform(236.9,125.9);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#EEBB59").s().p("AAIAYQgCgEgBgMQgCgKgCgDIgBgBIAAABQgDAFgEATQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBIgBgRQAAgLABgGIABgDIAFgCIACgDIgDgBIASAAIgEABIACADIAFACIABAFQADASgEARQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAAAgKIACAAIABgMIgDAAg");
	this.shape_1677.setTransform(236.8,130.7);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#DCA042").s().p("AgNAsIgEgDIgCgCIACgCIABglQgBgaACgJIAEgJIAaAAIADAKIABBGIABACIgBADQgBABgEABQgDABgCgBQgDgCgCgSQACgXgCgIQAAgIgCgCIgCACQgBAJgBAMIgCASIAAALQgBAIgDACIgCABIgDgBg");
	this.shape_1678.setTransform(236.6,132.6);

	this.instance_81 = new lib.Path_2();
	this.instance_81.parent = this;
	this.instance_81.setTransform(240.2,135.1,1,1,0,0,0,5.4,2);
	this.instance_81.alpha = 0.398;

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#263C48").s().p("AgBAAIAAAAIACAAIABABg");
	this.shape_1679.setTransform(288,153.7);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#263C48").s().p("AgDABIAAgBIAHAAIgBABg");
	this.shape_1680.setTransform(290.2,154);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#FDA96F").s().p("AgFASIAAgDIAAgDIAAgBIAAABIgBAEIAAABIgBABIAAgDIAAgDIADgGIABgCIAFgVIAGAAIAAAFQgBAFgGALIABADIgBADIgBACIAAADIgBABIAAgCIAAgCIAAgBIAAABIgBADIAAACIgBAAIAAgCIAAgDIAAgBIAAABIgBAEIAAACg");
	this.shape_1681.setTransform(289.7,155.9);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#263C48").s().p("AAEgBQgCgCgIAAIgBAKIgBgKIgBgDIgBgBIAHAAQAHAAABgBQACgBADgFIABAbIgFACQAAgOgCgCg");
	this.shape_1682.setTransform(288.9,153.4);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#263C48").s().p("AgGABIABgBIgBAAIACgDIABgBIABADIgDAGIAJgHIABgFIADADIgBAEIgDABIABADIgMAEg");
	this.shape_1683.setTransform(289.1,151.3);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgCQAAADgDAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1684.setTransform(289.2,150.8);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_1685.setTransform(287.5,157.3);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#FDA96F").s().p("AgBAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAg");
	this.shape_1686.setTransform(290,149.6);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1687.setTransform(288.3,149.6);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#231F20").s().p("AAAAAQgDAGgFAAQAAgMAIAAQAEAAACAEQADADgBAGQgGgDgCgEg");
	this.shape_1688.setTransform(289.2,148.7);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#3E5665").s().p("AgGAVIgGgBIABgGIAAgMIgDgDIADgGIACgGIAFgGIABADIgFAJIAKgKIACgEIAJAIIACAIIgCASIgFAAQgBAGgBABQgEACgEAAIgEgBg");
	this.shape_1689.setTransform(289.3,152.8);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#3E5665").s().p("AgBAVQAAgXgBgHIgCgLIAGAAIACALQAAAHAAAXg");
	this.shape_1690.setTransform(290.1,156.8);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#576977").s().p("AABAVIgKgCIgEgCIAAgVIACgQIAWAAIACALQABAHAAAXIgIAAIgFAAg");
	this.shape_1691.setTransform(289.1,156.8);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#FDA96F").s().p("AgFAIQgCgEAAgEQAAgFACgEQACgCADAAQADAAADACQACAEAAAFQAAAEgCAEQgDAFgDAAQgDAAgCgFg");
	this.shape_1692.setTransform(289.2,149.5);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#FDA96F").s().p("AgEANQgDgGABgDIAGgHIAAgJIAIAAIAAAQIgFAAIAAAJg");
	this.shape_1693.setTransform(288.9,151.6);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#FEBF87").s().p("AACAcIABgEIAAgOQgDgKgCgLIgGgIIgBgIIAJABIACAGIAEALIABAKIABALIABACIgBAEQAAAIgCACg");
	this.shape_1694.setTransform(290.4,161.4);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#FEBF87").s().p("AgGAcQADgGAAgDQABgFgBgOIAAgVIAAgHIAKADIAAASIgFAWIAAAEQgBAHgDADg");
	this.shape_1695.setTransform(288.3,161.3);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#231F20").s().p("AgEAIIgCgBIADgDIAIgMIACACIgBAJIgBAAIAAgEIgBADQgBAFgDABIgCABIgCgBg");
	this.shape_1696.setTransform(288,163.8);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#231F20").s().p("AgDAKIgBgBIAFgSIABAAIACABQABABAAAEIAAAEIgBAAIgBgEQAAAGgBACQAAAEgCABIgBAAIgCAAg");
	this.shape_1697.setTransform(291,163.7);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f("#BD3A3A").s().p("AgJgOIAMAAIAKAEIgBAYIgYABg");
	this.shape_1698.setTransform(287.5,159.3);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f("#231F20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1699.setTransform(289.2,148.2);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f("#BD3A3A").s().p("AgDACIABgEIAFAAIAAACIgDAAIAAACg");
	this.shape_1700.setTransform(287.6,157.6);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f("#3E5665").s().p("AgBAFIABgKIABABIABAJg");
	this.shape_1701.setTransform(288,153.2);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f("#FDA96F").s().p("AgCAYIgBgGIABgDIADgmIADAEIgCArg");
	this.shape_1702.setTransform(287.8,155.1);

	this.instance_82 = new lib.CompoundPath_11();
	this.instance_82.parent = this;
	this.instance_82.setTransform(291.7,162.3,1,1,0,0,0,5.5,2.1);
	this.instance_82.alpha = 0.398;

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAg");
	this.shape_1703.setTransform(261.1,81.3);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#FDA96F").s().p("AAAAAIAAAAIABABIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_1704.setTransform(261,81.2);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f("#FDA96F").s().p("AAAAAIAAAAIABAAIAAAAIAAABIgBgBg");
	this.shape_1705.setTransform(260.9,81.1);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_1706.setTransform(260.8,80.9);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f("#D09335").s().p("AAAAAIAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_1707.setTransform(260,86.3);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f("#D09335").s().p("AAAAAIAAgBIABABIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1708.setTransform(260,84.8);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f("#D09335").s().p("AgCAAIABgCIAEADIAAABg");
	this.shape_1709.setTransform(260.7,87);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f("#D09335").s().p("AgEABIAIgDIABACIgIACg");
	this.shape_1710.setTransform(258.7,87);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f("#D09335").s().p("AgFABIABgCIgEAAIgBgIIAFgCIAIARIABgPIAFAEIgCADIACACIgFANg");
	this.shape_1711.setTransform(259.5,83);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f("#FDA96F").s().p("AgDADIAAgCIAAgEIAGgBIABAFIgBAEg");
	this.shape_1712.setTransform(257.4,88.2);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f("#6DB19F").s().p("AgCABIAEgDIABABIgEAEg");
	this.shape_1713.setTransform(261.3,82.3);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f("#403024").s().p("AADADIABgDIgHAAIgBABIgCAAIACgEIALACIgBAFg");
	this.shape_1714.setTransform(257.4,88.6);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f("#403024").s().p("AAJADIgZgEIAJgBIAZAFg");
	this.shape_1715.setTransform(257.4,88.9);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f("#403024").s().p("AgDgPIAIAAIgBAeIgIABg");
	this.shape_1716.setTransform(258.6,90.7);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f("#6C5549").s().p("AgNALIACgcIAZAFIgBAeg");
	this.shape_1717.setTransform(256.9,90.5);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f("#6DB19F").s().p("AgDgBIAHAAIAAACIgGABg");
	this.shape_1718.setTransform(257.3,87.6);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f("#92251B").s().p("AgGAHIgDgHQAAgEAEgEQACgCAEAAQAGABACACQABABgBAEIgEABIgFgBQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAIgBACIgBgBQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAIgBAEIAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBg");
	this.shape_1719.setTransform(259.6,80.1);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f("#FFFFFF").s().p("AgBAAIABgBIgCgBIACgEIADADIgCADIABAAIAAAHg");
	this.shape_1720.setTransform(259.8,82.8);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f("#6DB19F").s().p("AgEgHIACgCIAFAEIACgCIAAACIAAAPg");
	this.shape_1721.setTransform(259.5,82.5);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f("#D09335").s().p("AAAALIgEgCIgCgUIAFAHIABAIQABADAEADIACACIgDAAIgEgBg");
	this.shape_1722.setTransform(261.5,83.7);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f("#D09335").s().p("AgCAZIgBgJIADgbIAAgGQAAgGACgBQADAAgBAIIgBAKQAAAHgEAYg");
	this.shape_1723.setTransform(258.1,85.8);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#FDA96F").s().p("AAAALIgBgBIgCgGQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBACIgCgCQgBgCABgGIAAgHIAPACIAAAGIAAACIAAAFQgCAFgCACIgCAAIgCAAg");
	this.shape_1724.setTransform(259.7,80.6);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f("#FD8A5A").s().p("AgDADIAAgIIAIADIgCACIAAAFIgCABg");
	this.shape_1725.setTransform(259.7,81.3);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#122A43").s().p("AAAAFIgEgHIABgCIACgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFAHQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgCABIgBAAIgBgBg");
	this.shape_1726.setTransform(260.5,81.3);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f("#213D60").s().p("AAAAGIgEgIQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACgBIABAAIAAABIAFAHQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIgBAAIgBAAg");
	this.shape_1727.setTransform(260.7,81.2);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f("#EEBB59").s().p("AAAAiIgTgCIAAgJIgJAAIAAgSIAGggIAFgBIAKgFIAJASIABgPIAIAFIAFAIIgCgIIAEgEIAFAHQAFAGABAEQABADgBADIgEAFIgMgDIACAkIgJABIgDgIIgCAJg");
	this.shape_1728.setTransform(259.7,85.1);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f("#2B5785").s().p("AAJATQgCgCgBgLIgCgLIAFgDIgHACIgDgBIgEAOIgHACIgBgWIABgBIADgFIATABIACAFIABABIABAMQABAQgDAEIgBAAIgCgBgAACgRIgBAIIADgBIAAgHg");
	this.shape_1729.setTransform(259.4,90.1);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f("#213D60").s().p("AAHAkIgBgCIAAgDQABgFAAgDIgCgFIAAgXIgBgSIgDAAIgHAtIAAAFIAAAKIgCACIgFAAIgEgCIgCgDIABgCIAAgMIAEg7IAgAAIgBA6IACAHIAAALIgLADg");
	this.shape_1730.setTransform(259.2,91.9);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f("#6DB19F").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_1731.setTransform(260,87.6);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f("#443123").s().p("AABAFIgKgEIAAgCIAKgDIAIAGQAAABAAAAQABAAAAABQgBAAAAAAQAAABgBAAg");
	this.shape_1732.setTransform(261,96);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f("#443123").s().p("AgDAHIgBgEIAAgKIAHAEQADAHgCACIgDABIgBABIgDgBg");
	this.shape_1733.setTransform(258,96.2);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f("#FDA96F").s().p("AAAAGQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBgBAAAAIgCgDIABAAIADABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBIgDgDIAAgBIADgBQACABACAEIABAFIACADIgEAEg");
	this.shape_1734.setTransform(260.9,81.7);

	this.instance_83 = new lib.CompoundPath_10();
	this.instance_83.parent = this;
	this.instance_83.setTransform(263.4,94.7,1,1,0,0,0,7,2.3);
	this.instance_83.alpha = 0.398;

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#2E211A").s().p("AAAgBIAAAAIABADIgBAAg");
	this.shape_1735.setTransform(142.8,184);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#2E211A").s().p("AAAABIAAgCIABAAIAAADg");
	this.shape_1736.setTransform(141.3,184);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#FEBF87").s().p("AgDAAIAEgDIAEACIgBABIgDAAIgCAEg");
	this.shape_1737.setTransform(140.4,184.6);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#FEBF87").s().p("AgBAAIgDABIgBgBIADgDIACgBIAGAEIgDAEg");
	this.shape_1738.setTransform(143.7,184.5);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#3C4A65").s().p("AgEASIAAgaIADgIIgCgCIADgDIACABIgCADIADAIIACAbIgFAEg");
	this.shape_1739.setTransform(141.9,181.4);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#FFFFFF").s().p("AgHAAIACgDIAFACIAFgDIADADIgCAEIgGgDIgEAFg");
	this.shape_1740.setTransform(141.9,179.2);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGAEIgDAFg");
	this.shape_1741.setTransform(144.2,183.9);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#FFFFFF").s().p("AgEgCIAIgCIABAFIgGADg");
	this.shape_1742.setTransform(140,184.2);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#CCDDEE").s().p("AAAATIACgFIAAgNIgDgJIgBANIABAKIgCABIgBgMIABgMQACgLABAAQAAAAAAABQAAAAAAAAQAAABAAABQAAABABABIAAAGIAEAIIgBAOIgDAGg");
	this.shape_1743.setTransform(143.8,182.1);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#CCDDEE").s().p("AgDAKIADgQQgCgMABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIACAFQABADAAAGIgBAIIAAAIIgCgBIABgQIgBgEIgBAKIAAAPIgCABg");
	this.shape_1744.setTransform(140.5,182.4);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#E3EFFC").s().p("AgYAZIgCgPIABgHQgBgRADgEQACgCAFgDIAFgCIAPgCIAGABQAGACACACQADADADAKIADAMQABAHgEAIIgDAIIgEgCIADgGIABgPIgEgHIgBgGQAAgBAAgBQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgCALIgBAMIABAMQgGADgGgBIgMgCIAAgHIABgJQAAgGgBgCIgCgFQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABACALIgDARIABAJIgDACg");
	this.shape_1745.setTransform(142.2,181.7);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#FDA96F").s().p("AAAADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAgBAAIAAAAg");
	this.shape_1746.setTransform(142.6,177.6);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIAAAAIgBgDg");
	this.shape_1747.setTransform(140.9,177.6);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#403024").s().p("AAHABIgHAAIgGABIgCAGIgBgIQAAgHAIAAQAKAAABAHQAAAEgCAEQABgGgCgBg");
	this.shape_1748.setTransform(141.8,176.7);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#FDA96F").s().p("AgCAJQgEgBgBgEIAAgNIAPAAQABAJgCAEQgBAEgEABIgCABIgCgBg");
	this.shape_1749.setTransform(141.8,177.7);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#FD8A5A").s().p("AgDABQAAgBgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAEAEAFgEQAAAEgEABIAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_1750.setTransform(141.8,178.7);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#FEBF87").s().p("AgFACIAAgEIAKgBIAAADIgFADg");
	this.shape_1751.setTransform(141.8,178.7);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f("#645858").s().p("AgIACIgHgCIABgCIAdAAIABACQgIADgIAAIgIgBg");
	this.shape_1752.setTransform(142.1,184);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f("#2E211A").s().p("AgUAoIgBgCIACgCIgCgEQgBgCAAgHIABgKIABgIIAAggIAFgNIAcAAIAEAOIAFA3IgBAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAABABAAIgCAEIgJAAIgCgDIACgDIgCgDIgBgJIgBgKIgGghIgHAAIgDAZIAAAOQABAKgCADIgCACQAAACACADIgCAEg");
	this.shape_1753.setTransform(142.3,187.8);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f("#645858").s().p("AAAAFQgBAAgEgFIAAgFIAHAAIADAGIAAADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_1754.setTransform(144.1,192.1);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f("#645858").s().p("AgFAEIAAgCIACgGIAIAAIAAAEQgBADgCABIgDABIgEgBg");
	this.shape_1755.setTransform(140.6,192.2);

	this.instance_84 = new lib.CompoundPath_9();
	this.instance_84.parent = this;
	this.instance_84.setTransform(145.6,190.5,1,1,0,0,0,5.1,2.1);
	this.instance_84.alpha = 0.398;

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f("#2E211A").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_1756.setTransform(302.7,25.8);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#2E211A").s().p("AAAABIAAgCIABAAIAAADg");
	this.shape_1757.setTransform(301.1,25.8);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#FEBF87").s().p("AgEAAIAFgDIADADIAAAAIgDAAIgCAEg");
	this.shape_1758.setTransform(300.3,26.3);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#FEBF87").s().p("AgBAAIgDAAIgBAAIADgCIACgBIAGADIgDAFg");
	this.shape_1759.setTransform(303.5,26.3);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f("#3C4A65").s().p("AgEASIAAgaIADgIIgCgCIACgDIADACIgCACIADAJIACAaIgFAEg");
	this.shape_1760.setTransform(301.8,23.2);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f("#FFFFFF").s().p("AgHAAIACgCIAFABIAFgDIADACIgCAGIgGgEIgEAFg");
	this.shape_1761.setTransform(301.8,21);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGAEIgEAFg");
	this.shape_1762.setTransform(304.1,25.7);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f("#FFFFFF").s().p("AgDgBIAHgDIABAEIgGAFg");
	this.shape_1763.setTransform(299.9,25.9);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f("#CCDDEE").s().p("AAAATIACgFIAAgNIgDgKIgCAOIABAKIgBABIgBgLIAAgOQACgKACAAQABAAAAAKIAEAJQABACgCAMIgDAFg");
	this.shape_1764.setTransform(303.7,23.9);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f("#CCDDEE").s().p("AgDAKIADgQQgCgLABgBQABgBADAIQABADAAAGIgBAJIAAAHIgCgBIAAgFIABgLIgBgEIgBAKIAAAQIgCAAg");
	this.shape_1765.setTransform(300.4,24.1);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f("#E3EFFC").s().p("AgYAZIgCgOIABgIQgBgRADgEQACgCAFgDIAFgCIAPgCIAGACQAGABACACQADADADAKIADANQAAAFgDAKIgDAHIgFgCIADgGQACgLgBgEIgDgHQgBgKgCAAQgBAAgCAKIgBANIABALQgGADgGgBIgMgCIAAgHIABgJQAAgGgBgCQgEgJgBABQgBABACALIgDARIABAJIgDACg");
	this.shape_1766.setTransform(302.1,23.5);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIABACQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAg");
	this.shape_1767.setTransform(302.5,19.4);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f("#FDA96F").s().p("AAAAAQgBAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_1768.setTransform(300.7,19.4);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f("#403024").s().p("AAHABIgNAAIgCAHIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQAAgHgBAAg");
	this.shape_1769.setTransform(301.7,18.5);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f("#FDA96F").s().p("AgBAKQgFgDgBgDQgBgCABgGIAAgFIAPAAQABAKgBADQgBADgEADIgDAAIgBAAg");
	this.shape_1770.setTransform(301.6,19.5);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_1771.setTransform(301.7,20.4);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f("#FEBF87").s().p("AgEACIAAgEIAJgBIAAADIgFADg");
	this.shape_1772.setTransform(301.7,20.5);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f("#645858").s().p("AgJABIgFgBIABgCIAbAAIABACQgIADgGAAIgKgCg");
	this.shape_1773.setTransform(302,25.7);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f("#2E211A").s().p("AgUAoIgBgDIACgCIgCgDQgCgEACgOIABgJIAAggIAFgNIAbAAIAFAOIAFA3IgBAEIACACQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAIgJAAIgCgDIACgDIgCgDIgBgJIgBgKIgGggIgHAAIgDAYIAAAOQABAJgCAEIgCACQAAABACAEIgDAEg");
	this.shape_1774.setTransform(302.2,29.5);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f("#645858").s().p("AAAAGQgDgDgBgDIAAgFIAHAAIACAGIAAADQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_1775.setTransform(303.9,33.9);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f("#645858").s().p("AgFAEIAAgCIADgHIAHAAIAAAFQAAACgCACIgEACQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1776.setTransform(300.4,34);

	this.instance_85 = new lib.CompoundPath_8();
	this.instance_85.parent = this;
	this.instance_85.setTransform(305.5,32.3,1,1,0,0,0,5.1,2.1);
	this.instance_85.alpha = 0.398;

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgHIgCgKIAAgLIADAAIACASIACAGIAAAEIgBADIABAAIAAACgAABAMIABACIAAgDIgBgBg");
	this.shape_1777.setTransform(112.9,253.4);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f("#83582C").s().p("AgOASQgBgCABgDIACgHIgBgGIADgKQACgHAHgCIAHABQACABACAFIACAFQADAEABAEQAAADgBAIQAAAEgCACQgCADgDgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgFACgFQACgDgBgFIAAgFIgMAAIgBAFQAAAFACAEIAAADQACAIgBABQgCACgEAAQgEAAgCgCg");
	this.shape_1778.setTransform(114.4,246.8);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f("#FEBF87").s().p("AgFAFQgCgEABgEIABgEIAMAAIABAEQAAAFgCADQgCAEgDAAQgCAAgEgEg");
	this.shape_1779.setTransform(114.5,246.7);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f("#FDA96F").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_1780.setTransform(114.5,247.2);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f("#FEBF87").s().p("AgFAEIgBgFIACAAIABgIIAIAAIAAAIIACAAQAAALgHAAQgDAAgCgGg");
	this.shape_1781.setTransform(114.5,247.9);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f("#FEBF87").s().p("AgCASIACgCIAAgEIAAAAIgBAEIgCAAIABgIIACgFIAAgOIAAgHIADAAIABAeIgBAEIgEADg");
	this.shape_1782.setTransform(116.5,253.3);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAQAAQgBAQgHAAIgBABQgIAAgCgQg");
	this.shape_1783.setTransform(114.5,248.6);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f("#B6D876").s().p("AgOAhIgCgKIACgQIABgnIACAAQACARAJgBQAHgBAAgQIADABIABAQIAGApQAAAFgCAEg");
	this.shape_1784.setTransform(114.7,251.2);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f("#645858").s().p("AAAAhIgBgIIABgUIgDAAIAAgQQAAgNACgDIAFgFIgDA2IACALg");
	this.shape_1785.setTransform(112.9,251.2);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f("#645858").s().p("AgFgcQAFABABADQACADABANIACAOIgEABIABAGIgBAQg");
	this.shape_1786.setTransform(116.2,250.8);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f("#3C4A65").s().p("AgIAgQgFgRAAgHIABgMIgEgXIAAgEIAhAAIAAAFIgCAUIABAQQAAAHgEAOIgDABIgDgCIgBgQIACgJIgCgGIgCgaIgDAAIgCASIgBAOIACAaIgCABIgCAAIgDAAg");
	this.shape_1787.setTransform(114.7,257.1);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f("#DCA042").s().p("AgCAIIgCgDIADgNIAFABIgBAFIACAHIgCADQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgBg");
	this.shape_1788.setTransform(115.5,261);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f("#DCA042").s().p("AgFAIQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAFgEABgDIAAgFIAGgBIABAMIgCABIgCAAIgDADIgCABIgDgBg");
	this.shape_1789.setTransform(113.8,261);

	this.instance_86 = new lib.CompoundPath_7();
	this.instance_86.parent = this;
	this.instance_86.setTransform(118.7,259.5,1,1,0,0,0,5,2.4);
	this.instance_86.alpha = 0.398;

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgGIgCgLIAAgLIADAAIACASIACAGIAAAEIgBADIABABIAAABg");
	this.shape_1790.setTransform(122.6,200.8);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f("#83582C").s().p("AgNASQgDgDACgDIACgHIgBgFIADgJQADgJAGgBIAHABQADABABAEIADAGQACADABAFIgBAKIgCAHQgCACgDgCIgCgEQAAgHABgDQACgDgBgFIAAgEIgMAAIAAAEQgBAGADADIAAAEIABAEQAAABAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBACgEAAQgEAAgCgCg");
	this.shape_1791.setTransform(124.1,194.3);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f("#FEBF87").s().p("AgFAFQgCgEAAgEIACgFIALAAIACAGQAAAFgCACQgCADgDAAIgBABQgCAAgDgEg");
	this.shape_1792.setTransform(124.2,194.2);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f("#FDA96F").s().p("AgGAAQABAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQABAGgHAAQgFAAgBgGg");
	this.shape_1793.setTransform(124.3,194.6);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f("#FEBF87").s().p("AgGAEIAAgFIACAAIAAgIIAIAAIABAIIADABQAAAKgIAAQgDAAgDgGg");
	this.shape_1794.setTransform(124.3,195.4);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f("#FEBF87").s().p("AgCASIACgDIAAgDIAAAAIgBAEIgCgBIABgHIACgFIAAgOIAAgHIACAAIACAfIgCADIgDADg");
	this.shape_1795.setTransform(126.3,200.8);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAPAAIABABQgBAPgIABIAAAAQgIAAgCgQg");
	this.shape_1796.setTransform(124.2,196.1);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f("#B6D876").s().p("AgPAhIgBgLIADg2IACgBQACARAJAAQAHgBABgQIACAAIAAARIAHApQAAAFgBAEg");
	this.shape_1797.setTransform(124.5,198.7);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f("#645858").s().p("AAAAgIgBgIIABgTIgDAAIAAgQQAAgNACgEQABgCAEgCIgDA2IABALg");
	this.shape_1798.setTransform(122.6,198.7);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f("#645858").s().p("AgEgdQAEADACACQABACABANIABAPIgDAAIABAIIgBAQg");
	this.shape_1799.setTransform(126,198.3);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f("#3C4A65").s().p("AAFAeIAAgQQACgGgBgDIgBgGIgBgZIgFgBIgBASIgBAOIABARIABAIIgCACIgFAAQgEgSgBgGIABgMIgEgXIABgEIAfAAIABAFIgCAUIABAQIgDAVIgEABg");
	this.shape_1800.setTransform(124.4,204.6);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f("#DCA042").s().p("AgCAIQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIABgJIACgEIAFABIgBAIIABAEIgBADIgDABIgCgBg");
	this.shape_1801.setTransform(125.3,208.5);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f("#DCA042").s().p("AgFAHQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAFgEABgEIAAgEIAGgBIABALIgCACIgCAAIgDADIgCABIgDgCg");
	this.shape_1802.setTransform(123.5,208.5);

	this.instance_87 = new lib.CompoundPath_6();
	this.instance_87.parent = this;
	this.instance_87.setTransform(128.5,206.9,1,1,0,0,0,5.1,2.4);
	this.instance_87.alpha = 0.398;

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f("#FEBF87").s().p("AAAARIgCgFIABgGIgCgLIAAgLIADAAIACASIACAGIAAAEIgBADIABABIAAABgAABAMIABACIAAgDIgBgBg");
	this.shape_1803.setTransform(291.4,133);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f("#83582C").s().p("AgOASQgCgCACgEIACgHIgBgFIADgKQACgIAHgBIAHABQACACACADIACAHQADAEAAADQABAEgBAHQAAADgCAEQgDACgCgCQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBgBAAgBQgBgGACgEQACgDgBgFIAAgEIgMAAIgBAFQAAAEACAEIAAAEQACAIgBABQgCACgEAAQgEAAgCgCg");
	this.shape_1804.setTransform(292.9,126.5);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f("#FEBF87").s().p("AgFAFQgCgEAAgEIACgEIAMAAIABAFQAAAFgCACQgCADgDAAIgBAAQgCAAgDgDg");
	this.shape_1805.setTransform(293,126.4);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f("#FDA96F").s().p("AgFAAQgBgFAGAAQAGAAABAFQgBAGgGAAQgGAAABgGg");
	this.shape_1806.setTransform(293.1,126.8);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f("#FEBF87").s().p("AgFAEIgCgFIADAAIABgIIAIAAIAAAIIACABQAAAKgHAAQgEAAgBgGg");
	this.shape_1807.setTransform(293.1,127.6);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f("#FEBF87").s().p("AgCASIACgDIAAgDIAAAAIgBAEIgCgBIABgHIACgFIAAgOIAAgHIADAAIABAfIgBADIgEADg");
	this.shape_1808.setTransform(295.1,133);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f("#F2F2FA").s().p("AgJgHIADgBIAPAAIABABQgBAPgIABIAAAAQgIAAgCgQg");
	this.shape_1809.setTransform(293,128.3);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f("#B6D876").s().p("AgOAhIgCgKIACgRIABgmIACgBQABARAKAAQAHgBAAgQIADAAIABARIAGApQAAAFgCAEg");
	this.shape_1810.setTransform(293.3,130.9);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f("#645858").s().p("AAAAhIgBgIIABgUIgDAAIAAgQIAAgHIACgKQABgCAEgCIgBAmIgCARIACAKg");
	this.shape_1811.setTransform(291.4,130.9);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f("#645858").s().p("AgFgcQAFACABABQACADABAOIACAPIgEAAIABAHIgBAPg");
	this.shape_1812.setTransform(294.8,130.5);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f("#3C4A65").s().p("AAGAeIgBgQIACgJIgDgHIgBgYIgEgBIgBASIgBAOIACAZIgDACIgEAAQgEgSgBgHIAAgLIgDgYIAAgDIAhAAIAAAFIgCAUIABARIgEAUIgDABg");
	this.shape_1813.setTransform(293.2,136.8);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f("#DCA042").s().p("AgCAIIgCgDIADgNIAFABIgBAIIABAEIgBADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgCgBg");
	this.shape_1814.setTransform(294.1,140.7);

	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f("#DCA042").s().p("AgFAHQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAGgFAAgCIAAgFIAGgBIABAMQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgCAAIgDADIgCAAIgDgBg");
	this.shape_1815.setTransform(292.3,140.7);

	this.instance_88 = new lib.CompoundPath_5();
	this.instance_88.parent = this;
	this.instance_88.setTransform(297.3,139.2,1,1,0,0,0,5.1,2.4);
	this.instance_88.alpha = 0.398;

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f("#8DD2CA").s().p("AAEAKIgIgSIABgBIAIATg");
	this.shape_1816.setTransform(192.7,213.6);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f("#BD3A3A").s().p("AgIgCIgCgBIADgGIAEAGQADACALgCQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgKAAgCAAIAAAJIgDABg");
	this.shape_1817.setTransform(194.2,211);

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f("#FFFFFF").s().p("AAAAAIABAAIAAAAIgBABg");
	this.shape_1818.setTransform(195.7,210.5);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f("#FFFFFF").s().p("AgDAAIAAgCIAHADIgBACg");
	this.shape_1819.setTransform(192.9,210.6);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f("#FFFFFF").s().p("AgEADIABgCIgCAAIgBgFIACgCIAGAKIABgKIAEADIgCADIABABIgDAGg");
	this.shape_1820.setTransform(194.4,209.4);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f("#FDA96F").s().p("AADAPIgCgEQgKgLgBgFIAAgHIABgGIAHADIgDAIIAJAQIAGABIACABIAAABIgDAAIgBABQABAAAAABQABABAAAAQAAABAAAAQAAAAAAAAIAAAAIgBAAIAAABIgBAAIAAgBIAAABIgBABIgBgBIABABIgBAAg");
	this.shape_1821.setTransform(193.5,212.5);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f("#FDA96F").s().p("AgEAKIABgBIABgBIABAAIgBAAIgBABIgBAAIAAAAIAAgBIABgBIgBAAIgBABIAAAAIABgBIABgCIABAAIAAAAIgBAAIgBABIgBABIAAgBIABgBIABgCIACAAIACABIACgBIgBgIIABgDIACgBQACAMgCAEQAAABgEABIgBAAIgCAAIgBABg");
	this.shape_1822.setTransform(195.3,211.5);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f("#9A482E").s().p("AgIAQQgEgEAAgJQAAgLACgEQADgFAFgBQAFgBAFAEQADADABAJQABAIgBAEQgBAGgFAAQACgEgBgHIgBgIIgDgEIgCgEIgBAEQgCADgEADIAAAQIADAFQgDAAgCgDg");
	this.shape_1823.setTransform(194.4,208.2);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f("#FDA96F").s().p("AgEAGQgCgDAAgEQAAgIAGAAQAHAAAAAIQAAAEgCADQgCAEgDAAQgCAAgCgEg");
	this.shape_1824.setTransform(194.4,207.7);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f("#6DB19F").s().p("AgRgCIAZgOIAKATIgaAOg");
	this.shape_1825.setTransform(194.1,212.9);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f("#DB635E").s().p("AgFATIgDgTIgBACIgGgDIAEgNIAJgEIAHAKIABgKIAIAFQACACAAAJIgCACIgBADIABAQg");
	this.shape_1826.setTransform(194.2,210.7);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f("#122A43").s().p("AgBAWIgDgXIAEgVIAFAAIgDAJQgCAKAAADIACAXg");
	this.shape_1827.setTransform(193.5,214.7);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f("#213D60").s().p("AgKAWIgCgXIAFgVIASAAIACAUIgBAWQgFADgIAAg");
	this.shape_1828.setTransform(194.3,214.7);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f("#FD8A5A").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_1829.setTransform(194.3,209.1);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f("#FEBF87").s().p("AACAaQgCgDgCgGIABgHIgDgSIABgHIgBgJIAIgCIAAAsIABAIIgBABIgCgBg");
	this.shape_1830.setTransform(193.8,219.1);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f("#FEBF87").s().p("AACAaQgDgDgBgGIABgHIgDgSIABgHIgBgJIAJgCIgBAsIABAIIgCABIgBgBg");
	this.shape_1831.setTransform(194.9,219.1);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f("#DB635E").s().p("AADAJQgDAAgBgDIgCgHIgBAEIAAAAIgBgJIACgDIAHAMQADAEgBABIgBACIgCgBg");
	this.shape_1832.setTransform(194,221.5);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f("#DB635E").s().p("AADAJQgDAAgBgDIgDgHIAAAEIAAAAIgBgGIAAgEIABgBIABgBIAGAMQADAEAAABIgBACIgCgBg");
	this.shape_1833.setTransform(195.1,221.5);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f("#6C2615").s().p("AgIAKIAAgTIASAAIAAATg");
	this.shape_1834.setTransform(194.4,208.3);

	this.instance_89 = new lib.CompoundPath_4();
	this.instance_89.parent = this;
	this.instance_89.setTransform(198.2,220.1,1,1,0,0,0,4.7,2);
	this.instance_89.alpha = 0.398;

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f("#8DD2CA").s().p("AAEAKIgIgSIAAgBIAJATg");
	this.shape_1835.setTransform(280.7,105.4);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f("#BD3A3A").s().p("AgIgDIAAABIgBAAIADgHIADAGQADACALgBQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAAAQgCAAgFAAIgGAAQAAABAAAAQAAAAAAABQAAAAAAABQgBABAAABIAAADIgCACg");
	this.shape_1836.setTransform(282.2,102.8);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f("#FFFFFF").s().p("AgBAAIACgBIABABIgCACg");
	this.shape_1837.setTransform(283.6,102.2);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f("#FFFFFF").s().p("AgDAAIAAgBIAHACIgBABg");
	this.shape_1838.setTransform(280.9,102.4);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f("#FFFFFF").s().p("AgDADIAAgCIgCAAIAAgFIACgCIAFAKIACgKIACADIgBADIAAABIgCAGg");
	this.shape_1839.setTransform(282.4,101.1);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f("#FDA96F").s().p("AADAPIgCgEQgKgLgBgFIAAgIIABgFIAGADIgCAJIAJAPQABABAEAAIADABIgBABIgDAAQABABAAABQAAAAAAABQABAAAAABQAAAAAAAAIgBABIAAgBIAAABIgBAAIgBAAIABABIgBAAIgBgBIAAABIgBABg");
	this.shape_1840.setTransform(281.5,104.2);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f("#FDA96F").s().p("AgDAKIAAgBIACgBIAAAAIgCABIgBABIgBgBIABgBIACgBIABgBIAAAAIgBAAIgCACIgBAAIAAAAIABgCIABgBIABAAIAAgBIgBABIgBABIgBAAIgBAAIACgBIABgCIACAAIACABIACgBIgBgIIABgCIADgCQACAMgCAEIgFADIgBgBIgBABIgCAAg");
	this.shape_1841.setTransform(283.2,103.2);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f("#9A482E").s().p("AgJARQgDgFAAgIQAAgLACgFQADgFAFgBQAGgBADAEQADADADAJQABAIgBAFQgDAGgEAAQACgFgBgHIgBgIQgCgBgBgDIgCgEIgBAEIgFAGIgBAGQAAAIABADIACAEQgEAAgCgCg");
	this.shape_1842.setTransform(282.4,99.9);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f("#FDA96F").s().p("AgEAGQgCgDAAgEQAAgIAGAAQAHAAAAAIQAAAEgCADQgCAEgDAAQgCAAgCgEg");
	this.shape_1843.setTransform(282.3,99.4);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f("#6DB19F").s().p("AgRgCIAZgOIAKATIgZAOg");
	this.shape_1844.setTransform(282,104.7);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f("#DB635E").s().p("AgGATIgBgTIgBACIgIgCIAFgNQACgCAIgDIAFAKIACgKIAIAFQACADABAIIgDACIgCADIABAQg");
	this.shape_1845.setTransform(282.1,102.4);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f("#122A43").s().p("AgBAWIgDgWIAEgWIAFAAIgCAJIgDANIADAXg");
	this.shape_1846.setTransform(281.5,106.4);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f("#213D60").s().p("AgJAWIgEgWIAGgWIASAAIACAVIgBAWQgFACgIAAg");
	this.shape_1847.setTransform(282.3,106.4);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f("#FD8A5A").s().p("AgDAJIAAgRIAHAAIAAARg");
	this.shape_1848.setTransform(282.3,100.8);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f("#FEBF87").s().p("AACAaQgDgEgBgFIABgHIgDgTIABgGIgBgJIAIgCIAAAsIABAIIgCABIgBgBg");
	this.shape_1849.setTransform(281.8,110.9);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f("#FEBF87").s().p("AACAaQgDgEgBgFIABgHIgDgTIABgGIgBgJIAIgCIAAAsIABAIIgBABIgCgBg");
	this.shape_1850.setTransform(282.9,110.9);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f("#DB635E").s().p("AAAAGIgDgGIAAADIgBAAIgBgJIABgCIABAAIAHALQADAFgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABgBAAQgDgBAAgDg");
	this.shape_1851.setTransform(281.9,113.2);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f("#DB635E").s().p("AgBAGIgCgGIgBADIAAAAIgBgJIABgCIABAAIAHALQADAFgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgDgCgBgCg");
	this.shape_1852.setTransform(283.1,113.2);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f("#6C2615").s().p("AgIALIAAgUIARAAIAAAUg");
	this.shape_1853.setTransform(282.3,100);

	this.instance_90 = new lib.CompoundPath_3();
	this.instance_90.parent = this;
	this.instance_90.setTransform(286.2,111.9,1,1,0,0,0,4.7,2);
	this.instance_90.alpha = 0.398;

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f("#122A43").s().p("AAAgIIABABIAAAJIgBAHg");
	this.shape_1854.setTransform(168,241.5);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f("#122A43").s().p("AAAgBIgBgGIgBgBIABgBIABABQACACABAFQABAHgEAEIAAAAQABgFgBgGg");
	this.shape_1855.setTransform(165.1,241.7);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f("#3E2D1C").s().p("AgGAHIgBABQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgCgEACgCQACgCAFgDQAFgEADABQAEAAgCAFQgHAMgDABIgFgDg");
	this.shape_1856.setTransform(164.9,245.4);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f("#122A43").s().p("AAAAEIgKgDIABgEIAJACIALABIAAAEIgIAAIgDAAg");
	this.shape_1857.setTransform(166.5,245.2);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f("#122A43").s().p("AgEAAIgCgEIACAAIABAEQADADACAAQAEgBgBgGIABAAQACAIgGABIAAAAQgDAAgDgFg");
	this.shape_1858.setTransform(166.5,240.8);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f("#8DD2CA").s().p("AgEABIAEAAIAFgCIAAABIgFACg");
	this.shape_1859.setTransform(168.5,252.3);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f("#FD8A5A").s().p("AgCgBQACACAEgDQAAAEgEAAIAAABQgCAAAAgEg");
	this.shape_1860.setTransform(166.6,240.5);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f("#DB635E").s().p("AAAARIgFgBIgGgDIgBgFIABgHIAFgNIAEgFIACACIACAIQAAAFgCAEIgBAGIAOAEIgCAGg");
	this.shape_1861.setTransform(165,242.5);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f("#B86331").s().p("AAHAKIAAgGQgBgCgDgCIgCgBIABADIgHgCIABAEIgCgBIABAHQgFgBgBgGQAAgEADgEIADgDIACgBQADgCACABQAJACABAIIgEALg");
	this.shape_1862.setTransform(166.6,238.8);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f("#FDA96F").s().p("AgDADIgCAAIABgFIACAAIACgCIABAAIABABIADAAIABADIAAAAIgBABIAAABIgBABIgBAAIgBABIgCABg");
	this.shape_1863.setTransform(166.7,244);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f("#6C5549").s().p("AgHAGIAEgNIAFgBIAGAGIgMALg");
	this.shape_1864.setTransform(164.8,244.8);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgEQABgCACgVIABgHIAFACIAAAHQgCAUgEAGQgDADgLAIg");
	this.shape_1865.setTransform(166.6,242.7);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f("#213D60").s().p("AAAAaIgRgGIACgTQAEgJgBgDIgEgKIACgCIAJgDIACAGQADAEADgBQAFAAgBgJIALAFIgBAKIgCAGQgBAFABASIgDAEIAAAFg");
	this.shape_1866.setTransform(166.4,243);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f("#DB635E").s().p("AgEAVIABgiIAEgKIADAEQABADAAAIIAAALIgCAOIgCAFIgBACg");
	this.shape_1867.setTransform(168.1,243.1);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f("#FDA96F").s().p("AgFAHQgCgFAAgDQAAgJAHAAQAIAAAAAJQAAADgCAFQgDAEgDAAQgCAAgDgEg");
	this.shape_1868.setTransform(166.6,239.4);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f("#FDA96F").s().p("AgHAGIABgJIADgBIAAgEIAIAAIAAAFIACABIAAADIAAAIg");
	this.shape_1869.setTransform(166.5,240.7);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f("#FDA96F").s().p("AgCgEIAFADIgBADIgCADg");
	this.shape_1870.setTransform(167.8,245.6);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f("#8DD2CA").s().p("AALAWIgHgZIAEgCIgJAAIgEgDIAEAGIgGARIgDAEIgDgBIgCgMIAEgYIAFgDIAHACIgBAJIACABIACgJIAFABIACAFIACABIADAgIgDACg");
	this.shape_1871.setTransform(166.2,247.2);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f("#6DB19F").s().p("AAKAmIABgCIgEgIIgFgUIgBgDIgDgXIgDAAIgEASIABAKIgBADIAAAWIgCACIgEgBIgFACIgDgEIABgqIABgTIAGgMIAPAHIAJABIAFAkIAFASIACAEIABAGIABAAIABADIgGAEg");
	this.shape_1872.setTransform(166.8,248.8);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f("#576977").s().p("AgCAEIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAgCIABgDIAKgCIAGAEIAFABIABACQgEACgGAAIgEgBg");
	this.shape_1873.setTransform(169,252.9);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f("#576977").s().p("AgEAFIABgEIAAgDIADgDIAFABIAAAJQgBABgEAAQgDAAgBgBg");
	this.shape_1874.setTransform(165,252.9);

	this.instance_91 = new lib.Path_1();
	this.instance_91.parent = this;
	this.instance_91.setTransform(169.5,251.5,1,1,0,0,0,4.8,2);
	this.instance_91.alpha = 0.398;

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f("#122A43").s().p("AAAgIIABABIAAAJIgBAGg");
	this.shape_1875.setTransform(183.8,204.4);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f("#122A43").s().p("AABAAQgBgEgBgDIgBgBIACgBIABABQABADABAFQABAGgDAEIgBABQACgGgBgFg");
	this.shape_1876.setTransform(180.8,204.5);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f("#3E2D1C").s().p("AgFAHIgCABIgBgCQAAgFABgBQACgCAFgDQAEgEADABQAEAAgCAFQgGAMgEABIgEgDg");
	this.shape_1877.setTransform(180.6,208.2);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f("#122A43").s().p("AAAADIgKgCIABgEIAJACIALABIAAAEIgFAAIgGgBg");
	this.shape_1878.setTransform(182.3,208.1);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f("#122A43").s().p("AgEAAIgCgEIACAAIABAEQACADADAAQAEgBgBgGIABAAQABAIgFABIAAAAQgDAAgDgFg");
	this.shape_1879.setTransform(182.2,203.6);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f("#8DD2CA").s().p("AAAAAIgFACIAFgEIAGAFg");
	this.shape_1880.setTransform(180.8,214.9);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQACACADgDQAAAEgCAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1881.setTransform(182.3,203.4);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f("#DB635E").s().p("AgBARIgEgBQgDAAgDgDIgBgFIABgHIAFgNIAEgFIACACQABADABAFQAAAFgCAEIgBAGIAOAEIgCAFIgIABIgEgBg");
	this.shape_1882.setTransform(180.8,205.4);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f("#B86331").s().p("AAHAJIAAgFQAAgCgDgCIgDgBIABADIgGgCIAAAEQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIABAHQgFgBgBgGQgBgEAEgEIAEgDIABgBQACgCACABQAKACABAIIgCAFIgCAGg");
	this.shape_1883.setTransform(182.3,201.6);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f("#FDA96F").s().p("AgDADIgCgBIABgEIACAAIACgCIABAAIABABIADABIABACIgBAAIAAABIgBAAIAAACIgBAAIgBABIgCABg");
	this.shape_1884.setTransform(182.5,206.9);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f("#6C5549").s().p("AgGAGIADgNIAFgBIAGAGIgMALg");
	this.shape_1885.setTransform(180.5,207.6);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgEQACgCACgVIAAgHIAFABIAAAHQgDAXgDAEQgDAEgMAGg");
	this.shape_1886.setTransform(182.4,205.6);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f("#213D60").s().p("AAAAaIgRgFIACgUQAEgJgBgDIgEgKIACgBIAJgEIACAGQADAEADgBQAEAAAAgJIAKAFIAAAKIgCAHIAAAKQAAAJgBADIgCAEIAAAEg");
	this.shape_1887.setTransform(182.2,205.8);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f("#DB635E").s().p("AgEAVIACgiIADgKIADAEQABACAAAJIAAALIgCAOIgCAFIgBACg");
	this.shape_1888.setTransform(183.8,206);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f("#FDA96F").s().p("AgFAGQgCgEAAgEQAAgIAHAAQAIAAAAAIQAAAEgCAEQgDAFgDAAQgCAAgDgFg");
	this.shape_1889.setTransform(182.3,202.2);

	this.shape_1890 = new cjs.Shape();
	this.shape_1890.graphics.f("#FDA96F").s().p("AgHAGIABgJIADgBIAAgEIAIAAIAAAFIACABIAAADIgBAIg");
	this.shape_1890.setTransform(182.3,203.5);

	this.shape_1891 = new cjs.Shape();
	this.shape_1891.graphics.f("#FDA96F").s().p("AgCgEIAFACIgBAEIgCACg");
	this.shape_1891.setTransform(183.5,208.5);

	this.shape_1892 = new cjs.Shape();
	this.shape_1892.graphics.f("#8DD2CA").s().p("AAKAWIgGgaIADgBIgFAAIgDAAIgEgCIADAEIgFASIgDAEIgDgBIgCgNIAEgXIAEgDIAIACIgBAJIACAAIACgIIAFACIACADIACACIADAgIgDACg");
	this.shape_1892.setTransform(182,210.1);

	this.shape_1893 = new cjs.Shape();
	this.shape_1893.graphics.f("#6DB19F").s().p("AALAnIAAgDIgEgIIgEgUIgCgDIgDgXIgCAAIgFASIABAKIgBAEIAAAVIgCACIgEgBIgFADIgDgFIABgqIABgTIAGgLIAPAGIAKABIAEAkIAFATIACADIACAHIAAAAIABACQgEAEgCAAg");
	this.shape_1893.setTransform(182.5,211.7);

	this.shape_1894 = new cjs.Shape();
	this.shape_1894.graphics.f("#576977").s().p("AgDAEQgHABgBgCIAAgCIABgDIAKgCIAGAEIAFABIABACQgEACgGAAg");
	this.shape_1894.setTransform(184.7,215.7);

	this.shape_1895 = new cjs.Shape();
	this.shape_1895.graphics.f("#576977").s().p("AgEAFIABgEIAAgCIADgFIAFACIgBAGIAAADQAAACgEAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_1895.setTransform(180.8,215.8);

	this.instance_92 = new lib.Path_0();
	this.instance_92.parent = this;
	this.instance_92.setTransform(185.2,214.2,1,1,0,0,0,4.8,1.9);
	this.instance_92.alpha = 0.398;

	this.shape_1896 = new cjs.Shape();
	this.shape_1896.graphics.f("#122A43").s().p("AAAgHIABAAIAAAJIgBAHg");
	this.shape_1896.setTransform(126.4,292.3);

	this.shape_1897 = new cjs.Shape();
	this.shape_1897.graphics.f("#122A43").s().p("AABgBQgBgDgBgCIgBgCIACgCIABACQABACABAFQABAIgDADIgBABQACgGgBgGg");
	this.shape_1897.setTransform(123.4,292.4);

	this.shape_1898 = new cjs.Shape();
	this.shape_1898.graphics.f("#3E2D1C").s().p("AgFAHIgCABIgBgCQAAgFABgBQACgCAFgDQAEgEADABQAEAAgCAFQgGAMgEABIgEgDg");
	this.shape_1898.setTransform(123.2,296.1);

	this.shape_1899 = new cjs.Shape();
	this.shape_1899.graphics.f("#122A43").s().p("AAAADIgKgCIABgEIAJACIALABIAAAEg");
	this.shape_1899.setTransform(124.9,296);

	this.shape_1900 = new cjs.Shape();
	this.shape_1900.graphics.f("#122A43").s().p("AgEAAIgCgEIACAAIABAEQADADACAAQAEgBgBgGIABAAQABAIgFABIAAAAQgDAAgDgFg");
	this.shape_1900.setTransform(124.9,291.5);

	this.shape_1901 = new cjs.Shape();
	this.shape_1901.graphics.f("#8DD2CA").s().p("AAAAAIgFABIAFgCIAGADg");
	this.shape_1901.setTransform(123.5,302.8);

	this.shape_1902 = new cjs.Shape();
	this.shape_1902.graphics.f("#FD8A5A").s().p("AgCgBQACACADgDQAAAEgCAAIgBABQgCAAAAgEg");
	this.shape_1902.setTransform(125,291.3);

	this.shape_1903 = new cjs.Shape();
	this.shape_1903.graphics.f("#DB635E").s().p("AgBARIgEgBQgDAAgDgDIAAgFIAAgHIAEgNIAFgFIACACQABADAAAFQABAFgCAEIgBAGIAOAEIgCAFIgIABIgEgBg");
	this.shape_1903.setTransform(123.4,293.3);

	this.shape_1904 = new cjs.Shape();
	this.shape_1904.graphics.f("#B86331").s().p("AAHAJIAAgFQAAgCgDgCIgDgBIABADIgGgCIAAAEIgCgBIABAHQgFgBgBgGQgBgEAEgEIAEgDIABgBQADgCACABQAJACABAIIgCAFIgCAGg");
	this.shape_1904.setTransform(124.9,289.5);

	this.shape_1905 = new cjs.Shape();
	this.shape_1905.graphics.f("#FDA96F").s().p("AgDADIgCAAIABgFIACAAIACgCIABAAIABABIADAAIABACIgBABIAAABIgBABIAAABIgBABIgBAAIgCABg");
	this.shape_1905.setTransform(125.1,294.8);

	this.shape_1906 = new cjs.Shape();
	this.shape_1906.graphics.f("#6C5549").s().p("AgGAGIADgNIAFgBIAFAGIgLALg");
	this.shape_1906.setTransform(123.2,295.5);

	this.shape_1907 = new cjs.Shape();
	this.shape_1907.graphics.f("#3E2D1C").s().p("AgKATQAKgHACgDQACgDACgVIAAgIIAFADIAAAGQgDAXgDAEQgCAEgMAHg");
	this.shape_1907.setTransform(125,293.4);

	this.shape_1908 = new cjs.Shape();
	this.shape_1908.graphics.f("#213D60").s().p("AABAaIgRgGIABgTQADgJAAgDIgEgKIACgCIAJgDIACAGQACAEAEgBQAEAAAAgJIALAEIgBALIgCAGIgBALQABAJgBADIgCADIAAAGg");
	this.shape_1908.setTransform(124.8,293.7);

	this.shape_1909 = new cjs.Shape();
	this.shape_1909.graphics.f("#DB635E").s().p("AgEAVIACgiIADgKIADAEQABACAAAJIAAALIgCAOIgCAFIgBACg");
	this.shape_1909.setTransform(126.4,293.9);

	this.shape_1910 = new cjs.Shape();
	this.shape_1910.graphics.f("#FDA96F").s().p("AgFAHQgCgFAAgDQAAgJAHAAQAIAAAAAJQAAADgCAFQgDAEgDAAQgCAAgDgEg");
	this.shape_1910.setTransform(124.9,290.1);

	this.shape_1911 = new cjs.Shape();
	this.shape_1911.graphics.f("#FDA96F").s().p("AgHAGIABgJIACgBIAAgEIAIAAIABAFIACABIABADIgCAIg");
	this.shape_1911.setTransform(124.9,291.4);

	this.shape_1912 = new cjs.Shape();
	this.shape_1912.graphics.f("#FDA96F").s().p("AgCgDIAFABIgBAEIgCADg");
	this.shape_1912.setTransform(126.2,296.4);

	this.shape_1913 = new cjs.Shape();
	this.shape_1913.graphics.f("#8DD2CA").s().p("AAKAWIgGgZIADgDIgFABIgDgBIgEgCIADAGIgFARIgDADIgDAAIgCgMIAEgYIAEgDIAIACIgBAJIACAAIACgIIAFABIACAFIACABIADAgIgDACg");
	this.shape_1913.setTransform(124.6,298);

	this.shape_1914 = new cjs.Shape();
	this.shape_1914.graphics.f("#6DB19F").s().p("AALAmIAAgCIgEgIIgEgTIgCgEIgDgXIgCAAIgFASIABAKIgBADIAAAWIgCACIgEgBIgFACIgDgEIABgMIAAgeIABgTIAGgLIAPAGIAKABIAEAjIAFAUIACADIACAHIAAAAIABACQgEAEgCgBg");
	this.shape_1914.setTransform(125.1,299.6);

	this.shape_1915 = new cjs.Shape();
	this.shape_1915.graphics.f("#576977").s().p("AgCAEQgIABgBgCIAAgCIABgDIAKgCIAGAEIAEABIACACQgEACgHAAg");
	this.shape_1915.setTransform(127.4,303.6);

	this.shape_1916 = new cjs.Shape();
	this.shape_1916.graphics.f("#576977").s().p("AgEAFIABgEIAAgDIADgDIAFABIgBAGIAAADQAAACgEgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_1916.setTransform(123.4,303.7);

	this.instance_93 = new lib.Path();
	this.instance_93.parent = this;
	this.instance_93.setTransform(127.9,302.1,1,1,0,0,0,4.8,1.9);
	this.instance_93.alpha = 0.398;

	this.shape_1917 = new cjs.Shape();
	this.shape_1917.graphics.f("#263C48").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_1917.setTransform(289.2,56.5);

	this.shape_1918 = new cjs.Shape();
	this.shape_1918.graphics.f("#263C48").s().p("AgCABIgBgBIAHAAIgBABg");
	this.shape_1918.setTransform(291.4,56.8);

	this.shape_1919 = new cjs.Shape();
	this.shape_1919.graphics.f("#FDA96F").s().p("AgFASIgBgDIABgDIAAgBIAAAAIgBABIAAAEIAAABIgBAAIAAgGIACgFIACgCIAEgVIAHAAIAAAFQgBAFgGALIAAADIgBAFIAAACIAAABIgBAAIgBgBIABgEIAAAAIgBACIAAADIAAACIgBAAIgBgCIABgDIAAgBIAAAAIgBABIAAAEIAAACg");
	this.shape_1919.setTransform(291,58.7);

	this.shape_1920 = new cjs.Shape();
	this.shape_1920.graphics.f("#263C48").s().p("AADgBQgBgBgIgBIgBAKIgBgKIgCgEIAHABQAGAAACgBQACgBACgGIABAVIABAGIgGACQABgOgDgCg");
	this.shape_1920.setTransform(290.1,56.3);

	this.shape_1921 = new cjs.Shape();
	this.shape_1921.graphics.f("#263C48").s().p("AgHABIACgBIgBAAIADgEIABADIgDAGIAJgHIABgFIACADIAAAEIgDABIABADIgMAEg");
	this.shape_1921.setTransform(290.4,54.1);

	this.shape_1922 = new cjs.Shape();
	this.shape_1922.graphics.f("#FD8A5A").s().p("AgCAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABAAQACACAEgDQAAAEgDAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_1922.setTransform(290.4,53.6);

	this.shape_1923 = new cjs.Shape();
	this.shape_1923.graphics.f("#FEBF87").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_1923.setTransform(288.7,60.1);

	this.shape_1924 = new cjs.Shape();
	this.shape_1924.graphics.f("#FDA96F").s().p("AAAACQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAAAQAAABgBAAIAAgBg");
	this.shape_1924.setTransform(291.2,52.4);

	this.shape_1925 = new cjs.Shape();
	this.shape_1925.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBABQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_1925.setTransform(289.6,52.4);

	this.shape_1926 = new cjs.Shape();
	this.shape_1926.graphics.f("#231F20").s().p("AAAAAQgCAFgGABQAAgMAIAAQAEAAACAEQADADgBAGQgGgDgCgEg");
	this.shape_1926.setTransform(290.4,51.6);

	this.shape_1927 = new cjs.Shape();
	this.shape_1927.graphics.f("#3E5665").s().p("AgGAWIgHgCIACgGIgBgLIgBgDIAEgNIAFgGIAAADIgDAKIAJgLIACgEIAJAIQABACAAAGIgBATIgFAAQgBAGgCAAQgEACgDAAIgEAAg");
	this.shape_1927.setTransform(290.5,55.6);

	this.shape_1928 = new cjs.Shape();
	this.shape_1928.graphics.f("#3E5665").s().p("AAAAVIgBgeIgDgLIAGAAIABAKIABAfg");
	this.shape_1928.setTransform(291.3,59.7);

	this.shape_1929 = new cjs.Shape();
	this.shape_1929.graphics.f("#576977").s().p("AABAVIgOgEIAAgVIACgQIAWAAIADAKIAAAfg");
	this.shape_1929.setTransform(290.3,59.7);

	this.shape_1930 = new cjs.Shape();
	this.shape_1930.graphics.f("#FDA96F").s().p("AgFAIQgCgEAAgEQAAgMAHAAQAIAAAAAMQAAAEgCAEQgDAEgDAAQgDAAgCgEg");
	this.shape_1930.setTransform(290.4,52.3);

	this.shape_1931 = new cjs.Shape();
	this.shape_1931.graphics.f("#FDA96F").s().p("AgEAOQgDgIABgCIAGgHIAAgJIAIAAIAAAQIgFAAIAAAKg");
	this.shape_1931.setTransform(290.1,54.4);

	this.shape_1932 = new cjs.Shape();
	this.shape_1932.graphics.f("#FEBF87").s().p("AACAcIABgEIgBgNQAAgKgFgMIgEgIIgCgIIAKABIABAGIAEALIABAKIABALIABACIAAAEIgDAKg");
	this.shape_1932.setTransform(291.6,64.3);

	this.shape_1933 = new cjs.Shape();
	this.shape_1933.graphics.f("#FEBF87").s().p("AgGAdIADgJQABgHgBgNIAAgVIAAgHIAKADIgBAIIAAAJIgEAXIAAADQgBAIgDADg");
	this.shape_1933.setTransform(289.5,64.2);

	this.shape_1934 = new cjs.Shape();
	this.shape_1934.graphics.f("#231F20").s().p("AgEAJIgCgBIALgQIABADIAAAEIAAAFIgBAAIAAgFIgBADQgBAFgDACIgCAAIgCAAg");
	this.shape_1934.setTransform(289.2,66.6);

	this.shape_1935 = new cjs.Shape();
	this.shape_1935.graphics.f("#231F20").s().p("AgCAKIgCgBIAFgSIAEAAIAAAKIAAAAIgBgEIgBAIQgCAEgBABIgBAAIgBAAg");
	this.shape_1935.setTransform(292.2,66.5);

	this.shape_1936 = new cjs.Shape();
	this.shape_1936.graphics.f("#BD3A3A").s().p("AgJgPIANABIAJAEIgBAZIgYABg");
	this.shape_1936.setTransform(288.8,62.2);

	this.shape_1937 = new cjs.Shape();
	this.shape_1937.graphics.f("#231F20").s().p("AgEAAQgBgEAFAAQAFAAAAAEQAAAFgFAAQgFAAABgFg");
	this.shape_1937.setTransform(290.5,51);

	this.shape_1938 = new cjs.Shape();
	this.shape_1938.graphics.f("#BD3A3A").s().p("AgDADIAAgBIABgEIAGAAIgBACIgDAAIgBADg");
	this.shape_1938.setTransform(288.8,60.5);

	this.shape_1939 = new cjs.Shape();
	this.shape_1939.graphics.f("#3E5665").s().p("AgBAFIAAgJIACAAIABAJg");
	this.shape_1939.setTransform(289.2,56);

	this.shape_1940 = new cjs.Shape();
	this.shape_1940.graphics.f("#FDA96F").s().p("AgBAYIgCgGIABgDIACgQIABgWIADAEIgDArg");
	this.shape_1940.setTransform(289,57.9);

	this.instance_94 = new lib.CompoundPath_2();
	this.instance_94.parent = this;
	this.instance_94.setTransform(292.9,65.2,1,1,0,0,0,5.5,2.1);
	this.instance_94.alpha = 0.398;

	this.shape_1941 = new cjs.Shape();
	this.shape_1941.graphics.f("#3C4A65").s().p("AAAACIAAgCIAAgBIABADg");
	this.shape_1941.setTransform(140.5,274.8);

	this.shape_1942 = new cjs.Shape();
	this.shape_1942.graphics.f("#3C4A65").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_1942.setTransform(138.9,274.8);

	this.shape_1943 = new cjs.Shape();
	this.shape_1943.graphics.f("#FEBF87").s().p("AgDAAIAEgDIAEADIgBAAIgDAAIgCAEg");
	this.shape_1943.setTransform(138.1,275.3);

	this.shape_1944 = new cjs.Shape();
	this.shape_1944.graphics.f("#FEBF87").s().p("AgBAAIgDABIgCgBIAGgEIAHAEIgEAEg");
	this.shape_1944.setTransform(141.3,275.3);

	this.shape_1945 = new cjs.Shape();
	this.shape_1945.graphics.f("#DB635E").s().p("AgEATIAAgbIADgIIgCgCIADgDIACACIgCACIADAJIACAaIgFAEg");
	this.shape_1945.setTransform(139.6,272.2);

	this.shape_1946 = new cjs.Shape();
	this.shape_1946.graphics.f("#F1F2F2").s().p("AgHAAIACgDIAFACIAFgDIADADIgCAEIgGgDIgEAFg");
	this.shape_1946.setTransform(139.5,270);

	this.shape_1947 = new cjs.Shape();
	this.shape_1947.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGADIgDAGg");
	this.shape_1947.setTransform(141.8,274.7);

	this.shape_1948 = new cjs.Shape();
	this.shape_1948.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAFIgGAEg");
	this.shape_1948.setTransform(137.7,274.9);

	this.shape_1949 = new cjs.Shape();
	this.shape_1949.graphics.f("#F1F2F2").s().p("AAAATIACgFIAAgNIgDgKIgBAOIABAKIgCABIgBgMIABgNQACgKABAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAABABIAAAGIAEAJQABADgCALIgDAGg");
	this.shape_1949.setTransform(141.4,272.9);

	this.shape_1950 = new cjs.Shape();
	this.shape_1950.graphics.f("#F1F2F2").s().p("AgDALIADgRQgCgLABgBQAAgBAAABQABAAAAAAQAAAAAAABQABAAAAABIACAFQABADAAAHIgBAIIAAAHIgCgBIAAgEIABgMIgBgEIgBAKIAAAQIgCABg");
	this.shape_1950.setTransform(138.2,273.1);

	this.shape_1951 = new cjs.Shape();
	this.shape_1951.graphics.f("#FFFFFF").s().p("AgYAYIgCgNIABgIQgBgRADgFQACgCAFgCIAFgCIAPgCIAGABQAGACACACQADAEADAIIADAOQABAGgEAIIgDAIIgEgCIADgGQABgLAAgEIgEgHIgBgHQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgCAKIgBAMIABAMQgEACgIABIgMgDIAAgHIABgJQAAgFgBgDIgCgGQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBABACALIgDARIABAJIgDACg");
	this.shape_1951.setTransform(139.9,272.5);

	this.shape_1952 = new cjs.Shape();
	this.shape_1952.graphics.f("#FDA96F").s().p("AgBAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAg");
	this.shape_1952.setTransform(140.3,268.4);

	this.shape_1953 = new cjs.Shape();
	this.shape_1953.graphics.f("#FDA96F").s().p("AgBAAIABgCQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_1953.setTransform(138.5,268.4);

	this.shape_1954 = new cjs.Shape();
	this.shape_1954.graphics.f("#403024").s().p("AAHABIgHAAQgFAAgBABIgCADIAAADIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQABgGgCgBg");
	this.shape_1954.setTransform(139.4,267.5);

	this.shape_1955 = new cjs.Shape();
	this.shape_1955.graphics.f("#FDA96F").s().p("AgCAKQgEgDgBgDIAAgNIAPAAIAAAGQAAAFgBACQgBAEgEACIgCAAIgCAAg");
	this.shape_1955.setTransform(139.4,268.5);

	this.shape_1956 = new cjs.Shape();
	this.shape_1956.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_1956.setTransform(139.4,269.4);

	this.shape_1957 = new cjs.Shape();
	this.shape_1957.graphics.f("#FEBF87").s().p("AgEACIAAgEIAJgBIAAADIgFAEg");
	this.shape_1957.setTransform(139.5,269.5);

	this.shape_1958 = new cjs.Shape();
	this.shape_1958.graphics.f("#DCA042").s().p("AgPABIABgDIAdABIABACQgJACgHAAg");
	this.shape_1958.setTransform(139.8,274.7);

	this.shape_1959 = new cjs.Shape();
	this.shape_1959.graphics.f("#3C4A65").s().p("AgUAoIgBgCIACgDIgCgDQgBgDAAgGIABgKIABgIIAAghIAFgMIAcAAIAEAOIAFA3IgBAEIACACIgCAEIgJAAIgCgDIACgDIgCgDIgBgJIgBgJIgGgiIgHAAIgDAZIAAANQABAKgCAEIgCACQAAABACAEIgCAEg");
	this.shape_1959.setTransform(139.9,278.6);

	this.shape_1960 = new cjs.Shape();
	this.shape_1960.graphics.f("#2B271C").s().p("AAAAGQgDgBgCgEIAAgGIAHAAIACAGIABAEIgDABIgBAAIgBAAg");
	this.shape_1960.setTransform(141.7,282.9);

	this.shape_1961 = new cjs.Shape();
	this.shape_1961.graphics.f("#2B271C").s().p("AgEAEQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAIACgGIAIAAIAAAEIgDAEIgEACQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAg");
	this.shape_1961.setTransform(138.2,283);

	this.instance_95 = new lib.CompoundPath_1();
	this.instance_95.parent = this;
	this.instance_95.setTransform(143.3,281.3,1,1,0,0,0,5.1,2.1);
	this.instance_95.alpha = 0.398;

	this.shape_1962 = new cjs.Shape();
	this.shape_1962.graphics.f("#3C4A65").s().p("AAAACIAAgDIAAAAIABADg");
	this.shape_1962.setTransform(269.3,57.4);

	this.shape_1963 = new cjs.Shape();
	this.shape_1963.graphics.f("#3C4A65").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_1963.setTransform(267.7,57.4);

	this.shape_1964 = new cjs.Shape();
	this.shape_1964.graphics.f("#FEBF87").s().p("AgEAAIAFgDIADADIAAAAIgDAAIgDAEg");
	this.shape_1964.setTransform(266.9,57.9);

	this.shape_1965 = new cjs.Shape();
	this.shape_1965.graphics.f("#FEBF87").s().p("AgBAAIgDAAIgCAAIAEgCIACgBIAHADIgEAFg");
	this.shape_1965.setTransform(270.2,57.9);

	this.shape_1966 = new cjs.Shape();
	this.shape_1966.graphics.f("#DB635E").s().p("AgEATIAAgbIADgIIgCgCIADgDIACACIgCACIADAJIACAaIgFAEg");
	this.shape_1966.setTransform(268.4,54.8);

	this.shape_1967 = new cjs.Shape();
	this.shape_1967.graphics.f("#F1F2F2").s().p("AgHAAIACgDIAFACIAFgDIADACIgCAFIgGgDIgEAFg");
	this.shape_1967.setTransform(268.4,52.6);

	this.shape_1968 = new cjs.Shape();
	this.shape_1968.graphics.f("#FFFFFF").s().p("AgEABIADgFIAGADIgDAHg");
	this.shape_1968.setTransform(270.7,57.3);

	this.shape_1969 = new cjs.Shape();
	this.shape_1969.graphics.f("#FFFFFF").s().p("AgEgBIAIgDIABAFIgGAEg");
	this.shape_1969.setTransform(266.5,57.5);

	this.shape_1970 = new cjs.Shape();
	this.shape_1970.graphics.f("#F1F2F2").s().p("AAAATIACgGIAAgMIgDgKIgBAOIABAKIgCABIgBgMIABgNQACgKABAAQAAAAAAAAQAAABAAAAQAAABAAABQAAAAABABIAAAGIAEAJIgBAOIgDAGg");
	this.shape_1970.setTransform(270.3,55.5);

	this.shape_1971 = new cjs.Shape();
	this.shape_1971.graphics.f("#F1F2F2").s().p("AgDAKIADgQQgCgLABgBQACgCACAJQABADAAAHIgBAIIAAAHIgCgBIAAgFIABgLIgBgEIgBAKIAAAQIgCAAg");
	this.shape_1971.setTransform(267,55.7);

	this.shape_1972 = new cjs.Shape();
	this.shape_1972.graphics.f("#FFFFFF").s().p("AgYAZIgCgOIABgJQgBgQADgEQACgCAFgDIAFgCIAPgCIAGACQAGABACACQADADADAKIADAMQAAAGgDAKIgDAHIgEgCIADgGIABgPIgEgIIgBgFQAAgBAAgBQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgCAKIgBAOIABALQgGADgGgBQgHAAgFgCIAAgHIABgJQAAgGgBgDQgCgIgDABQgBABACALIgDARIABAJIgDACg");
	this.shape_1972.setTransform(268.7,55.1);

	this.shape_1973 = new cjs.Shape();
	this.shape_1973.graphics.f("#FDA96F").s().p("AAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAgBABAAg");
	this.shape_1973.setTransform(269.1,51);

	this.shape_1974 = new cjs.Shape();
	this.shape_1974.graphics.f("#FDA96F").s().p("AgBAAIABgCQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_1974.setTransform(267.4,51);

	this.shape_1975 = new cjs.Shape();
	this.shape_1975.graphics.f("#403024").s().p("AAHABIgHAAQgDgBgDACIgCAGIgBgIQAAgHAIAAQAKAAABAGQAAAFgCAEQAAgGgBgBg");
	this.shape_1975.setTransform(268.3,50.1);

	this.shape_1976 = new cjs.Shape();
	this.shape_1976.graphics.f("#FDA96F").s().p("AgCAKQgEgDgBgDIAAgNIAPAAQABAKgCADQgBAEgEACIgCAAIgCAAg");
	this.shape_1976.setTransform(268.3,51.1);

	this.shape_1977 = new cjs.Shape();
	this.shape_1977.graphics.f("#FD8A5A").s().p("AgDAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAEADAFgDQAAAEgEABIgBAAQgBAAgCgDg");
	this.shape_1977.setTransform(268.3,52);

	this.shape_1978 = new cjs.Shape();
	this.shape_1978.graphics.f("#FEBF87").s().p("AgEABIAAgDIAJAAIABACIgGADg");
	this.shape_1978.setTransform(268.3,52.1);

	this.shape_1979 = new cjs.Shape();
	this.shape_1979.graphics.f("#DCA042").s().p("AgJABIgFgBIAAgCIAcAAIABACQgIADgGAAIgKgCg");
	this.shape_1979.setTransform(268.6,57.3);

	this.shape_1980 = new cjs.Shape();
	this.shape_1980.graphics.f("#3C4A65").s().p("AgUAoIgBgCIACgDIgCgDQgBgCAAgHIABgJIABgJIAAggIAFgNIAcAAIAEAOIAFA3IgBAEIACACQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAIgJAAIgCgDIACgDIgCgDIgBgJIgBgJIgGghIgHAAIgDAYIAAAOQABAKgCADIgCACQACAEAAABIgCAEg");
	this.shape_1980.setTransform(268.8,61.1);

	this.shape_1981 = new cjs.Shape();
	this.shape_1981.graphics.f("#2B271C").s().p("AAAAGQgEgBgBgFIAAgFIAHAAIACAGQABABAAAAQAAABABAAQAAAAgBABQAAAAAAABIgDABIgBAAIgBAAg");
	this.shape_1981.setTransform(270.6,65.5);

	this.shape_1982 = new cjs.Shape();
	this.shape_1982.graphics.f("#2B271C").s().p("AgEAEQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAIACgHIAHAAIAAAFQAAACgCACIgEABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_1982.setTransform(267,65.6);

	this.instance_96 = new lib.CompoundPath_0();
	this.instance_96.parent = this;
	this.instance_96.setTransform(272.1,63.9,1,1,0,0,0,5.1,2.1);
	this.instance_96.alpha = 0.398;

	this.shape_1983 = new cjs.Shape();
	this.shape_1983.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAgBAAAAQAAAAAAABQAAAAABAAIAAABIAAAAIgBAAg");
	this.shape_1983.setTransform(24.8,216.5);

	this.shape_1984 = new cjs.Shape();
	this.shape_1984.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_1984.setTransform(24.7,216.3);

	this.shape_1985 = new cjs.Shape();
	this.shape_1985.graphics.f("#FDA96F").s().p("AAAABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIAAAAIgBAAg");
	this.shape_1985.setTransform(24.6,216.1);

	this.shape_1986 = new cjs.Shape();
	this.shape_1986.graphics.f("#FDA96F").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBAAg");
	this.shape_1986.setTransform(24.5,216);

	this.shape_1987 = new cjs.Shape();
	this.shape_1987.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1987.setTransform(23.7,222.2);

	this.shape_1988 = new cjs.Shape();
	this.shape_1988.graphics.f("#231F20").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_1988.setTransform(23.7,220.7);

	this.shape_1989 = new cjs.Shape();
	this.shape_1989.graphics.f("#231F20").s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_1989.setTransform(23.8,219.9);

	this.shape_1990 = new cjs.Shape();
	this.shape_1990.graphics.f("#231F20").s().p("AgCgBIABgBIAEACIAAADg");
	this.shape_1990.setTransform(24.4,222.1);

	this.shape_1991 = new cjs.Shape();
	this.shape_1991.graphics.f("#231F20").s().p("AgEAAIAIgCIABACIgIADg");
	this.shape_1991.setTransform(22.4,222.1);

	this.shape_1992 = new cjs.Shape();
	this.shape_1992.graphics.f("#231F20").s().p("AgFACIABgDIgEAAIgBgIIAFgCIAIAQIABgOIAFAEIgCACIACADIgFANg");
	this.shape_1992.setTransform(23.2,218.1);

	this.shape_1993 = new cjs.Shape();
	this.shape_1993.graphics.f("#FDA96F").s().p("AgDAEIAAgIIAHAAIAAAFIAAAEg");
	this.shape_1993.setTransform(21.1,223.3);

	this.shape_1994 = new cjs.Shape();
	this.shape_1994.graphics.f("#FFFFFF").s().p("AgCABIAEgDIABACIgEADg");
	this.shape_1994.setTransform(25,217.4);

	this.shape_1995 = new cjs.Shape();
	this.shape_1995.graphics.f("#403024").s().p("AAEAEIAAgEIgHAAIgBABIgCAAIACgEIALACIgBAFg");
	this.shape_1995.setTransform(21.1,223.7);

	this.shape_1996 = new cjs.Shape();
	this.shape_1996.graphics.f("#403024").s().p("AAJADIgagEIAJgBIAZAFg");
	this.shape_1996.setTransform(21.1,224);

	this.shape_1997 = new cjs.Shape();
	this.shape_1997.graphics.f("#403024").s().p("AgDgPIAIAAIgBAeIgIABg");
	this.shape_1997.setTransform(22.3,225.9);

	this.shape_1998 = new cjs.Shape();
	this.shape_1998.graphics.f("#6C5549").s().p("AgNALIABgdIAaAGIgBAeg");
	this.shape_1998.setTransform(20.6,225.6);

	this.shape_1999 = new cjs.Shape();
	this.shape_1999.graphics.f("#FFFFFF").s().p("AgCACIgBgDIAGAAIABADg");
	this.shape_1999.setTransform(21.1,222.7);

	this.shape_2000 = new cjs.Shape();
	this.shape_2000.graphics.f("#92251B").s().p("AgGAGIgDgGQAAgEAEgEQACgCAEAAQAGABACACIAAAFIgEABIgFgBQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAAAIgBACIgBgBQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAQABAAAAAAIgBADIAAABQAAAAAAgBQgBAAAAAAQAAgBAAgBQgBAAAAgCg");
	this.shape_2000.setTransform(23.3,215.3);

	this.shape_2001 = new cjs.Shape();
	this.shape_2001.graphics.f("#DB635E").s().p("AgBAAIABgBIgCgBIACgDIADACIgCACIABABIAAAGg");
	this.shape_2001.setTransform(23.5,218);

	this.shape_2002 = new cjs.Shape();
	this.shape_2002.graphics.f("#FFFFFF").s().p("AgFgGIADgDIAEAEIACgCIACADIgCAOg");
	this.shape_2002.setTransform(23.2,217.6);

	this.shape_2003 = new cjs.Shape();
	this.shape_2003.graphics.f("#231F20").s().p("AgEAJIgCgVIAFAIIABAIQABADAEACIACACIgDACQgDAAgFgEg");
	this.shape_2003.setTransform(25.2,218.9);

	this.shape_2004 = new cjs.Shape();
	this.shape_2004.graphics.f("#231F20").s().p("AgCAZIgBgJIADgbIAAgGQAAgHACAAQADAAgBAIIgBAKQAAAHgEAYg");
	this.shape_2004.setTransform(21.8,220.9);

	this.shape_2005 = new cjs.Shape();
	this.shape_2005.graphics.f("#FDA96F").s().p("AAAALIgBgCIgCgFIgBAAIgBACIgCgCQgBgCABgGIAAgGIAPABIAAAGIAAADIAAADQgCAGgCACIgCAAIgCAAg");
	this.shape_2005.setTransform(23.4,215.7);

	this.shape_2006 = new cjs.Shape();
	this.shape_2006.graphics.f("#FD8A5A").s().p("AgEADIAAgIIAJACIgCADIAAAFIgCABg");
	this.shape_2006.setTransform(23.4,216.4);

	this.shape_2007 = new cjs.Shape();
	this.shape_2007.graphics.f("#122A43").s().p("AAAAFIgEgHQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIACgBQAAAAABAAQAAgBAAABQAAAAAAAAQAAAAAAAAIAFAIQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgBAAIgBgBg");
	this.shape_2007.setTransform(24.2,216.4);

	this.shape_2008 = new cjs.Shape();
	this.shape_2008.graphics.f("#213D60").s().p("AAAAGIgEgIIAAgBIABgBIACgBIABAAIAAABIAFAHQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAIgCABIgBAAIgBAAg");
	this.shape_2008.setTransform(24.4,216.3);

	this.shape_2009 = new cjs.Shape();
	this.shape_2009.graphics.f("#414042").s().p("AgTAfIAAgJIgJAAIAAgRIADgWIADgKIAFgBIAKgFIAJARIABgPIAIAGIAFAIIgCgIIAEgFIAFAHQAFAHABADQABAEgBADIgEAFIgMgDIACAkIgJABIgDgJIgCAJIgBABg");
	this.shape_2009.setTransform(23.4,220.3);

	this.shape_2010 = new cjs.Shape();
	this.shape_2010.graphics.f("#808285").s().p("AAJATQgCgCgBgKIgCgMIAFgCIgHABIgDgBIgEAOIgHACIgBgWIABgBIADgFIATABIACAFIABABIABAVQAAAJgCACIgBAAIgCgBgAACgRIgBAIIADgBIAAgHg");
	this.shape_2010.setTransform(23.1,225.2);

	this.shape_2011 = new cjs.Shape();
	this.shape_2011.graphics.f("#58595B").s().p("AAHAjIgBgBIAAgDQABgFAAgDIgCgFIAAgXIgBgRIgDgBIgFAbIgCAhIgCADQgCAAgHgDIgCgDIABgCIAAgMIAEg7IAgAAIAAAaIAAAYIgBAIIACAGIAAAMIgLADg");
	this.shape_2011.setTransform(22.9,227.1);

	this.shape_2012 = new cjs.Shape();
	this.shape_2012.graphics.f("#FFFFFF").s().p("AgFAFIAAgJIALAAIAAAJg");
	this.shape_2012.setTransform(23.7,222.7);

	this.shape_2013 = new cjs.Shape();
	this.shape_2013.graphics.f("#443123").s().p("AABAFIgKgEIABgCIAJgDIACADIAGADQAAABAAAAQABAAAAABQgBAAAAAAQAAABgBAAg");
	this.shape_2013.setTransform(24.7,231.1);

	this.shape_2014 = new cjs.Shape();
	this.shape_2014.graphics.f("#443123").s().p("AgDAHIgBgDIAAgLIAHAEQADAHgCACQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBABIgDgBg");
	this.shape_2014.setTransform(21.7,231.3);

	this.shape_2015 = new cjs.Shape();
	this.shape_2015.graphics.f("#FDA96F").s().p("AAAAGIgDgDIgCgDQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIADABIABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgDgDIAAgCIADAAQADABABAEIABAFIACADIgEAEg");
	this.shape_2015.setTransform(24.6,216.8);

	this.instance_97 = new lib.CompoundPath();
	this.instance_97.parent = this;
	this.instance_97.setTransform(27.1,229.8,1,1,0,0,0,7,2.3);
	this.instance_97.alpha = 0.398;

	this.shape_2016 = new cjs.Shape();
	this.shape_2016.graphics.f("#FEBF87").s().p("AgFAAIAGgEIAFADIgBABIgEAAIgDAFg");
	this.shape_2016.setTransform(243.8,280.5);

	this.shape_2017 = new cjs.Shape();
	this.shape_2017.graphics.f("#FFFFFF").s().p("AgFgCIAKgDIABAGIgHAFg");
	this.shape_2017.setTransform(243.4,279.9);

	this.shape_2018 = new cjs.Shape();
	this.shape_2018.graphics.f("#F1F2F2").s().p("AgEANIADgVQgCgOABgBQACgCAEALIABAMIgBAKIAAAJIgDgBIAAgGIABgOIgBgFIgCANIAAATIgBABg");
	this.shape_2018.setTransform(244,277.7);

	this.shape_2019 = new cjs.Shape();
	this.shape_2019.graphics.f("#FDA96F").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAIAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_2019.setTransform(244.4,271.8);

	this.shape_2020 = new cjs.Shape();
	this.shape_2020.graphics.f("#F0F7E5").s().p("A3WXPIAElDIgWAAIAAnzQB3gJCygtQD9hCEAh0QLilQIjqPIk9jHITjrVIhyWrIk1jCQixEyjvFxQndLhkwEwg");
	this.shape_2020.setTransform(151.3,166.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2020},{t:this.shape_2019},{t:this.shape_2018},{t:this.shape_2017},{t:this.shape_2016},{t:this.instance_97},{t:this.shape_2015},{t:this.shape_2014},{t:this.shape_2013},{t:this.shape_2012},{t:this.shape_2011},{t:this.shape_2010},{t:this.shape_2009},{t:this.shape_2008},{t:this.shape_2007},{t:this.shape_2006},{t:this.shape_2005},{t:this.shape_2004},{t:this.shape_2003},{t:this.shape_2002},{t:this.shape_2001},{t:this.shape_2000},{t:this.shape_1999},{t:this.shape_1998},{t:this.shape_1997},{t:this.shape_1996},{t:this.shape_1995},{t:this.shape_1994},{t:this.shape_1993},{t:this.shape_1992},{t:this.shape_1991},{t:this.shape_1990},{t:this.shape_1989},{t:this.shape_1988},{t:this.shape_1987},{t:this.shape_1986},{t:this.shape_1985},{t:this.shape_1984},{t:this.shape_1983},{t:this.instance_96},{t:this.shape_1982},{t:this.shape_1981},{t:this.shape_1980},{t:this.shape_1979},{t:this.shape_1978},{t:this.shape_1977},{t:this.shape_1976},{t:this.shape_1975},{t:this.shape_1974},{t:this.shape_1973},{t:this.shape_1972},{t:this.shape_1971},{t:this.shape_1970},{t:this.shape_1969},{t:this.shape_1968},{t:this.shape_1967},{t:this.shape_1966},{t:this.shape_1965},{t:this.shape_1964},{t:this.shape_1963},{t:this.shape_1962},{t:this.instance_95},{t:this.shape_1961},{t:this.shape_1960},{t:this.shape_1959},{t:this.shape_1958},{t:this.shape_1957},{t:this.shape_1956},{t:this.shape_1955},{t:this.shape_1954},{t:this.shape_1953},{t:this.shape_1952},{t:this.shape_1951},{t:this.shape_1950},{t:this.shape_1949},{t:this.shape_1948},{t:this.shape_1947},{t:this.shape_1946},{t:this.shape_1945},{t:this.shape_1944},{t:this.shape_1943},{t:this.shape_1942},{t:this.shape_1941},{t:this.instance_94},{t:this.shape_1940},{t:this.shape_1939},{t:this.shape_1938},{t:this.shape_1937},{t:this.shape_1936},{t:this.shape_1935},{t:this.shape_1934},{t:this.shape_1933},{t:this.shape_1932},{t:this.shape_1931},{t:this.shape_1930},{t:this.shape_1929},{t:this.shape_1928},{t:this.shape_1927},{t:this.shape_1926},{t:this.shape_1925},{t:this.shape_1924},{t:this.shape_1923},{t:this.shape_1922},{t:this.shape_1921},{t:this.shape_1920},{t:this.shape_1919},{t:this.shape_1918},{t:this.shape_1917},{t:this.instance_93},{t:this.shape_1916},{t:this.shape_1915},{t:this.shape_1914},{t:this.shape_1913},{t:this.shape_1912},{t:this.shape_1911},{t:this.shape_1910},{t:this.shape_1909},{t:this.shape_1908},{t:this.shape_1907},{t:this.shape_1906},{t:this.shape_1905},{t:this.shape_1904},{t:this.shape_1903},{t:this.shape_1902},{t:this.shape_1901},{t:this.shape_1900},{t:this.shape_1899},{t:this.shape_1898},{t:this.shape_1897},{t:this.shape_1896},{t:this.instance_92},{t:this.shape_1895},{t:this.shape_1894},{t:this.shape_1893},{t:this.shape_1892},{t:this.shape_1891},{t:this.shape_1890},{t:this.shape_1889},{t:this.shape_1888},{t:this.shape_1887},{t:this.shape_1886},{t:this.shape_1885},{t:this.shape_1884},{t:this.shape_1883},{t:this.shape_1882},{t:this.shape_1881},{t:this.shape_1880},{t:this.shape_1879},{t:this.shape_1878},{t:this.shape_1877},{t:this.shape_1876},{t:this.shape_1875},{t:this.instance_91},{t:this.shape_1874},{t:this.shape_1873},{t:this.shape_1872},{t:this.shape_1871},{t:this.shape_1870},{t:this.shape_1869},{t:this.shape_1868},{t:this.shape_1867},{t:this.shape_1866},{t:this.shape_1865},{t:this.shape_1864},{t:this.shape_1863},{t:this.shape_1862},{t:this.shape_1861},{t:this.shape_1860},{t:this.shape_1859},{t:this.shape_1858},{t:this.shape_1857},{t:this.shape_1856},{t:this.shape_1855},{t:this.shape_1854},{t:this.instance_90},{t:this.shape_1853},{t:this.shape_1852},{t:this.shape_1851},{t:this.shape_1850},{t:this.shape_1849},{t:this.shape_1848},{t:this.shape_1847},{t:this.shape_1846},{t:this.shape_1845},{t:this.shape_1844},{t:this.shape_1843},{t:this.shape_1842},{t:this.shape_1841},{t:this.shape_1840},{t:this.shape_1839},{t:this.shape_1838},{t:this.shape_1837},{t:this.shape_1836},{t:this.shape_1835},{t:this.instance_89},{t:this.shape_1834},{t:this.shape_1833},{t:this.shape_1832},{t:this.shape_1831},{t:this.shape_1830},{t:this.shape_1829},{t:this.shape_1828},{t:this.shape_1827},{t:this.shape_1826},{t:this.shape_1825},{t:this.shape_1824},{t:this.shape_1823},{t:this.shape_1822},{t:this.shape_1821},{t:this.shape_1820},{t:this.shape_1819},{t:this.shape_1818},{t:this.shape_1817},{t:this.shape_1816},{t:this.instance_88},{t:this.shape_1815},{t:this.shape_1814},{t:this.shape_1813},{t:this.shape_1812},{t:this.shape_1811},{t:this.shape_1810},{t:this.shape_1809},{t:this.shape_1808},{t:this.shape_1807},{t:this.shape_1806},{t:this.shape_1805},{t:this.shape_1804},{t:this.shape_1803},{t:this.instance_87},{t:this.shape_1802},{t:this.shape_1801},{t:this.shape_1800},{t:this.shape_1799},{t:this.shape_1798},{t:this.shape_1797},{t:this.shape_1796},{t:this.shape_1795},{t:this.shape_1794},{t:this.shape_1793},{t:this.shape_1792},{t:this.shape_1791},{t:this.shape_1790},{t:this.instance_86},{t:this.shape_1789},{t:this.shape_1788},{t:this.shape_1787},{t:this.shape_1786},{t:this.shape_1785},{t:this.shape_1784},{t:this.shape_1783},{t:this.shape_1782},{t:this.shape_1781},{t:this.shape_1780},{t:this.shape_1779},{t:this.shape_1778},{t:this.shape_1777},{t:this.instance_85},{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.instance_84},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.instance_83},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.instance_82},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.instance_81},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.instance_80},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.instance_79},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.instance_78},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.instance_77},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.instance_76},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.instance_75},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.instance_74},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.instance_73},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.instance_72},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.instance_71},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.instance_70},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.instance_69},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.instance_68},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.instance_67},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.instance_66},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.instance_65},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.instance_64},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.instance_63},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.instance_62},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.instance_61},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.instance_60},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.instance_59},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.instance_58},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.instance_57},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.instance_56},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.instance_55},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.instance_54},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.instance_53},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.instance_52},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.instance_51},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.instance_50},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.instance_49},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.instance_48},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.instance_47},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.instance_46},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.instance_45},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.instance_44},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.instance_43},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.instance_42},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.instance_41},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.instance_40},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.instance_39},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.instance_38},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.instance_37},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.instance_36},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.instance_35},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.instance_34},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.instance_33},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.instance_32},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.instance_31},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.instance_30},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.instance_29},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.instance_28},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.instance_27},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.instance_26},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.instance_25},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.instance_24},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.instance_23},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.instance_22},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.instance_21},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.instance_20},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.instance_19},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.instance_18},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.instance_17},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.instance_16},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.instance_15},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.instance_14},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.instance_13},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.instance_12},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.instance_11},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.instance_10},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.instance_9},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.instance_8},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.instance_7},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.instance_6},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.instance_5},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_4},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.instance_3},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_TMR_PERFILDEEXITO, new cjs.Rectangle(0,0,310.9,327.9), null);


(lib.m02_tmr_formacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAkAAIAAAngAgOAQIAcAAIAAgfIgcAAg");
	this.shape.setTransform(169.9,127.8,0.862,0.862);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8EA6D9").s().p("AgPASIAAgjIAfAAIAAAjg");
	this.shape_1.setTransform(169.9,127.8,0.862,0.862);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmAUIAAgnIBNAAIAAAngAghAQIBDAAIAAgfIhDAAg");
	this.shape_2.setTransform(164.8,127.8,0.862,0.862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8EA6D9").s().p("AgjASIAAgjIBHAAIAAAjg");
	this.shape_3.setTransform(164.8,127.8,0.862,0.862);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvADIAAgFIBfAAIAAAFg");
	this.shape_4.setTransform(165.6,133.8,0.862,0.862);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6D9B2").s().p("AgtABIAAgBIBbAAIAAABg");
	this.shape_5.setTransform(165.6,133.8,0.862,0.862);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7AEIAAgGIB2AAIAAAGg");
	this.shape_6.setTransform(166.6,132.9,0.862,0.862);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F6D9B2").s().p("Ag4ABIAAgBIBxAAIAAABg");
	this.shape_7.setTransform(166.6,132.9,0.862,0.862);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7AEIAAgGIB2AAIAAAGg");
	this.shape_8.setTransform(166.6,132,0.862,0.862);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6D9B2").s().p("Ag4ABIAAgBIBxAAIAAABg");
	this.shape_9.setTransform(166.6,132,0.862,0.862);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag7AEIAAgHIB2AAIAAAHg");
	this.shape_10.setTransform(166.6,131.1,0.862,0.862);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6D9B2").s().p("Ag4ABIAAgBIBxAAIAAABg");
	this.shape_11.setTransform(166.6,131.1,0.862,0.862);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag7AEIAAgHIB2AAIAAAHg");
	this.shape_12.setTransform(166.6,130.3,0.862,0.862);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6D9B2").s().p("Ag4ABIAAgBIBxAAIAAABg");
	this.shape_13.setTransform(166.6,130.3,0.862,0.862);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7ADIAAgFIB2AAIAAAFg");
	this.shape_14.setTransform(166.6,125.3,0.862,0.862);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6D9B2").s().p("Ag4ABIAAgBIBxAAIAAABg");
	this.shape_15.setTransform(166.6,125.3,0.862,0.862);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag7ADIAAgFIB2AAIAAAFg");
	this.shape_16.setTransform(166.6,124.4,0.862,0.862);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F6D9B2").s().p("Ag4ABIAAgBIBxAAIAAABg");
	this.shape_17.setTransform(166.6,124.4,0.862,0.862);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrADIAAgFIBXAAIAAAFg");
	this.shape_18.setTransform(167.9,123.6,0.862,0.862);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F6D9B2").s().p("AgpABIAAgBIBTAAIAAABg");
	this.shape_19.setTransform(167.9,123.6,0.862,0.862);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8EA6D9").s().p("AgOgQIAdAAIgdAggAgJAFIAPgQIgPAAg");
	this.shape_20.setTransform(171.7,135.1,0.862,0.862);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F6D9B2").s().p("AgKgMIAVAAIgVAZg");
	this.shape_21.setTransform(171.6,135,0.862,0.862);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2F2F2").s().p("AhGBWIAAirICNAAIAACRIgYAagAhCBSIBvAAIAWgYIAAiLIiFAAg");
	this.shape_22.setTransform(167,129.3,0.862,0.862);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8EA6D9").s().p("AhEBUIAAinICJAAIAACNIgXAag");
	this.shape_23.setTransform(167,129.3,0.862,0.862);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8EA6D9").s().p("AA0BTIAAiUIh3AAIAAgRICHAAIAAClgAg/hGIB4AAIAACVIAHAAIAAidIh/AAg");
	this.shape_24.setTransform(168.6,127.6,0.862,0.862);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8EA6D9").s().p("AA2BRIAAiVIh3AAIAAgMICDAAIAAChg");
	this.shape_25.setTransform(168.6,127.6,0.862,0.862);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").p("AAAiYQg+AAgtAtQgsAtAAA+QAAA/AsAtQAtAtA+AAQA/AAAtgtQAsgtAAg/QAAg+gsgtQgtgtg/AAg");
	this.shape_26.setTransform(167.2,128.9,0.862,0.862);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CFE1B5").s().p("AhrBsQgsgtAAg/QAAg+AsgsQAtguA+ABQA/gBAtAuQAsAsAAA+QAAA/gsAtQgtAtg/AAQg+AAgtgtg");
	this.shape_27.setTransform(167.2,128.9,0.862,0.862);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9AC9AC").s().p("AgHA7QgCgEgIgEQgGgCgFAAIgDABIgIAJIgQgOIAJgJQABgEgCgHIgCgEIgFgHIgDgCIgMABIgBgUIAMAAQAEgCADgIIABAAIAAgCQACgFAAgEIgBgEIgJgIIAOgPIAJAIIADABQAEAAAGgCIABgBQAIgEABgFIAAgMIAUAAIAAAMIACACQADADAEACIABAAIACABQAIADAFgCIAIgJIAPAOIgIAJIgBADQAAAEACAFIABACQAEAIAEABIAMAAIABAUIgMAAIgCACQgDADgCAEIgCAEQgCAIACAEIAJAIIgOAPIgJgIQgEgCgIADIAAAAQgGADgDADIgCAEIAAAMIgTAAgAAAgfQgOAAgJAKQgJAKABAMQAAANAKAJQAKAKAMgBQANAAAKgKQAJgKgBgMQAAgOgKgJQgKgIgMAAIAAAAg");
	this.shape_28.setTransform(44.8,110.3,0.862,0.862);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9AC9AC").s().p("AAWByQgGgHgQgBQgMAAgJADIgGAEIgKAVIglgRIAKgVQABgIgJgMIgGgGQgHgHgIgDIgGgBIgWAJIgOgmIAWgIQAHgGABgQIAAgEQAAgLgDgHIgEgGIgVgKIARglIAVAKQAKABANgLIADgDQAHgHADgIIABgGIgIgWIAmgPIAIAXIAFADQAGAEAJABIABAAIAEABQASAAAGgIIAKgVIAlAQIgKAWIABAGQACAJAHAHIADAEQAMALAJAAIAWgIIAOAlIgWAIIgDAGQgEAGgBAJIgBAJQABAPAGAGIAWAKIgRAkIgVgJIgGABQgIACgIAGIABAAQgPANAAAMIAIAVIgmAPgAgVg5QgYAJgLAXQgLAYAJAXQAKAYAXALQAYALAXgJQAYgJALgYQALgYgJgXQgJgYgYgLQgMgGgNAAQgKAAgMAFg");
	this.shape_29.setTransform(31.4,122,0.862,0.862);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").p("AAAkMQhuAAhPBPQhPBPAABuQAABwBPBOQBPBPBuAAQBwAABOhPQBPhOAAhwQAAhuhPhPQhOhPhwAAg");
	this.shape_30.setTransform(35.3,119,0.862,0.862);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CFE1B5").s().p("Ai9C+QhPhOAAhwQAAhuBPhPQBPhPBuAAQBwAABOBPQBPBPAABuQAABwhPBOQhOBPhwAAQhuAAhPhPg");
	this.shape_31.setTransform(35.3,119,0.862,0.862);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DC686B").s().p("AgcBrIgQgEIgJgEIgRgJIgIgGIgKgKIgJgLIAAAAIgBgEIACgDIBTg6IAAhkQAAgGAEAAIAFAAIALACIAFAAIAPAFIAPAHIATANIADACIAKALIAGAIIAJAQIAGAPIADAQIABATIgCAQIgCAHQgCAIgHAPQgGAKgIAKIgKAJQgIAHgMAIQgKAFgNAEIgIABIgNACgAgIAAIhUA8IAIAKIAGAHIAEACIAIAGIALAHIAEACIAOAFIAKADIASABIAGAAIANgCIAIgCQAJgCANgHQAKgFAJgIIAJgJQAGgHAHgMQAFgKADgMIACgHQACgHAAgHIABgGIgCgMIgEgUIgGgNIgEgIIgLgOIgJgKIgLgIIgMgHIgOgFIgPgDIgOgCg");
	this.shape_32.setTransform(170.1,71.1,0.862,0.862);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FAA8B0").s().p("AgWBpIgQgEIgOgFIgQgJIgIgGIgKgJIgIgLIgBAAIAAgCIABgBIBUg6IAAhnQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAFAAIALABIAPAEIAEABIAPAHIATANIAJAJIAJAMIAHALIACAEIAFAOIADALIAAAFIABANIAAAFIgEAXQgDAMgGAKQgGALgHAJIgJAJQgKAIgKAGQgHAEgPAFIgIABIgOACIgGABg");
	this.shape_33.setTransform(170.1,71.1,0.862,0.862);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjBFQgUgcAAghQABgtAggfIACgCIBMBOIhZA/gAgxAIQAAAeARAZIBPg4IhDhFQgdAeAAAog");
	this.shape_34.setTransform(162.9,70.1,0.862,0.862);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F6D9B2").s().p("AgzAIQAAgsAggeIBHBKIhUA7QgTgaAAghg");
	this.shape_35.setTransform(162.8,70.1,0.862,0.862);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgngYIACgCQAggeAqAAIADAAIAABxgAgegXIBABCIAAhdQglABgbAag");
	this.shape_36.setTransform(164.5,64,0.862,0.862);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F6D9B2").s().p("AgjgVQAdgeAqAAIAABng");
	this.shape_37.setTransform(164.6,63.8,0.862,0.862);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").p("AAADPQBWAAA8g8QA+g9AAhWQAAhVg+g9Qg8g8hWAAQhVAAg9A8Qg9A9AABVQAABWA9A9QA9A8BVAAg");
	this.shape_38.setTransform(168.3,70.8,0.862,0.862);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CFE1B5").s().p("AiSCTQg8g9gBhWQABhVA8g9QA9g8BVAAQBWAAA9A8QA8A9AABVQAABWg8A9Qg9A8hWAAQhVAAg9g8g");
	this.shape_39.setTransform(168.3,70.8,0.862,0.862);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6DB5C5").s().p("AgLANIAAgZIAXAAIAAAZgAgIAKIARAAIAAgUIgRAAg");
	this.shape_40.setTransform(35,65.8,0.862,0.862);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6DB5C5").s().p("AgJAMIAAgXIATAAIAAAXg");
	this.shape_41.setTransform(35,65.8,0.862,0.862);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6DB5C5").s().p("AgKAIIAAgPIAVAAIAAAPgAgIAFIARAAIAAgJIgRAAg");
	this.shape_42.setTransform(37,66.2,0.862,0.862);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_43.setTransform(37,66.2,0.862,0.862);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6DB5C5").s().p("AgLAIIAAgPIAXAAIAAAPgAgIAGIARAAIAAgKIgRAAg");
	this.shape_44.setTransform(35,62.2,0.862,0.862);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_45.setTransform(35,62.2,0.862,0.862);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6DB5C5").s().p("AgLAIIAAgPIAXAAIAAAPgAgIAGIARAAIAAgKIgRAAg");
	this.shape_46.setTransform(35,63.7,0.862,0.862);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6DB5C5").s().p("AgJAHIAAgMIATAAIAAAMg");
	this.shape_47.setTransform(35,63.7,0.862,0.862);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6DB5C5").s().p("AgKAXIAAgsIAVAAIAAAsgAgIAUIARAAIAAgnIgRAAg");
	this.shape_48.setTransform(30.5,65,0.862,0.862);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6DB5C5").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_49.setTransform(30.5,65,0.862,0.862);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6DB5C5").s().p("AgKAIIAAgPIAVAAIAAAPgAgIAGIARAAIAAgKIgRAAg");
	this.shape_50.setTransform(30.5,57.5,0.862,0.862);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_51.setTransform(30.5,57.5,0.862,0.862);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6DB5C5").s().p("AgKAIIAAgPIAVAAIAAAPgAgIAGIARAAIAAgKIgRAAg");
	this.shape_52.setTransform(30.5,59.1,0.862,0.862);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_53.setTransform(30.5,59.1,0.862,0.862);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6DB5C5").s().p("AgKAIIAAgPIAVAAIAAAPgAgIAFIARAAIAAgJIgRAAg");
	this.shape_54.setTransform(30.5,60.6,0.862,0.862);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_55.setTransform(30.5,60.6,0.862,0.862);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6DB5C5").s().p("AgKAIIAAgPIAVAAIAAAPgAgIAFIARAAIAAgJIgRAAg");
	this.shape_56.setTransform(30.5,62.1,0.862,0.862);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_57.setTransform(30.5,62.1,0.862,0.862);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6DB5C5").s().p("AgKAXIAAgsIAVAAIAAAsgAgIAUIARAAIAAgnIgRAAg");
	this.shape_58.setTransform(32.7,65,0.862,0.862);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6DB5C5").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_59.setTransform(32.8,65,0.862,0.862);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6DB5C5").s().p("AgKAIIAAgPIAVAAIAAAPgAgIAFIARAAIAAgJIgRAAg");
	this.shape_60.setTransform(32.7,60.6,0.862,0.862);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_61.setTransform(32.8,60.6,0.862,0.862);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6DB5C5").s().p("AgKAIIAAgPIAVAAIAAAPgAgIAFIARAAIAAgJIgRAAg");
	this.shape_62.setTransform(32.7,62.1,0.862,0.862);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6DB5C5").s().p("AgJAHIAAgNIATAAIAAANg");
	this.shape_63.setTransform(32.8,62.1,0.862,0.862);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").p("ABwAAQAAgtghghQghggguAAQgtAAghAgQghAhAAAtQAAAuAhAhQAhAhAtAAQAuAAAhghQAhghAAgug");
	this.shape_64.setTransform(33.1,62.9,0.862,0.862);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CFE1B5").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAgguAAQgtAAghggg");
	this.shape_65.setTransform(33.1,62.9,0.862,0.862);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").p("AkspZIAADHQCnAAB2B2QB1B2AACmQAACnh1B2Qh2B2inAAIAADHIABAAQCCAAB1g1QBxg0BUhcIAJgLQBGhQAmhkQAnhnAAhvQAAgmgEgmQgdjfipiXQiriXjkAAg");
	this.shape_66.setTransform(124.5,98.2,0.862,0.862);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CFE1B5").s().p("AksJaIAAjHQCnAAB2h2QB1h2AAinQAAimh1h2Qh2h2inAAIAAjHQDlAACpCXQCqCXAcDfQAFAmAAAmQAABvgnBnQgmBkhFBQIgKALQhUBchwA0Qh2A1iCAAg");
	this.shape_67.setTransform(124.5,98.2,0.862,0.862);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").p("AACpZQDlAACrCXQCpCXAdDfAACJaIAAjHQimAAh2h2Qh2h2AAinQAAimB2h2QB2h2CmAAIAAjHQj4AAiwCwQixCxAAD4QAAD6CxCwQCwCwD4AAgADsIsIjpAuIgBAAAEHIfICkh0QALgLAKgLADsIsQAHgDAHgEQAHgDAGgDQgGADgGADQgIADgHAEg");
	this.shape_68.setTransform(98.3,98.2,0.862,0.862);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CFE1B5").s().p("Ah7GqQixiwAAj6QAAj4CxixQCviwD5AAIAADHQinAAh2B2Qh1B2AACmQAACnB1B2QB2B2CnAAIAADHQj5AAiviwg");
	this.shape_69.setTransform(72.6,98.2,0.862,0.862);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3F3231").s().p("AiFBiIgKgCQgBAAgDgIQgGgRgHguQgGgkAfgZQgDgxArgUIgHALQgHAMgCAKQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAPgRAcgNQAsgVA/gCQgXAEgRAKQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAABABAAQAAAAAAgBQAbgDAaADQApAEAZAQQgHgBgKAAIgCABIABACQAUAIAOANQAXAXAAAeIgOgQIgBAAIgBABQAJAXgHAZQAAgHgIgHQgBAlgLAxQgLgCgHANQgEAGgBAFQABgQgBgVQgCgpgLgQQgcgqhMABIhHAKQgOAhgSAUQgDAKgCBGQgCgTgKgHg");
	this.shape_70.setTransform(98.2,82.3,0.862,0.862);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3F3231").s().p("AAjAXQgHgBgFgFQgGgFAAgIIAAgCQgIgFgGABIgBAAQgGgBgGAFIAAACQAAAIgHAFQgFAFgGABIg5AAIgCgBQgQgHAAgMIAAgEIgQACIgDgKIAVgDQADgHAOgCIA0AAQAPAAAGAKQAGgDAIABQAIgBAHADQAGgKAOAAIA1AAQANACAEAHIAPABIgCAIIgMACIAAAEQAAANgQAGIgCABgAAZgLIAAARIABAEQACAEAFADIA8AAQAHgBAAgJIAAgRQgBgFgHAAIg8AAQgHACAAACgAhegLIAAARIABAEQACAEAFADIA8AAQAHgBAAgJIAAgRQgBgFgHAAIg8AAQgHACAAACg");
	this.shape_71.setTransform(97.2,90.5,0.862,0.862);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(114.8,114.5,0.862,0.862,0,0,0,2.2,4.4);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.8,115.9,0.862,0.862,0,0,0,1.5,3);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112.8,114.2,0.862,0.862,0,0,0,2.8,5.1);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.7,114.2,0.862,0.862,0,0,0,2.6,5.1);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(81.7,115.4,0.862,0.862,0,0,0,1.5,3.9);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(80.3,114.4,0.862,0.862,0,0,0,2,4.6);
	this.instance_5.alpha = 0.391;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A9B3BC").s().p("AgpAJIBEgmIAPAdQgCALgWAMQgLAEgJAEg");
	this.shape_72.setTransform(101.5,109.5,0.862,0.862);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A9B3BC").s().p("AgOAWQgbgPgBgLIAPgeIBGAwIggAVQgMgFgNgIg");
	this.shape_73.setTransform(94.2,109.1,0.862,0.862);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(99.2,113.7,0.862,0.862,0,0,0,1.2,5.5);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(101.8,113.5,0.862,0.862,0,0,0,1,5.4);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(104,113.4,0.862,0.862,0,0,0,1.1,5.6);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(110.5,113.5,0.862,0.862,0,0,0,1.2,5.3);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(108.6,113.3,0.862,0.862,0,0,0,1,5.8);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(106,113.1,0.862,0.862,0,0,0,1.2,6);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(96.3,113.7,0.862,0.862,0,0,0,1.1,5.5);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(93.5,113.5,0.862,0.862,0,0,0,1,5.4);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(91.3,113.4,0.862,0.862,0,0,0,1.1,5.6);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(84.9,113.5,0.862,0.862,0,0,0,1.2,5.3);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(86.6,113.3,0.862,0.862,0,0,0,0.8,5.8);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(89.4,113.1,0.862,0.862,0,0,0,1.1,6);
	this.instance_17.alpha = 0.391;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BBCACB").s().p("Ah8BCQAehcANgIQAVgOAsgHQAVgEARgBQAngNAjAVQARALAKANIACBeg");
	this.shape_74.setTransform(88.7,114,0.862,0.862);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CCD0D0").s().p("AiABCIAEheQAKgNASgLQAjgVAmANIAnAFQAsAHAUAOQAQAKAhBag");
	this.shape_75.setTransform(107.6,114,0.862,0.862);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E8AF93").s().p("AARAAIgHgCIgFAAIgEAAIgPACIgPAEQAGgEAIgCQAHgDAJgBIAJABIAJADQAJACACAHQgFgFgIgCg");
	this.shape_76.setTransform(92.2,89.4,0.862,0.862);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E1BB93").s().p("AgVClQgPgGgSgNQgmgagVgkIgBgFIgBgWIgBgBQgDAAgEgCIgCgEQgCgCgEgUIgEgcQgDgKAAgIQAAgJADgBQADgCAFAGQACABABADIACgBQgBgBgBgLQgCgPAAgOQAAgzAagMIAAgBQALgLARgKQAigVAhAAIADABIADAAQAhgBAkAUQARALAMALIAAABQAaAMAAAzQAAAWgEATIgBAFIADgEIAGgEQAFgEACABIAAABQAFACgDAWIgFAeQgEAVgCABIAAAAQgEAGgGAAIgBABIgDAbIgBAEQgKAQgRARQgcAcgeAQIgCAAQgMAEgMAAQgKAAgMgEg");
	this.shape_77.setTransform(97.4,90.4,0.862,0.862);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D6AE89").s().p("AgKA/QhcgEAXgWQAUgUAKgkIAGghIArgJQArgGABAPQACAbAnBXQgeACgdAAIgkgBg");
	this.shape_78.setTransform(97.8,104.8,0.862,0.862);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").p("AmSAAQAACnB2B2QB2B2CmAAQCnAAB2h2QB2h2AAinQAAimh2h2Qh2h2inAAQimAAh2B2Qh2B2AACmg");
	this.shape_79.setTransform(98.5,98.2,0.862,0.862);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CFE1B5").s().p("AkcEdQh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACnh2B2Qh2B2inAAQimAAh2h2g");
	this.shape_80.setTransform(98.5,98.2,0.862,0.862);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EFEFEF").s().p("AiECFQg4g2AAhPQAAhOA4g2QA2g4BOAAQBOAAA4A4QA3A2AABOQAABPg3A2Qg4A4hOAAQhOAAg2g4g");
	this.shape_81.setTransform(167.5,130.4,0.862,0.862);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EFEFEF").s().p("AjsDtQhihiAAiLQAAiKBihiQBihjCKABQA+AAA8AWQAKAOAOAIQAPAHAQAAIABAAQBIAtAqBKQArBNAABXQAACLhiBiQhiBiiLAAQiKAAhihig");
	this.shape_82.setTransform(36.6,120.6,0.862,0.862);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EFEFEF").s().p("AjnJoIgFAMIgBAAIAGgMQi+hIh0imQh4iqAAjQQAAkQDBjBQDBjAEPAAQDyAAC4CcQC1CaApDqQADAPACAQQAFAqAAAoQAAB5gqBxQgqBshMBYIg7A8IgNAMIhfBDIgdAQIgaAMIgFADIg7AXIhHAUIgiAGIhrAJQh3AAhwgqg");
	this.shape_83.setTransform(98.5,97.4,0.862,0.862);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EFEFEF").s().p("AhiBiQgpgoABg6QgBg5ApgpQApgoA5AAQA6AAAoAoQApApABA5QgBA6gpAoQgoApg6AAQg5AAgpgpg");
	this.shape_84.setTransform(33.3,63.5,0.862,0.862);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EFEFEF").s().p("AirCsQhIhHABhlQgBhkBIhHQBHhHBkAAQBlAABHBHQBHBHAABkQAABlhHBHQhHBIhlAAQhkAAhHhIg");
	this.shape_85.setTransform(168.4,70.7,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_73},{t:this.shape_72},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_formacion, new cjs.Rectangle(7.7,40.7,181.8,113.5), null);


(lib.m02_tmr_Meta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.m02_tmr_puestosemilla();
	this.instance.parent = this;
	this.instance.setTransform(110.9,113.1,1.581,1.581,0,0,0,105.9,96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.m02_tmr_Meta, new cjs.Rectangle(-5,-7.7,207.7,213.8), null);


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
	this.instance_2.setTransform(3682.5,91.6,34.764,2.053,0,0,0,106.8,44.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:14.35,x:2005.4},36,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Instruccion
	this.text = new cjs.Text("Reto rápido...selecciona las afirmaciones que son correctas.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 522;
	this.text.parent = this;
	this.text.setTransform(-14.4,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(14).to({_off:false},0).wait(38));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgxAuQgUgTAAgbQAAgaAUgTQAVgTAcAAQAdAAAUATQAVATAAAaQAAAbgVATQgUATgdAAQgcAAgVgTg");
	this.shape.setTransform(-453.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460.4,-9.3,664.2,52);


(lib.flechamueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flechainstrucciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.6,22.4);

	this.instance_1 = new lib.circulo1instrucciones("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,24.5,1,1,0,0,0,105.2,10.2);

	this.instance_2 = new lib.circulo2instrucciones("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.3,23.5,1.651,1.651,0,0,0,14.1,14.2);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.circulo2instrucciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,23.3,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.5,43.3,43.3);


(lib.circuloperfilexitomc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m02_TMR_PERFILDEEXITO();
	this.instance.parent = this;
	this.instance.setTransform(198.7,193.3,0.704,0.704,0,0,0,158.6,159.5);

	this.text = new cjs.Text("Los perfiles de éxito se construyen a partir de 3 dimensiones:", "20px 'Arial'", "#333333");
	this.text.lineHeight = 24;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(67.5,52.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2F2F2").ss(17.2,1,1).p("AbgAAQAALZoDIDQoEIErZAAQrYAAoEoEQoDoDAArZQAArZIDoDQIEoDLYAAQLZAAIEIDQIDIDAALZg");
	this.shape.setTransform(176,176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8E8E8").s().p("AzbTcQoEoDAArZQAArZIEoDQIDoDLYAAQLaAAICIDQIEIDAALZQAALZoEIDQoCIEraAAQrYAAoDoEg");
	this.shape_1.setTransform(176,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,369.1,369.1);


(lib.circulomc1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circuloperfilexitomc2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-228,0.1,1,1,0,0,0,176,176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-412.6,-184.5,369.1,369.1);


(lib.cajagrismc1t4m2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bulletrojoarcachico("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(35.6,234,1.145,1.145,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Desempeño: reforzar la importancia del logro de los objetivos, así como los comportamientos claves de la posición.", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 354;
	this.text.parent = this;
	this.text.setTransform(46.5,224.9);

	this.instance_1 = new lib.bulletrojoarcachico("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,188,1.145,1.145,0,0,0,5.9,5.9);

	this.text_1 = new cjs.Text("Desarrollo: desarrollo de competencias y experiencias criticas para la posición.", "16px 'Arial'");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 358;
	this.text_1.parent = this;
	this.text_1.setTransform(46.5,178.9);

	this.instance_2 = new lib.bulletrojoarcachico("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(35.6,161,1.145,1.145,0,0,0,5.9,5.9);

	this.text_2 = new cjs.Text("Selección: perfil de reclutamiento.", "16px 'Arial'");
	this.text_2.lineHeight = 43;
	this.text_2.lineWidth = 388;
	this.text_2.parent = this;
	this.text_2.setTransform(46.5,151.9);

	this.text_3 = new cjs.Text("El Perfil de éxito servirá como una guía para las prácticas de gestión integral del talento, incluyendo:", "16px 'Arial'");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 410;
	this.text_3.parent = this;
	this.text_3.setTransform(19.5,89.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("A+lXhQhoAAhKhJQhIhJgBhoMAAAgnNQABhoBIhJQBKhJBoAAMA9LAAAQBoAABJBJQBKBJAABoMAAAAnNQAABohKBJQhJBJhoAAg");
	this.shape.setTransform(220.9,150.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,441.7,301.1);


(lib.caja_respuestas1M2T4a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var botones = 3;
		var resp = [1,2,3];
		var raiz = this; //guarda el MC padre
		for (var i = 1; i <= botones; i++) {
			raiz["Mod2T4mc6b" + i].n = i;
			raiz["Mod2T4mc6b" + i].sel = false;
			raiz["Mod2T4mc6b" + i].mouseEnabled = true;
			raiz["Mod2T4mc6b" + i].cursor = "pointer";
			console.log(raiz["Mod2T4mc6b" + i].n);
			raiz["Mod2T4mc6b" + i].addEventListener("click", Eventoclick);
		}
		
		function Eventoclick(c) {
		
			console.log("evento click");
			c.currentTarget.sel = true;
			c.currentTarget.mouseEnabled = false;
			c.currentTarget.gotoAndStop(1);
			if (c.currentTarget.n == 1) {
			parent.llamarRetros("bien","¡En efecto! El seleccionar cualquiera de las tres opciones es correcto ya que los perfiles de éxito apoyan la toma de decisiones para garantizar que se cuente con el talento adecuado en las posiciones clave de la organización, en el momento necesario.");
			}
			if (c.currentTarget.n == 2) {
		    parent.llamarRetros("bien","¡En efecto! El seleccionar cualquiera de las tres opciones es correcto ya que los perfiles de éxito apoyan la toma de decisiones para garantizar que se cuente con el talento adecuado en las posiciones clave de la organización, en el momento necesario.");
			}
			if (c.currentTarget.n == 3) {
		    parent.llamarRetros("bien","¡En efecto! El seleccionar cualquiera de las tres opciones es correcto ya que los perfiles de éxito apoyan la toma de decisiones para garantizar que se cuente con el talento adecuado en las posiciones clave de la organización, en el momento necesario.");
			}
			validar();
		}
		
		
		function validar() {
			var finalizo = true;
			if (finalizo) {
				console.log("final de la actividad");
				for (var i = 1; i <= botones; i++) {
					raiz["Mod2T4mc6b" + i].mouseEnabled = false;
					}
				try {
					//parent.llamarRetros("bien","Respuesta B.  ¡En efecto! Contactar al líder del negocio o territorio nos permite tener claridad de los objetivos más significativos del negocio así como los retos que enfrenta la posición analizada, alineando de esta manera las necesidades de talento.");
					//parent.siguiente_verde();
					parent.final_tema();
		
				} catch (e) {
					console.log("no se pudo comunicar con start.js:      " + e);
				}
		
			}else{
					console.log("no ha finalizado la actividad");
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// checkbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(-26,-21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_1.setTransform(-33.6,-25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_2.setTransform(-43.2,-25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_3.setTransform(-52.6,-25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_4.setTransform(-59.9,-25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgHgDQgGgEgEgFIAAAugAgSgrQgIAKAAASQABARAHAIQAHAJALAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_5.setTransform(-68.3,-23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_6.setTransform(-81.1,-25.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_7.setTransform(-93.6,-25.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_8.setTransform(-108.6,-25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_9.setTransform(-115.6,-27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_10.setTransform(-127.6,-25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAACAIgOAAIAAgMQgJAOgRgBQgLABgJgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_11.setTransform(-137.9,-27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_12.setTransform(-152.2,-25.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_13.setTransform(-161.6,-25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_14.setTransform(-168.6,-27.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_15.setTransform(-175.6,-25.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_16.setTransform(-185.1,-25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_17.setTransform(-191.6,-27.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_18.setTransform(-198.6,-25.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_19.setTransform(299.8,-45.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_20.setTransform(290.4,-45.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_21.setTransform(283,-47.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_22.setTransform(275.4,-45.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_23.setTransform(265.4,-45.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_24.setTransform(258.4,-47.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_25.setTransform(251.3,-45.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQAAAHAEADQAHAFAKAAQAKAAAGgFQAFgEADgIQABgFAAgPQgKAMgPAAQgTAAgKgOQgLgOAAgSQAAgOAEgLQAGgLAJgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAIgHgBgSQAAgRgIgJQgHgJgLAAQgJAAgIAJg");
	this.shape_26.setTransform(241.1,-43.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_27.setTransform(234.4,-47.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_28.setTransform(227.8,-45.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_29.setTransform(213.8,-45.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_30.setTransform(204.4,-45.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_31.setTransform(197.4,-47.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_32.setTransform(185.4,-45.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_33.setTransform(173.1,-45.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_34.setTransform(164.4,-45.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgbA7QgLgHABgQIAPADQABAHAFADQAFAFALAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAFgLQAFgLAIgHQAKgGAMAAQAQAAALAOIAAgMIAOAAIAABQQAAAWgEAJQgFAJgKAFQgJAGgNAAQgRAAgKgIgAgQgsQgIAJAAAQQAAATAIAHQAGAJALAAQALAAAHgJQAIgHAAgSQgBgRgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_35.setTransform(154.1,-43.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_36.setTransform(144.4,-45.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_37.setTransform(137.4,-47.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_38.setTransform(133.4,-47.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgIgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_39.setTransform(121.4,-45.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_40.setTransform(114.1,-45.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_41.setTransform(105.4,-45.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_42.setTransform(95.7,-43.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgIADQgIADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_43.setTransform(80.4,-45.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_44.setTransform(70.4,-45.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_45.setTransform(60.4,-45.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_46.setTransform(50.8,-45.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_47.setTransform(44.1,-45.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_48.setTransform(35.4,-45.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALgBANQABAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_49.setTransform(25.7,-43.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_50.setTransform(10.4,-45.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_51.setTransform(0.4,-45.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_52.setTransform(-9.7,-45.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_53.setTransform(-21.9,-45.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_54.setTransform(-30.6,-45.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_55.setTransform(-40.2,-45.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_56.setTransform(-49.6,-45.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgHgDQgGgEgEgFIAAAugAgSgrQgIAKAAASQABARAHAIQAHAJALAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_57.setTransform(-59.3,-43.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_58.setTransform(-74.6,-45.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiBIAPAAIAAAuQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAGADAJQACAIAAAKQAAAYgLANQgMANgRABQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAHQAHAMANAAQAJAAAIgJQAHgIAAgTQAAgQgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_59.setTransform(-84.4,-47.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_60.setTransform(-94.6,-45.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLAAgOQAAgOAEgKQAFgMAJgGQAKgGALAAQAHAAAHADQAGAEAFAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgKAAgKgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAJABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_61.setTransform(-104.9,-47.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_62.setTransform(-119.6,-45.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_63.setTransform(-129.7,-45.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_64.setTransform(-139.9,-43.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_65.setTransform(-154.2,-45.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_66.setTransform(-163.6,-45.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_67.setTransform(-170.6,-47.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_68.setTransform(-179.9,-45.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_69.setTransform(-188.6,-45.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgJAGQgLAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgIAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_70.setTransform(-198.3,-43.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_71.setTransform(324.8,-65.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_72.setTransform(315.4,-65.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_73.setTransform(305.4,-65.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_74.setTransform(295.4,-65.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_75.setTransform(288.4,-67.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_76.setTransform(282.2,-65.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_77.setTransform(275.4,-67.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_78.setTransform(268.8,-65.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_79.setTransform(259.4,-65.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_80.setTransform(249.7,-64);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_81.setTransform(234.8,-65.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgIAIgJADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_82.setTransform(225.4,-65.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_83.setTransform(218.4,-67.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_84.setTransform(209.1,-65.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_85.setTransform(200.4,-65.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_86.setTransform(191.2,-65.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_87.setTransform(181.4,-65.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_88.setTransform(171.4,-65.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_89.setTransform(161.4,-65.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_90.setTransform(152.2,-65.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_91.setTransform(137.4,-65.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_92.setTransform(130.1,-65.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgIgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_93.setTransform(121.4,-65.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgHgDQgGgEgEgFIAAAugAgSgrQgIAKAAASQABARAHAIQAHAJALAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_94.setTransform(111.7,-64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_95.setTransform(96.4,-65.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_96.setTransform(89.1,-65.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_97.setTransform(80.4,-65.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_98.setTransform(73.1,-65.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_99.setTransform(67.1,-65.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_100.setTransform(58.4,-65.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_101.setTransform(49.2,-65.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_102.setTransform(34.4,-65.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAJgGAMAAQAHAAAHADQAHAEAEAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgJgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_103.setTransform(24.1,-67.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_104.setTransform(9.8,-65.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_105.setTransform(0.4,-65.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_106.setTransform(-7,-67.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_107.setTransform(-14.7,-65.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_108.setTransform(-21.9,-65.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_109.setTransform(-32.9,-65.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_110.setTransform(-41.6,-65.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_111.setTransform(-48.6,-67.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_112.setTransform(-52.6,-67.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_113.setTransform(-59.6,-65.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_114.setTransform(-66.9,-65.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_115.setTransform(-72.9,-65.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_116.setTransform(-81.6,-65.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_117.setTransform(-91.2,-65.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_118.setTransform(-100.6,-65.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgJgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_119.setTransform(-110.9,-67.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_120.setTransform(-125.6,-65.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_121.setTransform(-132.6,-67.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAtQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAHADAJQACAHAAALQAAAYgLAMQgMANgRAAQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAIQAHAMANgBQAJABAIgKQAHgJAAgSQAAgRgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_122.setTransform(-139.4,-67.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_123.setTransform(-146.6,-67.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_124.setTransform(-153.2,-65.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_125.setTransform(-162.6,-65.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALgBANQABAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_126.setTransform(-172.3,-64);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_127.setTransform(-187.2,-65.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgvBAIAAh/IBcAAIAAAPIhLAAIAAAnIBGAAIAAAPIhGAAIAAAsIBOAAIAAAOg");
	this.shape_128.setTransform(-197.4,-67.4);

	this.Mod2T4mc6b3 = new lib.mc_seleccion();
	this.Mod2T4mc6b3.parent = this;
	this.Mod2T4mc6b3.setTransform(458.3,117.4,0.845,0.843,0,0,0,6.9,7);

	this.Mod2T4mc6b2 = new lib.mc_seleccion();
	this.Mod2T4mc6b2.parent = this;
	this.Mod2T4mc6b2.setTransform(457.5,34.3,0.845,0.843,0,0,0,6.9,7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_129.setTransform(40,143.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_130.setTransform(32.8,139.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_131.setTransform(23.4,139.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAKgGALAAQAIAAAGADQAGAEAFAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgKAAgKgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAJABAIgJQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_132.setTransform(13.1,137.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_133.setTransform(3.4,139.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_134.setTransform(-6.7,139.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_135.setTransform(-15.8,139.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_136.setTransform(-25.6,139.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAIAAAGADQAHAEAEAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQAKABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_137.setTransform(-35.9,137.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_138.setTransform(-45.6,139.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_139.setTransform(-60.6,139.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_140.setTransform(-68,137.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_141.setTransform(-75.6,139.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_142.setTransform(-85.6,139.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_143.setTransform(-98.1,139.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_144.setTransform(-110.6,139.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_145.setTransform(-123.1,139.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_146.setTransform(-140,141.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_147.setTransform(-154.6,139.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_148.setTransform(-164.3,141.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_149.setTransform(-177.1,139.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_150.setTransform(-189.6,139.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_151.setTransform(-196.6,137.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_152.setTransform(-201,137.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_153.setTransform(360,117.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_154.setTransform(353,119.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_155.setTransform(338,119.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_156.setTransform(328,119.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_157.setTransform(313.5,119.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_158.setTransform(304,119.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_159.setTransform(296.6,117.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_160.setTransform(289.5,119.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_161.setTransform(283.1,117.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_162.setTransform(279,117.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_163.setTransform(267.5,119.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_164.setTransform(258,119.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_165.setTransform(250.8,119.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_166.setTransform(242,119.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_167.setTransform(232.5,119.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_168.setTransform(223,119.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_169.setTransform(213.8,119.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_170.setTransform(204,119.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_171.setTransform(194.5,119.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_172.setTransform(180,119.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_173.setTransform(170,119.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAPADQABAHAFADQAFAFALAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAEgLQAFgLAJgHQAKgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgEAJQgFAJgJAFQgKAGgNAAQgRAAgKgIgAgQgsQgIAJAAAQQAAATAIAHQAGAJALAAQAKAAAIgJQAIgHgBgSQAAgRgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_174.setTransform(159.8,121.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_175.setTransform(150,119.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_176.setTransform(140,119.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_177.setTransform(132.6,117.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgQAAQgUAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_178.setTransform(120,119.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_179.setTransform(110.5,119.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgIAPQAEgCADgEQABgFAAgHIgHAAIAAgSIAQAAIAAASQAAAJgDAGQgEAGgGAEg");
	this.shape_180.setTransform(98.5,124.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_181.setTransform(91,119.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_182.setTransform(78.6,119.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_183.setTransform(68.8,119.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_184.setTransform(60,119.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgNBBIAAhQIgNAAIAAgMIANAAIAAgKQAAgJADgFQACgGAFgEQAFgDAKAAIAQABIgDAOIgJgBQgHAAgEADQgDADAAAIIAAAJIASAAIAAAMIgSAAIAABQg");
	this.shape_185.setTransform(53,117.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_186.setTransform(40,119.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_187.setTransform(32.6,117.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_188.setTransform(25.5,119.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_189.setTransform(16,119.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_190.setTransform(1,119.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgTA8QgKgHgFgLQgGgLABgOQAAgOAEgLQAFgLAKgGQAIgGAMAAQAHAAAHADQAHAEAEAGIAAguIAQAAIAAB/IgPAAIAAgMQgJAPgRAAQgKgBgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_191.setTransform(-9.3,117.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgIAPQAFgCACgEQABgFABgHIgIAAIAAgSIARAAIAAASQAAAJgEAGQgDAGgHAEg");
	this.shape_192.setTransform(-21.5,124.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_193.setTransform(-27,121.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_194.setTransform(-41.2,119.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_195.setTransform(-50.6,119.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_196.setTransform(-57.9,119.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_197.setTransform(-66.6,119.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgUA8QgJgHgFgLQgFgLgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgMQgJAPgRAAQgKgBgKgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAJAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_198.setTransform(-76.9,117.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_199.setTransform(-86.6,119.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_200.setTransform(-93.9,119.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_201.setTransform(-102.6,119.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAtQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAHADAJQACAIAAAJQAAAZgLAMQgMAOgRAAQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAIQAHAMANgBQAJABAIgKQAHgJAAgSQAAgRgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_202.setTransform(-112.4,117.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_203.setTransform(-122.6,119.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_204.setTransform(-129.6,117.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_205.setTransform(-136.6,119.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_206.setTransform(-145.8,119.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_207.setTransform(-160.2,119.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_208.setTransform(-169.6,119.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_209.setTransform(-176.6,117.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_210.setTransform(-188.6,119.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgTA8QgKgHgFgLQgGgLAAgOQABgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgMQgJAPgRAAQgKgBgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQALAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgMAAQgJAAgHAJg");
	this.shape_211.setTransform(-198.9,117.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_212.setTransform(363.4,99.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_213.setTransform(356.4,97.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_214.setTransform(352.4,97.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_215.setTransform(345.4,99.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_216.setTransform(338.1,99.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_217.setTransform(332.1,99.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_218.setTransform(323.4,99.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_219.setTransform(313.8,99.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_220.setTransform(304.4,99.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRgBQgLAAgJgFgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_221.setTransform(294.1,97.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_222.setTransform(279.4,99.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAEgKQAFgMAKgGQAIgGAMAAQAIAAAGAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRgBQgKAAgJgFgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQALAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_223.setTransform(269.1,97.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_224.setTransform(254.8,99.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_225.setTransform(245.4,99.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AAWBAIAAg7QAAgKgFgGQgFgFgKAAQgFAAgHADQgGAEgCAGQgDAGAAAKIAAAzIgQAAIAAh/IAQAAIAAAuQALgNAQAAQAKAAAIAEQAHAEAEAHQADAIAAAMIAAA7g");
	this.shape_226.setTransform(235.4,97.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_227.setTransform(226.2,99.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_228.setTransform(216.4,99.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_229.setTransform(209.1,99.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAFADAKQACAHAAALQAAAXgLAOQgMANgRgBQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAHQAHAMANABQAJgBAIgIQAHgKAAgRQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_230.setTransform(200.6,97.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_231.setTransform(185.8,99.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_232.setTransform(176.4,99.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_233.setTransform(169.4,97.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_234.setTransform(160.1,99.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_235.setTransform(151.4,99.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_236.setTransform(144.1,99.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_237.setTransform(138.1,99.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_238.setTransform(129.4,99.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_239.setTransform(120.2,99.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_240.setTransform(105.4,99.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_241.setTransform(98.1,99.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgIADQgIADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_242.setTransform(89.4,99.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALgBANQABAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_243.setTransform(79.7,101);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_244.setTransform(64.4,99.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_245.setTransform(54.4,97.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_246.setTransform(47.4,97.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_247.setTransform(41.2,99.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_248.setTransform(32.2,99.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_249.setTransform(22.4,99.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAGgFQAFgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_250.setTransform(7.4,99.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRgBQgLAAgJgFgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_251.setTransform(-2.9,97.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_252.setTransform(-17.2,99.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_253.setTransform(-26.6,99.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_254.setTransform(-36.6,99.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_255.setTransform(-46.6,99.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_256.setTransform(-53.6,97.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKAAASQABARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_257.setTransform(-60.3,101);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_258.setTransform(-72.9,99.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_259.setTransform(-81.6,99.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_260.setTransform(-88.9,99.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_261.setTransform(-97.6,99.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAFADAKQACAHAAALQAAAXgLAOQgMANgRgBQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAHQAHAMANABQAJgBAIgIQAHgKAAgRQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_262.setTransform(-107.4,97.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_263.setTransform(-117.6,99.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_264.setTransform(-124.6,97.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_265.setTransform(-131.6,99.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_266.setTransform(-146.6,99.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_267.setTransform(-154,97.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_268.setTransform(-158.6,97.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_269.setTransform(-168.1,99.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_270.setTransform(-177.9,99.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_271.setTransform(-186.6,99.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgwBAIAAh/IAwAAQAMAAAHABQAKABAGAFQAGAEAEAJQAEAHAAAKQAAARgKAKQgLALgbAAIggAAIAAA0gAgfgCIAgAAQARAAAGgGQAIgGAAgLQAAgJgFgGQgEgFgGgCIgQgBIggAAg");
	this.shape_272.setTransform(-197.3,97.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_273.setTransform(-23,61.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_274.setTransform(-30.6,57.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_275.setTransform(-40.6,55.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_276.setTransform(-47.6,55.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_277.setTransform(-53.8,57.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_278.setTransform(-60.6,55.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_279.setTransform(-67.2,57.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_280.setTransform(-76.6,57.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgHgDQgGgEgEgFIAAAugAgSgrQgIAKAAASQABARAHAIQAHAJALAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_281.setTransform(-86.3,59.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_282.setTransform(-101.6,57.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_283.setTransform(-108.6,55.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_284.setTransform(-120.6,57.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAKgGALAAQAIAAAGADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgKAAgKgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAJABAIgJQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_285.setTransform(-130.9,55.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_286.setTransform(-142.9,57.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_287.setTransform(-151.6,57.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_288.setTransform(-161.2,57.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_289.setTransform(-170.6,57.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_290.setTransform(-179.8,57.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_291.setTransform(-189.7,57.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_292.setTransform(-199.2,57.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgIAIgJADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_293.setTransform(279.4,37.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_294.setTransform(264.4,37.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_295.setTransform(257,35.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_296.setTransform(249.4,37.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgUA8QgJgHgFgLQgFgLgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGADQAHAEAEAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRAAQgLgBgJgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_297.setTransform(239.1,35.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_298.setTransform(232.4,35.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgTA8QgKgHgFgLQgGgLABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAIAAAGADQAHAEAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJAOgRAAQgLgBgIgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_299.setTransform(225.1,35.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_300.setTransform(215.4,37.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_301.setTransform(205.4,37.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_302.setTransform(196.2,37.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_303.setTransform(184.1,37.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_304.setTransform(175.4,37.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_305.setTransform(168.4,35.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_306.setTransform(161.3,37.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_307.setTransform(151.1,39.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgHBAIAAiAIAPAAIAACAg");
	this.shape_308.setTransform(144.4,35.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_309.setTransform(137.4,37.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_310.setTransform(127.3,37.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_311.setTransform(118.2,37.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_312.setTransform(106.1,37.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAKgDQAJgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_313.setTransform(97.4,37.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_314.setTransform(90,35.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_315.setTransform(82.4,37.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_316.setTransform(72.4,37.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_317.setTransform(63.2,37.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_318.setTransform(48.4,37.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAtQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAHADAJQACAIAAAJQAAAZgLAMQgMAOgRAAQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAIQAHAMANgBQAJABAIgKQAHgJAAgSQAAgRgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_319.setTransform(38.6,35.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_320.setTransform(28.4,37.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AgTA8QgKgHgFgLQgGgLABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAIAAAGADQAHAEAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJAOgRAAQgLgBgIgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_321.setTransform(18.1,35.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_322.setTransform(3.4,37.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_323.setTransform(-6.7,37.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_324.setTransform(-16.9,39.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_325.setTransform(-31.2,37.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_326.setTransform(-40.6,37.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgHBAIAAiAIAPAAIAACAg");
	this.shape_327.setTransform(-47.6,35.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_328.setTransform(-59.6,37.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_329.setTransform(-69.6,37.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_330.setTransform(-78.8,37.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_331.setTransform(-93.2,37.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_332.setTransform(-102.6,37.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_333.setTransform(-110,35.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_334.setTransform(-117.6,37.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_335.setTransform(-127.6,37.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_336.setTransform(-134.6,35.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_337.setTransform(-144.1,37.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_338.setTransform(-153.6,35.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_339.setTransform(-159.8,37.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_340.setTransform(-169.6,37.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_341.setTransform(-179.6,37.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_342.setTransform(-189.6,37.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_343.setTransform(-198.8,37.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_344.setTransform(336.6,19.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_345.setTransform(322.5,17.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_346.setTransform(313,17.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_347.setTransform(306.1,15.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_348.setTransform(299.8,17.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_349.setTransform(290,17.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_350.setTransform(280,17.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_351.setTransform(272.6,15.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_352.setTransform(265,17.4);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_353.setTransform(255.3,19.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_354.setTransform(242.6,17.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_355.setTransform(230,17.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_356.setTransform(220.8,17.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgJAPQAFgCADgEQABgFAAgHIgIAAIAAgSIARAAIAAASQABAJgEAGQgDAGgHAEg");
	this.shape_357.setTransform(208.5,22.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_358.setTransform(201.5,17.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgIgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_359.setTransform(192,17.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_360.setTransform(182.8,17.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_361.setTransform(176.1,15.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_362.setTransform(171.6,15.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_363.setTransform(167.3,15.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_364.setTransform(161.8,17.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_365.setTransform(153.8,17.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_366.setTransform(139.5,17.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_367.setTransform(130,17.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_368.setTransform(123.1,15.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_369.setTransform(116.8,17.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_370.setTransform(107,17.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_371.setTransform(97,17.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_372.setTransform(90.1,15.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_373.setTransform(85.8,17.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_374.setTransform(77,17.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_375.setTransform(67.3,19.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AAZAvIgUgdIgFgIIgYAlIgTAAIAjgwIgggtIAUAAIAOAWIAGALIAHgLIAPgWIATAAIggAsIAjAxg");
	this.shape_376.setTransform(57.6,17.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_377.setTransform(48,17.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_378.setTransform(33.5,17.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_379.setTransform(24,17.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_380.setTransform(17,15.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_381.setTransform(5,17.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_382.setTransform(-2.4,15.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_383.setTransform(-10,17.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_384.setTransform(-20,17.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_385.setTransform(-32.4,17.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_386.setTransform(-45,17.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_387.setTransform(-52.2,17.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_388.setTransform(-61,17.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_389.setTransform(-68,15.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_390.setTransform(-74.2,17.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_391.setTransform(-86.2,17.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_392.setTransform(-91.9,15.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_393.setTransform(-99,17.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_394.setTransform(-105.9,15.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AgNBBIAAhQIgNAAIAAgMIANAAIAAgKQAAgJACgFQADgGAFgDQAFgEAKgBIAQACIgDAOIgKgBQgGAAgEADQgDADAAAJIAAAIIASAAIAAAMIgSAAIAABQg");
	this.shape_395.setTransform(-110,15.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_396.setTransform(-118,17.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRgBQgKAAgJgFgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQALAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgMAAQgJAAgHAJg");
	this.shape_397.setTransform(-128.3,15.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_398.setTransform(-143,17.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_399.setTransform(-158,17.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRgBQgKAAgKgFgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_400.setTransform(-168.3,15.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_401.setTransform(-178,17.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_402.setTransform(-187.4,19.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AApBAIgPgmIg1AAIgOAmIgTAAIAyh/IASAAIA1B/gAgIgZIgOAkIAqAAIgNgiIgIgbQgCANgFAMg");
	this.shape_403.setTransform(-197.6,15.6);

	this.Mod2T4mc6b1 = new lib.mc_seleccion();
	this.Mod2T4mc6b1.parent = this;
	this.Mod2T4mc6b1.setTransform(457.5,-45.4,0.845,0.843,0,0,0,6.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mod2T4mc6b1},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.Mod2T4mc6b2},{t:this.Mod2T4mc6b3},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// numeros
	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgoBNQgQgOgCgWIAhgEQABAMAHAHQAHAHAKAAQAKAAAHgIQAHgIAAgOQAAgNgHgHQgHgIgKAAQgFAAgJADIADgbQANAAAIgGQAHgHAAgKQAAgJgFgGQgGgFgIAAQgIAAgHAGQgGAGgBAMIgggGQADgQAHgJQAHgKAMgGQAMgFAOAAQAZAAAPAQQAMANAAARQAAAXgZAOQAPADAJALQAJALAAARQAAAXgRARQgRAQgZAAQgYAAgQgOg");
	this.shape_404.setTransform(-257.7,117.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#DC686B").s().p("Ah7B7QgzgyAAhJQAAhHAzgzQA0g0BHAAIAGAAQBFACAxAyQAzAzAABHQAABJgzAyQgzAzhJAAQhHAAg0gzg");
	this.shape_405.setTransform(-257.6,116.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("Ag7BaQACgSAKgQQAJgRAdgaQAWgVAGgIQAHgKAAgLQAAgLgGgGQgHgGgKAAQgKAAgHAGQgGAHgBAPIgigEQADgcAQgMQAQgNAXAAQAbAAAPAOQAPAPAAAVQAAAMgEALQgFALgJALQgGAIgQAPIgUATIgHAKIBDAAIAAAgg");
	this.shape_406.setTransform(-257.9,34.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#DC686B").s().p("Ah7B7QgzgzAAhIQAAhHAzgzQA0g0BHAAIAGAAQBFADAxAxQAzAzAABHQAABIgzAzQgzA0hJAAQhHAAg0g0g");
	this.shape_407.setTransform(-257.6,33.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AAFBaIAAiAQgSARgZAJIAAggQANgEAQgMQAOgMAGgRIAcAAIAACzg");
	this.shape_408.setTransform(-259.6,-44.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#DC686B").s().p("Ah7B8QgzgzAAhJQAAhHAzgzQA0gzBHAAIAGAAQBFABAxAyQAzAzAABHQAABJgzAzQgzAyhJAAQhHAAg0gyg");
	this.shape_409.setTransform(-257.6,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404}]}).wait(1));

	// fondos
	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#F3F3F3").s().p("EAx1ASzInUAAIhrAAMghFAAAMg/PAAAQggABgagIQhcgZAAh1IAAm/QAAh2BcgZQAZgIAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsABAaAKQBJAeAGBbIABATIAABRIAADPIAABUIAAA4IAAAEIAAAPQAACWiWgBgEAx1AF4InUAAIhrAAMghFAAAMg/PAAAQggAAgagHQhcgaAAh1IAAm+QAAh1BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBcIABASIAABRIAADPIAABUIAAA4IAAADIAAAPQAACWiWAAgEAx1gHHInUAAIhrAAMghFAAAMg/PAAAQggAAgagIQhcgZAAh2IAAm/QAAh0BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsgBAaALQBJAeAGBbIABASIAABSIAADPIAABVIAAA3IAAADIAAAPQAACWiWABg");
	this.shape_410.setTransform(141.1,36);

	this.timeline.addTween(cjs.Tween.get(this.shape_410).wait(1));

}).prototype = getMCSymbolPrototype(lib.caja_respuestas1M2T4a, new cjs.Rectangle(-275.1,-84.3,786.3,240.7), null);


(lib.T1_Señalar_btn_mc_1_lineamc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T1_Señalar_btn_gr_1_lineamc4();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},9).to({alpha:0},10).wait(47).to({alpha:1},10).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,223,180);


(lib.T1_Señalar_btn_mc_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T1_Señalar_btn_gr_1_linea();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.191},9).to({alpha:0},10).wait(47).to({alpha:1},10).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,265,180);


(lib.boton_mc4 = function(mode,startPosition,loop) {
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

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T1_Señalar_btn_mc_1_lineamc4();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,16.7,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("AvEOEQiWAAAAiWIAA3bQAAiWCWAAIeJAAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape.setTransform(111.5,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.259)").s().p("Au+OEQiWAAgBiWIAA3bQABiWCWAAId+AAQCWAAAACWIAAXbQAACWiWAAg");
	this.shape_1.setTransform(111,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,223,180.2);


(lib.boton_mc = function(mode,startPosition,loop) {
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

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T1_Señalar_btn_mc_1_linea();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,16.7,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().rr(-132.5,-90,265,180,15);
	this.shape.setTransform(132.5,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.259)").s().rr(-132.5,-90,265,180,15);
	this.shape_1.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,265,180.2);


(lib.tarjeta01grmc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m02_tmr_Meta();
	this.instance.parent = this;
	this.instance.setTransform(135.1,69.1,0.513,0.513,0,0,0,108.2,90.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F9D2").s().p("AhhIIIr0AAIAAyyIfPAAIAAQ8QgKBrhtALIujAAIhgCjgAwCIIQhtgLgKhrIAAw8IEkAAIAASyg");
	this.shape.setTransform(132.7,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAsQgIgIAAgNQAAgHADgFQADgHAGgDQAFgDAHgCIAOgCQAUgCAJgEIAAgEQAAgLgEgEQgHgGgMABQgLAAgGAEQgFAEgDALIgRgDQADgLAFgGQAFgGAKgEQAJgEAMAAQANAAAHADQAIAEAEAEQAEAFABAGIABAQIAAAVQAAAXABAHQABAGADAFIgRAAQgDgFAAgGQgKAHgIADQgIADgKAAQgQABgJgIgAgDAGIgPAEQgEACgCADQgDADAAAFQAAAGAGAFQAFAEAJAAQAJAAAHgDQAIgFADgHQADgGAAgLIAAgGQgJAEgRACg");
	this.shape_1.setTransform(193.8,167.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBEIAAiHIAQAAIAACHg");
	this.shape_2.setTransform(186.5,165.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBEIAAiHIAPAAIAACHg");
	this.shape_3.setTransform(182.3,165.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIBEIAAhhIAQAAIAABhgAgIgwIAAgTIAQAAIAAATg");
	this.shape_4.setTransform(178.1,165.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAyAyIAAg9QAAgJgBgFQgCgEgEgDQgFgDgFAAQgLAAgHAHQgGAHAAAQIAAA3IgQAAIAAg/QAAgLgEgFQgEgGgKAAQgHAAgGAEQgGADgCAIQgDAHAAANIAAAyIgRAAIAAhhIAPAAIAAAOQAFgIAIgEQAHgEAKgBQALAAAHAGQAGAEADAIQAMgSASAAQAPABAIAIQAIAIAAARIAABCg");
	this.shape_5.setTransform(168.1,167.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAmQgNgNABgYQgBgYANgNQANgOATgBQAUAAANAOQAMANAAAYIAAAEIhIAAQABAQAIAJQAIAJALAAQAKAAAGgFQAHgEADgLIASACQgEAPgMAJQgKAHgSAAQgUAAgNgNgAgSgdQgIAIgBANIA2AAQAAgMgGgHQgHgKgOABQgKgBgIAIg");
	this.shape_6.setTransform(154.9,167.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAsQgKgIgDgQIARgCQABAJAGAFQAHAGAKAAQAMAAAFgFQAGgEAAgHQAAgGgFgDQgEgCgNgDQgSgFgHgDQgHgDgDgFQgEgHAAgHQAAgGADgGQADgFAFgEQAEgDAHgCQAGgCAIgBQALABAJADQAIADAEAGQAFAGABAJIgQACQgBgHgGgEQgFgEgJAAQgLAAgFAEQgFADAAAFQAAAEACACQACACAEACIAOAFQASAEAHADQAHADAEAFQAEAGAAAIQAAAJgFAIQgFAGgJAEQgJAEgMAAQgSAAgKgHg");
	this.shape_7.setTransform(144.8,167.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAsQgKgIgDgQIARgCQABAJAGAFQAHAGAKAAQAMAAAFgFQAGgEAAgHQAAgGgFgDQgEgCgNgDQgSgFgHgDQgHgDgDgFQgEgHAAgHQAAgGADgGQADgFAFgEQAEgDAHgCQAGgCAIgBQALABAJADQAIADAEAGQAFAGABAJIgQACQgBgHgGgEQgFgEgJAAQgLAAgFAEQgFADAAAFQAAAEACACQACACAEACIAOAFQASAEAHADQAHADAEAFQAEAGAAAIQAAAJgFAIQgFAGgJAEQgJAEgMAAQgSAAgKgHg");
	this.shape_8.setTransform(130,167.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAmQgMgNAAgZQAAgaAPgOQANgLARAAQAVAAAMAOQANANAAAYQAAASgGALQgFAKgLAHQgLAFgNAAQgTAAgOgNgAgUgbQgIAKAAARQAAATAIAKQAJAJALAAQANAAAHgJQAJgKAAgTQAAgSgJgJQgHgKgNABQgLgBgJAKg");
	this.shape_9.setTransform(120,167.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCBAQgFgDgCgEQgCgFAAgPIAAg4IgMAAIAAgNIAMAAIAAgYIAQgKIAAAiIARAAIAAANIgRAAIAAA5IABAJIACADIAGABIAIAAIACAPIgNABQgJAAgEgDg");
	this.shape_10.setTransform(112.2,165.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAsQgKgIgDgQIARgCQABAJAGAFQAHAGAKAAQAMAAAFgFQAGgEAAgHQAAgGgFgDQgEgCgNgDQgSgFgHgDQgHgDgDgFQgEgHAAgHQAAgGADgGQADgFAFgEQAEgDAHgCQAGgCAIgBQALABAJADQAIADAEAGQAFAGABAJIgQACQgBgHgGgEQgFgEgJAAQgLAAgFAEQgFADAAAFQAAAEACACQACACAEACIAOAFQASAEAHADQAHADAEAFQAEAGAAAIQAAAJgFAIQgFAGgJAEQgJAEgMAAQgSAAgKgHg");
	this.shape_11.setTransform(104.6,167.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAmQgNgNAAgYQABgYANgNQAMgOATgBQAUAAANAOQAMANAAAYIAAAEIhJAAQABAQAJAJQAIAJALAAQAJAAAHgFQAGgEAEgLIARACQgDAPgMAJQgKAHgSAAQgUAAgNgNgAgSgdQgHAIgCANIA2AAQgBgMgEgHQgJgKgNABQgKgBgIAIg");
	this.shape_12.setTransform(94.7,167.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAvQgIgDgDgFQgFgFgBgIIgBgPIAAg8IARAAIAAA1IABASQACAHAFADQAEAEAIAAQAGAAAIgEQAGgEADgGQACgHABgMIAAg0IAQAAIAABhIgPAAIAAgOQgLAQgTAAQgJAAgHgDg");
	this.shape_13.setTransform(84.1,167.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgzBEIAAiHIAzAAQANAAAHACQAKABAHAEQAGAGAFAIQAEAIAAAKQAAARgLALQgLANgdAAIgiAAIAAA3gAghgCIAiAAQASgBAHgGQAIgHAAgLQAAgIgFgHQgEgGgHgBQgFgCgMAAIgiAAg");
	this.shape_14.setTransform(72.9,165.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3EFB9").s().p("AtkOEIAA8HIf7AAQCWAAAACWIAAXbQAACWiWAAgAyWOEQiWAAAAiWIAA3bQAAiWCWAAIEyAAIAAcHg");
	this.shape_15.setTransform(132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta01grmc5, new cjs.Rectangle(0,0,265,180), null);


(lib.tarjeta01grmc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.m02_tmr_formacion();
	this.instance.parent = this;
	this.instance.setTransform(112.4,90.4,0.871,0.871,0,0,0,97.5,114.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F9D2").s().p("AiBIIIowAAIAAyyIaNAAIAAQ8QgJBrhtALIslAAIhhCjgAtlIIQhtgLgJhrIAAw8IEpAAIAASyg");
	this.shape.setTransform(112.8,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_1.setTransform(193,166.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_2.setTransform(183.6,166.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_3.setTransform(174.4,166.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_4.setTransform(167.6,164.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_5.setTransform(163.2,165);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_6.setTransform(158.9,164.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_7.setTransform(153.3,166.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_8.setTransform(145.4,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_9.setTransform(131,166.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_10.setTransform(121.6,166.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_11.setTransform(114.6,164.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_12.setTransform(108.4,166.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_13.setTransform(98.6,166.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_14.setTransform(88.6,166.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_15.setTransform(81.2,165);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_16.setTransform(73.6,166.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_17.setTransform(63.9,168.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_18.setTransform(51.1,166.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_19.setTransform(38.6,166.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeA7QgNgKgGgPQgHgQAAgSQAAgUAHgPQAJgPAOgHQANgIARAAQATAAAOAKQAMAJAGASIgRAEQgEgOgJgHQgJgGgNAAQgNAAgLAHQgJAHgEAMQgFANAAAMQABAQAFAMQAEAMAKAGQALAGAKAAQAPAAAKgIQAJgJAEgQIARAFQgGAUgNALQgOALgVAAQgTAAgOgHg");
	this.shape_20.setTransform(27.2,164.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3EFB9").s().p("AqSOEIAA8HIZXAAQCWAAAACWIAAXbQAACWiWAAgAvEOEQiWAAAAiWIAA3bQAAiWCWAAIEyAAIAAcHg");
	this.shape_21.setTransform(111.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta01grmc4, new cjs.Rectangle(-1.9,0,224.9,199.1), null);


(lib.tarjeta01_mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Funcion global para deshabilitar las tarjetas mientras corre la animacion
		//Para el funcionamiento local de este MC
		/*validar=function() {
			if(this.currentFrame == 0 || this.currentFrame == 29 || this.currentFrame == 59) {
				console.log("if " + this.currentFrame);
				newRoot.parent.funcion("enabled");
			} else {
				console.log("else " + this.currentFrame);
				newRoot.parent.funcion("disabled");
			}
		}*/
		newRoot = this;
		this.stop();
	}
	this.frame_3 = function() {
		//console.log(this.parent.funcion);
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.busy=false;
		//this.parent.funcion(newRoot);
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		//console.log("frame: "+newRoot.currentFrame);
		//this.parent.funcion(newRoot);
	}
	this.frame_59 = function() {
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(26).call(this.frame_29).wait(1).call(this.frame_30).wait(3).call(this.frame_33).wait(26).call(this.frame_59).wait(1));

	// Contenido
	this.instance = new lib.bulletmorado("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.2,242.6,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Ej. Para la posición de Gerente de Mercadotecnia, los puestos semillas pueden ser:", "16px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 261;
	this.text.parent = this;
	this.text.setTransform(2,129.9);

	this.text_1 = new cjs.Text("Aquellas posiciones que idealmente el candidato debe cubrir previo a llegar al rol de manera natural, ya sea de forma jerárquica o bien de forma funcional en las operaciones.", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 261;
	this.text_1.parent = this;
	this.text_1.setTransform(2,30.8);

	this.instance_1 = new lib.bulletmorado("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.2,222.8,1,1,0,0,0,5.9,5.9);

	this.instance_2 = new lib.bulletmorado("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.2,202,1,1,0,0,0,5.9,5.9);

	this.text_2 = new cjs.Text("Puestos semilla", "bold 20px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 231;
	this.text_2.parent = this;
	this.text_2.setTransform(132.4,-4);

	this.text_3 = new cjs.Text("Jefe de Mercadotecnia.\nJefe de Ventas.\nJefe de RGM.", "16px 'Arial'", "#333333");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 234;
	this.text_3.parent = this;
	this.text_3.setTransform(14.8,193.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.instance_2},{t:this.instance_1,p:{x:7.2,y:222.8}},{t:this.text_1,p:{x:2,y:30.8,text:"Aquellas posiciones que idealmente el candidato debe cubrir previo a llegar al rol de manera natural, ya sea de forma jerárquica o bien de forma funcional en las operaciones.",lineHeight:17.9,lineWidth:261}},{t:this.text,p:{x:2,y:129.9,text:"Ej. Para la posición de Gerente de Mercadotecnia, los puestos semillas pueden ser:",font:"16px 'Arial'",textAlign:"",lineHeight:17.9,lineWidth:261}},{t:this.instance,p:{x:7.2,y:242.6}}]},24).to({state:[{t:this.text_1,p:{x:59.8,y:88.3,text:"Jefe de Mercadotecnia.\nGerente de Ventas.\n\n",lineHeight:27.9,lineWidth:234}},{t:this.text,p:{x:132.4,y:38.7,text:"Puestos semilla",font:"bold 20px 'Arial'",textAlign:"center",lineHeight:24.35,lineWidth:231}},{t:this.instance_1,p:{x:52.2,y:96.9}},{t:this.instance,p:{x:52.2,y:124.9}}]},6).to({state:[]},5).to({state:[]},24).wait(1));

	// Capa 1
	this.instance_3 = new lib.tarjeta01grmc5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(30).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// Capa 2
	this.instance_4 = new lib.tarjeta_para_textomc5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(132.5,94.4,0.038,0.718,0,0,0,132.5,87.8);
	this.instance_4._off = true;

	this.instance_5 = new lib.tarjeta_para_texto();
	this.instance_5.parent = this;
	this.instance_5.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_5}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regX:132.6,regY:90,scaleX:0.88,scaleY:1.09,x:132.6,y:134.1},8,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:132.5},7).wait(1).to({regX:132.5,regY:87.8,scaleX:0.04,scaleY:0.72,y:94.4},15).to({_off:true},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265,180);


(lib.tarjeta01_mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Funcion global para deshabilitar las tarjetas mientras corre la animacion
		//Para el funcionamiento local de este MC
		/*validar=function() {
			if(this.currentFrame == 0 || this.currentFrame == 29 || this.currentFrame == 59) {
				console.log("if " + this.currentFrame);
				newRoot.parent.funcion("enabled");
			} else {
				console.log("else " + this.currentFrame);
				newRoot.parent.funcion("disabled");
			}
		}*/
		newRoot = this;
		this.stop();
	}
	this.frame_3 = function() {
		//console.log(this.parent.funcion);
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.busy=false;
		//this.parent.funcion(newRoot);
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		//console.log("frame: "+newRoot.currentFrame);
		//this.parent.funcion(newRoot);
	}
	this.frame_57 = function() {
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(26).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(26).call(this.frame_57).wait(1));

	// Contenido
	this.instance = new lib.bulletnaranja("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8.9,135.4,1,1,0,0,0,5.9,5.9);

	this.instance_1 = new lib.bulletnaranja("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.9,108.4,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Orientación al cliente interno y externo.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 201;
	this.text.parent = this;
	this.text.setTransform(16.5,125.9);

	this.text_1 = new cjs.Text("Orientación a resultados.", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 201;
	this.text_1.parent = this;
	this.text_1.setTransform(16.5,98);

	this.instance_2 = new lib.bulletnaranja("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.9,76.8,1,1,0,0,0,5.9,5.9);

	this.text_2 = new cjs.Text("Trabajo en equipo.", "18px 'Arial'", "#333333");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 202;
	this.text_2.parent = this;
	this.text_2.setTransform(16.5,65.2);

	this.text_3 = new cjs.Text("Competencias críticas", "bold 20px 'Arial'", "#333333");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 231;
	this.text_3.parent = this;
	this.text_3.setTransform(110.1,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.instance_2},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.instance}]},24).to({state:[{t:this.text_3},{t:this.text_2},{t:this.instance_2},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.instance}]},6).to({state:[]},2).to({state:[]},24).wait(2));

	// dobla inicio
	this.instance_3 = new lib.tarjeta01grmc4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).to({_off:true},1).wait(28).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// color de tarjeta
	this.instance_4 = new lib.tarjeta_para_textomc4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regX:132.6,scaleX:0.88,scaleY:1.09,x:143.1,y:90.1},8,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:143},7).wait(1).to({regX:132.5,scaleX:0.04,scaleY:1,x:132.5,y:90},13).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,224.9,199.1);


(lib.mc6T3M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// pregunta
	this.instance = new lib.pregunta1tema3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.3,80.1,1,1,0,0,0,408.3,44.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:441.3,alpha:1},18,cjs.Ease.get(1)).wait(15));

	// reto
	this.instance_1 = new lib.caja_respuestas1M2T4a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(855.9,360.8,1,1,0,0,0,257.5,142);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:595.9,alpha:1},24,cjs.Ease.get(1)).wait(9));

	// instrucciones
	this.instance_2 = new lib.instruccionesmc1t2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.2,4.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(9));

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCaQg/AAguguQgtgsAAhAQAAg+AtguQAugtA/AAIA9AAQBAAAAtAtQAtAuAAA+QAABAgtAsQgtAuhAAAg");
	this.shape.setTransform(-48.2,462.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,35.3,1316.6,442.2);


(lib.mc2T4M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_113 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(113).call(this.frame_113).wait(1));

	// Layer 3
	this.instance = new lib.circulomc1a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-100.5,-19.1,1,1,-68.1,0,0,-231.5,-8.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-231.6,regY:-8.4,rotation:0,x:193,y:3.7,alpha:1},15,cjs.Ease.get(1)).wait(98).to({startPosition:0},0).wait(1));

	// perfil exito banderita1
	this.instance_1 = new lib.perfilexitobanderita1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.6,-87,1,1,0,0,0,270.5,49.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({x:558.1,alpha:1},19,cjs.Ease.get(1)).wait(69));

	// perfil exito banderita2
	this.instance_2 = new lib.perfilexitobanderita2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(316.6,23.2,1,1,0,0,0,270.5,51.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({_off:false},0).to({x:558.1,alpha:1},19,cjs.Ease.get(1)).wait(42));

	// perfil exito banderita 3
	this.instance_3 = new lib.perfilexitobanderita3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(337.6,123.3,1,1,0,0,0,270.5,42.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({x:558.1,alpha:1},19,cjs.Ease.get(1)).wait(16));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiMCbQg7hAAAhbQAAhaA7hAQA6hBBSAAQBTAAA6BBQA7BAAABaQAABbg7BAQg6BBhTAAQhSAAg6hBg");
	this.shape.setTransform(-278.7,305.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-298.7,-204.4,392.4,531.8);


(lib.mc1T4M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
	}
	this.frame_195 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(195).call(this.frame_195).wait(1));

	// Layer 2
	this.instance = new lib.perfilexito("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(783.3,-2.9,0.922,0.922,26.2,0,0,184.6,182.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({rotation:0,x:676.3,y:-4.9,alpha:1},15,cjs.Ease.get(1)).wait(76));

	// caja larga
	this.instance_1 = new lib.cajagdemc1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.5,-75.3,0.454,1,0,0,0,363.4,93);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({scaleX:1,x:363.5,alpha:1},19,cjs.Ease.get(1)).wait(57));

	// caja gris
	this.instance_2 = new lib.cajagrismc1t4m2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(166).to({_off:false},0).to({y:89.6,alpha:1},17,cjs.Ease.get(1)).wait(13));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgxAAhHQAAhGAwgxQAwgyBEAAQBFAAAwAyQAwAxAABGQAABHgwAxQgwAyhFAAQhEAAgwgyg");
	this.shape.setTransform(-191.3,293.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(196));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,276.4,33,34);


(lib.instrucciones1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// flecha 
	this.instance = new lib.flechainstrucciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.4,13.9);
	this.instance.alpha = 0.07;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:-9.5,y:13.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(55));

	// circulo1
	this.instance_1 = new lib.circulo1instrucciones("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.4,13.2,0.215,0.215);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:105.2,regY:10.2,scaleX:1,scaleY:1,x:-8.1,y:15.4,alpha:1},5,cjs.Ease.get(1)).to({_off:true},20).wait(55));

	// circulo2
	this.instance_2 = new lib.circulo2instrucciones("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,14.3,0.368,0.368,0,0,0,14.3,14.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:14.2,regY:14.2,scaleX:1.26,scaleY:1.26},6,cjs.Ease.get(1)).to({regX:14.1,scaleX:1.65,scaleY:1.65,x:-8.8,y:14.4,alpha:0},4,cjs.Ease.get(1)).to({_off:true},10).wait(55));

	// circulo3
	this.instance_3 = new lib.circulo2instrucciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.8,14.2,1,1,0,0,0,14.2,14.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},14).wait(55));

	// flecha mueve
	this.instance_4 = new lib.flechamueve("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8.7,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(5).to({x:8},0).to({x:384.8},38,cjs.Ease.get(1)).wait(12));

	// tapa circulo
	this.instance_5 = new lib.tapakakigeneral("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(3639.1,91.6,34.227,2.053,0,0,0,106.8,44.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({regX:106.9,scaleX:29.13,scaleY:1.5,x:3481.4,y:69.8},38,cjs.Ease.get(1)).to({_off:true},9).wait(3));

	// Instruccion
	this.text = new cjs.Text("Haz clic sobre cada tarjeta para ver un ejemplo.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(-14.4,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(50));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Ag4AgQgXgNAAgTQAAgSAXgNQAYgNAgAAQAhAAAYANQAXANAAASQAAATgXANQgYANghAAQggAAgYgNg");
	this.shape.setTransform(-192.7,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.7,-9.3,404.5,52);


(lib.tarjeta02_mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Funcion global para deshabilitar las tarjetas mientras corre la animacion
		//Para el funcionamiento local de este MC
		/*validar=function() {
			if(this.currentFrame == 0 || this.currentFrame == 29 || this.currentFrame == 59) {
				console.log("if " + this.currentFrame);
				newRoot.parent.funcion("enabled");
			} else {
				console.log("else " + this.currentFrame);
				newRoot.parent.funcion("disabled");
			}
		}*/
		newRoot = this;
		this.stop();
	}
	this.frame_3 = function() {
		//console.log(this.parent.funcion);
		//this.parent.funcion(newRoot);
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.busy=false;
		//this.parent.funcion(newRoot);
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		//console.log("frame: "+newRoot.currentFrame);
		//this.parent.funcion(newRoot);
	}
	this.frame_57 = function() {
		//this.parent.funcion(newRoot);
		this.parent.busy=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(26).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(26).call(this.frame_57).wait(1));

	// Contenido
	this.text = new cjs.Text("2", "13px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 16;
	this.text.parent = this;
	this.text.setTransform(18.9,128.1);

	this.text_1 = new cjs.Text("1", "13px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 16;
	this.text_1.parent = this;
	this.text_1.setTransform(18.4,83.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD9A34").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgYAiAAQAjAAAZAYQAZAZAAAiQAAAjgZAZQgZAYgjAAQgiAAgZgYg");
	this.shape.setTransform(22.3,133.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD9A34").s().p("Ag7A8QgZgYAAgkQAAgiAZgZQAZgYAigBQAjABAZAYQAZAZAAAiQAAAkgZAYQgZAYgjABQgigBgZgYg");
	this.shape_1.setTransform(22.3,88.7);

	this.text_2 = new cjs.Text("Conocimientos para el desarrollo", "bold 20px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 206;
	this.text_2.parent = this;
	this.text_2.setTransform(116.4,21.9);

	this.text_3 = new cjs.Text("Manejo de rutinas de S&OP. ", "18px 'Arial'", "#333333");
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 192;
	this.text_3.parent = this;
	this.text_3.setTransform(41.3,123.3);

	this.text_4 = new cjs.Text("Lanzamiento de productos.", "18px 'Arial'", "#333333");
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 195;
	this.text_4.parent = this;
	this.text_4.setTransform(41.3,78.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]},25).to({state:[{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]},5).to({state:[]},2).to({state:[]},24).wait(2));

	// dobla inicio
	this.instance = new lib.tarjeta02grmc4();
	this.instance.parent = this;
	this.instance.setTransform(132.4,90,1,1,0,0,0,132.4,90);

	this.instance_1 = new lib.tarjeta01grmc4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[]},1).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:132.5,scaleX:0.04,x:132.5},14,cjs.Ease.get(1)).wait(29).to({_off:false},0).to({regX:132.4,scaleX:1,x:132.4},14).wait(1));

	// color de tarjeta
	this.instance_2 = new lib.tarjeta_para_textomc4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.5,90,0.038,1,0,0,0,132.5,90);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:132.6,scaleX:0.88,scaleY:1.09,x:143.1,y:90.1},8,cjs.Ease.get(1)).to({regX:132.4,scaleX:1.11,scaleY:1.11,x:143},7).wait(1).to({regX:132.5,scaleX:0.04,scaleY:1,x:132.5,y:90},13).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,0,224.9,180);


(lib.mc5T4M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de tarjetas totales:
		var tarjetas = 3;
		var root = this;
		// true o false para hacer secuencial o no
		var multi = false;
		var cont = 0;
		var Secuencial = false;
		var unaVezFin = true;
		var tar = 0;
		var tarAnt = 0;
		tar = 0;
		tarjAnt = 0;
		cont = 0;
		root.busy = false;
		//Para hacer que las tarjetas sean secuenciales:
		if (parent.pagActual < parent.Pag[parent.IDActual] || parent.backdoor) {
			multi = true;
		}
		if (!multi) {
			EnSecuencia();
		}
		iniciar();
		function iniciar() {
			console.log("ejecuta todo el codigo");
			for (var i = 1; i <= tarjetas; i++) {
				root['tarj' + i].sel = false;
				root['tarj' + i].n = i;
				root['tarj' + i].gotoAndStop(0);
				root['b' + i].n = i;
				root['tarj' + i].cursor = "pointer";
				root['b' + i].cursor = "pointer";
				root['b' + i].on("click", function (event) {
					if (!root.busy) {
						//--------------------------------------
						console.log("dio click a la tarjeta: " + root['tarj' + this.n].currentFrame);
						//FIX GIROS DE LA CARTA			
						if (tar == this.n) {
							root['tarj' + this.n].play();
						} else {
							root['tarj' + this.n].gotoAndPlay(1);
						}
						//TERMINA FIX
						cont++;
						this.vista = true;
						this.gotoAndPlay(1);
						//console.log((tar + ":v/");
		
						if (multi) {
							if (tar >= 1) {
								//FIX CARTAS
								if (root['tarj' + tar].currentFrame == 29) {
									resetAll();
								}
								//TERMINA FIX
							}
						}
		
						if (Secuencial) {
		
							if (tar >= 1) {
								//FIX CARTAS
								if (root['tarj' + tar].currentFrame == 29) {
									resetAll();
								}
								//TERMINA FIX
							}
		
							if (true) {
								Resaltes(this.n);
								if (cont >= 1) {
									//console.log(("entro");
									this.gotoAndPlay(1);
									cont = 0;
								} else {
									root['tarj' + this.n].gotoAndStop(0);
									cont = 0;
									//console.log(("no entro");
								}
							}
						}
						TodasVistas();
						tarAnt = tar;
						tar = this.n;
		
		
						root.busy = true;
						//--------------------------------------
					}
				}); //-------------------------------------------
		
				root['b' + i].on("rollover", function (event) {
					this.gotoAndStop(0);
		
				});
		
		
				root['b' + i].on("rollout", function (event) {
					this.gotoAndStop(0);
		
				});
		
			}
		}
		
		function resetAll() {
			for (var t = 1; t <= tarjetas; t++) {
		
				if (root['tarj' + t].currentFrame >= 29) {
					root['tarj' + t].gotoAndPlay(31);
				}
			}
		}
		
		
		function EnSecuencia() {
			Secuencial = true;
			console.log("esta en secuencia");
			for (var i = 2; i <= tarjetas; i++) {
				root["b" + i].resalte.alpha = 0;
				root["tarj" + i].mouseEnabled = false;
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
			root.b1.mouseEnabled = true;
			root.tarj1.moueseEnabled = true;
		}
		function Resaltes(n) {
			console.log("resalta el siguiente boton");
			//console.log((n);
			SacaResaltes(n);
		}
		function SacaResaltes(n) {
			if (n < tarjetas) {
				console.log("ya lo resalto");
				root["b" + (n + 1)].resalte.alpha = 100;
				root["b" + (n + 1)].mouseEnabled = true;
				root["tarj" + (n + 1)].mouseEnabled = true;
				//console.log(("saca resalte al siguiente");
		
			}
			//console.log(("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		function TodasVistas() {
			var contador = 0;
			for (var i = 1; i <= tarjetas; i++) {
				if (root["b" + i].vista) {
					contador++;
		
				}
			}
		
			// Qué hacer cuando ya se ve todo el contenido:
			if (contador == tarjetas && unaVezFin) {
				//console.log((" Todo visitado ");
				//unaVezFin = false;
				//USAR SI NO ES LA ULTIMA PAGINA:
				try {
					console.log("Termino la actividad");
					parent.habilitarSiguiente();
				} catch (err) {
					console.log("errror" + err);
				}
			}
		}
		function regresar() {
			console.log("se ejecuta la funcion regresar");
			for (var i = 1; i <= tarjetas; i++) {
				root['tarj' + i].gotoAndStop(0);
			}
		}
	}
	this.frame_111 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(45).call(this.frame_111).wait(1));

	// header1
	this.instance = new lib.no3perfil("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-174.9,-126.9,1,1,0,0,0,290.8,73.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.6,alpha:1},22,cjs.Ease.get(1)).wait(90));

	// header2
	this.instance_1 = new lib.no3perfilsale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.9,-119.2,1,1,0,0,0,555.6,58.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:341.9,alpha:1},20,cjs.Ease.get(1)).wait(70));

	// Instrucciones usuario
	this.instance_2 = new lib.instrucciones1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117.4,-38.6,1,1,0,0,0,95.7,21.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).wait(47));

	// cortina destapa tarjetas
	this.instance_3 = new lib.cortinabcam4mc3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(418.4,108.2,1,1,0,0,0,442.3,124.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.cortinabcam4mc5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(430.4,108.8,1,0.953,0,0,0,442.2,124.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},65).to({state:[{t:this.instance_4}]},31).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).to({_off:true,regX:442.2,scaleY:0.95,x:430.4,y:108.8,alpha:0},31,cjs.Ease.get(1)).wait(16));

	// botones
	this.b3 = new lib.boton_mc();
	this.b3.parent = this;
	this.b3.setTransform(714.3,114.8,1.105,1.571,0,0,0,133.9,89.2);

	this.b2 = new lib.boton_mc();
	this.b2.parent = this;
	this.b2.setTransform(419.4,114.8,1.105,1.571,0,0,0,133.8,89.2);

	this.b1 = new lib.boton_mc();
	this.b1.parent = this;
	this.b1.setTransform(122.3,114.8,1.105,1.571,0,0,0,131.5,89.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]},65).wait(47));

	// tarjetones
	this.tarj3 = new lib.tarjeta03_mc5();
	this.tarj3.parent = this;
	this.tarj3.setTransform(714.8,81,1,1,0,0,0,132.4,90);

	this.tarj2 = new lib.tarjeta02_mc5();
	this.tarj2.parent = this;
	this.tarj2.setTransform(417.6,81,1,1,0,0,0,132.4,90);

	this.tarj1 = new lib.tarjeta01_mc5();
	this.tarj1.parent = this;
	this.tarj1.setTransform(122.6,81,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tarj1},{t:this.tarj2},{t:this.tarj3}]},65).wait(47));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgyAAhGQAAhFAwgyQAxgyBDAAQBEAAAxAyQAwAyAABFQAABGgwAyQgxAyhEAAQhDAAgxgyg");
	this.shape.setTransform(-203.3,305.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.7,-203.8,1161.2,555.4);


(lib.mc4T4M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de tarjetas totales:
		var tarjetas = 4;
		var root = this;
		// true o false para hacer secuencial o no
		var multi = false;
		var cont = 0;
		var Secuencial = false;
		var unaVezFin = true;
		var tar = 0;
		var tarAnt = 0;
		tar = 0;
		tarjAnt = 0;
		cont = 0;
		root.busy = false;
		//Para hacer que las tarjetas sean secuenciales:
		if (parent.pagActual < parent.Pag[parent.IDActual] || parent.backdoor) {
			multi = true;
		}
		if (!multi) {
			EnSecuencia();
		}
		iniciar();
		function iniciar() {
			console.log("ejecuta todo el codigo");
			for (var i = 1; i <= tarjetas; i++) {
				root['tarj' + i].sel = false;
				root['tarj' + i].n = i;
				root['tarj' + i].gotoAndStop(0);
				root['b' + i].n = i;
				root['tarj' + i].cursor = "pointer";
				root['b' + i].cursor = "pointer";
				root['b' + i].on("click", function (event) {
					if (!root.busy) {
						//--------------------------------------
						console.log("dio click a la tarjeta: " + root['tarj' + this.n].currentFrame);
						//FIX GIROS DE LA CARTA			
						if (tar == this.n) {
							root['tarj' + this.n].play();
						} else {
							root['tarj' + this.n].gotoAndPlay(1);
						}
						//TERMINA FIX
						cont++;
						this.vista = true;
						this.gotoAndPlay(1);
						//console.log((tar + ":v/");
		
						if (multi) {
							if (tar >= 1) {
								//FIX CARTAS
								if (root['tarj' + tar].currentFrame == 29) {
									resetAll();
								}
								//TERMINA FIX
							}
						}
		
						if (Secuencial) {
		
							if (tar >= 1) {
								//FIX CARTAS
								if (root['tarj' + tar].currentFrame == 29) {
									resetAll();
								}
								//TERMINA FIX
							}
		
							if (true) {
								Resaltes(this.n);
								if (cont >= 1) {
									//console.log(("entro");
									this.gotoAndPlay(1);
									cont = 0;
								} else {
									root['tarj' + this.n].gotoAndStop(0);
									cont = 0;
									//console.log(("no entro");
								}
							}
						}
						TodasVistas();
						tarAnt = tar;
						tar = this.n;
		
		
						root.busy = true;
						//--------------------------------------
					}
				}); //-------------------------------------------
		
				root['b' + i].on("rollover", function (event) {
					this.gotoAndStop(0);
		
				});
		
		
				root['b' + i].on("rollout", function (event) {
					this.gotoAndStop(0);
		
				});
		
			}
		}
		
		function resetAll() {
			for (var t = 1; t <= tarjetas; t++) {
		
				if (root['tarj' + t].currentFrame >= 29) {
					root['tarj' + t].gotoAndPlay(31);
				}
			}
		}
		
		
		function EnSecuencia() {
			Secuencial = true;
			console.log("esta en secuencia");
			for (var i = 2; i <= tarjetas; i++) {
				root["b" + i].resalte.alpha = 0;
				root["tarj" + i].mouseEnabled = false;
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
			root.b1.mouseEnabled = true;
			root.tarj1.moueseEnabled = true;
		}
		function Resaltes(n) {
			console.log("resalta el siguiente boton");
			//console.log((n);
			SacaResaltes(n);
		}
		function SacaResaltes(n) {
			if (n < tarjetas) {
				console.log("ya lo resalto");
				root["b" + (n + 1)].resalte.alpha = 100;
				root["b" + (n + 1)].mouseEnabled = true;
				root["tarj" + (n + 1)].mouseEnabled = true;
				//console.log(("saca resalte al siguiente");
		
			}
			//console.log(("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		function TodasVistas() {
			var contador = 0;
			for (var i = 1; i <= tarjetas; i++) {
				if (root["b" + i].vista) {
					contador++;
		
				}
			}
		
			// Qué hacer cuando ya se ve todo el contenido:
			if (contador == tarjetas && unaVezFin) {
				//console.log((" Todo visitado ");
				//unaVezFin = false;
				//USAR SI NO ES LA ULTIMA PAGINA:
				try {
					console.log("Termino la actividad");
					parent.habilitarSiguiente();
				} catch (err) {
					console.log("errror" + err);
				}
			}
		}
		function regresar() {
			console.log("se ejecuta la funcion regresar");
			for (var i = 1; i <= tarjetas; i++) {
				root['tarj' + i].gotoAndStop(0);
			}
		}
	}
	this.frame_111 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(45).call(this.frame_111).wait(1));

	// header1
	this.instance = new lib.no2perfil("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-174.9,-126.9,1,1,0,0,0,290.8,73.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.6,alpha:1},22,cjs.Ease.get(1)).wait(90));

	// header2
	this.instance_1 = new lib.no2perfilsale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.9,-119.2,1,1,0,0,0,555.6,58.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:341.9,alpha:1},20,cjs.Ease.get(1)).wait(70));

	// Instrucciones usuario
	this.instance_2 = new lib.instrucciones1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.4,-2.3,1,1,0,0,0,95.7,21.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).wait(47));

	// cortina destapa tarjetas
	this.instance_3 = new lib.cortinabcam4mc3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(414.7,108.2,1.063,1,0,0,0,442.2,124.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).to({regX:442.1,scaleX:1.06,scaleY:0.95,x:415.1,y:108.8,alpha:0},31,cjs.Ease.get(1)).wait(16));

	// botones
	this.b3 = new lib.boton_mc4();
	this.b3.parent = this;
	this.b3.setTransform(554.7,114,1,1,0,0,0,132.4,90);

	this.b4 = new lib.boton_mc4();
	this.b4.parent = this;
	this.b4.setTransform(787.6,114,1,1,0,0,0,132.4,90);

	this.b2 = new lib.boton_mc4();
	this.b2.parent = this;
	this.b2.setTransform(321,114,1,1,0,0,0,132.4,90);

	this.b1 = new lib.boton_mc4();
	this.b1.parent = this;
	this.b1.setTransform(86.8,114,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b1},{t:this.b2},{t:this.b4},{t:this.b3}]},65).wait(47));

	// tarjetones
	this.tarj4 = new lib.tarjeta04_mc4();
	this.tarj4.parent = this;
	this.tarj4.setTransform(788.6,114,1,1,0,0,0,132.4,90);

	this.tarj3 = new lib.tarjeta03_mc4();
	this.tarj3.parent = this;
	this.tarj3.setTransform(554.5,114,1,1,0,0,0,132.4,90);

	this.tarj2 = new lib.tarjeta02_mc4();
	this.tarj2.parent = this;
	this.tarj2.setTransform(320.4,114,1,1,0,0,0,132.4,90);

	this.tarj1 = new lib.tarjeta01_mc4();
	this.tarj1.parent = this;
	this.tarj1.setTransform(86.3,114,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tarj1},{t:this.tarj2},{t:this.tarj3},{t:this.tarj4}]},65).wait(47));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgyAAhGQAAhFAwgyQAxgyBDAAQBEAAAxAyQAwAyAABFQAABGgwAyQgxAyhEAAQhDAAgxgyg");
	this.shape.setTransform(-203.3,305.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.7,-203.8,1161.2,555.4);


(lib.mc3T4M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_66 = function() {
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de tarjetas totales:
		var tarjetas = 3;
		var root = this;
		// true o false para hacer secuencial o no
		var multi = false;
		var cont = 0;
		var Secuencial = false;
		var unaVezFin = true;
		var tar = 0;
		var tarAnt = 0;
		tar = 0;
		tarjAnt = 0;
		cont = 0;
		root.busy = false;
		//Para hacer que las tarjetas sean secuenciales:
		if (parent.pagActual < parent.Pag[parent.IDActual] || parent.backdoor) {
			multi = true;
		}
		
		if (!multi) {
			EnSecuencia();
		}
		iniciar();
		function iniciar() {
			console.log("ejecuta todo el codigo");
			for (var i = 1; i <= tarjetas; i++) {
				root['tarj' + i].sel = false;
				root['tarj' + i].n = i;
				root['tarj' + i].gotoAndStop(0);
				root['b' + i].n = i;
				root['tarj' + i].cursor = "pointer";
				root['b' + i].cursor = "pointer";
				root['b' + i].on("click", function (event) {
					if (!root.busy) {
						//--------------------------------------
						console.log("dio click a la tarjeta: " + root['tarj' + this.n].currentFrame);
						//FIX GIROS DE LA CARTA			
						if (tar == this.n) {
							root['tarj' + this.n].play();
						} else {
							root['tarj' + this.n].gotoAndPlay(1);
						}
						//TERMINA FIX
						cont++;
						this.vista = true;
						this.gotoAndPlay(1);
						//console.log((tar + ":v/");
		
						if (multi) {
							if (tar >= 1) {
								//FIX CARTAS
								if (root['tarj' + tar].currentFrame == 29) {
									resetAll();
								}
								//TERMINA FIX
							}
						}
		
						if (Secuencial) {
		
							if (tar >= 1) {
								//FIX CARTAS
								if (root['tarj' + tar].currentFrame == 29) {
									resetAll();
								}
								//TERMINA FIX
							}
		
							if (true) {
								Resaltes(this.n);
								if (cont >= 1) {
									//console.log(("entro");
									this.gotoAndPlay(1);
									cont = 0;
								} else {
									root['tarj' + this.n].gotoAndStop(0);
									cont = 0;
									//console.log(("no entro");
								}
							}
						}
						TodasVistas();
						tarAnt = tar;
						tar = this.n;
		
		
						root.busy = true;
						//--------------------------------------
					}
				}); //-------------------------------------------
		
				root['b' + i].on("rollover", function (event) {
					this.gotoAndStop(0);
		
				});
		
		
				root['b' + i].on("rollout", function (event) {
					this.gotoAndStop(0);
		
				});
		
			}
		}
		
		function resetAll() {
			for (var t = 1; t <= tarjetas; t++) {
		
				if (root['tarj' + t].currentFrame >= 29) {
					root['tarj' + t].gotoAndPlay(31);
				}
			}
		}
		
		
		function EnSecuencia() {
			Secuencial = true;
			console.log("esta en secuencia");
			for (var i = 2; i <= tarjetas; i++) {
				root["b" + i].resalte.alpha = 0;
				root["tarj" + i].mouseEnabled = false;
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
			root.b1.mouseEnabled = true;
			root.tarj1.moueseEnabled = true;
		}
		function Resaltes(n) {
			console.log("resalta el siguiente boton");
			//console.log((n);
			SacaResaltes(n);
		}
		function SacaResaltes(n) {
			if (n < tarjetas) {
				console.log("ya lo resalto");
				root["b" + (n + 1)].resalte.alpha = 100;
				root["b" + (n + 1)].mouseEnabled = true;
				root["tarj" + (n + 1)].mouseEnabled = true;
				//console.log(("saca resalte al siguiente");
		
			}
			//console.log(("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		function TodasVistas() {
			var contador = 0;
			for (var i = 1; i <= tarjetas; i++) {
				if (root["b" + i].vista) {
					contador++;
		
				}
			}
		
			// Qué hacer cuando ya se ve todo el contenido:
			if (contador == tarjetas && unaVezFin) {
				//console.log((" Todo visitado ");
				//unaVezFin = false;
				//USAR SI NO ES LA ULTIMA PAGINA:
				try {
					console.log("Termino la actividad");
					parent.habilitarSiguiente();
				} catch (err) {
					console.log("errror" + err);
				}
			}
		}
		function regresar() {
			console.log("se ejecuta la funcion regresar");
			for (var i = 1; i <= tarjetas; i++) {
				root['tarj' + i].gotoAndStop(0);
			}
		}
	}
	this.frame_111 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(66).call(this.frame_66).wait(45).call(this.frame_111).wait(1));

	// header1
	this.instance = new lib.no1perfil("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-174.9,-126.9,1,1,0,0,0,290.8,73.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.6,alpha:1},22,cjs.Ease.get(1)).wait(90));

	// header2
	this.instance_1 = new lib.no1perfilsale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.9,-119.2,1,1,0,0,0,555.6,58.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:341.9,alpha:1},20,cjs.Ease.get(1)).wait(70));

	// Instrucciones usuario
	this.instance_2 = new lib.instrucciones1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117.4,-2.3,1,1,0,0,0,95.7,21.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(65).to({_off:false},0).wait(47));

	// cortina destapa tarjetas
	this.instance_3 = new lib.cortinabcam4mc3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(418.4,108.2,1,1,0,0,0,442.3,124.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(65).to({_off:false},0).to({regX:442.2,scaleY:0.95,x:430.4,y:108.8,alpha:0},31,cjs.Ease.get(1)).wait(16));

	// botones
	this.b3 = new lib.boton_mc();
	this.b3.parent = this;
	this.b3.setTransform(703.8,114,1,1,0,0,0,132.4,90);

	this.b2 = new lib.boton_mc();
	this.b2.parent = this;
	this.b2.setTransform(417.6,114,1,1,0,0,0,132.4,90);

	this.b1 = new lib.boton_mc();
	this.b1.parent = this;
	this.b1.setTransform(131.9,114,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]},65).wait(47));

	// tarjetones
	this.tarj3 = new lib.tarjeta03_mc();
	this.tarj3.parent = this;
	this.tarj3.setTransform(703.8,114,1,1,0,0,0,132.4,90);

	this.tarj2 = new lib.tarjeta02_mc();
	this.tarj2.parent = this;
	this.tarj2.setTransform(417.6,114,1,1,0,0,0,132.4,90);

	this.tarj1 = new lib.tarjeta01_mc();
	this.tarj1.parent = this;
	this.tarj1.setTransform(131.4,114,1,1,0,0,0,132.4,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tarj1},{t:this.tarj2},{t:this.tarj3}]},65).wait(47));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgyAAhGQAAhFAwgyQAxgyBDAAQBEAAAxAyQAwAyAABFQAABGgwAyQgxAyhEAAQhDAAgxgyg");
	this.shape.setTransform(-203.3,305.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-465.7,-203.8,1161.2,555.4);


// stage content:
(lib.AC_TMR_M02_04 = function(mode,startPosition,loop) {
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
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// PAGINAS
	this.fixed = new lib.mc1T4M2TMR();
	this.fixed.parent = this;
	this.fixed.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance = new lib.mc2T4M2TMR();
	this.instance.parent = this;
	this.instance.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_1 = new lib.mc3T4M2TMR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_2 = new lib.mc4T4M2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_3 = new lib.mc5T4M2TMR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_4 = new lib.mc6T3M2TMR();
	this.instance_4.parent = this;
	this.instance_4.setTransform(387,262.1,1,1,0,0,0,365.4,228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fixed}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// TITULO
	this.instance_5 = new lib.tema_entrada_titulo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(303.6,249.9);

	this.instance_6 = new lib.tituloestatico();
	this.instance_6.parent = this;
	this.instance_6.setTransform(303.6,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,497.4,603.6,301.8);
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