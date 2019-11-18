(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AC_IMCR_OV_10_atlas_", frames: [[237,307,167,133],[0,179,235,156],[216,0,210,152],[237,154,196,151],[0,0,214,177]]}
];


// symbols:



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_10_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_10_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_10_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_10_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_10_atlas_"];
	this.gotoAndStop(4);
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


(lib.ventana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E9E9").s().p("A6tM7Qh4AAAAh4IAA39MA5LAAAIAAX9QAAB4h5AAg");
	this.shape.setTransform(183,120.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80E680").s().p("A8lC9IAAkBQAAh4B4AAMA1aAAAQB5AAAAB4IAAEBg");
	this.shape_1.setTransform(183,18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ventana, new cjs.Rectangle(0,0,365.9,203.2), null);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Los eventos pueden afectar a diferentes aspectos del negocio. La clasificación o taxonomía de los aspectos que pueden ser afectados por los diferentes tipos de eventos son:", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 832;
	this.text.parent = this;
	this.text.setTransform(98,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(96,-21.9,835.7,80), null);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg9EAQaMAAAggzMB6JAAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.8,-104.9,781.7,210);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg9EAQaMAAAggzMB6JAAAMAAAAgzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390.8,-104.9,781.7,210);


(lib.im05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak6otINvAAQAZAAAWAHQAXAIASAOQATANAOATQAOATAHAWQAIAXAAAZIAANvQAAAZgIAWQgHAXgOASQgOATgTAOQgSAOgXAHQgWAIgZAAItvAAQhAgCgqgqQgrgrgBg/IAAtvQAAgZAHgXQAIgWAOgTQANgTATgNQATgOAWgIQAXgHAZAAg");
	mask.setTransform(71.5,62.2);

	// Capa 1
	this.instance = new lib.Mapadebits7();
	this.instance.parent = this;
	this.instance.setTransform(10,7,0.685,0.685);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im05, new cjs.Rectangle(25,7,118,117.4), null);


(lib.im04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak6otINvAAQAZAAAWAHQAXAIASAOQATANAOATQAOATAHAWQAIAXAAAZIAANvQAAAZgIAWQgHAXgOASQgOATgTAOQgSAOgXAHQgWAIgZAAItvAAQhAgCgqgqQgrgrgBg/IAAtvQAAgZAHgXQAIgWAOgTQANgTATgNQATgOAWgIQAXgHAZAAg");
	mask.setTransform(71.5,62.2);

	// Capa 1
	this.instance = new lib.Mapadebits6();
	this.instance.parent = this;
	this.instance.setTransform(-5,6,0.801,0.801);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im04, new cjs.Rectangle(25,6.4,118,118), null);


