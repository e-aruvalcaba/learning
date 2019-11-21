(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
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


(lib.Imagenparaboton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AkXEXQhzh0AAijQAAiiBzh1QB1hzCiAAQCjAAB0BzQB0B1AACiQAACjh0B0Qh0B0ijAAQiiAAh1h0g");
	this.shape.setTransform(39.5,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagenparaboton, new cjs.Rectangle(0,0,79,79), null);


(lib.flechacursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDgAgXApQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAbA4IAggQIgcg4QgCgCACgDQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAmAAIhyhyIAACfIAggYQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAg");
	this.shape.setTransform(7.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechacursor, new cjs.Rectangle(0,0,14.2,22.4), null);


(lib.btn_cerrar_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63E45").s().p("AAAA5IhWBXIg6g6IBWhWIhWhVIA8g7IBUBWIBWhWIA5A5IhVBXIBXBWIg7A7g");
	this.shape.setTransform(-10.7,2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63E45").s().p("AgBBHIhqBqIhGhHIBphqIhphpIBJhJIBoBqIBphqIBHBIIhpBqIBrBqIhJBJg");
	this.shape_1.setTransform(-10.7,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,0,0.702)").s().p("AlsENIAAoZILZAAIAAIZg");
	this.shape_2.setTransform(-16.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-12.4,29,29);


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
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AhBA/QgbgaAAglQAAgkAbgaQAcgaAlgBQAnABAbAaQAbAaAAAkQAAAlgbAaQgbAagnAAQglAAgcgag");
	this.shape_1.setTransform(34.6,34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.169)").s().p("AhvBrQgugsAAg/QAAg9AugtQAvgsBAAAQBCAAAuAsQAuAtAAA9QAAA/guAsQguAshCAAQhAAAgvgsg");
	this.shape_2.setTransform(34.9,34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.231)").s().p("AiWCQQg/g7AAhVQAAhTA/g8QA+g8BYAAQBZAAA+A8QA/A8AABTQAABVg/A7Qg+A8hZAAQhYAAg+g8g");
	this.shape_3.setTransform(35.2,34.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.282)").s().p("Ai4CwQhNhJAAhnQAAhmBNhJQBNhJBrAAQBsAABNBJQBNBJAABmQAABnhNBJQhNBJhsAAQhrAAhNhJg");
	this.shape_4.setTransform(35.5,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.325)").s().p("AjUDKQhXhUAAh2QAAh2BXhUQBYhTB8AAQB9AABXBTQBZBUAAB2QAAB2hZBUQhXBTh9AAQh8AAhYhTg");
	this.shape_5.setTransform(35.7,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.357)").s().p("AjpDeQhhhcAAiCQAAiBBhhcQBhhcCIAAQCJAABhBcQBhBcAACBQAACChhBcQhhBciJAAQiIAAhhhcg");
	this.shape_6.setTransform(35.9,34.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.38)").s().p("Aj4DsQhnhiAAiKQAAiKBnhiQBnhhCRAAQCSAABnBhQBnBiAACKQAACKhnBiQhnBiiSABQiRgBhnhig");
	this.shape_7.setTransform(36,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.396)").s().p("AkBD1QhrhlAAiQQAAiPBrhmQBrhlCWAAQCXAABrBlQBrBmAACPQAACQhrBlQhrBmiXAAQiWAAhrhmg");
	this.shape_8.setTransform(36,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.4)").s().p("AkFD4QhrhngBiRQABiRBrhnQBthmCYAAQCZAABsBmQBtBngBCRQABCRhtBnQhsBniZAAQiYAAhthng");
	this.shape_9.setTransform(36.1,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.2,32.4,4,4);


(lib.T3_btn_activo_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#482A75").ss(2,1,1,3,true).p("ADeAAQAABchBBBQhBBBhcAAQhbAAhBhBQhBhBAAhcQAAhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbg");
	this.shape.setTransform(-25.3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_linea, new cjs.Rectangle(-48.5,-17.8,46.4,46.5), null);


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
	this.text = new cjs.Text("Equipos de IMCR", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(72,42,117,0.992)").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,58.6), null);


(lib.instruccionclic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Capa 3
	this.text = new cjs.Text("Haz clic en cada herramienta para ver su descripción", "16px 'Arial'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 384;
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
	this.shape.graphics.f("rgba(7,7,7,0.008)").s().p("AkVDyQhohkAAiOQAAiNBohkQBmhhCPgDIkqAAIAKgBIKzAAIALABImMAAQCNADBlBhQBpBkAACNQAACOhpBkQhpBliTAAQiUAAhphlg");
	this.shape.setTransform(38,34.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,76.4,68.6);


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
	this.shape.graphics.f("rgba(102,204,0,0.008)").s().p("AgTAUQgHgJgBgLQABgLAHgIQAIgIALAAQALAAAIAIQAIAIAAALQAAALgIAJQgIAIgLAAQgLAAgIgIg");
	this.shape.setTransform(53.8,56.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_linea();
	this.activo.parent = this;
	this.activo.setTransform(67.5,30.6,1.35,1.35,0,0,0,2.9,5.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_linea();
	this.resalte.parent = this;
	this.resalte.setTransform(193.3,18,2.119,1.306,0,0,0,91.2,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(28.5,31,0.82,0.875,0,0,0,34.4,35.4);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-1.3,64.8,62.7);


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
		this.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-394.1,146.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v1();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(718.8,-156.3);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.botoninvisible = new lib.T1_Boton_invisible();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(777.1,109,0.051,1.222,0,0,0,480.7,227.2);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(3));

	// Transicion "destapa" el contenido
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mc();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(157.6,259.5,1.311,0.661,0,0,0,311.9,175.1);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(3));

	// Contenidos
	this.instance = new lib.instruccionclic();
	this.instance.parent = this;
	this.instance.setTransform(-149.6,215.1,1,1,0,0,0,19.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(2,2,1,3,true).p("AB5g5Ih5B3Ih4h3");
	this.shape_1.setTransform(-169.5,128.5);

	this.text = new cjs.Text("Se encarga, entre otros asuntos, de:\n\n● Tomar decisiones estratégicas sobre un \n   incidente o crisis, a petición del Equipo de \n   Evaluación Inicial o del Comité Operativo.\n● Asegurar los recursos para el adecuado \n   funcionamiento del programa IMCR.\n", "18px 'Arial'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 365;
	this.text.parent = this;
	this.text.setTransform(-340.8,172);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#472974").s().p("A+7A5QADhxB2gBMA6GAAAQB1ABACBxg");
	this.shape_2.setTransform(-162.2,150.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E9E9").s().p("A9CPqQh5AAAAh4IAAppIAAztIAAgFMA92AAAIAAAFIAATtIAAJpQABB4h4AAg");
	this.shape_3.setTransform(-162.2,256.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#472974").s().p("A+6A5QAChxB2gBMA6FAAAQB2ABACBxg");
	this.shape_4.setTransform(37.8,150.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E9E9").s().p("A9CPqQh4AAAAh4IAAppIAAztIAAgFMA91AAAIAAAFIAATtIAAJpQAAB4h4AAg");
	this.shape_5.setTransform(37.8,256.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#472974").s().p("A/sA5QAChxB4gBMA7kAAAQB5ABADBxg");
	this.shape_6.setTransform(242.4,150.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9E9E9").s().p("A9yPqQh7AAABh4IAAppIAAztIAAgFMA/aAAAIAAAFIAATtIAAJpQgBB4h7AAg");
	this.shape_7.setTransform(242.4,256.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text,p:{x:-340.8,text:"Se encarga, entre otros asuntos, de:\n\n● Tomar decisiones estratégicas sobre un \n   incidente o crisis, a petición del Equipo de \n   Evaluación Inicial o del Comité Operativo.\n● Asegurar los recursos para el adecuado \n   funcionamiento del programa IMCR.\n",lineWidth:365,y:172}},{t:this.shape_1,p:{x:-169.5}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text,p:{x:-146.8,text:"Se encarga, entre otros asuntos, de:\n\n● Implementar planes de acción inmediata y \n   programas de seguimiento para los riesgos \n   más críticos.\n● Analizar, evaluar y operar los incidentes, \n   para garantizar la continuidad del negocio.",lineWidth:381,y:172}},{t:this.shape_1,p:{x:36.5}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.text,p:{x:49.8,text:"El coordinador de IMCR maneja el Equipo de Evaluación Inicial (no más de 4 o 5 personas) que se encargan de:\n\n● Analizar un incidente rápidamente\n● Realizar acciones fundamentadas y decisivas\n● Elaborar recomendaciones\n● Reportar en la herramienta IMCR\n● Asegurar las capacidades de sus sustitutos.",lineWidth:389,y:166}},{t:this.shape_1,p:{x:236.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.6,-48.6,269.6,391);


(lib.T1_MC_con_todos_los_botones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno.
		
		Logs:
		
		07/11/2019 por Adrian Ruvalcaba Garcia:
				Corregido el resalte del primer boton en modo secuencial.
		Ultima modificacion 10/11/2019 por Adrian Ruvalcaba Garcia:
				- Comentada la funcionalidad para desbloquear la actividad 
				al entrar al tema cuando ya se visito.
				- Arreglado el error al intentar sacar el resalte del boton 0 al inicio.
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		// Cambiar aqui por el numero de botones totales:
		var NumeroBotones = 3;
		var root = this;
		quitaActivos();
		var Secuencial = true;
		/*
		if (parent.IDActual<parent.ULTIMO || parent.backdoor) {
			console.log("es una pagina ya vista, contenido desbloqueado");
			Secuencial = false;
		}
		*/
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
			//console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			debugger
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position < 1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				//console.log("saca resalte al siguiente");
			}
		
			try {
				//console.log("saca resaltes al actual");
				root["b" + n].resalte.alpha = 0;
		
			} catch (error) {
		
			}
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
				//console.log(" Todo visitado ");
				try {
					parent.final_tema();
				} catch (err) {
					console.log(" El tema esta corriendo stand alone. FINAL TEMA")
				}
				/* Para v1 del Template Animate (AHORA DESCONTINUADO):
				
				parent.siguiente_verde();
				parent.comando("terminar");
				*/
				try {
					parent.final_tema();
				} catch (err) {
					console.log(" El tema esta corriendo stand alone. FINAL TEMA")
				}
				/*Para v2 del template */
				// Si hay que avanzar al siguiente frame de un tema
				//parent.habilitar_siguiente(); //Para habilitar boton siguiente y llamar banderilla si esta habilitada
				// Si es el final del tema:	
				//parent.final_tema(); //Para habilitar boton siguiente y llamar banderilla final si esta habilitada
			}
		}
		
		function quitaActivos() {
			//console.log("quita activos");
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
				//console.log("habilita siguiente boton");
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
				//console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				//console.log("entro a secuencial");
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
	this.b3 = new lib.T3_btn_mc_1_linea();
	this.b3.parent = this;
	this.b3.setTransform(573.1,80.4,1.76,1.76,0,0,0,64,12.6);

	this.b2 = new lib.T3_btn_mc_1_linea();
	this.b2.parent = this;
	this.b2.setTransform(374.1,82.3,1.76,1.76,0,0,0,64,12.6);

	this.b1 = new lib.T3_btn_mc_1_linea();
	this.b1.parent = this;
	this.b1.setTransform(168.4,81.4,1.76,1.76,0,0,0,64.1,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(2));

	// 0. Imagenes para botones y textos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(72,42,117,0.992)").s().p("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");
	this.shape.setTransform(514,124,0.468,0.468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(72,42,117,0.992)").s().p("AAWAyIgCgDQgFgbgRgTIAAAAQgSgTgagHQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAJgGAJgIIADgCIACABQAdAMAUAZQAUAZAFAgIAAACIgCADIgDAAIgIAAIgLABIgBAAIgDgBg");
	this.shape_1.setTransform(535.2,115.1,0.468,0.468);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(72,42,117,0.992)").s().p("AgZAzIgLgBIgIAAIgDAAIgCgDIAAgCQAFggAUgZQAUgZAdgMIACgBIADACQAJAIAJAGQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQABAAgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgaAHgSATIAAAAQgRATgFAbIgCADIgDABIgBAAg");
	this.shape_2.setTransform(492.8,115.1,0.468,0.468);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(72,42,117,0.992)").s().p("AG/ExIgDgBIgBgDIAAgDQAEgIAEgLIACgDIACgBIAZAAQAGAAAEgEQAFgFAAgGIAAgZIglAAIgDgBIgCgDIgGgTIAAgDIACgDIADgBIArAAIAAnQQAAgGgFgEIAAAAQgEgFgGAAIu/AAQgGAAgFAFQgEAEAAAGIAAIHQAAAGAEAFIAAAAQAFAEAGAAIAYAAIADABIACADQADALAEAIIABADIgCADIgDABIggAAQgTAAgNgNQgNgNAAgTIAAoHQAAgTANgNQANgNATAAIO/AAQATAAANANQANANAAATIAAIHQAAATgNANQgNANgTAAg");
	this.shape_3.setTransform(514,97.5,0.468,0.468);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(72,42,117,0.992)").s().p("AiVAeQgQAAgDgLQgEgKANgJIAhgZQAIgFALgEQAMgEAKAAIDrAJQAQAAADALQAEAKgNAIIghAaQgIAFgLAEQgMAEgKAAgAhkgQQgJADgFAEIgbAUIDjAIQAHAAAIgDQAJgCAFgEIAbgUIjigJQgHAAgJADg");
	this.shape_4.setTransform(512.6,124.7,0.468,0.468);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(72,42,117,0.992)").s().p("AiVAaQgQAAgDgLQgDgIAJgIIAfABIgKAHIDjAIQAHAAAIgCQAJgDAFgEIAbgUIg4gCIAYgTIAoACQAQAAADALQAEAKgNAKIghAYQgIAFgLAFQgMADgKAAg");
	this.shape_5.setTransform(515.4,127.2,0.468,0.468);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(72,42,117,0.992)").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAogcAbQgcAcgnAAQgnAAgbgcgAAuAuQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTg");
	this.shape_6.setTransform(514,100.8,0.468,0.468);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(72,42,117,0.992)").s().p("AgLA/IgTgNQgFgEgCgGQgDgGACgFIARheIAUAEIgSBeIATANQAAAAAAAAQAAABAAAAQAAAAAAgBQABAAAAAAIATgNIgVheIATgEIAVBeQACAFgCAGQgDAGgFAEIgTANQgGADgGAAQgFAAgGgDg");
	this.shape_7.setTransform(514,108.5,0.468,0.468);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(72,42,117,0.992)").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAogcAbQgcAcgnAAQgnAAgbgcgAAAhAQgaAAgTATQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgUgTgaAAIAAAAg");
	this.shape_8.setTransform(536.9,122.3,0.468,0.468);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(72,42,117,0.992)").s().p("AhDBDQgbgbAAgoQAAgmAbgcQAcgcAnAAQAnAAAcAcQAcAcAAAmQAAAogcAbQgcAcgnAAQgnAAgcgcgAgtgtQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTQATgTAAgbQAAgagTgTQgUgTgaAAIAAAAQgaAAgTATg");
	this.shape_9.setTransform(530.4,109.2,0.468,0.468);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(72,42,117,0.992)").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAogcAbQgcAcgnAAQgnAAgbgcgAAuAuQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTg");
	this.shape_10.setTransform(491.1,122.3,0.468,0.468);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(72,42,117,0.992)").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAbgcAnAAQAnAAAcAcQAcAcAAAmQAAAogcAbQgcAcgnAAQgnAAgbgcgAAuAuQATgTAAgbQAAgagTgTQgTgTgbAAQgaAAgTATQgTATAAAaQAAAbATATQATATAaAAQAbAAATgTg");
	this.shape_11.setTransform(497.6,109.2,0.468,0.468);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(72,42,117,0.992)").s().p("AghAjQgPgPAAgUQAAgTAPgOQAOgPATAAQAUAAAPAPQAOAOAAATQAAAUgOAPQgPAOgUAAQgTAAgOgOgAgTgTQgJAIAAALQAAAMAJAIQAIAJALAAQAMAAAIgJQAJgIAAgMQAAgLgJgIQgIgJgMAAIAAAAQgLAAgIAJg");
	this.shape_12.setTransform(120.5,117.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(72,42,117,0.992)").s().p("AghAjQgPgPAAgUQAAgTAPgOQAOgPATAAQAUAAAPAPQAOAOAAATQAAAUgOAPQgPAOgUAAQgTAAgOgOgAgTgTQgJAIAAALQAAAMAJAIQAIAJALAAQAMAAAIgJQAJgIAAgMQAAgLgJgIQgIgJgMAAIAAAAQgLAAgIAJg");
	this.shape_13.setTransform(94.5,117.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(72,42,117,0.992)").s().p("AAsD+QgKgBAAgJIAAg2IhDAAIAAA2QAAAKgKAAIisAAQgKgBAAgJIAAg2Ig/AAIgCgBQgEgBgCgCQgDgDABgGIAikqIAAAAQABgFACgCQADgCAEAAIAZAAIAAg2QAAgcAQgUQARgVAZAAIBQAAQAWAAAQATQAQASAAAaIAAA8IBDAAIAAg2QAAgcARgUQARgVAYAAIBQAAQAXAAAPATQAQASAAAaIAAA8IAZAAQAIAAACAJIAAAAIAqErIAAAAIAAACQAAAJgKABIg/AAIAAA2QAAAKgKAAgADBB5QAKgBAAAKIAABoIADAAIAAhxQAAgSgLgNQgKgMgNAAIhQAAQgQAAgLAOIAAAAQgLAOAAAUIAAAyQABADgBAEIAAAzIACAAIAAhoQAAgKAKABgABNDqIBqgBIAAhdIhqAAgAhCB5QAKgBAAAKIAABoIADAAIAAhxQAAgSgLgNQgKgMgNAAIhQAAQgQAAgLAOIAAAAQgLAOAAAUIAABsIACAAIAAhoQAAgKAKABgAi2DqIBqgBIAAhdIhqAAgADSBNQAQASAAAaIAAAwIAzABIgnkXIgQAAIAAAZQAAALgIAIIAAAAQgHAHgLAAIgEAAQgLAAgHgHIgBAAQgHgIAAgLIAAgZIhNAAIAAAaQAAALgIAHQgHAHgLAAIgIAAQgKAAgHgHQgHgGgBgKIAAgcIhDAAIAAAZQAAALgIAIIAAAAQgIAIgLAAIgFAAQgKAAgHgIIAAABQgIgHAAgLIAAgbIhMAAIAAAZQAAALgIAIIAAAAQgIAHgKABIgIAAQgKAAgIgIIAAABQgHgHAAgLIAAgcIgRAAIgfEXIA0AAIAAgqQAAgcAQgUQASgVAYAAIBQAAQAWAAAQATQAQASAAAaIAAAwIBDAAIAAgqQAAgcARgUQARgVAZAAIBQAAIAAAAQAWAAAPATgAhKjEIAAByQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABIAAAAIADABIAFAAQABAAAAAAQABAAAAAAQABgBABAAQAAAAAAgBIABAAQACgCAAgDIAAhqQAAgSgKgNIAAAAQgKgMgOAAIhQAAQgPAAgLANIgBABQgLAOAAAUIgBBmQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABABIAIAAQAAAAABgBQAAAAABAAQABAAAAAAQAAgBABAAIAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAhwQAAgKAKAAQAKAAAAAKIAABCIBNAAIAAhCQAAgKAKAAQAKAAAAAKgAA+jcIgBABQgLAOAAAUIAABnQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABIADABIAJAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAgBIAAhwQAAgKAKAAQAKAAAAAKIAABCIBNAAIAAhCQAAgKAKAAQAKAAAAAKIAABwQAAABAAABQAAAAAAABQAAAAABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAIAEAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAhrQAAgSgKgNIAAAAQgKgMgOAAIhQAAQgPAAgLANg");
	this.shape_14.setTransform(107.5,117.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(72,42,117,0.992)").s().p("AghAiQgOgOAAgUQgBgTAPgOQAOgOATgBIAAAAQAUAAAPAPQANAOAAATQAAAUgNAPQgPAOgUAAQgTAAgOgPgAgTgTIAAAAQgIAIAAALIAAAAQAAAMAIAIIAAAAQAIAJALAAQAMAAAIgJQAIgIAAgMQAAgLgIgIIAAAAQgIgIgMAAIAAAAIAAAAQgLAAgIAIg");
	this.shape_15.setTransform(120.1,86.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(72,42,117,0.992)").s().p("AghAiQgPgOAAgUQAAgTAPgOQAOgOATgBIAAAAQAUAAAOAPQAOAOABATQgBAUgOAPQgOAOgUAAQgTAAgOgPgAgTgTIAAAAQgIAIgBALIAAAAQABAMAIAIIAAAAQAIAJALAAQAMAAAIgJQAIgIABgMQgBgLgIgIIAAAAQgIgIgMAAIAAAAIAAAAQgLAAgIAIg");
	this.shape_16.setTransform(94,86.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(72,42,117,0.992)").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQAVAAAOAOQAPAPAAAUQAAAVgPAPQgOAOgVAAQgUAAgOgOgAgUgUQgJAIAAAMQAAAMAJAJQAIAJAMAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAQgMAAgIAJg");
	this.shape_17.setTransform(330.4,116.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(72,42,117,0.992)").s().p("AhKBFIgJhTQAAgWAQgQQAQgQAWAAIAMAAIARArIATgrIALAAQAXAAAPAQQAQAQAAAWIAAABIgJBSgAg2glQgJAJAAAOIAHA/IBxAAIAHg/QAAgOgJgJQgKgKgNgBIggBKIgfhKQgNABgKAKg");
	this.shape_18.setTransform(330.4,129.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(72,42,117,0.992)").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgUAAgOgOgAgUgUQgJAIAAAMQAAAMAJAJQAJAJALAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAQgLAAgJAJg");
	this.shape_19.setTransform(312.9,116.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(72,42,117,0.992)").s().p("AhKBFIgJhTQAAgWAQgQQAQgQAWAAIAMAAIARArIASgrIAMAAQAWAAAQAQQAQAQAAAWIAAABIgJBSgAg1glQgKAJAAAOIAHA/IBxAAIAHg/QAAgOgKgJQgJgKgOgBIgfBKIgehKQgOABgJAKg");
	this.shape_20.setTransform(312.9,129.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(72,42,117,0.992)").s().p("AgjAkQgOgPAAgVQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAVgPAPQgPAOgUAAQgUAAgPgOgAgUgUQgJAIAAAMQAAAMAJAJQAJAJALAAQAMAAAJgJQAJgJAAgMQAAgMgJgIQgJgJgMAAQgLAAgJAJg");
	this.shape_21.setTransform(295.4,116.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(72,42,117,0.992)").s().p("AhKBFIgJhTQAAgWAQgQQAQgQAWAAIAMAAIARArIASgrIAMAAQAWAAARAQQAPAQAAAWIAAABIgJBSgAg2glQgJAJAAAOIAHA/IBxAAIAHg/QAAgOgKgJQgJgKgNgBIggBKIgehKQgOABgKAKg");
	this.shape_22.setTransform(295.4,129.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(72,42,117,0.992)").s().p("AgjAkQgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgUAAgPgOgAgUgUQgJAIAAAMQAAAMAJAJQAIAJAMAAQANAAAIgJQAJgIAAgNQAAgMgJgIQgJgJgMAAQgMAAgIAJg");
	this.shape_23.setTransform(320.7,105.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(72,42,117,0.992)").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgUAAgOgOgAgUgUQgJAIAAAMQAAANAJAIQAJAJALAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAQgLAAgJAJg");
	this.shape_24.setTransform(305.1,105.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(72,42,117,0.992)").s().p("AgiAkQgPgPAAgVQAAgUAPgPQAOgOAUAAQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgUAAgOgOgAgUgUQgJAIAAAMQAAAMAJAJQAJAJALAAQANAAAIgJQAJgJAAgMQAAgMgJgIQgIgJgNAAQgLAAgJAJg");
	this.shape_25.setTransform(312.9,93.7);

	this.text = new cjs.Text("Análisis de impacto", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 111;
	this.text.parent = this;
	this.text.setTransform(510.2,172.3);

	this.text_1 = new cjs.Text("Sensibilidad del mercado", "16px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 111;
	this.text_1.parent = this;
	this.text_1.setTransform(313.2,172.3);

	this.text_2 = new cjs.Text("Análisis del problema", "16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 111;
	this.text_2.parent = this;
	this.text_2.setTransform(106.7,172.3);

	this.instance = new lib.Imagenparaboton();
	this.instance.parent = this;
	this.instance.setTransform(512,111.7,1.356,1.356,0,0,0,39.5,39.6);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 240, 240, 0)];
	this.instance.cache(-2,-2,83,83);

	this.instance_1 = new lib.Imagenparaboton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(312,111.7,1.356,1.356,0,0,0,39.5,39.6);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 240, 240, 0)];
	this.instance_1.cache(-2,-2,83,83);

	this.instance_2 = new lib.Imagenparaboton();
	this.instance_2.parent = this;
	this.instance_2.setTransform(108,111.7,1.356,1.356,0,0,0,39.5,39.6);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 240, 240, 0)];
	this.instance_2.cache(-2,-2,83,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,42.2,712,391);


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


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg1HAU4MAAAgpuMBqPAAAMAAAApug");
	this.shape.setTransform(499.1,192.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg1HATbMAAAgm1MBqPAAAMAAAAm1g");
	this.shape_1.setTransform(499.1,201.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg1HAR/MAAAgj9MBqPAAAMAAAAj9g");
	this.shape_2.setTransform(499.1,211);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg1HAQjMAAAghEMBqPAAAMAAAAhEg");
	this.shape_3.setTransform(499.1,220.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg1HAPGIAA+LMBqPAAAIAAeLg");
	this.shape_4.setTransform(499.1,229.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg1HANqIAA7TMBqPAAAIAAbTg");
	this.shape_5.setTransform(499.1,238.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Eg1HAMOIAA4bMBqPAAAIAAYbg");
	this.shape_6.setTransform(499.1,247.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg1HAKxIAA1iMBqPAAAIAAVig");
	this.shape_7.setTransform(499.1,257.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Eg1HAJVIAAypMBqPAAAIAASpg");
	this.shape_8.setTransform(499.1,266.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Eg1HAH5IAAvxMBqPAAAIAAPxg");
	this.shape_9.setTransform(499.1,275.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Eg1HAGcIAAs3MBqPAAAIAAM3g");
	this.shape_10.setTransform(499.1,284.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Eg1HAFAIAAp/MBqPAAAIAAJ/g");
	this.shape_11.setTransform(499.1,294.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Eg1HADkIAAnHMBqPAAAIAAHHg");
	this.shape_12.setTransform(499.1,303.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Eg1HACHIAAkOMBqPAAAIAAEOg");
	this.shape_13.setTransform(499.1,312.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},18).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).wait(1));

	// Capa 5
	this.text = new cjs.Text("La metodología IMCR se aplica con la participación de difrentes equipos. Observa cuáles son:", "18px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 934;
	this.text.parent = this;
	this.text.setTransform(34,-2.5);

	this.instance = new lib.T1_MC_con_todos_los_botones();
	this.instance.parent = this;
	this.instance.setTransform(443.8,298.8,1,1,0,0,0,249.9,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},18).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159.2,59,680,267.1);


// stage content:
(lib.AC_IMCR_OV_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*Iniciar Tema Primer pagina:
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
		
		//HABILITA EL BOTON SIGUIENTE
		//parent.habilitarSiguiente();
		
		//DESHABILITA EL BOTON SIGUIENTE:
		//parent.deshabilitarSiguiente();
		
		//DESHABILITA EL BOTON ATRAS
		//parent.deshabilitarAtras();
		
		Si necesitas habilitar el siguiente con un retraso en ciertos segundos
		utiliza la siguiente funcion reemplazando seconds en la cantidad de segundos:
		parent.retrasar_habilitar_siguiente(seconds);
		*/
		//parent.habilitarSiguiente();
		
		
		/* PPARA MARCAR TEMA COMPLETADO :
		Esta instruccion tambien habilita el boton siguiente y si estan activadas las
		banderillas tambien muestra la banderilla de final tema.
		*/
		
		parent.deshabilitarSiguiente();
		
		/*
		Si necesitas utilizar la funcion final tema retrasandola con ciertos segundos
		utiliza la siguiente funcion en lugar de la anterior reemplazando la palabra
		seconds por la cantidad de segundos a esperar:
		parent.retrasar_final_tema(seconds);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// barra titulo
	this.instance = new lib.barratitulotema();
	this.instance.parent = this;
	this.instance.setTransform(600,30,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MC con contenido
	this.instance_1 = new lib.MC_pag1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(602,336.8,1,1,0,0,0,524,241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,479.4);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;