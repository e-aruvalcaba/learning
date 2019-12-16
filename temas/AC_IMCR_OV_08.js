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


(lib.mediocir_negro_cmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhRigQABAAACAAQBDAAAuAvQAvAvAABCQAABDgvAvQguAvhDAAQgCAAgBAA");
	this.shape.setTransform(8.2,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mediocir_negro_cmc, new cjs.Rectangle(-1,-1,18.5,34.3), null);


(lib.Imagenparaboton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().rr(-149.2,-30.6,298.4,61.2,18);
	this.shape.setTransform(149.2,30.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Imagenparaboton, new cjs.Rectangle(0,0,298.4,61.2), null);


(lib.flecha_negra_cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDg");
	this.shape.setTransform(7.1,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AABBUIgVgqIgcAUQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAiMQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIBlBmQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIghAAIAVAqQACAEgEABIgfAQIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_1.setTransform(6.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},91).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,22.4);


(lib.doslineas_negro_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxwC2QAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAMAjhAAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAgAxwirQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAMAjbAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAABABQgBABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(114,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.doslineas_negro_mc, new cjs.Rectangle(-0.2,-2,228.3,36.4), null);


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
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgUCuIAAlbIApAAIAAFbg");
	this.shape.setTransform(2.1,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.114)").s().p("AjJCuIAAlbIGTAAIAAFbg");
	this.shape_1.setTransform(20.2,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.192)").s().p("AlVCuIAAlbIKrAAIAAFbg");
	this.shape_2.setTransform(34.2,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.251)").s().p("Am6CuIAAlbIN1AAIAAFbg");
	this.shape_3.setTransform(44.3,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.286)").s().p("An2CuIAAlbIPtAAIAAFbg");
	this.shape_4.setTransform(50.3,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.298)").s().p("AoKCuIAAlbIQVAAIAAFbg");
	this.shape_5.setTransform(52.3,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

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


(lib.instruccion_clic_negro_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

	// instruccion
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.047)").ss(1,1,1).p("ARnigQABAAACAAQBDAAAvAvQAvAvAABCQAABDgvAvQgvAvhDAAQgCAAgBAAAx5CgQg4gEgqgqQgvgvAAhDQAAhCAvgvQAqgqA4gF");
	this.shape.setTransform(129.1,16.1);

	this.text = new cjs.Text("Haz clic en cada botón para ver su descripción.", "14px 'Arial'", "#333333");
	this.text.lineHeight = 14;
	this.text.lineWidth = 206;
	this.text.parent = this;
	this.text.setTransform(34.1,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.text}]},47).wait(1));

	// Capa 2
	this.instance = new lib.flecha_negra_cursor();
	this.instance.parent = this;
	this.instance.setTransform(22.9,22.5,1,1,0,0,0,7.1,11.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({x:20.9,y:15.5,alpha:1},8,cjs.Ease.get(1)).wait(20));

	// Capa 5
	this.instance_1 = new lib.doslineas_negro_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.5,16,0.005,1,0,0,0,115,16.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({regX:114,regY:16.2,scaleX:0.01,x:16.6,y:16.1},0).wait(1).to({scaleX:0.01,x:17.2},0).wait(1).to({scaleX:0.02,x:18.4},0).wait(1).to({scaleX:0.04,x:20.1},0).wait(1).to({scaleX:0.06,x:22.7},0).wait(1).to({scaleX:0.09,x:26.4},0).wait(1).to({scaleX:0.14,x:31.5},0).wait(1).to({scaleX:0.2,x:38.6},0).wait(1).to({scaleX:0.29,x:48.3},0).wait(1).to({scaleX:0.4,x:60.8},0).wait(1).to({scaleX:0.53,x:74.6},0).wait(1).to({scaleX:0.64,x:87.1},0).wait(1).to({scaleX:0.73,x:96.9},0).wait(1).to({scaleX:0.79,x:104.4},0).wait(1).to({scaleX:0.85,x:110.1},0).wait(1).to({scaleX:0.89,x:114.5},0).wait(1).to({scaleX:0.92,x:117.9},0).wait(1).to({scaleX:0.94,x:120.6},0).wait(1).to({scaleX:0.96,x:122.5},0).wait(1).to({scaleX:0.97,x:124},0).wait(1).to({scaleX:0.98,x:125},0).wait(1).to({scaleX:0.99,x:125.7},0).wait(1).to({scaleX:0.99,x:126.1},0).wait(1).to({regX:112.8,regY:16.1,scaleX:0.99,x:127.3,y:16},0).wait(1));

	// Capa 4
	this.instance_2 = new lib.mediocir_negro_cmc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.3,16.1,1.1,1.1,0,0,0,8.3,16.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({regX:8.2,x:25.5},0).wait(1).to({x:26.8},0).wait(1).to({x:29.1},0).wait(1).to({x:32.7},0).wait(1).to({x:38},0).wait(1).to({x:45.5},0).wait(1).to({x:55.9},0).wait(1).to({x:70.4},0).wait(1).to({x:90.3},0).wait(1).to({x:116},0).wait(1).to({x:144.3},0).wait(1).to({x:169.7},0).wait(1).to({x:189.8},0).wait(1).to({x:205.2},0).wait(1).to({x:216.9},0).wait(1).to({x:225.9},0).wait(1).to({x:232.9},0).wait(1).to({x:238.2},0).wait(1).to({x:242.3},0).wait(1).to({x:245.3},0).wait(1).to({x:247.5},0).wait(1).to({x:248.9},0).wait(1).to({x:249.7},0).wait(1).to({regX:8.3,x:250.1},0).wait(1));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("ACxAAQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIg");
	this.shape_1.setTransform(16.1,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.11)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_2.setTransform(16.1,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.224)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_3.setTransform(16.1,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.333)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_4.setTransform(16.1,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.443)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_5.setTransform(16.1,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.557)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_6.setTransform(16.1,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.667)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_7.setTransform(16.1,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.776)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_8.setTransform(16.1,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.89)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_9.setTransform(16.1,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("ACxAAQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIg");
	this.shape_10.setTransform(16.1,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ABXCxQhHgBgzgyQgzg0AAhKQAAhIAzg1QAzgyBHgB");
	this.shape_11.setTransform(6.7,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,260.3,34.3);


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
		this.stop();
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
	this.instance = new lib.instruccion_clic_negro_v2();
	this.instance.parent = this;
	this.instance.setTransform(289,224.1,1,1,0,0,0,19.5,19.5);

	this.text = new cjs.Text("Ejemplos:", "bold 18px 'Arial'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(135.2,124.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69B9C4").s().p("AkaF/QgNAAgJgKQgKgKAAgMIAAgBQAAgNAKgKQAJgJANAAIANAAQgDgHgBgIQABgQAKgLQAMgMAPAAIHNAAQAPAAALAMQAMALAAAQQgBAIgDAHIAOAAQAMAAAKAJQAKAKgBANIAAABQABAMgKAKQgKAKgMAAgAjgDsIAAjcIABAAIgBgKQAAhcBChCQBChCBcABQBcgBBCBCQBBBCAABcIAAAKIAADcgACEhKQgVADgTAJQg7AdAABIQAABKA7AfQATALAVAEIATADIAAjtgAiYCiIATgCQAVgDATgKQA7gcAAhKQAAhHg7ghQgTgJgVgFIgTgCgAD7ikIA4ggIABgBQAHgEAKACQAIADAFAIQAEAIgCAJQgCAJgJAEIAAAAIg4AggAlIieIgBgBQgHgEgDgJQgCgJAEgIQAFgIAIgCQAKgCAHAEIABAAIA4AhIgXAmgAjJkpIAAgBQgFgIADgJQACgKAIgEQAJgEAIABQAJAEAEAHIABABIAgA4IgmAWgACGkMIAgg4IABAAQAFgIAJgDQAJgCAIAEQAIAFADAJQACAJgGAIIAAABIggA3gAgYkmIAAhAIAAgBQAAgKAGgGQAHgHAJABQAJgBAGAHQAHAGAAAKIAAABIAABAg");
	this.shape_1.setTransform(160.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#49C4E8").s().p("EgtOABTQAHilCtAAMBU1AAAQCsAAAIClg");
	this.shape_2.setTransform(388.7,-47);

	this.text_1 = new cjs.Text("Alerta", "bold 18px 'Arial'");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 349;
	this.text_1.parent = this;
	this.text_1.setTransform(215.5,-4.5);

	this.text_2 = new cjs.Text("Es una señal preliminar de un evento que no ha ocurrido pero que, en caso de concretarse, podría afectar al negocio.\n\n\n\n● Rumores que se difunden en redes sociales.\n● Experiencias negativas de competidores .\n● Posibles desastres naturales.\n", "18px 'Arial'");
	this.text_2.lineHeight = 21;
	this.text_2.lineWidth = 500;
	this.text_2.parent = this;
	this.text_2.setTransform(135.2,61.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AFDA33").s().p("Ag9EsQgXgYAAgmQAAglAYgYQAYgZAkAAQAmAAAXAZQAXAXABAmQAAAmgXAYQgXAZgnAAQgkAAgZgZgAg1BpIgWmtICWAAIgVGtg");
	this.shape_3.setTransform(160,9.5,0.572,0.496);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AFDA33").s().p("AlLFGQgOABgLgFQgLgFgGgJQgHgJAAgLQABgLAGgKIFPo5QAHgLALgGQAKgGAKAAQAMAAAKAGQAKAGAHALIFPI5QAHAKAAALQgBALgFAJQgHAJgKAFQgMAFgOgBgAlNEfIACAAIKXAAIACAAIlOo3g");
	this.shape_4.setTransform(160,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AFDA33").s().p("EgtOABTQAHilCtAAMBU1AAAQCsAAAIClg");
	this.shape_5.setTransform(388.7,-47);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("EgtOABTQAHilCtAAMBU1AAAQCsAAAIClg");
	this.shape_6.setTransform(388.7,-47);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AoZC6ICBlzIA4AAIhUE7INrAAIhak7IA0AAICJFzg");
	this.shape_7.setTransform(164.3,27.6,0.747,0.747);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("ACFGCQAagmACg4QACg8gXglQgMgSgvgqQgogjgSgqQgWg0AFhMQgXAXgZAqQgzBSgIBdQgIBeAlBUQATAqAVAXQg3gFg+giQh8hDgiiQQghiQAxhcQAPgdAWgUQAKgKAIgFIABBOQAIBWAkAuQgDguAKg/QAUiBA/hZQBChfBZgoQBEgfAlALQgIAJgLARQgVAigNAnQgoB9BBCBQgFgjAIgsQARhYBCgrIgCBGQADBPAfAuQBIBrABB4QABC7jWBGg");
	this.shape_8.setTransform(163.6,2.3,0.747,0.747);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("EgtOABTQAHilCtAAMBU1AAAQCsAAAIClg");
	this.shape_9.setTransform(388.7,-47);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AjnF+QgKgDgKgHQgTgOAAgXIAAoyIAHgTQANgaAggeQAygvAnggIEFAAIB2BsIALAPQAKAYAAAsIAAICIgDAdQgKAdgkAAgABRDCQAOAOATAAQATAAAOgOQAOgNAAgUQAAgTgOgOIhUhTIBUhTQAOgOAAgTQAAgTgOgOQgOgOgTAAQgTAAgOAOIhTBUIhThUQgOgOgTAAQgUAAgNAOQgOAOAAATQAAATAOAOIBTBTIhTBTQgOAOAAATQAAAUAOANQANAOAUAAQATAAAOgOIBThTg");
	this.shape_10.setTransform(158.9,17.6,0.775,0.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AhOAiQgOAAgLgJQgJgKgBgPQABgNAJgLQALgKAOAAICdAAQAPAAAKAKQAKALAAANQAAAPgKAKQgKAJgPAAg");
	this.shape_11.setTransform(159,-15.9,0.775,0.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AhGA/QgGgBgHgFQgNgKgEgVQgJglgCgTQgEghAPABIDIAAIAJAEQAHALgEAZQgHAngKATQgOAbgbAAg");
	this.shape_12.setTransform(159,-25,0.775,0.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC0000").s().p("AgsCWIAAkrIBZAAIAAErg");
	this.shape_13.setTransform(167.7,17,0.758,0.758);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FC0000").s().p("AgtBBIAAiBIBbAAIAACBg");
	this.shape_14.setTransform(187,23.5,0.758,0.758);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FC0000").s().p("AgtBeIAAi7IBbAAIAAC7g");
	this.shape_15.setTransform(177.3,21.3,0.758,0.758);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC0000").s().p("AgtB4IAAjvIBaAAIAADvg");
	this.shape_16.setTransform(158,19.3,0.758,0.758);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FC0000").s().p("AgtC8IAAl3IBbAAIAAF3g");
	this.shape_17.setTransform(148.4,14.2,0.758,0.758);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC0000").s().p("ACGCUIAngfIh5iqIitBhIitjgIBAgxICBCtICxhoICjDsIAogdIAQC3g");
	this.shape_18.setTransform(167.3,-4.9,0.758,0.758);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC0000").s().p("AmcGeIADs7IBbAAIAALdILbAAIAABeg");
	this.shape_19.setTransform(164.5,5.6,0.758,0.758);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC0000").s().p("EgtOABTQAHilCtAAMBU1AAAQCsAAAIClg");
	this.shape_20.setTransform(388.7,-47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.text_2,p:{text:"Es una señal preliminar de un evento que no ha ocurrido pero que, en caso de concretarse, podría afectar al negocio.\n\n\n\n● Rumores que se difunden en redes sociales.\n● Experiencias negativas de competidores .\n● Posibles desastres naturales.\n",lineWidth:500,lineHeight:21.1}},{t:this.text_1,p:{text:"Alerta"}},{t:this.shape_2},{t:this.shape_1},{t:this.text,p:{y:124.3}}]},1).to({state:[{t:this.text_2,p:{text:"Es una señal de un evento que está ocurriendo y que podría convertirse en un incidente que afecte al negocio.\n\n\n\n● Una protesta potencial.\n● Una tendencia de consumo.\n● Una percepción o pregunta sobre la calidad del producto.",lineWidth:500,lineHeight:21.1}},{t:this.text_1,p:{text:"Advertencia"}},{t:this.shape_5},{t:this.text,p:{y:124.3}},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.text_2,p:{text:"Es un evento concreto que puede impactar adversamente el negocio si no es identificado a tiempo y manejado efectivamente.\n\nCon frecuencia se presentan sin avisos o señales claras y suelen llamar la atención de los medios locales.\n\n\n\n● Retiro voluntario de producto del mercado.\n● Incidentes industriales, por ejemplo, fuga de amoníaco o \n   derrames de materia prima en la comunidad.\n● Fraude cometido por algún empleado.\n",lineWidth:531,lineHeight:21.1}},{t:this.text_1,p:{text:"Incidente"}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.text,p:{y:185.5}}]},1).to({state:[{t:this.text_2,p:{text:"Una situación definida, menos común que un incidente, que podría afectar adversamente a una unidad de negocio o a la imagen y reputación de la marca, si no es identificado con prontitud y manejada con efectividad.\n\n\n\n● Fuertes cuestionamientos sobre nuestros productos o procesos.\n● Paro no programado de la operación (huelga, manifestación, \n   accidente grave).\n● Publicidad que ofende a segmentos vulnerables de la población.\n",lineWidth:538,lineHeight:21.1}},{t:this.text_1,p:{text:"Incidente elevado"}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.text,p:{y:162.1}}]},1).to({state:[{t:this.text_2,p:{text:"Un incidente elevado se convierte en crisis cuando crece y afecta negativamente la imagen y reputación de la Compañía y sus marcas registradas.\n\n\n\nCasos en que no es posible manejar los incidentes aisladamente, y es preciso contactar a entidades externas como:\n\n● Autoridades gubernamentales.\n● Organizaciones no gubernamentales (ONGs).\n● Clientes y socios de negocio.\n",lineWidth:500,lineHeight:20.1}},{t:this.text_1,p:{text:"Crisis"}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.text,p:{y:147.7}}]},1).wait(1));

	// Sólo ventana
	this.text_3 = new cjs.Text("Un evento es un acontecimiento no planeado que puede llegar a impactar el negocio. \n\nConoce los tipos de eventos a los que estamos expuestos.", "18px 'Arial'");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 421;
	this.text_3.parent = this;
	this.text_3.setTransform(195,55.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("EgqagfBMBU1AAAQC0AAAAC0MAAAA4bQAAC0i0AAMhU1AAAQi0AAAAi0MAAAg4bQAAi0C0AAg");
	this.shape_21.setTransform(388.7,147.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3F3F3").s().p("EgqaAfCQi0AAAAi0MAAAg4bQAAi0C0AAMBU1AAAQC0AAAAC0MAAAA4bQAAC0i0AAg");
	this.shape_22.setTransform(388.7,147.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3}]}).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).wait(5));

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
	this.text = new cjs.Text("Nuestra primera tarea es identificar los diferentes tipos de eventos a los que podemos enfrentarnos.", "bold 18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 503;
	this.text.parent = this;
	this.text.setTransform(680,-19.8);

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
	this.text_1 = new cjs.Text("Crisis", "bold 18px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 256;
	this.text_1.parent = this;
	this.text_1.setTransform(120.9,379.5);

	this.text_2 = new cjs.Text("Incidente elevado", "bold 18px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 256;
	this.text_2.parent = this;
	this.text_2.setTransform(120.9,311.3);

	this.text_3 = new cjs.Text("Incidente", "bold 18px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 256;
	this.text_3.parent = this;
	this.text_3.setTransform(120.9,243.6);

	this.text_4 = new cjs.Text("Advertencia", "bold 18px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 256;
	this.text_4.parent = this;
	this.text_4.setTransform(120.9,178.8);

	this.text_5 = new cjs.Text("Alerta", "bold 18px 'Arial'");
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
p.nominalBounds = new cjs.Rectangle(-141,-21.8,1074.5,455);


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
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhRDAp3MAAAhTtMCiHAAAMAAABTtg");
	this.shape.setTransform(482.8,224.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhRDAmHMAAAhMNMCiHAAAMAAABMNg");
	this.shape_1.setTransform(482.8,249.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhRDAiXMAAAhEtMCiHAAAMAAABEtg");
	this.shape_2.setTransform(482.8,274);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhRDAeoMAAAg9PMCiHAAAMAAAA9Pg");
	this.shape_3.setTransform(482.8,298.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EhRDAa3MAAAg1tMCiHAAAMAAAA1tg");
	this.shape_4.setTransform(482.8,323.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EhRDAXIMAAAguPMCiHAAAMAAAAuPg");
	this.shape_5.setTransform(482.8,348.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhRDATYMAAAgmvMCiHAAAMAAAAmvg");
	this.shape_6.setTransform(482.8,372.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EhRDAPoIAA/PMCiHAAAIAAfPg");
	this.shape_7.setTransform(482.8,397.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EhRDAL4IAA3uMCiHAAAIAAXug");
	this.shape_8.setTransform(482.8,422.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EhRDAIIIAAwPMCiHAAAIAAQPg");
	this.shape_9.setTransform(482.8,447.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EhRDAEYIAAovMCiHAAAIAAIvg");
	this.shape_10.setTransform(482.8,471.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EhRDAAoIAAhPMCiHAAAIAABPg");
	this.shape_11.setTransform(482.8,496.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).wait(1));

	// Capa 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E3E3E2").s().p("AgDBIQgVgFgPgOQgOgPgFgVQgEgUAHgTQAEgMAJgMQAIgNALgGQAMgIARAAQAIgBALADQANABADAEQAEAEgFAJQgEAGgGADQgJAFgRAAQgRAAgIAEQgRAIgCAWQgBAHACAHQAEAKAKAIQASAOAUADQALACAIgDIAMgFQAIgDAEAEQAGAFgCAKIgCAGIgFADIgRAIQgLADgLAAQgJAAgIgCg");
	this.shape_12.setTransform(69.2,57.8,0.203,0.203);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AgXBrQgpgEgYgbQgSgUgIgrQgHgjgBgmIgCgRQAAgMACgDQADgEAJgBIANAAIBFgFQBFgDBGgBQAHAAACACQAEACABAJQADA7gOA2QgMAugZASQgLAHgRAGQgiAKgaAAIgMAAg");
	this.shape_13.setTransform(72.1,57.8,0.203,0.203);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3E3E2").s().p("AiPAFQgEgBgBgCQgCgCAEgDQACgCAFgBQAggHA8gCIBbgDQBCgDAfAPQAGADACADQADAEgEADQgCACgFAAQgJACgNACIgGACQgMADgTAAQgrABgpAAQhbAAgygOg");
	this.shape_14.setTransform(72.1,60,0.203,0.203);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#020203").s().p("AhmAZQgOgCgEgIQgGgIAOgKQAIgHAXgCICSgMQAZgCAMAEQAJAEAGAHQAGAIAAAIQAAAEgDACQgBABgFAAQhMgGhJAIIgiAHQgRAFgKAAIgGgBg");
	this.shape_15.setTransform(229.7,55,0.203,0.203);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8F7F7").s().p("AgmB6QgFgBgCgCQgEgDgBgGIgehuQgShCgGgtQAogOBAgBQAZgBBQADQgEBygbBvQgDAOgGAFQgGAFgMABQgPABgPAAQgbAAgcgFg");
	this.shape_16.setTransform(229.8,57.7,0.203,0.203);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#626161").s().p("AhPAdIAAgBQAIgDABgGIABgBIAAABQAGAEAJgCQAJgEADgGIAAAAQAGACAFgCQADAAABgDIAAgBIAAgCIAAgCIABABIABADIACACQADACADgCQAEgBABgCIAAgCQgBgCACgCIABAAQABACgBADIACACIAEAAIACgBIgCgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQABABgBACIAAACIACAAIAOgFQAFAAABgCIgBgBQgCgDABgDIABAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQADACADgBQAGgEAEgJIAAAAIABAAIAFAFQAKgLANgCIAHgFIAAAAQAFACgBAFIAAABIgBgBIgCgEIABgBIgCgBIgGAFIAAAAQgOACgKALIAAAAIgFgFQgFAKgFADQgEAAgEgBQgCACgEABIgPAFIgDAAIgCACQgDABgDgBIgCgBQgCADgEAAQgDACgEgCIgCgCQgCAEgDAAQgDACgIgCQgCAGgKAEQgKACgFgEQgCAGgHADgAgFABQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADABIABgCQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgCAAIgBAAg");
	this.shape_17.setTransform(139.4,63.1,0.203,0.203);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#626161").s().p("AgxATIAAgBQAMgGAFAAIAEAAIAFgEQACgCAFAAIAEgBQAEgBABgDIgBgBIAAgBIABAAQAIABAHAAIgCgGIAAAAIABAAQAHAEAJgBQgBgFgDgDIABgBIAAAAQAJADALgBIgCgHIAAgBIABAAQAEADAGgCIABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgEABgFgBQABADAAAEIAAAAIAAAAIAAABQgJAAgLgCIADAHIAAAAIAAABQgJABgIgEIACAFIAAABIAAAAQgJABgGgCIAAABQgBAEgFABIgEABIgHACIgFAEIgDAAIgBAAQgGAAgKAGg");
	this.shape_18.setTransform(138.7,62.7,0.203,0.203);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#626161").s().p("AgWAIIAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIACAAIACgBIACgCIgCgCIAAgBIABAAIAJADIAEABIAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIgBgCQgEgBgCgDIABgBIAAAAQAEACACACQAEACAGAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAIgEgCQgFgDACgDIABAAQAGAAADAFIAAADIAAAAIAFABQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABAAIAAAAQgBgHgGABQAAADAEACIAAABIAAAAQgFgBAAgGIAAAAIAAAAQAIgCABAIIAAABIgCACIgEAAIgFgBQgCABgDAAQgFABgFgBIABABIAAACIgBACIgFgBIgGgCIAAAAIgBAEIgEABIgDgBgAAGgDIAGADIAAgCQgDgEgFgBQAAAAAAABQgBABABAAQAAABABAAQAAABABAAg");
	this.shape_19.setTransform(140.4,62.1,0.203,0.203);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#626161").s().p("Ag2AUQADgDAEABIABABIAEAAQADgBABgDIAAgFIAAgBIAAAAQAFAAAEABQACgFAEgCIAHgCQAGgBgBgDIAAAAIABAAQACADAFAAIAAgEIAAAAIABAAQAFACAIACIgCgGIABgBQAGADAJABIgBgKIABgBIAMAGIAEABIACgBIABgDQgDAAgCgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgBIABAAIAEACIgBgCQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAGACACAFIAAAAIAAABQgFACgEAAIgBACIgCACIgBAAIgEgBIgMgFIABAJIgBABQgJgBgFgCIABAFIAAAAIAAAAQgIAAgGgDIABADIAAAAIgBAAQgEAAgEgBQgCACgDABIgHACQgGACgBAFIAAAAIAAAAQgEgCgEABIAAAFQgBAEgEABIgEAAIgCgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAIAAAAgAAsgSIAAACIABADIAAABQAEABAEgCQgBgEgHgBIgBgBIAAABgAAsgMIAAgBQgCgCgDgBQAAADAFABg");
	this.shape_20.setTransform(138.3,62,0.203,0.203);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#626161").s().p("AgbAKIABgBQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAIABABIADgCQABgDgCgCIAAAAIABgBIANACQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgEIAAgBIABAAQACAEAGACIAAgCIgFgFIABgBQAEABABAEQAGADAGAAQAFAAABgCIAAAAIgDgCQgCgDAAgEIABgBIABAAQADADABAEIABACIACABIABAAIAAAAIgBAAIgDAAIAAAAQgBADgGAAQgGAAgGgDIAAACIgBABQgEgBgDgCIAAABQgCAEgDAAIgDAAIgJgBQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBABIgDgBgAAVgDIACACIAAgCIgDgEQAAAAAAABQAAAAAAABQAAAAAAABQABABAAAAg");
	this.shape_21.setTransform(140.1,61.4,0.203,0.203);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#626161").s().p("Ag8AiQgEgEABgEIABgBIAHAAQAJgHAMABIAAgGIABgBIAAAAQAIAFAFgCQADgBABgEIgDgCQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAIAAgBQADACAAADIAAABQACAAAEgBQAFgCAFgEIABgCIgBAAQgBgBAAgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIADAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBABIACAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAgCQgEgCAAgDIAAAAIAAAAQACAAACADIABABQADABACgBQADgCAAgDIAAgDIgBgDIAAAAIABAAIABACIABABQACABADgBQACgBADgGIABgBIAAAAQAGAEAHgEQAHgEAAgHIAAAAIABAAQAFADAGgDIABABIgBAAQgGADgFgDQAAAHgIAEQgGAEgHgEQgCAGgEACQgCACgDgCIgBACQAAADgDADQgDABgDgBIAAADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBABIgCAAIgDADQgEAEgGACQgDABgDAAQgBAEgDABIgBAAQgEACgJgEIAAAGIAAAAQgNgBgJAHIgHABIAAACIABAAIACAEIgBABgAgSAHIACACQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBAAgAAAgDQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIABAAIABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBABIAAAAg");
	this.shape_22.setTransform(142.6,61.9,0.203,0.203);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#626161").s().p("AgNAMIgCgBQgEgGAFgFIABAAQADAEgCAFIAAAAIgBgBQACgDgDgEQgDAFADAEIABABIADgCIACgEIAAAAIgCgCQgBgFADgEIAAAAQADAAAAAGIgBAEIADgBQADgDABgFIAAgGIABAAIAAAGIABAEIABABIABAAIACgDIADgIIAAAAIABAAIABACIABABIACgBIABgBIABgBIAAABIgBACIgDABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgBIgCAGIgCADIgCAAIgBgBIgBgCQgBADgDAEQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCAFIgCACgAgJACIABACIABAAIABgEQAAgFgCAAQgCAEABADg");
	this.shape_23.setTransform(141.6,61.8,0.203,0.203);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#626161").s().p("AhBAiQgDgGAAgFIgDAHIgBAAIAAgBIADgJIABAAIABAAIADAMQAEgBADgEQgEgKAIgHIABAAIAAAAQABAKgFAHIABACQABAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQAFgDACgFIgBgDQgBgFADgHIABAAIAAABQACAHgDAHIACABQAAABABAAQAAAAABAAQAAABABAAQAAAAABgBQACAAACgDQAKgLABgOIABgBIAAABIACAQQAMgIACgNIAAgBIACABIABANQAKgFAGgMIABAAIAAAAIADAMQAJgHAEgIIABAAIAAAAQgBACACADQABAEAEAAQAFgBACgEIgBgBQgBgGABgGIABgBIAAABQADACAAAHIgCAEIADADIADgBQAGgDAEgJQgBgCAAgCQABgEADgBIABAAIAAABIgCAIIAAAAQABABABAAQAAAAABAAQAAAAABAAQAAgBABAAQADgCAAgDIAAgBIABABQAAAEgDACQgEACgCgCIgBAAQgDAIgIAEIgBABIgCAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQgCAEgFABQgEgBgCgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgEAHgIAHIAAAAIgBAAIgCgMQgIALgJAFIgBAAIAAAAIgCgKQgDALgLAHIAAAAIAAAAIgCgMQgEAMgHAJQgCADgDAAQgDABgCgCIgCgBQgBAFgFADQgEACgBgCIgCgBQgDAEgEACgAg4AaQAEgHgBgIQgGAHADAIgAgsARIAAACQACgGAAgFQgCAFAAAEgAAtgPIAAAAIACgEQAAgEgCgDQgBAGABAFgAA+gcIABAEIACgIIgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABg");
	this.shape_24.setTransform(140.9,59.2,0.203,0.203);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#626161").s().p("AgwAgIAAAAQAGACADgHIAFgIIgCgCQgDgDgBgEQgDgRACgRQABgGAEgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIABAAQAMAZgNAZQAEACAEgBQAFgCAFgGQAEgDACgGIgCgCQgDgLAFgLIABAAQAGALgGANIABACQADACAEgDQABgCACgDIABgCQgDgKACgHIABgBIAAABQACAIgBAJIADAFQAIgEgBgUIABgBIABAAIAFAOQADgGAAgFIAAgBIABABIADAFIAIgJIAAAAQAGAEAFgGIABAAIAAABQgFAGgHgEIgIAJIAAAAIgDgEQAAAEgEAGIgBAAIgEgLQAAATgJADIgBAAIgDgFIAAABQgBAEgDACQgEADgDgDIgBgBIgGAJQgFAGgGACQgCABgGgCIgEAIQgEAFgDABIgEAAgAgjgfIAAAAQgEABgBAGQgCARADAQIAEAHIABACQANgZgMgYIgBAAIgBAAgAgJAAIABABQAFgMgGgKQgEALAEAKg");
	this.shape_25.setTransform(138.1,60.6,0.203,0.203);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D6D7D7").s().p("AAhBwQgfgBgzgMQgzgNgXgJQg5gYAegWQAIgHAZgCQAegDAGgCQAngPAagZQAIgIAUgaQATgWAMgLQATgQAWgEQAZgFASAMQATAMAJAgQAOA0gQArQgIAYgRASQgSATgWAIQgUAIgdAAIgGgBg");
	this.shape_26.setTransform(145.4,80,0.203,0.203);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#403F3F").s().p("AifDxQgVgFgJgLQgIgJACgNQAAgIAGgOQAghggHhgQgFgsAAgWQgBgmAMgbQAOgjAmgZQApgdA5gIQAzgHBGAJQBSAKABAcQABAMgTAKQgTAJgWABQgbAAgNgNQgQgQgGgBQgmgJgpAMQgnALgUAVQgRARgFAZQgDAQABAeQADCRgRCMQgCAVgRAHQgJAEgMAAQgIAAgKgCg");
	this.shape_27.setTransform(143.3,74.9,0.203,0.203);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D6D7D7").s().p("AhdK6QjVgIiugtQgVgFgLgFQgRgIgIgNQgIgMgBgiQgBgYACgYIBXs+QAGg0AAg4QABhAABgLQAFhIA0hgQAIgPAtgEQA1gGAIgEQAXgLAvADQA3ADDSADQDFAGBBAUQAhAKAjgBQAUgBAggEQA0gDAfA3QAaAtgQA8QgWBPAEAjQAOB5gKDuQgKDtANB4QAEAkATBeQANBWgTAqQgaA2hPAbQg3AUhOAEQiqALiDAAQgwAAgrgBg");
	this.shape_28.setTransform(156.2,70.5,0.203,0.203);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6A6A69").s().p("AgnBPQghgQgMg1QgNg1AagZQAYgXA4AIQA6AHAOAeQAHAMABAaQACAigKATQgKAUgXALQgVAJgaABIgEAAQgVAAgPgHg");
	this.shape_29.setTransform(161.5,105.8,0.203,0.203);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6A6A69").s().p("AgkBFQgrgPgLgjQgIgXANgYQAOgYAYgHQAogQAoABQASABALAEQAVAKAIAaQAHAYgJAYQgJAZgVAPQgUAPgaAEIgNABQgSAAgSgGg");
	this.shape_30.setTransform(155.1,104.6,0.203,0.203);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6A6A69").s().p("Ag6BLQgtgZgHgiQgGgeAZgdQAYgcAmgMQAogMAlANQAlANASAmQASAmgTAhQgTAigvALQgTAFgRAAQgeAAgcgPg");
	this.shape_31.setTransform(145.5,105.7,0.203,0.203);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#403F3F").s().p("AFkClQAAhEgIgmQgMg6gigfQgggfg3gKQgkgHhBABIi7ACQgxAAgYADQgpAFgdAPQgxAYglA5QgYAmgcBLIhVgPQAahgAgg6QAshQBBgjQA3gdBMgCQA0gBBXANQCLAWCAAbQAuAJAaAKQAmAPAVAaQATAVAJAiQAGAVAGAqQAIBEgIAUQgJAUgaAAQgSAAgbgJg");
	this.shape_32.setTransform(153.5,102.1,0.203,0.203);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#403F3F").s().p("AgnGsQgJgKgFgRQgCgKgCgVQgQkEgCh1QgFjZAWihQAGgmATgMQAQgLAWALQAVAKAPAZQARAaABAeQADA/gDB5QgEB+ACA5IADDdQAFDBAMADQgMgDgyAEIgLABQgdAAgOgOg");
	this.shape_33.setTransform(153.6,90.5,0.203,0.203);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#403F3F").s().p("AAJB2QAEg6gZg3Qgag2gvgiQgHgGgBgEQgCgKAOgGQAZgMAdAEQAdAFAUATQASAQASAnQAUAvAFAQQAPArgEAXQgFAXgBAAQgIAAgRAEIgLABIgrgBg");
	this.shape_34.setTransform(154.2,101.9,0.203,0.203);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D6D7D7").s().p("AgOBPQhmgphRgsQgggRgKgNQgPgWARgZQAQgYAhgMQAcgKAngCQAZgCAuACIBsAFQA5ACAaAMQAkAQAVAxQAsBjACALQAOBBhHAFIgHAAQg/AAiDg2g");
	this.shape_35.setTransform(143.5,80.9,0.203,0.203);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373F4C").s().p("AixBGQgQgVANgRQBBhWBbgXQBhgYBXA+QATAOAGAYQAFAWgIAWQgTA2gzgWQgzgVgNgEQgjgMgfADQgcACgjAOIg9AZQgFACgFAAQgOAAgLgOg");
	this.shape_36.setTransform(140,74.9,0.203,0.203);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373F4C").s().p("Ai2BmQgYgIgNgXQgOgYAEgaQAEgcAagRQBlhEB3gKQCQgMA9BfQAJAMgHAPQgGAQgPADQggAIgxAAIhRAAQhgAFhPA1QgSAMgRAAQgJAAgIgDg");
	this.shape_37.setTransform(140.8,75.2,0.203,0.203);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1A1A1A").s().p("AAbBwQgQgCgRgKQgLgFgWgNIg8gjQgjgVgLgUQgKgRADgYQADgWANgRQAQgTASgCQAKgBAbAFQASAEAUgIQAbgJAJgCQAsgGAWgBQAlgBAcAKQAIAEACADQADAGAAAJIAAB2QAAASgDAJQgGAVgiAOQgkAQgdAAQgJAAgJgCg");
	this.shape_38.setTransform(146.6,100.7,0.203,0.203);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgEACIAHgDIABgBIAAABQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgFADg");
	this.shape_39.setTransform(164.9,30,0.203,0.203);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgBgDIABAAIAAAAIAAABIAAAAIABAGIgBABg");
	this.shape_40.setTransform(164.3,29.7,0.203,0.203);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEABIAJgCIAAABIgJACg");
	this.shape_41.setTransform(163.9,30.3,0.203,0.203);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgCgCQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIABAAIAAACIAAgBIAAABIAFAIIgCABg");
	this.shape_42.setTransform(164.5,30.5,0.203,0.203);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8F7F7").s().p("AgLARIAAAAIAAAAgAgSgIQABgCALgEQAIgDAGABIABABIABABIAIATQAAABAAABQABAAAAABQAAAAgBABQAAAAAAAAIgCABIgbAHQACgBgJgYg");
	this.shape_43.setTransform(165.4,29.9,0.203,0.203);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8F7F7").s().p("AgIASIgBgBIgIgWQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgCQAJgEANgDIABAAIABABIAFAOQAEAKAAABQgBACgFACIgGABIgMAEIgBAAIgBAAg");
	this.shape_44.setTransform(163.4,30.3,0.203,0.203);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#353536").s().p("AgQAaQgEgCgEgEQgLgOAFgOQAFgNARgFQANgEANAHQANAIACAOQABAOgNAIQgKAHgPAAQgIAAgEgCg");
	this.shape_45.setTransform(164.4,30.1,0.203,0.203);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8F7F7").s().p("AgKAhQgHgBgEgCQgEgCgEgFQgIgJAAgNQgBgMAHgJQAKgNATABQAQABANAMQAMALAAAMQAAAUgZAJQgDABgKAAIgLgBg");
	this.shape_46.setTransform(164.4,30.1,0.203,0.203);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373F4C").s().p("AiBCKQgwgRgIgbQgGgTAMgZQAQggAsgWQAagNA2gVQA+gbAygwIAmgiQAYgQAXALQAvAWgaBXQgTA/gjAyQgoA3guAUQgeANgkAAQgtAAg5gUg");
	this.shape_47.setTransform(161.7,49,0.203,0.203);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373F4C").s().p("AirJdQiDg8BHhJQBghjArg4QBBhVAdhWQA6iigMjhQgFhvgVhWQgYhpgzhVQBfgoAsAdQANAJAMAVQEUH7j1K9QgFARgHAJQgKAOgPAHQgOAFgdABIgRAAQhuAAhqgvg");
	this.shape_48.setTransform(164,43.3,0.203,0.203);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#67554E").s().p("AAoDYQgLgEgRgxQgSgzgGgGQgcgbgdgNIgigRQgRgMgDgPQgCgMAKgSQALgXABgJQACgLgGgPIgLgZQgOgfgCglQAAgPAEgGQAEgHAMgHQA8ghAmAOQAcAKAZAsQA2BeALCQQABAEATAsQARAngFANQgIAVgiAMQgTAGgPAAQgKAAgIgCg");
	this.shape_49.setTransform(163.1,27.4,0.203,0.203);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#343434").s().p("AhUGNQgNgBgFgFQgGgEgFgOQgRgrghgjIgWgVQgNgMgGgLQgLgUgCghQABglgDgTIgEgYQgCgOACgKQABgLAJgRIANgcQAFgPgFgPQgGgQgOgCQgPABgHgEQgGgDgDgJIgEgPQgEgQgOgSIgZgfQgegkANhBQAMg8AigkQAQgRAagNQAOgIAhgNQBIgcAogJQBAgOAyAOIARAFQAKACAIAAIAPgBQAKgBAGABQANACASALIA3AhQAdASAOAJQAXAQAPARQATATAJAXQAKAZgDAYQgBAJgEARIgFAZQgCARAGAZIAKApQAGAlgNAsQgJAigXArIgoBKQgVAsgHAjQgEAQgGAFQgEACgLACQgdAEghAZQglAggUANQghAYgmAKQgdAHgdAAIgWgBg");
	this.shape_50.setTransform(156.8,40.6,0.203,0.203);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#67554E").s().p("AiRE3QhNhHgYhzQgUhXAHiCQgCgRAAgNQAAhlBNhIQBNhHBrAAQBsAABOBHQBMBIAABlQAAAggKAhIAAAQQABBUgMA9QgOBJgmA6QgoA/hCAmQg0AfgwAAQhDgBg9g3g");
	this.shape_51.setTransform(155.9,40.8,0.203,0.203);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373F4C").s().p("AgxGtQgIgFgCgSQgKhSgTkUQgPjdgaiHQgGgfAAgSQABgcAPgQQANgPAYgGQAQgEAdgBIApgCIApgCQAxgBAVAUQAWAVgBAwQgBAXgEAkIgGA6QgFBPABB0IACDDIgBDmQAAAJgCAEQgDAGgNADQhFAQhFAAQgKAAgFgDg");
	this.shape_52.setTransform(136.9,91,0.203,0.203);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373F4C").s().p("AhsGjIgZsKIgLgwQCDgoCGAQQAPACAEAFQAFAGgBAPIgLDSQgICqgMBdQgRCCgyDLQgDANgFAFQgGAGgLADQgYAGgZAAQgpAAgngRg");
	this.shape_53.setTransform(148.4,90.5,0.203,0.203);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1A1A1A").s().p("AiwBTQgYgGgJgKQgFgGgDgNQgHgeAKgcQAFgOAIgEQAFgDALAAIBrAAQAMAAAGgBQAIgCAKgHIARgNQAtghBEgHQAcgDAsACIAYACQAPACAGAIQAFAGADAQIADAXQAFAfgBAjQgBAegNAKQgGAFgTADQh0ARhAADIgqABQhKAAg9gOg");
	this.shape_54.setTransform(135.4,100.7,0.203,0.203);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373F4C").s().p("AlXKGQgigNgNgQQgNgQgHgmQgkjEgTiQQgYi4gFieQgGi4AHhJQAOiVBChdQAuhBBYgZQA/gTBlAAQCEAACEARQA3AHAjAIQAxAMAkAUQBDAkAsBJQApBCAOBTQAMBHgFBYQgFA9gQBhQg5FXhjFNQgIAcgGAOQgJAWgMAQQgbAhgzAPQgmALg5ABIgVAAQjgAAjShSg");
	this.shape_55.setTransform(156.4,64.3,0.203,0.203);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373F4C").s().p("AkQHXQgDgFgDgMQgIgeACgeQACgkARgNQAUgfAkgNQAVgMAYAAQAGgBAJACQAigCAwAEQAYgHALgHQAPgKAEgRQAHgdAFgnIAGhGQABgOAGjQQAEiKAbhOQAOgpAOgZQASgjAYgVQAcgZAlgFQAmgFAcAUQApAfAABNIgBC1QgFBrgaBCQg1CHgWCLIgNBMQgIAsgOAeQgHARgxAGQg+AGgHADQgRAHgXACIgqgBQhTgDhTAQQgKACgIAAQgQAAgIgIg");
	this.shape_56.setTransform(143.9,61.1,0.203,0.203);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373F4C").s().p("ACsDXQgWgGgagNIgugYQhagwhcgkQglgPgYgFQgjgIgcAEIgXAEIgWADQg4ABggg/Qggg9AagyQALgVAdgPIAxgVQAqgSAggFQAqgIAjAJQAQAEApASQAvAUA3AQQgBgPAEgPQAIgZAbgSQAVgOAggHQAegGAgAGQAVAFAmAPIA5ATQAjANARAQQAlAkgPAnQgMAggsAcIABAJQAOBJgGAqQgFAegNAZQgPAbgYAOQgVANgbABIgKABQgUAAgVgGg");
	this.shape_57.setTransform(142.8,77.2,0.203,0.203);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373F4C").s().p("ABAElQgjgGgPAAQggABgTgFQgcgHgMgTIg3gTQgVipAHi0QACgfADgTQAGgcAMgTQAXgjA/gWQA/gXBCgFQAQgBAIAFQAIADAHAMQAKARAEAZQACAQABAdQABB/gEBVQgFB6gRBZQgGAhgLAOQgJALgWAAIgLgBg");
	this.shape_58.setTransform(137,79.4,0.203,0.203);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#67554E").s().p("AAfBlQgJgCgTgMQgYgSgNgLQgUgRgLgTQgLgSgGgbQgFgYAHgQQAIgTAegNQAQgGAMAAQAjAAAdAwQASAfAKAeQANAqgKAYQgGAOgOAIQgLAGgKAAIgJgBg");
	this.shape_59.setTransform(138.4,67.2,0.203,0.203);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F4F4F4").s().p("AgRFkQgKgDgPgdIgUgpIkFnGIgPgVQgKgQAAgGQBigyCEgkQBQgVCgghQAIgCAFADQAEACAEAKIAPAzQAwCfAnBaIA2B1QAhBHAPAxQACAHgBAFQgBAEgLAGQgrASg3AVIjWBSIgVALQgNAGgGAAIgBAAg");
	this.shape_60.setTransform(141.4,64.1,0.203,0.203);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EFEFEF").s().p("AhJDfQhJh6hVhpQgpg0gwg1QgQgOgHgJQgNgPAHgMQAHgKAPgKIAZgNICmhUQByg4AygbQARA+ArA/QAZAmA7BMQAXAeA3BpQAuBYAoAoQARARgBANQioBni4BUQgkhLglg+g");
	this.shape_61.setTransform(141,63.8,0.203,0.203);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#626161").s().p("AgUAEQgJgBAAgCIAGgFIACgBIACAAIAuAAIADABIAAACIgGAIg");
	this.shape_62.setTransform(104.5,60.3,0.203,0.203);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#626161").s().p("AgGAGIgQgBQACgFAEgFIAnACIgGAEQgGAEgCABIgJAAIgGAAg");
	this.shape_63.setTransform(104.3,59.9,0.203,0.203);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#626161").s().p("AgGAGIgRgCIgDgBIAAAAIAGgHIABgBIACAAIAsABQgKAJgGABIgIAAIgJAAg");
	this.shape_64.setTransform(105.4,59.9,0.203,0.203);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#626161").s().p("AgXADQACgFAGgEIAMAAIAbAEIgIAFQgGADgEABg");
	this.shape_65.setTransform(103.1,59.9,0.203,0.203);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#626161").s().p("AgMAEQgGgBABgCIAFgEIACgBIACAAQALgBAPACQAAADgDAEIgCABIgDABg");
	this.shape_66.setTransform(100.3,59.9,0.203,0.203);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#626161").s().p("AgOAGIgHAAQgFgBgBgBQgBgCAGgFIABgBIADgBQAXAAAXACQgBAEgEAFg");
	this.shape_67.setTransform(109.2,59.5,0.203,0.203);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#626161").s().p("AASAFQgPgBgPAAIgLgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBIAEgCIABgCIAEAAIAlAAQAAAEgCAEIgBABIgBAAIgCAAg");
	this.shape_68.setTransform(107.9,59.5,0.203,0.203);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#626161").s().p("AANAGIgcgCQgLgBAJgGIADgCIAdAAIAGABQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQgCADgCACIgCABg");
	this.shape_69.setTransform(106.6,59.5,0.203,0.203);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#626161").s().p("AgMAEQgHAAgBgCQAAgBACgDIABgCIAmACIgBADIgCACQgCABgFAAg");
	this.shape_70.setTransform(105.4,59.5,0.203,0.203);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#626161").s().p("AgYADQAFgDAAgCIABgBIArgBQAAAEgCADIgDACg");
	this.shape_71.setTransform(104.1,59.5,0.203,0.203);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#626161").s().p("AgLADIgLgBQgEgBAFgCIADgDIArAAIgCAGQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgDAAg");
	this.shape_72.setTransform(102.9,59.5,0.203,0.203);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#626161").s().p("AgPAEQgGgBACgDQABgDAGAAIAgAAQACADgEADIgBABIgCAAIgeAAg");
	this.shape_73.setTransform(101.7,59.5,0.203,0.203);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#626161").s().p("AgKADQgKAAgBgBIAEgEIACgCIAkABQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAIgDADIgCABg");
	this.shape_74.setTransform(100.6,59.5,0.203,0.203);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#626161").s().p("AALAFIgOgBIgOgCIgEgBIABgBIAIgDIAFAAIAdABQAAACgDACIgDADg");
	this.shape_75.setTransform(99.5,59.5,0.203,0.203);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#626161").s().p("AAAAEQgVgBgDgCIAQgFIAhADIgJAGIgCAAIgCAAIgMgBg");
	this.shape_76.setTransform(98.3,59.4,0.203,0.203);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#626161").s().p("AiOAAIgpABIgPABQgKAAAAgCQACgDAbgBIAjABIClABQB7ABA+gCQABABABAAQAAAAABABQAAAAAAABQAAAAgBAAQgBACgFABQgFACgOAAQjYgGhtABg");
	this.shape_77.setTransform(99.2,60.2,0.203,0.203);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3F3F40").s().p("Ao4AiIABgFIgCAAIACgDIABgFIAHAAIAQgEQBqgTA4gEQA5gFBTgRIAkgGQANgBAiACQAlADBMAAQEzABE0gEQABAGgDAFQgCADgYAFIgeAGIg8ALQg/AMg5AHIgwAGQgdAEgVgBIgBADQh+gBkVABIjHABIjHgBg");
	this.shape_78.setTransform(102.2,59.9,0.203,0.203);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#626161").s().p("AABAJQgBAAgEgDIgBgBQgDgCgDABIgBABIAAABIgBAAIgPgIQgBADgDAEIgBAAQgDgFgHABQgHAAgCAEIgBABIAAgBQgCgDgJgBQgPgCgNgGIAAgBIABAAQAMAHAPABQAIABADADQADgEAHAAQAHAAADADQAEgCAAgEIAAAAIABAAIAPAIQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQADgBAEACIABABQADADACAAQgBgEAHgCIAKAAIANAAQARgCAHADIACABQAGAEADgCIADgCIAFgDQACAAADAEQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAFgCAAgGIABAAIABAAIAAAEIgBABQAAAAAAgBIgBAAQgBADgDACQgCABgEgBIgDgEIgEgDQgCAAgCADIgEACQgDACgHgEIgCgBQgHgDgQACIgNABIgDgBIgHAAQgGACABAEIgBAAg");
	this.shape_79.setTransform(103,54.1,0.203,0.203);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#626161").s().p("ABTALIgBAAIAAgEIABgBIAAAAIgBgCIgHACIgBAAQgOgDgMAFIgBAAIgDgGQgIAHgGAAIAAAAQgFAAgCgDQgCABgFAAQgJAAgHgCIgCgBIgDABQgDAAgDgCIgBgDQgDACgEAAQgEgBgCgCIgBgCQgEADgDgBQgEAAgGgFQgFAGgKgCQgJgBgEgGQgGAFgGAAIgBgBIABgBQAHABAFgFIABAAQADAGAJABQAKACAFgGIABAAQAFAFAEAAQAEAAACgCIAAAAIABgDIABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIABADQACABADABQAEAAADgBIAAgBIADgEIAAAAIABAAQAAADgDACIABACIAFACIABgBIgBgBQAAgBgBAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQACABgCADIgBABIACAAQAGACAJAAQAEAAACgBIAAgBQgCgDADgBIABAAIACACIgCADQADADADAAQAGAAAIgHIAAAAIABAAIADAGQAMgFAOADIAIgCIABAAQAEAEgEAEgAgEgBQAAAAAAABQgBAAAAAAQAAAAABAAQAAABAAAAIACACIABgBQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_80.setTransform(103.2,53.2,0.203,0.203);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#626161").s().p("AAqAGQgJgDgJgFQABADgBAEIAAAAIAAAAQgKgCgEgGIgBAGIAAAAIgBAAQgIgDgFgEIgBACQgCADgFgBIgFgBIgGAAIgCAAIgFABIgCgBIgBgBQgGgBgLABIgBgBIAAAAQAOgBAEABIABABIADABIAEgBIACAAIAHAAIAEABQAEABACgDQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAAAIABAAQAFAFAHACIABgGIABAAIABAAQAFAEAIAEIAAgHIAAgBIABAAQAHAGAKADQACgDAAgEIAAAAIABAAQADADAGABIABABIgBAAQgFgBgDgCIgDAGg");
	this.shape_81.setTransform(102.7,52.6,0.203,0.203);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#626161").s().p("AAQAIIgEgEQgDABgDgBQgEgBgEgDIAAACIgBABIgCABIgEgCIgFgFIAAABIgCACQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgCgCIAAAAIABAAIACACQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIACgCIAAgDIABAAIAGAGIADACIABAAIABgCIAAgDIgDgFIAAgBIABABQADACAAADQADAEAGABIAEABIgEgEQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAQAGACAAAFQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAIAAABIAEADQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAIABgCQABgEgFgCQgBADADACIAAABIgBAAQgEgEACgEIAAAAIABAAQAHADgCAGIgBACIgCAAgAAIAAQACACACABIAAAAIABgCQAAgEgFgDQgDACADAEg");
	this.shape_82.setTransform(104.5,52.7,0.203,0.203);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#626161").s().p("AAqAJIgDgCIgJgJIgDAJIAAAAIgBAAQgGgDgGgFIAAAEIgBABIAAAAQgIgEgFgEIAAADIAAAAIAAAAQgFgBgCgEQgCACgEAAIgIgCQgGAAgCAEIgBABIAAgBQgCgCgFgCIgCAFQgDADgDgCQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBgBQgBAAgBgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAAAQADgCADADIACAAIADACQADAAACgCIACgFIAAgBIABAAQAEACADADQADgEAGAAIAIACQAEAAABgDIABAAIABAAQAAAEAFACIABgEIAAAAIAAAAQAEAFAIADIABgFIAAgBIABABQAEAEAIAFIADgJIAAAAIABAAIAKAJIACACIADAAIABgCQgGgEAEgEIABAAIACADIABgBQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAFADAAAFIAAABIAAAAQgGAAgEgCIgCACIgCAAgAA4AIQgBgFgEgDIgCAAIAAAAIAAAFIgBABQAEACAEAAIAAAAgAAvAFIAAgBQAAgCgCgCQgDACAFADg");
	this.shape_83.setTransform(102.6,51.8,0.203,0.203);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#626161").s().p("AAbAJIgDgCIAAABQgDABgFgBQgGgDgEgFIAAACIgBABQgFgDgBgDIgBABQgCADgEgBIgDgBIgHgFQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgEABQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIABAAIABAAIABABIADgBQADgCgCgCIABgBIAAAAIAJAGIADABQAAABABAAQABAAAAgBQABAAAAAAQABgBAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABAAIAAAAIABAAQAAAGAFACIABgBIgDgHIAAgBIABAAQAEADgBAEQAEAFAGADQAEACACgCIABgBIgCgCQgCgEADgDIAAAAIABAAQACADAAAEIgBACIACACIABAAIgBABgAAXADIABACIAAgBIgBgFQgBABABADg");
	this.shape_84.setTransform(104.6,52,0.203,0.203);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#626161").s().p("AABAJQgBAAgEgDIgBgBQgDgCgDABIgBABIAAABIgBAAIgPgIQgBADgDADIgBABIAAgBQgDgEgHAAQgHAAgCAFIgBAAQgCgDgJgBQgQgCgMgHIAAAAIABAAQANAHAOABQAJABACADQADgEAHAAQAHAAADADQAEgDAAgDIAAAAIABAAIAPAHIACgBQADgCAEADIABABQADADACAAQgBgFAHgBIAHAAIADAAIANgBIAMAAQAHAAAFACIACABQAGADADgBIADgCQADgDACAAQACAAADADQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAFgDAAgFIABAAIABAAIAAAEIgBABIgBgBIAAAAQgCAEgCAAQgDACgDgCQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgCgDgCAAIgEACIgEADQgEABgGgDIgCgBQgHgDgQACIgNAAIgDAAQgEgBgDABQgGABABAEIgBABg");
	this.shape_85.setTransform(110.2,54.4,0.203,0.203);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#626161").s().p("ABTALIAAgEIAAgBIABAAIgBgCIgIADIAAAAQgOgEgNAFIAAAAIgBAAIgDgGQgHAHgGAAIgBAAQgDABgEgEQgDABgEABIgPgCIgDgCIgDABQgDAAgCgDIgCgCQgDADgDgBQgEAAgDgDIgBgCQgDACgDAAQgFAAgFgFQgGAGgJgBQgKgCgDgGQgFAFgIAAIgBgBIABgBQAIAAAEgEIABAAIAAAAQADAGAKACQAJABAFgGIABAAIAAAAQAHAFADAAQACAAADgBIABgBIAAgDIABgBIAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIABADQADACADAAQACAAAEgBIAAgBQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAIABgBIAAABQAAADgCACIABACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIACAAIgCgDQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQACABgCADIAAABIABABIAPABIAHgBIgBAAQgBgEADgBIAAAAIACABQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQADADAEAAQAFAAAIgHIABAAIADAGQAOgFANAEIAIgDIAAAAQAEAEgDAEIgBAAgAAYAEIABgDIgBgBQAAABgBAAQAAABAAAAQAAABAAAAQAAAAABABgAgEgBIAAACIACACIACgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgBg");
	this.shape_86.setTransform(110.4,53.6,0.203,0.203);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#626161").s().p("AAqAHQgLgEgHgFQABADgBAEIAAAAIgBAAQgHgCgGgFIgBAFIgBAAIAAAAQgIgDgFgDIgBABQgCACgFAAIgEAAIgHgBIgHABIgCgBIgBAAQgGgCgLABIgBAAIAAgBQANgBAFACIABAAIADABIAGgBIAHABIAEABQAEAAACgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgBIABABQAFAFAHACIABgGIAAAAIACAAQAFAFAIADIAAgHIAAgBIABAAQAIAGAJADQACgDAAgEIAAAAIABAAQAEAEAFAAIAAAAIAAABQgEAAgFgDIgCAGIAAABg");
	this.shape_87.setTransform(110,52.9,0.203,0.203);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#626161").s().p("AAQAIIgEgEQgDABgDgBQgFgBgDgDIAAABIgBACIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBIgFgDIAAAAIgCACIgEAAIgCgBIAAgBIABAAIACACIACAAIACgCIAAgCIAAgBIABAAIAGAGIADABIABAAIABgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgDgHIAAAAIABAAIADAGQACADAHACIAEAAIgEgDQgDgFADgCIABAAQAGADAAAEIgBADIAAAAIAEAEQABAAAAABQABAAABAAQAAAAAAAAQABAAAAAAIABgBQACgGgGgCQgBADADADIAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEgDACgFIAAAAIABAAQADABABACQACADgBADIgBABIgCABgAAIAAIAEADIAAgBIABgCQAAgCgFgEQgDABADAFg");
	this.shape_88.setTransform(111.7,53.1,0.203,0.203);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#626161").s().p("AA5AJQgGAAgEgCIgCABIgCABIgBAAIgDgCIgJgJIgDAIIAAABIgBAAQgHgEgFgFIAAAFIgBABIAAAAQgIgEgFgEIAAACIAAABIAAAAQgFgCgCgEQgCAEgEgBIgIgBQgGAAgCADIgBAAQgDgDgEgCIgCAGQgDACgDgBIgEgBIgBgBQgBAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAABIgBAAIAAgBQAEgCACADIAFACQADAAACgCIACgFIAAgBIABAAQAEACADADQAEgFAFABIAIACQAEABABgEIACAAQAAADAFADIABgDIAAgBIAAAAQAFAFAHADIABgFIAAAAIABAAQAEAEAIAFIADgJIABAAIAKAJIACACQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIABgBIAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAgBIABAAIAAAAIACACIABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAFACAAAGIAAABgAA4AIQgBgGgEgCIgCAAIAAAAIAAAFIgBABIAIACIAAAAgAAvAGIAAgBQAAgDgCgDQgDADAFAEg");
	this.shape_89.setTransform(109.8,52.1,0.203,0.203);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#626161").s().p("AAbAJIgDgCIAAABQgDACgFgCQgFgCgFgGIAAACIgBAAQgFgCgBgEIgBACQgCADgEgBIgDgBIgHgFQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgEABQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAIABgBIABABIABABQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBgBAAIABgBIAAAAIAMAIQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIABgFIABAAIABAAQAAAGAFACIABgBIgDgHIAAgBIABAAQAEADgBAFQAEAFAGACQAEACACgCIABAAIgCgEQgCgDADgDIABAAQACADAAAEIgBACIADADIgBAAgAAXADIABACIAAgBIgBgFQgBABABADg");
	this.shape_90.setTransform(111.8,52.3,0.203,0.203);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#626161").s().p("AgkABIgDAFIAAABIgBAAQgKgGgMADIgGgDIgBACIAAAAIABABIgBAEIAAAAIgBAAQgBgFACgDIABAAIAGADQAMgDALAFIACgFIABAAIAAAAQAGAHAFAAQAEAAACgDQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIAAAAQADACgCADIAAAAQACACADAAIANgBIABgBIgBgBQAAgCAAgCQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAIgCACIACAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAABAAIABgDQgCgBAAgDIAAgBIABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAAIAAAAQACACADAAQADAAACgCIABgDIAAgDIABAAIAAAAIAAADIABABQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAQAEAAAEgFIABAAQAEAFAIAAQAIgBADgGIABAAQADAFAHAAIAAABIAAAAQgHAAgEgFQgDAGgIAAQgIABgFgFQgEAEgEAAQgDAAgCgCIgBACQgCACgEABQgDAAgCgCIgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgBIgCACQgHABgGAAIgGgCQgDADgDAAQgFAAgGgHgAgUABIABADIAAgBQABAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAgAABgBQAAABgBAAQAAAAAAAAQAAABABAAQAAABAAAAIABABIACgBQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIgBgBg");
	this.shape_91.setTransform(106.6,53.4,0.203,0.203);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#626161").s().p("AgjAGIgBgHQgEACgEAAIAAAAIAAAAQAFgBADgDIABAAIAAABIABAGQAJgDAGgFIAAAAIAAAAIAAAIQAHgCAFgGIABAAIABAAIAAAGQAGgCAFgFIAAAAIAAABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQACABADAAIAEAAIAHAAIACAAIACAAIACAAIABAAQAFgDAKADIABAAIgBAAQgKgBgEABIgBAAIgDABIgDAAIgCgBIgGAAIgDABQgEAAgCgCIgBgBQgFADgGACIgBAAIAAgFQgEAFgIACIAAAAIgBgBIABgGQgIAFgIADg");
	this.shape_92.setTransform(107.6,52.8,0.203,0.203);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#626161").s().p("AglAHIgCgBQgCABgGAAIAAAAQABgGAEgCQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIABACIACgDIAAAAQADAEgFAEIABACIADAAIACgCIAIgJIABAAIAAABIACAIQAHgDAEgFIAAAAIABAAIAAAFQAGgCAEgFIAAAAIAAAAIABAEQAEgCABgEIAAAAIABAAQAAADAEAAIAHgBQAEAAADAEIAHgEIAAAAIAAAAIACAFQAAAAAAABQABABAAAAQABAAAAAAQABAAABAAIADgCIABAAQADgDACADIAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgDABgCgEQgCgBAAgDQgDABgCADIgBAAQgDgEgEAAIgHABQgDABgCgDQgBADgEACIgBAAIAAgBIAAgCQgGAFgFACIAAAAIAAgFQgGAFgFADIAAAAIgBgBIgCgIIgHAIIgDACIgBAAgAgqgBQgDACgBAFQAFAAACgBIAAgBIgBAAIABgEIgBgBIAAAAgAgmADIAAABQAEgDgCgCIgCAEg");
	this.shape_93.setTransform(107.8,52,0.203,0.203);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#626161").s().p("AA0ANIgDgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgDACgFgBQgEgCAAgEIAAgEQgJAGgIACIgBAAIAAAAIACgLQgLAGgMACIAAAAIAAgBIAEgKQgJAJgNADIgBgBIAAAAIAEgMQgIAJgKAGQgFACgCgBQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgCgDQgDAEgGABQgEABgBgCIAAgCQgFACgFAAIAAgBQgBgFACgFIgGAFIgBAAIAAgBIAIgGIAAAAIAAABQgBAEAAAHQADAAAGgDQgBgEAEgDQADgEAFgBIAAAAIAAABQgDAHgHAFIAAACQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQAGgBADgEIAAgDQACgDAFgFIABAAIAAAAQgBAHgFAFIABACQAAAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQACABAFgCQALgHAJgLIAAgBIAAABQgEAKgBAFQAOgCAIgLIAAAAIAAAAIgDANQALgCALgHIABAAIAAABIgCALQAJgCAKgGIAAAAIAAAAQgCABABAEQABADADACQADABAEgCIAAgCQABgFAFgFIAAAAIABAAQAAAEgCAEIgEAEQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAIAEABQAIgBAGgFQAAgDABgDQADgBADAAIAAABIgFAGIAAAAQACACADAAQADgBACgDIAAAAIABABQgCADgEABQgEABgCgDIAAAAQgGAFgJABgAAwAGIAAABIADgDQACgEAAgDQgEAEgBAFgABGABIgCAEIAFgFIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABAAAAgAg+AEQAGgEADgHQgJADAAAIgAgvAAIAAACQADgDACgFQgFAEAAACg");
	this.shape_94.setTransform(106.2,50.2,0.203,0.203);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#626161").s().p("Ag4AbIAAAAIABgBQADADAHgEIAIgFQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgDABgFQAEgQAIgPQAEgFAEAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAABQACAbgWATQADADAEAAQAFABAHgDQAFgDADgDIABgEQACgLAGgIIABAAQACANgKAKIAAACQACADAFgBQABAAAFgEIABgCQAAgHAGgHIABgBIAAABQgBAHgFAHIgBAIQALgBAHgUIABAAIAAABQgBAGABAIQAFgEACgFIAAAAIABAAQgBAEACADIAKgGIABABQAEAGAGgEIABABIAAAAQgHAEgFgGIgKAFIAAAAIgCgGQgDAFgFADIAAAAIAAgMQgHARgLABIAAgBIAAgGIgBAAQgDAEgDABQgFABgDgEIAAgBQgFAEgEACQgHADgFgBQgEAAgEgDIgIAFQgFADgDAAgAgagVQgIAOgEAQQgBAFABADIABACQAWgTgCgaIgBAAIgBAAQgDAAgEAFgAgHALIgBADQAKgKgCgKQgFAHgCAKg");
	this.shape_95.setTransform(103,50.1,0.203,0.203);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Ah9DUIiRgFIgRgBQgHgCAAgKQgBgTACgdIAEgwIAFhhIAFhxQAFhlABAAQB6gDCZAHQBVADC+ALQAJABACACQAEADABAKQAEA9gCA0QgCAvgIBMIgPCWIgBAFQgCABgEAAQhcAChYAAQhqAAhmgDg");
	this.shape_96.setTransform(106.7,53.1,0.203,0.203);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F4F4F4").s().p("AAyDyQixgIhTACIhUABQgwgCgjgKQgDg0AIifQAGiDgNhOQgFgZALgIIAKgIQAGgFAFAAQA3AACygDQCLgDBtADQB7ADAlgBIAigBIAjAAQARABAEAEQAEAFgDARQgTCHgKCLQgFBOgHBOQgCAWgKAGQgEADgNABIg9ABQhQAAh3gFg");
	this.shape_97.setTransform(106.9,52.4,0.203,0.203);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4D4D4D").s().p("AhiE9Ij9gKQgxgBgNgYQgFgLgBgYQgCg0AKhiQAJhlAAgwIgBiFIgDg0QgBgkAKgLQANgNAqgGQAWgDAkgCQA3gIBBgCQBGgDCqAHQCaAFBXgGQAYgBAdAGQAjAHAIAPQAFAKABAUQAFBPgTCJQgVCWAABAQgBBQgWAZQgOAQgeAJQggALgxADIhSACQgsACgyAAQhIAAhWgDg");
	this.shape_98.setTransform(106.7,53.1,0.203,0.203);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#403F3F").s().p("AhUDxQgMgFgEgLQgEgJABgNQAAgGADgRQARhfgEhgQgCgsAAgWQgBgmAGgcQAIgiAUgaQAWgcAegIQAbgIAlAJQAsALAAAbQAAANgKAKQgKAJgMABQgOAAgHgNQgIgQgDgCQgUgIgWAMQgVAKgKAVQgJASgDAZQgBAPAAAeQACCPgJCPQgBAVgJAHQgFAEgGAAQgFAAgFgCg");
	this.shape_99.setTransform(195.9,74.2,0.203,0.203);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A29682").s().p("AhOKbQgXgLgPgYIgYguQgPgbgQgNQgdgXg3AEQhAALgfABQhBABg1gkQgVgPgIgPQgHgQACgnQACglgKgRQgDgFgJgJIgLgOQgLgTAHgaQAGgWARgUIAggkQASgVAFgTQAEgPAAgWIgBgmQABgUAIgRQAJgSAQgGQAbgKAlAfIAigNQArgRAfgpQAdgmAOgxQALgqABg2QABgkgFg9QgGhNgNgwQgugjgNguQgPgzAlgrQAqgzBKgUQBIgTBBASQBbAbBgBEQBzBQADBGQACAmgCBOQABBEASArQANAcgUAnQgPAdAeAVQAWAQAGAOQADAFAFAWQAEARAHAGQAHAHARAFQAtAOAXAQQAjAXABAgQAAAJgCATQgBAQAGAJQAGAHAQALQALALAAAUQAAARgHASIgQAhQgIATAAAPQAAAJAEAQQAEARAAAIQACAXgOAUQgOAVgWAHIgtAJQgaAGgHAQIgDANQgCAJgDAEQgGAIgPAEQgWAFhFgNQg4gLgaAWQgPANgOAnQgNAogQANQgTAOgxADQgxADgRAPQgEADgKAMQgJAJgHAEQgKAHgMAAQgLAAgNgHg");
	this.shape_100.setTransform(209.6,45.7,0.203,0.203);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D6D7D7").s().p("AhrLLQj3gIjIgsQgYgGgNgFQgUgIgJgMQgKgNgBghQgBgaADgXIBls+QAGg0ABg0IABhFQAGg+A8hgQAJgOA0gFQA+gGAJgEQARgGAXgCQAOgBAbABQAtACEEgkQDqggBFASQBXAXANALQAIAGAyBLQAkA2ANA0QAHAbALBXQAQB5gMDuQgLDtAPB4QAFAkAWBeQAPBWgXAqQgdA2hbAcQhAAThaAFQjBAKiVAAQg6AAg0gBg");
	this.shape_101.setTransform(208.9,69.5,0.203,0.203);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6A6A69").s().p("AgnBPQghgQgMg1QgNg1AagZQAYgXA4AIQA6AHAOAeQAHAMABAZQACAjgKATQgKATgXALQgVAKgaABIgEAAQgVAAgPgHg");
	this.shape_102.setTransform(216,105.2,0.203,0.203);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6A6A69").s().p("AgkBFQgTgGgOgMQgPgOgGgRQgIgXANgZQAOgYAYgHQAngQApABQASAAALAFQAVAKAIAaQAHAYgJAYQgJAZgVAPQgUAPgaAEIgOABQgRAAgSgGg");
	this.shape_103.setTransform(209.6,103.9,0.203,0.203);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6A6A69").s().p("Ag6BLQgtgZgHgiQgGgdAZgdQAYgcAmgMQAogNAlANQAlANASAmQASAngTAgQgSAigwALQgTAFgRAAQgeAAgcgPg");
	this.shape_104.setTransform(199.9,105,0.203,0.203);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#403F3F").s().p("AFkClQAAhEgIgmQgMg6gigfQgggfg3gKQgkgHhBABIi7ABQgxABgZADQgoAFgeAOQgxAYgkA6QgYAmgcBKIhVgOQAZhgAhg7QArhPBCgkQA2gdBNgBQA0gBBWANQCGAVCGAbQAuAKAZAKQAnAPAVAZQASAWAKAhQAGAWAFApQAJBFgJAUQgIAUgbAAQgSAAgagJg");
	this.shape_105.setTransform(208,101.4,0.203,0.203);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#403F3F").s().p("AgnGsQgJgJgFgRQgCgLgCgVQgQkDgCh2QgFjYAWiiQAGgmATgMQAQgLAWALQAVAKAPAZQARAbABAdQADBAgDB4QgEB+ACA5IADDdQAFDBAMADQgMgDgyAFIgLAAQgdAAgOgOg");
	this.shape_106.setTransform(208,89.8,0.203,0.203);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#403F3F").s().p("AAjB2QgZgBgBABQAEg6gZg3Qgag1gvgjQgHgGgBgEQgCgJAOgHQAZgMAdAEQAdAFAUATQATARARAmQAUAuAFARQAPArgEAXQgFAXgBABQgIgBgRAEIgIABIgUgBg");
	this.shape_107.setTransform(208.7,101.2,0.203,0.203);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1A1A1A").s().p("ABXClIAEhjQABgKgDgHQgEgKgHAAQgMgBgFAUQgDAQAAAjQgDAegPAOQgLALgVADQgNABgYgCQgggDgRgEQgagFgUgKQgZgNgBgTQgBgMAIgJQAIgJAMgFQAIgDAPgCIAXgEQAkgIAbgcQAagdAFgjQABgMAAgUIAAggQACgnAVgSQAWgTAkAHQAbAFALAHQAPAKgBAUQAAAPgIAeQgKAjgCALQgNBZAOBbQACAKgDAEQgDAEgHABIgNABQgLAAgKgDg");
	this.shape_108.setTransform(200.3,98.6,0.203,0.203);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1A1A1A").s().p("AgmCeQgHgEgDgIQgEgJABgYQADhRgMhRIgEggQgBgSACgOQADgQAKgNQALgOAOgEQAPgDAZAIQAnAMAJAUQAGAQgHArQgFAbgEAOQgGAWgKAOQgPAWgaAQQgIAFgDADQgDAFgBAJQgFAtABArIgEABQgGAAgFgEg");
	this.shape_109.setTransform(211.2,98.4,0.203,0.203);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#81A3AB").s().p("AACLQQiDgHiBgdQgcgGgQgHQgYgJgPgOQgagYgQg3QgZhUgPh8QgOiOgJhHQgNhtgJjJQgJjPgMhnQgEgoAEgaQAFgkAWgSQAQgMAYgFQAPgDAfgCQAzgCAtgRQBRgeAOgDQAPgFBBgYQAxgTAggEQBHgKBpAiQBYAcBKA3QBMA4AyBLQAkA3ALAwQAHAggCAqQgCAYgGAzQgiEDgTBmQgmDJg+CVQhNC8h6AnQglALg5AAIgkgBg");
	this.shape_110.setTransform(208.7,63.5,0.203,0.203);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DED3C6").s().p("AiFEsQhCgogehGQgahAAEhPQAEhEAbhLQATgzATggQAyhRBXgsQBmgzBIA2QAcAWAeAyQAgAzAMAhQAQArAEAuQAEAwgKAqQgJAkgXArQgPAbgeAtQglA3giAfQgsAqgxAMQgTAFgUAAQgxAAgxgeg");
	this.shape_111.setTransform(207.2,41.4,0.203,0.203);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DED3C6").s().p("AhgGRQgEgGgBgMQgLhRAIh/QAMiwAAghQAAg/gKhiQgNiHgBgZQgCgWAFgLQALgYAsgGQAxgGA0AHQAnAFASAQQAMALAFAQQAEAQgIANIgEAiQgCA2gRBHIgfB7Qg3DTgWD6QgBAKgEAEQgEAFgMAAIgEAAQgqAAgLgVg");
	this.shape_112.setTransform(203.4,89.4,0.203,0.203);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DED3C6").s().p("AhQC5QgQh/AEhPQAFiIgNh/QgEgyAhggQAjgiA4ANIArAJQAPADAGAEQARALAAAbQAAAKgJAgQgRA6gNBwIgiEkQgRCTgGBIIg9ACIgYjPg");
	this.shape_113.setTransform(211.6,89.5,0.203,0.203);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#81A3AB").s().p("AgmDzQiCgShzg7QgcgOACgRQABgGAHgKIAjgtQBDAdArAFQBBAIAsgiQAcgWAUgwQALgYANgpIAWhEQASg1AYgaQATgVAagMQAbgMAcAAQBCgBAiArQAkAtgcA6QgUAsgLATQgSAjgSAYIgxBDIgdAtQgSAdgNAQQgnA0gvALQgNAEgVAAQgQAAgXgDg");
	this.shape_114.setTransform(195.5,57.3,0.203,0.203);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#DED3C6").s().p("AhCAqQgPgGgGgIQgHgKADgRQABgLAGgHQAIgJARgCIAegDIAPgHQAKgFAFgCQAVgFAcATIAYAPQAPAKADAJQADALgKALQgJAMgMgBQgEAAgGgDIgLgEQgKgDgOAFIgWAKQgRAGgQAAQgPAAgPgFg");
	this.shape_115.setTransform(188.7,59.5,0.203,0.203);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#81A3AB").s().p("ABaB5IgYgKQgPgGgMgDQgTgEghgDIg2gFQgkgFgRgOQgLgKgFgOQgFgOAGgNQAGgNASgIIAggQQAIgFARgRQAQgQALgFIATgHQALgFAFgGQADgEAEgIIAHgNQAPgZA5ACIALADQACABAFAJQAWA1AEA7QAEBCgVAuQgHAPgFABIAAAAQgDAAgQgGg");
	this.shape_116.setTransform(194.9,76.6,0.203,0.203);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D6D7D7").s().p("AggBPQhGg5gZgTQgWgPgIgOQgLgWAMgaQAMgYAYgMQAUgKAcgCQARgBAiACIBMAFQAqADASALQAaAPAPAyQAQAzgTAxQgWA3g4AFIgGAAQgpAAg8gsg");
	this.shape_117.setTransform(196.2,80,0.203,0.203);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#403F3F").s().p("AhLOwQgNghAFjWQAJjdAAgdIAA1uQAAgaAKgJQAJgIAWABIB3ACQgmEuAJE0QADBqALDVQAIC7gMCCQgRDKgICgQgOEKAPBgQhmgDgQgog");
	this.shape_118.setTransform(237.7,84.9,0.203,0.203);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#403F3F").s().p("AhPPOQgKhcAGlBQAIlRAAhMQACoNgImkQgBgwAEgaQAGgpASgbQAWgfAngHQAqgHAVAdQAbEbgRKHQgTLkAGC+QACAjgPAfQgkAIgkAAQgeAAgfgFg");
	this.shape_119.setTransform(66,85,0.203,0.203);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E9E8E8").s().p("EhJzAALQARgngFgUIKUgNQGMgIEHAEUAEjAAEA60gAHUA4JgAHAHQAAPQAfA/gYA1UgMPAAJg9rAAEMhJ8AACQgFgUARgog");
	this.shape_120.setTransform(151.5,61.5,0.203,0.203);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#403F3F").s().p("EhD4ACVQieAAg7gDQgmgBgMgEQgIgCADgFQgLgFAEgKQAHgOgBgCQgFgWgDgTQgGgrAEgsQABgdACgOQAEgZAKgTQAJgPAFgMQAHgEA5gBQEQAAC2gCUAFIgAEBP1AABMArfAADQFBAABhAEQA3ABAIACQAJABgDAIQgFALgOAaQgMAXAEANQAJAgABAkQAAAbgGAfQgBAFAEANQADAOgCAHIAIAAQgCAFAGALQABAKgZAFQgMADgeACQhGAElZAAMh/PAAAIlFACg");
	this.shape_121.setTransform(152.3,64.8,0.203,0.203);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#403F3F").s().p("AEHEhIAjlsQADghgGgPQgPglhIgMQkggzkiAOQgOgVANgbQAMgZAagKQAVgIAeABIA0AHQAuAGCZAFQB6AEBJATQBpAdBSBFQASAQAGAMQAFANgCAcIgREAIABBBQAAAugLANQgJALgXAAQgWAAgigLg");
	this.shape_122.setTransform(38.6,74.5,0.203,0.203);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6A6A69").s().p("AgfA9QgRgGgNgLQgNgMgFgPQgHgUALgVQAMgWAVgGQAjgNAkAAQAPAAAKAFQATAIAHAXQAGAVgIAVQgIAWgSAOQgSANgXADIgMABQgPAAgPgFg");
	this.shape_123.setTransform(43.8,100.3,0.203,0.203);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#6A6A69").s().p("AgyBCQgogWgGgeQgFgaAVgZQAVgZAigKQAjgLAgALQAhALAPAiQAQAigQAcQgRAegpAKQgRAEgPAAQgaAAgYgNg");
	this.shape_124.setTransform(35.3,101.3,0.203,0.203);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6A6A69").s().p("AgjBFQgcgOgLguQgLguAXgXQAVgUAxAHQAzAHANAaQAFALABAWQABAfgHAPQgJASgVAKQgSAIgXABQgWAAgOgHg");
	this.shape_125.setTransform(49.6,101.8,0.203,0.203);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#403F3F").s().p("AE5CRQAAg8gHghQgLgzgegbQgcgbgwgJQgggGg5AAIikACQgsAAgVADQgkAEgZANQgrAVggAyQgVAigZBBIhLgNQAXhUAcgzQAnhGA5gfQAwgaBDgBQAugBBMAMQB9AUBuAWQApAIAWAJQAiAOASAWQAQATAJAdQAFAUAFAkQAHA8gHASQgIARgXAAQgQAAgXgIg");
	this.shape_126.setTransform(42.4,98.1,0.203,0.203);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#E9E8E8").s().p("AHoK5Qnggal8gmQgXgDgMgDQgTgFgMgLQgMgKgHgTQgFgLgFgXIhPlnQgeiIgNhPQgMhNgRiyIgTjQIgHhaQgDgzACgnQABgQAGgGQAHgGARAAIBaAAQAXAAAJAJQAGAGACAUQAVDyAuEtQAbCwA/FsQAEAWAEANQAIASANAJQANAJAcADQEIAhEVARQCzALBaACQANABAfgCQAbABAMAMQANAPgDAeQgDAagNARQgVAbgqAJQgVAEgfAAIgbgBg");
	this.shape_127.setTransform(40.8,67.8,0.203,0.203);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#403F3F").s().p("AgiF5QgIgJgEgPQgCgJgCgSQgOjngChlQgEi+AUiOQAJhDAtAXQAuAWACA6QACA3gCBqQgDBvABAyIADDDQAFCpAKADQgLgCgsAEIgJAAQgaAAgMgMg");
	this.shape_128.setTransform(42.5,87.9,0.203,0.203);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#403F3F").s().p("AAIBoQADgzgWgwQgWgvgqgfQgHgFAAgEQgCgHAMgHQAWgLAaAEQAZAEASARQARAQAOAhIAXA3QANAmgEAUQgEAUgBABQgHgBgPAEIgHABIgogBg");
	this.shape_129.setTransform(43,97.9,0.203,0.203);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#343434").s().p("AGCHIIsThqQgwgHgXgGQgngKgbgTQgwgigShCQgPg8AOhBIApiMQA+iHCXhmQA7goBQgnQAygZBhgqIAhgMQATgGAOACQAQABgKBDQgKBJAJAKQAnAkBCBSQA9BFA+APQCzAuChAHQAkADADARQAAAFgDAJIiMGnIgJAXQgGAMgJAHQgLAIgRABIgHAAQgKAAgPgCg");
	this.shape_130.setTransform(47,70.6,0.203,0.203);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#452F20").s().p("Ai1CfQgFgBgJgGQhLgygshSQgOgagDgJQgJgXADgQQADgQAQgMQAGgFAZgMIBwg4QAGgDAEAAQAFAAAFAHIAXAfQANATAMAIQAQAJAWABQAPABAZgEQBsgTBjgnQAmgPASABQAQABASAIQApASAcAlQADADgBADQAAABgDADQgfAeg8AhQjCBtjUBEQgJADgGAAIgFAAg");
	this.shape_131.setTransform(81.2,97.3,0.203,0.203);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3D3D3D").s().p("AAIE6QgmgYgzgzQiJiLh5iSIg1g8QgjgpgRgfQgwhZBKg1QAagTAjgBQAigBAcASQAPALAPASQAJAKAQAYQB8CxCOCoQAWAbASAMQAaASAZgEQAPgCAXgPQBHgtA4hAQA4g+AlhMQAXguAZAFQAMACALAPQAZAjgLA1QgIApgeAvQhNCBhqBrQggAhgZARQgjAXghAFIgSABQgrAAgtgbg");
	this.shape_132.setTransform(52.3,55.1,0.203,0.203);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#343434").s().p("AAGLqQirhIgwgSQh8guhdgQQgelVAejBQANhPAiiMQA8j0AOg9QAjiYAZhAQAuh0BPhAQAMgKAJgCQALgCASAIIC/BJQAYAKAPAEQAUAIAVAEQAdAGAnATQAyAZACAVQANCLAIBuQAaFqgCD9QgBB4AIAwQATB3AFAwIAWDGQAVCrAKABQidgIkbh3g");
	this.shape_133.setTransform(43.4,61.3,0.203,0.203);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#453B36").s().p("Al+C0QgThvgDg7QgMjKBxhOQBLgzBRgKQBSgKBPAiQCWA+AMAEQBeAbBPgeQgKATgXAUIgqAiQAQAUArANQA5ASALAGQAWAUg5ARIg+AMQiLA2g1AJQhQAOhag3QAAA1gMAaIgsBHQgZgdggATQgeARgFAnQgCARAQATQARAUgBAOQAAANhXAsQhcAvgGAHQgCgrgThvg");
	this.shape_134.setTransform(50.6,36,0.203,0.203);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EADDD0").s().p("AkNDSQAQgfACgxQgBg5ABgcQADgxAWg7QAOgmAghCQAag1ASgbQAcgqAggZQASgOAOgBQAMgBATAHQBaAdAvATQBLAfA3AjQAMAJADAGQACAHgDAMQgcCNhCCBQhCCChiBpQiHhBiQg3g");
	this.shape_135.setTransform(48.7,38.5,0.203,0.203);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EADDD0").s().p("AgzBSQgOgKACgTQADgfAJgPIAUgVQAMgOABgLQABgJgGgNQgGgSgBgFQAFgEAHABQAHABAFAFQAGAHAFARQAFgBAHgJQAHgIAGgBQAJgBAIAPQAVAigEAVQgCANgMAPQgjAxgiAPQgIADgHAAQgJAAgIgGg");
	this.shape_136.setTransform(62.1,51,0.203,0.203);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EEEDED").s().p("AAgFKQgMgFgIgLQgHgMAEgMIg6h3QABjHhSi3QgMgbgEgLQgIgWABgSIB+gpQAKgDAFABQAJABAKAPQAUAeARArQAKAbAPA0QAqCOAQBKQAbB6AABkQABALgEAGQgDAGgKAFQgZAOgeALQgTAGgOAAQgKAAgIgDg");
	this.shape_137.setTransform(60.2,50.6,0.203,0.203);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#452F20").s().p("ADHCsQgYgEhRgSQhSgTiigcIiagbIAnjQQAIgoAfgFQASgDAwALIB1AbQAFABACACQACACAAAFIABAfQABATAHALQAFAKAPAKQArAiBPAaICEAtQAaALAJALQALAMAEAZQAHAdgBAjQgPACgQAAQgiAAgpgHg");
	this.shape_138.setTransform(61.4,98.5,0.203,0.203);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#5A5A5A").s().p("AhtJWQgugMgngHQAOhbAYjrQARilAchzIAOg5QAIggABgZQADhFgmgnQgUgTgfgLQgYgIgkgFQgUgDgHgGQgLgKACgdQAOidAPh2IBYgCIDlA3QBDAPAkASQA1AZAWAqQAUAlgDA7QgDA+gbBOQgKAegsBoQiTFVhBFxQglgHgvgNg");
	this.shape_139.setTransform(60.9,83.3,0.203,0.203);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5A5A5A").s().p("AH7JrIkWkvIhYhdQgygzgrgkQgkgdhIg0QhKg1gigbQgbgWhMhDQg/g5gpgfQghgYg4ggIhcgzQgmgYgRgZQgVgeACgpQABg1AVhAQAahTAkgHQATgEAgAUIEaCzQBPAyAnAdQBAAuAsAsQBFBHBlCJQBfB/BPBMQAXAWA3BYQA5BaAUAVQAhAjAgAyQAUAfAjA+QggAsglApQgMANgJABIgEABQgNAAgSgTg");
	this.shape_140.setTransform(65,83.2,0.203,0.203);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F5EAE4").s().p("AAtAiIiJgNQgSgDgGgHQgIgJAFgNQAEgNAMgFQAQgIAiAFQA0AGA0gBQAkgCANADQAeAHgLAbQgHATgZAGQgJACgMAAIgVgBg");
	this.shape_141.setTransform(239.7,59.4,0.203,0.203);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#343434").s().p("ABdCnQgFgBgKgHQgrgggnghQgLgJgDgFQgIgMAAgSQAAgKADgWQAIgrgOgaQgIgPgTgPQgsgig2gJIAVgFQAMgRAUgKQATgJAXgBQAggCAyAQQAkAMARAPQAMAKALATIATAgIAVAdQAMASADAPQADAQgHAjQgOBAgLAaQgFAOgGAGQgJAIgJAAIgDAAg");
	this.shape_142.setTransform(253.2,41.9,0.203,0.203);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#343434").s().p("ABVFeQABgogCgVQgEghgOgXQgOgUgFgLQgIgRACgUQADgUAMgOIhLAOQgBgjgGgWQgJgegVgNQgOgIgVgBQgNgBgYADQhYAKgxgbQg6gfghhiQgJgpAWgpQAWgpAogOQALgEAhgGQAcgGAOgHQASgJAfgfQAdgeAUgJQALgFAJACQAFABARAKQAhAWBMgRQBRgSAhAQQAVAKARAYQALAOAQAfQAiBFAKAjIAOA3QAJAgAMATIARAXQALAOAFAJQAWAmgMAwQgNAvgnAXIgVALQgNAHgGAGQgLALgIAUIgNAiQgKAUg8AvQg1ApgSAAQgDAAgCgCg");
	this.shape_143.setTransform(253.4,38.9,0.203,0.203);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#343434").s().p("AgQgMQAMgCAJAIQAJAHADAMQgOgSgTgHg");
	this.shape_144.setTransform(266.5,47.5,0.203,0.203);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#343434").s().p("AA6HeQg2gMghgoQgggngIg5QgHgyANg4QAKgqAYg6IAohiQAvh6gZhVQgVhFg3gZQgxgVhIAOQgwAKgUgWQgVgXAKgyQAah3CWAFQA8ABA9AYQA8AWAjAiQBEA/AWBfQAVBfghBXQgRAsgmA1IhDBdQhSBygCBVQAAAkAPAVQAVAdAsgDQAmgCAlgYQAjgWAFgZQACgGgCgJQAUAdgHAiQgFAagUAWQgSAVgaAMQgfAOghAAQgTAAgTgEg");
	this.shape_145.setTransform(262.4,41.2,0.203,0.203);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CBAF90").s().p("AjvD6QhUAAg4gDQghgCgJgQQgHgMAEglQABgNAFgGQAFgEAJgDQA1gQBWgEQB5gFAVgDQAzgGA+gSQAkgKBJgZQAfgLAOgGQAYgLAQgPQAjgeAVhWQAWhdAaggQAdgiAhACQASACAQANQAOAMAKASQASAiABAwQABAggIA2QgNBYgVAvQggBKg7AcQghARhAAHQhOAKhNAFQiDAKiAAAIgXAAg");
	this.shape_146.setTransform(250.3,55.4,0.203,0.203);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#403F3F").s().p("AlkEmQgKgNAAgwQABgzgBgOIgRkEQgBgeAFgMQAFgNATgPQBVhIBpgcQBKgUB8gEQCbgEAvgHQAqgGALAAQAegCAWAIQAaAKAMAaQAOAbgOAWQkpgPkjA0QghAGgTAJQgbANgJAWQgGAQADAhIAkFxQgkAMgXAAQgWAAgKgLg");
	this.shape_147.setTransform(262.1,73.8,0.203,0.203);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EDDDB2").s().p("AmLElQgGgDgKgMQhXh1gZiRIgojtQABgDANAEQARAGAQgNQAQgMAmAEIA7AIQBTABBBgOQBHgPBFgkQAZgNA8AhQBDAmAWAAQAgAAAlAQQAXAKAqAZIC4BvQAtAaAUAOQAjAYAXAYQA/BAAABJQABARgGAMQgLAVgtAGQm1A3m2AeIgGAAQgLAAgFgCg");
	this.shape_148.setTransform(253,74,0.203,0.203);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EDDDB2").s().p("Al4H1QA8ihAKggQAIgaAcivQBJnChPl1QA4APA6gXQADgBArgdQAegUAQAGQBxAxAMAXQAmBIAWAtQBpDVAyB/QA4CNAYB7QAWB2AECeQACB0gIEDQgBAfgGAQQgHATgcAdg");
	this.shape_149.setTransform(257.8,61.6,0.203,0.203);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F5EAE4").s().p("AADEWQgrgGgpgXQgngWgUgcQgMgQgIgXIgMgqIgxi6QgJgigDgTQgDgdAFgXQAHgbAVgWQATgVAagNQAsgVBDgCQBLgCBIASQA6ANAgAaQAcAYAJAjQAFAVAAAxIADBiQABA4gKAqQgOA6giAtQgkAwgzASQgdAKgfAAQgOAAgOgCg");
	this.shape_150.setTransform(252.8,40.8,0.203,0.203);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#714444").s().p("Ah4IWQgIgFgFgPIhaj3QgqhygRg8QgbhigEhRQgEhiAfhUQAhhdBEg4QBIg8CJggQB2gbAWgBQBTgFAmA4QAhAwgEBKQgBAUgHAKQgGAKgWAJQgqAQhPASQhWAUgkAMQhAAXgtAnQg0AtgNA5QgHAgAEA3QAYEPB0DyQgwAXgzAAQgNAAgGgEg");
	this.shape_151.setTransform(239.8,80.2,0.203,0.203);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#343434").s().p("AiJC9QgHgDgHgNIgdgvQgKgSACgKQADgKAOgKIBshMQAZgQgBgUQAAgEgOgsQgEgNABgGQACgPAYgOQA6giA6gZIBnDXQgVAUgaAIQgIgegRgNQgLgIgNgBQgPAAgJAIIASBJQACAIgCAEQgBAFgLAGQheAvhbAhQgKAEgIAAQgFAAgEgBg");
	this.shape_152.setTransform(238,93.5,0.203,0.203);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#714444").s().p("ApcJHQgDgaAJhTQAYjrBJjmQAkhwAlhHQBojIDTh+QDRh/DwgGQB7gEBFApQAsAaAVAsQAWAugQApQgRAsg2AcQgoAVhDAPQhBAPhdAGQhqADgzADQi5ALhhBLQhyBahUDWQgkBdhIEGQgFAUgKBRQgLBJgXALQgTAIgOAAQgiAAgGgzg");
	this.shape_153.setTransform(242.8,85.5,0.203,0.203);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C5C5C4").s().p("AgYAlQADgFAGgHIALgLIAGgKIAJgJQAFgGACgEIAAgCQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBIgNgIIgDgDQAAgDADgCQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAIACAAQAFABAEAFIAHAJIABADQAAAEgEAGQgLAPgNAQIgSASIgDgCg");
	this.shape_154.setTransform(241.8,55.9,0.203,0.203);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E0B699").s().p("AgGALQgEgCgBgFQgDgFALgJIACgBIABABIAMAHIAAAAIgDADQgEAHgEADQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgEgBg");
	this.shape_155.setTransform(242.4,54.9,0.203,0.203);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E0B699").s().p("Ah1B9IBlhyQA7hEAmgxQAFgHAGgFQAIgIAEACQAIADAGAKIjIDaQgRATgNAAIgFgBg");
	this.shape_156.setTransform(239.9,57.6,0.203,0.203);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C5C5C4").s().p("AgGAGIgCgEIAAgBIABgBIAJgJIABgBIACACIADACQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIAAACIgJALIgCACQgCAAgCgFg");
	this.shape_157.setTransform(242.2,55.1,0.203,0.203);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F2F1F0").s().p("AkZAdQgFgDgBgJQACgmgDAAQD4gCB7gFIBigDQA3gBArAEQAGABACACQACACAAAFIgCApQg8AEh5ABIl0AEIgDAAQgIAAgEgDg");
	this.shape_158.setTransform(241.6,59.7,0.203,0.203);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#6A6A69").s().p("AgLBCQgXgDgSgNQgSgOgIgWQgIgWAGgVQAHgXATgJQAKgFAPAAQAmgBAiAPQAWAGAMAWQALAVgGAVQgGAPgNAMQgNALgRAGQgQAFgQAAIgMgBg");
	this.shape_159.setTransform(256.8,100.1,0.203,0.203);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#6A6A69").s().p("AgfBMQgrgLgQgdQgRgdAQgiQAQgiAhgMQAhgMAjAMQAjAKAVAZQAWAagFAaQgGAfgpAWQgYANgcAAQgPAAgQgEg");
	this.shape_160.setTransform(265.4,101.1,0.203,0.203);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#6A6A69").s().p("AAABNQgXAAgTgJQgVgKgJgSQgIgPABggQABgWAGgMQANgaA0gHQAygHAVAVQAYAWgMAwQgLAvgdAOQgNAGgTAAIgEAAg");
	this.shape_161.setTransform(250.9,101.6,0.203,0.203);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#403F3F").s().p("AmECKQgIgTAIg8QAFglAFgUQAJgdAQgUQATgXAigNQAXgJApgIQB4gZB3gTQBOgMAuABQBEACAxAaQA6AfAnBIQAeA0AWBVIhMANQgZhCgVgiQghgzgsgWQgagNgkgEQgWgDgsAAIingCQg5AAghAGQgxAJgdAbQgeAcgLAzQgHAjAAA8QgYAJgQAAQgXAAgIgSg");
	this.shape_162.setTransform(258.2,97.9,0.203,0.203);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E9E8E8").s().p("Ao+LBQgsgJgVgbQgNgSgDgbQgEgdAPgQQALgMAcgBQAPAAAdACQBcgDC2gLQEggTEFggQAegDAMgJQANgJAIgTQAFgNAEgWQBAlzAbixQAvkyAVj2QACgUAGgHQAJgJAYAAIBbAAQARAAAHAGQAGAGABARQADAogDAzIgIBbIgTDUQgQCtgOBWQgLBHggCTIhQFtQgGAXgEAMQgIATgMAKQgMALgTAFQgNAEgXACQl+AnnrAaIgfABQgdAAgUgEg");
	this.shape_163.setTransform(259.8,67.1,0.203,0.203);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#403F3F").s().p("AgNGLQgsgEgLACQAKgDAFirIADjGQACgzgDhxQgDhrACg5QADg7AugWQAugYAJBFQAUCQgEDBQgCBqgPDnQgCAmgOAOQgMAMgZAAIgLAAg");
	this.shape_164.setTransform(258.2,87.5,0.203,0.203);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#403F3F").s().p("AhOBnQgBgBgEgUQgEgUANgoQAFgPASgoQAPgiARgQQASgRAZgEQAbgEAWALQANAFgCAJQgBAEgGAFQgqAfgXAwQgWAxACA0QAAgBgvABQgVgCgCgBg");
	this.shape_165.setTransform(257.6,97.7,0.203,0.203);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#343434").s().p("AhlCJIgvgDQgKAAgEgEQgDgEgBgGIgUhJQgFgTADgKQAFgPAWgIQATgIAdgEIAxgGQA+gIAZgfQAGgHAJgdQAHgYANgHQARgJAjACQAUABAiAFQATACAEAIQADAFAAANQgDBqgMBrQgBAHgCACQgCADgHACQgRAGgaAEQgHABgDgCQgDgDABgFIAAgIQAAgGgEgGQgEgFgGgDQgLgEgPAFQgJADgNAHIgWANQgYAMgkADIgXABIgqgBg");
	this.shape_166.setTransform(229.1,99.4,0.203,0.203);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#C8C7C7").s().p("AgdgCIAAgCIADAAQAVgCAZABIACABIACABIAGAFQAAACgJAAIgsACQgEgEgCgEg");
	this.shape_167.setTransform(194.9,60.4,0.203,0.203);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C8C7C7").s().p("AgIAGQgCgBgFgEIgHgEIAngCQAEAFACAEIgYACIgHAAg");
	this.shape_168.setTransform(195,60,0.203,0.203);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C8C7C7").s().p("AgKAGQgHgCgJgIIArgBIADAAIABABIAFAHIABAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAgBAAIgZACIgJAAg");
	this.shape_169.setTransform(193.9,60,0.203,0.203);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C8C7C7").s().p("AgPACIgIgEIAbgEIAMAAQAGAFACAEIgdAEQgEAAgGgFg");
	this.shape_170.setTransform(196.3,60,0.203,0.203);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C8C7C7").s().p("AgMAFIgCgBQgEgEABgDQAPgCALABIACAAIACABIAFAEQABACgGABIgWACg");
	this.shape_171.setTransform(199.1,60,0.203,0.203);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C8C7C7").s().p("AgbgEIAxgBIABABQAGAGgBACQgBABgFAAIgHAAIglABQgEgGgBgEg");
	this.shape_172.setTransform(190.1,59.6,0.203,0.203);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C8C7C7").s().p("AgUAFIgBgBQgDgEABgEIAlAAIADAAIACACQAHADgDACIgLABQgPAAgPABg");
	this.shape_173.setTransform(191.4,59.6,0.203,0.203);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C8C7C7").s().p("AgPAGIgBgBIgFgFQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAGgBIAdAAIAEACQAJAFgLACIgdACg");
	this.shape_174.setTransform(192.7,59.6,0.203,0.203);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C8C7C7").s().p("AgKAEQgGAAgBgBIgCgBIgBgEIAmgBIABABIACAEQgBABgHABIgRAAIgGAAg");
	this.shape_175.setTransform(194,59.6,0.203,0.203);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C8C7C7").s().p("AgRAFIgCgBIgDgBQgCgDAAgEIAsABIAAABQABACAEADIgcABIgKABIgEAAg");
	this.shape_176.setTransform(195.2,59.6,0.203,0.203);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C8C7C7").s().p("AgTAEQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgCgFIArAAIADACQAFACgEABIgLABIgcABIgCAAIgBAAg");
	this.shape_177.setTransform(196.5,59.6,0.203,0.203);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C8C7C7").s().p("AgQAEIgBAAQgEgEACgEIAgAAQAGABABADQACADgGABIgeAAg");
	this.shape_178.setTransform(197.6,59.6,0.203,0.203);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C8C7C7").s().p("AgRADIgDgDQAAAAgBAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAkgCIACACQAFAEgBAAIgLABIgaABg");
	this.shape_179.setTransform(198.7,59.6,0.203,0.203);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C8C7C7").s().p("AgPAFIgDgDQgDgCAAgCIAdgBIAFAAIAIADIABABIgEACIgOABIgOABg");
	this.shape_180.setTransform(199.9,59.6,0.203,0.203);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C8C7C7").s().p("AgNAFIgBAAIgKgGIAdgDIAFAAIAPAFQgCABgJABIgNABIgMABIgCAAg");
	this.shape_181.setTransform(201,59.6,0.203,0.203);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#C8C7C7").s().p("AjKADQgEgBgBgCQAAAAAAAAQgBgBABAAQAAgBAAAAQABAAAAgBQBTACBngBICkgBIAjgBQAcAAABAEQABACgLAAIgOgBIgpgBQhBAAhhABIikAEQgNAAgGgCg");
	this.shape_182.setTransform(200.1,60.3,0.203,0.203);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#BDBDBC").s().p("ACpAiQkbgBh4ABIgBgDIgBAAQgVABgcgEIgxgGQg5gHg+gMIg8gLIgegGQgYgFgCgDQgDgEABgHQE0AEEzgBQBEAAAtgDQAigCAMABIAlAGQBOAQA+AFQA4AFBqATIAQAEIAHAAIAAAFIADADIgCAAIAAAEIAHABIjLABIjJgBg");
	this.shape_183.setTransform(197.2,60,0.203,0.203);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#484848").s().p("AgCAJIAAAAQABgFgGgBIgKAAIgNAAQgQgCgHADIgCABQgHAEgDgCIgEgCQgCgDgCAAIgEADIgDADQgDACgDgBIgFgFIAAAAIAAABIgBgBIAAgEIABAAIABAAQAAAFAFADQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAIADgDQACgEADAAQACAAADADIADACQADABAGgDIACgBQAHgDARACIANAAIAKAAQAGACAAAEQACAAADgDIABgBQAEgCADABIACABIAPgHIABAAIAAAAQAAADAEADQADgDAHAAQAHAAADAEQADgDAIgBQAPgBAMgHIABAAIAAABQgNAGgPACQgJABgCADIAAABIgBgBQgCgEgHgBQgHAAgDAFIgBAAQgDgDgBgEIgPAIIgBAAIAAgBIgBgBQgDgBgDACIgBABQgEADgBAAg");
	this.shape_184.setTransform(196.3,54.2,0.203,0.203);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#484848").s().p("AhTALQgCgEADgEIABAAIAIADQAOgEAMAGIADgHIABAAIAAAAQAIAHAGAAQADAAADgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAABAAIABAAQACABgBAEIAAAAQADABADABIAPgCIACgCIgBAAQgCgDABgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAIgBABIABAAQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIABgCQgDgCAAgDIABAAIAAAAIADAEIAAABQADACAEgBQADAAACgCIABgDIAAgDIABAAIABADIAAABQACACAEAAQAEgBAFgFIABAAQAGAGAJgBQAJgBADgHIABAAIAAAAQAGAGAGgCIABABIgBAAQgHACgFgGQgEAHgJABQgJABgHgGQgEAFgFABQgEAAgDgCIgBACQgCABgEABQgFAAgCgCIgBADQgCACgEAAIgDAAIgDABQgGACgJAAQgFgBgCgBQgCADgFAAQgHABgHgIIgDAGIAAAAIgBAAQgMgEgOADIgBAAIgHgDIgBADIAAAAIABAAIAAAEIgBAAgAgXACIABADIAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBgAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABABAAIABABIACgCQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBgBAAIgCgBQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABg");
	this.shape_185.setTransform(196.1,53.3,0.203,0.203);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#484848").s().p("AgpAGIAAAAQgCgEAAgCQgDACgGABIgBAAIABgBQAGgBADgDIABAAIAAAAQAAAFACACQAKgEAHgFIABAAIAAAAQgBAEABAEQAJgEAFgFIABAAIAAABIABAGQAHgCAGgGIABAAIAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQACACAEABIAEgCIAIgBIACABIADABIADgBIABgBQAGgCAMACIABAAIgBABQgMgBgFABIgBABIgDABIgFAAIgCgBIgGABIgFAAQgFAAgCgCIgBgCQgGAFgHACIAAAAIgBAAIAAgGQgGAGgJACIAAAAIAAgHQgJAFgJADg");
	this.shape_186.setTransform(196.6,52.7,0.203,0.203);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#484848").s().p("AgVAJIgBgCQgBgDACgDQABgCADgBIABAAIAAABQACADgEADIgBAAIAAAAQADgDgBgDQgFACABAGIABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABgBIAEgDIAAgBIgBgCQAAgFAGgDIAAAAQAEACgDAFIgEADQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAFgBAEgDQAAgEADgDIABAAIAAABQgBADgCADIAAACIABABIABAAIADgBIAGgGIABAAIAAABIAAACIACACIACAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAIABAAIAAABIgCABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgBIAAgCIgFAEIgEADIgCgBIgBgCIAAgBQgDADgFABQgDABgDgBIgEAEIgEABgAgMABIABACIAAAAIAEgDQACgEgCgCQgFADAAAEg");
	this.shape_187.setTransform(194.8,52.9,0.203,0.203);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#484848").s().p("AgtAIIgBgBQgEACgGAAIAAAAIAAgBQAAgFAFgDQABAAABgBQAAAAAAAAQABAAAAAAQABABAAAAIABAAIACgCIABAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQgBADgCABIABACIADAAIACgCIAKgJIABAAIAAAAIADAJQAIgFAEgEIABgBIAAABIAAAFQAJgDADgFIABAAIAAAAIABAEQAFgCAAgEIABAAIABAAQABADAEAAIAEgBIAEgBQAFAAAEAEQADgDAEgCIABAAIAAABIACAFQACACADAAIADgCIACgBQADgCADACIAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABgBAAIgBABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDABgDgCIgCgFQgFACgCACIgBAAQgDgEgFAAIgEABIgEABQgEAAgCgCQgCAEgFABIAAAAIgBgDQgEAEgIADIAAAAIgBAAIAAgEQgGAFgGADIgBAAIAAAAIgDgJIgJAJIgDACIgBAAgAgyAAQgEADgBAFQAFAAADgCIAAAAIgBgBIAAgFIgBAAgAguAEIAAABQAFgDgDgCQgCACAAACg");
	this.shape_188.setTransform(196.7,51.9,0.203,0.203);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#484848").s().p("AgaAJIgBAAIABgBIACgCIgBgCQAAgEACgDIABAAIAAAAQADADgCADIgCADIABABQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAgBIADAAQAGgDAEgFQgBgEAEgDIABAAIAAABIgDAGIABACQAFgCAAgGIABAAIABAAIABAEQAAABABABQAAAAABAAQAAAAABABQABAAAAgBIADgBIAJgGIAAAAIABABQgCACADACQAAABAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIABAAIABABIgDABQAAABgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIgHAFIgEABQgDABgCgDIgBgCQgCAEgEACIgBAAIgBgCQgDAFgGACQgFADgDgCIAAgBIgDACgAgXAEIAAABIABgCQABgDgBgBQgCACABADg");
	this.shape_189.setTransform(194.8,52.1,0.203,0.203);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#484848").s().p("AhWAJQgCgBgDgEIAAABIAAAAIgBAAIAAgFIABAAIABAAQAAAGAFACQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIADgDQADgEACAAQACAAADADIADADQADABAGgDIACgBQAFgDAHAAIAMABIANABIADgBIAHABQAHABgBAEQABABAEgEIABgBQAEgCADABIACACIAPgIIABAAIAAABQAAACAEAEQADgEAHAAQAHAAADAEQACgCAJgCQANgBAOgHIABAAIAAABQgOAHgOABQgJABgCAEIgBAAQgCgFgHAAQgHAAgDAEIAAAAIgBAAQgDgDgBgDIgPAHIgBAAIAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgEgBgCACIgBABQgEADgBAAIgBAAQgBAAAAAAQABgEgGgBQgDgBgEABIgDAAIgNgBIgMgBQgHAAgEACIgCABQgGAEgEgBIgEgDQgCgDgCAAIgEADIgDAEIgDAAIgDAAg");
	this.shape_190.setTransform(189.1,54.5,0.203,0.203);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#484848").s().p("AhSALQgDgEADgEIABAAIAIACQANgDANAFIADgGIABAAQAIAHAGAAQAEAAACgDIgCgEIACgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQADAAgCAFIAAAAIAGABIAPgBIACgBIgBgBQgBgDAAgCQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABgBAAIgBADIABAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIABgCQgDgCAAgDIABAAIAAAAQADABAAADIAAABQADABAEAAQADgBACgBIABgDIAAgDIABgBIAAABIABADIAAAAQADACADAAQADAAAGgFIABAAQAFAFAKAAQAJgCADgGIABAAQAFAEAHABIABAAIgBABQgHAAgFgFQgDAGgKABQgKABgFgEQgHAEgDAAQgDAAgEgCIgBACQgCACgEABQgCAAgFgCIgBADQgDACgDAAIgDgBIgDACQgHABgIAAIgHgBQgDADgEAAQgGAAgIgGIgDAFIAAAAIgBAAQgNgFgNADIgBAAIgHgCIgBACIAAAAIABAAIAAAFIgBABgAgXABIABADQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBgBgAABgBQAAABAAAAQAAAAAAAAQAAABAAAAQAAABABAAIABABIACgCQAAAAABgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIgCgBg");
	this.shape_191.setTransform(188.9,53.7,0.203,0.203);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#484848").s().p("AgqAGIgCgGQgDADgFAAIgBAAIABgBQAGgBADgDIAAAAIABAAQAAAFABACQAMgEAFgEIACAAIAAAAQgCADACAEQAIgCAFgGIABAAIABAAIAAAGQAIgCAGgFIAAAAIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQACADAEgBIAEAAQAEgBADAAIACAAIAEABIADgBIABAAQAFgCANABIAAAAIgBABQgNgBgEACIgBAAIgCABIgFgBIgCAAQgDAAgEABIgEAAQgFAAgCgCIgBgBQgFADgIAEIgBAAIAAgBIgBgGQgEAFgKADIgBAAIAAAAIAAgHQgHAGgKACg");
	this.shape_192.setTransform(189.4,53,0.203,0.203);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#484848").s().p("AgVAIIgBgBQgCgHAHgCIABAAIAAAAQACAEgEAEIgBAAIAAgBQADgCgBgEQgFACABAFIABACQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIAEgDIAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgFAGgDIABAAQAEADgEAEIgEAEIAEgBQAGgBADgEIADgGIABAAIAAABIgDAGIAAACIABABIABABIADgCIAGgGIABAAIAAABIAAACIACABQAAAAABABQAAAAAAAAQABAAAAAAQAAgBAAAAIACgBIABAAIAAABIgCABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgCIAAgBIgFAFQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgCgBIgBgCIAAgBQgDADgFABIgGABIgEADIgEABgAgMABIABACIAAAAIAEgDQADgEgDgCQgFADAAAEg");
	this.shape_193.setTransform(187.6,53.2,0.203,0.203);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#484848").s().p("AgqAJIgCAAIgCgCIgKACIAAAAQAAgHAFgCQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABIABABIACgCIAAgBIABABQAEADgGAEIAAABIABABIADAAIACgCIALgJIAAAAIADAJQAIgFAEgEIABAAIAAAAIABAFQAHgCAEgGIABAAIAAABIABADQAFgCAAgEIABAAIABAAQAAADAFAAIAIgBQAFgBAEAEQADgDAEgBIABAAIAAAAIACAFQACADADgBIAFgCQACgDAEACIAAABIgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBABgBAAIgBABIgEACQgDAAgDgCIgCgFQgFACgCACIAAABIgBgBQgCgEgGABIgIABQgEABgCgDQgCAEgFABIAAAAIAAAAIgBgDQgEAFgIADIAAAAIgBgBIAAgEQgFAFgHADIgBAAIAAAAIgDgIIgJAIQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAgAgyAAQgEADgBAFIAIgCIgBgBIAAgFIgBAAgAguAFIAAABQAEgEgCgCQgCACAAADg");
	this.shape_194.setTransform(189.5,52.2,0.203,0.203);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#484848").s().p("AgXAIIAAgBIgDACIgBAAIABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIgBgCQAAgEACgDIABAAQADADgCADIgCAEIABAAQACACAEgCQAHgEADgDQAAgFADgDIABAAIAAAAIgDAIIABABQAFgCAAgGIABgBIABABIABAFQAAAAABABQAAAAABAAQAAABABAAQABAAAAAAIAMgIIAAAAIABABQgBAAAAABQAAAAAAABQAAABABAAQAAABABAAIADABIABgBIABgBIABABIgDACIgEgBQAAAAgBAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIgHAFIgEABQgEAAgBgCIgBgCQgCAEgEACIgBAAIgBgCQgCAEgHAEIgFABIgDgBgAgXAEIAAABIABgCQABgDgBgBIgBAFg");
	this.shape_195.setTransform(187.5,52.4,0.203,0.203);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#484848").s().p("AACAIQgCAAgDgDIgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCACIAAABIAAAAIgNgHQAAACgDAFIgBAAIAAgBQgDgEgGAAQgGACgBAEIgBAAQgCgEgHgBQgOgBgKgGIAAAAIAAgBQALAHANAAQAHABACAEQACgFAGAAQAFAAAEADQACgDABgDIAAAAIABAAIAMAGIACgBQACgBAEABIABACIAEADQgBgGAFgBIAHAAIACAAIAMAAQANgCAGACIACAAQAFADADgBIACgCQACgCADAAQACgBABADIADACQAAABABAAQAAAAABAAQAAAAABAAQAAAAABgBQADgBAAgGIABAAIAAAAIABAFIgBAAIAAAAIAAAAQgBACgDABQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBIgCgDQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgEABIgCADQgEABgFgDIgBgBQgHgCgMACIgMABIgCAAIgGAAQgFABABAFIgBABg");
	this.shape_196.setTransform(193,54.4,0.203,0.203);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#484848").s().p("ABGAIIAAAAIgBgFIABAAIAAAAIgBgCIgGACQgMgCgLAGIAAgBIgDgFQgHAHgEAAQgEAAgCgDIgGACQgJAAgEgCIgCgBIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgCQgDACgCAAQgEgBgCgCIgBgCQgCACgDAAQgDAAgGgEQgEAFgIgBQgIAAgDgGQgEAEgHABIAAgBIAAAAQAGAAAEgFIABAAQADAGAIABQAIAAAEgFIAAAAIABAAQAFAEADABQAAAAABAAQAAAAABgBQABAAAAAAQABgBAAAAIABgBIAAgDIAAAAIABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIABADQACACADAAQACAAADgCIAAAAIAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIABAAIAAABQAAADgCABIABACQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIABAAIgBgCIAAgDQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIACACQABACgBACIAAABIABAAIAMACQAEAAACgCIAAAAQgCgDADgCIAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQADADADAAQAFAAAGgHIAAAAIABAAIACAFQALgFAMACIAGgCIABAAQADADgCAFIgBAAgAgDgBQgBABAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIACACIABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_197.setTransform(192.7,53.5,0.203,0.203);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#484848").s().p("AAjAGQgHgEgHgEIAAAHIAAAAIgBAAQgGgCgHgFIAAAFIAAAAQgHgCgEgDIgBABQgCACgEAAIgDgBIgGAAIgFABIgDgBIgBAAQgFgCgJACIgBAAIAAAAQALgDAEADIABAAIADAAIADAAIABAAIAHAAIADAAQAEAAACgBIAAgDIAAgBIABAAQADAFAHACIAAgFIABgBIAAAAQAFAEAIAEIgBgHIAAgBIABAAQAIAGAHADIABgHIAAgBIABAAQACADAFAAIABABIgBAAQgEABgDgDIgBAHg");
	this.shape_198.setTransform(191.7,52.9,0.203,0.203);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#484848").s().p("AAOAIIgEgEQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgFgBgCgDIAAACIgBABIgCABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAIgFgFIAAACIgCABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgDgBIABgBIAAABIACAAIACAAIABgBIAAgDIABAAIAGAGIACABIABAAIABgBIAAgDQgCgCgBgDIAAgBIABAAQACADABADQACADAFABQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAgBQgCgBgBgCQgDgFADgBIABAAQAEACABAFIgBACIAAABIAEACQAAABABAAQAAABABAAQAAAAAAAAQABgBAAAAIABgBQABgGgFgBQgBACADADIAAABIgBAAQgDgDABgEIAAgBIABAAQAGADgBAGIgBACIgCABIgDgBgAAHAAIADADIAAAAIABgCQgBgFgEgBQgBABACAEg");
	this.shape_199.setTransform(193.5,52.9,0.203,0.203);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#484848").s().p("AAjAIIgDgCIgIgIIgBAIIgBABIAAAAQgGgEgFgEIAAAFIAAAAQgHgDgEgFIAAADIAAABIgBAAQgEgCgBgDQgCACgDAAIgHgBQgEAAgDAEIgBAAQgCgDgDgBIgCAEQgCADgDAAIgEgCIAAgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAIgBAAIAAAAQACgDADADIABAAIADACQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIACgFIAAAAIAAAAQAEABADADQACgEAFAAIAHABQADAAABgDIABAAIAAAAQABAEAEABIAAgDIABAAIAAAAQAEAFAGACIAAgFIABgBIAAABQAEAFAHADIACgIIAAgBIABAAIAIAJIACACIADgBIABgBIAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAAAAIAAAAIACADIABgCQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAEADABAGIAAAAQgGAAgCgBIgCABIgCABgAApgBIgBABIABAEIgBAAIAAABQADABAEAAQgBgFgEgCIgBAAgAAnAEIAAgBIgCgFQgBADADADg");
	this.shape_200.setTransform(191.5,52.1,0.203,0.203);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#484848").s().p("AAOAIQgFgCgEgGIgBACIAAABQgEgCgBgEIgBACQgCACgCgBIgDAAIgHgFQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgCIABAAIAAAAIACABIADAAQABgDgBgCIABgBIAAAAIAHAGIADABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIABgEIABgBIAAABQAAAGAFABIAAgBIgCgHIAAgBIABAAQADAEgBAEQADADAGAEQADACADgCIAAgBIgCgDQgBgDACgDIABAAQABADAAADIAAADIACABIAAABIgBAAIgCgBIAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgDgBgAATADIABACIAAgCIgBgFIAAAFg");
	this.shape_201.setTransform(193.2,52.2,0.203,0.203);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AkGDVQgEAAgCgBIgBgFIgPiWQgIhTgCgoQgCg0AEg9QABgKAEgDQACgCAJgBQC+gLBVgDQCZgHB6ADQABAAAFBlIAFBxIAFBhIAEAwQACAdgBATQAAAKgHACIgRABIiRAFQhuADhqAAQhXAAhVgCg");
	this.shape_202.setTransform(192.6,53.2,0.203,0.203);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DBDBDB").s().p("Ak1D2QgNgBgEgDQgKgGgCgWIgMicQgMiWgRh8QgDgRAEgFQAEgEARgBIAjAAIAiABQA2ABBqgDQBrgDCNADQCpADBAAAQAHAAAOANQAHAFAAAKQABAFgCANQgNBOAGCDQAICfgDA0QgjAKgwACIhUgBQhTgCixAIQh3AFhQAAIg9gBg");
	this.shape_203.setTransform(192.4,52.5,0.203,0.203);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#C8C7C7").s().p("AiZE+IhSgCQgxgDgggLQgegJgOgQQgXgaAAhPQAAhAgViWQgTiJAFhPQABgUAFgKQAIgPAkgHQAcgGAYABQBXAGCagGQCpgGBHADQBBACA2AIIA7AFQAqAGANANQAKALgBAkIgDA0IgBCFQAAAwAJBlQAJBigBA0QAAAXgGAMQgNAYgxABIj9AKQhWADhHAAQgzAAgsgCg");
	this.shape_204.setTransform(192.6,53.2,0.203,0.203);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#343434").s().p("AjlBxQgFgGgDgQQgFgdABgRQABgZANgQQAPgQAmgJQBLgSCIgpQAfgJBHgXQA/gRAnAKIABAoQAAAggEAGQgFAHgVAHIgdAJIliCGQgTAIgOAAQgQAAgJgLg");
	this.shape_205.setTransform(55.1,38.1,0.203,0.203);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E8D8BD").s().p("AgIA3Qg0gGgQgFQgpgPAJghQAFgPAYgHQAOgDAagEIBPgRQAYgFAMABQAWADAIAOQAJAPgIAYQgCAMgFAGIgJARQgFAKgJAAIhBAHQgEABgIAAIgIAAg");
	this.shape_206.setTransform(61.7,36.4,0.203,0.203);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C5C5C4").s().p("AAaARIgMgLIgJgHQgPgPgFgCIgBgBQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIgJANQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQgBAAgEgDIgCgDIAAgCQADgHAOgJIABgBIACAAQAEAAAGAFQAOALARAPIASATIgCADQgGgDgGgHg");
	this.shape_207.setTransform(59.7,33.7,0.203,0.203);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#94ACB5").s().p("AgKADIgBgCIABgBIAHgLIABgBIABABIABADQAIAFADADQADADgDAFQgCADgFACIgCAAQgFAAgHgKg");
	this.shape_208.setTransform(58.8,33.1,0.203,0.203);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#94ACB5").s().p("AAKASQhChAgygpIgMgLQgHgJABgEQADgIALgHIDZDYQAXAVgGAQIhyhtg");
	this.shape_209.setTransform(61.4,35.7,0.203,0.203);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C5C5C4").s().p("AAAAJIgKgLIAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIADgDQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIABABIALAJQAFAEgIADIgEABIgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_210.setTransform(59,33.3,0.203,0.203);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#CDAA6D").s().p("AghEjQgIgDgEgEQgGgIgDgSQgDgUgCg1IgPl6IgEg5QgCgqAIgGQAKgIALAiIANAxQAMA3AVBvQATBgAZA9IAWA3QAQAqADAzQABAUgFAJQgEAHgKAFQgZAMgZAAQgWAAgXgKg");
	this.shape_211.setTransform(63.7,29.6,0.203,0.203);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E8D8BD").s().p("AgpA9QgVgEgMgOQgIgJADgUQACgRAIgLQAIgMAdgMIAngRQALgFAJgBQAcgCAUAjQAJAQgEAKQgDAGgOAHQgTAMgNAKQgZAVgLAEQgKAFgMAAIgOgCg");
	this.shape_212.setTransform(67.1,39.3,0.203,0.203);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AkGCBQgGgFAIgNIAOgSIBPheQAKgLAFgDQAEgCAMgDQCngmDqhHIgrBDQgjAzgOAKQgQAKgWAJQgMAEgdAJQggAJhFALQg/ALgmANQgvAPg7AXIgYALQgNAGgHAAIgEgBg");
	this.shape_213.setTransform(65.5,38,0.203,0.203);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#452F20").s().p("AkiCHQAAgEACgEQANgZAjgoIAkgtQAWgbAQgOQAPgNAigEIA0gHQAYgGAtgRQCBguCBgXQAYgFAEANQADAIgLANIgzA3QgeAhgQAZQgKAPgFAEQgFAFgLAFQg5AYhpAVQh4AYgtAPQgiAMgRAFQgdAJgWABQgNAAgCgHg");
	this.shape_214.setTransform(65.5,38.1,0.203,0.203);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#CDAA6D").s().p("AjFJzQiPgQgjgBQgKhGAXhRQAQg2AqhcQAwhoAPgqQAehTgBhFQgIiigChRQgFiPAbhgQAXhQArgnQAjggA4gNQAqgKA+gBQBCgBAqAGQA/AKAmAdQBbBCARBVQAFAXgLAKQgFAEgPACIjUAWQgkAEgTAGQgeAKgPATQgNAPgIAgQgRA8gLBaQgfDSgMDOQgHB2AEBJQAGBqAeBRQgkgBiOgQg");
	this.shape_215.setTransform(55,25.5,0.203,0.203);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#4A4A4A").s().p("AgQDJQgmgFgagRQgSgMgIgRQgKgUAGgRQADgIALgNQA/hSAIhWQACgsACgWQACgVAIgfQACgGACgBQACgBAFAAIA0AEIAbAAQASAAAHAFQANAHgFAgQgCARgHAcQgQCEAPBXQAFAhgBAOQgDAcgUALQgJAFgUABIglABQgSAAgPgCg");
	this.shape_216.setTransform(52.7,93.2,0.203,0.203);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#4A4A4A").s().p("ACbCvIiegGQgZgBgKgJQgIgHgDgPQgEgSgDgIQgGgRgQgKQgPgJgRABQgLABgGAGQgEADgDAJIgRAxQgTAAgUgFQgIgDgDgEQgCgDAAgIQgBhyACigQABgOAFgEQAFgEALABQAPACAxAAQAsACANAOQAHAHABAOIABAXQADAgAMAcQAYA0AwATQARAHA+AJQAxAHAXAUQAMAKADAKQAFAOgLAbIgPAlQgDAIgDACQgFAFgMAAIgEAAg");
	this.shape_217.setTransform(62.6,92.7,0.203,0.203);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#646464").s().p("AgBAIQgEgCAAgDQgBgDADgCQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAGAEgDAFQgBAFgDAAIgCAAg");
	this.shape_218.setTransform(59.3,33.7,0.203,0.203);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#646464").s().p("AgHACQgCgFAFgCQABgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAIABgBQADAAADACQACACAAACQgBAHgHAAIAAAAQgFAAgCgFg");
	this.shape_219.setTransform(59.6,37.2,0.203,0.203);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#646464").s().p("AgEAGQgEgDACgDQACgEAEgBQACgEADAEQAFAFgFAFQgDADgCAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBg");
	this.shape_220.setTransform(59.8,41.2,0.203,0.203);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#646464").s().p("AgGAGQgCgGADgDQAEgFAEACQAFAAAAAEQAAADgDAEQgEADgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_221.setTransform(59.3,44.8,0.203,0.203);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#646464").s().p("AgdGBQADgmANg2IAUhaQAVhdgFhrIgRjDQgJh1AFhOQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQgFBNALB2QARCqABAZQAFBmgRBTIgVBiQgOA6gDApQAAAEgEAAQgFAAABgEg");
	this.shape_222.setTransform(58.4,39.7,0.203,0.203);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#E8D8BD").s().p("AgGB7QgCgFgWheIghiMQBLgSAiAKQARAFABAJIgkCmQgIAogFAOQgEAOgFADIgBABIgCAAIgBAAIAAABQgEAAgEgGg");
	this.shape_223.setTransform(58.4,29.1,0.203,0.203);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#646464").s().p("AgShYIAGgbQAFgMAJADQAHADAKAKIARARIAQAOQAAACgLALQgSAUgVAOQgCABAAAEQAAADAAADQANARANAJQgtBUggAmQAPh+AShYg");
	this.shape_224.setTransform(59.6,29.1,0.203,0.203);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#646464").s().p("AAyB6Qgugsglg/QgCgEACgDQALgNADgFQAJgOgGgLQgEgHgNgHIgSgIQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAgBgBQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAYgUASgjQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABQAQAzAOA9QAEAUAFAiQAFAdAKAXIAEAJIACAJQABADgCACIgBABIgCgBg");
	this.shape_225.setTransform(57.3,29.2,0.203,0.203);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F8F7F7").s().p("Ah5IHQingJhCAOQAFgNBRiLQA9hrgGgnIgYi2QgNhbgahWQgKgjgYgZQAQhAALgiIA4iRIAOgRQAUgVAcgPQBcgxCVATQBqAOAkB7QASA+gEA7IgBAAIAbDWIgIAhQgNA7gLAdQgIATgMBGIA/CGQBDCVATBMQgYADhjgDQhhgDgWADQgWADgrAAQg9AAhsgGg");
	this.shape_226.setTransform(57.9,37.2,0.203,0.203);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E8D8BD").s().p("AgJEyQgNgEgXgJQgugTgXgOQglgWgTgdQgSgcgKg4QgXhwgLhtQgEglABgVQACghALgXQAUgnAzgWQAigPA+gKQA9gLAigBQA2gCAoAQQAoAQALAlQAHAWAHA3QAXB5ALBeQAEAoAAAWQgCAjgLAZQgMAZgjAfQghAcgoAWQgtAaghAEIgJABQgNAAgNgEg");
	this.shape_227.setTransform(57.3,19.8,0.203,0.203);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#CDAA6D").s().p("AmzI8IgEg0QAJiRAXimQARh8Agi5QBAlvA9hqQADgEgDA7QgDA+AEgCIAWgLQAMgGAKgCQA1gKCNAGQB9AFBDgYQAVgHAHAAQASACARAUQAXAdAMAsQAIAdAFA0IAkEsQAYCpAqB7IATA8QAKAiAAAbQgBAhgPAbQgQAegcAKQgNAFgaACQjfATj2AKQhsAFgxAHQhXAMg+AfIgBABIAAgCg");
	this.shape_228.setTransform(56.2,26.2,0.203,0.203);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#343434").s().p("AoUIGQAeg8AjhYIA7iYQAbhGAAiRQgBiYAWhBQAMgnAfhEIBejMIGVgGIBZBbIAaBlQBSE4AxCSQA3CiAeB7QAQA9AEAeQgIAGhBADIhNAEQhIADhQgDQghgBlaATQhtAGhTAAQiAAAhAgOg");
	this.shape_229.setTransform(58.1,55,0.203,0.203);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F3E7D7").s().p("AjrPOQgTgFgDgXQAJikAHj8IALmgQAFiNgHjzQgHkcABhnQgJiIAlh/QADgJADgFQALgOAbAPQBbAvBigLQBjgLBShCQAPAcAIAoQAFAaAFAxIANB4QAGBEACA0IAAA1QgBA/gJBWIgSCVQgPB4gBBLIACBMQAAAtgGAgQgOBPgHB5IgMDKQgVEagICNIgBARQgTAHgdAEQgrAFAAgRIgVs3IgCk1QgDjugOhEIgcAEQgaC2g5HyQg5HzgaC2QgEAegFASQgHAZgLAOQgKAMgMAAIgIgBg");
	this.shape_230.setTransform(57.9,73.1,0.203,0.203);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#343434").s().p("AhFEoQgfgFgFgYQgGgbAGgxQAKg3ACgWQAQiJAniYQAahpA5gQQAMgDAHADQAGADAGAKQArBLgMBrQgFApgOAzQgIAdgUA7IhKDcQglAAgSgDg");
	this.shape_231.setTransform(52,34.4,0.203,0.203);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#343434").s().p("ABeEVIgHgGIhXh/QgagogjhDQgthXgMgWQgXgogHgYQgEgRgDgjQgEgbgBgPQgCgdAMgKQAOgLAWAEQAVAEALANQAGAIAIARQAiBNANAoIAQAzQAJAfAIATQAJAWAYAsQAXAsAJAXQARAqAGALQAQAcAaARQAPAKADAHQAGAOgOAMQgHAHgTAGQgVAHgIAAIgDgBg");
	this.shape_232.setTransform(64.1,34,0.203,0.203);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E5ECF3").s().p("Ag1CGQgKgGgEgPQgDgJgBgTQgEhFgXhEIgLgcQgFgTAFgKQAEgJARgDQAKgCARgCQBGgMBCgCQAOAAAGADQALAFAEAPQAFAOgDAgIgSCVQgBANgDAHQgFALgPAJQgSAMgbAFQgTADgdABQgVAAgJgGg");
	this.shape_233.setTransform(119.6,57.3,0.203,0.203);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#E2E2E1").s().p("Ag7CvQgRgIgJgVQgFgPgEgaQAAgqgNg7IgZhiQgHgfAAgEQABgPATgJQAQgIAhgDIAzgFQBWgNArAGQAVADAGALQAEAGgBAQIgQCgQgHBLgLAkQgGAUgJAIQgKAKgZAEQgqAGgtAAQgUgBgIgDg");
	this.shape_234.setTransform(119.6,56.9,0.203,0.203);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#403F3F").s().p("Ah7GvQgJgKgCgUQgGhEgFgkQgGgugeikQgNhEgHgxQgIgygCgfQgDgtAFgkQALhdA4g0QApglBZgaQBEgVBLgNQA3gJAUAXQALAOgFAOQgDAKgOAJQgNAIgZAGIiLAdQhRASguAhQgUANgKAPQgLAQgHAdQgHAlACAvQACAnANBNQArDyAbB2QAHAcgBAPQgCAZgTALQgJAFgHAAQgJAAgGgHg");
	this.shape_235.setTransform(239.7,65,0.203,0.203);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#F4E0D3").s().p("AgmBXQgEgCgLgHQgSgPgFgJQgEgHgCgLIgHgaQgCgIABgDIAEgIQASgXAJgKQAQgRAQgKQAbgUAeABQANABADABQAEACAAABIABAGQACANAOAOIAOAPQAHAJADAIQAGAVgYAcQghAogrAPQgMADgJAAQgIAAgGgCg");
	this.shape_236.setTransform(208,42.8,0.203,0.203);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#A9A9AA").s().p("AgzApQAsgVArgbIgMgTIgEgEIgCgEQAAgCAGgDIALgGQACABADAFIAMAWIAAACIgBACQglAcgrAVQgMAFgGAFIgEgFg");
	this.shape_237.setTransform(212.7,40.7,0.203,0.203);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#1A1A1A").s().p("AjDBjQAHgHAPgKIAUgLIAqgWQAcgNANgIQBNgsBVgvIBdgzQAHAHAEAKQgeAUg5AfQgrAXhKArIh2BDQghASgZALg");
	this.shape_238.setTransform(209.9,42.2,0.203,0.203);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#6A6A69").s().p("AgTAPIABgCIAdgdQAIAKABAEQABACgGACQgOAGgOAIQgBAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_239.setTransform(205.7,44.5,0.203,0.203);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#A9A9AA").s().p("AgCADQAAAAgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBIACgBIABgCIACACIABABIgBAAIgFAEIAAgBg");
	this.shape_240.setTransform(205.3,44.8,0.203,0.203);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#6A6A69").s().p("AgHANIgFgHIgDgEQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIADgEIAIgEIAJgFIAGAAQACAAADAEQACADAAADQAAADgCACIgGAEIgPAIg");
	this.shape_241.setTransform(213.9,39.9,0.203,0.203);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#434343").s().p("AleEwQAAgmABgUQBHgNBQgWQAxgNAegOQApgSAbgbQAegeAJgqQAKgsgWghQgLgRgegYQgfgZgLgOQgsg8AUhEQASg+A+gpQAtgfAkgHQBVgPBhBVQBUBLAiBVQATAwACAxQACA0gRAtQgVA3ggAwQgnA7goAXQhFAph2AaQiyApi5AEQgDgSgBgog");
	this.shape_242.setTransform(233.8,49.8,0.203,0.203);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FAE9DE").s().p("AiJBCQgMgEgGgJQgIgKADgKQACgLAPgJIAZgNIALgJQAGgGAGgDQAEgCAOgCQAUgEAcgKIAugRQAygSAnAFQA1AHACAyQABAJgEAHQgGAIgSADIjkAvIgWADIgGAAQgIAAgHgCg");
	this.shape_243.setTransform(224.8,56.5,0.203,0.203);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#7D6D62").s().p("AA6BJQgGgDAAgNQgBgjgPgVQgJgMgNgHQgNgIgOAAQgLAAgGAEQgOAIgDAPQgDANACARIABALQgCAFgGAFQgYAQgIggQgGgWAEgZQAEggAWgQQATgNAjAAQA8ABAZAjQALAQADAXQACAQgBAcQAAAIgCADQgDAIgQAGIgIABIgEAAg");
	this.shape_244.setTransform(225,39.5,0.203,0.203);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#7D6D62").s().p("AFBDJQgJgDgOgmQgRgtgDgEQgbgrgsggQgqgfgygPQhGgWhQAGQhJAFhMAbIgtAQQgaAJgTACQgZADgXgGQgYgGgQgQQANgHANgMIAUgaQAxg8BBgpQBDgqBKgPQBLgPBMAQQBOAQA9AtQA+AuAkBGQAkBGgBBMQAAAXgJAYQgKAbgPAAIgHgCg");
	this.shape_245.setTransform(226.8,32.6,0.203,0.203);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AhIgMIAjgZQAMgHgCgIQgBgEgJgFQgigSgUgeIAwgSQAmgMAKAGQAKAFAHAiQAEASAEAcQAMAxAPAtIAOAuQAKAdALAPQhHhWhdg+g");
	this.shape_246.setTransform(225,44.6,0.203,0.203);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("Ag4gHQAhh0gEgBIB2AwQg0AQg4ANIAoAyQAEAFgBADQAAACgFADQgbATgfAiQghAmgTASQgBgMAih4g");
	this.shape_247.setTransform(228.9,44.5,0.203,0.203);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgHAKQgGgGAFgFQgBgGAGgDQAEgDAEAEQAKAJgHAJQgDADgFAAIAAAAQgEAAgDgCg");
	this.shape_248.setTransform(227.7,52.2,0.203,0.203);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgHAJQgBgDAAgCIADgGQgBgGAGgCQAIgBABAIQAAAFgDAEQgEAEgFABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_249.setTransform(227.7,56.5,0.203,0.203);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgDAOQgHgCgBgIQgBgHAGgBQAAgFAFgDQAEgDAEAEQAIAJgEAJQgCAEgEACIgFABIgDAAg");
	this.shape_250.setTransform(227,65.6,0.203,0.203);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgIAMQgHgFADgHQADgIAIgBQABgEADgBQAFgBADAEQAHALgHAJQgFAGgGAAQgDAAgFgDg");
	this.shape_251.setTransform(227.2,61.6,0.203,0.203);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgcHWQgGgCACgFQAZhjAHh+IAGjjIAEjuQADiNAKhiQAAgDAEAAQAEAAAAADQAFBlgGCRIgKD2QgHDJgBAUQgIB6gYBhQgBAEgEAAIgDAAg");
	this.shape_252.setTransform(226.3,56.9,0.203,0.203);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#3D3D3D").s().p("AlbJgQg8gKgggLQgxgSgggjQg2g9gHgSQgLgaABhVQgFj1AIgzQAEggAUg5QAjhfAdhXQAriRAbhBQAvhxBGgdQBqgqDmAAQD8AABJBCQBSBLAnA0QA3BKAaBeQAlCDAGBNQAFA/gQA+QgKAlgcBcQgaBigLB7QgKBpgqAdQgRALgkALIhLAWQgYAJgeAAQgUABgjgEQhVgJjFALQhJAFg7AAQhbAAg8gKg");
	this.shape_253.setTransform(227.9,54,0.203,0.203);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FAE9DE").s().p("AgZECQg+gBgmgKQhSgYgvhFQgrg/gBhSQgBhRAohCQAshHBPgcQBAgXBOADQBAADBSATQAxAMAfARQApAWAQAjQAHARADAYQABAOgBAdQgCBRgLAvQgPBGgmArQgrAwhLAUQg3AOhLAAIgKAAg");
	this.shape_254.setTransform(227.6,35.9,0.203,0.203);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#3D322B").s().p("Aj8CrIgGgnQgFgXAPgZQAOgWAXgMQASgKA3gLIBJgQQAqgMASgWQAcgkgOg9QgCgKACgEQACgEAJgCQBXgTBSgNQALgBADABQAIAEAEAOQAHAWAGA7QAGA1AMAaIAKAZQAGAPgCALQgEAdgyAQQhqAhh5ASQhtAQhdAAIgdAAg");
	this.shape_255.setTransform(224.7,94.3,0.203,0.203);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#5A5A5A").s().p("AjPL/QgWgRgchKQgUg2gMgyQg4jqg8jEQgyiggQiAQgJhFARhPQAQhIAjhGQAvhdBmhHQBRg5B7gwQB6gwBhgRQBPgOAyARQA4ASA1BAQAuA3ATA7QAWBEgTA5QgMAlggAmQgRAUguArQg0AxikBkQiJBTg7BSQgWAgAABjQABA1AFBWQAAAwgHAnQgIAugDAzQgCAyACBIQgBA7gPA3QgBAFADALQAEALgBAFQgDAdgqAOQgRAGgPAAQgTAAgNgKg");
	this.shape_256.setTransform(230.4,77.7,0.203,0.203);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3D322B").s().p("AjXCdQgXgBgIgJQgIgKAEgVQAIgyAYgVQAPgMAhgKIBCgQQAogJAYgJQAngPAMgWQAJgNAEgZQAEgfAEgKQAEgIAFgEQAEgDALgBIB7gNQAfgEAJACQAQAFAFAXQAIAvACBEIADByQABAUgHAIQgHAJgWADQibAVicAAQg9AAg9gDg");
	this.shape_257.setTransform(212.1,93.2,0.203,0.203);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#5A5A5A").s().p("AjxK/QgTgDgOgOQgbgcgShYQgRhggIgfIhFj+QgdhsgIgxQgXiJAciNQAciMBKh4QA2hWA/goQAngaA3gOQApgLA9gHQB3gOB5ACQBNABAoAVQAgARAbAlQARAYAZAwQATAkAHAVQALAhgEAbQgFAtgpAmQgbAZg5AiQhYA1hRA5QhFAwgsAoQg6A1gkA1QgsBAgcBcQgUA9gVBsQgQBQgGAwQgKBHAEA7QABAXAIAmQABAegbAOQgOAHgPAAIgJgBg");
	this.shape_258.setTransform(219.4,77.5,0.203,0.203);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#434343").s().p("Ag5EzQhCgVgogWQg4gegfgoQhBhTgSg8QgGgVgMhHQgNhHgGgVIA+gVQAGgBAPgBQAPgBAFABQAIACAGAJIAIASQAXAyAsAnQA0AtApgJQBPgUBEhaQAOgSAog7QAhgwAYgbQBAhIBEAPQBHAQgFBlQgHCbg2B3Qg+CMh0BMQg3AkgwACIgFAAQgdAAg0gRg");
	this.shape_259.setTransform(215.3,49.1,0.203,0.203);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FAE9DE").s().p("AAACUIgKgZQgMgfgSgcQgWgjgVgOQgXgYgGgLQgNgZAJgUQADgFAKgMQAhglAVgOQAigXAiADQATACAWALQAfAQAQAYQATAdgIAeQgEAOgOATIgWAeQgVAkAGAnQAEATgCAHQgGAVglAJIgJACQgKAAgDgHg");
	this.shape_260.setTransform(208.5,44.1,0.203,0.203);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E9E8E8").s().p("AoaBoQgngBgUgDQgggFgUgNQgcgRgKggQgJgeAKgeQAJgcAVgNQAMgJAegIQB0gdB4ACQDkAED2AAIHagCQAmAAAVAEQAgAGARARQAWAXgLA0QgKAygdASQgPAKgGAMQgCAGgaACQkKAWkwABIgOAAQiGAAmlgJg");
	this.shape_261.setTransform(224.3,73.6,0.203,0.203);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#E9E8E8").s().p("AmULDQg4gBghgIQgwgMgWgeQgOgTgCgcQgCggARgPIAGgEQgbjeAKlbIAKkgQAGiqgBhyQAAgaADgOQADgWAMgOQAQgUAhgIQAWgGAngBIAlAAQD9gPC7ADQCyADEGAWIA9AaQAUABAHAHQAHAHAAARQgBBzgMBNQgGAlAIBUQAIBUgGAkQgGAqAIBeQAHBXgLAvQgXBjABCAQAAAXAQB7QAJBFgZBUQgIAYgGANQgJATgOAKQgOALgWAEQgPADgaABQj2AKitAEQiCACiqAAIh2AAg");
	this.shape_262.setTransform(231.7,59.6,0.203,0.203);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#403F3F").s().p("AgEBuQgUAAgIgFQgMgIgCgZIgMiIQgEgUABgHQABgMAQgEQAOgEAYACIAlAEQAIABADADQADACACAHQAMAnACA0QACAegCA9QAAAJgDAEQgGAHgSAAg");
	this.shape_263.setTransform(227.2,88.8,0.203,0.203);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#6A6A69").s().p("AgNBGQgagEgUgOQgUgOgJgXQgJgXAHgXQAIgZAVgIQALgFARAAQAqgBAnAPQAYAGANAXQAOAXgIAWQgGAQgPANQgOALgUAGQgRAFgSAAIgOAAg");
	this.shape_264.setTransform(227.4,92.1,0.203,0.203);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#6A6A69").s().p("AgjBQQgugKgUggQgTgfASgkQASgjAlgNQAlgMAoAMQAmALAYAaQAZAbgGAcQgHAhgtAXQgbANggAAQgQAAgTgEg");
	this.shape_265.setTransform(235.5,92.1,0.203,0.203);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#6A6A69").s().p("AgvBIQgYgLgKgTQgJgRACghQABgXAGgMQAPgcA5gHQA5gHAYAVQAaAYgNAyQgMAyghAOQgPAHgZAAQgagBgVgIg");
	this.shape_266.setTransform(219.3,92.7,0.203,0.203);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#403F3F").s().p("AmzCRQgIgTAIhAQAFgnAHgVQAJgfATgVQAUgYAngOQAZgJAvgJQCFgaCGgTQBWgNA1ABQBNABA2AcQBCAhArBLQAgA3AaBaIhVAOQgchGgYgkQglg2gxgXQgdgNgpgFQgZgDgwAAIi7gCQhBAAgkAGQg3AKghAdQghAdgMA2QgIAkgBBAQgaAJgSAAQgaAAgJgTg");
	this.shape_267.setTransform(227.4,88.7,0.203,0.203);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#403F3F").s().p("AgOGfQgygEgMADQAMgDAFi1IAEjRQABg1gDh3QgDhxACg8QACgcAQgYQAQgYAVgKQAVgKARAKQATAMAFAkQAWCYgEDLQgCBugRD1QgBATgDALQgEAPgKAJQgOAOgcAAIgMgBg");
	this.shape_268.setTransform(227.4,77.8,0.203,0.203);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E9E8E8").s().p("Ah+CkQgOgFgSgQQgcgagOgpQgOgsAOgcQAIgOAXgTQBEg6AvgcQBDgoA/gIQAhgEAbAIQAfAJAPAXQAJANAGAiQAGAgADAdQAEAdgIAPQgFAJgTAMQgkAXg7AVIhYAfQgzATgiASQgNAHgMAAIgLgBg");
	this.shape_269.setTransform(239,72,0.203,0.203);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#403F3F").s().p("Ah7GvQgJgKgCgUQgGhEgFgkQgGgugeikQgNhEgHgxQgIgygCgfQgDgtAFgkQALhdA4g0QApglBZgaQBEgVBLgNQA3gJAUAXQALAOgFAOQgDAKgOAJQgNAIgZAGIiLAdQhRASgvAhQgTAOgKAOQgLAQgHAdQgHAlACAvQACAnANBNQArDyAbB2QAHAcgBAPQgCAZgTALQgJAFgHAAQgJAAgGgHg");
	this.shape_270.setTransform(218.1,65,0.203,0.203);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3C454F").s().p("AiMFGQgpgLgDgdQgDggASg3QAWg9AIgZQAviaBPiqQAXgzAcgdQAlgnAvgGQAQgCAJAFQAIAFAGANQAsBcgkB5QgOAugcA4QgRAggmBBIiKDwQgzgFgXgGg");
	this.shape_271.setTransform(77.3,33.8,0.203,0.203);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#3C454F").s().p("AjiDCQgUgLgcgYQgQgOgDgIQgKgbAzgeIGmj5IAhgWQAYgQALAAQALAAATANIAcASQgSAsg6ArQhGAvgiAYQgrAehCBAQhIBHgiAbQgmAeggADIgIABQgYAAgZgOg");
	this.shape_272.setTransform(79.7,37.4,0.203,0.203);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F2D6CA").s().p("AhfAbQgMgiBBgXQAmgNA4gHQAUgDAKAFQARAIgBAfIAAAYQAAAIgCAEQgEAHgRAEQgvAMgtACIgLAAQg7AAgIgZg");
	this.shape_273.setTransform(86.8,32.9,0.203,0.203);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F4F4F4").s().p("AhiFqQg6gDgQghQgLgZgJgsQgIgxgFgWQgOhDgQiJIgbjuQgBgKACgFQADgGANgEQC5hADEgPQAOgBAGACQAQAHAEAeQAHAwAYDXQARCgAZBjIAJAnQAFAXAAARQAAAKgDAEQgDAFgJADQh9AviEAJIhXAFIgCAAg");
	this.shape_274.setTransform(91,34.7,0.203,0.203);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#020203").s().p("Ai1BQQgSAAgHgGQgHgFgEgOIgehrIBJgTQAqgJAgABIApAAQAGAJAIAFQAKAGAPADIAbADICBAIQAdACAPADQAYAFAOAMQATAOAHAaQAEATgBAfQisANipAAIhXAAg");
	this.shape_275.setTransform(98.7,91.8,0.203,0.203);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373F4C").s().p("ADNPiQgahEgQhpQgTh8gOgyQgPg1gchOIgwiBQgqh7g/jyQg/jygrh6QgnhugUg1QgjhZglhFQg9h1gFhDQgHhpBygnQBMgaBVAMQBbANA0AzQA2A0AWBfQAEASATCPICJQIQAdDfAMBTQAYCkAbCNg");
	this.shape_276.setTransform(90,70.8,0.203,0.203);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgRAOQg5jLgdhDQBRgbBUAIQAJAAADADQAEACACAJQAgCWgMCSQgCAYABApQACAwgBARQAAAGgNA0QgKApAIAOQg4hdguirg");
	this.shape_277.setTransform(85.2,31.3,0.203,0.203);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F2D6CA").s().p("AhCAyQgngJgGglQgGglAogNQAMgEAggCQADAHgHAHQgHAHgJgBQgCAEADAEQADADAFABQAGABAMgEQA7gTBBgGQAJgBAEADQADACgBAFQAAAFgFACQgEADgOACQgXADgNAHQgSAKgCAOIAAAPQABAJgDAFQgGAKgYADQgVADgMABIgJAAQgOAAgMgDg");
	this.shape_278.setTransform(107.5,29.5,0.203,0.203);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#020203").s().p("AgjCTQgogPgfgzQhjieA8g1QAsgnA7AVQA1ATAWAvQAhBHAxA2IAgAlQARAWAEATQABAHgBADQgEAHgQAEQg5AOg+AAIgHAAQgiAAgXgJg");
	this.shape_279.setTransform(83,91.9,0.203,0.203);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373F4C").s().p("Aj6DKQhYgoBBg8QAiggBZgrQB2g3BZg1QBgg5BhhHQAhgHANAVQAKASgKAXQgIARgRARQgLALgXATIkcDlQgbAXgQALQgZARgXAKQgcALgdABIgHAAQgaAAgWgKg");
	this.shape_280.setTransform(99.6,33.8,0.203,0.203);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#682E2C").s().p("AirEuQgMgLgEgBQgqgVgeglQgdgigPgsIgkhPQgUgvAAgiQAAhIARgmQAyhpBcgWQAwgMA9gBQAsgBBDAFIBvAIQA/AEAvgFIAcAAQANABAMgHQAPgIAKgNQAJgOgBgPQAgAaABArQABApgcAhQgeAlgSANQgZATgqAHQgiAGg4AEIhbAGQhKAIg/AkQhFAogUA5QgKAbADAkQACAWAKAqIASBMQADAKgCAGQgDAIgCAAIgBAAg");
	this.shape_281.setTransform(84.6,16.3,0.203,0.203);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F2D6CA").s().p("AglDxQhBgZg4hLQgxhDgYhIQgZhLAGhKQADgeAMgMQALgMAUgFQANgEAZgDQAqgECZgcQCPgUAqAdQAqAdgEBwQgCA8gNBeQgBAogGAWQgKAkgaAeQgbAfgmARQgmARgtACIgIAAQgnAAgkgNg");
	this.shape_282.setTransform(84.7,19.5,0.203,0.203);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373F4C").s().p("AAvPMQgJABgxgDQgxgDgJAAQgHAAgHAEIgNgMQgJgJAAgIQgEhJgGgyIgMhlQgJhbgjkQQgdjjgJiIQgambgMl/QgBgkAEgTQAFgeARgTQASgVAjgMQAZgIAqgHQBQgMBSgGQAjgCAVACQAeACAUAMQAbARATAqQAtBlgMCKQgGBJgnCsQhCEggYFzQgFBKgLD6QgKDOgLCIQgDAmgMAag");
	this.shape_283.setTransform(81.4,71.7,0.203,0.203);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#454545").s().p("AgCFcQAEgXAAgNIgCgjIgGpxIABAFIAKJrIABAlQABANgGAXg");
	this.shape_284.setTransform(87.8,47.7,0.203,0.203);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#454545").s().p("AgegkQgFgIgtgjQgdgXAQgSIAhgaQAcgVgCgGQgBgGgKgHIhghHQAEACAogdQAqgeAHABQASACAJAeQAFAQAEAcICaIoQg6i1hyiqg");
	this.shape_285.setTransform(84.3,32.3,0.203,0.203);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#454545").s().p("AgkDiQADgmgBgLIgLhxQgRijAEipQA8AHA5AQQgbAwgsAnQAGAKAVAPQAVAOAEALQAEALgGAUQgSBFgRBnIgbCuQgMgJAAgig");
	this.shape_286.setTransform(87.8,31,0.203,0.203);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#373F4C").s().p("AmOLgQgQgIgFgdQgPhOgDhgQgDhEADhrQAEiJAzj/QA9kwALhYQADhTAIgnQAOhEA5gbQBKgiBzgXQBIgPB8gPQAsgGAXAGQBDAQAaBpQAiCKAVCwQAMBpAPDUIAUE3IAUE3QACAZgKAKQgJALgcAEQiiAbjYAPQjHAOi2AAQgWAAgLgGg");
	this.shape_287.setTransform(83.8,40,0.203,0.203);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#373F4C").s().p("AB/EOQhwhhhHhLQhdhhg8hcQgZgngHgnQgJgvAVghQAYglA2gOQA4gOAmAaQAMAIALAPQAFAHALAUID2G6QAQAeABAYQACAegYANQgLAFgMAAQggAAgpgkg");
	this.shape_288.setTransform(90.8,31.6,0.203,0.203);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#626161").s().p("AAHAVQgIAJgLAEIgEgBQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgPAAgUQgNAJgSACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQACgTAOgQQADgDADACQAEACgCAEIgKAXQgBACgDABQAQgDALgMQADgDACACQAEABgBADQgBATACATQAJgFAGgIQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQACAGADAFQAFAGAEgBQACgBAFgEIADgDQAEgEAFgBQAGgBADAEQAEADgDADQgDADgEgDQgCgCgEAEIgDADQgFAGgFABIgEABQgLAAgIgPg");
	this.shape_289.setTransform(120.4,14.4,0.203,0.203);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#626161").s().p("AgDAPQgMAAgGgLQgCgEAAgEQgCgEAFgFQADgCADACQABABAAAAQAAABABAAQAAABAAAAQAAABgBAAIACADQABAEgDACQAEAGAGAAQALgBAHgPQADgEADACQAFACgCAEQgKATgQACg");
	this.shape_290.setTransform(114,14.9,0.203,0.203);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#626161").s().p("AgUAOIgDgBQgJgIACgJQADgHAHgBQAGgCAEAFIAAABIAIgBQAFAAAHAHIAEACQAFADACgCIABgBQABgDAFABQAFABgCAEQgBAFgGACQgIADgHgGIgEgDQgFgEgDAAQgGgBgHAMIgDADgAgVgCIAAADIAEgEIgBgBIAAAAQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAg");
	this.shape_291.setTransform(108.6,18.2,0.203,0.203);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#626161").s().p("AgnAWQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQgBgTAIgQQABgEAEABQADAAAAAFIAAALQAAAEgFAAIgBAKQAPgKADgRIAAgDQAAgEAFABQAEAAAAAFIAAACIAAANQAGAAALACIAIADQAIABAGgFIABgDQgBgFAEgBQAEgBABAEQACAHgFAEQgIAKgOgCIgJgDQgKgDgFABQgEABgCgEIAAgBQgJANgNAHIgCAAg");
	this.shape_292.setTransform(106.3,22.9,0.203,0.203);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#626161").s().p("AhPAbQgHgCgCgHQgDgGABgHQABgMAKgJQAJgJANgBQAEAAABADQAEAPgJANQgFAIgIAGIABgBQAVgEAQgUQADgMAKgIQADgCACADQADACgCADQgDAIgIAKQAAAEABAGQARgJAGgTQABgDADAAQADAAACACQADACAAAIIAAAEIACACQAGADAGgDIAGgEQAMgIAHAAQAGABAJAFIAHAEQAFACAEgEIABgCQgCgDAFgCQAEgBABAEQACAGgFAFQgIAHgKgFQgFAAgEgDQgHgEgDgBQgFAAgJAGIgGADQgLAGgKgFQgGgCAAgGQgJAPgSAJQgEACgCgEIgDgJQgQAQgTAEIgGABIgGgBgAhKgIQgGAHgBAHQgBADACAFQAJgDAGgKQAGgIgBgJQgJACgFAGg");
	this.shape_293.setTransform(119.1,31.7,0.203,0.203);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#626161").s().p("AEXAUQgEgBABgFQABgGgFgEQgFgEgKgBQgJgBgHACQgJADgGAEQgNAHgGACQgLAEgJgBQgJgCgSgLQgTgMgKACQgFABgKAHQgNAJgHABQgKACgSgJIgIgEQgMgFgRAAQgKAAgVACIgMABQgaADghgCQgVgBgngEQgvgGgbAAQgpgBggAHQgFABgBgEQAAgEADgCQAhgIArACQAZAAAyAGQAmAFAVABQAhACAZgDIANgBQAVgDALAAQASABANAGIAJAEQAQAHAHgBQAEgBAMgHQALgJAHgCQAJgCAKAEQAGADALAHQAPAJAIACQAIABAJgEIARgHQAJgFAHgDQAJgEAMACQALABAIAHQAJAHgDAMQAAADgEAAg");
	this.shape_294.setTransform(119.6,47,0.203,0.203);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#626161").s().p("AEPAYQgQgUgJgNQgSAMgNAGQgTAIgQgDQgJgCgQgIIgOgGQgOgFgTAAQgMABgWAEQgbAEgPAAIAAAAIgagCQgXgBgMABQgSABgLAKIgCACQgHAHgGABQgHABgLgGIg4gfQg6AmhFgJQgEAAAAgFQABgFAEABQAgAEAggHQAggHAbgTQADgCACACIA7AgQAIAFADgBQADgBAGgFIACgCQANgLAUgCQANgBAYACIAaACIAAAAQAKAAAegFQAZgEALAAQAVgBAPAGIAPAHQAQAHAHABQAPADARgIQANgGASgOIADgBIADADQALASAQASQADAEgEADIgDABg");
	this.shape_295.setTransform(133.2,46.3,0.203,0.203);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#626161").s().p("AlMAvQgQgBgMgQQgKgPAEgQQABgEAEABQAFABgCADQgDANAJAMQAIAMANABQANACALgLQAGgGADgIQgCgGADgFQABgEAEABQAEABAAADIgBAKIACADQAGAJAKgBQALgBAUgRQAVgSASABQAOABATASIALAKQAPANAWABQAWAAARgMIAEgCQANgJAGgDQAMgEAJAGIAGAHQAEAFABABQAEACAHgCIAMgHQAZgQAlgCQAWgBAuADQAmADAVgBQAggBAYgJIAZgMQALgEAQgEIBFgSQAEgBABAEQACAEgFACIhFASIgaAIIgZALQgYAKgiABQgUABgpgEQgugDgUABQgjACgYAQIgPAIQgKADgHgFQgDgCgEgGIgFgFQgFgDgHADQgGACgLAIIgEADQgTANgZAAQgZgBgSgPIgLgKIgNgMQgIgFgHAAQgOgBgSAPQgWAUgPABQgNABgJgLQgDAGgFAFQgMALgPAAg");
	this.shape_296.setTransform(132.9,43.5,0.203,0.203);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#626161").s().p("Aj5AeQgbAAgTgkQADALAGAGQADADgDADQgEADgDgDQgIgJgCgLQgDgMADgLQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAEgBABADQATAyAcgCQAIAAAIgFIAPgMQAOgLAIgEQASgJAXAEQANACAcALQAmANASAAQAJAAAZgFQAlgIATAGIAOAHQAJAGAGABQALAFAQgEQAKgCATgIIAGgCQBYghBZAWQAFABgBAEQgCAEgEgBQhYgUhTAfIgHADQgVAIgJACQgSAEgOgFIgQgIIgNgHQgLgEgOABIgaAFQgYAGgMAAQgVAAgmgPQgagJgNgCQgUgEgQAIQgHADgNAKQgLAKgGADQgKAHgKAAg");
	this.shape_297.setTransform(117.1,44,0.203,0.203);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#626161").s().p("AiMAlQgYgBgWgQQgVgPgLgYQgTAZgSAFQgTAFgPgOIgBAEQgLAUgVAGQgPAEgTgCQgMgCgUgFQgFgBACgFQABgEAFABQASAFALACQASACAOgEQARgFAJgQIADgIQgDgHACgIQABgDADAAQADAAABADQACAGAAAHIADAEQALAKAPgEQAKgCAKgJQAHgHAJgPQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABABQABAAAAAAQAAAAABABQAAABAAAAQAJAZAUAQQAVAQAYABQARABAQgIQAPgHAKgOIAAgDQgDgUARgIIAFABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAQgDARgIALQAEANAMACQALADALgKQAOgKAAgSQAAgDADgBQAEgBABACQALAPAXACQAUABAVgIIAQgGQAYgJALgDQAVgEAQADIARAGIAVAGQALABAGgFIAGgFQAKgJAIAAQAHgBAGAHIAHANQAGAOAEACQAFADAIgDQAIgDAGgHIAEgFQAPgRALgDQALgDAYAKQAOAFAFABQAIABAFgFQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAQADADgDAEQgIAHgMgBQgHgBgOgGQgWgIgIACQgIACgNAPIgEAFQgJAJgKADQgLAEgJgFQgHgFgGgOQgEgIgCgCQgDgEgDAAQgFAAgGAHIgHAGQgKAGgNgBQgHgBgRgGIgQgFQgPgDgSAEIgiAMIgQAGQgWAHgUgBQgXAAgNgMQgDAPgNAKQgOAMgQgDQgNgCgHgOQgZAbgiAAg");
	this.shape_298.setTransform(121.9,39.4,0.203,0.203);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#626161").s().p("AC6AmQgOgYgLgWQgJABgNAOQgPAQgLAEQgTAGgVgQIgOgLQgLgJgFgDQgagRgbAHIgUAHQgQAGgIACQgNACgLgDQgHgCgMgJQgIgGgGgDQgTgIgQANQgCABgDgBQAAAAgBgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIgBgFQgOAPgTAIQgFABgBgEQgCgEAEgCQAVgIAOgSQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIADAJQASgKATAIIAQAKQALAIAGACQAOAEAcgLIAVgHQAggIAcASIARAOIANAKQASANAOgFQAJgCANgPQAJgJAFgDQAIgHAKAAQADAAABADQAIAQASAhQADAEgFACIgCAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_299.setTransform(136.8,38.8,0.203,0.203);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#626161").s().p("ABBAeQgQgHgDgXIgTAQQgHAFgDABQgGABgFgEQgFgEgBgGQgBgEABgFQgeAQggAGQgTAEgJgHQgPgJAIgZIg0AjQgMAHgFAAQgIAAgFgGQgKgJAAgWQAAgFAFAAQAEAAAAAFQgBARAIAIQADADAEAAQAEAAAIgFIBBgsQADgCACACQADACgCAEQgPAcANAJQAGAFAPgDQAkgIAggSQACgCADADQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQgDAJABAFQACAHAFgBQACAAAEgDIAagWQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQABAAAAABQAAAAAAABQABABAAAAQACAZANAGQALAFAPgJIANgLIAMgIQAegVAkAJQAFACgBAEQgCAEgEgBQgggJgbATIgLAIIgOALQgLAIgMAAQgHAAgFgDg");
	this.shape_300.setTransform(137,35.3,0.203,0.203);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#626161").s().p("AmHA/QAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgMgVACgYQghAigvAEQgEAAgBgEIgBgRQgMAKgKAFQgFACgBgEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIADgDQAOgHAOgOQAHgeAXgVQACgCADACQADABgBAEQgHAcgVAWQgCALAAALQAygHAegnQADgDACACQAEABgBADQgGAaALAZQAsgcAggnQABgCAEABQADABAAADQABAMADAJQAHASAMAAIABAAQAIAAAMgLQAcgWAWgdQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAEAJgEAUIgBAKQgBAOAIAGQADADAEAAQADgBAGgEQAJgKAFgJQgDgIAAgFQAAgSANgIQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAABQABAAAAABQABAAAAAAQAAABABABQAAAAAAABQABAUgIAPQAEAHAFACQATAKAWgOQgFgJABgJQABgPASgXIADgCQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAJAMgDARQgDAQgLAKIgCACQAEAFAHAAQAGgBAIgGQAbgSARgYQADgDADABQADABAAAEQgCANAFANIBDgrQAOgJAIgBQAOAAAKAKQAGAGAKAQQAHANAGAGQAMAMATAEQARADARgFQAbgHAigfQADgDADADQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgFAGAEAIQADAGAGAEQAHADAGgBQALgBAKgKQAHgHAKgQQABgDAEACQAEABgBAEQgEAOAJAOQAKAOARABQAOABANgKQAMgIAEgPQgBgEADgDQACgCADABQADABgBADQABAAABAAQABAAAAAAQABAAAAAAQAAgBABAAIAxgmQACgBADABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABQAAAcAKALQAIAIAMgEQAGgBACgHQABgEAEABQAFABgBAEQgDALgMAEQgHADgIgDQgIgCgFgFQgLgLgCgZIgqAgQgEAEgHgBQgGAQgOALQgPAKgRgBQgVgBgMgTQgGgHgCgKQgQAVgSADQgKACgJgGQgJgFgEgIIgDgHQgbAWgaAIQgTAFgTgDQgWgFgOgOQgGgIgHgMQgJgOgFgGQgIgIgKAAQgGABgMAHIhHAtIgDABQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgGgIgCgNQgRATgVAPQgLAHgIABQgJAAgJgIIAAAAQgbASgYgNQgFgDgEgFQgFAKgIAGQgHAHgGABQgJABgGgGQgMgKACgRIABgLQACgLAAgFQgUAYgZAVQgPANgMAAQgYgBgHgkQggAkgrAbIgDABgAhlgIQgBAFADAGIAAgBQAIgHADgLQAEgLgEgJQgMAPgBANg");
	this.shape_301.setTransform(121.6,36.1,0.203,0.203);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#E3E4DE").s().p("ABfBaQgSgFgogQIg0gTQgdgJgWgBIgcAAQgZABgMgBQgVgCgPgHQgGgDgEgFQgCgFADgKQAUg6AxgmQAKgHAHgCQAKgDAPAEQAYAIAXATQAOAMAYAaIANAOQAbAaAlAbQAVAPAxAfIAKAHQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgBABAAAAQgOACgKAAQgZAAgggJg");
	this.shape_302.setTransform(113,19.8,0.203,0.203);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#B0D7D1").s().p("ABWCDIgZgZQgigigSgQQg1gvgrgyQgFgEgBgFQgBgGAFgJQARgfAggTQAhgSAjACQAMABAEAGQAEAEABAJQAGA7AbB+IAMA1QAAABAAAAQAAABAAAAQAAABgBABQAAAAgBABIgDAAIgDgBg");
	this.shape_303.setTransform(114.7,18.7,0.203,0.203);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#5B819A").s().p("AhdCaQgagDgJhBQgGgsABhhQABgbgBgNQgBgUAEgKQAJgVAbgGQARgDAbAGQAbAGA2AUQAnAOAVANQAeATAKAbQAEAHgBAIQgBALgNALQgCAJgYAUQgTARguAiIgXARIgQARQgZAZgNAKQgYASgRAAg");
	this.shape_304.setTransform(119.1,18.6,0.203,0.203);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D9924D").s().p("AiSCFQgjgkgQg4QgKgjgCgtQgCgZABg4QABgQAFgGQAGgFAMgCQAzgIBAAEQAmADBLALICmAYQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQgLARgSAQQgKAJgYASIgCABQhiBIhoBeIgMAMIgUASQgLAHgJAAQgRAAgVgXg");
	this.shape_305.setTransform(112.5,24.6,0.203,0.203);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#682E2C").s().p("AipEXQgpgKgogRQhOghAEgmQACgNATgUQAMgLAbgVIBohfQDHi4CWh6QAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQA+AXAlBAQAlBAgFBLQgHB8hyB1QgyAzgtAUQggAPg3AKQg4AKgwAAQgsAAgqgIg");
	this.shape_306.setTransform(117.9,24.4,0.203,0.203);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#626161").s().p("AgJAjQgEgBAAgEQACgGgFgGQgFgFgHgCQgHgCgQABIgIABQgNAAgigEQgagFgNAAQgVAAgPAIIgHAEQgMAHgGACQgKADgIgEQgGgEgHgIQgIgKgEAAIAAAAQgFABgHAKQgHALgFADQgKAHgLgHQgIgEgGgLIgCAAQgFAAAAgFIABgQQABgFAEAAQAEAAAAAFQAAAIAFAIQAFAJAGAEQAGADAFgDQAEgDAGgIQAIgOALgBQAIAAALAMQAGAHAEADQAFACAIgCQAFgCAJgGIAHgEQARgHAXgBQAPAAAbAFQAhADAMAAIAIgBQARgBAJADQAIACAHAHQAGAGABAIQAEgBAJgJIAFgFQAFgFAIgBQAIgBAGADQADACACADIAygfQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABQACAOAIAKQAMgOAXABQAVACAMAOQAJgJAcgEQAxgHAqgaQADgDADAEQADAEgFACQgqAbg0AHQgeAFgFALQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgBgDQgGgRgWgCQgJgBgIAEQgJADgFAIQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgLgLgDgPIgyAeQAAAAgBABQgBAAAAAAQgBAAgBAAQAAgBgBAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQgDgBgFAAQgGABgDADIgEAEQgOAOgIAAg");
	this.shape_307.setTransform(135.1,24.6,0.203,0.203);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#626161").s().p("AkYAqQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQgEgIABgKQABgJAFgIQADgCADABIAZAKQAugLAqAUIAKgVQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQANAOAHAFQAMAJALABQAKAAAIgJQgEgGAAgJQABgHAFgFQADgCADADQALAIgHAPIAAABQAHAEANAAQAZABAYgHIAEgCIgBAAQgDgFAAgGQgBgGADgGQADgIAJAAQAIABAEAHQAGAJgGAJIgDAEIAAAAQAJAAAEgFQADgDABgEQgJgKABgMQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAJAGABAMQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAJAIAKgCQALgBAGgJQADgEABgGQgCgGACgHQACgDACAAQADAAACADQABAGAAAFIABACQAGAIAKgBQAMgBATgRQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIADACQAIAKAMAEQANAFAOgCQAegEALgYQAAAAAAgBQAAAAABgBQAAAAABAAQABgBAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAGAJALAFQAKAGALgBQAEAAAAAFQAAAEgEAAQgZABgQgSQgOAXgfAEQgfADgVgUQgQAQgQACQgLAAgKgHIgDAGQgJANgOABQgMACgLgIQgBAEgDADQgHAIgNAAQgEAAgGgCIgLAFQgZAHgbgBQgPAAgJgGQgKANgPAAQgVgBgYgaIgJATIgCACQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBAAQgqgWgtAMQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgXgJIgCADQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAARQAAAEgEABgAAGgFQgEAHAFAGIADACQADgCACgDQADgFgDgFQgBgDgEAAQgCAAgCADg");
	this.shape_308.setTransform(134.4,21.2,0.203,0.203);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#626161").s().p("AiOAaIgDgCQgEgLgBgNQgMAKgPABQgFAAAAgFQgBgEAFAAQATgCAKgOQACgDADABQAEABgBADQgBAQAEAMQAfgMAZgYQACgCAEABQACABAAAEQgDAOABAOQAbgLARgWQACgDADABQADACAAADIACAXQAXgKAUgUQADgCADACQADACgCAEQgBADACAEQACAEAGACQAFACAFgBIANgDQARgFAKACIAIADQAHADADAAQADAAAGgDIADgCQANgGATAAQAJABAVADQAEABgBAFQgBAEgEgBQgUgDgKgBQgPAAgLAFIgDACIgMADQgEAAgLgDIgGgCQgHgBgPADQgJADgGAAQgHABgIgDQgHgCgEgGIgCgEQgUARgZAKQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBgSQgUAUgaAJQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgCgDQgCgLABgNQgYAUgeALIgCABg");
	this.shape_309.setTransform(136.1,18.7,0.203,0.203);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#626161").s().p("AhLAiQgDgCgBgGQgDgMAGgMQAFgLAMgFIAEAAIACACQAHATgPAQQgCAEgEgDQgDgDADgEQAIgIgBgMQgHAEgDAIQgDAHACAIIACAEQADACAIgFIANgKIgBgBQgDgFABgHQABgWAUgMQAAgBABAAQABAAAAAAQABAAAAAAQABAAABABQAGAEABAKQAAAIgFAIQgFAHgGAIQAEAAAEgBQAUgGALgQQACgOAIgKQADgEADACQADACgBADQgCAOgIAKQgBAGABAGIABAEIACABQAEAAAFgGIAXgZQADgDACACQAEACgCAEQgBAEABACQABAEADABQACABAEgBIAFgEIACgCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAEACgCAEQgEAGgGACQgGACgHgDQgFgCgEgGIgPAQQgGAJgJAAQgFAAgDgDQgDgEgBgGIAAgCQgMAMgPAEQgKAEgIgDQgHAHgIAFQgHAEgHAAQgFAAgDgDgAgnADIAAAFIALgOQAFgLgCgGQgNALgBAPg");
	this.shape_310.setTransform(130.1,19,0.203,0.203);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#626161").s().p("AiZAiQgEgCgCgEQgMAHgTAAIgDgCQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQABgaAUgNQAJgHAHAGIABACIAFgGQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAGAJgCAKQgCAKgJAIIAEACQAEADADgCQACAAAFgFIAhgoQACgBADAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIAIAjQAXgOAPgWQACgDADABQABAAABABQAAAAABABQAAAAAAABQAAAAAAABIABAVQAVgLARgVQABgCADAAQADABAAAEIACAKQALgIAEgLQACgEACAAQAEAAABAEQAAAEAGACQAEACAGAAIALgCQAIgCAHgBQASAAAMAPQAJgLAPgFQAAgBABAAQABAAAAAAQABAAAAAAQAAAAABABIACADQACAPADAGQADAEAEACQAEACAEgBQADAAAIgGIAEgEQAFgEAHgBQAHgCAFAFQADACgDAEQgDADgDgDQgFgDgIAGIgDACQgIAJgGABQgIACgHgEQgHgEgDgFQgEgHgCgMQgMAGgHAKQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgJgRgQACIgNABIgNADQgMABgIgHQgIANgPAGIgDgBIgDgEIAAgFQgSASgXALQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgOQgQATgWAMQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIgHggIgcAgQgHAHgEACIgGABQgFAAgEgDgAipgBQgOAKgCARQAMgBAJgEIgBgDIABgSIgBgCQAAAAgBAAQAAAAgBAAQAAAAgBABQgBAAAAAAg");
	this.shape_311.setTransform(136.7,15.4,0.203,0.203);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#626161").s().p("AhSAhIgHAEIgCABQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQgCgEAEgCQAEgCACgCIgBgKQgBgPAIgPQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAIAOgFAPQgCAGgEAGQAHAGAMgGQAUgLANgTQgCgTANgMQACgCADABQADABAAAEQgCAPgIAOIABAEQARgLAAgUQABgFADAAQAFAAAAAEQABANADAFQAEAJAHgCQADAAAFgEIAegYQADgCACABQADACAAADQgDAMAGAFQACADAGgBQABgBAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQACgFADABQAFACgBAEQgDAHgHACQgJACgHgFQgGgHgBgIIgWASQgHAEgFABQgNADgIgNIgBgCQgHAPgOAGQgEADgCgEIgCgEQgMASgTAJQgJAEgHAAQgIAAgFgFg");
	this.shape_312.setTransform(130.1,15.9,0.203,0.203);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#626161").s().p("ADEAwQgGgFgBgHQgPAIgPgFQgIgCgGgHQgGgHgCgJIgBgKQgcAVgkALIgEgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAGgqQgqAcgvAHQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAKghQggAjgvAIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQADgUAGgTQgaAhglAVQgQAKgNgDQgLgCgGgKIgDgGQgOANgTAEQgTAFgHgLIgDgFQgRAIgTAAQgEAAAAgEQgBgSAEgSIgPAPQgDADgDgDQgDgDADgDIAbgbQACgDADACQADACgBADQgIAYABAVQARgBAOgIQABgTAMgPQANgPATgGQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQABAAAAABQAAAAgBABQgIAjghATIABAFQAEAFAMgCQATgFAPgNQAAgHABgHQAFgPAWgVQACgCADABQAEABgBAEQgFAcgVAVIADAHQAEAHAHACQAIABAPgIQAxgdAcgwQACgEAEACQAEACgCADQgKAdgHAhQAZgGAWgPQAVgPANgWQADgEACACQAEABgBAEIgOAzQAvgIAngeQADgCACACQABAAAAABQABAAAAABQAAAAAAABQABABgBAAIgGAtQAmgMAegaQADgCADADQADADgDADQgHAGACAMQADAOANAEQAOAFANgJIAAgFQAFgZAQgVQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQADABABADQAEAVgKAQQgFAKgJAHQABAHADACQAEACAHgBQAggCAZgWQgCgLAGgJQAKgPAOAEQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgHANgNANIAAAAQAGAGALgBQAMgDAEgKQABgEAEABQAEABgBAFQgFAPgSADQgQADgJgKQgaAWgiADIgFABQgGAAgGgDgADGARIAFgHQAFgJABgKQgIAMgDAOgAjxgEQgIAJgCAMQAVgPAIgWQgLAGgIAKgAEYABQgCAFAAACIAKgNQgDABgFAFgAi/AGIAAACQAJgLAEgLQgKAMgDAIg");
	this.shape_313.setTransform(130.2,8.5,0.203,0.203);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#626161").s().p("AjmBxQgDgCADgEQACgEAEADQANAKAagQQARgKALgKIgGgLQgEgNAEgUQANhEAkg8QANgWARgDQAJgCAIAGQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAEA1gWAzQgVAygnAlQALAJAOABQAVABAZgNQATgJAPgPIAAgNQAHgvAggiQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQALAyguAuIABAEQAEAFAHADQAHACAGgCQALgDANgOIAFgGQAEgkAUgbQABgDAEABQADACAAADQgDAigVAdQgBARABAIQAXgEASgaQAMgSAMggQACgEAEABQADABAAAEQgDAaACAaQAPgNAHgUQABgEAEABQAEABgBAEQAAAMAFAKIAngUQAEgCACADQAGAJAMADQAMADAKgGQAEgCACAEQACAEgEACQgMAHgOgDQgOgCgJgLIgoAVQgEADgCgFIgGgOQgJARgPAKQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBgBQgBgTAAgPQgbA5goAEQgEAAAAgEIgBgTQgOAOgLADQgKACgJgDQgKgDgFgJIgCgCQgQAOgQAIQgdAPgWgCQgTgCgMgLQgOAMgPAJQgRALgPAAQgKAAgIgGgAhShsQgNACgLASQgkA8gMBCQgDAUADAIIAEAIQAlgiAUgwQAVgxgDgyQgCgCgDAAgAgeArIAAAEQAggkgCglQgZAegFAng");
	this.shape_314.setTransform(117.5,8.2,0.203,0.203);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BFBFBF").s().p("AvqB1QgZgDgSgLQgdgQgJgfQgJgdAJgeQAJgeAWgTQAagVAgACQA/ADBngGQB+gIAnAAQCNgBDEgPQB4gJDWACQDrACBlgFQGegUEfAaQAdADAHALIAFAHIACAIQACAlgCATQgEAegNAVQgYAkg2ALQglAIg/gDQsGgnsHA0IiVAKQhYAGg+ACIgXABIgYgBg");
	this.shape_315.setTransform(124.7,2.4,0.203,0.203);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F4F4F4").s().p("AwiTxQAXhvgFiSQgChIgSi8QgzodArpcQAFhCgIiDQgJiDAFhBIACi9QADh5AYg+QAXg7BLgVQArgMBYgBQCqgDD4gdQENggFxgLQDWgGGrgFQAdgBARACQAZACASAKQAaAOAQAdQAOAbACAhQABAVgJAnQgKApABAUIAQHyQAIEMAADZQAADAASE5QAXGZADBgQABAgAIA/QAFA5gLAlQgOAwgbAlQgeApgpAUQghAQgiAFQgXADgxAAQklABjdATQhTAHkIAfQjaAZiDAHQhMAFhIAAQkyAAjghOg");
	this.shape_316.setTransform(124.7,28.6,0.203,0.203);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#BFBFBF").s().p("AllP/QglAAgSgBQg+gEgnglQgtgqAUg7QAGgSANgKQAOgLASAAQDngGC5gDQAAm1AIkwIACiHQABgjAFhHQAEhsAIiHQgBhGgKg8QgShwAQhsQAOhaACgVQAEg/gSgwQgLghAbgSQAagSAcANQAKgIALAFQAMAEAAAOIAAAkQALAsgBA0QgBAngJA6IAAD+IAAAsQAIBdgMCYIgCCwQgLKmAADTIAcAAIEbgCIBvgBQBDAIASAwQAQAtgaApQgZAngvALQgXAFghgDIg5gHQgzgEhXABQhsACiiAFIkPAIQgMAAgKgEg");
	this.shape_317.setTransform(124.2,71.3,0.203,0.203);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#343434").s().p("Ai9C5QAFgkgFgPQgDgKgMAEIgLAGQg8iSAdg/QAhhHCpgnQCZgkBRBIQA7A0AFBSQAEA3gEAbQgFAbgQARQgOAQgBgCIABgaQAAgkgKgTQgRghg0gJQglgFgtgZQgcgQgMAOQgNARg6AQQhOAWgMAFQgcANgDBPQgCAnAEAlg");
	this.shape_318.setTransform(178.6,33.7,0.203,0.203);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#343434").s().p("AgzB6QgQAAgJgFQgKgGgFgPIgIgcQgIgdgmgoQgqgsgKgYQgHgQAEgLQAIgbAcAnQAPAUATAhQArA5A0ARQAYAIAMgJQAIgFAAgMQAAgLgJgDQAUgMALABQAJAAAFAJQAFAIgFAHQATAIAVgEQAWgEARgNQAfgWANguIAJgjQAGgTALgKQAKAbgBAeQgCAegLAaQgGAMgRAdQgQAbgFAQQgFANgDAFQgIALgZAFQhDAMhCAAIgXAAg");
	this.shape_319.setTransform(179.2,41.1,0.203,0.203);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#343434").s().p("AgoAVQgJgEAAgJQAAgEAEgDQAEgCAEABQgIAEABAFQAAADAFACIAIAAIAMgDQAIgDAMgNQAMgOAJgDQAIgCALAGQANAGgGAKQgCADgGgBIgKgBQgOgBgIAHQgIAKgGAEQgFADgLABQgNAAgFgCg");
	this.shape_320.setTransform(178.3,39.8,0.203,0.203);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#343434").s().p("AABARIgQgGQgLgEgHABIgLACQgGABgEgEQgEgFADgEQAEgFAJgCQAIgCAGACIAQAFQAWAIAZgDQAIgBADgDQAGgFgDgGQgCgCgDAAQgEAAgBADQABgDADgCQADgBADABQAGACACAIQABANgNAJQgJAGgQAAQgJAAgKgDg");
	this.shape_321.setTransform(180.5,39.5,0.203,0.203);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#C2A091").s().p("AgiECQg8gcgyhPQgthHgWhNQgXhRAGhPQADggALgOQAJgMATgGQAMgEAXgDQAmgFCMgdQCCgVAmAeQAnAfgEB4QgCBBgMBkQgBAqgFAYQgJAngYAgQgZAhgiATQgjASgpACIgHAAQgkAAghgOg");
	this.shape_322.setTransform(178.7,37.2,0.203,0.203);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C5C5C4").s().p("AgRAqQABgGAFgJIAIgOIAEgLIAGgLQAEgHABgGIAAgBIgDgCQgJgDgGgDIgDgCQgBgBACgEIACgEIADAAQAGABANAKIABACIABABQAAADgCAJQgIAUgIAQIgOAXg");
	this.shape_323.setTransform(159.7,53.1,0.203,0.203);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#343434").s().p("AgDAMQgEgBgDgFQgDgEAIgMIACgBIACAAIAMAEIABABIgDAEIgFAMQgCACgCAAIgDAAg");
	this.shape_324.setTransform(159.9,51.9,0.203,0.203);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#343434").s().p("AgPANQAqhTAag7QAKgYAIABQAJABAJAIIiSENQgPAbgQAAQANgaA8hyg");
	this.shape_325.setTransform(158.1,55.3,0.203,0.203);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#C5C5C4").s().p("AgEAIIgDgEIAAgBIAAgBIAHgMIABgBIACACIADABIADACIgBACIgFANQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgCAAgCgEg");
	this.shape_326.setTransform(159.7,52.2,0.203,0.203);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E5E5E5").s().p("AAIADIgQgDIgBgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAABIARACIABABIgBABg");
	this.shape_327.setTransform(160.1,59.4,0.203,0.203);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#E5E5E5").s().p("Ag0ACIABgBQA1gIAyAIQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABQg0gIgzAIg");
	this.shape_328.setTransform(158.5,59.3,0.203,0.203);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E5E5E5").s().p("AB5ASQhggpiSALIgBgBQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQCRgLBiAqIABABIgBABg");
	this.shape_329.setTransform(159,59.2,0.203,0.203);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#E5E5E5").s().p("AijgRIgBgBIAAgBQBUgLBSALQBUALBOAgQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgBABQiehBioAWg");
	this.shape_330.setTransform(158.9,59.1,0.203,0.203);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E5E5E5").s().p("AikAQQgBgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAdgOA2gHQB5gRB9ASIABABIgBABIgBAAQh6gSh7ASQgyAFggAPg");
	this.shape_331.setTransform(167.2,59.3,0.203,0.203);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E5E5E5").s().p("Ah9AZIgBAAIAAgCQARgOAegKQBRgdB8AHIABABIgBABQh9gGhQAbQgeALgQAOg");
	this.shape_332.setTransform(166,59.1,0.203,0.203);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#452F20").s().p("Am3ARQgNAAgFgFQgPgOAegDQAPgCAWABIETAAQBjAAAxgDQAvgCBfgHQCXgJCYAIIAAAcInEAMQhoAChcAAQiOAAhwgGg");
	this.shape_333.setTransform(163.5,59.9,0.203,0.203);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F8F7F7").s().p("ACNAwIlVgNQAEgkgCgiQA/gPBMACQA7ACBQAOQBDALAfAYQAOAKAFAHQAIAMgIAJQgHAHgUABIgdgBg");
	this.shape_334.setTransform(158.8,59.3,0.203,0.203);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#F8F7F7").s().p("AjoAmQgPgCABgIQABgHANgKQAMgIAVgGIAigLQBLgXBZgCQBogCCQAhQgEATAAARImNAJIgnADIgPAAQgPAAgJgCg");
	this.shape_335.setTransform(167.7,59.3,0.203,0.203);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#F8F7F7").s().p("AkdC4QAWgIAWAOQAdASAMABQAeABAxgPQAbgJAxgSQAzgSAVgVQAXgWAPguQAQgwAeiLQAah3AdhCQAWgxAggEQASgCAQAKQAPAKAIAQQALAXgCAtQgGC3gtC8QgIAmgKAXQgOAhgVAVQgaAagsAOQgdAKg2AJIj6ArIAFAjIgiAEQgnhzAEhCg");
	this.shape_336.setTransform(180.6,51.1,0.203,0.203);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#C2A091").s().p("AiaAxQAGgWAagWQAagWAkgMQAXgIAvgIQAugHAugQQAXgJALAEQAWAHgBApQAAAJgDAEQgEAGgKADQgOADgYADQgeADgJACQgxAJgMAgQgCAKgEADQgFADgHABQg7AJgwAAIgDAAQgkAAAIgag");
	this.shape_337.setTransform(172.3,57,0.203,0.203);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#343434").s().p("Ag6F3QgKgOgDgNQgCgJABgTIADg3QAHh9AFg+IALhnQAKhWAPhjIAFgsQADgbAFgRIADgHQgHgEgOgZIgQgfQgRgbgCgRQgBgEABgEQADgFAKgCQAbgFAlgDQAYgDAJAJQAJAKgHAYQgIAbgHANQgNAagOAOQAIAHgBASQgDAiAGAuQAEAaAJA2QAKBBAJCPQAICJAMBIQAFAcgFANQgCAHgKALIhCBVQgegcgVgfg");
	this.shape_338.setTransform(178.7,53.7,0.203,0.203);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#403F3F").s().p("AkXF5QgLjvATjpQAHhYASg3QAYhLAxgiQAhgXAxgGQAfgEA5ADIBrAHQBCAEAqgCQAKAAATgDQARgBALAJQASAPgEASQgFATgXgBQgnAAhqgNQhcgLg1AEQhtAIgyBFQgaAkgJA5QgGAlgBBEIgGGBQAAAagHAMQgEAIgJAEIgHACQgFAAgFgDg");
	this.shape_339.setTransform(189.2,66.4,0.203,0.203);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#343434").s().p("AleCJQgqgZACgqQACgpAmgcQAVgOAigEQAUgCAogDQAhgDA7gJQBLgLB7gbIAtgJQAZgHARgHQAMgGAWgNQAWgOAMgFQAegOAVgFQAdgFAZAIQAaAHAUAUQASAUAHAZQAcBhh6AtQhBAYiLAMQgiADhBADQhhAZgtAIQhOANgWABIgRABQgxAAgfgSg");
	this.shape_340.setTransform(178.2,69.1,0.203,0.203);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#343434").s().p("AjMDfIgjgLIhkgaQgWgGgMgFQgSgHgMgMQgPgPgRgpQgUgugDgaQgDgWAEgpIAQiYQADgbAKgHQAGgEAMAAQGHgHGFApQAXADANAEQAUAGAMANQARASAEAiQADAWgDAoIgHBYQgEAwgJAUQgYA1hVAOQhIAMhmgBIitgCQg2ABgeAKQgLADgXAPQgVAOgMACIgJABQgMAAgPgEg");
	this.shape_341.setTransform(179.6,66.5,0.203,0.203);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#F8F7F7").s().p("AlUE+QgHgvgMgkQgQgUADgRIgJgXQgFgJAEgFQACgDAHgCQAagGAJALQADAFABALIAAACIAaABQAPAAAHgBQBXgKBUg6QAwgiAyg1QAcgeA5hEIB/iaQApgzAdgSQAWgOAZgFQAbgFAXAIQANAFAGAIQAHAKgGAYQguC6iYCMQiXCNjFAtQgJAIgcAOQgiASgSAIQgfANgZgGIABARIgOABIgSgBg");
	this.shape_342.setTransform(170.2,50.9,0.203,0.203);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#1A1A1A").s().p("AjSBvQgGgRALgTQAKgRATgLQAOgHAtgMIA7gQQAigLAOgRQAUgcgPgtQgCgHACgDQABgDAGgCQBAgRBKgQIAMgBQAGACAFALQAHAQAJAsQAHAmALAUIALARQAFAKAAAJQgDAWgnAOQhVAehjAUQhnAVhXADg");
	this.shape_343.setTransform(160.5,93.3,0.203,0.203);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#1A1A1A").s().p("AjMCcQgIgGAAgTQACgsARgUQAKgMAcgNIA1gWQAggNAUgKQAfgSAIgUQAGgMAAgWQAAgaACgJQACgIACgDQAFgEAIgCIBmgbQAagHAHABQAPACAGATQAOAmAKA5IARBgQADARgEAIQgFAIgSAFQi0A1i4ASIgIAAQgNAAgGgFg");
	this.shape_344.setTransform(169,94.7,0.203,0.203);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#343434").s().p("AjIAFQgUiDAChLQACgvAKgcQAIgXAMgTIgMACQgKABgRAOQgSAQgHACQgGAGgIAOIgNAVQglA5AEBUQADAxAIBqQgBA6gYDwQgTC2AOByQg4AbgOAEQgtAOgagXQgTgRgGguQgEgzgDgTIgnjwQgXiPgKhiQgPiXAAh6QgBgtAGgcQAGgZAVgvIAYgvQAOgaAOgRQALgiAagcQAdgfA5gZIBiglQBZghBtgbQBTgUB2gWQApgHAgATQAhATAFAmQABAIgBAPQCogFCbAeQAfAGAIARQAKAZgkAeQh1BkiHBEIg+AeQgjATgYASQgoAfgdAsQgeAsgNA0QgOAzgCBlQgDDiABBeQADC0APCLQg+ARhNAMQhUlcg2lng");
	this.shape_345.setTransform(170.3,78.2,0.203,0.203);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#C2A091").s().p("AhdArIgBgHQgCgJgLgCIgTAAQgWADgXgBQgbgCgFgPQgEgLANgOQAggjA8AHQBWAMAXACQA+AFAvgKIAmgJQAXgFAQABQAFAAACACQADACABAGQABATAAAPQAAAIgDAEQgDADgLAFQhWAdhbgGIgngDQgWAAgQAHQgKAEgEABIgDAAQgIAAgCgGg");
	this.shape_346.setTransform(159.7,56.2,0.203,0.203);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#F8F7F7").s().p("AlYJVQgXAAgMgFQgVgJgLgdQgJgWgCgdQgBgTACgiQAQj9A/jaQA4jFB4j9QAWgtADgEQAOgUAfgCQAagCArACQAmAAAfgLIBNgeQAtgQAjAAQAPABAGAFQAFAFADANIBVGWIBSF5QAjDEgIC6QkCAKj3AAQiEAAiBgDg");
	this.shape_347.setTransform(180,54.8,0.203,0.203);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E9E8E8").s().p("AnkBpQghgBgTgDQgcgGgTgNQgYgSgJggQgIgeAKgeQAIgcAUgNQAMgJAagGQBpgcBqAEQDJAIDeADIGpAFQAiABATAEQAdAHAOARQATAXgJAgQgJAdgbASQgPAKgFANQgCAGgXABQlmAbiYAHQiVAGiNAAQhwAAhsgEg");
	this.shape_348.setTransform(177.7,71.6,0.203,0.203);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E9E8E8").s().p("AmyLDQg4gBghgIQgwgLgWgfQgOgTgBgcQgCggARgPIAFgEQgbjeAKlbIAKkgQAGiqAAhyQAAgaACgOQAEgWALgOQAQgUAhgIQAWgGAngBIAlAAQD+gPC6ADQCyADEGAWIB6AuQATABAHAHQAHAHAAARQAABxgNBPIgkDdQgHAsATBcQARBYgKAuQgTBPgsCUQgTA/ATBXQATBWgTA/QgHAYgGANQgKATgOALQgOAKgWAEQgPADgaABQj2AKisAEQiDACiqAAIh2AAg");
	this.shape_349.setTransform(182.2,59,0.203,0.203);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#403F3F").s().p("AgEBuQgUAAgHgFQgNgIgCgZIgMiIQgEgUABgHQABgMAQgEQAOgEAYACIAlAEQAIABADADQADACACAHQAMAnACA0QACAegCA9QAAAJgDAEQgFAHgTAAg");
	this.shape_350.setTransform(181.2,91.3,0.203,0.203);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#6A6A69").s().p("AgMBGQgbgDgUgPQgUgOgJgXQgJgXAHgXQAIgZAVgIQAJgEATgBQAqgBAnAPQAYAGANAXQAOAXgIAWQgLAhgsANQgRAFgSAAIgNAAg");
	this.shape_351.setTransform(181.5,94.5,0.203,0.203);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#6A6A69").s().p("AgiBQQgwgLgTggQgTgeASgkQASgkAlgMQAlgMAoALQAnAMAXAaQAZAbgGAcQgHAggtAXQgcAOgeAAQgRAAgSgEg");
	this.shape_352.setTransform(189.5,94.5,0.203,0.203);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#6A6A69").s().p("AgvBIQgYgLgKgTQgJgRACghQABgXAGgMQAPgcA6gHQA4gHAYAVQAaAYgNAyQgMAyghAOQgPAHgZAAQgagBgVgIg");
	this.shape_353.setTransform(173.4,95.1,0.203,0.203);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#403F3F").s().p("AmzCRQgJgTAJhAQAFgnAGgVQAKgfASgVQAWgXAmgOQAagKAugJQCRgbB7gSQBWgNA0ABQBMABA3AcQBBAhAsBLQAhA3AZBaIhVAOQgchFgYglQgkg2gygXQgdgNgogFQgagDgwAAIi7gCQhBAAgkAGQg3AKggAdQgiAdgMA2QgIAkAABAQgbAJgSAAQgaAAgJgTg");
	this.shape_354.setTransform(181.5,91.2,0.203,0.203);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#403F3F").s().p("AgOGfQgygEgMADQAMgDAFi1IAEjRQABg1gDh3QgDhxACg8QACgcAQgYQAQgYAVgKQAVgKARAKQATAMAFAkQAWCYgEDLQgCBvgRD0QgBAUgDAKQgEAPgKAKQgOANgcAAIgMgBg");
	this.shape_355.setTransform(181.5,80.2,0.203,0.203);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#DBDBDB").s().p("AF7B0ImLgSQjigIiqAJQiSAHgngBQhogBhMgYQg8gUgGgkQgDgRAJgRQAJgQARgKQAOgJATgFIAlgHIUsg+ICzAtQBQAVADArQADAlg4AfQhTAuh1ALQgpAFg6AAQgzAAg/gEg");
	this.shape_356.setTransform(62.6,95,0.203,0.203);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#DBDBDB").s().p("AIJCZQhSgTgigFQhMgMhkgBQgWAAiaADInPAJQhEACgjgDQg5gFgqgSQgygVgagvQgdgyAagoQAPgZAggNQAXgKAngGQB7gSDeACQDzACBmgKQAzgFBlgOQBZgKA/ADQBTAFBFAdQBUAkAjA9QAdAygLA0QgLA5g1ATQgWAIgfAAQgcAAgjgGg");
	this.shape_357.setTransform(260.5,101.6,0.203,0.203);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#DBDBDB").s().p("AogBQQhFgIgagKQg7gVACgtQABguA9gVQAigLBAgFQDvgREjADQEqACEwAaQAaACAOADQAWAGAPAKQARANAGAUQAGAVgMAQQgJALgXAJQgfALgqAGQgWAEg0AEQliAfitAGQhLAChGAAQjRAAiugWg");
	this.shape_358.setTransform(125.8,91.9,0.203,0.203);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#DBDBDB").s().p("AAiDCQiwgFlYggQhfgIg0gNQhQgVgwgtQgYgWgNgaQgNgdAFgbQAGgcAagQQAbgQAYALICggYQCqgKFggtQELgjD/ADQBIABAjAEQA7AGAsARQArARAeAdQAiAgAIAoQAJAsgXAsQgVArgpAbQgjAYgyAPQgjAKg5AJQi4AbjfAAQg3AAg5gBg");
	this.shape_359.setTransform(93.3,91.5,0.203,0.203);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#DBDBDB").s().p("An6EOQiggQh6gdQiVgjh2g6QgsgWgZgbQgggiAGglQAHgsBJgmQB3g9CdgnQBugbC1gbQGkg/EpgBQGJgBE4BiQAtAOAbANQAmASAaAXQAZAWAWAkQAOAXAVAqQAQAfgBATQgBAshCAhQgyAag6APQh6ANkMApQj8AmiJANQipAQioAAQi4AAi3gTg");
	this.shape_360.setTransform(52.6,100.7,0.203,0.203);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#DBDBDB").s().p("AMxDiQrvgCl3gHQg8gBjlgJQiygHhvABQggABg9AEQhQg4gNhUQgHguAVguQATgsAmghQA6g0BygeQCogtDoAFQAXABGBAZID3ANQCVAIBjAKQEaAeDDBUQBvAwAOBFQAHApgaAoQgZAmgqAUQgjAQgxAFQgbADgvAAIgOAAg");
	this.shape_361.setTransform(177.2,94,0.203,0.203);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#DBDBDB").s().p("AmSDgQl0ghiegEQhmgqgNhFQgHgjASgkQARghAfgXQAbgTAngOQAagJAugKQD9g6EigcQD7gYEqgDQBEAABZgLICYgVQA7AkBuAaIClAnQCFAqAaBNQAPAtgWAzQgUAwgsAeQglAbg2APQgmALg+AJQiTAVizAJQiBAHjHADIgxABQjHAAkagZg");
	this.shape_362.setTransform(145.9,103.7,0.203,0.203);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DBDBDB").s().p("AiRDDQjkgBkDgFQhrgCg5gJQhbgNg+gmQgagRgJgPQgKgUAIgaQAGgWARgVQA7hJCBgxQDFhLEZgEQBkgBCTAHID1AOQEZAMBGAJQDEAXCIBEQBDAhAeA3QAlBCgyA5QgjAnhYAFQhjgCgkAAQlHAGklAAIjlgBg");
	this.shape_363.setTransform(224.2,93.6,0.203,0.203);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#DBDBDB").s().p("AqeCxQg9gEgigGQg1gJglgVQgsgZgYgqQgaguAKgrQAMg0A3gmQA2glBPgPQAzgKBegDQGOgQEIgFQDpgECPAKQDOAOCiAvQAiAKAUAJQAdAOASASQAWAWAGAcQAHAegPAXQgMATgYAMQgQAHgeAJQgwANhyAkQhoAhg7APQhKAThuADQh/ABg8ABQhzADhyAAQksAAkogUg");
	this.shape_364.setTransform(211.5,104.6,0.203,0.203);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E6E6E6").s().p("AtLELQg+gHAJgPQAGgIAugVQAhgOADgTQAEgRgZgMQgagMgrABQgxACg4ATQhUAchugBQhkgBhOgZQglgLgWgOQgWgQgEgPQgHglBcgeQAwgQAFgRQAFgOgegMQgdgMgwgEQgzgEgyAHQgxAGgrgQQgngOgWgcQgWgbAEgdQAEgeAigVQBCgpB4gWQBpgUCRgDIU3AAIUuAAIAtAKQA0AOAhASQAuAZACAfQADAmhCAtQhiBCAJAmQADASAaAKQAaAJArAAQBQABAiAZQAcAWgKAiQgKAggkAdQglAdgrAHQhGANpQALQqzAMjmAGQlJAIjNAAQjZAAhOgJg");
	this.shape_365.setTransform(144.9,98.9);

	this.instance = new lib.T1_MC_con_todos_los_botones();
	this.instance.parent = this;
	this.instance.setTransform(273.9,310.8,1,1,0,0,0,249.9,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-43.3,1118.7,537.3);


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