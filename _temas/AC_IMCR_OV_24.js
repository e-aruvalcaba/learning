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


(lib.smile_gr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AhBCNIgPgIIgBgBIhkhkQgKgKAAgQQAAgOAKgLIABAAQAKgLAQABQAPAAAKAKIBKBJIC4i5QALgKAPgBQAQABAKAKQALALAAAPQAAAQgLAKIjTDTQgFAFgGADQgGADgIgBIgCABQgEAAgEgCg");
	this.shape.setTransform(24.3,20.5,1.169,1.169);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.smile_gr, new cjs.Rectangle(1.8,3.8,44.9,33.4), null);


(lib.siluetaejercicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A282A").s().p("Ag9C6IAAgRIAAAAIAAghIgEAAIgGAAQg2AAgGgZIAAgHIgBgLIABgnIAAAAIgDgCQgOgFgIgGQgKgFgCgKQgCgIAGgJQAfgvACgOQAKhQA4ghQAjgUAqAAIAKAAQArAAAkASQBEAiABBTIAAABQAAAzgNAhQgIAUgTAWQgLAOgDAGIgGAQQgIAaACAeIAAARgABXCpQgDgrAPgiQAEgJAOgQQARgWAHgRQAMgdAAgwQgBhIg5geQgggRgpAAIgKAAQglAAgfASQgyAdgIBGQAAAOgkA3IAAABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAQANAIAQAGQAHADgBAGIgCAXQgBAYACAMQABAEALADQAMAEATAAIAGAAQALAAAGAFQAEAEAAAHIAAAiICDAAIAAAAg");
	this.shape.setTransform(16.9,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.siluetaejercicio, new cjs.Rectangle(0,0,33.9,37.3), null);


(lib.Palabra_mc10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 10", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 9", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 8", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 7", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 6", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 4", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 3", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 2", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.Palabra_mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 1", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.engraneejercgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A282A").s().p("AgPBgQgGgCgBgEIgEgZIgUAPQgFADgFgDQgMgJgLgOQgDgFADgFIAQgUIgZgEQgHgBgBgGIgBgPIABgQQABgFAHgCIAZgDIgQgUQgDgFADgGQALgMAMgKQAFgEAFAEIAUAPIAEgZQABgGAGgBQAPgDAQADQAFABABAGIAFAZIAUgPQAEgEAGAEQANAKAJAMQADAGgDAFIgPAUIAZADQAHACAAAFIACAQIgCAPQgBAGgGABIgZAEIAPAUQADAFgDAFQgJANgNAKQgGADgEgDIgUgPIgFAZQAAAEgGACIgQACIgPgCgAgXAvIAHACQAFACABAFIAEAZQAGABAHgBIAEgZQAAgEAGgDIAGgCQAFgCAEADIAUAOIAKgKIgPgUQgDgDADgGIACgGQACgFAFgBIAYgDIABgHIgBgHIgYgDQgFgCgCgEIgCgHQgDgFADgEIAPgUIgKgJIgUAOQgEACgFgBIgGgEQgGgCAAgEIgEgYQgHgBgGABIgEAYQgBAFgFABIgHAEQgEABgEgCIgUgOIgKAJIAPAUQACAEgCAFIgDAHQgBAFgGABIgXADIAAAOIAXADQAGABABAFIADAGQACAGgCADIgPAUIAKAKIAUgOQACgCADAAIADABg");
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.engraneejercgr, new cjs.Rectangle(0,0,19.5,19.5), null);


