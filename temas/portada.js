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



(lib.Portadadelcursoopción1 = function() {
	this.initialize(img.Portadadelcursoopción1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,3024);// helper functions:

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


(lib.ventana_textointro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E3E2").s().p("AtFGvQghAAgYgXQgXgYAAghIAAq9QAAghAXgYQAYgXAhAAIaLAAQAhAAAYAXQAXAYAAAhIAAK9QAAAhgXAYQgYAXghAAg");
	this.shape.setTransform(226.1,106.2,2.42,2.42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ventana_textointro, new cjs.Rectangle(3.9,1.8,444.4,208.8), null);


(lib.txt04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArB9IgrifIgpCfIhBAAIhOj5IBAAAIAuCiIAriiIA/AAIApCiIAwiiIBBAAIhQD5g");
	this.shape.setTransform(0.3,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaBYQgZgjAAgzQAAg9AggjQAhgjAxAAQA3AAAgAlQAgAlgCBKIikAAQABAeAPAPQAQARAVAAQAQAAAKgJQALgIAFgTIBCALQgNAlgbASQgbATgpAAQhAAAgfgqgAghg/QgOAQABAbIBhAAQgBgdgOgOQgOgPgUgBQgUAAgPAQg");
	this.shape_1.setTransform(-32.1,50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggCsIAAj4IBBAAIAAD4gAgghuIAAg9IBBAAIAAA9g");
	this.shape_2.setTransform(-51.8,46.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcB9Ihkj5IBFAAIAvB+IAMArIAHgVIAHgWIAwh+IBDAAIhjD5g");
	this.shape_3.setTransform(-72.1,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaBYQgZgjAAgzQAAg9AggjQAhgjAxAAQA3AAAgAlQAgAlgCBKIikAAQABAeAPAPQAQARAVAAQAQAAAKgJQALgIAFgTIBCALQgNAlgbASQgbATgpAAQhAAAgfgqgAghg/QgOAQABAbIBhAAQgBgdgOgOQgOgPgUgBQgUAAgPAQg");
	this.shape_4.setTransform(-98.8,50.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABHCsIgxhLQgagogKgKQgKgLgLgEQgLgEgYAAIgOAAIAACQIhGAAIAAlXICSAAQA3AAAZAKQAYAJAQAXQAPAYgBAeQABAngXAZQgXAZgtAGQAWANAPAQQAPAQAZAoIApBDgAhUgaIAzAAQAxAAAMgEQANgEAHgKQAHgLAAgPQAAgRgJgLQgKgLgQgDQgJgBgpAAIg2AAg");
	this.shape_5.setTransform(-127.6,46.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKCmQgOgHgHgJQgHgKgCgQQgCgLAAgjIAAhsIgeAAIAAg0IAeAAIAAgyIBBgmIAABYIAtAAIAAA0IgtAAIAABkQAAAeABAFQABAFAFADQAFAEAGAAQAJAAASgHIAFA0QgXAJgdAAQgSAAgNgFg");
	this.shape_6.setTransform(138.9,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAvB/IAAh/QAAgngEgMQgEgMgKgGQgJgHgNAAQgQAAgOAJQgNAKgGAPQgEAQAAApIAABwIhCAAIAAj4IA8AAIAAAlQAhgqAwAAQAXAAASAIQASAHAJANQAJAMAEAPQADAQABAdIAACZg");
	this.shape_7.setTransform(116.3,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhaBYQgZgjAAgzQAAg9AggjQAhgjAxAAQA3AAAgAlQAgAkgCBLIikAAQABAdAPAQQAQARAVAAQAQAAAKgJQALgIAFgTIBCALQgNAkgbAUQgbASgpAAQhAAAgfgqgAghg/QgOAQABAbIBhAAQgBgdgOgPQgOgPgUAAQgUAAgPAQg");
	this.shape_8.setTransform(87.9,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB1B/IAAiNQAAglgGgLQgJgOgUAAQgOAAgLAJQgNAIgFAQQgFARAAAiIAAB3IhBAAIAAiHQAAgkgEgLQgDgLgIgFQgIgFgMAAQgPAAgMAIQgNAJgEAPQgGAPAAAjIAAB5IhCAAIAAj4IA9AAIAAAiQAggnAtAAQAYAAASAKQARAJAKAUQARgUATgJQATgKAWAAQAbAAATALQATALAKAWQAGAPAAAkIAACeg");
	this.shape_9.setTransform(53.4,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhaBYQgZgjAAgzQAAg9AggjQAhgjAxAAQA3AAAgAlQAgAkgCBLIikAAQABAdAPAQQAQARAVAAQAQAAAKgJQALgIAFgTIBCALQgNAkgbAUQgbASgpAAQhAAAgfgqgAghg/QgOAQABAbIBhAAQgBgdgOgPQgOgPgUAAQgUAAgPAQg");
	this.shape_10.setTransform(18.5,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhWCcQgagWAAghIAAgIIBLAJQADANAGAFQAKAHATAAQAZAAANgHQAJgGAEgLQAEgIAAgWIAAglQgeApgsAAQgyAAgdgrQgYghAAgxQABg/AeghQAeghAtAAQAtAAAeApIAAgjIA9AAIAADeQAAAsgHAWQgHAWgNAMQgOANgVAHQgWAHgiAAQg+AAgbgWgAgmhsQgPASAAAmQAAAoAPARQAQATAWAAQAXAAARgTQARgSAAglQAAgngQgTQgQgSgYAAQgXAAgQASg");
	this.shape_11.setTransform(-9.8,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhdBtQgXgUAAghQAAgUAKgRQALgQARgJQATgIAigGQAtgKASgHIAAgHQAAgSgKgJQgJgHgZgBQgRABgLAGQgJAHgGASIg8gLQAKglAZgQQAYgSAxAAQArAAAVALQAWAKAJAQQAJAQAAArIgBBMQAAAgADAQQADAQAJARIhBAAIgHgTIgCgIQgRARgTAIQgTAIgVAAQgnAAgVgVgAgBAPQgbAGgJAFQgNAKAAAOQAAAOALAJQAJAKARAAQAQABAQgMQAMgJAEgNQADgIAAgYIAAgNQgNAEgaAGg");
	this.shape_12.setTransform(-37.2,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAwB/IAAh/QAAgngFgMQgEgMgJgGQgKgHgOAAQgQAAgNAJQgOAKgEAPQgFAQgBApIAABwIhCAAIAAj4IA+AAIAAAlQAggqAxAAQAWAAARAIQATAHAJANQAJAMAEAPQAEAQgBAdIAACZg");
	this.shape_13.setTransform(-65.1,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AheBtQgWgUAAghQAAgUAKgRQAKgQASgJQATgIAigGQAtgKASgHIAAgHQAAgSgKgJQgJgHgZgBQgSABgKAGQgJAHgHASIg7gLQAKglAZgQQAYgSAxAAQArAAAVALQAWAKAJAQQAJAQgBArIAABMQAAAgADAQQADAQAJARIhBAAIgHgTIgCgIQgRARgTAIQgTAIgVAAQgmAAgXgVgAgBAPQgbAGgJAFQgNAKAAAOQAAAOAKAJQAKAKAQAAQASABAPgMQANgJADgNQADgIAAgYIAAgNQgNAEgaAGg");
	this.shape_14.setTransform(-93.2,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABlCsIAAkOIhEEOIhCAAIhDkOIAAEOIhBAAIAAlXIBoAAIA9DqIA+jqIBoAAIAAFXg");
	this.shape_15.setTransform(-126.6,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKCmQgOgHgHgJQgHgKgCgQQgCgLAAgjIAAhsIgeAAIAAg0IAeAAIAAgyIBBgmIAABYIAtAAIAAA0IgtAAIAABkQAAAeABAFQABAFAFADQAFAEAGAAQAJAAASgHIAFA0QgXAJgdAAQgSAAgNgFg");
	this.shape_16.setTransform(-16.7,-46.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAwB/IAAh/QgBgngEgMQgEgMgJgGQgKgHgOAAQgPAAgOAJQgOAKgEAPQgGAQAAApIAABwIhBAAIAAj4IA8AAIAAAlQAhgqAxAAQAVAAASAIQASAHAKANQAJAMAEAPQADAQABAdIAACZg");
	this.shape_17.setTransform(-39.3,-42.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhaBXQgZghAAg0QAAg9AggjQAhgjAxAAQA3AAAgAlQAgAkgCBLIikAAQABAdAPARQAQAQAVAAQAQAAAKgJQALgIAFgTIBCAMQgNAjgbAUQgbASgpAAQhAAAgfgrgAghg/QgOAQABAaIBhAAQgBgcgOgPQgOgOgUAAQgUAAgPAPg");
	this.shape_18.setTransform(-67.7,-42.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggCsIAAlXIBBAAIAAFXg");
	this.shape_19.setTransform(-87.4,-47.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AheBuQgWgWAAgfQAAgWAKgQQALgRASgHQASgJAigHQAtgJASgHIAAgHQAAgSgJgJQgKgHgZAAQgRAAgKAGQgKAHgHARIg7gKQAKgkAYgRQAZgSAwAAQAsAAAWAKQAVALAJAQQAIAQAAArIAABLQAAAiADAPQADAQAJARIhCAAIgFgTIgDgIQgRAQgTAJQgTAIgVAAQgnAAgWgUgAgCAPQgaAGgJAFQgNAKAAAOQAAAOAKAKQALAJAPABQARAAARgMQAMgJADgNQADgIAAgYIAAgNQgNAEgbAGg");
	this.shape_20.setTransform(-107.4,-42.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiCsIAAkdIhlAAIAAg6IEPAAIAAA6IhlAAIAAEdg");
	this.shape_21.setTransform(-131.9,-47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt04, new cjs.Rectangle(-148.6,-75.4,297.6,150.8), null);


(lib.txt03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBBIAAgZIAYAAIAAAZgAgMgnIAAgZIAYAAIAAAZg");
	this.shape.setTransform(109.1,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_1.setTransform(98.6,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA5QgNgKgEgVIAWgDQACANAIAHQAJAHAOAAQAOAAAIgGQAIgHgBgIQABgHgHgFQgFgDgSgEQgXgGgJgEQgKgEgEgIQgFgIAAgJQAAgJAEgHQAEgIAHgFQAFgEAIgCQAKgDAKAAQAOAAAMAFQALAEAFAIQAGAHACANIgVACQgCgKgHgFQgHgGgMAAQgPAAgHAFQgGAFAAAHQAAAEADAEQADADAFADIATAFQAXAGAJAEQAKADAEAIQAGAHAAAMQAAALgHAJQgGAKgMAFQgMAGgPAAQgZAAgNgLg");
	this.shape_2.setTransform(85.4,2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBCIAAiAIAUAAIAAATQAHgOAHgEQAFgEAIAAQALAAALAHIgHAUQgIgFgIAAQgHAAgFAFQgGAEgCAIQgEALAAAOIAABDg");
	this.shape_3.setTransform(76,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdA+QgKgFgFgGQgEgHgCgKQgBgGAAgOIAAhPIAWAAIAABHQAAARABAGQACAIAGAFQAIAFAJAAQAJAAAJgFQAIgFAEgJQADgIABgRIAAhEIAVAAIAACAIgTAAIAAgTQgPAWgZAAQgLAAgLgEg");
	this.shape_4.setTransform(63.8,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnAyQgQgRAAghQAAgUAGgPQAHgQAPgIQAOgIAQAAQAVAAANALQAOALADATIgVADQgDgNgIgGQgIgHgLAAQgPAAgLAMQgKAMAAAZQAAAaAKAMQAKAMAPAAQANAAAJgIQAJgIACgRIAVADQgDAWgPANQgOANgWAAQgZAAgQgSg");
	this.shape_5.setTransform(51.1,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBZIAAiyIAVAAIAACyg");
	this.shape_6.setTransform(34.7,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvA5QgMgKAAgQQAAgKAFgIQAEgIAHgEQAHgEAJgDIATgDQAagDAMgFIABgFQAAgOgHgFQgIgIgQAAQgPAAgHAGQgIAFgDAOIgWgDQADgOAHgIQAGgJANgEQANgFAQAAQAQAAALAEQAKAEAFAGQAFAGACAJIABAUIAAAcQAAAfABAIQACAIAEAIIgXAAQgEgHgBgJQgMAKgLAEQgKAFgNAAQgWAAgLgLgAgEAIQgOACgGACQgFADgDAFQgDAEAAAGQAAAJAGAGQAHAFANAAQAMAAAJgFQAKgGAFgJQADgIAAgOIAAgIQgLAFgXADg");
	this.shape_7.setTransform(24.9,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrAyQgRgRAAghQAAgjAUgRQARgPAXAAQAbAAARASQARARAAAfQAAAYgIAPQgIAOgOAIQgOAIgRAAQgaAAgRgSgAgbgkQgKAMAAAYQAAAZAKAMQALANAQAAQAQAAALgNQALgMAAgZQAAgYgLgMQgLgNgQAAQgQAAgLANg");
	this.shape_8.setTransform(4.1,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBSQgNgIgHgQQgHgPAAgUQAAgTAGgPQAHgPANgJQANgIAQAAQAKAAAJAEQAKAFAFAJIAAhBIAWAAIAACyIgUAAIAAgQQgMATgYAAQgPAAgNgJgAgXgOQgKANAAAYQAAAZALANQAKAMAOAAQAOAAAKgMQAKgMAAgYQAAgZgKgNQgKgMgPAAQgOgBgKAMg");
	this.shape_9.setTransform(-10.2,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBZIAAiAIAVAAIAACAgAgKg/IAAgaIAVAAIAAAag");
	this.shape_10.setTransform(-19.5,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBCIAAhOQAAgNgDgHQgDgGgGgEQgHgEgIAAQgNAAgLAJQgKAJAAAYIAABGIgWAAIAAiAIAUAAIAAASQAOgVAaAAQAMAAAKAEQAKAEAFAHQAEAHACAJQACAGAAAQIAABOg");
	this.shape_11.setTransform(-29.2,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqAyQgRgRAAggQAAggARgSQARgSAaAAQAaAAAQASQARASAAAfIAAAGIhgAAQABAVALALQALAMAPAAQAMAAAJgHQAIgGAFgOIAXADQgFAUgPALQgOALgXAAQgbAAgRgSgAgXgnQgLALgBAQIBIAAQgCgQgHgIQgKgNgRAAQgOAAgKAKg");
	this.shape_12.setTransform(-43.2,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBBIgyiBIAYAAIAbBNIAIAaIAIgZIAdhOIAXAAIgyCBg");
	this.shape_13.setTransform(-56.3,2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAfBCIAAhOQAAgNgDgHQgDgGgGgEQgHgEgIAAQgNAAgLAJQgKAJAAAYIAABGIgWAAIAAiAIAUAAIAAASQAOgVAaAAQAMAAAKAEQAKAEAFAHQAEAHACAJQACAGAAAQIAABOg");
	this.shape_14.setTransform(-69.5,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqAyQgRgRAAggQAAggARgSQARgSAaAAQAaAAAQASQARASAAAfIAAAGIhgAAQABAVALALQALAMAPAAQAMAAAJgHQAIgGAFgOIAXADQgFAUgPALQgOALgXAAQgbAAgRgSgAgXgnQgLALgBAQIBIAAQgCgQgHgIQgKgNgRAAQgOAAgKAKg");
	this.shape_15.setTransform(-83.5,2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKBZIAAiAIAVAAIAACAgAgKg/IAAgaIAVAAIAAAag");
	this.shape_16.setTransform(-93.1,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhDBZIAAiyIBDAAQAUABAMAFQAMAGAIALQAHALAAAMQAAAMgHAKQgFAKgNAHQAQAEAJAKQAIAMAAAPQAAANgFALQgFALgIAGQgIAGgLADQgMACgRAAgAgrBFIAsAAIAPgBQAJgCAGgEQAFgDAEgGQADgHAAgJQAAgJgFgIQgFgHgKgDQgJgDgQAAIgpAAgAgrgNIAnAAQAPgBAGgCQAKgCAEgGQAFgHgBgJQABgJgFgGQgEgHgIgDQgIgCgSAAIgkAAg");
	this.shape_17.setTransform(-103.9,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt03, new cjs.Rectangle(-114.5,-16,229.3,32), null);


(lib.transparencia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EhKEArnMAAAhXNMCUJAAAMAAABXNg");
	this.shape.setTransform(474.1,279.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.transparencia, new cjs.Rectangle(0,0,948.3,558.2), null);


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


(lib.Silla_por_atras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252931").s().p("AgEgNIAJgDIgCAgIgEABg");
	this.shape.setTransform(21.3,69.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252931").s().p("AgCASIgCgkIAJADIgDAig");
	this.shape_1.setTransform(25.1,70.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#252931").s().p("AAAAqQgGgGAAgIIAAhMIAMABIABBgIgHgHg");
	this.shape_2.setTransform(21.4,63.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323436").s().p("AgGAsIAAhZIANgBIAABaQgFADgDAAQgDAAgCgDg");
	this.shape_3.setTransform(23.7,64);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2E32").s().p("AiEA0QgNAAgNgFQgbgIgEgRQgDgSAGgTQADgLALgaQAFgMARAoQAWAzAVAIQAcAKAdACQAZABAlgFQAngGAggBQAigBANAFQATAHAqgDIgBAEQgEAEgQABQgXADiFAAIgdAAQhuAAgHgEg");
	this.shape_4.setTransform(21.8,53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2E32").s().p("AgUAKQgEg0ALgLQALgKANADQAGABAFADQgQAAgGADQgQAJABAfIACBLQgFgZgCgbg");
	this.shape_5.setTransform(8.6,8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323436").s().p("Ah/AFIgngNQgHgEABgDQABgEAGADQAMAHAiAIQAzAMA4ACQA7ABAsgIQAYgFAigKQAZgGgBAFQAAAGgNADIhFAOQgmAFhCAAQg/AAgzgNg");
	this.shape_6.setTransform(22.6,40.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D4659").s().p("AgOAXQg/AAgzgOIglgNQgIgGAEgIQAEgHAGAFQAHAGAuAKQA0ALAmABQA7AAAvgIQANgBAugMQAUgFACAJQACAIgHACQhNAWhfAAIgIAAg");
	this.shape_7.setTransform(22.7,40.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323436").s().p("AiZBdQglgHgKgVQgJgTAPgpQATgxAAgYQAAgkAdAKQAHADAiAFIBrAIQBTgBA0gMIATgEQAFAAACAIIAKAtQAIAlAUAxQAKAagYAPQgQALgWAAIkEAAIgIABQgRAAgRgEg");
	this.shape_8.setTransform(23.1,49.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323436").s().p("AhvDDQg0gPABgdQACgegDgbIgVj5QgCgRAHgPQANgdAsANQA5AQA9ABQBEACA1gUQASgHAUALQAWAMAHAgQAEAWgLB0QgMB7AEAtQACAZg0AQQgvAPhEACIgJAAQg+AAgsgNg");
	this.shape_9.setTransform(22.6,21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#626666").s().p("Ai3AXIgEgOQgCgQAHgPQANgeAsANQA8ARAlAEQAvAFAsgOQA1gQAXACQAbADAMAcQALAYgBARQgBAJgDAEg");
	this.shape_10.setTransform(22.7,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#717677").s().p("AgFA7IgFh1IAVAAIgHB1g");
	this.shape_11.setTransform(23.2,74.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#717677").s().p("AhjAbIC9hHIAKANIjHA+IAAAOg");
	this.shape_12.setTransform(11.8,71.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D4659").s().p("AhpA7IAAgxIDAhEIAGABQgBAAAHAGIAHAGIgHAeIi5AlIAAAlg");
	this.shape_13.setTransform(11.8,73);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_14.setTransform(44.3,78.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#717677").s().p("ABlAcIjMg/IAMgIIDBBDIACAFIgCAPg");
	this.shape_15.setTransform(34.9,71.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D4659").s().p("ABXA7IgBglIi5glIgFgjQAOgGgDgBIAHgBIC/BEIAAAxg");
	this.shape_16.setTransform(34.7,73.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3D4659").s().p("AAZAKIAAgGIgUAAIgmgNIBDACIAAARg");
	this.shape_17.setTransform(31.5,69.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3D4659").s().p("AggAKIAAgRIBBgCIglANIgUAAIAAAGg");
	this.shape_18.setTransform(13.7,69.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgYQAAgEADgEQADgCAEAAIABAAQAEAAADACQADAEAAAEIAAAYQAAAEgDACQgDADgEAAg");
	this.shape_19.setTransform(11.1,72.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgYQAAgKAKAAIABAAQAEAAADACQADAEAAAEIAAAYQAAAEgDACQgDADgEAAg");
	this.shape_20.setTransform(34.2,72.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AAAAUQgEAAgDgDQgDgDAAgEIAAgTQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAATQAAAEgDADQgDADgEAAg");
	this.shape_21.setTransform(2,78.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_22.setTransform(23.1,82.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#717677").s().p("AgEARIAAghQABgEADAAQAFAAgBAEIAAAhQABAEgFAAQgDAAgBgEg");
	this.shape_23.setTransform(35.4,72.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#717677").s().p("AgDARIAAghQgBgEAEAAQAFAAAAAEIAAAhQAAAEgFAAQgEAAABgEg");
	this.shape_24.setTransform(33,72.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#717677").s().p("AgDARIAAghQgBgEAEAAQAFAAAAAEIAAAhQAAAEgFAAQgEAAABgEg");
	this.shape_25.setTransform(12.4,72.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#717677").s().p("AgEARIAAghQAAgEAEAAQAFAAgBAEIAAAhQABAEgFAAQgEAAAAgEg");
	this.shape_26.setTransform(10,72.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_27.setTransform(3.6,78.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_28.setTransform(0.6,78.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_29.setTransform(45.9,78.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_30.setTransform(42.8,78.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#717677").s().p("AgFAUIAAgnQAAgGAFAAQAGAAAAAGIAAAnQAAAGgGAAQgFAAAAgGg");
	this.shape_31.setTransform(24.6,82.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#717677").s().p("AgEAUIAAgnQgBgGAFAAQAFAAABAGIAAAnQgBAGgFAAQgFAAABgGg");
	this.shape_32.setTransform(21.5,82.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#717677").s().p("AgVADIgXgHIBZAJg");
	this.shape_33.setTransform(30.3,68.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#717677").s().p("AghAAIBMgCIgTADIhCACg");
	this.shape_34.setTransform(14.6,68.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#717677").s().p("AgUAsIgEgDIAAhXIAwABIAABXQgJAFgSAAQgMAAgFgDg");
	this.shape_35.setTransform(23.3,63.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3D4659").s().p("AgPgcIAEgdIAXgCIAEAkIgKBSIgOABg");
	this.shape_36.setTransform(23.2,74.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Silla_por_atras, new cjs.Rectangle(0,0,46.5,85.1), null);


(lib.Silla_de_lado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323436").s().p("AhaBlQgChogIgUQgJgZgKgPIgEgNQgCgQASgGQAFgCASgBIBfACQARABATADIA7AIIANABQAGABAAACQgDAKgsgKQgbgGg1gEQgxgEgbACQgWABgHADQgFADgDAHQgCAFAHAMQALATAFAPQAKAeAAAcIABBKg");
	this.shape.setTransform(28.1,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7BBC1").s().p("AhRBpIgHgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQgDhkgIgUIgNgcIgHgOIgDgOQAAgNANgHQAJgFAMgBIAEgBQAIgCBKAEIAPAAQAYABANADIBBAJQALABACADQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAACgDADQgJAGglgJQgagGgygDQgrgCgeACIgZABQgHABgEAGIgCAHQAAADAGAJQAGALAKAaQALAfgDAZIADBAIABAEIgCAEIgCAAgAhUBhIABABIgChEQAAgWgKgcQAIAaADBbgAhVhgIgFAAQgPACgGAEQgJAHABAOIABABQgBgEABgEIACgCQADgIAFgDQAHgDATgBQAhgCAvACQA3ACAZAGQAgAIAIgDIgHgCIhBgIIgBAAQgSgDgRgBIgPgBIhEgCIgMABg");
	this.shape_1.setTransform(27.9,46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323436").s().p("AABADQgJgMAAgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAIACAAQgGACAMAPQAGAIABAEQACAFgBABg");
	this.shape_2.setTransform(32.7,49.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626666").s().p("AAGBGQAFgggCgZQgCgOgNgrIgNgqIASAHQAHADADAbIAGAjQAFAhAAATQAAASgLARIgJAOg");
	this.shape_3.setTransform(39.2,46.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626666").s().p("AgRAtIAjhcIgGAlIgDAZQgDASgCAFQgCAHgHADIgEAAQgFAAgDgDg");
	this.shape_4.setTransform(39.4,32.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#626666").s().p("ABfEEQgPgCisgkQgVgEgTABIgdADQgjAEgJASIgCARQgDgPACgPIACgMIAPgLQAYgNAygHQAxgIBVARQArAJAjAKQADAAAAgRQAAgRgEgJQgFgMgFgYQgFgcABgQQADgVAZhBQAWg1AQgiQAQghAAhdQAAgeALgJQAFgEACADQADAFADAAQAHAAARgTQgGAJgBA6IgBBOQgDAPgmBfQglBcgJAPQgFAJALA/QAMA/gGAIQgIANgEACIgHABIgNgBg");
	this.shape_5.setTransform(22.5,26.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323436").s().p("Ag2CyQArhkAJgaIAfhaQAEgLAAgxQgCg1ADgQQADgSAIgBQAFAAACACQACAEABARQABAMgCAtQgDAwABAPQABARgJAbIgMAsQgGAdgsBxQgJgHgbgCg");
	this.shape_6.setTransform(39.5,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323436").s().p("AA8BeQgcgHhCgHQhTgJgZAHQgcAIgOgRQgNgQAGgYQAFgTAVgEQALgCAKACIAlgDQAHAABqAWQBqAWANgBQAQgDACgWQABgQgHgrIgKgyQgCgOAGAAIAgAEIAUA2QASA9gLAjQgKAigUAKQgKAGgZABIgFAAQgWAAgmgJg");
	this.shape_7.setTransform(20.9,47.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454748").s().p("AAQAGIgNgCIgXgJIASADQALACAMAGg");
	this.shape_8.setTransform(39,67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#717677").s().p("AgEAAQABgCgBgEIAJAGIgFgBQgBABgBADIgBADg");
	this.shape_9.setTransform(23.8,64.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#717677").s().p("AgEgMIgDgDIgBAAIAFgDIAMAHIgIABQgBAEAFAXIgGACQAAgbgDgEg");
	this.shape_10.setTransform(27.1,65.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#717677").s().p("AgEAGQgLgCgDgEIgBgCIACgDIAAACIADACQAGACAHABQAJACAMgIIAAAEQgGAGgNAAIgFAAg");
	this.shape_11.setTransform(25,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3D4659").s().p("AgiBLIABgOQABgPADgHIAthxIAIAAIALgBQADgBgbA2IgdA9QgCAFgBARIAAAPg");
	this.shape_12.setTransform(22.1,71.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9B9D9E").s().p("AgEAFQAGgZAIgHIgKA2IgJABIAFgXg");
	this.shape_13.setTransform(18.7,76.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9B9D9E").s().p("AgkBMQAAgUADgLQABgFAOgeQAOgdACgNQACgNAKgPQAGgHAFgFIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAIgCIAIAEQABAggBgBIgUAGQgFAFgLAZIgPAkQgGALgBASIgBARg");
	this.shape_14.setTransform(23.3,71.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#252931").s().p("ABXAyQADgBgJgRQgGgKgNgGIgkgMQgWgHgbgJQgRgEgegCIgagCIAAgdQAhADBEAbQBEAaAJALQAMAOADASg");
	this.shape_15.setTransform(36.9,69.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252931").s().p("AhsAuQgCgDAAgFQAAgKAHgHQAKgKBVgaQBUgaAjgEIgKAhQg6gCgbAGQgXAGgcAIQgIADgeAHQgQAEgDAFQgGAJgBAHIAAAFg");
	this.shape_16.setTransform(12.6,68.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9B9D9E").s().p("ABVAeQgEgGgNgGIglgMQgRgGgIgGQgHgHgOgDQgRgEgmgQIgjgPIAIgCQAiADBGAcQBEAaAPAOQANALADAZIgLAAQgBgJgJgPg");
	this.shape_17.setTransform(37,69.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9B9D9E").s().p("Ah3AxIgBgKQABgLAIgHQANgNBXgaQBUgaAjgEIAOAGQhOAYgcAGIgYAGIgcAIIglAMQgPAFgEAGQgFAKgDAIIgBAGg");
	this.shape_18.setTransform(12.2,68.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3B5B8").s().p("AAAAkIAAhIIABAAIAABIg");
	this.shape_19.setTransform(26.9,59.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3D4659").s().p("AgHAmIAAhLIAOAAIAABLg");
	this.shape_20.setTransform(24.9,60.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#252931").s().p("AgMAkIgHgEIAAhFIAmAAIAABCQABAIgPABIgDAAQgHAAgHgCg");
	this.shape_21.setTransform(25.1,60.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454748").s().p("AgBAXQgIAAgEgIQgEgHAAgJQABgKAGgGQAGgGAHAAQAHABAEAHQAFAIgBAIQgBAKgGAHQgFAGgGAAIgBgBg");
	this.shape_22.setTransform(19.6,82.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#040D1C").s().p("AgPAUQgHgDgCgJQgBgHADgJQACgIAJgCIAHgCIAAgEIAcAAIABAOQABANgCAFQgCAMgJAEIgKABQgJAAgJgFg");
	this.shape_23.setTransform(18.3,81.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#454748").s().p("AgKAPQgFgGABgJQgBgHAFgHQAEgGAGAAQAGAAAFAGQAEAHAAAHQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_24.setTransform(46.9,77.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#454748").s().p("AgEANQgEgCgBgFQgCgEACgFQAGgMAIAEQAEABABAFQABAFgCAEQgCAFgEADIgEABIgDAAg");
	this.shape_25.setTransform(42.5,69.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#454748").s().p("AgGATQgGgCgCgIQgDgHADgHQAEgIAGgEQAFgEAGACQAGADADAHQACAHgDAHQgDAIgHAFQgEACgDAAIgEgBg");
	this.shape_26.setTransform(16.3,69.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#040D1C").s().p("AAAAXQgIgBgGgDQgGgEgCgHQgBgIADgHQACgHAHgDIAHgBIAAgEIAbAAIAAAMQABAMgBAFQgDAMgIADIgIABIgEAAg");
	this.shape_27.setTransform(15.5,68.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#040D1C").s().p("AgHAOQgGgBgBgJIAAgSIAQAAIAAACIAFABQAFACACAEQADANgIAEQgFADgFAAIgGgBg");
	this.shape_28.setTransform(42.1,69.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#040D1C").s().p("AgKATQgHgCgCgLQgBgEABgKIAAgLIAXAAIAAADIAGABQAGADACAGQAGAQgMAGQgFADgHABIgCAAIgIgBg");
	this.shape_29.setTransform(47.4,76.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#717677").s().p("AA7AWQgCgDgDgBIgQgEIgQgEIgOgFIhTgXIAAgEQCOAhAFAEQAHAGgEABQgJgCgDADIgCAAIgCgBg");
	this.shape_30.setTransform(34.7,65.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#454748").s().p("AgCAYQgHgBgEgHQgFgIABgJQABgJAGgHQAGgGAGAAQAIABAEAIQAFAHgBAJQgBAKgGAGQgFAGgGAAIgCAAg");
	this.shape_31.setTransform(16.9,82);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#454748").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAEAGABAIQgBAIgEAHQgEAGgHAAQgFAAgFgGg");
	this.shape_32.setTransform(49.1,76.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#454748").s().p("AgHATQgGgCgCgHQgCgIADgHQADgIAHgEQAFgEAHADQAFACADAHQABAHgCAHQgEAIgGAFQgEACgDAAIgFgBg");
	this.shape_33.setTransform(13.4,68.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#323436").s().p("AhaBlQgChogIgVQgKgYgJgPIgEgNQgCgQASgGIAXgDIBfACQARABATADIA7AIIANABQAGABAAACQgDAKgsgKQgbgHg1gEQgygDgaACQgWABgHADQgFACgDAIQgCAEAHANQALATAFAPQAKAeAAAcIABBKg");
	this.shape_34.setTransform(28.1,42.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B7BBC1").s().p("AhRBpIgHgCQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgDhlgIgUIgUgpIgDgPQAAgVAigFIAEgBQAGgBBMADIAPABQAYAAANAEIBBAIQALABACADQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAACgDACQgKAHgkgKQgagFgygDQgrgCgeACIgZABQgHABgEAFIgCAHQAAADAGAJQAHANAJAZQALAegDAaIADBAIABADQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCABgAhUBhIABAAIgChDQAAgXgKgbQAIAZADBcgAhVhhIgFABQgPABgGAFQgJAGABAOIABABQgBgEABgDIACgDQADgHAFgDQAHgEATgBQAhgCAvACQA3ACAZAHQAiAIAGgEIhIgJIgBAAQgSgEgRgBIgPAAIhJgCIgHAAg");
	this.shape_35.setTransform(27.9,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Silla_de_lado, new cjs.Rectangle(0,0,50.6,85.1), null);


(lib.portada2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAxgjAkQgkAjgxAAQgxAAgjgjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.Piso_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2D4D3").s().p("AaXDWMg98gGrMA7aAAFILxGmg");
	this.shape.setTransform(259.5,20.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B7B8").s().p("EhoEADZIAAmxMDQJAAAIAAGxg");
	this.shape_1.setTransform(666.1,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Piso_1, new cjs.Rectangle(0,-1,1332.2,43.4), null);


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
	this.shape_12.setTransform(156.8,86.2,2.472,2.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CFCE79").s().p("AgYAhIAAhBIAxAAIAABBg");
	this.shape_13.setTransform(138.8,86.2,2.472,2.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CF93C1").s().p("AgYAhIAAhBIAxAAIAABBg");
	this.shape_14.setTransform(121.6,86.2,2.472,2.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhDBEIAAiHICHAAIAACHg");
	this.shape_15.setTransform(168.1,115.7,2.472,2.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhDBEIAAiHICHAAIAACHg");
	this.shape_16.setTransform(131.5,115.7,2.472,2.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiqBuIAAjbIFVAAIAADbg");
	this.shape_17.setTransform(69.3,106,2.472,2.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#717576").s().p("Al8ItQgUAAgNgPQgOgNAAgVIAAv4QAAgUAOgNQANgOAUgBIL4AAQAUABAOAOQAOANAAAUIAAP4QAAAVgOANQgOAPgUAAg");
	this.shape_18.setTransform(113.7,147.8,2.472,2.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AmbJWQgUAAgOgOQgOgOAAgUIAAxLQAAgUAOgOQAOgOAUAAIM3AAQAVAAANAOQAOAOAAAUIAARLQAAAUgOAOQgNAOgVAAg");
	this.shape_19.setTransform(113.7,147.8,2.472,2.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pisarron_1, new cjs.Rectangle(0,0,227.5,377.5), null);


(lib.pelo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgzALQAAgMAJgKQAMgOATgDQARgEAQAHQAUAIAHAQQAGANgHAQIhcACQgIgGABgNg");
	mask.setTransform(5.2,3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8885F").s().p("AgzALQAAgMAJgKQAMgOATgDQARgEAQAHQAUAIAHAQQAGANgHAQIhcACQgIgGABgNg");
	this.shape.setTransform(5.2,3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pelo2, new cjs.Rectangle(0,0,10.4,6.1), null);


(lib.pelo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA1BuIAMgiQAFgRABgSQABgUgIgSQgHgQgPgOQgGgFgZgPQgSgMgIgNIgUAVIgQASQgKAPgEAWQgCAVAEAVQACAPAEAKIAHARIADAGQAAABAAABQAAAAgBABQAAAAAAAAQAAAAAAgBIAAAAIgBAAIgCgEIgMgRQgGgLgBgJIgIg6QgEgbAFgTQAEgTAPgQQAKgLAFgCQAvgaAtAZQAQAJALAgQAFAOAAANIgCAUQgDAQAAAGQAAAIADAQQABAOgDAJQgCAJgGALIgIAOQgDAKgFAIIAAAAIAAgBg");
	mask.setTransform(8.1,11.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8D61").s().p("AA1BuIAMgiQAFgRABgSQABgUgIgSQgHgQgPgOQgGgFgZgPQgSgMgIgNIgUAVIgQASQgKAPgEAWQgCAVAEAVQACAPAEAKIAHARIADAGQAAABAAABQAAAAgBABQAAAAAAAAQAAAAAAgBIAAAAIgBAAIgCgEIgMgRQgGgLgBgJIgDgeQgBgLgEgRQgEgbAFgTQAEgTAPgQQAKgLAFgCQAvgaAtAZQAQAJALAgQAFAOAAANIgCAUQgDAQAAAGQAAAIADAQQABAOgDAJQgCAJgGALIgIAOQgDAKgFAIIAAAAIAAgBg");
	this.shape.setTransform(8.1,11.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AA1BuIAMgiQAFgRABgSQABgUgIgSQgHgQgPgOQgGgFgZgPQgSgMgIgNIgUAVIgQASQgKAPgEAWQgCAVAEAVQACAPAEAKIAHARIADAGQAAABAAABQAAAAgBABQAAAAAAAAQAAAAAAgBIAAAAIgBAAIgCgEIgMgRQgGgLgBgJIgIg6QgEgbAFgTQAEgTAPgQQAKgLAFgCQAvgaAtAZQAQAJALAgQAFAOAAANIgCAUQgDAQAAAGQAAAIADAQQABAOgDAJQgCAJgGALIgIAOQgDAKgFAIIAAAAIAAgBg");
	this.shape_1.setTransform(8.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pelo, new cjs.Rectangle(0,0,16.2,22.3), null);


(lib.Pantalla_grande2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3E3E2").s().p("AtFGvQghAAgYgXQgXgYAAghIAAq9QAAghAXgYQAYgXAhAAIaLAAQAhAAAYAXQAXAYAAAhIAAK9QAAAhgXAYQgYAXghAAg");
	this.shape.setTransform(97.3,48.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AttHfQgoAAgcgcQgdgdAAgoIAAr7QAAgoAdgdQAcgcAoAAIbaAAQApAAAcAcQAdAdAAAoIAAL7QAAAogdAdQgcAcgpAAg");
	this.shape_1.setTransform(97.5,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pantalla_grande2, new cjs.Rectangle(0,0,195,95.9), null);


(lib.Pantalla_grande = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7334A").s().p("AADCDIgGgCIhVhYQgUgXAKgXIANgUIBahbQAYgTAYAHQAMADAHAHIAeAhIgjAhIgUgTQgFgEgGACIgGACIhFBHQgHAGACAHQACADACACIA0A2IAAAzQgBAIgHAAIgBAAg");
	this.shape.setTransform(84.7,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C7334A").s().p("Ag0BTIgEgFIAAg0IA2g0QAGgGgEgJIgEgIIAhgiIASATQAPAXgIAWQgFALgHAHIhRBRQgFAEgEAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(96.9,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6A3728").s().p("Ah4BMQgRgYALgZIAPgVIBZhXQAWgQAVAFQALADAHAGIBbBaQAEAJgOACIgxABIg1g1QgIgGgHADIgEADIhFBGQgIAJAFAHIAGAGIgjAkg");
	this.shape_2.setTransform(101.8,36.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6A3728").s().p("AgpA3IgVgLIgeggIAigiIASASQAIAGAHgCQADgBACgDIAzg0IA0AAQAIAAABAGQABACgCADIhXBWQgPAQgRAAQgHAAgGgCg");
	this.shape_3.setTransform(105.7,49.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C7334A").s().p("AAOAeIgOgXIgJAAIAEgIIAMAAQAHgBAAgIQAAgFgDgCIgEgCIgWAAIAAAxIgOAAIAAg7IArAAIAHADQAIAFAAAJIgBAIQgDAIgLACIAQAYg");
	this.shape_4.setTransform(58.5,61.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C7334A").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgJAGgGQAIgGAJAAIAAAAIAaAAIAAALIgXABQgFAAgEADQgDAEgBAGIAAALQABANAKAAIAZAAIAAAKg");
	this.shape_5.setTransform(64.7,61.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C7334A").s().p("AASAeIgFgNIgSAAIAEgLIAKAAIgJgTIgQArIgQAAIAVgxQADgJAIgBQAGgBAFAKIABABIAVAxg");
	this.shape_6.setTransform(51.4,61.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C7334A").s().p("AASAeIgFgNIgSAAIAEgLIAKAAIgJgTIgQArIgQAAIAVgxQAGgJAFgBQAGAAAGAJIAAABIAVAxg");
	this.shape_7.setTransform(71.1,61.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6A3728").s().p("AgGAeQgHAAgFgFQgGgGAAgHIAAgpIAQAAIAAAoQACAKAIAAIAXAAIAAAJg");
	this.shape_8.setTransform(138.7,61.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6A3728").s().p("AAAAeQgPgBgHgLQgFgJAAgJQgBgMAKgIQAGgIALgBIAVAAIAAAAIAIAAIAAALIgCAAIAAAAIgYAAIAAABIgBgBQgLADABAKIAAABIAlAAIAAALIglAAIAAAAQAAAMAKABIAbAAIAAAKg");
	this.shape_9.setTransform(113.4,61.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A3728").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgJAGgGQAIgGAJAAIAAAAIAaAAIAAALIgXABQgFAAgEADQgDAEAAAGIAAALQAAANAKAAIAZAAIAAAKg");
	this.shape_10.setTransform(77.1,61.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6A3728").s().p("AgHAeQgJAAgIgGQgHgHAAgIIAAgRQAAgJAHgGQAIgGAJAAIAPAAQAKAAAHAGQAHAGAAAJIAAARQAAAIgHAHQgHAGgKAAgAgNgOQgEAEAAAGIAAALQAAAFAEAFQAEAEAGAAIAIAAQAFAAAFgEQADgFAAgFIAAgLQAAgGgDgEQgFgFgFAAIgIAAQgGAAgEAFg");
	this.shape_11.setTransform(83.5,61.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6A3728").s().p("AAMAeIgbgpIAAApIgQAAIAAg7IAUAAIAcAtIAAgtIAPAAIAAA7g");
	this.shape_12.setTransform(90.6,61.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6A3728").s().p("AAMAeIgbgpIAAApIgQAAIAAg7IAUAAIAcAtIAAgtIAPAAIAAA7g");
	this.shape_13.setTransform(120.1,61.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6A3728").s().p("AALAeIgbgpIAAApIgPAAIAAg7IATAAIAcAtIAAgtIAQAAIAAA7g");
	this.shape_14.setTransform(106.8,61.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6A3728").s().p("AgGAfIAAgxIgWAAIAAgEIgBAAIAAgIIA7AAIAAAMIgXAAIAAAxg");
	this.shape_15.setTransform(127.1,61.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6A3728").s().p("AgGAfIAAgxIgXAAIAAgMIA7AAIAAAIIgBAAIAAAEIgWAAIAAAxg");
	this.shape_16.setTransform(97.5,61.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6A3728").s().p("AgGAeIAAg7IAOAAIAAA7g");
	this.shape_17.setTransform(102,61.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6A3728").s().p("AASAeIgFgNIgSAAIAEgLIAKAAIgJgTIgQArIgQAAIAVgxQAGgJAFgBQAGAAAGAJIAAABIAVAxg");
	this.shape_18.setTransform(132.7,61.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3E3E2").s().p("AtFGvQghAAgYgXQgXgYAAghIAAq9QAAghAXgYQAYgXAhAAIaLAAQAhAAAYAXQAXAYAAAhIAAK9QAAAhgXAYQgYAXghAAg");
	this.shape_19.setTransform(97.3,48.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#323436").s().p("AtsHfQgpAAgdgcQgcgdAAgoIAAr7QAAgoAcgdQAdgcApAAIbaAAQAoAAAcAcQAdAdAAAoIAAL7QAAAogdAdQgcAcgoAAg");
	this.shape_20.setTransform(97.5,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pantalla_grande, new cjs.Rectangle(0,0,195,95.9), null);


(lib.Pantalla_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5A9A9").s().p("AgrAIIAAgQIBXAAIAAAQg");
	this.shape.setTransform(42.7,118.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6E0DA").s().p("AmDEHQgGAAgFgEQgEgFAAgGIAAnvQAAgGAEgFQAFgEAGAAIMHAAQAHAAADAEQAFAFAAAGIAAHvQAAAGgFAFQgDAEgHAAg");
	this.shape_1.setTransform(42.1,90.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmXEUQgGAAgEgFQgFgEAAgGIAAoJQAAgGAFgEQAEgFAGAAIMvAAQAFAAAFAFQAFAEgBAGIAAIJQABAGgFAEQgFAFgFAAg");
	this.shape_2.setTransform(42.3,90.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpEcIAAo3IBTAAIAAI3g");
	this.shape_3.setTransform(42.7,146.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pantalla_1, new cjs.Rectangle(0,62.7,84.5,111.8), null);


(lib.Mesa_grande = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A7476").s().p("AjNAHIAAgNIGbAAIAAANg");
	this.shape.setTransform(200.5,8.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A7476").s().p("AjNAHIAAgNIGbAAIAAANg");
	this.shape_1.setTransform(90.3,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3ADAE").s().p("AxzApQgRgBgMgLQgLgMAAgQIAAgBQAAgQALgMQAMgMARAAMAjnAAAQARAAALAMQAMAMAAAQIAAABQAAAQgMAMQgLALgRABg");
	this.shape_2.setTransform(118,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7A7476").s().p("AxyAoQgRABgMgMQgMgNAAgQQAAgQAMgMQAMgLARgBMAjmAAAQAQABAMALQAMAMAAAQQAAAQgMANQgMAMgQgBg");
	this.shape_3.setTransform(118,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mesa_grande, new cjs.Rectangle(0,0,236,9.6), null);


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


(lib.mc_path01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqvAiOMAAAhEbQV1C/Q9IZQOkHPKrLFQIyJJF0LbQEcItCcJeg");

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.149)","rgba(255,255,255,0.349)","rgba(255,255,255,0.149)","rgba(255,255,255,0)"],[0,0.29,0.514,0.729,1],-323,0,323.1,0).s().p("EgyeBIrMAAAiRVMBk9AAAMAAACRVg");
	this.shape.setTransform(-633.8,-2.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-559.9},0).wait(1).to({x:-488.3},0).wait(1).to({x:-418.8},0).wait(1).to({x:-351.6},0).wait(1).to({x:-286.5},0).wait(1).to({x:-223.7},0).wait(1).to({x:-163},0).wait(1).to({x:-104.6},0).wait(1).to({x:-48.4},0).wait(1).to({x:5.6},0).wait(1).to({x:57.4},0).wait(1).to({x:107},0).wait(1).to({x:154.4},0).wait(1).to({x:199.6},0).wait(1).to({x:242.6},0).wait(1).to({x:283.4},0).wait(1).to({x:322},0).wait(1).to({x:358.4},0).wait(1).to({x:392.5},0).wait(1).to({x:424.5},0).wait(1).to({x:454.3},0).wait(1).to({x:481.8},0).wait(1).to({x:507.2},0).wait(1).to({x:530.3},0).wait(1).to({x:551.3},0).wait(1).to({x:570},0).wait(1).to({x:586.6},0).wait(1).to({x:600.9},0).wait(1).to({x:613},0).wait(1).to({x:622.9},0).wait(1).to({x:630.7},0).wait(1).to({x:636.2},0).wait(1).to({x:639.5},0).wait(1).to({x:640.6},0).wait(21).to({x:603.1},0).wait(1).to({x:565.6},0).wait(1).to({x:528.1},0).wait(1).to({x:490.7},0).wait(1).to({x:453.2},0).wait(1).to({x:415.7},0).wait(1).to({x:378.2},0).wait(1).to({x:340.7},0).wait(1).to({x:303.2},0).wait(1).to({x:265.8},0).wait(1).to({x:228.3},0).wait(1).to({x:190.8},0).wait(1).to({x:153.3},0).wait(1).to({x:115.9},0).wait(1).to({x:78.4},0).wait(1).to({x:40.9},0).wait(1).to({x:3.4},0).wait(1).to({x:-34.1},0).wait(1).to({x:-71.6},0).wait(1).to({x:-109.1},0).wait(1).to({x:-146.5},0).wait(1).to({x:-184},0).wait(1).to({x:-221.5},0).wait(1).to({x:-259},0).wait(1).to({x:-296.4},0).wait(1).to({x:-333.9},0).wait(1).to({x:-371.4},0).wait(1).to({x:-408.9},0).wait(1).to({x:-446.4},0).wait(1).to({x:-483.9},0).wait(1).to({x:-521.3},0).wait(1).to({x:-558.8},0).wait(1).to({x:-596.3},0).wait(1).to({x:-633.8},0).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc_path_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKNAnEMAAAhOHMCUbAAAIAAE/Q+rDw6oKJQ2QIfyyMrQutJ9r0L/QoAIJlrIAg");

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.149)","rgba(255,255,255,0.349)","rgba(255,255,255,0.149)","rgba(255,255,255,0)"],[0,0.29,0.514,0.729,1],-323,0,323.1,0).s().p("EgyeBIrMAAAiRVMBk9AAAMAAACRVg");
	this.shape.setTransform(839.3,-82);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:769.1},0).wait(1).to({x:700.3},0).wait(1).to({x:633.1},0).wait(1).to({x:567.4},0).wait(1).to({x:503.2},0).wait(1).to({x:440.5},0).wait(1).to({x:379.3},0).wait(1).to({x:319.7},0).wait(1).to({x:261.5},0).wait(1).to({x:204.8},0).wait(1).to({x:149.7},0).wait(1).to({x:96.1},0).wait(1).to({x:44},0).wait(1).to({x:-6.6},0).wait(1).to({x:-55.7},0).wait(1).to({x:-103.3},0).wait(1).to({x:-149.4},0).wait(1).to({x:-194},0).wait(1).to({x:-237},0).wait(1).to({x:-278.5},0).wait(1).to({x:-318.6},0).wait(1).to({x:-357.1},0).wait(1).to({x:-394.1},0).wait(1).to({x:-429.6},0).wait(1).to({x:-463.6},0).wait(1).to({x:-496.1},0).wait(1).to({x:-527},0).wait(1).to({x:-556.5},0).wait(1).to({x:-584.4},0).wait(1).to({x:-610.9},0).wait(1).to({x:-635.8},0).wait(1).to({x:-659.2},0).wait(1).to({x:-681.1},0).wait(1).to({x:-701.5},0).wait(1).to({x:-720.4},0).wait(1).to({x:-737.7},0).wait(1).to({x:-753.6},0).wait(1).to({x:-767.9},0).wait(1).to({x:-780.8},0).wait(1).to({x:-792.1},0).wait(1).to({x:-801.9},0).wait(1).to({x:-810.2},0).wait(1).to({x:-817},0).wait(1).to({x:-822.3},0).wait(1).to({x:-826.1},0).wait(1).to({x:-828.4},0).wait(1).to({x:-829.1},0).wait(49).to({x:-793.6},0).wait(1).to({x:-758.1},0).wait(1).to({x:-722.6},0).wait(1).to({x:-687.1},0).wait(1).to({x:-651.6},0).wait(1).to({x:-616.1},0).wait(1).to({x:-580.6},0).wait(1).to({x:-545.1},0).wait(1).to({x:-509.7},0).wait(1).to({x:-474.1},0).wait(1).to({x:-438.7},0).wait(1).to({x:-403.1},0).wait(1).to({x:-367.7},0).wait(1).to({x:-332.2},0).wait(1).to({x:-296.7},0).wait(1).to({x:-261.2},0).wait(1).to({x:-225.6},0).wait(1).to({x:-190.2},0).wait(1).to({x:-154.7},0).wait(1).to({x:-119.2},0).wait(1).to({x:-83.7},0).wait(1).to({x:-48.2},0).wait(1).to({x:-12.7},0).wait(1).to({x:22.8},0).wait(1).to({x:58.3},0).wait(1).to({x:93.8},0).wait(1).to({x:129.3},0).wait(1).to({x:164.8},0).wait(1).to({x:200.3},0).wait(1).to({x:235.8},0).wait(1).to({x:271.3},0).wait(1).to({x:306.8},0).wait(1).to({x:342.3},0).wait(1).to({x:377.8},0).wait(1).to({x:413.3},0).wait(1).to({x:448.8},0).wait(1).to({x:484.3},0).wait(1).to({x:519.8},0).wait(1).to({x:555.3},0).wait(1).to({x:590.8},0).wait(1).to({x:626.3},0).wait(1).to({x:661.8},0).wait(1).to({x:697.3},0).wait(1).to({x:732.8},0).wait(1).to({x:768.3},0).wait(1).to({x:803.8},0).wait(1).to({x:839.3},0).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.Maseta_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#485150").ss(3,1,1).p("AA3CtQgThTgYhUQguiogUgK");
	this.shape.setTransform(11.5,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#485150").ss(3,1,1).p("AhQCcQAghKAlhMQBIiXAUgK");
	this.shape_1.setTransform(30.9,36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#485150").ss(3,1,1).p("AAAjdIAAG7");
	this.shape_2.setTransform(21.3,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#109773").s().p("AhvC5IAAgNQBEiuAZhHQATg4AWgfQAZgjAYABQAVAAALAZQAFAMABAMQAGAMgNAfQgGAQgHAOIhzCrQg7BegQACIgDAAQgHAAgBgKg");
	this.shape_3.setTransform(34.6,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#109773").s().p("ABCDKIgIgJQhLisgghDQgag1gHgmQgGgqARgRQAQgOAYAJQAMAFAKAIQALAEAOAfIALAfIApDKQAXBtgJANQgDAEgEAAQgEAAgFgEg");
	this.shape_4.setTransform(8.4,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#109773").s().p("AgODRIgFgMQgSi7gJhJQgHg7AFgmQAHgqAWgKQATgJAUARQAKAJAGAKQALAIADAiQABARAAAPIgaDNQgMBugNAKQgCACgDAAQgEAAgFgHg");
	this.shape_5.setTransform(22,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D77A54").s().p("AidijIE7AAIgpFEIjXADg");
	this.shape_6.setTransform(20.4,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Maseta_3, new cjs.Rectangle(0,0,45.8,84.9), null);


(lib.Maseta_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA+QgEAAgDgCQgVgRAAgbIAAhBQAAgFADgDQADgEAFAAIB5AAQAFAAAEAEQADAFgBAFIAAACIAAAzQACAOgEAQQgHAagXAAg");
	this.shape.setTransform(7.2,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#509B5C").s().p("AgKAVQgCgPAGgLIAKgQIAFAQQAEAPgBAFQgCAHgGAAg");
	this.shape_1.setTransform(4.8,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0C5A7").s().p("AgHAVQgCgMABgKQABgFADgHIACgHIAGAKQADAFAAADQACAFAAASg");
	this.shape_2.setTransform(6.3,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0C5A7").s().p("AgHAVQgCgMABgKQABgFADgHIACgHIAGAKQADAFAAADQACAFAAASg");
	this.shape_3.setTransform(10.4,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#509B5C").s().p("AgLAPQgBgFAEgPIAFgQIADAEIAHAMQAGALgCAPIgOABQgGAAgCgHg");
	this.shape_4.setTransform(8.8,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0C5A7").s().p("AgIAVQgBgMABgKQABgFADgHIACgHIAFAKIAEAIIACAXg");
	this.shape_5.setTransform(4.1,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#509B5C").s().p("AgIAJQACgHAIgLIAIgMIACAFQABAGgBAJQgCANgIAKIgNAAQAAgCADgLg");
	this.shape_6.setTransform(12.2,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#509B5C").s().p("AgBAVQgIgJgCgNQgBgIABgHIACgFIAIALQAIAMACAHQADAKAAADg");
	this.shape_7.setTransform(2.2,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADAAD4").s().p("AgLAWQgBgCAEgLQACgHAIgLIAIgMIACAFQABAGgCAKQgBAMgIAKg");
	this.shape_8.setTransform(10.9,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADAAD4").s().p("AgBAVQgIgJgBgNQgBgIABgHIABgFIAIALQAIAMACAHQAEAKgBADg");
	this.shape_9.setTransform(3.4,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Maseta_2, new cjs.Rectangle(0,0,14.5,16.8), null);


(lib.mascara1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhOHAnYMAAAhOvMCcPAAAMAAABOvg");
	this.shape.setTransform(500,252);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,504.1);


(lib.manitaclick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AAXCWIgtghIgwgjQgRgMgJgSQgFgJgCgMQAAgEAEgFQAEgEAFAAIAGAAQgLgOAIgMQAGgLAPADQgJgOAGgLQAGgJARgCIgCgDIgigjQgTgUgEgHQgQgXAMgJQALgKAVAWIBuBsIASAOIAIAFQACgDgDgEIgdgfIgCgDQAWgFATAPQANAKAEAYIAGAhQAFAdARAWIACADIhDBEQgFAFgHAAIgCAAQgGAAgFgDg");
	this.shape.setTransform(11.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.manitaclick, new cjs.Rectangle(0,0,23.1,30.7), null);


(lib.LogoARCA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AADCCQgDAAgDgCIhUhXQgUgXAKgXIANgUIBZhaQAYgTAXAHIATAKIAeAhIgjAhIgTgUQgJgGgIAHIhFBGQgHAGADAHIAEAFIAzA1IAAAyQgBAJgHAAIgBAAg");
	this.shape.setTransform(-41.8,-23.4,4.226,4.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("Ag0BSQgCgCgBgEIAAgzIA1gzQAGgGgEgJIgFgHIAhgjIASATQAPAXgIAWQgFALgHAHIhQBQQgEAFgEAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(9.4,-4,4.226,4.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#793A26").s().p("Ah2BLQgSgXAMgZIAPgVIBXhWQAWgQAVAFIARAJIBbBZQACAGgGADIgHACIgvABIg2g0QgHgGgHADQgDABgBACIhEBFQgJAJAGAHIAGAFIgjAkg");
	this.shape_2.setTransform(29.5,-38.6,4.226,4.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#793A26").s().p("AgpA2QgMgDgIgIIgeggIAighIASASQAIAGAGgCIAFgEIAzgzIAzAAQAIAAABAFQABACgCADIhWBVQgOAQgSAAQgGAAgHgCg");
	this.shape_3.setTransform(46,15.9,4.226,4.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D73D45").s().p("AAOAeIgOgXIgJAAIAFgIIALAAQAIgBAAgIQgBgEgDgDIgEgCIgWAAIAAAxIgOAAIAAg7IArAAQAEABADACQAIAFgBAJIgBAJQgCAGgKADIAPAYg");
	this.shape_4.setTransform(-151.4,65.6,4.226,4.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D73D45").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_5.setTransform(-125.5,65.7,4.226,4.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAEAJIABABIAUAxg");
	this.shape_6.setTransform(-180.8,65.7,4.226,4.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_7.setTransform(-98.4,65.7,4.226,4.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#793A26").s().p("AgGAeQgHAAgFgFQgGgGAAgHIAAgpIAQAAIAAAoQABAJAJABIAXAAIAAAJg");
	this.shape_8.setTransform(184.1,65.7,4.226,4.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#793A26").s().p("AAAAeQgPgBgGgMQgGgHAAgKQAAgMAJgIQAHgJAKAAIABAAIAAAAIAcAAIAAALIgaAAIAAABIgBgBQgLACABAMIAAAAIAlAAIAAAKIglAAIAAABQgBAMAKABIAbAAIAAAKg");
	this.shape_9.setTransform(78.3,65.6,4.226,4.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#793A26").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_10.setTransform(-73.7,65.7,4.226,4.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#793A26").s().p("AgHAeQgKAAgHgGQgHgGAAgJIAAgRQAAgJAHgGQAHgGAKAAIAPAAQAKAAAHAGQAHAGAAAJIAAARQAAAJgHAGQgHAGgKAAgAgNgPQgEAFAAAFIAAAMQAAAFAEAFQAEAEAGAAIAHAAQAGAAAEgEQAEgFAAgFIAAgMQAAgFgEgFQgEgEgGAAIgHAAQgGAAgEAEg");
	this.shape_11.setTransform(-46.9,65.7,4.226,4.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_12.setTransform(-17.1,65.6,4.226,4.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_13.setTransform(106.3,65.6,4.226,4.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_14.setTransform(50.5,65.6,4.226,4.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_15.setTransform(135.7,65.5,4.226,4.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_16.setTransform(11.6,65.5,4.226,4.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#793A26").s().p("AgHAeIAAg7IAPAAIAAA7g");
	this.shape_17.setTransform(30.3,65.6,4.226,4.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#793A26").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgPArIgQAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_18.setTransform(158.7,65.7,4.226,4.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.LogoARCA, new cjs.Rectangle(-194.4,-78.3,389,156.6), null);


(lib.logoarc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AADCCQgDAAgDgCIhUhXQgUgXAKgXIANgUIBZhaQAYgTAXAHIATAKIAeAhIgjAhIgTgUQgJgGgIAHIhFBGQgHAGADAHIAEAFIAzA1IAAAyQgBAJgHAAIgBAAg");
	this.shape.setTransform(53.7,19.3,1.488,1.488);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("Ag0BSQgCgCgBgEIAAgzIA1gzQAGgGgEgJIgFgHIAhgjIASATQAPAXgIAWQgFALgHAHIhQBQQgEAFgEAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(71.8,26.2,1.488,1.488);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#793A26").s().p("Ah2BLQgSgXAMgZIAPgVIBXhWQAWgQAVAFIARAJIBbBZQACAGgGADIgHACIgvABIg2g0QgHgGgHADQgDABgBACIhEBFQgJAJAGAHIAGAFIgjAkg");
	this.shape_2.setTransform(78.9,14,1.488,1.488);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#793A26").s().p("AgpA2QgMgDgIgIIgeggIAighIASASQAIAGAGgCIAFgEIAzgzIAzAAQAIAAABAFQABACgCADIhWBVQgOAQgSAAQgGAAgHgCg");
	this.shape_3.setTransform(84.7,33.2,1.488,1.488);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D73D45").s().p("AAOAeIgOgXIgJAAIAFgIIALAAQAIgBAAgIQgBgEgDgDIgEgCIgWAAIAAAxIgOAAIAAg7IArAAQAEABADACQAIAFgBAJIgBAJQgCAGgKADIAPAYg");
	this.shape_4.setTransform(15.2,50.7,1.488,1.488);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D73D45").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_5.setTransform(24.3,50.8,1.488,1.488);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAEAJIABABIAUAxg");
	this.shape_6.setTransform(4.8,50.8,1.488,1.488);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_7.setTransform(33.8,50.8,1.488,1.488);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#793A26").s().p("AgGAeQgHAAgFgFQgGgGAAgHIAAgpIAQAAIAAAoQABAJAJABIAXAAIAAAJg");
	this.shape_8.setTransform(133.3,50.8,1.488,1.488);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#793A26").s().p("AAAAeQgPgBgGgMQgGgHAAgKQAAgMAJgIQAHgJAKAAIABAAIAAAAIAcAAIAAALIgaAAIAAABIgBgBQgLACABAMIAAAAIAlAAIAAAKIglAAIAAABQgBAMAKABIAbAAIAAAKg");
	this.shape_9.setTransform(96.1,50.7,1.488,1.488);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#793A26").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_10.setTransform(42.5,50.8,1.488,1.488);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#793A26").s().p("AgHAeQgKAAgHgGQgHgGAAgJIAAgRQAAgJAHgGQAHgGAKAAIAPAAQAKAAAHAGQAHAGAAAJIAAARQAAAJgHAGQgHAGgKAAgAgNgPQgEAFAAAFIAAAMQAAAFAEAFQAEAEAGAAIAHAAQAGAAAEgEQAEgFAAgFIAAgMQAAgFgEgFQgEgEgGAAIgHAAQgGAAgEAEg");
	this.shape_11.setTransform(52,50.8,1.488,1.488);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_12.setTransform(62.5,50.7,1.488,1.488);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_13.setTransform(105.9,50.7,1.488,1.488);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_14.setTransform(86.3,50.7,1.488,1.488);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_15.setTransform(116.3,50.7,1.488,1.488);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_16.setTransform(72.6,50.7,1.488,1.488);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#793A26").s().p("AgHAeIAAg7IAPAAIAAA7g");
	this.shape_17.setTransform(79.2,50.7,1.488,1.488);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#793A26").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgPArIgQAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_18.setTransform(124.4,50.8,1.488,1.488);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoarc, new cjs.Rectangle(0,0,137,55.2), null);


(lib.Libros_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D77A54").s().p("AgqhqIAggIIA1DdIggAIg");
	this.shape.setTransform(22.3,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB16A").s().p("AgihhIAVgFIAwDIIgVAFg");
	this.shape_1.setTransform(18.5,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#684D4C").s().p("AgTh7IAUgCIATD5IgUACg");
	this.shape_2.setTransform(13.8,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#984439").s().p("AgMByIAAjjIAZAAIAADjg");
	this.shape_3.setTransform(10.6,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D68E79").s().p("AgMB8IAAj3IAZAAIAAD3g");
	this.shape_4.setTransform(7.6,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D77A54").s().p("AgbBZIAAixIA3AAIAACxg");
	this.shape_5.setTransform(2.8,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Libros_3, new cjs.Rectangle(0,0,26.6,25.8), null);


(lib.Libros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D77A54").s().p("AgihVIAagGIArCxIgaAGg");
	this.shape.setTransform(38,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB16A").s().p("AgchOIARgEIAoChIgSAEg");
	this.shape_1.setTransform(35,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#684D4C").s().p("AgOhdIAPgBIAOC8IgPABg");
	this.shape_2.setTransform(31.8,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#984439").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_3.setTransform(29.4,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D68E79").s().p("AgJBeIAAi7IATAAIAAC7g");
	this.shape_4.setTransform(27.1,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D77A54").s().p("AgUBDIAAiFIApAAIAACFg");
	this.shape_5.setTransform(23.4,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D77A54").s().p("AgghQIAYgGIApCnIgYAGg");
	this.shape_6.setTransform(16.9,10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAB16A").s().p("AgahJIAQgEIAlCXIgQAEg");
	this.shape_7.setTransform(14.1,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#684D4C").s().p("AgOhdIAPgBIAOC8IgPABg");
	this.shape_8.setTransform(10.5,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#984439").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_9.setTransform(8.1,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D68E79").s().p("AgJBeIAAi7IATAAIAAC7g");
	this.shape_10.setTransform(5.8,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D77A54").s().p("AgUBDIAAiFIApAAIAACFg");
	this.shape_11.setTransform(2.1,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Libros, new cjs.Rectangle(0,0,41.5,19.5), null);


(lib.Librero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8C894").s().p("AneDgIAAm/IO9AAIAAG/g");
	this.shape.setTransform(50.1,122.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8C894").s().p("AneDgIAAm/IO9AAIAAG/g");
	this.shape_1.setTransform(50.1,75.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8C894").s().p("AneDgIAAm/IO9AAIAAG/g");
	this.shape_2.setTransform(50.1,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("An3OIIAA8PIPvAAIAAcPg");
	this.shape_3.setTransform(50.4,90.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Librero, new cjs.Rectangle(0,0,100.8,180.8), null);


(lib.Frasco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1AF60").s().p("AgdAAQAAgEADgDIADgBIAvAAQACABACADQAGANgHAAIg0AAIgBAAQgEAAABgJg");
	this.shape.setTransform(4.9,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D0BE").s().p("AglA5QgHgCgDgHIgBgFQgBhAADgMQACgHAMgFIAMgFIgJgCQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAIABgCIA7AAIAAACIgBADQgBACgHAAQAPADAIAKQAEAFABAFIAABHQgBALgMABg");
	this.shape_1.setTransform(4.9,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Frasco, new cjs.Rectangle(0,0,9.9,13.3), null);


(lib.fondogris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE5DF").s().p("EgiKBTQUgOJgifAAAgwxQAAvOBYt2QDD+eJu3uUAOKgieAUAAAAUAUBAAAAOJAieQGNPFDeR1QBOGLA4GhQCZRoAAUCQAAeClXYnQjXPXlcNQUgOJAifgUBAAAUgUAAAAgOKgifg");
	this.shape.setTransform(264.1,203.4,0.726,0.726);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondogris, new cjs.Rectangle(39.5,-343.9,449.2,1094.7), null);


(lib.Fondo_pared = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("EhKTAisMAAAhFXMCUnAAAMAAABFXg");
	this.shape.setTransform(475.6,222);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fondo_pared, new cjs.Rectangle(0,0,951.1,444.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").p("ACOAAQAAA7gpApQgqAqg7AAQg6AAgpgqQgqgpAAg7QAAg6AqgqQApgpA6AAQA7AAAqApQApAqAAA6g");
	this.shape.setTransform(14.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(-0.5,-0.5,30.5,30.5), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ag/BAQgbgbAAglQAAglAbgaQAagbAlAAQAlAAAbAbQAbAagBAlQABAlgbAbQgbAbglgBQglABgagbg");
	this.shape.setTransform(9.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,18.1,18.1), null);


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


(lib.Computadora_de_lado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkALIAAgVIDJAAIAAAVg");
	this.shape.setTransform(27.7,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#585B5C").s().p("AhKB+QgIgDgEgIQgDgFgBgEQgBgIAFgSIA/jDQADgKAHgDIADgCIACAHQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgEADgDAJIhCDQIADALQAEALALABQASADCMACQACACgMACIgOABQgiAAhrgFg");
	this.shape_1.setTransform(9.1,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#585B5C").s().p("AAiDDIhImFIAEABIBJGEg");
	this.shape_2.setTransform(13.3,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyjAIAYgEIBNGEIgdAFg");
	this.shape_3.setTransform(12.2,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AEB1B1").s().p("AgYACQgNg0AAhNIADhDIBIGFQgphsgVhVg");
	this.shape_4.setTransform(10.6,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Computadora_de_lado, new cjs.Rectangle(0,0,37.9,46.4), null);


(lib.Coca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E62F33").s().p("AgaAVQgCgaAEgRIAKABIAUABIATgCIACAOQABAQgBANQgQACgNAAQgNAAgLgCg");
	this.shape.setTransform(2.8,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A1213").s().p("AgSBVQgGgCgBgMIAAgNIACgHQACgIgDgOQgEgUAEgsIAEgKIAIgNQACgFACgJIAAgIIgDAAIAAgEIAXAAIAAAEIgCAAIAAAIQAAAJADAFIAIANIAEAKQAEAsgEAUQgDAOACAIIACAHIABANQgCAMgGACg");
	this.shape_1.setTransform(2.8,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E62F33").s().p("AgMAFIAAgIIAFgBIASAAIACABIAAAIg");
	this.shape_2.setTransform(2.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Coca, new cjs.Rectangle(0,0,5.6,18.2), null);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,152,152);


(lib.circulo6g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6C1A5").s().p("AgEAAIAEgDIAFACIgBADIgFACg");
	this.shape.setTransform(56.4,64.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6C1A5").s().p("AgDACIgBgDIAEgCIAFADIgDAEg");
	this.shape_1.setTransform(50.8,64.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC00").s().p("AgUAaQgKgKAAgQQAAgOAJgLQAJgKAMAAQAMAAAKAKQAJALAAAOQAAAPgKALQgJAKgMAAQgLAAgJgKg");
	this.shape_2.setTransform(53.9,54.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCC00").s().p("AgyAjQgHAAAAgHIAAgOQAAgPAJgNQAIgNAOgHIABABQAKANAPAAQAQAAALgNIAAgBQAOAHAIANQAJANAAAPIAAAOQAAAHgHAAg");
	this.shape_3.setTransform(53.9,61.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyBHQgFAAgDgDQgDgEAAgEIAAgOQAAgRAJgOQAJgOAQgGIABAAQgHgLgBgOQAAgRAKgLQAKgMAOAAQAPAAAKAMQAJALABARQAAAOgIALIABAAQAQAGAJAOQAJAOAAARIAAAOQAAAEgDAEQgEADgEAAg");
	this.shape_4.setTransform(53.9,57.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A332D").s().p("AAKAJQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQgCgDgHACIgHADQgIABgBgJQgBgFACgDQACgDADABQAFACADgBQACgBAEABIAJADIADACQAEAGgEAGIgCACIgFAEIABgEg");
	this.shape_5.setTransform(53.4,58.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAC6AC").s().p("AAAAKIgBgDIgDgBQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgBgCIAAgFIABgCQAEgDAFABIAEACIAAACIABAFIAAACQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAIAAAEIgBABIgDABIgBgBg");
	this.shape_6.setTransform(53.6,59.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#344359").s().p("AAZAmIgHgFQgEgCgFgBIgaAAQgIACgBgBIAAgBIABgLQABgKAGgYIACgIIABgFIAHgHQAEgDAEABQALACADACIAFAIQAEAIABAIIADAmQAAAJgBAAg");
	this.shape_7.setTransform(53.6,64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2F3D50").s().p("AgEAAIAEgCIAFAAIAAACIgFADg");
	this.shape_8.setTransform(52.4,75.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3D3D3").s().p("AgEAzIgIg2IAAgrIAZgEIgLBlg");
	this.shape_9.setTransform(52.8,70.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#344359").s().p("AgNAMIAOgaIANgDIgLAYIgJALg");
	this.shape_10.setTransform(51.7,62.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3D3D3").s().p("AgIAHIgFgpIABgRIAZABIABAKIgFAvIAEArIgGACg");
	this.shape_11.setTransform(54.7,70.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2F3D50").s().p("AgEACIADgCIAFgFIABAHIgGADg");
	this.shape_12.setTransform(55.5,75.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F6C1A5").s().p("AgDAAIADgFIACADIACAFIgEADg");
	this.shape_13.setTransform(48.2,62.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6C1A5").s().p("AgDADIACgGIADgCIACAFIgDAFg");
	this.shape_14.setTransform(39.1,63);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6699CC").s().p("AgRAXQgIgKAAgNQAAgLAIgKQAHgJAKAAQALAAAIAJQAHAJAAAMQAAAOgIAJQgIAIgKAAQgJAAgIgIg");
	this.shape_15.setTransform(43.6,58.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6699CC").s().p("AgrAeQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIAAgMQAAgNAIgLQAHgLAMgGIABABQAJALAMAAQANAAAKgLIAAgBQAMAGAHALQAIALAAANIAAAMQAAAGgGAAg");
	this.shape_16.setTransform(43.6,63.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgrA9QgEgBgDgCQgCgDAAgEIAAgLQAAgPAIgMQAHgMAOgFIABAAQgGgKgBgMQAAgOAJgJQAIgKAMAAQAMAAAJAKQAJAJAAAOQgBAMgGAKIABAAQAOAFAHAMQAIANAAAOIAAALQAAAEgDADQgDACgEABg");
	this.shape_17.setTransform(43.7,60.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A332D").s().p("AgLAKIgBgBIACgEIABgCIACgEQAAgEABgBIAFgCIAGgFQAEgBACADQADAEgCADQgBACgGABQgFABAAADQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQgHAAAAgEg");
	this.shape_18.setTransform(43,60.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DAC6AC").s().p("AAAACIgBAAIAAgCIAAgBIADgBIAAAEIAAABg");
	this.shape_19.setTransform(43.6,61.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DAC6AC").s().p("AgFAFQgDgFACgEQADgEAEAAQAGAAABAGIgBAGQgCAFgDAAIgCAAQgDAAgCgEg");
	this.shape_20.setTransform(43.6,60.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3A332D").s().p("AAAALQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQABgFgBgCIgCgEIgDgDIABgBIABgCQABgBAAAAQABAAAAAAQABAAAAAAQAAABAAAAIADAEIABAEIgBAGIAAABIACACQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAIgCABIgDgBg");
	this.shape_21.setTransform(44.3,60.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8B6656").s().p("AgHAAIACgEIAMADIAAgBIABAHg");
	this.shape_22.setTransform(45.5,64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6C1A5").s().p("AAAACIgDgCIABgCIADACIAAgCIADADIgBACg");
	this.shape_23.setTransform(44.6,63.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8B6656").s().p("AAHANIgQgSIgDgJIAHACIASAVIgFAGg");
	this.shape_24.setTransform(45.5,63);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066CC").s().p("AgWAuIgGgDIgFgCIAEgGIACgHIAKhAIAFgFIACgCQAHgEAIACIABAAQAEABAHALIACACIAFAPQAEAMABALIAEAVIABAKQAAABAAABQAAABgBAAQAAABAAAAQAAABgBAAQgDACgHAAIgeABIgOAAg");
	this.shape_25.setTransform(43.6,66);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#344359").s().p("AgFACIABgEIAEAAIAFADIAAACg");
	this.shape_26.setTransform(45.1,75.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#344359").s().p("AABAlIgMhJIAXAFIgHBEg");
	this.shape_27.setTransform(44.6,71.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#344359").s().p("AACAEIgHgEIABgEIAEAAIAFAEIABABIgBADg");
	this.shape_28.setTransform(42.6,75.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#344359").s().p("AgIAlIACgjIgEgnIAVAJIgBADIgEAgIgKAfg");
	this.shape_29.setTransform(43.1,71.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC6756").s().p("AgDAAIADgFIACADIACAFIgEADg");
	this.shape_30.setTransform(68.3,62.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC6756").s().p("AgDADIACgGIACgCIADAFIgDAFg");
	this.shape_31.setTransform(59.2,63);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6699CC").s().p("AgRAXQgIgJAAgOQAAgMAHgJQAIgJAKAAQALAAAHAJQAIAKAAALQAAAOgIAJQgIAIgKAAQgJAAgIgIg");
	this.shape_32.setTransform(63.7,58.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6699CC").s().p("AgrAeQgGAAAAgGIAAgMQAAgNAIgLQAHgLAMgGIAAABQAKALAMAAQAOAAAIgLIABgBQAMAGAHALQAIALAAANIAAAMQAAAAAAABQgBAAAAABQAAABAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAg");
	this.shape_33.setTransform(63.7,63.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgqA9QgFgBgCgCQgDgDAAgEIAAgLQAAgOAIgNQAHgMAOgFIABAAQgGgKgBgMQAAgOAJgJQAJgKALAAQANAAAIAKQAJAJAAAOQgBAMgFAKIAAAAQAOAFAHAMQAIAMAAAPIAAALQAAAEgDADQgCACgEABg");
	this.shape_34.setTransform(63.7,60.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5B4BA").s().p("AgOAIIABgIIAWgWIAGgCIgEAEIgKAVIgGAFIAFANIgDAGg");
	this.shape_35.setTransform(61.9,63.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#504A45").s().p("AABAAQgDAAgDACIgCACIgBADQgDACAAgIIgCgFIAAgBIACgBIALgEIABAAIAGAEIAFADQACACAAAFQAAABgFAGQAAgKgIgBg");
	this.shape_36.setTransform(64,59.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BC6756").s().p("AgEAKIABgDIgDgBIgCgCQgCgDACgJIABgBIACgBQAFgBAGACIABAAIADABIAAADIgDAGQgCAEgCABIgBABIAAADQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgEgBg");
	this.shape_37.setTransform(64.1,60.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E2E2E2").s().p("AgVAjQgDgDAAgDQAAgdAFgPQAEgOAGgGIAFgDIAQACIAKAmIACAUQADAPgHgCQgDgBgdAFIgCAAQgEAAgDgEg");
	this.shape_38.setTransform(63.9,64.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#233040").s().p("AgEAAIAEgCIAEAAIAAACIgEADg");
	this.shape_39.setTransform(62.3,75.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#457EC9").s().p("AgHAqIgEg9IACgVIAVgCIgOBVg");
	this.shape_40.setTransform(63,71.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#233040").s().p("AgDAAIAAgCIAEAAIADACIgCADg");
	this.shape_41.setTransform(65.4,76);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#457EC9").s().p("AgLgnIAWAEIABAcIgEAuIgEABg");
	this.shape_42.setTransform(64.6,71.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5C2C14").s().p("AjUAaQgFAAgEgDQgEgFAAgGIAAgXQAAgGAEgEQAEgFAFAAIGoAAQAGAAAEAFQAEAEAAAGIAAAXQAAAGgEAFQgEADgGAAg");
	this.shape_43.setTransform(53.2,35.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#785548").s().p("AguAMQgEAAgDgDQgCgDAAgFIAAgBQAAgFACgDQADgEAEABIBcAAQAFgBACAEQADADAAAFIAAABQAAAFgDADQgCADgFAAg");
	this.shape_44.setTransform(74.8,69.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#598415").s().p("AgmAeQgHgIAAgJQAAgNAKgHIAAgCQAAgFADgDQACgDAFAAQADAAAEADQAJgMANAAQAMAAAJAJQAIAIABAMQAMAEAAANQAAAIgEAFg");
	this.shape_45.setTransform(74.8,66.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#785548").s().p("AgbANQgFAAgDgEQgEgEABgFQgBgEAEgEQADgEAFAAIA3AAQAFAAADAEQAEAEAAAEQAAAFgEAEQgDAEgFAAg");
	this.shape_46.setTransform(53.7,31.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#785548").s().p("Ag4ANQgEAAgEgEQgEgEABgFQgBgEAEgEQAEgEAEAAIBxAAQAFAAADAEQADAEABAEQgBAFgDAEQgDAEgFAAg");
	this.shape_47.setTransform(66.3,31.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#785548").s().p("Ag4ANQgEAAgEgEQgDgEAAgFQAAgEADgEQAEgEAEAAIBxAAQAFAAADAEQADAEAAAEQAAAFgDAEQgDAEgFAAg");
	this.shape_48.setTransform(41.3,31.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#785548").s().p("AguAMQgDAAgEgDQgDgDAAgFIAAgBQAAgFADgDQAEgEADABIBcAAQAEgBADAEQAEADAAAFIAAABQAAAFgEADQgDADgEAAg");
	this.shape_49.setTransform(86.7,69.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#598415").s().p("AAVAUIgHABQgKAAgFgGQgEALgLAAQgFAAgFgEQgEAHgIAAQgFAAgEgEQgDgEAAgGQAAgGADgEQAEgFAFAAQAEAAACACQAEgMAMAAQADAAAEACQACgIAGgGQAGgGAJAAQAIAAAHAGQAHAGAAAKQAHABAEAFQAEAEAAAHQAAAHgEAGQgGAFgHAAQgJAAgEgJg");
	this.shape_50.setTransform(86.7,67);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#785548").s().p("AgtAMQgFAAgDgDQgCgDAAgFIAAgBQAAgFACgDQADgEAFABIBbAAQAFgBACAEQADADAAAFIAAABQAAAFgDADQgCADgFAAg");
	this.shape_51.setTransform(21.2,69.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#598415").s().p("AAbAWQgFAEgFAAQgLAAgEgLQgGAGgIAAIgHgBQgGAJgJAAQgHAAgEgFQgFgGgBgHQAAgHAFgEQAEgFAGgBQABgKAHgGQAHgGAJAAQAIAAAFAGQAHAGABAIQAFgCADAAQAMAAAEAMQADgCACAAQAGAAADAFQAFAEAAAGQAAAGgFAEQgDAEgGAAQgHAAgEgHg");
	this.shape_52.setTransform(21.2,67);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#785548").s().p("AgtAMQgEAAgDgDQgEgDAAgFIAAgBQAAgFAEgDQADgEAEABIBcAAQADgBADAEQAEADAAAFIAAABQAAAFgEADQgDADgDAAg");
	this.shape_53.setTransform(33.2,69.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#598415").s().p("AgpAeQgEgFAAgIQAAgNAMgEQABgMAJgIQAIgJAMAAQANAAAJAMQADgDAEAAQAEAAADADQADADAAAFIAAACQAKAHAAANQAAAKgHAHg");
	this.shape_54.setTransform(33.2,66.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D25558").s().p("AiXArQgHgBgEgFQgGgGAAgHIAAgvQAAgIAGgFQAEgGAHAAIEvAAQAHAAAEAGQAFAFABAIIAAAvQgBAHgFAGQgEAFgHABgAidgXIAAAvQAAAHAGAAIEvAAQAGAAAAgHIAAgvQAAgHgGAAIkvAAQgGAAAAAHg");
	this.shape_55.setTransform(53.3,42.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AiXAlQgFAAgDgEQgDgDAAgGIAAgvQAAgFADgEQADgEAFAAIEvAAQAEAAAEAEQADAEAAAFIAAAvQAAAFgDAEQgEAEgEAAg");
	this.shape_56.setTransform(53.3,42.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AA7ArIAAhBQAAgDgCgCQgDgCgDgBIh5AAIAAgMIB5AAQAIAAAGAFQAGAGAAAJIAABBg");
	this.shape_57.setTransform(80.9,66);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhGArIAAhBQAAgJAGgGQAFgFAJAAIB5AAIAAAMIh5AAQgIABAAAHIAABBg");
	this.shape_58.setTransform(25.6,66);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7F8C8D").s().p("AgnBAQgHAAgFgFQgEgFAAgIIAAhbQAAgIAEgFQAFgFAHAAIBPAAQAHAAAFAFQAEAFAAAIIAABbQAAAIgEAFQgFAFgHAAgAgug1QgEADAAAFIAABbQAAAFAEADQADAEAEAAIBPAAQAEAAADgEQADgDAAgFIAAhbQAAgFgDgDQgDgDgEAAIhPAAQgEAAgDADg");
	this.shape_59.setTransform(82.6,53.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgnA9QgGAAgEgEQgDgFAAgGIAAhbQAAgGADgEQAEgFAGAAIBPAAQAFAAAEAFQAFAEAAAGIAABbQAAAGgFAFQgEAEgFAAg");
	this.shape_60.setTransform(82.6,53.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4A7186").s().p("AgnBAQgHAAgFgFQgEgFAAgIIAAhbQAAgIAEgFQAFgFAHAAIBPAAQAHAAAFAFQAEAFAAAIIAABbQAAAIgEAFQgFAFgHAAgAgug1QgDADAAAFIAABbQAAAFADADQADAEAEAAIBPAAQAEAAADgEQADgDAAgFIAAhbQAAgFgDgDQgDgDgEAAIhPAAQgEAAgDADg");
	this.shape_61.setTransform(24.7,53.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgnA9QgGAAgDgEQgEgFAAgGIAAhbQAAgGAEgEQADgFAGAAIBPAAQAGAAAEAFQADAEAAAGIAABbQAAAGgDAFQgEAEgGAAg");
	this.shape_62.setTransform(24.7,53.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#66B2D6").s().p("Ai/BlIAAjJIF/AAIAADJg");
	this.shape_63.setTransform(53.4,60.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EE852F").s().p("AjNCwIAAlfIGaAAIAAFfg");
	this.shape_64.setTransform(53.3,52.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6C3C22").s().p("AjTAaQgGAAgEgDQgEgFAAgGIAAgXQAAgGAEgEQAEgEAGgBIGoAAQAFABAEAEQAEAEAAAGIAAAXQAAAGgEAFQgEADgFAAg");
	this.shape_65.setTransform(69.8,41.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6C3C22").s().p("AjUAaQgFAAgEgDQgEgFAAgGIAAgXQAAgGAEgEQAEgEAFgBIGoAAQAGABAEAEQAEAEAAAGIAAAXQAAAGgEAFQgEADgGAAg");
	this.shape_66.setTransform(37,41.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EECC67").s().p("AiKCPIAAkdIEVAAIAAEdg");
	this.shape_67.setTransform(76.8,56.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EECC67").s().p("AiKCPIAAkdIEVAAIAAEdg");
	this.shape_68.setTransform(30.4,56.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B6E9B7").s().p("AmVBFQgOgcgLgjQCvg+C6gKQECgPDyBZQgMAkgNAZg");
	this.shape_69.setTransform(53.4,65.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B6E9B7").s().p("AjxA4QhrhDg5hyIMrAAQg5ByhrBDQhvBGiDAAQiCAAhvhGg");
	this.shape_70.setTransform(53.4,85.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C1EAF8").s().p("AhFDdQi6ALiwA/QgVhEAAhGQAAi6CFiFQCEiFC7AAQC7AACFCFQCFCFAAC6QAABGgWBFQjzhakBAPg");
	this.shape_71.setTransform(53.4,37);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Al1F2QibibAAjbQAAjaCbibQCcibDZAAQDbAACbCbQCbCbAADaQAADbibCbQibCbjbAAQjZAAicibgAkJkJQhuBuAACbQAACbBuBvQBvBuCaABQCbgBBvhuQBvhvgBibQABibhvhuQhvhuibgBQiaABhvBug");
	this.shape_72.setTransform(52.9,52.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ak/FAQiEiEgBi8QABi6CEiFQCEiFC7AAQC8AACECFQCFCFAAC6QAAC8iFCEQiECFi8AAQi7AAiEiFg");
	this.shape_73.setTransform(52.9,52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulo6g, new cjs.Rectangle(0,0,105.8,105.8), null);


(lib.circulo5g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181C23").s().p("AgLAIQgCgDAAgFQAAgIAIgDQAIgCAGAIIAFAEIgDACIgKABQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAIgBgDIgBgBIgBABQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAAAFIgGgEg");
	this.shape.setTransform(45.4,38.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C3355").s().p("AgDADQgLgCAAgDQABgCAEgBIADAAIAVAHIAAAEg");
	this.shape_1.setTransform(45.3,43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202B41").s().p("AgBAAIABgCIABAAIABABIgBAEg");
	this.shape_2.setTransform(45.5,41.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D79E73").s().p("AAAALQgEAAgDgDQgEgEAAgEQAAgFAEgDQADgEAEAAQAFAAAEAEQADADAAAFQAAAFgDAFQgCADgDAAIgEgCg");
	this.shape_3.setTransform(45.4,38.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEAAIgBgCIACgBIADACQABAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBIAAAAIABAAIABAGIgEgDIgCAEIgEgEg");
	this.shape_4.setTransform(45.2,40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C3355").s().p("AAAANIgBgCQgFgKABgHQABgEACgCIACgCQACABACAMIACALQABAEgDABIgBAAIgDgCg");
	this.shape_5.setTransform(44,41.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#172C48").s().p("AgFAHIgBgTIAEAJIADAJIAGADIAAAEQgLgDgBgDg");
	this.shape_6.setTransform(44.2,42.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C3355").s().p("AgHAUIAAghIACgEQADgEAGgCIACAGIACAOQAAAKgCAQIgEABQgIAAgBgEg");
	this.shape_7.setTransform(44.2,42.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202B41").s().p("AgBAAIABgCIACABIAAADIgCABg");
	this.shape_8.setTransform(45.4,40.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202B41").s().p("AgEAJIACgWIAHAAIgGAbg");
	this.shape_9.setTransform(44.4,45.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202B41").s().p("AAAANQgBgBgCgVIAHgEIAAAaIgDABIgBgBg");
	this.shape_10.setTransform(45.6,47.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1C3355").s().p("AABAEQABgJgCgJIgDgHIABAAIABAAIADABIACARQgBATgBADQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAg");
	this.shape_11.setTransform(46,42.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202B41").s().p("AgHAHIAHgQIAIABIgLASQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_12.setTransform(43.4,47.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D79E73").s().p("AgDACIACgCIAEgCIACACQgCAEgEAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAABAAg");
	this.shape_13.setTransform(47,43.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DFE7F2").s().p("AgDgDIAIgCIgBALg");
	this.shape_14.setTransform(45.3,40.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D79E73").s().p("AgDAEIAAgJIAHAAIAAAJQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBg");
	this.shape_15.setTransform(45.2,39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#243B67").s().p("AgIARIgFgDIAAgRQAAgGAFgEIAFgDQAGgDAGACIAFADIAAAaQgBAEgKACIgDABQgEAAgEgCg");
	this.shape_16.setTransform(44.8,41.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C3355").s().p("AgDAKIABgXIACABIACAKIACALQAAAEgCABIgBAAQgCAAgCgEg");
	this.shape_17.setTransform(46.3,41.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202B41").s().p("AgMAUIgBgoIAbAFIgCAaIgFADIgDABIgCgTIgEABIgDAYg");
	this.shape_18.setTransform(44.8,44.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F0C136").s().p("AgDgEIAPgHIgJAQIgOAHg");
	this.shape_19.setTransform(47.7,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1C3355").s().p("AgDADQgGgBgDgCQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQACgDADAAIADAAIAVAHIAAAEg");
	this.shape_20.setTransform(46.5,42.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1A1E26").s().p("AgFABIAAgCIAFgBIAFACQABABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgCAAIgHgCg");
	this.shape_21.setTransform(46,48.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1A1E26").s().p("AAAADIgDgDIABgDIACgBQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIACAEQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAIgBABIgDgCg");
	this.shape_22.setTransform(42.9,48.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC0D1B").s().p("AjCAIIAAgPIGFAAIAAAPg");
	this.shape_23.setTransform(55.4,37.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D79E73").s().p("AgDAEIgBgHIABgBIACAEIADgHIADAHIgFAIg");
	this.shape_24.setTransform(75.8,39);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#243B67").s().p("AgQAXQgFgCgDgEQgCgFABgFQACgFAEgCIAFgBIAVgCIAHgPQACgGAGADQAFACgBAGIgIATIgDADIgBABIgVALQgDACgDAAIgDAAg");
	this.shape_25.setTransform(73.8,40.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#243B67").s().p("AgDgEIABgCIACgBQABAAADAHIgEAIg");
	this.shape_26.setTransform(70.8,41.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#243B67").s().p("AgCAHIAAgSIAFAIIgBANIgCACg");
	this.shape_27.setTransform(70.9,41.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#243B67").s().p("AgCAJQgGgBgDgDIgCgCIAAgNIAXAAIAEATQgEACgFAAIgHgCg");
	this.shape_28.setTransform(72,43.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#243B67").s().p("AAAANIgLgNIgBgMIAIABQAJACAGAGIAAABIAAAAIACAOIgDABg");
	this.shape_29.setTransform(71.9,42);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#243B67").s().p("AgMAOIAAggIAUAIIAFAdg");
	this.shape_30.setTransform(71.9,42.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGgBQABgDAJAEIADADIgGABQgHgDAAgCg");
	this.shape_31.setTransform(71.8,40.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#202B41").s().p("AgOAfIgBAAIAHgWIgDglIATgCIAEAEIACACIAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAAeIgEAWIgDABIgBAAIgCguIgFgCIgCAdIgLAUg");
	this.shape_32.setTransform(71.8,46.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1E2128").s().p("AgEABIABgBIADgBQACAAACABQABAAgGACIAAAAIgDgBg");
	this.shape_33.setTransform(70.6,50);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1E2128").s().p("AgEABIABgBIADgBQADAAACABIgDABIgDABIAAAAIgDgBg");
	this.shape_34.setTransform(73,50);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D79E73").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBg");
	this.shape_35.setTransform(72.7,39.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#181C23").s().p("AgFAHQgDgDAAgEQgBgCADgDQACgDAEgBQAJAAAAAJQABADgDADQgCADgEAAQgDAAgDgCg");
	this.shape_36.setTransform(71,38.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#243B67").s().p("AgIABQgBgDADgDQADgDADAAQAJAAAAAIQAAAEgCACQgDADgDAAIgBAAQgHAAgBgIg");
	this.shape_37.setTransform(71.1,38.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#181C23").s().p("AABANIgFgBQgDgBgCgDIgCgFIAGgNIAIgCQANgCgFAIIgCABQgCACABAEQAAAFgCAEQgBABAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_38.setTransform(71.9,39.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D79E73").s().p("AgCADIgBgHIAHAAIAAAJg");
	this.shape_39.setTransform(71.9,40.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D79E73").s().p("AgHAKQgEgEgBgFQAAgEADgEQAEgEAFgBQAEAAAEADQAEAEABAFQAAAGgCACQgCAEgIABIgBAAQgEAAgDgDg");
	this.shape_40.setTransform(72,39.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D79E73").s().p("AgCAAIACgCQABAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAGIgDABg");
	this.shape_41.setTransform(73.1,37.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#243B67").s().p("AgQAcQgEgEAAgFIABgDIAKgfIAAgBQABgDACgBIARgKQAGgDADAGQACAFgFAEIgNAIIAAAdQAAAGgEADQgCAEgGAAQgFAAgDgEg");
	this.shape_42.setTransform(71.6,39.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AjbAPQgFAAgFgDQgEgFAAgGIAAgCQAAgFAEgFQAFgDAFAAIG2AAQAHAAAEADQAEAFAAAFIAAACQAAAGgEAFQgEADgHAAg");
	this.shape_43.setTransform(51.9,80.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2F2F2").s().p("AjbAYQgFAAgFgEQgEgFAAgGIAAgSQAAgGAEgEQAFgEAFAAIG2AAQAHAAAEAEQAEAEAAAGIAAASQAAAGgEAFQgEAEgHAAg");
	this.shape_44.setTransform(51.9,79.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#39A2A5").s().p("AjdBCQgGAAgEgDQgEgFgBgGIAAhoQABgFAEgFQAEgDAGAAIG7BAQAGgBAEAEQAEAEABAGIAAAoQgBAGgEAFQgEADgGAAg");
	this.shape_45.setTransform(51.6,46.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#364F5D").s().p("AjdBNQgGAAgEgEQgEgFgBgGIAAh8QABgGAEgEQAEgEAGAAIG7BAQAGAAAEAFQAEAEABAFIAAA8QgBAGgEAFQgEAEgGAAg");
	this.shape_46.setTransform(51.6,47.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66C2B0").s().p("Ai5B0IAAjnIFyAAIAADng");
	this.shape_47.setTransform(51.9,69);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EAECE1").s().p("AjfCHIAAkMIG/AAIAAEMg");
	this.shape_48.setTransform(51.9,67.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#637C14").s().p("AgTBhQgPggAAg4QAAgrAKgeQAKggAOAAQAOAAALAgQALAeAAArQAAA4gQAgg");
	this.shape_49.setTransform(27.8,72.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#57585A").s().p("AgMADIAAgFIAWAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_50.setTransform(74.9,74.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#57585A").s().p("AgUgCIAnAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAIgnAAg");
	this.shape_51.setTransform(75.7,71.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#57585A").s().p("AgNADIAAgFIAYAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_52.setTransform(75,79.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#57585A").s().p("AgNgCIAYAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgYABg");
	this.shape_53.setTransform(75,76.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#57585A").s().p("AgNgCIAYAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQgBAAAAAAIgXAAg");
	this.shape_54.setTransform(74.9,69.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#57585A").s().p("AgNADIAAgEIAYgBQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_55.setTransform(74.9,67);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#57585A").s().p("AgNgCIAYAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgYAAg");
	this.shape_56.setTransform(74.9,64.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#57585A").s().p("AgUADIAAgEIAmgBQABAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_57.setTransform(75.6,62.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#57585A").s().p("AgMADIAAgFIAWAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_58.setTransform(74.8,59.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#57585A").s().p("AgMgCIAXAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgXAAg");
	this.shape_59.setTransform(74.8,57.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#57585A").s().p("AgMgCIAXAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAIgXAAg");
	this.shape_60.setTransform(74.8,54.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#57585A").s().p("AgUADIgBgFIAoAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_61.setTransform(75.5,52.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#57585A").s().p("AgNADIAAgFIAXAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_62.setTransform(74.7,49.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#57585A").s().p("AgNgCIAXAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAIgXAAg");
	this.shape_63.setTransform(74.7,47.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#57585A").s().p("AgMADIAAgFIAXAAQAAAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_64.setTransform(74.7,44.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#57585A").s().p("AgUgCIAmAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgmABg");
	this.shape_65.setTransform(75.4,42.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#57585A").s().p("AgNgCIAYAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgYABg");
	this.shape_66.setTransform(74.6,39.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#57585A").s().p("AgNgCIAYAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIgYAAg");
	this.shape_67.setTransform(74.6,37.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#57585A").s().p("AgMADIgBgEIAYgBQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAg");
	this.shape_68.setTransform(74.6,35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#57585A").s().p("AgUgCIAmAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgmABg");
	this.shape_69.setTransform(75.4,32.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FBC94A").s().p("AgqkmIBQgBIAFJPIhPAAgAgIkOQgDADAAAEQAAAEADADQADADAEAAQAJgBAAgJQAAgEgEgDQgDgDgCAAQgFAAgCADg");
	this.shape_70.setTransform(77.4,52.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B6E9B7").s().p("AmVBGQgPgfgKghQCwg9C5gLQECgPDyBZQgJAegQAgg");
	this.shape_71.setTransform(52.8,66.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B6E9B7").s().p("AjxA4QhshEg4hxIMrAAQg4BxhsBEQhuBGiEAAQiDAAhuhGg");
	this.shape_72.setTransform(52.8,85.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C1EAF8").s().p("AhFDdQi5ALiwA+QgWhBAAhIQAAi7CFiEQCEiFC7AAQC8AACECFQCECEABC7QAABHgWBEQjzhakBAPg");
	this.shape_73.setTransform(52.8,37.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Al1F2QibibAAjbQAAjaCbibQCbibDaAAQDbAACbCbQCbCbAADaQAADbibCbQibCbjbAAQjaAAibibgAkJkJQhvBuABCbQgBCcBvBuQBvBvCaAAQCcAABuhvQBvhuAAicQAAibhvhuQhuhuicAAQiaAAhvBug");
	this.shape_74.setTransform(52.9,52.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ak/FAQiFiEAAi8QAAi7CFiEQCEiFC7AAQC7AACFCFQCFCEAAC7QAAC8iFCEQiFCFi7AAQi7AAiEiFg");
	this.shape_75.setTransform(52.9,52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulo5g, new cjs.Rectangle(0,0,105.8,105.8), null);


(lib.circulo4g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8DC449").s().p("AAABVIgZAcIAAiQIglANIA+heIA/BeIglgOIAACRg");
	this.shape.setTransform(38.1,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC12D").s().p("AgWBHIAAhiIgeARIAAgdIA0gfIA1AfIAAAdIgegRIAABig");
	this.shape_1.setTransform(49.3,46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AgTB4IgHihIgmAAIBAhOIBBBOIgmAAIgHChg");
	this.shape_2.setTransform(54.7,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699FF").s().p("AgeBeIAAhnIgLARIgZAAIBChlIBDBlIgZAAIgLgRIAABng");
	this.shape_3.setTransform(66.4,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#637C14").s().p("Ag0ApQgHgLgBgNIAAgDQAAgWASgQQASgQAYAAQASAAAQAJIAGAEQAVARAAAYQAAAPgJAMg");
	this.shape_4.setTransform(32,74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#637C14").s().p("AgnAkQgFgJgBgMIAAgDQAAgTANgOQAOgOASAAQAOAAAMAJIAEADQAQAPAAAUQAAAMgGAMg");
	this.shape_5.setTransform(76.3,75.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#598415").s().p("AgaBNQgIgZgBgkIAAgBQAAgdAHgYQAHgYAKgKQAFgEAGAAQAPAAALAbQAKAbAAAlQAAAkgJAag");
	this.shape_6.setTransform(27.3,71.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#598415").s().p("AgVBMQgHgaAAgiIAAAAQAAgdAFgYQAFgYAJgJQAFgFAEAAQAMAAAJAbQAJAagBAmQABAkgIAYg");
	this.shape_7.setTransform(82.3,71.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5B22D").s().p("AgHAVIAAgVIgJAAIAQgUIASAUIgJAAIAAAVg");
	this.shape_8.setTransform(28.3,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5B22D").s().p("AgHAVIAAgVIgJAAIAQgUIASAUIgJAAIAAAVg");
	this.shape_9.setTransform(79.7,61.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D25558").s().p("AgeAuQgGAAgDgEQgEgEgBgFIAAhAQABgGAEgEQADgFAGAAIA9AAQAGAAAEAFQADAEAAAGIAABAQAAAFgDAEQgEAEgGAAgAglgfIAABAQAAAGAHAAIA9AAQAHAAAAgGIAAhAQAAgHgHAAIg9AAQgHAAAAAHg");
	this.shape_10.setTransform(79.4,61.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeArQgEAAgDgDQgDgDAAgFIAAhAQAAgEADgDQADgDAEAAIA9AAQAEAAADADQADADAAAEIAABAQAAAFgDADQgDADgEAAg");
	this.shape_11.setTransform(79.4,61.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A7186").s().p("AgeAvQgGgBgEgEQgDgEAAgGIAAg/QAAgGADgEQAEgFAGAAIA9AAQAGAAADAFQAEAEABAGIAAA/QgBAGgEAEQgDAEgGABgAglgfIAAA/QAAAHAHAAIA9AAQAGAAABgHIAAg/QgBgHgGAAIg9AAQgHAAAAAHg");
	this.shape_12.setTransform(28.3,60.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgeArQgEAAgDgDQgDgEAAgEIAAhAQAAgEADgDQADgDAEAAIA9AAQAEAAADADQADADAAAEIAABAQAAAEgDAEQgDADgEAAg");
	this.shape_13.setTransform(28.3,60.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBPIAAidIAIAAIAACdg");
	this.shape_14.setTransform(58.1,71.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBPIAAidIAHAAIAACdg");
	this.shape_15.setTransform(49.3,71.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D25558").s().p("AjWBXQgJAAgHgHQgGgGgBgKIAAh/QABgJAGgHQAHgHAJAAIGsAAQAKAAAGAHQAIAHgBAJIAAB/QABAKgIAGQgGAHgKAAgAjchFQgCADAAADIAAB/QAAAEACACQACADAEAAIGsAAQAEAAACgDQADgCAAgEIAAh/QAAgDgDgDQgCgCgEAAImsAAQgEAAgCACg");
	this.shape_16.setTransform(53.5,47.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjWBPQgGABgFgFQgEgEAAgHIAAh/QAAgGAEgFQAFgFAGABIGtAAQAGgBAFAFQAEAFAAAGIAAB/QAAAHgEAEQgFAFgGgBg");
	this.shape_17.setTransform(53.4,47.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah+AFIAAgJID9AAIAAAJg");
	this.shape_18.setTransform(53.7,64);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah8CkQgHAAAAgIIAAk4QAAgHAHAAID5AAQAHAAAAAHIAAE4QAAADgCADQgCACgDAAgAh8CcID5AAIAAk4Ij5AAg");
	this.shape_19.setTransform(53.7,64);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66C2B0").s().p("Ah8CgQgBAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAk4QAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAID5AAQABAAABAAQAAAAABABQAAAAAAABQAAABAAABIAAE4QAAAAAAABQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_20.setTransform(53.7,64);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D5E5E6").s().p("AiQC+IAAl7IEhAAIAAF7g");
	this.shape_21.setTransform(53.5,63);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhpAFIAAgJIDTAAIAAAJg");
	this.shape_22.setTransform(68.1,64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhqCNQgHAAAAgHIAAkLQAAgHAHAAIDVAAQADAAACACQACACAAADIAAELQAAAHgHAAgAhqCGIDVAAIAAkLIjVAAg");
	this.shape_23.setTransform(68.2,63.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#469F8E").s().p("AhqCKQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAkLQAAgBAAgBQABAAAAgBQABAAAAAAQABgBABAAIDVAAQABAAABABQAAAAABAAQAAABABAAQAAABAAABIAAELQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_24.setTransform(68.2,63.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B73A3C").s().p("AiEAZQgEAAgEgDQgCgDAAgEIAAgdQAAgFACgCQAEgDAEAAIEKAAQAEAAACADQADADAAAEIAAAdQAAAEgDADQgCADgEAAg");
	this.shape_25.setTransform(68,44.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C5D5D6").s().p("AiECuIAAlbIEJAAIAAFbg");
	this.shape_26.setTransform(68,61.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhvAFIAAgJIDfAAIAAAJg");
	this.shape_27.setTransform(39.5,64);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhqCNQgHAAAAgHIAAkLQgBgDADgCQACgCADAAIDVAAQADAAACACQACACAAADIAAELQAAAHgHAAgAhqCGIDVAAIAAkLIjVAAg");
	this.shape_28.setTransform(39,63.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#469F8E").s().p("AhqCKQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAkLQAAgBABgBQAAAAAAgBQABAAAAAAQABgBABAAIDVAAQABAAABABQAAAAABAAQAAABAAAAQABABAAABIAAELQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape_29.setTransform(39,63.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B73A3C").s().p("AiFAZQgDAAgDgDQgDgDAAgEIAAgdQAAgEADgDQADgDADAAIELAAQAEAAACADQADADAAAEIAAAdQAAAEgDADQgCADgEAAg");
	this.shape_30.setTransform(38.7,44.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C5D5D6").s().p("AiFCuIAAlbIEKAAIAAFbg");
	this.shape_31.setTransform(38.8,61.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#637C14").s().p("AgnAkQgFgJgBgMIAAgDQAAgTANgOQAOgOASAAQAOAAAMAJIAEADQAQAPAAAUQAAAMgGAMg");
	this.shape_32.setTransform(25.4,75.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B6E9B7").s().p("AmVBFQgPgegKghQCvg9C6gLQEBgPDzBZQgLAhgOAcg");
	this.shape_33.setTransform(53,66.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B6E9B7").s().p("AjxA4QhrhDg5hyIMrAAQg5ByhrBDQhvBGiDAAQiCAAhvhGg");
	this.shape_34.setTransform(53,85.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C1EAF8").s().p("AhFDdQi6ALivA/QgWhDAAhHQAAi7CFiEQCFiFC6AAQC8AACECFQCFCEAAC7QAABHgWBEQjzhakBAPg");
	this.shape_35.setTransform(53,37.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Al1F2QibibAAjbQAAjaCbibQCcibDZAAQDaAACcCbQCbCbAADaQAADbibCbQicCbjaAAQjZAAicibgAkJkJQhuBvAACaQAACcBuBuQBuBvCbAAQCbAABvhvQBuhuAAicQAAiahuhvQhvhuibAAQibAAhuBug");
	this.shape_36.setTransform(52.9,52.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ak/FAQiFiEAAi8QAAi6CFiFQCEiFC7AAQC7AACFCFQCFCFAAC6QAAC8iFCEQiFCFi7AAQi7AAiEiFg");
	this.shape_37.setTransform(52.9,52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulo4g, new cjs.Rectangle(0,0,105.8,105.8), null);


(lib.circulo3g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D79E73").s().p("AgDACIADgGQAAAAAAAAQAAAAABAAQAAAAAAABQAAABABABIACADIgEADg");
	this.shape.setTransform(70.9,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D79E73").s().p("AgFAAIADgHIAEAHIACgEIACAAIgCAIIgEAEg");
	this.shape_1.setTransform(65.4,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243B67").s().p("AAOAYIgFgBIgXgNIgBgBIgDgDIgJgUQgCgHAGgCQAGgCADAFIAIASIAXACQAFAAADAEQADAEAAAFQgBAFgEAEQgDADgEAAIgCgBg");
	this.shape_2.setTransform(67.5,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243B67").s().p("AgDAAIACgEQABgEABAAQABAAABAAQAAAAAAABQABAAAAABQAAAAABABIgEAOg");
	this.shape_3.setTransform(71,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243B67").s().p("AgBALIgCgOIAGgKIAAAVIgDAGg");
	this.shape_4.setTransform(70.8,22.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243B67").s().p("AgJALIgFgBIADgVIAaAAIAAAOQgBAFgKACIgIACIgFgBg");
	this.shape_5.setTransform(69.6,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243B67").s().p("AgKAOIgDgBIACgPIAAgBIAAAAQALgMAOACIgBANIgMAOIgDAAIgIAAg");
	this.shape_6.setTransform(69.7,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243B67").s().p("AgMAIIAEgTIAWgKIAAAkIgbAHIABgOg");
	this.shape_7.setTransform(69.7,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHADIABgCIADgBIAFgDQAFgBAAACQABADgJADg");
	this.shape_8.setTransform(69.8,21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202B41").s().p("AAPAjIgMgWIgDggIgFADIgDAyIgEAAIgFgZIAAghQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAIAAgBQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIAEgFIAVADIgDAqIAIAXIgBABg");
	this.shape_9.setTransform(69.9,28.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E2128").s().p("AACACIgEgBIgCgBQACgCADAAIAEABIAAADIgCABIgBgBg");
	this.shape_10.setTransform(71.2,31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1E2128").s().p("AACACIgEgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQACgCADAAIAEABIAAADIgCABIgBgBg");
	this.shape_11.setTransform(68.5,31.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D79E73").s().p("AgCAAQAAAAAAgBQABAAAAgBQABAAAAAAQAAgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_12.setTransform(68.8,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#181C23").s().p("AAAAKQgEAAgDgDQgDgEABgDQAAgEADgDQAEgDADAAQAKABAAAKQgBAEgDADQgDADgEAAIAAgBg");
	this.shape_13.setTransform(70.7,19);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#243B67").s().p("AAAAKQgKgBABgJQAAgEADgDQAEgDADABQAEAAADADQADADgBAEQAAAEgDADQgDACgDAAIgBAAg");
	this.shape_14.setTransform(70.6,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#181C23").s().p("AgFALQgDgEAAgGQABgFgDgCIgCAAIgBgFQABgEAJABQANACgEAAIAHAPQAAADgCADIgGAFQgEgBgCABIgBABQgBAAgCgEg");
	this.shape_15.setTransform(69.7,19.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D79E73").s().p("AgCgFIAHABIgBAHIgHADg");
	this.shape_16.setTransform(69.8,21.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D79E73").s().p("AAAAOQgJgBgDgEQgCgDABgGQAAgGAFgEQAEgEAFABQAGAAAEAEQAEAFgBAFQAAAGgEAEQgEADgFAAIgBAAg");
	this.shape_17.setTransform(69.6,19.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#243B67").s().p("AgJAmQgFgBgCgFQgDgEACgFIABgDIATgeIgJgSQgCgGAFgDQAEgDAEAFIANAVQABAEAAACIgBABIgNAlQgBAFgEACQgDACgDAAIgDgBg");
	this.shape_18.setTransform(71,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1A1E26").s().p("AgCADIgBgHIAGAAQAAAAAAAAQAAAAAAABQAAAAAAABQABAAAAABIAAACIAAADIgEABg");
	this.shape_19.setTransform(39.8,28.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1A1E26").s().p("AgEADIADgHQAFAEAAgBQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgCAEIgCABg");
	this.shape_20.setTransform(36.7,28.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#181C23").s().p("AgEAFQgCgCgBgDQABgCACgCQACgCACAAQAIgBAAAHQAAAHgIAAQgCAAgCgCg");
	this.shape_21.setTransform(38.5,16.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#181C23").s().p("AgHAFIABgCIgBgDIAFgDQAFgCACACQAEADgBADQAAABgFABg");
	this.shape_22.setTransform(40.1,17.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#181C23").s().p("AgLAIQgCgCAAgGQAAgKAJgCQAKgDAGAJQACADAAAEQgGACgFgDQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgDAHIgBgDIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABABAAIAAAGIgHgGg");
	this.shape_23.setTransform(39.3,17.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C3355").s().p("AgEADQgHgBgDgCQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQACgDAEgBIADAAIAYAIIgBAFg");
	this.shape_24.setTransform(39.3,22.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D79E73").s().p("AAAANQgFgBgEgDQgEgEAAgFQAAgGAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAGQAAAGgEAFQgCAEgDAAIgFgCg");
	this.shape_25.setTransform(39.3,17.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAAIgCgCIADgBIACABQAAAAABAAQAAABAAAAQAAAAAAAAQABAAAAAAIADgCIAAAAIACAAIABAFIgEgCIgCAEg");
	this.shape_26.setTransform(39.2,19.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1C3355").s().p("AAAAPIgBgDQgFgLABgHQAAgFADgDIACgCQAAAAAAABQAAAAABAAQAAABAAABQABAAAAABIADALIACAMQAAAEgCABIgCABQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_27.setTransform(37.8,21.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#172C48").s().p("AgGAHIgBgVIAFAJIACAKIAIAGIAAADQgMgDgCgEg");
	this.shape_28.setTransform(38,21.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C3355").s().p("AgIAWIAAgkIACgFQADgEAHgCIADAGQACAIAAAIQAAALgCASIgFAAQgJAAgBgEg");
	this.shape_29.setTransform(38.1,21.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C3355").s().p("AABAFQAAgLgCgKIgCgHIABgBIAAABIAFABIACATIgCAYQgBACgCACg");
	this.shape_30.setTransform(40.2,21.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DFE7F2").s().p("AABACIgFgGIAJgCIgBANg");
	this.shape_31.setTransform(39.3,20);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DFE7F2").s().p("AgJASIgFgDIAAgUQgBgHAGgEIAFgDQAKAAAKACIAAAdQgCAEgKADIgFABQgEAAgEgCg");
	this.shape_32.setTransform(38.7,21.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C3355").s().p("AAAAOIgCgDIgEgZIADAAQACADACAIIAFALQABAFgCABIgCABIgDgBg");
	this.shape_33.setTransform(40.8,20.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#172C48").s().p("AACAdIgUgBIAHgbIAAgXIAegGIgCA5IgPAAg");
	this.shape_34.setTransform(38.4,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D79E73").s().p("AAAAPIgDgZIAIgEIAAAdg");
	this.shape_35.setTransform(39.6,26.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D79E73").s().p("AgFAJIADgYIAIABIgHAeg");
	this.shape_36.setTransform(38.3,24.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D79E73").s().p("AgIAIIAIgSIAJABIgNAUQgDgBgBgCg");
	this.shape_37.setTransform(37.2,27.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D79E73").s().p("AgEABIADgBIAFgDIABADQgBAEgGAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_38.setTransform(41.2,22.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D79E73").s().p("AgDAFIAAgLIAHAAIAAALQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgEgCg");
	this.shape_39.setTransform(39.2,18.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D79E73").s().p("AgOAWIgBgsIAeAFIgCAdIgFADIgEABIgCgVIgFACIgDAag");
	this.shape_40.setTransform(38.8,24.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1C3355").s().p("AgCADQgFgCgCgBIgBgCQABgDADAAIACAAIAQAGIAAAFg");
	this.shape_41.setTransform(41.6,22);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1A1E26").s().p("AgBADIgEgCIAAgDIAFgBIAGADQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgCABIgEgBg");
	this.shape_42.setTransform(40.1,28.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1A1E26").s().p("AAAADIgEgDIACgEIACAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIACAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAIgBAAIgDgCg");
	this.shape_43.setTransform(36.7,28.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D79E73").s().p("AgEACIADgCIAFgDIABADQgBAEgGAAQgEAAACgCg");
	this.shape_44.setTransform(42.9,22.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1C3355").s().p("AACAFIgQgHIAEgFIAWAFIACACQACACgCADQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBABQgEAAgEgDg");
	this.shape_45.setTransform(50,16.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D79E73").s().p("AACAFQgDAAgDgDIgBgCIACgEIAFAEQAHAFgGAAIgBAAg");
	this.shape_46.setTransform(48.7,15.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#181C23").s().p("AAIAKQABgBABAAQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAAAAAIgCABIgBAEQgDABgBgFQgBgCgDAAQgHAAgGgBIgFgEIAHgFQAIgLALADQANADAAAMQgCAIgCACIgIAHg");
	this.shape_47.setTransform(53.4,11.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1C3355").s().p("AADAHIgVgNIADgFIAdALIADADQADADgBAFQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgFAAgIgFg");
	this.shape_48.setTransform(53.6,17);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#202B41").s().p("AgBgCIABgCIACABIAAADIgDAEg");
	this.shape_49.setTransform(53.2,15.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D79E73").s().p("AgLANQgEgGAAgHQAAgHAFgFQAEgEAGAAQAHAAAFAEQAEAFAAAHQAAAGgEAEQgFAFgHAAQgCACgCAAQgEAAgDgEg");
	this.shape_50.setTransform(53.5,11.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCAAIgFADIABgHIACAAIAAAAIAEACQACABADgDIADACIgBACIgHAFg");
	this.shape_51.setTransform(53.7,14);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1C3355").s().p("AgEAUQgEgBABgGIADgPIACgNQACgDABgBIADACQADADABAGQABAJgGAOQgDAFgDAAIgBAAg");
	this.shape_52.setTransform(55.3,16);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#172C48").s().p("AgJANIAJgGIAKgYQAAATgCAGQgCAGgPAEg");
	this.shape_53.setTransform(55.1,16.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1C3355").s().p("AgHAgQgDgWABgOQAAgKACgJIADgIQAOAEABAKIAAAsQgBAFgKAAIgHAAg");
	this.shape_54.setTransform(55,16.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#202B41").s().p("AgBADIAAgFIACgBIABADIgCAEg");
	this.shape_55.setTransform(53.4,14.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#202B41").s().p("AgGgRIAJgBIAEAdIgFAIg");
	this.shape_56.setTransform(54.8,20.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#202B41").s().p("AgCATIgDgBIAAgkIALAFQgDAegBABIgCABIgCAAg");
	this.shape_57.setTransform(53.2,23.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1C3355").s().p("AgCAZIgDgdIADgXIAEgCIABAAIADABIgFAIQgCAMABAOIAAAYQgBgCgBgDg");
	this.shape_58.setTransform(52.6,16.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#202B41").s().p("AgKgLIAKgCQALAUgBADQgBACgEACg");
	this.shape_59.setTransform(56.1,23.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D79E73").s().p("AAAAGQgDgDAAgDIAAgEIADgCIADAHQACAGgCAAIgDgBg");
	this.shape_60.setTransform(51.7,15.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DFE7F2").s().p("AgFgHIALACIgKANg");
	this.shape_61.setTransform(53.6,14.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D79E73").s().p("AgEAGIAAgNIAJAAIAAANQgDACgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_62.setTransform(53.7,13.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#243B67").s().p("AgDAYQgIgCgFgDIgCgDIAAgkIAGgDQAJgDAIAEIAHADQAHAGAAAIIAAAYQgHAGgJAAIgGgBg");
	this.shape_63.setTransform(54.3,16.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1C3355").s().p("AgHARQgDgCACgGIAIgNQAEgKACgDIAEAAIgJAfQgCAEgDAAIgDgBg");
	this.shape_64.setTransform(51.6,15.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#202B41").s().p("AAIAcIgEggIgFgCIgDAaIgFgBIgHgEIgCgkIAlgGIAAA2IgJABIgCAAg");
	this.shape_65.setTransform(54.3,19.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1A1E26").s().p("AgFAEQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBABAAIAIgEIAGABIAAAEQgHACgDAAIgDAAg");
	this.shape_66.setTransform(52.6,25.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1A1E26").s().p("AgEAGQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQACgDAAgCQABgBAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIADABQACADgBACQAAACgEACIgEABIgBAAg");
	this.shape_67.setTransform(56.8,25.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A8A8A8").s().p("Ag3ADQgYgBAAgCQAAgBAYgBQAYgCAfAAQAgAAAYACQAYABAAABQAAACgYABQgXACghAAQggAAgXgCg");
	this.shape_68.setTransform(54.3,25.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CCCCCC").s().p("AhZAIIAKgPICfAAIAKAPg");
	this.shape_69.setTransform(54.3,25.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CCCCCC").s().p("AhBAHIAAgNIB6AAIAJANg");
	this.shape_70.setTransform(69.9,31.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CCCCCC").s().p("AhBAHIAJgNIB6AAIAAANg");
	this.shape_71.setTransform(38.6,28.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FD7E2B").s().p("AgPARIAFgHQAEAFAGAAQAFgBABgFQAAgGgLAAIAAgGQAJAAAAgGQAAgFgEAAQgEAAgEAEIgGgGQAHgGAHAAQAPAAAAANQAAAGgIADIAAAAQAJACAAAIQAAANgQAAQgKAAgFgGg");
	this.shape_72.setTransform(69.6,36.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2F74FB").s().p("AgOAXIAAgHQASgRAAgGQAAgHgGABQgEgBgDAFIgGgGQAGgGAJAAQAFAAAEADQAEAEAAAGQAAAIgNAPIAQgBIAAAJg");
	this.shape_73.setTransform(39,34.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FC4448").s().p("AgNAWIAAgIIAKAAIAAgZIgJAAIAAgGQAGgBAFgDIAHAAIAAAjIAIAAIAAAIg");
	this.shape_74.setTransform(54.3,30.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2F2F2").s().p("AjeBCIAAhlICFAAIAAgfICzAAIAAA7ICFAAIAABJg");
	this.shape_75.setTransform(54.3,33.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#7C4C31").s().p("AhaAoQgIAAgFgFQgFgGAAgIIAAgqQAAgHAFgGQAFgFAIAAIC1AAQAHAAAGAFQAFAGAAAHIAAAqQAAAIgFAGQgGAFgHAAg");
	this.shape_76.setTransform(72.2,74.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#7C4C31").s().p("AhaAoQgIAAgFgFQgFgGAAgIIAAgqQAAgHAFgGQAFgFAIAAIC1AAQAHAAAGAFQAFAGAAAHIAAAqQAAAIgFAGQgGAFgHAAg");
	this.shape_77.setTransform(36.5,74.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#39A2A5").s().p("AghB7QgHAAgGgEQgFgGAAgHIAAjTQAAgIAFgFQAGgEAHAAIBDAAQAIAAAFAEQAFAFAAAIIAADTQAAAHgFAGQgFAEgIAAg");
	this.shape_78.setTransform(54.4,64.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D25558").s().p("AkfBPIBIieIG0AAIBDCeg");
	this.shape_79.setTransform(54.2,36.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#66C2B0").s().p("AiuB7QgJAAgGgFQgGgHAAgIIAAjNQAAgJAGgFQAGgHAJABIFdAAQAJgBAGAHQAGAFAAAJIAADNQAAAIgGAHQgGAFgJAAg");
	this.shape_80.setTransform(54.4,64.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B73A3C").s().p("AgMAcQgGgFAAgIIAAgdQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHIAAAdQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_81.setTransform(81.1,46.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B73A3C").s().p("AgMAcQgGgFABgIIAAgdQgBgHAGgGQAFgFAHAAQAHAAAGAFQAFAGABAHIAAAdQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_82.setTransform(75.8,46.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B73A3C").s().p("AgMAcQgGgFABgIIAAgdQgBgHAGgGQAFgFAHAAQAHAAAGAFQAFAGABAHIAAAdQgBAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_83.setTransform(70.4,46.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B73A3C").s().p("AgMAcQgGgFABgIIAAgdQgBgHAGgGQAFgFAHAAQAIAAAFAFQAFAGABAHIAAAdQgBAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_84.setTransform(65,46.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B73A3C").s().p("AgMAcQgGgFABgIIAAgdQgBgHAGgGQAFgFAHAAQAIAAAFAFQAFAGABAHIAAAdQgBAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_85.setTransform(59.6,46.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B73A3C").s().p("AgMAcQgGgFAAgIIAAgdQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHIAAAdQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_86.setTransform(54.2,46.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B73A3C").s().p("AgMAcQgGgFAAgIIAAgdQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHIAAAdQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_87.setTransform(48.8,46.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B73A3C").s().p("AgMAcQgGgFAAgIIAAgdQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHIAAAdQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_88.setTransform(43.4,46.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B73A3C").s().p("AgMAcQgGgFAAgIIAAgdQAAgHAGgGQAFgFAHAAQAHAAAGAFQAGAGgBAHIAAAdQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_89.setTransform(38,46.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B73A3C").s().p("AgMAcQgGgFAAgIIAAgdQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGgBAHIAAAdQABAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_90.setTransform(32.6,46.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B73A3C").s().p("AgMAcQgGgFAAgIIAAgdQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGgBAHIAAAdQABAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_91.setTransform(27.2,46.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EAECE1").s().p("Aj8CuIAAlbIH5AAIAAFbg");
	this.shape_92.setTransform(54.4,60.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#598415").s().p("AidCAQgQgYAAgdQgBgbANgWQANgUAUgHQAFg1AgglQAhgkArAAQAaAAAXAOQAXANAPAZQAMgOAPgBQAQABALAOQALANAAATIgBALQASAOAKAWQALAXAAAbQAAAsgZAeg");
	this.shape_93.setTransform(35.1,65.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#598415").s().p("AidCAQgRgYAAgdQAAgbANgVQANgVAUgIQAFg1AggkQAhgkArAAQAZAAAYAOQAWANAQAYQAMgNAPAAQAQAAALANQALAOAAAUIgBAKQASAOAKAWQALAXAAAbQAAAqgZAgg");
	this.shape_94.setTransform(72.4,65.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B6E9B7").s().p("AmVBFQgOgcgLgjQCvg+C6gKQECgPDyBZQgMAkgNAZg");
	this.shape_95.setTransform(52.8,65.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B6E9B7").s().p("AjxA4QhshDg4hyIMrAAQg5ByhrBDQhuBGiEAAQiCAAhvhGg");
	this.shape_96.setTransform(52.8,85.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C1EAF8").s().p("AhFDdQi6AKiwA/QgVhDAAhGQAAi6CFiFQCEiFC7AAQC7AACFCFQCFCFAAC6QAABGgWBFQjzhakBAPg");
	this.shape_97.setTransform(52.8,37);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Al1F2QibibAAjbQAAjaCbibQCbibDaAAQDbAACbCbQCbCbAADaQAADbibCbQibCbjbAAQjaAAibibgAkJkJQhuBugBCbQABCcBuBuQBvBuCaAAQCcAABuhuQBuhuABicQgBibhuhuQhuhvicAAQiaAAhvBvg");
	this.shape_98.setTransform(52.9,52.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("Ak/FAQiFiEAAi8QAAi7CFiEQCEiFC7AAQC7AACFCFQCFCEAAC7QAAC8iFCEQiFCFi7AAQi7AAiEiFg");
	this.shape_99.setTransform(52.9,52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulo3g, new cjs.Rectangle(0,0,105.8,105.8), null);


(lib.circulo1g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C136").s().p("AARAcIgsgsQgFgFAFgGQAGgFAEAFIAtAsQADADAAADQAAADgDACQgCACgDAAQgEAAgCgCg");
	this.shape.setTransform(38.2,18.2,0.899,0.899);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0C136").s().p("AgfAIQgIAAABgIQgBgGAIgBIA/AAQADABACACQACACAAACQAAADgCACQgCADgDAAg");
	this.shape_1.setTransform(60.3,26.1,0.899,0.899);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0C136").s().p("AgfAIQgDAAgCgDQgDgCAAgDQAAgCADgCQACgCADgBIA/AAQADABADACQACACAAACQAAADgCACQgDADgDAAg");
	this.shape_2.setTransform(34.6,26.1,0.899,0.899);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0C136").s().p("AgEAmQgCgDgBgDIAAg/QABgDACgCQACgDACAAQAHAAABAIIAAA/QgBAIgHAAQgCAAgCgCg");
	this.shape_3.setTransform(46.9,15.3,0.899,0.899);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D79E73").s().p("AgCABIACgEIADAFIgCACg");
	this.shape_4.setTransform(42.4,31.3,0.899,0.899);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D79E73").s().p("AgCADIgBgGIABAAIABADIADgGIACAGIgEAHg");
	this.shape_5.setTransform(46.3,33,0.899,0.899);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#243B67").s().p("AgOAVQgFgBgDgFQgCgEABgFQABgGAFgBIAGgCIARgBIAGgNQADgFAGACQAFADgCAGIgGAPQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCABIgRALQgEADgDAAIgDgBg");
	this.shape_6.setTransform(44.6,34.5,0.899,0.899);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#243B67").s().p("AgCgDIAAgBIACgCQABAAACAGIgDAHg");
	this.shape_7.setTransform(42.3,35,0.899,0.899);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#243B67").s().p("AgCAGIAAgQIAFAIIgBAKIgCADg");
	this.shape_8.setTransform(42.5,35.3,0.899,0.899);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#243B67").s().p("AgCAIQgFgBgCgCIgCgCIAAgLIAUAAIADAQIgIABIgGgBg");
	this.shape_9.setTransform(43.3,36.7,0.899,0.899);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#243B67").s().p("AAAALIgJgKIgBgLIAHABQAHABAFAGIABAAIABANIgDAAg");
	this.shape_10.setTransform(43.2,35.3,0.899,0.899);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#243B67").s().p("AgKAMIAAgcIARAHIADAPIABALg");
	this.shape_11.setTransform(43.2,35.9,0.899,0.899);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCACQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAAAgBQABgDAHAEQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIgFAAIgDgBg");
	this.shape_12.setTransform(43.1,34.5,0.899,0.899);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202B41").s().p("AgNAbIAAAAIAGgTIgCggIAQgCQACABABADIABABIABABQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAIgBAaIgDAUIgDAAIgDgoIgDgBIgCAYIgJASg");
	this.shape_13.setTransform(43.1,39.2,0.899,0.899);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E2128").s().p("AgDABIAAgBIADgBIABAAIADABQABAAgGACg");
	this.shape_14.setTransform(42.2,41.7,0.899,0.899);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1E2128").s().p("AgDABIAAgBIADgBQABgBADACIgEACg");
	this.shape_15.setTransform(44.1,41.7,0.899,0.899);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D79E73").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(43.8,33.5,0.899,0.899);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#181C23").s().p("AgFAGQgCgCAAgDQAAgDACgCQACgDADAAQADgBADADQACACAAADQAAADgCACQgCADgEAAIAAAAQgCAAgDgCg");
	this.shape_17.setTransform(42.5,32.7,0.899,0.899);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#243B67").s().p("AgHABQAAgHAHgBQAHAAABAHQABAHgJABQgGAAgBgHg");
	this.shape_18.setTransform(42.6,32.8,0.899,0.899);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#181C23").s().p("AABALIgEAAQgDgBgCgCIgCgFIAGgMIAHgBQALgCgEAHIgCABQgCABABAEQAAAFgCADQgBABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgBgBg");
	this.shape_19.setTransform(43.2,33.2,0.899,0.899);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D79E73").s().p("AgCACIgBgFIAGgBIABAJg");
	this.shape_20.setTransform(43.2,34.3,0.899,0.899);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D79E73").s().p("AgHAIQgDgCAAgGQgBgDADgEQADgDAFAAQAEgBADADQAEADAAAFQAAAFgBACQgCAEgIAAIAAAAQgEAAgDgDg");
	this.shape_21.setTransform(43.3,33.3,0.899,0.899);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#243B67").s().p("AACAhQgEgBgDgEIgBgEIgKgfQAAgDABgCIAKgRQAEgFAEADQAGAEgDAFIgHANIAQAXQADAEgBAFQgBAFgEADQgDACgEAAIgDAAg");
	this.shape_22.setTransform(42.4,33.8,0.899,0.899);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D79E73").s().p("AgBAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_23.setTransform(51.3,38.5,0.899,0.899);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1E2128").s().p("AAAAGQAAgIgIABQgGABAEgFQADgFAHAAQAHgBAEAFQADAEgBAEQgBAFgFAEIgFABQgCgBAAgFg");
	this.shape_24.setTransform(51.4,38,0.899,0.899);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#243B67").s().p("AgFACIADgCQAHgDABACQAAACgGACg");
	this.shape_25.setTransform(51.7,39.3,0.899,0.899);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#243B67").s().p("AgCAAIABgCQABgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIgCAKg");
	this.shape_26.setTransform(52.5,39.8,0.899,0.899);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#243B67").s().p("AgBAJIgBgLIAFgIIAAARIgDAEg");
	this.shape_27.setTransform(52.4,40.1,0.899,0.899);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C3355").s().p("AgCAHIAAgBQAFgIABgFIgCAPg");
	this.shape_28.setTransform(50.8,41.6,0.899,0.899);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#243B67").s().p("AgHAJIgEgBIADgQIAUAAIAAAKQgBAEgIACIgGABIgEAAg");
	this.shape_29.setTransform(51.6,41.5,0.899,0.899);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D79E73").s().p("AgBAAQAAgBAAAAQABgBAAAAQAAAAAAAAQAAAAABAAIABADIgCACg");
	this.shape_30.setTransform(49.1,41.3,0.899,0.899);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1C3355").s().p("AgBALIgCgCIACgVQABABACAKIABAKQABABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgBAAIgCgCg");
	this.shape_31.setTransform(52.8,40.3,0.899,0.899);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#243B67").s().p("AgGALIgEgBIgCgBIACgFIACgEIABgCIAAAAQAIgJAMABIgBAKIgJALIgEAAIgFAAg");
	this.shape_32.setTransform(51.5,40.1,0.899,0.899);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#243B67").s().p("AABAMQgCAAgFgEIgDgEIACgCIAHAEIAFgNIACgFQAEAEgBAGIAAACQgCAJgDACQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAAAAAIgCgBg");
	this.shape_33.setTransform(50,41.2,0.899,0.899);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#243B67").s().p("AgLgBIACgFIACgCIAAAAIATgIIAAAcIgXAFIAAAAg");
	this.shape_34.setTransform(51.6,40.7,0.899,0.899);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#202B41").s().p("AALAcIgJgRIgCgZIgEACIgCAnIgBAAIgCAAIgEgUIAAgiIAXAEIgCAgIAGASIgBABg");
	this.shape_35.setTransform(51.7,43.9,0.899,0.899);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D79E73").s().p("AgCgDIAFAAIAAAFIgFADg");
	this.shape_36.setTransform(51.7,39.1,0.899,0.899);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1E2128").s().p("AACACIgDgBIgCgBIAEgBIADABIAAABIgCABIAAAAg");
	this.shape_37.setTransform(52.6,46.4,0.899,0.899);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1E2128").s().p("AABACIgCgBIgCgBIAEgBIADABIAAABIgCABIgBAAg");
	this.shape_38.setTransform(50.7,46.4,0.899,0.899);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D79E73").s().p("AgHAJQgDgEAAgFQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEQAAAEgDAEQgDADgFAAIgDABQgCAAgCgDg");
	this.shape_39.setTransform(51.6,38.1,0.899,0.899);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#222330").s().p("AgSALQgHAAgBgGQgBgHAHgBIAmgHQAHgBACAHQABAGgHACIgmAHg");
	this.shape_40.setTransform(49,36.5,0.899,0.899);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#222330").s().p("AgSALQgGAAgBgGQgBgGAHgCIAkgHQAEAAACABQADACAAADQACAGgIACIgkAHg");
	this.shape_41.setTransform(49.2,38.9,0.899,0.899);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#222330").s().p("AgaAFQgBgHAHgBIAmgHQAHgCACAIQABAGgHABIgmAIIgCAAQgGAAgBgGg");
	this.shape_42.setTransform(49.4,41.2,0.899,0.899);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#222330").s().p("AgSALQgHAAgBgGQAAgDABgCQACgCADgBIAmgHQADgBADACQACACABADQABAGgHACIgmAHg");
	this.shape_43.setTransform(49.5,43,0.899,0.899);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#222330").s().p("AAEBCQgFAAgBgHIgJh0QAAgDACgCQACgDADAAQAHgBAAAIIAJB0QABAHgIABg");
	this.shape_44.setTransform(51.1,39.7,0.899,0.899);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#222330").s().p("AAEBCQgFAAgBgHIgJh0QAAgHAHgBQAHAAABAHIAIB0QABAHgIABg");
	this.shape_45.setTransform(47.6,40.4,0.899,0.899);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7F96F9").s().p("AgkABIgBgGQAmAKAlgKIgBAGQgSAFgTAAQgSAAgSgFg");
	this.shape_46.setTransform(47.2,38.2,0.899,0.899);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ACC0EB").s().p("AgkAAIgBgFIgBgSQAlALAogKIgBARIgBAGQgGAYgfgBQgeAAgGgYg");
	this.shape_47.setTransform(47.2,38.2,0.899,0.899);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F0C136").s().p("AgyA0QgWgWAAgeQAAgdAWgVQAVgWAdAAQAeAAAWAWQAVAVgBAdQABAegVAWQgWAVgeAAQgdAAgVgVg");
	this.shape_48.setTransform(47.1,27.3,0.899,0.899);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DA9C2C").s().p("AgRARQAAgagFgHIANAIQAOAHALgBQAPgBgSALQgOAJgMAAIgEAAg");
	this.shape_49.setTransform(45.4,34.1,0.899,0.899);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F0C136").s().p("AgkAqQgEgJAAgVIAAgFQAAgagFgGIAxgjIAYALQAXANgGAGQgJAJABAiIAAAEQAAATgFAJQgJAQgZAAQgbAAgHgTg");
	this.shape_50.setTransform(47.4,34.9,0.899,0.899);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7F96F9").s().p("AgbABQgBgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQgBAbgcAAQgbAAAAgbg");
	this.shape_51.setTransform(47.2,38.6,0.899,0.899);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgqAeQglgLAAgTQAAgFAEgFQAIgLAVgGQAVgHAZAAQAhAAAXAKQAYALAAANQAAAPgYAKQgXAKghAAQgXAAgTgFg");
	this.shape_52.setTransform(47,40,0.899,0.899);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#617DC4").s().p("AgRgFIAAgMIAEAAIAFgFIAaAhIAAAMQgigLgBgRg");
	this.shape_53.setTransform(41.4,41.7,0.899,0.899);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7F96F9").s().p("AhPAFIAAgKICfAAIAAALg");
	this.shape_54.setTransform(47,40.7,0.899,0.899);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7F96F9").s().p("AgqAeQgkgLgBgSIAAgBQAAgFAEgFIAGgGQAWgSAvAAQAaAAAVAHQAUAGAJALQAEAFAAAFIAAACQgCAOgXAJQgXAKggAAQgXAAgTgFg");
	this.shape_55.setTransform(47,41.2,0.899,0.899);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#181C23").s().p("AgKAGQgCgCABgEQAAgHAHgCQAHgCAFAGQACADADABIgEACQgJgBgBADQAAABgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgBgDIgBAAIgCAAQAAABAAAAQAAABABAAQAAAAAAABQABAAABAAIAAAFIgGgFg");
	this.shape_56.setTransform(55.6,31,0.899,0.899);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1C3355").s().p("AgCADQgGgBgDgCQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQACgDADAAIACAAIASAFIAAAFg");
	this.shape_57.setTransform(55.5,34.6,0.899,0.899);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#202B41").s().p("AgBAAIABgBIAAgBIACABIgBAEg");
	this.shape_58.setTransform(55.7,33,0.899,0.899);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D79E73").s().p("AAAAKQgDAAgDgDQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgCAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgBg");
	this.shape_59.setTransform(55.6,31.2,0.899,0.899);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgDAAIgBgBIACgCIADACIACgBIAAgBIACAAIAAAFIgDgCIgBAEg");
	this.shape_60.setTransform(55.4,32.3,0.899,0.899);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1C3355").s().p("AAAAMIgBgCQgEgJABgGIACgFIACgCQACABACAKIABAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBAAIgDgBg");
	this.shape_61.setTransform(54.5,33.5,0.899,0.899);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#172C48").s().p("AgFAGIgBgQIAEAHIACAIIAHADIgBADQgJgCgCgDg");
	this.shape_62.setTransform(54.6,34,0.899,0.899);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1C3355").s().p("AgGARIAAgcIACgEQACgDAFgCIACAFIACAMIgCAXIgEABQgGAAgBgEg");
	this.shape_63.setTransform(54.7,34,0.899,0.899);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#202B41").s().p("AgBAAIABgCIABABIAAADIgBABg");
	this.shape_64.setTransform(55.6,32.5,0.899,0.899);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#202B41").s().p("AgEAIIADgTIAGAAIgFAXg");
	this.shape_65.setTransform(54.8,36.2,0.899,0.899);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#202B41").s().p("AAAAMIgDgUIAHgDIAAAXIgEAAIAAAAg");
	this.shape_66.setTransform(55.7,37.7,0.899,0.899);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1C3355").s().p("AABADQAAgHgBgIIgDgFIACgBIABAAIACABIABAPIgBASQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAg");
	this.shape_67.setTransform(56.1,33.8,0.899,0.899);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#202B41").s().p("AgGAGIAGgOIAHABIgKAQIgDgDg");
	this.shape_68.setTransform(54.1,38,0.899,0.899);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D79E73").s().p("AgDABIACgBIAEgCIABACQgBADgEAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_69.setTransform(56.8,34.8,0.899,0.899);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DFE7F2").s().p("AgDgDIAHgBIgBAJg");
	this.shape_70.setTransform(55.5,32.8,0.899,0.899);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D79E73").s().p("AgCAEIAAgIIAFAAIAAAIIgCABIgDgBg");
	this.shape_71.setTransform(55.4,31.9,0.899,0.899);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#243B67").s().p("AgHAPIgEgCIAAgPQgBgGAFgDIAEgDQAKgEAFAGIAAAWQgBAEgIACIgEAAIgGgBg");
	this.shape_72.setTransform(55.1,33.5,0.899,0.899);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#1C3355").s().p("AgBALIgCgCIACgUIABAAIACAJIABAKQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAIgBAAIgCgBg");
	this.shape_73.setTransform(56.3,33.3,0.899,0.899);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#202B41").s().p("AgLARIAAgiIAXAEIgBAXIgEACIgEABIgBgRIgEACIgCAUIgBAAIgGgBg");
	this.shape_74.setTransform(55.1,35.7,0.899,0.899);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F0C136").s().p("AgCgDIANgGIgIAOIgNAFg");
	this.shape_75.setTransform(57.4,34.2,0.899,0.899);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1C3355").s().p("AgDADQgFgBgDgCIgBgBQABgDADAAIADAAIASAFIAAAFg");
	this.shape_76.setTransform(56.5,34.1,0.899,0.899);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#1A1E26").s().p("AgBACIgDgBIAAgCIAEgBIAEADQABAAAAAAQAAAAAAAAQAAABAAAAQgBAAgBABIgBAAIgDgBg");
	this.shape_77.setTransform(56.1,38.9,0.899,0.899);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1A1E26").s().p("AAAADQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIACgDIABAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIABADQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAAAIgBAAIgCgBg");
	this.shape_78.setTransform(53.7,38.9,0.899,0.899);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D79E73").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_79.setTransform(37,34.9,0.899,0.899);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1E2128").s().p("AgFAKQgFgDgBgFQgBgEADgEQADgFAHABQAHAAAFAGIgDADQgDgBgCADIgDAFQAAAEgCACg");
	this.shape_80.setTransform(36.8,34.4,0.899,0.899);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#243B67").s().p("AgBACQgBgBgBAAQgBgBAAAAQgBAAAAAAQAAAAAAgBQABgDAHAEQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIgFAAIgCgBg");
	this.shape_81.setTransform(36.5,35.7,0.899,0.899);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#243B67").s().p("AgCgEIAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAADAGIgEAHg");
	this.shape_82.setTransform(35.7,36.2,0.899,0.899);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#243B67").s().p("AgCAGIAAgQIAFAIIgBALIgCACg");
	this.shape_83.setTransform(35.9,36.5,0.899,0.899);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#1C3355").s().p("AgCgHQAAAFAEAIIABAAIgEACg");
	this.shape_84.setTransform(37.5,38,0.899,0.899);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#243B67").s().p("AgCAIQgFgBgDgCIgBgCIAAgLIAUAAIADAQQgEABgEAAIgGgBg");
	this.shape_85.setTransform(36.7,37.9,0.899,0.899);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1C3355").s().p("AgBANQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBIABgKQABgKADgBIABAWQgCADgCAAIgBAAg");
	this.shape_86.setTransform(35.4,36.7,0.899,0.899);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#243B67").s().p("AgCALIgJgLIgBgKIAHABQAHABAFAGIABABIABABIACAEIACAEIgCABQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAg");
	this.shape_87.setTransform(36.8,36.5,0.899,0.899);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#243B67").s().p("AgEALQgDgEgBgHIgBgCQgBgFAEgFIACAFIAEANIAIgEIACACQgGAIgEABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_88.setTransform(38.2,37.6,0.899,0.899);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#243B67").s().p("AAMARIgXgFIAAgcIATAIIAAABIABABIADAFIAAASg");
	this.shape_89.setTransform(36.7,37.1,0.899,0.899);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#202B41").s().p("AgMAcIgBAAIAGgTIgCggIAXgEIAAAiIgEAUIgDAAIgCgoIgFgBIgBAZIgJARg");
	this.shape_90.setTransform(36.5,40.3,0.899,0.899);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D79E73").s().p("AgCACIAAgFIAFAAIAAAIg");
	this.shape_91.setTransform(36.5,35.5,0.899,0.899);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D79E73").s().p("AgBAAIACgCQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABIgDACg");
	this.shape_92.setTransform(39.2,37.8,0.899,0.899);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F0C136").s().p("AgHAIIAEgTIALAEIgEATg");
	this.shape_93.setTransform(38.7,37.2,0.899,0.899);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1E2128").s().p("AgDABIAAgCIADAAQADAAABABIgEACg");
	this.shape_94.setTransform(35.6,42.8,0.899,0.899);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1E2128").s().p("AgDABIAAgCIADAAQADAAABABQABAAgFACg");
	this.shape_95.setTransform(37.5,42.8,0.899,0.899);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D79E73").s().p("AAAAKQgDAAgDgDQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAFgCADQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgEgBg");
	this.shape_96.setTransform(36.8,34.6,0.899,0.899);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1A1E26").s().p("AgCACIAAgFIAFAAIAAACIAAAEIgDABg");
	this.shape_97.setTransform(38.5,40.6,0.899,0.899);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1A1E26").s().p("AgDACIADgFQAAABABAAQAAABABAAQABAAAAAAQAAAAAAAAIAAABIgBADIgCABg");
	this.shape_98.setTransform(36.3,40.5,0.899,0.899);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#181C23").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_99.setTransform(37.6,32,0.899,0.899);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#181C23").s().p("AgFAEIABgCIgBgCIAEgCQAEgCABACQADACgBACQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_100.setTransform(38.7,32.9,0.899,0.899);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#181C23").s().p("AgJAHQgBgDAAgEQAAgHAHgCQAIgCAEAHQACACAAADQgFABgEgCQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgCAGIgBgDIgBAAIgBAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAAAFg");
	this.shape_101.setTransform(38.1,32.9,0.899,0.899);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1C3355").s().p("AgCADQgGgBgDgCIgBgBQACgCADgBIACgBIASAHIAAADg");
	this.shape_102.setTransform(38.1,36.5,0.899,0.899);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D79E73").s().p("AAAAKQgKgCAAgIQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFQAAAFgDAEQgCADgCAAIgEgCg");
	this.shape_103.setTransform(38.1,33,0.899,0.899);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgDAAIgBgBIACgBIADACIACgCIAAgBIACABIAAAEIgDgCIgBADIgEgDg");
	this.shape_104.setTransform(38.1,34.2,0.899,0.899);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1C3355").s().p("AAAAMIgBgCQgEgJABgGIACgFIACgCQACABACAKIABAKQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgBAAIgDgBg");
	this.shape_105.setTransform(37.1,35.4,0.899,0.899);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#172C48").s().p("AgFAGIAAgQIAFAOIAGAFIAAACQgJgCgCgDg");
	this.shape_106.setTransform(37.3,35.9,0.899,0.899);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1C3355").s().p("AgGARIAAgcIACgEQACgDAFgCIACAFIACAMIgCAXIgEABQgGAAgBgEg");
	this.shape_107.setTransform(37.3,35.9,0.899,0.899);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1C3355").s().p("AABADQAAgIgBgHIgDgGIACAAIAAAAIAEABIABAPIgBASIgDADg");
	this.shape_108.setTransform(38.7,35.7,0.899,0.899);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DFE7F2").s().p("AABACIgEgEIAHgCIAAAFIgBAEg");
	this.shape_109.setTransform(38.2,34.6,0.899,0.899);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DFE7F2").s().p("AgHAOIgEgCIAAgPQgBgGAFgDIAEgCQAHgBAIACIAAAWQgBAEgIACIgDABQgEAAgDgCg");
	this.shape_110.setTransform(37.8,35.5,0.899,0.899);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1C3355").s().p("AgBALIgCgCIACgUIABAAIACAKIABAJQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAIgBAAIgCgBg");
	this.shape_111.setTransform(39,35.1,0.899,0.899);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#172C48").s().p("AgHAKIgEgBIAAgHIAHgLIAQgBIgBASQAAACgJABIgCAAIgHgBg");
	this.shape_112.setTransform(37.8,37.2,0.899,0.899);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D79E73").s().p("AAAAMIgDgUIAHgDIAAAXg");
	this.shape_113.setTransform(38.4,39.5,0.899,0.899);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D79E73").s().p("AgEAHIADgSIAGAAIgFAXg");
	this.shape_114.setTransform(37.4,38.2,0.899,0.899);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D79E73").s().p("AgGAGIAGgOIAHABIgKAQQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_115.setTransform(36.7,39.9,0.899,0.899);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D79E73").s().p("AgBADQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIACgBIAEgCIABACQgBADgDAAIgBAAg");
	this.shape_116.setTransform(39.5,36.7,0.899,0.899);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D79E73").s().p("AgCAEIAAgIIAFAAIAAAIIgCABIgDgBg");
	this.shape_117.setTransform(38.1,33.8,0.899,0.899);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D79E73").s().p("AgLARIAAgiIAXAEIgBAXIgEACIgEABIgBgRIgEACIgCAUg");
	this.shape_118.setTransform(37.8,37.6,0.899,0.899);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F0C136").s().p("AgCgDIANgGIgIAOIgNAFg");
	this.shape_119.setTransform(40.1,36.1,0.899,0.899);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1C3355").s().p("AgDADQgJgCAAgCQACgEAFABIASAGIAAADg");
	this.shape_120.setTransform(39.2,36,0.899,0.899);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1A1E26").s().p("AgEABIAAgCIAEAAIAEACIABAAIgCABg");
	this.shape_121.setTransform(38.7,40.8,0.899,0.899);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1A1E26").s().p("AAAADIgDgDIACgDIABAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABADQABABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgBAAIgCgBg");
	this.shape_122.setTransform(36.3,40.8,0.899,0.899);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7C4C31").s().p("AhTAlQgHAAgFgFQgFgFAAgHIAAgnQAAgHAFgFQAFgFAHAAICnAAQAHAAAFAFQAFAFAAAHIAAAnQAAAHgFAFQgFAFgHAAg");
	this.shape_123.setTransform(62.2,73.6,0.899,0.899);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#598415").s().p("AAAAgQgNAAgJgKQgJgKAAgMQABgNAJgJQAJgJANAAQANAAAJAKQAJAJAAAMQgBAOgJAJQgJAJgMAAIgBAAg");
	this.shape_124.setTransform(56.7,66.8,0.899,0.899);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#598415").s().p("AgMANQgGgFAAgIQABgHAFgFQAGgGAGABQAIAAAFAFQAGAGAAAGQgBAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_125.setTransform(59.1,64.8,0.899,0.899);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#598415").s().p("AAAAbQgLAAgHgIQgIgIAAgLQABgKAHgIQAJgIAJAAQALABAIAIQAIAIAAAKQAAALgJAHQgHAIgKAAIgBAAg");
	this.shape_126.setTransform(60.2,67.2,0.899,0.899);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7EAE4E").s().p("AgFAlQgGAAAAgFIAChAQAAgEAFAAIAKAAQAGAAAAAEIgBBBQgCAEgEAAg");
	this.shape_127.setTransform(58.3,69.2,0.899,0.899);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#598415").s().p("AAAAfQgMAAgJgJQgKgJABgNQAAgMAJgJQAKgKAMABQANAAAJAJQAJAKgBAMQAAANgJAJQgJAIgMAAIgBAAg");
	this.shape_128.setTransform(62.8,67.3,0.899,0.899);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#598415").s().p("AgRASQgHgIAAgKQAAgKAIgHQAHgHAJAAQALAAAHAIQAHAHAAAKQAAAKgIAHQgHAHgKAAQgKAAgHgHg");
	this.shape_129.setTransform(65.7,63.2,0.899,0.899);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#598415").s().p("AAAArQgRgBgNgMQgMgNAAgRQABgRAMgNQANgMARAAQASABAMAMQAMANAAARQgBASgMAMQgMAMgRAAIgBAAg");
	this.shape_130.setTransform(66.6,66.1,0.899,0.899);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7EAE4E").s().p("AgIAzQgGgCAAgFIABhXQABgHAGAAIAPABQABAAAAAAQABAAABABQAAAAABAAQAAAAABABQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAIgBBXQAAAHgHAAg");
	this.shape_131.setTransform(64.7,69.1,0.899,0.899);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7C4C31").s().p("AhTAlQgHAAgFgFQgFgFAAgHIAAgnQAAgHAFgFQAFgFAHAAICnAAQAHAAAFAFQAFAFAAAHIAAAnQAAAHgFAFQgFAFgHAAg");
	this.shape_132.setTransform(32.6,73.6,0.899,0.899);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#598415").s().p("AAAAgQgNAAgJgKQgJgKAAgMQAAgNAKgJQAJgJANAAQANAAAJAKQAJAJAAAMQAAAOgKAJQgJAJgMAAIgBAAg");
	this.shape_133.setTransform(28.2,66.8,0.899,0.899);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#598415").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHABQAIAAAFAFQAGAGAAAGQgBAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_134.setTransform(30.6,64.8,0.899,0.899);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#598415").s().p("AAAAbQgKAAgIgIQgIgIAAgLQABgKAIgIQAIgIAKAAQALABAHAIQAIAIAAAKQAAALgIAHQgIAIgKAAIgBAAg");
	this.shape_135.setTransform(31.6,67.2,0.899,0.899);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7EAE4E").s().p("AgFAlQgGAAAAgFIABhAQABgEAFAAIAKAAQAFAAABAEIgCBBQAAAEgFAAg");
	this.shape_136.setTransform(29.8,69.2,0.899,0.899);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#598415").s().p("AAAArQgSAAgMgNQgMgNAAgRQAAgRANgNQANgMAQAAQASABANAMQAMANAAARQgBASgMAMQgMAMgSAAIAAAAg");
	this.shape_137.setTransform(34,65.9,0.899,0.899);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#598415").s().p("AgRASQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAIQAHAHAAAKQAAAKgIAHQgHAHgKAAQgKAAgHgHg");
	this.shape_138.setTransform(37.2,63.2,0.899,0.899);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#598415").s().p("AAAAkQgOAAgLgLQgKgLAAgOQAAgOALgLQALgKAOAAQAPABAKAKQAKALAAAOQAAAOgLALQgKAKgPAAIAAAAg");
	this.shape_139.setTransform(38.7,66.5,0.899,0.899);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7EAE4E").s().p("AgIAzQgGgCAAgFIABhXQAAgHAHAAIAPABQAGAAAAAGIgBBXQAAAHgHAAg");
	this.shape_140.setTransform(36.2,69.1,0.899,0.899);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1B2B35").s().p("Aj3ANQgHAAgGgFQgFgFAAgGIAAgJIITAAIAAAJQAAAGgFAFQgFAFgHAAg");
	this.shape_141.setTransform(47.2,50.2,0.899,0.899);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#44A18E").s().p("AgfByQgGAAgFgFQgFgFAAgGIAAjDQAAgGAFgGQAFgEAGAAIA/AAQAHAAAEAEQAFAGAAAGIAADDQAAAGgFAFQgFAFgGAAg");
	this.shape_142.setTransform(47.4,65.2,0.899,0.899);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4E758A").s().p("AkJBJIBDiRIGSAAIA+CRg");
	this.shape_143.setTransform(47.2,42.5,0.899,0.899);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#66C2B0").s().p("AigByQgIAAgGgFQgFgGAAgIIAAi9QAAgIAFgFQAGgGAIAAIFCAAQAIAAAFAGQAFAFAAAIIAAC9QAAAIgFAGQgFAFgIAAg");
	this.shape_144.setTransform(47.4,65.2,0.899,0.899);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EAECE1").s().p("AjoChIAAlBIHSAAIAAFBg");
	this.shape_145.setTransform(47.4,62.4,0.899,0.899);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#B6E9B7").s().p("AmVBGQgPgfgKghQCwg9C5gLQECgPDyBZQgJAegQAgg");
	this.shape_146.setTransform(47.3,61.9,0.899,0.899);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B6E9B7").s().p("AjxA4QhrhEg5hxIMrAAQg5BxhrBEQhvBGiDAAQiCAAhvhGg");
	this.shape_147.setTransform(47.4,79.5,0.899,0.899);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C1EAF8").s().p("AhFDdQi6ALiwA+QgVhDAAhGQAAi7CFiEQCEiFC7AAQC7AACFCFQCFCEAAC7QAABGgWBFQjzhakBAPg");
	this.shape_148.setTransform(47.4,36,0.899,0.899);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("Al1F2QibibAAjbQAAjaCbibQCcibDZAAQDbAACbCbQCbCbAADaQAADbibCbQibCbjbAAQjZAAicibgAkJkJQhvBuAACbQAACcBvBuQBuBuCbABQCbgBBvhuQBvhugBicQABibhvhuQhvhuibgBQibABhuBug");
	this.shape_149.setTransform(47.5,50.5,0.899,0.899);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("Ak/FAQiFiEAAi8QAAi7CFiEQCFiFC6AAQC8AACECFQCFCEAAC7QAAC8iFCEQiECFi8AAQi6AAiFiFg");
	this.shape_150.setTransform(47.5,50.5,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulo1g, new cjs.Rectangle(0,3,95.1,95.1), null);


(lib.circulo2g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgjD/QhqgOhAhWQhAhVAPhpQAPhpBVhBQBVhABpAPQBpAPBBBVQBABWgPBoQgPBqhVBAQhFA0hTAAQgSAAgUgDgAiCitQhIA3gNBZQgMBYA2BIQA2BIBZANQBZAMBIg2QBIg2AMhZQANhYg3hJQg2hHhZgNQgRgDgPAAQhGAAg6Asg");
	this.shape.setTransform(35.1,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C44327").s().p("AANBvIhqibIBYhCIAmAwIgsAiIBpCLg");
	this.shape_1.setTransform(53.6,72.1,0.899,0.899);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE5B34").s().p("AgdBvIhqibIBXhCIC4Ddg");
	this.shape_2.setTransform(57.4,72.1,0.899,0.899);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#83951B").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_3.setTransform(31.4,48,0.899,0.899);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#653F31").s().p("AgQAjQgFAAAAgFIgFg6QAAgGAFAAIAqAAQAGAAAAAGIgGA6QAAAFgFAAg");
	this.shape_4.setTransform(31.4,58.4,0.899,0.899);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#88695F").s().p("AgEAsQgDgCAAgDIAAhNQAAgDADgCQACgCACAAQADAAADACQABACAAADIAABNQAAADgBACQgDACgDAAQgCAAgCgCg");
	this.shape_5.setTransform(31.4,54,0.899,0.899);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C2C14").s().p("AhCAyQgHAAgFgGQgGgFAAgHIAAg+QAAgIAGgFQAFgFAHAAIAuAAIAJAGIg3AAQgEAAgEAEQgDADAAAFIAAA+QAAAFADADQAEADAEAAICSAAIAFAHg");
	this.shape_6.setTransform(46.8,30.1,0.899,0.899);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9C6C50").s().p("AhCAvQgGAAgEgFQgFgFAAgFIAAg+QAAgGAFgFQAEgEAGgBIAyAAIAiAZQAUAPAMAMQAQARAQAYg");
	this.shape_7.setTransform(46.8,30.1,0.899,0.899);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2F2F2").s().p("AgDBmIAAjLIAGAAIAADLg");
	this.shape_8.setTransform(37.4,46.8,0.899,0.899);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#572A1C").s().p("AgJAFQgFAAAAgFQAAgEAFAAIATAAQAFAAAAAEQAAAFgFAAg");
	this.shape_9.setTransform(57.8,49.7,0.899,0.899);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7086BD").s().p("AgHBIIAAiPIAHALIAAANQgDADgBAEQgBAEAEAFIABABIAABfIAHAAIAAAHg");
	this.shape_10.setTransform(60,49.7,0.899,0.899);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66C2B0").s().p("AgEgKIAJAPQgFAAgEAGg");
	this.shape_11.setTransform(60.1,44.8,0.899,0.899);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66C2B0").s().p("AgGA0IAAhnIACADQAEAFADAKIADARQACAYgCARIgCAbg");
	this.shape_12.setTransform(60.3,51.2,0.899,0.899);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgCBmIAAjLIAFAAIAADLg");
	this.shape_13.setTransform(50.5,46.8,0.899,0.899);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#785548").s().p("AiJAYQgGAAgEgEQgFgFAAgGIAAgRQAAgGAFgEQAEgFAGAAIEAAAQASAVAQAag");
	this.shape_14.setTransform(41.3,33.5,0.899,0.899);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#653F31").s().p("Ah6AUQgHABgEgFQgEgEgBgGIAAgLQABgGAEgEQAEgFAHABIDhAAIAJAIQANANAOASg");
	this.shape_15.setTransform(41.3,31.7,0.899,0.899);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#653F31").s().p("AgKB1IAAjpIAHANIAADVIANAAIgCAHg");
	this.shape_16.setTransform(58.8,51.1,0.899,0.899);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#785548").s().p("AgOBwIAAjfIAWAnIADAGQgGAAgDAFQgDAHAFAGQAFAEACAKIADARQACAZgBARQgDAwgKAng");
	this.shape_17.setTransform(59.5,51.2,0.899,0.899);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#181C23").s().p("AgPAKQgCgDAAgHQAAgLALgDQAKgDAIAKQADADADACIgEADQgGACgHAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAABgBABQAAABgBAAQAAAAgBABQAAAAgBgBIgBgDIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABABAAIAAAHIgIgGg");
	this.shape_18.setTransform(49,49.1,0.899,0.899);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1C3355").s().p("AgEAEQgJgBgDgDQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQACgDAEgBIAEAAIAbAKIAAAFg");
	this.shape_19.setTransform(48.8,54.3,0.899,0.899);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#202B41").s().p("AgBAAIAAgCIACgBIABACIAAAFg");
	this.shape_20.setTransform(49.1,51.9,0.899,0.899);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D79E73").s().p("AAAAOQgFAAgFgEQgEgEAAgGQAAgGAEgFQAFgEAFAAQAHAAAEAEQAEAFAAAGQAAAHgDAGQgDADgDAAQgDAAgDgCg");
	this.shape_21.setTransform(48.9,49.3,0.899,0.899);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAAIgCgCIADgCIACACQAAAAABAAQABAAAAABQAAAAAAAAQABAAAAAAIAEgCIAAgBIACAAIABAHIgFgDIgCAFg");
	this.shape_22.setTransform(48.7,51,0.899,0.899);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C3355").s().p("AAAARIgCgDQgFgNABgJQAAgFADgDIADgCQADABACAPIADAOQAAAGgDABIgBAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_23.setTransform(47.3,52.8,0.899,0.899);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#172C48").s().p("AgGAIIgCgNIAAgLIAFALIAEAMIAJAFIgBAFQgOgDgBgGg");
	this.shape_24.setTransform(47.5,53.5,0.899,0.899);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C3355").s().p("AgJAcIAAgqIACgFQAEgFAIgDIACAIQADAJAAAIQAAAOgCAQg");
	this.shape_25.setTransform(47.6,53.2,0.899,0.899);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#202B41").s().p("AgBAAIABgDIACABIAAAFIgCABg");
	this.shape_26.setTransform(49,51.3,0.899,0.899);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#202B41").s().p("AgEADIAAgFIAJAAIgBAFg");
	this.shape_27.setTransform(47.9,55.4,0.899,0.899);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C3355").s().p("AAAAcIABgWQABgNgCgLIgEgIIACgBIAAAAIAFACIACAVQgBAZgBADIgCAEg");
	this.shape_28.setTransform(49.7,53.2,0.899,0.899);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D79E73").s().p("AgFACIADgCIAGgDIACADQgCAFgGAAQgFgBACgCg");
	this.shape_29.setTransform(50.8,54.7,0.899,0.899);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DFE7F2").s().p("AgFgFIALgCIgBAPg");
	this.shape_30.setTransform(48.8,51.7,0.899,0.899);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D79E73").s().p("AgEAFIAAgMIAJAAIAAANQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAgEgDg");
	this.shape_31.setTransform(48.7,50.4,0.899,0.899);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#243B67").s().p("AgKAWIgHgEIAAgWQAAgIAGgFIAGgEQAOgGAJAIIAAAiQgCAFgMADIgFABQgEAAgFgCg");
	this.shape_32.setTransform(48.3,52.8,0.899,0.899);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C3355").s().p("AgCAQIgCgDIABgeIADABIADANIACAOQABAGgDABIgCAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBgBAAg");
	this.shape_33.setTransform(50,52.4,0.899,0.899);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#202B41").s().p("AADAMIgBgEIgGACIAAACIgMAAIgBgWIAjAFIgCARg");
	this.shape_34.setTransform(48.2,54.7,0.899,0.899);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0C136").s().p("AgEgFIATgJIgLAVIgSAIg");
	this.shape_35.setTransform(51.6,53.7,0.899,0.899);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1C3355").s().p("AgEAEQgJgBgDgDQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQACgDAEgBIAEAAIAbAKIAAAFg");
	this.shape_36.setTransform(50.3,53.6,0.899,0.899);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2F2F2").s().p("Ag0BqIAAjTIBpAAIAADTgAgtBjIBcAAIAAjGIhcAAg");
	this.shape_37.setTransform(50.5,46.8,0.899,0.899);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2F2F2").s().p("Ag0BqIAAjTIBpAAIAADTgAgtBjIBcAAIAAjGIhcAAg");
	this.shape_38.setTransform(37.4,46.8,0.899,0.899);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66C2B0").s().p("AgxBnIAAjNIBjAAIAADNg");
	this.shape_39.setTransform(37.4,46.7,0.899,0.899);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D25558").s().p("AitCWIAAkrIESAAIAUAiIAXAoQANAZAKAPIADAGQgGAAgDAGQgEAGAGAGQAFAFACAJIADARQACAZgBARQgDAxgLAng");
	this.shape_40.setTransform(45.2,47.9,0.899,0.899);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#83951B").s().p("AgaAbQgLgLABgQQgBgOALgLQALgLAPAAQAPAAALALQAMALgBAOQABAPgMAMQgLAKgPABQgPgBgLgKg");
	this.shape_41.setTransform(45.8,51,0.899,0.899);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#653F31").s().p("AgMAbQgEAAAAgEIgEgtQAAgEAEAAIAhAAQAEAAAAAEIgEAtQAAAEgEAAg");
	this.shape_42.setTransform(45.8,59.1,0.899,0.899);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#88695F").s().p("AgFAfIAAg8QAAgGAFAAQAGAAAAAGIAAA8QAAAFgGAAQgFAAAAgFg");
	this.shape_43.setTransform(45.7,55.6,0.899,0.899);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5C2C14").s().p("AhHAnQgHAAgDgEQgFgFAAgFIAAgxQAAgGAFgEQADgEAHAAICQAAQAFAAAFAEQAEAEAAAGIAAAxQAAAFgEAFQgFAEgFAAgAhOgeQgCADAAADIAAAxQAAAEACACQADADAEAAICQAAQADAAADgDQACgCABgEIAAgxQgBgDgCgDQgDgDgDAAIiQAAQgEAAgDADg");
	this.shape_44.setTransform(59.6,36.9,0.899,0.899);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9C6C50").s().p("AhHAkQgFAAgEgDQgDgEAAgEIAAgxQAAgFADgDQAEgDAFAAICQAAQAFAAADADQADADAAAFIAAAxQAAAEgDAEQgDADgFAAg");
	this.shape_45.setTransform(59.6,36.9,0.899,0.899);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F2F2F2").s().p("AgCBQIAAifIAFAAIAACfg");
	this.shape_46.setTransform(50.5,50,0.899,0.899);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#572A1C").s().p("AgHAEQgEAAAAgEQAAgDAEAAIAPAAQAEAAAAADQAAAEgEAAg");
	this.shape_47.setTransform(66.4,52.3,0.899,0.899);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#7086BD").s().p("AggBIIAAiQIBBAAIAACQgAgbBDIA3AAIAAiFIg3AAg");
	this.shape_48.setTransform(70.6,50.8,0.899,0.899);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#66C2B0").s().p("AgeBGIAAiLIA9AAIAACLg");
	this.shape_49.setTransform(70.6,50.9,0.899,0.899);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2F2F2").s().p("AgCBQIAAifIAFAAIAACfg");
	this.shape_50.setTransform(60.8,50,0.899,0.899);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#785548").s().p("Ai7ATQgFAAgDgEQgEgDAAgFIAAgNQAAgFAEgDQADgEAFAAIF3AAQAFAAADAEQAEADAAAFIAAANQAAAFgEADQgDAEgFAAg");
	this.shape_51.setTransform(60.7,39.6,0.899,0.899);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#653F31").s().p("AiwAQQgFAAgDgEQgDgCAAgGIAAgIQAAgEADgDQADgEAFAAIFhAAQAFAAADAEQADADAAAEIAAAIQAAAGgDACQgDAEgFAAg");
	this.shape_52.setTransform(60.7,38.2,0.899,0.899);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#653F31").s().p("AgtBqIAAjTIBbAAIAADTgAgpBlIBSAAIAAjJIhSAAg");
	this.shape_53.setTransform(70.6,52.1,0.899,0.899);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#785548").s().p("AgrBoIAAjPIBXAAIAADPg");
	this.shape_54.setTransform(70.6,52.1,0.899,0.899);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F2F2F2").s().p("AgpBTIAAilIBTAAIAAClgAgjBOIBIAAIAAibIhIAAg");
	this.shape_55.setTransform(60.7,50,0.899,0.899);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#66C2B0").s().p("AgmBQIAAifIBNAAIAACfg");
	this.shape_56.setTransform(60.8,50,0.899,0.899);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F2F2F2").s().p("AgpBTIAAilIBTAAIAAClgAgjBOIBHAAIAAibIhHAAg");
	this.shape_57.setTransform(50.5,50,0.899,0.899);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#66C2B0").s().p("AgmBQIAAifIBNAAIAACfg");
	this.shape_58.setTransform(50.5,50,0.899,0.899);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D25558").s().p("Ai4B2IAAjqIFxAAIAADqg");
	this.shape_59.setTransform(60.9,50.9,0.899,0.899);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B6E9B7").s().p("AmVBFQgPgegKghQCwg9C5gLQEBgPDzBZQgKAegPAfg");
	this.shape_60.setTransform(47.6,59.2,0.899,0.899);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B6E9B7").s().p("AjxA4QhshDg4hyIMrAAQg4ByhsBDQhuBGiEAAQiDAAhuhGg");
	this.shape_61.setTransform(47.6,76.7,0.899,0.899);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C1EAF8").s().p("AhFDdQi5ALiwA/QgWhDAAhHQAAi6CFiFQCFiFC6AAQC8AACECFQCFCFAAC6QAABHgWBEQjzhZkBAOg");
	this.shape_62.setTransform(47.6,33.3,0.899,0.899);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Al1F2QibibAAjbQAAjaCbibQCbibDaAAQDaAACcCbQCbCbAADaQAADbibCbQicCbjaAAQjaAAibibgAkJkJQhvBvABCaQgBCcBvBuQBuBuCbABQCcgBBuhuQBvhuAAicQAAiahvhvQhuhuicgBQibABhuBug");
	this.shape_63.setTransform(47.5,47.5,0.899,0.899);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ak/FAQiFiFAAi7QAAi6CFiFQCFiEC6AAQC8AACECEQCFCFAAC6QAAC7iFCFQiECFi8gBQi6ABiFiFg");
	this.shape_64.setTransform(47.5,47.5,0.899,0.899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulo2g, new cjs.Rectangle(0,0,95.1,95.1), null);


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


(lib.btnsig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.text = new cjs.Text("Continuar", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(61.1,8.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AobDDQhkAAAAhkIAAi9QAAhkBkAAIQ3AAQBkAAAABkIAAC9QAABkhkAAg");
	this.shape.setTransform(62,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,128,39);


(lib.btnnext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Continuar", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(61.1,8.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Capa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AobDDQhkAAAAhkIAAi9QAAhkBkAAIQ3AAQBkAAAABkIAAC9QAABkhkAAg");
	this.shape.setTransform(62,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,128,39);


(lib.btnSientrada = function(mode,startPosition,loop) {
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

	// Layer 3
	this.text = new cjs.Text("Sí", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 113;
	this.text.parent = this;
	this.text.setTransform(126.2,8.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52941B").s().p("AqDEEQhJAAg0gzQgzg1AAhIIAAimQAAhKAzgzQA0g0BJAAIUGAAQBJAAA0A0QA0AzAABKIAACmQAABIg0A1Qg0AzhJAAg");
	this.shape.setTransform(129,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7B7B7").s().p("AChEEIAAoHIHiAAQBJAAA0A0QA0AzAABKIAACmQAABIg0A1Qg0AzhJAAgAChEEIskAAQhJAAg0gzQgzg1AAhIIAAimQAAhKAzgzQA0g0BJAAIMkAAIAAIHg");
	this.shape_1.setTransform(129,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AqDEEQhJAAg0gzQgzg1AAhIIAAimQAAhKAzgzQA0g0BJAAIUGAAQBJAAA0A0QA0AzAABKIAACmQAABIg0A1Qg0AzhJAAg");
	this.shape_2.setTransform(129,26);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,0,164.1,91);


(lib.btnNOentrada2 = function(mode,startPosition,loop) {
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

	// Layer 3
	this.text = new cjs.Text("No", "bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 113;
	this.text.parent = this;
	this.text.setTransform(126.2,8.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AqDEEQhJAAg0gzQgzg1AAhIIAAimQAAhKAzgzQA0g0BJAAIUGAAQBJAAA0A0QA0AzAABKIAACmQAABIg0A1Qg0AzhJAAg");
	this.shape.setTransform(129,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7B7B7").s().p("AChEEIAAoHIHiAAQBJAAA0A0QA0AzAABKIAACmQAABIg0A1Qg0AzhJAAgAChEEIskAAQhJAAg0gzQgzg1AAhIIAAimQAAhKAzgzQA0g0BJAAIMkAAIAAIHg");
	this.shape_1.setTransform(129,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AqDEEQhJAAg0gzQgzg1AAhIIAAimQAAhKAzgzQA0g0BJAAIUGAAQBJAAA0A0QA0AzAABKIAACmQAABIg0A1Qg0AzhJAAg");
	this.shape_2.setTransform(129,26);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,0,164.1,91);


(lib.btncomenzar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjA+IAAh4IAbAAIAAARQAHgMAFgEQAFgEAHAAQAKAAAKAGIgJAcQgIgFgGAAQgGAAgEAEQgEADgCAKQgDAJAAAfIAAAlg");
	this.shape.setTransform(108.3,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpA1QgKgKAAgPQAAgLAFgIQAEgIAIgDQAIgEAPgDQAUgFAIgDIAAgDQAAgKgEgEQgFgEgKAAQgIAAgEAEQgFADgCAJIgbgGQAFgRALgJQALgIAVAAQATAAAJAFQAKAFAEAIQADAIAAAVIAAAkIABAYQACAHAEAJIgdAAIgDgKIgBgDQgHAIgJADQgHAEgKAAQgRAAgKgKgAAAAIQgMACgEADQgGAFAAAGQAAAHAFAFQAFAFAHAAQAHAAAHgGQAFgEACgGQABgEAAgMIAAgGIgRAFg");
	this.shape_1.setTransform(97.4,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA8IAAgYIApgzIAOgSIgMAAIgnAAIAAgaIBaAAIAAAWIgqA0IgOASIAOgBIAtAAIAAAcg");
	this.shape_2.setTransform(86.1,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVA+IAAg+QAAgTgCgFQgCgGgEgDQgEgEgGABQgHgBgGAFQgGAFgCAIQgCAHAAATIAAA3IgdAAIAAh4IAbAAIAAARQAOgUAVAAQAKAAAIAEQAIAEAEAGQAEAFACAIQABAHAAAOIAABLg");
	this.shape_3.setTransform(74.4,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoArQgLgRAAgZQAAgdAPgRQAOgRAWAAQAYAAAOASQAOASgBAjIhIAAQABAPAGAIQAHAIAJAAQAHAAAFgFQAEgEADgJIAdAGQgGARgMAJQgMAJgSAAQgcAAgOgUgAgOgeQgGAIAAANIAqAAQAAgOgGgHQgGgIgJAAQgJAAgGAIg");
	this.shape_4.setTransform(61.8,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA0A+IAAhEQAAgSgDgFQgEgIgIABQgHgBgFAFQgFAEgDAIQgCAIAAAQIAAA6IgdAAIAAhCQABgRgCgFQgBgFgEgDQgDgDgGABQgHAAgFADQgFAFgDAHQgCAHAAARIAAA7IgdAAIAAh4IAbAAIAAAQQAPgTATAAQALAAAIAFQAHAFAFAJQAHgJAIgFQAJgFAJAAQAMAAAIAGQAJAFAEAKQADAIAAARIAABNg");
	this.shape_5.setTransform(46.6,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA4QgNgIgIgOQgHgPAAgUQAAgPAHgPQAIgPANgIQANgIAPAAQAZAAAQASQAQASAAAaQAAAbgQASQgQASgZAAQgOAAgOgHgAgSgaQgIAJAAARQAAASAIAKQAIAJAKAAQALAAAIgJQAIgKAAgSQAAgRgIgJQgIgKgLAAQgKAAgIAKg");
	this.shape_6.setTransform(30.7,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguA/QgTgWAAgoQAAgoATgYQAUgXAfAAQAcAAARASQALALAFAVIgfAIQgCgNgJgIQgIgIgNABQgQAAgKAMQgLAOAAAeQAAAfALANQAKANAQAAQAMABAJgJQAJgJADgSIAeALQgHAbgQANQgPAOgZAAQgdAAgUgYg");
	this.shape_7.setTransform(16.5,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhXCQQgPgKAFgRIAhhuQACgHgCgGIghhuQgFgSAPgJQAPgKAOALICUB9QAJAHAAAKQAAALgJAHIiUB9QgIAGgHAAQgHAAgHgFg");
	this.shape_8.setTransform(136.3,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("AgjA+IAAh4IAbAAIAAARQAHgMAFgEQAFgEAHAAQAKAAAKAGIgJAcQgIgFgGAAQgGAAgEAEQgEADgCAKQgDAJAAAfIAAAlg");
	this.shape_9.setTransform(108.3,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CCFF").s().p("AgpA1QgKgKAAgPQAAgLAFgIQAEgIAIgDQAIgEAPgDQAUgFAIgDIAAgDQAAgKgEgEQgFgEgKAAQgIAAgEAEQgFADgCAJIgbgGQAFgRALgJQALgIAVAAQATAAAJAFQAKAFAEAIQADAIAAAVIAAAkIABAYQACAHAEAJIgdAAIgDgKIgBgDQgHAIgJADQgHAEgKAAQgRAAgKgKgAAAAIQgMACgEADQgGAFAAAGQAAAHAFAFQAFAFAHAAQAHAAAHgGQAFgEACgGQABgEAAgMIAAgGIgRAFg");
	this.shape_10.setTransform(97.4,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CCFF").s().p("AgwA8IAAgYIApgzIAOgSIgMAAIgnAAIAAgaIBaAAIAAAWIgqA0IgOASIAOgBIAtAAIAAAcg");
	this.shape_11.setTransform(86.1,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00CCFF").s().p("AAVA+IAAg+QAAgTgCgFQgCgGgEgDQgEgEgGABQgHgBgGAFQgGAFgCAIQgCAHAAATIAAA3IgdAAIAAh4IAbAAIAAARQAOgUAVAAQAKAAAIAEQAIAEAEAGQAEAFACAIQABAHAAAOIAABLg");
	this.shape_12.setTransform(74.4,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CCFF").s().p("AgoArQgLgRAAgZQAAgdAPgRQAOgRAWAAQAYAAAOASQAOASgBAjIhIAAQABAPAGAIQAHAIAJAAQAHAAAFgFQAEgEADgJIAdAGQgGARgMAJQgMAJgSAAQgcAAgOgUgAgOgeQgGAIAAANIAqAAQAAgOgGgHQgGgIgJAAQgJAAgGAIg");
	this.shape_13.setTransform(61.8,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00CCFF").s().p("AA0A+IAAhEQAAgSgDgFQgEgIgIABQgHgBgFAFQgFAEgDAIQgCAIAAAQIAAA6IgdAAIAAhCQABgRgCgFQgBgFgEgDQgDgDgGABQgHAAgFADQgFAFgDAHQgCAHAAARIAAA7IgdAAIAAh4IAbAAIAAAQQAPgTATAAQALAAAIAFQAHAFAFAJQAHgJAIgFQAJgFAJAAQAMAAAIAGQAJAFAEAKQADAIAAARIAABNg");
	this.shape_14.setTransform(46.6,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AgcA4QgNgIgIgOQgHgPAAgUQAAgPAHgPQAIgPANgIQANgIAPAAQAZAAAQASQAQASAAAaQAAAbgQASQgQASgZAAQgOAAgOgHgAgSgaQgIAJAAARQAAASAIAKQAIAJAKAAQALAAAIgJQAIgKAAgSQAAgRgIgJQgIgKgLAAQgKAAgIAKg");
	this.shape_15.setTransform(30.7,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("AguA/QgTgWAAgoQAAgoATgYQAUgXAfAAQAcAAARASQALALAFAVIgfAIQgCgNgJgIQgIgIgNABQgQAAgKAMQgLAOAAAeQAAAfALANQAKANAQAAQAMABAJgJQAJgJADgSIAeALQgHAbgQANQgPAOgZAAQgdAAgUgYg");
	this.shape_16.setTransform(16.5,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CCFF").s().p("AhXCQQgPgKAFgRIAhhuQACgHgCgGIghhuQgFgSAPgJQAPgKAOALICUB9QAJAHAAAKQAAALgJAHIiUB9QgIAGgHAAQgHAAgHgFg");
	this.shape_17.setTransform(136.3,15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ApPCcQg8AAgpguQgqguAAhAQAAhAAqgtQApguA8AAISfAAQA8AAApAuQApAtAABAQAABAgpAuQgpAug8AAg");
	this.shape_18.setTransform(73.5,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,0.9,139.3,30.5);


(lib.btn_siguiente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgaAwIAAhdIAUAAIAAAOQAFgKAEgDQAEgDAGAAQAHAAAHAEIgHAXQgFgEgFgBQgFAAgDADQgDADgBAIQgCAHAAAXIAAAdg");
	this.shape.setTransform(102.6,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AggApQgHgIAAgLQAAgJADgGQAEgGAGgDQAGgDAMgCQAPgDAGgDIAAgCQAAgIgEgDQgDgDgHAAQgHAAgDACQgDADgDAHIgUgEQAEgOAIgGQAIgHARAAQAPAAAGAEQAIAEADAGQADAGAAAQIAAAcIABASQABAHADAGIgXAAIgBgHIgBgEQgGAHgHADQgFADgIAAQgNAAgIgIgAAAAFQgJADgDACQgEAEgBAFQABAFADAEQAEADAFABQAFgBAGgEQAEgDABgFIABgMIAAgFIgNADg");
	this.shape_1.setTransform(94.1,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgZAsQgHgEgDgIQgDgHAAgNIAAg7IAXAAIAAAsQAAASABAFQABAEADACQAEADAFAAQAFAAAEgDQAFgEABgFQACgFAAgTIAAgoIAXAAIAABdIgVAAIAAgOQgFAIgHAEQgHAEgJAAQgIAAgHgEg");
	this.shape_2.setTransform(84.5,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AARAwIAAgwQAAgOgCgFQgBgEgEgDQgDgCgFAAQgEAAgFADQgFAEgCAGQgBAGAAAPIAAAqIgXAAIAAhdIAVAAIAAAOQALgQAQAAQAHAAAHADQAGADADAEQAEAFABAGQABAGAAAKIAAA6g");
	this.shape_3.setTransform(74.5,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgKBBIAAhdIAVAAIAABdgAgKgpIAAgXIAVAAIAAAXg");
	this.shape_4.setTransform(67.1,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AgDA+QgFgCgCgEQgCgDgBgGIgBgSIAAgnIgKAAIAAgUIAKAAIAAgTIAWgPIAAAiIAPAAIAAAUIgPAAIAAAkIAAAOIACADIAEABQADAAAGgCIACATQgIAEgKgBQgGAAgEgCg");
	this.shape_5.setTransform(62.1,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AARAwIAAgwQAAgOgCgFQgBgEgEgDQgDgCgFAAQgEAAgFADQgFAEgCAGQgCAGAAAPIAAAqIgWAAIAAhdIAVAAIAAAOQALgQAQAAQAIAAAGADQAGADAEAEQADAFAAAGQACAGAAAKIAAA6g");
	this.shape_6.setTransform(54.3,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgVArQgLgFgGgMQgFgLAAgQQAAgMAFgLQAGgMAKgGQALgGALAAQAUAAAMAOQAMANAAAVQAAAVgNAOQgMAOgTAAQgLAAgKgGgAgOgVQgGAIAAANQAAAOAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgOQAAgNgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_7.setTransform(44.2,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AgjAyQgPgSAAgeQAAggAPgSQAPgSAYAAQAVAAAOAPQAIAIAEAPIgYAHQgCgKgGgHQgHgFgKgBQgMAAgIALQgIALAAAWQAAAYAIAKQAIALAMAAQAJAAAHgHQAHgGADgPIAXAIQgFAVgMALQgNAKgTAAQgWAAgPgRg");
	this.shape_8.setTransform(33.2,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AhDBwQgMgIAEgNIAahWQABgFgBgEIgahWQgEgNAMgIQALgHALAIIBzBhQAHAFAAAIQAAAJgHAFIhzBhQgGAEgGAAQgFAAgFgDg");
	this.shape_9.setTransform(126,16.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgaAwIAAhdIAUAAIAAAOQAFgKAEgDQAEgDAGAAQAHAAAHAEIgHAXQgFgEgFgBQgFAAgDADQgDADgBAIQgCAHAAAXIAAAdg");
	this.shape_10.setTransform(102.6,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AggApQgHgIAAgLQAAgJADgGQAEgGAGgDQAGgDAMgCQAPgDAGgDIAAgCQAAgIgEgDQgDgDgHAAQgHAAgDACQgDADgDAHIgUgEQAEgOAIgGQAIgHARAAQAPAAAGAEQAIAEADAGQADAGAAAQIAAAcIABASQABAHADAGIgXAAIgBgHIgBgEQgGAHgHADQgFADgIAAQgNAAgIgIgAAAAFQgJADgDACQgEAEgBAFQABAFADAEQAEADAFABQAFgBAGgEQAEgDABgFIABgMIAAgFIgNADg");
	this.shape_11.setTransform(94.1,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgZAsQgHgEgDgIQgDgHAAgNIAAg7IAXAAIAAAsQAAASABAFQABAEADACQAEADAFAAQAFAAAEgDQAFgEABgFQACgFAAgTIAAgoIAXAAIAABdIgVAAIAAgOQgFAIgHAEQgHAEgJAAQgIAAgHgEg");
	this.shape_12.setTransform(84.5,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AARAwIAAgwQAAgOgCgFQgBgEgEgDQgDgCgFAAQgEAAgFADQgFAEgCAGQgBAGAAAPIAAAqIgXAAIAAhdIAVAAIAAAOQALgQAQAAQAHAAAHADQAGADADAEQAEAFABAGQABAGAAAKIAAA6g");
	this.shape_13.setTransform(74.5,18.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgKBBIAAhdIAVAAIAABdgAgKgpIAAgXIAVAAIAAAXg");
	this.shape_14.setTransform(67.1,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgDA+QgFgCgCgEQgCgDgBgGIgBgSIAAgnIgKAAIAAgUIAKAAIAAgTIAWgPIAAAiIAPAAIAAAUIgPAAIAAAkIAAAOIACADIAEABQADAAAGgCIACATQgIAEgKgBQgGAAgEgCg");
	this.shape_15.setTransform(62.1,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AARAwIAAgwQAAgOgCgFQgBgEgEgDQgDgCgFAAQgEAAgFADQgFAEgCAGQgCAGAAAPIAAAqIgWAAIAAhdIAVAAIAAAOQALgQAQAAQAIAAAGADQAGADAEAEQADAFAAAGQACAGAAAKIAAA6g");
	this.shape_16.setTransform(54.3,18.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgVArQgLgFgGgMQgFgLAAgQQAAgMAFgLQAGgMAKgGQALgGALAAQAUAAAMAOQAMANAAAVQAAAVgNAOQgMAOgTAAQgLAAgKgGgAgOgVQgGAIAAANQAAAOAGAIQAGAHAIAAQAJAAAGgHQAGgIAAgOQAAgNgGgIQgGgHgJAAQgIAAgGAHg");
	this.shape_17.setTransform(44.2,18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgjAyQgPgSAAgeQAAggAPgSQAPgSAYAAQAVAAAOAPQAIAIAEAPIgYAHQgCgKgGgHQgHgFgKgBQgMAAgIALQgIALAAAWQAAAYAIAKQAIALAMAAQAJAAAHgHQAHgGADgPIAXAIQgFAVgMALQgNAKgTAAQgWAAgPgRg");
	this.shape_18.setTransform(33.2,16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhDBwQgMgIAEgNIAahWQABgFgBgEIgahWQgEgNAMgIQALgHALAIIBzBhQAHAFAAAIQAAAJgHAFIhzBhQgGAEgGAAQgFAAgFgDg");
	this.shape_19.setTransform(126,16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("ApeCjQgpAAgfgTQgPgJgOgNQgqgqAAg6IAAgqQAAg7AqgqQAqgqA7AAIS+AAQA6AAAqAqQAqAqAAA7IAAAqQAAA6gqAqQgNANgPAJQghATgnAAg");
	this.shape_20.setTransform(75,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.8,5,108,23.7);


(lib.btn_saltar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(181,183,184,0.008)").ss(1,1,1).p("AjHhoIGPAAIAADRImPAA");
	this.shape.setTransform(20,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(181,183,184,0.008)").s().p("AjHBpIAAjRIGPAAIAADRg");
	this.shape_1.setTransform(20,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,23);


(lib.brazo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgqAYQgQgNgGgSQgMgjAGgFIAnAQIAqAYQAZAOABgBQAEAAgEg8IAZgEQAGAaADAbQAGA2gNAJIgCABQgQAAhYgjg");
	mask.setTransform(10.4,6.4);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBDEEA").s().p("AgRAoIAbhTIAIADIgbBUg");
	this.shape.setTransform(1.8,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBDEEA").s().p("AgqAYQgQgNgGgSQgMgjAGgFIAnAQIAqAYQAZAOABgBQAEAAgEg8IAZgEQAGAaADAbQAGA2gNAJIgCABQgQAAhYgjg");
	this.shape_1.setTransform(10.4,6.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBDEEA").s().p("AgqAYQgQgNgGgSQgMgjAGgFIAnAQIAqAYQAZAOABgBQAEAAgEg8IAZgEQAGAaADAbQAGA2gNAJIgCABQgQAAhYgjg");
	this.shape_2.setTransform(10.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.brazo3, new cjs.Rectangle(3.1,0.6,14.6,11.7), null);


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


(lib.banderitapaso6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7274B8").s().p("AANAoIAAgmQAAgJgBgDQgCgHgJAAQgNAAAAARIAAAoIgcAAIAAhMIAcAAIAAAKIAAAAQAIgNAQAAQAdAAAAAgIAAAvg");
	this.shape.setTransform(75.8,27.4,0.606,0.606);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7274B8").s().p("AggA0QgNgLAAgTQAAgTANgLQAOgKASAAQATAAANAKQAOALAAATQAAATgOALQgNALgTAAQgSAAgOgLgAgMAJQgEAFAAAIQAAAHAEAFQAFAFAHAAQAIAAAFgFQAEgFABgHQgBgIgEgFQgFgFgIAAQgHAAgFAFgAgOgkIAUgaIAQAMIgYAXg");
	this.shape_1.setTransform(69.8,26.1,0.606,0.606);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7274B8").s().p("AgNA9IAAhMIAbAAIAABMgAgKgiQgEgEAAgHQAAgGAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAEgGABQgFgBgFgEg");
	this.shape_2.setTransform(65.4,26.1,0.606,0.606);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7274B8").s().p("AghAgIAKgTQALAIALAAQAHAAAAgGQAAgEgFgCIgLgCQgRgGAAgOQAAgNALgIQAJgGANAAQAPAAAKAFIgJARQgHgEgHABQgIAAAAAEQAAAEAEACIAHABQAXAFAAASQAAANgMAIQgKAHgOAAQgQAAgPgJg");
	this.shape_3.setTransform(61.6,27.5,0.606,0.606);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7274B8").s().p("AgdAfQgMgMAAgTQAAgSAMgLQALgLASAAQAUAAALAMQALALAAASIAAAEIg4AAQAAARAQAAQAJgBAEgGIAaAAQgDAMgLAHQgLAHgOAAQgSAAgNgKgAgOgKIAfAAQgBgFgEgEQgFgDgFAAQgNAAgDAMg");
	this.shape_4.setTransform(56.5,27.5,0.606,0.606);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7274B8").s().p("AgRAdQgMgLAAgSQAAgQAMgMQAMgMASAAQAKAAAIAEIAAAYQgIgGgHAAQgHAAgFAGQgFAFAAAHQAAAIAFAGQAEAEAJAAQAIAAAGgEIAAAWQgKAFgJAAQgRAAgMgMg");
	this.shape_5.setTransform(51.4,27.5,0.606,0.606);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7274B8").s().p("AgoAHIAAguIAbAAIAAAoQAAARANAAQAOAAAAgRIAAgoIAbAAIAAAuQAAAhgpAAQgoAAAAghg");
	this.shape_6.setTransform(46.4,27.5,0.606,0.606);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7274B8").s().p("AgpAuIANgXQAOALAMAAQANAAAAgLQAAgHgRgGQgQgFgGgFQgIgGAAgPQAAgQALgLQALgLAQABQATAAAQAJIgMAWQgIgHgLAAQgFAAgCADQgFACAAAEQAAAHAMAEIAIADQAcAIAAAVQAAAVgMAKQgNAKgSABQgVgBgTgNg");
	this.shape_7.setTransform(40.6,26.4,0.606,0.606);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAfQgMgMAAgSQAAgUALgMQAKgMATAAQATAAAKANQAJAMAAASIAAACIg+AAQABAMAGAHQAHAJAKAAQAQAAAJgQIANAHQgLAXgbAAQgSAAgKgNgAgOgXQgGAFgCAKIAtAAQgBgKgFgFQgHgGgJAAQgIAAgHAGg");
	this.shape_8.setTransform(78.8,16.4,0.606,0.606);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeBAQgLgMAAgSQAAgSALgNQALgMARAAQASAAAKAQIAAAAIAAhUIAQAAIAACYIgQAAIAAgNIAAAAQgKAQgRAAQgTAAgKgOgAgSAOQgHAIAAAMQAAAMAHAJQAHAJALAAQANAAAHgJQAHgIAAgNQAAgNgHgHQgHgJgNAAQgLAAgHAJg");
	this.shape_9.setTransform(72.9,14.3,0.606,0.606);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATArIAAgvQAAgMgDgFQgEgGgLAAQgMAAgFALQgCAGAAAPIAAAmIgQAAIAAhSIAQAAIAAALIAAAAQAHgOARAAQAdAAAAAkIAAAxg");
	this.shape_10.setTransform(64.2,16.3,0.606,0.606);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeA2QgNgNAAgTQAAgSANgMQAMgNASAAQATAAAMANQANAMAAASQAAATgNANQgMAMgTAAQgSAAgMgMgAgTACQgIAJAAALQAAAMAIAJQAIAIALAAQAMAAAIgIQAIgJAAgMQAAgLgIgJQgIgHgMAAQgLAAgIAHgAgKgkIAVgdIAPAIIgcAag");
	this.shape_11.setTransform(58.5,15,0.606,0.606);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgHguQgDgDAAgEQAAgGADgCQADgEAEAAQAFAAADAEQADACAAAGQAAAEgDADQgDADgFAAQgEAAgDgDg");
	this.shape_12.setTransform(54.3,14.9,0.606,0.606);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAnQgIgFgEgIIAOgGQAGAKAIAAQAGAAADgDQAEgEAAgEQAAgGgGgDIgPgJQgIgDgDgEQgFgFABgIQAAgKAGgHQAIgHAJAAQAPAAAIAPIgOAGQgDgGgGAAQgEAAgCACQgDACAAADQAAAFAGAEIAMAGQAUAIgBAPQABALgJAJQgIAHgMAAQgJAAgHgFg");
	this.shape_13.setTransform(50.9,16.4,0.606,0.606);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAfQgMgMAAgSQABgUAJgMQAMgMASAAQATAAAKANQAJAMAAASIAAACIg+AAQABAMAGAHQAIAJAKAAQAOAAAKgQIANAHQgLAXgbAAQgSAAgKgNgAgOgXQgGAFgCAKIAtAAQgDgVgTAAQgIAAgHAGg");
	this.shape_14.setTransform(46.2,16.4,0.606,0.606);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbA7QgLgLgDgQIARgDQAAALAHAHQAIAHAKAAQAKAAAHgHQAIgJAAgKQAAgQgYgJIgIgDQgOgGgGgHQgJgIAAgNQAAgPAMgKQALgKAPABQAXgBALAVIgMAIQgIgNgOABQgHAAgHAEQgHAGAAAIQAAAMASAIIAJADQAhAMAAAbQAAASgNAMQgMALgRAAQgPAAgMgKg");
	this.shape_15.setTransform(40.7,14.8,0.606,0.606);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7274B8").s().p("AhIDIQgggMgXgVQgXgTgMgdQgMgbAAggQAAgkAPgnQAQgpAggnIBgh0IB8AAIh0CHIABAAQAOgJALgDIASgCQAdAAAZAMQAZAMAUATQASAUAKAbQALAaAAAfQAAAhgMAcQgLAbgYAWQgWAVghAMQggAMgpAAQgnAAghgMgAgagDQgNAFgJAJQgIAIgGANQgGAOAAANQAAANAGAOQAFALAJAKQAJAJANAGQAMAFAOAAQAPAAALgFQALgFALgKQAJgKAGgLQAFgMAAgPQAAgPgFgMQgGgMgJgJQgLgKgLgEQgLgFgPAAQgOAAgMAFg");
	this.shape_16.setTransform(21.6,19.4,0.606,0.606);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AlYC/QgtAAggghQgggfAAgtIAAihQAAgsAgghQAggfAtAAIAOAAIKkgDQAVAAATAHQAfANASAcQATAbAAAiIAAChQAAAhgTAbQgSAcgfANQgTAIgVAAIqkACg");
	this.shape_17.setTransform(45.4,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderitapaso6, new cjs.Rectangle(0,0,90.9,38.2), null);


(lib.banderitapaso5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#29ABE2").s().p("AANAoIAAgmQAAgJgBgDQgCgHgJAAQgOAAAAARIAAAoIgaAAIAAhMIAaAAIAAAKIABAAQAJgNAPAAQAcAAAAAgIAAAvg");
	this.shape.setTransform(85.5,32.2,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#29ABE2").s().p("AgfA0QgOgLAAgTQAAgTAOgLQAMgKATAAQATAAANAKQAOALAAATQAAATgOALQgNALgTAAQgSAAgNgLgAgMAJQgFAFAAAIQAAAHAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgHQAAgIgFgFQgFgFgIAAQgHAAgFAFgAgOgkIAUgaIARAMIgZAXg");
	this.shape_1.setTransform(78.9,30.8,0.666,0.666);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#29ABE2").s().p("AgMA9IAAhMIAaAAIAABMgAgKgiQgEgFAAgFQAAgHAEgEQAFgFAFAAQAHAAAEAFQAEAEAAAHQAAAFgEAFQgEAFgHgBQgFABgFgFg");
	this.shape_2.setTransform(74,30.8,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#29ABE2").s().p("AgRAdQgMgLAAgRQAAgSAMgLQAMgMASAAQAJAAAJAFIAAAWQgIgFgHAAQgIAAgFAFQgEAGAAAHQAAAIAEAFQAFAGAIAAQAIAAAHgGIAAAYQgJAEgLAAQgQAAgMgMg");
	this.shape_3.setTransform(70,32.3,0.666,0.666);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#29ABE2").s().p("AghAdQgLgMAAgRQAAgQALgMQALgMARAAQAOAAAJAKIAAgHIAbAAIAABLIgbAAIAAgIIgBAAQgGALgQAAQgRAAgLgMgAgLgMQgFAGAAAGQAAAHAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgHQAAgGgFgGQgFgEgIAAQgHAAgFAEg");
	this.shape_4.setTransform(64.1,32.3,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#29ABE2").s().p("AgcAnIAAhMIAcAAIAAAMQAHgNARAAIAFAAIAAAaQgFgCgHAAQgRAAAAAWIAAAfg");
	this.shape_5.setTransform(58.9,32.2,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#29ABE2").s().p("AgQA1IgBAAIAAAIIgbAAIAAh7IAbAAIAAA3QAJgLAOABQARgBALAMQALAMAAAQQAAASgLAMQgLALgRABQgPgBgHgKgAgNAKQgEAFAAAHQAAAIAEAFQAFAEAIAAQAHAAAFgEQAFgFAAgIQAAgHgFgFQgFgFgHAAQgIAAgFAFg");
	this.shape_6.setTransform(53.1,30.8,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#29ABE2").s().p("AgNA9IAAhMIAbAAIAABMgAgKgiQgEgFAAgFQAAgHAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAHQAAAFgEAFQgFAFgGgBQgGABgEgFg");
	this.shape_7.setTransform(48,30.8,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#29ABE2").s().p("AgNA+IAAh7IAbAAIAAB7g");
	this.shape_8.setTransform(45,30.7,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#29ABE2").s().p("AghAdQgLgMAAgRQAAgQALgMQALgMARAAQAOAAAIAKIAAgHIAcAAIAABLIgcAAIAAgIQgHALgPAAQgRAAgLgMgAgLgMQgFAGAAAGQAAAHAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgIAAQgHAAgFAEg");
	this.shape_9.setTransform(39.9,32.3,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#29ABE2").s().p("AgYArQgSgQAAgbQAAgYAQgQQASgTAYAAQAMAAAPAGIAAAjQgJgMgRAAQgNAAgHAJQgJAJAAAMQAAAOAJAJQAHAIAOAAQAOAAALgMIAAAjQgSAGgIAAQgXAAgSgRg");
	this.shape_10.setTransform(33.3,31,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAfQgMgMAAgSQABgUAJgMQAMgMASAAQATAAAKANQAJALAAATIAAADIg+AAQABALAGAIQAIAIAKAAQAOAAAKgQIANAIQgMAWgaAAQgSAAgKgNgAgOgXQgHAGgBAIIAtAAQgDgUgTAAQgIAAgHAGg");
	this.shape_11.setTransform(75.1,20.1,0.666,0.666);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeBBQgLgNAAgTQAAgRALgNQAKgMASAAQASAAAKAPIAAhTIAQAAIAACYIgQAAIAAgMQgKAPgRAAQgTAAgKgNgAgSANQgHAJAAAMQAAANAHAIQAHAJALAAQAMAAAIgJQAHgIAAgNQAAgNgHgIQgIgJgMAAQgKAAgIAJg");
	this.shape_12.setTransform(68.7,17.8,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATArIAAgvQAAgMgDgFQgEgHgLAAQgMAAgFALQgCAHAAAPIAAAmIgQAAIAAhSIAQAAIAAALQAIgOAQAAQAdAAAAAkIAAAxg");
	this.shape_13.setTransform(59.1,20,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeA2QgNgNAAgTQAAgSANgMQAMgNASAAQATAAAMANQANAMAAASQAAATgNANQgMAMgTAAQgSAAgMgMgAgTACQgIAJAAALQAAAMAIAJQAIAIALAAQAMAAAIgIQAIgJAAgMQAAgLgIgJQgIgHgMAAQgLAAgIAHgAgKgkIAVgdIAOAIIgcAag");
	this.shape_14.setTransform(52.9,18.6,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgHguQgDgEAAgEQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_15.setTransform(48.2,18.4,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgQAoQgJgGgCgJIANgFQAGAKAIAAQAFAAADgDQAEgDABgFQgBgGgFgDIgPgJQgIgEgDgDQgFgFAAgIQAAgKAHgHQAHgHAKAAQAQAAAGAOIgNAHQgDgHgHAAQgCAAgDACQgDADAAADQAAAFAGAEIAMAGQAUAIgBAPQABAMgJAIQgIAHgMAAQgJAAgHgEg");
	this.shape_16.setTransform(44.5,20.1,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcAfQgKgMgBgSQABgUAJgMQAMgMASAAQATAAAKANQAJALAAATIAAADIg+AAQABALAGAIQAIAIAKAAQAOAAAKgQIANAIQgMAWgaAAQgRAAgMgNgAgOgXQgGAGgCAIIAtAAQgDgUgTAAQgIAAgHAGg");
	this.shape_17.setTransform(39.4,20.1,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbA7QgMgKgCgQIARgEQgBAKAJAIQAHAHAJAAQALAAAHgIQAHgHAAgLQAAgQgXgJIgIgDQgdgNAAgVQAAgPAMgLQAMgIAOgBQAXABALAUIgMAIQgIgNgOAAQgHAAgHAFQgHAGAAAIQAAAMASAHIAJAEQAhAMAAAbQAAASgNAMQgLAMgSAAQgQAAgLgLg");
	this.shape_18.setTransform(33.3,18.4,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00ADDC").s().p("AhaDLQghgJgegTIAQhkQAcAXAcANQAcAMAaAAQAfAAAUgSQATgSAAgaQAAgegagUQgYgRgqAAQgVAAgRAEQgTACgUAKIAijdIDYAAIAABbIiOAAIgHAtIASgCIAQgBQAdAAAdALQAaALAUATQAUAVAKAYQALAbAAAgQAAAigNAaQgMAbgWATQgWASghALQghAKgmAAQglAAgigJg");
	this.shape_19.setTransform(14.7,24.2,0.666,0.666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Am2DYQgzAAgkglQgkgkAAgzIAAi3QAAgzAkgkQAkgkAzAAIAQAAINdgBQAZABAVAIQAjAPAVAfQAVAfAAAmIAAC2QAAAngVAfQgVAfgjAPQgVAIgZAAItdABg");
	this.shape_20.setTransform(46.3,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderitapaso5, new cjs.Rectangle(-9.9,0,112.5,43.1), null);


(lib.banderitapaso4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#76C87E").s().p("ACyAsQgGgCgDgEQgEgEgCgGQgDgFAAgHQAAgGACgFQADgFADgEQAEgEAFgCQAFgCAHAAQAKAAAHAHIAAgGIAUAAIAAA4IgUAAIAAgHQgGAJgLAAQgGAAgFgDgAC9AFIgEACIgDAEIgBAFIABAFIADAFIAEACIAFABIAFgBIAEgCIADgEIABgFIgBgFIgDgFIgEgCIgFgBIgFABgABcAsQgFgCgEgEQgFgDgCgGQgDgFAAgHQAAgHADgFQACgFAEgEQAFgEAFgCQAGgCAHAAQAHAAAGADIAAAQQgFgEgFAAIgGABIgEADIgDAEIgBAGIABAFIADAEIAEADIAGABQAFAAAFgEIAAARQgHAEgHAAQgGAAgGgDgAgzAtQgGgCgEgEQgEgEgCgGQgDgFAAgHQAAgHADgGQACgFAEgEQAEgDAGgDQAFgCAIAAQAHAAAGACQAFADAEAEQAEAEACAFQACAFAAAIIAAACIgpAAQAAANAMAAQAGAAADgGIAUAAQgGAUgYAAQgHAAgGgCgAgaAIQgBgEgDgCQgDgCgFAAQgEAAgDACQgDACgBAEIAXAAIAAAAgAinAtQgHgDgEgEQgFgEgCgFQgDgGAAgHQAAgGADgGQACgEAFgEQAEgEAHgCQAGgDAHAAQAIAAAGACQAGADAEAEQAFAEADAEQACAGAAAHQAAAGgCAGQgDAFgFAEQgEAEgGADQgHACgHAAQgHAAgGgCgAifAEIgEADIgDAEIgBAFIABAFIADAFIAEACIAFABIAFgBIAEgCIADgFIABgFIgBgFIgDgEIgEgDIgFAAIgFAAgADwAtIAAhbIATAAIAABbgACBAtIAAg4IAUAAIAAA4gAAqAtIAAgdIAAgGIgDgFIgDgBIgDgBQgFAAgDADQgDADAAAGIAAAeIgTAAIAAg4IATAAIAAAHQAFgEAEgCQAEgCAGAAQAFAAAFACQAEACADADQACADABADIABAIIAAAkgAhqAtIAAgoIgHAAIAAgQIAHAAIAAgRIAUAAIAAARIALAAIAAAQIgLAAIAAAogAkCAtIAAhSIAiAAQAOAAAIAHQAHAHAAAOQAAAMgHAHQgIAHgOAAIgNAAIAAAcgAjtAAIAIAAQAMAAAAgJQAAgLgMAAIgIAAgACHgWIgEgCIgCgEIgBgEIABgFIACgDIAEgDIAEgBIAEABIAEADIACADIABAFIgBAEIgCAEIgEACIgEABIgEgBg");
	this.shape.setTransform(56.7,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEUApQgHgIAAgMQAAgMAGgHQAHgHAMAAQAMAAAGAHQAGAHAAAMIAAACIgnAAQAAAHAEAFQAFAFAHAAQAJAAAGgKIAIAEQgDAHgHAEQgGAEgIAAQgLAAgHgIgAE0APQgBgGgDgDQgEgEgGAAQgGAAgEAEQgEAEAAAFIAcAAIAAAAgADWAoQgGgIAAgLQAAgLAHgIQAHgHAKAAQAMAAAGAJIAAg0IAKAAIAABfIgKAAIAAgIQgGAKgLAAQgMAAgHgJgADeAIQgEAFAAAIQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgFAAgIQAAgIgEgFQgFgFgIAAQgHAAgFAFgABDApQgIgIAAgMQAAgLAIgIQAIgHAMAAQAMAAAHAHQAIAIAAALQAAAMgIAIQgHAIgMAAQgMAAgIgIgABKAJQgFAFAAAHQAAAHAFAGQAGAFAHAAQAHAAAFgFQAGgGAAgHQAAgHgGgFQgFgGgHAAQgHAAgGAGgAgHApQgIgIAAgMQAAgLAIgIQAHgHAMAAQAIAAAGADIAAAMQgGgHgJAAQgHAAgEAFQgFAGAAAHQAAAIAFAFQAEAFAIAAQAIAAAGgHIAAANQgGAEgIAAQgMAAgHgIgAhFAoQgHgIAAgLQAAgLAHgIQAHgHAKAAQAMAAAGAJIAAgIIAKAAIAAAzIgKAAIAAgIQgGAKgLAAQgMAAgGgJgAg+AIQgEAFAAAIQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgFAAgIQAAgIgEgFQgFgFgIAAQgHAAgFAFgAh7AqQgFgGAAgLIAAgdIAKAAIAAAcQAAAPALAAQAMAAAAgPIAAgcIAKAAIAAAdQAAALgFAGQgGAHgLAAQgLAAgFgHgAjSAoQgHgIAAgLQAAgLAHgIQAHgHAKAAQAMAAAGAJIAAgIIAKAAIAAAzIgKAAIAAgIQgGAKgLAAQgMAAgGgJgAjLAIQgEAFAAAIQAAAIAEAFQAFAGAHAAQAIAAAFgGQAEgFAAgIQAAgIgEgFQgFgFgIAAQgHAAgFAFgAkOgEIALAAIAPAfIAPgfIALAAIgaA1gACdAvIAAgeQAAgHgCgDQgCgEgHAAQgJAAgCAGQgCAEAAAKIAAAYIgKAAIAAgzIAKAAIAAAGIAAAAQAFgHALAAQASAAAAAVIAAAfgAAnAvIAAgzIAKAAIAAAzgAiXAvIAAhfIAJAAIAABfgAk9AvIAAhSIAsAAIAAAJIgiAAIAAAXIAhAAIAAAJIghAAIAAAfIAiAAIAAAKgABQgPIAOgSIAJAFIgSAQgAAngXQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(62.7,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#76C87E").s().p("AAQB+IAAg0Ih6AAIAAgqIBhidIBVAAIAACVIAfAAIAAAyIgfAAIAAA0gAgqAYIA6AAIAAhjg");
	this.shape_2.setTransform(16.1,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnwDAIgOAAQgtgBggggQghggAAgtIAAijQAAgtAhggQAgggAtgBIAOAAIPvAAQAWABATAHQAfANATAbQATAcAAAiIAACiQAAAjgTAbQgTAbgfAOQgTAIgWAAg");
	this.shape_3.setTransform(62.1,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderitapaso4, new cjs.Rectangle(0,0,124.2,38.3), null);


(lib.banderitapaso3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4B883").s().p("AgfAeQgOgLAAgTQAAgSAOgLQANgLASAAQATAAANALQAOALAAASQAAATgOALQgNALgTAAQgSAAgNgLgAgMgMQgEAGAAAGQAAARAQABQAIgBAFgFQAFgEAAgIQAAgGgFgGQgFgEgIAAQgHAAgFAEg");
	this.shape.setTransform(113.5,31.1,0.665,0.665);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4B883").s().p("AgQAyIAAg2IgJAAIAAgWIAJAAIAAgXIAaAAIAAAXIAQAAIAAAWIgQAAIAAA2g");
	this.shape_1.setTransform(108.5,30.3,0.665,0.665);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4B883").s().p("AgNA9IAAhMIAaAAIAABMgAgKgiQgEgEAAgGQAAgHAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAHQAAAGgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_2.setTransform(105.2,29.6,0.665,0.665);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4B883").s().p("AAUAnIgUgYIgTAYIgkAAIAngqIgggjIAjAAIANAQIAOgQIAjAAIggAjIAnAqg");
	this.shape_3.setTransform(100.1,31.1,0.665,0.665);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4B883").s().p("AgdA0QgMgLAAgTQAAgTAMgKQALgLASAAQAUAAALALQALALAAATIAAADIg4AAQAAARAQAAQAJAAAEgHIAaAAQgDANgLAHQgLAHgOAAQgSAAgNgLgAgOALIAfAAQgBgGgEgDQgFgDgFAAQgNAAgDAMgAgOgkIAUgaIARAMIgZAXg");
	this.shape_4.setTransform(93.5,29.6,0.665,0.665);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4B883").s().p("AgdAeQgMgKAAgUQAAgSAMgLQALgLASAAQAUAAALALQALAMAAATIAAACIg4AAQAAARAQAAQAJABAEgIIAaAAQgDANgLAIQgLAGgOAAQgSAAgNgLgAgOgKIAfAAQgCgNgNAAQgNAAgDANg");
	this.shape_5.setTransform(84,31.1,0.665,0.665);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4B883").s().p("AghAzQgLgLAAgSQAAgRALgKQALgMARAAQAOAAAJAKIAAg3IAbAAIAAB7IgbAAIAAgIIgBAAQgHAKgPABQgRgBgLgMgAgLAKQgFAFAAAHQAAAIAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgIQAAgHgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_6.setTransform(77.4,29.6,0.665,0.665);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E4B883").s().p("AggAgIAKgTQAKAIALAAQAHAAAAgGQAAgEgFgBIgLgEQgRgEAAgPQAAgNALgHQAKgHAMAAQAOAAAMAFIgJASQgIgFgIAAQgHAAAAAGQAAAFAMACQAVAEABARQAAAOgLAJQgLAGgNAAQgSAAgNgJg");
	this.shape_7.setTransform(68.1,31.1,0.665,0.665);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4B883").s().p("AgdAeQgMgKAAgUQAAgSAMgLQALgLASAAQAUAAALALQALAMAAATIAAACIg4AAQAAARAQAAQAJABAEgIIAaAAQgDANgLAIQgLAGgOAAQgSAAgNgLgAgOgKIAfAAQgBgFgFgEQgEgDgGgBQgMAAgDANg");
	this.shape_8.setTransform(62.6,31.1,0.665,0.665);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4B883").s().p("AgNA+IAAh7IAbAAIAAB7g");
	this.shape_9.setTransform(58,29.5,0.665,0.665);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E4B883").s().p("AgMA9IAAhMIAaAAIAABMgAgKgiQgFgEABgGQgBgHAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAHQAAAGgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_10.setTransform(55,29.6,0.665,0.665);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E4B883").s().p("AgRA/IAAg3IgKAAIAAgVIAKAAIAAgKIABgOQABgHAFgGQAKgMAQAAQAHAAAFADIAAAXIgKgDQgJABAAANIAAAMIATAAIAAAVIgTAAIAAA3g");
	this.shape_11.setTransform(51.6,29.4,0.665,0.665);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E4B883").s().p("AgcAnIAAhMIAcAAIAAAMIAAAAQAGgNARAAIAGAAIAAAaQgFgDgGAAQgTAAABAXIAAAfg");
	this.shape_12.setTransform(47.4,31,0.665,0.665);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E4B883").s().p("AgdAeQgNgKAAgUQAAgSANgLQALgLASAAQAUAAALALQAMAMAAATIAAACIg5AAQAAARAQAAQAJABAEgIIAaAAQgDANgLAIQgLAGgOAAQgTAAgMgLgAgOgKIAfAAQgDgNgNAAQgMAAgDANg");
	this.shape_13.setTransform(41.9,31.1,0.665,0.665);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E4B883").s().p("AgqA4IAAhwIAsAAQApAAAAAmQAAAlgoAAIgQAAIAAAlgAgNgEIAFAAQAKAAAEgBQAGgEAAgIQAAgKgGgDQgEgCgKAAIgFAAg");
	this.shape_14.setTransform(35.8,29.9,0.665,0.665);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAgQgLgMAAgUQABgSAJgMQALgNATAAQASAAALANQAJALAAATIAAADIg+AAQABALAGAIQAHAIAKAAQAPAAAKgQIANAIQgMAWgaAAQgRAAgMgMgAgOgXQgHAGgBAIIAtAAQgDgUgTAAQgJAAgGAGg");
	this.shape_15.setTransform(94.7,18.9,0.665,0.665);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfBBQgKgNAAgTQAAgRALgNQAKgMASAAQARAAALAPIAAAAIAAhTIAQAAIAACYIgQAAIAAgMIAAAAQgLAPgQAAQgTAAgLgNgAgSANQgHAJAAAMQAAANAHAIQAHAJALAAQAMAAAIgJQAHgIAAgNQAAgMgHgJQgIgJgMAAQgLAAgHAJg");
	this.shape_16.setTransform(88.3,16.6,0.665,0.665);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATArIAAgvQAAgMgDgFQgEgGgLAAQgNAAgEALQgDAGAAAPIAAAmIgPAAIAAhSIAPAAIAAALIABAAQAIgOAQAAQAdAAAAAkIAAAxg");
	this.shape_17.setTransform(78.8,18.8,0.665,0.665);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeA2QgNgNAAgTQAAgSANgMQAMgNASAAQASAAANANQANAMAAASQAAATgNANQgMAMgTAAQgSAAgMgMgAgTACQgIAJAAALQAAAMAIAJQAIAIALAAQAMAAAIgIQAIgJAAgMQAAgLgIgJQgIgHgMAAQgLAAgIAHgAgLgkIAWgdIAOAIIgcAag");
	this.shape_18.setTransform(72.5,17.4,0.665,0.665);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgHguQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_19.setTransform(67.8,17.3,0.665,0.665);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAgQgMgNAAgTQAAgRAMgNQAOgNASAAQAMAAAJAFIAAAVQgJgLgOAAQgKAAgJAJQgHAIgBALQABANAHAIQAIAJAMAAQAMAAAKgMIAAAVQgKAFgMAAQgRAAgOgMg");
	this.shape_20.setTransform(63.7,18.9,0.665,0.665);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgHguQgDgDAAgFQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_21.setTransform(59.7,17.3,0.665,0.665);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AATArIAAgvQAAgMgDgFQgEgGgLAAQgMAAgFALQgCAGAAAPIAAAmIgQAAIAAhSIAQAAIAAALQAIgOAQAAQAdAAAAAkIAAAxg");
	this.shape_22.setTransform(55.1,18.8,0.665,0.665);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgGguQgEgDAAgFQAAgFAEgDQADgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_23.setTransform(50.5,17.3,0.665,0.665);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOBOIAAhEIgHAAIAAgOIAHAAIAAgoQAAghAaAAQAGAAAFACIAAAQQgIgDgDAAQgMAAAAAWIAAAkIAXAAIAAAOIgXAAIAABEg");
	this.shape_24.setTransform(47.8,16.5,0.665,0.665);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgcAgQgLgMAAgUQAAgSALgMQAKgNATAAQASAAALANQAJALAAATIAAADIg+AAQABALAGAIQAHAIAKAAQAQAAAJgQIANAIQgMAWgaAAQgRAAgMgMgAgOgXQgHAGgBAIIAtAAQgDgUgTAAQgJAAgGAGg");
	this.shape_25.setTransform(43,18.9,0.665,0.665);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgyBDIAAiFIAbAAQAgAAAUARQAWARAAAgQAAAggWASQgUARggAAgAgiAzIAGAAQA+AAAAgzQAAgyg+AAIgGAAg");
	this.shape_26.setTransform(36.4,17.2,0.665,0.665);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E4B883").s().p("AhUDHQgmgSgXgpQgKgSgEgSQgEgVAAgPIBrAAQABAcAQAPQAQAQAZgBQAdAAANgPQANgPAAgXQAAgbgQgNQgPgOgXAAIgUADIAAhDIANABQATAAANgMQAMgMAAgUQAAgRgMgMQgMgMgRAAQgUAAgMANQgMAOAAAUIhjAAQAEghAMgZQAMgYAUgRQATgSAagJQAZgJAfAAQAdAAAaAJQAZAHASAQQASAQAJAXQAKAUAAAdQAAAegLATQgLASgVAOQAfAJASAZQASAaAAAlQAAAfgMAZQgNAZgVASQgWASgdAKQgfAKgjAAQguAAgngTg");
	this.shape_27.setTransform(16.6,22.5,0.665,0.665);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AnnDGIgOAAQgvAAgighQghgigBgvIAAipQABgvAhghQAigiAvAAIAOAAIPdACQAXAAAUAIQAVAIARARQAiAigBAvIAACpQABAvgiAhQgRASgVAIQgUAIgXAAg");
	this.shape_28.setTransform(61.7,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderitapaso3, new cjs.Rectangle(0,0,123.3,40), null);


(lib.banderitapaso1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAwQgIgKAAgOQAAgNAIgIQAIgJALAAQAOAAAHALIABAAIAAgJIAMAAIAAA8IgMAAIAAgKIgBAAQgHAMgNAAQgNAAgHgKgAgBAKQgGAGAAAJQAAAJAGAGQAEAHAJAAQAJAAAFgHQAFgGABgJQgBgJgFgGQgFgHgJABQgJAAgEAGgAgqA4IAAhxIAMAAIAABxg");
	this.shape.setTransform(119.3,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1C24").s().p("AgXDPIAAlCIg8AAIAAhbICnAAIAAGdg");
	this.shape_1.setTransform(-0.5,23.1,0.759,0.759);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED1C24").s().p("AgfAeQgOgLAAgTQAAgSAOgMQANgKASAAQAUAAAMAKQAOAMAAASQAAATgOALQgNALgTAAQgSAAgNgLgAgMgMQgEAGAAAGQAAAHAEAFQAFAFAHAAQAIAAAFgFQAFgFAAgHQAAgGgFgGQgFgEgIAAQgHAAgFAEg");
	this.shape_2.setTransform(137.1,31.8,0.759,0.759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED1C24").s().p("AgNA9IAAhMIAaAAIAABMgAgKgiQgEgEAAgGQAAgHAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_3.setTransform(131.6,30.1,0.759,0.759);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED1C24").s().p("AgRAdQgMgLAAgRQAAgSAMgLQAMgMARAAQALAAAHAFIAAAWQgHgFgGAAQgJAAgFAFQgFAGABAHQgBAIAFAFQAFAGAJAAQAIAAAFgGIAAAYQgIAEgLAAQgQAAgMgMg");
	this.shape_4.setTransform(127,31.8,0.759,0.759);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED1C24").s().p("AgfAeQgOgLAAgTQAAgSAOgMQANgKASAAQAUAAAMAKQAOAMAAASQAAATgOALQgNALgTAAQgSAAgNgLgAgMgMQgEAGAAAGQAAAHAEAFQAFAFAHAAQAIAAAFgFQAFgFAAgHQAAgGgFgGQgFgEgIAAQgHAAgFAEg");
	this.shape_5.setTransform(120.6,31.8,0.759,0.759);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED1C24").s().p("AgaA0QgPgIgBgOIAeAAQABAEAEABQAEACADAAQASAAAAgWIAAgEQgLALgNAAQgQAAgLgLQgLgLAAgQQAAgRALgMQALgNASAAQAOAAAHALIABAAIAAgIIAbAAIAABEQAAAugtAAQgOAAgMgHgAgLgeQgFAFAAAHQAAAIAFAFQAFAFAHAAQARAAAAgSQAAgHgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_6.setTransform(112.8,33.2,0.759,0.759);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED1C24").s().p("AgdAeQgMgKAAgUQAAgSAMgLQALgLASAAQAUAAALAMQALALAAATIAAACIg4AAQAAASAQgBQAJABAEgIIAaAAQgDANgLAIQgLAGgOAAQgSAAgNgLgAgOgKIAfAAQgBgGgEgDQgFgDgFgBQgNABgDAMg");
	this.shape_7.setTransform(105.7,31.8,0.759,0.759);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED1C24").s().p("AAOAoIAAgmIgBgMQgDgHgJAAQgNAAAAARIAAAoIgbAAIAAhMIAbAAIAAAJQAIgMAQAAQAdAAAAAgIAAAvg");
	this.shape_8.setTransform(98.4,31.7,0.759,0.759);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED1C24").s().p("AgdAeQgMgKAAgUQAAgSAMgLQALgLASAAQAUAAALAMQALALAAASIAAADIg4AAQAAASAQgBQAJABAEgIIAaAAQgDANgLAIQgLAGgOAAQgSAAgNgLgAgOgKIAfAAQgBgGgEgDQgFgDgFgBQgNABgDAMg");
	this.shape_9.setTransform(87.6,32,0.759,0.759);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED1C24").s().p("AghAzQgLgMAAgRQAAgRALgLQALgMARABQAOgBAIALIAAg3IAcAAIAAB7IgcAAIAAgJQgHAMgPAAQgRAAgLgNgAgLAKQgFAFAAAHQAAAIAFAFQAFAEAHAAQAIAAAFgEQAEgFAAgIQAAgHgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_10.setTransform(80.2,30.3,0.759,0.759);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED1C24").s().p("AghAcQgLgMAAgQQAAgQALgMQALgMARAAQAOAAAJAKIAAgHIAbAAIAABLIgbAAIAAgJIgBAAQgGAMgQAAQgRAAgLgNgAgLgMQgFAGAAAGQAAAHAFAFQAFAFAHAAQAIAAAFgFQAFgFAAgHQAAgGgFgGQgFgEgIAAQgHAAgFAEg");
	this.shape_11.setTransform(68.4,32,0.759,0.759);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED1C24").s().p("AgMA9IAAhMIAaAAIAABMgAgKgiQgEgEAAgGQAAgHAEgEQAFgFAFAAQAHAAAEAFQAEAEAAAHQAAAGgEAEQgEAFgHAAQgFAAgFgFg");
	this.shape_12.setTransform(63,30.3,0.759,0.759);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED1C24").s().p("AgaA0QgPgIgBgOIAeAAQABAEAEABQAEACADAAQASAAAAgWIAAgEQgLALgNAAQgQAAgLgLQgLgLAAgQQAAgRALgMQALgNASAAQAOAAAHALIABAAIAAgIIAbAAIAABEQAAAugtAAQgOAAgMgHgAgLgeQgFAFAAAHQAAAIAFAFQAFAFAHAAQARAAAAgSQAAgHgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_13.setTransform(57.3,33.4,0.759,0.759);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED1C24").s().p("AgdAeQgMgKAAgUQAAgSAMgLQALgLASAAQAUAAALAMQALALAAASIAAADIg4AAQAAASAQgBQAJABAEgIIAaAAQgDANgLAIQgLAGgOAAQgSAAgNgLgAgOgKIAfAAQgBgGgEgDQgFgDgFgBQgNABgDAMg");
	this.shape_14.setTransform(50.1,32,0.759,0.759);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ED1C24").s().p("AgQAyIAAg1IgJAAIAAgWIAJAAIAAgYIAaAAIAAAYIAQAAIAAAWIgQAAIAAA1g");
	this.shape_15.setTransform(44.7,31.1,0.759,0.759);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ED1C24").s().p("AghAcQgLgMAAgQQAAgQALgMQALgMARAAQAOAAAJAKIAAgHIAbAAIAABLIgbAAIAAgJIgBAAQgHAMgPAAQgRAAgLgNgAgLgMQgFAGAAAGQAAAHAFAFQAFAFAHAAQAIAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgIAAQgHAAgFAEg");
	this.shape_16.setTransform(38.5,32,0.759,0.759);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ED1C24").s().p("AgcAnIAAhMIAcAAIAAAMQAHgNARAAIAFAAIAAAaQgFgCgHAAQgRgBAAAWIAAAgg");
	this.shape_17.setTransform(32.5,32,0.759,0.759);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ED1C24").s().p("AgQAyIAAg1IgJAAIAAgWIAJAAIAAgYIAaAAIAAAYIAQAAIAAAWIgQAAIAAA1g");
	this.shape_18.setTransform(27.7,31.1,0.759,0.759);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ED1C24").s().p("AghAgIAKgTQALAHALAAQAHAAAAgFQAAgEgFgBIgLgDQgRgGAAgOQAAgNALgHQAJgHANAAQAPAAAKAFIgJARQgIgEgHAAQgHABAAAFQAAADAEABIAHADQAXAEAAARQAAAPgMAHQgKAHgOAAQgQAAgPgJg");
	this.shape_19.setTransform(22.6,32,0.759,0.759);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED1C24").s().p("AgfA5IAAhxIA/AAIAAAZIgiAAIAAATIAgAAIAAAYIggAAIAAAUIAiAAIAAAZg");
	this.shape_20.setTransform(16.6,30.6,0.759,0.759);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVAYQgIgJAAgPQAAgOAHgJQAJgKAOAAQANAAAIALQAIAIAAAOIAAACIgvAAQAAAIAFAGQAFAHAIAAQALAAAIgNIAKAGQgJASgUAAQgOAAgIgKgAgLgSQgEAFgBAGIAiAAQgDgPgOAAQgGAAgGAEg");
	this.shape_21.setTransform(107.6,18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfBBQgKgNAAgSQAAgSALgNQAKgMASAAQARAAALAQIAAhUIAQAAIAACYIgQAAIAAgMQgLAPgRAAQgSAAgLgNgAgSANQgHAJAAAMQAAANAHAIQAHAJALAAQANAAAHgJQAHgIAAgNQAAgMgHgJQgHgJgNAAQgLAAgHAJg");
	this.shape_22.setTransform(100.3,15.5,0.759,0.759);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAfQgNgNAAgSQAAgRANgOQAMgMASAAQATAAAMAMQANAOAAARQAAASgNANQgMANgTAAQgSAAgMgNgAgTgUQgIAKAAAKQAAALAIAKQAIAIALAAQAMAAAIgIQAIgJAAgMQAAgKgIgKQgIgIgMAAQgLAAgIAIg");
	this.shape_23.setTransform(89.2,18.1,0.759,0.759);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKA5IAAhCIgJAAIAAgPIAJAAIAAggIAOAAIAAAgIAQAAIAAAPIgQAAIAABCg");
	this.shape_24.setTransform(84.2,16.9,0.759,0.759);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATArIAAgvQAAgMgDgFQgEgHgLAAQgMAAgFALQgCAHAAAOIAAAnIgQAAIAAhSIAQAAIAAALQAIgOAQAAQAdAAAAAkIAAAxg");
	this.shape_25.setTransform(78.9,18,0.759,0.759);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAfQgLgMAAgSQAAgUALgMQAKgMATAAQATAAAKANQAKALAAATIAAADIg/AAQABAKAGAJQAHAIAKAAQAPAAAKgQIAOAIQgNAWgaAAQgRAAgMgNgAgOgXQgGAGgCAIIAuAAQgEgUgTAAQgIAAgHAGg");
	this.shape_26.setTransform(72.2,18.1,0.759,0.759);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgHguQgDgDAAgFQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_27.setTransform(67.1,16.3,0.759,0.759);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AApArIAAguQAAgZgPAAQgSAAAAAeIAAApIgPAAIAAgrQAAgcgPAAQgTAAAAAeIAAApIgQAAIAAhSIAQAAIAAAKIABAAQAIgNAOAAQAQAAAGAPQAJgPARAAQAcAAgBAkIAAAxg");
	this.shape_28.setTransform(60.3,18,0.759,0.759);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgHguQgDgDAAgFQAAgEADgDQADgEAEAAQAEAAAEAEQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_29.setTransform(53.4,16.3,0.759,0.759);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfBBQgKgNAAgSQAAgSALgNQAKgMASAAQARAAALAQIAAAAIAAhUIAQAAIAACYIgQAAIAAgMIAAAAQgLAPgQAAQgTAAgLgNgAgSANQgHAJAAAMQAAANAHAIQAHAJALAAQAMAAAIgJQAHgIAAgNQAAgMgHgJQgIgJgMAAQgLAAgHAJg");
	this.shape_30.setTransform(47.8,15.5,0.759,0.759);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AATArIAAgvQAAgMgDgFQgEgHgLAAQgNAAgEALQgDAHAAAOIAAAnIgPAAIAAhSIAPAAIAAALIABAAQAIgOAQAAQAdAAAAAkIAAAxg");
	this.shape_31.setTransform(40.7,18,0.759,0.759);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgcAfQgLgMABgSQgBgUALgMQAKgMATAAQATAAAKANQAKALAAATIAAADIg+AAQAAAKAHAJQAGAIALAAQAPAAAJgQIAOAIQgMAWgaAAQgSAAgMgNgAgNgXQgHAGgBAIIAtAAQgEgUgTAAQgIAAgGAGg");
	this.shape_32.setTransform(34,18.1,0.759,0.759);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKA5IAAhCIgJAAIAAgPIAJAAIAAggIAPAAIAAAgIAPAAIAAAPIgPAAIAABCg");
	this.shape_33.setTransform(29.3,16.9,0.759,0.759);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AATArIAAgvQAAgMgDgFQgDgHgMAAQgMAAgFALQgCAHAAAOIAAAnIgQAAIAAhSIAQAAIAAALIAAAAQAIgOAQAAQAdAAAAAkIAAAxg");
	this.shape_34.setTransform(23.9,18,0.759,0.759);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjBDIAAiEIBHAAIAAAOIg2AAIAAAmIA0AAIAAAOIg0AAIAAAzIA2AAIAAAPg");
	this.shape_35.setTransform(17.1,16.2,0.759,0.759);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AJwDsI0QgDIgSAAQg4AAgngoQgognAAg3IAAjIQAAg3AogoQAngnA4AAIASAAIUQADIBDAAQAbAAAXAJQAmAQAYAiQAXAigBApIAADIQABApgXAiQgYAigmAQQgXAJgbAAg");
	this.shape_36.setTransform(66.4,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderitapaso1, new cjs.Rectangle(-16.2,0,165.1,47.3), null);


(lib.banderitacontenido2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E08670").s().p("AghAgIAKgTQALAIALAAQAHAAAAgGQAAgEgFgCIgLgCQgRgEAAgQQAAgNALgIQAJgGANAAQAOAAALAFIgJASQgHgEgIgBQgHAAAAAGQAAAFALACQAXAEAAARQAAAOgMAJQgKAGgOAAQgRAAgOgJg");
	this.shape.setTransform(95.2,28,0.613,0.613);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E08670").s().p("AgfAeQgOgLAAgTQAAgSAOgLQANgLASAAQATAAANALQAOALAAASQAAATgOALQgNALgTAAQgSAAgNgLgAgMgLQgEAFAAAGQAAAIAEAEQAFAGAHAAQAIAAAFgGQAFgEAAgIQAAgGgFgFQgFgGgIAAQgHAAgFAGg");
	this.shape_1.setTransform(89.9,28,0.613,0.613);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E08670").s().p("AgRAdQgNgLAAgRQAAgRANgMQAMgMASAAQAKAAAIAFIAAAWQgIgFgHAAQgIAAgFAFQgEAGAAAHQAAAJAEAEQAGAGAIAAQAHAAAHgGIAAAXQgJAFgLAAQgQAAgMgMg");
	this.shape_2.setTransform(84.5,28,0.613,0.613);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E08670").s().p("AgNA9IAAhMIAbAAIAABMgAgKgiQgEgEAAgGQAAgHAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAEQgFAFgGAAQgGAAgEgFg");
	this.shape_3.setTransform(81,26.6,0.613,0.613);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E08670").s().p("AgQAyIAAg1IgJAAIAAgXIAJAAIAAgXIAbAAIAAAXIAPAAIAAAXIgPAAIAAA1g");
	this.shape_4.setTransform(78.1,27.3,0.613,0.613);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E08670").s().p("AgPA9IAAhLIAaAAIAABLgAgSgjIAUgZIARAMIgZAWg");
	this.shape_5.setTransform(75.1,26.6,0.613,0.613);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E08670").s().p("AgcAnIAAhMIAcAAIAAANIAAAAQAGgOARAAIAGAAIAAAbQgFgDgGAAQgTAAABAWIAAAfg");
	this.shape_6.setTransform(71.7,28,0.613,0.613);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E08670").s().p("AgRAdQgNgLAAgRQAAgRANgMQAMgMASAAQAKAAAIAFIAAAWQgIgFgHAAQgIAAgFAFQgEAGAAAHQAAAJAEAEQAGAGAIAAQAHAAAHgGIAAAXQgJAFgLAAQgQAAgMgMg");
	this.shape_7.setTransform(67,28,0.613,0.613);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E08670").s().p("AggAgIAJgTQALAIALAAQAHAAAAgGQABgEgGgCIgLgCQgRgEAAgQQAAgNALgIQAJgGANAAQAOAAALAFIgJASQgGgEgJgBQgHAAAAAGQAAAFAMACQAVAEAAARQAAAOgLAJQgKAGgOAAQgRAAgNgJg");
	this.shape_8.setTransform(59.4,28,0.613,0.613);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E08670").s().p("AgfAeQgOgLAAgTQAAgSAOgLQANgLASAAQATAAANALQAOALAAASQAAATgOALQgNALgTAAQgTAAgMgLgAgMgLQgFAFAAAGQAAAIAFAEQAFAGAHAAQAIAAAFgGQAFgEAAgIQAAgGgFgFQgFgGgIAAQgHAAgFAGg");
	this.shape_9.setTransform(54,28,0.613,0.613);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E08670").s().p("AgQAyIAAg1IgJAAIAAgXIAJAAIAAgXIAaAAIAAAXIAQAAIAAAXIgQAAIAAA1g");
	this.shape_10.setTransform(49.4,27.3,0.613,0.613);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E08670").s().p("AghAgIAKgTQALAIALAAQAHAAAAgGQAAgEgFgCIgLgCQgRgEAAgQQAAgNALgIQAJgGANAAQAOAAALAFIgJASQgGgEgIgBQgIAAAAAGQAAAFALACQAXAEAAARQAAAOgMAJQgKAGgOAAQgQAAgPgJg");
	this.shape_11.setTransform(45.2,28,0.613,0.613);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E08670").s().p("AgdAeQgMgKAAgUQAAgSAMgLQALgLASAAQAUAAALAMQALALAAATIAAACIg4AAQAAASAQgBQAJAAAEgGIAaAAQgDAMgLAIQgLAGgOAAQgSAAgNgLgAgOgKIAfAAQgBgGgEgDQgFgEgFAAQgNAAgDANg");
	this.shape_12.setTransform(40.1,28,0.613,0.613);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E08670").s().p("AgoAHIAAguIAbAAIAAAoQAAARANAAQAOAAAAgRIAAgoIAbAAIAAAuQAAAhgpAAQgoAAAAghg");
	this.shape_13.setTransform(34.3,28.1,0.613,0.613);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E08670").s().p("AgqA4IAAhvIAsAAQApAAAAAlQAAAlgoAAIgQAAIAAAlgAgNgEIAFAAQAKAAAEgBQAGgDAAgJQAAgKgGgDQgEgCgKAAIgFAAg");
	this.shape_14.setTransform(28.4,26.9,0.613,0.613);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAgQgKgNAAgTQgBgSALgMQALgNARAAQAUAAAKANQAKAMAAASIAAACIg+AAQgBALAHAJQAHAHAKAAQAPAAAKgPIAOAHQgNAXgaAAQgSAAgLgMgAgOgYQgGAGgCAJIAuAAQgEgUgUAAQgHAAgHAFg");
	this.shape_15.setTransform(97.5,16.8,0.613,0.613);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfBBQgKgNAAgTQAAgRAKgNQALgMASAAQARAAALAPIAAhTIAQAAIAACYIgQAAIAAgNQgLAQgRAAQgSAAgLgNgAgSANQgHAJAAAMQAAAMAHAJQAHAJALAAQANAAAHgJQAHgIAAgNQAAgNgHgIQgHgJgNAAQgLAAgHAJg");
	this.shape_16.setTransform(91.6,14.7,0.613,0.613);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATAqIAAguQAAgMgDgFQgEgHgLAAQgNAAgEAMQgDAGAAAOIAAAmIgPAAIAAhSIAPAAIAAAMIABAAQAHgNARAAQAdAAAAAjIAAAwg");
	this.shape_17.setTransform(82.8,16.7,0.613,0.613);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeA1QgNgMAAgSQAAgTANgMQAMgMASAAQATAAAMAMQANAMAAATQAAASgNAMQgNAOgSAAQgSAAgMgOgAgTACQgIAJAAAMQAAALAIAJQAIAIALAAQAMAAAIgIQAIgJAAgLQAAgMgIgJQgIgIgMAAQgLAAgIAIgAgKgkIAVgdIAOAIIgcAag");
	this.shape_18.setTransform(77.1,15.4,0.613,0.613);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgHguQgDgDAAgFQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_19.setTransform(72.8,15.3,0.613,0.613);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAgQgNgNAAgTQAAgSANgMQANgNATAAQANAAAJAGIAAAUQgKgLgOAAQgLgBgIAKQgIAIAAALQAAANAIAHQAIAJAMAAQANAAAKgLIAAAUQgLAGgMAAQgSAAgNgMg");
	this.shape_20.setTransform(68.9,16.8,0.613,0.613);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfAfQgKgNAAgSQAAgSALgMQALgNASAAQAQAAALAQIABAAIAAgOIAPAAIAABSIgPAAIAAgNIgBAAQgLAQgQAAQgSAAgMgNgAgSgUQgHAIAAAMQAAAMAHAIQAIAJALAAQAMAAAHgJQAHgHAAgNQAAgMgHgIQgHgJgMAAQgLAAgIAJg");
	this.shape_21.setTransform(63.4,16.8,0.613,0.613);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAgQgNgNAAgTQAAgSANgMQAMgNATAAQANAAAIAGIAAAUQgKgLgNAAQgLgBgIAKQgIAIAAALQAAANAIAHQAIAJAMAAQAMAAAKgLIAAAUQgKAGgNAAQgRAAgMgMg");
	this.shape_22.setTransform(58.1,16.8,0.613,0.613);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgGguQgEgDAAgFQAAgFAEgDQADgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_23.setTransform(54.4,15.3,0.613,0.613);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOBOIAAhEIgHAAIAAgOIAHAAIAAgoQAAghAaAAQAGAAAFACIAAAQQgIgDgDAAQgMAAAAAWIAAAkIAXAAIAAAOIgXAAIAABEg");
	this.shape_24.setTransform(51.8,14.6,0.613,0.613);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHBCIAAhSIAPAAIAABSgAgGguQgEgDAAgFQAAgFAEgDQADgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_25.setTransform(48.7,15.3,0.613,0.613);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgKA5IAAhDIgJAAIAAgPIAJAAIAAgfIAPAAIAAAfIAPAAIAAAPIgPAAIAABDg");
	this.shape_26.setTransform(46.2,15.8,0.613,0.613);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATAqIAAguQAAgMgDgFQgDgHgMAAQgNAAgEAMQgCAGgBAOIAAAmIgQAAIAAhSIAQAAIAAAMIABAAQAHgNARAAQAeAAgBAjIAAAwg");
	this.shape_27.setTransform(41.8,16.7,0.613,0.613);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbAgQgLgNAAgTQAAgSAKgMQAKgNATAAQATAAAKANQAJAMAAASIAAACIg+AAQAAALAHAJQAHAHAKAAQAQAAAJgPIANAHQgMAXgaAAQgRAAgLgMgAgOgYQgGAGgCAJIAuAAQgCgJgFgGQgHgFgJAAQgIAAgHAFg");
	this.shape_28.setTransform(36.4,16.8,0.613,0.613);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgfBBQgKgNAAgTQAAgRAKgNQALgMARAAQASAAALAPIAAAAIAAhTIAQAAIAACYIgQAAIAAgNIAAAAQgLAQgQAAQgTAAgLgNgAgSANQgIAJABAMQgBAMAIAJQAHAJALAAQAMAAAIgJQAHgIAAgNQAAgNgHgIQgIgJgMAAQgLAAgHAJg");
	this.shape_29.setTransform(30.6,14.7,0.613,0.613);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_30.setTransform(26.4,15.2,0.613,0.613);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E08670").s().p("AhlCCIA/hCQAXgYAPgTQAPgTAGgKQAHgOACgHIABgNIgBgLQgCgFgEgEQgFgFgEgDQgGgCgGAAQgNAAgIAJQgHAJAAANIABAKIhIAAQAAgVAIgSQAHgTANgNQANgOARgGQAUgHATAAQAWAAARAGQASAIANALQAOAMAHARQAIARAAATQgBAVgIASQgKARgTASIgqAnIBSAAIAAA4g");
	this.shape_31.setTransform(9.9,21.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Am2CyIgNAAQgrAAgegeQgegeAAgqIAAiYQAAgrAegeQAegeArAAIANAAIN6ABQAVAAASAHQASAIAQAPQAeAfAAAqIAACYQAAArgeAeQgQAPgSAIQgSAHgVAAg");
	this.shape_32.setTransform(51.1,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderitacontenido2, new cjs.Rectangle(-4.4,4.8,111,36), null);


(lib.retrosi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		this.sig.addEventListener("click", function (c) {
			parent.saltar_intro();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// SI
	this.sig = new lib.btnsig();
	this.sig.parent = this;
	this.sig.setTransform(138.9,-63,1,1,0,0,0,51,16.4);
	new cjs.ButtonHelper(this.sig, 0, 1, 1);

	this.text = new cjs.Text("¡De acuerdo! ", "bold 25px 'Arial'", "#D73D45");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 314;
	this.text.parent = this;
	this.text.setTransform(146,-221.7);

	this.text_1 = new cjs.Text("Es muy importante que revises el material a detalle para entender el proceso, por ello te pedimos que lo recorras en la secuencia establecida.", "20px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 397;
	this.text_1.parent = this;
	this.text_1.setTransform(152.5,-184.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.sig}]},14).wait(1));

	// Layer 2
	this.instance = new lib.ventana_textointro();
	this.instance.parent = this;
	this.instance.setTransform(326.4,-64.7,1,1,0,0,0,398.4,177.5);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,-240.4,444.4,208.8);


(lib.retrono = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
		this.next.addEventListener("click", function (c) {
						parent.ir(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// NO
	this.next = new lib.btnnext();
	this.next.parent = this;
	this.next.setTransform(152.2,-74.4,1,1,0,0,0,53.8,18.3);
	new cjs.ButtonHelper(this.next, 0, 1, 1);

	this.text = new cjs.Text("Dada tu experiencia podrás navegar el curso en el orden que desees.", "20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 248;
	this.text.parent = this;
	this.text.setTransform(158,-189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.next}]},14).wait(1));

	// Layer 2
	this.instance = new lib.ventana_textointro();
	this.instance.parent = this;
	this.instance.setTransform(326.4,-64.7,1,1,0,0,0,398.4,177.5);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,-240.4,444.4,208.8);


(lib.pestania6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banderitapaso6();
	this.instance.parent = this;
	this.instance.setTransform(141.3,56.1,3,3,0,0,0,47.1,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlrC7QgtAAgfggQgggfAAgsIAAifQAAgsAggfQAfggAtAAILYAAQAsAAAfAgQAgAfAAAsIAACfQAAAtggAeQgfAggsAAg");
	this.shape.setTransform(290.3,56.1,2.999,2.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.8,114.6);


(lib.pestania5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banderitapaso5();
	this.instance.parent = this;
	this.instance.setTransform(224.5,56.1,3,3,0,0,0,47.1,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlrC7QgtAAgfggQgggfAAgsIAAifQAAgsAggfQAfggAtAAILYAAQAsAAAfAgQAgAfAAAsIAACfQAAAtggAeQgfAggsAAg");
	this.shape.setTransform(141.5,56.1,2.999,2.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390.9,129.3);


(lib.pestania4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.instance = new lib.banderitapaso4();
	this.instance.parent = this;
	this.instance.setTransform(141.3,56.1,3,3,0,0,0,47.1,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlrC7QgtAAgfggQgggfAAgsIAAifQAAgsAggfQAfggAtAAILYAAQAsAAAfAgQAgAfAAAsIAACfQAAAtggAeQgfAggsAAg");
	this.shape.setTransform(290.3,56.1,2.999,2.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.8,114.9);


(lib.pestania3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banderitapaso3();
	this.instance.parent = this;
	this.instance.setTransform(222.5,56.1,3,3,0,0,0,47.1,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlrC7QgtAAgfggQgggfAAgsIAAifQAAgsAggfQAfggAtAAILYAAQAsAAAfAgQAgAfAAAsIAACfQAAAtggAeQgfAggsAAg");
	this.shape.setTransform(141.5,56.1,2.999,2.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,451.1,119.9);


(lib.pestania2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banderitacontenido2();
	this.instance.parent = this;
	this.instance.setTransform(141.3,56.1,3,3,0,0,0,47.1,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlrC7QgtAAgfggQgggfAAgsIAAifQAAgsAggfQAfggAtAAILYAAQAsAAAfAgQAgAfAAAsIAACfQAAAtggAeQgfAggsAAg");
	this.shape.setTransform(290.3,56.1,2.999,2.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,0,445,122.3);


(lib.pestania1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banderitapaso1();
	this.instance.parent = this;
	this.instance.setTransform(200.5,56.1,3,3,0,0,0,47.1,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlrC7QgtAAgfggQgggfAAgsIAAifQAAgsAggfQAfggAtAAILYAAQAsAAAfAgQAgAfAAAsIAACfQAAAtggAeQgfAggsAAg");
	this.shape.setTransform(141.5,56.1,2.999,2.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,505.9,141.8);


(lib.MUJER3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5A683").s().p("AgFACQgCgDABgDIAGAAIACAAIAFAAQABADgCADQgDADgDAAQgDAAgCgDg");
	this.shape.setTransform(24.9,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F3F3F").s().p("AgHBZQgZgrgFgXQgDgOAAgQIAAgOIgIhvQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAQApABAHAaQAEAQAEAoQADAqgCARIAAABQAIANAPAwQAMApADAOQAAABgeAJIgagug");
	this.shape_1.setTransform(35.8,41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3F3F").s().p("AgeCbQgCg6AAg8QABh1AOgxQAHgaApgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIgPBrIAAATQAAAVgCAMQgCAIgFBEQgEA2gFALQgCADgOAFQgHADgEAAQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_2.setTransform(15.2,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2F2F2F").s().p("AgeAoIAmh4IALAJQAFADAHAkIgUgCIAPAZQABABgaAkQgZAqgGALg");
	this.shape_3.setTransform(27.6,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F2F2F").s().p("AAAAcIgZgoIAOgZIgTACIAEgTQADgPAEgCIAMgHIAmB1IAAgCIAAApIAAABQgDgJgcgqg");
	this.shape_4.setTransform(21.4,34.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACADAD").s().p("AgdAhIgPgxIAAgBIASgQIADAHQAOASAJABQANgBAIgLIAIgRIAQATQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgPAxQgDAHAAgHIgbglIgRAWIgJAPIgBAEIgCgEg");
	this.shape_5.setTransform(24.5,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2F2F2F").s().p("Ag8APQADgPgBgOIBzAAQAAAOAEAPg");
	this.shape_6.setTransform(24.6,46.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3B3B3").s().p("AhXCQQAFgXARgpQAEgIABgGQAEgPAAgPQABgegMgWIgBACIABg4QABghgDgWIAKgCIAKgDQANgHAAgBQAEARALAcQALAdAEAPIAGAbIAAgCIAAACIAAABIAAgBIABgCIAAACIAeh5QAAABAJAGIAKAGIAUAFQgDAVACAdIAEAzIgFAIQgMAWABAeQAAAPAEAPIAFAOQAQAnAGAZg");
	this.shape_7.setTransform(24.5,41.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5E6E6").s().p("AAAAzIgghJQgBgDACgDQAPgUAQgEQAQAEAQAUQACACgBAEIggBJIgBACg");
	this.shape_8.setTransform(24.5,34.7);

	this.instance = new lib.pelo();
	this.instance.parent = this;
	this.instance.setTransform(24.6,15.8,1,1,0,0,0,8.1,11.1);

	this.instance_1 = new lib.pelo2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.6,3,1,1,0,0,0,5.2,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAAQgNgGgKAFIgFACIgJAAIAHgBIAOgFQAPgDALAOQgEgEgGgCg");
	this.shape_9.setTransform(20.8,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8AF93").s().p("AgOAEIgGgFIAAAAIABgBQAIgIALACQAIAAAMALIABABIgLAEIgJACQgHAAgIgGgAgSgBQALANAQgFIAJgEQgLgJgHgBIgCAAQgJAAgHAGg");
	this.shape_10.setTransform(21.3,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgCABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_11.setTransform(21.7,15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9C6B59").s().p("AgDAJQgGgCAAgHIAAgBIABgBIAAgCIAAgBIACgCQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQAIAAAFAFQAAAHgFADQgCACgDAAg");
	this.shape_12.setTransform(21.4,15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgLAFIgIgGQAKgHAJAAQAIABALAKIgKAEQgEACgEAAQgFAAgHgEg");
	this.shape_13.setTransform(21.3,15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AADgFQAIABAFAEIAHABIgJAAIgFgCQgKgFgMAGIgKAGQALgNAPACg");
	this.shape_14.setTransform(28.5,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8AF93").s().p("AgIAHIgLgDIABgBIAHgFQAHgGAEAAIAIAAQAIACAEAEIAAABIAAAAQgIAKgMAAIgIgCgAgQADIAIADQAPAGALgNQgEgEgHgBIgHAAQgGAAgKAJg");
	this.shape_15.setTransform(28,15.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIgCABQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAg");
	this.shape_16.setTransform(27.7,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C6B59").s().p("AgFAHQgDgDAAgHIACgCQAFgDAEAAIAEABIACACIAAABIABACIAAACQgBAHgGABIgBAAIgCABQgCAAgDgCg");
	this.shape_17.setTransform(28,15.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAHIgKgEIAGgFQAIgFAEgBIAGABQAHACAGAEQgDADgEADQgHAEgFAAQgEAAgEgCg");
	this.shape_18.setTransform(28,15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC8D61").s().p("AAVAEQgLgLgOAHIgOAFQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIADgBIASgEQAPgDAJAOg");
	this.shape_19.setTransform(28.2,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC8D61").s().p("AABgFIASAEIADABQABAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgOgFQgOgHgLALIgDACQAJgOAPADg");
	this.shape_20.setTransform(21.3,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E24142").s().p("AgNAAIgFgEIAlAAQgEAFgIACIgHACQgHgBgGgEg");
	this.shape_21.setTransform(24.9,21.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#ED5254").s().p("AgJACIAAgCQACABAHgCQADACAGABg");
	this.shape_22.setTransform(25.8,21.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ED5254").s().p("AgJACIAEgBIAGgCIAEABIAEAAIAAACg");
	this.shape_23.setTransform(23.9,21.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECAA86").s().p("AgDgJQADgGADABQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQACANgHAIIgGAHg");
	this.shape_24.setTransform(31.3,18.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ECAA86").s().p("AAAAIQgHgIACgNIADgBQADgBADAGIACAYQgDgCgDgFg");
	this.shape_25.setTransform(17.8,18.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9BD9C").s().p("AgVBZQgZgRgOgdQgEgCgDgFQgIgKACgMIADgCQAEAAADAGQgFgOgCgRQgFgiAPgRIAOgQQATgQAYgDIAHAAQAYADATAQQAKAIAEAIQAOARgEAiQgCARgFAOQAEgGADAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABQABAMgHAKIgHAHQgNAdgZARIgXALQgJgDgMgIg");
	this.shape_26.setTransform(24.6,15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ECAA86").s().p("AhUBCQgLAAgIgKQgIgKAAgOQAAgOAIgLQAIgJALAAIAlgFQAJgDAIgHQAIgHAAgGIAAgjQAJAGAPAAQAPAAAKgGIgBAjQAAAGAHAHQAHAHAIADIAlAFQALAAAIAJQAIALAAAOQAAAOgIAKQgIAKgLAAg");
	this.shape_27.setTransform(24.6,29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDD5B7").s().p("AAlAuQgOgFgGgJIgNgTQgIgMgBADIADAPQACAKgEgBQgGgBgEgJQgFgKgCgCQgFgDgFgHQgGgJABgFQABgFgDgGIgCgGIAUgKIAJAVIAMAFQAPAIAHAKQANASAEAQQADANgFAAIgBAAg");
	this.shape_28.setTransform(41.8,57.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDD5B7").s().p("AgHB2QgJgPgFgXQgCgNAFgQIAGgNIAAgBIgCgcQgCgiACgpIACg7QAUABAMACIAAAJIgGAsQgDAbgEAQQgCAKAAARQAAAVAEAAIACACIgBAAQAEAEACAKQABAJgBAGQAAACAEAMQAEAKgDAEQgDAFgGgKIgIgNQgDgBACAPIAFAXQABALgGANQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgCAAgFgIg");
	this.shape_29.setTransform(14.1,58.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AD8660").s().p("AAAAOQgCgBgCgDQgCgDAAgEIAAgHQAAgKAGABQAHABAAAKIAAAHQAAAJgFAAIgCAAg");
	this.shape_30.setTransform(5.5,70.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AD8660").s().p("AAAAOQgDgBgCgCQgCgEAAgEIAAgIQABgEACgCQACgCACAAQAIABAAAJIAAAIQAAAEgCADQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_31.setTransform(15.6,72.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#312F31").s().p("AgLgCIAPgEIAIAKIgXADg");
	this.shape_32.setTransform(16.8,71.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#827978").s().p("AAsAaIgGgCQAFgKgCgLQgEgTgmACQgSADgHADQgLAFgKAQQgEACgBgCIgBgCIAIgQQANgRAbgCQAigBANALQAMAJABAZQgFAGgGAAIAAAAg");
	this.shape_33.setTransform(11.8,68.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AD8660").s().p("AgUAIIAAgWIApAIIgBAUg");
	this.shape_34.setTransform(10.5,81.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C1986F").s().p("AgUAGIAAgSIApAGIAAATg");
	this.shape_35.setTransform(10.5,79.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D4A4A").s().p("AhpAZIAGhIQADgIAMgDQAJgCAHABICGASQAGABAJAIQAKAJAAAGIAAAAIAPBNg");
	this.shape_36.setTransform(10.6,76.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2D2D2F").s().p("ABZBnIizgiQgDgBgDgEQgEgFAAgFIACiHQAAgGAHgIQAIgIAEAAICOAPQAFABAIAHQAJAHAAAGIgBAAIARCeQAAAGgEADQgCAEgEAAIgCgBg");
	this.shape_37.setTransform(10.7,81.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#312F31").s().p("AgMgEIARgEIAIALIgUAFIAAABQgBAAgEgNg");
	this.shape_38.setTransform(6.6,70);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#827978").s().p("ABSBuIimgiQgFgBgDgFQgCgEAAgGIAAhLIgFAAIgJhEQAAgGAKgIQAKgIAEABIALABIAVADIAAgBQAAgEADgCQABgDADABQAIABgBAJIAAABIBWAMIAAgBQAAgEACgCQADgDADAAQAJACgBAJIAAABIAEACQATAGAHATQALAgAEA3IgPgCIAIBGQAAAGgHAEQgGACgEAAIgDAAg");
	this.shape_39.setTransform(11.6,80.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A12026").s().p("AgSAYQgJgCAAgKQABgMAHgVQACAVACABQACACAOgBQAQAAACgBQABgBgEgXQALAWAAALQABAMgIACg");
	this.shape_40.setTransform(28.1,109.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A12026").s().p("AgTAVIgEgEQgBgCAAgGQAAgHAGgPIAFgJQgEAWABAAQACABAPAAQAPABACgCQACAAACgQQADAVAAAHQgBAKgIABg");
	this.shape_41.setTransform(21.5,109.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A12026").s().p("AgNADQgEgBgCgEIAEADIAjACg");
	this.shape_42.setTransform(21.2,111.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A12026").s().p("AgGAXQAHgBABgKQAAgHgCgVIAAgGQAHAXAAAKQAAAKgIACg");
	this.shape_43.setTransform(23.8,109.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgBgRIADAAIgCAjg");
	this.shape_44.setTransform(24.9,64.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDD5B7").s().p("AgYAaQgBgHADgPIAEgQQACgJAAgEIgBgLIAYAAIAAANQABADAIARQAIAQABAJQACALgIACIgjACQgIgBAAgKg");
	this.shape_45.setTransform(28.3,108.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AARD6IgBgMQgIhOACg5QAFgzgBgFQgCgMgMiqIADgkIgEAAIABAkQgIChgEAVIABATIADAlQABA5gHBOIgBAMIgZAAQgBgVgOg8QgMg4AAgOIAFgdQAEgYgBgKQgKgigHgpQgOhUAHhhIgCgdICgAAIAJAdQAHBhgNBUQgHApgKAiQgBAKAEAYIAFAdQAAAOgNA4QgOA8gBAVg");
	this.shape_46.setTransform(24.9,79.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FDD5B7").s().p("AgBAaQgPAAgCgBQgBgBADgWQAGgKABgEQABgFgBgIIAYAAIgBAKQAAAGADAIIACAJQgCAQgBABQgCABgKAAIgFAAg");
	this.shape_47.setTransform(21.8,107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MUJER3, new cjs.Rectangle(0,0,45.9,111.8), null);


(lib.MUJER2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBDEEA").s().p("AgrBPQgEgDgGg2IgJhHQgCgOACgLIADgIIAKAFQAMAGAIALQATASgCAMQgCASAAAaQAAAYACADQABAEA/gNIAMAcQgWAIgYAHQgdAIgQAAQgLAAgFgEg");
	this.shape.setTransform(13.7,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDD5B7").s().p("AgwANQAYgKADgDQAEgEAFgEIAMgLIAGgHQABgBABAAQABgBABAAQAAAAAAABQABAAAAABQAAAEgFAGIgEAEQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAAAIAYgDQAYgDABACQABAFgbAFIgBAAQAEAAAAADIAAAGQABADgCAEQgCADgCABQgUAIgHgCQgGgCgOAEIgMAEg");
	this.shape_1.setTransform(23.1,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEE5EE").s().p("AgYCRIghgNQAThIgJgtQgQgsgEggQgEgnALgbIANgSQAXgIATAKQAJAFAGAGIAqA6QAUAbgDATQgCAMgPAgQgIAZACA1QACAaADAWQgUAHgWAAQgPAAgSgEg");
	this.shape_2.setTransform(10.7,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhxBDQglgFALg8IARg6IAEgCIALgEQAggIARAAQARAAARAJIAGAXQACAIAGAbIArACQAyABAbAEQAcAFAEANQADAIgJATIAAABQgEAIgtAGIgtAEQgqADgjAAQgtAAghgEg");
	this.shape_3.setTransform(17.5,53);

	this.instance = new lib.brazo3();
	this.instance.parent = this;
	this.instance.setTransform(17.3,28.2,1,1,0,0,0,8.8,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDD5B7").s().p("AgMASQgIgOAAgEQABgOgBgFIgDgIQAAgCAAAAQgBgBABgBQAAAAAAAAQAAAAABAAQAGADACAGIAAAHQAAABAAAAQAAABABAAQAAABAAAAQAAAAABAAIAFgIIAFgKIAMgVQAEgCAFAGQAFAHABANQAAAFgIATQgBAEgKAOQgFAHAEAcIgPADIgCgjg");
	this.shape_4.setTransform(24.2,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050505").s().p("AgJAEIAHgSQAOAPgCAOg");
	this.shape_5.setTransform(14.7,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DE6797").s().p("AgDAAIgEgEIANAEQAAAAABAAQAAAAAAAAQABABgBABQAAAAAAABIAAACQgHgBgDgEg");
	this.shape_6.setTransform(15.3,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E078A7").s().p("AgIAAQAGAAADgDIAEABQABAAABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAgDAEg");
	this.shape_7.setTransform(15.4,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAAAAQgBAAgJADQAGgEAEgBQAHAAAEAFQgGgDgFAAg");
	this.shape_8.setTransform(14.3,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAFgBIgEAAIgKACIgDgBQAFAAAGgDQAKgDAEAKg");
	this.shape_9.setTransform(14.3,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9C6B59").s().p("AAAAEQgDgBgBgDIAAAAIABgCIABgBIACgBQACABACADQAAACgCABIgCABg");
	this.shape_10.setTransform(14.8,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgEAEIgGgEIAEgBIAAgBIAEgBIADgBIAEACIAGAFIgBAAIgKABIgBABIgDgBg");
	this.shape_11.setTransform(14.4,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#050505").s().p("AABgDIALACIACABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBgBIgJgDQgIgEgIAGIgBACQAFgJAKACg");
	this.shape_12.setTransform(14.1,7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#050505").s().p("AAMBwQhCgFgKgWQgOgcADg7QACg+ATgXQAQgUAcgEQAcgFAdAPQAWAMgCACIgLBZQgFBdAaASIgdAAIgkgBg");
	this.shape_13.setTransform(7.7,11.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8B796").s().p("AgdBdQgEgagHgSQgJgBgJgLQgRgWABgtQACguAkgQQASgHASABIAaAGQAcALAHAbIAAArIACAJQADAKAIAGQACAFgEACIgGACIgDABQAAAGACADQADACgGAEIABACQAAABABAAQAAABAAAAQAAABgBAAQAAABAAABIgDADIAAAGQABAGgBABQgFAHgHAAIgSgEQgNgCgCAEQgDAEgCAMIgCAQg");
	this.shape_14.setTransform(9.5,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAEAkQgFgEgGgQQgEgJgFgFQgFgGgDAAQgFAAACARIAEAYIgFAAQgFgegHgLQgGgJACgLQAEgLgBgBQAHAKATAOQAEADAKANIAFAKIAFAJQAGAEAFAAQAEgBAFgEQAEgBAHAEQAIADgDAEQgBABgEABIgEABIgRACIgHAAQgGAAgCgBg");
	this.shape_15.setTransform(34.6,81.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8B796").s().p("AAsCKQgHgBgGgKQgDgLgEgFIgHgHIgIgGIgJgIIgIgEQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgFIABgLQgBgMgCgGQgGgPgGgJQgVgcgEggIgBgbIABgOIgBgOIgIgSIgEgOIAdgFIgGgFQAIAAAJgDQAGgCACACQADABABAFIAeCqQADAPANAbQAMAfAGAKQAAABAGAFIAFADIgDAEIgEACg");
	this.shape_16.setTransform(31.6,70.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAaAkIgLgBQgIAAgJgEIgBAAIAAgBQgCgEgCgJIgEgNQgGgLgGAAQgDAAgCADIgBACIgBAIIACASIABAIIgEAAIgDgSQgCgLgFgGQgGgIABgMQADgLgBgBQAGAHAVASQARAPAFAMQAEAIAJAAQALgFAAgBIAGAEIAHAEQAEACABADQACAEgKAAIgEAAIgJAAgAAdATIAAAAg");
	this.shape_17.setTransform(36.5,80.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F7B194").s().p("AAkB+QgDgLgFgEQgCgEgFgDIgIgGQgGgFgEgCIgIgEQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBIAAgFIAAgLQgBgLgCgHQgHgQgGgHQgWgbgGggQgCgMAAgPQABgUgCgIIgIgSIgGgOIAcgGIgFgFQAIAAAJgDQAGgCACABQADABABAGIAlCoQAFAPANAaQAMAcAIAMQABABAFAFIAGADIgEAEIgDACIgNABQgJgCgFgJg");
	this.shape_18.setTransform(32.9,69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MUJER2, new cjs.Rectangle(0,0,41.3,85.3), null);


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


(lib.Mueble_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Libros_3();
	this.instance.parent = this;
	this.instance.setTransform(15.3,27,1,1,0,0,0,13.3,12.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqA9QgEAAgDgCQgWgRAAgaIAAhBQAAgFAEgDQADgEAEABIB4AAQAGAAADADQADAEgBAFIAAA1QACASgEANQgGAZgXAAg");
	this.shape.setTransform(100.3,78.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#509B5C").s().p("AgKAVIAAgJQAAgLAEgGIAGgMIAEgEIAFAQQADAOgBAGQgBAHgGAAg");
	this.shape_1.setTransform(97.9,70.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A0C5A7").s().p("AgIAUQgBgMABgIQABgGADgHIACgGIAGAJIADAIIACAWg");
	this.shape_2.setTransform(99.4,70.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0C5A7").s().p("AgIAUQgBgMABgIQABgGADgHIACgGIAGAJIADAIIACAWg");
	this.shape_3.setTransform(103.4,70.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#509B5C").s().p("AgLAPQgBgFAEgOIAFgRIADAEIAHANQAGAKgCAPIgOABQgGAAgCgHg");
	this.shape_4.setTransform(101.8,70.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0C5A7").s().p("AgHAUIgBgUQABgGADgHIACgGIAGAJQADAFAAADQACAGAAAQg");
	this.shape_5.setTransform(97.1,70.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#509B5C").s().p("AgIAJQACgHAIgMIAIgLIACAFQABAGgBAJQgCANgIAKIgNAAQAAgCADgLg");
	this.shape_6.setTransform(105.2,70.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#509B5C").s().p("AgBAWQgIgJgCgOQgBgIABgHIACgFIAIAMQAIALACAHQADALAAACg");
	this.shape_7.setTransform(95.3,70.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ADAAD4").s().p("AgIAJQACgHAIgMIAIgLIACAFQABAGgBAJQgCANgIAKIgNAAQAAgCADgLg");
	this.shape_8.setTransform(103.9,70.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADAAD4").s().p("AgBAWQgIgJgBgOQgBgIABgHIABgFIAIAMQAIALACAHQADALAAACg");
	this.shape_9.setTransform(96.5,70.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4B49B").s().p("AsnAJIAAgRIZPAAIAAARg");
	this.shape_10.setTransform(80.8,87.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4B49B").s().p("AsnAJIAAgRIZPAAIAAARg");
	this.shape_11.setTransform(80.8,65.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4B49B").s().p("AsnASIAAgjIZPAAIAAAjg");
	this.shape_12.setTransform(80.8,42.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#515055").p("AjFBPIGLid");
	this.shape_13.setTransform(22.9,53.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#515055").p("AjHhQIGPCh");
	this.shape_14.setTransform(22,54.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#515055").s().p("AgJEGIAAoLIATAAIAAILg");
	this.shape_15.setTransform(160.2,69.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#515055").s().p("AgJEGIAAoLIATAAIAAILg");
	this.shape_16.setTransform(120.6,69.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#515055").s().p("AgJEGIAAoLIATAAIAAILg");
	this.shape_17.setTransform(81.6,69.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#515055").s().p("AgJEGIAAoLIATAAIAAILg");
	this.shape_18.setTransform(42.3,69.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#515055").s().p("AgJEGIAAoLIATAAIAAILg");
	this.shape_19.setTransform(2.4,69.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5E050F").s().p("AjABuIAAjbIGBAAIAADbg");
	this.shape_20.setTransform(22,75.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DED0BE").s().p("AjABuIAAjbIGBAAIAADbg");
	this.shape_21.setTransform(62,76);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DED0BE").s().p("AjABuIAAjbIGBAAIAADbg");
	this.shape_22.setTransform(101.9,54.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5E050F").s().p("AjDBoIAAjPIGHAAIAADPg");
	this.shape_23.setTransform(140.5,76.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D77A54").s().p("AglBeIAvjCIAcAHIgvDCg");
	this.shape_24.setTransform(137.3,55.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FAB16A").s().p("AgeBWIAqiwIATAFIgqCwg");
	this.shape_25.setTransform(140.6,56);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#684D4C").s().p("AgQBuIAQjcIASABIgRDcg");
	this.shape_26.setTransform(144.8,53.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#984439").s().p("AgKBlIAAjIIAVAAIAADIg");
	this.shape_27.setTransform(147.6,54.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D68E79").s().p("AgKBuIAAjbIAVAAIAADbg");
	this.shape_28.setTransform(150.3,53.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D77A54").s().p("AgXBPIAAidIAvAAIAACdg");
	this.shape_29.setTransform(154.5,56.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BC916B").s().p("AgYACQAAgDAEAAIApAAQAEAAAAADg");
	this.shape_30.setTransform(104.7,30.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BC916B").s().p("AgYACQAAgDAEAAIApAAQAEAAAAADg");
	this.shape_31.setTransform(96.9,30.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#573311").s().p("AANAUIgaAAIgCgBIgDgGQgCgEgEgSIAAgJIAwgBIABADIAAAIQgCAOgFAJQgCAFgDAAIAAAAg");
	this.shape_32.setTransform(104.8,32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#573311").s().p("AANAUIgaAAIgCgBIgDgGQgDgEgCgIIgBgKIAAgJIAwgBIABADIAAAIQgCAOgFAJQgCAFgDAAIAAAAg");
	this.shape_33.setTransform(97,32.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D1D0BE").s().p("AgUAhQgDAAgBgDIgHgVIgEgXIAAgCIAAgQIBHAAIABASIgLAsQgCADgEAAg");
	this.shape_34.setTransform(104.7,31.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D1D0BE").s().p("AgUAhQgDAAgBgDIgLgsIAAgSIBHAAIABAQIgBACIgEAXIgHAVQgBADgEAAg");
	this.shape_35.setTransform(97,31.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D1D0BE").s().p("AgnAQIAAgfIBPAAIAAAfg");
	this.shape_36.setTransform(100.9,19.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#585B5C").s().p("AAKAIIAAgFIgSAAIAAAFIgOAAIAAgFIgJAAIAAgKIA/AAIAAAKIgJAAIAAAFg");
	this.shape_37.setTransform(100.8,21.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D77A54").s().p("AiIAbIAAg0IERAAIAAA0g");
	this.shape_38.setTransform(100.4,37.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#573311").s().p("AhwBXIAAitIDhAAIAACtg");
	this.shape_39.setTransform(100.5,26.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#585B5C").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_40.setTransform(100.5,12.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D1D0BE").s().p("AgOAQQgGgHAAgJQAAgIAGgGQAGgHAIABQAJgBAGAHQAGAGAAAIQAAAJgGAHQgGAFgJABQgIgBgGgFg");
	this.shape_41.setTransform(100.5,12.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D77A54").s().p("AiIA+IAAh7IERAAIAAB7g");
	this.shape_42.setTransform(100.4,11.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D1D0BE").s().p("ABsAdIAAgYQAAgJgHgIQgHgHgJAAIimAAQgLAAgHAHQgIAIAAAJIAAAYIgJAAIAAgYQAAgNAKgKQALgKAOAAICmAAQANAAAJAKQAKAKAAANIAAAYg");
	this.shape_43.setTransform(100.3,2.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#573311").s().p("AhgAMIAAgXIDBAAIAAAXg");
	this.shape_44.setTransform(100.4,4.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E62F33").s().p("AgaAVQgCgaAEgRIAKABIAUABIATgCIABAOQACAPgBANQgQADgNAAQgMAAgMgCg");
	this.shape_45.setTransform(32.3,30.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2A1213").s().p("AgSBVQgGgDgBgLIAAgNIACgHQACgJgDgNQgEgUAEgsIAFgKIAHgNQAEgIgBgNIgCAAIAAgFIAXAAIAAAFIgDAAIABAHQAAAJADAFIAHANIAEAKQAFAtgEATQgDANACAJIACAHIAAANQgBALgHADg");
	this.shape_46.setTransform(32.3,31.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E62F33").s().p("AgMAFIAAgIIAFgBIARAAIADABIAAAIg");
	this.shape_47.setTransform(32.3,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mueble_3, new cjs.Rectangle(0,0,161.6,95.5), null);


(lib.mc_tema02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// txt03
	this.instance = new lib.txt03();
	this.instance.parent = this;
	this.instance.setTransform(42,-77.9);
	this.instance.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-34,alpha:1},23,cjs.Ease.get(1)).wait(8));

	// Capa_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape.setTransform(75.3,-58.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.086)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_1.setTransform(68.9,-58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.165)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_2.setTransform(62.7,-58.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.243)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_3.setTransform(56.8,-58.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.318)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_4.setTransform(51.2,-58.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.388)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_5.setTransform(45.9,-58.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.455)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_6.setTransform(40.8,-58.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.518)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_7.setTransform(36.1,-58.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.576)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_8.setTransform(31.7,-58.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.631)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_9.setTransform(27.5,-58.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.682)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_10.setTransform(23.6,-58.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.729)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_11.setTransform(20,-58.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0.773)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_12.setTransform(16.7,-58.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,255,255,0.812)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_13.setTransform(13.7,-58.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.847)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_14.setTransform(11,-58.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0.878)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_15.setTransform(8.5,-58.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0.906)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_16.setTransform(6.4,-58.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,255,255,0.933)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_17.setTransform(4.5,-58.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.953)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_18.setTransform(2.9,-58.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.969)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_19.setTransform(1.6,-58.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.984)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_20.setTransform(0.6,-58.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.992)").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_21.setTransform(-0.1,-58.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("A23AAMAtvAAA");
	this.shape_22.setTransform(-0.5,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22,p:{x:-0.5}}]},1).to({state:[{t:this.shape_22,p:{x:-0.7}}]},1).wait(8));

	// txt04
	this.instance_1 = new lib.txt04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(76,18.6);
	this.instance_1.alpha = 0.109;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-93.9,295.3,36.7);


(lib.imagen02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.transparencia();
	this.instance.parent = this;
	this.instance.setTransform(-30.8,-52.9,1.067,1,0,0,0,474.1,279.1);
	this.instance.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib.Portadadelcursoopción1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-505,-354,0.239,0.239);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.9,-354,1012.3,722.4);


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
	this.shape_82.graphics.f("#3F3231").s().p("AAdBMQgFgBgCgFIgLgvIAHgVQAFgRgFgGQgNgSgnAEQgRgCgFgDIgHgHQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgFIALgIIABAAQAIgFAMgDIABAAIALgCQAxgJAUAgQAPAWgDAhQgDAmgKARQgFAIgEACIgFAFQgCADgDAAIgDgBg");
	this.shape_82.setTransform(29.3,7.7);

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
	this.instance.setTransform(21.1,33.6,1,1,0,0,0,6.8,12.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#805F50").s().p("AguAnQgIgEAAgFQABgEAGgHIAJgKQARgOAAgCQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAAAgCAAIgHACQgIAAgFgFQgCgDAGAAIALABQACAAAIgDIAKgEQAGgBARADQAFAAAlgYIgGAgIgPADQgOAFgEAGQgGANgLAGIgLAJQgJAIgGACIgGABQgGAAgGgEg");
	this.shape_97.setTransform(11.7,46.4);

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


(lib.clickanimado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.manitaclick();
	this.instance.parent = this;
	this.instance.setTransform(25,27.4,1,1,0,0,0,11.5,15.3);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.3,14.3,1,1,0,0,0,9.1,9.1);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Path_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.2,14.2,1,1,0,0,0,14.7,14.7);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clickanimado, new cjs.Rectangle(-0.5,-0.5,37,43.2), null);


(lib.salajuntas3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EBKtAyfIAAhkMi4GAAAIAAkZIpEAAMAAAhfAMArxAAAMAAABbkMCVZAAAMAAAhbkMArxAAAMAAABk9g");
	this.shape.setTransform(677.2,252.2);

	this.instance = new lib.MUJER3();
	this.instance.parent = this;
	this.instance.setTransform(955.8,364.4,2.21,2.21,0,0,0,22.9,55.9);

	this.instance_1 = new lib.Silla_por_atras();
	this.instance_1.parent = this;
	this.instance_1.setTransform(764.1,393.9,2.21,2.21,0,0,0,23.2,42.6);

	this.instance_2 = new lib.Silla_por_atras();
	this.instance_2.parent = this;
	this.instance_2.setTransform(538.3,393.9,2.21,2.21,0,0,0,23.2,42.6);

	this.instance_3 = new lib.Mesa_grande();
	this.instance_3.parent = this;
	this.instance_3.setTransform(701.6,375.4,2.21,2.21,0,0,0,118,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323436").s().p("AABACQgJgLgBgFQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAAAAAIACAAQgGACAMAPQAGAHABAFQACAFgBABQAAgCgIgOg");
	this.shape_1.setTransform(1011.4,381.8,2.263,2.263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626666").s().p("AAGBGQAFgggCgZQgCgOgMgsIgOgpIASAHQAHADADAbIAGAiQAFAjAAASQAAATgKARQgGAIgEAFg");
	this.shape_2.setTransform(1026.1,374.5,2.263,2.263);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626666").s().p("AgRAtIAjhdIgGAmIgEAZQgCASgCAFQgCAHgHADIgEABQgFAAgDgEg");
	this.shape_3.setTransform(1026.6,343.2,2.263,2.263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626666").s().p("ABgEFQgYgEilgiQgVgFgTABIgdAEQgjAEgKASQgDAGAAAGQgCgNACgMIACgMQADgFAMgGQAZgNAygIQAxgIBWASQArAJAkAKQADAAAAgRQAAgSgEgJQgFgMgFgYQgGgcACgQQADgVAZhBQAWg0ARgkQAQggAAheQAAgeALgJQAFgEACADQADAFADAAQAGAAASgTQgHAKAAA5IgBBOQgDAQgmBfQgmBcgIAPQgGAJAMA/QALA/gFAJQgJANgEACIgGABIgOgBg");
	this.shape_4.setTransform(988,328.7,2.263,2.263);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323436").s().p("Ag3CyQAshjAJgbQAOgtASguQAEgLgBgwQgBg2ADgQQADgSAIAAQAFAAABACQACADACARQABAMgDAuQgDAwACAPQABARgJAbQgLAjgCAJQgFAdgtBxQgJgFgcgEg");
	this.shape_5.setTransform(1026.8,311.1,2.263,2.263);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323436").s().p("AA9BeQgagHhFgHQhTgJgaAIQgdAIgOgSQgNgQAGgYQAFgTAWgEQALgCAKACIAlgDQAHAABrAWQBrAXANgCQARgCABgXQACgRgIgqIgJgzQgCgOAFABIAgAEIAUA2QASA9gKAkQgKAhgVALQgKAFgZABIgDAAQgYAAgmgJg");
	this.shape_6.setTransform(984.5,377.3,2.263,2.263);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454748").s().p("AAQAGIgNgCIgXgJIARADQAMACAMAGg");
	this.shape_7.setTransform(1025.7,420.9,2.263,2.263);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#717677").s().p("AgEgMIgDgEIgBAAIAFgCIAMAIIgEAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBADAFAYIgGABQAAgagDgEg");
	this.shape_8.setTransform(998.6,417.9,2.263,2.263);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D4659").s().p("AgjBMQABgZAFgMIAthxIAIAAIAMgBQADgBgcA3IgdA8QgDAJAAAdg");
	this.shape_9.setTransform(987.1,431.5,2.263,2.263);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5B7B8").s().p("AgkBMQgBgTADgNQABgEAOgfQAOgcADgNQACgOAKgPIALgMIgBgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAIgBIAIADQABAhgBgBIgUAGQgFAEgLAaIgQAkQgJARACAdg");
	this.shape_10.setTransform(989.9,431.6,2.263,2.263);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#252931").s().p("ABYAzQACgCgJgRQgFgKgNgGIgkgMIgbgJIgYgGQgRgFgegCIgagBIAAgfQAiAFBEAbQBEAZAKAMQAMAOADASg");
	this.shape_11.setTransform(1020.9,426.5,2.263,2.263);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252931").s().p("AhtAuQgBgDAAgFQgBgJAIgJQAJgJBWgaQBVgaAjgEIgKAhQg6gCgcAGQgWAGgdAIQgIADgeAHQgQAEgEAGQgJAOADAGg");
	this.shape_12.setTransform(965.4,424.8,2.263,2.263);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B7B8").s().p("Ah5AyIAAgKQAAgMAJgHQAOgNBWgaQBVgaAlgEIAMAFQhOAZgcAGQgWAGgeAIIgmAMQgPAFgEAGQgJAPgBAKg");
	this.shape_13.setTransform(964.4,424,2.263,2.263);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B5B8").s().p("AAAAlIAAhJIABAAIAABJg");
	this.shape_14.setTransform(998.1,404.8,2.263,2.263);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D4659").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_15.setTransform(993.4,405.5,2.263,2.263);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#252931").s().p("AgMAkIgHgEIAAhGIAmAAIAABDQABAIgPABIgEABQgGAAgHgDg");
	this.shape_16.setTransform(994.1,405.5,2.263,2.263);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454748").s().p("AgFAVQgHgCgCgIQgDgHADgIQACgIAGgFQAGgFAGACQAGACADAIQADAHgDAIQgCAIgHAFQgEADgEAAIgDAAg");
	this.shape_17.setTransform(939.2,443.1,2.263,2.263);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454748").s().p("AgBAYQgIgBgEgHQgFgIABgJQABgJAGgHQAGgGAGAAQAIABAEAIQAFAHgBAJQgBAJgGAHQgFAGgGAAIgBAAg");
	this.shape_18.setTransform(981.6,456.7,2.263,2.263);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#040D1C").s().p("AAAAXQgIgBgGgDQgGgEgCgHQgCgIAEgHQADgIAKgCIAIgBIAAgEIAWAAIAAAMQABAMgBAFQgDAMgIADIgIABIgEAAg");
	this.shape_19.setTransform(936.7,440.5,2.263,2.263);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#040D1C").s().p("AgPAUQgOgHAHgVQACgIAJgCIAHgCIAAgEIAdAAIABANQAAANgBAFQgDAOgJACQgFACgGAAQgIAAgJgFg");
	this.shape_20.setTransform(978.5,454.7,2.263,2.263);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#454748").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_21.setTransform(1043.8,443.9,2.263,2.263);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454748").s().p("AgEANQgEgCgBgFQgCgFACgEQACgFAEgDQAEgCAEABQAEACABAFQABAFgCAEQgCAFgEADIgEABIgDAAg");
	this.shape_22.setTransform(1033.8,426.4,2.263,2.263);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#454748").s().p("AgGATQgGgCgCgHQgDgIADgHQAEgIAGgEQAFgDAHACQAGACACAHQACAHgDAIQgDAIgHAEQgEACgDAAIgEgBg");
	this.shape_23.setTransform(974,426.3,2.263,2.263);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#040D1C").s().p("AgOATQgNgHAGgTQADgHAHgDIAHgBIAAgEIAbAAIABAMQAAANgBAEQgDAMgIADIgJABQgIAAgJgEg");
	this.shape_24.setTransform(972.2,424,2.263,2.263);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#040D1C").s().p("AgHAPQgGgDgBgHIAAgTIARAAIAAADIAFAAQAFACABAFQAEAMgJAEQgFADgFAAIgGAAg");
	this.shape_25.setTransform(1032.7,425.7,2.263,2.263);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#040D1C").s().p("AgJATQgHgCgDgLQgBgEABgKIAAgLIAXAAIAAAEIAGABQAHACACAGQAFAQgLAHQgGADgHAAIgCAAIgHgBg");
	this.shape_26.setTransform(1044.8,442,2.263,2.263);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#717677").s().p("AA7AWIgFgEIgQgEIgQgEIgOgFIhUgXIAAgEQCPAhAFAEQAHAGgDABIgFAAQgGgBgCACIgCAAIgCgBg");
	this.shape_27.setTransform(1015.9,417.4,2.263,2.263);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#454748").s().p("AgFAVQgGgCgDgIQgDgHADgIQACgIAHgFQAFgFAGACQAGADADAHQADAHgDAIQgCAIgHAFQgEADgDAAIgEAAg");
	this.shape_28.setTransform(933.6,440.7,2.263,2.263);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#454748").s().p("AgBAXQgIAAgEgIQgFgHABgJQABgKAGgGQAGgGAGAAQAIABAEAIQAFAHgBAJQgBAJgGAHQgFAGgGAAIgBgBg");
	this.shape_29.setTransform(975.2,454.9,2.263,2.263);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#454748").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_30.setTransform(1048.7,442.8,2.263,2.263);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#454748").s().p("AgGATQgGgCgCgIQgDgHADgHQAEgIAGgEQAFgEAHACQAGACACAIQACAHgDAHQgDAIgHAEQgEADgDAAIgEgBg");
	this.shape_31.setTransform(967.3,423.7,2.263,2.263);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B7BBC1").s().p("AhRBpIgIgCQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgDhlgIgUQgEgMgJgQIgHgNIgDgPQAAgWAigEIAFgBQAGgBBMADIAPAAQARABAUADIBCAJQALABACADIABAEQgBAEgCABQgKAGglgJQgZgGgzgDQgqgCgfACIgaACQgHABgDAFQgDACAAAFQAAAEAGAIQAGAJAKAdQALAfgCAZIADBAIABAEIgCAEIgDAAgAhVBhIABABIgBhEQgBgWgJgcQAHAZADBcgAhWhhIgFAAQgOACgHAEQgJAHABAOIABABQgBgEABgDIACgDQADgIAFgCQAHgEAUgBQAggCAwACQAeABAWADIgEgBIAAAAQgTgDgRgBIgPAAIhKgCIgHAAgABPhWQAhAJAIgEIg5gIIAQADg");
	this.shape_32.setTransform(1000.5,364,2.263,2.263);

	this.instance_4 = new lib.Maseta1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(267.6,343,0.883,0.883,0,0,0,64.2,87.3);

	this.instance_5 = new lib.Maseta_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(115.5,327.3,2.21,2.21,0,0,0,22.9,42.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#24272A").s().p("AAlBLIglABIAAABIAAAAIAAgBIgkgBQgjAAgNAHQABgYAFgZQAKgxAVgHQAegKAFgMQABgDAAgXIACgFQACgEAHAAIAAAAQALAAABAJIABAaQAEAMAfAKQAUAHALAxQAFAZABAYQgNgHgjAAg");
	this.shape_33.setTransform(959.2,65.9,2.426,2.426);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BDB971").s().p("AgWAWQgKgKAAgMQAAgMAKgJQAJgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgJgJg");
	this.shape_34.setTransform(960.1,85.7,2.426,2.426);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#24272A").ss(2).p("AAABhIAAjB");
	this.shape_35.setTransform(959.1,25.9,2.426,2.426);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#24272A").s().p("AAlBLIglABIAAABIAAAAIAAgBIgkgBQgjAAgNAHQABgYAFgZQAKgxAVgHQAfgKAEgMQABgDAAgXIABgFQAEgEAGAAIAAAAQALAAABAJIABAaQAEAMAfAKQAVAHAKAxQAFAZABAYQgNgHgjAAg");
	this.shape_36.setTransform(370.5,65.9,2.426,2.426);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BDB971").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQANAAALAJQAJAJAAAMQAAAMgJAKQgLAJgNAAQgNAAgKgJg");
	this.shape_37.setTransform(370.5,85.7,2.426,2.426);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#24272A").ss(2).p("AAABhIAAjB");
	this.shape_38.setTransform(370.6,25.9,2.426,2.426);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B2E32").s().p("Ah4gFQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAKADQALADAqADQAsABAtAAQAnAAAngIIAMgDIgWAGQgxAMgqADIgNAAQgvAAhGgQg");
	this.shape_39.setTransform(640.4,376.9,2.21,2.21);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B2E32").s().p("Ah6gEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIALADQAKADArACQArACAtAAQAnAAAngJIARgEIgaAIQgyAMgqACIgNABQgwAAhEgQg");
	this.shape_40.setTransform(885.8,375.2,2.21,2.21);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#252931").s().p("AAAABIABgEIAAAIg");
	this.shape_41.setTransform(423.3,405.8,2.21,2.21);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#626666").s().p("AgIBKQgLgSAAgSQAAgTAFghIAGgjIACgQQADgMAFgCQAKgDAIgEIgOApQgMAsgCAOQgCAYAFAhIAGARQgEgFgFgIg");
	this.shape_42.setTransform(380.9,385,2.21,2.21);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#626666").s().p("AAGAwQgGgDgDgHQgDgIgFgoIgHgmIAlBdQgEAEgFAAIgEgBg");
	this.shape_43.setTransform(380.4,354.4,2.21,2.21);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#717677").s().p("AAAACIgBgCIAAgBQABAAACADg");
	this.shape_44.setTransform(417,422.1,2.21,2.21);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#717677").s().p("AAAgBIgEAAIAJgFIAAAFQABABgCAHQgCgHgCgBg");
	this.shape_45.setTransform(415.3,424.5,2.21,2.21);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#252931").s().p("AgEAmQgJAAgEgFIgCgEIAAhCIAmAAIAABGQgHAFgMAAIgEAAg");
	this.shape_46.setTransform(412.3,415.2,2.21,2.21);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#717677").s().p("AgEgBQABgBgBgEIAJAFIgFAAQgBAAgBAEIgBAEg");
	this.shape_47.setTransform(988.5,422.5,2.21,2.21);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#717677").s().p("AgEAFQgLgBgEgEIgBgDIACgCIAAABIAEADQAFACAHABQALABAMgIIAAAFQgHAGgMAAIgGgBg");
	this.shape_48.setTransform(991.4,421,2.21,2.21);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D2D6D7").s().p("AAKgbIgJA2IgKABQAIgsALgLg");
	this.shape_49.setTransform(977.4,449.3,2.21,2.21);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#323436").s().p("ABWAcQgBgcAMgeQAFgPALgUQAHgMgCgEQgEgIgFgCQgHgDgWgCQgbgBgxADQg2AEgbAHQguALgBgMQgBgCAGAAIANgCIBIgJIAZgCIAygCIAtgBIAYADQARAGgCARQAAAFgEAHQgKASgJAWQgIAVgCBoIgHACg");
	this.shape_50.setTransform(408.5,386.1,2.206,2.206);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B7BBC1").s().p("ABPBoQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIABgEIADhAQgCgZALgfQAJgbAHgKQAGgKAAgDIgDgHQgEgFgGgBIgagCQgegBgrACQgyACgaAGQgnAJgIgGQgDgCAAgDIABgEQACgDALgBIBCgIIAMgDIAZgCIAPgBQBMgCAGABIAFABQAhAEABAWIgDAOIgIAOIgMAcQgIAUgEBlQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgIACIgBAAgABWAeIgBBDIABAAQADhcAHgZQgJAcgBAWgABTheQATABAIADQAFAEADAHIABADQACADgBAEIABgBQABgOgKgHQgGgEgOgBIgFgBQgHgChKAEIgPAAIgkAEIgEAAQAWgCAegBIAsgBIAkABgAh3hRQAIADAhgHIAQgEIAEAAIACgBIABAAIACAAIAEgBIgEABIgCAAIgBAAIgCABIgEAAg");
	this.shape_51.setTransform(408.9,385.6,2.206,2.206);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#323436").s().p("AgIAMQADgGAFgGQAMgPgGgCIACAAQAAAAABAAQAAABAAAAQAAABAAAAQABABgBABQAAAEgJALIgIAQQgBgBABgFg");
	this.shape_52.setTransform(398.1,393.9,2.206,2.206);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#626666").s().p("AhzEFQgEgCgIgNQgGgIAMg/QALhAgFgJQgJgPgmhcQgmhfgCgQIgBhOQgBg6gHgJIAJAJQALAKAFAAQACAAAEgEQABgEAGAEQALAJAAAfQAABeAQAgQARAjAVA0QAaBBACAVQACAQgGAdQgFAXgFANQgDAIAAASQAAARADAAIBPgTQBVgRAyAHQAxAIAZANQANAGACAFIADAMQABANgCAMQAAgGgDgGQgJgSgkgEIgdgDQgTgBgVAEQitAkgPACIgOABIgHgBg");
	this.shape_53.setTransform(421,342.1,2.206,2.206);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#323436").s().p("AgfAtIgNgsQgJgaACgSQABgQgDgvQgCgvABgLQACgRABgDQABgCAFAAQAJAAADATQADAQgBA1QgBAwAEAMIAfBaQAJAbAsBjQgRACgMAEIgHADQguhxgFgdg");
	this.shape_54.setTransform(383.1,325,2.206,2.206);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#323436").s().p("Ah9BnQgZgBgLgFQgUgLgKgiQgKgkASg8IAUg2IAfgFQAGAAgCAOIgJAzQgIAqACARQABAWAQADQANACBsgXQBrgWAHAAIA6ADQAWAEAEATQAGAYgMAQQgPARgcgIQgagHhTAJQhCAHgdAHQglAKgZAAIgDgBg");
	this.shape_55.setTransform(424.4,389.4,2.206,2.206);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#454748").s().p("AgUAGIAHgEQAKgCAHgCIARgDIgYAJIgMACg");
	this.shape_56.setTransform(384.3,432.1,2.206,2.206);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#717677").s().p("AgEARIADgOQABgKAAgDIgIgBIAMgHIAFADIgBAAIgEADQgBACgBAOIAAAPg");
	this.shape_57.setTransform(410.6,429.1,2.206,2.206);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#717677").s().p("AgNADIgGgDIgBgEIAIAEQAJADAGgBQALgBAFgEIAAgCIACADQACAFgSADIgFAAQgHAAgGgDg");
	this.shape_58.setTransform(415.3,424.7,2.206,2.206);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3D4659").s().p("AAUAnIgeg8Qgbg4ADABQAFACAOAAIAtBxQAFAMABAZIgOABQABgdgDgJg");
	this.shape_59.setTransform(421.8,442.3,2.206,2.206);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D2D6D7").s().p("AAAAcIgJg3QAMALAHAsg");
	this.shape_60.setTransform(429.3,453,2.206,2.206);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B5B7B8").s().p("AAPAfIgPgkQgLgagFgEIgUgFQgBgBABggIAIgEIAIACQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIALANQAKAOACAOQADANANAdIAQAjQADALgBAUIgOABQACgegKgQg");
	this.shape_61.setTransform(419.1,442.4,2.206,2.206);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#252931").s().p("AhhAyQADgSAMgNQAKgMBEgaQBEgbAigEIAAAeQguACgbAGQgcAIgXAHIgkANQgNAGgGAKQgIARACABg");
	this.shape_62.setTransform(388.9,437.4,2.206,2.206);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#252931").s().p("ABkAuQADgGgJgOQgEgGgQgEIgngKIgbgIIgYgFQgRgEgkgBIggAAIgKghQAjAEBVAbQBWAZAJAKQAMAMgGANg");
	this.shape_63.setTransform(443,435.8,2.206,2.206);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B5B7B8").s().p("AhqA1QADgYANgLQAPgNBFgaQBHgdAigEIAIADQg/AcgcAHQgOADgHAHQgJAHgQAFIglAMQgOAHgEAGQgJAPgBAIg");
	this.shape_64.setTransform(388.6,436.5,2.206,2.206);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B5B7B8").s().p("ABnAxQgBgJgJgOQgEgHgPgGIgmgMQgcgHgYgGQgRgEgugNIgrgOIANgGQAkAFBVAbQBXAaAOAMQANALgFARg");
	this.shape_65.setTransform(444.1,435.1,2.206,2.206);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B3B5B8").s().p("AgBAlIAAhJIACAAIAABJg");
	this.shape_66.setTransform(411.1,416.3,2.206,2.206);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3D4659").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_67.setTransform(415.7,417,2.206,2.206);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#454748").s().p("AgGASQgGgFgDgJQgCgHACgHQADgIAHgCQAFgCAGAFQAHAFACAIQADAIgDAHQgDAHgGACIgEABQgDAAgFgDg");
	this.shape_68.setTransform(468.6,453.6,2.206,2.206);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#454748").s().p("AgKASQgGgGgBgKQgBgJAEgHQAFgIAHgBQAHAAAGAGQAGAGABAKQABAJgFAHQgEAIgIAAIgCABQgFAAgFgGg");
	this.shape_69.setTransform(427.3,466.9,2.206,2.206);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#040D1C").s().p("AgLAWQgJgDgCgMQgBgFAAgMIABgMIAWAAIAAAEIAIABQAKACADAHQAEAIgCAHQgCAIgHAEQgGADgIABIgDAAIgIgBg");
	this.shape_70.setTransform(471,451.1,2.206,2.206);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#040D1C").s().p("AgMAYQgJgDgDgNQgBgFABgNIAAgOIAdAAIAAAFIAHABQAJACACAIQAHAVgPAHQgGAEgJABIgDAAIgJgBg");
	this.shape_71.setTransform(430.2,464.9,2.206,2.206);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#454748").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_72.setTransform(366.6,454.5,2.206,2.206);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#454748").s().p("AgCAMQgEgDgCgFQgCgEABgFQABgFAEgBQAIgEAGANQACAEgCAFQgBAEgEACIgDAAIgEgBg");
	this.shape_73.setTransform(376.4,437.3,2.206,2.206);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#454748").s().p("AgEASQgHgEgDgIQgDgHADgIQABgHAHgCQAFgDAGAEQAGAEADAIQAEAHgDAIQgBAHgHACIgEABQgDAAgEgCg");
	this.shape_74.setTransform(434.6,437.3,2.206,2.206);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#040D1C").s().p("AgLAWQgIgDgDgMQgBgFABgMIAAgMIAaAAIAAAEIAHABQAIADACAHQAHATgOAHQgGADgIABIgDAAIgIgBg");
	this.shape_75.setTransform(436.5,435,2.206,2.206);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#040D1C").s().p("AgJAMQgIgFAEgLQABgFAFgCIAFgBIAAgCIARAAIAAATQgCAIgFABIgGABQgFAAgGgDg");
	this.shape_76.setTransform(377.4,436.7,2.206,2.206);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#040D1C").s().p("AgMAQQgMgGAGgQQACgGAHgDIAGgBIAAgDIAXAAIAAALQABAKgBAEQgDALgHACIgIABQgGAAgIgEg");
	this.shape_77.setTransform(365.6,452.6,2.206,2.206);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#717677").s().p("Ag+AXQgCgCgGAAIgFABQgDgBAHgGQADgCBIgRIBJgSIAAAEIhUAXIgOAFIgQAEIgQAEQgDABgCADIgCABIgCAAg");
	this.shape_78.setTransform(393.8,428.7,2.206,2.206);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#454748").s().p("AgGASQgGgFgDgIQgCgIADgHQACgIAHgCQAFgCAHAFQAGAFADAIQACAIgCAHQgDAHgHADIgEAAQgDAAgFgDg");
	this.shape_79.setTransform(474,451.4,2.206,2.206);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#454748").s().p("AgKASQgGgGgBgKQgBgJAEgHQAFgIAHgBQAHAAAGAGQAGAGABAKQABAJgFAHQgEAIgIAAIgCABQgFAAgFgGg");
	this.shape_80.setTransform(433.4,465.2,2.206,2.206);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#454748").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_81.setTransform(361.8,453.4,2.206,2.206);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#454748").s().p("AgEASQgGgEgDgIQgEgHADgIQABgHAHgCQAGgDAFAEQAHAEACAIQAEAHgDAIQgBAHgHACIgEABQgDAAgEgCg");
	this.shape_82.setTransform(441.1,434.7,2.206,2.206);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#323436").s().p("ABWAcQgBgcAMgeQAFgPALgTQAHgNgCgEQgEgIgFgCQgHgDgWgBQgagCgyADQg2AEgbAHQguALgBgLQgBgDAGAAIANgCIBIgJIAZgCIBfgCQASABAGACQARAFgCARQAAAGgEAGIgTAoQgIAVgCBoIgHACg");
	this.shape_83.setTransform(408.5,377.1,2.206,2.206);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B7BBC1").s().p("ABRBqIgCgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgEIADg/QgCgaALgfQAJgaAHgLQAGgJAAgEIgDgHQgEgFgGgBIgagBQgfgCgqACQgzACgZAGQgmAKgJgGQgDgCAAgDIABgFQACgCALgCIBCgIIAMgCIAZgCIAPgBQBKgEAIACIAFABQAMABAJAGQANAHAAAMIgDAPIgIAOIgMAbQgIAUgEBlQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgIACgABWAeIgBBEIABAAQADhcAHgaQgJAcgBAWgABTheQAUACAHADQAFADADAHIABADQACADgBAEIABgBQABgOgKgGQgGgEgOgCIgFgBQgHgBhKADIgPABIgYACIgMACQAVgDAbgBIAtgBIAjABgAh3hRQAIAEAhgIIAMgDg");
	this.shape_84.setTransform(408.9,376.5,2.206,2.206);

	this.instance_6 = new lib.Pantalla_grande2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(656.4,146.5,2.43,2.43,0,0,0,97.5,48);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3D4659").s().p("AAABpQgCgBgBgGQgEgMAHgeQADgMACggQAEgmgCgQQgDgRgFgPQgFgMgEgFQgCgDgCgFIgCgFIANALQANAMABAFQAKApgJA2QgNBPABAFQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_85.setTransform(908.1,356.6,2.206,2.206);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3D4659").s().p("AAABnQABgFgMhPQgGghACgeQABgUAEgMQABgFANgMIANgMIgCAGIgFAIQgEAFgFAMQgFAPgCAQQgCAQADAmQADAhACAMQAHAegDAMQgBAGgDABIAAABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_86.setTransform(833.5,354.4,2.206,2.206);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B5B7B8").s().p("AgGBrIgIgCQgDgDgDghQgMiEAEgSQADgLASgJIAPgGIAWACIgHAMQgHAMgIAHQgIAIACAnQABASAFAuIAHAwQACAUgIACIgIABIgHgBg");
	this.shape_87.setTransform(830.6,354.4,2.206,2.206);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#323436").s().p("AgGATQg7AAgzgOIgngOQgHgEABgDQABgEAGADQAPAIAcAHQAwAMA0ACQA3ACApgJQAXgFAfgKQAXgGAAAFQAAAGgMADQgqALgVAEQgfAGg3AAIgHAAg");
	this.shape_88.setTransform(871.9,332.3,2.206,2.206);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3D4659").s().p("AgNAXQg5AAgugNQgZgHgNgHIAAAAQgHgGAEgIQAEgHAFAFQAGAGArAKQAxALAkABQA3ABArgIQANgCAqgMQAdgIgNAWQgGAEgsAIQg3AKg5AAIgGAAg");
	this.shape_89.setTransform(872.4,332.4,2.206,2.206);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#626666").s().p("Ag4CAQhNgEgQgLQgOgJAFhBQAJhQABgkQACgiALgMQAIgIAMADQAKADAKAAIDQADQAaAAAJAJQAFAGACASQADAmABBAQADBZgGANQgHAMgbACIhBABIggAAQgmAAgrgCg");
	this.shape_90.setTransform(871.6,304.6,2.206,2.206);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#626666").s().p("AhHClIg5gHQgegCgWgTQgMgLgGgKIAAgBQgBgWALgpQANgpACgKQADgNAEgxIAFhAQABgVAWgPIABAAIEXgHQAdgBAKBLQAFAnABA4IAKBEQAFAwgGAQQgIAQgJAEIgjAIQgXAGgpABIhVABQglAAgdgEg");
	this.shape_91.setTransform(869.8,365.1,2.206,2.206);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#717677").s().p("AhgAZIC7hDIAGAMIjAA7IAAAOg");
	this.shape_92.setTransform(843.3,430.1,2.206,2.206);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3D4659").s().p("AhoA7IAAgxIC/hEIAGABQgBAAAGAGIAHAGIgGAeIi4AlIgBAlg");
	this.shape_93.setTransform(844.1,433.5,2.206,2.206);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_94.setTransform(915.9,445.1,2.206,2.206);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#717677").s().p("ABjAbIjHg+IAIgHIDABBIABAFIgBAPg");
	this.shape_95.setTransform(895.6,431.1,2.206,2.206);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3D4659").s().p("ABXA7IgBglIi4glIgGgjQAOgGgCgBIAGgBIC/BEIAAAxg");
	this.shape_96.setTransform(894.7,434.5,2.206,2.206);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3D4659").s().p("AAZAKIAAgGIgVAAIglgNIBDACIAAARg");
	this.shape_97.setTransform(887.7,425.6,2.206,2.206);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3D4659").s().p("AggAKIAAgRIBBgCIgkANIgUAAIAAAGg");
	this.shape_98.setTransform(848.3,425.3,2.206,2.206);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAKAAAAAJIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_99.setTransform(842.7,432.2,2.206,2.206);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAEAAADACQADADAAAEIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_100.setTransform(893.6,432.2,2.206,2.206);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#231F20").s().p("AAAAUQgEAAgDgDQgDgDAAgEIAAgTQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAATQAAAEgDADQgDADgEAAg");
	this.shape_101.setTransform(822.6,445.5,2.206,2.206);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_102.setTransform(869.2,454.2,2.206,2.206);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#717677").s().p("AgDARIAAghQgBgEAEAAQAFAAAAAEIAAAhQAAAEgFAAQgEAAABgEg");
	this.shape_103.setTransform(896.3,432.2,2.206,2.206);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#717677").s().p("AgEARIAAghQAAgEAEAAQAFAAgBAEIAAAhQABAEgFAAQgEAAAAgEg");
	this.shape_104.setTransform(890.9,432.2,2.206,2.206);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#717677").s().p("AgEARIAAghQABgEADAAQAEAAAAAEIAAAhQAAAEgEAAQgDAAgBgEg");
	this.shape_105.setTransform(845.6,432.2,2.206,2.206);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#717677").s().p("AgDARIAAghQAAgEADAAQAEAAABAEIAAAhQgBAEgEAAQgDAAAAgEg");
	this.shape_106.setTransform(840.2,432.2,2.206,2.206);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_107.setTransform(826.2,445.5,2.206,2.206);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_108.setTransform(819.4,445.5,2.206,2.206);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(919.4,445.5,2.206,2.206);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#717677").s().p("AgEAPIAAgeQgBgFAFAAQAFAAABAFIAAAeQgBAGgFAAQgFAAABgGg");
	this.shape_110.setTransform(912.7,445.5,2.206,2.206);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#717677").s().p("AgFAUIAAgnQAAgGAFAAQAGAAAAAGIAAAnQAAAGgGAAQgFAAAAgGg");
	this.shape_111.setTransform(872.4,454.5,2.206,2.206);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#717677").s().p("AgFAUIAAgnQABgGAEAAQAGAAgBAGIAAAnQABAGgGAAQgEAAgBgGg");
	this.shape_112.setTransform(865.7,454.5,2.206,2.206);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#717677").s().p("AgVADIgYgHIBNAHIAOACg");
	this.shape_113.setTransform(885,422.7,2.206,2.206);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#717677").s().p("AghAAIBMgCIgTADIhCADg");
	this.shape_114.setTransform(850.4,422.9,2.206,2.206);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#717677").s().p("AgEA7IgGh2IAVAAIgHB2g");
	this.shape_115.setTransform(869.2,436.6,2.206,2.206);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#717677").s().p("AgUAsIgEgDIAAhXIAxABIAABXQgKAFgSAAQgLAAgGgDg");
	this.shape_116.setTransform(869.5,413.2,2.206,2.206);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B5B7B8").s().p("AgJBrQgHgCACgUIAGgwQAGguABgSQABgngHgIQgIgIgIgMIgGgLIAVgCIAQAGQARAIADAMQAGAWgOCAQgDAhgDACQgHAEgHAAIgJgBg");
	this.shape_117.setTransform(911,356.2,2.206,2.206);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3D4659").s().p("AAABpQgCgBgBgGQgEgMAHgeQADgMACggQAEgmgCgQQgDgRgFgPQgFgMgEgFQgCgDgCgFIgCgFIANALQANAMABAFQAKApgJA2QgNBPABAFQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_118.setTransform(666.7,356.6,2.206,2.206);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3D4659").s().p("AAABnQABgFgMhPQgGghACgeQABgUAEgMQABgFANgMIANgMIgCAGIgFAIQgEAFgFAMQgFAPgCAQQgCAQADAmQADAhACAMQAHAegDAMQgBAGgDABIAAABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_119.setTransform(592.1,354.4,2.206,2.206);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B5B7B8").s().p("AgGBrIgIgCQgDgDgDghQgMiEAEgSQADgLASgJIAPgGIAWACIgHAMQgHAMgIAHQgIAIACAnQABASAFAuIAHAwQACAUgIACIgIABIgHgBg");
	this.shape_120.setTransform(589.2,354.4,2.206,2.206);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#323436").s().p("AgGATQg7AAgzgOIgngOQgHgEABgDQABgEAGADQAPAIAcAHQAwAMA0ACQA3ACApgJQAXgFAfgKQAXgGAAAFQAAAGgMADQgqALgVAEQgfAGg3AAIgHAAg");
	this.shape_121.setTransform(630.5,332.3,2.206,2.206);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3D4659").s().p("AgNAXQg5AAgugNQgZgHgNgHIAAAAQgHgGAEgIQAEgHAFAFQAGAGArAKQAxALAkABQA3ABArgIQANgCAqgMQAdgIgNAWQgGAEgsAIQg3AKg5AAIgGAAg");
	this.shape_122.setTransform(631,332.4,2.206,2.206);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#626666").s().p("Ag4CAQhNgEgQgLQgOgJAFhBQAJhQABgkQACgiALgMQAIgIAMADQAKADAKAAIDQADQAaAAAJAJQAFAGACASQADAmABBAQADBZgGANQgHAMgbACIhBABIggAAQgmAAgrgCg");
	this.shape_123.setTransform(630.2,304.6,2.206,2.206);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#626666").s().p("AhHClIg5gHQgegCgWgTQgMgLgGgKIAAgBQgBgWALgpQANgpACgKQADgNAEgxIAFhAQABgVAWgPIABAAIEXgHQAdgBAKBLQAFAnABA4IAKBEQAFAwgGAQQgIAQgJAEIgjAIQgXAGgpABIhVABQglAAgdgEg");
	this.shape_124.setTransform(628.4,365.1,2.206,2.206);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#717677").s().p("AhgAZIC7hDIAGAMIjAA7IAAAOg");
	this.shape_125.setTransform(601.9,430.1,2.206,2.206);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3D4659").s().p("AhoA7IAAgxIC/hEIAGABQgBAAAGAGIAHAGIgGAeIi4AlIgBAlg");
	this.shape_126.setTransform(602.7,433.5,2.206,2.206);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_127.setTransform(674.5,445.1,2.206,2.206);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#717677").s().p("ABjAbIjHg+IAIgHIDABBIABAFIgBAPg");
	this.shape_128.setTransform(654.2,431.1,2.206,2.206);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3D4659").s().p("ABXA7IgBglIi4glIgGgjQAOgGgCgBIAGgBIC/BEIAAAxg");
	this.shape_129.setTransform(653.3,434.5,2.206,2.206);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3D4659").s().p("AAZAKIAAgGIgVAAIglgNIBDACIAAARg");
	this.shape_130.setTransform(646.3,425.6,2.206,2.206);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3D4659").s().p("AggAKIAAgRIBBgCIgkANIgUAAIAAAGg");
	this.shape_131.setTransform(606.9,425.3,2.206,2.206);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAKAAAAAJIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_132.setTransform(601.3,432.2,2.206,2.206);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAEAAADACQADADAAAEIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_133.setTransform(652.2,432.2,2.206,2.206);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#231F20").s().p("AAAAUQgEAAgDgDQgDgDAAgEIAAgTQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAATQAAAEgDADQgDADgEAAg");
	this.shape_134.setTransform(581.2,445.5,2.206,2.206);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_135.setTransform(627.8,454.2,2.206,2.206);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#717677").s().p("AgDARIAAghQgBgEAEAAQAFAAAAAEIAAAhQAAAEgFAAQgEAAABgEg");
	this.shape_136.setTransform(654.9,432.2,2.206,2.206);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#717677").s().p("AgEARIAAghQAAgEAEAAQAFAAgBAEIAAAhQABAEgFAAQgEAAAAgEg");
	this.shape_137.setTransform(649.5,432.2,2.206,2.206);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#717677").s().p("AgEARIAAghQABgEADAAQAEAAAAAEIAAAhQAAAEgEAAQgDAAgBgEg");
	this.shape_138.setTransform(604.2,432.2,2.206,2.206);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#717677").s().p("AgDARIAAghQAAgEADAAQAEAAABAEIAAAhQgBAEgEAAQgDAAAAgEg");
	this.shape_139.setTransform(598.8,432.2,2.206,2.206);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_140.setTransform(584.8,445.5,2.206,2.206);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_141.setTransform(578,445.5,2.206,2.206);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_142.setTransform(678,445.5,2.206,2.206);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#717677").s().p("AgEAPIAAgeQgBgFAFAAQAFAAABAFIAAAeQgBAGgFAAQgFAAABgGg");
	this.shape_143.setTransform(671.3,445.5,2.206,2.206);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#717677").s().p("AgFAUIAAgnQAAgGAFAAQAGAAAAAGIAAAnQAAAGgGAAQgFAAAAgGg");
	this.shape_144.setTransform(631,454.5,2.206,2.206);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#717677").s().p("AgFAUIAAgnQABgGAEAAQAGAAgBAGIAAAnQABAGgGAAQgEAAgBgGg");
	this.shape_145.setTransform(624.3,454.5,2.206,2.206);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#717677").s().p("AgVADIgYgHIBNAHIAOACg");
	this.shape_146.setTransform(643.6,422.7,2.206,2.206);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#717677").s().p("AghAAIBMgCIgTADIhCADg");
	this.shape_147.setTransform(609,422.9,2.206,2.206);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#717677").s().p("AgEA7IgGh2IAVAAIgHB2g");
	this.shape_148.setTransform(627.8,436.6,2.206,2.206);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#717677").s().p("AgUAsIgEgDIAAhXIAxABIAABXQgKAFgSAAQgLAAgGgDg");
	this.shape_149.setTransform(628.1,413.2,2.206,2.206);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#B5B7B8").s().p("AgJBrQgHgCACgUIAGgwQAGguABgSQABgngHgIQgIgIgIgMIgGgLIAVgCIAQAGQARAIADAMQAGAWgOCAQgDAhgDACQgHAEgHAAIgJgBg");
	this.shape_150.setTransform(669.6,356.2,2.206,2.206);

	this.instance_7 = new lib.Piso_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(681.9,466.6,0.811,2.21,0,0,0,666.1,21.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E3EFB9").s().p("EhcAAp7MAAAhT1MC4BAAAMAAABT1g");
	this.shape_151.setTransform(618.9,268.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.instance_7},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.instance_6},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_5},{t:this.instance_4},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-70.9,1516.4,646.2);


(lib.mc_intro1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		root.btn_saltar.cursor = "";
		root.btn_saltar.mouseEnabled = true;
		root.btn_saltar.on("click",clcl );
		
		function clcl () {
		//	console.log("salto");
		//	parent.saltar_intro();//
		}
	}
	this.frame_491 = function() {
		this.stop();
		var raiz=this;
		this.btn_comenzar.addEventListener("click", function (c) {
			raiz.parent.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(491).call(this.frame_491).wait(9));

	// btnsaltar
	this.btn_saltar = new lib.btn_saltar();
	this.btn_saltar.parent = this;
	this.btn_saltar.setTransform(652.3,369.9,0.549,1,0,0,0,19.9,10.5);
	new cjs.ButtonHelper(this.btn_saltar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_saltar).to({_off:true},492).wait(8));

	// FOTO
	this.btn_saltar_1 = new lib.btn_saltar();
	this.btn_saltar_1.parent = this;
	this.btn_saltar_1.setTransform(917.4,464.6,0.549,1,0,0,0,19.9,10.5);
	this.btn_saltar_1._off = true;
	new cjs.ButtonHelper(this.btn_saltar_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_saltar_1).wait(491).to({_off:false},0).to({_off:true},1).wait(8));

	// graf1
	this.instance = new lib.circulo1g();
	this.instance.parent = this;
	this.instance.setTransform(190.5,99.6,0.224,0.224,0,0,0,47.5,49);
	this.instance.alpha = 0.148;
	this.instance._off = true;

	this.instance_1 = new lib.circulo2g();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36.7,99.3,1,1,0,0,0,47.5,48.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.circulo3g();
	this.instance_2.parent = this;
	this.instance_2.setTransform(411.4,99.3,1,1,0,0,0,47.6,48.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.circulo4g();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-36.7,99.3,1,1,0,0,0,47.5,48.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.circulo5g();
	this.instance_4.parent = this;
	this.instance_4.setTransform(411.4,99.3,1,1,0,0,0,47.6,48.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.circulo6g();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-36.7,99.3,1,1,0,0,0,47.5,48.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({_off:false},0).to({regX:47.6,regY:48.9,scaleX:3.5,scaleY:3.5,x:203.5,y:99.4,alpha:1},21,cjs.Ease.get(1)).to({x:-36.5},13,cjs.Ease.get(1)).wait(38).to({regX:47.5,scaleX:1,scaleY:1,x:-36.7,y:99.3,alpha:0},10).to({_off:true},1).wait(41).to({_off:false,regX:47.6,x:411.4},10,cjs.Ease.get(1)).to({_off:true},1,cjs.Ease.get(1)).wait(47).to({_off:false,scaleX:3.5,scaleY:3.5,x:-36.5,y:99.4,alpha:1},0).to({regX:47.5,scaleX:1,scaleY:1,x:-36.7,y:99.3,alpha:0},10).to({_off:true},1).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},1).to({regX:47.6,scaleX:3.5,scaleY:3.5,x:363.5,y:99.4,alpha:1},8).wait(33).to({_off:true,scaleX:1,scaleY:1,x:411.4,y:99.3,alpha:0},10,cjs.Ease.get(1)).wait(266));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(234).to({_off:false},1,cjs.Ease.get(1)).to({scaleX:3.5,scaleY:3.5,x:27.5,y:99.4,alpha:1},8,cjs.Ease.get(1)).to({_off:true},39).wait(218));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(292).to({_off:false},1).to({regX:47.6,scaleX:3.5,scaleY:3.5,x:363.5,y:99.4,alpha:1},8).wait(35).to({scaleX:1,scaleY:1,x:411.4,y:99.3,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1,cjs.Ease.get(1)).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(346).to({_off:false},1,cjs.Ease.get(1)).to({scaleX:3.5,scaleY:3.5,x:27.5,y:99.4,alpha:1},8,cjs.Ease.get(1)).wait(44).to({regX:47.5,scaleX:1,scaleY:1,x:-36.7,y:99.3,alpha:0},10).to({_off:true},1).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(409).to({_off:false},1).to({regX:47.6,scaleX:3.5,scaleY:3.5,x:347.5,y:99.4,alpha:1},8).wait(33).to({x:363.5},0).to({x:203.5},10,cjs.Ease.get(1)).to({regX:47.5,regY:49,scaleX:0.22,scaleY:0.22,x:203.3,y:99.6,alpha:0.148},10,cjs.Ease.get(1)).to({_off:true},1).wait(28));

	// letreritos grafica
	this.instance_6 = new lib.pestania1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(186.6,99.7,1,1,0,0,0,171.1,56.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.pestania2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(230.6,99.7,1,1,0,0,0,171.1,56.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.pestania3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(186.6,99.7,1,1,0,0,0,171.1,56.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.pestania4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(230.6,99.7,1,1,0,0,0,171.1,56.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.pestania5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(186.6,99.7,1,1,0,0,0,171.1,56.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.pestania6("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(230.6,99.7,1,1,0,0,0,171.1,56.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(134).to({_off:false},0).to({x:263.6,alpha:1},15,cjs.Ease.get(1)).wait(19).to({startPosition:0},0).to({x:186.6,alpha:0},4,cjs.Ease.get(1)).to({_off:true},24).wait(82).to({_off:false},4,cjs.Ease.get(1)).to({_off:true},25).wait(88).to({_off:false},4,cjs.Ease.get(1)).to({_off:true},23).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(196).to({_off:false},0).to({x:65.6,alpha:1},7,cjs.Ease.get(1)).wait(17).to({startPosition:0},0).to({x:230.6,alpha:0},4,cjs.Ease.get(1)).to({_off:true},23).wait(253));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(247).to({_off:false},0).to({x:349.4,alpha:1},15,cjs.Ease.get(1)).wait(16).to({startPosition:0},0).to({_off:true,x:186.6,alpha:0},4,cjs.Ease.get(1)).wait(218));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(307).to({_off:false},0).to({x:-14.4,alpha:1},7,cjs.Ease.get(1)).wait(18).to({startPosition:0},0).to({x:230.6,alpha:0},4,cjs.Ease.get(1)).to({_off:true},28).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(364).to({_off:false},0).to({x:349.4,alpha:1},15,cjs.Ease.get(1)).wait(16).to({startPosition:0},0).to({_off:true,x:186.6,alpha:0},4,cjs.Ease.get(1)).wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(422).to({_off:false},0).to({x:65.6,alpha:1},7,cjs.Ease.get(1)).wait(18).to({startPosition:0},0).to({x:230.6,alpha:0},4,cjs.Ease.get(1)).to({_off:true},1).wait(48));

	// logo animado
	this.instance_12 = new lib.LogoARCA();
	this.instance_12.parent = this;
	this.instance_12.setTransform(194.5,78.3,0.17,0.17);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1,scaleY:1,alpha:1},8,cjs.Ease.get(1)).to({regY:0.1,scaleX:0.47,scaleY:0.47},8).wait(21).to({alpha:0},20).to({_off:true},423).wait(20));

	// Layer 27
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtBbIgthjIgsBjIgqAAIhei1IBHAAIAtBhIAuhhIAlAAIAuBhIAthhIBHAAIheC1g");
	this.shape.setTransform(219.2,136.2,0.646,0.646);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFBIQgegaAAguQAAgrAcgbQAbgaAtAAQAuAAAbAbQAaAbAAAuIAAAHIiGAAQAAAoAnAAQAVAAAKgRIA9AAQgGAfgcARQgZAPghAAQguAAgcgZgAgUgvQgLAIgCAOIBJAAQgCgNgKgIQgLgIgNAAQgOAAgKAHg");
	this.shape_1.setTransform(200.8,136.2,0.646,0.646);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfCQIAAi1IA/AAIAAC1gAgYhRQgLgLAAgPQAAgOALgLQAKgLAOAAQAPAAALALQAKALAAAOQAAAPgKALQgLALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(190.4,132.8,0.646,0.646);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBbIhgi1IBIAAIArBcIArhcIBJAAIhgC1g");
	this.shape_3.setTransform(179.9,136.2,0.646,0.646);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFBIQgegaAAguQAAgsAcgaQAbgaAsAAQAvAAAbAbQAaAbAAAuIAAAHIiHAAQAAAoAoAAQAVAAAJgRIA+AAQgHAfgbARQgZAPghAAQgtAAgdgZgAgUgvQgLAIgDAOIBKAAQgCgNgLgIQgKgIgNAAQgOAAgKAHg");
	this.shape_4.setTransform(165.8,136.2,0.646,0.646);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZCFIhBhmIgBAAIAABmIhFAAIAAkJIBoAAQAoAAAZATQAaAWAAApQAAAdgOATQgQAVgcAFIBUBtgAgpgNIAHAAQAVAAAMgGQAOgIAAgTQAAgigvABIgHAAg");
	this.shape_5.setTransform(151.9,133.4,0.646,0.646);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnB2IAAh/IgVAAIAAg2IAVAAIAAg2IA/AAIAAA2IAlAAIAAA2IglAAIAAB/g");
	this.shape_6.setTransform(266,106.3,0.646,0.646);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAfBeIAAhZQAAgWgCgHQgGgRgVAAQggAAAAApIAABeIhBAAIAAi1IBBAAIAAAYIAAAAQALgQAPgHQAMgHATAAQBFAAAABMIAABvg");
	this.shape_7.setTransform(254.1,107.9,0.646,0.646);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhFBIQgegaAAguQAAgsAcgaQAbgaAsAAQAvAAAbAcQAaAaAAAuIAAAHIiHAAQAAAoAoAAQAUAAAKgRIA+AAQgHAfgbARQgZAPghAAQgtAAgdgZgAgUgvQgLAIgDAOIBKAAQgCgNgLgIQgKgIgNAAQgOAAgKAHg");
	this.shape_8.setTransform(239.6,108,0.646,0.646);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABaBeIAAhXQAAgVgDgKQgGgRgSAAQgUAAgHAQQgEALAAAVIAABXIg/AAIAAhXQAAgWgEgKQgGgSgTAAQgSAAgHASQgDAKAAAWIAABXIhBAAIAAi1IBBAAIAAAXIAAAAQAWgdAkAAQAqAAASAjQAJgRASgJQAQgJATAAQA+AAAABIIAABzg");
	this.shape_9.setTransform(221.3,107.9,0.646,0.646);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhFBIQgegaAAguQAAgsAcgaQAbgaAsAAQAvAAAbAcQAaAaAAAuIAAAHIiHAAQAAAoAoAAQAUAAAKgRIA+AAQgHAfgbARQgZAPghAAQgtAAgdgZgAgUgvQgLAIgDAOIBKAAQgCgNgLgIQgKgIgNAAQgOAAgKAHg");
	this.shape_10.setTransform(203,108,0.646,0.646);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhAB6QgigTgEgiIBIAAQADAJAJAGQAIADAKAAQAYABAKgQQAHgLAAgaIAAgIQgYAZggAAQgoAAgZgbQgZgZAAgnQAAgpAagdQAagdApAAQAjAAASAZIAAAAIAAgTIBBAAIAACjQAAA4gcAbQgaAZgzAAQgjAAgegRgAgbhIQgLAMAAASQAAARALAMQALALASAAQATAAAMgLQAKgMAAgRQAAgSgKgMQgMgMgTABQgSgBgLAMg");
	this.shape_11.setTransform(188,110.8,0.646,0.646);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhPBEQgagcAAgoQAAgnAagcQAagdAnAAQAPAAAPAGQAPAGAKAMIAAgSIBBAAIAAC1IhBAAIAAgUIAAAAQgRAaglAAQgoAAgagdgAgbgcQgLAMAAAQQAAASALALQALAMASAAQATAAAMgMQAKgLAAgSQAAgQgKgMQgMgMgTAAQgSAAgLAMg");
	this.shape_12.setTransform(172.4,108,0.646,0.646);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAgBeIAAhZQAAgVgDgIQgGgRgVAAQggAAAAApIAABeIhAAAIAAi1IBAAAIAAAYIABAAQATgeAlAAQBEAAABBMIAABvg");
	this.shape_13.setTransform(157.4,107.9,0.646,0.646);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhPBEQgagcAAgoQAAgnAagcQAagdAnAAQAjAAAUAYIAAgSIBBAAIAAC1IhBAAIAAgUIAAAAQgRAaglAAQgoAAgagdgAgbgcQgLAMAAAQQAAASALALQALAMASAAQATAAAMgMQALgLAAgSQAAgQgLgMQgMgMgTAAQgSAAgLAMg");
	this.shape_14.setTransform(141.6,108,0.646,0.646);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ABiCGIgTiZIgBAAIhACZIgbAAIg9iZIgBAAIgWCZIhFAAIAtkLIBEAAIA1COIA6iOIBFAAIAoELg");
	this.shape_15.setTransform(123,105.3,0.646,0.646);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgnB2IAAiAIgVAAIAAg1IAVAAIAAg2IA/AAIAAA2IAlAAIAAA1IglAAIAACAg");
	this.shape_16.setTransform(221.2,77.4,0.668,0.668);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAgBeIAAhZQAAgVgDgIQgGgRgVAAQggAAAAApIAABeIhAAAIAAi1IBAAAIAAAYIABAAQALgQAOgHQAMgHATAAQAkAAARAVQAPAUABAjIAABvg");
	this.shape_17.setTransform(208.9,79.1,0.668,0.668);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhFBIQgegaAAguQAAgrAcgbQAcgaArAAQAwAAAaAcQAaAaAAAuIAAAHIiHAAQAAAoAoAAQAVAAAJgQIA+AAQgHAegbARQgYAPgiAAQgtAAgdgZgAgUgvQgKAIgEAOIBKAAQgCgNgLgIQgKgIgNAAQgOAAgKAHg");
	this.shape_18.setTransform(193.8,79.3,0.668,0.668);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfCTIAAklIA/AAIAAElg");
	this.shape_19.setTransform(183.1,75.5,0.668,0.668);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhPBEQgagcAAgoQAAgnAagcQAagdAnAAQAjAAAUAYIAAgSIBBAAIAAC1IhBAAIAAgUIAAAAQgRAaglAAQgoAAgagdgAgbgcQgLAMAAAQQAAASALALQALAMASAAQATAAAMgMQALgLAAgSQAAgQgLgMQgMgMgTAAQgSAAgLAMg");
	this.shape_20.setTransform(171,79.3,0.668,0.668);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgiCFIAAjPIg5AAIAAg6IC3AAIAAA6Ig6AAIAADPg");
	this.shape_21.setTransform(158.5,76.4,0.668,0.668);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},72).to({state:[]},22).to({state:[]},374).wait(32));

	// fondo gris
	this.instance_13 = new lib.fondogris();
	this.instance_13.parent = this;
	this.instance_13.setTransform(192.4,129.6,0.103,0.503,0,0,0,258.1,231.8);
	this.instance_13.alpha = 0.148;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(110).to({_off:false},0).to({regX:257.9,regY:231.7,scaleX:2.76,scaleY:1.13,x:198.8,y:140.7,alpha:1},11,cjs.Ease.get(1)).wait(350).to({regX:258.1,regY:231.8,scaleX:0.1,scaleY:0.05,x:200.4,y:129.6,alpha:0.148},8,cjs.Ease.get(1)).to({_off:true},1).wait(20));

	// circulo bco
	this.instance_14 = new lib.circulo_blanco("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(190.7,100.1,0.24,0.24,0,0,0,1.3,0.4);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(62).to({_off:false},0).to({regX:0,regY:0,scaleX:2,scaleY:2,x:189.3,alpha:1},10,cjs.Ease.get(1)).wait(34).to({startPosition:0},0).to({scaleX:9.55,scaleY:9.55,x:200.3,y:100},4,cjs.Ease.get(1)).to({_off:true},6).wait(384));

	// circulo rojo
	this.instance_15 = new lib.CirculoRojo("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(190.4,80,0.033,0.033);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(57).to({_off:false},0).to({scaleX:2,scaleY:2,y:100},9,cjs.Ease.get(1)).wait(28).to({x:200},0).to({regY:-0.1,scaleX:8.31,scaleY:8.3,y:99},12,cjs.Ease.get(1)).to({_off:true},10).wait(384));

	// logo laptop final
	this.instance_16 = new lib.logoarc();
	this.instance_16.parent = this;
	this.instance_16.setTransform(555.7,-108,1,1,0,0,0,68.5,27.6);
	this.instance_16._off = true;
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_16.cache(-2,-2,141,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(480).to({_off:false},0).wait(20));

	// Layer 20
	this.btn_portada1 = new lib.portada2();
	this.btn_portada1.parent = this;
	this.btn_portada1.setTransform(-270.2,420.7,0.625,0.625);
	this.btn_portada1.alpha = 0.109;
	this.btn_portada1._off = true;
	new cjs.ButtonHelper(this.btn_portada1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_portada1).wait(480).to({_off:false},0).wait(20));

	// btn comnezar
	this.btn_comenzar = new lib.btncomenzar2();
	this.btn_comenzar.parent = this;
	this.btn_comenzar.setTransform(-178.1,301.5,1,1,0,0,0,73.5,15.6);
	new cjs.ButtonHelper(this.btn_comenzar, 0, 1, 2, false, new lib.btncomenzar2(), 3);

	this.instance_17 = new lib.mc_tema02();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-102.1,174.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.btn_comenzar}]},487).wait(13));

	// brillo 1
	this.instance_18 = new lib.mc_path_02();
	this.instance_18.parent = this;
	this.instance_18.setTransform(191.7,131.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(499).to({_off:false},0).wait(1));

	// brillo2
	this.instance_19 = new lib.mc_path01();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-9.7,162.3);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(499).to({_off:false},0).wait(1));

	// imagenes
	this.instance_20 = new lib.imagen02("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(215.5,156.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(480).to({_off:false},0).to({alpha:1},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(161.5,65,502.9,316.4);


(lib.introcollage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CERRO();
	this.instance.parent = this;
	this.instance.setTransform(838.6,94.8,1,1,0,0,0,19.4,8.7);

	this.instance_1 = new lib.Cuadro_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(893.5,77.6,0.365,0.365,0,0,0,55,55);

	this.instance_2 = new lib.HOMBRE1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(373.6,146,1,1,0,0,0,18.4,44.9);

	this.instance_3 = new lib.MUJER3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(250.1,135.1,1,1,0,0,0,22.9,55.9);

	this.instance_4 = new lib.MUJER2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(141.1,148.3,1,1,0,0,0,20.6,42.6);

	this.instance_5 = new lib.MUJER1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(806.2,147,0.337,0.337,0,0,0,66.3,136.4);

	this.instance_6 = new lib.Silla_por_atras();
	this.instance_6.parent = this;
	this.instance_6.setTransform(281.7,166.3,1,1,0,0,0,23.2,42.6);

	this.instance_7 = new lib.Silla_por_atras();
	this.instance_7.parent = this;
	this.instance_7.setTransform(179.5,166.3,1,1,0,0,0,23.2,42.6);

	this.instance_8 = new lib.Mesa_grande();
	this.instance_8.parent = this;
	this.instance_8.setTransform(253.4,158,1,1,0,0,0,118,4.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A67C52").s().p("AAiB9QgKgXgHgZQgyAeg8AZQAggWgGh7QgCg/gKg6QgCgCAbgOQAjgTAjAGQAjAFAUAYQASAXAEA+QACAfgCAZQgCAogEAnQgJBQgOAAQgNAAgRgpg");
	this.shape.setTransform(1077.8,104.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E43F3D").s().p("AgIADQgBgCADgCIAPgFQgFAKgLADg");
	this.shape_1.setTransform(1068.8,105.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF5050").s().p("AgJAAQAAgCAEgBIAFgBQAEAEAGAAIgPAFQgEgEAAgBg");
	this.shape_2.setTransform(1068.7,104.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAAAAQgFAAgGADQAEgFAHAAQAHAAAFAFQgHgDgFAAg");
	this.shape_3.setTransform(1070,98.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AACgDQAFABAHACIgCACIgCgBIgHgBIgEgBIgEABIgIAFQAFgLAKADg");
	this.shape_4.setTransform(1070.1,99.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3FA9F5").s().p("AgCAEQgCgCAAgDIACgBQACgCACAAIACABIABABIAAABIAAABQAAAEgDABIgBAAg");
	this.shape_5.setTransform(1069.5,99.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAEIgCgBIAEgDIADgCIAFgCIADAAIAEACIAAABIAGABIgHAEIgGABg");
	this.shape_6.setTransform(1069.9,99.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A67C52").s().p("AARADQgJgIgLAFIgLAEQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADgBIANgDQALgCAIALg");
	this.shape_7.setTransform(1070.3,97);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FABD99").s().p("AgMBlQgCgOgDgGQgDgFgQAEQgRAFgFAAQgIgBgHgHQgCgDACgGIABgIIgEgEQgCgDABgDIACgDQgHgEADgDQADgEAAgHIgEgBIgIgCQgDgCAAgEIABgDQAQgMAAgUIAAg0QAJghAigOQARgGAPAAIANAAQARABAOAGQAsASACA6QACA4gVAaQgLANgLACQgJAWgEAgIguAIQAAgIgDgNg");
	this.shape_8.setTransform(1075.8,100.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CEF9C5").s().p("Ag8B6QAHgZARgvQAUg2AFgFQAFgEgBgOQgDgaABgQQABgZgBgTIgCgOIAWgGQAbgEAXAOIgFAeQgFAjgHAZIgDAgQgCAKgbAyIgoBMg");
	this.shape_9.setTransform(1075.2,137.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FED5B5").s().p("AAFA6QgJgBgHgGQgKgIgDgNQgCgHAAgHQABgGAEgMQAEgOAFgLQADgGAHgHQAEgGABgEIADgIIASAIQgEAHADAOIACAKQAAAMgFAKQgFALAAAKQABALAGAGQAEADABAGQAAAFgDABIgIACIgEABIgHgBg");
	this.shape_10.setTransform(1069.2,155.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEAA83").s().p("AgDgIQAFgJAEAFQACASgNAJg");
	this.shape_11.setTransform(1077.9,103.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C1B1B").s().p("AgiAkQgEgEAAgGQAAgIAEgGIAJgFQAEgGAHgLQAAADgGAKQgCAFACABIALABQAKABAFgCQAFgEADgFQAIgVAFgHQAFgFAFgCIACAIQABADgCACIgHAJIgGAKIAAABIgHASQgEALgFAHIgCACg");
	this.shape_12.setTransform(1076.7,205.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgIAeIABg1IAQgGIgJA7g");
	this.shape_13.setTransform(1079.3,206.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#55463B").s().p("AgghXIA8AAQAHAhgCAmQAAAIgCAKIgIAjQgFAcAAAWIggABg");
	this.shape_14.setTransform(1078.1,192.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#121221").s().p("AgbDBIgThKQgShOgFh4IgBhxIAbAMQAnAKA9gKIAKAbQAIAhgHAfQgCAKgDAhQgEAjAAAQIgCAlQAAAZACAqIAFAsIAGAog");
	this.shape_15.setTransform(1075.8,164);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9FFD2").s().p("AANA0QgbgGgaAJQgEgPABgUQABgoAXgYQAcgdAWAdQAWAdgOA1IgCAHQgCAIAAAGQgIgEgOgDg");
	this.shape_16.setTransform(1078,119.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DFAD96").s().p("AgJAWQABAAABAAQAAABAAgBQABAAAAAAQAAAAAAgBIAAgBIAAgBIAAACIAAgHIADgFQADgFAAgEQABgGgBgDQgBgEgEAAIgEABIgDAGQgDgFABgEQABgFAGgDQAEgCAGACQAEABAFAFQADAGAAAFQAAAEgBAEQgDAJgHAGIgBAAIgDADIAAACIgCACIgDABQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_17.setTransform(1077.2,104.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9FFD2").s().p("Ag9CuQADgbACggQADhCgKgeQgRgngDgPQgEgYAZghIAzhGIASgOQAYgMAcAKIAQAWQAOAggGAxQgFAngTA2QgLA3AXBYQgQAKgZAGQgWAGgTAAQgaAAgYgJg");
	this.shape_18.setTransform(1074.4,129.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#55463B").s().p("AghAcQAQgWABgDQAAgGAIgPIAHgRIAfgCIADAXIgKASQgMAUgLAJQgGAFgGAAQgKAAgLgKg");
	this.shape_19.setTransform(1077,204.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4BDAB").s().p("AgPAFIAAgQIAfABIAAARQgFADgGABIgFABQgIAAgHgHg");
	this.shape_20.setTransform(1078.3,199.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C1B15").s().p("AgIEVIgSirQgDgTgIgQQgQgdgBgNQgGgtgEgxQgIheAEg+QgCgjAAgWIAZAJQAkAGA5gJIAOAaQANAggHAeQgCAPgLAPQgQAXgBAdQgBAtgHA/QgBAcAEAXIACAJIADALQARAwgEAxQgBAKgDAJQgMAtgBApg");
	this.shape_21.setTransform(1076.3,172.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1C1B1B").s().p("AgiAlQgEgFAAgGQgBgIAFgGIAEgDIAEgCQAFgFAHgNQAAADgGALQgDAFADABIALABQAKABAFgDQAFgCADgHQAIgVAFgGQAGgGAEgCIACAIQABAEgDACIgMATIgBABIgGARQgEAMgFAGIgCAEg");
	this.shape_22.setTransform(1075.3,204.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C1B15").s().p("AggAcQAPgWAAgEQABgFAIgQIAHgQIAegCIAEAXIgKASQgMAUgLAIQgGAGgHAAQgJAAgKgKg");
	this.shape_23.setTransform(1075.6,203.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#595859").s().p("AgDAAIAAAAIABAAIAFABIABAAIgBABg");
	this.shape_24.setTransform(1068.3,105.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#252526").s().p("AgEABIABgDIAIACIgBADg");
	this.shape_25.setTransform(1066.7,111.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#252526").s().p("AAFApIgcgIQgGgCABgFIARg+QACgFAGABIAcAIQAFACgBAFIgRA+QgBAEgEAAIgCAAg");
	this.shape_26.setTransform(1067.4,108.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CEF9C5").s().p("AhJBOQgIgCgCgHQgJgfAKgRIBXhnIAuADIhWBvQACAAAbgTQAcgTAUgRIArggIADAJQABAOgGAeQgFAZgTATQhUApgWAAQgLAAgPgFg");
	this.shape_27.setTransform(1062.6,124);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FED5B5").s().p("AgjA2QAJgegEgNQgCgGAEgPIAEgPQAAgCAEgDQAFgDAEAAIAJAAQAEAAAAAFIABgCIADgSQADgRAEAAQADACgDAgQgDAeABABQACACAHgKQAHgIAHABQAEAAgFAGIgIAIIgOASIgLAMQgBACgGASIgGARg");
	this.shape_28.setTransform(1066.6,112.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#323436").s().p("ACdAzQgBgMADgUQAEgnAMgkQAKgbAUgjQAMgXgDgIQgHgNgJgEQgMgGgpgDQgwgDhbAHQhiAGgyAMQgvAMgWgDQgPgBgBgIQgBgEAKgBIAZgCIBsgOIAWgDQAZgEAUgBQCggFAOACQAiACAJADQAgAKgDAfQgBAHgHAPQgRAdgRAsQgKAYgFBoQgDA0gBAwIgNACg");
	this.shape_29.setTransform(781.8,166.7,0.591,0.591);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EFAB83").s().p("AgBAKQgJgQgBAAIAVgMIACASQACALgFAGQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgEAAgDgJg");
	this.shape_30.setTransform(628.5,145.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#827978").s().p("AApAZQAGgLgCgLQgFgVgpACQgVADgGADQgMAGgLASQgEABgCgCIgBgCQABgJAHgIQAPgTAegCQAlgBAOAMQANAKAAAbQgFAHgGAAQgDAAgEgDg");
	this.shape_31.setTransform(625.3,148);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#312F31").s().p("AgKgBIAFABIARgEIgGADIAAACIgQAEg");
	this.shape_32.setTransform(636.3,163.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AE865D").s().p("AgVAIIAAgXIArAIIAAAXg");
	this.shape_33.setTransform(623.9,162.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C2986C").s().p("AgVAHIAAgVIArAHIAAAWg");
	this.shape_34.setTransform(623.9,160);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D4A4A").s().p("AhzAdIAAhSQAAgGADgEQADgEAFABIDQAdQAFABAEAFQADAFAAAHIgCBWg");
	this.shape_35.setTransform(624.3,156.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AE865D").s().p("AAAAPQgHgBAAgLIAAgIQAAgEADgDQACgDACABQADAAACAEQADADAAAEIAAAJQAAAEgDADQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgBAAg");
	this.shape_36.setTransform(618.5,150.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AE865D").s().p("AAAAPQgHgBAAgKIAAgJQAAgEACgDQADgDACABQADAAADAEQADADAAAEIgBAJQAAAEgDADQAAABAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_37.setTransform(629.4,152.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2D2D2F").s().p("ABfB0IjCglQgEgBgDgFQgDgFgBgGIAAijQAAgHADgEQADgEAFABIDGAcQAFABADAFQAEAFAAAHIgECsQAAAGgDAEQgDADgEAAIgCAAg");
	this.shape_38.setTransform(624.3,161.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#312F31").s().p("AgNgEIATgEIAIALIgWAGIAAAAQgBAAgEgNg");
	this.shape_39.setTransform(619.6,149.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#827978").s().p("ABVB4IiygoQgEAAgDgFQgDgFAAgHIAAhQIgFgBIgQhVQAAgGALgEQAKgDAGABIAoAFIAAgBQAAgEACgCQACgDAEAAQAIABAAAKIAAABIBcANIAAgBQABgKAIABQADABACADQADAEAAAEIAAABIAsAGQAGABADAFQAEAFAAAHIgDBXIgFADIgCBSQAAAGgNAGQgJAFgGAAIgCgBg");
	this.shape_40.setTransform(625.2,160.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#312F31").s().p("AgMgDIARgEIAIAMIgYADg");
	this.shape_41.setTransform(630.7,150.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#525558").s().p("AgLAdQgKgFgEgMQgCgHAAgGIAAgeIAEABIAvAAIADAYQABAYgKAHQgHAFgEABIgGABQgFAAgHgDg");
	this.shape_42.setTransform(651.5,109.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgCABQgBgEADAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABAAgBABQAAABAAAAQAAABgBAAQgBAAgBABQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_43.setTransform(624.8,138.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#626568").s().p("AgZAKIgCgYQACACAXABQAYABAFgDQgCAQACAJIgUACIgHABQgRAAgIgFg");
	this.shape_44.setTransform(626.1,138.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#303335").s().p("Ag9DfQgDgrAJhZQAIhYAJgYQABhZAXhDIAVgwIA3AtIhIGPQgFADgIACQgHACgIAAQgLAAgMgDg");
	this.shape_45.setTransform(629.7,116.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EFAB83").s().p("AgRCYQgLgTgFgfQgDgRAFgUIAEgRIABAAIgCglQgBggADhCIAGhMQAmAEARADIgCAKQgMA5gOA3QgDANgBAWQgBAbAFABIADACIgBAAQAFAGAFANQAEAOgBAGIACARQABANgEAGQgEAGgHgOIgKgRQgFgCAEAVQABAMADARQACAPgIARQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgEAAgHgMg");
	this.shape_46.setTransform(627.3,137.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQAEAAgBAEQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAg");
	this.shape_47.setTransform(663.3,138.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#626568").s().p("AgFAOIgWgCQADgJgDgQQAHADAXgBQAWgBACgCIgBAYQgIAFgSAAIgFgBg");
	this.shape_48.setTransform(662.1,138.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#303335").s().p("AAYDgIgNgFIhJmPIA4gtIAVAwQAWBDABBZQAKAYAIBYQAJBZgEArQgLADgLAAQgHAAgIgCg");
	this.shape_49.setTransform(658.5,116.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EFAB83").s().p("AAEChQgIgRABgPQADgRACgMQADgVgFACIgJARQgHAOgEgGQgFgGACgNIACgRQgBgGAEgOQAEgNAFgGIAAAAIACgCQAGgBgBgbQgBgXgEgMQgOg3gLg5IgCgKQAQgDAngEIAFBMQADBCAAAgIgCAlIAAAAIAFARQAFAUgDARQgFAfgLATQgHAMgEAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_50.setTransform(660.8,137.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFAB83").s().p("AgQAAQAdAAAEgBQgGADgGAAg");
	this.shape_51.setTransform(648.1,78.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EFAB83").s().p("AgNAAIgDgBQADABAOAAIAQAAIgVACIgJgCg");
	this.shape_52.setTransform(639.5,78.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EFAB83").s().p("AAFgPIgEAUQgBAHgEAEQADgCAGgdg");
	this.shape_53.setTransform(639.7,82.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#525558").s().p("AAOhgIAVAxIgVAKIAFARIg1B1g");
	this.shape_54.setTransform(648.5,101.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#303335").s().p("Ag9DMIgDjuIAxjDIAyAKIAeALIgfDdIAYDZg");
	this.shape_55.setTransform(651.4,114.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#525558").s().p("AgRgUIAFgRIgVgKIAVgyIAvDDg");
	this.shape_56.setTransform(639.9,101);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#303335").s().p("AghANIggjZIBRgZIAwDHIACDvIh7AVg");
	this.shape_57.setTransform(637,114.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A7ABAB").s().p("AgfgCIALgWIAzAhIgYAQQgkgPgCgMg");
	this.shape_58.setTransform(641.3,92.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A7ABAB").s().p("AgdAGIAwgaIALAUQgCANgdAIg");
	this.shape_59.setTransform(647.1,92.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#71706F").s().p("AAaABQgJgIgKAEQgeAJgIgIIAagGIARAAQASACACAQQgCgGgEgDg");
	this.shape_60.setTransform(647.9,74.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#71706F").s().p("AgLgIQAKgBAHABQAWAEAEACQgIAJgdgKQgLgDgIAHIgHAJQACgPASgDg");
	this.shape_61.setTransform(639.7,74.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E9AF91").s().p("AgMgCIAGgDIADAAIADAAIALADQAFACAFADIgQgEIgLgBIgFACQgGACgDAEQACgGAGgCg");
	this.shape_62.setTransform(647.9,75.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E9AF91").s().p("AAMAAIgFgCIgLABIgQAEQAFgDAFgCIALgDIADAAIADAAIAGADQAGACACAGQgDgEgGgCg");
	this.shape_63.setTransform(639.7,75.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#818189").s().p("ABVA0IgGgnQgDgcgZgOQgWgOgfADQgZADgJADIgTALQgLAGgHAQQgDAHgBAGIgGAnQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQgKhNAYgCQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIAFgGQAIgGARgBQAOgBAMgEQALgFAHAAQA2gBARAXIABACQASAJgCAoIgCAfQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgBABQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_64.setTransform(643.6,69.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E6A680").s().p("AgNAFIABgCQADAEADgDQACgEACAAIACABQAJAAADgCQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIABAAQABADgCACQgDADgKgBQgDAAgBACIAAABQgCABgDAAg");
	this.shape_65.setTransform(644.9,81);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E6A680").s().p("AAFAFIAAgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgCAAQgJABgDgDIgBgDIAAgCIABAAIABAEQACACAJAAIADgBQACAAACAEQADADADgEIABACIgEABQgDAAgCgBg");
	this.shape_66.setTransform(643,81);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E7A37F").s().p("AgXAAIgHgGIA9AAQgIAMgXABQgNgBgKgGg");
	this.shape_67.setTransform(644,83.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E39F7B").s().p("AgeABIAVgEIACACQADABAEAAQAHAAADgDIAVAEQgJACgNAAIgJAAIgGABQgMAAgMgDg");
	this.shape_68.setTransform(644,83.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EFAB83").s().p("Ag1ACIAbgCIAagBQANgBAOACIAcACg");
	this.shape_69.setTransform(644,70.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EFAB83").s().p("Ag2ACIAcgCIAagBIAbABIAbACg");
	this.shape_70.setTransform(643.9,71.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E9AF91").s().p("AgDAJIgHgCQgIgCgDgDIAAAAIAAgBQAAgBAEgDQAHgGAJAAIAIABQAIADAHAEIABABIgBAAQgJAKgNAAgAgTABQAFAEALADQAHABAHgEQAGgDACgCQgGgEgHgCIgHgBQgNAAgFAIg");
	this.shape_71.setTransform(647.9,76.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3F3231").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAADgDAEQgCACgEAAQgCAAgDgCg");
	this.shape_72.setTransform(647.9,76.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgNAGIgHgEQACgGAJgDIAJgBQAHgCAOAKQgHAIgOABIgBAAQgEAAgIgDg");
	this.shape_73.setTransform(647.9,76.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E9AF91").s().p("AgPAFQgFgEAAgBIgBAAIABgBQAJgHAMgBQAQAAAFAKIABABIgBAAQgDADgHACIgHACIgEABQgHAAgJgFgAgSAAQACACAGADQAHAEAHgBIAGgCIAKgFQgGgIgNAAQgKAAgJAHg");
	this.shape_74.setTransform(639.7,76.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3F3231").s().p("AgFAHQgDgEAAgDQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_75.setTransform(639.7,76.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AABAJQgIgBgIgEIgFgEIAIgFQAJgEAEABIAJABQAJADACAGQgMAHgHAAIgBAAg");
	this.shape_76.setTransform(639.7,76.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FABD99").s().p("AgPB0QgKgEgNgJQgbgSgPgaIAAgDIgBgQIgBAAIgEgCIgCgCIgBAAIgDgQIgFggQAAgFACgCQACgBADADIACADIACAAQgDgOAAgQQAAgjATgJIATgPQAYgPAXAAIAEAAQAYgBAZAPQAMAIAIAIQATAJAAAjQAAAQgDAOIgBADIACgCQAHgHACACIABAAQADABgCAQIgBABIgHAjIAAABQgDADgEABIgBAAIgCAUIgBACQgGALgNAMQgTAUgVALIgCAAQgIADgIAAQgIAAgIgDg");
	this.shape_77.setTransform(643.9,77);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EFAB83").s().p("AgHAtQhAgDAQgQQAOgOAHgZIAEgXIAegHQAfgEAAALQABATAcA9IguABIgVAAg");
	this.shape_78.setTransform(644.1,88.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2C2C2B").s().p("AAVAhIg2gRQggACgEgEQgCgCgBgNIAAgOIAGgOIBIgDIAIASIArAVQARAHgCAMQAAAGgCABg");
	this.shape_79.setTransform(655.2,202.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2C2C2B").s().p("AgrAWQgDgKAMgRIAMgRIAFgTIA9AAIAAAsQAAALgCADQgEAJgQAIQgNAHACABIgkAAQgMgFgGgPg");
	this.shape_80.setTransform(633.3,203.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#525558").s().p("AAhFYIgEi0QgGi3gBgRIgQihQgcDGABAIIgWFQIhgAAIANm0IAYkBQAaARBjgFQAygDAsgGIANBVIAGBAQAEA0AAASIgLHKIgXANQgHAEgRAAQgTAAgegFg");
	this.shape_81.setTransform(643.6,165.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#24272A").ss(1,1,1).p("AhXjYICvAAIAAGxIivAAg");
	this.shape_82.setTransform(646.2,114.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhXDZIAAmxICvAAIAAGxg");
	this.shape_83.setTransform(646.2,114.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#603813").s().p("AgYC8QgFgSgFgpQgHg2AIgQQAIgQgXhWIgahUIgiAZQgCgFAAgJQAAgQAHgOQAYgsBXADQBCADAPBFQAJAngIBcQgEAuARBAQAMAwgGAAQgIgBgGgXQgIgfgJgMQgMgRgXgBQgNAAgYAIQgMAEgJAwIgJAnIAAAAg");
	this.shape_84.setTransform(697.6,90.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E43F3D").s().p("AgHADQAAgBAAAAQAAgBAAgBQAAAAABAAQAAAAAAgBIAPgEQgGAJgJACg");
	this.shape_85.setTransform(688,90.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EF5050").s().p("AgJAAQAAgCAFgBIAEAAQADADAHAAIgOAEQgFgDAAgBg");
	this.shape_86.setTransform(687.9,89.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#231F20").s().p("AAAAAQgEAAgGADQAEgFAGAAQAGABAFAEQgJgDgCAAg");
	this.shape_87.setTransform(689.3,83.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#231F20").s().p("AACgDQAFABAGACIgCABIgCAAIgGgCIgDAAIgEAAIgIAFQAFgKAJADg");
	this.shape_88.setTransform(689.3,84.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CCCCCC").s().p("AgBAEQgDgCAAgDIACgBQACgBACAAIABAAIABABIAAACQABADgDABIgBAAIgBAAIgBAAg");
	this.shape_89.setTransform(688.8,84.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgJADIgCAAIAHgFIAEgBIADAAIAEACIgBABIAGAAIgHAEIgFABg");
	this.shape_90.setTransform(689.2,84.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#442B1F").s().p("AAPADQgIgIgKAFIgKAEQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIACgBIANgDQAKgCAHALg");
	this.shape_91.setTransform(689.4,82.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FABD99").s().p("AgKBfQgDgOgDgFQgCgEgPADQgQAEgFAAQgJAAgFgIQgCgCACgGIABgHIgEgEQgCgDABgDIACgCIgDgCQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAABgBQADgCAAgIQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgDgCQgDgCAAgDIABgDQAPgLAAgTIABgxQAHgfAggMQAQgGAOAAIApAHQAqARACA1QABA0gUAZIgUAOQgIAVgFAdIgqAHIgCgSg");
	this.shape_92.setTransform(694.5,85.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2D510A").s().p("AgWACIArgZIAFApIgzAGg");
	this.shape_93.setTransform(687.7,119.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FABD99").s().p("AgdAgQgLAAgHgJQgGgIACgEQABgEAKgGIANgGIAMgGQAKgEABgCQABgBgGgBIgIgBQgIgCgDgIQgBgDAGACIAKAEQAHACAQgBQAHABARAKQAFACANgFIgCAXQgLgFgJAIQgLALgOADIgPAGQgKAEgHAAIgCAAg");
	this.shape_94.setTransform(682.2,121.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#376309").s().p("AgnC2QAfh0AAgIIAAhQQgNg/gDgFQgGgIgKgqQgLguAMABIAZAHQAaAMAKAWQAOAjALCWIgXBBQgaBDgRANg");
	this.shape_95.setTransform(704.5,114.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FABD99").s().p("AgWAzQgDgEACgMIACgPQAHgYgCgCQAAgCgEAFIgGAEQgIAGgIgCQgDgCAFgDIALgFQAFgEAKgQQAFgFATgHQAFgDAEgOIAZAGIgJAKQgJAMABAIQACARgHALIgFARQgDANgFAFQgIAKgKAAQgKAAgDgEg");
	this.shape_96.setTransform(699.9,136.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#13131F").s().p("AgHAEIgBgXIADAEQACAMADAFIAJASg");
	this.shape_97.setTransform(707.3,193.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#13131F").s().p("AgUAjQACgGgBgEIAAgDIAAAAIgBgCIAAgBIgBgEIAAAAIgBgDIgDgHIAAAAQADACAFAMQABAFADgBIAJgIQAGgIACgFQABgFgEgHQgJgTgCgKQgBgFACgHIAJAHIABACIABAEIgCgDIAAAXIARAQQAGAJACAJIABAEIgcAgQgOAAgEgRg");
	this.shape_98.setTransform(706.5,195.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#13131F").s().p("AgDAKIgKgRQgCgFgCgNIAjArIgGAIg");
	this.shape_99.setTransform(708.5,194.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#322423").s().p("AADAmQgEgMgCgDIgDgGQgDgSgHgMIgIgLIASgRQAGAFAFACIAGABQgCAHACAGQACAKAKASQADAHgBAFQgBAGgIAIIgJAIIgBAAQgCAAgBgEg");
	this.shape_100.setTransform(704.3,194);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#13131F").s().p("AgGgBIANgQIAAADIgHAOIgEASg");
	this.shape_101.setTransform(696.8,201.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#13131F").s().p("AggAcQgBgGAEgGIAHgHIABgCIABAAIACgGIAAAAIACgCIAAAAIABgDIABgDIAAgBQABADgCAFIgDAGQgBAEACABIALAAQAJAAAEgEQAEgDACgGQAGgWADgEQADgFAFgEIADALIgBABIgCAFIAAgEIgNAQIACAUQgDAOgDAEIgCAEIgmAEQgEgDgBgHg");
	this.shape_102.setTransform(694.5,202.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#13131F").s().p("AABAFIgCgKIACAFQABACgCAEg");
	this.shape_103.setTransform(697.7,199.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#13131F").s().p("AgFAHIAEgRIAHgQIgCA0IgHABg");
	this.shape_104.setTransform(696.9,202.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#554538").s().p("AgWAhQgDgBACgEIACgHQACgFAAgDIACgGQAJgOADgNIAAgMIAWAAQADALAFAGQgGAEgCAEQgDAFgHAVQgBAHgEADQgEADgKABIgHAAIgDAAg");
	this.shape_105.setTransform(695,200.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#554538").s().p("AggiLIAiADQAiAEAAAGIAAA1QAAAQgKApQgJAhgFAMQgCAHgKAzIgKAzIgZACg");
	this.shape_106.setTransform(698,183.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#322423").s().p("AhhhuIBjAAIBgDNIgXAQg");
	this.shape_107.setTransform(694.6,180.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#13131F").s().p("AgLDzIhQgPQgsiDAwi4QAPg6AWg5IASgoIgEgBIAGgEIgCAFQAYAIBcgUIARAyQAQA4gGAbQgLArgCFMIgPABQgdAAhBgMg");
	this.shape_108.setTransform(692.9,146.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#376309").s().p("AgQCKIgngEIAEgqQgBgVgCgYQgGgvgJgOQgJgOAFgaQAJgkAAgFQAAgQAWgNQALgHALgDIBFgDQALABADAEQAFAIAIBrIgLCKQgiARgqAAIgFAAg");
	this.shape_109.setTransform(694.9,109.7);

	this.instance_9 = new lib.Coca();
	this.instance_9.parent = this;
	this.instance_9.setTransform(141.8,147.5,1,1,0,0,0,2.8,9.1);

	this.instance_10 = new lib.Coca();
	this.instance_10.parent = this;
	this.instance_10.setTransform(212.4,147.2,1,1,0,0,0,2.8,9.1);

	this.instance_11 = new lib.Coca();
	this.instance_11.parent = this;
	this.instance_11.setTransform(360.2,149,1,1,0,0,0,2.8,9.1);

	this.instance_12 = new lib.Coca();
	this.instance_12.parent = this;
	this.instance_12.setTransform(326.6,145.9,1,1,0,0,0,2.8,9.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#323436").s().p("AABACQgJgLgBgFQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAAAAAIACAAQgGACAMAPQAGAHABAFQACAFgBABQAAgCgIgOg");
	this.shape_110.setTransform(396.7,164.6,1.026,1.026);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#626666").s().p("AAGBGQAFgggCgZQgCgOgMgsIgOgpIASAHQAHADADAbIAGAiQAFAjAAASQAAATgKARQgGAIgEAFg");
	this.shape_111.setTransform(403.4,161.3,1.026,1.026);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#626666").s().p("AgRAtIAjhdIgGAmIgEAZQgCASgCAFQgCAHgHADIgEABQgFAAgDgEg");
	this.shape_112.setTransform(403.6,147.1,1.026,1.026);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#626666").s().p("ABgEFQgYgEilgiQgVgFgTABIgdAEQgjAEgKASQgDAGAAAGQgCgNACgMIACgMQADgFAMgGQAZgNAygIQAxgIBWASQArAJAkAKQADAAAAgRQAAgSgEgJQgFgMgFgYQgGgcACgQQADgVAZhBQAWg0ARgkQAQggAAheQAAgeALgJQAFgEACADQADAFADAAQAGAAASgTQgHAKAAA5IgBBOQgDAQgmBfQgmBcgIAPQgGAJAMA/QALA/gFAJQgJANgEACIgGABIgOgBg");
	this.shape_113.setTransform(386.1,140.6,1.026,1.026);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#323436").s().p("Ag3CyQAshjAJgbQAOgtASguQAEgLgBgwQgBg2ADgQQADgSAIAAQAFAAABACQACADACARQABAMgDAuQgDAwACAPQABARgJAbQgLAjgCAJQgFAdgtBxQgJgFgcgEg");
	this.shape_114.setTransform(403.7,132.6,1.026,1.026);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#323436").s().p("AA9BeQgagHhFgHQhTgJgaAIQgdAIgOgSQgNgQAGgYQAFgTAWgEQALgCAKACIAlgDQAHAABrAWQBrAXANgCQARgCABgXQACgRgIgqIgJgzQgCgOAFABIAgAEIAUA2QASA9gKAkQgKAhgVALQgKAFgZABIgDAAQgYAAgmgJg");
	this.shape_115.setTransform(384.5,162.6,1.026,1.026);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#454748").s().p("AAQAGIgNgCIgXgJIARADQAMACAMAGg");
	this.shape_116.setTransform(403.2,182.3,1.026,1.026);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#717677").s().p("AgEgMIgDgEIgBAAIAFgCIAMAIIgEAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBADAFAYIgGABQAAgagDgEg");
	this.shape_117.setTransform(391,181,1.026,1.026);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3D4659").s().p("AgjBMQABgZAFgMIAthxIAIAAIAMgBQADgBgcA3IgdA8QgDAJAAAdg");
	this.shape_118.setTransform(385.7,187.1,1.026,1.026);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B5B7B8").s().p("AgkBMQgBgTADgNQABgEAOgfQAOgcADgNQACgOAKgPIALgMIgBgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAIgBIAIADQABAhgBgBIgUAGQgFAEgLAaIgQAkQgJARACAdg");
	this.shape_119.setTransform(387,187.2,1.026,1.026);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#252931").s().p("ABYAzQACgCgJgRQgFgKgNgGIgkgMIgbgJIgYgGQgRgFgegCIgagBIAAgfQAiAFBEAbQBEAZAKAMQAMAOADASg");
	this.shape_120.setTransform(401.1,184.9,1.026,1.026);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#252931").s().p("AhtAuQgBgDAAgFQgBgJAIgJQAJgJBWgaQBVgaAjgEIgKAhQg6gCgcAGQgWAGgdAIQgIADgeAHQgQAEgEAGQgJAOADAGg");
	this.shape_121.setTransform(375.9,184.1,1.026,1.026);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B5B7B8").s().p("Ah5AyIAAgKQAAgMAJgHQAOgNBWgaQBVgaAlgEIAMAFQhOAZgcAGQgWAGgeAIIgmAMQgPAFgEAGQgJAPgBAKg");
	this.shape_122.setTransform(375.4,183.8,1.026,1.026);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B3B5B8").s().p("AAAAlIAAhJIABAAIAABJg");
	this.shape_123.setTransform(390.7,175,1.026,1.026);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3D4659").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_124.setTransform(388.6,175.4,1.026,1.026);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#252931").s().p("AgMAkIgHgEIAAhGIAmAAIAABDQABAIgPABIgEABQgGAAgHgDg");
	this.shape_125.setTransform(388.9,175.4,1.026,1.026);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#454748").s().p("AgFAVQgHgCgCgIQgDgHADgIQACgIAGgFQAGgFAGACQAGACADAIQADAHgDAIQgCAIgHAFQgEADgEAAIgDAAg");
	this.shape_126.setTransform(364,192.4,1.026,1.026);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#454748").s().p("AgBAYQgIgBgEgHQgFgIABgJQABgJAGgHQAGgGAGAAQAIABAEAIQAFAHgBAJQgBAJgGAHQgFAGgGAAIgBAAg");
	this.shape_127.setTransform(383.2,198.6,1.026,1.026);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#040D1C").s().p("AAAAXQgIgBgGgDQgGgEgCgHQgCgIAEgHQADgIAKgCIAIgBIAAgEIAWAAIAAAMQABAMgBAFQgDAMgIADIgIABIgEAAg");
	this.shape_128.setTransform(362.9,191.2,1.026,1.026);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#040D1C").s().p("AgPAUQgOgHAHgVQACgIAJgCIAHgCIAAgEIAdAAIABANQAAANgBAFQgDAOgJACQgFACgGAAQgIAAgJgFg");
	this.shape_129.setTransform(381.8,197.7,1.026,1.026);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#454748").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_130.setTransform(411.4,192.8,1.026,1.026);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#454748").s().p("AgEANQgEgCgBgFQgCgFACgEQACgFAEgDQAEgCAEABQAEACABAFQABAFgCAEQgCAFgEADIgEABIgDAAg");
	this.shape_131.setTransform(406.9,184.8,1.026,1.026);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#454748").s().p("AgGATQgGgCgCgHQgDgIADgHQAEgIAGgEQAFgDAHACQAGACACAHQACAHgDAIQgDAIgHAEQgEACgDAAIgEgBg");
	this.shape_132.setTransform(379.8,184.8,1.026,1.026);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#040D1C").s().p("AgOATQgNgHAGgTQADgHAHgDIAHgBIAAgEIAbAAIABAMQAAANgBAEQgDAMgIADIgJABQgIAAgJgEg");
	this.shape_133.setTransform(379,183.8,1.026,1.026);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#040D1C").s().p("AgHAPQgGgDgBgHIAAgTIARAAIAAADIAFAAQAFACABAFQAEAMgJAEQgFADgFAAIgGAAg");
	this.shape_134.setTransform(406.4,184.5,1.026,1.026);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#040D1C").s().p("AgJATQgHgCgDgLQgBgEABgKIAAgLIAXAAIAAAEIAGABQAHACACAGQAFAQgLAHQgGADgHAAIgCAAIgHgBg");
	this.shape_135.setTransform(411.9,191.9,1.026,1.026);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#717677").s().p("AA7AWIgFgEIgQgEIgQgEIgOgFIhUgXIAAgEQCPAhAFAEQAHAGgDABIgFAAQgGgBgCACIgCAAIgCgBg");
	this.shape_136.setTransform(398.8,180.8,1.026,1.026);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#454748").s().p("AgFAVQgGgCgDgIQgDgHADgIQACgIAHgFQAFgFAGACQAGADADAHQADAHgDAIQgCAIgHAFQgEADgDAAIgEAAg");
	this.shape_137.setTransform(361.5,191.3,1.026,1.026);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#454748").s().p("AgBAXQgIAAgEgIQgFgHABgJQABgKAGgGQAGgGAGAAQAIABAEAIQAFAHgBAJQgBAJgGAHQgFAGgGAAIgBgBg");
	this.shape_138.setTransform(380.3,197.8,1.026,1.026);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#454748").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAFgGAFAAQAHAAAEAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgFAAgFgGg");
	this.shape_139.setTransform(413.6,192.2,1.026,1.026);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#454748").s().p("AgGATQgGgCgCgIQgDgHADgHQAEgIAGgEQAFgEAHACQAGACACAIQACAHgDAHQgDAIgHAEQgEADgDAAIgEgBg");
	this.shape_140.setTransform(376.8,183.6,1.026,1.026);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B7BBC1").s().p("AhRBpIgIgCQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQgDhlgIgUQgEgMgJgQIgHgNIgDgPQAAgWAigEIAFgBQAGgBBMADIAPAAQARABAUADIBCAJQALABACADIABAEQgBAEgCABQgKAGglgJQgZgGgzgDQgqgCgfACIgaACQgHABgDAFQgDACAAAFQAAAEAGAIQAGAJAKAdQALAfgCAZIADBAIABAEIgCAEIgDAAgAhVBhIABABIgBhEQgBgWgJgcQAHAZADBcgAhWhhIgFAAQgOACgHAEQgJAHABAOIABABQgBgEABgDIACgDQADgIAFgCQAHgEAUgBQAggCAwACQAeABAWADIgEgBIAAAAQgTgDgRgBIgPAAIhKgCIgHAAgABPhWQAhAJAIgEIg5gIIAQADg");
	this.shape_141.setTransform(391.8,156.6,1.026,1.026);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#B6BCC5").s().p("AgMAOQgbgDgMgFIgGgEIALgPQBRABAHgBQAGgCAKATQgGADgOADQgRAFgRAAIgQgBg");
	this.shape_142.setTransform(1242.7,113);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#473834").s().p("AgnBoQgIgHgIgMQgJgNgCgJIgGgkQgDgSgFAAQgGgegBgXIgFAGIgBADQgEgRAGgOQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgJAKQAAggAkgPQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgLAAQAbgRAwAFIABgBIAAgCQgHgDgKgDIgIgCQAnABAcANQASAIAJALIABABIABgBQgBgGgFgIIgEgHQAcANgDAfQATAPgDAYQgHAtgEAIQgCAAgDACQgGAEgBANQAAAhgCgHIgUAbIgJAKQgDAJgiARIgGABQgOAAgegZg");
	this.shape_143.setTransform(1242.5,95.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#473834").s().p("AgHgFQAGgBAFABQAOADADABQgGAFgSgGQgHgCgFAEIgFAGQACgJALgCg");
	this.shape_144.setTransform(1239.2,95.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#ECB697").s().p("AgLgBIAFgCIADAAIADAAIAKACQAFABAEADIgKgDIgJgBIgDAAIgHABQgFABgDAEQABgEAGgCg");
	this.shape_145.setTransform(1246.9,96.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#473834").s().p("AgFAAQAAgEAFgBQAGABAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_146.setTransform(1246.7,96.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgLAEIgHgCQACgFAIgBIAIgBQAGgBANAGQgGAGgNAAIgCAAIgJgCg");
	this.shape_147.setTransform(1246.8,96.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#ECB697").s().p("AALAAIgIgBIgCAAIgJABIgKADQAEgDAFgBIAKgCIACAAIADAAIAGACQAGACABAEQgEgEgEgBg");
	this.shape_148.setTransform(1239.2,96.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AABAGQgHAAgHgDIgFgDIAHgDQAJgDADABIAIABQAIABACAFQgLAEgGAAIgBAAg");
	this.shape_149.setTransform(1239.2,96.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E9AC83").s().p("AAFAFIgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAAQgIABgDgDIgBgFIABAAIABAEQACACAIgBIACAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQADADADgDIABACIgEABIgEgBg");
	this.shape_150.setTransform(1242.1,101.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E9AC83").s().p("AgMAFIABgCQADADADgDQAAgBABAAQAAgBAAAAQABAAABAAQAAgBABAAIABAAQAJABACgCIAAgEIACAAQAAAEgBABQgDADgJgBIgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIAAABIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_151.setTransform(1243.8,101.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E9A981").s().p("AgVAAIgGgFIA3AAQgHALgVAAQgMAAgJgGg");
	this.shape_152.setTransform(1243,104.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E5A47C").s().p("AgbABIATgDIACABIAGABQAHAAACgCIATADQgJACgKAAIgJAAIgGAAQgLAAgKgCg");
	this.shape_153.setTransform(1243,103.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D6D8D8").s().p("AhjC4QgNgBgCisIABirIASgPQAWgOAYAJIAZADQAbAFANAIQANAJAsCbQAXBNATBMIgmAWIgqhjQgphjgBgJQgBgNgDAvQgEAvACARIAIBmQhCAQgYAAIgEAAg");
	this.shape_154.setTransform(1253.1,131.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D6D8D8").s().p("AgBCxIgsgJIAIhmQACgRgEgvQgDgvgBANIgYiEQAVgOAtgCQAXgJAWAOQAMAGAGAJIAFCrQADCsgNABIgEABQgQAAgmgIg");
	this.shape_155.setTransform(1237.3,131.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111011").s().p("AheE3IgWgMIgJmdQAAgYAJhgIALhNIBWAIQBYAFAXgQIAWDoIAMGIIhWAAIgUkvQAAgGgYiyIgPCQQgBAQgFCkIgDCiQgcAGgRAAQgPAAgGgEg");
	this.shape_156.setTransform(1243.3,179);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#E8C496").s().p("AAAAKQgIgKACgPIADgCQAEgBAEAHIADAeQgFgDgDgGg");
	this.shape_157.setTransform(1234.6,99.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E8C496").s().p("AgEgLQAEgHAEABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQACAPgIAKIgIAJg");
	this.shape_158.setTransform(1251.2,99.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E8C496").s().p("AgbBtQgegUgRglQgFgCgEgGQgIgMACgPIAEgCQAEgBAEAIQgGgRgDgUQgFgrARgVIASgTQAYgTAdgDIAIAAQAcADAYATQAMAKAGAJQARAVgFArQgEAUgFARQAEgIAFABIADACQACAPgIAMIgJAIQgRAlgfAUIgbAMQgLgCgQgKg");
	this.shape_159.setTransform(1242.9,96.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E0B78B").s().p("Ag1AoQAZg3ABgRQABgKAaAEQAOACAOAEIAEAVQAGAWANANQAOAOg6ACg");
	this.shape_160.setTransform(1242.8,110.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D6D8D8").s().p("Ag8gkQgCgsACgnQAGhMAYAhQAYAiAkCOQASBHAOBBIgmAWg");
	this.shape_161.setTransform(1258.3,131.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E0B78B").s().p("AAhBAQgEgBgJgHIgLgLQgQgTgCAAQgCgBABAGIACAIQAAAKgHAFQAAAAgBAAQAAAAgBAAQAAgBAAgBQAAgBAAgCIABgMQAAgDgEgIIgDgMQgBgEACgKIACgNQAAgGgbgsIAlAJIADARQAGARAGAEQAOAHAHANIALANQAIALACAHQADALgGAJQgGAJgFAAIAAAAg");
	this.shape_162.setTransform(1263.9,149.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D6D8D8").s().p("Ag+BeQgHgBgDgIQgIgfAKgRIBhiHIAxARIhjCBIAPgTQARgYARgMQALgJAMgGIAQAAQAPAFgGAdQgFAaACAUQhVApgWAAIgBAAQgJAAgQgFg");
	this.shape_163.setTransform(1225.6,117);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E8C496").s().p("AgXAmQgBgBAEgMQAFgNgBgDQgLgQABgLIACgWIABgCIABgDIACgBIACAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAABIgBAEIAAABIgCAGIAdANIACADIACgBQABAAABgFIAAgBIABgHQAAgJADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAAABIABAAIgBAHIACASIAAADIgCAKIgBANIgWAnIgBAAQgDAAgVgJg");
	this.shape_164.setTransform(1230.7,104.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#252526").s().p("AgCAAIAAAAIAAAAIAFAAIABABIgBAAg");
	this.shape_165.setTransform(1232,96.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#252526").s().p("AgEABIABgDIAIACIgBADg");
	this.shape_166.setTransform(1230.5,102.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#252526").s().p("AAEAkIgZgGQgFgCABgFIAPg2QACgGAFACIAZAGQAFACgCAFIgPA2QAAAFgDAAIgDgBg");
	this.shape_167.setTransform(1231.2,99.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#5F4A38").s().p("AgFATQgSgBgDgCQgDgCAAgOIABgMIASgIQAKAFAdADQACAfgLABIgFABIgUgCg");
	this.shape_168.setTransform(1252.5,211.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#5F4A38").s().p("AgFAQQgSgCgDgCQgDgBAAgNIABgOIAEABQALAFAqgGQACAggLABIgFAAIgUgBg");
	this.shape_169.setTransform(1237.2,211.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#5F4A38").s().p("AgbgGIAPgHQAPgJACABQAFgBARAUIgoAZg");
	this.shape_170.setTransform(1240.8,211);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#5F4A38").s().p("AgbgGIAPgHQAPgIADAAQAEAAARATIgoAYg");
	this.shape_171.setTransform(1256.1,211);

	this.instance_13 = new lib.Pisarron_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1254.7,114.1,0.375,0.375,0,0,0,113.6,188.7);

	this.instance_14 = new lib.Maseta1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(994.5,149,0.346,0.346,0,0,0,64.3,87.2);

	this.instance_15 = new lib.Telefono();
	this.instance_15.parent = this;
	this.instance_15.setTransform(834.6,140.2,0.435,0.435,0,0,0,27.8,22.5);

	this.instance_16 = new lib.Coca();
	this.instance_16.parent = this;
	this.instance_16.setTransform(853.8,140.4,1.13,1.13,0,0,0,2.8,9.1);

	this.instance_17 = new lib.Computadora_de_lado();
	this.instance_17.parent = this;
	this.instance_17.setTransform(892.1,122.2,1.13,1.13,0,0,0,18.9,23.2);

	this.instance_18 = new lib.Mesa_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(863.6,205.9,0.324,0.364,0,0,0,154,160.5);

	this.instance_19 = new lib.Silla_de_lado();
	this.instance_19.parent = this;
	this.instance_19.setTransform(784.7,162.9,1.13,1.13,0,0,180,25.3,42.6);

	this.instance_20 = new lib.Maseta1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(66.9,144.4,0.4,0.4,0,0,0,64.2,87.1);

	this.instance_21 = new lib.Maseta_3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(27,135.1,1,1,0,0,0,22.9,42.5);

	this.instance_22 = new lib.Maseta_3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(574.6,134.6,1,1,0,0,0,22.9,42.5);

	this.instance_23 = new lib.Pantalla_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(1326.3,-34.8,1,1,0,0,0,659.7,-37.6);

	this.instance_24 = new lib.Libros();
	this.instance_24.parent = this;
	this.instance_24.setTransform(476.8,135.9,1,1,0,0,0,20.7,9.8);

	this.instance_25 = new lib.Maseta_2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(443.8,136.4,1,1,0,0,0,7.3,8.4);

	this.instance_26 = new lib.Maseta_2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(520.9,89.2,1,1,0,0,0,7.3,8.4);

	this.instance_27 = new lib.Frasco();
	this.instance_27.parent = this;
	this.instance_27.setTransform(502.1,91.1,1,1,0,0,0,4.9,6.7);

	this.instance_28 = new lib.Frasco();
	this.instance_28.parent = this;
	this.instance_28.setTransform(491.2,91.1,1,1,0,0,0,4.9,6.7);

	this.instance_29 = new lib.Frasco();
	this.instance_29.parent = this;
	this.instance_29.setTransform(480.6,91.1,1,1,0,0,0,4.9,6.7);

	this.instance_30 = new lib.Cafetera();
	this.instance_30.parent = this;
	this.instance_30.setTransform(455,78,0.337,0.337,0,0,0,36.5,49.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#CCD1D0").s().p("Ah4A4QAVgLAigQQArgVAGABQAGABAHgKQAMgPAKgJQAYgWAgghIAegCQAaAGgRAoQg3AtgeARIgTARQgIAFgrANIhEAUg");
	this.shape_172.setTransform(934.8,132.4,1.13,1.13);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E2BD90").s().p("AgkAaIgEgGIgDgIQgCgJACgFIADgGQAEgGAGgEIAKgGQAMgDAYACQAGAAAHADQAGADAEgBIAGAAIAAAQQgGAAgFACIgGADQgKAHgQgBQgJgBgIAEQgIADgCAHQgDAFgDABIgDABIgCgBg");
	this.shape_173.setTransform(915.7,141.3,1.13,1.13);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E2BD90").s().p("AgDgJQADgGADABQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQACANgHAJIgGAHg");
	this.shape_174.setTransform(942.5,106.7,1.13,1.13);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#E6A37E").s().p("AgGADIgCgDIARgDQgFAFgEABIgDABIgDgBg");
	this.shape_175.setTransform(932.5,111.1,1.13,1.13);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E19D7A").s().p("AgHABIgBgDIAHAAQAHAAADACIgPADIgBgCg");
	this.shape_176.setTransform(932.5,110.7,1.13,1.13);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3F3231").s().p("AgjAMQgKgCAAgIIAAgBIgDgBQgBAAABgHIADgCIACAAIgDACQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQACgGAIAAIAcAAQAGACACADIAwAEIgBAFIgugDIAAACQAAAGgIAEgAgpgFIAAAIQAAAEAFACIAfAAQAEgBAAgFIAAgIQgBgCgDAAIggAAg");
	this.shape_177.setTransform(936.7,105.2,1.13,1.13);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#3F3231").s().p("AAEgCQgQAGgEgFIAOgDIAIAAQAKABABAIQgFgJgIACg");
	this.shape_178.setTransform(933.9,103.8,1.13,1.13);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#3F3231").s().p("AgEAAQAAgEAEABQAFgBAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_179.setTransform(933.3,105.1,1.13,1.13);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgJAEIgGgCQACgEAHgBIAGgBQAGgBAKAFQgFAFgLAAIgBAAIgIgBg");
	this.shape_180.setTransform(933.9,105.1,1.13,1.13);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#3F3231").s().p("AgMgGIAHAGQAJAEAJABIgWACg");
	this.shape_181.setTransform(940.2,95.2,1.13,1.13);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3F3231").s().p("AgMgGIAIAGQAIAEAJABIgWACg");
	this.shape_182.setTransform(937,94.8,1.13,1.13);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#3F3231").s().p("AgMgFIAHAFQAJAEAJABIgWABg");
	this.shape_183.setTransform(934.2,95.1,1.13,1.13);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#3F3231").s().p("AAaALIgTgIIgdgUQgfgUgGADIgKgQQgLgRAAgEQAAgDAFABQALACAKgBIAwgEQAggDALAFQASAGAMARQAQAXgDAhQgCAggVAXIgUASIgLhDg");
	this.shape_184.setTransform(939.2,104,1.13,1.13);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A9B1BA").s().p("AgfAKIA7geIAGAVQgDAKhAAKg");
	this.shape_185.setTransform(940,117,1.13,1.13);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CCD1D0").s().p("AgCClIhCgEQgHivgEgYQgCgPAWguIAWgrIBIgWIAJAHQALAJAIAOQAZAsgMBEQgbCOAJAiQADALgzAAIgMAAg");
	this.shape_186.setTransform(939.7,135.5,1.13,1.13);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E2BD90").s().p("AgPBVQADgPgCgEQgCgEgNADQgPADgEAAQgIAAgEgGQgCgCABgFIABgHIABgCIgDgIQgCgEAAgDIABgJIgDgBQgEABgCgCQgDgCAAgCIAAgEQAFgMAFgHIAEgHIAAgsQAHgbAdgLQAOgGAMAAIAlAGQAlAQABAvQACAvgSAWIgSAMQgHASgEAaIgyALIAEgSg");
	this.shape_187.setTransform(938.8,106.8,1.13,1.13);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CCD1D0").s().p("Ah4A4IA3gbQArgVAGABQAFAAAIgJQAMgPAKgJQAXgWAgghIAfgCQAaAGgRAoQg3AtgeARIgUARQgHAFgsANIhDAUg");
	this.shape_188.setTransform(930.6,127.9,1.13,1.13);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E2BD90").s().p("AgkAaIgFgGQgBgBgBgHQgCgIACgGIADgGQAEgGAFgEIALgFQAFgCALAAQALgBAJABQAFABAIADQAGACAEgBIAGABIAAAQQgGgBgGADIgFACQgKAIgQgCQgXgBgFAOQgBAEgEACIgDABIgCgBg");
	this.shape_189.setTransform(911.8,137.1,1.13,1.13);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000008").s().p("AhOC6IgokIIAFghQAQghA1gCQA0gCgBgRIgLgRIBxgEIAFAqQAFAsAAAKQAAASgsAWQg0AZgxgUIARDog");
	this.shape_190.setTransform(933.8,174.6,1.13,1.13);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#1F2226").s().p("AhWCtQgRgygQg9Qgih5ABg3QAAg2BUgIQArgDAzAGQAPgBATgFIBeAMQghAogJAJQgFAFgmAVIgpAXQgKAGgmAAQgJAAgbgDIgYgDIAgBoIALAxQAMAtAHAOQAIANgBAJIgCAMQgBADgLAAQgRAAgsgHg");
	this.shape_191.setTransform(925.2,174.1,1.13,1.13);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#564437").s().p("Ag/AkQgCgBAAgHQgBgNAPgHQANgHAagRIAHgSIBCADIAFAPQABAcgEAEQgDADgdgBIgxASg");
	this.shape_192.setTransform(925.8,199.4,1.13,1.13);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#564437").s().p("Ag/AjQgBAAgBgHQgBgMAPgIIAogXIAHgTIBBADIAFAPQABAcgEAEQgDADgdgCIgxASg");
	this.shape_193.setTransform(916.9,197.8,1.13,1.13);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgOAEQgRgBgBgGIA/gBIACAEQgKAEgMAAIgMABIgNgBg");
	this.shape_194.setTransform(897.6,150.1,1.13,1.13);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgfAAQAAgFAfABQAggBAAAFQAAAFggABQgfgBAAgFg");
	this.shape_195.setTransform(897.5,149.5,1.13,1.13);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#AEB1B1").s().p("AgfAAQAAgEAfAAQAgAAAAAEQAAAFggAAQgfAAAAgFg");
	this.shape_196.setTransform(897.5,155.2,1.13,1.13);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#684D4C").s().p("AgqA9QgFAAgCgCQgWgPAAgcIAAhBQAAgFAEgDQADgDAEAAIB4AAQAGAAADAEQADAEgBAFIAAA1QACAQgEAOQgHAZgXAAg");
	this.shape_197.setTransform(1081.1,78.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#509B5C").s().p("AgKAVIgBgJQABgKADgGIAKgRIAFARQAFAMgCAHQgBAHgHAAg");
	this.shape_198.setTransform(1078.7,69.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A0C5A7").s().p("AgIAUQAAgMAAgJQABgGACgHIADgFIAFAJQAEAEAAAEQABAGABAQg");
	this.shape_199.setTransform(1080.2,69.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A0C5A7").s().p("AgHAUQgBgMABgJQAAgGACgHIADgFIAFAJQAEAEAAAEQABAGABAQg");
	this.shape_200.setTransform(1084.2,69.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#509B5C").s().p("AgLAPQgBgFAEgPIAFgQIAKAQQAGALgCAPIgOABQgGAAgCgHg");
	this.shape_201.setTransform(1082.6,69.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A0C5A7").s().p("AgHAUQgCgMABgJQABgGADgHIACgFIAGAJQADAEAAAEQACAGAAAQg");
	this.shape_202.setTransform(1077.9,69.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#509B5C").s().p("AgLAWQAAgCADgLQACgHAIgLIAIgMIACAFQABAHgCAIQgBANgIAKg");
	this.shape_203.setTransform(1086,69.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#509B5C").s().p("AgBAWQgIgKgCgNQgBgJABgGIACgFIAIALQAIAMACAHQADALAAACg");
	this.shape_204.setTransform(1076.1,69.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#ADAAD4").s().p("AgLAWQAAgCADgLQACgHAIgLIAIgMIACAFQABAHgBAIQgCANgIAKg");
	this.shape_205.setTransform(1084.7,69.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#ADAAD4").s().p("AgBAWQgIgKgBgNQgBgJABgGIABgFIAIALQAIAMACAHQADALAAACg");
	this.shape_206.setTransform(1077.3,69.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#AEB1B1").s().p("AhkALIAAgVIDJAAIAAAVg");
	this.shape_207.setTransform(902,153.3,1.13,1.13);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AjADCIAAmDIGBAAIAAGDg");
	this.shape_208.setTransform(1081.3,75.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C4B49B").s().p("AivDQQgNAAgJgJQgJgKAAgNIAAlfQAAgNAJgJQAKgKAMAAIFeAAQANAAAKAKQAJAJAAANIAAFfQAAANgJAKQgKAJgNAAg");
	this.shape_209.setTransform(1081.4,75.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AjsDxIAAnhIHZAAIAAHhg");
	this.shape_210.setTransform(840,80.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C4B49B").s().p("Aj5D7IAAn1IHzAAIAAH1g");
	this.shape_211.setTransform(840.2,80.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#24272A").s().p("AAkBLQgTAAgRABIAAAAQg/gEgVAJQACgYAFgYQAKgxAUgHQAegKAFgMIABgaIACgFQACgEAHAAIAAAAQAMAAAAAJIABAaQAFAMAeAKQAUAHALAxQAEAYABAYQgMgGgkAAg");
	this.shape_212.setTransform(1317.8,26.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#BDB971").s().p("AgWAWQgKgJAAgNQAAgMAKgJQAJgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgJgJg");
	this.shape_213.setTransform(1317.8,34.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#24272A").ss(2).p("AAABgIAAi/");
	this.shape_214.setTransform(1317.7,10.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#24272A").s().p("AAkBLQgUAAgQABIAAAAQg/gEgUAJQABgYAFgYQAKgxAUgHQAegKAFgMQABgDAAgXIABgFQAEgEAGAAIAAAAQALAAABAJIABAaQAFAMAeAKQAUAHALAxQAFAYABAYQgNgGgkAAg");
	this.shape_215.setTransform(1168.6,26.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#BDB971").s().p("AgWAWQgKgJAAgNQAAgMAKgJQAJgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgJgJg");
	this.shape_216.setTransform(1168.6,34.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#24272A").ss(2).p("AAABgIAAi/");
	this.shape_217.setTransform(1168.5,10.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#24272A").s().p("AAlBLQgUAAgRABIAAAAQg/gEgUAJQABgYAFgYQAKgxAUgHQAggLADgLQABgDAAgXIACgFQADgEAGAAIAAAAQALAAABAJIABAaQAFAMAeAKQAUAHAKAxQAFAYABAYQgMgGgjAAg");
	this.shape_218.setTransform(1025.1,26.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#BDB971").s().p("AgWAWQgKgJAAgNQAAgMAKgJQAJgJANAAQANAAAKAJQAKAKAAALQAAANgKAJQgKAJgNAAQgNAAgJgJg");
	this.shape_219.setTransform(1025.2,34.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#24272A").ss(2).p("AAABgIAAi/");
	this.shape_220.setTransform(1025.1,10.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#24272A").s().p("AAlBLQgUAAgRABIAAAAQg/gEgUAJQABgYAFgYQAKgxAUgHQAegKAFgMQABgDAAgXIACgFQADgEAGAAIAAAAQALAAABAJIABAaQADALAgALQAUAHAKAxQAFAYABAYQgNgGgiAAg");
	this.shape_221.setTransform(881.6,26.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#BDB971").s().p("AgWAWQgKgJAAgNQAAgLAKgKQAKgJAMAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgMAAgKgJg");
	this.shape_222.setTransform(881.7,34.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#24272A").ss(2).p("AAABgIAAi/");
	this.shape_223.setTransform(881.6,10.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#24272A").s().p("AAkBLQgUAAgQABQg/gEgUAJQAAgYAGgYQAKgxAUgHQAegKAFgMIABgaIACgFQADgEAGAAQALAAABAJIABAaQAFAMAeAKQAUAHALAxQAEAYABAYQgMgGgkAAg");
	this.shape_224.setTransform(738.2,26.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#BDB971").s().p("AgWAWQgKgJAAgNQAAgMAKgJQAJgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgJgJg");
	this.shape_225.setTransform(738.2,34.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#24272A").ss(2).p("AAABgIAAi/");
	this.shape_226.setTransform(738.1,10.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#24272A").s().p("AAlBLIglABIAAABIAAAAIAAgBQhAgEgUAKQABgYAFgZQAKgxAVgHQAfgKAEgMQABgDAAgXIACgFQADgEAGAAIAAAAQALAAABAJIABAaQAEAMAfAKQAVAHAKAxQAFAZABAYQgNgHgjAAg");
	this.shape_227.setTransform(587,26.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#BDB971").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQAOAAAKAJQAJAJAAAMQAAAMgJAKQgKAJgOAAQgNAAgKgJg");
	this.shape_228.setTransform(587.1,34.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#24272A").ss(2).p("AAABhIAAjB");
	this.shape_229.setTransform(586.9,9.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#24272A").s().p("AAlBLIglABIAAABIAAAAIAAgBIgkgBQgjAAgNAHQABgYAFgZQAKgxAVgHQAegKAFgMQABgDAAgXIACgFQACgEAHAAIAAAAQALAAABAJIABAaQAEAMAfAKQAUAHALAxQAFAZABAYQgNgHgjAAg");
	this.shape_230.setTransform(385.9,26.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#BDB971").s().p("AgWAWQgKgKAAgMQAAgMAKgJQAJgJANAAQAOAAAJAJQAKAJAAAMQAAANgKAJQgJAJgOAAQgNAAgJgJg");
	this.shape_231.setTransform(386.3,34.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#24272A").ss(2).p("AAABhIAAjB");
	this.shape_232.setTransform(385.9,9.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#24272A").s().p("AAlBLIglABIAAABIAAAAIAAgBIgkgBQgjAAgNAHQABgYAFgZQAKgxAVgHQAfgKAEgMQABgDAAgXIABgFQAEgEAGAAIAAAAQALAAABAJIABAaQAEAMAfAKQAVAHAKAxQAFAZABAYQgNgHgjAAg");
	this.shape_233.setTransform(143.2,26.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#BDB971").s().p("AgXAWQgJgJAAgNQAAgMAJgJQAKgJANAAQANAAALAJQAJAJAAAMQAAAMgJAKQgLAJgNAAQgNAAgKgJg");
	this.shape_234.setTransform(143.3,34.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#24272A").ss(2).p("AAABhIAAjB");
	this.shape_235.setTransform(143.3,9.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#454748").s().p("AgFAUQgHgCgCgHQgDgHACgIQADgIAGgFQAGgFAGACQAGACADAIQADAHgDAHQgCAJgHAFQgEADgDAAIgEgBg");
	this.shape_236.setTransform(921.3,201.5,1.13,1.13);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#040D1C").s().p("AAAAXQgIgBgGgDQgGgEgCgHQgCgIAEgHQADgIAKgCIAIgBIAAgEIAVAAIABAMQABAMgCAFQgCAMgIADIgJABIgDAAg");
	this.shape_237.setTransform(920.1,200.2,1.13,1.13);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#454748").s().p("AgFAVQgHgDgCgHQgDgHACgIQADgIAGgFQAGgFAGACQAGADADAHQADAHgDAIQgCAIgHAFQgEADgDAAIgEAAg");
	this.shape_238.setTransform(918.5,200.3,1.13,1.13);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D77A54").s().p("AjQDRIAAmgIGhAAIAAGgg");
	this.shape_239.setTransform(614.1,76);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#4A9868").s().p("AglA0QgCgyAGgzQALhpAigMIgMA8QgHBAARAXQATAWAHAWQADAKAAAGIgmB+g");
	this.shape_240.setTransform(619.5,125);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#109773").s().p("AhjATQAfhMA9gUQA8gVAnAKQAUAFAIAJQgaACgdAHQg6AOgQAYQgSAagHAwQgDAYABAUIhTABQAEgjAQgmg");
	this.shape_241.setTransform(631.7,135);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#149848").s().p("AhhCRQALgvAQg0QAghpAcggQAbghArgNQAWgHAPABQgjAPgiBBQgRAggKAeIgUCSg");
	this.shape_242.setTransform(628.7,129.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#149848").s().p("AAUCRIgViSQgKgegRggQgihBgigPIAkAGQArANAcAhQAcAgAgBpQAQA0ALAvg");
	this.shape_243.setTransform(610.6,129.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#109773").s().p("AAlBbQAAgUgDgYQgGgwgSgaQgPgYg7gOIg3gJIAbgOQAogKA8AVQA9AUAgBMQAQAmADAjg");
	this.shape_244.setTransform(605.1,135);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#D77A54").s().p("AidijIE7AAIgoFEIjXADg");
	this.shape_245.setTransform(618.2,160.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D77A54").s().p("AggBRIApinIAYAGIgpCng");
	this.shape_246.setTransform(492.9,41.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FAB16A").s().p("AgaBKIAliXIAQAEIglCXg");
	this.shape_247.setTransform(495.7,41.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#684D4C").s().p("AgOBeIAOi9IAPACIgOC9g");
	this.shape_248.setTransform(499.3,39.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#984439").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_249.setTransform(501.8,40.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#D68E79").s().p("AgJBeIAAi7IATAAIAAC7g");
	this.shape_250.setTransform(504.1,39.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D77A54").s().p("AgUBDIAAiGIApAAIAACGg");
	this.shape_251.setTransform(507.7,42.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#D77A54").s().p("AggBRIApinIAXAGIgnCng");
	this.shape_252.setTransform(514.2,41.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FAB16A").s().p("AgaBKIAliXIAQAEIglCXg");
	this.shape_253.setTransform(517,41.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#684D4C").s().p("AgOBeIAOi9IAPACIgOC9g");
	this.shape_254.setTransform(520.6,39.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#984439").s().p("AgJBWIAAirIATAAIAACrg");
	this.shape_255.setTransform(523.1,40.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D68E79").s().p("AgJBeIAAi7IATAAIAAC7g");
	this.shape_256.setTransform(525.4,39.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D77A54").s().p("AgUBDIAAiGIApAAIAACGg");
	this.shape_257.setTransform(529,42.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E62F33").s().p("AgMAFIAAgIIAFgBIARAAIACAAIABABIAAAIg");
	this.shape_258.setTransform(212.1,138.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#2B2E32").s().p("Ah4gFQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIAKADQALADAqADQAsABAtAAQAnAAAngIIAMgDIgWAGQgxAMgqADIgNAAQgvAAhGgQg");
	this.shape_259.setTransform(225.6,158.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#2B2E32").s().p("Ah6gEQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIALADQAKADArACQArACAtAAQAnAAAngJIARgEIgaAIQgyAMgqACIgNABQgwAAhEgQg");
	this.shape_260.setTransform(336.7,157.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#252931").s().p("AAAABIABgEIAAAIg");
	this.shape_261.setTransform(127.4,171.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#626666").s().p("AgIBKQgLgSAAgSQAAgTAFghIAGgjIACgQQADgMAFgCQAKgDAIgEIgOApQgMAsgCAOQgCAYAFAhIAGARQgEgFgFgIg");
	this.shape_262.setTransform(108.2,162.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#626666").s().p("AAGAwQgGgDgDgHQgDgIgFgoIgHgmIAlBdQgEAEgFAAIgEgBg");
	this.shape_263.setTransform(108,148.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#717677").s().p("AAAACIgBgCIAAgBQABAAACADg");
	this.shape_264.setTransform(124.6,179);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#717677").s().p("AAAgBIgEAAIAJgFIAAAFQABABgCAHQgCgHgCgBg");
	this.shape_265.setTransform(123.8,180.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#252931").s().p("AgEAmQgJAAgEgFIgCgEIAAhCIAmAAIAABGQgHAFgMAAIgEAAg");
	this.shape_266.setTransform(122.4,175.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#717677").s().p("AgEgBQABgBgBgEIAJAFIgFAAQgBAAgBAEIgBAEg");
	this.shape_267.setTransform(383.2,179.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#717677").s().p("AgEAFQgLgBgEgEIgBgDIACgCIAAABIAEADQAFACAHABQALABAMgIIAAAFQgHAGgMAAIgGgBg");
	this.shape_268.setTransform(384.5,178.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#D2D6D7").s().p("AAKgbIgJA2IgKABQAIgsALgLg");
	this.shape_269.setTransform(378.2,191.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#323436").s().p("ABWAcQgBgcAMgeQAFgPALgUQAHgMgCgEQgEgIgFgCQgHgDgWgCQgbgBgxADQg2AEgbAHQguALgBgMQgBgCAGAAIANgCIBIgJIAZgCIAygCIAtgBIAYADQARAGgCARQAAAFgEAHQgKASgJAWQgIAVgCBoIgHACg");
	this.shape_270.setTransform(119.4,161.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#B7BBC1").s().p("ABPBoQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIABgEIADhAQgCgZALgfQAJgbAHgKQAGgKAAgDIgDgHQgEgFgGgBIgagCQgegBgrACQgyACgaAGQgnAJgIgGQgDgCAAgDIABgEQACgDALgBIBCgIIAMgDIAZgCIAPgBQBMgCAGABIAFABQAhAEABAWIgDAOIgIAOIgMAcQgIAUgEBlQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgIACIgBAAgABWAeIgBBDIABAAQADhcAHgZQgJAcgBAWgABTheQATABAIADQAFAEADAHIABADQACADgBAEIABgBQABgOgKgHQgGgEgOgBIgFgBQgHgChKAEIgPAAIgkAEIgEAAQAWgCAegBIAsgBIAkABgAh3hRQAIADAhgHIAQgEIAEAAIACgBIABAAIACAAIAEgBIgEABIgCAAIgBAAIgCABIgEAAg");
	this.shape_271.setTransform(119.6,161.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#323436").s().p("AgIAMQADgGAFgGQAMgPgGgCIACAAQAAAAABAAQAAABAAAAQAAABAAAAQABABgBABQAAAEgJALIgIAQQgBgBABgFg");
	this.shape_272.setTransform(114.7,165.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#626666").s().p("AhzEFQgEgCgIgNQgGgIAMg/QALhAgFgJQgJgPgmhcQgmhfgCgQIgBhOQgBg6gHgJIAJAJQALAKAFAAQACAAAEgEQABgEAGAEQALAJAAAfQAABeAQAgQARAjAVA0QAaBBACAVQACAQgGAdQgFAXgFANQgDAIAAASQAAARADAAIBPgTQBVgRAyAHQAxAIAZANQANAGACAFIADAMQABANgCAMQAAgGgDgGQgJgSgkgEIgdgDQgTgBgVAEQitAkgPACIgOABIgHgBg");
	this.shape_273.setTransform(125,142);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#323436").s().p("AgfAtIgNgsQgJgaACgSQABgQgDgvQgCgvABgLQACgRABgDQABgCAFAAQAJAAADATQADAQgBA1QgBAwAEAMIAfBaQAJAbAsBjQgRACgMAEIgHADQguhxgFgdg");
	this.shape_274.setTransform(107.9,134.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#323436").s().p("Ah9BnQgZgBgLgFQgUgLgKgiQgKgkASg8IAUg2IAfgFQAGAAgCAOIgJAzQgIAqACARQABAWAQADQANACBsgXQBrgWAHAAIA6ADQAWAEAEATQAGAYgMAQQgPARgcgIQgagHhTAJQhCAHgdAHQglAKgZAAIgDgBg");
	this.shape_275.setTransform(126.6,163.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#454748").s().p("AgUAGIAHgEQAKgCAHgCIARgDIgYAJIgMACg");
	this.shape_276.setTransform(108.4,182.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#717677").s().p("AgEARIADgOQABgKAAgDIgIgBIAMgHIAFADIgBAAIgEADQgBACgBAOIAAAPg");
	this.shape_277.setTransform(120.4,181.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#717677").s().p("AgNADIgGgDIgBgEIAIAEQAJADAGgBQALgBAFgEIAAgCIACADQACAFgSADIgFAAQgHAAgGgDg");
	this.shape_278.setTransform(122.5,179.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#3D4659").s().p("AAUAnIgeg8Qgbg4ADABQAFACAOAAIAtBxQAFAMABAZIgOABQABgdgDgJg");
	this.shape_279.setTransform(125.4,187.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#D2D6D7").s().p("AAAAcIgJg3QAMALAHAsg");
	this.shape_280.setTransform(128.8,192.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#B5B7B8").s().p("AAPAfIgPgkQgLgagFgEIgUgFQgBgBABggIAIgEIAIACQABAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIALANQAKAOACAOQADANANAdIAQAjQADALgBAUIgOABQACgegKgQg");
	this.shape_281.setTransform(124.2,187.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#252931").s().p("AhhAyQADgSAMgNQAKgMBEgaQBEgbAigEIAAAeQguACgbAGQgcAIgXAHIgkANQgNAGgGAKQgIARACABg");
	this.shape_282.setTransform(110.5,185.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#252931").s().p("ABkAuQADgGgJgOQgEgGgQgEIgngKIgbgIIgYgFQgRgEgkgBIggAAIgKghQAjAEBVAbQBWAZAJAKQAMAMgGANg");
	this.shape_283.setTransform(135.1,184.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#B5B7B8").s().p("AhqA1QADgYANgLQAPgNBFgaQBHgdAigEIAIADQg/AcgcAHQgOADgHAHQgJAHgQAFIglAMQgOAHgEAGQgJAPgBAIg");
	this.shape_284.setTransform(110.4,184.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#B5B7B8").s().p("ABnAxQgBgJgJgOQgEgHgPgGIgmgMQgcgHgYgGQgRgEgugNIgrgOIANgGQAkAFBVAbQBXAaAOAMQANALgFARg");
	this.shape_285.setTransform(135.5,184.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#B3B5B8").s().p("AgBAlIAAhJIACAAIAABJg");
	this.shape_286.setTransform(120.6,175.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#3D4659").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_287.setTransform(122.7,175.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#454748").s().p("AgGASQgGgFgDgJQgCgHACgHQADgIAHgCQAFgCAGAFQAHAFACAIQADAIgDAHQgDAHgGACIgEABQgDAAgFgDg");
	this.shape_288.setTransform(146.7,192.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#454748").s().p("AgKASQgGgGgBgKQgBgJAEgHQAFgIAHgBQAHAAAGAGQAGAGABAKQABAJgFAHQgEAIgIAAIgCABQgFAAgFgGg");
	this.shape_289.setTransform(127.9,198.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#040D1C").s().p("AgLAWQgJgDgCgMQgBgFAAgMIABgMIAWAAIAAAEIAIABQAKACADAHQAEAIgCAHQgCAIgHAEQgGADgIABIgDAAIgIgBg");
	this.shape_290.setTransform(147.8,191.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#040D1C").s().p("AgMAYQgJgDgDgNQgBgFABgNIAAgOIAdAAIAAAFIAHABQAJACACAIQAHAVgPAHQgGAEgJABIgDAAIgJgBg");
	this.shape_291.setTransform(129.3,197.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#454748").s().p("AgKAPQgFgGAAgJQAAgHAFgHQAEgGAGAAQAGAAAFAGQAFAHAAAHQAAAJgFAGQgEAGgHAAQgGAAgEgGg");
	this.shape_292.setTransform(100.4,192.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#454748").s().p("AgCAMQgEgDgCgFQgCgEABgFQABgFAEgBQAIgEAGANQACAEgCAFQgBAEgEACIgDAAIgEgBg");
	this.shape_293.setTransform(104.8,185.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#454748").s().p("AgEASQgHgEgDgIQgDgHADgIQABgHAHgCQAFgDAGAEQAGAEADAIQAEAHgDAIQgBAHgHACIgEABQgDAAgEgCg");
	this.shape_294.setTransform(131.3,185.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#040D1C").s().p("AgLAWQgIgDgDgMQgBgFABgMIAAgMIAaAAIAAAEIAHABQAIADACAHQAHATgOAHQgGADgIABIgDAAIgIgBg");
	this.shape_295.setTransform(132.1,184.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#040D1C").s().p("AgJAMQgIgFAEgLQABgFAFgCIAFgBIAAgCIARAAIAAATQgCAIgFABIgGABQgFAAgGgDg");
	this.shape_296.setTransform(105.3,184.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#040D1C").s().p("AgMAQQgMgGAGgQQACgGAHgDIAGgBIAAgDIAXAAIAAALQABAKgBAEQgDALgHACIgIABQgGAAgIgEg");
	this.shape_297.setTransform(100,192.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#717677").s().p("Ag+AXQgCgCgGAAIgFABQgDgBAHgGQADgCBIgRIBJgSIAAAEIhUAXIgOAFIgQAEIgQAEQgDABgCADIgCABIgCAAg");
	this.shape_298.setTransform(112.7,181.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#454748").s().p("AgGASQgGgFgDgIQgCgIADgHQACgIAHgCQAFgCAHAFQAGAFADAIQACAIgCAHQgDAHgHADIgEAAQgDAAgFgDg");
	this.shape_299.setTransform(149.1,191.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#454748").s().p("AgKASQgGgGgBgKQgBgJAEgHQAFgIAHgBQAHAAAGAGQAGAGABAKQABAJgFAHQgEAIgIAAIgCABQgFAAgFgGg");
	this.shape_300.setTransform(130.7,197.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#454748").s().p("AgKAPQgFgHAAgIQAAgIAFgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQAAAIgFAHQgEAGgHAAQgFAAgFgGg");
	this.shape_301.setTransform(98.2,192.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#454748").s().p("AgEASQgGgEgDgIQgEgHADgIQABgHAHgCQAGgDAFAEQAHAEACAIQAEAHgDAIQgBAHgHACIgEABQgDAAgEgCg");
	this.shape_302.setTransform(134.2,184);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#323436").s().p("ABWAcQgBgcAMgeQAFgPALgTQAHgNgCgEQgEgIgFgCQgHgDgWgBQgagCgyADQg2AEgbAHQguALgBgLQgBgDAGAAIANgCIBIgJIAZgCIBfgCQASABAGACQARAFgCARQAAAGgEAGIgTAoQgIAVgCBoIgHACg");
	this.shape_303.setTransform(119.4,157.8);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#B7BBC1").s().p("ABRBqIgCgBQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgEIADg/QgCgaALgfQAJgaAHgLQAGgJAAgEIgDgHQgEgFgGgBIgagBQgfgCgqACQgzACgZAGQgmAKgJgGQgDgCAAgDIABgFQACgCALgCIBCgIIAMgCIAZgCIAPgBQBKgEAIACIAFABQAMABAJAGQANAHAAAMIgDAPIgIAOIgMAbQgIAUgEBlQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgIACgABWAeIgBBEIABAAQADhcAHgaQgJAcgBAWgABTheQAUACAHADQAFADADAHIABADQACADgBAEIABgBQABgOgKgGQgGgEgOgCIgFgBQgHgBhKADIgPABIgYACIgMACQAVgDAbgBIAtgBIAjABgAh3hRQAIAEAhgIIAMgDg");
	this.shape_304.setTransform(119.6,157.6);

	this.instance_31 = new lib.Librero();
	this.instance_31.parent = this;
	this.instance_31.setTransform(483.5,90.4,1,1,0,0,0,50.4,90.4);

	this.instance_32 = new lib.Pantalla_grande();
	this.instance_32.parent = this;
	this.instance_32.setTransform(261.9,60.2,1,1,0,0,0,97.5,47.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#3D4659").s().p("AAABpQgCgBgBgGQgEgMAHgeQADgMACggQAEgmgCgQQgDgRgFgPQgFgMgEgFQgCgDgCgFIgCgFIANALQANAMABAFQAKApgJA2QgNBPABAFQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_305.setTransform(345.7,148.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#3D4659").s().p("AAABnQABgFgMhPQgGghACgeQABgUAEgMQABgFANgMIANgMIgCAGIgFAIQgEAFgFAMQgFAPgCAQQgCAQADAmQADAhACAMQAHAegDAMQgBAGgDABIAAABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_306.setTransform(311.8,147.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#B5B7B8").s().p("AgGBrIgIgCQgDgDgDghQgMiEAEgSQADgLASgJIAPgGIAWACIgHAMQgHAMgIAHQgIAIACAnQABASAFAuIAHAwQACAUgIACIgIABIgHgBg");
	this.shape_307.setTransform(310.5,147.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#323436").s().p("AgGATQg7AAgzgOIgngOQgHgEABgDQABgEAGADQAPAIAcAHQAwAMA0ACQA3ACApgJQAXgFAfgKQAXgGAAAFQAAAGgMADQgqALgVAEQgfAGg3AAIgHAAg");
	this.shape_308.setTransform(329.2,137.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#3D4659").s().p("AgNAXQg5AAgugNQgZgHgNgHIAAAAQgHgGAEgIQAEgHAFAFQAGAGArAKQAxALAkABQA3ABArgIQANgCAqgMQAdgIgNAWQgGAEgsAIQg3AKg5AAIgGAAg");
	this.shape_309.setTransform(329.5,137.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#626666").s().p("Ag4CAQhNgEgQgLQgOgJAFhBQAJhQABgkQACgiALgMQAIgIAMADQAKADAKAAIDQADQAaAAAJAJQAFAGACASQADAmABBAQADBZgGANQgHAMgbACIhBABIggAAQgmAAgrgCg");
	this.shape_310.setTransform(329.1,125.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#626666").s().p("AhHClIg5gHQgegCgWgTQgMgLgGgKIAAgBQgBgWALgpQANgpACgKQADgNAEgxIAFhAQABgVAWgPIABAAIEXgHQAdgBAKBLQAFAnABA4IAKBEQAFAwgGAQQgIAQgJAEIgjAIQgXAGgpABIhVABQglAAgdgEg");
	this.shape_311.setTransform(328.3,152.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#717677").s().p("AhgAZIC7hDIAGAMIjAA7IAAAOg");
	this.shape_312.setTransform(316.3,182.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#3D4659").s().p("AhoA7IAAgxIC/hEIAGABQgBAAAGAGIAHAGIgGAeIi4AlIgBAlg");
	this.shape_313.setTransform(316.6,183.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_314.setTransform(349.2,188.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#717677").s().p("ABjAbIjHg+IAIgHIDABBIABAFIgBAPg");
	this.shape_315.setTransform(340,182.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#3D4659").s().p("ABXA7IgBglIi4glIgGgjQAOgGgCgBIAGgBIC/BEIAAAxg");
	this.shape_316.setTransform(339.6,184.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#3D4659").s().p("AAZAKIAAgGIgVAAIglgNIBDACIAAARg");
	this.shape_317.setTransform(336.4,180);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#3D4659").s().p("AggAKIAAgRIBBgCIgkANIgUAAIAAAGg");
	this.shape_318.setTransform(318.6,179.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAKAAAAAJIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_319.setTransform(316,183.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAEAAADACQADADAAAEIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_320.setTransform(339.1,183.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#231F20").s().p("AAAAUQgEAAgDgDQgDgDAAgEIAAgTQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAATQAAAEgDADQgDADgEAAg");
	this.shape_321.setTransform(306.9,189.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_322.setTransform(328,193);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#717677").s().p("AgDARIAAghQgBgEAEAAQAFAAAAAEIAAAhQAAAEgFAAQgEAAABgEg");
	this.shape_323.setTransform(340.3,183);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#717677").s().p("AgEARIAAghQAAgEAEAAQAFAAgBAEIAAAhQABAEgFAAQgEAAAAgEg");
	this.shape_324.setTransform(337.9,183);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#717677").s().p("AgEARIAAghQABgEADAAQAEAAAAAEIAAAhQAAAEgEAAQgDAAgBgEg");
	this.shape_325.setTransform(317.3,183);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#717677").s().p("AgDARIAAghQAAgEADAAQAEAAABAEIAAAhQgBAEgEAAQgDAAAAgEg");
	this.shape_326.setTransform(314.9,183);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_327.setTransform(308.5,189.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_328.setTransform(305.5,189.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_329.setTransform(350.8,189.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#717677").s().p("AgEAPIAAgeQgBgFAFAAQAFAAABAFIAAAeQgBAGgFAAQgFAAABgGg");
	this.shape_330.setTransform(347.7,189.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#717677").s().p("AgFAUIAAgnQAAgGAFAAQAGAAAAAGIAAAnQAAAGgGAAQgFAAAAgGg");
	this.shape_331.setTransform(329.5,193.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#717677").s().p("AgFAUIAAgnQABgGAEAAQAGAAgBAGIAAAnQABAGgGAAQgEAAgBgGg");
	this.shape_332.setTransform(326.4,193.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#717677").s().p("AgVADIgYgHIBNAHIAOACg");
	this.shape_333.setTransform(335.2,178.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#717677").s().p("AghAAIBMgCIgTADIhCADg");
	this.shape_334.setTransform(319.5,178.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#717677").s().p("AgEA7IgGh2IAVAAIgHB2g");
	this.shape_335.setTransform(328,185.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#717677").s().p("AgUAsIgEgDIAAhXIAxABIAABXQgKAFgSAAQgLAAgGgDg");
	this.shape_336.setTransform(328.1,174.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#B5B7B8").s().p("AgJBrQgHgCACgUIAGgwQAGguABgSQABgngHgIQgIgIgIgMIgGgLIAVgCIAQAGQARAIADAMQAGAWgOCAQgDAhgDACQgHAEgHAAIgJgBg");
	this.shape_337.setTransform(347,148.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#3D4659").s().p("AAABpQgCgBgBgGQgEgMAHgeQADgMACggQAEgmgCgQQgDgRgFgPQgFgMgEgFQgCgDgCgFIgCgFIANALQANAMABAFQAKApgJA2QgNBPABAFQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAIgBAAg");
	this.shape_338.setTransform(236.3,148.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#3D4659").s().p("AAABnQABgFgMhPQgGghACgeQABgUAEgMQABgFANgMIANgMIgCAGIgFAIQgEAFgFAMQgFAPgCAQQgCAQADAmQADAhACAMQAHAegDAMQgBAGgDABIAAABQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_339.setTransform(202.4,147.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#B5B7B8").s().p("AgGBrIgIgCQgDgDgDghQgMiEAEgSQADgLASgJIAPgGIAWACIgHAMQgHAMgIAHQgIAIACAnQABASAFAuIAHAwQACAUgIACIgIABIgHgBg");
	this.shape_340.setTransform(201.1,147.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#323436").s().p("AgGATQg7AAgzgOIgngOQgHgEABgDQABgEAGADQAPAIAcAHQAwAMA0ACQA3ACApgJQAXgFAfgKQAXgGAAAFQAAAGgMADQgqALgVAEQgfAGg3AAIgHAAg");
	this.shape_341.setTransform(219.8,137.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#3D4659").s().p("AgNAXQg5AAgugNQgZgHgNgHIAAAAQgHgGAEgIQAEgHAFAFQAGAGArAKQAxALAkABQA3ABArgIQANgCAqgMQAdgIgNAWQgGAEgsAIQg3AKg5AAIgGAAg");
	this.shape_342.setTransform(220.1,137.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#626666").s().p("Ag4CAQhNgEgQgLQgOgJAFhBQAJhQABgkQACgiALgMQAIgIAMADQAKADAKAAIDQADQAaAAAJAJQAFAGACASQADAmABBAQADBZgGANQgHAMgbACIhBABIggAAQgmAAgrgCg");
	this.shape_343.setTransform(219.7,125.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#626666").s().p("AhHClIg5gHQgegCgWgTQgMgLgGgKIAAgBQgBgWALgpQANgpACgKQADgNAEgxIAFhAQABgVAWgPIABAAIEXgHQAdgBAKBLQAFAnABA4IAKBEQAFAwgGAQQgIAQgJAEIgjAIQgXAGgpABIhVABQglAAgdgEg");
	this.shape_344.setTransform(218.9,152.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#717677").s().p("AhgAZIC7hDIAGAMIjAA7IAAAOg");
	this.shape_345.setTransform(206.9,182.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#3D4659").s().p("AhoA7IAAgxIC/hEIAGABQgBAAAGAGIAHAGIgGAeIi4AlIgBAlg");
	this.shape_346.setTransform(207.2,183.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_347.setTransform(239.8,188.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#717677").s().p("ABjAbIjHg+IAIgHIDABBIABAFIgBAPg");
	this.shape_348.setTransform(230.6,182.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#3D4659").s().p("ABXA7IgBglIi4glIgGgjQAOgGgCgBIAGgBIC/BEIAAAxg");
	this.shape_349.setTransform(230.2,184.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#3D4659").s().p("AAZAKIAAgGIgVAAIglgNIBDACIAAARg");
	this.shape_350.setTransform(227,180);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#3D4659").s().p("AggAKIAAgRIBBgCIgkANIgUAAIAAAGg");
	this.shape_351.setTransform(209.2,179.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAKAAAAAJIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_352.setTransform(206.6,183.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgCAAgEIAAgZQAAgEADgDQADgCAEAAIABAAQAEAAADACQADADAAAEIAAAZQAAAEgDACQgDADgEAAg");
	this.shape_353.setTransform(229.7,183.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#231F20").s().p("AAAAUQgEAAgDgDQgDgDAAgEIAAgTQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAATQAAAEgDADQgDADgEAAg");
	this.shape_354.setTransform(197.5,189.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#231F20").s().p("AAAAWQgEAAgDgDQgDgDAAgEIAAgXQAAgEADgDQADgDAEAAIABAAQAEAAADADQADADAAAEIAAAXQAAAEgDADQgDADgEAAg");
	this.shape_355.setTransform(218.6,193);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#717677").s().p("AgDARIAAghQgBgEAEAAQAFAAAAAEIAAAhQAAAEgFAAQgEAAABgEg");
	this.shape_356.setTransform(230.9,183);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#717677").s().p("AgEARIAAghQAAgEAEAAQAFAAgBAEIAAAhQABAEgFAAQgEAAAAgEg");
	this.shape_357.setTransform(228.5,183);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#717677").s().p("AgEARIAAghQABgEADAAQAEAAAAAEIAAAhQAAAEgEAAQgDAAgBgEg");
	this.shape_358.setTransform(207.9,183);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#717677").s().p("AgDARIAAghQAAgEADAAQAEAAABAEIAAAhQgBAEgEAAQgDAAAAgEg");
	this.shape_359.setTransform(205.5,183);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_360.setTransform(199.1,189.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_361.setTransform(196.1,189.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#717677").s().p("AgFAPIAAgeQAAgFAFAAQAGAAAAAFIAAAeQAAAGgGAAQgFAAAAgGg");
	this.shape_362.setTransform(241.4,189.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#717677").s().p("AgEAPIAAgeQgBgFAFAAQAFAAABAFIAAAeQgBAGgFAAQgFAAABgGg");
	this.shape_363.setTransform(238.3,189.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#717677").s().p("AgFAUIAAgnQAAgGAFAAQAGAAAAAGIAAAnQAAAGgGAAQgFAAAAgGg");
	this.shape_364.setTransform(220.1,193.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#717677").s().p("AgFAUIAAgnQABgGAEAAQAGAAgBAGIAAAnQABAGgGAAQgEAAgBgGg");
	this.shape_365.setTransform(217,193.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#717677").s().p("AgVADIgYgHIBNAHIAOACg");
	this.shape_366.setTransform(225.8,178.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#717677").s().p("AghAAIBMgCIgTADIhCADg");
	this.shape_367.setTransform(210.1,178.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#717677").s().p("AgEA7IgGh2IAVAAIgHB2g");
	this.shape_368.setTransform(218.6,185.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#717677").s().p("AgUAsIgEgDIAAhXIAxABIAABXQgKAFgSAAQgLAAgGgDg");
	this.shape_369.setTransform(218.7,174.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#B5B7B8").s().p("AgJBrQgHgCACgUIAGgwQAGguABgSQABgngHgIQgIgIgIgMIgGgLIAVgCIAQAGQARAIADAMQAGAWgOCAQgDAhgDACQgHAEgHAAIgJgBg");
	this.shape_370.setTransform(237.6,148.6);

	this.instance_33 = new lib.Silla_de_lado();
	this.instance_33.parent = this;
	this.instance_33.setTransform(948.6,162.9,1.13,1.13,0,0,0,25.3,42.6);

	this.instance_34 = new lib.Mueble_3();
	this.instance_34.parent = this;
	this.instance_34.setTransform(1102.1,134.7,1,1,0,0,0,80.8,47.7);

	this.instance_35 = new lib.Piso_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(666.1,199.2,1,1,0,0,0,666.1,21.7);

	this.instance_36 = new lib.Fondo_pared();
	this.instance_36.parent = this;
	this.instance_36.setTransform(666.1,221,1.396,0.497,0,0,0,474.1,444.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.instance_32},{t:this.instance_31},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.7,1332.2,221.6);


(lib.entradacurso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_57 = function() {
		this.stop();
		var root = this;
		var botones = 2;
		var caras = 2;
		var mc;
		var cont = 0;
		var valido = false;
		//arreglo para agregar preguntas al texto dinamico
		
		//respuestas correctas
		var respuestasC = [1];
		var respuestaUsuario = 0;
		//cantidad de preguntas
		var retosTotales = 1; // numero de retos en la actividad
		//habilitar las funciones de over mouse
		stage.enableMouseOver();
		//convierte el contenido del arreglo en string
		
		//hacer invisibles las  reacciones de las respuestas
		for (var j = 1; j <= caras; j++) {
			console.log("cara llego a:" + j);
			root["cara" + j].alpha = 0;
		}
		
		iniciar();
		function iniciar() {
			//root.preguntas.text = Questions.shift();
			//el for magico
			for (var i = 1; i <= botones; i++) {
				console.log("boton llego a:" + i);
				root['b' + i].sel = false;
				root['b' + i].n = i;
				root['b' + i].gotoAndStop(2);
				root['b' + i].cursor = "pointer";
		
		
				root['b' + i].on("click", function (event) {
					console.log("dio click");
					root['b' + this.n].gotoAndStop(0);
					validar(this.n);
				});
		
				root['b' + i].on("rollover", function () {
					this.gotoAndStop(1);
				});
		
				root['b' + i].on("rollout", function () {
					this.gotoAndStop(2);
				});
			}
		}
		
		function validar(p) {
			//p = id del boton
			valido = false;
			if (p == respuestasC[0]) {
				valido = true;
				console.log("Elemento Valido");
			}
			if (valido == true) {
				root.cara2.alpha = 100;
				root.cara2.play();
				console.log("bien");
				respuestaUsuario = p;
			} else {
				root.cara1.alpha = 100;
				root.cara1.play();
				console.log("mal");
				respuestaUsuario = p;
			}
			if (respuestaUsuario.length < retosTotales) {
				console.log(respuestaUsuario.length);
				var my_timedProcess = setTimeout(my_delayedFunction, 1000);
			} else {
				console.log("Final tema");
				if(respuestaUsuario == 1){
					console.log("entraste al curso desbloqueado");
					parent.libre = true;
					//parent.backdoor = true;
				} else{
					console.log("entraste al curso bloqueado");
		
					//parent.backdoor = false;
				}
				/*if(calificacion >6){
				root.retro.gotoAndPlay("retrobien");}
				else{
					root.retro.gotoAndPlay("retromal");
					}*/
				/*try {
					_root.siguiente_verde();
					_root.final_tema();
				} catch {
					console.log("no hay comunicacion con start.js");
				}*/
			}
		
		}
		function reiniciar() {
			//va eiminando la respuesta contestada 
			respuestasC.shift();
			for (var i = 1; i <= botones; i++) {
				root['b' + i].gotoAndStop(1);
				mc = root["b" + i];
				mc.removeAllEventListeners();
			}
			for (var j = 1; j <= caras; j++) {
				root["cara" + j].alpha = 0;
			}
		
			iniciar();
			root.avatar.gotoAndStop(1);
		}
		function my_delayedFunction() {
			reiniciar();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(57).call(this.frame_57).wait(1));

	// retro no
	this.cara1 = new lib.retrosi2();
	this.cara1.parent = this;
	this.cara1.setTransform(191.2,298.8,1,1,0,0,0,60,54.5);
	this.cara1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cara1).wait(57).to({_off:false},0).wait(1));

	// retro si
	this.cara2 = new lib.retrono();
	this.cara2.parent = this;
	this.cara2.setTransform(191.2,298.8,1,1,0,0,0,60,54.5);
	this.cara2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cara2).wait(57).to({_off:false},0).wait(1));

	// cortina
	this.instance = new lib.mascara1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(317.7,222.9,1,1,0,0,0,500,252);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.078},23,cjs.Ease.get(1)).to({alpha:0.07},3).to({_off:true},1).wait(31));

	// preguntas
	this.b2 = new lib.btnNOentrada2();
	this.b2.parent = this;
	this.b2.setTransform(355.5,192.7,0.6,0.6,0,0,0,84.7,46.6);

	this.b1 = new lib.btnSientrada();
	this.b1.parent = this;
	this.b1.setTransform(161.5,192.7,0.6,0.6,0,0,0,84.8,46.6);

	this.preguntas = new cjs.Text("¿Anteriormente has participado como evaluador en el Proceso Talent Management Review (TMR)?", "20px 'Arial'", "#333333");
	this.preguntas.name = "preguntas";
	this.preguntas.textAlign = "center";
	this.preguntas.lineHeight = 24;
	this.preguntas.lineWidth = 390;
	this.preguntas.parent = this;
	this.preguntas.setTransform(288,55.4);

	this.preguntas_1 = new cjs.Text("Antes de iniciar contesta la siguiente pregunta:", "19px 'Arial'", "#333333");
	this.preguntas_1.name = "preguntas_1";
	this.preguntas_1.lineHeight = 23;
	this.preguntas_1.lineWidth = 417;
	this.preguntas_1.parent = this;
	this.preguntas_1.setTransform(92.8,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preguntas_1},{t:this.preguntas},{t:this.b1},{t:this.b2}]}).wait(58));

	// fondo ilustrado
	this.instance_1 = new lib.salajuntas3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(439.2,230.3,1,1,0,0,0,809.1,268.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58));

	// mensaje
	this.instance_2 = new lib.clickanimado();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-105.9,2.3,1,1,0,0,0,18,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(57));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D73D45").ss(22,1,1).p("AGbAAQAAB0h5BSQh4BTiqAAQipAAh5hTQh4hSAAh0QAAhzB4hSQB5hSCpAAQCqAAB4BSQB5BSAABzg");
	this.shape.setTransform(-373.9,587.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AkiDGQh4hSABh0QgBhzB4hSQB5hSCpAAQCqAAB4BSQB4BSAABzQAAB0h4BSQh4BSiqAAQipAAh5hSg");
	this.shape_1.setTransform(-373.9,587.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-451,-109,1516.4,735.2);


(lib.mc_intro2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
		var root = this;
		root.btn_siguiente.cursor = "pointer";
		root.btn_siguiente.mouseEnabled = true;
		root.btn_siguiente.on("click", function (event) {
			console.log("siguiente");
			this.parent.parent.gotoAndPlay();
		
		});
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer 2
	this.btn_siguiente = new lib.btn_siguiente();
	this.btn_siguiente.parent = this;
	this.btn_siguiente.setTransform(794,256.8,1,1,0,0,0,75,16.4);
	this.btn_siguiente._off = true;
	new cjs.ButtonHelper(this.btn_siguiente, 0, 1, 2, false, new lib.btn_siguiente(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente).wait(23).to({_off:false},0).wait(1));

	// cortina efecto transparente
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhKDAnYMAAAhOvMCUHAAAMAAABOvg");
	this.shape.setTransform(457.7,216.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.91)").s().p("EhKEAnHMAAAhONMCUJAAAMAAABONg");
	this.shape_1.setTransform(457.8,217.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.827)").s().p("EhKGAm3MAAAhNtMCUMAAAMAAABNtg");
	this.shape_2.setTransform(457.9,217.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.745)").s().p("EhKHAmnMAAAhNNMCUPAAAMAAABNNg");
	this.shape_3.setTransform(458,218.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.671)").s().p("EhKIAmYMAAAhMwMCURAAAMAAABMwg");
	this.shape_4.setTransform(458.1,218.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.596)").s().p("EhKJAmLMAAAhMVMCUTAAAMAAABMVg");
	this.shape_5.setTransform(458.2,218.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.529)").s().p("EhKKAl9MAAAhL6MCUVAAAMAAABL6g");
	this.shape_6.setTransform(458.3,219.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.467)").s().p("EhKLAlxMAAAhLhMCUXAAAMAAABLhg");
	this.shape_7.setTransform(458.4,219.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.404)").s().p("EhKMAlmMAAAhLLMCUZAAAMAAABLLg");
	this.shape_8.setTransform(458.5,219.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.349)").s().p("EhKMAlbMAAAhK1MCUZAAAMAAABK1g");
	this.shape_9.setTransform(458.6,220.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.298)").s().p("EhKNAlRMAAAhKhMCUbAAAMAAABKhg");
	this.shape_10.setTransform(458.6,220.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.251)").s().p("EhKOAlIMAAAhKPMCUdAAAMAAABKPg");
	this.shape_11.setTransform(458.7,220.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.208)").s().p("EhKPAk/MAAAhJ9MCUfAAAMAAABJ9g");
	this.shape_12.setTransform(458.7,220.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.169)").s().p("EhKPAk4MAAAhJvMCUfAAAMAAABJvg");
	this.shape_13.setTransform(458.8,221);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.133)").s().p("EhKQAkxMAAAhJhMCUhAAAMAAABJhg");
	this.shape_14.setTransform(458.8,221.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.102)").s().p("EhKQAkrMAAAhJVMCUhAAAMAAABJVg");
	this.shape_15.setTransform(458.9,221.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.075)").s().p("EhKRAkmMAAAhJLMCUjAAAMAAABJLg");
	this.shape_16.setTransform(458.9,221.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.051)").s().p("EhKRAkhMAAAhJCMCUjAAAMAAABJCg");
	this.shape_17.setTransform(459,221.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.031)").s().p("EhKRAkeMAAAhI7MCUjAAAMAAABI7g");
	this.shape_18.setTransform(459,221.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.02)").s().p("EhKSAkbMAAAhI1MCUlAAAMAAABI1g");
	this.shape_19.setTransform(459,221.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.008)").s().p("EhKSAkZMAAAhIxMCUlAAAMAAABIxg");
	this.shape_20.setTransform(459,221.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.004)").s().p("EhKSAkYMAAAhIvMCUlAAAMAAABIvg");
	this.shape_21.setTransform(459,221.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0)").s().p("EhKSAkXMAAAhItMCUlAAAMAAABItg");
	this.shape_22.setTransform(459,221.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},1).wait(1));

	// txt 
	this.text = new cjs.Text("En un entorno cada día más demandante, el crecimiento rentable y sustentable dependerá en gran medida de que contemos con el talento adecuado en las posiciones clave de la organización, en el momento adecuado. Para lograr esta preparación, se tiene como prioridad contar con un proceso robusto de planeación de talento, que permita conectar el estado futuro del negocio con el talento actual.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 24;
	this.text.lineWidth = 812;
	this.text.parent = this;
	this.text.setTransform(56.9,25.5);

	this.text_1 = new cjs.Text("Este curso pretende proporcionar al colaborador la información esencial acerca del proceso Talent Management Review orientado a identificar el talento clave de la organización y elaborar planes que fomenten el crecimiento de nuestros colaboradores alineados a los objetivos de negocio de Arca Continental.", "18px 'Arial'", "#606060");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 811;
	this.text_1.parent = this;
	this.text_1.setTransform(55.6,162.1);

	this.text_2 = new cjs.Text("¡Bienvenid@!", "bold 25px 'Arial'", "#793A26");
	this.text_2.lineHeight = 70;
	this.text_2.lineWidth = 165;
	this.text_2.parent = this;
	this.text_2.setTransform(376,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(24));

	// ilustracion
	this.instance = new lib.introcollage("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(584.1,364.6,0.911,0.911,0,0,0,666.1,93);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:525.1,y:368.6},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-35.1,948,504.1);


// stage content:
(lib.portada = function(mode,startPosition,loop) {
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

	// PAGINAS
	this.instance = new lib.mc_intro1();
	this.instance.parent = this;
	this.instance.setTransform(283.3,169.8);

	this.instance_1 = new lib.mc_intro2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.4,69.2);

	this.instance_2 = new lib.entradacurso();
	this.instance_2.parent = this;
	this.instance_2.setTransform(175,98.1,1,1,0,0,0,8,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(641.5,360.2,948.6,550.5);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Portadadelcursoopción1.jpg", id:"Portadadelcursoopción1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;