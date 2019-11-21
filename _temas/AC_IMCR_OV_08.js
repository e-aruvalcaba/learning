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


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAcIgnAnIgbgbIAngnIgogoIAcgcIAoAoIAngnIAbAbIgnAnIAoAoIgcAcg");
	this.shape.setTransform(6.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,13.5,13.5), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTCOIAAgoIAnAAIAAAogAgKBIIgLjVIArAAIgKDVg");
	this.shape.setTransform(2.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,4.4,28.5), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFbEqIq1AEIFYpbg");
	this.shape.setTransform(34.7,30.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(-1,-1,71.5,62.3), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAhQgDgBgBgDQgCgDABgDQAIgaASgRQAJgIAIgDQADgBADABQADABABADQACAHgHADQgGADgIAGQgNANgHAWQgBAGgGAAg");
	this.shape.setTransform(15.5,12.9,1.753,1.753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiNCbQgDAAgDgDQgCgEABgDIALgkQAFgQAVgHIAAiAQAAguAhghQAhghAtAAQAuAAAhAhQAhAhAAAuIAACAQAVAHAFAQIALAjIAAADQAAAIgHAAgACECMIgJgbQgBgFgHgFQgIgEgIAAIjFAAQgIAAgIAEQgHAFgBAFIgJAbIEHAAgAARhAQAHAHAAAKIAACDIBJAAIAAh+QAAgogcgdQgdgcgoAAQgnAAgdAcQgcAdAAAoIAAB+IBJAAIAAiDQAAgKAHgHQAHgIAJABQAKgBAHAIgAgGg1QgCACAAAEIAACDIARAAIAAiDQAAgEgCgCQgDgDgEgBQgDABgDADg");
	this.shape_1.setTransform(26.2,27.2,1.753,1.753);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,52.4,54.4), null);