(lib.im03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak6otINvAAQAZAAAWAHQAXAIASAOQATANAOATQAOATAHAWQAIAXAAAZIAANvQAAAZgIAWQgHAXgOASQgOATgTAOQgSAOgXAHQgWAIgZAAItvAAQhAgCgqgqQgrgrgBg/IAAtvQAAgZAHgXQAIgWAOgTQANgTATgNQATgOAWgIQAXgHAZAAg");
	mask.setTransform(71.5,62.2);

	// Capa 1
	this.instance = new lib.Mapadebits5();
	this.instance.parent = this;
	this.instance.setTransform(-19,-6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im03, new cjs.Rectangle(25,6.4,118,118), null);


(lib.im02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak6otINvAAQAZAAAWAHQAXAIASAOQATANAOATQAOATAHAWQAIAXAAAZIAANvQAAAZgIAWQgHAXgOASQgOATgTAOQgSAOgXAHQgWAIgZAAItvAAQhAgCgqgqQgrgrgBg/IAAtvQAAgZAHgXQAIgWAOgTQANgTATgNQATgOAWgIQAXgHAZAAg");
	mask.setTransform(71.5,62.2);

	// Capa 1
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(-36,5,0.809,0.809);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im02, new cjs.Rectangle(25,6.4,118,118), null);


(lib.im01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak6otINvAAQAZAAAWAHQAXAIASAOQATANAOATQAOATAHAWQAIAXAAAZIAANvQAAAZgIAWQgHAXgOASQgOATgTAOQgSAOgXAHQgWAIgZAAItvAAQhAgCgqgqQgrgrgBg/IAAtvQAAgZAHgXQAIgWAOgTQANgTATgNQATgOAWgIQAXgHAZAAg");
	mask.setTransform(71.5,62.2);

	// Capa 1
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im01, new cjs.Rectangle(25,6.4,118,118), null);


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
	this.text = new cjs.Text("Taxonomía de IMCR", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
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
	this.text = new cjs.Text("Haz clic en cada botón para ver su descripción", "16px 'Arial'");
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
	this.shape.graphics.f("rgba(102,204,0,0.008)").s().p("AgTAUQgHgJgBgLQABgLAHgIQAJgIAKAAQALAAAJAIQAHAIABALQgBALgHAJQgJAIgLAAQgKAAgJgIg");
	this.shape.setTransform(65.3,64.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_linea();
	this.activo.parent = this;
	this.activo.setTransform(36.1,10.8,1,1,90,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_linea();
	this.resalte.parent = this;
	this.resalte.setTransform(61.9,27.4,0.678,2.001,0,0,0,91.2,13.7);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(43.4,25,0.678,1.999,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71,104.9);


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
	this.m2mc1_Cerrar.setTransform(1388.9,-103.4);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.botoninvisible = new lib.T1_Boton_invisible();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(1103.9,92.4,0.647,0.972,0,0,0,480.8,227.2);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).wait(5));

	// Transicion "destapa" el contenido
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mc();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(181,158.9,1.012,0.637,0,0,0,311.9,175.6);
	this.cuadrotransicion._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cuadrotransicion).wait(1).to({_off:false},0).wait(5));

	// Contenidos
	this.instance = new lib.instruccionclic();
	this.instance.parent = this;
	this.instance.setTransform(-131.7,123.6,1,1,0,0,0,19.5,19.5);

	this.text = new cjs.Text("Eventos relacionados con productos:", "bold 17px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 349;
	this.text.parent = this;
	this.text.setTransform(-328.8,46.4);

	this.text_1 = new cjs.Text("● Percepción de la categoría \n● Calidad y seguridad alimentaria \n● Entorno regulatorio \n● Energía y cambio climático \n● Entre otros.", "17px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 349;
	this.text_1.parent = this;
	this.text_1.setTransform(-328.8,100.4);

	this.instance_1 = new lib.ventana();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-156.7,140.5,1,1,0,0,0,183,101.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:-156.7,y:140.5}},{t:this.text_1,p:{x:-328.8,text:"● Percepción de la categoría \n● Calidad y seguridad alimentaria \n● Entorno regulatorio \n● Energía y cambio climático \n● Entre otros."}},{t:this.text,p:{x:-328.8,text:"Eventos relacionados con productos:",font:"bold 17px 'Arial'",lineHeight:20,lineWidth:349}}]},1).to({state:[{t:this.instance_1,p:{x:-75.3,y:139.3}},{t:this.text_1,p:{x:-248.8,text:"● Desastres naturales \n● Seguridad e inestabilidad política \n● Entre otros. "}},{t:this.text,p:{x:-248.8,text:"Eventos relacionados con infraestructura:",font:"bold 17px 'Arial'",lineHeight:20,lineWidth:349}}]},1).to({state:[{t:this.instance_1,p:{x:59.7,y:139.3}},{t:this.text_1,p:{x:-114.3,text:"● Ética y cumplimiento legal \n● Salud y seguridad y en el trabajo\n● Derechos humanos\n● Entre otros\n"}},{t:this.text,p:{x:-114.3,text:"Eventos relacionados con personas:",font:"bold 17px 'Arial'",lineHeight:20,lineWidth:349}}]},1).to({state:[{t:this.instance_1,p:{x:200.1,y:140}},{t:this.text_1,p:{x:34.2,text:"● Informes y controles financieros \n● Condiciones macroeconómicas y estrategia \n● Impuestos \n● Entre otros."}},{t:this.text,p:{x:26.7,text:"Eventos relacionados con aspectos financieros:",font:"bold 15px 'Arial'",lineHeight:17.8,lineWidth:376}}]},1).to({state:[{t:this.instance_1,p:{x:356.9,y:140.5}},{t:this.text_1,p:{x:182.7,text:"● Tecnología de información \n● Seguridad de la información\n● Entre otros  "}},{t:this.text,p:{x:182.7,text:"Eventos relacionados con información:",font:"bold 17px 'Arial'",lineHeight:20,lineWidth:349}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.6,-48.6,287.5,391);


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
		var NumeroBotones = 5;
		var root = this;
		quitaActivos();
		var Secuencial = true;
		/*
		if (parent.IDActual<parent.ULTIMO || parent.backdoor) {
			//console.log("es una pagina ya vista, contenido desbloqueado");
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
	this.b5 = new lib.T3_btn_mc_1_linea();
	this.b5.parent = this;
	this.b5.setTransform(686.3,-51,1.76,1.76,0,0,0,64,12.6);

	this.b4 = new lib.T3_btn_mc_1_linea();
	this.b4.parent = this;
	this.b4.setTransform(536.3,-51.6,1.76,1.76,0,0,0,64,12.6);

	this.b2 = new lib.T3_btn_mc_1_linea();
	this.b2.parent = this;
	this.b2.setTransform(236.3,-51,1.76,1.76,0,0,0,64,12.6);

	this.b3 = new lib.T3_btn_mc_1_linea();
	this.b3.parent = this;
	this.b3.setTransform(386.3,-51,1.76,1.76,0,0,0,64,12.6);

	this.b1 = new lib.T3_btn_mc_1_linea();
	this.b1.parent = this;
	this.b1.setTransform(86.4,-51,1.76,1.76,0,0,0,64.1,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b3},{t:this.b2},{t:this.b4},{t:this.b5}]}).wait(2));

	// 0. Imagenes para botones y textos
	this.instance = new lib.im01();
	this.instance.parent = this;
	this.instance.setTransform(34.5,-11.5,1,1,0,0,0,83.5,66.5);

	this.text = new cjs.Text("Información", "17px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 118;
	this.text.parent = this;
	this.text.setTransform(636.4,56.9);

	this.text_1 = new cjs.Text("Financiero", "17px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 118;
	this.text_1.parent = this;
	this.text_1.setTransform(486.5,55.5);

	this.text_2 = new cjs.Text("Personas", "17px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 118;
	this.text_2.parent = this;
	this.text_2.setTransform(334.8,56.9);

	this.text_3 = new cjs.Text("Infraestructura", "17px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 118;
	this.text_3.parent = this;
	this.text_3.setTransform(186.5,56.9);

	this.text_4 = new cjs.Text("Producto", "17px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 118;
	this.text_4.parent = this;
	this.text_4.setTransform(36.3,56.9);

	this.instance_1 = new lib.im02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(185.2,-11.5,1,1,0,0,0,83.5,66.5);

	this.instance_2 = new lib.im05();
	this.instance_2.parent = this;
	this.instance_2.setTransform(635.2,-11.5,1,1,0,0,0,83.5,66.5);

	this.instance_3 = new lib.im04();
	this.instance_3.parent = this;
	this.instance_3.setTransform(485.2,-11.5,1,1,0,0,0,83.5,66.5);

	this.instance_4 = new lib.im03();
	this.instance_4.parent = this;
	this.instance_4.setTransform(335.2,-11.5,1,1,0,0,0,83.5,66.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-84,849.2,517.2);


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
		parent.deshabilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Capa 2
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(532.8,149.6);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(532.8,245.6,1,0.086);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},28).to({state:[{t:this.instance_1}]},11).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({_off:true,scaleY:0.09,y:245.6},11).wait(2));

	// Capa 4
	this.instance_2 = new lib.T1_MC_con_todos_los_botones();
	this.instance_2.parent = this;
	this.instance_2.setTransform(446.9,374.2,1,1,0,0,0,249.9,249.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(13));

	// Capa 1
	this.instance_3 = new lib.text01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(257.9,241.3,1.133,1.133,0,0,0,257.9,241.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.5,-56.8,946.5,90.6);


// stage content:
(lib.AC_IMCR_OV_10 = function(mode,startPosition,loop) {
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
		*/
		parent.deshabilitarSiguiente();
		
		//DESHABILITA EL BOTON ATRAS
		//parent.deshabilitarAtras();
		/*
		Si necesitas habilitar el siguiente con un retraso en ciertos segundos
		utiliza la siguiente funcion reemplazando seconds en la cantidad de segundos:
		parent.retrasar_habilitar_siguiente(seconds);
		*/
		//parent.habilitarSiguiente();
		
		
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
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,187.1);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AC_IMCR_OV_10_atlas_.png?1574031414552", id:"AC_IMCR_OV_10_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;