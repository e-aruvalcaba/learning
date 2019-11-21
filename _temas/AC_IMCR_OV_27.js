(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Mapadebits26 = function() {
	this.initialize(img.Mapadebits26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,811,504);// helper functions:

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
	this.text = new cjs.Text("¡GRACIAS!", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 474;
	this.text.parent = this;
	this.text.setTransform(544.8,260);

	this.text_1 = new cjs.Text("Has finalizado el curso de IMCR.\n\nJuntos podemos evitar incidentes y reducir el impacto de incidentes elevados.\n\nRecuerda que tu colaboración es clave para lograrlo.", "20px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 474;
	this.text_1.parent = this;
	this.text_1.setTransform(544.8,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(305.9,64,477.8,228), null);


(lib.imag01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits26();
	this.instance.parent = this;
	this.instance.setTransform(-725,-153,1.484,1.484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imag01, new cjs.Rectangle(-725,-153,1203.5,747.9), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({x:217.9,y:261.3},0).to({scaleX:1,scaleY:1,x:257.9,y:241.3,alpha:1},14,cjs.Ease.get(1)).wait(13));

	// Capa 2
	this.instance_1 = new lib.imag01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(887.6,244.6,1.134,1.134,0,0,0,199.8,237.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:199.9,scaleX:1,scaleY:1,x:847.7,alpha:1},14,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.6,-198.8,1365.3,848.5);


// stage content:
(lib.AC_IMCR_OV_27 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(516.4,234,1365.3,848.5);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits26.png?1574030859135", id:"Mapadebits26"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;