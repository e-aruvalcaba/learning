(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AC_IMCR_OV_26_atlas_", frames: [[1208,0,51,45],[0,0,1206,680]]}
];


// symbols:



(lib.chunk = function() {
	this.spriteSheet = ss["AC_IMCR_OV_26_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eval01 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_26_atlas_"];
	this.gotoAndStop(1);
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


(lib.transicion_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhdZA0cMAAAho3MC6zAAAMAAABo3g");
	this.shape.setTransform(597.8,337.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhdZAxBMAAAhiBMC6zAAAMAAABiBg");
	this.shape_1.setTransform(597.8,359.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhdZAtmMAAAhbLMC6zAAAMAAABbLg");
	this.shape_2.setTransform(597.8,381.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhdZAqLMAAAhUVMC6zAAAMAAABUVg");
	this.shape_3.setTransform(597.8,403.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhdZAmvMAAAhNdMC6zAAAMAAABNdg");
	this.shape_4.setTransform(597.8,425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EhdZAjUMAAAhGnMC6zAAAMAAABGng");
	this.shape_5.setTransform(597.8,446.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhdZAf5MAAAg/xMC6zAAAMAAAA/xg");
	this.shape_6.setTransform(597.8,468.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EhdZAceMAAAg46MC6zAAAMAAAA46g");
	this.shape_7.setTransform(597.8,490.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EhdZAZCMAAAgyDMC6zAAAMAAAAyDg");
	this.shape_8.setTransform(597.8,512.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EhdZAVnMAAAgrNMC6zAAAMAAAArNg");
	this.shape_9.setTransform(597.8,534.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EhdZASMMAAAgkXMC6zAAAMAAAAkXg");
	this.shape_10.setTransform(597.8,556.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EhdZAOwIAA9gMC6zAAAIAAdgg");
	this.shape_11.setTransform(597.8,578.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhdZALVIAA2pMC6zAAAIAAWpg");
	this.shape_12.setTransform(597.8,600.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EhdZAH6IAAvzMC6zAAAIAAPzg");
	this.shape_13.setTransform(597.8,622.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EhdZAEfIAAo9MC6zAAAIAAI9g");
	this.shape_14.setTransform(597.8,644.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EhdZABDIAAiGMC6zAAAIAACGg");
	this.shape_15.setTransform(597.8,666.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.7,1195.7,671.3);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulo, new cjs.Rectangle(-65.3,-24,120,50), null);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.eval01();
	this.instance.parent = this;
	this.instance.setTransform(13,-1,1.028,1.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(13,-1,1240,699.2), null);


(lib.Sydsfmbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(194,34,60,0.992)").s().p("Eg92AKUIAA0nMB7tAAAIAAUng");
	this.shape.setTransform(395.9,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,791.7,132);


(lib.smile_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AhBCNIgPgIIgBgBIhkhkQgKgKAAgQQAAgOAKgLIABAAQAKgLAQABQAPAAAKAKIBKBJIC4i5QALgKAPgBQAQABAKAKQALALAAAPQAAAQgLAKIjTDTQgFAFgGADQgGADgIgBIgCABQgEAAgEgCg");
	this.shape.setTransform(26.8,15.5,0.837,0.837);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.smile_gr, new cjs.Rectangle(10.7,3.6,32.2,23.8), null);


(lib.noOportunidades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Layer 2
	this.text = new cjs.Text("No has logrado acreditar esta Evaluación. Requieres una calificación mínima de 80 puntos para aprobar.\nPonte en contacto con el Área de Recursos Humanos para que te asignen de nuevo este curso.\nCierra la ventana de tu navegador", "20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 474;
	this.text.parent = this;
	this.text.setTransform(9.2,-59);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("Egk/AMHQiEAAAAiEIAA2JMBOHAAAIAAWJQAACEiEAAg");
	this.shape.setTransform(10,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E71D46").s().p("EgnDABLIAAgRQAAiECEAAMBJ/AAAQCEAAAACEIAAARg");
	this.shape_1.setTransform(10,-83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-90.4,500,201.9);


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
	this.shape.graphics.f().s("#B3AFAF").ss(3,1,1).p("ACBAAQAAA2glAlQgnAmg1AAQg1AAglgmQgmglAAg2QAAg1AmgmQAlglA1AAQA1AAAnAlQAlAmAAA1g");
	this.shape.setTransform(9.7,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhaBcQgmgmAAg2QAAg1AmgmQAlglA1AAQA1AAAnAlQAlAmAAA1QAAA2glAmQgnAlg1AAQg1AAglglg");
	this.shape_1.setTransform(9.7,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FBC575").ss(3,1,1).p("ACBAAQAAA2glAlQgnAmg1AAQg1AAglgmQgmglAAg2QAAg1AmgmQAlglA1AAQA1AAAnAlQAlAmAAA1g");
	this.shape_2.setTransform(9.7,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("Ag+BAQgJgJgHgKQgDgGgDgHQgFgPAAgRQAAglAbgZQAagbAkAAQAlAAAbAbQAaAZABAlQgBAmgaAaQgbAaglAAQgkAAgagag");
	this.shape_3.setTransform(9.8,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaBcQgmgmAAg2QAAg1AmgmQAlglA1AAQA1AAAnAlQAlAmAAA1QAAA2glAmQgnAlg1AAQg1AAglglgAg+g9QgbAZAAAlQAAARAGAPQACAHAEAGQAGAKAJAJQAaAaAlAAQAlAAAbgaQAagaAAgmQAAglgagZQgbgbglAAQglAAgaAbg");
	this.shape_4.setTransform(9.7,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,4.6,28.9,28.8);


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
	this.instance = new lib.eval01();
	this.instance.parent = this;
	this.instance.setTransform(-113,-12,0.505,0.505);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mascarafoto, new cjs.Rectangle(4,0,315.9,311.2), null);


(lib.malgraf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E13838").s().p("ABNCAIhNhNIhMBNQgLAKgPAAQgOAAgLgKQgKgLAAgPQAAgOAKgKIBOhOIhOhMQgKgLAAgOQAAgPAKgLQALgKAOAAQAPAAAKAKIBNBOIBNhOQALgKAPAAQAOAAALAKQAKALAAAOQAAAPgKALIhOBMIBOBOQAJAKABAPQAAAOgKALQgLAKgOAAQgQAAgKgKg");
	this.shape.setTransform(18.9,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.malgraf, new cjs.Rectangle(5.1,2.1,27.6,27.7), null);


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


(lib.flechamc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxA2IBOg2IhOg1IAAgeIBjBFIAAAcIhjBGg");
	this.shape.setTransform(5,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxA2IBPg2IhPg1IAAgeIBjBFIAAAcIhjBGg");
	this.shape_1.setTransform(1,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape}]},4).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,16.8);


(lib.cuadro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C1233D").ss(6,1,1,3,true).p("AwOwOMAgdAAAMAAAAgdMggdAAAg");
	this.shape.setTransform(103.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,213.8,213.8);


(lib.btonvolvera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("ADLEOIAAgBIgXABIurAAQhvAAhQhPQhPhQAAhvQAAhuBPhQQBQhPBvAAIOrAAIAXABIAAgBIItAAQBvAABPBPQBQBQAABuQAABvhQBQQhPBPhvAAg");
	this.shape.setTransform(103,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btonvolvera, new cjs.Rectangle(0,0,206,54), null);


(lib.btnValidar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9B4QgDgEAAgGQAAgFADgEIBFhFQgQgZAAgcQAAgqAdgeQAegdApAAQAqAAAeAdQAdAeAAAqQAAApgdAdQgeAegqAAQglAAgegaIhDBDQgDADgGAAQgGAAgEgDgAgThFQgUAUAAAcQAAAbAUATQATAVAcAAQAcAAAUgVQAUgTAAgbQAAgcgUgUQgUgUgcAAQgcAAgTAUg");
	this.shape.setTransform(29.2,17.2,1.077,1.077,-90);

	this.text = new cjs.Text("Validar", "bold 18px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(83,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AqQDLQhZABAAhZIAAjlQAAhZBZAAIUhAAQBZAAAABZIAADlQAABZhZgBg");
	this.shape_1.setTransform(74.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnValidar, new cjs.Rectangle(0,-3.5,149.1,40.7), null);


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
	this.text = new cjs.Text("Continuar", "bold 18px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(10,20);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AqQDMQhZAAAAhYIAAjnQAAhYBZAAIUhAAQBZAAAABYIAADnQAABYhZAAg");
	this.shape.setTransform(10.8,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.8,9.4,149.1,40.9);


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


(lib.bntSensible = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.369)").s().p("EgoXAE8IAAp4MBQuAAAIAAJ4g");
	this.shape.setTransform(258.4,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgoXAE8IAAp4MBQuAAAIAAJ4g");
	this.shape_1.setTransform(258.4,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Evaluación", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("Ehg3AETIAAolMDBvAAAIAAIlg");
	this.shape.setTransform(598,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(-21.9,0,1239.9,73.5), null);


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


(lib.smile_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOFeIAAq7IKdAAIAAK7g");
	mask.setTransform(24.7,19.1);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.047)").s().p("AhMClIgRgJIgCgCIh1h0QgMgMABgSQgBgSAMgMIABAAQAMgNASABQASAAAMAMIBWBVIDYjYQAMgMATgBQASABAMAMQANANAAASQgBASgMAMIj3D3QgGAGgHADQgHADgJAAIgDAAQgFAAgEgCg");
	this.shape.setTransform(24.2,20.5);

	this.instance = new lib.smile_gr();
	this.instance.parent = this;
	this.instance.setTransform(20.9,74.9,1,1,0,0,0,20.9,20.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.shape,this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:20.9},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,3.8,44.9,33.4);


(lib.mc_retro_eval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		var preguntas = 10;
		var oport = parent.oportunidades - parent.intentoAct;
		root.txt_cal.text = root.parent.res / 10;
		console.log("Calificacion = " + root.parent.res);
		//Actualizar calificacion del movie 2019
		root.parent.retro_eval.texto_Calificacion.text = root.parent.res;
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
			//console.logroot.parent.resultados[i - 1]);
			if (root.parent.resultados[i - 1] == 0) {
				root['i' + i].gotoAndStop(2);
			}
		}
		
		function mostrar(m) { //comentados por la implementacion de movie 2019
			//var n = m.currentTarget.n;
			//root["a" + n].gotoAndStop(1);
			//root["a" + n].txt_pregunta.text = root.parent.preguntas[n - 1];
			//root["a" + n].txt_respuesta.text = "La respuesta correcta es:\n " + root.parent.correctas[n - 1];
		}
		
		function ocultar(m) { //comentados por la implementacion de movie 2019
			//root["a" + m.currentTarget.n].gotoAndStop(0);
		}
		
		if (parent.intentoAct <= parent.oportunidades) {
			root.texto_oportinodades.text = "Te quedan " + oport + " de " + parent.oportunidades + " oportunidades.";
			//Manipular el movie de intentos desde dentro de este movieclip
			root.parent.retro_eval.texto_oportunidades.text = "Intento " + parent.intentoAct + " de " + parent.oportunidades + ".";
			parent.habilitar_deshabilitarBarra("h");
			parent.deshabilitarSiguiente();
		} else {
			root.texto_oportinodades.text = "Lo sentimos, has terminado con tus oportunidades. Contacta con tu superior inmediato para recibir instrucciones."
			root.reintentar.visible = false;
		}
		
		if (oport == 0) {
			parent.intentoAct++;
			root.texto_oportinodades.text = "Lo sentimos, has terminado con tus oportunidades. Contacta con tu superior inmediato para recibir instrucciones."
			parent.habilitar_deshabilitarBarra("h");
			parent.deshabilitarSiguiente();
			root.reintentar.visible = false;
		}
		
		if (document.aprobo) {
			try {
				parent.habilitar_deshabilitarBarra("h");
			} catch (e) {
				console.log("Error al consumir api, no hay comunicacion con start.js");
				}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.texto_oportinodades = new cjs.Text("Te quedan ciertas oportunidades.", "12px 'Arial'");
	this.texto_oportinodades.name = "texto_oportinodades";
	this.texto_oportinodades.textAlign = "right";
	this.texto_oportinodades.lineHeight = 15;
	this.texto_oportinodades.lineWidth = 339;
	this.texto_oportinodades.parent = this;
	this.texto_oportinodades.setTransform(692,162.2);

	this.btn_reiniciarEval = new lib.btnReintento();
	this.btn_reiniciarEval.parent = this;
	this.btn_reiniciarEval.setTransform(17.6,339.2,0.521,0.521);

	this.terminar = new lib.btn_terminar();
	this.terminar.parent = this;
	this.terminar.setTransform(415.9,339.2,0.521,0.521);

	this.reintentar = new lib.btn_reintentar();
	this.reintentar.parent = this;
	this.reintentar.setTransform(62.9,160.2,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reintentar},{t:this.terminar},{t:this.btn_reiniciarEval},{t:this.texto_oportinodades}]}).wait(1));

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
	this.text.setTransform(87.8,-211.3);

	this.txt_cal = new cjs.Text("0", "bold 40px 'Arial'", "#FFFFFF");
	this.txt_cal.name = "txt_cal";
	this.txt_cal.lineHeight = 47;
	this.txt_cal.lineWidth = 42;
	this.txt_cal.parent = this;
	this.txt_cal.setTransform(404.8,-253.5);

	this.text_1 = new cjs.Text("Obtuviste", "40px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 47;
	this.text_1.lineWidth = 184;
	this.text_1.parent = this;
	this.text_1.setTransform(228.5,-254.6);

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
	this.instance.setTransform(197.7,185.3,1,1,0,0,0,295.7,155.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape.setTransform(334.7,342);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAtIAAhXIAWAAIAAANQAGgKADgCQAFgDAFAAQAIAAAIAFIgIAUQgGgEgFAAQgFAAgDADQgCACgCAHQgCAHAAAWIAAAbg");
	this.shape_1.setTransform(329.7,338.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghAnQgIgIAAgLQABgHADgHQAEgFAGgDQAHgDAMgCQAPgDAGgCIAAgDQABgGgEgDQgDgEgJAAQgGABgDACQgDACgDAGIgVgDQADgNAKgGQAIgGARAAQAPAAAHAEQAIADADAGQADAFABAQIgBAaIABARQABAFADAHIgXAAIgCgHIgBgDQgGAGgHADQgGADgHAAQgOAAgIgHgAAAAFQgKADgDABQgEAEAAAEQAAAGADADQAEAEAGAAQAFAAAGgFQAEgCABgGIABgLIAAgEIgNADg");
	this.shape_2.setTransform(321.1,338.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaApQgHgEgDgHQgDgHAAgMIAAg3IAXAAIAAAoQAAASACAEQABAEADADQAEACAFAAQAFAAAFgDQAEgEACgEQACgFAAgSIAAglIAXAAIAABXIgWAAIAAgNQgEAHgIAEQgHAEgJAAQgJAAgHgEg");
	this.shape_3.setTransform(311.1,338.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AARAtIAAgtQAAgNgCgFQgBgEgDgCQgEgCgFgBQgFABgFADQgEAEgCAFQgCAGAAANIAAAoIgXAAIAAhXIAVAAIAAANQAMgPARAAQAHAAAHADQAGADADADQAEAFABAFQABAGAAAKIAAA2g");
	this.shape_4.setTransform(300.7,338.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLA9IAAhXIAXAAIAABXgAgLgmIAAgWIAXAAIAAAWg");
	this.shape_5.setTransform(293.2,337.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDA7QgFgCgCgEQgCgDgBgGIgBgQIAAgmIgLAAIAAgSIALAAIAAgSIAWgOIAAAgIAQAAIAAASIgQAAIAAAjIAAAMQABABAAAAQAAABAAAAQABAAAAABQAAAAABAAIADABIAKgCIACASQgIAEgLAAQgFAAgFgCg");
	this.shape_6.setTransform(288,337.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARAtIAAgtQAAgNgCgFQgBgEgDgCQgEgCgFgBQgFABgFADQgEAEgCAFQgCAGAAANIAAAoIgXAAIAAhXIAVAAIAAANQAMgPARAAQAHAAAHADQAGADADADQAEAFABAFQABAGAAAKIAAA2g");
	this.shape_7.setTransform(280,338.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWApQgLgGgGgLQgFgKgBgPQABgLAFgLQAGgLAKgFQALgGAMAAQATAAAOANQANANgBATQABAUgNANQgNANgUAAQgLAAgLgFgAgPgTQgGAHAAAMQAAANAGAHQAHAHAIAAQAJAAAGgHQAHgHgBgNQABgMgHgHQgGgHgJAAQgIAAgHAHg");
	this.shape_8.setTransform(269.6,338.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAvQgQgRAAgdQAAgdAQgRQAQgRAYAAQAWAAAOAOQAIAHAFAPIgYAFQgDgJgGgGQgIgFgJAAQgNAAgIAKQgIAKAAAVQgBAWAJAKQAIAKAMAAQAKAAAHgGQAHgGADgOIAYAIQgFAUgNAJQgNAKgUAAQgXAAgPgQg");
	this.shape_9.setTransform(258.2,337.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgCQgFgDgGAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQALgPAQAAQAJAAAGADQAHACADAFQADAFACAGIABAPIAAA1g");
	this.shape_10.setTransform(662.7,317.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdAyQgLgLAAgXQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAUQAAARgFAKQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgIQgIAIAAAQQAAARAIAJQAHAIAKAAQALAAAIgJQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJgAgHgmIAKgXIAUAAIgTAXg");
	this.shape_11.setTransform(653.2,316.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCA6QgEgDgBgEQgDgFAAgNIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAQAAIAAALIgQAAIAAAzIABAIIACADIAGABIAHgBIACAOIgMABQgIAAgEgCg");
	this.shape_12.setTransform(646.3,316.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_13.setTransform(639.1,317.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXAxIAAALIgOAAIAAh5IAPAAIAAArQAJgLAOAAQAIAAAHADQAIADAEAGQAFAGADAIQACAIAAAJQAAAXgLAMQgLANgQAAQgOAAgJgNgAgQgJQgHAJAAAPQAAAQAEAHQAHALAMAAQAJAAAHgIQAHgJAAgQQAAgRgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_14.setTransform(629.9,316.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_15.setTransform(618.3,316.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_16.setTransform(611.7,317.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgCQgEgDgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQAKgPASAAQAIAAAGADQAHACADAFQAEAFABAGIABAPIAAA1g");
	this.shape_17.setTransform(597.6,317.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_18.setTransform(588.1,317.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAiQgMgMABgWQAAgNAEgLQAFgLAKgFQAJgFALAAQAOAAAKAHQAIAIADAMIgOADQgDgJgFgEQgFgFgIAAQgKAAgHAIQgHAIAAARQAAARAHAJQAGAHAKABQAJAAAHgGQAFgFACgMIAOADQgCAPgKAIQgKAJgPAAQgQAAgLgMg");
	this.shape_19.setTransform(574.7,317.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_20.setTransform(568.3,316.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHA9IAAh5IAPAAIAAB5g");
	this.shape_21.setTransform(564.5,316.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbAiQgLgMABgWQAAgNAEgLQAFgLAKgFQAJgFALAAQAOAAAJAHQAKAIACAMIgOADQgCgJgGgEQgFgFgIAAQgKAAgHAIQgHAIAAARQAAARAHAJQAGAHAKABQAKAAAFgGQAGgFACgMIAOADQgCAPgKAIQgKAJgPAAQgQAAgMgMg");
	this.shape_22.setTransform(558.6,317.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgmAsIAAgMIA3hAIgRABIgjAAIAAgMIBHAAIAAAJIgvA3IgJALIATgBIAoAAIAAANg");
	this.shape_23.setTransform(545.2,317.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_24.setTransform(536.1,317.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAVA9IAAg4QAAgKgEgFQgGgGgIAAQgGAAgGAEQgGADgCAGQgDAFAAALIAAAwIgPAAIAAh5IAPAAIAAAsQALgMAOAAQALAAAGAEQAIADADAHQADAHAAAMIAAA4g");
	this.shape_25.setTransform(526.7,316.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIAOQAFgCACgEQACgEAAgHIgIAAIAAgQIAQAAIAAAQQAAAJgDAFQgDAHgHACg");
	this.shape_26.setTransform(514.9,322.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_27.setTransform(507.8,317.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgBA6QgFgDgCgEQgBgFAAgNIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAOAAIAAALIgOAAIAAAzIAAAIIADADIAFABIAGgBIACAOIgLABQgIAAgDgCg");
	this.shape_28.setTransform(500.9,316.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgCQgEgDgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAJgPASAAQAHAAAHADQAHACADAFQAEAFABAGIABAPIAAA1g");
	this.shape_29.setTransform(493.7,317.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_30.setTransform(484.2,317.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_31.setTransform(477.6,316.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgGIgBgPIAAg1IAPAAIAAAwIABAPQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_32.setTransform(471,317.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZA3QgKgGAAgOIAPACQABAGAEADQAFAEAKABQAJgBAGgEQAGgEACgHQABgFAAgOQgKALgOAAQgSAAgKgNQgKgNAAgSQAAgMAFgLQAEgLAJgFQAJgGALAAQAPAAAKAMIAAgKIAOAAIAABLQAAAVgEAJQgEAIgKAFQgJAFgMAAQgQAAgJgIgAgPgqQgHAJAAAQQAAAQAGAIQAHAHAKABQAKgBAHgHQAHgHAAgRQAAgQgHgJQgHgIgLAAQgIAAgHAIg");
	this.shape_33.setTransform(461.3,319.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_34.setTransform(454.9,316.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_35.setTransform(448.7,317.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAQgCgEgBgHQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_36.setTransform(435.1,317.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCA6QgEgDgBgEQgCgFAAgNIAAgyIgMAAIAAgLIAMAAIAAgWIANgJIAAAfIAQAAIAAALIgQAAIAAAzIABAIIADADIAFABIAHgBIABAOIgLABQgIAAgEgCg");
	this.shape_37.setTransform(428.2,316.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgCQgFgDgGAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQALgPAQAAQAIAAAHADQAHACADAFQADAFACAGIABAPIAAA1g");
	this.shape_38.setTransform(421,317.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgGIgBgPIAAg1IAPAAIAAAwIABAPQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_39.setTransform(411.5,317.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgZA3QgKgGAAgOIAPACQABAGAEADQAFAEAKABQAJgBAGgEQAGgEACgHQABgFAAgOQgKALgOAAQgSAAgKgNQgKgNAAgSQAAgMAFgLQAEgLAJgFQAJgGALAAQAPAAAKAMIAAgKIAOAAIAABLQAAAVgEAJQgEAIgKAFQgJAFgMAAQgQAAgJgIgAgPgqQgHAJAAAQQAAAQAGAIQAHAHAKABQAKgBAHgHQAHgHAAgRQAAgQgHgJQgHgIgLAAQgIAAgHAIg");
	this.shape_40.setTransform(401.8,319.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_41.setTransform(392.6,317.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAGAAQAHAAAIAEIgFAPQgGgDgFAAQgFAAgDADQgEACgBAGQgDAHAAAKIAAAtg");
	this.shape_42.setTransform(385.8,317.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAGQAJAFAEALQAEALAAAMQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAAQQAAAQAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJABgHAIg");
	this.shape_43.setTransform(377.7,319.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_44.setTransform(363.3,317.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHA9IAAh5IAPAAIAAB5g");
	this.shape_45.setTransform(356.7,316.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_46.setTransform(345.4,317.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAFAAQAHAAAIAEIgFAPQgFgDgGAAQgFAAgDADQgEACgCAGQgCAHAAAKIAAAtg");
	this.shape_47.setTransform(333.9,317.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_48.setTransform(325.6,317.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_49.setTransform(316.6,317.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAQgCgEgBgHQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_50.setTransform(307.6,317.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAGQAJAFAEALQAEALAAAMQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAAQQAAAQAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJABgHAIg");
	this.shape_51.setTransform(298.4,319.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_52.setTransform(284,317.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAEIgFAPQgGgDgFAAQgFAAgDADQgEACgBAGQgDAHAAAKIAAAtg");
	this.shape_53.setTransform(277.2,317.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAQgCgEgBgHQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_54.setTransform(268.9,317.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AguA9IAAh5IAuAAIASABQAJACAGAEQAGAEAEAIQADAHABAJQgBAQgJAKQgLAKgZAAIgfAAIAAAygAgegCIAfAAQAQAAAGgGQAHgGAAgKQAAgIgEgFQgEgGgGgBQgEgCgLAAIgfAAg");
	this.shape_55.setTransform(258.9,316.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZAaQgLgLABgPQgBgJAFgIQAFgJAJgFQAIgFAJABQAJgBAJAFQAJAFAEAJQAFAIABAJQAAAPgMALQgKALgPAAQgOAAgLgLg");
	this.shape_56.setTransform(243.1,317.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_57.setTransform(547.1,300.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAQgCgFgBgGQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_58.setTransform(539.9,296.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgCA5QgEgCgBgEQgCgEAAgOIAAgyIgMAAIAAgLIAMAAIAAgWIANgJIAAAfIAQAAIAAALIgQAAIAAAzIABAIIADADIAFABIAHgBIABAOIgLABQgIAAgEgDg");
	this.shape_59.setTransform(533,295.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAnQgJgHgDgOIAPgDQACAJAFAFQAGAFAJgBQAKAAAFgEQAFgEAAgFQAAgFgEgEQgDgBgMgEQgQgEgGgCQgGgDgEgFQgDgFAAgHQAAgFADgGQACgEAFgEQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAADACADQACACAEABIAMAFIAWAGQAHACADAFQAEAGAAAHQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_60.setTransform(526.2,296.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgEQAFgEAEgKIAPADQgDANgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_61.setTransform(517.3,296.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTAqQgHgDgDgEQgEgFgBgHIgBgNIAAg2IAPAAIAAAvIABAQQABAGAFAEQAFADAGAAQAGAAAGgEQAGgDACgGQADgGAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_62.setTransform(507.8,296.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAFQAJAHAEAKQAEAKAAAOQAAANgEAJQgFAMgJAFQgKAGgKAAQgGAAgGgDQgGgEgEgEIAAArgAgQgoQgIAIAAASQAAAPAHAJQAHAHAKAAQAJAAAHgHQAHgJAAgRQAAgQgHgJQgHgIgJAAQgJgBgHAKg");
	this.shape_63.setTransform(498.6,298.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgYAnQgJgHgDgOIAPgDQACAJAFAFQAGAFAJgBQAKAAAFgEQAFgEAAgFQAAgFgEgEQgDgBgMgEQgQgEgGgCQgGgDgEgFQgDgFAAgHQAAgFADgGQACgEAFgEQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAADACADQACACAEABIAMAFIAWAGQAHACADAFQAEAGAAAHQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_64.setTransform(489.4,296.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgEQAFgEAEgKIAPADQgDANgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_65.setTransform(480.4,296.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAEIgFAPQgFgEgGAAQgFAAgDAEQgEACgCAGQgCAHAAAKIAAAtg");
	this.shape_66.setTransform(473.6,296.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgTAqQgHgDgDgEQgEgFgBgHIgBgNIAAg2IAPAAIAAAvIABAQQABAGAFAEQAFADAGAAQAGAAAGgEQAGgDACgGQADgGAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_67.setTransform(460.6,296.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCA5QgEgCgBgEQgCgEgBgOIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAQAAIAAALIgQAAIAAAzIABAIIACADIAGABIAHgBIACAOIgMABQgIAAgEgDg");
	this.shape_68.setTransform(453.7,295.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgEQAFgEAEgKIAPADQgDANgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_69.setTransform(441.8,296.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_70.setTransform(432.1,295.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAAMQAJgOASAAQAHAAAHADQAHADAEAEQACAFACAGIABAPIAAA1g");
	this.shape_71.setTransform(418.2,296.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdAyQgLgLAAgXQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAUQAAARgFAKQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgIQgIAIAAAQQAAARAIAJQAHAIAKAAQALAAAIgJQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJgAgHgmIAKgXIAUAAIgTAXg");
	this.shape_72.setTransform(408.7,295.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_73.setTransform(402.1,295.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgbAiQgLgMAAgVQAAgOAGgLQAEgLAKgFQAJgFALAAQAOAAAJAHQAKAHACAOIgOACQgCgJgGgFQgFgEgHAAQgLAAgHAJQgHAHAAARQAAARAHAJQAHAHAJAAQAKAAAFgEQAGgGACgMIAPACQgDAQgKAJQgKAIgPAAQgQAAgMgMg");
	this.shape_74.setTransform(396.3,296.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_75.setTransform(387,296.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgaAiQgLgMAAgVQAAgOAEgLQAFgLAKgFQAKgFAKAAQAOAAAKAHQAIAHADAOIgPACQgCgJgFgFQgFgEgIAAQgKAAgHAJQgHAHAAARQAAARAHAJQAGAHAKAAQAKAAAGgEQAFgGABgMIAPACQgCAQgKAJQgKAIgPAAQgQAAgLgMg");
	this.shape_76.setTransform(378.3,296.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_77.setTransform(371.9,295.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgLA+IAAhMIgOAAIAAgLIAOAAIAAgJQAAgJABgFQACgFAGgEQAEgEAKAAIAOABIgCAOIgJgBQgHAAgDADQgDACAAAJIAAAIIASAAIAAALIgSAAIAABMg");
	this.shape_78.setTransform(368,295);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_79.setTransform(363.4,295.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_80.setTransform(359.6,295.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_81.setTransform(352.9,296.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgbAiQgKgMgBgVQAAgOAGgLQAEgLAKgFQAKgFAKAAQAOAAAJAHQAKAHACAOIgOACQgDgJgFgFQgFgEgHAAQgLAAgHAJQgHAHAAARQAAARAHAJQAHAHAKAAQAIAAAGgEQAGgGABgMIAQACQgDAQgKAJQgKAIgOAAQgSAAgLgMg");
	this.shape_82.setTransform(344.3,296.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_83.setTransform(330.3,296.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_84.setTransform(323.7,295.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_85.setTransform(312.3,296.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGAsIgihXIARAAIATA0IAEASIAFgRIAUg1IAPAAIghBXg");
	this.shape_86.setTransform(303.4,296.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAEIgFAPQgGgEgFAAQgFAAgDAEQgEACgBAGQgDAHAAAKIAAAtg");
	this.shape_87.setTransform(297,296.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgEQAFgEAEgKIAPADQgDANgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_88.setTransform(288.7,296.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgYAnQgJgHgDgOIAPgDQACAJAFAFQAGAFAJgBQAKAAAFgEQAFgEAAgFQAAgFgEgEQgDgBgMgEQgQgEgGgCQgGgDgEgFQgDgFAAgHQAAgFADgGQACgEAFgEQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAADACADQACACAEABIAMAFIAWAGQAHACADAFQAEAGAAAHQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_89.setTransform(279.7,296.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgXAxIAAALIgOAAIAAh5IAPAAIAAArQAJgLAOAAQAIAAAHADQAIADAEAGQAFAGADAIQACAIAAAJQAAAXgLAMQgLANgQAAQgOAAgJgNgAgQgJQgHAJAAAPQAAAQAEAHQAHALAMAAQAJAAAHgIQAHgJAAgQQAAgRgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_90.setTransform(271,295.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgeA3QgNgIgHgPQgHgOAAgRQAAgcAQgRQARgSAYAAQARAAAOAIQANAJAHANQAHAPAAASQAAASgHAPQgIAOgNAIQgOAHgQAAQgQAAgOgIgAgcgkQgMALAAAbQAAAWALANQAMAMARAAQASAAAMgMQAMgNAAgYQAAgNgFgMQgFgLgKgGQgKgGgMAAQgQAAgMAMg");
	this.shape_91.setTransform(259.5,295.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgZAaQgLgLABgPQgBgJAFgIQAFgJAJgFQAIgEAJgBQAJABAJAEQAJAFAEAJQAFAIABAJQAAAPgMALQgKAKgPAAQgOAAgLgKg");
	this.shape_92.setTransform(243.1,296.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgHAJIAAgQIAPAAIAAAQg");
	this.shape_93.setTransform(645.3,279.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_94.setTransform(638.1,275.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgBA5QgFgCgBgEQgCgEAAgOIAAgxIgMAAIAAgMIAMAAIAAgWIANgJIAAAfIAPAAIAAAMIgPAAIAAAyIABAIIADADIAFABIAGAAIACANIgLABQgIAAgDgDg");
	this.shape_95.setTransform(631.2,274.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgbAiQgLgLABgXQAAgNAEgKQAFgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgOADQgDgJgFgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAHAJAJgBQAKAAAFgEQAGgGACgLIAOACQgCAPgKAJQgKAIgPAAQgQAAgMgMg");
	this.shape_96.setTransform(624.8,275.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_97.setTransform(615.5,275.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQAEgDAEAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_98.setTransform(608.7,275.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_99.setTransform(603,275.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_100.setTransform(594.7,275.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgbAiQgLgLABgXQAAgNAEgKQAFgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgOADQgCgJgGgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAHAJAJgBQAKAAAGgEQAFgGACgLIAOACQgCAPgKAJQgKAIgPAAQgQAAgMgMg");
	this.shape_101.setTransform(586.1,275.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOABQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_102.setTransform(572.5,275.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_103.setTransform(563.6,275.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAGAAQAHAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_104.setTransform(556.8,275.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_105.setTransform(548.5,275.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_106.setTransform(538.8,274.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_107.setTransform(532.4,274.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOABQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_108.setTransform(526.2,275.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgBgFgFgDQgEgCgGAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAKgPARAAQAHAAAIADQAGADAEAEQADAFABAHIABAOIAAA1g");
	this.shape_109.setTransform(517.3,275.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_110.setTransform(507.8,275.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgaAiQgMgLAAgXQABgNAFgKQAEgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgPADQgCgJgFgFQgFgEgHAAQgLAAgHAJQgHAIAAAQQAAASAHAHQAHAJAKgBQAIAAAGgEQAGgGABgLIAQACQgDAPgKAJQgKAIgOAAQgSAAgKgMg");
	this.shape_111.setTransform(499.2,275.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_112.setTransform(485.2,275.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_113.setTransform(475.7,275.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAXA+IAAgsQgDAFgHAEQgGADgHAAQgPAAgLgNQgLgMAAgVQAAgNAEgKQAFgMAJgEQAIgGALAAQAPAAAKAOIAAgMIANAAIAAB5gAgPgpQgHAIAAARQAAARAHAIQAHAIAJAAQAKABAHgJQAHgHAAgQQAAgSgIgIQgHgJgKAAQgIgBgHAJg");
	this.shape_114.setTransform(466,277.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_115.setTransform(452.1,275.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgBA5QgFgCgCgEQgCgEAAgOIAAgxIgKAAIAAgMIAKAAIAAgWIAPgJIAAAfIAOAAIAAAMIgOAAIAAAyIAAAIIACADIAGABIAGAAIADANIgMABQgIAAgDgDg");
	this.shape_116.setTransform(445.2,274.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOABQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_117.setTransform(438.4,275.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_118.setTransform(429.5,275.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_119.setTransform(420,275.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAAMQAEgIAGgCQAHgEAHAAQALAAAJAGQAJAFAEALQAEAKAAANQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgEgEgEIAAArgAgQgoQgIAIAAARQAAARAHAHQAHAJAKgBQAJABAHgJQAHgIAAgRQAAgQgHgJQgHgJgJABQgJAAgHAJg");
	this.shape_120.setTransform(410.8,277.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOABQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_121.setTransform(401.6,275.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_122.setTransform(392.6,275.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAEAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgCAFQgCAJAAAJIAAAtg");
	this.shape_123.setTransform(385.8,275.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_124.setTransform(372.8,275.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_125.setTransform(366.2,274.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_126.setTransform(354.9,275.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAFIgFANQgFgDgGAAQgFAAgDADQgEADgCAFQgCAJAAAJIAAAtg");
	this.shape_127.setTransform(348.1,275.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgXAxIAAALIgOAAIAAh5IAPAAIAAArQAJgLAOAAQAIAAAHADQAIADAEAGQAFAGADAIQACAIAAAJQAAAXgLAMQgLANgQAAQgOAAgJgNgAgQgJQgHAJAAAPQAAAQAEAHQAHALAMAAQAJAAAHgIQAHgJAAgQQAAgRgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_128.setTransform(340,274.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_129.setTransform(330.3,275.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOABQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_130.setTransform(321.3,275.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgaAiQgMgLAAgXQABgNAFgKQAEgLAKgGQAKgFAKAAQAOAAAKAHQAIAHADANIgPADQgCgJgFgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAHAJAKgBQAJAAAGgEQAFgGABgLIAPACQgCAPgKAJQgKAIgOAAQgSAAgKgMg");
	this.shape_131.setTransform(308.5,275.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_132.setTransform(302,274.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgHA9IAAh5IAPAAIAAB5g");
	this.shape_133.setTransform(298.2,274.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgaAiQgLgLAAgXQAAgNAEgKQAFgLAKgGQAKgFAKAAQAOAAAKAHQAIAHADANIgPADQgCgJgFgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAGAJAKgBQAJAAAHgEQAFgGABgLIAPACQgCAPgKAJQgKAIgPAAQgQAAgLgMg");
	this.shape_134.setTransform(292.4,275.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgmAsIAAgMIA3g/IgRAAIgjAAIAAgMIBHAAIAAAKIgvA3IgJAKIATgBIAoAAIAAANg");
	this.shape_135.setTransform(278.9,275.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_136.setTransform(269.9,275.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAgA9IAAg6Ig/AAIAAA6IgQAAIAAh5IAQAAIAAAyIA/AAIAAgyIAQAAIAAB5g");
	this.shape_137.setTransform(259,274.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgZAaQgLgLABgPQgBgIAFgJQAFgJAJgFQAIgEAJAAQAJAAAJAEQAJAFAEAJQAFAJABAIQAAAPgMALQgKALgPgBQgOABgLgLg");
	this.shape_138.setTransform(243.1,275.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgHAIIAAgPIAQAAIAAAPg");
	this.shape_139.setTransform(498,258.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_140.setTransform(490.8,254.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgBA6QgFgDgCgEQgCgFABgNIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAOAAIAAALIgOAAIAAAzIAAAIIACADIAGABIAGgBIADAOIgMABQgIAAgDgCg");
	this.shape_141.setTransform(483.9,253.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgCQgEgDgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAJgPASAAQAHAAAHADQAHACAEAFQACAFACAGIABAPIAAA1g");
	this.shape_142.setTransform(476.7,254.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgGIgBgPIAAg1IAPAAIAAAwIABAPQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_143.setTransform(467.2,254.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgZA3QgKgGAAgOIAPACQABAGAEADQAFAEAKABQAJgBAGgEQAGgEACgHQABgFAAgOQgKALgOAAQgSAAgKgNQgKgNAAgSQAAgMAFgLQAEgLAJgFQAJgGALAAQAPAAAKAMIAAgKIAOAAIAABLQAAAVgEAJQgEAIgKAFQgJAFgMAAQgQAAgJgIgAgPgqQgHAJAAAQQAAAQAGAIQAHAHAKABQAKgBAHgHQAHgHAAgRQAAgQgHgJQgHgIgLAAQgIAAgHAIg");
	this.shape_144.setTransform(457.5,256.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_145.setTransform(448.3,254.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAFAAQAHAAAIAEIgFAPQgGgDgFAAQgFAAgDADQgEACgCAGQgCAHAAAKIAAAtg");
	this.shape_146.setTransform(441.5,254.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAGQAJAFAEALQAEALAAAMQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAAQQAAAQAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJABgHAIg");
	this.shape_147.setTransform(433.5,256.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_148.setTransform(419.1,254.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_149.setTransform(409.4,253.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_150.setTransform(400.2,254.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgbAiQgKgMgBgWQAAgNAGgLQAEgKAKgGQAKgFAKAAQAOAAAJAHQAKAIACAMIgOADQgDgJgFgEQgFgFgHAAQgLAAgHAIQgHAIAAARQAAARAHAJQAHAHAKABQAIAAAGgGQAGgFABgMIAQADQgDAPgKAIQgKAJgOAAQgSAAgLgMg");
	this.shape_151.setTransform(391.5,254.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgBgFgFgCQgFgDgFAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQALgPAQAAQAJAAAHADQAGACAEAFQADAFABAGIABAPIAAA1g");
	this.shape_152.setTransform(377.6,254.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgdAyQgLgLAAgXQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAUQAAARgFAKQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgIQgIAIAAAQQAAARAIAJQAHAIAKAAQALAAAIgJQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJgAgHgmIAKgXIAUAAIgTAXg");
	this.shape_153.setTransform(368.1,253.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_154.setTransform(361.5,253.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgaAiQgMgMAAgWQAAgNAGgLQAEgKAKgGQAJgFALAAQAOAAAJAHQAKAIACAMIgPADQgCgJgFgEQgFgFgHAAQgLAAgHAIQgHAIAAARQAAARAHAJQAHAHAKABQAIAAAGgGQAGgFABgMIAQADQgDAPgKAIQgKAJgOAAQgSAAgKgMg");
	this.shape_155.setTransform(355.6,254.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgCQgFgDgGAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQALgPAQAAQAJAAAGADQAHACADAFQADAFACAGIABAPIAAA1g");
	this.shape_156.setTransform(346.4,254.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_157.setTransform(336.9,254.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgCA6QgEgDgBgEQgCgFgBgNIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAQAAIAAALIgQAAIAAAzIABAIIACADIAGABIAHgBIACAOIgMABQgIAAgEgCg");
	this.shape_158.setTransform(330,253.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEACQgEABgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_159.setTransform(322.7,254.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgBgFgFgCQgFgDgFAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAKgPAQAAQAJAAAHADQAGACAEAFQADAFABAGIABAPIAAA1g");
	this.shape_160.setTransform(308.6,254.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgdAiQgLgMAAgWQAAgXAOgMQALgKAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_161.setTransform(299.1,254.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgaAiQgMgMAAgWQABgNAFgLQAEgKAKgGQAKgFAKAAQAOAAAKAHQAIAIADAMIgPADQgCgJgFgEQgFgFgIAAQgKAAgHAIQgHAIAAARQAAARAHAJQAHAHAKABQAJAAAGgGQAFgFABgMIAPADQgCAPgKAIQgKAJgOAAQgSAAgKgMg");
	this.shape_162.setTransform(290.5,254.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_163.setTransform(276.5,254.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_164.setTransform(267,254.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AglA9IAAh5IAQAAIAABqIA7AAIAAAPg");
	this.shape_165.setTransform(258,253.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgZAaQgLgLABgPQgBgJAFgIQAFgJAJgFQAIgFAJABQAJgBAJAFQAJAFAEAJQAFAIABAJQAAAPgMALQgKALgPAAQgOAAgLgLg");
	this.shape_166.setTransform(243.1,254.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgLAsIAAgXIAXAAIAAAXgAgLgUIAAgXIAXAAIAAAXg");
	this.shape_167.setTransform(351.3,212.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgaAnQgLgIgDgMIAXgEQACAHAEADQAFAEAHAAQAJAAAFgDQADgCAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgIgDQgbgGgIgFQgKgHAAgMQAAgLAJgJQAJgHATAAQARAAAJAGQAJAFADAMIgWAEQgBgFgEgDQgEgDgHAAQgJABgEACQgCACAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQADADASADQASAFAIAGQAHAFAAALQAAAMgKAKQgKAIgUAAQgRAAgKgHg");
	this.shape_168.setTransform(343.5,212.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AggAfQgIgMAAgTQAAgUALgMQAMgNARAAQATAAALANQALANAAAZIg5AAQAAALAFAGQAGAGAHAAQAFgBAEgDQAEgDACgGIAXAEQgFAMgJAIQgKAGgPAAQgWAAgLgPgAgLgVQgFAFAAAKIAiAAQAAgLgFgFQgFgFgIgBQgGAAgFAHg");
	this.shape_169.setTransform(334.2,212.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AARAtIAAgtQAAgNgCgFQgBgEgDgCQgEgCgFgBQgFABgFADQgEAEgCAFQgCAGAAANIAAAoIgXAAIAAhXIAVAAIAAANQAMgPARAAQAHAAAHADQAGADADADQAEAFABAFQABAGAAAKIAAA2g");
	this.shape_170.setTransform(324.4,212.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgWApQgLgGgGgLQgGgKAAgPQAAgLAGgLQAGgLALgFQAKgGAMAAQAUAAANANQAMANAAATQAAAUgMANQgOANgTAAQgLAAgLgFgAgOgTQgHAHAAAMQAAANAHAHQAFAHAJAAQAJAAAGgHQAGgHABgNQgBgMgGgHQgGgHgJAAQgJAAgFAHg");
	this.shape_171.setTransform(314,212.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgLA9IAAhXIAXAAIAABXgAgLgmIAAgWIAXAAIAAAWg");
	this.shape_172.setTransform(306.4,211.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgdAiQgMgNAAgVQAAgVAMgMQALgMAUAAQAQAAAJAHQAKAGADAPIgWAEQgCgHgEgDQgEgEgGAAQgIAAgFAGQgGAGABAOQgBAPAGAHQAFAGAIAAQAGAAAFgEQAEgDACgKIAWAEQgDAQgKAIQgKAIgRAAQgSAAgMgMg");
	this.shape_173.setTransform(299.5,212.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgdAiQgMgNAAgVQAAgVAMgMQALgMAUAAQAQAAAJAHQAKAGADAPIgWAEQgCgHgEgDQgEgEgGAAQgIAAgFAGQgGAGABAOQgBAPAGAHQAFAGAIAAQAGAAAFgEQAEgDACgKIAWAEQgDAQgKAIQgKAIgRAAQgSAAgMgMg");
	this.shape_174.setTransform(290,212.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgaApQgHgEgDgHQgDgHAAgMIAAg3IAXAAIAAAoQAAASACAEQABAEADADQAEACAFAAQAFAAAFgDQAEgEACgEQACgFAAgSIAAglIAXAAIAABXIgWAAIAAgNQgEAHgIAEQgHAEgJAAQgJAAgHgEg");
	this.shape_175.setTransform(279.9,212.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgcAtIAAhXIAWAAIAAANQAGgKADgCQAFgDAFAAQAIAAAIAFIgIATQgGgDgFAAQgFAAgDADQgCACgCAHQgCAHAAAWIAAAbg");
	this.shape_176.setTransform(272.1,212.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgDA7QgFgCgCgEQgDgDgBgGIAAgQIAAgmIgLAAIAAgSIALAAIAAgSIAWgOIAAAgIAQAAIAAASIgQAAIAAAjIABAMQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIADABIAKgCIACASQgIAEgKAAQgHAAgEgCg");
	this.shape_177.setTransform(265.4,211.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgaAnQgLgIgDgMIAXgEQACAHAEADQAFAEAHAAQAJAAAFgDQADgCAAgEQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgIgDQgbgGgIgFQgKgHAAgMQAAgLAJgJQAJgHATAAQARAAAJAGQAJAFADAMIgWAEQgBgFgEgDQgEgDgHAAQgJABgEACQgCACAAADQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQADADASADQASAFAIAGQAHAFAAALQAAAMgKAKQgKAIgUAAQgRAAgKgHg");
	this.shape_178.setTransform(257.6,212.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AARAtIAAgtQAAgNgCgFQgBgEgDgCQgEgCgFgBQgFABgFADQgEAEgCAFQgCAGAAANIAAAoIgXAAIAAhXIAVAAIAAANQAMgPARAAQAHAAAHADQAGADADADQAEAFABAFQABAGAAAKIAAA2g");
	this.shape_179.setTransform(247.9,212.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgLA9IAAh5IAXAAIAAB5g");
	this.shape_180.setTransform(240.3,211.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgIAIIAAgQIAQAAIAAAQg");
	this.shape_181.setTransform(381.1,174.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgaAmQgLgHgDgMIAXgEQACAHAEAEQAFADAHAAQAJAAAFgDQADgDAAgDQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgIgDQgbgGgIgFQgKgGAAgNQAAgMAJgIQAJgHATAAQARAAAJAFQAJAHADALIgWAEQgBgFgEgCQgEgDgHgBQgJAAgEADQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQADACASAEQASAFAIAGQAHAGAAALQAAALgKAKQgKAIgUAAQgRAAgKgIg");
	this.shape_182.setTransform(373.7,170.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgWAoQgLgFgGgLQgGgKAAgOQAAgMAGgLQAGgKALgHQAKgFAMAAQAUAAAMANQAOANAAATQAAATgOAOQgNANgTAAQgLAAgLgGgAgOgTQgHAHAAAMQAAANAHAHQAFAHAJAAQAJAAAGgHQAGgHABgNQgBgMgGgHQgGgHgJAAQgJAAgFAHg");
	this.shape_183.setTransform(364.1,170.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgDA7QgFgCgCgEQgCgDgCgGIAAgQIAAgmIgLAAIAAgSIALAAIAAgSIAWgOIAAAgIAQAAIAAASIgQAAIAAAjIABAMQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIAEABIAJgCIACASQgIAEgKAAQgGAAgFgCg");
	this.shape_184.setTransform(356,169.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AARAtIAAgtQAAgNgCgEQgBgEgDgDQgEgCgFAAQgFAAgFADQgEAEgCAFQgCAGAAANIAAAoIgXAAIAAhXIAVAAIAAANQAMgPARAAQAHAAAHADQAGACADAFQAEAEABAGQABAFAAAKIAAA2g");
	this.shape_185.setTransform(348,170.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgaApQgHgEgDgHQgDgHAAgNIAAg2IAXAAIAAAoQAAASACAEQABAFADACQAEACAFAAQAFAAAFgDQAEgEACgEQACgFAAgSIAAglIAXAAIAABXIgWAAIAAgNQgEAHgIAEQgHAEgJAAQgJAAgHgEg");
	this.shape_186.setTransform(337.5,170.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgqA+IAAh5IAWAAIAAANQAEgHAHgEQAHgEAIAAQAPAAAMAMQAKAMAAAWQAAAVgLAMQgKAMgQAAQgGAAgGgDQgGgDgHgHIAAAtgAgNgkQgGAHAAANQAAAPAGAGQAGAHAHAAQAJAAAFgHQAGgFgBgPQAAgOgFgHQgGgGgIAAQgHAAgGAGg");
	this.shape_187.setTransform(327.4,172.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgbAwQgMgNABgjQgBghAMgQQAKgMARAAQASAAAKAMQAMAQAAAhQAAAigNAPQgJANgSAAQgRAAgKgOgAgHgnQgDACgBAIQgDAIAAAVQAAAWACAHQACAJADACQAEADADAAQAFAAACgDQAEgCACgIQACgIABgWQgBgVgCgHQgCgJgEgCQgCgDgFAAQgDAAgEADg");
	this.shape_188.setTransform(312.5,169.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgaA2QgNgLAAgSQAAgJAFgJQAFgHAKgFQgJgEgEgGQgEgHAAgIQAAgNAKgJQAJgJARAAQARAAAKAJQAJAJAAANQAAAJgFAGQgEAHgIADQAKAFAGAGQAFAIAAAKQAAARgLALQgKAKgSAAQgQAAgLgIgAgMAKQgEAGAAAHQAAAJAFAGQAFAFAGABQAHAAAFgGQAFgFAAgKQAAgJgFgFQgFgEgHgBQgHAAgFAGgAgKgmQgEAEAAAGQAAAHAEAEQAEADAGAAQAGAAAEgDQAEgEAAgHQAAgHgEgDQgEgFgGAAQgGAAgEAFg");
	this.shape_189.setTransform(303.1,169.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgIAOQAFgCACgEQACgEAAgHIgIAAIAAgRIAQAAIAAARQAAAJgDAGQgDAGgHADg");
	this.shape_190.setTransform(291.3,175.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgYAnQgJgHgDgOIAPgDQACAJAFAFQAGAFAJgBQAKAAAFgEQAFgEAAgFQAAgFgEgEQgDgBgMgEQgQgEgGgCQgGgDgEgFQgDgFAAgHQAAgFADgGQACgEAFgEQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAADACADQACACAEABIAMAFIAWAGQAHACADAFQAEAGAAAHQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_191.setTransform(284.6,170.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgLQALgKAPAAQASAAAMAMQALALAAAWQAAAQgFAKQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAJQAHAHAKAAQALABAIgJQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_192.setTransform(275.7,170.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgFgCgGAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQALgOAQAAQAJAAAGADQAHADADAEQADAFACAHIABAOIAAA1g");
	this.shape_193.setTransform(266.3,170.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgEQAFgEAEgKIAPADQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_194.setTransform(256.8,170.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAtAtIAAg3QAAgIgBgEQgCgEgEgDQgDgCgGAAQgJAAgGAGQgGAGAAAOIAAAyIgOAAIAAg5QAAgJgEgFQgDgFgJAAQgGAAgFADQgGAEgCAGQgDAGAAAMIAAAtIgPAAIAAhXIAOAAIAAAMQAEgHAHgDQAHgEAJAAQAJAAAHAEQAFAEACAHQALgPARAAQANAAAHAHQAHAHAAAQIAAA7g");
	this.shape_195.setTransform(245,170.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_196.setTransform(619.3,149.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_197.setTransform(609.6,148.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAJgPASAAQAHAAAHADQAHADAEAEQACAFACAHIABAOIAAA1g");
	this.shape_198.setTransform(600.5,149.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJAAgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_199.setTransform(591,149.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_200.setTransform(581.5,149.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgbAiQgKgLgBgXQAAgNAGgKQAEgLAKgGQAKgFAKAAQAOAAAJAHQAKAHACANIgPADQgCgJgFgFQgFgEgHAAQgLAAgHAJQgHAIAAAQQAAASAHAHQAHAJAKgBQAIAAAGgEQAGgGABgLIAQACQgDAPgKAJQgKAIgOAAQgSAAgLgMg");
	this.shape_201.setTransform(572.9,149.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgIAOQAFgCACgEQACgEAAgGIgIAAIAAgRIAQAAIAAARQAAAIgDAFQgEAHgGACg");
	this.shape_202.setTransform(561.3,154.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAEAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgCAFQgCAJAAAJIAAAtg");
	this.shape_203.setTransform(556.8,149.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_204.setTransform(548.5,149.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgBgFgFgDQgFgCgFAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQALgPAQAAQAIAAAIADQAGADAEAEQACAFACAHIABAOIAAA1g");
	this.shape_205.setTransform(539.1,149.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_206.setTransform(529.6,149.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgBA5QgFgCgCgEQgCgEAAgOIAAgxIgKAAIAAgMIAKAAIAAgWIAPgJIAAAfIAOAAIAAAMIgOAAIAAAyIAAAIIACADIAGABIAGAAIADANIgMABQgIAAgDgDg");
	this.shape_207.setTransform(522.7,148.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgXAxIAAALIgOAAIAAh5IAPAAIAAArQAJgLAOAAQAIAAAHADQAIADAEAGQAFAGADAIQACAIAAAJQAAAXgLAMQgLANgQAAQgOAAgJgNgAgQgJQgHAJAAAPQAAAQAEAHQAHALAMAAQAJAAAHgIQAHgJAAgQQAAgRgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_208.setTransform(515.7,148.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_209.setTransform(506,149.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOACQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAGQAEAEAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_210.setTransform(492.3,149.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJAAgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_211.setTransform(483.4,149.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgCA5QgEgCgCgEQgCgEAAgOIAAgxIgLAAIAAgMIALAAIAAgWIAPgJIAAAfIAPAAIAAAMIgPAAIAAAyIAAAIIACADIAGABIAHAAIACANIgMABQgIAAgEgDg");
	this.shape_212.setTransform(476.5,148.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_213.setTransform(472.1,148.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOACQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAGQAEAEAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_214.setTransform(465.9,149.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_215.setTransform(456.9,149.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgbAiQgLgLABgXQAAgNAEgKQAFgLAKgGQAJgFALAAQAOAAAKAHQAIAHADANIgOADQgDgJgFgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAGAJAKgBQAJAAAHgEQAFgGACgLIAOACQgCAPgKAJQgKAIgPAAQgQAAgMgMg");
	this.shape_216.setTransform(448.3,149.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_217.setTransform(439,149.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgBgFgFgDQgEgCgGAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAKgPARAAQAHAAAIADQAGADAEAEQADAFABAHIABAOIAAA1g");
	this.shape_218.setTransform(429.6,149.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_219.setTransform(415.4,149.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOACQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAGQAEAEAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_220.setTransform(406.4,149.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_221.setTransform(400.1,149.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_222.setTransform(391.8,149.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgbAiQgLgLABgXQAAgNAEgKQAFgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgOADQgCgJgGgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAHAJAJgBQAKAAAFgEQAGgGACgLIAOACQgCAPgKAJQgKAIgPAAQgQAAgMgMg");
	this.shape_223.setTransform(383.1,149.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_224.setTransform(369.1,149.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgBA5QgFgCgBgEQgCgEAAgOIAAgxIgLAAIAAgMIALAAIAAgWIANgJIAAAfIAPAAIAAAMIgPAAIAAAyIABAIIADADIAFABIAGAAIACANIgLABQgIAAgDgDg");
	this.shape_225.setTransform(362.2,148.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOACQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAGQAEAEAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_226.setTransform(355.4,149.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_227.setTransform(346.5,149.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQAEgDAEAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgCAFQgCAJAAAJIAAAtg");
	this.shape_228.setTransform(335,149.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJAAgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_229.setTransform(326.7,149.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgXAxIAAALIgOAAIAAh5IAPAAIAAArQAJgLAOAAQAIAAAHADQAIADAEAGQAFAGADAIQACAIAAAJQAAAXgLAMQgLANgQAAQgOAAgJgNgAgQgJQgHAJAAAPQAAAQAEAHQAHALAMAAQAJAAAHgIQAHgJAAgQQAAgRgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_230.setTransform(317.5,148.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_231.setTransform(307.8,149.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQADgDAFAAQAIAAAIAFIgFANQgFgDgGAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_232.setTransform(301,149.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAAMQAEgIAGgCQAHgEAHAAQALAAAJAGQAJAFAEALQAEAKAAANQAAAOgEAJQgFALgJAHQgKAFgKAAQgGAAgGgDQgGgEgEgEIAAArgAgQgoQgIAIAAARQAAARAHAHQAHAJAKgBQAJABAHgJQAHgIAAgRQAAgQgHgJQgHgJgJABQgJAAgHAJg");
	this.shape_233.setTransform(292.9,151.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJAAgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_234.setTransform(283.2,149.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJAAgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_235.setTransform(269.1,149.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAFgJAFgDQADgDAFAAQAIAAAIAFIgFANQgFgDgGAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_236.setTransform(262.3,149.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJAAgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_237.setTransform(254,149.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AguA9IAAh5IAuAAIASABQAJACAGAEQAGAEAEAIQAEAHAAAJQgBAQgJAKQgKAKgaAAIgfAAIAAAygAgegCIAfAAQAQAAAGgGQAHgGAAgKQAAgIgEgFQgEgGgGgBQgEgCgLAAIgfAAg");
	this.shape_238.setTransform(243.9,148.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgIAIIAAgPIARAAIAAAPg");
	this.shape_239.setTransform(641.7,132.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgaAmQgLgGgDgNIAXgDQACAGAEAEQAFADAHAAQAJAAAFgDQADgCAAgFQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBgBAAIgIgDQgbgGgIgFQgKgHAAgMQAAgLAJgIQAJgIATAAQARAAAJAGQAJAFADAMIgWAEQgBgFgEgDQgEgCgHAAQgJgBgEADQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQADACASAFQASAEAIAGQAHAGAAALQAAAMgKAIQgKAJgUAAQgRAAgKgIg");
	this.shape_240.setTransform(634.3,128.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgWApQgLgGgGgKQgFgLgBgOQABgMAFgLQAGgLAKgFQALgGAMAAQATAAAOANQANANgBATQABATgNAOQgNANgUAAQgLAAgLgFgAgPgTQgGAHAAAMQAAANAGAHQAHAHAIAAQAJAAAGgHQAHgHgBgNQABgMgHgHQgGgHgJAAQgIAAgHAHg");
	this.shape_241.setTransform(624.7,128.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgDA7QgFgCgCgEQgCgDgCgGIAAgQIAAgmIgLAAIAAgSIALAAIAAgSIAWgOIAAAgIAQAAIAAASIgQAAIAAAjIABAMQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIADABIAKgCIACASQgIAEgLAAQgGAAgEgCg");
	this.shape_242.setTransform(616.6,127.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AARAtIAAgtQAAgOgCgDQgBgEgDgDQgEgDgFABQgFAAgFADQgEADgCAGQgCAFAAAOIAAAoIgXAAIAAhXIAVAAIAAANQAMgPARAAQAHAAAHACQAGADADAEQAEAFABAFQABAGAAAKIAAA2g");
	this.shape_243.setTransform(608.6,128.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgaApQgHgEgDgHQgDgHAAgNIAAg2IAXAAIAAApQAAARACAEQABAEADADQAEACAFAAQAFAAAFgDQAEgDACgFQACgFAAgSIAAglIAXAAIAABXIgWAAIAAgNQgEAHgIAEQgHAEgJAAQgJAAgHgEg");
	this.shape_244.setTransform(598.1,128.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgqA+IAAh5IAWAAIAAANQAEgHAHgEQAIgEAIAAQAPAAAKAMQALAMAAAWQAAAVgLAMQgLAMgPAAQgGAAgGgDQgGgDgGgHIAAAtgAgNgkQgGAHAAANQAAAPAGAGQAGAHAIAAQAHAAAGgHQAFgFABgPQAAgOgHgHQgFgGgIAAQgHAAgGAGg");
	this.shape_245.setTransform(588,130.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgbAxQgMgOAAgjQAAghANgPQAJgNARAAQASAAAKANQALAOAAAiQABAigMAQQgKAMgSAAQgRAAgKgNgAgGgnQgEADgCAHQgCAJAAAUQAAAVACAJQADAHADADQADACADAAQAFAAADgCQADgDACgGQACgKAAgVQAAgUgCgJQgCgHgDgDQgDgDgFAAQgDAAgDADg");
	this.shape_246.setTransform(573.1,127.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AADA9IAAhXQgLAMgSAGIAAgVQAJgDALgIQAKgJAEgLIATAAIAAB5g");
	this.shape_247.setTransform(563,127.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_248.setTransform(549.5,128.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_249.setTransform(539.8,127.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAEIgFAOQgFgCgGAAQgFAAgDACQgEADgCAGQgCAHAAAKIAAAtg");
	this.shape_250.setTransform(528.5,128.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgdAiQgLgMAAgWQAAgXAOgNQALgJAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_251.setTransform(520.2,128.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgHA9IAAh5IAOAAIAAB5g");
	this.shape_252.setTransform(513.6,127.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAQgCgEgBgHQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_253.setTransform(507,128.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgGAsIghhXIAQAAIATAzIAEASIAGgRIATg0IAQAAIgiBXg");
	this.shape_254.setTransform(498.1,128.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgCQgEgDgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAJgPASAAQAHAAAHADQAHACAEAFQACAFACAGIABAPIAAA1g");
	this.shape_255.setTransform(484.4,128.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgTAqQgHgDgDgEQgEgFgBgGIgBgPIAAg1IAPAAIAAAwIABAPQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_256.setTransform(474.9,128.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_257.setTransform(460.7,128.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgCQgEgDgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQAKgPASAAQAIAAAGADQAHACADAFQAEAFABAGIABAPIAAA1g");
	this.shape_258.setTransform(451.3,128.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_259.setTransform(441.8,128.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_260.setTransform(435.2,127.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgCA6QgEgDgBgEQgDgFAAgNIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAQAAIAAALIgQAAIAAAzIABAIIACADIAGABIAHgBIACAOIgMABQgIAAgEgCg");
	this.shape_261.setTransform(431.1,127.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_262.setTransform(419.2,128.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgBA6QgFgDgCgEQgBgFAAgNIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAOAAIAAALIgOAAIAAAzIAAAIIADADIAFABIAGgBIACAOIgLABQgIAAgDgCg");
	this.shape_263.setTransform(412.3,127.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgbAiQgLgMAAgWQAAgNAGgLQAEgKAKgGQAJgFALAAQAOAAAJAHQAKAIACANIgOACQgCgJgGgEQgFgFgHAAQgLAAgHAIQgHAIAAARQAAARAHAJQAHAHAKABQAIAAAGgGQAGgFABgMIAQADQgDAPgKAIQgKAJgOAAQgSAAgLgMg");
	this.shape_264.setTransform(405.8,128.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_265.setTransform(396.5,128.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAEIgFAOQgGgCgFAAQgFAAgDACQgEADgBAGQgDAHAAAKIAAAtg");
	this.shape_266.setTransform(389.7,128.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAEIgFAOQgFgCgGAAQgFAAgDACQgEADgCAGQgCAHAAAKIAAAtg");
	this.shape_267.setTransform(384.1,128.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgdAiQgLgMAAgWQAAgXAOgNQALgJAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_268.setTransform(375.8,128.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgbAiQgKgMgBgWQAAgNAGgLQAEgKAKgGQAJgFALAAQAOAAAJAHQAKAIACANIgOACQgCgJgGgEQgFgFgHAAQgLAAgHAIQgHAIAAARQAAARAHAJQAHAHAKABQAIAAAGgGQAGgFABgMIAQADQgDAPgKAIQgKAJgOAAQgSAAgLgMg");
	this.shape_269.setTransform(367.1,128.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_270.setTransform(353.1,128.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgBA6QgFgDgCgEQgCgFAAgNIAAgyIgKAAIAAgLIAKAAIAAgWIAPgJIAAAfIAOAAIAAALIgOAAIAAAzIAAAIIACADIAGABIAGgBIADAOIgMABQgIAAgDgCg");
	this.shape_271.setTransform(346.2,127.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMAEIAWAHQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_272.setTransform(339.4,128.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_273.setTransform(330.5,128.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgTAqQgHgDgDgEQgEgFgBgGIgBgPIAAg1IAPAAIAAAwIABAPQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_274.setTransform(321,128.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAGQAJAFAEALQAEALAAAMQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAAQQAAAQAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJABgHAIg");
	this.shape_275.setTransform(311.8,130.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMAEIAWAHQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_276.setTransform(302.6,128.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_277.setTransform(293.6,128.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAEAAQAIAAAIAEIgFAOQgGgCgFAAQgFAAgDACQgEADgCAGQgCAHAAAKIAAAtg");
	this.shape_278.setTransform(286.8,128.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_279.setTransform(273.8,128.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_280.setTransform(264.1,127.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_281.setTransform(254.9,128.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgcA3QgMgIgGgPQgHgQAAgQQAAgTAIgOQAHgOANgHQAOgIAPAAQASAAAMAJQANAKAFAQIgQAFQgEgOgIgGQgIgGgNAAQgNAAgJAGQgKAIgDALQgEALAAAMQAAAOAEAMQAFAMAJAFQAKAGAKABQAOgBAJgHQAJgJAEgPIAQAFQgFATgNALQgOAKgTAAQgSAAgNgIg");
	this.shape_282.setTransform(244.2,127.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgHAJIAAgQIAQAAIAAAQg");
	this.shape_283.setTransform(638.8,90.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_284.setTransform(631.6,86.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOACQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_285.setTransform(622.6,86.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAFIgFANQgFgDgGAAQgFAAgDADQgEADgCAFQgCAJAAAJIAAAtg");
	this.shape_286.setTransform(616.3,86.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_287.setTransform(608,86.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgbAiQgLgLAAgXQAAgNAGgKQAEgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgOADQgCgJgGgFQgFgEgHAAQgLAAgHAJQgHAIAAAQQAAASAHAHQAHAJAKgBQAIAAAGgEQAGgGABgLIAQACQgDAPgKAJQgKAIgOAAQgSAAgLgMg");
	this.shape_288.setTransform(599.3,86.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_289.setTransform(588.2,85.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_290.setTransform(581.5,86.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQAKgPASAAQAIAAAGADQAHADADAEQAEAFABAHIABAOIAAA1g");
	this.shape_291.setTransform(567.4,86.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_292.setTransform(557.9,86.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_293.setTransform(543.8,86.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgCA5QgEgCgBgEQgDgEAAgOIAAgxIgLAAIAAgMIALAAIAAgWIAOgJIAAAfIAQAAIAAAMIgQAAIAAAyIABAIIACADIAGABIAHAAIACANIgMABQgIAAgEgDg");
	this.shape_294.setTransform(536.9,85.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOACQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_295.setTransform(530.1,86.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_296.setTransform(524,85.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgGAsIghhXIAQAAIATAzIAEASIAFgRIAUg0IAQAAIgiBXg");
	this.shape_297.setTransform(517.9,86.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgYAnQgJgHgDgPIAPgCQACAJAFAFQAGAEAJAAQAKAAAFgDQAFgFAAgFQAAgGgEgCQgDgCgMgEQgQgDgGgDQgGgDgEgFQgDgGAAgGQAAgFADgFQACgFAFgEQAEgCAGgDQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOACQgBgGgFgEQgFgEgIAAQgKAAgEADQgFAEAAAFQAAACACACQACADAEACIAMADIAWAHQAHACADAFQAEAFAAAIQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_298.setTransform(504.6,86.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_299.setTransform(495.6,86.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAVA9IAAg4QAAgKgEgFQgFgGgKAAQgFAAgGAEQgGADgCAGQgDAFAAALIAAAwIgPAAIAAh5IAPAAIAAAsQALgMAOAAQALAAAGAEQAIADADAHQADAHAAAMIAAA4g");
	this.shape_300.setTransform(486.2,85.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_301.setTransform(472,86.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_302.setTransform(462.6,86.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAXA+IAAgsQgDAFgHAEQgGADgHAAQgPAAgLgNQgLgMAAgVQAAgNAEgKQAFgMAJgEQAIgGALAAQAPAAAKAOIAAgMIANAAIAAB5gAgPgpQgHAIAAARQAAARAHAIQAHAIAJAAQAKABAHgJQAHgHAAgQQAAgSgIgIQgHgJgKAAQgIgBgHAJg");
	this.shape_303.setTransform(452.9,88.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_304.setTransform(439,86.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgGA9IAAh5IANAAIAAB5g");
	this.shape_305.setTransform(432.4,85.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgCgFgEgDQgFgCgGAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAANQALgPAQAAQAJAAAGADQAHADADAEQADAFACAHIABAOIAAA1g");
	this.shape_306.setTransform(421.1,86.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_307.setTransform(411.6,86.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgbAiQgLgLABgXQAAgNAEgKQAFgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgOADQgCgJgGgFQgFgEgIAAQgKAAgHAJQgHAIAAAQQAAASAHAHQAHAJAJgBQAKAAAFgEQAGgGACgLIAOACQgCAPgKAJQgKAIgPAAQgQAAgMgMg");
	this.shape_308.setTransform(402.9,86.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_309.setTransform(388.9,86.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_310.setTransform(379.2,85.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAFAAQAHAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgCAFQgCAJAAAJIAAAtg");
	this.shape_311.setTransform(372.7,86.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_312.setTransform(364.4,86.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgHIgBgNIAAg2IAPAAIAAAwIABAQQABAFAFAEQAFADAGAAQAGAAAGgDQAGgEACgFQADgHAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_313.setTransform(354.9,86.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgaAiQgMgLAAgXQABgNAEgKQAFgLAKgGQAKgFAKAAQAOAAAKAHQAIAHADANIgPADQgCgJgFgFQgFgEgHAAQgLAAgHAJQgHAIAAAQQAAASAHAHQAHAJAKgBQAJAAAGgEQAFgGABgLIAQACQgDAPgKAJQgKAIgOAAQgSAAgKgMg");
	this.shape_314.setTransform(346.3,86.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_315.setTransform(337,86.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_316.setTransform(322.8,86.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_317.setTransform(313.1,85.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgIAOQAFgCACgEQACgEAAgGIgIAAIAAgRIAQAAIAAARQAAAIgDAFQgDAHgHACg");
	this.shape_318.setTransform(301.6,91.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgEQgGgFgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAGIABAOIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJABgEACQgEACgCAEQgCACAAAFQAAAFAFAFQAEADAJAAQAIAAAGgDQAHgFADgGQADgFAAgKIAAgFQgIADgQACg");
	this.shape_319.setTransform(294.5,86.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgBA5QgFgCgCgEQgBgEAAgOIAAgxIgLAAIAAgMIALAAIAAgWIAOgJIAAAfIAOAAIAAAMIgOAAIAAAyIAAAIIADADIAFABIAGAAIACANIgLABQgIAAgDgDg");
	this.shape_320.setTransform(287.6,85.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgbAiQgLgLAAgXQAAgNAGgKQAEgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgOADQgCgJgGgFQgFgEgHAAQgLAAgHAJQgHAIAAAQQAAASAHAHQAHAJAKgBQAIAAAGgEQAGgGACgLIAPACQgDAPgKAJQgKAIgOAAQgSAAgLgMg");
	this.shape_321.setTransform(281.2,86.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgUAMgNQALgMASAAQARAAAMAMQALAMAAAVIAAAEIhBAAQABAOAHAIQAIAHAKAAQAIAAAGgDQAFgFAEgKIAPACQgDAOgKAIQgKAHgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgKgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_322.setTransform(271.9,86.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAFIgFANQgGgDgFAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_323.setTransform(265.1,86.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAFIgFANQgFgDgGAAQgFAAgDADQgEADgBAFQgDAJAAAJIAAAtg");
	this.shape_324.setTransform(259.4,86.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgMQALgJAPAAQASAAAMAMQALAMAAAUQAAAQgFAKQgFAKgJAGQgKAFgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAIQAHAJAKgBQALAAAIgIQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_325.setTransform(251.1,86.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgbAiQgKgLgBgXQAAgNAGgKQAEgLAKgGQAJgFALAAQAOAAAJAHQAKAHACANIgOADQgCgJgGgFQgFgEgHAAQgLAAgHAJQgHAIAAAQQAAASAHAHQAHAJAKgBQAIAAAGgEQAGgGACgLIAPACQgDAPgKAJQgKAIgOAAQgSAAgLgMg");
	this.shape_326.setTransform(242.5,86.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_327.setTransform(656.3,65.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgCA6QgEgDgBgEQgDgFAAgNIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAQAAIAAALIgQAAIAAAzIABAIIACADIAGABIAHgBIACAOIgMABQgIAAgEgCg");
	this.shape_328.setTransform(649.4,64.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_329.setTransform(642.6,65.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_330.setTransform(633.6,65.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgGIgBgPIAAg1IAPAAIAAAwIABAPQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_331.setTransform(624.2,65.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAGQAJAFAEALQAEALAAAMQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAAQQAAAQAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJABgHAIg");
	this.shape_332.setTransform(615,67.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_333.setTransform(605.7,65.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_334.setTransform(596.8,65.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAEIgFAOQgFgCgGAAQgFAAgDACQgEADgBAGQgDAHAAAKIAAAtg");
	this.shape_335.setTransform(590,65.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_336.setTransform(577,65.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgGA9IAAh5IAOAAIAAB5g");
	this.shape_337.setTransform(570.4,64.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAFAAQAHAAAIAEIgFAOQgGgCgFAAQgFAAgDACQgEADgCAGQgCAHAAAKIAAAtg");
	this.shape_338.setTransform(561.7,65.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_339.setTransform(556.2,64.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgZA3QgKgGAAgOIAPABQABAHAEADQAFAEAKABQAJgBAGgEQAGgEACgHQABgFAAgOQgKALgOAAQgSAAgKgNQgKgNAAgSQAAgMAFgLQAEgLAJgFQAJgGALAAQAPAAAKAMIAAgKIAOAAIAABLQAAAVgEAJQgEAIgKAFQgJAFgMAAQgQAAgJgIgAgPgqQgHAJAAAQQAAAQAGAIQAHAHAKABQAKgBAHgHQAHgHAAgRQAAgQgHgJQgHgIgLAAQgIAAgHAIg");
	this.shape_340.setTransform(549.3,67.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_341.setTransform(540.1,65.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgHA9IAAh5IAOAAIAAB5g");
	this.shape_342.setTransform(533.5,64.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_343.setTransform(526.9,65.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_344.setTransform(513.2,65.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_345.setTransform(504.2,65.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgXAxIAAALIgOAAIAAh5IAPAAIAAArQAJgLAOAAQAIAAAHADQAIADAEAGQAFAGADAIQACAIAAAJQAAAXgLAMQgLANgQAAQgOAAgJgNgAgQgJQgHAJAAAPQAAAQAEAHQAHALAMAAQAJAAAHgIQAHgJAAgQQAAgRgHgIQgHgIgJAAQgJAAgHAIg");
	this.shape_346.setTransform(495,64.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_347.setTransform(485.3,65.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgxA9IAAh5IAqAAQANAAAHACQALACAHAHQAKAIAFAMQAEANAAAQQAAANgDALQgDALgFAHQgFAHgGAEQgGAEgJACQgIACgKAAgAghAuIAaAAQALAAAHgCQAHgCAEgEQAFgGAEgKQADgJAAgNQAAgTgGgKQgHgLgJgDQgGgDgNAAIgaAAg");
	this.shape_348.setTransform(474.7,64.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgHAIIAAgPIAQAAIAAAPg");
	this.shape_349.setTransform(461.4,69.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_350.setTransform(454.2,65.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgBA6QgFgDgCgEQgBgFAAgNIAAgyIgLAAIAAgLIALAAIAAgWIANgJIAAAfIAPAAIAAALIgPAAIAAAzIABAIIADADIAFABIAGgBIACAOIgLABQgIAAgDgCg");
	this.shape_351.setTransform(447.3,64.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_352.setTransform(440.5,65.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_353.setTransform(431.5,65.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgTAqQgHgDgDgFQgEgEgBgGIgBgPIAAg1IAPAAIAAAwIABAPQABAHAFADQAFADAGAAQAGAAAGgEQAGgDACgGQADgFAAgMIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_354.setTransform(422.1,65.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAGQAJAFAEALQAEALAAAMQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAAQQAAAQAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJABgHAIg");
	this.shape_355.setTransform(412.9,67.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_356.setTransform(403.6,65.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_357.setTransform(394.7,65.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAFAAQAHAAAIAEIgFAOQgFgCgGAAQgFAAgDACQgEADgCAGQgCAHAAAKIAAAtg");
	this.shape_358.setTransform(387.9,65.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_359.setTransform(374.9,65.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_360.setTransform(365.2,64.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_361.setTransform(351.7,65.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgcAiQgMgMAAgWQAAgVAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKAAQAIAAAGgFQAFgEAEgJIAPACQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAALIAwAAQgBgLgFgFQgHgJgLAAQgJAAgHAHg");
	this.shape_362.setTransform(342.8,65.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AAVAtIAAg1QAAgJgCgEQgBgFgFgCQgFgDgFAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAANQAKgPAQAAQAJAAAHADQAGACAEAFQADAFABAGIABAPIAAA1g");
	this.shape_363.setTransform(333.4,65.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgdAiQgLgMAAgWQAAgXAOgNQALgJAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_364.setTransform(323.9,65.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_365.setTransform(317.3,64.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgbAiQgKgMgBgWQAAgNAGgLQAEgKAKgGQAKgFAKAAQAOAAAJAHQAKAIACANIgPACQgCgJgFgEQgFgFgHAAQgLAAgHAIQgHAIAAARQAAARAHAJQAHAHAKABQAIAAAGgGQAGgFABgMIAQADQgDAPgKAIQgKAJgOAAQgSAAgLgMg");
	this.shape_366.setTransform(311.4,65.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgEQAHgDAHAAQALAAAJAGQAJAFAEALQAEALAAAMQAAAOgEAKQgFAKgJAHQgKAFgKAAQgGAAgGgDQgGgDgEgFIAAArgAgQgpQgIAKAAAQQAAAQAHAJQAHAHAKABQAJgBAHgHQAHgJAAgRQAAgRgHgIQgHgJgJAAQgJABgHAIg");
	this.shape_367.setTransform(302.4,67.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgdAiQgLgMAAgWQAAgXAOgNQALgJAPAAQASAAAMAMQALALAAAWQAAAPgFALQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgZQgIAJAAAQQAAARAIAJQAHAHAKABQALAAAIgJQAHgIAAgRQAAgQgHgJQgIgIgLAAQgKAAgHAIg");
	this.shape_368.setTransform(292.7,65.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgYAnQgJgIgDgNIAPgCQACAIAFAFQAGAEAJABQAKAAAFgFQAFgDAAgHQAAgEgEgEQgDgCgMgCQgQgFgGgCQgGgCgEgGQgDgGAAgFQAAgHADgEQACgGAFgDQAEgDAGgCQAGgBAGAAQAKAAAIADQAHADAEAFQAEAFABAJIgOACQgBgHgFgEQgFgEgIAAQgKAAgEAEQgFADAAAFQAAADACABQACADAEACIAMADIAWAIQAHABADAGQAEAEAAAIQAAAIgFAGQgEAHgIAEQgIADgLAAQgQAAgJgHg");
	this.shape_369.setTransform(279,65.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_370.setTransform(270,65.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_371.setTransform(263.4,64.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAEIgFAOQgFgCgGAAQgFAAgDACQgEADgBAGQgDAHAAAKIAAAtg");
	this.shape_372.setTransform(259.4,65.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgHADgFQADgGAFgDQAFgCAGgBIANgDQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFADgCAKIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHACQAHADADAEQAEAEABAGIABAOIAAATQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAGQgJABgEABQgEACgCAEQgCADAAADQAAAHAFADQAEAFAJAAQAIAAAGgFQAHgEADgGQADgFAAgKIAAgFQgIADgQADg");
	this.shape_373.setTransform(251.1,65.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgGAsIgihXIARAAIASAzIAFATIAFgSIAUg0IAPAAIghBXg");
	this.shape_374.setTransform(242.2,65.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgBgFgFgDQgEgCgGAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAAMQAKgOARAAQAHAAAIADQAGADAEAEQADAFABAGIABAPIAAA1g");
	this.shape_375.setTransform(629.8,44.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgLQALgKAPAAQASAAAMAMQALALAAAWQAAAQgFAKQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAJQAHAHAKAAQALABAIgJQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_376.setTransform(620.3,44.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQABgOAFgLQAEgLAKgFQAJgFALAAQAOAAAJAHQAKAHACAOIgPACQgCgJgFgFQgFgEgHAAQgLAAgHAJQgHAHAAARQAAASAHAIQAHAHAKAAQAIAAAGgEQAGgGABgMIAQACQgDAQgKAJQgKAIgOAAQgSAAgKgMg");
	this.shape_377.setTransform(611.7,44.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgYAnQgJgHgDgOIAPgDQACAJAFAFQAGAFAJgBQAKAAAFgDQAFgFAAgFQAAgFgEgEQgDgBgMgEQgQgEgGgCQgGgDgEgFQgDgFAAgHQAAgFADgGQACgEAFgEQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAADACADQACACAEABIAMAFIAWAGQAHACADAFQAEAGAAAHQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_378.setTransform(598.1,44.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_379.setTransform(589.2,44.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgBA5QgFgCgCgEQgBgEAAgOIAAgyIgLAAIAAgLIALAAIAAgWIANgJIAAAfIAPAAIAAALIgPAAIAAAzIABAIIADADIAFABIAGgBIACAOIgLABQgIAAgDgDg");
	this.shape_380.setTransform(582.3,43.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQAKgOASAAQAIAAAGADQAHADADAEQAEAFABAGIABAPIAAA1g");
	this.shape_381.setTransform(575.1,44.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgTAqQgHgDgDgEQgEgFgBgHIgBgNIAAg2IAPAAIAAAvIABAQQABAGAFAEQAFADAGAAQAGAAAGgDQAGgEACgGQADgGAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_382.setTransform(565.6,44.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgZA4QgKgIAAgOIAPADQABAGAEAEQAFADAKAAQAJAAAGgDQAGgFACgIQABgEAAgPQgKAMgOAAQgSAAgKgNQgKgNAAgRQAAgNAFgLQAEgKAJgHQAJgFALAAQAPAAAKAMIAAgKIAOAAIAABLQAAAUgEAKQgEAIgKAFQgJAFgMAAQgQAAgJgHgAgPgpQgHAHAAARQAAARAGAGQAHAJAKgBQAKABAHgJQAHgGAAgRQAAgRgHgHQgHgJgLAAQgIAAgHAJg");
	this.shape_383.setTransform(555.9,46.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgDQAFgFAEgKIAPADQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_384.setTransform(546.7,44.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAFgJAEgDQADgDAGAAQAHAAAIAEIgFAPQgFgEgGAAQgFAAgDAEQgEACgCAGQgCAHAAAKIAAAtg");
	this.shape_385.setTransform(539.9,44.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgDQAHgEAHAAQALAAAJAFQAJAHAEAKQAEAKAAAOQAAANgEAJQgFAMgJAFQgKAGgKAAQgGAAgGgDQgGgEgEgEIAAArgAgQgoQgIAJAAARQAAAPAHAJQAHAHAKAAQAJAAAHgHQAHgJAAgRQAAgQgHgJQgHgIgJAAQgJgBgHAKg");
	this.shape_386.setTransform(531.8,46.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgmAsIAAgMIA3hAIgRABIgjAAIAAgMIBHAAIAAAKIgvA2IgJALIATgBIAoAAIAAANg");
	this.shape_387.setTransform(518,44.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgDQAFgFAEgKIAPADQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_388.setTransform(508.9,44.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_389.setTransform(502.3,43.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgTA4QgJgGgFgKQgEgLAAgNQAAgNAEgKQAEgLAJgGQAJgFALAAQAHAAAGADQAGADAEAGIAAgsIAPAAIAAB5IgOAAIAAgLQgIANgQAAQgKAAgJgGgAgPgJQgHAIAAARQAAARAHAIQAHAIAJAAQAKAAAHgIQAGgIAAgQQAAgRgHgJQgHgIgKAAQgJAAgGAIg");
	this.shape_390.setTransform(495.4,43.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAAMQAJgOASAAQAHAAAHADQAHADADAEQAEAFABAGIABAPIAAA1g");
	this.shape_391.setTransform(481.6,44.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AggA3QgIgHAAgLQAAgGADgGQADgFAFgDQAFgEAGgBIANgDQARgCAJgDIAAgEQAAgIgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgJAFgGQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABAMIAAAUQAAAVABAGQABAFADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAWQgJABgEACQgEABgCAEQgCADAAAEQAAAGAFAEQAEAEAJAAQAIAAAGgEQAHgEADgHQADgFAAgKIAAgFQgIADgQADgAgHgmIAKgXIATAAIgSAXg");
	this.shape_392.setTransform(472.1,43.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgXAtIAAhXIAOAAIAAANQAEgJAFgDQAEgDAFAAQAHAAAIAEIgFAPQgFgEgGAAQgFAAgDAEQgEACgCAGQgCAHAAAKIAAAtg");
	this.shape_393.setTransform(465.3,44.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAIgDgLQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_394.setTransform(457,44.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgBA5QgFgCgCgEQgBgEAAgOIAAgyIgLAAIAAgLIALAAIAAgWIAOgJIAAAfIAOAAIAAALIgOAAIAAAzIAAAIIADADIAFABIAGgBIACAOIgLABQgIAAgDgDg");
	this.shape_395.setTransform(450.1,43.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgEgCgHAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAAMQAJgOASAAQAHAAAHADQAHADADAEQAEAFABAGIABAPIAAA1g");
	this.shape_396.setTransform(442.9,44.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgDQAFgFAEgKIAPADQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_397.setTransform(433.4,44.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgYAnQgJgHgDgOIAPgDQACAJAFAFQAGAFAJgBQAKAAAFgDQAFgFAAgFQAAgFgEgEQgDgBgMgEQgQgEgGgCQgGgDgEgFQgDgFAAgHQAAgFADgGQACgEAFgEQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAADACADQACACAEABIAMAFIAWAGQAHACADAFQAEAGAAAHQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_398.setTransform(424.4,44.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgDQAFgFAEgKIAPADQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_399.setTransform(415.4,44.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgXAtIAAhXIANAAIAAANQAGgJAEgDQADgDAFAAQAIAAAIAEIgFAPQgGgEgFAAQgFAAgDAEQgEACgBAGQgDAHAAAKIAAAtg");
	this.shape_400.setTransform(408.6,44.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AglA+IAAh5IAOAAIAAALQAEgGAGgDQAHgEAHAAQALAAAJAFQAJAHAEAKQAEAKAAAOQAAANgEAJQgFAMgJAFQgKAGgKAAQgGAAgGgDQgGgEgEgEIAAArgAgQgoQgIAJAAARQAAAPAHAJQAHAHAKAAQAJAAAHgHQAHgJAAgRQAAgQgHgJQgHgIgJAAQgJgBgHAKg");
	this.shape_401.setTransform(400.6,46.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgDQAFgFAEgKIAPADQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_402.setTransform(386.2,44.8);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgCA5QgEgCgCgEQgCgEAAgOIAAgyIgKAAIAAgLIAKAAIAAgWIAPgJIAAAfIAPAAIAAALIgPAAIAAAzIAAAIIACADIAGABIAHgBIACAOIgMABQgIAAgEgDg");
	this.shape_403.setTransform(379.3,43.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgcAiQgMgMAAgVQAAgWAMgMQALgMASAAQARAAAMAMQALAMAAAVIAAADIhBAAQABAQAHAHQAIAIAKgBQAIAAAGgDQAFgFAEgKIAPADQgDANgKAHQgKAIgQAAQgSAAgLgMgAgPgaQgIAHAAAMIAwAAQgBgLgFgGQgHgJgLAAQgJAAgHAHg");
	this.shape_404.setTransform(367.3,44.8);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgYAnQgJgHgDgOIAPgDQACAJAFAFQAGAFAJgBQAKAAAFgDQAFgFAAgFQAAgFgEgEQgDgBgMgEQgQgEgGgCQgGgDgEgFQgDgFAAgHQAAgFADgGQACgEAFgEQAEgCAGgCQAGgCAGAAQAKAAAIADQAHADAEAFQAEAFABAIIgOADQgBgHgFgEQgFgEgIAAQgKAAgEADQgFAEAAAEQAAADACADQACACAEABIAMAFIAWAGQAHACADAFQAEAGAAAHQAAAHgFAHQgEAHgIADQgIAEgLAAQgQAAgJgHg");
	this.shape_405.setTransform(358.3,44.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgBgFgFgDQgFgCgFAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQALgOAQAAQAIAAAIADQAGADAEAEQADAFABAGIABAPIAAA1g");
	this.shape_406.setTransform(344.7,44.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgdAyQgLgLAAgXQAAgXAOgMQALgKAPAAQASAAAMAMQALAMAAAUQAAARgFAKQgFAJgJAGQgKAFgMAAQgRAAgMgMgAgRgIQgIAIAAAQQAAARAIAJQAHAIAKAAQALAAAIgJQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJgAgHgmIAKgXIAUAAIgTAXg");
	this.shape_407.setTransform(335.2,43.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_408.setTransform(328.6,43.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQABgOAFgLQAEgLAKgFQAJgFALAAQAOAAAJAHQAKAHACAOIgPACQgCgJgFgFQgFgEgHAAQgLAAgHAJQgHAHAAARQAAASAHAIQAHAHAKAAQAIAAAGgEQAGgGABgMIAQACQgDAQgKAJQgKAIgOAAQgSAAgKgMg");
	this.shape_409.setTransform(322.8,44.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AggAnQgIgHAAgLQAAgGADgGQADgFAFgDQAFgDAGgCIANgCQARgCAJgDIAAgEQAAgJgEgDQgGgGgLAAQgKAAgFAEQgFAEgCAJIgPgCQACgKAFgFQAEgGAJgDQAIgDALAAQALAAAHADQAHACADAEQAEAEABAHIABANIAAATQAAAVABAFQABAGADAFIgQAAQgCgFgBgGQgIAHgIADQgHADgIAAQgPAAgIgHgAgDAFQgJACgEACQgEABgCADQgCADAAAEQAAAGAFAEQAEAEAJABQAIgBAGgEQAHgDADgHQADgFAAgKIAAgFQgIADgQACg");
	this.shape_410.setTransform(313.5,44.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgTAqQgHgDgDgEQgEgFgBgHIgBgNIAAg2IAPAAIAAAvIABAQQABAGAFAEQAFADAGAAQAGAAAGgDQAGgEACgGQADgGAAgLIAAguIAPAAIAABXIgOAAIAAgNQgKAPgRAAQgIAAgGgDg");
	this.shape_411.setTransform(304,44.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgCgFgEgDQgFgCgGAAQgIAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIANAAIAAAMQALgOAQAAQAJAAAGADQAHADADAEQADAFACAGIABAPIAAA1g");
	this.shape_412.setTransform(294.6,44.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgGA9IAAhXIANAAIAABXgAgGgrIAAgRIANAAIAAARg");
	this.shape_413.setTransform(288,43.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgCA5QgEgCgCgEQgCgEAAgOIAAgyIgLAAIAAgLIALAAIAAgWIAPgJIAAAfIAPAAIAAALIgPAAIAAAzIAAAIIACADIAGABIAHgBIACAOIgMABQgIAAgEgDg");
	this.shape_414.setTransform(283.9,43.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AAVAtIAAg0QAAgKgCgEQgBgFgFgDQgFgCgFAAQgJAAgHAGQgHAGAAARIAAAvIgPAAIAAhXIAOAAIAAAMQAKgOAQAAQAJAAAHADQAGADAEAEQADAFABAGIABAPIAAA1g");
	this.shape_415.setTransform(276.7,44.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgdAiQgLgLAAgXQAAgYAOgLQALgKAPAAQASAAAMAMQALALAAAWQAAAQgFAKQgFAJgJAFQgKAGgMAAQgRAAgMgMgAgRgYQgIAIAAAQQAAARAIAJQAHAHAKAAQALABAIgJQAHgIAAgRQAAgQgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_416.setTransform(267.2,44.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQABgOAEgLQAFgLAKgFQAKgFAKAAQAOAAAKAHQAIAHADAOIgPACQgCgJgFgFQgFgEgHAAQgLAAgHAJQgHAHAAARQAAASAHAIQAHAHAKAAQAJAAAGgEQAFgGABgMIAQACQgDAQgKAJQgKAIgOAAQgSAAgKgMg");
	this.shape_417.setTransform(258.5,44.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AAnA9IgPglIgyAAIgNAlIgRAAIAvh5IAQAAIAyB5gAgIgYIgNAjIAoAAIgMghQgGgPgCgKQgCAMgFALg");
	this.shape_418.setTransform(243.6,43.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#F0F0F0").s().p("Eg9iAbrQipAAAAiqMAAAg0KIAAgQIABgRMCAVAAAIABARIABAQMAAAA0KQgBCqipAAg");
	this.shape_419.setTransform(294.8,185.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#E71D46").s().p("EhAKABEQAQiICYAAMB7FAAAQCYAAAQCIg");
	this.shape_420.setTransform(294.8,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_portada, new cjs.Rectangle(-211,-5.6,916.7,375.4), null);


(lib.mc_p1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		var numRespuestas = 4;
		root.btn_ValidarRespuesta.addEventListener("click", validar);
		root.btn_ValidarRespuesta.cursor = "pointer";
		
		this.habilitar_deshabilitarRespuestas = function (action) {
		
			for (var i = 1; i <= numRespuestas; i++) {
		
				if (action == 0) {
					root['r' + i].removeEventListener("click", cambios);
					root['r' + i].cursor = 'default';
					root['opc' + i].removeEventListener("click", cambios);
					root['opc' + i].cursor = 'default';
				}else {
					root['r' + i].addEventListener("click", cambios);
					root['r' + i].cursor = "pointer";
					root['opc' + i].addEventListener("click", cambios);
					root['opc' + i].cursor = "pointer";
				}
		
				//console.log(root['opc' + i]);
			}
		}
		
		function iniciar() {
			root.parent.desactivarSiguiente;
			root.btn_ValidarRespuesta.visible = false;
			root.parent.movieRetro.visible = false;
			for (var i = 1; i <= numRespuestas; i++) {
				root['r' + i].cursor = "pointer";
				root['r' + i].n = i;
				root['r' + i].seleccionado = false;
				root['r' + i].addEventListener("click", cambios);
				root['r' + i].gotoAndStop(1);
				root['opc' + i].n = i;
				root['opc' + i].addEventListener("click", cambios);
				root['opc' + i].cursor = "pointer";
		
				//console.log(root['opc' + i]);
			}
		}
		function cambios(r) {
			//Cambia el estatus de la opcion seleccionada
			for (var i = 1; i <= numRespuestas; i++) {
				root['r' + i].seleccionado = false;
				if (root['r' + i].n != r.currentTarget.n) {
					root['r' + i].gotoAndStop(0);
				} else {
					root['r' + i].gotoAndStop(1);
					root['r' + i].seleccionado = true;
				}
			}
			root.btn_ValidarRespuesta.visible = true;
		}
		
		function validar() {
			var seleccionado = 1;
			for (var i = 1; i <= numRespuestas; i++) {
				if (root['r' + i].seleccionado == true) {
					seleccionado = root['r' + i].n;
				}
			}
			//Valida la respuesta
			//console.log("Respuesta seleccionada: " + seleccionado);
			//(EvalInfo.preguntas[EvalInfo.orden[EvalInfo.control]]);
		
			var isCorrect = "Incorrecto";
			var letraCorrecta = EvalInfo.preguntas[EvalInfo.orden[EvalInfo.control]].correcta
			var numCorrecta = letraCorrecta;
			switch (letraCorrecta) {		
				case "1":
					letraCorrecta = "A";
					break;
				case "2":
					letraCorrecta = "B";
					break;
				case "3":
					letraCorrecta = "C";
					break;
				case "4":
					letraCorrecta = "D";
					break;
			}
		
			if (seleccionado == EvalInfo.preguntas[EvalInfo.orden[EvalInfo.control]].correcta) {
				root.parent.parent.resultados[EvalInfo.control] = 10;
				//("Respuesta Correcta " + root.parent.parent.resultados[EvalInfo.control]);
				isCorrect = "Correcto"
		
				root.parent.movieRetro.gotoAndPlay(1);
				root.parent.movieRetro.retro_resp_correcta.text = "";
				root.parent.movieRetro.visible = true;
			} else {
				root.parent.parent.resultados[EvalInfo.control] = 0;
				// Manejar el movie de la retro para cada pregunta
				root.parent.movieRetro.gotoAndPlay(10);
				console.log("Respuestas correctas para esta pregunta");
				console.log(EvalInfo.preguntas[EvalInfo.orden[EvalInfo.control]].respuestas);
				root.parent.movieRetro.retro_resp_correcta.text = letraCorrecta+") "+ EvalInfo.preguntas[EvalInfo.orden[EvalInfo.control]].respuestas[0][numCorrecta.toString()];
				root.parent.movieRetro.visible = true;
		
			}
			root.activarSiguiente();
			root.parent.registrar_pregunta(root.descripcion.text, root['op' + (seleccionado - 1)].text, isCorrect);
			root.habilitar_deshabilitarRespuestas(0);
			root.btn_ValidarRespuesta.visible = false;
		}
		
		this.reiniciar = function () {
			for (var i = 1; i <= numRespuestas; i++) {
				root['r' + i].gotoAndStop(0);
			}
			desactivar_siguiente();
			root.habilitar_deshabilitarRespuestas(1);
		}
		
		function desactivar_siguiente() {
			root.parent.btn_siguiente.visible = false;
			root.parent.movieRetro.visible = false;
			root.btn_ValidarRespuesta.visible = false;
		}
		
		this.activarSiguiente = function () {
			this.parent.activarSiguiente();
		}
		
		iniciar();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Codigo
	this.btn_ValidarRespuesta = new lib.btnValidar();
	this.btn_ValidarRespuesta.parent = this;
	this.btn_ValidarRespuesta.setTransform(511.7,405.8,1,1,0,0,0,74.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_ValidarRespuesta).wait(1));

	// areasensible
	this.opc4 = new lib.bntSensible();
	this.opc4.parent = this;
	this.opc4.setTransform(517.4,323.8,1.984,1,0,0,0,258.4,31.7);
	new cjs.ButtonHelper(this.opc4, 0, 1, 2, false, new lib.bntSensible(), 3);

	this.opc3 = new lib.bntSensible();
	this.opc3.parent = this;
	this.opc3.setTransform(517.4,257.2,1.984,1,0,0,0,258.4,31.7);
	new cjs.ButtonHelper(this.opc3, 0, 1, 2, false, new lib.bntSensible(), 3);

	this.opc2 = new lib.bntSensible();
	this.opc2.parent = this;
	this.opc2.setTransform(517.4,189.5,1.984,1,0,0,0,258.4,31.7);
	new cjs.ButtonHelper(this.opc2, 0, 1, 2, false, new lib.bntSensible(), 3);

	this.opc1 = new lib.bntSensible();
	this.opc1.parent = this;
	this.opc1.setTransform(517.4,121.5,1.984,1,0,0,0,258.4,31.7);
	new cjs.ButtonHelper(this.opc1, 0, 1, 2, false, new lib.bntSensible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.opc1},{t:this.opc2},{t:this.opc3},{t:this.opc4}]}).wait(1));

	// txt y radio butons
	this.text = new cjs.Text("D)", "bold 17px 'Arial'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(43.6,296.8);

	this.text_1 = new cjs.Text("C)", "bold 17px 'Arial'");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 26;
	this.text_1.parent = this;
	this.text_1.setTransform(43.6,230.4);

	this.text_2 = new cjs.Text("B)", "bold 17px 'Arial'");
	this.text_2.lineHeight = 21;
	this.text_2.lineWidth = 26;
	this.text_2.parent = this;
	this.text_2.setTransform(43.6,164.2);

	this.text_3 = new cjs.Text("A)", "bold 17px 'Arial'");
	this.text_3.lineHeight = 21;
	this.text_3.lineWidth = 26;
	this.text_3.parent = this;
	this.text_3.setTransform(43.6,95);

	this.op3 = new cjs.Text("Bienes virtuales", "17px 'Arial'");
	this.op3.name = "op3";
	this.op3.lineHeight = 21;
	this.op3.lineWidth = 934;
	this.op3.parent = this;
	this.op3.setTransform(68.9,296.1);

	this.r4 = new lib.mc_radioButton();
	this.r4.parent = this;
	this.r4.setTransform(14,284);

	this.descripcion = new cjs.Text("Texto cargado de json", "19px 'Arial'");
	this.descripcion.name = "descripcion";
	this.descripcion.lineHeight = 23;
	this.descripcion.lineWidth = 1010;
	this.descripcion.parent = this;
	this.descripcion.setTransform(2,2);

	this.op2 = new cjs.Text("Bienes intangibles", "17px 'Arial'");
	this.op2.name = "op2";
	this.op2.lineHeight = 21;
	this.op2.lineWidth = 937;
	this.op2.parent = this;
	this.op2.setTransform(68.9,230.9);

	this.op1 = new cjs.Text("Bienes secundarios", "17px 'Arial'");
	this.op1.name = "op1";
	this.op1.lineHeight = 21;
	this.op1.lineWidth = 938;
	this.op1.parent = this;
	this.op1.setTransform(68.9,164.5);

	this.op0 = new cjs.Text("w\nw\nw", "17px 'Arial'");
	this.op0.name = "op0";
	this.op0.lineHeight = 21;
	this.op0.lineWidth = 940;
	this.op0.parent = this;
	this.op0.setTransform(68.9,95);

	this.r3 = new lib.mc_radioButton();
	this.r3.parent = this;
	this.r3.setTransform(14,218.8);

	this.r2 = new lib.mc_radioButton();
	this.r2.parent = this;
	this.r2.setTransform(30.9,173.6,1,1,0,0,0,18,18.1);

	this.r1 = new lib.mc_radioButton();
	this.r1.parent = this;
	this.r1.setTransform(12.1,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r1},{t:this.r2},{t:this.r3},{t:this.op0},{t:this.op1},{t:this.op2},{t:this.descripcion},{t:this.r4},{t:this.op3},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_p1, new cjs.Rectangle(0,0,1029.8,425.1), null);


(lib.malanim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkmkNIJNAAIAAIbIpNAAg");
	mask.setTransform(20,20.5);

	// Capa 1
	this.instance = new lib.malgraf();
	this.instance.parent = this;
	this.instance.setTransform(18.9,68.9,1,1,0,0,0,18.9,18.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:18.9},7,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAOAAIAAAPg");
	this.shape.setTransform(612.3,354.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_1.setTransform(606,351.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAsQgLgKAAgUQAAgUANgLQAJgJAOABQAQgBAKALQALALAAARQAAAPgFAJQgFAIgIAFQgJAFgKAAQgQAAgJgLgAgPgHQgHAHAAAOQAAAPAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgQQAAgNgHgHQgGgHgKAAQgJAAgGAHgAgGghIAJgVIARAAIgQAVg");
	this.shape_2.setTransform(597.6,350.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_3.setTransform(591.8,350);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_4.setTransform(586.6,351.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_5.setTransform(578.4,351.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_6.setTransform(572.3,350.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_7.setTransform(568.4,350);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_8.setTransform(563.2,351.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_9.setTransform(555,351.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_10.setTransform(546.9,352.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_11.setTransform(538.3,351.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_12.setTransform(530.7,351.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_13.setTransform(518.3,351.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_14.setTransform(509.7,350.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_15.setTransform(500,350);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_16.setTransform(494.1,351.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_17.setTransform(485.8,351.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_18.setTransform(477.5,351.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_19.setTransform(469.5,351.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_20.setTransform(463.9,351.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_21.setTransform(456.6,351.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_22.setTransform(448.5,352.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_23.setTransform(438.2,350);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_24.setTransform(432.4,351.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_25.setTransform(422.2,351.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_26.setTransform(414.9,351.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_27.setTransform(406.8,352.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_28.setTransform(394.1,351.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_29.setTransform(385.4,350.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_30.setTransform(377.3,351.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_31.setTransform(371.2,350.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_32.setTransform(367.4,350);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_33.setTransform(362.2,351.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_34.setTransform(356.5,350);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_35.setTransform(353.1,350);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAeQgJgKgBgUQAAgVANgKQAJgJAOAAQAQAAAKALQALAKgBATQABAOgFAIQgEAJgJAFQgJAFgKAAQgPAAgLgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_36.setTransform(347.3,351.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_37.setTransform(339.3,351.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_38.setTransform(329.6,351.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_39.setTransform(322.3,351.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_40.setTransform(314.3,351.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_41.setTransform(302.3,351.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_42.setTransform(293.7,350.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_43.setTransform(285.6,351.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQAlQgHgCgCgEQgEgFgBgGIgBgMIAAgvIAOAAIAAArIABANQABAFAEADQAEADAGAAQAFAAAFgDQAFgCACgGQACgFABgKIAAgpIANAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgGgDg");
	this.shape_44.setTransform(277.2,351.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_45.setTransform(269.1,352.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_46.setTransform(256.4,351.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_47.setTransform(250.3,350.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATAoIAAgvQAAgIgCgEQgBgEgEgCQgFgCgFAAQgHAAgHAFQgFAFgBAPIAAAqIgNAAIAAhNIAMAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_48.setTransform(243.9,351.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_49.setTransform(235.5,351.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_50.setTransform(227.4,350.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_51.setTransform(218.9,351.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_52.setTransform(212.8,351.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_53.setTransform(205.7,352.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_54.setTransform(195.1,351.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_55.setTransform(184.7,351.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_56.setTransform(177,351.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_57.setTransform(164.6,351.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgrIgKAAIAAgLIAKAAIAAgTIAMgIIAAAbIANAAIAAALIgNAAIAAAsIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_58.setTransform(158.5,350.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_59.setTransform(152.5,351.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgnA2IAAhrIBMAAIAAANIg+AAIAAAhIA7AAIAAAMIg7AAIAAAkIBBAAIAAANg");
	this.shape_60.setTransform(144.1,350);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGAnIAAgPIANAAIAAAPgAgGgXIAAgPIANAAIAAAPg");
	this.shape_61.setTransform(182.6,332.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAiA2IgNghIgsAAIgLAhIgPAAIAphrIAOAAIAsBrgAgHgVIgLAfIAjAAIgLgdIgHgWQgCAKgEAKg");
	this.shape_62.setTransform(175.5,331.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGA2IAAheIgjAAIAAgNIBTAAIAAANIgjAAIAABeg");
	this.shape_63.setTransform(166,331.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgaAwQgMgHgGgNQgGgMAAgPQAAgZAOgPQAOgQAWAAQAPAAAMAIQAMAHAGAMQAGANAAAPQAAARgGAMQgHANgMAHQgMAHgOAAQgOAAgMgIgAgZggQgLAKAAAYQAAATALALQAKALAPAAQAQAAAKgLQALgLAAgVQAAgMgFgKQgEgKgJgFQgIgFgLAAQgOAAgLAKg");
	this.shape_64.setTransform(155.6,331.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAcA2Ig4hUIAABUIgNAAIAAhrIAOAAIA4BUIAAhUIANAAIAABrg");
	this.shape_65.setTransform(144.2,331.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHAHIAAgOIAOAAIAAAOg");
	this.shape_66.setTransform(594.7,307.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_67.setTransform(588.4,303.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_68.setTransform(582.3,302.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgEgCgGAAQgHAAgHAFQgFAFgBAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_69.setTransform(575.9,303.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_70.setTransform(567.5,303.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_71.setTransform(557.2,303.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_72.setTransform(546.7,303.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_73.setTransform(540.6,302.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_74.setTransform(534.9,303.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_75.setTransform(526.7,303.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_76.setTransform(520.6,303.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_77.setTransform(515.6,303.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgGAIg");
	this.shape_78.setTransform(508.4,303.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_79.setTransform(500.7,303.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_80.setTransform(488.4,303.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_81.setTransform(480.4,303.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_82.setTransform(474.8,303.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgRAlQgFgCgEgEQgDgFgBgFIAAgNIAAgvIANAAIAAArIAAANQACAGAEACQAEADAGAAQAFAAAFgDQAFgDACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_83.setTransform(467.5,304);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_84.setTransform(459.8,303.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_85.setTransform(450,302.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_86.setTransform(444.1,303.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgZAeQgKgKAAgUQAAgVAMgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_87.setTransform(431.7,303.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_88.setTransform(423,302.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_89.setTransform(414.9,303.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgBAzQgEgDgBgDQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_90.setTransform(408.8,302.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_91.setTransform(402.4,303.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_92.setTransform(396.6,302.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_93.setTransform(391,305.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_94.setTransform(380.4,303.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgZAeQgLgKAAgUQAAgVANgKQAKgJANAAQAQAAAKALQALAKAAATQAAAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgJgLgAgPgVQgHAHAAAOQAAAPAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_95.setTransform(369.9,303.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_96.setTransform(362.2,303.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_97.setTransform(350.3,303.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_98.setTransform(342.4,303.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AASA2IAAgyQAAgIgDgFQgFgEgIAAQgFAAgFADQgFADgCAFQgCAEgBAJIAAArIgMAAIAAhrIAMAAIAAAnQAKgLANAAQAIAAAHAEQAGADADAGQADAGAAAKIAAAyg");
	this.shape_99.setTransform(334.1,302.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHAMQAEgBACgDQABgFABgFIgHAAIAAgPIAOAAIAAAPQAAAIgDAEQgDAFgGADg");
	this.shape_100.setTransform(323.7,308.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AASAoIAAgvQABgIgCgEQgCgEgEgCQgEgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQADAEABAGIABANIAAAvg");
	this.shape_101.setTransform(317.4,303.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgaAtQgJgLgBgUQAAgVANgKQAJgJAOABQAQAAAKAKQALAKgBASQABAPgFAJQgEAIgJAFQgJAFgKAAQgPAAgLgKgAgPgHQgHAHAAAOQAAAPAHAIQAGAHAJAAQAKAAAGgHQAHgIAAgQQAAgNgHgHQgGgHgKAAQgJAAgGAHgAgGghIAJgVIARAAIgQAVg");
	this.shape_102.setTransform(309.1,302.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_103.setTransform(303.2,302.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_104.setTransform(298,303.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_105.setTransform(289.8,303.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_106.setTransform(281.7,305.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgFA2IAAhNIALAAIAABNgAgFglIAAgQIALAAIAAAQg");
	this.shape_107.setTransform(275.7,302.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_108.setTransform(270.5,303.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgGA2IAAhNIAMAAIAABNgAgGglIAAgQIAMAAIAAAQg");
	this.shape_109.setTransform(264.8,302.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_110.setTransform(261.2,302.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_111.setTransform(257.1,303.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_112.setTransform(249.8,303.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_113.setTransform(241.7,305.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgQAlQgHgCgCgEQgDgFgCgFIgBgNIAAgvIAOAAIAAArIABANQABAGAEACQAEADAGAAQAFAAAFgDQAFgDADgFQACgFAAgKIAAgpIAMAAIAABNIgLAAIAAgMQgJAOgPAAQgHAAgFgDg");
	this.shape_114.setTransform(228.9,304);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgBAzQgEgDgCgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_115.setTransform(222.8,302.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_116.setTransform(214.6,303.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQALgJANAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_117.setTransform(207.3,303.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_118.setTransform(199.2,305.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgVAiQgIgGgCgMIANgDQABAIAFAEQAFAFAIAAQAJAAAFgEQAEgEAAgFQAAgEgEgDIgNgEQgOgEgGgCQgFgCgDgFQgDgFAAgFQAAgGACgEQADgEAEgDQADgDAFgBQAGgCAGAAQAIAAAHADQAHACADAFQADAEACAIIgNACQgBgGgEgEQgFgDgHAAQgIAAgEADQgEADAAAEQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABIAFADIALAEQAOADAGADQAFABADAFQADAEAAAHQAAAGgDAGQgEAGgHADQgIAEgJAAQgOAAgIgHg");
	this.shape_119.setTransform(186.8,303.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_120.setTransform(178.9,303.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgGA2IAAhNIANAAIAABNgAgGglIAAgQIANAAIAAAQg");
	this.shape_121.setTransform(173.1,302.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_122.setTransform(167.9,303.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_123.setTransform(159.7,303.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_124.setTransform(153.7,303.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgXAwQgNgGgGgNQgHgNAAgQQAAgPAHgNQAGgNANgHQAMgGAPAAQAMAAAJADQAJAEAGAGQAFAIADAKIgNAEQgCgJgEgEQgDgFgHgCQgHgEgIAAQgJAAgHAEQgHADgEAEQgFAFgCAGQgEAKAAALQAAAOAFAKQAFAJAJAFQAKAEAJABQAKgBAIgDQAJgDAFgEIAAgVIggAAIAAgLIAuAAIAAAmQgLAJgLAEQgLAFgMgBQgPABgNgIg");
	this.shape_125.setTransform(144.7,302.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgHAqIAAgRIAPAAIAAARgAgHgZIAAgPIAPAAIAAAPg");
	this.shape_126.setTransform(234.5,265.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgeAkQgHgGAAgLQAAgFACgGQADgEAFgEQAFgCAFgBIAMgCQARgDAHgCIAAgEQAAgJgDgDQgGgFgKABQgKgBgEAEQgFADgCAJIgOgCQACgIAFgGQADgFAJgDQAIgDAJgBQALAAAHADQAGACADAEQAEAEABAGIABANIAAARQAAAUABAGIADAKIgOAAIgEgKQgHAGgHADQgHACgIAAQgNABgIgIgAgCAFIgNADQgDABgCAEQgCADAAADQAAAGAEADQAFAFAHAAQAIgBAGgDQAHgEADgGQABgEAAgKIAAgFQgHADgOACg");
	this.shape_127.setTransform(227.8,265.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgVArIAAhSIAMAAIAAAMQAFgJAEgCQADgDAFgBQAHAAAIAFIgGANQgEgDgGAAQgEAAgDADQgDADgCAEQgDAIAAAJIAAArg");
	this.shape_128.setTransform(221.3,265.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape_129.setTransform(213.5,265.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAUA5IAAg0QAAgKgFgFQgEgEgJAAQgFAAgFADQgGADgCAGQgDAEAAAKIAAAtIgOAAIAAhxIAOAAIAAApQAKgMAOAAQAJAAAHAEQAHAEADAGQADAGAAAMIAAA0g");
	this.shape_130.setTransform(204.6,263.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgeA5IgBgNIAIABQAFAAADgCIAEgEIAFgLIABgDIgghSIAPAAIARAwIAGASIAFgSIASgwIAOAAIggBTQgEAOgDAFQgDAHgFADQgFADgHAAIgJgBg");
	this.shape_131.setTransform(191.8,267);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgeAkQgHgGAAgLQAAgFACgGQADgEAFgEQAEgCAGgBIANgCQAQgDAHgCIAAgEQAAgJgDgDQgGgFgKABQgKgBgEAEQgFADgCAJIgOgCQACgIAFgGQADgFAJgDQAIgDAJgBQALAAAHADQAGACADAEQAEAEABAGIABANIAAARQAAAUAAAGIAEAKIgOAAIgEgKQgHAGgHADQgHACgIAAQgNABgIgIgAgCAFIgNADQgDABgCAEQgCADAAADQAAAGAEADQAFAFAHAAQAHgBAHgDQAGgEADgGQACgEAAgKIAAgFQgHADgOACg");
	this.shape_132.setTransform(178.8,265.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAUA5IAAg0QAAgKgFgFQgEgEgJAAQgFAAgFADQgGADgCAGQgDAEAAAKIAAAtIgOAAIAAhxIAOAAIAAApQAKgMAOAAQAJAAAHAEQAHAEADAGQADAGAAAMIAAA0g");
	this.shape_133.setTransform(169.9,263.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgZAhQgKgMAAgVQAAgMAEgKQAFgLAJgFQAJgEAKgBQANABAIAGQAJAIADAMIgOACQgCgIgFgFQgFgEgHAAQgJAAgHAIQgHAIAAAPQAAARAGAHQAHAIAKAAQAHAAAGgGQAFgEACgLIAOACQgCAOgKAIQgJAJgNgBQgQABgLgLg");
	this.shape_134.setTransform(161.8,265.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAAEIg9AAQABANAHAIQAHAHAJAAQAIAAAFgEQAGgEADgJIAPABQgEAOgJAGQgJAIgPgBQgRAAgLgLgAgPgZQgGAHgBALIAtAAQgBgLgEgEQgHgJgKAAQgJAAgHAGg");
	this.shape_135.setTransform(153,265.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgmA5IAAhxIBNAAIAAANIg9AAIAAAkIA0AAIAAAMIg0AAIAAA0g");
	this.shape_136.setTransform(144,263.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgHApIAAgPIAPAAIAAAPgAgHgZIAAgQIAPAAIAAAQg");
	this.shape_137.setTransform(222.9,225.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAUAqIAAgxQAAgIgCgFQgCgEgEgCQgEgDgGAAQgIAAgGAGQgHAFAAAQIAAAsIgOAAIAAhSIANAAIAAANQAJgOAQgBQAIAAAGADQAGADAEAEQADAFABAGIABAOIAAAxg");
	this.shape_138.setTransform(216.2,225.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgbAvQgLgLAAgVQAAgWANgLQALgJAOgBQARABALALQALALAAATQAAAQgFAJQgFAJgJAFQgJAFgLABQgQAAgLgMgAgRgIQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIgAgHgkIAKgVIASAAIgRAVg");
	this.shape_139.setTransform(207.3,223.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_140.setTransform(201.1,223.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgZAgQgKgLAAgUQAAgNAEgKQAFgLAJgEQAJgGAJAAQAOAAAJAIQAJAHABAMIgNACQgCgJgFgDQgFgFgHAAQgJAAgHAIQgHAHAAAQQAAARAHAHQAGAIAJAAQAJAAAFgFQAGgGABgKIAOACQgCAOgKAJQgJAHgOABQgPAAgLgMg");
	this.shape_141.setTransform(195.6,225.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgeAlQgHgHAAgLQAAgFACgFQADgGAFgCQAFgCAFgCIAMgDQARgCAHgCIAAgEQAAgIgDgEQgGgFgKAAQgKAAgEAEQgFADgCAJIgOgCQACgIAFgGQADgFAJgEQAIgDAJAAQALABAHACQAGADADADQAEAEABAGIABANIAAASQAAATABAFIADAKIgOAAIgEgKQgHAHgHACQgHAEgIAAQgNgBgIgGgAgCAFIgNADQgDABgCADQgCADAAAEQAAAGAEADQAFAEAHAAQAIAAAGgDQAHgEADgGQABgEAAgKIAAgFQgHADgOACg");
	this.shape_142.setTransform(186.8,225.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgZAgQgKgLAAgUQAAgNAEgKQAFgLAJgEQAJgGAKAAQANAAAIAIQAKAHABAMIgNACQgCgJgFgDQgFgFgHAAQgKAAgGAIQgHAHAAAQQAAARAHAHQAGAIAKAAQAHAAAGgFQAFgGACgKIAOACQgCAOgKAJQgJAHgNABQgRAAgKgMg");
	this.shape_143.setTransform(178.7,225.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_144.setTransform(172.6,223.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgLA6IAAhHIgMAAIAAgLIAMAAIAAgJQAAgIACgEQACgFAFgEQAEgDAJAAIANABIgCAMIgIAAQgHAAgCACQgDADAAAIIAAAHIAQAAIAAALIgQAAIAABHg");
	this.shape_145.setTransform(169,223.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_146.setTransform(164.6,223.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_147.setTransform(161,223.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgeAlQgHgHAAgLQAAgFADgFQADgGAEgCQAFgCAFgCIANgDQAPgCAJgCIAAgEQAAgIgFgEQgFgFgKAAQgJAAgFAEQgFADgCAJIgOgCQACgIAEgGQAFgFAIgEQAIgDAKAAQAKABAHACQAGADAEADQADAEABAGIAAANIAAASQAAATABAFIAEAKIgPAAIgCgKQgIAHgIACQgFAEgJAAQgOgBgHgGgAgDAFIgLADQgFABgCADQgBADAAAEQAAAGAEADQAEAEAJAAQAGAAAHgDQAGgEADgGQADgEAAgKIAAgFQgIADgPACg");
	this.shape_148.setTransform(154.8,225.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgaA0QgLgIgHgOQgFgOAAgQQAAgSAGgNQAHgNANgHQANgHAOAAQAQAAANAJQALAIAFAQIgPAEQgEgNgHgGQgJgFgLAAQgMAAgJAGQgJAGgDALQgEALAAALQAAAOAFALQAEAKAIAGQAJAFAKAAQANAAAJgHQAJgHACgPIAQAEQgFATgMAJQgNAKgRAAQgSAAgMgHg");
	this.shape_149.setTransform(144.7,223.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgHApIAAgQIAPAAIAAAQgAgHgYIAAgQIAPAAIAAAQg");
	this.shape_150.setTransform(198.1,185.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQABQARgBALAMQAKALAAAUIAAAEIg9AAQABAOAHAGQAHAIAJAAQAIAAAFgEQAGgFADgIIAPABQgEAOgJAGQgJAIgPgBQgRAAgLgLgAgPgYQgGAGgBALIAtAAQgBgLgEgEQgHgJgKAAQgJAAgHAHg");
	this.shape_151.setTransform(191.3,185.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgVAqIAAhRIAMAAIAAAMQAFgJAEgCQADgDAFAAQAHgBAIAFIgGANQgEgDgGAAQgEAAgDADQgDACgCAFQgDAIAAAJIAAAqg");
	this.shape_152.setTransform(184.9,185.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgWAuIAAAKIgNAAIAAhxIAOAAIAAApQAJgMANAAQAIAAAGAEQAHADAEAFQAFAGACAIQADAHAAAJQAAAVgLALQgKAMgPAAQgNAAgJgMgAgPgIQgHAIAAAOQAAAPAEAHQAGALAMAAQAIAAAHgIQAGgIABgQQgBgQgGgHQgHgIgIAAQgIAAgHAIg");
	this.shape_153.setTransform(177.3,183.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAqAqIAAgzQAAgIgBgEQgBgDgEgDQgEgCgFAAQgIAAgGAGQgGAGAAANIAAAuIgNAAIAAg0QAAgKgDgFQgEgEgIAAQgGAAgFADQgFADgCAGQgCAGAAALIAAAqIgOAAIAAhRIAMAAIAAALQAEgGAHgEQAGgDAJAAQAJAAAGADQAFAEACAHQAKgOAQAAQAMAAAHAGQAGAIAAAOIAAA3g");
	this.shape_154.setTransform(166,185.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOABQARgBALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape_155.setTransform(154.8,185.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAeA5Ig8hZIAABZIgOAAIAAhxIAPAAIA8BZIAAhZIAOAAIAABxg");
	this.shape_156.setTransform(144.6,183.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgHAqIAAgQIAPAAIAAAQgAgHgZIAAgQIAPAAIAAAQg");
	this.shape_157.setTransform(186.4,148.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIg");
	this.shape_158.setTransform(179.6,148.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgWAkQgJgGgDgNIAPgCQABAIAFAEQAFAFAJAAQAJAAAFgEQAFgEAAgFQAAgFgEgDQgDgCgMgCQgOgFgGgCQgGgDgDgFQgDgEAAgGQAAgGADgEQACgGAEgCQADgDAGgCQAGgCAHAAQAIAAAIADQAHADADAFQAEAFABAIIgOACQgBgGgEgEQgEgEgIAAQgKAAgDAEQgFADAAAEIACAFIAGAEIALADQAPAEAGADQAGABADAFQADAFAAAHQAAAHgDAGQgFAHgIADQgIADgJABQgPAAgIgIg");
	this.shape_159.setTransform(171.2,148.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgWArIAAhTIANAAIAAANQAFgIAEgEQADgDAFAAQAHABAHAEIgFANQgEgDgGAAQgFAAgCADQgDADgCAFQgCAHAAAJIAAArg");
	this.shape_160.setTransform(165.2,148.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgSAnQgGgCgDgEQgDgFgCgGIgBgNIAAgzIAPAAIAAAtIAAAPQACAGAEADQAEADAHAAQAFAAAGgDQAFgDACgGQADgFAAgLIAAgsIAOAAIAABTIgNAAIAAgNQgKAOgPABQgHAAgHgEg");
	this.shape_161.setTransform(157.3,148.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgaA0QgMgIgFgOQgHgOAAgQQAAgSAIgNQAGgNANgHQAMgHAOAAQARAAAMAJQAMAIAFAQIgPAEQgEgNgIgGQgHgFgMAAQgMAAgJAGQgJAGgEALQgDALAAALQAAAOAEALQAFAKAJAGQAJAFAJAAQANAAAIgHQAJgHAEgPIAOAEQgEATgNAJQgMAKgSAAQgRAAgMgHg");
	this.shape_162.setTransform(147.3,146.9);

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

	this.instance = new lib.titulo();
	this.instance.parent = this;
	this.instance.setTransform(288.3,45.8,1,1,0,0,0,14.4,8.7);

	this.btn_imprimir = new lib.imprimir();
	this.btn_imprimir.parent = this;
	this.btn_imprimir.setTransform(389.4,450,1,1,0,0,0,58.5,17.3);
	new cjs.ButtonHelper(this.btn_imprimir, 0, 1, 1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgGAHIAAgOIANAAIAAAOg");
	this.shape_163.setTransform(592.1,394.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgjA2IAAhrIBHAAIAAANIg5AAIAAAhIAxAAIAAAMIgxAAIAAAxg");
	this.shape_164.setTransform(585.7,390.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgsA2IAAhrIAlAAQAMAAAGACQAKACAGAGQAJAHAEALQAEALAAAOQAAAMgCAJQgEAKgEAGQgFAGgEAEQgGADgIACQgHACgJAAgAgdApIAWAAQALAAAFgCQAGgCAEgDQAFgGADgIQACgJAAgLQABgRgGgJQgFgJgJgDQgFgCgMAAIgWAAg");
	this.shape_165.setTransform(575.6,390.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgoA2IAAhrIAoAAIAQABQAIACAFADQAFAEAEAHQADAGAAAIQAAAOgIAJQgKAJgWAAIgbAAIAAAsgAgagCIAbAAQAOAAAFgFQAHgFgBgJQAAgHgDgFQgEgEgFgCIgOgBIgaAAg");
	this.shape_166.setTransform(565.3,390.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_167.setTransform(551.7,391.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgBAzQgEgCgBgEQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_168.setTransform(545.5,390.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_169.setTransform(539.1,391.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_170.setTransform(528.8,391.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_171.setTransform(520.6,391.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQALAKAAATQgBAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_172.setTransform(513.3,391.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgKA2IAAhCIgMAAIAAgLIAMAAIAAgHQAAgJABgDQACgFAFgEQAEgDAIABIANAAIgCAMIgIgBQgGAAgDADQgCACAAAIIAAAGIAPAAIAAALIgPAAIAABCg");
	this.shape_173.setTransform(507.4,390.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AATAoIAAgvQgBgIgBgEQgCgEgEgCQgDgCgGAAQgHAAgHAFQgFAFAAAPIAAAqIgOAAIAAhNIANAAIAAALQAIgNAPAAQAHAAAGADQAGACADAEQADAEABAGIAAANIAAAvg");
	this.shape_174.setTransform(496.7,391.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_175.setTransform(488.3,391.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_176.setTransform(475.8,391.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgBAzQgEgCgCgEQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIAAAHIADADIAEAAIAGAAIACAMIgKABQgHAAgDgCg");
	this.shape_177.setTransform(469.7,390.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AASAoIAAgvQAAgIgBgEQgBgEgEgCQgFgCgFAAQgHAAgGAFQgHAFAAAPIAAAqIgMAAIAAhNIALAAIAAALQAJgNAPAAQAHAAAGADQAGACADAEQACAEACAGIABANIAAAvg");
	this.shape_178.setTransform(463.3,391.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_179.setTransform(454.9,391.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgVArIAAAKIgMAAIAAhrIANAAIAAAnQAJgLAMAAQAHAAAGADQAHADAEAFQAEAFACAIQADAGAAAJQAAAUgKALQgKALgOAAQgNAAgIgMgAgPgHQgGAHAAANQAAAOAEAGQAGALALAAQAHAAAHgIQAGgHAAgPQAAgOgGgIQgGgHgIAAQgIAAgHAIg");
	this.shape_180.setTransform(446.8,390.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgZAeQgLgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgEAJgJAFQgJAFgKAAQgPAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_181.setTransform(438.3,391.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_182.setTransform(432.2,391.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_183.setTransform(425.1,393.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_184.setTransform(414.5,391.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgaAeQgKgKABgUQgBgVAMgKQAKgJAOAAQAQAAAKALQAKAKAAATQAAAOgEAIQgFAJgIAFQgJAFgKAAQgPAAgLgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAHgIQAGgHAAgPQAAgOgGgHQgIgIgJAAQgJAAgHAIg");
	this.shape_185.setTransform(404.1,391.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgXAeQgKgKAAgUQAAgLAEgKQAEgJAJgFQAJgFAJAAQAMAAAIAHQAIAGADAMIgNACQgCgIgFgEQgEgEgHAAQgJAAgGAHQgGAHAAAPQAAAPAGAIQAGAHAIAAQAIAAAFgFQAGgFABgKIANACQgCANgJAIQgJAIgNAAQgOAAgKgLg");
	this.shape_186.setTransform(396.4,391.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgRAlQgGgCgDgEQgCgFgBgFIgBgNIAAgvIANAAIAAArIAAANQACAGAEACQAEADAGABQAFgBAFgDQAFgDACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_187.setTransform(384,391.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgBAzQgEgCgBgEQgCgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIANAAIAAAKIgNAAIAAAtIABAHIACADIAFAAIAFAAIACAMIgKABQgHAAgDgCg");
	this.shape_188.setTransform(377.9,390.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_189.setTransform(367.4,391.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgQAxQgIgFgEgJQgFgJAAgMQAAgMAEgIQAEgKAIgFQAIgFAJAAQAGAAAGADQAFADAEAFIAAgnIANAAIAABrIgMAAIAAgKQgIAMgOAAQgIAAgIgGgAgNgIQgGAHAAAPQAAAPAGAHQAHAIAHAAQAJAAAGgHQAGgHAAgPQAAgPgGgHQgGgIgJAAQgIAAgGAHg");
	this.shape_190.setTransform(358.8,390.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_191.setTransform(353,391.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgcAiQgHgGAAgKQAAgFADgFQACgFAFgDQAEgCAFgBIAMgCQAPgCAHgDIAAgDQAAgIgDgDQgFgFgKAAQgJAAgEADQgFAEgCAIIgNgCQACgIAEgFQAEgFAIgDQAHgDAKAAQAJAAAHADQAGACADADQADAEABAFIABANIAAAQQAAATABAEQAAAFADAFIgOAAQgCgEgBgGQgHAGgHADQgFADgIAAQgNAAgHgHgAgCAFIgMACQgDACgCADQgCACAAAEQAAAFAEAEQAEADAIAAQAHAAAFgDQAGgDADgGQACgFAAgIIAAgFQgHADgNACg");
	this.shape_192.setTransform(345.7,391.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgRAlQgFgCgEgEQgDgFAAgFIgBgNIAAgvIANAAIAAArIAAANQACAGAEACQAEADAGABQAFgBAFgDQAFgDACgFQACgFAAgKIAAgpIAOAAIAABNIgMAAIAAgMQgJAOgPAAQgGAAgHgDg");
	this.shape_193.setTransform(337.3,391.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgXAxQgIgGAAgNIANADQABAGAEACQAEADAJABQAIgBAFgDQAFgDACgIQABgDAAgNQgJAKgMAAQgQAAgJgMQgIgLAAgQQAAgLAEgJQAEgJAHgGQAIgEAKAAQANgBAJALIAAgJIAMAAIAABCQAAATgEAHQgDAIgIAEQgIAEgLAAQgOABgJgHgAgOgkQgGAGAAAOQAAAQAGAGQAGAHAIAAQAKAAAGgHQAGgGAAgPQAAgOgGgHQgHgIgJAAQgIAAgGAIg");
	this.shape_194.setTransform(328.8,393.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgaAeQgKgKAAgUQABgVALgKQALgJANAAQAQAAAKALQAKAKAAATQABAOgFAIQgFAJgIAFQgJAFgKAAQgQAAgKgLgAgQgVQgGAHAAAOQAAAPAGAHQAHAIAJAAQAKAAAGgIQAHgHAAgPQAAgOgHgHQgHgIgJAAQgJAAgHAIg");
	this.shape_195.setTransform(316.5,391.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgZAeQgKgLAAgSQAAgTAKgLQAKgLAQAAQAPAAAKALQAKAKAAATIAAADIg5AAQABANAGAHQAHAHAIAAQAIAAAFgEQAFgEADgIIAOABQgEAMgIAHQgJAHgOAAQgQAAgKgLgAgOgXQgGAGAAAKIAqAAQgBgJgEgFQgGgIgKAAQgIAAgHAGg");
	this.shape_196.setTransform(304,391.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_197.setTransform(293.6,391.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgMA2IAAhNIAMAAIAABNgAgNggIAKgVIAQAAIgPAVg");
	this.shape_198.setTransform(286,390.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgUAoIAAhNIAMAAIAAAMQAEgJAEgCQADgDAFAAQAGAAAHAEIgEANQgFgDgFAAQgEAAgDACQgDADgCAFQgCAHAAAIIAAAog");
	this.shape_199.setTransform(281.3,391.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AghA3IAAhrIAMAAIAAAKQAEgGAGgDQAFgDAHAAQAKAAAHAFQAIAFAEAKQAEAJAAALQAAAMgFAJQgEAJgIAFQgIAGgJAAQgGAAgFgDQgFgDgEgEIAAAmgAgOgkQgHAIAAAPQAAAOAGAHQAGAIAJAAQAIAAAGgIQAGgHAAgPQAAgPgGgHQgGgHgIAAQgIAAgGAHg");
	this.shape_200.setTransform(274.2,393.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAnAoIAAgwIgBgMQgBgDgEgCQgDgCgEAAQgJAAgFAFQgFAGAAAMIAAAsIgNAAIAAgyQAAgJgDgEQgDgEgHAAQgGAAgFADQgEACgDAGQgCAGAAAKIAAAoIgNAAIAAhNIAMAAIAAALQAEgGAGgDQAGgEAIAAQAIAAAGAEQAEADACAHQAKgOAPAAQALAAAGAHQAHAGAAANIAAA1g");
	this.shape_201.setTransform(263.6,391.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgGA2IAAhrIANAAIAABrg");
	this.shape_202.setTransform(255.3,390.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.btn_imprimir},{t:this.instance},{t:this.curso},{t:this.nombre},{t:this.cal},{t:this.fecha},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Certificado_Symbol, new cjs.Rectangle(136.9,13.1,486.8,455.1), null);


(lib.btnTerminar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A282A").s().p("AC2CMQgUgcgqgcQhSg3hpAAIgFAAIAAA0QAAAGgFACQgFACgEgEIhshrQgDgDAAgDQAAgDADgDIBshsQAEgEAFACQAFACAAAGIAAAzQBHAEA9AgQBqA3AfB9QACAHgGADIgEABQgEAAgDgEgACqBlQgphphqgpQgggOglgEQgSgDgQAAQgDAAgDgCQgDgCAAgEIAAgoIhXBYIBXBXIAAgoQAAgDADgDQACgCAEAAIANAAQBRAABFAfQAyAWAlAjIAAAAg");
	this.shape.setTransform(37.1,25.7,1,1,0,0,180);

	this.text = new cjs.Text("Salir del curso", "17px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 135;
	this.text.parent = this;
	this.text.setTransform(66.4,15.9);

	this.instance = new lib.btonvolvera();
	this.instance.parent = this;
	this.instance.setTransform(103,27,1,1,0,0,0,103,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnTerminar, new cjs.Rectangle(0,0,206,54), null);


(lib.btnSiguiente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.flechamc();
	this.instance.parent = this;
	this.instance.setTransform(129.4,17.3,1.37,1.37,0,0,0,5.2,8.4);

	this.text = new cjs.Text("Continuar", "bold 18px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(63.4,8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AqQDHQhZAAAAhZIAAg1IAAgTIAAhtIAAgVIAAgSQAAhXBZAAIUhAAQBZAAAABXIAAASIAAAVIAABtIAAATIAAA1QAABZhZAAg");
	this.shape.setTransform(74.6,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnSiguiente, new cjs.Rectangle(0,-3,149.1,39.7), null);


(lib.btnReintentar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().rr(-2.95,-3.05,5.9,6.1,2.95);
	this.shape.setTransform(17,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().rr(-2.95,-3.05,5.9,6.1,2.95);
	this.shape_1.setTransform(17,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3AJQgDAAgDgDQgCgDAAgDQAAgCACgDQADgCADAAIBvAAQAIgBAAAIQAAADgCADQgDADgDAAg");
	this.shape_2.setTransform(35.7,26.7,1.571,1.571);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguAJQgJAAAAgJQAAgCADgDQACgCAEAAIBdAAQAJgBAAAIQAAAJgJAAg");
	this.shape_3.setTransform(34.4,36.5,1.571,1.571);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag3AJQgDAAgDgDQgCgDAAgDQAAgCACgDQADgCADAAIBvAAQAIgBAAAIQAAADgCADQgDADgDAAg");
	this.shape_4.setTransform(35.7,16,1.571,1.571);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDAaQgEAAgDgDIgOgRQgCgDAAgDQABgDADgCQAGgGAFAHIAHAHIAPgYQACgDADAAQAEgBADACQADACAAADQABAEgCADIgWAhQgDAEgDAAg");
	this.shape_5.setTransform(17.8,16,1.571,1.571);

	this.text = new cjs.Text("Volver a presentar \nla evaluación ", "17px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 167;
	this.text.parent = this;
	this.text.setTransform(53.2,8.4);

	this.instance = new lib.btonvolvera();
	this.instance.parent = this;
	this.instance.setTransform(103,27,1,1,0,0,0,103,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnReintentar, new cjs.Rectangle(0,0,222.5,66.1), null);


(lib.btnInicioCurso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A282A").s().p("AABBZQgHAAAAgJIAAglQAAgJAIAAQADAAACACQADADAAAEIAAATQATgTAFgZQAEgfgRgZQgLgQgQgJQgRgJgTABQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEAAIABAAQAXAAATAKQAUALANATQAXAfgHAmQgFAegWAVIAQAAQAEAAACACQADADgBADQAAAEgCADQgCACgEAAg");
	this.shape.setTransform(36.7,25.7,1.542,1.542);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A282A").s().p("AAABPQgUgLgNgSQgXggAHglQAFgeAWgWIgQgBQgDAAgDgCQgCgDAAgDQAAgEADgCQADgDADABIAlABQAEABACACQACACAAAEIgCAmQAAADgDADQgCACgCAAIgBAAQgDAAgDgDQgCgCAAgEIABgSQgTAQgEAbQgGAeATAaQAKAPAQAJQARAJATAAQADAAADACQACADAAADQAAAJgIAAQgXAAgUgLg");
	this.shape_1.setTransform(23.5,27.2,1.542,1.542);

	this.text = new cjs.Text("Volver a repasar el curso", "17px 'Arial'");
	this.text.lineHeight = 19;
	this.text.lineWidth = 135;
	this.text.parent = this;
	this.text.setTransform(55.2,8.4);

	this.instance = new lib.btonvolvera();
	this.instance.parent = this;
	this.instance.setTransform(103,27,1,1,0,0,0,103,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnInicioCurso, new cjs.Rectangle(0,0,206,62.6), null);


(lib.barratitulotema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Capa 1
	this.instance = new lib.barratitulotemagr();
	this.instance.parent = this;
	this.instance.setTransform(600,-28,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:30},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-58,1239.9,73.5);


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


(lib.Retros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(8).call(this.frame_16).wait(1));

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,2,1,3,true).p("EglBAAAMBKDAAA");
	this.shape.setTransform(264.7,13.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(16));

	// Layer 2
	this.retro_resp_correcta = new cjs.Text("Aqui el texto de la respuesta correcta", "italic 17px 'Arial'", "#333333");
	this.retro_resp_correcta.name = "retro_resp_correcta";
	this.retro_resp_correcta.lineHeight = 21;
	this.retro_resp_correcta.lineWidth = 788;
	this.retro_resp_correcta.parent = this;
	this.retro_resp_correcta.setTransform(67.6,57.9);
	this.retro_resp_correcta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.retro_resp_correcta).wait(9).to({_off:false},0).wait(8));

	// Capa 1
	this.instance = new lib.smile_mc();
	this.instance.parent = this;
	this.instance.setTransform(39.2,38.5,1,1,0,0,0,20.9,20.9);

	this.text = new cjs.Text("Respuesta correcta", "bold 22px 'Arial'", "#339900");
	this.text.lineHeight = 27;
	this.text.lineWidth = 222;
	this.text.parent = this;
	this.text.setTransform(67.6,23.3);

	this.instance_1 = new lib.malanim();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.1,36.5,1,1,0,0,0,18.9,18.9);

	this.text_1 = new cjs.Text("La respuesta correcta es:", "18px 'Arial'");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 248;
	this.text_1.parent = this;
	this.text_1.setTransform(299.2,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{text:"Respuesta correcta",color:"#339900",lineWidth:222}},{t:this.instance}]},1).to({state:[{t:this.text_1},{t:this.instance_1},{t:this.text,p:{text:"Respuesta incorrecta",color:"#E13838",lineWidth:250}}]},8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.retro2019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.InicioCurso = new lib.btnInicioCurso();
	this.InicioCurso.parent = this;
	this.InicioCurso.setTransform(315.6,389.2,1,1,0,0,0,103,31.3);

	this.reintentar = new lib.btnReintentar();
	this.reintentar.parent = this;
	this.reintentar.setTransform(563.2,390.9,1,1,0,0,0,111.2,33);

	this.terminar = new lib.btnTerminar();
	this.terminar.parent = this;
	this.terminar.setTransform(436.9,450.9,1,1,0,0,0,103,27);

	this.texto_Calificacion = new cjs.Text("80", "bold 35px 'Arial'", "#FFFFFF");
	this.texto_Calificacion.name = "texto_Calificacion";
	this.texto_Calificacion.textAlign = "center";
	this.texto_Calificacion.lineHeight = 41;
	this.texto_Calificacion.lineWidth = 124;
	this.texto_Calificacion.parent = this;
	this.texto_Calificacion.setTransform(435.7,120.2);

	this.texto_oportunidades = new cjs.Text("1 de 3", "20px 'Arial'", "#333333");
	this.texto_oportunidades.name = "texto_oportunidades";
	this.texto_oportunidades.textAlign = "center";
	this.texto_oportunidades.lineHeight = 24;
	this.texto_oportunidades.lineWidth = 147;
	this.texto_oportunidades.parent = this;
	this.texto_oportunidades.setTransform(437.3,178.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E71D46").s().p("AnVEOQhvAAhQhPQhPhQAAhvQAAhuBPhQQBQhPBvAAIOrAAQBvAABPBPQBQBQAABuQAABvhQBQQhPBPhvAAg");
	this.shape.setTransform(433.2,136.5);

	this.text = new cjs.Text("Tu calificación es de ", "20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 412;
	this.text.parent = this;
	this.text.setTransform(432.8,81.9);

	this.texto_retro_final = new cjs.Text("Este curso se aprueba con una calificación mínima de 80 puntos.\n\nEs necesario que refuerces tus conocimientos para aprobarlo. Puedes presentar de nuevo la evaluación o repasar el contenido.", "18px 'Arial'");
	this.texto_retro_final.name = "texto_retro_final";
	this.texto_retro_final.textAlign = "center";
	this.texto_retro_final.lineHeight = 22;
	this.texto_retro_final.lineWidth = 647;
	this.texto_retro_final.parent = this;
	this.texto_retro_final.setTransform(448.3,231.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("EhCrAmrQiEAAAAiEMAAAhLRMCJfAAAMAAABLRQAACEiEAAg");
	this.shape_1.setTransform(440,262.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E71D46").s().p("EhEvABLIAAgRQAAiECEAAMCFXAAAQCEAAAACEIAAARg");
	this.shape_2.setTransform(440,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.texto_retro_final},{t:this.text},{t:this.shape},{t:this.texto_oportunidades},{t:this.texto_Calificacion},{t:this.terminar},{t:this.reintentar},{t:this.InicioCurso}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.retro2019, new cjs.Rectangle(0,0,880,510), null);


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
	this.instance.setTransform(750.5,174,0.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(20));

	// Capa 1
	this.instance_1 = new lib.text01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132,143.3,1.2,1.2,0,0,0,257.9,241.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:241.3,scaleX:1,scaleY:1,x:139,y:143.4,alpha:1},14,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.9,-147.3,1488,839);


(lib.mc_eval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		////console.log"Banco de letras" + root.Array[control]);
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
			root.parent.transicion.play();
		//	//console.logroot.resultados);
		}
		
		this.activarSiguiente = function () {
			//console.log"activar siguiente");
			root.btn_siguiente.cursor = "pointer";
			root.btn_siguiente.visible = true;
			root.btn_siguiente.addEventListener("click", this.siguienteFrame);
		}
		
		this.desactivarSiguiente = function () {
			//console.log"Desactivar siguiente");
			root.btn_siguiente.visible = false;
			root.btn_siguiente.cursor = "default";
			root.btn_siguiente.removeEventListener("click");
		}
		function fn() {
			root.parent.gotoAndStop(3);
		}
		
		this.registrar_pregunta = function (p, r, c) {
			//console.log"contador   " + EvalInfo.control);
			root.parent.preguntas[EvalInfo.control] = p;
			root.parent.respuestas[EvalInfo.control] = r;
			root.parent.correctas[EvalInfo.control] = c;
			//console.logroot.parent.preguntas, root.parent.respuestas, root.parent.correctas);
		}
		
		function reiniciar() {
			//console.log"reiniciar");
			actualizarDatos();
		}
		
		function actualizarDatos(id){
			
			root.txt_numPreg.text = parseInt(id)+1;
		   // actualizar al id que quedo del random
			id = root.parent.Array[id];
			
			root.mcPregunta.descripcion.text = EvalInfo.preguntas[id].pregunta
			root.mcPregunta.op0.text = EvalInfo.preguntas[id].respuestas[0]["1"];
			root.mcPregunta.op1.text = EvalInfo.preguntas[id].respuestas[0]["2"];
			root.mcPregunta.op2.text = EvalInfo.preguntas[id].respuestas[0]["3"];
			root.mcPregunta.op3.text = EvalInfo.preguntas[id].respuestas[0]["4"];
		}
		actualizarDatos(EvalInfo.control);
		this.desactivarSiguiente();
		root.parent.transicion.gotoAndStop(0);
		root.parent.transicion.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// retros
	this.movieRetro = new lib.Retros();
	this.movieRetro.parent = this;
	this.movieRetro.setTransform(-23.6,352.3);

	this.timeline.addTween(cjs.Tween.get(this.movieRetro).wait(1));

	// Capa 3
	this.btn_siguiente = new lib.btnSiguiente();
	this.btn_siguiente.parent = this;
	this.btn_siguiente.setTransform(949.4,410.8,1,1,0,0,0,74.5,17.9);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente).wait(1));

	// Capa 4
	this.mcPregunta = new lib.mc_p1();
	this.mcPregunta.parent = this;
	this.mcPregunta.setTransform(467.7,219.2,1,1,0,0,0,470.6,215.2);

	this.timeline.addTween(cjs.Tween.get(this.mcPregunta).wait(1));

	// Layer 2
	this.txt_numPreg = new cjs.Text("0", "28px 'Arial'", "#FFFFFF");
	this.txt_numPreg.name = "txt_numPreg";
	this.txt_numPreg.textAlign = "center";
	this.txt_numPreg.lineHeight = 31;
	this.txt_numPreg.lineWidth = 64;
	this.txt_numPreg.parent = this;
	this.txt_numPreg.setTransform(-47.9,7.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AjNDOQhVhWAAh4QAAh3BVhWQBWhVB3AAQB4AABWBVQBVBWAAB3QAAB4hVBWQhWBVh4AAQh3AAhWhVg");
	this.shape.setTransform(-47.4,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt_numPreg}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_eval, new cjs.Rectangle(-81.9,-11.3,1105.9,441), null);


// stage content:
(lib.AC_IMCR_OV_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{inicio:0,"inicio":2});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.noOportunidades.visible = false;
		try {
			parent.iniciar_tema(this);
		
			if (parent.intentoAct <= parent.oportunidades) {
				parent.habilitar_deshabilitarBarra("d");
			} else {
				//Mostrar el mensaje de que no puede hacer mas la eval
				root.btn_iniciar.visible = false;
				root.noOportunidades.visible = true;
				parent.habilitar_deshabilitarBarra("h");
				parent.deshabilitarSiguiente();
			}
		
			parent.EvalInProgress = true;
		} catch (e) {
			//console.log"No hay comunicación con el start.js", e);
		}
		//------------------------------ CODIGO GLOBAL ------------------------------------
		var root = this;
		//variables necesarias para el guardado de respuestas 
		this.calificacion = 0;
		this.res = 0;
		this.minima = parent.califMinima;
		var nPreguntas = 10;
		this.resultados = [];
		this.Array = [];
		this.preguntas = [];
		this.respuestas = [];
		this.correctas = [];
		for (var t = 0; t < 10; t++) {
			this.resultados[t] = "0";
			this.Array[t] = "";
			this.preguntas[t] = "";
			this.respuestas[t] = "";
			this.correctas[t] = "";
		}
		this.cont = 0;
		this.x;
		this.val = true;
		var debug = false; //Para pruebas
		//arreglo para el random
		
		for (var i = 0; i < nPreguntas; i++) {
			//this.x = parseInt(Math.random() * EvalInfo.preguntas.length );
			//this.x = Math.floor(Math.random() * EvalInfo.preguntas.length - 0)	;
			this.x = Math.round((Math.random() * EvalInfo.preguntas.length) - 1);
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
		
		for (var t = 0; t < root.Array.length; t++) {
			if (root.Array[t] == -1) {
				root.Array[t] = 0;
			}
		}
		//console.log"orden " + EvalInfo.preguntas.length);
		stage.enableMouseOver();
		//Para acitividades que llevan drag and drope y touch en mobile
		createjs.Touch.enable(stage);
		this.btn_iniciar.cursor = "pointer";
		this.btn_iniciar.addEventListener("click", comenzar);
		
		if (debug) {
			let arregloTemp = [];
			for (var i = 0; i < root.Array.length; i++) {
				var id = root.Array[i];
				arregloTemp.push(EvalInfo.preguntas[id].correcta);
			}
			console.log(arregloTemp);
		}
		
		
		function comenzar() {
			root.gotoAndStop((root.timeline.position + 1));
			EvalInfo.orden = [];
			EvalInfo.orden = root.Array;
		}
		this.stop();
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
		this.imprimirCal = function () {
			for (var i = 0; i < this.resultados.length; i++) {
				this.calificacion += this.resultados[i];
				this.res += this.resultados[i];
			}
			console.log("Calificacion real: "+this.calificacion);
		}
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
		var root = this;
		document.aprobo = false;
		root.imprimirCal();
		try {
			parent.intentoAct++;
			root.retro_eval.reintentar.addEventListener("click", reintentar);
			root.retro_eval.InicioCurso.addEventListener("click", inicioCurso);
			root.retro_eval.terminar.addEventListener("click", terminar);
		} catch (e) {
			console.log("Standalone");
		}
		if (this.calificacion < this.minima) {
		
			//retro opcion 1
			retro1();
		
			try {
				if (parent.SCORE === undefined || parent.SCORE === NaN || parent.SCORE === 0) {
					parent.SCORE = 0;
				}
				if (this.calificacion > parent.SCORE) {
					parent.SCORE = this.calificacion;
					//habilitar barra
					/*try{
						parent.habilitar_deshabilitarBarra("h");
						}
					catch(err){
						
					}*/
				}
				if (parent.intentoAct >= parent.oportunidades) {
					//console.log"Fail", parent.intentoAct, this.calificacion, this.minima);
					retro2();
					parent.ComunicacionLMS("completado"); //completado
					parent.new_nswf_DoFSCommand("CMISetFailed", ""); //Fallido
					parent.new_nswf_DoFSCommand("CMISetScore", parent.SCORE); //Calif
					parent.ComunicacionLMS("completado");
				}
				parent.guardarDatos();
			} catch (err) {
				console.log("No hay comunicación con el start.js u otros componentes");
			}
		} else {
			//console.log"calificacion aprobatoria");
			document.aprobo = true;
			retro3();
			/*root.retro_eval.reintentar.addEventListener("click", reintentar);
			root.retro_eval.reintentar.cursor = "pointer";
			root.retro_eval.reintentar.visible = true;
			root.retro_eval.terminar.addEventListener("click", function () {
				root.play();
			});
			root.retro_eval.terminar.cursor = "pointer";*/
			try {
				parent.habilitar_deshabilitarBarra("h");
			} catch (err) {
		
			}
			try {
				if (this.calificacion > parent.SCORE) {
					parent.SCORE = this.calificacion;
				}
				//root.retro_eval.texto_oportinodades.text = "Felicidades, obtuviste una calificacion aprobatoria. ";
				//root.retro_eval.texto_oportunidades.visible = false;
				//root.retro_eval.reintentar.visible = false;
				parent.TRAK[parent.IDActual + 1] = 2;
				//Oportunidades eliminadas para que no se bloquee la evaluacion.
				parent.oportunidades = 999;
				parent.guardarDatos();
				parent.new_nswf_DoFSCommand("CMISetScore", parent.SCORE); // calif
				parent.ComunicacionLMS("completado"); //Complete
				parent.new_nswf_DoFSCommand("CMISetPassed", ""); //Pasado
				setTimeout(parent.habilitar_deshabilitarBarra("h"), 100);
			} catch (err) {
				console.log("No hay comunicación con API", err);
			}
		}
		//console.log"MaxIntentos:" + parent.oportunidades);
		function reintentar() {
			try {
				location.reload();
			} catch (err) {
				console.log("no hay comunicacion con start.js:" + err);
			}
		}
		function inicioCurso() {
			try {
				parent.habilitar_deshabilitarBarra("h");
				parent.ir(0);
			} catch (err) {
				console.log("no hay comunicacion con start.js:" + err);
			}
		}
		
		//Si el participante obtiene una calificación menor a 80 puntos 
		function retro1() {
			root.retro_eval.terminar.visible = false;
			root.retro_eval.reintentar.addEventListener("click", reintentar);
			root.retro_eval.InicioCurso.addEventListener("click", inicioCurso);
			root.retro_eval.terminar.addEventListener("click", terminar);
			root.retro_eval.reintentar.cursor = "pointer";
			root.retro_eval.InicioCurso.cursor = "pointer";
		}
		//Si el participante obtiene una calificación menor a 80 en los 3 intentos
		function retro2() {
			root.retro_eval.terminar.visible = false;
			root.retro_eval.terminar.cursor = "Pointer";
			root.retro_eval.reintentar.visible = false;
			root.retro_eval.InicioCurso.visible = false;
			root.retro_eval.texto_retro_final.text = "No has logrado aprobar este curso. " +
				"Ponte en contacto con el Área de Recursos Humanos " +
				"para que te lo asignen de nuevo. Cierra la ventana del navegador para cerrar el curso.";
		}
		//Si el participante obtiene una calificación mayor a 80 puntos.
		function retro3() {
			root.retro_eval.terminar.visible = false;
			root.retro_eval.terminar.cursor = "Pointer";
			root.retro_eval.reintentar.visible = false;
			root.retro_eval.InicioCurso.visible = false;
			root.retro_eval.texto_retro_final.text = "¡Felicidades! Has aprobado este curso. Presiona siguiente para ir al cierre o cierra la ventana del navegador para salir del curso. Tu avance ha sido registrado.";
			root.retro_eval.texto_oportunidades.visible = false;
		}
		function terminar() {
			var winPop = window.self;
			winPop.opener = window.self;
			winPop.close();
			alert("Se procedera a salir del curso.");
		}
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// barra titulo
	this.instance = new lib.barratitulotema();
	this.instance.parent = this;
	this.instance.setTransform(600,30,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// transicion
	this.transicion = new lib.transicion_mc();
	this.transicion.parent = this;
	this.transicion.setTransform(599.7,79,1,1,0,0,0,597.8,79);
	this.transicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.transicion).wait(1).to({_off:false},0).wait(4));

	// btnIniciar
	this.noOportunidades = new lib.noOportunidades();
	this.noOportunidades.parent = this;
	this.noOportunidades.setTransform(661.1,360.8,1,1,0,0,0,71.9,13.5);

	this.btn_iniciar = new lib.btnIniciar();
	this.btn_iniciar.parent = this;
	this.btn_iniciar.setTransform(1035.9,537.5,1,1,0,0,0,71.9,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_iniciar},{t:this.noOportunidades}]}).to({state:[]},2).wait(3));

	// nueva retro
	this.retro_eval = new lib.retro2019();
	this.retro_eval.parent = this;
	this.retro_eval.setTransform(415.9,188.4,1,1,0,0,0,250,85);
	this.retro_eval._off = true;

	this.timeline.addTween(cjs.Tween.get(this.retro_eval).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.instance_1 = new lib.chunk();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1218,16);

	this.instance_2 = new lib.MC_pag1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(78,95.3);

	this.instance_3 = new lib.mc_portada();
	this.instance_3.parent = this;
	this.instance_3.setTransform(604.4,332.2,1,1,0,0,0,296.4,178.5);

	this.mc_eval = new lib.mc_eval();
	this.mc_eval.parent = this;
	this.mc_eval.setTransform(583.6,362.4,1,1,0,0,0,487.5,239.9);

	this.retro_eva = new lib.mc_retro_eval();
	this.retro_eva.parent = this;
	this.retro_eva.setTransform(490.9,418.8,1,1,0,0,0,197.8,58.8);

	this.instance_4 = new lib.Certificado_Symbol();
	this.instance_4.parent = this;
	this.instance_4.setTransform(533.9,335.5,1,1,0,0,0,489,250);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.mc_eval}]},1).to({state:[{t:this.retro_eva}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(516.1,279.5,1488,845);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AC_IMCR_OV_26_atlas_.jpg?1576442911647", id:"AC_IMCR_OV_26_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;