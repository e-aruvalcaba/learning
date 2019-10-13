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


(lib.traingulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AhDBwQgMgIAEgNIAahWQABgFgBgEIgahWQgEgNAMgIQALgHALAIIBzBhQAHAFAAAIQAAAJgHAFIhzBhQgGAEgGAAQgFAAgFgDg");
	this.shape.setTransform(4.9,8.6,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.traingulo, new cjs.Rectangle(-2,-1.7,13.9,20.8), null);


(lib.palomabienbanderillas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AgaBdQgHAAgEgDIgEgDIgrgxQgIgJgCgGQgCgHABgFQACgEABgDIACgDQAIgFAHABQAGAAAFADIAEADIAgAlIBmh6QAGgIAEgCQAFgBACABIACABQADADAAAEIgCAHIgCADIhnCiQgIAFgGAAIgBAAg");
	this.shape.setTransform(293.5,168.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.palomabienbanderillas, new cjs.Rectangle(283.9,159,19.2,18.7), null);


(lib.banderilla_terminado_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().dr(-28.75,-28.75,57.5,57.5);
	this.shape.setTransform(136.8,20.5,0.492,0.492,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AAQCvIhFAAIgBAAIoSAAIgeAAIkAAAQhiAAAAhhIAAh5IAAgiIAAgQIABAAQAIhRBZAAIMxAAIBFAAINXAAQBZAAAIBRIAAAAIAAAQIAAAiIAAB5QAABhhhAAg");
	this.shape_1.setTransform(96.9,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderilla_terminado_mc, new cjs.Rectangle(0,0.5,193.7,44.6), null);


(lib.banderilla_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().dr(-28.75,-28.75,57.5,57.5);
	this.shape.setTransform(136.8,20.5,0.492,0.492,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AiFCvIksAAIkfAAQhiAAAAhhIAAh5IAAgiIAAgQIABAAQAIhRBZAAIEfAAIEsAAINWAAQBZAAAIBRIAAAAIAAAQIAAAiIAAB5QAABhhhAAg");
	this.shape_1.setTransform(111.9,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.banderilla_mc, new cjs.Rectangle(30,0.5,163.7,44.6), null);


(lib.paloma_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.palomabienbanderillas();
	this.instance.parent = this;
	this.instance.setTransform(-88.7,32,1.144,1.144,0,0,0,203.1,197.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.paloma_mc, new cjs.Rectangle(3.7,-12.5,22,21.4), null);


// stage content:
(lib.banderillas_v1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{naranja:1,verde:129});

	// timeline functions:
	this.frame_0 = function() {
		parent.getMensajes(this);
		this.stop();
	}
	this.frame_128 = function() {
		this.stop();
		parent.llamarMensajes("");
	}
	this.frame_249 = function() {
		this.stop();
		parent.llamarMensajes("");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(128).call(this.frame_128).wait(121).call(this.frame_249).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape.setTransform(918.8,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_1.setTransform(910,33.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_2.setTransform(900,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_3.setTransform(890,33.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgTIAPAAIAAATg");
	this.shape_4.setTransform(883.1,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_5.setTransform(878.6,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_6.setTransform(871,33.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_7.setTransform(861,33.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgdA7QgOgKgGgPQgHgQAAgSQAAgUAIgPQAHgPAOgHQAPgJAQABQATgBANALQAOAJAEASIgQAEQgFgOgIgHQgIgGgOAAQgOAAgJAHQgLAHgEAMQgDANAAAMQAAAQAEAMQAFAMAKAGQAKAGALAAQAOAAAKgIQALgIADgRIARAFQgGAVgOAKQgNAMgVAAQgTgBgNgHg");
	this.shape_8.setTransform(849.7,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgVAqIAAhSIAMAAIAAANQAFgJAEgDQADgCAFAAQAHAAAIAEIgGANQgEgDgGAAQgEAAgDADQgDADgCAFQgDAHAAAJIAAAqg");
	this.shape_9.setTransform(878.3,42.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgeAlQgHgHAAgKQAAgHADgEQADgGAEgCQAEgCAGgCIAMgDQAQgCAJgCIAAgEQAAgJgFgDQgFgEgKgBQgKABgEADQgFAEgCAIIgOgCQACgIAEgGQAFgGAIgDQAIgCAKAAQALgBAGADQAHADADAEQADADABAGIAAANIAAARQAAAVACAEIADAKIgPAAIgDgKQgHAHgIACQgFADgJABQgOgBgHgGgAgDAFIgLADQgFABgCADQgBADAAAEQAAAGAEAEQAEADAIAAQAIABAGgEQAGgDAEgHQACgFAAgJIAAgFQgIADgPACg");
	this.shape_10.setTransform(870.5,43);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgSAnQgGgCgDgFQgDgEgCgGIgBgNIAAgzIAPAAIAAAtIAAAQQACAFAEADQAEAEAHgBQAFABAGgEQAFgDACgGQADgGAAgKIAAgsIAOAAIAABSIgNAAIAAgMQgKAPgPAAQgHgBgHgDg");
	this.shape_11.setTransform(861.6,43.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AAUAqIAAgxQAAgIgCgFQgCgEgEgCQgEgDgGAAQgIAAgGAGQgHAFAAAQIAAAsIgOAAIAAhSIANAAIAAAMQAJgOAQABQAIAAAGACQAGADAEAEQADAFABAGIABAOIAAAxg");
	this.shape_12.setTransform(852.7,42.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_13.setTransform(846.5,41.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAgvIgKAAIAAgLIAKAAIAAgUIANgIIAAAcIAOAAIAAALIgOAAIAAAwQAAAGABACQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIAFAAIAGAAIACAMIgLABQgHAAgDgCg");
	this.shape_14.setTransform(842.6,41.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AAUAqIAAgxQAAgIgCgFQgCgEgEgCQgEgDgGAAQgIAAgGAGQgHAFAAAQIAAAsIgOAAIAAhSIANAAIAAAMQAJgOAQABQAIAAAGACQAGADAEAEQADAFABAGIABAOIAAAxg");
	this.shape_15.setTransform(835.8,42.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgJAOAAQARAAALALQALALAAAUQAAAPgFAJQgFAJgJAFQgJAFgLABQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIg");
	this.shape_16.setTransform(826.9,43);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgaA0QgLgIgHgOQgFgOgBgQQABgSAGgNQAHgNANgHQAMgHAOAAQASAAAMAJQALAIAFAQIgPAEQgEgNgHgGQgIgFgMAAQgMAAgJAGQgIAGgEALQgEALAAALQAAAOAFALQADAKAJAGQAKAFAJAAQANAAAJgHQAIgHADgPIAQAEQgFATgMAJQgNAKgSAAQgRAAgMgHg");
	this.shape_17.setTransform(816.8,41.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_18.setTransform(929.8,29.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKgBQgKAAgHAIg");
	this.shape_19.setTransform(923,26.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgSA1QgIgGgEgKQgFgJAAgNQAAgNAEgJQAFgKAHgFQAJgGAKAAQAGAAAHAEQAFADAEAFIAAgpIAOAAIAABxIgNAAIAAgKQgIAMgPAAQgJAAgJgFgAgOgIQgGAHAAAQQAAAQAGAIQAHAIAIAAQAJAAAGgIQAHgIAAgPQAAgQgHgIQgGgIgKAAQgIAAgGAIg");
	this.shape_20.setTransform(913.9,24.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgeAkQgHgGAAgLQAAgFACgFQAEgFAEgDQAEgCAGgCIANgDQAQgCAHgCIAAgEQAAgIgEgEQgFgFgKAAQgKAAgEAEQgFAEgCAIIgOgCQACgIAEgGQAEgGAJgDQAIgDAJAAQALABAHACQAGADADADQAEAEABAGIAAANIAAASQABATAAAFIAEALIgOAAIgDgLQgIAHgHACQgHAEgIAAQgNAAgIgIgAgCAFIgMADQgFABgBADQgCAEAAADQAAAGAEADQAEAEAJABQAGAAAHgEQAGgEADgGQACgFAAgJIAAgFQgHADgOACg");
	this.shape_21.setTransform(905.2,26.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AAUArIAAgyQAAgIgCgFQgCgEgEgCQgEgDgGAAQgIAAgGAFQgHAHAAAPIAAAtIgOAAIAAhTIANAAIAAANQAJgOAQgBQAIAAAGADQAGADAEAEQADAFABAGIABAOIAAAyg");
	this.shape_22.setTransform(896.3,26);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_23.setTransform(890.1,24.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AAqArIAAg0QAAgIgBgEQgBgDgEgDQgEgCgFAAQgIAAgGAFQgGAHAAAMIAAAwIgNAAIAAg1QAAgKgDgFQgEgEgIAAQgGAAgFADQgFADgCAGQgCAGAAALIAAArIgOAAIAAhTIAMAAIAAAMQAEgGAHgDQAGgFAJAAQAJAAAGAFQAFAEACAGQAKgPAQAAQAMAAAHAIQAGAGAAAOIAAA5g");
	this.shape_24.setTransform(881.7,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgWArIAAhTIANAAIAAANQAFgIAEgEQADgDAFAAQAHABAHAEIgEANQgFgDgFAAQgGAAgCADQgDADgCAFQgCAHgBAJIAAArg");
	this.shape_25.setTransform(873,26);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgMAQAAQARAAALAMQAKAMAAATIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEAMgJAHQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_26.setTransform(865.2,26.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAguIgKAAIAAgMIAKAAIAAgUIANgJIAAAdIAOAAIAAAMIgOAAIAAAvQAAAGABACQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAFABIAGAAIACANIgLABQgHAAgDgDg");
	this.shape_27.setTransform(858.6,24.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgeAkQgHgGAAgLQAAgFADgFQADgFAEgDQAFgCAFgCIANgDQAPgCAJgCIAAgEQAAgIgFgEQgFgFgKAAQgJAAgFAEQgFAEgCAIIgOgCQACgIAEgGQAFgGAIgDQAIgDAKAAQAKABAHACQAGADAEADQADAEABAGIAAANIAAASQAAATABAFIAEALIgPAAIgCgLQgIAHgIACQgFAEgJAAQgOAAgHgIgAgDAFIgLADQgFABgCADQgBAEAAADQAAAGAEADQAEAEAJABQAGAAAHgEQAGgEADgGQADgFAAgJIAAgFQgIADgPACg");
	this.shape_28.setTransform(847.4,26.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAqArIAAg0QAAgIgBgEQgBgDgEgDQgEgCgFAAQgIAAgGAFQgGAHAAAMIAAAwIgNAAIAAg1QAAgKgDgFQgEgEgIAAQgGAAgFADQgFADgCAGQgCAGAAALIAAArIgOAAIAAhTIAMAAIAAAMQAEgGAHgDQAGgFAJAAQAJAAAGAFQAFAEACAGQAKgPAQAAQAMAAAHAIQAGAGAAAOIAAA5g");
	this.shape_29.setTransform(836.3,26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgMAQAAQARAAALAMQAKAMAAATIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEAMgJAHQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_30.setTransform(825.1,26.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgHA5IAAhkIglAAIAAgNIBZAAIAAANIgmAAIAABkg");
	this.shape_31.setTransform(815.9,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).to({state:[]},112).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},27).to({state:[]},94).wait(1));

	// Layer 5
	this.instance = new lib.traingulo();
	this.instance.parent = this;
	this.instance.setTransform(788.2,24.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({x:820.7},11,cjs.Ease.get(1)).to({_off:true},96).wait(122));

	// Layer 4
	this.instance_1 = new lib.traingulo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(790.9,30.8,1,1,0,0,0,4.4,8.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.paloma_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(774.8,42.7,0.209,0.209,0,0,0,9.6,6.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({x:830.9,y:32.3,alpha:0.148},11,cjs.Ease.get(1)).to({_off:true},1).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({regX:9.5,scaleX:1,scaleY:1,x:781,y:41.1},11,cjs.Ease.get(1)).to({_off:true},94).wait(1));

	// Layer 3
	this.instance_3 = new lib.banderilla_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(849.3,7,1,0.091,0,0,0,96.9,27.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.banderilla_terminado_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(849.3,6.5,1,0.073,0,0,0,96.9,27.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleY:1,x:855.5,y:32},14,cjs.Ease.get(1)).to({_off:true},113).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({scaleY:1,x:855.5,y:32},14,cjs.Ease.get(1)).to({_off:true},106).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 980,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;