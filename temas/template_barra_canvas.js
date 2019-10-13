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


(lib.mc_fondoBarra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Talent Management Review", "bold 20px 'Arial'", "#333333");
	this.text.lineHeight = 24;
	this.text.lineWidth = 448;
	this.text.parent = this;
	this.text.setTransform(-291.2,-10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AADCCQgDAAgDgCIhUhXQgUgXAKgXIANgUIBZhaQAYgTAXAHIATAKIAeAhIgjAhIgTgUQgJgGgIAHIhFBGQgHAGADAHIAEAFIAzA1IAAAyQgBAJgHAAIgBAAg");
	this.shape.setTransform(-430.3,-5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("Ag0BSQgCgCgBgEIAAgzIA1gzQAGgGgEgJIgFgHIAhgjIASATQAPAXgIAWQgFALgHAHIhQBQQgEAFgEAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_1.setTransform(-418.1,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#793A26").s().p("Ah2BLQgSgXAMgZIAPgVIBXhWQAWgQAVAFIARAJIBbBZQACAGgGADIgHACIgvABIg2g0QgHgGgHADQgDABgBACIhEBFQgJAJAGAHIAGAFIgjAkg");
	this.shape_2.setTransform(-413.4,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#793A26").s().p("AgpA2QgMgDgIgIIgeggIAighIASASQAIAGAGgCIAFgEIAzgzIAzAAQAIAAABAFQABACgCADIhWBVQgOAQgSAAQgGAAgHgCg");
	this.shape_3.setTransform(-409.5,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D73D45").s().p("AAOAeIgOgXIgJAAIAFgIIALAAQAIgBAAgIQgBgEgDgDIgEgCIgWAAIAAAxIgOAAIAAg7IArAAQAEABADACQAIAFgBAJIgBAJQgCAGgKADIAPAYg");
	this.shape_4.setTransform(-456.2,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D73D45").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_5.setTransform(-450.1,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAEAJIABABIAUAxg");
	this.shape_6.setTransform(-463.2,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D73D45").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgQArIgPAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_7.setTransform(-443.7,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#793A26").s().p("AgGAeQgHAAgFgFQgGgGAAgHIAAgpIAQAAIAAAoQABAJAJABIAXAAIAAAJg");
	this.shape_8.setTransform(-376.8,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#793A26").s().p("AAAAeQgPgBgGgMQgGgHAAgKQAAgMAJgIQAHgJAKAAIABAAIAAAAIAcAAIAAALIgaAAIAAABIgBgBQgLACABAMIAAAAIAlAAIAAAKIglAAIAAABQgBAMAKABIAbAAIAAAKg");
	this.shape_9.setTransform(-401.8,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#793A26").s().p("AAAAeQgKAAgHgGQgHgGAAgJIAAgRQAAgIAHgGQAHgGAJgBIAaAAIAAALIgXABQgEAAgEADQgEAEAAAFIAAAMQAAAMAKAAIAZAAIAAALg");
	this.shape_10.setTransform(-437.8,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#793A26").s().p("AgHAeQgKAAgHgGQgHgGAAgJIAAgRQAAgJAHgGQAHgGAKAAIAPAAQAKAAAHAGQAHAGAAAJIAAARQAAAJgHAGQgHAGgKAAgAgNgPQgEAFAAAFIAAAMQAAAFAEAFQAEAEAGAAIAHAAQAGAAAEgEQAEgFAAgFIAAgMQAAgFgEgFQgEgEgGAAIgHAAQgGAAgEAEg");
	this.shape_11.setTransform(-431.5,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_12.setTransform(-424.4,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_13.setTransform(-395.2,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#793A26").s().p("AALAeIgagpIAAApIgPAAIAAg7IATAAIAbAsIAAgsIAPAAIAAA7g");
	this.shape_14.setTransform(-408.4,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_15.setTransform(-388.3,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#793A26").s().p("AgGAeIAAgwIgWAAIAAgLIA5AAIAAALIgWAAIAAAwg");
	this.shape_16.setTransform(-417.6,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#793A26").s().p("AgHAeIAAg7IAPAAIAAA7g");
	this.shape_17.setTransform(-413.2,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#793A26").s().p("AASAeIgFgOIgSAAIAEgKIAKAAIgJgTIgPArIgQAAIAUgxQABgCACgDQAEgEAEgBQAHAAAFAJIAAABIAUAxg");
	this.shape_18.setTransform(-382.8,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FAFAFA").s().p("AvJD6IAAnzIb5AAQBIArAoBBQAqBBAABKQAABNgtBDQgrBBhLArg");
	this.shape_19.setTransform(-407.9,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECECED").s().p("EhKNAD6IAAnzMCUbAAAIAAHzg");
	this.shape_20.setTransform(-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondoBarra, new cjs.Rectangle(-504.9,-25,978.5,63.7), null);


(lib.mc_btn_eval = function(mode,startPosition,loop) {
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

	// Modo de aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Modo de aislamiento
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBB0QgNAAgJgJQgKgJAAgOIAAinQAAgOAKgJQAJgKANAAICDAAQANAAAJAKQAKAJAAAOIAACnQAAAOgKAJQgJAJgNAAgAg0gqIAABZQAAAEADADQADADAEAAIBZAAQAEAAADgDQADgDAAgEIAAhYIANgSQAFgJgIgFQgJgFgFAHIgNATIhSAAQgKABAAAJg");
	this.shape_1.setTransform(16.6,17.3,0.862,0.862);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiAjIAAhFIA7AAIgXAiIgPgTQgHgHgIAGQgDADAAAEQAAAEACADIAZAcQADADAEAAIAAAAQAFAAADgEIAYgiIAAAwg");
	this.shape_2.setTransform(16.8,17.5,0.862,0.862);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A1A2A9").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(16.7,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E152D").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_4.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,33.4);


(lib.mc_barrabtn_siguiente = function(mode,startPosition,loop) {
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

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Modo de aislamiento
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag4BeQgKgHADgLIAWhIQABgEgBgEIgWhHQgDgMAKgGQAJgGAJAHIBgBRQAGAFAAAGQAAAHgGAFIhgBRQgEAEgFAAQgFAAgEgDg");
	this.shape_1.setTransform(21,16.4,1,1,0,0,0,2,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FA0A7").s().p("Ah1B2QgwgxgBhFQABhEAwgxQAxgxBEAAQBFAAAxAxQAxAxgBBEQABBFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_2.setTransform(16.7,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E152D").s().p("Ah1B2QgwgxgBhFQABhEAwgxQAxgxBEAAQBFAAAxAxQAxAxgBBEQABBFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,33.4);


(lib.mc_barrabtn_menu = function(mode,startPosition,loop) {
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

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Modo de aislamiento
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_1.setTransform(26.3,17.2,0.815,0.815);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglAmQgQgQAAgWQAAgWAQgPQAQgQAVAAQAWAAAQAQQAQAPAAAWQAAAWgQAQQgQAQgWAAQgVAAgQgQg");
	this.shape_2.setTransform(16.9,17.2,0.815,0.815);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(7.4,17.2,0.815,0.815);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A1A2A9").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_4.setTransform(16.7,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E152D").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_5.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,33.4);


(lib.mc_barrabtn_home = function(mode,startPosition,loop) {
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

	// Modo de aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Modo de aislamiento
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcB8IAAhhIg2AAIAABhIgqAAQgLgBgIgHQgIgJAAgLIAAiWIBfhFIBgBFIAACWQAAALgIAJQgIAHgMABg");
	this.shape_1.setTransform(17,16.1,0.838,0.838);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A1A2A9").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_2.setTransform(16.7,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E152D").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,33.4);


(lib.mc_barrabtn_cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape.setTransform(16.7,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(142,22,46,0.008)").s().p("AheBcIAAi3IC9AAIAAC3g");
	this.shape_1.setTransform(15.6,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3.4,1,1).p("Ag+gzIBHAAQAWAAAQAPQAQAQAAAUQAAAWgQAPQgQAQgWAAIhHAA");
	this.shape_2.setTransform(18.4,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAAIA9gxIAABjg");
	this.shape_3.setTransform(11,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9FA0A7").s().p("AhpBkIAAjHIDTAAIAADHg");
	this.shape_4.setTransform(16.6,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E162E").s().p("AhpBkIAAjHIDTAAIAADHg");
	this.shape_5.setTransform(16.6,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},1).wait(1));

	// Modo de aislamiento
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_6.setTransform(16.7,17.2,0.728,0.728);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9FA0A7").s().p("Ah1B2QgwgxgBhFQABhEAwgxQAxgxBEAAQBFAAAxAxQAxAxgBBEQABBFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_7.setTransform(16.7,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E152D").s().p("Ah1B2QgwgxgBhFQABhEAwgxQAxgxBEAAQBFAAAxAxQAxAxgBBEQABBFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_8.setTransform(16.7,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqArQgFgFgBgIQABgIAFgFIA7g8QAGgEAHAAQAIAAAFAEQAGAGgBAIQABAHgGAFIg8A8QgFAGgIAAQgHAAgFgGg");
	this.shape_9.setTransform(20,20,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARArIg7g8QgFgFgBgHQABgIAFgGQAFgEAHAAQAIAAAFAEIA8A8QAGAGgBAIQABAHgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_10.setTransform(20,13.7,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqArQgFgFgBgIQABgIAFgFIA7g8QAGgEAHAAQAIAAAFAEQAGAGgBAIQABAHgGAFIg8A8QgFAGgIAAQgHAAgFgGg");
	this.shape_11.setTransform(14.1,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARArIg7g8QgFgFgBgHQABgIAFgGQAFgEAHAAQAIAAAFAEIA8A8QAGAGgBAIQABAHgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_12.setTransform(14.1,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqArQgFgFgBgIQABgIAFgFIA7g8QAGgEAHAAQAIAAAFAEQAGAGgBAIQABAHgGAFIg8A8QgFAGgIAAQgHAAgFgGg");
	this.shape_13.setTransform(20,20,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARArIg7g8QgFgFgBgHQABgIAFgGQAFgEAHAAQAIAAAFAEIA8A8QAGAGgBAIQABAHgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_14.setTransform(20,13.7,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqArQgFgFgBgIQABgIAFgFIA7g8QAGgEAHAAQAIAAAFAEQAGAGgBAIQABAHgGAFIg8A8QgFAGgIAAQgHAAgFgGg");
	this.shape_15.setTransform(14.1,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AARArIg7g8QgFgFgBgHQABgIAFgGQAFgEAHAAQAIAAAFAEIA8A8QAGAGgBAIQABAHgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_16.setTransform(14.1,13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8E162E").s().p("AhaBpIAAgHIgZAAIAAjKIDRAAIAAAQIAWAAIAADBg");
	this.shape_17.setTransform(17.7,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_8},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_8},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_7},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_8},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,33.4);


(lib.mc_barrabtn_atras = function(mode,startPosition,loop) {
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

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.008)").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape.setTransform(16.7,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Modo de aislamiento
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBdIhghRQgGgFAAgHQAAgGAGgFIBghRQAJgHAJAGQAKAHgDALIgWBIQgBADABAFIAWBHQADAMgKAGQgFADgEAAQgFAAgEgEg");
	this.shape_1.setTransform(14.8,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FA0A7").s().p("Ah1B2QgwgxgBhFQABhEAwgxQAxgxBEAAQBFAAAxAxQAxAxgBBEQABBFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_2.setTransform(16.7,16.7,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E152D").s().p("Ah1B2QgwgxgBhFQABhEAwgxQAxgxBEAAQBFAAAxAxQAxAxgBBEQABBFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_3.setTransform(16.7,16.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.4,33.4);


// stage content:
(lib.template_barra_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_27 = function() {
		this.stop();
		var root = this;
		parent.getBarra(this);
		
		//habilitar las funciones de over mouse
		stage.enableMouseOver();
		
		//Actividades que llevar drag and drop etc.
		createjs.Touch.enable(stage);
		
		
		// EMPIEZA ROLLOVER
		root.btn_home.addEventListener("mouseover", homeOver);
		root.btn_home.addEventListener("mouseout", homeOut);
		
		root.btn_menu.addEventListener("mouseover", menuOver);
		root.btn_menu.addEventListener("mouseout", menuOut);
		/*
		root.btn_glosario.addEventListener("mouseover", glosarioOver);
		root.btn_glosario.addEventListener("mouseout", glosarioOut);
		*/
		root.btn_atras.addEventListener("mouseover", atrasOver);
		root.btn_atras.addEventListener("mouseout", atrasOut);
		
		root.btn_siguiente.addEventListener("mouseover", siguienteOver);
		root.btn_siguiente.addEventListener("mouseout", siguienteOut);
		
		root.btn_cerrar.addEventListener("mouseover", cerrarOver);
		root.btn_cerrar.addEventListener("mouseout", cerrarOut);
		
		
		
		root.btn_cerrar.estado = 1;
		
		function homeOver() {
			root.btn_home.gotoAndStop(1);
		}
		function homeOut() {
			root.btn_home.gotoAndStop(0);
			reinicioFrames();
		}
		
		function evalOver() {
			root.btn_eval.gotoAndStop(1);
		}
		function evalOut() {
			root.btn_eval.gotoAndStop(0);
			reinicioFrames();
		}
		
		function menuOver() {
			root.btn_menu.gotoAndStop(1);
		}
		function menuOut() {
			root.btn_menu.gotoAndStop(0);
			reinicioFrames();
		}
		/*
		function glosarioOver() {
			root.btn_glosario.gotoAndStop(1);
		}
		
		function glosarioOut() {
			root.btn_glosario.gotoAndStop(0);
			reinicioFrames();
		}
		*/
		function atrasOver() {
			root.btn_atras.gotoAndStop(1);
		}
		function atrasOut() {
			root.btn_atras.gotoAndStop(0);
			reinicioFrames();
		}
		
		function siguienteOver() {
			root.btn_siguiente.gotoAndStop(1);
		}
		function siguienteOut() {
			root.btn_siguiente.gotoAndStop(0);
			reinicioFrames();
		}
		
		function cerrarOver() {
			root.btn_cerrar.gotoAndStop(1);
		}
		function cerrarOut() {
			root.btn_cerrar.gotoAndStop(0);
			reinicioFrames();
		}
		
		function cerrarOver2() {
			root.btn_cerrar.gotoAndStop(3);
		}
		function cerrarOut2() {
			root.btn_cerrar.gotoAndStop(2);
		}
		
		// TERMINA ROLLOVER	
		
		//Asignación de punteros a los botones
		root.btn_siguiente.cursor = "pointer";
		root.btn_atras.cursor = "pointer";
		root.btn_menu.cursor = "pointer";
		//root.btn_glosario.cursor = "pointer";
		root.btn_home.cursor = "pointer";
		root.btn_cerrar.cursor = "pointer";
		
		
		//Asignación de eventos a los botones
		root.btn_siguiente.addEventListener("click", parent.siguiente_frame);
		root.btn_atras.addEventListener("click", parent.anterior_frame);
		root.btn_menu.addEventListener("click", parent.llamar_menu);
		//root.btn_glosario.addEventListener("click", parent.llamar_glosario);
		root.btn_menu.addEventListener("click", parent.ocultarMostrar_menu);
		root.btn_home.addEventListener("click", home);
		root.btn_cerrar.addEventListener("click", cerrar);
		
		
		this.deshabilitar_cerrar = function () {
			console.log("deshabilita Cerrar");
			root.btn_cerrar.cursor = false;
			root.btn_cerrar.removeAllEventListeners();
		}
		this.habilitar_cerrar = function () {
			console.log("habilita cerrar");
			root.btn_cerrar.cursor = "pointer";
			root.btn_cerrar.addEventListener("click", cerrar);
			root.btn_cerrar.addEventListener("mouseover", cerrarOver2);
			root.btn_cerrar.addEventListener("mouseout", cerrarOut2);
		}
		//Funacion para llamar al glosario:start.js
		/*
		function glosario() {
			parent.glosarioX();
		}
		*/
		this.deshabilitar_siguiente = function () {
			console.log("deshabilita siguiente");
			root.btn_siguiente.cursor = false;
			root.btn_siguiente.removeAllEventListeners();
			root.btn_siguiente.gotoAndStop(0);
		}
		
		this.habilitar_siguiente = function () {
			console.log("habilita siguiente");
			root.btn_siguiente.cursor = "pointer";
			root.btn_siguiente.addEventListener("click", parent.siguiente_frame);
			root.btn_siguiente.addEventListener("mouseover", siguienteOver);
			root.btn_siguiente.addEventListener("mouseout", siguienteOut);
		}
		
		function llamar_evaluacion() {
			console.log("Llamar Evaluación");
			if (parent.oportunidades <= parent.obj.Evaluaciones[0].MaxIntentos) {
				parent.llamar_evaluacion();
			} else {
				alert("Usted a excedido el límite de oportunidades");
			}
		}
		
		this.deshabilitar_atras = function () {
			console.log("deshabilita atras");
			root.btn_atras.cursor = false;
			root.btn_atras.removeAllEventListeners();
			root.btn_atras.gotoAndStop(0);
		}
		
		this.habilitar_atras = function () {
			console.log("habilita atras");
			root.btn_atras.cursor = "pointer";
			root.btn_atras.addEventListener("click", parent.anterior_frame);
			root.btn_atras.addEventListener("mouseover", atrasOver);
			root.btn_atras.addEventListener("mouseout", atrasOut);
		}
		
		if (parent.TemaCargado == false) {
			root.btn_menu.cursor = false;
		}
		
		//Función de manipulación del menú
		function llamar_menu() {
			parent.ocultarMostrar_menu();
			parent.llamar_menu();
		}
		
		//Funcion para cargar portada
		function home() {
			parent.$('#div_barra').hide();
			parent.$('#div_menu').hide();
			parent.$('#div_contenido').fadeIn();
			parent.llamar_Portada();
		}
		
		//Funcion para salir de la simulación o cerrar curso
		function cerrar() {
			parent.Cierra_Sim();
			root.cambio_cerrar(0);
		}
		
		//Función para el cambio de estado del botón cerrar. Entre Cerrar sim, y cerrar curso
		this.cambio_cerrar = function (paso) {
			if (paso == 1) {
				//console.log("paso 1");
				root.btn_cerrar.gotoAndStop(2);
				root.btn_cerrar.estado = 2;
				root.btn_cerrar.addEventListener("mouseover", cerrarOver2);
				root.btn_cerrar.addEventListener("mouseout", cerrarOut2);
			} else {
				//console.log("paso 0");
				root.btn_cerrar.gotoAndStop(0);
				root.btn_cerrar.estado = 1;
				root.btn_cerrar.addEventListener("mouseover", cerrarOver);
				root.btn_cerrar.addEventListener("mouseout", cerrarOut);
			}
		}
		
		//Función para regresar todos los botones al frame 0. Evita que se queden "pegados"
		function reinicioFrames() {
			root.btn_siguiente.gotoAndStop(0);
			root.btn_atras.gotoAndStop(0);
			root.btn_menu.gotoAndStop(0);
			//root.btn_glosario.gotoAndStop(0);
			root.btn_home.gotoAndStop(0);
			root.btn_eval.gotoAndStop(0);
			root.btn_cerrar.gotoAndStop(0);
			//console.log(root.btn_cerrar.estado);
			if (root.btn_cerrar.estado == 2) {
				root.btn_cerrar.gotoAndStop(2);
			} else {
				root.btn_cerrar.gotoAndStop(0);
			}
		}
		
		this.deshabilitar_siguiente();
		this.deshabilitar_atras();
		
		this.habilitar_eval = function () {
			root.btn_eval.addEventListener("mouseover", evalOver);
			root.btn_eval.addEventListener("mouseout", evalOut);
			root.btn_eval.cursor = "pointer";
			root.btn_eval.addEventListener("click", llamar_evaluacion);
		}
		
		this.deshabilitar_eval = function () {
			root.btn_eval.removeAllEventListeners();
			root.btn_eval.cursor = "default";
		}
		
		this.bloquear_barra = function () {
			root.btn_siguiente.removeAllEventListeners();
			root.btn_atras.removeAllEventListeners();
			root.btn_menu.removeAllEventListeners();
			//root.btn_glosario.removeAllEventListeners();
			root.btn_home.removeAllEventListeners();
			root.btn_eval.removeAllEventListeners();
		
			root.btn_siguiente.cursor = false;
			root.btn_atras.cursor = false;
			root.btn_menu.cursor = false;
			//root.btn_glosario.cursor = false;
			root.btn_home.cursor = false;
			root.btn_eval.cursor = false;
		}
		
		this.habilitar_barra = function () {
			root.btn_home.addEventListener("mouseover", homeOver);
			root.btn_home.addEventListener("mouseout", homeOut);
		
			root.btn_menu.addEventListener("mouseover", menuOver);
			root.btn_menu.addEventListener("mouseout", menuOut);
		
			//root.btn_glosario.addEventListener("mouseover", glosarioOver);
			//root.btn_glosario.addEventListener("mouseout", glosarioOut);
		
			root.btn_atras.addEventListener("mouseover", atrasOver);
			root.btn_atras.addEventListener("mouseout", atrasOut);
		
			root.btn_siguiente.addEventListener("mouseover", siguienteOver);
			root.btn_siguiente.addEventListener("mouseout", siguienteOut);
		
			root.btn_cerrar.addEventListener("mouseover", cerrarOver);
			root.btn_cerrar.addEventListener("mouseout", cerrarOut);
		
			root.btn_siguiente.addEventListener("click", parent.siguiente_frame);
			root.btn_atras.addEventListener("click", parent.anterior_frame);
			root.btn_menu.addEventListener("click", parent.llamar_menu);
			//root.btn_glosario.addEventListener("click", glosario);
			root.btn_menu.addEventListener("click", parent.ocultarMostrar_menu);
			root.btn_home.addEventListener("click", home);
			root.btn_cerrar.addEventListener("click", cerrar);
		
			root.btn_siguiente.cursor = "pointer";
			root.btn_atras.cursor = "pointer";
			root.btn_menu.cursor = "pointer";
			//root.btn_glosario.cursor = "pointer";
			root.btn_home.cursor = "pointer";
			root.btn_cerrar.cursor = "pointer";
		}
		
		parent.checarTerminacion();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// btn_home
	this.btn_home = new lib.mc_barrabtn_home();
	this.btn_home.parent = this;
	this.btn_home.setTransform(976.3,33.1,1,1,0,0,0,25.5,25.5);
	this.btn_home._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_home).wait(13).to({_off:false},0).to({x:767.6,y:34.5},14,cjs.Ease.get(1)).wait(1));

	// btn_cerrar
	this.btn_cerrar = new lib.mc_barrabtn_cerrar();
	this.btn_cerrar.parent = this;
	this.btn_cerrar.setTransform(974.6,33.1,1,1,0,0,0,25.5,25.5);
	this.btn_cerrar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_cerrar).wait(13).to({_off:false},0).to({x:932.5,y:34.5},14,cjs.Ease.get(1)).wait(1));

	// btn_menu
	this.btn_menu = new lib.mc_barrabtn_menu();
	this.btn_menu.parent = this;
	this.btn_menu.setTransform(974.6,33.1,1,1,0,0,0,25.5,25.5);
	this.btn_menu._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_menu).wait(13).to({_off:false},0).to({x:808.8,y:34.5},14,cjs.Ease.get(1)).wait(1));

	// btn_atras
	this.btn_atras = new lib.mc_barrabtn_atras();
	this.btn_atras.parent = this;
	this.btn_atras.setTransform(974.6,33.1,1,1,0,0,0,25.5,25.5);
	this.btn_atras._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_atras).wait(13).to({_off:false},0).to({x:849.9,y:34.5},14,cjs.Ease.get(1)).wait(1));

	// btn_siguiente
	this.btn_siguiente = new lib.mc_barrabtn_siguiente();
	this.btn_siguiente.parent = this;
	this.btn_siguiente.setTransform(974.6,33.1,1,1,0,0,0,25.5,25.5);
	this.btn_siguiente._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente).wait(13).to({_off:false},0).to({x:891.1,y:34.5},14,cjs.Ease.get(1)).wait(1));

	// btn_eval
	this.btn_eval = new lib.mc_btn_eval();
	this.btn_eval.parent = this;
	this.btn_eval.setTransform(974.6,33.1,1,1,0,0,0,25.5,25.5);
	this.btn_eval._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_eval).wait(13).to({_off:false},0).to({x:724.6,y:34.5},14,cjs.Ease.get(1)).wait(1));

	// Barra
	this.instance = new lib.mc_fondoBarra();
	this.instance.parent = this;
	this.instance.setTransform(490,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.97,scaleY:0.96,y:25},10,cjs.Ease.get(1)).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(460.1,-25,978.5,63.7);
// library properties:
lib.properties = {
	width: 950,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;