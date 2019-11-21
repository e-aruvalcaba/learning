(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AC_IMCR_OV_05_atlas_", frames: [[0,392,596,351],[0,0,626,390]]}
];


// symbols:



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_05_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_05_atlas_"];
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


(lib.text02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("\nEl programa de Manejo de Incidentes y Resolución de Crisis (IMCR) está encaminado a construir y mantener una capacidad sólida para proteger los bienes tangibles e intangibles del negocio.", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 391;
	this.text.parent = this;
	this.text.setTransform(2,26.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().rr(-216.7,-116.7,433.4,233.4,12);
	this.shape.setTransform(197.1,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text02, new cjs.Rectangle(-19.6,-20.2,433.4,233.4), null);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("\nBuscamos identificar, evaluar y evitar que sucedan incidentes potenciales; y si llegan a suceder, evitar o reducir el impacto en el negocio.", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 391;
	this.text.parent = this;
	this.text.setTransform(2,59.4);

	this.text_1 = new cjs.Text("“Los incidentes son una parte inevitable de cualquier negocio”\n", "bold 18px 'Arial'");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 388;
	this.text_1.parent = this;
	this.text_1.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().rr(-216.7,-116.7,433.4,233.4,12);
	this.shape.setTransform(197.1,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(-19.6,-20.2,433.4,233.4), null);


(lib.imag01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-3,0,2.013,2.013);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imag01, new cjs.Rectangle(-3,0,1200,706.7), null);


(lib.iimag02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.914,1.914);

	this.instance_1 = new lib.Mapadebits3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,0,2.013,2.013);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.iimag02, new cjs.Rectangle(-3,0,1201.5,746.7), null);


(lib.flechacursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDgAgXApQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAbA4IAggQIgcg4QgCgCACgDQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAmAAIhyhyIAACfIAggYQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAg");
	this.shape.setTransform(7.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechacursor, new cjs.Rectangle(0,0,14.2,22.4), null);


(lib.ciruculo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D73D45").ss(2,1,1).p("AG9AAQAAC5iCCCQiCCCi5AAQi3AAiDiCQiCiCAAi5QAAi3CCiDQCDiCC3AAQC5AACCCCQCCCDAAC3g");
	this.shape.setTransform(44.5,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak6E7QiCiCAAi5QAAi3CCiDQCDiCC3AAQC5AACCCCQCCCDAAC3QAAC5iCCCQiCCCi5AAQi3AAiDiCg");
	this.shape_1.setTransform(44.5,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ciruculo, new cjs.Rectangle(-1,-1,91.1,91.1), null);


(lib.Circulocerrar4colores = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA8436").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.T3_Señalar_btn_gr_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjCiQgphDAAhfQAAheAphEQAqhDA5AAQA6AAAqBDQApBEAABeQAABfgpBDQgqBEg6AAQg5AAgqhEg");
	this.shape.setTransform(13.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_gr_1_linea, new cjs.Rectangle(-0.3,-0.5,28.3,46), null);


(lib.T3_movie_rollover_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.02)").s().p("AgNAPQgGgHAAgIQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAHQgFAFgJAAQgHAAgGgFg");
	this.shape.setTransform(34.2,34.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("Ag+A/QgagaAAglQAAgkAagaQAagaAkgBQAmABAZAaQAaAaAAAkQAAAlgaAaQgZAagmAAQgkAAgagag");
	this.shape_1.setTransform(34.2,34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.169)").s().p("AhqBrQgsgsAAg/QAAg9AsgtQAtgsA9AAQA/AAArAsQAtAtAAA9QAAA/gtAsQgrAsg/AAQg9AAgtgsg");
	this.shape_2.setTransform(34.2,34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.231)").s().p("AiPCQQg8g7AAhVQAAhTA8g8QA8g8BTAAQBVAAA7A8QA8A8AABTQAABVg8A7Qg7A8hVAAQhTAAg8g8g");
	this.shape_3.setTransform(34.2,34.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.282)").s().p("AivCwQhJhJAAhnQAAhmBJhJQBJhJBmAAQBnAABJBJQBJBJAABmQAABnhJBJQhJBJhnAAQhmAAhJhJg");
	this.shape_4.setTransform(34.2,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.325)").s().p("AjJDKQhUhUAAh2QAAh2BUhUQBUhTB1AAQB2AABTBTQBVBUAAB2QAAB2hVBUQhTBTh2AAQh1AAhUhTg");
	this.shape_5.setTransform(34.3,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.357)").s().p("AjdDeQhchcAAiCQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcg");
	this.shape_6.setTransform(34.2,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.38)").s().p("AjsDsQhhhiAAiKQAAiKBhhiQBjhhCJAAQCLAABhBhQBjBigBCKQABCKhjBiQhhBiiLABQiJgBhjhig");
	this.shape_7.setTransform(34.3,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.396)").s().p("Aj0D1QhmhlAAiQQAAiPBmhmQBlhlCPAAQCQAABlBlQBmBmAACPQAACQhmBlQhlBmiQAAQiPAAhlhmg");
	this.shape_8.setTransform(34.3,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.4)").s().p("Aj4D4QhmhnAAiRQAAiRBmhnQBohmCQAAQCSAABmBmQBnBnAACRQAACRhnBnQhmBniSAAQiQAAhohng");
	this.shape_9.setTransform(34.3,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.2,32.4,4,4);


(lib.T3_btn_activo_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,1,3,true).p("ABEgfIhEBDIhDhD");
	this.shape.setTransform(-25.9,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF3300").ss(3,1,1,3,true).p("ADeAAQAABchBBBQhBBBhcAAQhbAAhBhBQhBhBAAhcQAAhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbg");
	this.shape_1.setTransform(-25.3,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_linea, new cjs.Rectangle(-49,-18.3,47.4,78.7), null);


(lib.T1_cuadrotransicion_mc = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape.setTransform(234.6,178.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.902)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_1.setTransform(234.6,178.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.8)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_2.setTransform(234.6,178.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.702)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_3.setTransform(234.6,178.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.604)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_4.setTransform(234.6,178.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.506)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_5.setTransform(234.6,178.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.404)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_6.setTransform(234.6,178.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.306)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_7.setTransform(234.6,178.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.208)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_8.setTransform(234.6,178.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.106)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_9.setTransform(234.6,178.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.008)").s().p("EhHcAg5MAAAhBxMCO5AAAMAAABBxg");
	this.shape_10.setTransform(234.6,178.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.7,-31.6,914.7,421);


(lib.T1_Boton_invisible = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhLJAjjMAAAhHFMCWTAAAMAAABHFg");
	this.shape.setTransform(481,227.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Origen de IMCR", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5B436").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,58.6), null);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Capa 1
	this.instance = new lib.text01();
	this.instance.parent = this;
	this.instance.setTransform(257.9,241.3,1.133,1.133,0,0,0,257.9,241.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1.1,scaleY:1.1,x:244.6,y:374.6},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(13));

	// Capa 2
	this.instance_1 = new lib.imag01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.8,128,1.1,1.1,0,0,0,199.8,237.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:199.9,regY:237.9,scaleX:1,scaleY:1,x:124.3,y:144.6},14,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.4,-133.7,1320.4,777.6);


(lib.instruccionclic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Capa 3
	this.text = new cjs.Text("Haz clic en cada botón", "16px 'Arial'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 177;
	this.text.parent = this;
	this.text.setTransform(47.1,10.3);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(12).to({_off:false},0).wait(1));

	// Capa 2
	this.instance = new lib.flechacursor();
	this.instance.parent = this;
	this.instance.setTransform(22.9,22.5,1,1,0,0,0,7.1,11.2);
	this.instance.alpha = 0.828;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:17.9,y:15.5,alpha:1},6,cjs.Ease.get(1)).wait(3));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,1,1).p("AAnAAQAAAQgLAMQgMALgQAAQgPAAgLgLQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPg");
	this.shape.setTransform(19.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,1,1).p("Ag3AAQAAgWARgQQAQgRAWAAQAYAAAQARQAQAQAAAWQAAAYgQAQQgQAQgYAAQgWAAgQgQQgRgQAAgYg");
	this.shape_1.setTransform(19,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,1,1).p("AhIAAQAAgdAVgWQAWgVAdAAQAfAAAVAVQAWAWAAAdQAAAfgWAVQgVAWgfAAQgdAAgWgWQgVgVAAgfg");
	this.shape_2.setTransform(18.6,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1.5,1,1).p("AhaAAQAAgkAbgbQAbgbAkAAQAmAAAbAbQAaAbAAAkQAAAmgaAbQgbAagmAAQgkAAgbgaQgbgbAAgmg");
	this.shape_3.setTransform(18.1,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.5,1,1).p("AhsAAQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAggtAAQgsAAggggQggggAAgtg");
	this.shape_4.setTransform(17.6,17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.5,1,1).p("Ah9AAQAAgzAlglQAlglAzAAQA0AAAmAlQAkAlAAAzQAAA0gkAmQgmAkg0AAQgzAAglgkQglgmAAg0g");
	this.shape_5.setTransform(17.1,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1.5,1,1).p("AiPAAQAAg7AqgqQAqgqA7AAQA7AAArAqQAqAqAAA7QAAA7gqArQgrAqg7AAQg7AAgqgqQgqgrAAg7g");
	this.shape_6.setTransform(16.6,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,1,1).p("AChAAQAABDgvAvQgvAvhDAAQhCAAgvgvQgvgvAAhDQAAhCAvgvQAvgvBCAAQBDAAAvAvQAvAvAABCg");
	this.shape_7.setTransform(16.1,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.7,14.7,9.7,9.7);


