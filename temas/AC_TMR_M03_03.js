(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.titulot2mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Identificación del Desempeño", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(92.9,38);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,36,189.9,146.7);


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
	this.shape.setTransform(-293.7,-229.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.775,-230.1);

	this.text = new cjs.Text("Identificación del Desempeño", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282.05,-241.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,282.2,26.30000000000001), null);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(71.0977,27.15,0.5935,0.5935);

	this.text_1 = new cjs.Text("3.3", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(69.9249,57.65,1.0935,1.0935);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.7908,69.6505,1.5036,1.5036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.mascaratapar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvWACqIAAlTMBetAAAIAAFTg");
	this.shape.setTransform(303.075,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,34);


(lib.m3t4mc2txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Para niveles que no cuentan con evaluación del desempeño, el líder realizará una evaluación usando la plataforma SuccessFactors. ", "bold 16px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 327;
	this.text.parent = this;
	this.text.setTransform(31.6,275.8);

	this.text_1 = new cjs.Text("Se han definido cortes que aseguren una distribución normal de los resultados.", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 327;
	this.text_1.parent = this;
	this.text_1.setTransform(31.6,224.8);

	this.text_2 = new cjs.Text("Para esta dimensión se ha consolidado la información de cada operación/país considerando el desempeño histórico (promedio) de los últimos tres años evaluados*. ", "16px 'Arial'", "#333333");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 329;
	this.text_2.parent = this;
	this.text_2.setTransform(31.6,119.25);

	this.text_3 = new cjs.Text("Valoración del nivel de Desempeño", "bold 20px 'Arial'", "#333333");
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 362;
	this.text_3.parent = this;
	this.text_3.setTransform(19.6,42.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(114,181,201,0.098)").s().p("A79WhQhkgBAAhjMAAAgp4QAAhlBkABMA37AAAQBkgBAABlMAAAAp4QAABjhkABg");
	this.shape.setTransform(189.025,231.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.m3t4mc2txt1, new cjs.Rectangle(0,40.6,383.1,363.2), null);


(lib.info01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("se considerarán las existentes.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 352;
	this.text.parent = this;
	this.text.setTransform(-318.8,-23.5);

	this.text_1 = new cjs.Text("(*) En caso de tener menos de tres evaluaciones  ", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 352;
	this.text_1.parent = this;
	this.text_1.setTransform(-336.8,-44.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AfVFIMg+pAAAQhkAAAAhkIAAnHQAAhkBkAAMA+tAAAQBgACAABiIAAHHQAABihgACIgEAAg");
	this.shape.setTransform(-179.725,-25.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info01, new cjs.Rectangle(-390.2,-58.6,425.2,113.1), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9C9C9").s().p("AhEAnImUgMIAIhBIOpAJIgDBEg");
	this.shape.setTransform(47.25,3.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,94.5,7.8), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhXQAFBPAFBg");
	this.shape.setTransform(0.8007,8.8191);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,3.0999999999999996,19.7), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhUQAFBMAFBe");
	this.shape.setTransform(0.8008,8.5435);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-1,3.0999999999999996,19.1), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhPQAEA0AFBr");
	this.shape.setTransform(0.7746,7.9674);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-1,3,18), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhRQAFBRAEBT");
	this.shape.setTransform(0.7757,8.2955);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-0.9,3,18.5), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhQQAEA3AFBq");
	this.shape.setTransform(0.7496,8.171);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-0.9,3,18.2), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEhNQAGBmADA2");
	this.shape.setTransform(0.7256,7.8946);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-0.9,2.9000000000000004,17.7), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGhXQgGBPgEBg");
	this.shape.setTransform(0.7993,8.8191);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,3.0999999999999996,19.7), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhUQgFBUgEBW");
	this.shape.setTransform(0.7744,8.5456);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-1,3,19.1), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhPQgFBOgEBR");
	this.shape.setTransform(0.7743,7.9696);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-1,3,18), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhRQgEA3gFBt");
	this.shape.setTransform(0.7504,8.2955);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-0.9,3,18.5), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhQQgEA3gFBq");
	this.shape.setTransform(0.7504,8.171);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-0.9,3,18.2), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAFhNQgEA0gFBo");
	this.shape.setTransform(0.7504,7.8951);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-0.9,3,17.7), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAVhBIgpCD");
	this.shape.setTransform(2.35,6.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,6.2,15.200000000000001), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgPAyIAfhj");
	this.shape.setTransform(1.825,5.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.7,-0.9,5.1000000000000005,11.9), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgfhCQAbARAQAuQAKAbAIAw");
	this.shape.setTransform(3.3658,6.939);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.8,-0.8,8.200000000000001,15.9), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAghCQgbARgQAuQgKAbgIAw");
	this.shape.setTransform(3.2342,6.939);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,8.2,15.9), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgMgkIAZBJ");
	this.shape.setTransform(1.5,3.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.7,-0.9,4.5,9.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAWA+Igrh7");
	this.shape.setTransform(2.475,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.7,-0.9,6.4,14.4), null);