(lib.Imagenparaboton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().rr(-149.2,-30.6,298.4,61.2,6.2);
	this.shape.setTransform(149.2,30.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagenparaboton, new cjs.Rectangle(0,0,298.4,61.2), null);


(lib.icon05mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAIQgEgEAAgFQAAgGAEgEIABAAQAEgFAGAAQAFAAAEAFIAPAOIgCABIgZANg");
	this.shape.setTransform(13,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfgLQgEgEAAgGQAAgGAEgEIAAAAQAEgFAGAAQAHAAAEAFIAuAuIgCABIgCABQAAAEgEAEIgLAMg");
	this.shape_1.setTransform(14.6,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgzgcQgEgFAAgGQAAgGAEgEIABAAQAEgFAGABQAGgBAEAFIBWBWIgFAFIgJAGIgJAGIgBABg");
	this.shape_2.setTransform(16.6,15.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhKg3QgEgEAAgGQAAgGAEgEIAAAAQAFgFAFAAQAHAAAEAFICDCDIABABIgCACQgCADgFAAQAAAEgDAGIgFAJg");
	this.shape_3.setTransform(18.9,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAzBWIiViWQgFgEAAgGQAAgGAFgEIAAAAQAEgFAGAAQAHAAADAFICECDQADAEAFAAQADAAADgDIAQgQIAAAMIABAGQACACAEABQAFABAHAAIAAAAIgfAgQgEAEgGAAQgGAAgFgEg");
	this.shape_4.setTransform(21.4,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQBWIiWiWQgEgEAAgGQAAgGAEgEIAAAAQAFgFAFAAQAHAAAEAFICDCDQAEAEAEAAQAEAAADgDIBEhDIAAAAQAEgEAHAAQAGAAAEAEIARARQgPAIgIAIIgBACIgDgBQgFAAgDADIhEBEQgDAEgHAAQgFAAgFgEg");
	this.shape_5.setTransform(24.9,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDBWIiXiWQgEgEAAgGQAAgGAEgEIAAAAQAFgFAFAAQAHAAAEAFICECDQADAEAEAAQAEAAADgDIBEhDIAAAAQAEgEAHAAQAGAAAEAEIA5A4IgLAHQgJAFgFAFIgjgkQgDgDgEAAQgFAAgDADIhEBEQgDAEgHAAQgFAAgEgEg");
	this.shape_6.setTransform(26.9,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABMAMQgEgDgEAAQgEAAgDADIhDBDQgEAEgGAAQgGAAgEgEIiXiVQgEgFAAgFQAAgHAEgEIAAAAQAEgEAGAAQAHAAAEAEICECEQAEADAEAAQAEAAADgDIBDhCIAAgBQAEgEAGAAQAHAAAEAEIBnBoIgGAEQgIADgDADIgFAIg");
	this.shape_7.setTransform(29.2,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA5gGQgEgDgEAAQgEAAgDADIhDBCQgEAEgGAAQgGAAgEgEIiXiVQgEgFAAgFQAAgHAEgEIAAAAQAEgEAGAAQAHAAAEAEICECEQAEADAEAAQAEAAADgDIBDhCIAAgBQAEgEAGAAQAHAAAEAEICMCNIABABIgNAIIgJAKg");
	this.shape_8.setTransform(31.1,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACDCHIgBgBIAAgCIAAAAIAagaQACgDAAgEQAAgFgDgDIh7h6QgDgDgEAAQgEAAgEADIhCBDQgEAEgGAAQgGAAgFgEIiXiWQgEgEAAgGQAAgGAEgEIABAAQAEgFAGAAQAGAAAEAFICFCEQADADAEAAQAEAAADgCIBDhEIAAAAQAEgEAHAAQAGAAAEAEICNCMQACADAFAAQAEAAADgDIAagaIACAAIACABIAGAwIgNAIIgaATIgMAJIgMAKg");
	this.shape_9.setTransform(33.6,24.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ADjCQIAAAAIhkgNIgBgBIAAgDIABAAIAZgZQADgEAAgDQAAgFgDgDIh7h6QgEgDgEAAQgEAAgDADIhDBDQgEADgGAAQgGAAgEgDIiXiWQgEgEAAgGQAAgGAEgEIAAAAQAEgFAGAAQAHAAAEAFICECEQAEADAEABQAEAAADgDIBDhEIAAAAQAEgEAGAAQAHAAAEAEICMCMQADADAFAAQAEAAADgDIAagaIACAAIABABIANBkIAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgBAAg");
	this.shape_10.setTransform(33.9,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// Capa 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AnFFbIAAAAQgGgGAAgJIAAqXQAAgJAGgGQAGgGAIAAQAJAAAHAGQAGAGAAAJIAAJzQAAAGAEAEQAEAFAGAAINKAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAItuAAIAAAAQgIAAgGgGg");
	this.shape_11.setTransform(32,24.5,0.696,0.696);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,49.1);


(lib.icon04mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah3FaQgQAAgMgMQgMgMAAgQIAAk4QAAg8AngtQAfgmAAgxIAAgtIgHgFQgIgJAAgKIAAgzQAAgKAIgIIAAgBQAIgHAKgBICdAAQAKABAIAHIABABQAHAIAAAKIAAAzQAAAKgHAJIgBAAIgHAFIAAAtQAAAxAgAmQAmAtAAA8IAAE4QAAAQgMAMQgMAMgQAAgAiDEyQAAAFADADQAEAEAFAAIDvAAQAFAAAEgEIABAAQACgDAAgFIAAgoIkHAAgAiDDvIEHAAIAAi7IkHAAgAg+jGQAAA7gmAuQgfAlAAAyIAAAeIEHAAIAAgeQAAgygfglQgmguAAg7IAAgrIh9AAgAhMkNICZAAIAAgwIiZAAg");
	this.shape.setTransform(16,34.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon04mc, new cjs.Rectangle(0,0,32,69.1), null);


(lib.icon03mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA+FJQgGgHAFgHIAAAAIAAAAQARgaACgYQADgYgIgpQgJgnAAgSQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAgBgBIgDgCIgEAAIgEADQgQAaAAAhQAAAIgHADIgBABQgHADgFgFIAAgBQgigmAAg/IgBgEQAAAAgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAIgEAAQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAIAAAAQgjBCAmBGQADAGgDAGIgBAAQgEAFgIgCQgogKgQguQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgEgBIgDACQgBAAAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgOBAArAzQAGAJgHAHQgGAFgHgFIAAgBQhhhOgVhQQgShJAih/IAAABQAehpgJguQgBgFADgEIABAAQAFgEAHACQA7AUANBJQAAADADABQACACADAAQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAhgrABg9QAChAgegyIgBgBQgDgHAFgGIABAAQADgFAHACIAAAAQBKAcApBFQAmBCgCBUQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABIABAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAFAAIAAAAIADgEIAAAAQAFgNAEggQADggAAgYQAAgIAGgBIABAAQAHgCAEAFQBdBwgNCfQgOCoiABOIgBAAQgDADgDAAQgDAAgDgDgABoBZQADAGgFAHIAAABQgNASgCATIAAABQAAARAHAmQAKAtgDAZIAAAEQABAAAAABQAAAAABABQAAAAAAAAQABABAAAAIAEABIABAAIADgCQBLhMAIh4IAAgBQAJhvg1hgIABAAQgBAAAAgBQAAAAgBgBQAAAAgBAAQgBgBAAAAQgDgBgDABQgCACgBADIgCAEIAAACQgJBMgtAgIAAAAQgFADgGgDQgFgFAAgGQAQhOgXhFQgXhJg6goIgEAAIgEABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQABAAAAABQAUA+gPBAQgRBBgtAjQgFAFgHgDQgFgDAAgHQAAhBgjgcIgFgCIAAAAQgDAAgCADQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABAdgYBfQgbBiAEA6QAGBDAwA2QABABAAAAQAAABABAAQAAAAABABQAAAAABAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABgBIABAAIADgCIAAgBIAAgEQgIg7Ajg/IAAgBQAEgGAHACQAJACAAAHQAAAeAEANIACAEIAFABQABAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIgBAAQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAAAQgDhOBGg5IABAAQAHgFAGAFQAHAFgEAHIAAABIgBAAQgWAzARA1QAAAAAAABQAAABABAAQAAAAABABQAAAAABAAIgBAAIAEABIAFgBIACgDIAAAAQARgzAxgQIAFAAQAFAAAEAEg");
	this.shape.setTransform(21.8,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon03mc, new cjs.Rectangle(0,0,43.7,66.3), null);


(lib.flechacursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDgAgXApQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAbA4IAggQIgcg4QgCgCACgDQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAmAAIhyhyIAACfIAggYQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAg");
	this.shape.setTransform(7.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechacursor, new cjs.Rectangle(0,0,14.2,22.4), null);


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
	this.text = new cjs.Text("Tipos de eventos", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42B2CC").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
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
	this.text = new cjs.Text("Haz clic en cada botón para ver el contenido", "16px 'Arial'");
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


(lib.icon04mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Capa 2
	this.instance = new lib.Símbolo4();
	this.instance.parent = this;
	this.instance.setTransform(15.9,48.8,0.259,0.259,0,0,0,6.8,6.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1,x:16},9,cjs.Ease.get(1)).wait(1));

	// Capa 1
	this.instance_1 = new lib.icon04mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,34.6,0.19,0.19,0,0,0,15.8,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:16,scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,28.1,6.1,13.1);


(lib.icon03mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(2));

	// Capa 2
	this.instance = new lib.icon03mc();
	this.instance.parent = this;
	this.instance.setTransform(20.9,60.9,0.154,0.154,0,0,0,21.8,33.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,x:21.8,y:33.1},12,cjs.Ease.get(1)).wait(2));

	// Capa 1
	this.instance_1 = new lib.icon03mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20.9,60.9,0.154,0.154,0,0,0,21.8,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:21.8,y:33.1},12,cjs.Ease.get(1)).to({alpha:0},6).to({_off:true},6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,55.8,6.7,10.2);


(lib.icon02mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Capa 2
	this.instance = new lib.Símbolo3();
	this.instance.parent = this;
	this.instance.setTransform(34.1,35.8,1,1,0,0,0,2.1,14.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(3));

	// Capa 1
	this.instance_1 = new lib.Símbolo2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.8,30.2,0.158,0.158,0,0,0,34.8,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:34.7,regY:30.2,scaleX:1,scaleY:1,x:34.7},14,cjs.Ease.get(1)).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.1,25.3,11.3,9.9);


(lib.icon01mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(2));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAIQgDgBgCgBQgDgDAAgDQAAgCADgCQACgDADAAIAzAAQAIAAAAAHQAAAHgIABg");
	this.shape.setTransform(64.8,24.2,1.753,1.753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAWIghggQgCgCAAgEQAAgDACgCQADgCADAAQADAAACACIAhAgQAFAGgFAFQgCACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(63.2,44.4,1.753,1.753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVAXQgCgDAAgDQAAgDACgDIAgggQAGgFAFAFQACACAAADQAAADgCADIghAhQgCACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(59.7,4.3,1.753,1.753);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAIQgIgBAAgHQAAgHAIAAIAzAAQADAAADADQACACAAACQAAADgCADQgDABgDABg");
	this.shape_3.setTransform(5.9,24.2,1.753,1.753);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAWQgFgFAFgGIAgggQADgCADAAQADAAACACQAFAFgFAGIghAgQgCACgDAAQgDAAgCgCg");
	this.shape_4.setTransform(7.6,44.4,1.753,1.753);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AALAXIggghQgCgDAAgDQAAgDACgCQAFgFAFAFIAhAgQACADAAADQAAADgCADQgCACgDAAQgEAAgCgCg");
	this.shape_5.setTransform(11.2,4.3,1.753,1.753);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).to({state:[]},3).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},3).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},3).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(35.4,33.2,0.147,0.147,0,0,0,26.2,27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).to({_off:true},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.6,29.2,7.7,8);


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
	this.shape.graphics.f("rgba(102,204,0,0.008)").s().p("AgTAUQgHgJgBgLQABgLAHgIQAJgIAKAAQALAAAJAIQAHAIAAALQAAALgHAJQgJAIgLAAQgKAAgJgIg");
	this.shape.setTransform(4.4,18.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_linea();
	this.activo.parent = this;
	this.activo.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_linea();
	this.resalte.parent = this;
	this.resalte.setTransform(148.2,13.8,1.624,1,0,0,0,91.2,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(104,12.5,1.624,1,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.5,34.9);


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
	this.frame_5 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// parche, btn invisible y btn cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjMejMAAAg9FIGZAAMAAAA9Fg");
	this.shape.setTransform(-394.1,146.9);

	this.m2mc1_Cerrar = new lib.btn_cerrar_v1();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(1464.6,-84.6);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.botoninvisible = new lib.T1_Boton_invisible();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(1179.7,111.2,0.647,0.972,0,0,0,480.8,227.2);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(5));

	// Transicion "destapa" el contenido
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mc();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(438.1,119.3,0.725,1.107,0,0,0,312.1,175);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(5));

	// Contenidos
	this.instance = new lib.instruccionclic();
	this.instance.parent = this;
	this.instance.setTransform(208.4,202,1,1,0,0,0,19.5,19.5);

	this.instance_1 = new lib.icon01mc1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(388.9,-37.7,1,1,0,0,0,35.4,30.2);

	this.text = new cjs.Text("Alerta", "bold 16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 349;
	this.text.parent = this;
	this.text.setTransform(389.9,10);

	this.text_1 = new cjs.Text("Es una señal preliminar de un evento que no ha ocurrido pero que, en caso de concretarse, podría afectar al negocio.\n\nEjemplos:\n\nEventos que podrían impactar a las operaciones o generar preguntas de los medios de comunicación.\n\n● Rumores que se difunden en redes sociales\n● Experiencias negativas de competidores \n● Posibles desastres naturales.\n", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 500;
	this.text_1.parent = this;
	this.text_1.setTransform(135.2,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49C4E8").s().p("EgtOACqIAAlTMBadAAAIAAFTg");
	this.shape_1.setTransform(390.2,18);

	this.instance_2 = new lib.icon02mc2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(390.4,-36.7,1,1,0,0,0,34.7,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AFDA33").s().p("EgtOACqIAAlTMBadAAAIAAFTg");
	this.shape_2.setTransform(390.2,18);

	this.instance_3 = new lib.icon03mc3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(388.6,-38.9,1,1,0,0,0,21.8,33.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("EgtOACqIAAlTMBadAAAIAAFTg");
	this.shape_3.setTransform(390.2,18);

	this.instance_4 = new lib.icon04mc4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(388.7,-39.2,1,1,0,0,0,16,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC000").s().p("EgtOACqIAAlTMBadAAAIAAFTg");
	this.shape_4.setTransform(390.2,18);

	this.instance_5 = new lib.icon05mc5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(387.9,-36.5,1,1,0,0,0,32,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FC0000").s().p("EgtOACqIAAlTMBadAAAIAAFTg");
	this.shape_5.setTransform(390.2,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.text_1,p:{text:"Es una señal preliminar de un evento que no ha ocurrido pero que, en caso de concretarse, podría afectar al negocio.\n\nEjemplos:\n\nEventos que podrían impactar a las operaciones o generar preguntas de los medios de comunicación.\n\n● Rumores que se difunden en redes sociales\n● Experiencias negativas de competidores \n● Posibles desastres naturales.\n"}},{t:this.text,p:{text:"Alerta"}},{t:this.instance_1}]},1).to({state:[{t:this.shape_2},{t:this.text_1,p:{text:"Es una señal de un evento que está ocurriendo y que podría convertirse en un incidente que afecte al negocio.\n\nEjemplos:\n\n● Una protesta potencial.\n● Una tendencia de consumo.\n● Una percepción o pregunta sobre la calidad del producto."}},{t:this.text,p:{text:"Advertencia"}},{t:this.instance_2}]},1).to({state:[{t:this.shape_3},{t:this.text_1,p:{text:"Es un evento concreto que puede impactar adversamente el negocio si no es identificado a tiempo y manejado efectivamente.\n\nCon frecuencia se presentan sin avisos o señales claras y suelen llamar la atención de los medios locales.\n\n\nEjemplos:\n\n● Retiro voluntario de producto del mercado.\n● Incidentes industriales, por ejemplo, fuga de amoníaco o \n   derrames de materia prima en la comunidad.\n● Fraude cometido por algún empleado.\n"}},{t:this.text,p:{text:"Incidente"}},{t:this.instance_3}]},1).to({state:[{t:this.shape_4},{t:this.text_1,p:{text:"Una situación definida, menos común que un incidente, que podría afectar adversamente a una unidad de negocio o a la imagen y reputación de la marca, si no es identificado con prontitud y manejada con efectividad\n\nEjemplos:\n\n● Fuertes cuestionamientos sobre nuestros productos o procesos\n● Paro no programado de la operación (huelga, manifestación, \n   accidente grave)\n● Publicidad que ofende a segmentos vulnerables de la población.\n"}},{t:this.text,p:{text:"Incidente elevado"}},{t:this.instance_4}]},1).to({state:[{t:this.shape_5},{t:this.text_1,p:{text:"Un incidente elevado se convierte en crisis cuando crece y afecta negativamente la imagen y reputación de la Compañía y sus marcas registradas.\n\nEjemplos:\n\nCasos en que no es posible manejar los incidentes aisladamente, y es preci\n\n● Autoridades gubernamentales\n● Organizaciones no gubernamentales (ONGs)\n● Clientes y socios de negocio\n"}},{t:this.text,p:{text:"Crisis"}},{t:this.instance_5}]},1).wait(1));

	// Sólo ventana
	this.text_2 = new cjs.Text("Un evento es un acontecimiento no planeado que puede llegar a impactar el negocio. \n\nConoce los tipos de eventos a los que estamos expuestos.", "16px 'Arial'");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 421;
	this.text_2.parent = this;
	this.text_2.setTransform(195,55.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3F3F3").s().p("EgtOAg4MAAAhBvMBadAAAMAAABBvg");
	this.shape_6.setTransform(390.2,130.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2}]}).to({state:[{t:this.shape_6}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.6,-48.6,1032.9,391);


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
		var NumeroBotones = 5;
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
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position < 1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			try {
				console.log("saca resaltes al actual");
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
				console.log(" Todo visitado ");
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
	this.text = new cjs.Text("Nuestra primera tarea es identificar los diferentes tipos de eventos a los que podemos enfrentarnos", "17px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 503;
	this.text.parent = this;
	this.text.setTransform(670,-49.8);

	this.mc_contenido = new lib.T1_Ventana_con_sus_contenidos_MC();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(273.6,90.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_contenido},{t:this.text}]}).wait(2));

	// 1. Botones
	this.b5 = new lib.T3_btn_mc_1_linea();
	this.b5.parent = this;
	this.b5.setTransform(88.2,381,1.76,1.76,0,0,0,64,12.6);

	this.b4 = new lib.T3_btn_mc_1_linea();
	this.b4.parent = this;
	this.b4.setTransform(88.2,314.3,1.76,1.76,0,0,0,64,12.6);

	this.b3 = new lib.T3_btn_mc_1_linea();
	this.b3.parent = this;
	this.b3.setTransform(88.2,245.9,1.76,1.76,0,0,0,64,12.6);

	this.b2 = new lib.T3_btn_mc_1_linea();
	this.b2.parent = this;
	this.b2.setTransform(88.2,178.4,1.76,1.76,0,0,0,64,12.6);

	this.b1 = new lib.T3_btn_mc_1_linea();
	this.b1.parent = this;
	this.b1.setTransform(88.4,111,1.76,1.76,0,0,0,64.1,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5}]}).wait(2));

	// 0. Imagenes para botones y textos
	this.text_1 = new cjs.Text("Crisis", "18px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 256;
	this.text_1.parent = this;
	this.text_1.setTransform(120.9,379.5);

	this.text_2 = new cjs.Text("Incidente elevado", "18px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 256;
	this.text_2.parent = this;
	this.text_2.setTransform(120.9,311.3);

	this.text_3 = new cjs.Text("Incidente", "18px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 256;
	this.text_3.parent = this;
	this.text_3.setTransform(120.9,243.6);

	this.text_4 = new cjs.Text("Advertencia", "18px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 256;
	this.text_4.parent = this;
	this.text_4.setTransform(120.9,178.8);

	this.text_5 = new cjs.Text("Alerta", "18px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 256;
	this.text_5.parent = this;
	this.text_5.setTransform(121,111.5);

	this.instance = new lib.Imagenparaboton();
	this.instance.parent = this;
	this.instance.setTransform(124.8,390.1,1,1,0,0,0,149.2,30.6);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0)];
	this.instance.cache(-2,-2,302,65);

	this.instance_1 = new lib.Imagenparaboton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.8,322,1,1,0,0,0,149.2,30.6);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 192, 0, 0)];
	this.instance_1.cache(-2,-2,302,65);

	this.instance_2 = new lib.Imagenparaboton();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.8,253.8,1,1,0,0,0,149.2,30.6);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
	this.instance_2.cache(-2,-2,302,65);

	this.instance_3 = new lib.Imagenparaboton();
	this.instance_3.parent = this;
	this.instance_3.setTransform(124.8,186.6,1,1,0,0,0,149.2,30.6);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 175, 218, 51, 0)];
	this.instance_3.cache(-2,-2,302,65);

	this.instance_4 = new lib.Imagenparaboton();
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.8,118.8,1,1,0,0,0,149.2,30.6);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 73, 196, 232, 0)];
	this.instance_4.cache(-2,-2,302,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-51.8,1064.5,485);


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
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F09F5B").s().p("AgfAUIgEgGIgHAAIAngHQAngLAHgZQABAOgKAOQgSAagtAFIgCgKg");
	this.shape.setTransform(239.8,23.3,0.818,0.818);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#213B63").s().p("AhWCuQiRgmgXgMIAPhKIEFAlQAUgZAghVQAHg/AUgxQAphiBSAoQAnASgLA1QgHAhgsBcQggBEgcAqQgLAQg7BLQgCACgGAAQgdAAh4ggg");
	this.shape_1.setTransform(229.2,46.7,0.818,0.818);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AixhPIFXgTIALBIQAFBLgbATQgjAYhbAGIhUABg");
	this.shape_2.setTransform(241.3,80.4,0.818,0.818);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AhAF1QgUgCgVgHIgRgGIgXk+QgXk/ABgIQACggBFgaQBHgcBaAAIBnCzQgugDgvABQhcABAAATIApH9QgXApgzAAIgOgBg");
	this.shape_3.setTransform(223,104.4,0.818,0.818);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#575757").s().p("AhVAfQgMAAgKgJQgJgJAAgNQAAgLAJgKQAKgJAMAAICrAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
	this.shape_4.setTransform(241.2,136.7,0.818,0.818);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#575757").s().p("Ai/AtQgTAAgNgNQgNgNAAgTQAAgRANgOQANgNATAAIGAAAQASAAANANQANAOAAARQAAATgNANQgNANgSAAg");
	this.shape_5.setTransform(242.6,90.3,0.818,0.818);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#878787").s().p("AgqFbQgMgMAAgSIAbp5QAAgRAMgNQANgMAQAAQARAAAMAMQAMANAAARIgcJ5QABASgMAMQgMAMgQAAQgSAAgMgMg");
	this.shape_6.setTransform(259.7,64.6,0.818,0.818);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ABABAB").s().p("AgSE0QgIgIAAgLIAApAQAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMIAAJAQAAALgIAIQgHAIgMAAQgKAAgIgIg");
	this.shape_7.setTransform(240.8,112.2,0.818,0.818);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#213B63").s().p("AhPA1QgygPgEgQQgLgmAYADQASADASAAQATgBAJgFIAZgOQASgJAHgGQAHgJAEgBQAEgCADADQAKAJAVAIQAXAJANgDIAdgNQAQgHADAHQAFAOADATQAEAYgEANIACAEQABAFgCAGQgEAOg4gBIhPADIgZAAQgmAAgNgEg");
	this.shape_8.setTransform(214.1,135.4,0.818,0.818);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F1F1F").s().p("Ag8FUIg2gOIgWksQgVksABgIQACgbBAgQQA8gPBbAAIBhCSQgsgDgrABQhWABAAASIAlHgQgVAmgvAAIgOgBg");
	this.shape_9.setTransform(227.7,103.6,0.818,0.818);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D2C3D").s().p("AhJAyQgvgOgEgPQgLgkAXADQARADARgBQASgBAIgEIAYgNQAQgJAGgGQAHgHAEgCQAEgCADADQAIAJAVAIQAVAIAMgDIAbgMQAPgHADAHQAFANADASQAEAWgFAMIACAEQACAEgCAGQgDANg1gBIhKADIgaAAQgiAAgLgDg");
	this.shape_10.setTransform(219.4,131.9,0.818,0.818);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDB171").s().p("ABQAmIg0gXQgtgQgPADQgYAFgTgGQgTgFARgLQAWgOAmgGQAngHAPALQAJAGAfANQAOAygJAAIgCAAg");
	this.shape_11.setTransform(205.7,53.7,0.818,0.818);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#213B63").s().p("AhxBLQgNgxgFg3QgGg7AFgqQAFgwAdgzQAPgaAOgQIBngrIASAbQApAPAUBXQAOA5AAA1IAIFxIjJAVQgfiwgQhAg");
	this.shape_12.setTransform(243.9,51,0.818,0.818);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#260D08").s().p("AAbB4QgFgIgEgJQgIgTAEgIQAHgOgHgWQgGgXgNgDQgLgBgFAQQgEAOgEgGIgng3QgggtgEAFQgJgPAKgfIAMgbQADAOAlAAIBLgBQAkAEAWAeQAPAWALAsQAIAcgdAwIgeArIggAfg");
	this.shape_13.setTransform(243.9,13.6,0.818,0.818);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDB171").s().p("AglB6QgBgCgDgDQgDgDgBgCQgCgDAAgIQgBgIgBgDIgEgGIgHAAIgWAAQgOAAgEgEQgFgEABgLIACgNQAAgCgDgCIgHgFQgDgDADgEIAEgEQgJgJAFgDQAFgEABgDQABgEgKgHQgIgEADgGIAMgMQASgTgFgMIgCgHQAAgEAFgNQAHgVAVgPQALgIAPgHQARgWASgCQAYgCAjAUQAeARATAWQARATAAAcQAAAegVAfQgSAcgQAfIgNAaIgTAKIAAADQABAJAKAAQACAAABAAQABAAAAAAQABABAAAAQAAAAAAAAQgUAPgUADIgPABQACgEgCgHIgnAUQAKgOgEgPg");
	this.shape_14.setTransform(241.3,17.5,0.818,0.818);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDB171").s().p("AAOB8QgFgPgSgVQgLgLgVAAIgWAAQgOAAgEgEQgFgEABgLIACgNQAAgCgDgCIgHgFQgDgDADgEIAEgEQgJgJAFgDQAFgEABgDQABgEgKgGQgIgFADgGIAMgMQASgTgFgMIgCgHQAAgEAFgNQAHgWAXgPQALgIAOgHIAYA7QBUApACAAQAYAEgdA7QgiBHABAGQABAJAKAAQACAAABAAQABAAABAAQAAAAAAABQAAAAAAAAQgUAPgUADIgQABQACgEgCgHg");
	this.shape_15.setTransform(239.7,18.1,0.818,0.818);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDB171").s().p("AgHBAQgGgWgfAFQgdAGgJgJQgFgGADgOIAIgBQACAAAAgGIAAgEIAdgZQAGAGAHABQAHABAHgGIBnhdQAFAggKAqQgFAWgIAVQgEAPARA3Qg1AOgmAGQAIgYgEgQg");
	this.shape_16.setTransform(240.5,20.1,0.818,0.818);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D2C3D").s().p("AhWCpQiJgjgagMIAShMQAoADDMAhQASgaAbhXIAKgkQAMgmAQgcQAyhYBSAiQAiAPgUArQgNAcgvBaQgcBFgZAqQgMAUg0BMQgBACgIAAQgcAAhygdg");
	this.shape_17.setTransform(227.3,44.5,0.818,0.818);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F09F5B").s().p("ABNAeQgNgDgmgHQgrgHgQABQgfACgGAAQgSgCAMgMQATgRAogJQAjgJAJAGQAJAFAfAHQAVAtgJAAIgCAAg");
	this.shape_18.setTransform(204.5,51,0.818,0.818);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDB171").s().p("AAMAsQgEgBgHgFIgKgDQgIgCgEgDQgJgGgDgFQgBgCgEgCQgGgCgEgGQgFgHANgRQAKgOAMgJQAFgEAHACQAEACACADIAGACIAGADQAEAEAKAEIAHAGQAFAFADABQAFABADAFQADAFgBAEQgBAEgIALQgIAMgHAIQgGAGgGAAIgDAAg");
	this.shape_19.setTransform(143.3,40.3,0.818,0.818);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EDAB72").s().p("AAAAiIgWggQgXggADgDQADgCATAHIAkAOQAQAFAHANQADAHABAGQgQABgHALQgDAGgKAAIgHgBg");
	this.shape_20.setTransform(146.3,39.6,0.818,0.818);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJACQgBAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAIATACQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_21.setTransform(126.4,37.2,0.818,0.818);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AADAEIgHgFIAAgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAHAFQAAAAAAAAQAAABABAAQAAAAgBAAQAAAAAAAAIgBABIgBAAg");
	this.shape_22.setTransform(129,35.6,0.818,0.818);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEABQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIAIABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_23.setTransform(129.3,34.2,0.818,0.818);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEACQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAGgCIACABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgHADIgBAAIgBgBg");
	this.shape_24.setTransform(128.9,32.8,0.818,0.818);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAFIgBgCIAEgGQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABAAAAQAAAAgBAAIgDAHIgBAAIgBAAg");
	this.shape_25.setTransform(127.8,31.7,0.818,0.818);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEACIAAgCIAHgCQAAAAABgBQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABQgBAAAAAAQAAAAAAAAIgHADIgBABIgBgCg");
	this.shape_26.setTransform(124,35,0.818,0.818);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAHABQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAg");
	this.shape_27.setTransform(123.6,33.6,0.818,0.818);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AADAEIgGgEQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIACAAIAHAEQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABIgBAAIgBAAg");
	this.shape_28.setTransform(124,32.2,0.818,0.818);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AABAFIgEgIIABgCIACABIADAIQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBABIgBgBg");
	this.shape_29.setTransform(125.1,31.3,0.818,0.818);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAAEIAAgIQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIAAAIQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAgCg");
	this.shape_30.setTransform(126.4,31.1,0.818,0.818);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKADQgEAAAAgDQAAgFAEABIAVACQAEABAAADQAAADgEAAg");
	this.shape_31.setTransform(126.4,37.3,0.818,0.818);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJACQgEAAAAgDQAAgBAAAAQABgBAAAAQAAAAABAAQABAAABAAIATACQABAAABAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgBAAgBAAg");
	this.shape_32.setTransform(126.4,36.6,0.818,0.818);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKADQgEgBAAgDQAAgDAEAAIAVACQAEABAAADQAAADgEAAg");
	this.shape_33.setTransform(126.4,36.6,0.818,0.818);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAAEQgGgBgBgGIAPACQgBAFgGAAIgBAAg");
	this.shape_34.setTransform(126.4,37.8,0.818,0.818);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKAfIAAgNQgBgHgHgLQgDgGAAgGQAAgKAGgFQAHgGAIABQAJABAHAHQAGAHAAAKQAAAGgDAEQgHALAAAGIAAANg");
	this.shape_35.setTransform(126.4,34.6,0.818,0.818);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#99DBE8").s().p("ACWCYIkrgTQgFAAAAgGIAAkRQAAgFAFABIErASQAFABAAAFIAAERQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgCABIgBAAg");
	this.shape_36.setTransform(126.5,33.6,0.818,0.818);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#575757").s().p("ACWCXIkrgTQgFAAAAgFIAAkRQAAgGAFABIErAUQAFgBAAAGIAAERQAAAFgEAAIgBgBg");
	this.shape_37.setTransform(126.5,33.9,0.818,0.818);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ABhArIkngSQgEgBADgCIBvhAQABgBADAEQAEAEACAAIEVAGIACACIgCABIhcBEIgIABIgCAAg");
	this.shape_38.setTransform(130.5,42.4,0.818,0.818);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#878787").s().p("AguAmIgBgCIAAgEIBdhFQAFADgEAEIhXBCIgGACIAAAAg");
	this.shape_39.setTransform(143.1,43.1,0.818,0.818);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#99DBE8").s().p("AAOCUQgFgFAAgGIgwkRQAAgGAEgFQAFgEAGgBQAHABAEAEQAFAFAAAGIAwERQAAAGgEAFQgFAEgGAAQgHAAgEgEg");
	this.shape_40.setTransform(178.9,41.2,0.818,0.818);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#99DBE8").s().p("AhqALQgJAAgGgFQgGgFAAgGIABgFQAEAMAQAAIDWAAQAPAAAEgMIABAFQAAAGgGAFQgGAFgIAAg");
	this.shape_41.setTransform(191.4,53.6,0.818,0.818);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D8E9ED").s().p("AhYAHQgGAAgFgEQgFgDAAgGIDRAAQAAAGgFADQgFAEgHAAg");
	this.shape_42.setTransform(191.4,52.2,0.818,0.818);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhqARQgJAAgGgFQgGgFAAgHQAAgGAGgFQAGgFAJAAIDWAAQAIAAAGAFQAGAFAAAGQAAAHgGAFQgGAFgIAAg");
	this.shape_43.setTransform(191.4,53.1,0.818,0.818);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D8E9ED").s().p("AgRADIARgSIgGgHIgEgIIAVAJIAHANIgHAog");
	this.shape_44.setTransform(48.5,28.6,0.818,0.818);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D8E9ED").s().p("Ag1gIIAQgTIARgIIgFAMIBPAaIgLAhg");
	this.shape_45.setTransform(42.6,28.6,0.818,0.818);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#99DBE8").s().p("AgHgQIg0gnIBhgWQgFARANBGQAGAkAHAgQgNgvg1gvg");
	this.shape_46.setTransform(46.9,34.2,0.818,0.818);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#213B63").s().p("AhVCnQhWhsgahsQgShIAagbQAKgMAmgIIARApQAUAyANAwQAPA5ASAdQAJAOAGACIDxgkIAHA2QhFAYhHAVQhuAhgeAAQgIAAgCgCg");
	this.shape_47.setTransform(48.7,42,0.818,0.818);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#213B63").s().p("AhhhlIAeBAQAgBBAJAMQAFAHA8gDQAegBAdgDIgRA3IiOAHg");
	this.shape_48.setTransform(47.6,42.8,0.818,0.818);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#213B63").s().p("AhbghQgEgOBdAJQAuAFAvAHIABAWIijAuIgUhLg");
	this.shape_49.setTransform(47.1,54,0.818,0.818);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#213B63").s().p("AhsAqQgagpgIgcIAAgQIADgBQgBgLAAgOQgBgdAGgPIAHgXQAFgMAIgEQADgCAOgEIAUgEQAKARBAgBQA/gBgIgNIAUADQAPAFAGAIQAmA4AKAoQAGAVgGAYIgPA8IgIAlQgGAbAAALIAAAVQghAGg0ABIhWADQgPhCghg3g");
	this.shape_50.setTransform(45.5,41,0.818,0.818);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FDB171").s().p("AAcAVQgPgCgigBQgjgBgJABQgHABAJgSIAKgRIAOgCQAPgCAGgCQAJgDAkAKQAoALACAMQABANgNACIgEABQgIAAgRgDg");
	this.shape_51.setTransform(67.9,48,0.818,0.818);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhTAEIAAgHICnAAIAAAHg");
	this.shape_52.setTransform(80.9,48.3,0.818,0.818);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhcAHIAAgNIC5AAIAAANg");
	this.shape_53.setTransform(80.8,48.6,0.818,0.818);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#213B63").s().p("AiJgMIAbh3QACAAANAqQAOAuAJARQARAdATA9ICmgFIAIAqIjEAfg");
	this.shape_54.setTransform(60.7,39.1,0.818,0.818);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FDB171").s().p("AgMgCIASgGQAOgEABADQACAEgKAFIgMAGQgBACgLACIgJABg");
	this.shape_55.setTransform(76.7,44.3,0.818,0.818);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3598DB").s().p("AAWApIgzhMQgCgEADgDQAEgCADAEIAzBMQACAEgDADIAAAAIgDABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_56.setTransform(77.8,44.1,0.818,0.818);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FDB171").s().p("Ag5gEIARgGQASgHAEgDQAMgJAggBQATgBAHABQAHACABAGQABAEgFAGQgGAGAAADQAAADgHACQgGADgBACQAAADgEADIgHAFQgCADgIgBIgPgDIgNgCIgLADQgHABgPAGIgOAGg");
	this.shape_57.setTransform(75.2,45.4,0.818,0.818);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#37120B").s().p("AgJAQIgYgTIAPgmQAYANAQAjQAIATAEAQQgSgFgZgVg");
	this.shape_58.setTransform(49.4,8.1,0.818,0.818);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#37120B").s().p("Ag8gFIAvg2IBKAGQgGAWgOAaQgbAxgkAQg");
	this.shape_59.setTransform(42.6,11.7,0.818,0.818);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FDB171").s().p("AALBfQgUgJgTgLQgOgJgJgNIgLgVQAAAGgGgDQgEgCgEgPQAAgEgEgDIgHgLQgIgUAOgBQAIAAAVAVQACgfACgIQADgNANgSQANgTAZgJQAagIAUAIQAXAKAJAkIAGA2QADASgGARQgEALgLAaQgIATgIAGQgDACgMACIgBAAQgIAAgVgIg");
	this.shape_60.setTransform(44.9,15.9,0.818,0.818);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F09F5B").s().p("AgSAaQgDgBgFgDIgHgFQgEgVgKgaIAAgBIBbA0IAEAEQgGADgJACQgJACgJAAQgQAAgRgGg");
	this.shape_61.setTransform(44,21.2,0.818,0.818);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#37120B").s().p("AgYBsQgGgMgUgNIgWgPQgOgXgHgpQgFgeATghQAXgmAsgJQBJgRAiBWQgbApgdAnQgwBDgMAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_62.setTransform(43,12.5,0.818,0.818);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C90E00").s().p("AgGATQgGAAgDgFQgEgEAAgGQABgEAEgEIAMgKQADgFAGABQAGABADAEQAEAEgBAGQAAAFgFAEIgLAJQgDAEgFAAIgBAAg");
	this.shape_63.setTransform(50.1,16.2,0.818,0.818);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#37120B").s().p("AgPABQg7g9AigCQAlgCAYAVQAUARAIAaQAIAagHAlQgkgfgdgfg");
	this.shape_64.setTransform(48,8.6,0.818,0.818);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#213B63").s().p("AgTDcIgxgUIAOggQAHgfgSg8QgRg5gagpQgagpgIgdIAAgQIADgCQgBgLAAgOQgBgcAGgQIAHgWQAFgMAIgFQADgCAOgDIAUgEQAKAQBAgBQA/gBgIgNIAUAEQAPAEAGAIQAmA4AKAoQAGAWgGAXIgPA+IgIAkQgGAaAAALQgBA6AVBdQgtAJgnAAQgkAAgegHg");
	this.shape_65.setTransform(45.5,46.2,0.818,0.818);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F09F5B").s().p("AgjgFIAAgPIBKAAIAAADIAAAAIAAAHQgNAKgaAJQgUAIgSAEQADgLAAgPg");
	this.shape_66.setTransform(44.1,24.3,0.818,0.818);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FDB171").s().p("ABlBkQgMgEgOgIIi4ABQAAgkAEgaQADgOgEgWQgCgMAJgDIAfgHQAVgEAKgGQALgGADgcIABgbIBKAAIAAAbQADAcAMAGQAKAGAhAHIAACDg");
	this.shape_67.setTransform(43.1,30.8,0.818,0.818);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FDB171").s().p("AhgAiQADgOgEgWQgCgMAJgDIAfgHQAVgEAKgGQALgGADgcIABgbIBKAAIAAAbQADAcAMAGQAHAEASAFIAAB4IjJABQAAgkAEgag");
	this.shape_68.setTransform(42.3,30.2,0.818,0.818);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#37120B").s().p("AAPB5IgRg9IgShkIgNgsQgMgsACgDQAEgFAQgfIAXAaIAAAXQABAagBAQQgBAQAFAQIAMAZQAFAMgBAJIgEAXQgCAMAIAOQAJARABADQABAIAAAIQgBAHABAEIAJAdQAFAZgGANQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgHAAgQgvg");
	this.shape_69.setTransform(42,30.2,0.818,0.818);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#37120B").s().p("AAlDDQgagigBgtQgBgUgOghIgZg3QgZhDgGg/QgEgrAJggIAJgYIANAJQAgAZgEAHQgGAJgEATQgGAZAHAOQAHAPACAVQAAAMgBAbQgBARAPAgQAZAzADAGQAKAagBAaQAAAOgCATQgBAdALAWQAGAMAFAFQgNgIgNgSg");
	this.shape_70.setTransform(41.6,33.5,0.818,0.818);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#60BFFF").s().p("AhACIIiMgtIAHg2IDxAlIAPgRQASgdAQg5QANgwATgyIASgpQAlAIAKAMQAaAbgSBIQgaBphWBvQgCACgHAAQgdAAhwghg");
	this.shape_71.setTransform(213.5,39.6,0.818,0.818);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3598DB").s().p("AhQBfIgRg3IA7AEQA7ADAGgHQAOgTA5h6IgkDMg");
	this.shape_72.setTransform(214.6,40.4,0.818,0.818);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3598DB").s().p("AhbgFIAAgWIBdgLQBegJgEAOQgHAWgNA1g");
	this.shape_73.setTransform(215.1,51.6,0.818,0.818);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#60BFFF").s().p("AgZCgQg1gBghgGIABgVQAAgLgGgaIgJgmIgPg8QgFgYAGgVQALgsAlg1QAGgIAOgDIAUgFQgIAOBAABQBAAAAJgQIAUAFQAPADADABQAIAFAEAMIAIAXQAKAZgHArIAEACIAAAQQgKAdgYApQgfAzgSBEIhVgCg");
	this.shape_74.setTransform(216.7,38.6,0.818,0.818);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FDB171").s().p("Ag4AXQgOgBACgNQABgMAogMQAlgKAJADQAIADAbADQAXAkgLgCQgJgBgjABQgjABgPACIgaACIgCAAg");
	this.shape_75.setTransform(194.3,45.6,0.818,0.818);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhSAEIAAgHIClAAIAAAHg");
	this.shape_76.setTransform(181.3,45.9,0.818,0.818);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhcAHIAAgNIC5AAIAAANg");
	this.shape_77.setTransform(181.4,46.2,0.818,0.818);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3598DB").s().p("AiJBlIAIgpICmAEIALgiQAOglAKgTQAKgRAOguQANgqABAAIAcB3IhPCQg");
	this.shape_78.setTransform(201.5,36.7,0.818,0.818);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FDB171").s().p("AAAAGIgMgGQgKgGACgDQABgDAOAEIASAFIAIAOQgSgDgDgCg");
	this.shape_79.setTransform(185.4,41.9,0.818,0.818);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3598DB").s().p("AgcArIAAgBQgDgBADgFIAzhMQADgEADACQAEACgEAFIgyBMQgBABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgCgBg");
	this.shape_80.setTransform(184.4,41.7,0.818,0.818);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FDB171").s().p("AAZASIgLgDIgMACIgQADQgHABgDgDQgLgFAAgGQAAgCgHgDQgGgCgBgDQAAgDgGgGQgFgGABgEQABgGAIgCQAFgBAUABQAgABAMAJQAHAFAgALIADAjQgZgLgLgCg");
	this.shape_81.setTransform(187,43,0.818,0.818);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#ABABAB").s().p("AH8B1QgiAAgsgOQgsgPgbgUIgOgLQgMgJgTgaQgKgPgaAAIorAAQgaAAgKAPQgUAagLAJIgOALQgbAUgsAPQgsAOgiAAImYAAQgiAAgDgNQgDgNAdgSIDoiRQAcgTAtgMQAtgNAiAAIQ9AAQAiAAAtANQAtAMAcATIDoCRQAdASgDANQgDANgiAAg");
	this.shape_82.setTransform(135.2,49,0.818,0.818);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#575757").s().p("AihArIAAhVIFEANIAABIg");
	this.shape_83.setTransform(70.6,61,0.818,0.818);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#575757").s().p("AiNAyIAAhjIEcAAIAABjg");
	this.shape_84.setTransform(199.1,59.2,0.818,0.818);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#575757").s().p("AH8B1QgiAAgsgOQgsgPgbgUIgOgLQgMgIgTgbQgKgPgaAAIorAAQgaAAgKAPQgTAbgMAIIgOALQgbAUgsAPQgsAOgiAAImYAAQghAAgEgNQgDgNAdgSIDoiRQAdgSAsgNQAtgNAiAAIQ9AAQAiAAAtANQAsANAdASIDoCRQAdASgDANQgDANgiAAg");
	this.shape_85.setTransform(135.2,56.1,0.818,0.818);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgVHHIAAuNIArAAIAAONg");
	this.shape_86.setTransform(201.2,102.8,0.818,0.818);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgVHfIAAu9IArAAIAAO9g");
	this.shape_87.setTransform(70.6,100.8,0.818,0.818);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#713C1F").s().p("AgVAIQAPgkAZgNIAPAlQgmAngcAHQACgQAJgSg");
	this.shape_88.setTransform(212.8,5.7,0.818,0.818);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#713C1F").s().p("AgogFIgVgwIBMgGIAvA2IgnBBQgkgQgbgxg");
	this.shape_89.setTransform(219.6,9.3,0.818,0.818);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FDB171").s().p("AgoBnQgMgCgDgCQgIgGgIgTQgLgagDgLQgGgRACgSQACgiAEgUQAJgkAXgKQAVgIAZAIQAZAJANATQANASADAOQACAHACAfIAMgKQAMgLAFABQAGAAACAEQADAGgFAKQgDAHgEAEQgDADgBAEQgDAOgFADQgBAAgBABQgBAAAAAAQgBAAAAgBQgBAAAAAAIAAgCQgGANgFAHQgJANgPAJQgTALgUAJQgUAIgIAAIgCAAg");
	this.shape_90.setTransform(217.3,13.5,0.818,0.818);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F09F5B").s().p("AgeAeIgPgFIADgDIBcg1IAAABQgMAegDARIgGAFQgFADgDABQgSAGgPAAQgJAAgJgCgAgwAaIgBgCIAEABIgDABIAAAAgAgtAZg");
	this.shape_91.setTransform(218.1,18.8,0.818,0.818);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#713C1F").s().p("AgmArIg4hQQAhhVBKAQQAsAJAXAmQATAhgFAeQgHAlgOAbIgWAPQgUANgGAMQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgMAAgwhDg");
	this.shape_92.setTransform(219.2,10.1,0.818,0.818);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C90E00").s().p("AgCAQIgMgLQgEgDgBgFQAAgGAEgEQAEgEAFgBQAGAAADADIAMALQAEADABAFQAAAGgEAEQgEAEgFABIgCAAQgEAAgDgDg");
	this.shape_93.setTransform(212.1,13.8,0.818,0.818);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#713C1F").s().p("AgwAAQAJgaATgRQAYgUAlABQAiACg7A9IhBA+QgHglAIgag");
	this.shape_94.setTransform(214.2,6.2,0.818,0.818);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#60BFFF").s().p("AiCDZIAKg2QAKg8AAgkQAAgLgGgaIgJglIgPg9QgFgYAGgVQALgsAlg0QAGgIAOgEIAUgEQgIANBAABQBAABAJgQIAUAEQAPADADACQAIAEAEANIAIAWQAKAZgHAsIAEABIAAARQgKAegYAoQgaApgRA4QgSA9AHAfIANAgQgQAMghAIQgdAHgiAAQgoAAgugKg");
	this.shape_95.setTransform(216.7,43.9,0.818,0.818);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F09F5B").s().p("AAAAJQgZgJgNgKIAAgKIBKAAIAAAPQAAAOADAMQgSgEgVgIg");
	this.shape_96.setTransform(218.1,21.9,0.818,0.818);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FDB171").s().p("AhtgcQAggHAMgGQAKgGAEgcIABgbIBKAAIAAAbQADAcALAGQAKAGAVAEIAeAHQAKADgCAMQgDAXACANQAEAaAAAkIi4gBQgKAGgQAHIgJACg");
	this.shape_97.setTransform(219.1,28.3,0.818,0.818);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FDB171").s().p("AhkBfIAAh4QAPgDALgGQAKgGAEgcIABgbIBKAAIAAAbQADAcALAGQAKAGAVAEIAeAHQAKADgCAMQgDAXACANQAEAaAAAkg");
	this.shape_98.setTransform(219.8,27.8,0.818,0.818);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#713C1F").s().p("AglAmQgQgPAAgXQAAgVAQgQQAQgRAVABQAWgBAQARQAQAQAAAVQAAAXgQAPQgQAQgWAAQgVAAgQgQg");
	this.shape_99.setTransform(213.1,22.2,0.818,0.818);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#713C1F").s().p("AgvCYQgHgMAGgXIAKgbQABgDgBgHQAAgHACgHQABgDALgQQAIgNgCgLIgFgVQgBgIAGgLIAOgXQAHgOgCgPQgBgPAAgYIABgUIAbgZIAKAPQAKAQADACQAFAFggBPIgUBbIgVA4QgTArgIAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_100.setTransform(221,29,0.818,0.818);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#713C1F").s().p("Ag8DNQAOgWgCgeQgDgSAAgPQAAgaALgZIAhg7QASgfgBgQQgCgaABgOQABgVAJgPQAIgPgHgYQgFgTgHgJQgDgEASgOIATgOIAOgJIALAYQAKAggEAqQgHBCgdBBIgeA3QgRAhAAAUQgBAugfAiIgfAag");
	this.shape_101.setTransform(221.5,31.1,0.818,0.818);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#713C1F").s().p("AgeC3QgDgMACgNQgDghAMggQAGgQgDggIgFg2IgDg/QgCgkAEgQQAKglARgXQAJgLAHgFIAIAMQALACgGAEQgFAEgIAeQgHAfABAQQAGAxgMAZQgNAdACA+QABAYgJAWQgEAMgJAPQgEALgBAKIABAMQADATAFAMQgFgHgDgLg");
	this.shape_102.setTransform(210.5,29.2,0.818,0.818);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#213B63").s().p("ABGgCIgPANQgQAPgEAMQgHAVgDACQgLAIgwgBQgfAAgOgEQgRgEAEgKQAFgMAQgBQAZgDATgKIAbgIQAjgUArhCIAKAQQAJAUgEAUQgMBGABAOIgOABg");
	this.shape_103.setTransform(179.8,120.6,0.818,0.818);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDB171").s().p("AgtCEIgPgIQAUgRAJhRIALiiQAZAAA4ALQgKAYgFASQgKAuADAlQACATAEAKQgJAYgNAZQgYAygRAHQgEACgEAAQgIAAgLgFg");
	this.shape_104.setTransform(182.5,112.4,0.818,0.818);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#213B63").s().p("AkGD1QgGkfAGgwQAFgjAIgLQANgSApgNQBOgYCjguIDHgSIALAcQAMAigDAcQgHBciLAFQiIAFhWAIIg7AGQALBNAAA8QgBBfgcBJQg4gLgaAAg");
	this.shape_105.setTransform(202.3,81.2,0.818,0.818);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1D2C3D").s().p("AhaA7QAEgMAQgCQAZgEASgMIAbgKQAhgXAnhFIALAPQAKATgCAVQgIBJACALIgOADIgDhJIgOANQgPARgDAMQgFAVgDACQgLAJgwADIgXABQgpAAAFgPg");
	this.shape_106.setTransform(186.4,119.1,0.818,0.818);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#575757").s().p("AhUAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAICpAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
	this.shape_107.setTransform(210,121.2,0.818,0.818);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#575757").s().p("Ai+AsQgSAAgNgNQgNgMAAgTQAAgRANgNQANgNASAAIF9AAQATAAAMANQANANAAARQAAATgNAMQgMANgTAAg");
	this.shape_108.setTransform(211.4,75.2,0.818,0.818);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#878787").s().p("AgqFYQgMgMABgRIAap1QAAgRAMgMQAMgMARAAQARAAAMAMQAMAMgBARIgbJ1QAAASgMALQgMAMgQAAQgRAAgMgMg");
	this.shape_109.setTransform(228.4,49.7,0.818,0.818);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#ABABAB").s().p("AgSEyQgIgIAAgLIAAo9QAAgLAIgHQAIgJAKAAQAMAAAHAJQAIAIAAAKIAAI9QAAALgIAIQgHAHgMABQgKgBgIgHg");
	this.shape_110.setTransform(209.6,96.9,0.818,0.818);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F09F5B").s().p("AgkCGIgQgHQAUgSAChSIABiiQAcgDA2AIQgJAZgDASQgIAuAGAlQADASAFAKIgTAyQgVA0gQAJQgEACgGAAQgHAAgKgDg");
	this.shape_111.setTransform(188.4,111.1,0.818,0.818);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1D2C3D").s().p("AiyDqQgXkfADgxQADgjAGgMQAMgUApgOQBGgYCEgaIAMgFIABADIB4B/IgQACQiIAPhUAOIg7AJQAnC2gmB8Qg3gHgcADg");
	this.shape_112.setTransform(200.6,80.9,0.818,0.818);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgVHiIAAvDIArAAIAAPDg");
	this.shape_113.setTransform(175.8,85.9,0.818,0.818);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgVHiIAAvDIArAAIAAPDg");
	this.shape_114.setTransform(96.1,85.9,0.818,0.818);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1E2020").s().p("Ag7BWQiLgFgIhaQgCgdALgiIAMgcIAbAEQAgAFAfAAQBngBADgDIACAOIBGAPQBPARAtAOIgPArQgNA0AGApQhXgJidgGg");
	this.shape_115.setTransform(55.1,70.9,0.818,0.818);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#213B63").s().p("AhRBGQACgNgNhHQgEgVAJgUIAKgPQArBCAjAUQASALAJgDQATAKAZACQAQACAFAMQAEAKgRAEQgNAEggAAQgvABgMgIQgDgDgHgUQgEgMgPgPIgPgNIABBJg");
	this.shape_116.setTransform(82.4,123,0.818,0.818);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FDB171").s().p("AATCHQgRgHgYgyIgWgxQAEgKACgTQAEglgLguQgEgPgLgbQA5gLAYAAIALCiQAJBRAUARQgTANgOAAQgFAAgEgCg");
	this.shape_117.setTransform(79.7,114.9,0.818,0.818);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FDB171").s().p("ACYBZQgBg7AMhPQgQgDgrgDQhWgJiIgFQiLgEgIhcQgCgcALgjIAMgcIDHATIDwBGQAqANANASQAIALAEAjQAHAwgGEfQgZAAg6ALQgchIAAhfg");
	this.shape_118.setTransform(59.9,83.6,0.818,0.818);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1D2C3D").s().p("AAfBJQgvgDgLgJQgDgCgGgVQgDgMgOgRIgOgOIgDBKIgPgDQADgOgIhGQgCgVAKgTQAFgKAGgFQAnBFAhAXQARAMAKgCQASALAZAEQAQADAEAMQAFAPgqAAIgXgBg");
	this.shape_119.setTransform(75.8,121.5,0.818,0.818);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#575757").s().p("AhUAfQgNAAgJgJQgJgJAAgNQAAgMAJgJQAJgJANAAICpAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAg");
	this.shape_120.setTransform(52.2,123.6,0.818,0.818);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#575757").s().p("Ai+AsQgSAAgNgNQgNgNAAgSQAAgSANgMQANgNASAAIF9AAQASAAANANQANAMAAASQAAASgNANQgNANgSAAg");
	this.shape_121.setTransform(50.8,77.6,0.818,0.818);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#878787").s().p("AgPFYQgMgMAAgRIgap1QgBgRAMgMQAMgMARAAQAQAAAMAMQAMAMAAARIAbJ1QABARgMAMQgMAMgRAAQgRAAgMgMg");
	this.shape_122.setTransform(33.8,52.1,0.818,0.818);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#ABABAB").s().p("AgSEyQgIgIAAgLIAAo8QAAgMAIgHQAIgJAKABQAMgBAHAJQAIAHAAAMIAAI8QAAALgIAIQgHAHgMABQgKgBgIgHg");
	this.shape_123.setTransform(52.6,99.3,0.818,0.818);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F09F5B").s().p("AAKCHQgPgJgXg0IgSgyQAFgKADgSQAGglgIgvQgDgUgJgWQA2gIAcADQABA4AABqQACBSAUASQgTAKgNAAQgGAAgFgCg");
	this.shape_124.setTransform(73.8,113.5,0.818,0.818);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F09F5B").s().p("ABhhEQg+gOjZgYIgQgCIB4h/IACgCIALAEIBLAQQBUATArAPQApAOAMAUQAHAMACAjQADAygXEdQgcgCg3AIQgmiAAnizg");
	this.shape_125.setTransform(61.6,83.3,0.818,0.818);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FDB171").s().p("AgaAmIgPgUQgIgLgBgEQgBgEADgFQADgFAFgBQAEgBAEgFIAHgGIAHgDQAFgCACgDQAEgDAHgCQACgDAGgCQAHgCAFAEQALAJALAOQANARgFAHQgFAGgFACQgFACgBACQgCAEgKAHQgDADgJACIgKADQgIAFgGAAQgHAAgFgFg");
	this.shape_126.setTransform(122.5,40.3,0.818,0.818);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EDAB72").s().p("AgUAdQgHgLgPgBIAEgNQAHgNAQgFIAkgOQATgHADACQAEAEgvA/IgHABQgJAAgEgGg");
	this.shape_127.setTransform(119.5,39.6,0.818,0.818);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CC4030").s().p("AgFBEQgZgNgCgCQgBgCAPhBIAQhCIgKB4QgBAGAXASIAXAQIgPABIgXgNg");
	this.shape_128.setTransform(121,30.2,0.818,0.818);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CC4030").s().p("AggBQQAugfgBgJIgKh4QAgCCgCADQgCAEgwAYg");
	this.shape_129.setTransform(144.7,30.2,0.818,0.818);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D8E9ED").s().p("AAAgrIgIgVIAVAHIArA2IgrAHIAJAaIhNAjg");
	this.shape_130.setTransform(137.4,14.8,0.818,0.818);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E84D3E").s().p("AhyDBIAWlAIAdhBIAeAKIAwAQQASAIATAcQAVAdAHAhQAKAuASBIQAMAxgKAnQgEAQgOANQgMALgPAFIgUAKg");
	this.shape_131.setTransform(144.5,26.7,0.818,0.818);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#D8E9ED").s().p("AgVAeIAIgaIgqgHIAqg2IAWgHIgIAVIA3Bsg");
	this.shape_132.setTransform(128.3,14.8,0.818,0.818);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D40000").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_133.setTransform(126.8,5.1,0.818,0.818);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D40000").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(138.9,5.1,0.818,0.818);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#582D11").s().p("ABQBBQgBgGgKgFQgLgFgegFQgagFgSgSIgNgQQgHARgQAMQgcAUACALQgIgCgEAFQgIgdADgeQAHg7A7gHIAZgIQAdgGAcAOQAoAVADA1QACAcgGAXQgEgFgIACg");
	this.shape_135.setTransform(132.8,-4,0.818,0.818);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FDB171").s().p("AgNBtQgJgDgNgMQgRgPgFgGQgFgGgEgLQgDACgDAAQgFABgDgGIgIgRQgGgIACgJQABgLAMADQgDgLgBgQQgCgfAIgRQAMgXARgLQAUgNAcAAQAdAAAUANQARALAMAXQAIARgCAfQgCAQgDALQANgDABALQABAJgFAIQgEAGgEALQgEALgKgIQgEAKgFAHIgWAVQgNANgJACQgFACgJAAQgIAAgFgCg");
	this.shape_136.setTransform(132.9,0.4,0.818,0.818);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4F290F").s().p("AgtANQgIgiAtgLQAtgLAJAiQAIAfgtALQgLADgKAAQgbAAgGgXg");
	this.shape_137.setTransform(130.1,-9.6,0.818,0.818);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#4F290F").s().p("AgEgEIAGgCIADANQgIgHgBgEg");
	this.shape_138.setTransform(127.4,5.4,0.818,0.818);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4F290F").s().p("AgBgGIAGACQgBAEgIAHg");
	this.shape_139.setTransform(138.3,5.4,0.818,0.818);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E84D3E").s().p("Ag/CvQAFg8ACg/QAGh7gNgGIBshiIATFeg");
	this.shape_140.setTransform(125.3,28.1,0.818,0.818);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F09F5B").s().p("AgkAUIgIgGIACgJIAEgdIACgBIAmAZIApgaIACAUQgFAIgJAIQgRARgSAAQgVAAgLgHg");
	this.shape_141.setTransform(132.7,8.2,0.818,0.818);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FDB171").s().p("Agag6IAngcIADAYQAEAbAIAOIg2Bsg");
	this.shape_142.setTransform(135.1,13.1,0.818,0.818);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FDB171").s().p("AgagVQALgXACgqIApAcIAACRg");
	this.shape_143.setTransform(130.6,13.1,0.818,0.818);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AhLCdIAAk5IBGAhIBRghIAAE5g");
	this.shape_144.setTransform(133.4,29.6,0.818,0.818);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FDB171").s().p("ABGDyQgGgcgDg6QgBghgrhyQgQgngMgyQgShKAEgrQgZAFgvgEIgrgGQACgSAEgGQAIgNAigXQAkgYA6gEQA3gEAKAOQANAQAODNIAHBmQAKBrAIAOQATAiADAnQAEAxgfAGIgGAAQgaAAgMgyg");
	this.shape_145.setTransform(132.1,81.3,0.818,0.818);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F09F5B").s().p("AAFEsQgFgJAAgYQgBg8ADgmQACgSgPhYQgOhTgNgzQgmiWAIgkQACgJAygaIAxgXIANBcQAOBjABAgQACAzgHCmQAAAbANBQQAEAfgFAXQgIAegXAAIgCAAQgWAAgIgQg");
	this.shape_146.setTransform(129.3,87.4,0.818,0.818);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#213B63").s().p("AhWB0QgYgNgEgTQgHgnAkg0QASgbAihlICVAAIgEEJIiUAGQgqgQgIgEg");
	this.shape_147.setTransform(123.6,53.5,0.818,0.818);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#1E2020").s().p("AgXBTQgHgLgJgdQgHgVAEg2IAEgyIAhgKQAhgHAGAOQAKAXABBTQAAAggKATQgLAXgXAAQgPAAgJgMg");
	this.shape_148.setTransform(132.2,114.5,0.818,0.818);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1E2020").s().p("AgsAYQgKgoAFgvQACgbAGgEQAFgEAUgCQAZgGAOAfQARAnAJA0QAMBQgmAGIgHAAQgqAAgShOg");
	this.shape_149.setTransform(141.5,103.9,0.818,0.818);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#213B63").s().p("AhYgtIBrgOIAegNQAfgIAGAdQANBAgtAlQgOAMgSAIIgPAFg");
	this.shape_150.setTransform(143.1,59.8,0.818,0.818);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#213B63").s().p("AgHBzIhpgkIgJjEICtgQIAUA0QAXA5AMAVQANAWABArQACAqgNAXQgEAHgRAAQgeAAhCgTg");
	this.shape_151.setTransform(141,52.1,0.818,0.818);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F09F5B").s().p("AhIA5QgcgIAVg2IAcg1IBxAFIAbBRQgdALgiAIQgvAMgdAAQgNAAgJgCg");
	this.shape_152.setTransform(136.4,63.6,0.818,0.818);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#1E2020").s().p("AjXBLQgOAAgKgJQgJgKAAgNIALhWQAAgNAJgJQAKgJAOAAIGZAAQAOAAAKAJQAJAKAAAMIALBWQAAANgJAKQgKAJgOAAg");
	this.shape_153.setTransform(132.9,59.7,0.818,0.818);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#575757").s().p("AgRFKIAAqTIAjAAIAAKTg");
	this.shape_154.setTransform(148.2,91.6,0.818,0.818);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#575757").s().p("AgRFKIAAqTIAjAAIAAKTg");
	this.shape_155.setTransform(117.5,91.6,0.818,0.818);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E84D3E").s().p("AgsDBQgPgJgFgBQgPgFgMgLQgOgNgEgQQgJghAMg+IALguIAQhBQAHghAVgdQATgcASgIQAWgJA4gRIAcBBIAWFAg");
	this.shape_156.setTransform(121.3,26.7,0.818,0.818);

	this.instance = new lib.T1_MC_con_todos_los_botones();
	this.instance.parent = this;
	this.instance.setTransform(273.9,310.8,1,1,0,0,0,249.9,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MC_pag1, new cjs.Rectangle(-117,-12.5,1064.5,506.6), null);


// stage content:
(lib.AC_IMCR_OV_08 = function(mode,startPosition,loop) {
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
		parent.deshabilitarSiguiente();
		
		/* Para marcar tema completado :
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
p.nominalBounds = new cjs.Rectangle(561,279.5,1239.1,647.3);
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