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


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("● Proporcionar recomendaciones\n● Tomar decisiones acerca de las \n    acciones iniciales\n● Informar\n● Comunicar\n● Preparar recursos\n● Activación de los planes", "17px 'Arial'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 260;
	this.text.parent = this;
	this.text.setTransform(11.6,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E9E9").s().p("A0QNQQhkAAAAhkIAA3XQAAhkBkAAMAohAAAQBkAAAABkIAAXXQAABkhkAAg");
	this.shape.setTransform(139.7,84.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,279.5,213.1), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("1- Recopilar la información\n2- Analizar el problema\n3- Analizar la sensibilidad del \n    mercado\n4- Analizar el impacto\n5- Identificar integrantes clave", "17px 'Arial'");
	this.text.lineHeight = 21;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(11.8,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9E9E9").s().rr(-131.6,-84.85,263.2,169.7,10);
	this.shape.setTransform(131.6,84.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,263.2,169.7), null);


(lib.flecha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(153,153,153,0.839)","rgba(153,153,153,0.231)"],[0,1],19.6,0,-19.5,0).s().p("AAHCYQgKgBgHgJIgDgEQgHgJABgLQACgLAIgHIAPgMIiuAAQgLAAgIgIQgIgIAAgLIAAh5QAAgLAIgIQAIgIALAAICuAAIgPgMQgIgHgCgLQgBgMAIgIIACgFQAHgJAKgBQAMgBAJAHICWB3QAEACAEAEQAKAIAAANQAAANgKAIQgDAEgFACIiXB4QgGAGgJAAIgFgBg");
	this.shape.setTransform(35.9,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha, new cjs.Rectangle(16.3,12.8,39.2,30.6), null);


(lib.circulomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E51C45").ss(2,1,1).p("AG4AAQAAC2iBCBQiBCBi2AAQi1AAiBiBQiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCBCBAAC1g");
	this.shape.setTransform(44,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak2E3QiBiBAAi2QAAi1CBiBQCBiBC1AAQC2AACBCBQCBCBAAC1QAAC2iBCBQiBCBi2AAQi1AAiBiBg");
	this.shape_1.setTransform(44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulomc, new cjs.Rectangle(-1,-1,90,90), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Herramienta de manejo de incidentes", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,55), null);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,1,3,true).p("AhsA0IBshrIBtBr");
	this.shape.setTransform(56,-13.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo2();
	this.instance.parent = this;
	this.instance.setTransform(136.6,130.1,1,1,0,0,0,136.6,105.1);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:105.1,alpha:1},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,25,279.5,213.1);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,2,1,3,true).p("AhsA0IBshrIBtBr");
	this.shape.setTransform(167.7,-10.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(1));

	// Capa 1
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(131.6,122.3,1,1,0,0,0,131.6,84.8);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:84.8,alpha:1},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,37.5,263.2,169.7);


(lib.paso5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("AgZEYQgNAAgIgJQgGgHgBgJQgRgDgRgGQgYALgbAAQgyAAgkgkQgjgjAAgzQgBgcAMgZIgHgbQgIgCgGgGQgKgIAAgNIAAgzQAAgNAKgIQAFgFAJgDIAHgbQgMgaABgbQAAgzAjgkQAkgkAyAAQAcABAXAKQAPgFATgEQABgIAGgHQAIgJANAAIA0AAQALAAAKAJQAFAHACAIQASAEAPAFQAYgKAagBQAzAAAkAkQAkAkAAAzQAAAagNAbIAHAbQAKADAGAFQAJAIAAANIAAAzQAAAMgJAJQgGAGgKACQgDARgEAKQANAaAAAbQAAAzgkAjQgkAkgzAAQgaAAgYgLQgRAGgQADQgCAJgFAHQgJAJgMAAgAgbCRQgEADAAAFIgGBiQAAAFADADQAEAEAFAAIA0AAQAEAAAEgEQADgDAAgFIgGhiQgBgFgCgDQgEgEgFAAIgoAAQgEAAgDAEgAC7C2QghAigrAVQAOADANAAQAsAAAfgeQAfggAAgrQAAgNgFgRQgTAsghAhgAjyCHQAAArAeAgQAfAeArAAQANAAAPgDQgqgVgigiQghghgUgsQgDAPAAAPgAB3B3QgeAegoAMIAGBNQBEgQAygxQAygyAPhEIhNgGQgMAogeAegAjtA3QAPBEAzAyQAxAxBFAQIAEhNQgogMgdgeQgegegMgogAAUB9QAKgBAHAGQAIAGADAIQAigMAZgZQAagaALgiQgIgDgGgHQgFgHAAgKIAAgoQAAgIAFgIQAGgHAIgEQgLghgagaQgZgagigLQgDAJgIAEQgHAGgKAAIgoAAQgIAAgIgGQgHgEgDgJQgjALgZAaQgaAagLAhQAIAEAGAHQAFAHABAJIAAAoQgBAKgFAHQgGAHgIADQALAiAaAaQAZAaAjALQADgIAIgGQAHgGAIABgAD7glIhiAGQgEAAgEAEQgDADAAAEIAAAoQAAAFADAEQADADAFAAIBiAGQAFAAADgDQAEgEAAgFIAAgzQAAgFgEgEQgDgDgEAAIgBAAgAkCgiQgEAEAAAFIAAAzQAAAFAEAEQADADAGAAIBhgGQAFAAADgDQADgEAAgFIAAgoQAAgEgDgDQgDgEgFAAIhhgGIgBAAQgFAAgDADgAAxigQApAMAdAdQAeAfAMAnIBNgEQgPhFgygxQgygzhEgPgAirirQgzAxgQBFIBOAEQANgoAdgdQAdgeAogMIgEhNQhFAPgxAzgABvjsQArAVAhAhQAhAjATArQAFgRAAgNQAAgrgfggQgfgegsAAQgPgBgMAEgAjUjRQgeAgAAArQAAAOADAQQAUgsAhgiQAighAqgVQgMgEgQABQgrAAgfAegAgikCQgDADAAAGIAGBhQAAAFAEADQADADAEAAIAoAAQALAAABgLIAGhhQAAgFgDgEQgEgEgEAAIg0AAQgFAAgEAEg");
	this.shape.setTransform(44.2,44.9,0.926,0.926);

	this.instance = new lib.circulomc();
	this.instance.parent = this;
	this.instance.setTransform(44,44,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso5, new cjs.Rectangle(-1,-1,90,90), null);


(lib.paso4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("AgZAiQgDAAgDgDQgCgCAAgEIAAgxQAAgEACgDQADgCADAAIAzAAQADAAADACQACADAAAEIAAAxQAAAEgCACQgDADgDAAgAgQARIAhAAIAAghIghAAg");
	this.shape.setTransform(31.9,60.7,0.781,0.781);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E51C45").s().p("AgZAiQgIAAAAgJIAAgxQAAgJAIAAIAzAAQAIAAAAAJIAAAxQAAAJgIAAgAgQARIAhAAIAAghIghAAg");
	this.shape_1.setTransform(31.9,48.7,0.781,0.781);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E51C45").s().p("AgZAiQgIAAAAgIIAAgzQAAgDACgCQADgDADAAIAzAAQADAAADADQACACAAADIAAAzQAAAIgIAAgAgQARIAhAAIAAghIghAAg");
	this.shape_2.setTransform(31.9,36.8,0.781,0.781);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E51C45").s().p("AhIAIQgIABAAgJQAAgIAIABICQAAQAJgBAAAIQAAADgCADQgDACgEAAg");
	this.shape_3.setTransform(42.9,60.7,0.781,0.781);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E51C45").s().p("AhUAIQgEAAgCgCQgDgDAAgDQAAgCADgDQACgCAEAAICpAAQAJgBAAAIQAAADgDADQgCACgEAAg");
	this.shape_4.setTransform(36.6,54.7,0.781,0.781);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E51C45").s().p("AhIAJQgIAAAAgJQAAgIAIAAICQAAQAEAAADADQACACAAADQAAADgCADQgDADgEAAg");
	this.shape_5.setTransform(42.9,48.7,0.781,0.781);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E51C45").s().p("AhqAJQgDgBgDgCQgCgCAAgEQAAgIAIAAIDVAAQAIAAAAAIQAAAIgIABg");
	this.shape_6.setTransform(38.2,42.8,0.781,0.781);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E51C45").s().p("AhIAJQgIgBAAgIQAAgIAIAAICQAAQAEABADACQACACAAADQAAAEgCACQgDACgEABg");
	this.shape_7.setTransform(42.9,36.8,0.781,0.781);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E51C45").s().p("Ag/AIQgEAAgCgCQgDgCAAgEQAAgHAJAAIB/AAQAJAAAAAHQAAAEgDACQgCACgEAAg");
	this.shape_8.setTransform(34.9,30.8,0.781,0.781);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E51C45").s().p("AgHEPIAAgeQgQgIgLgmQgIgcAAgQIAAlWQAAgSANgMIAAgCIAAghQAAgJAHgHQAHgHAJAAIANAAQAJAAAHAHQAHAHAAAJIAAAhQANAOAAASIAAFWQAAAQgIAcQgLAmgPAIIAAAeQAAAEgDACQgCADgEAAQgHAAAAgJgAgMDQQAIATAEAAQAFAAAIgTQAHgTAEgUIgvAAQAEAUAHATgAgZCYIAzAAIAAjaIgzAAgAgSjRQgHAIAAAKIAABsIAzAAIAAhsQAAgLgHgHQgIgJgLAAQgJAAgJAJgAANjoIAAgYQAAgGgGAAIgNAAQgGAAAAAGIAAAYQAGgCAGAAQAHAAAGACg");
	this.shape_9.setTransform(61.9,46.5,0.781,0.781);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E51C45").s().p("AjIEYQgIAAAAgJIAAoeQAAgIAIAAIEoAAIACAAIABABIACABIBqBqIACACIAAACIAAACIAAG0QAAAEgCACQgCADgEAAgAi/EHIF/AAIAAmjIhhAAQgIAAAAgJIAAhhIkWAAgAC0itIhMhNIAABNIBMAAg");
	this.shape_10.setTransform(39.1,46.5,0.781,0.781);

	this.instance = new lib.circulomc();
	this.instance.parent = this;
	this.instance.setTransform(44,44,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso4, new cjs.Rectangle(-1,-1,90,90), null);


(lib.paso3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("Aj9CkQgFAAgCgFQgCgEACgFIAYgoQgVgIgLgRQgLgQAAgXQAAgYANgWQANgYAVgOQgLgPAAgTQAAgWAPgPQAQgPAXAAQAXAAAPAPQAPAPAAAWQAAATgKAPQAgAWAKAkIAQAAIgBgNQAAgXANgXQANgXAVgNQgKgPAAgUQAAgXAPgOQAPgPAWgBQAXABAPAPQAPAOAAAXQAAASgKAQQAVAOANAXQANAXAAAXIgBANIAQAAQAKgkAggWQgKgPAAgTQAAgWAPgPQAPgPAXAAQAXAAAPAPQAPAPAAAWQAAATgKAPQAVAOANAYQANAWAAAYQAAAtgrATIAYAoQACAEgCAFQgCAFgGAAgADuCTIhBhvIlaAAIhBBvIHcAAgAB6AUIA4AAQAFgBACAFIArBHQAjgMAAglQAAgVgMgUQgLgTgTgKQgNAKgSABQgSgBgNgKQgaAOgLAegAj6AFQgMAUAAAVQAAAkAjANIAqhHQADgFAEABIA5AAQgLgegagOQgOAKgRABQgSgBgOgKQgSAKgLATgAg8ggQgMAUAAATIABANICOAAQACgFAAgIQAAgTgMgUQgLgUgTgLQgOALgRAAQgRAAgOgLQgSALgLAUgACkhhQgKAKAAAPQAAASAKAMQALALAPABQAPgBALgLQAKgMAAgSQAAgPgKgKQgKgKgQAAQgQAAgKAKgAjYhhQgKAKAAAPQAAASALAMQALALAPABQAPgBALgLQAKgMAAgSQAAgPgKgKQgKgKgQAAQgQAAgLAKgAgaiIQgKALAAAPQAAARALAMQALAMAOAAQAPAAALgMQAKgMAAgRQAAgPgKgLQgKgKgQAAQgPAAgLAKg");
	this.shape.setTransform(44,53.2,0.888,0.888);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E51C45").s().p("ACvBnIgggiQgdgBgXgOQgWgMgJgUQgMAHgRAEIgYAkQgCAEgFAAQgEAAgCgEIgZgkQgPgEgNgHQgJAUgWAMQgXAOgdABIghAiQgCACgEAAIgCAAQgFgBgBgGIgHgjQgagIgQgSQgQgRAAgUQAAgdAegUQAdgWApAAQAiAAAaAPQALgVAZgOQAbgNAfAAQAgAAAbANQAZAOAKAVQAcgPAhAAQApAAAdAWQAeAUAAAdQAAAUgQARQgQASgaAIIgHAjQAAAFgGACIgCAAQgDAAgEgCgABjgnIABAFQAAAbgZAUQAGAQAUALQAVAMAaABQACAAADACIAXAYIAGgYQABgFAEgBQAYgHANgOQAOgNAAgPQAAgWgZgQQgYgPgigBQggABgYAOgAjUgmQgZAQAAAWQAAAPAOANQANAOAYAHQAEACABAEIAGAYIAYgYQACgCADAAQAagBAUgMQAUgLAGgQQgZgTAAgcIABgFQgYgOgggBQghABgZAPgAg6hIQgYAQAAAWQAAASARAOQAQANAaAFQADABACAEIASAcIAUgcQABgEADgBQAbgFAQgNQAQgOAAgSQAAgWgYgQQgZgPgiAAQghAAgZAPg");
	this.shape_1.setTransform(43.9,29.9,0.888,0.888);

	this.instance = new lib.circulomc();
	this.instance.parent = this;
	this.instance.setTransform(44,44,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso3, new cjs.Rectangle(-1,-1,90,90), null);


(lib.paso2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("AihEMQgQAAgMgLQgLgMAAgQIAAihIgLAAQgcAAgUgUQgUgTAAgcIAAhHQAAgcAUgUQAUgUAcAAIB9AAQADAAADADQACACAAAEIAAAUQAsAAA0gRQBZgdBQhFIAAAAQAAgSAMgMQANgNARAAIAIAAQASAAAMANQANAMAAASIAAF7QAAARgNANQgMAMgSAAIgIAAQgRAAgNgMQgMgMAAgSQhRhFhYgdQgzgRgtAAIAAAUQAAAIgIAAIgeAAIAAAaIA5BcQACAEgCAEQgCAFgGAAIgxAAIAAAeQAAAQgLAMQgLALgQAAgAi3DlQAAAJAHAHQAGAGAJAAIAHAAQAIAAAHgGQAGgHAAgJIAAihIgyAAgAhSC2Igig4IAAA4IAiAAgADTjyQgHAHAAALIAAF7QAAAKAHAIQAIAHAKAAIAIAAQALAAAHgHQAIgIAAgKIAAl7QAAgLgIgHQgHgIgLAAIgIAAQgKAAgIAIgAATAnQBXAbBRBDIAAjVQiGAiiDAAIAABFIADAAQArAAAzAQgAj3hqQgPAPAAAVIAABHQAAAVAPAPQAPAOAVAAIB0AAIAAisIh0AAQgVAAgPAPgAAThsQgzAQguAAIAAAdQCDAACGgjIAAhoQhRBDhXAbg");
	this.shape.setTransform(42.8,45.9,0.832,0.832);

	this.instance = new lib.circulomc();
	this.instance.parent = this;
	this.instance.setTransform(44,44,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso2, new cjs.Rectangle(-1,-1,90,90), null);


(lib.paso1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E51C45").ss(2,1,1).p("ADtDMInZACIDrmbg");
	this.shape.setTransform(43.9,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E51C45").s().p("AgNBhIAAgbIAaAAIAAAbgAgHAxIgHiRIAdAAIgHCRg");
	this.shape_1.setTransform(43.5,44.9);

	this.instance = new lib.circulomc();
	this.instance.parent = this;
	this.instance.setTransform(44,44,1,1,0,0,0,44,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paso1, new cjs.Rectangle(-1,-1,90,90), null);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_180 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(180).call(this.frame_180).wait(8));

	// Capa 3
	this.text = new cjs.Text("EMI: Equipo de Manejo de Incidentes.", "italic 15px 'Arial'", "#666666");
	this.text.textAlign = "right";
	this.text.lineHeight = 19;
	this.text.lineWidth = 393;
	this.text.parent = this;
	this.text.setTransform(1098,539.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(180).to({_off:false},0).to({_off:true},1).wait(7));

	// Capa 19
	this.instance = new lib.Símbolo4();
	this.instance.parent = this;
	this.instance.setTransform(924.7,429.8,1,1,0,0,0,136.6,105.1);

	this.text_1 = new cjs.Text("Plan de acción inmediato", "16px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 109;
	this.text_1.parent = this;
	this.text_1.setTransform(846.5,256.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.instance}]},180).wait(8));

	// Capa 13
	this.instance_1 = new lib.paso5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(841.9,207.6,1,1,-90,0,0,44,44);
	this.instance_1.alpha = 0.02;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(168).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(8));

	// Capa 12
	this.instance_2 = new lib.flecha();
	this.instance_2.parent = this;
	this.instance_2.setTransform(743.2,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_2.alpha = 0.02;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({x:759.7,alpha:1},8,cjs.Ease.get(1)).wait(21));

	// Capa 18
	this.instance_3 = new lib.Símbolo3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(644.4,409.5,1,1,0,0,0,131.6,84.8);

	this.text_2 = new cjs.Text("Evaluación EMI", "16px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 109;
	this.text_2.parent = this;
	this.text_2.setTransform(680.3,256.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2},{t:this.instance_3}]},123).wait(65));

	// Capa 11
	this.instance_4 = new lib.paso4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(679.8,207.6,1,1,-90,0,0,44,44);
	this.instance_4.alpha = 0.02;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(111).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(65));

	// Capa 10
	this.instance_5 = new lib.flecha();
	this.instance_5.parent = this;
	this.instance_5.setTransform(582,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_5.alpha = 0.02;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102).to({_off:false},0).to({x:598.5,alpha:1},8,cjs.Ease.get(1)).wait(78));

	// Capa 17
	this.text_3 = new cjs.Text("Se llama a una junta de EMI ", "16px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 109;
	this.text_3.parent = this;
	this.text_3.setTransform(519.1,256.1);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(86).to({_off:false},0).wait(102));

	// Capa 9
	this.instance_6 = new lib.paso3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(518.6,207.6,1,1,-90,0,0,44,44);
	this.instance_6.alpha = 0.02;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(102));

	// Capa 8
	this.instance_7 = new lib.flecha();
	this.instance_7.parent = this;
	this.instance_7.setTransform(420.9,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_7.alpha = 0.02;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66).to({_off:false},0).to({x:437.4,alpha:1},8,cjs.Ease.get(1)).wait(114));

	// Capa 16
	this.text_4 = new cjs.Text("Se da aviso al coordinador de IMCR", "16px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 109;
	this.text_4.parent = this;
	this.text_4.setTransform(357.2,256.1);
	this.text_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(52).to({_off:false},0).wait(136));

	// Capa 7
	this.instance_8 = new lib.paso2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(357.5,207.6,1,1,-90,0,0,44,44);
	this.instance_8.alpha = 0.02;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(136));

	// Capa 6
	this.instance_9 = new lib.flecha();
	this.instance_9.parent = this;
	this.instance_9.setTransform(259.7,207.8,1,1,0,0,0,35.9,27.9);
	this.instance_9.alpha = 0.02;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(32).to({_off:false},0).to({x:276.2,alpha:1},8,cjs.Ease.get(1)).wait(148));

	// Capa 15
	this.text_5 = new cjs.Text("Recopilar la información", "16px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 109;
	this.text_5.parent = this;
	this.text_5.setTransform(194.8,256.1);
	this.text_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(21).to({_off:false},0).wait(167));

	// Capa 5
	this.instance_10 = new lib.paso1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(196.3,207.6,1,1,-90,0,0,44,44);
	this.instance_10.alpha = 0.02;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({rotation:0,alpha:1},12,cjs.Ease.get(1)).wait(168));

	// Capa 4
	this.text_6 = new cjs.Text("Esta herramienta provee una guía de los pasos a seguir para hacer frente a un incidente.\n\nObserva los pasos generales para manejar un incidente.", "18px 'Arial'");
	this.text_6.lineHeight = 22;
	this.text_6.lineWidth = 753;
	this.text_6.parent = this;
	this.text_6.setTransform(36.7,26.7);

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.7,24.7,757,98.3);


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
p.nominalBounds = new cjs.Rectangle(0,-58,1200,55);


// stage content:
(lib.AC_IMCR_OV_17 = function(mode,startPosition,loop) {
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
	this.instance_1.setTransform(602,303.8,1,1,0,0,0,524,241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,243.3);
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