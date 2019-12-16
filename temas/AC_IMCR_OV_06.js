(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AC_IMCR_OV_06_atlas_", frames: [[0,0,1206,680],[1208,0,51,45]]}
];


// symbols:



(lib._0601 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_06_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.chunk = function() {
	this.spriteSheet = ss["AC_IMCR_OV_06_atlas_"];
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


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E52520","#CCCCCC"],[0.357,1],-116.2,0,116.1,0).s().p("AyICNIerAAIAJgBQALgCAJgFQAggOAHghQAMg0Bzm4ICkAAIgHAaIiKIPQgLAngcAmQg5BOhQAAI8lAAIgbBmIgBADg");
	this.shape.setTransform(249.7,108.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E52520").s().p("ACXDsQhUgdgYhKQgeheBPiSIAagfQAiglAogZQB+hSCEA7IguCqQgKgMgQgLQgggXgdABQgnACggAjQgkAogCA9QgBAfAWANQAUALAhgDQAegDAdgMQAdgMALgNIg0CtQgVALghAHQgbAFgZAAQgmAAgigMgAKBDsIgpiWIglCWIikAAICAnZID0AAIAUACQAYAEATALQA7AigPBYQgQBYg5AhQgSALgTAEIgRACIBGDEgAKZhxIgLABIgTBZIAlAAIAUgNQAVgSADgbQADgbgggFIgNAAIgJAAgAjMDsIAnkDIiNEDIhiAAIAAj6IhkD6IigAAIDNnZICnAAIAADtICIjtICfAAIgzHZgAtwDsICBnZICnAAIiCHZg");
	this.shape_1.setTransform(249.3,92.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCCCCC","#E52520"],[0,0.576],-116.1,0,116.2,0).s().p("AxsGXIgdAAICRopIAJgYQANgdASgYQA4hOBQAAIclAAIAchpIAUAjIB9DnI+sAAQgOAAgQAIQgeAOgIAgQgIAhg8DpIg7Djg");
	this.shape_2.setTransform(252.1,73.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AwkImIAbhnIclAAQBQAAA5hNQAcgnALgnICKoPIAXAAIiQIpQgNAngcAnQg4BNhQAAI8kAAIgdBqgAyIDrIAHgcICHAAIA6jjQA9jpAIghQAHggAfgPQAPgHAOgBIetAAIh9jmIABgHICREKI+sAAQgOAAgQAIQgfAOgHAhIhEEJIg7Djg");
	this.shape_3.setTransform(254.2,93.9);

	this.text = new cjs.Text("Manejo de incidentes y resolución de crisis", "bold 20px 'Arial'", "#E52520");
	this.text.lineHeight = 24;
	this.text.lineWidth = 432;
	this.text.parent = this;
	this.text.setTransform(38,162);

	this.text_1 = new cjs.Text("Con el IMCR se pretende contar con un programa para manejar incidentes y resolver crisis, identificando, gestionando y monitoreando posibles vulnerabilidades.\n\nDe este modo podemos proteger a nuestros consumidores, al medio ambiente, a las comunidades donde operamos, a los colaboradores y a los activos, así como la imagen y marcas de la Compañía.", "18px 'Arial'");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 454;
	this.text_1.parent = this;
	this.text_1.setTransform(22,208);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgloAhlQh4AAAAh4MAAAg/ZQAAh4B4AAMBLRAAAQB4AAAAB4MAAAA/ZQAAB4h4AAg");
	this.shape_4.setTransform(246.9,209.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.text_1},{t:this.text},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(-6,-5.3,505.8,456.4), null);


(lib.imag01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib._0601();
	this.instance.parent = this;
	this.instance.setTransform(478,-102,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imag01, new cjs.Rectangle(-728,-102,1206,680), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Objetivo de IMCR", "bold 25px 'Arial'", "#FFFFFF");
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
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));

	// Capa 3
	this.instance = new lib.chunk();
	this.instance.parent = this;
	this.instance.setTransform(1149,-95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).wait(1));

	// Capa 1
	this.instance_1 = new lib.text01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(257.9,241.3,1.133,1.133,0,0,0,257.9,241.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:805.7,y:261.3},0).to({scaleX:1,scaleY:1,x:817.7,y:281.3,alpha:1},14,cjs.Ease.get(1)).wait(1));

	// Capa 2
	this.instance_2 = new lib.imag01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(847.6,244.6,1.134,1.134,0,0,0,199.8,237.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:199.9,scaleX:1,scaleY:1,x:847.7,alpha:1},14,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-141,1368.2,771.4);


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


// stage content:
(lib.AC_IMCR_OV_06 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(473,279.5,1368.2,783.7);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AC_IMCR_OV_06_atlas_.jpg?1576260600702", id:"AC_IMCR_OV_06_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;