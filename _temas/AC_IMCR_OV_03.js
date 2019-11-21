(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,646,399);// helper functions:

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


(lib.textoobjetivosgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("●\n\n\n●", "16px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 25;
	this.text.parent = this;
	this.text.setTransform(2,40.6);

	this.text_1 = new cjs.Text("Conocer la metodología de IMCR, su funcionamiento y aplicación.\n\nIdentificar y reportar a los equipos de IMCR los incidentes que suceden o pueden llegar a suceder en su unidad operativa.", "16px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 360;
	this.text_1.parent = this;
	this.text_1.setTransform(22,40.6);

	this.text_2 = new cjs.Text("Al finalizar este curso podrás:", "16px 'Arial'", "#FFFFFF");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 394;
	this.text_2.parent = this;
	this.text_2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textoobjetivosgr, new cjs.Rectangle(0,0,397.9,282.9), null);


(lib.textocontenidogr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("El contenido del curso es el siguiente:", "16px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 394;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.text_1 = new cjs.Text("●\n●\n●\n●\n●\n●\n●", "16px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 25;
	this.text_1.parent = this;
	this.text_1.setTransform(2,36.6);

	this.text_2 = new cjs.Text("Metodología IMCR\nTipos de eventos\nTaxonomía de IMCR\nProceso y herramientas de gestión\nEquipos de IMCR\nReporte de incidentes\nCasos prácticos", "16px 'Arial'", "#FFFFFF");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 304;
	this.text_2.parent = this;
	this.text_2.setTransform(22,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textocontenidogr, new cjs.Rectangle(0,0,397.9,276.8), null);


(lib.textoboenvgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Bienvenido(a) al curso IMCR Manejo de Incidentes y Resolución de Crisis.\n\nAquí aprenderás en qué consiste esta metodología y cómo puedes colaborar en la prevención y manejo de incidentes, de modo que protejamos a nuestros consumidores, los bienes del negocio y a nuestros colaboradores.\n\n¡Adelante!", "16px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 394;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.textoboenvgr, new cjs.Rectangle(0,0,397.9,244.3), null);


(lib.imagenmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.86,1.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imagenmc, new cjs.Rectangle(0,0,1201.8,742.3), null);


(lib.flechacursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDgAgXApQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAbA4IAggQIgcg4QgCgCACgDQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAmAAIhyhyIAACfIAggYQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAg");
	this.shape.setTransform(7.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechacursor, new cjs.Rectangle(0,0,14.2,22.4), null);


(lib.botonsimple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.827)").s().rr(-72.15,-24.3,144.3,48.6,12);
	this.shape.setTransform(72.2,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().rr(-72.15,-24.3,144.3,48.6,12);
	this.shape_1.setTransform(72.2,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.3,48.6);


(lib.textocontenido = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Capa 1
	this.instance = new lib.textocontenidogr();
	this.instance.parent = this;
	this.instance.setTransform(208.9,185.2,1,1,0,0,0,208.9,140.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:140.2,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,45,397.9,276.8);


(lib.textobjetivos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Capa 1
	this.instance = new lib.textoobjetivosgr();
	this.instance.parent = this;
	this.instance.setTransform(198.9,186.5,1,1,0,0,0,198.9,141.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:141.5,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,45,397.9,282.9);


(lib.textobienv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// Capa 1
	this.instance = new lib.textoboenvgr();
	this.instance.parent = this;
	this.instance.setTransform(198.9,167.2,1,1,0,0,0,198.9,122.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({y:122.2,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,45,397.9,244.3);


(lib.instruccionclic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Capa 3
	this.text = new cjs.Text("Haz clic en cada botón para \nver la descripción", "16px 'Arial'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 345;
	this.text.parent = this;
	this.text.setTransform(47.1,0.6);
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


(lib.mc02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{uno:2,dos:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this
		
		this.bot1.addEventListener('click', objetivos);
		
		function objetivos() {
			root.gotoAndStop("uno");
		}
		
		this.bot2.addEventListener('click', contenido);
		
		function contenido() {
			root.gotoAndStop("dos");
		}
	}
	this.frame_3 = function() {
		try{
			parent.final_tema();
		}catch(err){
			console.log(" El tema esta corriendo stand alone. FINAL TEMA")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Capa 2
	this.instance = new lib.textobienv();
	this.instance.parent = this;
	this.instance.setTransform(227,199.5,1,1,0,0,0,198.9,122.2);

	this.text = new cjs.Text("Bienvenida", "bold 20px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 257;
	this.text.parent = this;
	this.text.setTransform(30.1,19.1);

	this.instance_1 = new lib.textobjetivos();
	this.instance_1.parent = this;
	this.instance_1.setTransform(227,218.8,1,1,0,0,0,198.9,141.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,1,3,true).p("Ai4BaIC4i3IC5C3");
	this.shape.setTransform(138,453);

	this.instance_2 = new lib.textocontenido();
	this.instance_2.parent = this;
	this.instance_2.setTransform(237,217.5,1,1,0,0,0,208.9,140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{text:"Bienvenida"}},{t:this.instance}]}).to({state:[{t:this.text,p:{text:"Objetivos"}},{t:this.shape,p:{x:138}},{t:this.instance_1}]},2).to({state:[{t:this.text,p:{text:"Contenido"}},{t:this.shape,p:{x:317.5}},{t:this.instance_2}]},1).wait(1));

	// Capa 1
	this.text_1 = new cjs.Text("Contenido", "16px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 104;
	this.text_1.parent = this;
	this.text_1.setTransform(316.4,491.1);

	this.text_2 = new cjs.Text("Objetivos", "16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 104;
	this.text_2.parent = this;
	this.text_2.setTransform(141.9,491.1);

	this.bot2 = new lib.botonsimple();
	this.bot2.parent = this;
	this.bot2.setTransform(317.8,500,1,1,0,0,0,72.2,24.3);
	new cjs.ButtonHelper(this.bot2, 0, 1, 1);

	this.bot1 = new lib.botonsimple();
	this.bot1.parent = this;
	this.bot1.setTransform(140.7,500,1,1,0,0,0,72.2,24.3);
	new cjs.ButtonHelper(this.bot1, 0, 1, 1);

	this.instance_3 = new lib.instruccionclic();
	this.instance_3.parent = this;
	this.instance_3.setTransform(99.3,578.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.827)").s().p("Egi0A0vMAAAhpdMBFpAAAMAAABpdg");
	this.shape_1.setTransform(222.9,337.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_3},{t:this.bot1},{t:this.bot2},{t:this.text_2},{t:this.text_1}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,445.9,675);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// Capa 3
	this.instance = new lib.mc02();
	this.instance.parent = this;
	this.instance.setTransform(1347.7,241.5,1,1,0,0,0,222.9,337.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:900.7,y:242.3},11,cjs.Ease.get(1)).wait(1));

	// Capa 5
	this.instance_1 = new lib.imagenmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(524,275.3,1.2,1.2,0,0,0,600.9,371.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:523.9,y:275.2,alpha:1},14).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.1,-170.2,1442.2,890.8);


// stage content:
(lib.AC_IMCR_OV_03 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(480.9,262.6,1442.2,890.8);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits4.png?1573348828514", id:"Mapadebits4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;