(lib.btn_cerrar_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AApAyIgkgfQgBgBAAAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAgBABQAAAAgBAAQAAAAAAABIglAfQgFAEgEgEQgEgEAEgFIAfglQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgfglQgEgFAEgEQAEgEAFAEIAlAfQAAABAAAAQABAAAAAAQABABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAABAAQAAAAABgBIAkgfQAFgEAEAEQAFAEgFAFIgfAlQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAfAlQAFAFgFAEQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(0.1,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63E45").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.instance = new lib.Circulocerrar4colores("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_2.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.T3_Señalar_btn_mc_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_gr_1_linea();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},7).to({alpha:0},8).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.5,28.3,46);


(lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// OVER (rollover)
	this.instance = new lib.T3_movie_rollover_1_linea();
	this.instance.parent = this;
	this.instance.setTransform(91,14.5,1,1,0,0,0,91,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// UP (reposo)
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(7,7,7,0.008)").s().p("AkJDyQhkhkAAiOQAAiNBkhkQBihhCIgDIkdAAIAJgBIKXAAIAKABIl7AAQCHADBhBhQBkBkAACNQAACOhkBkQhlBliMAAQiPAAhkhlg");
	this.shape.setTransform(36.5,34.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,73.2,68.6);


(lib.T3_btn_mc_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// visitado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC00").s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQALAAAIAIQAJAIgBALQABALgJAJQgIAIgLAAQgKAAgJgIg");
	this.shape.setTransform(43.8,6.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_linea();
	this.activo.parent = this;
	this.activo.setTransform(50.7,22.4,1,1,0,0,0,2.9,5.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_linea();
	this.resalte.parent = this;
	this.resalte.setTransform(148.2,13.8,1.624,1,0,0,0,91.2,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(22.7,23.3,0.659,0.659,0,0,0,34.4,35.4);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.7,49.4,78.6);


(lib.T1_Ventana_con_sus_contenidos_MC = function(mode,startPosition,loop) {
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
		
		this.m2mc1_Cerrar.visible=false;
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
		this.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-394.1,146.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v1();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(668.9,-103.4);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.botoninvisible = new lib.T1_Boton_invisible();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(383.9,92.4,0.647,0.972,0,0,0,480.8,227.2);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(2));

	// Transicion "destapa" el contenido
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mc();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(-164.3,285.4,0.368,0.864,0,0,0,312.2,175.3);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(2));

	// Contenidos
	this.instance = new lib.instruccionclic();
	this.instance.parent = this;
	this.instance.setTransform(-285.1,199.9,1,1,0,0,0,19.5,19.5);

	this.text = new cjs.Text("●\n●\n●\n●\n●\n●\n●", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 25;
	this.text.parent = this;
	this.text.setTransform(-326.7,193.3);

	this.text_1 = new cjs.Text("Productos\nPersonal\nInfraestructura\nInformación\nFinanzas", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 259;
	this.text_1.parent = this;
	this.text_1.setTransform(-311.7,193.3);

	this.text_2 = new cjs.Text("Bienes tangibles:", "bold 16px 'Arial'", "#333333");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 199;
	this.text_2.parent = this;
	this.text_2.setTransform(-326.7,145.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.text_2,p:{text:"Bienes tangibles:"}},{t:this.text_1,p:{text:"Productos\nPersonal\nInfraestructura\nInformación\nFinanzas"}},{t:this.text,p:{text:"●\n●\n●\n●\n●\n●\n●"}}]},1).to({state:[{t:this.text_2,p:{text:"Bienes intangibles:"}},{t:this.text_1,p:{text:"Imagen\nReputación"}},{t:this.text,p:{text:"●\n●"}}]},1).wait(1));

	// Sólo ventana
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3F3").s().p("A4SaaMAAAg0zMAwlAAAMAAAA0zg");
	this.shape_1.setTransform(-193.6,286.2);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.6,-48.6,134.1,391);


(lib.T1_MC_con_todos_los_botones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno.
		
		Logs:
		
		Ultima modificacion 07/11/2019 por Adrian Ruvalcaba Garcia:
				Corregido el resalte del primer boton en modo secuencial.
		
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		// Cambiar aqui por el numero de botones totales:
		var NumeroBotones = 2;
		var root = this;
		quitaActivos();
		var Secuencial = true;
		if (parent.IDActual < parent.ULTIMO || parent.backdoor) {
			console.log("es una pagina ya vista, contenido desbloqueado");
			Secuencial = false;
		}
		// Para hacer que los botones sean secuenciales:
		if (Secuencial) {
			EnSecuencia();
		}
		iniciar();
		// Esta linea lleva directamente a la info del boton 1, y suma la visita
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
				try {
					parent.final_tema();
				} catch (err) {
					console.log(" El tema esta corriendo stand alone. FINAL TEMA")
				}
				/* Para v1 del Template Animate (AHORA DESCONTINUADO):
				parent.siguiente_verde();
				parent.comando("terminar");
				*/
		
				/*Para v2 del template */
				// Si hay que avanzar al siguiente frame de un tema
				//parent.habilitar_siguiente(); //Para habilitar boton siguiente y llamar banderilla si esta habilitada
				// Si es el final del tema:	
				//parent.final_tema(); //Para habilitar boton siguiente y llamar banderilla final si esta habilitada
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
		
		// Corregido el 07/11/2019 Adrian Ruvalcaba
		// Habilitar resalte en el boton 1 si esta en Secuencial.
		if (Secuencial) {
			Resaltes(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T1_Ventana_con_sus_contenidos_MC();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(273.6,90.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b2 = new lib.T3_btn_mc_1_linea();
	this.b2.parent = this;
	this.b2.setTransform(223.5,63.1,1.952,1.952,0,0,0,64.1,12.7);

	this.b1 = new lib.T3_btn_mc_1_linea();
	this.b1.parent = this;
	this.b1.setTransform(86,62.9,1.952,1.952,0,0,0,64.1,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(2));

	// 0. Imagenes para botones y textos
	this.text = new cjs.Text("Bienes intangibles", "14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 120;
	this.text.parent = this;
	this.text.setTransform(145,139.5);

	this.text_1 = new cjs.Text("Bienes tangibles", "14px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 120;
	this.text_1.parent = this;
	this.text_1.setTransform(1,139.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaCHQgGAAgEgDQgEgEgBgFIgCgSQgCgLACgJIABgGQACgIAAgLIgDgtQgCgTADgUIAEgWIASg5IAAAAQgEgEAAgGIAAgMQAAgEACgDQADgCADAAIAhAAQADAAADACQACADAAADIAAANQAAAGgEAEIAAAAIASA5IAEAWQADAUgCATIgDAtQAAALACAIIABAGQACAJgCALIgCASQgBAFgEAEQgEADgGAAgAgOhxIABADIABABQADAEgBAFIgSA5IgDALIgBAJQgDATACASIADAuQAAALgCAKIgBAFQgCAJACAJIACARQAAAEAFAAIA1AAQAFAAAAgEIACgRQACgJgCgJIgBgFQgCgKAAgLIADguQACgSgDgTIgBgJIgDgLIgSg5QgBgFADgEIABgBIABgDIAAgLIgdAAg");
	this.shape.setTransform(3.8,82,2.031,2.031);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAFIAAgJIA7AAIAAAJg");
	this.shape_1.setTransform(3.9,70.7,2.031,2.031);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjKDtQgOgHgIgOQgJgNABgRIAAgXQAAgYAMgUQANgVAVgLQAXgMAfgKIA0gMQAOgOAFgVQgkgagOgwQgHgBgFgEQgMgLgDgWQgBgRAGgMQgDgOAAgSQgBg4AmgiQAlgiA/AAQA+AAAlAiQAmAiAAA4QAAATgDAOQAFALgBARQgBAVgOAMQgFAEgHABQgOAxgjAZQAEATANAPQAPACAOAEIAYAHQAeAJAYANQAWALAMAVQANAUAAAYIAAAXQgBARgHANQgJAOgOAHQhQArh7AAQh6AAhQgrgAAJCIIAAB/QBygCBJgnQAVgLAAgZIAAgXQAAgTgKgQQgKgRgSgJQgVgLgegKIgugMQgLAdg+AmgAhoBLIgXAHQgdAJgWALQgRAJgKARQgLAQABATIAAAXQgBAZAWALQAcAPAnALQA2AOBCABIAAh/Qg+gngLgbQgYAEAAABgAhCA+QAEAKATASQAUAQAXAQQAYgQAUgQQAUgSADgKQgNgOgHgUQgXANgYAAQgWAAgYgNQgHAVgNANgAhlhJQAEACABADQAMAyAjAZQAXARAaAAQAbAAAWgRQAkgYANgzQABgEADgBQADgDAEADIABAAIADgCQAIgFABgQQABgKgDgHQgDgHgEgBQgEgBgGACIgCACQgFABgDgDQgDgCAAgFIgHgaQglgDgVgbQgiAfg7AAIgOAAIgHAaQAAAEgEADQgCACgFgBIgDgCQgFgCgEABQgFABgCAHQgCAHAAAKQACAPAGAGQABABAAAAQABAAAAAAQABABAAAAQAAAAABAAIABAAIADgBIAEABgAB2iJIACABIABgTQAAgxgggdQghgdg3AAQg3AAghAdQghAdAAAxIACASIACAAQAGgCAGABIAHgZIABgCIAAgBIACgCIAEgBIABAAIABgBIAoAAQAtgFAXgbIABAAIABgBIAEgBIACAAIABAAIADACIABABIABABQACAHALAJQASAOAZAAIABAAIACABIACABIABABIACADIAAABIAGAZIAGAAIAIABg");
	this.shape_2.setTransform(142.1,81.4);

	this.instance = new lib.ciruculo();
	this.instance.parent = this;
	this.instance.setTransform(4.3,81.8,1,1,0,0,0,44.5,44.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 0)];
	this.instance.cache(-3,-3,95,95);

	this.instance_1 = new lib.ciruculo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.8,81.8,1,1,0,0,0,44.5,44.5);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 204, 0, 0)];
	this.instance_1.cache(-3,-3,95,95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,34.8,348.2,398.3);


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
p.nominalBounds = new cjs.Rectangle(0,-58,1200,58.6);


(lib.MC_pag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Capa 1
	this.instance = new lib.text02();
	this.instance.parent = this;
	this.instance.setTransform(781.3,584.6,1,1,0,0,0,257.9,241.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({x:566.8,alpha:1},17,cjs.Ease.get(1)).wait(1));

	// Capa 2
	this.instance_1 = new lib.iimag02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.1,123,1.2,1.2,0,0,0,199.9,237.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:124.3,y:144.6,alpha:1},14,cjs.Ease.get(1)).wait(13).to({x:-238.7},17,cjs.Ease.get(1)).wait(1));

	// Capa 3
	this.instance_2 = new lib.T1_MC_con_todos_los_botones();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1113.6,238.2,1,1,0,0,0,249.9,249.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.4,-162.5,1441.8,896);


// stage content:
(lib.AC_IMCR_OV_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*Iniciar Tema:
		Esta instruccion marca el tema como INICIADO en el trak y ademas envia el 
		canvas al template, es INDISPENSABLE!!!
		*/
		this.stop();
		try{
			parent.iniciar_tema(this);
		}catch(err){
			console.log(" El tema esta corriendo stand alone. INICIO TEMA ")
		}
		/* Para habilitar el boton siguiente
		Esta instruccion solo habilita el boton siguiente y si estan activadas las 
		banderillas muestra la banderilla naranja de siguiente tema.
		
		Si necesitas habilitar el siguiente con un retraso en ciertos segundos
		utiliza la siguiente funcion reemplazando seconds en la cantidad de segundos:
		parent.retrasar_habilitar_siguiente(seconds);
		*/
		//parent.habilitarSiguiente();
		
		
		/* Para marcar tema completado :
		Esta instruccion tambien habilita el boton siguiente y si estan activadas las
		banderillas tambien muestra la banderilla de final tema.
		*/
		
		try{
			parent.final_tema();
		}catch(err){
			console.log(" El tema esta corriendo stand alone. FINAL TEMA")
		}
		
		/*
		Si necesitas utilizar la funcion final tema retrasandola con ciertos segundos
		utiliza la siguiente funcion en lugar de la anterior reemplazando la palabra
		seconds por la cantidad de segundos a esperar:
		parent.retrasar_final_tema(seconds);
		*/
	}
	this.frame_1 = function() {
		/*Iniciar Tema:
		Esta instruccion marca el tema como INICIADO en el trak y ademas envia el 
		canvas al template, es INDISPENSABLE!!!
		*/
		this.stop();
		try{
			parent.iniciar_tema(this);
		}catch(err){
			console.log(" El tema esta corriendo stand alone. INICIO TEMA ")
		}
		/* Para habilitar el boton siguiente
		Esta instruccion solo habilita el boton siguiente y si estan activadas las 
		banderillas muestra la banderilla naranja de siguiente tema.
		
		Si necesitas habilitar el siguiente con un retraso en ciertos segundos
		utiliza la siguiente funcion reemplazando seconds en la cantidad de segundos:
		parent.retrasar_habilitar_siguiente(seconds);
		*/
		//parent.habilitarSiguiente();
		
		
		/* Para marcar tema completado :
		Esta instruccion tambien habilita el boton siguiente y si estan activadas las
		banderillas tambien muestra la banderilla de final tema.
		
		
		try{
			parent.final_tema();
		}catch(err){
			console.log(" El tema esta corriendo stand alone. FINAL TEMA")
		}
		
		/*
		Si necesitas utilizar la funcion final tema retrasandola con ciertos segundos
		utiliza la siguiente funcion en lugar de la anterior reemplazando la palabra
		seconds por la cantidad de segundos a esperar:
		parent.retrasar_final_tema(seconds);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// barra titulo
	this.instance = new lib.barratitulotema();
	this.instance.parent = this;
	this.instance.setTransform(600,30,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// MC con contenido
	this.instance_1 = new lib.MC_pag1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(602,336.8,1,1,0,0,0,524,241.5);

	this.instance_2 = new lib.MC_pag2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(602,336.8,1,1,0,0,0,524,241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(562.6,279.5,1320.4,797.2);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AC_IMCR_OV_05_atlas_.png?1573347703676", id:"AC_IMCR_OV_05_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;