(lib.desepeobajo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBDBD").s().p("AE8AGIp3AAQgHAcgdACQghgDgDghQADggAhgDQAdACAHAcIJ3AAQAHgcAdgCQAiADACAgQgCAhgiADQgdgCgHgcg");
	this.shape.setTransform(291.65,206.075);

	this.text = new cjs.Text("Desempeño\nBajo (1)", "bold 18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 126;
	this.text.parent = this;
	this.text.setTransform(154.05,185.25);

	this.text_1 = new cjs.Text("Menor al\ncuartil 1", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 90;
	this.text_1.parent = this;
	this.text_1.setTransform(368.85,187.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(114,181,201,0.4)").s().p("Ao5DmQhkAAAAhkIAAkDQAAhkBkAAIRzAAQBkAAAABkIAAEDQAABkhkAAg");
	this.shape_1.setTransform(403.1,206.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

	// Capa_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.349)").s().p("AhjFbIAAq1IDHAAIAAK1g");
	this.shape_2.setTransform(75.05,204.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.098)").s().p("AhjFbIAAq1IDHAAIAAK1g");
	this.shape_3.setTransform(231.05,204.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(185,218,227,0.6)").s().p("AtvFbIAAq1IbfAAIAAK1g");
	this.shape_4.setTransform(153.05,204.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desepeobajo1, new cjs.Rectangle(65.1,169.8,405,73.6), null);


(lib.desempeomedio2mod2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Entre cuartil 1 y cuartil 3", "18px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(347.45,117.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBDBD").s().p("AE8AGIp3AAQgHAcgdACQghgDgDghQADggAhgDQAdACAHAcIJ3AAQAHgcAdgCQAiADACAgQgCAhgiADQgdgCgHgcg");
	this.shape.setTransform(291.65,136.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(152,193,80,0.4)").s().p("Ao5DmQhkAAAAhkIAAkDQAAhkBkAAIRzAAQBkAAAABkIAAEDQAABkhkAAg");
	this.shape_1.setTransform(402.1,137.45);

	this.text_1 = new cjs.Text("Desempeño Medio (2)", "bold 18px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 129;
	this.text_1.parent = this;
	this.text_1.setTransform(156.05,116.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	// Capa_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.349)").s().p("AhjFbIAAq1IDHAAIAAK1g");
	this.shape_2.setTransform(75.05,135.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.098)").s().p("AhjFbIAAq1IDHAAIAAK1g");
	this.shape_3.setTransform(231.05,135.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(172,205,115,0.6)").s().p("AtvFbIAAq1IbfAAIAAK1g");
	this.shape_4.setTransform(153.05,135.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.desempeomedio2mod2, new cjs.Rectangle(65.1,100.8,404,74.89999999999999), null);


(lib.desempeoalto3mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("AhjFbIAAq1IDHAAIAAK1g");
	this.shape.setTransform(75.05,65.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AhjFbIAAq1IDHAAIAAK1g");
	this.shape_1.setTransform(231.05,65.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDBDBD").s().p("AE8AGIp3AAQgHAcgdACQghgDgDghQADggAhgDQAdACAHAcIJ3AAQAHgcAdgCQAiADACAgQgCAhgiADQgdgCgHgcg");
	this.shape_2.setTransform(291.65,69.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE9E9E").s().p("ARKDyQgMgEgBgMIAAiFQgBgQgQgBQgPABgCAQIAACGQgBAPgQAAQgNgEAAgMIAAj+IgIAAIAABjQgBAPgRAAQgMgDgBgNIAAhtQAHhHBHgHIARAAQBHAHAGBHIAABuQgBAPgRAAQgMgDAAgNIAAhiIgIAAIAAD/QgCAPgPAAIgBAAgAM/DyQgMgEgBgMIAAiFQgBgQgQgBQgPABgBAQIAACGQgCAPgQAAQgMgEgBgMIAAj+IgIAAIAABjQgBAPgRAAQgMgDAAgNIAAhtQAGhHBHgHIARAAQBHAHAHBHIAABuQgCAPgRAAQgMgDAAgNIAAhiIgIAAIAAD/QgCAPgPAAIgBAAgAI0DyQgMgEgBgMIAAiFQgBgQgQgBQgPABgCAQIAACGQgCAPgQAAQgMgEgBgMIAAj+IgHAAIAABjQgCAPgQAAQgMgDgBgNIAAhtQAHhHBHgHIARAAQBGAHAHBHIAABuQgBAPgRAAQgMgDAAgNIAAhiIgIAAIAAD/QgCAPgPAAIgBAAgAEpDyQgMgEgBgMIAAiFQgCgQgPgBQgPABgCAQIAACGQgCAPgQAAQgMgEgBgMIAAj+IgHAAIAABjQgCAPgQAAQgMgDgBgNIAAhtQAHhHBHgHIARAAQBGAHAHBHIAABuQgCAPgQAAQgMgDgBgNIAAhiIgIAAIAAD/QgBAPgPAAIgBAAgAAeDyQgMgEgBgMIAAiFQgBgQgQgBQgOABgCAQIAACGQgCAPgQAAQgMgEgBgMIAAj+IgHAAIAABjQgCAPgQAAQgMgDgBgNIAAhtQAHhHBHgHIAQAAQBGAHAHBHIAABuQgCAPgQAAQgMgDgBgNIAAhiIgHAAIAAD/QgCAPgPAAIgBAAgAjsDyQgNgEAAgMIAAiFQgCgQgPgBQgPABgCAQIAACGQgCAPgQAAQgMgEgBgMIAAj+IgHAAIAABjQgCAPgQAAQgMgDgBgNIAAhtQAGhHBHgHIARAAQBHAHAHBHIAABuQgCAPgQAAQgMgDgBgNIAAhiIgIAAIAAD/QgBAPgPAAIgBAAgAn4DyQgMgEgBgMIAAiFQgBgQgQgBQgPABgBAQIAACGQgCAPgQAAQgMgEgBgMIAAj+IgIAAIAABjQgBAPgRAAQgLgDgBgNIAAhtQAGhHBHgHIARAAQBHAHAHBHIAABuQgCAPgRAAQgMgDAAgNIAAhiIgIAAIAAD/QgCAPgPAAIgBAAgAsDDyQgMgEgBgMIAAiFQgBgQgPgBQgQABgBAQIAACGQgCAPgQAAQgMgEgBgMIAAj+IgHAAIAABjQgCAPgRAAQgLgDgBgNIAAhtQAGhHBHgHIARAAQBHAHAHBHIAABuQgCAPgQAAQgNgDAAgNIAAhiIgIAAIAAD/QgBAPgQAAIgBAAgAwODyQgMgEgBgMIAAiFQgBgQgQgBQgPABgCAQIAACGQgBAPgQAAQgMgEgBgMIAAj+IgIAAIAABjQgBAPgRAAQgMgDAAgNIAAhtQAGhHBHgHIARAAQBHAHAHBHIAABuQgCAPgRAAQgMgDAAgNIAAhiIgIAAIAAD/QgCAPgPAAIgBAAgAP5i+QAEgvAwgEQAvAEAEAvQgEAvgvAFQgwgFgEgvgALui+QAEgvAvgEQAwAEAEAvQgEAvgwAFQgvgFgEgvgAHji+QAEgvAvgEQAvAEAFAvQgFAvgvAFQgvgFgEgvgADYi+QAEgvAvgEQAvAEAFAvQgFAvgvAFQgvgFgEgvgAgzi+QAFgvAugEQAvAEAFAvQgFAvgvAFQgugFgFgvgAk+i+QAFgvAvgEQAvAEAEAvQgEAvgvAFQgvgFgFgvgApJi+QAFgvAvgEQAvAEAEAvQgEAvgvAFQgvgFgFgvgAtUi+QAEgvAwgEQAvAEAEAvQgEAvgvAFQgwgFgEgvgAxfi+QAEgvAvgEQAwAEAEAvQgEAvgwAFQgvgFgEgvg");
	this.shape_3.setTransform(152.075,-6.0492);

	this.text = new cjs.Text("Mayor al cuartil 3", "18px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 90;
	this.text.parent = this;
	this.text.setTransform(367.85,47.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,0,0.4)").s().p("Ao5DmQhkAAAAhkIAAkDQAAhkBkAAIRzAAQBkAAAABkIAAEDQAABkhkAAg");
	this.shape_4.setTransform(402.1,66.95);

	this.text_1 = new cjs.Text("Desempeño Alto (3)", "bold 18px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 125;
	this.text_1.parent = this;
	this.text_1.setTransform(156.05,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.shape_4},{t:this.text},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Capa_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,204,0,0.6)").s().p("AtvFbIAAq1IbfAAIAAK1g");
	this.shape_5.setTransform(153.05,65.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.desempeoalto3mod3, new cjs.Rectangle(36.7,-30.2,432.40000000000003,140), null);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,151.9,152);


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
	this.text = new cjs.Text("(*) Esta información es calculada por el equipo de Capital Humano y se refleja directamente en el sistema SuccessFactors.\n", "16px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 374;
	this.text.parent = this;
	this.text.setTransform(35.1,220.55);

	this.text_1 = new cjs.Text("Desempeño*:", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 573;
	this.text_1.parent = this;
	this.text_1.setTransform(35.1,91.15);

	this.text_2 = new cjs.Text("Se define como el cumplimiento de objetivos y principios culturales (comportamientos esperados) en las que el colaborador contribuye a la organización y al equipo.\n", "18px 'Arial'", "#333333");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 374;
	this.text_2.parent = this;
	this.text_2.setTransform(35.1,124.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("A+lXhQhoAAhKhJQhIhJgBhoMAAAgnNQABhoBIhJQBKhJBoAAMA9LAAAQBoAABJBJQBKBJAABoMAAAAnNQAABohKBJQhJBJhoAAg");
	this.shape.setTransform(220.85,147.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,610.2,323.1);


(lib.cajagdemc1t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("¿Cómo valorar el desempeño de nuestros colaboradores?", "bold 22px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 331;
	this.text.parent = this;
	this.text.setTransform(246.6,46.15);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Aq7MkIAA5HMA/zAAAQBnAABJBJQBJBKAABnIAARTQAABnhJBJQhJBKhnAAgEg02AMkQhoAAhKhKQhIhJgBhnIAAxTQABhnBIhKQBKhJBoAAMAp7AAAIAAZHg");
	this.shape.setTransform(363.35,80.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AlPjNIKfAAIlQGbg");
	this.shape_1.setTransform(244.4,165.45,1,1,0,0,0,5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,726.7,186.1);


(lib.barrabcdespliega = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg9tAGuIAAtbMB7bAAAIAANbg");
	this.shape.setTransform(394.975,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790,86);


(lib.AS_LG_153ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3314,37.2681,1.1113,1.1113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.7774,59.2439,0.2769,0.3563);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.7774,55.7169,0.2769,0.3563);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.2875,50.3356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,21.8,49.8,54.400000000000006);


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
	this.instance.setTransform(-0.65,-226.55,1,1,0,0,0,303.1,17);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({alpha:0},12,cjs.Ease.get(1)).wait(1));

	// TITULO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgLgKAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(-293.7,-229.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.775,-230.1);

	this.text = new cjs.Text("Identificación del Desempeño", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282.05,-241.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulot2mod3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.15,32.8,1,1,0,0,0,94.9,73.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(51).to({startPosition:0},0).to({regX:95,regY:73.6,scaleX:0.0421,scaleY:0.0421,x:153.2},15,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// circulo bco
	this.instance_2 = new lib.circulo_blanco("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,20.1,0.2397,0.2397,0,0,0,1.2,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:2,scaleY:2,x:149.3,alpha:1},10,cjs.Ease.get(1)).wait(62).to({startPosition:0},0).to({scaleX:11.1008,scaleY:11.1008,x:180.3,y:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// circulo rojo
	this.instance_3 = new lib.CirculoRojo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.4,0,0.0329,0.0329);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:2,scaleY:2,y:20},9,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:9.8803,scaleY:9.8788,x:200.95,y:-22.2},11,cjs.Ease.get(1)).to({_off:true},5).wait(12));

	// Layer 6
	this.instance_4 = new lib.numerodetema("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(98.1,-13.6,1,1,0,0,0,69.8,69.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({x:-40.1,y:-113.6},9,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({x:98.1,y:-13.6},12,cjs.Ease.get(1)).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550.4,-771,1501.3,1501.6);


(lib.M03_TMR_DESEMPEÑO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgJAmIgLhBQgBgIAIgCQAIgCADAHIASAxQADAHACAOg");
	this.shape.setTransform(93.3444,109.8528);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgMAAIAFgIIAUALIgMAGQgMgDgBgGg");
	this.shape_1.setTransform(100.275,104.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AgMAFIAVgPIAEAKQAAAFgPAGg");
	this.shape_2.setTransform(102.875,104.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#744C28").s().p("AAmANQgBgIgNAAQgRACgHgBQgKAAgJgGIgGgHQgEAOgDACIgDALIgCAJIgIgNQADgJgCgHQgBgDABgFQAAgGACgBIAAgBQAAgBAMgFQAPgGANgCQANgBASAKQAQAKABAIQAAAHgBAKQgCAKgCABIgDADIgCADQADgGgBgMg");
	this.shape_3.setTransform(101.7313,94.6955);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AANAuQgHgQAAgDQAAgEgCAXIgxAAIAAhPIAJgIQALgGAMAEIAMABQANADAFAEQAIAEAVBNg");
	this.shape_4.setTransform(105.6,109.0488);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgDAuQgCgXgBAEQABADgHAQIgiAAQAGgdAJgZQAKgYAEgDQAKgHAVgBQAMgEAKAGQAGAEADAEIACBPg");
	this.shape_5.setTransform(97.45,109.0488);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9BD9C").s().p("AgHAzIAAgBQgRgIgJgPIgBgBIgBgJIgDgBIAAgBQgBAAgBgGIgBgJIAAAAQgBgHABAAIAAgBQABAAAAAAQABAAAAAAQABABAAAAQABABAAABIABABIAAgCIgBgMQAAgQAIgEQAAgBAJgGQAKgGAKAAIACAAQAQAAANANIAAAAQAIAEAAAQQAAAGgBAGIABABIAAgCIADgBQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIgCAOIgCAGIAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAJQgGALgMAIIgKAGIgHABIgHgBg");
	this.shape_6.setTransform(101.73,98.0857);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDAB86").s().p("AgZATQAMgaAAgIQABgFAMACIANADIACAKQADAKAGAGQAJAJghAAIgZgBg");
	this.shape_7.setTransform(101.6084,103.2471);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AAAATIgFgOQgRgKAFgPQADgGAJgDQABAAgCgHIAAgCQgCgFABgCQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQADAAABAEIATBVIgMAGQgDgOgEgPg");
	this.shape_8.setTransform(91.6828,105.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9D9D9E").s().p("ABMDiQhTgZh1gqIAikTIAThtIDFAkIgrGfg");
	this.shape_9.setTransform(67.7,194.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhNgLIAAgOICbAdIgGAWg");
	this.shape_10.setTransform(71.825,173.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDB17B").s().p("AhMBTQgUgEgKgSQgKgQAEgTQAFgTAQgJIAAgBIAYgNQAKgFADgBIAPgEQAUgFAOgFIAHgDIABgBIADgBIADgCIAdgNIAkgWQAIgGAKAAQAJABAHAIQAHAHgBAKQgBAKgIAHIgGAEIgHADQgEACgNAJIgkAbIgDADIgCABIgBABIgHAGQgHAGgQAUIgJAMIgbAVIgHAEQgLAHgNAAQgGAAgGgCg");
	this.shape_11.setTransform(86.2745,164.5789);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDB17B").s().p("AhPAnIAnh1IB4AoIgnB1g");
	this.shape_12.setTransform(70.975,176.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDB17B").s().p("AAABrIg/gWQgXgHgDgRQgEgPAMgdQAHgRAdgrIAcgpIAPgPQAUgOAbAJQAuAPAAA6QABAQgGAcQgIAkgMAQQgTAbgJAHQgMAKgNAAQgGAAgHgCg");
	this.shape_13.setTransform(75.6861,162.848);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9D9D9E").s().p("Ah8gqIghhDIhfi0ICthlIBnC8IAjBGIBKCXIAkBOIBUDCIgWANQhfA3hJAgg");
	this.shape_14.setTransform(151.5375,173.7375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhIAjICOhQIADAMIiMBQg");
	this.shape_15.setTransform(134.7,139.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDB17B").s().p("AATCOQgJgEgVgVQgOgMgWglQgTgegGgNQgEgLgCgJIhNh7QgEgGABgHQABgHAFgEQAGgFAIABQAHABAFAFIBHBTQABABAAAAQABABAAAAQABAAAAAAQABAAABAAQADgBABgCQADgIAPgGQAwgSAmAKQASAEAaASQAVAPAPAvIABAEIAJASQAMAbgBAOQgBARgSAKIhWAwQgJAFgJAAQgIAAgJgFg");
	this.shape_16.setTransform(124.8927,127.2542);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDB17B").s().p("AhZgOIB8hFIA3BhIh8BGg");
	this.shape_17.setTransform(136.775,142.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E39A9B").s().p("Ag3A8IAAh3IBvAAIAAB3g");
	this.shape_18.setTransform(140.7,163.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E39A9B").s().p("Ag3A8IAAh3IBvAAIAAB3g");
	this.shape_19.setTransform(127.975,163.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E39A9B").s().p("Ag3A8IAAh3IBvAAIAAB3g");
	this.shape_20.setTransform(115.225,163.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AhfA8IAAh4IC/AAIAAB4g");
	this.shape_21.setTransform(98.45,163.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AkeANIAAgZII9AAIAAAZg");
	this.shape_22.setTransform(117.575,153.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AkeANIAAgZII9AAIAAAZg");
	this.shape_23.setTransform(117.575,149.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A6CDDA").s().p("AkcAWIAAgrII5AAIAAArg");
	this.shape_24.setTransform(117.4,142.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AkeANIAAgZII9AAIAAAZg");
	this.shape_25.setTransform(117.575,135.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AkeAMIAAgYII9AAIAAAYg");
	this.shape_26.setTransform(117.575,130.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A6CDDA").s().p("AkcAWIAAgrII5AAIAAArg");
	this.shape_27.setTransform(117.4,124.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AkeAMIAAgYII9AAIAAAYg");
	this.shape_28.setTransform(117.6,117.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AiaAMIAAgXIE1AAIAAAXg");
	this.shape_29.setTransform(130.775,112.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A6CDDA").s().p("AiZAWIAAgqIEzAAIAAAqg");
	this.shape_30.setTransform(130.65,106.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5A6E75").s().p("Ah3AGIAAgLIDvAAIAAALg");
	this.shape_31.setTransform(127.275,94.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E39A9B").s().p("Ag3AKIAAgTIBvAAIAAATg");
	this.shape_32.setTransform(120.825,97.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E6E6").s().p("Ah3AQIAAgfIDvAAIAAAfg");
	this.shape_33.setTransform(127.275,91.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEAFIACAAQAAAFACAAQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBQAAgCgDgCIgCgDQAAAAgBgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgFAEAAQAEAAABAFIAAABIgCAAIAAAAQAAgBAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAABQAAAAAAABIACADIACADQADACAAADQAAAFgFAAQgEgBAAgFg");
	this.shape_34.setTransform(117.475,148.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEAKIAAgTIAEAAQAFAAAAAGIAAAHQAAAGgFAAgAgCAJIACAAQADAAAAgEIAAgJQAAgEgDAAIgCAAg");
	this.shape_35.setTransform(116.25,148.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AADAKIgDgKIgCAAIAAAKIgCAAIAAgTIAEAAQAEAAAAAFQAAAEgCAAIADAKgAgCAAIACAAQABAAABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAgBAAIgCAAg");
	this.shape_36.setTransform(115,148.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AADAKIgBgFIgDAAIgBAFIgCAAIAEgTIABAAIAEATgAACAEIgCgLIgBALIADAAg");
	this.shape_37.setTransform(113.725,148.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AADAKIgDgRIgCARIgCAAIgDgTIACAAIACAQIADgQIABAAIADAQIACgQIACAAIgEATg");
	this.shape_38.setTransform(112.35,148.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAEAKIgBgFIgEAAIgBAFIgCAAIAEgTIABAAIAEATgAACAEIgCgLIgBALIADAAg");
	this.shape_39.setTransform(110.925,148.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhxB6IAAj0IDjAAIAAD0g");
	this.shape_40.setTransform(100.3,101.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1FB4FB").s().p("Ak4AEIAAgHIJxAAIAAAHg");
	this.shape_41.setTransform(117.5,172.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#515D60").s().p("Ak4BIIAAiPIJxAAIAACPg");
	this.shape_42.setTransform(117.5,93.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ak4GwIAAteIJxAAIAANeg");
	this.shape_43.setTransform(117.5,129.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDB17B").s().p("AgJgDIATAFIgKACg");
	this.shape_44.setTransform(86.275,155.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDB17B").s().p("ABGAxIg+gzIAKgBIgTgGIAJAHIhSALQgMABgJgHQgKgGgBgMQgCgLAHgKQAHgJAMgBIACgBIBdgGIABAAQAKgBAIAGIBEA/QAHAHAAAJQABAKgHAGQgGAHgJAAIgBABQgIAAgHgGg");
	this.shape_45.setTransform(85.4636,156.1503);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5A064").s().p("ABIBHQgJAAgGgGIg6g9IAFACIgKgGIAFAEIhJgSQgLgEgGgKQgGgKADgLQADgLAKgGQALgGALADIACABIBMAaIACABQAFACAEAFIA8BEQAGAHAAAKQgBAJgHAGQgGAFgIAAIgCAAg");
	this.shape_46.setTransform(85.1269,158.3769);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F5A064").s().p("AAAACIgFgEIALAFg");
	this.shape_47.setTransform(84.975,158.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D78C57").s().p("ABDBCQgHgBgEgGIgBAAIgRgVIgmgsIgLgKIADgBIAGgEIADgEIgDADQgEACgEAAIgEgBIgBAAIgBAAIgBAAIABAAIAFAEIAAABIgLACQgGABgNgBQgKgCgNgDIgIgDQgJgDgEgJQgEgIAEgJQADgIAJgEQAIgEAJAEIAGACIAQAFIAIABIABAAIAEgDQAEgDAFAAIAHABIAFACIAIAFIAHAHIANANQALANAcAjIARAWQAFAGgBAIQgCAHgGAFQgEADgGAAIgDAAg");
	this.shape_48.setTransform(81.6774,160.8283);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D78C57").s().p("AgDAEIgEgEIgCAAIACAAIAAAAIACAAIADABQAEgBADgBIAFgDIgFAEIgFAEIgDAAg");
	this.shape_49.setTransform(80.85,158.65);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTATQgHgIgBgLQABgKAHgIQAJgIAKAAQAMAAAHAIQAIAIAAAKQAAALgIAIQgHAIgMAAQgKAAgJgIg");
	this.shape_50.setTransform(120.25,173.675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#94B9C3").s().p("AioCYIAAkvIFRAAIAAEvg");
	this.shape_51.setTransform(142.475,147.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DFE4E6").s().p("AhmCYIAAkvIDNAAIAAEvg");
	this.shape_52.setTransform(112.575,147.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#94B9C3").s().p("AhmCYIAAkvIDNAAIAAEvg");
	this.shape_53.setTransform(89.3,147.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A6CDDA").s().p("AmRA9IAAh5IMjAAIAAB5g");
	this.shape_54.setTransform(119.2,123.675);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DBDBDB").s().p("AjZA8IAAh3IGzAAIAAA7QAAAZgTASQgUARgbAAg");
	this.shape_55.setTransform(142.05,174.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DBDBDB").s().p("AilA8QgbAAgTgRQgUgSAAgZIAAg7IHPAAIAAB3g");
	this.shape_56.setTransform(97.05,174.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BDEBF8").s().p("AmmEHIAAoNINOAAIAAINg");
	this.shape_57.setTransform(118.85,139.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#969696").s().p("AiqAUIAAgmIFVAAIAAAmg");
	this.shape_58.setTransform(120.225,188.55);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C7C7C7").s().p("AiqA+IBdh7ICbAAIBdB7g");
	this.shape_59.setTransform(120.225,180.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AnBEhIAApBIODAAIAAJBg");
	this.shape_60.setTransform(118.85,139.225);

	this.instance = new lib.Path_15();
	this.instance.parent = this;
	this.instance.setTransform(110,187.45,1,1,0,0,0,47.2,3.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("Ag0C/IgzlJQgDgRAKgPQAKgOASgEQAQgEAPAHQAPAHAGAPIBfD6QAFANAHAaQAKAjAEAeg");
	this.shape_61.setTransform(73.6417,96.4917);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D4D4D").s().p("AgbAiQgigQgDgSIAYguIBpA9Ig8AgQgPgFgRgIg");
	this.shape_62.setTransform(108.525,71.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D4D4D").s().p("AhCAWIBthLIAXAuQgCASgpAYIgnATg");
	this.shape_63.setTransform(121.65,70.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#744C28").s().p("AC9CDQAGgggGglQgFglhCAAQhUAHgmgBQgygCgsgjIgigkQgUBMgLAIQgHAGgKAxIgJAwIgVgfQgVgfACgGQAMgugHgeQgFgVACgYQABgeALgJIABgCQgEgHBAgaQBJgfBCgFQBIgGBXAyQBUAwACAoQACAogHAyQgHA0gKACQgJABgJARIgIAQQAEgJADgQg");
	this.shape_64.setTransform(115.8242,20.3181);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CCCCCC").s().p("AA/DoQghhUgBgLQgBgNgDAfQgEAdgDAwIj4AAQgBiBACiWIACh+IALgNQAOgOARgKQA2ghA7AUIA+AIQBCAMAgAUQAhAWBvGJg");
	this.shape_65.setTransform(135.3333,92.3822);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCCCCC").s().p("AgUDoQgJh/gCAgQgBAUgdBLIixAAQAiiWAvh/QAsh7AXgPQAggUBDgMQAigGAbgCQA7gUA2AhQAbAQAPAVIAGB+QAFCWADCBg");
	this.shape_66.setTransform(94.275,92.3822);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F9BD9C").s().p("AglD/IgDgBQgugZgrgqQgYgZgSgZIgCgHIgFgrIgBAAQgGgBgFgEIgEgEIAAgBQgDgDgGgfIgHgrIgBgEQgGgiAIgEIABAAQAHgDANAPIAFAFIgCgHQgHgeAAgjQAAhNApgUIABgBIAsghQA2ghA0ACIAAAAIAFAAIAAAAIAGAAQAxAAA1AgQAaAQARAQIAAABQApATAABOQAAAjgHAeIAEABQABgFAEgDQAIgHADACQAFADAAANQAAAKgEASIgGAsQgGAdgDAFIAAAAIgFAFQgEADgGABIgCAAIgBAkIgCAGQggA4g6AoIg0AeQgPAFgTAAQgRAAgUgFg");
	this.shape_67.setTransform(115.7964,37.2193);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EDAB86").s().p("AiBBgQA8iHACgpQACgXBCAJQAiAFAiAJIAJAzQAPA4AeAeQAkAjiNAGg");
	this.shape_68.setTransform(115.182,63.1383);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F9BD9C").s().p("AgIBdIgXhDIAAAAQgvgfgMgnQgLgfAMgeQAJgUAXgNQAMgGAPgFQAGgEgLgiIgCgIQgJgWAIgPQAFgKAJABQANADAGAPIBlGxIhAAgQgQhGgYhPg");
	this.shape_69.setTransform(65.43,76.4652);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1C140B").s().p("AgFAAQAAgGACgGQACgEABAAQAGAAAAAQQAAARgGAAQgFAAAAgRg");
	this.shape_70.setTransform(52.875,51.55);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#927954").s().p("AgHAZQgDgLAAgOQAAgNADgLQADgKAEAAQAFAAADAKQADALAAANQAAAOgDALQgDAKgFAAQgEAAgDgKg");
	this.shape_71.setTransform(52.875,51.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1C140B").s().p("AgFAAQABgGABgGQACgEABAAQAGAAgBAQQABARgGAAQgEAAgBgRg");
	this.shape_72.setTransform(16.35,51.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#927954").s().p("AgHAZQgDgLAAgOQAAgNADgLQADgKAEAAQAFAAADAKQADALAAANQAAAOgDALQgDAKgFAAQgEAAgDgKg");
	this.shape_73.setTransform(16.35,51.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1C140B").s().p("AkuDhQgWgWAAgeQAAgdAUgVQgOgJgJgOQgIgPAAgRQAAgfAXgTQgHgLAAgNQAAgPAJgMQAJgMAOgFQgDgKAAgLQAAgfAWgWQAVgWAfAAIAFAAQAHgTARgLQARgMAUAAQAQAAAPAIQAGgZAUgQQAUgQAaAAQAVAAARAKQARgSAbAAQAhAAAUAbIAHAAQAPAAAKAKQALAKABAOQAMgEANAAQAiAAAZAYQAYAYAAAjIAAABIALgBQAbAAATATQAUATAAAcQAAAUgLAPQAWAWAAAdQAAAigaAWQAQALAJAQQAJARAAATQAAAfgWAWQgVAVgfAAQgXAAgTgNQgTgMgIgVQgSgEgLgOQgLgOAAgSIAAgIQgKACgJAAQgjAAgZgZQgZgYAAgkIAAgHQgKAFgOAAQgTAAgPgMQgQgMgFgSIgCAAQgSAAgNgKQgNgLgEgRIgEgCIABAHQAAAQgIANQgIANgNAIQAKASAAASQAAAZgPATQgQASgXAGQACAGAAAIQAAAMgGALQgHAKgLAFQgEAbgUATQgVASgbAAQgfAAgVgVg");
	this.shape_74.setTransform(33.625,24.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A25F37").s().p("AgKgbQAKgRAJACQAFABADAEQAEAigTAaIgTAUg");
	this.shape_75.setTransform(53.2181,46.4689);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A25F37").s().p("AgBAXQgTgaAEgiIAIgFQAJgCAKARIAHBGQgLgGgIgOg");
	this.shape_76.setTransform(15.2319,46.4689);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A25F37").s().p("Ag+D5QhGgtgnhUQgLgGgJgNQgUgbAFgjIAIgFQALgBAJARQgOgngGgwQgMhhAngwIApgsQA2gtBCgHIAUAAQBDAHA3AtQAbAXANAVQAoAwgNBhQgHAwgOAnQAKgRALABQAFABADAEQAFAjgUAbIgUATQgnBUhHAtQgVAPgYAJIgRAGQgbgHgjgXg");
	this.shape_77.setTransform(34.3,38.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1C140B").s().p("AgHB+QgOgJgKgOQgGADgEAAQgPAAgLgMQgLgKAAgQIABgIIgNABQgZAAgSgSQgTgSAAgZQAAgTAKgPQAKgPARgHQgPgOAAgTQAAgSANgNQAMgNASAAQAYAAANATQAOgFAQAAQAggBAXAXQAWAXAAAgQAAAXgMATQAcAGAOAbQAKgEAIAAQAUAAANAOQAOAOAAAUQAAATgOAOQgNAOgUABQgRgBgNgKQgVAUgcAAQgSAAgPgIg");
	this.shape_78.setTransform(18.35,52.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#1C140B").s().p("AhzBZQgPgPAAgUQAAgVAPgPQAPgPAVAAIAAAAQAAgUAPgPQAOgOAVgBQADgWARgPQARgPAWAAQASAAAPAJQAMgNARAAQAQAAALALQALAMAAAQQAAAQgLALQgLAMgQAAIgBgBQgEASgNAMQgMAOgSAEIAAAEQAAAagSASQgSASgZAAQgLAAgKgEQgRAUgYAAQgVAAgPgPg");
	this.shape_79.setTransform(51.1,55.775);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9D9D9E").s().p("AgiBcIgpg6QgHgTAFgYQAJgzA2gfIAfA8QAlBGAaA1g");
	this.shape_80.setTransform(53.808,87.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9D9D9E").s().p("Ag3BeQAFhhAPg3IANgjIBOA9IgUB+g");
	this.shape_81.setTransform(17.425,86.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgugZIAsgQIAxAsIgkAng");
	this.shape_82.setTransform(29.1,75.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AguAEIAzgvIAqAQIg6BHg");
	this.shape_83.setTransform(38.45,75.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCBCB").s().p("AALAfIg3g9IAggLIA5AnIgeAsg");
	this.shape_84.setTransform(29.275,76.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CCCBCB").s().p("AgqAAIA8gnIAZALIg3A2IgEAOg");
	this.shape_85.setTransform(38.1,76.35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#9F5733").s().p("AhVAMIAkgQQAHgGACgFQAFgNgDgtIBLgCIgBAeQgBAfADAGIAHADIAoAQIg+A7IgcgaIgBAAIgBAAIghAgg");
	this.shape_86.setTransform(34.45,72);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgngFIgthAIBSghIBXAfIg9A8IgdByg");
	this.shape_87.setTransform(34.375,80.225);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#626568").s().p("AgNCDIhDh2IAfgOIgzgMIgphFICNgwICOA0IhDBNIgpgBIAaATIg3Byg");
	this.shape_88.setTransform(34.55,83.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#606060").s().p("AgMCBIhHhxIAhgQIg3gKIgqhCQAPgEAJgFIA3gUIAFgCIBCgVIA3ATIAJAEIBRAlIhABEIgtAAIAcATIg8Bug");
	this.shape_89.setTransform(34.425,83.45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#9D9D9E").s().p("AiKCDQgHgOgBgHQgEgSADgTIAJglQADgPgKgRIgRgbQgVgjgCABQAMgFAWgIQAZgIAKgFIA2gUIBKgbIA+AbIA3AaQAiAPAXAKIgNAPQgIALgFAMQgEANACAJIAEALQAUAygTArQgDAHgHAMg");
	this.shape_90.setTransform(33.75,83.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3F3231").s().p("AjaChIgQgFQgDABgEgNQgKgcgLhKQgGgiAPgcQALgWAVgRQgCgeAKgaQAQgmApgSQgFAGgGALQgMAUgEAQQAAAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAYgeAugVQBIgiBogCQgmAFgbAQQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABADADAAQAsgGArAFQBCAGAqAbQgMgCgRABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAQAhAOAXAWQAlAkAAAyQgNgQgKgKQAAAAAAAAQAAgBgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAPAmgLAoQgCgKgMgNQgCA9gRBQQgSgCgMAUIgJAUQACgcgCgiQgDhCgSgbQgthFh9ACQgoABgqAHIgjAIQgXA3geAgQgCAKgDA+IgDA8QgDghgQgKg");
	this.shape_91.setTransform(190.0012,25.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3F3231").s().p("AA4AlQgKgCgIgGQgLgJAAgOIAAgDQgJgIgMABIgDAAQgLgBgKAIIAAADQABAOgLAJQgJAGgKACIhdAAIgDgBQgOgGgHgKQgFgIAAgHIAAgGIgbADIgEgSIAhgEQAHgMAVgEIBWAAQAYAAAKARQAMgFALABQAMgBANAFQADgGAIgFQAJgGANAAIBXAAQAUAEAIAMIAYACIgDAMIgUAFIAAAGQABAHgGAIQgGAKgPAGIgCABgAApgSIAAAcIACAGQADAHAIAFIBjAAQALgDAAgOIAAgcQgCgIgLAAIhjAAQgLADAAAEgAibgSIAAAcIACAGQADAHAIAFIBjAAQALgDAAgOIAAgcQgCgIgLAAIhjAAQgLACAAAFg");
	this.shape_92.setTransform(188.1,41.025);

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.3,87.35,1,1,0,0,0,2.5,6.2);
	this.instance_1.alpha = 0.3906;

	this.instance_2 = new lib.Group_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(218.6,90.05,1,1,0,0,0,1.5,3.8);
	this.instance_2.alpha = 0.3906;

	this.instance_3 = new lib.Group_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(218.4,86.8,1,1,0,0,0,3.4,7.2);
	this.instance_3.alpha = 0.3906;

	this.instance_4 = new lib.Group_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(161.25,86.8,1,1,0,0,0,3.2,7.2);
	this.instance_4.alpha = 0.3906;

	this.instance_5 = new lib.Group_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(159.7,88.8,1,1,0,0,0,1.8,5);
	this.instance_5.alpha = 0.3906;

	this.instance_6 = new lib.Group_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(157,87.15,1,1,0,0,0,2.4,6.7);
	this.instance_6.alpha = 0.3906;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A9B3BC").s().p("AhEAQIBwhBIAZAxQgDATgkARIgiAOg");
	this.shape_93.setTransform(196.275,77.175);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A9B3BC").s().p("AgYAlQgrgZgDgTIAZgyIBzBQIg1AiQgTgIgWgMg");
	this.shape_94.setTransform(182.35,76.4);

	this.instance_7 = new lib.Group_6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(192.65,86,1,1,0,0,0,0.8,7.9);
	this.instance_7.alpha = 0.3906;

	this.instance_8 = new lib.Group_7();
	this.instance_8.parent = this;
	this.instance_8.setTransform(197.7,85.7,1,1,0,0,0,0.8,8.2);
	this.instance_8.alpha = 0.3906;

	this.instance_9 = new lib.Group_8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(201.9,85.35,1,1,0,0,0,0.8,8.3);
	this.instance_9.alpha = 0.3906;

	this.instance_10 = new lib.Group_9();
	this.instance_10.parent = this;
	this.instance_10.setTransform(214.15,85.7,1,1,0,0,0,0.8,8);
	this.instance_10.alpha = 0.3906;

	this.instance_11 = new lib.Group_10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(210.65,85.15,1,1,0,0,0,0.8,8.6);
	this.instance_11.alpha = 0.3906;

	this.instance_12 = new lib.Group_11();
	this.instance_12.parent = this;
	this.instance_12.setTransform(205.6,84.75,1,1,0,0,0,0.8,8.8);
	this.instance_12.alpha = 0.3906;

	this.instance_13 = new lib.Group_12();
	this.instance_13.parent = this;
	this.instance_13.setTransform(187,86,1,1,0,0,0,0.7,7.9);
	this.instance_13.alpha = 0.3906;

	this.instance_14 = new lib.Group_13();
	this.instance_14.parent = this;
	this.instance_14.setTransform(182.05,85.7,1,1,0,0,0,0.8,8.2);
	this.instance_14.alpha = 0.3906;

	this.instance_15 = new lib.Group_14();
	this.instance_15.parent = this;
	this.instance_15.setTransform(177.8,85.35,1,1,0,0,0,0.8,8.3);
	this.instance_15.alpha = 0.3906;

	this.instance_16 = new lib.Group_15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(165.5,85.7,1,1,0,0,0,0.8,8);
	this.instance_16.alpha = 0.3906;

	this.instance_17 = new lib.Group_16();
	this.instance_17.parent = this;
	this.instance_17.setTransform(169,85.15,1,1,0,0,0,0.8,8.6);
	this.instance_17.alpha = 0.3906;

	this.instance_18 = new lib.Group_17();
	this.instance_18.parent = this;
	this.instance_18.setTransform(174.05,84.75,1,1,0,0,0,0.8,8.8);
	this.instance_18.alpha = 0.3906;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BBCACB").s().p("AjLBtQAyiZAUgNQAigWBIgNQAjgGAdgCQA/gVA5AjQAdARAQAWIACCcg");
	this.shape_95.setTransform(171.825,85.6659);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CCD0D0").s().p("AjSBtIAHicIALgNQAQgPASgLQA5gjA/AVIBAAIQBIANAiAWQAMAIAWAtQAUArAZBGg");
	this.shape_96.setTransform(207.875,85.6659);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E8AF93").s().p("AAcAAQgGgDgHAAIgMgBIgZAEQgPACgMAFQALgHAOgFQAKgDAQgCIAPABQAGABAIADQAOAGAEAKQgIgIgNgDg");
	this.shape_97.setTransform(178.6,39.025);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E1BB93").s().p("AgjEOQgYgJgfgWQg9gqgjg8QgCgCAAgEIgBgnIgCAAQgLAAgEgJIgBAAQgDgFgGggIgHguQgEgSAAgMQAAgPAFgBQAEgCAJAHQAEAEAAAEIAEgBQgHggAAglQAAhSArgVIABgBIAugiQA3giA1AAIAMAAQA2gCA6AiQAdASASASIABABQArAVAABSQAAAlgHAgIgCAHIAGgFIAJgJQAIgFAEACIAAAAQAJAEgHAkIgIAyQgGAggDAEIgBABQgFAJgKAAIgCAAIgFAuQAAAEgCADQgSAagbAbQgtAugxAaIgDABQgWAFgTAAQgTAAgQgGg");
	this.shape_98.setTransform(188.5408,40.7759);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D6AE89").s().p("AgSBnQiWgFAmglQAhghAPg7IAKg2IBIgPQBHgLABAaQABAbAhBSIAhBNQg2ADgxAAIg2gBg");
	this.shape_99.setTransform(189.2,68.3165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_94},{t:this.shape_93},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_DESEMPEÑO, new cjs.Rectangle(0,0,229,217.1), null);


(lib.estrategia1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M03_TMR_DESEMPEÑO();
	this.instance.parent = this;
	this.instance.setTransform(95.6,110.45,0.5568,0.5568,0,0,0,115.5,109.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D9B2").s().p("AgCAWIgEgDIgFAAIgDADIgGgFIADgDIAAgFIgBgBIgDgDIgEAAIgBgHIAFAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBIAAAAIAAgFIgDgDIAFgGIADADIAFAAIABgBQAAAAABAAQABgBAAAAQABgBAAAAQAAAAAAgBIAAgEIAHgBIAAAFIADADIABAAIAAAAQABAAABABQABAAAAAAQABAAAAAAQABgBAAAAIADgDIAGAFIgDADIAAAFIABABQAAABABAAQAAABAAAAQABABAAAAQAAAAABAAIAEAAIABAHIgFAAIgDADIAAACQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIADADIgFAGIgEgDIgEAAIgEAEIAAAEIgHABgAgIgHQgDAEAAADQAAAFAEAEQAEADADAAQAFAAAEgEQADgEAAgEQAAgEgEgEQgEgDgEAAQgEAAgEAEg");
	this.shape.setTransform(128.268,55.0298,0.9111,0.9111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D9B2").s().p("AAIAqQgCgCgGAAQgEgBgDACIgDABIgDAIIgOgHIAEgHQAAgDgDgFIgCgCQgDgDgDAAIgCgBIgJADIgFgOIAIgEQADgBAAgGIAAAAIABgBQAAgEgCgDIgBgCIgIgEIAGgOIAIAEIADgBQADAAADgDIABgBQAEgFAAgDIgDgIIAOgFIADAIIACACIAFABIACAAQAGAAADgCIAEgIIANAGIgDAIIAAADQABADADACIABABQAEAFADAAIAJgEIAFAOIgIADIgCADIgBAFIgBADQABAGACACIAIAEIgGANIgIgEQgEABgEADQgEADgBADIgBADIAEAIIgPAGgAgHgVQgJADgEAJQgEAJADAIQAEAJAIAEQAJAEAIgDQAJgEAEgJQAEgIgDgJQgDgJgJgDQgFgDgFAAIgHACg");
	this.shape_1.setTransform(122.9835,59.6993,0.9111,0.9111);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFE5DF").s().p("AlaM0QifhEh7h7Qh7h7hEifQhGimAAi1QAAi0BGilQBEigB7h8QB7h6CfhEQCmhGC0AAQC1AAClBGQCgBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7igBEQilBGi1AAQi0AAimhGg");
	this.shape_2.setTransform(91.5499,91.2695,0.9111,0.9111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AljNKQikhGh+h+Qh/h+hFikQhIiqAAi6QAAi5BIiqQBFikB/h+QB+h/CkhFQCqhIC5AAQC6AACqBIQCjBFCAB/QB9B+BGCkQBICqAAC5QAAC6hICqQhGCkh9B+QiAB+ijBGQiqBIi6AAQi5AAiqhIg");
	this.shape_3.setTransform(91.4,91.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,182.8);


(lib.estrategiadenegocio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.estrategia1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(179.9,179.9,1.9685,1.9685,0,0,0,91.4,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359.9,359.8);


(lib.AS_LG_MOV_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape.setTransform(28.5,31.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.318)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_1.setTransform(28.5,31.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.337)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_2.setTransform(28.5,31.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.357)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_3.setTransform(28.5,31.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.38)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_4.setTransform(28.5,31.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.4)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_5.setTransform(28.5,31.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.42)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_6.setTransform(28.5,31.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.439)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_7.setTransform(28.5,31.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.459)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_8.setTransform(28.5,31.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_9.setTransform(28.5,31.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.498)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_10.setTransform(28.5,31.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.518)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_11.setTransform(28.5,31.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.541)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_12.setTransform(28.5,31.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.561)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_13.setTransform(28.5,31.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.58)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_14.setTransform(28.5,31.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.6)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_15.setTransform(28.5,31.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.573)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_16.setTransform(28.5,31.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.545)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_17.setTransform(28.5,31.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.49)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_18.setTransform(28.5,31.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.431)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_19.setTransform(28.5,31.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.404)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_20.setTransform(28.5,31.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.376)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_21.setTransform(28.5,31.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.349)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_22.setTransform(28.5,31.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.322)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_23.setTransform(28.5,31.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.294)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_24.setTransform(28.5,31.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.267)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_25.setTransform(28.5,31.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_26.setTransform(28.5,31.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.208)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_27.setTransform(28.5,31.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_28.setTransform(28.5,31.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.153)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_29.setTransform(28.5,31.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.125)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_30.setTransform(28.5,31.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.098)").s().p("AieF5QhJgfg5g5Qg5g5gfhJQgghMAAhTQAAhTAghMQAfhJA5g4QA5g5BJgfQBMggBSAAQBTAABNAgQBIAfA5A5QA5A4AfBJQAgBMAABTQAABTggBMQgfBJg5A5Qg5A5hIAfQhNAghTAAQhSAAhMggg");
	this.shape_31.setTransform(28.5,31.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(12));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKggg4g4Qg4g4gghKQgghMAAhTQAAhTAghMQAghJA4g5QA4g4BKgfQBMggBSAAQBUAABLAgQBKAfA5A4QA4A5AfBJQAgBMAABTQAABTggBMQgfBKg4A4Qg5A4hKAgQhLAghUAAQhSAAhMggg");
	this.shape_32.setTransform(28.9,32.55);

	this.instance = new lib.AS_LG_153ss("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.85,14.3,1,1,0,0,0,23.9,23.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_33.setTransform(28.775,32.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_34.setTransform(28.9064,32.5377,0.3846,0.3846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.instance},{t:this.shape_32}]}).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-9.3,82.2,82.8);


(lib.Mod3T3mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_159 = function() {
		this.stop();
		parent.siguiente_naranja();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(159).call(this.frame_159).wait(1));

	// Layer 2
	this.instance = new lib.estrategiadenegocio("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(858.05,-46.9,0.9215,0.9215,56.9449,0,0,165,136.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({rotation:0,x:658.2,y:-47,alpha:1},14,cjs.Ease.get(1)).wait(44));

	// caja larga
	this.instance_1 = new lib.cajagdemc1t2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.45,-75.35,0.4537,1,0,0,0,363.4,93);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116).to({_off:false},0).to({scaleX:1,x:363.45,alpha:1},15,cjs.Ease.get(1)).wait(29));

	// caja gris
	this.instance_2 = new lib.cajagrismc1t2m2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).to({y:79.6,alpha:1},15,cjs.Ease.get(1)).wait(13));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgxAAhHQAAhGAwgxQAwgyBEAAQBFAAAwAyQAwAxAABGQAABHgwAxQgwAyhFAAQhEAAgwgyg");
	this.shape.setTransform(-191.3,293.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,-179.5,1205.9,489.9);


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
	this.instance.setTransform(-67.2,-28.75,1,1,0,0,0,30,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-421.05},28,cjs.Ease.get(1)).wait(4));

	// Layer 3
	this.instance_1 = new lib.barrabcdespliega("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-231.2,-27.25,0.4784,1,0,0,0,394.9,43);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.0182,x:-466.4},26,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_2 = new lib.info01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-25.35,alpha:1},28,cjs.Ease.get(1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.6,-70.2,483.3,124.7);


(lib.Mod3t2mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_114 = function() {
		this.stop();
		parent.siguiente_verde();
		parent.final_tema();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(1));

	// TIP
	this.info = new lib.mc_inFOtmr();
	this.info.name = "info";
	this.info.parent = this;
	this.info.setTransform(889.25,416.1);
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(86).to({_off:false},0).wait(29));

	// txt tit
	this.text = new cjs.Text("/ ¿Cómo valorar el desempeño de nuestros colaboradores?", "19px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 615;
	this.text.parent = this;
	this.text.setTransform(277.45,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(115));

	// desempnio alto 3 mod3
	this.instance = new lib.desempeoalto3mod3();
	this.instance.parent = this;
	this.instance.setTransform(655.3,213.6,1,1,0,0,0,234.6,104.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({y:193.6,alpha:1},12,cjs.Ease.get(1)).wait(39));

	// desempeniomedio 2 mod2
	this.instance_1 = new lib.desempeomedio2mod2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(655.3,213.6,1,1,0,0,0,234.6,104.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({y:193.6,alpha:1},12,cjs.Ease.get(1)).wait(52));

	// desepeniobajo1
	this.instance_2 = new lib.desepeobajo1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(655.3,239.3,1,1,0,0,0,234.6,110.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({y:199.3,alpha:1},12,cjs.Ease.get(1)).wait(65));

	// m3 t4 mc2 txt1
	this.instance_3 = new lib.m3t4mc2txt1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.65,168.45,1,1,0,0,0,189,187.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:188.45,alpha:1},16,cjs.Ease.get(1)).wait(99));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,-33.5,1141.7,573.5);


// stage content:
(lib.AC_TMR_M03_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		parent.comando("iniciar",this);
	}
	this.frame_1 = function() {
		this.stop();
		parent.comando("resetear");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// PAGINAS
	this.instance = new lib.Mod3T3mc1();
	this.instance.parent = this;
	this.instance.setTransform(479.45,431.85,1,1,0,0,0,418.7,193.1);

	this.instance_1 = new lib.Mod3t2mc2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,40.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// TITULO
	this.instance_2 = new lib.tema_entrada_titulo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(303.6,249.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,218,255,0.6)").ss(1,1,1).p("AhoioIDRAAIAAFRIjRAAg");
	this.shape.setTransform(-123.65,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhoCpIAAlRIDRAAIAAFRg");
	this.shape_1.setTransform(-123.65,16.9);

	this.instance_3 = new lib.tituloestatico();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303.6,249.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245,249,666.7,331.20000000000005);
// library properties:
lib.properties = {
	id: '1A6F9B76527642808B62952FAF9BD72D',
	width: 950,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1A6F9B76527642808B62952FAF9BD72D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;