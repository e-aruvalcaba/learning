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


(lib.pestañaconcepto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDEDE").s().p("AjAhgIGBAAIjBDBg");
	this.shape.setTransform(189.8,117.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEDEDE").s().p("A9MIhIAAurQAAiWCWgBMA1tAAAQCWABAACWIAAOrg");
	this.shape_1.setTransform(186.9,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pestañaconcepto, new cjs.Rectangle(0,0,373.9,127), null);


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


(lib.iconoparab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(2));

	// Capa 2
	this.instance = new lib.ondas();
	this.instance.parent = this;
	this.instance.setTransform(66.2,12.6,1,1,-40.7,0,0,8.4,20.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.instance_1 = new lib.parabgr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.9,40.1,1.129,1.129,0,0,0,38.8,40.1);
	this.instance_1.alpha = 0.02;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regY:40.2,scaleX:1,scaleY:1,x:38.8,y:40.2,alpha:1},12).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.iconobocina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// Capa 2
	this.instance = new lib.ondas();
	this.instance.parent = this;
	this.instance.setTransform(91.9,29.1,1,1,0,0,0,8.3,20.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).wait(1));

	// Capa 1
	this.instance_1 = new lib.iconobocinagr();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.6,35.1,1.286,1.286,0,0,0,36.6,35);
	this.instance_1.alpha = 0.02;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({scaleX:1,scaleY:1,y:35,alpha:1},14).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.tarjeta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(6));

	// Capa 2
	this.instance = new lib.iconoparab();
	this.instance.parent = this;
	this.instance.setTransform(197,55.9,1,1,0,0,0,38.8,40.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(6));

	// Capa 1
	this.text = new cjs.Text("Necesitamos sondear constantemente nuestro entorno interno y externo en busca de señales iniciales de advertencia. \n\nLas señales pueden pueden originarse desde adentro o desde el exterior de la Compañía.\n\nLas señales pueden detectarse por medios técnicos (mediante instrumentos o sensores) o son detectadas por las personas.\n", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 322;
	this.text.parent = this;
	this.text.setTransform(24,132.1);

	this.instance_1 = new lib.pestañaconcepto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(187.1,63.5,1,1,0,0,0,186.9,63.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("A62dkQiWAAAAiWMAAAg2bQAAiWCWAAMA1tAAAQCWAAAACWMAAAA2bQAACWiWAAg");
	this.shape.setTransform(186.9,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.text}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374,463.6);


(lib.tarjeta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.iconobocina();
	this.instance.parent = this;
	this.instance.setTransform(198.5,54.5,1,1,0,0,0,50.1,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 1
	this.text = new cjs.Text("Esta herramienta ayuda a identificar alertas, con el fin de evitar que se conviertan en incidentes. \n\nTodos los incidentes elevados envían señales antes de que ocurran. Si estas señales se recogen, se amplifican y se actúa sobre ellas con efectividad, muchos incidentes elevados podrían evitarse.\n", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 322;
	this.text.parent = this;
	this.text.setTransform(24,132.1);

	this.instance_1 = new lib.pestañaconcepto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.9,63.5,1,1,0,0,0,186.9,63.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("A62dkQiWAAAAiWIAAxkMAAAgk3QAAiWCWAAMA1tAAAQCWAAAACWMAAAAk3IAARkQAACWiWAAg");
	this.shape.setTransform(186.9,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeta1, new cjs.Rectangle(0,0,373.9,429.2), null);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// Capa 4
	this.instance = new lib.tarjeta2();
	this.instance.parent = this;
	this.instance.setTransform(738.9,300.9,1.145,1.145,0,0,0,187,213);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(1));

	// Capa 1
	this.instance_1 = new lib.tarjeta1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.1,297.9,1.15,1.15,0,0,0,187,210);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({regX:186.9,scaleX:1,scaleY:1,x:286.9,alpha:1},14,cjs.Ease.get(1)).wait(32));

	// Capa 5
	this.text = new cjs.Text("Esta herramienta nos permite detectar y comunicar oportunamente las señales de alertas y advertencias:\n", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 820;
	this.text.parent = this;
	this.text.setTransform(44,-16);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42,-18,823.8,567.8);


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
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,703.1);
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