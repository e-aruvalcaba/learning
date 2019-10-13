(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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


(lib.tituloestatico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// TITULO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgLgKAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(-293.7,-229.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.775,-230.1);

	this.text = new cjs.Text("Identificación de puestos críticos", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 504;
	this.text.parent = this;
	this.text.setTransform(-282.05,-241.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,524.2,36.599999999999994), null);


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" Identificación de puestos críticos", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(92.9,10);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,8,189.9,146.7);


(lib.puestos1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpAAIBfguIAAAaIB0AAIAAApIh0AAIAAAagAhSAAIA+AfIAAgUIB0AAIAAgVIh0AAIAAgTg");
	this.shape.setTransform(150.1696,81.4083,0.9111,0.9111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D15A61").s().p("AhgAAIBOgmIAAAXIB0AAIAAAfIh0AAIAAAXg");
	this.shape_1.setTransform(150.4657,81.3855,0.9111,0.9111);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAWIh0AAIAAgqIB0AAIAAgaIBfAuIhfAvgAhfAMIB0AAIAAATIA/gfIg/gdIAAATIh0AAg");
	this.shape_2.setTransform(36.8949,115.1197,0.9111,0.9111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D15A61").s().p("AATAQIh0AAIAAgfIB0AAIAAgXIBPAmIhPAng");
	this.shape_3.setTransform(36.5988,115.1197,0.9111,0.9111);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91D6EE").s().p("Ag3AyIA3hjIA4Bjg");
	this.shape_4.setTransform(54.8439,114.9602,0.9111,0.9111);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91D6EE").s().p("AlZgCIADgnIKvAsIgCAng");
	this.shape_5.setTransform(55.0261,108.4457,0.9111,0.9111);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DC686B").p("Ahig5QgJgBgHAFQgHAFAAAHIgEBGQAAAIAGAFQAGAGAKAAIDKAKQAKABAHgFQAGgFABgHIADhHQABgHgHgFQgGgGgJAAgABjBBIjLgKQgMgBgJgHQgJgIAAgKIAEhHQABgJAJgHQAJgHANABIDLAKQANABAJAHQAJAIgBAKIgEBGQAAAKgKAHQgJAHgNgBg");
	this.shape_6.setTransform(37.9233,89.2935,0.9111,0.9111);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F27B82").s().p("ABjBBIjLgKQgMgBgJgHQgJgIAAgKIAEhHQABgJAJgHQAJgHANABIDLAKQANABAJAHQAJAIgBAKIgEBGQAAAKgKAHQgIAGgLAAIgDAAgAhyg1QgHAFAAAHIgEBGQAAAIAGAFQAGAGAKAAIDKAKQAKABAHgFQAGgFABgHIADhHQABgHgHgFQgGgGgJAAIjLgKIgCAAQgIAAgGAEg");
	this.shape_7.setTransform(37.9233,89.2935,0.9111,0.9111);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DC686B").p("ABeA9IjCgJQgNgBgIgKQgJgJABgNIACgyQABgNAKgIQAJgJANAAIDCAKQANABAJAJQAJAKgBANIgDAyQAAANgKAIQgKAJgNgBg");
	this.shape_8.setTransform(37.946,89.2928,0.9111,0.9111);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F27B82").s().p("ABeA9IjCgJQgNgBgIgKQgJgJABgNIACgyQABgNAKgIQAJgJANAAIDCAKQANABAJAJQAJAKgBANIgDAyQAAANgKAIQgJAJgLAAIgDgBg");
	this.shape_9.setTransform(37.946,89.2928,0.9111,0.9111);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DC686B").p("Ahig5QgKgBgGAFQgHAFAAAHIgEBHQgBAHAHAFQAGAGAKAAIDKAKQAKABAHgFQAGgFABgHIADhHQABgHgHgFQgGgGgJAAgABjBBIjLgKQgMgBgJgHQgJgIAAgKIAEhGQABgKAJgHQAKgGAMAAIDLAKQANABAJAHQAJAIgBAKIgEBGQAAAKgKAHQgJAHgNgBg");
	this.shape_10.setTransform(37.4677,99.4753,0.9111,0.9111);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F27B82").s().p("ABjBBIjLgKQgMgBgJgHQgJgIAAgKIAEhGQABgKAJgHQAKgGAMAAIDLAKQANABAJAHQAJAIgBAKIgEBGQAAAKgKAHQgIAGgLAAIgDAAgAhyg1QgHAFAAAHIgEBHQgBAHAHAFQAGAGAKAAIDKAKQAKABAHgFQAGgFABgHIADhHQABgHgHgFQgGgGgJAAIjLgKIgCAAQgIAAgGAEg");
	this.shape_11.setTransform(37.4677,99.4753,0.9111,0.9111);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DC686B").p("ABeA9IjCgJQgNgBgIgJQgJgKABgNIACgyQABgNAKgIQAJgJANABIDCAJQANABAJAKQAJAJgBANIgCAyQgBANgKAIQgKAJgNgBg");
	this.shape_12.setTransform(37.4871,99.4745,0.9111,0.9111);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F27B82").s().p("ABeA9IjBgJQgOgBgIgJQgJgKABgNIADgyQABgNAJgIQAJgJANABIDCAJQANABAJAKQAJAJgBANIgDAyQAAANgKAIQgJAIgLAAIgDAAg");
	this.shape_13.setTransform(37.4871,99.4745,0.9111,0.9111);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DC686B").p("ABhBEIjLgRQgMAAgJgIQgIgIAAgKIAGhHQABgKAJgGQAKgGANABIDKAQQANABAJAIQAIAIgBAKIgGBGQAAAKgKAHQgJAGgNgBgAhhg9QgJAAgHAEQgHAFgBAHIgFBHQgBAHAGAFQAGAGAKABIDKAQQAJABAHgFQAHgEABgHIAGhHQAAgHgGgGQgGgFgJgBg");
	this.shape_14.setTransform(75.9854,81.0898,0.9111,0.9111);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F27B82").s().p("ABhBEIjLgRQgMAAgJgIQgIgIAAgKIAGhHQABgKAJgGQAKgGANABIDKAQQANABAJAIQAIAIgBAKIgGBGQAAAKgKAHQgIAFgKAAIgEAAgAhxg5QgHAFgBAHIgFBHQgBAHAGAFQAGAGAKABIDKAQQAJABAHgFQAHgEABgHIAGhHQAAgHgGgGQgGgFgJgBIjLgRIgBAAQgJAAgGAEg");
	this.shape_15.setTransform(75.9854,81.0898,0.9111,0.9111);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DC686B").p("ABdBAIjCgQQgMAAgJgKQgJgKABgNIAEgyQABgNAKgIQAKgIANAAIDCAQQANABAIAKQAIAKAAANIgFAyQAAANgKAIQgKAIgNgBg");
	this.shape_16.setTransform(75.9818,81.0929,0.9111,0.9111);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F27B82").s().p("ABdBAIjCgQQgMAAgJgKQgIgKABgNIADgyQABgNALgIQAJgIANAAIDCAQQANABAIAKQAIAKAAANIgFAyQgBANgKAIQgIAIgMAAIgCgBg");
	this.shape_17.setTransform(75.9818,81.0929,0.9111,0.9111);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DC686B").p("ABhBEIjKgQQgNgBgJgIQgIgIAAgKIAGhGQABgKAKgHQAJgGANABIDLAQQAMABAJAIQAJAIgBAKIgHBHQAAAKgKAGQgKAGgMgBgAhhg8QgJgBgHAFQgHAEAAAHIgGBHQgBAHAHAFQAFAGAKABIDLAQQAJABAHgFQAHgEAAgHIAGhHQABgHgHgFQgGgGgJgBg");
	this.shape_18.setTransform(75.2074,91.6579,0.9111,0.9111);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F27B82").s().p("ABhBEIjLgQQgMgBgJgIQgIgIABgKIAFhGQABgKAKgHQAJgGANABIDLAQQANABAIAIQAIAIAAAKIgHBHQAAAKgKAGQgIAFgLAAIgDAAgAhxg4QgGAEgCAHIgFBHQgBAHAGAFQAHAGAJABIDLAQQAIABAIgFQAGgEABgHIAGhHQAAgHgGgFQgGgGgJgBIjLgQIgBgBQgJAAgGAFg");
	this.shape_19.setTransform(75.2074,91.6579,0.9111,0.9111);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DC686B").p("ABdBAIjCgPQgNgBgIgKQgIgKAAgNIAFgyQAAgNAKgIQAKgIANABIDCAPQAMABAJAKQAJAKgBANIgFAyQAAAMgKAJQgKAIgNgBg");
	this.shape_20.setTransform(75.2074,91.6356,0.9111,0.9111);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F27B82").s().p("ABcBAIjBgPQgNgBgIgKQgJgKABgNIAFgyQAAgNAKgIQALgIAMABIDBAPQANABAJAKQAJAKgCANIgEAyQgBAMgJAJQgJAHgMAAIgDAAg");
	this.shape_21.setTransform(75.2074,91.6356,0.9111,0.9111);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DC686B").p("ABhBEIjLgRQgNgBgIgHQgIgIAAgKIAGhHQABgKAKgGQAKgGAMABIDLAQQAMABAJAIQAJAIgBAKIgGBGQgBAKgKAHQgJAGgNgBgAhgg9QgKAAgHAEQgGAFgBAHIgGBHQgBAHAHAFQAGAGAJABIDKAQQAKABAHgFQAHgEAAgHIAGhHQABgHgHgGQgGgFgJgBg");
	this.shape_22.setTransform(74.4137,102.1822,0.9111,0.9111);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F27B82").s().p("ABhBEIjLgRQgNgBgIgHQgIgIAAgKIAGhHQABgKAKgGQAKgGAMABIDLAQQAMABAJAIQAJAIgBAKIgGBGQgBAKgKAHQgIAFgLAAIgDAAgAhxg5QgGAFgBAHIgGBHQgBAHAHAFQAGAGAJABIDKAQQAKABAHgFQAHgEAAgHIAGhHQABgHgHgGQgGgFgJgBIjKgRIgCAAQgIAAgHAEg");
	this.shape_23.setTransform(74.4137,102.1822,0.9111,0.9111);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DC686B").p("ABdBAIjCgQQgMAAgJgKQgIgKABgNIAEgyQABgNAKgIQAJgIANAAIDCAQQANABAIAKQAIAKgBANIgEAyQAAAMgKAJQgKAIgNgBg");
	this.shape_24.setTransform(74.4104,102.1852,0.9111,0.9111);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F27B82").s().p("ABdBAIjCgQQgMAAgJgKQgIgKABgNIAEgyQABgNAKgIQAJgIANAAIDCAQQANABAIAKQAIAKgBANIgEAyQAAAMgKAJQgJAIgMAAIgCgBg");
	this.shape_25.setTransform(74.4104,102.1852,0.9111,0.9111);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DC686B").p("AAhAxIhBAAQgPAAgKgKQgKgKAAgPIAAgbQAAgPAKgKQAKgKAPAAIBCAAQAOAAAKAKQALALgBAOIAAAcQAAAOgKAKQgKAKgPAAgAgggrQgMAAgJAJQgJAIAAANIAAAbQAAAMAJAJQAIAJANAAIBBAAQANAAAIgJQAJgIAAgMIAAgcQAAgMgIgJQgJgJgMAAg");
	this.shape_26.setTransform(121.7893,81.6133,0.9111,0.9111);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F27B82").s().p("AggAxQgPAAgKgKQgKgKAAgPIAAgbQAAgPAKgKQAKgKAPAAIBCAAQAOAAAKAKQALALgBAOIAAAcQAAAOgKAKQgKAKgPAAgAg1giQgJAIAAANIAAAbQAAAMAJAJQAIAJANAAIBBAAQANAAAIgJQAJgIAAgMIAAgcQAAgMgIgJQgJgJgMAAIhCAAQgMAAgJAJg");
	this.shape_27.setTransform(121.7893,81.6133,0.9111,0.9111);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#DC686B").p("AATAvIgmgBQgTAAgNgNQgOgOAAgTQAAgSAOgOQAOgOATABIAlAAQATAAAOANQANAOAAASQAAATgNAOQgOAOgTAAg");
	this.shape_28.setTransform(121.8111,81.6353,0.9111,0.9111);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F27B82").s().p("AgTAuQgSAAgOgNQgOgOAAgTQAAgSAOgOQAOgOATABIAlAAQATAAAOANQAOAOAAASQAAATgOAOQgOAOgTAAg");
	this.shape_29.setTransform(121.8111,81.6353,0.9111,0.9111);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#DC686B").p("AA7AxIh1AAQgIAAgGgGQgGgFAAgJIAAg5QAAgJAGgFQAGgGAIAAIB2AAQAIAAAGAGQAFAGAAAIIAAA6QAAAIgGAGQgFAFgJAAgAg6grQgGAAgEAFQgEAEAAAGIgBA5QAAAGAFAFQAEAEAGAAIB1AAQAGAAAFgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAg");
	this.shape_30.setTransform(134.6806,98.5601,0.9111,0.9111);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F27B82").s().p("Ag6AxQgIAAgGgGQgGgFAAgJIAAg5QAAgJAGgFQAGgGAIAAIB2AAQAIAAAGAGQAFAGAAAIIAAA6QAAAIgGAGQgFAFgJAAgAhEgmQgEAEAAAGIgBA5QAAAGAFAFQAEAEAGAAIB1AAQAGAAAFgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAIh2gBQgGAAgEAFg");
	this.shape_31.setTransform(134.6806,98.5601,0.9111,0.9111);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#DC686B").p("AAtAvIhZgBQgNAAgKgJQgIgJAAgNIAAgdQAAgNAIgKQAKgIANAAIBZAAQAOAAAJAIQAIAKAAANIAAAeQAAAMgJAKQgJAJgNAAg");
	this.shape_32.setTransform(134.7034,98.5829,0.9111,0.9111);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F27B82").s().p("AgtAuQgMAAgKgJQgJgJAAgNIAAgdQAAgNAJgKQAKgIANgBIBaAAQAMABAKAIQAJAKgBANIAAAdQAAANgJAKQgJAIgNABg");
	this.shape_33.setTransform(134.7034,98.5829,0.9111,0.9111);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#DC686B").p("AAxAxIhgAAQgIAAgGgGQgGgFAAgJIAAg6QAAgIAGgGQAGgGAIAAIBgABQAIAAAGAGQAGAGAAAIIgBA5QAAAJgGAFQgFAGgIAAgAgvgrQgGAAgEAEQgFAEAAAGIAAA6QAAAGAFAEQAEAEAGAAIBgABQAFAAAFgEQAEgFAAgGIAAg5QAAgGgEgEQgEgFgGAAg");
	this.shape_34.setTransform(121.7655,98.5373,0.9111,0.9111);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F27B82").s().p("AgwAxQgHAAgGgGQgHgGAAgIIAAg5QABgJAGgGQAGgFAHAAIBgAAQAJAAAGAGQAFAGAAAIIAAA5QAAAIgGAHQgFAFgJABgAg6gmQgEADAAAHIAAA5QAAAGAEAEQAFAFAFAAIBgAAQAGAAAEgEQAFgEAAgHIAAg5QAAgGgEgEQgFgEgGgBIhgAAQgFAAgFAFg");
	this.shape_35.setTransform(121.7655,98.5373,0.9111,0.9111);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#DC686B").p("AAiAuIhDAAQgNAAgKgJQgJgJAAgNIAAgeQAAgMAJgKQAKgJANAAIBDAAQANAAAKAKQAJAJAAANIAAAdQAAANgJAKQgKAIgNAAg");
	this.shape_36.setTransform(121.7655,98.5373,0.9111,0.9111);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F27B82").s().p("AghAuQgNAAgKgJQgIgJgBgNIAAgeQABgMAIgJQAKgKANABIBEAAQAMAAAKAJQAJAJgBANIAAAeQABANgJAIQgKAKgNgBg");
	this.shape_37.setTransform(121.7655,98.5373,0.9111,0.9111);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#DC686B").p("ABBAxIiBAAQgIAAgGgGQgGgGAAgIIABg6QAAgIAGgGQAFgGAIABICBAAQAIAAAGAGQAGAFAAAJIAAA5QAAAJgGAFQgGAGgIAAgAhAgrQgFAAgFAEQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAICBABQAGAAAEgEQAEgFAAgGIAAg5QAAgGgEgEQgEgFgGAAg");
	this.shape_38.setTransform(108.3037,98.5128,0.9111,0.9111);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F27B82").s().p("AhAAxQgIAAgGgGQgGgGAAgIIABg6QAAgIAGgGQAFgGAIABICBAAQAIAAAGAGQAGAFAAAJIAAA5QAAAJgGAFQgGAGgIAAgAhKgnQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAICBABQAGAAAEgEQAEgFAAgGIAAg5QAAgGgEgEQgEgFgGAAIiBAAQgFAAgFAEg");
	this.shape_39.setTransform(108.3037,98.5128,0.9111,0.9111);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#DC686B").p("AAzAvIhlAAQgNAAgJgKQgJgJAAgNIAAgdQAAgNAJgJQAJgJANAAIBlAAQANAAAJAJQAJAKAAAMIAAAeQAAAMgJAKQgKAJgMAAg");
	this.shape_40.setTransform(108.3265,98.4918,0.9111,0.9111);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F27B82").s().p("AgyAvQgMAAgKgKQgJgJAAgNIAAgdQAAgNAJgKQAJgIANgBIBlABQANAAAJAJQAJAKAAAMIAAAdQAAANgJAKQgKAIgNABg");
	this.shape_41.setTransform(108.3265,98.4918,0.9111,0.9111);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#DC686B").p("ADMBAIgBAAImcgdQgIgBgFgGQgGgGABgIIAEg6QABgIAGgGQAGgFAIABIGcAdQAIAAAFAGQAGAGgBAJIgEA5QgBAIgFAFQgGAGgIAAgAjLg5QgGAAgEAEQgEADgBAGIgEA6QAAAGAEAEQAEAFAFAAIGcAdQAGABAFgEQAEgFAAgFIAFg6QAAgFgEgFQgEgEgGgBImbgdg");
	this.shape_42.setTransform(132.3117,64.2317,0.9111,0.9111);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F27B82").s().p("ADLBAImcgdQgIgBgFgGQgGgGABgIIAEg6QABgIAGgGQAGgFAIABIGcAdQAIAAAFAGQAGAGgBAJIgEA5QgBAIgFAFQgGAGgIAAgAjVg1QgEADgBAGIgEA6QAAAGAEAEQAEAFAFAAIGcAdQAGABAFgEQAEgFAAgFIAFg6QAAgFgEgFQgEgEgGgBImbgdIgBAAQgGAAgEAEg");
	this.shape_43.setTransform(132.3117,64.2317,0.9111,0.9111);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#DC686B").p("AC9A8ImAgcQgMAAgJgKQgIgKAAgMIADgeQABgNAJgIQAKgJANABIF/AbQANABAJAKQAIAKgBALIgCAfQgBANgKAIQgJAJgNgBg");
	this.shape_44.setTransform(132.2924,64.2373,0.9111,0.9111);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F27B82").s().p("AC9A8ImAgcQgMAAgJgKQgIgKAAgMIADgeQABgNAJgIQAKgJANABIF/AbQANABAJAKQAIAKgBALIgCAfQgBANgKAIQgIAIgLAAIgDAAg");
	this.shape_45.setTransform(132.2924,64.2373,0.9111,0.9111);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#DC686B").p("ADPAyImdgBQgIAAgGgGQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIAAIGdACQAIAAAGAGQAGAFAAAIIAAA6QAAAIgGAGQgGAGgIAAgAjOgrQgGAAgEAEQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAIGdABQAGAAAEgEQAEgEAAgGIAAg6QAAgFgEgFQgEgEgGAAg");
	this.shape_46.setTransform(121.3327,73.1399,0.9111,0.9111);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F27B82").s().p("AjOAxQgIAAgGgGQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIAAIGdACQAIAAAGAGQAGAFAAAIIAAA6QAAAIgGAGQgGAGgIAAgAjYgnQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAIGdABQAGAAAEgEQAEgEAAgGIAAg6QAAgFgEgFQgEgEgGAAImdgBQgGAAgEAEg");
	this.shape_47.setTransform(121.3327,73.1399,0.9111,0.9111);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#DC686B").p("ADBAvImBgBQgNAAgJgJQgJgJAAgOIAAgdQAAgMAKgKQAJgJAMAAIGBABQANAAAJAJQAJAJAAAOIAAAdQAAANgJAJQgJAJgNAAg");
	this.shape_48.setTransform(121.3099,73.1627,0.9111,0.9111);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F27B82").s().p("Ai/AuQgOAAgJgJQgJgKAAgNIAAgdQABgMAIgKQAKgJANAAIGAABQANAAAJAJQAJAKAAANIAAAdQAAANgJAJQgJAJgNAAg");
	this.shape_49.setTransform(121.3099,73.1627,0.9111,0.9111);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#DC686B").p("ADPAyImdgCQgIAAgGgFQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIAAIGdABQAIAAAGAGQAGAGAAAIIAAA6QAAAIgGAGQgGAGgIAAgAjOgrQgGAAgEAEQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAIGdABQAGAAAEgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAg");
	this.shape_50.setTransform(121.2872,90.0867,0.9111,0.9111);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F27B82").s().p("AjOAwQgIAAgGgFQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIAAIGdABQAIAAAGAGQAGAGAAAIIAAA6QAAAIgGAGQgGAGgIAAgAjYgnQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAIGdABQAGAAAEgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAImdgBQgGAAgEAEg");
	this.shape_51.setTransform(121.2872,90.0867,0.9111,0.9111);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#DC686B").p("ADBAvImBgBQgNAAgJgJQgJgJAAgOIAAgdQAAgNAKgJQAIgJANAAIGBABQANAAAJAJQAJAKAAANIAAAdQAAANgJAJQgJAJgNAAg");
	this.shape_52.setTransform(121.2644,90.0639,0.9111,0.9111);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F27B82").s().p("AjAAuQgNAAgJgJQgJgJAAgOIABgdQgBgMAKgKQAIgJANAAIGBABQANAAAJAKQAJAJAAAMIAAAeQAAANgJAJQgJAJgNAAg");
	this.shape_53.setTransform(121.2644,90.0639,0.9111,0.9111);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#DC686B").p("ADPAyImdgBQgIAAgGgGQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIAAIGdABQAIABAGAFQAGAGAAAIIAAA6QAAAIgGAGQgGAGgIAAgAjOgrQgGAAgEAEQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAIGdABQAGAAAEgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAg");
	this.shape_54.setTransform(121.2416,106.9879,0.9111,0.9111);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F27B82").s().p("AjOAxQgIAAgGgGQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIAAIGdABQAIABAGAFQAGAGAAAIIAAA6QAAAIgGAGQgGAGgIAAgAjYgnQgEAEAAAGIAAA6QAAAGAEAEQAEAEAGAAIGdABQAGAAAEgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAImdgBQgGAAgEAEg");
	this.shape_55.setTransform(121.2416,106.9879,0.9111,0.9111);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#DC686B").p("ADBAvImBgBQgNAAgJgJQgJgJAAgNIAAgeQAAgMAJgKQAKgJAMAAIGBABQANAAAJAJQAJAJAAANIAAAeQAAANgJAJQgJAJgNAAg");
	this.shape_56.setTransform(121.2188,107.0107,0.9111,0.9111);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F27B82").s().p("Ai/AtQgOAAgJgJQgJgIAAgNIAAgeQABgNAIgJQAKgJANAAIGAABQANAAAJAJQAJAJAAANIAAAdQAAANgJAKQgJAJgNAAg");
	this.shape_57.setTransform(121.2188,107.0107,0.9111,0.9111);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#DC686B").p("AA7AxIh1AAQgIAAgGgGQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIABIB2AAQAIAAAGAGQAFAFAAAJIAAA5QAAAJgGAFQgFAGgJAAgAg6grQgGAAgEAEQgEAEAAAGIgBA6QAAAGAFAEQAEAEAGAAIB1ABQAGAAAFgEQAEgFAAgGIAAg5QAAgGgEgEQgEgFgGAAg");
	this.shape_58.setTransform(134.635,115.5051,0.9111,0.9111);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F27B82").s().p("Ag6AxQgIAAgGgGQgGgGAAgIIAAg6QAAgIAGgGQAGgGAIABIB2AAQAIAAAGAGQAFAFAAAJIAAA5QAAAJgGAFQgFAGgJAAgAhEgnQgEAEAAAGIgBA6QAAAGAFAEQAEAEAGAAIB1ABQAGAAAFgEQAEgFAAgGIAAg5QAAgGgEgEQgEgFgGAAIh2AAQgGAAgEAEg");
	this.shape_59.setTransform(134.635,115.5051,0.9111,0.9111);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#DC686B").p("AAtAuIhaAAQgNAAgJgJQgJgJAAgNIAAgeQAAgNAJgJQAKgJANAAIBZABQANAAAKAJQAIAJAAANIAAAdQAAANgJAJQgJAJgNAAg");
	this.shape_60.setTransform(134.6578,115.4841,0.9111,0.9111);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F27B82").s().p("AgsAvQgNAAgKgJQgIgKgBgNIAAgeQABgNAIgIQAKgJANAAIBZAAQAOAAAIAJQAJAKAAAMIAAAdQABANgKAKQgJAJgNAAg");
	this.shape_61.setTransform(134.6578,115.4841,0.9111,0.9111);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#DC686B").p("AAxAxIhhAAQgIAAgGgGQgGgGAAgIIAAg6QAAgIAGgGQAGgFAIAAIBhAAQAIAAAGAGQAGAGAAAIIgBA6QAAAIgGAFQgGAGgHAAgAgwgrQgFAAgFAEQgEAFAAAFIAAA6QAAAGAEAEQAFAEAFABIBhAAQAFAAAFgEQAEgFAAgGIAAg5QAAgGgEgEQgEgFgGAAg");
	this.shape_62.setTransform(121.7199,115.4613,0.9111,0.9111);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F27B82").s().p("AgvAxQgJAAgGgGQgFgGAAgIIAAg6QAAgIAFgGQAGgFAJAAIBgAAQAIAAAFAGQAHAGAAAIIgBA6QAAAIgGAFQgGAGgHAAgAg5gnQgFAFAAAFIAAA6QAAAGAFAEQADAEAHABIBgAAQAFAAAFgEQADgFAAgGIABg5QAAgGgEgEQgEgFgGAAIhgAAQgHAAgDAEg");
	this.shape_63.setTransform(121.7199,115.4613,0.9111,0.9111);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#DC686B").p("AAiAuIhDAAQgOAAgIgJQgKgJAAgNIAAgdQAAgNAKgKQAIgJAOAAIBDABQAOAAAIAJQAJAJAAANIAAAdQAAANgJAKQgJAJgNgBg");
	this.shape_64.setTransform(121.7199,115.4397,0.9111,0.9111);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F27B82").s().p("AAiAuIhEAAQgMAAgJgJQgKgJABgNIAAgdQgBgNAKgKQAJgJAMAAIBFABQANAAAIAJQAJAJAAANIAAAdQAAANgJAKQgIAJgNAAIgBgBg");
	this.shape_65.setTransform(121.7199,115.4397,0.9111,0.9111);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#DC686B").p("ABBAxIiBAAQgIAAgGgGQgGgGAAgIIABg6QAAgIAGgFQAFgGAIAAICBAAQAJAAAFAGQAGAGAAAIIAAA6QAAAIgGAGQgGAFgIAAgAhAgrQgFAAgFAEQgEAFAAAFIAAA6QAAAGAEAFQAEAEAGAAICBAAQAGAAAEgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAg");
	this.shape_66.setTransform(108.2582,115.4158,0.9111,0.9111);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F27B82").s().p("AhAAxQgIAAgGgGQgGgGAAgIIABg6QAAgIAGgFQAFgGAIAAICBAAQAJAAAFAGQAGAGAAAIIAAA6QAAAIgGAGQgGAFgIAAgAhKgnQgEAFAAAFIAAA6QAAAGAEAFQAEAEAGAAICBAAQAGAAAEgEQAEgEAAgGIAAg6QAAgGgEgEQgEgEgGAAIiBgBQgFAAgFAEg");
	this.shape_67.setTransform(108.2582,115.4158,0.9111,0.9111);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#DC686B").p("AAzAvIhlgBQgNAAgJgJQgJgJAAgNIAAgdQAAgNAJgKQAJgJANAAIBlABQANAAAJAJQAJAJAAANIAAAdQAAANgJAKQgJAJgNAAg");
	this.shape_68.setTransform(108.281,115.4158,0.9111,0.9111);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F27B82").s().p("AgyAuQgNAAgJgJQgJgJAAgNIAAgdQAAgNAJgKQAJgJAOAAIBkABQANAAAJAJQAJAJAAANIAAAdQAAANgKAKQgIAJgNAAg");
	this.shape_69.setTransform(108.281,115.4158,0.9111,0.9111);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DFE5DF").s().p("ArlCOIgnhDQgbgtgIgZQFch7FKgTQHbgdHeCwQgIAYgbArQghA0gHANg");
	this.shape_70.setTransform(90.5825,122.7524,0.9111,0.9111);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#DFE5DF").s().p("AncBuQjTiFhwjgIY/AAQhwDgjUCFQjZCKkDAAQkCAAjaiKg");
	this.shape_71.setTransform(90.5369,149.2182,0.9111,0.9111);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DFE5DF").s().p("AiIHfQlLAUlbB8QgchYgVhYQgch4AAg/QAAi1BGilQBEigB7h7QB8h8CghEQClhGC1AAQC1AACmBGQCgBEB8B8QB7B7BECgQBGClAAC1QAABAgcB5QgVBfgbBUQneixnaAcg");
	this.shape_72.setTransform(90.5369,66.4887,0.9111,0.9111);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EFEFEF").s().p("AmFOcQi1hMiKiKQiLiLhMi1QhPi6AAjMQAAjLBPi7QBMizCLiLQCKiLC1hMQC6hPDLAAQDMAAC7BPQC0BMCKCLQCLCLBMCzQBPC7AADLQAADMhPC6QhMC1iLCLQiKCKi0BMQi7BPjMAAQjLAAi6hPg");
	this.shape_73.setTransform(91.3797,91.385,0.9111,0.9111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,182.8);


(lib.perfolescpacidades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9C9C9").s().p("AgkBHIAViOIAcAnQAdAqgGAZIgGAkg");
	this.shape.setTransform(160.8913,207.2951,0.7004,0.7004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9C9C9").s().p("AgbBCQgDgUgEgMQgMgmAegiQAQgRAQgKIAHAgQAHAjACAWIAHAqg");
	this.shape_1.setTransform(140.255,207.6978,0.7004,0.7004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBCACB").s().p("AgNASQgVgNgCgIIAMgZIA9AlIgdAUIgVgLg");
	this.shape_2.setTransform(147.9379,201.9371,0.7004,0.7004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BBCACB").s().p("AgiAIIA4ggIANAYQgCAQgjAJg");
	this.shape_3.setTransform(152.7881,202.1998,0.7004,0.7004);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D9393").s().p("AAbAYQgFgBgFgEQgFgGgBgJIAAgCQgFgFgFABIgBAAQgGgBgEAFIAAACQAAAJgGAGQgEAEgGABIguAAIgCAAQgOgIAAgNIAAgDIgNABIgCgLIAQgDQAEgIALgCIAsAAQALAAAFALQAGgDAGAAQAHAAAFADQAGgLALAAIAsAAQALACADAIIARADIgDALIgMgBIAAADQAAANgOAIIgCAAgAAYgIIAAAMQAAAGAEACIArAAQAFgEAAgEIAAgMQAAgBgFgCIgqAAQgDAAgCADgAhLgIIAAAMQAAAEAFAEIAqAAQAFgCAAgGIAAgMQgBgDgEAAIgqAAQgFACAAABg");
	this.shape_4.setTransform(150.004,188.7522,0.7004,0.7004);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#71706F").s().p("ABjA9IgGgtQgBgIgGgIQgLgOgVAAQgKAAgLAGQgmARgbgUIgBAAQgQgGgMACQgaACgFAbIgGAuQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQgEgjACgXQACgiAQgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAGgHQAKgHAUgBQAQgBAPgFQANgFAJAAQBAgBATAbIABACQAIACAFALQAIAQgCAdIgCAlQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_5.setTransform(149.8914,182.9727,0.7004,0.7004);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDAB86").s().p("AA6ACIgFAAIAFAAIAGABIgGgBgAgPgCIAPAAIA1AEIgVgBIhfACg");
	this.shape_6.setTransform(150.1616,183.8845,0.7004,0.7004);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDAB86").s().p("AAgABIg/AAIggACIAwgEIAPgBIAgABIAgAEIgggCg");
	this.shape_7.setTransform(150.0566,184.9175,0.7004,0.7004);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AgRCJQgNgFgPgLQgfgVgSgeIgBgEIAAgTIgBAAQgEgBgEgEIAAAAQgCgDgDgQIgEgXQgCgJAAgGQAAgHADgBQACgBAEAEQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIACgBQgDgQAAgTQAAgqAWgKIAAAAIAXgSQAcgRAbAAIAGAAQAbgBAeASQAOAIAKAKQAWAKAAAqQAAATgEAQIgBAEIADgDIAFgEQAEgDACABQAEACgDASIgEAZIgFATQgDAEgFABIgBAAIgCAXIgBAEQggArgnAUIgBAAQgMADgJAAQgJAAgIgDg");
	this.shape_8.setTransform(150.0461,189.2756,0.7004,0.7004);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDAB86").s().p("AgIA1QhMgDASgTQARgQAIgeIAFgcIAkgHQAkgGAAANQABAXAhBIQgaABgYAAIgcAAg");
	this.shape_9.setTransform(150.2974,199.0629,0.7004,0.7004);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6D8D8").s().p("AipBOIgBhNQADgdAUgQQATgPAggIQAQgEANgBQAzgFA1AAQA8gBAPAGQAXAJASAvQASArAAAnIgBAMg");
	this.shape_10.setTransform(150.9145,206.8209,0.7004,0.7004);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC686B").s().p("AgNBmQgGgDAAgGIAAhYIiwhYQgGgEABgFQgBgFAGgEQAGgEAIAAQAIAAAGAEICnBSICphSQAFgEAIAAQAJAAAFAEQAGAEgBAFQABAFgGAEIixBZIAABXQABAGgHADQgGAEgHAAQgIAAgFgEg");
	this.shape_11.setTransform(149.4437,165.4641,0.7004,0.7004);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhzFSQgZgCgTgVIiBiYIgmgsQgcgigMgQQgOgSABgTQACgSARgOQAagYAigcQARgNAUACQATACAOARIB4CNIFRmaQAlgtAtAmIAzArQATARABATQACAUgQATImkIBQgWAbggAAgAkagdQgjAbgYAWQgKAIAAAHQAAAHAIAKIBMBdQBPBdAyA6QANAOAQAAQATgBAOgQIGkoBQAIgKAAgIQgBgJgKgJIgygqQgNgLgJABQgKAAgKANIlmGzIiOilQgHgIgJgBIgCAAQgHAAgGAFg");
	this.shape_12.setTransform(198.0508,205.7702,0.7004,0.7004);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC686B").s().p("AiVExIimjDIgogxQgWgcAagYQAagXAigaQAMgKAOACQAOABAKAMICDCZIFbmmQAPgRAPgCQAPgBASAPIAyArQAdAagYAdImkIBQgSAVgYABIgDAAQgXAAgQgTg");
	this.shape_13.setTransform(198.0645,205.7887,0.7004,0.7004);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4D").s().p("AgKANQgNgGgBgHIAJgRIAoAXIgXAMQgFgCgHgDg");
	this.shape_14.setTransform(171.9789,139.7772,0.7004,0.7004);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4D").s().p("AgZAIIApgcIAJASQAAAGgQAJIgOAIg");
	this.shape_15.setTransform(175.4984,139.5846,0.7004,0.7004);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#744C28").s().p("ABIAyQADgMgCgOQgCgOgaAAQggADgOgBQgTgBgRgNIgNgNQgIAcgEADQgDACgDATIgEATIgIgMQgIgMAAgCQACgCABgJQABgLgBgIQgCgGAAgKQABgMAEgDIAAgBQgBgCAZgLQAcgLAZgCQAbgDAhAUQAgASABAPQABAPgDATQgCAUgEABQgEAAgDAHIgDAGg");
	this.shape_16.setTransform(173.9302,126.0045,0.7004,0.7004);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AAYBZQgNggAAgFQgBgQgDA1IhfAAQAAhPABhMIARgOQAUgNAXAIIAXADQAaAEAMAIQAMAIArCXg");
	this.shape_17.setTransform(179.1886,145.3869,0.7004,0.7004);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AgHBZIgDgeQgBgMAAAFQgBAIgLAdIhEAAQANg5ASgxQARgvAJgGQAUgMApgDQAXgIAUANQALAGAFAIQAEBMACBPg");
	this.shape_18.setTransform(168.1442,145.3869,0.7004,0.7004);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9BD9C").s().p("AgDBkIgLgCIgBAAQgcgPgWgeIgBgDIgCgRIAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAIgBgCIAAAAIgEgNIgCgRIgBgBQgCgNADgBQADgBAFAFIACACIgDgbQAAgeAPgIIABAAIARgNQAUgMAUAAIAEAAQATAAAUANQAKAGAHAGQAPAIAAAeIgBARIgBAHIABABIACgDQADgDACABQABABAAAFIgEAbQgCALgBACIAAAAQgCADgEAAIAAAAIgBAOIgBADQgMAVgWAQIgUALQgGACgGAAIgEAAg");
	this.shape_19.setTransform(173.9295,130.5576,0.7004,0.7004);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EDAB86").s().p("AgxAlIAMgcQAMgdAAgKQABgJAYADIAaAGQABAIADALQAFAVAMAMQAOAOg2ACg");
	this.shape_20.setTransform(173.7544,137.5191,0.7004,0.7004);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C140B").s().p("AgBAAQgBgHACAAQACAAAAAHQAAAIgCAAQgCAAABgIg");
	this.shape_21.setTransform(130.6031,136.6254,0.7004,0.7004);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#927954").s().p("AgCALQgCgFAAgGQAAgFACgFQABgFABAAQAFAAAAAPQAAAQgFAAQgBAAgBgFg");
	this.shape_22.setTransform(130.6031,136.4853,0.7004,0.7004);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C140B").s().p("AgCAAQAAgHACAAQACAAABAHQgBAIgCAAQgCAAAAgIg");
	this.shape_23.setTransform(119.0466,136.6254,0.7004,0.7004);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#927954").s().p("AgDALQgBgFAAgGQAAgFABgFQACgFABAAQAFAAAAAPQAAAQgFAAQgBAAgCgFg");
	this.shape_24.setTransform(119.0466,136.4853,0.7004,0.7004);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C140B").s().p("AiIBlQgKgJAAgOQAAgNAJgKQgOgHAAgSQAAgNALgJQgEgEAAgGQAAgHAEgGQAEgFAHgCQgCgFAAgFQAAgOAKgJQAKgKAOAAIACAAQADgJAIgFQAHgGAKABQAHAAAHADQACgLAKgHQAJgHALgBQAIABAJAEQAHgIANAAQAPAAAJAMIADAAQAGAAAFAFQAFAEAAAHQAFgCAHAAQAPAAALALQALALAAAPIAAABIAFgBQANAAAIAJQAJAIAAAMQAAAKgFAHQAKAIAAAOQAAAQgMAJQAQALAAASQAAAOgKAJQgKALgOgBQgKABgJgHQgIgFgEgJQgIgDgFgFQgFgHAAgJIAAgCIgJAAQgPAAgMgLQgLgLAAgQIAAgDQgEACgHAAQgJAAgGgGQgHgEgCgJIgBAAQgIAAgGgEQgGgFgCgHIgBgCIAAAEQAAAOgNAIQAEAHAAAJQAAALgHAJQgHAIgKADIABAFQAAANgLAFQgCAMgJAJQgJAIgNAAQgNAAgKgKg");
	this.shape_25.setTransform(124.5272,128.1156,0.7004,0.7004);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A25F37").s().p("AgEgLQAEgIAEABQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQACAQgJALIgIAJg");
	this.shape_26.setTransform(130.7209,135.0106,0.7004,0.7004);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A25F37").s().p("AAAALQgJgLACgQIAEgCQADgBAFAIIADAfQgFgDgDgGg");
	this.shape_27.setTransform(118.7006,135.0106,0.7004,0.7004);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A25F37").s().p("AgbBxQgggVgSgmQgEgCgFgHQgJgMACgQIAEgBQAFgBAEAIIgJgnQgGgsASgVIATgUQAYgVAegDIAJAAQAeADAYAVQANAKAGAKQASAVgGAsIgJAnQAEgIAFABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQACAQgIAMIgJAJQgSAmggAVIgcANQgMgDgPgKg");
	this.shape_28.setTransform(124.7204,132.5281,0.7004,0.7004);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C140B").s().p("AgNAvIgFABQgHAAgFgFQgFgFAAgHIABgEIgGABQgLAAgJgIQgIgJAAgLQAAgSAQgHQgGgGAAgJQAAgIAFgGQAGgGAIAAQAKAAAHAJQAHgCAHAAQANAAAKAKQALAKAAAPQAAAKgGAIQANADAGAMIAIgCQAJAAAHAHQAGAGAAAJQAAAJgGAGQgHAGgJAAQgHAAgGgFQgJAKgOAAQgPAAgJgOg");
	this.shape_29.setTransform(119.6945,136.888,0.7004,0.7004);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C140B").s().p("AgzApQgHgHAAgJQAAgKAHgHQAGgHAKAAQAAgIAHgGQAGgHAJAAQABgLAJgGQAGgHALAAQAHAAAHAEQAGgGAIAAQAGAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgGAAIgBAAQgDARgSAEIAAACQAAALgIAJQgJAHgKABQgGAAgEgCQgHAJgLAAQgKAAgGgGg");
	this.shape_30.setTransform(130.0428,137.9561,0.7004,0.7004);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D9D9E").s().p("AgPAqIgTgbIgBgTQAEgXAZgOQAXAsATAng");
	this.shape_31.setTransform(130.9358,147.8842,0.7004,0.7004);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D9D9E").s().p("AgYArQACgsAGgZQAEgMACgEIAjAcIgJA5g");
	this.shape_32.setTransform(119.4143,147.8142,0.7004,0.7004);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUgLIAUgHIAVATIgQASg");
	this.shape_33.setTransform(123.0914,144.3297,0.7004,0.7004);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUACIAWgUIATAGIgZAgg");
	this.shape_34.setTransform(126.0331,144.2947,0.7004,0.7004);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCBCB").s().p("AAFANIgYgaIAOgFIAZARIgNAUg");
	this.shape_35.setTransform(123.1439,144.5398,0.7004,0.7004);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCBCB").s().p("AgTAAIAbgRIAMAEIgZAZIgCAGg");
	this.shape_36.setTransform(125.928,144.4698,0.7004,0.7004);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9F5733").s().p("AgmAFIARgGQACgCACgDQACgGgBgUIAhgBIgBANQAAAOABADIADACIATAGIgdAbIgMgNIgPAPg");
	this.shape_37.setTransform(124.7724,143.0865,0.7004,0.7004);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRgCIgUgdIAlgOIAmANIgbAbIgNAzg");
	this.shape_38.setTransform(124.7373,145.6955,0.7004,0.7004);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#626568").s().p("AgFA8Igfg2IAPgGIgYgFIgSgfIA/gXIBAAYIgeAjIgTAAIAMAIIgZA0g");
	this.shape_39.setTransform(124.8249,146.641,0.7004,0.7004);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#606060").s().p("AgFA6IgggzIAPgHIgZgEIgTgeIALgEIAZgJIACgBIAdgJIAdAKIAlARIgdAeIgUAAIAMAJIgbAxg");
	this.shape_40.setTransform(124.7724,146.7286,0.7004,0.7004);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9D9D9E").s().p("Ag+A7IgDgKQgDgHADgJIADgRQACgGgEgIIgIgMQgKgQgBABIAfgMIAZgJIAhgMIAcAMIAyAXIgFAHQgFAFgBAFQgDAFACAEIABAFQAJAYgIASIgEAJg");
	this.shape_41.setTransform(124.5447,146.6585,0.7004,0.7004);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ABC9CE").s().p("AhUPhQgPgBgNgJQgMgKgGgOIhukIIjHhcIj2BQQgPAFgQgFQgQgEgLgMQhKhRg4hgQgHgNAAgPQAAgOAHgNIB2jXIg0jVIimhsQgNgJgHgPQgGgOACgQQASiFA2h+QAGgNALgJQALgIAOgDICygeICGiuIgOiXQgBgPAHgOQAGgOANgIQB8hUCTgtQAOgEAOADQAPADAKAKIBsBgIDbgDIBshoQAWgVAeAIQCRAlB/BMQANAIAIAOQAHANgBAQIgJCgICMCqIDDAaQAfAEAMAcQA4B2AWB9QADAQgGAPQgGAPgNAJIiwB9IgtDWICGDgQAHANABAOQAAAPgHANQg1BfhDBNQgLAMgPAFQgPAEgQgEIkFhLIjEBiIhlEOQgFAOgNAKQgMAKgQABQgeAEglABIgmABQgsAAgrgEg");
	this.shape_42.setTransform(149.0595,167.1298,0.7004,0.7004);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("AhgRwQgRgBgPgLQgOgKgHgRIh9kuIjkhpIkZBbQgSAGgSgFQgSgFgNgNQhVheg/huQgJgOAAgRQAAgRAIgOICIj2Ig8j0Ii+h8QgPgKgIgRQgHgQACgTQAWiZA9iPQAHgPAMgKQANgKAQgCIDMgjICZjHIgQitQgBgRAHgPQAIgQAOgKQCQhhCngyQAQgFAQAEQAQADANALIB7BvID6gFIB8h2QAMgMAQgEQAQgEAPAEQCkAqCUBYQAPAKAIAPQAJAQgBARIgLC4ICgDBIDgAfQAQACANAKQANAJAHAPQA/CGAaCRQAEASgHARQgHARgPALIjKCPIgzD0ICZEAQAIAPABARQAAARgIAOQg8BshNBZQgMAOgSAFQgSAGgRgGIkrhVIjgBwIhzE1QgHAQgOALQgOALgSACQgqAEgjACIgsABQgyAAgxgFg");
	this.shape_43.setTransform(148.8674,168.2914,0.7004,0.7004);

	this.text = new cjs.Text("Brecha de disponibilidad.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 187;
	this.text.parent = this;
	this.text.setTransform(152.45,259.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.9,88.4,191.2,231.70000000000002);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(71.0774,27.15,0.5935,0.5935);

	this.text_1 = new cjs.Text("2.3", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(69.9296,57.65,1.0935,1.0935);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.7908,69.6505,1.5036,1.5036);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.no1perfilsale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Ya que todas las posiciones son importantes, el mapeo nos permite definir acciones específicas para cada posición.", "17px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 617;
	this.text.parent = this;
	this.text.setTransform(422.45,45.05);

	this.text_1 = new cjs.Text("Al concluir el llenado de la herramienta, de forma automática se integra la información en el Mapa de Criticidad. ", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 617;
	this.text_1.parent = this;
	this.text_1.setTransform(422.45,1.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("EhF7AJFQigAAAAjbIAAqcMCQ4AAAIAAKcQgBDbihAAgEhIbgEzIAAg2QAAjbCgAAMCL2AAAQChAAABDbIAAA2g");
	this.shape.setTransform(586.1,46.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.5,-12,927.3,123.3);


(lib.no1perfil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Resultados de la herramienta de criticidad", "bold 20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 192;
	this.text.parent = this;
	this.text.setTransform(335.85,35.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AWPJIIAAyPIXNAAIAASPgEgkUAJIQj3gGimilQikilgGj4QAGj3CkimQCmikD3gGMA6jAAAIAASPg");
	this.shape.setTransform(164.825,68.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,10.4,581.7,125.69999999999999);


(lib.mascaratapar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvWACqIAAlTMBetAAAIAAFTg");
	this.shape.setTransform(303.075,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,34);


(lib.m2t3mc12tit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("La herramienta se compone de tres elementos:", "16px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 384;
	this.text.parent = this;
	this.text.setTransform(-22,112.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,110.9,388.1,40.29999999999998);


(lib.M2_TMR_TABLA1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("0", "14px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 25;
	this.text.parent = this;
	this.text.setTransform(97.4,222.05);

	this.text_1 = new cjs.Text("GERENTE VENTAS", "8px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 176;
	this.text_1.parent = this;
	this.text_1.setTransform(521.1,194.05);

	this.text_2 = new cjs.Text("COORDINADOR DE AUDITORÍA", "8px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 10;
	this.text_2.lineWidth = 176;
	this.text_2.parent = this;
	this.text_2.setTransform(389.9,194.05);

	this.text_3 = new cjs.Text("4", "14px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 25;
	this.text_3.parent = this;
	this.text_3.setTransform(660.15,232.25);

	this.text_4 = new cjs.Text("3.5", "14px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 25;
	this.text_4.parent = this;
	this.text_4.setTransform(591.15,232.25);

	this.text_5 = new cjs.Text("3", "14px 'Arial'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 17;
	this.text_5.lineWidth = 25;
	this.text_5.parent = this;
	this.text_5.setTransform(102.8,-13.3);

	this.text_6 = new cjs.Text("3", "14px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 17;
	this.text_6.lineWidth = 25;
	this.text_6.parent = this;
	this.text_6.setTransform(523.15,232.25);

	this.text_7 = new cjs.Text("2.5", "14px 'Arial'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 17;
	this.text_7.lineWidth = 25;
	this.text_7.parent = this;
	this.text_7.setTransform(102.8,28.55);

	this.text_8 = new cjs.Text("2.5", "14px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 17;
	this.text_8.lineWidth = 25;
	this.text_8.parent = this;
	this.text_8.setTransform(453.15,232.25);

	this.text_9 = new cjs.Text("2", "14px 'Arial'");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 17;
	this.text_9.lineWidth = 25;
	this.text_9.parent = this;
	this.text_9.setTransform(102.8,69.4);

	this.text_10 = new cjs.Text("2", "14px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 17;
	this.text_10.lineWidth = 25;
	this.text_10.parent = this;
	this.text_10.setTransform(383.15,232.25);

	this.text_11 = new cjs.Text("1.5", "14px 'Arial'");
	this.text_11.textAlign = "right";
	this.text_11.lineHeight = 17;
	this.text_11.lineWidth = 25;
	this.text_11.parent = this;
	this.text_11.setTransform(103.7,112.5);

	this.text_12 = new cjs.Text("1.5", "14px 'Arial'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 17;
	this.text_12.lineWidth = 25;
	this.text_12.parent = this;
	this.text_12.setTransform(313.15,232.25);

	this.text_13 = new cjs.Text("1", "14px 'Arial'");
	this.text_13.textAlign = "right";
	this.text_13.lineHeight = 17;
	this.text_13.lineWidth = 25;
	this.text_13.parent = this;
	this.text_13.setTransform(102.8,155.1);

	this.text_14 = new cjs.Text("1", "14px 'Arial'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 17;
	this.text_14.lineWidth = 25;
	this.text_14.parent = this;
	this.text_14.setTransform(244.15,232.25);

	this.text_15 = new cjs.Text("0", "14px 'Arial'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 17;
	this.text_15.lineWidth = 25;
	this.text_15.parent = this;
	this.text_15.setTransform(105.15,232.25);

	this.text_16 = new cjs.Text("0.5", "14px 'Arial'");
	this.text_16.textAlign = "right";
	this.text_16.lineHeight = 17;
	this.text_16.lineWidth = 25;
	this.text_16.parent = this;
	this.text_16.setTransform(102.8,192.75);

	this.text_17 = new cjs.Text("0.5", "14px 'Arial'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 17;
	this.text_17.lineWidth = 25;
	this.text_17.parent = this;
	this.text_17.setTransform(174.15,232.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape.setTransform(462.35,197.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnAoIAAhPIBOAAIAABPg");
	this.shape_1.setTransform(322.35,197.5);

	this.text_18 = new cjs.Text("CRÍTICOS\nPRIORIDAD I", "bold 11px 'Arial'", "#666666");
	this.text_18.textAlign = "right";
	this.text_18.lineHeight = 15;
	this.text_18.lineWidth = 105;
	this.text_18.parent = this;
	this.text_18.setTransform(654.5,-3.35);

	this.text_19 = new cjs.Text("CLAVES\nPRIORIDAD II", "bold 11px 'Arial'", "#666666");
	this.text_19.textAlign = "right";
	this.text_19.lineHeight = 11;
	this.text_19.lineWidth = 105;
	this.text_19.parent = this;
	this.text_19.setTransform(654.5,199.65);

	this.text_20 = new cjs.Text("ESPECIALISTAS\nPRIORIDAD III", "bold 11px 'Arial'", "#666666");
	this.text_20.lineHeight = 15;
	this.text_20.lineWidth = 132;
	this.text_20.parent = this;
	this.text_20.setTransform(109.5,-3.35);

	this.text_21 = new cjs.Text("FLEXIBLES PRIORIDAD IV", "bold 11px 'Arial'", "#666666");
	this.text_21.lineHeight = 12;
	this.text_21.lineWidth = 105;
	this.text_21.parent = this;
	this.text_21.setTransform(115.85,192.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E6E6E6").p("AAA1PMAAAAqf");
	this.shape_2.setTransform(174.3961,109.2472,1,0.8864);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E6E6E6").p("AAA1PMAAAAqf");
	this.shape_3.setTransform(243.8886,109.6202,1,0.8864);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E6E6E6").p("AAA1PMAAAAqf");
	this.shape_4.setTransform(313.2864,109.6202,1,0.8864);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E6E6E6").p("AAA1PMAAAAqf");
	this.shape_5.setTransform(382.6843,109.6202,1,0.8864);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E6E6E6").p("AAA1PMAAAAqf");
	this.shape_6.setTransform(452.1322,109.6202,1,0.8864);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E6E6E6").p("AAA1PMAAAAqf");
	this.shape_7.setTransform(521.5301,109.6202,1,0.8864);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E6E6E6").p("AAA1PMAAAAqf");
	this.shape_8.setTransform(590.928,109.6202,1,0.8864);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E6E6E6").p("EgrXAAAMBWvAAA");
	this.shape_9.setTransform(382.7093,34.3821,1,0.9998);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E6E6E6").p("EgrXAAAMBWvAAA");
	this.shape_10.setTransform(382.7093,76.1752,1,0.9998);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E6E6E6").p("EgrXAAAMBWvAAA");
	this.shape_11.setTransform(382.7093,118.0113,1,0.9998);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E6E6E6").p("EgrXAAAMBWvAAA");
	this.shape_12.setTransform(382.7093,159.9044,1,0.9998);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E6E6E6").p("EgrXgVPMBWvAAAMAAAAqfMhWvAAAg");
	this.shape_13.setTransform(382.7093,93.2465,1,0.7668);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAhQgMgMAAgVQAAgLAEgJQADgHAFgGQAGgFAFgCQAIgDAKgBQATAAALAMQAMAMAAAUQAAAUgMANQgLAMgTAAQgSAAgLgMgAgQgVQgHAGAAAPQAAAPAHAHQAHAIAJgBQALABAGgIQAHgHAAgPQAAgPgHgGQgGgIgLABQgKgBgGAIg");
	this.shape_14.setTransform(578.525,278);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIArIAAhGIgZAAIAAgPIBDAAIAAAPIgZAAIAABGg");
	this.shape_15.setTransform(570.4,278);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdArIAAhVIARAAIAABGIAqAAIAAAPg");
	this.shape_16.setTransform(564.225,278.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAYArIgHgTIgiAAIgHATIgSAAIAhhVIASAAIAiBVgAgLAJIAWAAIgLgfg");
	this.shape_17.setTransform(555.925,278);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAhQgKgLgBgWQAAgNAFgHQACgHAFgGQAFgFAHgCQAGgDALgBQASAAAMAMQALAMAAAUQAAAVgLAMQgKAMgUAAQgSAAgMgMgAgQgVQgHAHAAAOQAAAOAHAIQAHAIAJgBQALABAGgIQAHgIAAgOQAAgOgGgHQgHgIgLABQgKgBgGAIg");
	this.shape_18.setTransform(370.1,278);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_19.setTransform(363.775,278);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjArIAAhVIAgAAQAJAAAGABQAHADAGAFQAFAGADAJQADAIAAAKQAAALgDAIQgDAKgGAFQgFAFgHACQgIACgGAAgAgSAcIAXgBQADAAADgDQAEgCABgGQACgFAAgLQAAgKgCgFQgCgEgDgEQgEgDgEgBQgCAAgLAAIgIAAg");
	this.shape_20.setTransform(357.9,278);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfArIAAhVIA+AAIAAAPIgtAAIAAASIAqAAIAAAOIgqAAIAAAXIAuAAIAAAPg");
	this.shape_21.setTransform(349.55,278);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAaArIAAhDIgRBDIgQAAIgRhDIAABDIgRAAIAAhVIAaAAIAPA6IAPg6IAaAAIAABVg");
	this.shape_22.setTransform(340.4,278);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAhQgMgMAAgVQAAgLAEgJQADgHAFgGQAGgFAFgCQAIgDAKgBQATAAALAMQAMAMAAAUQAAAUgMANQgLAMgTAAQgSAAgLgMgAgQgVQgHAGAAAPQAAAPAHAHQAHAIAJgBQALABAGgIQAHgHAAgPQAAgPgHgGQgGgIgLABQgKgBgGAIg");
	this.shape_23.setTransform(186.775,278);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAkQgIgHAAgNIARgCQAAAGACAEQADAFAFAAQAGAAACgEQADgDgBgKIAAg3IARAAIAAA2QABALgCAFQgDAHgGAFQgHAFgKAAQgMAAgHgIg");
	this.shape_24.setTransform(178.35,278.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAZArIgIgTIgiAAIgHATIgSAAIAihVIARAAIAiBVgAgLAJIAWAAIgLgfg");
	this.shape_25.setTransform(171.05,278);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgjArIAAhVIAiAAQAMAAADABQAFABADADQAFACACAFQADAEAAAGQAAAGgDAFQgEAEgFADQAHACAFAFQAEAGAAAHQAAAFgDAGQgDAGgEADQgEADgIABIgTABgAgSAcIAcAAQADAAACgDQADgDAAgFQAAgEgCgDQgBgCgEgBIgPgBIgOAAgAgSgIIAXAAQAEAAAEgDQACgDAAgEQAAgEgCgDQgCgCgFAAIgYgBg");
	this.shape_26.setTransform(162.55,278);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAmQgGgDgGgFQgGgGgCgFQgEgIAAgLQAAgSANgLQALgMAUAAQAVAAALAMQAMALAAASQAAATgMALQgLAMgVAAQgLAAgJgEgAgVgQQgIAFAAALQAAAKAIAHQAHAHAOAAQAOAAAIgHQAIgHAAgKQAAgJgIgHQgHgHgPAAQgPAAgGAHg");
	this.shape_27.setTransform(45.55,19.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgqAiIAAhDIAOAAIAAAZIBHAAIAAAQIhHAAIAAAag");
	this.shape_28.setTransform(45.55,28.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgqAeIAAgRIBGAAIAAgqIAPAAIAAA7g");
	this.shape_29.setTransform(45.575,34.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgqAKIAAgRIBVgjIAAATIgTAHIAAAiIATAHIAAASgAgWABIAfALIAAgWg");
	this.shape_30.setTransform(45.55,42.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAmQgIgDgEgFQgGgGgCgFQgEgIAAgLQAAgSANgLQALgMAUAAQAUAAAMAMQAMALAAASQAAATgMALQgLAMgVAAQgLAAgJgEgAgVgQQgIAGAAAKQAAAKAIAHQAGAHAPAAQAPAAAHgHQAIgGAAgLQAAgKgIgGQgIgHgOAAQgOAAgHAHg");
	this.shape_31.setTransform(45.55,103.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgqAJIAAgRIBVAAIAAARg");
	this.shape_32.setTransform(45.55,109.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgqAkIAAggQAAgJACgGQACgIAGgFQAFgFAIgDQAJgDAKAAQAKAAAJACQAKAFAFAFQAFAFACAHQACAIAAAGIAAAhgAgOgPQgGABgCAEQgEADgBAFQgBACAAALIAAAHIA5AAIgCgWQAAgEgDgCQgCgEgHgBQgEgCgLAAQgKAAgEACg");
	this.shape_33.setTransform(45.55,115.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgqAhIAAg/IAOAAIAAAtIATAAIAAgqIAOAAIAAAqIAYAAIAAgvIAOAAIAABBg");
	this.shape_34.setTransform(45.55,123.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgqAqIAAgbIA5gPIg5gOIAAgaIBVAAIAAAQIhDAAIBDAQIAAAQIhDARIBDAAIAAARg");
	this.shape_35.setTransform(45.55,133.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAmQgIgDgEgFQgGgGgCgFQgEgIAAgLQAAgSANgLQALgMAUAAQAUAAAMAMQAMALAAASQAAATgMALQgLAMgVAAQgLAAgJgEgAgVgQQgIAFAAALQAAAKAIAHQAGAHAPAAQAOAAAIgHQAIgHAAgKQAAgJgIgHQgHgHgPAAQgPAAgGAHg");
	this.shape_36.setTransform(45.55,183.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAOALQAIgBACgBQAFgCAAgHQAAgFgEgCQgDgCgKAAIg3AAIAAgRIA2AAQALAAAFABQAHADAFAHQAFAGAAAKQAAAMgIAIQgGAGgOAAg");
	this.shape_37.setTransform(45.625,191.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgqAKIAAgSIBVgiIAAATIgTAHIAAAiIATAHIAAASgAgWABIAfALIAAgWg");
	this.shape_38.setTransform(45.55,198.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgqAkIAAgiQAAgMABgCQABgGACgEQADgDAFgEQAFgCAFAAQAHAAADADQAFAEADAFQACgHAFgFQAFgEAIAAQAFAAAHADQAFADADAEQACADACAJIABAxgAALgPIgFAFIAAAOIAAAPIAXAAIgBgcIgEgGQgCgCgFAAQgDAAgDACgAgYgMQgDACgBAFIAAAYIAUAAIAAgXQgBgGgDgCQgCgCgEAAQgFAAgBACg");
	this.shape_39.setTransform(45.55,207.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgMAXQgJgHAAgMQABgJAIgIIgeAAIAAgRIBVAAIAAAQIgKAAQAGAFACAEQADAFAAAFQAAAKgJAIQgIAIgQAAQgPAAgIgIgAgDgJQgEAEAAAFQAAAGAEADQADAFAKAAQAKgBAEgCQAGgEAAgHQABgFgFgEQgFgEgKAAQgKAAgEAEg");
	this.shape_40.setTransform(65.75,49.8615,1,1.1487);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAFAbQgEgDgBgFIgFgNQgBgKgCgFIgCAAQgFAAgCADQgBACAAAGQgBAEACACQABADAFABIgDAPQgIgCgFgGQgFgGAAgNQABgJADgGQACgGAEgCQADgCALAAIATAAIAMAAIAJgDIAAAQIgGACIgBAAQAEAFABAEQADADAAAGQgBAKgFAGQgFAFgHAAQgGAAgEgCgAAHAJQACAEADAAQAEAAACgDQADgCAAgFQAAgDgDgEQgCgDgEgBQgCgBgFAAIgEAAg");
	this.shape_41.setTransform(66.85,57.7587,1,1.1487);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgMAXQgJgIAAgLQABgKAIgHIgeAAIAAgQIBVAAIAAAPIgKAAQAGAEACAFQADAEAAAFQAAALgJAIQgIAIgQgBQgPABgIgIgAgDgJQgEAEAAAFQAAAGAEADQADAEAKAAQAKAAAEgCQAGgFAAgGQABgFgFgEQgFgEgKAAQgKAAgEAEg");
	this.shape_42.setTransform(65.75,65.943,1,1.1487);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTAIIAAgPIA+AAIAAAPgAgqAIIAAgPIAPAAIAAAPg");
	this.shape_43.setTransform(65.7,71.8874,1,1.1487);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgqAIIAAgPIBVAAIAAAPg");
	this.shape_44.setTransform(65.7,75.7355,1,1.1487);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAIIAAgPIA+AAIAAAPgAgqAIIAAgPIAPAAIAAAPg");
	this.shape_45.setTransform(65.7,79.5836,1,1.1487);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgqAfIAAgRIAeAAQgIgHgBgKQAAgLAJgIQAJgHANgBQARABAIAHQAJAHAAAMQAAAEgDAFQgCAFgGAEIAKAAIAAAQgAgDgJQgEAEAAAFQAAAGAEAEQAEAEAJAAQAKAAAEgDQAGgEAAgHQABgFgFgEQgEgDgLAAQgLAAgDADg");
	this.shape_46.setTransform(65.75,85.528,1,1.1487);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTAIIAAgPIA+AAIAAAPgAgqAIIAAgPIAPAAIAAAPg");
	this.shape_47.setTransform(65.7,91.8171,1,1.1487);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeAdIAAgQIAJAAQgKgIAAgLQAAgFACgGQACgEADgCQADgDAEgBIALgBIAmAAIAAARIgsABIgEAEQgCACAAADQAAAEACADQADAEADABQAFABAJAAIAcAAIAAARg");
	this.shape_48.setTransform(66.8,97.9338,1,1.1487);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgQAcQgHgFgEgGQgEgIgBgJQAAgNAKgJQAJgJANAAQAOAAAKAJQAIAKABAMQAAAJgEAHQgFAIgGAEQgJAEgJAAQgIAAgIgEgAgNgKQgFAFAAAFQAAAGAFAFQAFAEAIAAQAJAAAGgEQAEgFAAgGQAAgFgEgFQgGgEgJAAQgIAAgFAEg");
	this.shape_49.setTransform(66.85,106.3479,1,1.1487);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgpAfIAAgQIAJAAQgFgDgDgFQgDgFAAgGQAAgLAJgHQAJgHAPgBQAPABAIAHQAIAIAAAKQAAAFgCAEQgBAEgGAFIAgAAIAAARgAgZgJQgFAEAAAFQAAAGAFAEQAFAEAJAAQAKAAAEgEQAFgEAAgGQAAgFgEgEQgEgDgKgBQgLAAgEAEg");
	this.shape_50.setTransform(67.975,114.5897,1,1.1487);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AALANQAEgCADgDQADgDAAgFQAAgGgDgDQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgDABQgBABgBAEQgEASgEAGQgEAIgJAAQgIAAgGgHQgGgGAAgNQAAgMAFgGQAEgHAIgCIADAQQgDAAgDADQgBADAAAEQAAAHABADQABAAAAABQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQACgEACgKQADgOAEgFQAEgFAIAAQAJAAAFAHQAGAHABAOQgBAMgFAHQgFAIgIACg");
	this.shape_51.setTransform(66.85,123.0038,1,1.1487);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTAIIAAgPIA+AAIAAAPgAgqAIIAAgPIAPAAIAAAPg");
	this.shape_52.setTransform(65.7,128.5749,1,1.1487);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgMAXQgJgIAAgLQABgKAIgHIgeAAIAAgRIBVAAIAAAQIgKAAQAGAFACAEQADAFAAAEQAAALgJAIQgIAHgQABQgPgBgIgHgAgDgJQgEAEAAAFQAAAGAEAEQADADAKAAQAKABAEgDQAGgFAAgGQABgFgFgEQgFgEgKAAQgKAAgEAEg");
	this.shape_53.setTransform(65.75,134.8639,1,1.1487);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXAVQgIgIgBgMQAAgNAKgIQAKgIARAAIAAAoQAIAAAEgEQADgEAAgEIgCgHQgCgDgFAAIADgRQAJADAFAHQAFAHAAAKQAAAPgLAIQgIAGgOAAQgOAAgJgIgAgPgIQgDAEAAAEQAAAFADAEQAEADAHAAIAAgXQgIAAgDADg");
	this.shape_54.setTransform(66.85,146.6362,1,1.1487);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMAXQgJgHAAgMQABgJAIgIIgeAAIAAgQIBVAAIAAAPIgKAAQAGAFACAEQADAFAAAFQAAAKgJAIQgJAHgPABQgPAAgIgIgAgDgJQgEAEAAAFQAAAGAEADQAEAFAJAAQALAAADgDQAGgEAAgHQABgFgFgEQgFgEgKAAQgLAAgDAEg");
	this.shape_55.setTransform(65.75,154.7935,1,1.1487);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAFAbQgEgCgBgFIgFgNQgBgKgCgFIgCAAQgFAAgCACQgBACAAAGQgBAEACADQACACAEACIgDAPQgIgDgFgGQgFgGAAgMQABgKADgGQACgFAEgCQAEgDAKAAIATABIAMgBIAJgDIAAAQIgHACQAEAGABADQADAEAAAGQgBAKgFAFQgFAFgHAAQgGAAgEgCgAAHAKQADADACAAQAEAAACgDQADgCAAgEQAAgEgDgEQgDgDgDgBIgHAAIgEAAg");
	this.shape_56.setTransform(66.85,166.4814,1,1.1487);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgqAcIAAgQIAfAAQgJgIAAgKQAAgFACgFQABgEAFgDIAHgEIALAAIAlAAIAAAQIghAAQgKAAgCABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQgCADAAADQAAADACAEQACADADABQAEACAIAAIAfAAIAAAQg");
	this.shape_57.setTransform(65.7,174.5221,1,1.1487);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXAVQgJgIAAgNQABgLAEgHQAFgHALgCIADAQQgFAAgDADQgDAEABAEQAAAFAEADQAEAEAKABQAJgBAGgEQAEgDAAgGQAAgEgCgDQgDgEgGAAIACgQQAMACAFAIQAGAFAAANQAAAOgJAHQgIAJgQgBQgOABgJgJg");
	this.shape_58.setTransform(66.85,182.4768,1,1.1487);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAVQgIgIgBgNQAAgNAKgHQAJgIASAAIAAAoQAHAAAFgEQADgEAAgEQAAgEgCgDQgBgCgGgCIADgQQAJADAFAHQAFAHAAAKQAAAPgLAIQgJAGgNAAQgNAAgKgIgAgPgIQgDADAAAFQAAAFADADQAEAEAHAAIAAgYQgGAAgFAEg");
	this.shape_59.setTransform(66.85,190.3165,1,1.1487);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgeAUIAAgPIAJAAQgFgDgDgDQgCgEAAgDQAAgGADgFIAPAFQgDAFAAADQAAADACACQABABAGACQAFACAPAAIATAAIAAAQg");
	this.shape_60.setTransform(66.8,196.2322,1,1.1487);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgqAkIABgxIADgJQACgDAGgDQAFgCAFgBQAFAAAFAEQAGADACAGQACgIAFgFQAGgEAHAAQAFAAAHADQAFADADAFQADADABAIIABAxgAAKgPQgCABgCAFIAAAOIAAAOIAWAAIAAgbQgBgEgCgCQgEgDgEAAQgEAAgDACgAgZgMQgCADgBAEIAAAYIAUAAIAAgXQgBgFgCgCQgCgCgFgBQgEAAgDACg");
	this.shape_61.setTransform(65.7,204.2443,1,1.1487);

	this.text_22 = new cjs.Text("Impacto y Contribución", "bold 14px 'Arial'", "#666666");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 18;
	this.text_22.lineWidth = 183;
	this.text_22.parent = this;
	this.text_22.setTransform(354.35,249.05);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EE9E9E").s().p("AulB5IAAjwIdLAAIAADwg");
	this.shape_62.setTransform(557.6765,279.0024,1.1244,0.7324);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FAE8A9").s().p("AulB5IAAjwIdLAAIAADwg");
	this.shape_63.setTransform(349.5172,279.0024,1.1033,0.7324);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B5D2C1").s().p("Aq/BYIAAivIV/AAIAACvg");
	this.shape_64.setTransform(175.925,279.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EE9E9E").s().p("Ah3HJIAAuRIDvAAIAAORg");
	this.shape_65.setTransform(45.25,32.2613,1,0.9513);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAE8A9").s().p("Ah3HIIAAuPIDvAAIAAOPg");
	this.shape_66.setTransform(45.25,117.3163,1,0.9305);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B5D2C1").s().p("Ah3HJIAAuRIDvAAIAAORg");
	this.shape_67.setTransform(45.25,194.44,1,0.7662);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCEEE5").s().p("A1sKsIAA1XMArZAAAIAAVXg");
	this.shape_68.setTransform(521.35,173.4165,1,0.8118);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F8E2E2").s().p("A1sKsIAA1XMArZAAAIAAVXg");
	this.shape_69.setTransform(521.35,53.3254,1,0.9448);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FEF3D7").s().p("A1sKsIAA1XMArZAAAIAAVXg");
	this.shape_70.setTransform(243.9,53.3583,1,0.9436);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F0F4E7").s().p("A1sKsIAA1XMArZAAAIAAVXg");
	this.shape_71.setTransform(243.9,173.6456,1,0.8152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.text_22},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.shape_1},{t:this.shape},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M2_TMR_TABLA1, new cjs.Rectangle(33.2,-15.3,641.5,303.2), null);


(lib.lineadetablarosa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("A0sAAMApZAAA");
	this.shape.setTransform(322.85,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189.4,-1,267,2);


(lib.info01ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Esta etapa se ha llevado a cabo con los líderes de las distintas áreas. En caso de que se requiera información adicional, un representante de Capital Humano gestionará este proceso.", "16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(-217.25,-29.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AsiSbQhkAAAAhkIAAhbIAAAAIAAipIAAgEIAAhYIAAiqIgDx1IAAhQIAAihIAAg9IAAiWIAAgqQAAhkBkAAIFbAAIAVAAIABAAIAVAAIApAAIAZAAICvAAIHLAAIDIAAIF2AAIAAALQAsAXAABCIAAAqIAACWIAAA9IAAChIAABQIADR1IAACqIAABYIAAAEIAACpIAAAAIAABbQAABBgsAYIAAALg");
	this.shape.setTransform(-219.775,59.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info01ss, new cjs.Rectangle(-310.4,-58.6,181.29999999999998,235.79999999999998), null);


(lib.info01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Recuerda: “Durante la valoración de criticidad se evalúa a la posición y no a quien la ocupa en el momento”.", "19px 'Arial'", "#666666");
	this.text.lineHeight = 21;
	this.text.lineWidth = 482;
	this.text.parent = this;
	this.text.setTransform(-328.5,-49.75,1.1,1.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("EAqDAFII2gAAMhC9AAAQhkAAAAhkIAAnHQAAhkBkAAMBC9AAAIWgAAIFYAAQBkAAAABkIAAHHQAABkhkAAg");
	this.shape.setTransform(-76.725,-25.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info01, new cjs.Rectangle(-390.2,-58.6,627,81.2), null);


(lib.iconoinfoposiciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¿Cómo identificamos los puestos críticos?", "bold 20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 563;
	this.text.parent = this;
	this.text.setTransform(-22,-13);

	this.text_1 = new cjs.Text("En Arca Continental utilizamos la herramienta de criticidad para identificar los puestos con mayor incidencia en los resultados esperados, así como las posibilidades de cubrir una posición con candidatos internos o externos.", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 584;
	this.text_1.parent = this;
	this.text_1.setTransform(-21,19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Egq8AIqQhnAAhKhKQhIhJgBhnIAApfQABhnBIhKQBKhJBnAAMBV5AAAQBnAABJBJQBJBKABBnIAAJfQgBBnhJBJQhJBKhnAAg");
	this.shape.setTransform(265.85,33.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-22.3,599.7,110.8);


(lib.iconoinfobrechadisponibilidad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9C9C9").s().p("AgkBHIAViOIAcAnQAdAqgGAZIgGAkg");
	this.shape.setTransform(79.4913,156.7951,0.7004,0.7004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C9C9C9").s().p("AgbBCQgDgUgEgMQgMgmAegiQAQgRAQgKIAHAgQAHAjACAWIAHAqg");
	this.shape_1.setTransform(58.855,157.1978,0.7004,0.7004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBCACB").s().p("AgNASQgVgNgCgIIAMgZIA9AlIgdAUIgVgLg");
	this.shape_2.setTransform(66.5379,151.4371,0.7004,0.7004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BBCACB").s().p("AgiAIIA4ggIANAYQgCAQgjAJg");
	this.shape_3.setTransform(71.3881,151.6998,0.7004,0.7004);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D9393").s().p("AAbAYQgFgBgFgEQgFgGgBgJIAAgCQgFgFgFABIgBAAQgGgBgEAFIAAACQAAAJgGAGQgEAEgGABIguAAIgCAAQgOgIAAgNIAAgDIgNABIgCgLIAQgDQAEgIALgCIAsAAQALAAAFALQAGgDAGAAQAHAAAFADQAGgLALAAIAsAAQALACADAIIARADIgDALIgMgBIAAADQAAANgOAIIgCAAgAAYgIIAAAMQAAAGAEACIArAAQAFgEAAgEIAAgMQAAgBgFgCIgqAAQgDAAgCADgAhLgIIAAAMQAAAEAFAEIAqAAQAFgCAAgGIAAgMQgBgDgEAAIgqAAQgFACAAABg");
	this.shape_4.setTransform(68.604,138.2522,0.7004,0.7004);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#71706F").s().p("ABjA9IgGgtQgBgIgGgIQgLgOgVAAQgKAAgLAGQgmARgbgUIgBAAQgQgGgMACQgaACgFAbIgGAuQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQgEgjACgXQACgiAQgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAGgHQAKgHAUgBQAQgBAPgFQANgFAJAAQBAgBATAbIABACQAIACAFALQAIAQgCAdIgCAlQgBAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_5.setTransform(68.4914,132.4727,0.7004,0.7004);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDAB86").s().p("AgJgCIAPAAIA0AEIgUgBIhgACg");
	this.shape_6.setTransform(68.3589,133.3845,0.7004,0.7004);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDAB86").s().p("AAgABIg/AAIggACIAwgEIAPgBIAgABIAgAEIgggCg");
	this.shape_7.setTransform(68.6566,134.4175,0.7004,0.7004);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9BD9C").s().p("AgRCJQgNgFgPgLQgfgVgSgeIgBgEIAAgTIgBAAQgEgBgEgEIAAAAQgCgDgDgQIgEgXQgCgJAAgGQAAgHADgBQACgBAEAEQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABIACgBQgDgQAAgTQAAgqAWgKIAAAAIAXgSQAcgRAbAAIAGAAQAbgBAeASQAOAIAKAKQAWAKAAAqQAAATgEAQIgBAEIADgDIAFgEQAEgDACABQAEACgDASIgEAZIgFATQgDAEgFABIgBAAIgCAXIgBAEQggArgnAUIgBAAQgMADgJAAQgJAAgIgDg");
	this.shape_8.setTransform(68.6461,138.7756,0.7004,0.7004);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDAB86").s().p("AgIA1QhMgDASgTQARgQAIgeIAFgcIAkgHQAkgGAAANQABAXAhBIQgaABgYAAIgcAAg");
	this.shape_9.setTransform(68.8974,148.5629,0.7004,0.7004);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6D8D8").s().p("AipBOIgBhNQADgdAUgQQATgPAggIQAQgEANgBQAzgFA1AAQA8gBAPAGQAXAJASAvQASArAAAnIgBAMg");
	this.shape_10.setTransform(69.5145,156.3209,0.7004,0.7004);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC686B").s().p("AgNBmQgGgDAAgGIAAhYIiwhYQgGgEABgFQgBgFAGgEQAGgEAIAAQAIAAAGAEICnBSICphSQAFgEAIAAQAJAAAFAEQAGAEgBAFQABAFgGAEIixBZIAABXQABAGgHADQgGAEgHAAQgIAAgFgEg");
	this.shape_11.setTransform(68.0437,114.9641,0.7004,0.7004);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhzFSQgZgCgTgVIiBiYIgmgsQgcgigMgQQgOgSABgTQACgSARgOQAagYAigcQARgNAUACQATACAOARIB4CNIFRmaQAlgtAtAmIAzArQATARABATQACAUgQATImkIBQgWAbggAAgAkagdQgjAbgYAWQgKAIAAAHQAAAHAIAKIBMBdQBPBdAyA6QANAOAQAAQATgBAOgQIGkoBQAIgKAAgIQgBgJgKgJIgygqQgNgLgJABQgKAAgKANIlmGzIiOilQgHgIgJgBIgCAAQgHAAgGAFg");
	this.shape_12.setTransform(116.6508,155.2702,0.7004,0.7004);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC686B").s().p("AiVExIimjDIgogxQgWgcAagYQAagXAigaQAMgKAOACQAOABAKAMICDCZIFbmmQAPgRAPgCQAPgBASAPIAyArQAdAagYAdImkIBQgSAVgYABIgDAAQgXAAgQgTg");
	this.shape_13.setTransform(116.6645,155.2887,0.7004,0.7004);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D4D4D").s().p("AgKANQgNgGgBgHIAJgRIAoAXIgXAMQgFgCgHgDg");
	this.shape_14.setTransform(90.5789,89.2772,0.7004,0.7004);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D4D4D").s().p("AgZAIIApgcIAJASQAAAGgQAJIgOAIg");
	this.shape_15.setTransform(94.0984,89.0846,0.7004,0.7004);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#744C28").s().p("ABIAyQADgMgCgOQgCgOgaAAQggADgOgBQgTgBgRgNIgNgNQgIAcgEADQgDACgDATIgEATIgIgMQgIgMAAgCQACgCABgJQABgLgBgIQgCgGAAgKQABgMAEgDIAAgBQgBgCAZgLQAcgLAZgCQAbgDAhAUQAgASABAPQABAPgDATQgCAUgEABQgEAAgDAHIgDAGg");
	this.shape_16.setTransform(92.5302,75.5045,0.7004,0.7004);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AAYBZQgNggAAgFQgBgQgDA1IhfAAQAAhPABhMIARgOQAUgNAXAIIAXADQAaAEAMAIQAMAIArCXg");
	this.shape_17.setTransform(97.7886,94.8869,0.7004,0.7004);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AgHBZIgDgeQgBgMAAAFQgBAIgLAdIhEAAQANg5ASgxQARgvAJgGQAUgMApgDQAXgIAUANQALAGAFAIQAEBMACBPg");
	this.shape_18.setTransform(86.7442,94.8869,0.7004,0.7004);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9BD9C").s().p("AgDBkIgLgCIgBAAQgcgPgWgeIgBgDIgCgRIAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAIgBgCIAAAAIgEgNIgCgRIgBgBQgCgNADgBQADgBAFAFIACACIgDgbQAAgeAPgIIABAAIARgNQAUgMAUAAIAEAAQATAAAUANQAKAGAHAGQAPAIAAAeIgBARIgBAHIABABIACgDQADgDACABQABABAAAFIgEAbQgCALgBACIAAAAQgCADgEAAIAAAAIgBAOIgBADQgMAVgWAQIgUALQgGACgGAAIgEAAg");
	this.shape_19.setTransform(92.5295,80.0576,0.7004,0.7004);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EDAB86").s().p("AgxAlIAMgcQAMgdAAgKQABgJAYADIAaAGQABAIADALQAFAVAMAMQAOAOg2ACg");
	this.shape_20.setTransform(92.3544,87.0191,0.7004,0.7004);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1C140B").s().p("AgBAAQgBgHACAAQACAAAAAHQAAAIgCAAQgCAAABgIg");
	this.shape_21.setTransform(49.2031,86.1254,0.7004,0.7004);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#927954").s().p("AgCALQgCgFAAgGQAAgFACgFQABgFABAAQAFAAAAAPQAAAQgFAAQgBAAgBgFg");
	this.shape_22.setTransform(49.2031,85.9853,0.7004,0.7004);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C140B").s().p("AgCAAQAAgHACAAQACAAABAHQgBAIgCAAQgCAAAAgIg");
	this.shape_23.setTransform(37.6466,86.1254,0.7004,0.7004);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#927954").s().p("AgDALQgBgFAAgGQAAgFABgFQACgFABAAQAFAAAAAPQAAAQgFAAQgBAAgCgFg");
	this.shape_24.setTransform(37.6466,85.9853,0.7004,0.7004);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C140B").s().p("AiIBlQgKgJAAgOQAAgNAJgKQgOgHAAgSQAAgNALgJQgEgEAAgGQAAgHAEgGQAEgFAHgCQgCgFAAgFQAAgOAKgJQAKgKAOAAIACAAQADgJAIgFQAHgGAKABQAHAAAHADQACgLAKgHQAJgHALgBQAIABAJAEQAHgIANAAQAPAAAJAMIADAAQAGAAAFAFQAFAEAAAHQAFgCAHAAQAPAAALALQALALAAAPIAAABIAFgBQANAAAIAJQAJAIAAAMQAAAKgFAHQAKAIAAAOQAAAQgMAJQAQALAAASQAAAOgKAJQgKALgOgBQgKABgJgHQgIgFgEgJQgIgDgFgFQgFgHAAgJIAAgCIgJAAQgPAAgMgLQgLgLAAgQIAAgDQgEACgHAAQgJAAgGgGQgHgEgCgJIgBAAQgIAAgGgEQgGgFgCgHIgBgCIAAAEQAAAOgNAIQAEAHAAAJQAAALgHAJQgHAIgKADIABAFQAAANgLAFQgCAMgJAJQgJAIgNAAQgNAAgKgKg");
	this.shape_25.setTransform(43.1272,77.6156,0.7004,0.7004);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A25F37").s().p("AgEgLQAEgIAEABQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQACAQgJALIgIAJg");
	this.shape_26.setTransform(49.3209,84.5106,0.7004,0.7004);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A25F37").s().p("AAAALQgJgLACgQIAEgCQADgBAFAIIADAfQgFgDgDgGg");
	this.shape_27.setTransform(37.3006,84.5106,0.7004,0.7004);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A25F37").s().p("AgbBxQgggVgSgmQgEgCgFgHQgJgMACgQIAEgBQAFgBAEAIIgJgnQgGgsASgVIATgUQAYgVAegDIAJAAQAeADAYAVQANAKAGAKQASAVgGAsIgJAnQAEgIAFABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQACAQgIAMIgJAJQgSAmggAVIgcANQgMgDgPgKg");
	this.shape_28.setTransform(43.3204,82.0281,0.7004,0.7004);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C140B").s().p("AgNAvIgFABQgHAAgFgFQgFgFAAgHIABgEIgGABQgLAAgJgIQgIgJAAgLQAAgSAQgHQgGgGAAgJQAAgIAFgGQAGgGAIAAQAKAAAHAJQAHgCAHAAQANAAAKAKQALAKAAAPQAAAKgGAIQANADAGAMIAIgCQAJAAAHAHQAGAGAAAJQAAAJgGAGQgHAGgJAAQgHAAgGgFQgJAKgOAAQgPAAgJgOg");
	this.shape_29.setTransform(38.2945,86.388,0.7004,0.7004);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C140B").s().p("AgzApQgHgHAAgJQAAgKAHgHQAGgHAKAAQAAgIAHgGQAGgHAJAAQABgLAJgGQAGgHALAAQAHAAAHAEQAGgGAIAAQAGAAAGAFQAFAFAAAIQAAAHgFAFQgGAFgGAAIgBAAQgDARgSAEIAAACQAAALgIAJQgJAHgKABQgGAAgEgCQgHAJgLAAQgKAAgGgGg");
	this.shape_30.setTransform(48.6428,87.4561,0.7004,0.7004);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D9D9E").s().p("AgPAqIgTgbIgBgTQAEgXAZgOQAXAsATAng");
	this.shape_31.setTransform(49.5358,97.3842,0.7004,0.7004);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D9D9E").s().p("AgYArQACgsAGgZQAEgMACgEIAjAcIgJA5g");
	this.shape_32.setTransform(38.0143,97.3142,0.7004,0.7004);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUgLIAUgHIAVATIgQASg");
	this.shape_33.setTransform(41.6914,93.8297,0.7004,0.7004);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUACIAWgUIATAGIgZAgg");
	this.shape_34.setTransform(44.6331,93.7947,0.7004,0.7004);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCBCB").s().p("AAFANIgYgaIAOgFIAZARIgNAUg");
	this.shape_35.setTransform(41.7439,94.0398,0.7004,0.7004);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCBCB").s().p("AgTAAIAbgRIAMAEIgZAZIgCAGg");
	this.shape_36.setTransform(44.528,93.9698,0.7004,0.7004);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9F5733").s().p("AgmAFIARgGQACgCACgDQACgGgBgUIAhgBIgBANQAAAOABADIADACIATAGIgdAbIgMgNIgPAPg");
	this.shape_37.setTransform(43.3724,92.5865,0.7004,0.7004);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRgCIgUgdIAlgOIAmANIgbAbIgNAzg");
	this.shape_38.setTransform(43.3373,95.1955,0.7004,0.7004);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#626568").s().p("AgFA8Igfg2IAPgGIgYgFIgSgfIA/gXIBAAYIgeAjIgTAAIAMAIIgZA0g");
	this.shape_39.setTransform(43.4249,96.141,0.7004,0.7004);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#606060").s().p("AgFA6IgggzIAPgHIgZgEIgTgeIALgEIAZgJIACgBIAdgJIAdAKIAlARIgdAeIgUAAIAMAJIgbAxg");
	this.shape_40.setTransform(43.3724,96.2286,0.7004,0.7004);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9D9D9E").s().p("Ag+A7IgDgKQgDgHADgJIADgRQACgGgEgIIgIgMQgKgQgBABIAfgMIAZgJIAhgMIAcAMIAyAXIgFAHQgFAFgBAFQgDAFACAEIABAFQAJAYgIASIgEAJg");
	this.shape_41.setTransform(43.1447,96.1585,0.7004,0.7004);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ABC9CE").s().p("AhUPhQgPgBgNgJQgMgKgGgOIhukIIjHhcIj2BQQgPAFgQgFQgQgEgLgMQhKhRg4hgQgHgNAAgPQAAgOAHgNIB2jXIg0jVIimhsQgNgJgHgPQgGgOACgQQASiFA2h+QAGgNALgJQALgIAOgDICygeICGiuIgOiXQgBgPAHgOQAGgOANgIQB8hUCTgtQAOgEAOADQAPADAKAKIBsBgIDbgDIBshoQAWgVAeAIQCRAlB/BMQANAIAIAOQAHANgBAQIgJCgICMCqIDDAaQAfAEAMAcQA4B2AWB9QADAQgGAPQgGAPgNAJIiwB9IgtDWICGDgQAHANABAOQAAAPgHANQg1BfhDBNQgLAMgPAFQgPAEgQgEIkFhLIjEBiIhlEOQgFAOgNAKQgMAKgQABQgeAEglABIgmABQgsAAgrgEg");
	this.shape_42.setTransform(67.6595,116.6298,0.7004,0.7004);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EFEFEF").s().p("AhgRwQgRgBgPgLQgOgKgHgRIh9kuIjkhpIkZBbQgSAGgSgFQgSgFgNgNQhVheg/huQgJgOAAgRQAAgRAIgOICIj2Ig8j0Ii+h8QgPgKgIgRQgHgQACgTQAWiZA9iPQAHgPAMgKQANgKAQgCIDMgjICZjHIgQitQgBgRAHgPQAIgQAOgKQCQhhCngyQAQgFAQAEQAQADANALIB7BvID6gFIB8h2QAMgMAQgEQAQgEAPAEQCkAqCUBYQAPAKAIAPQAJAQgBARIgLC4ICgDBIDgAfQAQACANAKQANAJAHAPQA/CGAaCRQAEASgHARQgHARgPALIjKCPIgzD0ICZEAQAIAPABARQAAARgIAOQg8BshNBZQgMAOgSAFQgSAGgRgGIkrhVIjgBwIhzE1QgHAQgOALQgOALgSACQgqAEgjACIgsABQgyAAgxgFg");
	this.shape_43.setTransform(67.4674,117.7914,0.7004,0.7004);

	this.text = new cjs.Text("Brecha de disponibilidad.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 187;
	this.text.parent = this;
	this.text.setTransform(71.05,209.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3EFB9").s().p("AiOj4IEdD4IkdD5g");
	this.shape_44.setTransform(188.95,131.575);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E3EFB9").s().p("APWeaIsCAAIkXAAItWAAQh4AAAAh4IAAj1IAAgBIAAjvIAAhtIAAiiIAAlIIAAisIAAh3IAAjbIAAhQIAAhQIAAoRIAAAAIAAjTIAAjRMAgjAAAMAAAAsHgAwRtuIAAuzQAAh4B4AAINWAAIEXAAIMCAAIA8AAIAAQrg");
	this.shape_45.setTransform(70.425,161.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.text},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-32.8,237.10000000000002,389.2);


(lib.fondoscroll1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEFEF").s().p("EAiUAeaInqAAIhkAAIxlAAIkxAAIi0AAIrQAAIi+AAIi+AAIkEAAIjmAAIsMAAIg8AAIsCAAIkYAAItWAAQh4AAAAh4IAAmnIAAirIAAn0IAAhRIAAhPIAAgKIAAi+IAAihIAAgLIAAnnIAAiQIAAgBIAAgZIAAAAIAAqAMCLVAAAIAAImIAABaIAAAAIAAAZIAAABIAACQIAAHnIAAALIAAFfIAAAKIAABPIAABRIAAH0IAACrIAAGnQAAB4h4AAgEhFqgRKIAArXQAAh4B4AAIM4AAIAeAAIEYAAIMCAAIA8AAIMMAAIDmAAIEEAAIC+AAIC+AAILQAAIC0AAIExAAIRlAAIBkAAIHqAAMAhfAAAQB4AAAAB4IAALXg");
	this.shape.setTransform(445.925,194.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,891.9,389.2);


(lib.flechainstrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1455,9.1455,0.7838,0.7838);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgaIADA1");
	this.shape.setTransform(0.4,2.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,2.3,7.3), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgZIADAz");
	this.shape.setTransform(0.425,2.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-0.9,2.3,7.1000000000000005), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgaQACAZAAAX");
	this.shape.setTransform(0.4012,2.6501);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-1,2.3,6.9), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgaQACAZAAAX");
	this.shape.setTransform(0.4012,2.7501);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-0.9,2.3,6.9), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgYIADAx");
	this.shape.setTransform(0.4,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-1,2.3,6.9), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgXIADAv");
	this.shape.setTransform(0.4,2.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-1,2.3,6.8), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgaIgDA1");
	this.shape.setTransform(0.4,2.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,2.3,7.3), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgZIgDAz");
	this.shape.setTransform(0.425,2.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-0.9,2.3,7.1000000000000005), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgaQgCAZAAAX");
	this.shape.setTransform(0.3992,2.6551);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-1,2.3,6.9), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgYIgDAx");
	this.shape.setTransform(0.425,2.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-0.9,2.3,6.9), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgYIgDAx");
	this.shape.setTransform(0.4,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-1,2.3,6.9), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgUQAAABgCAt");
	this.shape.setTransform(0.4005,2.1411);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-1,2.3,6.8), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGgTIgLAn");
	this.shape.setTransform(0.875,2.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,3.2,6), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEAPIAJgd");
	this.shape.setTransform(0.725,1.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.7,-0.9,2.9000000000000004,5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgKgSQAJAFAEANQACAIADAP");
	this.shape.setTransform(1.1687,2.0975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.9,-0.8,3.9,6.2), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AALgSQgMAIgGAh");
	this.shape.setTransform(1.0848,2.0969);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,3.9000000000000004,6.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDgKIAHAV");
	this.shape.setTransform(0.625,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.7,-0.9,2.7,4.2), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAHATIgNgl");
	this.shape.setTransform(0.875,1.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.8,-0.9,3.4000000000000004,5.800000000000001), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAJQAAgJAIgKQAKgLAQgDQAOgDAOAGQARAHAGANQAEAMgFANIhOACQgGgFAAgMg");
	mask.setTransform(4.4013,2.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8885F").s().p("AgrAJQAAgJAIgKQAKgLAQgDQAOgDAOAGQARAHAGANQAEAMgFANIhOACQgGgFAAgMg");
	this.shape.setTransform(4.4013,2.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,8.8,5.2), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAtBeIAKgdQAFgPAAgPQAAgTgFgNQgHgOgMgMQgFgEgVgNQgQgKgGgLIgDACIgPAQIgNAPQgKAPgCARQgCARADASQACAKAEAMIAFAOIADAFQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAgBIAAAAIgBAAIgBgDIgKgPQgGgJgBgIIgGgyQgEgXAEgPQAEgPANgPQAIgKAEgCQAogVAnAUQAOAIAJAcQADAKABANQAAAJgCAHIgDATIADAVQACAJgDAKIgIARIgNAcg");
	mask.setTransform(6.9433,9.4747);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8D61").s().p("AAtBeIAKgdQAFgPAAgPQAAgTgFgNQgHgOgMgMQgFgEgVgNQgQgKgGgLIgDACIgPAQIgNAPQgKAPgCARQgCARADASQACAKAEAMIAFAOIADAFQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAgBIAAAAIgBAAIgBgDIgKgPQgGgJgBgIIgCgaIgEgYQgEgXAEgPQAEgPANgPQAIgKAEgCQAogVAnAUQAOAIAJAcQADAKABANQAAAJgCAHIgDATIADAVQACAJgDAKIgIARIgNAcg");
	this.shape.setTransform(6.9433,9.4747);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AAtBeIAKgdQAFgPAAgPQAAgTgFgNQgHgOgMgMQgFgEgVgNQgQgKgGgLIgDACIgPAQIgNAPQgKAPgCARQgCARADASQACAKAEAMIAFAOIADAFQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAgBIAAAAIgBAAIgBgDIgKgPQgGgJgBgIIgGgyQgEgXAEgPQAEgPANgPQAIgKAEgCQAogVAnAUQAOAIAJAcQADAKABANQAAAJgCAHIgDATIADAVQACAJgDAKIgIARIgNAcg");
	this.shape_1.setTransform(6.9433,9.4747);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,13.8,19), null);


(lib.Group_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgaIADA1");
	this.shape.setTransform(0.425,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17_0, new cjs.Rectangle(-0.7,-0.9,2.3,7.300000000000001), null);


(lib.Group_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgZIADAz");
	this.shape.setTransform(0.4,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16_0, new cjs.Rectangle(-0.7,-1,2.3,7.2), null);


(lib.Group_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgXIADAv");
	this.shape.setTransform(0.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15_0, new cjs.Rectangle(-0.7,-1,2.3,6.8), null);


(lib.Group_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgYIACAx");
	this.shape.setTransform(0.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14_0, new cjs.Rectangle(-0.7,-1,2.3,7), null);


(lib.Group_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgaQACAZAAAX");
	this.shape.setTransform(0.4012,2.6751);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13_0, new cjs.Rectangle(-0.7,-1,2.3,6.9), null);


(lib.Group_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgBgXIADAv");
	this.shape.setTransform(0.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12_0, new cjs.Rectangle(-0.7,-0.9,2.3,6.7), null);


(lib.Group_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgaIgDA1");
	this.shape.setTransform(0.425,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11_0, new cjs.Rectangle(-0.7,-0.9,2.3,7.300000000000001), null);


(lib.Group_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgZIgDAz");
	this.shape.setTransform(0.4,2.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10_0, new cjs.Rectangle(-0.7,-1,2.3,7.2), null);


(lib.Group_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgXIgDAv");
	this.shape.setTransform(0.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_0, new cjs.Rectangle(-0.7,-1,2.3,6.8), null);


(lib.Group_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AABgYIgCAx");
	this.shape.setTransform(0.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8_0, new cjs.Rectangle(-0.7,-1,2.3,7), null);


(lib.Group_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgaQgCAZAAAX");
	this.shape.setTransform(0.3988,2.6751);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_0, new cjs.Rectangle(-0.7,-1,2.3,6.9), null);


(lib.Group_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AACgXIgDAv");
	this.shape.setTransform(0.4,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_0, new cjs.Rectangle(-0.7,-0.9,2.3,6.7), null);


(lib.Group_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGgTIgLAn");
	this.shape.setTransform(0.875,2.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_0, new cjs.Rectangle(-0.7,-0.9,3.2,6), null);


(lib.Group_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgEAPIAJgd");
	this.shape.setTransform(0.675,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_0, new cjs.Rectangle(-0.8,-0.9,3,5), null);


(lib.Group_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgJgSQAMAJAFAg");
	this.shape.setTransform(1.1918,2.0869);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(-0.8,-0.8,3.8,6.2), null);


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAKgSQgMAJgFAg");
	this.shape.setTransform(1.0582,2.0869);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(-0.7,-0.8,3.8,6.2), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgDgKIAHAV");
	this.shape.setTransform(0.6,1.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(-0.8,-0.9,2.8,4.2), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAHATIgNgl");
	this.shape.setTransform(0.925,1.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(-0.7,-0.9,3.3,5.7), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgrAJQABgJAHgKQAKgLAQgDQAOgDAOAGQASAHAFANQAFALgGAOIhOACQgGgFAAgMg");
	mask.setTransform(4.4136,2.6);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8885F").s().p("AgrAJQABgJAHgKQAKgLAQgDQAOgDAOAGQASAHAFANQAFALgGAOIhOACQgGgFAAgMg");
	this.shape.setTransform(4.4136,2.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(0,0,8.9,5.2), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAsBeIALgdQAFgQAAgOQABgSgGgOQgGgNgOgNQgFgFgVgMQgPgKgHgLIgRASIgOAPQgJANgCASQgCASADASIAFAWIAGAOIADAFIAAACIgBAAIAAAAIgBAAIgBgDIgKgPQgGgJgBgIIgCgaIgEgYQgEgXAEgPQAEgRAMgNQAIgJAFgDQAngWAnAVQAOAIAJAbQAFAOAAAJQAAAGgCALQgDAMAAAHQAAAHADAOQABALgCAIIgIARIgNAcIAAAAIgBgBg");
	mask.setTransform(6.9175,9.5289);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC8D61").s().p("AAsBeIALgdQAFgQAAgOQABgSgGgOQgGgNgOgNQgFgFgVgMQgPgKgHgLIgRASIgOAPQgJANgCASQgCASADASIAFAWIAGAOIADAFIAAACIgBAAIAAAAIgBAAIgBgDIgKgPQgGgJgBgIIgCgaIgEgYQgEgXAEgPQAEgRAMgNQAIgJAFgDQAngWAnAVQAOAIAJAbQAFAOAAAJQAAAGgCALQgDAMAAAHQAAAHADAOQABALgCAIIgIARIgNAcIAAAAIgBgBg");
	this.shape.setTransform(6.9175,9.5289);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBEC3F").s().p("AAsBeIALgdQAFgQAAgOQABgSgGgOQgGgNgOgNQgFgFgVgMQgPgKgHgLIgRASIgOAPQgJANgCASQgCASADASIAFAWIAGAOIADAFIAAACIgBAAIAAAAIgBAAIgBgDIgKgPQgGgJgBgIIgCgaIgEgYQgEgXAEgPQAEgRAMgNQAIgJAFgDQAngWAnAVQAOAIAJAbQAFAOAAAJQAAAGgCALQgDAMAAAHQAAAHADAOQABALgCAIIgIARIgNAcIAAAAIgBgBg");
	this.shape_1.setTransform(6.9175,9.5289);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,13.8,19.1), null);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,151.9,152);


(lib.circulo2instrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ACAFA1").p("AB9AAQAAAzgkAlQglAlg0AAQgzAAgkglQglglAAgzQAAgzAlglQAkgkAzAAQA0AAAlAkQAkAlAAAzg");
	this.shape.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,27,27);


(lib.circulo1instrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9BDAD").s().p("Ag/BAQgagbgBglQABglAagaQAbgbAkAAQAlAAAbAbQAbAagBAlQABAlgbAbQgbAbglgBQgkABgbgbg");
	this.shape.setTransform(104.5759,9.0501,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.5,1,16.200000000000003,16.2);


(lib.circulo_blanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmrGsQixixAAj7QAAj6CxixQCxixD6AAQD7AACxCxQCxCxAAD6QAAD7ixCxQixCxj7AAQj6AAixixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121,121);


(lib.cajagdemc1t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Puestos críticos", "bold 18px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(50.1,23.15);

	this.text_1 = new cjs.Text("Son aquellas posiciones que tienen un alto impacto en la estrategia de negocio y requieren conocimientos o habilidades especializadas que deben ser reclutadas y/o desarrolladas en un largo período de tiempo.\n", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 401;
	this.text_1.parent = this;
	this.text_1.setTransform(50.1,55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Aq7MkIAA5HMA/zAAAQBnAABJBJQBJBKAABnIAARTQAABnhJBJQhJBKhnAAgEg02AMkQhoAAhKhKQhIhJgBhnIAAxTQABhnBIhKQBKhJBoAAMAp7AAAIAAZHg");
	this.shape.setTransform(363.35,80.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AlPjNIKfAAIlQGbg");
	this.shape_1.setTransform(244.4,165.45,1,1,0,0,0,5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,726.7,186.1);


(lib.bulletrojoarcachico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA3030").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(5.85,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,6.9,6.9);


(lib.bulletgddecolorrojoarca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA3030").s().p("AhRBSQgighAAgxQAAgvAigiQAhghAwgBQAwABAhAhQAjAiAAAvQAAAxgjAhQghAigwAAQgwAAghgig");
	this.shape.setTransform(11.6,11.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.2,23.1);


(lib.barraScrollVertical = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D95A5").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape.setTransform(17.05,1.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3030").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_1.setTransform(17.05,1.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#648F34").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_2.setTransform(17.05,1.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C67124").s().p("AiXASQgHAAgGgFQgFgFgBgIQABgGAFgGQAGgFAHgBIEvAAQAHABAGAFQAFAGABAGQgBAIgFAFQgGAFgHAAg");
	this.shape_3.setTransform(17.05,1.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,3.7);


(lib.barrabcdespliega = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg9tAGuIAAtbMB7bAAAIAANbg");
	this.shape.setTransform(394.975,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790,86);


(lib.AS_LG_153ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3314,37.2681,1.1113,1.1113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.7774,59.2439,0.2769,0.3563);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.7774,55.7169,0.2769,0.3563);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.2875,50.3356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,21.8,49.8,54.400000000000006);


(lib.AS_LG_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3314,37.2681,1.1113,1.1113);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.7774,59.2439,0.2769,0.3563);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.7774,55.7169,0.2769,0.3563);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.2875,50.3356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,21.8,49.8,54.400000000000006);


(lib.AS_LG_151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgnBBQgGgEACgIIAPgyIAAgFIgPgyQgCgIAGgEQAHgFAGAFIBDA5QAEADAAAEQAAAFgEADIhDA5QgDACgDAAQgDAAgEgCg");
	this.shape.setTransform(11.1265,9.9809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA3030").s().p("AhFBGQgdgdAAgpQAAgpAdgdQAdgdAoAAQApAAAdAdQAdAdAAApQAAApgdAdQgdAegpgBQgoABgdgeg");
	this.shape_1.setTransform(9.925,9.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,19.9);


(lib.tema_entrada_titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// destape TITULO
	this.instance = new lib.mascaratapar("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.65,-226.55,1,1,0,0,0,303.1,17);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({alpha:0},12,cjs.Ease.get(1)).wait(1));

	// TITULO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgLgKAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(-293.7,-229.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.775,-230.1);

	this.text = new cjs.Text("Identificación de puestos críticos", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 504;
	this.text.parent = this;
	this.text.setTransform(-282.05,-241.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulo("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.15,32.8,1,1,0,0,0,94.9,73.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(51).to({startPosition:0},0).to({regX:95,regY:73.6,scaleX:0.0421,scaleY:0.0421,x:153.2},15,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// circulo bco
	this.instance_2 = new lib.circulo_blanco("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,20.1,0.2397,0.2397,0,0,0,1.2,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:2,scaleY:2,x:149.3,alpha:1},10,cjs.Ease.get(1)).wait(62).to({startPosition:0},0).to({scaleX:11.1008,scaleY:11.1008,x:180.3,y:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// circulo rojo
	this.instance_3 = new lib.CirculoRojo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.4,0,0.0329,0.0329);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:2,scaleY:2,y:20},9,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:9.8803,scaleY:9.8788,x:200.95,y:-22.2},11,cjs.Ease.get(1)).to({_off:true},5).wait(12));

	// Layer 6
	this.instance_4 = new lib.numerodetema("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(98.1,-13.6,1,1,0,0,0,69.8,69.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({x:-40.1,y:-113.6},9,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({x:98.1,y:-13.6},12,cjs.Ease.get(1)).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550.4,-771,1501.3,1501.6);


(lib.tablainfoposiciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape.setTransform(415.325,187.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAbQgJgKAAgRQAAgTALgJQAJgIAMAAQAPAAAJAKQAJAJAAARQAAAMgEAJQgEAHgIAEQgIAEgJAAQgOABgJgKgAgOgTQgGAGAAANQAAAOAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgOQAAgNgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_1.setTransform(409.625,184.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPAtQgHgFgEgIQgDgIAAgLQgBgLAEgHQAEgJAGgEQAHgFAJAAQAFAAAFADQAGACACAFIAAgjIAMAAIAABgIgLAAIAAgJQgHAKgMAAQgHAAgIgEgAgMgHQgFAHAAANQAAANAGAHQAFAHAHAAQAHAAAGgHQAFgGAAgNQAAgOgFgGQgFgHgJAAQgGAAgGAGg");
	this.shape_2.setTransform(401.9,183.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARAkIAAgqQgBgHgBgEQgCgDgDgCQgEgDgEAAQgGAAgGAFQgFAFgBANIAAAmIgLAAIAAhFIAKAAIAAAKQAIgMAOAAQAGAAAFACQAGADACADQACAEABAFIABAMIAAAqg");
	this.shape_3.setTransform(394.7,184.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAfQgGgFAAgKQAAgEACgFQACgEAEgDQAEgCAFAAIAKgCQAOgCAGgDIABgDQAAgHgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgLgCQABgHAEgFQAEgFAGgCQAHgDAIAAQAJAAAGADQAGABACAEQADADABAFIAAALIAAAOQAAARABAEQABAFACAEIgMAAQgCgDgBgGQgGAGgGACQgFACgHAAQgMABgGgGgAgCAFIgKABIgFAFQgCACAAADQAAAFAEADQAEADAGAAQAGAAAGgDQAFgDADgFQABgEAAgIIAAgEQgGADgMACg");
	this.shape_4.setTransform(387.175,184.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAIAEADQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgDgEgDQgCgCgKgCQgMgDgFgCQgFgCgCgEQgDgEAAgFQAAgFACgEQACgEAEgDIAHgEIALgBQAHAAAGADQAGACADAEQADAEACAHIgMACQgBgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIAEACIAKAEIASAFQAEABADAEQADAFAAAGQAAAFgDAFQgEAGgGACQgHADgIAAQgNABgHgGg");
	this.shape_5.setTransform(380.025,184.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAxIAAhGIALAAIAABGgAgFghIAAgPIALAAIAAAPg");
	this.shape_6.setTransform(375.2,183.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAjIgbhFIANAAIAPApIADAOIAEgOIAQgpIAMAAIgaBFg");
	this.shape_7.setTransform(370.325,184.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAHQgIAFgMAAQgOABgJgKgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_8.setTransform(363.175,184.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAkIAAhFIALAAIAAAKQAEgHADgDQACgCAEAAQAHAAAGAEIgEALQgFgDgEAAQgEAAgCADQgDACgBAEQgCAHAAAHIAAAkg");
	this.shape_9.setTransform(357.75,184.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAsQgGgFAAgKQAAgEACgFQACgEAEgDQAEgDAFgBIAKgBQAOgCAGgDIABgDQAAgGgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgHAEgFQAEgFAGgCQAHgDAIAAQAJAAAGADQAGABACAEQADADABAFIAAAKIAAAPQAAARABAEQABAFACAEIgMAAQgCgDgBgGQgGAGgGACQgFACgHAAQgMABgGgGgAgCASIgKABIgFAFQgCACAAADQAAAFAEADQAEADAGAAQAGAAAGgDQAFgDADgFQABgEAAgIIAAgEQgGADgMACgAgGgeIAIgTIAQAAIgPATg");
	this.shape_10.setTransform(347.525,183.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAkIAAhFIALAAIAAAKQAEgHADgDQACgCAEAAQAHAAAGAEIgEALQgFgDgEAAQgEAAgCADQgDACgCAEQgBAHAAAHIAAAkg");
	this.shape_11.setTransform(342.1,184.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAfQgGgFAAgKQAAgEACgFQACgEAEgDQAEgCAFAAIAKgCQAOgCAGgDIABgDQAAgHgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgLgCQABgHAEgFQAEgFAGgCQAHgDAIAAQAJAAAGADQAGABACAEQADADABAFIAAALIAAAOQAAARABAEQABAFACAEIgMAAQgCgDgBgGQgGAGgGACQgFACgHAAQgMABgGgGgAgCAFIgKABIgFAFQgCACAAADQAAAFAEADQAEADAGAAQAGAAAGgDQAFgDADgFQABgEAAgIIAAgEQgGADgMACg");
	this.shape_12.setTransform(335.525,184.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAuQgDgCgCgEQgCgDABgLIAAgnIgJAAIAAgJIAJAAIAAgSIAKgHIAAAZIAMAAIAAAJIgMAAIAAAoIABAGIACADIAEABIAFgBIACALIgJABQgGAAgDgCg");
	this.shape_13.setTransform(330.05,183.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAIAEADQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgDgEgDQgCgCgKgCQgMgDgFgCQgFgCgCgEQgDgEAAgFQAAgFACgEQACgEAEgDIAHgEIALgBQAHAAAGADQAGACADAEQADAEACAHIgMACQgBgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABABIAEACIAKAEIASAFQAEABADAEQADAFAAAGQAAAFgDAFQgEAGgGACQgHADgIAAQgNABgHgGg");
	this.shape_14.setTransform(324.675,184.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAHQgIAFgMAAQgOABgJgKgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_15.setTransform(317.575,184.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAbQgJgKAAgQQAAgRAJgKQAJgKANABQAPgBAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAGQgIAGgMABQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_16.setTransform(411.075,167.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAHAEAEQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgDgEgCQgCgCgKgDQgMgDgFgCQgFgCgCgEQgDgFAAgEQAAgFACgEQACgEAEgDIAHgDIALgBQAHAAAGACQAGACADAEQADAEACAHIgMACQgBgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEADIAKAEIASAFQAEABADAEQADAFAAAFQAAAHgDAEQgEAGgGACQgHAEgIAAQgNAAgHgGg");
	this.shape_17.setTransform(403.875,167.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWAbQgJgKAAgQQAAgRAJgKQAJgKANABQAPgBAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAGQgIAGgMABQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_18.setTransform(393.125,167.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAhQgGgCgCgDQgCgEgBgFIgBgLIAAgrIALAAIAAAmIABANQABAEAEADQADADAGAAQAFAAAEgDQAEgDADgFQACgEAAgJIAAglIALAAIAABFIgKAAIAAgKQgJAMgNAAQgGAAgFgDg");
	this.shape_19.setTransform(385.6,167.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASAxIAAgiQgCAEgFACQgFADgGAAQgLAAgJgKQgJgKAAgQQAAgLADgIQAEgJAHgEQAHgEAIAAQAMAAAIALIAAgKIAKAAIAABggAgMggQgFAGAAAOQAAANAFAGQAGAHAHAAQAIAAAFgGQAGgHAAgMQAAgOgGgHQgGgHgIAAQgHAAgFAHg");
	this.shape_20.setTransform(377.925,168.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAbQgJgKAAgRQAAgSALgKQAJgIAMABQAPgBAJAKQAJAJAAARQAAAMgEAJQgEAHgIAEQgIAFgJAAQgOAAgJgKgAgOgTQgGAGAAANQAAAOAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgOQAAgNgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_21.setTransform(366.975,167.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAuQgEgCgBgEQgBgDAAgLIAAgnIgJAAIAAgJIAJAAIAAgSIAKgHIAAAZIAMAAIAAAJIgMAAIAAAoIABAGIACADIAEABIAFgBIACALIgJABQgGAAgDgCg");
	this.shape_22.setTransform(361.45,165.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAHAEAEQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgDgEgCQgCgCgKgDQgMgDgFgCQgFgCgCgEQgDgFAAgEQAAgFACgEQACgEAEgDIAHgDIALgBQAHAAAGACQAGACADAEQADAEACAHIgMACQgBgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEADIAKAEIASAFQAEABADAEQADAFAAAFQAAAHgDAEQgEAGgGACQgHAEgIAAQgNAAgHgGg");
	this.shape_23.setTransform(356.075,167.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAbQgJgKAAgQQAAgRAJgKQAJgKANABQAPgBAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAGQgIAGgMABQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_24.setTransform(349.025,167.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPAhQgGgCgCgDQgCgEgBgFIgBgLIAAgrIALAAIAAAmIABANQABAEAEADQADADAGAAQAFAAAEgDQAEgDADgFQACgEAAgJIAAglIALAAIAABFIgKAAIAAgKQgJAMgNAAQgGAAgFgDg");
	this.shape_25.setTransform(341.5,167.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAxIAAhgIALAAIAAAJQAEgFAFgDQAFgCAFAAQAKAAAGAEQAIAFADAIQADAJABAKQAAAKgFAIQgEAJgHAEQgHAFgIAAQgFAAgFgDQgEgCgEgEIAAAigAgNggQgGAHAAAOQAAAMAGAHQAFAGAIAAQAHAAAGgHQAFgGAAgNQAAgOgFgGQgGgHgHAAQgHAAgGAHg");
	this.shape_26.setTransform(334.25,168.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_27.setTransform(325.05,165.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAbQgJgKAAgQQAAgRAJgKQAJgKANABQAPgBAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAGQgIAGgMABQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_28.setTransform(319.875,167.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAJAAARIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgDQAFgEADgHIAMABQgDAKgIAHQgIAFgMAAQgOAAgJgJgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAGQgGAFAAAJIAmAAIAAAAg");
	this.shape_29.setTransform(412.975,149.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVAbQgJgJAAgSQAAgKAEgJQAEgIAHgEQAIgFAIAAQAMABAHAFQAHAGACALIgLACQgCgIgEgDQgFgEgFAAQgJAAgFAGQgGAHABANQgBAOAGAHQAGAGAHAAQAHAAAEgEQAFgFACgJIALACQgBAMgJAHQgIAHgLgBQgNAAgJgJg");
	this.shape_30.setTransform(406.1,149.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAJAAARIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgDQAFgEADgHIAMABQgDAKgIAHQgIAFgMAAQgOAAgJgJgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAGQgGAFAAAJIAmAAIAAAAg");
	this.shape_31.setTransform(398.725,149.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAQAkIAAgqQABgHgCgEQgCgDgDgCQgEgDgEAAQgHAAgFAFQgGAFAAANIAAAmIgMAAIAAhFIALAAIAAAKQAIgMAOAAQAGAAAFACQAFADADADQADAEAAAFIABAMIAAAqg");
	this.shape_32.setTransform(391.3,149.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAJAAARIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgDQAFgEADgHIAMABQgDAKgIAHQgIAFgMAAQgOAAgJgJgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAGQgGAFAAAJIAmAAIAAAAg");
	this.shape_33.setTransform(383.775,149.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgBAuQgDgCgCgEQgCgDABgLIAAgnIgJAAIAAgJIAJAAIAAgSIAKgHIAAAZIANAAIAAAJIgNAAIAAAoIABAGIACADIAEABIAGgBIABALIgJABQgGAAgDgCg");
	this.shape_34.setTransform(378.3,148.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAkIAAhFIAKAAIAAAKQAEgHAEgDQADgCADAAQAGAAAHAEIgEALQgEgDgFAAQgEAAgCADQgDACgBAEQgCAHgBAHIAAAkg");
	this.shape_35.setTransform(374.65,149.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAJAAARIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgDQAFgEADgHIAMABQgDAKgIAHQgIAFgMAAQgOAAgJgJgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAGQgGAFAAAJIAmAAIAAAAg");
	this.shape_36.setTransform(368.075,149.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAxIAAhgIAKAAIAAAJQAEgFAFgDQAFgCAFAAQAJAAAIAEQAGAFAEAIQAEAJgBAKQAAAKgDAIQgEAJgIAEQgHAFgIAAQgFAAgFgDQgEgCgDgEIAAAigAgNggQgGAHAAAOQAAAMAFAHQAGAGAIAAQAHAAAFgHQAGgGAAgNQAAgOgGgGQgFgHgHAAQgHAAgGAHg");
	this.shape_37.setTransform(360.85,150.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAxIAAhgIALAAIAABgg");
	this.shape_38.setTransform(351.65,147.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgZAfQgGgFAAgKQAAgEACgFQACgEAEgDQAEgBAFgBIAKgCQAOgCAGgDIABgCQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgLgCQABgHAEgFQAEgFAGgCQAHgCAIgBQAJAAAGACQAGADACADQADADABAFIAAALIAAAPQAAAQABAEQABAFACAEIgMAAQgCgEgBgFQgGAGgGACQgFACgHAAQgMABgGgGgAgCAFIgKABIgFAEQgCADAAADQAAAFAEADQAEAEAGgBQAGAAAGgDQAFgCADgGQABgEAAgIIAAgEQgGADgMACg");
	this.shape_39.setTransform(346.425,149.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgPAhQgFgCgDgDQgCgEgBgFIgCgLIAAgrIANAAIAAAmIABANQABAEADADQADADAGAAQAEAAAFgDQAEgDACgFQACgEAAgJIAAglIANAAIAABFIgLAAIAAgKQgJAMgNAAQgFAAgGgDg");
	this.shape_40.setTransform(338.95,149.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAbQgJgJABgSQAAgKADgJQAEgIAHgEQAIgFAIAAQALABAIAFQAHAGACALIgLACQgCgIgEgDQgFgEgGAAQgIAAgFAGQgFAHAAANQAAAOAFAHQAFAGAIAAQAHAAAEgEQAGgFAAgJIAMACQgBAMgJAHQgIAHgLgBQgNAAgJgJg");
	this.shape_41.setTransform(332.05,149.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAfQgGgFAAgKQAAgEACgFQACgEAEgDQAEgBAFgBIAKgCQAOgCAGgDIABgCQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgLgCQABgHAEgFQAEgFAGgCQAHgCAIgBQAJAAAGACQAGADACADQADADABAFIAAALIAAAPQAAAQABAEQABAFACAEIgMAAQgCgEgBgFQgGAGgGACQgFACgHAAQgMABgGgGgAgCAFIgKABIgFAEQgCADAAADQAAAFAEADQAEAEAGgBQAGAAAGgDQAFgCADgGQABgEAAgIIAAgEQgGADgMACg");
	this.shape_42.setTransform(321.025,149.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAxIAAhgIALAAIAABgg");
	this.shape_43.setTransform(315.75,147.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgZAfQgGgGAAgIQAAgFACgFQACgEAEgDQAEgBAFgBIAKgDQAOgBAGgCIABgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgHAEgFQAEgFAGgCQAHgDAIABQAJAAAGABQAGACACAEQADADABAFIAAALIAAAPQAAAQABAFQABAEACAEIgMAAQgCgEgBgEQgGAFgGADQgFABgHABQgMgBgGgFgAgCAEIgKADIgFADQgCADAAADQAAAFAEADQAEADAGAAQAGAAAGgCQAFgEADgFQABgEAAgIIAAgEQgGADgMABg");
	this.shape_44.setTransform(412.975,131.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgZAfQgGgGAAgIQAAgFACgFQACgEAEgDQAEgBAFgBIAKgDQAOgBAGgCIABgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgHAEgFQAEgFAGgCQAHgDAIABQAJAAAGABQAGACACAEQADADABAFIAAALIAAAPQAAAQABAFQABAEACAEIgMAAQgCgEgBgEQgGAFgGADQgFABgHABQgMgBgGgFgAgCAEIgKADIgFADQgCADAAADQAAAFAEADQAEADAGAAQAGAAAGgCQAFgEADgFQABgEAAgIIAAgEQgGADgMABg");
	this.shape_45.setTransform(401.775,131.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgJANAAQAPAAAIAJQAJAKAAAQIAAADIgzAAQABAMAGAFQAFAHAIAAQAHAAAEgDQAFgEADgIIAMACQgDALgIAFQgIAHgMAAQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAGQgGAFAAAJIAmAAIAAAAg");
	this.shape_46.setTransform(394.325,131.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgSAkIAAhFIALAAIAAAKQAEgHADgDQACgCAEAAQAHAAAGAEIgEALQgFgDgEAAQgEAAgCADQgDACgBAEQgCAHAAAHIAAAkg");
	this.shape_47.setTransform(388.9,131.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgZAsQgGgGAAgIQAAgFACgFQACgEAEgDQAEgCAFgBIAKgDQAOgBAGgCIABgDQAAgHgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgHAEgFQAEgFAGgCQAHgDAIABQAJAAAGABQAGACACAEQADADABAFIAAAKIAAAQQAAAQABAFQABAEACAEIgMAAQgCgEgBgEQgGAFgGADQgFABgHAAQgMAAgGgFgAgCARIgKADIgFADQgCADAAADQAAAFAEADQAEADAGAAQAGAAAGgCQAFgEADgFQABgEAAgIIAAgEQgGADgMABgAgGgeIAIgTIAQAAIgPATg");
	this.shape_48.setTransform(382.325,130.05);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFAwIAAhfIALAAIAABfg");
	this.shape_49.setTransform(373.35,130);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgJANAAQAPAAAIAJQAJAKAAAQIAAADIgzAAQABAMAGAFQAFAHAIAAQAHAAAEgDQAFgEADgIIAMACQgDALgIAFQgIAHgMAAQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAGQgGAFAAAJIAmAAIAAAAg");
	this.shape_50.setTransform(368.175,131.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSAkIAAhFIAKAAIAAAKQAEgHAEgDQADgCAEAAQAFAAAHAEIgEALQgFgDgEAAQgEAAgCADQgDACgCAEQgCAHAAAHIAAAkg");
	this.shape_51.setTransform(359.05,131.275);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZAfQgGgGAAgIQAAgFACgFQACgEAEgDQAEgBAFgBIAKgDQAOgBAGgCIABgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgHAEgFQAEgFAGgCQAHgDAIABQAJAAAGABQAGACACAEQADADABAFIAAALIAAAPQAAAQABAFQABAEACAEIgMAAQgCgEgBgEQgGAFgGADQgFABgHABQgMgBgGgFgAgCAEIgKADIgFADQgCADAAADQAAAFAEADQAEADAGAAQAGAAAGgCQAFgEADgFQABgEAAgIIAAgEQgGADgMABg");
	this.shape_52.setTransform(352.475,131.35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgVAbQgJgJAAgSQABgKADgIQAEgJAIgFQAHgDAIAAQAMAAAHAFQAHAGACAKIgMADQgBgIgEgEQgFgDgFAAQgJAAgFAHQgGAGAAANQAAAOAGAGQAFAHAIAAQAHAAAFgFQAEgEACgIIAMABQgDAMgHAHQgJAGgLABQgNAAgJgKg");
	this.shape_53.setTransform(345.6,131.35);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXAbQgJgJAAgSQAAgSALgKQAJgHAMAAQAPAAAJAJQAJAJAAARQAAANgEAHQgEAIgIAFQgIADgJABQgOAAgJgKgAgOgTQgGAHAAAMQAAANAGAHQAGAHAIAAQAJAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_54.setTransform(338.225,131.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgFAwIAAhfIALAAIAABfg");
	this.shape_55.setTransform(332.95,130);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgXAbQgJgJAAgSQAAgSALgKQAJgHAMAAQAPAAAJAJQAJAJAAARQAAANgEAHQgEAIgIAFQgIADgJABQgOAAgJgKgAgOgTQgGAHAAAMQAAANAGAHQAGAHAIAAQAJAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_56.setTransform(327.775,131.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAsQgKgGgEgMQgGgNAAgNQAAgOAGgMQAGgLAKgGQALgGAMAAQAPAAAKAHQAJAIAEANIgMADQgEgKgGgFQgGgFgKAAQgLAAgHAFQgHAGgDAJQgDAIgBAKQAAAMAEAJQAEAJAHAFQAIAEAIAAQALAAAHgGQAHgGADgMIANADQgEAQgKAIQgLAIgPAAQgPAAgKgGg");
	this.shape_57.setTransform(319.25,130);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BDCCD4").ss(2.8).p("AJGB6QgRBlg7BSQgeApgoAkQiVCIjcAWQg6AGg+gFQg2gFg6gOQi1gwhyh7QgVgXgRgXQhQhvgCiHQgBgVACgZQAKh8BOhmQAMgPgCgOIgFglQgDgWgEgQQgShOg1hzIgNgcQAIABANACQAbAHA3ANQAxALAhAKQB6AiBKApQAHAEAKgCQALgBA0gJQAmgGAYgDIABAAQCigPCSA5QBrAqBMBJQArApAiAzQA+BfAKBpQAEA0gJA5g");
	this.shape_58.setTransform(365.3493,152.489,1.1968,1.1968);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag4IbQg3gFg6gOQi1gwhxh7QgWgXgQgXQhRhvgCiHQAAgVABgZQALh8BOhmQAMgPgDgOIgFglQgCgWgEgQQgShOg2hzIgNgcIAVADIBTAUQAxALAhAKQB6AiBKApQAHAEAKgCIA+gKQAmgGAYgDIACAAQChgPCTA5QBqAqBNBJQArApAiAzQA+BfAJBpQAFA0gJA5QgRBlg8BSQgeApgoAkQiVCIjcAWQgfADggAAQgcAAgcgCg");
	this.shape_59.setTransform(365.7609,152.7554,1.1968,1.1968);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGAHIAAgNIANAAIAAANg");
	this.shape_60.setTransform(194.075,187.775);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgXAbQgJgKAAgRQAAgTALgJQAJgIAMAAQAPAAAJAKQAJAJAAARQAAAMgEAJQgEAHgIAEQgIAEgJABQgOAAgJgKgAgOgTQgGAGAAANQAAAOAGAGQAGAHAIAAQAJAAAGgHQAGgHAAgNQAAgNgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_61.setTransform(188.375,184.95);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgPAtQgHgFgDgIQgFgIAAgLQAAgLAEgHQADgJAIgEQAGgFAJAAQAGAAAFADQAFACADAFIAAgjIALAAIAABgIgKAAIAAgJQgIAKgMAAQgHAAgIgEgAgMgHQgFAHAAANQAAANAFAHQAGAHAHAAQAHAAAGgHQAFgGABgNQgBgOgFgGQgGgHgHAAQgIAAgFAGg");
	this.shape_62.setTransform(180.65,183.675);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AARAkIAAgqQAAgHgCgEQgBgDgEgCQgDgDgFAAQgHAAgFAFQgFAFAAANIAAAmIgMAAIAAhFIAKAAIAAAKQAIgMANAAQAHAAAFACQAFADADADQADAEABAFIABAMIAAAqg");
	this.shape_63.setTransform(173.45,184.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZAfQgGgFAAgKQAAgFACgEQACgEAEgCQAEgDAFgBIAKgBQAOgCAGgDIABgDQAAgHgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgIAEgEQAEgFAGgCQAHgDAIAAQAJABAGACQAGACACADQADADABAFIAAALIAAAOQAAARABAEQABAFACAEIgMAAQgCgDgBgGQgGAGgGACQgFACgHABQgMAAgGgGgAgCAEIgKACIgFAFQgCACAAADQAAAFAEADQAEAEAGAAQAGgBAGgDQAFgDADgFQABgEAAgIIAAgEQgGACgMACg");
	this.shape_64.setTransform(165.925,184.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAHAEAEQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgDgEgCQgCgDgKgCQgMgDgFgCQgFgCgCgEQgDgEAAgFQAAgFACgEQACgEAEgDIAHgDIALgCQAHABAGACQAGACADAEQADAEACAHIgMACQgBgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEADIAKAEIASAFQAEABADAEQADAFAAAFQAAAHgDAEQgEAGgGACQgHADgIABQgNAAgHgGg");
	this.shape_65.setTransform(158.775,184.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFAxIAAhGIALAAIAABGgAgFghIAAgPIALAAIAAAPg");
	this.shape_66.setTransform(153.95,183.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEAjIgbhFIANAAIAPApIADAOIAEgOIAQgpIAMAAIgaBFg");
	this.shape_67.setTransform(149.075,184.95);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgWAbQgJgKAAgQQAAgRAJgKQAJgKANAAQAPAAAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAHQgIAFgMABQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_68.setTransform(141.925,184.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgSAkIAAhFIAKAAIAAAKQAFgHADgDQADgCAEAAQAFAAAHAEIgEALQgEgDgFAAQgEAAgCADQgDACgBAEQgDAHAAAHIAAAkg");
	this.shape_69.setTransform(136.5,184.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZAsQgGgFAAgKQAAgFACgEQACgEAEgCQAEgEAFgBIAKgBQAOgCAGgDIABgDQAAgGgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgIAEgEQAEgFAGgCQAHgDAIAAQAJABAGACQAGACACADQADADABAFIAAAKIAAAPQAAARABAEQABAFACAEIgMAAQgCgDgBgGQgGAGgGACQgFACgHABQgMAAgGgGgAgCARIgKACIgFAFQgCACAAADQAAAFAEADQAEAEAGAAQAGgBAGgDQAFgDADgFQABgEAAgIIAAgEQgGACgMACgAgGgeIAIgSIAQAAIgPASg");
	this.shape_70.setTransform(126.275,183.65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgSAkIAAhFIAKAAIAAAKQAEgHAEgDQADgCAEAAQAFAAAHAEIgEALQgEgDgFAAQgEAAgCADQgDACgBAEQgCAHgBAHIAAAkg");
	this.shape_71.setTransform(120.85,184.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgZAfQgGgFAAgKQAAgFACgEQACgEAEgCQAEgDAFgBIAKgBQAOgCAGgDIABgDQAAgHgEgDQgEgEgJAAQgIAAgEADQgEADgCAHIgLgBQABgIAEgEQAEgFAGgCQAHgDAIAAQAJABAGACQAGACACADQADADABAFIAAALIAAAOQAAARABAEQABAFACAEIgMAAQgCgDgBgGQgGAGgGACQgFACgHABQgMAAgGgGgAgCAEIgKACIgFAFQgCACAAADQAAAFAEADQAEAEAGAAQAGgBAGgDQAFgDADgFQABgEAAgIIAAgEQgGACgMACg");
	this.shape_72.setTransform(114.275,184.95);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgBAuQgEgCgBgEQgCgDAAgLIAAgnIgIAAIAAgJIAIAAIAAgSIAMgHIAAAZIALAAIAAAJIgLAAIAAAoIAAAGIACADIAEABIAFgBIACALIgJABQgHAAgCgCg");
	this.shape_73.setTransform(108.8,183.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAHAEAEQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgDgEgCQgCgDgKgCQgMgDgFgCQgFgCgCgEQgDgEAAgFQAAgFACgEQACgEAEgDIAHgDIALgCQAHABAGACQAGACADAEQADAEACAHIgMACQgBgGgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEADIAKAEIASAFQAEABADAEQADAFAAAFQAAAHgDAEQgEAGgGACQgHADgIABQgNAAgHgGg");
	this.shape_74.setTransform(103.425,184.95);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgWAbQgJgKAAgQQAAgRAJgKQAJgKANAAQAPAAAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAHQgIAFgMABQgOAAgJgKgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_75.setTransform(96.325,184.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgWAbQgJgJAAgRQAAgRAJgKQAJgJANAAQAPAAAIAJQAJAKAAAQIAAADIgzAAQABALAGAGQAFAHAIAAQAHAAAEgEQAFgDADgIIAMACQgDALgIAFQgIAHgMAAQgOAAgJgKgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_76.setTransform(182.725,167.15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAIAEADQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgEgEgBQgCgDgKgCQgMgDgFgCQgFgCgCgEQgDgFAAgEQAAgFACgEQACgEAEgDIAHgDIALgBQAHAAAGACQAGACADAEQADAEACAHIgMABQgBgFgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEAEIAKADIASAFQAEABADAEQADAFAAAFQAAAHgDAFQgEAFgGACQgHAEgIAAQgNgBgHgFg");
	this.shape_77.setTransform(175.575,167.15);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAbQgJgJAAgRQAAgRAJgKQAJgJANAAQAPAAAIAJQAJAKAAAQIAAADIgzAAQABALAGAGQAFAHAIAAQAHAAAEgEQAFgDADgIIAMACQgDALgIAFQgIAHgMAAQgOAAgJgKgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_78.setTransform(164.775,167.15);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPAhQgFgCgDgDQgDgEgBgFIgBgLIAAgrIAMAAIAAAmIACANQAAAEAEADQADADAGAAQAEAAAFgDQAFgDACgFQABgEAAgJIAAglIAMAAIAABFIgKAAIAAgKQgJAMgMAAQgHAAgFgDg");
	this.shape_79.setTransform(157.3,167.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AASAxIAAgiQgCAEgFACQgFADgGAAQgLAAgJgKQgJgKAAgQQAAgLADgIQAEgJAHgEQAHgEAIAAQAMAAAIALIAAgKIAKAAIAABggAgMggQgFAGAAAOQAAANAFAGQAGAHAHAAQAIAAAFgGQAGgHAAgMQAAgOgGgHQgGgHgIAAQgHAAgFAHg");
	this.shape_80.setTransform(149.625,168.425);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgXAbQgJgJAAgSQAAgSALgKQAJgIAMABQAPAAAJAJQAJAJAAARQAAAMgEAIQgEAIgIAEQgIAFgJAAQgOAAgJgKgAgOgTQgGAGAAANQAAAOAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgOQAAgNgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_81.setTransform(138.625,167.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgBAuQgDgCgCgEQgBgDAAgLIAAgnIgJAAIAAgJIAJAAIAAgSIAKgHIAAAZIANAAIAAAJIgNAAIAAAoIABAGIACADIAEABIAGgBIABALIgJABQgHAAgCgCg");
	this.shape_82.setTransform(133.15,165.975);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTAfQgHgGgCgLIAMgCQABAIAEADQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgEgEgBQgCgDgKgCQgMgDgFgCQgFgCgCgEQgDgFAAgEQAAgFACgEQACgEAEgDIAHgDIALgBQAHAAAGACQAGACADAEQADAEACAHIgMABQgBgFgEgDQgDgDgHAAQgIAAgDADQgEADAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEAEIAKADIASAFQAEABADAEQADAFAAAFQAAAHgDAFQgEAFgGACQgHAEgIAAQgNgBgHgFg");
	this.shape_83.setTransform(127.775,167.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgWAbQgJgJAAgRQAAgRAJgKQAJgJANAAQAPAAAIAJQAJAKAAAQIAAADIgzAAQABALAGAGQAFAHAIAAQAHAAAEgEQAFgDADgIIAMACQgDALgIAFQgIAHgMAAQgOAAgJgKgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_84.setTransform(120.675,167.15);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgPAhQgFgCgDgDQgDgEgBgFIgBgLIAAgrIAMAAIAAAmIACANQAAAEAEADQADADAGAAQAEAAAFgDQAFgDACgFQABgEAAgJIAAglIAMAAIAABFIgKAAIAAgKQgJAMgMAAQgHAAgFgDg");
	this.shape_85.setTransform(113.2,167.225);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgeAxIAAhgIALAAIAAAJQAEgFAFgDQAEgCAHAAQAIAAAIAEQAGAFAEAIQADAJAAAKQAAAKgDAIQgFAJgHAEQgHAFgIAAQgFAAgFgDQgEgCgDgEIAAAigAgNggQgGAHAAAOQAAAMAFAHQAGAGAIAAQAHAAAFgHQAGgGAAgNQAAgOgGgGQgFgHgHAAQgHAAgGAHg");
	this.shape_86.setTransform(105.95,168.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgFAxIAAhhIALAAIAABhg");
	this.shape_87.setTransform(176.35,147.95);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAHQgIAFgMAAQgOABgJgKgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_88.setTransform(171.125,149.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgOAtQgIgFgDgIQgFgIAAgLQABgLADgHQADgJAIgEQAGgFAJAAQAFAAAGADQAEACAEAFIAAgjIAMAAIAABgIgLAAIAAgJQgIAKgMAAQgIAAgGgEgAgMgHQgFAHAAANQAAANAFAHQAGAHAHAAQAHAAAGgHQAFgGABgNQgBgOgFgGQgGgHgHAAQgIAAgFAGg");
	this.shape_89.setTransform(163.45,148.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWAbQgJgJAAgSQAAgQAJgKQAJgKANAAQAPAAAIAKQAJAKAAAQIAAADIgzAAQABALAGAHQAFAGAIAAQAHAAAEgEQAFgDADgHIAMABQgDAKgIAHQgIAFgMAAQgOABgJgKgAAUgGQgBgJgEgEQgFgHgJAAQgIAAgFAFQgGAGAAAJIAmAAIAAAAg");
	this.shape_90.setTransform(152.475,149.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgSAkIAAhFIAKAAIAAAKQAFgHADgDQADgCADAAQAHAAAGAEIgEALQgFgDgEAAQgEAAgCADQgDACgBAEQgCAHAAAHIAAAkg");
	this.shape_91.setTransform(147.05,149.225);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgSAnIAAAJIgLAAIAAhgIALAAIAAAiQAIgJALAAQAGAAAGADQAGACADAFQAEAFACAGQACAGAAAIQAAASgJAJQgIAKgNAAQgLAAgHgKgAgNgGQgGAGAAAMQAAANAEAFQAGAKAJAAQAHAAAGgHQAFgHAAgNQAAgNgFgHQgGgGgHAAQgHAAgGAHg");
	this.shape_92.setTransform(140.725,148.025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAjAkIAAgrIgBgLQgBgDgCgCQgEgCgEAAQgHAAgFAFQgFAFAAALIAAAoIgLAAIAAgtQAAgIgDgEQgCgEgIAAQgEAAgFADQgEADgCAFQgCAFAAAJIAAAkIgMAAIAAhFIALAAIAAAJQADgFAGgDQAFgDAIAAQAHAAAFADQAEAEACAFQAJgMANAAQAKAAAGAGQAGAGAAAMIAAAvg");
	this.shape_93.setTransform(131.2,149.225);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgXAbQgJgKAAgRQAAgTALgJQAJgIAMAAQAPAAAJAKQAJAJAAARQAAAMgEAJQgEAHgIAFQgIADgJAAQgOABgJgKgAgOgTQgGAGAAANQAAAOAGAGQAGAHAIAAQAJAAAGgHQAGgGAAgOQAAgNgGgGQgGgHgJAAQgIAAgGAHg");
	this.shape_94.setTransform(121.775,149.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAQAkIAAgqQAAgHgBgEQgCgDgDgCQgDgDgFAAQgGAAgGAFQgGAFABANIAAAmIgNAAIAAhFIALAAIAAAKQAIgMANAAQAHAAAFACQAFADADADQACAEACAFIABAMIAAAqg");
	this.shape_95.setTransform(114.3,149.225);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgFAwIAAhfIALAAIAABfg");
	this.shape_96.setTransform(173,130.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgWAbQgJgKAAgRQAAgQAJgKQAJgKANABQAPgBAIAKQAJAJAAARIAAADIgzAAQABAMAGAFQAFAHAIAAQAHAAAEgDQAFgEADgIIAMACQgDALgIAFQgIAHgMgBQgOAAgJgJgAAUgGQgBgIgEgFQgFgHgJAAQgIAAgFAGQgGAFAAAJIAmAAIAAAAg");
	this.shape_97.setTransform(167.775,131.45);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgSAkIAAhFIAKAAIAAAKQAEgHAEgDQADgCAEAAQAFAAAHAEIgEALQgEgDgFAAQgEAAgCADQgDACgBAEQgCAHgBAHIAAAkg");
	this.shape_98.setTransform(158.65,131.375);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAfQgGgFAAgJQAAgFACgFQACgEAEgDQAEgBAFgBIAKgDQAOgBAGgCIABgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgCAIIgLgCQABgIAEgEQAEgFAGgCQAHgCAIAAQAJAAAGABQAGACACAEQADADABAFIAAALIAAAPQAAAQABAEQABAFACAEIgMAAQgCgEgBgFQgGAGgGADQgFABgHAAQgMAAgGgFgAgCAFIgKACIgFADQgCADAAADQAAAFAEADQAEADAGAAQAGAAAGgCQAFgDADgGQABgEAAgIIAAgEQgGACgMADg");
	this.shape_99.setTransform(152.125,131.45);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgVAbQgJgJAAgSQAAgKAEgIQAEgJAHgFQAIgEAIABQALAAAIAFQAHAGACAKIgLADQgCgIgEgEQgFgDgGAAQgIAAgFAHQgGAGABANQgBAOAGAGQAFAHAIAAQAHAAAEgEQAGgFABgJIALACQgBAMgJAHQgHAGgMAAQgNAAgJgJg");
	this.shape_100.setTransform(145.2,131.45);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgXAbQgJgKAAgRQAAgTALgJQAJgHAMAAQAPgBAJAKQAJAJAAARQAAANgEAHQgEAIgIAFQgIADgJAAQgOAAgJgJgAgOgTQgGAHAAAMQAAANAGAHQAGAHAIAAQAJAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_101.setTransform(137.875,131.45);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgFAwIAAhfIALAAIAABfg");
	this.shape_102.setTransform(132.6,130.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgXAbQgJgKAAgRQAAgTALgJQAJgHAMAAQAPgBAJAKQAJAJAAARQAAANgEAHQgEAIgIAFQgIADgJAAQgOAAgJgJgAgOgTQgGAHAAAMQAAANAGAHQAGAHAIAAQAJAAAGgHQAGgHAAgNQAAgMgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_103.setTransform(127.375,131.45);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgVAsQgLgGgEgMQgGgNAAgNQAAgPAGgLQAGgMALgFQAKgGAMAAQAOAAAKAHQALAIADANIgNADQgDgKgGgFQgHgFgKAAQgJAAgIAFQgIAGgDAJQgCAIAAAKQgBALAEAKQADAJAIAFQAIAEAHAAQALAAAIgGQAHgGADgMIANADQgEAQgLAIQgKAIgQAAQgOAAgJgGg");
	this.shape_104.setTransform(118.85,130.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#BDCCD4").ss(2.8).p("AJGB6QgJA2gUAuQgRAngbAnQgeArgrAnQhmBciFAoQg/AThHAHQhzAMh1geIgbgIQiigwhqhzQg3g7gfhGQgghLgDhYQAAhDARg+QAWhLAzhEQAMgPgCgOQgJg/gDgMQgFgWgHgXQgSg9gqhXIgNgcQAJABANACQAbAHA3ANQAxALAhAKQB6AiBKApQAHAEAKgCQALgBA0gJQAmgGAYgDQCigPCTA5QAmAPAeARQBzA+BHBpIAGAIQAlA6ASA7QAdBbgRBlg");
	this.shape_105.setTransform(144.1731,152.5503,1.1968,1.1968);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AipIIIgbgIQihgwhrhzQg2g7gfhGQghhLgChYQgBhDASg+QAVhLA0hEQAMgPgDgOIgLhLQgFgWgHgXQgTg9gphXIgNgcIAVADIBTAUQAxALAhAKQB6AiBKApQAHAEAKgCIA+gKQAmgGAYgDQCjgPCSA5QAnAPAeARQByA+BHBpIAHAIQAlA6ASA7QAcBbgQBlQgJA2gUAuQgSAngbAnQgdArgsAnQhlBciFAoQg/AThIAHQghADggAAQhTAAhUgVg");
	this.shape_106.setTransform(144.5835,152.7999,1.1968,1.1968);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").p("AoQAAIQhAA");
	this.shape_107.setTransform(348.875,177.35);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FFFFFF").p("AJHAAIyNAA");
	this.shape_108.setTransform(346.175,148.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").p("AnmAAIPNAA");
	this.shape_109.setTransform(345.825,118.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").p("AAAlsIAALZ");
	this.shape_110.setTransform(227,155.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#FFFFFF").p("AGJAAIsSAA");
	this.shape_111.setTransform(187.65,206.55);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").p("AI2AAIxrAA");
	this.shape_112.setTransform(174.825,177.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").p("Am8AAIN6AA");
	this.shape_113.setTransform(170.05,118.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQALgKAOAAQAOAAAJAKQAKAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAFgEACgIIANACQgDALgIAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgJAAQgIAAgGAGQgFAFgCAKIAoAAIAAAAg");
	this.shape_114.setTransform(416,76.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgBAwQgEgDgCgDQgBgDAAgLIAAgqIgJAAIAAgKIAJAAIAAgRIALgIIAAAZIANAAIAAAKIgNAAIAAAqIABAHIADADIADAAIAGAAIACALIgJABQgIAAgCgCg");
	this.shape_115.setTransform(410.25,74.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AARAmIAAgsQAAgHgBgFQgCgEgDgBQgEgDgFAAQgHAAgGAFQgFAFAAAOIAAAoIgNAAIAAhJIALAAIAAALQAIgNAPAAQAGAAAGADQAFACADAEQADAEABAFIABANIAAAsg");
	this.shape_116.setTransform(404.275,76.05);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQALgKANAAQAPAAAKAKQAJAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAEgEADgIIAOACQgEALgIAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgKAAQgHAAgGAGQgGAFAAAKIAnAAIAAAAg");
	this.shape_117.setTransform(396.4,76.125);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgTAmIAAhJIAMAAIAAALQADgHAEgDQADgDAEAAQAHAAAGAFIgEALQgFgDgFABQgDgBgDADQgDACgCAFQgBAGAAAIIAAAmg");
	this.shape_118.setTransform(390.7,76.05);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgXAdQgKgKAAgSQAAgSAKgKQAJgKAPAAQAOAAAJAKQAKAKAAARIAAADIg2AAQABAMAGAHQAGAGAIAAQAHAAAFgDQAFgEADgIIAMACQgCALgJAGQgIAGgNAAQgPAAgJgJgAAVgGQgBgJgEgFQgGgHgJAAQgIAAgGAGQgGAFgBAKIApAAIAAAAg");
	this.shape_119.setTransform(383.85,76.125);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgVAuQgMgGgHgMQgGgMAAgPQAAgOAGgNQAHgNALgGQAMgGAOAAQALAAAJADQAJAEAFAGQAFAHACAKIgMADQgCgIgDgEQgEgEgGgDQgGgDgIAAQgIAAgHADQgHADgEAEQgEAFgCAFQgEAKAAAKQAAANAFAJQAEAKAJAEQAJAEAJAAQAJAAAIgDQAJgDAEgEIAAgTIgeAAIAAgLIArAAIAAAlQgKAIgKAEQgLADgLAAQgOAAgMgGg");
	this.shape_120.setTransform(374.375,74.725);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQALgKAOAAQAOAAAJAKQAKAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAFgEACgIIANACQgDALgIAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgJAAQgIAAgGAGQgFAFgCAKIAoAAIAAAAg");
	this.shape_121.setTransform(416,47.125);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgBAwQgEgDgCgDQgBgEAAgKIAAgpIgJAAIAAgKIAJAAIAAgSIALgIIAAAaIANAAIAAAKIgNAAIAAApIABAHIADADIADABIAGgBIACALIgJABQgIAAgCgCg");
	this.shape_122.setTransform(410.25,45.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AARAlIAAgrQAAgHgBgFQgCgDgDgCQgEgDgFAAQgHAAgGAGQgFAEAAAOIAAAnIgNAAIAAhIIALAAIAAAKQAIgLAPgBQAGABAGACQAFACADAEQADAEABAFIABAMIAAAsg");
	this.shape_123.setTransform(404.275,47.05);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQALgKANAAQAPAAAKAKQAJAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAEgEADgIIAOACQgEALgIAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgKAAQgHAAgGAGQgGAFAAAKIAnAAIAAAAg");
	this.shape_124.setTransform(396.4,47.125);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgTAlIAAhIIAMAAIAAALQADgIAEgCQADgCAEgBQAHAAAGAFIgEALQgFgCgFAAQgDAAgDACQgDACgCAFQgBAGAAAIIAAAlg");
	this.shape_125.setTransform(390.7,47.05);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgXAdQgKgKAAgSQAAgSAKgKQAJgKAPAAQAOAAAJAKQAKAKAAARIAAADIg2AAQABAMAGAHQAGAGAIAAQAHAAAFgDQAFgEADgIIAMACQgCALgJAGQgIAGgNAAQgPAAgJgJgAAVgGQgBgJgEgFQgGgHgJAAQgIAAgGAGQgGAFgBAKIApAAIAAAAg");
	this.shape_126.setTransform(383.85,47.125);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgVAuQgMgGgHgMQgGgMAAgPQAAgOAGgNQAHgNALgGQAMgGAOAAQALAAAJADQAJAEAFAGQAFAHACAKIgMADQgCgIgDgEQgEgEgGgDQgGgDgIAAQgIAAgHADQgHADgEAEQgEAFgCAFQgEAKAAAKQAAANAFAJQAEAKAJAEQAJAEAJAAQAJAAAIgDQAJgDAEgEIAAgTIgeAAIAAgLIArAAIAAAlQgKAIgKAEQgLADgLAAQgOAAgMgGg");
	this.shape_127.setTransform(374.375,45.725);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgaAhQgHgGAAgKQAAgFADgEQACgFAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgDQAHgCAJAAQAJAAAGACQAGACADAEQACADABAFIABALIAAAQQAAARABAFIADAJIgNAAIgDgJQgGAGgHACQgFACgIAAQgMAAgGgFgAgCAFQgIABgDABQgDABgCADQgBADAAADQAAAFADADQAEAEAHAAQAHAAAFgDQAGgEACgFQACgEAAgJIAAgEQgGADgNACg");
	this.shape_128.setTransform(294.575,76.125);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AARAmIAAgsQAAgHgBgFQgCgEgDgBQgEgDgFAAQgHAAgGAFQgFAFAAAOIAAAoIgNAAIAAhJIALAAIAAALQAIgNAPAAQAGAAAGADQAFACADAEQADAEABAFIABANIAAAsg");
	this.shape_129.setTransform(286.775,76.05);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgYAdQgKgKABgTQgBgTAMgKQAKgIAMAAQAPAAAKAKQAJAKAAARQABANgFAIQgEAIgIAFQgIAEgKAAQgOAAgKgJgAgOgUQgHAHABANQgBAOAHAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_130.setTransform(278.9,76.125);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgnAzIAAgNIAzhAIAKgMIg4AAIAAgMIBJAAIAAAMIg5BGIgGAHIBAAAIAAAMg");
	this.shape_131.setTransform(270.7,74.725);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgaAhQgHgGAAgKQAAgFADgEQACgFAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgDQAHgCAJAAQAJAAAGACQAGACADAEQACADABAFIABALIAAAQQAAARABAFIADAJIgNAAIgDgJQgGAGgHACQgFACgIAAQgMAAgGgFgAgCAFQgIABgDABQgDABgCADQgBADAAADQAAAFADADQAEAEAHAAQAHAAAFgDQAGgEACgFQACgEAAgJIAAgEQgGADgNACg");
	this.shape_132.setTransform(294.575,47.125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AARAlIAAgrQAAgHgBgFQgCgDgDgCQgEgDgFAAQgHAAgGAGQgFAEAAAOIAAAnIgNAAIAAhIIALAAIAAAKQAIgLAPgBQAGABAGACQAFACADAEQADAEABAFIABAMIAAAsg");
	this.shape_133.setTransform(286.775,47.05);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgYAdQgKgKABgTQgBgTAMgKQAKgIAMAAQAPAAAKAKQAJAKAAARQABANgFAIQgEAIgIAFQgIAEgKAAQgOAAgKgJgAgOgUQgHAHABANQgBAOAHAHQAGAHAIAAQAKAAAFgHQAHgHAAgOQAAgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_134.setTransform(278.9,47.125);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgnAzIAAgNIAzhAIAKgMIg4AAIAAgMIBJAAIAAAMIg5BGIgGAHIBAAAIAAAMg");
	this.shape_135.setTransform(270.7,45.725);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgaAhQgHgGAAgKQAAgFADgEQACgFAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgDQAHgCAJAAQAJAAAGACQAGACADAEQACADABAFIABALIAAAQQAAARABAFIADAJIgNAAIgDgJQgGAGgHACQgFACgIAAQgMAAgGgFgAgCAFQgIABgDABQgDABgCADQgBADAAADQAAAFADADQAEAEAHAAQAHAAAFgDQAGgEACgFQACgEAAgJIAAgEQgGADgNACg");
	this.shape_136.setTransform(204.625,76.125);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgLAzIAAhJIALAAIAABJgAgMgfIAJgTIAQAAIgOATg");
	this.shape_137.setTransform(199.425,74.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgTAmIAAhJIAMAAIAAALQADgHAEgDQADgDAFAAQAGAAAGAFIgEALQgFgDgFABQgDgBgDADQgDACgCAFQgBAGAAAIIAAAmg");
	this.shape_138.setTransform(195.05,76.05);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgYAdQgJgKAAgTQAAgTALgKQAJgIANAAQAPAAAKAKQAKAKgBARQABANgFAIQgEAIgIAFQgJAEgJAAQgOAAgKgJgAgOgUQgHAHAAANQAAAOAHAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_139.setTransform(188.2,76.125);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgBAwQgEgDgBgDQgCgDAAgLIAAgqIgJAAIAAgKIAJAAIAAgRIALgIIAAAZIANAAIAAAKIgNAAIAAAqIABAHIACADIAFAAIAFAAIACALIgJABQgIAAgCgCg");
	this.shape_140.setTransform(182.45,74.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgFAzIAAhJIALAAIAABJgAgFgjIAAgPIALAAIAAAPg");
	this.shape_141.setTransform(178.875,74.725);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgPAvQgIgFgEgJQgEgIAAgMQAAgKAEgIQADgJAIgGQAHgEAJAAQAGAAAFADQAFADADAEIAAgkIANAAIAABkIgMAAIAAgKQgHALgNAAQgIABgHgFgAgNgHQgFAHAAANQAAAPAGAGQAGAIAHgBQAIAAAGgGQAFgHAAgOQAAgOgFgGQgGgIgJAAQgHABgGAGg");
	this.shape_142.setTransform(173.125,74.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgQAjQgFgDgDgDQgDgEgBgGIgBgLIAAgtIANAAIAAApIAAAMQACAFADADQAEADAGAAQAEAAAFgDQAFgDACgFQACgEAAgKIAAgnIANAAIAABJIgLAAIAAgLQgJAMgOAAQgGAAgGgCg");
	this.shape_143.setTransform(165.475,76.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AAgAzIgMgfIgpAAIgLAfIgOAAIAmhlIAOAAIApBlgAAQAJIgKgbIgHgVIgFATIgLAdIAhAAg");
	this.shape_144.setTransform(156.925,74.725);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQALgKAOAAQAOAAAJAKQAKAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAFgEACgIIANACQgDALgIAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgJAAQgIAAgGAGQgFAFgCAKIAoAAIAAAAg");
	this.shape_145.setTransform(145.1,76.125);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgPAvQgIgFgEgJQgEgIAAgMQAAgKAEgIQADgJAIgGQAHgEAJAAQAGAAAFADQAFADADAEIAAgkIANAAIAABkIgMAAIAAgKQgHALgNAAQgIABgHgFgAgNgHQgFAHAAANQAAAPAGAGQAGAIAHgBQAIAAAGgGQAFgHAAgOQAAgOgFgGQgGgIgJAAQgHABgGAGg");
	this.shape_146.setTransform(137.025,74.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgTAmIAAhJIAMAAIAAALQADgHAEgDQADgDAFAAQAFAAAHAFIgEALQgFgDgEABQgFgBgCADQgDACgCAFQgCAGABAIIAAAmg");
	this.shape_147.setTransform(127.65,76.05);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgYAdQgJgKAAgTQAAgTALgKQAJgIANAAQAPAAAKAKQAKAKAAARQAAANgFAIQgEAIgIAFQgIAEgKAAQgOAAgKgJgAgOgUQgGAHgBANQABAOAGAHQAGAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgGAHg");
	this.shape_148.setTransform(120.8,76.125);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgPAvQgIgFgEgJQgEgIAAgMQAAgKAEgIQADgJAIgGQAHgEAJAAQAGAAAFADQAFADADAEIAAgkIANAAIAABkIgMAAIAAgKQgHALgNAAQgIABgHgFgAgNgHQgFAHAAANQAAAPAGAGQAGAIAHgBQAIAAAGgGQAFgHAAgOQAAgOgFgGQgGgIgJAAQgHABgGAGg");
	this.shape_149.setTransform(112.725,74.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgaAhQgHgGAAgKQAAgFADgEQACgFAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgDQAHgCAJAAQAJAAAGACQAGACADAEQACADABAFIABALIAAAQQAAARABAFIADAJIgNAAIgDgJQgGAGgHACQgFACgIAAQgMAAgGgFgAgCAFQgIABgDABQgDABgCADQgBADAAADQAAAFADADQAEAEAHAAQAHAAAFgDQAGgEACgFQACgEAAgJIAAgEQgGADgNACg");
	this.shape_150.setTransform(105.075,76.125);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AARAmIAAgsQAAgHgBgFQgCgEgDgBQgEgDgFAAQgHAAgGAFQgFAFAAAOIAAAoIgNAAIAAhJIALAAIAAALQAIgNAPAAQAGAAAGADQAFACADAEQADAEABAFIABANIAAAsg");
	this.shape_151.setTransform(97.275,76.05);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgFAzIAAhJIALAAIAABJgAgFgjIAAgPIALAAIAAAPg");
	this.shape_152.setTransform(91.825,74.725);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgPAvQgIgFgEgJQgEgIAAgMQAAgKAEgIQADgJAIgGQAHgEAJAAQAGAAAFADQAFADADAEIAAgkIANAAIAABkIgMAAIAAgKQgHALgNAAQgIABgHgFgAgNgHQgFAHAAANQAAAPAGAGQAGAIAHgBQAIAAAGgGQAFgHAAgOQAAgOgFgGQgGgIgJAAQgHABgGAGg");
	this.shape_153.setTransform(86.075,74.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgTAmIAAhJIALAAIAAALQAEgHAEgDQADgDAFAAQAFAAAHAFIgEALQgFgDgEABQgFgBgCADQgDACgCAFQgCAGAAAIIAAAmg");
	this.shape_154.setTransform(80.6,76.05);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgYAdQgKgKAAgTQAAgTAMgKQAKgIAMAAQAPAAAKAKQAKAKAAARQgBANgEAIQgEAIgIAFQgIAEgKAAQgPAAgJgJgAgPgUQgFAHAAANQAAAOAFAHQAHAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgHAHg");
	this.shape_155.setTransform(73.75,76.125);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgYAdQgJgKAAgTQAAgTALgKQAJgIANAAQAPAAAKAKQAKAKAAARQAAANgFAIQgEAIgIAFQgIAEgKAAQgPAAgJgJgAgPgUQgFAHgBANQABAOAFAHQAHAHAIAAQAKAAAFgHQAHgHgBgOQABgNgHgHQgFgHgKAAQgIAAgHAHg");
	this.shape_156.setTransform(65.9,76.125);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgXAuQgKgHgFgNQgGgMAAgOQAAgPAGgMQAGgMAMgGQALgGAMAAQAPAAALAHQAKAIAEAOIgNADQgEgLgGgFQgHgFgKAAQgLAAgIAGQgIAFgDAKQgDAJAAAKQAAAMAEAKQAEAJAIAFQAIAFAIAAQALAAAIgGQAIgHACgNIAOAEQgEAQgLAJQgLAIgQAAQgPAAgLgGg");
	this.shape_157.setTransform(56.975,74.725);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgUAgQgHgFgCgMIALgCQABAHAGAEQAEAEAHAAQAJAAAFgDQADgEAAgEQAAgFgDgCIgNgEIgSgGQgFgCgDgEQgCgFgBgFQABgFABgEQADgEAEgDQADgCAFgCQAFgBAFAAQAIAAAHACQAGADADAEQADAEABAHIgLACQgBgGgFgDQgDgDgHAAQgIAAgEADQgEADAAADQAAABABAAQAAABAAABQAAAAAAABQABAAAAABIAEADIAKADQAOAEAFACQAFABADAFQADAEABAGQgBAGgEAGQgDAFgHADQgGADgKAAQgMAAgIgGg");
	this.shape_158.setTransform(185.55,47.125);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgaAhQgHgGAAgKQAAgFADgEQACgFAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgDQAHgCAJAAQAJAAAGACQAGACADAEQACADABAFIABALIAAAQQAAARABAFIADAJIgNAAIgDgJQgGAGgHACQgFACgIAAQgMAAgGgFgAgCAFQgIABgDABQgDABgCADQgBADAAADQAAAFADADQAEAEAHAAQAHAAAFgDQAGgEACgFQACgEAAgJIAAgEQgGADgNACg");
	this.shape_159.setTransform(178.075,47.125);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgBAwQgEgDgBgDQgCgEAAgKIAAgpIgJAAIAAgKIAJAAIAAgSIAMgIIAAAaIAMAAIAAAKIgMAAIAAApIAAAHIACADIAFABIAFgBIACALIgKABQgGAAgDgCg");
	this.shape_160.setTransform(172.35,45.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AARAlIAAgrQAAgHgBgFQgCgDgDgCQgEgDgFAAQgHAAgGAGQgFAEAAAOIAAAnIgNAAIAAhIIALAAIAAAKQAIgLAPgBQAGABAGACQAFACADAEQADAEABAFIABAMIAAAsg");
	this.shape_161.setTransform(166.375,47.05);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgXAdQgKgKAAgSQAAgSAKgKQAKgKAOAAQAOAAAJAKQAKAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAFgEADgIIAMACQgDALgIAGQgIAGgNAAQgPAAgJgJgAAVgGQgBgJgEgFQgGgHgJAAQgIAAgGAGQgGAFgBAKIApAAIAAAAg");
	this.shape_162.setTransform(158.5,47.125);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgGAzIgohlIAPAAIAbBJIAEARIAFgRIAbhJIAPAAIgpBlg");
	this.shape_163.setTransform(150.65,45.725);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQALgKANAAQAPAAAKAKQAJAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAEgEADgIIAOACQgEALgIAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgKAAQgHAAgGAGQgGAFAAAKIAnAAIAAAAg");
	this.shape_164.setTransform(138.1,47.125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgPAvQgIgFgEgJQgEgJAAgKQAAgMAEgHQADgKAIgFQAHgEAJAAQAGAAAFADQAFADADAEIAAgkIANAAIAABkIgMAAIAAgJQgHALgNgBQgIAAgHgEgAgNgHQgFAHAAAOQAAAOAGAGQAGAIAHAAQAIgBAGgGQAFgHAAgNQAAgPgFgGQgGgIgJABQgHAAgGAGg");
	this.shape_165.setTransform(130.025,45.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQAKgKAOAAQAPAAAKAKQAJAKAAARIAAADIg2AAQABAMAGAHQAGAGAIAAQAHAAAFgDQAEgEADgIIAOACQgDALgJAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgKAAQgHAAgGAGQgFAFgBAKIAnAAIAAAAg");
	this.shape_166.setTransform(118.5,47.125);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgBAwQgEgDgCgDQgBgEAAgKIAAgpIgJAAIAAgKIAJAAIAAgSIAMgIIAAAaIAMAAIAAAKIgMAAIAAApIAAAHIADADIADABIAGgBIACALIgKABQgGAAgDgCg");
	this.shape_167.setTransform(112.75,45.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AARAlIAAgrQAAgHgBgFQgCgDgDgCQgEgDgFAAQgHAAgGAGQgFAEAAAOIAAAnIgNAAIAAhIIALAAIAAAKQAIgLAPgBQAGABAGACQAFACADAEQADAEABAFIABAMIAAAsg");
	this.shape_168.setTransform(106.775,47.05);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgXAdQgKgKAAgSQAAgSAKgKQAJgKAOAAQAPAAAJAKQAKAKAAARIAAADIg2AAQABAMAGAHQAGAGAIAAQAHAAAFgDQAEgEAEgIIAMACQgCALgJAGQgIAGgNAAQgPAAgJgJgAAVgGQgBgJgEgFQgGgHgKAAQgHAAgGAGQgFAFgCAKIApAAIAAAAg");
	this.shape_169.setTransform(98.9,47.125);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgTAlIAAhIIALAAIAAALQAEgIAEgCQADgCAFgBQAFAAAHAFIgEALQgFgCgEAAQgFAAgCACQgDACgCAFQgCAGAAAIIAAAlg");
	this.shape_170.setTransform(93.2,47.05);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgYAdQgJgKAAgSQAAgSAJgKQALgKAOAAQAOAAAKAKQAJAKAAARIAAADIg2AAQAAAMAHAHQAGAGAIAAQAHAAAFgDQAEgEADgIIAOACQgEALgIAGQgIAGgNAAQgPAAgKgJgAAUgGQAAgJgEgFQgGgHgJAAQgIAAgGAGQgGAFAAAKIAnAAIAAAAg");
	this.shape_171.setTransform(86.35,47.125);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgVAuQgMgGgHgMQgGgMAAgPQAAgOAGgNQAHgNALgGQAMgGAOAAQALAAAJADQAJAEAFAGQAFAHACAKIgMADQgCgIgDgEQgEgEgGgDQgGgDgIAAQgIAAgHADQgHADgEAEQgEAFgCAFQgEAKAAAKQAAANAFAJQAEAKAJAEQAJAEAJAAQAJAAAIgDQAJgDAEgEIAAgTIgeAAIAAgLIArAAIAAAlQgKAIgKAEQgLADgLAAQgOAAgMgGg");
	this.shape_172.setTransform(76.875,45.725);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgWAsQgKgIgBgPQABgIAEgHQAEgGAIgEQgHgDgDgGQgDgFgBgHQAAgLAIgIQAIgHAOAAQAOAAAIAHQAIAIAAALQAAAHgDAGQgEAFgHADQAIADAFAGQAFAGAAAJQgBAOgIAJQgKAJgOAAQgNAAgKgIgAgJAIQgEAFAAAGQAAAIAEAEQAEAFAFAAQAHAAADgEQAEgFAAgIQAAgHgEgEQgEgFgGAAQgGAAgDAFgAgIggQgEADAAAGQAAAFAEAEQADADAFAAQAFAAAEgDQADgEAAgGQAAgFgDgDQgDgEgGAAQgEAAgEAEg");
	this.shape_173.setTransform(15.6,251.025);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgTAyQABgVAIgWQAIgVANgRIgrAAIAAgSIBBAAIAAAOQgIAIgJAQQgIAOgEAQQgEASAAANg");
	this.shape_174.setTransform(15.625,222);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgXAoQgKgMAAgbQAAgbALgMQAKgMAPgBQAMABAHAGQAIAGACAMIgTACQAAgFgDgDQgDgCgFgBQgFABgEAFQgFAGgBARQAIgJAJAAQANAAAIAJQAJAJAAAPQAAAPgJAKQgJAIgPABQgOAAgKgMgAgHADQgEAFAAAIQAAAKAEAEQAFAGAEAAQAGAAADgFQAEgEAAgJQAAgLgEgEQgEgEgGABQgEgBgEAEg");
	this.shape_175.setTransform(15.675,193);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgWArQgKgHgBgNIATgCQABAHAEAEQAEADAFAAQAFAAAFgEQAEgFAAgKQAAgKgEgEQgFgEgFAAQgIAAgHAGIgQgCIAKg0IAzAAIAAATIgkAAIgDARQAGgEAGAAQANAAAJAKQAJAIAAAPQAAANgIAKQgJANgRAAQgOAAgIgIg");
	this.shape_176.setTransform(15.75,163.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AAFAzIAAgVIgoAAIAAgRIArg/IAQAAIAAA/IANAAIAAARIgNAAIAAAVgAgRANIAWAAIAAghg");
	this.shape_177.setTransform(15.6,133.925);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgWAsQgJgIgCgNIATgCQABAHAEAEQAEADAFAAQAGAAAEgEQADgFAAgHQABgHgEgFQgEgEgGAAIgHACIABgPQAIgBADgDQAFgDAAgHQAAgEgDgDQgEgEgDAAQgGAAgDAEQgEADgBAHIgRgDQACgJAEgGQADgFAHgDQAHgDAIgBQANABAJAIQAHAIAAAJQAAANgPAJQAJACAFAFQAFAHABAIQAAAOgKAKQgKAJgOAAQgNgBgJgHg");
	this.shape_178.setTransform(15.6,105);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AghAzQABgKAFgKQAGgJARgPIAOgPQAFgHAAgFQgBgHgDgDQgDgEgHAAQgEAAgEAEQgEADAAAJIgTgCQABgQAJgHQAKgHAMAAQAPAAAIAIQAJAIAAAMQAAAHgCAGQgDAGgFAGIgNANIgLALIgDAGIAlAAIAAASg");
	this.shape_179.setTransform(15.45,74.925);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AADAzIAAhIQgKAKgOAEIAAgRQAIgDAIgHQAIgHAEgJIAPAAIAABlg");
	this.shape_180.setTransform(15.025,44.925);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AAOAlIAAglQAAgLgCgDQgBgEgCgCQgDgBgEAAQgEgBgEADQgEADgCAFQgBAEAAAMIAAAgIgUAAIAAhIIASAAIAAALQAKgNAOAAQAGABAFACQAGACACAEQADADABAFIACANIAAAsg");
	this.shape_181.setTransform(418.35,18.25);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgSAwQgKgFgEgIQgFgJAAgNQAAgKAFgIQAEgJAJgFQAJgEAKAAQARAAAKALQALAKAAAQQAAARgLAKQgLALgQAAQgJAAgJgEgAgMgCQgFAFAAALQAAALAFAGQAGAGAGAAQAHAAAGgGQAFgGAAgLQAAgLgFgFQgGgFgHAAQgGAAgGAFgAgJgfIAJgUIAWAAIgTAUg");
	this.shape_182.setTransform(409.75,16.925);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgJAzIAAhJIATAAIAABJgAgJggIAAgSIATAAIAAASg");
	this.shape_183.setTransform(403.475,16.925);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgYAcQgKgKABgSQgBgRAKgKQAKgKAPAAQANAAAJAGQAHAFADAMIgTAEQgBgGgDgDQgEgDgFAAQgGAAgFAFQgDAFAAAMQgBAMAFAFQAEAGAHAAQAFAAAEgEQADgDABgHIATADQgCANgJAHQgIAGgPAAQgOAAgKgKg");
	this.shape_184.setTransform(397.7,18.325);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AAOAlIAAglQAAgLgBgDQgCgEgDgCQgCgBgEAAQgEgBgEADQgEADgBAFQgCAEAAAMIAAAgIgUAAIAAhIIASAAIAAALQAKgNANAAQAHABAFACQAGACACAEQAEADABAFIABANIAAAsg");
	this.shape_185.setTransform(389.4,18.25);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgVAjQgGgEgCgFQgEgHAAgKIAAgtIAUAAIAAAiQAAAOACAEQAAADADACQADACAFAAQADAAAEgDQAEgDABgEQACgEAAgPIAAgeIAUAAIAABIIgSAAIAAgLQgFAGgGAEQgFACgIAAQgIAAgFgCg");
	this.shape_186.setTransform(380.75,18.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgiAzIAAhlIBFAAIAAASIgwAAIAAAYIApAAIAAAQIgpAAIAAArg");
	this.shape_187.setTransform(372.375,16.925);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AAUAzIgohBIAABBIgTAAIAAhlIAUAAIAoBDIAAhDIATAAIAABlg");
	this.shape_188.setTransform(292.575,16.925);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgqAzIAAhlIAmAAQALAAAIACQAIADAGAHQAHAGADAKQAEAKAAANQAAANgEAJQgDALgIAHQgFAFgIADQgIACgKAAgAgVAiIAPAAIAMgBQAFgCADgCQADgDACgHQACgHAAgMQAAgLgCgGQgBgGgFgEQgDgDgGgBQgEgBgLAAIgKAAg");
	this.shape_189.setTransform(282.55,16.925);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgUAxQgHgEgEgFQgFgGgCgFQgBgKAAgQIAAg1IAUAAIAAA2QAAAMABAFQABAFAFAFQAFADAHAAQAKAAAEgDQAEgEABgFIABgRIAAg3IAVAAIAAA0QgBASgBAHQgCAIgFAGQgEAFgHADQgIACgMAAQgNAAgIgCg");
	this.shape_190.setTransform(272.15,17);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AAOAlIAAglQAAgLgCgDQgBgEgDgCQgCgBgEAAQgEgBgEADQgEADgBAFQgCAEAAAMIAAAgIgUAAIAAhIIASAAIAAALQAKgNANAAQAHABAFACQAGACACAEQADADACAFIABANIAAAsg");
	this.shape_191.setTransform(200.75,18.25);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgSAwQgJgFgFgIQgFgJAAgNQAAgKAFgIQAFgJAIgFQAJgEAKAAQAQAAAMALQAKAKAAAQQAAARgLAKQgLALgQAAQgJAAgJgEgAgMgCQgFAFAAALQAAALAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgLQAAgLgFgFQgFgFgIAAQgHAAgFAFgAgJgfIAJgUIAWAAIgTAUg");
	this.shape_192.setTransform(192.15,16.925);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgJAzIAAhJIATAAIAABJgAgJggIAAgSIATAAIAAASg");
	this.shape_193.setTransform(185.875,16.925);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgYAcQgJgKAAgSQAAgRAJgKQAKgKAPAAQAOAAAHAGQAIAFADAMIgTAEQgBgGgDgDQgDgDgGAAQgGAAgFAFQgDAFgBAMQABAMAEAFQAEAGAHAAQAFAAAEgEQADgDABgHIATADQgDANgIAHQgIAGgOAAQgQAAgJgKg");
	this.shape_194.setTransform(180.1,18.325);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgJAzIAAhJIATAAIAABJgAgJggIAAgSIATAAIAAASg");
	this.shape_195.setTransform(174.125,16.925);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgWAgQgJgGgCgKIATgDQABAGAEACQAEADAGAAQAHAAAEgCQADgCAAgEQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQgBgCgFgBQgXgFgGgEQgJgFAAgLQAAgJAIgHQAHgGAQAAQAOAAAIAFQAHAFADAJIgTAEQgBgFgDgCQgDgCgGAAQgHAAgDACQgBAAAAABQgBAAAAAAQAAABgBABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABABAAAAQADACAOAEQAQADAGAFQAGAFAAAJQAAAKgIAHQgJAHgQAAQgOAAgJgGg");
	this.shape_196.setTransform(168.075,18.325);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgSAiQgJgFgFgIQgFgJAAgMQAAgKAFgJQAEgJAKgFQAIgEAKAAQARAAALALQAKAKAAAQQAAARgLAKQgKALgRAAQgJAAgJgEgAgMgQQgFAGAAAKQAAALAFAGQAFAGAHAAQAHAAAGgGQAFgGAAgLQAAgKgFgGQgGgFgHAAQgHAAgFAFg");
	this.shape_197.setTransform(160.05,18.325);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgmAzIAAhlIAhAAQASAAAFACQAJACAGAIQAGAIAAAMQAAAJgEAGQgDAGgFADQgGAEgFABQgHACgNAAIgOAAIAAAmgAgSgEIAMAAQALAAAEgBQAEgCACgDQADgEAAgEQAAgGgEgDQgDgEgFgBIgOAAIgKAAg");
	this.shape_198.setTransform(151.225,16.925);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgbAgQgHgGABgJQAAgHADgEQADgFAFgCQAFgCALgCQAMgDAFgCIAAgCQAAgGgDgCQgDgCgGAAQgFAAgDACQgDACgCAFIgRgDQADgLAHgFQAHgFAOAAQAMAAAGADQAHADACAFQADAEAAANIAAAWIABAOIADAKIgTAAIgBgGIgBgCQgFAFgGACQgFACgGAAQgMAAgGgGgAAAAEQgIACgCACQgEADAAAEQAAAEADADQADADAFAAQAEAAAFgEQADgCACgEIAAgKIAAgDg");
	this.shape_199.setTransform(138.5,18.325);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgJAzIAAhlIATAAIAABlg");
	this.shape_200.setTransform(132.625,16.925);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgaAaQgHgKAAgPQAAgSAJgKQAKgKAOAAQAQAAAJALQAKAKgBAWIgvAAQAAAIAEAFQAFAFAGAAQAEAAADgDQADgCACgGIATAEQgDAKgJAGQgIAFgMAAQgSAAgJgMgAAPgFQAAgJgEgEQgEgEgGAAQgGAAgEAEQgEAFAAAIIAcAAIAAAAg");
	this.shape_201.setTransform(122.7763,18.325);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgaApQgJgJAAgTQAAgSAJgJQAJgKANAAQALAAAJAKIAAgkIAUAAIAABkIgSAAIAAgLQgFAHgGADQgGACgFAAQgNABgJgLgAgKgDQgFAEAAALQAAAMADAFQAFAHAHAAQAHAAAFgFQAEgGAAgLQAAgNgEgEQgFgGgHAAQgGAAgEAGg");
	this.shape_202.setTransform(114.475,17);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgaAaQgHgKAAgPQAAgSAJgKQAKgKAOAAQAQAAAJALQAKAKgBAWIgvAAQAAAIAEAFQAFAFAGAAQAEAAADgDQADgCACgGIATAEQgDAKgJAGQgIAFgMAAQgSAAgJgMgAAPgFQAAgJgEgEQgEgEgGAAQgGAAgEAEQgEAFAAAIIAcAAIAAAAg");
	this.shape_203.setTransform(102.4263,18.325);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgXAlIAAhIIASAAIAAAKQAFgHACgCQAEgCAFgBQAGABAHADIgGARQgFgDgFAAQgEAAgCACQgCACgCAGQgCAGAAASIAAAWg");
	this.shape_204.setTransform(96.375,18.25);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgGAxQgGgDgFgHIAAALIgSAAIAAhkIATAAIAAAkQAJgKAMAAQANAAAJAKQAJAJAAASQAAASgJAKQgJALgNgBQgFAAgGgCgAgLgDQgFADAAAMQAAALAEAGQAFAHAHAAQAHABAEgGQAFgFAAgMQAAgNgFgEQgEgGgHAAQgGAAgFAGg");
	this.shape_205.setTransform(88.975,17);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AAjAlIAAgoQAAgMgDgDQgCgDgFAAQgFgBgDADQgEADgCAEQgBAFAAAKIAAAiIgSAAIAAgnQAAgKgBgEQgCgCgCgCQgCgCgDABQgFAAgDABQgFADgBAFQgBAEgBAKIAAAjIgTAAIAAhIIASAAIAAAKQAKgMANAAQAHAAAFADQAEADAEAGQAFgGAFgDQAGgDAGAAQAIABAGADQAGADACAHQACAEAAAKIAAAug");
	this.shape_206.setTransform(78.15,18.25);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgSAiQgKgFgEgIQgFgJAAgMQAAgKAFgJQAEgJAJgFQAJgEAKAAQAQAAALALQALAKAAAQQAAARgLAKQgKALgRAAQgJAAgJgEgAgMgQQgFAGAAAKQAAALAFAGQAGAGAGAAQAHAAAGgGQAFgGAAgLQAAgKgFgGQgGgFgHAAQgGAAgGAFg");
	this.shape_207.setTransform(67.65,18.325);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AAUAzIgohBIAABBIgTAAIAAhlIAUAAIAoBDIAAhDIATAAIAABlg");
	this.shape_208.setTransform(58.175,16.925);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C3D4CA").s().p("EgjWAC2IAAlrMBGtAAAIAAFrg");
	this.shape_209.setTransform(226.3,-18.325);

	this.instance = new lib.lineadetablarosa("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.4,118.9);

	this.instance_1 = new lib.lineadetablarosa("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.4,89.7);

	this.instance_2 = new lib.lineadetablarosa("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3.4,118.9);

	this.instance_3 = new lib.lineadetablarosa("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.4,148.1);

	this.instance_4 = new lib.lineadetablarosa("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.4,177.35);

	this.instance_5 = new lib.lineadetablarosa("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3.4,206.55);

	this.instance_6 = new lib.lineadetablarosa("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-3.4,235.8);

	this.instance_7 = new lib.lineadetablarosa("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(340.5,201.9,1,1,-90,0,0,255.5,0);

	this.instance_8 = new lib.lineadetablarosa("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(340.5,199.85,1,1,-90,0,0,255.5,0);

	this.instance_9 = new lib.lineadetablarosa("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(227,201.9,1,1,-90,0,0,255.5,0);

	this.instance_10 = new lib.lineadetablarosa("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(247.1,206.55,1,1,0,0,0,255.5,0);

	this.instance_11 = new lib.lineadetablarosa("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-8.4,177.35);

	this.instance_12 = new lib.lineadetablarosa("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(247.1,148.1,1,1,0,0,0,255.5,0);

	this.instance_13 = new lib.lineadetablarosa("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(247.1,118.9,1,1,0,0,0,255.5,0);

	this.instance_14 = new lib.lineadetablarosa("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(247.1,89.7,1,1,0,0,0,255.5,0);

	this.instance_15 = new lib.lineadetablarosa("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(255.5,60.45,1,1,0,0,0,255.5,0);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#FFFFFF").p("Ao3AAIRvAA");
	this.shape_210.setTransform(176.375,148.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#E9C3C5").p("AHFBZIs9AAQgSg7gphZIgNgcIAVAEQCIAgAcAIQB8AjBIAoQAGADAMgBQALgCAygIQAmgHAYgCQCjgPCTA5QAkAOAhASg");
	this.shape_211.setTransform(163.1746,110.0025);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E9C3C5").s().p("Al6BYQgRg6gqhZIgNgcIAWADQCHAhAdAIQB7AiBJAoQAFADAMgBIA9gKQAmgGAYgDQCkgOCTA4QAjAOAhASg");
	this.shape_212.setTransform(163.35,110.075);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#FFFFFF").p("APIiRIAAEjIi6AAQgggSgkgOQiTg5ikAPQgYADgmAGQgzAJgLABQgLABgGgDQhJgph7giQgdgIiGggIgWgDIANAbQAqBaARA6IuXAAIAAkjg");
	this.shape_213.setTransform(130.25,104.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#E9C3C5").s().p("AMOCSQghgSgjgOQiTg6ikAQQgYACgmAHIg+AKQgMABgFgDQhJgph7giQgdgJiGgfIgWgDIANAcQAqBYARA7IuYAAIAAkjIeOAAIAAEjg");
	this.shape_214.setTransform(130.25,104.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#FFFFFF").p("APIiRIAAEjI+OAAIAAkjg");
	this.shape_215.setTransform(130.25,75.075);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E9C3C5").s().p("AvHCSIAAkjIeOAAIAAEjg");
	this.shape_216.setTransform(130.25,75.075);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#E9C3C5").p("AIaAVIAAB9IwxAAQAVhMA0hDQAMgPgCgNQgGgygGgZQgGgZgGgUIM8AAQByA+BIBog");
	this.shape_217.setTransform(173.2195,133.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E9C3C5").s().p("AoYCSQAVhMA0hDQAMgOgCgOQgGgygGgZQgFgZgHgUIM9AAQBxA9BIBpIAAB9g");
	this.shape_218.setTransform(173.3,133.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#FFFFFF").p("ABkhYIAACmQhHhohxg+g");
	this.shape_219.setTransform(216.985,127.7863);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E9C3C5").s().p("AhchSIC5AAIAAClQhIhohxg9g");
	this.shape_220.setTransform(217.725,127.225);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#FFFFFF").p("AHOADQg0BDgVBMItcAAIAAkjIOXAAQAGAUAGAZQAGAZAGAyQACANgMAPg");
	this.shape_221.setTransform(80.7148,133.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E9C3C5").s().p("AnXCSIAAkjIOXAAQAGAUAGAZQAGAZAGAyQACAOgMAOQg0BDgVBMg");
	this.shape_222.setTransform(80.7148,133.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#E9C3C5").p("AIhiRIAAEjIweAAQgihMgBhVQgChEASg+g");
	this.shape_223.setTransform(172.4692,162.725);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E9C3C5").s().p("An9CSQgihMgBhVQgChEASg+IQxAAIAAEjg");
	this.shape_224.setTransform(172.4692,162.725);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#FFFFFF").p("AG6CSItuAAIAAkjINcAAQgSA+ABBEQACBVAhBMg");
	this.shape_225.setTransform(77.225,162.725);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E9C3C5").s().p("Am3CSIAAkjINcAAQgSA+ACBEQABBVAiBMg");
	this.shape_226.setTransform(77.475,162.725);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#E9C3C5").p("AIRiRIAABOQgeArgrAmQhmBdiEAnImKAAQijgyhphwQg4g9gdhEg");
	this.shape_227.setTransform(174.094,191.95);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E9C3C5").s().p("AiuCSQijgyhohwQg4g9gehEIQfAAIAABOQgfAsgqAmQhnBciEAng");
	this.shape_228.setTransform(174.225,191.95);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#FFFFFF").p("ACphsIAADUIkzAAQCEgmBmhcQAqgnAfgrg");
	this.shape_229.setTransform(210.1465,196.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#E9C3C5").s().p("AiZBrQCEgnBmhbQAqgnAfgsIAADVg");
	this.shape_230.setTransform(211.625,195.85);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#FFFFFF").p("AJrCSIzQAAIAAkjINvAAQAdBEA4A9QBpBwCjAyg");
	this.shape_231.setTransform(94.875,191.95);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E9C3C5").s().p("ApnCSIAAkjINuAAQAeBEA4A9QBoBwCjAyg");
	this.shape_232.setTransform(95.125,191.95);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#E9C3C5").p("ADGgOQhAAShHAHQhzAMh1gdIgbgIg");
	this.shape_233.setTransform(176.4533,208.0214);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#E9C3C5").s().p("AipgGIgcgIIGKAAQg/AShIAHQggAEghAAQhSAAhUgVg");
	this.shape_234.setTransform(176.5,208.0214);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#FFFFFF").p("APIiRIAAEjI+OAAIAAkjITPAAIAcAIQB1AeBzgMQBIgHA/gTg");
	this.shape_235.setTransform(130.25,221.175);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E9C3C5").s().p("AvHCSIAAkjITQAAIAbAIQB2AeBzgMQBIgHA/gTIEzAAIAAEjg");
	this.shape_236.setTransform(130.25,221.175);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#E9C3C5").p("AEHiRIAAEjIoNAAQAKh7BOhmQAMgPgCgOIgFglg");
	this.shape_237.setTransform(314.1528,133.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E9C3C5").s().p("AkGCSQAKh8BOhlQAMgPgCgPIgFgkIGwAAIAAEjg");
	this.shape_238.setTransform(314.175,133.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#E9C3C5").p("AAfBEIg9AAIAAh8IAGAIQAlA5ASA7g");
	this.shape_239.setTransform(230.075,141.2873);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#E9C3C5").s().p("AgeA/IAAh9IAGAJQAlA5ASA7g");
	this.shape_240.setTransform(230.075,141.825);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FFFFFF").p("AFYhPQhOBmgLB7IoiAAQgSg7glg6IgGgIIAAimIK8AAIAFAlQACAOgLAPg");
	this.shape_241.setTransform(262.3398,133.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E9C3C5").s().p("AkjCSQgSg7glg6IgGgIIAAimIK8AAIAFAkQACAPgLAPQhOBlgLB8g");
	this.shape_242.setTransform(262.3398,133.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#FFFFFF").p("AI4iRIAAEjIxvAAIAAkjg");
	this.shape_243.setTransform(283.75,45.85);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#E9C3C5").s().p("Ao3CSIAAkjIRuAAIAAEjg");
	this.shape_244.setTransform(283.75,45.85);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#E9C3C5").p("AEIgZIAACcImwAAQgDgVgEgRQgShPg2hyIgNgcQAJACANACQCDAfAhAJQB5AjBKApQAGADALgBQAVgDAqgIQAlgGAZgCg");
	this.shape_245.setTransform(314.0698,105.8499);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E9C3C5").s().p("AiqCCQgDgVgEgRQgRhPg3hyIgMgcIAVAEQCDAfAhAJQB5AjBKApQAGADALgBIA/gLQAlgGAZgCIABAAIAACcg");
	this.shape_246.setTransform(314.25,105.925);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#FFFFFF").p("AI4iRIAACHIgCAAQgZADglAFQgpAHgVADQgMABgFgDQhKgoh6giQgigKiDgfQgMgCgJgBIANAbQA2ByASBPQAEARACAVIq9AAIAAkjg");
	this.shape_247.setTransform(283.75,104.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E9C3C5").s().p("Ao3CSIAAkjIRuAAIAACHIgBAAQgZADglAGIg/AJQgLABgGgDQhKgoh6gjQghgJiDgfIgVgEIAMAcQA3ByARBPQAEARADAVg");
	this.shape_248.setTransform(283.75,104.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#E9C3C5").p("ADhh1IAADrQg4gFg4gPQi0guhyh7QgTgWgTgYg");
	this.shape_249.setTransform(317.998,189.1733);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E9C3C5").s().p("ABuBjQizgvhzh7QgTgVgSgZIG7AAIAADrQg4gFg4gOg");
	this.shape_250.setTransform(318.25,189.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#E9C3C5").p("AAVgrQgRAngaAmIAAhNg");
	this.shape_251.setTransform(229.3254,181.7801);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E9C3C5").s().p("AgVgmIArAAQgQAmgbAng");
	this.shape_252.setTransform(229.2,181.25);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#FFFFFF").p("AI4BaIAAA4IxvAAIAAjVQAcgnARgnIKFAAQASAYATAWQBzB7C0AuQA5APA4AFg");
	this.shape_253.setTransform(283.75,191.95);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#E9C3C5").s().p("Ao3CSIAAjVQAcgnARgnIKFAAQASAZATAVQBzB7C0AvQA4AOA4AFIAAA4g");
	this.shape_254.setTransform(283.75,191.95);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#E9C3C5").s().p("EggnASKMAAAgkTMBBPAAAMAAAAkTg");
	this.shape_255.setTransform(242.775,146.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFFFFF").p("APIiRIAAEjI+OAAIAAkjg");
	this.shape_256.setTransform(130.25,45.85);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E9C3C5").s().p("AvHCSIAAkjIeOAAIAAEjg");
	this.shape_257.setTransform(130.25,45.85);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFFFFF").p("AI3iRIAAEjIxtAAIAAkjg");
	this.shape_258.setTransform(397.225,250.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E9C3C5").s().p("Ao2CSIAAkjIRtAAIAAEjg");
	this.shape_259.setTransform(397.225,250.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#FFFFFF").p("AI4iRIAAEjIxvAAIAAkjg");
	this.shape_260.setTransform(283.75,250.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E9C3C5").s().p("Ao3CSIAAkjIRuAAIAAEjg");
	this.shape_261.setTransform(283.75,250.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#FFFFFF").p("APIiRIAAEjI+OAAIAAkjg");
	this.shape_262.setTransform(130.25,250.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E9C3C5").s().p("AvHCSIAAkjIeOAAIAAEjg");
	this.shape_263.setTransform(130.25,250.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#E9C3C5").p("AFACSIp/AAIAAkjIHrAAQAtAqAgAyQA+BeAJBpg");
	this.shape_264.setTransform(372.5,133.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E9C3C5").s().p("Ak/CSIAAkjIHrAAQAtAqAgAyQA+BdAJBqg");
	this.shape_265.setTransform(372.5,133.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#FFFFFF").p("AFFiRIAAEjIntAAQgJhpg+heQghgygsgqg");
	this.shape_266.setTransform(421.4459,133.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#E9C3C5").s().p("AisCSQgJhqg+hdQghgygsgqIKBAAIAAEjg");
	this.shape_267.setTransform(421.825,133.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#E9C3C5").p("AE7gkQgRBkg7BSIovAAIAAkjIJ/AAQAFA0gJA5g");
	this.shape_268.setTransform(372.5893,162.725);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E9C3C5").s().p("AlACSIAAkjIJ/AAQAFA0gJA5QgRBkg7BSg");
	this.shape_269.setTransform(372.5893,162.725);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#FFFFFF").p("AEiiRIAAEjIo+AAQA7hSARhkQAJg5gFg0g");
	this.shape_270.setTransform(424.9615,162.725);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#E9C3C5").s().p("AkeCSQA7hSARhkQAJg5gFg0IHuAAIAAEjg");
	this.shape_271.setTransform(425.2,162.725);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#E9C3C5").p("AEVh2QgeApgoAkQiVCHjbAWQg+AGg6gFIAAjrg");
	this.shape_272.setTransform(368.7142,189.2636);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E9C3C5").s().p("AkXB1IAAjrIIvAAQgeApgoAkQiVCHjbAWQgiADghAAQgbAAgbgCg");
	this.shape_273.setTransform(368.475,189.2636);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#FFFFFF").p("AI3iRIAAEjIxtAAIAAg4QA6AFA+gGQDcgWCViHQAogkAegpg");
	this.shape_274.setTransform(397.225,191.95);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E9C3C5").s().p("Ao2CSIAAg4QA6AFA+gGQDcgWCViHQAogjAegqII+AAIAAEjg");
	this.shape_275.setTransform(397.225,191.95);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#FFFFFF").p("AI3iRIAAEjIxtAAIAAkjg");
	this.shape_276.setTransform(397.225,221.175);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#E9C3C5").s().p("Ao2CSIAAkjIRtAAIAAEjg");
	this.shape_277.setTransform(397.225,221.175);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#E9C3C5").p("AEIiRIAAEjIm8AAQhRhvgCiFQAAgVABgag");
	this.shape_278.setTransform(314.1188,162.725);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#E9C3C5").s().p("Ai0CSQhRhvgCiFQAAgVABgaIIOAAIAAEjg");
	this.shape_279.setTransform(314.1188,162.725);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#E9C3C5").p("AAhAuQgIAzgVAxIgrAAIAAkjIA9AAQAcBcgRBjg");
	this.shape_280.setTransform(230.9559,162.725);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#E9C3C5").s().p("AgnCSIAAkjIA9AAQAcBcgRBjQgIAzgVAxg");
	this.shape_281.setTransform(230.9559,162.725);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#FFFFFF").p("AkmAuQAQhjgchcIIiAAQgBAaAAAVQACCFBRBvIqFAAQAVgxAIgzg");
	this.shape_282.setTransform(263.811,162.725);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E9C3C5").s().p("AlCCSQAVgxAIgzQAQhjgchcIIiAAQgBAaAAAVQADCFBQBvg");
	this.shape_283.setTransform(263.7,162.725);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").p("AI3iRIAAEjIxtAAIAAkjg");
	this.shape_284.setTransform(397.225,75.075);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E9C3C5").s().p("Ao2CSIAAkjIRtAAIAAEjg");
	this.shape_285.setTransform(397.225,75.075);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#E9C3C5").p("AD5BQInsAAIAAicQClgPCQA5QBqApBNBJg");
	this.shape_286.setTransform(364.85,110.8855);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E9C3C5").s().p("Aj1BQIAAicQCkgPCQA5QBqApBNBJg");
	this.shape_287.setTransform(365.1,110.8855);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").p("AI3iRIAAEjIqBAAQhNhJhqgqQiRg4ikAPIAAiHg");
	this.shape_288.setTransform(397.225,104.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E9C3C5").s().p("AhKCSQhNhJhqgqQiRg4ikAPIAAiHIRtAAIAAEjg");
	this.shape_289.setTransform(397.225,104.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").p("AI4iRIAAEjIxvAAIAAkjg");
	this.shape_290.setTransform(283.75,75.075);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E9C3C5").s().p("Ao3CSIAAkjIRuAAIAAEjg");
	this.shape_291.setTransform(283.75,75.075);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").p("AI3iRIAAEjIxtAAIAAkjg");
	this.shape_292.setTransform(397.225,45.85);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E9C3C5").s().p("Ao2CSIAAkjIRtAAIAAEjg");
	this.shape_293.setTransform(397.225,45.85);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_294.setTransform(16.75,16.65);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_295.setTransform(16.75,16.65);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_296.setTransform(16.75,45.85);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_297.setTransform(16.75,45.85);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_298.setTransform(16.75,75.075);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_299.setTransform(16.75,75.075);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_300.setTransform(16.75,104.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_301.setTransform(16.75,104.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_302.setTransform(16.75,133.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_303.setTransform(16.75,133.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_304.setTransform(16.75,191.95);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_305.setTransform(16.75,191.95);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_306.setTransform(16.75,162.725);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_307.setTransform(16.75,162.725);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_308.setTransform(16.75,221.175);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_309.setTransform(16.75,221.175);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#FFFFFF").p("ACoiRIAAEjIlPAAIAAkjg");
	this.shape_310.setTransform(16.75,250.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#C7C8CA").s().p("AimCSIAAkjIFNAAIAAEjg");
	this.shape_311.setTransform(16.75,250.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#FFFFFF").p("APIiRIAAEjI+OAAIAAkjg");
	this.shape_312.setTransform(130.25,16.65);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#B1C0C9").s().p("AvHCSIAAkjIeOAAIAAEjg");
	this.shape_313.setTransform(130.25,16.65);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#FFFFFF").p("AI4iRIAAEjIxvAAIAAkjg");
	this.shape_314.setTransform(283.75,16.65);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#B1C0C9").s().p("Ao3CSIAAkjIRuAAIAAEjg");
	this.shape_315.setTransform(283.75,16.65);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#FFFFFF").p("AI3iRIAAEjIxtAAIAAkjg");
	this.shape_316.setTransform(397.225,16.65);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#B1C0C9").s().p("Ao2CSIAAkjIRtAAIAAEjg");
	this.shape_317.setTransform(397.225,16.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-36.5,457.4,304.6);


(lib.tabla3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M2_TMR_TABLA1();
	this.instance.parent = this;
	this.instance.setTransform(269.8,183.2,1,1,0,0,0,314.8,167.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,0,641.5,303.2);


(lib.puestoscriticosiconote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.puestos1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(182.25,179.15,1.9711,1.9711,0,0,0,91.5,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,-1.1,360.3,360.20000000000005);


(lib.M02_TMR_PREGUNTA2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F795E").s().p("AgRAEIAcgQIAHAMQgBAIgSAFg");
	this.shape.setTransform(142.5,92.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F795E").s().p("AgRgBIAGgNIAeAUIgOAJQgVgJgBgHg");
	this.shape_1.setTransform(138.85,92.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DAA675").s().p("AA0ARQgBgKgSAAQgXACgKAAQgOgBgMgJIgKgKQgFAUgDADQgCABgDAOIgCANIgGgIQgGgJAAgCIACgHQABgIgBgGQgCgEABgHQAAgJADgCIAAgBQAAgCARgHQAUgJATgBQATgCAYAOQAXAOABALQABAKgCAOQgCAOgDABQgDAAgCAFIgDAEQAFgJgDgRg");
	this.shape_2.setTransform(140.4897,78.2177);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4B98C").s().p("Ag5ApQAVhAAGgEQAOgKAegBQAQgGAPAJQAIAFAEAFIABBCg");
	this.shape_3.setTransform(135.725,95.9207);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4B98C").s().p("Ag7ApIADhCIAMgKQAPgJAQAGIAQACQATADAIAGQAKAGAUA+g");
	this.shape_4.setTransform(145.9,95.9207);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9BD9C").s().p("AgIBHQgZgKgPgZIAAgCIAAgKIgBAAQgCAAgCgCIgEgWIgBgHQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIABACIABAAQgBgIAAgKQAAgVALgGIAMgJQAOgJAOAAIACAAQAXgBATATQALAGAAAVQAAAKgBAIIgBACIACgBIACgDQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAAABQADAAgCAKIAAAAIgFAWQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAIgCAMIAAACQgRAXgUAKIAAAAIgLABQgEAAgEgBg");
	this.shape_5.setTransform(140.4944,82.8975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDAB86").s().p("AgEAbQgngCAKgJQANgOACgXIASgEQASgDABAHQAAALARAlIgcAAIgMAAg");
	this.shape_6.setTransform(140.656,90.0986);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F3231").s().p("AhBAxIgFgCQgDABgFgjQgDgTAPgLQgBgYAVgKIgDAFIgFALQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAIgIANgGQAWgLAfAAQgMABgIAFIAAABIABABQAkgFAXAPIgJgBQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAABABQAcAKAAAaIgHgIIgBABQAFAMgEALQAAgEgEgDQgBASgFAYQgFAAgEAFIgCAHQACgigJgNQgNgUglAAIgkAFQgHAQgIAKIgDAnQgBgKgFgCg");
	this.shape_7.setTransform(66.0321,137.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F3231").s().p("AASALIgBAAQgJgCAAgHIAAgBQgDgCgDAAIgBAAQgBAAgFACIAAABQAAAHgJACIAAAAIgbAAIgBAAQgIgEAAgGIAAgBIgIAAIgCgEIAKgCQACgDAHgBIAaAAQAHAAADAFIAGgBQACgBAGACQACgFAIAAIAaAAQAGABACADIAIABIgBAEIgGABIAAABQAAAGgIAEIgBAAgAAMgFIAAAIQAAADAEACIAeAAQAEAAAAgFIAAgIQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAIgeAAQgBAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAgAgugFIAAAIQAAADAEACIAeAAQADAAAAgFIAAgIQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgeAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_8.setTransform(65.475,141.875);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(75.7,155.8,1,1,0,0,0,0.8,1.9);
	this.instance.alpha = 0.3906;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.65,156.65,1,1,0,0,0,0.6,1.2);
	this.instance_1.alpha = 0.3906;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(74.6,155.65,1,1,0,0,0,1.2,2.3);
	this.instance_2.alpha = 0.3906;

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.45,155.45,1,1,0,0,0,1.1,2.1);
	this.instance_3.alpha = 0.3906;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(56.9,156.3,1,1,0,0,0,0.7,1.6);
	this.instance_4.alpha = 0.3906;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(56,155.7,1,1,0,0,0,0.8,2);
	this.instance_5.alpha = 0.3906;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A9B3BC").s().p("AgUAFIAhgTIAIAOQgBAJgUAGg");
	this.shape_9.setTransform(67.925,152.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A9B3BC").s().p("AgUgBIAHgPIAiAXIgPAKQgZgKgBgIg");
	this.shape_10.setTransform(63.725,152.525);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(66.85,155.45,1,1,0,0,0,0.4,2.4);
	this.instance_6.alpha = 0.3906;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(68.35,155.35,1,1,0,0,0,0.4,2.5);
	this.instance_7.alpha = 0.3906;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(69.6,155.2,1,1,0,0,0,0.4,2.5);
	this.instance_8.alpha = 0.3906;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(73.35,155.3,1,1,0,0,0,0.4,2.4);
	this.instance_9.alpha = 0.3906;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(72.25,155.15,1,1,0,0,0,0.4,2.6);
	this.instance_10.alpha = 0.3906;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(70.75,155,1,1,0,0,0,0.4,2.6);
	this.instance_11.alpha = 0.3906;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(65.15,155.45,1,1,0,0,0,0.4,2.4);
	this.instance_12.alpha = 0.3906;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(63.65,155.35,1,1,0,0,0,0.4,2.5);
	this.instance_13.alpha = 0.3906;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(62.35,155.2,1,1,0,0,0,0.4,2.5);
	this.instance_14.alpha = 0.3906;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(58.65,155.3,1,1,0,0,0,0.4,2.4);
	this.instance_15.alpha = 0.3906;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(59.7,155.15,1,1,0,0,0,0.4,2.6);
	this.instance_16.alpha = 0.3906;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(61.25,155,1,1,0,0,0,0.4,2.6);
	this.instance_17.alpha = 0.3906;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBCACB").s().p("Ag9AhQAPgtAHgFQAQgKAigCQATgHARALQAJAFAFAGIABAvg");
	this.shape_11.setTransform(60.575,155.3257);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCD0D0").s().p("Ag+AhIACgvIANgLQARgLATAHIATACQAVAEAKAGQAJAGAQAsg");
	this.shape_12.setTransform(71.45,155.3257);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8AF93").s().p("AAIAAIgDAAIgCAAIgCAAIgHAAIgIACQAEgCADAAIAIgCIACAAIACAAIAEACQAEAAACADQgCgCgFgBg");
	this.shape_13.setTransform(62.625,141.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E1BB93").s().p("AgKBSQgdgMgRgcIAAgDIAAgLIgBAAIgFgDIgDgLIgCgOIgBgIQAAgEACgBQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIACADIABAAQgCgKAAgLQAAgZANgGIAAgBIAOgKQARgKAQAAIACAAQARgBARALQAJAFAFAFIABABQANAGAAAZQAAALgCAKIgBACIACgCQADgFADABQADABgCAMIAAAAIgFAZIgBAAQgBADgDAAIgBAAIgBAOIgBACQgRAYgZANIgBABIgMABQgGAAgEgBg");
	this.shape_14.setTransform(65.6194,141.7739);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6AE89").s().p("AgFAfQgtgBALgMQAQgPACgcIAVgEQAVgEABAIQAAANAUArIgdAAIgSAAg");
	this.shape_15.setTransform(65.817,150.0917);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F3F3F").s().p("AgTAmIgFhJQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAiAAAHAXQAFAQACAkg");
	this.shape_16.setTransform(111.325,127.22);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3F3F3F").s().p("AgZAmQACgfAHgVQACgMANgGQAKgFAPAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABIgLBJg");
	this.shape_17.setTransform(95.65,127.2107);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2F2F2F").s().p("AgYAtIAdhZIAJAHQAFADAGAeIgRgBIAMAUIgTAeg");
	this.shape_18.setTransform(106.2,126.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F2F2F").s().p("AAAAsIgTgfIAMgUIgRACIAEgRQADgNADgBIALgGIAcBWg");
	this.shape_19.setTransform(100.45,126.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ACADAD").s().p("AAXAcIgIgNIgCgEIgNgOIgOASIgIANQAAABAAABQAAABAAAAQAAAAgBAAQAAAAAAAAIgBgDIgOgqIAAgBIAQgNIADAGQAMAQAHAAQALAAAHgKIAHgOIAOAPIAAABIgOAqIgBADIgBgDg");
	this.shape_20.setTransform(103.3,124.844);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3B3B3").s().p("AgcAtIAWhYQAAABAPAKQAHADALABQgCAQABAUIADAlg");
	this.shape_21.setTransform(106.675,126.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B3B3").s().p("AgaAqQACgzgDgVIAJgCIAJgDQAJgFAAgBQAEAOAJAYQAJAXAEAOIACAIg");
	this.shape_22.setTransform(100.175,126.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5E6E6").s().p("AgJAhIgSgoQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAOgRANgEQAPAEAMARQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgSAog");
	this.shape_23.setTransform(103.3238,127.675);

	this.instance_18 = new lib.ClipGroup();
	this.instance_18.parent = this;
	this.instance_18.setTransform(103.5,112.75,1,1,0,0,0,7,9.5);

	this.instance_19 = new lib.ClipGroup_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(103.35,101.85,1,1,0,0,0,4.4,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECAA86").s().p("AgCgHQAEgJADAFQACAQgLAIg");
	this.shape_24.setTransform(109.1888,114.6574);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ECAA86").s().p("AgEgLIACgBQACgBADAGIACAUQgLgIACgQg");
	this.shape_25.setTransform(97.6112,114.6729);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9BD9C").s().p("AgSBMQgWgOgMgaIgGgFQgFgJABgKIACgCQADAAADAFQgEgMgCgOQgEgdAMgPIANgNQAQgOAVgCIAFAAQAUACARAOQAIAHAEAGQAMAPgEAdQgBAOgFAMQAFgIAEAFQACARgNAHQgMAagVAOIgTAJQgIgCgKgHg");
	this.shape_26.setTransform(103.4061,112.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ECAA86").s().p("AhHA4QgKAAgGgIQgIgJAAgMQAAgMAIgJQAHgHAJAAIAfgFQAIgCAHgHQAGgGAAgFIAAgdQAIAEAMAAQANAAAJgEIgBAdQAAAFAGAGQAGAHAGACIAgAFQAKAAAHAHQAGAJAAAMQAAAMgGAJQgHAIgKAAg");
	this.shape_27.setTransform(103.4,124.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F7DA98").s().p("AiLCMQg6g6AAhSQAAhRA6g6QA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6Qg6A6hSAAQhQAAg7g6g");
	this.shape_28.setTransform(140.9,88);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6DB5C5").s().p("AiLCMQg6g6AAhSQAAhRA6g6QA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6Qg6A6hSAAQhRAAg6g6g");
	this.shape_29.setTransform(103.4,116.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6DB5C5").s().p("AiLCMQg6g6AAhSQAAhRA6g6QA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6Qg6A6hSAAQhRAAg6g6g");
	this.shape_30.setTransform(103.4,116.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8EA6D9").s().p("AiLCMQg6g6AAhSQAAhRA6g6QA6g6BRAAQBSAAA6A6QA6A6AABRQAABSg6A6Qg6A6hSAAQhRAAg6g6g");
	this.shape_31.setTransform(65.9,145.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000007").s().p("AgcAFIgWgFIABgHIARAFQATADAMAAQARABAigHIABAGIgrAHIgHAAQgLAAgSgDg");
	this.shape_32.setTransform(216.2,67.4938);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#35343A").s().p("AAAABIAAgDQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAAAIAAADIgBgCg");
	this.shape_33.setTransform(218.475,50.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#35343A").s().p("AgCADQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQABgBAEgBIABADIgFADIgBgBg");
	this.shape_34.setTransform(217.125,50.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C3C3C1").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_35.setTransform(217.9,50.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#35343A").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_36.setTransform(217.9,50.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#947668").s().p("AAGAfQAGgagFgCQgDAAgCgCIgDgDIgPgJQgFgGgBgGQAAgFADgBIAQAFIAMAEQABAAgEgGQgCgEABgDQACgDADAKQABADAHAFQACADACALQABACAAAlg");
	this.shape_37.setTransform(216.2333,49.599);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0DADE").s().p("AgPA6QgIgNgHgqIgGgmIAYgDIAKBEIAJgtQABgHgCgUIAAgVQAaABAEALQADAKgNAuQgKApgNANIgKAGg");
	this.shape_38.setTransform(219.9121,56);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C0DADE").s().p("AgcA3QgCgCgFghIgHgrQgDgPASgSQARAQgEAEQgFAIAFAbQAEAXACAFQABABAUgEIAVgFIAJASQgrAUgSAAQgGAAgEgCg");
	this.shape_39.setTransform(213.1536,55.7875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DDEAEC").s().p("AgMADIAUgMIAFAJQAAAEgHADIgGADg");
	this.shape_40.setTransform(217.375,49.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DDEAEC").s().p("AgEAHQgIgFAAgDIAEgJIAWAPIgKAGIgIgEg");
	this.shape_41.setTransform(214.7,49.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3F3231").s().p("AAlARQAAgEgEgKQgEgKgFgCQgEgBgHAEQgJAFgDAAIgBAAQgCAAgJgFQgIgEgEABQgFACgEAKQgEAKAAAEIAAAQIgCgCIgCgCQgFg+AtACIAAAAQAcgCAJAYQAHAOgDAYIgEAEg");
	this.shape_42.setTransform(215.7895,40.2455);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#805F50").s().p("AgGA1QgTgHgLgTIAAgBIAAgIIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCgHIgCgOQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIADABIABABIAAAAIgBgNQAAgQAIgFIABAAQAAgBAJgGQAKgGALAAIABAAQASgBAOAOIAAAAQAJAFAAAQIgCANIAAACIABgBQADgDABAAQACACgBAGIgBAAIgBAJIgCAHQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAJIgBACQgKAPgRAJIgBABIgGAAIgCAAIgGgBg");
	this.shape_43.setTransform(215.795,43.178);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#947668").s().p("AgWAKQAKgKgCgNQAbgHABAHQAAAGAGAMIAFALIgbACQgcgCAIgGg");
	this.shape_44.setTransform(215.9946,48.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2F2F35").s().p("AAcCcIgOgCIgEiqIgHhIIgMBcIgKCXIgrAAIADh6IAOi9QAMAIArgCQAXgBAUgDIAFAmQAFAiAAAaIgFDNIgKAGQgDACgHAAIgKgBg");
	this.shape_45.setTransform(215.775,82.4031);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00011E").s().p("AgTAKQgBgFAFgHIAGgIIABgHIABgBIAbAAIgBAPQABAJgBACQgCADgHAEIgFAEIgQAAQgFgCgDgHg");
	this.shape_46.setTransform(211.1589,99.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A0CBD0").s().p("AgJAIQgCgJAAgJIAVAAQAEAOgEAEQgDAEgHgBQgIAAgBgDg");
	this.shape_47.setTransform(213.5958,56.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#35343A").s().p("AgBABIABgEQABABABACQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAIgCgDg");
	this.shape_48.setTransform(205.695,68.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000007").s().p("AAJAOIgXgHQgOABgBgCQgBgBAAgFIAAgGIACgGIAegBIAEAHIASAJQAHADAAAFIgBADg");
	this.shape_49.setTransform(221.925,98.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#AEC7C9").s().p("AgDBbQgQgBgPgEIgMgEQgHikgDgBIAdgEQBFgGAKAFQAKAEgKCnQgaAIgWAAIgHAAgAg4hTIAAAAIAAAAg");
	this.shape_50.setTransform(215.9314,58.5404);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C5A9B5").s().p("AgKA6IAAgWIAVAAIAAAWgAgKAcIAAgFQAAgKADgGQAEgGAIgHQAKgIABgCQADgEAAgFQAAgGgEgFQgFgEgKAAQgHAAgFAFQgGAEgCAKIgUgCQABgOAKgKQAMgKARAAQATAAALAKQALAKAAANQAAAHgFAHQgCAFgPALQgIAHgBADQgBADAAAJg");
	this.shape_51.setTransform(233.95,34.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7DA98").s().p("AhlBdQAJgUAEgPIACgOQAAgCgCgDQgQgVAAgbQABgeAVgXQAUgVAhgJQAWgGATACQAnAEAbAZQAWAUAFAbQAEAdgRAZQgRAagdAMQgbAKgcgDIgXgDIgDAAQgNAIgWAGIgeAHIgEABg");
	this.shape_52.setTransform(234.1971,35.3983);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E3989C").s().p("AlyF0QiaibAAjZQAAjZCaiaQCZiZDZgBQDaABCaCZQCZCaAADZQAADZiZCbQiaCZjaABQjZgBiZiZg");
	this.shape_53.setTransform(215.875,65.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D0E1E5").s().p("AgzA1QgWgWAAgfQgBgeAWgWQAWgWAeAAQAfAAAWAWQAWAVAAAfQAAAegWAWQgVAWgfAAIgBABQgdAAgWgWg");
	this.shape_54.setTransform(103.3994,107.8006);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D0E1E5").s().p("AAABKQgeAAgWgWQgWgWAAgeQABgeAWgWQAVgVAeAAQAegBAXAWQAWAWAAAeQAAAfgWAWQgWAVgeAAIgBAAg");
	this.shape_55.setTransform(140.9244,78.125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D0E1E5").s().p("AAABKQgeAAgWgWQgWgWAAgeQAAgeAWgWQAWgWAeABQAfAAAWAWQAWAWAAAdQgBAfgWAWQgVAVgeAAIgBAAg");
	this.shape_56.setTransform(65.8506,136.075);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8EA6D9").s().p("AgGAnIAAhKQAAgRAOgCIAABtIgBAAQgOAAABgQg");
	this.shape_57.setTransform(58.9492,158.3508);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8EA6D9").s().p("AgGA2IAAhtQANABAAAMQABAwgBAnQAAACgEAEIgGAFg");
	this.shape_58.setTransform(72.745,158.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F7DA98").s().p("AgDA0QgEgEABgJIAAhKQAAgRAOgDIAABvQgIgBgDgDg");
	this.shape_59.setTransform(134,100.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7DA98").s().p("AgHA2IAAhuQAOACAAAOQABA4gBAcQAAACgEAEIgGAHg");
	this.shape_60.setTransform(147.8,100.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6DB5C5").s().p("AgGA1IAAhsQANABAAAOQABA4gBAcQAAADgEAEIgGAFg");
	this.shape_61.setTransform(110.3,130.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6DB5C5").s().p("AgDAzQgEgDAAgJIABhKQAAgRAOgCIAABtQgIAAgDgEg");
	this.shape_62.setTransform(96.4722,130.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6DB5C5").s().p("AgaCiQgDgFACgIIAWhnQAEgPgKgIIgFgHQgGgMgLgCQgIgCgOAEQghAJgTAZQgTAYAAAiIAAA+QhCg3gFhVQgEhUA7g/QA6g9BVAAQBXAAA5A/QA6A/gFBUQgFBVhCA1IAAgPIAAghQAAgUgCgOQgEgfgbgWQgbgWgfAAQgFgBgEAEQgNAOgGALQgEAFACAIIAWBoQAEAOgLAIIgVAXIgagdgAg0iJQgWAXABAeQAAAgAWAVQAWAWAeAAQAfgBAVgWQAWgWAAgeQAAgggWgVQgWgWgfABQgeAAgWAVg");
	this.shape_63.setTransform(103.3829,116.2998);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7DA98").s().p("AgZCkQgEgFACgIIAWhsQACgGgFgKQgBgDgHgHQgLgOgGgBQgGgCgSAFQgcAIgUAXQgWAaABAjIABA8QgngagUg1QgWg6AOg5QAQhCA1gqQA0grBCgBQBDgBA3AnQA3AoASA/QASA+gWA9QgTA2gpAdIAAg+QACglgZgbQgYgYgigGQgNgCgKAKQgWAWAJAfQAGATAOBGQABAIgEAEIgaAbgAAAieQgeAAgVAWQgWAVgBAfQAAAeAWAXQAWAWAeAAQAfAAAWgWQAWgVAAgfQAAgfgWgWQgWgWgeAAIgBAAg");
	this.shape_64.setTransform(140.9078,86.5988);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8EA6D9").s().p("AgaCjQgDgFACgIQALg7AMgvQACgLgHgIQgFgFgEgGQgKgRgYAGQgjAJgTAZQgTAZgBAjIAAA7QgfgMgXg5QgXg5AHguQAKhIAzgwQAygvBDgGQBHgGA6AnQA6AnAVBEQASA9gVA+QgUA3gpAcIAAg9QACgmgbgcQgagagmgDQgGAAgDADQgNAOgJANQgCADABAIIAXBsQADAKgHAGIgYAYIgagbgAg0iJQgWAWAAAfQAAAeAWAWQAWAXAeAAQAeAAAWgVQAWgWABgfQAAgfgWgWQgWgWgfAAIAAAAQgeAAgWAVg");
	this.shape_65.setTransform(65.8562,144.51);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8EA6D9").s().p("AiPBpIAAjRIEfAAIAADRg");
	this.shape_66.setTransform(65.5,179.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6DB5C5").s().p("AiPD4IAAnsIABgDIEeAAIAAHvg");
	this.shape_67.setTransform(103.375,165.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7DA98").s().p("AiQGKIABgNIAAsGIEfAAIABMTg");
	this.shape_68.setTransform(140.9,150.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D0E1E5").s().p("AlnNUQimhGiAiAQiAiAhGimQhIisAAi8QAAi7BIisQBGilCAiAQCAiACmhHQCshIC7AAQC8AACsBIQClBHCACAQCACABHClQBICsAAC7QAAC8hICsQhHCmiACAQh/CAimBGQisBIi8AAQi7AAishIg");
	this.shape_69.setTransform(106.425,129.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EFEFEF").s().p("AsWR3QjGhUiZiZQiZiZhVjHQhXjOAAjhQAAjhBXjNQBUjHCaiZQCZiZDGhVQDOhXDiAAQEZAADzCEQBWirCihmQCnhoDGAAQEdAADJDJQDKDKAAEcQAAEdjKDJQjJDJkdAAIgfgBQgEDehZDKQhWDDiYCWQiZCWjFBSQjLBVjeAAQjiAAjOhXg");
	this.shape_70.setTransform(140.925,118.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_19},{t:this.instance_18},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_10},{t:this.shape_9},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M02_TMR_PREGUNTA2, new cjs.Rectangle(-5.7,-4.8,293.3,246), null);


(lib.M02_TMR_CV1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F795E").s().p("AgRAEIAdgQIAGAMQAAAFgKAEIgJAEg");
	this.shape.setTransform(155.95,99.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F795E").s().p("AgFAKQgMgHAAgEIAGgNIAdAUIgNAJIgKgFg");
	this.shape_1.setTransform(152.325,99.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DAA675").s().p("AA0AkQACgIgBgLQgCgKgSAAQgXACgKAAQgOgBgMgJIgKgKQgFAUgDADQgCABgDAOIgCANIgGgIQgGgJAAgBQAEgMgCgKQgDgRAFgFIABAAQgBgCARgIQAUgIATgCQATgCAYAPQAXANABALQABAKgCAOQgCAOgDABQgDAAgCAFIgDAEg");
	this.shape_2.setTransform(153.9397,85.5379);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4B98C").s().p("Ag5AqQAUhAAHgFQAOgJAdgCQARgGAPAJQAHAFAFAFIABBDg");
	this.shape_3.setTransform(149.2,103.2457);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4B98C").s().p("Ag7AqIADhDIAMgKQAPgJAQAGIAQACQATADAIAGQAKAHAUA+g");
	this.shape_4.setTransform(159.375,103.2457);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9BD9C").s().p("AgIBGIgPgIQgQgLgJgPIAAgCIAAgKIgBAAIgEgCIgCgKIgDgTIABgEQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIABACIACAAQgCAAAAgSQAAgWALgFIAAAAIAMgJQAPgJANAAIACAAIAAAAIABAAIAAAAQAOgBAPAKIAMAJQAMAGAAAVIgCASIgBACIACgCQAEgEABABQADABgCAKIAAAAIgFAVIAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIAAAAIgCAMIAAACQgRAWgTAKIgBABIgKABQgFAAgEgCg");
	this.shape_5.setTransform(153.9444,90.218);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDAB86").s().p("AgEAbQgngBAKgKQANgNACgYQAkgLABALQAAAHAIAVIAJAUIgZABIgPgBg");
	this.shape_6.setTransform(154.106,97.3825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F3231").s().p("AhBAxIgFgCIgCgEQgDgJgDgVQgDgSAPgMQgBgYAVgKQgHAJgBAHIABAAQAIgIANgGQAWgLAegBQgLACgIAEIgBACQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAABgBQAmgDAUANIgIAAIAAABQAcALAAAaIgHgIIgBABQAEALgDALQAAgDgEgDIgDAcIgDAOQgGAAgDAFIgDAHQADgjgJgNQgNgTglAAIgkAFQgHAPgJALIgCAnQgBgKgFgCg");
	this.shape_7.setTransform(60.5757,85.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F3231").s().p("AARALQgJgBAAgIIAAgBQgDgCgDAAIgBAAQgCAAgDACIAAABQgBAIgIABIgdAAQgJgEABgFIAAgCIgIABIgBgFIAKgBQABgDAHgCIAaAAQAHAAADAFQADgCAEABQADgBADACQAFgFAGAAIAaAAQAGACACADIAHABIAAADIgGABIAAACQAAAFgIAEgAAMgEIAAAHQAAADAEACIAeAAQADgBABgEIAAgHQgBgBAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIgeAAQAAAAgBABQgBAAAAAAQgBAAAAABQAAAAAAABgAgugEIAAAHQAAADAEACIAeAAQAEgBgBgEIAAgHQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgeAAQgBAAgBABQgBAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_8.setTransform(60,90.65);

	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(70.3,104.6,1,1,0,0,0,0.9,1.9);
	this.instance.alpha = 0.3906;

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.2,105.45,1,1,0,0,0,0.6,1.2);
	this.instance_1.alpha = 0.3906;

	this.instance_2 = new lib.Group_2_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.15,104.45,1,1,0,0,0,1.2,2.3);
	this.instance_2.alpha = 0.3906;

	this.instance_3 = new lib.Group_3_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51.95,104.45,1,1,0,0,0,1.1,2.3);
	this.instance_3.alpha = 0.3906;

	this.instance_4 = new lib.Group_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(51.45,105.1,1,1,0,0,0,0.7,1.6);
	this.instance_4.alpha = 0.3906;

	this.instance_5 = new lib.Group_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(50.55,104.5,1,1,0,0,0,0.8,2);
	this.instance_5.alpha = 0.3906;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A9B3BC").s().p("AgUAEIAhgSIAIAOQgBAGgLAFIgKAEg");
	this.shape_9.setTransform(62.475,101.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A9B3BC").s().p("AgHALQgNgIAAgFIAHgOIAiAXIgQAKIgMgGg");
	this.shape_10.setTransform(58.275,101.325);

	this.instance_6 = new lib.Group_6_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(61.35,104.2,1,1,0,0,0,0.4,2.4);
	this.instance_6.alpha = 0.3906;

	this.instance_7 = new lib.Group_7_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(62.9,104.15,1,1,0,0,0,0.4,2.5);
	this.instance_7.alpha = 0.3906;

	this.instance_8 = new lib.Group_8_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(64.15,104,1,1,0,0,0,0.4,2.5);
	this.instance_8.alpha = 0.3906;

	this.instance_9 = new lib.Group_9_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(67.85,104.1,1,1,0,0,0,0.4,2.4);
	this.instance_9.alpha = 0.3906;

	this.instance_10 = new lib.Group_10_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(66.8,103.95,1,1,0,0,0,0.4,2.6);
	this.instance_10.alpha = 0.3906;

	this.instance_11 = new lib.Group_11_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(65.25,103.85,1,1,0,0,0,0.4,2.7);
	this.instance_11.alpha = 0.3906;

	this.instance_12 = new lib.Group_12_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(59.7,104.2,1,1,0,0,0,0.4,2.4);
	this.instance_12.alpha = 0.3906;

	this.instance_13 = new lib.Group_13_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(58.15,104.15,1,1,0,0,0,0.4,2.5);
	this.instance_13.alpha = 0.3906;

	this.instance_14 = new lib.Group_14_0();
	this.instance_14.parent = this;
	this.instance_14.setTransform(56.9,104,1,1,0,0,0,0.4,2.5);
	this.instance_14.alpha = 0.3906;

	this.instance_15 = new lib.Group_15_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(53.2,104.1,1,1,0,0,0,0.4,2.4);
	this.instance_15.alpha = 0.3906;

	this.instance_16 = new lib.Group_16_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(54.25,103.95,1,1,0,0,0,0.4,2.6);
	this.instance_16.alpha = 0.3906;

	this.instance_17 = new lib.Group_17_0();
	this.instance_17.parent = this;
	this.instance_17.setTransform(55.75,103.85,1,1,0,0,0,0.4,2.7);
	this.instance_17.alpha = 0.3906;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBCACB").s().p("Ag9AhQAQguAFgEQARgKAigDQATgGARALQAJAFAFAGIABAvg");
	this.shape_11.setTransform(55.1,104.1159);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCD0D0").s().p("Ag/AhIACgvIAOgLQARgLATAGIATADQAVAEALAGQAHAGARAsg");
	this.shape_12.setTransform(65.975,104.1159);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8AF93").s().p("AAJAAIgFAAIgDAAIgHAAIgIACIAHgDIAIgCIACAAIAGACQAFABABADQgCgCgEgBg");
	this.shape_13.setTransform(57.15,90.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E1BB93").s().p("AgKBRQgdgLgQgdIgBgCIAAgLIgBAAQgEAAAAgDIgBAAIgGghQAAgFACAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABABAAIABADIABgBIgCgUQAAgZANgHIAOgKQARgKAQAAIADAAQAQgBASALQAIAFAGAFQANAHAAAZIgCAUIgBADIACgCQAEgFACABQADACgCAKIAAABIgCAOIgDALQgCADgDAAIgBAAIgBAOIgBACQgRAZgZAMIgBABIgMABQgFAAgFgCg");
	this.shape_14.setTransform(60.14,90.5805);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6AE89").s().p("AgEAfQgtgBALgMQAPgPACgcIAVgFQAVgDABAIQAAAIAKAYIAKAYIgdABIgRgBg");
	this.shape_15.setTransform(60.342,98.8771);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3F3F3F").s().p("AgTAmIgFhJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQAjABAGAWQAFAQACAkg");
	this.shape_16.setTransform(117.525,103.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3F3F3F").s().p("AgZAmQADgjAFgRQAGgWAjgBQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIgKBJg");
	this.shape_17.setTransform(101.85,103.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2F2F2F").s().p("AgXAtIAchaIAJAIQAFADAFAfIgQgDIAMAVQABABgUAdg");
	this.shape_18.setTransform(112.4,102.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F2F2F").s().p("AAAArIgTgeIAMgVIgQADIADgRQADgNADgCIALgGIAbBWg");
	this.shape_19.setTransform(106.675,103.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ACADAD").s().p("AAWAcIgGgMIgQgTIgPATIgHAMQgBAGgCgGIgMgpIAAgBIAPgNIADAFQAMAQAHAAQALAAAHgKIAHgOIANAQIAAABIgMApIgCADIgCgDg");
	this.shape_20.setTransform(109.55,101.169);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3B3B3").s().p("AgcAsIAWhYQAAABAHAFIAJAFQAGAEALABQgCAQABAUIADAkg");
	this.shape_21.setTransform(112.875,102.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3B3B3").s().p("AgaAqQACg3gDgRIAJgCIAJgDIAJgGQAEAOAJAYQAJAXAEAOIACAIg");
	this.shape_22.setTransform(106.4,103.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5E6E6").s().p("AgJAhIgSgoQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAMgQAOgEQAPAEANAQQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABIgSAog");
	this.shape_23.setTransform(109.55,104.075);

	this.instance_18 = new lib.ClipGroup_0();
	this.instance_18.parent = this;
	this.instance_18.setTransform(109.65,89.2,1,1,0,0,0,6.9,9.6);

	this.instance_19 = new lib.ClipGroup_1_0();
	this.instance_19.parent = this;
	this.instance_19.setTransform(109.55,78.25,1,1,0,0,0,4.4,2.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECAA86").s().p("AgDgHQAEgJAEAFQACALgGAHIgGAGg");
	this.shape_24.setTransform(115.415,91.0574);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#ECAA86").s().p("AAAAHQgGgHACgLIACgBQACgBADAGIACAUIgFgGg");
	this.shape_25.setTransform(103.86,91.0729);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9BD9C").s().p("AgSBMQgVgOgNgZIgFgHQgHgIACgLIACgBQAEAAACAFIgGgZQgDgfALgOIANgOQAQgNAVgCIAFAAQAUACAQANQAJAIAEAGQAMAOgDAfIgHAZQAFgJAEAFQACALgGAIIgHAHQgMAZgWAOIgSAJQgIgCgKgHg");
	this.shape_26.setTransform(109.65,88.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ECAA86").s().p("AhHA4QgKAAgHgIQgHgJAAgMQAAgMAHgIQAHgIAKAAIAfgFQAIgCAGgHQAHgGAAgFIAAgdQAIAEAMAAQANAAAJgEIgBAdQAAAFAGAGQAFAHAHACIAgAFQAKAAAHAIQAHAIAAAMQAAAMgHAJQgHAIgKAAg");
	this.shape_27.setTransform(109.625,100.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_28.setTransform(151.95,151.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_29.setTransform(151.95,141.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_30.setTransform(151.95,131.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_31.setTransform(106.95,151.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_32.setTransform(106.95,141.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_33.setTransform(106.95,131.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_34.setTransform(60.95,151.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_35.setTransform(60.95,141.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(2.8).p("AijAAIFHAA");
	this.shape_36.setTransform(60.95,131.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(2.8).p("AEoAAQAAB7hWBXQhXBXh7AAQh6AAhXhXQhXhXAAh7QAAh6BXhXQBXhXB6AAQB7AABXBXQBWBXAAB6g");
	this.shape_37.setTransform(61.35,92.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7995A3").s().p("AjRDSQhWhXgBh7QABh5BWhYQBYhWB5AAQB7AABXBWQBXBYgBB5QABB7hXBXQhXBWh7ABQh5gBhYhWg");
	this.shape_38.setTransform(61.35,92.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(2.8).p("AEoAAQAAB7hWBXQhXBXh7AAQh6AAhXhXQhXhXAAh7QAAh6BXhXQBXhXB6AAQB7AABXBXQBWBXAAB6g");
	this.shape_39.setTransform(109.35,92.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7DA489").s().p("AjRDSQhWhXAAh7QAAh5BWhYQBYhWB5AAQB7AABXBWQBXBYAAB5QAAB7hXBXQhXBWh7ABQh5gBhYhWg");
	this.shape_40.setTransform(109.35,92.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2.8).p("AEpAAQAAB7hXBXQhXBXh7AAQh5AAhXhXQhXhXAAh7QAAh6BXhXQBXhXB5AAQB7AABXBXQBXBXAAB6g");
	this.shape_41.setTransform(151.35,92.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5A7D69").s().p("AjRDSQhWhXgBh7QABh5BWhYQBYhWB5AAQB7AABXBWQBXBYgBB5QABB7hXBXQhXBWh7ABQh5gBhYhWg");
	this.shape_42.setTransform(151.35,92.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C3D4CA").s().p("AlZM0QighEh8h7Qh7h7hDifQhGimAAi1QAAi0BGilQBDigB7h7QB8h7CghEQClhGC0AAQC1AACmBGQCfBEB7B7QB8B7BDCgQBGClAAC0QAAC1hGCmQhDCfh8B7Qh7B7ifBEQimBGi1AAQi0AAilhGg");
	this.shape_43.setTransform(106.05,105.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjGAAjYQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXAAQDYAADGBUQC/BRCTCTQCTCTBRC/QBUDGAADXQAADZhUDFQhRC/iTCTQiTCTi/BRQjGBUjYAAQjXAAjGhUg");
	this.shape_44.setTransform(106.375,106.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_19},{t:this.instance_18},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_10},{t:this.shape_9},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M02_TMR_CV1, new cjs.Rectangle(0,0,212.8,212.8), null);


(lib.iconoinfoposicionesbien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M02_TMR_CV1();
	this.instance.parent = this;
	this.instance.setTransform(68.7,113.8,0.7192,0.7192,0,0,0,106.6,106.6);

	this.text = new cjs.Text("Información de \nlas posiciones.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 181;
	this.text.parent = this;
	this.text.setTransform(69.4,206.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AiOj4IEdD4IkdD5g");
	this.shape.setTransform(188.95,131.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("APWeaIsCAAIkXAAItWAAQh4AAAAh4IAAj1IAAgBIAAjvIAAhtIAAiiIAAlIIAAisIAAh3IAAjbIAAhQIAAhQIAAoRIAAAAIAAjTIAAjRMAgjAAAMAAAAsHgAwRtuIAAuzQAAh4B4AAINWAAIEXAAIMCAAIA8AAIAAQrg");
	this.shape_1.setTransform(70.425,161.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-32.8,237.10000000000002,389.2);


(lib.iconoinfoimpactoposiciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M02_TMR_PREGUNTA2();
	this.instance.parent = this;
	this.instance.setTransform(69.5,113.85,0.6154,0.6154,0,0,0,141.1,118.5);

	this.text = new cjs.Text("Impacto y contribución.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 147;
	this.text.parent = this;
	this.text.setTransform(68.75,206.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AiOj4IEdD4IkdD5g");
	this.shape.setTransform(188.95,131.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("APWeaIsCAAIkXAAItWAAQh4AAAAh4IAAj1IAAgBIAAjvIAAhtIAAiiIAAlIIAAisIAAh3IAAjbIAAhQIAAhQIAAoRIAAAAIAAjTIAAjRMAgjAAAMAAAAsHgAwRtuIAAuzQAAh4B4AAINWAAIEXAAIMCAAIA8AAIAAQrg");
	this.shape_1.setTransform(70.425,161.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.8,-32.8,237.10000000000002,389.2);


(lib.flechamueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flechainstrucciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.55,22.35);

	this.instance_1 = new lib.circulo1instrucciones("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,24.45,1,1,0,0,0,105.2,10.2);

	this.instance_2 = new lib.circulo2instrucciones("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.3,23.45,1.6513,1.6513,0,0,0,14.1,14.2);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.circulo2instrucciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,23.3,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.5,43.3,43.3);


(lib.cajagrismc1t3m2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bulletrojoarcachico("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.55,247.45,1.1449,1.1449,0,0,0,5.9,5.9);

	this.text = new cjs.Text("Identificar y minimizar el impacto de las vacantes de manera ágil.", "16px 'Arial'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 388;
	this.text.parent = this;
	this.text.setTransform(43.45,236.85);

	this.instance_1 = new lib.bulletrojoarcachico("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.55,180.45,1.1449,1.1449,0,0,0,5.9,5.9);

	this.text_1 = new cjs.Text("Garantizar la inversión requerida para el desarrollo y la planificación de carrera de los candidatos a la sucesión.", "16px 'Arial'");
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 370;
	this.text_1.parent = this;
	this.text_1.setTransform(43.45,171.35);

	this.instance_2 = new lib.bulletrojoarcachico("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.55,132.95,1.1449,1.1449,0,0,0,5.9,5.9);

	this.text_2 = new cjs.Text("Alinear con éxito la estrategia empresarial y el desarrollo del flujo de talento.", "16px 'Arial'");
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 394;
	this.text_2.parent = this;
	this.text_2.setTransform(43.45,123.85);

	this.text_3 = new cjs.Text("Beneficios:", "16px 'Arial'");
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 404;
	this.text_3.parent = this;
	this.text_3.setTransform(30.55,88.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("A+lXhQhoAAhKhJQhIhJgBhoMAAAgnNQABhoBIhJQBKhJBoAAMA9LAAAQBoAABJBJQBKBJAABoMAAAAnNQAABohKBJQhJBJhoAAg");
	this.shape.setTransform(220.85,150.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,441.7,301.1);


(lib.AS_LG_MOV_10ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape.setTransform(28.9,33.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_1.setTransform(28.9,33.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_2.setTransform(28.9,33.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.118)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_3.setTransform(28.9,33.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.059)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_4.setTransform(28.9,33.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_5.setTransform(28.9,33.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.039)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_6.setTransform(28.9,33.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_7.setTransform(28.9,33.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.114)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_8.setTransform(28.9,33.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_9.setTransform(28.9,33.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.188)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_10.setTransform(28.9,33.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.224)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_11.setTransform(28.9,33.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.263)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_12.setTransform(28.9,33.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(12));

	// Layer 1
	this.instance = new lib.AS_LG_153ss("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.85,14.9,1,1,0,0,0,23.9,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_13.setTransform(28.775,32.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_14.setTransform(28.9064,33.1377,0.3846,0.3846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-7.7,81.8,81.8);


(lib.AS_LG_MOV_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape.setTransform(28.9,33.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.275)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_1.setTransform(28.9,33.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.251)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_2.setTransform(28.9,33.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.227)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_3.setTransform(28.9,33.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.208)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_4.setTransform(28.9,33.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.184)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_5.setTransform(28.9,33.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.161)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_6.setTransform(28.9,33.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.137)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_7.setTransform(28.9,33.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.114)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_8.setTransform(28.9,33.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.09)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_9.setTransform(28.9,33.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.071)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_10.setTransform(28.9,33.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.047)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_11.setTransform(28.9,33.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.024)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_12.setTransform(28.9,33.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_13.setTransform(28.9,33.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.02)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_14.setTransform(28.9,33.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.039)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_15.setTransform(28.9,33.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.059)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_16.setTransform(28.9,33.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.078)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_17.setTransform(28.9,33.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.098)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_18.setTransform(28.9,33.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.118)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_19.setTransform(28.9,33.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_20.setTransform(28.9,33.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.2)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_21.setTransform(28.9,33.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.22)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_22.setTransform(28.9,33.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_23.setTransform(28.9,33.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.259)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_24.setTransform(28.9,33.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.278)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_25.setTransform(28.9,33.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape}]},1).wait(12));

	// Layer 1
	this.instance = new lib.AS_LG_153("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.85,14.9,1,1,0,0,0,23.9,23.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_26.setTransform(28.775,32.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_27.setTransform(28.9064,33.1377,0.3846,0.3846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.instance}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-7.7,81.8,81.8);


(lib.AS_LG_152c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.barraScrollVertical("single",1);
	this.instance.parent = this;
	this.instance.setTransform(37.1,1.9,1,1,0,0,0,37.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,3.7);


(lib.AS_LG_150Botónpaginación = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgnBBQgGgEACgIIAPgyIAAgFIgPgyQgCgIAGgEQAHgFAGAFIBDA5QAEADAAAEQAAAFgEADIhDA5QgDACgDAAQgDAAgEgCg");
	this.shape.setTransform(11.1265,9.9809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AhFBGQgdgdAAgpQAAgpAdgdQAdgdAoAAQApAAAdAdQAdAdAAApQAAApgdAdQgdAegpgBQgoABgdgegAgVg4QgEADAAAFQAAAFAEADIAqAqIgqArQgEAEAAAFQAAAEAEAEQADADAFAAQAFAAADgDIAyg0QADgDAAgFQAAgEgDgDIgygzQgDgEgFAAQgFAAgDAEg");
	this.shape_1.setTransform(9.925,9.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.instance = new lib.AS_LG_151("single",1);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.9,19.9);


(lib.scrollm2t3mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var rewind;
		this.rewind = false;
		var forward;
		this.forward = false;
		//funciona como reset, si el usuario regresa a esta pagina no tendra
		//el evento dos veces.....solo una vez
		this.btn_siguiente5.removeAllEventListeners();
		this.btn_atras5.removeAllEventListeners();
		init();
		function init() {
			///FORWARD
			root.btn_siguiente5.addEventListener("mousedown", playForwards);
			function playForwards() {
				root.forward = true;
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				playF();
			}
		
			function playF(e) {
				console.log("avanzando");
				root.gotoAndStop(root.timeline.position + 1);
				if (root.forward) {
					var my_timedProcess = setTimeout(playF, 25);
				}
				
			}
			///REWIND
			root.btn_atras5.addEventListener("click", playReverse);
			function playReverse() {
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				root.rewind = true;
				playR();
			}
		
			function playR(e) {
				console.log("retrocediendo");
				root.gotoAndStop(root.timeline.position - 1);
				if (root.rewind) {
					var my_timedProcess = setTimeout(playR, 25);
				}
				
			}
		
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
	}
	this.frame_111 = function() {
		this.stop();
		parent.siguiente_naranja();
		this.rewind=false;
		this.forward=false;
		this.btn_atras5.mouseEnabled=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(82).call(this.frame_111).wait(1));

	// cortina scroll (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_55 = new cjs.Graphics().p("EgxqAEpIAA1QMBjVAAAIAAVQg");
	var mask_graphics_56 = new cjs.Graphics().p("EgxqAHRIAA3VMBjVAAAIAAXVg");
	var mask_graphics_57 = new cjs.Graphics().p("EgxqAJzIAA5UMBjVAAAIAAZUg");
	var mask_graphics_58 = new cjs.Graphics().p("EgxqAMSIAA7SMBjVAAAIAAbSg");
	var mask_graphics_59 = new cjs.Graphics().p("EgxqAOmIAA9LMBjVAAAIAAdLg");
	var mask_graphics_60 = new cjs.Graphics().p("EgxqAPhIAA/BMBjVAAAIAAfBg");
	var mask_graphics_61 = new cjs.Graphics().p("EgxqAQaMAAAggzMBjVAAAMAAAAgzg");
	var mask_graphics_62 = new cjs.Graphics().p("EgxqARSMAAAgijMBjVAAAMAAAAijg");
	var mask_graphics_63 = new cjs.Graphics().p("EgxqASHMAAAgkNMBjVAAAMAAAAkNg");
	var mask_graphics_64 = new cjs.Graphics().p("EgxqAS7MAAAgl1MBjVAAAMAAAAl1g");
	var mask_graphics_65 = new cjs.Graphics().p("EgxqATtMAAAgnZMBjVAAAMAAAAnZg");
	var mask_graphics_66 = new cjs.Graphics().p("EgxqAUeMAAAgo7MBjVAAAMAAAAo7g");
	var mask_graphics_67 = new cjs.Graphics().p("EgxqAVMMAAAgqXMBjVAAAMAAAAqXg");
	var mask_graphics_68 = new cjs.Graphics().p("EgxqAV5MAAAgrxMBjVAAAMAAAArxg");
	var mask_graphics_69 = new cjs.Graphics().p("EgxqAWkMAAAgtHMBjVAAAMAAAAtHg");
	var mask_graphics_70 = new cjs.Graphics().p("EgxqAXOMAAAgubMBjVAAAMAAAAubg");
	var mask_graphics_71 = new cjs.Graphics().p("EgxqAX1MAAAgvpMBjVAAAMAAAAvpg");
	var mask_graphics_72 = new cjs.Graphics().p("EgxqAYbMAAAgw1MBjVAAAMAAAAw1g");
	var mask_graphics_73 = new cjs.Graphics().p("EgxqAY/MAAAgx9MBjVAAAMAAAAx9g");
	var mask_graphics_74 = new cjs.Graphics().p("EgxqAZhMAAAgzBMBjVAAAMAAAAzBg");
	var mask_graphics_75 = new cjs.Graphics().p("EgxqAaCMAAAg0DMBjVAAAMAAAA0Dg");
	var mask_graphics_76 = new cjs.Graphics().p("EgxqAahMAAAg1BMBjVAAAMAAAA1Bg");
	var mask_graphics_77 = new cjs.Graphics().p("EgxqAa+MAAAg17MBjVAAAMAAAA17g");
	var mask_graphics_78 = new cjs.Graphics().p("EgxqAbZMAAAg2xMBjVAAAMAAAA2xg");
	var mask_graphics_79 = new cjs.Graphics().p("EgxqAbyMAAAg3jMBjVAAAMAAAA3jg");
	var mask_graphics_80 = new cjs.Graphics().p("EgxqAcKMAAAg4TMBjVAAAMAAAA4Tg");
	var mask_graphics_81 = new cjs.Graphics().p("EgxqAcgMAAAg4/MBjVAAAMAAAA4/g");
	var mask_graphics_82 = new cjs.Graphics().p("EgxqAc0MAAAg5nMBjVAAAMAAAA5ng");
	var mask_graphics_83 = new cjs.Graphics().p("EgxqAdHMAAAg6NMBjVAAAMAAAA6Ng");
	var mask_graphics_84 = new cjs.Graphics().p("EgxqAdYMAAAg6vMBjVAAAMAAAA6vg");
	var mask_graphics_85 = new cjs.Graphics().p("EgxqAdmMAAAg7LMBjVAAAMAAAA7Lg");
	var mask_graphics_86 = new cjs.Graphics().p("EgxqAd0MAAAg7nMBjVAAAMAAAA7ng");
	var mask_graphics_87 = new cjs.Graphics().p("EgxqAd/MAAAg79MBjVAAAMAAAA79g");
	var mask_graphics_88 = new cjs.Graphics().p("EgxqAeJMAAAg8RMBjVAAAMAAAA8Rg");
	var mask_graphics_89 = new cjs.Graphics().p("EgxqAeRMAAAg8hMBjVAAAMAAAA8hg");
	var mask_graphics_90 = new cjs.Graphics().p("EgxqAeXMAAAg8tMBjVAAAMAAAA8tg");
	var mask_graphics_91 = new cjs.Graphics().p("EgxqAebMAAAg81MBjVAAAMAAAA81g");
	var mask_graphics_92 = new cjs.Graphics().p("EgxqAeeMAAAg87MBjVAAAMAAAA87g");
	var mask_graphics_93 = new cjs.Graphics().p("EgxqAefMAAAg89MBjVAAAMAAAA89g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_graphics_55,x:243.8994,y:-106.425}).wait(1).to({graphics:mask_graphics_56,x:244.0033,y:-102.8834}).wait(1).to({graphics:mask_graphics_57,x:244.1044,y:-99.4362}).wait(1).to({graphics:mask_graphics_58,x:244.2028,y:-96.0835}).wait(1).to({graphics:mask_graphics_59,x:244.2983,y:-92.2456}).wait(1).to({graphics:mask_graphics_60,x:244.3911,y:-80.0251}).wait(1).to({graphics:mask_graphics_61,x:244.4812,y:-68.1693}).wait(1).to({graphics:mask_graphics_62,x:244.5684,y:-56.6784}).wait(1).to({graphics:mask_graphics_63,x:244.6529,y:-45.5523}).wait(1).to({graphics:mask_graphics_64,x:244.7346,y:-34.7909}).wait(1).to({graphics:mask_graphics_65,x:244.8136,y:-24.3943}).wait(1).to({graphics:mask_graphics_66,x:244.8897,y:-14.3626}).wait(1).to({graphics:mask_graphics_67,x:244.9632,y:-4.6956}).wait(1).to({graphics:mask_graphics_68,x:245.0338,y:4.6066}).wait(1).to({graphics:mask_graphics_69,x:245.1017,y:13.544}).wait(1).to({graphics:mask_graphics_70,x:245.1668,y:22.1166}).wait(1).to({graphics:mask_graphics_71,x:245.2291,y:30.3244}).wait(1).to({graphics:mask_graphics_72,x:245.2886,y:38.1674}).wait(1).to({graphics:mask_graphics_73,x:245.3454,y:45.6456}).wait(1).to({graphics:mask_graphics_74,x:245.3994,y:52.7591}).wait(1).to({graphics:mask_graphics_75,x:245.4507,y:59.5077}).wait(1).to({graphics:mask_graphics_76,x:245.4992,y:65.8916}).wait(1).to({graphics:mask_graphics_77,x:245.5449,y:71.9106}).wait(1).to({graphics:mask_graphics_78,x:245.5878,y:77.5649}).wait(1).to({graphics:mask_graphics_79,x:245.628,y:82.8544}).wait(1).to({graphics:mask_graphics_80,x:245.6654,y:87.7791}).wait(1).to({graphics:mask_graphics_81,x:245.7,y:92.339}).wait(1).to({graphics:mask_graphics_82,x:245.7319,y:96.5341}).wait(1).to({graphics:mask_graphics_83,x:245.7609,y:100.3644}).wait(1).to({graphics:mask_graphics_84,x:245.7873,y:103.8299}).wait(1).to({graphics:mask_graphics_85,x:245.8108,y:106.9306}).wait(1).to({graphics:mask_graphics_86,x:245.8316,y:109.6666}).wait(1).to({graphics:mask_graphics_87,x:245.8496,y:112.0377}).wait(1).to({graphics:mask_graphics_88,x:245.8648,y:114.0441}).wait(1).to({graphics:mask_graphics_89,x:245.8773,y:115.6856}).wait(1).to({graphics:mask_graphics_90,x:245.887,y:116.9624}).wait(1).to({graphics:mask_graphics_91,x:245.8939,y:117.8744}).wait(1).to({graphics:mask_graphics_92,x:245.8981,y:118.4216}).wait(1).to({graphics:mask_graphics_93,x:245.8994,y:118.7281}).wait(19));

	// texto 2
	this.text = new cjs.Text("Se debe seleccionar con una X una única opción con la cual esté de acuerdo el entrevistado para cada cargo.", "13px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 123;
	this.text.parent = this;
	this.text.setTransform(455.8,142.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BDCCD4").ss(2.8).p("AsVBiQgVAWgYAWQg/A5hqBGIgiAXQALAFAOAIQAhAOBDAfQA7AaApAQQCYA8BrAMQAIABAHAHQABABACACQAAAAAAAAQAFAFAMAOIABgBQAWAVAYAUQEFDdFxAAQFzAAEFjdQEGjdAAk5QAAk3kGjdQkFjelzAAQlxAAkFDeQkGDdAAE3QAAAPABAPQgvA5gKALg");
	this.shape.setTransform(442.0229,181.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AneIWQgZgUgVgWIgBACIgRgTIAAgBIgEgCQgGgIgIAAQhrgMiYg9QgpgPg7gbIhkgtIgZgMIAigYQBphFBAg6QAYgVAUgXQALgKAvg5IgBgeQAAk3EGjeQEFjdFxAAQFzAAEFDdQEFDeAAE3QAAE5kFDdQkFDdlzAAQlxAAkFjdg");
	this.shape_1.setTransform(442.75,181.9);

	this.text_1 = new cjs.Text("\n\n", "6px 'Arial'");
	this.text_1.lineHeight = 8;
	this.text_1.lineWidth = 125;
	this.text_1.parent = this;
	this.text_1.setTransform(281.55,153);

	this.text_2 = new cjs.Text("", "6px 'Arial'");
	this.text_2.lineHeight = 7;
	this.text_2.lineWidth = 125;
	this.text_2.parent = this;
	this.text_2.setTransform(281.55,117);

	this.text_3 = new cjs.Text("", "bold 6px 'Arial'");
	this.text_3.lineHeight = 8;
	this.text_3.lineWidth = 126;
	this.text_3.parent = this;
	this.text_3.setTransform(281.55,92.95);

	this.text_4 = new cjs.Text("0", "9px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 9;
	this.text_4.lineWidth = 28;
	this.text_4.parent = this;
	this.text_4.setTransform(373.85,58.15);

	this.text_5 = new cjs.Text("0", "9px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 9;
	this.text_5.lineWidth = 28;
	this.text_5.parent = this;
	this.text_5.setTransform(400.85,58.15);

	this.text_6 = new cjs.Text("Coordiandor de auditorías", "9px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 10;
	this.text_6.lineWidth = 55;
	this.text_6.parent = this;
	this.text_6.setTransform(328.4,53.5);

	this.text_7 = new cjs.Text("d.", "9px 'Arial'");
	this.text_7.lineHeight = 11;
	this.text_7.lineWidth = 28;
	this.text_7.parent = this;
	this.text_7.setTransform(-33.05,256.8);

	this.text_8 = new cjs.Text("c.", "9px 'Arial'");
	this.text_8.lineHeight = 11;
	this.text_8.lineWidth = 28;
	this.text_8.parent = this;
	this.text_8.setTransform(-33.05,201.85);

	this.text_9 = new cjs.Text("b.", "9px 'Arial'");
	this.text_9.lineHeight = 11;
	this.text_9.lineWidth = 28;
	this.text_9.parent = this;
	this.text_9.setTransform(-33.05,154.65);

	this.text_10 = new cjs.Text("a.", "9px 'Arial'");
	this.text_10.lineHeight = 11;
	this.text_10.lineWidth = 28;
	this.text_10.parent = this;
	this.text_10.setTransform(-33.05,107.7);

	this.text_11 = new cjs.Text("X", "16px 'Arial'", "#333333");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 22;
	this.text_11.parent = this;
	this.text_11.setTransform(263.9,258.2);

	this.text_12 = new cjs.Text("X", "16px 'Arial'", "#333333");
	this.text_12.lineHeight = 20;
	this.text_12.lineWidth = 22;
	this.text_12.parent = this;
	this.text_12.setTransform(324.65,203.35);

	this.text_13 = new cjs.Text("0", "9px 'Arial'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 11;
	this.text_13.lineWidth = 28;
	this.text_13.parent = this;
	this.text_13.setTransform(511.2,58.15);

	this.text_14 = new cjs.Text("0", "9px 'Arial'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 9;
	this.text_14.lineWidth = 28;
	this.text_14.parent = this;
	this.text_14.setTransform(485.9,58.15);

	this.text_15 = new cjs.Text("0", "9px 'Arial'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 9;
	this.text_15.lineWidth = 28;
	this.text_15.parent = this;
	this.text_15.setTransform(458.5,58.15);

	this.text_16 = new cjs.Text("0", "9px 'Arial'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 9;
	this.text_16.lineWidth = 28;
	this.text_16.parent = this;
	this.text_16.setTransform(430.85,58.15);

	this.text_17 = new cjs.Text("8", "9px 'Arial'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 11;
	this.text_17.lineWidth = 28;
	this.text_17.parent = this;
	this.text_17.setTransform(511.2,38.05);

	this.text_18 = new cjs.Text("7", "9px 'Arial'");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 9;
	this.text_18.lineWidth = 28;
	this.text_18.parent = this;
	this.text_18.setTransform(485.9,38.05);

	this.text_19 = new cjs.Text("6", "9px 'Arial'");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 9;
	this.text_19.lineWidth = 28;
	this.text_19.parent = this;
	this.text_19.setTransform(458.5,38.05);

	this.text_20 = new cjs.Text("5", "9px 'Arial'");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 9;
	this.text_20.lineWidth = 28;
	this.text_20.parent = this;
	this.text_20.setTransform(430.85,38.05);

	this.text_21 = new cjs.Text("4", "9px 'Arial'");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 9;
	this.text_21.lineWidth = 28;
	this.text_21.parent = this;
	this.text_21.setTransform(400.85,38.05);

	this.text_22 = new cjs.Text("3", "9px 'Arial'");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 9;
	this.text_22.lineWidth = 28;
	this.text_22.parent = this;
	this.text_22.setTransform(373.85,38.05);

	this.text_23 = new cjs.Text("2", "9px 'Arial'");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 9;
	this.text_23.lineWidth = 28;
	this.text_23.parent = this;
	this.text_23.setTransform(331.95,38.05);

	this.text_24 = new cjs.Text("1", "9px 'Arial'");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 9;
	this.text_24.lineWidth = 28;
	this.text_24.parent = this;
	this.text_24.setTransform(268.25,38.05);

	this.text_25 = new cjs.Text("Gerente de ventas", "9px 'Arial'");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = 10;
	this.text_25.lineWidth = 42;
	this.text_25.parent = this;
	this.text_25.setTransform(267.85,53);

	this.text_26 = new cjs.Text("Nombre de la posición", "10px 'Arial'");
	this.text_26.textAlign = "center";
	this.text_26.lineHeight = 10;
	this.text_26.lineWidth = 175;
	this.text_26.parent = this;
	this.text_26.setTransform(96.5,57.8);

	this.text_27 = new cjs.Text("No.", "9px 'Arial'");
	this.text_27.lineHeight = 9;
	this.text_27.lineWidth = 28;
	this.text_27.parent = this;
	this.text_27.setTransform(89.9,38.05);

	this.text_28 = new cjs.Text("Los sucesores pensados en la pregunta anterior, están Ready now/Ready but not available, por tener menos de 1 año en el cargo o no poder moverse de país o ciudad.", "9px 'Arial'", "#333333");
	this.text_28.lineHeight = 11;
	this.text_28.lineWidth = 237;
	this.text_28.parent = this;
	this.text_28.setTransform(-15.85,247.1);

	this.text_29 = new cjs.Text("A los sucesores pensados en la pregunta anterior, le faltan 1 a 2 años para consolidar las capacidades y poder asumir un rol igual o similar.", "9px 'Arial'", "#333333");
	this.text_29.lineHeight = 11;
	this.text_29.lineWidth = 235;
	this.text_29.parent = this;
	this.text_29.setTransform(-15.85,194.1);

	this.text_30 = new cjs.Text("A los sucesores pensados en la pregunta anterior, le faltan 3 a 5 años para estar listos como sucesor del cargo.", "9px 'Arial'", "#333333");
	this.text_30.lineHeight = 11;
	this.text_30.lineWidth = 236;
	this.text_30.parent = this;
	this.text_30.setTransform(-15.85,151);

	this.text_31 = new cjs.Text("No cuento con sucesores que puedan cubrir esta posición siquiera en 5 años.", "9px 'Arial'", "#333333");
	this.text_31.lineHeight = 11;
	this.text_31.lineWidth = 239;
	this.text_31.parent = this;
	this.text_31.setTransform(-15.85,105);

	this.text_32 = new cjs.Text("P2: ¿ Qué tan listos están los candidatos para fungir como sucesores?", "9px 'Arial'");
	this.text_32.lineHeight = 11;
	this.text_32.lineWidth = 536;
	this.text_32.parent = this;
	this.text_32.setTransform(-22.65,75.25);

	this.text_33 = new cjs.Text("Hay en total cinco preguntas en el cuestionario de Brecha de Capacidades.\nCada pregunta tiene múltiples respuestas.\nPara cada puesto, ingrese una “x” para la respuesta que mejor caracteriza la posición.", "9px 'Arial'", "#333333");
	this.text_33.lineHeight = 10;
	this.text_33.lineWidth = 397;
	this.text_33.parent = this;
	this.text_33.setTransform(108.15,3.25);

	this.text_34 = new cjs.Text("Instrucciones", "9px 'Arial'");
	this.text_34.lineHeight = 11;
	this.text_34.lineWidth = 85;
	this.text_34.parent = this;
	this.text_34.setTransform(-1.35,13.6);

	this.text_35 = new cjs.Text("HERRAMIENTA DE CRITICIDAD DE PUESTO\nEvaluación de Brecha de Disponibilidad", "10px 'Arial'", "#333333");
	this.text_35.textAlign = "center";
	this.text_35.lineHeight = 10;
	this.text_35.lineWidth = 459;
	this.text_35.parent = this;
	this.text_35.setTransform(244.3,-25.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_2.setTransform(-22.434,193.4212,0.9991,0.9809);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E6E6E6").p("AAAwaMAAAAg1");
	this.shape_3.setTransform(238.25,193.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_4.setTransform(301.4654,193.6785,0.9991,0.9832);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_5.setTransform(387.4837,193.6785,0.9991,0.9832);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_6.setTransform(359.9747,193.6785,0.9991,0.9832);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_7.setTransform(415.2418,193.6785,0.9991,0.9832);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_8.setTransform(442.9516,193.6785,0.9991,0.9832);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_9.setTransform(470.3175,193.6785,0.9991,0.9832);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_10.setTransform(498.03,193.6785,0.9991,0.9832);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_11.setTransform(240.555,137.9851,1.1274,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_12.setTransform(240.555,186.6842,1.1274,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_13.setTransform(240.555,233.4336,1.1274,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E6E6E6").p("EgmqgQuMBNVAAAMAAAAhdMhNVAAAg");
	this.shape_14.setTransform(240.1515,193.4212,1.1282,0.9809);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_15.setTransform(416.0385,55.8932,1.1337,1.1201);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_16.setTransform(239.5288,52.6848,1.1337,1.1201);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_17.setTransform(360.2703,55.8932,1.1337,1.1201);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_18.setTransform(234.7976,55.3844,1.1337,1.1201);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_19.setTransform(301.0614,55.8932,1.1337,1.1201);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E6E6E6").p("AAAiZIAAEz");
	this.shape_20.setTransform(387.85,55.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_21.setTransform(435.0385,55.8932,1.1337,1.1201);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_22.setTransform(465.9279,55.8932,1.1337,1.1201);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_23.setTransform(495.3895,55.8932,1.1337,1.1201);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E6E6E6").p("EgmqgC2MBNVAAAIAAFtMhNVAAAg");
	this.shape_24.setTransform(239.8733,18.075,1.1345,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("EgmqAC3IAAltMBNVAAAIAAFtg");
	this.shape_25.setTransform(239.8733,18.075,1.1345,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E6E6E6").p("EgmqgBEMBNVAAAIAACJMhNVAAAg");
	this.shape_26.setTransform(239.506,80.3189,1.1289,1.0964);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E6E6").s().p("EgmqABFIAAiJMBNVAAAIAACJg");
	this.shape_27.setTransform(239.506,80.3189,1.1289,1.0964);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E6E6E6").p("EAmrACpMhNVAAAIAAlRMBNVAAAg");
	this.shape_28.setTransform(240.0065,-15.1795,1.1331,1.1007);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2F2F2").s().p("EgmqACpIAAlRMBNVAAAIAAFRg");
	this.shape_29.setTransform(240.0065,-15.1795,1.1331,1.1007);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0F4E7").s().p("Egr3AZzMAAAgzmMBXvAAAMAAAAzmg");
	this.shape_30.setTransform(239.875,137.45);

	this.instance = new lib.barrabcdespliega("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(636.2,267.55,0.0144,0.7881,0,0,0,397,43.1);
	this.instance.alpha = 0.5;

	this.text_36 = new cjs.Text("Ejemplo de formato de evaluación:", "16px 'Arial'", "#666666");
	this.text_36.lineHeight = 18;
	this.text_36.lineWidth = 482;
	this.text_36.parent = this;
	this.text_36.setTransform(-40.25,-58.95,0.8669,0.8669);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("Ag3AxQgYgUAAgdQAAgcAYgVQAXgUAgAAQAiAAAWAUQAYAVAAAcQAAAdgYAUQgWAVgiAAQggAAgXgVg");
	this.shape_31.setTransform(132.8,410.7);

	var maskedShapeInstanceList = [this.text,this.shape,this.shape_1,this.text_1,this.text_2,this.text_3,this.text_4,this.text_5,this.text_6,this.text_7,this.text_8,this.text_9,this.text_10,this.text_11,this.text_12,this.text_13,this.text_14,this.text_15,this.text_16,this.text_17,this.text_18,this.text_19,this.text_20,this.text_21,this.text_22,this.text_23,this.text_24,this.text_25,this.text_26,this.text_27,this.text_28,this.text_29,this.text_30,this.text_31,this.text_32,this.text_33,this.text_34,this.text_35,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.instance,this.text_36,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.text_36},{t:this.instance},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.shape_1},{t:this.shape},{t:this.text}]},55).wait(57));

	// cortina scroll (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgwqAEpIAA1QMBhVAAAIAAVQg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgwqAIEIAA39MBhVAAAIAAX9g");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgwqALWIAA6iMBhVAAAIAAaig");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgwqAOhIAA9CMBhVAAAIAAdCg");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgwqAPvIAA/dMBhVAAAIAAfdg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgwqAQ5MAAAghxMBhVAAAMAAAAhxg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgwqASAMAAAgj/MBhVAAAMAAAAj/g");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgwqATEMAAAgmHMBhVAAAMAAAAmHg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgwqAUFMAAAgoJMBhVAAAMAAAAoJg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgwqAVDMAAAgqFMBhVAAAMAAAAqFg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgwqAV+MAAAgr7MBhVAAAMAAAAr7g");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgwqAW1MAAAgtpMBhVAAAMAAAAtpg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgwqAXqMAAAgvTMBhVAAAMAAAAvTg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgwqAYcMAAAgw3MBhVAAAMAAAAw3g");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgwqAZLMAAAgyVMBhVAAAMAAAAyVg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgwqAZ3MAAAgztMBhVAAAMAAAAztg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgwqAagMAAAg0/MBhVAAAMAAAA0/g");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgwqAbFMAAAg2JMBhVAAAMAAAA2Jg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgwqAboMAAAg3PMBhVAAAMAAAA3Pg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgwqAcIMAAAg4PMBhVAAAMAAAA4Pg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgwqAckMAAAg5HMBhVAAAMAAAA5Hg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgwqAc+MAAAg57MBhVAAAMAAAA57g");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgwqAdVMAAAg6pMBhVAAAMAAAA6pg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgwqAdoMAAAg7PMBhVAAAMAAAA7Pg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgwqAd5MAAAg7xMBhVAAAMAAAA7xg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EgwqAeHMAAAg8NMBhVAAAMAAAA8Ng");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgwqAeRMAAAg8hMBhVAAAMAAAA8hg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgwqAeZMAAAg8xMBhVAAAMAAAA8xg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgwqAedMAAAg85MBhVAAAMAAAA85g");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgwqAefMAAAg89MBhVAAAMAAAA89g");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgwqAcfMAAAg49MBhVAAAMAAAA49g");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgwqAakMAAAg1HMBhVAAAMAAAA1Hg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgwqAZiMAAAgxdMBhVAAAMAAAAxdg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgwqAZ2MAAAgt9MBhVAAAMAAAAt9g");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgwqAaIMAAAgqnMBhVAAAMAAAAqng");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgwqAaaMAAAgnbMBhVAAAMAAAAnbg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgwqAarMAAAgkaMBhVAAAMAAAAkag");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgwqAa7MAAAghkMBhVAAAMAAAAhkg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgwqAbKIAA+3MBhVAAAIAAe3g");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgwqAbZIAA8WMBhVAAAIAAcWg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgwqAbmIAA6AMBhVAAAIAAaAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EgwqAbyIAA3zMBhVAAAIAAXzg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgwqAb+IAA1xMBhVAAAIAAVxg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgwqAcIIAAz4MBhVAAAIAAT4g");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgwqAcSIAAyLMBhVAAAIAASLg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgwqAcbIAAwoMBhVAAAIAAQog");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgwqAcjIAAvQMBhVAAAIAAPQg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EgwqAcpIAAuBMBhVAAAIAAOBg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EgwqAcvIAAs9MBhVAAAIAAM9g");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgwqAc1IAAsEMBhVAAAIAAMEg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgwqAc5IAArVMBhVAAAIAALVg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgwqAc8IAAqxMBhVAAAIAAKxg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgwqAc+IAAqWMBhVAAAIAAKWg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgwqAdAIAAqHMBhVAAAIAAKHg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgwqAdAIAAqBMBhVAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:240.525,y:-106.425}).wait(1).to({graphics:mask_1_graphics_1,x:240.5216,y:-101.8014}).wait(1).to({graphics:mask_1_graphics_2,x:240.5183,y:-97.34}).wait(1).to({graphics:mask_1_graphics_3,x:240.5152,y:-93.0408}).wait(1).to({graphics:mask_1_graphics_4,x:240.5122,y:-77.114}).wait(1).to({graphics:mask_1_graphics_5,x:240.5092,y:-61.7648}).wait(1).to({graphics:mask_1_graphics_6,x:240.5065,y:-47.0422}).wait(1).to({graphics:mask_1_graphics_7,x:240.5038,y:-32.946}).wait(1).to({graphics:mask_1_graphics_8,x:240.5012,y:-19.4763}).wait(1).to({graphics:mask_1_graphics_9,x:240.4988,y:-6.6332}).wait(1).to({graphics:mask_1_graphics_10,x:240.4965,y:5.5835}).wait(1).to({graphics:mask_1_graphics_11,x:240.4943,y:17.1737}).wait(1).to({graphics:mask_1_graphics_12,x:240.4922,y:28.1374}).wait(1).to({graphics:mask_1_graphics_13,x:240.4902,y:38.4745}).wait(1).to({graphics:mask_1_graphics_14,x:240.4884,y:48.1852}).wait(1).to({graphics:mask_1_graphics_15,x:240.4867,y:57.2694}).wait(1).to({graphics:mask_1_graphics_16,x:240.485,y:65.7271}).wait(1).to({graphics:mask_1_graphics_17,x:240.4836,y:73.5583}).wait(1).to({graphics:mask_1_graphics_18,x:240.4822,y:80.763}).wait(1).to({graphics:mask_1_graphics_19,x:240.4809,y:87.3412}).wait(1).to({graphics:mask_1_graphics_20,x:240.4798,y:93.293}).wait(1).to({graphics:mask_1_graphics_21,x:240.4788,y:98.6182}).wait(1).to({graphics:mask_1_graphics_22,x:240.4779,y:103.3169}).wait(1).to({graphics:mask_1_graphics_23,x:240.4771,y:107.3891}).wait(1).to({graphics:mask_1_graphics_24,x:240.4765,y:110.8348}).wait(1).to({graphics:mask_1_graphics_25,x:240.476,y:113.6541}).wait(1).to({graphics:mask_1_graphics_26,x:240.4755,y:115.8468}).wait(1).to({graphics:mask_1_graphics_27,x:240.4752,y:117.4131}).wait(1).to({graphics:mask_1_graphics_28,x:240.4751,y:118.3528}).wait(1).to({graphics:mask_1_graphics_29,x:240.525,y:118.7281}).wait(1).to({graphics:mask_1_graphics_30,x:240.5289,y:136.0072}).wait(1).to({graphics:mask_1_graphics_31,x:240.5327,y:152.5809}).wait(1).to({graphics:mask_1_graphics_32,x:240.5363,y:163.3769}).wait(1).to({graphics:mask_1_graphics_33,x:240.5397,y:165.3512}).wait(1).to({graphics:mask_1_graphics_34,x:240.543,y:167.2336}).wait(1).to({graphics:mask_1_graphics_35,x:240.5461,y:169.0242}).wait(1).to({graphics:mask_1_graphics_36,x:240.5491,y:170.723}).wait(1).to({graphics:mask_1_graphics_37,x:240.5519,y:172.33}).wait(1).to({graphics:mask_1_graphics_38,x:240.5545,y:173.8451}).wait(1).to({graphics:mask_1_graphics_39,x:240.557,y:175.2685}).wait(1).to({graphics:mask_1_graphics_40,x:240.5593,y:176.5999}).wait(1).to({graphics:mask_1_graphics_41,x:240.5615,y:177.8396}).wait(1).to({graphics:mask_1_graphics_42,x:240.5635,y:178.9874}).wait(1).to({graphics:mask_1_graphics_43,x:240.5653,y:180.0434}).wait(1).to({graphics:mask_1_graphics_44,x:240.567,y:181.0076}).wait(1).to({graphics:mask_1_graphics_45,x:240.5685,y:181.88}).wait(1).to({graphics:mask_1_graphics_46,x:240.5699,y:182.6605}).wait(1).to({graphics:mask_1_graphics_47,x:240.5711,y:183.3492}).wait(1).to({graphics:mask_1_graphics_48,x:240.5721,y:183.9461}).wait(1).to({graphics:mask_1_graphics_49,x:240.573,y:184.4511}).wait(1).to({graphics:mask_1_graphics_50,x:240.5737,y:184.8643}).wait(1).to({graphics:mask_1_graphics_51,x:240.5743,y:185.1857}).wait(1).to({graphics:mask_1_graphics_52,x:240.5747,y:185.4153}).wait(1).to({graphics:mask_1_graphics_53,x:240.5749,y:185.553}).wait(1).to({graphics:mask_1_graphics_54,x:240.525,y:185.5989}).wait(1).to({graphics:null,x:0,y:0}).wait(57));

	// texto1
	this.text_37 = new cjs.Text("Brecha de disponibilidad", "bold 18px 'Arial'", "#666666");
	this.text_37.lineHeight = 22;
	this.text_37.lineWidth = 534;
	this.text_37.parent = this;
	this.text_37.setTransform(-3.2,-56.75);

	this.text_38 = new cjs.Text("Se consideran aspectos tales como:", "18px 'Arial'", "#666666");
	this.text_38.lineHeight = 22;
	this.text_38.lineWidth = 527;
	this.text_38.parent = this;
	this.text_38.setTransform(-3.2,33.85);

	this.text_39 = new cjs.Text("Disponibilidad de talento en el mercado laboral.", "18px 'Arial'", "#666666");
	this.text_39.lineHeight = 19;
	this.text_39.lineWidth = 518;
	this.text_39.parent = this;
	this.text_39.setTransform(29.7,238.3);

	this.text_40 = new cjs.Text("Riesgo de pérdida del candidato que ocupa la posición evaluada.", "18px 'Arial'", "#666666");
	this.text_40.lineHeight = 20;
	this.text_40.lineWidth = 501;
	this.text_40.parent = this;
	this.text_40.setTransform(28.7,186.5);

	this.text_41 = new cjs.Text("Tiempo en el que, con la preparación adecuada, estarán listos para fungir como sucesores (readiness).", "18px 'Arial'", "#666666");
	this.text_41.lineHeight = 20;
	this.text_41.lineWidth = 468;
	this.text_41.parent = this;
	this.text_41.setTransform(28.7,134.65);

	this.text_42 = new cjs.Text("d", "13px 'Arial'", "#FFFFFF");
	this.text_42.lineHeight = 15;
	this.text_42.lineWidth = 16;
	this.text_42.parent = this;
	this.text_42.setTransform(1.2806,240.75,1.3693,1.3693);

	this.instance_1 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,248.3,1,1,0,0,0,11.6,11.6);

	this.text_43 = new cjs.Text("c", "13px 'Arial'", "#FFFFFF");
	this.text_43.lineHeight = 15;
	this.text_43.lineWidth = 16;
	this.text_43.parent = this;
	this.text_43.setTransform(1.7806,190.3,1.3693,1.3693);

	this.text_44 = new cjs.Text("b", "13px 'Arial'", "#FFFFFF");
	this.text_44.lineHeight = 15;
	this.text_44.lineWidth = 16;
	this.text_44.parent = this;
	this.text_44.setTransform(1.5306,138.55,1.3693,1.3693);

	this.text_45 = new cjs.Text("a", "13px 'Arial'", "#FFFFFF");
	this.text_45.lineHeight = 15;
	this.text_45.lineWidth = 16;
	this.text_45.parent = this;
	this.text_45.setTransform(0.7806,83.75,1.3693,1.3693);

	this.text_46 = new cjs.Text("Número de empleados con los conocimientos, habilidades y experiencias para ser sucesores al cargo analizado.", "18px 'Arial'", "#666666");
	this.text_46.lineHeight = 20;
	this.text_46.lineWidth = 474;
	this.text_46.parent = this;
	this.text_46.setTransform(28.7,82.8);

	this.text_47 = new cjs.Text("Se refiere a la dificultad de la organización para cubrir la posición evaluada con candidatos internos o externos", "18px 'Arial'", "#666666");
	this.text_47.lineHeight = 22;
	this.text_47.lineWidth = 526;
	this.text_47.parent = this;
	this.text_47.setTransform(-3.2,-22.75);

	this.instance_2 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.4,93.4,1,1,0,0,0,11.6,11.6);

	this.instance_3 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.4,146.35,1,1,0,0,0,11.6,11.6);

	this.instance_4 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.4,197.85,1,1,0,0,0,11.6,11.6);

	var maskedShapeInstanceList = [this.text_37,this.text_38,this.text_39,this.text_40,this.text_41,this.text_42,this.instance_1,this.text_43,this.text_44,this.text_45,this.text_46,this.text_47,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.instance_1},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37}]}).to({state:[]},55).to({state:[]},39).wait(18));

	// Boton retroceder
	this.btn_atras5 = new lib.AS_LG_150Botónpaginación();
	this.btn_atras5.name = "btn_atras5";
	this.btn_atras5.parent = this;
	this.btn_atras5.setTransform(584.85,31.7,1,1,0,90,-90);
	this.btn_atras5._off = true;
	new cjs.ButtonHelper(this.btn_atras5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_atras5).wait(55).to({_off:false},0).wait(57));

	// Botón avanzar
	this.btn_siguiente5 = new lib.AS_LG_150Botónpaginación();
	this.btn_siguiente5.name = "btn_siguiente5";
	this.btn_siguiente5.parent = this;
	this.btn_siguiente5.setTransform(585.1,210.05,1,1,90);
	new cjs.ButtonHelper(this.btn_siguiente5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente5).to({_off:true},55).wait(57));

	// Botones Claros/Siempre
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgHApIg5hDQgFgGAFgHQAEgGAIACIAyAPIAFAAIAygPQAIgCAEAGQAFAHgFAGIg5BDQgDAEgFAAQgEAAgDgEg");
	this.shape_32.setTransform(575.4191,221.8765);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA1AsIgygPIgFAAIgyAPQgIACgEgGQgFgHAFgGIA5hDQADgEAEAAQAFAAADAEIA5BDQAFAGgFAHQgDAFgFAAIgEgBg");
	this.shape_33.setTransform(574.7809,20.1735);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("AhDQoQgdgcAAgqQAAgpAdgdQAdgdAoAAQAqAAAdAdQAcAdAAApQAAAqgcAcQgdAdgqAAQgoAAgdgdgAhBuVIgGgGQgdgdAAgpQAAgpAdgdQARgSAVgHQAPgEARgBQAQABAPAEQAVAHARASQAeAdAAApQAAApgeAdIgFAGQgbAXglAAQglAAgbgXg");
	this.shape_34.setTransform(574.95,120.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(112));

	// Barra Desplazamiento
	this.instance_5 = new lib.AS_LG_152c();
	this.instance_5.parent = this;
	this.instance_5.setTransform(574.45,69.7,1,1,90,0,0,22.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({y:183.6},64).wait(19));

	// Barra fondo
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AAACAE").s().p("AgTLwQgJgIABgLIAA25QgBgLAJgIQAIgIALAAQALAAAJAIQAIAIAAALIAAW5QAAALgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_35.setTransform(574.5,121.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-60.7,627.2,374.5);


(lib.scrollm2t3mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var rewind;
		this.rewind = false;
		var forward;
		this.forward = false;
		//funciona como reset, si el usuario regresa a esta pagina no tendra
		//el evento dos veces.....solo una vez
		this.btn_siguiente5.removeAllEventListeners();
		this.btn_atras5.removeAllEventListeners();
		init();
		function init() {
			///FORWARD
			root.btn_siguiente5.addEventListener("mousedown", playForwards);
			function playForwards() {
				root.forward = true;
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				playF();
			}
		
			function playF(e) {
				console.log("avanzando");
				root.gotoAndStop(root.timeline.position + 1);
				if (root.forward) {
					var my_timedProcess = setTimeout(playF, 25);
				}
				
			}
			///REWIND
			root.btn_atras5.addEventListener("click", playReverse);
			function playReverse() {
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				root.rewind = true;
				playR();
			}
		
			function playR(e) {
				console.log("retrocediendo");
				root.gotoAndStop(root.timeline.position - 1);
				if (root.rewind) {
					var my_timedProcess = setTimeout(playR, 25);
				}
				
			}
		
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
	}
	this.frame_111 = function() {
		this.stop();
		parent.siguiente_naranja();
		this.rewind=false;
		this.forward=false;
		this.btn_atras5.mouseEnabled=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(82).call(this.frame_111).wait(1));

	// cortina scroll (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_55 = new cjs.Graphics().p("EgwqAEpIAA1QMBhVAAAIAAVQg");
	var mask_graphics_56 = new cjs.Graphics().p("EgwqAHMIAA3SMBhVAAAIAAXSg");
	var mask_graphics_57 = new cjs.Graphics().p("EgwqAJqIAA5QMBhVAAAIAAZQg");
	var mask_graphics_58 = new cjs.Graphics().p("EgwqAMEIAA7LMBhVAAAIAAbLg");
	var mask_graphics_59 = new cjs.Graphics().p("EgwqAOaIAA9DMBhVAAAIAAdDg");
	var mask_graphics_60 = new cjs.Graphics().p("EgwqAPcIAA+3MBhVAAAIAAe3g");
	var mask_graphics_61 = new cjs.Graphics().p("EgwqAQUMAAAggnMBhVAAAMAAAAgng");
	var mask_graphics_62 = new cjs.Graphics().p("EgwqARKMAAAgiTMBhVAAAMAAAAiTg");
	var mask_graphics_63 = new cjs.Graphics().p("EgwqAR/MAAAgj9MBhVAAAMAAAAj9g");
	var mask_graphics_64 = new cjs.Graphics().p("EgwqASyMAAAgljMBhVAAAMAAAAljg");
	var mask_graphics_65 = new cjs.Graphics().p("EgwqATjMAAAgnFMBhVAAAMAAAAnFg");
	var mask_graphics_66 = new cjs.Graphics().p("EgwqAUTMAAAgolMBhVAAAMAAAAolg");
	var mask_graphics_67 = new cjs.Graphics().p("EgwqAVAMAAAgp/MBhVAAAMAAAAp/g");
	var mask_graphics_68 = new cjs.Graphics().p("EgwqAVsMAAAgrXMBhVAAAMAAAArXg");
	var mask_graphics_69 = new cjs.Graphics().p("EgwqAWXMAAAgstMBhVAAAMAAAAstg");
	var mask_graphics_70 = new cjs.Graphics().p("EgwqAW/MAAAgt9MBhVAAAMAAAAt9g");
	var mask_graphics_71 = new cjs.Graphics().p("EgwqAXmMAAAgvLMBhVAAAMAAAAvLg");
	var mask_graphics_72 = new cjs.Graphics().p("EgwqAYLMAAAgwVMBhVAAAMAAAAwVg");
	var mask_graphics_73 = new cjs.Graphics().p("EgwqAYvMAAAgxdMBhVAAAMAAAAxdg");
	var mask_graphics_74 = new cjs.Graphics().p("EgwqAZRMAAAgyhMBhVAAAMAAAAyhg");
	var mask_graphics_75 = new cjs.Graphics().p("EgwqAZxMAAAgzhMBhVAAAMAAAAzhg");
	var mask_graphics_76 = new cjs.Graphics().p("EgwqAaPMAAAg0dMBhVAAAMAAAA0dg");
	var mask_graphics_77 = new cjs.Graphics().p("EgwqAarMAAAg1VMBhVAAAMAAAA1Vg");
	var mask_graphics_78 = new cjs.Graphics().p("EgwqAbGMAAAg2LMBhVAAAMAAAA2Lg");
	var mask_graphics_79 = new cjs.Graphics().p("EgwqAbfMAAAg29MBhVAAAMAAAA29g");
	var mask_graphics_80 = new cjs.Graphics().p("EgwqAb2MAAAg3rMBhVAAAMAAAA3rg");
	var mask_graphics_81 = new cjs.Graphics().p("EgwqAcMMAAAg4XMBhVAAAMAAAA4Xg");
	var mask_graphics_82 = new cjs.Graphics().p("EgwqAcgMAAAg4/MBhVAAAMAAAA4/g");
	var mask_graphics_83 = new cjs.Graphics().p("EgwqAcyMAAAg5jMBhVAAAMAAAA5jg");
	var mask_graphics_84 = new cjs.Graphics().p("EgwqAdDMAAAg6FMBhVAAAMAAAA6Fg");
	var mask_graphics_85 = new cjs.Graphics().p("EgwqAdRMAAAg6hMBhVAAAMAAAA6hg");
	var mask_graphics_86 = new cjs.Graphics().p("EgwqAdeMAAAg67MBhVAAAMAAAA67g");
	var mask_graphics_87 = new cjs.Graphics().p("EgwqAdpMAAAg7RMBhVAAAMAAAA7Rg");
	var mask_graphics_88 = new cjs.Graphics().p("EgwqAdzMAAAg7lMBhVAAAMAAAA7lg");
	var mask_graphics_89 = new cjs.Graphics().p("EgwqAd7MAAAg71MBhVAAAMAAAA71g");
	var mask_graphics_90 = new cjs.Graphics().p("EgwqAeBMAAAg8BMBhVAAAMAAAA8Bg");
	var mask_graphics_91 = new cjs.Graphics().p("EgwqAeFMAAAg8JMBhVAAAMAAAA8Jg");
	var mask_graphics_92 = new cjs.Graphics().p("EgwqAeIMAAAg8PMBhVAAAMAAAA8Pg");
	var mask_graphics_93 = new cjs.Graphics().p("EgwqAeJMAAAg8RMBhVAAAMAAAA8Rg");
	var mask_graphics_94 = new cjs.Graphics().p("EgwqAeRMAAAg8hMBhVAAAMAAAA8hg");
	var mask_graphics_95 = new cjs.Graphics().p("EgwqAeYMAAAg8vMBhVAAAMAAAA8vg");
	var mask_graphics_96 = new cjs.Graphics().p("EgwqAefMAAAg89MBhVAAAMAAAA89g");
	var mask_graphics_97 = new cjs.Graphics().p("EgwqAemMAAAg9LMBhVAAAMAAAA9Lg");
	var mask_graphics_98 = new cjs.Graphics().p("EgwqAesMAAAg9XMBhVAAAMAAAA9Xg");
	var mask_graphics_99 = new cjs.Graphics().p("EgwqAeyMAAAg9jMBhVAAAMAAAA9jg");
	var mask_graphics_100 = new cjs.Graphics().p("EgwqAe3MAAAg9tMBhVAAAMAAAA9tg");
	var mask_graphics_101 = new cjs.Graphics().p("EgwqAe8MAAAg93MBhVAAAMAAAA93g");
	var mask_graphics_102 = new cjs.Graphics().p("EgwqAfBMAAAg+BMBhVAAAMAAAA+Bg");
	var mask_graphics_103 = new cjs.Graphics().p("EgwqAfFMAAAg+JMBhVAAAMAAAA+Jg");
	var mask_graphics_104 = new cjs.Graphics().p("EgwqAfIMAAAg+PMBhVAAAMAAAA+Pg");
	var mask_graphics_105 = new cjs.Graphics().p("EgwqAfLMAAAg+VMBhVAAAMAAAA+Vg");
	var mask_graphics_106 = new cjs.Graphics().p("EgwqAfOMAAAg+bMBhVAAAMAAAA+bg");
	var mask_graphics_107 = new cjs.Graphics().p("EgwqAfQMAAAg+fMBhVAAAMAAAA+fg");
	var mask_graphics_108 = new cjs.Graphics().p("EgwqAfRMAAAg+hMBhVAAAMAAAA+hg");
	var mask_graphics_109 = new cjs.Graphics().p("EgwqAfSMAAAg+jMBhVAAAMAAAA+jg");
	var mask_graphics_110 = new cjs.Graphics().p("EgwqAfTMAAAg+lMBhVAAAMAAAA+lg");
	var mask_graphics_111 = new cjs.Graphics().p("EgwqAfTMAAAg+lMBhVAAAMAAAA+lg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_graphics_55,x:240.525,y:-106.425}).wait(1).to({graphics:mask_graphics_56,x:240.5224,y:-103.1272}).wait(1).to({graphics:mask_graphics_57,x:240.5199,y:-99.9173}).wait(1).to({graphics:mask_graphics_58,x:240.5174,y:-96.7953}).wait(1).to({graphics:mask_graphics_59,x:240.515,y:-93.7613}).wait(1).to({graphics:mask_graphics_60,x:240.5127,y:-82.8803}).wait(1).to({graphics:mask_graphics_61,x:240.5105,y:-71.5474}).wait(1).to({graphics:mask_graphics_62,x:240.5083,y:-60.5632}).wait(1).to({graphics:mask_graphics_63,x:240.5062,y:-49.9277}).wait(1).to({graphics:mask_graphics_64,x:240.5041,y:-39.6409}).wait(1).to({graphics:mask_graphics_65,x:240.5022,y:-29.7028}).wait(1).to({graphics:mask_graphics_66,x:240.5002,y:-20.1134}).wait(1).to({graphics:mask_graphics_67,x:240.4984,y:-10.8727}).wait(1).to({graphics:mask_graphics_68,x:240.4966,y:-1.9807}).wait(1).to({graphics:mask_graphics_69,x:240.4949,y:6.5626}).wait(1).to({graphics:mask_graphics_70,x:240.4933,y:14.7572}).wait(1).to({graphics:mask_graphics_71,x:240.4918,y:22.6031}).wait(1).to({graphics:mask_graphics_72,x:240.4903,y:30.1002}).wait(1).to({graphics:mask_graphics_73,x:240.4889,y:37.2487}).wait(1).to({graphics:mask_graphics_74,x:240.4875,y:44.0485}).wait(1).to({graphics:mask_graphics_75,x:240.4862,y:50.4995}).wait(1).to({graphics:mask_graphics_76,x:240.485,y:56.6019}).wait(1).to({graphics:mask_graphics_77,x:240.4839,y:62.3555}).wait(1).to({graphics:mask_graphics_78,x:240.4828,y:67.7604}).wait(1).to({graphics:mask_graphics_79,x:240.4818,y:72.8167}).wait(1).to({graphics:mask_graphics_80,x:240.4809,y:77.5242}).wait(1).to({graphics:mask_graphics_81,x:240.48,y:81.883}).wait(1).to({graphics:mask_graphics_82,x:240.4792,y:85.8931}).wait(1).to({graphics:mask_graphics_83,x:240.4785,y:89.5545}).wait(1).to({graphics:mask_graphics_84,x:240.4778,y:92.8672}).wait(1).to({graphics:mask_graphics_85,x:240.4772,y:95.8312}).wait(1).to({graphics:mask_graphics_86,x:240.4767,y:98.4465}).wait(1).to({graphics:mask_graphics_87,x:240.4763,y:100.7131}).wait(1).to({graphics:mask_graphics_88,x:240.4759,y:102.631}).wait(1).to({graphics:mask_graphics_89,x:240.4756,y:104.2002}).wait(1).to({graphics:mask_graphics_90,x:240.4753,y:105.4206}).wait(1).to({graphics:mask_graphics_91,x:240.4751,y:106.2924}).wait(1).to({graphics:mask_graphics_92,x:240.475,y:106.8155}).wait(1).to({graphics:mask_graphics_93,x:240.525,y:107.0512}).wait(1).to({graphics:mask_graphics_94,x:240.525,y:107.8533}).wait(1).to({graphics:mask_graphics_95,x:240.525,y:108.6095}).wait(1).to({graphics:mask_graphics_96,x:240.525,y:109.3199}).wait(1).to({graphics:mask_graphics_97,x:240.525,y:109.9845}).wait(1).to({graphics:mask_graphics_98,x:240.525,y:110.6032}).wait(1).to({graphics:mask_graphics_99,x:240.525,y:111.1762}).wait(1).to({graphics:mask_graphics_100,x:240.525,y:111.7032}).wait(1).to({graphics:mask_graphics_101,x:240.525,y:112.1845}).wait(1).to({graphics:mask_graphics_102,x:240.525,y:112.6199}).wait(1).to({graphics:mask_graphics_103,x:240.525,y:113.0095}).wait(1).to({graphics:mask_graphics_104,x:240.525,y:113.3532}).wait(1).to({graphics:mask_graphics_105,x:240.525,y:113.6511}).wait(1).to({graphics:mask_graphics_106,x:240.525,y:113.9032}).wait(1).to({graphics:mask_graphics_107,x:240.525,y:114.1095}).wait(1).to({graphics:mask_graphics_108,x:240.525,y:114.2699}).wait(1).to({graphics:mask_graphics_109,x:240.525,y:114.3845}).wait(1).to({graphics:mask_graphics_110,x:240.525,y:114.4532}).wait(1).to({graphics:mask_graphics_111,x:240.525,y:114.5399}).wait(1));

	// texto 2
	this.text = new cjs.Text("Ejemplo de formato de evaluación:", "16px 'Arial'", "#666666");
	this.text.lineHeight = 18;
	this.text.lineWidth = 482;
	this.text.parent = this;
	this.text.setTransform(-40.25,-58.95,0.8669,0.8669);

	this.text_1 = new cjs.Text("Se debe seleccionar con una X una única opción con la cual esté de acuerdo el entrevistado para cada cargo.", "13px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 123;
	this.text_1.parent = this;
	this.text_1.setTransform(450.8,130.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BDCCD4").ss(2.8).p("AJGB6QgJA2gUAuQgRAngbAnQgeArgrAnQhmBciFAoQg/AThHAHQhzAMh1geIgbgIQiigwhqhzQg3g7gfhGQgghLgDhYQAAhDARg+QAWhLAzhEQAMgPgCgOQgJg/gDgMQgFgWgHgXQgSg9gqhXIgNgcQAJABANACQAbAHA3ANQAxALAhAKQB6AiBKApQAHAEAKgCQALgBA0gJQAmgGAYgDQCigPCTA5QAmAPAeARQBzA+BHBpIAGAIQAlA6ASA7QAdBbgRBlg");
	this.shape.setTransform(448.3157,173.085,1.4362,1.4362,0,-166.5083,13.4917);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AipIIIgbgIQihgwhrhzQg2g7gfhGQghhLgChYQgBhDASg+QAVhLA0hEQAMgPgDgOIgLhLQgFgWgHgXQgTg9gphXIgNgcIAVADIBTAUQAxALAhAKQB6AiBKApQAHAEAKgCIA+gKQAmgGAYgDQCjgPCSA5QAnAPAeARQByA+BHBpIAHAIQAlA6ASA7QAcBbgQBlQgJA2gUAuQgSAngbAnQgdArgsAnQhlBciFAoQg/AThIAHQghADggAAQhTAAhUgVg");
	this.shape_1.setTransform(448.8645,172.9086,1.4362,1.4362,0,-166.5083,13.4917);

	this.instance = new lib.barrabcdespliega("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(636.2,267.55,0.0144,0.7881,0,0,0,397,43.1);
	this.instance.alpha = 0.5;

	this.text_2 = new cjs.Text("Coordinador de auditorías", "8px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 9;
	this.text_2.lineWidth = 69;
	this.text_2.parent = this;
	this.text_2.setTransform(329.75,54.5);

	this.text_3 = new cjs.Text("e.", "9px 'Arial'");
	this.text_3.lineHeight = 11;
	this.text_3.lineWidth = 28;
	this.text_3.parent = this;
	this.text_3.setTransform(-33.15,282.85);

	this.text_4 = new cjs.Text("d.", "9px 'Arial'");
	this.text_4.lineHeight = 11;
	this.text_4.lineWidth = 28;
	this.text_4.parent = this;
	this.text_4.setTransform(-33.15,251.75);

	this.text_5 = new cjs.Text("c.", "9px 'Arial'");
	this.text_5.lineHeight = 11;
	this.text_5.lineWidth = 28;
	this.text_5.parent = this;
	this.text_5.setTransform(-33.65,210.6);

	this.text_6 = new cjs.Text("b.", "9px 'Arial'");
	this.text_6.lineHeight = 11;
	this.text_6.lineWidth = 28;
	this.text_6.parent = this;
	this.text_6.setTransform(-33.15,163.65);

	this.text_7 = new cjs.Text("a.", "9px 'Arial'");
	this.text_7.lineHeight = 11;
	this.text_7.lineWidth = 28;
	this.text_7.parent = this;
	this.text_7.setTransform(-33.15,109.2);

	this.text_8 = new cjs.Text("X", "16px 'Arial'", "#333333");
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 22;
	this.text_8.parent = this;
	this.text_8.setTransform(265.95,165.35);

	this.text_9 = new cjs.Text("X", "16px 'Arial'", "#333333");
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 22;
	this.text_9.parent = this;
	this.text_9.setTransform(326.85,213.15);

	this.text_10 = new cjs.Text("0", "9px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 11;
	this.text_10.lineWidth = 28;
	this.text_10.parent = this;
	this.text_10.setTransform(511.2,58.15);

	this.text_11 = new cjs.Text("0", "9px 'Arial'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 9;
	this.text_11.lineWidth = 28;
	this.text_11.parent = this;
	this.text_11.setTransform(485.9,58.15);

	this.text_12 = new cjs.Text("0", "9px 'Arial'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 9;
	this.text_12.lineWidth = 28;
	this.text_12.parent = this;
	this.text_12.setTransform(458.5,58.15);

	this.text_13 = new cjs.Text("0", "9px 'Arial'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 9;
	this.text_13.lineWidth = 28;
	this.text_13.parent = this;
	this.text_13.setTransform(430.85,58.15);

	this.text_14 = new cjs.Text("8", "9px 'Arial'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 11;
	this.text_14.lineWidth = 28;
	this.text_14.parent = this;
	this.text_14.setTransform(511.2,38.05);

	this.text_15 = new cjs.Text("7", "9px 'Arial'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 9;
	this.text_15.lineWidth = 28;
	this.text_15.parent = this;
	this.text_15.setTransform(485.9,38.05);

	this.text_16 = new cjs.Text("6", "9px 'Arial'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 9;
	this.text_16.lineWidth = 28;
	this.text_16.parent = this;
	this.text_16.setTransform(458.5,38.05);

	this.text_17 = new cjs.Text("5", "9px 'Arial'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 9;
	this.text_17.lineWidth = 28;
	this.text_17.parent = this;
	this.text_17.setTransform(430.85,38.05);

	this.text_18 = new cjs.Text("4", "9px 'Arial'");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 9;
	this.text_18.lineWidth = 28;
	this.text_18.parent = this;
	this.text_18.setTransform(400.85,38.05);

	this.text_19 = new cjs.Text("3", "9px 'Arial'");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 9;
	this.text_19.lineWidth = 28;
	this.text_19.parent = this;
	this.text_19.setTransform(373.85,38.05);

	this.text_20 = new cjs.Text("2", "9px 'Arial'");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 9;
	this.text_20.lineWidth = 28;
	this.text_20.parent = this;
	this.text_20.setTransform(331.95,38.05);

	this.text_21 = new cjs.Text("1", "9px 'Arial'");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 9;
	this.text_21.lineWidth = 28;
	this.text_21.parent = this;
	this.text_21.setTransform(268.25,38.05);

	this.text_22 = new cjs.Text("Gerente de\nVentas", "8px 'Arial'");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 9;
	this.text_22.lineWidth = 58;
	this.text_22.parent = this;
	this.text_22.setTransform(265.15,54.5);

	this.text_23 = new cjs.Text("Nombre de la posición", "8px 'Arial'");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 8;
	this.text_23.lineWidth = 175;
	this.text_23.parent = this;
	this.text_23.setTransform(96.5,57.8);

	this.text_24 = new cjs.Text("No.", "8px 'Arial'");
	this.text_24.lineHeight = 8;
	this.text_24.lineWidth = 28;
	this.text_24.parent = this;
	this.text_24.setTransform(89.9,38.05);

	this.text_25 = new cjs.Text("Ninguna de las anteriores.", "9px 'Arial'", "#333333");
	this.text_25.lineHeight = 10;
	this.text_25.lineWidth = 131;
	this.text_25.parent = this;
	this.text_25.setTransform(-17.6,284.95);

	this.text_26 = new cjs.Text("Operacional: establece objetivos operativos de corto plazo, garantizando que en 1 año se cumplan avances de ejecución frente a los grandes objetivos estratégicos.", "9px 'Arial'", "#333333");
	this.text_26.lineHeight = 10;
	this.text_26.lineWidth = 255;
	this.text_26.parent = this;
	this.text_26.setTransform(-17.6,242.55);

	this.text_27 = new cjs.Text("Táctico - Gerencial: Establece un plan de objetivos corto a mediano plazo alineando el plan estratégico del Área al que pertenece.", "9px 'Arial'", "#333333");
	this.text_27.lineHeight = 10;
	this.text_27.lineWidth = 254;
	this.text_27.parent = this;
	this.text_27.setTransform(-17.6,206.35);

	this.text_28 = new cjs.Text("Estratega: Define y aprueba la estrategia del área o subárea que lidera.\nAlcance de objetivos: Largo plazo 3-5 años; esta posición típicamente establece e implementa estrategias de negocio, con foco de largo plazo en la visión del negocio.", "9px 'Arial'", "#333333");
	this.text_28.lineHeight = 10;
	this.text_28.lineWidth = 253;
	this.text_28.parent = this;
	this.text_28.setTransform(-17.6,147.15);

	this.text_29 = new cjs.Text("Visionario: Establece la Misión y Visión de la organización.\nAlcance de la decisión: Largo plazo 3-5 años \nEsta posición tìpicamente lleva a la organización a desarrollar, implementar y alcanzar su visión, misión y valores. ", "9px 'Arial'", "#333333");
	this.text_29.lineHeight = 10;
	this.text_29.lineWidth = 266;
	this.text_29.parent = this;
	this.text_29.setTransform(-17.6,96.6);

	this.text_30 = new cjs.Text("P1 ¿Cuál es la naturaleza y autonomía que tiene el cargo para impactar algunos de los objetivos del plan estratégico?", "9px 'Arial'", "#333333");
	this.text_30.lineHeight = 11;
	this.text_30.lineWidth = 590;
	this.text_30.parent = this;
	this.text_30.setTransform(-29.65,75.25);

	this.text_31 = new cjs.Text("Hay en total cinco preguntas en el cuestionario de Impacto y Contribución\nCada pregunta tiene múltiples respuestas.\nPara cada puesto, ingrese una “x” para la respuesta que mejor caracteriza la posición.", "9px 'Arial'", "#333333");
	this.text_31.lineHeight = 10;
	this.text_31.lineWidth = 397;
	this.text_31.parent = this;
	this.text_31.setTransform(108.15,-3.9);

	this.text_32 = new cjs.Text("Instrucciones", "9px 'Arial'");
	this.text_32.lineHeight = 11;
	this.text_32.lineWidth = 85;
	this.text_32.parent = this;
	this.text_32.setTransform(-1.35,6.3);

	this.text_33 = new cjs.Text("HERRAMIENTA DE CRITICIDAD DE PUESTO\nEvaluación de Impacto y Contribución acorde al Plan estratégico de Área", "10px 'Arial'", "#333333");
	this.text_33.textAlign = "center";
	this.text_33.lineHeight = 10;
	this.text_33.lineWidth = 504;
	this.text_33.parent = this;
	this.text_33.setTransform(246.4,-30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_2.setTransform(-23.434,195.4593,0.9991,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_3.setTransform(238.2575,195.4697,0.9991,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_4.setTransform(301.4654,195.4593,0.9991,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_5.setTransform(387.4837,195.4593,0.9991,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_6.setTransform(359.9747,195.4593,0.9991,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_7.setTransform(415.2418,195.4593,0.9991,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_8.setTransform(442.9516,195.4593,0.9991,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_9.setTransform(470.3175,195.4593,0.9991,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E6E6E6").p("AAAwuMAAAAhd");
	this.shape_10.setTransform(498.03,195.4593,0.9991,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_11.setTransform(240.5551,142.9851,1.1274,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_12.setTransform(240.5551,200.7842,1.1274,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_13.setTransform(240.5551,239.5336,1.1274,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_14.setTransform(240.5551,277.333,1.1274,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E6E6E6").p("EgmqgQuMBNVAAAMAAAAhdMhNVAAAg");
	this.shape_15.setTransform(240.1515,195.4593,1.1282,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_16.setTransform(416.0385,55.8932,1.1337,1.1201);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E6E6E6").p("EgmqAAAMBNVAAA");
	this.shape_17.setTransform(239.5288,52.6848,1.1337,1.1201);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_18.setTransform(360.2703,55.8932,1.1337,1.1201);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_19.setTransform(234.7976,55.3844,1.1337,1.1201);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_20.setTransform(301.0614,55.8932,1.1337,1.1201);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E6E6E6").p("AAAiZIAAEz");
	this.shape_21.setTransform(387.85,55.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_22.setTransform(435.0385,55.8932,1.1337,1.1201);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_23.setTransform(465.9279,55.8932,1.1337,1.1201);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E6E6E6").p("AAAiIIAAER");
	this.shape_24.setTransform(495.3895,55.8932,1.1337,1.1201);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#E6E6E6").p("EgmqgC2MBNVAAAIAAFtMhNVAAAg");
	this.shape_25.setTransform(239.8733,11.775,1.1345,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("EgmqAC3IAAltMBNVAAAIAAFtg");
	this.shape_26.setTransform(239.8733,11.775,1.1345,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#E6E6E6").p("EgmqgBEMBNVAAAIAACJMhNVAAAg");
	this.shape_27.setTransform(240.3379,80.3189,1.1321,1.0964);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E6E6").s().p("EgmqABFIAAiJMBNVAAAIAACJg");
	this.shape_28.setTransform(240.3379,80.3189,1.1321,1.0964);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#E6E6E6").p("EAmrACpMhNVAAAIAAlRMBNVAAAg");
	this.shape_29.setTransform(240.0065,-20.44,1.1331,0.7712);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F2F2F2").s().p("EgmqACpIAAlRMBNVAAAIAAFRg");
	this.shape_30.setTransform(240.0065,-20.44,1.1331,0.7712);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCEEE5").s().p("EgmqAbYMAAAg2vMBNVAAAMAAAA2vg");
	this.shape_31.setTransform(239.8733,137.4458,1.1345,0.9428);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009900").s().p("Ag3AxQgYgUAAgdQAAgcAYgVQAXgUAgAAQAiAAAWAUQAYAVAAAcQAAAdgYAUQgWAVgiAAQggAAgXgVg");
	this.shape_32.setTransform(132.8,410.7);

	var maskedShapeInstanceList = [this.text,this.text_1,this.shape,this.shape_1,this.instance,this.text_2,this.text_3,this.text_4,this.text_5,this.text_6,this.text_7,this.text_8,this.text_9,this.text_10,this.text_11,this.text_12,this.text_13,this.text_14,this.text_15,this.text_16,this.text_17,this.text_18,this.text_19,this.text_20,this.text_21,this.text_22,this.text_23,this.text_24,this.text_25,this.text_26,this.text_27,this.text_28,this.text_29,this.text_30,this.text_31,this.text_32,this.text_33,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.instance},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]},55).wait(57));

	// cortina scroll (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgwqAEzIAA1QMBhVAAAIAAVQg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgwqAIHIAA36MBhVAAAIAAX6g");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgwqALTIAA6dMBhVAAAIAAadg");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgwqAOXIAA86MBhVAAAIAAc6g");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgwqAPpIAA/RMBhVAAAIAAfRg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgwqAQyMAAAghjMBhVAAAMAAAAhjg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgwqAR4MAAAgjvMBhVAAAMAAAAjvg");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgwqAS6MAAAglzMBhVAAAMAAAAlzg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgwqAT6MAAAgnzMBhVAAAMAAAAnzg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgwqAU3MAAAgptMBhVAAAMAAAAptg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgwqAVxMAAAgrhMBhVAAAMAAAArhg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgwqAWoMAAAgtPMBhVAAAMAAAAtPg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgwqAXcMAAAgu3MBhVAAAMAAAAu3g");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgwqAYNMAAAgwZMBhVAAAMAAAAwZg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgwqAY7MAAAgx1MBhVAAAMAAAAx1g");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgwqAZmMAAAgzLMBhVAAAMAAAAzLg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgwqAaOMAAAg0bMBhVAAAMAAAA0bg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgwqAazMAAAg1lMBhVAAAMAAAA1lg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgwqAbVMAAAg2pMBhVAAAMAAAA2pg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgwqAb0MAAAg3nMBhVAAAMAAAA3ng");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgwqAcQMAAAg4fMBhVAAAMAAAA4fg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgwqAcqMAAAg5TMBhVAAAMAAAA5Tg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgwqAdAMAAAg5/MBhVAAAMAAAA5/g");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgwqAdTMAAAg6lMBhVAAAMAAAA6lg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgwqAdjMAAAg7FMBhVAAAMAAAA7Fg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EgwqAdxMAAAg7hMBhVAAAMAAAA7hg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgwqAd7MAAAg71MBhVAAAMAAAA71g");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgwqAeDMAAAg8FMBhVAAAMAAAA8Fg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgwqAeHMAAAg8NMBhVAAAMAAAA8Ng");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgwqAeJMAAAg8RMBhVAAAMAAAA8Rg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgwqAcKMAAAg4TMBhVAAAMAAAA4Tg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgwqAaSMAAAg0jMBhVAAAMAAAA0jg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgwqAYsMAAAgw7MBhVAAAMAAAAw7g");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgwqAZEMAAAgtdMBhVAAAMAAAAtdg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgwqAZcMAAAgqLMBhVAAAMAAAAqLg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgwqAZyMAAAgnCMBhVAAAMAAAAnCg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgwqAaHMAAAgkDMBhVAAAMAAAAkDg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgwqAabMAAAghPMBhVAAAMAAAAhPg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgwqAauIAA+mMBhVAAAIAAemg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgwqAbAIAA8GMBhVAAAIAAcGg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgwqAbQIAA5yMBhVAAAIAAZyg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EgwqAbgIAA3nMBhVAAAIAAXng");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgwqAbuIAA1mMBhVAAAIAAVmg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgwqAb7IAAzwMBhVAAAIAATwg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgwqAcHIAAyEMBhVAAAIAASEg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgwqAcSIAAwiMBhVAAAIAAQig");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgwqAcbIAAvKMBhVAAAIAAPKg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EgwqAckIAAt+MBhVAAAIAAN+g");
	var mask_1_graphics_48 = new cjs.Graphics().p("EgwqAcrIAAs6MBhVAAAIAAM6g");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgwqAcyIAAsCMBhVAAAIAAMCg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgwqAc3IAArUMBhVAAAIAALUg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgwqAc7IAAqwMBhVAAAIAAKwg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgwqAc+IAAqWMBhVAAAIAAKWg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgwqAc/IAAqGMBhVAAAIAAKGg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgwqAdAIAAqBMBhVAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:240.525,y:-105.425}).wait(1).to({graphics:mask_1_graphics_1,x:240.5216,y:-101.1894}).wait(1).to({graphics:mask_1_graphics_2,x:240.5183,y:-97.1023}).wait(1).to({graphics:mask_1_graphics_3,x:240.5152,y:-93.1639}).wait(1).to({graphics:mask_1_graphics_4,x:240.5122,y:-78.6266}).wait(1).to({graphics:mask_1_graphics_5,x:240.5092,y:-64.0742}).wait(1).to({graphics:mask_1_graphics_6,x:240.5065,y:-50.1159}).wait(1).to({graphics:mask_1_graphics_7,x:240.5038,y:-36.7515}).wait(1).to({graphics:mask_1_graphics_8,x:240.5012,y:-23.9811}).wait(1).to({graphics:mask_1_graphics_9,x:240.4988,y:-11.8047}).wait(1).to({graphics:mask_1_graphics_10,x:240.4965,y:-0.2222}).wait(1).to({graphics:mask_1_graphics_11,x:240.4943,y:10.7663}).wait(1).to({graphics:mask_1_graphics_12,x:240.4922,y:21.1608}).wait(1).to({graphics:mask_1_graphics_13,x:240.4902,y:30.9613}).wait(1).to({graphics:mask_1_graphics_14,x:240.4884,y:40.1679}).wait(1).to({graphics:mask_1_graphics_15,x:240.4867,y:48.7805}).wait(1).to({graphics:mask_1_graphics_16,x:240.485,y:56.7991}).wait(1).to({graphics:mask_1_graphics_17,x:240.4836,y:64.2238}).wait(1).to({graphics:mask_1_graphics_18,x:240.4822,y:71.0545}).wait(1).to({graphics:mask_1_graphics_19,x:240.4809,y:77.2912}).wait(1).to({graphics:mask_1_graphics_20,x:240.4798,y:82.9339}).wait(1).to({graphics:mask_1_graphics_21,x:240.4788,y:87.9827}).wait(1).to({graphics:mask_1_graphics_22,x:240.4779,y:92.4375}).wait(1).to({graphics:mask_1_graphics_23,x:240.4771,y:96.2983}).wait(1).to({graphics:mask_1_graphics_24,x:240.4765,y:99.5651}).wait(1).to({graphics:mask_1_graphics_25,x:240.476,y:102.238}).wait(1).to({graphics:mask_1_graphics_26,x:240.4755,y:104.3169}).wait(1).to({graphics:mask_1_graphics_27,x:240.4752,y:105.8019}).wait(1).to({graphics:mask_1_graphics_28,x:240.4751,y:106.6928}).wait(1).to({graphics:mask_1_graphics_29,x:240.525,y:107.0512}).wait(1).to({graphics:mask_1_graphics_30,x:240.5289,y:125.2457}).wait(1).to({graphics:mask_1_graphics_31,x:240.5327,y:142.6976}).wait(1).to({graphics:mask_1_graphics_32,x:240.5363,y:157.9933}).wait(1).to({graphics:mask_1_graphics_33,x:240.5397,y:160.4459}).wait(1).to({graphics:mask_1_graphics_34,x:240.543,y:162.7844}).wait(1).to({graphics:mask_1_graphics_35,x:240.5461,y:165.0088}).wait(1).to({graphics:mask_1_graphics_36,x:240.5491,y:167.1191}).wait(1).to({graphics:mask_1_graphics_37,x:240.5519,y:169.1154}).wait(1).to({graphics:mask_1_graphics_38,x:240.5545,y:170.9976}).wait(1).to({graphics:mask_1_graphics_39,x:240.557,y:172.7657}).wait(1).to({graphics:mask_1_graphics_40,x:240.5593,y:174.4198}).wait(1).to({graphics:mask_1_graphics_41,x:240.5615,y:175.9598}).wait(1).to({graphics:mask_1_graphics_42,x:240.5635,y:177.3857}).wait(1).to({graphics:mask_1_graphics_43,x:240.5653,y:178.6975}).wait(1).to({graphics:mask_1_graphics_44,x:240.567,y:179.8953}).wait(1).to({graphics:mask_1_graphics_45,x:240.5685,y:180.979}).wait(1).to({graphics:mask_1_graphics_46,x:240.5699,y:181.9486}).wait(1).to({graphics:mask_1_graphics_47,x:240.5711,y:182.8042}).wait(1).to({graphics:mask_1_graphics_48,x:240.5721,y:183.5456}).wait(1).to({graphics:mask_1_graphics_49,x:240.573,y:184.173}).wait(1).to({graphics:mask_1_graphics_50,x:240.5737,y:184.6864}).wait(1).to({graphics:mask_1_graphics_51,x:240.5743,y:185.0856}).wait(1).to({graphics:mask_1_graphics_52,x:240.5747,y:185.3708}).wait(1).to({graphics:mask_1_graphics_53,x:240.5749,y:185.5419}).wait(1).to({graphics:mask_1_graphics_54,x:240.525,y:185.5989}).wait(1).to({graphics:null,x:0,y:0}).wait(57));

	// texto1
	this.text_34 = new cjs.Text("Impacto y contribución", "bold 18px 'Arial'", "#666666");
	this.text_34.lineHeight = 22;
	this.text_34.lineWidth = 479;
	this.text_34.parent = this;
	this.text_34.setTransform(-3.2,-57.8);

	this.text_35 = new cjs.Text("Se consideran aspectos tales como:", "18px 'Arial'", "#666666");
	this.text_35.lineHeight = 22;
	this.text_35.lineWidth = 527;
	this.text_35.parent = this;
	this.text_35.setTransform(-3.2,50.85);

	this.text_36 = new cjs.Text("Contribución porcentual al cumplimiento del plan estratégico.", "18px 'Arial'", "#666666");
	this.text_36.lineHeight = 20;
	this.text_36.lineWidth = 518;
	this.text_36.parent = this;
	this.text_36.setTransform(29.7,210.3);

	this.text_37 = new cjs.Text("Consecuencias si el cargo queda vacante de forma repentina.", "18px 'Arial'", "#666666");
	this.text_37.lineHeight = 20;
	this.text_37.lineWidth = 501;
	this.text_37.parent = this;
	this.text_37.setTransform(28.7,171.5);

	this.text_38 = new cjs.Text("Impacto del cargo en los objetivos del plan estratégico.", "18px 'Arial'", "#666666");
	this.text_38.lineHeight = 20;
	this.text_38.lineWidth = 468;
	this.text_38.parent = this;
	this.text_38.setTransform(28.7,133.65);

	this.text_39 = new cjs.Text("Impacto en la contribución futura de la posición a los resultados del negocio.", "18px 'Arial'", "#666666");
	this.text_39.lineHeight = 19;
	this.text_39.lineWidth = 510;
	this.text_39.parent = this;
	this.text_39.setTransform(27.7,249.7);

	this.text_40 = new cjs.Text("e", "13px 'Arial'", "#FFFFFF");
	this.text_40.lineHeight = 15;
	this.text_40.lineWidth = 16;
	this.text_40.parent = this;
	this.text_40.setTransform(1.2806,250.75,1.3693,1.3693);

	this.instance_1 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,259.3,1,1,0,0,0,11.6,11.6);

	this.text_41 = new cjs.Text("d", "13px 'Arial'", "#FFFFFF");
	this.text_41.lineHeight = 15;
	this.text_41.lineWidth = 16;
	this.text_41.parent = this;
	this.text_41.setTransform(1.2806,213.75,1.3693,1.3693);

	this.instance_2 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(6.4,221.3,1,1,0,0,0,11.6,11.6);

	this.text_42 = new cjs.Text("c", "13px 'Arial'", "#FFFFFF");
	this.text_42.lineHeight = 15;
	this.text_42.lineWidth = 16;
	this.text_42.parent = this;
	this.text_42.setTransform(1.7806,175.3,1.3693,1.3693);

	this.text_43 = new cjs.Text("b", "13px 'Arial'", "#FFFFFF");
	this.text_43.lineHeight = 15;
	this.text_43.lineWidth = 16;
	this.text_43.parent = this;
	this.text_43.setTransform(1.5306,137.55,1.3693,1.3693);

	this.text_44 = new cjs.Text("a", "13px 'Arial'", "#FFFFFF");
	this.text_44.lineHeight = 15;
	this.text_44.lineWidth = 16;
	this.text_44.parent = this;
	this.text_44.setTransform(0.7806,94.75,1.3693,1.3693);

	this.text_45 = new cjs.Text("Naturaleza del cargo.", "18px 'Arial'", "#666666");
	this.text_45.lineHeight = 20;
	this.text_45.lineWidth = 445;
	this.text_45.parent = this;
	this.text_45.setTransform(28.7,92.8);

	this.text_46 = new cjs.Text("Se refiere a las posiciones con mayor incidencia en los resultados esperados, de acuerdo a las prioridades estratégicas del negocio y del área.", "18px 'Arial'", "#666666");
	this.text_46.lineHeight = 22;
	this.text_46.lineWidth = 526;
	this.text_46.parent = this;
	this.text_46.setTransform(-3.2,-24.75);

	this.instance_3 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.4,104.4,1,1,0,0,0,11.6,11.6);

	this.instance_4 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.4,145.35,1,1,0,0,0,11.6,11.6);

	this.instance_5 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.4,182.85,1,1,0,0,0,11.6,11.6);

	var maskedShapeInstanceList = [this.text_34,this.text_35,this.text_36,this.text_37,this.text_38,this.text_39,this.text_40,this.instance_1,this.text_41,this.instance_2,this.text_42,this.text_43,this.text_44,this.text_45,this.text_46,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.instance_2},{t:this.text_41},{t:this.instance_1},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34}]}).to({state:[]},55).to({state:[]},39).wait(18));

	// Boton retroceder
	this.btn_atras5 = new lib.AS_LG_150Botónpaginación();
	this.btn_atras5.name = "btn_atras5";
	this.btn_atras5.parent = this;
	this.btn_atras5.setTransform(584.85,31.7,1,1,0,90,-90);
	this.btn_atras5._off = true;
	new cjs.ButtonHelper(this.btn_atras5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_atras5).wait(55).to({_off:false},0).wait(57));

	// Botón avanzar
	this.btn_siguiente5 = new lib.AS_LG_150Botónpaginación();
	this.btn_siguiente5.name = "btn_siguiente5";
	this.btn_siguiente5.parent = this;
	this.btn_siguiente5.setTransform(585.1,210.05,1,1,90);
	new cjs.ButtonHelper(this.btn_siguiente5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente5).to({_off:true},55).wait(57));

	// Botones Claros/Siempre
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHApIg5hDQgFgGAFgHQAEgGAIACIAyAPIAFAAIAygPQAIgCAEAGQAFAHgFAGIg5BDQgDAEgFAAQgEAAgDgEg");
	this.shape_33.setTransform(575.4191,221.8765);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA1AsIgygPIgFAAIgyAPQgIACgEgGQgFgHAFgGIA5hDQADgEAEAAQAFAAADAEIA5BDQAFAGgFAHQgDAFgFAAIgEgBg");
	this.shape_34.setTransform(574.7809,20.1735);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("AhDQoQgdgcAAgqQAAgpAdgdQAdgdAoAAQAqAAAdAdQAcAdAAApQAAAqgcAcQgdAdgqAAQgoAAgdgdgAhBuVIgGgGQgdgdAAgpQAAgpAdgdQARgSAVgHQAPgEARgBQAQABAPAEQAVAHARASQAeAdAAApQAAApgeAdIgFAGQgbAXglAAQglAAgbgXg");
	this.shape_35.setTransform(574.95,120.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).wait(112));

	// Barra Desplazamiento
	this.instance_6 = new lib.AS_LG_152c();
	this.instance_6.parent = this;
	this.instance_6.setTransform(574.45,69.7,1,1,90,0,0,22.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({y:183.6},64).wait(19));

	// Barra fondo
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AAACAE").s().p("AgTLwQgJgIABgLIAA25QgBgLAJgIQAIgIALAAQALAAAJAIQAIAIAAALIAAW5QAAALgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_36.setTransform(574.5,121.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.1,-60.7,627.2,375.59999999999997);


(lib.scrollm2t3mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var rewind;
		this.rewind = false;
		var forward;
		this.forward = false;
		//funciona como reset, si el usuario regresa a esta pagina no tendra
		//el evento dos veces.....solo una vez
		this.btn_siguiente5.removeAllEventListeners();
		this.btn_atras5.removeAllEventListeners();
		init();
		function init() {
			///FORWARD
			root.btn_siguiente5.addEventListener("mousedown", playForwards);
			function playForwards() {
				root.forward = true;
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				playF();
			}
		
			function playF(e) {
				console.log("avanzando");
				root.gotoAndStop(root.timeline.position + 1);
				if (root.forward) {
					var my_timedProcess = setTimeout(playF, 25);
				}
				
			}
			///REWIND
			root.btn_atras5.addEventListener("click", playReverse);
			function playReverse() {
				root.btn_atras5.mouseEnabled = false;
				root.btn_siguiente5.mouseEnabled = false;
				root.rewind = true;
				playR();
			}
		
			function playR(e) {
				console.log("retrocediendo");
				root.gotoAndStop(root.timeline.position - 1);
				if (root.rewind) {
					var my_timedProcess = setTimeout(playR, 25);
				}
				
			}
		
		}
	}
	this.frame_29 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente5.mouseEnabled=true;
	}
	this.frame_111 = function() {
		this.stop();
		parent.siguiente_naranja();
		this.rewind=false;
		this.forward=false;
		this.btn_atras5.mouseEnabled=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(82).call(this.frame_111).wait(1));

	// cortina scroll (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_55 = new cjs.Graphics().p("EgwqAEpIAA1QMBhVAAAIAAVQg");
	var mask_graphics_56 = new cjs.Graphics().p("EgwqAHVIAA3aMBhVAAAIAAXag");
	var mask_graphics_57 = new cjs.Graphics().p("EgwqAJ8IAA5gMBhVAAAIAAZgg");
	var mask_graphics_58 = new cjs.Graphics().p("EgwqAMfIAA7jMBhVAAAIAAbjg");
	var mask_graphics_59 = new cjs.Graphics().p("EgwqAOxIAA9hMBhVAAAIAAdhg");
	var mask_graphics_60 = new cjs.Graphics().p("EgwqAPuIAA/bMBhVAAAIAAfbg");
	var mask_graphics_61 = new cjs.Graphics().p("EgwqAQqMAAAghTMBhVAAAMAAAAhTg");
	var mask_graphics_62 = new cjs.Graphics().p("EgwqARkMAAAgjHMBhVAAAMAAAAjHg");
	var mask_graphics_63 = new cjs.Graphics().p("EgwqAScMAAAgk3MBhVAAAMAAAAk3g");
	var mask_graphics_64 = new cjs.Graphics().p("EgwqATSMAAAgmjMBhVAAAMAAAAmjg");
	var mask_graphics_65 = new cjs.Graphics().p("EgwqAUGMAAAgoLMBhVAAAMAAAAoLg");
	var mask_graphics_66 = new cjs.Graphics().p("EgwqAU5MAAAgpxMBhVAAAMAAAApxg");
	var mask_graphics_67 = new cjs.Graphics().p("EgwqAVpMAAAgrRMBhVAAAMAAAArRg");
	var mask_graphics_68 = new cjs.Graphics().p("EgwqAWYMAAAgsvMBhVAAAMAAAAsvg");
	var mask_graphics_69 = new cjs.Graphics().p("EgwqAXFMAAAguJMBhVAAAMAAAAuJg");
	var mask_graphics_70 = new cjs.Graphics().p("EgwqAXwMAAAgvfMBhVAAAMAAAAvfg");
	var mask_graphics_71 = new cjs.Graphics().p("EgwqAYZMAAAgwxMBhVAAAMAAAAwxg");
	var mask_graphics_72 = new cjs.Graphics().p("EgwqAZBMAAAgyBMBhVAAAMAAAAyBg");
	var mask_graphics_73 = new cjs.Graphics().p("EgwqAZmMAAAgzLMBhVAAAMAAAAzLg");
	var mask_graphics_74 = new cjs.Graphics().p("EgwqAaKMAAAg0TMBhVAAAMAAAA0Tg");
	var mask_graphics_75 = new cjs.Graphics().p("EgwqAasMAAAg1XMBhVAAAMAAAA1Xg");
	var mask_graphics_76 = new cjs.Graphics().p("EgwqAbMMAAAg2XMBhVAAAMAAAA2Xg");
	var mask_graphics_77 = new cjs.Graphics().p("EgwqAbrMAAAg3VMBhVAAAMAAAA3Vg");
	var mask_graphics_78 = new cjs.Graphics().p("EgwqAcHMAAAg4NMBhVAAAMAAAA4Ng");
	var mask_graphics_79 = new cjs.Graphics().p("EgwqAciMAAAg5DMBhVAAAMAAAA5Dg");
	var mask_graphics_80 = new cjs.Graphics().p("EgwqAc6MAAAg5zMBhVAAAMAAAA5zg");
	var mask_graphics_81 = new cjs.Graphics().p("EgwqAdRMAAAg6hMBhVAAAMAAAA6hg");
	var mask_graphics_82 = new cjs.Graphics().p("EgwqAdmMAAAg7LMBhVAAAMAAAA7Lg");
	var mask_graphics_83 = new cjs.Graphics().p("EgwqAd6MAAAg7zMBhVAAAMAAAA7zg");
	var mask_graphics_84 = new cjs.Graphics().p("EgwqAeLMAAAg8VMBhVAAAMAAAA8Vg");
	var mask_graphics_85 = new cjs.Graphics().p("EgwqAebMAAAg81MBhVAAAMAAAA81g");
	var mask_graphics_86 = new cjs.Graphics().p("EgwqAeoMAAAg9PMBhVAAAMAAAA9Pg");
	var mask_graphics_87 = new cjs.Graphics().p("EgwqAe0MAAAg9nMBhVAAAMAAAA9ng");
	var mask_graphics_88 = new cjs.Graphics().p("EgwqAe+MAAAg97MBhVAAAMAAAA97g");
	var mask_graphics_89 = new cjs.Graphics().p("EgwqAfHMAAAg+NMBhVAAAMAAAA+Ng");
	var mask_graphics_90 = new cjs.Graphics().p("EgwqAfNMAAAg+ZMBhVAAAMAAAA+Zg");
	var mask_graphics_91 = new cjs.Graphics().p("EgwqAfSMAAAg+jMBhVAAAMAAAA+jg");
	var mask_graphics_92 = new cjs.Graphics().p("EgwqAfUMAAAg+nMBhVAAAMAAAA+ng");
	var mask_graphics_93 = new cjs.Graphics().p("EgwqAfVMAAAg+pMBhVAAAMAAAA+pg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_graphics_55,x:240.525,y:-106.425}).wait(1).to({graphics:mask_graphics_56,x:240.525,y:-103.0104}).wait(1).to({graphics:mask_graphics_57,x:240.525,y:-99.6868}).wait(1).to({graphics:mask_graphics_58,x:240.525,y:-96.4543}).wait(1).to({graphics:mask_graphics_59,x:240.525,y:-92.1322}).wait(1).to({graphics:mask_graphics_60,x:240.525,y:-79.8853}).wait(1).to({graphics:mask_graphics_61,x:240.525,y:-68.0039}).wait(1).to({graphics:mask_graphics_62,x:240.525,y:-56.4882}).wait(1).to({graphics:mask_graphics_63,x:240.525,y:-45.338}).wait(1).to({graphics:mask_graphics_64,x:240.525,y:-34.5534}).wait(1).to({graphics:mask_graphics_65,x:240.525,y:-24.1344}).wait(1).to({graphics:mask_graphics_66,x:240.525,y:-14.081}).wait(1).to({graphics:mask_graphics_67,x:240.525,y:-4.3931}).wait(1).to({graphics:mask_graphics_68,x:240.525,y:4.9291}).wait(1).to({graphics:mask_graphics_69,x:240.525,y:13.8858}).wait(1).to({graphics:mask_graphics_70,x:240.525,y:22.4769}).wait(1).to({graphics:mask_graphics_71,x:240.525,y:30.7025}).wait(1).to({graphics:mask_graphics_72,x:240.525,y:38.5624}).wait(1).to({graphics:mask_graphics_73,x:240.525,y:46.0568}).wait(1).to({graphics:mask_graphics_74,x:240.525,y:53.1856}).wait(1).to({graphics:mask_graphics_75,x:240.525,y:59.9488}).wait(1).to({graphics:mask_graphics_76,x:240.525,y:66.3464}).wait(1).to({graphics:mask_graphics_77,x:240.525,y:72.3785}).wait(1).to({graphics:mask_graphics_78,x:240.525,y:78.045}).wait(1).to({graphics:mask_graphics_79,x:240.525,y:83.3459}).wait(1).to({graphics:mask_graphics_80,x:240.525,y:88.2812}).wait(1).to({graphics:mask_graphics_81,x:240.525,y:92.8509}).wait(1).to({graphics:mask_graphics_82,x:240.525,y:97.0551}).wait(1).to({graphics:mask_graphics_83,x:240.525,y:100.8937}).wait(1).to({graphics:mask_graphics_84,x:240.525,y:104.3667}).wait(1).to({graphics:mask_graphics_85,x:240.525,y:107.4741}).wait(1).to({graphics:mask_graphics_86,x:240.525,y:110.216}).wait(1).to({graphics:mask_graphics_87,x:240.525,y:112.5922}).wait(1).to({graphics:mask_graphics_88,x:240.525,y:114.6029}).wait(1).to({graphics:mask_graphics_89,x:240.525,y:116.248}).wait(1).to({graphics:mask_graphics_90,x:240.525,y:117.5275}).wait(1).to({graphics:mask_graphics_91,x:240.525,y:118.4415}).wait(1).to({graphics:mask_graphics_92,x:240.525,y:118.9899}).wait(1).to({graphics:mask_graphics_93,x:240.525,y:119.2365}).wait(19));

	// texto 2
	this.text = new cjs.Text("HERRAMIENTA DE CRITICIDAD DE PUESTO\nRegistro de posiciones a evaluar", "bold 13px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 504;
	this.text.parent = this;
	this.text.setTransform(240.65,-58.75);

	this.instance = new lib.AS_LG_MOV_10();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,279.4,0.7881,0.7881,0,0,0,29.9,30);

	this.instance_1 = new lib.barrabcdespliega("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(636.2,267.55,0.0144,0.7881,0,0,0,397,43.1);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.info01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(304.8,302,0.7881,0.7881);

	this.instance_3 = new lib.tablainfoposiciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(235.1,106.05,1,1,0,0,0,227.7,133.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("Ag3AxQgYgUAAgdQAAgcAYgVQAXgUAgAAQAiAAAWAUQAYAVAAAcQAAAdgYAUQgWAVgiAAQggAAgXgVg");
	this.shape.setTransform(132.8,410.7);

	var maskedShapeInstanceList = [this.text,this.instance,this.instance_1,this.instance_2,this.instance_3,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]},55).wait(57));

	// cortina scroll (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgwqAGNIAA1QMBhVAAAIAAVQg");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgwqAJQIAA3lMBhVAAAIAAXlg");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgwqAMMIAA50MBhVAAAIAAZ0g");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgwqAOAIAA7/MBhVAAAIAAb/g");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgwqAPCIAA+DMBhVAAAIAAeDg");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgwqAQCMAAAggDMBhVAAAMAAAAgDg");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgwqAQ/MAAAgh9MBhVAAAMAAAAh9g");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgwqAR6MAAAgjzMBhVAAAMAAAAjzg");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgwqASxMAAAglhMBhVAAAMAAAAlhg");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgwqATnMAAAgnNMBhVAAAMAAAAnNg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgwqAUaMAAAgozMBhVAAAMAAAAozg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgwqAVKMAAAgqTMBhVAAAMAAAAqTg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgwqAV3MAAAgrtMBhVAAAMAAAArtg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgwqAWiMAAAgtDMBhVAAAMAAAAtDg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgwqAXLMAAAguVMBhVAAAMAAAAuVg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgwqAXwMAAAgvfMBhVAAAMAAAAvfg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgwqAYUMAAAgwnMBhVAAAMAAAAwng");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgwqAY0MAAAgxnMBhVAAAMAAAAxng");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgwqAZSMAAAgyjMBhVAAAMAAAAyjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgwqAZtMAAAgzZMBhVAAAMAAAAzZg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgwqAaGMAAAg0LMBhVAAAMAAAA0Lg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgwqAacMAAAg03MBhVAAAMAAAA03g");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgwqAawMAAAg1fMBhVAAAMAAAA1fg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgwqAbBMAAAg2BMBhVAAAMAAAA2Bg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgwqAbPMAAAg2dMBhVAAAMAAAA2dg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EgwqAbbMAAAg21MBhVAAAMAAAA21g");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgwqAbkMAAAg3HMBhVAAAMAAAA3Hg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgwqAbqMAAAg3TMBhVAAAMAAAA3Tg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgwqAbuMAAAg3bMBhVAAAMAAAA3bg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgwqAbwMAAAg3fMBhVAAAMAAAA3fg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgwqAZ+MAAAgz7MBhVAAAMAAAAz7g");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgwqAYSMAAAgwgMBhVAAAMAAAAwgg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgwqAYrMAAAgtOMBhVAAAMAAAAtOg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgwqAZEMAAAgqGMBhVAAAMAAAAqGg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgwqAZbMAAAgnGMBhVAAAMAAAAnGg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgwqAZyMAAAgkSMBhVAAAMAAAAkSg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgwqAaHMAAAghlMBhVAAAMAAAAhlg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgwqAabIAA/CMBhVAAAIAAfCg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgwqAauIAA8pMBhVAAAIAAcpg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgwqAa/IAA6ZMBhVAAAIAAaZg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgwqAbQIAA4SMBhVAAAIAAYSg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EgwqAbfIAA2UMBhVAAAIAAWUg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgwqAbuIAA0gMBhVAAAIAAUgg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgwqAb7IAAy1MBhVAAAIAAS1g");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgwqAcHIAAxTMBhVAAAIAARTg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgwqAcSIAAv7MBhVAAAIAAP7g");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgwqAcbIAAurMBhVAAAIAAOrg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EgwqAckIAAtmMBhVAAAIAANmg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EgwqAcrIAAspMBhVAAAIAAMpg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgwqAcyIAAr2MBhVAAAIAAL2g");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgwqAc3IAArMMBhVAAAIAALMg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgwqAc7IAAqsMBhVAAAIAAKsg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgwqAc+IAAqUMBhVAAAIAAKUg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgwqAc/IAAqGMBhVAAAIAAKGg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgwqAdAIAAqBMBhVAAAIAAKBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:240.525,y:-96.425}).wait(1).to({graphics:mask_1_graphics_1,x:240.525,y:-91.7651}).wait(1).to({graphics:mask_1_graphics_2,x:240.525,y:-87.2688}).wait(1).to({graphics:mask_1_graphics_3,x:240.525,y:-76.3165}).wait(1).to({graphics:mask_1_graphics_4,x:240.525,y:-61.3383}).wait(1).to({graphics:mask_1_graphics_5,x:240.525,y:-46.9474}).wait(1).to({graphics:mask_1_graphics_6,x:240.525,y:-33.144}).wait(1).to({graphics:mask_1_graphics_7,x:240.525,y:-19.9279}).wait(1).to({graphics:mask_1_graphics_8,x:240.525,y:-7.2991}).wait(1).to({graphics:mask_1_graphics_9,x:240.525,y:4.7422}).wait(1).to({graphics:mask_1_graphics_10,x:240.525,y:16.1962}).wait(1).to({graphics:mask_1_graphics_11,x:240.525,y:27.0627}).wait(1).to({graphics:mask_1_graphics_12,x:240.525,y:37.3419}).wait(1).to({graphics:mask_1_graphics_13,x:240.525,y:47.0337}).wait(1).to({graphics:mask_1_graphics_14,x:240.525,y:56.1381}).wait(1).to({graphics:mask_1_graphics_15,x:240.525,y:64.6552}).wait(1).to({graphics:mask_1_graphics_16,x:240.525,y:72.5848}).wait(1).to({graphics:mask_1_graphics_17,x:240.525,y:79.9271}).wait(1).to({graphics:mask_1_graphics_18,x:240.525,y:86.682}).wait(1).to({graphics:mask_1_graphics_19,x:240.525,y:92.8495}).wait(1).to({graphics:mask_1_graphics_20,x:240.525,y:98.4297}).wait(1).to({graphics:mask_1_graphics_21,x:240.525,y:103.4224}).wait(1).to({graphics:mask_1_graphics_22,x:240.525,y:107.8278}).wait(1).to({graphics:mask_1_graphics_23,x:240.525,y:111.6458}).wait(1).to({graphics:mask_1_graphics_24,x:240.525,y:114.8764}).wait(1).to({graphics:mask_1_graphics_25,x:240.525,y:117.5196}).wait(1).to({graphics:mask_1_graphics_26,x:240.525,y:119.5754}).wait(1).to({graphics:mask_1_graphics_27,x:240.525,y:121.0439}).wait(1).to({graphics:mask_1_graphics_28,x:240.525,y:121.9249}).wait(1).to({graphics:mask_1_graphics_29,x:240.525,y:122.1621}).wait(1).to({graphics:mask_1_graphics_30,x:240.525,y:139.1703}).wait(1).to({graphics:mask_1_graphics_31,x:240.525,y:155.3497}).wait(1).to({graphics:mask_1_graphics_32,x:240.525,y:157.922}).wait(1).to({graphics:mask_1_graphics_33,x:240.525,y:160.38}).wait(1).to({graphics:mask_1_graphics_34,x:240.525,y:162.7237}).wait(1).to({graphics:mask_1_graphics_35,x:240.525,y:164.953}).wait(1).to({graphics:mask_1_graphics_36,x:240.525,y:167.0681}).wait(1).to({graphics:mask_1_graphics_37,x:240.525,y:169.0687}).wait(1).to({graphics:mask_1_graphics_38,x:240.525,y:170.9551}).wait(1).to({graphics:mask_1_graphics_39,x:240.525,y:172.7272}).wait(1).to({graphics:mask_1_graphics_40,x:240.525,y:174.3849}).wait(1).to({graphics:mask_1_graphics_41,x:240.525,y:175.9283}).wait(1).to({graphics:mask_1_graphics_42,x:240.525,y:177.3573}).wait(1).to({graphics:mask_1_graphics_43,x:240.525,y:178.6721}).wait(1).to({graphics:mask_1_graphics_44,x:240.525,y:179.8725}).wait(1).to({graphics:mask_1_graphics_45,x:240.525,y:180.9586}).wait(1).to({graphics:mask_1_graphics_46,x:240.525,y:181.9303}).wait(1).to({graphics:mask_1_graphics_47,x:240.525,y:182.7878}).wait(1).to({graphics:mask_1_graphics_48,x:240.525,y:183.5309}).wait(1).to({graphics:mask_1_graphics_49,x:240.525,y:184.1597}).wait(1).to({graphics:mask_1_graphics_50,x:240.525,y:184.6741}).wait(1).to({graphics:mask_1_graphics_51,x:240.525,y:185.0743}).wait(1).to({graphics:mask_1_graphics_52,x:240.525,y:185.3601}).wait(1).to({graphics:mask_1_graphics_53,x:240.525,y:185.5316}).wait(1).to({graphics:mask_1_graphics_54,x:240.525,y:185.5989}).wait(1).to({graphics:null,x:0,y:0}).wait(57));

	// texto1
	this.text_1 = new cjs.Text("Unidad de Negocio (zona, planta, etc.)", "18px 'Arial'", "#666666");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 589;
	this.text_1.parent = this;
	this.text_1.setTransform(28.7,208.3);

	this.text_2 = new cjs.Text("Función (gerente, jefe, coordinador, etc.)", "18px 'Arial'", "#666666");
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 589;
	this.text_2.parent = this;
	this.text_2.setTransform(28.7,152.8);

	this.text_3 = new cjs.Text("3", "13px 'Arial'", "#FFFFFF");
	this.text_3.lineHeight = 15;
	this.text_3.lineWidth = 16;
	this.text_3.parent = this;
	this.text_3.setTransform(1.7806,211.3,1.3693,1.3693);

	this.text_4 = new cjs.Text("2", "13px 'Arial'", "#FFFFFF");
	this.text_4.lineHeight = 15;
	this.text_4.lineWidth = 16;
	this.text_4.parent = this;
	this.text_4.setTransform(1.5306,155.55,1.3693,1.3693);

	this.text_5 = new cjs.Text("1", "13px 'Arial'", "#FFFFFF");
	this.text_5.lineHeight = 15;
	this.text_5.lineWidth = 16;
	this.text_5.parent = this;
	this.text_5.setTransform(0.7806,89.75,1.3693,1.3693);

	this.text_6 = new cjs.Text("Nombre de la posición (gerente de ventas, coordinador de auditoría, etc.)", "18px 'Arial'", "#666666");
	this.text_6.lineHeight = 20;
	this.text_6.lineWidth = 458;
	this.text_6.parent = this;
	this.text_6.setTransform(28.7,85.8);

	this.text_7 = new cjs.Text("En esta sección se enlistan las posiciones a evaluar.\nLa información que contiene es:", "18px 'Arial'", "#666666");
	this.text_7.lineHeight = 22;
	this.text_7.lineWidth = 529;
	this.text_7.parent = this;
	this.text_7.setTransform(-3.2,-7.75);

	this.instance_4 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.4,99.4,1,1,0,0,0,11.6,11.6);

	this.instance_5 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.4,163.35,1,1,0,0,0,11.6,11.6);

	this.instance_6 = new lib.bulletgddecolorrojoarca("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(6.4,218.85,1,1,0,0,0,11.6,11.6);

	var maskedShapeInstanceList = [this.text_1,this.text_2,this.text_3,this.text_4,this.text_5,this.text_6,this.text_7,this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1}]}).to({state:[]},55).to({state:[]},39).wait(18));

	// Boton retroceder
	this.btn_atras5 = new lib.AS_LG_150Botónpaginación();
	this.btn_atras5.name = "btn_atras5";
	this.btn_atras5.parent = this;
	this.btn_atras5.setTransform(584.85,31.7,1,1,0,90,-90);
	this.btn_atras5._off = true;
	new cjs.ButtonHelper(this.btn_atras5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_atras5).wait(55).to({_off:false},0).wait(57));

	// Botón avanzar
	this.btn_siguiente5 = new lib.AS_LG_150Botónpaginación();
	this.btn_siguiente5.name = "btn_siguiente5";
	this.btn_siguiente5.parent = this;
	this.btn_siguiente5.setTransform(585.1,210.05,1,1,90);
	new cjs.ButtonHelper(this.btn_siguiente5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente5).to({_off:true},55).wait(57));

	// Botones Claros/Siempre
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHApIg5hDQgFgGAFgHQAEgGAIACIAyAPIAFAAIAygPQAIgCAEAGQAFAHgFAGIg5BDQgDAEgFAAQgEAAgDgEg");
	this.shape_1.setTransform(575.4191,221.8765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA1AsIgygPIgFAAIgyAPQgIACgEgGQgFgHAFgGIA5hDQADgEAEAAQAFAAADAEIA5BDQAFAGgFAHQgDAFgFAAIgEgBg");
	this.shape_2.setTransform(574.7809,20.1735);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhDQoQgdgcAAgqQAAgpAdgdQAdgdAoAAQAqAAAdAdQAcAdAAApQAAAqgcAcQgdAdgqAAQgoAAgdgdgAhBuVIgGgGQgdgdAAgpQAAgpAdgdQARgSAVgHQAPgEARgBQAQABAPAEQAVAHARASQAeAdAAApQAAApgeAdIgFAGQgbAXglAAQglAAgbgXg");
	this.shape_3.setTransform(574.95,120.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(112));

	// Barra Desplazamiento
	this.instance_7 = new lib.AS_LG_152c();
	this.instance_7.parent = this;
	this.instance_7.setTransform(574.45,69.7,1,1,90,0,0,22.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({y:183.6},64).wait(19));

	// Barra fondo
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AAACAE").s().p("AgTLwQgJgIABgLIAA25QgBgLAJgIQAIgIALAAQALAAAJAIQAIAIAAALIAAW5QAAALgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_4.setTransform(574.5,121.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-64,623.6,383.8);


(lib.retosactualesfuturos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M02_TMR_PREGUNTA2();
	this.instance.parent = this;
	this.instance.setTransform(213.25,163.8,0.6924,0.6924,0,0,0,141.2,118.5);

	this.text = new cjs.Text("Impacto y contribución.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 147;
	this.text.parent = this;
	this.text.setTransform(186.5,256.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(111,78.4,203.60000000000002,240.70000000000002);


(lib.prioridades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M02_TMR_CV1();
	this.instance.parent = this;
	this.instance.setTransform(88.55,164.25,0.7192,0.7192,0,0,0,106.6,106.6);

	this.text = new cjs.Text("Información de \nlas posiciones.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 181;
	this.text.parent = this;
	this.text.setTransform(85.25,256.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,87.6,184.6,232.00000000000003);


(lib.mc5T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// icono
	this.instance = new lib.iconoinfobrechadisponibilidad("single",0);
	this.instance.parent = this;
	this.instance.setTransform(63.55,238.35,1,1,0,0,0,75,152.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AiOj4IEdD4IkdD5g");
	this.shape.setTransform(228,218.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance},{t:this.shape}]},16).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({x:113.55,alpha:1,mode:"synched"},16,cjs.Ease.get(1)).wait(30));

	// Layer 2
	this.instance_1 = new lib.flechamueve("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(886.55,28.4,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic en las flechas para ver más información.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(477.35,19.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance_1}]},39).wait(14));

	// scroll
	this.instance_2 = new lib.scrollm2t3mc5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(302.95,128.25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(14));

	// fondo scroll
	this.instance_3 = new lib.fondoscroll1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.1,223.75,0.4594,1,0,0,0,445.9,169.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({scaleX:1,x:451.15,alpha:1},16,cjs.Ease.get(1)).wait(14));

	// titulo interno fijo
	this.text_1 = new cjs.Text("¿Cómo identificamos los puestos críticos?", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 563;
	this.text_1.parent = this;
	this.text_1.setTransform(6.55,13.15);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(53));

	// guia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape_1.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,-84.6,1155.3,624.6);


(lib.mc4T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Layer 2
	this.instance = new lib.flechamueve("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(886.55,28.4,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic en las flechas para ver más información.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(477.35,19.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},39).wait(14));

	// icono
	this.instance_1 = new lib.iconoinfoimpactoposiciones("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.55,238.35,1,1,0,0,0,75,152.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AiOj4IEdD4IkdD5g");
	this.shape.setTransform(228,218.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1},{t:this.shape}]},16).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({x:113.55,alpha:1,mode:"synched"},16,cjs.Ease.get(1)).wait(30));

	// scroll
	this.instance_2 = new lib.scrollm2t3mc4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(302.95,128.25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(14));

	// fondo scroll
	this.instance_3 = new lib.fondoscroll1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.1,223.75,0.4594,1,0,0,0,445.9,169.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({scaleX:1,x:451.15,alpha:1},16,cjs.Ease.get(1)).wait(14));

	// titulo interno fijo
	this.text_1 = new cjs.Text("¿Cómo identificamos los puestos críticos?", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 563;
	this.text_1.parent = this;
	this.text_1.setTransform(6.55,13.15);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(53));

	// guia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape_1.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,-82.6,1155.3,622.6);


(lib.mc3T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Layer 2
	this.instance = new lib.flechamueve("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(886.55,28.4,1,1,0,0,0,23.4,23.4);

	this.text = new cjs.Text("Haz clic en las flechas para ver más información.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(477.35,19.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.instance}]},39).wait(14));

	// icono
	this.instance_1 = new lib.iconoinfoposicionesbien("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.55,238.35,1,1,0,0,0,75,152.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AiOj4IEdD4IkdD5g");
	this.shape.setTransform(228,218.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1},{t:this.shape}]},16).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({x:113.55,alpha:1,mode:"synched"},16,cjs.Ease.get(1)).wait(30));

	// scroll
	this.instance_2 = new lib.scrollm2t3mc3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(302.95,128.25);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(14));

	// fondo scroll
	this.instance_3 = new lib.fondoscroll1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(240.1,223.75,0.4594,1,0,0,0,445.9,169.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({scaleX:1,x:451.15,alpha:1},16,cjs.Ease.get(1)).wait(14));

	// titulo interno fijo
	this.text_1 = new cjs.Text("¿Cómo identificamos los puestos críticos?", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 563;
	this.text_1.parent = this;
	this.text_1.setTransform(6.55,13.15);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(53));

	// guia
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape_1.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,-64.6,1170.5,604.6);


(lib.mc2T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_131 = function() {
		this.stop();
		parent.siguiente_naranja();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(131).call(this.frame_131).wait(1));

	// CIRCULO1
	this.instance = new lib.prioridades("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(194.35,187.95,0.2998,0.2998,0,0,0,91.4,91.4);
	this.instance.alpha = 0.1016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({_off:false},0).to({scaleX:1,scaleY:1,x:194.3,alpha:1},17,cjs.Ease.get(1)).wait(68));

	// CIRCULO2
	this.instance_1 = new lib.retosactualesfuturos("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.7,223,0.3,0.3,0,0,0,91.5,91.5);
	this.instance_1.alpha = 0.2305;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({regX:91.4,regY:91.4,scaleX:1,scaleY:1,x:358.75,y:187.95,alpha:1},16,cjs.Ease.get(1)).wait(44));

	// CIRCULO3
	this.instance_2 = new lib.perfolescpacidades("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(413,239.95,0.3,0.3,0,0,0,91.4,91.4);
	this.instance_2.alpha = 0.2305;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).to({scaleX:1,scaleY:1,x:674.1,y:187.95,alpha:1},16,cjs.Ease.get(1)).wait(20));

	// m2t1mc1 txt1
	this.instance_3 = new lib.iconoinfoposiciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(285.55,68.35,1,1,0,0,0,187,42.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:215.55,alpha:1},16,cjs.Ease.get(1)).wait(116));

	// m2t1mc1 txt1
	this.instance_4 = new lib.m2t3mc12tit1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(135.55,68.35,1,1,0,0,0,187,42.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({x:215.55,alpha:1},16,cjs.Ease.get(1)).wait(94));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,3.9,1078.2,536.1);


(lib.mc1T3M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_184 = function() {
		this.stop();
		parent.siguiente_naranja();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(184).call(this.frame_184).wait(1));

	// Layer 2
	this.instance = new lib.puestoscriticosiconote("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(858.05,-46.9,0.9215,0.9215,56.9449,0,0,165,136.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({rotation:0,x:658.2,y:-47,alpha:1},13,cjs.Ease.get(1)).wait(67));

	// caja larga
	this.instance_1 = new lib.cajagdemc1t3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.45,-75.35,0.4537,1,0,0,0,363.4,93);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({_off:false},0).to({scaleX:1,x:363.45,alpha:1},15,cjs.Ease.get(1)).wait(52));

	// caja gris
	this.instance_2 = new lib.cajagrismc1t3m2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157).to({_off:false},0).to({y:89.6,alpha:1},15,cjs.Ease.get(1)).wait(13));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgxAAhHQAAhGAwgxQAwgyBEAAQBFAAAwAyQAwAxAABGQAABHgwAxQgwAyhFAAQhEAAgwgyg");
	this.shape.setTransform(-191.3,293.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(185));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,-178.5,1207.8,488.9);


(lib.mc_infoRecuerda02ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// icono
	this.instance = new lib.AS_LG_MOV_10ss();
	this.instance.parent = this;
	this.instance.setTransform(-154.45,11.85,1,1,0,0,0,30,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-244.15,y:-104.15},26,cjs.Ease.get(1)).wait(3));

	// Layer 1
	this.instance_1 = new lib.info01ss();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-62,-42);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-25.35,y:-26,alpha:1},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.4,-141.8,257.79999999999995,293);


(lib.mc5aT3M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_97 = function() {
		this.stop();
		parent.final_tema();
		parent.siguiente_verde();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(97).call(this.frame_97).wait(1));

	// header1
	this.instance = new lib.no1perfil("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-174.95,-126.9,1,1,0,0,0,290.8,73.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:24.55,alpha:1},22,cjs.Ease.get(1)).wait(76));

	// header2
	this.instance_1 = new lib.no1perfilsale("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(299.85,-119.2,1,1,0,0,0,555.6,58.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({x:341.85,alpha:1},20,cjs.Ease.get(1)).wait(56));

	// Layer 3
	this.info = new lib.mc_infoRecuerda02ss();
	this.info.name = "info";
	this.info.parent = this;
	this.info.setTransform(317.8,94.6);
	this.info.alpha = 0;
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(70).to({_off:false},0).to({x:313.9,alpha:1},15,cjs.Ease.get(1)).wait(13));

	// Layer 2
	this.instance_2 = new lib.tabla3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(653.75,89.05,1,1,0,0,0,314.8,147.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).to({x:527.75,alpha:1},20,cjs.Ease.get(1)).wait(28));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgyAAhGQAAhFAwgyQAxgyBDAAQBEAAAxAyQAwAyAABFQAABGgwAyQgxAyhEAAQhDAAgxgyg");
	this.shape.setTransform(-203.3,305.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-591.7,-189.7,1560.3000000000002,512.0999999999999);


// stage content:
(lib.AC_TMR_M02_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		parent.comando("iniciar",this);
	}
	this.frame_1 = function() {
		this.stop();
		parent.comando("resetear");
	}
	this.frame_2 = function() {
		this.stop();
		parent.comando("resetear");
	}
	this.frame_3 = function() {
		this.stop();
		parent.comando("resetear");
	}
	this.frame_4 = function() {
		this.stop();
		parent.comando("resetear");
	}
	this.frame_5 = function() {
		this.stop();
		parent.comando("resetear");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// TITULO
	this.instance = new lib.tema_entrada_titulo();
	this.instance.parent = this;
	this.instance.setTransform(303.6,249.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,218,255,0.6)").ss(1,1,1).p("AhoioIDRAAIAAFRIjRAAg");
	this.shape.setTransform(-123.65,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhoCpIAAlRIDRAAIAAFRg");
	this.shape_1.setTransform(-123.65,16.9);

	this.instance_1 = new lib.tituloestatico();
	this.instance_1.parent = this;
	this.instance_1.setTransform(303.6,249.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).wait(5));

	// PAGINAS
	this.instance_2 = new lib.mc1T3M2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(479.45,431.85,1,1,0,0,0,418.7,193.1);

	this.instance_3 = new lib.mc2T2M2TMR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.4,40.15);

	this.instance_4 = new lib.mc3T2M2TMR();
	this.instance_4.parent = this;
	this.instance_4.setTransform(17.4,40.15);

	this.instance_5 = new lib.mc4T2M2TMR();
	this.instance_5.parent = this;
	this.instance_5.setTransform(17.4,40.15);

	this.instance_6 = new lib.mc5T2M2TMR();
	this.instance_6.parent = this;
	this.instance_6.setTransform(17.4,40.15);

	this.instance_7 = new lib.mc5aT3M2TMR();
	this.instance_7.parent = this;
	this.instance_7.setTransform(479.45,431.85,1,1,0,0,0,418.7,193.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,249,737.7,331.20000000000005);
// library properties:
lib.properties = {
	id: '124C9A7CD1994DA48D87B0D2BAAD2494',
	width: 950,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['124C9A7CD1994DA48D87B0D2BAAD2494'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;