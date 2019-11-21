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
	this.shape.graphics.f().s("#FF3300").ss(2,1,1,3,true).p("ADeAAQAABchBBBQhBBBhcAAQhbAAhBhBQhBhBAAhcQAAhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbg");
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
	this.text = new cjs.Text("Herramientas de gestión de incidentes", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
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
	this.frame_4 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-394.1,146.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v1();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(618.9,-147.4);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.botoninvisible = new lib.T1_Boton_invisible();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(48.1,109,1.23,1.222,0,0,0,480.8,227.2);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(4));

	// Transicion "destapa" el contenido
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mc();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(157.6,111,1.311,1.354,0,0,0,311.9,175);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(4));

	// Contenidos
	this.instance = new lib.instruccionclic();
	this.instance.parent = this;
	this.instance.setTransform(-149.6,215.1,1,1,0,0,0,19.5,19.5);

	this.text = new cjs.Text("PEOR \nESCENARIO", "15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 123;
	this.text.parent = this;
	this.text.setTransform(-50.9,327.7);

	this.text_1 = new cjs.Text("MEJOR RESULTADO POSIBLE", "15px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 123;
	this.text_1.parent = this;
	this.text_1.setTransform(-195.9,317.7);

	this.text_2 = new cjs.Text("¿Podemos activar (crear) un plan de contingencia?\n¿Contamos con una solución para el problema?", "15px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 194;
	this.text_2.parent = this;
	this.text_2.setTransform(139.5,94.7);

	this.text_3 = new cjs.Text("¿Con qué rapidez se implementará?", "15px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 183;
	this.text_3.parent = this;
	this.text_3.setTransform(138.1,216.7);

	this.text_4 = new cjs.Text("¿Con qué rapidez se verán afectadas las audiencias externas?", "15px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 183;
	this.text_4.parent = this;
	this.text_4.setTransform(-120.9,208.7);

	this.text_5 = new cjs.Text("¿Con qué rapidez surgirán las emociones o inquietudes?", "15px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 19;
	this.text_5.lineWidth = 183;
	this.text_5.parent = this;
	this.text_5.setTransform(-388.9,216.7);

	this.text_6 = new cjs.Text("¿Qué mercados se ven afectados?", "15px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 19;
	this.text_6.lineWidth = 123;
	this.text_6.parent = this;
	this.text_6.setTransform(-50.9,15.7);

	this.text_7 = new cjs.Text("¿Estamos seguros de que sabemos qué fue lo que salió mal?", "15px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 19;
	this.text_7.lineWidth = 183;
	this.text_7.parent = this;
	this.text_7.setTransform(138.1,5.7);

	this.text_8 = new cjs.Text("¿Qué activos se ven afectados?", "15px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 19;
	this.text_8.lineWidth = 123;
	this.text_8.parent = this;
	this.text_8.setTransform(-195.9,15.7);

	this.text_9 = new cjs.Text("¿Cuáles son las inquietudes que se crearán?\n\n¿Cuáles son las emociones que tendremos que controlar?", "15px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 19;
	this.text_9.lineWidth = 183;
	this.text_9.parent = this;
	this.text_9.setTransform(-388.9,15.7);

	this.text_10 = new cjs.Text("¿Cuál es la solución de\nnegocio?", "15px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 19;
	this.text_10.lineWidth = 183;
	this.text_10.parent = this;
	this.text_10.setTransform(138.1,-70.3);

	this.text_11 = new cjs.Text("¿Cuál es la magnitud del problema?", "15px 'Arial'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 19;
	this.text_11.lineWidth = 183;
	this.text_11.parent = this;
	this.text_11.setTransform(-120.9,-70.3);

	this.text_12 = new cjs.Text("¿Cuál es la naturaleza del problema?", "15px 'Arial'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 19;
	this.text_12.lineWidth = 183;
	this.text_12.parent = this;
	this.text_12.setTransform(-388.9,-70.3);

	this.text_13 = new cjs.Text("¿Qué ha ocurrido? / \n¿Qué ha salido mal?", "15px 'Arial'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 19;
	this.text_13.lineWidth = 238;
	this.text_13.parent = this;
	this.text_13.setTransform(-125.4,-151.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(2,1,1).p("AolkrIRLAAQBkAAAABkIAAGPQAABkhkAAIxLAAQhkAAAAhkIAAmPQAAhkBkAAg");
	this.shape_1.setTransform(-51.4,344.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AolEsQhkAAAAhkIAAmPQAAhkBkAAIRLAAQBkAAAABkIAAGPQAABkhkAAg");
	this.shape_2.setTransform(-51.4,344.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(2,1,1).p("AolkrIRLAAQBkAAAABkIAAGPQAABkhkAAIxLAAQhkAAAAhkIAAmPQAAhkBkAAg");
	this.shape_3.setTransform(-196.4,344.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AolEsQhkAAAAhkIAAmPQAAhkBkAAIRLAAQBkAAAABkIAAGPQAABkhkAAg");
	this.shape_4.setTransform(-196.4,344.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCCCCC").ss(2,1,1).p("AuSlsIclAAQBkAAAABkIAAIRQAABkhkAAI8lAAQhkAAAAhkIAAoRQAAhkBkAAg");
	this.shape_5.setTransform(139.8,237.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AuSFtQhkAAAAhkIAAoRQAAhkBkAAIclAAQBkAAAABkIAAIRQAABkhkAAg");
	this.shape_6.setTransform(139.8,237.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(2,1,1).p("A0ElsMAoJAAAQBkAAAABkIAAIRQAABkhkAAMgoJAAAQhkAAAAhkIAAoRQAAhkBkAAg");
	this.shape_7.setTransform(-125.9,236.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A0EFtQhkAAAAhkIAAoRQAAhkBkAAMAoJAAAQBkAAAABkIAAIRQAABkhkAAg");
	this.shape_8.setTransform(-125.9,236.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CCCCCC").ss(2,1,1).p("At+nzIb9AAQBkAAAABkIAAMfQAABkhkAAI79AAQhkAAAAhkIAAsfQAAhkBkAAg");
	this.shape_9.setTransform(140.1,134.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("At+H0QhkAAAAhkIAAsfQAAhkBkAAIb9AAQBkAAAABkIAAMfQAABkhkAAg");
	this.shape_10.setTransform(140.1,134.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCCCCC").ss(2,1,1).p("AuSlsIclAAQBkAAAABkIAAIRQAABkhkAAI8lAAQhkAAAAhkIAAoRQAAhkBkAAg");
	this.shape_11.setTransform(-386.9,237.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AuSFtQhkAAAAhkIAAoRQAAhkBkAAIclAAQBkAAAABkIAAIRQAABkhkAAg");
	this.shape_12.setTransform(-386.9,237.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CCCCCC").ss(2,1,1).p("AuSlsIclAAQBkAAAABkIAAIRQAABkhkAAI8lAAQhkAAAAhkIAAoRQAAhkBkAAg");
	this.shape_13.setTransform(140.1,35.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AuSFtQhkAAAAhkIAAoRQAAhkBkAAIclAAQBkAAAABkIAAIRQAABkhkAAg");
	this.shape_14.setTransform(140.1,35.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CCCCCC").ss(2,1,1).p("AuMkNIcZAAQBkAAAABkIAAFTQAABkhkAAI8ZAAQhkAAAAhkIAAlTQAAhkBkAAg");
	this.shape_15.setTransform(140.4,-51.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AuLEOQhlAAAAhkIAAlTQAAhkBlAAIcXAAQBlAAAABkIAAFTQAABkhlAAg");
	this.shape_16.setTransform(140.4,-51.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CCCCCC").ss(2,1,1).p("AuMkNIcZAAQBkAAAABkIAAFTQAABkhkAAI8ZAAQhkAAAAhkIAAlTQAAhkBkAAg");
	this.shape_17.setTransform(-388.5,-51.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AuLEOQhlAAAAhkIAAlTQAAhkBlAAIcXAAQBlAAAABkIAAFTQAABkhlAAg");
	this.shape_18.setTransform(-388.5,-51.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CCCCCC").ss(2,1,1).p("AuDtMIcHAAQBkAAAABkIAAXRQAABkhkAAI8HAAQhkAAAAhkIAA3RQAAhkBkAAg");
	this.shape_19.setTransform(-388.4,84.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AuDNNQhkAAAAhkIAA3RQAAhkBkAAIcHAAQBkAAAABkIAAXRQAABkhkAAg");
	this.shape_20.setTransform(-388.4,84.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CCCCCC").ss(2,1,1).p("Aolm3IRLAAQBkAAAABkIAAKnQAABkhkAAIxLAAQhkAAAAhkIAAqnQAAhkBkAAg");
	this.shape_21.setTransform(-51.4,41.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AolG4QhkAAAAhkIAAqnQAAhkBkAAIRLAAQBkAAAABkIAAKnQAABkhkAAg");
	this.shape_22.setTransform(-51.4,41.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CCCCCC").ss(2,1,1).p("Aolm3IRLAAQBkAAAABkIAAKnQAABkhkAAIxLAAQhkAAAAhkIAAqnQAAhkBkAAg");
	this.shape_23.setTransform(-196.4,41.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AolG4QhkAAAAhkIAAqnQAAhkBkAAIRLAAQBkAAAABkIAAKnQAABkhkAAg");
	this.shape_24.setTransform(-196.4,41.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CCCCCC").ss(2,1,1).p("A0EkNMAoJAAAQBkAAAABkIAAFTQAABkhkAAMgoJAAAQhkAAAAhkIAAlTQAAhkBkAAg");
	this.shape_25.setTransform(-122.8,-50.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A0EEOQhkAAAAhkIAAlTQAAhkBkAAMAoJAAAQBkAAAABkIAAFTQAABkhkAAg");
	this.shape_26.setTransform(-122.8,-50.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CCCCCC").ss(2,1,1).p("A4/kNMAx/AAAQBkAAAABkIAAFTQAABkhkAAMgx/AAAQhkAAAAhkIAAlTQAAhkBkAAg");
	this.shape_27.setTransform(-119.4,-131.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A4/EOQhkAAAAhkIAAlTQAAhkBkAAMAx/AAAQBkAAAABkIAAFTQAABkhkAAg");
	this.shape_28.setTransform(-119.4,-131.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E51C45").s().p("AhfBfQgngnAAg4QAAg3AngnQAogoA3AAQA3AAAoAoQAoAnAAA3QAAA4goAnQgoAog3AAQg2AAgpgogAhThSQgiAiAAAwQAAAxAiAiQAjAjAwAAQAxAAAigjQAigiAAgxQAAgwgigiQgigjgxAAQgwAAgjAjg");
	this.shape_29.setTransform(409.7,-83.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E51C45").s().p("ACzEGIh4h3QgCgCAAgEQAAgDACgCIAJgJIgggiQgzAjg+AAQgnAAglgPQgmgPgdgdQg7g7AAhTQAAhTA7g8QA7g7BUAAQBTAAA7A7QAzA0AHBJQAGBIgoA7IAhAhIAJgJQACgCAEAAQAEAAACACIB4B3QARASAAAYQAAAZgRAQQgSASgYAAQgZAAgRgSgAB3CzIBIBIQAMAMASAAQARAAANgMQAMgNAAgRQAAgSgMgMIhIhIgABOCJIAeAeIA7g7IgegegAAxBPIAgAfIAdgdIgfgggAiTj4QgjAOgaAbQg2A2AABMQAABNA2A1QA2A2BNAAQBMAAA2g2QA2g1AAhNQAAhMg2g2QgbgbghgOQgigOgkAAQgkAAgiAOg");
	this.shape_30.setTransform(417.5,-75.5);

	this.text_14 = new cjs.Text("Análisis del problema", "bold 16px 'Arial'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 17;
	this.text_14.lineWidth = 111;
	this.text_14.parent = this;
	this.text_14.setTransform(505.4,-94.7);

	this.text_15 = new cjs.Text("El propósito principal del análisis del problema es el responder a una serie de preguntas, las cuales conducen a una evaluación inicial de la gravedad del problema y de la probabilidad que existe de superarlo rápidamente.  ", "18px 'Arial'");
	this.text_15.lineHeight = 21;
	this.text_15.lineWidth = 269;
	this.text_15.parent = this;
	this.text_15.setTransform(351.9,-28.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DDDDDD").s().p("EgUcAmHQiWAAAAiWMAAAhHhQAAiWCWAAMAo5AAAQCWAAAACWMAAABHhQAACWiWAAg");
	this.shape_31.setTransform(482.2,127);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF9900").ss(2,1,1).p("AAH2UMApFAAAMAAAAupAAHqeIAAAdAAH2UIAAL2IK8AAIAAYGAAH4xIAACdAgVN2IrYAAIAA4UIL0AAEgpLAXrMAAAgt/MApSAAAAgVN2ILYAAAgVN2IAAK8");
	this.shape_32.setTransform(-127.1,52.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("Eg4UgBxMBwpAAAMg4VADjg");
	this.shape_33.setTransform(-128.9,294.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("Eg4UgByMBwpAAAMg4VADlg");
	this.shape_34.setTransform(-122.6,341);

	this.text_16 = new cjs.Text("¿Los incidentes de esta naturaleza tienen un perfil público alto?", "14px 'Arial'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 14;
	this.text_16.lineWidth = 190;
	this.text_16.parent = this;
	this.text_16.setTransform(-264.6,-89.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#CCCCCC").ss(2,1,1).p("A6ijvMA1FAAAQBkAAAABkIAAEXQAABkhkAAMg1FAAAQhkAAAAhkIAAkXQAAhkBkAAg");
	this.shape_35.setTransform(-135.2,372);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("A6iDwQhkAAAAhkIAAkXQAAhkBkAAMA1FAAAQBkAAAABkIAAEXQAABkhkAAg");
	this.shape_36.setTransform(-135.2,372);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_37.setTransform(-138.9,124.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_38.setTransform(-138.9,124.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CCCCCC").ss(2,1,1).p("AnzjiIPnAAQBkAAAABkIAAD9QAABkhkAAIvnAAQhkAAAAhkIAAj9QAAhkBkAAg");
	this.shape_39.setTransform(-8.1,67);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AnzDjQhkAAAAhkIAAj9QAAhkBkAAIPnAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_40.setTransform(-8.1,67);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#CCCCCC").ss(2,1,1).p("AnzjiIPnAAQBkAAAABkIAAD9QAABkhkAAIvnAAQhkAAAAhkIAAj9QAAhkBkAAg");
	this.shape_41.setTransform(-135.7,67);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AnzDjQhkAAAAhkIAAj9QAAhkBkAAIPnAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_42.setTransform(-135.7,67);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#CCCCCC").ss(2,1,1).p("AnzjiIPnAAQBkAAAABkIAAD9QAABkhkAAIvnAAQhkAAAAhkIAAj9QAAhkBkAAg");
	this.shape_43.setTransform(-265.8,67);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AnzDjQhkAAAAhkIAAj9QAAhkBkAAIPnAAQBkAAAABkIAAD9QAABkhkAAg");
	this.shape_44.setTransform(-265.8,67);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_45.setTransform(-138.9,-139.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_46.setTransform(-138.9,-139.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_47.setTransform(-138.9,1.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_48.setTransform(-138.9,1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_49.setTransform(-29.1,-68.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_50.setTransform(-29.1,-68.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_51.setTransform(-264,-68.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_52.setTransform(-264,-68.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_53.setTransform(-138.4,302.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_54.setTransform(-138.4,302.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_55.setTransform(-372,302.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_56.setTransform(-372,302.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_57.setTransform(97.8,243.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_58.setTransform(97.8,243.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_59.setTransform(-138.4,243.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_60.setTransform(-138.4,243.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_61.setTransform(-372,243.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_62.setTransform(-372,243.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_63.setTransform(97.8,183.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_64.setTransform(97.8,183.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_65.setTransform(-138.4,183.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_66.setTransform(-138.4,183.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#CCCCCC").ss(2,1,1).p("Avyj1IflAAQBkAAAABkIAAEjQAABkhkAAI/lAAQhkAAAAhkIAAkjQAAhkBkAAg");
	this.shape_67.setTransform(-372,183.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AvyD2QhkAAAAhkIAAkjQAAhkBkAAIflAAQBkAAAABkIAAEjQAABkhkAAg");
	this.shape_68.setTransform(-372,183.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E51C45").s().p("AgIDgIAAgCQhXgCg/g/QhBhBAAhcQAAhdBBhBQBChBBcAAQBdAABBBBQBCBBAABdQAABchCBBQgeAfgoAQQgmARgqABIAAACgAAfDLQA+gKAvgqQgUgSgUgKQgZAugsAigAgeDLQgrghgbgvQgUALgTARQAvAqA+AKIAAAAgAAIDHQAxghAcgzQgkgQgpgCgAhVBzQAdAzAwAhIAAhmQgpACgkAQgABsBrQAaAQASAQQAzg4ADhMIhJAAQgCA1gXAvgAiXCLQATgSAYgOQgXgvgBg1IhKAAQADBMA0A4gAAIBQQAtACAoASQAVgrACgyIhsAAgAhdBkQAogSAtgCIAAhJIhrAAQABAwAVAtgADOgJQgDhLgzg4QgUASgYANQAXAwACA0IBJAAIAAAAgAB0gJQgCgwgVgtQgoATgtABIAABJIBsAAIAAAAgAhzgJIBrAAIAAhJQgsgBgpgSQgUArgCAxgAjOgJIBKAAQACg0AWgwQgWgMgVgTQg0A4gDBLgAAIhjQApgBAkgRQgdgzgwgggAhVh1QAlARAoABIAAhmQgxAjgcAxgABkh8QAUgLAUgSQgvgqg+gJQAsAiAZAugAiLiZQATASAUALQAagwArggQg+AJguAqg");
	this.shape_69.setTransform(411.9,-75.2);

	this.text_17 = new cjs.Text("Sensibilidad del mercado", "bold 16px 'Arial'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 17;
	this.text_17.lineWidth = 111;
	this.text_17.parent = this;
	this.text_17.setTransform(505.4,-94.7);

	this.text_18 = new cjs.Text("Los incidentes suceden e impactan geografías específicas como países, regiones, grupos económicos, etc.\n\nDentro de cada geografía habrá sensibilidades o preocupaciones relacionadas con el incidente.\n\nEl incidente será ampliado si las sensibilidades de las personas o grupos de interés no son tomados en cuenta y no se habla con ellos.\n\nEsta herramienta provee una guía para atender estas sensibilidades.", "18px 'Arial'");
	this.text_18.lineHeight = 21;
	this.text_18.lineWidth = 262;
	this.text_18.parent = this;
	this.text_18.setTransform(351.9,-28.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FF9900").ss(2,1,1).p("AAQ0GIyfAAIAAq1ISfAAEAAQggzIAAB4ISJAAIAAK1IyJAAIAAKvIUkAAIAAKAI0kAAIyHAAIAAqAISHAAIAAKAIAAIkIAAXnMglEAAAIAA3nMAlEAAAMAklAAAIAAXnMgklAAA");
	this.shape_70.setTransform(-147.8,93.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#CCCCCC").ss(2,1,1).p("A4mqXMAxNAAAQBkAAAABkIAARnQAABkhkAAMgxNAAAQhkAAAAhkIAAxnQAAhkBkAAg");
	this.shape_71.setTransform(51.3,319.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("A4mKYQhkAAAAhkIAAxnQAAhkBkAAMAxNAAAQBkAAAABkIAARnQAABkhkAAg");
	this.shape_72.setTransform(51.3,319.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#CCCCCC").ss(2,1,1).p("A4mqXMAxNAAAQBkAAAABkIAARnQAABkhkAAMgxNAAAQhkAAAAhkIAAxnQAAhkBkAAg");
	this.shape_73.setTransform(-312,319.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("A4mKYQhkAAAAhkIAAxnQAAhkBkAAMAxNAAAQBkAAAABkIAARnQAABkhkAAg");
	this.shape_74.setTransform(-312,319.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#CCCCCC").ss(2,1,1).p("A4mqXMAxNAAAQBkAAAABkIAARnQAABkhkAAMgxNAAAQhkAAAAhkIAAxnQAAhkBkAAg");
	this.shape_75.setTransform(51.3,172.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("A4mKYQhkAAAAhkIAAxnQAAhkBkAAMAxNAAAQBkAAAABkIAARnQAABkhkAAg");
	this.shape_76.setTransform(51.3,172.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#CCCCCC").ss(2,1,1).p("A4mqXMAxNAAAQBkAAAABkIAARnQAABkhkAAMgxNAAAQhkAAAAhkIAAxnQAAhkBkAAg");
	this.shape_77.setTransform(-312,172.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("A4mKYQhkAAAAhkIAAxnQAAhkBkAAMAxNAAAQBkAAAABkIAARnQAABkhkAAg");
	this.shape_78.setTransform(-312,172.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#CCCCCC").ss(2,1,1).p("Eg1FgSiMBqLAAAQBkAAAABkMAAAAh+QAABkhkAAMhqLAAAQhkAAAAhkMAAAgh+QAAhkBkAAg");
	this.shape_79.setTransform(-130.9,-41.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Eg1FASjQhkABAAhlMAAAgh9QAAhlBkABMBqLAAAQBkgBAABlMAAAAh9QAABlhkgBg");
	this.shape_80.setTransform(-130.9,-41.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E51C45").s().p("ACIBjIhJgWIA6g0IhAAHIAJhNIgwAtIgphYIgXBjIgugnIAYBQIg6gMIAlAvIgrAcIA5AiIhNggIAnghIhChMIBSASIgihyIBJBAIAch8IA2B0IBEhBIgMBrIBkgLIhOBGIAVAGIASAGIAnAOIiGA2g");
	this.shape_81.setTransform(408.9,-65,0.616,0.616);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E51C45").s().p("AFoECIgBAAIi/g4ICaiLIiqATIAXjPIh/B7IhwjuIg8EKIh8hrIBADWIibggIAWAYIARAVIA/BRIhyBMICYBYIjLhUIARgOIBXhJIg6g+IhziIIDYAuIhYkrIC9CmIBJlFICQEwICxiqIggEaIEGgdIjLC3IAHACIDGBDIleCOg");
	this.shape_82.setTransform(410.9,-79.9,0.616,0.616);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FF6600").ss(2,1,1).p("ABHu2IcCAAMAAAAkzABHu2IAAnGA9IV9MAAAgkzIePAA");
	this.shape_83.setTransform(-140.8,185.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CCCCCC").ss(2,1,1).p("Ao83bIR5AAQBkAAAABkMAAAArvQAABkhkAAIx5AAQhkAAAAhkMAAAgrvQAAhkBkAAg");
	this.shape_84.setTransform(22.9,229.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ao8XcQhkAAAAhkMAAAgrvQAAhkBkAAIR5AAQBkAAAABkMAAAArvQAABkhkAAg");
	this.shape_85.setTransform(22.9,229.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#CCCCCC").ss(2,1,1).p("Ao83bIR5AAQBkAAAABkMAAAArvQAABkhkAAIx5AAQhkAAAAhkMAAAgrvQAAhkBkAAg");
	this.shape_86.setTransform(167.5,229.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ao8XcQhkAAAAhkMAAAgrvQAAhkBkAAIR5AAQBkAAAABkMAAAArvQAABkhkAAg");
	this.shape_87.setTransform(167.5,229.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_88.setTransform(-122.6,245);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_89.setTransform(-122.6,245);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_90.setTransform(-412.6,245);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_91.setTransform(-412.6,245);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_92.setTransform(-122.6,129.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_93.setTransform(-122.6,129.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_94.setTransform(-267.5,129.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_95.setTransform(-267.5,129.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_96.setTransform(-412.6,129.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_97.setTransform(-412.6,129.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_98.setTransform(170.9,0.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_99.setTransform(170.9,0.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_100.setTransform(23.5,0.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_101.setTransform(23.5,0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_102.setTransform(-122.6,0.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_103.setTransform(-122.6,0.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_104.setTransform(-267.5,0.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_105.setTransform(-267.5,0.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#CCCCCC").ss(2,1,1).p("ApPnsISfAAQBkAAAABkIAAMRQAABkhkAAIyfAAQhkAAAAhkIAAsRQAAhkBkAAg");
	this.shape_106.setTransform(-412.6,0.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("ApPHuQhkAAAAhkIAAsTQAAhjBkgBISfAAQBkABAABjIAAMTQAABkhkAAg");
	this.shape_107.setTransform(-412.6,0.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#CCCCCC").ss(2,1,1).p("A8+j/MA59AAAQBkAAAABkIAAE3QAABkhkAAMg59AAAQhkAAAAhkIAAk3QAAhkBkAAg");
	this.shape_108.setTransform(-124.7,-118.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("A8+EAQhkAAAAhkIAAk3QAAhkBkAAMA59AAAQBkAAAABkIAAE3QAABkhkAAg");
	this.shape_109.setTransform(-124.7,-118.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E51C45").s().p("Ag+AIQgEAAgCgCQgCgDgBgDQABgDACgCQACgCAEgBIB9AAQADABADACQADACgBADQABADgDADQgDACgDAAg");
	this.shape_110.setTransform(398.9,-61.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E51C45").s().p("AhTAIQgEAAgCgCQgCgCgBgEQABgDACgCQACgCAEgBICnAAQAJAAAAAIQgBAEgCACQgCACgEAAg");
	this.shape_111.setTransform(401,-67.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E51C45").s().p("AhTAJQgJAAAAgJQABgDACgCQACgCAEgBICnAAQAJABAAAHQAAAJgJAAg");
	this.shape_112.setTransform(401,-73.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E51C45").s().p("AgcAJQgDAAgDgDQgCgCAAgEQAAgCACgDQADgCADAAIA5AAQAIgBAAAIQAAAJgIAAg");
	this.shape_113.setTransform(423.5,-77.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E51C45").s().p("Ag5AIQgJAAAAgIQAAgIAJAAIBzAAQAJAAAAAIQAAAIgJAAg");
	this.shape_114.setTransform(420.5,-83.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E51C45").s().p("Ah1AIQgDAAgDgCQgCgDAAgDQAAgDACgCQADgCADgBIDrAAQAIAAAAAIQAAAIgIAAg");
	this.shape_115.setTransform(414.6,-90.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E51C45").s().p("AkVD9QgDgCABgGIAZhZQgPgeAAggQAAgsAcgnQAbgkAugTQgDgPAAgMQAAhMBBg3QBAg2BaAAQBbAABBA2QBAA3AABMQAAAmgSAiIAdBqQACAEgDAEQgDACgEAAIgBAAIh6gZQgUAIgWAGQgGA9g1AqQg2ArhKAAQgsAAgpgRIhnAVIgBAAQgEAAgDgDgAjKgFQgyApAAA6QAAAfAPAaQACAEgCACIgWBQIBcgUIAFABQAlARAsAAQBHAAAxgqQAzgpAAg6QAAg6gzgpQgxgphHAAQhHAAgyApgAEDBiIgahgQgBgDABgCQASggAAgkQAAhGg7gwQg8gyhUAAQhTAAg7AyQg8AwAABGQAAAKACAKQAjgMAkAAQBMAAA2AtQA3ArACA/QATgEATgJIADgBIBwAYg");
	this.shape_116.setTransform(409.4,-77.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FF6600").ss(2,1,1).p("AWp2NIWwAAMAAAAtEAWp2NMAAAAtEEgtYgWNIANAAIXWAAIAAfcAgG5+IAADxIWvAAA112NIVvAAAgG2HMAAAAwGEgtLAW3MAAAgtE");
	this.shape_117.setTransform(-123.4,71.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.text_15,p:{x:351.9,y:-28.4,text:"El propósito principal del análisis del problema es el responder a una serie de preguntas, las cuales conducen a una evaluación inicial de la gravedad del problema y de la probabilidad que existe de superarlo rápidamente.  ",font:"18px 'Arial'",textAlign:"",lineHeight:21.1,lineWidth:269}},{t:this.text_14,p:{x:505.4,y:-94.7,text:"Análisis del problema",font:"bold 16px 'Arial'",lineHeight:16.9,lineWidth:111,textAlign:"center"}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_13,p:{x:-125.4,y:-151.2,text:"¿Qué ha ocurrido? / \n¿Qué ha salido mal?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:238}},{t:this.text_12,p:{x:-388.9,y:-70.3,text:"¿Cuál es la naturaleza del problema?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183}},{t:this.text_11,p:{x:-120.9,y:-70.3,text:"¿Cuál es la magnitud del problema?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183}},{t:this.text_10,p:{x:138.1,y:-70.3,text:"¿Cuál es la solución de\nnegocio?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183}},{t:this.text_9,p:{x:-388.9,y:15.7,text:"¿Cuáles son las inquietudes que se crearán?\n\n¿Cuáles son las emociones que tendremos que controlar?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183}},{t:this.text_8,p:{x:-195.9,y:15.7,text:"¿Qué activos se ven afectados?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:123,textAlign:"center"}},{t:this.text_7,p:{x:138.1,y:5.7,text:"¿Estamos seguros de que sabemos qué fue lo que salió mal?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183}},{t:this.text_6,p:{x:-50.9,y:15.7,text:"¿Qué mercados se ven afectados?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:123,textAlign:"center"}},{t:this.text_5,p:{x:-388.9,y:216.7,text:"¿Con qué rapidez surgirán las emociones o inquietudes?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183,textAlign:"center"}},{t:this.text_4,p:{x:-120.9,y:208.7,text:"¿Con qué rapidez se verán afectadas las audiencias externas?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183,textAlign:"center"}},{t:this.text_3,p:{x:138.1,y:216.7,text:"¿Con qué rapidez se implementará?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:183}},{t:this.text_2,p:{x:139.5,y:94.7,text:"¿Podemos activar (crear) un plan de contingencia?\n¿Contamos con una solución para el problema?",font:"15px 'Arial'",lineHeight:18.8,lineWidth:194}},{t:this.text_1,p:{x:-195.9,y:317.7,text:"MEJOR RESULTADO POSIBLE",font:"15px 'Arial'",lineHeight:18.8,lineWidth:123}},{t:this.text,p:{x:-50.9,y:327.7,text:"PEOR \nESCENARIO",font:"15px 'Arial'",lineHeight:18.8,lineWidth:123}}]},1).to({state:[{t:this.shape_70},{t:this.shape_31},{t:this.text_18},{t:this.text_17},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.text_16},{t:this.text_15,p:{x:-29.1,y:-90.7,text:"¿La compañía, el activo o la marca tiene un perfil inusualmente alto?",font:"14px 'Arial'",textAlign:"center",lineHeight:13.6,lineWidth:190}},{t:this.text_14,p:{x:-266.9,y:53.9,text:"Dentro del \nsistema",font:"14px 'Arial'",lineHeight:13.6,lineWidth:112,textAlign:"center"}},{t:this.text_13,p:{x:-136,y:55.2,text:"Para un competidor",font:"14px 'Arial'",lineHeight:13.6,lineWidth:112}},{t:this.text_12,p:{x:-10.1,y:55.2,text:"Otros sectores \nde la industria",font:"14px 'Arial'",lineHeight:13.6,lineWidth:112}},{t:this.text_11,p:{x:98.1,y:223.3,text:"¿QUé condiciones comerciales se están presentando? ¿inusuales?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211}},{t:this.text_10,p:{x:-367.9,y:289.6,text:"¿Qué postura tienen que defender?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:210}},{t:this.text_9,p:{x:-139.9,y:289.6,text:"¿Con qué inquietud del negocio se puede relacionar el problema?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:210}},{t:this.text_8,p:{x:-138.3,y:355.6,text:"¿Qué susceptibilidades locales que impactan el manejo / resolución de este incidente?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:331,textAlign:"center"}},{t:this.text_7,p:{x:-139.4,y:-18.9,text:"¿Qué problemas de una naturaleza similar han tenido gran alcance público anteriormente?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211}},{t:this.text_6,p:{x:-373.7,y:172.4,text:"¿el gobierno central/local o una agencia gubernamental?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211,textAlign:"center"}},{t:this.text_5,p:{x:-140.8,y:163.3,text:"¿el consumidor, los medios de comunicación o cualquier otro grupo de interés especial?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211,textAlign:"center"}},{t:this.text_4,p:{x:99.3,y:170.1,text:"¿los socios comerciales, \nincluidos los clientes?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211,textAlign:"center"}},{t:this.text_3,p:{x:-373.7,y:224.1,text:"¿Qué iniciativas podrían estar relacionadas con nuestro negocio?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211}},{t:this.text_2,p:{x:-140.8,y:231.2,text:"¿Campañas de ONG’s, notas relacionadas en los medios?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211}},{t:this.text_1,p:{x:-140.9,y:-151.8,text:"Naturaleza del \nproblema",font:"14px 'Arial'",lineHeight:14.6,lineWidth:183}},{t:this.text,p:{x:-138.4,y:108.4,text:"¿Qué susceptibilidades especiales se crean?",font:"14px 'Arial'",lineHeight:13.6,lineWidth:211}},{t:this.shape_34}]},1).to({state:[{t:this.shape_83},{t:this.shape_31},{t:this.text_8,p:{x:351.9,y:-28.4,text:"Los incidentes muy probablemente afectan una amplia gama de personas y grupos de diferentes sectores. Si vamos a manejar un incidente de manera efectiva, tenemos que entender cómo la van a ver ellos – sus percepciones- y la forma en la que va a impactarlos.\n\nEsta herramienta ayuda a tomar en cuenta estas percepciones.\n",font:"18px 'Arial'",lineHeight:21.1,lineWidth:262,textAlign:""}},{t:this.text_7,p:{x:505.4,y:-94.7,text:"Análisis de impacto",font:"bold 16px 'Arial'",lineHeight:16.9,lineWidth:111}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.text_6,p:{x:-467.2,y:-137.9,text:"Define la manera en que el problema afectará las partes interesadas:",font:"16px 'Arial'",lineHeight:16.9,lineWidth:591,textAlign:""}},{t:this.text_5,p:{x:-467.2,y:-102.8,text:"● Otros enbotelladores\n● Consumidores\n● Clientes / vendedores\n● Distribución\n● Cadena de suministro\n● Socios en empresas de riesgo compartido\n● ONG\n● Grupos de trabajadores",font:"16px 'Arial'",lineHeight:16.9,lineWidth:326,textAlign:""}},{t:this.text_4,p:{x:-142.5,y:-102.8,text:"● El público en general\n● Empleados (en el trabajo)\n● Empleados (coomo individuos privados)\n● Ministerios / entidades reguladoras\n● Inversores / mercados financieros\n● Competidores\n● Otros",font:"16px 'Arial'",lineHeight:16.9,lineWidth:326,textAlign:""}},{t:this.text_3,p:{x:-312.7,y:117.2,text:"PERCEPCIONES\n\n¿Cómo percibirá el problema cada sector o audiencia?\n\n¿Cuáles son sus inquietudes?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:312}},{t:this.text_2,p:{x:50.9,y:113.3,text:"REALIDADES\n\n¿Qué impacto recibirá cada área del negocio?\n\n¿Cuáles son los vínculos entre las áreas comerciales?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:312}},{t:this.text_1,p:{x:-310.7,y:274.7,text:"ACCIONES\n\nDesarrolla un plan de acción para satisfacer las necesidades de las partes interesadas",font:"16px 'Arial'",lineHeight:16.9,lineWidth:303}},{t:this.text,p:{x:50.9,y:274.7,text:"COMUNICACIONES\n\nCrea mensajes para satisfacer las necesidades de las partes interesadas",font:"16px 'Arial'",lineHeight:16.9,lineWidth:303}}]},1).to({state:[{t:this.shape_117},{t:this.shape_31},{t:this.text_14,p:{x:351.9,y:-28.4,text:"Planear y ejecutar una estrategia de comunicación es crucial en el manejo de un incidente.\n\nEsta herramienta nos brinda una guía para establecer lo que debemos comunicar, cuándo debemos comunicarlo, quién necesita el mensaje y dónde lo compartiremos. \n",font:"18px 'Arial'",lineHeight:21.1,lineWidth:262,textAlign:""}},{t:this.text_13,p:{x:518.9,y:-85.5,text:"Comunicaciones",font:"bold 16px 'Arial'",lineHeight:16.9,lineWidth:138}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.text_12,p:{x:-121.7,y:-125.5,text:"Comuniaciones de Control IMCR",font:"16px 'Arial'",lineHeight:16.9,lineWidth:252}},{t:this.text_11,p:{x:-413.9,y:-3.7,text:"¿Qué?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:103}},{t:this.text_10,p:{x:-266.7,y:-3.7,text:"¿Cuándo?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:103}},{t:this.text_9,p:{x:-120.6,y:-3.7,text:"¿Quiénes?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:103}},{t:this.text_8,p:{x:21.1,y:-3.7,text:"¿Donde?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:103,textAlign:"center"}},{t:this.text_7,p:{x:168.5,y:-3.7,text:"¿Cómo?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:103}},{t:this.text_6,p:{x:-412.5,y:93.8,text:"¿Qué sabemos?\n\n¿Qué debemos hacer?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:124,textAlign:"center"}},{t:this.text_5,p:{x:-266.2,y:104.2,text:"Comunicación proactiva reactiva",font:"16px 'Arial'",lineHeight:16.9,lineWidth:124,textAlign:"center"}},{t:this.text_4,p:{x:-122.7,y:105.5,text:"Partes interesadas internas",font:"16px 'Arial'",lineHeight:16.9,lineWidth:124,textAlign:"center"}},{t:this.text_3,p:{x:-412.5,y:228.4,text:"¿Qué\npodemos decir?",font:"16px 'Arial'",lineHeight:16.9,lineWidth:124}},{t:this.text_2,p:{x:-122.7,y:217.9,text:"Partes interesadas externas",font:"16px 'Arial'",lineHeight:16.9,lineWidth:124}},{t:this.text_1,p:{x:19.7,y:124.6,text:"Medios tradicionales\n\nMedios sociales\n\nConferencia de prensa\n\nEntrevista en vivo\n\nHerramientas internas",font:"16px 'Arial'",lineHeight:16.9,lineWidth:124}},{t:this.text,p:{x:167.1,y:124.6,text:"Declaraciones\n\nPreguntas y respuestas\n\nFichas de información\n\nCapacitación\n\nMedios\n\nEtc.",font:"16px 'Arial'",lineHeight:16.9,lineWidth:124}}]},1).wait(1));

	// Sólo ventana
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F3F3F3").s().p("EhbSAshMAAAhZCMC2lAAAMAAABZCg");
	this.shape_118.setTransform(55.4,116.2);
	this.shape_118._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(1).to({_off:false},0).wait(4));

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
		var NumeroBotones = 4;
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
				/* Para v1 del Template Animate (AHORA DESCONTINUADO):
				parent.siguiente_verde();
				parent.comando("terminar");
				*/
		try{
			parent.final_tema();
		}catch(err){
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
		if(Secuencial){
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
	this.b4 = new lib.T3_btn_mc_1_linea();
	this.b4.parent = this;
	this.b4.setTransform(579.1,80.4,1.76,1.76,0,0,0,64,12.6);

	this.b3 = new lib.T3_btn_mc_1_linea();
	this.b3.parent = this;
	this.b3.setTransform(441.1,80.4,1.76,1.76,0,0,0,64,12.6);

	this.b2 = new lib.T3_btn_mc_1_linea();
	this.b2.parent = this;
	this.b2.setTransform(302.1,82.3,1.76,1.76,0,0,0,64,12.6);

	this.b1 = new lib.T3_btn_mc_1_linea();
	this.b1.parent = this;
	this.b1.setTransform(160.4,81.4,1.76,1.76,0,0,0,64.1,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4}]}).wait(2));

	// 0. Imagenes para botones y textos
	this.text = new cjs.Text("Comunicaciones", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 129;
	this.text.parent = this;
	this.text.setTransform(518.5,172.3);

	this.text_1 = new cjs.Text("Análisis de impacto", "16px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 111;
	this.text_1.parent = this;
	this.text_1.setTransform(376.2,172.3);

	this.text_2 = new cjs.Text("Sensibilidad del mercado", "16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 111;
	this.text_2.parent = this;
	this.text_2.setTransform(241.2,172.3);

	this.text_3 = new cjs.Text("Análisis del problema", "16px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 111;
	this.text_3.parent = this;
	this.text_3.setTransform(98.7,172.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("Ag+AIQgEAAgCgCQgCgDgBgDQABgDACgCQACgCAEgBIB9AAQADABADACQADACgBADQABADgDADQgDACgDAAg");
	this.shape.setTransform(507.5,124.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E51C45").s().p("AhTAIQgEAAgCgCQgCgCgBgEQABgDACgCQACgCAEgBICnAAQAJAAAAAIQgBAEgCACQgCACgEAAg");
	this.shape_1.setTransform(509.6,118.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E51C45").s().p("AhTAJQgJAAAAgJQABgDACgCQACgCAEgBICnAAQAJABAAAHQAAAJgJAAg");
	this.shape_2.setTransform(509.6,112.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E51C45").s().p("AgcAJQgDAAgDgDQgCgCAAgEQAAgCACgDQADgCADAAIA5AAQAIgBAAAIQAAAJgIAAg");
	this.shape_3.setTransform(532,108.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E51C45").s().p("Ag5AIQgJAAAAgIQAAgIAJAAIBzAAQAJAAAAAIQAAAIgJAAg");
	this.shape_4.setTransform(529.1,102.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E51C45").s().p("Ah1AIQgDAAgDgCQgCgDAAgDQAAgDACgCQADgCADgBIDrAAQAIAAAAAIQAAAIgIAAg");
	this.shape_5.setTransform(523.1,96.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E51C45").s().p("AkVD9QgDgCABgGIAZhZQgPgeAAggQAAgsAcgnQAbgkAugTQgDgPAAgMQAAhMBBg3QBAg2BaAAQBbAABBA2QBAA3AABMQAAAmgSAiIAdBqQACAEgDAEQgDACgEAAIgBAAIh6gZQgUAIgWAGQgGA9g1AqQg2ArhKAAQgsAAgpgRIhnAVIgBAAQgEAAgDgDgAjKgFQgyApAAA6QAAAfAPAaQACAEgCACIgWBQIBcgUIAFABQAlARAsAAQBHAAAxgqQAzgpAAg6QAAg6gzgpQgxgphHAAQhHAAgyApgAEDBiIgahgQgBgDABgCQASggAAgkQAAhGg7gwQg8gyhUAAQhTAAg7AyQg8AwAABGQAAAKACAKQAjgMAkAAQBMAAA2AtQA3ArACA/QATgEATgJIADgBIBwAYg");
	this.shape_6.setTransform(517.9,108.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E51C45").s().p("ACIBjIhJgWIA6g0IhAAHIAJhNIgwAtIgphYIgXBjIgugnIAYBQIg6gMIAlAvIgrAcIA5AiIhNggIAnghIhChMIBSASIgihyIBJBAIAch8IA2B0IBEhBIgMBrIBkgLIhOBGIAVAGIASAGIAnAOIiGA2g");
	this.shape_7.setTransform(378.4,122,0.616,0.616);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E51C45").s().p("AFoECIgBAAIi/g4ICaiLIiqATIAXjPIh/B7IhwjuIg8EKIh8hrIBADWIibggIAWAYIARAVIA/BRIhyBMICYBYIjLhUIARgOIBXhJIg6g+IhziIIDYAuIhYkrIC9CmIBJlFICQEwICxiqIggEaIEGgdIjLC3IAHACIDGBDIleCOg");
	this.shape_8.setTransform(380.4,107.1,0.616,0.616);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E51C45").s().p("AgIDgIAAgCQhXgCg/g/QhBhBAAhcQAAhdBBhBQBChBBcAAQBdAABBBBQBCBBAABdQAABchCBBQgeAfgoAQQgmARgqABIAAACgAAfDLQA+gKAvgqQgUgSgUgKQgZAugsAigAgeDLQgrghgbgvQgUALgTARQAvAqA+AKIAAAAgAAIDHQAxghAcgzQgkgQgpgCgAhVBzQAdAzAwAhIAAhmQgpACgkAQgABsBrQAaAQASAQQAzg4ADhMIhJAAQgCA1gXAvgAiXCLQATgSAYgOQgXgvgBg1IhKAAQADBMA0A4gAAIBQQAtACAoASQAVgrACgyIhsAAgAhdBkQAogSAtgCIAAhJIhrAAQABAwAVAtgADOgJQgDhLgzg4QgUASgYANQAXAwACA0IBJAAIAAAAgAB0gJQgCgwgVgtQgoATgtABIAABJIBsAAIAAAAgAhzgJIBrAAIAAhJQgsgBgpgSQgUArgCAxgAjOgJIBKAAQACg0AWgwQgWgMgVgTQg0A4gDBLgAAIhjQApgBAkgRQgdgzgwgggAhVh1QAlARAoABIAAhmQgxAjgcAxgABkh8QAUgLAUgSQgvgqg+gJQAsAiAZAugAiLiZQATASAUALQAagwArggQg+AJguAqg");
	this.shape_9.setTransform(241.5,112);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E51C45").s().p("AhfBfQgngnAAg4QAAg3AngnQAogoA3AAQA3AAAoAoQAoAnAAA3QAAA4goAnQgoAog3AAQg2AAgpgogAhThSQgiAiAAAwQAAAxAiAiQAjAjAwAAQAxAAAigjQAigiAAgxQAAgwgigiQgigjgxAAQgwAAgjAjg");
	this.shape_10.setTransform(93.1,103.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E51C45").s().p("ACzEHIh4h4QgCgCABgDQgBgEACgCIAJgJIgggiQgzAjg+AAQgnAAglgPQgmgPgdgdQg7g7AAhTQAAhTA7g8QA7g7BUAAQBTAAA7A7QAzA0AHBJQAGBIgoA6IAhAhIAJgIQADgCADAAQAEAAACACIB4B3QARASAAAYQAAAYgRASQgSARgYAAQgZAAgRgRgAB4CzIBHBHQAMANASAAQARAAAMgNQANgMAAgRQAAgSgNgLIhHhIgABOCJIAeAeIA7g8IgegdgAAxBPIAgAgIAegeIgggfgAiTj4QgjAOgaAaQg2A2AABOQAABMA2A1QA3A2BMAAQBNAAA1g2QA2g1AAhMQAAhOg2g2QgagagigOQgigOgkAAQgkAAgiAOg");
	this.shape_11.setTransform(100.9,111.5);

	this.instance = new lib.Imagenparaboton();
	this.instance.parent = this;
	this.instance.setTransform(520,111.7,1.356,1.356,0,0,0,39.5,39.6);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 240, 240, 0)];
	this.instance.cache(-2,-2,83,83);

	this.instance_1 = new lib.Imagenparaboton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(380,111.7,1.356,1.356,0,0,0,39.5,39.6);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 240, 240, 0)];
	this.instance_1.cache(-2,-2,83,83);

	this.instance_2 = new lib.Imagenparaboton();
	this.instance_2.parent = this;
	this.instance_2.setTransform(240,111.7,1.356,1.356,0,0,0,39.5,39.6);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 240, 240, 0)];
	this.instance_2.cache(-2,-2,83,83);

	this.instance_3 = new lib.Imagenparaboton();
	this.instance_3.parent = this;
	this.instance_3.setTransform(100,111.7,1.356,1.356,0,0,0,39.5,39.6);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 240, 240, 240, 0)];
	this.instance_3.cache(-2,-2,83,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,42.2,726,391);


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
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Capa 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg1YAS4MAAAglvMBqxAAAMAAAAlvg");
	this.shape.setTransform(517.1,197.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg1YARgMAAAgi/MBqxAAAMAAAAi/g");
	this.shape_1.setTransform(517.1,206.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Eg1YAQIMAAAggPMBqxAAAMAAAAgPg");
	this.shape_2.setTransform(517.1,214.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg1YAOwIAA9fMBqxAAAIAAdfg");
	this.shape_3.setTransform(517.1,223.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg1YANYIAA6uMBqxAAAIAAaug");
	this.shape_4.setTransform(517.1,232.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Eg1YAL/IAA39MBqxAAAIAAX9g");
	this.shape_5.setTransform(517.1,241.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Eg1YAKnIAA1NMBqxAAAIAAVNg");
	this.shape_6.setTransform(517.1,250.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg1YAJPIAAydMBqxAAAIAASdg");
	this.shape_7.setTransform(517.1,259);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Eg1YAH3IAAvtMBqxAAAIAAPtg");
	this.shape_8.setTransform(517.1,267.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Eg1YAGeIAAs7MBqxAAAIAAM7g");
	this.shape_9.setTransform(517.1,276.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Eg1YAFGIAAqLMBqxAAAIAAKLg");
	this.shape_10.setTransform(517.1,285.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Eg1YADuIAAnbMBqxAAAIAAHbg");
	this.shape_11.setTransform(517.1,294.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Eg1YACWIAAkrMBqxAAAIAAErg");
	this.shape_12.setTransform(517.1,303.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(10));

	// Capa 4
	this.instance = new lib.T1_MC_con_todos_los_botones();
	this.instance.parent = this;
	this.instance.setTransform(443.8,298.8,1,1,0,0,0,249.9,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(23));

	// Capa 5
	this.text = new cjs.Text("Cuando se presenta un incidente debemos contenerlo y mitigar sus efectos.\n\nDisponemos de cuatro herramientas para hacer la gestión de incidentes. Conócelas.", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 856;
	this.text.parent = this;
	this.text.setTransform(26.1,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.1,-20.4,859.7,90.4);


// stage content:
(lib.AC_IMCR_OV_16 = function(mode,startPosition,loop) {
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
		parent.deshabilitarSiguiente();
		
		//DESHABILITA EL BOTON ATRAS
		
		//parent.deshabilitarAtras();
		
		Si necesitas habilitar el siguiente con un retraso en ciertos segundos
		utiliza la siguiente funcion reemplazando seconds en la cantidad de segundos:
		parent.retrasar_habilitar_siguiente(seconds);
		*/
		//parent.habilitarSiguiente();
		
		parent.deshabilitarSiguiente();
		/* PPARA MARCAR TEMA COMPLETADO :
		Esta instruccion tambien habilita el boton siguiente y si estan activadas las
		banderillas tambien muestra la banderilla de final tema.
		*/
		
		
		
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
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,223.3);
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