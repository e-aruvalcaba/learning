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



(lib.modulo4a = function() {
	this.initialize(img.modulo4a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,735,555);// helper functions:

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


(lib.titulot2mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Introducción", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(92.1,25.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,23.4,189.9,146.7);


(lib.Tema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.text = new cjs.Text("Herramienta SuccessFactors- TMR", "36px 'Arial'", "#606060");
	this.text.lineHeight = 40;
	this.text.lineWidth = 380;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,384.1,167.1);


(lib.tapakakigeneral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.tapabca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwoG+IAAt8MAhRAAAIAAN8g");
	this.shape.setTransform(106.5,44.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,89.3);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,255,0,0.008)").ss(1,1,1).p("AqdizIU7AAIAAFnI07AAg");
	this.shape.setTransform(67,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(69,69,69,0.02)").s().p("AqdC0IAAlnIU7AAIAAFng");
	this.shape_1.setTransform(67,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1,-1,136,38), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¡Felicitaciones por terminar el curso!", "41px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 662;
	this.text.parent = this;
	this.text.setTransform(421.9,2,1.267,1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,843.9,76.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73E44").s().p("Eg1AAL5QgyAAgjgnQgkgmAAg2IgCzqQAAg2AjgnQAkgnAyAAMBqCAAAQAzAAAjAnQAkAnAAA2IACTqQAAA2gjAmQgkAngzAAg");
	this.shape.setTransform(351.6,76.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,703.2,152.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhBCAd1QiGAAhghfQhfhfAAiHMgAGgxgQAAiGBfhfQBfhfCHgBMCCLAAAQCGABBfBfQBgBfAACGMAAGAxgQAACGhfBgQhgBfiGAAg");
	this.shape.setTransform(449.4,191);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,898.9,381.9), null);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(70.1,30.2,0.593,0.593);

	this.text_1 = new cjs.Text("4.1", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(68.9,60.7,1.094,1.094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.8,69.7,1.504,1.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.mc_numMod03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUDGIAAhQIihAAIAAhCICqj5IBAAAIAAD5IAxAAIAABCIgxAAIAABQgAhGA0IBaAAIAAiGg");
	this.shape.setTransform(26.1,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AghEHQhPgMg8g4IgKgJQg+g7gQhQQgPhKAchJQAdhIA+gtQBDgwBVAAIAJAAQBsAABNBNQBMBMAABsIAAAIQAABTgtBBQgqA9hGAfQgzAWg1AAQgSAAgUgDg");
	this.shape_1.setTransform(26.6,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_numMod03, new cjs.Rectangle(0,0,53.3,65.5), null);


(lib.mc_btn_eval = function(mode,startPosition,loop) {
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

	// Modo de aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Modo de aislamiento
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBB0QgNAAgJgJQgKgJAAgOIAAinQAAgOAKgJQAJgKANAAICDAAQANAAAJAKQAKAJAAAOIAACnQAAAOgKAJQgJAJgNAAgAg0gqIAABZQAAAEADADQADADAEAAIBZAAQAEAAADgDQADgDAAgEIAAhYIANgSQAFgJgIgFQgJgFgFAHIgNATIhSAAQgKABAAAJg");
	this.shape_1.setTransform(16.6,17.3,0.862,0.862);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAjIAAhFIA7AAIgXAiIgPgTQgHgHgIAGQgDADAAAEQAAAEACADIAZAcQADADAEAAIAAAAQAFAAADgEIAYgiIAAAwg");
	this.shape_2.setTransform(16.8,17.5,0.862,0.862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F4F4F").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(16.7,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E152D").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_4.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,33.4);


(lib.mascaratapar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvWACqIAAlTMBetAAAIAAFTg");
	this.shape.setTransform(303.1,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,34);


(lib.m04_tmr_PORTAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("1", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 43;
	this.text.parent = this;
	this.text.setTransform(137.7,21.2,1.192,1.192);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE7D86").s().p("AnaHbQjFjFAAkWQAAkVDFjFQDFjFEVAAQEWAADFDFQDFDFAAEVQAAEWjFDFQjFDFkWAAQkVAAjFjFg");
	this.shape.setTransform(137.9,33.9,0.282,0.282);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AkcKXQiEg3hlhjQhmhkg4iBQg5iGAAiSQAAiRA5iGQA4iBBmhkQBlhjCEg3QCIg4CUAAQCVAACIA4QCEA3BlBjQBmBkA3CBQA6CFAACSQAACSg6CGQg3CBhmBkQhlBjiEA3QiIA4iVAAQiUAAiIg4g");
	this.shape_1.setTransform(137.9,34.2,0.328,0.328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE7D86").s().p("Ag6BYIAAivIB1AAIAAAVIheAAIAAA2IBSAAIAAAUIhSAAIAABQg");
	this.shape_2.setTransform(92.4,69.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE7D86").s().p("Ag6BYIAAivIB1AAIAAAVIheAAIAAA2IBSAAIAAAUIhSAAIAABQg");
	this.shape_3.setTransform(76.2,69.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE7D86").s().p("AgiBUQgQgHgJgOQgKgOAAgSIAWgCQABAOAHAIQAFAIAMAGQAMAFAOAAQANAAAKgEQALgEAEgHQAFgHABgIQgBgIgFgGQgEgHgLgEQgHgDgXgFQgYgGgLgEQgMgHgGgKQgHgJAAgNQABgNAHgLQAIgMAPgGQAOgGARAAQATAAAPAGQAPAHAIAMQAIAMABAQIgXABQgBgQgLgJQgKgIgUAAQgUAAgKAHQgKAIAAALQAAAJAHAGQAHAHAbAGQAdAGAKAFQAPAGAHALQAIALAAAOQAAAOgIANQgIAMgPAHQgPAHgTAAQgXAAgQgHg");
	this.shape_4.setTransform(58.9,69.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE7D86").s().p("AgiBUQgQgHgJgOQgKgOAAgSIAWgCQABAOAHAIQAFAIAMAGQAMAFAOAAQANAAAKgEQALgEAEgHQAFgHABgIQgBgIgFgGQgEgHgLgEQgHgDgXgFQgYgGgLgEQgMgHgGgKQgHgJAAgNQABgNAHgLQAIgMAPgGQAOgGARAAQATAAAPAGQAPAHAIAMQAIAMABAQIgXABQgBgQgLgJQgKgIgUAAQgUAAgKAHQgKAIAAALQAAAJAHAGQAHAHAbAGQAdAGAKAFQAPAGAHALQAIALAAAOQAAAOgIANQgIAMgPAHQgPAHgTAAQgXAAgQgHg");
	this.shape_5.setTransform(41.3,69.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE7D86").s().p("AiaicIE1CDIhfAvIBYBcIgrAqIhZhcIgzBdg");
	this.shape_6.setTransform(113.7,89);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE7D86").s().p("AkxC5QhNAAg2g2Qg3g3AAhMQAAhMA3g2QA2g2BNAAIJkAAQBMAAA3A2QA2A2AABMQAAAkgPAjIgogQQALgbAAgcQAAg6gqgpQgpgqg6AAIpkAAQg7AAgpAqQgqApAAA6QAAA6AqAqQApApA7AAIJsAAIAQAqQgLACgNAAg");
	this.shape_7.setTransform(66.6,69);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE7D86").s().p("Ag1AEQApgMAZgkIApASQgjAzg5ATg");
	this.shape_8.setTransform(107.1,82);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0E1AB").s().p("AnaHbQjFjFAAkWQAAkVDFjFQDFjFEVAAQEWAADFDFQDFDFAAEVQAAEWjFDFQjFDFkWAAQkVAAjFjFg");
	this.shape_9.setTransform(73.3,71.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AkcKXQiEg3hlhjQhmhkg4iBQg5iGAAiSQAAiRA5iGQA4iBBmhkQBlhjCEg3QCIg4CUAAQCVAACIA4QCEA3BlBjQBmBkA3CBQA6CFAACSQAACSg6CGQg3CBhmBkQhlBjiEA3QiIA4iVAAQiUAAiIg4g");
	this.shape_10.setTransform(73.3,71.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m04_tmr_PORTAL, new cjs.Rectangle(0,0,165.9,143.9), null);


(lib.M03_TMR_TABLA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("3", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 43;
	this.text.parent = this;
	this.text.setTransform(137.7,21.2,1.192,1.192);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBD156").s().p("AiFCGQg3g4AAhOQAAhOA3g2QA3g4BOAAQBOAAA3A4QA4A2AABOQAABOg4A4Qg3A3hOAAQhOAAg3g3g");
	this.shape.setTransform(138,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AkcKXQiEg3hlhjQhmhkg4iBQg5iGAAiSQAAiRA5iGQA4iBBmhkQBlhjCEg3QCIg4CUAAQCVAACIA4QCEA3BlBjQBmBkA3CBQA6CFAACSQAACSg6CGQg3CBhmBkQhlBjiEA3QiIA4iVAAQiUAAiIg4g");
	this.shape_1.setTransform(137.9,34.2,0.328,0.328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACADQADACAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape_2.setTransform(108.7,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_3.setTransform(107.1,100.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_4.setTransform(106,100.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAGQgBgCAAgEQgBgDADgDQACgCADAAQAEAAACADQADACAAAFIgMAAIABACQABABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIABgCIAFABIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgFAAgCgEgAgCgEIgBADIAGAAIAAgDIgDAAIgCAAg");
	this.shape_5.setTransform(104.2,100.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIANIAAgYIAEAAIAAADIADgDIACgBQADAAACADQADACAAAFQAAADgDADQgCACgDAAIgCAAIgCgCIAAAJgAgCgGIgBAEIABADIACABIADgBIABgDIgBgEIgDgCIgCACg");
	this.shape_6.setTransform(102.2,100.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAEAJIgEgGIgDAGIgGAAIAHgJIgGgIIAGAAIACAFIADgFIAGAAIgGAIIAGAJg");
	this.shape_7.setTransform(100.2,100.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgDQACgCADAAQAEAAACADQADACAAAFIgMAAIABACQABABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIABgCIAFABIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgFAAgBgEgAgCgEIgBADIAGAAIAAgDIgDAAIgCAAg");
	this.shape_8.setTransform(98.2,100.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBAMIAAgXIADAAIAAAXg");
	this.shape_9.setTransform(112.4,95.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDIADgBIADAAIAEgBIAAgBIgBgCIgCgBIgCABIAAACIgFgBIADgEQACgCACABIAFAAIACACIAAAFIAAAEIAAAEIABACIgEAAIAAgBIgBgBIgDACIgCABQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIAAABIAAADIACAAIABgBIACgCIAAgCIAAgBIgDABg");
	this.shape_10.setTransform(111,95.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AADAJIAAgJIAAgDIgBgBIgCAAIAAAAIgCACIAAADIAAAIIgFAAIAAgRIAFAAIAAADQACgDACAAIADABIACABIABACIAAADIAAAKg");
	this.shape_11.setTransform(109,95.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDADQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACACQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCACg");
	this.shape_12.setTransform(106.9,95.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_13.setTransform(105.3,95.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACADIABAAIADAAIABgCIgBgBIgBgBQgFAAgCgCQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgBADAAQADgBACACIADADIgFACIgBgDIgCAAIgCAAIAAABIAAACIAEABQADAAACABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCABgEABQgDgBgCgBg");
	this.shape_14.setTransform(103.9,95.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgDADABQAEAAACACQADADgBAEIgKAAIAAADQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACAAIACgDIAEABIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBABQgDAAgCgDgAgCgEIAAAEIAGAAIgBgEIgDgBIgCABg");
	this.shape_15.setTransform(102,95.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAMIAAgMIgDAAIAAgFIADAAIAAgBIAAgDIACgCIACAAIAEAAIAAADIgDAAIgCAAIAAACIAAABIAEAAIAAAFIgEAAIAAAMg");
	this.shape_16.setTransform(100.5,95.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDADQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACACQAAAAABgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCACg");
	this.shape_17.setTransform(98.8,95.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_18.setTransform(97.2,95.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAMIAAgXIAIAAIAGAAIADACQABACAAADIgBAEQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgCACIgFAAIgCAAIAAAJgAgDAAIACAAIADgBIACgBIABgCIgBgCIgCgBIgDAAIgCAAg");
	this.shape_19.setTransform(95.3,95.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEAIIgDgDIgBgFIABgEQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQAEAAACAEQADACAAADQAAAEgDACQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape_20.setTransform(109.1,84.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_21.setTransform(107.4,83.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAHQgCgDgBgEQABgDACgDQACgDADAAQAEAAACACIACAEIgEABIgCgCIgCAAIgBABIgBADQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIACgDIAEABIgCAFQgCABgEAAQgDAAgCgCg");
	this.shape_22.setTransform(105.9,84.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIACgCIADgBIAEgBIAAAAIgBgCIgCAAIgCAAIgBABIgEAAIADgEQACgCACAAIAFABIACADIAAADIAAAFIAAADIABADIgEAAIAAgCIgBAAIgCACIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIgBACIABABIACABIACgBIABgBIAAgCIAAgCIgDABg");
	this.shape_23.setTransform(104,84.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgIANIAAgYIAEAAIAAADIADgDIACgBQADAAACADQADACAAAFQAAADgDADQgCACgDAAIgCAAIgCgCIAAAJgAgCgGIgBAEIABADIACABIADgBIABgDIgBgEIgDgCIgCACg");
	this.shape_24.setTransform(102,84.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAIAJIAAgJIAAgDIgCgBIgCAAIgBACIgBADIAAAIIgDAAIAAgJIgBgDIAAgBIgCAAIgCAAIgBACIAAADIAAAIIgFAAIAAgRIAEAAIAAADQADgDADAAIACABIACACIACgCIADgBIAEABIACACIAAAEIAAAKg");
	this.shape_25.setTransform(99.4,84);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAMIAAgXIAFAAIAAAXg");
	this.shape_26.setTransform(97.4,83.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCACg");
	this.shape_27.setTransform(105.8,79.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_28.setTransform(104.1,79.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgBAMIAAgXIADAAIAAAXg");
	this.shape_29.setTransform(103.1,79.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAHAMIgDgFIgIAAIgCAFIgGAAIAKgXIAEAAIAKAXgAgDACIAGAAIgDgIg");
	this.shape_30.setTransform(101.5,79.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_31.setTransform(107.3,67.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAHQgBgDAAgEQgBgDADgDQACgCADgBQAEAAACAEQADACAAAEIgMAAIABAEQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABAAIABgCIAFAAIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgCgAgCgDIgBACIAGAAIAAgCIgDgBIgCABg");
	this.shape_32.setTransform(105.5,67.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAKQgCgDAAgEQAAgEACgCQACgCAEgBQACABACACIAAgIIAFAAIAAAXIgFAAIAAgCIgCABIgCABQgDAAgDgCgAgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIABAFQAAAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIADgBIABgFIgBgDIgDgBIgCABg");
	this.shape_33.setTransform(103.5,67.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCANIAAgRIADAAIAAARgAgDgGIADgFIAEAAIgEAFg");
	this.shape_34.setTransform(102.1,67.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIAMIAAgXIAFAAIAAATIAMAAIAAAEg");
	this.shape_35.setTransform(100.5,67.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACADQADACAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAgBIgCACg");
	this.shape_36.setTransform(108.1,63.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_37.setTransform(106.5,63.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAIIgBgCIgBgEIAAgKIAEAAIAAAIIABAEIABABIABABIACgBIABgCIAAgEIAAgHIAFAAIAAARIgFAAIAAgDQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgCABIgEgBg");
	this.shape_38.setTransform(104.6,63.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_39.setTransform(102.9,62.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAIIgCgCIAAgEIAAgKIAFAAIAAAIIAAAEIABABIABABIABgBIACgCIAAgEIAAgHIAFAAIAAARIgFAAIAAgDQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgCABIgEgBg");
	this.shape_40.setTransform(101.3,63.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIAMIAAgXIAQAAIAAAEIgKAAIAAAGIAJAAIAAADIgJAAIAAAKg");
	this.shape_41.setTransform(99.3,62.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACADQADACAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCABg");
	this.shape_42.setTransform(76.1,100.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgBAJIgHgRIAFAAIADAIIAAADIABgBIAAgCIAEgIIAEAAIgHARg");
	this.shape_43.setTransform(74.1,100.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_44.setTransform(72.7,100.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_45.setTransform(71.7,100.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAHQgCgDgBgEQABgDACgDQACgCADAAQADAAADABIACAEIgFABIgBgCIgCAAIgBAAIgBAEQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABgDIAGABIgDAFQgDACgDAAQgDAAgCgDg");
	this.shape_46.setTransform(70.2,100.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgDQACgCADAAQAEAAACADQADACgBAFIgKAAIAAACQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACgBIACgCIAEABIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgDAAgCgEgAgCgEIAAADIAGAAIgBgDIgDAAIgCAAg");
	this.shape_47.setTransform(68.2,100.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgDAMIAAgMIgCAAIAAgFIACAAIAAgBIABgDIACgCIACgBIAEABIgBAEIgCgBIgBABIAAABIAAABIADAAIAAAFIgDAAIAAAMg");
	this.shape_48.setTransform(66.7,100.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGAGQgBgCAAgEQgBgDADgDQACgCADAAQAEAAACADQACACABAFIgMAAIACACQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIABgCIAFABIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgEAAgDgEgAgBgEIgCADIAGAAIgBgDIgCAAIgBAAg");
	this.shape_49.setTransform(65.1,100.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgBAMIAAgXIADAAIAAAXg");
	this.shape_50.setTransform(79.6,95.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDIADgBIADAAIAEgBIAAgBIgBgCIgCgBIgCABIAAACIgFgBIADgEQACgCACABIAFAAIACACIAAAFIAAAEIAAAEIABACIgEAAIAAgBIgBgBIgDACIgCABQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIAAABIAAADIACAAIABgBIACgCIAAgCIAAgBIgDABg");
	this.shape_51.setTransform(78.1,95.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AADAJIAAgJIAAgDIgBgBIgCAAIAAAAIgCACIAAADIAAAIIgFAAIAAgRIAFAAIAAADQACgDACAAIADABIACABIABACIAAADIAAAKg");
	this.shape_52.setTransform(76.1,95.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDADQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACACQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCACg");
	this.shape_53.setTransform(74,95.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_54.setTransform(72.5,95.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACADIABAAIADAAIABgCIgBgBIgBgBQgFAAgCgCQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQACgBADAAQADgBACACIADADIgFACIgBgDIgCAAIgCAAIAAABIAAACIAEABQADAAACABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCABgEABQgDgBgCgBg");
	this.shape_55.setTransform(71,95.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgDADABQAEAAACACQADADgBAEIgKAAIAAADQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACAAIACgDIAEABIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBABQgDAAgCgDgAgCgEIAAAEIAGAAIgBgEIgDgBIgCABg");
	this.shape_56.setTransform(69.1,95.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgCAMIAAgMIgDAAIAAgFIADAAIAAgBIAAgDIACgCIACAAIAEAAIAAADIgDAAIgCAAIAAACIAAABIAEAAIAAAFIgEAAIAAAMg");
	this.shape_57.setTransform(67.7,95.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDADQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACACQAAAAABgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCACg");
	this.shape_58.setTransform(66,95.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_59.setTransform(64.4,95.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgJAMIAAgXIAIAAIAGAAIADACQABACAAADIgBAEQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgCACIgFAAIgCAAIAAAJgAgDAAIACAAIADgBIACgBIABgCIgBgCIgCgBIgDAAIgCAAg");
	this.shape_60.setTransform(62.5,95.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgDQACgDADAAQAEAAACAEQADACAAAFIgMAAIABADQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIACgBIAEAAIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFAAgBgDgAgCgDIgBACIAHAAIgBgCIgDgBIgCABg");
	this.shape_61.setTransform(79.3,84.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_62.setTransform(77.7,83.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AADAJIAAgJIAAgDIgBgBIgCAAIAAAAIgCACIAAADIAAAIIgFAAIAAgRIAFAAIAAADQACgDACAAIADABIACABIABACIAAADIAAAKg");
	this.shape_63.setTransform(76.1,84);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgGAGQgBgCAAgEQgBgDADgDQACgDADAAQAEAAACAEQACACABAFIgMAAIACADQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIABgBIAFAAIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgEAAgDgDgAgBgDIgCACIAGAAIgBgCIgCgBIgBABg");
	this.shape_64.setTransform(74.1,84.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_65.setTransform(72.5,83.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACACIABABIADgBIABgBIgBgBIgBAAQgFgBgCgCQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQACgDADAAQADAAACACIADAEIgFAAIgBgBIgCgBIgCABIAAABIAAAAIAEACQADABACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgCACgEAAQgDAAgCgBg");
	this.shape_66.setTransform(71,84.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_67.setTransform(69.6,83.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACACIABABIADgBIABgBIgBgBIgBAAQgFgBgCgCQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQACgDADAAQADAAACACIADAEIgFAAIgBgBIgCgBIgCABIAAABIAAAAIAEACQADABACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgCACgEAAQgDAAgCgBg");
	this.shape_68.setTransform(68.1,84.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAEAJIAAgJIgBgDIgBgBIgBAAIgCAAIgBACIgBADIAAAIIgEAAIAAgRIAEAAIAAADQACgDADAAIADABIACABIABACIAAADIAAAKg");
	this.shape_69.setTransform(66.2,84);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgEAIIgDgDIgBgFIABgEQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQAEAAACAEQADACAAADQAAAEgDACQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCABg");
	this.shape_70.setTransform(64,84.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgFAHQgCgDAAgEQAAgDACgDQACgDADAAQADAAADACIACAEIgFABIgBgCIgCAAIgBABIgBADQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABgDIAGABIgDAFQgDABgDAAQgDAAgCgCg");
	this.shape_71.setTransform(62.1,84.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_72.setTransform(80.4,79.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCACg");
	this.shape_73.setTransform(78.5,79.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGAKQgCgCAAgFQAAgDACgDQACgCAEAAQACAAACACIAAgJIAFAAIAAAYIgFAAIAAgDIgCADIgCABQgDgBgDgCgAgCgBQAAABAAAAQgBAAAAAAQAAABAAAAQAAABAAABIABAEQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAIADgBIABgEIgBgEIgDgBIgCABg");
	this.shape_74.setTransform(76.4,79.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIABgCIAEAAIAEgCIAAAAIgBgCIgCgBIgCABIgBABIgEAAIACgEQADgBACAAIAEABIADABIAAAEIAAAFIAAADIACADIgFAAIgBgBIAAgBIgCACIgDABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIgBABIABACIACABIACgBIABgCIAAgBIAAgBIgDAAg");
	this.shape_75.setTransform(74.4,79.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_76.setTransform(72.9,79.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgCACg");
	this.shape_77.setTransform(71,79.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgBAMIgDgDIAAADIgDAAIAAgYIAEAAIAAAJQACgCACAAQADAAACACQACADABADQgBAFgCACQgCACgCABIgDgBgAgCgBIgBAEIABAEQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIADgBIABgEIgBgEIgDgBIgCABg");
	this.shape_78.setTransform(69,79.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGAIQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIABgCIAEAAIAEgCIAAAAIgBgCIgCgBIgBABIgCABIgEAAIACgEQACgBADAAIAEABIADABIABAEIAAAFIAAADIABADIgFAAIgBgBIAAgBIgCACIgCABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAAABIgBABIgCABIABACIACABIABgBIABgCIABgBIAAgBIgDAAg");
	this.shape_79.setTransform(66.9,79.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgBAMIAAgXIADAAIAAAXg");
	this.shape_80.setTransform(65.5,79.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCACg");
	this.shape_81.setTransform(64,79.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGAJQgEgDAAgGQAAgFAEgDQADgEAEAAQAEAAADADIADAEIgFACIgCgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBACAAAEQAAAEABACQABABAAAAQABABAAAAQABAAAAAAQAAAAABAAIADgBIACgEIAFACQgBAEgDACQgCACgEAAQgEAAgDgEg");
	this.shape_82.setTransform(61.6,79.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEAIIgDgDIgBgFIABgEQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQAEAAACAEQADACAAADQAAAEgDADQgCACgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACACQAAAAABgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgCABg");
	this.shape_83.setTransform(79.5,67.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_84.setTransform(77.8,67.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAEAJIAAgJIgBgDIgBgBIgCAAIgBAAIgBACIAAADIAAAIIgFAAIAAgRIAFAAIAAADQACgDACAAIADABIACABIABACIAAADIAAAKg");
	this.shape_85.setTransform(76.2,67.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgFAHQgCgDgBgEQAAgDADgDQACgCADgBQAEAAACAEQACACAAAEIgLAAIABAEQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACAAIACgCIAEAAIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDAAgCgCgAgCgDIgBACIAHAAIgBgCIgDgBIgCABg");
	this.shape_86.setTransform(74.2,67.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_87.setTransform(72.7,67.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAIAJIAAgJIAAgDIgCgBIgCAAIgBACIgBADIAAAIIgDAAIAAgJIgBgDIAAgBIgCAAIgCAAIgBACIAAADIAAAIIgFAAIAAgRIAEAAIAAADQADgDADAAIACABIACACIACgCIADgBIAEABIACACIAAAEIAAAKg");
	this.shape_88.setTransform(70.7,67.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_89.setTransform(68.8,67.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgFAHQgDgDABgEQgBgEADgCQACgCADgBQAEABABABIADAFIgFAAIgBgCIgCAAIgBABIgCADQAAAAABABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIACgBIABgDIAGABIgEAFQgBABgEAAQgDAAgCgCg");
	this.shape_90.setTransform(67.4,67.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgGAHQgCgDAAgEQABgDACgDQACgCADgBQAEAAACAEQADACgBAEIgKAAIABAEQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACAAIACgCIAEAAIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgDAAgDgCgAgBgDIgBACIAGAAIgCgCIgCgBIgBABg");
	this.shape_91.setTransform(65.4,67.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_92.setTransform(63.9,67.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFAHQgCgDgBgEQABgEACgCQACgCADgBQAEABACABIACAFIgFAAIgBgCIgCAAIgBABIgBADQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAIACgBIABgDIAGABIgDAFQgCABgEAAQgDAAgCgCg");
	this.shape_93.setTransform(62.2,67.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAEAJIAAgJIgBgDIgBgBIgBAAIgCAAIgBACIgBADIAAAIIgEAAIAAgRIAEAAIAAADQACgDADAAIADABIACABIABACIAAADIAAAKg");
	this.shape_94.setTransform(78.3,63.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgGAGQgBgCAAgEQgBgDADgDQACgCADAAQAEAAACADQADACAAAFIgMAAIABACQABABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIABgBIAFAAIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgFAAgCgEgAgCgEIgBADIAGAAIAAgDIgDgBIgCABg");
	this.shape_95.setTransform(76.3,63.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACADQADACAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAgBIgCACg");
	this.shape_96.setTransform(73.3,63.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_97.setTransform(71.7,62.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AADAJIAAgJIAAgDIgBgBIgBAAIgBAAIgCACIgBADIAAAIIgEAAIAAgRIAEAAIAAADQADgDACAAIADABIACABIABACIAAADIAAAKg");
	this.shape_98.setTransform(70.1,63.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQABgDACgDQACgCADAAQAEAAACADQACACAAAFIgKAAIABACQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACgBIABgBIAFAAIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgEAAgCgEgAgBgEIgBADIAFAAIgBgDIgCgBIgBABg");
	this.shape_99.setTransform(68,63.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgBAMIAAgXIADAAIAAAXg");
	this.shape_100.setTransform(66.6,62.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIACgCIACgCIADgBIAEgBIAAAAIgBgCIgCgBIgCABIgBABIgEAAIADgEQACgBACAAIAFABIACACIAAADIAAAFIAAADIABADIgEAAIAAgCIgBAAIgDACIgCABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIgBACIABABIACABIACgBIABgBIAAgCIAAgBIgDAAg");
	this.shape_101.setTransform(65.2,63.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgBAMIAAgTIgIAAIAAgEIATAAIAAAEIgIAAIAAATg");
	this.shape_102.setTransform(63.4,62.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDADQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACACQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCACg");
	this.shape_103.setTransform(40.6,95.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgCAPIgBAAIAAgEIABABIABAAIABgBIAAAAIAAgEIAAgQIAEAAIAAARIAAAFIgCACIgCABIgCgBgAAAgLIAAgEIAEAAIAAAEg");
	this.shape_104.setTransform(38.9,95.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDIADgBIADAAIAEgBIAAgBIgBgCIgCgBIgCABIAAACIgFgBIADgEQACgCACABIAFAAIACACIAAAFIAAAEIAAAEIABACIgEAAIAAgBIgBgBIgDACIgCABQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIAAABIAAADIACAAIABgBIACgCIAAgCIAAgBIgDABg");
	this.shape_105.setTransform(37.6,95.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgBAMIgIAAIAAgXIAJAAIAEAAIADABIABACIABADIgBADIgCACQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAADIgCADIgEABIgFAAgAgEAIIAEAAIADAAIACgBIAAgCIAAgCIgCgBIgDgBIgEAAgAgEgCIADAAIADAAIACgBIAAgCIAAgBIgCgBIgDAAIgDAAg");
	this.shape_106.setTransform(35.4,95.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgDAQIACgFIABgDIAAgEIAAgEIAAgHIgDgIIADAAIADAHIABAIIgBAHQgBAFgCAEg");
	this.shape_107.setTransform(44,86.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgDIADgBIADAAIAEgBIAAgBIgBgCIgCgBIgCABIAAACIgFgBIADgEQACgBACgBIAFABIACACIAAAFIAAAEIAAAEIABACIgEAAIAAgBIgBgBIgDACIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIAAABIAAADIACAAIABgBIACgCIAAgCIAAgBIgDABg");
	this.shape_108.setTransform(42.6,86.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAIAJIAAgJIAAgDIgCgBIgCAAIgBACIgBADIAAAIIgDAAIAAgJIgBgDIAAgBIgCAAIgCAAIgBACIAAADIAAAIIgFAAIAAgRIAEAAIAAADQADgDADAAIACABIACACIACgCIADgBIAEABIACACIAAAEIAAAKg");
	this.shape_109.setTransform(40.1,86.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgGAHQgBgDAAgEQgBgDADgDQACgCADgBQAEAAACADQADADAAAEIgMAAIABAEQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABAAIABgDIAFABIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFAAgCgCgAgCgDIgBADIAGAAIgBgDIgCgCIgCACg");
	this.shape_110.setTransform(37.6,86.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgBAMIAAgXIADAAIAAAXg");
	this.shape_111.setTransform(36.2,86.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_112.setTransform(35.2,86.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgJAMIAAgXIAJAAIAEAAIADACIADAEIAAAFIAAAFIgDAFIgDACIgEAAgAgEAIIADAAIACAAIACgBIACgDIAAgEIAAgDIgCgDIgCgBIgDAAIgCAAg");
	this.shape_113.setTransform(33.5,86.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AABAQIgDgIIgBgIQAAgEABgEIADgHIADAAIgDAIIgBAHIABAGIABAFIACAFg");
	this.shape_114.setTransform(31.7,86.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgGAGQgBgCAAgEQgBgDADgDQACgDADAAQAEAAACAEQACACABAFIgMAAIACADQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIABgBIAFAAIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgEAAgDgDgAgBgDIgCACIAGAAIgBgCIgCgBIgBABg");
	this.shape_115.setTransform(48,82.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_116.setTransform(46.5,82);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AADAJIAAgJIAAgDIgBgBIgBAAIgBAAIgCACIgBADIAAAIIgEAAIAAgRIAEAAIAAADQADgDACAAIADABIACABIABACIAAADIAAAKg");
	this.shape_117.setTransform(44.9,82.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQABgDACgDQACgDADAAQAEAAACAEQACACAAAFIgKAAIABADQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACgBIABgBIAFAAIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgDgAgBgDIgBACIAFAAIgBgCIgCgBIgBABg");
	this.shape_118.setTransform(42.8,82.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAAAMIgBgBIgBgCIAAgEIAAgGIgCAAIAAgEIACAAIAAgEIAEgCIAAAGIADAAIAAAEIgDAAIAAAGIAAACIAAABIABAAIACAAIAAADIgDABIgCAAg");
	this.shape_119.setTransform(41.3,82);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACACIABABIADgBIABgBIgBgBIgBAAQgFgBgCgCQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQACgDADAAQADAAACACIADAEIgFABIgBgCIgCgBIgCABIAAABIAAABIAEABQADABACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgCACgEAAQgDAAgCgBg");
	this.shape_120.setTransform(39.7,82.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_121.setTransform(38.3,81.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACACIABABIADgBIABgBIgBgBIgBAAQgFgBgCgCQAAAAgBAAQAAAAAAAAQAAgBgBgBQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQACgDADAAQADAAACACIADAEIgFABIgBgCIgCgBIgCABIAAABIAAABIAEABQADABACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgCACgEAAQgDAAgCgBg");
	this.shape_122.setTransform(36.8,82.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AADAJIAAgJIAAgDIgBgBIgBAAIgBAAIgCACIgBADIAAAIIgEAAIAAgRIAEAAIAAADQACgDADAAIADABIACABIABACIAAADIAAAKg");
	this.shape_123.setTransform(34.9,82.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgEAIIgDgDIgBgFIABgEQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAgBAAAAQAEAAACAEQADACAAADQAAAEgDACQgCADgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgCABg");
	this.shape_124.setTransform(32.8,82.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgFAHQgCgDgBgEQABgDACgDQACgDADAAQAEAAACACIACAFIgEAAIgCgCIgCAAIgBABIgBADQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIACgDIAEABIgCAFQgCABgEAAQgDAAgCgCg");
	this.shape_125.setTransform(30.8,82.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAEAJIAAgJIgBgDIgBgBIgCAAIgBAAIgBACIAAADIAAAIIgFAAIAAgRIAFAAIAAADQACgDACAAIADABIACABIABACIAAADIAAAKg");
	this.shape_126.setTransform(28.7,82.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_127.setTransform(27.2,81.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACACQADADAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBgBAAAAIgCACg");
	this.shape_128.setTransform(46.6,77.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AADAMIAAgJIAAgDIgBgBIgCAAIAAAAIgCABIAAAEIAAAIIgFAAIAAgRIAFAAIAAADQABgDADAAIADABIACABIABACIAAACIAAALgAACgHIgCgBIgBAAIgBAAIAAABIgDAAIAAgBIABgCIADgBIABAAIAAABIACAAIABAAIAAgBIADAAIgBADIgCABIgBAAg");
	this.shape_129.setTransform(44.5,77.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQABgDACgDQACgCADAAQAEAAACACQADADgBAFIgKAAIABACQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACgBIACgCIAEABIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgDAAgDgEgAgBgEIgBAEIAGAAIgCgEIgCgBIgBABg");
	this.shape_130.setTransform(42.5,77.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgIANIAAgYIAEAAIAAADIADgDIACgBQADAAACADQADACAAAFQAAADgDADQgCACgDAAIgCAAIgCgCIAAAJgAgCgGIgBAEIABADIACABIADgBIABgDIgBgEIgDgCIgCACg");
	this.shape_131.setTransform(40.5,77.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAIAJIAAgJIAAgDIgCgBIgCAAIgBACIgBADIAAAIIgDAAIAAgJIgBgDIAAgBIgCAAIgCAAIgBACIAAADIAAAIIgFAAIAAgRIAEAAIAAADQADgDADAAIACABIACACIACgCIADgBIAEABIACACIAAAEIAAAKg");
	this.shape_132.setTransform(37.9,77.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgGAGQgBgCAAgEQgBgDADgDQACgCADAAQAEAAACACQACADABAFIgMAAIACACQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBIABgCIAFABIgDAEQAAAAgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgEAAgDgEgAgBgEIgCAEIAGAAIgBgEIgCgBIgBABg");
	this.shape_133.setTransform(35.4,77.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACACIABABIADgBIABgBIgBgBIgBgBQgFgBgCgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQACgCADAAQADAAACABIADADIgFABIgBgCIgCAAIgCAAIAAABIAAABIAEACQADAAACABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgCACgEAAQgDgBgCgBg");
	this.shape_134.setTransform(33.4,77.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgGAGQgCgCAAgEQABgDACgDQACgCADAAQAEAAACACQACADAAAFIgKAAIABACQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACgBIABgCIAFABIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgEAAgCgEgAgBgEIgBAEIAFAAIgBgEIgCgBIgBABg");
	this.shape_135.setTransform(31.6,77.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgJAMIAAgXIAJAAIAEAAIADACIADAEIAAAFIAAAFIgDAFIgDACIgEAAgAgEAIIADAAIACAAIACgBIACgDIAAgEIAAgDIgCgDIgCgBIgDAAIgCAAg");
	this.shape_136.setTransform(29.3,77.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgDAQIACgFIABgDIAAgEIAAgEIAAgHIgDgIIADAAIADAHIABAIIgBAHQgBAFgCAEg");
	this.shape_137.setTransform(44.8,67.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDIACgBIADgBIAEgBIAAAAIgBgCIgCAAIgCAAIgBACIgEgBIADgEQACgBACgBIAEABIADADIAAADIAAAFIAAAEIACACIgFAAIgBgCIAAAAIgCACIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIgBACIABACIACAAIACgBIABgBIAAgDIAAgBIgDABg");
	this.shape_138.setTransform(43.3,67.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAIAJIAAgJIAAgDIgCgBIgCAAIgBACIgBADIAAAIIgDAAIAAgJIgBgDIAAgBIgCAAIgCAAIgBACIAAADIAAAIIgFAAIAAgRIAEAAIAAADQADgDADAAIACABIACACIACgCIADgBIAEABIACACIAAAEIAAAKg");
	this.shape_139.setTransform(40.8,67.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgFALQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAAAIAFAAIABABIABABIADgBIABgBIAAgCIAAgDQgCAEgCAAQgEAAgCgEQgCgCAAgCQAAgFACgDQACgCAEAAQACAAACADIAAgCIAFAAIAAAPIgBAEIgBADIgDABIgEABQgDAAgCgCgAgCgHIgBAEIABADIACABIADgBIABgCIgBgFIgDgBIgCABg");
	this.shape_140.setTransform(38.2,68.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_141.setTransform(36.7,67.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AADAJIAAgJIAAgDIgBgBIgBAAIgCAAIgBACIgBADIAAAIIgEAAIAAgRIAEAAIAAADQACgDADAAIADABIACABIABACIAAADIAAAKg");
	this.shape_142.setTransform(35.2,67.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgIAMIAAgXIARAAIAAAEIgNAAIAAAFIAMAAIAAADIgMAAIAAAHIAOAAIAAAEg");
	this.shape_143.setTransform(33.1,67.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AABAQIgDgIIgBgIQAAgEABgEIADgHIADAAIgDAIIgBAHIABAGIABAFIACAFg");
	this.shape_144.setTransform(31.3,67.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_145.setTransform(49.3,63.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgCIADgCIADgBIAEgBIAAAAIgBgCIgCgBIgCABIAAABIgFAAIADgEQACgBACAAIAFABIACACIAAADIAAAFIAAADIABADIgEAAIAAgCIgBAAIgDACIgCABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIAAACIAAABIACABIABgBIACgBIAAgCIAAgBIgDAAg");
	this.shape_146.setTransform(47.5,63.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACACIABABIADgBIABgBIgBgBIgBAAQgFgCgCgBQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgCADAAQADAAACABIADADIgFABIgBgCIgCAAIgCAAIAAABIAAABIAEACQADABACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgCADgEAAQgDAAgCgCg");
	this.shape_147.setTransform(45.5,63.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgBAMIAAgRIADAAIAAARgAgBgHIAAgEIADAAIAAAEg");
	this.shape_148.setTransform(44.1,62.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgBAJIgHgRIAFAAIADAIIAAAEIABgCIAAgCIAEgIIAEAAIgHARg");
	this.shape_149.setTransform(42.8,63.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgFAGQgCgCgBgEQAAgDADgDQACgCADAAQAEAAACADQACACAAAFIgLAAIABACQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIACgBIACgBIAEAAIgDAEQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQgDAAgCgEgAgCgEIgBADIAHAAIgBgDIgDgBIgCABg");
	this.shape_150.setTransform(40.9,63.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgFAJIAAgRIAEAAIAAADIABgCIACgBIAEABIgCAEIgCgBIgCABIAAACIAAAFIAAAFg");
	this.shape_151.setTransform(39.4,63.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgFAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgCIABgCIAEgBIAEgBIAAAAIgBgCIgCgBIgCABIgBABIgEAAIACgEQACgBADAAIAEABIADACIABADIAAAFIAAADIABADIgFAAIgBgCIAAAAIgCACIgDABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAAAABIgCABIgBACIABABIACABIACgBIAAgBIABgCIAAgBIgDAAg");
	this.shape_152.setTransform(36.7,63.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEAJIgDgEIgBgFIABgEQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAAAAAQAEAAACADQADACAAADQAAAEgDACQgCAEgEAAIgEgBgAgCgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIACABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAgBIgCACg");
	this.shape_153.setTransform(33.7,63.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgFAIQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAEgBIACACIABABIADgBIABgBIgBgBIgBAAQgFgCgCgBQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgCADAAQADAAACABIADADIgFABIgBgCIgCAAIgCAAIAAABIAAABIAEACQADABACAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgCADgEAAQgDAAgCgCg");
	this.shape_154.setTransform(31.7,63.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgGAIQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgCIACgCIAEgBIAEgBIAAAAIgBgCIgCgBIgBABIgBABIgFAAIACgEQADgBACAAIAFABIACACIABADIAAAFIAAADIABADIgFAAIgBgCIAAAAIgDACIgBABQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAAAABIgBABIgBACIAAABIACABIABgBIABgBIABgCIAAgBIgDAAg");
	this.shape_155.setTransform(29.8,63.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgGAJQgEgDAAgGQAAgFAEgDQADgEAEAAQAEAAADADIADAEIgFACIgCgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBACAAAEQAAAEABACQABABAAAAQABABAAAAQABAAAAAAQAAAAABAAIADgBIACgEIAFACQgBAEgDACQgCACgEAAQgEAAgDgEg");
	this.shape_156.setTransform(27.5,62.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#FFFFFF").p("AABkPIAAIfIgBAAIAAofg");
	this.shape_157.setTransform(54.7,81.9,0.896,0.896);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAAEQIAAofIABAAIAAIfg");
	this.shape_158.setTransform(54.7,81.9,0.896,0.896);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#FFFFFF").p("AABkPIAAIfIgBAAIAAofg");
	this.shape_159.setTransform(87.6,81.9,0.896,0.896);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAAEQIAAofIABAAIAAIfg");
	this.shape_160.setTransform(87.6,81.9,0.896,0.896);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#FFFFFF").p("AImAAIAAABIxLAAIAAgBg");
	this.shape_161.setTransform(71.2,73.8,0.896,0.896);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AolABIAAgBIRLAAIAAABg");
	this.shape_162.setTransform(71.2,73.8,0.896,0.896);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#FFFFFF").p("AImAAIAAABIxLAAIAAgBg");
	this.shape_163.setTransform(71.2,90.1,0.896,0.896);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AolABIAAgBIRLAAIAAABg");
	this.shape_164.setTransform(71.2,90.1,0.896,0.896);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_165.setTransform(38.3,65.7,0.896,0.896);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F1E2A8").s().p("Ai2BaIAAizIFsAAIAACzg");
	this.shape_166.setTransform(38.3,65.7,0.896,0.896);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_167.setTransform(71.2,98.2,0.896,0.896);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F1E2A8").s().p("Ai2BaIAAizIFtAAIAACzg");
	this.shape_168.setTransform(71.2,98.2,0.896,0.896);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_169.setTransform(104,98.2,0.896,0.896);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F1E2A8").s().p("Ai2BaIAAizIFsAAIAACzg");
	this.shape_170.setTransform(104,98.2,0.896,0.896);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_171.setTransform(38.3,81.9,0.896,0.896);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E0878B").s().p("Ai2BaIAAizIFsAAIAACzg");
	this.shape_172.setTransform(38.3,81.9,0.896,0.896);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_173.setTransform(38.3,98.2,0.896,0.896);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E0878B").s().p("Ai2BaIAAizIFsAAIAACzg");
	this.shape_174.setTransform(38.3,98.2,0.896,0.896);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_175.setTransform(71.2,81.9,0.896,0.896);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#DBEEBF").s().p("Ai2BaIAAizIFtAAIAACzg");
	this.shape_176.setTransform(71.2,81.9,0.896,0.896);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_177.setTransform(71.2,65.7,0.896,0.896);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A2D7E9").s().p("Ai2BaIAAizIFtAAIAACzg");
	this.shape_178.setTransform(71.2,65.7,0.896,0.896);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").p("ACjhPIAACfIlFAAIAAifg");
	this.shape_179.setTransform(104,82);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#85C8DA").s().p("AiiBQIAAigIFFAAIAACgg");
	this.shape_180.setTransform(104,82);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#FFFFFF").p("AC3hZIAACzIltAAIAAizg");
	this.shape_181.setTransform(104,65.7,0.896,0.896);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#6CBACB").s().p("Ai2BaIAAizIFsAAIAACzg");
	this.shape_182.setTransform(104,65.7,0.896,0.896);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFFFFF").p("AIlEPIxJAAIAAodIRJAAgAomkQIAAIhIRNAAIAAohg");
	this.shape_183.setTransform(71.2,81.9,0.896,0.896);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AomERIAAohIRNAAIAAIhgAokEPIRJAAIAAodIxJAAg");
	this.shape_184.setTransform(71.2,81.9,0.896,0.896);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EFEDAD").s().p("AnaHbQjFjEAAkXQAAkVDFjFQA4g4A+gnQCehmDGAAQDIAACdBmQA+AnA4A4QDFDFAAEVQAAEXjFDEQjEDFkXAAQkVAAjFjFg");
	this.shape_185.setTransform(73.3,72);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EFEFEF").s().p("AkcKXQiEg3hlhkQhmhjg3iBQg6iGAAiSQAAiSA6iFQA3iBBmhkQBlhkCEg2QCIg4CUAAQCVAACJA4QCDA2BmBkQBlBkA3CBQA6CFAACSQAACSg6CGQg3CBhlBjQhmBkiDA3QiJA5iVAAQiUAAiIg5g");
	this.shape_186.setTransform(73.3,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLA, new cjs.Rectangle(0,0,165.9,143.9), null);


(lib.lineamenus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EFEFEF").ss(5,1,1).p("AgEmZIAJMz");
	this.shape.setTransform(0.5,41);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6,87);


(lib.info_ico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D7A5").s().p("AhcAAIC5hzIAADng");
	this.shape.setTransform(12,41.1);

	this.text = new cjs.Text("En los módulos anteriores revisamos el proceso de Talent Management Review, ahora enfocaremos nuestros esfuerzos en aprender la gestión del proceso en el sistema SuccessFactors. ", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 662;
	this.text.parent = this;
	this.text.setTransform(42,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D7A5").s().p("Eg0eAGQQgyAAgkgjQgigjgBgyIAAovQABgxAigkQAkgjAyAAMBo9AAAQAyAAAkAjQAiAkABAxIAAIvQgBAygiAjQgkAjgyAAg");
	this.shape_1.setTransform(366.3,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info_ico, new cjs.Rectangle(2.7,0,711.5,102.4), null);


(lib.flechainstrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1,9.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.flechabotnesnsimulacionespract = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgpBFQgIgEADgIIAQg2QABgCgBgEIgQg1QgDgIAIgEQAHgFAHAFIBGA8QAFAEAAAFQAAAEgFAEIhGA8QgEADgEAAQgDAAgDgDg");
	this.shape.setTransform(6.5,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,4,9.6,14.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjPgZIAAgUIGfBIIgEATg");
	this.shape.setTransform(20.8,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,41.6,9.2), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLASQgHgEgCgJQgDgIAFgHQAFgJAJgBQAIgDAHAGQAIAEACAJQACAIgFAHQgEAJgJABIgFABQgFAAgGgEg");
	this.shape.setTransform(2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,4.4,4.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9E7F4").s().p("Ah9DKQhUg1gWhfQgWhfA0hUQA1hUBfgWQBfgWBUA0QBUA0AWBgQAWBfg0BUQg0BUhgAWQgdAHgaAAQhBAAg7glg");
	this.shape.setTransform(23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,47.7,47.7), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AirBvQgRgBAAgQQAAgLABgOQAIhAArgvQArgxA/gOQA/gNA8AaQA8AbAhA5QAJANgPAHQgPAIgIgOQgdgwg2gWQg2gVg1APQg3AQgiAvQghAtAAA5QABAQgQAAIgBAAg");
	this.shape.setTransform(18.9,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,37.8,22.1), null);


(lib.imgmod1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgBBAiNQm9AAmXisQmJimkvkvQkvkvimmJQismWAAm+QAAm8CsmXQCmmJEvkvQEvkvGJimQGXisG9AAICCAAQG+AAGXCsQGJCmEuEvQEwEvCmGJQCsGXAAG8QAAG+isGWQimGJkwEvQkuEvmJCmQmXCsm+AAg");
	mask.setTransform(387,218.9);

	// Capa_3
	this.instance = new lib.modulo4a();
	this.instance.parent = this;
	this.instance.setTransform(161,-11,0.809,0.809);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imgmod1, new cjs.Rectangle(161.5,0,451,437.8), null);


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


(lib.botonsimulapractica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape.setTransform(83,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,0,132,33.5);


(lib.atrasboton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("ArAIPQgyAAgjghQgjgiAAgwIAAs3QAAgwAjgiQAjghAygBIWBAAQAyABAjAhQAjAiAAAwIAAM3QAAAwgjAiQgjAhgyAAg");
	this.shape.setTransform(82.5,52.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,105.5);


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
	this.shape.setTransform(-293.7,-230);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.8,-230.1);

	this.text = new cjs.Text("Introducción", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulot2mod3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.2,54.8,1,1,0,0,0,94.9,73.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(51).to({y:32.8},0).to({regX:95,regY:73.6,scaleX:0.04,scaleY:0.04},15,cjs.Ease.get(1)).to({_off:true},1).wait(18));

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


(lib.Symbol1ll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.AS_LG_153ss("single",0);
	this.instance.parent = this;
	this.instance.setTransform(38.6,12.7,1,1,0,0,0,23.9,23.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEAA2A").s().p("AjlDmQhfhgAAiGQAAiGBfhfQBfhfCGAAQCGAABgBfQBfBfAACGQAACGhfBgQhgBfiGAAQiGAAhfhfg");
	this.shape.setTransform(32.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1ll, new cjs.Rectangle(0,0,65,65), null);


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


(lib.m04_tmr_EQUIPO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("4", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 43;
	this.text.parent = this;
	this.text.setTransform(137.7,21.2,1.192,1.192);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7DA489").s().p("AiFCGQg3g4AAhOQAAhOA3g2QA3g4BOAAQBOAAA3A4QA4A2AABOQAABOg4A4Qg3A3hOAAQhOAAg3g3g");
	this.shape.setTransform(138,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AkcKXQiEg3hlhjQhmhkg4iBQg5iGAAiSQAAiRA5iGQA4iBBmhkQBlhjCEg3QCIg4CUAAQCVAACIA4QCEA3BlBjQBmBkA3CBQA6CFAACSQAACSg6CGQg3CBhmBkQhlBjiEA3QiIA4iVAAQiUAAiIg4g");
	this.shape_1.setTransform(137.9,34.2,0.328,0.328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#59595B").s().p("AgCANQgGgCgCgEQgDgFABgFQACgFAEgDQAFgCAEABQAGABADAFQACAFgBAEQgCAFgEADQgDACgEAAIgCAAg");
	this.shape_2.setTransform(93.5,107.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7DA489").s().p("AiegeQAygNDtiIIAmCmQhPBMg5AkQhNAxh4Agg");
	this.shape_3.setTransform(105.1,119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEEEEE").s().p("AiHgXIDmhWIApCOIkBBNg");
	this.shape_4.setTransform(103.5,105.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6D0B4").s().p("AgQDBIgFgwIgvhiIg7hXIgtgqQgCgGACgGQACgNASAAQAfgBAcAqQADAFATARQgBg6ACgpQADhOAZgJQCIgvBBC4QAQAtgBAvQAAAvgQAtIgBADQgDAGAJAzIAIAxQgpANg0ALIhXARQgDgNgEgjg");
	this.shape_5.setTransform(93.8,82.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhCDvQgqgLgjgZQgigZgYgiQgZgjgMgoQgLgqACgrQADgsASgnQARgmAdgfQAdgfAkgTQAngVArgGQArgGAqAKQApAIAlAXQAkAWAaAgQA4BFAABXIAAABQAAAzgUAvQgVAwglAjQhCA8hWAGIgSAAQghAAghgJgAgGjqQgsABgoARQgmAQgfAdQggAdgSAlQgUAngEAsQgFArAMApQALApAYAiQAZAjAjAYQAkAYAqAKQArAKAqgGQAqgGAlgUQAmgUAcggQA6hCABhaIAAAAQgBg/gfg2QgVgkghgbQgggbgogOQgmgNgoAAIgGAAg");
	this.shape_6.setTransform(52.1,48.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1DBAB9").s().p("AgdAzIAAAAQgDgBAAgDQgBgDABgCIA0hZQADgHAHAFIABAAQAFAEgEAFIg0BZQgCADgDAAIgEgBg");
	this.shape_7.setTransform(87.7,70.7);

	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(70.3,43.5,1,1,0,0,0,2.2,2.2);
	this.instance.alpha = 0.309;

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50.9,37.8,1,1,0,0,0,18.9,11.1);
	this.instance_1.alpha = 0.219;

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.4,48.2,1,1,0,0,0,23.8,23.8);
	this.instance_2.alpha = 0.18;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1DBAB9").s().p("AiSDrQhhg9gahwQgZhuA8hhQA9hiBwgaQBugZBhA8QBiA9AaBwQAaBvg9BhQg9BhhwAaQghAHgfAAQhMAAhEgqgAg1jnQhgAXg0BTQg0BUAWBfQAWBgBUA0QBTA0BggWQBggWA0hUQA0hTgWhfQgXhhhTg0Qg7gkhBAAQgaAAgdAGg");
	this.shape_8.setTransform(52.4,48.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#085466").s().p("ABGBtIjTiBIA4hdIDTCEQAOAJACATQABATgLATIgBABQgLASgSAHQgIADgHAAQgJAAgIgFg");
	this.shape_9.setTransform(99.6,77.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AhxgOIAxhMICyB0IgoBBg");
	this.shape_10.setTransform(82.5,68.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8DD2CA").s().p("AgGgKIAJAAIAEAUIgMABg");
	this.shape_11.setTransform(48.8,54.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgDAPIgJgWIAIgCIgHgRIASgOIgBAeQAAAMAHAmQgNgRgDgIg");
	this.shape_12.setTransform(47.3,48);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414042").s().p("AAlgKIgHgHIhFgCIgOA0IgDAAIALg7IAdgHIAAAHIAwAEIAOgFIACAKIgBAAIAJAyIgKABg");
	this.shape_13.setTransform(50,59);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDA96F").s().p("AgMAKIgDgNIARgGIAOAAIAAAIIgRALg");
	this.shape_14.setTransform(50.6,53.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDA96F").s().p("AgMACIAFgLIAKAEIAKAMIgTADg");
	this.shape_15.setTransform(44.7,52.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DB635E").s().p("AgIgDIAHgOIgDgJIAHgHIAGAHIgFAIIAEAQIgCAJIgIAbg");
	this.shape_16.setTransform(48.9,48.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#414042").s().p("AACAkIgNgRIgVgCIgNgOIAAgTIgCgPIAPAfIANAMIAqgBIAKgbIAPgUIgKAXIgFAjIAGAJIgaAGg");
	this.shape_17.setTransform(49.3,51.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgHgDQAKgSACgHQABgDABgKIAQALIgQASIAJAHIgmAvIAPgtg");
	this.shape_18.setTransform(50.9,47.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSgCIABgaIABgGIALAMIATgUIAFAEIgBAKQgBAHgMATIgOAtQgIgigBgLg");
	this.shape_19.setTransform(49.7,47.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgEBIIgJAWIgigCIALg8IgIAAIgGABQgFABgCgCQgHgCgDgJQgDgGADgIIAGgIQACgGAEgaQAEgWAGgHQAEgGAPgIIAPgIIANAUIAXgeIARAOIAOAHQAJAFADAEQACADgBAIIgBAKIAAASIgCARQgCAJgKAeIALA9Ig9ACg");
	this.shape_20.setTransform(49.1,53.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("Ag0BKIACiEIAggQIBEASIADBvIglAOIgEgRIgGhSIgQAAIgCBpIgogBg");
	this.shape_21.setTransform(50.2,67);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDA96F").s().p("AgDAAQABgHADABQAFABgCAGQgBAGgDAAQgEgBABgGg");
	this.shape_22.setTransform(51.7,40.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDA96F").s().p("AgDABQgBgGAEgBQADgBABAHQACAGgFABQgDAAgBgGg");
	this.shape_23.setTransform(47.1,40.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#403024").s().p("AATACQgCAAgIAAIgJAAQgLAAgGADQgDABgBAIIgBAIQgDgLAAgLQAAgVAWAAQAPAAAHAEQAHAEAAAKQACANgGAMQABgSgEgCg");
	this.shape_24.setTransform(49.5,38.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDA96F").s().p("AgGAaQgDgCgFgFQgFgFgBgEQgCgFABgQIABgPIAqAAQABAcgDAJQgBADgEAFQgFAFgDACIgHABIgGgBg");
	this.shape_25.setTransform(49.5,41);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FD8A5A").s().p("AgJAAQgGgJAEAEQAIAFAIgCQAFgBADgDQAAAMgKABIgBAAQgGAAgFgHg");
	this.shape_26.setTransform(49.5,43.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDA96F").s().p("AgPgBIABgOIAdgCIABAYIgXALg");
	this.shape_27.setTransform(49.6,44.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#263C48").s().p("AgDABIAAgCIAHAAIAAADg");
	this.shape_28.setTransform(37.6,45.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#263C48").s().p("AgJADIgBgEIAVgBIgBAFg");
	this.shape_29.setTransform(44,46.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDA96F").s().p("AgRArIABgJIABgEIAAAAIgCAEIgBAKQAAABAAABQAAABAAAAQAAABAAAAQAAABgBAAIgCAAIgBgHIABgKIAHgPIAEgFIAPg9IASAAIAAAPQgDAMgQAiIABAIQAAACgDAGIgDAKIgBAFIgCAAIgBgEIABgGIABgDIgBAAIgBAEIgCAHIAAAGIgDABIgBgHIABgHIABgEIgBAAIgBAEIgCAKQABAFgBABIgDAAg");
	this.shape_30.setTransform(42.6,51.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#263C48").s().p("AAKgFQgDgDgJgBIgQAAIgEAcIgDgeQgDgCgBgFIAAgEIATABQAUABAFgDQACgBAFgJQAEgIABAAQACAAgCAcIADAyIgPAFQADgngIgIg");
	this.shape_31.setTransform(40.3,44.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#263C48").s().p("AgTADIAEgDIgDgBIAFgIIAEgEIABAJIgIATIAagWIAFgOIAGAIIgBAMIgKADIADAIIghAMg");
	this.shape_32.setTransform(40.9,38.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FD8A5A").s().p("AgGABQgFgJADADQAGAFAGgCIAGgEQAAAMgHABIgCAAQgEAAgDgGg");
	this.shape_33.setTransform(41,37);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEBF87").s().p("AAAAJIgDgRIAFABIACAQg");
	this.shape_34.setTransform(36.4,55.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDA96F").s().p("AgBAHQgFgBACgGQACgHAEABQAFABgCAGQgCAGgDAAIgBAAg");
	this.shape_35.setTransform(43.5,33.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FDA96F").s().p("AgEABQgCgGAFgBQAEgBACAHQACAGgFABIgBAAQgDAAgCgGg");
	this.shape_36.setTransform(38.8,33.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AABAAQgCAFgHAGQgIAGgHABQgBgSAHgIQAGgKALAAQALAAAHAKQAIAKgDARQgSgIgEgLg");
	this.shape_37.setTransform(41.2,31.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3E5665").s().p("AgUA9IgSgFQAFgMABgEIgBgUIgBgNQgFgHAAgEIACgIIAEgJIAHgSIANgQIABAJIgKAZIAdgcIAEgMIALAKIAHAFQAHAFABACQADAFAAASIgDA1IgPAAQgCARgFACQgLAGgNAAIgLgBg");
	this.shape_38.setTransform(41.3,42.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3E5665").s().p("AgDA6QAAg+gDgXIgGgeIAQAAIAGAcQACAWABBBg");
	this.shape_39.setTransform(43.7,54.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#576977").s().p("AACA6QgPgBgPgEIgLgEIAAg/IAFgrIBCAAIAGAcQACAWAABBIgXAAIgPAAg");
	this.shape_40.setTransform(40.9,54.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDA96F").s().p("AgQAXQgGgMgBgOQABgOAGgJQAHgJAJAAQAKAAAHAJQAGAJABAOQgBAOgGAMQgIAMgJAAQgIAAgIgMg");
	this.shape_41.setTransform(41.2,33.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDA96F").s().p("AgNAmQgIgTABgHQABgFAIgIIAIgJIAAgbIAYAAIAAAxIgOAAIAAAag");
	this.shape_42.setTransform(40.3,39.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEBF87").s().p("AALA9IgDABIgBgRIgHgfIgJgeQgLgSgCgGIgEgWIAcADIAEASIAGAPIAGAPQABAGAAAYQAAAWADAIIAFAGQAAACgCAGQgJgCgFAAg");
	this.shape_43.setTransform(44.4,65.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEBF87").s().p("AgNArIgChLIAAgWIAfAJIgCAXIAAAaQgBAHgJAsQgHgJgKgDg");
	this.shape_44.setTransform(39,63.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BD3A3A").s().p("AgbgqIAkABIAbAKIgDBHIhEAEg");
	this.shape_45.setTransform(36.5,61.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgKAKQgEgEAAgGQAAgFAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_46.setTransform(41.2,29.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BD3A3A").s().p("AgKAHIABgBIAEgMIAQAAIgCAGIgKgCIgBAJg");
	this.shape_47.setTransform(36.6,56.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3E5665").s().p("AgEAOIABgcIAGACIABAbg");
	this.shape_48.setTransform(37.7,43.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDA96F").s().p("AgGBEIgEgRIAEgJIAGgwIADg9IAIALIgHB8g");
	this.shape_49.setTransform(37.1,49.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5D4736").s().p("AgCgDIACgBIADAJIgEAAg");
	this.shape_50.setTransform(63.4,49.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5D4736").s().p("AgBAEIABgJIACABIAAAKg");
	this.shape_51.setTransform(59.4,49.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FEBF87").s().p("AgKAAIAMgJIAJAGIgBADIgFAAIgDgBIgIALg");
	this.shape_52.setTransform(57.4,50.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FEBF87").s().p("AgEgBQgGADgCgBIgCgCIAIgGIAGgDIAPAJIgIAMg");
	this.shape_53.setTransform(65.4,50.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DB635E").s().p("AgLAuIAAhDIAGgUIgDgFIAGgIIAHAEIgFAHIAHAVIAFBCIgNALg");
	this.shape_54.setTransform(61.1,43.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgTgBIAFgHIANAFIANgJIAIAHIgGAOIgPgJIgKANg");
	this.shape_55.setTransform(61,37.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMADIAHgPIASAKIgKAPg");
	this.shape_56.setTransform(66.7,49.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLgFIAUgGIADAMIgPALg");
	this.shape_57.setTransform(56.4,50);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCDDEE").s().p("AAAAvIAEgNQABgYgBgHQAAgEgEgLIgEgKIgEAiIADAaIgFACIgCgdQgBgSADgPQAEgaAEAAQACAAABALIACAPIAFAKIAEALQACAIgEAbIgIAPg");
	this.shape_58.setTransform(65.7,44.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCDDEE").s().p("AgJAaIADgWIAEgVIgCgRQgCgLABgBQADgDAEAJIAGAMQACAHAAAQIgCAVIAAASIgFgBIgBgMQADgWgBgHIgBgLIgFAbIAAAmIgEACg");
	this.shape_59.setTransform(57.7,45.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3EFFC").s().p("Ag9A9QgEgaAAgJQAAgHACgMIABgbQAAgUAEgHQADgEAOgHIANgGIAlgEIAPAEQAPAEAFAFQAHAIAHAWQAHAWABALQABANgHAZIgIATIgLgGIAHgPQAEgbgBgJIgEgJIgFgLIgCgPQgCgKgDAAQgEgBgEAaQgCAOABATIACAdQgRAHgQgCQgJAAgTgFIAAgSIACgXQAAgOgCgHIgGgNQgFgIgDADQgBAAACALIACASIgEAVIgDAWIADAWIgIAFg");
	this.shape_60.setTransform(61.9,43.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FDA96F").s().p("AAAAHQgEgBABgGQABgGADAAQAEABgBAGQgBAGgDAAIAAAAg");
	this.shape_61.setTransform(62.8,33.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDA96F").s().p("AgDABQgBgGAEgBQADAAABAGQABAGgEABIgBAAQgCAAgBgGg");
	this.shape_62.setTransform(58.5,33.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#403024").s().p("AARACQgCgBgGABIgJAAQgJgBgHADQgDACgBAHIgBAIQgDgLAAgJQAAgVAVAAQAOAAAGAFQAHADAAAJQACAMgGAMQABgRgEgCg");
	this.shape_63.setTransform(60.7,31.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDA96F").s().p("AgFAYQgEgCgEgFQgFgEgBgEQgCgFABgOIABgOIAoAAQABAagDAHQgBAEgEAEQgEAFgDACIgHABIgFgBg");
	this.shape_64.setTransform(60.7,34);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FD8A5A").s().p("AgJABQgHgLAGAFQALAJANgKQAAAMgLABIgCAAQgFAAgFgGg");
	this.shape_65.setTransform(60.7,36.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FEBF87").s().p("AgNADIAAgJIAagCIABAIIgOAJg");
	this.shape_66.setTransform(60.8,36.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#443123").s().p("AgXAEIgOgEIADgHIBGABIACAGQgUAHgQAAQgJAAgQgDg");
	this.shape_67.setTransform(61.5,49.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5D4736").s().p("AgzBiIgDgFIADgDIADgDQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBAAIgDgEQgCgHABgQIABgYIACgUIAAhRIANggIBGgBIAMAjIAFBXIAHAyQgEAIAAACIADADIADACQABADgFAIIgXgBQgFgFAAgDQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBABAAIACgEIgFgGQgCgHgBgQIgBgYIgQhTIgSAAIgIA+IAAAjQABAYgEAJIgEAEIACAHQADAEgBABQAAAEgGAHg");
	this.shape_68.setTransform(62,58.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#443123").s().p("AAAAOQgDgBgEgFQgEgEgBgDQgBgBABgHIAAgGIASAAIAGAQIACAIQgCACgFABIgEAAIgDAAg");
	this.shape_69.setTransform(66.3,69.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#443123").s().p("AgNALIAAgGIAGgRIAUAAQABAJgBADQgBAHgGAEQgDACgGAAQgHAAgDgCg");
	this.shape_70.setTransform(57.7,69.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DBEDC1").s().p("AnaHbQjFjEABkXQgBkVDFjFQDFjFEVAAQEWAADFDFQDFDFAAEVQAAEXjFDEQjFDFkWgBQkVABjFjFg");
	this.shape_71.setTransform(73.3,72);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EFEFEF").s().p("AkcKXQiDg3hmhjQhlhkg5iBQg5iGAAiSQAAiRA5iGQA5iBBlhkQBmhjCDg3QCIg4CUAAQCVAACJA4QCDA3BmBjQBlBkA3CBQA6CGAACRQAACTg6CFQg3CBhlBkQhmBjiDA3QiJA4iVAAQiUAAiIg4g");
	this.shape_72.setTransform(73.3,71.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m04_tmr_EQUIPO, new cjs.Rectangle(0,0,165.9,143.9), null);


(lib.icocopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//parent.canvasBarra.deshabilitar_siguiente();
		//parent.canvasBarra.habilitar_eval();
		parent.habilitarEval();
	}
	this.frame_105 = function() {
		this.stop();
		this.stage.enableMouseOver();
		this.btn_enviarEvaluacion.addEventListener("mousedown", function () {
			console.log("Llamar Evaluación");
			if (parent.oportunidades <= parent.obj.Evaluaciones[0].MaxIntentos) {
				parent.llamar_evaluacion();
			} else {
				alert("Usted a excedido el límite de oportunidades");
			}
		});
		this.btn_enviarEvaluacion.cursor="pointer";
		this.btn_enviarEvaluacion.addEventListener("mouseover", function (c) {
			console.log("si llama");
			c.currentTarget.gotoAndStop(1);
		});
		this.btn_enviarEvaluacion.addEventListener("mouseout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		
		parent.canvasBarra.deshabilitar_siguiente();
		parent.canvasBarra.habilitar_eval();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(105).call(this.frame_105).wait(1));

	// Layer 5
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(0,-250.3,0.866,0.866,0,0,0,421.9,38.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({scaleX:1,scaleY:1,y:-290.3,alpha:1},14).wait(63));

	// Capa 1
	this.instance_1 = new lib.Symbol1ll();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,-162.9,1,1,-135,0,0,32.4,32.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({regX:32.5,rotation:0,x:-2.9,y:-221.6,alpha:1},14).wait(10).to({scaleX:1.26,scaleY:1.26},7).to({scaleX:1,scaleY:1,x:-2.5},8).wait(22));

	// Layer 3
	this.btn_enviarEvaluacion = new lib.mc_btn_eval();
	this.btn_enviarEvaluacion.parent = this;
	this.btn_enviarEvaluacion.setTransform(0.4,32.3,1.041,1.041,-74.7,0,0,17.2,16.8);
	this.btn_enviarEvaluacion.alpha = 0;
	this.btn_enviarEvaluacion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_enviarEvaluacion).wait(94).to({_off:false},0).to({scaleX:3.79,scaleY:3.79,rotation:0,x:0.8,y:32.7,alpha:1},10).wait(2));

	// Layer 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.7,-209.6,0.869,0.869,0,0,0,350.2,63.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.text = new cjs.Text("Te invitamos a realizar \nla evaluación.", "41px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 505;
	this.text.parent = this;
	this.text.setTransform(-2.7,-178.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},84).to({state:[{t:this.instance_2},{t:this.text}]},10).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({regX:353,regY:58.3,scaleX:1,scaleY:1,x:0,y:-154.6,alpha:1},10).wait(12));

	// Layer 6
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.7,-152.4,0.403,0.403,0,0,0,449.3,191);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:449.4,scaleX:1,scaleY:1,y:-152.3,alpha:1},14).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.2,-229.3,362,153.8);


(lib.ico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.AS_LG_153ss("single",0);
	this.instance.parent = this;
	this.instance.setTransform(38.6,12.7,1,1,0,0,0,23.9,23.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEAA2A").s().p("AjlDmQhfhgAAiGQAAiGBfhfQBfhfCGAAQCGAABgBfQBfBfAACGQAACGhfBgQhgBfiGAAQiGAAhfhfg");
	this.shape.setTransform(32.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico, new cjs.Rectangle(0,0,65,65), null);


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


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnUHVQjCjDAAkSQAAkSDCjCQDCjCESAAQESAADDDCQDCDCAAESQAAESjCDDQjDDCkSAAQkSAAjCjCg");
	mask.setTransform(66.3,66.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC99C").s().p("AgRAEIADgRIAggKIgIAvg");
	this.shape.setTransform(66.3,77);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF792").s().p("AhJAMIgJgXICcAAIAJAXg");
	this.shape_1.setTransform(91.8,100.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0E1AB").s().p("AgvCsIhzlXICxAAICUFXg");
	this.shape_2.setTransform(100.1,119);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC99C").s().p("AhNgHICIgNIATAlIiQAEg");
	this.shape_3.setTransform(90.7,97.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC99C").s().p("AAIBVIhhi8IAWgBQAZAEARAcIAnA7IAognIAjBCIgnBbg");
	this.shape_4.setTransform(79.3,87.8);

	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(88.1,80.6,1,1,0,0,0,20.8,4.6);
	this.instance.alpha = 0.199;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE888C").s().p("Ai6gLIgsghIA1gQIGYBIIgIAxg");
	this.shape_5.setTransform(85.9,80.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECEDED").s().p("AgiAjIAAhFIBFBFg");
	this.shape_6.setTransform(92.4,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECEDED").s().p("AgfAiQgMgLgCgSIhPAAIAAglIBdgBQANgLASAAQAQAAANALIBggBIAAAnIhRAAQgDASgMALQgNAMgQAAQgSAAgNgMgAgYgXIgCACIhXAAIAAAQIBPAAIAAAFQAAAOAKAJQAKAKAOAAQAMAAAKgKQAKgJAAgOIAAgFIBRAAIAAgSIhZABIgCgBQgJgKgNAAQgOAAgKAKg");
	this.shape_7.setTransform(67.3,36.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEC99C").s().p("AANCBQgIgBgIgDQgSgGgIgNQgFgJgdhGIguhwQgbgPgEgLQgDgIAFgJIAGgHICwBDIBiDMg");
	this.shape_8.setTransform(83.6,84.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF792").s().p("AhSAMIAJgXICcAAIgJAXg");
	this.shape_9.setTransform(25.8,90.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0E1AB").s().p("AiiCsICUlXICxAAIhzFXg");
	this.shape_10.setTransform(17.5,108.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEC99C").s().p("AhFBYIBIivIBCAAIhICvg");
	this.shape_11.setTransform(19.6,96.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1BF94").s().p("AhkB7IBhiNIBZhrIANAPQAIAXgVAqQghBDgKAQQAABIhHANQgRADgSAAQgSAAgTgDg");
	this.shape_12.setTransform(30,75.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC4942").s().p("AAPAXIgPgQIgPAQIgHgHIAQgQIgQgOIAHgIIAPAQIAQgQIAHAIIgQAOIAQAQIgHAHg");
	this.shape_13.setTransform(46.5,92);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FC4942").s().p("AAPAWIAAABIgPgQIgPAQIgHgHIAQgQIgQgPIAHgHIAPAQIAQgQIAHAHIgQAPIAQAQIgHAHg");
	this.shape_14.setTransform(46.5,81.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#78B840").s().p("AgNAQIAAgBIgSgRIAHgHIASARIAfgeIAHAHIggAeIABABIgHAHg");
	this.shape_15.setTransform(46.3,70.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#78B840").s().p("AgfgCIAHgHIASASIAfgfIAHAHIggAfIABAAIgHAHg");
	this.shape_16.setTransform(46.3,60.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#78B840").s().p("AgNAQIAAgBIgSgRIAHgHIASARIAfgeIAHAHIggAeIABABIgHAHg");
	this.shape_17.setTransform(46.3,49.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ECEDED").s().p("AgrAsIAAhWIBXAAIAABWg");
	this.shape_18.setTransform(46.3,92);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECEDED").s().p("AjAAsIAAhWIGCAAIAABWg");
	this.shape_19.setTransform(71.9,92);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECEDED").s().p("AgrAsIAAhXIBXAAIAABXg");
	this.shape_20.setTransform(46.3,81.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECEDED").s().p("AjAAsIAAhXIGCAAIAABXg");
	this.shape_21.setTransform(71.9,81.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ECEDED").s().p("AgrAsIAAhXIBXAAIAABXg");
	this.shape_22.setTransform(46.3,70.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ECEDED").s().p("AjAAsIAAhXIGCAAIAABXg");
	this.shape_23.setTransform(71.9,70.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECEDED").s().p("AgrArIAAhVIBXAAIAABVg");
	this.shape_24.setTransform(46.3,59.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ECEDED").s().p("AjAArIAAhVIGCAAIAABVg");
	this.shape_25.setTransform(71.9,59.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ECEDED").s().p("AgrAsIAAhWIBXAAIAABWg");
	this.shape_26.setTransform(46.3,49.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ECEDED").s().p("AjAAsIAAhWIGCAAIAABWg");
	this.shape_27.setTransform(71.9,49.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ECEDED").s().p("Ah8AeIAAg7ID5AAIAAA7g");
	this.shape_28.setTransform(67.3,31);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AkdF3IAArtII7AAIAALtg");
	this.shape_29.setTransform(67.2,69.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1BF94").s().p("AhpBpIBXjRIB8AiIhBCvg");
	this.shape_30.setTransform(23.2,94.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ECEDED").s().p("AkfF9IAAr5II/AAIAAL5g");
	this.shape_31.setTransform(68.2,69.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#70B5C4").s().p("AkgGiQgRAAgLgMQgMgMAAgQIAArzQAAgQAMgMQALgMARAAIJBAAQARAAAMAMQALAMAAAQIAALzQAAAQgLAMQgMAMgRAAg");
	this.shape_32.setTransform(67.2,69.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F1BF94").s().p("AgNg1IBshrQgFEOgNAVQgIAMgSAHIgQADIiAAHg");
	this.shape_33.setTransform(29.2,72.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.instance,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(1.2,28,115.2,104.6), null);


(lib.destello_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(2));

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(66.8,16.4,1,1,0,0,0,67,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},35).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape.setTransform(66,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.545)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_1.setTransform(66,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.49)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_2.setTransform(66,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.435)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_3.setTransform(66,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.38)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_4.setTransform(66,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.329)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_5.setTransform(66,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.275)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_6.setTransform(66,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.22)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_7.setTransform(66,16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.165)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_8.setTransform(66,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.11)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_9.setTransform(66,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.161)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_10.setTransform(66,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.208)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_11.setTransform(66,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.259)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_12.setTransform(66,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.306)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_13.setTransform(66,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.357)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_14.setTransform(66,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.404)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_15.setTransform(66,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.451)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_16.setTransform(66,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.502)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_17.setTransform(66,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.549)").s().p("AobCnQgyAAgjghQgegdgEgnIgBAAIAAh1QAAgwAjgiQAjghAygBIQ3AAQAyABAjAhQAjAiAAAwIAAB1IgBAAQgEAngeAdQgjAhgyAAg");
	this.shape_18.setTransform(66,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},16).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-2.1,135,37);


(lib.btn_simulacion = function(mode,startPosition,loop) {
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
	this.d1 = new lib.destello_mc();
	this.d1.parent = this;
	this.d1.setTransform(1.5,90.6,1,1,0,0,0,66,16.8);

	this.timeline.addTween(cjs.Tween.get(this.d1).to({_off:true},1).wait(1));

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.02)").s().p("AobCoQgyAAgjgiQgegegEgnIgBAAIAAh1QAAgvAjgiQAjgiAyAAIQ3AAQAyAAAjAiQAjAiAAAvIAAB1IgBAAQgEAngeAeQgjAigyAAg");
	this.shape.setTransform(1.5,90.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AobCoQgyAAgjgiQgegegEgnIgBAAIAAh1QAAgvAjgiQAjgiAyAAIQ3AAQAyAAAjAiQAjAiAAAvIAAB1IgBAAQgEAngeAeQgjAigyAAg");
	this.shape_1.setTransform(1.5,90.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,71.7,135,37);


(lib.titulomodulo3TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_86 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(86).call(this.frame_86).wait(1));

	// Capa_3
	this.instance = new lib.mc_numMod03();
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


(lib.tarjeta02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Evaluación grupal de potencial", "bold 19px 'Arial'", "#555555");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(279.9,122.1);

	this.instance = new lib.m04_tmr_EQUIPO();
	this.instance.parent = this;
	this.instance.setTransform(278.5,59.5,0.787,0.787,0,0,0,73.4,71.9);

	this.instance_1 = new lib.M03_TMR_TABLA();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.8,59.6,0.787,0.787,0,0,0,73.4,72);

	this.instance_2 = new lib.botonsimulapractica("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(261.9,269.2,1,1,0,0,0,66.5,20.8);

	this.instance_3 = new lib.botonsimulapractica("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(261.9,226.2,1,1,0,0,0,66.5,20.8);

	this.instance_4 = new lib.botonsimulapractica("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(41.2,269.2,1,1,0,0,0,66.5,20.8);

	this.instance_5 = new lib.botonsimulapractica("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(41.2,226.2,1,1,0,0,0,66.5,20.8);

	this.text_1 = new cjs.Text("Evaluación individual de potencial", "bold 19px 'Arial'", "#555555");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 180;
	this.text_1.parent = this;
	this.text_1.setTransform(58.1,122.1);

	this.instance_6 = new lib.atrasboton("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(278.4,133.5,1,1,0,0,0,82.5,52.8);

	this.instance_7 = new lib.atrasboton("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(57.7,133.5,1,1,0,0,0,82.5,52.8);

	this.instance_8 = new lib.lineamenus("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(278.4,214.9,1,1,0,0,0,0.5,41);

	this.instance_9 = new lib.lineamenus("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(57.7,214.9,1,1,0,0,0,0.5,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.text_1},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta02, new cjs.Rectangle(-34,2.9,396.6,279), null);


(lib.m04_tmr_formulario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("2", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 43;
	this.text.parent = this;
	this.text.setTransform(137.7,21.2,1.192,1.192);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#70B5C4").s().p("AiFCGQg3g4AAhOQAAhOA3g2QA3g4BOAAQBOAAA3A4QA4A2AABOQAABOg4A4Qg3A3hOAAQhOAAg3g3g");
	this.shape.setTransform(138,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AkcKXQiEg3hlhjQhmhkg4iBQg5iGAAiSQAAiRA5iGQA4iBBmhkQBlhjCEg3QCIg4CUAAQCVAACIA4QCEA3BlBjQBmBkA3CBQA6CFAACSQAACSg6CGQg3CBhmBkQhlBjiEA3QiIA4iVAAQiUAAiIg4g");
	this.shape_1.setTransform(137.9,34.2,0.328,0.328);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(69.2,71.1,1,1,0,0,0,66.3,68);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A6D7E8").s().p("Am+HAQi5i5AAkHQAAkGC5i5QC5i6EFAAQEGAAC5C6QC5C5AAEGQAAEHi5C5Qi5C6kGAAQkFAAi5i6g");
	this.shape_2.setTransform(69.2,69.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AkMJ/Qh9g0hfhgQjLjMAAkfQAAkfDLjLQDKjLEeAAQEeAADLDLQDLDMAAEeQAAEfjLDMQhgBgh8A0QiAA3iNAAQiMAAiAg3g");
	this.shape_3.setTransform(69.2,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m04_tmr_formulario, new cjs.Rectangle(0,0,165.9,139.3), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(5).to({x:8},0).to({x:535.3},37).wait(6));

	// tapa circulo
	this.instance_5 = new lib.tapakakigeneral("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(4227,91.6,39.904,2.053,0,0,0,106.7,44.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({regX:106.8,scaleX:13.71,x:1985.5},42,cjs.Ease.get(1)).wait(1));

	// Instruccion
	this.text = new cjs.Text("Haz clic en los botones para revisar los pasos en la herramienta... ", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 719;
	this.text.parent = this;
	this.text.setTransform(-14.4,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-9.3,241,52);


(lib.tarjeta01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.m04_tmr_formulario();
	this.instance.parent = this;
	this.instance.setTransform(256.7,63.6,0.867,0.867,0,0,0,69.3,69.7);

	this.instance_1 = new lib.m04_tmr_PORTAL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39.5,59.7,0.787,0.787,0,0,0,73.3,71.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa 1
	this.instance_2 = new lib.botonsimulapractica("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23,270.4,1,1,0,0,0,66.5,20.8);

	this.instance_3 = new lib.botonsimulapractica("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23,227.4,1,1,0,0,0,66.5,20.8);

	this.instance_4 = new lib.botonsimulapractica("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(240.1,270.4,1,1,0,0,0,66.5,20.8);

	this.instance_5 = new lib.botonsimulapractica("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(240.1,227.4,1,1,0,0,0,66.5,20.8);

	this.text = new cjs.Text(" Ingresar a mis formularios", "bold 19px 'Arial'", "#555555");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 149;
	this.text.parent = this;
	this.text.setTransform(256.6,129.5);

	this.text_1 = new cjs.Text("Ingresar al portal SSFF", "bold 19px 'Arial'", "#555555");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 149;
	this.text_1.parent = this;
	this.text_1.setTransform(39.5,129.5);

	this.instance_6 = new lib.atrasboton("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(256.6,134.7,1,1,0,0,0,82.5,52.8);

	this.instance_7 = new lib.atrasboton("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(39.5,134.7,1,1,0,0,0,82.5,52.8);

	this.instance_8 = new lib.lineamenus("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(39.5,223.1,1,1,0,0,0,0.5,41);

	this.instance_9 = new lib.lineamenus("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(256.6,223.1,1,1,0,0,0,0.5,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.text_1},{t:this.text},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta01, new cjs.Rectangle(-43,3.1,383.4,280), null);


(lib.M01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_197 = function() {
		this.stop();
		var root = this;
		var botones = 8;
		var LASTMC = true; //es el ultimo mc? lanzara verde? true/false
		var array;
		var NumVideos = botones; // el numero de simulaciones
		funcion_inicial();
		function funcion_inicial() {
			try {
				//variable para almacenar la última simulación seleccionada, 
				//es declarada como propiedad para poder tener acceso a ella desde el start
				root.ultimosim = null;
		
				//Arreglo de direcciones de las simulaciones
				array = ["temas/AC_TMR_M04_01_SIM/index.html", 
						 "temas/AC_TMR_M04_01_PRA/index.html", 
						 "temas/AC_TMR_M04_02_SIM/index.html", 
						 "temas/AC_TMR_M04_02_PRA/index.html", 
						 "temas/AC_TMR_M04_03_SIM/index.html", 
						 "temas/AC_TMR_M04_03_PRA/index.html", 
						 "temas/AC_TMR_M04_04_SIM/index.html", 
						 "temas/AC_TMR_M04_04_PRA/index.html"];
			
				//Permite el camio de cursores
				stage.enableMouseOver();
		
				iniciar();
				parent.canvasBarra.cambio_cerrar(0); //Cambia el estado del botón cerrar
			} catch (e) {
				console.log("Error: ", e);
			}
		}
		
		//Funcion con la que inicia el tema
		function iniciar() {
			
			for (var i = 1; i <= botones; i++) {
				root['b' + i].n = i;
				root['b' + i].gotoAndStop(0);
				root['b' + i].activo = false;
				root['b' + i].cursor = "pointer";
				root['b' + i].addEventListener("click", fn);
				root['b' + i].visto = false;
				root['b' + i].d1.alpha = 0;
				root['b' + i].mouseEnabled = false
			}
			//desbloque el primer boton
			root.b1.mouseEnabled=true;
			//inicia el brillo para el primer boton----
			root['b' + 1].d1.alpha = 1;
		}
		
		
		
		//Función de los botónes para cargar simulaciones
		function fn(p) {
			var finalizo = true;
			p.currentTarget.visto = true;
			if(p.currentTarget.n == 7)
			{
				let variable = p.currentTarget.n;
				variable++;
				root['b' + variable].mouseEnabled = true;
			} else if(p.currentTarget.n < 7 && p.currentTarget.n % 2 !=0)
			{
				console.log("habilita boton");
				let variable = p.currentTarget.n;
				variable++;
				root['b' + variable].mouseEnabled = true;
				variable++;
				root['b' + variable].mouseEnabled = true;
			}
			
			for (var i = 1; i <= botones; i+=2) {
						
				console.log(root['b' + i].visto);
				
				if (!root['b' + i].visto) {
					finalizo=false;
					root['b' + i].d1.alpha = 1;
					break;
		
				}
			}
			
			
			
			try {
				//console.log(p.currentTarget.timeline.position);
				if (p.currentTarget.timeline.position == 0) {
					p.currentTarget.gotoAndStop(1);
				}
				root.ultimosim = p; //se actualiza la últimos simulación abierta
		
				//parent.canvasBarra.cambio_cerrar(1); //Cambia el estado del botón cerrar
				//parent.Cargar_Sim(array[p.currentTarget.n - 1],finalizo, LASTMC);
				if(finalizo){
					parent.final_tema();
				}
			} catch (e) {
				console.log("Error: ", e);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(197).call(this.frame_197).wait(75));

	// textos q no se tapen
	this.instance = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(691.4,399.8,1,1,0,0,0,6.5,9.7);

	this.text = new cjs.Text("Práctica", "16px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 88;
	this.text.parent = this;
	this.text.setTransform(703.8,392.1);

	this.instance_1 = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(691.4,357,1,1,0,0,0,6.5,9.7);

	this.text_1 = new cjs.Text("Simulación", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 88;
	this.text_1.parent = this;
	this.text_1.setTransform(703.8,349.3);

	this.instance_2 = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(470.9,399.8,1,1,0,0,0,6.5,9.7);

	this.text_2 = new cjs.Text("Práctica", "16px 'Arial'", "#333333");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 88;
	this.text_2.parent = this;
	this.text_2.setTransform(483.3,392.1);

	this.instance_3 = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(470.9,357,1,1,0,0,0,6.5,9.7);

	this.text_3 = new cjs.Text("Simulación", "16px 'Arial'", "#333333");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 88;
	this.text_3.parent = this;
	this.text_3.setTransform(483.3,349.3);

	this.instance_4 = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(251.3,400.8,1,1,0,0,0,6.5,9.7);

	this.text_4 = new cjs.Text("Práctica", "16px 'Arial'", "#333333");
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 88;
	this.text_4.parent = this;
	this.text_4.setTransform(263.7,393.1);

	this.instance_5 = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(251.3,358,1,1,0,0,0,6.5,9.7);

	this.text_5 = new cjs.Text("Simulación", "16px 'Arial'", "#333333");
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 88;
	this.text_5.parent = this;
	this.text_5.setTransform(263.7,350.3);

	this.instance_6 = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(34.3,400.8,1,1,0,0,0,6.5,9.7);

	this.text_6 = new cjs.Text("Práctica", "16px 'Arial'", "#333333");
	this.text_6.lineHeight = 20;
	this.text_6.lineWidth = 88;
	this.text_6.parent = this;
	this.text_6.setTransform(46.7,393.1);

	this.instance_7 = new lib.flechabotnesnsimulacionespract("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(34.3,358,1,1,0,0,0,6.5,9.7);

	this.text_7 = new cjs.Text("Simulación", "16px 'Arial'", "#333333");
	this.text_7.lineHeight = 20;
	this.text_7.lineWidth = 88;
	this.text_7.parent = this;
	this.text_7.setTransform(46.7,350.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.instance_7},{t:this.text_6},{t:this.instance_6},{t:this.text_5},{t:this.instance_5},{t:this.text_4},{t:this.instance_4},{t:this.text_3},{t:this.instance_3},{t:this.text_2},{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text},{t:this.instance}]},196).wait(76));

	// botones
	this.b8 = new lib.btn_simulacion();
	this.b8.parent = this;
	this.b8.setTransform(731.3,309.7);

	this.b6 = new lib.btn_simulacion();
	this.b6.parent = this;
	this.b6.setTransform(509.9,310.2);

	this.b5 = new lib.btn_simulacion();
	this.b5.parent = this;
	this.b5.setTransform(509.9,267.2);

	this.b7 = new lib.btn_simulacion();
	this.b7.parent = this;
	this.b7.setTransform(731.3,266.7);

	this.b4 = new lib.btn_simulacion();
	this.b4.parent = this;
	this.b4.setTransform(291.3,311.2);

	this.b3 = new lib.btn_simulacion();
	this.b3.parent = this;
	this.b3.setTransform(291.3,267.2);

	this.b2 = new lib.btn_simulacion();
	this.b2.parent = this;
	this.b2.setTransform(74.5,311.2);

	this.b1 = new lib.btn_simulacion();
	this.b1.parent = this;
	this.b1.setTransform(74.5,266.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b7},{t:this.b5},{t:this.b6},{t:this.b8}]},196).wait(76));

	// mc_inctrucción
	this.instance_8 = new lib.instrucciones1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(346,115.8,1,1,0,0,0,95.7,21.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(196).to({_off:false},0).wait(76));

	// tarjeta02
	this.instance_9 = new lib.tarjeta02();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1556.4,252.7,1,1,0,0,0,201.5,117.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(161).to({_off:false},0).wait(1).to({regX:164.4,regY:142.4,x:1518.2,y:277.3},0).wait(1).to({x:1514.8},0).wait(1).to({x:1509},0).wait(1).to({x:1500.5},0).wait(1).to({x:1489.2},0).wait(1).to({x:1474.8},0).wait(1).to({x:1457.3},0).wait(1).to({x:1436.4},0).wait(1).to({x:1411.9},0).wait(1).to({x:1383.7},0).wait(1).to({x:1351.8},0).wait(1).to({x:1316.1},0).wait(1).to({x:1276.8},0).wait(1).to({x:1234.2},0).wait(1).to({x:1188.8},0).wait(1).to({x:1141.2},0).wait(1).to({x:1092.2},0).wait(1).to({x:1042.8},0).wait(1).to({x:993.9},0).wait(1).to({x:946.4},0).wait(1).to({x:901.2},0).wait(1).to({x:858.9},0).wait(1).to({x:819.9},0).wait(1).to({x:784.5},0).wait(1).to({x:752.8},0).wait(1).to({x:724.9},0).wait(1).to({x:700.6},0).wait(1).to({x:679.8},0).wait(1).to({x:662.5},0).wait(1).to({x:648.3},0).wait(1).to({x:637.1},0).wait(1).to({x:628.6},0).wait(1).to({x:622.8},0).wait(1).to({x:619.5},0).wait(1).to({regX:201.5,regY:117.8,x:655.5,y:252.7},0).wait(76));

	// tarjeta01
	this.instance_10 = new lib.tarjeta01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1116.4,252.7,1,1,0,0,0,201.5,117.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(154).to({_off:false},0).wait(1).to({regX:148,regY:143.1,x:1062.2,y:278},0).wait(1).to({x:1059.9},0).wait(1).to({x:1056},0).wait(1).to({x:1050.3},0).wait(1).to({x:1042.9},0).wait(1).to({x:1033.5},0).wait(1).to({x:1022.1},0).wait(1).to({x:1008.5},0).wait(1).to({x:992.6},0).wait(1).to({x:974.4},0).wait(1).to({x:953.8},0).wait(1).to({x:930.6},0).wait(1).to({x:904.9},0).wait(1).to({x:876.6},0).wait(1).to({x:845.9},0).wait(1).to({x:812.8},0).wait(1).to({x:777.6},0).wait(1).to({x:740.5},0).wait(1).to({x:701.9},0).wait(1).to({x:662.3},0).wait(1).to({x:622.1},0).wait(1).to({x:582},0).wait(1).to({x:542.5},0).wait(1).to({x:504},0).wait(1).to({x:467.1},0).wait(1).to({x:432},0).wait(1).to({x:399.1},0).wait(1).to({x:368.6},0).wait(1).to({x:340.6},0).wait(1).to({x:315.1},0).wait(1).to({x:292.2},0).wait(1).to({x:271.7},0).wait(1).to({x:253.6},0).wait(1).to({x:237.9},0).wait(1).to({x:224.5},0).wait(1).to({x:213.1},0).wait(1).to({x:203.8},0).wait(1).to({x:196.4},0).wait(1).to({x:190.9},0).wait(1).to({x:187},0).wait(1).to({x:184.7},0).wait(1).to({regX:201.5,regY:117.8,x:237.5,y:252.7},0).wait(76));

	// ico+
	this.instance_11 = new lib.ico();
	this.instance_11.parent = this;
	this.instance_11.setTransform(49.8,47.6,0.262,0.262,0,0,0,32.5,32.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(106).to({_off:false},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.31,scaleY:0.31},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.49,scaleY:0.49},0).wait(1).to({scaleX:0.64,scaleY:0.64},0).wait(1).to({scaleX:0.81,scaleY:0.81},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({regX:32.6,regY:32.6,scaleX:1.29,scaleY:1.29},0).wait(1).to({regX:32.5,regY:32.5,scaleX:1.25,scaleY:1.25,x:49.6,y:47.4},0).wait(1).to({scaleX:1.2,scaleY:1.2},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:49.5,y:47.3},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:49.6,y:47.4},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1,x:49.7,y:47.5},0).wait(144));

	// Capa 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhJVAMGIAA4MMCSqAAAIAAYMg");
	this.shape.setTransform(-383.6,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},153).wait(119));

	// info_ico+
	this.instance_12 = new lib.info_ico();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-290.4,49,1,1,0,0,0,357.1,40);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(129).to({_off:false},0).wait(1).to({regX:358.5,regY:50.2,x:-286.9,y:59.2},0).wait(1).to({x:-280},0).wait(1).to({x:-267.2},0).wait(1).to({x:-247.1},0).wait(1).to({x:-217.6},0).wait(1).to({x:-176.3},0).wait(1).to({x:-120.7},0).wait(1).to({x:-49.9},0).wait(1).to({x:32},0).wait(1).to({x:115},0).wait(1).to({x:189.5},0).wait(1).to({x:251.5},0).wait(1).to({x:301.3},0).wait(1).to({x:340.7},0).wait(1).to({x:371.6},0).wait(1).to({x:395.7},0).wait(1).to({x:414.1},0).wait(1).to({x:427.9},0).wait(1).to({x:437.7},0).wait(1).to({x:444.2},0).wait(1).to({x:447.8},0).wait(1).to({regX:357.1,regY:40,x:447.6,y:49},0).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-853,-22.2,938.7,154.9);


// stage content:
(lib.AC_TMR_M04_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		parent.iniciar_tema(this);
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// TITULO
	this.instance = new lib.tema_entrada_titulo();
	this.instance.parent = this;
	this.instance.setTransform(303.6,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// PAGINAS
	this.instance_1 = new lib.titulomodulo3TMR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380,245.4,1,1,0,0,0,323.9,217.4);

	this.mcSIM = new lib.M01();
	this.mcSIM.parent = this;
	this.mcSIM.setTransform(488.8,246.9,1,1,0,0,0,421.5,222.8);

	this.instance_2 = new lib.icocopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(507.3,401.9,1,1,0,0,0,32.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.mcSIM}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480.5,256.9,645,457.6);
// library properties:
lib.properties = {
	width: 950,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/modulo4a.png", id:"modulo4a"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;