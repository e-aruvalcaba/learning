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



(lib.Mapadebitseval = function() {
	this.initialize(img.Mapadebitseval);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,716,377);// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Evaluación", "bold 71px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 77;
	this.text.lineWidth = 638;
	this.text.alpha = 0.99215686;
	this.text.parent = this;
	this.text.setTransform(-6.3,-19.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327,-21.7,641.6,160.6);


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D3721").s().p("EggbAW7QgHgEhUhsQhShnhCi2QhDi2AqjjQAljjDnj0IFXlVQCoioCOiKIFGlGQD5j5C9jBIC6i6IBXhKQBYhDCXhGQCUhGC+gEQCRgECYBCQCeA+CcCdIXsXrQAEAAARAYQAMAZAAApQAAAqgtAxQgaAeg1AUQgyAVhzAAIsEAAIvHvGQgEgEgtghQgugdhKgEQhKgEhPBKIz/T/QgFAAghAyQgcAugFBKQgDBGBKBTIBGBGIqAKAg");
	this.shape.setTransform(3.8,-11.5,0.072,0.074);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D3721").s().p("AtMO9Qicg8imiiIn8oAIKAp/IFfFfQAAAEAuAhQAtAcBKAEQBHAEBShJIO9u+IMqAAQB1AAAsAUQAqARAYAdQAuAyAAAoQAAAmgRAYQgMAagFAAI3vXvQAAAEhXBFQhVBCiWBHQiVBGi9AEQiRAAihhDg");
	this.shape_1.setTransform(8.8,5.9,0.072,0.074);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2223C").s().p("Au5XLQgegZgUg2QgUg4AAh5IAAr4IPKvKQAEAAAdgtQAcgyAIhGQAFhKhKhPIhKhGIJ7p8IDnDnQAIAFBTBrQBTBsBCC1QBFC2gkDjQgmDjjnDvQhfBji2CxIzWTXQAAAEgYANQgVAQglAAIgIAAQgpAAgygtg");
	this.shape_2.setTransform(-2.3,-0.3,0.072,0.074);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2223C").s().p("EAArAk4QglAAgTgLIgVgRI3030QgFAAhShsQhThshCi5QhGi2AqjiQAljoDrjzIZB5CQAAgEBXhHQBQhACXhDQCThHDAgEQCLgECeBCQCdBCChCdIIEIEIp4J8IliljQgKgIgogdQgtgdhLgEQhGgFhTBLIz/UAQgDAAgiAtQghAtgEBLQgEBGBOBSIO9O/IAAMpQgEB1gQAsQgUApgeAZQgxAugnAAIgHgBg");
	this.shape_3.setTransform(-18.1,-6.6,0.072,0.074);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D3721").s().p("AE+IfIhjj4IlOAAIBLi+IC5AAIiYl2Ik2MsIkMAAIGEu1QAAgDAUgiQARghAtgdQApghBDgEQA9AEApAdQApAhAVAhIAVAhIGYO5g");
	this.shape_4.setTransform(43.7,21.8,0.072,0.074);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C2223C").s().p("AE+IfIhjj4IlNAAIBKi+IC5AAIiYl2Ik2MsIkNAAIGFu1QAAgEAQghQAXgiAngcQAqghBCgEQBBAEApAdQAqAiAUAgIAVAhIGZO5g");
	this.shape_5.setTransform(-35.6,21.8,0.072,0.074);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C2223C").s().p("AD4IiIkUmlIicAAIBBitICkAAIAygIQAygJAxggQAyglAEhLQgEhKgpgdQgugigtgIQgsgIgOAAIleAAIAAOMIkAAAIAAxCIMHAAQAEgEBCARQBGAVBHBCQBGBGAQCdQAFAEgNBCQgHBCg7BKQg1BOiRAhIEyG6g");
	this.shape_6.setTransform(-52.1,21.7,0.072,0.074);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2223C").s().p("AE+IfIhjj4IlOAAIBLi+IC5AAIiYl2Ik2MsIkMAAIGEu1QAAgEARghQAVgiAsgcQApghBDgEQA9AEApAdQAqAiAUAgIAVAhIGYO5g");
	this.shape_7.setTransform(-61.1,21.8,0.072,0.074);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2223C").s().p("AgSIfQgoAAgigIQgggEgmgNQiRgthGiMQhKiNgEipQgFisBCiRQBGiQCJg/QA2gUAxgNQAvgIA8AAIGtAAIAADPIm+AAQh3AIgtBvQgtB0AMB/QAEB1AyBiQAsBeBvAJIG2AEIAADCg");
	this.shape_8.setTransform(-44.2,21.8,0.072,0.074);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D3721").s().p("AgRIfQgpAAgigIQgggEgmgNQiQgthHiMQhKiNgEipQgEitBCiQQBGiQCIg/QA2gUAygNQAugIA8AAIGuAAIAADPIm+AAQh3AIguBvQgtB0AMB/QAFB1AxBiQAtBeBvAJIG2AEIAADCg");
	this.shape_9.setTransform(-28.1,21.8,0.072,0.074);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D3721").s().p("Am1G2QidiNAAk0QgDj4CQiZQCRiZE4gEQDoAACABGQCABHAxB7QAyCCADCvQAFDehOB9QhTCAiIAxQiEAuiiAAIgEAAIgRAAQkTAAiViEgAgHl3QitAIhHBwQhKBrAECNQgICUA+BzQA+B0DaAEIAEAAQC5gIA/hwQA+hwgFiXQAAiZhKhsQhPhnipgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgGACg");
	this.shape_10.setTransform(-19.9,21.8,0.072,0.074);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D3721").s().p("ADbIhIoMscIAFMYIkEAAIAAw9IFaAAIH/MtIAAstIEJAAIAARBg");
	this.shape_11.setTransform(-10.5,21.8,0.072,0.074);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D3721").s().p("AiAIdIAAt/ImMAAIAAi6IQZAAIAAC6ImVAAIAAN/g");
	this.shape_12.setTransform(-1.6,21.8,0.072,0.074);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D3721").s().p("AiQIfIAAw9IEgAAIAAQ9g");
	this.shape_13.setTransform(4.1,21.6,0.072,0.074);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D3721").s().p("ADbIhIoMscIAFMYIkEAAIAAw9IFaAAIH/MtIAAstIEIAAIAARBg");
	this.shape_14.setTransform(10.2,21.8,0.072,0.074);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6D3721").s().p("AiNIPQg0gNg8gdQiAhCg+iAQg+iFAAiYQAAiXA+iFQBDiAB7hGQBCglA+gNQBBgMBHAAIHrAAIAAC+InHAAQhpgEhLBOQhKBLAEBvILFAAIAAC9IrBAAQgEBjBCBCQBCBTBmAEIHbAAIAAC6IoLAAIgeAAQg0AAgqgMg");
	this.shape_15.setTransform(18.9,21.6,0.072,0.074);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D3721").s().p("ADbIhIoQscIAJMYIkFAAIAAw9IFbAAIIAMtIAAstIEIAAIAARBg");
	this.shape_16.setTransform(27.6,21.8,0.072,0.074);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D3721").s().p("AiAIdIAAt/ImMAAIAAi6IQZAAIAAC6ImSAAIAAN/g");
	this.shape_17.setTransform(36.6,21.8,0.072,0.074);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D3721").s().p("AA6IfQiXAAh9gpQh8gqhCh/QgUgwgJgrQgIgrAAg4IAAqtIEVAAIAAKoQAABTAxBCQAqAyA1AQQA7ANBAAAIFbAAIAACxg");
	this.shape_18.setTransform(51.5,21.9,0.072,0.074);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWBBIgWhTIgVBTIgiAAIgpiBIAiAAIAYBUIAWhUIAgAAIAWBUIAZhUIAiAAIgqCBg");
	this.shape_19.setTransform(387.5,3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgvAuQgNgSAAgbQAAgfARgTQARgSAaAAQAcAAAQATQARATgBAnIhVAAQABAPAIAJQAIAIAKAAQAIAAAGgEQAFgFADgKIAiAGQgGATgOAKQgPAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgPgHgIQgIgIgKAAQgLAAgHAJg");
	this.shape_20.setTransform(370.7,3.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQBaIAAiBIAhAAIAACBgAgQg5IAAgfIAhAAIAAAfg");
	this.shape_21.setTransform(360.4,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgOBBIg0iBIAkAAIAYBBIAGAWIAEgLIADgLIAZhBIAjAAIgzCBg");
	this.shape_22.setTransform(349.9,3.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgvAuQgNgSAAgbQAAgfARgTQARgSAaAAQAcAAAQATQARATgBAnIhVAAQABAPAIAJQAIAIAKAAQAIAAAGgEQAFgFADgKIAiAGQgGATgOAKQgPAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgPgHgIQgIgIgKAAQgLAAgHAJg");
	this.shape_23.setTransform(336,3.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAlBaIgagoQgNgUgFgFQgFgGgGgCQgGgCgMAAIgHAAIAABLIgkAAIAAiyIBMAAQAbAAANAEQANAFAIAMQAIANAAAPQAAAVgMANQgMAMgXADQALAIAIAIQAIAHANAWIAVAjgAgrgNIAaAAQAZAAAHgCQAGgCAEgGQAEgFAAgIQAAgJgFgGQgFgFgJgCIgZAAIgcAAg");
	this.shape_24.setTransform(320.9,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEBWQgIgDgEgFQgDgFgBgIQgBgGAAgTIAAg3IgQAAIAAgbIAQAAIAAgaIAhgUIAAAuIAXAAIAAAbIgXAAIAAAzIABATIADAEQACACAEAAQAEAAAJgEIADAbQgMAFgPAAQgJAAgGgDg");
	this.shape_25.setTransform(300,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAZBCIAAhCQAAgUgCgGQgDgGgEgEQgFgDgHAAQgIAAgHAFQgHAFgDAIQgDAIAAAVIAAA6IgiAAIAAiAIAgAAIAAATQARgWAZAAQALAAAJAEQAKAEAFAGQAEAHACAIQACAIAAAPIAABPg");
	this.shape_26.setTransform(288.2,3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgvAuQgNgSAAgbQAAgfARgTQARgSAaAAQAcAAAQATQARATgBAnIhVAAQABAPAIAJQAIAIAKAAQAIAAAGgEQAFgFADgKIAiAGQgGATgOAKQgPAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgPgHgIQgIgIgKAAQgLAAgHAJg");
	this.shape_27.setTransform(273.5,3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AA9BCIAAhJQAAgTgEgGQgEgHgKAAQgHAAgHAEQgGAFgDAIQgDAJAAARIAAA+IghAAIAAhGQAAgTgCgFQgCgGgDgCQgEgDgHAAQgIAAgGAEQgHAEgCAJQgDAIAAARIAAA/IgiAAIAAiAIAfAAIAAARQARgUAYAAQAMAAAJAFQAIAFAGAKQAJgKAKgFQAKgFALAAQAOAAAKAGQAKAFAFAMQADAIAAASIAABSg");
	this.shape_28.setTransform(255.4,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgvAuQgNgSAAgbQAAgfARgTQARgSAaAAQAcAAAQATQARATgBAnIhVAAQABAPAIAJQAIAIAKAAQAIAAAGgEQAFgFADgKIAiAGQgGATgOAKQgPAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgPgHgIQgIgIgKAAQgLAAgHAJg");
	this.shape_29.setTransform(237.3,3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgsBSQgOgMAAgRIABgFIAmAGQACAGADADQAFADAJAAQAOAAAHgDQAEgDACgGQACgFAAgLIAAgTQgQAVgWAAQgaAAgPgWQgMgRAAgaQAAggAQgSQAPgQAXAAQAXgBAQAWIAAgSIAgAAIAABzQAAAWgDAMQgEAMgHAGQgHAHgLADQgMADgSAAQgfABgOgLgAgTg3QgIAJAAAUQAAAUAIAJQAIAJALAAQAMABAJgLQAJgJAAgSQAAgVgJgJQgIgLgNAAQgLAAgIALg");
	this.shape_30.setTransform(222.6,5.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgwA5QgMgLAAgRQAAgLAFgIQAGgJAJgDQAKgFARgDQAXgFAKgEIAAgDQAAgKgFgEQgFgFgNAAQgJAAgFAEQgFAEgDAJIgfgGQAFgTANgJQANgJAZAAQAWAAALAGQALAFAFAIQAEAJAAAWIAAAnQAAARACAIQABAIAFAKIgiAAIgDgKIgCgEQgIAIgKAEQgJAFgMAAQgUAAgLgLgAAAAIQgOADgFADQgHAEAAAIQAAAHAGAFQAFAGAJAAQAIAAAIgHQAGgEACgHQACgEAAgNIAAgHQgHADgNADg");
	this.shape_31.setTransform(208.3,3.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAZBCIAAhCQAAgUgCgGQgDgGgEgEQgFgDgHAAQgIAAgHAFQgHAFgDAIQgDAIAAAVIAAA6IgiAAIAAiAIAgAAIAAATQARgWAZAAQALAAAJAEQAKAEAFAGQAEAHACAIQACAIAAAPIAABPg");
	this.shape_32.setTransform(193.7,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgwA5QgMgLAAgRQAAgLAFgIQAGgJAJgDQAKgFARgDQAXgFAKgEIAAgDQAAgKgFgEQgFgFgNAAQgJAAgFAEQgFAEgDAJIgfgGQAFgTANgJQANgJAZAAQAWAAALAGQALAFAFAIQAEAJAAAWIAAAnQAAARACAIQABAIAFAKIgiAAIgDgKIgCgEQgIAIgKAEQgJAFgMAAQgUAAgLgLgAAAAIQgOADgFADQgHAEAAAIQAAAHAGAFQAFAGAJAAQAIAAAIgHQAGgEACgHQACgEAAgNIAAgHQgHADgNADg");
	this.shape_33.setTransform(179.1,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AA1BaIAAiNIgkCNIgiAAIgjiNIAACNIghAAIAAiyIA2AAIAfB4IAhh4IA2AAIAACyg");
	this.shape_34.setTransform(161.7,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEBWQgIgDgEgFQgDgFgBgIQgBgGAAgTIAAg3IgQAAIAAgbIAQAAIAAgaIAhgUIAAAuIAXAAIAAAbIgXAAIAAAzIABATIADAEQACACAEAAQAEAAAJgEIADAbQgMAFgPAAQgJAAgGgDg");
	this.shape_35.setTransform(140.2,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAZBCIAAhCQAAgUgCgGQgDgGgEgEQgFgDgHAAQgIAAgHAFQgHAFgDAIQgDAIAAAVIAAA6IgiAAIAAiAIAgAAIAAATQARgWAZAAQALAAAJAEQAKAEAFAGQAEAHACAIQACAIAAAPIAABPg");
	this.shape_36.setTransform(128.4,3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgvAuQgNgSAAgbQAAgfARgTQARgSAaAAQAcAAAQATQARATgBAnIhVAAQABAPAIAJQAIAIAKAAQAIAAAGgEQAFgFADgKIAiAGQgGATgOAKQgPAKgVAAQghAAgQgWgAgRggQgHAIAAAOIAyAAQAAgPgHgIQgIgIgKAAQgLAAgHAJg");
	this.shape_37.setTransform(113.7,3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQBaIAAiyIAhAAIAACyg");
	this.shape_38.setTransform(103.4,0.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgwA5QgMgLAAgRQAAgLAFgIQAGgJAJgDQAKgFARgDQAXgFAKgEIAAgDQAAgKgFgEQgFgFgNAAQgJAAgFAEQgFAEgDAJIgfgGQAFgTANgJQANgJAZAAQAWAAALAGQALAFAFAIQAEAJAAAWIAAAnQAAARACAIQABAIAFAKIgiAAIgDgKIgCgEQgIAIgKAEQgJAFgMAAQgUAAgLgLgAAAAIQgOADgFADQgHAEAAAIQAAAHAGAFQAFAGAJAAQAIAAAIgHQAGgEACgHQACgEAAgNIAAgHQgHADgNADg");
	this.shape_39.setTransform(93,3.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgRBaIAAiUIg1AAIAAgeICNAAIAAAeIg1AAIAACUg");
	this.shape_40.setTransform(78.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulo, new cjs.Rectangle(-65.3,-24,479.7,50), null);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebitseval();
	this.instance.parent = this;
	this.instance.setTransform(1297.8,0,1.813,1.813,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(0,0,1297.8,683.3), null);


(lib.Sydsfmbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(194,34,60,0.992)").s().p("Eg92AKUIAA0nMB7tAAAIAAUng");
	this.shape.setTransform(395.9,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,791.7,132);


(lib.mc_radioButton = function(mode,startPosition,loop) {
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

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(3,1,1).p("ABnAAQAAArgeAeQgeAegrAAQgqAAgegeQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqg");
	this.shape.setTransform(3.1,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_1.setTransform(3.1,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDDDDD").s().p("AhUBYQglgBgYgZQgZgZgBglQABgkAZgZQAYgZAlgBICoAAQAmABAZAZQAZAZAAAkQAAAlgZAZQgZAZgmABg");
	this.shape_2.setTransform(12.3,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C7E0A3").ss(3,1,1).p("AhgAkQgGgRAAgTQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeQgKgKgHgMQgEgHgDgIg");
	this.shape_3.setTransform(17.1,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#339900").s().p("AhIBJQgKgKgHgMQgEgHgDgHQgGgSAAgTQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_4.setTransform(17.1,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C7E0A3").s().p("AhUBYQglgBgYgZQgZgZgBglQABgkAZgZQAYgZAlgBICoAAQAmABAZAZQAZAZAAAkQAAAlgZAZQgZAZgmABg");
	this.shape_5.setTransform(8.8,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,7.2,38.3,23.6);


(lib.mc_boton = function(mode,startPosition,loop) {
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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AqqDIQhTAAg7g7Qg6g6AAhTIAAAAQAAhSA6g6QA7g7BTAAIVWAAQBSAAA6A7QA7A6AABSIAAAAQAABTg7A6Qg6A7hSAAg");
	this.shape.setTransform(88.3,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().rr(-88.3,-20,176.6,40,20);
	this.shape_1.setTransform(88.3,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.6,40);


(lib.mascarafoto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2AYUQiqAAAAiqMAAAgrTQAAiqCqAAMAurAAAMAAAAwng");
	mask.setTransform(161.9,155.6);

	// Capa 1
	this.instance = new lib.Mapadebitseval();
	this.instance.parent = this;
	this.instance.setTransform(591.4,0,0.826,0.826,0,0,180);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mascarafoto, new cjs.Rectangle(4,0,315.9,311.2), null);


(lib.linia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1233D").ss(6,1,1,3,true).p("AAAwOMAAAAgd");
	this.shape.setTransform(0,103.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,6,213.8);


(lib.indicador = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgZBZQgGAAgEgDIgEgDIgpgvQgHgIgCgGQgDgGACgFQABgFACgCIABgDQAHgFAHABQAGAAAFADIAEADIAfAjIBhh1QAFgHAFgCQAEgBACABIACABQADADAAAEQAAAEgCADIgCADIhiCaQgIAFgGAAIgBAAg");
	this.shape.setTransform(16.1,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAAdIhKBLIgdgeIBLhKIhLhJIAdgdIBKBKIBKhKIAdAdIhKBJIBKBKIgdAeg");
	this.shape_1.setTransform(15.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqBrQgsgsgBg/QABg+AsgsQAsgsA+gBQA/ABAsAsQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgsgtg");
	this.shape_2.setTransform(15.2,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.3,30.3);


(lib.imprimir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g");
	this.shape.setTransform(92.5,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBIIAAhnIARAAIAABngAgIgyIAAgUIARAAIAAAUg");
	this.shape_1.setTransform(86.2,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA1A1IAAhAQAAgLgCgFQgBgEgFgDQgEgDgGAAQgLAAgIAIQgHAGAAAQIAAA8IgQAAIAAhCQAAgMgFgGQgEgGgKAAQgHAAgGAEQgHAEgDAIQgCAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAOQAFgIAIgEQAIgFAKAAQAMAAAHAFQAGAEADAJQANgSATAAQAQAAAIAIQAIAJAAASIAABGg");
	this.shape_2.setTransform(75.6,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBIIAAhnIARAAIAABngAgIgyIAAgUIARAAIAAAUg");
	this.shape_3.setTransform(65.1,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbA1IAAhmIAQAAIAAAPQAGgLAFgDQAEgEAGAAQAJAAAJAGIgGAQQgGgEgHAAQgGAAgDAEQgFADgCAGQgDAJAAALIAAA2g");
	this.shape_4.setTransform(60.3,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBJIAAiOIAQAAIAAANQAGgIAHgEQAHgEAJAAQANAAALAHQAKAHAFAMQAFANAAAPQAAAQgGALQgFANgLAHQgLAHgMAAQgIAAgHgEQgGgEgFgFIAAAygAgTgvQgJAKAAAUQAAATAIAKQAJAJALAAQAKAAAJgKQAIgKAAgTQAAgUgIgKQgIgKgLAAQgLAAgIALg");
	this.shape_5.setTransform(50.9,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA1A1IAAhAQAAgLgCgFQgBgEgFgDQgEgDgGAAQgLAAgIAIQgHAGAAAQIAAA8IgQAAIAAhCQAAgMgFgGQgEgGgKAAQgHAAgGAEQgHAEgDAIQgCAHAAAOIAAA1IgSAAIAAhmIAQAAIAAAOQAFgIAIgEQAIgFAKAAQAMAAAHAFQAGAEADAJQANgSATAAQAQAAAIAIQAIAJAAASIAABGg");
	this.shape_6.setTransform(36.8,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBIIAAiOIARAAIAACOg");
	this.shape_7.setTransform(25.7,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmyisINlAAQA+AAAsAsQAsAsAAA+IAAAtQAAA+gsAsQgsAsg+AAItlAAQg+AAgsgsQgsgsAAg+IAAgtQAAg+AsgsQAsgsA+AAg");
	this.shape_8.setTransform(58.5,17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D25558").s().p("AmyCsQg+ABgsgtQgsgsAAg9IAAgsQAAg/AsgrQAsgsA+gBINlAAQA+ABAsAsQAsArAAA/IAAAsQAAA9gsAsQgsAtg+gBg");
	this.shape_9.setTransform(58.5,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-1,126,36.5);


(lib.cuadro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1233D").ss(6,1,1,3,true).p("AwOwOMAgdAAAMAAAAgdMggdAAAg");
	this.shape.setTransform(103.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,213.8,213.8);


(lib.btnSiguiente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Continuar", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(73.8,8.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().rr(-84.55,-19.1,169.1,38.2,10);
	this.shape.setTransform(74.5,16.8,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnSiguiente, new cjs.Rectangle(0,0,149.1,35.9), null);


(lib.btnReintento = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Reintentar", "43px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 50;
	this.text.parent = this;
	this.text.setTransform(49.6,5.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().rr(-143.05,-30.45,286.1,60.9,14.3);
	this.shape.setTransform(143.1,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnReintento, new cjs.Rectangle(0,0,286.1,60.9), null);


(lib.btnIniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 2
	this.text = new cjs.Text("Continuar", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(10,22);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().rr(-84.55,-19.1,169.1,38.2,10);
	this.shape.setTransform(10.7,30.1,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.8,13.3,149.1,35.9);


(lib.btn_terminar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Terminar", "43px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 50;
	this.text.parent = this;
	this.text.setTransform(56.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().rr(-143.05,-30.45,286.1,60.9,14.3);
	this.shape.setTransform(143.1,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_terminar, new cjs.Rectangle(0,0,286.1,60.9), null);


(lib.btn_reintentar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Reintentar", "43px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 50;
	this.text.parent = this;
	this.text.setTransform(49.6,5.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().rr(-143.05,-30.45,286.1,60.9,14.3);
	this.shape.setTransform(143.1,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_reintentar, new cjs.Rectangle(0,0,286.1,60.9), null);


(lib.area_respuesta8 = function(mode,startPosition,loop) {
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

	// texto
	this.txt_pregunta = new cjs.Text("", "bold 12px 'Arial'");
	this.txt_pregunta.name = "txt_pregunta";
	this.txt_pregunta.lineHeight = 16;
	this.txt_pregunta.lineWidth = 255;
	this.txt_pregunta.parent = this;
	this.txt_pregunta.setTransform(-559.1,-10.9);

	this.txt_respuesta = new cjs.Text("", "12px 'Arial'", "#333333");
	this.txt_respuesta.name = "txt_respuesta";
	this.txt_respuesta.lineHeight = 15;
	this.txt_respuesta.lineWidth = 254;
	this.txt_respuesta.parent = this;
	this.txt_respuesta.setTransform(-558.2,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txt_respuesta},{t:this.txt_pregunta}]},1).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A0QOrQiiAAAAiiIAA4RQAAiiCiAAMAogAAAQCiAAAACiIAAYRQAACiiiAAg");
	this.shape.setTransform(-431.8,91.5,1,1.272);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// pestaña
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(69,69,69,0)").s().p("AjugLIAPjVIHPDdIngDkg");
	this.shape_1.setTransform(-271.1,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AjugLIAPjVIHPDdInfDkg");
	this.shape_2.setTransform(-269.2,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.2,13.2,48.1,45);


(lib.area_respuesta7 = function(mode,startPosition,loop) {
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

	// texto
	this.txt_pregunta = new cjs.Text("", "bold 12px 'Arial'");
	this.txt_pregunta.name = "txt_pregunta";
	this.txt_pregunta.lineHeight = 16;
	this.txt_pregunta.lineWidth = 255;
	this.txt_pregunta.parent = this;
	this.txt_pregunta.setTransform(-563.8,-92.1);

	this.txt_respuesta = new cjs.Text("", "12px 'Arial'", "#333333");
	this.txt_respuesta.name = "txt_respuesta";
	this.txt_respuesta.lineHeight = 15;
	this.txt_respuesta.lineWidth = 254;
	this.txt_respuesta.parent = this;
	this.txt_respuesta.setTransform(-562.9,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txt_respuesta},{t:this.txt_pregunta}]},1).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A0PODQiiAAAAiiIAA3CQAAiiCiAAMAogAAAQCiAAAACiIAAXCQAACiiiAAg");
	this.shape.setTransform(-436.1,9.9,1,1.328);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// pestaña
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,51,204,0)").s().p("AjugLIAPjVIHPDdIngDkg");
	this.shape_1.setTransform(-271.1,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AjugLIAPjVIHQDdInhDkg");
	this.shape_2.setTransform(-272.3,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.2,13.2,48.1,45);


(lib.area_respuesta6 = function(mode,startPosition,loop) {
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

	// texto
	this.txt_pregunta = new cjs.Text("", "bold 12px 'Arial'");
	this.txt_pregunta.name = "txt_pregunta";
	this.txt_pregunta.lineHeight = 16;
	this.txt_pregunta.lineWidth = 255;
	this.txt_pregunta.parent = this;
	this.txt_pregunta.setTransform(-556.7,2);

	this.txt_respuesta = new cjs.Text("", "12px 'Arial'", "#333333");
	this.txt_respuesta.name = "txt_respuesta";
	this.txt_respuesta.lineHeight = 15;
	this.txt_respuesta.lineWidth = 254;
	this.txt_respuesta.parent = this;
	this.txt_respuesta.setTransform(-556.7,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txt_respuesta},{t:this.txt_pregunta}]},1).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A0QOsQiiAAAAiiIAA4TQAAiiCiAAMAogAAAQCiAAAACiIAAYTQAACiiiAAg");
	this.shape.setTransform(-431.8,111.2,1,1.272);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// pestaña
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AjugLIAPjVIHPDdInfDkg");
	this.shape_1.setTransform(-271.1,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AjugLIAPjVIHPDdInfDkg");
	this.shape_2.setTransform(-269.2,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295.1,13.2,48.1,45);


(lib.area_respuesta4 = function(mode,startPosition,loop) {
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

	// texto
	this.txt_respuesta = new cjs.Text("", "12px 'Arial'", "#333333");
	this.txt_respuesta.name = "txt_respuesta";
	this.txt_respuesta.lineHeight = 15;
	this.txt_respuesta.lineWidth = 254;
	this.txt_respuesta.parent = this;
	this.txt_respuesta.setTransform(19.1,-24.8);
	this.txt_respuesta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt_respuesta).wait(1).to({_off:false},0).wait(1));

	// fondo
	this.txt_pregunta = new cjs.Text("", "bold 12px 'Arial'");
	this.txt_pregunta.name = "txt_pregunta";
	this.txt_pregunta.lineHeight = 16;
	this.txt_pregunta.lineWidth = 255;
	this.txt_pregunta.parent = this;
	this.txt_pregunta.setTransform(19.1,-116.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A0PQQQihAAgBigIgBAAIAA7dQAAiiCiAAMAogAAAQCiAAAACiIAAWTIABAAIAAFIQAACiiiAAg");
	this.shape.setTransform(145.9,-23.5,1,1.149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.txt_pregunta}]},1).wait(1));

	// pestaña
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(66,66,66,0)").s().p("AjwgDIHQjdIAPDVIACDsg");
	this.shape_1.setTransform(-16.8,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AjwgDIHQjdIAPDVIACDsg");
	this.shape_2.setTransform(-16.8,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,13.2,48.1,45);


(lib.area_respuesta3 = function(mode,startPosition,loop) {
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

	// texto
	this.txt_respuesta = new cjs.Text("", "12px 'Arial'", "#333333");
	this.txt_respuesta.name = "txt_respuesta";
	this.txt_respuesta.lineHeight = 15;
	this.txt_respuesta.lineWidth = 254;
	this.txt_respuesta.parent = this;
	this.txt_respuesta.setTransform(19.1,34.7);
	this.txt_respuesta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt_respuesta).wait(1).to({_off:false},0).wait(1));

	// fondo
	this.txt_pregunta = new cjs.Text("", "bold 12px 'Arial'");
	this.txt_pregunta.name = "txt_pregunta";
	this.txt_pregunta.lineHeight = 16;
	this.txt_pregunta.lineWidth = 255;
	this.txt_pregunta.parent = this;
	this.txt_pregunta.setTransform(19.1,-47);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A0QOrQihAAgBiiIAA4RQABiiChAAMAogAAAQCiAAAACiIAAYRQAACiiiAAg");
	this.shape.setTransform(145.9,61.5,1,1.272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.txt_pregunta}]},1).wait(1));

	// pestaña
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AjwgDIHQjdIAPDVIACDsg");
	this.shape_1.setTransform(-16.8,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AjwgDIHQjdIAPDVIACDsg");
	this.shape_2.setTransform(-16.8,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,13.2,48.1,45);


(lib.area_respuesta = function(mode,startPosition,loop) {
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

	// texto
	this.txt_pregunta = new cjs.Text("", "bold 12px 'Arial'");
	this.txt_pregunta.name = "txt_pregunta";
	this.txt_pregunta.lineHeight = 16;
	this.txt_pregunta.lineWidth = 255;
	this.txt_pregunta.parent = this;
	this.txt_pregunta.setTransform(17.3,9.7);

	this.txt_respuesta = new cjs.Text("", "12px 'Arial'", "#333333");
	this.txt_respuesta.name = "txt_respuesta";
	this.txt_respuesta.lineHeight = 15;
	this.txt_respuesta.lineWidth = 254;
	this.txt_respuesta.parent = this;
	this.txt_respuesta.setTransform(19.1,92.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.txt_respuesta},{t:this.txt_pregunta}]},1).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("A0QN6QihAAgBiiIAA2vQABihChgBMAogAAAQCiABAAChIAAWvQAACiiiAAg");
	this.shape.setTransform(145.9,119.5,1,1.343);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// pestaña
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AjwgDIHQjdIAPDVIACDsg");
	this.shape_1.setTransform(-16.8,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AjwgDIHQjdIAPDVIACDsg");
	this.shape_2.setTransform(-16.8,35.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.8,13.2,48.1,45);


(lib.mc_retro_eval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		var preguntas = 10;
		
		root.txt_cal.text = root.parent.res/10;
		
		function activarReintentar() {
			root.reintentar.addEventListener("click", reintentar);
			root.reintentar.cursor = "pointer";
		}
		
		function reintentar() {
			root.parent.reiniciar();
		}
		
		for (var i = 1; i <= preguntas; i++) {
			//inicializar botones
			root['b' + i].n = i;
			root['b' + i].cursor = "pointer";
			root['b' + i].addEventListener("rollover", mostrar);
			root['b' + i].addEventListener("rollout", ocultar);
		
			//inicializar indicadores
			console.log(root.parent.resultados[i - 1]);
			if (root.parent.resultados[i - 1] == 0) {
				root['i' + i].gotoAndStop(2);
			}
		
		}
		
		function mostrar(m) { //listo
			var n = m.currentTarget.n;
			root["a" + n].gotoAndStop(1);
			root["a" + n].txt_pregunta.text = root.parent.preguntas[n - 1];
			root["a" + n].txt_respuesta.text = "La respuesta correcta es:\n " + root.parent.correctas[n - 1];
		}
		
		function ocultar(m) { //listo
			root["a" + m.currentTarget.n].gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.btn_reiniciarEval = new lib.btnReintento();
	this.btn_reiniciarEval.parent = this;
	this.btn_reiniciarEval.setTransform(17.6,339.2,0.521,0.521);

	this.terminar = new lib.btn_terminar();
	this.terminar.parent = this;
	this.terminar.setTransform(415.9,339.2,0.521,0.521);

	this.reintentar = new lib.btn_reintentar();
	this.reintentar.parent = this;
	this.reintentar.setTransform(256.3,160.2,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reintentar},{t:this.terminar},{t:this.btn_reiniciarEval}]}).wait(1));

	// areas amarillas
	this.a5 = new lib.area_respuesta8();
	this.a5.parent = this;
	this.a5.setTransform(791.8,-44.8,1,1,0,0,0,145.8,119);

	this.a7 = new lib.area_respuesta7();
	this.a7.parent = this;
	this.a7.setTransform(796.7,86,1,1,0,0,0,145.8,119);

	this.a6 = new lib.area_respuesta6();
	this.a6.parent = this;
	this.a6.setTransform(794.5,22.4,1,1,0,0,0,145.8,119);

	this.a4 = new lib.area_respuesta4();
	this.a4.parent = this;
	this.a4.setTransform(437.4,146.9,1,1,0,0,0,145.8,119);

	this.a3 = new lib.area_respuesta3();
	this.a3.parent = this;
	this.a3.setTransform(437.4,86,1,1,0,0,0,145.8,119);

	this.a2 = new lib.area_respuesta();
	this.a2.parent = this;
	this.a2.setTransform(437.4,22.7,1,1,0,0,0,145.8,119);

	this.a1 = new lib.area_respuesta();
	this.a1.parent = this;
	this.a1.setTransform(436,-39.9,1,1,0,0,0,145.8,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.a1},{t:this.a2},{t:this.a3},{t:this.a4},{t:this.a6},{t:this.a7},{t:this.a5}]}).wait(1));

	// Botones
	this.a4_1 = new lib.area_respuesta4();
	this.a4_1.parent = this;
	this.a4_1.setTransform(798.5,208.6,1,1,0,0,0,145.8,119);

	this.i10 = new lib.indicador();
	this.i10.parent = this;
	this.i10.setTransform(582.4,126.6,1.139,1.139,0,0,0,15.2,15.2);

	this.p5 = new cjs.Text("Pregunta 10", "bold 19px 'Arial'", "#333333");
	this.p5.name = "p5";
	this.p5.textAlign = "center";
	this.p5.lineHeight = 23;
	this.p5.lineWidth = 119;
	this.p5.parent = this;
	this.p5.setTransform(487,112.3,1.139,1.139);

	this.b10 = new lib.mc_boton();
	this.b10.parent = this;
	this.b10.setTransform(505.8,124.9,1.139,1.139,0,0,0,88.3,19.9);

	this.a4_2 = new lib.area_respuesta4();
	this.a4_2.parent = this;
	this.a4_2.setTransform(798.5,147.5,1,1,0,0,0,145.8,119);

	this.i9 = new lib.indicador();
	this.i9.parent = this;
	this.i9.setTransform(582.4,65.4,1.139,1.139,0,0,0,15.2,15.2);

	this.p5_1 = new cjs.Text("Pregunta 9", "bold 19px 'Arial'", "#333333");
	this.p5_1.name = "p5_1";
	this.p5_1.textAlign = "center";
	this.p5_1.lineHeight = 23;
	this.p5_1.lineWidth = 100;
	this.p5_1.parent = this;
	this.p5_1.setTransform(483.2,51.1,1.139,1.139);

	this.b9 = new lib.mc_boton();
	this.b9.parent = this;
	this.b9.setTransform(505.8,63.8,1.139,1.139,0,0,0,88.3,19.9);

	this.a4_3 = new lib.area_respuesta4();
	this.a4_3.parent = this;
	this.a4_3.setTransform(437.4,209,1,1,0,0,0,145.8,119);

	this.i5 = new lib.indicador();
	this.i5.parent = this;
	this.i5.setTransform(221.3,127,1.139,1.139,0,0,0,15.2,15.2);

	this.p5_2 = new cjs.Text("Pregunta 5", "bold 19px 'Arial'", "#333333");
	this.p5_2.name = "p5_2";
	this.p5_2.textAlign = "center";
	this.p5_2.lineHeight = 23;
	this.p5_2.lineWidth = 100;
	this.p5_2.parent = this;
	this.p5_2.setTransform(122.1,112.7,1.139,1.139);

	this.b5 = new lib.mc_boton();
	this.b5.parent = this;
	this.b5.setTransform(144.7,125.3,1.139,1.139,0,0,0,88.3,19.9);

	this.i8 = new lib.indicador();
	this.i8.parent = this;
	this.i8.setTransform(582.8,2.1,1.139,1.139,0,0,0,15.2,15.2);

	this.i7 = new lib.indicador();
	this.i7.parent = this;
	this.i7.setTransform(582.1,-62.6,1.139,1.139,0,0,0,15.2,15.1);

	this.i6 = new lib.indicador();
	this.i6.parent = this;
	this.i6.setTransform(582.4,-122.9,1.139,1.139,0,0,0,15.2,15.2);

	this.i4 = new lib.indicador();
	this.i4.parent = this;
	this.i4.setTransform(221.3,64.9,1.139,1.139,0,0,0,15.2,15.2);

	this.i3 = new lib.indicador();
	this.i3.parent = this;
	this.i3.setTransform(221.3,2.2,1.139,1.139,0,0,0,15.2,15.2);

	this.i2 = new lib.indicador();
	this.i2.parent = this;
	this.i2.setTransform(221.3,-61.2,1.139,1.139,0,0,0,15.2,15.2);

	this.i1 = new lib.indicador();
	this.i1.parent = this;
	this.i1.setTransform(221.3,-124.8,1.139,1.139,0,0,0,15.2,15.1);

	this.p7 = new cjs.Text("Pregunta 8", "bold 19px 'Arial'", "#333333");
	this.p7.name = "p7";
	this.p7.textAlign = "center";
	this.p7.lineHeight = 23;
	this.p7.lineWidth = 100;
	this.p7.parent = this;
	this.p7.setTransform(487,-10.3,1.139,1.139);

	this.p6 = new cjs.Text("Pregunta 7", "bold 19px 'Arial'", "#333333");
	this.p6.name = "p6";
	this.p6.textAlign = "center";
	this.p6.lineHeight = 23;
	this.p6.lineWidth = 100;
	this.p6.parent = this;
	this.p6.setTransform(486.3,-75,1.139,1.139);

	this.p5_3 = new cjs.Text("Pregunta 6", "bold 19px 'Arial'", "#333333");
	this.p5_3.name = "p5_3";
	this.p5_3.textAlign = "center";
	this.p5_3.lineHeight = 23;
	this.p5_3.lineWidth = 100;
	this.p5_3.parent = this;
	this.p5_3.setTransform(483.2,-136.2,1.139,1.139);

	this.p4 = new cjs.Text("Pregunta 4", "bold 19px 'Arial'", "#333333");
	this.p4.name = "p4";
	this.p4.textAlign = "center";
	this.p4.lineHeight = 23;
	this.p4.lineWidth = 100;
	this.p4.parent = this;
	this.p4.setTransform(122.1,50.6,1.139,1.139);

	this.p3 = new cjs.Text("Pregunta 3", "bold 19px 'Arial'", "#333333");
	this.p3.name = "p3";
	this.p3.textAlign = "center";
	this.p3.lineHeight = 23;
	this.p3.lineWidth = 100;
	this.p3.parent = this;
	this.p3.setTransform(122.1,-10.3,1.139,1.139);

	this.p2 = new cjs.Text("Pregunta 2", "bold 19px 'Arial'", "#333333");
	this.p2.name = "p2";
	this.p2.textAlign = "center";
	this.p2.lineHeight = 23;
	this.p2.lineWidth = 100;
	this.p2.parent = this;
	this.p2.setTransform(122.1,-73.6,1.139,1.139);

	this.p1 = new cjs.Text("Pregunta 1", "bold 19px 'Arial'", "#333333");
	this.p1.name = "p1";
	this.p1.textAlign = "center";
	this.p1.lineHeight = 23;
	this.p1.lineWidth = 100;
	this.p1.parent = this;
	this.p1.setTransform(122.1,-137.3,1.139,1.139);

	this.b8 = new lib.mc_boton();
	this.b8.parent = this;
	this.b8.setTransform(505.8,2.3,1.139,1.139,0,0,0,88.3,19.9);

	this.b7 = new lib.mc_boton();
	this.b7.parent = this;
	this.b7.setTransform(505.1,-62.4,1.139,1.139,0,0,0,88.3,19.9);

	this.b6 = new lib.mc_boton();
	this.b6.parent = this;
	this.b6.setTransform(505.8,-123.5,1.139,1.139,0,0,0,88.3,20);

	this.b4 = new lib.mc_boton();
	this.b4.parent = this;
	this.b4.setTransform(144.7,63.2,1.139,1.139,0,0,0,88.3,19.9);

	this.b3 = new lib.mc_boton();
	this.b3.parent = this;
	this.b3.setTransform(144.7,2.3,1.139,1.139,0,0,0,88.3,19.9);

	this.b2 = new lib.mc_boton();
	this.b2.parent = this;
	this.b2.setTransform(144.7,-61,1.139,1.139,0,0,0,88.3,19.9);

	this.b1 = new lib.mc_boton();
	this.b1.parent = this;
	this.b1.setTransform(144.7,-124.6,1.139,1.139,0,0,0,88.3,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.p1},{t:this.p2},{t:this.p3},{t:this.p4},{t:this.p5_3},{t:this.p6},{t:this.p7},{t:this.i1},{t:this.i2},{t:this.i3},{t:this.i4},{t:this.i6},{t:this.i7},{t:this.i8},{t:this.b5},{t:this.p5_2},{t:this.i5},{t:this.a4_3},{t:this.b9},{t:this.p5_1},{t:this.i9},{t:this.a4_2},{t:this.b10},{t:this.p5},{t:this.i10},{t:this.a4_1}]}).wait(1));

	// Layer 2
	this.text = new cjs.Text("de 10 respuestas correctas", "40px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 47;
	this.text.lineWidth = 485;
	this.text.parent = this;
	this.text.setTransform(208.6,-238);

	this.txt_cal = new cjs.Text("0", "bold 40px 'Arial'", "#FFFFFF");
	this.txt_cal.name = "txt_cal";
	this.txt_cal.lineHeight = 47;
	this.txt_cal.lineWidth = 42;
	this.txt_cal.parent = this;
	this.txt_cal.setTransform(173.2,-235);

	this.text_1 = new cjs.Text("Obtuviste", "40px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 184;
	this.text_1.parent = this;
	this.text_1.setTransform(-3,-238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.txt_cal},{t:this.text}]}).wait(1));

	// Fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D25558").s().p("Eg5AAHAIAAqPQAAhkA+hGQBAhGBZAAMBrTAAAQBZAAA/BGQA/BGAABkIAAKPg");
	this.shape.setTransform(343.7,-211.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEFEF").s().p("Eg1pAjtQhZAAhAhHQg+hGAAhjMAAAg/5QAAhjA+hHQBAhGBZAAMBrTAAAQBZAAA/BGQA/BHAABjMAAAA/5QAABjg/BGQg/BHhZAAg");
	this.shape_1.setTransform(343.7,-28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_retro_eval, new cjs.Rectangle(-21.2,-256.6,729.9,627.5), null);


(lib.mc_portada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		///* alert(String(window.eval.rojo));*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 1
	this.instance = new lib.mascarafoto();
	this.instance.parent = this;
	this.instance.setTransform(197.7,178.7,1,1,0,0,0,295.7,155.7);

	this.text = new cjs.Text("A continuación se te presentarán diez preguntas con varias opciones de respuesta. Debes elegir la respuesta correcta, de acuerdo con lo que has visto en el curso.\n\nCada respuesta correcta tiene un valor de 10 puntos. Para aprobar este curso necesitas obtener, cuando menos, 80 puntos.\n\nInstrucciones:\n\n● Lee con atención cada pregunta.\n● Haz clic sobre la respuesta que consideres correcta.\n● Observa la calificación de tu respuesta.\n● Para pasar a la pregunta siguiente, haz clic en el botón   \n   Continuar.", "17px 'Arial'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 446;
	this.text.parent = this;
	this.text.setTransform(238,27.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().rr(-410.85,-183.95,821.7,367.9,17);
	this.shape.setTransform(294.8,178.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_portada, new cjs.Rectangle(-116,-5.6,821.7,389.8), null);


(lib.mc_p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		//var resp = 2;//numero de respuestas desde 0
		//var correcta = 0; // cual es la respuesta correcta
		var numRespuestas = 4;
		//console.log(root.p1.text, root.parent.cont, root.parent.preguntas);
		//root.parent.preguntas[root.parent.cont]=root.p1.text;
		//console.log(root.parent.preguntas[root.parent.cont], root.parent.preguntas);
		iniciar();
		function iniciar() {
			parent.desactivarSiguiente;
			for (var i = 1; i <= numRespuestas; i++) {
				root['r' + i].cursor = "pointer";
				root['r' + i].n = i;
				root['r' + i].addEventListener("click", cambios);
				root['r' + i].gotoAndStop(1);
			}
		//	setTimeout(deshabilitaSiguiente, 100);
		}
		
		function cambios(r) {
			//Cambia el estatus de la opcion seleccionada
			for (var i = 1; i <= numRespuestas; i++) {
				if (root['r' + i].n != r.currentTarget.n) {
					root['r' + i].gotoAndStop(0);
				} else {
					root['r' + i].gotoAndStop(1);
				}
			}
		
			//Valida la respuesta
			var isCorrect="Incorrecto";
			if (r.currentTarget.n == EvalInfo.preguntas[EvalInfo.control].correcta){
				root.parent.parent.resultados[EvalInfo.control] = 10;
				console.log("Respuesta Correcta " + root.parent.parent.resultados[EvalInfo.control]);
				isCorrect="Correcto"
				} else {
				root.parent.parent.resultados[EvalInfo.control] = 0;
				console.log("Respuesta Incorrecta " + root.parent.parent.resultados[EvalInfo.control]);
			}
			root.parent.activarSiguiente();
			root.parent.registrar_pregunta(root.descripcion.text, root['op'+(r.currentTarget.n - 1)].text, isCorrect);	
		}
		
		this.reiniciar = function(){
				for (var i = 1; i <= numRespuestas; i++) {
				//root['r' + i].cursor = "pointer";
				//root['r' + i].n = i;
				//root['r' + i].addEventListener("click", cambios);
				root['r' + i].gotoAndStop(0);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt y radio butons
	this.op3 = new cjs.Text("Bienes virtuales", "17px 'Arial'");
	this.op3.name = "op3";
	this.op3.lineHeight = 21;
	this.op3.lineWidth = 516;
	this.op3.parent = this;
	this.op3.setTransform(527.9,356.4);

	this.r4 = new lib.mc_radioButton();
	this.r4.parent = this;
	this.r4.setTransform(491.4,343);

	this.descripcion = new cjs.Text("En el conrexto de IMCR, la imagen y la reputación son bienes catalogados como:", "18px 'Arial'");
	this.descripcion.name = "descripcion";
	this.descripcion.lineHeight = 22;
	this.descripcion.lineWidth = 668;
	this.descripcion.parent = this;
	this.descripcion.setTransform(2,31);

	this.op2 = new cjs.Text("Bienes intangibles", "17px 'Arial'");
	this.op2.name = "op2";
	this.op2.lineHeight = 21;
	this.op2.lineWidth = 516;
	this.op2.parent = this;
	this.op2.setTransform(527.9,283.9);

	this.op1 = new cjs.Text("Bienes secundarios", "17px 'Arial'");
	this.op1.name = "op1";
	this.op1.lineHeight = 21;
	this.op1.lineWidth = 516;
	this.op1.parent = this;
	this.op1.setTransform(527.9,213.3);

	this.op0 = new cjs.Text("Bienes primarios.", "17px 'Arial'");
	this.op0.name = "op0";
	this.op0.lineHeight = 21;
	this.op0.lineWidth = 513;
	this.op0.parent = this;
	this.op0.setTransform(527.9,140.7);

	this.r3 = new lib.mc_radioButton();
	this.r3.parent = this;
	this.r3.setTransform(491.4,270.5);

	this.r2 = new lib.mc_radioButton();
	this.r2.parent = this;
	this.r2.setTransform(508.3,220.6,1,1,0,0,0,18,18.1);

	this.r1 = new lib.mc_radioButton();
	this.r1.parent = this;
	this.r1.setTransform(489.5,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r1},{t:this.r2},{t:this.r3},{t:this.op0},{t:this.op1},{t:this.op2},{t:this.descripcion},{t:this.r4},{t:this.op3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_p1, new cjs.Rectangle(0,29,1045.9,374.1), null);


(lib.mc_eval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		//console.log("Banco de letras" + root.Array[control]);
		//habilitar las funciones de over mouse
		stage.enableMouseOver();
		
		//Actividades que llevar drag and drop etc.
		createjs.Touch.enable(stage);
		
		this.siguienteFrame = function (btn) {
			EvalInfo.control++; //	control++;
			if (EvalInfo.control < 10) {
				actualizarDatos((EvalInfo.control	));
				root.mcPregunta.reiniciar();
			} else {
				fn();
			}
		//	console.log(root.resultados);
		}
		
		this.activarSiguiente = function () {
			root.btn_siguiente.cursor = "pointer";
			root.btn_siguiente.alpha = 1;
			root.btn_siguiente.addEventListener("click", this.siguienteFrame);
		}
		
		this.desactivarSiguiente = function () {
			root.btn_siguiente.alpha = 0.5;
			root.btn_siguiente.cursor = "default";
			root.btn_siguiente.removeEventListener("click");
		}
		
		this.imprimirCal = function () {
			for (var i = 0; i < this.resultados.length; i++) {
				this.calificacion += this.resultados[i];
				this.res += this.resultados[i];
			}
			switch (this.calificacion) {
				case 50:
					this.calificacion = 80;
					break;
				case 60:
					this.calificacion = 90;
					break;
				case 70:
					this.calificacion = 100;
					break;
			}
			if (this.calificacion <= 40) {
				this.calificacion = 70;
		
			}
			console.log(this.calificacion);
		}
		
		function fn() {
			root.parent.gotoAndStop(3);
		}
		
		this.registrar_pregunta = function (p, r, c) {
			console.log("contador   " + EvalInfo.control);
			root.parent.preguntas[EvalInfo.control] = p;
			root.parent.respuestas[EvalInfo.control] = r;
			root.parent.correctas[EvalInfo.control] = c;
			console.log(root.parent.preguntas, root.parent.respuestas, root.parent.correctas);
		}
		
		function reiniciar() {
			console.log("reiniciar");
			actualizarDatos();
		}
		
		function actualizarDatos(id){
			console.log("El id es: " + id);
			root.txt_numPreg.text = parseInt(id)+1;
			root.mcPregunta.descripcion.text = EvalInfo.preguntas[id].pregunta
			root.mcPregunta.op0.text = EvalInfo.preguntas[id].respuestas[0]["1"];
			root.mcPregunta.op1.text = EvalInfo.preguntas[id].respuestas[0]["2"];
			root.mcPregunta.op2.text = EvalInfo.preguntas[id].respuestas[0]["3"];
			root.mcPregunta.op3.text = EvalInfo.preguntas[id].respuestas[0]["4"];
		}
		
		//this.txt_numPreg.text = this.parent.cont+1;
		//console.log("numero de pregunta");
		console.log(EvalInfo);
		actualizarDatos(EvalInfo.control);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 3
	this.btn_siguiente = new lib.btnSiguiente();
	this.btn_siguiente.parent = this;
	this.btn_siguiente.setTransform(946.2,483.3,1,1,0,0,0,74.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente).wait(1));

	// Capa 4
	this.mcPregunta = new lib.mc_p1();
	this.mcPregunta.parent = this;
	this.mcPregunta.setTransform(467.7,219.2,1,1,0,0,0,470.6,215.2);

	this.timeline.addTween(cjs.Tween.get(this.mcPregunta).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABIQgdAAgWgVQgUgVAAgeQAAgdAUgVQAWgVAdgBQAeAAAVAWQAWAVgBAdQABAegWAVQgVAVgeAAIAAAAgAgkgkQgQAQAAAUQAAAVAQAQQAPAPAVAAQAVAAAQgPQAQgQAAgVQAAgUgQgQQgQgQgVABIAAAAQgVAAgPAPg");
	this.shape.setTransform(-48.4,64.9,0.537,0.484);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUE1IhiAAQgJAAgFgGQgFgGgBgHIgBgNQgDghAAgRQAAgcAGgWQAKgoAXgoQATgfAhgrIAAAAQBFhVgGg0QgCgYgVgSIAAAAQgbgUglAAQgbAAgcAKIAAAAQgdAJgWARQgDAEgHgBQgNABgHgOIAAgBIgfhSQgFgNAOgKQBDgxBxgDIAAAAQA0ABAvAUQAvAUAdAiQAyA4gJBPQgGA0gcAyQgUAlgnAvQghAogPAaQgVAlgCAiIABA1IAAAKQACAIgHAGIAAABQgHAGgHAAIgBAAgAAUEhIAAgKIgBg3QACgnAXgpQAQgcAigpQAmgtATgjIABAAQAagvAFgxQAIhFgsgyQgbgfgqgSQgrgSgwgBQhqADg/AuIAAAAIgBAAIAfBRIABABQAYgSAegKQAggLAeAAQAtAAAfAZQAbAUAEAjQAHA8hLBcIAAAAQgfApgSAeQgVAlgKAmQgGAUAAAaQAAAPADAgIABANIAAAAIAAAAIAAABIBiAAg");
	this.shape_1.setTransform(-47.3,44.6,0.537,0.484);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBWAAB3QAAB4hVBWQhWBVh4AAQh3AAhWhVg");
	this.shape_2.setTransform(-47.4,48.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2F2F2").s().p("Eg8qAH0QiXAAABiWIAAq7QgBiWCXAAMB5WAAAQCVAAAACWIAAK7QAACWiVAAg");
	this.shape_3.setTransform(272.3,47.6);

	this.txt_numPreg = new cjs.Text("0", "49px 'Arial'", "#FFFFFF");
	this.txt_numPreg.name = "txt_numPreg";
	this.txt_numPreg.textAlign = "center";
	this.txt_numPreg.lineHeight = 55;
	this.txt_numPreg.lineWidth = 64;
	this.txt_numPreg.parent = this;
	this.txt_numPreg.setTransform(189.7,209.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2223C").s().p("AovIvQjnjnAAlIQAAlGDnjoQDpjoFGAAQFIAADnDoQDoDoAAFGQAAFIjoDnQjnDolIAAQlGAAjpjog");
	this.shape_4.setTransform(189.7,233.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.txt_numPreg},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_eval, new cjs.Rectangle(-131,-2.4,1174.1,503.7), null);


(lib.Certificado_Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_imprimir.on("click", function () {
			parent.imprimirIframe();
		});
		var f = new Date();
		this.nombre.text = parent.getStudentName();
		this.curso.text="Talent Management Review";
		this.cal.text= parent.SCORE;
		this.fecha.text=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Componentes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AqfKmIAA1LIU/AAIAAVLg");
	this.shape.setTransform(763,306.2,0.13,0.131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Aq4KmIAA1LIVxAAIAAVLg");
	this.shape_1.setTransform(871.6,197.4,0.13,0.131);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AqiKgIAA1AIVFAAIAAVAg");
	this.shape_2.setTransform(763,197.5,0.13,0.131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AjPDaIAAmzIGfAAIAAGzg");
	this.shape_3.setTransform(853.3,288.1,0.13,0.131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("ADWDXIm0AAIAAm2IG0AAIAAG2IAJAAIgJAIg");
	this.shape_4.setTransform(817.6,233.9,0.13,0.131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AjeDXIAIAAIAAAIgAjWDXgAjWjeIG1AAIAAG0Im1ABg");
	this.shape_5.setTransform(804.6,215.8,0.13,0.131);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AjeKqIAA1LIG1AAIAAVLgADXqhIAAgIIAIAIgADXqhg");
	this.shape_6.setTransform(817.6,215.4,0.13,0.131);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AjZDQIAAmfIGzAAIAAGfg");
	this.shape_7.setTransform(890,324.3,0.13,0.131);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AjeDfIAAm0IG1AAIAAG0gADXjVIAAgJIAIAJgADXjVg");
	this.shape_8.setTransform(853.5,324.1,0.13,0.131);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AjWDUIAAmnIGtAAIAAGng");
	this.shape_9.setTransform(792.8,312.2,0.13,0.131);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("ADXDXIAIAAIgIAIgAjeDXIAAm1IG0AAIABG1g");
	this.shape_10.setTransform(744.5,239.9,0.13,0.131);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("ADWDiIm0AAIAAnEIG0AAIAAHEIAJAAIgJAIgADWjiIAAgHIAJAHgADWjig");
	this.shape_11.setTransform(769.1,251.8,0.13,0.131);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AjhDfIAAm0IgIAAIAIgJIAAAJIHDAAIAAG0gADijVIAAgJIAIAJg");
	this.shape_12.setTransform(798.8,293.9,0.13,0.131);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AjeDiIAJAAIAAAIgAjVDiIAAnEIgJAAIAJgHIAAAHIG0AAIAAHEg");
	this.shape_13.setTransform(786.7,257.9,0.13,0.131);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AjpDjIAIAAIAAAIgADiDjInDAAIAAnEIHDAAIAAgJIAIAJIgIAAIAAHEIAIAAIgIAHgAjhDjgAjpjhIAIgIIAAAIg");
	this.shape_14.setTransform(780.9,251.8,0.13,0.131);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AjqDiIAIAAIAAAIgAjiDiIAAnDIHEAAIAAHDgADijhIAAgIIAIAIgADijhg");
	this.shape_15.setTransform(877.9,282,0.13,0.131);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AjhDeIAAmzIgIAAIAIgIIAAAIIHDAAIAAGzgADijVIAAgIIAIAIg");
	this.shape_16.setTransform(823.5,281.8,0.13,0.131);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AjeDjIABm9IgIAAIAIgIIAAAIIG7AKIAAGzgADejQIAAgIIAIAIg");
	this.shape_17.setTransform(769,269.7,0.13,0.131);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AjuDWIAHAAIAAAIgAjnjdIHPAAIAAGmIAIAAIgIAJIAAgJInPANg");
	this.shape_18.setTransform(763.1,264.1,0.13,0.131);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("ADjDWInEAAIAAm0IHEAAIAAG0IAHAAIgHAJgAjpDWIAIAAIAAAIg");
	this.shape_19.setTransform(883.9,276.1,0.13,0.131);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("ADiDWInDAAIAAm0IHDAAIAAG0IAIAAIgIAJgAjpDWIAIAAIAAAJg");
	this.shape_20.setTransform(877.9,227.8,0.13,0.131);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AjXDWIAAmrIGvAAIAAGrg");
	this.shape_21.setTransform(792.8,179.4,0.13,0.131);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AjTDXIAAmtIGnAAIAAGtg");
	this.shape_22.setTransform(744.3,227.6,0.13,0.131);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AjqDiIAIAAIAAAIgAjiDiIAAnEIHEAAIAAHEgADijiIAAgIIAIAIgADijig");
	this.shape_23.setTransform(804.8,191.5,0.13,0.131);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("ADXDXIm1AAIAAm2IG1AAIAAG2IAIAAIgIAJg");
	this.shape_24.setTransform(793,191.6,0.13,0.131);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AjZDSIAAmjIGzAAIAAGjg");
	this.shape_25.setTransform(841.3,185.4,0.13,0.131);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AjyDfIAAm1IgIAAIAIgIIAAAIIHtAAIAAG1g");
	this.shape_26.setTransform(871.4,324.1,0.13,0.131);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AkMDiIAIAAIAAAIgAkEDiIACnDIIHAIIAAgIIAIAIIgIAAIAAG7gAkEDigAkKjhIAIgIIAAAIg");
	this.shape_27.setTransform(750.8,245.8,0.13,0.131);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AjeHEIAAt+IG0AAIAAN+gADWm6IAAgJIAJAJgADWm6g");
	this.shape_28.setTransform(744.5,254.7,0.13,0.131);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AjeG8IAIAAIAAAIgAjWG8IAAt/IG1AAIAAN/gAjWG8g");
	this.shape_29.setTransform(841.2,212.8,0.13,0.131);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("ADiHIInDAAIAAuQIHDAAIAAOQIAIAAIgIAJgAjpnIIAIgIIAAAIg");
	this.shape_30.setTransform(829.4,212.6,0.13,0.131);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("ADXHIIAIAAIgIAIgAjeHIIAAuQIG1AAIAAOQgADXnIIAAgHIAIAHgADXnIg");
	this.shape_31.setTransform(793,212.6,0.13,0.131);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AjeHJIAIAAIAAAIgAjWHJIAAuQIgHAAIAHgJIAAAJIG1AAIAAOQgAjWHJg");
	this.shape_32.setTransform(889.7,285,0.13,0.131);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("ADdHOIAIAAIgIAIgAjdHOIAAuaIG6AKIAAOQgADdnCIAAgIIAJAIIgJAAgADdnCgAjlnMIAIgJIAAAJIgIAAg");
	this.shape_33.setTransform(792.9,284.9,0.13,0.131);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AnhDfIAAm1IO7AAIAAG1gAHajWIAAgIIAIAIgAHajWg");
	this.shape_34.setTransform(874.7,263.7,0.13,0.131);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AHEHIIuPAAIAAmzIGrAAIAfncIgHAAIAHgJIAAAJIHFAAIAAOPIAHAAIgHAJg");
	this.shape_35.setTransform(784.1,272.8,0.13,0.131);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AnUHIIAIAAIAAAIgAnMHIIAAuPIHEAAIAAgIIAIAIIgIAAIAAHLIHMAAIgBgHIAJAHIgIAAIAJG5IAIAAIgIAJIAAgJIuZALgAnUnHIAIgIIAAAIgAnMnHg");
	this.shape_36.setTransform(778,260.9,0.13,0.131);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AnDHJIAJAAIAAAHgAm6HJIAAuPIHDgBIAAG8IG7AYIAAG8gAnCnGIAIgJIAAAJgAAJnHIAAgIIAIAIg");
	this.shape_37.setTransform(801.6,200.5,0.13,0.131);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AqrDfIAAm1IVOAAIAAG1gAKjjWIAAgIIAJAIgAKjjWg");
	this.shape_38.setTransform(799,324.1,0.13,0.131);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AAVKkIAAnDInTAAIAAnEIgIAAIAIgIIAAAIIG6AAIAYnAIG0AAIAAVHgAnHDhIAJAAIAAAHg");
	this.shape_39.setTransform(886.8,233.7,0.13,0.131);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAZKgIAAnCInUAAIAAm3IG8gdIAAmpIHEAAIAAU/gAnEDeIAJAAIAAAIgAm7Deg");
	this.shape_40.setTransform(886.7,257.9,0.13,0.131);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AnKKqIAJAAIAAAJgAnBKqIAA1cIGyAAIAAOOIHTAAIAAHPgAHEDcIAAgJIAIAJgAHEDcg");
	this.shape_41.setTransform(760.1,233.9,0.13,0.131);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AEDHFIgYm0IuxAAIAAnMIWFAAIAAOAgAK/m7IAAgJIAIAJgAK/m7g");
	this.shape_42.setTransform(750.8,272.8,0.13,0.131);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AkQG7IAIAAIAAAIgAkIG7IAAm4InBgcIAAmpIWLAAIAAGyIAIAAIgIAIIAAgIIm9AAIgaHLgAkIG7g");
	this.shape_43.setTransform(811.3,182.6,0.13,0.131);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AngKuIAA1TIHsAAIAAHMIHMAAIAAgHIAJAHIgJAAIAAG5Im8AbIgWGzgAAMqlIAAgIIAIAIgAAMqlg");
	this.shape_44.setTransform(874.7,239.6,0.13,0.131);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("ALMKmIAIAAIgIAIgAkHKlIAIAAIAAAJgAj/KlIAAuXInMAAIAAm7IObAAIAAOCIH8AAIAAHRgAj/KlgArTjyIAIAAIAAAIgArLjyg");
	this.shape_45.setTransform(805.2,282.1,0.13,0.131);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AEKR7Im6AAIgZnCInsgBIgLnOIIGAAIAA1kIgIAAIAIgIIAAAIIHUAAIAAHQIGvAAIAAOEIm/AdIAAOEIAIAAIgIAIgAq+K4IAJAAIAAAIgArIDqIAIgIIAAAIg");
	this.shape_46.setTransform(817,263.9,0.13,0.131);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AHTOJIAIAAIAAAJgAAHOKInEAAIAAuaInMAAIAAnMIOPAAIAAm1IOMAAIAAcaIm3AAIAAm1InUAAIAAG2IAIAAIgIAIgAAOgdIG1AAIAAm3Im1AAgAnFOKIAIAAIAAAHgAm9OKgAHbOJgAuRgQIAIAAIAAAJgAuJgQg");
	this.shape_47.setTransform(777.8,236.9,0.13,0.131);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgDRyInEgBIAAnVInCAAIAAmxIHCggIAAuCIgIAAIAIgIIAAAIIG4AAIAcnCIGzAAIAAVEIHKAgIAAGxIuNAAIAAHWIAHAAIgHAIgAnPRxIAIAAIAAAIg");
	this.shape_48.setTransform(826.4,191.6,0.13,0.131);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AERVgIAAnDIoNAAIAAm3InCgeIAAt8IPHAAIAAujIG1AAIAAVeImtAAIAAHBIGuAYIAAOAgAkFOdIAJAAIAAAIgAj8OdgAEB1XIAIgIIAAAIg");
	this.shape_49.setTransform(811.1,309,0.13,0.131);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("ADFcuIuAAAIAA8iIGrgWIAAuAIm6gaIAAuJIgJAAIAJgIIAAAIIHDABIAAHLIHRAAIAAVoIICAAIAAHCIAIAAIgIAIIAAgIIu8AAIAAHFIG1AaIAAOGIAIAAIgIAIgAkH8sIAAgIIAIAIgAkH8sg");
	this.shape_50.setTransform(805.2,242.8,0.13,0.131);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("A5bY4MAAAgxvMAy3AAAMAAAAxvgAyJRmMAkdAAAMAAAgjVMgkdAAAg");
	this.shape_51.setTransform(762.5,306.2,0.13,0.131);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("A5WY6MAAAgxzMAytAAAMAAAAxzgAyRRwMAkTAAAMAAAgjaMgkTAAAg");
	this.shape_52.setTransform(871.6,197.4,0.13,0.131);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("A5WY6MAAAgxzMAytAAAMAAAAxzgAyLRqMAkeAAAMAAAgjYMgkeAAAg");
	this.shape_53.setTransform(762.6,197.6,0.13,0.131);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("EgVpBAtIgam2It2AAIAAucINzAAIAAnGImqgaIAAuDIGigTIAAuVIt+AAIAAm8IHEgZIAA8fIm7AAIgbnHIm5gYIAAm6IgJAAIAJgJIAAAJIOXAAIAA1mIgIAAIAIgJIAAAJIHEAAIAAgIIAIAIIgIAAIAAG4IHGAdIAVGpIOBAAIAbmmIGyAAIAAN6ImuAaIAAG6IGmAAIAAHFImnAdIAAGxIGpAAIAAHKIuAAAIAAmpInEAAIgaGyImsAAIAAOPIN9AAIAAmnIORAAIAeGuIGxAAIAAOmIIPAAIAAgIIAIAIIgIAAIAAHSInsAAIAAHMIHlAAIAWGxIHLAAIAAuCIG+AAIAAVSIHAAaIAAGzIuCAAIAAmqIvdAAIAAOBIuOgBIAAm4IG4gcIAAmyImtAAIgcnLImzAAIAAN4InaAgIAAN/gAuYcmIVGAAIAA1CI1GAAgEgWHgkAIm5AYIAAG8IOKAAIAam/IGwgYIAAmwIt9AAgEAOCA5oIAIAAIgIAIgEgAUA5nIAIAAIAAAIgEAkhAVyIAAgIIAJAIgEgkUAHQIAIAAIAAAJgEgkMAHQg");
	this.shape_54.setTransform(856.5,272.8,0.13,0.131);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Eh4hB3MMAAAjuXMDxDAAAMAAADuXg");
	this.shape_55.setTransform(816.7,252.2,0.13,0.131);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape_56.setTransform(612.3,354.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_57.setTransform(606,351.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZAsQgLgKAAgUQAAgUANgLQAJgJAOABQAQgBAKALQALALAAARQAAAPgFAJQgFAIgIAFQgJAFgKAAQgQAAgJgLgAgPgHQgHAHAAAOQAAAPAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgQQAAgNgHgHQgGgHgKAAQgJAAgGAHgAgGghIAJgVIARAAIgQAVg");
	this.shape_58.setTransform(597.6,350.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_59.setTransform(591.8,350);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_60.setTransform(586.6,351.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_61.setTransform(578.4,351.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_62.setTransform(572.3,350.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_63.setTransform(568.4,350);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_64.setTransform(563.2,351.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_65.setTransform(555,351.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_66.setTransform(546.9,352.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_67.setTransform(538.3,351.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_68.setTransform(530.7,351.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_69.setTransform(518.3,351.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_70.setTransform(509.7,350.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_71.setTransform(500,350);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_72.setTransform(494.1,351.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_73.setTransform(485.8,351.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_74.setTransform(477.5,351.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_75.setTransform(469.5,351.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_76.setTransform(463.9,351.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_77.setTransform(456.6,351.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_78.setTransform(448.5,352.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_79.setTransform(438.2,350);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_80.setTransform(432.4,351.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_81.setTransform(422.2,351.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_82.setTransform(414.9,351.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_83.setTransform(406.8,352.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_84.setTransform(394.1,351.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_85.setTransform(385.4,350.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_86.setTransform(377.3,351.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_87.setTransform(371.2,350.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_88.setTransform(367.4,350);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_89.setTransform(362.2,351.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_90.setTransform(356.5,350);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_91.setTransform(353.1,350);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_92.setTransform(347.3,351.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_93.setTransform(339.3,351.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_94.setTransform(329.6,351.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_95.setTransform(322.3,351.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_96.setTransform(314.3,351.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_97.setTransform(302.3,351.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_98.setTransform(293.7,350.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_99.setTransform(285.6,351.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQAlQgHgCgCgEQgEgFgBgGIgBgMIAAgvIAOAAIAAArIABANQABAFAEADQAEADAGAAQAFAAAFgDQAFgCACgGQACgFABgKIAAgpIANAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgGgDg");
	this.shape_100.setTransform(277.2,351.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_101.setTransform(269.1,352.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_102.setTransform(256.4,351.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_103.setTransform(250.3,350.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_104.setTransform(243.9,351.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_105.setTransform(235.5,351.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_106.setTransform(227.4,350.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_107.setTransform(218.9,351.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_108.setTransform(212.8,351.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_109.setTransform(205.7,352.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_110.setTransform(195.1,351.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_111.setTransform(184.7,351.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_112.setTransform(177,351.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_113.setTransform(164.6,351.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_114.setTransform(158.5,350.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_115.setTransform(152.5,351.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_116.setTransform(144.1,350);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgGAnIAAgPIANAAIAAAPgAgGgXIAAgPIANAAIAAAPg");
	this.shape_117.setTransform(182.6,332.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_118.setTransform(175.5,331.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgjAAIAABeg");
	this.shape_119.setTransform(166,331.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_120.setTransform(155.6,331.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAcA2Ig4hUIAABUIgNAAIAAhrIAOAAIA4BUIAAhUIANAAIAABrg");
	this.shape_121.setTransform(144.2,331.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgHAHIAAgOIAOAAIAAAOg");
	this.shape_122.setTransform(594.7,307.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_123.setTransform(588.4,303.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_124.setTransform(582.3,302.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_125.setTransform(575.9,303.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_126.setTransform(567.5,303.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_127.setTransform(557.2,303.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_128.setTransform(546.7,303.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_129.setTransform(540.6,302.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_130.setTransform(534.9,303.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_131.setTransform(526.7,303.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_132.setTransform(520.6,303.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_133.setTransform(515.6,303.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_134.setTransform(508.4,303.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_135.setTransform(500.7,303.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_136.setTransform(488.4,303.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_137.setTransform(480.4,303.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_138.setTransform(474.8,303.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgRAlQgFgCgEgEQgDgFgBgFIAAgNIAAgvIANAAIAAArIAAANQACAGAEACQAEADAGAAQAFAAAFgDQAFgDACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_139.setTransform(467.5,304);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_140.setTransform(459.8,303.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_141.setTransform(450,302.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_142.setTransform(444.1,303.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_143.setTransform(431.7,303.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_144.setTransform(423,302.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_145.setTransform(414.9,303.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_146.setTransform(408.8,302.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_147.setTransform(402.4,303.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_148.setTransform(396.6,302.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_149.setTransform(391,305.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_150.setTransform(380.4,303.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_151.setTransform(369.9,303.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_152.setTransform(362.2,303.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_153.setTransform(350.3,303.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_154.setTransform(342.4,303.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AASA2IAAgyQAAgIgDgFQgFgEgIAAQgFAAgFADQgFADgCAFQgCAEgBAJIAAArIgMAAIAAhrIAMAAIAAAnQAKgLANAAQAIAAAHAEQAGADADAGQADAGAAAKIAAAyg");
	this.shape_155.setTransform(334.1,302.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgHAMQAEgBACgDQABgFABgFIgHAAIAAgPIAOAAIAAAPQAAAIgDAEQgDAFgGADg");
	this.shape_156.setTransform(323.7,308.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_157.setTransform(317.4,303.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgaAtQgJgLgBgUQAAgVANgKQAJgJAOABQAQAAAKAKQALAKgBASQABAPgFAJQgEAIgJAFQgJAFgKAAQgPAAgLgKgAgPgHQgHAHAAAOQAAAPAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgQQAAgNgHgHQgGgHgKAAQgJAAgGAHgAgGghIAJgVIARAAIgQAVg");
	this.shape_158.setTransform(309.1,302.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_159.setTransform(303.2,302.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_160.setTransform(298,303.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_161.setTransform(289.8,303.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_162.setTransform(281.7,305.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_163.setTransform(275.7,302.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_164.setTransform(270.5,303.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgGA2IAAhNIAMAAIAABNgAgGglIAAgQIAMAAIAAAQg");
	this.shape_165.setTransform(264.8,302.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_166.setTransform(261.2,302.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_167.setTransform(257.1,303.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_168.setTransform(249.8,303.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_169.setTransform(241.7,305.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgQAlQgHgCgCgEQgDgFgCgFIgBgNIAAgvIAOAAIAAArIABANQABAGAEACQAEADAGAAQAFAAAFgDQAFgDADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgMQgJAOgPAAQgHAAgFgDg");
	this.shape_170.setTransform(228.9,304);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_171.setTransform(222.8,302.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_172.setTransform(214.6,303.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_173.setTransform(207.3,303.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_174.setTransform(199.2,305.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_175.setTransform(186.8,303.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_176.setTransform(178.9,303.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_177.setTransform(173.1,302.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_178.setTransform(167.9,303.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_179.setTransform(159.7,303.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_180.setTransform(153.7,303.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgXAwQgNgGgGgNQgHgNAAgQQAAgPAHgNQAGgNANgHQAMgGAPAAQAMAAAJADQAJAEAGAGQAFAIADAKIgNAEQgCgJgEgEQgDgFgHgCQgHgEgIAAQgJAAgHAEQgHADgEAEQgFAFgCAGQgEAKAAALQAAAOAFAKQAFAJAJAFQAKAEAJABQAKgBAIgDQAJgDAFgEIAAgVIggAAIAAgLIAuAAIAAAmQgLAJgLAEQgLAFgMgBQgPABgNgIg");
	this.shape_181.setTransform(144.7,302.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgHAqIAAgRIAPAAIAAARgAgHgZIAAgPIAPAAIAAAPg");
	this.shape_182.setTransform(234.5,265.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgeAkQgHgGAAgLQAAgFACgGQADgEAFgEQAFgCAFgBIAMgCQARgDAHgCIAAgEQAAgJgDgDQgGgFgKABQgKgBgEAEQgFADgCAJIgOgCQACgIAFgGQADgFAJgDQAIgDAJgBQALAAAHADQAGACADAEQAEAEABAGIABANIAAARQAAAUABAGIADAKIgOAAIgEgKQgHAGgHADQgHACgIAAQgNABgIgIgAgCAFIgNADQgDABgCAEQgCADAAADQAAAGAEADQAFAFAHAAQAIgBAGgDQAHgEADgGQABgEAAgKIAAgFQgHADgOACg");
	this.shape_183.setTransform(227.8,265.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgVArIAAhSIAMAAIAAAMQAFgJAEgCQADgDAFgBQAHAAAIAFIgGANQgEgDgGAAQgEAAgDADQgDADgCAEQgDAIAAAJIAAArg");
	this.shape_184.setTransform(221.3,265.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape_185.setTransform(213.5,265.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAUA5IAAg0QAAgKgFgFQgEgEgJAAQgFAAgFADQgGADgCAGQgDAEAAAKIAAAtIgOAAIAAhxIAOAAIAAApQAKgMAOAAQAJAAAHAEQAHAEADAGQADAGAAAMIAAA0g");
	this.shape_186.setTransform(204.6,263.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgeA5IgBgNIAIABQAFAAADgCIAEgEIAFgLIABgDIgghSIAPAAIARAwIAGASIAFgSIASgwIAOAAIggBTQgEAOgDAFQgDAHgFADQgFADgHAAIgJgBg");
	this.shape_187.setTransform(191.8,267);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgeAkQgHgGAAgLQAAgFACgGQADgEAFgEQAEgCAGgBIANgCQAQgDAHgCIAAgEQAAgJgDgDQgGgFgKABQgKgBgEAEQgFADgCAJIgOgCQACgIAFgGQADgFAJgDQAIgDAJgBQALAAAHADQAGACADAEQAEAEABAGIABANIAAARQAAAUAAAGIAEAKIgOAAIgEgKQgHAGgHADQgHACgIAAQgNABgIgIgAgCAFIgNADQgDABgCAEQgCADAAADQAAAGAEADQAFAFAHAAQAHgBAHgDQAGgEADgGQACgEAAgKIAAgFQgHADgOACg");
	this.shape_188.setTransform(178.8,265.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAUA5IAAg0QAAgKgFgFQgEgEgJAAQgFAAgFADQgGADgCAGQgDAEAAAKIAAAtIgOAAIAAhxIAOAAIAAApQAKgMAOAAQAJAAAHAEQAHAEADAGQADAGAAAMIAAA0g");
	this.shape_189.setTransform(169.9,263.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgZAhQgKgMAAgVQAAgMAEgKQAFgLAJgFQAJgEAKgBQANABAIAGQAJAIADAMIgOACQgCgIgFgFQgFgEgHAAQgJAAgHAIQgHAIAAAPQAAARAGAHQAHAIAKAAQAHAAAGgGQAFgEACgLIAOACQgCAOgKAIQgJAJgNgBQgQABgLgLg");
	this.shape_190.setTransform(161.8,265.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAAEIg9AAQABANAHAIQAHAHAJAAQAIAAAFgEQAGgEADgJIAPABQgEAOgJAGQgJAIgPgBQgRAAgLgLgAgPgZQgGAHgBALIAtAAQgBgLgEgEQgHgJgKAAQgJAAgHAGg");
	this.shape_191.setTransform(153,265.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgmA5IAAhxIBNAAIAAANIg9AAIAAAkIA0AAIAAAMIg0AAIAAA0g");
	this.shape_192.setTransform(144,263.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgHApIAAgPIAPAAIAAAPgAgHgZIAAgQIAPAAIAAAQg");
	this.shape_193.setTransform(222.9,225.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAUAqIAAgxQAAgIgCgFQgCgEgEgCQgEgDgGAAQgIAAgGAGQgHAFAAAQIAAAsIgOAAIAAhSIANAAIAAANQAJgOAQgBQAIAAAGADQAGADAEAEQADAFABAGIABAOIAAAxg");
	this.shape_194.setTransform(216.2,225.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgbAvQgLgLAAgVQAAgWANgLQALgJAOgBQARABALALQALALAAATQAAAQgFAJQgFAJgJAFQgJAFgLABQgQAAgLgMgAgRgIQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIgAgHgkIAKgVIASAAIgRAVg");
	this.shape_195.setTransform(207.3,223.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_196.setTransform(201.1,223.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgZAgQgKgLAAgUQAAgNAEgKQAFgLAJgEQAJgGAJAAQAOAAAJAIQAJAHABAMIgNACQgCgJgFgDQgFgFgHAAQgJAAgHAIQgHAHAAAQQAAARAHAHQAGAIAJAAQAJAAAFgFQAGgGABgKIAOACQgCAOgKAJQgJAHgOABQgPAAgLgMg");
	this.shape_197.setTransform(195.6,225.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgeAlQgHgHAAgLQAAgFACgFQADgGAFgCQAFgCAFgCIAMgDQARgCAHgCIAAgEQAAgIgDgEQgGgFgKAAQgKAAgEAEQgFADgCAJIgOgCQACgIAFgGQADgFAJgEQAIgDAJAAQALABAHACQAGADADADQAEAEABAGIABANIAAASQAAATABAFIADAKIgOAAIgEgKQgHAHgHACQgHAEgIAAQgNgBgIgGgAgCAFIgNADQgDABgCADQgCADAAAEQAAAGAEADQAFAEAHAAQAIAAAGgDQAHgEADgGQABgEAAgKIAAgFQgHADgOACg");
	this.shape_198.setTransform(186.8,225.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgZAgQgKgLAAgUQAAgNAEgKQAFgLAJgEQAJgGAKAAQANAAAIAIQAKAHABAMIgNACQgCgJgFgDQgFgFgHAAQgKAAgGAIQgHAHAAAQQAAARAHAHQAGAIAKAAQAHAAAGgFQAFgGACgKIAOACQgCAOgKAJQgJAHgNABQgRAAgKgMg");
	this.shape_199.setTransform(178.7,225.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_200.setTransform(172.6,223.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgLA6IAAhHIgMAAIAAgLIAMAAIAAgJQAAgIACgEQACgFAFgEQAEgDAJAAIANABIgCAMIgIAAQgHAAgCACQgDADAAAIIAAAHIAQAAIAAALIgQAAIAABHg");
	this.shape_201.setTransform(169,223.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_202.setTransform(164.6,223.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_203.setTransform(161,223.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgeAlQgHgHAAgLQAAgFADgFQADgGAEgCQAFgCAFgCIANgDQAPgCAJgCIAAgEQAAgIgFgEQgFgFgKAAQgJAAgFAEQgFADgCAJIgOgCQACgIAEgGQAFgFAIgEQAIgDAKAAQAKABAHACQAGADAEADQADAEABAGIAAANIAAASQAAATABAFIAEAKIgPAAIgCgKQgIAHgIACQgFAEgJAAQgOgBgHgGgAgDAFIgLADQgFABgCADQgBADAAAEQAAAGAEADQAEAEAJAAQAGAAAHgDQAGgEADgGQADgEAAgKIAAgFQgIADgPACg");
	this.shape_204.setTransform(154.8,225.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgaA0QgLgIgHgOQgFgOAAgQQAAgSAGgNQAHgNANgHQANgHAOAAQAQAAANAJQALAIAFAQIgPAEQgEgNgHgGQgJgFgLAAQgMAAgJAGQgJAGgDALQgEALAAALQAAAOAFALQAEAKAIAGQAJAFAKAAQANAAAJgHQAJgHACgPIAQAEQgFATgMAJQgNAKgRAAQgSAAgMgHg");
	this.shape_205.setTransform(144.7,223.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgHApIAAgQIAPAAIAAAQgAgHgYIAAgQIAPAAIAAAQg");
	this.shape_206.setTransform(198.1,185.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQABQARgBALAMQAKALAAAUIAAAEIg9AAQABAOAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEAOgJAGQgJAIgPgBQgRAAgLgLgAgPgYQgGAGgBALIAtAAQgBgLgEgEQgHgJgKAAQgJAAgHAHg");
	this.shape_207.setTransform(191.3,185.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAAMQAFgJAEgCQADgDAFAAQAHgBAIAFIgGANQgEgDgGAAQgEAAgDADQgDACgCAFQgDAIAAAJIAAAqg");
	this.shape_208.setTransform(184.9,185.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgWAuIAAAKIgNAAIAAhxIAOAAIAAApQAJgMANAAQAIAAAGAEQAHADAEAFQAFAGACAIQADAHAAAJQAAAVgLALQgKAMgPAAQgNAAgJgMgAgPgIQgHAIAAAOQAAAPAEAHQAGALAMAAQAIAAAHgIQAGgIABgQQgBgQgGgHQgHgIgIAAQgIAAgHAIg");
	this.shape_209.setTransform(177.3,183.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAqAqIAAgzQAAgIgBgEQgBgDgEgDQgEgCgFAAQgIAAgGAGQgGAGAAANIAAAuIgNAAIAAg0QAAgKgDgFQgEgEgIAAQgGAAgFADQgFADgCAGQgCAGAAALIAAAqIgOAAIAAhRIAMAAIAAALQAEgGAHgEQAGgDAJAAQAJAAAGADQAFAEACAHQAKgOAQAAQAMAAAHAGQAGAIAAAOIAAA3g");
	this.shape_210.setTransform(166,185.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOABQARgBALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape_211.setTransform(154.8,185.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AAeA5Ig8hZIAABZIgOAAIAAhxIAPAAIA8BZIAAhZIAOAAIAABxg");
	this.shape_212.setTransform(144.6,183.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgHAqIAAgQIAPAAIAAAQgAgHgZIAAgQIAPAAIAAAQg");
	this.shape_213.setTransform(186.4,148.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIg");
	this.shape_214.setTransform(179.6,148.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgWAkQgJgGgDgNIAPgCQABAIAFAEQAFAFAJAAQAJAAAFgEQAFgEAAgFQAAgFgEgDQgDgCgMgCQgOgFgGgCQgGgDgDgFQgDgEAAgGQAAgGADgEQACgGAEgCQADgDAGgCQAGgCAHAAQAIAAAIADQAHADADAFQAEAFABAIIgOACQgBgGgEgEQgEgEgIAAQgKAAgDAEQgFADAAAEIACAFIAGAEIALADQAPAEAGADQAGABADAFQADAFAAAHQAAAHgDAGQgFAHgIADQgIADgJABQgPAAgIgIg");
	this.shape_215.setTransform(171.2,148.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgWArIAAhTIANAAIAAANQAFgIAEgEQADgDAFAAQAHABAHAEIgFANQgEgDgGAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAArg");
	this.shape_216.setTransform(165.2,148.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgSAnQgGgCgDgEQgDgFgCgGIgBgNIAAgzIAPAAIAAAtIAAAPQACAGAEADQAEADAHAAQAFAAAGgDQAFgDACgGQADgFAAgLIAAgsIAOAAIAABTIgNAAIAAgNQgKAOgPABQgHAAgHgEg");
	this.shape_217.setTransform(157.3,148.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgaA0QgMgIgFgOQgHgOAAgQQAAgSAIgNQAGgNANgHQAMgHAOAAQARAAAMAJQAMAIAFAQIgPAEQgEgNgIgGQgHgFgMAAQgMAAgJAGQgJAGgEALQgDALAAALQAAAOAEALQAFAKAJAGQAJAFAJAAQANAAAIgHQAJgHAEgPIAOAEQgEATgNAJQgMAKgSAAQgRAAgMgHg");
	this.shape_218.setTransform(147.3,146.9);

	this.fecha = new cjs.Text("", "20px 'Arial'");
	this.fecha.name = "fecha";
	this.fecha.textAlign = "center";
	this.fecha.lineHeight = 24;
	this.fecha.lineWidth = 376;
	this.fecha.parent = this;
	this.fecha.setTransform(433.6,249.4);

	this.cal = new cjs.Text("", "20px 'Arial'");
	this.cal.name = "cal";
	this.cal.textAlign = "center";
	this.cal.lineHeight = 24;
	this.cal.lineWidth = 376;
	this.cal.parent = this;
	this.cal.setTransform(433.6,210);

	this.nombre = new cjs.Text("", "20px 'Arial'");
	this.nombre.name = "nombre";
	this.nombre.textAlign = "center";
	this.nombre.lineHeight = 24;
	this.nombre.lineWidth = 376;
	this.nombre.parent = this;
	this.nombre.setTransform(433.6,169.7);

	this.curso = new cjs.Text("", "20px 'Arial'");
	this.curso.name = "curso";
	this.curso.textAlign = "center";
	this.curso.lineHeight = 24;
	this.curso.lineWidth = 376;
	this.curso.parent = this;
	this.curso.setTransform(433.6,129.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_219.setTransform(508.6,73.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_220.setTransform(502.8,74.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_221.setTransform(496.7,73.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_222.setTransform(490.3,74.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_223.setTransform(481.9,74.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_224.setTransform(473.6,74.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_225.setTransform(467.8,73.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_226.setTransform(464.1,73.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgCgEgDgCQgEgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIAAANIAAAvg");
	this.shape_227.setTransform(457.8,74.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_228.setTransform(449.4,74.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgZAwQgKgHgGgNQgFgOgBgOQABgRAGgMQAHgNALgGQAMgGANAAQAQgBAMAJQAKAHAEAPIgNAEQgEgMgHgFQgIgFgKgBQgMAAgIAHQgIAFgEALQgDAKAAAKQAAAMAEALQAEAKAIAFQAJAFAJAAQAMAAAIgHQAJgHACgNIAPADQgFASgLAJQgNAJgQAAQgQABgMgIg");
	this.shape_229.setTransform(439.9,73.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_230.setTransform(426,74.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_231.setTransform(418.4,74.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_232.setTransform(412.5,74.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_233.setTransform(404.4,73.3);

	this.instance = new lib.titulo();
	this.instance.parent = this;
	this.instance.setTransform(288.3,45.8,1,1,0,0,0,14.4,8.7);

	this.btn_imprimir = new lib.imprimir();
	this.btn_imprimir.parent = this;
	this.btn_imprimir.setTransform(389.4,450,1,1,0,0,0,58.5,17.3);
	new cjs.ButtonHelper(this.btn_imprimir, 0, 1, 1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgGAHIAAgOIANAAIAAAOg");
	this.shape_234.setTransform(592.1,394.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgjA2IAAhrIBHAAIAAANIg5AAIAAAhIAxAAIAAAMIgxAAIAAAxg");
	this.shape_235.setTransform(585.7,390.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgsA2IAAhrIAlAAQAMAAAGACQAKACAGAGQAJAHAEALQAEALAAAOQAAAMgCAJQgEAKgEAGQgFAGgEAEQgGADgIACQgHACgJAAgAgdApIAWAAQALAAAFgCQAGgCAEgDQAFgGADgIQACgJAAgLQABgRgGgJQgFgJgJgDQgFgCgMAAIgWAAg");
	this.shape_236.setTransform(575.6,390.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgoA2IAAhrIAoAAIAQABQAIACAFADQAFAEAEAHQADAGAAAIQAAAOgIAJQgKAJgWAAIgbAAIAAAsgAgagCIAbAAQAOAAAFgFQAHgFgBgJQAAgHgDgFQgEgEgFgCIgOgBIgaAAg");
	this.shape_237.setTransform(565.3,390.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_238.setTransform(551.7,391.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgBAzQgEgCgBgEQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_239.setTransform(545.5,390.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_240.setTransform(539.1,391.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_241.setTransform(528.8,391.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_242.setTransform(520.6,391.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_243.setTransform(513.3,391.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgKA2IAAhCIgMAAIAAgLIAMAAIAAgHQAAgJABgDQACgFAFgEQAEgDAIABIANAAIgCAMIgIgBQgGAAgDADQgCACAAAIIAAAGIAPAAIAAALIgPAAIAABCg");
	this.shape_244.setTransform(507.4,390.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_245.setTransform(496.7,391.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_246.setTransform(488.3,391.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_247.setTransform(475.8,391.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgBAzQgEgCgCgEQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_248.setTransform(469.7,390.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_249.setTransform(463.3,391.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_250.setTransform(454.9,391.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_251.setTransform(446.8,390.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_252.setTransform(438.3,391.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_253.setTransform(432.2,391.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_254.setTransform(425.1,393.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_255.setTransform(414.5,391.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_256.setTransform(404.1,391.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_257.setTransform(396.4,391.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgRAlQgGgCgDgEQgCgFgBgFIgBgNIAAgvIANAAIAAArIAAANQACAGAEACQAEADAGABQAFgBAFgDQAFgDACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_258.setTransform(384,391.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgBAzQgEgCgBgEQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_259.setTransform(377.9,390.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_260.setTransform(367.4,391.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_261.setTransform(358.8,390.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_262.setTransform(353,391.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_263.setTransform(345.7,391.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgRAlQgFgCgEgEQgDgFAAgFIgBgNIAAgvIANAAIAAArIAAANQACAGAEACQAEADAGABQAFgBAFgDQAFgDACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_264.setTransform(337.3,391.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgXAxQgIgGAAgNIANADQABAGAEACQAEADAJABQAIgBAFgDQAFgDACgIQABgDAAgNQgJAKgMAAQgQAAgJgMQgIgLAAgQQAAgLAEgJQAEgJAHgGQAIgEAKAAQANgBAJALIAAgJIAMAAIAABCQAAATgEAHQgDAIgIAEQgIAEgLAAQgOABgJgHgAgOgkQgGAGAAAOQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgHQgHgIgJAAQgIAAgGAIg");
	this.shape_265.setTransform(328.8,393.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_266.setTransform(316.5,391.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_267.setTransform(304,391.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_268.setTransform(293.6,391.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgMA2IAAhNIAMAAIAABNgAgNggIAKgVIAQAAIgPAVg");
	this.shape_269.setTransform(286,390.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_270.setTransform(281.3,391.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_271.setTransform(274.2,393.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_272.setTransform(263.6,391.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_273.setTransform(255.3,390.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.btn_imprimir},{t:this.instance},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.curso},{t:this.nombre},{t:this.cal},{t:this.fecha},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Certificado_Symbol, new cjs.Rectangle(136.9,13.1,779.9,455.1), null);


(lib.animaciontitulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_90 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(1));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("Eg+TANFIAA6JMB8nAAAIAAaJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:98,y:188.1}).wait(46));

	// tit 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95.6,331.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(1).to({regX:-6.3,regY:58.6,x:89.3,y:389.4},0).wait(1).to({y:387.4},0).wait(1).to({y:383.4},0).wait(1).to({y:376.3},0).wait(1).to({y:363.8},0).wait(1).to({y:338.8},0).wait(1).to({y:290.4},0).wait(1).to({y:258},0).wait(1).to({y:242.8},0).wait(1).to({y:234.7},0).wait(1).to({y:230.3},0).wait(1).to({y:228.1},0).wait(1).to({regX:0,regY:0,x:95.6,y:168.9},0).wait(33));

	// Layer 3
	this.instance_1 = new lib.Sydsfmbol1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,104.3,1,0.061,0,0,0,395.9,66);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({scaleY:0.06,y:104.5},0).wait(1).to({scaleY:0.07,y:105},0).wait(1).to({scaleY:0.09,y:106.1},0).wait(1).to({scaleY:0.11,y:107.8},0).wait(1).to({scaleY:0.15,y:110.4},0).wait(1).to({scaleY:0.21,y:114.5},0).wait(1).to({scaleY:0.31,y:121},0).wait(1).to({scaleY:0.48,y:132.6},0).wait(1).to({scaleY:0.77,y:152},0).wait(1).to({scaleY:0.99,y:167.1},0).wait(1).to({scaleY:1.11,y:175.3},0).wait(1).to({scaleY:1.18,y:180.1},0).wait(1).to({scaleY:1.23,y:183.1},0).wait(1).to({scaleY:1.25,y:185},0).wait(1).to({scaleY:1.27,y:186.2},0).wait(1).to({scaleY:1.28,y:186.8},0).wait(1).to({scaleY:1.28,y:187.1},0).wait(35));

	// Layer 2
	this.instance_2 = new lib.linia("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.2,103.9,1,1,0,0,0,0,103.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).wait(1).to({scaleY:1.01,rotation:0.4,x:103.1},0).wait(1).to({scaleY:1.05,rotation:1.8},0).wait(1).to({scaleY:1.14,rotation:4.5,x:103.2,y:104},0).wait(1).to({scaleY:1.28,rotation:9.1},0).wait(1).to({scaleY:1.52,rotation:16.9},0).wait(1).to({scaleY:1.92,rotation:30.1,y:103.9},0).wait(1).to({scaleY:2.57,rotation:51.2,x:103.1},0).wait(1).to({scaleY:3.16,rotation:70.7,x:103.2,y:104},0).wait(1).to({scaleY:3.49,rotation:81.4,x:103.1,y:103.9},0).wait(1).to({scaleY:3.66,rotation:86.8},0).wait(1).to({scaleY:3.73,rotation:89.3,x:103.2},0).wait(1).to({scaleY:3.75,rotation:90},0).to({_off:true},1).wait(52));

	// Layer 1
	this.instance_3 = new lib.cuadro("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(103.9,103.9,0.143,0.143,-90,0,0,103.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.15,scaleY:0.15,rotation:-90.3},0).wait(1).to({scaleX:0.16,scaleY:0.16,rotation:-91.4},0).wait(1).to({scaleX:0.18,scaleY:0.18,rotation:-93.5},0).wait(1).to({scaleX:0.21,scaleY:0.21,rotation:-97.4},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-104.9},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-123.6},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-159},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-170.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-175.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-178.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-179.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-180},0).wait(1).to({scaleX:1},0).wait(1).to({scaleX:0.98},0).wait(1).to({scaleX:0.94},0).wait(1).to({scaleX:0.88},0).wait(1).to({scaleX:0.78},0).wait(1).to({scaleX:0.62},0).wait(1).to({scaleX:0.42},0).wait(1).to({scaleX:0.25},0).wait(1).to({scaleX:0.14},0).wait(1).to({scaleX:0.07},0).wait(1).to({scaleX:0.03},0).wait(1).to({scaleX:0.01},0).wait(1).to({regX:103.7,scaleX:0.01,rotation:0,skewX:180},0).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86.1,86.1,35.7,35.7);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Capa 4
	this.instance = new lib.animaciontitulo();
	this.instance.parent = this;
	this.instance.setTransform(750.5,294,0.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(20));

	// Capa 1
	this.instance_1 = new lib.text01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132,143.3,1.2,1.2,0,0,0,257.9,241.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:241.3,scaleX:1,scaleY:1,x:172,y:143.4,alpha:1},14,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.5,-146.1,1557.3,820);


// stage content:
(lib.T_AC_IMCR_OV_EV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{inicio:0,"inicio":2});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		try {
			parent.iniciar_tema(this);
		} catch (e) {
			console.log("No hay comunicación con el start.js", e);
		}
		
		//------------------------------ CODIGO GLOBAL ------------------------------------
		
		var root = this;
		//variables necesarias para el guardado de respuestas 
		this.calificacion = 0;
		this.res = 0;
		this.minima = parent.califMinima;
		//this.minima = 80;
		//this.oportunidades = 3;
		var nPreguntas = 10;
		//this.resultados = ["0", "0", "0", "0", "0", "0", "0"]; //en este arreglo se guardaran las calificaciones de cada pregunta 
		//this.Array = ["", "", "", "", "", "", "", "", "", "",]; // se guarda en orden de las preguntas
		//this.preguntas = ["", "", "", "", "", "", "", "","", "",]; //se guardara la pregunta 
		//this.respuestas = ["", "", "", "", "", "", "", "", "", "",]; // se guarda la respuesta seleccionada
		//this.correctas = ["", "", "", "", "", "", ""]; //se guardara la(s) respuesta(s) correctas ;
		console.log(EvalInfo);
		this.resultados = []; 
		this.Array = [];
		this.preguntas = []; 
		this.respuestas = [];
		this.correctas = [];
		for (var t = 0; t <10; t++){
				this.resultados[t] = "0";
				this.Array[t] = "";
				this.preguntas[t] = "";
				this.respuestas[t] = "";
				this.correctas[t] = "";
		}
		this.cont = 0;
		this.x;
		this.val = true;
		//arreglo para el random
		
		for (var i = 0; i < nPreguntas; i++) {
			this.x = parseInt(Math.random() * EvalInfo.preguntas.length );
			for (var j = 0; j < nPreguntas; j++) {
				if (this.x == this.Array[j]) {
					this.val = false;
				}
			}
			if (this.val) {
				this.Array[i] = this.x;
			} else {
				this.val = true;
				i--;
			}
		}
		stage.enableMouseOver();
		this.btn_iniciar.cursor = "pointer";
		this.btn_iniciar.addEventListener("click", comenzar);
		
		function comenzar(){
			root.gotoAndStop((root.timeline.position+1));
		}
		
		/*
		//Actividades que llevar drag and drop etc.
		
		this.btn_iniciar.cursor = "pointer";
		this.btn_iniciar.addEventListener("click", fn1);
		
		function fn1() {
			//console.log("iniciar ", root.timeline.position + 1);
			root.gotoAndStop(root.timeline.position + 1);
			//root.mc_eval.gotoAndPlay(root.Array[root.cont] - 1);
		}¨
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		*/
		this.stop();
		/*
		var root = this;
		//variables necesarias para el guardado de respuestas 
		this.calificacion = 0;
		this.res = 0;
		this.minima = parent.califMinima;
		if(this.minima < 70){
				this.minima = 80;
		}
		var nPreguntas = 10;
		//this.resultados = ["0", "0", "0", "0", "0", "0", "0"]; //en este arreglo se guardaran las calificaciones de cada pregunta 
		//this.Array = ["", "", "", "", "", "", "", "", "", "",]; // se guarda en orden de las preguntas
		//this.preguntas = ["", "", "", "", "", "", "", "","", "",]; //se guardara la pregunta 
		//this.respuestas = ["", "", "", "", "", "", "", "", "", "",]; // se guarda la respuesta seleccionada
		//this.correctas = ["", "", "", "", "", "", ""]; //se guardara la(s) respuesta(s) correctas ;
		console.log(EvalInfo);
		this.resultados = []; 
		this.Array = [];
		this.preguntas = []; 
		this.respuestas = [];
		this.correctas = [];
		for (var t = 0; t <10; t++){
				this.resultados[t] = "0";
				this.Array[t] = "";
				this.preguntas[t] = "";
				this.respuestas[t] = "";
				this.correctas[t] = "";
		}
		this.cont = 0;
		this.x;
		this.val = true;
		//arreglo para el random
		
		for (var i = 0; i < nPreguntas; i++) {
			this.x = parseInt(Math.random() * EvalInfo.preguntas.length );
			for (var j = 0; j < nPreguntas; j++) {
				if (this.x == this.Array[j]) {
					this.val = false;
				}
			}
			if (this.val) {
				this.Array[i] = this.x;
			} else {
				this.val = true;
				i--;
			}
		}
		stage.enableMouseOver();
		this.btn_iniciar.cursor = "pointer";
		this.btn_iniciar.addEventListener("click", comenzar);
		
		function comenzar(){
			root.gotoAndStop((root.timeline.position+1));
		}
		
		/*
		//Actividades que llevar drag and drop etc.
		
		this.btn_iniciar.cursor = "pointer";
		this.btn_iniciar.addEventListener("click", fn1);
		
		function fn1() {
			//console.log("iniciar ", root.timeline.position + 1);
			root.gotoAndStop(root.timeline.position + 1);
			//root.mc_eval.gotoAndPlay(root.Array[root.cont] - 1);
		}¨
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		
		*/
		var root = this;
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
		var root = this;
		//variables necesarias para el guardado de respuestas 
		this.calificacion = 0;
		this.res = 0;
		this.minima = parent.califMinima;
		var nPreguntas = 10;
		//this.resultados = ["0", "0", "0", "0", "0", "0", "0"]; //en este arreglo se guardaran las calificaciones de cada pregunta 
		//this.Array = ["", "", "", "", "", "", "", "", "", "",]; // se guarda en orden de las preguntas
		//this.preguntas = ["", "", "", "", "", "", "", "","", "",]; //se guardara la pregunta 
		//this.respuestas = ["", "", "", "", "", "", "", "", "", "",]; // se guarda la respuesta seleccionada
		//this.correctas = ["", "", "", "", "", "", ""]; //se guardara la(s) respuesta(s) correctas ;
		console.log(EvalInfo);
		this.resultados = []; 
		this.Array = [];
		this.preguntas = []; 
		this.respuestas = [];
		this.correctas = [];
		for (var t = 0; t <10; t++){
				this.resultados[t] = "0";
				this.Array[t] = "";
				this.preguntas[t] = "";
				this.respuestas[t] = "";
				this.correctas[t] = "";
		}
		this.cont = 0;
		this.x;
		this.val = true;
		//arreglo para el random
		
		for (var i = 0; i < nPreguntas; i++) {
			this.x = parseInt(Math.random() * EvalInfo.preguntas.length );
			for (var j = 0; j < nPreguntas; j++) {
				if (this.x == this.Array[j]) {
					this.val = false;
				}
			}
			if (this.val) {
				this.Array[i] = this.x;
			} else {
				this.val = true;
				i--;
			}
		}
		stage.enableMouseOver();
		this.btn_iniciar.cursor = "pointer";
		this.btn_iniciar.addEventListener("click", comenzar);
		
		function comenzar(){
			root.gotoAndStop((root.timeline.position+1));
		}
		
		this.imprimirCal = function () {
			for (var i = 0; i < this.resultados.length; i++) {
				this.calificacion += this.resultados[i];
				this.res += this.resultados[i];
			}
			/*switch (this.calificacion) {
				case 50:
					this.calificacion = 80;
					break;
				case 60:
					this.calificacion = 90;
					break;
				case 70:
					this.calificacion = 100;
					break;
			}
			if (this.calificacion <= 40) {
				this.calificacion = 70;
		
			}*/
			console.log(this.calificacion);
		}
		
		this.aumentarIntento = function(){
			try{
				parent.intentos++;
				parent.guardarDatos();	
			}catch(e){
					console.warn("Corriendo standalone");
			}
		}
		
		/*
		//Actividades que llevar drag and drop etc.
		
		this.btn_iniciar.cursor = "pointer";
		this.btn_iniciar.addEventListener("click", fn1);
		
		function fn1() {
			//console.log("iniciar ", root.timeline.position + 1);
			root.gotoAndStop(root.timeline.position + 1);
			//root.mc_eval.gotoAndPlay(root.Array[root.cont] - 1);
		}¨
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		*/
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
		var root = this;
		
		root.imprimirCal();
		
		if (this.calificacion < this.minima) {
			debugger
			console.log("calificacion no aprobatoria");
			root.retro_eval.terminar.visible = false;
			root.retro_eval.reintentar.addEventListener("click", reintentar);
			root.retro_eval.reintentar.cursor = "pointer";
			try {
				if (this.calificacion > parent.SCORE) {
					parent.SCORE = this.calificacion;
				}
				if (parent.intentoAct >= parent.oportunidades) {
					console.log("Fail", parent.intentoAct, this.calificacion, this.minima);
					parent.new_nswf_DoFSCommand("CMISetFailed", "");
					parent.new_nswf_DoFSCommand("CMISetScore", parent.SCORE);
					parent.ComunicacionLMS("completado");
				}
				parent.guardarDatos();
			} catch (err) {
				console.log("No hay comunicación con el start.js u otros componentes");
			}
		} else {
			console.log("calificacion aprobatoria");
			root.retro_eval.reintentar.addEventListener("click", reintentar);
			root.retro_eval.reintentar.cursor = "pointer";
			root.retro_eval.reintentar.visible = true;
			root.retro_eval.terminar.addEventListener("click", function () {
				root.play();
			});
			root.retro_eval.terminar.cursor = "pointer";
			try {
				if (this.calificacion > parent.SCORE) {
					parent.SCORE = this.calificacion;
				}
				parent.guardarDatos();
				parent.new_nswf_DoFSCommand("CMISetScore", parent.SCORE);
				parent.ComunicacionLMS("completado");
				parent.new_nswf_DoFSCommand("CMISetPassed", "");
			} catch (err) {
				console.log("No hay comunicación con API", err);
			}
		}
		console.log("MaxIntentos:" + parent.oportunidades);
		function reintentar() {
			try {
					parent.intentoAct++;
					location.reload();
				
			} catch (err) {
				console.log("no hay comunicacion con start.js:" + err);
			}
		}
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// btnIniciar
	this.btn_iniciar = new lib.btnIniciar();
	this.btn_iniciar.parent = this;
	this.btn_iniciar.setTransform(1064.8,557.1,1,1,0,0,0,71.9,13.5);

	this.timeline.addTween(cjs.Tween.get(this.btn_iniciar).to({_off:true},2).wait(3));

	// Capa 1
	this.instance = new lib.MC_pag1();
	this.instance.parent = this;
	this.instance.setTransform(78,95.3);

	this.instance_1 = new lib.mc_portada();
	this.instance_1.parent = this;
	this.instance_1.setTransform(604.4,332.2,1,1,0,0,0,296.4,178.5);

	this.mc_eval = new lib.mc_eval();
	this.mc_eval.parent = this;
	this.mc_eval.setTransform(583.6,362.4,1,1,0,0,0,487.5,239.9);

	this.retro_eval = new lib.mc_retro_eval();
	this.retro_eval.parent = this;
	this.retro_eval.setTransform(490.9,418.8,1,1,0,0,0,197.8,58.8);

	this.instance_2 = new lib.Certificado_Symbol();
	this.instance_2.parent = this;
	this.instance_2.setTransform(533.9,335.5,1,1,0,0,0,489,250);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AiwlhIFhFhIlhFig");
	this.shape.setTransform(512.3,315.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("Egp5AYxQhoAAhJhJQhJhJAAhoMAAAgptQAAhoBJhJQBJhJBoAAMBXtAAAMAAAAxhg");
	this.shape_1.setTransform(433,340);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEFEF").s().p("Eg/AAYxQhoAAhJhJQhKhJABhoMAAAgptQgBhoBKhJQBJhJBoAAMB+CAAAQBnAABJBJQBJBJABBoMAAAAptQAAA1gTAtQgTArgkAkQhJBJhnAAg");
	this.shape_2.setTransform(568.1,340);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,102,0,0.008)").ss(1,1,1).p("AAABAIAAh/");
	this.shape_3.setTransform(-896.4,464.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.mc_eval}]},1).to({state:[{t:this.retro_eval}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500.5,286.7,1557.3,820);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Mapadebitseval.png", id:"Mapadebitseval"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;