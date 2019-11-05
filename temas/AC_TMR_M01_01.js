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



(lib.Módulo1 = function() {
	this.initialize(img.Módulo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,735,551);// helper functions:

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


(lib.ventana3mod1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("EA5rAc+IndAAIhqAAMgmnAAAIngAAIh4AAIjbAAIkEAAIuTAAIpeAAI00AAIr1AAQggAAgbgIQhbgZAAh2MAAAgzDMCDVAAAIAABJIAABnIAADPIAAG5IAABFIAACvIAAAEIAAEGIAAC+IAAFvIAACCIAAGLIAAItIAACmIAAAAIAAA2IAABKQAACWiWABgEhBqgYcIAAg5IAAg6IAAgXQAAh2BbgZQAagHAhgBIL1AAIU0AAIXxAAIEEAAIFTAAIHgAAMAmnAAAIBqAAINHAAQAsAAAbALQBPAhAABrIAAAXIAAA6IAAA5g");
	this.shape.setTransform(380.5,216.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,31.5,840.7,370.7);


(lib.ventana1mod1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("EA5rAc+IndAAIhqAAMgmnAAAIngAAIh4AAIjbAAIkEAAIuTAAIpeAAI00AAIr1AAQggAAgbgIQhbgZAAh2MAAAgzDMCDVAAAIAABJIAABnIAADPIAAG5IAABFIAACvIAAAEIAAEGIAAC+IAAFvIAACCIAAGLIAAItIAACmIAAAAIAAA2IAABKQAACWiWABgEhBqgYcIAAg5IAAg6IAAgXQAAh2BbgZQAagHAhgBIL1AAIU0AAIXxAAIEEAAIFTAAIHgAAMAmnAAAIBqAAINHAAQAsAAAbALQBPAhAABrIAAAXIAAA6IAAA5g");
	this.shape.setTransform(380.5,216.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,31.5,840.7,370.7);


(lib.txtprimertextogde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("También llamado Talent Management Review (TMR), es un proceso a través del cual los líderes de negocio aseguran contar con una oferta sostenible de talento adecuado, disponible en el lugar y el momento para satisfacer sus objetivos de negocio de corto y largo plazo.\n", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 457;
	this.text.parent = this;
	this.text.setTransform(9,66);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,64,461.2,137);


(lib.txt_modulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AhABzQgfgQgQgdQgQgeAAgqQAAgiAQgeQAQgfAegQQAdgQAkAAQA5AAAjAlQAkAlAAA3QAAA4gkAlQgkAlg4AAQghAAgfgPgAgqg3QgSATAAAkQAAAlASAUQASATAYABQAagBASgTQARgUAAglQAAgkgRgTQgSgVgaABQgYgBgSAVg");
	this.shape.setTransform(158,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AggCsIAAlXIBBAAIAAFXg");
	this.shape_1.setTransform(136.7,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D73D45").s().p("AhKB0QgUgLgJgUQgJgTAAgkIAAicIBCAAIAAByQAAA0ADAMQAEALAKAHQAJAHAPAAQAQAAANgJQAOgJAEgOQAFgOAAg0IAAhpIBCAAIAAD4Ig9AAIAAgmQgOAUgWAMQgVALgYAAQgaAAgTgLg");
	this.shape_2.setTransform(115.2,33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D73D45").s().p("AhaCMQgegjAAg9QAAg/AdggQAegiAuAAQApAAAeAjIAAh8IBCAAIAAFXIg+AAIAAglQgOAWgWALQgUAKgUgBQgrAAgfgigAglgPQgQARAAAlQAAAoALASQAQAZAcAAQAWABAQgUQAQgTAAgmQAAgrgPgSQgQgTgYAAQgXAAgPATg");
	this.shape_3.setTransform(85.4,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D73D45").s().p("AhACiQgfgPgQgeQgQgeAAgrQAAghAQgeQAQgeAegQQAdgQAkgBQA5ABAjAkQAkAlAAA3QAAA4gkAlQgkAmg4gBQghAAgfgPgAgqgIQgSASAAAmQAAAkASAVQASATAYAAQAaAAASgTQARgUAAgmQAAglgRgSQgSgUgaAAQgYAAgSAUgAgghrIAghFIBJAAIhBBFg");
	this.shape_4.setTransform(56.8,28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D73D45").s().p("ABlCsIAAkOIhEEOIhCAAIhDkOIAAEOIhBAAIAAlXIBoAAIA9DqIA+jqIBoAAIAAFXg");
	this.shape_5.setTransform(22,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_modulo, new cjs.Rectangle(0,0,174.8,57.6), null);


(lib.tituloestatica = function(mode,startPosition,loop) {
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
	this.shape.setTransform(-293.7,-229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.8,-229.1);

	this.text = new cjs.Text("¿En qué consiste Talent Management Review (TMR)?", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-240.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatica, new cjs.Rectangle(-300.2,-242.5,502.3,26.4), null);


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¿En qué consiste el proceso Talent Management Review (TMR)?", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(94.9,-12);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14,189.9,146.7);


(lib.Tema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.text = new cjs.Text("Introducción a Talent Management Review", "36px 'Arial'", "#606060");
	this.text.lineHeight = 47;
	this.text.lineWidth = 356;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,360.1,91.7);


(lib.Telefono = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E5153").s().p("AgIBUQgFAAgFgEQgEgEAAgFIAAiPQAAgEADgDQAEgDADAAIAVgBQAFAAAEAEQAEAEAAAFIAACOQAAALgDABg");
	this.shape.setTransform(13,22.1,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E5153").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_1.setTransform(42.6,41.4,2.472,2.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAPAAQAFAAAAAFIAAAEQAAAEgFAAg");
	this.shape_2.setTransform(42.8,35.5,2.472,2.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAPAAQAFAAAAAFIAAAEQAAAEgFAAg");
	this.shape_3.setTransform(42.8,30.2,2.472,2.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAPAAQAFAAAAAFIAAAEQAAAEgFAAg");
	this.shape_4.setTransform(42.8,24.9,2.472,2.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgFIAAgDQAAgFAFAAIAPAAQAFAAAAAFIAAADQAAAFgFAAg");
	this.shape_5.setTransform(42.8,19.8,2.472,2.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAQAAQAEAAAAAFIAAAEQAAAEgEAAg");
	this.shape_6.setTransform(34.9,35.5,2.472,2.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAQAAQAEAAAAAFIAAAEQAAAEgEAAg");
	this.shape_7.setTransform(34.9,30.2,2.472,2.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAQAAQAEAAAAAFIAAAEQAAAEgEAAg");
	this.shape_8.setTransform(34.9,24.9,2.472,2.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgFIAAgDQAAgFAFAAIAQAAQAEAAAAAFIAAADQAAAFgEAAg");
	this.shape_9.setTransform(34.9,19.8,2.472,2.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAPAAQAFAAAAAFIAAAEQAAAEgFAAg");
	this.shape_10.setTransform(27,35.5,2.472,2.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAPAAQAFAAAAAFIAAAEQAAAEgFAAg");
	this.shape_11.setTransform(27,30.2,2.472,2.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgEIAAgEQAAgFAFAAIAPAAQAFAAAAAFIAAAEQAAAEgFAAg");
	this.shape_12.setTransform(27,24.9,2.472,2.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E5153").s().p("AgHAHQgFAAAAgFIAAgDQAAgFAFAAIAPAAQAFAAAAAFIAAADQAAAFgFAAg");
	this.shape_13.setTransform(27,19.8,2.472,2.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4E5153").s().p("AgmAPQgEgBgDgDQgCgCAAgEIAAgJQAAgKAJAAIBNAAQAJAAAAAKIAAAJQAAAEgCACQgDADgEABg");
	this.shape_14.setTransform(35.4,13.4,2.472,2.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#24272A").s().p("AhuBVIgBgFIAAhzIAAgWQgBgWACgEQACgFAHgBIAHAAIC5gBQAPgBAFAIQACAEAAAEIAACWQgBALgHADIgGACIjFAAIgBAAQgJAAgCgGg");
	this.shape_15.setTransform(27.8,22.5,2.472,2.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Telefono, new cjs.Rectangle(0,0,55.7,44.9), null);


(lib.tapageneralgris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.tapakakigeneral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.tapabca2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwoG+IAAt8MAhRAAAIAAN8g");
	this.shape.setTransform(106.5,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,89.3);


(lib.tapabca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwoG+IAAt8MAhRAAAIAAN8g");
	this.shape.setTransform(106.5,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,89.3);


(lib.Silla_de_frente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D4659").s().p("AAACHQgCgCgCgIQgDgLAIgrQADgNAEgrQAEgxgDgVQgDgVgHgTQgGgQgFgGQgDgDgDgIIgCgGIARAOQAQAQACAGQAEAQACAZQACAngHAqQgRBlACAGQAAABAAABQAAABABAAQAAABAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(129,115.8,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D4659").s().p("AAACEQACgGgRhlQgHgqADgoQABgYAFgQQABgHAQgQIARgOQgCAMgGAGQgFAFgGAQQgHAUgDAUQgCAVAEAxQADApADAQQAJAogEANQgCAIgDACIAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_1.setTransform(21.9,112.6,2.472,2.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B7B8").s().p("AgLCJQgKgDADgZIAIg9QAHg5ABgaQACgxgJgLQgKgKgKgPIgIgOIAbgDIAUAHQAXALADAPQAHAZgQCnQgFArgDADQgLAEgJAAIgKgBg");
	this.shape_2.setTransform(133.1,115.2,2.472,2.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B7B8").s().p("AgICJIgKgDQgDgDgFgrQgQinAHgZQAEgPAWgLQAKgFAKgCIAbADQgMAXgQAQQgKALADAxQABAaAHA5IAIA9QADAZgKADIgKABIgKgBg");
	this.shape_3.setTransform(17.7,112.6,2.472,2.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323436").s().p("AgIAZQhMAAhBgTIgxgRQgJgFABgFQABgFAHAEQAPAJApALQA8APBEACQBGADA0gMIBGgTQAdgIAAAHQAAAHgPAEQg1APgbAFQgpAIhHAAIgIAAg");
	this.shape_4.setTransform(77,80.9,2.472,2.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D4659").s().p("AgRAeQhJgBg7gQQgegJgSgJIgBAAQgIgIAFgKQAEgKAHAHQAIAHA3AOQA+AOAuABQBHABA4gKQATgDAzgPQAlgKgQAcQhbAdhxAAIgMAAg");
	this.shape_5.setTransform(77.7,81,2.472,2.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626666").s().p("AhICjQhjgGgUgMQgSgMAGhUQAMhmABguQACgsAPgPQAKgLAPAEQAOAEALAAQDCADBKAAQAhAAALAMQAGAIADAXQAEAnACBbQADBzgIAQQgIARgjACIhTABIgqABQgvAAg4gEg");
	this.shape_6.setTransform(76.7,41.2,2.472,2.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#626666").s().p("AhcDUIhJgJQgmgDgcgYQgPgNgIgPIAAgBQgCgcAOg0QARg1ACgNQAEgRAGg/QAFg4ABgaQABgQANgPQAHgJAJgFIABgBIFlgJQAmAAAMBfQAGAzACBIIAMBWQAIA+gJAUQgJAVgMAFIgtAKQgdAHg1ACQggAChMAAQgvAAgngFg");
	this.shape_7.setTransform(74.1,128.1,2.472,2.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#717677").s().p("Ah7AgIDvhWIAIAPIj2BMIAAASg");
	this.shape_8.setTransform(36.1,221.4,2.472,2.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D4659").s().p("AiGBLIAAg+ID2hXQALAAgDABQgDAAAJAHIAJAIIgIAnIjtAvIgBAvg");
	this.shape_9.setTransform(37.2,226.2,2.472,2.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgCAdQgEgBgEgDQgDgDAAgEIAAgjQAAgEADgDQAEgEAEAAIAGAAQAEAAADAEQADADAAAEIAAAjQAAAEgDADQgDADgEABg");
	this.shape_10.setTransform(140.1,242.8,2.472,2.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#717677").s().p("AB/AjIkAhQIALgJID2BUIABAHIgBASg");
	this.shape_11.setTransform(111.1,222.7,2.472,2.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3D4659").s().p("ABvBLIAAgvIjtgvIgIguQATgHgDgBIAIgBID1BXIAAA+g");
	this.shape_12.setTransform(109.8,227.6,2.472,2.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D4659").s().p("AAgANIAAgIIgaAAIgwgRIBVADIAAAWg");
	this.shape_13.setTransform(99.7,214.8,2.472,2.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3D4659").s().p("AgqANIAAgWIBVgDIgwARIgaAAIAAAIg");
	this.shape_14.setTransform(43.3,214.5,2.472,2.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgDAcQgEAAgDgDQgDgDAAgEIAAgjQAAgEADgDQADgDAEAAIAGAAQAFAAADADQADADAAAEIAAAjQAAAEgDADQgDADgFAAg");
	this.shape_15.setTransform(35.1,224.3,2.472,2.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgDAcQgDAAgEgDQgDgDAAgEIAAgjQAAgEADgDQAEgDADAAIAHAAQAEAAADADQADADAAAEIAAAjQAAAEgDADQgDADgEAAg");
	this.shape_16.setTransform(108.1,224.3,2.472,2.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgCAZQgFAAgDgCQgDgEAAgEIAAgdQAAgEADgDQADgEAFAAIAGAAQAEAAADAEQADADAAAEIAAAdQAAAEgDAEQgDACgEAAg");
	this.shape_17.setTransform(6.2,243.4,2.472,2.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgCAcQgFAAgDgDQgDgDAAgEIAAgjQAAgEADgDQADgDAFAAIAGAAQAEAAADADQADADAAAEIAAAjQAAAEgDADQgDADgEAAg");
	this.shape_18.setTransform(73.1,256,2.472,2.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#717677").s().p("AAAAbQgFAAAAgFIAAgrQAAgFAFAAIABAAQAFAAAAAFIAAArQAAAFgFAAg");
	this.shape_19.setTransform(112.1,224.3,2.472,2.472);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#717677").s().p("AAAAbQgFAAAAgFIAAgrQAAgFAFAAIABAAQAFAAAAAFIAAArQAAAFgFAAg");
	this.shape_20.setTransform(104.3,224.3,2.472,2.472);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#717677").s().p("AAAAbQgFAAAAgFIAAgrQAAgFAFAAIABAAQAFAAAAAFIAAArQAAAFgFAAg");
	this.shape_21.setTransform(39.2,224.3,2.472,2.472);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#717677").s().p("AAAAbQgFAAAAgFIAAgrQAAgFAFAAIABAAQAFAAAAAFIAAArQAAAFgFAAg");
	this.shape_22.setTransform(31.5,224.3,2.472,2.472);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#717677").s().p("AAAAbQgGAAAAgGIAAgpQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIABAAQAGAAAAAGIAAApQAAAGgGAAg");
	this.shape_23.setTransform(11.4,243.4,2.472,2.472);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#717677").s().p("AAAAbQgGAAAAgGIAAgpQAAgGAGAAIABAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAApQAAAGgGAAg");
	this.shape_24.setTransform(1.8,243.4,2.472,2.472);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#717677").s().p("AAAAbQgGAAAAgGIAAgpQAAgGAGAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAApQAAAGgGAAg");
	this.shape_25.setTransform(145.3,243.4,2.472,2.472);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#717677").s().p("AAAAbQgGAAAAgGIAAgpQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIABAAQAGAAAAAGIAAApQAAAGgGAAg");
	this.shape_26.setTransform(135.5,243.4,2.472,2.472);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#717677").s().p("AAAAhQgGAAAAgGIAAg1QAAgGAGAAIABAAQAGAAAAAGIAAA1QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_27.setTransform(77.8,256.3,2.472,2.472);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#717677").s().p("AAAAhQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg1QAAgGAGAAIABAAQAGAAAAAGIAAA1QAAAGgGAAg");
	this.shape_28.setTransform(68,256.3,2.472,2.472);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#717677").s().p("AgbADIgegJIBiAJIASAEg");
	this.shape_29.setTransform(95.9,210.7,2.472,2.472);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#717677").s().p("AgqAAIBhgEIgYAFIhVAEg");
	this.shape_30.setTransform(46.3,211,2.472,2.472);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#717677").s().p("AgGBMIgHiXIAbAAIgJCXg");
	this.shape_31.setTransform(73.2,230.6,2.472,2.472);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#717677").s().p("AgaA4IgFgEIAAhvIA/ABIAABvQgNAHgXAAQgPAAgHgEg");
	this.shape_32.setTransform(73.6,197,2.472,2.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Silla_de_frente, new cjs.Rectangle(0,0,147.1,264.5), null);


(lib.rh3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E16F74").s().p("Ah1AVIASgRIA1A0ICSiSIARARIijCkg");
	this.shape.setTransform(49.3,65.2,0.49,0.49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E16F74").s().p("Ah1AUIASgRIA1A1ICSiSIARASIijCjg");
	this.shape_1.setTransform(49.3,48.5,0.49,0.49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E16F74").s().p("Ah1AVIASgRIA1A0ICSiSIARARIijCkg");
	this.shape_2.setTransform(49.3,31.6,0.49,0.49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0B0B0").s().p("AhBBDIAAiFICDAAIAACFg");
	this.shape_3.setTransform(45.8,33.5,0.49,0.49);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B0B0B0").s().p("AhBBDIAAiEICDAAIAACEg");
	this.shape_4.setTransform(45.8,50.2,0.49,0.49);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B0B0B0").s().p("AhBBDIAAiFICDAAIAACFg");
	this.shape_5.setTransform(45.8,67.2,0.49,0.49);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_6.setTransform(45.8,27,0.49,0.49);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_7.setTransform(39.1,27,0.49,0.49);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgRIAPAAIAAARgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_8.setTransform(39.1,33.6,0.49,0.49);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_9.setTransform(39.1,40.3,0.49,0.49);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_10.setTransform(45.8,40.3,0.49,0.49);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_11.setTransform(52.5,40.3,0.49,0.49);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgRIAPAAIAAARgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_12.setTransform(52.5,33.6,0.49,0.49);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_13.setTransform(52.5,27,0.49,0.49);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_14.setTransform(45.8,43.7,0.49,0.49);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_15.setTransform(39.1,43.7,0.49,0.49);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgQIAPAAIAAAQgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_16.setTransform(39.1,50.4,0.49,0.49);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_17.setTransform(39.1,57.1,0.49,0.49);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_18.setTransform(45.8,57.1,0.49,0.49);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_19.setTransform(52.5,57.1,0.49,0.49);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgQIAPAAIAAAQgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_20.setTransform(52.5,50.4,0.49,0.49);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_21.setTransform(52.5,43.7,0.49,0.49);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_22.setTransform(45.8,60.5,0.49,0.49);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_23.setTransform(39.1,60.5,0.49,0.49);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHAqIAAgRIAPAAIAAARgAgHAIIAAgQIAPAAIAAAQgAgHgYIAAgSIAPAAIAAASgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_24.setTransform(39.1,67.1,0.49,0.49);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_25.setTransform(39.1,73.8,0.49,0.49);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_26.setTransform(45.8,73.8,0.49,0.49);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_27.setTransform(52.5,73.8,0.49,0.49);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHAqIAAgRIAPAAIAAARgAgHAIIAAgQIAPAAIAAAQgAgHgYIAAgSIAPAAIAAASgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_28.setTransform(52.5,67.1,0.49,0.49);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_29.setTransform(52.5,60.5,0.49,0.49);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B0B0B0").s().p("ABuEiIhKlWIAGgCQAhgNATgdQAUgdAAgjQAAgvgigiQghghgvAAQguAAgiAhQghAiAAAvQAAAjATAcQAUAdAgANIAGADIhJFWIgPAAIBHlNQgigQgVggQgUgfAAgmQAAg2AmglQAmgmA0AAQA1AAAmAmQAmAlAAA2QAAAmgVAgQgUAfgjAQIBIFNg");
	this.shape_30.setTransform(64.7,-0.9,0.49,0.49);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0A693").s().p("ACLBtIAAgTIkXAAIAAATIhqAAIAAjaIHtAAIAADag");
	this.shape_31.setTransform(64.7,8.5,0.49,0.49);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBE5EE").s().p("AgNADIgBgGIAdAAIAAAGg");
	this.shape_32.setTransform(70.7,13.4,0.49,0.49);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EBE5EE").s().p("AgPADIAAgGIAfAAIgCAGg");
	this.shape_33.setTransform(58.5,13.4,0.49,0.49);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEE69D").s().p("AncAjIAAhFIO5AAIAABFg");
	this.shape_34.setTransform(58.6,10,0.49,0.49);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_35.setTransform(73.6,72.5,0.49,0.49);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_36.setTransform(73.6,68.8,0.49,0.49);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_37.setTransform(73.6,65.1,0.49,0.49);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_38.setTransform(73.6,61.4,0.49,0.49);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_39.setTransform(73.6,57.7,0.49,0.49);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B0B0B0").s().p("AkgAQIAAgfIJBAAIAAAfg");
	this.shape_40.setTransform(73.6,53.9,0.49,0.49);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_41.setTransform(73.6,50.2,0.49,0.49);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_42.setTransform(73.6,46.5,0.49,0.49);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_43.setTransform(73.6,42.7,0.49,0.49);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_44.setTransform(73.6,39,0.49,0.49);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_45.setTransform(73.6,35.3,0.49,0.49);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B0B0B0").s().p("AiCARIAAghIEFAAIAAAhg");
	this.shape_46.setTransform(65.8,28.6,0.49,0.49);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ApWL2IAA3rIO5AAIAAD0ID0AAIAAT3g");
	this.shape_47.setTransform(64.8,45.5,0.49,0.49);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6E7E8").s().p("ApWKdIAA05IO5AAID0D0IAARFg");
	this.shape_48.setTransform(64.8,41.1,0.49,0.49);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ApSLxIAA3hISlAAIAAXhg");
	this.shape_49.setTransform(64.7,45.2,0.49,0.49);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7F8487").s().p("ApzM4QgKABgHgIQgHgHAAgKIAA4/QAAgKAHgHQAHgIAKABITnAAQAJgBAIAIQAHAHAAAKIAAY/QAAAKgHAHQgIAIgJgBg");
	this.shape_50.setTransform(64.6,45.4,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.7,-15.1,63.9,100.9);


(lib.respuestadecheckboxes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52941B").s().p("AgeBrQgHgBgFgDIgFgEIgxg4QgJgKgCgHQgDgHACgGQABgFACgDIACgEQAJgGAIABQAHABAGADIAFADIAkArIB1iMQAGgJAGgCQAFgCACABIADABQADAEAAAFQgBAFgCADIgCAEIh2C4QgJAHgHAAIgBAAg");
	this.shape.setTransform(11,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,21.4);


(lib.Postits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCE79").s().p("AhGBeIAAi7ICNAAIAAC7g");
	this.shape.setTransform(66.4,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCE79").s().p("AhGBeIAAi7ICNAAIAAC7g");
	this.shape_1.setTransform(46.6,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFCE79").s().p("AhGBeIAAi7ICNAAIAAC7g");
	this.shape_2.setTransform(26.9,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFCE79").s().p("AhGBeIAAi7ICNAAIAAC7g");
	this.shape_3.setTransform(7.1,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Postits, new cjs.Rectangle(0,0,73.5,18.9), null);


(lib.Postit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCE79").s().p("AhGBeIAAi7ICNAAIAAC7g");
	this.shape.setTransform(7.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Postit, new cjs.Rectangle(0,-1,14.2,18.9), null);


(lib.Pisarron_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454748").s().p("AgIABQgBgEADgEQACgEAEAAQACgBAEAEQADADAAAFQABAEgDAEQgCADgEABIgBAAQgHAAgBgLg");
	this.shape.setTransform(176,374.3,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#040D1C").s().p("AgHAOQgGgBgBgIIAAgTIARAAIAAACIAFABQAFACABAEQAEANgJAEQgEACgFABIgCAAIgFgBg");
	this.shape_1.setTransform(177.8,373.7,2.472,2.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454748").s().p("AAAAMQgEgBgCgDQgDgEABgEQABgFADgDQADgEACABQAEAAACAEQADAEgBAEQgBALgIAAIAAAAg");
	this.shape_2.setTransform(210.8,374.3,2.472,2.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040D1C").s().p("AAAAPQgEgBgEgCQgJgEAEgNQACgEAFgCIAEgBIAAgCIARAAIAAATQgBAIgGABIgFABIgDAAg");
	this.shape_3.setTransform(209.1,373.7,2.472,2.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454748").s().p("AgIABQgBgEADgEQACgEAEAAQACgBAEAEQADADAAAFQABAEgDAEQgCADgEABIgBAAQgHAAgBgLg");
	this.shape_4.setTransform(-90.5,374.3,2.472,2.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#040D1C").s().p("AgHAOQgGgBgBgIIAAgTIARAAIAAACIAFABQAFACABAEQAEANgJAEQgEACgFABIgCAAIgFgBg");
	this.shape_5.setTransform(-88.8,373.7,2.472,2.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454748").s().p("AAAAMQgEgBgCgDQgCgEAAgEQABgFADgDQADgEACABQAEAAACAEQADAEgBAEQAAAFgDADQgDADgDAAIAAAAg");
	this.shape_6.setTransform(-55.7,374.3,2.472,2.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#040D1C").s().p("AgIAMQgJgEAEgNQACgEAFgCIAEgBIAAgCIARAAIAAATQgBAIgGABIgGABQgFAAgFgDg");
	this.shape_7.setTransform(-57.5,373.7,2.472,2.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLCbIAAk0IAXAAIAAE0g");
	this.shape_8.setTransform(210.9,331.1,2.472,2.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhOAMIAAgBQAAgKAHgFQAHgHAJAAICGAAIAAAXg");
	this.shape_9.setTransform(194.2,367,2.472,2.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOAMIAAgXICLAAQAIAAAFAFQAFAFAAAGIAAAHg");
	this.shape_10.setTransform(-73.1,367,2.472,2.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLCbIAAk0IAXAAIAAE0g");
	this.shape_11.setTransform(-89.6,331.1,2.472,2.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(204,204,204,0.498)").s().p("EgjuAXuQgxAAghgiQgjgjAAgxMAAAgrwQAAgwAjgjQAhgiAxAAMBHbAAAQAyAAAiAiQAjAjAAAwMAAAArwQAAAxgjAjQgiAigyAAg");
	this.shape_12.setTransform(29.3,133.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EglGAZeQgwAAgigjQgjghAAgyMAAAgvOQAAgyAjgiQAigjAwAAMBKNAAAQAxAAAiAjQAiAiAAAyMAAAAvOQAAAygiAhQgiAjgxAAg");
	this.shape_13.setTransform(28.2,132.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pisarron_2, new cjs.Rectangle(-221,-30.4,498.5,407.8), null);


(lib.Pisarron_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454748").s().p("AgIABQgBgEADgEQACgEAEAAQACgBAEAEQADADAAAFQABAEgDAEQgCADgEABIgBAAQgHAAgBgLg");
	this.shape.setTransform(176,374.3,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#040D1C").s().p("AgHAOQgGgBgBgIIAAgTIARAAIAAACIAFABQAFACABAEQAEANgJAEQgEACgFABIgCAAIgFgBg");
	this.shape_1.setTransform(177.8,373.7,2.472,2.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454748").s().p("AAAAMQgEgBgCgDQgDgEABgEQABgFADgDQADgEACABQAEAAACAEQADAEgBAEQgBALgIAAIAAAAg");
	this.shape_2.setTransform(210.8,374.3,2.472,2.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040D1C").s().p("AAAAPQgEgBgEgCQgJgEAEgNQACgEAFgCIAEgBIAAgCIARAAIAAATQgBAIgGABIgFABIgDAAg");
	this.shape_3.setTransform(209.1,373.7,2.472,2.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454748").s().p("AgIABQgBgEADgEQACgEAEAAQACgBAEAEQADADAAAFQABAEgDAEQgCADgEABIgBAAQgHAAgBgLg");
	this.shape_4.setTransform(14.5,374.3,2.472,2.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#040D1C").s().p("AgHAOQgGgBgBgIIAAgTIARAAIAAACIAFABQAFACABAEQAEANgJAEQgEACgFABIgCAAIgFgBg");
	this.shape_5.setTransform(16.2,373.7,2.472,2.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454748").s().p("AAAAMQgEgBgCgDQgCgEAAgEQABgFADgDQADgEACABQAEAAACAEQADAEgBAEQAAAFgDADQgDADgDAAIAAAAg");
	this.shape_6.setTransform(49.3,374.3,2.472,2.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#040D1C").s().p("AgIAMQgJgEAEgNQACgEAFgCIAEgBIAAgCIARAAIAAATQgBAIgGABIgGABQgFAAgFgDg");
	this.shape_7.setTransform(47.5,373.7,2.472,2.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLCbIAAk0IAXAAIAAE0g");
	this.shape_8.setTransform(210.9,331.1,2.472,2.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhOAMIAAgBQAAgKAHgFQAHgHAJAAICGAAIAAAXg");
	this.shape_9.setTransform(194.2,367,2.472,2.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOAMIAAgXICLAAQAIAAAFAFQAFAFAAAGIAAAHg");
	this.shape_10.setTransform(31.9,367,2.472,2.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLCbIAAk0IAXAAIAAE0g");
	this.shape_11.setTransform(15.4,331.1,2.472,2.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D992BF").s().p("AgYAhIAAhBIAxAAIAABBg");
	this.shape_12.setTransform(170.7,155.8,2.472,2.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CFCE79").s().p("AgYAhIAAhBIAxAAIAABBg");
	this.shape_13.setTransform(152.7,155.8,2.472,2.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CF93C1").s().p("AgYAhIAAhBIAxAAIAABBg");
	this.shape_14.setTransform(135.5,155.8,2.472,2.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhDBEIAAiHICHAAIAACHg");
	this.shape_15.setTransform(182,185.4,2.472,2.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBEIAAiHICHAAIAACHg");
	this.shape_16.setTransform(145.4,185.4,2.472,2.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiqBuIAAjbIFVAAIAADbg");
	this.shape_17.setTransform(83.2,175.7,2.472,2.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#717576").s().p("Al8ItQgUAAgNgPQgOgNAAgVIAAv4QAAgUAOgNQANgOAUgBIL4AAQAUABAOAOQAOANAAAUIAAP4QAAAVgOANQgOAPgUAAg");
	this.shape_18.setTransform(113.7,147.8,2.472,2.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AmbJWQgUAAgOgOQgOgOAAgUIAAxLQAAgUAOgOQAOgOAUAAIM3AAQAVAAANAOQAOAOAAAUIAARLQAAAUgOAOQgNAOgVAAg");
	this.shape_19.setTransform(113.7,147.8,2.472,2.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pisarron_1, new cjs.Rectangle(0,0,227.5,377.5), null);


(lib.PINTURAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.PINTURAS, null, null);


(lib.Pantallaamedias = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5A9A9").s().p("AhPAPIAAgdICfAAIAAAdg");
	this.shape.setTransform(24.4,142.7,1.396,1.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6E0DA").s().p("AnDHgIAAu/INrAAQAMAAAIAIQAIAIAAAMIAAOIQAAALgIAIQgIAIgMAAg");
	this.shape_1.setTransform(63,70.3,1.396,1.396);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnWH3IAAvtIORAAQAMAAAIAIQAIAIAAALIAAO3QAAAMgIAHQgIAIgMAAg");
	this.shape_2.setTransform(65.7,70.2,1.396,1.396);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNIGIAAwLICbAAIAAQLg");
	this.shape_3.setTransform(24.4,212.4,1.396,1.396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pantallaamedias, new cjs.Rectangle(0,0,131.4,284.7), null);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(69.1,21.2,0.593,0.593);

	this.text_1 = new cjs.Text("1.1", "50px 'Arial'", "#FFFFFF");
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


(lib.Mueble1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4B49B").s().p("AlBAQIAAgfIKDAAIAAAfg");
	this.shape.setTransform(44.9,186.2,1.396,1.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4B49B").s().p("AlBAQIAAgfIKDAAIAAAfg");
	this.shape_1.setTransform(44.9,130.3,1.396,1.396);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4B49B").s().p("AlBAgIAAg/IKDAAIAAA/g");
	this.shape_2.setTransform(44.9,72.2,1.396,1.396);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#515055").s().p("AkuCMIJYkgIAFAJIpZEgg");
	this.shape_3.setTransform(49.3,100.3,1.396,1.396);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#515055").s().p("AkxiOIAFgJIJdEmIgDAJg");
	this.shape_4.setTransform(47.5,102.5,1.396,1.396);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#515055").s().p("AgSHdIAAu5IAkAAIAAO5g");
	this.shape_5.setTransform(6,140.7,1.396,1.396);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E050F").s().p("AkoDIIAAmPIJRAAIAAGPg");
	this.shape_6.setTransform(48.3,157.1,1.396,1.396);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D77A54").s().p("AhOjCIA6gOIBjGSIg6APg");
	this.shape_7.setTransform(62,36.6,1.396,1.396);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAB16A").s().p("AhAiyIAngJIBaFtIgnAKg");
	this.shape_8.setTransform(52.5,38.9,1.396,1.396);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#684D4C").s().p("AgkjiIAlgDIAjHIIglADg");
	this.shape_9.setTransform(40.4,32.1,1.396,1.396);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#984439").s().p("AgXDQIAAmeIAvAAIAAGeg");
	this.shape_10.setTransform(32.2,35.2,1.396,1.396);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D68E79").s().p("AgXDiIAAnDIAvAAIAAHDg");
	this.shape_11.setTransform(24.5,32.5,1.396,1.396);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D77A54").s().p("AgyCjIAAlEIBlAAIAAFEg");
	this.shape_12.setTransform(12.2,41.2,1.396,1.396);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E62F33").s().p("AgwAmQgEgwAIgfIARACQAVADARgCQAdgBAGgCIADAaQADAdgCAYQgdAEgYAAQgYAAgVgEg");
	this.shape_13.setTransform(82.6,41.9,1.396,1.396);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A1213").s().p("AghCaQgMgEgBgVIAAgXQACgGACgHQADgPgFgZQgGgZACgtIAEgvQAAgGAIgNIANgYQAIgOgCgZIgEAAIAAgHIArAAIAAAHIgEAAIAAAOQABAQAFAJIANAYQAIANAAAGQAJBOgIAnQgFAZACAPQACAHACAGIABAXQgCAVgMAEg");
	this.shape_14.setTransform(82.6,45.2,1.396,1.396);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E62F33").s().p("AgXAKIAAgQIABgBQACgBAGAAIAgAAIADAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAQg");
	this.shape_15.setTransform(82.6,22,1.396,1.396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mueble1, new cjs.Rectangle(0,0,91.6,207.3), null);


(lib.Mueble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBCQgEAAgDgDQgXgRAAgdIAAhGQAAgFADgDQAEgEAFAAICBAAQAGAAADAEQAEAFgBAFIAAACIAAA3QACAPgEARQgIAcgYAAg");
	this.shape.setTransform(266.8,101.3,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#509B5C").s().p("AgLAXIgBgKQABgLAEgHQAGgMAFgGIAFASQAFAOgCAHQgCAHgGABg");
	this.shape_1.setTransform(260.6,79.5,2.472,2.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0C5A7").s().p("AgIAWQgBgNABgJQAAgHADgHIADgHIAGALQADAFABADQABAGABASg");
	this.shape_2.setTransform(264.3,79.5,2.472,2.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0C5A7").s().p("AgIAWQgCgNABgJQABgHADgHIADgHIAFALQAEAFABADIACAYg");
	this.shape_3.setTransform(275.1,79.5,2.472,2.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#509B5C").s().p("AgLAQQgBgFAEgQIAFgSIALASQAGALgCARIgPABQgGAAgCgIg");
	this.shape_4.setTransform(270.9,79.3,2.472,2.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0C5A7").s().p("AgIAWQgCgNABgJQABgHADgHIADgHIAGALIAEAIQABAGABASg");
	this.shape_5.setTransform(258.5,79.5,2.472,2.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#509B5C").s().p("AgJAKQACgIAJgMIAJgNIABAGQABAGgBAKQgBAOgJAKIgOAAQAAgCADgLg");
	this.shape_6.setTransform(279.9,79.4,2.472,2.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#509B5C").s().p("AgBAXQgIgKgCgOQgBgJABgHIABgFIAJAMQAJANACAHQAEALgBACg");
	this.shape_7.setTransform(253.6,79.2,2.472,2.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADAAD4").s().p("AgJAKQACgIAJgNIAJgMIABAGQACAGgCAKQgBAOgJAKIgOAAQAAgCADgLg");
	this.shape_8.setTransform(276.5,79.1,2.472,2.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADAAD4").s().p("AgBAXQgIgKgCgOQgBgJABgHIABgFIAJAMQAJANACAHQADALAAACg");
	this.shape_9.setTransform(256.7,79.2,2.472,2.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4B49B").s().p("AtkAJIAAgRIbJAAIAAARg");
	this.shape_10.setTransform(214.9,123.2,2.472,2.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4B49B").s().p("AtkAJIAAgRIbJAAIAAARg");
	this.shape_11.setTransform(214.9,65.1,2.472,2.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4B49B").s().p("AtkATIAAglIbJAAIAAAlg");
	this.shape_12.setTransform(214.9,4.7,2.472,2.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#515055").s().p("AgKEYIAAovIAVAAIAAIvg");
	this.shape_13.setTransform(426.2,76,2.472,2.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#515055").s().p("AgKEYIAAovIAVAAIAAIvg");
	this.shape_14.setTransform(320.8,76,2.472,2.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#515055").s().p("AgKEYIAAovIAVAAIAAIvg");
	this.shape_15.setTransform(217.1,76,2.472,2.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DED0BE").s().p("AjPB2IAAjqIGfAAIAADqg");
	this.shape_16.setTransform(164.8,93.8,2.472,2.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DED0BE").s().p("AjPB2IAAjqIGfAAIAADqg");
	this.shape_17.setTransform(271.2,35.7,2.472,2.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E050F").s().p("AjSBvIAAjdIGlAAIAADdg");
	this.shape_18.setTransform(373.8,95,2.472,2.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D77A54").s().p("AgoBlIAzjQIAeAHIgzDQg");
	this.shape_19.setTransform(365.3,38.5,2.472,2.472);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAB16A").s().p("AggBcIAui9IATAGIguC9g");
	this.shape_20.setTransform(374,40.7,2.472,2.472);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#684D4C").s().p("AgSB2IASjsIATABIgSDsg");
	this.shape_21.setTransform(385.1,34.4,2.472,2.472);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#984439").s().p("AgMBrIAAjWIAZAAIAADWg");
	this.shape_22.setTransform(392.7,37.2,2.472,2.472);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D68E79").s().p("AgLB1IAAjqIAXAAIAADqg");
	this.shape_23.setTransform(399.8,34.7,2.472,2.472);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D77A54").s().p("AgZBUIAAinIAzAAIAACng");
	this.shape_24.setTransform(411,42.7,2.472,2.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mueble2, new cjs.Rectangle(0,0,429.8,145.3), null);


(lib.Mueble_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbCCQgIAAgHgEQgugjAAg5IAAiLQAAgKAHgHQAIgHAJAAIEBAAQALAAAHAIQAHAJgCALIAABxQADAkgHAcQgOA2gyAAg");
	this.shape.setTransform(250.3,195.9,1.172,1.172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#509B5C").s().p("AgXAtQgBgIAAgMQABgWAIgOQAIgPAHgLIAHgJIALAjIAFAUQADANgCAKQgEAOgNABg");
	this.shape_1.setTransform(244.5,175.4,1.172,1.172);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0C5A7").s().p("AgRArQgDgaACgTQACgNAFgPIAGgMIAMAUQAHAKABAHQADAMABAkg");
	this.shape_2.setTransform(248.1,175.5,1.172,1.172);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0C5A7").s().p("AgRArQgDgaACgTQACgNAFgPIAGgMIAMAUQAHAKABAHQADAMABAkg");
	this.shape_3.setTransform(258.2,175.5,1.172,1.172);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#509B5C").s().p("AgXAgQgCgKACgMIAGgVIAKgjIAHAJQAIAMAIAOQAMAYgEAgIgfACQgNgBgDgOg");
	this.shape_4.setTransform(254.2,175.3,1.172,1.172);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0C5A7").s().p("AgRArQgDgaACgTQACgNAGgPIAFgMIAMAUQAHAKABAHQADAMABAkg");
	this.shape_5.setTransform(242.5,175.5,1.172,1.172);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#509B5C").s().p("AgTATQAEgOASgaIASgZIADALQACAOgCASQgDAdgSAUIgbABQgCgGAHgWg");
	this.shape_6.setTransform(262.6,175.3,1.172,1.172);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#509B5C").s().p("AgDAuQgRgUgDgdQgCgSACgOIACgKIATAYQASAaAEAOQAGAXgBAEg");
	this.shape_7.setTransform(238,175.1,1.172,1.172);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADAAD4").s().p("AgTATQAEgOASgaIASgZIADALQACAOgCATQgDAdgSASIgbABQgCgEAHgXg");
	this.shape_8.setTransform(259.4,175,1.172,1.172);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADAAD4").s().p("AgCAuQgSgUgDgdQgCgSACgOIADgKIASAYQASAaAEAOQAHAXgCAEg");
	this.shape_9.setTransform(240.8,175.1,1.172,1.172);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4B49B").s().p("A63ATIAAglMA1vAAAIAAAlg");
	this.shape_10.setTransform(201.6,216.4,1.172,1.172);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4B49B").s().p("A63ATIAAglMA1vAAAIAAAlg");
	this.shape_11.setTransform(201.6,161.9,1.172,1.172);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4B49B").s().p("A63AlIAAhKMA1vAAAIAABKg");
	this.shape_12.setTransform(201.6,105.3,1.172,1.172);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#515055").p("AmlCoINLlP");
	this.shape_13.setTransform(57,132.7,1.172,1.172);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#515055").p("AmpirINSFW");
	this.shape_14.setTransform(54.9,134.8,1.172,1.172);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#515055").s().p("AgVIqIAAxTIAqAAIAARTg");
	this.shape_15.setTransform(399.9,172.1,1.172,1.172);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#515055").s().p("AgUIqIAAxTIAqAAIAARTg");
	this.shape_16.setTransform(301,172.1,1.172,1.172);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#515055").s().p("AgVIqIAAxTIAqAAIAARTg");
	this.shape_17.setTransform(203.8,172.1,1.172,1.172);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#515055").s().p("AgVIqIAAxTIAqAAIAARTg");
	this.shape_18.setTransform(105.6,172.1,1.172,1.172);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#515055").s().p("AgUIqIAAxTIAqAAIAARTg");
	this.shape_19.setTransform(5.9,172.1,1.172,1.172);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5E050F").s().p("AmaDoIAAnPIM1AAIAAHPg");
	this.shape_20.setTransform(54.9,188,1.172,1.172);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DED0BE").s().p("AmaDoIAAnPIM1AAIAAHPg");
	this.shape_21.setTransform(154.7,188.9,1.172,1.172);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DED0BE").s().p("AmaDoIAAnPIM1AAIAAHPg");
	this.shape_22.setTransform(254.5,134.4,1.172,1.172);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E050F").s().p("AmhDcIAAm3INDAAIAAG3g");
	this.shape_23.setTransform(350.8,190,1.172,1.172);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D77A54").s().p("AhQDIIBmmdIA7APIhmGdg");
	this.shape_24.setTransform(342.8,137,1.172,1.172);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAB16A").s().p("AhCC3IBdl3IAnAKIhbF3g");
	this.shape_25.setTransform(350.9,139,1.172,1.172);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#684D4C").s().p("AgkDpIAjnUIAmADIgjHUg");
	this.shape_26.setTransform(361.4,133.1,1.172,1.172);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#984439").s().p("AgXDVIAAmpIAwAAIAAGpg");
	this.shape_27.setTransform(368.4,135.8,1.172,1.172);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D68E79").s().p("AgXDoIAAnPIAvAAIAAHPg");
	this.shape_28.setTransform(375.1,133.4,1.172,1.172);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D77A54").s().p("AgzCnIAAlNIBnAAIAAFNg");
	this.shape_29.setTransform(385.7,140.9,1.172,1.172);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D77A54").s().p("AhbjhIBEgRIBzHUIhEARg");
	this.shape_30.setTransform(60.5,70.5,1.172,1.172);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FAB16A").s().p("AhKjPIAtgLIBoGpIgtAMg");
	this.shape_31.setTransform(51.3,72.8,1.172,1.172);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#684D4C").s().p("AgpkHIArgDIAoISIgrADg");
	this.shape_32.setTransform(39.4,66.2,1.172,1.172);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#984439").s().p("AgbDxIAAnhIA3AAIAAHhg");
	this.shape_33.setTransform(31.4,69.2,1.172,1.172);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D68E79").s().p("AgbEHIAAoNIA3AAIAAINg");
	this.shape_34.setTransform(23.9,66.6,1.172,1.172);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D77A54").s().p("Ag6C9IAAl5IB1AAIAAF5g");
	this.shape_35.setTransform(11.9,75,1.172,1.172);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC916B").s().p("Ag0AEIAAAAQAAgIAJABIBXAAQAEAAACACQADABAAAEIAAAAg");
	this.shape_36.setTransform(261.5,75,1.172,1.172);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BC916B").s().p("Ag0AEIAAAAQAAgIAJABIBXAAQAEAAACACQADABAAAEIAAAAg");
	this.shape_37.setTransform(242,75,1.172,1.172);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#573311").s().p("AAcAqIg4AAIgEgBIgIgMQgFgKgDgRIgEgWQgBgGAAgHIABgHIBogBIACAFQABAIgCAKQgDAZgLAaQgEAJgGAAIgBAAg");
	this.shape_38.setTransform(261.5,80.3,1.172,1.172);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#573311").s().p("AgcAqIgEgBIgHgMQgGgKgDgRIgEgWQgBgGAAgHIABgHIBpgBIABAFQABAIgCAKQgBAMgFAQQgEAOgEAJQgFAKgGgBIgnAAIgRAAg");
	this.shape_39.setTransform(242,80.3,1.172,1.172);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D1D0BE").s().p("AgrBHQgHAAgDgHIgOgtIgJgxIAAgoICZAAIAAAoIgJAxIgOAtQgDAHgHAAg");
	this.shape_40.setTransform(261.4,78.4,1.172,1.172);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D1D0BE").s().p("AgrBHQgHAAgDgHIgQg2IgHgsIAAgkICZAAIAAAkIgJA1IgPAtQgCAHgIAAg");
	this.shape_41.setTransform(242,78.4,1.172,1.172);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D1D0BE").s().p("AhUAiIAAhCICpAAIAABCg");
	this.shape_42.setTransform(251.7,48.4,1.172,1.172);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#585B5C").s().p("AAVARIAAgLIgoAAIAAALIgcAAIAAgLIgVAAIAAgWICJAAIAAAWIgUAAIAAALg");
	this.shape_43.setTransform(251.7,54.3,1.172,1.172);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D77A54").s().p("AkjA4IAAhvIJHAAIAABvg");
	this.shape_44.setTransform(250.6,93.5,1.172,1.172);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#573311").s().p("AjxC4IAAlvIHjAAIAAFvg");
	this.shape_45.setTransform(250.8,65.5,1.172,1.172);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#585B5C").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgLAAgHgIg");
	this.shape_46.setTransform(251,31.9,1.172,1.172);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D1D0BE").s().p("AgfAgQgNgNAAgTQAAgSANgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape_47.setTransform(250.9,31.7,1.172,1.172);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D77A54").s().p("AkjCDIAAkFIJHAAIAAEFg");
	this.shape_48.setTransform(250.6,29.2,1.172,1.172);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D1D0BE").s().p("ADlA9IAAgxQAAgVgOgQQgOgQgUAAIljAAQgWAAgQAQQgQAQAAAVIAAAxIgTAAIAAgxQAAgdAVgWQAWgVAeAAIFjAAQAcAAAUAVQATAWAAAdIAAAxg");
	this.shape_49.setTransform(250.3,7.2,1.172,1.172);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#573311").s().p("AjOAYIAAgvIGdAAIAAAvg");
	this.shape_50.setTransform(250.5,11.8,1.172,1.172);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E62F33").s().p("Ag3AtQgGg4AKglIAUADQAYADAUgCQAigCAGgCIAEAeQADAjgCAbQgiAFgdAAQgbAAgXgEg");
	this.shape_51.setTransform(80.5,75.7,1.172,1.172);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2A1213").s().p("AgmCzQgOgEgCgZIAAgcQADgGACgJQADgRgGgdQgJgqAJheQABgGAJgQIAQgbQAFgLABgSIABgQIgGAAIAAgJIAzAAIAAAJIgGAAIABAQQABASAFALIAQAbQAIAQACAGQAIBegIAqQgGAdAEARQABAJADAGIAAAcQgDAZgNAEg");
	this.shape_52.setTransform(80.5,78.9,1.172,1.172);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E62F33").s().p("AgaALIAAgSIABgBQACgCAGAAIAmAAIADABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABIAAARg");
	this.shape_53.setTransform(80.6,56.3,1.172,1.172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mueble_4, new cjs.Rectangle(0,0,403.3,237.1), null);


(lib.Mesa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4B49B").s().p("AH+EpIjGooIpvAAIjGIoIghAAIBgooIAAgpIN9AAIAAApIBgIog");
	this.shape.setTransform(149.8,87.1,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DED0BE").s().p("ApuAcIAAg3ITdAAIAAA3g");
	this.shape_1.setTransform(154,6.8,2.472,2.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mesa_1, new cjs.Rectangle(0,0,307.9,160.4), null);


(lib.mc4r_etro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t5 = new cjs.Text("¿Estás seguro que las recomendaciones que elegiste son las mejores? ¿Son todas?\n\nLa elección no es fácil, ¿verdad?\n\nConozcamos a continuación, el proceso para mapear el talento y hacer LA MEJOR elección al seleccionar sucesores.", "9px 'Arial'");
	this.t5.name = "t5";
	this.t5.textAlign = "center";
	this.t5.lineHeight = 12;
	this.t5.lineWidth = 216;
	this.t5.parent = this;
	this.t5.setTransform(255,53.7,1.95,1.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EglRAWVQgxAAghgjQgigjgBgxMAAAgo8QABgxAigiQAhgjAxAAMBKhAAAQAxAAAjAjQAiAiAAAxMAAAAo8QAAAxgiAjQgjAjgxAAg");
	this.shape.setTransform(250.3,142.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EglRAWVQgxAAghgjQgigjgBgxMAAAgo8QABgxAigiQAhgjAxAAMBKhAAAQAxAAAjAjQAiAiAAAxMAAAAo8QAAAxgiAjQgjAjgxAAg");
	this.shape_1.setTransform(250.3,142.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.t5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc4r_etro, new cjs.Rectangle(0,0,500.5,285.8), null);


(lib.mc_numMod01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALDGIAAkcQgoAng5ASIAAhEQAegKAjgbQAigbANgkIA9AAIAAGLg");
	this.shape.setTransform(23.9,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AghEHQhPgMg8g4IgKgJQg+g7gQhQQgPhKAchJQAdhIA+gtQBDgwBVAAIAJAAQBsAABNBNQBMBMAABsIAAAIQAABTgtBBQgqA9hGAfQgzAWg1AAQgSAAgUgDg");
	this.shape_1.setTransform(26.6,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_numMod01, new cjs.Rectangle(0,0,53.3,65.5), null);


(lib.Maseta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A9868").s().p("AhFBfQgDhcAKheQAVi+A+gWIgVBtQgOB2AgApQAiAoANAnQAGAUgBALIhFDlg");
	this.shape.setTransform(67.1,42.4,1.396,1.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#109773").s().p("Ai2AjQA5iLBvglQBuglBIASQAkAIAOAQQgvAFg1ANQhrAagcAqQghAvgLBYQgGAtABAjIiXACQAGg+AdhGg");
	this.shape_1.setTransform(98.1,67.8,1.396,1.396);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#149848").s().p("AiwEHQAShUAdhgQA7i+Azg7QAzg8BOgYQAngMAcAAQg/Adg+B2IgxBxIgmEJg");
	this.shape_2.setTransform(90.3,54.6,1.396,1.396);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#149848").s().p("AAkEHIgmkJQgSg2gfg7Qg+h2g/gdIBDAMQBOAYAzA8QAzA7A6C+QAdBgATBUg");
	this.shape_3.setTransform(44.5,54.6,1.396,1.396);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#109773").s().p("ABEClQABgjgHgtQgLhYghgvQgcgqhrgaIhlgSIAMgJQAQgKAXgFQBIgSBuAlQBvAlA5CLQAdBGAHA+g");
	this.shape_4.setTransform(30.5,67.8,1.396,1.396);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D77A54").s().p("AkekpII9AAIhKJNImHAGg");
	this.shape_5.setTransform(64.9,132.6,1.396,1.396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Maseta1, new cjs.Rectangle(0,0,128.6,174.3), null);


(lib.mascaratapar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvWACqIAAlTMBetAAAIAAFTg");
	this.shape.setTransform(303.1,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,34);


(lib.lapizmueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ah8CUIgEgCIgCgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBID0AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAh4B/IgBgCIAQgwIABgBIABAAIAcAXIABACIgBABIgsAZIAAAAIgBAAgAhiBEIAYgnIAggrIAsAkQgSAWgRASQgSATgPANgAAGAMIgmgfIgBgDIAAgDIBUhpIgGgEIhBBSIgHgGIBFhZIAOALIABgCIADgBIBDgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgBAEIh2CSIgDACIgDgBg");
	this.shape.setTransform(21.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,7.8,26.2,29.6);


(lib.interrogamover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgnDZIAAhSIBRAAIAABSgAgnBqIAAgUQAAgjAMgYQAMgYAjgcQAkgdAHgJQALgOAAgSQAAgYgTgRQgUgRggAAQgfAAgVARQgVATgIAkIhLgJQADg1AqgkQApglBDAAQBGAAAqAmQAqAkAAAxQAAAcgPAYQgQAZgyAoQgaAWgGANQgHAOABAhg");
	this.shape.setTransform(15.4,21.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.9,43.4);


(lib.info01ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("“La gestión del talento es un proceso continuo y requiere del compromiso de todos los participantes”.", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 153;
	this.text.parent = this;
	this.text.setTransform(-219.6,-8.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AskJWQhkAAAAhkIAArPIAAg/IAAgnIAAgwIAAiFIAAhDIAYAAQAZgaAzAAIFbAAIAWAAIAAAAIAVAAIAqAAIAYAAICwAAIHLAAIDIAAIF2AAIAAAMQALAFAJAJIAYAAIAABDIAAA8IAABJIAAMKIAAAYIAABDQAABDgsAWIAAALg");
	this.shape.setTransform(-219.9,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info01ss, new cjs.Rectangle(-310.4,-26.6,181,145.1), null);


(lib.globodialogo5cambio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirHUMglZAAAQg8gCgngnQgNgNgJgOQgTgggBgoIAA49QABgoATggQAJgOANgNQAngnA8gCMBQKAAAQA7ACAoAnQAoAoABA7IAAY9QgBA7goAoQgoAng7ACMgkpAAAICMOjIgDALg");
	this.shape.setTransform(19.5,88.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.globodialogo5cambio, new cjs.Rectangle(-251.1,-52.1,541.2,282), null);


(lib.globodialogo3cambio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADYHUMg1kAAAQg7gCgognQgogogBg7IAA49QABg7AogoQAognA7gCMBkZAAAQA7ACAoAnQAoAoABA7IAAY9QgBA7goAoQgoAng7ACMgorAAAICMOjIgEALg");
	this.shape.setTransform(14.3,42.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.globodialogo3cambio, new cjs.Rectangle(-321,-98.7,670.7,282), null);


(lib.globodialogo2c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmuJVMgpcAAAQg8gBgngoQgogngCg8IAA8/QACg8AognQAngoA8gBMBgVAAAQA8ABAoAoQAnAnACA8IAAc/QgCA8gnAnQgoAog8ABMgwwAAAICLOjIgDALg");
	this.shape.setTransform(45.4,81.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.globodialogo2c, new cjs.Rectangle(-277,-72.8,644.8,307.9), null);


(lib.globodialogo2bcambio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABXHUMgpbAAAQg8gCgognQgogogBg7IAA49QABg7AogoQAognA8gCMBQJAAAQA8ACAoAnQAnAoACA7IAAY9QgCA7gnAoQgoAng8ACMggkAAAICLOjIgDALg");
	this.shape.setTransform(-92,115.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.globodialogo2bcambio, new cjs.Rectangle(-362.6,-25.9,541.2,282), null);


(lib.globodialogo2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHbJVMgpaAAAQg9gBgngoQgogngCg8IAA8/QACg8AognQAngoA9gBMBEAAAAQA7ABApAoQAnAnABA8IAAc/QgBA8gnAnQgpAog7ABI0cAAICMOjIgEALg");
	this.shape.setTransform(-130.8,128);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.globodialogo2b, new cjs.Rectangle(-362.6,-25.9,463.5,307.8), null);


(lib.globodialogo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHcJVI2fAAMAAAghXMAxEAAAQA8ABAoAoQAnAnABA8IAAc/QgBA8gnAnQgoAog8ABI0cAAICLOjIgCALgEgiAAJVQg8gBgngoQgogngCg8IAA8/QACg8AognQAngoA8gBIS8AAMAAAAhXg");
	this.shape.setTransform(-45.3,81.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.globodialogo2, new cjs.Rectangle(-277,-72.8,463.5,307.9), null);


(lib.globodialogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHcJVI2fAAMAAAghXMAxEAAAQA8ABAoAoIAGAGQAhAmABA3IAAc/QgBA8gnAnQgoAog8ABI0cAAICLOjIgCALgEgiAAJVQg8gBgngoQgogngCg8IAA8/QACg3AigmIAGgGQAngoA8gBIS8AAMAAAAhXg");
	this.shape.setTransform(180,128);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.globodialogo, new cjs.Rectangle(-51.8,-25.9,463.5,307.8), null);


(lib.Fondo_oficina_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B7B8").s().p("EgzFAF7IAAr1MBmLAAAIAAL1g");
	this.shape.setTransform(482.3,414.3,1.399,1.445);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("EhHQAisMAAAhFXMBgnAAAIAAI6IFRAAIAAo6MAopAAAMAAABFXgAeo5xIlRAAIAAo6IFRAAIAAI6gEAZXgirg");
	this.shape_1.setTransform(480.8,222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fondo_oficina_1, new cjs.Rectangle(24.7,0,915,469.1), null);


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
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDhBIAHCD");
	this.shape.setTransform(0.7,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,2.8,15.2), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDg/QAEA/ADBA");
	this.shape.setTransform(0.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-1,2.8,14.8), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDg7IAHB3");
	this.shape.setTransform(0.7,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-1,2.8,14), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDg9QAEA9ADA+");
	this.shape.setTransform(0.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-1,2.8,14.4), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDg8QAEA8ADA9");
	this.shape.setTransform(0.6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-0.9,2.8,14.2), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDg5QAEA5ADA7");
	this.shape.setTransform(0.6,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-0.9,2.8,13.7), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAEhBIgHCD");
	this.shape.setTransform(0.7,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,2.8,15.2), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAEg/QgEA/gDBA");
	this.shape.setTransform(0.6,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-1,2.8,14.8), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAEg7IgHB3");
	this.shape.setTransform(0.7,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-1,2.8,14), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAEg9QgEA9gDA+");
	this.shape.setTransform(0.6,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-1,2.8,14.4), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAEg8QgEA8gDA9");
	this.shape.setTransform(0.6,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-0.9,2.8,14.2), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAEg5QgEA5gDA7");
	this.shape.setTransform(0.6,5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-0.9,2.8,13.7), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAQgwIgfBh");
	this.shape.setTransform(1.8,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,5.1,11.9), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgLAlIAXhJ");
	this.shape.setTransform(1.4,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.8,-0.9,4.4,9.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgXgxQAVANALAiQAHAUAGAk");
	this.shape.setTransform(2.6,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.8,-0.8,6.7,12.5), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAYgxQggAVgNBS");
	this.shape.setTransform(2.4,5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,6.6,12.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgIgbIARA3");
	this.shape.setTransform(1.2,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.7,-0.9,3.9,7.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AARAvIghhd");
	this.shape.setTransform(1.9,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.8,-0.9,5.4,11.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGAeQgCgIAAgHQABgRANgPQAQgTAbgEQAXgFAYAJQAdAMAJAWQAHAUgJAWIiCADQgFgEgDgJg");
	mask.setTransform(7.3,4.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8885F").s().p("AhGAeQgCgIAAgHQABgRANgPQAQgTAbgEQAXgFAYAJQAdAMAJAWQAHAUgJAWIiCADQgFgEgDgJg");
	this.shape.setTransform(7.3,4.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,14.6,8.6), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABKCdIAAgCIARgwQAIgbAAgWQABgfgJgWQgKgWgWgVQgIgIgjgVQgbgRgKgSIgFAEIgYAaQgRASgFAHQgQAWgEAfQgDAcAFAfQADATAGARIAJAYIAFAIQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBgBIAAgBIgBAAIgCgFIgRgZQgJgOgCgNIgKhTQgHgmAHgaQAHgaAVgYQAOgPAHgEQBCgkBAAjQAXANAPAtQAHAVAAARQABALgEARQgFAZABAHQAAALAEAXQADARgFAPQgEANgIAPIgWAuIAAAAIgBAAg");
	mask.setTransform(11.4,15.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8D61").s().p("ABKCdIAAgCIARgwQAIgbAAgWQABgfgJgWQgKgWgWgVQgIgIgjgVQgbgRgKgSIgFAEIgYAaQgRASgFAHQgQAWgEAfQgDAcAFAfQADATAGARIAJAYIAFAIQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBgBIAAgBIgBAAIgCgFIgRgZQgJgOgCgNIgDgrIgHgoQgHgmAHgaQAHgaAVgYQAOgPAHgEQBCgkBAAjQAXANAPAtQAHAVAAARQABALgEARQgFAZABAHQAAALAEAXQADARgFAPQgEANgIAPIgWAuIAAAAIgBAAg");
	this.shape.setTransform(11.4,15.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("ABKCdIAAgCIARgwQAIgbAAgWQABgfgJgWQgKgWgWgVQgIgIgjgVQgbgRgKgSIgFAEIgYAaQgRASgFAHQgQAWgEAfQgDAcAFAfQADATAGARIAJAYIAFAIQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBgBIAAgBIgBAAIgCgFIgRgZQgJgOgCgNIgKhTQgHgmAHgaQAHgaAVgYQAOgPAHgEQBCgkBAAjQAXANAPAtQAHAVAAARQABALgEARQgFAZABAHQAAALAEAXQADARgFAPQgEANgIAPIgWAuIAAAAIgBAAg");
	this.shape_1.setTransform(11.4,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,22.9,31.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAxFTQh4gBhphqQiFiEgeiDQA0haBWhXQBUhTBXgvQCFAeCCCDQBqBpABB4QABByhZBZQhYBYhwAAIgDAAg");
	this.shape.setTransform(34,33.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,68,67.8), null);


(lib.imgmod1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgBBAiNQm9AAmXisQmJimkvkvQkvkvimmJQismWAAm+QAAm8CsmXQCmmJEvkvQEvkvGJimQGXisG9AAICCAAQG+AAGXCsQGJCmEuEvQEwEvCmGJQCsGXAAG8QAAG+isGWQimGJkwEvQkuEvmJCmQmXCsm+AAg");
	mask.setTransform(387,218.9);

	// Capa_3
	this.instance = new lib.Módulo1();
	this.instance.parent = this;
	this.instance.setTransform(69,-11);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imgmod1, new cjs.Rectangle(161.5,0,451,437.8), null);


(lib.e3buttons3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A1DISIAAwjMAqHAAAIAAQjg");
	this.shape.setTransform(134.8,53);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e3buttons3, new cjs.Rectangle(0,0,269.6,106), null);


(lib.e3buttons2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A1LIpIAAxSMAqXAAAIAARSg");
	this.shape.setTransform(135.6,55.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e3buttons2, new cjs.Rectangle(0,0,271.2,110.7), null);


(lib.e3buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A1DJCIAAyDMAqHAAAIAASDg");
	this.shape.setTransform(134.8,57.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e3buttons, new cjs.Rectangle(0,0,269.6,115.6), null);


(lib.e2buttons2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A2LIhIAAxCMAsXAAAIAARCg");
	this.shape.setTransform(142,54.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e2buttons2, new cjs.Rectangle(0,0,284,109.1), null);


(lib.e2buttons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A17IyIAAxjMAr3AAAIAARjg");
	this.shape.setTransform(140.4,56.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e2buttons, new cjs.Rectangle(0,0,280.8,112.4), null);


(lib.e1Buttos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("A2SIZIAAwyMAslAAAIAAQyg");
	this.shape.setTransform(142.7,53.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e1Buttos, new cjs.Rectangle(0,0,285.5,107.5), null);


(lib.e1buttons4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("A17JBIAAyCMAr3AAAIAASCg");
	this.shape.setTransform(140.4,57.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e1buttons4, new cjs.Rectangle(0,0,280.8,115.5), null);


(lib.e1buttons3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("A2TIpIAAxSMAsnAAAIAARSg");
	this.shape.setTransform(142.8,55.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e1buttons3, new cjs.Rectangle(0,0,285.6,110.7), null);


(lib.e1buttons2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0.008)").s().p("A17JBIAAyCMAr3AAAIAASCg");
	this.shape.setTransform(140.4,57.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.e1buttons2, new cjs.Rectangle(0,0,280.8,115.5), null);


(lib.Cuadros_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmzG3IAAttINmAAIAANtg");
	this.shape.setTransform(63.3,63.5,1.396,1.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4B49B").s().p("AnJHKIAAuTIOTAAIAAOTg");
	this.shape_1.setTransform(63.9,63.9,1.396,1.396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cuadros_1, new cjs.Rectangle(0,0,127.9,127.9), null);


(lib.Cuadro_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#684D4C").s().p("AguBCQgDAAgEgCQgXgRAAgeIAAhFQAAgGADgDQAEgEAFAAICBAAQAGAAADAFQAEAEgBAFIAAACIAAA3QACAPgEARQgIAcgYAAg");
	this.shape.setTransform(54.2,60.7,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#509B5C").s().p("AgLAXIgBgKQABgLAEgHQAGgMAFgGIAFASQAFAPgCAGQgCAHgGABg");
	this.shape_1.setTransform(48,38.9,2.472,2.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0C5A7").s().p("AgIAWQgCgNABgKQABgGADgIIADgGIAFAKQAEAFABAEIACAYg");
	this.shape_2.setTransform(51.8,39,2.472,2.472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0C5A7").s().p("AgIAWQgCgNABgKQABgGADgIIADgGIAGAKIAEAJIACAYg");
	this.shape_3.setTransform(62.5,39,2.472,2.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#509B5C").s().p("AgLAQQgBgFAEgQIAFgSIADAFQAEAFAEAIQAGALgCARIgPABQgGgBgCgHg");
	this.shape_4.setTransform(58.3,38.8,2.472,2.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0C5A7").s().p("AgIAWQgBgNABgKQAAgGADgIIADgGIAGAKIAEAJQABAGABASg");
	this.shape_5.setTransform(45.9,39,2.472,2.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#509B5C").s().p("AgJAKQACgIAJgMIAJgNIABAGQABAHgBAKQgBANgJAKIgOAAQAAgCADgLg");
	this.shape_6.setTransform(67.3,38.7,2.472,2.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#509B5C").s().p("AgBAXQgIgKgCgOQgBgJABgIIABgEIAJALQAJAOACAGQAEAMgBADg");
	this.shape_7.setTransform(41,38.6,2.472,2.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADAAD4").s().p("AgJAKQACgIAJgNIAJgMIACAGQABAGgCAKQgBAOgJAKIgOAAQAAgCADgLg");
	this.shape_8.setTransform(63.9,38.4,2.472,2.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADAAD4").s().p("AgBAXQgIgKgCgOQgBgJABgIIABgEIAJALQAJAOACAGQAEAMgBADg");
	this.shape_9.setTransform(44.1,38.6,2.472,2.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjPDQIAAmfIGfAAIAAGfg");
	this.shape_10.setTransform(54.7,54.8,2.472,2.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4B49B").s().p("Ai8DfQgOAAgJgKQgKgKAAgOIAAl5QAAgOAKgJQAJgLAOAAIF5AAQAOAAAKALQAKAJAAAOIAAF5QAAAOgKAKQgKAKgOAAg");
	this.shape_11.setTransform(55,55,2.472,2.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cuadro_2, new cjs.Rectangle(0,0,110,110), null);


(lib.Computadora_por_atras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5A8A2").s().p("AhMDsIAAg4IAAmfICZAAIAAGfIAAA4g");
	this.shape.setTransform(55.7,60.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABpGIIAAmfIiaAAIAAGfIm4AAQgQAAgNgMQgLgLABgQIAArBQgBgQALgLQANgMAQAAIPTAAQAQAAALAMQANALAAAQIAALBQAAAQgNALQgLAMgQAAg");
	this.shape_1.setTransform(53,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Computadora_por_atras, new cjs.Rectangle(0,0,105.9,84), null);


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


(lib.CERRO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjCBWIAAisIGEAAIAACsg");
	mask.setTransform(19.5,8.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#485150").s().p("AjABXIgChiQA+gbApghQAZgUAVAIQALAEARAKQAKACAIgJQAJgKAEABIAWAJQAOAHAHAAQAFAAAOgIQAOgIALACQAUADBJBFIAABig");
	this.shape.setTransform(19.5,8.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CERRO, new cjs.Rectangle(0,0,38.9,17.3), null);


(lib.Cafetera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BC916B").s().p("AgaACIAAAAQAAgDAFAAIArAAQAFAAAAADIAAAAg");
	this.shape.setTransform(48.1,80,2.472,2.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC916B").s().p("AgaACIAAAAQAAgDAFAAIArAAQAFAAAAADIAAAAg");
	this.shape_1.setTransform(27.3,80,2.472,2.472);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#573311").s().p("AAiA0IhGAAQgEAAgBgBIgJgPQgFgJgLg0IABgaICCAAIABAGQACAJgCANQgDAjgPAdQgFALgHAAIgCAAg");
	this.shape_2.setTransform(48.2,85.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#573311").s().p("AAOAVIgcAAIgCgBIgEgGQgCgDgEgVIAAgKIA0AAIABACIAAAJQgCAOgGALQgCAFgDAAIAAAAg");
	this.shape_3.setTransform(27.4,85.7,2.472,2.472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1D0BE").s().p("AgVAeQgEAAgBgDIgHgTIgFgUIAAgRIBNAAIAAARIgFAUIgHATQgBADgEAAg");
	this.shape_4.setTransform(48,85.6,2.472,2.472);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1D0BE").s().p("AgVAkQgEAAgBgEIgHgWIgFgZIAAgUIBMAAIABAUIgEAZIgIAWQgBAEgEAAg");
	this.shape_5.setTransform(27.4,83.6,2.472,2.472);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1D0BE").s().p("AgqARIAAghIBVAAIAAAhg");
	this.shape_6.setTransform(37.8,51.7,2.472,2.472);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#585B5C").s().p("AALAJIAAgGIgUAAIAAAGIgOAAIAAgGIgLAAIAAgLIBFAAIAAALIgKAAIAAAGg");
	this.shape_7.setTransform(37.7,57.9,2.472,2.472);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#573311").s().p("Ah5BdIAAi5IDzAAIAAC5g");
	this.shape_8.setTransform(36.7,69.9,2.472,2.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#585B5C").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgEgEg");
	this.shape_9.setTransform(36.9,34.1,2.472,2.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1D0BE").s().p("AgPAQQgHgHAAgJQAAgIAHgIQAGgGAJAAQAJAAAHAGQAHAIAAAIQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_10.setTransform(36.8,33.9,2.472,2.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D77A54").s().p("AiTBCIAAiDIEnAAIAACDg");
	this.shape_11.setTransform(36.5,31.2,2.472,2.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1D0BE").s().p("AB0AfIAAgZQAAgKgHgIQgHgIgKAAIizAAQgLAAgJAIQgIAIAAAKIAAAZIgKAAIAAgZQAAgOALgLQALgLAQAAICzAAQAOAAAKALQAKALAAAOIAAAZg");
	this.shape_12.setTransform(36.2,7.7,2.472,2.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#573311").s().p("AhoAMIAAgXIDRAAIAAAXg");
	this.shape_13.setTransform(36.5,12.6,2.472,2.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D77A54").s().p("AlsBGIAAiMILZAAIAACMg");
	this.shape_14.setTransform(36.5,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cafetera, new cjs.Rectangle(0,0,73.1,107.6), null);


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgoApQgSgRABgYQgBgXASgRQARgRAXAAQAYAAARARQASARAAAXQAAAYgSARQgRARgYAAQgXAAgRgRg");
	this.shape.setTransform(5.8,5.9,0.59,0.59);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,6.9,6.9);


(lib.btn_Validar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Compartir recomendaciones", "16px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 228;
	this.text.parent = this;
	this.text.setTransform(9,7.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Aw8CRQgoAAgdgdQgdgdAAgoIAAhdQAAgpAdgcQAdgdAoAAMAh5AAAQApAAAcAdQAdAcABApIAABdQgBAogdAdQgcAdgpAAg");
	this.shape.setTransform(110.8,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("Aw8CRQgoAAgdgdQgdgdAAgoIAAhdQAAgpAdgcQAdgdAoAAMAh5AAAQApAAAcAdQAdAcABApIAABdQgBAogdAdQgcAdgpAAg");
	this.shape_1.setTransform(110.8,17.1);

	this.text_1 = new cjs.Text("Compartir recomendaciones", "16px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 228;
	this.text_1.parent = this;
	this.text_1.setTransform(9,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.text}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,2.6,246.4,29.1);


(lib.brazo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCBfQBIgoABgFIABg9QADhAALgbQAJgVAOAAQAHgBAFAEIAGAIQAGAKgCAQQgBAVgLBBQgLBEgEAGQgJAOhXAkg");
	mask.setTransform(6.7,12.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D8D8").s().p("AhCBhQBIgnABgFQgHghgDghQgIhFAOgaQANgVAWAEQALACAIAGIAGAHQAGALgCAQQgBAVgLBBQgLBEgEAFQgJAOhXAlg");
	this.shape.setTransform(6.7,12.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.brazo, new cjs.Rectangle(0,0.5,13.5,24.9), null);


(lib.brazo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgiBVQgHgDgVhpQADgUANgPQAOgSAKgGQAFgDABAAIAHAqQACAOABAiQABAdABABQACADAwgjIARATQgTASgVARQgkAdgQAAIgFgBg");
	mask_1.setTransform(9.2,9.9);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#881A1E").s().p("AgrAGIBVgUIACAJIhVATg");
	this.shape_1.setTransform(4.4,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#881A1E").s().p("AgiBVQgHgDgVhpQADgUANgPQAOgSAKgGQAFgDABAAIAHAqQACAOABAiQABAdABABQACADAwgjIARATQgTASgVARQgkAdgQAAIgFgBg");
	this.shape_2.setTransform(9.2,9.9);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#881A1E").s().p("AgiBVQgHgDgVhpQADgUANgPQAOgSAKgGQAFgDABAAIAHAqQACAOABAiQABAdABABQACADAwgjIARATQgTASgVARQgkAdgQAAIgFgBg");
	this.shape_3.setTransform(9.2,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.brazo_1, new cjs.Rectangle(2.9,1.3,12.5,17.2), null);


(lib.botondialogose2d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2CIXIAAwtMAsGAAAIAAQtg");
	this.shape.setTransform(140.2,66.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.botondialogose2d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2CIXIAAwtMAsGAAAIAAQtg");
	this.shape.setTransform(140.2,66.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.botondialogose1d3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("A2CIXIAAwtMAsGAAAIAAQtg");
	this.shape.setTransform(140.2,46.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.botondialogose1d2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2CIXIAAwtMAsGAAAIAAQtg");
	this.shape.setTransform(140.2,66.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.botondialogos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A2CIXIAAwtMAsGAAAIAAQtg");
	this.shape.setTransform(140.2,66.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
	this.shape.setTransform(-293.7,-229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.8,-229.1);

	this.text = new cjs.Text("¿En qué consiste Talent Management Review (TMR)?", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-240.5);

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


(lib.personajes4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D3728").s().p("AAAArIgChZIABgBIABBLQABADACACIAAAPg");
	this.shape.setTransform(-100.5,22.3,0.807,0.807);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D3728").s().p("AgDgLQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQACgBADAAIAAARIgBAAIgFgBIABASIAAABg");
	this.shape_1.setTransform(-100.5,17.1,0.807,0.807);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2BB90").s().p("AgUBCIgCAAIgBgCIAAgQIADABIAaAAQAFAAAAgFIAAhWQAAgGgFAAIgKAAQAJgDAIAAQgJgBABgNIAOAAQAFAAAAAGIAAB3QAAAGgFAAg");
	this.shape_2.setTransform(-98.3,21,0.807,0.807);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9D3728").s().p("AgSAJIAAgQIAcAAQgBAMAKAAQgJAAgKAEg");
	this.shape_3.setTransform(-98.7,16.4,0.807,0.807);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D3728").s().p("AAAAnIgChLIAFgGIAABVQgCgBgBgDg");
	this.shape_4.setTransform(-100.4,21.4,0.807,0.807);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9D3728").s().p("AgDgWQgBgMAGgKIACBZQgIgRABgyg");
	this.shape_5.setTransform(-100.8,22.2,0.807,0.807);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9D3728").s().p("AgCgJIAEABIABABIAAAKIgEAGg");
	this.shape_6.setTransform(-100.5,17.7,0.807,0.807);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9D3728").s().p("Ag3B/QgPAAgMgMQgLgLAAgQIAAivQAAgQALgMQALgLAQABIBvAAQAQgBALALQALAMAAAQIAAACQgCAAgDABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIACAdQgGAKAAANQAAAxAJARIAAABQABAEABABIAAArQAAAQgLALQgLAMgQAAg");
	this.shape_7.setTransform(-107.8,22.6,0.807,0.807);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E2BB90").s().p("Ag4BTQgNgEgHgJIABAAIAoAAQAGAAAAgFIAAh4QAAgGgGAAIgOAAQAAgFAEgJQAHgSAPAKQAGADAUAWQARAQAVAAQAfAOAEAoQACAVgEARIgJAEQgLAGgHAHQgJAJgjAHQgSAEgPAAQgPAAgLgEg");
	this.shape_8.setTransform(-93.9,20.6,0.807,0.807);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2BB90").s().p("AgOAxIgDgBIAAhVQAIgIAKgDIALAAQAGAAAAAFIAABXQAAAFgGAAg");
	this.shape_9.setTransform(-98.8,21,0.807,0.807);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3231").s().p("AkGDBIgTgFQgDABgGgQQgLgigOhZQgGgpASgiQANgaAZgTQgDgkANggQASgtAygXQgaAigGAeQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAegiA2gaQBYgpB8gCQguAGghATQgDACABAEQACADAEgBQA2gGAyAFQBPAIAzAgQgPgCgUAAQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAnAQAcAbQAtArAAA8QgPgUgMgLQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAQAugMAwQgCgNgPgPQgDBKgUBfQgVgBgPAYIgKAXQACghgCgpQgEhQgVggQg3hTiWACQgwACgzAJIgqAJQgHARgLAUQgXAqgWAZQgFAUgFCLQgDgngUgNg");
	this.shape_10.setTransform(-97.2,-87.9,0.807,0.807);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3F3231").s().p("ABGAtIgCgBQgMgCgKgHQgNgLAAgQIAAgEQgNgKgNABIAAAAIgDAAIAAAAQgMgBgNAKIAAAEQAAAQgNALQgKAHgNACIgBABIhuAAIgDgCQgSgHgIgMQgGgJAAgIIAAgIIggADIgFgVIAogGQAIgPAZgDIABgBIBnAAQAPAAAMAIQAJAFAEAIQAOgGAOACQAPgCAPAGQAMgVAcAAIBmAAIACABQAZADAIAPIAdAEIgCAOIgZAGIAAAIQABAIgHAJQgIAMgRAHIgEACgAAxgVIAAAhIACAIQAEAIAKAGIB3AAQANgFAAgRIAAggQgEgKgLAAIh4AAQgNADAAAGgAi6gVIAAAhIACAIQAEAIAKAGIB3AAQANgFAAgRIAAggQgEgKgLAAIh4AAQgNADAAAGg");
	this.shape_11.setTransform(-99,-72.7,0.807,0.807);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A9B3BC").s().p("AhRATICGhOIAeA7QgDAXgsAVQgVAKgVAGg");
	this.shape_12.setTransform(-91.1,-37.7,0.807,0.807);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A9B3BC").s().p("AgdAsQg0gegDgXIAeg7ICLBgIhAApQgYgKgagPg");
	this.shape_13.setTransform(-104.6,-38.5,0.807,0.807);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F3231").s().p("AAzABQgRgPgVAGQgOAGgRACQgjAGgKgKIAJgEQAPgEAcgFIAigBQAkAGAFAfQgFgKgIgIg");
	this.shape_14.setTransform(-89.1,-77.4,0.807,0.807);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F3231").s().p("AgXgRQATgDAQAEQAtAHAHAFQgKALgigHIgggHQgVgHgRAPQgJAJgEAJQAEgfAkgFg");
	this.shape_15.setTransform(-108.6,-77.2,0.807,0.807);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E9AF91").s().p("AAigBIgQgDIgHgBIgHAAIggAEQgQAEgOAFQALgJARgEQAPgGASgBIASABIAQAFQASAIAEAMQgJgKgQgFg");
	this.shape_16.setTransform(-108.2,-74.7,0.807,0.807);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E9AF91").s().p("AgqALIgRgLIgDgBIADgBQASgKAYgFIAVgDQAbAAASAMQAJAGADAFIABABIgBABQgIAGgVAFIgUAFIgJAAQgXAAgWgKgAg2AAQAcAVAlgEQAhgGANgIQgRgTgkAAQgfABgbAPg");
	this.shape_17.setTransform(-108.1,-73.9,0.807,0.807);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3F3231").s().p("AgMAMQgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_18.setTransform(-89,-73.9,0.807,0.807);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3F3231").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAEgFAHAAQAHAAAGAFQAFAFAAAGQAAAHgFAFQgGAFgHAAQgHAAgEgFg");
	this.shape_19.setTransform(-107.9,-73.9,0.807,0.807);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAEATQgagBgVgKIgPgJIAXgKQAZgJAOACIAYADQAZAGAGAPQghANgSAAIgEAAg");
	this.shape_20.setTransform(-108.1,-73.9,0.807,0.807);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E9AF91").s().p("AgkgGIARgFIASgBQARABAPAGQARAEALAJQgOgFgRgEIgegEIgIAAIgIABIgPADQgPAFgKAKQAEgMASgIg");
	this.shape_21.setTransform(-88.8,-74.7,0.807,0.807);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E9AF91").s().p("AgLAVQgkgHgNgJIgBgBIABgBIAMgLQARgMAcAAQAGAAAPADQAYAFASAKIADABIgCABQgHAGgLAFQgVAKgXAAIgKAAgAg3ADQANAIAgAGQAkAEAdgVQgRgJgWgFIgTgCQglAAgPATg");
	this.shape_22.setTransform(-88.9,-73.9,0.807,0.807);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmANIgUgHQAGgPAZgGQANgDALAAQAXgDAoAUQgGAEgKAFQgVAKgaABIgDABQgLAAgVgHg");
	this.shape_23.setTransform(-89,-73.9,0.807,0.807);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E6A680").s().p("AgnANIADgDQAHAGALgGQADgIAIgBIAHAAQAaADAHgJQAEgFgCgFIAEgCQADAIgFAIQgJAJgcgBIgBAAQgCgBgDAAQgGABgCAFIAAABIgBAAQgFAFgIAAQgHAAgEgFg");
	this.shape_24.setTransform(-96.1,-64.1,0.807,0.807);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6A680").s().p("AAQANIgBgBQgDgFgFgBIgFABIgBAAQgcACgJgKQgDgFAAgFIABgGIAEACIAAAEQAAADACADQAHAJAZgDIAIAAQAIABADAIQAKAHAIgHIADADQgEAFgHAAQgIAAgFgFg");
	this.shape_25.setTransform(-100.6,-64.1,0.807,0.807);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7A37F").s().p("AhDAAIgTgLIBWAEIBXgEQgFAGgOAFQgcAMgoAAQgoAAgbgMg");
	this.shape_26.setTransform(-98.4,-56.5,0.807,0.807);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E39F7B").s().p("AhWACIA8gLIAFAEQAJAEAMAAQAVAAAHgIQAWAGAlAFQgbAHghAAIgbAAIgVABQggAAghgIg");
	this.shape_27.setTransform(-98.4,-57.7,0.807,0.807);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E2BB90").s().p("AgqFEQgdgLglgaQhKgzgphHQgDgEAAgEIgBguIgCgBQgMAAgHgLIAAAAQgEgGgHgmIgJg3QgEgWAAgPQAAgRAFgCQAFgCAKAIQAEADACAHIAFgBQgJgnAAgsQAAhjA0gZIABgBIA2gpQBDgpBAAAIAOAAQBBgCBGAqQAiAVAXAVIAAABQA0AZAABjQAAAsgIAnIgCAJIAGgHQAFgGAHgFQAJgGAEACIABAAQAKAFgIAsIgJA8QgJAogCAEIgBAAQgHALgMAAIgCABIgFA3QgBAFgCADQgWAgggAgQg2A3g8AfIgDABQgPAFgUABIgNABQgYAAgTgIg");
	this.shape_28.setTransform(-98.6,-73,0.807,0.807);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D7AE86").s().p("AgVB8Qi0gHAtgsQAngnAThIIAMhBIBWgSQBVgMABAeQACAhAnBjQAUAyATArQg8ADg5AAIhGgBg");
	this.shape_29.setTransform(-97.9,-46.3,0.807,0.807);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHABQgBgCADgDQACgDADAAQAHgBABAIQABACgDADQgCADgDAAQgHAAgBgHg");
	this.shape_30.setTransform(-86.7,23.3,0.807,0.807);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#626568").s().p("AgogEIgGgzIARgCQAVgDAYgKQgEAQAPA5QAOA2AGAEIg6AKQgTgVgKg2g");
	this.shape_31.setTransform(-86.7,20.6,0.807,0.807);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A9B3BC").s().p("AjJAaIgCgqIGEhYQgDAMAPAbQAMAVgJADIgKACQAJAQACAoQgXA0h2ARQiTALhCAIQgmgfgKgwg");
	this.shape_32.setTransform(-72.6,17.5,0.807,0.807);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D6D8D8").s().p("Ai4I1QiAgfgBgOQgDgnAPhmIAQh1QADhFAHgnQACgNgGgSQhCi+goiqQg8j/AzgcQA/gkCsgYQBWgMBJgFICfARQCtAYA/AkQAyAcg7D/QgoCnhCDBQgGASACANQAHAnADBFIAQB1QAPBmgDAnQgBANiHAgQiDAeg2ADQg2gDh7geg");
	this.shape_33.setTransform(-97.4,6.1,0.807,0.807);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000007").s().p("ACxPMIhWgMIgLn2QgNoAgHgxQgFgxgUjNIgSjDQhOIsAAAUIgeHeIgeHOIkNAAIASr1IATnPIBFrPQBHAwEWgOQCLgHB9gRIAiDtQAGA3AKB7QAMCTAAAxQAAAugPJuIgPJlIgPAKQgTAMgdAQQgTALgsAAQgZAAghgEg");
	this.shape_34.setTransform(-99.2,125.8,0.807,0.807);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#554436").s().p("AA7BcIiZgvQhZAFgLgJQgHgGgBgnIAAgnIAQgnIDKgJIAWAxIAuAZQAzAaAYALQAbAMAKAOQAIALgBAQQgCASgGABg");
	this.shape_35.setTransform(-73.1,209.4,0.807,0.807);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#554436").s().p("AhbBpQgUgSgKgbQgJgaAhgzIAjgvIANg1ICtAAIAAB+QAAAfgFAIQgNAYgsAXQgjASAEADIhnACQgIgDgLgKg");
	this.shape_36.setTransform(-122.5,212.1,0.807,0.807);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIABQgBgDADgDQACgDAEAAQAIgBABAJQABADgDADQgCADgEAAQgIAAgBgIg");
	this.shape_37.setTransform(-141.6,64.6,0.807,0.807);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#626568").s().p("AhHAcIgEhDQAFAFBAACQBBADARgJQgHAuAGAaQgZAEggACIgTAAQgvAAgXgMg");
	this.shape_38.setTransform(-138.9,64.3,0.807,0.807);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A9B3BC").s().p("AipJnQgJh2AYj2QAXjyAahFQACj2A+i2QATg6AWgsIATggICZB9IjJROQgNAIgYAGQgUAEgWAAQgdAAgggIg");
	this.shape_39.setTransform(-130.8,14.4,0.807,0.807);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EFAB83").s().p("AgxGjQgeg1gOhUQgHgvAMg3IANguIABgCIgCg2QgCgVAAgaQgDhmAJipIAPjTIBMAIQAxAFAcAFIgFAcQgiClgkCQQgJAkgDBAQgDBJAPADIAHAGIgCABQAOAPALAlQAMAkgDARQgBAFAGAsQAFAigMARQgLARgUgmQgYgtgDgBQgNgHAIA6QAFAiAJAvQAEAogXAvQgDAIgGAAQgLAAgTghg");
	this.shape_40.setTransform(-136.2,61,0.807,0.807);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A9B3BC").s().p("AkxE9IgCglIG3g8IhongICZh9IATAhQAXArATA6QA+C2ACD1QAHBZgfApQgcAlhJAOQguAIiGAEQicAHhlAKQgngagKgrg");
	this.shape_41.setTransform(-79.8,-4.8,0.807,0.807);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A9B1BA").s().p("Ag8ANIBig3IAXAqQgDARgfAPQgQAHgPAEg");
	this.shape_42.setTransform(48.1,-36.9,1.084,1.084);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A9B1BA").s().p("AgVAgQgmgWgCgQIAVgrIBmBFIgvAeQgRgHgTgLg");
	this.shape_43.setTransform(34.8,-37.7,1.084,1.084);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3F3231").s().p("ACqCUIAAhIQAAgTgSgtQgVgzgVgGQgRgGgkATQgnAVgPAAIgFAAQgPAAgngVQgkgTgRAGQgVAGgUAzQgSAtAAATIgBBIQgCAEgGgMQgDgGgHgDQgKhwAchDQArhqB+AHIABAAQB+gHArBqQAbBDgIBwQgIADgDAGQgFAJgCAAIgBgBg");
	this.shape_44.setTransform(40.2,-84.8,1.084,1.084);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AA2ABQgSgRgWAIQgPAFgSADQglAGgKgLIAJgEQAQgEAdgFIAkgBQAnAGAEAhQgEgLgJgIg");
	this.shape_45.setTransform(49.4,-75.5,1.084,1.084);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgXgSQATgDARADQAvAIAHAFQgKALgkgGIgigIQgWgIgSARQgJAJgEAKQAEggAngGg");
	this.shape_46.setTransform(30.7,-75.6,1.084,1.084);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#957667").s().p("AgbgGIANgEIANgCQAOACAKAEQAMAFAJAJQgOgHgIgBIgYgFIgFAAIgGABIgMADQgLAFgIAJQAEgMANgHg");
	this.shape_47.setTransform(49.5,-73.3,1.084,1.084);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#957667").s().p("AAZgBIgLgDIgGgBIgGAAIgWAFQgJAAgPAIQAKgJAMgFQAKgEAOgCIAOACQAHABAEADQAOAGADANQgHgJgMgFg");
	this.shape_48.setTransform(30.9,-73.3,1.084,1.084);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AB9083").s().p("AgdAKIACgDQAGAFAIgFQACgFAGgBQAEgBABABQATACAGgHQADgDgCgFIAEgBQACAHgEAEQgGAIgWgCIAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgEABgCAEIgBABQgEADgFAAQgFAAgEgDg");
	this.shape_49.setTransform(42.7,-61.3,1.084,1.084);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#AB9083").s().p("AAMAKIgBAAIAAgBQgCgEgEgBIgEAAIAAAAQgVACgHgIQgCgDAAgEQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADABIgBADQAAADACACQAFAHATgCIAGAAQAGABACAFQAIAFAGgFIACADQgEADgEAAQgGAAgEgDg");
	this.shape_50.setTransform(38.2,-61.3,1.084,1.084);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#997B6D").s().p("AgyAAIgPgNIBBADIBCgDQgFAHgKAGQgVAOgeAAQgdAAgVgOg");
	this.shape_51.setTransform(40.5,-54.7,1.084,1.084);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#957667").s().p("AhBACIAtgIIAFADQAHADAIAAQAQAAAFgGIAtAIQgVAEgYABIgVAAIgPAAQgZAAgZgFg");
	this.shape_52.setTransform(40.5,-56.3,1.084,1.084);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#957667").s().p("AgIAUQgbgHgKgIIgBgBIABgBIAJgLQAOgMAUAAIAQADQASAFANAKIACABIgBABQgTAVgcAAgAgpADQAKAIAYAFQAaADAXgUQgNgIgRgEIgOgDQgcAAgLATg");
	this.shape_53.setTransform(49.4,-72.3,1.084,1.084);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3F3231").s().p("AgMANQgFgFgBgIQABgGAFgGQAGgGAGABQAHgBAGAGQAGAGgBAGQABAIgGAFQgGAFgHABQgGgBgGgFg");
	this.shape_54.setTransform(49.4,-72.3,1.084,1.084);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgcANIgQgIQAFgOAUgGQAJgCAIAAQARgEAdAUQgDAEgIAFQgPAKgUAAIgDABQgJAAgOgGg");
	this.shape_55.setTransform(49.4,-72.3,1.084,1.084);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#957667").s().p("AACAUQgRAAgQgKIgNgKIgCgBIACgBQAWgQAZgBQAVAAANALQAHAGADAFIAAABIgBABQgKAIgbAHgAgpAAQAIAGAKAFQAPAIARgCQAYgGAJgIQgKgTgdAAQgXACgVAOg");
	this.shape_56.setTransform(30.8,-72.3,1.084,1.084);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3F3231").s().p("AgMANQgFgFgBgIQABgGAFgGQAFgGAHABQAHgBAGAGQAGAGgBAGQABAIgGAFQgGAFgHABQgHgBgFgFg");
	this.shape_57.setTransform(30.9,-72.3,1.084,1.084);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AADASQgUAAgPgKIgMgJIARgKQAUgIAKACIASACQASAGAFAOQgZAOgNAAIgDgBg");
	this.shape_58.setTransform(30.9,-72.3,1.084,1.084);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#815F4F").s().p("AgfD0QgWgJgcgTQg3gngfg1IgCgGIgBgjIgCAAQgKAAgEgIIAAgBIAAAAQgEgHgEgZIgHgqQgDgRAAgKQAAgNAEgCQAEgBAHAGQAEACABAFIADgBQgGgdAAghQAAhKAngTIAAAAIApgfQAygfAwAAIAFAAIAAAAIAFAAIAAAAQAxgCA1AfQAaAQAQARIABAAQAnATAABKQAAAhgGAdIgCAHIAFgFQADgEAGgEQAGgFAEACIAAAAQAIAEgGAgIgHAtQgFAdgDAEIgBABQgFAHgJABIgCAAIgEAqQAAACgCAEQgRAXgXAZQgpApgsAXIgDABQgTAFgSAAQgQAAgPgFg");
	this.shape_59.setTransform(40.3,-70.3,1.084,1.084);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#957667").s().p("AgPBOQh9gDAighQAdgdAIgoIACgjIBAgNQBAgJABAWQABAZAaA6IAaA2Qg2AEgxAAIgbgBg");
	this.shape_60.setTransform(41.2,-45,1.084,1.084);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BBCACB").s().p("AgFEUQgSgMgQgqQgUiTgYh6QgPhQAFg2QAGg8AfgKQAEgBAZgTQAUgPAHAIQANAPAPAqQAPAnALAvQAIA5AOCEIATDBQACAYgTAEQgbADgSADIgOABQgPAAgJgGg");
	this.shape_61.setTransform(75.5,-1.1,1.084,1.084);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BBCACB").s().p("AjeBvQgwgEgKgaQgNguAdgrQAfgtA4gHIDlgcQCygVAhgCQARA2ADAbQAHAygXAIQgJADiMAXQiQAZgtAMQhQAVg0AAIgTgBg");
	this.shape_62.setTransform(30.2,19.9,1.084,1.084);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#BBCACB").p("AAHhBQgHACgWgDQgOgCgMANQgPAQAGAmQAGAjASASQAjAlAlgxQAOgTAFgUQAFgVgJgHg");
	this.shape_63.setTransform(58.3,15.7,1.084,1.084);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AghA0QgSgSgGgjQgGgmAPgQQAMgNAOACQAWADAHgCIAvAmQAJAHgFAVQgFAUgOATQgVAcgUAAQgQAAgPgQg");
	this.shape_64.setTransform(58.3,15.7,1.084,1.084);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#957667").s().p("AhKA9QgNgjgCgPQgBgJAIgcIAJgaIBPgSQAxgFAWAjQALARABATQAJAog3AWIg3AOg");
	this.shape_65.setTransform(65.7,14.3,1.084,1.084);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#957667").s().p("AgZBFIgQgHQgQgPgGgkQgFgiAJgQQAIgNAZgLQAWgKAIABQAFABAXAAQAUABgGAIQgBADgLAHIgLAHQgCAFAGACQAHACANgFQARgGgBAEIgFAMQABAGgSAGQgSAGAAADQAAACAVABQAVABAAAGQAAAHgYAHIgYAJIAZACQAYACgFAIQgGAKgRALQgQAMgQAEIgIABQgKAAgNgEg");
	this.shape_66.setTransform(63,14.1,1.084,1.084);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#957667").s().p("AgqA6Qg3gWAJgoQABgTALgRQAWgjAxAFIBPASIAJAaQAIAcgBAJQgDAPgMAjIg+ALQgcgDgbgLg");
	this.shape_67.setTransform(19.1,14.3,1.084,1.084);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#957667").s().p("AgNAIIADglQAVgQADAnQABASgDAXg");
	this.shape_68.setTransform(26.2,6.7,1.084,1.084);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#957667").s().p("AgFBIQgQgEgQgMQgRgLgGgKQgFgIAYgCIAZgCIgYgJQgYgHAAgHQAAgGAVgBQAVgBAAgCQAAgDgSgGQgSgGABgGIgFgMQgBgEARAGQANAFAHgCQAGgCgCgFIgLgHQgLgHgBgDQgGgIAUgBIAbgBQAJgBAWAKQAZALAIANQAJAQgFAiQgGAkgQAPQgUALgRAAIgKgBg");
	this.shape_69.setTransform(21.8,14.1,1.084,1.084);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#BBCACB").p("AgIhEQAIACAWgCQAPgCANAOQAQASgFAmQgFAlgRASQglAkgng0QgQgUgGgUQgGgWAJgIg");
	this.shape_70.setTransform(25.8,15.4,1.084,1.084);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AglAnQgQgUgGgUQgGgWAJgIIAwglQAIACAWgCQAPgCANAOQAQASgFAmQgFAlgRASQgPAPgQAAQgVAAgYgfg");
	this.shape_71.setTransform(25.8,15.5,1.084,1.084);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AFBCBC").s().p("ABIBbQgtgMiQgZQiMgXgJgDQgXgIAHgyQADgZAQg4QAiACCxAVIDlAcQA5AHAfAtQAdArgOAuQgJAagwAEIgTABQgzAAhRgVg");
	this.shape_72.setTransform(54.4,19.9,1.084,1.084);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BBCACB").s().p("AggEZQgigDgLgDQgTgEACgYIATjBQAOiEAIg5QALgvAPgnQAPgqANgPQAHgIAUAPQAZATAEABQAfAKAGA8QAFA2gPBQQgYB6gUCTQgQAqgSAMQgJAGgPAAIgOgBg");
	this.shape_73.setTransform(9.3,-1.1,1.084,1.084);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_74.setTransform(46.9,39.1,1.084,1.084);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_75.setTransform(43.3,45.5,1.084,1.084);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#747888").s().p("AgIgOIAQAZIgBAAIACACIgCACg");
	this.shape_76.setTransform(42.4,44.2,1.084,1.084);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#747888").s().p("AAAAAIAAAAIABABIAAAAg");
	this.shape_77.setTransform(39.7,39.1,1.084,1.084);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#747888").s().p("AgNAZIAAAAIgBgCIAdgxIgcA1g");
	this.shape_78.setTransform(41.3,36.5,1.084,1.084);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#747888").s().p("AgKgSIAUAfIAAABIABACIgCADg");
	this.shape_79.setTransform(45.8,37.5,1.084,1.084);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAAAAIAMATIAUAlIggA2g");
	this.shape_80.setTransform(43.3,39.3,1.084,1.084);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#747888").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_81.setTransform(43.2,20.8,1.084,1.084);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_82.setTransform(43.3,21,1.084,1.084);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#747888").s().p("AgIgPIAQAZIgBAAIACADIgCADg");
	this.shape_83.setTransform(42.4,31.6,1.084,1.084);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAegxIABABIgdA2g");
	this.shape_84.setTransform(41.4,23.9,1.084,1.084);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgWAng");
	this.shape_85.setTransform(44.5,30.9,1.084,1.084);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#747888").s().p("AgOgaIAcAuIAAAAIABACIgCAGg");
	this.shape_86.setTransform(45.2,24.2,1.084,1.084);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#747888").s().p("AgeACIAeg2IAAABIABgDIACAEIAcA2IgfAyg");
	this.shape_87.setTransform(43.3,26.8,1.084,1.084);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#747888").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_88.setTransform(43.2,8.5,1.084,1.084);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_89.setTransform(46.9,14.2,1.084,1.084);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_90.setTransform(43.3,20.6,1.084,1.084);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#747888").s().p("AgIgOIAQAZIgBABIACACIgBAAIgBgBIgBACg");
	this.shape_91.setTransform(42.4,19.3,1.084,1.084);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#747888").s().p("AAAAAIAAAAIABABIAAAAg");
	this.shape_92.setTransform(39.7,14.2,1.084,1.084);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#747888").s().p("AgOAaIAAgBIgBgBIAfgzIAAAAIgdA3g");
	this.shape_93.setTransform(41.4,11.6,1.084,1.084);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#747888").s().p("AgMgVIAXAlIAAAAIABACIgCAEg");
	this.shape_94.setTransform(45.6,12.4,1.084,1.084);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#747888").s().p("AgeABIAeg3IAAABIAAgBIAfA5IgfA0g");
	this.shape_95.setTransform(43.3,14.5,1.084,1.084);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#747888").s().p("AgIgOIAQAYIgBABIACACIgBACIgBAAIAAAAg");
	this.shape_96.setTransform(42.4,6.9,1.084,1.084);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#747888").s().p("AgNAZIAAgBIgBgCIAdgwIgcA1g");
	this.shape_97.setTransform(41.3,-0.8,1.084,1.084);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgWAng");
	this.shape_98.setTransform(44.5,6.2,1.084,1.084);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_99.setTransform(45.8,0.2,1.084,1.084);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAMATIAUAmIggA0g");
	this.shape_100.setTransform(43.3,2,1.084,1.084);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#747888").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_101.setTransform(43.2,-16.5,1.084,1.084);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_102.setTransform(43.3,-16.3,1.084,1.084);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_103.setTransform(43.3,-4.5,1.084,1.084);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#747888").s().p("AgIgPIAQAZIgBABIACACIgCADg");
	this.shape_104.setTransform(42.4,-5.7,1.084,1.084);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#747888").s().p("AAAAAIAAAAIABABIAAAAg");
	this.shape_105.setTransform(39.7,-10.9,1.084,1.084);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAegxIABACIgdA1g");
	this.shape_106.setTransform(41.4,-13.4,1.084,1.084);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#747888").s().p("AgOgbIAcAvIAAAAIABACIgCAGg");
	this.shape_107.setTransform(45.2,-13.1,1.084,1.084);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#747888").s().p("AgeABIAeg1IAAAAIABgCIACADIAcA3IgfAyg");
	this.shape_108.setTransform(43.3,-10.5,1.084,1.084);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_109.setTransform(43.3,-16.7,1.084,1.084);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#747888").s().p("AAHANIgBACIgOgdIAQAZIgBAAIACADIgBABg");
	this.shape_110.setTransform(42.4,-18.1,1.084,1.084);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#747888").s().p("AAAAAIAAgBIABABIAAABg");
	this.shape_111.setTransform(39.7,-23.1,1.084,1.084);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#747888").s().p("AgNAZIAAgBIgBgCIAdgvIgcA0g");
	this.shape_112.setTransform(41.3,-25.7,1.084,1.084);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXglIgWApg");
	this.shape_113.setTransform(44.5,-18.7,1.084,1.084);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_114.setTransform(45.8,-24.6,1.084,1.084);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#747888").s().p("AgfAAIAfg2IAAAAIAMATIAUAmIggA0g");
	this.shape_115.setTransform(43.3,-22.8,1.084,1.084);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#747888").s().p("AgIgOIAQAZIgBAAIACACIgCACg");
	this.shape_116.setTransform(42.4,-30.6,1.084,1.084);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#747888").s().p("AAAAAIAAAAIABABIAAAAg");
	this.shape_117.setTransform(39.7,-35.7,1.084,1.084);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#747888").s().p("AgFALIAAgBIgBgCIALgTIACAAIgMAXg");
	this.shape_118.setTransform(40.5,-36.7,1.084,1.084);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#747888").s().p("AgHgNIABAAIANAVIABACIgCAEg");
	this.shape_119.setTransform(46,-36.7,1.084,1.084);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#747888").s().p("AgfgMIAOgZIAOgBIAAgDIAUADIAPAcIggA0g");
	this.shape_120.setTransform(43.3,-34,1.084,1.084);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_121.setTransform(54.1,39.1,1.084,1.084);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#747888").s().p("AgIgOIAQAZIAAAAIABACIgCACg");
	this.shape_122.setTransform(49.6,44.2,1.084,1.084);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#747888").s().p("AgOAZIABAAIgCgCIAegxIgcA1g");
	this.shape_123.setTransform(48.5,36.5,1.084,1.084);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#747888").s().p("AgKgSIAUAfIAAABIABACIgCADg");
	this.shape_124.setTransform(52.9,37.5,1.084,1.084);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAAAAIAMATIAUAlIggA2g");
	this.shape_125.setTransform(50.4,39.3,1.084,1.084);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#747888").s().p("AAAAAIABgBIAAABIgBACg");
	this.shape_126.setTransform(50.3,20.8,1.084,1.084);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_127.setTransform(50.4,21,1.084,1.084);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#747888").s().p("AgIgPIAQAZIAAAAIABADIgCADg");
	this.shape_128.setTransform(49.6,31.6,1.084,1.084);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAegxIABABIgdA2g");
	this.shape_129.setTransform(48.6,23.9,1.084,1.084);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgWAng");
	this.shape_130.setTransform(51.7,30.9,1.084,1.084);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#747888").s().p("AgOgaIAcAuIAAAAIABACIgDAGg");
	this.shape_131.setTransform(52.4,24.2,1.084,1.084);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#747888").s().p("AgeACIAeg2IAAABIABgDIACAEIAcA2IgfAyg");
	this.shape_132.setTransform(50.4,26.8,1.084,1.084);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#747888").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_133.setTransform(50.4,8.5,1.084,1.084);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_134.setTransform(54.1,14.2,1.084,1.084);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_135.setTransform(50.5,20.6,1.084,1.084);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#747888").s().p("AgIgOIAQAZIAAABIABACIgBAAIAAgBIgCACg");
	this.shape_136.setTransform(49.6,19.3,1.084,1.084);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#747888").s().p("AgOAaIAAgBIgBgBIAfgzIAAAAIgdA3g");
	this.shape_137.setTransform(48.6,11.6,1.084,1.084);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#747888").s().p("AgLgVIAWAlIAAAAIABACIgCAEg");
	this.shape_138.setTransform(52.7,12.4,1.084,1.084);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#747888").s().p("AgfABIAfg3IAAABIAAgBIAfA5IgfA0g");
	this.shape_139.setTransform(50.5,14.5,1.084,1.084);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#747888").s().p("AgIgOIAQAYIAAABIABACIgBACIgBAAg");
	this.shape_140.setTransform(49.6,6.9,1.084,1.084);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#747888").s().p("AgOAZIABgBIgCgCIAegwIgcA1g");
	this.shape_141.setTransform(48.5,-0.8,1.084,1.084);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgWAng");
	this.shape_142.setTransform(51.7,6.2,1.084,1.084);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_143.setTransform(52.9,0.2,1.084,1.084);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAMATIAUAmIggA0g");
	this.shape_144.setTransform(50.4,2,1.084,1.084);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#747888").s().p("AAAAAIABgBIAAABIgBACg");
	this.shape_145.setTransform(50.3,-16.5,1.084,1.084);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#747888").s().p("AgIgPIAQAZIAAABIABACIgCADg");
	this.shape_146.setTransform(49.6,-5.7,1.084,1.084);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAegxIABACIgdA1g");
	this.shape_147.setTransform(48.6,-13.4,1.084,1.084);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#747888").s().p("AgOgbIAcAvIAAAAIABACIgDAGg");
	this.shape_148.setTransform(52.4,-13.1,1.084,1.084);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#747888").s().p("AgeABIAeg1IAAAAIABgCIACADIAcA3IgfAyg");
	this.shape_149.setTransform(50.4,-10.5,1.084,1.084);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#747888").s().p("AAIANIgCACIgOgdIAQAZIAAAAIABADIgBABg");
	this.shape_150.setTransform(49.6,-18.1,1.084,1.084);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#747888").s().p("AgOAZIABgBIgCgCIAegvIgcA0g");
	this.shape_151.setTransform(48.5,-25.7,1.084,1.084);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXglIgWApg");
	this.shape_152.setTransform(51.7,-18.7,1.084,1.084);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_153.setTransform(52.9,-24.6,1.084,1.084);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#747888").s().p("AgfAAIAfg2IAAAAIAMATIAUAmIggA0g");
	this.shape_154.setTransform(50.4,-22.8,1.084,1.084);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#747888").s().p("AgIgOIAQAZIABACIgCACg");
	this.shape_155.setTransform(49.6,-30.6,1.084,1.084);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#747888").s().p("AgFAKIABgBIgCgCIALgRIACAAIgLAVg");
	this.shape_156.setTransform(47.6,-36.6,1.084,1.084);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#747888").s().p("AgFgIIAEABIAFAKIABACIgCAEg");
	this.shape_157.setTransform(53.5,-36.1,1.084,1.084);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#747888").s().p("AgfgPIAMgXIAqAHIAJASIggA0g");
	this.shape_158.setTransform(50.4,-33.6,1.084,1.084);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_159.setTransform(61.2,39.1,1.084,1.084);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_160.setTransform(58.8,43.5,1.084,1.084);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#747888").s().p("AgKgSIAUAfIAAABIABACIgCADg");
	this.shape_161.setTransform(60.1,37.5,1.084,1.084);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#747888").s().p("AgIgOIAQAZIAAAAIABACIgCACg");
	this.shape_162.setTransform(56.7,44.2,1.084,1.084);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#747888").s().p("AgOAZIABAAIgCgCIAfgxIgdA1g");
	this.shape_163.setTransform(55.7,36.5,1.084,1.084);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_164.setTransform(57.6,45.8,1.084,1.084);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAAAAIAMATIAUAlIggA2g");
	this.shape_165.setTransform(57.6,39.3,1.084,1.084);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#747888").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_166.setTransform(57.5,20.8,1.084,1.084);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_167.setTransform(58.8,30.9,1.084,1.084);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#747888").s().p("AgPgaIAeAuIAAAAIABACIgEAGg");
	this.shape_168.setTransform(59.6,24.2,1.084,1.084);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#747888").s().p("AgIgPIAQAZIAAAAIABADIgCADg");
	this.shape_169.setTransform(56.7,31.6,1.084,1.084);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAegxIABABIgdA2g");
	this.shape_170.setTransform(55.7,23.9,1.084,1.084);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#747888").s().p("AgeACIAeg2IAAABIABgDIACAEIAcA2IgfAyg");
	this.shape_171.setTransform(57.6,26.8,1.084,1.084);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#747888").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_172.setTransform(57.6,20.6,1.084,1.084);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_173.setTransform(58.8,18.6,1.084,1.084);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#747888").s().p("AgLgVIAWAlIAAAAIABACIgCAEg");
	this.shape_174.setTransform(59.9,12.4,1.084,1.084);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#747888").s().p("AgIgOIAQAZIAAABIABACIAAAAIgBgBIgCACg");
	this.shape_175.setTransform(56.7,19.3,1.084,1.084);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#747888").s().p("AgOAaIAAgBIgBgBIAfgzIAAAAIgdA3g");
	this.shape_176.setTransform(55.7,11.6,1.084,1.084);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#747888").s().p("AgeABIAeg3IAAABIAAgBIAJAOIAXArIggA0g");
	this.shape_177.setTransform(57.6,14.5,1.084,1.084);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_178.setTransform(58.8,6.2,1.084,1.084);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_179.setTransform(60.1,0.2,1.084,1.084);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#747888").s().p("AgIgOIAQAYIAAABIABACIgBACIgBAAg");
	this.shape_180.setTransform(56.7,6.9,1.084,1.084);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#747888").s().p("AgOAZIABgBIgCgCIAfgwIgdA1g");
	this.shape_181.setTransform(55.7,-0.8,1.084,1.084);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAMATIAUAmIggA0g");
	this.shape_182.setTransform(57.6,2,1.084,1.084);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#747888").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_183.setTransform(57.6,8.4,1.084,1.084);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#747888").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_184.setTransform(57.5,-16.5,1.084,1.084);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_185.setTransform(58.8,-6.5,1.084,1.084);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#747888").s().p("AgPgbIAeAvIAAAAIABACIgEAGg");
	this.shape_186.setTransform(59.6,-13.1,1.084,1.084);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#747888").s().p("AgIgPIAQAZIAAABIABACIgCADg");
	this.shape_187.setTransform(56.7,-5.7,1.084,1.084);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAegxIABACIgdA1g");
	this.shape_188.setTransform(55.7,-13.4,1.084,1.084);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#747888").s().p("AAAABIAAAAIAAAAIAAgCIABABIgBABg");
	this.shape_189.setTransform(57.6,-4.2,1.084,1.084);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#747888").s().p("AgeABIAeg1IAAAAIABgCIACADIAcA3IgfAyg");
	this.shape_190.setTransform(57.6,-10.5,1.084,1.084);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXglIgVApg");
	this.shape_191.setTransform(58.8,-18.7,1.084,1.084);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_192.setTransform(60.1,-24.6,1.084,1.084);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#747888").s().p("AAIANIgCACIgOgdIAQAZIAAAAIABADIAAABg");
	this.shape_193.setTransform(56.7,-18.1,1.084,1.084);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#747888").s().p("AgOAZIABgBIgCgCIAfgvIgdA0g");
	this.shape_194.setTransform(55.7,-25.7,1.084,1.084);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#747888").s().p("AgfAAIAfg2IAAAAIAMATIAUAmIggA0g");
	this.shape_195.setTransform(57.6,-22.8,1.084,1.084);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_196.setTransform(58.8,-31.3,1.084,1.084);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#747888").s().p("AgBgBIADABIgCACg");
	this.shape_197.setTransform(61.1,-35.4,1.084,1.084);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#747888").s().p("AgIgOIAQAZIABACIgCACg");
	this.shape_198.setTransform(56.7,-30.6,1.084,1.084);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#747888").s().p("AgCAFIAAgBIgBgCIAEgHIADAAIgGALg");
	this.shape_199.setTransform(54.4,-36.1,1.084,1.084);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#747888").s().p("AgfgUIAHgNIA2ALIACAEIggA0g");
	this.shape_200.setTransform(57.6,-33.1,1.084,1.084);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#747888").s().p("AAAABIAAABIAAgBIAAgBIABAAIgBACg");
	this.shape_201.setTransform(57.6,-29,1.084,1.084);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#747888").s().p("AgHgOIAOAZIAAAAIABACIgBACg");
	this.shape_202.setTransform(63.9,44.2,1.084,1.084);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#747888").s().p("AgNAZIAAAAIgBgCIAdgxIgbA1g");
	this.shape_203.setTransform(62.8,36.5,1.084,1.084);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#747888").s().p("AgIAQIABgBIgCgBIASgdIAAAAIgQAfg");
	this.shape_204.setTransform(65.7,43.9,1.084,1.084);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_205.setTransform(64.8,45.8,1.084,1.084);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#747888").s().p("AgYABIAcg1IACgCIAMASQAFAiACAcIgTAeg");
	this.shape_206.setTransform(64.1,39.3,1.084,1.084);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#747888").s().p("AgHgPIAOAZIAAAAIABADIgBADg");
	this.shape_207.setTransform(63.9,31.6,1.084,1.084);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#747888").s().p("AgNAXIAAgBIgBgCIAcgtIABADIgbAwg");
	this.shape_208.setTransform(62.8,24.1,1.084,1.084);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#747888").s().p("AgCAHIABgBIgCgDIAGgJIABADIgFAKg");
	this.shape_209.setTransform(65.1,32.3,1.084,1.084);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#747888").s().p("AgSgBIAbgxQAEAVABAdQAAAJAFAgIgHAKg");
	this.shape_210.setTransform(63.4,27.1,1.084,1.084);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#747888").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_211.setTransform(64.7,8.5,1.084,1.084);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#747888").s().p("AgOAaIAAgBIgBgBIAfgzIAAAAIgdA3g");
	this.shape_212.setTransform(62.9,11.6,1.084,1.084);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#747888").s().p("AgSARIAeg3IAAABIABgBIAGAKIgZBDg");
	this.shape_213.setTransform(63.4,12.8,1.084,1.084);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#957667").s().p("AgHgOIAOAYIAAABIABACIgBACIAAAAg");
	this.shape_214.setTransform(63.9,6.9,1.084,1.084);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#747888").s().p("AgNAZIAAgBIgBgCIAdgwIgbA1g");
	this.shape_215.setTransform(62.8,-0.8,1.084,1.084);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_216.setTransform(66,6.2,1.084,1.084);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABACIgCADIAAABg");
	this.shape_217.setTransform(67.2,0.2,1.084,1.084);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#747888").s().p("AgfABIAdg1IACgCIAgA5IggA0g");
	this.shape_218.setTransform(64.8,2,1.084,1.084);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#747888").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_219.setTransform(64.8,8.4,1.084,1.084);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#747888").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_220.setTransform(64.7,-16.5,1.084,1.084);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#747888").s().p("AgHgPIAOAZIAAABIABACIgBADg");
	this.shape_221.setTransform(63.9,-5.7,1.084,1.084);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAfgxIAAACIgdA1g");
	this.shape_222.setTransform(62.9,-13.4,1.084,1.084);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_223.setTransform(66,-6.5,1.084,1.084);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#747888").s().p("AgOgbIAcAvIAAAAIABACIgCAGg");
	this.shape_224.setTransform(66.7,-13.1,1.084,1.084);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#747888").s().p("AgeABIAeg1IAAAAIAAgCIADADIAcA3IgfAyg");
	this.shape_225.setTransform(64.8,-10.5,1.084,1.084);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#747888").s().p("AAAABIAAgCIABABIgBABg");
	this.shape_226.setTransform(64.8,-4.2,1.084,1.084);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#747888").s().p("AAHANIgBACIgNgdIAOAZIAAAAIABADIAAABg");
	this.shape_227.setTransform(63.9,-18.1,1.084,1.084);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#747888").s().p("AgNAZIAAgBIgBgCIAdgvIgbA0g");
	this.shape_228.setTransform(62.8,-25.7,1.084,1.084);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXglIgVApg");
	this.shape_229.setTransform(66,-18.7,1.084,1.084);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#747888").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_230.setTransform(67.2,-24.6,1.084,1.084);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#747888").s().p("AgfAAIAdg0IACgCIAgA5IggA0g");
	this.shape_231.setTransform(64.8,-22.8,1.084,1.084);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#747888").s().p("AgHgOIAOAZIABACIgBACg");
	this.shape_232.setTransform(63.9,-30.6,1.084,1.084);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#747888").s().p("AgKAUIABgBIgCgCIAXgkIgVAng");
	this.shape_233.setTransform(66,-31.3,1.084,1.084);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBACg");
	this.shape_234.setTransform(64.8,-29,1.084,1.084);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#747888").s().p("AgbgaIAAgBQAZAFAeAJIgCAEIgYAlg");
	this.shape_235.setTransform(64.4,-32.4,1.084,1.084);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#747888").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_236.setTransform(71.9,8.5,1.084,1.084);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#747888").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_237.setTransform(71.9,-16.5,1.084,1.084);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#747888").s().p("AgOAZIAAgBIgBgCIAfgxIAAACIgcA1g");
	this.shape_238.setTransform(70.1,-13.4,1.084,1.084);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#747888").s().p("AgWAHIAcg1IABAAIABgCIAPAXQgIAdgPAtg");
	this.shape_239.setTransform(71.1,-11.1,1.084,1.084);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#747888").s().p("AAHANIgBACIgOgdIARAbIgBACg");
	this.shape_240.setTransform(71.1,-18.1,1.084,1.084);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#747888").s().p("AgOAZIABgBIgBgCIAdgvIgcA0g");
	this.shape_241.setTransform(70,-25.7,1.084,1.084);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#747888").s().p("AgIgOIARAbIgCACg");
	this.shape_242.setTransform(71.1,-30.6,1.084,1.084);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#747888").s().p("AACAUIACgDIgVglQAQAFAUAJIgQAbg");
	this.shape_243.setTransform(71.5,-31.1,1.084,1.084);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#BBCACB").s().p("AgfAKIAfg2IAAABIAAgBIAgA4IgMAXIgiAJg");
	this.shape_244.setTransform(61.2,44.5,1.084,1.084);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_245.setTransform(61.1,27.3,1.084,1.084);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABACIABgCIAfA3IggA0g");
	this.shape_246.setTransform(61.2,33.1,1.084,1.084);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#BBCACB").s().p("AAAACIAAgBIABgCIABABIgCACg");
	this.shape_247.setTransform(61.2,39.4,1.084,1.084);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_248.setTransform(61.2,26.9,1.084,1.084);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#BBCACB").s().p("AgcAGIgBgEIAdg2IABABIAAgBIAOAVQgCAFAGAHQAHAKAEAQIgdAug");
	this.shape_249.setTransform(61,20.6,1.084,1.084);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#BBCACB").s().p("AgDgGQgGgHABgFIAEAFIANAcIgCAEQgEgQgGgJg");
	this.shape_250.setTransform(63.6,19.2,1.084,1.084);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIABABIgCACg");
	this.shape_251.setTransform(61.2,14.6,1.084,1.084);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#BBCACB").s().p("AgfABIAfg2IAAAAIAAAAIAgA4IggAzg");
	this.shape_252.setTransform(61.2,8.2,1.084,1.084);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_253.setTransform(61.1,-10,1.084,1.084);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIABABIgCACg");
	this.shape_254.setTransform(61.2,2.1,1.084,1.084);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#BBCACB").s().p("AgUAWIgLgWIAeg1IABADIABgCIAQAYIAPAeIgCADIgeAxg");
	this.shape_255.setTransform(61.2,-4.3,1.084,1.084);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#BBCACB").s().p("AgdAGIgCgEIAfg2IAAAAIAgA2IggAzg");
	this.shape_256.setTransform(61.2,-16.7,1.084,1.084);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_257.setTransform(61.2,-10.4,1.084,1.084);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIABABIgCACg");
	this.shape_258.setTransform(61.2,-22.7,1.084,1.084);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#BBCACB").s().p("AgUAXIgLgXIAfg2IAAABIAAgBIAgA4IgCAEIgeAwg");
	this.shape_259.setTransform(61.2,-29.2,1.084,1.084);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#BBCACB").s().p("AAAABIAAABIAAgBIABgCIABABIgCACg");
	this.shape_260.setTransform(61.2,-35.3,1.084,1.084);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#BBCACB").s().p("AgJAIIARgfQACAZgBAPQAAACgKAFg");
	this.shape_261.setTransform(65.9,44.8,1.084,1.084);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#BBCACB").s().p("AgEgEIAFgLIAEAfg");
	this.shape_262.setTransform(65.4,33.6,1.084,1.084);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#BBCACB").s().p("AgOAUIAdgzIgXA+g");
	this.shape_263.setTransform(66.5,6.1,1.084,1.084);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_264.setTransform(68.3,-10,1.084,1.084);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#BBCACB").s().p("AgQAWIgLgWIAdg1IABADIABgCIAQAYIAIAQIgVA9IgEAFg");
	this.shape_265.setTransform(67.9,-4.3,1.084,1.084);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#BBCACB").s().p("AAAABIAAgBIAAgBIABABIgBACg");
	this.shape_266.setTransform(68.4,2.1,1.084,1.084);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIABgEIACACIgCADg");
	this.shape_267.setTransform(68.4,-10.4,1.084,1.084);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#BBCACB").s().p("AgfACIAfg2IAgA2IggAzg");
	this.shape_268.setTransform(68.3,-16.7,1.084,1.084);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_269.setTransform(68.4,-22.7,1.084,1.084);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#BBCACB").s().p("AgUARIgLgVIAZgsIAPAFIAIAKIAPAfIgCACIgeAxg");
	this.shape_270.setTransform(68.3,-28.6,1.084,1.084);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIAAAAg");
	this.shape_271.setTransform(36.1,45.5,1.084,1.084);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#BBCACB").s().p("AgfgCIAfg3IAAAAIAAAAIAgA5IggA6g");
	this.shape_272.setTransform(39.7,46,1.084,1.084);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_273.setTransform(39.6,27.3,1.084,1.084);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#BBCACB").s().p("AgKgSIAUAfIgBABIACACIgCADg");
	this.shape_274.setTransform(38.6,37.5,1.084,1.084);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_275.setTransform(37.4,30.9,1.084,1.084);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABACIABgCIAfA3IggA0g");
	this.shape_276.setTransform(39.7,33.1,1.084,1.084);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#BBCACB").s().p("AAAACIAAgBIABgCIAAABIgBACg");
	this.shape_277.setTransform(39.7,39.4,1.084,1.084);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#BBCACB").s().p("AgPgaIAeAuIgBAAIACACIgEAGg");
	this.shape_278.setTransform(38.1,24.2,1.084,1.084);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_279.setTransform(39.7,26.9,1.084,1.084);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAABIAAgBIAgA2IggAzg");
	this.shape_280.setTransform(39.6,20.6,1.084,1.084);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#BBCACB").s().p("AgMgVIAYAlIgBAAIACACIgDAEg");
	this.shape_281.setTransform(38.4,12.4,1.084,1.084);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_282.setTransform(37.4,6.2,1.084,1.084);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#BBCACB").s().p("AgXAQIgIgPIAfg2IAAAAIAAAAIAgA4IggAzg");
	this.shape_283.setTransform(39.7,8.2,1.084,1.084);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#BBCACB").s().p("AAAACIAAAAIgBgBIACgCIABABIgCACg");
	this.shape_284.setTransform(39.7,14.6,1.084,1.084);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_285.setTransform(39.6,-10,1.084,1.084);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#BBCACB").s().p("AgKgSIAUAfIgBAAIACADIgCADg");
	this.shape_286.setTransform(38.6,0.2,1.084,1.084);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_287.setTransform(37.4,-6.5,1.084,1.084);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_288.setTransform(39.7,2.1,1.084,1.084);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#BBCACB").s().p("AgUAWIgLgWIAeg1IABADIABgCIAfA2IgBADIgfAxg");
	this.shape_289.setTransform(39.7,-4.3,1.084,1.084);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#BBCACB").s().p("AgPgbIAeAvIgBAAIACACIgEAGg");
	this.shape_290.setTransform(38.1,-13.1,1.084,1.084);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXglIgWApg");
	this.shape_291.setTransform(37.4,-18.7,1.084,1.084);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_292.setTransform(39.7,-10.4,1.084,1.084);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAAAIAgA2IggAzg");
	this.shape_293.setTransform(39.6,-16.7,1.084,1.084);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#BBCACB").s().p("AgKgSIAUAfIgBAAIACADIgCADg");
	this.shape_294.setTransform(38.6,-24.6,1.084,1.084);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_295.setTransform(37.4,-31.3,1.084,1.084);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_296.setTransform(39.7,-22.7,1.084,1.084);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#BBCACB").s().p("AgfAAIAfg2IAAABIAAgBIAgA4IgBAEIgfAwg");
	this.shape_297.setTransform(39.7,-29.2,1.084,1.084);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#BBCACB").s().p("AgGgLIACAAIAKARIAAAAIABADIgCADg");
	this.shape_298.setTransform(39,-36.5,1.084,1.084);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#BBCACB").s().p("AgLgHIAXgCIgMATg");
	this.shape_299.setTransform(39.7,-36.9,1.084,1.084);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_300.setTransform(39.7,-35.3,1.084,1.084);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#BBCACB").s().p("AgfgBIAfg3IAAABIAAgBIAgA4IgfA4IgCABg");
	this.shape_301.setTransform(46.8,45.9,1.084,1.084);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#BBCACB").s().p("AgBAAIADgBIgCADg");
	this.shape_302.setTransform(46.8,52.2,1.084,1.084);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_303.setTransform(46.8,27.3,1.084,1.084);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABACIABgCIAfA3IggA0g");
	this.shape_304.setTransform(46.8,33.1,1.084,1.084);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#BBCACB").s().p("AAAACIAAgBIABgCIAAABIgBACg");
	this.shape_305.setTransform(46.8,39.4,1.084,1.084);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_306.setTransform(46.8,14.9,1.084,1.084);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_307.setTransform(46.8,26.9,1.084,1.084);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAABIABgBIAfA2IggAzg");
	this.shape_308.setTransform(46.8,20.6,1.084,1.084);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#BBCACB").s().p("AgXAQIgIgPIAfg2IAAAAIAAAAIAgA4IggAzg");
	this.shape_309.setTransform(46.8,8.2,1.084,1.084);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#BBCACB").s().p("AAAACIAAAAIgBgBIACgCIABABIgCACg");
	this.shape_310.setTransform(46.8,14.6,1.084,1.084);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_311.setTransform(46.8,-10,1.084,1.084);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABADIABgCIAfA2IgBADIgfAxg");
	this.shape_312.setTransform(46.8,-4.3,1.084,1.084);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_313.setTransform(46.8,2.1,1.084,1.084);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAAAIAgA2IggAzg");
	this.shape_314.setTransform(46.8,-16.7,1.084,1.084);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_315.setTransform(46.8,-10.4,1.084,1.084);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#BBCACB").s().p("AgfAAIAfg2IAAABIAAgBIAgA4IgBAEIgfAwg");
	this.shape_316.setTransform(46.8,-29.2,1.084,1.084);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_317.setTransform(46.8,-35.3,1.084,1.084);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#BBCACB").s().p("AgMgKIAZAEIgMARg");
	this.shape_318.setTransform(46.7,-37,1.084,1.084);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#BBCACB").s().p("AgfAEIAfg2IAAAAIAAAAIAgA4IgXAqIgQADg");
	this.shape_319.setTransform(54,45.2,1.084,1.084);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_320.setTransform(53.9,27.3,1.084,1.084);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABACIABgCIAfA3IggA0g");
	this.shape_321.setTransform(54,33.1,1.084,1.084);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#BBCACB").s().p("AAAACIAAgBIABgCIAAABIgBACg");
	this.shape_322.setTransform(54,39.4,1.084,1.084);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_323.setTransform(54,26.9,1.084,1.084);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAABIABgBIAfA2IggAzg");
	this.shape_324.setTransform(53.9,20.6,1.084,1.084);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#BBCACB").s().p("AAAACIAAAAIgBgBIABgCIACABIgCACg");
	this.shape_325.setTransform(54,14.6,1.084,1.084);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#BBCACB").s().p("AgXAQIgIgPIAfg2IAAAAIAAAAIAgA4IggAzg");
	this.shape_326.setTransform(54,8.2,1.084,1.084);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_327.setTransform(53.9,-10,1.084,1.084);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABADIABgCIAfA2IgBADIgfAxg");
	this.shape_328.setTransform(54,-4.3,1.084,1.084);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_329.setTransform(54,-10.4,1.084,1.084);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAAAIAgA2IggAzg");
	this.shape_330.setTransform(53.9,-16.7,1.084,1.084);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#BBCACB").s().p("AgfAAIAfg2IAAABIAAgBIAgA4IgBAEIgfAwg");
	this.shape_331.setTransform(54,-29.2,1.084,1.084);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#BBCACB").s().p("AgFgEIALACIgGAHg");
	this.shape_332.setTransform(53.9,-36.4,1.084,1.084);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_333.setTransform(54,-35.3,1.084,1.084);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIAAAAg");
	this.shape_334.setTransform(29,45.5,1.084,1.084);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#BBCACB").s().p("AgIgOIAQAZIgBAAIACACIgCACg");
	this.shape_335.setTransform(35.2,44.2,1.084,1.084);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#BBCACB").s().p("AgGAyIgZgwIAfg2IAAABIAAgBIAgA4IgbAxg");
	this.shape_336.setTransform(32.5,45.4,1.084,1.084);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_337.setTransform(32.5,27.3,1.084,1.084);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#BBCACB").s().p("AgOAZIAAAAIgBgCIAfgxIgdA1g");
	this.shape_338.setTransform(34.2,36.5,1.084,1.084);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#BBCACB").s().p("AgIgPIAQAZIgBAAIACADIgCADg");
	this.shape_339.setTransform(35.2,31.6,1.084,1.084);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAABIABACIgCADg");
	this.shape_340.setTransform(31.4,37.5,1.084,1.084);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_341.setTransform(30.2,30.9,1.084,1.084);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#BBCACB").s().p("AAAACIAAgBIABgCIAAABIgBACg");
	this.shape_342.setTransform(32.5,39.4,1.084,1.084);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABACIABgCIAfA3IggA0g");
	this.shape_343.setTransform(32.5,33.1,1.084,1.084);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_344.setTransform(36,20.8,1.084,1.084);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#BBCACB").s().p("AgOAZIAAgBIgBgCIAegxIABABIgdA2g");
	this.shape_345.setTransform(34.3,23.9,1.084,1.084);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#BBCACB").s().p("AgIgOIAQAZIgBABIACACIgBAAIgBgBIgBACg");
	this.shape_346.setTransform(35.2,19.3,1.084,1.084);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#BBCACB").s().p("AgPgaIAdAuIAAAAIABACIgDAGg");
	this.shape_347.setTransform(30.9,24.2,1.084,1.084);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAABIAAgBIAgA2IggAzg");
	this.shape_348.setTransform(32.5,20.6,1.084,1.084);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_349.setTransform(32.5,26.9,1.084,1.084);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#BBCACB").s().p("AgOAaIAAgBIgBgBIAfgzIAAAAIgdA3g");
	this.shape_350.setTransform(34.3,11.6,1.084,1.084);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#BBCACB").s().p("AgIgOIAQAYIgBABIACACIgBACIgBAAIAAAAg");
	this.shape_351.setTransform(35.2,6.9,1.084,1.084);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#BBCACB").s().p("AgLgVIAWAlIAAAAIABACIgCAEg");
	this.shape_352.setTransform(31.3,12.4,1.084,1.084);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_353.setTransform(30.2,6.2,1.084,1.084);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#BBCACB").s().p("AgXAQIgIgPIAfg2IAAAAIAAAAIAgA4IggAzg");
	this.shape_354.setTransform(32.5,8.2,1.084,1.084);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#BBCACB").s().p("AAAACIAAAAIgBgBIACgCIABABIgCACg");
	this.shape_355.setTransform(32.5,14.6,1.084,1.084);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_356.setTransform(32.5,-10,1.084,1.084);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#BBCACB").s().p("AgOAZIAAgBIgBgCIAfgwIgdA1g");
	this.shape_357.setTransform(34.2,-0.8,1.084,1.084);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#BBCACB").s().p("AgIgPIAQAZIgBABIACACIgCADg");
	this.shape_358.setTransform(35.2,-5.7,1.084,1.084);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_359.setTransform(31.4,0.2,1.084,1.084);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_360.setTransform(30.2,-6.5,1.084,1.084);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#BBCACB").s().p("AgUAWIgLgWIAeg1IABADIABgCIAfA2IgBADIgfAxg");
	this.shape_361.setTransform(32.5,-4.3,1.084,1.084);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_362.setTransform(32.5,2.1,1.084,1.084);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_363.setTransform(36,-16.5,1.084,1.084);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#BBCACB").s().p("AgOAZIAAgBIgBgCIAegxIABACIgdA1g");
	this.shape_364.setTransform(34.3,-13.4,1.084,1.084);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#BBCACB").s().p("AAHANIgBACIgOgdIAQAZIgBAAIACADIgBABg");
	this.shape_365.setTransform(35.2,-18.1,1.084,1.084);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#BBCACB").s().p("AgPgbIAdAvIAAAAIABACIgDAGg");
	this.shape_366.setTransform(30.9,-13.1,1.084,1.084);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXglIgWApg");
	this.shape_367.setTransform(30.2,-18.7,1.084,1.084);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIACgEIABACIgBADg");
	this.shape_368.setTransform(32.5,-10.4,1.084,1.084);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAAAIAgA2IggAzg");
	this.shape_369.setTransform(32.5,-16.7,1.084,1.084);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#BBCACB").s().p("AgOAZIAAgBIgBgCIAfgvIgdA0g");
	this.shape_370.setTransform(34.2,-25.7,1.084,1.084);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#BBCACB").s().p("AgIgOIAQAZIgBAAIACACIgCACg");
	this.shape_371.setTransform(35.2,-30.6,1.084,1.084);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_372.setTransform(31.4,-24.6,1.084,1.084);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#BBCACB").s().p("AgKATIgBgCIAXgkIgWAng");
	this.shape_373.setTransform(30.2,-31.3,1.084,1.084);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#BBCACB").s().p("AgUAXIgLgXIAfg2IAAABIAAgBIAgA4IgBAEIgfAwg");
	this.shape_374.setTransform(32.5,-29.2,1.084,1.084);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_375.setTransform(32.5,-22.7,1.084,1.084);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#BBCACB").s().p("AgEAHIAAAAIgBgCIAHgNIAEAAIgJARg");
	this.shape_376.setTransform(33.1,-36.4,1.084,1.084);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#BBCACB").s().p("AgFgHIADgBIAGALIAAAAIABACIgCAEg");
	this.shape_377.setTransform(32,-36.1,1.084,1.084);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#BBCACB").s().p("AgHgEIAPgCIgIANg");
	this.shape_378.setTransform(32.5,-36.6,1.084,1.084);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#BBCACB").s().p("AAAACIAAAAIAAgBIABgCIAAABIgBACg");
	this.shape_379.setTransform(32.5,-35.3,1.084,1.084);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_380.setTransform(21.8,45.5,1.084,1.084);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#BBCACB").s().p("AgIgOIAQAZIgBAAIACACIgCACg");
	this.shape_381.setTransform(28.1,44.2,1.084,1.084);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#BBCACB").s().p("AgPAnIgQgfIAfg2IAgA4IgUAlg");
	this.shape_382.setTransform(25.4,44.8,1.084,1.084);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_383.setTransform(25.3,27.3,1.084,1.084);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_384.setTransform(25.4,39.1,1.084,1.084);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#BBCACB").s().p("AgOAZIAAAAIgBgCIAegxIgcA1g");
	this.shape_385.setTransform(27,36.5,1.084,1.084);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#BBCACB").s().p("AgIgPIAQAZIgBAAIACADIgCADg");
	this.shape_386.setTransform(28.1,31.6,1.084,1.084);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAABIABACIgCADg");
	this.shape_387.setTransform(24.2,37.5,1.084,1.084);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#BBCACB").s().p("AgKAUIAAgBIgBgCIAXgkIgWAng");
	this.shape_388.setTransform(23,30.9,1.084,1.084);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_389.setTransform(25.4,39.4,1.084,1.084);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#BBCACB").s().p("AgfAAIAeg1IABACIABgCIAfA3IggA0g");
	this.shape_390.setTransform(25.4,33.1,1.084,1.084);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_391.setTransform(21.8,20.6,1.084,1.084);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_392.setTransform(28.9,20.8,1.084,1.084);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#BBCACB").s().p("AgPAZIABgBIgBgCIAegxIABABIgdA2g");
	this.shape_393.setTransform(27.1,23.9,1.084,1.084);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#BBCACB").s().p("AgIgOIAQAZIgBABIACACIgBAAIgBgBIgBACg");
	this.shape_394.setTransform(28.1,19.3,1.084,1.084);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#BBCACB").s().p("AgOgaIAdAuIgBAAIABACIgCAGg");
	this.shape_395.setTransform(23.8,24.2,1.084,1.084);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#BBCACB").s().p("AgKAUIAAgBIgBgCIAXgkIgWAng");
	this.shape_396.setTransform(23,18.6,1.084,1.084);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIABgEIACACIgBADg");
	this.shape_397.setTransform(25.4,26.9,1.084,1.084);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#BBCACB").s().p("AgfACIAfg2IAAABIAAgBIAgA2IggAzg");
	this.shape_398.setTransform(25.3,20.6,1.084,1.084);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_399.setTransform(28.9,8.5,1.084,1.084);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_400.setTransform(25.4,14.2,1.084,1.084);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#BBCACB").s().p("AgPAaIABgBIgBgBIAfgzIAAAAIgdA3g");
	this.shape_401.setTransform(27.1,11.6,1.084,1.084);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#BBCACB").s().p("AgIgOIAQAYIgBABIACACIgBACIgBAAIAAAAg");
	this.shape_402.setTransform(28.1,6.9,1.084,1.084);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#BBCACB").s().p("AgLgVIAXAlIgBAAIABACIgCAEg");
	this.shape_403.setTransform(24.1,12.4,1.084,1.084);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#BBCACB").s().p("AgKAUIAAgBIgBgCIAXgkIgWAng");
	this.shape_404.setTransform(23,6.2,1.084,1.084);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#BBCACB").s().p("AgXAQIgIgPIAfg2IAgA4IggAzg");
	this.shape_405.setTransform(25.3,8.2,1.084,1.084);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#BBCACB").s().p("AAAACIAAAAIgBgBIABgCIACABIgCACg");
	this.shape_406.setTransform(25.4,14.6,1.084,1.084);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_407.setTransform(25.3,-10,1.084,1.084);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_408.setTransform(21.8,-4.5,1.084,1.084);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#BBCACB").s().p("AgOAZIAAgBIgBgCIAegwIgcA1g");
	this.shape_409.setTransform(27,-0.8,1.084,1.084);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#BBCACB").s().p("AgIgPIAQAZIgBABIACACIgCADg");
	this.shape_410.setTransform(28.1,-5.7,1.084,1.084);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_411.setTransform(24.2,0.2,1.084,1.084);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#BBCACB").s().p("AgKAUIAAgBIgBgCIAXgkIgWAng");
	this.shape_412.setTransform(23,-6.5,1.084,1.084);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_413.setTransform(25.4,2.1,1.084,1.084);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#BBCACB").s().p("AgUAWIgLgWIAeg1IABADIABgCIAfA2IgBADIgfAxg");
	this.shape_414.setTransform(25.4,-4.3,1.084,1.084);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_415.setTransform(28.9,-16.5,1.084,1.084);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_416.setTransform(25.4,-10.9,1.084,1.084);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#BBCACB").s().p("AgPAZIABgBIgBgCIAegxIABACIgdA1g");
	this.shape_417.setTransform(27.1,-13.4,1.084,1.084);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#BBCACB").s().p("AAHANIgBACIgOgdIAQAZIgBAAIACADIgBABg");
	this.shape_418.setTransform(28.1,-18.1,1.084,1.084);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#BBCACB").s().p("AgOgbIAdAvIgBAAIABACIgCAGg");
	this.shape_419.setTransform(23.8,-13.1,1.084,1.084);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#BBCACB").s().p("AgKAUIAAgBIgBgCIAXglIgWApg");
	this.shape_420.setTransform(23,-18.7,1.084,1.084);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#BBCACB").s().p("AgfACIAfg2IAgA2IggAzg");
	this.shape_421.setTransform(25.3,-16.7,1.084,1.084);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIABgEIACACIgBADg");
	this.shape_422.setTransform(25.4,-10.4,1.084,1.084);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#BBCACB").s().p("AgOAZIABgBIgBgCIAdgvIgcA0g");
	this.shape_423.setTransform(27,-25.7,1.084,1.084);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#BBCACB").s().p("AgIgOIAQAZIgBAAIACACIgCACg");
	this.shape_424.setTransform(28.1,-30.6,1.084,1.084);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_425.setTransform(24.2,-24.6,1.084,1.084);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#BBCACB").s().p("AgKAUIAAgBIgBgCIAXgkIgWAng");
	this.shape_426.setTransform(23,-31.3,1.084,1.084);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#BBCACB").s().p("AgUAXIgLgXIAfg2IAgA4IggA0g");
	this.shape_427.setTransform(25.4,-29.2,1.084,1.084);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_428.setTransform(25.4,-22.7,1.084,1.084);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#BBCACB").s().p("AgBACIAAAAIgBgCIACgDIADAAIgDAHg");
	this.shape_429.setTransform(25.7,-35.8,1.084,1.084);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#BBCACB").s().p("AgCgDIADAAIABACIAAAAIABACIgBAEg");
	this.shape_430.setTransform(25.1,-35.7,1.084,1.084);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_431.setTransform(25.4,-35.3,1.084,1.084);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#BBCACB").s().p("AgBAAIADgBIgCADg");
	this.shape_432.setTransform(25.3,-36,1.084,1.084);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#BBCACB").s().p("AgHgOIAPAZIAAAAIABACIgCACg");
	this.shape_433.setTransform(20.9,44.2,1.084,1.084);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#BBCACB").s().p("AgSAZQgCgVAFgmIADgEIAgA4IgLAVQgagJgBgFg");
	this.shape_434.setTransform(19.5,43.9,1.084,1.084);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_435.setTransform(18.1,27.3,1.084,1.084);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_436.setTransform(18.2,39.1,1.084,1.084);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#BBCACB").s().p("AgOAZIABAAIgBgCIAdgxIgcA1g");
	this.shape_437.setTransform(19.9,36.5,1.084,1.084);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#BBCACB").s().p("AgHgPIAPAZIAAAAIABADIgCADg");
	this.shape_438.setTransform(20.9,31.6,1.084,1.084);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#BBCACB").s().p("AAAACIAAgFIABACIgBABIABABIgBADg");
	this.shape_439.setTransform(18.1,39.1,1.084,1.084);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#BBCACB").s().p("AgQArIANhXIAFAHIAPAfIgBADIgeAwg");
	this.shape_440.setTransform(19.8,34,1.084,1.084);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_441.setTransform(18.2,39.4,1.084,1.084);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_442.setTransform(21.7,20.8,1.084,1.084);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#BBCACB").s().p("AgHAIIAPgXIAAABIgPAeg");
	this.shape_443.setTransform(20.8,22.6,1.084,1.084);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#BBCACB").s().p("AgFgIIAAgCIALARIgBABIABACIAAAAIgBgBIgBACg");
	this.shape_444.setTransform(21.1,19.7,1.084,1.084);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#BBCACB").s().p("AgCgVIAKAUIgPAXIAFgrg");
	this.shape_445.setTransform(20.8,21.1,1.084,1.084);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIABgEIACACIgCADg");
	this.shape_446.setTransform(18.2,26.9,1.084,1.084);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#BBCACB").s().p("AgMASIAZgnIAAAAIgXAsg");
	this.shape_447.setTransform(20.3,11,1.084,1.084);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#BBCACB").s().p("AgHgOIAPAYIAAABIABACIgBACIAAAAIgBAAg");
	this.shape_448.setTransform(20.9,6.9,1.084,1.084);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#BBCACB").s().p("AgXgUIAQgcIAfA4IgYApg");
	this.shape_449.setTransform(19,7.7,1.084,1.084);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#BBCACB").s().p("AAAACIAAAAIgBgBIABgCIABABIgBACg");
	this.shape_450.setTransform(18.2,14.6,1.084,1.084);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_451.setTransform(18.1,-10,1.084,1.084);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#BBCACB").s().p("AgOAZIABgBIgBgCIAdgwIgcA1g");
	this.shape_452.setTransform(19.9,-0.8,1.084,1.084);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#BBCACB").s().p("AgHgPIAPAZIAAABIABACIgCADg");
	this.shape_453.setTransform(20.9,-5.7,1.084,1.084);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_454.setTransform(17.1,0.2,1.084,1.084);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#BBCACB").s().p("AgLASIAXglIgWAng");
	this.shape_455.setTransform(15.9,-6.5,1.084,1.084);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#BBCACB").s().p("AgUAWIgLgWIAeg1IABADIAAgCIARAYIAPAeIgBADIgfAxg");
	this.shape_456.setTransform(18.2,-4.3,1.084,1.084);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_457.setTransform(18.2,2.1,1.084,1.084);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_458.setTransform(21.7,-16.5,1.084,1.084);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#BBCACB").s().p("AAAAAIAAAAIABABIgBAAg");
	this.shape_459.setTransform(18.2,-10.9,1.084,1.084);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#BBCACB").s().p("AgPAZIABgBIgBgCIAfgxIAAACIgdA1g");
	this.shape_460.setTransform(19.9,-13.4,1.084,1.084);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#BBCACB").s().p("AAIANIgBACIgOgdIAPAZIAAAAIABADIAAABg");
	this.shape_461.setTransform(20.9,-18.1,1.084,1.084);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#BBCACB").s().p("AgOgbIAdAvIgBAAIABACIgCAGg");
	this.shape_462.setTransform(16.6,-13.1,1.084,1.084);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#BBCACB").s().p("AgLARIAXglIgWApg");
	this.shape_463.setTransform(15.9,-18.7,1.084,1.084);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#BBCACB").s().p("AAAABIgBACIAAgBIABgEIACACIgCADg");
	this.shape_464.setTransform(18.2,-10.4,1.084,1.084);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#BBCACB").s().p("AgfACIAfg2IAgA2IggAzg");
	this.shape_465.setTransform(18.2,-16.7,1.084,1.084);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#BBCACB").s().p("AAAAAIAAgBIABABIgBABg");
	this.shape_466.setTransform(18.2,-23.1,1.084,1.084);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#BBCACB").s().p("AgOAZIABgBIgBgCIAdgvIgcA0g");
	this.shape_467.setTransform(19.8,-25.7,1.084,1.084);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#BBCACB").s().p("AgHgOIAPAZIAAAAIABACIgCACg");
	this.shape_468.setTransform(20.9,-30.6,1.084,1.084);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#BBCACB").s().p("AgKgSIAUAfIAAAAIABADIgCADg");
	this.shape_469.setTransform(17.1,-24.6,1.084,1.084);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#BBCACB").s().p("AgLARIAXgkIgWAng");
	this.shape_470.setTransform(15.9,-31.3,1.084,1.084);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#BBCACB").s().p("AAAABIAAgCIABABIgBACg");
	this.shape_471.setTransform(18.2,-22.7,1.084,1.084);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#BBCACB").s().p("AgUAVIgLgVIAdgzIADgBIAQAXIAPAeIgBADIgfAxg");
	this.shape_472.setTransform(18.2,-29,1.084,1.084);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAAAAIAgA4IggA2g");
	this.shape_473.setTransform(36.1,39.3,1.084,1.084);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_474.setTransform(36.1,21,1.084,1.084);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#747888").s().p("AgeACIAeg2IAAABIABgDIACAEIAcA2IgfAyg");
	this.shape_475.setTransform(36.1,26.8,1.084,1.084);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#747888").s().p("AgeABIAeg3IAAABIAAgBIAJAOIAWArIgfA0g");
	this.shape_476.setTransform(36.1,14.5,1.084,1.084);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAgA5IggA0g");
	this.shape_477.setTransform(36.1,2,1.084,1.084);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_478.setTransform(36.1,-16.3,1.084,1.084);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#747888").s().p("AgeABIAeg1IAAAAIABgCIACADIAcA3IgfAyg");
	this.shape_479.setTransform(36.1,-10.5,1.084,1.084);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#747888").s().p("AgfAAIAfg2IAAAAIAMATIAUAmIggA0g");
	this.shape_480.setTransform(36.1,-22.8,1.084,1.084);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#747888").s().p("AgfgPIAKgSIAogFIANAZIggA0g");
	this.shape_481.setTransform(36.1,-33.6,1.084,1.084);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAAAAIAgA4IggA2g");
	this.shape_482.setTransform(29,39.3,1.084,1.084);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_483.setTransform(29,21,1.084,1.084);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#747888").s().p("AgeACIAeg2IAAABIABgDIACAEIAcA2IgfAyg");
	this.shape_484.setTransform(29,26.8,1.084,1.084);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#747888").s().p("AgeABIAeg3IAAABIAAgBIAJAOIAWArIgfA0g");
	this.shape_485.setTransform(29,14.5,1.084,1.084);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#747888").s().p("AgfABIAfg3IAAAAIAgA5IggA0g");
	this.shape_486.setTransform(29,2,1.084,1.084);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#747888").s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_487.setTransform(29,-16.3,1.084,1.084);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#747888").s().p("AgeABIAeg1IAAAAIABgCIACADIAcA3IgfAyg");
	this.shape_488.setTransform(29,-10.5,1.084,1.084);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#747888").s().p("AgfAAIAdg0IACgCIAAAAIAgA5IggA0g");
	this.shape_489.setTransform(29,-22.8,1.084,1.084);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#747888").s().p("AgfgTIAFgIIAxgHIAJARIggA0g");
	this.shape_490.setTransform(29,-33.2,1.084,1.084);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#747888").s().p("AAAABIABgBIAAAAIgBABg");
	this.shape_491.setTransform(21.8,45.8,1.084,1.084);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#747888").s().p("AgfABIAfg3IAgA4IggA2g");
	this.shape_492.setTransform(21.8,39.3,1.084,1.084);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#747888").s().p("AAAABIABgBIAAAAIgBABg");
	this.shape_493.setTransform(21.7,21,1.084,1.084);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#747888").s().p("AgUAdIgFgIIAEgqIAQgfIABABIABgDIACAEIAbA2IgeAyg");
	this.shape_494.setTransform(22.3,26.8,1.084,1.084);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#747888").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_495.setTransform(21.7,8.5,1.084,1.084);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#747888").s().p("AgOAlQABgGgEgMIgKgcIAYgtIAAABIABgBIAIAOIAWArIgeA0g");
	this.shape_496.setTransform(22.1,14.5,1.084,1.084);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#747888").s().p("AgfABIAfg3IAgA5IggA0g");
	this.shape_497.setTransform(21.8,2,1.084,1.084);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#747888").s().p("AgeABIAeg1IAAAAIAAgCIADADIAcA3IgfAyg");
	this.shape_498.setTransform(21.8,-10.5,1.084,1.084);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#747888").s().p("AgfAAIAdg0IACgCIAgA5IggA0g");
	this.shape_499.setTransform(21.8,-22.8,1.084,1.084);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#747888").s().p("AgegSQAUgFAkgHIAFAJIggA0g");
	this.shape_500.setTransform(21.9,-32.8,1.084,1.084);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#747888").s().p("AAAgCIABACIgBADg");
	this.shape_501.setTransform(17.9,39.7,1.084,1.084);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#747888").s().p("AgTgfIAHgLIAgA5IgRAcg");
	this.shape_502.setTransform(15.9,0.6,1.084,1.084);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#747888").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_503.setTransform(14.6,-16.4,1.084,1.084);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#747888").s().p("AgWAQIgHgdIAcgrIABACIAAgCIACADIAcA2IgeA0IAAACIAAACg");
	this.shape_504.setTransform(14.7,-10.2,1.084,1.084);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#747888").s().p("AgFgHIAEgHIAHAdg");
	this.shape_505.setTransform(11.6,-10.1,1.084,1.084);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#747888").s().p("AAAA3IAAACIggg9IAgg0IAhA5IghA1IACADIgBAAg");
	this.shape_506.setTransform(14.5,-22.6,1.084,1.084);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#747888").s().p("AgYgLQATgHAegIIgGALIgXAlIACACIgCADg");
	this.shape_507.setTransform(15.1,-31.8,1.084,1.084);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#D6D8D8").s().p("AgIgLIACgCIAPAcg");
	this.shape_508.setTransform(19.1,40.9,1.084,1.084);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_509.setTransform(33.4,-33.8,1.084,1.084);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#D6D8D8").s().p("AgHgKIABgEIAOAdg");
	this.shape_510.setTransform(54.9,-21.2,1.084,1.084);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#D6D8D8").s().p("AgHgJIACgEIANAag");
	this.shape_511.setTransform(54.9,-8.9,1.084,1.084);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#D6D8D8").s().p("AgHgKIABgDIAOAcg");
	this.shape_512.setTransform(54.9,3.6,1.084,1.084);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_513.setTransform(47.7,40.9,1.084,1.084);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_514.setTransform(47.7,-33.8,1.084,1.084);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_515.setTransform(40.6,-33.8,1.084,1.084);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#D6D8D8").s().p("AgIgLIADgCIANAcg");
	this.shape_516.setTransform(26.2,40.9,1.084,1.084);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_517.setTransform(54.9,-33.8,1.084,1.084);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_518.setTransform(40.6,40.9,1.084,1.084);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_519.setTransform(33.4,40.9,1.084,1.084);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#D6D8D8").s().p("AgRA8IAgg8Ighg2IAPgcIAIAFQAhARgoCPg");
	this.shape_520.setTransform(74,-22.9,1.084,1.084);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#D6D8D8").s().p("AgOAIIALgVIABABIABgDIAPAfg");
	this.shape_521.setTransform(22,47.3,1.084,1.084);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#D6D8D8").s().p("AgHgJIACgEIANAag");
	this.shape_522.setTransform(40.6,-8.9,1.084,1.084);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#D6D8D8").s().p("AgHgKIABgEIAOAdg");
	this.shape_523.setTransform(40.6,-21.2,1.084,1.084);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#D6D8D8").s().p("AgdAUIAbgwIAAABIABgDIAfA9QgVgDgmgIg");
	this.shape_524.setTransform(36.4,49,1.084,1.084);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#D6D8D8").s().p("AgWAOIAUgjIAAAAIABgCIAYAvg");
	this.shape_525.setTransform(29.2,48.3,1.084,1.084);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_526.setTransform(26.2,16.1,1.084,1.084);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_527.setTransform(29.6,-3.1,1.084,1.084);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#D6D8D8").s().p("AgHhbIANgGIAUAmIggA0IAfA9IgbAsQgqiqAlgTg");
	this.shape_528.setTransform(11.8,-22.4,1.084,1.084);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_529.setTransform(29.6,-27.9,1.084,1.084);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#D6D8D8").s().p("AgKgZIAVAoIgHALg");
	this.shape_530.setTransform(13.4,-5.7,1.084,1.084);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#D6D8D8").s().p("AgHgKIABgEIAOAdg");
	this.shape_531.setTransform(33.4,-21.2,1.084,1.084);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#D6D8D8").s().p("AgHgKIABgDIAOAcg");
	this.shape_532.setTransform(33.4,3.6,1.084,1.084);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#D6D8D8").s().p("AgHgJIACgEIANAag");
	this.shape_533.setTransform(33.5,-8.9,1.084,1.084);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_534.setTransform(43.9,-3.1,1.084,1.084);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#D6D8D8").s().p("AACgaIABAAIABgCIAZAuQgjAIgVADg");
	this.shape_535.setTransform(50.1,48.8,1.084,1.084);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#D6D8D8").s().p("AggAeIAhg7IAAAAIABgCIAeA6QgWAEgRABQgJAAgQgCg");
	this.shape_536.setTransform(43.1,49.1,1.084,1.084);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#D6D8D8").s().p("AACgTIABAAIABgCIARAhIgpAKg");
	this.shape_537.setTransform(57.3,48,1.084,1.084);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_538.setTransform(36.7,-3.1,1.084,1.084);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_539.setTransform(36.8,-27.9,1.084,1.084);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#D6D8D8").s().p("AABgJIAAAAIACgCIAIAPIgVAIg");
	this.shape_540.setTransform(64.6,47,1.084,1.084);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#D6D8D8").s().p("AgHgKIABgEIAOAdg");
	this.shape_541.setTransform(47.7,-21.2,1.084,1.084);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#D6D8D8").s().p("AgIgKIADgDIANAcg");
	this.shape_542.setTransform(26.2,3.6,1.084,1.084);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_543.setTransform(51.1,-27.9,1.084,1.084);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#D6D8D8").s().p("AgHgLIACgCIAOAcg");
	this.shape_544.setTransform(62.1,40.9,1.084,1.084);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#D6D8D8").s().p("AgHgLIABgCIAOAcg");
	this.shape_545.setTransform(54.9,40.9,1.084,1.084);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#D6D8D8").s().p("AAAAAIAAgBIABADg");
	this.shape_546.setTransform(65,-16.3,1.084,1.084);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_547.setTransform(43.9,-27.9,1.084,1.084);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#D6D8D8").s().p("AgHgJIACgEIANAag");
	this.shape_548.setTransform(47.8,-8.9,1.084,1.084);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_549.setTransform(51.1,-3.1,1.084,1.084);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#D6D8D8").s().p("AgIgKIADgEIANAdg");
	this.shape_550.setTransform(26.2,-21.2,1.084,1.084);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#D6D8D8").s().p("AgHgKIABgDIAOAcg");
	this.shape_551.setTransform(47.7,3.6,1.084,1.084);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#D6D8D8").s().p("AgHgJIACgEIANAag");
	this.shape_552.setTransform(26.3,-8.9,1.084,1.084);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#D6D8D8").s().p("AgHgKIABgDIAOAcg");
	this.shape_553.setTransform(40.6,3.6,1.084,1.084);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#D6D8D8").s().p("AgIgLIADgCIANAcg");
	this.shape_554.setTransform(26.2,-33.8,1.084,1.084);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_555.setTransform(33.5,28.4,1.084,1.084);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#D6D8D8").s().p("AgCgDIABgCIAEAKIAAABg");
	this.shape_556.setTransform(65.1,9,1.084,1.084);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#D6D8D8").s().p("AgHgKIADgBIAMAXg");
	this.shape_557.setTransform(19.1,-33.6,1.084,1.084);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#D6D8D8").s().p("AgIgKIACgEIAPAdg");
	this.shape_558.setTransform(19.1,-21.2,1.084,1.084);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#D6D8D8").s().p("AgHgJIACgEIANAag");
	this.shape_559.setTransform(19.1,-8.9,1.084,1.084);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#D6D8D8").s().p("AgFgHIABgCIAKATg");
	this.shape_560.setTransform(65.4,34.2,1.084,1.084);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#D6D8D8").s().p("AgHgJIACgEIANAag");
	this.shape_561.setTransform(69.3,-8.9,1.084,1.084);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#D6D8D8").s().p("AgHgKIACgDIAOAcg");
	this.shape_562.setTransform(62.1,3.6,1.084,1.084);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_563.setTransform(43.9,34.2,1.084,1.084);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_564.setTransform(22.4,34.2,1.084,1.084);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#D6D8D8").s().p("AgIgKIACgDIAPAcg");
	this.shape_565.setTransform(19.1,3.6,1.084,1.084);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_566.setTransform(15.2,-3.1,1.084,1.084);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#D6D8D8").s().p("AgHgJIABgEIAOAag");
	this.shape_567.setTransform(62.1,-8.9,1.084,1.084);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#D6D8D8").s().p("AgHgLIACgCIAOAcg");
	this.shape_568.setTransform(62.1,-33.8,1.084,1.084);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_569.setTransform(58.2,34.2,1.084,1.084);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#D6D8D8").s().p("AgHgKIACgEIAOAdg");
	this.shape_570.setTransform(62.1,-21.2,1.084,1.084);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_571.setTransform(51.1,34.2,1.084,1.084);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_572.setTransform(26.3,28.4,1.084,1.084);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#D6D8D8").s().p("AAAABIABgDIAAABIgBAEg");
	this.shape_573.setTransform(18,39.9,1.084,1.084);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#D6D8D8").s().p("AgHgKIABgDIAOAbg");
	this.shape_574.setTransform(62.1,28.4,1.084,1.084);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#D6D8D8").s().p("AgHgKIABgEIAPAdg");
	this.shape_575.setTransform(69.2,-21.2,1.084,1.084);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_576.setTransform(65.4,-27.9,1.084,1.084);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_577.setTransform(58.2,-3.1,1.084,1.084);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#D6D8D8").s().p("AgGgIIACgDIALAWIAAABg");
	this.shape_578.setTransform(61.9,15.9,1.084,1.084);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_579.setTransform(65.4,-3.1,1.084,1.084);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_580.setTransform(54.9,16.1,1.084,1.084);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#D6D8D8").s().p("AgHgKIABgDIAOAbg");
	this.shape_581.setTransform(47.7,16.1,1.084,1.084);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#D6D8D8").s().p("AgFgIIABgCIAKAVg");
	this.shape_582.setTransform(22.4,-3.1,1.084,1.084);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#D6D8D8").s().p("AgDgFIABgCIAHAPg");
	this.shape_583.setTransform(58.1,9.2,1.084,1.084);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_584.setTransform(15.2,-27.9,1.084,1.084);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_585.setTransform(58.2,-27.9,1.084,1.084);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_586.setTransform(40.6,16.1,1.084,1.084);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_587.setTransform(40.6,28.4,1.084,1.084);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_588.setTransform(47.8,28.4,1.084,1.084);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_589.setTransform(33.4,16.1,1.084,1.084);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#D6D8D8").s().p("AgFgHIABgDIAKAVg");
	this.shape_590.setTransform(22.4,-27.9,1.084,1.084);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#D6D8D8").s().p("AgHgKIACgDIANAbg");
	this.shape_591.setTransform(54.9,28.4,1.084,1.084);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#2F2F35").s().p("ACBLIIg/gJIgIlwQgJl2gFgkIgglJQg5GXAAAPIgrKwIjFAAIANorIAOlSIAyoOQA0AiDLgKQBmgFBcgMIAZCtQAEApAIBZQAIBsAAAkQAAAigLHHIgLHBIguAcQgOAHggAAQgSAAgZgCg");
	this.shape_592.setTransform(40.2,122.3,1.084,1.084);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#00001F").s().p("AArBDIhwgiQhBADgIgGQgFgEgBgdIAAgcIAMgdICUgGIAQAkIAhASQAlASASAIQAjAQgDAXQgBAOgEAAg");
	this.shape_593.setTransform(65.9,204.6,1.084,1.084);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#00001F").s().p("AhCBNQgPgNgHgUQgHgTAYglIAagjIAJgmIB/AAIAABcQAAAXgEAFQgJASghARQgZANADACIhMACQgGgDgHgHg");
	this.shape_594.setTransform(17.2,207.2,1.084,1.084);

	this.instance = new lib.Cuadro_2();
	this.instance.parent = this;
	this.instance.setTransform(-221.6,-91.2,0.543,0.543,0,0,0,54.8,54.9);

	this.instance_1 = new lib.Mueble_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-83,44.8,1,1,0,0,0,201.7,118.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.7,-121,403.3,342.6);


(lib.personaje2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Postit();
	this.instance.parent = this;
	this.instance.setTransform(210.9,23.7,0.911,0.911,0,0,0,7.2,9.5);

	this.instance_1 = new lib.Postit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(192.8,23.7,0.911,0.911,0,0,0,7.2,9.5);

	this.instance_2 = new lib.Postit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(373.7,46.8,0.911,0.911,0,0,0,7.2,9.4);

	this.instance_3 = new lib.Postits();
	this.instance_3.parent = this;
	this.instance_3.setTransform(335.1,93.6,0.911,0.911,0,0,0,36.7,9.5);

	this.instance_4 = new lib.Mesa_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275.5,151.9,0.911,0.911,0,0,0,154,80.3);

	this.instance_5 = new lib.Telefono();
	this.instance_5.parent = this;
	this.instance_5.setTransform(367.3,58,0.911,0.911,0,0,0,27.9,22.4);

	this.instance_6 = new lib.Computadora_por_atras();
	this.instance_6.parent = this;
	this.instance_6.setTransform(223.4,40.2,0.911,0.911,0,0,0,53,42);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9B1BA").s().p("AgbAGIAugaIAKAUQgCANgcAIg");
	this.shape.setTransform(262.6,0.9,2.252,2.252);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9B1BA").s().p("AgdgDIAKgUIAxAhIgXAOQgigPgCgMg");
	this.shape_1.setTransform(249.6,0.2,2.252,2.252);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3231").s().p("AhaBDIgHgCQgEACgIgyQgDgZAVgQQgDghAegOIgFAHQgFAJgCAGIABABIABAAQALgMATgJQAegOAqgBQgPACgMAHQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQA0gFAeATQgFgBgHAAIgBACQAnAQAAAjIgJgLQAAgBgBAAQAAAAAAAAQgBAAAAABQABAAAAABQAGAQgFAQQAAgFgGgFQgBAagHAhQgHgBgFAIIgEAJQADgvgLgSQgTgcg0ABIgxAGQgKAWgMAOIgCAeIgBAZQgBgNgHgFg");
	this.shape_2.setTransform(256.7,-54,2.252,2.252);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F3231").s().p("AAYAPQgNgCAAgLIAAgBQgFgCgEAAIgBAAQgDAAgFACIAAABQAAALgMACIgnAAIgBAAQgLgFAAgIIAAgCIgLABIgCgHIAOgCQADgFAJgBIAkAAQAKgBAEAIQAGgCADAAQAEAAAGACQAEgIAKABIAkAAQAJABADAFIAKABIgBAFIgIACIAAACQAAAIgLAFIgCAAgAARgHIAAALQAAAFAGACIApAAQAFABAAgIIAAgKQgBgEgFAAIgpAAQgFABAAACgAhAgHIAAALQAAAFAGACIApAAQAFABAAgIIAAgKQgBgEgFAAIgpAAQgFABAAACg");
	this.shape_3.setTransform(254.9,-39.3,2.252,2.252);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F3231").s().p("AAFgCQgVAGgFgFIASgEIALAAQANABABAKQgGgMgLAEg");
	this.shape_4.setTransform(264.7,-44.4,2.252,2.252,-15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F3231").s().p("AgHgFQgPgKgTALIgOAKQAKgZAfAEQAQACANAGQAjAQAGAFQgFADgIAAQgTAAgfgWg");
	this.shape_5.setTransform(245.8,-44,0.911,0.911);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8AE91").s().p("AAMAAIgIgBIgDAAIgKABIgLADIAKgFIALgCIADAAIADABIAGABQAGADACAEQgEgEgFgBg");
	this.shape_6.setTransform(246,-41.2,2.252,2.252);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8AE91").s().p("AgOAEIgGgEIgBAAIABAAQAKgGALgBQAPAAAFAIIABAAIgBABQgDACgHACIgHABIgDAAQgHAAgIgDgAgSAAQAJAHANgBIAGgBQAHgCADgCQgHgGgMAAQgKABgJAEg");
	this.shape_7.setTransform(246.1,-40.4,2.252,2.252);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F3231").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_8.setTransform(264.6,-40.4,2.252,2.252);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F3231").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_9.setTransform(246.4,-40.4,2.252,2.252);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AABAHQgIgBgHgDIgGgDIAIgDQAJgDAEABIAJABQAJACACAEQgMAFgHAAIgBAAg");
	this.shape_10.setTransform(246.1,-40.5,2.252,2.252);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8AE91").s().p("AgMgCIAGgBIADgBIADAAIALACIAKAFIgLgDIgKgBIgDAAIgIABQgFABgEAEQACgEAGgDg");
	this.shape_11.setTransform(264.8,-41.2,2.252,2.252);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8AE91").s().p("AgDAHIgHgBQgHgCgDgCIgBgBIABAAQAAgBAEgCQAGgFAKAAIAGABQAJACAGAEIABAAIgBAAQgJAHgMAAgAgTABQAFADALACQANABAJgHQgGgDgIgBIgFgBQgMAAgHAGg");
	this.shape_12.setTransform(264.7,-40.4,2.252,2.252);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAFIgIgDQADgEAJgCIAIgBQAHgCAOAHQgHAGgOABIgCAAQgEAAgGgCg");
	this.shape_13.setTransform(264.7,-40.5,2.252,2.252);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6A57F").s().p("AgNAEIABgBQACACAFgCQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAIACAAQAJABADgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIACAAQABACgCADQgDADgKgBIAAAAQgDAAgBACIAAABIgFABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_14.setTransform(257.8,-28.8,2.252,2.252);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6A57F").s().p("AAFAFIAAgBIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAAAgBAAIgCAAQgJABgDgDIgBgFIACAAIAAAEQADACAIgBIACAAQAEAAAAADQAFACACgCIABABQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgFgBg");
	this.shape_15.setTransform(253.5,-28.8,2.252,2.252);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6A37E").s().p("AgXAAIgGgFIA7AAQgCADgFACQgJAGgOAAQgNAAgKgGg");
	this.shape_16.setTransform(255.6,-21.8,2.252,2.252);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E19D7A").s().p("AAAADQgOACgPgEIAUgEIACACQADABAEAAQAHAAADgDIAUAEQgJACgMABg");
	this.shape_17.setTransform(255.6,-23.3,2.252,2.252);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E2BD90").s().p("AgEgMQAEgIAEABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACARgJALIgIAJg");
	this.shape_18.setTransform(275.8,-32.5,2.252,2.252);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E2BD90").s().p("AAAALQgJgLACgRIAEgCQAEgBAEAIIADAgQgFgDgDgGg");
	this.shape_19.setTransform(235.6,-32.5,2.252,2.252);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2BD90").s().p("AgdB1QghgWgSgmQgFgDgEgGQgJgNACgQIAEgDQAFAAAEAHQgGgSgDgVQgGgvASgWIATgUQAagWAfgDIAJAAQAfADAaAWQAMAKAHAKQASAWgGAvQgDAVgGASQAEgHAFAAQABAAAAAAQABABABAAQAAAAAAABQABAAAAABQACAQgJANIgJAJQgTAmghAWIgdAOQgMgDgRgLg");
	this.shape_20.setTransform(255.7,-40.8,2.252,2.252);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D7AD85").s().p("AgHArQg+gCAPgQQAOgNAGgZIAEgWIAegGQAdgFABALQABASAbA7IgmABIgbAAg");
	this.shape_21.setTransform(256,-7.4,2.252,2.252);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A9B3BC").s().p("AkxE9IgCglIG3g8IhongICZh9QAeArAfBbQA+C2ACD1QAHBYgfAqQgcAlhJAOQguAIiGAEQicAHhlAKQgngbgKgqg");
	this.shape_22.setTransform(240,42.9,1.017,1.017,0,0.5,-179.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D6D8D8").s().p("Ai4I1QiAgfgBgOQgDgnAPhmIAQh1QADhFAHgnQACgNgGgSQhCi+goiqQg8j/AzgcQA/gkCsgYQBWgMBJgFICfARQCtAYA/AkQAyAcg7D/QgoCnhCDBQgGASACANQAHAnADBFIAQB1QAPBmgDAnQgBANiHAgQiDAeg2ADQg2gDh7geg");
	this.shape_23.setTransform(254.9,45,0.814,0.814);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCD1D0").s().p("ABvEvQgqgBiTg+IiLg+QACgQAAgZQAAgygKgxQgShbAtgRQAXgJAbAKIAWANQAaAQAUAQQAzApA3BHQAuA6ABAAIkxmLICXg1IEqGfQASAegCAvQgCAhgKAjQgHAXgXAHQg0APgbAAIgBAAg");
	this.shape_24.setTransform(304.6,10.9,0.911,0.911);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D2024").s().p("AgJADQgBgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIARgEIACABIgBACIgSADIgBABIAAgBg");
	this.shape_25.setTransform(286.7,-45.5,0.911,0.911);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#515356").s().p("AgKADIACgCIARgDIACAAIgBACIgSAEQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAg");
	this.shape_26.setTransform(286.7,-45.5,0.911,0.911);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D2024").s().p("AgNgBIAYgHIADAKIgYAHg");
	this.shape_27.setTransform(290.7,-30,0.911,0.911);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A5A8A2").s().p("AgsAWQAAgMAGgJQASgfBBgBIhYA/IgBgKg");
	this.shape_28.setTransform(192.1,17.1,2.252,2.252);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A9B1BA").s().p("AgbAGIAugaIAKAUQgCANgcAIg");
	this.shape_29.setTransform(262.7,1.9,2.252,2.252);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A9B1BA").s().p("AgdgDIAKgUIAxAhIgXAOQgigPgCgMg");
	this.shape_30.setTransform(249.7,1.2,2.252,2.252);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D4E4E").s().p("AAFAfQgcgRgPgCQgOgBgNgFQgOgFAAgEIgDggIBJAAQBXAoAEAKQAGAPgbAEQgRACgNAAQgSAAgIgFg");
	this.shape_31.setTransform(292.1,203.4,2.252,2.252);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#70767C").s().p("AA/D1Ig1l9IgHgYIAEAZIhygDIgfhnIDigDIAWAjQAOAXAGAuQADAaADAxIADE2g");
	this.shape_32.setTransform(258.2,136.1,2.252,2.252);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#70767C").s().p("AiKD2IADk3QAEgxACgZQAGgvAOgXIAWgkIDiAEIgfBoIhyACIAEgZIgHAYIg1F+g");
	this.shape_33.setTransform(247.3,136,2.252,2.252);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#121112").s().p("AgiARIAAgvIBFAAIgFAvQgUAPgPAAQgRAAgMgPg");
	this.shape_34.setTransform(224.4,189.2,2.252,2.252);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D4E4E").s().p("Ag8AhQgMgBgGgGQgFgFADgGQAEgKBWgoIBJAAIgDAgQAAAEgOAFQgMAEgPACQgTADgYAQQgIAFgRAAQgNAAgSgDg");
	this.shape_35.setTransform(214,201.2,2.252,2.252);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#121112").s().p("AgbAXIgIg6IBEAAIAEA6QgMANgQAAQgPAAgVgNg");
	this.shape_36.setTransform(281,190.2,2.252,2.252);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E2BD90").s().p("AgECPIhDh3QgBgSgDgXIgGgeIgBgJQAFgYAAgKQAAgOABgJQgCgNABgIIABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAJgCAFAHQAFAHADAQIABAQIACAVIABAEQADALAFADIAEACQADgBAEgFIBbgoIgBgBIgFgTIgBgBQgCgCgBgNIAAgDQABgGAGgBQADgBADABQACAAAEADIAEAIIACAIQADARADAyQACAUgPAeIgSAhQgDAKAOAoQANAkgDACQgFADgiAOQgdAMgHAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_37.setTransform(287.4,-19,0.911,0.911,-30);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D2024").s().p("AgXBtQgGgDgCgHIguipQgCgGAEgGQADgFAHgCIBNgUQAHgCAGADQAFADACAGIAuCqQACAGgEAFQgDAGgHACIhNAUIgFABQgEAAgDgCg");
	this.shape_38.setTransform(279,-30.9,0.911,0.911,-30);

	this.instance_7 = new lib.Silla_de_frente();
	this.instance_7.parent = this;
	this.instance_7.setTransform(252.3,75.5,0.911,0.911,0,0,0,73.5,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.2,-73.2,280.5,298.1);


(lib.MUJER1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.brazo_1();
	this.instance.parent = this;
	this.instance.setTransform(37.2,104.3,2.815,2.815,0,0,0,7.7,9.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD5B7").s().p("AgyAWIAcgVIAFgHQAEgHADgCIAPgJIAFgHQABgBABAAQAAgBABAAQAAAAAAAAQABAAAAABQABAFgFAGIgFAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQABABATgCIAaAAQAEACgDAIQgDAHgLAHQgCACgKACIgMADIgWAAQgFAAgNAJIgMAJg");
	this.shape.setTransform(64.2,105.1,2.815,2.815);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAAAAQgDAAgIADQAFgFAHAAQAHAAAEAFQgFgDgHAAg");
	this.shape_1.setTransform(47.3,28.6,2.815,2.815);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAGAAIgEgBIgEABIgHACIgDAAIgCgCIANgDQALgDAFALg");
	this.shape_2.setTransform(47.3,30.3,2.815,2.815);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_3.setTransform(49.5,30.4,2.815,2.815);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#797C7E").s().p("AAAAFIgBAAQgEgBABgEIAAgDIABgBIACAAQAEgBACAEQAAADgCACIgDABIAAAAg");
	this.shape_4.setTransform(49,30.7,2.815,2.815);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGAEQgCAAgEgEIAFgCIAAgBIAEgBIAEgBIAEACIAEADIAEADIgCAAQgDACgIAAg");
	this.shape_5.setTransform(47.8,30.8,2.815,2.815);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3D261E").s().p("AgKAFIAHgVQALALADAMQABAGgBAEg");
	this.shape_6.setTransform(48.5,13.3,2.815,2.815);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E84E4D").s().p("AgEAAIgEgFIAPAEIABABIAAADIgBADQgHgBgEgFg");
	this.shape_7.setTransform(50.3,47.2,2.815,2.815);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE5C5E").s().p("AgJAAIAEAAIAGgDIAFAAQAEABAAABQAAABgEAEg");
	this.shape_8.setTransform(50.7,45.5,2.815,2.815);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AABgCQAHAAAEAFQgGgEgGABQgEAAgHADQAFgFAHAAg");
	this.shape_9.setTransform(47.3,28.5,2.815,2.815);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3D261E").s().p("AABgEIAMADIADABQAAAAABAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgKgEQgLgFgIAIIgCACQAHgLALACg");
	this.shape_10.setTransform(46.5,25.1,2.815,2.815);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D261E").s().p("AANBnQhJgKgMgbQgPggAEgpQAEgsAWgcQASgXAhgFQAhgFAiARQAaAOgDACIgSBRQgMBWAeAVQgiAAglgGg");
	this.shape_11.setTransform(23.8,30.6,2.815,2.815);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8B796").s().p("AgiBsQgEgegJgVQgKgCgKgMQgVgZACg1QACg2AqgSQAVgJAVACIAeAHQAgAMAIAfIABAyIACALQAEAMAJAHQACAGgEADQgDABgFABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAHADADQADADgHAEQAEADgDAFIgEAEIABAHQABAGgBACQgGAIgJAAIgVgEQgOgDgDAEQgDAFgCAOQgDAMAAAHg");
	this.shape_12.setTransform(31.9,34,2.815,2.815);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAA483").s().p("AAAAIQgGgIACgLIACgCQADAAADAFIACAWQgEgCgCgEg");
	this.shape_13.setTransform(26.1,43,2.815,2.815);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7F171B").s().p("AgiAqIgCgGQgOgyAWgcQAUgbAaAcQAWAXACAlQAAATgDAPQgZgJgZAFIgWAHQABgGgCgIg");
	this.shape_14.setTransform(25.7,84.8,2.815,2.815);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6A491").s().p("AACAUIgBgCIAAAAIAAAAIgBgEIAAgBIgCgCQgGgHgBgEIgBgHIABgEIABgDQACgDAEgCQACgBAEABQAEABACAEIAAAHQAAgEgBgDQgCgDgDgBQgEgBgBACIgFAEQgCADAAADIABAHQACAGAEAEIACAEIABAEIAAAAIACACg");
	this.shape_15.setTransform(28.6,45.5,2.815,2.815);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7F171B").s().p("AgbCoIgngPQAXhUgMg0QgSgzgEglQgGguAOgfIAOgVQAbgIAXALQALAFAGAHIAwBDQAXAggDAWQgCAPgRAkQgJAdADA+QABAfAEAZQgXAIgZAAQgSAAgVgFg");
	this.shape_16.setTransform(35.3,112.7,2.815,2.815);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#10121D").s().p("AgmABQAYgCAhgBIAUABIgBABQgvAAgcADQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_17.setTransform(48.7,172.8,2.815,2.815);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00011E").s().p("AiDBNQgrgFAMhGIAUhDIAFgDQAFgCAIgCQArgJAOAAQATAAATALIAIAaIAJAoIAyACQBIAEASADQAhAGAEAPQADAJgKAWIAAABQgFAJg0AHIg0AFQgxADgoAAQg1AAgmgFg");
	this.shape_18.setTransform(57.8,173.3,2.815,2.815);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F171B").s().p("AAEAmQgGgGgGgPQgDgIgGgIQgGgFgDAAQgGAAADASIAFAYIgGABQgFgfgIgMQgGgKACgMQAEgKgBgCQAFAGAJAHIAOAMQAFAFAKAMIAFALIAFAJQAGAEAGAAIAKgFQAEgBAHAEQAJAEgEAEQAAABgKABQgHADgKAAIgIAAQgFAAgDgBg");
	this.shape_19.setTransform(112.9,261.8,2.815,2.815);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8B796").s().p("AAuCSQgIgCgFgJIgDgJIgEgIIgRgOQgFgGgEgCIgJgFQgDgCAAgCIABgFIAAgNQgBgKgCgIQgFgQgHgKQgWgdgFgiQgBgKAAgTIABgPIgBgPIgIgSIgFgPIAfgFIgGgGQAJAAAJgDQAGgCADACQACABABAGIAgCzQACAKAGANIAJAWQAKAcAJAPQACADAFADIAFAEIgDAEIgFACg");
	this.shape_20.setTransform(103.8,229.9,2.815,2.815);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F171B").s().p("AAcAlIgMAAQgJgBgJgDIgBgBIgBgBIgEgNIgEgOQgBgEgEgDQgFgEgDAAQgDAAgBACIgCADIAAAJIABASIACAJIgFAAIgDgUQgDgKgFgHQgGgJABgNQAEgLgBgBQAGAHAWAUQASAOAGAOQADAIAKAAQANgFgBgBIAGAEIAHAEQAFADABADQACAEgLAAIgNgBg");
	this.shape_21.setTransform(118.5,257.9,2.815,2.815);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F7B194").s().p("AAnCGQgFgMgEgFQgCgEgGgDIgTgOIgIgEQgDgCAAgCIAAgGIAAgMQgBgLgDgHQgGgQgIgJQgXgdgGghQgCgMAAgRQABgVgDgJIgIgSIgGgPIAegGIgGgGQAKgBAIgCQAGgDADACQADACABAFIAoCyQACAJAGANIALAWQAMAcAIAOIAIAGIAFADIgDAEIgFADIgOABQgIgCgFgJg");
	this.shape_22.setTransform(107.7,225.9,2.815,2.815);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#881A1E").s().p("AABBkQgJgBg+hyQgGgLgGgNQgLgaAGgOQAKgaAVAHQALAEAIAJIASAhIAWA0QAMAfACABQAEACAsg5IAaAQQgPAbgTAbQglA1gSAAIgBAAg");
	this.shape_23.setTransform(46,95.4,2.815,2.815);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDD5B7").s().p("AgmAlQAPgbABgEQAAgPADgFQAIgLABgFIACgIQABgCAAgBQAAAAABgBQAAAAAAAAQABAAAAABQADAFgBAHIgDAFQAAABgBABQAAABAAAAQAAABAAAAQAAAAAAAAQACAAAPgKIAXgLQAEgBABAIQABAJgGALIgJAJIgKAHQgDAEgPAHQgFACgHAPIgHANg");
	this.shape_24.setTransform(73.5,84.6,2.815,2.815);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MUJER1, new cjs.Rectangle(0,0,132.7,272.8), null);


(lib.mc_imagenmodulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ah7B7QgzgzAAhIQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIQAABIgzAzQgzA0hJAAQhIAAgzg0g");
	var mask_graphics_1 = new cjs.Graphics().p("AkNENQhwhvAAieQAAidBwhwQBwhwCdAAQCeAABvBwQBxBwAACdQAACehxBvQhvBxieAAQidAAhwhxg");
	var mask_graphics_2 = new cjs.Graphics().p("AmYGXQioioAAjvQAAjuCoiqQCqioDuAAQDvAACpCoQCpCqAADuQAADvipCoQipCqjvAAQjuAAiqiqg");
	var mask_graphics_3 = new cjs.Graphics().p("AoaIaQjfjeAAk8QAAk6DfjhQDfjdE7gBQE7ABDeDdQDhDhgBE6QABE8jhDeQjeDfk7ABQk7gBjfjfg");
	var mask_graphics_4 = new cjs.Graphics().p("AqVKTQkRkQAAmDQAAmCERkTQETkQGCgBQGDABEREQQESETAAGCQAAGDkSEQQkREUmDAAQmCAAkTkUg");
	var mask_graphics_5 = new cjs.Graphics().p("AsIMGQk/k/AAnHQAAnFE/lDQFDk/HFAAQHGAAFAE/QFCFDAAHFQAAHHlCE/QlAFDnGgBQnFABlDlDg");
	var mask_graphics_6 = new cjs.Graphics().p("AtzNwQlrlrAAoFQAAoDFrlwQFvlrIEAAQIEAAFsFrQFvFwAAIDQAAIFlvFrQlsFvoEAAQoEAAlvlvg");
	var mask_graphics_7 = new cjs.Graphics().p("AvWPTQmUmUAAo/QAAo9GUmYQGYmVI+AAQI/AAGUGVQGYGYAAI9QAAI/mYGUQmUGYo/AAQo+AAmYmYg");
	var mask_graphics_8 = new cjs.Graphics().p("AwxQuQm5m6AAp0QAApzG5m+QG+m5JzAAQJ0AAG5G5QG+G+AAJzQAAJ0m+G6Qm5G9p0AAQpzAAm+m9g");
	var mask_graphics_9 = new cjs.Graphics().p("AyESAQncnbAAqlQAAqjHcnhQHhncKjAAQKkAAHcHcQHhHhAAKjQAAKlnhHbQncHhqkAAQqjAAnhnhg");
	var mask_graphics_10 = new cjs.Graphics().p("AzPTLQn7n6AArRQAArPH7oAQH/n6LQAAQLQAAH7H6QIAIAAALPQAALRoAH6Qn7H/rQABQrQgBn/n/g");
	var mask_graphics_11 = new cjs.Graphics().p("A0SUOQoXoWABr4QgBr2IXodQIboVL3AAQL3AAIXIVQIcIdAAL2QAAL4ocIWQoXIcr3gBQr3ABobocg");
	var mask_graphics_12 = new cjs.Graphics().p("A1NVJQowouABsbQgBsZIwo0QIzowMaABQMagBIvIwQI1I0AAMZQAAMbo1IuQovI1saAAQsaAAozo1g");
	var mask_graphics_13 = new cjs.Graphics().p("A2BV8QpEpEAAs4QAAs4JEpJQJKpEM3AAQM4AAJEJEQJKJJAAM4QAAM4pKJEQpEJKs4AAQs3AApKpKg");
	var mask_graphics_14 = new cjs.Graphics().p("A2tWoQpVpWAAtSQAAtQJVpdQJcpVNRAAQNSAAJVJVQJdJdAANQQAANSpdJWQpVJctSAAQtRAApcpcg");
	var mask_graphics_15 = new cjs.Graphics().p("A3QXLQplpkAAtnQAAtmJlpqQJqplNmAAQNnAAJkJlQJrJqAANmQAANnprJkQpkJrtnAAQtmAApqprg");
	var mask_graphics_16 = new cjs.Graphics().p("A3sXnQpwpwAAt3QAAt2Jwp2QJ2pwN2AAQN3AAJwJwQJ2J2AAN2QAAN3p2JwQpwJ2t3AAQt2AAp2p2g");
	var mask_graphics_17 = new cjs.Graphics().p("A4AX6Qp4p4AAuCQAAuCJ4p+QJ+p4OCAAQOCAAJ4J4QJ/J+AAOCQAAOCp/J4Qp4J+uCABQuCgBp+p+g");
	var mask_graphics_18 = new cjs.Graphics().p("A4LYHQp9p9AAuKQAAuIJ9qEQKCp8OJAAQOJAAJ9J8QKDKEAAOIQAAOKqDJ9Qp9KDuJgBQuJABqCqDg");
	var mask_graphics_19 = new cjs.Graphics().p("A4PYKQp/p+AAuMQAAuKJ/qFQKEp/OLAAQOMAAJ+J/QKFKFAAOKQAAOMqFJ+Qp+KFuMAAQuLAAqEqFg");
	var mask_graphics_20 = new cjs.Graphics().p("A33XyQp0p0AAt+QAAt8J0p6QJ6p1N9AAQN9AAJ0J1QJ7J6AAN8QAAN+p7J0Qp0J6t9AAQt9AAp6p6g");
	var mask_graphics_21 = new cjs.Graphics().p("A3eXZQpqpqAAtvQAAttJqpxQJwpqNuAAQNuAAJqJqQJxJxAANtQAANvpxJqQpqJwtuAAQtuAApwpwg");
	var mask_graphics_22 = new cjs.Graphics().p("A3FXAQpfpgAAtgQAAtfJfpmQJmpfNfAAQNgAAJgJfQJlJmAANfQAANgplJgQpgJltgAAQtfAApmplg");
	var mask_graphics_23 = new cjs.Graphics().p("A2sWnQpVpWAAtRQAAtQJVpcQJcpVNQAAQNRAAJWJVQJbJcAANQQAANRpbJWQpWJbtRAAQtQAApcpbg");
	var mask_graphics_24 = new cjs.Graphics().p("A2TWOQpLpLAAtDQAAtBJLpSQJRpLNCAAQNCAAJMJLQJRJSAANBQAANDpRJLQpMJRtCAAQtCAApRpRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:219.5,y:213.6}).wait(1).to({graphics:mask_graphics_1,x:220.2,y:214.1}).wait(1).to({graphics:mask_graphics_2,x:220.9,y:214.6}).wait(1).to({graphics:mask_graphics_3,x:221.5,y:215.1}).wait(1).to({graphics:mask_graphics_4,x:222.1,y:215.5}).wait(1).to({graphics:mask_graphics_5,x:222.7,y:215.9}).wait(1).to({graphics:mask_graphics_6,x:223.2,y:216.3}).wait(1).to({graphics:mask_graphics_7,x:223.7,y:216.7}).wait(1).to({graphics:mask_graphics_8,x:224.1,y:217}).wait(1).to({graphics:mask_graphics_9,x:224.6,y:217.3}).wait(1).to({graphics:mask_graphics_10,x:224.9,y:217.6}).wait(1).to({graphics:mask_graphics_11,x:225.3,y:217.8}).wait(1).to({graphics:mask_graphics_12,x:225.6,y:218}).wait(1).to({graphics:mask_graphics_13,x:225.8,y:218.2}).wait(1).to({graphics:mask_graphics_14,x:226,y:218.4}).wait(1).to({graphics:mask_graphics_15,x:226.2,y:218.5}).wait(1).to({graphics:mask_graphics_16,x:226.3,y:218.6}).wait(1).to({graphics:mask_graphics_17,x:226.4,y:218.7}).wait(1).to({graphics:mask_graphics_18,x:226.5,y:218.7}).wait(1).to({graphics:mask_graphics_19,x:226.5,y:218.7}).wait(1).to({graphics:mask_graphics_20,x:226.7,y:218.2}).wait(1).to({graphics:mask_graphics_21,x:226.8,y:217.7}).wait(1).to({graphics:mask_graphics_22,x:227,y:217.2}).wait(1).to({graphics:mask_graphics_23,x:227.1,y:216.7}).wait(1).to({graphics:mask_graphics_24,x:227.3,y:216.2}).wait(1));

	// Capa_1
	this.instance = new lib.imgmod1();
	this.instance.parent = this;
	this.instance.setTransform(225.5,217.5,1,1,0,0,0,386.9,219.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(202,196.1,35,35);


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

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(221.3,209.4,1,1,0,0,0,1.9,4.8);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.6,211.3,1,1,0,0,0,1.2,2.8);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(218.4,208.8,1,1,0,0,0,2.6,5.4);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(175.8,208.8,1,1,0,0,0,2.5,5.4);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.6,210.4,1,1,0,0,0,1.4,3.8);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(172.5,209.1,1,1,0,0,0,1.8,5);
	this.instance_5.alpha = 0.391;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A9B3BC").s().p("AgyAMIBTgwIASAkQgBAOgbANIgaAKg");
	this.shape_99.setTransform(201.8,201.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A9B3BC").s().p("AgSAbQgggSgCgOIATglIBWA8IgoAZQgOgGgRgKg");
	this.shape_100.setTransform(191.4,201.1);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(199.1,208.3,1,1,0,0,0,0.6,5.9);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(202.9,208,1,1,0,0,0,0.6,6.1);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(206,207.8,1,1,0,0,0,0.6,6.2);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(215.3,208.1,1,1,0,0,0,0.7,6);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(212.6,207.6,1,1,0,0,0,0.6,6.4);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(208.9,207.4,1,1,0,0,0,0.7,6.6);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(194.9,208.3,1,1,0,0,0,0.6,5.9);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(191.2,208,1,1,0,0,0,0.6,6.1);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(188,207.8,1,1,0,0,0,0.6,6.2);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(178.9,208.1,1,1,0,0,0,0.7,6);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(181.5,207.6,1,1,0,0,0,0.6,6.4);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17();
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

	this.instance_18 = new lib.ClipGroup();
	this.instance_18.parent = this;
	this.instance_18.setTransform(82.9,91,1,1,0,0,0,11.4,15.7);

	this.instance_19 = new lib.ClipGroup_1();
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


(lib.instruccionesmc4t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// flecha 
	this.instance = new lib.lapizmueve("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.2,14.4,0.231,0.231,0,0,0,23.4,23.6);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.4,scaleX:1,scaleY:1,y:14.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(38));

	// flecha mueve
	this.instance_1 = new lib.lapizmueve("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.2,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(5).to({x:-8.7},0).to({x:275.3},32,cjs.Ease.get(1)).wait(1));

	// tapa circulo
	this.instance_2 = new lib.tapageneralgris("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(3089.7,91.6,29.217,2.053,0,0,0,106.8,44.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:7.83,x:1036.5},17,cjs.Ease.get(1)).to({scaleX:2.35,x:510.5},14).to({_off:true},1).wait(1));

	// Instruccion
	this.text = new cjs.Text("Selecciona tus recomendaciones.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(-14.4,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(14).to({_off:false},0).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-9.3,241,52);


(lib.ilustracion2222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M03_TMR_DESICION();
	this.instance.parent = this;
	this.instance.setTransform(125.2,110,0.355,0.355,0,0,0,196.6,198.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.4,39.5,139.6,141);


(lib.HOMBRE1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D8D8").s().p("AgyB+QAGgTAOgoQAQgtAEgEQAEgDgBgMQgCgUABgNIAAhPQAIgQALgHQAXgPARApIgFAoQgFAtgGAUIgCAZQgCAJgWApIghA/g");
	this.shape.setTransform(29,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747887").s().p("AgEABIAEgOIAFANIgFAOg");
	this.shape_1.setTransform(22.7,47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#747887").s().p("AgEAAIAEgOIAFAOIgFAPg");
	this.shape_2.setTransform(22.7,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAPg");
	this.shape_3.setTransform(22.7,40.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAOg");
	this.shape_4.setTransform(33.9,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#747887").s().p("AgFAAIAFgOIAGAOIgGAPg");
	this.shape_5.setTransform(35,28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#747887").s().p("AgCAEIgIgNIAOAFIAHAOg");
	this.shape_6.setTransform(34.2,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747887").s().p("AgCAEIgIgNIAOAFIAHAOg");
	this.shape_7.setTransform(32.7,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#747887").s().p("AgFACIABgPIAJAMIgBAPg");
	this.shape_8.setTransform(34.6,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#747887").s().p("AgEACIABgPIAJAMIgCAPg");
	this.shape_9.setTransform(35.9,25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAPg");
	this.shape_10.setTransform(36.2,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#747887").s().p("AgEAAIAGgNIADAOIgHANg");
	this.shape_11.setTransform(33.8,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#747887").s().p("AgEAAIAGgNIADAOIgHANg");
	this.shape_12.setTransform(33.2,33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#747887").s().p("AgFAAIAHgNIAEAOIgIANg");
	this.shape_13.setTransform(34.9,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#747887").s().p("AgFAAIAHgNIAEAOIgIANg");
	this.shape_14.setTransform(35.9,31.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#747887").s().p("AgFAAIAHgOIAEAPIgIANg");
	this.shape_15.setTransform(35.3,34.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#747887").s().p("AgFAAIAIgNIADAOIgIANg");
	this.shape_16.setTransform(34.3,34.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAPg");
	this.shape_17.setTransform(32.8,37.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#747887").s().p("AgEAAIAEgOIAFAOIgFAPg");
	this.shape_18.setTransform(32,49.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#747887").s().p("AgEAAIAEgPIAFAPIgFAQg");
	this.shape_19.setTransform(33.1,49.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#747887").s().p("AgCAAIAFgOIAAANIgDAQg");
	this.shape_20.setTransform(33.9,50.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#747887").s().p("AgEAAIAEgPIAFAPIgFAQg");
	this.shape_21.setTransform(32.3,46);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#747887").s().p("AgEAAIAEgPIAFAPIgFAQg");
	this.shape_22.setTransform(33.3,46.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#747887").s().p("AgCAAIAFgPIAAAOIgDARg");
	this.shape_23.setTransform(34.1,47.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#747887").s().p("AgEAAIAEgPIAFAPIgFAQg");
	this.shape_24.setTransform(31.5,42.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#747887").s().p("AgEAAIAEgPIAFAPIgFAQg");
	this.shape_25.setTransform(32.7,42.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#747887").s().p("AgEAAIAEgPIAFAPIgFAQg");
	this.shape_26.setTransform(33.7,43.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#747887").s().p("AgEAAIAEgPIAFAPIgFAQg");
	this.shape_27.setTransform(33.9,40.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#747887").s().p("AgCAAIAFgPIAAAOIgDARg");
	this.shape_28.setTransform(34.5,43.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#747887").s().p("AgCAAIAEgPIABAOIgCARg");
	this.shape_29.setTransform(34.9,40.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAOg");
	this.shape_30.setTransform(28.3,49.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAPg");
	this.shape_31.setTransform(29.6,49.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#747887").s().p("AgFAAIAFgOIAGAOIgGAPg");
	this.shape_32.setTransform(30.9,49.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_33.setTransform(29.8,46.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_34.setTransform(31.1,46);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAOg");
	this.shape_35.setTransform(32.9,40.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAPg");
	this.shape_36.setTransform(35.1,37.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAOg");
	this.shape_37.setTransform(34,37.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAPg");
	this.shape_38.setTransform(22.7,37.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#747887").s().p("AgCAAIAAgMIAFANIgBAMg");
	this.shape_39.setTransform(21.9,47);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#747887").s().p("AgDAAIACgNIAFANIgDAOg");
	this.shape_40.setTransform(21.8,43.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#747887").s().p("AgDAAIACgNIAFANIgDAOg");
	this.shape_41.setTransform(21.8,40.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAPg");
	this.shape_42.setTransform(21.7,37.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAPg");
	this.shape_43.setTransform(21.7,34.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAPg");
	this.shape_44.setTransform(22.6,34.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#747887").s().p("AgEABIAEgPIAFAOIgFAPg");
	this.shape_45.setTransform(21.6,31.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#747887").s().p("AgEAAIAEgNIAFANIgFAPg");
	this.shape_46.setTransform(22.6,31.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#747887").s().p("AgEAAIAHgNIACAOIgHANg");
	this.shape_47.setTransform(22.9,28.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#747887").s().p("AgEAAIAJgMIAAAOIgJAMg");
	this.shape_48.setTransform(23.7,25.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#747887").s().p("AgBAAIAGgMIAAAOIgJAMg");
	this.shape_49.setTransform(24.7,22.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_50.setTransform(23.6,47.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_51.setTransform(27.5,29);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_52.setTransform(27.3,31.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_53.setTransform(27.3,34.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_54.setTransform(27.5,37.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAPg");
	this.shape_55.setTransform(26.3,40.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAOg");
	this.shape_56.setTransform(26.2,37.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAOg");
	this.shape_57.setTransform(26.1,34.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_58.setTransform(26,32);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#747887").s().p("AgFAAIAIgNIADAOIgJANg");
	this.shape_59.setTransform(26.3,29);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#747887").s().p("AgEgBIAKgLIAAAOIgLALg");
	this.shape_60.setTransform(27.3,26.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#747887").s().p("AgCgEIAIACIgLAHg");
	this.shape_61.setTransform(28.4,21.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#747887").s().p("AgCgFIAIACIgLAJg");
	this.shape_62.setTransform(29.8,21.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#747887").s().p("AgEgBIAKgLIAAAOIgLALg");
	this.shape_63.setTransform(28.7,23.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#747887").s().p("AgFAAIAFgOIAGAOIgGAPg");
	this.shape_64.setTransform(25.2,43.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_65.setTransform(23.6,43.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAOg");
	this.shape_66.setTransform(25.1,40.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAOg");
	this.shape_67.setTransform(23.6,40.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAPg");
	this.shape_68.setTransform(25,37.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAOg");
	this.shape_69.setTransform(23.6,37.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_70.setTransform(24.9,35);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAPg");
	this.shape_71.setTransform(24.8,32.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#747887").s().p("AgFAAIAIgNIADAOIgJANg");
	this.shape_72.setTransform(25.1,29.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#747887").s().p("AgEgBIAKgLIAAAPIgLALg");
	this.shape_73.setTransform(26.1,26.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#747887").s().p("AgEgBIAKgLIAAAPIgLALg");
	this.shape_74.setTransform(27.3,23.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#747887").s().p("AgFABIAFgPIAGAOIgGAOg");
	this.shape_75.setTransform(23.6,34.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#747887").s().p("AgFAAIAFgNIAGANIgGAOg");
	this.shape_76.setTransform(23.5,31.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#747887").s().p("AgFAAIAIgNIADAOIgJANg");
	this.shape_77.setTransform(23.8,28.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#747887").s().p("AgEgBIAKgLIAAAOIgLALg");
	this.shape_78.setTransform(24.8,25.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#747887").s().p("AgEgBIAKgLIAAAOIgLALg");
	this.shape_79.setTransform(26,22.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#805F50").s().p("AgDgIQADgGADABQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAMgGAIQgDAFgDACg");
	this.shape_80.setTransform(30.8,10.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#231F20").s().p("AAEgCQgRAEgEgHIAPgCIAKABQAKADAAALQgDgNgLADg");
	this.shape_81.setTransform(24,8.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3F3231").s().p("AAfBMQgFgBgBgFIgLgvQAAgHgDgLQgDgOgFgHIgKgOQgLgIgVACQgSgBgFgCQgEgCABgFQAAgEAHgGIALgIIABAAQAIgFALgDIACAAIALgCQAwgJAVAgQAOAWgDAhQgDAmgJARQgFAIgFACIgEAFQgDADgDAAIgDgBg");
	this.shape_82.setTransform(29.1,7.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#35343A").s().p("AgBAAIABgDIACgBIAAAFIgCAEQgCgCABgDg");
	this.shape_83.setTransform(23.3,50.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#35343A").s().p("AAAADQgDgCgCABQACgFgBgBIAEABQAEACABABQACADgEACIgDgCg");
	this.shape_84.setTransform(25.3,50.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C3C3C1").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_85.setTransform(24.1,50.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#35343A").s().p("AgGAAQAAgGAGAAQADAAACACQACACAAACQAAAHgHAAQgGAAAAgHg");
	this.shape_86.setTransform(24.1,50.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#805F50").s().p("AAEAwQgHgCgGgEQgIgHgCgKQgCgGAAgGQACgNAKgWQACgEAFgGQAEgFAAgEIADgGIAPAGQgEAIADAKIABAIQAAAJgEAJQgEAJAAAIQABAJAFAFQAEADAAAEQAAABAAABQAAABgBAAQAAABAAAAQgBABAAAAIgHACIgDAAIgGAAg");
	this.shape_87.setTransform(23.6,54);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#805F50").s().p("AgDgJQADgGADABQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQACANgHAJQgCAFgEACg");
	this.shape_88.setTransform(31.2,10.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#947668").s().p("AgGADIgBgDQAAgBAGAAIAJgCQgEAEgFACIgDABIgCgBg");
	this.shape_89.setTransform(22.4,14.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#947668").s().p("AgIgCIAHAAQAHAAADACIgPADQgDgDABgCg");
	this.shape_90.setTransform(22.3,14);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#473834").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFgBQgEABAAgFg");
	this.shape_91.setTransform(23.1,9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#947668").s().p("AgCAFQgKgBgDgDIgBAAIAAAAIAEgDQAFgDAHAAIAFABQAHABAEADIABAAIgBAAQgGAGgKAAgAgOABQADACAJABQALACAGgGIgLgDIgEgBQgJAAgFAFg");
	this.shape_92.setTransform(23.6,9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgJAEIgGgCQACgEAGgBIAHgBQAGgBAKAFQgFAFgLAAIgBAAIgIgBg");
	this.shape_93.setTransform(23.6,9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B6BCC5").s().p("AgfAKIA8geIAFAUQgCAKhBALg");
	this.shape_94.setTransform(29,19.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#ADB2B2").s().p("AgCCmIhCgEQgIixgDgYQgCgPAWguIAWgrIBJgWIAJAHQALAJAHAOQAaAsgNBFQgbCQAJAhQAEALg0AAIgMAAg");
	this.shape_95.setTransform(28.8,36.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#805F50").s().p("AgPBVQADgPgCgEQgCgEgNADIgTAEQgIAAgFgHQgBgCABgFIABgHIAAgBIgDgJQgCgDABgEIABgIIgDgBQgFgBgCgBQgDgCAAgDIABgDQAEgMAFgHIAEgHIABgsQAHgcAcgLQAPgGAMAAIAlAHQAlAPACAwQABAvgSAWQgIALgKABQgHATgEAaIgyALIAEgTg");
	this.shape_96.setTransform(27.9,10.5);

	this.instance = new lib.brazo();
	this.instance.parent = this;
	this.instance.setTransform(23.3,30.5,0.999,0.999,43.2,0,0,10.3,14.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#805F50").s().p("AguAnQgIgEAAgFQABgEAGgHIAJgKQARgOAAgCQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgCAAIgHACQgIAAgFgFQgCgDAGAAIALABQACAAAIgDIAKgEQAGgBARADQAFAAAlgYIgGAgIgPADQgOAFgEAGQgGANgLAGIgLAJQgJAIgGACIgGABQgGAAgGgEg");
	this.shape_97.setTransform(6.2,29.7,0.999,0.999,43.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111011").s().p("AhOCeIgojgQgDgOAIgOQAPgdA2gCQA1gBgCgPIgLgPIBygCIAFAjQAFAlAAAJQAAAQgsASQg0AWgygRIASDFg");
	this.shape_98.setTransform(23.1,68.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#353335").s().p("AhWCUQgRgrgRg0QgihnABguQAAgvBUgGQArgDA0AFQAPgBAXgFIBbALIgqAqQgJAIhMAhQgKAGgmAAQgJAAgbgDIgZgDIAgBZIAMAqQALAnAIALQAIALAAAIIgDAKQgBADgMAAQgRAAgrgGg");
	this.shape_99.setTransform(15.4,67.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5E4A39").s().p("Ag/AeQgCAAgBgHQgBgJAQgHIAngUIAHgQIBCADIAFAMQABAYgDADQgEADgdgCIgxAQg");
	this.shape_100.setTransform(16,86.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5E4A39").s().p("Ag/AeQgCAAAAgGQgCgKAQgHIAogUIAHgQIBBADIAFANQABAYgDADQgEACgdgBIgxAPg");
	this.shape_101.setTransform(8.1,85.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HOMBRE1, new cjs.Rectangle(0,0,36.8,89.9), null);


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


(lib.escenario3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CERRO();
	this.instance.parent = this;
	this.instance.setTransform(865.4,165,2.306,2.306,0,0,0,19.7,8.9);

	this.instance_1 = new lib.Cuadros_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(912.3,139.1,0.774,0.774,0,0,0,124.7,64.3);

	this.instance_2 = new lib.Maseta1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(843.3,293.3,1,1,0,0,0,64.3,87.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24272A").s().p("ABDCJQgnAAgcADIAAAAQh0gJgmARQACgrAKgtQAShaAlgMQA4gTAIgWQACgFAAgqIADgIQAGgIAMgBIAAAAQANABAGAIQADAEAAAEIABAWQAAAWABADQAIAWA4ATQAlAMASBaQAKAtACArQgYgLhAAAg");
	this.shape.setTransform(98.3,66.5,1.396,1.396);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDB971").s().p("AgqAoQgRgRAAgXQAAgWARgRQASgQAYAAQAZAAASAQQARARAAAWQAAAYgRAQQgSAQgZAAQgYAAgSgQg");
	this.shape_1.setTransform(98.5,87.1,1.396,1.396);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24272A").s().p("AgJCwIAAlfIATAAIAAFfg");
	this.shape_2.setTransform(98.2,24.6,1.396,1.396);

	this.instance_3 = new lib.Pantallaamedias();
	this.instance_3.parent = this;
	this.instance_3.setTransform(53.7,244,0.824,0.824,0,0,0,65.7,142.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,915.2,380.5);


(lib.escenario1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cuadro_2();
	this.instance.parent = this;
	this.instance.setTransform(820.9,141.7,0.653,0.653,0,0,0,55.1,55.1);

	this.instance_1 = new lib.PINTURAS();
	this.instance_1.parent = this;
	this.instance_1.setTransform(801.2,134.9,0.781,0.781,0,0,0,106.4,37.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24272A").s().p("ABDCJQgnAAgcADIAAAAQh0gJgmARQACgrAKgtQAShaAlgMQA4gTAIgWQACgFAAgqIADgIQAGgIAMgBIAAAAQANABAGAIQADAEAAAEIABAWQAAAWABADQAIAWA4ATQAlAMASBaQAKAtACArQgYgLhAAAg");
	this.shape.setTransform(197.2,61,1.28,1.28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDB971").s().p("AgqAoQgRgRAAgXQAAgWARgRQASgQAYAAQAZAAASAQQARARAAAWQAAAYgRAQQgSAQgZAAQgYAAgSgQg");
	this.shape_1.setTransform(197.4,79.9,1.28,1.28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#24272A").s().p("AgJCwIAAlfIATAAIAAFfg");
	this.shape_2.setTransform(197.1,22.5,1.28,1.28);

	this.instance_2 = new lib.Mueble1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(902.6,271.5,1,1,0,0,0,45.8,103.7);

	this.instance_3 = new lib.Maseta1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(808.5,301.7,0.751,0.751,0,0,0,64.3,87.1);

	this.instance_4 = new lib.Pantallaamedias();
	this.instance_4.parent = this;
	this.instance_4.setTransform(65.7,224.8,1,1,0,0,0,65.7,142.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,948.3,375.1);


(lib.escenario4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pisarron_2();
	this.instance.parent = this;
	this.instance.setTransform(746,234.7,1,1,0,0,0,113.7,188.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.2,15.6,498.5,407.8);


(lib.escenario2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pisarron_1();
	this.instance.parent = this;
	this.instance.setTransform(795.4,259.9,1.004,1.004,0,0,0,113.7,188.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#24272A").s().p("AAnBQQgVAAgSACIAAAAQhEgGgWALQACgZAFgbQALg1AVgHQAigLAEgNQABgCAAgZIACgFQAEgFAGAAIAAAAQAMAAABAKIABAbQAEANAiALQAVAHALA1QAGAbABAZQgOgHgmAAg");
	this.shape.setTransform(259.2,70,2.479,2.479);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDB971").s().p("AgYAYQgKgKAAgOQAAgNAKgJQALgKANAAQAPAAAKAKQAKAJAAANQAAAOgKAKQgKAJgPAAQgNAAgLgJg");
	this.shape_1.setTransform(259.3,91.4,2.479,2.479);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#24272A").ss(2).p("AAABnIAAjN");
	this.shape_2.setTransform(259,26.2,2.479,2.479);

	this.instance_1 = new lib.Mueble2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(96.2,376.4,1.004,1.004,0,0,0,214.8,72.6);

	this.instance_2 = new lib.Cafetera();
	this.instance_2.parent = this;
	this.instance_2.setTransform(184.1,245.1,1.004,1.004,0,0,0,36.5,49.4);

	this.instance_3 = new lib.Cuadro_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(82.5,125.7,1.004,1.004,0,0,0,55.1,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-0.3,1028.9,449.6);


(lib.ch2 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.instance = new lib.respuestadecheckboxes("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.4,19.1,0.636,0.636,0,0,0,11.1,10.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiUCVIAAkqIEpAAIAAEqg");
	this.shape.setTransform(18.6,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,3.7,29.9,29.9);


(lib.bullet6ultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Entender mejor a los colaboradores. Identificar habilidades, aspiraciones, fortalezas, áreas de oportunidad y las necesidades de desarrollo para generar planes de crecimiento que motiven y soporten los objetivos de la empresa.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 480;
	this.text.parent = this;
	this.text.setTransform(14,39);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,49.1,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,37,496.2,86.1);


(lib.bullet6penultimomc111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Dar seguimiento a los planes de desarrollo establecidos.", "17px 'Arial'", "#333333");
	this.text.lineHeight = 28;
	this.text.lineWidth = 480;
	this.text.parent = this;
	this.text.setTransform(14,58);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,68.1,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,56,496.2,86.1);


(lib.bullet5ultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,30.8,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Identificar, retener y desarrollar a personas con alto potencial (“Top Talent”) en la organización.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 456;
	this.text.parent = this;
	this.text.setTransform(15.8,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,19,474.2,50.1);


(lib.bullet5penultimomc111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,52.8,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Brindar retroalimentación de los resultados a los colaboradores evaluados.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 456;
	this.text.parent = this;
	this.text.setTransform(15.8,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,41,474.2,51);


(lib.bullet4ultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Contar con tablas de reemplazo para los diferentes niveles de la organización.", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 458;
	this.text.parent = this;
	this.text.setTransform(14.8,6);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,16.7,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,475.2,42);


(lib.bullet4penultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Elaborar los planes de desarrollo para cerrar las brechas de sucesiones.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 458;
	this.text.parent = this;
	this.text.setTransform(14.8,20);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,30.7,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18,475.2,51);


(lib.bullet2ultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,1.8,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Contar con una oferta sostenible de talento adecuado en el lugar y momento correctos.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 464;
	this.text.parent = this;
	this.text.setTransform(15.8,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,482.2,48.1);


(lib.bullet2penultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,12.4,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Calibrar las evaluaciones de los colaboradores en conjunto con los pares del área.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 445;
	this.text.parent = this;
	this.text.setTransform(15.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,463.2,56.1);


(lib.bullet1ultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,5.5,1,1,0,0,0,5.9,5.9);

	this.text = new cjs.Text("El mapeo de habilidades y fortalezas permite contar con un inventario de talento dentro de la organización.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 491;
	this.text.parent = this;
	this.text.setTransform(15.8,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,509.2,42);


(lib.bullet1penultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Evaluar el potencial de los colaboradores con base en sus habilidades, compromiso y aspiraciones.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(15.8,16);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,25.5,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,14,507.2,57.1);


(lib.bullet7ultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Anticipar las necesidades de desarrollo alineadas a la estrategia de la empresa.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 472;
	this.text.parent = this;
	this.text.setTransform(14,50);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,58.6,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,48,488.2,51);


(lib.bullet3ultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Identificación adecuada de los mejores candidatos internos para los puestos con los que cuenta la organización.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 463;
	this.text.parent = this;
	this.text.setTransform(15.8,8);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,18.2,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6,481.2,38.8);


(lib.bullet3penultimomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Planear la sucesión de las posiciones seleccionadas.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 463;
	this.text.parent = this;
	this.text.setTransform(15.8,28);

	this.instance = new lib.bullet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,38.2,1,1,0,0,0,5.9,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,26,481.2,38.8);


(lib.AS_LG_MOV_10ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape.setTransform(28.9,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_1.setTransform(28.9,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_2.setTransform(28.9,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.118)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_3.setTransform(28.9,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.059)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_4.setTransform(28.9,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_5.setTransform(28.9,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.039)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_6.setTransform(28.9,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_7.setTransform(28.9,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.114)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_8.setTransform(28.9,33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_9.setTransform(28.9,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.188)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_10.setTransform(28.9,33.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.224)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_11.setTransform(28.9,33.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.263)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_12.setTransform(28.9,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(12));

	// Layer 1
	this.instance = new lib.AS_LG_153ss("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,14.9,1,1,0,0,0,23.9,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_13.setTransform(28.8,32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_14.setTransform(28.9,33.1,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-7.7,81.8,81.8);


(lib.Actividad_checkbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*NOTA!!
		Para el correcto funcionamiento del template se requiere
		que los nombres de los checkbox esten en orden de izquierda a dedecha
		ejemplo: la primera fila seria 1,2,3 en ese orden y la segunda 4,5,6
		*/
		console.log("si llama los checkboxs");
		var root = this;
		//cuantso check son en total
		var cuantos = 5;
		//cuantos check por fila
		var cuantosFila = 5;
		//respuestas correctas
		var respuestas = [1];
		//variable que decide si se usaran mutliples opciones por fila
		var multiOp = true; //true, se admiten multiples opciones por fila
		//activar las funciones de overMouse
		stage.enableMouseOver();
		//root.validar.alpha = 0;
		root.retros_mc4.visible=false;
		root.btn_validar_mc4.visible=false;
		for (var i = 1; i <= cuantos; i++) {
			root["c" + i].sel = false;
			root["c" + i].n = i;
			root["c" + i].cursor = "pointer";
		
			if (multiOp) {
				root["c" + i].on("click", function (event) {
					console.log("se admiten multiples checks");
					///switch para el cambio en la seleccion
					if (this.sel) {
						this.gotoAndStop(0);
						this.sel = false;
					} else {
						this.gotoAndStop(1);
						this.sel = true;
					}
					checa();
				});
			} else {
				root["c" + i].on("click", function (event) {
					console.log("No se admiten multiples checks");
					var posicion = this.n;
					var seleccionado = this.n;
					//while para saber en que posicionse encuentra el check
					while (posicion > cuantosFila) {
						posicion -= cuantosFila;
					}
					console.log(posicion);
					var margenIzq = 0;
					var margenDer = 0;
					//cual es el margen izquierdo
					if (posicion > 1) {
						margenIzq = posicion - 1;
						console.log("margenIzq: " + margenIzq);
					}
					//cual es el margen derecho
					if (posicion < cuantosFila) {
						margenDer = cuantosFila - posicion;
						console.log("margenDer: " + margenDer);
					}
					this.gotoAndStop(1);
					this.sel = true;
					///////////////////////////
					for (var i = 1; i <= margenDer; i++) {
						root["c" + (seleccionado + i)].gotoAndStop(0);
						root["c" + (seleccionado + i)].sel = false;
						console.log("derecha " + i);
					}
					//////////////////////////
					for (var j = 1; j <= margenIzq; j++) {
						root["c" + (seleccionado - j)].gotoAndStop(0);
						root["c" + (seleccionado - j)].sel = false;
						console.log("izquierda " + j);
					}
					checa();
				});
		
			}
		}
		
		//funcion para checar cuantos estan activos
		function checa() {
			var cuantosSelect = 0;
			for (var j = 1; j <= cuantos; j++) {
				if (root["c" + j].sel) {
					cuantosSelect++;
				}
			}
			if (cuantosSelect >= respuestas.length) {
				root.btn_validar_mc4.visible = true;
			}
		}
		
		root.btn_validar_mc4.on("click",function(c){
			root.retros_mc4.visible=true;
			parent.habilitarSiguiente();
			});
		/*
		//Funcion que valida si las respuestas estan correctas
		root.validar.on("click", function (event) {
			console.log("valida");
			var bien = true;
			for (var i = 1; i <= cuantos; i++) {
				if (root["c" + i].sel) {
					console.log("boton" + i + " seleccionado");
					if (respuestas.indexOf(root["c" + i].n) >= 0) {
						console.log("bien");
					} else {
						console.log("mal");
						bien = false;
					}
				}
			}
			if (bien) {
				console.log("Actividad correcta");
				deshabilitarbtn();
				parent.llamarRetros("retrobien");
				try {
					console.log("Termino la actividad");
					_root.siguiente_verde();
					_root.final_tema();
				} catch {
					console.log("no hay comunicacion con start.js");
				}
		
			} else {
				deshabilitarElementos();
		
				//habilita todo despies de la reproduccion de la retro
				var tiempo = (root.retro.timeline.duration / 2) / 24;
				tiempo = tiempo * 1000;
				console.log("el tiempo es: " + tiempo);
				var my_timedProcess = setTimeout(habilitarElementos, tiempo);
		
				console.log("Actividad incorrecta");
				parent.llamarRetros("retromal");
			}
		});
		*/
		function deshabilitarbtn() {
			for (var i = 1; i <= cuantos; i++) {
				root["c" + i].removeAllEventListeners();
				root["c" + i].cursor = "";
			}
		}
		
		function deshabilitarElementos() {
			for (var i = 1; i <= cuantos; i++) {
				root["c" + i].cursor = "";
				root["c" + i].mouseEnabled = false;
			}
		}
		
		function habilitarElementos() {
			for (var i = 1; i <= cuantos; i++) {
				root["c" + i].cursor = "pointer";
				root["c" + i].mouseEnabled = true;
			}
		}
		console.log("termina checkboxs");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// lo que va en la retro no la encontre
	this.retros_mc4 = new lib.mc4r_etro();
	this.retros_mc4.parent = this;
	this.retros_mc4.setTransform(165.3,133.8,1,1,0,0,0,250.3,142.8);

	this.timeline.addTween(cjs.Tween.get(this.retros_mc4).wait(1));

	// Texto
	this.btn_validar_mc4 = new lib.btn_Validar();
	this.btn_validar_mc4.parent = this;
	this.btn_validar_mc4.setTransform(151,254.6,1,1,0,0,0,108.8,17.3);
	new cjs.ButtonHelper(this.btn_validar_mc4, 0, 1, 2, false, new lib.btn_Validar(), 3);

	this.t5 = new cjs.Text("Considerar características del puesto/función.", "9px 'Arial'", "#333333");
	this.t5.name = "t5";
	this.t5.lineHeight = 12;
	this.t5.lineWidth = 227;
	this.t5.parent = this;
	this.t5.setTransform(-31.4,204.3,2.004,1.95);

	this.t4 = new cjs.Text("Evaluar disposición y actitud al cambio.", "9px 'Arial'", "#333333");
	this.t4.name = "t4";
	this.t4.lineHeight = 12;
	this.t4.lineWidth = 224;
	this.t4.parent = this;
	this.t4.setTransform(-31.4,161.5,2.004,1.95);

	this.t3 = new cjs.Text("Analizar sus conocimientos y apego a la cultura.", "9px 'Arial'", "#333333");
	this.t3.name = "t3";
	this.t3.lineHeight = 12;
	this.t3.lineWidth = 225;
	this.t3.parent = this;
	this.t3.setTransform(-31.4,121.3,2.004,1.95);

	this.t2 = new cjs.Text("Revisar historial de desempeño.", "9px 'Arial'", "#333333");
	this.t2.name = "t2";
	this.t2.lineHeight = 12;
	this.t2.lineWidth = 222;
	this.t2.parent = this;
	this.t2.setTransform(-31.4,82.8,2.004,1.95);

	this.t1 = new cjs.Text("Entrevistar al jefe y sus colaboradores.", "9px 'Arial'", "#333333");
	this.t1.name = "t1";
	this.t1.lineHeight = 12;
	this.t1.lineWidth = 221;
	this.t1.parent = this;
	this.t1.setTransform(-31.4,41.4,2.004,1.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5},{t:this.btn_validar_mc4}]}).wait(1));

	// Graficos
	this.c5 = new lib.ch2();
	this.c5.parent = this;
	this.c5.setTransform(-59.8,213.2,1.008,1.008,0,0,0,18.6,18.6);

	this.c4 = new lib.ch2();
	this.c4.parent = this;
	this.c4.setTransform(-59.8,173.1,1.008,1.008,0,0,0,18.6,18.6);

	this.c3 = new lib.ch2();
	this.c3.parent = this;
	this.c3.setTransform(-59.8,133,1.008,1.008,0,0,0,18.6,18.6);

	this.c2 = new lib.ch2();
	this.c2.parent = this;
	this.c2.setTransform(-59.8,92.9,1.008,1.008,0,0,0,18.6,18.6);

	this.c1 = new lib.ch2();
	this.c1.parent = this;
	this.c1.setTransform(-78.5,34.1,1.008,1.008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c1},{t:this.c2},{t:this.c3},{t:this.c4},{t:this.c5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Actividad_checkbox, new cjs.Rectangle(-85,-9,512.1,285.8), null);


(lib.titulomodulot1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_86 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(86).call(this.frame_86).wait(1));

	// Capa_3
	this.instance = new lib.mc_numMod01();
	this.instance.parent = this;
	this.instance.setTransform(219.5,213.6,1,1,0,0,0,26.6,32.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:8.6,scaleY:8.6,x:227.3,y:220.1},20).to({scaleX:7.71,scaleY:7.71,y:220},10).to({scaleX:7.63,scaleY:7.63,rotation:360,x:648.6,y:219.9},15).to({regY:32.7,scaleX:1,scaleY:1,x:542.6,y:152},14,cjs.Ease.get(1)).to({x:692.6},11,cjs.Ease.get(1)).wait(13));

	// Capa_5
	this.instance_1 = new lib.tapabca("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(647.8,152.3,1,1,0,0,0,106.5,44.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({regX:106.6,scaleX:0.44,x:767.8},11,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// Capa_2
	this.instance_2 = new lib.txt_modulo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(567.9,155.3,1,1,0,0,0,87.3,28.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).wait(24));

	// Capa_7
	this.instance_3 = new lib.Tema("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1026.7,242.6,1,1,0,0,0,132.1,45.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({x:614.7},15,cjs.Ease.get(1)).wait(1));

	// Capa_1
	this.instance_4 = new lib.mc_imagenmodulo("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(225.5,217.4,1,1,0,0,0,225.5,217.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,0.2,437.1,435.9);


(lib.tiprecuerdamod3mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// icono
	this.instance = new lib.AS_LG_MOV_10ss();
	this.instance.parent = this;
	this.instance.setTransform(-154.4,11.9,1,1,0,0,0,30,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-243.7,y:-57.7},26,cjs.Ease.get(1)).wait(3));

	// Layer 1
	this.instance_1 = new lib.info01ss();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-42);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-25.3,y:0,alpha:1},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.4,-68.6,257.8,145.1);


(lib.rh1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M03_TMR_MODERADOR();
	this.instance.parent = this;
	this.instance.setTransform(76.1,123.1,0.494,0.494,0,0,0,198.1,183.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,32.2,195.8,181.7);


(lib.personajes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MUJER1();
	this.instance.parent = this;
	this.instance.setTransform(115.9,132.2,0.958,0.958,0,0,0,67.7,137.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323436").s().p("ACdAzQgBgMADgUQAEgnAMgkQAKgbAUgjQAMgXgDgIQgHgNgJgEQgMgGgpgDQgwgDhbAHQhiAGgyAMQgvAMgWgDQgPgBgBgIQgBgEAKgBIAZgCIBsgOIAWgDQAZgEAUgBQCggFAOACQAiACAJADQAgAKgDAfQgBAHgHAPQgRAdgRAsQgKAYgFBoQgDA0gBAwIgNACg");
	this.shape.setTransform(55.3,184.1,1.338,1.338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7BBC1").s().p("ACUC/IgEAAQgDgEAAgEIABgHIAGh0QgBgMABgTQADgjANgkQAQgxANgUIAIgOQADgEgBgEQAAgGgEgIQgHgJgMgCIgvgCQg4gDhOADQhcAFguALQhEAQgRgLQgEgCgCgHQgBgEADgDQAEgFAUgCIALgCIBtgOIAWgEQAZgDAUAAIAcgBQCKgHAMAEIAIABQAWACAQAJQAYANABAYIgHAaIgNAZQgOAcgJAWQgJAXgHBkIgFBiQAAAFgEABIgOADgACdA3IgCB6IABAAQAGirANgsQgRA0gBApgACXirQAkABANAHQAKAEAFAPIACAEQADAHgBAHIABgCQACgagRgMQgMgHgagDIgJgBQgLgDiHAGIgdABQgTABgZADIgVADIgBAAIiFASQANAGA9gOQAvgMBlgDIBPgCQAlAAAdACg");
	this.shape_1.setTransform(55.7,183.6,1.338,1.338);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#10121D").s().p("AhKAEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAzgGA6gBIAAAAIAmACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQhbAAg2AIQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_2.setTransform(79.6,170.3,1.338,1.338);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323436").s().p("AgPAWQAEgKALgMQAVgcgKgEIADAAQAEABgBAFQAAAJgRAVQgOAZgBAEQgDgDADgIg");
	this.shape_3.setTransform(43.9,192.8,1.338,1.338);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#252931").s().p("AAAACIABgJIAAAPg");
	this.shape_4.setTransform(74.7,207.8,1.338,1.338);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#626666").s().p("AgQCGQgTggAAghQAAgiAJg+IAKg+QADgWACgGQAFgYAKgDQASgGAOgHIgYBLQgYBPgDAaQgEAtAJA8IAMAeQgJgJgJgPg");
	this.shape_5.setTransform(28,184.9,1.338,1.338);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626666").s().p("AAKBXQgLgEgFgOQgEgKgFgfIgGgwIgMhDIBDCqQgHAGgJAAIgIgCg");
	this.shape_6.setTransform(27.5,151.3,1.338,1.338);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#626666").s().p("AjSHbQgHgEgQgYQgKgPAVhzQAVhzgKgRQgQgbhEipQhFisgFgdQgBgGgBiIQgBhpgMgRIAQAQQATASAJAAQAFAAAFgIQAEgGAJAIQAMAJAEATQAEAQAAAbQAABBADAnQAHBVATApQAgBAAmBfQAvB2AFAnQADAcgLA1QgJArgJAWQgGAQAAAgQAAAfAFAAQADAACNgiQCcggBaAOQBbAOAtAXQAWAMAFAJIAEAVQADAYgEAXQABgMgGgMQgRgghBgHQgggFgUgBQgjgCgmAIQk2BAgiAGQgPACgJAAQgJAAgEgCg");
	this.shape_7.setTransform(69.1,135.7,1.338,1.338);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323436").s().p("Ag5BSQgCgOgVhCQgQgxACggQADgcgGhXQgFhUACgVQADgfADgFQACgEAKAAQAQAAAFAiQAFAcgCBiQgCBYAIAVQAaBGAgBeQAQAxBQC1QggAEgUAGIgOAGQhUjOgJg0g");
	this.shape_8.setTransform(27.3,116.8,1.338,1.338);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323436").s().p("AjkC8QgtgCgTgKQgmgTgSg9QgThCAhhvIAkhiIA7gIQAKgBgEAZQgCATgOBJQgOBPACAeQADApAdAEQAYAEDDgpQDEgpANABQAfADAkACIAmAAQAoAIAIAhQALAsgXAdQgaAhgzgPQgwgOiXAQQh8AOgyAMQgmAJgVAEQgbAEgXAAIgJAAg");
	this.shape_9.setTransform(72.8,187.9,1.338,1.338);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454748").s().p("AgmAKIAPgGQAQgFAOgDIAggFIgsARIgXACg");
	this.shape_10.setTransform(28.5,234.9,1.338,1.338);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#717677").s().p("AABADIgEgDQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgCQADAAAEAHg");
	this.shape_11.setTransform(67.8,225.8,1.338,1.338);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#717677").s().p("AAAgCIgJAAIASgJIgBADQAAAEABACQACACgDAMQgEgNgEgBg");
	this.shape_12.setTransform(65.9,228.4,1.338,1.338);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#717677").s().p("AgIAfIAGgbQACgSAAgFQgBgBgHgBIgHAAIAXgMIAJAEIgCAAQgDABgDAFQgEAFAAAaIAAAag");
	this.shape_13.setTransform(57.6,231.6,1.338,1.338);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#717677").s().p("AgZAGIgLgHIAAgHIANAIQAQAGAMgBQAVgDAJgJIgBgDIADAFIgBAGQgGAHgVACIgKABQgNAAgLgFg");
	this.shape_14.setTransform(62.8,226.7,1.338,1.338);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D4659").s().p("AAjBHQgBgFg1hqQgyhkAFACQAKADAagBIBTDPQAIAVACAuIgZABQABg0gGgQg");
	this.shape_15.setTransform(70,246.2,1.338,1.338);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9B9D9E").s().p("AAAAyIgShkQAPANALAtQAHAXADAUg");
	this.shape_16.setTransform(78.2,257.9,1.338,1.338);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9B9D9E").s().p("AApBtQgCgigLgUQgFgJgYg4QgUgvgJgIIgkgKQgCAAACg6IAOgGIAPADQAEgBgEAEIAUAWQATAbAEAZQAEAXAaA1QAaA4ACAHQAFAXgBAkIgaACQABgOgCgSg");
	this.shape_17.setTransform(67,246.3,1.338,1.338);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#252931").s().p("AixBcIAFgTQAIgXAOgQQASgVB7gvQB9gxA+gIIAAA3IgwADQg2AEgfAHIgsAMIgxAQQgyARgPAGQgYAKgLAUQgPAeADADg");
	this.shape_18.setTransform(33.7,240.8,1.338,1.338);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#252931").s().p("AC3BUQAEgLgQgbQgGgKgdgHIhHgSIgygPIgsgKQgfgIhBgBIg7AAIgSg7QA/AHCcAvQCcAwARARQANAOAAASQAAAIgDAHg");
	this.shape_19.setTransform(93.3,239,1.338,1.338);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9B9D9E").s().p("AjCBiQABgLAFgOQAIgcAPgNQAdgYB9gwQCBgzA9gHIAQAFQhzAzgzAMQgZAGgNANQgRANgdAJQg5ATgLAEQgZAKgHAMQgRAbgCAQg");
	this.shape_20.setTransform(33.3,239.8,1.338,1.338);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9B9D9E").s().p("ACrAuQgHgLgbgKIhHgWIgzgPIgsgLQgggHhTgZIhOgXIAYgLQBCAICbAwQCeAxAZAWQAPANACAVQABAKgDAIIghAAQgBgRgQgbg");
	this.shape_21.setTransform(94.4,238.2,1.338,1.338);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B5B8").s().p("AgCBDIAAiFIAFAAIAACFg");
	this.shape_22.setTransform(58.2,217.5,1.338,1.338);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D4659").s().p("AgNBGIAAiLIAbAAIAACLg");
	this.shape_23.setTransform(63.2,218.3,1.338,1.338);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#252931").s().p("AgJBGQgQgCgHgIIgDgIIAAh5IBGAAIAACAQgOALgVAAIgJAAg");
	this.shape_24.setTransform(62.6,218.3,1.338,1.338);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#454748").s().p("AgLAhQgMgJgEgPQgFgPAFgNQAFgOAMgDQALgEALAJQAMAIAEAQQAFAOgFAOQgFANgMADIgHABQgHAAgIgFg");
	this.shape_25.setTransform(121.6,258.7,1.338,1.338);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#454748").s().p("AgTAhQgLgMgBgSQgDgQAJgOQAIgNANgCQANgCALAMQALAMABARQADASgJANQgIANgNACIgEAAQgKAAgKgKg");
	this.shape_26.setTransform(76,273.3,1.338,1.338);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#040D1C").s().p("AgVAoQgOgEgGgXQgCgIABgXIABgWIAogBIAAAIIAQACQASAEAGANQAHAOgEAOQgDAOgNAHQgLAGgPABIgHAAQgIAAgGgCg");
	this.shape_27.setTransform(124.2,255.8,1.338,1.338);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#040D1C").s().p("AgWArQgQgEgGgZQgCgJABgZIABgYIA1AAIAAAIIAOACQAPAFAEAOQAGARgDAOQgEAPgMAGQgMAHgRABIgGAAQgJAAgHgCg");
	this.shape_28.setTransform(79.2,271.1,1.338,1.338);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#454748").s().p("AgTAbQgJgMAAgPQAAgPAJgLQAIgLALAAQAMAAAIALQAJALAAAPQAAAQgJALQgIALgMAAQgLAAgIgLg");
	this.shape_29.setTransform(9.1,259.6,1.338,1.338);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#454748").s().p("AgFAVQgIgFgEgJQgDgJACgJQADgIAHgDQAHgDAHAFQAHAFAEAJQAEAJgDAIQgCAJgHADIgGABQgDAAgFgDg");
	this.shape_30.setTransform(19.9,240.7,1.338,1.338);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#454748").s().p("AgIAgQgMgHgGgPQgFgNAEgOQAEgNALgEQALgFAKAIQAMAIAGAOQAFANgDAOQgEANgLAEQgEACgFAAQgGAAgHgFg");
	this.shape_31.setTransform(84.1,240.6,1.338,1.338);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#040D1C").s().p("AgUAoQgPgFgFgWQgCgIABgXIABgXIAxAAIAAAHIANACQAOAFAEANQAFAPgDANQgDAOgMAGQgLAHgQABIgFAAQgJAAgGgCg");
	this.shape_32.setTransform(86,238.1,1.338,1.338);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#040D1C").s().p("AgRAXQgPgIAHgYQADgIAJgDIAIgCIAAgFIAgABIABAOQABAPgCAGQgDAOgKADQgGACgGAAQgJAAgKgFg");
	this.shape_33.setTransform(21.1,240,1.338,1.338);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#040D1C").s().p("AAAAkQgNgBgJgFQgLgFgCgMQgDgMAFgNQADgLAMgEQAGgCAGAAIAAgHIAqABIABATQAAAUgBAIQgEATgNAEQgFACgIAAIgGgBg");
	this.shape_34.setTransform(8,257.5,1.338,1.338);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#717677").s().p("AhyApQgEgDgLABIgJABQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgEAIgGQAGgFCEggICFggIAAAHIiaArIgZAKQgHACgXAEQgXAEgGADQgFADgFAFQAAABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_35.setTransform(39.1,231.1,1.338,1.338);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#454748").s().p("AgLAgQgMgIgEgQQgFgOAFgOQAFgNAMgEQAKgDAMAJQAMAIAEAQQAFAOgFAOQgFANgMAEIgHABQgHAAgIgHg");
	this.shape_36.setTransform(127.5,256.2,1.338,1.338);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#454748").s().p("AgTAhQgKgMgCgRQgDgSAJgNQAIgNAOgCQAMgBALALQALAMACASQABAQgIAOQgIANgNACIgEAAQgKAAgKgKg");
	this.shape_37.setTransform(82.8,271.4,1.338,1.338);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#454748").s().p("AgTAbQgJgMAAgPQAAgPAJgLQAIgLALAAQAMAAAIALQAJALAAAPQAAAQgJALQgIALgMAAQgLAAgIgLg");
	this.shape_38.setTransform(3.8,258.3,1.338,1.338);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#454748").s().p("AgIAgQgMgHgFgPQgGgNAEgOQADgNALgEQAMgEALAHQALAHAGAPQAFANgDAOQgEANgMAEIgIACQgGAAgHgFg");
	this.shape_39.setTransform(91.3,237.8,1.338,1.338);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#323436").s().p("ACdA0QgBgNADgUQAEgnAMgkQAKgbAUgjQAMgXgDgIQgHgNgJgEQgNgGgogCQgwgDhbAGQhiAHgyAMQgvALgWgCQgPgCgBgIQgBgEAKgBIAZgCICCgRQAZgEAUAAQChgFANABQAnAEAEABQAgAKgDAfQgBAGgHARQgQAbgSAtQgKAYgFBoQgDA0gBAwIgNADg");
	this.shape_40.setTransform(55.3,174.2,1.338,1.338);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B7BBC1").s().p("ACQC+QgDgCAAgFIABgHIAGh0QgBgMABgTQADgkANgkQAQguANgWIAIgOQADgEgBgFQAAgGgEgGQgHgKgMgCIgvgCQg2gEhQAEQhbAEgvAMQhEAQgRgKQgFgEgBgGQgBgDADgEQAEgFAUgDIB4gPIAWgEQAZgDAUAAIAcgCQCJgGANADIAIABQAWADAQAJQAYANABAXIgHAbIgNAYQgOAdgJAWQgJAXgHBkIgFBiQAAAFgEABIgOADIgCABIgEgCgACdA2IgCB7IABAAQAGirANgrQgRAzgBAogACXirQAjACAOAGQAKAFAFANIACAGQAEAFgCAIIABgCQACgagRgLQgMgIgagDIgJgCQgLgCiHAGIgdABQgTABgZADIgVADQAlgEAzgCIBKgBQAoAAAfACgAi/iYIgZAEQAMAHA+gPIAggGIhRAKg");
	this.shape_41.setTransform(55.7,173.7,1.338,1.338);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCD1D0").s().p("AjyByQAkgUBLgjQBWgpAMABQALAAAOgRQAaghAUgSQAvgsBAhCIAVgFQAXgDARADQA2AMgjBSQhvBbg7AiQgdAbgLAHQgPAKhZAbIiHAog");
	this.shape_42.setTransform(420.6,111.6,1.338,1.338);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E2BD90").s().p("AhKA0IgJgLQgDgEgDgNQgCgRAEgNIAFgLQAIgNALgHIAHgEQAIgFAHgCQAIgDAXgBQAXgBATACQALABAPAGQAMAFAHgCIAOABIgBAgQgMgBgLAFIgLAGQgFAEgJADQgSAHgVgBQgSgBgQAGQgRAHgFANQgEAJgHADIgGABQgCAAgCgBg");
	this.shape_43.setTransform(375.2,132.9,1.338,1.338);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E2BD90").s().p("AgHgTQAHgMAGABQAEAAACADQADAagNASIgOAPg");
	this.shape_44.setTransform(438.9,50.5,1.338,1.338);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E6A37E").s().p("AgOAGIgCgGQAAgBANgCIAUgDQgKAKgKADIgGAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_45.setTransform(415.3,60.9,1.338,1.338);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E19D7A").s().p("AgQABQgCgEABgCIAOAAQAOABAHAEIghAGIgBgFg");
	this.shape_46.setTransform(415.1,60,1.338,1.338);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3F3231").s().p("AhJAYQgHgBgFgEQgIgGABgJIAAgCIgGgBIgBgGIABgJQAAgDAFgBIAEgBIgCABQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAABQABAAAAAAQAAABABAAQAAAAABAAQAFgLAQAAIA4AAQAOADADAHIBgAIIgBAMIhdgHIAAADQgBANgPAHIgCABgAhTgLIAAASIAAAEQADAEAFADIBAAAQAHgDAAgIIAAgSQgBgFgHAAIhAAAQgIADABACg");
	this.shape_47.setTransform(425.4,46.9,1.338,1.338);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3F3231").s().p("AAbAAQgJgHgLAEQggAKgIgJIAFgBQAHgDAPgDIASAAQAUADACAQQgCgFgFgFg");
	this.shape_48.setTransform(418.6,43.6,1.338,1.338);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3F3231").s().p("AgIAAQAAgIAIAAQAJAAABAIQgBAJgJAAQgIAAAAgJg");
	this.shape_49.setTransform(417.2,46.7,1.338,1.338);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E8AE91").s().p("AgFALQgUgEgGgEIgCgBIABAAQAAgCAGgEQAKgGAPAAIALABQANADAKAFIABABIgBAAQgOALgTAAgAgdACQAHAEARADQARACASgLQgJgFgNgCIgJgBQgUAAgIAKg");
	this.shape_50.setTransform(418.7,46.7,1.338,1.338);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAHIgLgEQADgIAOgDIANgBQAMgCAVALQgLAKgWAAIgCAAQgGAAgLgDg");
	this.shape_51.setTransform(418.7,46.6,1.338,1.338);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3F3231").s().p("AgZgMIAPAKQASAKASACIgtADg");
	this.shape_52.setTransform(433.6,23.1,1.338,1.338);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3F3231").s().p("AgagMIAQAKQASAKASACIgtADg");
	this.shape_53.setTransform(426,22.2,1.338,1.338);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3F3231").s().p("AgZgMIAPAKQASAKASACIgtADg");
	this.shape_54.setTransform(419.2,22.8,1.338,1.338);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3F3231").s().p("AA1AWIgmgRQgcgUgfgTQg/gogMAFQgLgPgKgRQgVgiAAgJQAAgHAKADQAWAEAVgBIBfgJQBCgFAWAJQAkAOAXAhQAhAugGBDQgFBAgpAwIgoAjQgRhvgFgYg");
	this.shape_55.setTransform(431.1,44,1.338,1.338);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A9B1BA").s().p("Ag+AUIB4g9IAKArQgDAMhCAPIhCANg");
	this.shape_56.setTransform(432.9,74.8,1.338,1.338);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CCD1D0").s().p("AgGFMIiEgIQgOligHgwQgFgeAshcIAthXICSgsIATAOQAVATAQAbQAyBYgZCKQg1EgASBDQAGAWhrAAIgWAAg");
	this.shape_57.setTransform(432.4,119,1.338,1.338);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E2BD90").s().p("AggCqQAHgegEgHQgFgJgaAGQgdAHgIAAQgQAAgKgNQgCgEACgKIACgNIgBgEIABAAIgFgLIgBgGQgEgHACgHIABgRQAAgBgGAAQgIgBgFgDQgFgEgBgGIABgFQAJgYAKgQIAIgNIABhZQAOg3A6gXQAcgLAZAAIAXABQAcABAXAKQBLAgADBfQADBfgkAsQgLANgNAHIgMAFQgPAkgHA1IhmAVIAIglg");
	this.shape_58.setTransform(430.2,50.7,1.338,1.338);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCD1D0").s().p("AjyBzQAlgVBKgjQBWgpAMABQALABAOgSQAaggAUgSQAvgtBAhCIAVgFQAXgDARAEQA2AMgjBRQhvBbg7AiQgdAbgLAHQgPAKhZAbIiHAog");
	this.shape_59.setTransform(410.6,100.7,1.338,1.338);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E2BD90").s().p("AhKA0IgJgLQgDgEgCgNQgDgRAEgNIAGgLQAIgNAKgHIAHgEQAIgFAHgCQAJgDAWgBQAXgBATACQALABAPAGQAMAFAIgCIANABIgBAgQgLgBgMAFIgLAGQgFAEgJADQgSAHgUgBQgTgBgQAGQgRAHgFANQgDAIgIAEIgGABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_60.setTransform(366,122.9,1.338,1.338);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000008").s().p("AidF1IhQoTQgBgIAAgMQABgZAKgVQAfhCBrgFQBqgEgDgjQAAgLgMgMIgLgLIDlgHIAKBUQAJBYAAAUQAAAOgYAXQgaAZgmATQhnAzhlgoIAkHTg");
	this.shape_61.setTransform(418.2,212.3,1.338,1.338);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1F2226").s().p("AhlFmIhJgKQgihlghh6QhDj0ABhuQABhuCogOQBWgIBoANQAegCAmgLIC9AZQhCBQgRASQgLALhMAqIhUAtQgJAGggAEQgbAEgbAAQgUAAg1gHIgxgHQA6DEAGAPQADAIAUBaQAWBcAQAaQAQAcgBARQgBAKgFAPQgBAFgVAAQgSAAghgEg");
	this.shape_62.setTransform(397.8,210.8,1.338,1.338);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#564437").s().p("Ah/BHQgDgBgCgOQgBgYAegRQAZgNA2giIAPgmICEAHIAKAeQACA6gHAHQgHAHg6gEIhkAkg");
	this.shape_63.setTransform(399.2,271.2,1.338,1.338);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#564437").s().p("Ah/BHQgEgBgBgOQgCgYAfgRQAZgNA2giIAOgmICEAHIALAeQACA6gIAHQgHAHg6gEIhjAkg");
	this.shape_64.setTransform(378.1,267.2,1.338,1.338);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#252931").s().p("AAAgHIABAJIgBAGg");
	this.shape_65.setTransform(423,203,1.338,1.338);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#717677").s().p("AAAAAQACgCACgBIAAADIgEADIgDABg");
	this.shape_66.setTransform(429.9,221,1.338,1.338);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#AEB1B1").s().p("AgWACIAugDQgKACgSABg");
	this.shape_67.setTransform(180.3,153.6,1.338,1.338);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ag7ABIAMgDQAPgFANAAQBPgEAAASIhzACg");
	this.shape_68.setTransform(175.2,153.8,1.338,1.338);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#AEB1B1").s().p("AgoAHQgRgDAAgEQAAgDARgDQARgDAXAAQAYAAARADQARADAAADQAAAEgRADQgRADgYAAQgXAAgRgDg");
	this.shape_69.setTransform(175.5,153.6,1.338,1.338);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ag7gGIBzgCIAEAIQgTAHgVABIgdABQgyAAAAgPg");
	this.shape_70.setTransform(324.9,153.6,1.338,1.338);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgoAHQgRgDAAgEQAAgDARgDQARgDAXAAQAYAAARADQARADAAADQAAAEgRADQgRADgYAAQgXAAgRgDg");
	this.shape_71.setTransform(324.6,152.3,1.338,1.338);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AEB1B1").s().p("AgoAHQgRgDAAgEQAAgDARgDQARgDAXAAQAYAAARADQARADAAADQAAAEgRADQgRADgYAAQgXAAgRgDg");
	this.shape_72.setTransform(324.6,153.7,1.338,1.338);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_73.setTransform(155.2,147.9,1.338,1.338);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AEB1B1").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_74.setTransform(155.2,149.6,1.338,1.338);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_75.setTransform(334.4,147.9,1.338,1.338);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AEB1B1").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_76.setTransform(334.4,149.6,1.338,1.338);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#585B5C").s().p("AiUDuQgOgDgEgCIgBgDQECgDAhgFQAVgDAIgUIAEgTIh4l9QgFgRgIgGIgHgCIACgMIAGADQAOAIAFAQIBzFkQAKAigCAOQgBAIgHAKQgHANgOAGIiHAFQhfAEgkAAIgUgBg");
	this.shape_77.setTransform(190.5,120.5,1.338,1.338);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#585B5C").s().p("AhHFkICIrGIAHgBIiFLHg");
	this.shape_78.setTransform(180.4,86.9,1.338,1.338);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhcFeICPrGIAqAKIiGLHg");
	this.shape_79.setTransform(183,88,1.338,1.338);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AEB1B1").s().p("ABBljIAFB5QAACNgYBgQgYBhgwCJQgYBFgTAyg");
	this.shape_80.setTransform(186.8,88.7,1.338,1.338);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#585B5C").s().p("AiJDmQgPgGgGgNIgIgSQgCgNAKgjQAQg2BikuQAGgQAOgIIAFgDIADAMQgDAAgEACQgIAGgFARIh5F9IAEATQAJAUAVADQAhAFEBADQAEAEgWAEIgZABQg9AAjIgJg");
	this.shape_81.setTransform(288.9,120.5,1.338,1.338);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#585B5C").s().p("AA/FkIiGrHIAHABICILGg");
	this.shape_82.setTransform(299,86.9,1.338,1.338);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhcleIAqgKICPLGIg0ALg");
	this.shape_83.setTransform(296.4,88,1.338,1.338);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#AEB1B1").s().p("AAbDtQgwiJgYhhQgYhgAAiNIAGh5ICFLHQgTgygYhFg");
	this.shape_84.setTransform(292.6,88.7,1.338,1.338);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B7BBC1").s().p("AgEh9IAVDbIghAgg");
	this.shape_85.setTransform(196.9,132.3,1.338,1.338);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4E5153").s().p("AgNB/QgIAAgGgGQgGgFAAgJIAAjZQAAgGAEgFQAFgEAGgBIAgAAQAIAAAGAFQAGAGAAAIIAADYQAAARgFABg");
	this.shape_86.setTransform(227.4,130.6,1.338,1.338);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4E5153").s().p("AgKALQgEgFAAgGQAAgGAEgEQAEgEAGAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_87.setTransform(251.8,146.4,1.338,1.338);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_88.setTransform(252,141.6,1.338,1.338);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_89.setTransform(252,137.2,1.338,1.338);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4E5153").s().p("AgLAKQgIABAAgJIAAgDQAAgJAIABIAWAAQAEgBACADQADACAAAEIAAADQAAAEgDACQgCADgEgBg");
	this.shape_90.setTransform(252,132.8,1.338,1.338);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4E5153").s().p("AgLALQgIAAAAgIIAAgEQAAgEADgCQACgDADAAIAWAAQAEAAACADQADACAAAEIAAAEQAAADgDACQgCADgEAAg");
	this.shape_91.setTransform(252,128.7,1.338,1.338);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgCgCgBgEIAAgEQAAgIAIAAIAXAAQAHAAAAAIIAAAEQAAAEgCACQgCADgDAAg");
	this.shape_92.setTransform(245.4,141.6,1.338,1.338);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgCgCgBgEIAAgEQAAgIAIAAIAXAAQAHAAAAAIIAAAEQAAAEgCACQgCADgDAAg");
	this.shape_93.setTransform(245.4,137.2,1.338,1.338);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4E5153").s().p("AgLAKQgIABAAgJIAAgDQAAgJAIABIAXAAQAHgBAAAJIAAADQAAAJgHgBg");
	this.shape_94.setTransform(245.4,132.8,1.338,1.338);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4E5153").s().p("AgLALQgIAAAAgIIAAgEQABgEACgCQACgDADAAIAXAAQADAAACADQACACAAAEIAAAEQAAAIgHAAg");
	this.shape_95.setTransform(245.4,128.7,1.338,1.338);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_96.setTransform(238.9,141.6,1.338,1.338);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_97.setTransform(238.9,137.2,1.338,1.338);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4E5153").s().p("AgLAKQgIABAAgJIAAgDQAAgJAIABIAWAAQAEgBACADQADACAAAEIAAADQAAAEgDACQgCADgEgBg");
	this.shape_98.setTransform(238.9,132.8,1.338,1.338);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#4E5153").s().p("AgLALQgIAAAAgIIAAgEQAAgEADgCQACgDADAAIAWAAQAEAAACADQADACAAAEIAAAEQAAADgDACQgCADgEAAg");
	this.shape_99.setTransform(238.9,128.7,1.338,1.338);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4E5153").s().p("Ag4AWQgHAAgFgFQgEgEAAgHIAAgLQAAgHAEgEQAFgFAHAAIBxAAQAHAAAFAFQAEAEAAAHIAAALQAAAHgEAEQgFAFgHAAg");
	this.shape_100.setTransform(245.9,123.4,1.338,1.338);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#24272A").s().p("AioCCIgCgJIAAivIAAggQgBgiADgHQADgGALgCIAKAAICAAAQCEAAAWgCQAWgBAHAMQAEAGgBAGQACDKgCAaQgBARgJAFIgKACIkrAAIgCAAQgNAAgEgIg");
	this.shape_101.setTransform(239.6,130.8,1.338,1.338);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C4B49B").s().p("ALUGlIkZsQIt1AAIkZMQIguAAICHsQIAAg5IT2AAIAAA5ICGMQg");
	this.shape_102.setTransform(247.4,212.1,1.338,1.338);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#DED0BE").s().p("AtzAnIAAhOIbnAAIAABOg");
	this.shape_103.setTransform(250.6,150.5,1.338,1.338);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E62F33").s().p("AgwAmQgEgwAIgfIARADQAUACASgCQAdgBAFgCIADAaQADAdgCAYQgcAEgYAAQgYAAgVgEg");
	this.shape_104.setTransform(321.2,120.5,1.338,1.338);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2A1213").s().p("AghCaQgMgEgBgVIAAgXQACgGABgHQAEgPgGgZQgHgmAIhPQABgGAHgNIANgYQAIgOgCgZIgEAAIAAgHIArAAIAAAHIgFAAIABAOQABAQAFAJIAMAYQAJANAAAGQAIBPgIAmQgEAZACAPQACAHACAGIAAAXQgCAVgLAEg");
	this.shape_105.setTransform(321.1,123.6,1.338,1.338);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E62F33").s().p("AgWAKIAAgQIABgBQABgBAGAAIAgAAIADAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAPg");
	this.shape_106.setTransform(321.2,101.4,1.338,1.338);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#323436").s().p("AimC4QgEi+gPgmQgRgqgRgeQgHgNgBgKQgEgeAggKQAGgCAmgEQANgBChAFQAgABAiAGIBtAOIAZACQAKABgBAEQgEAUhRgTQgygMhjgHQhagGgxADQgoACgNAGQgJAEgGANQgEAIANAXQAUAkAJAaQANAkAEAnQACAUAAANIACCHg");
	this.shape_107.setTransform(442.5,179.4,1.338,1.338);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B7BBC1").s().p("AiVC/IgOgDQgEgBAAgFQgGi4gOglQgJgWgPgdIgNgYIgHgbQACgXAXgNQAQgJAWgDIAIgBQAOgDCIAGIAdACQAfABAkAGIB3APQAVADADAFQADADgBAEQAAAGgGAEQgQAKhEgQQgwgMhbgEQhPgEg3AEIguACQgNACgHAKQgCACgCAKQAAAHAKAQQAMATARAxQANAkADAkQABATgBANIAGBzIABAHQAAAFgDACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAgAigBLQAEA8ABAqIACABIgDh7QgBgpgRgzQAIAcAGBUgAidiyIgJACQgaADgMAIQgRALACAaIACACQgCgHADgGIACgGQAFgNALgFQANgGAjgCQA5gEBYADQAyACAlAEQghgGgfgBIgdgBQhfgEghAAIgSAAgACQicQA9APAMgHIgOgCIgLgCIhNgKIAdAGg");
	this.shape_108.setTransform(442,178.8,1.338,1.338);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#323436").s().p("AABAFIgLgRQgGgJAAgEQgBgGAEgBIADAAQgLAFAWAbQALAMADAKQADAJgCACQAAgEgPgYg");
	this.shape_109.setTransform(453.8,187.9,1.338,1.338);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#626666").s().p("AALCAQAJg8gEgsQgDgagYhRIgYhKIAJAEIAXAJQAKAEAGAXQADAMABAQIAKA+QAJA+AAAiQAAAhgTAgIgSAYg");
	this.shape_110.setTransform(469.6,180.2,1.338,1.338);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#626666").s().p("AghBTIBDiqIgMBDQgKBNgFANQgFANgLAEIgIACQgJAAgHgGg");
	this.shape_111.setTransform(470.2,146.5,1.338,1.338);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#626666").s().p("ACuHbQgjgFk0hBQgmgIgkACIg0AGQhAAHgRAhQgGAKABALIAAAGQgFgZADgZIAEgWIAbgUQAugYBagOQBagOCdAgQBOAQBBATQAFAAABggQAAgggHgQQgJgWgJgrQgLg0ADgdQAFgnAvh2QAnhgAfg/QAUgpAGhVQADglAAhDQAAgbAEgQQAEgTAMgJQAJgHAEAFQAFAJAFAAQANAAAfgjQgMASAABoQgBCHgCAHQgEAdhGCtQhECogQAbQgKARAVBzQAVBzgKAPQgQAYgHAEQgEACgJAAQgKAAgOgCg");
	this.shape_112.setTransform(428.7,131,1.338,1.338);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#323436").s().p("AhlFEQBQi1AQgxQAkhqAWg6QAIgVgChYQgChhAFgdQAHgiAOAAQAKAAACAEQADAFADAfQACAVgFBUQgFBXACAcQACAggQAxQgVBCgCAOQgJA0hUDOQgPgKgzgGg");
	this.shape_113.setTransform(470.4,112,1.338,1.338);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#323436").s().p("ABvCrQgygMh8gOQiXgPgwANQgzAPgaggQgXgeALgsQAIghAogIQAUgDASADIBDgFQAOgBDDApQDDApAYgDQAdgEADgqQADgegOhPQgPhJgCgSQgEgaALABIA6AIIAkBjQAhBugTBCQgSA9glATQgUAKgtACIgIAAQgsAAhCgRg");
	this.shape_114.setTransform(424.9,183.1,1.338,1.338);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#454748").s().p("AAdAKIgXgCIgsgRIAhAFQAWAEAWAKg");
	this.shape_115.setTransform(469.1,230.1,1.338,1.338);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#717677").s().p("AgIAFQgBgHABgBQACgBgCgHIARAIIgIAAQgCABgEAGIgCAIIgBgHg");
	this.shape_116.setTransform(431.8,223.7,1.338,1.338);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#717677").s().p("AgHgXQgEgFgCgBIgDAAIAJgEIAYANIgHAAQgIAAAAACQgCAEAEASIAFAcIgMACQAAgygEgHg");
	this.shape_117.setTransform(440.1,226.8,1.338,1.338);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#717677").s().p("AgJAKQgUgDgGgHIgCgFIAEgFIAAADIAHAFQAJAFANABQATADAXgPIgBAHQgDADgIAEQgMAFgOAAIgJgBg");
	this.shape_118.setTransform(434.9,221.9,1.338,1.338);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3D4659").s().p("AhACKIACgZQADgdAGgNIBSjPIAOAAQAQAAAGgCQAFgCgyBkIg2BvQgEAKgBAeIAAAcg");
	this.shape_119.setTransform(427.7,241.4,1.338,1.338);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9B9D9E").s().p("AgIAIQAMgtAOgNIgSBkIgSABQAEgUAGgXg");
	this.shape_120.setTransform(419.5,253.1,1.338,1.338);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#9B9D9E").s().p("AhDCLQgBgkAFgWQACgHAbg5QAZg0AEgYQAEgZATgbQALgOAJgIIgCgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAFABAKgEIAOAHQACA7gCgBQgCAAgiAKQgJAIgUAvQgYA4gFAKQgLATgCAjQgCARABAOg");
	this.shape_121.setTransform(430.7,241.5,1.338,1.338);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#252931").s().p("ACgBcQAEgDgQgeQgKgTgYgLIhCgWIgwgRIgsgLQgfgIg2gEIgwgDIAAg3QA9AHB+AyQB7AvASAVQAVAaAGAgg");
	this.shape_122.setTransform(464,236,1.338,1.338);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#252931").s().p("AjHBUQgDgGAAgJQAAgRANgOQARgSCdgvQCbgwA/gIIgRA8QhqgDgyAMIgsALIgyAPQgOAEg4AOQgdAHgHAJQgKARgCAMQAAAGABADg");
	this.shape_123.setTransform(404.4,234.2,1.338,1.338);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#9B9D9E").s().p("ACcA4QgIgMgYgKIhEgXQgdgJgRgNQgNgMgZgGQgggIhGgdIhAgcIAPgEQA9AHCCAyQB9AxAdAZQAPANAIAaQAEAOACAMIgUABQgCgQgRgbg");
	this.shape_124.setTransform(464.4,235,1.338,1.338);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#9B9D9E").s().p("AjcBaQgCgIABgKQABgVAPgNQAagXCegwQCbgxBBgHIAYALQiOArgzAMIgsALIgzAPIhGAWQgbAKgHALQgLARgEAPQgDAIAAAEg");
	this.shape_125.setTransform(403.3,233.5,1.338,1.338);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B3B5B8").s().p("AgCBDIAAiFIAFAAIAACFg");
	this.shape_126.setTransform(439.5,212.7,1.338,1.338);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3D4659").s().p("AgNBGIAAiLIAbAAIAACLg");
	this.shape_127.setTransform(434.5,213.5,1.338,1.338);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#252931").s().p("AgXBBIgMgGIAAiAIBHAAIAAB6QAAADgDAEQgHAIgRACIgHAAQgMAAgNgFg");
	this.shape_128.setTransform(435.1,213.5,1.338,1.338);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#454748").s().p("AgLAmQgLgEgFgNQgFgNAEgPQAFgQAMgJQALgIALADQAMAFAFAMQAFAOgEAPQgGAPgLAIQgIAHgIAAIgHgBg");
	this.shape_129.setTransform(376.2,253.9,1.338,1.338);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#454748").s().p("AgEArQgNgBgIgOQgIgOABgQQACgSALgMQALgLAMABQAOABAIAOQAIAOgCAQQgCASgKAMQgKAKgKAAIgEAAg");
	this.shape_130.setTransform(421.7,268.5,1.338,1.338);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#040D1C").s().p("AAAApQgOgBgLgGQgMgGgEgOQgDgOAGgOQAGgNASgFQAJgCAHABIAAgIIAoAAIABAXQABAXgCAIQgFAWgPAFQgGACgJAAIgHgBg");
	this.shape_131.setTransform(373.5,251,1.338,1.338);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#040D1C").s().p("AAAAtQgQgBgMgGQgNgHgDgPQgDgOAFgRQAFgNAPgFQAHgDAHAAIAAgIIA0AAIACAYQAAAZgCAKQgFAXgQAGQgGABgJAAIgIAAg");
	this.shape_132.setTransform(418.5,266.3,1.338,1.338);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#454748").s().p("AgTAbQgJgLAAgQQAAgOAJgMQAIgLALAAQAMAAAJALQAHALAAAPQAAAQgHALQgJALgMAAQgLAAgIgLg");
	this.shape_133.setTransform(488.6,254.8,1.338,1.338);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#454748").s().p("AgIAXQgHgDgCgJQgDgIAEgJQADgJAIgFQAHgEAHACQAHACACAKQADAIgEAJQgEAJgHAFQgFADgEAAIgFgBg");
	this.shape_134.setTransform(477.9,235.9,1.338,1.338);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#454748").s().p("AgMAjQgLgEgEgNQgEgOAFgNQAGgPAMgHQAKgHAMAEQALAEAEANQADAOgFANQgGAPgMAHQgHAFgGAAIgIgCg");
	this.shape_135.setTransform(413.6,235.8,1.338,1.338);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#040D1C").s().p("AAAAqQgPgBgLgGQgMgHgDgNQgDgNAGgQQAEgNAOgFQAHgCAGAAIAAgHIAwAAIABAXQABAXgCAIQgFAXgOAEQgGACgJAAIgHAAg");
	this.shape_136.setTransform(411.6,233.3,1.338,1.338);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#040D1C").s().p("AgNAaQgKgDgDgOQgBgGAAgPIABgPIAfAAIAAAFIAJACQAJADADAIQAIAXgRAJQgHAEgKAAIgDABIgKgCg");
	this.shape_137.setTransform(476.7,235.2,1.338,1.338);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#040D1C").s().p("AgSAjQgMgEgFgUQgCgHABgUIABgTIAqgBIAAAHIAMACQAMAEADALQAKAfgVALQgKAFgNABIgDABQgJAAgGgCg");
	this.shape_138.setTransform(489.7,252.7,1.338,1.338);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#717677").s().p("ABsAoQgEgGgFgCQgGgDgXgEQgXgEgGgDIgagKIiagqIABgHQEFA9AJAHQAIAHAAADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQgQgDgHAEIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_139.setTransform(458.6,226.3,1.338,1.338);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#454748").s().p("AgKAlQgMgDgFgOQgFgNAFgPQAEgPAMgJQALgIALADQAMAEAFANQAFAOgFAOQgEAQgMAJQgIAGgHAAIgHgCg");
	this.shape_140.setTransform(370.2,251.4,1.338,1.338);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#454748").s().p("AgEArQgNgBgIgOQgJgOACgQQACgSALgMQALgLAMABQAOABAIAOQAIAOgBAQQgCASgLAMQgKAKgLAAIgDAAg");
	this.shape_141.setTransform(414.9,266.6,1.338,1.338);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#454748").s().p("AgTAbQgIgLgBgQQABgPAIgLQAIgLALAAQAMAAAIALQAIALAAAPQAAAQgIALQgIALgMAAQgLAAgIgLg");
	this.shape_142.setTransform(493.9,253.5,1.338,1.338);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#454748").s().p("AgNAjQgLgEgDgNQgEgOAFgNQAGgPAMgHQAKgHALAEQALAEAEAOQAEANgFANQgGAPgMAHQgHAFgGAAQgFAAgEgCg");
	this.shape_143.setTransform(406.4,233,1.338,1.338);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#323436").s().p("AimC4QgEi+gPglQgQgpgSggQgHgLgBgMQgEgeAggKQAGgCAmgEQANgBChAFQAgABAiAGIBtAOIAZACQAKABgBAFQgBAHgPACQgXACgugLQgygMhjgHQhbgGgwADQgoACgNAGQgJAEgGANQgEAJANAWQAUAkAJAaQANAkAEAnQACAUAAANIACCHg");
	this.shape_144.setTransform(442.5,169.4,1.338,1.338);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B7BBC1").s().p("AiVDAIgOgEQgEgCAAgEQgGi5gOgkQgJgVgPgeIgNgYIgHgbQACgWAXgNQAQgKAWgDIAIgBQAMgDCKAHIAdABQAfABAkAGIBsAOIALABQAVADADAFQADADgBAEQgBAGgFADQgQALhEgQQgvgMhcgEQhOgEg4AEIguACQgNACgHAJQgCAEgCAKQAAAGAKAQQAMASARAzQANAjADAlQABASgBAMIAGB0IABAIQAAADgDAEIgEABgAigBMQAEA7ABAqIACAAIgDh6QgBgpgRg0QAIAdAGBVgAiwgrIAAgCQgJgYgPgZQAPAeAJAVgAjZh/QgCgGADgGIACgGQAFgNALgFQANgHAjgCQA6gDBXADQA8ADAqAFIAHABIAEAAIAKABIgKgBIgEAAIgHgBIgNgCQgjgGgfgBIgdgCQiKgEgIACIgJABQgaADgMAIQgRALACAaIACABIAAAAgACQidQA9APAMgGIhjgOIAaAFg");
	this.shape_145.setTransform(442,168.9,1.338,1.338);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,497.7,280.7);


(lib.personajes3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.HOMBRE1();
	this.instance.parent = this;
	this.instance.setTransform(72.5,49.5,3.429,3.027,0,0,180,18.4,44.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323436").s().p("ACdAzQgBgMADgUQAEgnAMgkQAKgbAUgjQAMgXgDgIQgHgNgJgEQgMgGgpgDQgwgDhbAHQhiAGgyAMQgvAMgWgDQgPgBgBgIQgBgEAKgBIAZgCIBsgOIAWgDQAZgEAUgBQCggFAOACQAiACAJADQAgAKgDAfQgBAHgHAPQgRAdgRAsQgKAYgFBoQgDA0gBAwIgNACg");
	this.shape.setTransform(451.6,100.2,1.456,1.456,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6BCC5").s().p("AhrF+QgggXgRgRIgMgLQASgeAPgSQAdgmAohdIA7iKQAUgqgHgeQgNgogGgmQgIgwgCgWQgDgnADgfQAFg6AbgqQAkg4A2ATIALAFQA1AfAACCQgBBRAGCjQABAXg6B4Qg+CBgoAvQgMAOgVAkQgXAogKAMIgygkg");
	this.shape_1.setTransform(408.9,34.9,1.135,1.135);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6D8D8").s().p("AiRFsQAPg4AphyQAuiCANgLQAMgKgEghQgGg8ACgnQACg6AAhaIgBhPQAGgLAKgOQATgcAVgNQBDgqAwB2IgNB0QgQB/gQA7IgCAeQgCAhgCAMQgFAZhAB3IhgCzg");
	this.shape_2.setTransform(411.4,29.9,1.135,1.135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E8C496").s().p("AAMCJQgWgEgRgNQgGgFgGgIQgOgRgEgTQgGgSABgQQABgNAKgeQALgiALgZQAHgNAPgSQAMgNACgMIAIgRIAqARQgHAPACASQABAJACAJIADAXQABAcgMAaQgMAaABAYQABAbAPANQAKAIABAOQABAJgGADIgUAHQgDABgGAAIgRgCg");
	this.shape_3.setTransform(393.7,86.2,1.135,1.135);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8C496").s().p("AgLgcQALgSAJACQAGAAADAFQAEAkgUAbIgUAVg");
	this.shape_4.setTransform(418.4,-56.3,1.135,1.135);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9A981").s().p("AgUAJQgCgCgBgEIAAgEQABgBASgDIAcgFQgNAPgPAEIgKACQgEAAgCgCg");
	this.shape_5.setTransform(389.6,-43.5,1.135,1.135);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5A47C").s().p("AgYACQgCgGACgEIAUAAQAVABAJAHIgvAIIgDgGg");
	this.shape_6.setTransform(389.3,-44.8,1.135,1.135);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#473834").s().p("AhpAiIgBAAQgJgBgIgGQgKgIAAgNIAAgDQgGgBgCgBQgCgBAAgIIABgOQABgDAGgCIAHgCIgEACQgDACAAADQgBAFAEAAQAIgRAXABIBRAAQATADAGALICLAMIgDARIiGgLIAAAGQAAAGgFAIQgFAJgOAFIgDABgAh5gQIAAAaIACAFQADAHAIAEIBcAAQAKgDAAgNIAAgaQgDgHgJAAIhdAAQgKADAAAEg");
	this.shape_7.setTransform(401.9,-60.8,1.135,1.135);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#473834").s().p("AAnABQgNgMgPAFQgLAFgOABQgaAFgJgJIAIgCIAhgHIAagBQAcAFADAYQgDgIgHgGg");
	this.shape_8.setTransform(393.6,-64.8,1.135,1.135);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#473834").s().p("AgJAJQgEgEAAgFQAAgFAEgDQAEgEAFAAQAGAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_9.setTransform(391.9,-61,1.135,1.135);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECB697").s().p("AgIAQQgcgFgKgHIgBgBIAAgBIAKgIQAOgJAVAAIAQACQATAEAOAIIABAAIgBABQgUAQgcAAgAgrADQAKAFAaAFQAcADAWgQQgNgHgSgEIgOgCQgdAAgMAQg");
	this.shape_10.setTransform(393.7,-61,1.135,1.135);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAKIgRgGQAFgLATgFQAKgCAJAAQARgCAfAPQgEADgIAEQgQAIgUABIgDAAQgIAAgPgFg");
	this.shape_11.setTransform(393.7,-61,1.135,1.135);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#473834").s().p("AglgSIAWAPQAaAOAbAEIhCADg");
	this.shape_12.setTransform(412,-89.8,1.135,1.135);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#473834").s().p("AglgSIAWAPQAaAOAbAEIhBADg");
	this.shape_13.setTransform(402.7,-91,1.135,1.135);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#473834").s().p("AglgRIAWAOQAaAOAbADIhBAFg");
	this.shape_14.setTransform(394.3,-90.3,1.135,1.135);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#473834").s().p("ABMAfIg2gXQgpgdgtgdQhbg6gRAHIgeguQgfgxAAgMQAAgKAPADQAfAHAegCQAggCBpgKQBggHAfAMQA0AUAiAwQAvBCgHBhQgHBdg8BFQgTAVgWARIgSAMQgXiggIgjg");
	this.shape_15.setTransform(409,-64.3,1.135,1.135);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B6BCC5").s().p("AhaAdICshZIAQA+QgEAShfAWIhgATg");
	this.shape_16.setTransform(411.1,-26.6,1.135,1.135);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D6D8D8").s().p("AgIHfIi/gMQgUn/gLhFQgGgrA/iGIBBh9IDTg/IAaAUQAfAbAXAoQBJB/glDHQgpDhgMB/QgKBxANAuQAJAhiYAAIgiAAg");
	this.shape_17.setTransform(410.5,27.4,1.135,1.135);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8C496").s().p("AgvD1QAKgqgGgMQgHgLgmAHQgpALgMAAQgPAAgJgGQgGgEgHgJQgDgGADgQQADgQgBgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIABAAQgEgIgDgJIgBgJQgGgJACgLQACgIAAgQQAAgCgJAAQgMgCgHgEQgHgEAAgJIABgJQATg2ATgXIACh/QAUhQBTggQApgQAlAAIAhAAQAoADAiAPQBrAsAFCKQAECIgzBAQgQATgUALIgRAGQgVA2gLBMIiUAeIAMg2g");
	this.shape_18.setTransform(407.8,-56.1,1.135,1.135);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B6BCC5").s().p("AgbDkQgzgVhcg4Qhjg8gqgoQAIgWAVgfQAagmAIgQQgIASDYBNQAbgYAYglQAQgXAbgvQAthPAughQBDgxBCAxQAzAlgZBAQgSAxg2AwQgeAahkB3QhTBbgkAAQgGAAgEgCg");
	this.shape_19.setTransform(376.7,16.9,1.135,1.135);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E8C496").s().p("AAzBYQglgagTgDQgQgCgggXIgcgYQgFgDgCgMQgCgMAFgKQAEgNADgGQAGgKALADIgCgCIglgYQgjgaAFgHIAAgBQAGgEBEAlIAjAVQAbAQAEgBQAEgBgFgKIgJgRQgIgZAIgMQAEgHAHAOIALAbQAHAQAUAhQAJAQAHATQAEAMA/A5IgxAkQgOgNgSgNg");
	this.shape_20.setTransform(336.1,9.6,1.135,1.135);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111011").s().p("AjiHIIh0qJQgIgnAWgpQAthSCagFQCZgFgEgrQgBgNgRgPIgPgNIFLgJIAOBnQANBrAAAZQAAAQgiAcQgmAfg3AXQiVA+iSgxIA0I7g");
	this.shape_21.setTransform(392.1,132.3,1.135,1.135);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353335").s().p("AiTG3IhogNQgxh7gxiWQhhkqACiGQACiGDygSQB8gJCWAQQAsgDBAgPIEHAgIgzAzQg2A3gPAOQgPANhuAzIh5A4QgNAHgvAFQgnAEgnAAQgcAAhNgIIhHgIQBUDuAIAUQAFAKAdBtQAgBxAWAgQAXAhgBAWQgBAMgHASQgBAGgfAAQgbAAgvgEg");
	this.shape_22.setTransform(367.2,130.7,1.135,1.135);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5F4A38").s().p("Ai4BXQgFgBgCgRQgBgPAIgLQAJgNAagMQAkgQBOgpIAUgvIC/AJIAPAkQADBHgKAIQgKAJhUgFIiRAtg");
	this.shape_23.setTransform(369,193.4,1.135,1.135);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5F4A38").s().p("Ai4BXQgFgBgCgSQgBgOAIgLQAKgNAZgLQAkgRBOgpIAVgvIC+AJIAPAlQADBGgKAJQgKAIhUgFIiQAtg");
	this.shape_24.setTransform(343.1,189.3,1.135,1.135);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#323436").s().p("AjpECQgChDgEhKQgIiSgNghQgXg7gYgrQgKgSgCgNQgFgrAtgOQAJgDA0gFQAZgCDcAHQAsACAwAJICZATQANACAVABQAPACgBAGQgCAKgVADQgfADhCgQQhGgRiKgJQh/gJhEAEQg4ADgTAJQgMAFgJATQgFAMASAfQAcAyANAlQASAzAFA2QADAcAAASIADC+g");
	this.shape_25.setTransform(425,100.9,1.173,1.173);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323436").s().p("AACAHIgRgZQgIgMAAgGQgBgHAFgCIAEAAQgOAGAeAmQAPARAGAPQAEAMgDAEQgBgHgUghg");
	this.shape_26.setTransform(439,111.5,1.173,1.173);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#626666").s().p("AAPCzQANhTgGg/QgEglgihwIghhpIAMAHQAQAHAQAFQAPAEAHAhIAGAnQAIArAHAtQAMBXAAAwQAAAugaAsQgNAWgNANg");
	this.shape_27.setTransform(458.4,101.9,1.173,1.173);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#626666").s().p("AD1KZQgngFhbgTIlghJQg1gLgyACIhJAJQhbAJgXAuQgKASACAQQgGghAEgiIAGgeQAHgMAfgRQA/ggB/gUQB+gUDcAtQBvAWBbAaQAHABAAgtQAAgsgJgWQgMgggNg8QgPhJAEgoQAHg3BCilQA1iHAshZQAcg5AJh4QAEg1AAhcQAAgnAFgWQAHgaAQgNQANgKAFAIQAIAMAHAAQAMgBAbgZIAWgWQgRAaAACQQgCDAgBAHQgHAohhDyQhgDtgWAmQgOAYAdCgQAdCigOAVQgVAigLAFQgGADgNAAQgMAAgUgDg");
	this.shape_28.setTransform(408,41.5,1.173,1.173);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#323436").s().p("ADvECQgggFg0gNQhHgSitgSQjUgXhDATQhHAVgkgtQghgpAPg+QAMgvA4gKQAcgFAZAEIBegGQATgCESA6QESA5AhgFQAqgGAEg5QADgrgUhvQgUhmgDgaQgGgkAPACQAXACA7AIIARAoQAUAyAOAxQAuCbgbBcQgZBWg1AbQgaANhAADIgOAAQghAAgjgFg");
	this.shape_29.setTransform(403.4,105.6,1.173,1.173);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#454748").s().p("AAJALIg+gZIAtAIQAfAFAfAPIgOABg");
	this.shape_30.setTransform(457.8,163.3,1.173,1.173);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#717677").s().p("AgLghQgEgHgEgBIgEAAIANgFIAiARIgKAAQgKABgCACQgCAFAFAbIAIAmIgSADQAChGgIgKg");
	this.shape_31.setTransform(422.1,159.3,1.173,1.173);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#717677").s().p("AgNAOQgcgDgJgKIgCgJIAGgHIgBAFIAKAHQANAHASACQARACAXgJQALgFAIgGIgBAKQgFAFgLAFQgPAIgTAAIgPgCg");
	this.shape_32.setTransform(415.7,153.3,1.173,1.173);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3D4659").s().p("AhaDCQAChBAMgeIB0kiQAlABANgEQAIgDhGCMIhNCdQgHAWABBJg");
	this.shape_33.setTransform(406.9,177.2,1.173,1.173);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#252931").s().p("ADhCBQAFgEgWgqQgOgcgigOQgzgRgpgPIhFgXIg9gRQgrgLhMgGIhDgCIAAhOQBVALCxBEQCtBDAZAeQATAWALAgQAFAQACALg");
	this.shape_34.setTransform(451.5,170.6,1.173,1.173);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#252931").s().p("AkYB1QgEgIAAgMQAAgYASgUQAZgZDbhCQDahEBZgKIgZBTQglgBguABQhcACgsALIg9AOQgJACg+AUQgTAGhPATQgpAKgJAOQgOAYgDAQQgBAIACAEg");
	this.shape_35.setTransform(378.2,168.4,1.173,1.173);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B3B5B8").s().p("AgCBeIAAi7IAGAAIAAC7g");
	this.shape_36.setTransform(421.3,142,1.173,1.173);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3D4659").s().p("AgSBhIAAjBIAlAAIAADBg");
	this.shape_37.setTransform(415.2,142.9,1.173,1.173);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#252931").s().p("AggBcIgRgJIAAi0IBjAAIAACqIgEALQgJALgYACIgMABQgQAAgRgGg");
	this.shape_38.setTransform(416,142.9,1.173,1.173);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#454748").s().p("AgPA1QgQgFgHgUQgHgSAGgVQAHgVAQgMQAQgMAQAEQAQAFAHAUQAHASgGAVQgHAVgQANQgLAIgLAAIgKgBg");
	this.shape_39.setTransform(343.5,192.6,1.173,1.173);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#454748").s().p("AgFA8QgTgCgMgTQgLgTACgYQADgYAPgRQAQgQARACQATACAMATQALATgCAYQgDAZgPAQQgNAPgPAAIgFgBg");
	this.shape_40.setTransform(399.5,210.5,1.173,1.173);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#040D1C").s().p("AAAA6QgUgBgQgJQgRgJgFgTQgFgUAKgUQAIgSAZgHQANgDAKABIAAgLIA3ABIACAfQABAggDAMQgGAggVAGQgIADgNAAIgKgBg");
	this.shape_41.setTransform(340.2,189.1,1.173,1.173);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#454748").s().p("AgbAmQgMgQAAgWQAAgVAMgQQALgPAQAAQARAAALAPQAMAQAAAVQAAAWgMAQQgLAPgRAAQgQAAgLgPg");
	this.shape_42.setTransform(481.7,193.7,1.173,1.173);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#454748").s().p("AgLAgQgKgEgEgMQgEgMAFgMQAGgOAKgGQALgHAJAEQALADADANQAEAMgFAMQgGAOgKAGQgIAFgFAAIgHgCg");
	this.shape_43.setTransform(468.5,170.4,1.173,1.173);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#454748").s().p("AgSAxQgQgFgFgTQgGgTAIgTQAIgVARgKQAPgKAQAGQAPAGAGASQAFATgHATQgJAVgQAKQgKAHgJAAQgGAAgGgDg");
	this.shape_44.setTransform(389.5,170.3,1.173,1.173);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#040D1C").s().p("AAAA7QgVgCgQgIQgQgJgEgTQgFgTAIgVQAFgTAUgGQAKgEAIABIAAgLIBFABIABAfQACAhgDAMQgHAfgVAHQgIACgMAAIgKAAg");
	this.shape_45.setTransform(387.1,167.3,1.173,1.173);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#040D1C").s().p("AgTAlQgNgEgFgVQgCgIABgVIABgUIAtgBIAAAHIAMACQANAEADAMQALAhgWAMQgLAFgOABIgGABQgIAAgFgCg");
	this.shape_46.setTransform(467,169.5,1.173,1.173);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#040D1C").s().p("AgaAxQgSgGgGgbQgCgKABgcIABgcIA8AAIAAAJIAQADQARAFAFAQQAGATgDAQQgEARgPAHQgNAHgTACIgHAAQgLAAgIgCg");
	this.shape_47.setTransform(483.1,191.1,1.173,1.173);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#717677").s().p("ACYA4QgGgIgHgDQgIgEghgGQgggFgJgEIgkgOIjYg8IABgKQFuBWANALQALAJAAAFQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgNgBQgOgBgGAEIgEABQgDAAgCgDg");
	this.shape_48.setTransform(444.8,158.7,1.173,1.173);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#454748").s().p("AgOA0QgRgFgHgSQgIgTAHgVQAHgWAQgMQAQgLAPAFQARAFAHASQAHAUgGAUQgHAWgQAMQgLAIgLAAIgJgCg");
	this.shape_49.setTransform(336.2,189.5,1.173,1.173);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#454748").s().p("AgbAlQgMgPAAgWQAAgVAMgPQALgQAQAAQARAAAMAQQALAPAAAVQAAAWgLAPQgMAQgRAAQgQAAgLgQg");
	this.shape_50.setTransform(488.2,192.2,1.173,1.173);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#323436").s().p("AjpECQgChDgEhKQgIiSgNghQgXg7gYgrQgLgVgBgKQgFgrAtgOQAIgDA1gFQAZgCDcAHQAsACAwAIICZAUIAiADQAPACgBAGQgCAKgVADQgfADhCgQQhGgRiKgJQh/gJhEAEQg4ADgTAJQgMAFgJATQgFAMASAfQAcAyANAlQASAyAFA3QADAcAAASIADC+g");
	this.shape_51.setTransform(425,88.7,1.173,1.173);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#323436").s().p("AhFHVQgcgKgsgFQBvj+AXhEQAwiNAihaQALgdgDh7QgDiIAHgpQAJgwAUAAQAOAAADAFQAEAJAEArQADAdgHB2QgHB5ADAnQAEAugXBFQgdBcgEATQgIAug+CjQgeBSgeBIQgFgEgPgEg");
	this.shape_52.setTransform(459.4,18.1,1.173,1.173);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#626666").s().p("AgvB0IBfjvIgHAjQgIAmgDAXIgIBDQgGArgGAPQgHASgQAGQgGACgFAAQgMAAgLgIg");
	this.shape_53.setTransform(459.1,60.5,1.173,1.173);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B7BBC1").s().p("AjkEHQgHgCAAgGQgChCgEhHQgJiNgNggQgMgfgVgoIgSgiIgKgmQACggAhgSQAWgNAggEIALgBQAQgEDCAIIAoACQAsABAyAJICnAVQARACAFACQAJACAEAFQADAEgBAHQgBAHgHAGQgXAPhggYQhCgQiAgFQhugGhOAFIhBADQgSADgKANIgDAJIgCAJQgBAGADAGIAMAUQASAdAXBDQARAyAFAzQACAagCASIAICiIACAKQAAACgCADQgBAEgCABIgFACgAjhBqQAGBNABBBIADABIgEitQAAgOgEgYQgGgtgPguQALAoAIB3gAj3g+IAAgBQgPgngSgeQAUAnANAfgAjcj5IgNABQgkAFgRALQgXAQACAkIACADQgDgKAFgJIADgHQAHgTAPgHQASgJAxgDQBTgEB5AEQCOAGBCAQQBUAUAUgJQgLgDgJAAIgPgCIiYgUIgBAAQgwgIgrgCIgpgCQiJgFguAAIgWABg");
	this.shape_54.setTransform(424.4,100.3,1.173,1.173);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B7BBC1").s().p("AjREMIgTgFQgHgCAAgGQgChCgEhHQgJiNgNggQgMgfgVgoIgSgiIgKgmQACggAhgSQAWgNAggEIALgBQAQgEDCAIIAoACQAsABAyAJICnAVIAWAEQAJACAEAFQADAEgBAHQgBAIgHAEQgYAPhfgXQhCgQiAgGQhwgFhMAFQg0ABgNACQgSADgKANIgDAJIgCAJQgBAGADAGIAMAUQARAbAYBFQARAyAFAzQACAagCASIAICiIACAKQAAAFgFAFQgCABgDAAgAjhBqQAGBNABBBIADABIgEitQAAgOgEgYQgGgtgPguQALAoAIB3gAj3g+IAAgBQgOgngTgeQAUAnANAfgAkxiyQgDgJAFgJIADgHQAHgTAPgHQASgJAxgDQBRgFB7AFQBRADA5AHIAEAAIASACIAHABIgHgBIgSgCIgEAAIgNgCIgBAAQgwgJgrgBIgpgCQi8gJgRAEIgNACQgkAFgRALQgXAQACAkIACACIAAAAgADJjcQBVAVATgJQgGgCgOgBIh9gRQAXAEASAEg");
	this.shape_55.setTransform(424.4,88.1,1.173,1.173);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#717677").s().p("AgMAHQgBgJACgCQACgCgDgKIAZANQgHgCgEABQgEABgFAKIgDAKIgCgKg");
	this.shape_56.setTransform(411.8,155.4,1.173,1.173);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9B9D9E").s().p("AgLAKQARg+AUgSIgZCNIgaAAQAFgcAJghg");
	this.shape_57.setTransform(396.7,191.6,1.173,1.173);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9B9D9E").s().p("AheDCQgBgxAHggQACgKAlhPQAkhKAGghQAGgjAbgmIAbgfIgCgCQgBgDAEAAQAGAAAOgEIAUAJQADBTgDgBQgBgBgZAHIgZAHQgMAMgcBBQghBPgIAOQgPAbgEAxQgBAYABATg");
	this.shape_58.setTransform(410.5,177.3,1.173,1.173);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9B9D9E").s().p("ADbBPQgKgRgjgOQgQgHhQgZQgpgOgWgSQgTgSgkgIQgtgLhigoIhZgmIAWgHQBWAJC1BIQCwBEAnAjQAVASAMAmQAGATACAQIgcACQgDgWgXgmg");
	this.shape_59.setTransform(451.9,169.4,1.173,1.173);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9B9D9E").s().p("Ak1B+QgDgLABgPQACgdAVgSQAkggDehEQDZhEBcgKIAhAPQjHA9hHAQIg+AQIhIAVQhKAWgYAJQgmANgKAQQgPAYgGAWQgDAKAAAGg");
	this.shape_60.setTransform(376.8,167.4,1.173,1.173);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#040D1C").s().p("AAAA/QgWgBgRgKQgSgJgFgVQgEgUAIgXQAGgUAVgHQALgEAJABIAAgMIBKABIABAiQACAjgDANQgIAigWAHQgJADgMAAIgMgBg");
	this.shape_61.setTransform(395.5,207.9,1.173,1.173);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#454748").s().p("AgFA8QgTgCgLgTQgMgTACgYQADgYAPgRQAQgQARACQATACAMATQALATgCAYQgDAZgPAQQgNAPgPAAIgFgBg");
	this.shape_62.setTransform(391.1,208.2,1.173,1.173);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#454748").s().p("AgSAxQgPgGgGgSQgFgTAHgTQAJgVAQgKQAQgKAPAGQAQAFAFATQAGATgJATQgIAVgQAKQgKAGgJABQgGAAgGgDg");
	this.shape_63.setTransform(380.7,166.9,1.173,1.173);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#323436").s().p("ADcBIQgBgSADgcQAGg2ASgzQANglAcgyQASgfgFgMQgJgTgNgFQgSgJg4gDQhEgEh/AJQiKAJhGARQhCAQgfgDQgVgDgCgKQgBgGAOgCIAjgDICYgTIAegFQAjgEAcgCQDcgHAYACQA0AFAJADQAuAOgFArQgDAQgJAPQgXAogYA+QgOAhgICSQgEBKgBBDIgSAEg");
	this.shape_64.setTransform(-5.7,103.8,1.043,1.043);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#323436").s().p("AgVAeQAFgNAPgSQAggngPgFIAEAAQAEABAAAIQgBAGgIAMIgQAZQgUAggBAHQgDgDAEgNg");
	this.shape_65.setTransform(-18.2,113.2,1.043,1.043);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#626666").s().p("AgXC7QgagsAAguQAAgvAMhYIAOhXIAGgoQAIghAPgEQAZgIATgLIghBpQgiBwgEAlQgEAnAFA5QACAdAEAVIARAqQgMgMgOgWg");
	this.shape_66.setTransform(-35.5,104.6,1.043,1.043);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#626666").s().p("AknKZQgKgEgWgiQgOgWAeihQAdihgOgXQgXgnhfjsQhhjygHgoQgBgKgCi9QgBiUgRgXIAWAWQAcAaAMAAQAHAAAHgLQAGgJANAKQAQAOAGAaQAGAWAAAmQAABcAEA1QAJB4AbA5QAsBYA2CIQBCClAHA3QAEAogPBJQgNA8gMAgQgJAWAAAtQAAAsAHAAQBbgaBvgXQDbgsB+ATQB/AUA/AgQAgARAGAMIAGAfQAEAggFAgQABgPgJgRQgXguhbgJQgtgHgcgBQgygDg1ALIlgBJQhcATgmAFQgUADgNAAQgNAAgGgDg");
	this.shape_67.setTransform(9.3,50.9,1.043,1.043);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#323436").s().p("AlAEHQhAgDgbgNQg0gbgZhWQgbhcAuibQAOgxAUgyIARgoIBSgKQAPgCgGAkQgDAagUBmQgUBvADArQAEA5AqAGQAhAFESg5QESg6ATACQAsAEAyACIA1ABQA4AKALAvQAQA+ghApQgkAthIgVQhCgTjUAXQiuAShGASQg0ANggAFQgjAFghAAIgOAAg");
	this.shape_68.setTransform(13.4,107.9,1.043,1.043);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#454748").s().p("Ag1AOIATgIQAYgJATgDIAtgIIg+AZIgfAEg");
	this.shape_69.setTransform(-35,159.3,1.043,1.043);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#717677").s().p("AgMAsIAIgmQAFgbgCgFQgBgCgLgBIgKAAIAigSIANAGIgDAAQgFACgEAGQgFAHgBAlIAAAlgAAYgpIAAAAg");
	this.shape_70.setTransform(-3.2,155.7,1.043,1.043);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#717677").s().p("AgjAIIgQgKIgBgKIAUALQAWAJARgCQAdgEAMgMIgBgFIAGAHIgDAJQgIAKgcADIgPACQgTAAgPgIg");
	this.shape_71.setTransform(2.5,150.3,1.043,1.043);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3D4659").s().p("AAyBkQgCgHhLiWQhGiMAIADQANAEAlgBIB0EiQAMAeACBBIgjABQABhJgHgWg");
	this.shape_72.setTransform(10.3,171.6,1.043,1.043);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#252931").s().p("Aj4CBQACgMAFgPQAMggASgWQAZgdCuhDQCwhGBVgKIAABOQgdAAglADQhMAFgsAMIg9AQIhFAXQgoAPg0ARQgiAPgOAbQgOAbgDAMQgBAGABABg");
	this.shape_73.setTransform(-29.3,165.7,1.043,1.043);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#252931").s().p("AEAB1QACgDgCgJQgCgQgOgYQgJgOgpgKQhPgTgUgGIhGgWIg9gPQgsgKhcgCIhTAAIgZhTQBZAKDaBDQDbBDAYAZQATAUAAAYQgBAMgEAIg");
	this.shape_74.setTransform(35.9,163.8,1.043,1.043);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B3B5B8").s().p("AgDBeIAAi7IAGAAIAAC7g");
	this.shape_75.setTransform(-2.5,140.3,1.043,1.043);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3D4659").s().p("AgTBiIAAjDIAnAAIAADDg");
	this.shape_76.setTransform(2.9,141.1,1.043,1.043);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#252931").s().p("AgMBhQgYgCgJgLIgEgLIAAiqIBjAAIAAC0QgGAEgLAFQgQAGgSAAIgLgBg");
	this.shape_77.setTransform(2.2,141.1,1.043,1.043);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#454748").s().p("AgQAuQgQgMgHgWQgGgVAHgSQAHgUAQgEQAQgFAQAMQARALAGAWQAGAVgHATQgHASgQAGIgKABQgLAAgLgIg");
	this.shape_78.setTransform(66.7,185.3,1.043,1.043);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#454748").s().p("AgbAuQgPgQgDgZQgCgYALgTQALgTAUgCQARgCAQAQQAPAQADAZQACAYgLATQgMATgTACIgFABQgPAAgNgPg");
	this.shape_79.setTransform(16.9,201.2,1.043,1.043);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#040D1C").s().p("AgeA4QgUgGgIggQgCgMABggIABgfIA4gBIAAALIAXACQAZAHAJASQAIAUgFAUQgEATgRAJQgQAJgVABIgJABQgNAAgIgDg");
	this.shape_80.setTransform(69.6,182.2,1.043,1.043);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#454748").s().p("AgbAlQgMgPAAgWQAAgVAMgQQAMgPAPAAQAQAAANAPQALAQAAAVQAAAWgLAPQgNAQgQAAQgPAAgMgQg");
	this.shape_81.setTransform(-56.2,186.3,1.043,1.043);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#454748").s().p("AgIAdQgKgGgFgOQgFgMADgMQAEgMAKgEQAKgEAKAHQAKAGAFAOQAGAMgEAMQgEAMgKAEIgHACQgGAAgHgFg");
	this.shape_82.setTransform(-44.5,165.6,1.043,1.043);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#454748").s().p("AgMAtQgRgKgHgVQgIgTAFgTQAFgSAQgGQAQgGAPAKQARAKAHAVQAIATgFATQgGATgPAFQgGADgGAAQgJgBgKgGg");
	this.shape_83.setTransform(25.8,165.5,1.043,1.043);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#040D1C").s().p("AgdA5QgVgHgHgfQgDgMABghIACgfIBFgBIAAALIASADQATAGAGATQAHAWgEASQgEATgRAJQgPAIgWACIgJAAQgMAAgIgCg");
	this.shape_84.setTransform(27.9,162.8,1.043,1.043);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#040D1C").s().p("AAAAmQgNgBgKgFQgLgGgDgNQgDgMAFgOQAEgMAMgEQAHgCAFAAIAAgHIAtABIABAUQABAVgCAIQgEAUgOAFQgFACgHAAIgIgBg");
	this.shape_85.setTransform(-43.1,164.8,1.043,1.043);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#040D1C").s().p("AAAAzQgSgCgNgHQgPgHgEgRQgDgQAGgTQAFgQARgFQAIgDAIAAIAAgJIA7AAIACAcQABAcgDAKQgFAbgTAGQgHACgLAAIgIAAg");
	this.shape_86.setTransform(-57.4,184,1.043,1.043);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#717677").s().p("AigA6QgGgEgOABIgNABQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgFALgJQAIgHC6gtIC6gtIAAAKIjYA8IgkAOQgJAEghAFQggAGgIAEQgHADgGAIQgCADgDAAIgEgBg");
	this.shape_87.setTransform(-23.4,155.1,1.043,1.043);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#454748").s().p("AgQAtQgQgLgHgWQgGgUAHgUQAHgSAQgGQAQgFAQAMQAQANAHAVQAGAVgHASQgHAUgQAEIgKACQgLAAgLgJg");
	this.shape_88.setTransform(73.2,182.5,1.043,1.043);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#454748").s().p("AgbAlQgMgPAAgWQAAgVAMgPQALgQAQAAQARAAAMAQQALAPAAAVQAAAWgLAPQgMAQgRAAQgQAAgLgQg");
	this.shape_89.setTransform(-62,184.9,1.043,1.043);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#323436").s().p("ADcBIQgBgSADgcQAGg3ASgyQANgmAcgxQASgfgFgMQgJgTgNgFQgSgJg4gDQhEgEh/AJQiKAJhGARQhCAQgfgDQgVgDgCgKQgBgGAOgCIAjgDIC2gYQAjgFAcgBQDcgHAYACQA1AFAIADQAuAOgFArQgCAOgKARQgXAogYA+QgOAhgICSQgEBKgBBDIgSAEg");
	this.shape_90.setTransform(-5.7,92.9,1.043,1.043);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#323436").s().p("AgKFDQg+ijgIguQgDgSgehdQgXhFAEguQADgngHh5QgHh2ADgdQAEgrAEgJQADgFAOAAQAUAAAJAwQAHAogDCJQgDB7ALAdQAoBoAqB/QAXBFBvD9QgsAGgcAJIgUAIIg8iag");
	this.shape_91.setTransform(-36.4,30.1,1.043,1.043);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#626666").s().p("AAOB6QgQgGgHgSQgGgPgGgrIgIhDIgKg9IgHgjIBdDvQgKAIgMAAQgFAAgGgCg");
	this.shape_92.setTransform(-36.1,67.9,1.043,1.043);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B7BBC1").s().p("ADKELQgFgEAAgGIACgKIAIiiQgBgSACgaQAEgzARgyQAZhFARgbQAJgPACgFQADgGAAgGQgCgNgEgFQgKgNgSgDIhBgDQhNgFhuAGQiBAFhCAQQhgAYgWgPQgIgFgBgIQgBgGADgFQAEgEAJgDIAWgEICngVIAggFQAjgEAbgBIApgCQDBgIAQAEIALABQAgAEAWANQAhASACAgIgKAmIgSAiQgVApgMAeQgNAggJCNQgEBHgCBCQAAAHgHABIgVAGQgDAAgDgCgADgAmQgDAYgBAOIgECtIADgBQAJjwARg9QgPAugGAtgADUjxQAxADATAJQAOAHAIATIADAHQAEAIgDALIACgDQADgkgYgQQgQgLglgFIgNgBQgOgDi/AHIgoACQgcABgiAFQgdADgBABIgBAAIiYAUIgjAFQAUAJBUgUQBCgQCPgGQA8gCAzAAQAzAAApACg");
	this.shape_93.setTransform(-5.3,103.2,1.043,1.043);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B7BBC1").s().p("ADQEMQgDAAgDgBQgFgFAAgFIACgKIAIiiQgBgSACgaQAEgzARgyQAZhGARgaIALgUQADgGAAgGQgCgNgEgFQgKgNgSgDIhBgDQhMgFhvAFQiBAGhCAQQhgAYgWgQQgIgEgBgIQgBgGADgFQAEgFAJgCIAWgEICngVIAggFQAjgEAbgBIApgCQDBgIAQAEIALABQAgAEAWANQAhASACAgIgKAmIgSAiQgVApgMAeQgNAggJCNQgEBHgCBCQAAAHgHABIgTAFgADgAmQgDAYgBAOIgECtIADgBQAJjwARg9QgPAugGAtgADUjxQAxADATAJQAOAHAIATIADAHQAEAIgDAKIACgCQADgkgYgQQgQgLglgFIgNgCQgRgEi8AJIgoACQgbABgjAEIgeAFIgBAAIgHABQA3gGBOgDQA6gCAwAAQA2AAArACgAkcjTQgOABgGACQATAJBVgVIAmgHIAPgCIAKgCIANgBIgNABIgKACIgPACg");
	this.shape_94.setTransform(-5.3,92.3,1.043,1.043);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#717677").s().p("AgBgEIgLABIAZgNIgBAGQgBAFACABQACADgEASQgFgTgHgCg");
	this.shape_95.setTransform(5.9,152.2,1.043,1.043);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9B9D9E").s().p("AAABHIgZiNQAUASARA+QAJAgAFAdg");
	this.shape_96.setTransform(19.3,184.5,1.043,1.043);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9B9D9E").s().p("AA6CaQgEgxgPgbQgIgOghhPQgchBgMgMIgZgHQgZgHgBABQgDABADhTIAUgJIAIACIAMACQAHAAgGAFIAbAfQAcAmAGAjQAFAhAkBKQAlBPACAKQAIAggCAxIgkADQABgTgCgYg");
	this.shape_97.setTransform(7.1,171.7,1.043,1.043);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9B9D9E").s().p("AkRCJQADgQAFgTQAMgmAVgSQAogjCwhEQC2hIBVgJIAWAHQihBIhHARQgjAIgUASQgWASgqAOQhOAZgRAHQgjAOgKARQgYAmgCAWg");
	this.shape_98.setTransform(-29.7,164.7,1.043,1.043);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9B9D9E").s().p("ADvBAQgKgQgmgNIhigfIhIgVIg+gQQgsgKh2giIhsghIAhgPQBcAKDaBEQDdBEAkAgQAVASACAdQABAPgDALIgvAAQAAgYgYgmg");
	this.shape_99.setTransform(37,162.9,1.043,1.043);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#040D1C").s().p("AggA9QgWgHgIgiQgDgNACgjIABgiIBLgBIAAAMIAUADQAVAHAGAUQAHAYgEATQgFAVgSAJQgRAKgXABIgKABQgNAAgJgDg");
	this.shape_100.setTransform(20.4,198.9,1.043,1.043);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#454748").s().p("AgbAuQgPgQgDgZQgCgYALgTQAMgTATgCQASgCAPAQQAPARADAYQACAYgLATQgMATgTACIgFABQgOAAgOgPg");
	this.shape_101.setTransform(24.3,199.2,1.043,1.043);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#454748").s().p("AgMAtQgQgKgIgVQgIgTAFgTQAGgTAPgFQAQgGAPAKQARAKAHAVQAIATgFATQgGASgPAGQgGACgGAAQgJAAgKgGg");
	this.shape_102.setTransform(33.6,162.5,1.043,1.043);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#AEB1B1").s().p("AgWACIAugDQgKACgSABg");
	this.shape_103.setTransform(151.5,67.6,1.456,1.456);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("Ag7ABIAMgDQAPgFANAAQBPgEAAASIhzACg");
	this.shape_104.setTransform(146,67.8,1.456,1.456);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AEB1B1").s().p("AgoAHQgRgDAAgEQAAgDARgDQARgDAXAAQAYAAARADQARADAAADQAAAEgRADQgRADgYAAQgXAAgRgDg");
	this.shape_105.setTransform(146.3,67.6,1.456,1.456);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Ag7gGIBzgCIAEAIQgTAHgVABIgdABQgyAAAAgPg");
	this.shape_106.setTransform(308.9,67.5,1.456,1.456);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgoAHQgRgDAAgEQAAgDARgDQARgDAXAAQAYAAARADQARADAAADQAAAEgRADQgRADgYAAQgXAAgRgDg");
	this.shape_107.setTransform(308.6,66.2,1.456,1.456);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#AEB1B1").s().p("AgoAHQgRgDAAgEQAAgDARgDQARgDAXAAQAYAAARADQARADAAADQAAAEgRADQgRADgYAAQgXAAgRgDg");
	this.shape_108.setTransform(308.6,67.7,1.456,1.456);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_109.setTransform(124.2,61.3,1.456,1.456);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AEB1B1").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_110.setTransform(124.2,63.3,1.456,1.456);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_111.setTransform(319.3,61.3,1.456,1.456);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#AEB1B1").s().p("Ai5AUIAAgnIFzAAIAAAng");
	this.shape_112.setTransform(319.3,63.3,1.456,1.456);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#585B5C").s().p("AiUDuQgOgDgEgCIgBgDQECgDAhgFQAVgDAIgUIAEgTIh4l9QgFgRgIgGIgHgCIACgMIAGADQAOAIAFAQIBzFkQAKAigCAOQgBAIgHAKQgHANgOAGIiHAFQhfAEgkAAIgUgBg");
	this.shape_113.setTransform(162.7,31.5,1.456,1.456);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#585B5C").s().p("AhHFkICIrGIAHgBIiFLHg");
	this.shape_114.setTransform(151.6,-5,1.456,1.456);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AhcFeICPrGIAqAKIiGLHg");
	this.shape_115.setTransform(154.5,-3.8,1.456,1.456);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AEB1B1").s().p("ABBljIAFB5QAACNgYBgQgYBhgwCJQgYBFgTAyg");
	this.shape_116.setTransform(158.6,-3.1,1.456,1.456);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#585B5C").s().p("AiJDmQgPgGgGgNIgIgSQgCgNAKgjQAQg2BikuQAGgQAOgIIAFgDIADAMQgDAAgEACQgIAGgFARIh5F9IAEATQAJAUAVADQAhAFEBADQAEAEgWAEIgZABQg9AAjIgJg");
	this.shape_117.setTransform(269.8,31.5,1.456,1.456);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#585B5C").s().p("AA/FkIiGrHIAHABICILGg");
	this.shape_118.setTransform(280.8,-5,1.456,1.456);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AhcleIAqgKICPLGIg0ALg");
	this.shape_119.setTransform(278,-3.8,1.456,1.456);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#AEB1B1").s().p("AAbDtQgwiJgYhhQgYhgAAiNIAGh5ICFLHQgTgygYhFg");
	this.shape_120.setTransform(273.8,-3.1,1.456,1.456);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B7BBC1").s().p("AgEh9IAVDbIghAgg");
	this.shape_121.setTransform(169.6,44.4,1.456,1.456);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4E5153").s().p("AgNB/QgIAAgGgGQgGgFAAgJIAAjZQAAgGAEgFQAFgEAGgBIAgAAQAIAAAGAFQAGAGAAAIIAADYQAAARgFABg");
	this.shape_122.setTransform(202.8,42.5,1.456,1.456);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4E5153").s().p("AgKALQgEgFAAgGQAAgGAEgEQAEgEAGAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_123.setTransform(229.3,59.7,1.456,1.456);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_124.setTransform(229.6,54.5,1.456,1.456);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_125.setTransform(229.6,49.8,1.456,1.456);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#4E5153").s().p("AgLAKQgIABAAgJIAAgDQAAgJAIABIAWAAQAEgBACADQADACAAAEIAAADQAAAEgDACQgCADgEgBg");
	this.shape_126.setTransform(229.6,45,1.456,1.456);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4E5153").s().p("AgLALQgIAAAAgIIAAgEQAAgEADgCQACgDADAAIAWAAQAEAAACADQADACAAAEIAAAEQAAADgDACQgCADgEAAg");
	this.shape_127.setTransform(229.6,40.4,1.456,1.456);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgCgCgBgEIAAgEQAAgIAIAAIAXAAQAHAAAAAIIAAAEQAAAEgCACQgCADgDAAg");
	this.shape_128.setTransform(222.5,54.5,1.456,1.456);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgCgCgBgEIAAgEQAAgIAIAAIAXAAQAHAAAAAIIAAAEQAAAEgCACQgCADgDAAg");
	this.shape_129.setTransform(222.5,49.8,1.456,1.456);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#4E5153").s().p("AgLAKQgIABAAgJIAAgDQAAgJAIABIAXAAQAHgBAAAJIAAADQAAAJgHgBg");
	this.shape_130.setTransform(222.5,45,1.456,1.456);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#4E5153").s().p("AgLALQgIAAAAgIIAAgEQABgEACgCQACgDADAAIAXAAQADAAACADQACACAAAEIAAAEQAAAIgHAAg");
	this.shape_131.setTransform(222.5,40.4,1.456,1.456);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_132.setTransform(215.4,54.5,1.456,1.456);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4E5153").s().p("AgLALQgDAAgCgDQgDgCAAgEIAAgEQAAgIAIAAIAWAAQAEAAACADQADACAAADIAAAEQAAAEgDACQgCADgEAAg");
	this.shape_133.setTransform(215.4,49.8,1.456,1.456);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#4E5153").s().p("AgLAKQgIABAAgJIAAgDQAAgJAIABIAWAAQAEgBACADQADACAAAEIAAADQAAAEgDACQgCADgEgBg");
	this.shape_134.setTransform(215.4,45,1.456,1.456);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4E5153").s().p("AgLALQgIAAAAgIIAAgEQAAgEADgCQACgDADAAIAWAAQAEAAACADQADACAAAEIAAAEQAAADgDACQgCADgEAAg");
	this.shape_135.setTransform(215.4,40.4,1.456,1.456);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#4E5153").s().p("Ag4AWQgHAAgFgFQgEgEAAgHIAAgLQAAgHAEgEQAFgFAHAAIBxAAQAHAAAFAFQAEAEAAAHIAAALQAAAHgEAEQgFAFgHAAg");
	this.shape_136.setTransform(222.9,34.7,1.456,1.456);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#24272A").s().p("AioCCIgCgJIAAivIAAggQgBgiADgHQADgGALgCIAKAAICAAAQCEAAAWgCQAWgBAHAMQAEAGgBAGQACDKgCAaQgBARgJAFIgKACIkrAAIgCAAQgNAAgEgIg");
	this.shape_137.setTransform(216.2,42.8,1.456,1.456);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C4B49B").s().p("ALUGlIkZsQIt1AAIkZMQIguAAICHsQIAAg5IT2AAIAAA5ICGMQg");
	this.shape_138.setTransform(224.6,131.3,1.456,1.456);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#DED0BE").s().p("AtzAnIAAhOIbnAAIAABOg");
	this.shape_139.setTransform(228.1,64.2,1.456,1.456);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E62F33").s().p("AgwAmQgEgwAIgfIARADQAUACASgCQAdgBAFgCIADAaQADAdgCAYQgcAEgYAAQgYAAgVgEg");
	this.shape_140.setTransform(304.9,31.5,1.456,1.456);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2A1213").s().p("AghCaQgMgEgBgVIAAgXQACgGABgHQAEgPgGgZQgHgmAIhPQABgGAHgNIANgYQAIgOgCgZIgEAAIAAgHIArAAIAAAHIgFAAIABAOQABAQAFAJIAMAYQAJANAAAGQAIBPgIAmQgEAZACAPQACAHACAGIAAAXQgCAVgLAEg");
	this.shape_141.setTransform(304.9,35,1.456,1.456);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E62F33").s().p("AgWAKIAAgQIABgBQABgBAGAAIAgAAIADAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAPg");
	this.shape_142.setTransform(304.9,10.8,1.456,1.456);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.2,-93,559.1,310.7);


(lib.mc7t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_243 = function() {
		this.stop();
		/*
			Los siguientes comandos ya no se necesitan
			//parent.siguiente_verde();
			//parent.comando("terminar");
			
			Ahora basta con utilizar la siguiente funcion:
			parent.final_tema();
		*/
		
		parent.final_tema();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(243).call(this.frame_243).wait(1));

	// interrogacion mueve
	this.instance = new lib.interrogamover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.1,40.4,0.419,0.419,0,0,0,15.4,21.7);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.63,scaleY:1.63,alpha:1},7).to({scaleX:1,scaleY:1},7).to({x:759.6},35).to({_off:true},1).wait(194));

	// tapa circulo
	this.instance_1 = new lib.tapabca2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(520.8,47.2,2.76,0.467,0,0,0,106.8,44.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:107.4,scaleX:2.12,x:999.4},41,cjs.Ease.get(1)).to({_off:true},1).wait(183));

	// pregunta 3
	this.text = new cjs.Text("¿Cuáles son los beneficios de gestionar el talento?", "bold 25px 'Arial'", "#990000");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 794;
	this.text.parent = this;
	this.text.setTransform(456.3,28.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(19).to({_off:false},0).wait(225));

	// TIP
	this.info = new lib.tiprecuerdamod3mc2();
	this.info.parent = this;
	this.info.setTransform(443.2,319);
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(232).to({_off:false},0).wait(12));

	// bullet 7 ultimo mc
	this.instance_2 = new lib.bullet7ultimomc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(634.7,348.8,1,1,0,0,0,376.9,11.5);
	this.instance_2.alpha = 0.148;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).to({x:734.7,alpha:1},22,cjs.Ease.get(1)).wait(12));

	// bullet6 ultimo mc
	this.instance_3 = new lib.bullet6ultimomc("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(628.3,309.1,1,1,0,0,0,370.5,36.1);
	this.instance_3.alpha = 0.148;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).to({x:728.3,alpha:1},21,cjs.Ease.get(1)).wait(34));

	// bullet5 ultimo mc
	this.instance_4 = new lib.bullet5ultimomc("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(645.2,268.5,1,1,0,0,0,387.4,25.5);
	this.instance_4.alpha = 0.148;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(169).to({_off:false},0).to({x:745.2,alpha:1},20,cjs.Ease.get(1)).wait(55));

	// bullet4 ultimo mc
	this.instance_5 = new lib.bullet4ultimomc("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(639.4,231.3,1,1,0,0,0,381.6,18.9);
	this.instance_5.alpha = 0.148;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({_off:false},0).to({x:739.4,alpha:1},19,cjs.Ease.get(1)).wait(75));

	// bullet 3 ultimo mc
	this.instance_6 = new lib.bullet3ultimomc("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(632.6,189.9,1,1,0,0,0,374.8,25.5);
	this.instance_6.alpha = 0.148;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130).to({_off:false},0).to({x:732.6,alpha:1},19,cjs.Ease.get(1)).wait(95));

	// bullet2 ultimo mc
	this.instance_7 = new lib.bullet2ultimomc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(645.2,156.9,1,1,0,0,0,387.4,22.2);
	this.instance_7.alpha = 0.148;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110).to({_off:false},0).to({x:745.2,alpha:1},19,cjs.Ease.get(1)).wait(115));

	// bullet1 ultimo mc
	this.instance_8 = new lib.bullet1ultimomc("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(632.6,109.2,1,1,0,0,0,374.8,25.3);
	this.instance_8.alpha = 0.148;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(91).to({_off:false},0).to({x:732.6,alpha:1},19,cjs.Ease.get(1)).wait(134));

	// ilustra
	this.instance_9 = new lib.rh3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(374.7,226.7,1.312,1.312,0,0,0,125.1,82);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73).to({_off:false},0).to({x:277.7,y:205.4,alpha:1},18,cjs.Ease.get(1)).wait(153));

	// ventana 3
	this.instance_10 = new lib.ventana3mod1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(446.7,106.1,1,1,0,0,0,370.1,28.4);
	this.instance_10.alpha = 0.07;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73).to({_off:false},0).to({y:58.6,alpha:1},18,cjs.Ease.get(1)).wait(153));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-131.8,477.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(244));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-36,710.2,531.7);


(lib.mc6t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_228 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(228).call(this.frame_228).wait(1));

	// interrogacion mueve
	this.instance = new lib.interrogamover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(226.1,40.4,0.419,0.419,0,0,0,15.4,21.7);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.63,scaleY:1.63,alpha:1},7).to({scaleX:1,scaleY:1},7).to({x:759.6},35).to({_off:true},1).wait(179));

	// ilustra
	this.instance_1 = new lib.ilustracion2222("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.7,145.4,1.312,1.312,0,0,0,125.1,82);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).to({y:205.4,alpha:1},18,cjs.Ease.get(1)).wait(138));

	// tapa circulo
	this.instance_2 = new lib.tapabca2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(539.7,47.2,2.375,0.467,0,0,0,106.8,44.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:107.4,scaleX:2.12,x:972.9},38,cjs.Ease.get(1)).to({_off:true},1).wait(171));

	// pregunta 2
	this.text = new cjs.Text("¿Cuáles son las actividades clave del proceso?", "bold 25px 'Arial'", "#990000");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 794;
	this.text.parent = this;
	this.text.setTransform(466,28.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(19).to({_off:false},0).wait(210));

	// bullet6 ultimo mc
	this.instance_3 = new lib.bullet6penultimomc111("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(628.3,349.1,1,1,0,0,0,370.5,36.1);
	this.instance_3.alpha = 0.148;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).to({x:728.3,alpha:1},21,cjs.Ease.get(1)).wait(19));

	// bullet5 ultimo mc
	this.instance_4 = new lib.bullet5penultimomc111("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(645.2,298.5,1,1,0,0,0,387.4,25.5);
	this.instance_4.alpha = 0.148;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(169).to({_off:false},0).to({x:745.2,alpha:1},20,cjs.Ease.get(1)).wait(40));

	// bullet4 ultimo mc
	this.instance_5 = new lib.bullet4penultimomc("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(639.4,251.3,1,1,0,0,0,381.6,18.9);
	this.instance_5.alpha = 0.148;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150).to({_off:false},0).to({x:739.4,alpha:1},19,cjs.Ease.get(1)).wait(60));

	// bullet 3 ultimo mc
	this.instance_6 = new lib.bullet3penultimomc("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(632.6,209.9,1,1,0,0,0,374.8,25.5);
	this.instance_6.alpha = 0.148;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(130).to({_off:false},0).to({x:732.6,alpha:1},19,cjs.Ease.get(1)).wait(80));

	// bullet2 ultimo mc
	this.instance_7 = new lib.bullet2penultimomc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(645.2,176.9,1,1,0,0,0,387.4,22.2);
	this.instance_7.alpha = 0.148;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110).to({_off:false},0).to({x:745.2,alpha:1},19,cjs.Ease.get(1)).wait(100));

	// bullet1 ultimo mc
	this.instance_8 = new lib.bullet1penultimomc("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(632.6,109.2,1,1,0,0,0,374.8,25.3);
	this.instance_8.alpha = 0.148;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(91).to({_off:false},0).to({x:732.6,alpha:1},19,cjs.Ease.get(1)).wait(119));

	// ventana2
	this.instance_9 = new lib.ventana1mod1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(446.7,106.1,1,1,0,0,0,370.1,28.4);
	this.instance_9.alpha = 0.07;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73).to({_off:false},0).to({y:58.6,alpha:1},18,cjs.Ease.get(1)).wait(138));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-131.8,477.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(228));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,31.3,381.8,464.4);


(lib.mc5t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// flecha mueve
	this.instance = new lib.interrogamover("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(226.1,40.4,0.419,0.419,0,0,0,15.4,21.7);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.63,scaleY:1.63,alpha:1},6).to({scaleX:1,scaleY:1},7).to({x:701.1},35).to({_off:true},1).wait(61));

	// tapa circulo
	this.instance_1 = new lib.tapabca2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(479.7,47.2,2.375,0.467,0,0,0,106.8,44.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({regX:106.9,scaleX:0.08,x:723.7},39,cjs.Ease.get(1)).to({_off:true},1).wait(52));

	// pregunta1
	this.text = new cjs.Text("¿En qué consiste la gestión de talento?", "bold 25px 'Arial'", "#990000");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 794;
	this.text.parent = this;
	this.text.setTransform(475.5,28.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(18).to({_off:false},0).wait(92));

	// respuesta1
	this.instance_2 = new lib.txtprimertextogde("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(556.7,259.9,1,1,0,0,0,249.6,114.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(80).to({_off:false},0).to({x:606.7,alpha:1},14,cjs.Ease.get(1)).wait(16));

	// ilustra
	this.instance_3 = new lib.rh1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(264.7,166.7,1.312,1.312,0,0,0,125.1,82);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({y:206.7,alpha:1},16,cjs.Ease.get(1)).wait(30));

	// ventana1
	this.instance_4 = new lib.ventana1mod1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(446.7,106.1,1,1,0,0,0,370.1,28.4);
	this.instance_4.alpha = 0.07;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({y:63.6,alpha:1},18,cjs.Ease.get(1)).wait(30));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-131.8,477.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-36,710.2,531.7);


(lib.mc4t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		this.stop();
		console.log("termina timeline se inician los checkbox");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// txt
	this.text = new cjs.Text("¿Qué recomiendas hacer para asegurar que tenemos el talento listo y adecuado ahora que Andrea se va?", "17px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 323;
	this.text.parent = this;
	this.text.setTransform(208.9,59.6);

	this.text_1 = new cjs.Text("¡Hola! ¡Qué bueno que llegas! ", "17px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 331;
	this.text_1.parent = this;
	this.text_1.setTransform(207.6,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},49).wait(61));

	// dialogos
	this.instance = new lib.globodialogo2bcambio();
	this.instance.parent = this;
	this.instance.setTransform(76.3,137,0.617,0.617,0,0,180,128.2,141.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({y:117,alpha:1},11,cjs.Ease.get(1)).wait(61));

	// ACTIVIDAD
	this.instance_1 = new lib.Actividad_checkbox();
	this.instance_1.parent = this;
	this.instance_1.setTransform(945.7,297.7,0.958,1.059,0,0,0,480.3,245.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(61));

	// instrucciones
	this.instance_2 = new lib.instruccionesmc4t1TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(536,59.9,1,1,0,0,0,95.7,21.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).wait(61));

	// escenario1
	this.instance_3 = new lib.escenario4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(437,147.2,1,1,0,0,0,474.2,187.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({regX:474.1,scaleX:1.03,scaleY:1.03,x:457,y:176,alpha:0.719},8,cjs.Ease.get(1)).to({regX:474.2,scaleX:1.03,scaleY:1.03,y:187.3,alpha:1},10).to({scaleX:1,scaleY:1,y:187.2},11).wait(73));

	// personajes1
	this.instance_4 = new lib.personajes4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(450.9,480.9,0.875,0.875,0,0,0,248.9,140.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({regX:249,scaleX:1,scaleY:1,y:380.9,alpha:1},10,cjs.Ease.get(1)).to({regX:248.9,scaleX:0.88,scaleY:0.88},7,cjs.Ease.get(1)).wait(77));

	// Fondo_oficina_1
	this.instance_5 = new lib.Fondo_oficina_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(454,433.5,1.063,1.022,0,0,0,476.8,273.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:476.9,scaleX:1.04,scaleY:1,y:273.5,alpha:1},8,cjs.Ease.get(1)).to({regY:273.4,scaleX:1.16,scaleY:1.11,x:454.1,y:273.4},14,cjs.Ease.get(1)).to({regY:273.5,scaleX:1.04,scaleY:1,x:454,y:273.5},7,cjs.Ease.get(1)).wait(81));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-131.8,477.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-36,1095.2,669.5);


(lib.instrucciones1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(1));

	// flecha 
	this.instance = new lib.flechainstrucciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.4,13.9);
	this.instance.alpha = 0.07;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:-9.5,y:13.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(48));

	// circulo1
	this.instance_1 = new lib.circulo1instrucciones("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31.4,13.2,0.215,0.215);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:105.2,regY:10.2,scaleX:1,scaleY:1,x:-8.1,y:15.4,alpha:1},5,cjs.Ease.get(1)).to({_off:true},20).wait(48));

	// circulo2
	this.instance_2 = new lib.circulo2instrucciones("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,14.3,0.368,0.368,0,0,0,14.3,14.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:14.2,regY:14.2,scaleX:1.26,scaleY:1.26},6,cjs.Ease.get(1)).to({regX:14.1,scaleX:1.65,scaleY:1.65,x:-8.8,y:14.4,alpha:0},4,cjs.Ease.get(1)).to({_off:true},10).wait(48));

	// circulo3
	this.instance_3 = new lib.circulo2instrucciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.8,14.2,1,1,0,0,0,14.2,14.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},14).wait(48));

	// flecha mueve
	this.instance_4 = new lib.flechamueve("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8.7,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(5).to({x:8},0).to({x:345.3},37).wait(6));

	// tapa circulo
	this.instance_5 = new lib.tapakakigeneral("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(3089.7,91.6,29.217,2.053,0,0,0,106.8,44.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({scaleX:2.35,x:580.5},42,cjs.Ease.get(1)).wait(1));

	// Instruccion
	this.text = new cjs.Text("Haz clic sobre cada diálogo para avanzar.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(-14.4,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-9.3,241,52);


(lib.mc3t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dialogo 3a":121,"dialogo 3b":131,"dialogo 3c":153,"dialogo 3d":174});

	// timeline functions:
	this.frame_130 = function() {
		this.stop();
		var raiz = this;
		raiz.e3d1.cursor="pointer";
		raiz.e3d1.addEventListener("click",function(c){
		raiz.play();	
			});
	}
	this.frame_152 = function() {
		this.stop();
		var raiz = this;
		raiz.e3d2.cursor="pointer";
		raiz.e3d2.addEventListener("click",function(c){
		raiz.play();	
			});
	}
	this.frame_173 = function() {
		this.stop();
		var raiz = this;
		raiz.e3d3.cursor="pointer";
		raiz.e3d3.addEventListener("click",function(c){
		raiz.play();	
			});
	}
	this.frame_195 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(130).call(this.frame_130).wait(22).call(this.frame_152).wait(21).call(this.frame_173).wait(22).call(this.frame_195).wait(1));

	// botones invisibles dialogos
	this.e3d1 = new lib.e3buttons();
	this.e3d1.parent = this;
	this.e3d1.setTransform(368.4,104.3,1,1,0,0,0,134.8,57.8);

	this.e3d2 = new lib.e3buttons2();
	this.e3d2.parent = this;
	this.e3d2.setTransform(508.9,119.6,1.627,1,0,0,0,135.6,55.4);

	this.e3d3 = new lib.e3buttons3();
	this.e3d3.parent = this;
	this.e3d3.setTransform(366.2,81.2,1,1,0,0,0,134.8,53);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(76,76,76,0)").ss(1,1,1).p("A1DoRMAqHAAAIAAQjMgqHAAAg");
	this.shape.setTransform(366.2,81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.e3d1}]},130).to({state:[]},1).to({state:[{t:this.e3d2}]},21).to({state:[]},1).to({state:[{t:this.shape},{t:this.e3d3}]},20).to({state:[]},1).wait(22));

	// txt
	this.text = new cjs.Text("...inesperada noticia la salida de Andrea. ¿Ya tienes sucesores en mente?", "17px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(366.4,71.1);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(130).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false,x:508.4,y:76.9,text:"Sí, una sorpresa. Ahora necesito tu ayuda. La verdad, no conozco al equipo de trabajo a profundidad. ¡No tengo elementos para proponer quien ocupe su lugar!...",lineHeight:20,lineWidth:380},0).to({_off:true},1).wait(20).to({_off:false,x:371.2,y:44.8,text:"Según recuerdo, necesitamos revisar al desempeño histórico, sus comportamientos, y su potencial para crecer…",lineHeight:19,lineWidth:244},0).to({_off:true},1).wait(21).to({_off:false,x:527.4,y:103.1,text:"Sí pero ¿Por dónde empiezo…?",lineWidth:358},0).wait(1));

	// botones dialogo parpadea
	this.instance = new lib.botondialogos();
	this.instance.parent = this;
	this.instance.setTransform(503.9,144.9,1.482,1,0,0,180,143,95);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.botondialogos(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152).to({_off:false},0).to({_off:true},1).wait(20).to({_off:false,regX:143.1,scaleX:0.96,skewY:0,x:371.7,y:110.8},0).to({_off:true},1).wait(21).to({_off:false,regX:142.8,regY:95.3,scaleX:1.18,scaleY:0.96,skewY:180,x:519.3,y:137.3},0).wait(1));

	// dialogos
	this.instance_1 = new lib.globodialogo2b();
	this.instance_1.parent = this;
	this.instance_1.setTransform(207.3,149,0.617,0.617,0,0,180,128.2,141.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.globodialogo3cambio();
	this.instance_2.parent = this;
	this.instance_2.setTransform(580.6,196.1,0.617,0.617,0,0,0,128.2,141.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.globodialogo5cambio();
	this.instance_3.parent = this;
	this.instance_3.setTransform(589.6,156,0.617,0.617,0,0,0,128.2,141.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({y:137,alpha:1},9,cjs.Ease.get(1)).to({y:129,alpha:0},10,cjs.Ease.get(1)).to({_off:true,skewY:0,x:580.6,y:196.1},1,cjs.Ease.get(1)).wait(22).to({_off:false,skewY:180,x:207.3,y:129},1).to({y:117,alpha:1},9,cjs.Ease.get(1)).to({y:129,alpha:0},10,cjs.Ease.get(1)).to({_off:true,skewY:0,x:589.6,y:156},1,cjs.Ease.get(1)).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(140).to({_off:false},1,cjs.Ease.get(1)).to({y:206.1,alpha:1},11).to({y:196.1,alpha:0},11,cjs.Ease.get(1)).to({_off:true,skewY:180,x:207.3,y:129},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(183).to({_off:false},1,cjs.Ease.get(1)).to({y:172,alpha:1},11).wait(1));

	// instrucciones
	this.instance_4 = new lib.instrucciones1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(646,21.8,1,1,0,0,0,95.7,21.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({_off:true},142).wait(12));

	// escenario1
	this.instance_5 = new lib.escenario3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(437,147.2,1,1,0,0,0,474.2,187.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({regX:474.1,scaleX:1.03,scaleY:1.03,x:457,y:176,alpha:0.719},8,cjs.Ease.get(1)).to({regX:474.2,scaleX:1.04,scaleY:1.04,y:187.2,alpha:1},9).to({scaleX:1.03,scaleY:1.03,y:187.3},1,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:187.2},11).wait(159));

	// personajes1
	this.instance_6 = new lib.personajes3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(450.9,480.9,0.875,0.875,0,0,0,248.9,140.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off:false},0).to({regX:249,scaleX:1,scaleY:1,y:380.9,alpha:1},10,cjs.Ease.get(1)).to({regX:248.9,scaleX:0.88,scaleY:0.88},7,cjs.Ease.get(1)).wait(163));

	// Fondo_oficina_1
	this.instance_7 = new lib.Fondo_oficina_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(454,433.5,1.063,1.022,0,0,0,476.8,273.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:476.9,scaleX:1.04,scaleY:1,y:273.5,alpha:1},8,cjs.Ease.get(1)).to({regY:273.4,scaleX:1.16,scaleY:1.11,x:454.1,y:273.4},14,cjs.Ease.get(1)).to({regY:273.5,scaleX:1.04,scaleY:1,x:454,y:273.5},7,cjs.Ease.get(1)).wait(167));

	// guia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape_1.setTransform(-131.8,477.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(196));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-36,1095.2,669.5);


(lib.mc2t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dialogo 2a":121,"dialogo 2b":131,"dialogo 2c":153});

	// timeline functions:
	this.frame_130 = function() {
		this.stop();
		var raiz=this;
		raiz.e2d1.cursor = "pointer";
		raiz.e2d1.addEventListener("click",function(c){
			raiz.play();
			});
	}
	this.frame_152 = function() {
		this.stop();
		var raiz=this;
		raiz.e2d2.cursor = "pointer";
		raiz.e2d2.addEventListener("click",function(c){
			raiz.play();
			});
	}
	this.frame_175 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(130).call(this.frame_130).wait(22).call(this.frame_152).wait(23).call(this.frame_175).wait(1));

	// botones invisibles dialogo
	this.e2d1 = new lib.e2buttons();
	this.e2d1.parent = this;
	this.e2d1.setTransform(349.3,103.6,1,1,0,0,0,140.4,56.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(76,76,76,0)").ss(1,1,1).p("A17oxMAr3AAAIAARjMgr3AAAg");
	this.shape.setTransform(349.3,103.6);

	this.e2d2 = new lib.e2buttons2();
	this.e2d2.parent = this;
	this.e2d2.setTransform(409.1,103.6,1.437,1.275,0,0,0,142,54.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(76,76,76,0)").ss(1,1,1).p("A/wqyMA/hAAAIAAVlMg/hAAAg");
	this.shape_1.setTransform(409.2,103.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.e2d1}]},130).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.e2d2}]},21).to({state:[]},1).wait(23));

	// txt
	this.text = new cjs.Text("Hola Paco, buen día. Acaba de salir Andrea de mi oficina. Vino a avisarme que dentro de un mes deja la empresa. Le ofrecieron una posición en el extranjero...", "17px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(353.3,51.2);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(130).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false,x:407.9,y:61.8,text:"Además de avisarte, necesito ayuda para recordar el proceso de selección de talento. No tengo claro si existe talento interno preparado para tomar esa posición...",lineHeight:20,lineWidth:352},0).to({_off:true},1).wait(22).to({_off:false,x:581.4,y:101,text:"De acuerdo, te veo en tu oficina más tarde. Gracias.",lineHeight:19,lineWidth:208},0).wait(1));

	// botones dialogo
	this.instance = new lib.botondialogose2d1();
	this.instance.parent = this;
	this.instance.setTransform(353.5,129,1,1,0,0,0,143,95);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.botondialogose2d1(), 3);

	this.instance_1 = new lib.botondialogose2d2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(413.4,146.3,1.485,1.43,0,0,0,143.1,95);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.botondialogose2d2(), 3);

	this.instance_2 = new lib.botondialogos();
	this.instance_2.parent = this;
	this.instance_2.setTransform(579.5,149,1,1,0,0,0,143,95);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.botondialogos(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},130).to({state:[]},1).to({state:[{t:this.instance_1}]},21).to({state:[]},1).to({state:[{t:this.instance_2}]},22).wait(1));

	// dialogos
	this.instance_3 = new lib.globodialogo2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(460.6,186.1,0.617,0.617,0,0,0,128.2,141.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.globodialogo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(460.6,186.1,0.617,0.617,0,0,0,128.2,141.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.globodialogo2c();
	this.instance_5.parent = this;
	this.instance_5.setTransform(460.6,186.1,0.617,0.617,0,0,0,128.2,141.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.globodialogo2b();
	this.instance_6.parent = this;
	this.instance_6.setTransform(416.4,187.1,0.617,0.617,0,0,180,128.2,141.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121).to({_off:false},0).to({y:166.1,alpha:1},9).to({_off:true,y:186.1,alpha:0},10,cjs.Ease.get(1)).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(130).to({_off:false},10,cjs.Ease.get(1)).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},1).to({y:166.1,alpha:1},11).to({y:186.1,alpha:0},11,cjs.Ease.get(1)).to({_off:true,skewY:180,x:416.4,y:187.1},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(163).to({_off:false},1).to({y:157.1,alpha:1},11,cjs.Ease.get(1)).wait(1));

	// instrucciones
	this.instance_7 = new lib.instrucciones1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(646,28.8,1,1,0,0,0,95.7,21.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({_off:true},133).wait(1));

	// escenario1
	this.instance_8 = new lib.escenario2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(437,147.2,1,1,0,0,0,474.2,187.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({regX:474.1,scaleX:1.03,scaleY:1.03,x:457,y:176,alpha:0.719},8,cjs.Ease.get(1)).to({regX:474.2,scaleX:1.04,scaleY:1.04,y:187.2,alpha:1},9).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).wait(139));

	// personajes1
	this.instance_9 = new lib.personaje2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(450.9,480.9,0.875,0.875,0,0,0,248.9,140.3);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({regX:249,scaleX:1,scaleY:1,y:380.9,alpha:1},10,cjs.Ease.get(1)).to({regX:248.9,scaleX:0.88,scaleY:0.88},7,cjs.Ease.get(1)).wait(143));

	// Fondo_oficina_1
	this.instance_10 = new lib.Fondo_oficina_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(454,433.5,1.063,1.022,0,0,0,476.8,273.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:476.9,scaleX:1.04,scaleY:1,y:273.5,alpha:1},8,cjs.Ease.get(1)).to({regY:273.4,scaleX:1.16,scaleY:1.11,x:454.1,y:273.4},14,cjs.Ease.get(1)).to({regY:273.5,scaleX:1.04,scaleY:1,x:454,y:273.5},7,cjs.Ease.get(1)).wait(147));

	// guia
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape_2.setTransform(-131.8,477.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-36,1095.2,669.5);


(lib.mc1t1TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"dialogo 1a":221,"dialogo 1b":231,"dialogo 1c":253,"dialogo 1d":274,"dialogo 1e":294});

	// timeline functions:
	this.frame_230 = function() {
		this.stop();
		var raiz = this;
		raiz.brillom1.alpha = 0;
		raiz.brilloh1.alpha = 100;
		raiz.e1d1.cursor ="pointer";
		raiz.e1d1.addEventListener("click",function (c){
			console.log("evento llamado");
			raiz.play();
			raiz.brilloh1.alpha = 0;
			});
	}
	this.frame_252 = function() {
		this.stop();
		var raiz = this;
		raiz.e1d2.cursor ="pointer";
		raiz.e1d2.addEventListener("click",function (c){
			console.log("evento llamado");
			raiz.play();
			raiz.brillom2.alpha = 0;
			});
	}
	this.frame_273 = function() {
		this.stop();
		var raiz = this;
		
		raiz.e1d3.cursor ="pointer";
		raiz.e1d3.addEventListener("click",function (c){
			console.log("evento llamado");
			raiz.play();
			raiz.brilloh3.alpha = 0;
			});
	}
	this.frame_293 = function() {
		this.stop();
		var raiz = this;
		
		raiz.e1d4.cursor ="pointer";
		raiz.e1d4.addEventListener("click",function (c){
			console.log("evento llamado");
			raiz.play();
			//raiz.brilloh4.alpha = 0;
			});
	}
	this.frame_309 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(230).call(this.frame_230).wait(22).call(this.frame_252).wait(21).call(this.frame_273).wait(20).call(this.frame_293).wait(16).call(this.frame_309).wait(1));

	// Botones invisibles Dialogos
	this.e1d1 = new lib.e1Buttos();
	this.e1d1.parent = this;
	this.e1d1.setTransform(490.8,128.2,1,1,0,0,0,142.7,53.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0)").ss(1,1,1).p("A2SoZMAslAAAIAAQzMgslAAAg");
	this.shape.setTransform(490.8,128.1);

	this.e1d2 = new lib.e1buttons2();
	this.e1d2.parent = this;
	this.e1d2.setTransform(384.6,108.5,1,1,0,0,0,140.4,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(51,51,51,0)").ss(1,1,1).p("A17pAMAr3AAAIAASCMgr3AAAg");
	this.shape_1.setTransform(384.6,108.5);

	this.e1d3 = new lib.e1buttons3();
	this.e1d3.parent = this;
	this.e1d3.setTransform(488.1,138.6,1,1,0,0,0,142.8,55.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0)").ss(1,1,1).p("A2TopMAsnAAAIAARTMgsnAAAg");
	this.shape_2.setTransform(488.1,128.5);

	this.e1d4 = new lib.e1buttons4();
	this.e1d4.parent = this;
	this.e1d4.setTransform(384.6,108.5,1,1,0,0,0,140.4,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.e1d1}]},230).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.e1d2}]},21).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.e1d3}]},20).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.e1d4}]},19).to({state:[]},1).wait(16));

	// Brillo Mujer
	this.brillom1 = new lib.botondialogos();
	this.brillom1.parent = this;
	this.brillom1.setTransform(492.5,168,1,1,0,0,0,143,95);
	new cjs.ButtonHelper(this.brillom1, 0, 1, 2, false, new lib.botondialogos(), 3);

	this.brillom2 = new lib.botondialogose1d2();
	this.brillom2.parent = this;
	this.brillom2.setTransform(384.5,139,1,1.092,0,0,180,143,95);
	new cjs.ButtonHelper(this.brillom2, 0, 1, 2, false, new lib.botondialogose1d2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.brillom1}]},230).to({state:[]},1).to({state:[{t:this.brillom2}]},21).to({state:[]},1).wait(57));

	// Brillo Hombre
	this.brilloh1 = new lib.botondialogos();
	this.brilloh1.parent = this;
	this.brilloh1.setTransform(492.5,168,1,1,0,0,0,143,95);
	new cjs.ButtonHelper(this.brilloh1, 0, 1, 2, false, new lib.botondialogos(), 3);

	this.brilloh3 = new lib.botondialogose1d3();
	this.brilloh3.parent = this;
	this.brilloh3.setTransform(492.5,178,1,1,0,0,0,143,95);
	new cjs.ButtonHelper(this.brilloh3, 0, 1, 2, false, new lib.botondialogose1d3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.brilloh1}]},230).to({state:[]},1).to({state:[{t:this.brilloh3,p:{x:492.5,y:178}}]},42).to({state:[]},1).to({state:[{t:this.brilloh3,p:{x:389.2,y:162}}]},19).to({state:[]},1).wait(16));

	// txt
	this.text = new cjs.Text("...por una parte me da gusto que aproveches la oportunidad que se te presenta Andrea, aunque por otra lamento que dejes la organización…", "17px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(494.4,93.6);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(230).to({_off:false},0).to({_off:true},1).wait(21).to({_off:false,x:383.8,y:53,text:"…no lo esperaba Ramiro, no me imaginé que algún día tendría que emigrar de mi país, pero se presentó esta oportunidad de trabajo y he decidido aprovecharla...",lineWidth:261},0).to({_off:true},1).wait(20).to({_off:false,x:495.9,y:107.6,text:"Bien Andrea, ¿Qué fecha estimas dejarás el puesto?...",lineWidth:251},0).to({_off:true},1).wait(19).to({_off:false,x:383.8,y:62,text:"...en un mes Ramiro. Haré todo lo posible para dejar terminados los pendientes y organizado lo demás para entregar el puesto a quien tú me indiques. ¿Te parece bien?...",lineWidth:261},0).to({_off:true},1).wait(15).to({_off:false,x:490.9,y:94.6,text:"De acuerdo, permíteme notificar tu decisión e iniciar el proceso de tu salida y reemplazo. Te veo más tarde para afinar detalles. Gracias Andrea.",lineWidth:251},0).wait(1));

	// dialogos
	this.instance = new lib.globodialogo();
	this.instance.parent = this;
	this.instance.setTransform(460.6,196.1,0.617,0.617,0,0,0,128.2,141.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(221).to({_off:false},0).to({y:176.1,alpha:1},9).to({y:196.1,alpha:0},10,cjs.Ease.get(1)).to({skewY:180,x:416.4,y:167.1},1).to({y:147.1,alpha:1},11,cjs.Ease.get(1)).to({y:167.1,alpha:0},11,cjs.Ease.get(1)).to({skewY:0,x:460.6,y:196.1},1,cjs.Ease.get(1)).to({y:176.1,alpha:1},9).to({y:196.1,alpha:0},10,cjs.Ease.get(1)).to({skewY:180,x:416.4,y:167.1},1).to({y:147.1,alpha:1},9,cjs.Ease.get(1)).to({y:167.1,alpha:0},10,cjs.Ease.get(1)).to({skewY:0,x:460.6,y:196.1},1,cjs.Ease.get(1)).to({y:176.1,alpha:1},5).wait(1));

	// instrucciones
	this.instance_1 = new lib.instrucciones1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(646,28.8,1,1,0,0,0,95.7,21.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(142).to({_off:false},0).to({_off:true},167).wait(1));

	// escenario1
	this.instance_2 = new lib.escenario1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(457,147.2,1,1,0,0,0,474.2,187.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(108).to({_off:false},0).to({scaleX:1.04,scaleY:1.04,y:187.2,alpha:1},17,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(1)).wait(173));

	// personajes1
	this.instance_3 = new lib.personajes1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(432.8,363.9,1,1,0,0,0,248.8,140.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116).to({_off:false},0).to({regX:249,regY:140.4,scaleX:0.94,scaleY:0.94,x:431,y:310},10,cjs.Ease.get(1)).to({regX:248.9,regY:140.3,scaleX:0.88,scaleY:0.88,x:430.9,y:320.9},7,cjs.Ease.get(1)).wait(177));

	// Fondo_oficina_1
	this.instance_4 = new lib.Fondo_oficina_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(454,393.6,1.212,1.166,0,0,0,476.9,273.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).to({scaleX:1.04,scaleY:1,y:273.5,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1.09,scaleY:1.05},14,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1},7,cjs.Ease.get(1)).wait(181));

	// guia
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape_3.setTransform(-131.8,477.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(310));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.2,-36,710.2,531.7);


// stage content:
(lib.AC_TMR_M01_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		// parent.comando("iniciar",this); deprecated v1 template
		/*
			Nuevo comando para iniciar tema en version 2 del template
			Ya no existe la funcion "comando" basta con iniciar el 
			tema normalmente.
			
			parent: es el start.js donde se encuentra toda la 
					funcionalidad del template.
					
			this: Es la instancia del canvas de este tema, hay que
				  enviarselo a la funcion para controlar el canvas 
				  desde el start.js
				  
			esta instruccion debe ir en cada tema en el 1er frame.
		*/
		parent.iniciar_tema(this);
	}
	this.frame_1 = function() {
		this.stop();
		//////parent.comando("resetear"); //Ya no se necesita //Ya no se necesita //Ya no se necesita
	}
	this.frame_2 = function() {
		this.stop();
		//////parent.comando("resetear"); //Ya no se necesita //Ya no se necesita //Ya no se necesita
	}
	this.frame_3 = function() {
		this.stop();
		////parent.comando("resetear"); //Ya no se necesita //Ya no se necesita
	}
	this.frame_4 = function() {
		this.stop();
		////parent.comando("resetear"); //Ya no se necesita //Ya no se necesita
	}
	this.frame_5 = function() {
		this.stop();
		////parent.comando("resetear"); //Ya no se necesita //Ya no se necesita
	}
	this.frame_6 = function() {
		this.stop();
		////parent.comando("resetear"); //Ya no se necesita //Ya no se necesita
	}
	this.frame_7 = function() {
		this.stop();
		//parent.comando("resetear"); //Ya no se necesita
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1));

	// TITULO
	this.instance = new lib.tema_entrada_titulo();
	this.instance.parent = this;
	this.instance.setTransform(303.6,249.9);

	this.instance_1 = new lib.tituloestatica();
	this.instance_1.parent = this;
	this.instance_1.setTransform(303.6,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(6));

	// PAGINAS
	this.instance_2 = new lib.titulomodulot1TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(380,245.4,1,1,0,0,0,323.9,217.4);

	this.instance_3 = new lib.mc1t1TMR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.4,40.2);

	this.instance_4 = new lib.mc2t1TMR();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.4,40.2);

	this.instance_5 = new lib.mc3t1TMR();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.4,40.2);

	this.instance_6 = new lib.mc4t1TMR();
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.4,40.2);

	this.instance_7 = new lib.mc5t1TMR();
	this.instance_7.parent = this;
	this.instance_7.setTransform(17.4,40.2);

	this.instance_8 = new lib.mc6t1TMR();
	this.instance_8.parent = this;
	this.instance_8.setTransform(17.4,40.2);

	this.instance_9 = new lib.mc7t1TMR();
	this.instance_9.parent = this;
	this.instance_9.setTransform(17.4,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(603.6,360.2,986.4,566.1);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Módulo1.png", id:"Módulo1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;