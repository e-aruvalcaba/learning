(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Mapadebits19 = function() {
	this.initialize(img.Mapadebits19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,364);// helper functions:

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
	this.text = new cjs.Text("Equipos de IMCR", "bold 71px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 81;
	this.text.lineWidth = 679;
	this.text.alpha = 0.99215686;
	this.text.parent = this;
	this.text.setTransform(-12.2,-35.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.6,-37.2,682.8,83.3);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits19();
	this.instance.parent = this;
	this.instance.setTransform(-7,-15,1.982,1.982);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(-7,-15,1274.7,721.6), null);


(lib.Sydsfmbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#482A75").s().p("Eg92AKUIAA0nMB7tAAAIAAUng");
	this.shape.setTransform(395.9,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,791.7,132);


(lib.linia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#482A75").ss(6,1,1,3,true).p("AAAwOMAAAAgd");
	this.shape.setTransform(0,103.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,6,213.8);


(lib.cuadro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#482A75").ss(6,1,1,3,true).p("AwOwOMAgdAAAMAAAAgdMggdAAAg");
	this.shape.setTransform(103.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,213.8,213.8);


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
	var mask_graphics_45 = new cjs.Graphics().p("Eg+TAJYIAAyvMB8nAAAIAASvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:98,y:164.3}).wait(46));

	// tit 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(95.6,268.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).wait(1).to({regX:-12.2,regY:4.4,x:83.4,y:272.9},0).wait(1).to({y:271.7},0).wait(1).to({y:269.2},0).wait(1).to({y:264.9},0).wait(1).to({y:257.1},0).wait(1).to({y:241.8},0).wait(1).to({y:212},0).wait(1).to({y:192},0).wait(1).to({y:182.7},0).wait(1).to({y:177.7},0).wait(1).to({y:175},0).wait(1).to({y:173.6},0).wait(1).to({regX:0,regY:0,x:95.6,y:168.9},0).wait(33));

	// Layer 3
	this.instance_1 = new lib.Sydsfmbol1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(103,104.3,1,0.061,0,0,0,395.9,66);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1).to({scaleY:0.06,y:104.5},0).wait(1).to({scaleY:0.07,y:104.9},0).wait(1).to({scaleY:0.08,y:105.7},0).wait(1).to({scaleY:0.1,y:107},0).wait(1).to({scaleY:0.13,y:109},0).wait(1).to({scaleY:0.18,y:112.2},0).wait(1).to({scaleY:0.25,y:117.2},0).wait(1).to({scaleY:0.38,y:126.2},0).wait(1).to({scaleY:0.6,y:141.2},0).wait(1).to({scaleY:0.77,y:152.9},0).wait(1).to({scaleY:0.87,y:159.2},0).wait(1).to({scaleY:0.92,y:162.9},0).wait(1).to({scaleY:0.96,y:165.3},0).wait(1).to({scaleY:0.98,y:166.8},0).wait(1).to({scaleY:0.99,y:167.6},0).wait(1).to({scaleY:1,y:168.1},0).wait(1).to({scaleY:1,y:168.3},0).wait(35));

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
	this.instance.setTransform(750.5,294,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

	// Capa 1
	this.instance_1 = new lib.text01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(132,143.3,1.2,1.2,0,0,0,257.9,241.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:241.3,scaleX:1,scaleY:1,x:172,y:143.4,alpha:1},14,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.9,-164.1,1529.7,865.9);


// stage content:
(lib.AC_IMCR_OV_19 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(78,95.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(492.1,268.7,1529.7,865.9);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits19.png?1574030787446", id:"Mapadebits19"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;