(lib.cuadrotabla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F8F8").s("#CCCCCC").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrotabla, new cjs.Rectangle(-1,-1,112,50.4), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Ejercicio práctico", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E71D46").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,58.6), null);


(lib.Palabra_mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.text = new cjs.Text("Palabra 5", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(55.5,16.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E1E1").s().rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s("#FF6600").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape_1.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,48.4);


(lib.smile_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOFeIAAq7IKdAAIAAK7g");
	mask.setTransform(24.7,19.1);

	// Capa 1
	this.instance = new lib.smile_gr();
	this.instance.parent = this;
	this.instance.setTransform(20.9,74.9,1,1,0,0,0,20.9,20.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:20.9},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Retros = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_82 = function() {
		this.stop();
	}
	this.frame_130 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(82).call(this.frame_82).wait(48).call(this.frame_130).wait(1));

	// Capa 1
	this.instance = new lib.smile_mc();
	this.instance.parent = this;
	this.instance.setTransform(39.2,38.5,1,1,0,0,0,20.9,20.9);

	this.text = new cjs.Text("Correcto", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 200;
	this.text.parent = this;
	this.text.setTransform(191.6,23.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8E898").s().p("A4gFoQiWAAAAiWIAAmjQAAiWCWAAMAxBAAAQCWAAAACWIAAGjQAACWiWAAg");
	this.shape.setTransform(171.9,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4444").s().p("ACNC9QgVAAgOgOIhqhqIhpBqQgOAOgUAAQgUABgPgPQgOgOAAgVQAAgUAOgOIBqhqIhqhpQgOgOAAgUQgBgUAPgPQAOgOAVAAQAUAAAOAOIBpBqIBqhqQAOgOAVAAQAUAAAOAOQAPAPgBATQAAAVgOAOIhqBpIBqBqQAOAOAAAVQAAAUgOAOQgOAOgTAAIgBAAg");
	this.shape_1.setTransform(38.3,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDB4B4").s().p("A4gFoQiWAAAAiWIAAmjQAAiWCWAAMAxBAAAQCWAAAACWIAAGjQAACWiWAAg");
	this.shape_2.setTransform(171.9,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text,p:{x:191.6,y:23.3,text:"Correcto",font:"24px 'Arial'",lineHeight:28.85}},{t:this.instance}]},35).to({state:[{t:this.shape_2},{t:this.text,p:{x:188,y:25.1,text:"Vuelve a intentar",font:"20px 'Arial'",lineHeight:24.35}},{t:this.shape_1}]},48).to({state:[]},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.engraneejercicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Capa 2
	this.instance = new lib.engraneejercgr();
	this.instance.parent = this;
	this.instance.setTransform(10,9.9,2.66,2.66,108,0,0,9.6,9.5);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:9.8,regY:9.8,scaleX:1,scaleY:1,rotation:360,x:9.8,y:9.8,alpha:1},34,cjs.Ease.get(1)).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A282A").s().p("AgVAWQgKgJAAgNQAAgMAKgJQAJgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKgAgJgKQgFAFAAAFQAAAGAFAFQAEAEAFAAQAGAAAFgEQAEgFAAgGQAAgFgEgFQgFgEgGAAQgFAAgEAEg");
	this.shape.setTransform(9.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-22.6,65.4,65.4);


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


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Retros();
	this.instance.parent = this;
	this.instance.setTransform(292.6,438);

	this.instance_1 = new lib.Palabra_mc10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1036.9,395.9,1,1,0,0,0,55,24.2);

	this.instance_2 = new lib.Palabra_mc9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(911.9,395.9,1,1,0,0,0,55,24.2);

	this.instance_3 = new lib.Palabra_mc8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1036.9,333.4,1,1,0,0,0,55,24.2);

	this.instance_4 = new lib.Palabra_mc7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(911.9,333.4,1,1,0,0,0,55,24.2);

	this.instance_5 = new lib.Palabra_mc6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1036.9,270.9,1,1,0,0,0,55,24.2);

	this.instance_6 = new lib.Palabra_mc5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(911.9,270.9,1,1,0,0,0,55,24.2);

	this.instance_7 = new lib.Palabra_mc4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1036.9,208.4,1,1,0,0,0,55,24.2);

	this.instance_8 = new lib.Palabra_mc3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(911.9,208.4,1,1,0,0,0,55,24.2);

	this.instance_9 = new lib.Palabra_mc2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1036.9,145.9,1,1,0,0,0,55,24.2);

	this.instance_10 = new lib.Palabra_mc1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(911.9,145.9,1,1,0,0,0,55,24.2);

	this.text = new cjs.Text("Ejemplos:", "16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(973.4,70.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A2I8oMAsRAAAQCWAAAACWMAAAA0lQAACWiWAAMgsRAAAQiWAAAAiWMAAAg0lQAAiWCWAAg");
	this.shape.setTransform(973.7,276.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2IcpQiWAAAAiWMAAAg0lQAAiWCWAAMAsRAAAQCWAAAACWMAAAA0lQAACWiWAAg");
	this.shape_1.setTransform(973.7,276.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnFFbIAAAAQgGgGAAgJIAAqXQAAgJAGgGQAGgGAIAAQAJAAAHAGQAGAGAAAJIAAJzQAAAGAEAEQAEAFAGAAINKAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAItuAAIAAAAQgIAAgGgGg");
	this.shape_2.setTransform(692.5,88.8,0.425,0.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AFHDPIgBAAIiPgTIgCgCIABgDIAAAAIAkglQAFgEAAgGQAAgHgFgEIixiwQgEgEgGAAQgHAAgEAEIhgBgQgGAGgJAAQgJAAgGgGIAAAAIjZjXIAAAAQgGgGABgJQgBgJAGgGIAAAAQAHgGAJAAQAIAAAHAGIC+C/QAEAFAHAAQAGAAAEgFIBhhhIAAAAQAGgGAJAAQAIAAAHAGIgBAAIDKDKQAFAFAGAAQAGAAAFgFIAlglIAAAAIACgBQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIATCPIAAgBQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgBAAIAAAAg");
	this.shape_3.setTransform(693.7,88.8,0.425,0.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAOIgUAUIgNgNIAUgVIgUgTIAOgOIATAUIAUgTIANANIgUATIAVAUIgOAOg");
	this.shape_4.setTransform(577.6,92.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhCDDQgKAAgHgGQgGgHgBgJIAAiwQAAgiAXgZQARgWAAgbIAAgaIgEgDQgEgFAAgGIAAgcQAAgGAEgFQAEgEAGAAIBZAAQAFAAAFAEIABAAQADAFABAGIAAAcQgBAGgDAFIgBAAIgEADIAAAaQAAAbASAWQAVAZAAAiIAACwQABAJgHAHQgGAGgKAAgAhKCtQAAABABAAQAAABAAABQAAAAAAABQABAAAAABQADACADAAICGAAQADAAACgCIABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgWIiVAAgAhKCHICVAAIAAhqIiVAAgAgjhvQABAhgWAaQgRAVgBAcIAAARICVAAIAAgRQAAgcgRgVQgXgaAAghIAAgZIhGAAgAgqiXIBVAAIAAgcIhVAAg");
	this.shape_5.setTransform(577.3,84.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiC2QgDgEADgDIAAgBIAAAAQAJgOABgNQACgNgFgXQgFgWAAgKIAAgCIgCgCIgDAAIgCACQgJAOAAATQAAAEgDACIgBAAQgEACgCgDIgBAAQgSgWAAgiIAAgCIgCgCIgDAAQAAABAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgBAAQgTAkAVAoQACADgCADQgDADgEgBQgWgGgJgaIgCgCIgCAAIgCABIgBACQgIAjAXAcQAEAFgEAEQgDADgEgDIAAAAQg2grgMgtQgKgoAThGIAAAAQARg6gFgaIABgFIABAAQACgCAEABQAhALAHApQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIACABQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQASgYABgiQABgkgRgcIAAAAQgCgEADgDIAAAAQACgDAEABQApAQAWAmQAVAlgBAuIABACIAAAAIACACQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIACgCIgBAAQADgHACgSQACgRAAgOQAAgEAEgBQAEgBACADQA0A+gIBYQgHBdhIArIgDACIgEgCgAA6AxQACAEgDADIAAABQgIAKgBALQAAAKAEAUQAGAagCAOIAAACIACABIACABIABAAIABgBQAqgrAEhCIAAgBQAFg9gdg1IAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBABQAAAAAAAAIgCACIgBADIAAABQgFApgZASIAAAAQgDACgDgCQgDgCAAgDQAJgsgNgmQgMgpgggWIgCAAIgCABIgCABIAAADQALAigIAkQgJAkgZATQgDACgEgBQgDgCAAgEQAAgjgTgQIgDgBIAAAAIgCABIgBADQABAQgOA1QgPA1ACAhQADAkAbAfIACABIABAAIACAAIACgBIAAgBIAAgCQgFghAUgjIAAAAQACgEAEABQAFACAAADQAAARACAHIABACIADABIADgBIgBAAIABgDQgBgrAmggIABAAQAEgCADACQAEADgDAEIAAAAQgMAdAJAdIACACIgBAAIADAAIACAAIABgCIAAAAQAKgcAbgJIADAAQADAAACACg");
	this.shape_6.setTransform(459.8,84.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAIQgDgBgCgBQgDgDAAgDQAAgCADgCQACgDADAAIAzAAQAIAAAAAHQAAAHgIABg");
	this.shape_7.setTransform(250.1,82.3,0.955,0.955);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALAWIghggQgCgCAAgEQAAgDACgCQADgCADAAQADAAACACIAhAgQAFAGgFAFQgCACgEAAQgDAAgCgCg");
	this.shape_8.setTransform(249.3,93.3,0.955,0.955);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAXQgCgDAAgDQAAgDACgDIAgggQAGgFAFAFQACACAAADQAAADgCADIghAhQgCACgDAAQgDAAgCgCg");
	this.shape_9.setTransform(247.3,71.5,0.955,0.955);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAIQgIgBAAgHQAAgHAIAAIAzAAQADAAADADQACACAAACQAAADgCADQgDABgDABg");
	this.shape_10.setTransform(218,82.3,0.955,0.955);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAWQgFgFAFgGIAgggQADgCADAAQADAAACACQAFAFgFAGIghAgQgCACgDAAQgDAAgCgCg");
	this.shape_11.setTransform(218.9,93.3,0.955,0.955);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AALAXIggghQgCgDAAgDQAAgDACgCQAFgFAFAFIAhAgQACADAAADQAAADgCADQgCACgDAAQgEAAgCgCg");
	this.shape_12.setTransform(220.9,71.5,0.955,0.955);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAhQgDgBgBgDQgCgDABgDQAIgaASgRQAJgIAIgDQADgBADABQADABABADQACAHgHADQgGADgIAGQgNANgHAWQgBAGgGAAg");
	this.shape_13.setTransform(228.3,79.4,0.955,0.955);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiNCbQgDAAgDgDQgCgEABgDIALgkQAFgQAVgHIAAiAQAAguAhghQAhghAtAAQAuAAAhAhQAhAhAAAuIAACAQAVAHAFAQIALAjIAAADQAAAIgHAAgACECMIgJgbQgBgFgHgFQgIgEgIAAIjFAAQgIAAgIAEQgHAFgBAFIgJAbIEHAAgAARhAQAHAHAAAKIAACDIBJAAIAAh+QAAgogcgdQgdgcgoAAQgnAAgdAcQgcAdAAAoIAAB+IBJAAIAAiDQAAgKAHgHQAHgIAJABQAKgBAHAIgAgGg1QgCACAAAEIAACDIARAAIAAiDQAAgEgCgCQgDgDgEgBQgDABgDADg");
	this.shape_14.setTransform(234.1,87.2,0.955,0.955);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(2,1,1).p("ACtCVIlZABICskrg");
	this.shape_15.setTransform(346.2,86.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJBHIAAgUIATAAIAAAUgAgFAkIgFhqIAVAAIgFBqg");
	this.shape_16.setTransform(345.9,89.6);

	this.text_1 = new cjs.Text("Información", "15px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 91;
	this.text_1.parent = this;
	this.text_1.setTransform(117,384);

	this.text_2 = new cjs.Text("Finanzas", "15px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 91;
	this.text_2.parent = this;
	this.text_2.setTransform(117,333.6);

	this.text_3 = new cjs.Text("Personas", "15px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 91;
	this.text_3.parent = this;
	this.text_3.setTransform(117,280.4);

	this.text_4 = new cjs.Text("Infraestructura", "15px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 104;
	this.text_4.parent = this;
	this.text_4.setTransform(118.1,229.1);

	this.text_5 = new cjs.Text("Productos y marcas", "15px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 17;
	this.text_5.lineWidth = 91;
	this.text_5.parent = this;
	this.text_5.setTransform(117,172.1);

	this.instance_11 = new lib.cuadrotabla();
	this.instance_11.parent = this;
	this.instance_11.setTransform(696.6,393,1,1,0,0,0,55,24.2);

	this.instance_12 = new lib.cuadrotabla();
	this.instance_12.parent = this;
	this.instance_12.setTransform(696.6,341,1,1,0,0,0,55,24.2);

	this.instance_13 = new lib.cuadrotabla();
	this.instance_13.parent = this;
	this.instance_13.setTransform(696.6,289,1,1,0,0,0,55,24.2);

	this.instance_14 = new lib.cuadrotabla();
	this.instance_14.parent = this;
	this.instance_14.setTransform(696.6,237,1,1,0,0,0,55,24.2);

	this.instance_15 = new lib.cuadrotabla();
	this.instance_15.parent = this;
	this.instance_15.setTransform(696.6,185,1,1,0,0,0,55,24.2);

	this.instance_16 = new lib.cuadrotabla();
	this.instance_16.parent = this;
	this.instance_16.setTransform(580.6,393,1,1,0,0,0,55,24.2);

	this.instance_17 = new lib.cuadrotabla();
	this.instance_17.parent = this;
	this.instance_17.setTransform(580.6,341,1,1,0,0,0,55,24.2);

	this.instance_18 = new lib.cuadrotabla();
	this.instance_18.parent = this;
	this.instance_18.setTransform(580.6,289,1,1,0,0,0,55,24.2);

	this.instance_19 = new lib.cuadrotabla();
	this.instance_19.parent = this;
	this.instance_19.setTransform(580.6,237,1,1,0,0,0,55,24.2);

	this.instance_20 = new lib.cuadrotabla();
	this.instance_20.parent = this;
	this.instance_20.setTransform(580.6,185,1,1,0,0,0,55,24.2);

	this.instance_21 = new lib.cuadrotabla();
	this.instance_21.parent = this;
	this.instance_21.setTransform(464.6,393,1,1,0,0,0,55,24.2);

	this.instance_22 = new lib.cuadrotabla();
	this.instance_22.parent = this;
	this.instance_22.setTransform(464.6,341,1,1,0,0,0,55,24.2);

	this.instance_23 = new lib.cuadrotabla();
	this.instance_23.parent = this;
	this.instance_23.setTransform(464.6,289,1,1,0,0,0,55,24.2);

	this.instance_24 = new lib.cuadrotabla();
	this.instance_24.parent = this;
	this.instance_24.setTransform(464.6,237,1,1,0,0,0,55,24.2);

	this.instance_25 = new lib.cuadrotabla();
	this.instance_25.parent = this;
	this.instance_25.setTransform(464.6,185,1,1,0,0,0,55,24.2);

	this.instance_26 = new lib.cuadrotabla();
	this.instance_26.parent = this;
	this.instance_26.setTransform(348.6,393,1,1,0,0,0,55,24.2);

	this.instance_27 = new lib.cuadrotabla();
	this.instance_27.parent = this;
	this.instance_27.setTransform(348.6,341,1,1,0,0,0,55,24.2);

	this.instance_28 = new lib.cuadrotabla();
	this.instance_28.parent = this;
	this.instance_28.setTransform(348.6,289,1,1,0,0,0,55,24.2);

	this.instance_29 = new lib.cuadrotabla();
	this.instance_29.parent = this;
	this.instance_29.setTransform(348.6,237,1,1,0,0,0,55,24.2);

	this.instance_30 = new lib.cuadrotabla();
	this.instance_30.parent = this;
	this.instance_30.setTransform(348.6,185,1,1,0,0,0,55,24.2);

	this.instance_31 = new lib.cuadrotabla();
	this.instance_31.parent = this;
	this.instance_31.setTransform(232.6,393,1,1,0,0,0,55,24.2);

	this.instance_32 = new lib.cuadrotabla();
	this.instance_32.parent = this;
	this.instance_32.setTransform(232.6,341,1,1,0,0,0,55,24.2);

	this.instance_33 = new lib.cuadrotabla();
	this.instance_33.parent = this;
	this.instance_33.setTransform(232.6,289,1,1,0,0,0,55,24.2);

	this.instance_34 = new lib.cuadrotabla();
	this.instance_34.parent = this;
	this.instance_34.setTransform(232.6,237,1,1,0,0,0,55,24.2);

	this.instance_35 = new lib.cuadrotabla();
	this.instance_35.parent = this;
	this.instance_35.setTransform(232.6,185,1,1,0,0,0,55,24.2);

	this.instance_36 = new lib.cuadrotabla();
	this.instance_36.parent = this;
	this.instance_36.setTransform(116.6,393,1,1,0,0,0,55,24.2);
	this.instance_36.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_36.cache(-3,-3,116,54);

	this.instance_37 = new lib.cuadrotabla();
	this.instance_37.parent = this;
	this.instance_37.setTransform(116.6,341,1,1,0,0,0,55,24.2);
	this.instance_37.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_37.cache(-3,-3,116,54);

	this.instance_38 = new lib.cuadrotabla();
	this.instance_38.parent = this;
	this.instance_38.setTransform(116.6,289,1,1,0,0,0,55,24.2);
	this.instance_38.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_38.cache(-3,-3,116,54);

	this.instance_39 = new lib.cuadrotabla();
	this.instance_39.parent = this;
	this.instance_39.setTransform(116.6,237,1,1,0,0,0,55,24.2);
	this.instance_39.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_39.cache(-3,-3,116,54);

	this.instance_40 = new lib.cuadrotabla();
	this.instance_40.parent = this;
	this.instance_40.setTransform(116.6,185,1,1,0,0,0,55,24.2);
	this.instance_40.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_40.cache(-3,-3,116,54);

	this.text_6 = new cjs.Text("Crisis", "16px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 20;
	this.text_6.lineWidth = 91;
	this.text_6.parent = this;
	this.text_6.setTransform(693.3,122.7);

	this.text_7 = new cjs.Text("Incidente elevado", "16px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 18;
	this.text_7.lineWidth = 91;
	this.text_7.parent = this;
	this.text_7.setTransform(578.3,113.7);

	this.text_8 = new cjs.Text("Incidente", "16px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 91;
	this.text_8.parent = this;
	this.text_8.setTransform(464.3,122.7);

	this.text_9 = new cjs.Text("Advertencia", "16px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 91;
	this.text_9.parent = this;
	this.text_9.setTransform(346.3,122.7);

	this.text_10 = new cjs.Text("Alerta", "16px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 20;
	this.text_10.lineWidth = 91;
	this.text_10.parent = this;
	this.text_10.setTransform(232.3,122.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_17.setTransform(694.1,130.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFC000").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_18.setTransform(578.6,130.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_19.setTransform(463.1,130.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#AFDA33").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_20.setTransform(347.6,130.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#49C4E8").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_21.setTransform(232.1,130.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(60.6,64.8,1070.9,396.3), null);


(lib.simboloejercicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Capa 2
	this.instance = new lib.engraneejercicio();
	this.instance.parent = this;
	this.instance.setTransform(18.6,15.5,1,1,0,0,0,9.8,9.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(6));

	// Capa 1
	this.instance_1 = new lib.siluetaejercicio();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.9,18.6,1,1,0,0,0,16.9,18.6);
	this.instance_1.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.9,37.3);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Capa 3
	this.instance = new lib.simboloejercicio();
	this.instance.parent = this;
	this.instance.setTransform(9.7,0,1,1,0,0,0,16.9,18.6);

	this.text = new cjs.Text("Observa el listado de eventos y decide cuáles de ellos reportarías.", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 624;
	this.text.parent = this;
	this.text.setTransform(35.5,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},28).wait(1));

	// Capa 1
	this.instance_1 = new lib.text01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(257.9,241.3,1.133,1.133,0,0,0,257.9,241.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({x:157.9},0).to({scaleX:1,scaleY:1,x:197.9,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.4,41.4,1212.4,448.3);


// stage content:
(lib.AC_IMCR_OV_24 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(600,279.5,1324.7,642.9);
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