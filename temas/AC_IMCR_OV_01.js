(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AC_IMCR_OV_01_atlas_", frames: [[0,0,1206,680],[1208,0,51,45]]}
];


// symbols:



(lib._0101 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_01_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.chunk = function() {
	this.spriteSheet = ss["AC_IMCR_OV_01_atlas_"];
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


(lib.titulocurso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Introducción a IMCR", "bold 35px 'Arial'", "#793A26");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 384;
	this.text.parent = this;
	this.text.setTransform(154.1,5.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulocurso, new cjs.Rectangle(-40,3.9,388.4,93.2), null);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib._0101();
	this.instance.parent = this;
	this.instance.setTransform(-78,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(-78,-97,1206,680), null);


(lib.letrasac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AAOAeIgOgXIgJAAIAFgIIALAAQAIgBAAgIQgBgEgDgDIgEgCIgWAAIAAAxIgOAAIAAg7IArAAQAEABADACQAIAFgBAJIgBAJQgCAGgKADIAPAYg");
	this.shape.setTransform(27.9,8.2,2.732,2.708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_1.setTransform(44.6,8.3,2.732,2.708);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAEAJIABABIAUAxg");
	this.shape_2.setTransform(8.8,8.3,2.732,2.708);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_3.setTransform(62.1,8.3,2.732,2.708);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#793A26").s().p("AgGAeQgHAAgFgFQgGgGAAgHIAAgpIAQAAIAAAoQABAJAJABIAXAAIAAAJg");
	this.shape_4.setTransform(244.8,8.3,2.732,2.708);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#793A26").s().p("AAAAeQgPgBgGgMQgGgHAAgKQAAgMAJgIQAHgJAKAAIABAAIAAAAIAcAAIAAALIgaAAIAAABIgBgBQgLACABAMIAAAAIAlAAIAAAKIglAAIAAABQgBAMAKABIAbAAIAAAKg");
	this.shape_5.setTransform(176.4,8.2,2.732,2.708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#793A26").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_6.setTransform(78.1,8.3,2.732,2.708);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#793A26").s().p("AgHAeQgKAAgHgGQgHgGAAgJIAAgRQAAgJAHgGQAHgGAKAAIAPAAQAKAAAHAGQAHAGAAAJIAAARQAAAJgHAGQgHAGgKAAgAgNgPQgEAFAAAFIAAAMQAAAFAEAFQAEAEAGAAIAHAAQAGAAAEgEQAEgFAAgFIAAgMQAAgFgEgFQgEgEgGAAIgHAAQgGAAgEAEg");
	this.shape_7.setTransform(95.5,8.3,2.732,2.708);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_8.setTransform(114.7,8.2,2.732,2.708);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_9.setTransform(194.5,8.2,2.732,2.708);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_10.setTransform(158.4,8.2,2.732,2.708);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_11.setTransform(213.5,8.2,2.732,2.708);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_12.setTransform(133.3,8.2,2.732,2.708);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#793A26").s().p("AgHAeIAAg7IAPAAIAAA7g");
	this.shape_13.setTransform(145.4,8.2,2.732,2.708);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#793A26").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgPArIgQAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_14.setTransform(228.4,8.3,2.732,2.708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.letrasac, new cjs.Rectangle(0,0,251.6,16.4), null);


(lib.acs2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ah2BLQgSgXAMgZIAPgVIBXhWQAWgQAVAFIARAJIBbBZQACAGgGADIgHACIgvABIg2g0QgHgGgHADQgDABgBACIhEBFQgJAJAGAHIAGAFIgjAkg");
	this.shape.setTransform(35.4,25.2,2.732,2.708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#793A26").s().p("AgpA2QgMgDgIgIIgeggIAighIASASQAIAGAGgCIAFgEIAzgzIAzAAQAIAAABAFQABACgCADIhWBVQgOAQgSAAQgGAAgHgCg");
	this.shape_1.setTransform(46.1,60.1,2.732,2.708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.acs2, new cjs.Rectangle(0,0,71.1,75.4), null);


(lib.acs1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AADCCQgDAAgDgCIhUhXQgUgXAKgXIANgUIBZhaQAYgTAXAHIATAKIAeAhIgjAhIgTgUQgJgGgIAHIhFBGQgHAGADAHIAEAFIAzA1IAAAyQgBAJgHAAIgBAAg");
	this.shape.setTransform(27.7,35.2,2.732,2.708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("Ag0BSQgCgCgBgEIAAgzIA1gzQAGgGgEgJIgFgHIAhgjIASATQAPAXgIAWQgFALgHAHIhQBQQgEAFgEAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(60.8,47.6,2.732,2.708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.acs1, new cjs.Rectangle(0,0,76.1,70.3), null);


(lib.logomovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// Capa 4
	this.instance = new lib.titulocurso();
	this.instance.parent = this;
	this.instance.setTransform(135.5,163.8,1,1,0,0,0,163.1,46.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({y:145,alpha:1},11,cjs.Ease.get(1)).wait(1));

	// Capa 3
	this.instance_1 = new lib.letrasac();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.9,92.2,1.135,1.135,0,0,0,125.8,8.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,x:125.8,alpha:1},10,cjs.Ease.get(1)).wait(6).to({y:63.2},11,cjs.Ease.get(1)).wait(1));

	// Capa 2
	this.instance_2 = new lib.acs2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(145.1,37.8,1,1,0,0,0,35.6,37.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({alpha:1},10).wait(17).to({y:8.8},11,cjs.Ease.get(1)).wait(1));

	// Capa 1
	this.instance_3 = new lib.acs1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(109.2,35.1,1,1,0,0,0,38.1,35.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},10).wait(22).to({y:6.1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.1,0,76.1,70.3);


(lib.imag01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.logomovie();
	this.instance.parent = this;
	this.instance.setTransform(-503.6,100.6,1,1,0,0,0,125.8,50.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+7TSQh4AAABh4MAAAgi0QgBh4B4AAMA92AAAQB4AAAAB4MAAAAi0QAAB4h4AAg");
	this.shape.setTransform(-500.8,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.imag01, new cjs.Rectangle(-710.7,-18.4,419.9,246.9), null);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// Capa 3
	this.instance = new lib.chunk();
	this.instance.parent = this;
	this.instance.setTransform(1149,-97);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).wait(1));

	// Capa 2
	this.instance_1 = new lib.imag01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.9,116.1,1.166,1.166,0,0,0,-512.9,109.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(6));

	// Capa 1
	this.instance_2 = new lib.text01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(257.9,241.3,1.133,1.133,0,0,0,257.9,241.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,alpha:1},19,cjs.Ease.get(1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-141.8,1366,770.2);


// stage content:
(lib.AC_IMCR_OV_01 = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// MC con contenido
	this.instance = new lib.MC_pag1();
	this.instance.parent = this;
	this.instance.setTransform(602,336.8,1,1,0,0,0,524,241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(555.5,279.5,1366,781.6);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AC_IMCR_OV_01_atlas_.jpg?1576254371421", id:"AC_IMCR_OV_01_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;