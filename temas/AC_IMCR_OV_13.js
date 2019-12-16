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


(lib.tarjetonvde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCE7AE").s().p("AtlU7QiWAAAAiWMAAAgnfIf3AAMAAAAnfQAACWiWAAg");
	this.shape.setTransform(102,189);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67CF44").s().p("Av7ETIAAmPQAAiWCWAAIbLAAQCWAAAACWIAAGPg");
	this.shape_1.setTransform(102,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjetonvde, new cjs.Rectangle(0,0,204,322.9), null);


(lib.tarjeton_ama = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EAAD").s().p("AtlVBQiWgBAAiWMAAAgnqIf3AAMAAAAnqQAACWiWABg");
	this.shape.setTransform(102,188.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Av7EOIAAmFQAAiWCWAAIbLAAQCWAAAACWIAAGFg");
	this.shape_1.setTransform(102,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarjeton_ama, new cjs.Rectangle(0,0,204,322.9), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Conoce el proceso general y las actividades que se realizan en cada fase.", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 1066;
	this.text.parent = this;
	this.text.setTransform(2,49);

	this.text_1 = new cjs.Text("El IMCR se aplica a través de un proceso ordenado que consta de dos fases: una preventiva y otra correctiva. ", "bold 18px 'Arial'");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 1066;
	this.text_1.parent = this;
	this.text_1.setTransform(2,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,20,1069.7,52.3), null);


(lib.flechamc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzAmQAAgBABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBgBAAAAIhXAAQgDgPAAgQQAAgPADgQIBXAAQAAAAABAAQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQABAAAAgBQAAAAAAgBQgBAAAAgBIgchLIDhBwIjhBxg");
	this.shape.setTransform(18.2,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechamc, new cjs.Rectangle(3.6,2.8,29.2,22.6), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Proceso de IMCR", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(231,29,70,0.992)").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,58.6), null);


(lib.tarj05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Esta actividad comprende:\n\n● Evaluar las lecciones \n   aprendidas.\n● Compartir las lecciones \n   aprendidas.", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(8.4,64.8);

	this.text_1 = new cjs.Text("Lecciones \naprendidas", "bold 17px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 186;
	this.text_1.parent = this;
	this.text_1.setTransform(101.6,11.4);

	this.instance = new lib.tarjeton_ama();
	this.instance.parent = this;
	this.instance.setTransform(102,161.5,1,1,0,0,0,102,161.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarj05, new cjs.Rectangle(0,0,204,322.9), null);


(lib.tarj04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Esta actividad \ncomprende:\n\n● Identificar los recursos \n   internos y externos para \n   el manejo del incidente.\n● Identificar las partes \n   interesadas.\n● Desarrollar planes y \n   estrategias para el \n   manejo del incidente.", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 190;
	this.text.parent = this;
	this.text.setTransform(7.8,64.8);

	this.text_1 = new cjs.Text("Manejo del \nincidente", "bold 17px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 186;
	this.text_1.parent = this;
	this.text_1.setTransform(102.7,11.4);

	this.instance = new lib.tarjeton_ama();
	this.instance.parent = this;
	this.instance.setTransform(102,161.5,1,1,0,0,0,102,161.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarj04, new cjs.Rectangle(0,0,204,322.9), null);


(lib.tarj03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Esta actividad comprende:\n\n● Analizar el problema.\n● Analizar la sensibilidad \n   del mercado.\n● Analizar el impacto.\n● Definir la estrategia de \n   comunicación.", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(7.8,64.8);

	this.text_1 = new cjs.Text("Gestión del \nincidente", "bold 17px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 186;
	this.text_1.parent = this;
	this.text_1.setTransform(102.4,11.4);

	this.instance = new lib.tarjeton_ama();
	this.instance.parent = this;
	this.instance.setTransform(102,161.5,1,1,0,0,0,102,161.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarj03, new cjs.Rectangle(0,0,204,322.9), null);


(lib.tarj02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Esta actividad comprende:\n\n● Identificar señales \n   relevantes para el \n   negocio.\n● Comunicar señales al \n   equipo de IMCR.\n", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(7.8,64.8);

	this.text_1 = new cjs.Text("Detección de \nseñales", "bold 17px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 186;
	this.text_1.parent = this;
	this.text_1.setTransform(100.1,11.4);

	this.instance = new lib.tarjetonvde();
	this.instance.parent = this;
	this.instance.setTransform(102,161.5,1,1,0,0,0,102,161.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarj02, new cjs.Rectangle(0,0,204,322.9), null);


(lib.tarj01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Esta actividad comprende:\n\n● Identificar riesgos   \n   potenciales para el \n   negocio.\n● Hacer análisis y \n   evaluación de riesgos.\n● Generar planes de \n   acción.\n● Monitorear los eventos \n   de riesgo.", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(9.3,64.8);

	this.text_1 = new cjs.Text("Identificación y evaluación de riesgos", "bold 17px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 186;
	this.text_1.parent = this;
	this.text_1.setTransform(99.5,11.4);

	this.instance = new lib.tarjetonvde();
	this.instance.parent = this;
	this.instance.setTransform(102,161.5,1,1,0,0,0,102,161.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tarj01, new cjs.Rectangle(0,0,204,322.9), null);


(lib.mc01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_136 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(136).call(this.frame_136).wait(1));

	// Capa 2
	this.text = new cjs.Text("Para facilitar la realización de estas actividades contamos con algunas herramientas muy útiles. A continuación te las presentamos.", "bold 16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 1066;
	this.text.parent = this;
	this.text.setTransform(9.3,480.1);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(136).to({_off:false},0).wait(1));

	// Capa 11
	this.instance = new lib.tarj05();
	this.instance.parent = this;
	this.instance.setTransform(970.2,296.2,1,1,0,0,0,102,161.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).to({x:986.7,alpha:1},9,cjs.Ease.get(1)).wait(18));

	// Capa 10
	this.instance_1 = new lib.tarj04();
	this.instance_1.parent = this;
	this.instance_1.setTransform(756.8,296.2,1,1,0,0,0,102,161.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86).to({_off:false},0).to({x:773.3,alpha:1},10,cjs.Ease.get(1)).wait(41));

	// Capa 9
	this.instance_2 = new lib.tarj01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(123.2,296.2,1,1,0,0,0,102,161.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({_off:false},0).to({x:106.7,alpha:1},10,cjs.Ease.get(1)).wait(41));

	// Capa 8
	this.instance_3 = new lib.tarj03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(544.2,296.2,1,1,0,0,0,102,161.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({_off:false},0).to({x:560.7,alpha:1},11,cjs.Ease.get(1)).wait(64));

	// Capa 7
	this.instance_4 = new lib.tarj02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(337.2,296.2,1,1,0,0,0,102,161.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({x:320.7,alpha:1},11,cjs.Ease.get(1)).wait(64));

	// Capa 6
	this.instance_5 = new lib.flechamc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(635.3,100.6,1,1,0,0,0,18.2,14.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:1060.9},18,cjs.Ease.get(1)).wait(84));

	// Capa 5
	this.instance_6 = new lib.flechamc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(246.5,100.5,1,1,180,0,0,18.2,14.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).to({x:29.9},18,cjs.Ease.get(1)).wait(84));

	// Capa 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_20 = new cjs.Graphics().p("AiVDyIAAnjIErAAIAAHjg");
	var mask_graphics_21 = new cjs.Graphics().p("Aq8DyIAAnjIV5AAIAAHjg");
	var mask_graphics_22 = new cjs.Graphics().p("AzGDyIAAnjMAmNAAAIAAHjg");
	var mask_graphics_23 = new cjs.Graphics().p("A6yDyIAAnjMA1lAAAIAAHjg");
	var mask_graphics_24 = new cjs.Graphics().p("EgiAADyIAAnjMBEBAAAIAAHjg");
	var mask_graphics_25 = new cjs.Graphics().p("EgowADyIAAnjMBRhAAAIAAHjg");
	var mask_graphics_26 = new cjs.Graphics().p("EgvDADyIAAnjMBeGAAAIAAHjg");
	var mask_graphics_27 = new cjs.Graphics().p("Eg03ADyIAAnjMBpvAAAIAAHjg");
	var mask_graphics_28 = new cjs.Graphics().p("Eg6OADyIAAnjMB0dAAAIAAHjg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg/HADyIAAnjMB+PAAAIAAHjg");
	var mask_graphics_30 = new cjs.Graphics().p("EhDiADyIAAnjMCHFAAAIAAHjg");
	var mask_graphics_31 = new cjs.Graphics().p("EhHfADyIAAnjMCO/AAAIAAHjg");
	var mask_graphics_32 = new cjs.Graphics().p("EhK/ADyIAAnjMCV/AAAIAAHjg");
	var mask_graphics_33 = new cjs.Graphics().p("EhOAADyIAAnjMCcBAAAIAAHjg");
	var mask_graphics_34 = new cjs.Graphics().p("EhQlADyIAAnjMChLAAAIAAHjg");
	var mask_graphics_35 = new cjs.Graphics().p("EhSqADyIAAnjMClWAAAIAAHjg");
	var mask_graphics_36 = new cjs.Graphics().p("EhUTADyIAAnjMConAAAIAAHjg");
	var mask_graphics_37 = new cjs.Graphics().p("EhVeADyIAAnjMCq9AAAIAAHjg");
	var mask_graphics_38 = new cjs.Graphics().p("EhWKADyIAAnjMCsVAAAIAAHjg");
	var mask_graphics_39 = new cjs.Graphics().p("EhWZADyIAAnjMCszAAAIAAHjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:439.4,y:101.6}).wait(1).to({graphics:mask_graphics_21,x:449.4,y:101.6}).wait(1).to({graphics:mask_graphics_22,x:459,y:101.6}).wait(1).to({graphics:mask_graphics_23,x:467.9,y:101.6}).wait(1).to({graphics:mask_graphics_24,x:476.3,y:101.6}).wait(1).to({graphics:mask_graphics_25,x:484.2,y:101.6}).wait(1).to({graphics:mask_graphics_26,x:491.5,y:101.6}).wait(1).to({graphics:mask_graphics_27,x:498.3,y:101.6}).wait(1).to({graphics:mask_graphics_28,x:504.5,y:101.6}).wait(1).to({graphics:mask_graphics_29,x:510.2,y:101.6}).wait(1).to({graphics:mask_graphics_30,x:515.4,y:101.6}).wait(1).to({graphics:mask_graphics_31,x:520,y:101.6}).wait(1).to({graphics:mask_graphics_32,x:524.1,y:101.6}).wait(1).to({graphics:mask_graphics_33,x:527.6,y:101.6}).wait(1).to({graphics:mask_graphics_34,x:530.6,y:101.6}).wait(1).to({graphics:mask_graphics_35,x:533,y:101.6}).wait(1).to({graphics:mask_graphics_36,x:534.9,y:101.6}).wait(1).to({graphics:mask_graphics_37,x:536.3,y:101.6}).wait(1).to({graphics:mask_graphics_38,x:537.1,y:101.6}).wait(1).to({graphics:mask_graphics_39,x:537.4,y:101.6}).wait(98));

	// Capa 3
	this.text_1 = new cjs.Text("Fase preventiva", "bold 18px 'Arial'");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 141;
	this.text_1.parent = this;
	this.text_1.setTransform(271.1,92.5);

	this.text_2 = new cjs.Text("Fase correctiva", "bold 18px 'Arial'");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 141;
	this.text_2.parent = this;
	this.text_2.setTransform(477.8,92.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("EguUAC6QhMAAg3g3Qg2g2AAhNIAAAAQAAhMA2g3QA3g2BMAAMBcoAAAQBOAAA2A2QA2A3AABMIAAAAQAABNg2A2Qg2A3hOAAg");
	this.shape.setTransform(771.9,100.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#67CF44").s().p("A+HC6QhNAAg2g3Qg2g2AAhNIAAAAQAAhMA2g3QA2g2BNAAMA8PAAAQBNAAA2A2QA2A3AABMIAAAAQAABNg2A2Qg2A3hNAAg");
	this.shape_1.setTransform(211.3,100.7);

	var maskedShapeInstanceList = [this.text_1,this.text_2,this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.text_1}]},20).wait(117));

	// Capa 1
	this.instance_7 = new lib.Símbolo1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(545.5,37,1,1,0,0,0,534.8,37);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},10).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.7,20,1069.6,52.3);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Capa 4
	this.instance = new lib.mc01();
	this.instance.parent = this;
	this.instance.setTransform(524.6,236.9,1,1,0,0,0,545.3,262.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-6,1069.7,52.3);


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
(lib.AC_IMCR_OV_13 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,199.6);
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