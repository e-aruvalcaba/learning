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


(lib.parabgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("Ak8FHQgDgGAEgEIC9jhQgmgqgUgzQgVgyAAg3QAAg+AVg4QAWg8AsgsQACgCADgBQAFAAAEADIDGDHIBGhHIgVgVQgDgDAAgEQAAgDADgDIBUhUQACgDADAAQAFgBAEAEIA4A4QACADAAADQAAAEgCADIhVBUQgHAHgGgHIgVgWIhHBIIDQDPQADADAAAEQAAADgDADQgoAog3AXQgzAVg5ADIAACDQAAAEgDADQgCACgEAAImaAAIgBAAQgGAAgCgFgAkfE6IF9AAIAAh6Qg6AAg0gWQg1gWgrgqgAiojVQgSAzAAA4QAAA2AVAzQAWAxApApQApAqAzAVQAxAVA3AAQA3AAAzgSQA2gTApgmImWmVQglApgUA1gACjjkIArArIBHhHIgrgqg");
	this.shape.setTransform(31.8,47.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.parabgr, new cjs.Rectangle(0,14,63.7,66.4), null);


(lib.ondas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("AgnDMQgFAAgDgDQgDgDAAgFQAAgFAEgDQBLhMAAhsQAAhshLhMQgEgDgBgEQgBgFAEgEQAGgIAKAGIACACQBRBTABB0QgBB2hRBTIgBAAQgDADgEAAIgBAAg");
	this.shape.setTransform(11.6,20.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).wait(3));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E51C45").s().p("AgnDMQgFAAgDgDQgDgDAAgFQAAgFAEgDQBLhMAAhsQAAhshLhMQgEgDgBgEQgBgFAEgEQAGgIAKAGIACACQBRBTABB0QgBB2hRBTIgBAAQgDADgEAAIgBAAg");
	this.shape_1.setTransform(11.6,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E51C45").s().p("AgaCMQgEAAgEgDQgDgDAAgFQgBgFAFgDQAxgzAAhFQABhFgygzQgEgDAAgFQgBgDADgFQAHgIAJAHIACACQA4A5AABNQAABRg4A4IAAABQgDACgEAAIgCAAg");
	this.shape_2.setTransform(3.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},2).to({state:[]},7).to({state:[{t:this.shape_2}]},3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,40.9);


(lib.iconobocinagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("AihEMQgQAAgMgLQgLgMAAgQIAAihIgLAAQgcAAgUgUQgUgTAAgcIAAhHQAAgcAUgUQAUgUAcAAIB9AAQADAAADADQACACAAAEIAAAUQAsAAA0gRQBZgdBQhFIAAAAQAAgSAMgMQANgNARAAIAIAAQASAAAMANQANAMAAASIAAF7QAAARgNANQgMAMgSAAIgIAAQgRAAgNgMQgMgMAAgSQhRhFhYgdQgzgRgtAAIAAAUQAAAIgIAAIgeAAIAAAaIA5BcQACAEgCAEQgCAFgGAAIgxAAIAAAeQAAAQgLAMQgLALgQAAgAi3DlQAAAJAHAHQAGAGAJAAIAHAAQAIAAAHgGQAGgHAAgJIAAihIgyAAgAhSC2Igig4IAAA4IAiAAgADTjyQgHAHAAALIAAF7QAAAKAHAIQAIAHAKAAIAIAAQALAAAHgHQAIgIAAgKIAAl7QAAgLgIgHQgHgIgLAAIgIAAQgKAAgIAIgAATAnQBXAbBRBDIAAjVQiGAiiDAAIAABFIADAAQArAAAzAQgAj3hqQgPAPAAAVIAABHQAAAVAPAPQAPAOAVAAIB0AAIAAisIh0AAQgVAAgPAPgAAThsQgzAQguAAIAAAdQCDAACGgjIAAhoQhRBDhXAbg");
	this.shape.setTransform(36.6,35,1.308,1.308);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iconobocinagr, new cjs.Rectangle(0,0,73.2,70.1), null);


(lib.flechacursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDgAgXApQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAbA4IAggQIgcg4QgCgCACgDQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAmAAIhyhyIAACfIAggYQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAg");
	this.shape.setTransform(7.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechacursor, new cjs.Rectangle(0,0,14.2,22.4), null);


(lib.diseñotarjeta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E9E9").s().p("AQMbSIkmAAIgkAAIhtAAIjwAAIiRAAI5UAAQiWAAAAiWMAAAg0NMAwtAAAMAAAA0NQAACWiWAAg");
	this.shape.setTransform(155.9,191.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E51C45").s().p("A4WBTIAAgQQAAiVCWAAMAsBAAAQCWAAAACVIAAAQg");
	this.shape_1.setTransform(155.9,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.diseñotarjeta, new cjs.Rectangle(0,0,311.9,365.9), null);


(lib.T3_Señalar_btn_gr_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.388)").s().p("AoKCuIAAlbIQVAAIAAFbg");
	this.shape.setTransform(52.3,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_gr_1_linea, new cjs.Rectangle(0,0,104.7,34.9), null);


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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgUCuIAAlbIApAAIAAFbg");
	this.shape.setTransform(2.1,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.071)").s().p("Ah9CuIAAlbID7AAIAAFbg");
	this.shape_1.setTransform(12.6,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.122)").s().p("AjaCuIAAlbIG1AAIAAFbg");
	this.shape_2.setTransform(21.9,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.169)").s().p("AkrCuIAAlbIJXAAIAAFbg");
	this.shape_3.setTransform(30,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.208)").s().p("AlvCuIAAlbILfAAIAAFbg");
	this.shape_4.setTransform(36.8,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.239)").s().p("AmnCuIAAlbINPAAIAAFbg");
	this.shape_5.setTransform(42.4,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.267)").s().p("AnTCuIAAlbIOnAAIAAFbg");
	this.shape_6.setTransform(46.8,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.282)").s().p("AnyCuIAAlbIPlAAIAAFbg");
	this.shape_7.setTransform(49.9,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.294)").s().p("AoECuIAAlbIQJAAIAAFbg");
	this.shape_8.setTransform(51.7,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AoKCuIAAlbIQVAAIAAFbg");
	this.shape_9.setTransform(52.3,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,4.2,34.9);


(lib.T3_btn_activo_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,1,3,true).p("AgZg5IA4A5Ig4A6");
	this.shape.setTransform(181.1,17.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_linea, new cjs.Rectangle(177.1,10.7,8.5,14.3), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Herramienta de detección de señales", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,73.5), null);


(lib.instruccionclic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Capa 3
	this.text = new cjs.Text("Haz clic en cada tarjeta para ver su contenido", "16px 'Arial'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 345;
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


(lib.iconoparab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(2));

	// Capa 2
	this.instance = new lib.ondas();
	this.instance.parent = this;
	this.instance.setTransform(66.2,12.6,1,1,-40.7,0,0,8.4,20.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.instance_1 = new lib.parabgr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.9,40.1,1.129,1.129,0,0,0,38.8,40.1);
	this.instance_1.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:40.2,scaleX:1,scaleY:1,x:38.8,y:40.2,alpha:1},12).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,10.7,71.9,74.9);


(lib.iconobocina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// Capa 2
	this.instance = new lib.ondas();
	this.instance.parent = this;
	this.instance.setTransform(91.9,29.1,1,1,0,0,0,8.3,20.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1));

	// Capa 1
	this.instance_1 = new lib.iconobocinagr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.6,35.1,1.286,1.286,0,0,0,36.6,35);
	this.instance_1.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,y:35,alpha:1},14).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-9.9,94.1,90.1);


(lib.T3_Señalar_btn_mc_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_gr_1_linea();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},7).to({alpha:0},8).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.7,34.9);


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
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoKCuIAAlbIA4AAIMTAAIDKAAIAAFbg");
	this.shape.setTransform(52.3,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(214,214,214,0.008)").s().p("AmJAAIALAAIL9AAIALAAg");
	this.shape_1.setTransform(45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.7,34.9);


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
	this.shape.graphics.f("rgba(102,204,0,0.008)").s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQALAAAIAIQAJAIgBALQABALgJAJQgIAIgLAAQgKAAgJgIg");
	this.shape.setTransform(171.2,214.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_linea();
	this.activo.parent = this;
	this.activo.setTransform(82.3,304.8,1,1,-90,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_linea();
	this.resalte.parent = this;
	this.resalte.setTransform(155.2,81.7,1.703,5.961,0,0,0,91.1,13.7);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(109,74.4,1.703,5.953,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.2,219);


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
p.nominalBounds = new cjs.Rectangle(0,-58,1200,73.5);


(lib.tarjetagrafic02b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Necesitamos sondear constantemente nuestro entorno interno y externo en busca de señales iniciales de advertencia. \n\nLas señales pueden pueden originarse desde adentro o desde el exterior de la Compañía.\n\nLas señales pueden detectarse por medios técnicos (mediante instrumentos o sensores) o son detectadas por las personas.\n", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 293;
	this.text.parent = this;
	this.text.setTransform(7.8,69);

	this.instance = new lib.iconoparab();
	this.instance.parent = this;
	this.instance.setTransform(153.7,41.8,0.428,0.428,0,0,0,39.1,40.2);

	this.instance_1 = new lib.diseñotarjeta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.9,182.9,1,1,0,0,0,186.9,182.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjetagrafic02b, new cjs.Rectangle(0,0,311.9,400.5), null);


(lib.tarjetagrafic02a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.iconoparab();
	this.instance.parent = this;
	this.instance.setTransform(147.1,176,1,1,0,0,0,38.8,40.2);

	this.instance_1 = new lib.diseñotarjeta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.9,182.9,1,1,0,0,0,186.9,182.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjetagrafic02a, new cjs.Rectangle(0,0,311.9,365.9), null);


(lib.tarjetagrafic01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Esta herramienta ayuda a identificar alertas, con el fin de evitar que se conviertan en incidentes. \n\nTodos los incidentes elevados envían señales antes de que ocurran. Si estas señales se recogen, se amplifican y se actúa sobre ellas con efectividad, muchos incidentes elevados podrían evitarse.\n", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 290;
	this.text.parent = this;
	this.text.setTransform(10.2,69);

	this.instance = new lib.iconobocina();
	this.instance.parent = this;
	this.instance.setTransform(157.7,42.4,0.495,0.495,0,0,0,50.1,35);

	this.instance_1 = new lib.diseñotarjeta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.9,182.9,1,1,0,0,0,186.9,182.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjetagrafic01b, new cjs.Rectangle(0,0,311.9,378.4), null);


(lib.tarjetagrafic01a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.iconobocina();
	this.instance.parent = this;
	this.instance.setTransform(162.1,178.9,1,1,0,0,0,50.1,35);

	this.instance_1 = new lib.diseñotarjeta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.9,182.9,1,1,0,0,0,186.9,182.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjetagrafic01a, new cjs.Rectangle(0,0,311.9,365.9), null);


(lib.tarjetamovie02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_16 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(18));

	// Capa 2
	this.instance = new lib.tarjetagrafic02b();
	this.instance.parent = this;
	this.instance.setTransform(158,182.9,0.035,1,0,0,0,186.9,182.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({scaleX:1,x:186.9},8,cjs.Ease.get(1)).wait(1).to({scaleX:0.04,x:158},8).to({_off:true},1).wait(8));

	// Capa 1
	this.instance_1 = new lib.tarjetagrafic02a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(179.8,184.3,1,1,0,0,0,179.8,184.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:186.9,regY:182.9,scaleX:0.04,x:158,y:182.9},7,cjs.Ease.get(-1)).to({_off:true},1).wait(18).to({_off:false},0).to({regX:179.8,regY:184.3,scaleX:1,x:179.8,y:184.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311.9,365.9);


(lib.tarjetamovie01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_16 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(18));

	// Capa 2
	this.instance = new lib.tarjetagrafic01b();
	this.instance.parent = this;
	this.instance.setTransform(172.5,182.9,0.035,1,0,0,0,186.9,182.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({scaleX:1,x:186.9},8,cjs.Ease.get(1)).wait(1).to({scaleX:0.04,x:172.5},8).to({_off:true},1).wait(8));

	// Capa 1
	this.instance_1 = new lib.tarjetagrafic01a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.9,182.9,1,1,0,0,0,186.9,182.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.04,x:172.5},7,cjs.Ease.get(-1)).to({_off:true},1).wait(18).to({_off:false},0).to({scaleX:1,x:186.9},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311.9,365.9);


(lib.mc_contenidodetarjetas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		Logs:
		
		07/11/2019 por Adrian Ruvalcaba Garcia:
				Corregido el resalte del primer boton en modo secuencial.
		10/11/2019 por Adrian Ruvalcaba Garcia:
				- Comentada la funcionalidad para desbloquear la actividad 
				al entrar al tema cuando ya se visito.
				- Arreglado el error al intentar sacar el resalte del boton 0 al inicio.
		16/11/2019 por Adrian Ruvalcaba Garcia:
				- Implementacion de codigo de botones rectangulares en tarjetas v3
				- Quitados resaltes y saca resaltes.
				- Agregado soporte para reproducir animacion de tarjetas al clic del 
				  boton correspondiente.
		Ultima modificacion 	19/11/2019 por Adrian Ruvalcaba Garcia:
				- Agregado soporte para deshabilitar el boton clickeado, para activar y desactivar
				  esta caracteristica es necesario cambiar la variable "desactivar" a false o true.
		*/
		
		this.stop();
		var root = this;
		this.stage.enableMouseOver();
		// Cambiar aqui por el numero de botones totales:
		var NumeroBotones = 2;
		// Para que los botones se activen de forma secuencial cambiar la siguiente variable a true
		var Secuencial = true;
		//Para que solo giren 1 vez y se deshabiliten cambiar la siguiente variable a true
		root.desactivar = true;
		quitaActivos();
		// Para hacer que los botones sean secuenciales:
		if (Secuencial) {
			EnSecuencia();
		}
		
		// Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
		
		}
		
		function SacaResaltes(n) {
			debugger
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position < 1) {
				root["b" + (n + 1)].resalte.alpha = 100;
			}
		
			try {
				root["b" + n].resalte.alpha = 0;
			} catch (error) {}
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
				/*Para v2 del template */
				// Si hay que avanzar al siguiente frame de un tema
				//parent.habilitar_siguiente(); //Para habilitar boton siguiente y llamar banderilla si esta habilitada
				// Si es el final del tema:	
				//parent.final_tema(); //Para habilitar boton siguiente y llamar banderilla final si esta habilitada
			}
		}
		
		function quitaActivos() {
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				root['t' + i].n = i;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
		}
		function quitarListeners(boton) {
			//console.log("Quitar listener al boton "+boton);
			root["b" + boton].removeEventListener("mousedown", click);
			root["b" + boton].removeEventListener("pressmove", click);
			root["b" + boton].removeEventListener("rollover", over);
			root["b" + boton].removeEventListener("rollout", out);
			root['b' + boton].cursor = "default";
		}
		
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root["t" + (c.currentTarget.n)].play();
		
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			c.currentTarget.rollo_mc.gotoAndStop(0);
			if (root.desactivar) {
				quitarListeners(c.currentTarget.n);
			}
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		function firstClick(mc) {
			mc.gotoAndStop(1);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
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
		iniciar();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botones
	this.instance = new lib.instruccionclic();
	this.instance.parent = this;
	this.instance.setTransform(201.4,422.7,1,1,0,0,0,19.5,19.5);

	this.b2 = new lib.T3_btn_mc_1_linea();
	this.b2.parent = this;
	this.b2.setTransform(504.2,22.2,1.76,1.76,0,0,0,64.1,12.6);

	this.b1 = new lib.T3_btn_mc_1_linea();
	this.b1.parent = this;
	this.b1.setTransform(141.9,22.2,1.76,1.76,0,0,0,64.1,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.instance}]}).wait(1));

	// Movies
	this.t2 = new lib.tarjetamovie02();
	this.t2.parent = this;
	this.t2.setTransform(548.7,187.2,1,1,0,0,0,155.5,187.2);

	this.t1 = new lib.tarjetamovie01();
	this.t1.parent = this;
	this.t1.setTransform(180.2,184.3,1,1,0,0,0,151.2,184.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_contenidodetarjetas, new cjs.Rectangle(29,0,676,427.3), null);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// Capa 2
	this.instance = new lib.mc_contenidodetarjetas();
	this.instance.parent = this;
	this.instance.setTransform(659.1,239.4,1,1,0,0,0,529,182.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61));

	// Capa 5
	this.text = new cjs.Text("Esta herramienta nos permite detectar y comunicar oportunamente las señales de alertas y advertencias:\n", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 820;
	this.text.parent = this;
	this.text.setTransform(44,-16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42,-18,823.8,501.8);


// stage content:
(lib.AC_IMCR_OV_15 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,637.1);
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