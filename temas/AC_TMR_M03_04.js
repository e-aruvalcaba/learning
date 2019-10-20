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


(lib.titulot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Metodología\n9-Box", "bold 25px 'Arial'", "#333333");
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

	this.text = new cjs.Text("Metodología 9-Box", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,188.1,27.1), null);


(lib.tapageneralblancoretoo4resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.tapageneralblancomod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.signodemasanimado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0878B").s().p("AgxDIIAAiVIiWAAIAAhlICWAAIAAiVIBjAAIAACVICWAAIAABlIiWAAIAACVg");
	this.shape.setTransform(20,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,60,40,40);


(lib.pontencialanimado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AtvAAIbeAA");
	this.shape.setTransform(106.5,216.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7DA98").s().p("AgKBXQgDgGgMgFQgJgEgHABIgFABIgNANIgWgVIAMgNQACgFgDgLIgCgGQgEgHgFgDIgEgDIgSABIgBgeIARAAQAHgDAFgLIACgDQACgIgBgGIgBgFIgNgMIAVgXIANAMIAFABQAGAAAHgDIADgBQAMgGABgGIAAgSIAdgBIABARIADAEQADAFAIADIAAAAIADABQAMAEAHgDIAMgNIAWAVIgLANIgBAFQAAAGACAHIABADQAHALAGACIASAAIABAdIgSABIgEACQgEAEgDAHIgDAHQgCALACAFIAOAMIgWAXIgMgMQgHgDgLAEIAAAAQgJAEgEAGIgDAEIAAASIgdABgAgBgvQgTABgOAOQgNAPABASQAAAUAOAOQAPANASgBQAVgBANgOQANgOgBgTQgBgUgNgNQgOgNgTAAIgBAAg");
	this.shape_1.setTransform(118.3,67.3,0.548,0.548);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3989C").s().p("AAhCpQgJgLgYgCIAAABQgSgBgNAFIgKAFIgOAgIg2gZIAOgfQABgNgNgRIgIgIQgLgLgMgEIgJgCIggAMIgVg4IAggMQALgIACgXIAAgHQAAgQgFgLIgFgIIgggOIAZg3IAfAPIAKgBQAMgEAMgLIAEgDQARgSAAgOIgMggIA3gVIAMAhIAHAFQALAFANACIAIAAQAZAAAKgKIAOgfIA2AYIgOAgIABAJQAEAMAKAMIAEAEQASARANAAIAhgMIAVA4IghALIgFAIQgGAKgBANIgBANQABAWAJAJIAgAOIgZA2IgfgOQgNgBgTAPIABAAQgOAMgFAOQgDAGAAAEIAMAgIg3AVgAgghWQgjAOgQAiQgQAkANAiQAOAlAjAPQAjAQAigOQAkgNAQgjQAQgigNgkQgOgkgjgQQgTgIgTAAQgPAAgRAGg");
	this.shape_2.setTransform(105.8,78.3,0.548,0.548);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6DB5C5").s().p("AlPJGQAwg6AegbQAghGArhTIAlhFIAagHIAIgmIAGgDQANgwAFgbQALgwgJgPQgKgRg2ALQg8APgRABQgWAAgNgJQgJgFgJgOQgGgIAFgXQAEgYgBgCQgBgFABgBIABAAQgGgKgEgPIgCgIIgBgFIgCgGQgFgNACgFIABgEIACgUIAAgPQAAgCgNgBQgQgCgKgFQgLgHgBgNIACgMQAXhAAagoIAAgDQgIgBgDgCQgCgCAAgNIABgTQABgFAJgDQAGgCAEAAQgKADAAAGQgBAHAGAAIAEgHIABgJIACiQIAJgbQhIhuAAgXQAAgJAEgCQAEgCANAEQAtAJAsgCIgPg2IAdATQAjAUAjAHIAWgDIgNg0IAYARQAeASAgAJQAWgEAOAAIADAAIgHgZIALAIQANAJAPAIIALABQBWgDAjANQBLAdAxBGQBEBggLCOQgLCGhWBjQgbAfggAXIgZARIgBgEQgMAjgLArIAPgHIAVBTIARALQAVAPAUAVIgCgMIAGARQA7BAAfBbQAgBcABBxQiSA/ihAAQixAAjEhNg");
	this.shape_3.setTransform(104.8,93.4,0.89,0.89);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFE5DF").s().p("AlaM0QifhEh7h7Qh7h7hEifQhGimAAi1QAAi0BGilQBEigB7h8QB7h6CfhEQCmhGC0AAQC1AAClBGQCgBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7igBEQilBGi1AAQi0AAimhGg");
	this.shape_4.setTransform(106.5,81.4,0.811,0.811);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEFEF").s().p("AljNKQikhGh+h+Qh/h+hFikQhIiqAAi6QAAi5BIiqQBFikB/h+QB+h/CkhFQCqhIC5AAQC6AACqBIQCjBFCAB/QB9B+BGCkQBICqAAC5QAAC6hICqQhGCkh9B+QiAB+ijBGQiqBIi6AAQi5AAiqhIg");
	this.shape_5.setTransform(106.5,81.3,0.89,0.89);

	this.text = new cjs.Text("Habilidades, Aspiraciones y Compromiso", "16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 187;
	this.text.parent = this;
	this.text.setTransform(106.5,229.3);

	this.text_1 = new cjs.Text("POTENCIAL", "25px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 181;
	this.text_1.parent = this;
	this.text_1.setTransform(106.5,183.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6F6F6").s().p("AD0PRIAA+iIK9AAQAyABAjAhQAjAiAAAvIAAa9QAAAvgjAiQgjAigygBgAuwPRQgyABgjgiQgjgiAAgvIAA69QAAgvAjgiQAjghAygBISkAAIAAeig");
	this.shape_6.setTransform(106.5,196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.text_1},{t:this.text},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,294.4);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(70.1,27.2,0.593,0.593);

	this.text_1 = new cjs.Text("3.4", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(68.9,57.7,1.094,1.094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.8,69.7,1.504,1.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.no1perfilroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Mapeo inicial de talento", "bold 18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(402.4,46.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("AzHEYQh3AAgBh4IAAk/QABh4B3ABMAmOAAAQB5gBAAB4IAAE/QAAB4h5AAg");
	this.shape.setTransform(403.3,53.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.9,25.9,268.7,81.9);


(lib.mc_seleccionvmod3t4 = function(mode,startPosition,loop) {
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


(lib.mc_seleccionretoo4resp = function(mode,startPosition,loop) {
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


(lib.M03_TMR_TABLA3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Profesional \nexperto", "bold 16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 118;
	this.text.parent = this;
	this.text.setTransform(371.4,164.8);

	this.text_1 = new cjs.Text("Alto\nImpacto", "bold 16px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 118;
	this.text_1.parent = this;
	this.text_1.setTransform(371.4,90.7);

	this.text_2 = new cjs.Text("Futuro \n\nLíder", "bold 16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 21;
	this.text_2.lineWidth = 118;
	this.text_2.parent = this;
	this.text_2.setTransform(372.3,16.5);

	this.text_3 = new cjs.Text("Profesional \nefectivo", "bold 16px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 21;
	this.text_3.lineWidth = 118;
	this.text_3.parent = this;
	this.text_3.setTransform(222.8,164.8);

	this.text_4 = new cjs.Text("Colaborador \nconsistente", "bold 16px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 21;
	this.text_4.lineWidth = 118;
	this.text_4.parent = this;
	this.text_4.setTransform(222.8,90.7);

	this.text_5 = new cjs.Text("Talento en \ncrecimiento", "bold 16px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 21;
	this.text_5.lineWidth = 118;
	this.text_5.parent = this;
	this.text_5.setTransform(223.7,16.5);

	this.text_6 = new cjs.Text("Bajo\ndesempeño", "bold 16px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 21;
	this.text_6.lineWidth = 119;
	this.text_6.parent = this;
	this.text_6.setTransform(74.9,164.8);

	this.text_7 = new cjs.Text("Desempeño\n inconsistente (Dilema)", "bold 16px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 21;
	this.text_7.lineWidth = 118;
	this.text_7.parent = this;
	this.text_7.setTransform(74.6,82.9);

	this.text_8 = new cjs.Text("Caso a revisar\n(Enigma)", "bold 16px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 21;
	this.text_8.lineWidth = 118;
	this.text_8.parent = this;
	this.text_8.setTransform(75.5,16.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AADxNMAAAAibIgFAAMAAAgibg");
	this.shape.setTransform(148.9,110.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCROMAAAgibIAFAAMAAAAibg");
	this.shape_1.setTransform(148.9,110.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AADxNMAAAAibIgFAAMAAAgibg");
	this.shape_2.setTransform(297.5,110.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCROMAAAgibIAFAAMAAAAibg");
	this.shape_3.setTransform(297.5,110.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("EAi1gACIAAAFMhFpAAAIAAgFg");
	this.shape_4.setTransform(223.2,73.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Egi0AADIAAgFMBFpAAAIAAAFg");
	this.shape_5.setTransform(223.2,73.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").p("EAi1gACIAAAFMhFpAAAIAAgFg");
	this.shape_6.setTransform(223.2,147.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Egi0AADIAAgFMBFpAAAIAAAFg");
	this.shape_7.setTransform(223.2,147.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").p("ALklsIAALZI3IAAIAArZg");
	this.shape_8.setTransform(74.6,37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1E2A8").s().p("ArjFtIAArZIXHAAIAALZg");
	this.shape_9.setTransform(74.6,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").p("ALklrIAALYI3HAAIAArYg");
	this.shape_10.setTransform(223.2,184);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1E2A8").s().p("ArjFsIAArYIXHAAIAALYg");
	this.shape_11.setTransform(223.2,184);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").p("ALklrIAALYI3HAAIAArYg");
	this.shape_12.setTransform(371.8,184);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1E2A8").s().p("ArjFsIAArYIXHAAIAALYg");
	this.shape_13.setTransform(371.8,184);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").p("ALklrIAALXI3IAAIAArXg");
	this.shape_14.setTransform(74.6,110.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0878B").s().p("ArjFsIAArYIXHAAIAALYg");
	this.shape_15.setTransform(74.6,110.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").p("ALllrIAALYI3JAAIAArYg");
	this.shape_16.setTransform(74.6,184);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0878B").s().p("ArkFtIAArYIXJAAIAALYg");
	this.shape_17.setTransform(74.6,184);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").p("ALklrIAALXI3HAAIAArXg");
	this.shape_18.setTransform(223.2,110.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DBEEBF").s().p("ArjFsIAArYIXHAAIAALYg");
	this.shape_19.setTransform(223.2,110.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").p("ALklsIAALZI3HAAIAArZg");
	this.shape_20.setTransform(223.2,37);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A2D7E9").s().p("ArjFtIAArZIXHAAIAALZg");
	this.shape_21.setTransform(223.2,37);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").p("ALklrIAALXI3HAAIAArXg");
	this.shape_22.setTransform(371.8,110.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#85C8DA").s().p("ArjFsIAArYIXHAAIAALYg");
	this.shape_23.setTransform(371.8,110.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").p("ALklsIAALZI3HAAIAArZg");
	this.shape_24.setTransform(371.8,37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6CBACB").s().p("ArjFtIAArZIXHAAIAALZg");
	this.shape_25.setTransform(371.8,37);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").p("Egi3gRQMAAAAihMBFvAAAMAAAgihgEAiyARLMhFkAAAMAAAgiVMBFkAAAg");
	this.shape_26.setTransform(223.2,110.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Egi3ARRMAAAgihMBFvAAAMAAAAihgEgiyARLMBFkAAAMAAAgiVMhFkAAAg");
	this.shape_27.setTransform(223.2,110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLA3, new cjs.Rectangle(-1,-1,448.5,226.4), null);


(lib.M03_TMR_TABLA4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AeqQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAcyQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAa6QQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAZCQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAXKQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAVSQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgATaQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgARiQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAPqQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgANyQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAL6QQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAKCQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAIKQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAGSQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAEaQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgACiQQQgHgBgGgFQgFgFAAgHQAAgHAFgFQAGgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgAAqQQQgHgBgFgFQgGgFAAgHQAAgHAGgFQAFgFAHAAIA8AAQAHAAAFAFQAFAFAAAHQAAAHgFAFQgFAFgHABgEAgOAQCQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVQBQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAOKQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVOJQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEAgOAMSQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVMRQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAKaQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVKZQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAIiQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVIhQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEAgOAGqQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAgVGpQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOAEyQgGgFAAgHIAAg8QAAgHAGgFIABgBIgBgBQgGgFAAgIIAAgeQAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAAeQAAAIgFAFIgBABIABABQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVExQgFgFAAgHIAAg7QAAgHAFgFIABgBIgBgBQgFgFAAgIIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAIgFAFIgBABIABABQAFAFAAAHIAAA7QAAAHgFAFQgFAFgHABQgHgBgFgFgEAgOACBQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAgVBkQgFgFAAgHIAAg9QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA9QAAAHgFAFQgFAFgHAAQgHAAgFgFgAhvAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgAjnAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAlfAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAnXAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgApPAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgArHAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAs/AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgAu3AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAwvAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgAynAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA0fAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA2XAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA4PAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA6HAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA7/AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgA93AbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAFAFQAGAEAAAHQAAAHgGAFQgFAFgHAAgA/vAbQgHAAgFgFQgFgFAAgHQAAgHAFgEQAFgFAHgBIA8AAQAHABAGAFQAFAEAAAHQAAAHgFAFQgGAFgHAAgEAgOAAJQgGgFAAgGIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAGgFAFQgFAFgHABQgHgBgFgFgEgglAADQgFgEAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAEQgGAFgHABQgHgBgFgFgEAgOgBuQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgB0QgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgDmQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgDsQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgFeQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgFkQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgHWQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgHcQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgJOQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgJUQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgLGQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgEgglgLMQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHAAQgHAAgFgFgEAgOgM+QgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgNEQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAGAFQAFAFAAAHIAAA8QAAAHgFAFQgGAFgHABQgHgBgFgFgEAgOgO2QgGgFAAgHIAAg3IAAgEQAAgHAFgFQAFgFAHAAIABAAQAHAAAFAFQAFAFAAAHIAAA7QAAAHgFAFQgFAFgHAAQgHAAgFgFgEgglgO8QgFgFAAgHIAAg1QAAgHAFgFQAFgFAHAAIAHAAQAHAAAFAFQAGAFAAAHQAAAHgGAFIgBACIAAAnQAAAHgFAFQgGAFgHAAQgHAAgFgFgAehvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAcpvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAaxvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAY5vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAXBvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAVJvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgATRvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgARZvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAPhvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgANpvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgALxvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAJ5vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAIBvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAGJvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAERvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgACZvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAAhvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAhWvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAjOvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAlGvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAm+vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAo2vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAquvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAsmvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAuevsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgAwWvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgAyOvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA0GvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgA1+vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA32vsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA5uvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAgA7mvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA9evsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHAAgA/WvsQgHAAgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHAAg");
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

	this.text_6 = new cjs.Text("Bajo ", "bold 22px 'Arial'");
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
	this.shape_27.graphics.f().s("#FFFFFF").p("EAwjAX+MhhFAAAMAAAgv7MBhFAAAgEgwqgYEMAAAAwJMBhVAAAMAAAgwJg");
	this.shape_27.setTransform(311.5,155.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("EgwqAYFMAAAgwJMBhVAAAMAAAAwJgEgwiAX+MBhFAAAMAAAgv7MhhFAAAg");
	this.shape_28.setTransform(311.5,155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLA4, new cjs.Rectangle(-1,0.4,626.7,318.5), null);


(lib.lapizmueveretoo4resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ah8CUIgEgCIgCgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBID0AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAh4B/IgBgCIAQgwIABgBIABAAIAcAXIABACIgBABIgsAZIAAAAIgBAAgAhiBEIAYgnIAggrIAsAkQgSAWgRASQgSATgPANgAAGAMIgmgfIgBgDIAAgDIBUhpIgGgEIhBBSIgHgGIBFhZIAOALIABgCIADgBIBDgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgBAEIh2CSIgDACIgDgBg");
	this.shape.setTransform(21.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,7.8,26.2,29.6);


(lib.lapizmuevemod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ah8CUIgEgCIgCgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBID0AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAh4B/IgBgCIAQgwIABgBIABAAIAcAXIABACIgBABIgsAZIAAAAIgBAAgAhiBEIAYgnIAggrIAsAkQgSAWgRASQgSATgPANgAAGAMIgmgfIgBgDIAAgDIBUhpIgGgEIhBBSIgHgGIBFhZIAOALIABgCIADgBIBDgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgBAEIh2CSIgDACIgDgBg");
	this.shape.setTransform(21.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,7.8,26.2,29.6);


(lib.iconoactividadesyretosretoo4resp = function(mode,startPosition,loop) {
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


(lib.iconoactividadesyretosmod3t4 = function(mode,startPosition,loop) {
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


(lib.iconoinfoposiciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("A partir de los resultados de las evaluaciones de potencial y desempeño, los colaboradores pueden quedar dentro de una ubicación inicial en alguna de las nueve categorías de la matriz 9-Box.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 584;
	this.text.parent = this;
	this.text.setTransform(-21,19);

	this.text_1 = new cjs.Text("Mapeo inicial de talento", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 563;
	this.text_1.parent = this;
	this.text_1.setTransform(-22,-13);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("Egq8AIqQhnAAhKhKQhIhJgBhnIAApfQABhIAjg5QAPgZAWgXQBKhJBnAAMBV5AAAQBnAABJBJQBJBKABBnIAAJfQgBBnhJBJQhJBKhnAAg");
	this.shape.setTransform(265.9,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-22.3,599.7,110.8);


(lib.flechainstruccionesroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1,9.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.flechaanimadas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0878B").s().p("AgDC5QgJgFAAgNIAAgqQAAgHgKgGQgJgGgJAAIiLAAQgHAAgBgFQgCgDAAgLIAAitQAAgKACgDQABgGAHAAICLAAQAJAAAJgFQAKgHAAgHIAAgrQAAgMAJgFQAJgFAJAJICoCnQAGAGABAHQACAHgHAGIiqCoQgGAGgHAAIgFgCg");
	this.shape.setTransform(19,80.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,62,38.1,37.3);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9C9C9").s().p("AhEAnImUgMIAIhBIOpAJIgDBEg");
	this.shape.setTransform(47.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,94.5,7.8), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhXQAFBPAFBg");
	this.shape.setTransform(0.8,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,3.1,19.7), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhUQAFBMAFBe");
	this.shape.setTransform(0.8,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-1,3.1,19.1), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhPQAEA0AFBr");
	this.shape.setTransform(0.8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-1,3.1,18), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhRQAFBRAEBT");
	this.shape.setTransform(0.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-0.9,3.1,18.5), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhQQAEA3AFBq");
	this.shape.setTransform(0.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-0.9,3,18.3), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhNQAGBmADA2");
	this.shape.setTransform(0.7,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-0.9,3,17.7), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGhXQgGBPgEBg");
	this.shape.setTransform(0.8,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,3.1,19.7), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhUQgFBUgEBW");
	this.shape.setTransform(0.8,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-1,3.1,19.1), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhPQgFBOgEBR");
	this.shape.setTransform(0.8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-1,3.1,18), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhRQgEA3gFBt");
	this.shape.setTransform(0.8,8.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-0.9,3,18.5), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhQQgEA3gFBq");
	this.shape.setTransform(0.8,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-0.9,3,18.3), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhNQgEA0gFBo");
	this.shape.setTransform(0.8,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-0.9,3,17.7), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAVhBIgpCD");
	this.shape.setTransform(2.4,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,6.2,15.2), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgPAyIAfhj");
	this.shape.setTransform(1.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.7,-0.9,5.2,12), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgfhCQAbARAQAuQAKAbAIAw");
	this.shape.setTransform(3.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.8,-0.8,8.2,15.9), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAghCQgbARgQAuQgKAbgIAw");
	this.shape.setTransform(3.2,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,8.2,15.9), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgMgkIAZBJ");
	this.shape.setTransform(1.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.7,-0.9,4.5,9.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAWA+Igrh7");
	this.shape.setTransform(2.5,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.7,-0.9,6.5,14.5), null);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,152,152);


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


(lib.circulo2instruccionesroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ACAFA1").p("AB9AAQAAAzgkAlQglAlg0AAQgzAAgkglQglglAAgzQAAgzAlglQAkgkAzAAQA0AAAlAkQAkAlAAAzg");
	this.shape.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,27,27);


(lib.circulo1instruccionesroll24ene = function(mode,startPosition,loop) {
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


(lib.btn_chec = function(mode,startPosition,loop) {
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


(lib.T1_cuadrotransicion_mcroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		this.parent.m2mc1_Cerrar.visible=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg4uAafMAAAg09MBxdAAAMAAAA09g");
	this.shape.setTransform(119.8,175.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg4bAafMAAAg09MBw3AAAMAAAA09g");
	this.shape_1.setTransform(121.6,175.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg3kAafMAAAg09MBvJAAAMAAAA09g");
	this.shape_2.setTransform(127.1,175.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg2IAafMAAAg09MBsRAAAMAAAA09g");
	this.shape_3.setTransform(136.2,175.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg0IAafMAAAg09MBoRAAAMAAAA09g");
	this.shape_4.setTransform(148.9,175.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgxiAafMAAAg09MBjFAAAMAAAA09g");
	this.shape_5.setTransform(165.3,175.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EguYAafMAAAg09MBcxAAAMAAAA09g");
	this.shape_6.setTransform(185.3,175.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgqpAafMAAAg09MBVTAAAMAAAA09g");
	this.shape_7.setTransform(209,175.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgmWAafMAAAg09MBMtAAAMAAAA09g");
	this.shape_8.setTransform(236.2,175.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EghdAafMAAAg09MBC7AAAMAAAA09g");
	this.shape_9.setTransform(267.2,175.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A8AafMAAAg09MA4BAAAMAAAA09g");
	this.shape_10.setTransform(301.7,175.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A1+afMAAAg09MAr9AAAMAAAA09g");
	this.shape_11.setTransform(339.9,175.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AvXafMAAAg09IevAAMAAAA09g");
	this.shape_12.setTransform(381.7,175.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AoMafMAAAg09IQZAAMAAAA09g");
	this.shape_13.setTransform(427.2,175.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcafMAAAg09IA5AAMAAAA09g");
	this.shape_14.setTransform(476.3,175.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.2,5.7,726.1,339);


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

	this.text = new cjs.Text("Metodología 9-Box", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulot2("synched",0);
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


(lib.sssssmod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var botones = 3;
		var resp = [1];
		var raiz = this; //guarda el MC padre
		console.log("entro");
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
			c.currentTarget.sel = true;
			c.currentTarget.mouseEnabled = false;
			c.currentTarget.gotoAndStop(1);
			if (c.currentTarget.n == 1) {
				
				parent.llamarRetros("bien", "¡En efecto! Considerando los resultados de las evaluaciones de potencial y desempeño dentro de la matriz 9-box la persona evaluada es un colaborador consistente.");
			}
			if (c.currentTarget.n == 2) {
				c.currentTarget.gotoAndStop(0);
				c.currentTarget.sel = false;
				c.currentTarget.mouseEnabled = true;
				parent.llamarRetros("mal", "¡Vuelve a intentar! Recuerda que es importante tener muy claro las 9 categorías en las que un colaborador puede quedar considerando los resultados de las evaluaciones de potencial y desempeño dentro de la matriz 9-box.");
			}
			if (c.currentTarget.n == 3) {
				c.currentTarget.gotoAndStop(0);
				c.currentTarget.sel = false;
				c.currentTarget.mouseEnabled = true;
				parent.llamarRetros("mal", "¡Vuelve a intentar! Recuerda que es importante tener muy claro las 9 categorías en las que un colaborador puede quedar considerando los resultados de las evaluaciones de potencial y desempeño dentro de la matriz 9-box.");
			}
			validar();
		}
		
		
		function validar() {
			var finalizo = true;
			for (var i = 0; i < resp.length; i++) {
				if (!raiz["Mod2T2mc3b" + resp[i]].sel) {
					finalizo = false;
					break;
				}
			}
			if (finalizo) {
				console.log("final de la actividad");
				for (var i = 1; i <= botones; i++) {
					raiz["Mod2T2mc3b" + i].mouseEnabled = false;
				}
				try {
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
	this.Mod2T2mc3b3 = new lib.mc_seleccionvmod3t4();
	this.Mod2T2mc3b3.parent = this;
	this.Mod2T2mc3b3.setTransform(488.3,123.4,0.845,0.843,0,0,0,6.9,7);

	this.Mod2T2mc3b2 = new lib.mc_seleccionvmod3t4();
	this.Mod2T2mc3b2.parent = this;
	this.Mod2T2mc3b2.setTransform(487.5,13.3,0.845,0.843,0,0,0,6.9,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(311,126.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_1.setTransform(307.1,122.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_2.setTransform(298.4,122.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_3.setTransform(288.8,122.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_4.setTransform(282.4,120.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_5.setTransform(275.9,122.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgHAIg");
	this.shape_6.setTransform(266.4,122.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_7.setTransform(259.1,122.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_8.setTransform(245.4,122.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_9.setTransform(230.4,122.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_10.setTransform(220.8,122.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_11.setTransform(211.4,122.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_12.setTransform(202.2,122.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_13.setTransform(187.4,122.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_14.setTransform(177.3,122.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_15.setTransform(162.8,122.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgvBBIAAiBIBcAAIAAAQIhLAAIAAAnIBGAAIAAAOIhGAAIAAAtIBOAAIAAAPg");
	this.shape_16.setTransform(152.6,120.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_17.setTransform(355,19.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_18.setTransform(347.4,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_19.setTransform(337.9,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_20.setTransform(331.4,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_21.setTransform(327,13.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_22.setTransform(320.2,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_23.setTransform(310.4,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgNBCIAAhQIgOAAIAAgNIAOAAIAAgKQAAgJACgEQADgHAFgDQAFgFALAAIAPACIgDAOIgKgBQgGAAgEADQgCADAAAIIAAAJIASAAIAAANIgSAAIAABQg");
	this.shape_24.setTransform(303.3,13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_25.setTransform(295.4,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_26.setTransform(283.4,13.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_27.setTransform(276.4,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_28.setTransform(266.4,15.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_29.setTransform(256.4,15.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_30.setTransform(249.4,13.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_31.setTransform(242.8,15.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_32.setTransform(233.4,15.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgNBCIAAhQIgNAAIAAgNIANAAIAAgKQABgJACgEQABgHAHgDQAEgFAKAAIAQACIgDAOIgJgBQgIAAgCADQgEADAAAIIAAAJIASAAIAAANIgSAAIAABQg");
	this.shape_33.setTransform(226.3,13.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_34.setTransform(218.4,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_35.setTransform(211.1,15.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJALAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_36.setTransform(202.7,17.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_37.setTransform(187.4,15.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_38.setTransform(177.3,15.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_39.setTransform(162.8,15.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgvBBIAAiBIBcAAIAAAQIhLAAIAAAoIBGAAIAAANIhGAAIAAAsIBOAAIAAAQg");
	this.shape_40.setTransform(152.6,13.6);

	this.text = new cjs.Text("Es un colaborador consistente.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 269;
	this.text.parent = this;
	this.text.setTransform(145.5,-107.7);

	this.Mod2T2mc3b1 = new lib.mc_seleccionvmod3t4();
	this.Mod2T2mc3b1.parent = this;
	this.Mod2T2mc3b1.setTransform(487.5,-96.4,0.845,0.843,0,0,0,6.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mod2T2mc3b1},{t:this.text},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.Mod2T2mc3b2},{t:this.Mod2T2mc3b3}]}).wait(1));

	// numeros
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgoBNQgQgOgCgWIAhgEQABAMAHAHQAHAHAKAAQAKAAAHgIQAHgIAAgOQAAgNgHgHQgHgIgKAAQgFAAgJADIADgbQANAAAIgGQAHgHAAgKQAAgJgFgGQgGgFgIAAQgIAAgHAGQgGAGgBAMIgggGQADgQAHgJQAHgKAMgGQAMgFAOAAQAZAAAPAQQAMANAAARQAAAXgZAOQAPADAJALQAJALAAARQAAAXgRARQgRAQgZAAQgYAAgQgOg");
	this.shape_41.setTransform(92.3,123.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DC686B").s().p("Ah6B7Qg0gzAAhIQAAhHA0gzQAzg0BHAAIAGAAQBFADAxAxQAzAzAABHQAABIgzAzQg0A0hIAAQhHAAgzg0g");
	this.shape_42.setTransform(92.4,122.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag7BaQACgSAKgQQAJgRAdgaQAWgVAGgIQAHgKAAgLQAAgLgGgGQgHgGgKAAQgKAAgHAGQgGAHgBAPIgigEQADgcAQgMQAQgNAXAAQAbAAAPAOQAPAPAAAVQAAAMgEALQgFALgJALQgGAIgQAPIgUATIgHAKIBDAAIAAAgg");
	this.shape_43.setTransform(92,15.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DC686B").s().p("Ah6B8Qg0g0AAhIQAAhHA0gzQAzg0BHABIAGAAQBFABAxAyQAzAzAABHQAABIgzA0Qg0AzhIAAQhHAAgzgzg");
	this.shape_44.setTransform(92.4,14.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAFBaIAAiAQgSARgZAJIAAggQANgEAQgMQAOgMAGgRIAcAAIAACzg");
	this.shape_45.setTransform(90.3,-95.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DC686B").s().p("Ah6B7Qg0gzAAhIQAAhHA0gzQAzg0BHABIAGAAQBFABAxAyQAzAzAABHQAABIgzAzQg0A0hIAAQhHAAgzg0g");
	this.shape_46.setTransform(92.4,-96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(1));

	// fondos
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3F3F3").s().p("A+UXMQggAAgagIQhcgZAAh2IAAm/QAAh0BcgaQAZgHAhAAMA89AAAQArgBAbAMQAoAQAUAjIAAJwQgjA9hfAAgA+UGCQggAAgagHQhcgaAAh1IAAm+QAAh1BcgZQAZgIAhAAIfbAAIGGAAIXcAAQArAAAbALQAoAQAUAkIAAJuQgjA9hfAAgA+UrgQggABgagIQhcgaAAh1IAAm+QAAgkAIgaQAUg/BAgSQAZgHAhgBMA89AAAQArABAbAKQAoARAUAjIAAJvQgjA+hfgBg");
	this.shape_47.setTransform(330.2,13);

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(1));

}).prototype = getMCSymbolPrototype(lib.sssssmod3t4, new cjs.Rectangle(74.9,-135.3,464.4,296.7), null);


(lib.prioridadesmod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pontencialanimado("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.2,175.7,1,1,0,0,0,106.5,147.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,28.5,213,294.4);


(lib.pregunta1tema2retoo4resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("La metodología que usamos en Arca Continental para valorar el talento de nuestros colaboradores utiliza dos dimensiones/mediciones como elementos clave: el potencial y el desempeño. Marca los beneficios que obtenemos al evaluar estas dos dimensiones:", "18px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 710;
	this.text.parent = this;
	this.text.setTransform(104.8,-44.6);

	this.instance = new lib.iconoactividadesyretosretoo4resp("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.7,-15.3,0.803,0.803,0,0,0,55.7,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(154,201,172,0.498)").s().p("EA2hAF1InUAAIhrAAMghFAAAMg5TAAAIi9AAIpYAAIgoAAIg8AAIgBAAIhaAAQggABgagIQhGgTgQhJQgGgXAAgcIAAj3IAAjGQAAh2BcgZQAZgHAhgBIBaAAIABAAIA8AAIAoAAIJYAAIC9AAMA5TAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBcIABATIAABRIAADOIAABUIAAA4IAAAEIAAAOQAACWiWAAg");
	this.shape.setTransform(416.5,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60,817.3,94.8);


(lib.pregunta1tema2mod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Si se visualiza a uno de nuestros colaboradores con la posibilidad de aumentar sus responsabilidades, crecer en la organización en el mediano o largo plazo y se desempeña dentro de los estándares esperados pero con la oportunidad de trabajar sobre sus habilidades como agente de cambio, podemos considerar que:", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 291;
	this.text.parent = this;
	this.text.setTransform(25.8,119.2);

	this.instance = new lib.iconoactividadesyretosmod3t4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(163.8,49.7,0.803,0.803,0,0,0,55.7,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(154,201,172,0.498)").s().p("A3cX0QgggBgagGQhGgUgQhIQgGgYAAgcIAAhGIAAhHIAA1hIAAxXMAzlAAAMAAAAkaIAACeIAABEIAAADIAAA0IAAADIAAAPQAABgg9AiQgjAVg2AAgA5yzpIAAhzQAAh2BcgZQAZgHAhgBMAu5AAAQAsABAaAKQAKAEAJAGQA3AgAFBPIABATIAABRIAAAig");
	this.shape.setTransform(171.5,199.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,5,330.2,347.1);


(lib.matriz9animado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M03_TMR_TABLA3();
	this.instance.parent = this;
	this.instance.setTransform(116.3,81.6,0.238,0.238,0,0,0,248.4,112.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE5DF").s().p("AlaM0QifhEh7h7Qh7h7hEifQhGimAAi1QAAi0BGilQBEigB7h8QB7h6CfhEQCmhGC0AAQC1AAClBGQCgBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7igBEQilBGi1AAQi0AAimhGg");
	this.shape.setTransform(106.5,81.4,0.811,0.811);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AljNKQikhGh+h+Qh/h+hFikQhIiqAAi6QAAi5BIiqQBFikB/h+QB+h/CkhFQCqhIC5AAQC6AACqBIQCjBFCAB/QB9B+BGCkQBICqAAC5QAAC6hICqQhGCkh9B+QiAB+ijBGQiqBIi6AAQi5AAiqhIg");
	this.shape_1.setTransform(106.5,81.3,0.89,0.89);

	this.text = new cjs.Text("Matriz 9 - BOX", "25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 181;
	this.text.parent = this;
	this.text.setTransform(107.5,201.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F6F6F6").s().p("AD0PRIAA+iIK9AAQAyABAjAhQAjAiAAAvIAAa9QAAAvgjAiQgjAigygBgAuwPRQgyABgjgiQgjgiAAgvIAA69QAAgvAjgiQAjghAygBISkAAIAAeig");
	this.shape_2.setTransform(106.5,196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.text},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,294.4);


(lib.M03_TMR_DESEMPEÑO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgJAmIgLhBQgBgIAIgCQAIgCADAHIASAxQADAHACAOg");
	this.shape.setTransform(93.3,109.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgMAAIAFgIIAUALIgMAGQgMgDgBgGg");
	this.shape_1.setTransform(100.3,104.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AgMAFIAVgPIAEAKQAAAFgPAGg");
	this.shape_2.setTransform(102.9,104.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#744C28").s().p("AAmANQgBgIgNAAQgRACgHgBQgKAAgJgGIgGgHQgEAOgDACIgDALIgCAJIgIgNQADgJgCgHQgBgDABgFQAAgGACgBIAAgBQAAgBAMgFQAPgGANgCQANgBASAKQAQAKABAIQAAAHgBAKQgCAKgCABIgDADIgCADQADgGgBgMg");
	this.shape_3.setTransform(101.7,94.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AANAuQgHgQAAgDQAAgEgCAXIgxAAIAAhPIAJgIQALgGAMAEIAMABQANADAFAEQAIAEAVBNg");
	this.shape_4.setTransform(105.6,109);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgDAuQgCgXgBAEQABADgHAQIgiAAQAGgdAJgZQAKgYAEgDQAKgHAVgBQAMgEAKAGQAGAEADAEIACBPg");
	this.shape_5.setTransform(97.5,109);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9BD9C").s().p("AgHAzIAAgBQgRgIgJgPIgBgBIgBgJIgDgBIAAgBQgBAAgBgGIgBgJIAAAAQgBgHABAAIAAgBQABAAAAAAQABAAAAAAQABABAAAAQABABAAABIABABIAAgCIgBgMQAAgQAIgEQAAgBAJgGQAKgGAKAAIACAAQAQAAANANIAAAAQAIAEAAAQQAAAGgBAGIABABIAAgCIADgBQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgCAOIgCAGIAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAJQgGALgMAIIgKAGIgHABIgHgBg");
	this.shape_6.setTransform(101.7,98.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDAB86").s().p("AgZATQAMgaAAgIQABgFAMACIANADIACAKQADAKAGAGQAJAJghAAIgZgBg");
	this.shape_7.setTransform(101.6,103.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AAAATIgFgOQgRgKAFgPQADgGAJgDQABAAgCgHIAAgCQgCgFABgCQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQADAAABAEIATBVIgMAGQgDgOgEgPg");
	this.shape_8.setTransform(91.7,105.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9D9D9E").s().p("ABMDiQhTgZh1gqIAikTIAThtIDFAkIgrGfg");
	this.shape_9.setTransform(67.7,194.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNgLIAAgOICbAdIgGAWg");
	this.shape_10.setTransform(71.8,173.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDB17B").s().p("AhMBTQgUgEgKgSQgKgQAEgTQAFgTAQgJIAAgBIAYgNQAKgFADgBIAPgEQAUgFAOgFIAHgDIABgBIADgBIADgCIAdgNIAkgWQAIgGAKAAQAJABAHAIQAHAHgBAKQgBAKgIAHIgGAEIgHADQgEACgNAJIgkAbIgDADIgCABIgBABIgHAGQgHAGgQAUIgJAMIgbAVIgHAEQgLAHgNAAQgGAAgGgCg");
	this.shape_11.setTransform(86.3,164.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDB17B").s().p("AhPAnIAnh1IB4AoIgnB1g");
	this.shape_12.setTransform(71,176.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDB17B").s().p("AAABrIg/gWQgXgHgDgRQgEgPAMgdQAHgRAdgrIAcgpIAPgPQAUgOAbAJQAuAPAAA6QABAQgGAcQgIAkgMAQQgTAbgJAHQgMAKgNAAQgGAAgHgCg");
	this.shape_13.setTransform(75.7,162.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9D9D9E").s().p("Ah8gqIghhDIhfi0ICthlIBnC8IAjBGIBKCXIAkBOIBUDCIgWANQhfA3hJAgg");
	this.shape_14.setTransform(151.5,173.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhIAjICOhQIADAMIiMBQg");
	this.shape_15.setTransform(134.7,139.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDB17B").s().p("AATCOQgJgEgVgVQgOgMgWglQgTgegGgNQgEgLgCgJIhNh7QgEgGABgHQABgHAFgEQAGgFAIABQAHABAFAFIBHBTQABABAAAAQABABAAAAQABAAAAAAQABAAABAAQADgBABgCQADgIAPgGQAwgSAmAKQASAEAaASQAVAPAPAvIABAEIAJASQAMAbgBAOQgBARgSAKIhWAwQgJAFgJAAQgIAAgJgFg");
	this.shape_16.setTransform(124.9,127.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDB17B").s().p("AhZgOIB8hFIA3BhIh8BGg");
	this.shape_17.setTransform(136.8,142.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E39A9B").s().p("Ag3A8IAAh3IBvAAIAAB3g");
	this.shape_18.setTransform(140.7,163.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E39A9B").s().p("Ag3A8IAAh3IBvAAIAAB3g");
	this.shape_19.setTransform(128,163.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E39A9B").s().p("Ag3A8IAAh3IBvAAIAAB3g");
	this.shape_20.setTransform(115.2,163.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AhfA8IAAh4IC/AAIAAB4g");
	this.shape_21.setTransform(98.5,163.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AkeANIAAgZII9AAIAAAZg");
	this.shape_22.setTransform(117.6,153.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AkeANIAAgZII9AAIAAAZg");
	this.shape_23.setTransform(117.6,149.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A6CDDA").s().p("AkcAWIAAgrII5AAIAAArg");
	this.shape_24.setTransform(117.4,143);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AkeANIAAgZII9AAIAAAZg");
	this.shape_25.setTransform(117.6,135.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AkeAMIAAgYII9AAIAAAYg");
	this.shape_26.setTransform(117.6,131);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A6CDDA").s().p("AkcAWIAAgrII5AAIAAArg");
	this.shape_27.setTransform(117.4,124.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AkeAMIAAgYII9AAIAAAYg");
	this.shape_28.setTransform(117.6,117.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AiaAMIAAgXIE1AAIAAAXg");
	this.shape_29.setTransform(130.8,112.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A6CDDA").s().p("AiZAWIAAgqIEzAAIAAAqg");
	this.shape_30.setTransform(130.7,106.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5A6E75").s().p("Ah3AGIAAgLIDvAAIAAALg");
	this.shape_31.setTransform(127.3,94.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E39A9B").s().p("Ag3AKIAAgTIBvAAIAAATg");
	this.shape_32.setTransform(120.8,97.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E6E6").s().p("Ah3AQIAAgfIDvAAIAAAfg");
	this.shape_33.setTransform(127.3,91.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAFIACAAQAAAFACAAQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAgCgDgCIgCgDQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgFAEAAQAEAAABAFIAAABIgCAAIAAAAQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIACADIACADQADACAAADQAAAFgFAAQgEgBAAgFg");
	this.shape_34.setTransform(117.5,148.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEAKIAAgTIAEAAQAFAAAAAGIAAAHQAAAGgFAAgAgCAJIACAAQADAAAAgEIAAgJQAAgEgDAAIgCAAg");
	this.shape_35.setTransform(116.3,148.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AADAKIgDgKIgCAAIAAAKIgCAAIAAgTIAEAAQAEAAAAAFQAAAEgCAAIADAKgAgCAAIACAAQABAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAIgCAAg");
	this.shape_36.setTransform(115,148.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AADAKIgBgFIgDAAIgBAFIgCAAIAEgTIABAAIAEATgAACAEIgCgLIgBALIADAAg");
	this.shape_37.setTransform(113.7,148.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AADAKIgDgRIgCARIgCAAIgDgTIACAAIACAQIADgQIABAAIADAQIACgQIACAAIgEATg");
	this.shape_38.setTransform(112.4,148.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAEAKIgBgFIgEAAIgBAFIgCAAIAEgTIABAAIAEATgAACAEIgCgLIgBALIADAAg");
	this.shape_39.setTransform(110.9,148.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhxB6IAAj0IDjAAIAAD0g");
	this.shape_40.setTransform(100.3,101.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1FB4FB").s().p("Ak4AEIAAgHIJxAAIAAAHg");
	this.shape_41.setTransform(117.5,172.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#515D60").s().p("Ak4BIIAAiPIJxAAIAACPg");
	this.shape_42.setTransform(117.5,93.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ak4GwIAAteIJxAAIAANeg");
	this.shape_43.setTransform(117.5,129.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDB17B").s().p("AgJgDIATAFIgKACg");
	this.shape_44.setTransform(86.3,155.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDB17B").s().p("ABGAxIg+gzIAKgBIgTgGIAJAHIhSALQgMABgJgHQgKgGgBgMQgCgLAHgKQAHgJAMgBIACgBIBdgGIABAAQAKgBAIAGIBEA/QAHAHAAAJQABAKgHAGQgGAHgJAAIgBABQgIAAgHgGg");
	this.shape_45.setTransform(85.5,156.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5A064").s().p("ABIBHQgJAAgGgGIg6g9IAFACIgKgGIAFAEIhJgSQgLgEgGgKQgGgKADgLQADgLAKgGQALgGALADIACABIBMAaIACABQAFACAEAFIA8BEQAGAHAAAKQgBAJgHAGQgGAFgIAAIgCAAg");
	this.shape_46.setTransform(85.1,158.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F5A064").s().p("AAAACIgFgEIALAFg");
	this.shape_47.setTransform(85,158.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D78C57").s().p("ABDBCQgHgBgEgGIgBAAIgRgVIgmgsIgLgKIADgBIAGgEIADgEIgDADQgEACgEAAIgEgBIgBAAIgBAAIgBAAIABAAIAFAEIAAABIgLACQgGABgNgBQgKgCgNgDIgIgDQgJgDgEgJQgEgIAEgJQADgIAJgEQAIgEAJAEIAGACIAQAFIAIABIABAAIAEgDQAEgDAFAAIAHABIAFACIAIAFIAHAHIANANQALANAcAjIARAWQAFAGgBAIQgCAHgGAFQgEADgGAAIgDAAg");
	this.shape_48.setTransform(81.7,160.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D78C57").s().p("AgDAEIgEgEIgCAAIACAAIAAAAIACAAIADABQAEgBADgBIAFgDIgFAEIgFAEIgDAAg");
	this.shape_49.setTransform(80.9,158.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTATQgHgIgBgLQABgKAHgIQAJgIAKAAQAMAAAHAIQAIAIAAAKQAAALgIAIQgHAIgMAAQgKAAgJgIg");
	this.shape_50.setTransform(120.3,173.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#94B9C3").s().p("AioCYIAAkvIFRAAIAAEvg");
	this.shape_51.setTransform(142.5,147.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DFE4E6").s().p("AhmCYIAAkvIDNAAIAAEvg");
	this.shape_52.setTransform(112.6,147.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#94B9C3").s().p("AhmCYIAAkvIDNAAIAAEvg");
	this.shape_53.setTransform(89.3,147.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A6CDDA").s().p("AmRA9IAAh5IMjAAIAAB5g");
	this.shape_54.setTransform(119.2,123.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DBDBDB").s().p("AjZA8IAAh3IGzAAIAAA7QAAAZgTASQgUARgbAAg");
	this.shape_55.setTransform(142.1,174.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DBDBDB").s().p("AilA8QgbAAgTgRQgUgSAAgZIAAg7IHPAAIAAB3g");
	this.shape_56.setTransform(97.1,174.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BDEBF8").s().p("AmmEHIAAoNINOAAIAAINg");
	this.shape_57.setTransform(118.9,139.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#969696").s().p("AiqAUIAAgmIFVAAIAAAmg");
	this.shape_58.setTransform(120.2,188.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C7C7C7").s().p("AiqA+IBdh7ICbAAIBdB7g");
	this.shape_59.setTransform(120.2,180.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AnBEhIAApBIODAAIAAJBg");
	this.shape_60.setTransform(118.9,139.2);

	this.instance = new lib.Path_15();
	this.instance.parent = this;
	this.instance.setTransform(110.1,187.5,1,1,0,0,0,47.3,3.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("Ag0C/IgzlJQgDgRAKgPQAKgOASgEQAQgEAPAHQAPAHAGAPIBfD6QAFANAHAaQAKAjAEAeg");
	this.shape_61.setTransform(73.6,96.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D4D4D").s().p("AgbAiQgigQgDgSIAYguIBpA9Ig8AgQgPgFgRgIg");
	this.shape_62.setTransform(108.5,71.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D4D4D").s().p("AhCAWIBthLIAXAuQgCASgpAYIgnATg");
	this.shape_63.setTransform(121.7,70.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#744C28").s().p("AC9CDQAGgggGglQgFglhCAAQhUAHgmgBQgygCgsgjIgigkQgUBMgLAIQgHAGgKAxIgJAwIgVgfQgVgfACgGQAMgugHgeQgFgVACgYQABgeALgJIABgCQgEgHBAgaQBJgfBCgFQBIgGBXAyQBUAwACAoQACAogHAyQgHA0gKACQgJABgJARIgIAQQAEgJADgQg");
	this.shape_64.setTransform(115.8,20.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CCCCCC").s().p("AA/DoQghhUgBgLQgBgNgDAfQgEAdgDAwIj4AAQgBiBACiWIACh+IALgNQAOgOARgKQA2ghA7AUIA+AIQBCAMAgAUQAhAWBvGJg");
	this.shape_65.setTransform(135.3,92.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCCCCC").s().p("AgUDoQgJh/gCAgQgBAUgdBLIixAAQAiiWAvh/QAsh7AXgPQAggUBDgMQAigGAbgCQA7gUA2AhQAbAQAPAVIAGB+QAFCWADCBg");
	this.shape_66.setTransform(94.3,92.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F9BD9C").s().p("AglD/IgDgBQgugZgrgqQgYgZgSgZIgCgHIgFgrIgBAAQgGgBgFgEIgEgEIAAgBQgDgDgGgfIgHgrIgBgEQgGgiAIgEIABAAQAHgDANAPIAFAFIgCgHQgHgeAAgjQAAhNApgUIABgBIAsghQA2ghA0ACIAAAAIAFAAIAAAAIAGAAQAxAAA1AgQAaAQARAQIAAABQApATAABOQAAAjgHAeIAEABQABgFAEgDQAIgHADACQAFADAAANQAAAKgEASIgGAsQgGAdgDAFIAAAAIgFAFQgEADgGABIgCAAIgBAkIgCAGQggA4g6AoIg0AeQgPAFgTAAQgRAAgUgFg");
	this.shape_67.setTransform(115.8,37.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDAB86").s().p("AiBBgQA8iHACgpQACgXBCAJQAiAFAiAJIAJAzQAPA4AeAeQAkAjiNAGg");
	this.shape_68.setTransform(115.2,63.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F9BD9C").s().p("AgIBdIgXhDIAAAAQgvgfgMgnQgLgfAMgeQAJgUAXgNQAMgGAPgFQAGgEgLgiIgCgIQgJgWAIgPQAFgKAJABQANADAGAPIBlGxIhAAgQgQhGgYhPg");
	this.shape_69.setTransform(65.4,76.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1C140B").s().p("AgFAAQAAgGACgGQACgEABAAQAGAAAAAQQAAARgGAAQgFAAAAgRg");
	this.shape_70.setTransform(52.9,51.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#927954").s().p("AgHAZQgDgLAAgOQAAgNADgLQADgKAEAAQAFAAADAKQADALAAANQAAAOgDALQgDAKgFAAQgEAAgDgKg");
	this.shape_71.setTransform(52.9,51.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1C140B").s().p("AgFAAQABgGABgGQACgEABAAQAGAAgBAQQABARgGAAQgEAAgBgRg");
	this.shape_72.setTransform(16.4,51.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#927954").s().p("AgHAZQgDgLAAgOQAAgNADgLQADgKAEAAQAFAAADAKQADALAAANQAAAOgDALQgDAKgFAAQgEAAgDgKg");
	this.shape_73.setTransform(16.4,51.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1C140B").s().p("AkuDhQgWgWAAgeQAAgdAUgVQgOgJgJgOQgIgPAAgRQAAgfAXgTQgHgLAAgNQAAgPAJgMQAJgMAOgFQgDgKAAgLQAAgfAWgWQAVgWAfAAIAFAAQAHgTARgLQARgMAUAAQAQAAAPAIQAGgZAUgQQAUgQAaAAQAVAAARAKQARgSAbAAQAhAAAUAbIAHAAQAPAAAKAKQALAKABAOQAMgEANAAQAiAAAZAYQAYAYAAAjIAAABIALgBQAbAAATATQAUATAAAcQAAAUgLAPQAWAWAAAdQAAAigaAWQAQALAJAQQAJARAAATQAAAfgWAWQgVAVgfAAQgXAAgTgNQgTgMgIgVQgSgEgLgOQgLgOAAgSIAAgIQgKACgJAAQgjAAgZgZQgZgYAAgkIAAgHQgKAFgOAAQgTAAgPgMQgQgMgFgSIgCAAQgSAAgNgKQgNgLgEgRIgEgCIABAHQAAAQgIANQgIANgNAIQAKASAAASQAAAZgPATQgQASgXAGQACAGAAAIQAAAMgGALQgHAKgLAFQgEAbgUATQgVASgbAAQgfAAgVgVg");
	this.shape_74.setTransform(33.6,24.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A25F37").s().p("AgKgbQAKgRAJACQAFABADAEQAEAigTAaIgTAUg");
	this.shape_75.setTransform(53.2,46.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A25F37").s().p("AgBAXQgTgaAEgiIAIgFQAJgCAKARIAHBGQgLgGgIgOg");
	this.shape_76.setTransform(15.2,46.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A25F37").s().p("Ag+D5QhGgtgnhUQgLgGgJgNQgUgbAFgjIAIgFQALgBAJARQgOgngGgwQgMhhAngwIApgsQA2gtBCgHIAUAAQBDAHA3AtQAbAXANAVQAoAwgNBhQgHAwgOAnQAKgRALABQAFABADAEQAFAjgUAbIgUATQgnBUhHAtQgVAPgYAJIgRAGQgbgHgjgXg");
	this.shape_77.setTransform(34.3,38.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1C140B").s().p("AgHB+QgOgJgKgOQgGADgEAAQgPAAgLgMQgLgKAAgQIABgIIgNABQgZAAgSgSQgTgSAAgZQAAgTAKgPQAKgPARgHQgPgOAAgTQAAgSANgNQAMgNASAAQAYAAANATQAOgFAQAAQAggBAXAXQAWAXAAAgQAAAXgMATQAcAGAOAbQAKgEAIAAQAUAAANAOQAOAOAAAUQAAATgOAOQgNAOgUABQgRgBgNgKQgVAUgcAAQgSAAgPgIg");
	this.shape_78.setTransform(18.4,52.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1C140B").s().p("AhzBZQgPgPAAgUQAAgVAPgPQAPgPAVAAIAAAAQAAgUAPgPQAOgOAVgBQADgWARgPQARgPAWAAQASAAAPAJQAMgNARAAQAQAAALALQALAMAAAQQAAAQgLALQgLAMgQAAIgBgBQgEASgNAMQgMAOgSAEIAAAEQAAAagSASQgSASgZAAQgLAAgKgEQgRAUgYAAQgVAAgPgPg");
	this.shape_79.setTransform(51.1,55.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9D9D9E").s().p("AgiBcIgpg6QgHgTAFgYQAJgzA2gfIAfA8QAlBGAaA1g");
	this.shape_80.setTransform(53.8,87.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9D9D9E").s().p("Ag3BeQAFhhAPg3IANgjIBOA9IgUB+g");
	this.shape_81.setTransform(17.4,86.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgugZIAsgQIAxAsIgkAng");
	this.shape_82.setTransform(29.1,75.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AguAEIAzgvIAqAQIg6BHg");
	this.shape_83.setTransform(38.5,75.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCBCB").s().p("AALAfIg3g9IAggLIA5AnIgeAsg");
	this.shape_84.setTransform(29.3,76.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCBCB").s().p("AgqAAIA8gnIAZALIg3A2IgEAOg");
	this.shape_85.setTransform(38.1,76.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9F5733").s().p("AhVAMIAkgQQAHgGACgFQAFgNgDgtIBLgCIgBAeQgBAfADAGIAHADIAoAQIg+A7IgcgaIgBAAIgBAAIghAgg");
	this.shape_86.setTransform(34.5,72);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgngFIgthAIBSghIBXAfIg9A8IgdByg");
	this.shape_87.setTransform(34.4,80.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#626568").s().p("AgNCDIhDh2IAfgOIgzgMIgphFICNgwICOA0IhDBNIgpgBIAaATIg3Byg");
	this.shape_88.setTransform(34.6,83.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#606060").s().p("AgMCBIhHhxIAhgQIg3gKIgqhCQAPgEAJgFIA3gUIAFgCIBCgVIA3ATIAJAEIBRAlIhABEIgtAAIAcATIg8Bug");
	this.shape_89.setTransform(34.4,83.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9D9D9E").s().p("AiKCDQgHgOgBgHQgEgSADgTIAJglQADgPgKgRIgRgbQgVgjgCABQAMgFAWgIQAZgIAKgFIA2gUIBKgbIA+AbIA3AaQAiAPAXAKIgNAPQgIALgFAMQgEANACAJIAEALQAUAygTArQgDAHgHAMg");
	this.shape_90.setTransform(33.8,83.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3F3231").s().p("AjaChIgQgFQgDABgEgNQgKgcgLhKQgGgiAPgcQALgWAVgRQgCgeAKgaQAQgmApgSQgFAGgGALQgMAUgEAQQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAYgeAugVQBIgiBogCQgmAFgbAQQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABADADAAQAsgGArAFQBCAGAqAbQgMgCgRABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAQAhAOAXAWQAlAkAAAyQgNgQgKgKQAAAAAAAAQAAgBgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAPAmgLAoQgCgKgMgNQgCA9gRBQQgSgCgMAUIgJAUQACgcgCgiQgDhCgSgbQgthFh9ACQgoABgqAHIgjAIQgXA3geAgQgCAKgDA+IgDA8QgDghgQgKg");
	this.shape_91.setTransform(190,25.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3F3231").s().p("AA4AlQgKgCgIgGQgLgJAAgOIAAgDQgJgIgMABIgDAAQgLgBgKAIIAAADQABAOgLAJQgJAGgKACIhdAAIgDgBQgOgGgHgKQgFgIAAgHIAAgGIgbADIgEgSIAhgEQAHgMAVgEIBWAAQAYAAAKARQAMgFALABQAMgBANAFQADgGAIgFQAJgGANAAIBXAAQAUAEAIAMIAYACIgDAMIgUAFIAAAGQABAHgGAIQgGAKgPAGIgCABgAApgSIAAAcIACAGQADAHAIAFIBjAAQALgDAAgOIAAgcQgCgIgLAAIhjAAQgLADAAAEgAibgSIAAAcIACAGQADAHAIAFIBjAAQALgDAAgOIAAgcQgCgIgLAAIhjAAQgLACAAAFg");
	this.shape_92.setTransform(188.1,41);

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.3,87.5,1,1,0,0,0,2.5,6.3);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(218.6,90.1,1,1,0,0,0,1.5,3.8);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(218.4,86.8,1,1,0,0,0,3.4,7.2);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(161.4,86.8,1,1,0,0,0,3.3,7.2);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(159.7,88.8,1,1,0,0,0,1.8,5);
	this.instance_5.alpha = 0.391;

	this.instance_6 = new lib.Group_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(157,87.2,1,1,0,0,0,2.4,6.7);
	this.instance_6.alpha = 0.391;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A9B3BC").s().p("AhEAQIBwhBIAZAxQgDATgkARIgiAOg");
	this.shape_93.setTransform(196.3,77.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A9B3BC").s().p("AgYAlQgrgZgDgTIAZgyIBzBQIg1AiQgTgIgWgMg");
	this.shape_94.setTransform(182.4,76.4);

	this.instance_7 = new lib.Group_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(192.7,86,1,1,0,0,0,0.8,7.9);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(197.7,85.7,1,1,0,0,0,0.8,8.2);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(201.9,85.4,1,1,0,0,0,0.8,8.3);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(214.2,85.7,1,1,0,0,0,0.8,8);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(210.7,85.2,1,1,0,0,0,0.8,8.6);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_11();
	this.instance_12.parent = this;
	this.instance_12.setTransform(205.6,84.8,1,1,0,0,0,0.8,8.8);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(187,86,1,1,0,0,0,0.7,7.9);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(182.1,85.7,1,1,0,0,0,0.8,8.2);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_14();
	this.instance_15.parent = this;
	this.instance_15.setTransform(177.8,85.4,1,1,0,0,0,0.8,8.3);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(165.5,85.7,1,1,0,0,0,0.8,8);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_16();
	this.instance_17.parent = this;
	this.instance_17.setTransform(169,85.2,1,1,0,0,0,0.8,8.6);
	this.instance_17.alpha = 0.391;

	this.instance_18 = new lib.Group_17();
	this.instance_18.parent = this;
	this.instance_18.setTransform(174.1,84.8,1,1,0,0,0,0.8,8.8);
	this.instance_18.alpha = 0.391;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BBCACB").s().p("AjLBtQAyiZAUgNQAigWBIgNQAjgGAdgCQA/gVA5AjQAdARAQAWIACCcg");
	this.shape_95.setTransform(171.8,85.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CCD0D0").s().p("AjSBtIAHicIALgNQAQgPASgLQA5gjA/AVIBAAIQBIANAiAWQAMAIAWAtQAUArAZBGg");
	this.shape_96.setTransform(207.9,85.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E8AF93").s().p("AAcAAQgGgDgHAAIgMgBIgZAEQgPACgMAFQALgHAOgFQAKgDAQgCIAPABQAGABAIADQAOAGAEAKQgIgIgNgDg");
	this.shape_97.setTransform(178.6,39);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E1BB93").s().p("AgjEOQgYgJgfgWQg9gqgjg8QgCgCAAgEIgBgnIgCAAQgLAAgEgJIgBAAQgDgFgGggIgHguQgEgSAAgMQAAgPAFgBQAEgCAJAHQAEAEAAAEIAEgBQgHggAAglQAAhSArgVIABgBIAugiQA3giA1AAIAMAAQA2gCA6AiQAdASASASIABABQArAVAABSQAAAlgHAgIgCAHIAGgFIAJgJQAIgFAEACIAAAAQAJAEgHAkIgIAyQgGAggDAEIgBABQgFAJgKAAIgCAAIgFAuQAAAEgCADQgSAagbAbQgtAugxAaIgDABQgWAFgTAAQgTAAgQgGg");
	this.shape_98.setTransform(188.5,40.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D6AE89").s().p("AgSBnQiWgFAmglQAhghAPg7IAKg2IBIgPQBHgLABAaQABAbAhBSIAhBNQg2ADgxAAIg2gBg");
	this.shape_99.setTransform(189.2,68.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_94},{t:this.shape_93},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_DESEMPEÑO, new cjs.Rectangle(0,0,229,217.1), null);


(lib.instruccionesmc1t2TMRretoo4resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// flecha 
	this.instance = new lib.lapizmueveretoo4resp("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.2,14.4,0.231,0.231,0,0,0,23.4,23.6);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.4,scaleX:1,scaleY:1,y:14.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(43));

	// flecha mueve
	this.instance_1 = new lib.lapizmueveretoo4resp("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.2,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(5).to({x:-8.7},0).to({x:485.3},37,cjs.Ease.get(1)).wait(1));

	// tapa circulo
	this.instance_2 = new lib.tapageneralblancoretoo4resp("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(3641.2,91.6,34.414,2.053,0,0,0,106.7,44.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:106.8,scaleX:14.35,x:1925.4},26,cjs.Ease.get(1)).to({scaleX:0.5,x:560.6},10).to({_off:true},1).wait(1));

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


(lib.instruccionesmc1t2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// flecha 
	this.instance = new lib.lapizmuevemod3t4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.2,14.4,0.231,0.231,0,0,0,23.4,23.6);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.4,scaleX:1,scaleY:1,y:14.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(43));

	// flecha mueve
	this.instance_1 = new lib.lapizmuevemod3t4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.2,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(5).to({x:-8.7},0).to({x:485.3},37,cjs.Ease.get(1)).wait(1));

	// tapa circulo
	this.instance_2 = new lib.tapageneralblancomod3t4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(3632,91.6,34.294,2.053,0,0,0,106.8,44.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:14.35,x:2001.4},36,cjs.Ease.get(1)).to({_off:true},1).wait(1));

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


(lib.caja_respuestasM2T2mc3retoo4resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var botones = 4;
		var resp = [1, 2, 3, 4];
		var raiz = this; //guarda el MC padre
		console.log("entro");
		var cont = 0;
		raiz.btncheck.visible = false;
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
			if(cont >=1){
			raiz.btncheck.visible = true;
			}else {
				raiz.btncheck.visible = false;
			}
		}
		
		raiz.btncheck.addEventListener("click", function (c) {
			validar();
		});
		
		function validar() {
			console.log("entro a validar");
			var finalizo = true;
			for (var i = 0; i < resp.length; i++) {
				if (!raiz["Mod2T2mc3b" + resp[i]].sel) {
					finalizo = false;
					break;
				}
			}
			finalizo = true;
			if (finalizo) {
				parent.llamarRetros("bien", "¡En efecto! todas las afirmaciones son correctas. El Proceso Talent Management Review (TMR) nos permite tener argumentos sólidos al momento de justificar la evaluación, nos ayuda a eliminar sesgos y proporciona información verificable para contar con una evaluación más objetiva.");
		
				console.log("final de la actividad");
				for (var i = 1; i <= botones; i++) {
					raiz["Mod2T2mc3b" + i].mouseEnabled = false;
				}
				try {
					//parent.llamarRetros("bien","Respuesta B.  ¡En efecto! Contactar al líder del negocio o territorio nos permite tener claridad de los objetivos más significativos del negocio así como los retos que enfrenta la posición analizada, alineando de esta manera las necesidades de talento.");
		
					parent.habilitarSiguiente();
		
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
	this.btncheck = new lib.btn_chec();
	this.btncheck.parent = this;
	this.btncheck.setTransform(428.1,169.9,1,1,0,0,0,66.2,17.3);
	new cjs.ButtonHelper(this.btncheck, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(-97.1,-79.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_1.setTransform(-104.7,-83.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_2.setTransform(-114.7,-84.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_3.setTransform(-121.7,-84.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_4.setTransform(-127.9,-83.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_5.setTransform(-137.7,-83.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgoAvIAAgNIA6hDIgSAAIglAAIAAgNIBMAAIAAALIgyA6IgKALIAUgBIAqAAIAAAOg");
	this.shape_6.setTransform(-147.2,-83.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_7.setTransform(-153.7,-84.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_8.setTransform(-160.7,-83.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_9.setTransform(-170.7,-83.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQAAAHAEADQAHAFAKAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAEgLQAGgLAJgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAIgHgBgSQAAgRgIgJQgHgJgLAAQgJAAgIAJg");
	this.shape_10.setTransform(-181,-81.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_11.setTransform(-188,-83.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_12.setTransform(-196.7,-83.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_13.setTransform(264.3,-101.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_14.setTransform(257,-101.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_15.setTransform(250.9,-102.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_16.setTransform(243.7,-101.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_17.setTransform(234.3,-101.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_18.setTransform(224.2,-101.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_19.setTransform(214.3,-101.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_20.setTransform(199.3,-101.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_21.setTransform(189.3,-101.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_22.setTransform(177,-101.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_23.setTransform(168.3,-101.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGADQAGAEAFAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgKAAgKgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAJAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_24.setTransform(158,-102.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_25.setTransform(148.3,-101.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_26.setTransform(141,-101.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_27.setTransform(132.3,-101.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAtQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAHADAJQACAHAAALQAAAYgLAMQgMANgRAAQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAIQAHAMANgBQAJABAIgKQAHgJAAgSQAAgRgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_28.setTransform(122.5,-102.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAEgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_29.setTransform(112.3,-101.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_30.setTransform(105.3,-103);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_31.setTransform(98.3,-101.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_32.setTransform(89.1,-101.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_33.setTransform(74.3,-101.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAIAAAGADQAHAEAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgLAAgIgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_34.setTransform(64,-102.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAGgCIAOgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_35.setTransform(54.3,-101.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_36.setTransform(45.1,-101.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_37.setTransform(30.3,-101.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_38.setTransform(15.3,-101.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_39.setTransform(5.3,-101.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMAAgOQAAgOAEgLQAFgLAJgGQAKgGALAAQAHAAAHADQAGAEAFAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgKAAgKgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAJAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_40.setTransform(-5,-102.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_41.setTransform(-14.7,-101.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_42.setTransform(-24.7,-101.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_43.setTransform(-34.4,-99.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_44.setTransform(-44.3,-101.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_45.setTransform(-53.7,-101.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_46.setTransform(-61,-101.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_47.setTransform(-67,-101.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_48.setTransform(-75.7,-101.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_49.setTransform(-84.9,-101.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_50.setTransform(-99.3,-101.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_51.setTransform(-108.7,-101.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_52.setTransform(-116,-101.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_53.setTransform(-124.7,-101.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgKAAgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQALAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgMAAQgJAAgHAJg");
	this.shape_54.setTransform(-135,-102.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_55.setTransform(-144.7,-101.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_56.setTransform(-153.9,-101.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_57.setTransform(-160.7,-103);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAHAAAHADQAGAEAFAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgKAAgKgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_58.setTransform(-168,-102.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_59.setTransform(-177.7,-101.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_60.setTransform(-184.7,-103);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_61.setTransform(-196.7,-101.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_62.setTransform(360.7,-119.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_63.setTransform(351.3,-119.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_64.setTransform(344,-119.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgbA7QgLgHABgQIAPADQABAHAFADQAFAFALAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAFgLQAFgLAIgHQAKgGAMAAQAQAAALAOIAAgMIAOAAIAABQQAAAWgEAJQgFAJgKAFQgJAGgNAAQgRAAgKgIgAgQgsQgIAJAAAQQAAATAIAHQAGAJALAAQALAAAHgJQAIgHAAgSQgBgRgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_65.setTransform(335,-117.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_66.setTransform(325.3,-119.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_67.setTransform(318.3,-121.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgJAPQAFgCADgEQABgFAAgHIgIAAIAAgSIARAAIAAASQAAAJgDAGQgDAGgHAEg");
	this.shape_68.setTransform(308.8,-114.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_69.setTransform(301.7,-119.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_70.setTransform(292.3,-119.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_71.setTransform(284.9,-120.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_72.setTransform(277.3,-119.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_73.setTransform(267.3,-119.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_74.setTransform(260.3,-121.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_75.setTransform(250.8,-119.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_76.setTransform(238.3,-119.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_77.setTransform(230.9,-120.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_78.setTransform(226,-119.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_79.setTransform(217.3,-119.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgJAGQgLAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgIAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_80.setTransform(207.6,-117.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_81.setTransform(194.8,-119.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_82.setTransform(182.3,-119.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_83.setTransform(173.1,-119.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_84.setTransform(158.7,-119.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_85.setTransform(149.3,-119.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_86.setTransform(142.3,-121.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgiA6QgIgHAAgMQAAgHADgFQADgGAGgDQAFgEAFgCIAPgCQASgCAJgDIAAgFQAAgIgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAXQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADgAgIgoIALgZIAVAAIgTAZg");
	this.shape_87.setTransform(135.3,-121);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_88.setTransform(125.2,-119.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_89.setTransform(116.1,-119.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_90.setTransform(101.3,-119.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_91.setTransform(91.3,-119.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_92.setTransform(81.3,-119.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_93.setTransform(74.3,-121.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgNBBIAAhQIgOAAIAAgMIAOAAIAAgKQAAgJACgFQADgGAFgEQAFgDALAAIAPABIgDAOIgKgBQgGAAgEADQgCADAAAJIAAAIIASAAIAAAMIgSAAIAABQg");
	this.shape_94.setTransform(70.2,-121.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAGgFQAFgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_95.setTransform(62.3,-119.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgJgFgAgQgJQgHAJAAARQAAASAIAJQAHAJAKAAQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_96.setTransform(52,-121);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_97.setTransform(37.3,-119.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_98.setTransform(27.2,-119.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_99.setTransform(17,-117.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_100.setTransform(2.7,-119.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_101.setTransform(-6.7,-119.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_102.setTransform(-14,-119.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_103.setTransform(-22.7,-119.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_104.setTransform(-29.7,-121.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_105.setTransform(-35.9,-119.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_106.setTransform(-50.3,-119.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_107.setTransform(-59.7,-119.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_108.setTransform(-66.7,-121.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_109.setTransform(-71,-119.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_110.setTransform(-79.7,-119.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_111.setTransform(-87.1,-120.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_112.setTransform(-91.7,-121.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_113.setTransform(-96,-119.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_114.setTransform(-103.9,-119.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_115.setTransform(-118.7,-119.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_116.setTransform(-128.7,-119.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_117.setTransform(-137.9,-119.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_118.setTransform(-150,-119.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_119.setTransform(-158.7,-119.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_120.setTransform(-166.1,-120.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_121.setTransform(-173.7,-119.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_122.setTransform(-183.7,-119.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgeA6QgNgIgGgQQgHgRAAgRQAAgUAHgPQAJgPAOgIQANgHARAAQATAAAOAKQAMAJAGASIgRAEQgEgOgJgGQgJgHgNAAQgNAAgLAHQgJAHgEAMQgFAMAAANQABAQAFAMQAEAMAKAGQALAGAKAAQAPAAAKgIQAJgIAEgRIARAFQgGAUgNALQgOALgVAAQgTAAgOgIg");
	this.shape_123.setTransform(-195.1,-121.1);

	this.Mod2T2mc3b4 = new lib.mc_seleccionretoo4resp();
	this.Mod2T2mc3b4.parent = this;
	this.Mod2T2mc3b4.setTransform(460.2,112.7,0.845,0.843,0,0,0,6.9,7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_124.setTransform(-52.1,127.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_125.setTransform(-56.7,122);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_126.setTransform(-63.7,123.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_127.setTransform(-73.8,123.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_128.setTransform(-81.1,122.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_129.setTransform(-87.9,123.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_130.setTransform(-97.7,123.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_131.setTransform(-112.7,123.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AAWBAIAAg5QAAgJgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAARIAAAzIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAOIAAA6gAgagqQAAgKAFgFQAFgFAIAAQAGAAAIAEQAFADADAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQABgBABgFIALAAQAAAKgFAFQgFAFgHAAQgGAAgJgFQgFgDgCAAQgDAAgCACQgCACAAAFg");
	this.shape_132.setTransform(-122.7,122);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_133.setTransform(-132.7,123.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_134.setTransform(-142.4,125.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_135.setTransform(-155.2,123.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_136.setTransform(-167.7,123.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_137.setTransform(-177.3,123.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_138.setTransform(-186.7,123.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAIAAAGADQAHAEAEAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQAKABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_139.setTransform(-197,122.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_140.setTransform(329.2,103.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_141.setTransform(319.7,103.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_142.setTransform(305.3,103.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgUA8QgJgHgFgLQgFgLgBgOQAAgOAGgLQAEgLAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgMQgJAPgRAAQgLgBgJgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_143.setTransform(295,102);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_144.setTransform(280.7,103.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AghA6QgJgHAAgMQAAgHADgFQADgGAGgDQAFgEAFgCIAPgCQASgCAJgDIAAgFQAAgIgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgIADQgHADgJAAQgPAAgIgIgAgDAXQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAEAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADgAgIgoIALgZIAVAAIgTAZg");
	this.shape_145.setTransform(271.3,101.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_146.setTransform(258.8,103.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_147.setTransform(246.3,103.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgTA8QgKgHgFgLQgGgLABgOQAAgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGADQAHAEAEAGIAAguIAQAAIAAB/IgPAAIAAgMQgJAPgRAAQgKgBgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_148.setTransform(236,102);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_149.setTransform(226.3,103.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_150.setTransform(211.3,103.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_151.setTransform(201.3,103.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_152.setTransform(191.3,103.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_153.setTransform(181.7,103.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_154.setTransform(175,103.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_155.setTransform(166.3,103.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKAAASQABARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_156.setTransform(156.6,105.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_157.setTransform(141.3,103.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_158.setTransform(134.3,101.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgQAAQgUAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_159.setTransform(122.3,103.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgUA8QgJgHgFgLQgFgLAAgOQAAgOAEgLQAFgLAJgGQAKgGALAAQAHAAAHADQAGAEAFAGIAAguIAQAAIAAB/IgPAAIAAgMQgJAPgRAAQgKgBgKgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAJAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_160.setTransform(112,102);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_161.setTransform(97.7,103.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_162.setTransform(88.3,103.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_163.setTransform(81.3,101.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_164.setTransform(74.3,103.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_165.setTransform(64.3,103.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_166.setTransform(54.3,103.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_167.setTransform(47.3,101.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_168.setTransform(41.1,103.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_169.setTransform(34.3,101.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgTA8QgKgHgFgLQgGgLAAgOQABgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGADQAGAEAFAGIAAguIAPAAIAAB/IgOAAIAAgMQgJAPgRAAQgKgBgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQALAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_170.setTransform(27,102);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAKgDQAJgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_171.setTransform(17.3,103.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_172.setTransform(2.7,103.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_173.setTransform(-6.7,103.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_174.setTransform(-15.9,103.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_175.setTransform(-22.7,101.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_176.setTransform(-27.1,102.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_177.setTransform(-34.3,103.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_178.setTransform(-40.4,101.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_179.setTransform(-46,103.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_180.setTransform(-54.7,103.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_181.setTransform(-62.1,102.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_182.setTransform(-68.9,103.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_183.setTransform(-78.7,103.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_184.setTransform(-86,103.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_185.setTransform(-94.7,103.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_186.setTransform(-103.9,103.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_187.setTransform(-116,103.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_188.setTransform(-124.7,103.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_189.setTransform(-132,103.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_190.setTransform(-140.7,103.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgTA8QgKgHgFgLQgGgLABgOQAAgOAEgLQAFgLAKgGQAIgGAMAAQAHAAAHADQAHAEAEAGIAAguIAQAAIAAB/IgPAAIAAgMQgJAPgRAAQgKgBgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_191.setTransform(-151,102);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_192.setTransform(-157.7,101.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_193.setTransform(-164.3,103.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_194.setTransform(-173.7,103.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_195.setTransform(-183.7,103.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgeA7QgNgKgGgPQgHgQAAgSQAAgUAHgPQAJgPAOgHQANgJARABQATgBAOALQAMAJAGASIgRAEQgEgOgJgHQgJgGgNAAQgNAAgLAHQgJAHgEAMQgFANAAAMQABAQAFAMQAEAMAKAGQALAGAKAAQAPAAAKgIQAJgIAEgRIARAFQgGAVgNAKQgOAMgVAAQgTgBgOgHg");
	this.shape_196.setTransform(-195.1,101.9);

	this.Mod2T2mc3b3 = new lib.mc_seleccionretoo4resp();
	this.Mod2T2mc3b3.parent = this;
	this.Mod2T2mc3b3.setTransform(460.2,44.7,0.845,0.843,0,0,0,6.9,7);

	this.Mod2T2mc3b2 = new lib.mc_seleccionretoo4resp();
	this.Mod2T2mc3b2.parent = this;
	this.Mod2T2mc3b2.setTransform(459.4,-25.3,0.845,0.843,0,0,0,6.9,7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_197.setTransform(-55.1,59.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_198.setTransform(-62.7,55.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAFgLQAEgLAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgIgFgAgQgJQgHAJAAARQAAASAHAJQAIAJAJAAQALAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_199.setTransform(-73,54.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_200.setTransform(-82.7,55.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_201.setTransform(-90.1,54.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_202.setTransform(-97.7,55.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_203.setTransform(-107.7,55.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_204.setTransform(-115.1,54.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_205.setTransform(-122.7,55.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_206.setTransform(-129.7,54);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_207.setTransform(-139,55.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_208.setTransform(-147.7,55.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJABgDgDg");
	this.shape_209.setTransform(-155.1,54.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_210.setTransform(-162.3,55.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_211.setTransform(-171.7,55.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_212.setTransform(-186.7,55.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgLAAgIgFgAgQgJQgHAJAAARQAAASAHAJQAIAJAJAAQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_213.setTransform(-197,54.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_214.setTransform(358,35.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_215.setTransform(349.3,35.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_216.setTransform(339.7,35.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_217.setTransform(330.3,35.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgIAKAAASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_218.setTransform(320.6,37.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_219.setTransform(305.3,35.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_220.setTransform(290.7,35.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAEgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_221.setTransform(281.3,35.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_222.setTransform(273.9,34.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgJAIQgLAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_223.setTransform(266.3,35.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_224.setTransform(253.8,35.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_225.setTransform(236.7,35.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_226.setTransform(227.2,35.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_227.setTransform(217.7,35.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_228.setTransform(203.3,35.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLAAgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAHAAAHAEQAGADAFAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRAAQgKABgKgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_229.setTransform(193,34);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_230.setTransform(183.3,35.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_231.setTransform(173.3,35.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgoAvIAAgNIA6hDIgSAAIglAAIAAgNIBMAAIAAALIgyA6IgKALIAUgBIAqAAIAAAOg");
	this.shape_232.setTransform(163.8,35.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_233.setTransform(154.3,35.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_234.setTransform(144.3,35.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_235.setTransform(135.1,35.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_236.setTransform(128.3,33.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAEgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_237.setTransform(121.3,35.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_238.setTransform(106.3,35.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgiA6QgIgHAAgMQAAgHADgFQADgGAFgDQAFgEAHgCIANgCQATgCAJgDIAAgFQAAgIgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAXQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADgAgIgoIALgZIAVAAIgUAZg");
	this.shape_239.setTransform(96.3,33.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_240.setTransform(88.9,34.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_241.setTransform(81.7,35.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_242.setTransform(72.3,35.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_243.setTransform(57.3,35.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_244.setTransform(47.3,35.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_245.setTransform(32.3,35.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_246.setTransform(22.2,35.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_247.setTransform(12,37.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_248.setTransform(-2.3,35.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_249.setTransform(-11.7,35.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_250.setTransform(-18.7,33.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_251.setTransform(-22.7,33.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_252.setTransform(-29.7,35.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_253.setTransform(-39.8,35.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_254.setTransform(-50,37.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_255.setTransform(-59.7,35.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_256.setTransform(-74.7,35.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_257.setTransform(-89.7,35.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRAAQgLABgIgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQALAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_258.setTransform(-100,34);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_259.setTransform(-109.8,35.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_260.setTransform(-119.1,37.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_261.setTransform(-128.7,35.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_262.setTransform(-141,35.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_263.setTransform(-149.7,35.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_264.setTransform(-159.7,35.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_265.setTransform(-169.2,35.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_266.setTransform(-178.7,35.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_267.setTransform(-186,35.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgwBBIAAiBIAwAAQANAAAGACQAJABAHAFQAGAEAEAJQAEAHAAAKQAAAQgKALQgLALgbAAIggAAIAAA1gAgfgCIAgAAQARAAAGgGQAIgHAAgKQAAgIgFgHQgEgFgGgCIgQgBIggAAg");
	this.shape_268.setTransform(-195.4,33.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_269.setTransform(90.9,-11.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_270.setTransform(83.7,-15.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAANANQALANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_271.setTransform(74.3,-15.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_272.setTransform(67,-15.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_273.setTransform(58.3,-15.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AgUA8QgJgHgFgLQgGgLABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAHAAAHADQAGAEAFAGIAAgvIAQAAIAACAIgPAAIAAgMQgJAPgRAAQgKgBgKgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_274.setTransform(48,-16.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgJABgEACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_275.setTransform(38.3,-15.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_276.setTransform(31,-15.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_277.setTransform(22.3,-15.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAiAIAPAAIAAAuQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAHADAJQACAIAAAJQAAAZgLAMQgMAOgRAAQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAIQAHAMANgBQAJABAIgKQAHgJAAgSQAAgRgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_278.setTransform(12.5,-16.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_279.setTransform(2.3,-15.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgHBAIAAiAIAPAAIAACAg");
	this.shape_280.setTransform(-4.7,-16.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_281.setTransform(-11.7,-15.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_282.setTransform(-20.9,-15.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_283.setTransform(-35.3,-15.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_284.setTransform(-44.7,-15.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_285.setTransform(-52,-15.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_286.setTransform(-58.1,-16.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_287.setTransform(-65.3,-15.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_288.setTransform(-74.7,-15.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_289.setTransform(-84.8,-15.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_290.setTransform(-94.7,-15.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_291.setTransform(-109.7,-15.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgUA8QgJgHgFgLQgFgLgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGADQAHAEAEAGIAAgvIAPAAIAACAIgOAAIAAgMQgJAPgRAAQgLgBgJgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_292.setTransform(-120,-16.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgHBAIAAiAIAPAAIAACAg");
	this.shape_293.setTransform(-131.7,-16.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_294.setTransform(-138.7,-15.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_295.setTransform(-145.7,-16.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_296.setTransform(-151.9,-15.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_297.setTransform(-161.7,-15.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_298.setTransform(-171.7,-15.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_299.setTransform(-179.1,-16.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_300.setTransform(-186.7,-15.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_301.setTransform(-196.4,-13.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_302.setTransform(343.3,-37);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_303.setTransform(336.3,-35.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_304.setTransform(324,-35.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_305.setTransform(315.3,-35.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_306.setTransform(306.1,-35.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_307.setTransform(299.3,-37);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgMBBIAAhQIgPAAIAAgMIAPAAIAAgKQgBgJACgFQADgGAFgDQAFgEALgBIAPACIgDAOIgKgBQgGAAgEADQgCADAAAJIAAAIIASAAIAAAMIgSAAIAABQg");
	this.shape_308.setTransform(295.2,-37.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_309.setTransform(290.3,-37);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_310.setTransform(285.9,-36.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_311.setTransform(278.3,-35.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQATAAANANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_312.setTransform(268.3,-35.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAKgGALAAQAIAAAGAEQAHADAEAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRgBQgLAAgJgFgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_313.setTransform(258,-36.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_314.setTransform(251.3,-37);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgIgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_315.setTransform(239.3,-35.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_316.setTransform(232,-35.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_317.setTransform(223.3,-35.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_318.setTransform(213.6,-33.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_319.setTransform(198.3,-35.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_320.setTransform(190.9,-36.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_321.setTransform(183.3,-35.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_322.setTransform(173.3,-35.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_323.setTransform(166,-35.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_324.setTransform(157.3,-35.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKAAASQABARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_325.setTransform(147.6,-33.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_326.setTransform(137.7,-35.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_327.setTransform(128.3,-35.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgIAIgJADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_328.setTransform(118.3,-35.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_329.setTransform(111,-35.4);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_330.setTransform(104.9,-36.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_331.setTransform(92.9,-33.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_332.setTransform(81,-35.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgIADQgIADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_333.setTransform(72.3,-35.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAFgLQAEgLAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJAOgRgBQgLAAgIgFgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQALAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_334.setTransform(62,-36.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_335.setTransform(52.3,-35.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgiA6QgIgHAAgMQAAgHADgFQADgGAFgDQAGgEAGgCIANgCQATgCAJgDIAAgFQAAgIgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAXQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADgAgIgoIALgZIAVAAIgUAZg");
	this.shape_336.setTransform(42.3,-37);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_337.setTransform(34.9,-36.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_338.setTransform(27.7,-35.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_339.setTransform(18.3,-35.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgJAPQAFgCADgEQABgFAAgHIgIAAIAAgSIARAAIAAASQAAAJgDAGQgEAGgGAEg");
	this.shape_340.setTransform(5.8,-30.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_341.setTransform(-1.7,-35.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_342.setTransform(-8.7,-37);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAuQAKgNAPAAQAJAAAHAEQAIADAFAHQAFAFADAKQACAHAAALQAAAXgLAOQgMANgRgBQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAHQAHAMANABQAJgBAIgIQAHgKAAgRQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_343.setTransform(-15.5,-36.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_344.setTransform(-25.7,-35.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_345.setTransform(-32.7,-37);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgNBBIAAhQIgNAAIAAgMIANAAIAAgKQAAgJACgFQACgGAGgDQAFgEAKgBIAQACIgDAOIgKgBQgHAAgDADQgCADAAAJIAAAIIASAAIAAAMIgSAAIAABQg");
	this.shape_346.setTransform(-36.8,-37.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_347.setTransform(-44.7,-35.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_348.setTransform(-54.7,-35.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_349.setTransform(-63.9,-35.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_350.setTransform(-78.7,-35.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJAOgRgBQgLAAgIgFgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_351.setTransform(-89,-36.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_352.setTransform(-98.7,-35.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAOIgMABQgJABgDgDg");
	this.shape_353.setTransform(-106.1,-36.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AgeA1QgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgKQgIAHAAALIAzAAQgCgLgEgGQgIgJgMAAQgKAAgHAIgAgHgoIAKgZIAVAAIgUAZg");
	this.shape_354.setTransform(-113.7,-37);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_355.setTransform(-126.2,-35.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_356.setTransform(-143.7,-35.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_357.setTransform(-153.8,-35.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_358.setTransform(-166,-35.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_359.setTransform(-174.7,-35.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_360.setTransform(-184.3,-35.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AgcA8QgMgHgFgLQgFgMAAgVIAAhJIARAAIAABJQAAARAEAIQADAHAHAFQAIAFALAAQASAAAIgJQAIgJAAgYIAAhJIARAAIAABJQAAAUgFALQgEAMgLAGQgMAIgTgBQgRAAgLgFg");
	this.shape_361.setTransform(-195.2,-36.9);

	this.Mod2T2mc3b1 = new lib.mc_seleccionretoo4resp();
	this.Mod2T2mc3b1.parent = this;
	this.Mod2T2mc3b1.setTransform(459.4,-102,0.845,0.843,0,0,0,6.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mod2T2mc3b1},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.Mod2T2mc3b2},{t:this.Mod2T2mc3b3},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.Mod2T2mc3b4},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btncheck}]}).wait(1));

	// numeros
	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AAJBaIAAgkIhIAAIAAgeIBMhxIAdAAIAABxIAWAAIAAAeIgWAAIAAAkgAgfAYIAoAAIAAg8g");
	this.shape_362.setTransform(-255.8,110.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DC686B").s().p("Ah7B8QgzgzAAhJQAAhHAzgzQA0g0BHAAIAHAAQBEADAxAxQAzAzAABHQAABJgzAzQgzAyhJAAQhHAAg0gyg");
	this.shape_363.setTransform(-255.7,110.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgoBNQgQgOgCgWIAhgEQABAMAHAHQAHAHAKAAQAKAAAHgIQAHgIAAgOQAAgNgHgHQgHgIgKAAQgFAAgJADIADgbQANAAAIgGQAHgHAAgKQAAgJgFgGQgGgFgIAAQgIAAgHAGQgGAGgBAMIgggGQADgQAHgJQAHgKAMgGQAMgFAOAAQAZAAAPAQQAMANAAARQAAAXgZAOQAPADAJALQAJALAAARQAAAXgRARQgRAQgZAAQgYAAgQgOg");
	this.shape_364.setTransform(-255.8,42.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#DC686B").s().p("Ah7B8Qgzg0AAhIQAAhHAzgzQA0g0BHABIAHAAQBEABAxAyQAzAzAABHQAABIgzA0QgzAzhJAAQhHAAg0gzg");
	this.shape_365.setTransform(-255.7,42.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("Ag7BaQACgSAKgQQAJgRAdgaQAWgVAGgIQAHgKAAgLQAAgLgGgGQgHgGgKAAQgKAAgHAGQgGAHgBAPIgigEQADgcAQgMQAQgNAXAAQAbAAAPAOQAPAPAAAVQAAAMgEALQgFALgJALQgGAIgQAPIgUATIgHAKIBDAAIAAAgg");
	this.shape_366.setTransform(-256,-34.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#DC686B").s().p("Ah7B8Qgzg0AAhIQAAhHAzgzQA0g0BHABIAHAAQBEABAxAyQAzAzAABHQAABIgzA0QgzAzhJAAQhHAAg0gzg");
	this.shape_367.setTransform(-255.7,-30);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AAFBaIAAiAQgSARgZAJIAAggQANgEAQgMQAOgMAGgRIAcAAIAACzg");
	this.shape_368.setTransform(-257.7,-101.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#DC686B").s().p("Ah7B7QgzgzAAhIQAAhHAzgzQA0gzBHgBIAHAAQBEADAxAxQAzAzAABHQAABIgzAzQgzA0hJAAQhHAAg0g0g");
	this.shape_369.setTransform(-255.7,-101.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362}]}).wait(1));

	// fondos
	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#F3F3F3").s().p("EAx1AVtInUAAIhrAAMghFAAAMg/PAAAQggAAgagHIgHgCQhVgcAAhxIAAgUIAAgKIAAgxIAAgfIAAgUIAAgTIAAiAQAAh1BcgZQAZgIAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBcIABASIAAEVQAABxhWAcQgcAJgkAAgEAx1AK7InUAAIhrAAMghFAAAMg/PAAAQggAAgagHIgHgCQhVgcAAhxIAAgTIAAgLIAAgxIAAgeIAAgVIAAgUIAAh/QAAh1BcgaQAWgGAcgBMBvNAAAQAmABAYAKQBJAdAGBcIABASIAAEVQAAByhWAbQgcAJgkAAgEAx1gALInUAAIhrAAMghFAAAMg/PAAAQggAAgagGIgHgDQhVgcAAhwIAAgUIAAgKIAAgyIAAgeIAAgUIAAgUIAAiAQAAh1BcgZQAZgIAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaAMQBJAdAGBbIABASIAAEWQAABxhWAbQgcAJgkAAgEAx1gLHInUAAIhrAAMghFAAAMg/PAAAQggAAgagHIgHgCQhVgcAAhxIAAhtIAAhHIAAhGIAAh/QAAh1BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBbIABATIAABRIAAAuIAABGIAAAVIAAAyIAAAjIAAA4IAAADIAAAPQAAByhWAbQgcAJgkAAg");
	this.shape_370.setTransform(143,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_370).wait(1));

}).prototype = getMCSymbolPrototype(lib.caja_respuestasM2T2mc3retoo4resp, new cjs.Rectangle(-273.2,-136,786.4,323.6), null);


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
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_2 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_3 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_4 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_5 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_6 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_7 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_8 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_9 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(0);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-266.1,168.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v2roll24ene();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(448.3,22.9,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v2roll24ene(), 3);

	this.botoninvisible = new lib.T1_Boton_invisibleroll24ene();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisibleroll24ene(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(9));

	// Transicion
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mcroll24ene();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(317.3,177.5,1.024,1.074,0,0,0,309.8,176);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(9));

	// Contenidos
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AgXAYQgLgJABgPQgBgNALgLIAGgFQAIgEAJAAQAOgBAKAKQALALgBANQABAPgLAJQgHAIgKACIgHABQgNAAgKgLg");
	this.shape_1.setTransform(-120,243.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AgXAZQgLgLABgOQgBgNALgLQAKgJANgBQAOABAKAJQALALgBANQABAOgLALQgKAKgOgBQgNABgKgKg");
	this.shape_2.setTransform(-120,186);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("AgXAZQgLgKABgPQgBgNALgLQAKgKANAAQAOAAAKAKQALALgBANQABAPgLAKQgKAJgOABQgNgBgKgJg");
	this.shape_3.setTransform(-120,122.8);

	this.text = new cjs.Text("Puede estar mal ubicado en la función actual.", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 561;
	this.text.parent = this;
	this.text.setTransform(-107.7,233.6);

	this.text_1 = new cjs.Text("Se le reconoce potencial, pero no ha alcanzado los resultados esperados. ", "17px 'Arial'", "#333333");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 517;
	this.text_1.parent = this;
	this.text_1.setTransform(-107.7,176.3);

	this.text_2 = new cjs.Text("No ha tenido la oportunidad o el tiempo para desempeñarse adecuadamente en su función. ", "17px 'Arial'", "#333333");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 575;
	this.text_2.parent = this;
	this.text_2.setTransform(-107.7,113.4);

	this.text_3 = new cjs.Text("Caso a revisar (Enigma)", "bold 40px 'Arial'", "#333333");
	this.text_3.lineHeight = 47;
	this.text_3.lineWidth = 911;
	this.text_3.parent = this;
	this.text_3.setTransform(3.1,5.7,0.518,0.518);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1E2A8").s().p("Egl5ADIIgLAAQg3gDgpgpQgtgtAAg+IAAj4MBQjAAAIAAD3QAAA/gsAtQgtAsg/AAg");
	this.shape_4.setTransform(130.1,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEFEF").s().p("ABZA3QgOgTgSgSQhChChcgGQBlABBHBHQASASANATg");
	this.shape_5.setTransform(510.4,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A2D7E9").s().p("AgYAYQgKgKAAgOQAAgNAKgKIAHgGQAIgEAJAAQAOAAAKAKQALAKAAANQAAAOgLAKQgHAIgKACIgHAAQgOAAgKgKg");
	this.shape_6.setTransform(-160.2,257);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2D7E9").s().p("AgYAYQgKgKAAgOQAAgNAKgKIAHgGQAIgEAJAAQAOAAAKAKQALAKAAANQAAAOgLAKQgHAIgKACIgHAAQgOABgKgLg");
	this.shape_7.setTransform(-160.2,201.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2D7E9").s().p("AgYAYQgKgJAAgPQAAgNAKgKQAKgLAOABQAOgBAKALQALAKAAANQAAAPgLAJQgKALgOAAQgOAAgKgLg");
	this.shape_8.setTransform(-160.2,164);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A2D7E9").s().p("AgYAYQgKgKAAgOQAAgNAKgKQAKgKAOAAQAOAAAKAKQALAKAAANQAAAOgLAKQgKAKgOAAQgOAAgKgKg");
	this.shape_9.setTransform(-160.2,108.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A2D7E9").s().p("Egl5ADIIgLAAQg3gDgpgpQgtgtAAg+IAAj4MBQjAAAIAAD3QAAA/gsAtQgtAsg/AAg");
	this.shape_10.setTransform(130.1,20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6CBACB").s().p("AgYAZQgKgKAAgPQAAgNAKgLIAHgEQAIgGAJAAQAOABAKAJQALALAAANQAAAPgLAKQgHAHgKACIgHABQgOgBgKgJg");
	this.shape_11.setTransform(-160.2,297.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6CBACB").s().p("AgYAZQgKgKAAgPQAAgNAKgLIAHgEQAIgGAJAAQAOAAAKAKQALALAAANQAAAPgLAKQgHAHgKACIgHABQgOgBgKgJg");
	this.shape_12.setTransform(-160.2,258.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6CBACB").s().p("AgYAZQgKgLAAgOQAAgNAKgLIAHgEQAIgGAJAAQAOAAAKAKQALALAAANQAAAOgLALQgHAHgKACIgHABQgOgBgKgJg");
	this.shape_13.setTransform(-160.2,202.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6CBACB").s().p("AgYAYQgKgJAAgPQAAgNAKgLIAHgFQAIgEAJAAQAOgBAKAKQALALAAANQAAAPgLAJQgHAIgKACIgHABQgOAAgKgLg");
	this.shape_14.setTransform(-160.2,162.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6CBACB").s().p("AgYAZQgKgKAAgPQAAgNAKgLQAKgJAOgBQAOABAKAJQALALAAANQAAAPgLAKQgKAKgOAAQgOAAgKgKg");
	this.shape_15.setTransform(-160.2,125.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6CBACB").s().p("AgYAZQgKgLAAgOQAAgNAKgLQAKgKAOAAQAOAAAKAKQALALAAANQAAAOgLALQgKAJgOABQgOgBgKgJg");
	this.shape_16.setTransform(-160.2,88.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6CBACB").s().p("Egl5ADIIgLAAQg3gDgpgpQgtgtAAg+IAAj4MBQjAAAIAAD3QAAA/gsAtQgtAsg/AAg");
	this.shape_17.setTransform(130.1,20.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0878B").s().p("Egl5ADIIgLAAQg3gDgpgpQgtgtAAg+IAAj4MBQjAAAIAAD3QAAA/gsAtQgtAsg/AAg");
	this.shape_18.setTransform(130.1,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E0878B").s().p("AgoApQgSgRABgYQgBgXASgRQARgRAXAAQAYAAARARQASARAAAXQAAAYgSARQgRARgYAAQgXAAgRgRg");
	this.shape_19.setTransform(-144.1,227.3,0.59,0.59);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0878B").s().p("AgoApQgSgRABgYQgBgXASgRQARgRAXAAQAYAAARARQASARAAAXQAAAYgSARQgRARgYAAQgXAAgRgRg");
	this.shape_20.setTransform(-144.1,190.9,0.59,0.59);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E0878B").s().p("AgoApQgSgRABgYQgBgXASgRQARgRAXAAQAYAAARARQASARAAAXQAAAYgSARQgRARgYAAQgXAAgRgRg");
	this.shape_21.setTransform(-144.1,152.4,0.59,0.59);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0878B").s().p("AgoApQgSgRABgYQgBgXASgRQARgRAXAAQAYAAARARQASARAAAXQAAAYgSARQgRARgYAAQgXAAgRgRg");
	this.shape_22.setTransform(-144.1,97.6,0.59,0.59);

	this.text_4 = new cjs.Text("Sus resultados no siempre cumplen con las expectativas del puesto en tiempo, calidad y/o forma.", "17px 'Arial'", "#333333");
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 580;
	this.text_4.parent = this;
	this.text_4.setTransform(-131.7,88.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BED19D").s().p("AgXAYQgLgJABgPQgBgNALgLIAGgFQAIgEAJAAQAOgBAKAKQALALgBANQABAPgLAJQgHAIgKACIgHABQgNAAgKgLg");
	this.shape_23.setTransform(-145.2,243.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BED19D").s().p("AgXAYQgLgKABgOQgBgNALgKQAKgKANAAQAOAAAKAKQALAKgBANQABAOgLAKQgKAKgOAAQgNAAgKgKg");
	this.shape_24.setTransform(-145.2,167.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BED19D").s().p("AgXAZQgLgKABgPQgBgNALgLQAKgKANAAQAOAAAKAKQALALgBANQABAPgLAKQgKAJgOABQgNgBgKgJg");
	this.shape_25.setTransform(-145.2,110.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BED19D").s().p("Egl5ADIIgLAAQg3gDgpgpQgtgtAAg+IAAj4MBQjAAAIAAD3QAAA/gsAtQgtAsg/AAg");
	this.shape_26.setTransform(130.1,20.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#85C8DA").s().p("AgXAZQgLgKABgPQgBgNALgLIAGgEQAIgGAJAAQAOAAAKAKQALALgBANQABAPgLAKQgHAHgKACIgHABQgNgBgKgJg");
	this.shape_27.setTransform(-139.8,251.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#85C8DA").s().p("AgXAYQgLgKABgOQgBgNALgKIAGgGQAIgEAJAAQAOAAAKAKQALAKgBANQABAOgLAKQgHAIgKACIgHAAQgNAAgKgKg");
	this.shape_28.setTransform(-139.8,212);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#85C8DA").s().p("AgXAZQgLgKABgPQgBgNALgLIAGgEQAIgGAJAAQAOABAKAJQALALgBANQABAPgLAKQgHAHgKACIgHABQgNAAgKgKg");
	this.shape_29.setTransform(-139.8,174.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#85C8DA").s().p("AgXAZQgLgKABgPQgBgNALgLQAKgJANgBQAOABAKAJQALALgBANQABAPgLAKQgKAKgOAAQgNAAgKgKg");
	this.shape_30.setTransform(-139.8,136.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#85C8DA").s().p("AgXAZQgLgLABgOQgBgNALgLQAKgKANABQAOgBAKAKQALALgBANQABAOgLALQgKAJgOABQgNgBgKgJg");
	this.shape_31.setTransform(-139.8,98.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#85C8DA").s().p("Egl5ADIIgLAAQg3gDgpgpQgtgtAAg+IAAj4MBQjAAAIAAD3QAAA/gsAtQgtAsg/AAg");
	this.shape_32.setTransform(130.1,20.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC33").s().p("AgXAYQgLgKAAgOQAAgNALgKIAGgFQAIgFAJgBQAOAAAKALQAKAKAAANQAAAOgKAKQgIAIgJACIgHAAQgOABgJgLg");
	this.shape_33.setTransform(-142.8,255);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC33").s().p("AgXAYQgLgKAAgOQAAgNALgKIAGgGQAIgEAJAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgIAIgJACIgHAAQgOABgJgLg");
	this.shape_34.setTransform(-142.8,217.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC33").s().p("AgXAYQgLgKAAgOQAAgNALgKQAJgKAOAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgOAAgJgKg");
	this.shape_35.setTransform(-142.8,178.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC33").s().p("AgXAYQgLgJAAgPQAAgNALgKQAJgLAOABQAOgBAKALQAKAKAAANQAAAPgKAJQgKAKgOAAQgOAAgJgKg");
	this.shape_36.setTransform(-142.8,121.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC33").s().p("AgXAYQgLgJAAgPQAAgNALgKIAGgGQAIgEAJAAQAOgBAKALQAKAKAAANQAAAPgKAJQgIAIgJACIgHAAQgOAAgJgKg");
	this.shape_37.setTransform(-142.8,269.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC33").s().p("AgXAZQgLgKAAgPQAAgNALgLIAGgEQAIgGAJAAQAOAAAKAKQAKALAAANQAAAPgKAKQgIAHgJACIgHABQgOgBgJgJg");
	this.shape_38.setTransform(-142.8,230.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC33").s().p("AgXAYQgLgJAAgPQAAgNALgKIAGgGQAIgEAJAAQAOgBAKALQAKAKAAANQAAAPgKAJQgIAIgJACIgHABQgOAAgJgLg");
	this.shape_39.setTransform(-142.8,193.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCC33").s().p("AgXAZQgLgLAAgOQAAgNALgLQAJgKAOABQAOgBAKAKQAKALAAANQAAAOgKALQgKAJgOABQgOgBgJgJg");
	this.shape_40.setTransform(-142.8,154.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC33").s().p("AgXAZQgLgKAAgPQAAgNALgLQAJgKAOAAQAOAAAKAKQAKALAAANQAAAPgKAKQgKAJgOABQgOgBgJgJg");
	this.shape_41.setTransform(-142.8,97.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text_3,p:{scaleX:0.518,scaleY:0.518,x:3.1,y:5.7,text:"Caso a revisar (Enigma)",font:"bold 40px 'Arial'",lineHeight:46.7,lineWidth:911}},{t:this.text_2,p:{x:-107.7,y:113.4,text:"No ha tenido la oportunidad o el tiempo para desempeñarse adecuadamente en su función. ",lineWidth:575}},{t:this.text_1,p:{scaleX:1,scaleY:1,x:-107.7,y:176.3,text:"Se le reconoce potencial, pero no ha alcanzado los resultados esperados. ",font:"17px 'Arial'",lineHeight:19,lineWidth:517}},{t:this.text,p:{x:-107.7,y:233.6,text:"Puede estar mal ubicado en la función actual.",lineWidth:561,scaleX:1,scaleY:1,font:"17px 'Arial'",color:"#333333",lineHeight:19}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_5},{t:this.shape_10},{t:this.text_1,p:{scaleX:0.518,scaleY:0.518,x:3.1,y:5.7,text:"Talento en crecimiento\n",font:"bold 40px 'Arial'",lineHeight:46.7,lineWidth:911}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.text,p:{x:-147,y:96.7,text:"Tiene potencial probado para desempeñar diferentes roles y responsabilidades.\n\nEs agente de cambio, no solo identifica la necesidad sino que lidera el cambio.\n\nPosee influencia y liderazgo, siendo identificado como un elemento clave en su ámbito de desempeño.\n\nTiene capacidad para desarrollar competencias en otros ámbitos.",lineWidth:596,scaleX:1,scaleY:1,font:"17px 'Arial'",color:"#333333",lineHeight:19}}]},1).to({state:[{t:this.shape_5},{t:this.shape_17},{t:this.text_1,p:{scaleX:0.518,scaleY:0.518,x:63.1,y:5.7,text:"Futuro Líder\n\n",font:"bold 40px 'Arial'",lineHeight:46.7,lineWidth:911}},{t:this.text,p:{x:-147,y:77.5,text:"Excelente desempeño en cualquier tipo de tarea.\n\nExcelente trabajando bajo presión.\n\nCapacidad para tener mayores responsabilidades.\n\nAgente de cambio; influye sobre los demás actuando como líder y modelo a seguir.\n\nSe adapta fácilmente a nuevas situaciones.\n\nFoco de atención de empresas competidoras.",lineWidth:596,scaleX:1,scaleY:1,font:"17px 'Arial'",color:"#333333",lineHeight:19}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_5},{t:this.text_4},{t:this.text_3,p:{scaleX:1,scaleY:1,x:-131.7,y:142.7,text:"Obtiene resultados con un mayor uso de los recursos esperados.",font:"17px 'Arial'",lineHeight:28,lineWidth:569}},{t:this.text_2,p:{x:-132.7,y:216.7,text:"Le cuesta trabajo comprender y adaptar los aprendizajes necesarios para desarrollar nuevos retos encomendados.",lineWidth:563}},{t:this.text_1,p:{scaleX:1,scaleY:1,x:-131.7,y:180.8,text:"Sus acciones no se ven concretadas con el desempeño esperado.",font:"17px 'Arial'",lineHeight:19,lineWidth:561}},{t:this.shape_22},{t:this.shape_21,p:{x:-144.1,y:152.4}},{t:this.shape_20,p:{x:-144.1,y:190.9}},{t:this.shape_19,p:{x:-144.1,y:227.3}},{t:this.shape_18},{t:this.text,p:{x:-47.3,y:5.7,text:"Desempeño inconsistente (Dilema)",lineWidth:911,scaleX:0.518,scaleY:0.518,font:"bold 40px 'Arial'",color:"#FFFFFF",lineHeight:46.7}}]},1).to({state:[{t:this.shape_5},{t:this.shape_26},{t:this.text_1,p:{scaleX:0.518,scaleY:0.518,x:3.1,y:5.7,text:"Colaborador consistente",font:"bold 40px 'Arial'",lineHeight:46.7,lineWidth:911}},{t:this.text,p:{x:-132.9,y:100.2,text:"Realiza sus funciones de manera profesional con el desempeño esperado para su puesto.\n\nSe percibe como alguien que pudiera tener las competencias para adquirir nuevas responsabilidades en su puesto o en puestos de mayor responsabilidad.\n\nNo es un agente de cambio, pero se adapta a los cambios necesarios para dar los resultados esperados.",lineWidth:575,scaleX:1,scaleY:1,font:"17px 'Arial'",color:"#333333",lineHeight:19}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_5},{t:this.shape_32},{t:this.text_1,p:{scaleX:0.518,scaleY:0.518,x:63.1,y:5.7,text:"Alto impacto\n\n\n",font:"bold 40px 'Arial'",lineHeight:46.7,lineWidth:911}},{t:this.text,p:{x:-126.6,y:89.5,text:"Excede los resultados esperados en su posición.\n\nEs un experto en su área, garantizando el logro de resultados.\n\nPuede enfrentar diversas situaciones/proyectos sin problema.\n\nEs adaptable y confiable.\n\nPuede estar en proceso de desarrollo para ocupar puestos de mayor responsabilidad.",lineWidth:596,scaleX:1,scaleY:1,font:"17px 'Arial'",color:"#333333",lineHeight:19}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_5},{t:this.text_1,p:{scaleX:1,scaleY:1,x:-95.7,y:117,text:"Está por debajo de los estándares de desempeño de su puesto.\n\nNo cumple con las expectativas esperadas en tiempo y forma.\n\nMuestra limitada capacidad y/o agilidad de aprendizaje.",font:"17px 'Arial'",lineHeight:19,lineWidth:580}},{t:this.shape_21,p:{x:-108.1,y:126.4}},{t:this.shape_18},{t:this.text,p:{x:48.7,y:5.7,text:"Bajo desempeño",lineWidth:911,scaleX:0.518,scaleY:0.518,font:"bold 40px 'Arial'",color:"#FFFFFF",lineHeight:46.7}},{t:this.shape_20,p:{x:-108.1,y:162.9}},{t:this.shape_19,p:{x:-108.1,y:201.8}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text_1,p:{scaleX:0.518,scaleY:0.518,x:28.3,y:5.7,text:"Profesional efectivo\n",font:"bold 40px 'Arial'",lineHeight:46.7,lineWidth:911}},{t:this.text,p:{x:-130.5,y:112.2,text:"Desempeña las funciones estándares de su puesto con un nivel de cumplimiento aceptable.\n\nNo es visto como líder en su área.\n\nLe cuesta trabajo adaptarse a nuevas situaciones en su ámbito de acción.\n\nLe cuesta trabajo aprender nuevas formas o métodos para mejorar su desempeño o realizar nuevas tareas.",lineWidth:575,scaleX:1,scaleY:1,font:"17px 'Arial'",color:"#333333",lineHeight:19}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text_1,p:{scaleX:0.518,scaleY:0.518,x:28.3,y:5.7,text:"Profesional experto\n",font:"bold 40px 'Arial'",lineHeight:46.7,lineWidth:911}},{t:this.text,p:{x:-130.5,y:88.2,text:"Conoce a la perfección el trabajo que desempeña con excelentes resultados.\n\nEs muy valioso para la organización ya que domina su área de influencia.\n\nEspecialista experto y reconocido en su área de acción.\n\nEs un elemento difícil de reemplazar.\n\nLe cuesta trabajo desaprender para adoptar nuevas formas o métodos para mejorar su desempeño o realizar nuevas tareas.\n",lineWidth:575,scaleX:1,scaleY:1,font:"17px 'Arial'",color:"#333333",lineHeight:19}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).wait(1));

	// Sólo ventana
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BDCCD4").ss(1,1,1,3,true).p("Egw8gajMBh5AAAQBnAABJBJQBKBJAABoMAAAAtTQAABohKBJQhJBJhnAAMhh5AAAQhnAAhKhJQhJhJAAhoMAAAgtTQAAhoBJhJQBKhJBnAAg");
	this.shape_42.setTransform(135.5,169.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3F3F3").s().p("Egw8AakQhnAAhKhJQhJhJAAhoMAAAgtTQAAhoBJhJQBKhJBnAAMBh5AAAQBnAABJBJQBKBJAABoMAAAAtTQAABohKBJQhJBJhnAAg");
	this.shape_43.setTransform(135.5,169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).wait(9));

	// ID
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231F20").s().p("AhJBuQgHgBgFgFQgFgGABgHIAAAAQAAgHAGgFQAFgFAHABQAcACAeAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAIgBAAQgeAAgdgCgAAkBqQgFgEAAgIIAAAAQgBgHAFgFQAFgGAHAAQAfgCAcgDQAHAAAGAFQAFAEABAHIAAAAQABAHgFAGQgEAGgIAAQgdAEgfABIgBAAQgHAAgFgFgAiGBoQgfgEgdgGQgHgCgEgGQgEgGACgHQABgHAGgEQAHgEAHABQAbAHAeAEQAHABAEAFQAFAGgBAHIAAAAQgBAHgGAFQgEADgGAAIgDAAgACeBfQgGgEgBgHIAAAAQgBgHAEgGQAEgGAHgCQAegGAbgHQAHgCAGADQAGAEACAGIAAABQACAHgDAGQgDAGgHACQgdAJggAGIgDAAQgFAAgFgDgAj+BNQgkgMgUgOQgGgEgCgHQgBgHAEgGIABgCQAEgFAGgBQAIgBAGAEQARAMAeAKQAHACADAHQAEAGgDAHQgCAHgHADQgDACgEAAIgGgBgAEWA9QgGgCgEgGIAAgBQgDgGACgHQACgHAGgDQAbgOACgPQAAgEADgFQgGAAgEgFQgOgNgfgMQgGgDgDgGQgDgHACgGIAAgBQADgHAHgDQAGgCAHACQAnAPASATQAFAFAAAHQAAAGgDAEQAGAAAEAFQAFAFAAAGQADAigyAaQgEACgEAAIgGgBgAlEADIgFgCQgGgCgCgHQgDgHADgGQAMgZAtgUQAGgDAHADQAHACADAHQADAHgDAGQgDAHgGADQgeANgJAPQgDAGgHACIgGABIgDAAgAjgg3QgGgEgCgHIAAAAQgCgHAEgGQAEgGAHgCQAdgHAfgFQAIgBAFAEQAGAEABAHIAAAAQACAHgFAGQgEAGgHABQgeAFgcAHIgEABQgFAAgEgDgADIg4QgcgGgfgFQgHgBgEgGQgEgFAAgHIAAAAQABgIAGgEQAGgEAHABQAhAEAdAHQAHACAEAGQAEAHgCAHIAAABQgCAGgGAEQgEACgFAAIgEgBgAhrhMQgFgFgBgHQAAgHAEgGQAFgFAHgBQAegDAggBQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAFgHABQgfABgdACIgBAAQgHAAgFgEgABThKQgdgBgegBQgHAAgFgFQgFgFAAgHIAAgBQAAgHAFgFQAFgFAHAAQAgAAAdACQAIABAEAGQAFAFAAAHIAAABQgBAHgFAEQgFAFgHAAIgBgBg");
	this.shape_44.setTransform(-375,376.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAIBSQgGgFgGAAQgeAAgcgCQgHgBgFAFQgGAFAAAHIgZgCQABgHgEgGQgFgFgHgBQgegEgbgHQgHgBgGAEQgHAEgBAHIgXgGIgCgBQADgHgEgGQgDgHgHgCQgegKgRgMQgGgEgIABQgGABgEAFQgJgLgBgLQAEABAFgCQAHgCADgGQAJgPAegNQAGgDADgHQADgGgDgHIAZgJQACAHAGAEQAGAEAIgCQAbgHAegFQAHgBAEgGQAFgGgBgHIAAAAIAZgDQABAHAFAFQAGAFAHgBQAdgCAfgCQAIAAAFgFQAEgFAAgHIAPAAIAJAAQAAAHAFAFQAFAFAHAAQAeABAdABQAHABAGgFQAFgEABgHIAYADQAAAHAEAFQAEAGAHABQAfAFAcAGQAHACAGgDQAGgEACgGIAGABIAPAFQgCAGADAHQADAGAGADQAfAMAOANQAEAFAGAAQgDAFAAAEQgCAPgaAOQgHADgCAHQgCAHADAGIgZAJQgCgGgGgEQgGgDgHACQgbAHgeAGQgHACgEAGQgEAGABAHIgaADQgBgHgFgEQgGgFgHAAQgcADgfACQgHAAgFAGQgFAFABAHIgbAAQAAgHgFgFg");
	this.shape_45.setTransform(-375.9,376.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44}]}).to({state:[]},1).to({state:[]},3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.9,-517.6,1632.7,905);


(lib.desempeñoanimado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AtvAAIbeAA");
	this.shape.setTransform(106.5,216.7);

	this.instance = new lib.M03_TMR_DESEMPEÑO();
	this.instance.parent = this;
	this.instance.setTransform(110.7,98.6,0.505,0.505,0,0,0,117.1,110.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFE5DF").s().p("AlaM0QifhEh7h7Qh7h7hEifQhGimAAi1QAAi0BGilQBEigB7h8QB7h6CfhEQCmhGC0AAQC1AAClBGQCgBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7igBEQilBGi1AAQi0AAimhGg");
	this.shape_1.setTransform(106.5,81.4,0.811,0.811);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AljNKQikhGh+h+Qh/h+hFikQhIiqAAi6QAAi5BIiqQBFikB/h+QB+h/CkhFQCqhIC5AAQC6AACqBIQCjBFCAB/QB9B+BGCkQBICqAAC5QAAC6hICqQhGCkh9B+QiAB+ijBGQiqBIi6AAQi5AAiqhIg");
	this.shape_2.setTransform(106.5,81.3,0.89,0.89);

	this.text = new cjs.Text("Cumplimiento de Objetivos y Principios\n", "16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 187;
	this.text.parent = this;
	this.text.setTransform(106.5,229.3);

	this.text_1 = new cjs.Text("DESEMPEÑO", "25px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 181;
	this.text_1.parent = this;
	this.text_1.setTransform(106.5,183.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AD0PRIAA+iIK9AAQAyABAjAhQAjAiAAAvIAAa9QAAAvgjAiQgjAigygBgAuwPRQgyABgjgiQgjgiAAgvIAA69QAAgvAjgiQAjghAygBISkAAIAAeig");
	this.shape_3.setTransform(106.5,196.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.text_1},{t:this.text},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,302.9);


(lib.retosactualesfuturosmod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.desempeñoanimado("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(77.4,179.3,1,1,0,0,0,106.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.1,27.8,213,302.9);


(lib.perfolescpacidadesmod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.matriz9animado("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(129.5,178.2,1,1,0,0,0,106.5,147.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23,31,213,294.4);


(lib.mc12T2M2TMRmod3t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_205 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(205).call(this.frame_205).wait(1));

	// m2t1mc1 txt1
	this.instance = new lib.iconoinfoposiciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(285.6,68.4,1,1,0,0,0,187,42.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).to({x:215.6,alpha:1},15,cjs.Ease.get(1)).wait(87));

	// CIRCULO1
	this.instance_1 = new lib.prioridadesmod3t4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(194.4,188,0.3,0.3,0,0,0,91.4,91.4);
	this.instance_1.alpha = 0.102;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({regX:91.5,scaleX:1.2,scaleY:1.2,y:167.9,alpha:1},11,cjs.Ease.get(1)).to({regX:91.4,scaleX:1,scaleY:1,x:194.3,y:188},5,cjs.Ease.get(1)).wait(70));

	// signo de mas animado
	this.instance_2 = new lib.signodemasanimado("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.2,235.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(137).to({_off:false},0).to({x:276.2,alpha:1},7,cjs.Ease.get(1)).wait(62));

	// CIRCULO2
	this.instance_3 = new lib.retosactualesfuturosmod3t4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(462.8,188,0.3,0.3,0,0,0,91.5,91.5);
	this.instance_3.alpha = 0.23;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(145).to({_off:false},0).to({regX:91.4,regY:91.4,scaleX:1.2,scaleY:1.2,y:168,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:188},5,cjs.Ease.get(1)).wait(46));

	// flecha animadas
	this.instance_4 = new lib.flechaanimadas("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(392.2,237.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(161).to({_off:false},0).to({x:592.2,alpha:1},7,cjs.Ease.get(1)).wait(38));

	// CIRCULO3
	this.instance_5 = new lib.perfolescpacidadesmod3t4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(731.1,187.9,0.3,0.3,0,0,0,91.4,91.4);
	this.instance_5.alpha = 0.23;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(169).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:188,alpha:1},12,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(21));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(206));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,506,50,34);


(lib.M3T4mc43resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// pregunta
	this.instance = new lib.pregunta1tema2mod3t4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.3,80.1,1,1,0,0,0,408.3,44.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:441.3,alpha:1},18,cjs.Ease.get(1)).wait(14));

	// reto
	this.instance_1 = new lib.sssssmod3t4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(855.9,360.8,1,1,0,0,0,257.5,142);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:595.9,alpha:1},24,cjs.Ease.get(1)).wait(8));

	// instrucciones
	this.instance_2 = new lib.instruccionesmc1t2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(398.2,-3.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(8));

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCaQg/AAguguQgtgsAAhAQAAg+AtguQAugtA/AAIA9AAQBAAAAtAtQAtAuAAA+QAABAgtAsQgtAuhAAAg");
	this.shape.setTransform(-48.2,462.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.6,40.3,1338.2,437.2);


(lib.M3T4mc34resp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// pregunta
	this.instance = new lib.pregunta1tema2retoo4resp("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.3,80.1,1,1,0,0,0,408.3,44.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:441.3,alpha:1},18,cjs.Ease.get(1)).wait(14));

	// reto
	this.instance_1 = new lib.caja_respuestasM2T2mc3retoo4resp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(855.9,360.8,1,1,0,0,0,257.5,142);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:594.7,y:374.3,alpha:1},24,cjs.Ease.get(1)).wait(8));

	// instrucciones
	this.instance_2 = new lib.instruccionesmc1t2TMRretoo4resp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.2,66.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(8));

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCaQg/AAguguQgtgsAAhAQAAg+AtguQAugtA/AAIA9AAQBAAAAtAtQAtAuAAA+QAABAgtAsQgtAuhAAAg");
	this.shape.setTransform(-48.2,462.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-24.6,1318.5,502.2);


(lib.grafica1banderillasroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// instrucciones fijas
	this.instance = new lib.flechamueveroll24ene("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(562.3,-7.7,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic sobre cada categoría de la matriz 9-Box para conocer más.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 590;
	this.text.parent = this;
	this.text.setTransform(8.6,-17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

	// contenido arriba
	this.instance_1 = new lib.M03_TMR_TABLA4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.7,210.7,0.804,0.804,0,0,0,312,157.6);

	this.text_1 = new cjs.Text("Los tres cuadrantes marcados en azul, consolidan a los colaboradores identificados como “Top Talent” de la compañía.", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 196;
	this.text_1.parent = this;
	this.text_1.setTransform(383.5,140.2);

	this.text_2 = new cjs.Text("“Top Talent”", "18px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 202;
	this.text_2.parent = this;
	this.text_2.setTransform(479.2,63.9);

	this.text_3 = new cjs.Text("Potencial básico\n", "18px 'Arial'", "#333333");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 97;
	this.text_3.parent = this;
	this.text_3.setTransform(-248.3,271.5);

	this.text_4 = new cjs.Text("Potencial medio", "18px 'Arial'", "#333333");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 97;
	this.text_4.parent = this;
	this.text_4.setTransform(-248.3,193.8);

	this.text_5 = new cjs.Text("Alto Potencial ", "18px 'Arial'", "#333333");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 19;
	this.text_5.lineWidth = 97;
	this.text_5.parent = this;
	this.text_5.setTransform(-248.3,108.7);

	this.text_6 = new cjs.Text("Desempeño alto\n", "18px 'Arial'", "#333333");
	this.text_6.lineHeight = 22;
	this.text_6.lineWidth = 159;
	this.text_6.parent = this;
	this.text_6.setTransform(173.4,52.6);

	this.text_7 = new cjs.Text("Desempeño medio", "18px 'Arial'", "#333333");
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 159;
	this.text_7.parent = this;
	this.text_7.setTransform(-5.6,52.6);

	this.text_8 = new cjs.Text("Desempeño bajo", "18px 'Arial'", "#333333");
	this.text_8.lineHeight = 22;
	this.text_8.lineWidth = 276;
	this.text_8.parent = this;
	this.text_8.setTransform(-167.2,52.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AOAHiQgHAAgFgFQgGgFAAgHQAAgHAGgFQAFgFAHgBIA8AAQAHABAFAFIABABQAEAEAAAHQAAAHgFAFQgFAFgHAAgAMIHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAKQHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAIYHiQgHAAgFgFQgGgFAAgHQAAgHAGgFQAFgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAGgHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAEoHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgACwHiQgHAAgFgFQgGgFAAgHQAAgHAGgFQAFgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAA4HiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAg/HiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAGABAFAFQAFAFAAAHQAAAHgFAFQgFAFgGAAgAi3HiQgHAAgFgFQgGgFAAgHQAAgHAGgFQAFgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAkvHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAmnHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAofHiQgHAAgFgFQgGgFAAgHQAAgHAGgFQAFgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAqXHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAsPHiQgHAAgGgFQgFgFAAgHQAAgHAFgFQAGgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAuHHiQgHAAgFgFQgGgFAAgHQAAgHAGgFQAFgFAHgBIA8AAQAHABAFAFQAFAFAAAHQAAAHgFAFQgFAFgHAAgAvIHiQgHAAgFgFQgFgFAAgHIAAg3QAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHIAAAsQAEAEAAAHQAAAHgFAFQgFAFgHAAgAO9GuQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAvUFqQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHIAAA8QAAAHgGAFQgFAFgHAAQgHAAgFgFgAO9E2QgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAvUDyQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAGAFAAAHIAAA8QAAAHgGAFQgFAFgHABQgHgBgFgFgAO9C+QgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAvUB6QgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHIAAA8QAAAHgGAFQgFAFgHABQgHgBgFgFgAO9BGQgGgFAAgHIAAg7QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA7QAAAHgFAFQgFAFgHABQgHgBgFgFgAvUACQgFgEAAgHIAAg8QAAgHAFgFQAFgFAHAAQAHAAAFAFQAGAFAAAHIAAA8QAAAHgGAEQgFAFgHAAQgHAAgFgFgAO9gxQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAvUh1QgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAGAFAAAHIAAA8QAAAHgGAFQgFAFgHABQgHgBgFgFgAO9ipQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHAAQgHAAgFgFgAvUjtQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHgBQAHABAFAFQAGAFAAAHIAAA8QAAAHgGAFQgFAFgHABQgHgBgFgFgAO9khQgGgFAAgHIAAg8QAAgHAGgFQAFgFAHgBQAHABAFAFQAFAFAAAHIAAA8QAAAHgFAFQgFAFgHABQgHgBgFgFgAvUllQgFgFAAgHIAAg8QAAgHAFgFQAFgFAHAAQgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABIg7AAQAHAAAEAFQAGAFAAAHIAAA8QAAAHgGAFQgFAFgHAAQgHAAgFgFgAO9mZQgGgFAAgHIAAgZQgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIASAAQAHAAAFAFQAFAFAAAHIAAArQAAAHgFAFQgFAFgHAAQgHAAgFgFgAM/m+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgALHm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHABgAJPm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgAHXm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgAFfm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHABgADnm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgABvm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgAgIm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA7AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHABgAiAm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgAj4m+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgAlwm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHABgAnom+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgApgm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABgArYm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAGAFQAFAFAAAHQAAAHgFAFQgGAFgHABgAtQm+QgHgBgFgFQgFgFAAgHQAAgHAFgFQAFgFAHAAIA8AAQAHAAAFAFQAGAFAAAHQAAAHgGAFQgFAFgHABg");
	this.shape.setTransform(479.6,80.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,204,0.498)").s().p("ANVHRQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgFAFQgGAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgFAFQgGAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgGgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgFAFQgGAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgFAFQgGAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgGAFQgFAFAAAHIgZAAQAAgHgFgFQgFgFgHgBIg8AAQgHABgFAFQgGAFAAAHIgZAAQAAgHgEgEIAAgsQAAgHgGgFQgFgFgHAAIAAgaQAHAAAFgFQAGgFAAgHIAAg8QAAgHgGgFQgFgFgHAAIAAgZQAHgBAFgFQAGgFAAgHIAAg8QAAgHgGgFQgFgFgHgBIAAgYQAHgBAFgFQAGgFAAgHIAAg8QAAgHgGgFQgFgFgHAAIAAgaQAHAAAFgFQAGgEAAgHIAAg8QAAgHgGgFQgFgFgHAAIAAgZQAHgBAFgFQAGgFAAgHIAAg8QAAgHgGgFQgFgFgHgBIAAgYQAHgBAFgFQAGgFAAgHIAAg8QAAgHgGgFQgFgFgHgBIAAgZQAHAAAFgFQAGgFAAgHIAAg8QAAgHgGgFQgEgFgHAAIA7AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAGgFQAFgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAGgFQAFgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA7AAQAHgBAGgFQAFgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAGgFQAFgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAGgFQAFgFAAgHIAZAAQAAAHAFAFQAFAFAHABIA8AAQAHgBAFgFQAGgFAAgHIAZAAQAAAHAFAFQAFAFAHABIAAAZQAAAHAGAFQAFAFAHAAIAAAZQgHABgFAFQgGAFAAAHIAAA8QAAAHAGAFQAFAFAHABIAAAZQgHAAgFAFQgGAFAAAHIAAA8QAAAHAGAFQAFAFAHAAIAAAaQgHAAgFAFQgGAFAAAHIAAA8QAAAHAGAFQAFAFAHAAIAAAZQgHABgFAFQgGAFAAAHIAAA7QAAAHAGAFQAFAFAHABIAAAZQgHAAgFAFQgGAFAAAHIAAA8QAAAHAGAFQAFAFAHAAIAAAaQgHAAgFAFQgGAFAAAHIAAA8QAAAHAGAFQAFAFAHAAIAAAZQgHABgFAFQgGAFAAAHIAAA8QAAAHAGAFQAFAFAHABIAAASIgBgBQgFgFgHgBIg8AAQgHABgFAFQgGAFAAAHg");
	this.shape_1.setTransform(479.6,80.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.instance_1}]}).wait(1));

	// caja atras
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BDCCD4").ss(1,1,1,3,true).p("Egw8gajMBh5AAAQBnAABJBJQBKBJAABoMAAAAtTQAABohKBJQhJBJhnAAMhh5AAAQhnAAhKhJQhJhJAAhoMAAAgtTQAAhoBJhJQBKhJBnAAg");
	this.shape_2.setTransform(14.9,190.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(227,239,185,0.498)").s().p("Egw8AakQhnAAhKhJQhJhJAAhoMAAAgtTQAAhoBJhJQBKhJBnAAMBh5AAAQBnAABJBJQBKBJAABoMAAAAtTQAABohKBJQhJBJhnAAg");
	this.shape_3.setTransform(14.9,190.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-324.4,-29.5,924.6,390.8);


(lib.T3_btn_mc3MOD3a = function(mode,startPosition,loop) {
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
	this.shape.setTransform(77.5,75.8);
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
		var NumeroBotones = 9;
		var root = this;
		quitaActivos();
		var Secuencial = false;
		
		//Para hacer que los botones sean secuenciales:
		//EnSecuencia();
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
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_contenidos_MC3roll24ene();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b6 = new lib.T3_btn_mc3MOD3a();
	this.b6.parent = this;
	this.b6.setTransform(590.8,167.7,1.802,0.882,0,0,0,64.2,12.8);

	this.b5 = new lib.T3_btn_mc3MOD3a();
	this.b5.parent = this;
	this.b5.setTransform(422.6,167.7,1.802,0.882,0,0,0,64.2,12.8);

	this.b4 = new lib.T3_btn_mc3MOD3a();
	this.b4.parent = this;
	this.b4.setTransform(255.6,167.7,1.802,0.882,0,0,0,64.2,12.8);

	this.b9 = new lib.T3_btn_mc3MOD3a();
	this.b9.parent = this;
	this.b9.setTransform(590.8,252.4,1.802,0.882,0,0,0,64.2,12.8);

	this.b8 = new lib.T3_btn_mc3MOD3a();
	this.b8.parent = this;
	this.b8.setTransform(422.6,252.4,1.802,0.882,0,0,0,64.2,12.8);

	this.b7 = new lib.T3_btn_mc3MOD3a();
	this.b7.parent = this;
	this.b7.setTransform(255.6,252.4,1.802,0.882,0,0,0,64.2,12.8);

	this.b3 = new lib.T3_btn_mc3MOD3a();
	this.b3.parent = this;
	this.b3.setTransform(590.8,82.9,1.802,0.882,0,0,0,64.2,12.8);

	this.b2 = new lib.T3_btn_mc3MOD3a();
	this.b2.parent = this;
	this.b2.setTransform(422.6,82.9,1.802,0.882,0,0,0,64.2,12.8);

	this.b1 = new lib.T3_btn_mc3MOD3a();
	this.b1.parent = this;
	this.b1.setTransform(255.6,82.9,1.802,0.882,0,0,0,64.2,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b7},{t:this.b8},{t:this.b9},{t:this.b4},{t:this.b5},{t:this.b6}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-18.8,848.9,414);


(lib.M3t4mc2rolloversroll24ene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// botones y ventanas  menu
	this.instance = new lib.mod2t2mc3_con_todos_los_botonesroll24ene();
	this.instance.parent = this;
	this.instance.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(13));

	// grafica
	this.instance_1 = new lib.grafica1banderillasroll24ene("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({x:619.3,alpha:1},12,cjs.Ease.get(1)).wait(1));

	// header1
	this.instance_2 = new lib.no1perfilroll24ene("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.6,33.1,1,1,0,0,0,290.8,73.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:53.1,alpha:1},22,cjs.Ease.get(1)).wait(17));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-14.2,361.6,478.9);


// stage content:
(lib.AC_TMR_M03_04 = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// PAGINAS
	this.instance = new lib.mc12T2M2TMRmod3t4();
	this.instance.parent = this;
	this.instance.setTransform(17.4,40.2);

	this.instance_1 = new lib.M3t4mc2rolloversroll24ene();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,40.2);

	this.instance_2 = new lib.M3T4mc34resp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(385,288.1,1,1,0,0,0,365.4,228.3);

	this.instance_3 = new lib.M3T4mc43resp();
	this.instance_3.parent = this;
	this.instance_3.setTransform(385,288.1,1,1,0,0,0,365.4,228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// TITULO
	this.instance_4 = new lib.tema_entrada_titulo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(303.6,249.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,218,255,0.6)").ss(1,1,1).p("AhoioIDRAAIAAFRIjRAAg");
	this.shape.setTransform(-123.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhoCpIAAlRIDRAAIAAFRg");
	this.shape_1.setTransform(-123.6,16.9);

	this.instance_5 = new lib.tituloestatico();
	this.instance_5.parent = this;
	this.instance_5.setTransform(303.6,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5}]},1).wait(3));

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