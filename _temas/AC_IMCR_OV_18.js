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


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAIQgDgBgCgBQgDgDAAgDQAAgCADgCQACgDADAAIAzAAQAIAAAAAHQAAAHgIABg");
	this.shape.setTransform(75.9,20.9,1.511,1.511);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAWIghggQgCgCAAgEQAAgDACgCQADgCADAAQADAAACACIAhAgQAFAGgFAFQgCACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(74.5,38.2,1.511,1.511);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAXQgCgDAAgDQAAgDACgDIAgggQAGgFAFAFQACACAAADQAAADgCADIghAhQgCACgDAAQgDAAgCgCg");
	this.shape_2.setTransform(71.4,3.7,1.511,1.511);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAIQgIgBAAgHQAAgHAIAAIAzAAQADAAADADQACACAAACQAAADgCADQgDABgDABg");
	this.shape_3.setTransform(5.1,20.9,1.511,1.511);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAWQgFgFAFgGIAgggQADgCADAAQADAAACACQAFAFgFAGIghAgQgCACgDAAQgDAAgCgCg");
	this.shape_4.setTransform(6.5,38.2,1.511,1.511);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAXIggghQgCgDAAgDQAAgDACgCQAFgFAFAFIAhAgQACADAAADQAAADgCADQgCACgDAAQgEAAgCgCg");
	this.shape_5.setTransform(9.7,3.7,1.511,1.511);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(0,0,81,41.9), null);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3FDQgTAAgOgNQgOgNgEgVIg7AAQgKABAAgKQAAgEADgDQADgCAEgBIAKAAQAGgJAAgIQAAgKgGgIIgKAAQgEAAgDgCQgDgDAAgFQAAgEADgDQADgDAEAAIAKAAQAGgHAAgKQAAgJgGgJIgKAAQgEAAgDgDQgDgDAAgDQAAgKAKAAQgHgUgYg2QgZg6gHgVQgQguAAgiQAAhiBIhGQBIhFBkAAQBlAABIBFQBIBGAABiQAAAigPAsQgKAagXAzQgaA9gGARIACAAQAJAAAAAKQAAAJgJAAIgLAAQgGAJAAAJQAAAKAGAHIALAAQAJAAAAAKQAAAFgDADQgDACgDAAIgLAAQgGAIAAAKQAAAJAGAIIALAAQAJAAAAAKQAAAKgJgBIg9AAQgDAVgOANQgOANgTAAgAhKEoQAJAHAKAAIBvAAQALAAAJgHQAIgJADgLIitAAQADALAJAJgACGEBQgEgJAAgIQAAgIAEgKIkLAAQADAIAAAKQAAAIgDAJIELAAIAAAAgACGDKQgEgKAAgHQAAgKAEgIIkLAAQADAIAAAKQAAAKgDAHIELAAIAAAAgAA4B0QAJAPABARIBPAAQAJgcAag6QAXgzAIgXQAOgqAAgfQAAhZhChAQhChAhdAAQhcAAhCBAQhCBAAABZQAAAgAPAqQAJAZAXA0QAZA8AHAWIBXAAQABgRAJgPIADgEIACAAQAGgIAJgGIAAiPIACgFIAagbIAEgBIAAAPIgTAVIAACQQAAAFgEAAQgGAEgFAFIgCAAIgFAGQgIAMgBAOIARAAQACgSAQgHQAPgIAOAIQAPAHADASIARAAQgBgOgIgMQgDgFgFgEIgIgGQgCAAAAgFIAAiQIgVgVIAAgPIADABIAcAbIACAFIAACPQALAIAJAKIgDAAIABAAgAAXCUQgCgKgIgFQgFgCgFAAQgDAAgGACQgJAFgCAKIAoAAIAAAAg");
	this.shape.setTransform(24.5,32.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,49,64.6), null);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygxBFgBQBGABAyAxQAyAygBBFQABBGgyAyQgyAyhGgBQhFABgygygAhJgrQgKATAAAUQAAAVALATQALATASAMQAFACAAAEIAABKQATAFATAAQAUAAAUgFIAAhKQAAgEADgCQATgMALgTQALgTAAgVQAAgUgKgTQgKgSgQgLIAABSQAAAEgEADQgUANgYAAQgWAAgVgNQgEgDAAgEIAAhSQgQAMgKARgAArheQAbAMAPAZQAPAYAAAdQAAAYgLAXQgMAVgUAOIAAA/QAqgQAagmQAbgoAAgvQAAg/gsgsQgtgtg/AAQg+AAgtAtQgtAsAAA/QAAAvAbAoQAbAmArAQIAAg/QgVgOgMgVQgLgXgBgYQAAgdAQgYQAQgZAagMQAFgCADACQAFADAAAEIAABcQAdAQAfgQIAAhcQAAgEAEgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAEABg");
	this.shape.setTransform(22.5,22.5,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0,45,45), null);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUEYQgJAAgGgGQgHgHABgJIAAgdQgQgDgTgHIgPAZQgFAIgIADQgJACgIgFIgjgUQgJgFgCgIQgCgJAFgIIAOgZQgNgMgMgOIgaAPQgHAEgKgCQgJgDgEgHIgVgjQgEgIACgKQADgJAHgEIAagOQgFgPgFgUIgdAAQgJgBgHgGQgGgHAAgJIAAgoQAAgJAGgGQAHgHAJABIAdAAQAEgUAGgPIgagPQgHgFgDgJQgCgJAEgHIAVgjQAEgJAJgCQAJgCAIAFIAaAOQAOgRALgIIgOgaQgFgIACgJQACgIAJgGIAjgUQAIgEAJACQAIAEAFAGIAPAaQAQgHATgCIAAgeQgBgJAHgGQAGgHAJAAIApAAQAIAAAHAHQAGAGAAAJIAAAeQASACARAHIAPgaQAFgHAJgDQAIgCAIAEIAkAUQAHAGADAIQACAJgEAIIgPAaQAOALALAOIAagOQAJgFAIACQAJACAEAJIAUAjQAFAHgCAKQgDAIgHAFIgaAPQAHAUADAPIAdAAQAJgBAHAHQAGAGAAAJIAAAoQAAAJgGAHQgHAGgJABIgdAAQgDAPgHAUIAaAOQAIAFACAIQACAJgFAJIgUAjQgEAHgJADQgJACgIgEIgagPQgJALgQAPIAPAZQAFAIgDAJQgDAIgHAFIgkAUQgIAFgIgCQgJgDgFgIIgPgZQgUAHgPADIAAAdQAAAJgGAHQgHAGgIAAgAhNDJQAVAIAZAEQAGABABAHIAAAlQAAAFAEAAIApAAQAEAAAAgFIAAglQAAgHAHgBQAZgEAVgIQAHgDADAGIATAgQADAEAEgCIAjgVQAFgCgDgEIgSghQgFgFAHgFQAQgOARgUQAFgFAGAEIAgASIADAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABAAIAUgjIABgFIgDgDIgggSQgGgDADgHQAIgVAEgYQABgIAHAAIAlAAQAFAAAAgFIAAgoQAAgEgFgBIglAAQgHAAgBgGQgEgZgIgVQgDgHAGgEIAggSIADgDIgBgEIgUgjQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABIggATQgGADgFgGQgPgTgSgOQgCgCgBgDQgBgEACgCIASgfIAAgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAgBIgjgUQgEgDgDAFIgTAgQgDAGgHgDQgWgIgYgEQgHgBAAgHIAAglQAAgFgEAAIgpAAQgEAAAAAFIAAAlQgBAHgGABQgYAEgWAIQgHADgEgGIgRggIgEgCIgEAAIgjAUQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIAAAFIATAfQADAGgGAFQgQAMgRAVQgEAGgHgDIgfgTQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBABIgUAjQgCAEAEADIAgASQAGAEgDAHQgIAVgEAZQgBAGgHAAIglAAQgFABAAAEIAAAoQAAAFAFAAIAlAAQAHAAABAIQAEAYAIAVQADAHgGADIggASQgEADACAFIAUAjIADACIAFAAIAfgSQAGgEAFAFQARAVAQANQAGAFgDAFIgTAhIAAADIACADIAjAVQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEgCIARggQADgEAFAAg");
	this.shape.setTransform(37.1,37.1,1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,74.3,74.2), null);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdFJQgJAAgGgGQgHgGAAgIIgCgNQgCgkAAgRQAAgfAHgXIAAAAQALgrAbgqQAWghApgtQBQhcgGg3QgEgagXgSQghgXgtAAQggAAghALQgiAKgaASQgEADgIAAQgPAAgHgOIAAgBIglhXQgGgOAQgKQBPg0CGgEQA9ACA3AVQA3AVAjAkQA6A7gKBVQgHA3ghA1QgYAoguAyQgnAqgRAcQgaAogCAkIAAABIABA4IAAALQACAIgHAHQgIAGgJAAgAAwi2QAfAVAGAlQAHBAhYBjQgmArgVAgQgZAogMAoQgGAVAAAcQAAARADAiIAAAAIABANIABACIAAAAIB1AAIABgBIAAAAIgBgKIAAgBIAAg5QACgqAbgsQATgeAogrQAugwAXglQAfgzAGg0QAJhKg0g1QggghgygUQgzgTg5gBQh/ADhKAxIgBABIgBAAIAlBWIACACQAdgUAkgKQAmgMAiAAQA1AAAlAag");
	this.shape.setTransform(24.1,32.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,48.1,65.8), null);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7A3QgZgXAAggQAAgfAZgWIAAAAQAZgXAiAAQAjAAAYAXQAaAXAAAeQAAAggaAXQgYAWgjAAQgiAAgZgWgAgsgmQgSAQAAAWQAAAXASARQASARAaAAQAaAAATgRQASgRAAgXQAAgWgSgQQgTgSgaAAQgaAAgSASg");
	this.shape.setTransform(8.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,17,15.4), null);


