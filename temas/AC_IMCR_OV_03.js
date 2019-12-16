(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"AC_IMCR_OV_03_atlas_", frames: [[0,0,1206,680],[1208,0,51,45]]}
];


// symbols:



(lib._0301 = function() {
	this.spriteSheet = ss["AC_IMCR_OV_03_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.chunk = function() {
	this.spriteSheet = ss["AC_IMCR_OV_03_atlas_"];
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


(lib.textoobjetivosgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaEWQgEgBgCgEIhNivQhHgHgxg1Qgyg2AAhIQAAhPA4g2QA3g4BOAAQBOAAA2A4QA3A2AABPIgBASICxAhQAFABACAEQABAGgEADIhcBcIAHBnIAAABIAAACIgBABIgBABIAAABIAAAAIgCACIgBAAIgDABIhvACIhbBcQgDADgDAAgAgVD/IBOhRIjIjeQgDgDAAgDQABgDACgDQAGgGAGAHIDMDhIBWgBIjri0QgDgDAAgEQgBgDADgDQACgCADgBQAEAAADACIDvC3IgGhSIkXiLQgDgBgBgDQgCgDACgDQABgDAEgCQADgBADABIEXCKIBPhPImyhSgAh1BPIhVjAQgCgEADgFQAEgEAFABIEQAzIAAgOQAAhIgygyQgxgyhHAAQhHAAgyAyQgzAyAABIQAAA/AqAvQApAwA+AJg");
	this.shape.setTransform(364.2,-32.7);

	this.text = new cjs.Text("●\n\n\n●", "18px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 25;
	this.text.parent = this;
	this.text.setTransform(2,40.6);

	this.text_1 = new cjs.Text("Conocer la metodología de IMCR, su funcionamiento y aplicación.\n\nIdentificar y reportar a los equipos de IMCR los incidentes que suceden o pueden llegar a suceder en su unidad operativa.", "18px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 360;
	this.text_1.parent = this;
	this.text_1.setTransform(22,40.6);

	this.text_2 = new cjs.Text("En este curso podrás:", "18px 'Arial'", "#FFFFFF");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 394;
	this.text_2.parent = this;
	this.text_2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textoobjetivosgr, new cjs.Rectangle(0,-60.5,397.9,343.5), null);


(lib.textocontenidogr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIEYQgIAAAAgJIAAoeQAAgIAIAAIEoAAIACAAIABABIACABIBqBqIACACIAAACIAAACIAAG0QAAAEgCACQgCADgEAAgAi/EHIF/AAIAAmjIhhAAQgIAAAAgJIAAhhIkWAAgAC0itIhMhNIAABNIBMAAgAh1DYQgEAAgCgDQgDgCAAgEIAAgyQAAgEADgDQACgCAEAAIAzAAQADAAADACQACADAAAEIAAAyQAAAEgCACQgDADgDAAgAhtDHIAiAAIAAgiIgiAAgAgYC+QgIABAAgJQAAgJAIABICQAAQAJgBAAAJQAAADgDADQgCACgEAAgAh1ByQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEAAICpAAQAJAAAAAIQAAAEgDADQgCACgEAAgAh1A/QgJAAAAgJIAAgyQAAgHAJAAIAzAAQAIAAAAAHIAAAyQAAAJgIAAgAhtAuIAiAAIAAghIgiAAgAgYAmQgIAAAAgJQAAgJAIABICQAAQAEAAACACQADADAAADQAAADgDADQgCADgEAAgAh1gmQgEAAgCgCQgDgCAAgEQAAgJAJAAIDUAAQAIAAAAAJQAAAIgIAAgAh1hZQgJABAAgJIAAgzQAAgDADgDQACgDAEABIAzAAQADgBADADQACADAAADIAAAzQAAAJgIgBgAhthqIAiAAIAAghIgiAAgAgYhyQgIAAAAgIQAAgJAIAAICQAAQAEAAACADQADACAAAEQAAADgDACQgCADgEAAgAh1i/QgEAAgCgCQgDgCAAgEQAAgIAJAAIB/AAQAJAAAAAIQAAAEgDACQgCACgEAAg");
	this.shape.setTransform(369,-33.9);

	this.text = new cjs.Text("El contenido del curso es el siguiente:", "18px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 394;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.text_1 = new cjs.Text("● Metodología IMCR\n● Tipos de eventos\n● Taxonomía de IMCR\n● Proceso y herramientas de gestión\n● Equipos de IMCR\n● Reporte de incidentes\n● Evaluación", "18px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 304;
	this.text_1.parent = this;
	this.text_1.setTransform(1.6,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textocontenidogr, new cjs.Rectangle(-0.4,-61.9,398.3,282.9), null);


(lib.textoboenvgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Bienvenido(a) al curso de Introducción a IMCR, para el manejo de incidentes y resolución de crisis.\n\nAquí aprenderás en qué consiste esta metodología y cómo puedes colaborar en la prevención y manejo de incidentes, de modo que protejamos a nuestros consumidores, los bienes del negocio y a nuestros colaboradores.\n\n¡Adelante!", "18px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 394;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.textoboenvgr, new cjs.Rectangle(0,0,397.9,245.2), null);


(lib.mediocir_blanco_cmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhRigQABAAACAAQBDAAAuAvQAvAvAABCQAABDgvAvQguAvhDAAQgCAAgBAA");
	this.shape.setTransform(8.2,16.1,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mediocir_blanco_cmc, new cjs.Rectangle(-1.8,-2.6,20.1,37.5), null);


(lib.imagenmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib._0301();
	this.instance.parent = this;
	this.instance.setTransform(-2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imagenmc, new cjs.Rectangle(-2,-1,1206,680), null);


(lib.flecha_blanca_cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDg");
	this.shape.setTransform(7.1,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABBUIgVgqIgcAUQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAiMQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIBlBmQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIghAAIAVAqQACAEgEABIgfAQIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_1.setTransform(6.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},91).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.2,22.4);


(lib.doslineas_blanco_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AxwiwMAjcAAAAxwCxMAjhAAA");
	this.shape.setTransform(114,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.doslineas_blanco_mc, new cjs.Rectangle(-0.7,-2.4,229.3,37.3), null);


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
p.nominalBounds = new cjs.Rectangle(-0.4,-16.9,398.3,282.8);


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
p.nominalBounds = new cjs.Rectangle(0,-15.5,397.9,343.5);


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
p.nominalBounds = new cjs.Rectangle(0,45,397.9,245.2);


(lib.instruccion_clic_blanco_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// instruccion
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.047)").ss(1,1,1).p("ARnigQABAAACAAQBDAAAvAvQAvAvAABCQAABDgvAvQgvAvhDAAQgCAAgBAAAxuChQhAgCgtgtQgvgvAAhDQAAhCAvgvQAtgtBAgC");
	this.shape.setTransform(129.1,16.1);

	this.text = new cjs.Text("Haz clic en cada botón para ver su descripción.", "14px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 14;
	this.text.lineWidth = 209;
	this.text.parent = this;
	this.text.setTransform(34.1,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.text}]},48).wait(1));

	// Capa 2
	this.instance = new lib.flecha_blanca_cursor();
	this.instance.parent = this;
	this.instance.setTransform(22.9,22.5,1,1,0,0,0,7.1,11.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({x:20.9,y:15.5,alpha:1},8,cjs.Ease.get(1)).wait(20));

	// Capa 5
	this.instance_1 = new lib.doslineas_blanco_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.3,16,0.006,1,0,0,0,112.7,16.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).wait(1).to({regX:114,regY:16.3,scaleX:0.01,x:16.5,y:16.2},0).wait(1).to({scaleX:0.01,x:17.1},0).wait(1).to({scaleX:0.02,x:18.3},0).wait(1).to({scaleX:0.04,x:20.1},0).wait(1).to({scaleX:0.06,x:22.7},0).wait(1).to({scaleX:0.1,x:26.4},0).wait(1).to({scaleX:0.14,x:31.7},0).wait(1).to({scaleX:0.2,x:38.9},0).wait(1).to({scaleX:0.29,x:48.8},0).wait(1).to({scaleX:0.4,x:61.6},0).wait(1).to({scaleX:0.53,x:75.8},0).wait(1).to({scaleX:0.64,x:88.5},0).wait(1).to({scaleX:0.73,x:98.5},0).wait(1).to({scaleX:0.79,x:106.2},0).wait(1).to({scaleX:0.85,x:112},0).wait(1).to({scaleX:0.89,x:116.5},0).wait(1).to({scaleX:0.92,x:120},0).wait(1).to({scaleX:0.94,x:122.7},0).wait(1).to({scaleX:0.96,x:124.7},0).wait(1).to({scaleX:0.97,x:126.2},0).wait(1).to({scaleX:0.98,x:127.3},0).wait(1).to({scaleX:0.99,x:128},0).wait(1).to({scaleX:0.99,x:128.4},0).wait(1).to({regX:112.8,regY:16.1,scaleX:0.99,x:127.4,y:16},0).wait(1));

	// Capa 4
	this.instance_2 = new lib.mediocir_blanco_cmc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25.2,16.1,1,1,0,0,0,8.2,16.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).wait(1).to({x:25.6},0).wait(1).to({x:26.8},0).wait(1).to({x:29.1},0).wait(1).to({x:32.8},0).wait(1).to({x:38.1},0).wait(1).to({x:45.5},0).wait(1).to({x:56},0).wait(1).to({x:70.5},0).wait(1).to({x:90.3},0).wait(1).to({x:116},0).wait(1).to({x:144.3},0).wait(1).to({x:169.7},0).wait(1).to({x:189.9},0).wait(1).to({x:205.2},0).wait(1).to({x:216.9},0).wait(1).to({x:225.9},0).wait(1).to({x:232.9},0).wait(1).to({x:238.3},0).wait(1).to({x:242.3},0).wait(1).to({x:245.4},0).wait(1).to({x:247.5},0).wait(1).to({x:249},0).wait(1).to({x:249.8},0).wait(1).to({x:250},0).wait(1));

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.047)").ss(1,1,1).p("ACxAAQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIg");
	this.shape_1.setTransform(16.1,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.141)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_2.setTransform(16.1,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.239)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_3.setTransform(16.1,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.333)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_4.setTransform(16.1,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.427)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_5.setTransform(16.1,16.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.525)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_6.setTransform(16.1,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.62)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_7.setTransform(16.1,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.714)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_8.setTransform(16.1,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.808)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_9.setTransform(16.1,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.906)").ss(1,1,1).p("AiwAAQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKg");
	this.shape_10.setTransform(16.1,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(1,1,1).p("ACxAAQAABKgzA0Qg0AzhKAAQhIAAg1gzQgzg0AAhKQAAhIAzg1QA1gzBIAAQBKAAA0AzQAzA1AABIg");
	this.shape_11.setTransform(16.1,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABXCxQhHgBgzgyQgzg0AAhKQAAhIAzg1QAzgyBHgB");
	this.shape_12.setTransform(7,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,260.3,34.3);


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
	this.instance_3 = new lib.instruccion_clic_blanco_v2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(117.1,595.4,1,1,0,0,0,19.5,19.5);

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

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.827)").s().p("Egi0A0vMAAAhpdMBFpAAAMAAABpdg");
	this.shape_1.setTransform(222.9,337.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.bot1},{t:this.bot2},{t:this.text_2},{t:this.text_1},{t:this.instance_3}]}).wait(4));

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

	// Capa 2
	this.instance = new lib.chunk();
	this.instance.parent = this;
	this.instance.setTransform(1162,-97);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(1));

	// Capa 3
	this.instance_1 = new lib.mc02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1347.7,241.5,1,1,0,0,0,222.9,337.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:900.7,y:242.3},11,cjs.Ease.get(1)).wait(1));

	// Capa 5
	this.instance_2 = new lib.imagenmc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(524,275.3,1.2,1.2,0,0,0,600.9,371.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:523.9,y:275.2,alpha:1},14).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5,-171.4,1447.2,816);


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
p.nominalBounds = new cjs.Rectangle(478.5,261.4,1447.2,816);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AC_IMCR_OV_03_atlas_.jpg?1576436412524", id:"AC_IMCR_OV_03_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;