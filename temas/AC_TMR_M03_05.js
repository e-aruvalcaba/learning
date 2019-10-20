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


(lib.verdecirculoadentross = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAhBBIhYhnQgCgCABgDQAAgDACgBIAYgSQAFgEAEAFIBMBlQADADgCAFIgNAUQgBADgEAAQgDAAgCgDg");
	this.shape.setTransform(61,80.9,0.715,0.715);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgrBBIgMgUQgCgEACgEIBNhlQAEgFAFAEIAYASQACABAAADQABADgCACIhYBnQgCADgDAAQgEAAgCgDg");
	this.shape_1.setTransform(80.4,80.9,0.715,0.715);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9BD9C").s().p("AgPgBIAEgTIAOAEIgBAGQAAAHAEAEQAFAIAFADIgQAJg");
	this.shape_2.setTransform(58.1,76.7,0.715,0.715);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9BD9C").s().p("AgJARQgLgMgEgNQgDgPAHgFQARgNAMAZIAIAMQAAABABABQABAAAAAAQABABAAgBQAAAAABgBIABgDIADACQACABgEAWIgTAOg");
	this.shape_3.setTransform(56.7,74.2,0.715,0.715);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9BD9C").s().p("AgPALIAKgKQAGgHgEgJIAPgEIAEASIgQAVg");
	this.shape_4.setTransform(83.6,76.9,0.715,0.715);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#41523C").s().p("AAAAHIgCgNIACAAIAEANg");
	this.shape_5.setTransform(73.9,95,0.715,0.715);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#41523C").s().p("AgBAGIABgNIACABIgBAOg");
	this.shape_6.setTransform(67,94.9,0.715,0.715);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AgnAHIgegHIABgKIAXAGQAbAFAQABQAYAAAugKIACAJIg7AKIgKAAQgPAAgZgEg");
	this.shape_7.setTransform(70.8,94.9,0.715,0.715);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AgXATIgBgLQgBgLABgBIADgCIABADQAAABABAAQAAABABAAQAAAAABgBQAAAAABgBIAHgNQAOgYAPAMQAIAGgEAOQgDAOgMALIgMAQg");
	this.shape_8.setTransform(85,74.4,0.715,0.715);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4D").s().p("AgRAEIAdgQIAGAMQgBAIgRAFg");
	this.shape_9.setTransform(71.9,77.5,0.715,0.715);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AgSgBIAHgNIAeAUIgOAJQgWgJgBgHg");
	this.shape_10.setTransform(69.3,77.3,0.715,0.715);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#744C28").s().p("Ag6AjQgDAAgCgPQgCgOABgKQABgLAXgOQAZgPATACQATACAVAIQARAIAAACQADADAAAJQABAGgCAFQgCAJAEANQABACgNARQgEgbgDgCQgCgBgDgMIgEgKQgDAFgGAFQgMAJgOABIgigCQgTAAgBALQgCAPADAJQgDgHgEgBg");
	this.shape_11.setTransform(70.4,67.1,0.715,0.715);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AAeB5IgegGIAGhGQABgRgFgyQgBAIgPAOQgEACgEgBQgFAAgDgCIgvg+IASAKQARAIACgJQAJgpAGgJIALgIQAOgJAegCQARgGAPAJQAIAFAEAGIAEB0QACB2gJABIgDAAQgKAAgcgFg");
	this.shape_12.setTransform(65.8,86.1,0.715,0.715);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AhGB+QgJgBACh2IAEh0IAMgLQAPgJARAGIARACQASADAJAGIAMAIQAFAJAJApQACAJASgIQAJgEAIgGIgvA+QgDACgFAAQgEABgEgCQgPgPAAgHQgBgJgCAgQgDAhABALIAFBGQgxALgRAAIgEAAg");
	this.shape_13.setTransform(75.5,86.1,0.715,0.715);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9BD9C").s().p("AgIBIQgagKgPgZIAAgCIAAgKIgBAAQgCAAgCgDIgDgJIgBgNIgBgHQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABABAAAAQABAAAAAAQABABAAAAIABACIABAAQgBgJAAgJQAAgWALgGQAAgCAMgHQAPgJAOAAIACAAIAAAAIAAAAIAAAAQAYgBATATQALAGAAAWQAAAJgBAJIgBACIABgCQAEgEACABQADABgCAKIAAAAIgFAWQgBADgDAAIgBAAIgBAMIAAACQgOAVgXAMIgBAAIgKABQgFAAgEgBg");
	this.shape_14.setTransform(70.5,70.6,0.715,0.715);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDAB86").s().p("AgEAbQgogBAKgKQAOgOABgYIATgEQASgDABAHQAAAMASAlIgaABIgPgBg");
	this.shape_15.setTransform(70.6,75.8,0.715,0.715);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4D").s().p("AAnDXIgTgDIgDhvQgChwgCgLIgJhjIgRB+IgNDQIg7AAIAIkNIAPifQAZARBugOIAHA0QAGBCAAAQIgGEbIgOAIQgEADgKAAIgNgBg");
	this.shape_16.setTransform(70.3,109.5,0.715,0.715);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1A1A1A").s().p("AANAUIghgKQgUABgCgCQgCgBAAgIIAAgIIAEgJIArgCIAFALIAbAMQALAFgBAHQAAABgBABQAAABAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_17.setTransform(75.5,125.9,0.715,0.715);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1A1A1A").s().p("AgaAOQgCgHAHgKIAIgKIADgLIAAgBIAlAAIAAAVQABAMgCACQgCAGgKAFIgHAEIgWABQgHgEgEgIg");
	this.shape_18.setTransform(65.8,126.4,0.715,0.715);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7DA98").s().p("AgcAHIAAgNIA5AAIAAANg");
	this.shape_19.setTransform(58.6,26.7,0.715,0.715);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7DA98").s().p("AgbAHIAAgNIA4AAIAAANg");
	this.shape_20.setTransform(83.2,26.7,0.715,0.715);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7DA98").s().p("AgGAXIAAgtIANAAIAAAtg");
	this.shape_21.setTransform(70.9,14,0.715,0.715);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7DA98").s().p("AgcANQAZgQAXgUIAJALIgxAkg");
	this.shape_22.setTransform(61,34.2,0.715,0.715);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7DA98").s().p("AgaAMIAtggIAHAJIgtAgg");
	this.shape_23.setTransform(81.3,19.1,0.715,0.715);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7DA98").s().p("AgbgPIAKgKIAtApIgKAKg");
	this.shape_24.setTransform(61.6,18.3,0.715,0.715);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7DA98").s().p("AgbgPIAJgKQASASAcAWIgJALIgugpg");
	this.shape_25.setTransform(80.2,35.1,0.715,0.715);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8EA6D9").s().p("AgkAgIAkg/IAlA/g");
	this.shape_26.setTransform(70.6,40.3,0.715,0.715);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8EA6D9").s().p("AgNBuIAAjbIAbAAIAADbg");
	this.shape_27.setTransform(70.5,50,0.715,0.715);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8EA6D9").s().p("AgiANIA2gwIAPBHg");
	this.shape_28.setTransform(93.7,77.5,0.715,0.715);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8EA6D9").s().p("AhhBIQBGgRA4hNQAdgoAOgkIAaAKQgPAogfAqQg9BVhRAUg");
	this.shape_29.setTransform(102.2,71.3,0.715,0.715);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8EA6D9").s().p("AgTgjIA2AwIhFAXg");
	this.shape_30.setTransform(46.4,77.5,0.715,0.715);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8EA6D9").s().p("AgzgGQgTgbgPgdQgLgVgBgFIAagKIArBMQA4BNBGARIgHAbQhRgUg9hVg");
	this.shape_31.setTransform(38,71.3,0.715,0.715);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7DA98").s().p("ABCBuIhCgwIhDAxIgFABIAAgEIATg+IAEgJQACgGgBgDQgBgDgFgEIgIgEIg0glIgDgFIAGgCIBMAAQAHAAACgGIAXhJIADgGIAEAGIAXBIQADAHAGAAIBLAAIAHACIgEAFQgiAYgcAUQgFADACAGIAYBIIAAAHg");
	this.shape_32.setTransform(70.9,25.7,0.715,0.715);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C8885F").s().p("AgHAqIgDgCIgCgDQAAgGgHgDQgHAEgCgBQgCAAgEgHIgEgHQgGgIAIgEQADgCAAgDQAAgDgDgBQgHgEAFgHIAGgMQADgFAGADQAEACADgCQADgCAAgEQABgGAFAAIAPAAIADACIADACQgBAGAIAEQAHgEABABQACAAAEAHIAEAHQAGAIgJAEQgCABABADQgBAEADABQAHAEgFAHIgGALIgBACQgBAAAAABQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgDQgHADAAAEIAAACQAAAAAAABQAAAAgBAAQAAABAAAAQgBABgBAAIgDACIgIAAIgHAAgAgNgNQgGAGABAHQgBAIAHAGQAFAGAHAAQAIAAAHgGQAFgGAAgIQAAgHgGgGQgGgGgIAAQgHAAgGAGg");
	this.shape_33.setTransform(117.6,48.6,0.715,0.715);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C8885F").s().p("AgLA9QgIAAAAgIQAAgHgFgDQgFgCgFADQgIAEgEgHIgMgVQgEgHAHgEQAGgEAAgFQAAgEgGgDQgHgFAEgIIALgSQADgGADAAQACgBAHADIADACQALgFgBgJIAEgGIAfAAIADADQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgCAJAMAFQAKgGACABQADAAAGAMIAIANQAEAIgHAFQgGADAAAEQAAAFAGAEQAHAEgEAHIgMAUQgEAIgIgEQgGgDgEACQgFADAAAHQAAAIgIAAgAgUgTQgIAJAAALQAAALAJAIQAIAJALAAQAMAAAIgJQAJgIAAgMQAAgLgJgJQgJgIgLAAQgLAAgJAJg");
	this.shape_34.setTransform(114.1,41.5,0.715,0.715);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C8885F").s().p("AgXBcQgIgDABgLQAAgJgHgEQgHgDgHADQgIAFgEgBQgEgBgEgIIgRgdQgEgGABgEQABgEAHgEQAHgDAAgCQACgIgCgHQAAgCgGgCQgIgEgBgEQgBgFAEgHIASgeQAGgLALAHIAJAEQADgBAKgHIABgDIAAgIQAAgLALAAIAmAAQALAAAAALQABAPANAEQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIAHgFQAKgFAEAKIAVAjQAFAIgJAFIgDADIgHAEQgBAHABAIQAAABAGADQAIAEABAEQABAEgEAJIgRAdQgEAGgEABQgDABgGgDQgMgHgKAKQgCACABAHQAAAJgHAEgAgegdQgNAMAAARQAAASANANQAMANASAAQASAAAMgNQANgNAAgSQAAgRgNgNQgMgNgSAAQgRABgNANg");
	this.shape_35.setTransform(107.1,51.3,0.715,0.715);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBE1E5").s().p("AAiBmQgPAAAFgPQAGgPgCgIQgDgLgJgFQgJgFgKACQgKADgGAJQgFAJADALIADALQACAHgCADQgCADgIAAQgVACgYgHIgSgEIADgNQAIgfgCgTQAAgIgDgCQgDgCgIACIgOAEQgRACgIgPQgIgOAKgOQAKgMARAEIANAEQAJADADgJQACgKgEgWIgIgfIAZgGQATgEAQAAQANAAgEAOQgEALgBAHQAAALAIAIQAIAHALgBQALgBAHgIQAHgJgCgLIgEgPQgBgGACgDQABgCAHgBQATgCAlAJIAIACIgIAoQgCALABAOQABALALgDIAYgEQALABAGAJQAFAJgCALQgCAKgIAGQgJAGgKgCIgPgFQgKgDgCAJQgCAKAEAWIAHAfIgdAHQgPADgLAAIgDAAg");
	this.shape_36.setTransform(30.8,50.6,0.715,0.715);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_37.setTransform(70.6,71.3,0.7,0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BED19D").s().p("AkTKPQiBg2hhhiQhjhig2iBQg4iEAAiQQAAiPA4iEQA2iABjhiQBhhjCBg2QCEg4CPAAQCQAACEA4QCAA2BjBjQBiBiA2CAQA4CEAACPQAACQg4CEQg2CBhiBiQhjBiiAA2QiEA4iQAAQiPAAiEg4g");
	this.shape_38.setTransform(71.1,71.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.2,142.2);


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

	this.text = new cjs.Text("Sesión de calibración", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 504;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,524.3,36.6), null);


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Sesión de calibración", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(92.9,30);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,28,189.9,146.7);


(lib.tapageneralblanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EhNMAulQi0AAAAi0MAAAhXhQAAi0C0AAMCaZAAAQC0AAAAC0MAAABXhQAAC0i0AAg");
	this.shape.setTransform(512.1,298.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1024.3,596.2), null);


(lib.primerflech25ene2019amod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.primerflech25ene2019aanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.primercirculo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Plantear un desafío y apoyar el crecimiento", "20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 202;
	this.text.parent = this;
	this.text.setTransform(91.2,214.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525558").s().p("AgEAMQgEgCgBgFIgBgFIAAgMIABABIATAAQAEARgHAEQgEADgDAAIgEgBg");
	this.shape.setTransform(94.1,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDAB86").s().p("AADAKIgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIgBgBIgEAAIgCgBQgEABABgHIADgKIASAIIAAACIAAABIgFAIIgBABIgCgBg");
	this.shape_1.setTransform(82,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDAB86").s().p("AAAAEIAAgDIAAgBIABgDIAAAIg");
	this.shape_2.setTransform(83.1,47.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303335").s().p("AgbgHQADgrAEgRIADgIIAsCPQgHACgGAEIgFACg");
	this.shape_3.setTransform(98.5,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#303335").s().p("AgHBJQgHgIgGABIgGACIAqiOIAEAJQAEARADAsIghBPg");
	this.shape_4.setTransform(83.9,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525558").s().p("AAFgmIAJAUIgJAEIADAGIgWAwg");
	this.shape_5.setTransform(92.9,35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#303335").s().p("AgZBTIgBhgIAUhPIAYAFIAIADIgMBZIAKBYg");
	this.shape_6.setTransform(94.1,40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525558").s().p("AgGgIIACgHIgJgEIAJgUIASBPg");
	this.shape_7.setTransform(89.4,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#303335").s().p("AgNAFIgNhXIAhgKIATBRIABBfIgxAJg");
	this.shape_8.setTransform(88.2,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDAB86").s().p("AgFAJIgEgHQAAgBAAAAQgBgBAAAAQAAAAgBABQAAAAAAAAIgBACIgCgBIACgOIAMgHIAHAKQAGAHABAIQABAJgEADQgDACgDAAQgGAAgEgLg");
	this.shape_9.setTransform(101.1,48.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDAB86").s().p("AgCAEQgKgDADgDQAEgFAHAFQAFACADACIgBADIgBABIgKgCg");
	this.shape_10.setTransform(82.2,46.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A7ABAB").s().p("AgMAAIAFgJIAUANIgKAGQgOgGgBgEg");
	this.shape_11.setTransform(89.9,31.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BBCACB").s().p("AAUBQIgRgEIADguQABgLgEghQAAAHglBWIgRgKIBJiWQALgDAKAGQAFADADAEQAECZgKABIgCAAQgGAAgRgDg");
	this.shape_12.setTransform(86.5,39.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7ABAB").s().p("AgLACIATgJIAEAHQAAAFgMAEg");
	this.shape_13.setTransform(92.3,31.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBCACB").s().p("AgvBTQgGAAABhOIADhMIAHgHQAKgGALADIBKCWIgNAHIgVgrQgUgrgBgEQAAgGgDAyIAEAuQggAHgMAAIgCAAg");
	this.shape_14.setTransform(95.8,39.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#818189").s().p("AAiAVIgCgQQgBgLgKgFQgJgGgMABQgLABgDACIgIAEQgEADgDAGIgCAFIgCAPQAAAAAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAQgFgeAKgBIABgBIACgCQADgDAHAAIALgCIAGgCQAXAAAGAJIABABQAHAEgBAPIgBANIgBABIgBgBg");
	this.shape_15.setTransform(90.9,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9BD9C").s().p("AgFAvQgRgHgKgQIAAgBIAAgHIgDgCIgEgTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIACAAIABACIABAAIgBgMQAAgOAHgEQAAgCAIgEQAKgGAJAAIABAAQAPgBANANQAIAEAAAOIgBAMIgBABIABgBQABAAAAgBQAAgBABAAQAAAAABAAQAAAAABAAQABABgBAGIAAAAIgDAOQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgBAIIAAABQgNAQgLAGIgBAAIgHABIgFgBg");
	this.shape_16.setTransform(91,25.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDAB86").s().p("AgCASQgagBAGgHQAJgJABgPIAMgDQAMgCABAFQAAAHALAYIgSABIgIAAg");
	this.shape_17.setTransform(91.1,30.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2C2B").s().p("AAIANIgVgGQgNAAgBgBIgCgLIADgGIAcgBIADAHIASAIQAHADgBAFQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAg");
	this.shape_18.setTransform(95.6,76.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2C2B").s().p("AgRAJQgBgEAFgHIAFgHIACgGIAAgBIAYAAIAAAOQAAAHgBACQgCAEgGADIgEADIgPAAQgEgCgDgGg");
	this.shape_19.setTransform(86.7,76.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525558").s().p("AAaCNIgNgCIgEiZIgHhBIgKBSIgJCJIgnAAIADhuIANirQAKAHAngCQAVgBASgCIAFAiIAEA2IgFC5IgJAGQgDACgIAAIgGgBg");
	this.shape_20.setTransform(90.9,61.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D15A61").s().p("ABhCfIi5AAIAADoIgkAAIAAjoIjaAAIAADoIgkAAIAAjoIjXAAIAADoIgkAAIAAkMICSAAIAAj9IFeAAIAAkEIElAAIAAEEIFZAAIAAD9IB9AAIAAEMIgkAAIAAjoInNAAIAIDnIgkABgAD3B7IDeAAIAAjZIjeAAgAjEB7IGXAAIAAjZImXAAgAm/B7IDXAAIAAjZIjXAAgAhhiCIDdAAIAAjgIjdAAg");
	this.shape_21.setTransform(89.7,118.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_22.setTransform(90.6,97.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A2D7E9").s().p("AmKOoQi3hOiMiMQiMiMhOi3QhPi9AAjOQAAjNBPi9QBOi2CMiNQCMiMC3hOQC9hPDNAAQDOAAC9BPQC2BOCNCMQCMCNBNC2QBQC9AADNQAADOhQC9QhNC3iMCMQiNCMi2BOQi9BPjOAAQjNAAi9hPg");
	this.shape_23.setTransform(91.2,96.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.primercirculo, new cjs.Rectangle(-11.8,-4.7,206.1,310.5), null);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(71.1,27.2,0.593,0.593);

	this.text_1 = new cjs.Text("3.5", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(69.9,57.7,1.094,1.094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.8,69.7,1.504,1.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.no1perfilroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Acciones de Desarrollo", "bold 18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(402.4,36.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("AzHDjQhhAAgShPIgEAAIAAj+QgBh4B4AAMAmOAAAQB4AAAAB4IAAD+IgEAAQgSBPhiAAg");
	this.shape.setTransform(403.3,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.9,25.9,268.7,71.4);


(lib.no1perfilroll24erosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Acciones de Desarrollo", "bold 18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(402.4,36.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("AzHDjQhhAAgShPIgEAAIAAj+QgBh4B4AAMAmOAAAQB4AAAAB4IAAD+IgEAAQgSBPhiAAg");
	this.shape.setTransform(403.3,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.9,25.9,268.7,71.4);


(lib.no1perfilroll22verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Acciones de Desarrollo", "bold 18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(402.4,36.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("AzHDjQhhAAgShPIgEAAIAAj+QgBh4B4AAMAmOAAAQB4AAAAB4IAAD+IgEAAQgSBPhiAAg");
	this.shape.setTransform(403.3,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.9,25.9,268.7,71.4);


(lib.no1perfilroll2am = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Acciones de Desarrollo", "bold 18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(402.4,36.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("AzHDjQhhAAgShPIgEAAIAAj+QgBh4B4AAMAmOAAAQB4AAAAB4IAAD+IgEAAQgSBPhiAAg");
	this.shape.setTransform(403.3,48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.9,25.9,268.7,71.4);


(lib.no1perfil25ene20mod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Formato “Acciones de Desarrollo del Top Talent”", "bold 16px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 206;
	this.text.parent = this;
	this.text.setTransform(279.4,215);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AJ4ErIAApVIXNAAIAAJVgEghEAErIAApVMAq8AAAIAAJVg");
	this.shape.setTransform(283.9,233.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.2,203.4,423.5,73.7);


(lib.no1perfil25ene20moanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Interpretación de resultados con metodología 9-Box", "bold 18px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 206;
	this.text.parent = this;
	this.text.setTransform(283.4,210.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AJ4FvIAArdIXNAAIAALdgEghEAFvIAArdMAq8AAAIAALdg");
	this.shape.setTransform(283.9,240.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72.2,203.4,423.5,73.4);


(lib.no1perfilsas25enmod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("del Top Talent”", "bold 16px 'Arial'", "#333333");
	this.text.lineHeight = 16;
	this.text.lineWidth = 126;
	this.text.parent = this;
	this.text.setTransform(471.9,203);

	this.text_1 = new cjs.Text("“Acciones de Desarrollo", "bold 16px 'Arial'", "#333333");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 196;
	this.text_1.parent = this;
	this.text_1.setTransform(897.8,186);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 1
	this.text_2 = new cjs.Text("crecimiento o alto impacto.", "16px 'Arial'", "#333333");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 199;
	this.text_2.parent = this;
	this.text_2.setTransform(471.9,219);

	this.text_3 = new cjs.Text("para cada colaborador ubicado como futuro líder, talento en ", "16px 'Arial'", "#333333");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 490;
	this.text_3.parent = this;
	this.text_3.setTransform(593.9,203);

	this.text_4 = new cjs.Text("Una vez concluida la discusión debe completarse el formato", "16px 'Arial'", "#333333");
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 609;
	this.text_4.parent = this;
	this.text_4.setTransform(471.9,186);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("EBIYAF/IACAAIgCAYgEBIYAE5IAAkOIgBAAQgaCOiCABMiL1AAAQiDgBgYiOIgHAAIAAjmQAAjbCiAAMCL1AAAQChAAAADbIAAHGQAAAYgCAWg");
	this.shape.setTransform(636.1,220.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_4},{t:this.text_3},{t:this.text_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172.5,180,927.3,81.4);


(lib.no1perfilsas25enmanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("La metodología 9-box permite relacionar los resultados de potencial y desempeño de los colaboradores situándoles en uno de los nueve cuadrantes. Sin embargo, durante la discusión generada es posible, si existen evidencias suficientes, que el colaborador cambie de ubicación. ", "16px 'Arial'", "#333333");
	this.text.lineHeight = 16;
	this.text.lineWidth = 609;
	this.text.parent = this;
	this.text.setTransform(471.9,186);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("EBL8AHOIADAAIgDAZgEBL8AGJIAAkOIgBAAQgZCOiDABMiVfAAAIAArwMCVfAAAQCNAAASCnIADAAIAAKaQAAAYgCAWg");
	this.shape.setTransform(613.3,228.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.8,180,973,97.4);


(lib.no1perfilsale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("La ubicación en cada uno de los cuadrantes 9-Box, nos permite establecer las acciones de desarrollo para los colaboradores. La estrategia a seguir dependerá de la ubicación de cada uno de ellos.\n\n", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(422.5,7.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("EhF7AGvQigAAAAjbIAAmnQAAjbCgAAMCL2AAAQChAAABDbIAAGnQgBDbihAAg");
	this.shape.setTransform(586.1,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.5,-12,927.3,123.5);


(lib.no1perfil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Acciones de Desarrollo", "bold 20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 192;
	this.text.parent = this;
	this.text.setTransform(335.9,35.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AJ8GyIAAtjIXNAAIAANjgEghIAGyIAAtjMArDAAAIAANjg");
	this.shape.setTransform(243.6,53.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.5,10.4,424.2,125.7);


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


(lib.M03_TMR_TABLArosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Profesional \nexperto", "22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(518.8,234.8);

	this.text_1 = new cjs.Text("Alto\nImpacto", "22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 165;
	this.text_1.parent = this;
	this.text_1.setTransform(518.8,131.4);

	this.text_2 = new cjs.Text("Futuro\nLíder", "22px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 165;
	this.text_2.parent = this;
	this.text_2.setTransform(518.8,31.5);

	this.text_3 = new cjs.Text("Profesional \nefectivo", "22px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 169;
	this.text_3.parent = this;
	this.text_3.setTransform(313,233);

	this.text_4 = new cjs.Text("Colaborador \nconsistente", "22px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 165;
	this.text_4.parent = this;
	this.text_4.setTransform(313,135);

	this.text_5 = new cjs.Text("Talento en \ncrecimiento", "22px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 165;
	this.text_5.parent = this;
	this.text_5.setTransform(313,31.5);

	this.text_6 = new cjs.Text("Bajo\ndesempeño ", "22px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 165;
	this.text_6.parent = this;
	this.text_6.setTransform(104.7,242.1);

	this.text_7 = new cjs.Text("Desempeño inconsistente (Dilema)", "22px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 165;
	this.text_7.parent = this;
	this.text_7.setTransform(104.7,118.7);

	this.text_8 = new cjs.Text("Caso a revisar\n(Enigma)", "22px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 165;
	this.text_8.parent = this;
	this.text_8.setTransform(104.7,31.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape.setTransform(207.8,155.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_1.setTransform(207.8,155.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_2.setTransform(415.1,155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_3.setTransform(415.1,155.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_4.setTransform(311.5,104.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_5.setTransform(311.5,104.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_6.setTransform(311.5,206.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_7.setTransform(311.5,206.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_8.setTransform(104.1,53);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_9.setTransform(104.1,53);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_10.setTransform(311.5,258);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_11.setTransform(311.5,258);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_12.setTransform(518.8,258);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_13.setTransform(518.8,258);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_14.setTransform(104.1,155.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9999").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_15.setTransform(104.1,155.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_16.setTransform(104.1,258);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9999").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_17.setTransform(104.1,258);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_18.setTransform(311.5,155.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_19.setTransform(311.5,155.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_20.setTransform(311.5,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_21.setTransform(311.5,53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_22.setTransform(518.8,155.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_23.setTransform(518.8,155.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_24.setTransform(518.8,53);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_25.setTransform(518.8,53);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").p("EAwjAX+MhhFAAAMAAAgv7MBhFAAAgEgwqgYEMAAAAwJMBhVAAAMAAAgwJg");
	this.shape_26.setTransform(311.5,155.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_27.setTransform(311.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLArosa, new cjs.Rectangle(-1,0.4,624.9,318.5), null);


(lib.M03_TMR_TABLAam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Profesional \nexperto", "22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(518.8,234.8);

	this.text_1 = new cjs.Text("Alto\nImpacto", "22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 165;
	this.text_1.parent = this;
	this.text_1.setTransform(518.8,131.4);

	this.text_2 = new cjs.Text("Futuro\nLíder", "22px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 165;
	this.text_2.parent = this;
	this.text_2.setTransform(518.8,31.5);

	this.text_3 = new cjs.Text("Profesional \nefectivo", "22px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 169;
	this.text_3.parent = this;
	this.text_3.setTransform(313,233);

	this.text_4 = new cjs.Text("Colaborador \nconsistente", "22px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 165;
	this.text_4.parent = this;
	this.text_4.setTransform(313,135);

	this.text_5 = new cjs.Text("Talento en \ncrecimiento", "22px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 165;
	this.text_5.parent = this;
	this.text_5.setTransform(313,31.5);

	this.text_6 = new cjs.Text("Bajo\ndesempeño ", "22px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 165;
	this.text_6.parent = this;
	this.text_6.setTransform(104.7,242.1);

	this.text_7 = new cjs.Text("Desempeño inconsistente (Dilema)", "22px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 165;
	this.text_7.parent = this;
	this.text_7.setTransform(104.7,118.7);

	this.text_8 = new cjs.Text("Caso a revisar\n(Enigma)", "22px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 165;
	this.text_8.parent = this;
	this.text_8.setTransform(104.7,31.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape.setTransform(207.8,155.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_1.setTransform(207.8,155.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_2.setTransform(415.1,155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_3.setTransform(415.1,155.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_4.setTransform(311.5,104.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_5.setTransform(311.5,104.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_6.setTransform(311.5,206.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_7.setTransform(311.5,206.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_8.setTransform(104.1,53);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_9.setTransform(104.1,53);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_10.setTransform(311.5,258);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2CA88").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_11.setTransform(311.5,258);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_12.setTransform(518.8,258);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2CA88").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_13.setTransform(518.8,258);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_14.setTransform(104.1,155.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_15.setTransform(104.1,155.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_16.setTransform(104.1,258);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_17.setTransform(104.1,258);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_18.setTransform(311.5,155.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_19.setTransform(311.5,155.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_20.setTransform(311.5,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_21.setTransform(311.5,53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_22.setTransform(518.8,155.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_23.setTransform(518.8,155.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_24.setTransform(518.8,53);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_25.setTransform(518.8,53);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").p("EgwqgYEMAAAAwJMBhVAAAMAAAgwJgEAwjAX+MhhFAAAMAAAgv7MBhFAAAg");
	this.shape_26.setTransform(311.5,155.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_27.setTransform(311.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLAam, new cjs.Rectangle(-1,0.4,624.9,318.5), null);


(lib.M03_TMR_TABLA4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AeqQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAcyQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAa6QQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAZCQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAXKQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAVSQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgATaQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgARiQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAPqQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgANyQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAL6QQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAKCQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAIKQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAGSQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAEaQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgACiQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAAqQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgEAgOAQCQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVQBQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAOKQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVOJQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEAgOAMSQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVMRQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAKaQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVKZQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAIiQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVIhQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEAgOAGqQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVGpQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAEyQgGgFAAgHIAAg8QAAgHAGgFIABgBIgBgBQgGgFAAgIIAAgeQAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAAeQAAAIgFAFIgBABIABABQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVExQgFgFAAgHIAAg7QAAgHAFgFIABgBIgBgBQgFgFAAgIIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAIgFAFIgBABIABABQAFAFAAAHIAAA7QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOACBQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVBkQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA9QAAAHgFAFQgFAFgHAAQgHAAgFgFgAhvAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgAjnAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAlfAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAnXAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgApPAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgArHAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAs/AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgAu3AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAwvAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAynAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA0fAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA2XAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA4PAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA6HAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA7/AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA93AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA/vAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgEAgOAAJQgGgFAAgGIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAGgFAFQgFAFgHABQgHgBgFgFgEgglAADQgFgEAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAEQgGAFgHABQgHgBgFgFgEAgOgBuQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgB0QgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgDmQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgDsQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgFeQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgFkQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgHWQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgHcQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgJOQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgJUQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgLGQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgLMQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgM+QgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgNEQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgO2QgGgFAAgHIAAg3IAAgEQAAgHAFgFQAFgFAHAAIABAAQAHAAAFAFQAFAFAAAHIAAA7QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgO8QgFgFAAgHIAAg1QAAgHAFgFQAFgFAHAAIAHAAQAHAAAFAFQAGAFAAAHQAAAHgGAFIgBACIAAAnQAAAHgFAFQgGAFgHAAQgHAAgFgFgAehvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAcpvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAaxvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAY5vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAXBvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAVJvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgATRvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgARZvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAPhvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgANpvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgALxvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAJ5vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAIBvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAGJvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAERvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgACZvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAAhvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAhWvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAjOvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAlGvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAm+vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAo2vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAquvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAsmvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAuevsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAwWvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAyOvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA0GvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgA1+vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA32vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA5uvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgA7mvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA9evsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA/WvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAg");
	this.shape.setTransform(416.6,105.8);

	this.text = new cjs.Text("Profesional \nexperto", "22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(518.8,234.8);

	this.text_1 = new cjs.Text("Alto\nImpacto", "22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 165;
	this.text_1.parent = this;
	this.text_1.setTransform(518.8,131.4);

	this.text_2 = new cjs.Text("Futuro\nLíder", "22px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 165;
	this.text_2.parent = this;
	this.text_2.setTransform(518.8,31.5);

	this.text_3 = new cjs.Text("Profesional \nefectivo", "22px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 169;
	this.text_3.parent = this;
	this.text_3.setTransform(313,233);

	this.text_4 = new cjs.Text("Colaborador \nconsistente", "22px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 165;
	this.text_4.parent = this;
	this.text_4.setTransform(313,135);

	this.text_5 = new cjs.Text("Talento en \ncrecimiento", "22px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 165;
	this.text_5.parent = this;
	this.text_5.setTransform(313,31.5);

	this.text_6 = new cjs.Text("Bajo\ndesempeño ", "22px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 165;
	this.text_6.parent = this;
	this.text_6.setTransform(104.7,242.1);

	this.text_7 = new cjs.Text("Desempeño inconsistente (Dilema)", "22px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 165;
	this.text_7.parent = this;
	this.text_7.setTransform(104.7,118.7);

	this.text_8 = new cjs.Text("Caso a revisar\n(Enigma)", "22px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 165;
	this.text_8.parent = this;
	this.text_8.setTransform(104.7,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_1.setTransform(207.8,155.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_2.setTransform(207.8,155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_3.setTransform(415.1,155.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_4.setTransform(415.1,155.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_5.setTransform(311.5,104.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_6.setTransform(311.5,104.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_7.setTransform(311.5,206.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_8.setTransform(311.5,206.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_9.setTransform(104.1,53);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_10.setTransform(104.1,53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_11.setTransform(311.5,258);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_12.setTransform(311.5,258);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_13.setTransform(518.8,258);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_14.setTransform(518.8,258);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_15.setTransform(104.1,155.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_16.setTransform(104.1,155.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_17.setTransform(104.1,258);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_18.setTransform(104.1,258);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_19.setTransform(311.5,155.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_20.setTransform(311.5,155.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_21.setTransform(311.5,53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A2D7E9").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_22.setTransform(311.5,53);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_23.setTransform(518.8,155.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#85C8DA").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_24.setTransform(518.8,155.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_25.setTransform(518.8,53);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6CBACB").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_26.setTransform(518.8,53);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").p("EAwjAX+MhhFAAAMAAAgv7MBhFAAAgEgwqgYEMAAAAwJMBhVAAAMAAAgwJg");
	this.shape_27.setTransform(311.5,155.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_28.setTransform(311.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLA4, new cjs.Rectangle(-1,0.4,626.7,318.5), null);


(lib.M03_TMR_TABLA2verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Profesional \nexperto", "22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(518.8,234.8);

	this.text_1 = new cjs.Text("Alto\nImpacto", "22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 165;
	this.text_1.parent = this;
	this.text_1.setTransform(518.8,131.4);

	this.text_2 = new cjs.Text("Futuro\nLíder", "22px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 165;
	this.text_2.parent = this;
	this.text_2.setTransform(518.8,31.5);

	this.text_3 = new cjs.Text("Profesional \nefectivo", "22px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 169;
	this.text_3.parent = this;
	this.text_3.setTransform(313,233);

	this.text_4 = new cjs.Text("Colaborador \nconsistente", "22px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 165;
	this.text_4.parent = this;
	this.text_4.setTransform(313,135);

	this.text_5 = new cjs.Text("Talento en \ncrecimiento", "22px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 165;
	this.text_5.parent = this;
	this.text_5.setTransform(313,31.5);

	this.text_6 = new cjs.Text("Bajo\ndesempeño ", "22px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 165;
	this.text_6.parent = this;
	this.text_6.setTransform(104.7,242.1);

	this.text_7 = new cjs.Text("Desempeño inconsistente (Dilema)", "22px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 165;
	this.text_7.parent = this;
	this.text_7.setTransform(104.7,118.7);

	this.text_8 = new cjs.Text("Caso a revisar\n(Enigma)", "22px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 165;
	this.text_8.parent = this;
	this.text_8.setTransform(104.7,31.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape.setTransform(207.8,155.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_1.setTransform(207.8,155.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_2.setTransform(415.1,155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_3.setTransform(415.1,155.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_4.setTransform(311.5,104.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_5.setTransform(311.5,104.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_6.setTransform(311.5,206.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_7.setTransform(311.5,206.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_8.setTransform(104.1,53);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_9.setTransform(104.1,53);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_10.setTransform(311.5,258);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_11.setTransform(311.5,258);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_12.setTransform(518.8,258);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_13.setTransform(518.8,258);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_14.setTransform(104.1,155.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_15.setTransform(104.1,155.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_16.setTransform(104.1,258);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_17.setTransform(104.1,258);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_18.setTransform(311.5,155.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BED19D").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_19.setTransform(311.5,155.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_20.setTransform(311.5,53);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_21.setTransform(311.5,53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_22.setTransform(518.8,155.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_23.setTransform(518.8,155.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_24.setTransform(518.8,53);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E6E6").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_25.setTransform(518.8,53);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").p("EAwjAX+MhhFAAAMAAAgv7MBhFAAAgEgwqgYEMAAAAwJMBhVAAAMAAAgwJg");
	this.shape_26.setTransform(311.5,155.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_27.setTransform(311.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLA2verde, new cjs.Rectangle(-1,0.4,624.9,318.5), null);


(lib.M03_TMR_TABanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AeqQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAcyQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAa6QQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAZCQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAXKQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAVSQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgATaQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgARiQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAPqQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgANyQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAL6QQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAKCQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAIKQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAGSQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAEaQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgACiQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAAqQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgEAgOAQCQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVQBQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAOKQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVOJQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEAgOAMSQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVMRQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAKaQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVKZQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAIiQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVIhQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEAgOAGqQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVGpQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAEyQgGgFAAgHIAAg8QAAgHAGgFIABgBIgBgBQgGgFAAgIIAAgeQAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAAeQAAAIgFAFIgBABIABABQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVExQgFgFAAgHIAAg7QAAgHAFgFIABgBIgBgBQgFgFAAgIIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAIgFAFIgBABIABABQAFAFAAAHIAAA7QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOACBQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVBkQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA9QAAAHgFAFQgFAFgHAAQgHAAgFgFgAhvAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgAjnAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAlfAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAnXAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgApPAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgArHAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAs/AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgAu3AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAwvAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAynAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA0fAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA2XAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA4PAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA6HAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA7/AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA93AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA/vAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgEAgOAAJQgGgFAAgGIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAGgFAFQgFAFgHABQgHgBgFgFgEgglAADQgFgEAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAEQgGAFgHABQgHgBgFgFgEAgOgBuQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgB0QgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgDmQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgDsQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgFeQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgFkQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgHWQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgHcQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgJOQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgJUQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgLGQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgLMQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgM+QgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgNEQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgO2QgGgFAAgHIAAg3IAAgEQAAgHAFgFQAFgFAHAAIABAAQAHAAAFAFQAFAFAAAHIAAA7QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgO8QgFgFAAgHIAAg1QAAgHAFgFQAFgFAHAAIAHAAQAHAAAFAFQAGAFAAAHQAAAHgGAFIgBACIAAAnQAAAHgFAFQgGAFgHAAQgHAAgFgFgAehvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAcpvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAaxvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAY5vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAXBvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAVJvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgATRvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgARZvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAPhvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgANpvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgALxvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAJ5vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAIBvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAGJvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAERvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgACZvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAAhvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAhWvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAjOvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAlGvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAm+vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAo2vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAquvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAsmvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAuevsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAwWvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAyOvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA0GvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgA1+vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA32vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA5uvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgA7mvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA9evsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA/WvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAg");
	this.shape.setTransform(416.6,105.8);

	this.text = new cjs.Text("Profesional \nexperto", "bold 22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 165;
	this.text.parent = this;
	this.text.setTransform(518.8,234.8);

	this.text_1 = new cjs.Text("Alto\nImpacto", "bold 22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 165;
	this.text_1.parent = this;
	this.text_1.setTransform(518.8,131.4);

	this.text_2 = new cjs.Text("Futuro\nLíder", "bold 22px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 165;
	this.text_2.parent = this;
	this.text_2.setTransform(518.8,31.5);

	this.text_3 = new cjs.Text("Profesional \nefectivo", "bold 22px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 169;
	this.text_3.parent = this;
	this.text_3.setTransform(313,233);

	this.text_4 = new cjs.Text("Colaborador \nconsistente", "bold 22px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 165;
	this.text_4.parent = this;
	this.text_4.setTransform(313,135);

	this.text_5 = new cjs.Text("Talento en \ncrecimiento", "bold 22px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 165;
	this.text_5.parent = this;
	this.text_5.setTransform(313,31.5);

	this.text_6 = new cjs.Text("Bajo\nDesempeño ", "bold 22px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 165;
	this.text_6.parent = this;
	this.text_6.setTransform(104.7,242.1);

	this.text_7 = new cjs.Text("Desempeño inconsistente (Dilema)", "bold 22px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 165;
	this.text_7.parent = this;
	this.text_7.setTransform(104.7,118.7);

	this.text_8 = new cjs.Text("Caso a revisar\n(Enigma)", "bold 22px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 165;
	this.text_8.parent = this;
	this.text_8.setTransform(104.7,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_1.setTransform(207.8,155.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_2.setTransform(207.8,155.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_3.setTransform(415.1,155.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_4.setTransform(415.1,155.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_5.setTransform(311.5,104.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_6.setTransform(311.5,104.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_7.setTransform(311.5,206.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_8.setTransform(311.5,206.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_9.setTransform(104.1,53);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_10.setTransform(104.1,53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_11.setTransform(311.5,258);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_12.setTransform(311.5,258);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_13.setTransform(518.8,258);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_14.setTransform(518.8,258);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_15.setTransform(104.1,155.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E0878B").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_16.setTransform(104.1,155.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_17.setTransform(104.1,258);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0878B").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_18.setTransform(104.1,258);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_19.setTransform(311.5,155.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BED19D").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_20.setTransform(311.5,155.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_21.setTransform(311.5,53);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A2D7E9").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_22.setTransform(311.5,53);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_23.setTransform(518.8,155.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#85C8DA").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_24.setTransform(518.8,155.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_25.setTransform(518.8,53);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6CBACB").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_26.setTransform(518.8,53);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").p("EgwqgYEMAAAAwJMBhVAAAMAAAgwJgEAwjAX+MhhFAAAMAAAgv7MBhFAAAg");
	this.shape_27.setTransform(311.5,155.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_28.setTransform(311.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABanimultax, new cjs.Rectangle(-1,0.4,626.7,318.5), null);


(lib.M03_TMR_LIDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C140B").s().p("AgGAYQgEgKAAgOQAAgNAEgLQADgKADAAQAEAAAEAKQADALAAANQAAAOgDAKQgEALgEAAQgDAAgDgLg");
	this.shape.setTransform(105.3,102.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#927954").s().p("AgOAxQgHgUAAgdQAAgcAHgUQAGgVAIAAQAJAAAGAVQAHAUAAAcQAAAdgHAUQgGAVgJAAQgIAAgGgVg");
	this.shape_1.setTransform(105.3,101.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C140B").s().p("AgHAYQgDgKAAgOQAAgOADgKQADgKAEAAQAEAAAEAKQADALAAANQAAAOgDAKQgEALgEAAQgEAAgDgLg");
	this.shape_2.setTransform(32.6,102.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#927954").s().p("AgPAxQgGgUAAgdQAAgcAGgUQAHgVAIAAQAJAAAGAVQAHAUAAAcQAAAdgHAUQgGAVgJAAQgIAAgHgVg");
	this.shape_3.setTransform(32.6,101.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C140B").s().p("ApbHAQgrgsAAg8QAAg4AngrQgcgRgRgdQgRgeAAgiQAAgdANgbQAMgZAWgTQgPgVAAgbQAAgfASgYQASgYAcgJQgGgTAAgYQAAg9ArgrQAsgtA9ABIAKAAQAOgmAhgWQAigYApAAQAgAAAdAPQAMgxAogfQAoggAzAAQApAAAiAVQAkgmA2ABQAggBAcAPQAbAPASAaIAOgCQAdAAAVAUQAVAUACAcQAagHAZgBQBEAAAwAxQAwAwAABEIAAACQAKgCAMAAQA3AAAnAnQAmAmAAA2QAAAmgVAiQAqAqAAA8QAAAhgNAeQgOAcgXAUQAfAVASAgQATAiAAAnQAAA9gsAsQgrArg+AAQguAAglgaQglgZgRgqQgjgIgWgcQgXgcAAgkIABgPQgWAEgRABQhGAAgygyQgxgyAAhGIAAgNQgWAJgZAAQgnAAgegYQgfgYgLglIgEAAQgjAAgbgUQgagWgIghIgHgEIABAOQAAAfgQAaQgPAbgaAQQAUAiAAAlQAAAygfAmQgfAlgvAKQAFAOAAAOQAAAZgNAVQgNAUgVAMQgHA2gpAkQgqAlg3AAQg9gBgqgqg");
	this.shape_4.setTransform(67,49.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A25F37").s().p("AgWg2QAUgiATADQALACAGAIQAJBFgnA1QgLAQgPANIgNAKg");
	this.shape_5.setTransform(106,92.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A25F37").s().p("AgEAvQgmg1AJhFIARgKQATgDAUAiIAMCMQgVgNgSgag");
	this.shape_6.setTransform(30.3,92.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A25F37").s().p("Ah7HxQiNhbhOimQgVgNgTgaQgmg2AJhFIAQgKQAVgDATAiQgchOgMhfQgZjCBOhfIAVgbQAbghAhgcQBshaCGgNIAoAAQCFANBsBaQA2AtAbArQBOBfgZDCQgMBfgcBOQAUgiAUADQAKACAGAIQAJBFgmA2QgMAQgPANIgNAKQhNCmiNBbQgsAdgtASIgkALQg2gMhFgug");
	this.shape_7.setTransform(68.3,76.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C140B").s().p("AgND7QgegQgTgcQgNADgIAAQgeAAgWgWQgVgWAAgeQAAgKACgHQgLACgOAAQgzAAgkgkQglgkAAgyQAAglAVgfQATgeAhgPQgegbAAgmQAAgkAZgaQAagZAkAAQAWAAAUAKQASALAMASQAegMAfAAQA/AAAtAtQAuAuAABAQAAAsgXAlQA3AQAcA0QARgHASAAQAnAAAcAcQAcAcAAAnQAAAngcAcQgcAcgnAAQghAAgbgWQgpApg5AAQgjAAgdgQg");
	this.shape_8.setTransform(36.5,104.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C140B").s().p("AjmCyQgdgdAAgqQAAgqAdgdQAegeAqAAIAAgBQgBgoAdgdQAdgdApgCQAGgsAigdQAigeAuAAQAjAAAdASQAYgaAjAAQAgAAAWAWQAXAXAAAgQAAAggXAWQgXAXgfAAIgCAAQgIAkgZAZQgaAagjAIIAAAIQAAAzgkAkQgkAlgxgBQgWABgWgJQgPAUgUAKQgVAMgYAAQgqgBgegdg");
	this.shape_9.setTransform(101.8,111.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAKQgEgEAAgGQgBgDAEgFQADgFAGABQAMAAACAMQAAAEgEAFQgEAFgGAAQgEAAgEgEg");
	this.shape_10.setTransform(20.6,240.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKAAQgBgLALAAQAKAAABALQABAMgLAAQgKAAgBgMg");
	this.shape_11.setTransform(123.6,232.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#626568").s().p("AgKAwQhNgcgVgUQAJghAIgWIAGgQQAHAABEAcQBKAcAsgDQgOAygRAZIgPAPQgigKgmgOg");
	this.shape_12.setTransform(118.9,230.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9D9D9E").s().p("AAmFzIgzgaIAmiyIjbk4QgMgmAIgyQAShlBtg+IB9DxQCBEAATBPIgSBRQgVBagPAuQgxAAg9gag");
	this.shape_13.setTransform(111.5,194.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A25F37").s().p("AgNDUIgWgNQgVgNgkgFQiEgQgVgTQgWgVgFgLQgPgmAhg2QAEgHAggNQAdgLAYgGQAzgNAVAUQAhAdAdAnIAcAmQADAGAIAAQAHgBAFgHIANgXQAPgXBikLIAHADQANAGAhATIAuAZIAgAQQgWAtgZApIg/BoQgmA+gfAmQgYAjgOAOQgYAagbABIgBAAQgJAAgMgGg");
	this.shape_14.setTransform(101.4,236.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#626568").s().p("AATA4QhUgBglgVIAAhZQAHAIBWAHQBZAIAXgLQgIAnABAgQAAAQABAIQgfAEglAAIgKAAg");
	this.shape_15.setTransform(26.5,240.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9D9D9E").s().p("AiGG7QgLhqARhVQAHggAjhtQAAkoAjikQALgzANgfIALgWICcB6Ih9MJQgPAFgZACIgYABQgqAAgrgLg");
	this.shape_16.setTransform(31.9,199.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A25F37").s().p("AgjGkQgggzgQhUQgIgvASg5IAVgwIABgBIgIhlQgGh0AFicIABg1IAHidQBFAFBFALIgFAbQgcClghCTQgIAkAABAQgBBJAOACIAIAHIgCAAQANAOAGAkQAGAggDAVQgBAIAPApQANAkgLAQQgMARgVgkQgZgtgDgBQgIgEAAAVQAAAIAEAaQAFAiAMAvQAFAngWAxQgEAHgEAAQgMAAgTggg");
	this.shape_17.setTransform(26.4,274.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhbgzIBXggIBgBZIhGBOg");
	this.shape_18.setTransform(58,151.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhdAIIBmhdIBVAdIh1COg");
	this.shape_19.setTransform(76.6,151);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCBCB").s().p("AAXA9Ihvh6IBAgWIBxBPIg6BYg");
	this.shape_20.setTransform(58.3,152.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCBCB").s().p("AhWAAIB7hPIAyAWIhxBuIgHAbg");
	this.shape_21.setTransform(75.9,152.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9F5733").s().p("AipAYIBHggQAOgLADgLQAKgbgGhZICYgEIgDA7QgDA+AGAMIAOAHIBRAhIh8B1Ig8g3IhBBCg");
	this.shape_22.setTransform(68.6,143.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhOgMIhaiAIBMgiIBXgfICuA/Ih6B2Ig7Dmg");
	this.shape_23.setTransform(68.5,159.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#626568").s().p("AigAJIA+geIhmgXIhRiKIEahgIEZBoIiDCZIhTAAIAzAlIh+EHg");
	this.shape_24.setTransform(68.8,167.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#606060").s().p("AinAOIBDgeIhugXIhTiCQAggLAQgHQAUgKAhgLIA3gTIAKgEICFgqIBuAmIARAHIBRAmQAyAYAeANIh+CJIhZgBIA3AmIiKD9g");
	this.shape_25.setTransform(68.6,168);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9D9D9E").s().p("Aj+H1IhTgeQADAAANgMIAPgQQAPgOALgRQAVgeAQgqQAohpgGhTQgFgrggg/QgmhIgIgeQgJghAHgoQAMgvAFgZQAGgegSgjIgkg5QgohDgFACQAXgMAvgPQAugPAWgLQAVgJAggLIA3gTICUg3IDqBqQBCAfAuASQgFADgHALIgMAQQgSAXgHAYQgKAaAEARQABAIAHAPQAnBlgkBVQgIAVgeAnQgbAngIAYQgMAggBApQgCAaADAwQAEBFAXA4QAfBLA2AoIAIAGQiMA4iRAMQgngygTgmIgLgbIgZBSQgDAKgNAaQhzgDhpggg");
	this.shape_26.setTransform(67.2,193.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A12026").s().p("AhGBYQgIgBgHgGQgQgMAAgYQABgUAJgoQAIgiAKgeQAIBPAHAEQAHAGA4AAQA5AAAIgGQAGgEgRhXQAWAxAFAPQAPAlABAaQABAagOAOIgPAIg");
	this.shape_27.setTransform(82.2,448.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A12026").s().p("AhHBNQgJgDgGgJQgHgLABgSQACgfAWg3IARghQgPBQAGADQAHAGA4AAQA6AAAHgGQAGgDAHg5QAOBJgCAfQgBAXgPALIgQAGg");
	this.shape_28.setTransform(57.1,447);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A12026").s().p("AgYBUIAQgGQAOgMABgWQACgggNhIIACgXQAJAfAHAiQAKAnAAAUQABAYgQAMIgOAHg");
	this.shape_29.setTransform(65.7,447);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A12026").s().p("AgzAKQgOgDgIgPQAGAIAJACICEAIg");
	this.shape_30.setTransform(55.8,454.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A12026").s().p("AAJgUIgBAIIgQAhg");
	this.shape_31.setTransform(51.2,439.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2F2F2F").s().p("AA/OyIgHhYQgGhHgGhiQgMjEAFiEQABg4AHhQQAGg+gBgKQgKg+goplIAJiGIgQAAIAHCGQgmJkgLA/QgBAJAGA/QAHBQACA4QAECEgMDEQgGBigGBHIgHBYIhaAAQAIhFg2jsQg4jxADgzIARhuQAPhagFgiQgkh9gbieQgyk0AalrIgJhqIJVABIAjBpQAaFqgyE1QgaCeglB9QgEAiAOBaIASBuQACAzg4DxQg2DsAIBFg");
	this.shape_32.setTransform(69.7,337.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2F2F2F").s().p("AgMAVQAEgeAVgwQgVA4gCAeQgBARAHAMQgLgOADgXg");
	this.shape_33.setTransform(48.9,447.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2F2F2F").s().p("AgHhCIAQAAIgJCFg");
	this.shape_34.setTransform(69.7,278.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A25F37").s().p("AhMBtQgQgLgBgXQgCgZAKg1QAIgwAGgSQAKgbgBgTIBYAAIABAHQABAKAgA/QAfA9ADAhQADAagMAOIgNAJIiFAIQgIgBgHgGg");
	this.shape_35.setTransform(82.4,443.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A25F37").s().p("AgFBMQg5AAgHgFQgGgFAPhPQAXgtACgLIAAgHIBYAAQAAASAJAcQADAJAHAfQgHA5gGAEQgHAGgxAAIgIgBg");
	this.shape_36.setTransform(58,439.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiBBkIAAjHIEEAAIAADHg");
	this.shape_37.setTransform(65.5,242.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_LIDER, new cjs.Rectangle(0,0,134,456.9), null);


(lib.M03_TMR_CONFIDENCIAL2crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9AC9AC").s().p("AlWAPQgCgHAAgLIAAgLIKxAAIAAALQAAAJgCAJg");
	this.shape.setTransform(198.8,245.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D9FAC").s().p("AkMAdQgbAAgUgRQgUgPgHgZIKtAAQgHAZgTAPQgVARgaAAg");
	this.shape_1.setTransform(198.8,249.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D9FAC").s().p("AlYF/IAAl4QAAgSAOgOQANgOAUAAIAxAAIAAhsQAAg+Afg2QAgg2A3gdQCJhJB7BMQA2AhAgA4QAhA5AABCIhtAAQAAhShIgoQhKgqhQAzQgZAQgOAaQgOAaAAAeIAABrIG1AAQATAAAOAOQAOAOAAASIAAF4gAgnB5QgEACgFAHQgRAaAHAbQAFAYAWANIAAA8IA/AAIAAg8QANgIAIgNQAIgOAAgQQAAgkgggRQgPgIgOAAQgTAAgUANg");
	this.shape_2.setTransform(198.8,205.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9AC9AC").s().p("AgfBWIAAg8QgWgNgFgXQgHgbARgaQAFgHAEgCQAkgXAgASQAgARAAAkQAAAQgIANQgIANgNAIIAAA8g");
	this.shape_3.setTransform(198.8,224.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9AC9AC").s().p("AABLlIn1AAQg4AAgOgPQgNgOAAg6IAA0dQAAg6ANgOQAOgOA5AAIPkAAQA6AAAOAOQAOAOAAA3QAARJABDbQAAAugSATQgSATguAAIn1gBgACNIHICIAAIBagCIAQgCQAmgHACgZQABgZgkgJQgHgCgJAAQlvgFlwAFQgIAAgHACQgkAJACAZQACAYAlAIIAQACQBUADBhgBIC1AAICIAAgADADKQBxAABOgDQALAAAMgFQAcgLABgUQAAgVgbgKQgLgEgIAAQmzgDlAAFQgIAAgLAEQgiALAFAZQAGAYAnAFIAHABQBLACBqAAIC1gBIAAAAIDAABgAlpi6QgKAAgKADQgiAKgBAXQAAAYAjAIQAGACAIAAQGVAEFTgEQAIAAAGgCQAkgIAAgXQgBgYgigKQgMgDgHAAIhbgCIomAAIhdACgAlon5IgJABQgqAEgEAaQgFAaAnALQAKADAJAAIBZACQBZACCzgCIC9ABQBvAABOgDQAJAAAJgDQAlgJAAgYQAAgZgmgIIgQgCQi3gBi4AAQi3AAi4ABg");
	this.shape_4.setTransform(146.4,144.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("An7NNQhaAAgrgsQgrgrAAhZIAA0+QAAhTAqgsQArgrBUgBQICgCICACQCqABAACvIAAU3QAABagrAsQgrArhZABIn8ABIn8gBgAnzrkQg4AAgOAOQgOAOAAA5IAAUeQAAA6AOAOQAOAOA3AAIH1AAIH2ABQAtAAATgTQASgTAAgtQgBjcAAxIQAAg4gPgNQgOgOg5AAInyAAInzAAg");
	this.shape_5.setTransform(146.4,144.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9AC9AC").s().p("AgETjQj/AAjohjQjghfisitQisiuhejhQhhjpABj/QAAkBBjjoQBfjgCuisQCuisDihdQDrhhEBAAQD+ABDnBjQDeBgCrCtQCrCtBeDhQBhDqAAD+QgBEAhiDnQhfDgitCsQitCsjiBdQjoBij+AAIgDAAgAoCtMQhTABgsArQgqAsAABTIAAU+QAABaArAqQAsAsBZAAQH8ACH8gCQBZgBArgrQArgsABhaIgB02QAAiwiqgBIoCgBIoCABg");
	this.shape_6.setTransform(146.4,144.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFEFEF").s().p("Ao1U9QkGhvjJjJQjJjJhvkGQhykOAAkoQAAknBykPQBvkFDJjJQDJjJEGhvQEOhyEnAAQEoAAEPByQEFBvDJDJQDJDJBvEFQByEPAAEnQAAEohyEOQhvEGjJDJQjJDJkFBvQkPBykoAAQknAAkOhyg");
	this.shape_7.setTransform(145.5,145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_CONFIDENCIAL2crollverde2, new cjs.Rectangle(0,0,291.1,291.1), null);


(lib.M03_TMR_CHECK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7DA98").s().p("AomRbQlgi7AChLIB/jkIAjAgQABgugFhZIgGhQQhehbhQilQiglJBElwQBJmGD8jRQC4iYDegYQBmgKDmBGIAdAFQBMgQAzgXIglBAIAgAKQAiAMAkAPQBbABBfgbQAwgOAdgNIhKCCIA8AXQBjAGBtgdQA2gOAigQIhMCGQB0AnCAAGQAlACAJAGQALAHgIAbQgKAlhpBpQhIBIhnBaQAEAqAAAnIhhGDQANAGALAIQAVAPgBANQgBAUgJAgQgKAigGADQgGACgOgBIgNgBIgCAJQApB9AQC8IgEAiQgLAjgiALQgfAJgtgJQgkgHgCAHIgLAnQgHAfgBAaIgBAKQAEAQgYAfIgLAPIAAABQgIAYgLAKQgTAigZAZIAEABQADAEgJAMQgEAGgEBEQgFBAgUARQgkAfgbAJQgrAPg6gSQgagHg8ghIhtg5QiKhFgnAmQghAigHCJQgEBLgBCKIAOANIgICGQiwhPiwhegAKDhdQAFALACAKIAIAAQAJgCABgLQADgRgWgQg");
	this.shape.setTransform(257.5,224.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AC9AC").s().p("AH2LmIvqgBQg4AAgOgOQgNgPAAg6IAA0dQAAg6ANgOQAOgOA5AAIPkAAQA6AAAOAOQAOAOAAA4IABUkQAAAtgSATQgSATgrAAIgDAAgAkaGIQgmAAgcAcQgbAcAAAlQABAjAaAcQAbAbAjACQAmABAdgbQAdgbABgmQABgmgcgcQgbgcglAAIgCAAgAgqG/IgJACQgWAJABAZQABAZAXAIIAJACQAkACBIAAIEPgBQAbAAAbgBIAKgCQAWgIABgZQABgZgVgJQgDgBgHgBQhugDhuAAQhuAAhtADgAm4ChQgJALADAOIAEAHQAyA+AgAZQAJAGAUgCQAUgCAJgIQBWhQBThdQADgDACgFQAHgUgRgOQgQgOgSALIgEADQgjAehvBqQgJAIgMgBQgMAAgHgJQgVgagSgOQgEgDgLAAQgOAAgKALgAgsCDQgFAAgHADQgUAMADAYQAEAZAXAFIAEAAQAsACBAAAIBsAAIAAgBIBzABQBDAAAwgCQAHgBAHgFQAQgLABgUQAAgUgRgLQgFgEgGAAIilgBQiUAAiKAEgAmwiaQgPAOAIASIACAEQAMAQAVAXIAkAlQARAUASgBQAQgBASgUIBVhXQAyg0AhglQACgBACgFQAIgTgQgOQgQgNgSAJIgGAEQgcAah3BzQgIAIgMgBQgMAAgHgKQgRgYgOgLIgGgEQgHgDgGAAQgLAAgKAJgAAOi8Ig3ACQgHABgFADQgUAKgBAXQAAAXAVAIQAFACADAAQDeAEDfgEIAJgCQAVgIAAgXQAAgYgVgJQgGgDgFAAIg3gDIiiABIhygBIg1AAgAmynUQgNARAMARQALAOAVAWIAhAjQATAWASgBQAQgCAUgVIBQhSQAyg0AdggIABAAQAOgSgOgSQgPgSgVAKIgJAGQggAchsBuQgIAIgLgBQgLgBgGgJQgUgdgNgKQgDgDgHgCQgFgCgFAAQgNAAgKAMgAgln4IgFAAQgYAEgDAbQgDAaAXAKQAHADAFAAIAzADQA1ABBpgCIBwABQBBAAAugDQAFAAAGgCQAWgKAAgYQAAgYgWgIIgKgCQhsgDhsAAQhtAAhsADg");
	this.shape_1.setTransform(139.8,138.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("An7NNQhZgBgsgrQgrgrAAhZIAA0+QAAhUAqgrQArgsBUAAQHggCIkACQCqABAACvIAAU3QAABagqAsQgsArhZABIn8ABIn8gBgAo5rXQgNAOAAA6IAAUdQAAA6ANAPQAOAOA4AAIPqABQAtAAATgTQASgTAAgtIgB0kQAAg4gOgOQgOgOg6AAIvlAAQg4AAgOAOg");
	this.shape_2.setTransform(139.8,138.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9AC9AC").s().p("AnrSAQjghfisiuQisithejhQhhjpABkAQAAkABjjoQBfjhCuirQCuisDihdQDrhhEBABQD+AADnBjQDeBgCrCtQCrCtBeDhQBhDqAAD+QgBD/hiDoQhfDgitCsQitCrjiBeQjpBhkAABQj/gBjohigAoCtMQhUAAgrAsQgqArAABUIAAU+QAABZArAsQAsAqBZABQH7ACH9gCQBZgBArgrQArgsAAhaIAA03QAAiviqgBInLgBIo5ABg");
	this.shape_3.setTransform(139.8,138.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("ACDZSQnQjkADhQIBzjFIBaiRQABgngbgcQikAoiqAAQkaAAkBhtQj5hpjAjAQjAjAhpj4QhtkAAAkbQAAkaBtkBQBpj4DAjAQDAjAD5hpQEBhtEaAAQG9AAFnEDQFhD8CSGXQAlgKA3ACQAcACAUADIgeBSQAfAAAIACQADABAUgDQBoAAB3gcQA8gPAmgOIg+CcIAbAJQBzAHB9ggQA/gPAngRIhYCSQCGAqCTAHQAsACAJAGQANAJgIAdQgMArh3B9QhtB0hcBMIACAeIAAAeIhxGlQAPAGAOAJQAYAQgBAPQgDAXgLApQgMAwgIACQgHADgQgEIgOgFQAvCJASDMIgEAkQgMAogoALQgjAJg1gJQgpgHgCAIIgNAqQgIAhgBAcIgCALQAFASgbAiIgNAQIAAABQg7BjgQAVQgEAGgGBLQgFBGgYASQgoAigfAKQgzAPhDgSQgfgJg8goQhHgxgjgXQiBhUgcA0QgRAdACBDQADB4gBAeIAkAxIAFEjQjphhjphzg");
	this.shape_4.setTransform(187.2,183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_CHECK, new cjs.Rectangle(0,0,374.4,366), null);


(lib.M03_TMR_azul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525558").s().p("AgEAMQgEgCgBgFIgBgFIAAgMIABABIATAAQAEARgHAEQgEADgDAAIgEgBg");
	this.shape.setTransform(99.6,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDAB86").s().p("AADAKIgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAIgBgBIgEAAIgCgBQgEABABgHIADgKIASAIIAAACIAAABIgFAIIgBABIgCgBg");
	this.shape_1.setTransform(87.5,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDAB86").s().p("AAAAEIAAgDIAAgBIABgDIAAAIg");
	this.shape_2.setTransform(88.6,47.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303335").s().p("AgbgHQADgrAEgRIADgIIAsCPQgHACgGAEIgFACg");
	this.shape_3.setTransform(104,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#303335").s().p("AgHBJQgHgIgGABIgGACIAqiOIAEAJQAEARADAsIghBPg");
	this.shape_4.setTransform(89.5,39.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#525558").s().p("AAFgmIAJAUIgJAEIADAGIgWAwg");
	this.shape_5.setTransform(98.4,35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#303335").s().p("AgZBTIgBhgIAUhPIAYAFIAIADIgMBZIAKBYg");
	this.shape_6.setTransform(99.6,40.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#525558").s().p("AgGgIIACgHIgJgEIAJgUIASBPg");
	this.shape_7.setTransform(94.9,35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#303335").s().p("AgNAFIgNhXIAhgKIATBRIABBfIgxAJg");
	this.shape_8.setTransform(93.7,40.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDAB86").s().p("AgFAJIgEgHQAAgBAAAAQgBgBAAAAQAAAAgBABQAAAAAAAAIgBACIgCgBIACgOIAMgHIAHAKQAGAHABAIQABAJgEADQgDACgDAAQgGAAgEgLg");
	this.shape_9.setTransform(106.6,48.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDAB86").s().p("AgCAEQgKgDADgDQAEgFAHAFQAFACADACIgBADIgBABIgKgCg");
	this.shape_10.setTransform(87.7,46.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A7ABAB").s().p("AgMAAIAFgJIAUANIgKAGQgOgGgBgEg");
	this.shape_11.setTransform(95.5,31.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BBCACB").s().p("AAUBQIgRgEIADguQABgLgEghQAAAHglBWIgRgKIBJiWQALgDAKAGQAFADADAEQAECZgKABIgCAAQgGAAgRgDg");
	this.shape_12.setTransform(92,39.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7ABAB").s().p("AgLACIATgJIAEAHQAAAFgMAEg");
	this.shape_13.setTransform(97.8,31.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBCACB").s().p("AgvBTQgGAAABhOIADhMIAHgHQAKgGALADIBKCWIgNAHIgVgrQgUgrgBgEQAAgGgDAyIAEAuQggAHgMAAIgCAAg");
	this.shape_14.setTransform(101.4,39.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#818189").s().p("AAiAVIgCgQQgBgLgKgFQgJgGgMABQgLABgDACIgIAEQgEADgDAGIgCAFIgCAPQAAAAAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAQgFgeAKgBIABgBIACgCQADgDAHAAIALgCIAGgCQAXAAAGAJIABABQAHAEgBAPIgBANIgBABIgBgBg");
	this.shape_15.setTransform(96.4,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9BD9C").s().p("AgFAvQgRgHgKgQIAAgBIAAgHIgDgCIgEgTQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIACAAIABACIABAAIgBgMQAAgOAHgEQAAgCAIgEQAKgGAJAAIABAAQAPgBANANQAIAEAAAOIgBAMIgBABIABgBQABAAAAgBQAAgBABAAQAAAAABAAQAAAAABAAQABABgBAGIAAAAIgDAOQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIgBAIIAAABQgNAQgLAGIgBAAIgHABIgFgBg");
	this.shape_16.setTransform(96.5,25.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDAB86").s().p("AgCASQgagBAGgHQAJgJABgPIAMgDQAMgCABAFQAAAHALAYIgSABIgIAAg");
	this.shape_17.setTransform(96.6,30.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2C2B").s().p("AAIANIgVgGQgNAAgBgBIgCgLIADgGIAcgBIADAHIASAIQAHADgBAFQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAg");
	this.shape_18.setTransform(101.1,76.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C2C2B").s().p("AgRAJQgBgEAFgHIAFgHIACgGIAAgBIAYAAIAAAOQAAAHgBACQgCAEgGADIgEADIgPAAQgEgCgDgGg");
	this.shape_19.setTransform(92.2,76.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#525558").s().p("AAaCNIgNgCIgEiZIgHhBIgKBSIgJCJIgnAAIADhuIANirQAKAHAngCQAVgBASgCIAFAiIAEA2IgFC5IgJAGQgDACgIAAIgGgBg");
	this.shape_20.setTransform(96.4,61.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D15A61").s().p("ABhCfIi5AAIAADoIgkAAIAAjoIjaAAIAADoIgkAAIAAjoIjXAAIAADoIgkAAIAAkMICSAAIAAj9IFeAAIAAkEIElAAIAAEEIFZAAIAAD9IB9AAIAAEMIgkAAIAAjoInNAAIAIDnIgkABgAD3B7IDeAAIAAjZIjeAAgAjEB7IGXAAIAAjZImXAAgAm/B7IDXAAIAAjZIjXAAgAhhiCIDdAAIAAjgIjdAAg");
	this.shape_21.setTransform(95.2,118.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_22.setTransform(96.1,97.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A2D7E9").s().p("AmKOoQi3hOiMiMQiMiMhOi3QhPi9AAjOQAAjNBPi9QBOi2CMiNQCMiMC3hOQC9hPDNAAQDOAAC9BPQC2BOCNCMQCMCNBNC2QBQC9AADNQAADOhQC9QhNC3iMCMQiNCMi2BOQi9BPjOAAQjNAAi9hPg");
	this.shape_23.setTransform(96.8,96.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_azul, new cjs.Rectangle(-4.7,-4.7,203.1,203.1), null);


(lib.M03_TMR_r25enemod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape.setTransform(96.1,97.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAE8A9").s().p("AmKOoQi3hOiMiMQiMiMhOi3QhPi9AAjOQAAjNBPi9QBOi2CMiNQCMiMC3hOQC9hPDNAAQDOAAC9BPQC2BOCNCMQCMCNBNC2QBQC9AADNQAADOhQC9QhNC3iMCMQiNCMi2BOQi9BPjOAAQjNAAi9hPg");
	this.shape_1.setTransform(96.8,96.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_r25enemod3mcx, new cjs.Rectangle(-4.7,-4.7,203.1,203.1), null);


(lib.lineastabalamo25emod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2).p("EhByAAAMCDlAAA");
	this.shape.setTransform(432.1,-49);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-50,844.2,2);


(lib.lapizmueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ah8CUIgEgCIgCgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBID0AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAh4B/IgBgCIAQgwIABgBIABAAIAcAXIABACIgBABIgsAZIAAAAIgBAAgAhiBEIAYgnIAggrIAsAkQgSAWgRASQgSATgPANgAAGAMIgmgfIgBgDIAAgDIBUhpIgGgEIhBBSIgHgGIBFhZIAOALIABgCIADgBIBDgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgBAEIh2CSIgDACIgDgBg");
	this.shape.setTransform(21.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,7.8,26.2,29.6);


(lib.info01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("El nivel de disposición/readiness varía en función de la posición meta que se busca cubrir.", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 369;
	this.text.parent = this;
	this.text.setTransform(-344.8,-44.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AfVFIMg+pAAAQhkAAAAhkIAAnHQAAhkBkAAMA+tAAAQBgACAABiIAAHHQAABihgACIgEAAg");
	this.shape.setTransform(-179.7,-25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info01, new cjs.Rectangle(-390.2,-58.6,421,75.7), null);


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


(lib.iconoinfoposicionesbien2crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFE1B5").s().p("AiMAAIEZj0IAAHpg");
	this.shape.setTransform(148.6,168,1,1,0,0,0,-10,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFE1B5").s().p("ACFeaIkhAAMAAAgvkIE5AAMAAAAvkgAicxKIAAtPIEhAAIAYAAIAANPg");
	this.shape_1.setTransform(188.4,163.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3EFB9").s().p("APjeaIsCAAIkXAAItWAAQh5AAAAh4IAAj1IAAgBIAAjvIAAhtIAAiiIAAlIIAAisIAAh3IAAjbIAAhQIAAhQIAAoRIAAAAIAAjTIAAjRMAgKAAAIAALRIkTDvIETDwIAAZXgAwFtuIAAuzQAAh4B5AAINWAAIEXAAIMCAAIAiAAIAAQrg");
	this.shape_2.setTransform(69.2,161.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-32.8,237.9,390.5);


(lib.iconoinfoposicionesbienrosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D9DD").s().p("AiMAAIEZj0IAAHpg");
	this.shape.setTransform(160.6,170);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D9DD").s().p("ACFeaIkhAAIAAgNMAAAgsHIAAgBIAAjPIE5AAMAAAAvkgAicxKIAAtPIEhAAIAYAAIAANPg");
	this.shape_1.setTransform(190.4,163.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3EFB9").s().p("APWeaIsCAAIkXAAItWAAQh4AAAAh4IAAj1IAAgBIAAjvIAAhtIAAiiIAAlIIAAisIAAh3IAAjbIAAhQIAAhQIAAoRIAAAAIAAjTIAAjRMAgjAAAMAAAAsHgAwRtuIAAuzQAAh4B4AAINWAAIEXAAIMCAAIA8AAIAAANIAANPIAAAAIAADPg");
	this.shape_2.setTransform(70.4,161.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-32.8,239.9,390.5);


(lib.iconoinfoposiciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Readiness", "bold 20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 563;
	this.text.parent = this;
	this.text.setTransform(-22,-13);

	this.text_1 = new cjs.Text("Es el tiempo en que un colaborador puede estar listo para asumir una posición distinta a la actual en la organización. Este indicador está sumamente relacionado al potencial de un individuo y su capacidad de aprendizaje y adaptación. ", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 584;
	this.text_1.parent = this;
	this.text_1.setTransform(-21,19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Egq8AIqQhnAAhKhKQhIhJgBhnIAApfQABhnBIhKQBKhJBnAAMBV5AAAQBnAABJBJQBJBKABBnIAAJfQgBBnhJBJQhJBKhnAAg");
	this.shape.setTransform(265.9,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-22.3,599.7,110.8);


(lib.fondoscroll12crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEFEF").s().p("Eg88AaGQi0ABAAi1MAAAgukQAAizC0gBMB55AAAQC0ABAACzMAAAAukQAAC1i0gBg");
	this.shape.setTransform(441.5,192.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFE1B5").s().p("EAiUAeaInqAAIhkAAIxlAAIkxAAIi0AAIrQAAIi+AAIi+AAIkEAAIjmAAIsMAAIg8AAIsCAAIkYAAItWAAQh4AAAAh4IAAliIAAhFIAAirIAAn0IAAhRIAAhPIAAgKIAAi+IAAihIAAgLIAAnnIAAiQIAAgBIAAgZIAAAAIAAqAMCLVAAAIAAImIAABaIAAAAIAAAZIAAABIAACQIAAHnIAAALIAAFfIAAAKIAABPIAABRIAAH0IAACrIAABFIAAFiQAAB4h4AAgEhFqgRKIAAldIAAl6QAAh4B4AAIM4AAIAeAAIEYAAIMCAAIA8AAIMMAAIDmAAIEEAAIC+AAIC+AAILQAAIC0AAIExAAIRlAAIBkAAIHqAAMAhfAAAQB4AAAAB4IAAF6IAAFdg");
	this.shape_1.setTransform(445.9,194.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,891.9,389.2);


(lib.fondoscroll1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEFEF").s().p("Eg88AaGQi0ABAAi1MAAAgukQAAizC0gBMB55AAAQC0ABAACzMAAAAukQAAC1i0gBg");
	this.shape.setTransform(441.5,192.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D9DD").s().p("EAiUAeaInqAAIhkAAIxlAAIkxAAIi0AAIrQAAIi+AAIi+AAIkEAAIjmAAIlyAAImaAAIg8AAIkiAAIngAAIkYAAItWAAQh4AAAAh4IAAliIAAhFIAAirIAAn0IAAhRIAAhPIAAgKIAAi+IAAihIAAgLIAAnnIAAiQIAAgBIAAgZIAAAAIAAqAMCLVAAAIAAImIAABaIAAAAIAAAZIAAABIAACQIAAHnIAAALIAAFfIAAAKIAABPIAABRIAAH0IAACrIAABFIAAFiQAAB4h4AAgEhFqgRKIAAldIAAl6QAAh4B4AAIM4AAIAeAAIEYAAIHgAAIEiAAIA8AAIGaAAIFyAAIDmAAIEEAAIC+AAIC+AAILQAAIC0AAIExAAIRlAAIBkAAIHqAAMAhfAAAQB4AAAAB4IAAF6IAAFdg");
	this.shape_1.setTransform(445.9,194.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,891.9,389.2);


(lib.flechainstruccionesroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1,9.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.flechainstruccionesroll24en25enemod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1,9.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.flechainstruccionesroll24en25enanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1,9.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgjBVIhZAJIBrj4ICOA9IhrD4g");
	mask.setTransform(12.5,15.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AgxBzIBjjm");
	this.shape.setTransform(8.2,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AgvB0IBfjo");
	this.shape_1.setTransform(17.1,17.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(2.3,0.7,20.7,29.3), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8hdICOg9IBrD4IhZgJIg1BGg");
	mask.setTransform(12.5,15.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A7DAC8").ss(2).p("AAxB0Ihhjn");
	this.shape.setTransform(16.8,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A7DAC8").ss(2).p("AAwB0Ihfjo");
	this.shape_1.setTransform(7.9,17.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(2.1,0.7,20.6,29.3), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhsAvQgEgLAAgMQACgcATgWQAagdApgIQAmgHAkAOQAsASAOAjQAMAegPAiIjJAFQgIgGgEgNg");
	mask.setTransform(11.3,6.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8885F").s().p("AhsAvQgEgLAAgMQACgcATgWQAagdApgIQAmgHAkAOQAsASAOAjQAMAegPAiIjJAFQgIgGgEgNg");
	this.shape.setTransform(11.3,6.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0,0,22.6,13.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhtAvQgDgMAAgLQABgbAUgXQAZgdApgIQAmgHAlAPQAsARANAjQAMAegOAjIjKAEQgIgGgEgNg");
	mask.setTransform(11.3,6.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8885F").s().p("AhtAvQgDgMAAgLQABgbAUgXQAZgdApgIQAmgHAlAPQAsARANAjQAMAegOAjIjKAEQgIgGgEgNg");
	this.shape.setTransform(11.3,6.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,22.6,13.3), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABzDyIgBgCIANglQAKgZADgMQANgoABglQABgugPgkQgQgjghggQgNgMg2ghQgpgZgQgdIgtAuQgcAegHAKQgYAjgGAvQgFAsAIAwQAEAZAKAeIAOAlIAIANQAAAAABABQAAAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAgBQAAAAgBgBIAAgBIgBAAIgEgIIgagmQgOgXgDgUIgGhBIgKhAQgJg7AJgoQALgpAggkQAXgXAJgGQBog4BiA2QAkAUAXBGQALAgABAbQAAATgFAYQgHAjAAAPIADAaIAEAaQADAbgGAXQgGATgOAZIgQAgQgHATgKATIAAABIgBgBg");
	mask_1.setTransform(17.7,24.4);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC8D61").s().p("ABzDyIgBgCIANglQAKgZADgMQANgoABglQABgugPgkQgQgjghggQgNgMg2ghQgpgZgQgdIgtAuQgcAegHAKQgYAjgGAvQgFAsAIAwQAEAZAKAeIAOAlIAIANQAAAAABABQAAAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAgBQAAAAgBgBIAAgBIgBAAIgEgIIgagmQgOgXgDgUIgGhBQgBgNgDgUIgGgfQgJg7AJgoQALgpAggkQAXgXAJgGQBog4BiA2QAkAUAXBGQALAgABAbQAAATgFAYQgHAjAAAPIADAaIAEAaQADAbgGAXQgGATgOAZIgQAgQgHATgKATIAAABIgBgBg");
	this.shape_2.setTransform(17.7,24.4);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBEC3F").s().p("ABzDyIgBgCIANglQAKgZADgMQANgoABglQABgugPgkQgQgjghggQgNgMg2ghQgpgZgQgdIgtAuQgcAegHAKQgYAjgGAvQgFAsAIAwQAEAZAKAeIAOAlIAIANQAAAAABABQAAAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAgBQAAAAgBgBIAAgBIgBAAIgEgIIgagmQgOgXgDgUIgGhBIgKhAQgJg7AJgoQALgpAggkQAXgXAJgGQBog4BiA2QAkAUAXBGQALAgABAbQAAATgFAYQgHAjAAAPIADAaIAEAaQADAbgGAXQgGATgOAZIgQAgQgHATgKATIAAABIgBgBg");
	this.shape_3.setTransform(17.7,24.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0.1,35.4,48.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ABzDyIgBgCIANglIAOglQAMgoABgkQABgvgPgjQgQgkghggQgNgLg2ghQgpgagQgdIgtAvQgaAbgJAMQgXAigGAwQgGArAIAxQAFAZAKAeIANAlIAIANQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAgBQAAAAgBAAIAAgBIgBgBIgEgHIgagnQgOgXgDgUIgFhBIgLg/QgKg7AKgoQALgqAggjQAWgYAKgFQBog4BiA1QAlAUAWBGQALAgABAbQAAATgFAZQgHAoAAAJQAAAKADAQIAEAaQAEAcgHAXQgFARgOAaQgMAVgFALQgJAWgIAQIAAABIgBgBg");
	mask_1.setTransform(17.7,24.3);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC8D61").s().p("ABzDyIgBgCIANglIAOglQAMgoABgkQABgvgPgjQgQgkghggQgNgLg2ghQgpgagQgdIgtAvQgaAbgJAMQgXAigGAwQgGArAIAxQAFAZAKAeIANAlIAIANQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAgBQAAAAgBAAIAAgBIgBgBIgEgHIgagnQgOgXgDgUIgFhBIgLg/QgKg7AKgoQALgqAggjQAWgYAKgFQBog4BiA1QAlAUAWBGQALAgABAbQAAATgFAZQgHAoAAAJQAAAKADAQIAEAaQAEAcgHAXQgFARgOAaQgMAVgFALQgJAWgIAQIAAABIgBgBg");
	this.shape_2.setTransform(17.7,24.3);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBEC3F").s().p("ABzDyIgBgCIANglIAOglQAMgoABgkQABgvgPgjQgQgkghggQgNgLg2ghQgpgagQgdIgtAvQgaAbgJAMQgXAigGAwQgGArAIAxQAFAZAKAeIANAlIAIANQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAgBQAAAAgBAAIAAgBIgBgBIgEgHIgagnQgOgXgDgUIgFhBIgLg/QgKg7AKgoQALgqAggjQAWgYAKgFQBog4BiA1QAlAUAWBGQALAgABAbQAAATgFAZQgHAoAAAJQAAAKADAQIAEAaQAEAcgHAXQgFARgOAaQgMAVgFALQgJAWgIAQIAAABIgBgBg");
	this.shape_3.setTransform(17.7,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0.1,35.4,48.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjYBcQgHgXABgWQACg3AngtQAzg5BRgPQBMgPBIAdQAmAQAdAZQAhAcAOAjQALAdgBAjQgCAhgNAgImQAJQgPgLgJgcg");
	mask_1.setTransform(22.3,13.1);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8885F").s().p("AjYBcQgHgXABgWQACg3AngtQAzg5BRgPQBMgPBIAdQAmAQAdAZQAhAcAOAjQALAdgBAjQgCAhgNAgImQAJQgPgLgJgcg");
	this.shape_1.setTransform(22.3,13.1);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,44.6,26.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("ADiHfQAAgBAAAAQAAgBAAgBQgBAAABgBQAAAAAAAAQAHgbASgvQAUg0AGgVQAZhQAChHQAChdgehFQgdhFhEhBQgYgXhshBQhTgzggg4IgNANQgkAjgnArIgjAmQgVAXgMARQgwBEgLBfQgKBYAPBdQAJA0AUA5QAIAZATAwQAKAPAFALQACADgCAGQgCAFgDgFIgBgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgHgPQgjgxgQgaQgcgtgFgoQgDgYgDgoIgGhBIgUh/QgTh1AThOQAWhTA/hFQAVgYAJgIQARgRARgJQDMhuDDBqQBIAnAtCLQAVBCACAyQABAlgKAxIgKAwQgFAdAAAWQABATAGAgIAIA0QAFA4gMArQgLAlgbAxQgTAigOAeQgNAhgUAqIgBABIgCgBg");
	mask_2.setTransform(35,48.1);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC8D61").s().p("ADiHfQAAgBAAAAQAAgBAAgBQgBAAABgBQAAAAAAAAQAHgbASgvQAUg0AGgVQAZhQAChHQAChdgehFQgdhFhEhBQgYgXhshBQhTgzggg4IgNANQgkAjgnArIgjAmQgVAXgMARQgwBEgLBfQgKBYAPBdQAJA0AUA5QAIAZATAwQAKAPAFALQACADgCAGQgCAFgDgFIgBgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgHgPQgjgxgQgaQgcgtgFgoQgDgYgDgoIgGhBQgCgagHgmIgLg/QgTh1AThOQAWhTA/hFQAVgYAJgIQARgRARgJQDMhuDDBqQBIAnAtCLQAVBCACAyQABAlgKAxIgKAwQgFAdAAAWQABATAGAgIAIA0QAFA4gMArQgLAlgbAxQgTAigOAeQgNAhgUAqIgBABIgCgBg");
	this.shape_4.setTransform(35,48.1);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBEC3F").s().p("ADiHfQAAgBAAAAQAAgBAAgBQgBAAABgBQAAAAAAAAQAHgbASgvQAUg0AGgVQAZhQAChHQAChdgehFQgdhFhEhBQgYgXhshBQhTgzggg4IgNANQgkAjgnArIgjAmQgVAXgMARQgwBEgLBfQgKBYAPBdQAJA0AUA5QAIAZATAwQAKAPAFALQACADgCAGQgCAFgDgFIgBgCQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBIgHgPQgjgxgQgaQgcgtgFgoQgDgYgDgoIgGhBIgUh/QgTh1AThOQAWhTA/hFQAVgYAJgIQARgRARgJQDMhuDDBqQBIAnAtCLQAVBCACAyQABAlgKAxIgKAwQgFAdAAAWQABATAGAgIAIA0QAFA4gMArQgLAlgbAxQgTAigOAeQgNAhgUAqIgBABIgCgBg");
	this.shape_5.setTransform(35,48.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0.1,0.1,69.9,96.1), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAAgTIABAn");
	this.shape.setTransform(0.4,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,2.3,6.1), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAAgTIABAn");
	this.shape.setTransform(0.4,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-1,2.3,5.9), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAAgRIABAj");
	this.shape.setTransform(0.4,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-1,2.3,5.7), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAAgSIABAl");
	this.shape.setTransform(0.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-0.9,2.2,5.8), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAAgSIABAl");
	this.shape.setTransform(0.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-0.9,2.2,5.7), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAAgRIABAj");
	this.shape.setTransform(0.4,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-1,2.2,5.6), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgTIgBAn");
	this.shape.setTransform(0.4,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,2.3,6.1), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgTIgBAn");
	this.shape.setTransform(0.4,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-1,2.3,5.9), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgRIgBAj");
	this.shape.setTransform(0.4,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-1,2.3,5.7), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgSIgBAl");
	this.shape.setTransform(0.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-0.9,2.2,5.8), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgSIgBAl");
	this.shape.setTransform(0.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-0.9,2.3,5.7), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgRIgBAj");
	this.shape.setTransform(0.4,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-1,2.2,5.6), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFgOIgJAd");
	this.shape.setTransform(0.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,3,5.1), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDALIAHgV");
	this.shape.setTransform(0.6,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.7,-0.9,2.8,4.3), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgHgNQAKAHADAY");
	this.shape.setTransform(0.9,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.9,-0.8,3.5,5.2), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAIgNQgIAGgFAZ");
	this.shape.setTransform(0.9,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,3.5,5.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgHIAFAP");
	this.shape.setTransform(0.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.7,-0.9,2.6,3.7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFAOIgJgb");
	this.shape.setTransform(0.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.8,-0.9,3.1,4.8), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAiBHIAHgWQAEgMAAgKQABgOgFgLQgEgJgKgKQgEgDgQgKQgMgIgEgIIgYAZQgHALgCANQgBANACAOIAIAbIADAEQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAgBIgBAAIgBgCIgHgLQgEgHgBgGIgFgmQgDgRADgMQADgMAKgLIAJgIQAdgRAeAQQALAGAHAVQADAJAAAIQAAAHgBAGIgCAOIACAPQABAJgCAGIgQAiIAAAAIAAgBg");
	mask.setTransform(5.3,7.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8D61").s().p("AAiBHIAHgWQAEgMAAgKQABgOgFgLQgEgJgKgKQgEgDgQgKQgMgIgEgIIgYAZQgHALgCANQgBANACAOIAIAbIADAEQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAgBIgBAAIgBgCIgHgLQgEgHgBgGIgFgmQgDgRADgMQADgMAKgLIAJgIQAdgRAeAQQALAGAHAVQADAJAAAIQAAAHgBAGIgCAOIACAPQABAJgCAGIgQAiIAAAAIAAgBg");
	this.shape.setTransform(5.3,7.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AAiBHIAHgWQAEgMAAgKQABgOgFgLQgEgJgKgKQgEgDgQgKQgMgIgEgIIgYAZQgHALgCANQgBANACAOIAIAbIADAEQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAgBIgBAAIgBgCIgHgLQgEgHgBgGIgFgmQgDgRADgMQADgMAKgLIAJgIQAdgRAeAQQALAGAHAVQADAJAAAIQAAAHgBAGIgCAOIACAPQABAJgCAGIgQAiIAAAAIAAgBg");
	this.shape_1.setTransform(5.3,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0.1,0,10.5,14.4), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AggAHQAAgHAGgHQAHgIANgDQAKgCALAEQANAGAEAKQADAIgEAKIg7ACQgEgDAAgKg");
	mask_2.setTransform(3.3,1.9);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8885F").s().p("AggAHQAAgHAGgHQAHgIANgDQAKgCALAEQANAGAEAKQADAIgEAKIg7ACQgEgDAAgKg");
	this.shape_2.setTransform(3.3,1.9);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(0,0,6.7,4), null);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjaCbIAAk1IG1AAIAAE1g");
	mask.setTransform(21.9,15.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AjbAHIE4CRQAagkAcg4QA5hxANho");
	this.shape.setTransform(22.1,15.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, new cjs.Rectangle(0.1,0.1,43.8,31.1), null);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjVCfIAAk8IGrAAIAAE8g");
	mask.setTransform(21.5,15.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AjXggQBHARCGBWQBCArA1AoIBnk6");
	this.shape.setTransform(21.6,16.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, new cjs.Rectangle(0.1,0.1,42.8,31.7), null);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjNCJIAAkRIGbAAIAAERg");
	mask.setTransform(20.7,13.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AjPhBQBHARB/BcQA+AuAxArIBmkP");
	this.shape.setTransform(20.9,14);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, new cjs.Rectangle(0.1,0.1,41.3,27.4), null);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjABxIAAjhIGBAAIAADhg");
	mask.setTransform(19.3,11.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AjBhOQBHARBzBXQA5ArAsAoIBhjf");
	this.shape.setTransform(19.5,11.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, new cjs.Rectangle(0,0.1,38.7,22.6), null);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiPBeIAAi7IEfAAIAAC7g");
	mask.setTransform(14.5,9.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("ACOBeQgrgog6gsQhzhWhHgR");
	this.shape.setTransform(14.6,9.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, new cjs.Rectangle(0.1,0.2,28.9,18.9), null);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgRBxIAAjhIAkAAIAADhg");
	mask.setTransform(2,11.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgRhuQABAlAFAuQAJBbAUAy");
	this.shape.setTransform(2,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, new cjs.Rectangle(0.2,0,3.7,22.6), null);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgeCYIAAkvIA+AAIAAEvg");
	mask.setTransform(3.3,15.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAgiUQgTAKgQArQgiBVALCk");
	this.shape.setTransform(3.2,15.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, new cjs.Rectangle(0.2,0.2,6.3,30.4), null);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfCYIAAkvIA+AAIAAEvg");
	mask.setTransform(3.3,15.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAbCaQALikgihVQgQgrgTgK");
	this.shape.setTransform(3.4,15.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0.1,0.2,6.3,30.4), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhvE8IAAp3IDfAAIAAJ3g");
	mask.setTransform(11.3,31.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhuE8IDdp3");
	this.shape.setTransform(11.4,31.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0.2,0.1,22.4,63.3), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhqEZIAAoxIDVAAIAAIxg");
	mask.setTransform(10.9,28.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhqEZIDVox");
	this.shape.setTransform(10.9,28.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0.2,0.1,21.4,56.3), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhlD2IAAnrIDLAAIAAHrg");
	mask.setTransform(10.4,24.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhkD2IDJnr");
	this.shape.setTransform(10.4,24.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0.2,0.1,20.3,49.2), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhvFfIAAq9IDfAAIAAK9g");
	mask.setTransform(11.4,35.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AhuFfIDdq9");
	this.shape.setTransform(11.4,35.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0.2,0.1,22.3,70.2), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhxFlIAArJIDjAAIAALJg");
	mask.setTransform(11.6,35.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("ABxllIjhLL");
	this.shape.setTransform(11.6,35.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0.2,0.1,22.9,71.5), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgKGUIAAsnIAVAAIAAMng");
	mask.setTransform(1.3,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAKmUQgKCMgFCrQgMFWAYCb");
	this.shape.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0.2,0.1,2.1,80.9), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJGVIAAspIAUAAIAAMpg");
	mask.setTransform(1.2,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAKmUQgKCMgFCrQgMFWAYCb");
	this.shape.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.2,0,2.1,80.9), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJGVIAAspIAUAAIAAMpg");
	mask.setTransform(1.2,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAKmUQgKCMgFCrQgMFWAYCb");
	this.shape.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0.2,0,2.1,81), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgKGJIAAsSIAVAAIAAMSg");
	mask.setTransform(1.3,39.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAKmIQgKCGgFCmQgMFKAYCb");
	this.shape.setTransform(1.2,39.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0.2,0,2.2,78.7), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgKGVIAAspIAVAAIAAMpg");
	mask.setTransform(1.3,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAKmUQgKCMgGCrQgLFWAYCb");
	this.shape.setTransform(1.3,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0.2,0,2.1,80.9), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgKGVIAAspIAVAAIAAMpg");
	mask.setTransform(1.3,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAKmUQgKCMgFCsQgLFVAXCb");
	this.shape.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.2,0,2.1,81), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJGUIAAsnIAUAAIAAMng");
	mask.setTransform(1.2,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgJmUQAKCMAFCrQALFWgXCb");
	this.shape.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.2,0.1,2.1,80.9), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJGVIAAspIATAAIAAMpg");
	mask.setTransform(1.2,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgJmUQAKCMAGCrQALFWgYCb");
	this.shape.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0.2,0,2.1,80.9), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJGVIAAspIAUAAIAAMpg");
	mask.setTransform(1.2,40.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgJmUQAKCMAFCrQALFWgXCb");
	this.shape.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0.2,0,2.1,81), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgKGJIAAsSIAVAAIAAMSg");
	mask_1.setTransform(1.3,39.4);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6379B7").ss(0.5).p("AgJmIQAKCGAGCmQALFKgYCb");
	this.shape_2.setTransform(1.3,39.3);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(0.2,0,2.2,78.7), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgKGVIAAspIAVAAIAAMpg");
	mask_3.setTransform(1.3,40.5);

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6379B7").ss(0.5).p("AgJmUQAKCMAGCrQALFWgYCb");
	this.shape_3.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(0.2,0,2.1,80.9), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AgJGVIAAspIAUAAIAAMpg");
	mask_2.setTransform(1.2,40.5);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6379B7").ss(0.5).p("AgJmUQAKCMAFCsQALFVgXCb");
	this.shape_4.setTransform(1.2,40.5);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0.2,0,2.1,81), null);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ag/GaQhzgZghgDQAGhVAFhhQAKjCgJg/QgOhngxjdICXghIBTA5IAsghIA5AoIBMg9IByAYIggEvIgEBVQgFBdgFAfQgEAeAMBwIAOBqQgvAPg+AMQhMAPg3AAQgjAAgbgFg");
	mask_3.setTransform(26.3,41.9);

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_6.setTransform(26.5,78.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_7.setTransform(26.5,69.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_8.setTransform(26.5,60.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_9.setTransform(26.5,50.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_10.setTransform(26.5,41.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_11.setTransform(26.5,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_12.setTransform(26.5,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_13.setTransform(26.5,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_14.setTransform(26.5,4.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_15.setTransform(31.8,78.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_16.setTransform(31.8,69.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_17.setTransform(31.8,60.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_18.setTransform(31.8,50.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_19.setTransform(31.8,41.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_20.setTransform(31.8,32.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_21.setTransform(31.8,23.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_22.setTransform(31.8,13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_23.setTransform(31.8,4.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_24.setTransform(37.1,78.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_25.setTransform(37.1,69.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_26.setTransform(37.1,60.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_27.setTransform(37.1,50.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_28.setTransform(37.1,41.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_29.setTransform(37.1,32.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_30.setTransform(37.1,23.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_31.setTransform(37.1,13.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_32.setTransform(37.1,4.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_33.setTransform(42.4,78.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_34.setTransform(42.4,69.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_35.setTransform(42.4,60.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_36.setTransform(42.4,50.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_37.setTransform(42.4,41.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_38.setTransform(42.4,32.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_39.setTransform(42.4,23.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_40.setTransform(42.4,13.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_41.setTransform(42.4,4.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_42.setTransform(47.8,78.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_43.setTransform(47.8,69.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_44.setTransform(47.8,60.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_45.setTransform(47.8,50.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_46.setTransform(47.8,41.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_47.setTransform(47.8,32.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_48.setTransform(47.8,23.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_49.setTransform(47.8,13.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_50.setTransform(47.8,4.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_51.setTransform(39.8,83.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_52.setTransform(39.8,73.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_53.setTransform(39.8,64.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_54.setTransform(39.8,55.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_55.setTransform(39.8,46.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_56.setTransform(39.8,37.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_57.setTransform(39.8,27.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_58.setTransform(39.8,18.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_59.setTransform(39.8,9.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_60.setTransform(45.1,83.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_61.setTransform(45.1,73.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_62.setTransform(45.1,64.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_63.setTransform(45.1,55.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_64.setTransform(45.1,46.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_65.setTransform(45.1,37.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_66.setTransform(45.1,27.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_67.setTransform(45.1,18.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_68.setTransform(45.1,9.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_69.setTransform(23.9,83.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_70.setTransform(23.9,73.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_71.setTransform(23.9,64.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_72.setTransform(23.9,55.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_73.setTransform(23.9,46.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_74.setTransform(23.9,37.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_75.setTransform(23.9,27.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_76.setTransform(23.9,18.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_77.setTransform(23.9,9.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_78.setTransform(29.2,83.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_79.setTransform(29.2,73.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_80.setTransform(29.2,64.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_81.setTransform(29.2,55.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_82.setTransform(29.2,46.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_83.setTransform(29.2,37.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_84.setTransform(29.2,27.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_85.setTransform(29.2,18.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_86.setTransform(29.2,9.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_87.setTransform(34.5,83.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_88.setTransform(34.5,73.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_89.setTransform(34.5,64.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_90.setTransform(34.5,55.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_91.setTransform(34.5,46.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_92.setTransform(34.5,37.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_93.setTransform(34.5,27.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_94.setTransform(34.5,18.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_95.setTransform(34.5,9.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_96.setTransform(18.6,83.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_97.setTransform(18.6,73.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_98.setTransform(18.6,64.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_99.setTransform(18.6,55.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_100.setTransform(18.6,46.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_101.setTransform(18.6,37.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_102.setTransform(18.6,27.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_103.setTransform(18.6,18.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_104.setTransform(18.6,9.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_105.setTransform(13.3,83.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_106.setTransform(13.3,73.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_107.setTransform(13.3,64.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_108.setTransform(13.3,55.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_109.setTransform(13.3,46.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_110.setTransform(13.3,37.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_111.setTransform(13.3,27.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_112.setTransform(13.3,18.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_113.setTransform(13.3,9.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_114.setTransform(7.9,83.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_115.setTransform(7.9,73.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_116.setTransform(7.9,64.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_117.setTransform(7.9,55.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_118.setTransform(7.9,46.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_119.setTransform(7.9,37.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_120.setTransform(7.9,27.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BBCACB").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_121.setTransform(7.9,18.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BBCACB").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_122.setTransform(7.9,9.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_123.setTransform(21.2,78.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_124.setTransform(21.2,69.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_125.setTransform(21.2,60.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_126.setTransform(21.2,50.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_127.setTransform(21.2,41.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_128.setTransform(21.2,32.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_129.setTransform(21.2,23.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_130.setTransform(21.2,13.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_131.setTransform(21.2,4.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_132.setTransform(15.9,78.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_133.setTransform(15.9,69.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_134.setTransform(15.9,60.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_135.setTransform(15.9,50.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_136.setTransform(15.9,41.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_137.setTransform(15.9,32.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_138.setTransform(15.9,23.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_139.setTransform(15.9,13.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_140.setTransform(15.9,4.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_141.setTransform(10.6,78.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_142.setTransform(10.6,69.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_143.setTransform(10.6,60.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_144.setTransform(10.6,50.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_145.setTransform(10.6,41.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_146.setTransform(10.6,32.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_147.setTransform(10.6,23.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_148.setTransform(10.6,13.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_149.setTransform(10.6,4.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_150.setTransform(5.3,78.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_151.setTransform(5.3,69.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_152.setTransform(5.3,60.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_153.setTransform(5.3,50.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_154.setTransform(5.3,41.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#747887").s().p("AgagEIAagqIAbAsIgbAxg");
	this.shape_155.setTransform(5.3,32.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_156.setTransform(5.3,23.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#747887").s().p("AgagDIAagrIAbAsIgbAxg");
	this.shape_157.setTransform(5.3,13.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#747887").s().p("AgagEIAagqIAbArIgbAyg");
	this.shape_158.setTransform(5.3,4.7);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, new cjs.Rectangle(2.6,0.4,47.9,83.1), null);


(lib.Group_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgDhBIAHCD");
	this.shape_1.setTransform(0.7,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17_1, new cjs.Rectangle(-0.7,-1,2.8,15.2), null);


(lib.Group_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgDg/QAEA/ADBA");
	this.shape_1.setTransform(0.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16_1, new cjs.Rectangle(-0.7,-1,2.8,14.8), null);


(lib.Group_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgDg7IAHB3");
	this.shape_1.setTransform(0.7,6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15_1, new cjs.Rectangle(-0.7,-1,2.8,14), null);


(lib.Group_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgDg9QAEA9ADA+");
	this.shape_1.setTransform(0.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14_1, new cjs.Rectangle(-0.7,-1,2.8,14.4), null);


(lib.Group_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgDg8QAEA8ADA9");
	this.shape_1.setTransform(0.6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13_1, new cjs.Rectangle(-0.7,-0.9,2.8,14.2), null);


(lib.Group_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgDg5QAEA5ADA7");
	this.shape_1.setTransform(0.6,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12_1, new cjs.Rectangle(-0.7,-0.9,2.8,13.7), null);


(lib.Group_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAEhBIgHCD");
	this.shape_1.setTransform(0.7,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11_1, new cjs.Rectangle(-0.7,-1,2.8,15.2), null);


(lib.Group_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAEg/QgEA/gDBA");
	this.shape_1.setTransform(0.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10_1, new cjs.Rectangle(-0.7,-1,2.8,14.8), null);


(lib.Group_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAEg7IgHB3");
	this.shape_1.setTransform(0.7,6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_1, new cjs.Rectangle(-0.7,-1,2.8,14), null);


(lib.Group_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAEg9QgEA9gDA+");
	this.shape_1.setTransform(0.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8_1, new cjs.Rectangle(-0.7,-1,2.8,14.4), null);


(lib.Group_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAEg8QgEA8gDA9");
	this.shape_1.setTransform(0.6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_1, new cjs.Rectangle(-0.7,-0.9,2.8,14.2), null);


(lib.Group_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAEg5QgEA5gDA7");
	this.shape_1.setTransform(0.6,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_1, new cjs.Rectangle(-0.7,-0.9,2.8,13.7), null);


(lib.Group_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAQgwIgfBh");
	this.shape_1.setTransform(1.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_1, new cjs.Rectangle(-0.7,-0.9,5.1,11.9), null);


(lib.Group_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgLAlIAXhJ");
	this.shape_1.setTransform(1.4,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_1, new cjs.Rectangle(-0.8,-0.9,4.4,9.5), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgXgxQAVANALAiQAHAUAGAk");
	this.shape_1.setTransform(2.6,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(-0.8,-0.8,6.7,12.5), null);


(lib.Group_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AAYgxQggAVgNBS");
	this.shape_1.setTransform(2.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(-0.7,-0.8,6.6,12.5), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AgIgbIARA3");
	this.shape_1.setTransform(1.2,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(-0.7,-0.9,3.9,7.5), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6379B7").ss(0.5).p("AARAvIghhd");
	this.shape_1.setTransform(1.9,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(-0.8,-0.9,5.4,11.3), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhGAeQgCgIAAgHQABgRANgPQAQgTAbgEQAXgFAYAJQAdAMAJAWQAHAUgJAWIiCADQgFgEgDgJg");
	mask_4.setTransform(7.3,4.3);

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8885F").s().p("AhGAeQgCgIAAgHQABgRANgPQAQgTAbgEQAXgFAYAJQAdAMAJAWQAHAUgJAWIiCADQgFgEgDgJg");
	this.shape_4.setTransform(7.3,4.3);

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(0,0,14.6,8.6), null);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("ABKCdIAAgCIARgwQAIgbAAgWQABgfgJgWQgKgWgWgVQgIgIgjgVQgbgRgKgSIgFAEIgYAaQgRASgFAHQgQAWgEAfQgDAcAFAfQADATAGARIAJAYIAFAIQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBgBIAAgBIgBAAIgCgFIgRgZQgJgOgCgNIgKhTQgHgmAHgaQAHgaAVgYQAOgPAHgEQBCgkBAAjQAXANAPAtQAHAVAAARQABALgEARQgFAZABAHQAAALAEAXQADARgFAPQgEANgIAPIgWAuIAAAAIgBAAg");
	mask_4.setTransform(11.4,15.7);

	// Layer_3
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CC8D61").s().p("ABKCdIAAgCIARgwQAIgbAAgWQABgfgJgWQgKgWgWgVQgIgIgjgVQgbgRgKgSIgFAEIgYAaQgRASgFAHQgQAWgEAfQgDAcAFAfQADATAGARIAJAYIAFAIQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBgBIAAgBIgBAAIgCgFIgRgZQgJgOgCgNIgDgrIgHgoQgHgmAHgaQAHgaAVgYQAOgPAHgEQBCgkBAAjQAXANAPAtQAHAVAAARQABALgEARQgFAZABAHQAAALAEAXQADARgFAPQgEANgIAPIgWAuIAAAAIgBAAg");
	this.shape_159.setTransform(11.4,15.7);

	var maskedShapeInstanceList = [this.shape_159];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(1));

	// Layer_1
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FBEC3F").s().p("ABKCdIAAgCIARgwQAIgbAAgWQABgfgJgWQgKgWgWgVQgIgIgjgVQgbgRgKgSIgFAEIgYAaQgRASgFAHQgQAWgEAfQgDAcAFAfQADATAGARIAJAYIAFAIQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBgBIAAgBIgBAAIgCgFIgRgZQgJgOgCgNIgKhTQgHgmAHgaQAHgaAVgYQAOgPAHgEQBCgkBAAjQAXANAPAtQAHAVAAARQABALgEARQgFAZABAHQAAALAEAXQADARgFAPQgEANgIAPIgWAuIAAAAIgBAAg");
	this.shape_160.setTransform(11.4,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_160).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, new cjs.Rectangle(0,0,22.9,31.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAxFTQh4gBhphqQiFiEgeiDQA0haBWhXQBUhTBXgvQCFAeCCCDQBqBpABB4QABByhZBZQhYBYhwAAIgDAAg");
	this.shape.setTransform(34,33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,68,67.8), null);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,152,152);


(lib.Circulocerrar4coloresrollanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE4040").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.Circulocerrar4coloresroll24rosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE4040").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.Circulocerrar4coloresroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE4040").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.Circulocerrar4coloresroll2425ene2019amod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE4040").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.Circulocerrar4coloresroll2verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE4040").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.Circulocerrar4coloresroll2am = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE4040").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.circulo2instruccionesroll24animultaxmod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ACAFA1").p("AB9AAQAAAzgkAlQglAlg0AAQgzAAgkglQglglAAgzQAAgzAlglQAkgkAzAAQA0AAAlAkQAkAlAAAzg");
	this.shape.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,27,27);


(lib.circulo2instruccionesroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ACAFA1").p("AB9AAQAAAzgkAlQglAlg0AAQgzAAgkglQglglAAgzQAAgzAlglQAkgkAzAAQA0AAAlAkQAkAlAAAzg");
	this.shape.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,27,27);


(lib.circulo2instruccionesroll24e25ene2019amod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ACAFA1").p("AB9AAQAAAzgkAlQglAlg0AAQgzAAgkglQglglAAgzQAAgzAlglQAkgkAzAAQA0AAAlAkQAkAlAAAzg");
	this.shape.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,27,27);


(lib.circulo1instruccionesroll225ene2019amod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9BDAD").s().p("Ag/BAQgagbgBglQABglAagaQAbgbAkAAQAlAAAbAbQAbAagBAlQABAlgbAbQgbAbglgBQgkABgbgbg");
	this.shape.setTransform(104.6,9.1,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.5,1,16.2,16.2);


(lib.circulo1instruccionesroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9BDAD").s().p("Ag/BAQgagbgBglQABglAagaQAbgbAkAAQAlAAAbAbQAbAagBAlQABAlgbAbQgbAbglgBQgkABgbgbg");
	this.shape.setTransform(104.6,9.1,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.5,1,16.2,16.2);


(lib.circulo1instruccionesroll2animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9BDAD").s().p("Ag/BAQgagbgBglQABglAagaQAbgbAkAAQAlAAAbAbQAbAagBAlQABAlgbAbQgbAbglgBQgkABgbgbg");
	this.shape.setTransform(104.6,9.1,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.5,1,16.2,16.2);


(lib.circulo2nu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAhBBIhYhnQgCgCABgDQAAgDACgBIAYgSQAFgEAEAFIBMBlQADADgCAFIgNAUQgBADgEAAQgDAAgCgDg");
	this.shape.setTransform(75.9,91.5,0.809,0.809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgrBBIgMgUQgCgEACgEIBNhlQAEgFAFAEIAYASQACABAAADQABADgCACIhYBnQgCADgDAAQgEAAgCgDg");
	this.shape_1.setTransform(97.9,91.5,0.809,0.809);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9BD9C").s().p("AgPgBIAEgTIAOAEIgBAGQAAAHAEAEQAFAIAFADIgQAJg");
	this.shape_2.setTransform(72.6,86.8,0.809,0.809);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9BD9C").s().p("AgJARQgLgMgEgNQgDgPAHgFQARgNAMAZIAIAMQAAABABABQABAAAAAAQABABAAgBQAAAAABgBIABgDIADACQACABgEAWIgTAOg");
	this.shape_3.setTransform(71,83.9,0.809,0.809);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9BD9C").s().p("AgPALIAKgKQAGgHgEgJIAPgEIAEASIgQAVg");
	this.shape_4.setTransform(101.5,87.1,0.809,0.809);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#41523C").s().p("AAAAHIgCgNIACAAIAEANg");
	this.shape_5.setTransform(90.5,107.5,0.809,0.809);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#41523C").s().p("AgBAGIABgNIACABIgBAOg");
	this.shape_6.setTransform(82.7,107.4,0.809,0.809);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AgnAHIgegHIABgKIAXAGQAbAFAQABQAYAAAugKIACAJIg7AKIgKAAQgPAAgZgEg");
	this.shape_7.setTransform(86.9,107.4,0.809,0.809);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AgXATIgBgLQgBgLABgBIADgCIABADQAAABABAAQAAABABAAQAAAAABgBQAAAAABgBIAHgNQAOgYAPAMQAIAGgEAOQgDAOgMALIgMAQg");
	this.shape_8.setTransform(103.1,84.2,0.809,0.809);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D4D4D").s().p("AgRAEIAdgQIAGAMQgBAIgRAFg");
	this.shape_9.setTransform(88.2,87.7,0.809,0.809);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D4D4D").s().p("AgSgBIAHgNIAeAUIgOAJQgWgJgBgHg");
	this.shape_10.setTransform(85.2,87.5,0.809,0.809);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#744C28").s().p("Ag6AjQgDAAgCgPQgCgOABgKQABgLAXgOQAZgPATACQATACAVAIQARAIAAACQADADAAAJQABAGgCAFQgCAJAEANQABACgNARQgEgbgDgCQgCgBgDgMIgEgKQgDAFgGAFQgMAJgOABIgigCQgTAAgBALQgCAPADAJQgDgHgEgBg");
	this.shape_11.setTransform(86.6,75.9,0.809,0.809);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AAeB5IgegGIAGhGQABgRgFgyQgBAIgPAOQgEACgEgBQgFAAgDgCIgvg+IASAKQARAIACgJQAJgpAGgJIALgIQAOgJAegCQARgGAPAJQAIAFAEAGIAEB0QACB2gJABIgDAAQgKAAgcgFg");
	this.shape_12.setTransform(81.4,97.4,0.809,0.809);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AhGB+QgJgBACh2IAEh0IAMgLQAPgJARAGIARACQASADAJAGIAMAIQAFAJAJApQACAJASgIQAJgEAIgGIgvA+QgDACgFAAQgEABgEgCQgPgPAAgHQgBgJgCAgQgDAhABALIAFBGQgxALgRAAIgEAAg");
	this.shape_13.setTransform(92.3,97.4,0.809,0.809);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9BD9C").s().p("AgIBIQgagKgPgZIAAgCIAAgKIgBAAQgCAAgCgDIgDgJIgBgNIgBgHQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABABAAAAQABAAAAAAQABABAAAAIABACIABAAQgBgJAAgJQAAgWALgGQAAgCAMgHQAPgJAOAAIACAAIAAAAIAAAAIAAAAQAYgBATATQALAGAAAWQAAAJgBAJIgBACIABgCQAEgEACABQADABgCAKIAAAAIgFAWQgBADgDAAIgBAAIgBAMIAAACQgOAVgXAMIgBAAIgKABQgFAAgEgBg");
	this.shape_14.setTransform(86.6,79.9,0.809,0.809);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDAB86").s().p("AgEAbQgogBAKgKQAOgOABgYIATgEQASgDABAHQAAAMASAlIgaABIgPgBg");
	this.shape_15.setTransform(86.7,85.8,0.809,0.809);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D4D4D").s().p("AAnDXIgTgDIgDhvQgChwgCgLIgJhjIgRB+IgNDQIg7AAIAIkNIAPifQAZARBugOIAHA0QAGBCAAAQIgGEbIgOAIQgEADgKAAIgNgBg");
	this.shape_16.setTransform(86.5,123.9,0.809,0.809);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1A1A1A").s().p("AANAUIghgKQgUABgCgCQgCgBAAgIIAAgIIAEgJIArgCIAFALIAbAMQALAFgBAHQAAABgBABQAAABAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_17.setTransform(92.2,142.4,0.809,0.809);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1A1A1A").s().p("AgaAOQgCgHAHgKIAIgKIADgLIAAgBIAlAAIAAAVQABAMgCACQgCAGgKAFIgHAEIgWABQgHgEgEgIg");
	this.shape_18.setTransform(81.3,143,0.809,0.809);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7DA98").s().p("AgcAHIAAgNIA5AAIAAANg");
	this.shape_19.setTransform(73.2,30.2,0.809,0.809);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7DA98").s().p("AgbAHIAAgNIA4AAIAAANg");
	this.shape_20.setTransform(101,30.2,0.809,0.809);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7DA98").s().p("AgGAXIAAgtIANAAIAAAtg");
	this.shape_21.setTransform(87.1,15.9,0.809,0.809);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7DA98").s().p("AgcANQAZgQAXgUIAJALIgxAkg");
	this.shape_22.setTransform(75.8,38.7,0.809,0.809);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7DA98").s().p("AgaAMIAtggIAHAJIgtAgg");
	this.shape_23.setTransform(98.8,21.6,0.809,0.809);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F7DA98").s().p("AgbgPIAKgKIAtApIgKAKg");
	this.shape_24.setTransform(76.6,20.7,0.809,0.809);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F7DA98").s().p("AgbgPIAJgKQASASAcAWIgJALIgugpg");
	this.shape_25.setTransform(97.7,39.7,0.809,0.809);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8EA6D9").s().p("AgkAgIAkg/IAlA/g");
	this.shape_26.setTransform(86.7,45.5,0.809,0.809);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8EA6D9").s().p("AgNBuIAAjbIAbAAIAADbg");
	this.shape_27.setTransform(86.7,56.6,0.809,0.809);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8EA6D9").s().p("AgiANIA2gwIAPBHg");
	this.shape_28.setTransform(112.9,87.6,0.809,0.809);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8EA6D9").s().p("AhhBIQBGgRA4hNQAdgoAOgkIAaAKQgPAogfAqQg9BVhRAUg");
	this.shape_29.setTransform(122.5,80.7,0.809,0.809);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8EA6D9").s().p("AgTgjIA2AwIhFAXg");
	this.shape_30.setTransform(59.4,87.6,0.809,0.809);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8EA6D9").s().p("AgzgGQgTgbgPgdQgLgVgBgFIAagKIArBMQA4BNBGARIgHAbQhRgUg9hVg");
	this.shape_31.setTransform(49.8,80.7,0.809,0.809);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7DA98").s().p("ABCBuIhCgwIhDAxIgFABIAAgEIATg+IAEgJQACgGgBgDQgBgDgFgEIgIgEIg0glIgDgFIAGgCIBMAAQAHAAACgGIAXhJIADgGIAEAGIAXBIQADAHAGAAIBLAAIAHACIgEAFQgiAYgcAUQgFADACAGIAYBIIAAAHg");
	this.shape_32.setTransform(87.1,29.1,0.809,0.809);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C8885F").s().p("AgHAqIgDgCIgCgDQAAgGgHgDQgHAEgCgBQgCAAgEgHIgEgHQgGgIAIgEQADgCAAgDQAAgDgDgBQgHgEAFgHIAGgMQADgFAGADQAEACADgCQADgCAAgEQABgGAFAAIAPAAIADACIADACQgBAGAIAEQAHgEABABQACAAAEAHIAEAHQAGAIgJAEQgCABABADQgBAEADABQAHAEgFAHIgGALIgBACQgBAAAAABQAAABgBAAQAAAAgBAAQAAAAgBAAIgHgDQgHADAAAEIAAACQAAAAAAABQAAAAgBAAQAAABAAAAQgBABgBAAIgDACIgIAAIgHAAgAgNgNQgGAGABAHQgBAIAHAGQAFAGAHAAQAIAAAHgGQAFgGAAgIQAAgHgGgGQgGgGgIAAQgHAAgGAGg");
	this.shape_33.setTransform(139.9,55,0.809,0.809);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C8885F").s().p("AgLA9QgIAAAAgIQAAgHgFgDQgFgCgFADQgIAEgEgHIgMgVQgEgHAHgEQAGgEAAgFQAAgEgGgDQgHgFAEgIIALgSQADgGADAAQACgBAHADIADACQALgFgBgJIAEgGIAfAAIADADQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgCAJAMAFQAKgGACABQADAAAGAMIAIANQAEAIgHAFQgGADAAAEQAAAFAGAEQAHAEgEAHIgMAUQgEAIgIgEQgGgDgEACQgFADAAAHQAAAIgIAAgAgUgTQgIAJAAALQAAALAJAIQAIAJALAAQAMAAAIgJQAJgIAAgMQAAgLgJgJQgJgIgLAAQgLAAgJAJg");
	this.shape_34.setTransform(135.9,46.9,0.809,0.809);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C8885F").s().p("AgXBcQgIgDABgLQAAgJgHgEQgHgDgHADQgIAFgEgBQgEgBgEgIIgRgdQgEgGABgEQABgEAHgEQAHgDAAgCQACgIgCgHQAAgCgGgCQgIgEgBgEQgBgFAEgHIASgeQAGgLALAHIAJAEQADgBAKgHIABgDIAAgIQAAgLALAAIAmAAQALAAAAALQABAPANAEQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIAHgFQAKgFAEAKIAVAjQAFAIgJAFIgDADIgHAEQgBAHABAIQAAABAGADQAIAEABAEQABAEgEAJIgRAdQgEAGgEABQgDABgGgDQgMgHgKAKQgCACABAHQAAAJgHAEgAgegdQgNAMAAARQAAASANANQAMANASAAQASAAAMgNQANgNAAgSQAAgRgNgNQgMgNgSAAQgRABgNANg");
	this.shape_35.setTransform(128.1,58,0.809,0.809);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBE1E5").s().p("AAiBmQgPAAAFgPQAGgPgCgIQgDgLgJgFQgJgFgKACQgKADgGAJQgFAJADALIADALQACAHgCADQgCADgIAAQgVACgYgHIgSgEIADgNQAIgfgCgTQAAgIgDgCQgDgCgIACIgOAEQgRACgIgPQgIgOAKgOQAKgMARAEIANAEQAJADADgJQACgKgEgWIgIgfIAZgGQATgEAQAAQANAAgEAOQgEALgBAHQAAALAIAIQAIAHALgBQALgBAHgIQAHgJgCgLIgEgPQgBgGACgDQABgCAHgBQATgCAlAJIAIACIgIAoQgCALABAOQABALALgDIAYgEQALABAGAJQAFAJgCALQgCAKgIAGQgJAGgKgCIgPgFQgKgDgCAJQgCAKAEAWIAHAfIgdAHQgPADgLAAIgDAAg");
	this.shape_36.setTransform(41.7,57.3,0.809,0.809);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_37.setTransform(86.6,80.6,0.792,0.792);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BED19D").s().p("AkTKPQiBg2hhhiQhjhig2iBQg4iEAAiQQAAiPA4iEQA2iABjhiQBhhjCBg2QCEg4CPAAQCQAACEA4QCAA2BjBjQBiBiA2CAQA4CEAACPQAACQg4CEQg2CBhiBiQhjBiiAA2QiEA4iQAAQiPAAiEg4g");
	this.shape_38.setTransform(87.2,80.4,1.132,1.132);

	this.text = new cjs.Text("Estimular y desarrollar", "20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(87.9,173.2,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.8,0,160.9,241.1);


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
	this.text = new cjs.Text("Durante esta sesión se busca calibrar, mediante una discusión, los resultados de desempeño y potencial de los colaboradores en base a conductas observables. Se busca determinar la siguiente asignación posible para cada uno, además de establecer aquellas acciones de desarrollo que les permitirán estar listos para dichas responsabilidades en el tiempo previsto.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 416;
	this.text.parent = this;
	this.text.setTransform(23.1,34.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("AzoXSMAAAgujMA0+AAAQBnAABJBJQBJBJABBoMAAAAmvQgBBohJBJQhJBJhnAAgEghUAXSQhoAAhKhJQhIhJAAhoMAAAgmvQAAhoBIhJQBKhJBoAAINsAAMAAAAujg");
	this.shape.setTransform(228.4,101);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-48,476.7,298.1);


(lib.cajagdemc1t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Objetivo", "bold 22px 'Arial'", "#333333");
	this.text.lineHeight = 27;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(188.1,26.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("ApXGUIAAsnMA8rAAAQBnAABJBJQBJBKABBnIAAFkIgFAAQgNBIg4A3QhJBKhnAAgEgzTAGUQhnAAhJhKQg4g3gNhIIgFAAIAAlkQAAhnBKhKQBJhJBnAAMAp7AAAIAAMng");
	this.shape.setTransform(348.4,35.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AlPjNIKfAAIlQGbg");
	this.shape_1.setTransform(247.4,74.5,1,1,0,0,0,5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,706.7,100.1);


(lib.cajaatraslistoahora = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AjeFUQh4AAAAh4IAAmdIKtAAIAAGdQAAB4h4AAgAlWjCIAAiRIKtAAIAACRg");
	this.shape.setTransform(34.3,34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.6,68);


(lib.T1_cuadrotransicion_mcroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
		
		this.parent.m2mc1_Cerrar.visible=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape.setTransform(244.3,117.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.988)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_1.setTransform(244.3,117.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.953)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_2.setTransform(244.3,117.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.89)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_3.setTransform(244.3,117.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.808)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_4.setTransform(244.3,117.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.698)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_5.setTransform(244.3,117.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.565)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_6.setTransform(244.3,117.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.408)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_7.setTransform(244.3,117.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.224)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_8.setTransform(244.3,117.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.02)").s().p("EhOgApQMAAAhSfMCdBAAAMAAABSfg");
	this.shape_9.setTransform(244.3,117.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.2,-147,1005,528.1);


(lib.T1_Boton_invisibleroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhLJAjjMAAAhHFMCWTAAAMAAABHFg");
	this.shape.setTransform(481,227.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.T3_Señalar_btn_25enanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.573)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_25enanimultax, new cjs.Rectangle(0,0,90,96), null);


(lib.T3_movie_25ene2animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.114)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_1.setTransform(45,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.192)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_2.setTransform(45,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.259)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_3.setTransform(45,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.318)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_4.setTransform(45,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.369)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_5.setTransform(45,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.408)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_6.setTransform(45,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.443)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_7.setTransform(45,48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.463)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_8.setTransform(45,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_9.setTransform(45,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.482)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_10.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_activo_1_lineaanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_lineaanimultax, null, null);


(lib.T3_Señalar_btn_25ene2mod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.573)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_25ene2mod3mcx, new cjs.Rectangle(0,0,90,96), null);


(lib.T3_movie_25ene2019mod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.114)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_1.setTransform(45,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.192)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_2.setTransform(45,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.259)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_3.setTransform(45,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.318)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_4.setTransform(45,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.369)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_5.setTransform(45,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.408)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_6.setTransform(45,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.443)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_7.setTransform(45,48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.463)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_8.setTransform(45,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_9.setTransform(45,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.482)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_10.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_activo_1_lineaMOD3a25ene2mod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_lineaMOD3a25ene2mod3mcx, null, null);


(lib.T3_Señalar_btn_gr_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.573)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_gr_1_lineaMOD3a, new cjs.Rectangle(0,0,90,96), null);


(lib.T3_movie_rollover_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.114)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_1.setTransform(45,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.192)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_2.setTransform(45,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.259)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_3.setTransform(45,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.318)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_4.setTransform(45,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.369)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_5.setTransform(45,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.408)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_6.setTransform(45,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.443)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_7.setTransform(45,48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.463)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_8.setTransform(45,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_9.setTransform(45,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.482)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_10.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_activo_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_lineaMOD3a, null, null);


(lib.T1_Boton_invisibleroll24emod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T1_Boton_invisibleroll24emod3mcx, null, null);


(lib.T3_Señalar_btn_gr_1_lirosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.573)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_gr_1_lirosa, new cjs.Rectangle(0,0,90,96), null);


(lib.T3_movie_rollover_1_linearosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.114)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_1.setTransform(45,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.192)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_2.setTransform(45,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.259)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_3.setTransform(45,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.318)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_4.setTransform(45,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.369)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_5.setTransform(45,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.408)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_6.setTransform(45,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.443)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_7.setTransform(45,48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.463)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_8.setTransform(45,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_9.setTransform(45,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.482)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_10.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_activo_1_lineaMOD3arosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_lineaMOD3arosa, null, null);


(lib.T1_Boton_invisibleroll24ene_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T1_Boton_invisibleroll24ene_1, null, null);


(lib.T1_Boton_invisiblerollrosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhLJAjjMAAAhHFMCWTAAAMAAABHFg");
	this.shape.setTransform(481,227.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.T1_Boton_invisibleroll24emoanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T1_Boton_invisibleroll24emoanimultax, null, null);


(lib.T1_cuadrotransicion_25eanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
		this.parent.m2mc1_Cerrar.visible=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgubAZoMAAAgzPMBc3AAAMAAAAzPg");
	this.shape.setTransform(441.6,96.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EguMAZoMAAAgzPMBcZAAAMAAAAzPg");
	this.shape_1.setTransform(443.1,96.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgtfAZoMAAAgzPMBa/AAAMAAAAzPg");
	this.shape_2.setTransform(447.9,96.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgsUAZoMAAAgzPMBYpAAAMAAAAzPg");
	this.shape_3.setTransform(455.7,96.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgqrAZoMAAAgzPMBVXAAAMAAAAzPg");
	this.shape_4.setTransform(466.7,96.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgojAZoMAAAgzPMBRIAAAMAAAAzPg");
	this.shape_5.setTransform(480.9,96.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Egl+AZoMAAAgzPMBL9AAAMAAAAzPg");
	this.shape_6.setTransform(498.1,96.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Egi7AZoMAAAgzPMBF3AAAMAAAAzPg");
	this.shape_7.setTransform(518.6,96.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A/aZoMAAAgzPMA+0AAAMAAAAzPg");
	this.shape_8.setTransform(542.1,96.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A7aZoMAAAgzPMA21AAAMAAAAzPg");
	this.shape_9.setTransform(568.8,96.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A28ZoMAAAgzPMAt5AAAMAAAAzPg");
	this.shape_10.setTransform(598.7,96.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AyBZoMAAAgzPMAkDAAAMAAAAzPg");
	this.shape_11.setTransform(631.7,96.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AsnZoMAAAgzPIZPAAMAAAAzPg");
	this.shape_12.setTransform(667.8,96.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AmwZoMAAAgzPINhAAMAAAAzPg");
	this.shape_13.setTransform(707,96.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaZoMAAAgzPIA1AAMAAAAzPg");
	this.shape_14.setTransform(749.5,96.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.4,-67.3,594.4,328);


(lib.barraScrollVerticalcrollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D95A5").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape.setTransform(17.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3030").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_1.setTransform(17.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#648F34").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_2.setTransform(17.1,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C67124").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_3.setTransform(17.1,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,3.7);


(lib.barraScrollVertical = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D95A5").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape.setTransform(17.1,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3030").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_1.setTransform(17.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#648F34").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_2.setTransform(17.1,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C67124").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_3.setTransform(17.1,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,3.7);


(lib.barrabcdespliega = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg9tAGuIAAtbMB7bAAAIAANbg");
	this.shape.setTransform(395,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790,86);


(lib.AS_LG_153sstipam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3,37.3,1.111,1.111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.8,59.2,0.277,0.356);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.8,55.7,0.277,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.3,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,21.9,46.8,54.3);


(lib.AS_LG_153sstiprosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3,37.3,1.111,1.111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.8,59.2,0.277,0.356);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.8,55.7,0.277,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.3,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,21.9,46.8,54.3);


(lib.AS_LG_153sstip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3,37.3,1.111,1.111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.8,59.2,0.277,0.356);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.8,55.7,0.277,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.3,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,21.9,46.8,54.3);


(lib.AS_LG_153ssanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3,37.3,1.111,1.111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.8,59.2,0.277,0.356);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.8,55.7,0.277,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.3,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,21.9,46.8,54.3);


(lib.AS_LG_153ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3,37.3,1.111,1.111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.8,59.2,0.277,0.356);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.8,55.7,0.277,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.3,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,21.9,46.8,54.3);


(lib.AS_LG_151crollverde22crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgnBBQgGgEACgIIAPgyIAAgFIgPgyQgCgIAGgEQAHgFAGAFIBDA5QAEADAAAEQAAAFgEADIhDA5QgDACgDAAQgDAAgEgCg");
	this.shape.setTransform(11.1,10.2,1,1,0,0,0,-0.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#648F34").s().p("AhFBGQgdgdAAgpQAAgpAdgdQAdgdAoAAQApAAAdAdQAdAdAAApQAAApgdAdQgdAegpgBQgoABgdgeg");
	this.shape_1.setTransform(9.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,19.9);


(lib.AS_LG_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgnBBQgGgEACgIIAPgyIAAgFIgPgyQgCgIAGgEQAHgFAGAFIBDA5QAEADAAAEQAAAFgEADIhDA5QgDACgDAAQgDAAgEgCg");
	this.shape.setTransform(11.1,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3030").s().p("AhFBGQgdgdAAgpQAAgpAdgdQAdgdAoAAQApAAAdAdQAdAdAAApQAAApgdAdQgdAegpgBQgoABgdgeg");
	this.shape_1.setTransform(9.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,19.9);


(lib.unodosanios22255ddf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.circulo2nu("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.4,-111.4,1,1,0,0,0,80.5,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-191.9,160.9,241.1);


(lib.unodosanios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Aún necesita desarrollar algunas de las competencias requeridas en el siguiente nivel.", "8px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 53;
	this.text.parent = this;
	this.text.setTransform(70.6,56.2,2.067,2.067);

	this.text_1 = new cjs.Text("1 o 2 años", "bold 8px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 50;
	this.text_1.parent = this;
	this.text_1.setTransform(30.5,12.5,2.067,2.067);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBB03B").s().p("ArDDUIAAiwQAAj3D3AAIOYAAQD5AAgBD3IAACwg");
	this.shape.setTransform(71.2,21.2);

	this.instance = new lib.cajaatraslistoahora("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(72.6,114.5,2.067,2.067,0,0,0,35.1,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,201.5);


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

	this.text = new cjs.Text("Sesión de calibración", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 504;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulo("synched",0);
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


(lib.primerflechaazul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Identificar el próximo rol y la combinación adecuada de acciones de desarrollo para apoyar el cambio. Participar en conversaciones sobre carrera profesional y seguir el ritmo de sus aspiraciones a largo plazo.\n\n\n\n", "35px 'Arial'", "#333333");
	this.text.lineHeight = 41;
	this.text.lineWidth = 573;
	this.text.parent = this;
	this.text.setTransform(37.8,160.9,0.518,0.518);

	this.instance = new lib.M03_TMR_azul();
	this.instance.parent = this;
	this.instance.setTransform(177.3,71.4,0.7,0.7,0,0,0,97,97.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2D7E9").s().p("AiIJWIAAyrIAFgLIEMJgIkMJhg");
	this.shape.setTransform(367,200.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2D7E9").s().p("A4ZYOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMA0tAAAMAAAAwbg");
	this.shape_1.setTransform(181.2,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.8,416.3);


(lib.primerflecha2verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("            . Brindar orientación clara sobre la manera de llevar su desempeño al próximo nivel. \n", "35px 'Arial'", "#333333");
	this.text.lineHeight = 41;
	this.text.lineWidth = 573;
	this.text.parent = this;
	this.text.setTransform(37.8,245.9,0.518,0.518);

	this.text_1 = new cjs.Text("“Acciones de Desarrollo del Top Talent”", "bold 35px 'Arial'", "#333333");
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 573;
	this.text_1.parent = this;
	this.text_1.setTransform(37.8,224.1,0.518,0.518);

	this.instance = new lib.verdecirculoadentross("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(177.1,71.1,1,1,0,0,0,71.1,71.1);

	this.text_2 = new cjs.Text("Brindar apoyo para identificar las soluciones de desarrollo con el fin de mejorar en el rol actual y ", "35px 'Arial'", "#333333");
	this.text_2.lineHeight = 41;
	this.text_2.lineWidth = 573;
	this.text_2.parent = this;
	this.text_2.setTransform(37.8,160.9,0.518,0.518);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BED19D").s().p("A51YOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMA0tAAAIAASvIC4GeIi4GeIAAQwg");
	this.shape.setTransform(190.4,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_2},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.8,352.3);


(lib.pregunta1tema3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Cuando ya se terminó la discusión sobre los colaboradores evaluados, el siguiente paso es:", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 574;
	this.text.parent = this;
	this.text.setTransform(124.8,25.1);

	this.instance = new lib.iconoactividadesyretos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.7,44.7,0.803,0.803,0,0,0,55.7,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(154,201,172,0.498)").s().p("EA2hAF2InUAAIhrAAMghFAAAMg5TAAAIi9AAIpYAAIgoAAIg8AAIgBAAIhaAAQgggBgagGQhGgUgQhIQgGgYAAgcIAAj4IAAjGQAAh0BcgaQAZgIAhABIBaAAIABAAIA8AAIAoAAIJYAAIC9AAMA5TAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAcAGBcIABASIAABSIAADOIAABVIAAA3IAAADIAAAPQAACXiWAAg");
	this.shape.setTransform(416.5,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,816.6,89.5);


(lib.nohaysucesor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("No es factible que pueda desarrollar las competencias requeridas del puesto destino.", "8px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 53;
	this.text.parent = this;
	this.text.setTransform(70.7,56.2,2.067,2.067);

	this.text_1 = new cjs.Text("No hay sucesor", "bold 8px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 63;
	this.text_1.parent = this;
	this.text_1.setTransform(11.3,12.5,2.067,2.067);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF1D25").s().p("ArEDUIAAiwQAAj3D5AAIOYAAQD3AAABD3IAACwg");
	this.shape.setTransform(71,21.2);

	this.instance = new lib.cajaatraslistoahora("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73,114.5,2.067,2.067,0,0,0,35.3,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.6,201.5);


(lib.M03_TMR_MODERADOR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAZQgKgKAAgPQAAgNAKgLQAKgKANAAQAOAAAKAKQALAKgBAOQABAPgLAKQgKAJgOABQgNgBgKgJg");
	this.shape.setTransform(359.6,199);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAZQgLgKABgPQgBgOALgKQAKgKANAAQAPAAAJAKQAKALAAANQAAAPgKAKQgJAJgPABQgNgBgKgJg");
	this.shape_1.setTransform(371.9,199);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAZQgLgKAAgPQAAgNALgLQAKgKANAAQAOAAALAKQAKALgBANQABAPgKAKQgLAJgOABQgNgBgKgJg");
	this.shape_2.setTransform(384.2,199);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AjvC6IBohFQA/AiBOAAQBjAABGgyQBFgzAAhGQAAhIhFgyQhGgzhjAAQhhAAhGAzQhGAyAABIQAAAuAhAog");
	this.shape_3.setTransform(371.3,201.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B1C0C9").s().p("AjIBGQgigoAAgvQABhHBGgyQBGgzBhAAQBiAABGAzQBGAyAABHQAABHhGAyQhGAzhiAAQhPAAg+giIhoBFg");
	this.shape_4.setTransform(371.5,200.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAZQgJgLgBgOQABgNAJgLQALgKANABQAOgBALAKQAKALgBANQABAOgKALQgLAJgOABQgNgBgLgJg");
	this.shape_5.setTransform(123.1,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANABQAOgBALAKQAJALABANQgBAOgJALQgLAJgOABQgNgBgLgJg");
	this.shape_6.setTransform(135.4,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAZQgKgLAAgOQAAgNAKgLQAKgKANABQAOgBAKAKQAKALAAANQAAAOgKALQgKAJgOABQgNgBgKgJg");
	this.shape_7.setTransform(147.7,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AjvC6IBohFQA/AiBOAAQBiAABGgyQBGgzAAhGQAAhIhGgyQhGgzhiAAQhiAAhGAzQhFAyAABIQAAAuAhAog");
	this.shape_8.setTransform(134.8,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B1C0C9").s().p("AjIBGQgigoABgvQAAhHBFgyQBGgzBhAAQBjAABGAzQBGAyAABHQAABHhGAzQhGAyhjAAQhNAAg/giIhoBFg");
	this.shape_9.setTransform(135.1,25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAZQgLgKABgPQgBgNALgLQAKgJANgBQAPABAJAJQAKAKAAAOQAAAPgKAKQgJAKgPAAQgNAAgKgKg");
	this.shape_10.setTransform(301.3,51.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgKQALgJANgBQAPABAKAJQAKALAAANQAAAPgKAKQgKAKgPAAQgNAAgLgKg");
	this.shape_11.setTransform(313.6,51.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAZQgKgKAAgPQAAgNAKgLQAKgJANgBQAOABAKAJQAKALAAANQAAAPgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_12.setTransform(325.9,51.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0EBB9").s().p("AjJBGQgggogBguQAAhIBGgzQBGgyBiAAQBiAABHAyQBFAzAABIQAABGhFAyQhHAzhiAAQhPAAg+giIhoBFg");
	this.shape_13.setTransform(313.2,52.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgNAKgKQALgKANAAQAPAAAKAKQAJAKABANQgBAOgJAKQgKAKgPAAQgNAAgLgKg");
	this.shape_14.setTransform(257,333.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAYQgLgKABgOQgBgNALgKQAKgKANAAQAPAAAJAKQAKAJAAAOQAAAOgKAKQgJAKgPAAQgNAAgKgKg");
	this.shape_15.setTransform(269.3,333.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgOAKgJQALgKANAAQAOAAALAKQAJAKABANQgBAOgJAKQgLAKgOAAQgNAAgLgKg");
	this.shape_16.setTransform(281.7,333.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0EBB9").s().p("AikCMQhFgzAAhIQAAguAggoIgoh4IBoBFQA+giBOAAQBjAABGAyQBGAzAABGQAABIhGAzQhGAyhjAAQhhAAhGgyg");
	this.shape_17.setTransform(269,331.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B1C0C9").p("AgiAAQAAAOAKALQAKAKAOAAQAOAAALgKQAKgLAAgOQAAgOgKgKQgLgKgOAAQgNAAgLAKQgKALAAANg");
	this.shape_18.setTransform(88.6,313.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_19.setTransform(88.6,313.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B1C0C9").p("AghAAQAAAOAKALQAKAKANAAQAOAAAKgKQAKgLAAgOQAAgNgKgLQgKgKgOAAQgNAAgKAKQgKALAAANg");
	this.shape_20.setTransform(100.9,313.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAZQgKgLAAgOQAAgNAKgLQAKgKANAAQAOAAAKAKQAKALAAANQAAAOgKALQgKAKgOAAQgNAAgKgKg");
	this.shape_21.setTransform(100.9,313.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#B1C0C9").p("AghAAQAAAOAKALQAKAKANAAQAOAAAKgKQAKgLAAgOQAAgNgKgLQgKgKgOAAQgNAAgKAKQgKALAAANg");
	this.shape_22.setTransform(113.2,313.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAZQgJgLgBgOQABgNAJgLQALgKANAAQAOAAALAKQAKALgBANQABAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_23.setTransform(113.2,313.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").p("Ajvi6IBoBFQBAgiBNAAQBjAABGAzQBFAyAABHQAABHhFAzQhGAzhjAAQhhAAhGgzQhGgzAAhHQAAguAhgpg");
	this.shape_24.setTransform(100.3,311);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B1C0C9").s().p("AijCMQhGgzgBhIQAAgtAigpIgph4IBoBFQBAgiBNAAQBiAABGAyQBGAzAABGQAABIhGAzQhGAyhiAAQhhAAhGgyg");
	this.shape_25.setTransform(100.5,311.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAZQgJgKgBgPQABgNAJgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAPgKAKQgKAKgPAAQgOAAgKgKg");
	this.shape_26.setTransform(36.2,164.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAALAKQAJALABANQgBAPgJAKQgLAKgOAAQgNAAgLgKg");
	this.shape_27.setTransform(23.8,164.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAZQgJgKgBgPQABgNAJgLQALgKANAAQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_28.setTransform(11.5,164.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0EBB9").s().p("AisCMQhFgzAAhHQAAhHBFgzQBGgyBjAAQBNAABAAiIBohFIgoB4QAgApAAAuQAABHhFAzQhGAyhiAAQhjAAhGgyg");
	this.shape_29.setTransform(24.2,163);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3989C").s().p("Ag9C+IAomFIBTAJIgnGGg");
	this.shape_30.setTransform(188.1,258.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E3989C").s().p("Aieg1IAvhHIEOCyIgvBHg");
	this.shape_31.setTransform(257.1,222.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C0DADE").s().p("AgjAeIgHgzIBLgIIAJA7g");
	this.shape_32.setTransform(305.4,278.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C0DADE").s().p("AgsBJQAAgRgDgeIgCgaIAChHIAsAIQAtAMAHAXQAGAVgRBQg");
	this.shape_33.setTransform(319.9,274.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C0DADE").s().p("AgpBBIgEgWQgGgdAbgpQAOgVANgPIAaAcQAXAdgGAJQgLAQACAug");
	this.shape_34.setTransform(281.8,274.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DDEAEC").s().p("AgqAKIBFgoIAQAeIgtAfg");
	this.shape_35.setTransform(304.8,268.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DDEAEC").s().p("AgPAXQgbgQgBgLIAPgfIBIAyIghAVIgagNg");
	this.shape_36.setTransform(296.1,267.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3F3231").s().p("AB5BpIAAgzQAAgOgNggQgPgkgPgEQgMgEgZANQgdAPgKAAIgDAAQgKAAgdgPQgZgNgMAEQgPAEgPAkQgNAgAAAOIAAAzQgCADgEgIQgCgEgFgDQgHhPAUgwQAehLBaAEIAAAAQBagEAfBLQAUAvgHBQQgFADgCAEQgDAGgCAAIgBgBg");
	this.shape_37.setTransform(299.6,236.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#805F50").s().p("AgWCuQgQgGgUgOQgngcgWgmIgCgEIAAgZIgBAAQgIAAgDgGQgCgFgEgSIgEgeQgCgLAAgIQAAgJACgBQADgBAGAEQACADABACIACAAIgCgOQgCgPAAgPQAAg2AbgNIABAAIAdgWQAkgWAiAAIADAAIAAAAIACAAIABAAIABAAIAAAAQAjgBAlAWQASALAMAMIABAAQAbANAAA2QAAAXgEAVIgBAEIADgDIAGgGQAFgDADABQAFADgEAXIgFAgQgEAUgCADIAAAAQgEAGgGAAIgBAAIgDAeQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgmA1gzAbIgCABIgTADIgHAAQgMAAgKgDg");
	this.shape_38.setTransform(299.7,246.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#947668").s().p("AgLA4QhYgCAYgYQAVgVAFgcIABgZIAugJQAtgHABAQQACAcAkBFQgoADgkAAIgRAAg");
	this.shape_39.setTransform(300.3,262.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AEC7C9").s().p("AitBKQgGh9gDgBIBbgMIB2gHQB6gFAUAIQAOAHAACHg");
	this.shape_40.setTransform(300.1,273.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#E9C3C5").ss(2.8).p("AGTAAQAACnh2B2Qh2B2inAAQimAAh2h2Qh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmg");
	this.shape_41.setTransform(301.8,257.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7DA98").s().p("AkcEdQh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACnh2B2Qh2B2inAAQimAAh2h2g");
	this.shape_42.setTransform(301.8,257.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C9C9C9").s().p("AgrBVIAHgmIASiDIAiAuQAhAygGAeIgHArg");
	this.shape_43.setTransform(237.4,66.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C9C9C9").s().p("AghBOQgDgVgFgRQgOgtAkgoQASgUAUgMIAIAmQAIApADAaIAHAyg");
	this.shape_44.setTransform(202.6,67.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BBCACB").s().p("AgPAWQgagPgCgLIAPgdIBIAtIgjAWQgLgFgNgHg");
	this.shape_45.setTransform(215.5,57.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BBCACB").s().p("AgoAJIBDgmIAOAdQgBAMgWAKIgUAIg");
	this.shape_46.setTransform(223.7,58.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9D9393").s().p("AAfAdQgGgBgFgGQgGgHAAgKIAAgCQgHgHgGABIgBAAQgIgBgFAHIAAACQAAAKgGAHQgGAGgGABIg3AAIgCgBQgIgEgFgIQgDgHAAgFIAAgEIgQACIgCgOIAUgEQAEgJAMgDIA0AAQAPAAAFAOQAHgFAHACQAHgCAIAFQAEgOAQAAIA0AAQAMADAEAJIAUAEIgDAOIgPgCIAAAEQAAAQgQAIIgCABgAAcgJIAAAOQAAAHAGACIAxAAQAHgEAAgFIAAgOQAAgCgGgCIgxAAQgFAAgCAEgAhZgJIAAAOIABADQACAEAEACIAxAAQAFgBAAgIIAAgOQgBgEgFAAIgyAAQgFADAAABg");
	this.shape_47.setTransform(219,35.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#71706F").s().p("AB2BIIgIg1QgBgJgHgKQgNgRgZAAQgMABgNAGQgtAUghgXIAAgBQgRgGgRABQgfADgFAhIgHA2QAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgOhrAhgDQAAAAABgBQABAAAAgBQAAAAABgBQAAAAAAgBIAHgIQALgIAYgCQATgBARgGQAQgGAKAAQBMgBAXAgIACACQAIAEAGAMQAKATgCAiIgDAsQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_48.setTransform(218.8,25.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EDAB86").s().p("AAmACIhxACQAVgEARgBIAlgCQAWAAAQACQAVABARAEIgmgCg");
	this.shape_49.setTransform(219.3,27.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EDAB86").s().p("AAmABIhxACQAZgDANgBIAlgBIAmABQAWABAQADIgmgCg");
	this.shape_50.setTransform(219.1,28.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9BD9C").s().p("AgUCiQgPgFgSgNQglgagVgkIgBgEIgBgXIgBAAQgDAAgEgCIgCgDQgCgDgEgTIgEgcIgDgSQAAgIADgBQADgBAFAEQACABABADIACAAQgEgTAAgWQAAgyAagNIAAAAIAbgUQAigVAgAAIADAAIADAAQAhgBAjAVQARAKALALQAaANAAAyQAAAWgEATIgBAEIADgDQAJgJAEACQAFACgDAWIgFAdQgEAVgCABIAAABQgEAFgGAAIgBAAIgCAcIgCAEQglAzguAYIgCABQgOADgLAAQgLAAgJgEg");
	this.shape_51.setTransform(219.1,36.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EDAB86").s().p("AgKA+QhagEAXgWQATgTAKgjIAFghIArgJQAqgGABAPQACAbAmBVQgeACgcAAIgjgBg");
	this.shape_52.setTransform(219.5,52.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D6D8D8").s().p("AjIBdIgChcQAFgiAWgTQAXgSAmgJQAUgFAOgBQA9gGA/gBQBHAAASAHQAbAKAWA4QAUA0AAAtIAAAPg");
	this.shape_53.setTransform(220.6,65.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1C140B").s().p("AgDAAQABgKACAAQADAAAAAKQAAALgDAAQgCAAgBgLg");
	this.shape_54.setTransform(192.4,320.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#927954").s().p("AgEAPQgCgGAAgJQAAgIACgGQACgHACAAQADAAACAHQACAGAAAIQAAAIgCAHQgCAGgDAAQgCAAgCgGg");
	this.shape_55.setTransform(192.3,320.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E6E4EA").s().p("AgCAAQAAgKACAAQADAAAAAKQAAALgDAAQgCAAAAgLg");
	this.shape_56.setTransform(169.9,320.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#927954").s().p("AgEAPQgCgHAAgIQAAgIACgGQACgHACAAQADAAACAHQACAGAAAIQAAAJgCAGQgCAGgDAAQgCAAgCgGg");
	this.shape_57.setTransform(169.9,320.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1C140B").s().p("Ai5CKQgNgNAAgTQAAgRAMgNQgUgMAAgWQAAgSAPgNQgEgGgBgIQABgKAFgHQAGgIAIgCQgBgGgBgHQAAgTAOgOQANgNATAAIADAAQAEgMAKgHQALgHANAAQAJAAAKAFQAEgPAMgKQAMgKAQAAQALAAAMAGQALgLAPAAQAVAAAMARIAEgBQAJAAAHAGQAGAHABAIQAIgCAIAAQAUAAAQAPQAOAPAAAVIAAAAIAHAAQARAAAMAMQAMALAAARQAAAMgGAKQAMAMAAATQAAAVgPANQAVAOAAAZQgBATgNANQgNAOgTAAQgOAAgMgIQgLgIgGgNQgKgCgHgJQgHgJAAgLIAAgEIgMABQgWAAgPgPQgPgQAAgVIAAgFQgHAEgHAAQgMAAgJgIQgJgHgEgMIgBAAQgLAAgIgFQgIgHgDgKIgCgBIAAAEQAAATgRALQAGAKAAAMQAAAPgJAMQgKALgPAEQACAEAAAEQAAARgOAHQgCARgOALQgMALgRAAQgTAAgNgNg");
	this.shape_58.setTransform(180.5,304);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A25F37").s().p("AgGgQQAGgKAFABQADAAACADQADAVgMAQQgFAIgGAEg");
	this.shape_59.setTransform(192.6,317.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A25F37").s().p("AAAAPQgMgQADgVIAFgDQAFgBAGAKIAEArQgHgEgEgIg");
	this.shape_60.setTransform(169.2,317.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A25F37").s().p("AglCZQgsgcgYgzQgGgEgGgIQgMgRADgVIAFgDQAGgBAGAKQgIgYgEgdQgIg7AYgeQAJgNAQgOQAigbApgEIALAAQAqAEAhAbQAQAOAJANQAYAegIA7QgEAdgIAYQAGgKAGABQADAAACADQADAVgMARQgGAIgGAEQgYAzgrAcQgWAOgRAEQgQgEgVgOg");
	this.shape_61.setTransform(180.9,312.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1C140B").s().p("AgSBAIgHABQgJAAgHgHQgGgHAAgJIAAgFIgHABQgQAAgLgMQgMgLAAgPQAAgLAHgKQAGgJAKgEQgJgIAAgNQAAgLAIgHQAHgIALAAQAQAAAHAMQAIgEAKAAQATAAAOAOQAOAOAAAUQAAAOgHALQARAEAJAQQAFgCAGAAQAMAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgMAAQgKAAgJgHQgMAMgSAAQgWAAgMgSg");
	this.shape_62.setTransform(171.1,321.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1C140B").s().p("AhGA3QgJgJAAgNQAAgMAJgKQAJgJANAAQAAgMAJgJQAIgJANgBQACgNALgJQAJgKAOABQAMAAAIAFQAIgIAKAAQAKAAAHAHQAHAIAAAJQAAAKgHAHQgHAHgKAAIgBAAQgCAKgHAIQgIAIgLADIAAACQAAAQgLALQgLALgPAAQgGAAgIgDQgJANgPAAQgNAAgJgJg");
	this.shape_63.setTransform(191.3,323.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D9D9E").s().p("AgUA5IgagkQgEgMADgOQAFggAigSIASAkQAXArAQAhg");
	this.shape_64.setTransform(192.9,342.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D9D9E").s().p("AghA6QADg7AIgiIAJgWIAvAmIgMBNg");
	this.shape_65.setTransform(170.6,342.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgcgPIAbgKIAeAbIgXAYg");
	this.shape_66.setTransform(177.8,335.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgcADIAfgdIAaAKIgkArg");
	this.shape_67.setTransform(183.5,335.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CCCBCB").s().p("AAHASIgigkIAUgHIAjAZIgSAag");
	this.shape_68.setTransform(177.9,335.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CCCBCB").s().p("AgaAAIAlgYIAQAHIgiAhIgDAJg");
	this.shape_69.setTransform(183.3,335.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#9F5733").s().p("AgzAIIAWgJQAEgFABgCQACgGAAgPIgBgPIAugBIgBASQgBATACADIAdAMIgmAkIgRgQIgVATg");
	this.shape_70.setTransform(181,333.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgXgDIgcgnIAXgLIAbgJIA1ATIgmAkIgRBGg");
	this.shape_71.setTransform(181,338.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#626568").s().p("AgHBRIgqhIIATgKIgfgGIgZgrIBWgdIBXAfIgoAvIgaAAIAQAMIgiBGg");
	this.shape_72.setTransform(181.1,340);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#606060").s().p("AgHBPIgshFIAVgKIgigFIgagpIAPgGIAhgMIAsgOIAiAMIAFACIAyAXIgnApIgcAAIARAMIglBDg");
	this.shape_73.setTransform(181,340.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9D9D9E").s().p("AhUBRIgFgOQgDgKACgMIAFgXQACgJgFgKIgLgRIgHgKQgGgLgBABQAOgGAcgKIAigMIAtgRIAmARIAiAPIAiAQIgHAJQgFAFgDAKQgDAHABAEIADAIQAMAfgLAaIgHAMg");
	this.shape_74.setTransform(180.6,340);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4D4D4D").s().p("AgeAAIAMgVIAxAcIgcAPQgfgIgCgOg");
	this.shape_75.setTransform(61,234.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4D4D4D").s().p("AgfALIA0gkIALAWQgCAOglAPg");
	this.shape_76.setTransform(67.2,234.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#744C28").s().p("ABaAeQgDgRgfAAQgoADgSgBQgXAAgVgRIgQgRQgKAkgFAEQgEACgEAYIgEAXIgLgPQgKgPABgDQAGgVgDgPQgCgJAAgLQABgPAFgEIAAgBQgBgDAegNQAjgPAfgCQAigDApAYQAoAXABATQABATgDAXQgDAZgFABQgEAAgFAIIgDAHQAHgQgEgcg");
	this.shape_77.setTransform(64.5,210.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CCCCCC").s().p("AAeBuQgPgmgBgHQgBgPgEA8Ih2AAIABiEIABg8QAHgKANgIQAZgPAcAKIAeADQAfAGAPAKQAPAKA1C6g");
	this.shape_78.setTransform(73.7,244.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CCCCCC").s().p("AgJBuQgEg8gBAPQgBALgOAiIhUAAQARhHAWg8QAVg6ALgHQAPgKAfgGIAdgDQAcgKAaAPQANAIAHAKIADA8QACBHABA9g");
	this.shape_79.setTransform(54.2,244.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F9BD9C").s().p("AgSB5IgBAAQgkgTgaglIgBgDIgCgVIgBAAQgDAAgCgCIgCgCIAAAAQgCgBgCgPIgEgVIAAgBQgCgPADgDIAAAAQADgBAHAGIACADIgBgEQgDgOAAgQQAAgmATgJIABAAQAIgIANgIQAagPAYABIACAAIADgBQAYABAYAPQANAHAIAIQATAJAAAmQAAAQgDAOIACABIACgEQAEgDACABQACACAAAFIgFAiIgEAQQgEAEgDAAIgBAAIgBASIgBADQgPAagbATQgOAKgLAEQgIADgIAAQgIAAgKgDg");
	this.shape_80.setTransform(64.5,218.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDAB86").s().p("Ag9AtQAdg/ABgUQABgLAfAFQAQACAQAEIAEAYQAHAbAPAOQARARhDACg");
	this.shape_81.setTransform(64.1,230.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#E9C3C5").ss(2.8).p("AGTAAQAACnh2B2Qh2B2inAAQimAAh2h2Qh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmg");
	this.shape_82.setTransform(218.6,49.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#7995A3").s().p("AkcEdQh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACnh2B2Qh2B2inAAQimAAh2h2g");
	this.shape_83.setTransform(218.6,49.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#E9C3C5").ss(2.8).p("AGTAAQAACnh2B2Qh2B2inAAQimAAh2h2Qh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmg");
	this.shape_84.setTransform(180.5,318.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6E4EA").s().p("AkcEdQh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACnh2B2Qh2B2inAAQimAAh2h2g");
	this.shape_85.setTransform(180.5,318.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#E9C3C5").ss(2.8).p("AGTAAQAACnh2B2Qh2B2inAAQimAAh2h2Qh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmg");
	this.shape_86.setTransform(64.5,231.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ABC9CE").s().p("AkcEdQh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACnh2B2Qh2B2inAAQimAAh2h2g");
	this.shape_87.setTransform(64.5,231.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7F795E").s().p("AgeAHIAygdIALAWQgCAOgfAIg");
	this.shape_88.setTransform(324.8,138.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7F795E").s().p("AgfgCIALgXIA0AjIgYAQQglgPgCgNg");
	this.shape_89.setTransform(318.4,137.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DAA675").s().p("ABcAeQgDgSgfAAQgpAEgSgBQgYgBgWgQIgQgSQgKAkgFAFQgEACgFAYIgEAXIgKgPQgKgPABgDQAGgWgEgPQgCgJABgMQAAgOAGgFIAAAAQgCgEAfgMQAkgPAfgDQAjgDAqAYQAoAYABATQABATgDAYQgDAZgFABQgEABgFAIIgEAHQAIgQgEgdg");
	this.shape_90.setTransform(321.2,113.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C4B98C").s().p("AhkBIQAjhxAMgIQAZgQA0gDQAdgKAaAQQANAIAHAKIACB0g");
	this.shape_91.setTransform(312.9,144.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C4B98C").s().p("AhnBIIAEh0IAVgSQAagQAcAKIAdAEQAhAFAPAKQAIAGAOAiQAPAhAOAwg");
	this.shape_92.setTransform(330.7,144.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F9BD9C").s().p("AgPB7QgLgEgOgKQgcgUgQgbIgBgDIAAgRIgBAAQgDAAgCgCIgCgCQgCgCgDgPIgDgVIgCgNQAAgGACgCQACAAAEADIACADIACAAQgDgPAAgQQAAgmAUgKIAVgPQAZgQAYAAIAFAAQAYgBAbAQQANAIAJAIQAUAKAAAmQAAAQgEAPIAAADIACgCQAHgHADABQAEADgDAQIgBABIgDAVQgDAQgBAAIAAABQgDAEgFAAIAAAAIgCAVIgCADQgaAmglATIgBAAQgKADgJAAQgIAAgHgDg");
	this.shape_93.setTransform(321.2,121.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EDAB86").s().p("AgIAvQhEgCARgRQAPgPAHgbIAEgYIAhgHQAggFAAAMQABAUAeBAIgwACIgXgBg");
	this.shape_94.setTransform(321.6,134.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#E9C3C5").ss(2.8).p("AGTAAQAACnh2B2Qh2B2inAAQimAAh2h2Qh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmg");
	this.shape_95.setTransform(321.8,131);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5A7D69").s().p("AkcEdQh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACnh2B2Qh2B2inAAQimAAh2h2g");
	this.shape_96.setTransform(321.8,131);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F3231").s().p("AiiB4IgMgDQgCABgEgLQgHgUgIg4QgHgtAmgeQgCgWAIgTQAMgdAfgOIgJANQgJAPgDAMQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQASgVAigQQA2gaBNgBQgcAEgVALQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQBegKA0AiQgJgBgMAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAZAKARARQAcAbAAAlQgKgMgHgHQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAABAAQAKAdgIAdQgBgIgJgJQgCAugNA7QgNgBgJAPIgGAPQABgVgBgZQgDgygNgUQgig0hdACQgeABggAFIgaAGQgRAogWAZQgCAIgCAuIgCAsQgCgYgMgIg");
	this.shape_97.setTransform(197.1,163);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3F3231").s().p("AArAbQgIgBgGgEQgJgHAAgKIAAgCQgHgHgJABIgCAAQgHgBgIAHIAAACQAAAKgIAHQgGAEgIABIhFAAIgCAAQgLgEgFgIQgEgGAAgFIAAgFIgUADIgDgOIAZgDQAFgJAPgDIBBAAQASAAAHANQAKgEAHABQAJgBAKAEQAHgNASAAIBAAAQAQADAFAJIASACIgBAJIgPADIAAAFQAAAOgUAJIgCAAgAAegNIAAAUIACAGQACAEAGAEIBKAAQAJgBAAgMIAAgUQgDgHgHAAIhKAAQgJADAAADgAh0gNIAAAUIACAGQACAEAGAEIBKAAQAJgBAAgMIAAgUQgCgHgIAAIhKAAQgJADAAADg");
	this.shape_98.setTransform(195.7,174.7);

	this.instance = new lib.Group_18();
	this.instance.parent = this;
	this.instance.setTransform(221.3,209.4,1,1,0,0,0,1.9,4.8);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.6,211.3,1,1,0,0,0,1.2,2.8);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(218.4,208.8,1,1,0,0,0,2.6,5.4);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(175.8,208.8,1,1,0,0,0,2.5,5.4);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.6,210.4,1,1,0,0,0,1.4,3.8);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(172.5,209.1,1,1,0,0,0,1.8,5);
	this.instance_5.alpha = 0.391;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A9B3BC").s().p("AgyAMIBTgwIASAkQgBAOgbANIgaAKg");
	this.shape_99.setTransform(201.8,201.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A9B3BC").s().p("AgSAbQgggSgCgOIATglIBWA8IgoAZQgOgGgRgKg");
	this.shape_100.setTransform(191.4,201.1);

	this.instance_6 = new lib.Group_6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(199.1,208.3,1,1,0,0,0,0.6,5.9);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(202.9,208,1,1,0,0,0,0.6,6.1);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(206,207.8,1,1,0,0,0,0.6,6.2);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(215.3,208.1,1,1,0,0,0,0.7,6);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(212.6,207.6,1,1,0,0,0,0.6,6.4);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(208.9,207.4,1,1,0,0,0,0.7,6.6);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(194.9,208.3,1,1,0,0,0,0.6,5.9);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_13_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(191.2,208,1,1,0,0,0,0.6,6.1);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(188,207.8,1,1,0,0,0,0.6,6.2);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(178.9,208.1,1,1,0,0,0,0.7,6);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(181.5,207.6,1,1,0,0,0,0.6,6.4);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(185.3,207.4,1,1,0,0,0,0.7,6.6);
	this.instance_17.alpha = 0.391;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#BBCACB").s().p("AiYBRQAmhyAPgKQAagQA1gJQAagFAWgBQAvgQAqAaQAWANAMAQIACB0g");
	this.shape_101.setTransform(183.6,208);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCD0D0").s().p("AidBRIAFh0IAigdQAqgaAwAQIAvAGQA1AJAaAQQAJAHARAhQAQAhARAzg");
	this.shape_102.setTransform(210.6,208);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E8AF93").s().p("AAVAAIgJgCIgKgBIgSADIgUAFQAIgFAKgDQAJgDALgBIALAAIAKAEQALADADAIQgGgGgKgCg");
	this.shape_103.setTransform(188.6,173.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E1BB93").s().p("AgaDKQgSgHgXgQQgugggagtQgBgCAAgDIgBgcIgBAAQgJgBgDgGQgCgDgFgZIgGgiQgCgMAAgKQAAgLADgBQAEgCAGAGQADADAAACIADAAQgFgYAAgcQAAg9AggQIAigaQAqgaAoAAIAEAAIAAABIAEAAIAAgBQApgBArAaQAWANANAOIABAAQAgAQAAA9QAAAcgFAYIgBAFIADgEQALgLAFACIABAAQAGADgFAbIgGAlQgFAagCABIAAABQgEAGgIABIgBAAIgEAiQAAADgBACQgsA+g8AfIgCABQgQAFgPAAQgNAAgNgFg");
	this.shape_104.setTransform(196.1,174.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D6AE89").s().p("AgNBNQhwgEAcgcQAZgYALgsIAHgpIA2gLQA1gHABASQABAhAwBqQgnADglAAIgogBg");
	this.shape_105.setTransform(196.6,195.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#E9C3C5").ss(5.7).p("AIsAAQAADnijCiQijCjjmAAQjlAAijijQijiiAAjnQAAjlCjijQCiijDmAAQDmAACjCjQCjCjAADlg");
	this.shape_106.setTransform(197,183.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F0F4E7").s().p("AmIGJQijiiAAjnQAAjlCjijQCjijDlAAQDmAACjCjQCjCjAADlQAADnijCiQijCjjmAAQjlAAijijg");
	this.shape_107.setTransform(197,183.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3F3F3F").s().p("AggA/IgJh6QAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAZABARAIQAVAKAFATQAHAaAFA9g");
	this.shape_108.setTransform(95.9,115);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3F3F3F").s().p("AgqA/QAGg4AIgfQAFgTAVgKQAQgIAagBQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgQB6g");
	this.shape_109.setTransform(70,115);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2F2F2F").s().p("AgnBLIAviVIAQANQAFACAFAYIAHAdIgcgDIAUAiQABABghAxg");
	this.shape_110.setTransform(87.5,113.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2F2F2F").s().p("AAABIQghgxABgBIATgiIgbADIAHgbQAEgWAGgDIARgKIAvCPg");
	this.shape_111.setTransform(78,114.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#ACADAD").s().p("AAmAuIgMgUIgaggIgUAZIgEAHIgNAUQgBAMgDgMIgWhFIABgCIAZgWIAFAJQATAbANAAQASAAAMgRIALgXIAXAaIAAACIgWBFQgCAGgBAAQgBAAAAgGg");
	this.shape_112.setTransform(82.7,111);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B3B3B3").s().p("AgvBKIAliTQAAADAaAPQAKAFASADQgDAbACAhIAFA9g");
	this.shape_113.setTransform(88.2,113.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B3B3B3").s().p("AgrBGIACg+QgBghgDgaIAOgDQAJgBAGgDQARgJAAgCQAGAXAPAoQAPAnAFAXIAEAOg");
	this.shape_114.setTransform(77.5,114.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E5E6E6").s().p("AgQA3IgdhEQgCgDADgDQAVgcAXgHQAZAHAVAcQACACgCAEIgdBEg");
	this.shape_115.setTransform(82.7,115.8);

	this.instance_18 = new lib.ClipGroup_26();
	this.instance_18.parent = this;
	this.instance_18.setTransform(82.9,91,1,1,0,0,0,11.4,15.7);

	this.instance_19 = new lib.ClipGroup_1_4();
	this.instance_19.parent = this;
	this.instance_19.setTransform(82.8,73.1,1,1,0,0,0,7.3,4.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#ECAA86").s().p("AgEgNQAEgJAFABQAAAAABABQAAAAABAAQAAAAABABQAAAAABABQACARgKANIgJAKg");
	this.shape_116.setTransform(92.4,94.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#ECAA86").s().p("AAAAMQgKgNACgRIAFgDQAEgBAFAJIADAjQgFgDgEgHg");
	this.shape_117.setTransform(73.3,94.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F9BD9C").s().p("AgeB9QgkgWgUgqQgFgDgFgHQgJgOACgSIAEgCQAFAAAFAIQgHgUgDgXQgGgxATgYIAVgXQAbgWAigDIAJAAQAiADAbAWQAOAMAHALQATAYgGAxQgDAXgHAUQAFgIAFAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAAAQACASgJAOIgKAKQgUAqgkAWIgfAQQgNgEgRgMg");
	this.shape_118.setTransform(82.8,90.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#ECAA86").s().p("Ah2BdQgQAAgMgOQgLgOAAgUQAAgUALgPQAMgNAQAAIA0gIQAMgDALgLQALgKAAgIIAAgxQANAHAVAAQAVAAAPgHIgBAxQAAAIAJAKQAJAKAMAEIA0AIQAQAAAMANQALAPAAAUQAAAUgLAOQgMAOgQAAg");
	this.shape_119.setTransform(82.8,109.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#E9C3C5").ss(2.8).p("AGTAAQAACnh2B2Qh2B2inAAQimAAh2h2Qh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmg");
	this.shape_120.setTransform(83.5,95.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7DA489").s().p("AkcEdQh2h2AAinQAAimB2h2QB2h2CmAAQCnAAB2B2QB2B2AACmQAACnh2B2Qh2B2inAAQimAAh2h2g");
	this.shape_121.setTransform(83.5,95.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E3989C").s().p("AhJC/IBAmKIBTANIhAGKg");
	this.shape_122.setTransform(212,109.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E3989C").s().p("AjWhsIAzhEIF7EdIg0BEg");
	this.shape_123.setTransform(135.4,133.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E3989C").s().p("AjJAZIF3iBIAcBQIl4CBg");
	this.shape_124.setTransform(265,150.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E3989C").s().p("AjsAbIHBiGIAYBRInBCGg");
	this.shape_125.setTransform(122.6,210.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E6E6E6").s().p("AnYaeQiRiRABjNQgBhfAkhYIl4kvQhEA8hTAgQhWAihdAAQjNAAiSiRQiQiRgBjNQAAjKCNiQQCNiPDJgFIA2mGQgvgQgogWQhzhAhFhyQhHh1AAiKQAAjNCRiRQCSiRDMAAQBuAABiAuQBfArBFBPIHliYQACjMCQiRQCQiQDNAAQDNAACRCRQCRCRAADNQAAB3g3BqIEWDOQBCg0BOgcQBRgeBXAAQDNAACRCRQCQCSABDNQgBDJiMCQQiNCQjKAFIg1EpQCYAvBhCBQBiCEAACkQAADNiRCRQiRCRjNAAQhoAAhfgpQhbgphFhIIl4CrQAJAvAAAwQgBDNiQCRQiSCRjLAAQjNAAiSiRg");
	this.shape_126.setTransform(193.2,183.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.instance_19},{t:this.instance_18},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_100},{t:this.shape_99},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_MODERADOR, new cjs.Rectangle(0,0,396.7,367.9), null);


(lib.M03_TMR_DESICION = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#121C1F").s().p("AhYBkQglglAIgvQAHgqAqgqQAqgpAqgIQAvgIAlAmQAKAKAJANQgigUgoALQglALgjAjQgkAjgKAlQgMAoAVAiQgNgIgLgLg");
	this.shape.setTransform(33.6,27.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#182529").s().p("Ag4FJIABABQgagSgYgZQhOhNgnhQQgkhLgBhGQAAgzATguQgjABgigOQgjgOgYgXQglglAIgwQAIgqApgqQAqgqArgHQAvgIAlAlQAVAVANAeQANAdADAgQBZg1BvAbQB4AdBxBxQBiBigDB0QgDBuhZBZQhNBNhgANQgQACgRAAQhSAAhLg1g");
	this.shape_1.setTransform(61.8,54.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#923B24").s().p("Ag7AwQg0gHgigPIEShNIAOAdQAKAfgXALQhDAghKAAQgYAAgYgEg");
	this.shape_2.setTransform(73,86.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#923B24").s().p("AgVCPQgQgFgNgKIBMkRIAIAYQAKAdAEAhQAOBlgqBYQgIAQgRAAQgHAAgJgDg");
	this.shape_3.setTransform(91,68.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D79182").s().p("ABvMyQnsiohCgaQg8gXgigcQgmgdgUgsQhkjSgshzQg8ifgMh1QgOiGArhxQAth5ByhxIAsgtQByhyB5gtQBxgqCFAOQB1ALCfA9QB0ArDSBkQAsAUAdAmQAbAjAYA8QAUAzCuH6QACAIgDAHQgEAGgIACIixAxQgHACgGgDQgHgEgCgHQgzitigl3QgDgHgJgDQhOgWh9g5Qh2g3gKgCQgIgCAeBOQAYBkgxBdQgOAchAAsQhNA0gMAMQgIAIg2BPQguBCgcAOQhdAxhkgXQgZgGghgNQgUgIABAEQACAKA3B3QA6B8AWBOQACAJAIADQBuAvB6AxQDSBUBpAfQAHADAEAGQAEAHgCAHIgxCxQgCAHgHAEQgEACgEAAIgGgBg");
	this.shape_4.setTransform(101.9,101.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBXIArjFIA8AHIg6DWg");
	this.shape_5.setTransform(118.1,173.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhsABIDCg3IAXA4IjQA1g");
	this.shape_6.setTransform(173.8,116.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9BD9C").s().p("AAeCuIgehXQgUg7gGACQgIADAjB8QAIAbgPAGQgKAEgIgIQgGgGgGgQIgdhbQgUg/gFgBQgFgBgHAUIgMAfQgNAXgMgBQgIAAgEgIQgDgIACgKQAEgPAFgmQAFggAFgOQAFgtAHgeQAOg2AxgSQAggLAaAIQAaAIAaAdQAZAcAfBPQAWA2AUBBQAEAQAAAHQgBAKgIADQgIADgIgGQgHgFgEgLIgUg4QgOglgFACQgGACAQAzQALAnAOAkQAFALgCAJQgCALgJADQgJADgHgHQgHgFgEgKQguiAgJAEQgFABAWBEIAbBPQAEANgCAJQgCAKgJADIgGABQgNAAgKgYg");
	this.shape_7.setTransform(179.3,134.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AhBB+QgrgRgVgJQgkgSgSgSQgfghgGgfQgHgfAQgjQAag4A9gHQBCACAUgDQAYgCATADQAWAFAHAKQAEAHgDAPQgDAOACABQAbANAsARQAsARAiAKQATAGALAJQANAJgFALQgEAKgJACQgKADgSgFQghgIg8gRQgsgMgBAFQgBABAEAKQADAJgEAJQgEAKgJAGIgKAFIABAMQABAKgEAKQgDAHgJAFIgJAHIABAHQABAHgDAKQgFALgSADIgHAAQgPAAgRgGg");
	this.shape_8.setTransform(137.5,177.7);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(63.8,59.7,1,1,0,0,0,34,33.9);
	this.instance.alpha = 0.102;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#411918").s().p("AgvFEQh0gyhBh8IgFgKIgEgLQgEgLgDgNIgBgBQgNgygMh0QgLAAgSAKQAIg0AOgpQAIgbATgZQAPgTAMgJQgaAJgVAWQAGgUAPgXQAdgvAugUQAdgNAjgCQAdgBAcAHQgPgKgagDQgggFgXAKQAOgRAkgHQAzgKBEAVQBoAgA+BOQAWAdArBXIADAGQATAlAMAqQAcBfgWBYQgXBZhAAzQgQAMgTALQgzAag3AAQg1AAg5gZg");
	this.shape_9.setTransform(328.1,328.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECAE7E").s().p("AhJB2QgNgGgKgKQgUgUgIgeQgLgjATgWQAggqA2gjQA7goAnABQAQAAARAQQALAKAJANQAQAVgQAIQgoASg/A+Qg8A9gKAcQgDAGgGAAQgFAAgHgEg");
	this.shape_10.setTransform(240.7,337.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECAE7E").s().p("AhSB9QglgcgDgQQgHgmAshDQAog8AqgiQAXgSAjAKQAdAIAUAUQALALAGAMQAIARgLAEQgcAKg/A9QhABBgSAnQgEAKgIAAQgHAAgIgGg");
	this.shape_11.setTransform(338.3,241.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3B783").s().p("AgtKBQhrgCiNgfQg3gMi/g0IgkgJQgkgKgMgMQgPgNAFgZICFiLQAGgBALAAQAVAAAUAKQApAUBhAXIBuAYQAGABAHghQALg3AKgiQAxiaB9h/QCSiQCPgfQAogIApAAQAcABgBgDIhJkJQgGgRAGgUIAHgQIB+iOQAlgSAWAvQAKAUAPBEIA3D2QAbCMgCBoQgEEQjNDNQjADAkOAAIgJAAg");
	this.shape_12.setTransform(297.7,297.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9BD9C").s().p("AhmhSIgOgQQgmgwgpitQgDgPABgHQACgJAIgDQAHgCAHAGQAHAFACAKIAQA3QALAlAFgCQAGgBgMgyQgJgogLghQgDgLACgJQADgKAIgCQAJgCAHAGQAGAGADAKQAKAmAMAjQARAyAGgCQAEgBgRhBIgUhNQgDgMACgJQADgKAIgCQARgGAJAdIAYBVQAQA5AFgCQAIgCgah3QgFgbAPgEQARgFAJAfQAGATAPBGQAPA9AFABQAEABAIgTIAOgcQAOgVALABQAIACADAHQADAIgEAJQgEAOgIAjQgGAfgGAOQgCAFgHAjQgGAggKASICdGZIihCDg");
	this.shape_13.setTransform(228.2,301.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9BD9C").s().p("Ak3CJQgHgBgEgHQgFgKARgTQAEgEAUgRQAQgNgCgDQgCgEg/ABIhbABQgQAAgHgEQgJgEAAgKQAAgQAbgCQB6gGAAgIQAAgFg7gBIhYgBQgegBABgRQAAgJAIgFQAIgEANAAQCTAAAAgGQAAgGg1gDQghgDgrAAQgZAAAAgTQgBgIAKgFQAIgFALABQAjABAogBQA0gBgBgHQABgFgngBIg4gBQgLAAgHgFQgIgFABgIQAAgIAIgEQAHgDAPgBQBCgCA3ADQBQAEAhAOQARAGAMAJII6A8IA4AkIiMCLInxhSQgMAHgYALQgUAKgHAFQgKAJgdAOQggAQgMAIQgHAFgHAAIgDAAg");
	this.shape_14.setTransform(297.4,234.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#972528").s().p("Ah6gQQAagdAVgWQAcgcAfgbICLDHIgWAVIgDADIgVAWg");
	this.shape_15.setTransform(318.3,314.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#474543").s().p("AhhiPQAbgEAgAJQBBASAeBBQAXAxALBQQAGApABAeg");
	this.shape_16.setTransform(341.1,306.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#474543").s().p("ABLBbQhQgLgygXQhBgegShBQgGgUAAgWIABgRIEgDDg");
	this.shape_17.setTransform(309.2,339.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AkWBcQA2hyBphpQBqhpBigxIDCEcIkXEXg");
	this.shape_18.setTransform(322.7,320.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1F1814").s().p("AhvFXQgwgdgxhEQgSgYgNgcQgHgRAAACQgBAdAnBJIAnBDIgrgfQgygvghhMQgmhXAShqQATh4BZhkIADgDIATgUQBkhkB/gOQCAgOBQBRQAyAyAPBGQAPBFgTBMIgOAsQgaBEgzA9IgSAVIgQAPIgSAQQgIAIgHAEQg9AthDAJQgqAFgZgIQgKgEgBAEQgBADARAPQATARAdAGIAbADIgeASQgjANgigRQgZgNgUgaIgVgeQgPgOA9BtIAHALg");
	this.shape_19.setTransform(341.2,60.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F1E2A8").s().p("AkMI0QBtgeDyhiIDdhcQAWhPA6iAQA5h7ACgJQABgEgdgDQgugFgkgKQiOgnh/h/Qh3h4gihwQgJgcgEgiQgDgUgEABQgJACh8A3QiBA6hQAVIAJDTQAKDvAICQIjeAgIgUlHQgVlLAEgeQAHg5AkgnQAcggA1gYQGEi5DRgPQD+gSDDDDQDQDQgKDtQgFBxgzCTQgrB9hcDDQgVAsglAeQgiAag9AYIonDhg");
	this.shape_20.setTransform(304.6,106.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag5heIA4gOIA8DCIg+AWg");
	this.shape_21.setTransform(281.5,173.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FED393").s().p("AhbCaQgKgBgDgIQgDgIAGgIQAGgHAKgEIA4gUQAlgOgCgFQgCgGgyAQQgrANggANQgLAEgKgCQgLgCgCgJQgDgJAGgHQAFgHAKgEQCAgugDgJQgCgFhDAWIhQAbQgMAEgKgCQgKgCgDgIQgHgSAegMIBXgeQA7gUgCgGQgDgIh8AjQgbAIgGgPQgDgKAHgIQAHgGAPgGIBcgdQA+gUABgFQABgEgUgIIgfgMQgXgNABgMQABgIAIgEQAHgDALACQAPAEAlAFQAgAFAOAFQAuAFAdAHQA2AOASAxQALAggIAaQgIAagcAaQgdAZhOAfQg2AWhCAUQgOAEgHAAIgCAAg");
	this.shape_22.setTransform(265.9,178.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhrgJIDHgiIAQA7IjVAcg");
	this.shape_23.setTransform(251.3,131.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FED393").s().p("AgZDLQgJAAgEgJQgFgJABgOIAFhTQAEhHgFAAQgGgBgHA3QgFAmgDAqQgBALgFAHQgGAIgJgBQgJAAgFgKQgEgIABgMQAEgnABgoQACg3gGAAQgGgBgEApIgEA7QgBALgGAIQgGAHgIgBQgJgBgDgJQgDgHABgQQAChFAHg5QAKhUARgiQARgjAYgOQAYgPAhADQAzAFAbAwQAWA3AKAOQAIANANAfQAPAjAHAMQAGAJgCAIQgBAJgIADQgLAEgTgTIgUgaQgMgRgEACQgFACgDBBIgFBfQgCAjgTgCQgRgCABgcIAAhMQgCg1gFAAQgFgBgFA/IgGBcQgFAdgQAAIgCAAg");
	this.shape_24.setTransform(253.6,146.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CC8D61").s().p("AloGMQgmgfgbgrQApAJAngFQBPgMgFhJQgCgtAUgiQgHgKABgNQAAgMAKgJIAJgKQgTgvAAgyQAAgwAQgyQAGgTAHgQQAphlBjhiIAOgOIABAAIAOgNQBkhUBvAFQBpAFBTBSQBVBWACBuQADB0hfBmIgOAOQhmBmhkApQgRAHgSAGQgoAMgqADQhJACg8giIgDAEQgKAJgMABQgNAAgKgHIAAAAQgIATACAXQABANAEAaQAFAvgsAoQgdAbghAAQgkAAgpghg");
	this.shape_25.setTransform(47.9,347);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkKgxIFqjbQAKANAdAqQAWAhANAMQAKALAgAYIA3AsIjYFmg");
	this.shape_26.setTransform(71.5,323.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3F3F3F").s().p("AjQMJQiTg2iFiFQhyhygth4QgrhxAOiGQAMh1A8ifQAsh0BjjSQAVgsAmgdQAigbA8gYQA1gUH4itQAIgDAHAEQAHADACAIIAwCxQACAHgDAHQgEAGgHACQiWAsmOCnQgIAEgCAIQgWBOg5B9Qg3B3gCAJQgBAFAUgIQAhgNAYgGQBlgXBcAwQAcAPAnA3QAwBEAJAJIBRBCQA9AxARAhQAnBNgTBuQgKA5gVBJQgCANEWheQAGgCAEgFQAEgFgBgGIgdndQAAgHAFgGQAFgFAHgBIC4gTQAHgBAGAFQAGAFAAAHIAsJbQACAfgSAYQgSAZgeAIIjZA/QjrBBhWAOQguAHgsAAQhkAAhggjg");
	this.shape_27.setTransform(87.7,296.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E1BB93").s().p("AAbDJQgzgDgdgvQgQgagSgqQgJgMgOgeQgQgjgIgMQgFgJABgIQABgJAIgDQALgFATATIAVAZQANARAEgCQAEgCABhBIAChgQABgiATABQARAAABAdQACCAAIABQgDhvAEgoQACggASACQATABgBAeQAAAVAEA9QAEBFAFAAQAAhkACgiQABgLAEgHQAGgIAJABQAJAAAGALQAGAKAAAMIAABNQAAAzAGABQADAAABgmIACg6QABgLAFgHQAFgIAIABQAJAAAEAJQADAIAAAQIADB8QgBBTgPAhQgQAjgXAQQgVANgcAAIgIAAg");
	this.shape_28.setTransform(136.8,278.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E1BB93").s().p("AA3CZQgQgEglgFQgggGgOgEQgQgFg6gHQg3gOgRgxQgMggAIgaQAIgbAdgZQAcgZBPgfQA2gWBBgUQAPgEAIAAQAKABADAIQADAIgGAIQgFAHgLAEIg4AUQglAOACAGQACAFAzgQQApgMAigNQALgFAJACQALACADAJQADAIgGAIQgGAHgKAEQh/AuADAJQACAICSg0QANgEAJACQAKACADAJQAHARgdALQgTAIhEAXQg7AUACAGQACAHB8giQAbgIAGAPQAEAKgIAIQgGAGgQAGIhbAdQg/AUgBAFQgBAEAUAIIAfAMQAYANgCAMQAAAIgIAEQgFACgFAAIgIgBg");
	this.shape_29.setTransform(132,220.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3989C").s().p("AlGBTID0mZICdBeIgIAOQgFAIgIADQgeALgNAcQgLAYAGAbQAGAbAWAQQAcAVAigHQAigGARgeQAOgXgEgbQgCgJAFgHIAIgOICfBeIhmCrIgOgJQgIgFgDgIQgLgdgcgNQgZgMgaAHQgbAGgQAWQgVAbAHAiQAGAiAeARQAXAOAbgEQAIgBAIAFIAOAIIhWCRg");
	this.shape_30.setTransform(153.9,217.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D48A7D").s().p("AlGhKICRhWIgIgPQgEgHgJgEQgZgIgOgYQgSgeAKggQALghAfgPQAZgLAaAHQAbAHAQAWQASAZgEAfQgCAIAFAJIAJAOICqhmIBeCeIgOAJQgHAEgJgBQgfgFgZATQgWAQgHAbQgHAaALAZQAOAgAhAJQAhAKAdgRQAYgNAJgaQADgIAIgFIAOgIIBeCdImZD0g");
	this.shape_31.setTransform(219.9,258.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C2F0F3").s().p("AioCPIgQAGQgIAEgEAIQgNAXgZALQgfANgfgOQgggPgKghQgHgaAKgaQALgZAYgMQAbgPAeAIQAJADAIgEIAPgGIhIipICrhJIAHAQQADAHgCAKQgIAbALAYQANAfAhAMQAgAKAegRQAXgNAKgZQALgagJgaQgKgegbgOQgHgEgDgIIgGgQICnhHIC6G3Im3C6g");
	this.shape_32.setTransform(252.6,175.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0EBB9").s().p("AjZFFQgWgQgHgbQgHgaALgZQANgdAdgLQAIgEAEgHIAIgOIighbIDsmeIGeDsIhaCeIAOAIQAIAEAJgBQAegFAaASQAWAPAIAbQAIAbgLAYQgOAgghALQggALgegRQgYgOgJgZQgEgJgHgDIgPgJIhcCiIifhcIgIAPQgFAHACAJQAEAbgNAYQgRAegiAHQgJACgIAAQgYAAgUgPg");
	this.shape_33.setTransform(191.3,140.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C3CDD1").s().p("AoGT+QkChpjGjGQjGjHhpkBQhlj5AAkOQAAkNBlj5QBpkBDGjHQDGjGEChoQD5hmENAAQEOAAD5BmQEBBoDHDGQDGDHBpEBQBlD5AAENQAAEOhlD5QhpEBjGDHQjHDGkBBpQj5BkkOAAQkNAAj5hkg");
	this.shape_34.setTransform(200.3,199.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#103F58").s().p("AjzDBIG/m0IAoAoIm0G/g");
	this.shape_35.setTransform(87,309.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4C8DA9").s().p("AnthzIH7l5IHgHfIl6H6g");
	this.shape_36.setTransform(84,312.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#25676D").s().p("AjzjKIAogpIG/G0IgzAzg");
	this.shape_37.setTransform(296.7,297.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2E7F86").s().p("AnsgOIHfneIH6F5IpgJhg");
	this.shape_38.setTransform(299.7,300.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1F1D1B").s().p("AjzDMIG0m/IAzA0Im/Gzg");
	this.shape_39.setTransform(310.5,88.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#605D5A").s().p("AnsAOIF5n6IJgJgIn6F5g");
	this.shape_40.setTransform(313.5,85.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#453019").s().p("AjzjAIAzgzIG0G/IgoAog");
	this.shape_41.setTransform(88.2,87.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A89787").s().p("AnsB0IJgpgIF5H6InfHfg");
	this.shape_42.setTransform(85.2,84.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#182735").s().p("AAAHmQhsgOhlgwQhmgwhHhHQiHiHAfiqQAdiXCZiZQCZiaCXgcQCqgfCHCHQBHBHAwBmQAwBlAOBsQAiD2iJCJQhuBui1AAQgsAAgwgHg");
	this.shape_43.setTransform(302.8,307.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#19354E").s().p("AmEHJQgugJgYgkQAbASAkABQAlABAigTQDoiCC7i8QC8i7CCjoQATgigBglQgBgkgTgbQAlAYAJAuQAJAwgZAsQiCDoi8C7Qi7C8joCCQggASgjAAQgMAAgNgCg");
	this.shape_44.setTransform(336.6,341);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#182735").s().p("AmCHQQgzgNgUgsQgTgsAQguQARguArgYQDLhyCmikQCkilByjMQAYgrAugRQAugRAsAUQAsAUANAyQAOAzgcAxQiCDoi8C7Qi7C8jnCCQgiATgiAAQgQAAgQgFg");
	this.shape_45.setTransform(335.7,340.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#182735").s().p("AAAHnQiXgciZiaQiaiZgciYQgfipCHiHQBHhHBmgwQBlgwBsgOQD2giCJCJQCICJghD1QgPBtgvBlQgwBmhHBHQhuBuiEAAQgfAAgggGg");
	this.shape_46.setTransform(306.3,90.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#19354E").s().p("AGvGMQABgmgTgiQiCjni8i7Qi7i8joiCQgigTglABQgkABgbASQAYgkAugJQAwgJAsAZQDoCCC7C8QC8C6CCDoQAZAtgJAwQgJAuglAYQATgcABgjg");
	this.shape_47.setTransform(347,50);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#182735").s().p("AE9HNQgugRgYgrQhyjMikilQimikjLhyQgrgYgRguQgQguATgsQAUgsAzgNQAzgNAxAbQDnCCC7C8QC8C6CCDoQAcAygOAzQgNAygsAUQgYAKgYAAQgVAAgVgHg");
	this.shape_48.setTransform(346,50.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#182735").s().p("AkwF/QhHhHgwhmQgwhlgOhtQgij1CJiJQCJiJD1AiQBtAOBlAwQBmAwBHBHQCHCHgfCpQgdCYiZCZQiZCaiYAcQgfAGgfAAQiFAAhthug");
	this.shape_49.setTransform(89.2,86.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#19354E").s().p("AnIGFQgJgwAZgsQCCjoC8i7QC6i8DoiCQAtgZAvAJQAvAJAYAkQgcgSgjgBQgmgBgiATQjnCCi7C8Qi8C6iCDoQgTAiABAmQABAjASAcQgkgYgJgug");
	this.shape_50.setTransform(48.3,45.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#182735").s().p("AmWHKQgsgUgNgyQgOgzAcgxQCCjoC8i7QC6i8DoiCQAygbAzANQAyANAUAsQAUAsgRAuQgRAugrAYQjLByimCkQikCmhyDLQgYArguARQgVAHgVAAQgYAAgYgKg");
	this.shape_51.setTransform(49.2,46.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#182735").s().p("Al+F/QiJiJAij2QAOhsAwhlQAwhmBHhHQCHiHCpAfQCYAcCZCaQCaCZAcCXQAfCqiHCHQhHBHhmAwQhlAwhtAOQgvAHgsAAQi1AAhuhug");
	this.shape_52.setTransform(86.6,310.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#19354E").s().p("AEpG5QjoiCi7i8Qi8i7iCjnQgZgtAJgvQAJgvAkgYQgSAcgBAkQgBAlATAiQCCDoC8C6QC7C8DoCCQAiATAlgBQAjAAAcgTQgYAkguAJQgNACgMAAQgjAAgggSg");
	this.shape_53.setTransform(45.9,351);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#182735").s().p("AEgHCQjoiCi7i8Qi8i7iCjnQgbgyANgyQANgzAsgUQAsgTAuAQQAuARAYArQByDLCkCmQCmCkDLByQArAYARAuQARAugUAsQgUAsgyANQgRAEgQAAQgiAAghgSg");
	this.shape_54.setTransform(46.8,350.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_DESICION, new cjs.Rectangle(0,0,392.9,397), null);


(lib.M03_TMR_DESEM2crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA6B6F").s().p("AhMClIhziIQgEgGAAgEQAAgEAFgEIAhgbQAFgDAEAAQAEAAAFAFIBPBcIDHjyQAGgHAFgBQAFAAAIAGIAbAYQALAJgJALIisDSIgpAyIgVAZQgIAKgKAAQgJAAgHgIg");
	this.shape.setTransform(92.6,87.8,1.12,1.12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DA6B6F").s().p("AhTCqIhchuIgXgbQgMgQAPgMQANgMAUgQQAHgFAIABQAHABAGAGIBJBVIDBjrQAQgSATAPIAcAYQAQAPgNAQIjqEeQgKALgNABIgBAAQgOAAgJgKg");
	this.shape_1.setTransform(92.6,87.8,1.12,1.12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2.8).p("AAzCrIhlAAQgyAAgjgjQgjgjAAgyIAAhmQAAgxAjgjQAjgkAyAAIBlAAQAyAAAjAkQAjAjAAAxIAABmQAAAygjAjQgjAjgyAAg");
	this.shape_2.setTransform(88.9,264.9,1.12,1.12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2.8).p("AAzCrIhlAAQgyAAgjgjQgjgjAAgyIAAhmQAAgxAjgjQAjgkAyAAIBlAAQAyAAAjAkQAjAjAAAxIAABmQAAAygjAjQgjAjgyAAg");
	this.shape_3.setTransform(88.9,182,1.12,1.12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2.8).p("AAzCsIhlAAQgyAAgjgjQgjgkAAgxIAAhmQAAgyAjgjQAjgjAyAAIBlAAQAyAAAjAjQAjAjAAAyIAABmQAAAxgjAkQgjAjgyAAg");
	this.shape_4.setTransform(88.9,96.9,1.12,1.12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F3F3F").s().p("AhkC/Igbl1QAAgDADgDQACgCADAAQBOABA1AaQBAAeAQA6QAKAkAKBKQAKBKAGBSg");
	this.shape_5.setTransform(349.6,345.9,1.12,1.12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3F3F3F").s().p("AiCC/QAOilAchlQAQg6BAgeQA1gaBOgBQADAAADACQACADAAADIgzF1g");
	this.shape_6.setTransform(260.8,345.9,1.12,1.12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2F2F2F").s().p("Ah7DlIAyiiIBiknIAvAmQAOAIASBHIAUBZIhTgJIA8BsQACADgdAtIhFBog");
	this.shape_7.setTransform(320.6,341.7,1.12,1.12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F2F2F").s().p("AgCDcIhGhpQgegsABgDIA9hsIhTAJIAThUQAQhAAPgJIA2gfIBeEVIAxCig");
	this.shape_8.setTransform(288.1,342.7,1.12,1.12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ACADAD").s().p("ABzCOIglhAQgGgLgJgKIg/hOIg/BOIgPAVIgkBAQgEAkgKgmIhCjVIAAgEIBPhEIANAbQAbAlAcAXQAdAXASAAQAYAAASgIQAagMAWgfIAkhIIBEBRQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAIhCDVQgFATgDAAQgDAAgCgRg");
	this.shape_9.setTransform(304.3,332.4,1.12,1.12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3B3B3").s().p("AiRDgIALgrIAzjJIAyjMQAAAHBRAwQAUAJAaAFIApAJQgLBSAHBoIAPC4g");
	this.shape_10.setTransform(323.3,342.2,1.12,1.12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3B3B3").s().p("AiGDVQAFiRAAgrQABhogLhPQAOgDAcgFQAagFATgJIAfgPQAYgNAAgEQARBFAuB7QAvB6ARBEIAKArg");
	this.shape_11.setTransform(286.5,343.5,1.12,1.12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5E6E6").s().p("Ag0CoIhZjRQgEgLAHgKQBChWBIgTQBJATBCBWQAIAKgFALIhZDRg");
	this.shape_12.setTransform(304.3,348.6,1.12,1.12);

	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(304.9,263.8,1.12,1.12,0,0,0,35.1,48.2);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(304.4,202.2,1.12,1.12,0,0,0,22.4,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECAA86").s().p("AgQgqQAPgaAPACQAIABAEAHQAHA2gdAoIgeAfg");
	this.shape_13.setTransform(337.6,275,1.12,1.12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECAA86").s().p("AgDAkQgdgoAHg2IAMgIQAPgCAPAaIAKBtQgQgKgOgVg");
	this.shape_14.setTransform(272,275,1.12,1.12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9BD9C").s().p("AhfGAQhthGg8iAQgQgKgPgVQgegpAHg2IANgIQAPgCAQAaQgWg8gJhKQgUiWA9hJIAQgVQAVgZAagWQBThGBngKIAfAAQBnAKBUBGQApAjAVAhQA9BJgTCWQgKBKgWA8QAQgaAPACQAIABAFAHQAHA2geApIgfAfQg8CAhsBGQgiAXgjANIgcAKQgpgKg2gkg");
	this.shape_15.setTransform(304.8,261.5,1.12,1.12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECAA86").s().p("AlrEdQgyAAgigrQgkgsAAg9QAAg+AkgrQAigqAyAAICfgYQAlgMAiggQAgggAAgYIAAiWQAqAXBBAAQBBAAAvgXIgGCXQABAYAcAfQAdAfAjANICfAYQAyAAAiAqQAkArAAA+QAAA9gkAsQgiArgyAAg");
	this.shape_16.setTransform(304.8,328.4,1.12,1.12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2.8).p("APgAAQAADKhOC4QhLCyiKCJQiJCKiyBLQi4BOjKAAQjJAAi4hOQiyhLiJiKQiKiJhLiyQhOi4AAjKQAAjJBOi4QBLiyCKiJQCJiKCyhLQC4hODJAAQDKAAC4BOQCyBLCJCKQCKCJBLCyQBOC4AADJg");
	this.shape_17.setTransform(305.2,286.5,1.12,1.12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7DA489").s().p("AmBOSQiyhLiJiKQiKiJhLiyQhOi4AAjKQAAjJBOi4QBLiyCKiJQCJiKCyhLQC4hODJAAQDKAAC4BOQCyBLCJCKQCKCJBLCyQBOC4AADJQAADKhOC4QhLCyiKCJQiJCKiyBLQi4BOjKAAQjJAAi4hOg");
	this.shape_18.setTransform(305.2,286.5,1.12,1.12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(8.5).p("AqQAAIUhAA");
	this.shape_19.setTransform(201.9,265.2,1.12,1.12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(8.5).p("AqQAAIUhAA");
	this.shape_20.setTransform(201.9,180.3,1.12,1.12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(8.5).p("AqQAAIUhAA");
	this.shape_21.setTransform(201.9,95.5,1.12,1.12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C3D4CA").s().p("ApXWLQkUh1jVjVQjVjVh1kUQh5kfAAk5QAAk4B5kfQB1kUDVjVQDWjVETh1QEeh5E5AAQE5AAEeB5QEVB1DVDVQDVDVB1EUQB5EfAAE4QAAE5h5EfQh1EUjVDVQjVDVkVB1QkeB5k5AAQk5AAkeh5g");
	this.shape_22.setTransform(181.9,181.8,1.12,1.12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EFEFEF").s().p("ArMagQlJiMkAj/Qj+j+iMlLQiRlVAAl3QAAl1CRlWQCMlKD+j/QEAj/FJiMQFWiQF2AAQF3AAFVCQQFKCMD/D/QD/D/CMFKQCQFWAAF1QAAF3iQFVQiMFLj/D+Qj/D/lKCMQlVCQl3AAQl2AAlWiQg");
	this.shape_23.setTransform(182.6,183.6,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_DESEM2crollverde2, new cjs.Rectangle(-23.5,-22.4,441.1,421.4), null);


(lib.M03_TMR_aam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87AE65").s().p("AAFBaIAAiAQgTARgZAJIAAggQANgEARgNQAOgLAHgRIAcAAIAACzg");
	this.shape.setTransform(94.2,141.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9AF48").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_1.setTransform(95.9,141.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED264").s().p("AAdCoQgVgIgIAAQgGAAgVAIQgTAHgJgDQgJgDgLgRQgMgSgGgFQgGgEgVgGQgTgFgGgIQgGgIABgTQABgWgCgHQgCgHgOgSQgMgPAAgKQAAgJAMgPQAOgSACgGQACgHgBgXQgBgTAGgIQAGgIATgFQAVgGAGgEQAGgEAMgTQALgQAJgDQAJgDATAGQAVAIAGAAQAIAAAVgIQASgGAJADQAJADALAQQAMATAGAEQAGAEAWAGQASAFAGAIQAGAIgBATQgBAWACAIQACAGAOASQAMAPAAAJQAAAKgMAPQgOASgCAHQgCAHABAWQABATgGAIQgGAIgSAFQgWAGgGAEQgGAEgMATQgLARgJADIgGAAQgJAAgMgEg");
	this.shape_2.setTransform(95.9,141.6);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(85.7,161.8,1,1,0,0,0,12.5,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CC1A4").s().p("AgjBVIhZAJIBrj4ICOA9IhrD4g");
	this.shape_3.setTransform(85.7,161.8);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(106.7,161.8,1,1,0,0,0,12.5,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CC1A4").s().p("Ah8hdICOg9IBrD4IhZgJIg1BGg");
	this.shape_4.setTransform(106.6,161.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F795E").s().p("AhWAUICOhSIAfA+QgDAYguAWIgsARg");
	this.shape_5.setTransform(104.8,112.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7F795E").s().p("AgeAuQg3gfgDgZIAfg9ICSBlIhCArQgagLgbgQg");
	this.shape_6.setTransform(87.2,111.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAA675").s().p("AD+CxQAHgrgHgyQgHgxhYAAQhxAJg0gCQhDgCg7gwIgugwQgaBmgQALQgJAHgNBDIgMBBIgcgqQgdgrADgHQAEgMAEgZQAFgngGgaQgGgcABggQACgpAQgMQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgFgKBWgjQBigpBZgIQBggIB2BEQBwBBADA1QADA2gJBDQgKBFgNADQgMACgNAWIgKAVQAFgMAEgUg");
	this.shape_7.setTransform(95.1,43.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4B98C").s().p("AkWDJQBgk8AhgVQArgcBbgQQAsgIAlgCQBPgbBJAsQAkAWAUAbIACBeIADDng");
	this.shape_8.setTransform(72,129.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4B98C").s().p("AkgDJIAIjnIAEheIAPgQQAUgTAWgOQBJgsBPAbIBRAKQBaAQAsAcQAVAOAnBeQApBfAoCGg");
	this.shape_9.setTransform(121.4,129.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9BD9C").s().p("AgsFWQgfgNgngbQhNg2gshLQgDgEAAgEIgBgwIgDgBQgHAAgGgFIgGgGIAAgBIgBAAQgEgHgHgnIgJg6QgFgXAAgQQAAgQAGgEQAFgDALAKQAEADACAHIAFgCQgJgoAAguQAAhpA2gaIABgBIA6grQBGgrBDgBIAHABIAAAAIADAAIADAAIACAAIAAAAQBFgDBJAsQAkAWAYAXIAAABQA3AbAABoQAAAugJAoIgCAKIAHgHQARgUAKAEIAAABQAKAFgHAtIgKBAQgKAqgCAEIgBABQgHALgNAAIgCABIgGA6IgDAIQgYAjggAhQg5A5g/AhIgDABQgcAIgYAAQgYAAgUgIg");
	this.shape_10.setTransform(95.1,66.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDAB86").s().p("AgXCDQi9gHAvgvQAqgpAUhMIAMhEIBagTQBagNACAgQACAiApBoQAVA1AUAtQhCAEg+AAIhGgBg");
	this.shape_11.setTransform(95.9,101.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_12.setTransform(96.1,97.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1E2A8").s().p("AmKOoQi3hOiMiMQiMiMhOi3QhPi9AAjOQAAjNBPi9QBOi2CMiNQCMiMC3hOQC9hPDNAAQDOAAC9BPQC2BOCNCMQCMCNBNC2QBQC9AADNQAADOhQC9QhNC3iMCMQiNCMi2BOQi9BPjOAAQjNAAi9hPg");
	this.shape_13.setTransform(96.8,96.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_aam, new cjs.Rectangle(-4.7,-4.7,203.1,203.1), null);


(lib.M03_TMR_rosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000007").s().p("Ag1AJIgpgJIABgOIAgAIQAkAHAWABQAgABA/gOIADAMQgrAIgmAFIgOABQgVAAgggGg");
	this.shape.setTransform(117.7,119.6,0.955,0.955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#35343A").s().p("AAAAEIgCgCIABgHIABABIADAEQABAEgCACIgCgCg");
	this.shape_1.setTransform(121.7,89.4,0.955,0.955);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#35343A").s().p("AgFAFQgCgDACgCQADgDAIgCIABAHQgBgBgFADIgEACIgCgBg");
	this.shape_2.setTransform(119.3,89.5,0.955,0.955);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3C3C1").s().p("AgGAAQAAgGAGgBQAHABAAAGQAAAIgHAAQgGAAAAgIg");
	this.shape_3.setTransform(120.7,89.1,0.955,0.955);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#35343A").s().p("AgIAAQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgIAAAAgJg");
	this.shape_4.setTransform(120.7,89.1,0.955,0.955);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#947668").s().p("AAMA7QAKgygKgDQgFgBgEgEIgHgGQgXgMgEgFQgKgLAAgLQgBgKAFgBQADAAAbAJIAMAFQAKADACAAQACgBgJgKQgEgIAEgHQABgCADAFIAEAKQADAGAMALQAEAFAFAUQACAEgCBHg");
	this.shape_5.setTransform(117.7,87.6,0.955,0.955);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0DADE").s().p("AgdBtQgPgYgNhPIgLhJIAsgEIAUCAQALg5AGgfQABgHgBgVIgCgUIABgqIAZAGQAbAGAEAOQAFAQgXBYQgUBMgYAaQgHAIgHACIgGAAg");
	this.shape_6.setTransform(124.3,99,0.955,0.955);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0DADE").s().p("Ag0BoQgFgDgJg+IgNhTQgDgRAPgYQAIgMAIgJQAgAegHAJQgKANAJA0QAHApAFAMQABADAngJIAogJIAQAiQgbANgfAKQgnAOgVAAQgKAAgFgDg");
	this.shape_7.setTransform(112.2,98.6,0.955,0.955);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDEAEC").s().p("AgYAFIAogWIAJARQgCAMgYAGg");
	this.shape_8.setTransform(119.8,88.2,0.955,0.955);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DDEAEC").s().p("AgYgCIAJgSIAoAcIgTANQgdgMgBgLg");
	this.shape_9.setTransform(115,87.9,0.955,0.955);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3231").s().p("AhIA6QgBgDgDgBQgEguALgbQASgsAzADIAAAAQA0gDASAsQALAbgEAuQgDABgBADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAIgBAAIAAgeQAAgIgIgSQgIgVgJgCQgHgCgPAIQgQAIgGAAIgBAAQgGAAgRgIQgPgIgGACQgIACgJAVQgIASAAAIIAAAeIAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_10.setTransform(116.9,70.8,0.955,0.955);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#805F50").s().p("AgMBkQgJgEgMgIQgWgPgNgWIgBgDIAAgOIgBAAIgEgCIgCgBIAAgBIgDgNIgEgcQAAgFACgBQAAAAAAAAQABAAAAABQABAAABAAQAAABABAAIACADIABAAQgCgMAAgOQAAgeAQgIIAAAAIARgNQAVgMATAAIAEAAQAUgBAVANQALAGAHAHIAAAAQAQAIAAAeQAAAOgDAMIAAADIACgCQAFgGADABQADACgCANIgBABIgGAeIAAABQgCADgEAAIgBAAIgBARIgBADQgUAdggARIgBAAIgLACIgEAAQgHAAgFgCg");
	this.shape_11.setTransform(116.9,76.1,0.955,0.955);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#947668").s().p("AgGAgQgzgBAOgOQAMgMADgPIABgPIAagFQAagEAAAJQABARAVAnQgXABgUAAIgKAAg");
	this.shape_12.setTransform(117.3,85.2,0.955,0.955);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2F2F35").s().p("AA2ElIgagEIgEiXQgEiagBgOIgOiHQgXCmAAAGIgREbIhRAAIALluIAUjZQAWAPBTgFQApgCAmgFIALBIQAHBNABAjIgJGBQgGAEgNAHQgGAEgOAAIgQgBg");
	this.shape_13.setTransform(116.9,146.4,0.955,0.955);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00011E").s().p("AgkASQgDgIALgPIAKgNIADgPIABgBIAzAAIAAAcQABAQgCAEQgEAHgNAHIgKAHIgeABQgKgFgFgNg");
	this.shape_14.setTransform(108.6,177.2,0.955,0.955);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A0CBD0").s().p("AgSAOQgFgTABgPIApgBQAHAdgIAHQgGAGgNAAIgBABQgOAAgCgIg");
	this.shape_15.setTransform(113,99.6,0.955,0.955);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#35343A").s().p("AAAAFIgDgDIABgJIACACQACACABADQABAFgCADIgCgDg");
	this.shape_16.setTransform(98.8,120.7,0.955,0.955);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000007").s().p("AARAbIgsgOQgZABgEgCQgCgCAAgKIAAgMIAFgLIA6gDIAGAPIAjARQAOAGgBAJQgBAFgBABg");
	this.shape_17.setTransform(127.9,175.5,0.955,0.955);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AEC7C9").s().p("AgHCrQgdgDgdgIIgXgHIgHidQgHiZgDgBIB4gLQBHgDALAFQAMAFgECgQgDBOgEBPQgyAQgpAAIgOAAgAhpieIAAAAIAAAAg");
	this.shape_18.setTransform(117.1,103.7,0.955,0.955);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C5A9B5").s().p("AgTBsIAAgpIAoAAIAAApgAgTA1IAAgKQAAgSAGgLQAFgLASgPQASgPADgEQAGgIAAgIQAAgMgKgIQgKgJgQAAQgOAAgLAJQgLAKgDARIgmgEQACgbAUgSQAWgSAgAAQAiAAAWASQAVATAAAZQAAANgIAMQgHAMgaAUQgNALgDAHQgDAHAAAQg");
	this.shape_19.setTransform(149.4,59.8,0.955,0.955);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7DA98").s().p("Ai/CtQASglAGgcIAEgZQABgFgEgFQgggqACgxQAAg4AogrQAngqA9gQQApgKAlAEQBJAHAzAuQApAmAJAzQAJA3ggAwQggAwg4AWQgyAUg2gGIgqgGQgDgBgDABQgYAOgqAMIg3AOIgHABg");
	this.shape_20.setTransform(149.9,62.1,0.955,0.955);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F795E").s().p("AgMADIAUgMIAGAJQgBAGgNAEg");
	this.shape_21.setTransform(82.9,49.3,0.955,0.955);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7F795E").s().p("AgNgBIAFgJIAWAPIgKAGQgQgGgBgGg");
	this.shape_22.setTransform(80.3,49.2,0.955,0.955);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DAA675").s().p("AAoAOQgBgHgOAAQgSABgHAAQgLgBgJgHIgHgHQgEAPgCACQgCABgCALIgCAKIgEgHQgFgGABgCQACgJgBgHQgDgMAFgFQgBgBAOgGQAPgGAOgCQAOgBASALQASAKAAAIQABAIgCAKQgBALgCABQgCAAgCADIgBACQACgHgBgLg");
	this.shape_23.setTransform(81.5,39,0.955,0.955);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4B98C").s().p("AgrAfQAQgxAFgDQAKgHAWgBQANgEALAHQAGADADAEIABAyg");
	this.shape_24.setTransform(78,51.9,0.955,0.955);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4B98C").s().p("AgsAfIACgyIAJgHQALgHAMAEIAMABQAPADAGAEQAIAFAOAvg");
	this.shape_25.setTransform(85.4,51.9,0.955,0.955);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9BD9C").s().p("AgGA2QgTgIgLgTIAAgBIgBgIIgDgCIgEgVIABgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABABIABAAQgBgGAAgHQAAgRAIgEQAAgBAJgGQALgHALAAIABAAIAAABIAAAAIAAgBQARAAAPAOQAIAEAAARIgBANIAAACIABgCIAEgCQACAAgCAIIAAAAIgDAQIAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAJIgBACQgOARgNAHIgBABIgHABIgHgBg");
	this.shape_26.setTransform(81.5,42.5,0.955,0.955);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDAB86").s().p("AgDAVQgdgCAHgHQAKgKABgSIAOgDQAOgCAAAFQAAAJANAbIgVABIgJAAg");
	this.shape_27.setTransform(81.6,47.7,0.955,0.955);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3F3231").s().p("AgyAlIgDgBQgCABgEgbQgDgNAMgKQgCgRARgJIgDAFQgDAFAAADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQARgTAmgBQgIABgHAEIAAABIABABQAcgEAQALIgGAAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAQAHADAGAFQAIAIAAALIgFgGIgBABQADAJgCAIQAAgCgDgDQgBAOgEASQgEAAgCAEIgCAFQABgagGgJQgLgQgbABIgbADQgFAMgHAHIgCAfQgBgIgEgCg");
	this.shape_28.setTransform(26.6,83.7,0.955,0.955);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3F3231").s().p("AAOAJIgBgBQgHAAAAgGIAAgBQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAIAAABIAAAAIAAgBQgCABgCABIAAABQAAAGgHAAIAAABIgVAAIgBgBQgGgCAAgFIAAgBIgGABIgBgEIAIgBQACgEAEABIAUAAQAFAAADADQACgBACAAQADAAADABQABgDAHAAIATAAQAEgBADAEIAFAAIgBADIgEABIAAABQAAAFgGACIgBABgAAJgEIAAAGQAAADAEABIAWAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgHQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgWAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAgAgjgEIAAAGQAAADAEABIAWAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgHQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgWAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_29.setTransform(26.2,87.1,0.955,0.955);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(33.2,96.5,0.955,0.955,0,0,0,1.4,2.2);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.3,97.1,0.955,0.955,0,0,0,1.2,1.9);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.3,96.5,0.955,0.955,0,0,0,1.6,2.9);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.8,96.5,0.955,0.955,0,0,0,1.6,2.9);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.7,96.7,0.955,0.955,0,0,0,1.5,1.9);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(19.1,96.4,0.955,0.955,0,0,0,1.5,2.5);
	this.instance_5.alpha = 0.391;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A9B3BC").s().p("AgPAEIAZgPIAGALQgBAHgPAFg");
	this.shape_30.setTransform(28,95,0.955,0.955);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A9B3BC").s().p("AgPgBIAGgLIAZARIgMAIQgTgIAAgGg");
	this.shape_31.setTransform(25,94.8,0.955,0.955);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(26.6,96,0.955,0.955,0,0,0,0.8,2.4);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(27.9,95.9,0.955,0.955,0,0,0,1.3,2.6);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(28.8,96,0.955,0.955,0,0,0,1.3,2.7);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(31.5,96,0.955,0.955,0,0,0,1,2.6);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(30.7,96,0.955,0.955,0,0,0,1.1,2.8);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(29.8,95.9,0.955,0.955,0,0,0,1.3,3);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(25.5,96,0.955,0.955,0,0,0,1.1,2.4);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(24.6,95.9,0.955,0.955,0,0,0,1.3,2.6);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(23.7,96,0.955,0.955,0,0,0,1.3,2.7);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(21.1,96,0.955,0.955,0,0,0,1.3,2.6);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(21.7,96,0.955,0.955,0,0,0,1.4,2.8);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(22.8,95.9,0.955,0.955,0,0,0,1.4,3);
	this.instance_17.alpha = 0.391;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BBCACB").s().p("AguAZQAMgiAFgEQAMgIAagBQAOgFANAIQAHAEADAFIABAjg");
	this.shape_32.setTransform(22.6,96.9,0.955,0.955);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCD0D0").s().p("AgvAZIABgjIALgJQANgIAOAFIAOACQAQACAIAFQAGAEAMAig");
	this.shape_33.setTransform(30.5,96.9,0.955,0.955);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E8AF93").s().p("AAHAAIgDAAIgCAAIgBAAIgFAAIgGACQACgCADAAIAGgCIABABIACAAIADABQAEAAAAADQgBgCgDgBg");
	this.shape_34.setTransform(24.1,86.6,0.955,0.955);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E1BB93").s().p("AgHA+QgWgJgNgWIAAgBIgBgJIAAAAIgEgCIgDgTIgBgGQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADABIABACIABAAQgCgHAAgJQAAgTAKgEIAAAAQAAgCAKgGQANgIAMAAIACAAQAUgBARARQAKAEAAATQAAAJgCAHIAAACIABgCQADgDACABQACABgCAIIAAAAIgEATQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAIgBALIAAABQgOATgSAKIgBAAIgJABQgEAAgDgBg");
	this.shape_35.setTransform(26.3,87,0.955,0.955);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D6AE89").s().p("AgDAYQgjgCAJgIQAMgMABgVIAQgDQAQgCAAAFQABAKAPAgIgZABIgKAAg");
	this.shape_36.setTransform(26.4,93.1,0.955,0.955);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3F3F3F").s().p("AgOAdIgEg3QAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAaABAFARQAEAMABAbg");
	this.shape_37.setTransform(60,76.5,0.955,0.955);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3F3F3F").s().p("AgSAdQABgZAEgOQAFgRAbgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABIgIA3g");
	this.shape_38.setTransform(48.7,76.5,0.955,0.955);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2F2F2F").s().p("AgRAiIAUhDIAIAFQADADAFAWIgNgBIAJAQIgOAWg");
	this.shape_39.setTransform(56.3,75.9,0.955,0.955);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2F2F2F").s().p("AAAAhIgOgXIAJgPIgNABIADgNQACgJADgCIAIgEIAUBBg");
	this.shape_40.setTransform(52.2,76.1,0.955,0.955);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ACADAD").s().p("AgSAVIgKgfIAAgBIAMgKIACAEQAIAMAGABQAJgBAEgHIAGgLIAKAMIAAABIgKAfIgBACQAAABAAAAQAAAAAAgBQAAAAgBAAQAAgBAAgBIgFgJIgMgOIgJAKIgHANIgBADIgBgDg");
	this.shape_41.setTransform(54.3,74.8,0.955,0.955);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3B3B3").s().p("AgVAiIARhDIALAJIANADQgCAMACAPIACAcg");
	this.shape_42.setTransform(56.7,76,0.955,0.955);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3B3B3").s().p("AgTAgQABgkgCgTIANgDQAHgEAAgBQADALAHASIAJAbIACAHg");
	this.shape_43.setTransform(52,76.2,0.955,0.955);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E5E6E6").s().p("AgHAZIgNgeQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAKgNAKgDQALADAKANQAAAAAAAAQABABAAAAQAAABAAAAQAAAAgBABIgNAeg");
	this.shape_44.setTransform(54.3,76.8,0.955,0.955);

	this.instance_18 = new lib.ClipGroup_2_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(54.1,65.3,0.955,0.955,0,0,0,6.3,8.1);

	this.instance_19 = new lib.ClipGroup_1_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(54.1,57.1,0.955,0.955,0,0,0,4.4,2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ECAA86").s().p("AgCgFQADgHADAEQACAMgJAGg");
	this.shape_45.setTransform(58.5,67.4,0.955,0.955);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ECAA86").s().p("AgDgIIACgBQACAAACAEIABAPQgIgGABgMg");
	this.shape_46.setTransform(50.1,67.4,0.955,0.955);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9BD9C").s().p("AgNA5QgRgKgJgTQgJgGABgNIACgBQADAAACADQgDgJgCgKQgDgWAJgLIAKgKQAMgLAQgBIADAAQAQABAMALQAHAFADAFQAJALgDAWQgBAKgEAJQAEgGADAEQACANgKAGQgJATgQAKIgPAHQgFgBgIgGg");
	this.shape_47.setTransform(54.3,65.7,0.955,0.955);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECAA86").s().p("Ag2ArQgHAAgFgHQgGgGAAgJQAAgKAGgGQAFgGAHAAIAYgDQAGgCAEgFQAFgFABgDIAAgXQAGAEAJAAQAKAAAGgEIgBAXQAAAEAFAEQAEAFAGACIAXADQAIAAAGAGQAEAGAAAKQAAAJgEAGQgGAHgIAAg");
	this.shape_48.setTransform(54.3,74.2,0.955,0.955);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7DA98").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");
	this.shape_49.setTransform(81.8,46.1,0.955,0.955);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6DB5C5").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_50.setTransform(54.3,69,0.955,0.955);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8EA6D9").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_51.setTransform(26.5,89.6,0.955,0.955);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D0E1E5").s().p("AgnAoQgRgRAAgXQAAgXAQgRQARgQAXAAQAYAAARAQQAQARAAAXQAAAXgQARQgRAQgXABIgBAAQgWAAgRgRg");
	this.shape_52.setTransform(54.1,61.6,0.955,0.955);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D0E1E5").s().p("AgoAoQgRgRABgXQAAgWARgRQARgRAWAAQAYAAARARQARARAAAWQAAAYgRARQgRAQgYAAQgXAAgRgRg");
	this.shape_53.setTransform(81.6,39.9,0.955,0.955);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D0E1E5").s().p("AgoAoQgRgRABgXQAAgXARgRQAQgQAXAAQAYAAARARQARARgBAWQAAAYgRARQgRAQgXAAQgXAAgRgRg");
	this.shape_54.setTransform(26.6,82.3,0.955,0.955);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8EA6D9").s().p("AgFAeIABg5QAAgNAKgBIAABTQgLAAAAgMg");
	this.shape_55.setTransform(21.6,98.7,0.955,0.955);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8EA6D9").s().p("AgFAqIAAhUQAKABAAAKQABAggBAhQAAADgIAGg");
	this.shape_56.setTransform(31.7,98.8,0.955,0.955);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F7DA98").s().p("AgEAeIAAg5QAAgNAKgCIAABUQgLAAABgMg");
	this.shape_57.setTransform(76.5,56.2,0.955,0.955);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F7DA98").s().p("AgFApIAAhUQALADAAAJIgBBBQAAACgDACIgEAGg");
	this.shape_58.setTransform(86.6,56.3,0.955,0.955);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6DB5C5").s().p("AgFApIAAhTQAKABAAALQABAqgBAXQAAACgDACIgEAEg");
	this.shape_59.setTransform(59.2,78,0.955,0.955);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6DB5C5").s().p("AgFAeIAAg5QAAgNALgBIAABTQgLAAAAgMg");
	this.shape_60.setTransform(49.1,78,0.955,0.955);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6DB5C5").s().p("AgUB9QgCgEABgHIAShOQACgMgHgGIgEgFQgIgQgWAGQgZAHgPATQgOATAAAaIAAAvQgzgqgEhBQgDhAAtgwQAsgwBCAAQBCABAsAwQAtAwgEBAQgEBCgzAoIAAglQAAgQgBgJQgEgYgUgRQgUgSgYABQgFAAgCADIgPASQgDAFABAGIARBPQADALgIAHIgQARgAgohoQgQAQAAAYQAAAYARARQARAQAXAAQAXAAARgRQAQgRAAgXQAAgYgQgQQgRgRgYAAQgXAAgRARg");
	this.shape_61.setTransform(54.1,67.9,0.955,0.955);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F7DA98").s().p("AgTB+QgCgEABgGIARhTQABgFgEgHIgGgIQgIgKgFgCQgFgBgNAEQgWAGgPARQgRAVABAaIAAAvQgdgVgQgoQgRgsALgsQANgzAoggQAoghAzgBQAzgBArAfQAqAeANAxQAOAvgRAvQgPApgfAWIAAgvQACgcgUgVQgSgTgagFQgKgBgIAIQgRARAHAXQAFARAKA0QABAFgCADIgVAVIgTgUgAAAh5QgWAAgRARQgRARAAAXQgBAXARARQARARAXAAQAYAAARgQQARgRAAgYQAAgXgRgRQgRgRgXAAIgBAAg");
	this.shape_62.setTransform(81.6,46.1,0.955,0.955);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8EA6D9").s().p("AgTB9QgDgEACgFIARhSQACgJgFgFQgGgGgBgDQgHgNgUAFQgaAHgPATQgPATAAAbIAAAtQgYgJgRgsQgSgsAFgjQAHg3AoglQAmgkA0gEQA2gFAtAeQAsAeAQA0QAOAvgRAvQgPAqgfAWIAAgvQACgdgVgVQgUgUgdgDQgEgBgDADIgRAVQgCACABAGQAJAsAJAoQACAHgFAFIgTASIgTgVgAgnhoQgRAQAAAYQgBAXARARQARARAXABQAXAAARgRQARgRABgXQAAgXgRgRQgRgRgXgBQgXAAgRARg");
	this.shape_63.setTransform(26.6,88.5,0.955,0.955);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8EA6D9").s().p("AhtBRIAAigIDbAAIAACgg");
	this.shape_64.setTransform(26.4,114.4,0.955,0.955);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6DB5C5").s().p("AhtC+IAAl5IAAgCIDbAAIAAF7g");
	this.shape_65.setTransform(54.1,103.9,0.955,0.955);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7DA98").s().p("AhuEuIAApbIDcAAIAAJSIABAJg");
	this.shape_66.setTransform(81.6,93.2,0.955,0.955);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_67.setTransform(96.1,97.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF9999").s().p("AmKOoQi3hOiMiMQiMiMhOi3QhPi9AAjOQAAjNBPi9QBOi2CMiNQCMiMC3hOQC9hPDNAAQDOAAC9BPQC2BOCNCMQCMCNBNC2QBQC9AADNQAADOhQC9QhNC3iMCMQiNCMi2BOQi9BPjOAAQjNAAi9hPg");
	this.shape_68.setTransform(96.8,96.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_19},{t:this.instance_18},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_31},{t:this.shape_30},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_rosa, new cjs.Rectangle(-4.7,-4.7,203.1,203.1), null);


(lib.listoahora = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Ya listo para asumir la posición destino.", "8px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 9;
	this.text.lineWidth = 53;
	this.text.parent = this;
	this.text.setTransform(69.4,73.9,2.067,2.067);

	this.text_1 = new cjs.Text("Listo ahora", "bold 8px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 53;
	this.text_1.parent = this;
	this.text_1.setTransform(23,12.8,2.067,2.067);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39B54A").s().p("ArEDUIAAiwQAAj3D5AAIOYAAQD3AAAAD3IAACwg");
	this.shape.setTransform(70.9,21.2);

	this.instance = new lib.cajaatraslistoahora("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(69.4,114.5,2.067,2.067,0,0,0,33.4,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142,182.7);


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
	this.instance_2.setTransform(3632.1,91.6,34.294,2.053,0,0,0,106.8,44.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:14.35,x:2004.4},36,cjs.Ease.get(1)).to({_off:true},1).wait(1));

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


(lib.flechamueveroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flechainstruccionesroll24ene("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.6,22.4);

	this.instance_1 = new lib.circulo1instruccionesroll24ene("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,24.5,1,1,0,0,0,105.2,10.2);

	this.instance_2 = new lib.circulo2instruccionesroll24ene("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.3,23.5,1.651,1.651,0,0,0,14.1,14.2);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.circulo2instruccionesroll24ene("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,23.3,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.5,43.3,43.3);


(lib.flechamueveroll24e25emod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flechainstruccionesroll24en25enemod3mcx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.6,22.4);

	this.instance_1 = new lib.circulo1instruccionesroll225ene2019amod3mcx("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,24.5,1,1,0,0,0,105.2,10.2);

	this.instance_2 = new lib.circulo2instruccionesroll24e25ene2019amod3mcx("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.3,23.5,1.651,1.651,0,0,0,14.1,14.2);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.circulo2instruccionesroll24e25ene2019amod3mcx("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,23.3,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.5,43.3,43.3);


(lib.flechamueveroll24e25animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flechainstruccionesroll24en25enanimultax("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.6,22.4);

	this.instance_1 = new lib.circulo1instruccionesroll2animultax("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,24.5,1,1,0,0,0,105.2,10.2);

	this.instance_2 = new lib.circulo2instruccionesroll24animultaxmod3mcx("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.3,23.5,1.651,1.651,0,0,0,14.1,14.2);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.circulo2instruccionesroll24animultaxmod3mcx("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,23.3,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.5,43.3,43.3);


(lib.Group_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_0_2();
	this.instance.parent = this;
	this.instance.setTransform(1.2,40.5,1,1,0,0,0,1.2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_1_3();
	this.instance.parent = this;
	this.instance.setTransform(1.3,40.5,1,1,0,0,0,1.3,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2_2();
	this.instance.parent = this;
	this.instance.setTransform(1.3,39.3,1,1,0,0,0,1.3,39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,-0.2,2.6,79.2), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_3_1();
	this.instance.parent = this;
	this.instance.setTransform(1.2,40.5,1,1,0,0,0,1.2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(1.3,40.5,1,1,0,0,0,1.3,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(1.2,40.5,1,1,0,0,0,1.2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(1.2,40.5,1,1,0,0,0,1.2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18_1, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_17_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(1.3,40.5,1,1,0,0,0,1.3,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17_2, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_16_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(1.3,39.3,1,1,0,0,0,1.3,39.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16_2, new cjs.Rectangle(0,-0.2,2.5,79.2), null);


(lib.Group_15_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(1.2,40.5,1,1,0,0,0,1.2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15_2, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(1.2,40.5,1,1,0,0,0,1.2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14_2, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(1.2,40.5,1,1,0,0,0,1.2,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13_2, new cjs.Rectangle(0,-0.2,2.5,81.4), null);


(lib.Group_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(11.6,35.8,1,1,0,0,0,11.6,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12_2, new cjs.Rectangle(0,-0.2,23.2,72), null);


(lib.Group_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_13();
	this.instance.parent = this;
	this.instance.setTransform(11.4,35.1,1,1,0,0,0,11.4,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11_2, new cjs.Rectangle(0,-0.2,22.7,70.7), null);


(lib.Group_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_14();
	this.instance.parent = this;
	this.instance.setTransform(10.4,24.7,1,1,0,0,0,10.4,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10_2, new cjs.Rectangle(0,-0.1,20.7,49.7), null);


(lib.Group_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_15();
	this.instance.parent = this;
	this.instance.setTransform(10.9,28.2,1,1,0,0,0,10.9,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_2, new cjs.Rectangle(0,-0.1,21.8,56.7), null);


(lib.Group_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(11.4,31.7,1,1,0,0,0,11.4,31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8_2, new cjs.Rectangle(0,-0.2,22.7,63.7), null);


(lib.Group_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_17();
	this.instance.parent = this;
	this.instance.setTransform(3.3,15.4,1,1,0,0,0,3.3,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_2, new cjs.Rectangle(-0.1,0,6.7,30.8), null);


(lib.Group_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_18();
	this.instance.parent = this;
	this.instance.setTransform(3.4,15.4,1,1,0,0,0,3.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_2, new cjs.Rectangle(0,0,6.7,30.8), null);


(lib.Group_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_19();
	this.instance.parent = this;
	this.instance.setTransform(2,11.3,1,1,0,0,0,2,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_2, new cjs.Rectangle(0,-0.2,4.1,23), null);


(lib.Group_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_20();
	this.instance.parent = this;
	this.instance.setTransform(14.5,9.6,1,1,0,0,0,14.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_2, new cjs.Rectangle(-0.2,0,29.3,19.3), null);


(lib.Group_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_21();
	this.instance.parent = this;
	this.instance.setTransform(19.3,11.4,1,1,0,0,0,19.3,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_2, new cjs.Rectangle(-0.2,-0.1,39.1,23.1), null);


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_22();
	this.instance.parent = this;
	this.instance.setTransform(20.7,13.8,1,1,0,0,0,20.7,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(-0.1,-0.1,41.7,27.9), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_23();
	this.instance.parent = this;
	this.instance.setTransform(21.4,15.9,1,1,0,0,0,21.4,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(-0.2,-0.1,43.3,32.2), null);


(lib.Group_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_24();
	this.instance.parent = this;
	this.instance.setTransform(21.9,15.6,1,1,0,0,0,21.9,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_25, new cjs.Rectangle(-0.1,-0.2,44.2,31.6), null);


(lib.elementos25ene1mod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(0.1,0.2,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(0.1,0.2,0.453,0.453);

	this.instance = new lib.Circulocerrar4coloresroll2425ene2019amod3mcx("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_3.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.elementos25animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(0.1,0.2,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(0.1,0.2,0.453,0.453);

	this.instance = new lib.Circulocerrar4coloresrollanimultax("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_3.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.caja_respuestas1M2T3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var botones = 3;
		var resp = [3];
		var raiz = this; //guarda el MC padre
		for (var i = 1; i <= botones; i++) {
			raiz["Mod2T3mc6b" + i].n = i;
			raiz["Mod2T3mc6b" + i].sel = false;
			raiz["Mod2T3mc6b" + i].mouseEnabled = true;
			raiz["Mod2T3mc6b" + i].cursor = "pointer";
			console.log(raiz["Mod2T3mc6b" + i].n);
			raiz["Mod2T3mc6b" + i].addEventListener("click", Eventoclick);
		}
		function Eventoclick(c) {
		
			console.log("evento click");
			c.currentTarget.sel = true;
			c.currentTarget.mouseEnabled = false;
			c.currentTarget.gotoAndStop(1);
			if (c.currentTarget.n == 1) {
				c.currentTarget.gotoAndStop(0);
				c.currentTarget.sel = false;
				c.currentTarget.mouseEnabled = true;
				parent.llamarRetros("mal", "¡Vuelve a intentar! Recuerda que esta etapa culmina con el establecimiento de acciones de desarrollo que permitan a los colaboradores estar listos para las nuevas responsabilidades en el tiempo previsto.");
			}
			if (c.currentTarget.n == 2) {
				c.currentTarget.gotoAndStop(0);
				c.currentTarget.sel = false;
				c.currentTarget.mouseEnabled = true;
				parent.llamarRetros("mal", "¡Vuelve a intentar! Recuerda que esta etapa culmina con el establecimiento de acciones de desarrollo que permitan a los colaboradores estar listos para las nuevas responsabilidades en el tiempo previsto.");
			}
			if (c.currentTarget.n == 3) {
				parent.llamarRetros("bien", "¡En efecto! El siguiente paso es generar planes de desarrollo para tus colaboradores, dar seguimiento a las acciones acordadas y otorgar retroalimentación a tus colaboradores sobre sus resultados en el proceso para propiciar un ambiente de comunicación y desarrollo del talento.");
			}
			validar();
		}
		
		
		function validar() {
			var finalizo = true;
			for (var i = 0; i < resp.length; i++) {
				if (!raiz["Mod2T3mc6b" + resp[i]].sel) {
					finalizo = false;
					break;
				}
			}
			if (finalizo) {
				console.log("final de la actividad");
				for (var i = 1; i <= botones; i++) {
					raiz["Mod2T3mc6b" + i].mouseEnabled = false;
				}
				try {
					//parent.llamarRetros("bien","Respuesta B.  ¡En efecto! Contactar al líder del negocio o territorio nos permite tener claridad de los objetivos más significativos del negocio así como los retos que enfrenta la posición analizada, alineando de esta manera las necesidades de talento.");
					
					parent.final_tema();
					//parent.siguiente_verde();
		
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
	this.text = new cjs.Text("Generar y dar seguimiento a los planes de desarrollo de tu equipo como líder. ", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 627;
	this.text.parent = this;
	this.text.setTransform(-204.5,103.7);

	this.text_1 = new cjs.Text("Esperar al siguiente año para revisar nuevamente la evaluación.", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 627;
	this.text_1.parent = this;
	this.text_1.setTransform(-204.5,21.7);

	this.Mod2T3mc6b3 = new lib.mc_seleccion();
	this.Mod2T3mc6b3.parent = this;
	this.Mod2T3mc6b3.setTransform(458.3,112.4,0.845,0.843,0,0,0,6.9,7);

	this.Mod2T3mc6b2 = new lib.mc_seleccion();
	this.Mod2T3mc6b2.parent = this;
	this.Mod2T3mc6b2.setTransform(457.5,32.3,0.845,0.843,0,0,0,6.9,7);

	this.text_2 = new cjs.Text("Actualizar los perfiles críticos del área y establecer los indicadores de desempeño.", "18px 'Arial'", "#333333");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 627;
	this.text_2.parent = this;
	this.text_2.setTransform(-204.5,-61.7);

	this.Mod2T3mc6b1 = new lib.mc_seleccion();
	this.Mod2T3mc6b1.parent = this;
	this.Mod2T3mc6b1.setTransform(457.5,-50.4,0.845,0.843,0,0,0,6.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mod2T3mc6b1},{t:this.text_2},{t:this.Mod2T3mc6b2},{t:this.Mod2T3mc6b3},{t:this.text_1},{t:this.text}]}).wait(1));

	// numeros
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBNQgQgOgCgWIAhgEQABAMAHAHQAHAHAKAAQAKAAAHgIQAHgIAAgOQAAgNgHgHQgHgIgKAAQgFAAgJADIADgbQANAAAIgGQAHgHAAgKQAAgJgFgGQgGgFgIAAQgIAAgHAGQgGAGgBAMIgggGQADgQAHgJQAHgKAMgGQAMgFAOAAQAZAAAPAQQAMANAAARQAAAXgZAOQAPADAJALQAJALAAARQAAAXgRARQgRAQgZAAQgYAAgQgOg");
	this.shape.setTransform(-257.7,112.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("Ah7B8Qgzg0AAhIQAAhHAzgzQA0g0BHABIAGAAQBFABAxAyQAzAzAABHQAABIgzA0QgzAzhJAAQhHAAg0gzg");
	this.shape_1.setTransform(-257.6,111.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag7BaQACgSAKgQQAJgRAdgaQAWgVAGgIQAHgKAAgLQAAgLgGgGQgHgGgKAAQgKAAgHAGQgGAHgBAPIgigEQADgcAQgMQAQgNAXAAQAbAAAPAOQAPAPAAAVQAAAMgEALQgFALgJALQgGAIgQAPIgUATIgHAKIBDAAIAAAgg");
	this.shape_2.setTransform(-257.9,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC686B").s().p("Ah7B8Qgzg0AAhIQAAhHAzgzQA0g0BHABIAGAAQBFABAxAyQAzAzAABHQAABIgzA0QgzAzhJAAQhHAAg0gzg");
	this.shape_3.setTransform(-257.6,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAFBaIAAiAQgSARgZAJIAAggQANgEAQgMQAOgMAGgRIAcAAIAACzg");
	this.shape_4.setTransform(-259.6,-46.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC686B").s().p("Ah7B7QgzgyAAhJQAAhHAzgzQA0g0BHAAIAGAAQBFACAxAyQAzAzAABHQAABJgzAyQgzAzhJAAQhHAAg0gzg");
	this.shape_5.setTransform(-257.6,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fondos
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F3F3").s().p("EAx1AR+InUAAIhrAAMghFAAAMgqSAAAInWAAItnAAQggAAgagGQhcgbAAh0IAAgoIAAhkIAAjQQAAh0BcgaQAZgIAhABMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAcAGBcIABASIAABSIAAB+IAABCIAAAPIAAATIAAAVIAAADIAAAQQAACViWAAgEAx1AFUInUAAIhrAAMghFAAAMgqSAAAInWAAItnAAQggAAgagHQhcgaAAh1IAAgnIAAhkIAAjPQAAh1BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBbIABATIAABRIAAB+IAABBIAAAPIAAAUIAAAVIAAADIAAAPQAACWiWAAgEAx1gH2InUAAIhrAAMghFAAAMgqSAAAInWAAItnAAQgggBgagGQhcgaAAh2IAAgmIAAhkIAAjRQAAh0BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsgBAaALQBJAeAGBbIABASIAABSIAAB/IAABBIAAAPIAAAUIAAAUIAAADIAAAPQAACXiWAAg");
	this.shape_6.setTransform(141.1,30.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.caja_respuestas1M2T3, new cjs.Rectangle(-275.1,-84.3,786.3,230.1), null);


(lib.btn_cerrar_v2roll24enerosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(0.1,0.2,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(0.1,0.2,0.453,0.453);

	this.instance = new lib.Circulocerrar4coloresroll24rosa("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_3.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.btn_cerrar_v2roll24eneam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(0.1,0.2,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(0.1,0.2,0.453,0.453);

	this.instance = new lib.Circulocerrar4coloresroll2am("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_3.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.btn_cerrar_v2roll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(0.1,0.2,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(0.1,0.2,0.453,0.453);

	this.instance = new lib.Circulocerrar4coloresroll24ene("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_3.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.btn_cerrar_v2roll2verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(0.1,0.2,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(0.1,0.2,0.453,0.453);

	this.instance = new lib.Circulocerrar4coloresroll2verde("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_3.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.T2Mod3_Ventana_con_sus_contenidos_MC3roll24enverrr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-266.1,168.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v2roll2verde();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(517.4,1.4,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v2roll2verde(), 3);

	this.botoninvisible = new lib.T1_Boton_invisibleroll24ene();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisibleroll24ene(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(1));

	// Transicion
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mcroll24ene();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(317.3,177.5,1.024,1.074,0,0,0,309.8,176);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(1));

	// Contenidos
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ACBC69").s().p("AgXAZQgKgKAAgPQAAgNAKgLQAJgKAOAAQAOAAAKAKQAKALAAANQAAAPgKAKQgKAJgOABQgOgBgJgJg");
	this.shape_1.setTransform(12.5,162.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACBC69").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANAAQAOAAAKALQAIAHACALIAAALQgCAKgIAIQgKALgOgBQgNABgKgLg");
	this.shape_2.setTransform(12.5,102.9);

	this.text = new cjs.Text("Asignar nuevas tareas que le permitan poner a prueba su verdadero potencial (capacidad).\n\nAsignar proyectos que le permitan desarrollar su capacidad como líder, agente de cambio, así como la adquisición de nuevas experiencias y aumento de su nivel de compromiso.\n\n", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(25.7,93.5);

	this.text_1 = new cjs.Text("Colaborador consistente", "bold 40px 'Arial'", "#333333");
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 629;
	this.text_1.parent = this;
	this.text_1.setTransform(145.3,1.3,0.518,0.518);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ACBC69").s().p("AAAgFIAAAFIAAAGg");
	this.shape_3.setTransform(15.9,102.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.text_1},{t:this.text},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Sólo ventana
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("EglFASqQhoAAhJhKQhJhJAAhnMAAAghZMBR/AAAMAAAAhZQAABnhJBJQhJBKhoAAg");
	this.shape_4.setTransform(257.1,159.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACBC69").s().p("EgotAYcQhoAAhKhKQhKhKAAhoMAAAgo/QAAhoBKhLQBKhJBoAAMBRbAAAQBpAABJBJQBKBLAABoMAAAAo/QAABohKBKQhJBKhpAAg");
	this.shape_5.setTransform(256.4,135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// fondo negro translucido
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("EhNMAulQi0AAAAi0MAAAhXhQAAi0C0AAMCaZAAAQC0AAAAC0MAAABXhQAAC0i0AAg");
	this.shape_6.setTransform(255,127.6);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).wait(1));

	// ID
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhJBuQgHgBgFgFQgFgGABgHIAAAAQAAgHAGgFQAFgFAHABQAcACAeAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgBAAQgeAAgdgCgAAkBqQgFgEAAgIIAAAAQgBgHAFgFQAFgGAHAAQAfgCAcgDQAHAAAGAFQAFAEABAHIAAAAQABAHgFAGQgEAGgIAAQgdAEgfABIgBAAQgHAAgFgFgAiGBoQgfgEgdgGQgHgCgEgGQgEgGACgHQABgHAGgEQAHgEAHABQAbAHAeAEQAHABAEAFQAFAGgBAHIAAAAQgBAHgGAFQgEADgGAAIgDAAgACeBfQgGgEgBgHIAAAAQgBgHAEgGQAEgGAHgCQAegGAbgHQAHgCAGADQAGAEACAGIAAABQACAHgDAGQgDAGgHACQgdAJggAGIgDAAQgFAAgFgDgAj+BNQgkgMgUgOQgGgEgCgHQgBgHAEgGIABgCQAEgFAGgBQAIgBAGAEQARAMAeAKQAHACADAHQAEAGgDAHQgCAHgHADQgDACgEAAIgGgBgAEWA9QgGgCgEgGIAAgBQgDgGACgHQACgHAGgDQAbgOACgPQAAgEADgFQgGAAgEgFQgOgNgfgMQgGgDgDgGQgDgHACgGIAAgBQADgHAHgDQAGgCAHACQAnAPASATQAFAFAAAHQAAAGgDAEQAGAAAEAFQAFAFAAAGQADAigyAaQgEACgEAAIgGgBgAlEADIgFgCQgGgCgCgHQgDgHADgGQAMgZAtgUQAGgDAHADQAHACADAHQADAHgDAGQgDAHgGADQgeANgJAPQgDAGgHACIgGABIgDAAgAjgg3QgGgEgCgHIAAAAQgCgHAEgGQAEgGAHgCQAdgHAfgFQAIgBAFAEQAGAEABAHIAAAAQACAHgFAGQgEAGgHABQgeAFgcAHIgEABQgFAAgEgDgADIg4QgcgGgfgFQgHgBgEgGQgEgFAAgHIAAAAQABgIAGgEQAGgEAHABQAhAEAdAHQAHACAEAGQAEAHgCAHIAAABQgCAGgGAEQgEACgFAAIgEgBgAhrhMQgFgFgBgHQAAgHAEgGQAFgFAHgBQAegDAggBQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAFgHABQgfABgdACIgBAAQgHAAgFgEgABThKQgdgBgegBQgHAAgFgFQgFgFAAgHIAAgBQAAgHAFgFQAFgFAHAAQAgAAAdACQAIABAEAGQAFAFAAAHIAAABQgBAHgFAEQgFAFgHAAIgBgBg");
	this.shape_7.setTransform(-375,376.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAIBSQgGgFgGAAQgeAAgcgCQgHgBgFAFQgGAFAAAHIgZgCQABgHgEgGQgFgFgHgBQgegEgbgHQgHgBgGAEQgHAEgBAHIgXgGIgCgBQADgHgEgGQgDgHgHgCQgegKgRgMQgGgEgIABQgGABgEAFQgJgLgBgLQAEABAFgCQAHgCADgGQAJgPAegNQAGgDADgHQADgGgDgHIAZgJQACAHAGAEQAGAEAIgCQAbgHAegFQAHgBAEgGQAFgGgBgHIAAAAIAZgDQABAHAFAFQAGAFAHgBQAdgCAfgCQAIAAAFgFQAEgFAAgHIAPAAIAJAAQAAAHAFAFQAFAFAHAAQAeABAdABQAHABAGgFQAFgEABgHIAYADQAAAHAEAFQAEAGAHABQAfAFAcAGQAHACAGgDQAGgEACgGIAGABIAPAFQgCAGADAHQADAGAGADQAfAMAOANQAEAFAGAAQgDAFAAAEQgCAPgaAOQgHADgCAHQgCAHADAGIgZAJQgCgGgGgEQgGgDgHACQgbAHgeAGQgHACgEAGQgEAGABAHIgaADQgBgHgFgEQgGgFgHAAQgcADgfACQgHAAgFAGQgFAFABAHIgbAAQAAgHgFgFg");
	this.shape_8.setTransform(-375.9,376.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,-26.6,163.4,414);


(lib.T3_Señalar_btn_mc_1animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_25enanimultax();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},12).to({alpha:0},13).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn25ene20animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// OVER (rollover)
	this.instance = new lib.T3_movie_25ene2animultax();
	this.instance.parent = this;
	this.instance.setTransform(91,14.5,1,1,0,0,0,91,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// UP (reposo)
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.008)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.botonescitos1animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// visitado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B31F").s().p("AgKCOQgCAAgCgFIgBgEIgRhLIgFgXIAAgRIABgLIABgFQADgIADABQADAAABAEIADAGIAMA5IAoi7QABgMACgDQABgBAAAAQABAAAAgBQAAAAABAAQAAABAAAAIABABIABANIgBALIgBADIgnD2QgEAKgCAAIgBgBg");
	this.shape.setTransform(94.9,47.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1animultax();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_lineaanimultax();
	this.activo.parent = this;
	this.activo.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn25ene20animultax();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(64,12.5,1,1,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_Señalar_btn_mc_1_lin25enmod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_25ene2mod3mcx();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},12).to({alpha:0},13).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn25ene2019amod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// OVER (rollover)
	this.instance = new lib.T3_movie_25ene2019mod3mcx();
	this.instance.parent = this;
	this.instance.setTransform(91,14.5,1,1,0,0,0,91,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// UP (reposo)
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.008)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.botonescitos1mod3mcxnwe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// visitado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B31F").s().p("AgQCdQgDgBgDgFIgCgFIgahSQgFgQgCgJIAAgTQAAgIACgFIABgFQAEgJAEABQAFAAADAFIADAGIATA/IA+jOQACgNADgEQABAAAAgBQABAAABAAQAAAAABAAQAAAAABABIABAAIABAPIgBAMIgBAEIg+EPQgEAKgFAAIgBAAg");
	this.shape.setTransform(67.4,52.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.498)").s().p("AixHYIAAuvIEBAAIAAANQAgAXAZA7QApBhAACHIAAEjQAACJgpBdQgZA7ggAZIAAALg");
	this.shape_1.setTransform(69,48.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_lin25enmod3mcx();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,16.6,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_lineaMOD3a25ene2mod3mcx();
	this.activo.parent = this;
	this.activo.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn25ene2019amod3mcx();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(64,15.3,1,1,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.8,90,96);


(lib.T3_Señalar_btn_mc_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_gr_1_lineaMOD3a();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},12).to({alpha:0},13).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLASMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// OVER (rollover)
	this.instance = new lib.T3_movie_rollover_1_lineaMOD3a();
	this.instance.parent = this;
	this.instance.setTransform(91,14.5,1,1,0,0,0,91,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// UP (reposo)
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.008)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.botonesplantear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// visitado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B31F").s().p("AgOBnQgCAAgDgEIgCgDIgXg2QgFgKgBgHIAAgMQAAgFABgDIACgEQADgFAEAAQAEAAACAEIADADIARAqIA3iIQACgIADgDQAAAAABAAQAAAAABAAQAAgBABABQAAAAABAAIABAAIABAKIgBAIIgBACIg3CzQgEAHgEAAIgBgBg");
	this.shape.setTransform(80.3,76.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_lineaMOD3a();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_lineaMOD3a();
	this.activo.parent = this;
	this.activo.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLASMOD3a();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(64,12.5,1,1,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_Señalar_btn_mc_1_lineaMrosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_gr_1_lirosa();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},12).to({alpha:0},13).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLASMOD3rosaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// OVER (rollover)
	this.instance = new lib.T3_movie_rollover_1_linearosa();
	this.instance.parent = this;
	this.instance.setTransform(91,14.5,1,1,0,0,0,91,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// UP (reposo)
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.008)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.botonesplantearrosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// visitado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B31F").s().p("AgOBnQgCAAgDgEIgCgDIgXg2QgFgKgBgHIAAgMQAAgFABgDIACgEQADgFAEAAQAEAAACAEIADADIARAqIA3iIQACgIADgDQAAAAABAAQAAAAABAAQAAgBABABQAAAAABAAIABAAIABAKIgBAIIgBACIg3CzQgEAHgEAAIgBgBg");
	this.shape.setTransform(80.3,76.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_lineaMrosa();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_lineaMOD3arosa();
	this.activo.parent = this;
	this.activo.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLASMOD3rosaa();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(64,12.5,1,1,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T2Mod3_Ventana_con_sus_contenidos_MC3roll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			raiz.parent.b1.mouseEnabled=true;
			raiz.parent.b2.mouseEnabled=true;
			raiz.parent.b3.mouseEnabled=true;
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.visible=false;
		console.log("deshabilita el fondo");
		this.fixxx.mouseEnabled=false;
	}
	this.frame_2 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			raiz.parent.b1.mouseEnabled=true;
			raiz.parent.b2.mouseEnabled=true;
			raiz.parent.b3.mouseEnabled=true;
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_3 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			raiz.parent.b1.mouseEnabled=true;
			raiz.parent.b2.mouseEnabled=true;
			raiz.parent.b3.mouseEnabled=true;
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-266.1,168.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v2roll24ene();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(490.3,8.2,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v2roll24ene(), 3);

	this.botoninvisible = new lib.T1_Boton_invisibleroll24ene_1();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(3));

	// Transicion
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mcroll24ene();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(317.3,177.5,1.024,1.074,0,0,0,309.8,176);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(3));

	// Contenidos
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85C8DA").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_1.setTransform(-9.4,162.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85C8DA").s().p("AgXAZQgKgLAAgOQAAgNAKgLQAKgKANAAQAOAAAKAKQAKALAAANQAAAOgKALQgKAJgOABQgNgBgKgJg");
	this.shape_2.setTransform(-9.4,102.9);

	this.text = new cjs.Text("Elaborar un plan de trabajo para seguir desarrollando sus competencias, preparándose para nuevas responsabilidades.\n\nIncluir en programa de “mentoring/coaching” para orientar su formación ejecutiva. \n", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(3.8,93.5);

	this.text_1 = new cjs.Text("Talento en crecimiento", "bold 40px 'Arial'", "#333333");
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 629;
	this.text_1.parent = this;
	this.text_1.setTransform(123.4,1.3,0.518,0.518);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85C8DA").s().p("AgYAYQgJgKgBgOQABgNAJgKQAKgKAOAAQAOAAAKAKQALAKAAANQAAAOgLAKQgKAKgOAAQgOAAgKgKg");
	this.shape_3.setTransform(-4,193.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#85C8DA").s().p("AgYAYQgJgJgBgPQABgNAJgLQAKgKAOABQAOgBAKAKQALALAAANQAAAPgLAJQgKALgOAAQgOAAgKgLg");
	this.shape_4.setTransform(-4,155.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#85C8DA").s().p("AgYAYQgJgKgBgOQABgNAJgKQAKgLAOAAQAOAAAKALQALAKAAANQAAAOgLAKQgKALgOgBQgOABgKgLg");
	this.shape_5.setTransform(-4,79.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#85C8DA").s().p("AgYAZQgJgKgBgPQABgNAJgLQALgJANgBQAOABAKAJQAKALAAANQAAAPgKAKQgKAKgOAAQgNAAgLgKg");
	this.shape_6.setTransform(-7.5,142.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#85C8DA").s().p("AgYAZQgJgKgBgPQABgNAJgLQALgJANgBQAOABAKAJQAKALAAANQAAAPgKAKQgKAKgOAAQgNAAgLgKg");
	this.shape_7.setTransform(-7.5,102.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{x:123.4,y:1.3,text:"Talento en crecimiento"}},{t:this.text,p:{x:3.8,y:93.5,text:"Elaborar un plan de trabajo para seguir desarrollando sus competencias, preparándose para nuevas responsabilidades.\n\nIncluir en programa de “mentoring/coaching” para orientar su formación ejecutiva. \n",lineWidth:489}},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.text_1,p:{x:171.9,y:-0.7,text:"Futuro líder"}},{t:this.text,p:{x:9.2,y:70.5,text:"Proporcionar incentivos que lo mantengan motivado, como proyectos, estudios, elementos de reconocimiento interno y/o exposición a nuevas experiencias.\n\nElaborar un plan de carrera.\n\nIncluirlo en un programa de “mentoring/coaching” para orientar su formación ejecutiva.\n\n",lineWidth:464}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.text_1,p:{x:181,y:1.1,text:"Alto impacto"}},{t:this.text,p:{x:5.7,y:93.3,text:"Motivar para incrementar su potencial y experiencia.\n\nAsignar proyectos que le permitan desarrollar su capacidad como líder, agente de cambio, adquisición de nuevas competencias, y aumente su nivel de compromiso y exposición a nuevas experiencias.\n\n",lineWidth:489}},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Sólo ventana
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3F3F3").s().p("EglFASqQhoAAhJhKQhJhJAAhnMAAAghZMBR/AAAMAAAAhZQAABnhJBJQhJBKhoAAg");
	this.shape_8.setTransform(235.1,159.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6CBACB").s().p("EgotAYcQhoAAhKhKQhKhKAAhoMAAAgo/QAAhoBKhLQBKhJBoAAMBRbAAAQBpAABJBJQBKBLAABoMAAAAo/QAABohKBKQhJBKhpAAg");
	this.shape_9.setTransform(234.4,135.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(3));

	// fondo translucido negro
	this.fixxx = new lib.Symbol1();
	this.fixxx.parent = this;
	this.fixxx.setTransform(250.8,111.4,1,1,0,0,0,512.1,298.1);
	this.fixxx._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fixxx).wait(1).to({_off:false},0).wait(3));

	// ID
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AhJBuQgHgBgFgFQgFgGABgHIAAAAQAAgHAGgFQAFgFAHABQAcACAeAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgBAAQgeAAgdgCgAAkBqQgFgEAAgIIAAAAQgBgHAFgFQAFgGAHAAQAfgCAcgDQAHAAAGAFQAFAEABAHIAAAAQABAHgFAGQgEAGgIAAQgdAEgfABIgBAAQgHAAgFgFgAiGBoQgfgEgdgGQgHgCgEgGQgEgGACgHQABgHAGgEQAHgEAHABQAbAHAeAEQAHABAEAFQAFAGgBAHIAAAAQgBAHgGAFQgEADgGAAIgDAAgACeBfQgGgEgBgHIAAAAQgBgHAEgGQAEgGAHgCQAegGAbgHQAHgCAGADQAGAEACAGIAAABQACAHgDAGQgDAGgHACQgdAJggAGIgDAAQgFAAgFgDgAj+BNQgkgMgUgOQgGgEgCgHQgBgHAEgGIABgCQAEgFAGgBQAIgBAGAEQARAMAeAKQAHACADAHQAEAGgDAHQgCAHgHADQgDACgEAAIgGgBgAEWA9QgGgCgEgGIAAgBQgDgGACgHQACgHAGgDQAbgOACgPQAAgEADgFQgGAAgEgFQgOgNgfgMQgGgDgDgGQgDgHACgGIAAgBQADgHAHgDQAGgCAHACQAnAPASATQAFAFAAAHQAAAGgDAEQAGAAAEAFQAFAFAAAGQADAigyAaQgEACgEAAIgGgBgAlEADIgFgCQgGgCgCgHQgDgHADgGQAMgZAtgUQAGgDAHADQAHACADAHQADAHgDAGQgDAHgGADQgeANgJAPQgDAGgHACIgGABIgDAAgAjgg3QgGgEgCgHIAAAAQgCgHAEgGQAEgGAHgCQAdgHAfgFQAIgBAFAEQAGAEABAHIAAAAQACAHgFAGQgEAGgHABQgeAFgcAHIgEABQgFAAgEgDgADIg4QgcgGgfgFQgHgBgEgGQgEgFAAgHIAAAAQABgIAGgEQAGgEAHABQAhAEAdAHQAHACAEAGQAEAHgCAHIAAABQgCAGgGAEQgEACgFAAIgEgBgAhrhMQgFgFgBgHQAAgHAEgGQAFgFAHgBQAegDAggBQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAFgHABQgfABgdACIgBAAQgHAAgFgEgABThKQgdgBgegBQgHAAgFgFQgFgFAAgHIAAgBQAAgHAFgFQAFgFAHAAQAgAAAdACQAIABAEAGQAFAFAAAHIAAABQgBAHgFAEQgFAFgHAAIgBgBg");
	this.shape_10.setTransform(-375,376.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAIBSQgGgFgGAAQgeAAgcgCQgHgBgFAFQgGAFAAAHIgZgCQABgHgEgGQgFgFgHgBQgegEgbgHQgHgBgGAEQgHAEgBAHIgXgGIgCgBQADgHgEgGQgDgHgHgCQgegKgRgMQgGgEgIABQgGABgEAFQgJgLgBgLQAEABAFgCQAHgCADgGQAJgPAegNQAGgDADgHQADgGgDgHIAZgJQACAHAGAEQAGAEAIgCQAbgHAegFQAHgBAEgGQAFgGgBgHIAAAAIAZgDQABAHAFAFQAGAFAHgBQAdgCAfgCQAIAAAFgFQAEgFAAgHIAPAAIAJAAQAAAHAFAFQAFAFAHAAQAeABAdABQAHABAGgFQAFgEABgHIAYADQAAAHAEAFQAEAGAHABQAfAFAcAGQAHACAGgDQAGgEACgGIAGABIAPAFQgCAGADAHQADAGAGADQAfAMAOANQAEAFAGAAQgDAFAAAEQgCAPgaAOQgHADgCAHQgCAHADAGIgZAJQgCgGgGgEQgGgDgHACQgbAHgeAGQgHACgEAGQgEAGABAHIgaADQgBgHgFgEQgGgFgHAAQgcADgfACQgHAAgFAGQgFAFABAHIgbAAQAAgHgFgFg");
	this.shape_11.setTransform(-375.9,376.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,-26.6,163.4,414);


(lib.T2Mod3_Ventana_con_sus_contenidos_MC3roll24eneamama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_2 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-266.1,168.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v2roll24eneam();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(517.4,2.4,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v2roll24eneam(), 3);

	this.botoninvisible = new lib.T1_Boton_invisibleroll24ene();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisibleroll24ene(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(2));

	// Transicion
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mcroll24ene();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(317.3,177.5,1.024,1.074,0,0,0,309.8,176);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(2));

	// Contenidos
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2CA88").s().p("AgYAYQgJgJgBgPQABgNAJgKQAKgLAOABQAOgBAKALQALAKAAANQAAAPgLAJQgKALgOAAQgOAAgKgLg");
	this.shape_1.setTransform(22.6,204.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2CA88").s().p("AgYAZQgJgLgBgOQABgNAJgLQAKgKAOABQAOgBAKAKQALALAAANQAAAOgLALQgKAJgOABQgOgBgKgJg");
	this.shape_2.setTransform(22.6,147.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2CA88").s().p("AgYAYQgJgKgBgOQABgNAJgKQAKgKAOAAQAOAAAKAKQALAKAAANQAAAOgLAKQgKAKgOAAQgOAAgKgKg");
	this.shape_3.setTransform(22.6,90.9);

	this.text = new cjs.Text("Apoyar al colaborador con modelos y metodologías para mejorar su desempeño.\n\nEvaluar su desempeño y actitudes para establecer un programa conjunto de acciones de mejora.\n\nProporcionar nuevos retos o proyectos para incrementar su potencial.\n\n", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 475;
	this.text.parent = this;
	this.text.setTransform(35.8,80.5);

	this.text_1 = new cjs.Text("Profesional efectivo", "bold 40px 'Arial'", "#333333");
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 629;
	this.text_1.parent = this;
	this.text_1.setTransform(145.4,-1.7,0.518,0.518);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2CA88").s().p("AgYAZQgJgLgBgOQABgNAJgLQAKgJAOgBQAOABAKAJQALALAAANQAAAOgLALQgKAKgOgBQgOABgKgKg");
	this.shape_4.setTransform(22.6,177.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2CA88").s().p("AgYAYQgJgJgBgPQABgNAJgLQAKgKAOABQAOgBAKAKQALALAAANQAAAPgLAJQgKALgOAAQgOAAgKgLg");
	this.shape_5.setTransform(22.6,101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{y:-1.7,text:"Profesional efectivo"}},{t:this.text,p:{y:80.5,text:"Apoyar al colaborador con modelos y metodologías para mejorar su desempeño.\n\nEvaluar su desempeño y actitudes para establecer un programa conjunto de acciones de mejora.\n\nProporcionar nuevos retos o proyectos para incrementar su potencial.\n\n",lineWidth:475}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.text_1,p:{y:-0.7,text:"Profesional experto"}},{t:this.text,p:{y:91.5,text:"Evaluar la conveniencia de desarrollar un plan de carrera que le permita seguir aplicando su experiencia en otros ámbitos.\n\nAsignar proyectos que lo motiven a seguir desarrollando su potencial.\n\n\n",lineWidth:456}},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Sólo ventana
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F3F3").s().p("EglFASqQhoAAhJhKQhJhJAAhnMAAAghZMBR/AAAMAAAAhZQAABnhJBJQhJBKhoAAg");
	this.shape_6.setTransform(257.1,157.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2CA88").s().p("EgotAYcQhoAAhKhKQhKhKAAhoMAAAgo/QAAhoBKhLQBKhJBoAAMBRbAAAQBpAABJBJQBKBLAABoMAAAAo/QAABohKBKQhJBKhpAAg");
	this.shape_7.setTransform(256.4,133.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

	// fondo negro translucido
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("EhNMAulQi0AAAAi0MAAAhXhQAAi0C0AAMCaZAAAQC0AAAAC0MAAABXhQAAC0i0AAg");
	this.shape_8.setTransform(255,127.6);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).wait(2));

	// ID
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AhJBuQgHgBgFgFQgFgGABgHIAAAAQAAgHAGgFQAFgFAHABQAcACAeAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgBAAQgeAAgdgCgAAkBqQgFgEAAgIIAAAAQgBgHAFgFQAFgGAHAAQAfgCAcgDQAHAAAGAFQAFAEABAHIAAAAQABAHgFAGQgEAGgIAAQgdAEgfABIgBAAQgHAAgFgFgAiGBoQgfgEgdgGQgHgCgEgGQgEgGACgHQABgHAGgEQAHgEAHABQAbAHAeAEQAHABAEAFQAFAGgBAHIAAAAQgBAHgGAFQgEADgGAAIgDAAgACeBfQgGgEgBgHIAAAAQgBgHAEgGQAEgGAHgCQAegGAbgHQAHgCAGADQAGAEACAGIAAABQACAHgDAGQgDAGgHACQgdAJggAGIgDAAQgFAAgFgDgAj+BNQgkgMgUgOQgGgEgCgHQgBgHAEgGIABgCQAEgFAGgBQAIgBAGAEQARAMAeAKQAHACADAHQAEAGgDAHQgCAHgHADQgDACgEAAIgGgBgAEWA9QgGgCgEgGIAAgBQgDgGACgHQACgHAGgDQAbgOACgPQAAgEADgFQgGAAgEgFQgOgNgfgMQgGgDgDgGQgDgHACgGIAAgBQADgHAHgDQAGgCAHACQAnAPASATQAFAFAAAHQAAAGgDAEQAGAAAEAFQAFAFAAAGQADAigyAaQgEACgEAAIgGgBgAlEADIgFgCQgGgCgCgHQgDgHADgGQAMgZAtgUQAGgDAHADQAHACADAHQADAHgDAGQgDAHgGADQgeANgJAPQgDAGgHACIgGABIgDAAgAjgg3QgGgEgCgHIAAAAQgCgHAEgGQAEgGAHgCQAdgHAfgFQAIgBAFAEQAGAEABAHIAAAAQACAHgFAGQgEAGgHABQgeAFgcAHIgEABQgFAAgEgDgADIg4QgcgGgfgFQgHgBgEgGQgEgFAAgHIAAAAQABgIAGgEQAGgEAHABQAhAEAdAHQAHACAEAGQAEAHgCAHIAAABQgCAGgGAEQgEACgFAAIgEgBgAhrhMQgFgFgBgHQAAgHAEgGQAFgFAHgBQAegDAggBQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAFgHABQgfABgdACIgBAAQgHAAgFgEgABThKQgdgBgegBQgHAAgFgFQgFgFAAgHIAAgBQAAgHAFgFQAFgFAHAAQAgAAAdACQAIABAEAGQAFAFAAAHIAAABQgBAHgFAEQgFAFgHAAIgBgBg");
	this.shape_9.setTransform(-375,376.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAIBSQgGgFgGAAQgeAAgcgCQgHgBgFAFQgGAFAAAHIgZgCQABgHgEgGQgFgFgHgBQgegEgbgHQgHgBgGAEQgHAEgBAHIgXgGIgCgBQADgHgEgGQgDgHgHgCQgegKgRgMQgGgEgIABQgGABgEAFQgJgLgBgLQAEABAFgCQAHgCADgGQAJgPAegNQAGgDADgHQADgGgDgHIAZgJQACAHAGAEQAGAEAIgCQAbgHAegFQAHgBAEgGQAFgGgBgHIAAAAIAZgDQABAHAFAFQAGAFAHgBQAdgCAfgCQAIAAAFgFQAEgFAAgHIAPAAIAJAAQAAAHAFAFQAFAFAHAAQAeABAdABQAHABAGgFQAFgEABgHIAYADQAAAHAEAFQAEAGAHABQAfAFAcAGQAHACAGgDQAGgEACgGIAGABIAPAFQgCAGADAHQADAGAGADQAfAMAOANQAEAFAGAAQgDAFAAAEQgCAPgaAOQgHADgCAHQgCAHADAGIgZAJQgCgGgGgEQgGgDgHACQgbAHgeAGQgHACgEAGQgEAGABAHIgaADQgBgHgFgEQgGgFgHAAQgcADgfACQgHAAgFAGQgFAFABAHIgbAAQAAgHgFgFg");
	this.shape_10.setTransform(-375.9,376.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,-26.6,163.4,414);


(lib.T2Mod3_Ventana_con_sus_contenidos_MC3rorosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_2 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_3 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-266.1,168.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v2roll24enerosa();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(520.9,0.4,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v2roll24enerosa(), 3);

	this.botoninvisible = new lib.T1_Boton_invisiblerollrosa();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisiblerollrosa(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(3));

	// Transicion
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mcroll24ene();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(317.3,177.5,1.024,1.074,0,0,0,309.8,176);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(3));

	// Contenidos
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2CA88").s().p("AgXAZQgKgKAAgPQAAgNAKgLQAJgJAOgBQAOABAKAJQAKALAAANQAAAPgKAKQgKAKgOAAQgOAAgJgKg");
	this.shape_1.setTransform(84.5,185.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2CA88").s().p("AgXAZQgKgLAAgOQAAgNAKgLQAJgJAOgBQAOABAKAJQAKALAAANQAAAOgKALQgKAKgOgBQgOABgJgKg");
	this.shape_2.setTransform(84.5,146.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2CA88").s().p("AgXAZQgKgLAAgOQAAgNAKgLQAJgKAOABQAOgBAKAKQAKALAAANQAAAOgKALQgKAJgOABQgOgBgJgJg");
	this.shape_3.setTransform(84.5,107.9);

	this.text = new cjs.Text("Plan de trabajo para mejorar su desempeño.\n\nHacer análisis de puesto/persona.\n\nCambiar de puesto.\n", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(97.7,98.5);

	this.text_1 = new cjs.Text("Caso a revisar (Enigma)", "bold 40px 'Arial'", "#333333");
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 629;
	this.text_1.parent = this;
	this.text_1.setTransform(127.3,-3.7,0.518,0.518);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E05C66").s().p("AgYAZQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAPgLAKQgKAJgOABQgNgBgLgJg");
	this.shape_4.setTransform(34.5,204.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E05C66").s().p("AgYAZQgKgKAAgPQAAgNAKgLQALgJANgBQAOABAKAJQALALAAANQAAAPgLAKQgKAKgOAAQgNAAgLgKg");
	this.shape_5.setTransform(34.5,149.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E05C66").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgJANgBQAOABAKAJQALALAAANQAAAOgLALQgKAKgOgBQgNABgLgKg");
	this.shape_6.setTransform(34.5,92.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E05C66").s().p("AgYAZQgKgKAAgPQAAgNAKgLQAKgKAOAAQAOAAAKAKQALALAAANQAAAPgLAKQgKAJgOABQgOgBgKgJg");
	this.shape_7.setTransform(44.5,214.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E05C66").s().p("AgYAYQgKgKAAgOQAAgNAKgKQAKgLAOAAQAOAAAKALQALAKAAANQAAAOgLAKQgKALgOgBQgOABgKgLg");
	this.shape_8.setTransform(44.5,178.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E05C66").s().p("AgYAZQgKgLAAgOQAAgNAKgLQAKgJAOgBQAOABAKAJQALALAAANQAAAOgLALQgKAKgOgBQgOABgKgKg");
	this.shape_9.setTransform(44.5,101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{x:127.3,y:-3.7,text:"Caso a revisar (Enigma)",color:"#333333",lineWidth:629}},{t:this.text,p:{x:97.7,y:98.5,text:"Plan de trabajo para mejorar su desempeño.\n\nHacer análisis de puesto/persona.\n\nCambiar de puesto.\n",lineWidth:489}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.text_1,p:{x:83,y:-2.7,text:"Desempeño inconsistente (Dilema)",color:"#FFFFFF",lineWidth:756}},{t:this.text,p:{x:47.7,y:81.5,text:"Apoyar a la persona con modelos y metodologías para mejorar su desempeño.\n\nDar seguimiento puntual a sus tareas y responsabilidades (Planes de Acción de Mejora).\n\nAsignar proyectos que le permitan mejorar.\n\n\n\n",lineWidth:462}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.text_1,p:{x:173,y:-2.7,text:"Bajo desempeño",color:"#FFFFFF",lineWidth:629}},{t:this.text,p:{x:57.7,y:91.5,text:"Establecer un programa de acciones y/u objetivos específicos de corto plazo para mejorar su desempeño (Planes de Acción de Mejora).\n\nOtorgar última oportunidad a prueba.\n\nDesincorporar.\n\n\n",lineWidth:462}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Sólo ventana
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3F3F3").s().p("EglFASqQhoAAhJhKQhJhJAAhnMAAAghZMBR/AAAMAAAAhZQAABnhJBJQhJBKhoAAg");
	this.shape_10.setTransform(259.1,154.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E2CA88").s().p("EgotAYcQhoAAhKhKQhKhKAAhoMAAAgo/QAAhoBKhLQBKhJBoAAMBRbAAAQBpAABJBJQBKBLAABoMAAAAo/QAABohKBKQhJBKhpAAg");
	this.shape_11.setTransform(258.4,130);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E05C66").s().p("EgotAYcQhoAAhKhKQhKhKAAhoMAAAgo/QAAhoBKhLQBKhJBoAAMBRbAAAQBpAABJBJQBKBLAABoMAAAAo/QAABohKBKQhJBKhpAAg");
	this.shape_12.setTransform(258.4,131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10,p:{y:154.5}}]},1).to({state:[{t:this.shape_12},{t:this.shape_10,p:{y:155.5}}]},1).to({state:[{t:this.shape_12},{t:this.shape_10,p:{y:155.5}}]},1).wait(1));

	// fondo negro translucido
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.498)").s().p("EhNMAulQi0AAAAi0MAAAhXhQAAi0C0AAMCaZAAAQC0AAAAC0MAAABXhQAAC0i0AAg");
	this.shape_13.setTransform(255,127.6);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1).to({_off:false},0).wait(3));

	// ID
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AhJBuQgHgBgFgFQgFgGABgHIAAAAQAAgHAGgFQAFgFAHABQAcACAeAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgBAAQgeAAgdgCgAAkBqQgFgEAAgIIAAAAQgBgHAFgFQAFgGAHAAQAfgCAcgDQAHAAAGAFQAFAEABAHIAAAAQABAHgFAGQgEAGgIAAQgdAEgfABIgBAAQgHAAgFgFgAiGBoQgfgEgdgGQgHgCgEgGQgEgGACgHQABgHAGgEQAHgEAHABQAbAHAeAEQAHABAEAFQAFAGgBAHIAAAAQgBAHgGAFQgEADgGAAIgDAAgACeBfQgGgEgBgHIAAAAQgBgHAEgGQAEgGAHgCQAegGAbgHQAHgCAGADQAGAEACAGIAAABQACAHgDAGQgDAGgHACQgdAJggAGIgDAAQgFAAgFgDgAj+BNQgkgMgUgOQgGgEgCgHQgBgHAEgGIABgCQAEgFAGgBQAIgBAGAEQARAMAeAKQAHACADAHQAEAGgDAHQgCAHgHADQgDACgEAAIgGgBgAEWA9QgGgCgEgGIAAgBQgDgGACgHQACgHAGgDQAbgOACgPQAAgEADgFQgGAAgEgFQgOgNgfgMQgGgDgDgGQgDgHACgGIAAgBQADgHAHgDQAGgCAHACQAnAPASATQAFAFAAAHQAAAGgDAEQAGAAAEAFQAFAFAAAGQADAigyAaQgEACgEAAIgGgBgAlEADIgFgCQgGgCgCgHQgDgHADgGQAMgZAtgUQAGgDAHADQAHACADAHQADAHgDAGQgDAHgGADQgeANgJAPQgDAGgHACIgGABIgDAAgAjgg3QgGgEgCgHIAAAAQgCgHAEgGQAEgGAHgCQAdgHAfgFQAIgBAFAEQAGAEABAHIAAAAQACAHgFAGQgEAGgHABQgeAFgcAHIgEABQgFAAgEgDgADIg4QgcgGgfgFQgHgBgEgGQgEgFAAgHIAAAAQABgIAGgEQAGgEAHABQAhAEAdAHQAHACAEAGQAEAHgCAHIAAABQgCAGgGAEQgEACgFAAIgEgBgAhrhMQgFgFgBgHQAAgHAEgGQAFgFAHgBQAegDAggBQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAFgHABQgfABgdACIgBAAQgHAAgFgEgABThKQgdgBgegBQgHAAgFgFQgFgFAAgHIAAgBQAAgHAFgFQAFgFAHAAQAgAAAdACQAIABAEAGQAFAFAAAHIAAABQgBAHgFAEQgFAFgHAAIgBgBg");
	this.shape_14.setTransform(-375,376.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAIBSQgGgFgGAAQgeAAgcgCQgHgBgFAFQgGAFAAAHIgZgCQABgHgEgGQgFgFgHgBQgegEgbgHQgHgBgGAEQgHAEgBAHIgXgGIgCgBQADgHgEgGQgDgHgHgCQgegKgRgMQgGgEgIABQgGABgEAFQgJgLgBgLQAEABAFgCQAHgCADgGQAJgPAegNQAGgDADgHQADgGgDgHIAZgJQACAHAGAEQAGAEAIgCQAbgHAegFQAHgBAEgGQAFgGgBgHIAAAAIAZgDQABAHAFAFQAGAFAHgBQAdgCAfgCQAIAAAFgFQAEgFAAgHIAPAAIAJAAQAAAHAFAFQAFAFAHAAQAeABAdABQAHABAGgFQAFgEABgHIAYADQAAAHAEAFQAEAGAHABQAfAFAcAGQAHACAGgDQAGgEACgGIAGABIAPAFQgCAGADAHQADAGAGADQAfAMAOANQAEAFAGAAQgDAFAAAEQgCAPgaAOQgHADgCAHQgCAHADAGIgZAJQgCgGgGgEQgGgDgHACQgbAHgeAGQgHACgEAGQgEAGABAHIgaADQgBgHgFgEQgGgFgHAAQgcADgfACQgHAAgFAGQgFAFABAHIgbAAQAAgHgFgFg");
	this.shape_15.setTransform(-375.9,376.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,-26.6,163.4,414);


(lib.T2Mod3_Ventana_con_sus_dsdbien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_2 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-266.1,168.9);

	this.m2mc1_Cerrar = new lib.elementos25animultax();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(402.5,34.6,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.elementos25animultax(), 3);

	this.botoninvisible = new lib.T1_Boton_invisibleroll24emoanimultax();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(2));

	// Transicion
	this.cuadrotransicion = new lib.T1_cuadrotransicion_25eanimultax();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(-13.2,268.2,1.024,1.074,0,0,0,309.8,176);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(2));

	// Contenidos
	this.text = new cjs.Text("%", "bold 25px 'Arial'");
	this.text.lineHeight = 8;
	this.text.lineWidth = 33;
	this.text.parent = this;
	this.text.setTransform(26.5,189.5);

	this.text_1 = new cjs.Text("10", "bold 35px 'Arial'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 53;
	this.text_1.parent = this;
	this.text_1.setTransform(-14.5,181.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AEMHxQgGAAgDgEQgEgEABgFIAAAAQAAgFAEgEQADgDAGAAIAbAAQAPAAAPgDQAFAAAEADQAEADABAEIAAABQABAFgDAEQgDAEgFABQgQADgRAAIgPAAIgOAAgADOHqQgegGgfgJQgFgCgCgFQgDgEACgFIAAgBQABgEAFgCQAEgDAFACQAeAJAcAFQAFABADAFQADAEgBAFIAAAAQgBAFgEADQgDACgEAAIgCAAgAF+HcQgFgCgCgFIAAAAQgCgEABgFQACgFAFgCQATgJAQgNIAAAAIAKgJQAEgEAFABQAEAAADADIABABQAEAEAAAFQgBAFgEADIgKAJIAAABQgTAPgWAKIgFACIgEgBgABYHGQgcgMgbgOQgFgCgBgFQgCgFADgFQACgEAFgCQAFgBAEACQAbAOAaALQAFACACAEQACAFgCAEIAAABQgCAFgFACIgEABIgFgBgAgUGPIgtgeIAAABIgJgGQgEgDgBgFQgBgFADgFIAAAAQADgEAFgBQAFgBAEADIAJAGIAAAAIAsAcQAEADACAFQABAFgCAEIgBABQgCAEgFABIgEABQgDAAgDgCgAHPGJIAAAAQgFgDgBgEQgCgFACgFQALgXAFgcQAAgFAEgEQADgDAGAAIABAAQAEAAADADQAEAEAAAFIAAABIAAACQgGAhgMAaQgCAFgFABIgEABIgGgBgAh6FIQgYgSgXgUQgEgDgBgFQAAgFADgEIAAgBQADgDAGgBQAFAAAEADIAuAlQAEADABAFQAAAGgDAEIAAAAQgDAEgFABIgCAAQgEAAgDgDgAHgESQgEgEAAgFQgBgbgHgfQgBgFADgEQADgEAFgCIAAAAQAFgBAEADQAFADABAFQAGAhACAdQAAAFgDAEQgEAEgFAAIAAAAIAAAAQgFAAgEgDgAjXD4IgkgjIAAAAIgIgIQgEgEAAgFQAAgFAEgEIAAAAQAEgDAFAAQAFAAADADIAIAIIABAAIAjAjQADAEABAFQAAAFgEAEIAAAAQgEADgFABIAAAAQgFAAgDgEgAkjCkQgGAAgDgEQgUgYgSgXQgDgFABgFQAAgFAFgDQAEgDAFABQAFAAADAFIAlAuQADAEAAAFQAAAFgEADIAAAAQgEADgEAAIgBAAgAHMChQgEgDgCgFQgIgbgMgcQgCgFACgFQACgEAFgCQAFgCAEACQAFACACAEQAMAdAJAdQABAFgCAEQgCAFgFACIAAAAIgEAAQgDAAgDgBgAltBFQgFgBgDgEIgagpIAAAAIgHgMQgCgFABgFQABgEAFgCQAEgDAFACQAFABADAEIAHALIAAAAIAZAoQADAEgBAFQgBAFgEADQgEACgDAAIgDAAgAGhAyQgFgBgCgFQgOgagQgZQgCgEABgFQABgFAEgDIABAAQAEgDAFABQAFACADAEQAQAaAOAaQACAFgBAFQgCAFgFACIAAAAIgGACIgDgBgAmrgjQgFgCgDgEQgNgcgLgbQgCgEACgFQABgFAFgCIABAAQAEgCAFACQAFACACAFQAKAaAOAbQACAEgCAFQgBAFgFACIgFACIgEgBgAFkg0QgFAAgDgFQgRgYgTgYQgDgEABgFQAAgFAEgDIABAAQADgDAGAAQAFABADAEQATAYARAZQADAEgBAFQgBAFgEADIAAABQgDACgEAAIgCgBgAnaiRQgEgDgBgFIgDgKIAAAAQgIgagEgYQgBgFADgEQADgEAGgBQAFgBAEADQAEADABAFQAEAXAHAYIAAAAIADALQABAFgDAEQgCAFgFABIAAAAIgEABQgDAAgDgCgAEbiSQgFgBgDgEIgpgsQgEgEAAgFQAAgFAEgEIAAAAQAEgDAFAAQAFAAAEADIApAuQAEAEAAAFQgBAFgEADIAAABQgEADgEAAIgBAAgADQjdQgVgVgXgTQgEgDAAgFQAAgGADgEIAAAAQAEgEAFAAQAFAAAEADQAXAUAVAVQAEAEAAAFQAAAFgDAEQgEAEgFAAIAAAAQgGAAgDgEgAnwkKQgEgDAAgGQAAgbAEgaIAAABIABgKQACgFAEgDQAEgCAFABIABAAQAFABACAFQADAEgBAFIgBAHIgBAAQgEAYABAZQAAAFgDAEQgEAEgFAAIAAAAIgBAAQgFAAgDgEgAB3krQgYgTgYgRQgEgDgBgFQgBgFADgFIAAAAQADgEAFgBQAFgBAEADQAZASAYATQAEAEABAFQABAFgDAEIgBAAQgDAEgFABIgBAAQgFAAgDgDgAAUlxQgZgQgZgNQgFgDgBgFQgCgFADgEIAAAAQACgFAFgBQAFgCAEADQAZANAbAQQAEADABAFQABAFgCAFQgDAEgFABIgDABQgDAAgDgCgAnUl7IgBAAQgFgDgBgFQgBgFACgEQAQgdAYgVQAEgEAFABQAFAAADAEIABAAQADAEAAAFQgBAFgEADQgVATgNAZQgDAEgEACIgEAAIgFgBgAhUmoQgYgLgYgIIAAAAIgFgCQgFgCgCgFQgCgEACgFIAAgBQACgEAFgCQAEgCAFACIAFABQAYAJAZALQAFACACAEQACAFgCAFQgCAFgFACIgFABIgFgBgAl6nJQgFgCgCgFIAAAAQgCgFACgFQACgFAFgBQAdgMAkgDQAFgBAEAEQADADABAFIAAAAQAAAFgDAEQgDAEgFABQggACgaALIgFABIgEgBgAjDnOQgegHgdgCQgFgBgDgEQgEgEABgEIAAgBQAAgFAEgDQAEgEAFABQAeACAhAIQAFABADAFQACAEgBAFIAAAAQgBAFgEADQgEACgDAAIgDgBg");
	this.shape_1.setTransform(13.8,199.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.8)").s().p("ADcHhQABgFgDgEQgDgFgFgBQgcgFgegJQgFgCgFADQgEACgCAEIgIgDIgYgJQABgEgBgFQgCgEgFgCQgbgLgagOQgFgCgFABQgFACgCAEIgegRQADgEgCgFQgBgFgEgDIgsgcIAAAAIgJgGQgFgDgFABQgFABgDAEIgbgUIAAAAQADgFgBgFQgBgFgEgDIguglQgEgDgFAAQgFABgDADIgbgYIAAAAQADgEAAgFQAAgFgEgEIgjgjIAAAAIgIgIQgEgDgFAAQgFAAgDADIgYgaQAEgDABgFQAAgGgDgDIglguQgEgFgFAAQgFgBgEADIgUgcQAEgDABgFQABgFgDgEIgZgoIAAAAIgHgLQgCgEgFgBQgFgCgFADIgQgfQAEgCACgFQACgFgDgEQgNgbgLgaQgCgFgFgCQgEgCgFACIgLggQAEgBADgFQACgEgBgFIgDgLIAAAAQgHgYgEgXQAAgFgFgDQgEgDgFABQgDgSAAgRQAFgBADgDQAEgEAAgFQgBgaAEgXIAAAAIABgHQACgFgDgEQgDgFgFgBIAAAAQAEgSAHgPQAEACAFgBQAFgCADgEQANgZAVgTQAEgDAAgFQAAgFgDgEQAPgLARgIQACAFAEACQAFACAFgCQAagLAfgCQAFgBAEgEQADgEAAgFIAAAAIAFAAIAdAAQAAAEADAEQADAEAGABQAcACAfAHQAFACAEgDQAFgDABgFIAAAAIAjAKQgBAFACAEQACAFAEACIAFACIABAAQAXAIAZALQAEACAFgCQAFgCACgFIAgAQIAAAAQgCAEABAFQACAFAEADQAZANAZAQQAFACAFgBQAFgBACgEIAXAOIAJAGIgBAAQgDAEABAGQABAFAEADQAZARAXATQAEADAGAAQAFgBADgEIAAAAIAbAWIAAAAQgEAEABAGQAAAFAEADQAWATAVAVQAEAEAFAAQAFgBAEgDIAIAIQgDAEAAAFQAAAFADAEIApAsQAEAEAFABQAFAAAEgDIAWAbIAAAAQgEADgBAFQAAAFADAEQATAYAQAYQADAEAFABQAFABAFgCIATAdQgEADgCAFQgBAFADAEQAQAZANAaQACAEAFACQAFABAEgCIAPAhQgEACgCAEQgCAFACAFQALAcAJAbQABAFAFADQAEACAFgBIACAFIAGAZQgFACgCAEQgDAEABAFQAGAfACAbQAAAFAEAEQAEADAEAAQABASgCASIgCAAQgFAAgEADQgDAEAAAFQgGAcgKAXQgCAFABAFQACAEAEADQgIAPgMAOQgDgDgFAAQgFgBgEAEIgJAJIgBAAQgQANgTAJQgEACgCAFQgCAFACAEQgQAGgSAEQgBgFgEgCQgEgEgFABQgPADgQAAIgbAAQgFAAgEADQgEAEAAAFQgRgBgSgDg");
	this.shape_2.setTransform(13.8,199.5);

	this.text_2 = new cjs.Text("%", "bold 25px 'Arial'");
	this.text_2.lineHeight = 8;
	this.text_2.lineWidth = 33;
	this.text_2.parent = this;
	this.text_2.setTransform(309.9,112.3);

	this.text_3 = new cjs.Text("15", "bold 35px 'Arial'");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 53;
	this.text_3.parent = this;
	this.text_3.setTransform(268.9,105.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AE2JOQgegCgfgFQgGgBgCgEQgDgFABgFIAAAAQAAgFAFgDQAEgDAFABQAeAGAdABQAFABADAEQAEAEgBAFQAAAFgEADQgDAEgFAAIgBgBgAFtJKQgEgDAAgFIAAAAQgBgFAEgEQADgEAFgBQAegCAbgJQAFgBAFACQAEACACAFIAAAAQABAFgCAFQgDAEgEACQgeAJggADIgCABQgEAAgEgEgAC8I4IgogNIgSgGQgFgCgCgFQgCgFACgEIAAgBQACgEAFgDQAFgCAEACIASAHIAmAMQAFABACAFQADAFgCAEQgBAFgFADQgDACgDAAIgDgBgAHkIoQgFgBgDgFIAAAAQgDgEABgFQABgFAFgDIARgNQANgLAKgNQADgDAGgBQAFgBAEAEQAEADAAAFQABAFgDAEQgMAPgPAMQgJAIgLAHQgDACgEAAIgCAAgABKINQgbgMgcgPQgEgCgCgFQgBgFACgFIABAAQACgEAFgCQAFgBAEACQAbAPAaALQAFADACAEQACAFgCAFIAAAAQgCAFgFACIgFABIgFgCgAggHUIgsgdIAAAAIgJgGQgEgCgBgGQgCgFADgEIABAAQACgEAFgBQAFgBAFACIAJAGIAAABIArAcQAEADACAFQABAEgDAFIAAAAQgDAFgFABIgDAAQgDAAgDgCgAIsHNIAAAAQgFgCgBgFQgCgFACgFQALgYAGgeQAAgFAFgDQAEgCAEAAIABAAQAFABADAEQADAFgBAFQgGAggMAbQgCAFgFACIgFABIgFgBgAiGGOIgwglQgEgEAAgFQgBgFAEgEIAAAAQADgEAFgBQAFAAAEADIAvAlQAEADABAFQAAAFgDAEQgDAFgFAAIgCAAQgEAAgDgCgAJHFYQgFAAgEgDQgEgEAAgFQAAgcgEgeQgBgFADgFQADgDAFgBIAAAAQAFgBAEADQAEADABAFQAFAgAAAeQAAAFgDAEQgEADgFAAgAjiFCIgsgpQgEgDAAgFQAAgFAEgEQADgEAGAAQAFAAAEADIAqAoQAEAEAAAFQABAFgEAEIAAAAQgDAEgFAAIgBAAQgFAAgDgDgAkxDwQgFAAgEgEIgogtQgDgDAAgGQABgFAEgDIAAAAQAEgDAFAAQAFAAADAEIAoAsQADAEAAAFQAAAGgEADQgEADgFAAIAAAAgAIwDgQgFgCgBgFIgEgOIAAAAQgGgVgHgVQgCgFADgFQACgEAFgCIAAAAQAFgCAEADQAFACACAFQAHAWAGAVIAAAAIAEAOQABAFgCAEQgDAFgFABIAAABIgDAAQgDAAgDgCgAl/CWQgFgBgDgEQgTgYgRgXQgDgFABgFQABgFAEgDIAAAAQAEgDAGABQAFABADAEQAQAXASAYQADAEAAAFQgBAFgEADIAAAAQgEADgEAAIgBAAgAILBxQgFgCgCgFQgMgagNgbQgDgFACgFQABgFAFgCIAAAAQAFgCAFABQAFACACAEQAOAcAMAbQACAFgCAFQgCAFgFACIAAAAIgEABIgFgBgAnEA0QgGgBgCgEIgNgUIAAAAIgUghQgDgEACgFQABgFAFgDQAEgCAFABQAFABADAFIATAgIAAAAIAMATQADAEgBAFQgBAFgEADIgBABQgDABgDAAIgCAAgAHWAHQgFgBgDgFIgJgOIAAABIgXgkQgDgEABgGQABgFAEgDIABAAQAEgCAFABQAFABADAEIAXAkIABAAIAIAPQADAEgBAFQgBAEgEADIgBAAQgDACgDAAIgDAAgAoCg1QgFgBgCgFQgOgcgLgbQgCgFACgFQACgFAFgCQAFgCAFACQAEACACAFQALAbAOAbQACAFgCAEQgCAFgEADIAAAAIgGABIgEgBgAGUhcQgFgBgDgEIgkgvQgDgEAAgFQABgFAEgDQAEgEAFABQAFABAEAEIAkAvQADAEgBAFQgBAFgEADIAAAAQgDADgEAAIgCAAgAowilQgFgCgCgFIgGgXIgJgkQgCgFADgEQADgFAFgBIAAAAQAFgBAFADQAEADABAFIAJAjIAGAVQACAFgDAFQgCAEgFACIgEABQgDAAgCgCgAFKi6QgGAAgDgEIgpgsQgCgDgBgDQgEgBgDgDQgUgWgWgTQgEgEAAgFQAAgFADgEIAAAAQAEgEAFAAQAFAAAEADQAWAUAVAXQADADABADQADABADADIAqAtQADAEAAAFQgBAFgDADQgEADgFABIAAgBgApMkbQgEgDAAgFQgDghABgeQABgFAEgDQADgEAGAAQAFABADAEQAEAEgBAFQgBAcADAeQAAAFgDAEQgDAEgFABIAAAAIgCAAQgEAAgEgDgAC3lGQgXgTgXgTQgFgDAAgFQgBgFADgEIABAAQADgEAFgBQAFgBAEADQAYATAYAUQADAEABAFQAAAFgDAEQgEAEgFAAIgBABQgEAAgEgEgABZmQIgZgRIgBAAIgXgQQgFgCgBgFQgBgFADgFIAAAAQADgEAFgBQAFgBAEACIAYAQIAAAAIAaASQAEADABAFQABAFgDAEQgDAEgFABIgDAAQgDAAgDgCgAo/mRIgBAAQgFgBgCgFQgDgEABgFQAJggAOgbQADgEAFgCQAFgBAEACIABABQAEACABAFQACAFgDAEQgNAZgIAcQgBAFgEADQgEABgDAAIgCAAgAgKnPQgbgPgagNQgFgCgBgFQgCgFACgFIAAAAQACgFAFgBQAFgCAFACQAbANAbAQQAEADABAFQACAFgDAEQgDAFgDABIgEAAQgDAAgDgBgAoLn7QgEgDAAgGQAAgFAEgDIAKgKIABAAQATgQAXgMQAEgCAFABQAFACACAFIABAAQACAFgCAEQgBAFgFADQgUAKgSAOIAAABIgIAHQgEAEgFAAQgFAAgEgEgAh2oEIgmgOIAAAAIgOgFQgFgCgCgFQgDgEACgFIAAAAQACgFAFgCQAEgDAFACIAOAFIAAAAIAoAPQAEACACAFQACAEgCAFIAAAAQgCAFgEACIgFABIgFgBgAjlooQgfgHgcgDQgGgBgDgEQgDgEAAgFIAAAAQABgFAEgDQAEgEAFABQAeADAhAHQAFABACAFQADAEgBAFIAAABQgBAEgEADQgEACgDAAIgDAAgAmeowQgFgCgBgFIAAgBQgBgEADgFQADgEAFgBQAbgGAegCIABAAIAEAAQAFABAEADQADAEAAAEIAAABQAAAFgDAEQgEADgFAAIgDAAQgdACgZAFIgDABQgDAAgDgDg");
	this.shape_3.setTransform(296.4,123.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.8)").s().p("AFDJDQAAgGgDgDQgEgEgFgBQgcgCgegFQgGgBgEADQgEADgBAFIgjgJQABgFgCgEQgDgFgFgBIgmgMIgRgHQgFgCgFACQgFACgCAFIAAABIgggOIAAAAQACgFgBgFQgCgFgFgCQgbgLgagPQgFgCgFABQgFACgCAEIgdgRQACgFgBgEQgBgFgFgDIgrgcIAAgBIgJgGQgEgDgFACQgFABgDAEIgcgVQADgEgBgFQgBgFgEgDIguglQgEgDgGAAQgFABgDAEIAAAAIgagWIAAAAQAEgEAAgFQgBgGgEgDIgqgoQgEgDgFAAQgFAAgEAEIgTgUIgHgHQAEgEAAgFQAAgFgDgEIgngsQgEgEgFAAQgFgBgEAEIAAAAIgWgbIABAAQAEgDAAgFQABgFgEgEQgSgYgQgXQgDgEgFgBQgFgBgFADIAAAAIgUgdIABgBQAFgDABgFQAAgFgCgEIgNgTIAAAAIgTggQgDgFgFgBQgEgCgFADIgQgeIAAAAQAFgDABgFQACgFgCgEQgNgbgLgbQgCgFgFgCQgFgCgEACIgNghQAFgCADgEQACgFgBgFIgHgVIgJgjQgBgFgEgDQgEgDgFABIgGgiQAFgBADgEQAEgEgBgFQgDgeACgcQAAgGgDgDQgEgEgFgBIADgWIACgNQAFABAEgCQAEgDACgFQAHgcAOgZQACgEgBgFQgCgFgEgCQAKgPALgNQAEAEAFAAQAFAAAEgEIAIgHIABgBQARgOAUgKQAFgDACgFQABgEgCgFQAQgHASgEQABAFAEACQAEADAFgBQAZgFAdgCIADAAQAFAAAEgDQAEgEAAgFIAAgBQARAAATACIAAAAQgBAFADAEQAEAEAFABQAdADAeAHQAGABAEgDQAEgDABgEIAkAKQgBAFACAEQACAFAFACIAOAFIAAAAIAmAOQAFACAFgCQAFgCACgFIAhAPQgDAFACAFQACAEAEADQAbAMAaAQQAFACAFgBQAEgCACgEIAfASIgBAAQgDAFABAFQACAFAEACIAYAQIAAAAIAZARQAEADAFgBQAFgBADgEIAdAWIAAAAQgDAEAAAFQABAFAEADQAYATAXATQADAEAGgBQAFAAADgEIAbAYIAAAAQgEAEAAAFQAAAFAEAEQAWATAVAWQADADADABQABADADADIAoAsQAEAEAFAAQAFABAEgEIAYAcQgFADAAAFQgBAFAEAEIAjAvQADAEAFABQAFAAAEgDIABAAIAUAdIAAAAQgFADgBAFQgBAFADAFIAYAkIAAgBIAJAOQADAEAFACQAEABAEgDIARAfQgEACgCAFQgBAFACAFQAOAbALAaQACAFAFACQAFACAFgCIAMAgQgFACgCAEQgCAFABAFQAIAVAFAVIAAAAIAEAOQACAFAEACQAEADAFgBIAHAiQgFAAgDAEQgDAEABAGQAEAeABAcQAAAFADAEQAEADAFAAQAAATgDARQgEgBgEADQgEADgBAFQgGAegLAYQgCAFACAFQACAEAEADQgIAPgKAPQgEgEgFABQgFAAgEAEQgKANgMALIgSANQgEADgCAFQgBAFADAEQgPAIgQAHQgCgFgEgCQgFgDgFACQgaAIgeADQgGABgDAEQgDAEAAAFIgIAAIgSABIgLAAg");
	this.shape_4.setTransform(296.4,123.1);

	this.text_4 = new cjs.Text("%", "bold 25px 'Arial'");
	this.text_4.lineHeight = 8;
	this.text_4.lineWidth = 33;
	this.text_4.parent = this;
	this.text_4.setTransform(174.9,140.9);

	this.text_5 = new cjs.Text("75", "bold 40px 'Arial'");
	this.text_5.lineHeight = 19;
	this.text_5.lineWidth = 53;
	this.text_5.parent = this;
	this.text_5.setTransform(131.5,129.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AGcNCQgGgBgEgEQgFgFABgGIAAgBQAAgGAFgEQAEgEAHABQAbABAagBIAAAAIAHAAQAGAAAFAFQAEADAAAGIAAABQAAAGgEAFQgFAEgGAAIgGAAIgBAAIgWAAIghAAgAFeM6QgdgFgfgIQgHgCgDgFQgDgFACgGQABgGAGgDQAFgEAGACQAeAIAcAFQAGABAEAFQAEAFgBAGIAAAAQgCAGgFAEQgEADgEAAIgDgBgAIOM4QgGgEgBgGIAAAAQgBgGADgFQAEgFAGgCQAcgGAagKQAFgDAGADQAFACADAFIAAABQACAGgCAFQgCAGgGACQgcAMgfAHIgDAAQgEAAgEgCgADnMcIgigMIgYgKQgGgDgCgFQgDgGADgFIAAgBQACgFAGgDQAFgCAGACIAYAKIAhALQAFACADAGQADAFgCAGQgCAGgFADQgEACgDAAIgFgBgAKAMLQgGgBgDgFIgBAAQgDgFABgGQABgGAFgEQANgJAMgKIAAAAIARgRQAEgFAGAAQAGgBAFAEIAAABQAEAEABAGQAAAGgEAFIgTATIAAAAQgNAMgOAKQgEADgFAAIgDgBgAB1LuIg3gbQgFgDgCgGQgCgGADgFIAAgBQADgFAGgCQAGgCAFADIA2AbQAFACACAGQACAGgCAFIAAABQgDAFgFACIgGABIgGgBgAAKK1IgyggQgFgDgBgGQgCgHAEgFQADgFAGgBQAGgBAGADIAwAfQAFADACAGQABAGgDAGIAAAAQgDAFgGACIgEAAQgEAAgDgCgALLKyIAAAAQgFgDgCgGQgBgGADgFQAOgZAKgbQACgGAGgDQAFgDAGADIAAAAQAGACADAFQACAGgCAGQgLAegPAbQgDAFgGACIgEAAQgEAAgEgCgAhZJzIgLgIIAAAAIgqgeQgFgEAAgGQgBgHADgEQAEgFAGgBQAGgBAFAEIApAeIAAAAIALAIQAFAEABAGQABAGgDAFIgBAAQgDAFgGABIgDAAQgFAAgDgDgAL5JEIAAAAQgGgCgEgFQgDgFABgGIADgNQACgVACgWQAAgGAFgEQAEgEAGAAIABAAQAGABAEAEQAEAFAAAGQgCAXgDAWIgCAPQgCAGgFAEQgEACgEAAIgDAAgAi+InIgugnQgEgEgBgGQAAgHAEgEQAEgFAGAAQAHgBAEAEIAtAnQAFAEABAGQAAAGgDAFIgBAAQgEAFgGABIgBAAQgFAAgFgEgAkXHYIgrgpQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFIAqAoQAFAEAAAHQAAAGgEAEQgFAFgGAAIAAAAQgGAAgEgEgAL5HLQgFgFAAgGQgCgcgEgeQAAgHAEgFQADgEAGgBIAAAAQAHgBAFAEQAEAEABAGQAEAfACAeQAAAGgEAFQgEAEgGABIgBAAIAAAAQgGAAgEgEgAliGJQgGAAgEgFIgeghIAAAAIgNgOQgEgFAAgGQABgGAFgEQAEgEAHAAQAGABAEAEIAMAOIAAAAIAeAhQAEAFAAAGQgBAGgEAEIAAAAQgFAEgFAAIgBAAgALrFVQgGgDgBgGIgLguIAAAAIgCgIQgCgGADgFQADgGAGgCIABAAQAFgCAFADQAGADACAGIADAKIgBAAIAMAuQABAGgDAGQgEAFgGABIAAAAIgDABQgFAAgDgDgAm0EtQgGgBgEgFIgmgvQgDgFABgGQAAgGAFgEIAAAAQAFgEAGABQAGABAEAFIAlAuQAEAFgBAGQAAAGgFAEIAAAAQgEAEgGAAIgBAAgALNDlQgGgDgBgGIgVg4QgCgGADgFQACgGAGgCIAAgBQAGgCAFADQAGACACAGIAVA5QACAGgDAGQgDAFgFACIgFABQgEAAgDgBgAn+DOQgGgBgEgEQgSgZgRgaQgDgFABgGQABgGAGgDQAFgEAGABQAGACADAFIAiAxQAEAFgBAGQgBAGgFAEIAAAAQgEACgFAAIgCAAgAKjB1QgFgCgDgGIgZg1QgDgGACgGQACgGAGgCIAAAAQAFgDAGACQAGACADAFIAaA3QACAGgCAGQgDAFgFADIgGABIgGgBgApCBrQgGgBgDgFIggg2QgDgFABgGQACgGAFgDIABgBQAFgDAGACQAGACADAFIAgA1QADAFgCAGQgBAGgFADQgEADgEAAIgEgBgAJwAKQgGgCgDgFIgOgXIAAAAIgQgbQgDgFACgGQABgGAGgDIAAAAQAFgEAGACQAGACADAFIAQAbIAAAAIAOAYQADAGgCAFQgCAGgFADQgDACgEAAIgEgBgAqAACQgGgCgCgEIgbg2QgDgGACgFQACgGAGgDQAFgDAGADQAGACADAFIAaA1QADAFgCAGQgCAGgFACIAAAAQgEACgDAAIgFgBgAI0haQgGgCgDgFIgigyQgEgFACgGQABgGAFgDIAAgBQAFgDAGABQAGABAEAFIAiAzQADAFgBAGQgBAGgGAEIAAAAQgEACgEAAIgDAAgAq0hoQgFgDgDgFIgXg4QgCgGADgFQACgGAGgCIAAAAQAGgDAFADQAGACACAGIAXA3QACAFgCAGQgDAGgFACIAAAAIgGACIgGgBgAHwi+QgGgBgEgEIgkgwQgEgFAAgGQABgGAFgEIAAAAQAFgEAGABQAGAAAEAFIAlAxQAEAEgBAHQgBAGgFAEIAAAAQgEACgEAAIgDAAgArejYQgGgDgCgFQgJgbgGgaIgCgHQgCgGADgGQADgFAGgCIABAAQAFgBAGADQAFADACAGIACAHIAAAAQAGAZAJAbQABAFgCAGQgDAFgGACIgFABQgDAAgDgCgAGmkbQgGgBgEgFIgogtQgDgEgBgEQgEgBgEgEIgogqQgEgFAAgGQAAgGAEgFQAFgEAGAAQAGAAAFAFIAoArQAEAEAAAEQAFABADAEIApAuQAEAFgBAGQAAAGgFAEIAAAAQgEAEgGAAIgBAAgAr+lOQgFgEgBgGQgGgegDgeQgBgGAEgFQAEgFAGAAQAGgBAFAEQAFAEABAGQADAcAFAeQABAGgDAFQgEAFgFABIgBAAIgDABQgEAAgEgDgAEWmwIgsgpQgFgEAAgGQAAgGAEgFQAEgFAGAAQAGAAAFAEIAsApQAFAFAAAGQAAAGgEAEIgBABQgEAEgGAAIAAAAQgGAAgEgEgAsMnGQgFgFAAgGQAAggADgdQAAgHAFgDQAFgEAGAAQAGABAEAFQAEAEAAAHQgDAcAAAeQAAAGgEAFQgEAEgGAAIgBAAQgGAAgEgEgAC9oAIgvgnQgFgEgBgGQgBgGAEgFQAEgFAGgBQAGgBAFAEIAwAoQAFAEAAAGQABAGgEAFQgEAFgGAAIgCAAQgFAAgEgDgAr5o3IAAAAQgHgCgDgFQgDgFABgGQAIggALgcQACgFAGgDQAGgCAGACIAAABQAFACADAFQACAGgCAGQgLAZgHAdQgBAGgFAEQgEACgEAAIgDAAgABepLIgJgHIAAAAIgogbQgFgEgBgGQgBgGADgFIAAAAQAEgGAGgBQAGgBAFAEIApAcIAAAAIAJAHQAFAEABAGQAAAGgDAFIAAAAQgEAFgGABIgCAAQgFAAgEgDgAgDqOIgzgeQgGgEgCgFQgBgGADgFIAAgBQADgFAGgCQAGgCAFAEIA0AeQAFAEABAGQACAGgDAFIgBABQgDAEgGACIgDAAQgEAAgDgCgArQqmQgGgEgBgGQgBgGADgFQASgaAWgWQAEgEAHAAQAGAAAEAFIAAAAQAEAEAAAGQAAAGgEAFQgUATgQAYQgDAFgGABIgDAAQgFAAgDgCgAhsrIQgbgNgbgMQgGgCgCgGQgCgFACgGQACgGAGgCQAGgDAGADQAbALAcAOQAGADACAGQACAGgDAFIAAABQgDAFgFACIgFABQgEAAgDgCgAjYr2QgdgLgcgHQgGgCgDgGQgDgFACgGIAAAAQACgGAFgDQAFgDAGACQAdAIAeAKQAGACACAGQADAGgCAGIAAAAQgCAFgGADQgDACgDAAIgFgBgAp0r3QgGgCgDgFIgBAAQgDgGACgGQABgGAGgDQAbgQAfgKQAFgCAGADQAGACACAGQACAGgDAGQgDAFgGACQgcAKgYAOQgEACgDAAIgEAAgAlMsXQgegHgcgCQgGgBgEgFQgEgFAAgGQABgGAFgEQAFgEAGABQAeADAgAGQAFACAEAFQADAFgBAGIAAAAQgBAGgFAEQgEACgFAAIgDAAgAoHshQgFgEgBgGQgCgGAEgFQAEgFAGgBQAWgEAYgBIASAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgGABIgQAAIAAAAQgXABgUADIgDABQgFAAgDgDg");
	this.shape_5.setTransform(161.4,147.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.698)").s().p("AHkMqQgEgFgGAAIgHAAIgBAAQgaABgbgCQgGAAgFAEQgEAEgBAGIgegDQABgGgDgFQgEgFgGgBQgdgFgdgIQgGgCgGADQgFAEgCAGIgcgJQACgGgDgFQgDgGgGgCIghgLIgXgKQgGgCgGACQgGADgCAFIAAABIgcgNIAAAAQADgFgCgGQgCgGgGgDIg1gaQgGgDgGACQgFACgDAFIgagPQADgFgCgGQgBgGgFgDIgxgfQgFgDgGABQgGABgEAFIgYgRQADgEAAgGQgBgGgFgEIgLgIIAAAAIgpgeQgFgEgGABQgGABgEAFIgYgTQAEgFgBgGQAAgGgFgEIgtgnQgFgEgGABQgGAAgEAEIgWgTQAFgEgBgHQAAgGgEgEIgrgpQgEgEgGAAQgGAAgFAEIgUgVQAEgEAAgFQABgGgFgFIgeghIAAAAIgMgOQgEgEgGgBQgGAAgFAEIgTgXQAEgEABgGQAAgGgEgFIgkguQgEgFgGgBQgGgBgFAEIAAAAIgSgXQAFgEABgGQAAgGgDgGIgigwQgEgFgGgCQgGgBgFADIgQgYQAFgDACgGQABgGgDgGIggg0QgDgFgGgCQgGgCgFADIgOgaQAFgBACgGQABgGgCgFIgbg1QgCgGgGgCQgGgCgGADIgMgbIAAAAQAGgCACgGQADgGgDgFIgWg3QgCgGgGgCQgGgDgFACIgKgbQAGgCADgFQADgGgCgFQgIgbgHgZIAAgBIgCgHQgBgFgGgEQgFgCgGABIgGgdQAGgBADgFQAEgFgBgGQgGgegDgcQAAgGgFgEQgFgEgGAAIgCgdQAGAAAFgFQAEgEAAgGQgBgeADgcQABgHgEgFQgEgEgGgBIABgKIADgRQAGABAFgDQAFgEACgGQAHgdAKgZQACgGgCgGQgCgFgGgDIAOgaQAFAEAGgBQAGgBAEgGQAPgXAUgTQAFgFAAgGQAAgGgEgEQAMgLAOgJQADAFAGABQAGACAFgDQAZgOAcgKQAFgCADgFQADgGgCgGIAegHQABAGAFAEQAFADAGgBQAVgDAWgBIAAAAIAQAAQAGgBAFgEQAEgEAAgGIAfABQgBAGAEAFQAEAFAGABQAdACAeAHQAGABAFgDQAFgEACgGIAAAAIAfAHIgBABQgBAGADAFQADAGAGACQAbAHAdALQAGACAGgDQAFgDACgFIAcALQgDAGADAFQACAGAGACQAbAMAbANQAFADAGgCQAGgCADgGIAbAPQgDAFACAGQACAFAFAEIA0AeQAEADAGgCQAFgBAEgEIAZAQQgEAFACAGQABAGAFAEIAoAbIgBAAIAJAHQAFAEAGgBQAGgBAEgFIABgBIAYATQgEAFAAAGQABAGAFAEIAvAnQAFAEAGgBQAGgBAEgEIAXAUQgEAFAAAGQABAGAEAEIAsApQAEAEAHAAQAGAAAEgEIAWAVQgFAFAAAGQAAAGAFAFIAoAqQADAEAFABQAAAEAEAEIAnAtQAEAFAHAAQAGABAEgEIATAXQgEAEgBAGQgBAGAEAFIAlAvQAEAFAGABQAGABAEgDIASAYQgFAEgBAGQgBAGAEAFIAhAyQAEAFAGACQAFABAGgDIAPAYQgFAEgCAGQgBAGADAFIAQAbIAAAAIANAXQADAFAGACQAGACAFgDIAOAbIAAAAQgGACgBAGQgCAGACAGIAaA1QACAGAGACQAGACAFgCIAMAbIgBABQgFACgDAGQgCAFACAGIAUA4QACAGAGACQAFADAGgCIAJAeIgBAAQgGACgDAGQgCAFACAGIACAIIAAAAIALAuQABAGAFADQAFAEAGgCIAFAeQgFABgEAEQgEAFABAGQAEAfABAcQABAGAEAFQAFAEAGgBIAAAeQgGAAgEAEQgFAEgBAGQgBAWgDAVIgCANQgCAGAEAFQADAFAGACIAAAAIgHAdQgGgDgFADQgGADgCAGQgKAbgPAYQgDAGACAGQABAGAGADQgJANgJALIgBAAQgEgEgGABQgHAAgEAEIgRASIAAAAQgMAKgMAJQgFAEgBAGQgCAGAEAFQgNAIgOAGQgCgFgFgCQgGgDgGADQgZAKgdAGQgGACgDAFQgEAFACAGIgeAEQgBgGgEgDg");
	this.shape_6.setTransform(161.4,147.5);

	this.instance = new lib.M03_TMR_TABanimultax();
	this.instance.parent = this;
	this.instance.setTransform(155.2,157.8,0.686,0.686,0,0,0,312,157.7);

	this.text_6 = new cjs.Text("Potencial básico\n", "18px 'Arial'", "#333333");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 19;
	this.text_6.lineWidth = 97;
	this.text_6.parent = this;
	this.text_6.setTransform(-100.2,209.7,0.853,0.853);

	this.text_7 = new cjs.Text("Potencial medio", "18px 'Arial'", "#333333");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 19;
	this.text_7.lineWidth = 97;
	this.text_7.parent = this;
	this.text_7.setTransform(-100.2,143.4,0.853,0.853);

	this.text_8 = new cjs.Text("Alto Potencial ", "18px 'Arial'", "#333333");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 19;
	this.text_8.lineWidth = 97;
	this.text_8.parent = this;
	this.text_8.setTransform(-100.2,70.8,0.853,0.853);

	this.text_9 = new cjs.Text("Desempeño alto\n", "18px 'Arial'", "#333333");
	this.text_9.lineHeight = 22;
	this.text_9.lineWidth = 159;
	this.text_9.parent = this;
	this.text_9.setTransform(243.6,22.9,0.853,0.853);

	this.text_10 = new cjs.Text("Desempeño medio", "18px 'Arial'", "#333333");
	this.text_10.lineHeight = 22;
	this.text_10.lineWidth = 159;
	this.text_10.parent = this;
	this.text_10.setTransform(90.9,22.9,0.853,0.853);

	this.text_11 = new cjs.Text("Desempeño bajo", "18px 'Arial'", "#333333");
	this.text_11.lineHeight = 22;
	this.text_11.lineWidth = 276;
	this.text_11.parent = this;
	this.text_11.setTransform(-46.9,22.9,0.853,0.853);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKggg4g4Qg4g4gghKQgghMAAhTQAAhTAghMQAghJA4g5QA4g4BKgfQBMggBSAAQBUAABLAgQBKAfA5A4QA4A5AfBJQAgBMAABTQAABTggBMQgfBKg4A4Qg5A4hKAgQhLAghUAAQhSAAhMggg");
	this.shape_7.setTransform(-151.3,314.2,0.749,0.749);

	this.instance_1 = new lib.AS_LG_153ssanimultax("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145.6,301.2,0.749,0.749,0,0,0,24.3,24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_8.setTransform(-151.3,313.9,0.749,0.749);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_9.setTransform(-151.1,314.2,0.288,0.288);

	this.text_12 = new cjs.Text("Una sesión típica de Talent Management Review, da como resultado una distribución de colaboradores similar a la que se muestra en el diagrama.", "16px 'Arial'", "#333333");
	this.text_12.lineHeight = 15;
	this.text_12.lineWidth = 510;
	this.text_12.parent = this;
	this.text_12.setTransform(-112.9,292.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhLBMQgggfAAgtQAAgsAggfQAfggAsAAQAtAAAfAgQAgAfAAAsQAAAtggAfQgfAggtAAQgsAAgfggg");
	this.shape_10.setTransform(473.6,125.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgSB5IACgLQADAAAPABIAAAMIgUgCgAAQBuIASgEIAEALIgUAEgAg1BuIAFgKIARAGIgDAMQgLgEgIgEgAAwBlIAQgJIAGAJIgRAKgAhTBZIAIgIIAOALIgGAKIgQgNgABLBSIANgOIAJAHIgOAQgAhpA8IAKgFIAKAPIgJAHgABgA5IAEgJIAEgIIALAEIgEAJQgCAFgDAFgAh2AaIALgDIAFASIgLAFgABsAZIACgJIABgJIAMACIgDAUgAh6AAIABgJIAMABIgBAIIABAJIgMACgABtgYIALgEIADAVIgMABgAh2gZIAFgUIALAFIgFARgABkgvIgEgJIAKgFQADADACAGIAEAJIgLAEgAhpg7IALgRIAJAHIgKAPgABMhRIAHgIQAGADACADIAGAIIgJAHgAhThYIAQgOIAHAKQgJAHgGAGgAAwhkIAFgKQAHADAKAHIgGAJIgQgJgAg1huIATgHIAEAMIgSAHgAAQhtIACgMIAUAFIgEALIgSgEgAgSh5QAJgBALAAIAAAMIgSABg");
	this.shape_11.setTransform(473.4,125.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3F3231").s().p("Ah0BWQgEgDgEABQgCAAgCgHQgFgPgHgnQgFghAcgVQgCgPAGgPQAIgUAXgKIgHAJQgGALgCAIIABACIABgBQANgPAZgMQAngSA3gBIgMACQgOAEgJAFQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQBEgHAkAYIgPgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABABAAQARAIANAMQAUATAAAbIgMgOQgBgBAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAHAVgFAUIgBgEQgCgEgFgEQgBAggJArQgKgBgGALQgDAFgCAFQABgPgBgSQgBgjgKgPQgYgkhDABQghABgdAIIgIAQQgLATgJALQgCAIgDA+QgBgRgJgGg");
	this.shape_12.setTransform(472.7,185.9,0.788,0.788);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3F3231").s().p("AAfAUIgBAAQgFgBgFgDQgGgFAAgHIAAgDQgFgDgGAAIgBAAQgEgBgHAEIAAADQAAAHgGAFQgEADgGABIAAAAIgxAAIgCgBQgHgDgEgGQgDgDAAgEIAAgDIgOABIgDgJIASgCQAEgIALgBIABAAIAtAAQAOAAAEAKQAHgDAFAAQAHAAAGADQAGgKAMAAIAuAAIABAAQALACADAHIAOABIgCAHIgKACIAAADQAAAKgPAGIgBABgAAWgJIAAAOQAAAGAHAEIA1AAQAGgCAAgIIAAgOQgCgEgFAAIg1AAQgGADAAABgAhSgJIAAAOQAAAGAHAEIA1AAQAGgCAAgIIAAgOQgCgEgFAAIg2AAQgFACAAACg");
	this.shape_13.setTransform(471.9,192.5,0.788,0.788);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8AF93").s().p("AAPAAIgKgCIgEAAIgMACIgPAEQAFgEAIgCQAHgDAHAAIAEAAIAEABIAHABQAIAEADAFQgFgFgHgBg");
	this.shape_14.setTransform(467.9,191.7,0.788,0.788);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E1BB93").s().p("AgSCRIgegRQghgXgSggIgBgDIgBgVIgBAAQgEAAgEgFQgDgFgCgOIgEgZQgCgJAAgGQAAgJACAAQACgBAFADIADAFIACgBQgEgRAAgUQAAgrAXgMQAKgJAPgKQAegRAcgBIADAAIADAAQAdgBAfATIAZATQAYAMAAArQAAAUgEARIgBAEIADgCQAHgJAEACQAFADgEASIgEAaIgFAUIAAAAIgCADQgDACgEAAIAAAAIgDAZIgBAEQgfAsgsAWIgBABQgMADgKAAQgKAAgIgDg");
	this.shape_15.setTransform(472.1,192.4,0.788,0.788);

	this.text_13 = new cjs.Text("Cambios de cuadrante", "bold 18px 'Arial'");
	this.text_13.lineHeight = 20;
	this.text_13.lineWidth = 219;
	this.text_13.parent = this;
	this.text_13.setTransform(490.6,182.2,0.788,0.788);

	this.text_14 = new cjs.Text("Distribución típica \nde los colaboradores", "bold 18px 'Arial'");
	this.text_14.lineHeight = 20;
	this.text_14.lineWidth = 206;
	this.text_14.parent = this;
	this.text_14.setTransform(494.7,109.5,0.788,0.788);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B3B3B3").p("AOWDoI8rAAQgoAAgbgbQgcgcAAgoIAAkSQAAgnAcgbQAbgcAoAAIcrAAQAoAAAcAcQAbAbAAAnIAAESQAAAogbAcQgcAbgoAAg");
	this.shape_16.setTransform(552.1,190.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E6E6").s().p("AuVDoQgnAAgcgbQgcgcAAgoIAAkSQAAgnAcgbQAcgcAnAAIcsAAQAnAAAbAcQAcAbAAAnIAAESQAAAogcAcQgbAbgnAAg");
	this.shape_17.setTransform(552.1,190.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B3B3B3").p("AOXDoI8tAAQgnAAgbgbQgcgcAAgoIAAkSQAAgnAcgbQAbgcAnAAIctAAQAnAAAbAcQAcAbAAAnIAAESQAAAogcAcQgbAbgnAAg");
	this.shape_18.setTransform(552.1,125.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#97AF68").s().p("AuVDoQgoAAgbgbQgcgcAAgoIAAkSQAAgnAcgbQAbgcAoAAIcsAAQAmAAAcAcQAcAbAAAnIAAESQAAAogcAcQgcAbgmAAg");
	this.shape_19.setTransform(552.1,125.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgNgCIAKgLIAIAJIAJAJIgMAJg");
	this.shape_20.setTransform(482.1,117.7,0.788,0.788);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgGAEQgCgGgDgEIAMgHQADAFADAGIAFALIgNAFg");
	this.shape_21.setTransform(484,120.6,0.788,0.788);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgIgJIAOgDIADAYIgOABg");
	this.shape_22.setTransform(485,123.9,0.788,0.788);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgMgFQALgCAOAAIgBAOQgOAAgIABg");
	this.shape_23.setTransform(472.6,114,0.788,0.788);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgNAFIACgOIAZAGIgFANIgWgFg");
	this.shape_24.setTransform(476.1,114.3,0.788,0.788);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgOABIAHgMQAIADANAIIgIANIgUgMg");
	this.shape_25.setTransform(479.3,115.5,0.788,0.788);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgMAHIAOgUIALAJIgNASg");
	this.shape_26.setTransform(463.8,119,0.788,0.788);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgNADIATgQIAIANQgLAHgGAHg");
	this.shape_27.setTransform(466.2,116.5,0.788,0.788);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgNgBQAJgFAOgEIAEANQgKADgLAGg");
	this.shape_28.setTransform(469.2,114.8,0.788,0.788);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgKgKIAOgDIAHAVIgNAGg");
	this.shape_29.setTransform(462.3,129.1,0.788,0.788);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AgHAAIABgMIAOABIgBALIABALIgOACg");
	this.shape_30.setTransform(461.8,125.7,0.788,0.788);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgKALIAIgYIANAFIgHAWg");
	this.shape_31.setTransform(462.3,122.1,0.788,0.788);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgNACIAHgMQAGADAOAFIgEAOQgNgFgKgFg");
	this.shape_32.setTransform(469.1,136.5,0.788,0.788);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgNgCIAKgLIARAOIgIAMIgTgPg");
	this.shape_33.setTransform(466.1,134.8,0.788,0.788);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgMgGIAMgHIANASIgMAJg");
	this.shape_34.setTransform(463.8,132.3,0.788,0.788);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgOAAIAUgLIAIALQgOAIgHAFg");
	this.shape_35.setTransform(479.3,135.8,0.788,0.788);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgNgEIAWgFIAFANQgOAEgLACg");
	this.shape_36.setTransform(476.1,137,0.788,0.788);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgMAHIADgOIAWACIAAAOIgZgCg");
	this.shape_37.setTransform(472.6,137.3,0.788,0.788);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgIAKIACgLIABgLIAOABIgDAYg");
	this.shape_38.setTransform(485,127.4,0.788,0.788);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AgLAHIAFgKIAFgKIANAFIgFALQgDAGgDAFg");
	this.shape_39.setTransform(484,130.8,0.788,0.788);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AgNADIAPgQIAMAJIgRASg");
	this.shape_40.setTransform(482,133.6,0.788,0.788);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#B3B3B3").p("AOWDoI8rAAQgoAAgbgbQgcgcAAgoIAAkSQAAgnAcgbQAbgcAoAAIcrAAQAoAAAcAcQAbAbAAAnIAAESQAAAogbAcQgcAbgoAAg");
	this.shape_41.setTransform(552.1,190.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#97AF68").s().p("AuVDoQgnAAgcgbQgcgcAAgoIAAkSQAAgnAcgbQAcgcAnAAIcsAAQAnAAAbAcQAcAbAAAnIAAESQAAAogcAcQgbAbgnAAg");
	this.shape_42.setTransform(552.1,190.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,0,0,10,true).p("ABMgWIAzAAIh/jKIh+DKIAzAAIAAD7ICXAAg");
	this.shape_43.setTransform(172.9,116);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9933").s().p("AhLDjIAAj7IgzAAIB+jKIB/DKIgzAAIAAD7g");
	this.shape_44.setTransform(172.9,116.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").ss(1,0,0,10,true).p("ADihLIqQAAIAACXIKQAAIAAAzIDJh/IjJh+g");
	this.shape_45.setTransform(253,245.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9933").s().p("ADkBMIqQAAIAAiXIKQAAIAAgzIDJB+IjJB/g");
	this.shape_46.setTransform(252.8,245.9);

	this.instance_2 = new lib.ClipGroup_0_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(200.1,91.9,0.874,0.874,0,0,0,18.1,24.6);

	this.instance_3 = new lib.ClipGroup_1_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(199.9,67.5,0.874,0.874,0,0,0,11.8,7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ECAA86").s().p("AgIgUQAIgOAHABQAEABACADQAEAbgPAUIgPAQg");
	this.shape_47.setTransform(213.3,96.7,0.874,0.874);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECAA86").s().p("AgBASQgPgUAEgbIAGgEQAHgBAIAOIAFA2QgIgFgHgLg");
	this.shape_48.setTransform(187.5,96.7,0.874,0.874);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9BD9C").s().p("AgwDCQg2gkgfhAQgIgFgIgLQgPgUAEgcIAGgDQAIgBAHANQgLgfgEglQgKhLAfglIAfgjQArgkA0gEIAPAAQA0AEAqAkQAVASALARQAfAlgKBLQgEAlgMAfQAIgNAIABQAEABADACQADAcgPAUIgQAQQgeBAg3AkIgxAYQgUgFgcgTg");
	this.shape_49.setTransform(200.4,91.4,0.874,0.874);

	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(202.9,164.9,0.874,0.874,0,0,0,18,24.8);

	this.instance_5 = new lib.ClipGroup_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(202.8,140.5,0.874,0.874,0,0,0,11.8,7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ECAA86").s().p("AgIgUQAIgOAHABQAEABACADQAEAbgPAVIgPAPg");
	this.shape_50.setTransform(216.1,169.6,0.874,0.874);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ECAA86").s().p("AgBATQgPgVAEgbIAGgEQAHgBAIAOIAFA2QgIgFgHgKg");
	this.shape_51.setTransform(190.2,169.6,0.874,0.874);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9BD9C").s().p("AgwDCQg2gkgfhAQgIgFgIgLQgPgVAEgbIAGgEQAIgBAIAOQgLgfgFglQgKhMAfglIAfgiQArgjA0gGIAPAAQA0AGAqAjQAWASALAQQAeAlgKBMQgEAlgMAfQAJgOAHABQAEABADADQADAbgPAVIgPAQQgfBAg3AkIgxAYQgUgGgcgSg");
	this.shape_52.setTransform(203.1,164.3,0.874,0.874);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3F3231").s().p("AioB8IgMgDQgCAAgEgKQgHgWgJg5QgHgvAngeQgBgYAIgTQAMgdAggPIgJANQgKAPgCAMQgBABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQATgWAjgRQA4gaBQgBQgdADgVANQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAQAigEAhADQAzAEAgAVQgJgBgNABQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAIABABQAaAMARAQQAdAcAAAnQgKgNgHgIQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAABQAAAAABAAQALAegJAeQgBgJgKgJQgBAvgNA+QgOgBgJAPIgHAQQACgWgCgaQgCg0gOgVQgjg1hgACQgfABghAFIgbAGQgSAqgXAZQgCAIgCAwIgCAvQgCgagNgIg");
	this.shape_53.setTransform(336.7,222.7,0.874,0.874);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3F3231").s().p("AAsAcQgIgBgGgFQgJgGAAgLIAAgCQgJgHgIABIAAABIgBAAIAAgBQgHgBgJAHIAAACQAAALgJAGQgGAFgIABIhIAAIgCgBQgLgEgFgIQgEgFAAgGIAAgFIgUACIgEgNIAagEQAFgJAQgDIBDAAQASABAHANQAKgEAIAAQAKAAAJAEQAHgNATgBIBDAAQAQADAFAJIATADIgBAJIgQADIAAAFQAAAGgEAFQgFAIgLAEIgDABgAAfgNIAAAVIACAFQACAFAHAEIBMAAQAJgEAAgKIAAgVQgCgGgIAAIhNAAQgJACAAAEgAh3gNIAAAVIABAFQACAFAHAEIBMAAQAJgDAAgLIAAgVQgDgGgHAAIhNAAQgIACAAAEg");
	this.shape_54.setTransform(335.4,233.3,0.874,0.874);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E8AF93").s().p("AAWAAIgKgCIgJgBIgUADQgKABgKAEQAGgFAMgDQALgEAKgBIAFAAIAHABIAKAEQALADADAIQgFgFgLgDg");
	this.shape_55.setTransform(329,231.9,0.874,0.874);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E1BB93").s().p("AgbDRQgSgHgYgRQgwghgaguQgCgCAAgDIgBgdIgBAAQgJgBgDgHQgDgFgEgXIgGgkQgDgMAAgLQAAgLAEgBQADgCAGAGQADACABAEIADgBQgFgZAAgcQAAhAAhgQIABAAIAjgbQArgaApAAIAEAAIAAAAIAEAAIAAAAQAqgCAtAbQAWAOAPAOIAAAAQAhAQAABAQAAAcgFAZIgBAGIAEgEQACgEAFgDQAGgEADABQAHAEgFAbIgGAnQgFAZgCADIgBAAQgEAHgIABIgBAAIgEAjIgCAFQgNAUgVAVQgjAkgmAUIgCAAQgJADgOABIgJABQgPAAgMgFg");
	this.shape_56.setTransform(335.7,233.1,0.874,0.874);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3F3231").s().p("AioB8IgMgDQgCABgEgLQgHgWgJg4QgEgbAMgWQAIgRAQgMQgCgXAIgUQAMgeAhgPIgJAOQgKAQgDAMQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAUgWAigQQA4gbBQgCQgdAFgWALQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAQBggKA2AjQgJgCgNABIgCABIABACQAZAKASASQAdAbAAAmIgRgUIgCAAQAAABAAAAQgBAAAAAAQAAAAAAABQAAAAABAAQAKAegIAeQgBgIgKgKQgBAvgNA+QgOgBgJAPIgHAPQABgVgBgaQgDg0gNgUQgkg1hgABQgeABghAGIgbAGQgSApgXAZQgCAJgCAvIgCAuQgCgZgNgIg");
	this.shape_57.setTransform(191.7,216.4,0.874,0.874);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3F3231").s().p("AAsAcQgIAAgHgGQgIgGAAgLIAAgDQgHgFgKAAIgCAAQgHAAgIAFIAAADQAAALgJAGQgGAGgIAAIhIAAIgCAAQgUgJAAgPIAAgEIgVABIgDgNIAZgEQAGgJAQgCIABAAIBCAAQATAAAGANQAKgFAIACQAKgCAJAFQAHgNATAAIBCAAIABAAQAQACAFAJIATADIgCAJIgPAEIAAAEQAAAGgEAGQgFAHgMAFIgCAAgAAfgOIAAAWIACAFQACAFAHAEIBMAAQAJgDAAgKIAAgWQgDgGgHAAIhNAAQgJACAAADgAh3gOIAAAWIABAFQACAFAHAEIBMAAQAJgDAAgKIAAgWQgCgGgIAAIhNAAQgIACAAADg");
	this.shape_58.setTransform(190.4,226.9,0.874,0.874);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E8AF93").s().p("AAWAAIgKgCIgKgBIgTADQgKABgKAEQAIgFAKgDQALgEAJgBIAMABIALAEQALAEADAIQgHgHgJgCg");
	this.shape_59.setTransform(184,225.6,0.874,0.874);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E1BB93").s().p("AgbDRQgTgIgXgQQgwghgaguQgCgCAAgDIgBgeIgBAAQgFAAgEgDIgDgEIAAAAQgDgEgFgYIgFgkQgDgMAAgLQAAgKAEgDQADgBAGAGQADACABAEIADgBQgFgZAAgcQAAhAAhgQIAAAAIAkgbQArgaAoAAIAJAAQAqgCAtAbQAWAOAOAOIABAAQAhAQAABAQAAAcgFAZIgBAGIAEgFIAHgGQAGgFADACIAAAAQAGADgEAcIgGAmQgFAbgCABIgBABQgEAHgIAAIgBAAIgEAkIgCAFQgtBAg+AgIgCABQgRAEgOAAQgPAAgNgEg");
	this.shape_60.setTransform(190.7,226.8,0.874,0.874);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AUYLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgASgLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAQoLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAOwLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAM4LPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgALALPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAJILPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAHQLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAFYLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgADgLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgABoLPQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAgGLPQgHAAgFgFQgFgFAAgHIAAgJQAAgIAFgFQAFgFAHAAQAGAAAFAFIADAEIAkAAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAWDLJQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA9QAAAHgFAFQgGAFgHAAQgHAAgFgFgAgSKFQgFgFAAgIIAAg8QAAgHAFgFQAFgFAHAAQAGAAAFAFQAGAFAAAHIAAA8QAAAIgGAFQgFAFgGAAQgHAAgFgFgAWDJRQgFgFAAgIIAAg7QAAgIAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAIIAAA7QAAAIgFAFQgGAFgHAAQgHAAgFgFgAgSINQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAGAAAFAFQAGAFAAAHIAAA9QAAAHgGAFQgFAFgGAAQgHAAgFgFgAWDHZQgFgFAAgIIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAIgFAFQgGAFgHAAQgHAAgFgFgAgSGVQgFgFAAgIIAAg7QAAgIAFgFQAFgFAHAAQAGAAAFAFQAGAFAAAIIAAA7QAAAIgGAFQgFAFgGAAQgHAAgFgFgAWDFhQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA9QAAAHgFAFQgGAFgHAAQgHAAgFgFgAgSEdQgFgFAAgIIAAg8QAAgHAFgFQAFgFAHAAQAGAAAFAFQAGAFAAAHIAAA8QAAAIgGAFQgFAFgGAAQgHAAgFgFgAWDDpQgFgFAAgIIAAg7QAAgIAFgFIADgCIgDgCQgFgFAAgIIAAg7QAAgIAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAIIAAA7QAAAIgFAFIgDACIADACQAFAFAAAIIAAA7QAAAIgFAFQgGAFgHAAQgHAAgFgFgAgSCbQgFgFAAgHIAAg8QAAgIAFgFQAFgFAHAAQAGAAAFAFQAGAFAAAIIAAA8QAAAHgGAFQgFAFgGAAQgHAAgFgFgAgSAjQgEgFgBgFIgbAAQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIAsAAQAGAAAFAFQAGAEAAAHIAAAPQAAAIgGAFQgFAFgGAAQgHAAgFgFgAWDAYQgFgFAAgIIAAg7QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA7QAAAIgFAFQgGAFgHAAQgHAAgFgFgAiqAZQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAkiAZQgHgBgFgFQgGgFAAgHQAAgHAGgEQAFgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAmaAZQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAoSAZQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAqKAZQgHgBgFgFQgGgFAAgHQAAgHAGgEQAFgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAsCAZQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAt6AZQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAvyAZQgHgBgFgFQgGgFAAgHQAAgHAGgEQAFgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAxqAZQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgAziAZQgHgBgGgFQgFgFAAgHQAAgHAFgEQAGgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgA1aAZQgHgBgFgFQgGgFAAgHQAAgHAGgEQAFgFAHAAIA8AAQAHAAAFAFQAFAEAAAHQAAAHgFAFQgFAFgHABgA2aALQgGgFAAgGIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAGgFAFQgFAFgHABQgHgBgFgFgAWDhfQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA9QAAAHgFAFQgGAFgHAAQgHAAgFgFgA2ahsQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAWDjXQgFgFAAgIIAAg7QAAgIAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAIIAAA7QAAAIgFAFQgGAFgHAAQgHAAgFgFgA2ajkQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAWDlPQgFgFAAgIIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAIgFAFQgGAFgHAAQgHAAgFgFgA2alcQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAWDnHQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA9QAAAHgFAFQgGAFgHAAQgHAAgFgFgA2anUQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAWDo/QgFgFAAgIIAAg7QAAgIAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAIIAAA7QAAAIgFAFQgGAFgHAAQgHAAgFgFgA2apMQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAVMqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgATUqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgARcqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAPkqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgANsqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAL0qrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAJ8qrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAIEqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAGMqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAEUqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgACcqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAAkqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAhTqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAjLqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAlDqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAm7qrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAozqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAqrqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAsjqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAubqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgAwTqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgAyLqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAgA0DqrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgHAAgA17qrQgHAAgFgFQgFgFAAgHQAAgIAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAIQAAAHgGAFQgFAFgHAAg");
	this.shape_61.setTransform(226.5,121.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_62.setTransform(83.2,155.8,0.686,0.686);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_63.setTransform(83.2,155.8,0.686,0.686);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_64.setTransform(225.5,155.8,0.686,0.686);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_65.setTransform(225.5,155.8,0.686,0.686);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_66.setTransform(154.3,120.7,0.686,0.686);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_67.setTransform(154.3,120.7,0.686,0.686);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_68.setTransform(154.3,191,0.686,0.686);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_69.setTransform(154.3,191,0.686,0.686);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_70.setTransform(12,85.5,0.686,0.686);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_71.setTransform(12,85.5,0.686,0.686);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_72.setTransform(154.3,226.2,0.686,0.686);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_73.setTransform(154.3,226.2,0.686,0.686);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_74.setTransform(296.6,226.2,0.686,0.686);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_75.setTransform(296.6,226.2,0.686,0.686);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_76.setTransform(12,155.9,0.686,0.686);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E0878B").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_77.setTransform(12,155.9,0.686,0.686);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_78.setTransform(12,226.2,0.686,0.686);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E0878B").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_79.setTransform(12,226.2,0.686,0.686);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_80.setTransform(154.3,155.9,0.686,0.686);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BED19D").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_81.setTransform(154.3,155.9,0.686,0.686);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_82.setTransform(154.3,85.5,0.686,0.686);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A2D7E9").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_83.setTransform(154.3,85.5,0.686,0.686);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_84.setTransform(296.6,155.9,0.686,0.686);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#85C8DA").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_85.setTransform(296.6,155.9,0.686,0.686);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_86.setTransform(296.6,85.5,0.686,0.686);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6CBACB").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_87.setTransform(296.6,85.5,0.686,0.686);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").p("EAwjAX+MhhFAAAMAAAgv7MBhFAAAgEgwqgYEMAAAAwJMBhVAAAMAAAgwJg");
	this.shape_88.setTransform(154.3,155.9,0.686,0.686);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_89.setTransform(154.3,155.9,0.686,0.686);

	this.text_15 = new cjs.Text("Desempeño medio", "18px 'Arial'", "#333333");
	this.text_15.lineHeight = 22;
	this.text_15.lineWidth = 159;
	this.text_15.parent = this;
	this.text_15.setTransform(90.4,22.5,0.853,0.853);

	this.text_16 = new cjs.Text("Desempeño bajo", "18px 'Arial'", "#333333");
	this.text_16.lineHeight = 22;
	this.text_16.lineWidth = 276;
	this.text_16.parent = this;
	this.text_16.setTransform(-47.4,22.5,0.853,0.853);

	this.text_17 = new cjs.Text("Los movimientos de ubicación de colaboradores solo pueden ser a un cuadrante adyacente, horizontal o vertical, es decir no deben hacerse movimientos diagonales ni moverse más de un cuadrante.", "16px 'Arial'", "#333333");
	this.text_17.lineHeight = 15;
	this.text_17.lineWidth = 510;
	this.text_17.parent = this;
	this.text_17.setTransform(-113.4,287.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{y:190.4}},{t:this.shape_16,p:{y:190.4}},{t:this.text_14,p:{scaleX:0.788,scaleY:0.788,x:494.7,y:109.5,text:"Distribución típica \nde los colaboradores",font:"bold 18px 'Arial'",color:"#000000",lineHeight:20.1,lineWidth:206}},{t:this.text_13,p:{scaleX:0.788,scaleY:0.788,x:490.6,y:182.2,text:"Cambios de cuadrante",font:"bold 18px 'Arial'",color:"#000000",textAlign:"",lineHeight:20.1,lineWidth:219}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.text_12,p:{scaleX:1,scaleY:1,x:-112.9,y:292.7,text:"Una sesión típica de Talent Management Review, da como resultado una distribución de colaboradores similar a la que se muestra en el diagrama.",font:"16px 'Arial'",textAlign:"",lineHeight:15.35,lineWidth:510}},{t:this.shape_9,p:{x:-151.1,y:314.2}},{t:this.shape_8,p:{x:-151.3,y:313.9}},{t:this.instance_1,p:{x:-145.6,y:301.2}},{t:this.shape_7,p:{x:-151.3,y:314.2}},{t:this.text_11,p:{x:-46.9,y:22.9,text:"Desempeño bajo",textAlign:"",lineHeight:22.1,lineWidth:276}},{t:this.text_10,p:{scaleX:0.853,scaleY:0.853,x:90.9,y:22.9,text:"Desempeño medio",font:"18px 'Arial'",color:"#333333",textAlign:"",lineHeight:22.1,lineWidth:159}},{t:this.text_9,p:{scaleX:0.853,scaleY:0.853,x:243.6,y:22.9,text:"Desempeño alto\n",font:"18px 'Arial'",color:"#333333",textAlign:"",lineHeight:22.1,lineWidth:159}},{t:this.text_8,p:{scaleX:0.853,scaleY:0.853,x:-100.2,y:70.8,text:"Alto Potencial ",font:"18px 'Arial'",color:"#333333",lineHeight:19.1,lineWidth:97}},{t:this.text_7,p:{scaleX:0.853,scaleY:0.853,x:-100.2,y:143.4,text:"Potencial medio",font:"18px 'Arial'",color:"#333333",textAlign:"center",lineHeight:19.1,lineWidth:97}},{t:this.text_6,p:{scaleX:0.853,scaleY:0.853,x:-100.2,y:209.7,text:"Potencial básico\n",font:"18px 'Arial'",color:"#333333",textAlign:"center",lineHeight:19.1,lineWidth:97}},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.text_5,p:{scaleX:1,scaleY:1,x:131.5,y:129.8,text:"75",font:"bold 40px 'Arial'",lineHeight:19.3,lineWidth:53}},{t:this.text_4,p:{scaleX:1,scaleY:1,x:174.9,y:140.9,text:"%",font:"bold 25px 'Arial'",textAlign:"",lineHeight:8.15,lineWidth:33}},{t:this.shape_4},{t:this.shape_3},{t:this.text_3,p:{scaleX:1,scaleY:1,x:268.9,y:105.2,text:"15",font:"bold 35px 'Arial'",textAlign:"",lineHeight:14.1,lineWidth:53}},{t:this.text_2,p:{scaleX:1,scaleY:1,x:309.9,y:112.3,text:"%",font:"bold 25px 'Arial'",lineHeight:8.15,lineWidth:33}},{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{scaleX:1,scaleY:1,x:-14.5,y:181.6,text:"10",font:"bold 35px 'Arial'",lineHeight:14.1,lineWidth:53}},{t:this.text,p:{scaleX:1,scaleY:1,x:26.5,y:189.5,text:"%",font:"bold 25px 'Arial'",lineHeight:8.15,lineWidth:33}}]},1).to({state:[{t:this.text_17},{t:this.shape_9,p:{x:-151.6,y:313.8}},{t:this.shape_8,p:{x:-151.8,y:313.5}},{t:this.instance_1,p:{x:-146.1,y:300.8}},{t:this.shape_7,p:{x:-151.8,y:313.8}},{t:this.text_16},{t:this.text_15},{t:this.text_14,p:{scaleX:0.853,scaleY:0.853,x:243.1,y:22.5,text:"Desempeño alto\n",font:"18px 'Arial'",color:"#333333",lineHeight:22.1,lineWidth:159}},{t:this.text_13,p:{scaleX:0.853,scaleY:0.853,x:-100.7,y:70.4,text:"Alto Potencial ",font:"18px 'Arial'",color:"#333333",textAlign:"center",lineHeight:19.1,lineWidth:97}},{t:this.text_12,p:{scaleX:0.853,scaleY:0.853,x:-100.7,y:143,text:"Potencial medio",font:"18px 'Arial'",textAlign:"center",lineHeight:19.1,lineWidth:97}},{t:this.text_11,p:{x:-100.7,y:209.3,text:"Potencial básico\n",textAlign:"center",lineHeight:19.1,lineWidth:97}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.text_10,p:{scaleX:0.686,scaleY:0.686,x:12.5,y:70.8,text:"Caso a revisar\n(Enigma)",font:"bold 22px 'Arial'",color:"#000000",textAlign:"center",lineHeight:24.45,lineWidth:165}},{t:this.text_9,p:{scaleX:0.686,scaleY:0.686,x:12.5,y:130.7,text:"Desempeño inconsistente (Dilema)",font:"bold 22px 'Arial'",color:"#000000",textAlign:"center",lineHeight:24.45,lineWidth:165}},{t:this.text_8,p:{scaleX:0.686,scaleY:0.686,x:12.5,y:215.3,text:"Bajo\nDesempeño ",font:"bold 22px 'Arial'",color:"#000000",lineHeight:24.45,lineWidth:165}},{t:this.text_7,p:{scaleX:0.686,scaleY:0.686,x:95,y:70.8,text:"Talento en \ncrecimiento",font:"bold 18px 'Arial'",color:"#000000",textAlign:"",lineHeight:20.1,lineWidth:165}},{t:this.text_6,p:{scaleX:0.686,scaleY:0.686,x:95,y:141.8,text:"Colaborador \nconsistente",font:"bold 18px 'Arial'",color:"#000000",textAlign:"",lineHeight:20.1,lineWidth:165}},{t:this.text_5,p:{scaleX:0.686,scaleY:0.686,x:95,y:204,text:"Profesional \nefectivo",font:"bold 18px 'Arial'",lineHeight:20.1,lineWidth:169}},{t:this.text_4,p:{scaleX:0.686,scaleY:0.686,x:296.6,y:70.8,text:"Futuro\nLíder",font:"bold 22px 'Arial'",textAlign:"center",lineHeight:24.45,lineWidth:165}},{t:this.text_3,p:{scaleX:0.686,scaleY:0.686,x:296.6,y:139.3,text:"Alto\nImpacto",font:"bold 22px 'Arial'",textAlign:"center",lineHeight:24.45,lineWidth:165}},{t:this.text_2,p:{scaleX:0.686,scaleY:0.686,x:236,y:204,text:"Profesional \nexperto",font:"bold 18px 'Arial'",lineHeight:20.1,lineWidth:165}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_5},{t:this.instance_4},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.instance_3},{t:this.instance_2},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_17,p:{y:125.6}},{t:this.shape_16,p:{y:125.6}},{t:this.text_1,p:{scaleX:0.788,scaleY:0.788,x:494.7,y:109.5,text:"Distribución típica \nde los colaboradores",font:"bold 18px 'Arial'",lineHeight:20.1,lineWidth:206}},{t:this.text,p:{scaleX:0.788,scaleY:0.788,x:490.6,y:182.2,text:"Cambios de cuadrante",font:"bold 18px 'Arial'",lineHeight:20.1,lineWidth:219}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Sólo ventana
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#B3B3B3").p("AAAg4IAABx");
	this.shape_90.setTransform(422.7,309.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#BDCCD4").ss(1,1,1,3,true).p("EgvlgXJQAHhLA3g4QA+g+BZAAMBYiAAAQBYAAA+A+QA3A4AHBLEAvnAVHIAABvQAABYg/A+Qg+A/hYAAMhYiAAAQhZAAg+g/Qg/g+AAhYMAAAgt/EAvngXJMAAAAqf");
	this.shape_91.setTransform(118,180.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F1F7DC").s().p("EgsQAaLQhZAAg+g/Qg/g+AAhYMAAAgt/IABAAQAHhLA3g4QA+g+BZAAMBYiAAAQBYAAA+A+QA3A4AHBLIABAAMAAAAqfIAABxIAABvQAABYg/A+Qg+A/hYAAg");
	this.shape_92.setTransform(118,180.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},1).wait(2));

	// ID
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#231F20").s().p("AhJBuQgHgBgFgFQgFgGABgHIAAAAQAAgHAGgFQAFgFAHABQAcACAeAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgBAAQgeAAgdgCgAAkBqQgFgEAAgIIAAAAQgBgHAFgFQAFgGAHAAQAfgCAcgDQAHAAAGAFQAFAEABAHIAAAAQABAHgFAGQgEAGgIAAQgdAEgfABIgBAAQgHAAgFgFgAiGBoQgfgEgdgGQgHgCgEgGQgEgGACgHQABgHAGgEQAHgEAHABQAbAHAeAEQAHABAEAFQAFAGgBAHIAAAAQgBAHgGAFQgEADgGAAIgDAAgACeBfQgGgEgBgHIAAAAQgBgHAEgGQAEgGAHgCQAegGAbgHQAHgCAGADQAGAEACAGIAAABQACAHgDAGQgDAGgHACQgdAJggAGIgDAAQgFAAgFgDgAj+BNQgkgMgUgOQgGgEgCgHQgBgHAEgGIABgCQAEgFAGgBQAIgBAGAEQARAMAeAKQAHACADAHQAEAGgDAHQgCAHgHADQgDACgEAAIgGgBgAEWA9QgGgCgEgGIAAgBQgDgGACgHQACgHAGgDQAbgOACgPQAAgEADgFQgGAAgEgFQgOgNgfgMQgGgDgDgGQgDgHACgGIAAgBQADgHAHgDQAGgCAHACQAnAPASATQAFAFAAAHQAAAGgDAEQAGAAAEAFQAFAFAAAGQADAigyAaQgEACgEAAIgGgBgAlEADIgFgCQgGgCgCgHQgDgHADgGQAMgZAtgUQAGgDAHADQAHACADAHQADAHgDAGQgDAHgGADQgeANgJAPQgDAGgHACIgGABIgDAAgAjgg3QgGgEgCgHIAAAAQgCgHAEgGQAEgGAHgCQAdgHAfgFQAIgBAFAEQAGAEABAHIAAAAQACAHgFAGQgEAGgHABQgeAFgcAHIgEABQgFAAgEgDgADIg4QgcgGgfgFQgHgBgEgGQgEgFAAgHIAAAAQABgIAGgEQAGgEAHABQAhAEAdAHQAHACAEAGQAEAHgCAHIAAABQgCAGgGAEQgEACgFAAIgEgBgAhrhMQgFgFgBgHQAAgHAEgGQAFgFAHgBQAegDAggBQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAFgHABQgfABgdACIgBAAQgHAAgFgEgABThKQgdgBgegBQgHAAgFgFQgFgFAAgHIAAgBQAAgHAFgFQAFgFAHAAQAgAAAdACQAIABAEAGQAFAFAAAHIAAABQgBAHgFAEQgFAFgHAAIgBgBg");
	this.shape_93.setTransform(-375,376.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AAIBSQgGgFgGAAQgeAAgcgCQgHgBgFAFQgGAFAAAHIgZgCQABgHgEgGQgFgFgHgBQgegEgbgHQgHgBgGAEQgHAEgBAHIgXgGIgCgBQADgHgEgGQgDgHgHgCQgegKgRgMQgGgEgIABQgGABgEAFQgJgLgBgLQAEABAFgCQAHgCADgGQAJgPAegNQAGgDADgHQADgGgDgHIAZgJQACAHAGAEQAGAEAIgCQAbgHAegFQAHgBAEgGQAFgGgBgHIAAAAIAZgDQABAHAFAFQAGAFAHgBQAdgCAfgCQAIAAAFgFQAEgFAAgHIAPAAIAJAAQAAAHAFAFQAFAFAHAAQAeABAdABQAHABAGgFQAFgEABgHIAYADQAAAHAEAFQAEAGAHABQAfAFAcAGQAHACAGgDQAGgEACgGIAGABIAPAFQgCAGADAHQADAGAGADQAfAMAOANQAEAFAGAAQgDAFAAAEQgCAPgaAOQgHADgCAHQgCAHADAGIgZAJQgCgGgGgEQgGgDgHACQgbAHgeAGQgHACgEAGQgEAGABAHIgaADQgBgHgFgEQgGgFgHAAQgcADgfACQgHAAgFAGQgFAFABAHIgbAAQAAgHgFgFg");
	this.shape_94.setTransform(-375.9,376.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93}]}).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,-26.6,163.4,414);


(lib.T2Mod3_Ventana_con_sus_contmod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
	}
	this.frame_2 = function() {
		this.stop();
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
	}
	this.frame_3 = function() {
		this.stop();
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
	}
	this.frame_4 = function() {
		this.stop();
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
	}
	this.frame_5 = function() {
		this.stop();
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(0);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-266.1,168.9);

	this.m2mc1_Cerrar = new lib.elementos25ene1mod3mcx();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(46.5,31.4,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.elementos25ene1mod3mcx(), 3);

	this.botoninvisible = new lib.T1_Boton_invisibleroll24emod3mcx();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(5));

	// Contenidos
	this.text = new cjs.Text("1", "110px 'Arial'", "#999999");
	this.text.lineHeight = 123;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(-85.5,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F7DC").s().p("Aj7JUQh0gxhZhaQhahZgyh0Qgyh5AAiDQAAiDAyh4QAyh0BahZQBZhaB0gxQB4gzCDAAQCEAAB4AzQB0AxBZBaQBaBZAyB0QAyB4AACDQAACDgyB5QgyB0haBZQhZBah0AxQh4AziEAAQiDAAh4gzg");
	this.shape_1.setTransform(-53.6,56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCFF").s().p("AkTKPQiBg2hhhiQhjhjg2h/Qg4iFAAiQQAAiPA4iFQA2h/BjhjQBhhiCBg2QCDg4CQAAQCRAACDA4QCAA2BjBiQBiBjA2B/QA4CFAACPQAACQg4CFQg2B/hiBjQhjBiiAA2QiDA4iRAAQiQAAiDg4g");
	this.shape_2.setTransform(-53.2,56.7);

	this.text_1 = new cjs.Text("Se registra si el colaborador tuvo algún movimiento en la matriz 9-Box a partir de lo conversado por los evaluadores durante la sesión.", "17px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 179;
	this.text_1.parent = this;
	this.text_1.setTransform(-56.2,163.3);

	this.instance = new lib.M03_TMR_r25enemod3mcx();
	this.instance.parent = this;
	this.instance.setTransform(-53,57,0.7,0.7,0,0,0,97,97.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_3.setTransform(-53.7,56.9,0.7,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5D2C1").s().p("AkTKPQiBg2hhhiQhjhjg2h/Qg4iFAAiQQAAiPA4iFQA2h/BjhjQBhhiCBg2QCDg4CQAAQCRAACDA4QCAA2BjBiQBiBjA2B/QA4CFAACPQAACQg4CFQg2B/hiBjQhjBiiAA2QiDA4iRAAQiQAAiDg4g");
	this.shape_4.setTransform(-53.2,56.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE9E9E").s().p("AkTKPQiBg2hhhiQhjhjg2h/Qg4iFAAiQQAAiPA4iFQA2h/BjhjQBhhiCBg2QCDg4CQAAQCRAACDA4QCAA2BjBiQBiBjA2B/QA4CFAACPQAACQg4CFQg2B/hiBjQhjBiiAA2QiDA4iRAAQiQAAiDg4g");
	this.shape_5.setTransform(-53.2,56.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6699FF").s().p("AkTKPQiBg2hhhiQhjhjg2h/Qg4iFAAiQQAAiPA4iFQA2h/BjhjQBhhiCBg2QCDg4CQAAQCRAACDA4QCAA2BjBiQBiBjA2B/QA4CFAACPQAACQg4CFQg2B/hiBjQhjBiiAA2QiDA4iRAAQiQAAiDg4g");
	this.shape_6.setTransform(-53.2,56.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{y:163.3,text:"Se registra si el colaborador tuvo algún movimiento en la matriz 9-Box a partir de lo conversado por los evaluadores durante la sesión."}},{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{x:-85.5,y:-2.4,text:"1"}}]},1).to({state:[{t:this.text_1,p:{y:156.3,text:"Se registran las principales fortalezas y áreas de oportunidad del colaborador, las cuales serán la base para determinar las acciones de desarrollo y posibles roles.\n"}},{t:this.instance},{t:this.text,p:{x:-81.5,y:-7.4,text:"2"}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.text_1,p:{y:168.3,text:"Se registra cuáles son los siguientes roles sugeridos para el colaborador y el tiempo en que puede estar listo para tomar dicho puesto."}},{t:this.text,p:{x:-83.4,y:-1.8,text:"3"}}]},1).to({state:[{t:this.text_1,p:{y:178.3,text:"Se documentan las acciones de desarrollo que el colaborador necesita para ocupar siguientes puestos en la organización."}},{t:this.shape_5},{t:this.shape_1},{t:this.text,p:{x:-84.4,y:-1.8,text:"4"}}]},1).to({state:[{t:this.text_1,p:{y:188.3,text:"Probabilidad de que el colaborador decida, por diversas razones, dejar de formar parte de la organización."}},{t:this.shape_6},{t:this.shape_1},{t:this.text,p:{x:-84.4,y:-1.8,text:"5"}}]},1).wait(1));

	// Sólo ventana
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F7DC").s().p("AstNkQjIAAAAjIIAA03QAAjIDIAAIZbAAQDIAAAADIIAAU3QAADIjIAAg");
	this.shape_7.setTransform(-56.5,230.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCFF").s().p("AwGaFIAAgFQhBgNgygyQhDhDAAhfMAAAgs9QAAhfBDhEQAygyBBgMIAAgFMAjDAAAMAAAA0Jg");
	this.shape_8.setTransform(-56.3,174.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAE8A9").s().p("AwGaFIAAgFQhBgNgygyQhDhDAAhfMAAAgs9QAAhfBDhEQAygyBBgMIAAgFMAjDAAAMAAAA0Jg");
	this.shape_9.setTransform(-56.3,174.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5D2C1").s().p("AwGaFIAAgFQhBgNgygyQhDhDAAhfMAAAgs9QAAhfBDhEQAygyBBgMIAAgFMAjDAAAMAAAA0Jg");
	this.shape_10.setTransform(-56.3,174.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE9E9E").s().p("AwGaFIAAgFQhBgNgygyQhDhDAAhfMAAAgs9QAAhfBDhEQAygyBBgMIAAgFMAjDAAAMAAAA0Jg");
	this.shape_11.setTransform(-56.3,174.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6699FF").s().p("AwGaFIAAgFQhBgNgygyQhDhDAAhfMAAAgs9QAAhfBDhEQAygyBBgMIAAgFMAjDAAAMAAAA0Jg");
	this.shape_12.setTransform(-56.3,174.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_7}]},1).to({state:[{t:this.shape_12},{t:this.shape_7}]},1).wait(1));

	// ID
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AhJBuQgHgBgFgFQgFgGABgHIAAAAQAAgHAGgFQAFgFAHABQAcACAeAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgBAAQgeAAgdgCgAAkBqQgFgEAAgIIAAAAQgBgHAFgFQAFgGAHAAQAfgCAcgDQAHAAAGAFQAFAEABAHIAAAAQABAHgFAGQgEAGgIAAQgdAEgfABIgBAAQgHAAgFgFgAiGBoQgfgEgdgGQgHgCgEgGQgEgGACgHQABgHAGgEQAHgEAHABQAbAHAeAEQAHABAEAFQAFAGgBAHIAAAAQgBAHgGAFQgEADgGAAIgDAAgACeBfQgGgEgBgHIAAAAQgBgHAEgGQAEgGAHgCQAegGAbgHQAHgCAGADQAGAEACAGIAAABQACAHgDAGQgDAGgHACQgdAJggAGIgDAAQgFAAgFgDgAj+BNQgkgMgUgOQgGgEgCgHQgBgHAEgGIABgCQAEgFAGgBQAIgBAGAEQARAMAeAKQAHACADAHQAEAGgDAHQgCAHgHADQgDACgEAAIgGgBgAEWA9QgGgCgEgGIAAgBQgDgGACgHQACgHAGgDQAbgOACgPQAAgEADgFQgGAAgEgFQgOgNgfgMQgGgDgDgGQgDgHACgGIAAgBQADgHAHgDQAGgCAHACQAnAPASATQAFAFAAAHQAAAGgDAEQAGAAAEAFQAFAFAAAGQADAigyAaQgEACgEAAIgGgBgAlEADIgFgCQgGgCgCgHQgDgHADgGQAMgZAtgUQAGgDAHADQAHACADAHQADAHgDAGQgDAHgGADQgeANgJAPQgDAGgHACIgGABIgDAAgAjgg3QgGgEgCgHIAAAAQgCgHAEgGQAEgGAHgCQAdgHAfgFQAIgBAFAEQAGAEABAHIAAAAQACAHgFAGQgEAGgHABQgeAFgcAHIgEABQgFAAgEgDgADIg4QgcgGgfgFQgHgBgEgGQgEgFAAgHIAAAAQABgIAGgEQAGgEAHABQAhAEAdAHQAHACAEAGQAEAHgCAHIAAABQgCAGgGAEQgEACgFAAIgEgBgAhrhMQgFgFgBgHQAAgHAEgGQAFgFAHgBQAegDAggBQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAFgHABQgfABgdACIgBAAQgHAAgFgEgABThKQgdgBgegBQgHAAgFgFQgFgFAAgHIAAgBQAAgHAFgFQAFgFAHAAQAgAAAdACQAIABAEAGQAFAFAAAHIAAABQgBAHgFAEQgFAFgHAAIgBgBg");
	this.shape_13.setTransform(-375,376.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAIBSQgGgFgGAAQgeAAgcgCQgHgBgFAFQgGAFAAAHIgZgCQABgHgEgGQgFgFgHgBQgegEgbgHQgHgBgGAEQgHAEgBAHIgXgGIgCgBQADgHgEgGQgDgHgHgCQgegKgRgMQgGgEgIABQgGABgEAFQgJgLgBgLQAEABAFgCQAHgCADgGQAJgPAegNQAGgDADgHQADgGgDgHIAZgJQACAHAGAEQAGAEAIgCQAbgHAegFQAHgBAEgGQAFgGgBgHIAAAAIAZgDQABAHAFAFQAGAFAHgBQAdgCAfgCQAIAAAFgFQAEgFAAgHIAPAAIAJAAQAAAHAFAFQAFAFAHAAQAeABAdABQAHABAGgFQAFgEABgHIAYADQAAAHAEAFQAEAGAHABQAfAFAcAGQAHACAGgDQAGgEACgGIAGABIAPAFQgCAGADAHQADAGAGADQAfAMAOANQAEAFAGAAQgDAFAAAEQgCAPgaAOQgHADgCAHQgCAHADAGIgZAJQgCgGgGgEQgGgDgHACQgbAHgeAGQgHACgEAGQgEAGABAHIgaADQgBgHgFgEQgGgFgHAAQgcADgfACQgHAAgFAGQgFAFABAHIgbAAQAAgHgFgFg");
	this.shape_14.setTransform(-375.9,376.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[]},1).to({state:[]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,-26.6,163.4,414);


(lib.mod2t2mc3_co25ene2019mod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 5;
		var root = this; 
		quitaActivos();
		var Secuencial = false;
		
		//Para hacer que los botones sean secuenciales:
		if (!parent.backdoor) {
			EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position <1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
		parent.habilitarSiguiente();
		
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_contmod3mcx();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b5 = new lib.botonescitos1mod3mcxnwe();
	this.b5.parent = this;
	this.b5.setTransform(880.5,315.1,1.002,0.374,0,0,0,64.2,13.3);

	this.b1 = new lib.botonescitos1mod3mcxnwe();
	this.b1.parent = this;
	this.b1.setTransform(880.5,66.5,1.002,0.374,0,0,0,64.2,13.3);

	this.b2 = new lib.botonescitos1mod3mcxnwe();
	this.b2.parent = this;
	this.b2.setTransform(880.5,118,1.002,0.374,0,0,0,64.2,13.3);

	this.b3 = new lib.botonescitos1mod3mcxnwe();
	this.b3.parent = this;
	this.b3.setTransform(880.5,182.1,1.002,0.374,0,0,0,64.2,13.3);

	this.b4 = new lib.botonescitos1mod3mcxnwe();
	this.b4.parent = this;
	this.b4.setTransform(880.5,249.1,1.002,0.374,0,0,0,64.2,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b4},{t:this.b3},{t:this.b2},{t:this.b1},{t:this.b5}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-18.8,1117.9,414);


(lib.mod2t2mc3_co25ene201animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 2;
		var root = this;
		quitaActivos();
		var Secuencial = false;
		
		//Para hacer que los botones sean secuenciales:
		if (!parent.backdoor) {
			EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position < 1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
				parent.habilitarSiguiente();
		
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_dsdbien();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b2 = new lib.botonescitos1animultax();
	this.b2.parent = this;
	this.b2.setTransform(795.3,179.3,2.361,0.558,0,0,0,64.3,13.5);

	this.b1 = new lib.botonescitos1animultax();
	this.b1.parent = this;
	this.b1.setTransform(795.3,115.3,2.361,0.558,0,0,0,64.3,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-18.8,1067.5,414);


(lib.boli4new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000007").s().p("Ag1AJIgpgJIABgOIAgAIQAkAHAWABQAgABA/gOIADAMQgrAIgmAFIgOABQgVAAgggGg");
	this.shape.setTransform(97,98.5,0.757,0.757);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#35343A").s().p("AAAAEIgCgCIABgHIABABIADAEQABAEgCACIgCgCg");
	this.shape_1.setTransform(100.2,74.5,0.757,0.757);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#35343A").s().p("AgFAFQgCgDACgCQADgDAIgCIABAHQgBgBgFADIgEACIgCgBg");
	this.shape_2.setTransform(98.3,74.6,0.757,0.757);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3C3C1").s().p("AgGAAQAAgGAGgBQAHABAAAGQAAAIgHAAQgGAAAAgIg");
	this.shape_3.setTransform(99.4,74.3,0.757,0.757);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#35343A").s().p("AgIAAQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgIAAAAgJg");
	this.shape_4.setTransform(99.4,74.4,0.757,0.757);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#947668").s().p("AAMA7QAKgygKgDQgFgBgEgEIgHgGQgXgMgEgFQgKgLAAgLQgBgKAFgBQADAAAbAJIAMAFQAKADACAAQACgBgJgKQgEgIAEgHQABgCADAFIAEAKQADAGAMALQAEAFAFAUQACAEgCBHg");
	this.shape_5.setTransform(97,73.1,0.757,0.757);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0DADE").s().p("AgdBtQgPgYgNhPIgLhJIAsgEIAUCAQALg5AGgfQABgHgBgVIgCgUIABgqIAZAGQAbAGAEAOQAFAQgXBYQgUBMgYAaQgHAIgHACIgGAAg");
	this.shape_6.setTransform(102.2,82.2,0.757,0.757);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0DADE").s().p("Ag0BoQgFgDgJg+IgNhTQgDgRAPgYQAIgMAIgJQAgAegHAJQgKANAJA0QAHApAFAMQABADAngJIAogJIAQAiQgbANgfAKQgnAOgVAAQgKAAgFgDg");
	this.shape_7.setTransform(92.6,81.9,0.757,0.757);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDEAEC").s().p("AgYAFIAogWIAJARQgCAMgYAGg");
	this.shape_8.setTransform(98.6,73.6,0.757,0.757);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DDEAEC").s().p("AgYgCIAJgSIAoAcIgTANQgdgMgBgLg");
	this.shape_9.setTransform(94.8,73.4,0.757,0.757);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3231").s().p("AhIA6QgBgDgDgBQgEguALgbQASgsAzADIAAAAQA0gDASAsQALAbgEAuQgDABgBADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAIgBAAIAAgeQAAgIgIgSQgIgVgJgCQgHgCgPAIQgQAIgGAAIgBAAQgGAAgRgIQgPgIgGACQgIACgJAVQgIASAAAIIAAAeIAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_10.setTransform(96.4,59.9,0.757,0.757);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#805F50").s().p("AgMBkQgJgEgMgIQgWgPgNgWIgBgDIAAgOIgBAAIgEgCIgCgBIAAgBIgDgNIgEgcQAAgFACgBQAAAAAAAAQABAAAAABQABAAABAAQAAABABAAIACADIABAAQgCgMAAgOQAAgeAQgIIAAAAIARgNQAVgMATAAIAEAAQAUgBAVANQALAGAHAHIAAAAQAQAIAAAeQAAAOgDAMIAAADIACgCQAFgGADABQADACgCANIgHAfIAAABQgCADgEAAIgBAAIgBARIgBADQgUAdggARIgBAAIgLACIgEAAQgHAAgFgCg");
	this.shape_11.setTransform(96.4,64,0.757,0.757);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#947668").s().p("AgGAgQgzgBAOgOQAMgMADgPIABgPIAagFQAagEAAAJQABARAVAnQgXABgUAAIgKAAg");
	this.shape_12.setTransform(96.7,71.3,0.757,0.757);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2F2F35").s().p("AA2ElIgagEIgEiXQgEiagBgOIgOiHQgXCmAAAGIgREbIhRAAIALluIAUjZQAWAPBTgFQApgCAmgFIALBIQAHBNABAjIgJGBQgGAEgNAHQgGAEgOAAIgQgBg");
	this.shape_13.setTransform(96.3,119.7,0.757,0.757);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00011E").s().p("AgkASQgDgIALgPIAKgNIADgPIABgBIAzAAIAAAcQABAQgCAEQgEAHgNAHIgKAHIgeABQgKgFgFgNg");
	this.shape_14.setTransform(89.8,144.1,0.757,0.757);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A0CBD0").s().p("AgSAOQgFgTABgPIApgBQAHAdgIAHQgGAGgNAAIgBABQgOAAgCgIg");
	this.shape_15.setTransform(93.2,82.6,0.757,0.757);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#35343A").s().p("AAAAFIgDgDIABgJIACACQACACABADQABAFgCADIgCgDg");
	this.shape_16.setTransform(82,99.4,0.757,0.757);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000007").s().p("AARAbIgsgOQgZABgEgCQgCgCAAgKIAAgMIAFgLIA6gDIAGAPIAjARQAOAGgBAJQgBAFgBABg");
	this.shape_17.setTransform(105.1,142.7,0.757,0.757);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AEC7C9").s().p("AgHCrQgdgDgdgIIgXgHIgHidQgHiZgDgBIB4gLQBHgDALAFQAMAFgECgQgDBOgEBPQgyAQgpAAIgOAAgAhpieIAAAAIAAAAg");
	this.shape_18.setTransform(96.6,85.9,0.757,0.757);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C5A9B5").s().p("AgTBsIAAgpIAoAAIAAApgAgTA1IAAgKQAAgSAGgLQAFgLASgPQASgPADgEQAGgIAAgIQAAgMgKgIQgKgJgQAAQgOAAgLAJQgLAKgDARIgmgEQACgbAUgSQAWgSAgAAQAiAAAWASQAVATAAAZQAAANgIAMQgHAMgaAUQgNALgDAHQgDAHAAAQg");
	this.shape_19.setTransform(122.1,51.1,0.757,0.757);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7DA98").s().p("Ai/CtQASglAGgcIAEgZQABgFgEgFQgggqACgxQAAg4AogrQAngqA9gQQApgKAlAEQBJAHAzAuQApAmAJAzQAJA3ggAwQggAwg4AWQgyAUg2gGIgqgGQgDgBgDABQgYAOgqAMIg3AOIgHABg");
	this.shape_20.setTransform(122.5,53,0.757,0.757);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F795E").s().p("AgMADIAUgMIAGAJQgBAGgNAEg");
	this.shape_21.setTransform(69.5,42.8,0.757,0.757);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7F795E").s().p("AgNgBIAFgJIAWAPIgKAGQgQgGgBgGg");
	this.shape_22.setTransform(67.4,42.7,0.757,0.757);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DAA675").s().p("AAoAOQgBgHgOAAQgSABgHAAQgLgBgJgHIgHgHQgEAPgCACQgCABgCALIgCAKIgEgHQgFgGABgCQACgJgBgHQgDgMAFgFQgBgBAOgGQAPgGAOgCQAOgBASALQASAKAAAIQABAIgCAKQgBALgCABQgCAAgCADIgBACQACgHgBgLg");
	this.shape_23.setTransform(68.3,34.6,0.757,0.757);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4B98C").s().p("AgrAfQAQgxAFgDQAKgHAWgBQANgEALAHQAGADADAEIABAyg");
	this.shape_24.setTransform(65.6,44.9,0.757,0.757);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4B98C").s().p("AgsAfIACgyIAJgHQALgHAMAEIAMABQAPADAGAEQAIAFAOAvg");
	this.shape_25.setTransform(71.4,44.9,0.757,0.757);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9BD9C").s().p("AgGA2QgTgIgLgTIAAgBIgBgIIgDgCIgEgVIABgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIABABIABAAQgBgGAAgHQAAgRAIgEQAAgBAJgGQALgHALAAIABAAIAAABIAAAAIAAgBQARAAAPAOQAIAEAAARIgBANIAAACIABgCIAEgCQACAAgCAIIAAAAIgDAQIAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAJIgBACQgOARgNAHIgBABIgHABIgHgBg");
	this.shape_26.setTransform(68.3,37.4,0.757,0.757);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDAB86").s().p("AgDAVQgdgCAHgHQAKgKABgSIAOgDQAOgCAAAFQAAAJANAbIgVABIgJAAg");
	this.shape_27.setTransform(68.4,41.5,0.757,0.757);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3F3231").s().p("AgyAlIgDgBQgCABgEgbQgDgNAMgKQgCgRARgJIgDAFQgDAFAAADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQARgTAmgBQgIABgHAEIAAABIABABQAcgEAQALIgGAAQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAAAAAQAHADAGAFQAIAIAAALIgFgGIgBABQADAJgCAIQAAgCgDgDQgBAOgEASQgEAAgCAEIgCAFQABgagGgJQgLgQgbABIgbADQgFAMgHAHIgCAfQgBgIgEgCg");
	this.shape_28.setTransform(24.9,70,0.757,0.757);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3F3231").s().p("AAOAJIgBgBQgHAAAAgGIAAgBQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAIAAABIAAAAIAAgBQgCABgCABIAAABQAAAGgHAAIAAABIgVAAIgBgBQgGgCAAgFIAAgBIgGABIgBgEIAIgBQACgEAEABIAUAAQAFAAADADQACgBACAAQADAAADABQABgDAHAAIATAAQAEgBADAEIAFAAIgBADIgEABIAAABQAAAFgGACIgBABgAAJgEIAAAGQAAADAEABIAWAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgHQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgWAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAgAgjgEIAAAGQAAADAEABIAWAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIAAgHQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIgWAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAg");
	this.shape_29.setTransform(24.5,72.8,0.757,0.757);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(30.1,80.2,0.757,0.757,0,0,0,1.5,2.4);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,80.7,0.757,0.757,0,0,0,1.3,2);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.4,80.1,0.757,0.757,0,0,0,1.7,2.9);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(19.5,80.1,0.757,0.757,0,0,0,1.7,2.9);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19.5,80.3,0.757,0.757,0,0,0,1.7,1.9);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(18.9,80.1,0.757,0.757,0,0,0,1.5,2.6);
	this.instance_5.alpha = 0.391;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A9B3BC").s().p("AgPAEIAZgPIAGALQgBAHgPAFg");
	this.shape_30.setTransform(25.9,79,0.757,0.757);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A9B3BC").s().p("AgPgBIAGgLIAZARIgMAIQgTgIAAgGg");
	this.shape_31.setTransform(23.5,78.9,0.757,0.757);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.9,79.8,0.757,0.757,0,0,0,0.9,2.5);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(25.9,79.8,0.757,0.757,0,0,0,1.4,2.8);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(26.6,79.8,0.757,0.757,0,0,0,1.3,2.9);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(28.7,79.8,0.757,0.757,0,0,0,1.1,2.7);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(28.1,79.8,0.757,0.757,0,0,0,1.2,2.9);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(27.4,79.8,0.757,0.757,0,0,0,1.3,3.1);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(24,79.8,0.757,0.757,0,0,0,1.1,2.5);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(23.3,79.8,0.757,0.757,0,0,0,1.3,2.8);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(22.5,79.8,0.757,0.757,0,0,0,1.3,2.9);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(20.5,79.8,0.757,0.757,0,0,0,1.3,2.7);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(21,79.8,0.757,0.757,0,0,0,1.5,2.9);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(21.9,79.8,0.757,0.757,0,0,0,1.5,3.1);
	this.instance_17.alpha = 0.391;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BBCACB").s().p("AguAZQAMgiAFgEQAMgIAagBQAOgFANAIQAHAEADAFIABAjg");
	this.shape_32.setTransform(21.7,80.5,0.757,0.757);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCD0D0").s().p("AgvAZIABgjIALgJQANgIAOAFIAOACQAQACAIAFQAGAEAMAig");
	this.shape_33.setTransform(28,80.5,0.757,0.757);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E8AF93").s().p("AAHAAIgDAAIgCAAIgBAAIgFAAIgGACQACgCADAAIAGgCIABABIACAAIADABQAEAAAAADQgBgCgDgBg");
	this.shape_34.setTransform(22.9,72.4,0.757,0.757);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E1BB93").s().p("AgHA+QgWgJgNgWIAAgBIgBgJIAAAAIgEgCIgDgTIgBgGQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIADABIABACIABAAQgCgHAAgJQAAgTAKgEIAAAAQAAgCAKgGQANgIAMAAIACAAQAUgBARARQAKAEAAATQAAAJgCAHIAAACIABgCQADgDACABQACABgCAIIAAAAIgEATQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAIgBALIAAABQgOATgSAKIgBAAIgJABQgEAAgDgBg");
	this.shape_35.setTransform(24.6,72.7,0.757,0.757);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D6AE89").s().p("AgDAYQgjgCAJgIQAMgMABgVIAQgDQAQgCAAAFQABAKAPAgIgZABIgKAAg");
	this.shape_36.setTransform(24.7,77.5,0.757,0.757);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3F3F3F").s().p("AgOAdIgEg3QAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAaABAFARQAEAMABAbg");
	this.shape_37.setTransform(51.3,64.3,0.757,0.757);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3F3F3F").s().p("AgSAdQABgZAEgOQAFgRAbgBQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAABIgIA3g");
	this.shape_38.setTransform(42.3,64.3,0.757,0.757);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2F2F2F").s().p("AgRAiIAUhDIAIAFQADADAFAWIgNgBIAJAQIgOAWg");
	this.shape_39.setTransform(48.4,63.9,0.757,0.757);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2F2F2F").s().p("AAAAhIgOgXIAJgPIgNABIADgNQACgJADgCIAIgEIAUBBg");
	this.shape_40.setTransform(45.1,64,0.757,0.757);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ACADAD").s().p("AgSAVIgKgfIAAgBIAMgKIACAEQAIAMAGABQAJgBAEgHIAGgLIAKAMIAAABIgKAfIgBACQAAABAAAAQAAAAAAgBQAAAAgBAAQAAgBAAgBIgFgJIgMgOIgJAKIgHANIgBADIgBgDg");
	this.shape_41.setTransform(46.8,63,0.757,0.757);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3B3B3").s().p("AgVAiIARhDIALAJIANADQgCAMACAPIACAcg");
	this.shape_42.setTransform(48.7,64,0.757,0.757);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3B3B3").s().p("AgTAgQABgkgCgTIANgDQAHgEAAgBQADALAHASIAJAbIACAHg");
	this.shape_43.setTransform(45,64.1,0.757,0.757);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E5E6E6").s().p("AgHAZIgNgeQgBgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAKgNAKgDQALADAKANQAAAAAAAAQABABAAAAQAAABAAAAQAAAAgBABIgNAeg");
	this.shape_44.setTransform(46.8,64.6,0.757,0.757);

	this.instance_18 = new lib.ClipGroup_2_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(46.7,55.5,0.757,0.757,0,0,0,6.4,8.2);

	this.instance_19 = new lib.ClipGroup_1_2();
	this.instance_19.parent = this;
	this.instance_19.setTransform(46.7,49,0.757,0.757,0,0,0,4.5,2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ECAA86").s().p("AgCgFQADgHADAEQACAMgJAGg");
	this.shape_45.setTransform(50.1,57.1,0.757,0.757);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ECAA86").s().p("AgDgIIACgBQACAAACAEIABAPQgIgGABgMg");
	this.shape_46.setTransform(43.5,57.2,0.757,0.757);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9BD9C").s().p("AgNA5QgRgKgJgTQgJgGABgNIACgBQADAAACADQgDgJgCgKQgDgWAJgLIAKgKQAMgLAQgBIADAAQAQABAMALQAHAFADAFQAJALgDAWQgBAKgEAJQAEgGADAEQACANgKAGQgJATgQAKIgPAHQgFgBgIgGg");
	this.shape_47.setTransform(46.8,55.8,0.757,0.757);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECAA86").s().p("Ag2ArQgHAAgFgHQgGgGAAgJQAAgKAGgGQAFgGAHAAIAYgDQAGgCAEgFQAFgFABgDIAAgXQAGAEAJAAQAKAAAGgEIgBAXQAAAEAFAEQAEAFAGACIAXADQAIAAAGAGQAEAGAAAKQAAAJgEAGQgGAHgIAAg");
	this.shape_48.setTransform(46.8,62.6,0.757,0.757);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7DA98").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");
	this.shape_49.setTransform(68.6,40.3,0.757,0.757);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6DB5C5").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_50.setTransform(46.8,58.4,0.757,0.757);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8EA6D9").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape_51.setTransform(24.8,74.7,0.757,0.757);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D0E1E5").s().p("AgnAoQgRgRAAgXQAAgXAQgRQARgQAXAAQAYAAARAQQAQARAAAXQAAAXgQARQgRAQgXABIgBAAQgWAAgRgRg");
	this.shape_52.setTransform(46.6,52.6,0.757,0.757);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D0E1E5").s().p("AgoAoQgRgRABgXQAAgWARgRQARgRAWAAQAYAAARARQARARAAAWQAAAYgRARQgRAQgYAAQgXAAgRgRg");
	this.shape_53.setTransform(68.4,35.4,0.757,0.757);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D0E1E5").s().p("AgoAoQgRgRABgXQAAgXARgRQAQgQAXAAQAYAAARARQARARgBAWQAAAYgRARQgRAQgXAAQgXAAgRgRg");
	this.shape_54.setTransform(24.9,69,0.757,0.757);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8EA6D9").s().p("AgFAeIABg5QAAgNAKgBIAABTQgLAAAAgMg");
	this.shape_55.setTransform(20.9,81.9,0.757,0.757);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8EA6D9").s().p("AgFAqIAAhUQAKABAAAKQABAggBAhQAAADgIAGg");
	this.shape_56.setTransform(28.9,82,0.757,0.757);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F7DA98").s().p("AgEAeIAAg5QAAgNAKgCIAABUQgLAAABgMg");
	this.shape_57.setTransform(64.4,48.3,0.757,0.757);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F7DA98").s().p("AgFApIAAhUQALADAAAJIgBBBQAAACgDACIgEAGg");
	this.shape_58.setTransform(72.4,48.4,0.757,0.757);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6DB5C5").s().p("AgFApIAAhTQAKABAAALQABAqgBAXQAAACgDACIgEAEg");
	this.shape_59.setTransform(50.7,65.6,0.757,0.757);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6DB5C5").s().p("AgFAeIAAg5QAAgNALgBIAABTQgLAAAAgMg");
	this.shape_60.setTransform(42.6,65.5,0.757,0.757);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6DB5C5").s().p("AgUB9QgCgEABgHIAShOQACgMgHgGIgEgFQgIgQgWAGQgZAHgPATQgOATAAAaIAAAvQgzgqgEhBQgDhAAtgwQAsgwBCAAQBCABAsAwQAtAwgEBAQgEBCgzAoIAAglQAAgQgBgJQgEgYgUgRQgUgSgYABQgFAAgCADIgPASQgDAFABAGIARBPQADALgIAHIgQARgAgohoQgQAQAAAYQAAAYARARQARAQAXAAQAXAAARgRQAQgRAAgXQAAgYgQgQQgRgRgYAAQgXAAgRARg");
	this.shape_61.setTransform(46.6,57.5,0.757,0.757);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F7DA98").s().p("AgTB+QgCgEABgGIARhTQABgFgEgHIgGgIQgIgKgFgCQgFgBgNAEQgWAGgPARQgRAVABAaIAAAvQgdgVgQgoQgRgsALgsQANgzAoggQAoghAzgBQAzgBArAfQAqAeANAxQAOAvgRAvQgPApgfAWIAAgvQACgcgUgVQgSgTgagFQgKgBgIAIQgRARAHAXQAFARAKA0QABAFgCADIgVAVIgTgUgAAAh5QgWAAgRARQgRARAAAXQgBAXARARQARARAXAAQAYAAARgQQARgRAAgYQAAgXgRgRQgRgRgXAAIgBAAg");
	this.shape_62.setTransform(68.4,40.3,0.757,0.757);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8EA6D9").s().p("AgTB9QgDgEACgFIARhSQACgJgFgFQgGgGgBgDQgHgNgUAFQgaAHgPATQgPATAAAbIAAAtQgYgJgRgsQgSgsAFgjQAHg3AoglQAmgkA0gEQA2gFAtAeQAsAeAQA0QAOAvgRAvQgPAqgfAWIAAgvQACgdgVgVQgUgUgdgDQgEgBgDADIgRAVQgCACABAGQAJAsAJAoQACAHgFAFIgTASIgTgVgAgnhoQgRAQAAAYQgBAXARARQARARAXABQAXAAARgRQARgRABgXQAAgXgRgRQgRgRgXgBQgXAAgRARg");
	this.shape_63.setTransform(24.9,73.9,0.757,0.757);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8EA6D9").s().p("AhtBRIAAigIDbAAIAACgg");
	this.shape_64.setTransform(24.7,94.4,0.757,0.757);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6DB5C5").s().p("AhtC+IAAl5IAAgCIDbAAIAAF7g");
	this.shape_65.setTransform(46.6,86.1,0.757,0.757);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7DA98").s().p("AhuEuIAApbIDcAAIAAJSIABAJg");
	this.shape_66.setTransform(68.4,77.6,0.757,0.757);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_67.setTransform(79.9,80.6,0.792,0.792);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E0878B").s().p("AmKOoQi3hOiMiMQiMiMhOi3QhPi9AAjOQAAjNBPi9QBOi2CMiNQCMiMC3hOQC9hPDNAAQDOAAC9BPQC2BOCNCMQCMCNBNC2QBQC9AADNQAADOhQC9QhNC3iMCMQiNCMi2BOQi9BPjOAAQjNAAi9hPg");
	this.shape_68.setTransform(80.3,80.3,0.792,0.792,0,0,0,-0.1,-0.1);

	this.text = new cjs.Text("Gestionar el desempeño", "20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(80.5,174,0.792,0.792);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_19},{t:this.instance_18},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_31},{t:this.shape_30},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.9,241.9);


(lib.AS_LG_MOV_10tiprosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape.setTransform(28.5,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.318)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_1.setTransform(28.5,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.337)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_2.setTransform(28.5,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.357)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_3.setTransform(28.5,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.38)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_4.setTransform(28.5,31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_5.setTransform(28.5,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.42)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_6.setTransform(28.5,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.439)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_7.setTransform(28.5,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.459)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_8.setTransform(28.5,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_9.setTransform(28.5,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_10.setTransform(28.5,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.518)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_11.setTransform(28.5,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.541)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_12.setTransform(28.5,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.561)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_13.setTransform(28.5,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.58)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_14.setTransform(28.5,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.6)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_15.setTransform(28.5,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.573)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_16.setTransform(28.5,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.545)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_17.setTransform(28.5,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.49)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_18.setTransform(28.5,31.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.431)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_19.setTransform(28.5,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.404)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_20.setTransform(28.5,31.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.376)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_21.setTransform(28.5,31.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.349)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_22.setTransform(28.5,31.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.322)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_23.setTransform(28.5,31.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.294)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_24.setTransform(28.5,31.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.267)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_25.setTransform(28.5,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_26.setTransform(28.5,31.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.208)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_27.setTransform(28.5,31.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_28.setTransform(28.5,31.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.153)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_29.setTransform(28.5,31.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.125)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_30.setTransform(28.5,31.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.098)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_31.setTransform(28.5,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(12));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKggg4g4Qg4g4gghKQgghMAAhTQAAhTAghMQAghJA4g5QA4g4BKgfQBMggBSAAQBUAABLAgQBKAfA5A4QA4A5AfBJQAgBMAABTQAABTggBMQgfBKg4A4Qg5A4hKAgQhLAghUAAQhSAAhMggg");
	this.shape_32.setTransform(28.9,32.6);

	this.instance = new lib.AS_LG_153sstiprosa("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,14.3,1,1,0,0,0,23.9,23.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_33.setTransform(28.8,32.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_34.setTransform(28.9,32.5,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.instance},{t:this.shape_32}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-9.3,82.2,82.8);


(lib.AS_LG_MOV_10tipam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape.setTransform(28.5,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.318)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_1.setTransform(28.5,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.337)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_2.setTransform(28.5,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.357)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_3.setTransform(28.5,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.38)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_4.setTransform(28.5,31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_5.setTransform(28.5,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.42)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_6.setTransform(28.5,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.439)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_7.setTransform(28.5,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.459)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_8.setTransform(28.5,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_9.setTransform(28.5,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_10.setTransform(28.5,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.518)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_11.setTransform(28.5,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.541)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_12.setTransform(28.5,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.561)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_13.setTransform(28.5,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.58)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_14.setTransform(28.5,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.6)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_15.setTransform(28.5,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.573)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_16.setTransform(28.5,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.545)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_17.setTransform(28.5,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.49)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_18.setTransform(28.5,31.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.431)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_19.setTransform(28.5,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.404)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_20.setTransform(28.5,31.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.376)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_21.setTransform(28.5,31.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.349)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_22.setTransform(28.5,31.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.322)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_23.setTransform(28.5,31.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.294)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_24.setTransform(28.5,31.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.267)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_25.setTransform(28.5,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_26.setTransform(28.5,31.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.208)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_27.setTransform(28.5,31.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_28.setTransform(28.5,31.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.153)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_29.setTransform(28.5,31.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.125)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_30.setTransform(28.5,31.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.098)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_31.setTransform(28.5,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(12));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKggg4g4Qg4g4gghKQgghMAAhTQAAhTAghMQAghJA4g5QA4g4BKgfQBMggBSAAQBUAABLAgQBKAfA5A4QA4A5AfBJQAgBMAABTQAABTggBMQgfBKg4A4Qg5A4hKAgQhLAghUAAQhSAAhMggg");
	this.shape_32.setTransform(28.9,32.6);

	this.instance = new lib.AS_LG_153sstipam("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,14.3,1,1,0,0,0,23.9,23.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_33.setTransform(28.8,32.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_34.setTransform(28.9,32.5,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.instance},{t:this.shape_32}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-9.3,82.2,82.8);


(lib.AS_LG_MOV_10tip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape.setTransform(28.5,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.318)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_1.setTransform(28.5,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.337)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_2.setTransform(28.5,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.357)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_3.setTransform(28.5,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.38)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_4.setTransform(28.5,31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_5.setTransform(28.5,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.42)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_6.setTransform(28.5,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.439)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_7.setTransform(28.5,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.459)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_8.setTransform(28.5,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_9.setTransform(28.5,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_10.setTransform(28.5,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.518)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_11.setTransform(28.5,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.541)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_12.setTransform(28.5,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.561)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_13.setTransform(28.5,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.58)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_14.setTransform(28.5,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.6)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_15.setTransform(28.5,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.573)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_16.setTransform(28.5,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.545)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_17.setTransform(28.5,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.49)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_18.setTransform(28.5,31.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.431)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_19.setTransform(28.5,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.404)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_20.setTransform(28.5,31.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.376)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_21.setTransform(28.5,31.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.349)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_22.setTransform(28.5,31.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.322)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_23.setTransform(28.5,31.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.294)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_24.setTransform(28.5,31.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.267)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_25.setTransform(28.5,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_26.setTransform(28.5,31.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.208)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_27.setTransform(28.5,31.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_28.setTransform(28.5,31.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.153)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_29.setTransform(28.5,31.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.125)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_30.setTransform(28.5,31.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.098)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_31.setTransform(28.5,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(12));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKggg4g4Qg4g4gghKQgghMAAhTQAAhTAghMQAghJA4g5QA4g4BKgfQBMggBSAAQBUAABLAgQBKAfA5A4QA4A5AfBJQAgBMAABTQAABTggBMQgfBKg4A4Qg5A4hKAgQhLAghUAAQhSAAhMggg");
	this.shape_32.setTransform(28.9,32.6);

	this.instance = new lib.AS_LG_153sstip("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,14.3,1,1,0,0,0,23.9,23.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_33.setTransform(28.8,32.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_34.setTransform(28.9,32.5,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.instance},{t:this.shape_32}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-9.3,82.2,82.8);


(lib.AS_LG_MOV_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape.setTransform(28.5,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.318)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_1.setTransform(28.5,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.337)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_2.setTransform(28.5,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.357)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_3.setTransform(28.5,31.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.38)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_4.setTransform(28.5,31.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_5.setTransform(28.5,31.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.42)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_6.setTransform(28.5,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.439)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_7.setTransform(28.5,31.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.459)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_8.setTransform(28.5,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_9.setTransform(28.5,31.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_10.setTransform(28.5,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.518)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_11.setTransform(28.5,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.541)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_12.setTransform(28.5,31.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.561)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_13.setTransform(28.5,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.58)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_14.setTransform(28.5,31.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.6)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_15.setTransform(28.5,31.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.573)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_16.setTransform(28.5,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.545)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_17.setTransform(28.5,31.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.49)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_18.setTransform(28.5,31.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.431)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_19.setTransform(28.5,31.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.404)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_20.setTransform(28.5,31.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.376)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_21.setTransform(28.5,31.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.349)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_22.setTransform(28.5,31.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.322)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_23.setTransform(28.5,31.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.294)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_24.setTransform(28.5,31.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.267)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_25.setTransform(28.5,31.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_26.setTransform(28.5,31.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.208)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_27.setTransform(28.5,31.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_28.setTransform(28.5,31.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.153)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_29.setTransform(28.5,31.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.125)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_30.setTransform(28.5,31.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.098)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_31.setTransform(28.5,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(12));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKggg4g4Qg4g4gghKQgghMAAhTQAAhTAghMQAghJA4g5QA4g4BKgfQBMggBSAAQBUAABLAgQBKAfA5A4QA4A5AfBJQAgBMAABTQAABTggBMQgfBKg4A4Qg5A4hKAgQhLAghUAAQhSAAhMggg");
	this.shape_32.setTransform(28.9,32.6);

	this.instance = new lib.AS_LG_153ss("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,14.3,1,1,0,0,0,23.9,23.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_33.setTransform(28.8,32.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_34.setTransform(28.9,32.5,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.instance},{t:this.shape_32}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-9.3,82.2,82.8);


(lib.AS_LG_152ccrollverde22crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.barraScrollVerticalcrollverde2("single",2);
	this.instance.parent = this;
	this.instance.setTransform(37.1,1.9,1,1,0,0,0,37.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,3.7);


(lib.AS_LG_152c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.barraScrollVertical("single",1);
	this.instance.parent = this;
	this.instance.setTransform(37.1,1.9,1,1,0,0,0,37.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,3.7);


(lib.AS_LG_150Botónpaginación2crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgnBBQgGgEACgIIAPgyIAAgFIgPgyQgCgIAGgEQAHgFAGAFIBDA5QAEADAAAEQAAAFgEADIhDA5QgDACgDAAQgDAAgEgCg");
	this.shape.setTransform(11.1,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AhFBGQgdgdAAgpQAAgpAdgdQAdgdAoAAQApAAAdAdQAdAdAAApQAAApgdAdQgdAegpgBQgoABgdgegAgVg4QgEADAAAFQAAAFAEADIAqAqIgqArQgEAEAAAFQAAAEAEAEQADADAFAAQAFAAADgDIAyg0QADgDAAgFQAAgEgDgDIgygzQgDgEgFAAQgFAAgDAEg");
	this.shape_1.setTransform(9.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.instance = new lib.AS_LG_151crollverde22crollverde2("single",2);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,19.9);


(lib.AS_LG_150Botónpaginación = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgnBBQgGgEACgIIAPgyIAAgFIgPgyQgCgIAGgEQAHgFAGAFIBDA5QAEADAAAEQAAAFgEADIhDA5QgDACgDAAQgDAAgEgCg");
	this.shape.setTransform(11.1,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AhFBGQgdgdAAgpQAAgpAdgdQAdgdAoAAQApAAAdAdQAdAdAAApQAAApgdAdQgdAegpgBQgoABgdgegAgVg4QgEADAAAFQAAAFAEADIAqAqIgqArQgEAEAAAFQAAAEAEAEQADADAFAAQAFAAADgDIAyg0QADgDAAgFQAAgEgDgDIgygzQgDgEgFAAQgFAAgDAEg");
	this.shape_1.setTransform(9.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.instance = new lib.AS_LG_151("single",1);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,19.9);


(lib.animacionn22525ene2019mod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.primerflech25ene2019amod3mcx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-337.9,0,1,1,0,0,0,190.3,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.animacionn22525ene2animultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.primerflech25ene2019aanimultax("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-337.9,0,1,1,0,0,0,190.3,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.animacionn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.primerflechaazul("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-337.9,0,1,1,0,0,0,190.3,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-528.2,-208.1,380.8,416.3);


(lib.animacion2verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.primerflecha2verde("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-337.9,0,1,1,0,0,0,190.3,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-528.2,-208.1,380.8,352.3);


(lib.amarillo3cirf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Reconocer y comprometer", "20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(80.5,174,0.792,0.792);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#87AE65").s().p("AAFBaIAAiAQgTARgZAJIAAggQANgEARgNQAOgLAHgRIAcAAIAACzg");
	this.shape.setTransform(78.4,116,0.792,0.792);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9AF48").s().p("AhHBIQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeQAeAeAAApQAAAqgeAeQgeAegqAAQgpAAgegeg");
	this.shape_1.setTransform(79.8,116,0.792,0.792);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EED264").s().p("AAdCoQgVgIgIAAQgGAAgVAIQgTAHgJgDQgJgDgLgRQgMgSgGgFQgGgEgVgGQgTgFgGgIQgGgIABgTQABgWgCgHQgCgHgOgSQgMgPAAgKQAAgJAMgPQAOgSACgGQACgHgBgXQgBgTAGgIQAGgIATgFQAVgGAGgEQAGgEAMgTQALgQAJgDQAJgDATAGQAVAIAGAAQAIAAAVgIQASgGAJADQAJADALAQQAMATAGAEQAGAEAWAGQASAFAGAIQAGAIgBATQgBAWACAIQACAGAOASQAMAPAAAJQAAAKgMAPQgOASgCAHQgCAHABAWQABATgGAIQgGAIgSAFQgWAGgGAEQgGAEgMATQgLARgJADIgGAAQgJAAgMgEg");
	this.shape_2.setTransform(79.8,116,0.792,0.792);

	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(71.7,132,0.792,0.792,0,0,0,12.5,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CC1A4").s().p("AgjBVIhZAJIBrj4ICOA9IhrD4g");
	this.shape_3.setTransform(71.7,131.9,0.792,0.792);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.3,132,0.792,0.792,0,0,0,12.5,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CC1A4").s().p("Ah8hdICOg9IBrD4IhZgJIg1BGg");
	this.shape_4.setTransform(88.3,131.9,0.792,0.792);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F795E").s().p("AhWAUICOhSIAfA+QgDAYguAWIgsARg");
	this.shape_5.setTransform(86.9,92.8,0.792,0.792);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7F795E").s().p("AgeAuQg3gfgDgZIAfg9ICSBlIhCArQgagLgbgQg");
	this.shape_6.setTransform(72.9,92,0.792,0.792);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAA675").s().p("AD+CxQAHgrgHgyQgHgxhYAAQhxAJg0gCQhDgCg7gwIgugwQgaBmgQALQgJAHgNBDIgMBBIgcgqQgdgrADgHQAEgMAEgZQAFgngGgaQgGgcABggQACgpAQgMQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgFgKBWgjQBigpBZgIQBggIB2BEQBwBBADA1QADA2gJBDQgKBFgNADQgMACgNAWIgKAVQAFgMAEgUg");
	this.shape_7.setTransform(79.1,38.3,0.792,0.792);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4B98C").s().p("AkWDJQBgk8AhgVQArgcBbgQQAsgIAlgCQBPgbBJAsQAkAWAUAbIACBeIADDng");
	this.shape_8.setTransform(60.9,106.4,0.792,0.792);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4B98C").s().p("AkgDJIAIjnIAEheIAPgQQAUgTAWgOQBJgsBPAbIBRAKQBaAQAsAcQAVAOAnBeQApBfAoCGg");
	this.shape_9.setTransform(100,106.4,0.792,0.792);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9BD9C").s().p("AgsFWQgfgNgngbQhNg2gshLQgDgEAAgEIgBgwIgDgBQgHAAgGgFIgGgGIAAgBIgBAAQgEgHgHgnIgJg6QgFgXAAgQQAAgQAGgEQAFgDALAKQAEADACAHIAFgCQgJgoAAguQAAhpA2gaIABgBIA6grQBGgrBDgBIAHABIAAAAIADAAIADAAIACAAIAAAAQBFgDBJAsQAkAWAYAXIAAABQA3AbAABoQAAAugJAoIgCAKIAHgHQARgUAKAEIAAABQAKAFgHAtIgKBAQgKAqgCAEIgBABQgHALgNAAIgCABIgGA6IgDAIQgYAjggAhQg5A5g/AhIgDABQgcAIgYAAQgYAAgUgIg");
	this.shape_10.setTransform(79.1,56.4,0.792,0.792);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EDAB86").s().p("AgXCDQi9gHAvgvQAqgpAUhMIAMhEIBagTQBagNACAgQACAiApBoQAVA1AUAtQhCAEg+AAIhGgBg");
	this.shape_11.setTransform(79.8,83.9,0.792,0.792);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F7DC").s().p("AlnNUQimhHiAiAQiAiAhGilQhIisAAi8QAAi7BIisQBGimCAh/QCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCAB/BHCmQBICsAAC7QAAC8hICsQhHCmiAB/Qh/CAimBHQisBIi8AAQi7AAishIg");
	this.shape_12.setTransform(79.9,80.6,0.792,0.792);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1E2A8").s().p("AmKOoQi3hOiMiMQiMiMhOi3QhPi9AAjOQAAjNBPi9QBOi2CMiNQCMiMC3hOQC9hPDNAAQDOAAC9BPQC2BOCNCMQCMCNBNC2QBQC9AADNQAADOhQC9QhNC3iMCMQiNCMi2BOQi9BPjOAAQjNAAi9hPg");
	this.shape_13.setTransform(80.3,80.3,0.792,0.792,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.9,241.9);


(lib._3a5anios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Necesita desarrollar la mayoría de las competencias requeridas del siguiente nivel.", "8px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 53;
	this.text.parent = this;
	this.text.setTransform(71.2,56.2,2.067,2.067);

	this.text_1 = new cjs.Text("3 a 5 años", "bold 8px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 51;
	this.text_1.parent = this;
	this.text_1.setTransform(33,13.5,2.067,2.067);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7931E").s().p("ArDDUIAAiwQAAj3D3AAIOZAAQD3AAAAD3IAACwg");
	this.shape.setTransform(70.6,21.2);

	this.instance = new lib.cajaatraslistoahora("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(73.2,114.5,2.067,2.067,0,0,0,35.4,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,142,201.5);


(lib._3a5a22255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.primercirculo();
	this.instance.parent = this;
	this.instance.setTransform(-267.5,-109.1,0.792,0.792,0,0,0,97,97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.7,-189.9,163.2,245.9);


(lib.reemplazodeemergencia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("El colaborador está listo para ocupar alguna posición determinada en caso de emergencia.", "8px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 53;
	this.text.parent = this;
	this.text.setTransform(70.7,51.9,2.067,2.067);

	this.text_1 = new cjs.Text("Reemplazo de emergencia", "bold 8px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 8;
	this.text_1.lineWidth = 56;
	this.text_1.parent = this;
	this.text_1.setTransform(74.6,8.2,2.067,2.067);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3FA9F5").s().p("ArEDUIAAiwQAAj3D5AAIOXAAQD5AAAAD3IAACwg");
	this.shape.setTransform(71.2,25.9);

	this.instance = new lib.cajaatraslistoahora("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(72.6,119.2,2.067,2.067,0,0,0,35.1,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,142,193.2);


(lib.scrollm2t3mc32crollverde2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var rewind;
		this.rewind = false;
		var forward;
		this.forward = false;
		//funciona como reset, si el usuario regresa a esta pagina no tendra
		//el evento dos veces.....solo una vez
		this.btn_siguiente5.removeAllEventListeners();
		this.btn_atras5.removeAllEventListeners();
		init();
		function init() {
			///FORWARD
			root.btn_siguiente5.addEventListener("mousedown", playForwards);
			function playForwards() {
				root.forward = true;
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				playF();
			}
		
			function playF(e) {
				console.log("avanzando");
				root.gotoAndStop(root.timeline.position + 1);
				if (root.forward) {
					var my_timedProcess = setTimeout(playF, 25);
				}
				
			}
			///REWIND
			root.btn_atras5.addEventListener("click", playReverse);
			function playReverse() {
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				root.rewind = true;
				playR();
			}
		
			function playR(e) {
				console.log("retrocediendo");
				root.gotoAndStop(root.timeline.position - 1);
				if (root.rewind) {
					var my_timedProcess = setTimeout(playR, 25);
				}
				
			}
		
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
	}
	this.frame_85 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
		this.btn_atras5.mouseEnabled=true;
	}
	this.frame_144 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_atras5.mouseEnabled=true;
		
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(56).call(this.frame_85).wait(59).call(this.frame_144).wait(1));

	// cortina scroll4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_111 = new cjs.Graphics().p("EhFJAJaIAA1QMCKTAAAIAAVQg");
	var mask_graphics_112 = new cjs.Graphics().p("EhFJALqIAA3TMCKTAAAIAAXTg");
	var mask_graphics_113 = new cjs.Graphics().p("EhFJAMpIAA5RMCKTAAAIAAZRg");
	var mask_graphics_114 = new cjs.Graphics().p("EhFJANnIAA7NMCKTAAAIAAbNg");
	var mask_graphics_115 = new cjs.Graphics().p("EhFJAOiIAA9DMCKTAAAIAAdDg");
	var mask_graphics_116 = new cjs.Graphics().p("EhFJAPbIAA+1MCKTAAAIAAe1g");
	var mask_graphics_117 = new cjs.Graphics().p("EhFJAQTMAAAgglMCKTAAAMAAAAglg");
	var mask_graphics_118 = new cjs.Graphics().p("EhFJARIMAAAgiPMCKTAAAMAAAAiPg");
	var mask_graphics_119 = new cjs.Graphics().p("EhFJAR7MAAAgj1MCKTAAAMAAAAj1g");
	var mask_graphics_120 = new cjs.Graphics().p("EhFJAStMAAAglZMCKTAAAMAAAAlZg");
	var mask_graphics_121 = new cjs.Graphics().p("EhFJATcMAAAgm3MCKTAAAMAAAAm3g");
	var mask_graphics_122 = new cjs.Graphics().p("EhFJAUJMAAAgoRMCKTAAAMAAAAoRg");
	var mask_graphics_123 = new cjs.Graphics().p("EhFJAU0MAAAgpnMCKTAAAMAAAApng");
	var mask_graphics_124 = new cjs.Graphics().p("EhFJAVdMAAAgq5MCKTAAAMAAAAq5g");
	var mask_graphics_125 = new cjs.Graphics().p("EhFJAWFMAAAgsJMCKTAAAMAAAAsJg");
	var mask_graphics_126 = new cjs.Graphics().p("EhFJAWqMAAAgtTMCKTAAAMAAAAtTg");
	var mask_graphics_127 = new cjs.Graphics().p("EhFJAXNMAAAguZMCKTAAAMAAAAuZg");
	var mask_graphics_128 = new cjs.Graphics().p("EhFJAXuMAAAgvbMCKTAAAMAAAAvbg");
	var mask_graphics_129 = new cjs.Graphics().p("EhFJAYNMAAAgwZMCKTAAAMAAAAwZg");
	var mask_graphics_130 = new cjs.Graphics().p("EhFJAYrMAAAgxVMCKTAAAMAAAAxVg");
	var mask_graphics_131 = new cjs.Graphics().p("EhFJAZGMAAAgyLMCKTAAAMAAAAyLg");
	var mask_graphics_132 = new cjs.Graphics().p("EhFJAZfMAAAgy9MCKTAAAMAAAAy9g");
	var mask_graphics_133 = new cjs.Graphics().p("EhFJAZ2MAAAgzrMCKTAAAMAAAAzrg");
	var mask_graphics_134 = new cjs.Graphics().p("EhFJAaLMAAAg0VMCKTAAAMAAAA0Vg");
	var mask_graphics_135 = new cjs.Graphics().p("EhFJAaeMAAAg07MCKTAAAMAAAA07g");
	var mask_graphics_136 = new cjs.Graphics().p("EhFJAavMAAAg1dMCKTAAAMAAAA1dg");
	var mask_graphics_137 = new cjs.Graphics().p("EhFJAa+MAAAg17MCKTAAAMAAAA17g");
	var mask_graphics_138 = new cjs.Graphics().p("EhFJAbLMAAAg2VMCKTAAAMAAAA2Vg");
	var mask_graphics_139 = new cjs.Graphics().p("EhFJAbWMAAAg2rMCKTAAAMAAAA2rg");
	var mask_graphics_140 = new cjs.Graphics().p("EhFJAbgMAAAg2/MCKTAAAMAAAA2/g");
	var mask_graphics_141 = new cjs.Graphics().p("EhFJAbnMAAAg3NMCKTAAAMAAAA3Ng");
	var mask_graphics_142 = new cjs.Graphics().p("EhFJAbsMAAAg3XMCKTAAAMAAAA3Xg");
	var mask_graphics_143 = new cjs.Graphics().p("EhFJAbvMAAAg3dMCKTAAAMAAAA3dg");
	var mask_graphics_144 = new cjs.Graphics().p("EhFJAbwMAAAg3fMCKTAAAMAAAA3fg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_graphics_111,x:109.5,y:-75.9}).wait(1).to({graphics:mask_graphics_112,x:109.5,y:-71.5}).wait(1).to({graphics:mask_graphics_113,x:109.5,y:-59.6}).wait(1).to({graphics:mask_graphics_114,x:109.5,y:-48}).wait(1).to({graphics:mask_graphics_115,x:109.5,y:-36.9}).wait(1).to({graphics:mask_graphics_116,x:109.5,y:-26.1}).wait(1).to({graphics:mask_graphics_117,x:109.5,y:-15.7}).wait(1).to({graphics:mask_graphics_118,x:109.5,y:-5.7}).wait(1).to({graphics:mask_graphics_119,x:109.5,y:4}).wait(1).to({graphics:mask_graphics_120,x:109.5,y:13.3}).wait(1).to({graphics:mask_graphics_121,x:109.5,y:22.2}).wait(1).to({graphics:mask_graphics_122,x:109.5,y:30.7}).wait(1).to({graphics:mask_graphics_123,x:109.5,y:38.8}).wait(1).to({graphics:mask_graphics_124,x:109.5,y:46.6}).wait(1).to({graphics:mask_graphics_125,x:109.5,y:53.9}).wait(1).to({graphics:mask_graphics_126,x:109.5,y:60.9}).wait(1).to({graphics:mask_graphics_127,x:109.5,y:67.6}).wait(1).to({graphics:mask_graphics_128,x:109.5,y:73.8}).wait(1).to({graphics:mask_graphics_129,x:109.5,y:79.7}).wait(1).to({graphics:mask_graphics_130,x:109.5,y:85.1}).wait(1).to({graphics:mask_graphics_131,x:109.5,y:90.3}).wait(1).to({graphics:mask_graphics_132,x:109.5,y:95}).wait(1).to({graphics:mask_graphics_133,x:109.5,y:99.3}).wait(1).to({graphics:mask_graphics_134,x:109.5,y:103.3}).wait(1).to({graphics:mask_graphics_135,x:109.5,y:106.9}).wait(1).to({graphics:mask_graphics_136,x:109.5,y:110.1}).wait(1).to({graphics:mask_graphics_137,x:109.5,y:112.9}).wait(1).to({graphics:mask_graphics_138,x:109.5,y:115.4}).wait(1).to({graphics:mask_graphics_139,x:109.5,y:117.5}).wait(1).to({graphics:mask_graphics_140,x:109.5,y:119.2}).wait(1).to({graphics:mask_graphics_141,x:109.5,y:120.5}).wait(1).to({graphics:mask_graphics_142,x:109.5,y:121.5}).wait(1).to({graphics:mask_graphics_143,x:109.5,y:122}).wait(1).to({graphics:mask_graphics_144,x:109.5,y:122.2}).wait(1));

	// texto 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97AF68").s().p("AgYM+QgKgKAAgPQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAPgLAKQgKAKgOAAQgNAAgLgKgAgYEcQgKgJAAgPQAAgOAKgKQALgLANABQAOgBAKALQALAKAAAOQAAAPgLAJQgKAKgOAAQgNAAgLgKgAgYjwQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAPgLAKQgKAKgOAAQgNAAgLgKgAgYsMQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAPgLAKQgKAKgOAAQgNAAgLgKg");
	this.shape.setTransform(-42,99.2);

	this.instance = new lib.M03_TMR_CONFIDENCIAL2crollverde2();
	this.instance.parent = this;
	this.instance.setTransform(-190.8,87.6,0.49,0.49,0,0,0,145.4,145.6);

	this.text = new cjs.Text("Lineamientos generales de la sesión", "bold 20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(-190.7,174);

	this.text_1 = new cjs.Text("La edad y movilidad del colaborador no deberá ser un factor que impacte en la evaluación de potencial y desempeño. \n\nLa movilidad se tomará en cuenta únicamente para decisiones de siguientes asignaciones.\n\nLos colaboradores que tienen menos de 6 meses en la posición serán catalogados como “recién ingreso”.\n\nSi durante la conversación surgiera algún tema que no está relacionado con el potencial, el desempeño o la posible siguiente asignación de algún colaborador, el equipo de Capital Humano pondrá ese tema en el “parking lot”, a revisar posteriormente en privado.", "16px 'Arial'", "#666666");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 571;
	this.text_1.parent = this;
	this.text_1.setTransform(-30.2,9.2);

	var maskedShapeInstanceList = [this.shape,this.instance,this.text,this.text_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.instance},{t:this.shape}]},111).wait(34));

	// cortina scroll3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_55 = new cjs.Graphics().p("EhFJAGNIAA1QMCKTAAAIAAVQg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EhFJAJKIAA3gMCKTAAAIAAXgg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EhFJAMAIAA5rMCKTAAAIAAZrg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EhFJAN5IAA7xMCKTAAAIAAbxg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EhFJAO5IAA9xMCKTAAAIAAdxg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EhFJAP3IAA/tMCKTAAAIAAftg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EhFJAQzMAAAghlMCKTAAAMAAAAhlg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EhFJARsMAAAgjXMCKTAAAMAAAAjXg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EhFJASjMAAAglFMCKTAAAMAAAAlFg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EhFJATXMAAAgmtMCKTAAAMAAAAmtg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EhFJAUJMAAAgoRMCKTAAAMAAAAoRg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EhFJAU4MAAAgpvMCKTAAAMAAAApvg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EhFJAVlMAAAgrJMCKTAAAMAAAArJg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EhFJAWQMAAAgsfMCKTAAAMAAAAsfg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EhFJAW4MAAAgtvMCKTAAAMAAAAtvg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EhFJAXeMAAAgu7MCKTAAAMAAAAu7g");
	var mask_1_graphics_71 = new cjs.Graphics().p("EhFJAYBMAAAgwBMCKTAAAMAAAAwBg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EhFJAYiMAAAgxDMCKTAAAMAAAAxDg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EhFJAZAMAAAgx/MCKTAAAMAAAAx/g");
	var mask_1_graphics_74 = new cjs.Graphics().p("EhFJAZcMAAAgy3MCKTAAAMAAAAy3g");
	var mask_1_graphics_75 = new cjs.Graphics().p("EhFJAZ2MAAAgzrMCKTAAAMAAAAzrg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EhFJAaNMAAAg0ZMCKTAAAMAAAA0Zg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EhFJAaiMAAAg1DMCKTAAAMAAAA1Dg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EhFJAa0MAAAg1nMCKTAAAMAAAA1ng");
	var mask_1_graphics_79 = new cjs.Graphics().p("EhFJAbEMAAAg2HMCKTAAAMAAAA2Hg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EhFJAbRMAAAg2hMCKTAAAMAAAA2hg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EhFJAbcMAAAg23MCKTAAAMAAAA23g");
	var mask_1_graphics_82 = new cjs.Graphics().p("EhFJAblMAAAg3JMCKTAAAMAAAA3Jg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EhFJAbrMAAAg3VMCKTAAAMAAAA3Vg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EhFJAbuMAAAg3bMCKTAAAMAAAA3bg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EhFJAbwMAAAg3fMCKTAAAMAAAA3fg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EhFJAZ+MAAAgz7MCKTAAAMAAAAz7g");
	var mask_1_graphics_87 = new cjs.Graphics().p("EhFJAYSMAAAgwgMCKTAAAMAAAAwgg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EhFJAYrMAAAgtOMCKTAAAMAAAAtOg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EhFJAZEMAAAgqGMCKTAAAMAAAAqGg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EhFJAZbMAAAgnGMCKTAAAMAAAAnGg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EhFJAZyMAAAgkSMCKTAAAMAAAAkSg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EhFJAaHMAAAghlMCKTAAAMAAAAhlg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EhFJAabIAA/CMCKTAAAIAAfCg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EhFJAauIAA8pMCKTAAAIAAcpg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EhFJAa/IAA6ZMCKTAAAIAAaZg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EhFJAbQIAA4SMCKTAAAIAAYSg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EhFJAbfIAA2UMCKTAAAIAAWUg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EhFJAbuIAA0gMCKTAAAIAAUgg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EhFJAb7IAAy1MCKTAAAIAAS1g");
	var mask_1_graphics_100 = new cjs.Graphics().p("EhFJAcHIAAxTMCKTAAAIAARTg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EhFJAcSIAAv7MCKTAAAIAAP7g");
	var mask_1_graphics_102 = new cjs.Graphics().p("EhFJAcbIAAurMCKTAAAIAAOrg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EhFJAckIAAtmMCKTAAAIAANmg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EhFJAcrIAAspMCKTAAAIAAMpg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EhFJAcyIAAr2MCKTAAAIAAL2g");
	var mask_1_graphics_106 = new cjs.Graphics().p("EhFJAc3IAArMMCKTAAAIAALMg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EhFJAc7IAAqsMCKTAAAIAAKsg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EhFJAc+IAAqUMCKTAAAIAAKUg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EhFJAc/IAAqGMCKTAAAIAAKGg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EhFJAdAIAAqBMCKTAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_1_graphics_55,x:109.5,y:-96.4}).wait(1).to({graphics:mask_1_graphics_56,x:109.5,y:-91.9}).wait(1).to({graphics:mask_1_graphics_57,x:109.5,y:-87.6}).wait(1).to({graphics:mask_1_graphics_58,x:109.5,y:-77.8}).wait(1).to({graphics:mask_1_graphics_59,x:109.5,y:-63.3}).wait(1).to({graphics:mask_1_graphics_60,x:109.5,y:-49.3}).wait(1).to({graphics:mask_1_graphics_61,x:109.5,y:-35.9}).wait(1).to({graphics:mask_1_graphics_62,x:109.5,y:-23}).wait(1).to({graphics:mask_1_graphics_63,x:109.5,y:-10.6}).wait(1).to({graphics:mask_1_graphics_64,x:109.5,y:1.2}).wait(1).to({graphics:mask_1_graphics_65,x:109.5,y:12.4}).wait(1).to({graphics:mask_1_graphics_66,x:109.5,y:23.1}).wait(1).to({graphics:mask_1_graphics_67,x:109.5,y:33.3}).wait(1).to({graphics:mask_1_graphics_68,x:109.5,y:42.9}).wait(1).to({graphics:mask_1_graphics_69,x:109.5,y:52}).wait(1).to({graphics:mask_1_graphics_70,x:109.5,y:60.5}).wait(1).to({graphics:mask_1_graphics_71,x:109.5,y:68.4}).wait(1).to({graphics:mask_1_graphics_72,x:109.5,y:75.8}).wait(1).to({graphics:mask_1_graphics_73,x:109.5,y:82.7}).wait(1).to({graphics:mask_1_graphics_74,x:109.5,y:89}).wait(1).to({graphics:mask_1_graphics_75,x:109.5,y:94.8}).wait(1).to({graphics:mask_1_graphics_76,x:109.5,y:100}).wait(1).to({graphics:mask_1_graphics_77,x:109.5,y:104.7}).wait(1).to({graphics:mask_1_graphics_78,x:109.5,y:108.8}).wait(1).to({graphics:mask_1_graphics_79,x:109.5,y:112.3}).wait(1).to({graphics:mask_1_graphics_80,x:109.5,y:115.4}).wait(1).to({graphics:mask_1_graphics_81,x:109.5,y:117.8}).wait(1).to({graphics:mask_1_graphics_82,x:109.5,y:119.7}).wait(1).to({graphics:mask_1_graphics_83,x:109.5,y:121.1}).wait(1).to({graphics:mask_1_graphics_84,x:109.5,y:121.9}).wait(1).to({graphics:mask_1_graphics_85,x:109.5,y:122.2}).wait(1).to({graphics:mask_1_graphics_86,x:109.5,y:139.2}).wait(1).to({graphics:mask_1_graphics_87,x:109.5,y:155.3}).wait(1).to({graphics:mask_1_graphics_88,x:109.5,y:157.9}).wait(1).to({graphics:mask_1_graphics_89,x:109.5,y:160.4}).wait(1).to({graphics:mask_1_graphics_90,x:109.5,y:162.7}).wait(1).to({graphics:mask_1_graphics_91,x:109.5,y:165}).wait(1).to({graphics:mask_1_graphics_92,x:109.5,y:167.1}).wait(1).to({graphics:mask_1_graphics_93,x:109.5,y:169.1}).wait(1).to({graphics:mask_1_graphics_94,x:109.5,y:171}).wait(1).to({graphics:mask_1_graphics_95,x:109.5,y:172.7}).wait(1).to({graphics:mask_1_graphics_96,x:109.5,y:174.4}).wait(1).to({graphics:mask_1_graphics_97,x:109.5,y:175.9}).wait(1).to({graphics:mask_1_graphics_98,x:109.5,y:177.4}).wait(1).to({graphics:mask_1_graphics_99,x:109.5,y:178.7}).wait(1).to({graphics:mask_1_graphics_100,x:109.5,y:179.9}).wait(1).to({graphics:mask_1_graphics_101,x:109.5,y:181}).wait(1).to({graphics:mask_1_graphics_102,x:109.5,y:181.9}).wait(1).to({graphics:mask_1_graphics_103,x:109.5,y:182.8}).wait(1).to({graphics:mask_1_graphics_104,x:109.5,y:183.5}).wait(1).to({graphics:mask_1_graphics_105,x:109.5,y:184.2}).wait(1).to({graphics:mask_1_graphics_106,x:109.5,y:184.7}).wait(1).to({graphics:mask_1_graphics_107,x:109.5,y:185.1}).wait(1).to({graphics:mask_1_graphics_108,x:109.5,y:185.4}).wait(1).to({graphics:mask_1_graphics_109,x:109.5,y:185.5}).wait(1).to({graphics:mask_1_graphics_110,x:109.5,y:185.6}).wait(1).to({graphics:null,x:0,y:0}).wait(34));

	// texto3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#97AF68").s().p("AgYREQgKgKAAgOQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOQAAAOgLAKQgKAKgOAAQgNAAgLgKgAgYIkQgKgKAAgPQAAgOAKgLQALgKANAAQAOAAAKAKQALALAAAOQAAAPgLAKQgKAJgOABQgNgBgLgJgAgYinQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOQAAAPgLAKQgKAKgOAAQgNAAgLgKgAgYqgQgKgLAAgOQAAgOAKgKQALgLANAAQAOAAAKALQALAKAAAOQAAAOgLALQgKAKgOgBQgNABgLgKgAgYwSQgKgLAAgOQAAgOAKgLQALgJANgBQAOABAKAJQALALAAAOQAAAOgLALQgKAKgOgBQgNABgLgKg");
	this.shape_1.setTransform(-42,84.5);

	this.text_2 = new cjs.Text("Toda la información que se comparta será confidencial. \n\nToda discusión se deberá basar en situaciones específicas, conductas observables y resultados puntuales.\n\nDurante la sesión, la conversación girará en torno a la posición que los colaboradores poseen dentro de la matriz de 9-box y evaluar si deben cambiar de cuadrante.\n\nÚnicamente se permite un movimiento, ya sea en el eje horizontal o en el vertical. \n\nEn caso de que no se cuente con la aprobación de más de 3 líderes, será responsabilidad del jefe contribuir al involucramiento y exposición del colaborador y sus resultados para que el equipo de liderazgo tenga la información suficiente para sustentar cualquier cambio en su evaluación para el próximo período.", "16px 'Arial'", "#666666");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 571;
	this.text_2.parent = this;
	this.text_2.setTransform(-30.2,-31.8);

	var maskedShapeInstanceList = [this.shape_1,this.text_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.shape_1}]},55).to({state:[]},56).to({state:[]},33).wait(1));

	// cortina scroll (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EhFJAGNIAA1QMCKTAAAIAAVQg");
	var mask_2_graphics_1 = new cjs.Graphics().p("EhFJAJQIAA3lMCKTAAAIAAXlg");
	var mask_2_graphics_2 = new cjs.Graphics().p("EhFJAMMIAA50MCKTAAAIAAZ0g");
	var mask_2_graphics_3 = new cjs.Graphics().p("EhFJAOAIAA7/MCKTAAAIAAb/g");
	var mask_2_graphics_4 = new cjs.Graphics().p("EhFJAPCIAA+DMCKTAAAIAAeDg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EhFJAQCMAAAggDMCKTAAAMAAAAgDg");
	var mask_2_graphics_6 = new cjs.Graphics().p("EhFJAQ/MAAAgh9MCKTAAAMAAAAh9g");
	var mask_2_graphics_7 = new cjs.Graphics().p("EhFJAR6MAAAgjzMCKTAAAMAAAAjzg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EhFJASxMAAAglhMCKTAAAMAAAAlhg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EhFJATnMAAAgnNMCKTAAAMAAAAnNg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EhFJAUaMAAAgozMCKTAAAMAAAAozg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EhFJAVKMAAAgqTMCKTAAAMAAAAqTg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EhFJAV3MAAAgrtMCKTAAAMAAAArtg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EhFJAWiMAAAgtDMCKTAAAMAAAAtDg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EhFJAXLMAAAguVMCKTAAAMAAAAuVg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EhFJAXwMAAAgvfMCKTAAAMAAAAvfg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EhFJAYUMAAAgwnMCKTAAAMAAAAwng");
	var mask_2_graphics_17 = new cjs.Graphics().p("EhFJAY0MAAAgxnMCKTAAAMAAAAxng");
	var mask_2_graphics_18 = new cjs.Graphics().p("EhFJAZSMAAAgyjMCKTAAAMAAAAyjg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EhFJAZtMAAAgzZMCKTAAAMAAAAzZg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EhFJAaGMAAAg0LMCKTAAAMAAAA0Lg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EhFJAacMAAAg03MCKTAAAMAAAA03g");
	var mask_2_graphics_22 = new cjs.Graphics().p("EhFJAawMAAAg1fMCKTAAAMAAAA1fg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EhFJAbBMAAAg2BMCKTAAAMAAAA2Bg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EhFJAbPMAAAg2dMCKTAAAMAAAA2dg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EhFJAbbMAAAg21MCKTAAAMAAAA21g");
	var mask_2_graphics_26 = new cjs.Graphics().p("EhFJAbkMAAAg3HMCKTAAAMAAAA3Hg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EhFJAbqMAAAg3TMCKTAAAMAAAA3Tg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EhFJAbuMAAAg3bMCKTAAAMAAAA3bg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EhFJAbwMAAAg3fMCKTAAAMAAAA3fg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EhFJAZ+MAAAgz7MCKTAAAMAAAAz7g");
	var mask_2_graphics_31 = new cjs.Graphics().p("EhFJAYSMAAAgwgMCKTAAAMAAAAwgg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EhFJAYrMAAAgtOMCKTAAAMAAAAtOg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EhFJAZEMAAAgqGMCKTAAAMAAAAqGg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EhFJAZbMAAAgnGMCKTAAAMAAAAnGg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EhFJAZyMAAAgkSMCKTAAAMAAAAkSg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EhFJAaHMAAAghlMCKTAAAMAAAAhlg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EhFJAabIAA/CMCKTAAAIAAfCg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EhFJAauIAA8pMCKTAAAIAAcpg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EhFJAa/IAA6ZMCKTAAAIAAaZg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EhFJAbQIAA4SMCKTAAAIAAYSg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EhFJAbfIAA2UMCKTAAAIAAWUg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EhFJAbuIAA0gMCKTAAAIAAUgg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EhFJAb7IAAy1MCKTAAAIAAS1g");
	var mask_2_graphics_44 = new cjs.Graphics().p("EhFJAcHIAAxTMCKTAAAIAARTg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EhFJAcSIAAv7MCKTAAAIAAP7g");
	var mask_2_graphics_46 = new cjs.Graphics().p("EhFJAcbIAAurMCKTAAAIAAOrg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EhFJAckIAAtmMCKTAAAIAANmg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EhFJAcrIAAspMCKTAAAIAAMpg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EhFJAcyIAAr2MCKTAAAIAAL2g");
	var mask_2_graphics_50 = new cjs.Graphics().p("EhFJAc3IAArMMCKTAAAIAALMg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EhFJAc7IAAqsMCKTAAAIAAKsg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EhFJAc+IAAqUMCKTAAAIAAKUg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EhFJAc/IAAqGMCKTAAAIAAKGg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EhFJAdAIAAqBMCKTAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:109.5,y:-96.4}).wait(1).to({graphics:mask_2_graphics_1,x:109.5,y:-91.8}).wait(1).to({graphics:mask_2_graphics_2,x:109.5,y:-87.3}).wait(1).to({graphics:mask_2_graphics_3,x:109.5,y:-76.3}).wait(1).to({graphics:mask_2_graphics_4,x:109.5,y:-61.3}).wait(1).to({graphics:mask_2_graphics_5,x:109.5,y:-46.9}).wait(1).to({graphics:mask_2_graphics_6,x:109.5,y:-33.1}).wait(1).to({graphics:mask_2_graphics_7,x:109.5,y:-19.9}).wait(1).to({graphics:mask_2_graphics_8,x:109.5,y:-7.3}).wait(1).to({graphics:mask_2_graphics_9,x:109.5,y:4.7}).wait(1).to({graphics:mask_2_graphics_10,x:109.5,y:16.2}).wait(1).to({graphics:mask_2_graphics_11,x:109.5,y:27.1}).wait(1).to({graphics:mask_2_graphics_12,x:109.5,y:37.3}).wait(1).to({graphics:mask_2_graphics_13,x:109.5,y:47}).wait(1).to({graphics:mask_2_graphics_14,x:109.5,y:56.1}).wait(1).to({graphics:mask_2_graphics_15,x:109.5,y:64.7}).wait(1).to({graphics:mask_2_graphics_16,x:109.5,y:72.6}).wait(1).to({graphics:mask_2_graphics_17,x:109.5,y:79.9}).wait(1).to({graphics:mask_2_graphics_18,x:109.5,y:86.7}).wait(1).to({graphics:mask_2_graphics_19,x:109.5,y:92.8}).wait(1).to({graphics:mask_2_graphics_20,x:109.5,y:98.4}).wait(1).to({graphics:mask_2_graphics_21,x:109.5,y:103.4}).wait(1).to({graphics:mask_2_graphics_22,x:109.5,y:107.8}).wait(1).to({graphics:mask_2_graphics_23,x:109.5,y:111.6}).wait(1).to({graphics:mask_2_graphics_24,x:109.5,y:114.9}).wait(1).to({graphics:mask_2_graphics_25,x:109.5,y:117.5}).wait(1).to({graphics:mask_2_graphics_26,x:109.5,y:119.6}).wait(1).to({graphics:mask_2_graphics_27,x:109.5,y:121}).wait(1).to({graphics:mask_2_graphics_28,x:109.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_29,x:109.5,y:122.2}).wait(1).to({graphics:mask_2_graphics_30,x:109.5,y:139.2}).wait(1).to({graphics:mask_2_graphics_31,x:109.5,y:155.3}).wait(1).to({graphics:mask_2_graphics_32,x:109.5,y:157.9}).wait(1).to({graphics:mask_2_graphics_33,x:109.5,y:160.4}).wait(1).to({graphics:mask_2_graphics_34,x:109.5,y:162.7}).wait(1).to({graphics:mask_2_graphics_35,x:109.5,y:165}).wait(1).to({graphics:mask_2_graphics_36,x:109.5,y:167.1}).wait(1).to({graphics:mask_2_graphics_37,x:109.5,y:169.1}).wait(1).to({graphics:mask_2_graphics_38,x:109.5,y:171}).wait(1).to({graphics:mask_2_graphics_39,x:109.5,y:172.7}).wait(1).to({graphics:mask_2_graphics_40,x:109.5,y:174.4}).wait(1).to({graphics:mask_2_graphics_41,x:109.5,y:175.9}).wait(1).to({graphics:mask_2_graphics_42,x:109.5,y:177.4}).wait(1).to({graphics:mask_2_graphics_43,x:109.5,y:178.7}).wait(1).to({graphics:mask_2_graphics_44,x:109.5,y:179.9}).wait(1).to({graphics:mask_2_graphics_45,x:109.5,y:181}).wait(1).to({graphics:mask_2_graphics_46,x:109.5,y:181.9}).wait(1).to({graphics:mask_2_graphics_47,x:109.5,y:182.8}).wait(1).to({graphics:mask_2_graphics_48,x:109.5,y:183.5}).wait(1).to({graphics:mask_2_graphics_49,x:109.5,y:184.2}).wait(1).to({graphics:mask_2_graphics_50,x:109.5,y:184.7}).wait(1).to({graphics:mask_2_graphics_51,x:109.5,y:185.1}).wait(1).to({graphics:mask_2_graphics_52,x:109.5,y:185.4}).wait(1).to({graphics:mask_2_graphics_53,x:109.5,y:185.5}).wait(1).to({graphics:mask_2_graphics_54,x:109.5,y:185.6}).wait(1).to({graphics:null,x:0,y:0}).wait(90));

	// texto1
	this.instance_1 = new lib.M03_TMR_CONFIDENCIAL2crollverde2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(444,108.7,0.49,0.49,0,0,0,145.4,145.6);

	this.text_3 = new cjs.Text("Para llevar a cabo las sesiones de calibración de manera ágil y efectiva hemos diseñado un conjunto de criterios que nos guiarán en el proceso de revisión y discusión de los resultados de potencial y desempeño de nuestros colaboradores. Es importante que los revises antes de la reunión e intentes apegarte a las ideas contenidas. ", "18px 'Arial'", "#666666");
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 382;
	this.text_3.parent = this;
	this.text_3.setTransform(-29.3,31.4);

	var maskedShapeInstanceList = [this.instance_1,this.text_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.instance_1}]}).to({state:[]},55).wait(90));

	// Boton retroceder
	this.btn_atras5 = new lib.AS_LG_150Botónpaginación2crollverde2();
	this.btn_atras5.parent = this;
	this.btn_atras5.setTransform(584.9,31.7,1,1,0,90,-90);
	this.btn_atras5._off = true;
	new cjs.ButtonHelper(this.btn_atras5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_atras5).wait(55).to({_off:false},0).wait(90));

	// Botón avanzar
	this.btn_siguiente5 = new lib.AS_LG_150Botónpaginación2crollverde2();
	this.btn_siguiente5.parent = this;
	this.btn_siguiente5.setTransform(585.1,210.1,1,1,90);
	new cjs.ButtonHelper(this.btn_siguiente5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente5).to({_off:true},86).wait(59));

	// Botones Claros/Siempre
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHApIg5hDQgFgGAFgHQAEgGAIACIAyAPIAFAAIAygPQAIgCAEAGQAFAHgFAGIg5BDQgDAEgFAAQgEAAgDgEg");
	this.shape_2.setTransform(575.4,221.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA1AsIgygPIgFAAIgyAPQgIACgEgGQgFgHAFgGIA5hDQADgEAEAAQAFAAADAEIA5BDQAFAGgFAHQgDAFgFAAIgEgBg");
	this.shape_3.setTransform(574.8,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhDQoQgdgcAAgqQAAgpAdgdQAdgdAoAAQAqAAAdAdQAcAdAAApQAAAqgcAcQgdAdgqAAQgoAAgdgdgAhBuVIgGgGQgdgdAAgpQAAgpAdgdQARgSAVgHQAPgEARgBQAQABAPAEQAVAHARASQAeAdAAApQAAApgeAdIgFAGQgbAXglAAQglAAgbgXg");
	this.shape_4.setTransform(575,120.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(145));

	// Barra Desplazamiento
	this.instance_2 = new lib.AS_LG_152ccrollverde22crollverde2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(574.5,69.7,1,1,90,0,0,22.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({y:183.6},115).wait(1));

	// Barra fondo
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AAACAE").s().p("AgTLwQgJgIABgLIAA25QgBgLAJgIQAIgIALAAQALAAAJAIQAIAIAAALIAAW5QAAALgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_5.setTransform(574.5,121.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(564.8,11.2,20.3,218.7);


(lib.puestos1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M03_TMR_DESICION();
	this.instance.parent = this;
	this.instance.setTransform(95.9,91.5,0.294,0.294,0,0,0,196.5,198.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE5DF").s().p("ArlCOIgnhDQgbgtgIgZQFch7FKgTQHbgdHeCwQgIAYgbArQghA0gHANg");
	this.shape.setTransform(90.6,122.8,0.911,0.911);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFE5DF").s().p("AncBuQjTiFhwjgIY/AAQhwDgjUCFQjZCKkDAAQkCAAjaiKg");
	this.shape_1.setTransform(90.5,149.2,0.911,0.911);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFE5DF").s().p("AiIHfQlLAUlbB8QgchYgVhYQgch4AAg/QAAi1BGilQBEigB7h7QB8h8CghEQClhGC1AAQC1AACmBGQCgBEB8B8QB7B7BECgQBGClAAC1QAABAgcB5QgVBfgbBUQneixnaAcg");
	this.shape_2.setTransform(90.5,66.5,0.911,0.911);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AmFOcQi1hMiKiKQiLiLhMi1QhPi6AAjMQAAjLBPi7QBMizCLiLQCKiLC1hMQC6hPDLAAQDMAAC7BPQC0BMCKCLQCLCLBMCzQBPC7AADLQAADMhPC6QhMC1iLCLQiKCKi0BMQi7BPjMAAQjLAAi6hPg");
	this.shape_3.setTransform(91.4,91.4,0.911,0.911);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,182.8);


(lib.puestoscriticosiconote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puestos1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(182.3,179.2,1.971,1.971,0,0,0,91.5,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,-1.1,360.3,360.3);


(lib.primerflechaazulam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Garantizar que el individuo se sienta valorado y que se reconozca y aprecie su contribución a la organización.\nDiscutir cómo puede continuar agregando valor al equipo. Considerar cómo transferir sus habilidades a los demás.", "35px 'Arial'", "#333333");
	this.text.lineHeight = 41;
	this.text.lineWidth = 573;
	this.text.parent = this;
	this.text.setTransform(37.8,160.9,0.518,0.518);

	this.instance = new lib.M03_TMR_aam();
	this.instance.parent = this;
	this.instance.setTransform(177.3,71.4,0.7,0.7,0,0,0,97,97.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1E2A8").s().p("A51YOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMA0tAAAIAASvIC4GeIi4GeIAAQwg");
	this.shape.setTransform(190.4,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.8,416.3);


(lib.primerflechaazurosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Identificar las principales razones del bajo desempeño. Acordar medidas a adoptar para revertir el desempeño. Establecer plazos para mejorar, realizar un seguimiento y tomar medidas.", "35px 'Arial'");
	this.text.lineHeight = 41;
	this.text.lineWidth = 573;
	this.text.parent = this;
	this.text.setTransform(37.8,160.9,0.518,0.518);

	this.instance = new lib.M03_TMR_rosa();
	this.instance.parent = this;
	this.instance.setTransform(177.3,71.4,0.7,0.7,0,0,0,97,97.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9999").s().p("A51YOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMA0tAAAIAASvIC4GeIi4GeIAAQwg");
	this.shape.setTransform(190.4,194.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380.8,416.3);


(lib.nohaysucesor22255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boli4new("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(169.4,-70.9,1,1,0,0,0,80.4,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89,-191.9,160.9,241.9);


(lib.mc16tema4mod3 = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.caja_respuestas1M2T3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(855.9,360.8,1,1,0,0,0,257.5,142);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:595.9,alpha:1},24,cjs.Ease.get(1)).wait(9));

	// instrucciones
	this.instance_2 = new lib.instruccionesmc1t2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.2,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(9));

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCaQg/AAguguQgtgsAAhAQAAg+AtguQAugtA/AAIA9AAQBAAAAtAtQAtAuAAA+QAABAgtAsQgtAuhAAAg");
	this.shape.setTransform(-48.2,462.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,35.3,1316.6,442.2);


(lib.mc3tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// instruccion
	this.instance = new lib.flechamueveroll24ene("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(868.3,32.9,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic en las flechas para ver más información.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(460.1,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},26).wait(28));

	// Layer 2
	this.text_1 = new cjs.Text("Lineamientos generales de la sesión", "bold 20px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 132;
	this.text_1.parent = this;
	this.text_1.setTransform(110,274.5);

	this.instance_1 = new lib.M03_TMR_DESEM2crollverde2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.7,180.3,0.356,0.356,0,0,0,197,188.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.text_1}]},26).wait(28));

	// icono
	this.instance_2 = new lib.iconoinfoposicionesbien2crollverde2("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.6,238.5,1,1,0,0,0,75,152.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({x:113.6,alpha:1,mode:"synched"},18,cjs.Ease.get(1)).wait(19));

	// scroll
	this.instance_3 = new lib.scrollm2t3mc32crollverde2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303,128.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(28));

	// fondo scroll
	this.instance_4 = new lib.fondoscroll12crollverde2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(240.1,223.8,0.459,1,0,0,0,445.9,169.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({scaleX:1,x:451.2,alpha:1},19,cjs.Ease.get(1)).wait(28));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,506,50,34);


(lib.mc1tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_169 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(1));

	// Layer 2
	this.instance = new lib.puestoscriticosiconote("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(858.1,-46.9,0.921,0.921,56.9,0,0,165,136.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,rotation:0,x:658.2,y:-47,alpha:1},13,cjs.Ease.get(1)).wait(52));

	// caja larga
	this.instance_1 = new lib.cajagdemc1t2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.5,-75.3,0.454,1,0,0,0,363.4,93);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({scaleX:0.99,x:367.2,y:-75.2,alpha:0.98},13,cjs.Ease.get(1)).to({scaleX:1,x:363.5,y:-75.3,alpha:1},2).wait(36));

	// caja gris
	this.instance_2 = new lib.cajagrismc1t2m2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).to({y:79.6,alpha:1},15,cjs.Ease.get(1)).wait(20));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgxAAhHQAAhGAwgxQAwgyBEAAQBFAAAwAyQAwAxAABGQAABHgwAxQgwAyhFAAQhEAAgwgyg");
	this.shape.setTransform(-191.3,293.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,276.4,33,34);


(lib.mc_inFOtmr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// Layer 2
	this.instance = new lib.AS_LG_MOV_10();
	this.instance.parent = this;
	this.instance.setTransform(-67.2,-28.7,1,1,0,0,0,30,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-421},28,cjs.Ease.get(1)).wait(4));

	// Layer 3
	this.instance_1 = new lib.barrabcdespliega("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-231.2,-27.2,0.478,1,0,0,0,394.9,43);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.02,x:-466.4},26,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_2 = new lib.info01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-25.3,alpha:1},28,cjs.Ease.get(1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452.2,-68,424.8,85.1);


(lib.M03_TMR_INVOLUCRADOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_25();
	this.instance.parent = this;
	this.instance.setTransform(105.9,90,1,1,0,0,0,21.9,15.6);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(104,87.1,1,1,0,0,0,21.4,15.9);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102.2,84.1,1,1,0,0,0,20.7,13.8);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(100.8,80.8,1,1,0,0,0,19.3,11.4);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(95.8,79.6,1,1,0,0,0,14.5,9.6);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.6,80.5,1,1,0,0,0,2,11.3);
	this.instance_5.alpha = 0.391;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCD1D0").s().p("AguB7IidhJQgVgxgMg5QgOhEAEgiIAHgUIAyASQA1ATAQALQApAaBLBEQBBA7ADAAQAMAABTjSIBZAiIglCcQgtChgpAXIgEABQgYAAiPhBg");
	this.shape.setTransform(103.7,86.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F3231").s().p("Ai/CNIgOgDQgCABgFgNQgIgYgKhBQgFgfANgYQAKgUASgNQgCgbAJgWQAOgiAlgRIgKAPQgLASgDAOQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAVgaAogTQBAgeBbgBQghAFgYANQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAngEAmADQA5AFAlAYQgKgCgPABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAQAdALAUAUQAhAgAAAsQgLgPgIgIIgCAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAMAjgJAiQgBgKgMgKQgBA1gPBGQgQgBgLARIgHASQABgZgBgdQgDg7gPgXQgpg9htACQgjABgmAGIgeAHQgUAwgaAcQgCAJgDA3IgDA0QgCgcgOgKg");
	this.shape_1.setTransform(59.7,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3231").s().p("AAyAgQgJgBgHgGQgKgIAAgMIAAgCQgKgHgJABIgCAAQgKgBgIAHIAAACQAAAMgKAIQgHAGgKABIhRAAIgCgBQgYgKAAgRIAAgEIgWACIgFgQIAegEQAGgLASgCIABgBIBLAAQAVABAIAPQALgFAKABQALgBALAFQAHgPAWgBIBKAAIACABQASACAGALIAWADIgDAKIgRAFIAAAEQAAAHgEAHQgHAIgMAFIgCABgAAjgPIAAAYIACAFQAEAHAGAEIBXAAQALgDgBgMIAAgYQgCgIgJAAIhYAAQgKADAAAEgAiIgPIAAAYIABAFQAEAHAGAEIBYAAQAKgDAAgMIAAgYQgDgIgJAAIhXAAQgKADAAAEg");
	this.shape_2.setTransform(58.1,31.7);

	this.instance_6 = new lib.Group_6_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(84.4,86.8,1,1,0,0,0,3.4,15.4);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(35,86.8,1,1,0,0,0,3.3,15.4);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(25.9,115.4,1,1,0,0,0,11.4,31.7);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(27.1,119.9,1,1,0,0,0,10.9,28.2);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(27.8,123.8,1,1,0,0,0,10.4,24.7);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(23.5,110.2,1,1,0,0,0,11.4,35.1);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(21.2,108,1,1,0,0,0,11.6,35.8);
	this.instance_12.alpha = 0.391;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9B1BA").s().p("Ag7AOIBig5IAVArQgCARgfAPIgfAMg");
	this.shape_3.setTransform(65.2,69.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A9B1BA").s().p("AgVAgQgmgWgCgQIAVgrIBmBGIguAeQgSgIgTgLg");
	this.shape_4.setTransform(53,68.6);

	this.instance_13 = new lib.Group_13_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(61.5,110.6,1,1,0,0,0,1.2,40.5);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(65.9,110.1,1,1,0,0,0,1.2,40.5);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(69.6,109.7,1,1,0,0,0,1.2,40.5);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16_2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(80.5,109.1,1,1,0,0,0,1.3,39.3);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17_2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(77.4,109.3,1,1,0,0,0,1.3,40.5);
	this.instance_17.alpha = 0.391;

	this.instance_18 = new lib.Group_18_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(72.9,108.7,1,1,0,0,0,1.2,40.5);
	this.instance_18.alpha = 0.391;

	this.instance_19 = new lib.Group_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(57.7,110.6,1,1,0,0,0,1.2,40.5);
	this.instance_19.alpha = 0.391;

	this.instance_20 = new lib.Group_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(53.3,110.1,1,1,0,0,0,1.3,40.5);
	this.instance_20.alpha = 0.391;

	this.instance_21 = new lib.Group_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(49.5,109.7,1,1,0,0,0,1.2,40.5);
	this.instance_21.alpha = 0.391;

	this.instance_22 = new lib.Group_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(38.8,109.1,1,1,0,0,0,1.3,39.3);
	this.instance_22.alpha = 0.391;

	this.instance_23 = new lib.Group_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(41.9,109.3,1,1,0,0,0,1.3,40.5);
	this.instance_23.alpha = 0.391;

	this.instance_24 = new lib.Group_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(46.2,108.7,1,1,0,0,0,1.2,40.5);
	this.instance_24.alpha = 0.391;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCD1D0").s().p("ABnGTIhagUIATjqQADglgHhsQgIhrgCAdQgBAUhfDkIhhDhIhVg0QAsitAyivQBklhAegUQAegTA+gLQAggGAZgBQA3gTAyAfQAaAPAOATIADGGQgDGHgeADIgJAAQgiAAhSgQg");
	this.shape_5.setTransform(35.7,109.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCD1D0").s().p("AiBGjQgegDAHmHIAMmGQAPgTAZgPQAygfA2ATIA5AHQBAALAdATIg3EsQgBgdgIBrQgIBrADAmIATDqQguAKg1AKQhaAQgjAAIgJAAg");
	this.shape_6.setTransform(71.6,109.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1BD93").s().p("AgKgaQAJgRAKABQAFABADAEQAEAjgTAZIgTAUg");
	this.shape_7.setTransform(77.5,38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1BD93").s().p("AgBAXQgTgZAEgjIAIgFQAJgBAKARIAGBFQgKgHgIgNg");
	this.shape_8.setTransform(40,38.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1BD93").s().p("Ag9D3QhGgugmhSQgLgGgJgNQgTgbAEgjIAIgFQAKgBAKARQgOgngGguQgMhhAngvIAogrQA2guBCgGIATAAQBCAGA2AuQAbAWANAVQAnAvgMBhQgHAugOAnQAKgRALABQAEACAEADQAEAjgTAbIgUATQgnBShFAuQgWAOgWAJIgSAGQgagHgjgWg");
	this.shape_9.setTransform(58.8,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6AD88").s().p("AgPBbQiEgFAhghQAdgcAOg1IAIgvIA/gNQA+gJABAWQACAYAcBIIAdBEQgxADgtAAIgrgBg");
	this.shape_10.setTransform(59,61.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCD1D0").s().p("AiMFUQAfiTAqiiQBUlEA2hLQA3hMAMCtQAGBXgFBmIjCHag");
	this.shape_11.setTransform(23.7,109.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6AD88").s().p("AhiB+QgOgWAGgZQAEgQATgYIAZgfQAHgLANgOQAPgOANgHQAQgJALgoIAJgmIBTgTIgeA0QgfA1AAAIIAGAeQAEAXgCAKQgBAHgIAUQgGARgBAJQgBAIACATQABAPgGgFQgPgLAAgWIAEgTQADgMgEAAQgEABgSATIgWAZIgYAYQgUASgJAAIgBAAQgMAAgMgTg");
	this.shape_12.setTransform(10.9,150.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6AD88").s().p("AgnAoIgLgaQgJgUgBgJIADgaQACgSgCgIIgHgYQgDgOAGADQAQAIAEATIABATQABAMADgCQADgBAMgVIAQgcQADgEAMgbQAOgZALgDQAJgCALAPQALAOACAMQAIAigLAdQgGAQgKATQgEAMgJAPQgKAPgLAKQgNAMgCAmQgBAUABARIhHAjQAihogCgMg");
	this.shape_13.setTransform(127.5,60.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000008").s().p("ACBLIIg/gJIgIlwQgJl2gFgkIgglIQg5GWAAAPIgrKwIjFAAIANorIAOlSIAyoOQA0AjDLgKQBmgGBcgMIAZCtIAMCCQAIBsAAAkQAAAigLHHIgLHBIguAcQgOAHghAAQgSAAgYgCg");
	this.shape_14.setTransform(57.9,217.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#564438").s().p("AAqBEIhvgjQhBAEgIgHQgFgEgBgcIAAgdIAMgdICTgGIARAkIAhASIA3AbQAiAPgCAXQgBAOgEABg");
	this.shape_15.setTransform(81.6,293.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#564438").s().p("AhCBNQgPgOgHgTQgHgUAYgkIAagjIAJgmIB/AAIgBBbQABAYgEAFQgKATggAPQgZAOADACIhMABQgGgCgHgHg");
	this.shape_16.setTransform(36.8,296);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#35343A").ss(1,1,1).p("AAAAIIAAgNIAAgCIAAACIAAAAIACAAIgCgC");
	this.shape_17.setTransform(202.7,67.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#35343A").s().p("AAAABIAAgBIACABg");
	this.shape_18.setTransform(202.7,66.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#35343A").s().p("AAAAJQgEgGgCABQACgPgBgDIAFADQAEAFACAGQADAJgFAGIgEgGg");
	this.shape_19.setTransform(205.2,68.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#35343A").s().p("AgOALQgFgFAFgGQAHgKAXgEQgCACACAJIACAHQgDgBgMAGIgLAGIgGgEg");
	this.shape_20.setTransform(199,68.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C3C3C1").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_21.setTransform(202.7,67.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#35343A").s().p("AgPAQQgGgHgBgJQABgJAGgGQAGgGAJAAQAKAAAGAGQAGAGAAAJQAAAJgGAHQgGAGgKABQgJgBgGgGg");
	this.shape_22.setTransform(202.7,67.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#947668").s().p("AAcCPQAGgfADgfQAHg+gPgEQgMgDgLgKIgRgQIgjgUQgZgOgFgGQgYgdgCgbQgCgXANgDQAGgBBDAWIAfAMQAYAKADgBQAEgBgIgKIgMgQQgJgTAIgQQADgHAGANIALAZQAEAIAOAMQAPAPAEAFQAGAIAGAXIAJAdQAFAMgECtg");
	this.shape_23.setTransform(195,63.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCD1D0").s().p("AhIEJQgkg6ggjAIgaizIBqgKIAyE5QAbiKAOhMQADgSgEg0IgEgxIAChkIA/ALQBAASAKAfQANAqg5DWQgwC4g7A/QgSAUgRAFIgOABg");
	this.shape_24.setTransform(211.8,93);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCD1D0").s().p("AiBD8QgMgIgWiXIgfjLQgIgoAlg7QATgeAUgVIAlAnQAiAqgKANQgZAhAVB/QASBrAMAWQAEAHBggVQAwgKAwgMIAnBUQhCAfhKAZQhgAigzAAQgZAAgNgJg");
	this.shape_25.setTransform(180.9,91.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#947668").s().p("AicA6QBPgvAJgJIASgYQAOgTAIgFQAGgEATgIQAQgIAHgFIATgUQAKgKAAAHQADASgQAPIgQALQgLAGADACQADADAagBIAhAAIApACQAgABADACQAMAHgKAWQgLAXghATQgHAEgcAEIgoAHQgLADgVgBIgigEQgPgCgpAaIgmAZg");
	this.shape_26.setTransform(204.6,103.3);

	this.instance_25 = new lib.ClipGroup_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(193,106.6,1,1,0,0,0,26.3,44);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A9B1BA").s().p("Ag7ANIBig4IAVArQgBAQghAQIgeAMg");
	this.shape_27.setTransform(200.2,64.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A9B1BA").s().p("AgVAgQgmgWgCgQIAWgrIBlBFIgvAeQgRgHgTgLg");
	this.shape_28.setTransform(188,63.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3F3231").s().p("ACqCUIgBhIQABgTgTgtQgUgzgVgGQgQgGglATQgoAVgOAAIgFAAQgPAAgngVQgkgTgRAGQgVAGgUAzQgTAtABATIgBBIQgCAEgGgMQgDgGgIgDQgIhwAbhDQArhqB+AHIAAAAQCAgHAqBqQAcBDgKBwQgHADgDAGQgFAJgCAAIgBgBg");
	this.shape_29.setTransform(192.9,20.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#805F50").s().p("AgfD0QgWgJgcgTQg3gngfg1IgCgGIgBgjIgCAAQgKAAgEgIIAAgBIAAAAQgEgHgEgZIgHgqQgDgRAAgKQAAgOAEgBQAEgBAHAGQADACACAFIADgBQgGgdAAghQAAhKAngTIAAAAIApgfQAygfAwAAIAFAAIAAAAIAFAAIAAAAQAxgCA1AfQAaAQAQARIABAAQAnATAABKQAAAhgGAdIgCAHIAFgFQAMgOAHADIAAAAQAIAEgGAgIgHAtQgFAdgDAEIgBABQgFAHgJABIgCAAIgEAqIgCAGQgRAXgXAZQgpApgsAXIgDABQgTAFgSAAQgQAAgPgFg");
	this.shape_30.setTransform(192.9,33.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#947668").s().p("AgPBOQh9gDAighQAdgdAIgoIACgjIBAgNQBAgJABAWQABAZAaA6IAaA2Qg2AEgwAAIgcgBg");
	this.shape_31.setTransform(193.8,56.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCD1D0").s().p("AgIGTIhagUIATjpQADgmgIhsQgHhrgCAdIg3ksQAdgTBAgLQAfgGAZgBQA4gTAxAfQAaAPAOATIADGGQgDGHgdADIgKAAQghAAhSgQg");
	this.shape_32.setTransform(181.9,104.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCD1D0").s().p("AiBGjQgegDAHmHIAMmGIAogiQAygfA2ATIA6AHQA/ALAeATIg3EsQgCgcgIBqQgIBsAEAmIATDpQgvAKg1AKQhbAQgiAAIgJAAg");
	this.shape_33.setTransform(206.5,104.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2F2F35").s().p("ACCLIIhAgJIgIlwQgJl2gFgkQgEgkgPiWIgNiPQg5GYAAAOIgsKwIjFAAIAOoqIAOlTIAyoOQA0AiDMgKQBlgFBcgMIAZCtQAEAkAHBeQAKBsgBAkQABAigLHHIgLHCIgvAbQgNAHghAAQgSAAgYgCg");
	this.shape_34.setTransform(192.4,212.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00011E").s().p("AArBEIhwgjQhBADgIgHQgFgEgBgcIAAgcIAMgdICUgGIAQAkIAhASQAlASASAIQAjAQgDAXQgBAOgEABg");
	this.shape_35.setTransform(216.6,288.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00011E").s().p("AhCBNQgPgNgHgTQgHgUAYglIAagiIAJgoIB/AAIAABdQAAAWgEAHQgJARghARQgQAIgFAEIgBADIhMABQgGgCgHgHg");
	this.shape_36.setTransform(171.7,291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_25},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_4},{t:this.shape_3},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_INVOLUCRADOS, new cjs.Rectangle(0,0,231.4,304.6), null);


(lib.listoahora22255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.amarillo3cirf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(428.3,-71.9,1,1,0,0,0,80.4,121);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(347.9,-192.9,160.8,241.9);


(lib.instruccionestaticarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flechamueveroll24ene("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(440.2,20.9,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic para ver las acciones por cuadrante...", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.1,-0.9,593.6,57.3);


(lib.grafica1banderillasromod3mcx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contenido arriba
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgkBFQgOgMgDgVIAegDQACALAGAGQAHAGAIAAQAJAAAHgHQAGgJAAgQQAAgOgGgHQgHgHgJAAQgOAAgLALIgZgEIARhTIBQAAIAAAeIg5AAIgFAbQAKgGAKAAQAUABAOAPQAPAOAAAXQAAAUgLAPQgQAWgbgBQgWAAgOgLg");
	this.shape.setTransform(532.7,342.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("Ag0CwIi+ijQgMgKAMgJIDEipIEnAAIAAFfg");
	this.shape_1.setTransform(524.6,341.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEEnIjzkRQgQgRAQgQID8kbIF7AAIAAJNg");
	this.shape_2.setTransform(526.2,339.2);

	this.instance = new lib.flechamueveroll24e25emod3mcx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(517.1,7.4,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic en los números para ver las notas.", "16px 'Arial'", "#606060");
	this.text.lineHeight = 21;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(183.4,-2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgkBGQgOgNgCgUIAdgEQACALAGAGQAGAGAJAAQAJAAAGgHQAHgHAAgMQAAgMgGgHQgHgGgJAAQgFAAgIACIAEgYQALAAAHgGQAGgFAAgKQAAgIgFgFQgEgFgHAAQgIAAgGAGQgFAFgCALIgcgFQADgPAGgIQAGgJALgFQAKgFANAAQAWAAAOAPQALALAAAPQAAAVgXANQAOADAIAJQAIALAAAOQAAAVgPAPQgQAPgWAAQgVAAgPgMg");
	this.shape_3.setTransform(532.4,208.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5D2C1").s().p("Ag0CwIi+ijQgMgJAMgKIDEiqIEnAAIAAFgg");
	this.shape_4.setTransform(524.6,208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAIBQIAAggIhBAAIAAgaIBFhlIAaAAIAABkIAUAAIAAAbIgUAAIAAAggAgcAVIAkAAIAAg1g");
	this.shape_5.setTransform(532.4,276.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE9E9E").s().p("Ag0CwIi+ijQgMgKAMgJIDEipIEnAAIAAFfg");
	this.shape_6.setTransform(524.6,275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEEnIjzkRQgQgRAQgQID8kbIF7AAIAAJNg");
	this.shape_7.setTransform(526.2,206.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEEnIjzkRQgQgSAQgPID8kbIF7AAIAAJNg");
	this.shape_8.setTransform(526.2,273);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag1BRQACgQAIgPQAJgOAagZQAUgSAFgHQAGgKAAgJQAAgKgFgGQgGgFgKAAQgJAAgFAFQgGAHAAANIgggDQADgZAPgMQAOgLAVABQAYAAANAMQAOANAAATQAAALgEAJQgEALgIAJQgGAHgOAOIgSASIgGAIIA8AAIAAAdg");
	this.shape_9.setTransform(532.2,144.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAE8A9").s().p("Ag0CxIi+ikQgMgKAMgKIDEipIEnAAIAAFhg");
	this.shape_10.setTransform(524.6,144);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhEEnIjzkSQgQgQAQgQID8kbIF7AAIAAJNg");
	this.shape_11.setTransform(526.2,142.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAFBQIAAhzQgQAQgXAIIAAgcQAMgEAOgLQANgLAGgPIAYAAIAACgg");
	this.shape_12.setTransform(531.5,93.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCFF").s().p("Ag0CwIi+ijQgMgKAMgKIDEipIEnAAIAAFgg");
	this.shape_13.setTransform(524.6,92.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhEEnIjzkRQgQgRAQgQID8kbIF7AAIAAJNg");
	this.shape_14.setTransform(526.2,91.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// caja atras
	this.text_1 = new cjs.Text("Bajo/Medio/Alto.", "15px 'Arial'", "#333333");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 577;
	this.text_1.parent = this;
	this.text_1.setTransform(-44.4,335.3);

	this.text_2 = new cjs.Text("Acción 1: Fortalecer el dominio de indicadores financieros del negocio. Aumentar el entendimiento del impacto de las decisiones de ventas en los objetivos organizacionales.", "15px 'Arial'", "#333333");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 528;
	this.text_2.parent = this;
	this.text_2.setTransform(-44.4,236.4);

	this.text_3 = new cjs.Text("Acción 2: Robustecer experiencias en canal tradicional para complementar entendimiento del negocio.", "15px 'Arial'", "#333333");
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 573;
	this.text_3.parent = this;
	this.text_3.setTransform(-44.4,289.7);

	this.text_4 = new cjs.Text("Tolerancia al estrés.", "15px 'Arial'", "#333333");
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 522;
	this.text_4.parent = this;
	this.text_4.setTransform(-44.4,158.8);

	this.text_5 = new cjs.Text("Trabajo en equipo, toma responsabilidad, entendimiento de finanzas del negocio.", "15px 'Arial'", "#333333");
	this.text_5.lineHeight = 19;
	this.text_5.lineWidth = 576;
	this.text_5.parent = this;
	this.text_5.setTransform(-44.4,121.5);

	this.text_6 = new cjs.Text("Ejemplo: Gerente de Ventas (Listo ahora).", "15px 'Arial'", "#333333");
	this.text_6.lineHeight = 16;
	this.text_6.lineWidth = 515;
	this.text_6.parent = this;
	this.text_6.setTransform(-44.4,199.1);

	this.text_7 = new cjs.Text("Riesgo de pérdida", "15px 'Arial'", "#333333");
	this.text_7.lineHeight = 19;
	this.text_7.lineWidth = 212;
	this.text_7.parent = this;
	this.text_7.setTransform(-285.5,334.5);

	this.text_8 = new cjs.Text("Acciones de desarrollo", "15px 'Arial'", "#333333");
	this.text_8.lineHeight = 19;
	this.text_8.lineWidth = 212;
	this.text_8.parent = this;
	this.text_8.setTransform(-285.5,268.1);

	this.text_9 = new cjs.Text("Posibles roles siguientes / \ntiempo para tomar la asignación", "15px 'Arial'", "#333333");
	this.text_9.lineHeight = 16;
	this.text_9.lineWidth = 242;
	this.text_9.parent = this;
	this.text_9.setTransform(-285.5,191.6);

	this.text_10 = new cjs.Text(" Áreas de oportunidad identificadas", "15px 'Arial'", "#333333");
	this.text_10.lineHeight = 16;
	this.text_10.lineWidth = 209;
	this.text_10.parent = this;
	this.text_10.setTransform(-285.5,150);

	this.text_11 = new cjs.Text(" Fortalezas identificadas", "15px 'Arial'", "#333333");
	this.text_11.lineHeight = 19;
	this.text_11.lineWidth = 209;
	this.text_11.parent = this;
	this.text_11.setTransform(-285.5,120.5);

	this.text_12 = new cjs.Text("Debe identificarse la casilla inicial y la casilla a la que se mueve el empleado.", "15px 'Arial'", "#333333");
	this.text_12.lineHeight = 19;
	this.text_12.lineWidth = 530;
	this.text_12.parent = this;
	this.text_12.setTransform(-44.4,81.5);

	this.text_13 = new cjs.Text(" ¿Cambio de cuadrante?", "15px 'Arial'", "#333333");
	this.text_13.lineHeight = 19;
	this.text_13.lineWidth = 209;
	this.text_13.parent = this;
	this.text_13.setTransform(-285.5,80.5);

	this.text_14 = new cjs.Text("COMENTARIOS DEL EVALUADOR", "bold 16px 'Arial'", "#333333");
	this.text_14.lineHeight = 20;
	this.text_14.lineWidth = 278;
	this.text_14.parent = this;
	this.text_14.setTransform(109.9,38.7);

	this.text_15 = new cjs.Text("COMPONENTES A VALORAR", "bold 16px 'Arial'", "#333333");
	this.text_15.lineHeight = 20;
	this.text_15.lineWidth = 227;
	this.text_15.parent = this;
	this.text_15.setTransform(-286.5,38.7);

	this.instance_1 = new lib.lineastabalamo25emod3mcx("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.3,177.9,0.407,1,-90,0,0,459.3,0.3);

	this.instance_2 = new lib.lineastabalamo25emod3mcx("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.7,377,0.963,1,0,0,0,461.6,0.1);

	this.instance_3 = new lib.lineastabalamo25emod3mcx("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(132.7,277.6,0.963,1,0,0,0,461.6,0.1);

	this.instance_4 = new lib.lineastabalamo25emod3mcx("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(132.7,234.1,0.963,1,0,0,0,461.6,0.1);

	this.instance_5 = new lib.lineastabalamo25emod3mcx("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(132.7,195.7,0.963,1,0,0,0,461.6,0.1);

	this.instance_6 = new lib.lineastabalamo25emod3mcx("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(132.7,157.2,0.963,1,0,0,0,461.6,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1F7DC").s().p("AFCWuMAAAgtbMA6MAAAMAAAAphQAABohKBJQhJBJhnAAgEg7TAWuQhnAAhKhJQhJhJAAhoMAAAgphMBEPAAAMAAAAtbg");
	this.shape_15.setTransform(105.1,216.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("AFCDKIAAmTMA2SAAAQBnAABJBJQBKBJAABnIAACagEg/NADKIAAiaQAAhnBJhJQBKhJBnAAMBAVAAAIAAGTg");
	this.shape_16.setTransform(105.1,45.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.2,-14.5,1077.2,393.6);


(lib.grafica1banderillasroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contenido arriba
	this.instance = new lib.instruccionestaticarollover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(414.5,36.3,1,1,0,0,0,296.8,27.8);

	this.instance_1 = new lib.AS_LG_MOV_10tip();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.9,-42,1,1,0,0,0,30,29.9);

	this.text = new cjs.Text("Recuerda que cada colaborador es el responsable de su propio desarrollo guiado por su jefe inmediato.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 329;
	this.text.parent = this;
	this.text.setTransform(252.3,-65.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AdhFIMg7BAAAQhkAAAAhkIAAnHQAAhkBkAAMA7FAAAQBgACAABiIAAHHQAABihgACIgEAAg");
	this.shape.setTransform(385.9,-39.1);

	this.text_1 = new cjs.Text("Plantear un desafío y apoyar el crecimiento “Top Talent”\n\n\n\n", "39px 'Arial'", "#333333");
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 1284;
	this.text_1.parent = this;
	this.text_1.setTransform(60.7,65.9,0.518,0.518);

	this.instance_2 = new lib.M03_TMR_TABLA4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.6,222.3,0.804,0.804,0,0,0,312,157.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.shape},{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// caja atras
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F7DC").s().p("EgpVAYOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMBSrAAAQBnAABJBJQBKBJAABoMAAAAonQAABohKBJQhJBJhnAAg");
	this.shape_1.setTransform(296.2,205.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-81.2,752.7,441.5);


(lib.grafica1banderillasroll22verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contenido arriba
	this.instance = new lib.instruccionestaticarollover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(414.5,36.3,1,1,0,0,0,296.8,27.8);

	this.instance_1 = new lib.AS_LG_MOV_10tip();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.9,-42,1,1,0,0,0,30,29.9);

	this.text = new cjs.Text("Recuerda que cada colaborador es el responsable de su propio desarrollo guiado por su jefe inmediato.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 329;
	this.text.parent = this;
	this.text.setTransform(252.3,-65.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AdhFIMg7BAAAQhkAAAAhkIAAnHQAAhkBkAAMA7FAAAQBgACAABiIAAHHQAABihgACIgEAAg");
	this.shape.setTransform(385.9,-39.1);

	this.text_1 = new cjs.Text("Estimular y desarrollar\n\n\n\n", "39px 'Arial'", "#333333");
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 1284;
	this.text_1.parent = this;
	this.text_1.setTransform(208.7,64.9,0.518,0.518);

	this.instance_2 = new lib.M03_TMR_TABLA2verde();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.6,222.3,0.804,0.804,0,0,0,312,157.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.shape},{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// caja atras
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F7DC").s().p("EgpVAYOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMBSrAAAQBnAABJBJQBKBJAABoMAAAAonQAABohKBJQhJBJhnAAg");
	this.shape_1.setTransform(296.2,205.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-81.2,867.9,441.5);


(lib.grafica1banderillasroll2rosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contenido arriba
	this.instance = new lib.instruccionestaticarollover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(414.5,36.3,1,1,0,0,0,296.8,27.8);

	this.instance_1 = new lib.AS_LG_MOV_10tiprosa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.9,-42,1,1,0,0,0,30,29.9);

	this.text = new cjs.Text("Recuerda que cada colaborador es el responsable de su propio desarrollo guiado por su jefe inmediato.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 329;
	this.text.parent = this;
	this.text.setTransform(252.3,-65.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AdhFIMg7BAAAQhkAAAAhkIAAnHQAAhkBkAAMA7FAAAQBgACAABiIAAHHQAABihgACIgEAAg");
	this.shape.setTransform(385.9,-39.1);

	this.text_1 = new cjs.Text("Gestionar el desempeño\n\n\n\n", "39px 'Arial'", "#333333");
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 1284;
	this.text_1.parent = this;
	this.text_1.setTransform(209.7,65.9,0.518,0.518);

	this.instance_2 = new lib.M03_TMR_TABLArosa();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.6,222.3,0.804,0.804,0,0,0,312,157.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.shape},{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// caja atras
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F7DC").s().p("EgpVAYOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMBSrAAAQBnAABJBJQBKBJAABoMAAAAonQAABohKBJQhJBJhnAAg");
	this.shape_1.setTransform(296.2,205.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-81.2,868.9,441.5);


(lib.grafica1banderillasrollam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contenido arriba
	this.instance = new lib.instruccionestaticarollover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(414.5,36.3,1,1,0,0,0,296.8,27.8);

	this.instance_1 = new lib.AS_LG_MOV_10tipam();
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.9,-42,1,1,0,0,0,30,29.9);

	this.text = new cjs.Text("Recuerda que cada colaborador es el responsable de su propio desarrollo guiado por su jefe inmediato.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 329;
	this.text.parent = this;
	this.text.setTransform(252.3,-65.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AdhFIMg7BAAAQhkAAAAhkIAAnHQAAhkBkAAMA7FAAAQBgACAABiIAAHHQAABihgACIgEAAg");
	this.shape.setTransform(385.9,-39.1);

	this.text_1 = new cjs.Text("Reconocer y comprometer\n", "39px 'Arial'", "#333333");
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 661;
	this.text_1.parent = this;
	this.text_1.setTransform(200.7,65.9,0.518,0.518);

	this.instance_2 = new lib.M03_TMR_TABLAam();
	this.instance_2.parent = this;
	this.instance_2.setTransform(310.6,222.3,0.804,0.804,0,0,0,312,157.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.shape},{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// caja atras
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F7DC").s().p("EgpVAYOQhnAAhKhJQhJhJAAhoMAAAgonQAAhoBJhJQBKhJBnAAMBSrAAAQBnAABJBJQBKBJAABoMAAAAonQAABohKBJQhJBJhnAAg");
	this.shape_1.setTransform(296.2,205.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-81.2,752.7,441.5);


(lib.grafica1banderillasroanimultax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contenido arriba
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBMQggggAAgsQAAgrAgggQAgggArAAQAsAAAgAgQAgAgAAArQAAAsggAgQggAggsAAQgrAAggggg");
	this.shape.setTransform(352.7,146.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgSB5IACgLQADABAPAAIAAAMIgUgCgAAQBuIASgEIAEALIgUAEgAg1BuIAFgKIARAHIgDALQgLgDgIgFgAAwBlIAQgJIAGAJIgRAKgAhTBZIAIgIIAOALIgGAKIgQgNgABLBSIANgOIAJAHIgOAQgAhpA8IAKgFIAKAPIgJAHgABgA4IAEgIIAEgIIALAEIgEAJQgCAGgDAEgAh2AaIALgDIAFASIgLAFgABsAaIACgJIABgJIAMABIgDAUgAh6AAIABgJIAMABIgBAIIABAJIgMACgABtgYIALgDIADAUIgMABgAh2gZIAFgUIALAEIgFASgABkgvIgEgJIAKgFQADAEACAFIAEAJIgLAEgAhpg8IALgRIAJAIIgKAPgABMhRIAHgIQAGADACADIAGAIIgJAHgAhThYIAQgOIAHAKQgJAGgGAHgAAwhjIAFgLQAHADAKAHIgGAKIgQgJgAg1huIATgHIAEAMIgSAHgAAQhtIACgMIAUAFIgEALIgSgEgAgSh5QAJgBALAAIAAAMIgSABg");
	this.shape_1.setTransform(352.6,146.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3231").s().p("Ah0BWQgEgDgEABQgCAAgCgHQgFgPgHgnQgFghAcgVQgCgPAGgPQAIgUAXgKIgHAJQgGALgCAIIABACIABgBQANgPAZgMQAngSA3gBIgMACQgOAEgJAFQgBABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQBEgHAkAYIgPgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABABAAQARAIANAMQAUATAAAbIgMgOQgBgBAAAAQgBAAAAAAQAAAAAAABQAAAAAAABQAHAVgFAUIgBgEQgCgEgFgEQgBAggJArQgKgBgGALQgDAFgCAFQABgPgBgSQgBgjgKgPQgYgkhDABQghABgdAIIgIAQQgLATgJALQgCAIgDA+QgBgRgJgGg");
	this.shape_2.setTransform(351.8,206.7,0.788,0.788);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F3231").s().p("AAfAUIgBAAQgFgBgFgDQgGgFAAgHIAAgDQgFgDgGAAIgBAAQgEgBgHAEIAAADQAAAHgGAFQgEADgGABIAAAAIgxAAIgCgBQgHgDgEgGQgDgDAAgEIAAgDIgOABIgDgJIASgCQAEgIALgBIABAAIAtAAQAOAAAEAKQAHgDAFAAQAHAAAGADQAGgKAMAAIAuAAIABAAQALACADAHIAOABIgCAHIgKACIAAADQAAAKgPAGIgBABgAAWgJIAAAOQAAAGAHAEIA1AAQAGgCAAgIIAAgOQgCgEgFAAIg1AAQgGADAAABgAhSgJIAAAOQAAAGAHAEIA1AAQAGgCAAgIIAAgOQgCgEgFAAIg2AAQgFACAAACg");
	this.shape_3.setTransform(351,213.3,0.788,0.788);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8AF93").s().p("AAPAAIgKgCIgEAAIgMACIgPAEQAFgEAIgCQAHgDAHAAIAEAAIAEABIAHABQAIAEADAFQgFgFgHgBg");
	this.shape_4.setTransform(347,212.5,0.788,0.788);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1BB93").s().p("AgSCRIgegRQghgXgSggIgBgDIgBgVIgBAAQgEAAgEgFQgDgFgCgOIgEgZQgCgJAAgGQAAgJACAAQACgBAFADIADAFIACgBQgEgRAAgUQAAgrAXgMQAKgJAPgKQAegRAcgBIADAAIADAAQAdgBAfATIAZATQAYAMAAArQAAAUgEARIgBAEIADgCQAHgJAEACQAFADgEASIgEAaIgFAUIAAAAIgCADQgDACgEAAIAAAAIgDAZIgBAEQgfAsgsAWIgBABQgMADgKAAQgKAAgIgDg");
	this.shape_5.setTransform(351.2,213.2,0.788,0.788);

	this.text = new cjs.Text("Cambios de cuadrante", "bold 18px 'Arial'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 219;
	this.text.parent = this;
	this.text.setTransform(369.7,203,0.788,0.788);

	this.text_1 = new cjs.Text("Distribución típica \nde los colaboradores", "bold 18px 'Arial'");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 206;
	this.text_1.parent = this;
	this.text_1.setTransform(373.8,130.3,0.788,0.788);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B3B3B3").p("AOWDoI8rAAQgoAAgbgbQgcgcAAgoIAAkSQAAgnAcgbQAbgcAoAAIcrAAQAoAAAcAcQAbAbAAAnIAAESQAAAogbAcQgcAbgoAAg");
	this.shape_6.setTransform(431.2,146.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AuVDoQgnAAgcgbQgcgcAAgoIAAkSQAAgnAcgbQAcgcAnAAIcsAAQAnAAAbAcQAcAbAAAnIAAESQAAAogcAcQgbAbgnAAg");
	this.shape_7.setTransform(431.2,146.4);

	this.text_2 = new cjs.Text("Profesional \nexperto", "bold 22px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 165;
	this.text_2.parent = this;
	this.text_2.setTransform(176.2,269.9,0.686,0.686);

	this.text_3 = new cjs.Text("Alto\nImpacto", "bold 22px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 165;
	this.text_3.parent = this;
	this.text_3.setTransform(176.2,198.9,0.686,0.686);

	this.text_4 = new cjs.Text("Futuro\nLíder", "bold 22px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 165;
	this.text_4.parent = this;
	this.text_4.setTransform(176.2,130.4,0.686,0.686);

	this.text_5 = new cjs.Text("Profesional \nefectivo", "bold 22px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 169;
	this.text_5.parent = this;
	this.text_5.setTransform(35,268.7,0.686,0.686);

	this.text_6 = new cjs.Text("Colaborador \nconsistente", "bold 22px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 165;
	this.text_6.parent = this;
	this.text_6.setTransform(35,201.4,0.686,0.686);

	this.text_7 = new cjs.Text("Talento en \ncrecimiento", "bold 22px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 165;
	this.text_7.parent = this;
	this.text_7.setTransform(35,130.4,0.686,0.686);

	this.text_8 = new cjs.Text("Bajo\nDesempeño ", "bold 22px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 24;
	this.text_8.lineWidth = 165;
	this.text_8.parent = this;
	this.text_8.setTransform(-108,274.9,0.686,0.686);

	this.text_9 = new cjs.Text("Desempeño inconsistente (Dilema)", "bold 22px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 24;
	this.text_9.lineWidth = 165;
	this.text_9.parent = this;
	this.text_9.setTransform(-108,190.3,0.686,0.686);

	this.text_10 = new cjs.Text("Caso a revisar\n(Enigma)", "bold 22px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 24;
	this.text_10.lineWidth = 165;
	this.text_10.parent = this;
	this.text_10.setTransform(-108,130.4,0.686,0.686);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_8.setTransform(-37.2,215.4,0.686,0.686);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_9.setTransform(-37.2,215.4,0.686,0.686);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").p("AAE4BMAAAAwDIgHAAMAAAgwDg");
	this.shape_10.setTransform(105.1,215.4,0.686,0.686);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDYBMAAAgwCIAHAAMAAAAwCg");
	this.shape_11.setTransform(105.1,215.4,0.686,0.686);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_12.setTransform(33.9,180.3,0.686,0.686);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_13.setTransform(33.9,180.3,0.686,0.686);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").p("EAwngADIAAAHMhhNAAAIAAgHg");
	this.shape_14.setTransform(33.9,250.6,0.686,0.686);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("EgwlAAEIAAgHMBhLAAAIAAAHg");
	this.shape_15.setTransform(33.9,250.6,0.686,0.686);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_16.setTransform(-108.4,145.1,0.686,0.686);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_17.setTransform(-108.4,145.1,0.686,0.686);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_18.setTransform(33.9,285.8,0.686,0.686);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_19.setTransform(33.9,285.8,0.686,0.686);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_20.setTransform(176.2,285.8,0.686,0.686);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F1E2A8").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_21.setTransform(176.2,285.8,0.686,0.686);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_22.setTransform(-108.4,215.5,0.686,0.686);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0878B").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_23.setTransform(-108.4,215.5,0.686,0.686);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_24.setTransform(-108.4,285.8,0.686,0.686);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0878B").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_25.setTransform(-108.4,285.8,0.686,0.686);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_26.setTransform(33.9,215.5,0.686,0.686);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BED19D").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_27.setTransform(33.9,215.5,0.686,0.686);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_28.setTransform(33.9,145.1,0.686,0.686);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A2D7E9").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_29.setTransform(33.9,145.1,0.686,0.686);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_30.setTransform(176.2,215.5,0.686,0.686);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#85C8DA").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_31.setTransform(176.2,215.5,0.686,0.686);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").p("AQJn8IAAP5MggRAAAIAAv5g");
	this.shape_32.setTransform(176.2,145.1,0.686,0.686);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6CBACB").s().p("AwIH9IAAv5MAgRAAAIAAP5g");
	this.shape_33.setTransform(176.2,145.1,0.686,0.686);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").p("EgwqgYEMAAAAwJMBhVAAAMAAAgwJgEAwjAX+MhhFAAAMAAAgv7MBhFAAAg");
	this.shape_34.setTransform(33.9,215.5,0.686,0.686);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_35.setTransform(33.9,215.5,0.686,0.686);

	this.text_11 = new cjs.Text("Potencial básico\n", "18px 'Arial'", "#333333");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 19;
	this.text_11.lineWidth = 97;
	this.text_11.parent = this;
	this.text_11.setTransform(-221.1,268.9,0.853,0.853);

	this.text_12 = new cjs.Text("Potencial medio", "18px 'Arial'", "#333333");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 19;
	this.text_12.lineWidth = 97;
	this.text_12.parent = this;
	this.text_12.setTransform(-221.1,202.6,0.853,0.853);

	this.text_13 = new cjs.Text("Alto Potencial ", "18px 'Arial'", "#333333");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 19;
	this.text_13.lineWidth = 97;
	this.text_13.parent = this;
	this.text_13.setTransform(-221.1,130,0.853,0.853);

	this.text_14 = new cjs.Text("Desempeño alto\n", "18px 'Arial'", "#333333");
	this.text_14.lineHeight = 22;
	this.text_14.lineWidth = 159;
	this.text_14.parent = this;
	this.text_14.setTransform(122.7,82.1,0.853,0.853);

	this.text_15 = new cjs.Text("Desempeño medio", "18px 'Arial'", "#333333");
	this.text_15.lineHeight = 22;
	this.text_15.lineWidth = 159;
	this.text_15.parent = this;
	this.text_15.setTransform(-30,82.1,0.853,0.853);

	this.text_16 = new cjs.Text("Desempeño bajo", "18px 'Arial'", "#333333");
	this.text_16.lineHeight = 22;
	this.text_16.lineWidth = 276;
	this.text_16.parent = this;
	this.text_16.setTransform(-167.8,82.1,0.853,0.853);

	this.instance = new lib.flechamueveroll24e25animultax("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(479.6,75.6,1,1,0,0,0,23.4,23.4);

	this.text_17 = new cjs.Text("Haz clic en los botones para ver más...\n", "16px 'Arial'", "#606060");
	this.text_17.lineHeight = 21;
	this.text_17.lineWidth = 199;
	this.text_17.parent = this;
	this.text_17.setTransform(358.9,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B3B3B3").p("AOWDoI8rAAQgoAAgbgbQgcgcAAgoIAAkSQAAgnAcgbQAbgcAoAAIcrAAQAoAAAcAcQAbAbAAAnIAAESQAAAogbAcQgcAbgoAAg");
	this.shape_36.setTransform(431.2,211.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6E6E6").s().p("AuVDoQgnAAgcgbQgcgcAAgoIAAkSQAAgnAcgbQAcgcAnAAIcsAAQAnAAAbAcQAcAbAAAnIAAESQAAAogcAcQgbAbgnAAg");
	this.shape_37.setTransform(431.2,211.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.text_17},{t:this.instance},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.shape_7},{t:this.shape_6},{t:this.text_1},{t:this.text},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// caja atras
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#B3B3B3").p("AAAg4IAABx");
	this.shape_38.setTransform(301.8,330.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#BDCCD4").ss(1,1,1,3,true).p("EgvlgXJQAHhLA3g4QA+g+BZAAMBYiAAAQBYAAA+A+QA3A4AHBLEAvnAVHIAABvQAABYg/A+Qg+A/hYAAMhYiAAAQhZAAg+g/Qg/g+AAhYMAAAgt/EAvngXJMAAAAqf");
	this.shape_39.setTransform(-2.9,201.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(227,239,185,0.498)").s().p("EgsQAaLQhZAAg+g/Qg/g+AAhYMAAAgt/IABAAQAHhLA3g4QA+g+BZAAMBYiAAAQBYAAA+A+QA3A4AHBLIABAAMAAAAqfIAABxIAABvQAABYg/A+Qg+A/hYAAg");
	this.shape_40.setTransform(-2.9,201.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.6,32.7,868.8,337);


(lib.mod2t2mc3_con_todos_los_botoazules = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 3;
		var root = this; 
		quitaActivos();
		var Secuencial = false;
		
		//Para hacer que los botones sean secuenciales:
		if (!parent.backdoor) {
			//EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position <1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
		parent.habilitarSiguiente();
		
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
			console.log("deshabilita botones");
			root.b1.mouseEnabled=false;
			root.b2.mouseEnabled=false;
			root.b3.mouseEnabled=false;
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_contenidos_MC3roll24ene();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b3 = new lib.botonesplantear();
	this.b3.parent = this;
	this.b3.setTransform(829.3,180.2,1.802,0.847,0,0,0,64.2,13);

	this.b2 = new lib.botonesplantear();
	this.b2.parent = this;
	this.b2.setTransform(829.3,97.8,1.802,0.847,0,0,0,64.2,13);

	this.b1 = new lib.botonesplantear();
	this.b1.parent = this;
	this.b1.setTransform(662.3,97.8,1.802,0.847,0,0,0,64.2,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-18.8,1087.4,414);


(lib.mod2t2mc3_con_todos_los_botonesroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 1;
		var root = this; 
		quitaActivos();
		var Secuencial = false;
		
		//Para hacer que los botones sean secuenciales:
		if (!parent.backdoor) {
			EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position <1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
		parent.habilitarSiguiente();
		
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_contenidos_MC3roll24enverrr();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b1 = new lib.botonesplantear();
	this.b1.parent = this;
	this.b1.setTransform(662.3,180.6,1.802,0.847,0,0,0,64.2,13);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-18.8,920.4,414);


(lib.mod2t2mc3_con_todos_los_botonesrolamama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 2;
		var root = this; 
		quitaActivos();
		var Secuencial = false;
		
		//Para hacer que los botones sean secuenciales:
		if (!parent.backdoor) {
			//EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position <1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
		parent.habilitarSiguiente();
		
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_contenidos_MC3roll24eneamama();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b2 = new lib.botonesplantear();
	this.b2.parent = this;
	this.b2.setTransform(829.3,261.8,1.802,0.847,0,0,0,64.2,13);

	this.b1 = new lib.botonesplantear();
	this.b1.parent = this;
	this.b1.setTransform(662.3,261.8,1.802,0.847,0,0,0,64.2,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-18.8,1087.4,414);


(lib.mod2t2mc3_con_todos_los_bocombrosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 3;
		var root = this; 
		quitaActivos();
		var Secuencial = false;
		
		//Para hacer que los botones sean secuenciales:
		if (!parent.backdoor) {
			//EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position <1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
		parent.habilitarSiguiente();
		
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_contenidos_MC3rorosa();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b3 = new lib.botonesplantearrosa();
	this.b3.parent = this;
	this.b3.setTransform(496.7,260.5,1.802,0.847,0,0,0,64.2,13);

	this.b2 = new lib.botonesplantearrosa();
	this.b2.parent = this;
	this.b2.setTransform(496.7,178.2,1.802,0.847,0,0,0,64.2,13);

	this.b1 = new lib.botonesplantearrosa();
	this.b1.parent = this;
	this.b1.setTransform(496.7,96.9,1.802,0.847,0,0,0,64.2,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-18.8,754.7,414);


(lib.animacionn2rosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.primerflechaazurosa("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-337.9,0,1,1,0,0,0,190.3,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-528.2,-208.1,380.8,416.3);


(lib.animacionn2am = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.primerflechaazulam("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-337.9,0,1,1,0,0,0,190.3,208.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-528.2,-208.1,380.8,416.3);


(lib.scrollm2t3mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var rewind;
		this.rewind = false;
		var forward;
		this.forward = false;
		//funciona como reset, si el usuario regresa a esta pagina no tendra
		//el evento dos veces.....solo una vez
		this.btn_siguiente5.removeAllEventListeners();
		this.btn_atras5.removeAllEventListeners();
		init();
		function init() {
			///FORWARD
			root.btn_siguiente5.addEventListener("mousedown", playForwards);
			function playForwards() {
				root.forward = true;
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				playF();
			}
		
			function playF(e) {
				console.log("avanzando");
				root.gotoAndStop(root.timeline.position + 1);
				if (root.forward) {
					var my_timedProcess = setTimeout(playF, 25);
				}
				
			}
			///REWIND
			root.btn_atras5.addEventListener("click", playReverse);
			function playReverse() {
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				root.rewind = true;
				playR();
			}
		
			function playR(e) {
				console.log("retrocediendo");
				root.gotoAndStop(root.timeline.position - 1);
				if (root.rewind) {
					var my_timedProcess = setTimeout(playR, 25);
				}
				
			}
		
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
	}
	this.frame_84 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
		this.btn_atras5.mouseEnabled=true;
	}
	this.frame_139 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
		this.btn_atras5.mouseEnabled=true;
	}
	this.frame_198 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_atras5.mouseEnabled=true;
		
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(55).call(this.frame_84).wait(55).call(this.frame_139).wait(59).call(this.frame_198).wait(1));

	// cortina scroll4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_165 = new cjs.Graphics().p("EhFJAGNIAA1QMCKTAAAIAAVQg");
	var mask_graphics_166 = new cjs.Graphics().p("EhFJAI5IAA3TMCKTAAAIAAXTg");
	var mask_graphics_167 = new cjs.Graphics().p("EhFJALfIAA5RMCKTAAAIAAZRg");
	var mask_graphics_168 = new cjs.Graphics().p("EhFJANnIAA7NMCKTAAAIAAbNg");
	var mask_graphics_169 = new cjs.Graphics().p("EhFJAOiIAA9DMCKTAAAIAAdDg");
	var mask_graphics_170 = new cjs.Graphics().p("EhFJAPbIAA+1MCKTAAAIAAe1g");
	var mask_graphics_171 = new cjs.Graphics().p("EhFJAQTMAAAgglMCKTAAAMAAAAglg");
	var mask_graphics_172 = new cjs.Graphics().p("EhFJARIMAAAgiPMCKTAAAMAAAAiPg");
	var mask_graphics_173 = new cjs.Graphics().p("EhFJAR7MAAAgj1MCKTAAAMAAAAj1g");
	var mask_graphics_174 = new cjs.Graphics().p("EhFJAStMAAAglZMCKTAAAMAAAAlZg");
	var mask_graphics_175 = new cjs.Graphics().p("EhFJATcMAAAgm3MCKTAAAMAAAAm3g");
	var mask_graphics_176 = new cjs.Graphics().p("EhFJAUJMAAAgoRMCKTAAAMAAAAoRg");
	var mask_graphics_177 = new cjs.Graphics().p("EhFJAU0MAAAgpnMCKTAAAMAAAApng");
	var mask_graphics_178 = new cjs.Graphics().p("EhFJAVdMAAAgq5MCKTAAAMAAAAq5g");
	var mask_graphics_179 = new cjs.Graphics().p("EhFJAWFMAAAgsJMCKTAAAMAAAAsJg");
	var mask_graphics_180 = new cjs.Graphics().p("EhFJAWqMAAAgtTMCKTAAAMAAAAtTg");
	var mask_graphics_181 = new cjs.Graphics().p("EhFJAXNMAAAguZMCKTAAAMAAAAuZg");
	var mask_graphics_182 = new cjs.Graphics().p("EhFJAXuMAAAgvbMCKTAAAMAAAAvbg");
	var mask_graphics_183 = new cjs.Graphics().p("EhFJAYNMAAAgwZMCKTAAAMAAAAwZg");
	var mask_graphics_184 = new cjs.Graphics().p("EhFJAYrMAAAgxVMCKTAAAMAAAAxVg");
	var mask_graphics_185 = new cjs.Graphics().p("EhFJAZGMAAAgyLMCKTAAAMAAAAyLg");
	var mask_graphics_186 = new cjs.Graphics().p("EhFJAZfMAAAgy9MCKTAAAMAAAAy9g");
	var mask_graphics_187 = new cjs.Graphics().p("EhFJAZ2MAAAgzrMCKTAAAMAAAAzrg");
	var mask_graphics_188 = new cjs.Graphics().p("EhFJAaLMAAAg0VMCKTAAAMAAAA0Vg");
	var mask_graphics_189 = new cjs.Graphics().p("EhFJAaeMAAAg07MCKTAAAMAAAA07g");
	var mask_graphics_190 = new cjs.Graphics().p("EhFJAavMAAAg1dMCKTAAAMAAAA1dg");
	var mask_graphics_191 = new cjs.Graphics().p("EhFJAa+MAAAg17MCKTAAAMAAAA17g");
	var mask_graphics_192 = new cjs.Graphics().p("EhFJAbLMAAAg2VMCKTAAAMAAAA2Vg");
	var mask_graphics_193 = new cjs.Graphics().p("EhFJAbWMAAAg2rMCKTAAAMAAAA2rg");
	var mask_graphics_194 = new cjs.Graphics().p("EhFJAbgMAAAg2/MCKTAAAMAAAA2/g");
	var mask_graphics_195 = new cjs.Graphics().p("EhFJAbnMAAAg3NMCKTAAAMAAAA3Ng");
	var mask_graphics_196 = new cjs.Graphics().p("EhFJAbsMAAAg3XMCKTAAAMAAAA3Xg");
	var mask_graphics_197 = new cjs.Graphics().p("EhFJAbvMAAAg3dMCKTAAAMAAAA3dg");
	var mask_graphics_198 = new cjs.Graphics().p("EhFJAbwMAAAg3fMCKTAAAMAAAA3fg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(165).to({graphics:mask_graphics_165,x:109.5,y:-96.4}).wait(1).to({graphics:mask_graphics_166,x:109.5,y:-92.3}).wait(1).to({graphics:mask_graphics_167,x:109.5,y:-88.3}).wait(1).to({graphics:mask_graphics_168,x:109.5,y:-81.9}).wait(1).to({graphics:mask_graphics_169,x:109.5,y:-68.5}).wait(1).to({graphics:mask_graphics_170,x:109.5,y:-55.6}).wait(1).to({graphics:mask_graphics_171,x:109.5,y:-43.1}).wait(1).to({graphics:mask_graphics_172,x:109.5,y:-31.1}).wait(1).to({graphics:mask_graphics_173,x:109.5,y:-19.5}).wait(1).to({graphics:mask_graphics_174,x:109.5,y:-8.4}).wait(1).to({graphics:mask_graphics_175,x:109.5,y:2.2}).wait(1).to({graphics:mask_graphics_176,x:109.5,y:12.4}).wait(1).to({graphics:mask_graphics_177,x:109.5,y:22.2}).wait(1).to({graphics:mask_graphics_178,x:109.5,y:31.5}).wait(1).to({graphics:mask_graphics_179,x:109.5,y:40.3}).wait(1).to({graphics:mask_graphics_180,x:109.5,y:48.7}).wait(1).to({graphics:mask_graphics_181,x:109.5,y:56.7}).wait(1).to({graphics:mask_graphics_182,x:109.5,y:64.2}).wait(1).to({graphics:mask_graphics_183,x:109.5,y:71.2}).wait(1).to({graphics:mask_graphics_184,x:109.5,y:77.8}).wait(1).to({graphics:mask_graphics_185,x:109.5,y:83.9}).wait(1).to({graphics:mask_graphics_186,x:109.5,y:89.6}).wait(1).to({graphics:mask_graphics_187,x:109.5,y:94.8}).wait(1).to({graphics:mask_graphics_188,x:109.5,y:99.5}).wait(1).to({graphics:mask_graphics_189,x:109.5,y:103.8}).wait(1).to({graphics:mask_graphics_190,x:109.5,y:107.7}).wait(1).to({graphics:mask_graphics_191,x:109.5,y:111.1}).wait(1).to({graphics:mask_graphics_192,x:109.5,y:114.1}).wait(1).to({graphics:mask_graphics_193,x:109.5,y:116.5}).wait(1).to({graphics:mask_graphics_194,x:109.5,y:118.6}).wait(1).to({graphics:mask_graphics_195,x:109.5,y:120.2}).wait(1).to({graphics:mask_graphics_196,x:109.5,y:121.3}).wait(1).to({graphics:mask_graphics_197,x:109.5,y:122}).wait(1).to({graphics:mask_graphics_198,x:109.5,y:122.2}).wait(1));

	// texto 4
	this.text = new cjs.Text("Roles y responsabilidades generales", "30px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 508;
	this.text.parent = this;
	this.text.setTransform(223.7,-14.2);

	this.instance = new lib.M03_TMR_LIDER();
	this.instance.parent = this;
	this.instance.setTransform(486.9,168.5,0.393,0.393,0,0,0,66.9,228.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B3B3B3").p("EgmIAAAMBMRAAA");
	this.shape.setTransform(199.8,99.7);

	this.text_1 = new cjs.Text("Recopilar y consolidar la información, facilitar la sesión de calibración, dar seguimiento a las acciones de desarrollo establecidas durante la sesión para los colaboradores.", "18px 'Arial'", "#666666");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 460;
	this.text_1.parent = this;
	this.text_1.setTransform(-30.2,154.3);

	this.text_2 = new cjs.Text("Facilitador de la sesión (Capital Humano)\n", "bold 22px 'Arial'", "#666666");
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 439;
	this.text_2.parent = this;
	this.text_2.setTransform(-30.2,64.9);

	this.text_3 = new cjs.Text("Responsabilidades generales:  ", "20px 'Arial'", "#666666");
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 358;
	this.text_3.parent = this;
	this.text_3.setTransform(-30.2,118.3);

	var maskedShapeInstanceList = [this.text,this.instance,this.shape,this.text_1,this.text_2,this.text_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.shape},{t:this.instance},{t:this.text}]},165).wait(34));

	// cortina scroll3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_110 = new cjs.Graphics().p("EhFJAGNIAA1QMCKTAAAIAAVQg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EhFJAJQIAA3lMCKTAAAIAAXlg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EhFJAMMIAA50MCKTAAAIAAZ0g");
	var mask_1_graphics_113 = new cjs.Graphics().p("EhFJAOAIAA7/MCKTAAAIAAb/g");
	var mask_1_graphics_114 = new cjs.Graphics().p("EhFJAPCIAA+DMCKTAAAIAAeDg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EhFJAQCMAAAggDMCKTAAAMAAAAgDg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EhFJAQ/MAAAgh9MCKTAAAMAAAAh9g");
	var mask_1_graphics_117 = new cjs.Graphics().p("EhFJAR6MAAAgjzMCKTAAAMAAAAjzg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EhFJASxMAAAglhMCKTAAAMAAAAlhg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EhFJATnMAAAgnNMCKTAAAMAAAAnNg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EhFJAUaMAAAgozMCKTAAAMAAAAozg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EhFJAVKMAAAgqTMCKTAAAMAAAAqTg");
	var mask_1_graphics_122 = new cjs.Graphics().p("EhFJAV3MAAAgrtMCKTAAAMAAAArtg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EhFJAWiMAAAgtDMCKTAAAMAAAAtDg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EhFJAXLMAAAguVMCKTAAAMAAAAuVg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EhFJAXwMAAAgvfMCKTAAAMAAAAvfg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EhFJAYUMAAAgwnMCKTAAAMAAAAwng");
	var mask_1_graphics_127 = new cjs.Graphics().p("EhFJAY0MAAAgxnMCKTAAAMAAAAxng");
	var mask_1_graphics_128 = new cjs.Graphics().p("EhFJAZSMAAAgyjMCKTAAAMAAAAyjg");
	var mask_1_graphics_129 = new cjs.Graphics().p("EhFJAZtMAAAgzZMCKTAAAMAAAAzZg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EhFJAaGMAAAg0LMCKTAAAMAAAA0Lg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EhFJAacMAAAg03MCKTAAAMAAAA03g");
	var mask_1_graphics_132 = new cjs.Graphics().p("EhFJAawMAAAg1fMCKTAAAMAAAA1fg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EhFJAbBMAAAg2BMCKTAAAMAAAA2Bg");
	var mask_1_graphics_134 = new cjs.Graphics().p("EhFJAbPMAAAg2dMCKTAAAMAAAA2dg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EhFJAbbMAAAg21MCKTAAAMAAAA21g");
	var mask_1_graphics_136 = new cjs.Graphics().p("EhFJAbkMAAAg3HMCKTAAAMAAAA3Hg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EhFJAbqMAAAg3TMCKTAAAMAAAA3Tg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EhFJAbuMAAAg3bMCKTAAAMAAAA3bg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EhFJAbwMAAAg3fMCKTAAAMAAAA3fg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EhFJAZ+MAAAgz7MCKTAAAMAAAAz7g");
	var mask_1_graphics_141 = new cjs.Graphics().p("EhFJAYSMAAAgwgMCKTAAAMAAAAwgg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EhFJAYrMAAAgtOMCKTAAAMAAAAtOg");
	var mask_1_graphics_143 = new cjs.Graphics().p("EhFJAZEMAAAgqGMCKTAAAMAAAAqGg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EhFJAZbMAAAgnGMCKTAAAMAAAAnGg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EhFJAZyMAAAgkSMCKTAAAMAAAAkSg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EhFJAaHMAAAghlMCKTAAAMAAAAhlg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EhFJAabIAA/CMCKTAAAIAAfCg");
	var mask_1_graphics_148 = new cjs.Graphics().p("EhFJAauIAA8pMCKTAAAIAAcpg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EhFJAa/IAA6ZMCKTAAAIAAaZg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EhFJAbQIAA4SMCKTAAAIAAYSg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EhFJAbfIAA2UMCKTAAAIAAWUg");
	var mask_1_graphics_152 = new cjs.Graphics().p("EhFJAbuIAA0gMCKTAAAIAAUgg");
	var mask_1_graphics_153 = new cjs.Graphics().p("EhFJAb7IAAy1MCKTAAAIAAS1g");
	var mask_1_graphics_154 = new cjs.Graphics().p("EhFJAcHIAAxTMCKTAAAIAARTg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EhFJAcSIAAv7MCKTAAAIAAP7g");
	var mask_1_graphics_156 = new cjs.Graphics().p("EhFJAcbIAAurMCKTAAAIAAOrg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EhFJAckIAAtmMCKTAAAIAANmg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EhFJAcrIAAspMCKTAAAIAAMpg");
	var mask_1_graphics_159 = new cjs.Graphics().p("EhFJAcyIAAr2MCKTAAAIAAL2g");
	var mask_1_graphics_160 = new cjs.Graphics().p("EhFJAc3IAArMMCKTAAAIAALMg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EhFJAc7IAAqsMCKTAAAIAAKsg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EhFJAc+IAAqUMCKTAAAIAAKUg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EhFJAc/IAAqGMCKTAAAIAAKGg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EhFJAdAIAAqBMCKTAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(110).to({graphics:mask_1_graphics_110,x:109.5,y:-96.4}).wait(1).to({graphics:mask_1_graphics_111,x:109.5,y:-91.8}).wait(1).to({graphics:mask_1_graphics_112,x:109.5,y:-87.3}).wait(1).to({graphics:mask_1_graphics_113,x:109.5,y:-76.3}).wait(1).to({graphics:mask_1_graphics_114,x:109.5,y:-61.3}).wait(1).to({graphics:mask_1_graphics_115,x:109.5,y:-46.9}).wait(1).to({graphics:mask_1_graphics_116,x:109.5,y:-33.1}).wait(1).to({graphics:mask_1_graphics_117,x:109.5,y:-19.9}).wait(1).to({graphics:mask_1_graphics_118,x:109.5,y:-7.3}).wait(1).to({graphics:mask_1_graphics_119,x:109.5,y:4.7}).wait(1).to({graphics:mask_1_graphics_120,x:109.5,y:16.2}).wait(1).to({graphics:mask_1_graphics_121,x:109.5,y:27.1}).wait(1).to({graphics:mask_1_graphics_122,x:109.5,y:37.3}).wait(1).to({graphics:mask_1_graphics_123,x:109.5,y:47}).wait(1).to({graphics:mask_1_graphics_124,x:109.5,y:56.1}).wait(1).to({graphics:mask_1_graphics_125,x:109.5,y:64.7}).wait(1).to({graphics:mask_1_graphics_126,x:109.5,y:72.6}).wait(1).to({graphics:mask_1_graphics_127,x:109.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_128,x:109.5,y:86.7}).wait(1).to({graphics:mask_1_graphics_129,x:109.5,y:92.8}).wait(1).to({graphics:mask_1_graphics_130,x:109.5,y:98.4}).wait(1).to({graphics:mask_1_graphics_131,x:109.5,y:103.4}).wait(1).to({graphics:mask_1_graphics_132,x:109.5,y:107.8}).wait(1).to({graphics:mask_1_graphics_133,x:109.5,y:111.6}).wait(1).to({graphics:mask_1_graphics_134,x:109.5,y:114.9}).wait(1).to({graphics:mask_1_graphics_135,x:109.5,y:117.5}).wait(1).to({graphics:mask_1_graphics_136,x:109.5,y:119.6}).wait(1).to({graphics:mask_1_graphics_137,x:109.5,y:121}).wait(1).to({graphics:mask_1_graphics_138,x:109.5,y:121.9}).wait(1).to({graphics:mask_1_graphics_139,x:109.5,y:122.2}).wait(1).to({graphics:mask_1_graphics_140,x:109.5,y:139.2}).wait(1).to({graphics:mask_1_graphics_141,x:109.5,y:155.3}).wait(1).to({graphics:mask_1_graphics_142,x:109.5,y:157.9}).wait(1).to({graphics:mask_1_graphics_143,x:109.5,y:160.4}).wait(1).to({graphics:mask_1_graphics_144,x:109.5,y:162.7}).wait(1).to({graphics:mask_1_graphics_145,x:109.5,y:165}).wait(1).to({graphics:mask_1_graphics_146,x:109.5,y:167.1}).wait(1).to({graphics:mask_1_graphics_147,x:109.5,y:169.1}).wait(1).to({graphics:mask_1_graphics_148,x:109.5,y:171}).wait(1).to({graphics:mask_1_graphics_149,x:109.5,y:172.7}).wait(1).to({graphics:mask_1_graphics_150,x:109.5,y:174.4}).wait(1).to({graphics:mask_1_graphics_151,x:109.5,y:175.9}).wait(1).to({graphics:mask_1_graphics_152,x:109.5,y:177.4}).wait(1).to({graphics:mask_1_graphics_153,x:109.5,y:178.7}).wait(1).to({graphics:mask_1_graphics_154,x:109.5,y:179.9}).wait(1).to({graphics:mask_1_graphics_155,x:109.5,y:181}).wait(1).to({graphics:mask_1_graphics_156,x:109.5,y:181.9}).wait(1).to({graphics:mask_1_graphics_157,x:109.5,y:182.8}).wait(1).to({graphics:mask_1_graphics_158,x:109.5,y:183.5}).wait(1).to({graphics:mask_1_graphics_159,x:109.5,y:184.2}).wait(1).to({graphics:mask_1_graphics_160,x:109.5,y:184.7}).wait(1).to({graphics:mask_1_graphics_161,x:109.5,y:185.1}).wait(1).to({graphics:mask_1_graphics_162,x:109.5,y:185.4}).wait(1).to({graphics:mask_1_graphics_163,x:109.5,y:185.5}).wait(1).to({graphics:mask_1_graphics_164,x:109.5,y:185.6}).wait(1).to({graphics:null,x:0,y:0}).wait(34));

	// texto3
	this.text_4 = new cjs.Text("Roles y responsabilidades generales", "30px 'Arial'", "#333333");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 34;
	this.text_4.lineWidth = 508;
	this.text_4.parent = this;
	this.text_4.setTransform(217.7,-23.2);

	this.instance_1 = new lib.M03_TMR_INVOLUCRADOS();
	this.instance_1.parent = this;
	this.instance_1.setTransform(459.5,182.2,0.551,0.551,0,0,0,115.7,152.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B3B3B3").p("EgmIAAAMBMRAAA");
	this.shape_1.setTransform(205.7,75.7);

	this.text_5 = new cjs.Text("Evaluar a sus colaboradores directos, así como al resto de los colaboradores durante la sesión de calibración, determinar acciones de desarrollo para los colaboradores identificados como “Top Talent” y determinar posibles sucesores para su posición.", "18px 'Arial'", "#666666");
	this.text_5.lineHeight = 22;
	this.text_5.lineWidth = 396;
	this.text_5.parent = this;
	this.text_5.setTransform(-24.2,130.3);

	this.text_6 = new cjs.Text("Participante de la sesión", "bold 22px 'Arial'", "#666666");
	this.text_6.lineHeight = 27;
	this.text_6.lineWidth = 439;
	this.text_6.parent = this;
	this.text_6.setTransform(-24.2,40.9);

	this.text_7 = new cjs.Text("Responsabilidades generales:  ", "20px 'Arial'", "#666666");
	this.text_7.lineHeight = 24;
	this.text_7.lineWidth = 358;
	this.text_7.parent = this;
	this.text_7.setTransform(-24.2,94.3);

	var maskedShapeInstanceList = [this.text_4,this.instance_1,this.shape_1,this.text_5,this.text_6,this.text_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.shape_1},{t:this.instance_1},{t:this.text_4}]},110).to({state:[]},55).to({state:[]},33).wait(1));

	// cortina scroll2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_55 = new cjs.Graphics().p("EhFJAGNIAA1QMCKTAAAIAAVQg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EhFJAJQIAA3lMCKTAAAIAAXlg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EhFJAMMIAA50MCKTAAAIAAZ0g");
	var mask_2_graphics_58 = new cjs.Graphics().p("EhFJAOAIAA7/MCKTAAAIAAb/g");
	var mask_2_graphics_59 = new cjs.Graphics().p("EhFJAPCIAA+DMCKTAAAIAAeDg");
	var mask_2_graphics_60 = new cjs.Graphics().p("EhFJAQCMAAAggDMCKTAAAMAAAAgDg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EhFJAQ/MAAAgh9MCKTAAAMAAAAh9g");
	var mask_2_graphics_62 = new cjs.Graphics().p("EhFJAR6MAAAgjzMCKTAAAMAAAAjzg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EhFJASxMAAAglhMCKTAAAMAAAAlhg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EhFJATnMAAAgnNMCKTAAAMAAAAnNg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EhFJAUaMAAAgozMCKTAAAMAAAAozg");
	var mask_2_graphics_66 = new cjs.Graphics().p("EhFJAVKMAAAgqTMCKTAAAMAAAAqTg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EhFJAV3MAAAgrtMCKTAAAMAAAArtg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EhFJAWiMAAAgtDMCKTAAAMAAAAtDg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EhFJAXLMAAAguVMCKTAAAMAAAAuVg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EhFJAXwMAAAgvfMCKTAAAMAAAAvfg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EhFJAYUMAAAgwnMCKTAAAMAAAAwng");
	var mask_2_graphics_72 = new cjs.Graphics().p("EhFJAY0MAAAgxnMCKTAAAMAAAAxng");
	var mask_2_graphics_73 = new cjs.Graphics().p("EhFJAZSMAAAgyjMCKTAAAMAAAAyjg");
	var mask_2_graphics_74 = new cjs.Graphics().p("EhFJAZtMAAAgzZMCKTAAAMAAAAzZg");
	var mask_2_graphics_75 = new cjs.Graphics().p("EhFJAaGMAAAg0LMCKTAAAMAAAA0Lg");
	var mask_2_graphics_76 = new cjs.Graphics().p("EhFJAacMAAAg03MCKTAAAMAAAA03g");
	var mask_2_graphics_77 = new cjs.Graphics().p("EhFJAawMAAAg1fMCKTAAAMAAAA1fg");
	var mask_2_graphics_78 = new cjs.Graphics().p("EhFJAbBMAAAg2BMCKTAAAMAAAA2Bg");
	var mask_2_graphics_79 = new cjs.Graphics().p("EhFJAbPMAAAg2dMCKTAAAMAAAA2dg");
	var mask_2_graphics_80 = new cjs.Graphics().p("EhFJAbbMAAAg21MCKTAAAMAAAA21g");
	var mask_2_graphics_81 = new cjs.Graphics().p("EhFJAbkMAAAg3HMCKTAAAMAAAA3Hg");
	var mask_2_graphics_82 = new cjs.Graphics().p("EhFJAbqMAAAg3TMCKTAAAMAAAA3Tg");
	var mask_2_graphics_83 = new cjs.Graphics().p("EhFJAbuMAAAg3bMCKTAAAMAAAA3bg");
	var mask_2_graphics_84 = new cjs.Graphics().p("EhFJAbwMAAAg3fMCKTAAAMAAAA3fg");
	var mask_2_graphics_85 = new cjs.Graphics().p("EhFJAZ+MAAAgz7MCKTAAAMAAAAz7g");
	var mask_2_graphics_86 = new cjs.Graphics().p("EhFJAYSMAAAgwgMCKTAAAMAAAAwgg");
	var mask_2_graphics_87 = new cjs.Graphics().p("EhFJAYrMAAAgtOMCKTAAAMAAAAtOg");
	var mask_2_graphics_88 = new cjs.Graphics().p("EhFJAZEMAAAgqGMCKTAAAMAAAAqGg");
	var mask_2_graphics_89 = new cjs.Graphics().p("EhFJAZbMAAAgnGMCKTAAAMAAAAnGg");
	var mask_2_graphics_90 = new cjs.Graphics().p("EhFJAZyMAAAgkSMCKTAAAMAAAAkSg");
	var mask_2_graphics_91 = new cjs.Graphics().p("EhFJAaHMAAAghlMCKTAAAMAAAAhlg");
	var mask_2_graphics_92 = new cjs.Graphics().p("EhFJAabIAA/CMCKTAAAIAAfCg");
	var mask_2_graphics_93 = new cjs.Graphics().p("EhFJAauIAA8pMCKTAAAIAAcpg");
	var mask_2_graphics_94 = new cjs.Graphics().p("EhFJAa/IAA6ZMCKTAAAIAAaZg");
	var mask_2_graphics_95 = new cjs.Graphics().p("EhFJAbQIAA4SMCKTAAAIAAYSg");
	var mask_2_graphics_96 = new cjs.Graphics().p("EhFJAbfIAA2UMCKTAAAIAAWUg");
	var mask_2_graphics_97 = new cjs.Graphics().p("EhFJAbuIAA0gMCKTAAAIAAUgg");
	var mask_2_graphics_98 = new cjs.Graphics().p("EhFJAb7IAAy1MCKTAAAIAAS1g");
	var mask_2_graphics_99 = new cjs.Graphics().p("EhFJAcHIAAxTMCKTAAAIAARTg");
	var mask_2_graphics_100 = new cjs.Graphics().p("EhFJAcSIAAv7MCKTAAAIAAP7g");
	var mask_2_graphics_101 = new cjs.Graphics().p("EhFJAcbIAAurMCKTAAAIAAOrg");
	var mask_2_graphics_102 = new cjs.Graphics().p("EhFJAckIAAtmMCKTAAAIAANmg");
	var mask_2_graphics_103 = new cjs.Graphics().p("EhFJAcrIAAspMCKTAAAIAAMpg");
	var mask_2_graphics_104 = new cjs.Graphics().p("EhFJAcyIAAr2MCKTAAAIAAL2g");
	var mask_2_graphics_105 = new cjs.Graphics().p("EhFJAc3IAArMMCKTAAAIAALMg");
	var mask_2_graphics_106 = new cjs.Graphics().p("EhFJAc7IAAqsMCKTAAAIAAKsg");
	var mask_2_graphics_107 = new cjs.Graphics().p("EhFJAc+IAAqUMCKTAAAIAAKUg");
	var mask_2_graphics_108 = new cjs.Graphics().p("EhFJAc/IAAqGMCKTAAAIAAKGg");
	var mask_2_graphics_109 = new cjs.Graphics().p("EhFJAdAIAAqBMCKTAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_2_graphics_55,x:109.5,y:-96.4}).wait(1).to({graphics:mask_2_graphics_56,x:109.5,y:-91.8}).wait(1).to({graphics:mask_2_graphics_57,x:109.5,y:-87.3}).wait(1).to({graphics:mask_2_graphics_58,x:109.5,y:-76.3}).wait(1).to({graphics:mask_2_graphics_59,x:109.5,y:-61.3}).wait(1).to({graphics:mask_2_graphics_60,x:109.5,y:-46.9}).wait(1).to({graphics:mask_2_graphics_61,x:109.5,y:-33.1}).wait(1).to({graphics:mask_2_graphics_62,x:109.5,y:-19.9}).wait(1).to({graphics:mask_2_graphics_63,x:109.5,y:-7.3}).wait(1).to({graphics:mask_2_graphics_64,x:109.5,y:4.7}).wait(1).to({graphics:mask_2_graphics_65,x:109.5,y:16.2}).wait(1).to({graphics:mask_2_graphics_66,x:109.5,y:27.1}).wait(1).to({graphics:mask_2_graphics_67,x:109.5,y:37.3}).wait(1).to({graphics:mask_2_graphics_68,x:109.5,y:47}).wait(1).to({graphics:mask_2_graphics_69,x:109.5,y:56.1}).wait(1).to({graphics:mask_2_graphics_70,x:109.5,y:64.7}).wait(1).to({graphics:mask_2_graphics_71,x:109.5,y:72.6}).wait(1).to({graphics:mask_2_graphics_72,x:109.5,y:79.9}).wait(1).to({graphics:mask_2_graphics_73,x:109.5,y:86.7}).wait(1).to({graphics:mask_2_graphics_74,x:109.5,y:92.8}).wait(1).to({graphics:mask_2_graphics_75,x:109.5,y:98.4}).wait(1).to({graphics:mask_2_graphics_76,x:109.5,y:103.4}).wait(1).to({graphics:mask_2_graphics_77,x:109.5,y:107.8}).wait(1).to({graphics:mask_2_graphics_78,x:109.5,y:111.6}).wait(1).to({graphics:mask_2_graphics_79,x:109.5,y:114.9}).wait(1).to({graphics:mask_2_graphics_80,x:109.5,y:117.5}).wait(1).to({graphics:mask_2_graphics_81,x:109.5,y:119.6}).wait(1).to({graphics:mask_2_graphics_82,x:109.5,y:121}).wait(1).to({graphics:mask_2_graphics_83,x:109.5,y:121.9}).wait(1).to({graphics:mask_2_graphics_84,x:109.5,y:122.2}).wait(1).to({graphics:mask_2_graphics_85,x:109.5,y:139.2}).wait(1).to({graphics:mask_2_graphics_86,x:109.5,y:155.3}).wait(1).to({graphics:mask_2_graphics_87,x:109.5,y:157.9}).wait(1).to({graphics:mask_2_graphics_88,x:109.5,y:160.4}).wait(1).to({graphics:mask_2_graphics_89,x:109.5,y:162.7}).wait(1).to({graphics:mask_2_graphics_90,x:109.5,y:165}).wait(1).to({graphics:mask_2_graphics_91,x:109.5,y:167.1}).wait(1).to({graphics:mask_2_graphics_92,x:109.5,y:169.1}).wait(1).to({graphics:mask_2_graphics_93,x:109.5,y:171}).wait(1).to({graphics:mask_2_graphics_94,x:109.5,y:172.7}).wait(1).to({graphics:mask_2_graphics_95,x:109.5,y:174.4}).wait(1).to({graphics:mask_2_graphics_96,x:109.5,y:175.9}).wait(1).to({graphics:mask_2_graphics_97,x:109.5,y:177.4}).wait(1).to({graphics:mask_2_graphics_98,x:109.5,y:178.7}).wait(1).to({graphics:mask_2_graphics_99,x:109.5,y:179.9}).wait(1).to({graphics:mask_2_graphics_100,x:109.5,y:181}).wait(1).to({graphics:mask_2_graphics_101,x:109.5,y:181.9}).wait(1).to({graphics:mask_2_graphics_102,x:109.5,y:182.8}).wait(1).to({graphics:mask_2_graphics_103,x:109.5,y:183.5}).wait(1).to({graphics:mask_2_graphics_104,x:109.5,y:184.2}).wait(1).to({graphics:mask_2_graphics_105,x:109.5,y:184.7}).wait(1).to({graphics:mask_2_graphics_106,x:109.5,y:185.1}).wait(1).to({graphics:mask_2_graphics_107,x:109.5,y:185.4}).wait(1).to({graphics:mask_2_graphics_108,x:109.5,y:185.5}).wait(1).to({graphics:mask_2_graphics_109,x:109.5,y:185.6}).wait(1).to({graphics:null,x:0,y:0}).wait(89));

	// texto2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B3B3B3").p("EgmIAAAMBMRAAA");
	this.shape_2.setTransform(245.8,121.7);

	this.text_8 = new cjs.Text("Promueve el diálogo entre los participantes y funge como mediador de la discusión.", "18px 'Arial'", "#666666");
	this.text_8.lineHeight = 22;
	this.text_8.lineWidth = 462;
	this.text_8.parent = this;
	this.text_8.setTransform(15.8,176.3);

	this.text_9 = new cjs.Text("Líder de la sesión", "bold 22px 'Arial'", "#666666");
	this.text_9.lineHeight = 27;
	this.text_9.lineWidth = 439;
	this.text_9.parent = this;
	this.text_9.setTransform(15.8,86.9);

	this.text_10 = new cjs.Text("Roles y responsabilidades generales", "30px 'Arial'", "#333333");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 34;
	this.text_10.lineWidth = 508;
	this.text_10.parent = this;
	this.text_10.setTransform(252.1,12.8);

	this.text_11 = new cjs.Text("Responsabilidades generales:  ", "20px 'Arial'", "#666666");
	this.text_11.lineHeight = 24;
	this.text_11.lineWidth = 358;
	this.text_11.parent = this;
	this.text_11.setTransform(15.8,140.3);

	var maskedShapeInstanceList = [this.shape_2,this.text_8,this.text_9,this.text_10,this.text_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.shape_2}]},55).to({state:[]},55).wait(89));

	// cortina scroll (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EhFJAGNIAA1QMCKTAAAIAAVQg");
	var mask_3_graphics_1 = new cjs.Graphics().p("EhFJAJQIAA3lMCKTAAAIAAXlg");
	var mask_3_graphics_2 = new cjs.Graphics().p("EhFJAMMIAA50MCKTAAAIAAZ0g");
	var mask_3_graphics_3 = new cjs.Graphics().p("EhFJAOAIAA7/MCKTAAAIAAb/g");
	var mask_3_graphics_4 = new cjs.Graphics().p("EhFJAPCIAA+DMCKTAAAIAAeDg");
	var mask_3_graphics_5 = new cjs.Graphics().p("EhFJAQCMAAAggDMCKTAAAMAAAAgDg");
	var mask_3_graphics_6 = new cjs.Graphics().p("EhFJAQ/MAAAgh9MCKTAAAMAAAAh9g");
	var mask_3_graphics_7 = new cjs.Graphics().p("EhFJAR6MAAAgjzMCKTAAAMAAAAjzg");
	var mask_3_graphics_8 = new cjs.Graphics().p("EhFJASxMAAAglhMCKTAAAMAAAAlhg");
	var mask_3_graphics_9 = new cjs.Graphics().p("EhFJATnMAAAgnNMCKTAAAMAAAAnNg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EhFJAUaMAAAgozMCKTAAAMAAAAozg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EhFJAVKMAAAgqTMCKTAAAMAAAAqTg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EhFJAV3MAAAgrtMCKTAAAMAAAArtg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EhFJAWiMAAAgtDMCKTAAAMAAAAtDg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EhFJAXLMAAAguVMCKTAAAMAAAAuVg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EhFJAXwMAAAgvfMCKTAAAMAAAAvfg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EhFJAYUMAAAgwnMCKTAAAMAAAAwng");
	var mask_3_graphics_17 = new cjs.Graphics().p("EhFJAY0MAAAgxnMCKTAAAMAAAAxng");
	var mask_3_graphics_18 = new cjs.Graphics().p("EhFJAZSMAAAgyjMCKTAAAMAAAAyjg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EhFJAZtMAAAgzZMCKTAAAMAAAAzZg");
	var mask_3_graphics_20 = new cjs.Graphics().p("EhFJAaGMAAAg0LMCKTAAAMAAAA0Lg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EhFJAacMAAAg03MCKTAAAMAAAA03g");
	var mask_3_graphics_22 = new cjs.Graphics().p("EhFJAawMAAAg1fMCKTAAAMAAAA1fg");
	var mask_3_graphics_23 = new cjs.Graphics().p("EhFJAbBMAAAg2BMCKTAAAMAAAA2Bg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EhFJAbPMAAAg2dMCKTAAAMAAAA2dg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EhFJAbbMAAAg21MCKTAAAMAAAA21g");
	var mask_3_graphics_26 = new cjs.Graphics().p("EhFJAbkMAAAg3HMCKTAAAMAAAA3Hg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EhFJAbqMAAAg3TMCKTAAAMAAAA3Tg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EhFJAbuMAAAg3bMCKTAAAMAAAA3bg");
	var mask_3_graphics_29 = new cjs.Graphics().p("EhFJAbwMAAAg3fMCKTAAAMAAAA3fg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EhFJAZ+MAAAgz7MCKTAAAMAAAAz7g");
	var mask_3_graphics_31 = new cjs.Graphics().p("EhFJAYSMAAAgwgMCKTAAAMAAAAwgg");
	var mask_3_graphics_32 = new cjs.Graphics().p("EhFJAYrMAAAgtOMCKTAAAMAAAAtOg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EhFJAZEMAAAgqGMCKTAAAMAAAAqGg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EhFJAZbMAAAgnGMCKTAAAMAAAAnGg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EhFJAZyMAAAgkSMCKTAAAMAAAAkSg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EhFJAaHMAAAghlMCKTAAAMAAAAhlg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EhFJAabIAA/CMCKTAAAIAAfCg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EhFJAauIAA8pMCKTAAAIAAcpg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EhFJAa/IAA6ZMCKTAAAIAAaZg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EhFJAbQIAA4SMCKTAAAIAAYSg");
	var mask_3_graphics_41 = new cjs.Graphics().p("EhFJAbfIAA2UMCKTAAAIAAWUg");
	var mask_3_graphics_42 = new cjs.Graphics().p("EhFJAbuIAA0gMCKTAAAIAAUgg");
	var mask_3_graphics_43 = new cjs.Graphics().p("EhFJAb7IAAy1MCKTAAAIAAS1g");
	var mask_3_graphics_44 = new cjs.Graphics().p("EhFJAcHIAAxTMCKTAAAIAARTg");
	var mask_3_graphics_45 = new cjs.Graphics().p("EhFJAcSIAAv7MCKTAAAIAAP7g");
	var mask_3_graphics_46 = new cjs.Graphics().p("EhFJAcbIAAurMCKTAAAIAAOrg");
	var mask_3_graphics_47 = new cjs.Graphics().p("EhFJAckIAAtmMCKTAAAIAANmg");
	var mask_3_graphics_48 = new cjs.Graphics().p("EhFJAcrIAAspMCKTAAAIAAMpg");
	var mask_3_graphics_49 = new cjs.Graphics().p("EhFJAcyIAAr2MCKTAAAIAAL2g");
	var mask_3_graphics_50 = new cjs.Graphics().p("EhFJAc3IAArMMCKTAAAIAALMg");
	var mask_3_graphics_51 = new cjs.Graphics().p("EhFJAc7IAAqsMCKTAAAIAAKsg");
	var mask_3_graphics_52 = new cjs.Graphics().p("EhFJAc+IAAqUMCKTAAAIAAKUg");
	var mask_3_graphics_53 = new cjs.Graphics().p("EhFJAc/IAAqGMCKTAAAIAAKGg");
	var mask_3_graphics_54 = new cjs.Graphics().p("EhFJAdAIAAqBMCKTAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:109.5,y:-96.4}).wait(1).to({graphics:mask_3_graphics_1,x:109.5,y:-91.8}).wait(1).to({graphics:mask_3_graphics_2,x:109.5,y:-87.3}).wait(1).to({graphics:mask_3_graphics_3,x:109.5,y:-76.3}).wait(1).to({graphics:mask_3_graphics_4,x:109.5,y:-61.3}).wait(1).to({graphics:mask_3_graphics_5,x:109.5,y:-46.9}).wait(1).to({graphics:mask_3_graphics_6,x:109.5,y:-33.1}).wait(1).to({graphics:mask_3_graphics_7,x:109.5,y:-19.9}).wait(1).to({graphics:mask_3_graphics_8,x:109.5,y:-7.3}).wait(1).to({graphics:mask_3_graphics_9,x:109.5,y:4.7}).wait(1).to({graphics:mask_3_graphics_10,x:109.5,y:16.2}).wait(1).to({graphics:mask_3_graphics_11,x:109.5,y:27.1}).wait(1).to({graphics:mask_3_graphics_12,x:109.5,y:37.3}).wait(1).to({graphics:mask_3_graphics_13,x:109.5,y:47}).wait(1).to({graphics:mask_3_graphics_14,x:109.5,y:56.1}).wait(1).to({graphics:mask_3_graphics_15,x:109.5,y:64.7}).wait(1).to({graphics:mask_3_graphics_16,x:109.5,y:72.6}).wait(1).to({graphics:mask_3_graphics_17,x:109.5,y:79.9}).wait(1).to({graphics:mask_3_graphics_18,x:109.5,y:86.7}).wait(1).to({graphics:mask_3_graphics_19,x:109.5,y:92.8}).wait(1).to({graphics:mask_3_graphics_20,x:109.5,y:98.4}).wait(1).to({graphics:mask_3_graphics_21,x:109.5,y:103.4}).wait(1).to({graphics:mask_3_graphics_22,x:109.5,y:107.8}).wait(1).to({graphics:mask_3_graphics_23,x:109.5,y:111.6}).wait(1).to({graphics:mask_3_graphics_24,x:109.5,y:114.9}).wait(1).to({graphics:mask_3_graphics_25,x:109.5,y:117.5}).wait(1).to({graphics:mask_3_graphics_26,x:109.5,y:119.6}).wait(1).to({graphics:mask_3_graphics_27,x:109.5,y:121}).wait(1).to({graphics:mask_3_graphics_28,x:109.5,y:121.9}).wait(1).to({graphics:mask_3_graphics_29,x:109.5,y:122.2}).wait(1).to({graphics:mask_3_graphics_30,x:109.5,y:139.2}).wait(1).to({graphics:mask_3_graphics_31,x:109.5,y:155.3}).wait(1).to({graphics:mask_3_graphics_32,x:109.5,y:157.9}).wait(1).to({graphics:mask_3_graphics_33,x:109.5,y:160.4}).wait(1).to({graphics:mask_3_graphics_34,x:109.5,y:162.7}).wait(1).to({graphics:mask_3_graphics_35,x:109.5,y:165}).wait(1).to({graphics:mask_3_graphics_36,x:109.5,y:167.1}).wait(1).to({graphics:mask_3_graphics_37,x:109.5,y:169.1}).wait(1).to({graphics:mask_3_graphics_38,x:109.5,y:171}).wait(1).to({graphics:mask_3_graphics_39,x:109.5,y:172.7}).wait(1).to({graphics:mask_3_graphics_40,x:109.5,y:174.4}).wait(1).to({graphics:mask_3_graphics_41,x:109.5,y:175.9}).wait(1).to({graphics:mask_3_graphics_42,x:109.5,y:177.4}).wait(1).to({graphics:mask_3_graphics_43,x:109.5,y:178.7}).wait(1).to({graphics:mask_3_graphics_44,x:109.5,y:179.9}).wait(1).to({graphics:mask_3_graphics_45,x:109.5,y:181}).wait(1).to({graphics:mask_3_graphics_46,x:109.5,y:181.9}).wait(1).to({graphics:mask_3_graphics_47,x:109.5,y:182.8}).wait(1).to({graphics:mask_3_graphics_48,x:109.5,y:183.5}).wait(1).to({graphics:mask_3_graphics_49,x:109.5,y:184.2}).wait(1).to({graphics:mask_3_graphics_50,x:109.5,y:184.7}).wait(1).to({graphics:mask_3_graphics_51,x:109.5,y:185.1}).wait(1).to({graphics:mask_3_graphics_52,x:109.5,y:185.4}).wait(1).to({graphics:mask_3_graphics_53,x:109.5,y:185.5}).wait(1).to({graphics:mask_3_graphics_54,x:109.5,y:185.6}).wait(1).to({graphics:null,x:0,y:0}).wait(144));

	// texto1
	this.instance_2 = new lib.M03_TMR_CHECK();
	this.instance_2.parent = this;
	this.instance_2.setTransform(412.5,148.2,0.452,0.452,0,0,0,187.1,183.1);

	this.text_12 = new cjs.Text("Mecanismo", "bold 20px 'Arial'", "#333333");
	this.text_12.lineHeight = 22;
	this.text_12.lineWidth = 132;
	this.text_12.parent = this;
	this.text_12.setTransform(10.4,20.5);

	this.text_13 = new cjs.Text("Como parte de la metodología, se calibran los resultados de potencial y desempeño del colaborador y se establecen las acciones de desarrollo que les permitirán estar listos para dichas responsabilidades en el tiempo previsto...", "18px 'Arial'", "#666666");
	this.text_13.lineHeight = 22;
	this.text_13.lineWidth = 297;
	this.text_13.parent = this;
	this.text_13.setTransform(10.4,73.1);

	var maskedShapeInstanceList = [this.instance_2,this.text_12,this.text_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.instance_2}]}).to({state:[]},55).wait(144));

	// Boton retroceder
	this.btn_atras5 = new lib.AS_LG_150Botónpaginación();
	this.btn_atras5.parent = this;
	this.btn_atras5.setTransform(584.9,31.7,1,1,0,90,-90);
	this.btn_atras5._off = true;
	new cjs.ButtonHelper(this.btn_atras5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_atras5).wait(55).to({_off:false},0).wait(144));

	// Botón avanzar
	this.btn_siguiente5 = new lib.AS_LG_150Botónpaginación();
	this.btn_siguiente5.parent = this;
	this.btn_siguiente5.setTransform(585.1,210.1,1,1,90);
	new cjs.ButtonHelper(this.btn_siguiente5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente5).to({_off:true},140).wait(59));

	// Botones Claros/Siempre
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHApIg5hDQgFgGAFgHQAEgGAIACIAyAPIAFAAIAygPQAIgCAEAGQAFAHgFAGIg5BDQgDAEgFAAQgEAAgDgEg");
	this.shape_3.setTransform(575.4,221.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1AsIgygPIgFAAIgyAPQgIACgEgGQgFgHAFgGIA5hDQADgEAEAAQAFAAADAEIA5BDQAFAGgFAHQgDAFgFAAIgEgBg");
	this.shape_4.setTransform(574.8,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhDQoQgdgcAAgqQAAgpAdgdQAdgdAoAAQAqAAAdAdQAcAdAAApQAAAqgcAcQgdAdgqAAQgoAAgdgdgAhBuVIgGgGQgdgdAAgpQAAgpAdgdQARgSAVgHQAPgEARgBQAQABAPAEQAVAHARASQAeAdAAApQAAApgeAdIgFAGQgbAXglAAQglAAgbgXg");
	this.shape_5.setTransform(575,120.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(199));

	// Barra Desplazamiento
	this.instance_3 = new lib.AS_LG_152c();
	this.instance_3.parent = this;
	this.instance_3.setTransform(574.5,69.7,1,1,90,0,0,22.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({y:183.6},169).wait(1));

	// Barra fondo
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AAACAE").s().p("AgTLwQgJgIABgLIAA25QgBgLAJgIQAIgIALAAQALAAAJAIQAIAIAAALIAAW5QAAALgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_6.setTransform(574.5,121.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(199));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(564.8,11.2,20.3,218.7);


(lib.mc13tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// botones y ventanas  menu
	this.instance = new lib.mod2t2mc3_con_todos_los_bocombrosa();
	this.instance.parent = this;
	this.instance.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(49));

	// Layer 2
	this.instance_1 = new lib.animacionn2rosa("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.3,257.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({y:298.9,alpha:1},12,cjs.Ease.get(1)).wait(65));

	// grafica
	this.instance_2 = new lib.grafica1banderillasroll2rosa("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:619.3,alpha:1},12,cjs.Ease.get(1)).wait(49));

	// header1
	this.instance_3 = new lib.no1perfilroll24erosa("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.6,33.1,1,1,0,0,0,290.8,73.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:53.1,alpha:1},18,cjs.Ease.get(1)).wait(77));

	// titulo solo ests 4 MC por ventana negra
	this.instance_4 = new lib.tituloestatico();
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.6,209.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-33.7,600.8,498.4);


(lib.mc11atema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// botones y ventanas  menu
	this.instance = new lib.mod2t2mc3_con_todos_los_botonesrolamama();
	this.instance.parent = this;
	this.instance.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(49));

	// Layer 2
	this.instance_1 = new lib.animacionn2am("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.3,257.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({y:298.9,alpha:1},12,cjs.Ease.get(1)).wait(65));

	// grafica
	this.instance_2 = new lib.grafica1banderillasrollam("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:619.3,alpha:1},12,cjs.Ease.get(1)).wait(49));

	// header1
	this.instance_3 = new lib.no1perfilroll2am("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.6,33.1,1,1,0,0,0,290.8,73.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:53.1,alpha:1},18,cjs.Ease.get(1)).wait(77));

	// titulo solo ests 4 MC por ventana negra
	this.instance_4 = new lib.tituloestatico();
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.6,209.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-33.7,600.8,498.4);


(lib.mc11tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// botones y ventanas  menu
	this.instance = new lib.mod2t2mc3_con_todos_los_botonesroll24ene();
	this.instance.parent = this;
	this.instance.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(49));

	// Layer 2
	this.instance_1 = new lib.animacion2verde("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.3,257.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({y:298.9,alpha:1},12,cjs.Ease.get(1)).wait(65));

	// grafica
	this.instance_2 = new lib.grafica1banderillasroll22verde("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:619.3,alpha:1},12,cjs.Ease.get(1)).wait(49));

	// header1
	this.instance_3 = new lib.no1perfilroll22verde("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.6,33.1,1,1,0,0,0,290.8,73.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:53.1,alpha:1},18,cjs.Ease.get(1)).wait(77));

	// titulo solo ests 4 MC por ventana negra
	this.instance_4 = new lib.tituloestatico();
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.6,209.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-33.7,600.8,498.4);


(lib.mc9tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1));

	// botones y ventanas  menu
	this.instance = new lib.mod2t2mc3_con_todos_los_botoazules();
	this.instance.parent = this;
	this.instance.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).wait(49));

	// Layer 2
	this.instance_1 = new lib.animacionn2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.3,257.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({y:298.9,alpha:1},12,cjs.Ease.get(1)).wait(65));

	// grafica
	this.instance_2 = new lib.grafica1banderillasroll24ene("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:619.3,alpha:1},12,cjs.Ease.get(1)).wait(49));

	// header1
	this.instance_3 = new lib.no1perfilroll24ene("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.6,33.1,1,1,0,0,0,290.8,73.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:53.1,alpha:1},18,cjs.Ease.get(1)).wait(77));

	// titulo solo ests 4 MC por ventana negra
	this.instance_4 = new lib.tituloestatico();
	this.instance_4.parent = this;
	this.instance_4.setTransform(286.6,209.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-33.7,600.8,498.4);


(lib.mc8tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// header1
	this.instance = new lib.no1perfil("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-326.2,-200.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-266.2,alpha:1},22,cjs.Ease.get(1)).wait(118));

	// header2
	this.instance_1 = new lib.no1perfilsale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.9,-119.2,1,1,0,0,0,555.6,58.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:341.9,alpha:1},20,cjs.Ease.get(1)).wait(98));

	// lbolita 3
	this.instance_2 = new lib._3a5a22255("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(308.1,244.1,1,1,0,0,0,72.7,100.8);
	this.instance_2.alpha = 0.031;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({regX:72.8,scaleX:1.2,scaleY:1.2,x:528.5,y:284.8,alpha:1},10,cjs.Ease.get(1)).to({regX:72.7,scaleX:1,scaleY:1,x:460.9,y:244.1},10,cjs.Ease.get(1)).wait(63));

	// lbolita 2
	this.instance_3 = new lib.unodosanios22255ddf("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(138.2,244.1,1,1,0,0,0,72.5,100.8);
	this.instance_3.alpha = 0.031;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:317.1,y:264.5,alpha:1},13,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:308.2,y:244.1},10,cjs.Ease.get(1)).wait(50));

	// lbolita 1
	this.instance_4 = new lib.listoahora22255("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-23.9,234.7,1,1,0,0,0,71,91.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:105.4,y:250.2,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:156.1,y:234.7},9,cjs.Ease.get(1)).wait(37));

	// lbolita 4
	this.instance_5 = new lib.nohaysucesor22255("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(453.5,244.1,1,1,0,0,0,72.7,100.8);
	this.instance_5.alpha = 0.031;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:626,y:244.5,alpha:1},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:615.6,y:244.1},7,cjs.Ease.get(1)).wait(27));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgyAAhGQAAhFAwgyQAxgyBDAAQBEAAAxAyQAwAyAABFQAABGgwAyQgxAyhEAAQhDAAgxgyg");
	this.shape.setTransform(-203.3,305.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},47).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-294.7,-189.7,424.2,512.1);


(lib.mc6tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_145 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(145).call(this.frame_145).wait(1));

	// listo ahora
	this.instance = new lib.listoahora("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(156.1,334.7,1,1,0,0,0,71,91.4);
	this.instance.alpha = 0.031;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:162.6,y:233.2,alpha:1},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:156.1,y:234.7},7,cjs.Ease.get(1)).wait(111));

	// uno dos anios
	this.instance_1 = new lib.unodosanios("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.2,274.1,1,1,0,0,0,72.5,100.8);
	this.instance_1.alpha = 0.031;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:317.1,y:244.5,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:308.2,y:244.1},7,cjs.Ease.get(1)).wait(93));

	// 3a5 anios
	this.instance_2 = new lib._3a5anios("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(308.1,294.1,1,1,0,0,0,72.7,100.8);
	this.instance_2.alpha = 0.031;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({regX:72.8,scaleX:1.2,scaleY:1.2,x:460.5,y:244.5,alpha:1},10,cjs.Ease.get(1)).to({regX:72.7,scaleX:1,scaleY:1,x:460.9,y:244.1},7,cjs.Ease.get(1)).wait(75));

	// m2t1mc1 txt1
	this.instance_3 = new lib.iconoinfoposiciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(285.6,68.4,1,1,0,0,0,187,42.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:215.6,alpha:1},16,cjs.Ease.get(1)).wait(130));

	// no hay sucesor
	this.instance_4 = new lib.nohaysucesor("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(453.5,294.1,1,1,0,0,0,72.7,100.8);
	this.instance_4.alpha = 0.031;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:626,y:244.5,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:615.6,y:244.1},7,cjs.Ease.get(1)).wait(57));

	//  reemplazo de emergencia
	this.instance_5 = new lib.reemplazodeemergencia("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(615.7,281.8,1,1,0,0,0,72.5,98.5);
	this.instance_5.alpha = 0.031;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:770.4,y:236.1,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:769.3,y:237.1},7,cjs.Ease.get(1)).wait(39));

	// TIP
	this.info = new lib.mc_inFOtmr();
	this.info.parent = this;
	this.info.setTransform(833.9,424.7);
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(107).to({_off:false},0).wait(39));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,3.9,911.7,536.2);


(lib.mc4tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// header1
	this.instance = new lib.no1perfil25ene20moanimultax("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-174.9,-126.9,1,1,0,0,0,290.8,73.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.6,alpha:1},22,cjs.Ease.get(1)).wait(31));

	// header2
	this.instance_1 = new lib.no1perfilsas25enmanimultax("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.9,-119.2,1,1,0,0,0,555.6,58.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:341.9,alpha:1},20,cjs.Ease.get(1)).wait(11));

	// botones y ventanas  menu
	this.instance_2 = new lib.mod2t2mc3_co25ene201animultax();
	this.instance_2.parent = this;
	this.instance_2.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).wait(7));

	// Layer 2
	this.instance_3 = new lib.animacionn22525ene2animultax("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(528.3,257.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:526.3,y:270.1,alpha:1},12,cjs.Ease.get(1)).wait(23));

	// grafica
	this.instance_4 = new lib.grafica1banderillasroanimultax("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({x:591.5,alpha:0.301},2,cjs.Ease.get(1)).to({x:619.3,alpha:1},10).wait(7));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.5,3.3,423.5,461.4);


(lib.mc2tema4mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// instruccion
	this.instance = new lib.flechamueveroll24ene("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(868.3,32.9,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic en las flechas para ver más información.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(460.1,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},26).wait(28));

	// Layer 2
	this.instance_1 = new lib.M03_TMR_MODERADOR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.1,246.3,0.4,0.4,0,0,0,198.1,184);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(28));

	// icono
	this.instance_2 = new lib.iconoinfoposicionesbienrosa("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.6,238.5,1,1,0,0,0,75,152.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({x:113.6,alpha:1,mode:"synched"},19,cjs.Ease.get(1)).wait(19));

	// scroll
	this.instance_3 = new lib.scrollm2t3mc3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303,128.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(28));

	// fondo scroll
	this.instance_4 = new lib.fondoscroll1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(240.1,223.8,0.459,1,0,0,0,445.9,169.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({scaleX:1,x:451.2,alpha:1},19,cjs.Ease.get(1)).wait(28));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,506,50,34);


(lib.mc1temc5mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// header1
	this.instance = new lib.no1perfil25ene20mod3mcx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-174.9,-126.9,1,1,0,0,0,290.8,73.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.6,alpha:1},22,cjs.Ease.get(1)).wait(31));

	// header2
	this.instance_1 = new lib.no1perfilsas25enmod3mcx("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.9,-119.2,1,1,0,0,0,555.6,58.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:341.9,alpha:1},20,cjs.Ease.get(1)).wait(11));

	// botones y ventanas  menu
	this.instance_2 = new lib.mod2t2mc3_co25ene2019mod3mcx();
	this.instance_2.parent = this;
	this.instance_2.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(46).to({_off:false},0).wait(7));

	// Layer 2
	this.instance_3 = new lib.animacionn22525ene2019mod3mcx("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(528.3,257.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:526.3,y:270.1,alpha:1},12,cjs.Ease.get(1)).wait(23));

	// grafica
	this.instance_4 = new lib.grafica1banderillasromod3mcx("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).to({x:591.5,alpha:0.301},2,cjs.Ease.get(1)).to({x:619.3,alpha:1},10).wait(7));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CDQgyg3AAhMQAAhMAyg1QAzg2BIAAQBIAAA0A2QAzA1AABMQAABMgzA3Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.5,3.3,423.5,461.4);


// stage content:
(lib.AC_TMR_M03_05 = function(mode,startPosition,loop) {
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
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// TITULO
	this.instance = new lib.tema_entrada_titulo();
	this.instance.parent = this;
	this.instance.setTransform(303.6,249.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,218,255,0.6)").ss(1,1,1).p("AhoioIDRAAIAAFRIjRAAg");
	this.shape.setTransform(-123.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhoCpIAAlRIDRAAIAAFRg");
	this.shape_1.setTransform(-123.6,16.9);

	this.instance_1 = new lib.tituloestatico();
	this.instance_1.parent = this;
	this.instance_1.setTransform(303.6,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).to({state:[]},6).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},4).wait(1));

	// PAGINAS
	this.instance_2 = new lib.mc1tema4mod3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_3 = new lib.mc2tema4mod3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.4,20.2);

	this.instance_4 = new lib.mc3tema4mod3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.4,20.2);

	this.instance_5 = new lib.mc4tema4mod3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.4,40.2);

	this.instance_6 = new lib.mc1temc5mod3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.4,40.2);

	this.instance_7 = new lib.mc6tema4mod3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(17.4,40.2);

	this.instance_8 = new lib.mc8tema4mod3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_9 = new lib.mc9tema4mod3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(17.4,40.2);

	this.instance_10 = new lib.mc11tema4mod3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(17.4,40.2);

	this.instance_11 = new lib.mc11atema4mod3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(17.4,40.2);

	this.instance_12 = new lib.mc13tema4mod3();
	this.instance_12.parent = this;
	this.instance_12.setTransform(17.4,40.2);

	this.instance_13 = new lib.mc16tema4mod3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(389,302.1,1,1,0,0,0,365.4,228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,249,603.6,550.1);
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