(lib.flecha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(153,153,153,0.839)","rgba(153,153,153,0.231)"],[0,1],19.6,0,-19.5,0).s().p("AAHCYQgKgBgHgJIgDgEQgHgJABgLQACgLAIgHIAPgMIiuAAQgLAAgIgIQgIgIAAgLIAAh5QAAgLAIgIQAIgIALAAICuAAIgPgMQgIgHgCgLQgBgMAIgIIACgFQAHgJAKgBQAMgBAJAHICWB3QAEACAEAEQAKAIAAANQAAANgKAIQgDAEgFACIiXB4QgGAGgJAAIgFgBg");
	this.shape.setTransform(35.9,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flecha, new cjs.Rectangle(16.3,12.8,39.2,30.6), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Herramienta de lecciones aprendidas", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E51C45").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,58.6), null);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(2));

	// Capa 1
	this.instance = new lib.Símbolo12();
	this.instance.parent = this;
	this.instance.setTransform(40.5,20.9,1,1,0,0,0,40.5,20.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).wait(4));

	// Capa 2
	this.instance_1 = new lib.Símbolo11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.8,32.3,0.226,0.226,0,0,0,24.6,32.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:24.4,scaleX:1,scaleY:1,x:40.7},17,cjs.Ease.get(1)).to({_off:true},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.2,25,11,14.6);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Capa 2
	this.instance = new lib.Símbolo8();
	this.instance.parent = this;
	this.instance.setTransform(37.1,37.1,0.606,0.606,180,0,0,37.1,37.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360},19,cjs.Ease.get(1)).wait(1));

	// Capa 1
	this.instance_1 = new lib.Símbolo9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.2,37.1,0.333,0.333,-90,0,0,22.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:22.4,regY:22.4,scaleX:1,scaleY:1,rotation:0,x:37.1,y:37},17,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.7,29.6,15,15);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Capa 2
	this.instance = new lib.Símbolo5();
	this.instance.parent = this;
	this.instance.setTransform(21.6,77.8,0.188,0.188,0,0,0,8.5,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:8.4,scaleX:1,scaleY:1,x:21.5},12,cjs.Ease.get(1)).wait(17));

	// Capa 1
	this.instance_1 = new lib.Símbolo6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.7,61.9,0.439,0.118,0,0,0,24.1,32.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({regY:32.9,scaleX:1,scaleY:1,x:24.1,y:32.9},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,76.4,3.2,2.9);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo10();
	this.instance.parent = this;
	this.instance.setTransform(126.8,65.1,1,1,0,0,0,40.5,32.3);

	this.text = new cjs.Text("Debemos incorporar el conocimiento y experiencias a las     operaciones cotidianas.", "18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 215;
	this.text.parent = this;
	this.text.setTransform(123.9,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCCC").s().p("AgOG1QgOhLgQg3QgNgrgEgHQgMgcgVgLQgVgLggACQgmAFgRABQgnABgPgOQgJgHgCgRQgBgIAAgfQAAgFgEgEIgHgJQgDgFADgKIADgKQgTgFgGgOIAFgZQADgJgDgDQgEgEgNgDQgRgEgHgLQgGgIABgFQAAgDAFgHIAHgLIAPgXQAVgjAJgKQALgMACgUQAAgFgDgQQgDgSAAgGQABgPALghQADgJADgRQAEgSADgIQAQg3AmgpQAogrA2gTQAxgPBCgDIAeAAQBBAEA1AQQBPAcAsA0QAhAlAPAuQAYBMgRBYQgPBRgtBIIgbAsQgOAaABAVQADAiALAYQAGAOATAcQAMAQASATQiUBiirAzg");
	this.shape.setTransform(131.5,112.6,2.573,2.573,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AxLN2QiWAAAAiWIAA2/QAAiWCWAAMAiXAAAQCWAAAACWIAAW/QAACWiWAAg");
	this.shape_1.setTransform(125,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,250,405), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo7();
	this.instance.parent = this;
	this.instance.setTransform(127.4,62,1,1,0,0,0,37.1,37.1);

	this.text = new cjs.Text("Los incidentes que se han presentado en el negocio son una gran oportunidad para aprender.", "18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 215;
	this.text.parent = this;
	this.text.setTransform(127.1,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCCC").s().p("AgOG1QgOhLgQg3QgNgrgEgHQgMgcgVgLQgVgLggACQgmAFgRABQgnABgPgOQgJgHgCgRQgBgIAAgfQAAgFgEgEIgHgJQgDgFADgKIADgKQgTgFgGgOIAFgZQADgJgDgDQgEgEgNgDQgRgEgHgLQgGgIABgFQAAgDAFgHIAHgLIAPgXQAVgjAJgKQALgMACgUQAAgFgDgQQgDgSAAgGQABgPALghQADgJADgRQAEgSADgIQAQg3AmgpQAogrA2gTQAxgPBCgDIAeAAQBBAEA1AQQBPAcAsA0QAhAlAPAuQAYBMgRBYQgPBRgtBIIgbAsQgOAaABAVQADAiALAYQAGAOATAcQAMAQASATQiUBiirAzg");
	this.shape.setTransform(132.8,112.6,2.573,2.573,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AxLN2QiWAAAAiWIAA2/QAAiWCWAAMAiXAAAQCWAAAACWIAAW/QAACWiWAAg");
	this.shape_1.setTransform(125,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,250,405), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo4();
	this.instance.parent = this;
	this.instance.setTransform(140.1,66.6,1,1,0,0,0,25.2,44.7);

	this.text = new cjs.Text("Una parte crítica de cualquier incidente es la evaluación para la mejora continua. Evitar que vuelva a suceder", "18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 215;
	this.text.parent = this;
	this.text.setTransform(127.2,256.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CCCC").s().p("AgOG1QgOhLgQg3QgNgrgEgHQgMgcgVgLQgVgLggACQgmAFgRABQgnABgPgOQgJgHgCgRQgBgIAAgfQAAgFgEgEIgHgJQgDgFADgKIADgKQgTgFgGgOIAFgZQADgJgDgDQgEgEgNgDQgRgEgHgLQgGgIABgFQAAgDAFgHIAHgLIAPgXQAVgjAJgKQALgMACgUQAAgFgDgQQgDgSAAgGQABgPALghQADgJADgRQAEgSADgIQAQg3AmgpQAogrA2gTQAxgPBCgDIAeAAQBBAEA1AQQBPAcAsA0QAhAlAPAuQAYBMgRBYQgPBRgtBIIgbAsQgOAaABAVQADAiALAYQAGAOATAcQAMAQASATQiUBiirAzg");
	this.shape.setTransform(144.2,112.6,2.573,2.573,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AxLN2QiWAAAAiWIAA2/QAAiWCWAAMAiXAAAQCWAAAACWIAAW/QAACWiWAAg");
	this.shape_1.setTransform(125,316.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,250,405), null);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(105).call(this.frame_105).wait(2));

	// Capa 8
	this.text = new cjs.Text("A través de esta herramienta buscamos extraer y compartir las lecciones aprendidas cuando ocurre un incidente, para evitar que vuelva a ocurrir.", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 881;
	this.text.parent = this;
	this.text.setTransform(8.4,-26.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(107));

	// Capa 7
	this.instance = new lib.Símbolo3();
	this.instance.parent = this;
	this.instance.setTransform(779.6,270.3,1,1,0,0,0,125,202.5);
	this.instance.alpha = 0.02;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({x:808.6,alpha:1},11,cjs.Ease.get(1)).wait(2));

	// Capa 11
	this.instance_1 = new lib.flecha();
	this.instance_1.parent = this;
	this.instance_1.setTransform(642.9,177.5,1.458,1.458,0,0,0,35.9,28.1);
	this.instance_1.alpha = 0.02;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).to({x:671.9,alpha:1},11,cjs.Ease.get(1)).wait(13));

	// Capa 6
	this.instance_2 = new lib.Símbolo2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(488,270.3,1,1,0,0,0,125,202.5);
	this.instance_2.alpha = 0.02;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({x:517,alpha:1},11,cjs.Ease.get(1)).wait(44));

	// Capa 10
	this.instance_3 = new lib.flecha();
	this.instance_3.parent = this;
	this.instance_3.setTransform(352.9,177.5,1.458,1.458,0,0,0,35.9,28.1);
	this.instance_3.alpha = 0.02;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41).to({_off:false},0).to({x:381.9,alpha:1},11,cjs.Ease.get(1)).wait(55));

	// Capa 4
	this.instance_4 = new lib.Símbolo1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(193,270.3,1,1,0,0,0,125,202.5);
	this.instance_4.alpha = 0.02;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({x:222,alpha:1},11,cjs.Ease.get(1)).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,-28.3,885.4,75);


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
(lib.AC_IMCR_OV_18 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,200);
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