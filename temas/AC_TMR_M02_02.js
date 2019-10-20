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


(lib.titulot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Entendimiento de la estrategia de negocio", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(92.9,24);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,22,189.9,146.7);


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
	this.shape.setTransform(-293.7,-230);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.8,-230.1);

	this.text = new cjs.Text("Entendimiento de la estrategia de negocio", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,393.5,26.4), null);


(lib.tapageneralblanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.prioridades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Las prioridades del área para los siguentes 3 a 5 años.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 181;
	this.text.parent = this;
	this.text.setTransform(82.3,161.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9AC9AC").s().p("AGIJEIsPgBQgrAAgLgLQgLgLAAgtIAAwAQAAgsALgLQALgLAsAAIMLAAQAsAAALALQALAKAAAsQAAMfACDlQAAAkgOAOQgPAPghAAIgDAAgAkPFIQgWAWAAAdQABAcAVAVQAUAWAcABQAeABAWgVQAXgWAAgdQABgegWgWQgVgWgeAAQgeAAgVAWgAEJGWIArgBIAIgCQARgGABgTQAAgUgRgHQgCgCgFAAQirgDisADQgDAAgEACQgQAHAAATQABAUASAGIAHACQAcABA4AAIBUAAIB/AAgAlEB1QgMAAgHAJQgIAJADALIACAFQAmAvAbAVQAGAFAQgCQAQgCAHgGQBAg7BEhMQADgCABgEQAGgQgNgLQgNgLgOAJIgEACIhyBqQgHAHgJgBQgJAAgGgHQgQgUgOgLQgEgDgGAAIgBAAgAgiBmQgFAAgEADQgQAJACATQADATASAEIADAAQAjACAyAAIBUAAIAAgBIBaABQA0AAAmgCQAFAAAFgEQAOgJAAgQQAAgQgNgIQgFgDgEAAIiBgBQhzAAhsADgAlRh4QgMALAHAOIABADQAPAVAmAmQAaAeAdgfIBChEQAngpAZgcIAEgFQAGgPgMgLQgMgKgPAHIgEADIhzBuQgHAHgKgBQgJgBgFgHQgPgUgJgIIgFgCQgGgDgFAAQgIAAgHAHgAggiRQgEAAgFADQgQAHgBATQAAASAQAGQADACAEAAQCuADCugDIAGgCQARgGAAgSQAAgTgRgHIgJgDIgpgBIh/AAgAlTltQgKANAJANIAAAAQAIALARARQATAUAHAHQAPASAOgBQANgBAPgRIA/hAQAmgoAYgaIAAAAQALgNgLgPQgMgOgPAIQgDABgFAEQgYAUhVBXQgHAHgJgBQgIgBgEgHQgPgWgLgIIgIgEIgIgCQgKAAgIAKgAgcmKIgFABQgTADgCAUQgCAVASAIQAFACAEAAIAoACQApABBTgBIBXAAQAzAAAkgCQAFAAADgCQARgHAAgTQAAgTgRgGIgIgCQhUgBhVAAQhVAAhTABg");
	this.shape.setTransform(89,68.9,0.61,0.61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmLKUQhHAAgigiQghgiAAhFIAAwZQAAhBAhgiQAhgiBBAAQGSgCGSACQCFABAACIIAAQTQAABHghAiQgiAihGAAImNABImMgBgAmFpCQgsAAgLALQgLALAAAsIAAQAQAAAtALALQAKALAsAAIMPABQAkAAAOgPQAOgOAAgkQgBjlAAsfQAAgsgLgKQgLgLgtAAImFAAImFAAg");
	this.shape_1.setTransform(89,68.9,0.61,0.61);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3EFB9").s().p("AjjIXQhpgshPhRQhQhQgshpQgthsAAh2QAAh3AuhsQAshoBRhQQBRhQBpgsQBtgsB4AAQB1AABrAuQBoAsBPBRQBQBRAsBoQAsBtAAB1QAAB3guBrQgsBphQBQQhRBPhpAsQhsAth2AAQh3AAhrgug");
	this.shape_2.setTransform(89,68.9,1.197,1.197);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("Am5QYQjMhXieidQididhWjNQhajTAAjnQAAjnBajTQBWjMCdidQCeieDMhWQDShZDnAAQDoAADSBZQDMBWCeCeQCeCdBVDMQBaDTAADnQAADnhaDTQhVDNieCdQieCdjMBXQjSBZjoAAQjnAAjShZg");
	this.shape_3.setTransform(89,68.9,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-12,184.6,236.6);


(lib.perfolescpacidades = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Los roles y capacidades necesarios para lograr los objetivos actuales y futuros.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 252;
	this.text.parent = this;
	this.text.setTransform(84.9,161.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(80.4,41,0.582,0.582);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAYQgJgKgBgOQABgNAJgKQALgKANAAQAOAAALAKQAKAKgBANQABAOgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_1.setTransform(87.5,41,0.582,0.582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAYQgKgKAAgOQAAgNAKgKQALgKANAAQAOAAALAKQAJAKABANQgBAOgJAKQgLAKgOAAQgNAAgLgKg");
	this.shape_2.setTransform(94.7,41,0.582,0.582);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AjvC7IBohFQA/AhBOAAQBjAABGgyQBFgzAAhGQAAhIhFgyQhGgzhjAAQhhAAhGAzQhGAyAABIQAAAtAhAqg");
	this.shape_3.setTransform(87.2,42.2,0.582,0.582);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B1C0C9").s().p("AjJBGQgggqAAgtQAAhHBFgzQBHgyBhAAQBjAABGAyQBFAzAABHQAABHhFAyQhGAzhjAAQhOAAg/giIhoBFg");
	this.shape_4.setTransform(87.3,42,0.582,0.582);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAYQgJgKgBgOQABgOAJgJQALgLANAAQAOAAALALQAKAKgBANQABAOgKAKQgLALgOgBQgNABgLgLg");
	this.shape_5.setTransform(107.8,78.8,0.582,0.582);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_6.setTransform(100.6,78.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAYQgLgKAAgOQAAgNALgKQAKgLANAAQAOAAALALQAKAKgBANQABAOgKAKQgLALgOgBQgNABgKgLg");
	this.shape_7.setTransform(93.4,78.8,0.582,0.582);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6699CC").s().p("AhTBEQgigZAAgiQAAgiAigZQAigZAwAAQAmAAAeARIAzgiIgUA7QAQAUAAAWQAAAigiAZQgiAZgvAAQgwAAgigZg");
	this.shape_8.setTransform(101.3,77.9,1.197,1.197);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C9C9C9").s().p("AhOCZIAMhEQAHgsANhkIAMhcIA+BRQA9BbgMA2IgNBOg");
	this.shape_9.setTransform(135.1,85.2,0.582,0.582);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C9C9C9").s().p("Ag7CMQgIgtgHgXQgahRBBhJQAVgXAZgUIAXgOIAPBEQAPBMAFAtQADAeAKA8g");
	this.shape_10.setTransform(98.5,85.9,0.582,0.582);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBCACB").s().p("AgdAoQgvgbgCgVIAbg1ICCBSIg/ApQgVgJgYgNg");
	this.shape_11.setTransform(112.1,75.7,0.582,0.582);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BBCACB").s().p("AhJARIB5hGIAaA1QgCAVgnATQgUAJgSAFg");
	this.shape_12.setTransform(120.7,76.2,0.582,0.582);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9D9393").s().p("AA6A0IgBgBQgMgCgIgJQgMgMgBgTIAAgFQgKgMgNACIgBAAIgBAAIAAAAQgMgCgKAMIAAAFQgBATgMAMQgIAJgMACIgBABIhjAAIgDgCQgPgJgJgNQgFgLAAgKIAAgJIgdAFIgEgaIAkgHQAGgQAXgFIBeAAQAaAAALAYQANgHAMACQANgCANAHQALgYAaAAIBeAAQAWAFAHAQIAkAHIgEAaIgegFIAAAJQABAKgFALQgIANgQAJIgDACgAAzgRIAAAaQAAANAKADIBZAAQAMgHAAgKIAAgaQAAgEgKgCIhZAAQgJAAgDAHgAiigSIAAAbIACAFQADAHAIAEIBZAAQAKgEAAgMIAAgaQgDgHgJAAIhZAAQgLACAAAEg");
	this.shape_13.setTransform(115.8,52.3,0.582,0.582);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#71706F").s().p("ADUCDIgNhgQgDgRgMgRQgYgggsABQgWAAgYALQgeAOgfADQgtADgigZIgCgBQgegMgeADQg4AFgKA8IgMBhQgBAFgFAAQgEAAgBgFQgKhJAEgyQAGhJAigDQAGgBgBgFQACgHAKgIQAWgQAqgCQAkgCAegLQAdgKATgBQA6AAAmAJQA5ANAYAiIADAEQAQAHALAVQARAjgEA/IgFBOQgBAFgEAAQgFAAgBgEg");
	this.shape_14.setTransform(115.6,42,0.582,0.582);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDAB86").s().p("ABFACQgigBgjAAIhEABIhEAEQAngGAdgCIAigCIAigBQAjAAAiADQAiACAiAGIhEgEg");
	this.shape_15.setTransform(116.1,43.6,0.582,0.582);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EDAB86").s().p("ABEACIhEgBQghAAgjABIhEAEQAlgGAfgCIAjgDIAhAAQAuABAWACQAmACAfAGIhFgEg");
	this.shape_16.setTransform(115.9,45.5,0.582,0.582);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9BD9C").s().p("AgmElQgbgKghgYQhCgugmhAQgCgDAAgEIgBgqIgCAAQgHAAgFgFQgEgDgBgCIAAAAQgDgFgHgjIgIgyQgEgTAAgOQAAgPAFgCQAFgCAJAIQAEADABAFIAEgBQgHgjAAgnQAAhaAugXIABAAQATgTAegSQA8glA6AAIAGAAIAAAAIACAAIACAAIABAAIABAAIAAAAQA7gCA/AlQAfATAUAUIABAAQAvAXAABaQAAAngIAjIgBAIIAFgGQAFgFAGgEQAIgGAEACIAAAAQAKAEgHAoIgJA2QgHAjgDAEIgBABQgGAJgLABIgBAAIgFAyIgDAHQgUAdgcAdQgxAxg2AcIgDABQgOAEgSACIgMAAQgVAAgRgGg");
	this.shape_17.setTransform(115.9,53.2,0.582,0.582);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EDAB86").s().p("AgTBwQiigGAogoQAkgjARhBIAKg7IBOgQQBNgLABAbQABAeAkBZQASAtARAnQg4ADg0AAIg9gBg");
	this.shape_18.setTransform(116.3,70.6,0.582,0.582);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D6D8D8").s().p("AlpCnIgCgvQgEhRAEglQAGg+AqgiQApghBFgRQAigJAbgCQBugKBzgBQB/gBAgAMQAxATAoBlQAlBdAABSIgBAbg");
	this.shape_19.setTransform(117.3,84.4,0.582,0.582);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7F795E").s().p("AhIARIB3hEIAZAzQgCAUgmASIgkAOg");
	this.shape_20.setTransform(63.3,75.6,0.582,0.582);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F795E").s().p("AgZAmQgugZgCgVIAag0IB5BVIg3AkQgVgKgXgNg");
	this.shape_21.setTransform(54.7,75.1,0.582,0.582);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DAA675").s().p("ADUCVQAHgkgGgqQgGgphKAAQheAIgsgCQg3gCgygnIgmgoQgWBVgNAJQgIAGgLA4IgJA2IgYgjQgYgkACgGQADgIAEgXQAEgggFgWQgFgXABgbQACgiANgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgEgIBIgeQBRgiBLgGQBQgHBiA5QBeA2ACAsQADAugIA3QgIA6gLACQgKACgLASIgHAPQADgJADgPg");
	this.shape_22.setTransform(58.5,42.1,0.582,0.582);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4B98C").s().p("AjoCoQBRkHAbgTQAjgXBMgNQAlgGAfgCQBCgXA9AlQAeASARAXIAEEPg");
	this.shape_23.setTransform(47.3,83.9,0.582,0.582);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4B98C").s().p("AjwCoIAHjBIADhOQARgXAfgSQA8glBCAXIBEAIQBMANAjAXQASAMAhBPQAiBOAhBxg");
	this.shape_24.setTransform(71.3,83.9,0.582,0.582);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9BD9C").s().p("AglEdQgagKgggXQhBgtgkg+IgDgHIgBgpIgCAAQgHAAgJgJIAAgBQgDgFgHghIgIgxQgEgYAAgIQAAgPAFgCQAEgCAKAIQADACACAGIAEgBQgIgiAAgnQAAhXAugWIAAAAQATgTAegSQA6gkA4AAIAGAAIAAABIACAAIACgBIABABIABAAIAAgBQA6gCA9AlQAfASATAUIABAAQAtAWAABXQAAAngHAiIgCAIIAFgGQAFgFAGgEQAIgGAEACIAAAAQAJAEgGAnIgJA0QgHAkgDADIAAAAQgGAKgLAAIgCAAIgFAxQAAADgCAEQgSAbgdAdQgwAxg0AbIgDABQgOAEgRABIgLABQgVAAgRgHg");
	this.shape_25.setTransform(58.5,53.2,0.582,0.582);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDAB86").s().p("AgTBtQiegGAognQAigiARg/IAKg5IBMgQQBLgLABAbQABAdAjBWQARAsARAmQg2ADgzAAIg8gBg");
	this.shape_26.setTransform(59,70.2,0.582,0.582);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3EFB9").s().p("AjkIXQhogshPhRQhQhQgshpQgthsAAh2QAAh3AuhsQAshoBRhQQBRhQBpgsQBtgsB3AAQB2AABrAuQBoAsBPBRQBQBRArBoQAtBtAAB1QAAB3guBrQgsBphQBQQhRBPhpAsQhsAth2AAQh3AAhsgug");
	this.shape_27.setTransform(87.6,67.6,1.197,1.197);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EFEFEF").s().p("Am5QYQjMhXieidQididhWjNQhajTAAjnQAAjnBajTQBWjMCdidQCeieDMhWQDShZDnAAQDoAADSBZQDMBWCeCeQCeCdBVDMQBaDTAADnQAADnhaDTQhVDNieCdQieCdjMBXQjSBZjoAAQjnAAjShZg");
	this.shape_28.setTransform(87.6,67.6,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-13.3,256.2,245.5);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(69.1,21.2,0.593,0.593);

	this.text_1 = new cjs.Text("2.2", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(67.9,51.7,1.094,1.094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.8,69.7,1.504,1.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.mc_seleccion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,51,0)").s().p("AhQBvQghAAAAgfIAAieQAAggAhAAIChAAQAhAAgBAgIAACeQABAfghAAg");
	this.shape.setTransform(8.4,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AgxBGQgUAAAAgUIAAhjQAAgVAUABIBjAAQAVgBgBAVIAABjQABAUgVAAg");
	this.shape_1.setTransform(7.1,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTBUIAAinICnAAIAACng");
	this.shape_2.setTransform(6.7,6.6,1.057,1.044);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhTBUIAAinICnAAIAACng");
	this.shape_3.setTransform(9.1,8.9,1.057,1.044);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-4.5,22.7,22.2);


(lib.mascaratapar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvWACqIAAlTMBetAAAIAAFTg");
	this.shape.setTransform(303.1,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,34);


(lib.m2t1mc1txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("En esta etapa del proceso se establecen:", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 370;
	this.text.parent = this;
	this.text.setTransform(-22,-18);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-20,374.1,42);


(lib.lapizmueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010101").s().p("Ah8CUIgEgCIgCgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAEgBID0AAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAh4B/IgBgCIAQgwIABgBIABAAIAcAXIABACIgBABIgsAZIAAAAIgBAAgAhiBEIAYgnIAggrIAsAkQgSAWgRASQgSATgPANgAAGAMIgmgfIgBgDIAAgDIBUhpIgGgEIhBBSIgHgGIBFhZIAOALIABgCIADgBIBDgCQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAIgBAEIh2CSIgDACIgDgBg");
	this.shape.setTransform(21.9,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,7.8,26.2,29.6);


(lib.info01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Esto se lleva a cabo por medio de entrevistas con los líderes de área utilizando el formato de estrategia de negocio.", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 531;
	this.text.parent = this;
	this.text.setTransform(-332.2,-42.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("EAqDAFII2gAAMhC9AAAQhkAAAAhkIAAnHQAAhkBkAAMBC9AAAIWgAAIFYAAQBkAAAABkIAAHHQAABkhkAAg");
	this.shape.setTransform(-76.7,-25.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info01, new cjs.Rectangle(-390.2,-58.6,627,68.1), null);


(lib.iconoactividadesyretos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyEUIAAhpIBoAAIAABpgAgyCHIAAgZQAAguAPgeQAPgeAtgkQAuglAJgMQAOgSAAgWQAAgegYgWQgZgWgpAAQgnAAgbAXQgbAWgKAvIhggMQAEhDA1guQA1gvBVAAQBZAAA1AwQA2AvAAA+QAAAjgUAeQgTAfhBA1QggAcgJAQQgIARABArg");
	this.shape.setTransform(57.5,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AC9AC").s().p("Al/OEQivhKiHiIQiGiHhKiwQhMi2ABjIQAAjIBNi1QBKiwCJiGQCHiGCxhJQC3hMDJABQDHAACzBNQCvBLCFCIQCGCHBJCwQBMC2AADHQAADHhNC1QhKCviICHQiHCGiwBJQi3BMjHAAQjHAAi1hNg");
	this.shape_1.setTransform(56,55.2,0.49,0.49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("Am5QYQjMhXieidQididhWjNQhajTAAjnQAAjnBajTQBWjMCdidQCeieDMhWQDShZDnAAQDoAADSBZQDMBWCeCeQCeCdBVDMQBaDTAADnQAADnhaDTQhVDNieCdQieCdjMBXQjSBZjoAAQjnAAjShZg");
	this.shape_2.setTransform(55.7,55.7,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.4,111.4);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgyIAFBl");
	this.shape.setTransform(0.6,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,2.7,12.1), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgwIAFBh");
	this.shape.setTransform(0.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-0.9,2.6,11.8), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgvQADAuACAs");
	this.shape.setTransform(0.6,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-1,2.6,11.2), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgxQADAwACAu");
	this.shape.setTransform(0.6,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-0.9,2.6,11.5), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCguIAFBd");
	this.shape.setTransform(0.5,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-1,2.6,11.3), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgCgsIAFBZ");
	this.shape.setTransform(0.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-1,2.6,11), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgvQgDAwgCA0");
	this.shape.setTransform(0.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,2.6,12.1), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgwQgDAwgCAx");
	this.shape.setTransform(0.5,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-0.9,2.6,11.8), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgvQgDAugCAs");
	this.shape.setTransform(0.5,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-1,2.6,11.2), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADguIgFBd");
	this.shape.setTransform(0.6,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-0.9,2.6,11.5), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgtQgDAtgCAv");
	this.shape.setTransform(0.5,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-1,2.6,11.3), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AADgqQgDAegCA7");
	this.shape.setTransform(0.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-1,2.6,11), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAMglIgXBL");
	this.shape.setTransform(1.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,4.4,9.6), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgIAcIARg3");
	this.shape.setTransform(1.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.8,-0.9,3.8,7.7), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgSglQAZARAKA+");
	this.shape.setTransform(2,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.8,-0.8,5.6,10), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AATglQgZARgKA+");
	this.shape.setTransform(1.9,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,5.6,10), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgGgUIANAp");
	this.shape.setTransform(0.9,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.8,-0.9,3.5,6.2), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AANAkIgZhH");
	this.shape.setTransform(1.5,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.8,-0.9,4.6,9.1), null);


(lib.estrategia1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6D9B2").s().p("AgCAWIgEgDIgFAAIgDADIgGgFIADgDIAAgFIgBgBIgDgDIgEAAIgBgHIAFAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBIAAAAIAAgFIgDgDIAFgGIADADIAFAAIABgBQAAAAABAAQABgBAAAAQABgBAAAAQAAAAAAgBIAAgEIAHgBIAAAFIADADIABAAIAAAAQABAAABABQABAAAAAAQABAAAAAAQABgBAAAAIADgDIAGAFIgDADIAAAFIABABQAAABABAAQAAABAAAAQABABAAAAQAAAAABAAIAEAAIABAHIgFAAIgDADIAAACQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIADADIgFAGIgEgDIgEAAIgEAEIAAAEIgHABgAgIgHQgDAEAAADQAAAFAEAEQAEADADAAQAFAAAEgEQADgEAAgEQAAgEgEgEQgEgDgEAAQgEAAgEAEg");
	this.shape.setTransform(128.3,55,0.911,0.911);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6D9B2").s().p("AAIAqQgCgCgGAAQgEgBgDACIgDABIgDAIIgOgHIAEgHQAAgDgDgFIgCgCQgDgDgDAAIgCgBIgJADIgFgOIAIgEQADgBAAgGIAAAAIABgBQAAgEgCgDIgBgCIgIgEIAGgOIAIAEIADgBQADAAADgDIABgBQAEgFAAgDIgDgIIAOgFIADAIIACACIAFABIACAAQAGAAADgCIAEgIIANAGIgDAIIAAADQABADADACIABABQAEAFADAAIAJgEIAFAOIgIADIgCADIgBAFIgBADQABAGACACIAIAEIgGANIgIgEQgEABgEADQgEADgBADIgBADIAEAIIgPAGgAgHgVQgJADgEAJQgEAJADAIQAEAJAIAEQAJAEAIgDQAJgEAEgJQAEgIgDgJQgDgJgJgDQgFgDgFAAIgHACg");
	this.shape_1.setTransform(123,59.7,0.911,0.911);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D4369").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_2.setTransform(90.4,135.9,0.911,0.911);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D4369").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_3.setTransform(90.4,133.6,0.911,0.911);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D4369").s().p("AgCAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_4.setTransform(90.4,131.4,0.911,0.911);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#156E92").s().p("AgYAkIAgheIARAIIgIAbIgQAFIAKAOIgjA/g");
	this.shape_5.setTransform(91.9,124.8,0.911,0.911);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#126484").s().p("AgzBvIAAiBIAnhcQAeAOALALQARAQADAeQAFA3gEBQIgfgBIgBhZIgGBpg");
	this.shape_6.setTransform(94.4,129.8,0.911,0.911);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0FAFC").s().p("AgQAAQARgEAJgKIAGAEIgQAZg");
	this.shape_7.setTransform(91.2,120.5,0.911,0.911);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1175A1").s().p("AgLgEIALgOIgQgFIgHgbIASgIIAdBeIAAAXg");
	this.shape_8.setTransform(87.5,124.8,0.911,0.911);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#126484").s().p("AgMBvIgGhpIgBBZIgfABQgEhRAGg2QACgeARgQQALgLAegOIAnBcIABCBg");
	this.shape_9.setTransform(85.1,129.8,0.911,0.911);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0FAFC").s().p("AgPgKIAGgEQAJAKAQAEIgPAPg");
	this.shape_10.setTransform(88.2,120.5,0.911,0.911);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC5633").s().p("AgIATIAEg2IAJAAIAEA2IgJARg");
	this.shape_11.setTransform(89.7,125,0.911,0.911);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FC391F").s().p("AgEAHIgEgNIARAAIgEANg");
	this.shape_12.setTransform(89.7,121.1,0.911,0.911);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1C199").s().p("AgXguQAMAAAKgCQAFgBAFAFQAFAEABAGIACAVIABAAQAGAAAAAIQAAAFgDAFQgEAHgDgBQgNAhgYAFg");
	this.shape_13.setTransform(91.9,115,0.911,0.911);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1C199").s().p("AAXAxQgYgGgMggQgEABgDgHQgDgFAAgFQAAgIAGAAIABAAIACgVQABgGAFgEQAFgFAEABQALACAMAAIAABfg");
	this.shape_14.setTransform(87.6,115,0.911,0.911);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DFAC81").s().p("AgZALIAAgfIA0AAIAAAfQgOAKgNAAQgMAAgNgKg");
	this.shape_15.setTransform(89.7,118.5,0.911,0.911);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3D8DD").s().p("AgSA9IAAhvIAFgCQATgJANgBIAAB9QgUAAgRgCg");
	this.shape_16.setTransform(88,124.3,0.911,0.911);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3D8DD").s().p("AgSg+QANABATAJIAFACIAABvQgRACgUAAg");
	this.shape_17.setTransform(91.4,124.3,0.911,0.911);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8A480F").s().p("AgWAnIAAhPQAjAJAIAUQADAKgCAOIgEAbg");
	this.shape_18.setTransform(91.9,111.2,0.911,0.911);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8A480F").s().p("AgpAoIgEgpQAAgXAJgQQATgDAZAIQAdAJAHARQADAJgCAPIgEAbg");
	this.shape_19.setTransform(89.9,111.1,0.911,0.911);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB3637").s().p("AgaABIAEgIQAWAFAZgFIACAHQgNAIgOAAQgMAAgOgHg");
	this.shape_20.setTransform(89.7,119.5,0.911,0.911);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0D4369").s().p("AggB8QgBhCgGhJQgFhAABgoIBXgEQABAJgGAUQgGASgGANQgBAEgEgCQgFAAAAADIgCBaQgBA8ABAgg");
	this.shape_21.setTransform(88.1,148.8,0.911,0.911);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D4826").s().p("AgYACIAAgDIAxAAIAAADg");
	this.shape_22.setTransform(87.2,162,0.911,0.911);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#49250D").s().p("AgWATQgCgEAAgGQAAgLAIgIQAHgIAJgBQAKABAIAIQAGAIABALQAAAGgCAEg");
	this.shape_23.setTransform(87.2,160.5,0.911,0.911);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DFAC81").s().p("AgHAjQgBAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBQAGgIABgIQABgJgGgHQgBAJgCAEQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAgLQAAgOAFgIQABgEgCgFIAWgEQgBAIABADQADAEACAKQABAJgCAIQgHASgJAHQgDACgCAAIgBAAg");
	this.shape_24.setTransform(97.6,140.6,0.911,0.911);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F1C199").s().p("AACAhQgJgHgHgTQgCgHACgJQABgKADgEQABgEgBgHIAWADQgCAGABAEQAFAIAAANIAAALQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgCgEgBgJQgGAGABAJQABAIAGAJQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABIgBAAQgCAAgDgCg");
	this.shape_25.setTransform(81.8,140.6,0.911,0.911);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0D4369").s().p("AgOB8QABghgBg7IgChaQAAgDgFAAQgEACgBgEQgGgNgGgSQgGgUABgJIBXAEQABApgFA/QgGBKgBBBg");
	this.shape_26.setTransform(91.4,148.8,0.911,0.911);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D4826").s().p("AgYACIAAgDIAxAAIAAADg");
	this.shape_27.setTransform(92.3,162,0.911,0.911);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#49250D").s().p("AgWATQgCgEAAgGQAAgLAHgIQAIgIAJgBQAKABAIAIQAGAIABALQAAAGgCAEg");
	this.shape_28.setTransform(92.3,160.5,0.911,0.911);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0D4369").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_29.setTransform(78.6,132.1,0.911,0.911);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0D4369").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_30.setTransform(78.6,130.4,0.911,0.911);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0D4369").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_31.setTransform(78.6,128.8,0.911,0.911);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#156E92").s().p("AgRAaIAXhFIAMAGIgFAUIgNAEIAIAKIgZAvg");
	this.shape_32.setTransform(79.7,123.9,0.911,0.911);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#125974").s().p("AglBSIAAhfIAchEQAWAKAJAIQAMAMACAWQAEAogDA8IgXAAIgBhDIgEBOg");
	this.shape_33.setTransform(81.6,127.5,0.911,0.911);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F0FAFC").s().p("AgLAAQALgDAHgHIAFADIgMASg");
	this.shape_34.setTransform(79.2,120.7,0.911,0.911);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1175A1").s().p("AgIgDIAIgKIgMgEIgFgUIANgGIAWBFIAAASg");
	this.shape_35.setTransform(76.4,123.9,0.911,0.911);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#125974").s().p("AgJBSIgEhOIgBBDIgXAAQgDg2AEguQACgWANgMQAIgIAWgKIAdBEIABBfg");
	this.shape_36.setTransform(74.6,127.5,0.911,0.911);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F0FAFC").s().p("AgLgHIAEgDQAHAHAMADIgLALg");
	this.shape_37.setTransform(77,120.7,0.911,0.911);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FC5633").s().p("AgGAOIADgnIAHAAIADAnIgHAMg");
	this.shape_38.setTransform(78.1,124,0.911,0.911);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FC391F").s().p("AgDAGIgDgKIANAAIgDAKg");
	this.shape_39.setTransform(78.1,121.1,0.911,0.911);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F1C199").s().p("AgRgiIARgBQADgBADADQAEADABAFIACAQIAAAAQAFAAAAAFQAAAEgCAEQgDAFgDgBQgIAYgTAFg");
	this.shape_40.setTransform(79.7,116.6,0.911,0.911);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F1C199").s().p("AgJAIQgDABgDgFIgCgIQAAgFAFAAIAAAAIACgQQABgFAEgDQADgDADABIARABIAABGIAAABQgSgFgJgYg");
	this.shape_41.setTransform(76.5,116.6,0.911,0.911);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DFAC81").s().p("AgTAIIAAgXIAnAAIAAAXQgKAIgKAAQgJAAgKgIg");
	this.shape_42.setTransform(78.1,119.2,0.911,0.911);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3D8DD").s().p("AgNAtIAAhSIADgBQANgHALgBIAABdIgbgCg");
	this.shape_43.setTransform(76.8,123.5,0.911,0.911);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3D8DD").s().p("AgNguQAKABAOAHIADABIAABSQgOACgNAAg");
	this.shape_44.setTransform(79.3,123.5,0.911,0.911);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8A480F").s().p("AgQAdIAAg6QAaAGAGAPQACAHgCALIgCAUg");
	this.shape_45.setTransform(79.7,113.8,0.911,0.911);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8A480F").s().p("AgfAeIgCgeQAAgSAHgLQAOgDASAGQAVAHAFAMQACAHgBALIgDAUg");
	this.shape_46.setTransform(78.2,113.7,0.911,0.911);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EB3637").s().p("AgTABIADgGQARAEARgEIACAFQgKAGgKAAQgJAAgKgFg");
	this.shape_47.setTransform(78,119.9,0.911,0.911);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0D4369").s().p("AgYBcQAAgwgFg3QgDguABgfIBAgDQAAAHgEAPQgEANgFAJQgBABAAABQAAAAgBAAQAAABgBAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIgCBCIAABFg");
	this.shape_48.setTransform(76.9,141.7,0.911,0.911);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6D4826").s().p("AgRACIAAgDIAjAAIAAADg");
	this.shape_49.setTransform(76.2,151.4,0.911,0.911);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#49250D").s().p("AgQAPQgBgEAAgFQAAgHAFgHQAGgGAGAAQAIAAAFAGQAFAHAAAHQAAAFgBAEg");
	this.shape_50.setTransform(76.2,150.3,0.911,0.911);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DFAC81").s().p("AgFAaQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAEgGABgGQABgGgEgFQgBAGgCADQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgIQAAgKAEgGQABgEgCgDIAQgDQgBAFACAEQACACABAIQAAAGgBAGQgFANgGAGIgEABIgBAAg");
	this.shape_51.setTransform(83.9,135.5,0.911,0.911);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F1C199").s().p("AABAYQgGgFgFgNQgBgGABgGQAAgIACgDQACgDgBgFIAQADQgCADABAEQAEAFAAAKIgBAIQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQgCgDgBgHQgDAHAAAFQABAGAEAGQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAIgEgCg");
	this.shape_52.setTransform(72.2,135.6,0.911,0.911);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0D4369").s().p("AgKBcIAAhFIgChCQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBABQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQgFgJgEgNQgEgPAAgHIBAADQACAfgEAuQgFA3AAAwg");
	this.shape_53.setTransform(79.3,141.7,0.911,0.911);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6D4826").s().p("AgRACIAAgDIAjAAIAAADg");
	this.shape_54.setTransform(80,151.4,0.911,0.911);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#49250D").s().p("AgQAPIgBgJQAAgHAFgHQAFgGAHAAQAHAAAGAGQAFAHAAAHQAAAFgBAEg");
	this.shape_55.setTransform(80,150.3,0.911,0.911);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D4369").s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_56.setTransform(101.8,132,0.911,0.911);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0D4369").s().p("AgCAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_57.setTransform(101.8,130.3,0.911,0.911);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0D4369").s().p("AgCAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_58.setTransform(101.8,128.7,0.911,0.911);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#156E92").s().p("AgRAbIAWhGIANAGIgFAUIgNAEIAIAJIgZAwg");
	this.shape_59.setTransform(103,123.8,0.911,0.911);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#125974").s().p("AglBSIAAhfIAchEQAWAKAJAIQAMAMACAWQAEAogDA8IgXAAIAAhDIgFBOg");
	this.shape_60.setTransform(104.8,127.5,0.911,0.911);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F0FAFC").s().p("AgLAAQAMgDAGgHIAFADIgMASg");
	this.shape_61.setTransform(102.4,120.6,0.911,0.911);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1175A1").s().p("AgIgDIAIgKIgMgEIgFgUIANgGIAWBGIAAARg");
	this.shape_62.setTransform(99.7,123.8,0.911,0.911);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#125974").s().p("AgJBSIgEhOIgBBDIgXAAQgCg2ADguQACgWANgMQAIgIAWgKIAdBEIABBfg");
	this.shape_63.setTransform(97.9,127.5,0.911,0.911);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F0FAFC").s().p("AgLgHIAEgDQAHAIAMACIgLALg");
	this.shape_64.setTransform(100.2,120.6,0.911,0.911);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FC5633").s().p("AgFAOIACgnIAHAAIACAnIgGAMg");
	this.shape_65.setTransform(101.3,123.9,0.911,0.911);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FC391F").s().p("AgDAFIgDgJIANAAIgDAJg");
	this.shape_66.setTransform(101.3,121,0.911,0.911);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F1C199").s().p("AgRgiIARgBQADgBAEADQADADABAFIACAPIAAAAQAFAAAAAGQAAAEgCADQgDAGgDgBQgJAYgSAEg");
	this.shape_67.setTransform(102.9,116.5,0.911,0.911);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F1C199").s().p("AARAkQgRgEgJgYQgDABgDgGQgCgDAAgEQAAgGAFAAIAAAAIACgPQABgFADgDQAEgDADABIARABIAABGg");
	this.shape_68.setTransform(99.7,116.5,0.911,0.911);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DFAC81").s().p("AgTAIIAAgXIAnAAIAAAXQgKAIgKAAQgJAAgKgIg");
	this.shape_69.setTransform(101.3,119.1,0.911,0.911);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B3D8DD").s().p("AgNAuIAAhTIADgBQANgHALgBIAABdQgOAAgNgBg");
	this.shape_70.setTransform(100.1,123.4,0.911,0.911);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B3D8DD").s().p("AgNguQAKABAOAHIADABIAABTQgOABgNAAg");
	this.shape_71.setTransform(102.6,123.4,0.911,0.911);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8A480F").s().p("AgQAdIAAg6QAaAHAGAOQACAHgCALIgCAUg");
	this.shape_72.setTransform(102.9,113.7,0.911,0.911);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8A480F").s().p("AgeAeIgDgeQAAgSAHgLQAOgDASAGQAVAHAFAMQACAHgBALIgDAUg");
	this.shape_73.setTransform(101.4,113.6,0.911,0.911);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EB3637").s().p("AgTAAIADgFQAQAEASgEIACAFQgKAGgKAAQgIAAgLgGg");
	this.shape_74.setTransform(101.3,119.8,0.911,0.911);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0D4369").s().p("AgYBcQAAgxgEg2QgEgvABgeIBAgDQAAAHgEAPQgEANgFAKQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBgBQgBAAAAAAQgBAAgBAAQAAABAAAAQAAABAAAAIgCBDIAABEg");
	this.shape_75.setTransform(100.1,141.6,0.911,0.911);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6D4826").s().p("AgRACIAAgDIAjAAIAAADg");
	this.shape_76.setTransform(99.5,151.4,0.911,0.911);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#49250D").s().p("AgQAPQgBgEAAgEQAAgIAFgHQAGgFAGAAQAIAAAFAFQAFAHAAAIIgBAIg");
	this.shape_77.setTransform(99.5,150.2,0.911,0.911);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DFAC81").s().p("AgFAaQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAEgGAAgGQABgFgEgHIgCAKQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAgIQAAgKADgGQACgDgCgEIAQgDQgBAFABAEQAFAHgCAPQgEANgIAGIgDABIgBAAg");
	this.shape_78.setTransform(107.2,135.5,0.911,0.911);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F1C199").s().p("AABAYQgGgFgFgOQgBgFABgHQAAgHACgDQACgEgBgEIAQACQgCAEABAEQAEAFAAAKIAAAIQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQgCgDgBgHQgEAGABAGQABAGAEAGQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgBAAIgEgCg");
	this.shape_79.setTransform(95.5,135.5,0.911,0.911);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0D4369").s().p("AgKBcIAAhEIgChDQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgFgKgEgNQgEgPAAgHIBBADQABAegEAvQgFA2AAAxg");
	this.shape_80.setTransform(102.6,141.6,0.911,0.911);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6D4826").s().p("AgRACIAAgDIAjAAIAAADg");
	this.shape_81.setTransform(103.2,151.4,0.911,0.911);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#49250D").s().p("AgQAPQgBgEAAgEQAAgIAFgHQAFgFAHAAQAHAAAGAFQAFAHAAAIQAAAEgBAEg");
	this.shape_82.setTransform(103.2,150.2,0.911,0.911);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6DB5C5").s().p("AgoAHIAehOIAkAuQAGAvAJAnIhGALQgHgjgEgeg");
	this.shape_83.setTransform(30.8,97.4,0.911,0.911);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#6DB5C5").s().p("AAIgiQAEAeAHAhIglAGg");
	this.shape_84.setTransform(26.3,101.2,0.911,0.911);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6DB5C5").s().p("AgfgqIA/BOIgwAHQgKgmgFgvg");
	this.shape_85.setTransform(36.1,98.9,0.911,0.911);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6DB5C5").s().p("AgtADQAjgaAfggIAtA3QgXAWgZAUIhTAOg");
	this.shape_86.setTransform(127.1,133.9,0.911,0.911);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6DB5C5").s().p("AALgVIAaAfIhJAMQAZgUAWgXg");
	this.shape_87.setTransform(132.1,135.8,0.911,0.911);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6DB5C5").s().p("AADgvIAfAlQggAggjAbg");
	this.shape_88.setTransform(126,129.8,0.911,0.911);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6DB5C5").s().p("AAUAzQgngfgsgYIAvg2QAbAQAXAQIAeBVg");
	this.shape_89.setTransform(121.4,41,0.911,0.911);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6DB5C5").s().p("AgZAAIAcgfIAXA/QgXgPgcgRg");
	this.shape_90.setTransform(122.2,35.6,0.911,0.911);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6DB5C5").s().p("Ag4AGIAdghQArAZApAeg");
	this.shape_91.setTransform(118.1,43.1,0.911,0.911);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6DB5C5").s().p("AgzAhQhKhqgeh+IBHgLQAaBsA+BdQA+BaBaBAIgfBCQhphJhHhpg");
	this.shape_92.setTransform(42.3,122.1,0.911,0.911);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6DB5C5").s().p("AlkAeQBbg8BpgcQBtgeBwAIQCeAJCKBPIguA2Qh2g/iIgJQhjgGhfAYQhcAYhQAzg");
	this.shape_93.setTransform(87.3,35,0.911,0.911);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6DB5C5").s().p("Ah7C4QBFhVAvhsQAuhxAOh4IBIgDQgOCLg3CBQg2B9hSBig");
	this.shape_94.setTransform(140,112,0.911,0.911);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D25558").s().p("AhhBhQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBIAAipQAAgKAIgHQAHgFANAAIBaAAQAZAAAfA8QAbA2AAAbIAAAyQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgAA6AmQgBgdgQgfQgRgigPAAIhEAAIAABeIB1AAIAAAAg");
	this.shape_95.setTransform(150.8,63.9,0.911,0.911);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D25558").s().p("AhqAnQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgIQAAgRgIgOQgIgPgOgJQgDgCABgEQABgDAEAAIEVAAQAFAAAAAEQAAADgDACQgOAJgHAPQgIAOAAARIAAAIQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_96.setTransform(134.8,77.5,0.911,0.911);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D25558").s().p("AAAAlIgBgBIgBgCIABgIQAAgSgIgPQgJgOgOgKQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIBAAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIAABFQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_97.setTransform(156.8,77.5,0.911,0.911);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D25558").s().p("AgnAUQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAghQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIBPAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgTAMgIAUQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_98.setTransform(112.2,75.9,0.911,0.911);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A5A4A4").s().p("AglAnQgPgQAAgXQAAgWAPgQQAQgRAVAAQAWAAAPARQAQAQAAAWQAAAXgQAQQgPARgWAAQgVAAgQgRgAgRgSQgIAIAAAKQAAALAIAIQAHAIAKAAQALAAAHgIQAHgIAAgLQAAgKgHgIQgHgIgLAAQgKAAgHAIg");
	this.shape_99.setTransform(118.8,80.1,0.911,0.911);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A5A4A4").s().p("AgkAnQgQgQAAgXQAAgWAQgQQAPgRAVAAQAWAAAPARQAQAQAAAWQAAAXgQAQQgPARgWAAQgVAAgPgRgAgRgSQgHAIgBAKQABALAHAIQAIAIAJAAQALAAAHgIQAHgIAAgLQAAgKgHgIQgHgIgLAAQgJAAgIAIg");
	this.shape_100.setTransform(150.8,80,0.911,0.911);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F5AB9C").s().p("AiqB2QAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAjnQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIFVAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIAADnQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_101.setTransform(124.5,62,0.911,0.911);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#E9F4E9").p("AAcBJQgYACg2gQQgqgMgyATIg6hdQA2gfAegKIALgCQAJgCARAAIAqADQAQACAJACIAPADQAQAFAIAEQALAEAFAEIAAAAQAPAKACAMQABAHgCAFIALgHQAGgFAKgEQAKgGAPgHQAigNATgDIABAAQAOgCAKAEQANAEABANQACAWhJArQhHArghACg");
	this.shape_102.setTransform(44.7,73.9,0.911,0.911);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D25558").s().p("AArgmIgZAAIAACDIgQgJIAAhkIgYAAIAABfIgRgFIAAg9IgZAAIAAA6IgQgDIAAgWIgZAAIAAAWIgkAFIgBAAQgGgVAAgXQgBg+AtgsQArgrA9AAQA+AAArArQAsAsAAA+QABAcgLAbQgQACgVAHIgRAHIAAigIgaAAIAACsIgQAJg");
	this.shape_103.setTransform(47.1,60.1,0.911,0.911);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B6E9B7").s().p("AgGAJQgEgDAAgFQgBgDADgEQADgEAFAAQADgBAEADQAEADAAAFQABADgDAEQgDAEgFAAIgBAAQgDAAgDgCg");
	this.shape_104.setTransform(27.1,80.3,0.911,0.911);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D25558").s().p("Ag+g/IBAgUIA6BdIADAYIhvAyg");
	this.shape_105.setTransform(25.3,79.5,0.911,0.911);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F5AB9C").s().p("AgzA7QgqgMgyATIg6hdQA7ghAZgIIALgCQAJgCARAAIBDAHIAPAEIAYAIQAJADAHAFQAPAKACAMQABAHgCAGIhpgBQBeAaALgZIALgIIAQgJIAZgNQAggMAVgEIABAAQAOgCAKAEQANAEABANQACAWhJArQhHArghACIgGAAQgXAAgxgOg");
	this.shape_106.setTransform(44.8,74,0.911,0.911);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DFE5DF").s().p("AlaM0QifhEh7h7Qh7h7hEifQhGimAAi1QAAi0BGilQBEigB7h8QB7h6CfhEQCmhGC0AAQC1AAClBGQCgBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7igBEQilBGi1AAQi0AAimhGg");
	this.shape_107.setTransform(91.5,91.3,0.911,0.911);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EFEFEF").s().p("AmGOcQi0hMiKiLQiLiLhMizQhPi7AAjMQAAjLBPi7QBMizCLiLQCKiLC0hMQC7hPDLAAQDMAAC7BPQCzBMCLCLQCLCLBMCzQBPC7AADLQAADMhPC7QhMCziLCLQiLCLizBMQi7BPjMAAQjLAAi7hPg");
	this.shape_108.setTransform(91.4,91.4,0.911,0.911);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,182.8);


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,152,152);


(lib.circulo_blanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmrGsQixixAAj7QAAj6CxixQCxixD6AAQD7AACxCxQCxCxAAD6QAAD7ixCxQixCxj7AAQj6AAixixg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121,121);


(lib.cajagrismc1t2m2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Vincular los pasos del proceso Talent Management Review (TMR) con la estrategia de la organización, es clave para garantizar que las posiciones con mayor impacto en el negocio y las personas seleccionadas para dichos puestos, estén alineados y favorezcan el logro de las metas corporativas.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 335;
	this.text.parent = this;
	this.text.setTransform(56.5,110.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("A+lXhQhoAAhKhJQhIhJgBhoMAAAgnNQABhoBIhJQBKhJBoAAMA9LAAAQBoAABJBJQBKBJAABoMAAAAnNQAABohKBJQhJBJhoAAg");
	this.shape.setTransform(220.9,150.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,441.7,301.1);


(lib.cajagdemc1t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Estrategia del Negocio", "bold 18px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 213;
	this.text.parent = this;
	this.text.setTransform(50.1,36.2);

	this.text_1 = new cjs.Text("Para la implementación robusta y eficiente de un proceso de gestión de talento es importante entender la estrategia de negocio.\n", "16px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 401;
	this.text_1.parent = this;
	this.text_1.setTransform(50.1,69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("Aq7MkIAA5HMA/zAAAQBnAABJBJQBJBKAABnIAARTQAABnhJBJQhJBKhnAAgEg02AMkQhoAAhKhKQhIhJgBhnIAAxTQABhnBIhKQBKhJBoAAMAp7AAAIAAZHg");
	this.shape.setTransform(363.4,80.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AlPjNIKfAAIlQGbg");
	this.shape_1.setTransform(244.4,165.5,1,1,0,0,0,5.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,726.7,186.1);


(lib.barrabcdespliega = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg9tAGuIAAtbMB7bAAAIAANbg");
	this.shape.setTransform(395,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790,86);


(lib.AS_LG_153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape.setTransform(16.3,37.3,1.111,1.111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_1.setTransform(15.8,59.2,0.277,0.356);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_2.setTransform(15.8,55.7,0.277,0.356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_3.setTransform(29.3,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,21.9,46.8,54.3);


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
	this.instance.setTransform(-0.6,-226.5,1,1,0,0,0,303.1,17);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87).to({_off:false},0).to({alpha:0},12,cjs.Ease.get(1)).wait(1));

	// TITULO
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgLgKAAgQQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAQgLAKQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(-293.7,-230);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-293.8,-230.1);

	this.text = new cjs.Text("Entendimiento de la estrategia de negocio", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulot2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.2,32.8,1,1,0,0,0,94.9,73.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(51).to({startPosition:0},0).to({regX:95,regY:73.6,scaleX:0.04,scaleY:0.04},15,cjs.Ease.get(1)).to({_off:true},1).wait(18));

	// circulo bco
	this.instance_2 = new lib.circulo_blanco("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.7,20.1,0.24,0.24,0,0,0,1.3,0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:0,regY:0,scaleX:2,scaleY:2,x:149.3,alpha:1},10,cjs.Ease.get(1)).wait(62).to({startPosition:0},0).to({scaleX:11.1,scaleY:11.1,x:180.3,y:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// circulo rojo
	this.instance_3 = new lib.CirculoRojo("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.4,0,0.033,0.033);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:2,scaleY:2,y:20},9,cjs.Ease.get(1)).wait(63).to({startPosition:0},0).to({regX:0.1,regY:-0.2,scaleX:9.88,scaleY:9.88,x:201,y:-22.2},11,cjs.Ease.get(1)).to({_off:true},5).wait(12));

	// Layer 6
	this.instance_4 = new lib.numerodetema("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(98.1,-13.6,1,1,0,0,0,69.8,69.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({x:-40.1,y:-113.6},9,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({x:98.1,y:-13.6},12,cjs.Ease.get(1)).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(147.9,-2.5,5,5);


(lib.retosactualesfuturos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Los retos actuales y futuros de talento.", "18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 147;
	this.text.parent = this;
	this.text.setTransform(86.5,161.8);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(127.1,112.3,1.091,1.091,0,0,0,9,11);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.3,114.1,1.091,1.091,0,0,0,7.7,9.5);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(124.8,111.8,1.091,1.091,0,0,0,9.7,11.4);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.1,111.5,1.091,1.091,0,0,0,8.7,11.1);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(87.4,113.5,1.091,1.091,0,0,0,8,10.2);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(85.5,112.3,1.091,1.091,0,0,0,8,11.5);
	this.instance_5.alpha = 0.391;

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(107.9,110.7,1.091,1.091,0,0,0,7.4,11);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(110.7,111.5,1.091,1.091,0,0,0,7.3,11.9);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(113.8,110.6,1.091,1.091,0,0,0,7,11.6);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(122.1,110.6,1.091,1.091,0,0,0,7.9,10.9);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120.3,110.7,1.091,1.091,0,0,0,8.3,12);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(116.8,110.1,1.091,1.091,0,0,0,7.4,11.5);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(104.1,111.6,1.091,1.091,0,0,0,6.6,11.8);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(100.8,111.5,1.091,1.091,0,0,0,6.9,11.9);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(99.2,110.7,1.091,1.091,0,0,0,7.5,11.7);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(91.8,110.7,1.091,1.091,0,0,0,8.3,11);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(93.3,110.7,1.091,1.091,0,0,0,7.2,12);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(95.9,110.7,1.091,1.091,0,0,0,7.4,12);
	this.instance_17.alpha = 0.391;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3231").s().p("Ah9BcIgJgCQgBAAgDgHQgFgQgHgrQgFgiAdgXQgDguAogTIgGAKQgHAMgCAJQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIACAAQAPgRAagMQApgUA7gBQgWADgPAJQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAQAZgDAZADQAmADAYAQQgHgCgKABIgBABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQASAHAOAOQAVAUAAAdIgNgPIgBAAIAAABQAHAWgFAWQgBgGgIgHQgBAjgKAuQgKgBgGALIgFAMQABgQgBgUQgCgmgKgPQgagohIACIhDAJQgNAfgRASQgBAGgCAkIgCAiQgBgTgKgGg");
	this.shape.setTransform(106,71.8,1.091,1.091);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F3231").s().p("AAgAVQgGgBgEgEQgHgFAAgHIAAgCQgHgFgFABIgBAAQgEgBgIAFIAAACQAAAHgGAFQgFAEgGABIg1AAIgBAAQgJgEgEgFQgDgFABgEIAAgDIgQABIgCgJIATgDQAEgIAMgBIAAAAIAxAAQAOAAAFAKQAHgDAGAAQAIAAAGADQAHgKANAAIAwAAIABAAQALABAFAIIAOACIgBAGIgMADIAAADQAAAMgPAGIgBAAgAAXgKIAAAQIABAEQACADAFADIA5AAQAGgBAAgJIAAgPQgDgFgEAAIg5AAQgHABAAADgAhYgKIAAAQIABAEQACADAEADIA5AAQAGgBAAgJIAAgPQgBgFgGAAIg5AAQgGABAAADg");
	this.shape_1.setTransform(104.8,81.6,1.091,1.091);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9B3BC").s().p("AgnAJIBAglIAOAcQgBALgUAKIgUAIg");
	this.shape_2.setTransform(109.9,104.2,1.091,1.091);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9B3BC").s().p("AgNAVQgZgOgBgKIAOgdIBBAuIgeATQgLgFgMgHg");
	this.shape_3.setTransform(101.2,103.7,1.091,1.091);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBCACB").s().p("Ah0A+QAdhXAMgHQATgNApgHQATgEARgBQAkgMAhAUQAQAKAJAMIACBZg");
	this.shape_4.setTransform(94.6,109.5,1.091,1.091);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCD0D0").s().p("Ah4A+IAEhZIAZgWQAhgUAkAMIAlAFQApAHATANQAQAJAeBVg");
	this.shape_5.setTransform(117.2,109.5,1.091,1.091);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8AF93").s().p("AAQAAIgLgCIgDAAIgHABIgWAEQAEgDAJgDIAPgCIAFAAIAMACQAIAEACAFQgEgFgIgBg");
	this.shape_6.setTransform(98.9,80.3,1.091,1.091);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1BB93").s().p("AgUCbQgOgFgRgNQgjgYgUgiIgBgEIgBgWIgBAAQgDAAgDgCIgDgDIAAAAQgCgFgDgQIgEgbQgCgJAAgIQAAgHACgCQADgBAEAEQADACAAADIACgBQgEgSAAgVQAAgvAZgNIAbgUQAfgTAfAAIADAAIAAAAIABAAIABAAIAAAAIABAAIAAAAQAfgBAhAUQARAKAKAKIABAAQAYANAAAvQAAAVgEASIgBAEIADgDIAGgFQAEgDADABQAFADgEAUIgFAcQgDATgCACIAAABQgDAFgGAAIgBAAIgDAaQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgKAPgQAQQgaAagcAPIgCAAQgGACgKABIgHAAQgKAAgKgDg");
	this.shape_7.setTransform(105.1,81.4,1.091,1.091);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6AE89").s().p("AgKA7QhVgDAVgVQATgTAJghIAFgfIApgJQAogGABAPQABAZAlBRQgdACgcAAIgggBg");
	this.shape_8.setTransform(105.5,98.6,1.091,1.091);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#443123").s().p("AgyANIAAgQIAiABQAhgOAOAFQAOAFAEAJQADAJgBABg");
	this.shape_9.setTransform(78.8,71.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F2616B").s().p("AAgBwIg/gBQgQgCgDgGQgEgIACgJQAKgigFgZQgEgagRgnQgNgpALgcQALgcACgBQAIAOgDAPQgDAPABAMQACALATACQAnABAgABQAhACgBApQgCARAIAJIgGCFQgJgYgdgBg");
	this.shape_10.setTransform(98.5,21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DD5260").s().p("AA9BdQgBgQgXgMQgngQgcAHQgcAGgEAFIgDiyQAGgEAcgHQAcgHAmAQQAPAHAEAJQgCAAgMAdQgLAcAOAoQAQAoAFAZQAFAbgKAhQACgQAAgQg");
	this.shape_11.setTransform(87.3,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#56442B").s().p("AADFQQgFgBgBgHIgGqPQABgHAFgBQAGABAAAGIAHKQQgBAHgGABg");
	this.shape_12.setTransform(80.3,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2F2F2").s().p("AiIA2IAAhrIERAAIAABrg");
	this.shape_13.setTransform(57.4,110.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiIA2IAAhrIERAAIAABrg");
	this.shape_14.setTransform(62.7,100.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiIA2IAFhrIEMAAIAABrg");
	this.shape_15.setTransform(71.7,78.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2F2F2").s().p("AiIA3IAAhtIERAAIAABtg");
	this.shape_16.setTransform(66.5,89.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5E5E5").s().p("AiaDZIAAhsIA0AAIAAhsIAmAAIAAhtIA0AAIAAhsICnAAIAAGxg");
	this.shape_17.setTransform(86.6,94.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3EFB9").s().p("AmDGEQihigAAjkQAAjjChihQCgigDjAAQDjAAChCgQChChAADjQAADkihCgQihChjjAAQjjAAigihg");
	this.shape_18.setTransform(87.1,66.1,1.257,1.257);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AqKKKQkOkNAAl9QAAl9EOkNQEOkNF8AAQF9AAEOENQEOENAAF9QAAF9kOENQkNEOl+AAQl8AAkOkOg");
	this.shape_19.setTransform(87.1,66.1,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.9,-12.1,156.6,236.2);


(lib.pregunta1tema2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¿Consideras importante tomar en cuenta la estrategia de negocio para procesos de gestión de talento? ¿Por qué?", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 658;
	this.text.parent = this;
	this.text.setTransform(124.8,22.1);

	this.instance = new lib.iconoactividadesyretos("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(44.7,44.7,0.803,0.803,0,0,0,55.7,55.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(154,201,172,0.498)").s().p("EA2hAF2InUAAIhrAAMghFAAAMg5TAAAIi9AAIpYAAIgoAAIg8AAIgBAAIhaAAQgggBgagGQhGgUgQhIQgGgYAAgcIAAj4IAAjGQAAh0BcgaQAZgIAhABIBaAAIABAAIA8AAIAoAAIJYAAIC9AAMA5TAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAcAGBcIABASIAABSIAADOIAABVIAAA3IAAADIAAAPQAACXiWAAg");
	this.shape.setTransform(416.5,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,816.6,89.5);


(lib.instruccionesmc1t2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// flecha 
	this.instance = new lib.lapizmueve("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.2,14.4,0.231,0.231,0,0,0,23.4,23.6);
	this.instance.alpha = 0.07;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.4,scaleX:1,scaleY:1,y:14.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(43));

	// flecha mueve
	this.instance_1 = new lib.lapizmueve("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.2,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(5).to({x:-8.7},0).to({x:485.3},37,cjs.Ease.get(1)).wait(1));

	// tapa circulo
	this.instance_2 = new lib.tapageneralblanco("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(3811.5,91.6,35.972,2.053,0,0,0,106.8,44.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:14.35,x:1925.4},26,cjs.Ease.get(1)).to({scaleX:0.5,x:560.6},10).to({_off:true},1).wait(1));

	// Instruccion
	this.text = new cjs.Text("Reto rápido...selecciona las afirmaciones que son correctas.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 18;
	this.text.lineWidth = 522;
	this.text.parent = this;
	this.text.setTransform(-14.4,6.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(14).to({_off:false},0).wait(38));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgxAuQgUgTAAgbQAAgaAUgTQAVgTAcAAQAdAAAUATQAVATAAAaQAAAbgVATQgUATgdAAQgcAAgVgTg");
	this.shape.setTransform(-453.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-460.4,-9.3,664.2,52);


(lib.estrategiadenegocio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.estrategia1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(179.9,179.9,1.968,1.968,0,0,0,91.4,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359.8,359.8);


(lib.caja_respuestasM2T2mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stage.enableMouseOver();
		var botones = 3;
		var resp = [2];
		var raiz = this; //guarda el MC padre
		console.log("entro");
		for (var i = 1; i <= botones; i++) {
			raiz["Mod2T2mc3b" + i].n = i;
			raiz["Mod2T2mc3b" + i].sel = false;
			raiz["Mod2T2mc3b" + i].mouseEnabled = true;
			raiz["Mod2T2mc3b" + i].cursor = "pointer";
			console.log(raiz["Mod2T2mc3b" + i].n);
			raiz["Mod2T2mc3b" + i].addEventListener("click", Eventoclick);
		}
		
		function Eventoclick(c) {
		
			console.log("evento click");
			c.currentTarget.sel = true;
			c.currentTarget.mouseEnabled = false;
			c.currentTarget.gotoAndStop(1);
			if (c.currentTarget.n == 1) {
				c.currentTarget.gotoAndStop(0);
				c.currentTarget.sel = false;
				c.currentTarget.mouseEnabled = true;
				parent.llamarRetros("mal", "¡Vuelve a intentar! Recuerda que es importante contar con el contexto y la información clave alrededor del puesto a analizar.");
			}
			if (c.currentTarget.n == 2) {
				parent.llamarRetros("bien", "¡En efecto! Contactar al líder del negocio o territorio nos permite tener claridad de los objetivos más significativos del negocio así como los retos que enfrenta la posición analizada, alineando de esta manera las necesidades de talento.");
			}
			if (c.currentTarget.n == 3) {
				c.currentTarget.gotoAndStop(0);
				c.currentTarget.sel = false;
				c.currentTarget.mouseEnabled = true;
				parent.llamarRetros("mal", "¡Vuelve a intentar! Recuerda que es importante contar con el contexto y la información clave alrededor del puesto a analizar.");
			}
			validar();
		}
		
		
		function validar() {
			var finalizo = true;
			for (var i = 0; i < resp.length; i++) {
				if (!raiz["Mod2T2mc3b" + resp[i]].sel) {
					finalizo = false;
					break;
				}
			}
			if (finalizo) {
				console.log("final de la actividad");
				for (var i = 1; i <= botones; i++) {
					raiz["Mod2T2mc3b" + i].mouseEnabled = false;
				}
				try {
					//parent.llamarRetros("bien","Respuesta B.  ¡En efecto! Contactar al líder del negocio o territorio nos permite tener claridad de los objetivos más significativos del negocio así como los retos que enfrenta la posición analizada, alineando de esta manera las necesidades de talento.");
					//parent.siguiente_verde();
					//parent.final_tema();
					parent.final_tema();
				} catch (e) {
					console.log("no se pudo comunicar con start.js:      " + e);
				}
		
			} else {
				console.log("no ha finalizado la actividad");
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// checkbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(285,-20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_1.setTransform(277.8,-24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_2.setTransform(268.4,-24.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_3.setTransform(258.8,-24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_4.setTransform(249.4,-24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_5.setTransform(242.1,-24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgJAGQgLAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgIAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_6.setTransform(233.7,-22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_7.setTransform(220.9,-24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_8.setTransform(208.4,-24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_9.setTransform(193.8,-24.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_10.setTransform(184.4,-24.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_11.setTransform(177.1,-24.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_12.setTransform(171,-26);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_13.setTransform(163.4,-24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_14.setTransform(148.4,-24.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLAAgOQAAgOAEgKQAFgMAJgGQAKgGALAAQAHAAAHADQAGAEAFAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgKAAgKgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAJABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_15.setTransform(138.1,-26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_16.setTransform(123.8,-24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_17.setTransform(114.4,-24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_18.setTransform(107.1,-24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_19.setTransform(98.4,-24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_20.setTransform(88.1,-26.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_21.setTransform(81.7,-26.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_22.setTransform(76.4,-26.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_23.setTransform(64.8,-24.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAEgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_24.setTransform(55.4,-24.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_25.setTransform(46.2,-24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_26.setTransform(39.4,-26.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_27.setTransform(35,-26);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_28.setTransform(28.2,-24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AghA6QgJgHAAgMQAAgHADgFQADgGAGgDQAFgEAFgCIAPgCQASgCAJgDIAAgFQAAgIgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAXQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADgAgIgoIALgZIAUAAIgSAZg");
	this.shape_29.setTransform(18.4,-26.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_30.setTransform(11.1,-24.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKAAASQABARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_31.setTransform(2.7,-22.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_32.setTransform(-12.6,-24.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_33.setTransform(-22.6,-24.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_34.setTransform(-37.2,-24.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_35.setTransform(-46.6,-24.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_36.setTransform(-56.2,-24.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_37.setTransform(-65.6,-24.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_38.setTransform(-74.8,-24.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_39.setTransform(-84.6,-24.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_40.setTransform(-91.9,-24.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALgBANQABAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_41.setTransform(-100.3,-22.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_42.setTransform(-115.2,-24.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_43.setTransform(-124.6,-24.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_44.setTransform(-132,-26);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_45.setTransform(-139.2,-24.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_46.setTransform(-148.6,-24.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_47.setTransform(-160.9,-24.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_48.setTransform(-169.6,-24.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_49.setTransform(-179.2,-24.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_50.setTransform(-188.6,-24.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiBIAPAAIAAAuQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAGADAJQACAIAAAKQAAAYgLANQgMANgRABQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAHQAHAMANAAQAJAAAIgJQAHgIAAgTQAAgQgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_51.setTransform(-198.4,-26.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_52.setTransform(351.1,-44.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_53.setTransform(342.4,-44.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgRBRIADgMIAIABQAFAAABgDQACgEABgNIAAhhIAPAAIAABiQAAARgFAGQgFAJgMAAQgHAAgGgCgAADhAIAAgSIAPAAIAAASg");
	this.shape_54.setTransform(334.4,-44.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_55.setTransform(328.4,-44.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_56.setTransform(315.9,-44.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_57.setTransform(298.8,-44.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgvBAIAAh/IBcAAIAAAPIhLAAIAAAnIBGAAIAAAPIhGAAIAAAsIBOAAIAAAOg");
	this.shape_58.setTransform(288.6,-46.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_59.setTransform(275,-40.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_60.setTransform(267.4,-44.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_61.setTransform(260.4,-46.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_62.setTransform(256.1,-44.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_63.setTransform(247.4,-44.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_64.setTransform(238.2,-44.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_65.setTransform(228.4,-44.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_66.setTransform(218.4,-44.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_67.setTransform(208.4,-44.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_68.setTransform(199.2,-44.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_69.setTransform(184.4,-44.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_70.setTransform(177.4,-46.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_71.setTransform(173.1,-44.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_72.setTransform(164.4,-44.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_73.setTransform(154.8,-44.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_74.setTransform(145.4,-44.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_75.setTransform(136.2,-44.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_76.setTransform(126.4,-44.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_77.setTransform(116.4,-44.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_78.setTransform(101.8,-44.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_79.setTransform(92.4,-44.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_80.setTransform(77.4,-44.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_81.setTransform(67.4,-44.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAGgFQAFgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_82.setTransform(52.4,-44.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_83.setTransform(42.3,-44.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AAZBCIAAguQgEAFgHADQgGAEgIAAQgPAAgMgNQgMgOAAgWQAAgOAFgLQAEgLAKgGQAJgGALAAQAQAAAKAPIAAgNIAOAAIAACBgAgQgrQgHAIAAATQAAARAHAJQAIAJAKAAQAKAAAHgJQAHgIAAgRQAAgSgHgKQgIgJgLAAQgJAAgHAJg");
	this.shape_84.setTransform(32.1,-42.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_85.setTransform(17.4,-44.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_86.setTransform(10.4,-46.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_87.setTransform(1.1,-44.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_88.setTransform(-7.6,-44.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_89.setTransform(-17.3,-42.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_90.setTransform(-32.6,-44.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_91.setTransform(-39.6,-46.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_92.setTransform(-45.8,-44.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_93.setTransform(-55.6,-44.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQABAHADADQAHAFAKAAQAKAAAGgFQAFgEADgIQABgFAAgPQgKAMgPAAQgTAAgKgOQgLgOAAgSQAAgOAEgLQAGgLAJgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAHgHAAgSQABgRgJgJQgHgJgLAAQgJAAgIAJg");
	this.shape_94.setTransform(-65.9,-42.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_95.setTransform(-75.6,-44.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_96.setTransform(-85.6,-44.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_97.setTransform(-97.6,-46.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_98.setTransform(-104.6,-44.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAHAAAHADQAGAEAFAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgKAAgKgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_99.setTransform(-114.9,-46.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_100.setTransform(-129.6,-44.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_101.setTransform(-136.6,-46.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgbA7QgLgHABgQIAPADQABAHAFADQAFAFALAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAFgLQAEgLAJgHQAKgGAMAAQAQAAALAOIAAgMIAOAAIAABQQAAAWgEAJQgFAJgKAFQgJAGgNAAQgRAAgKgIgAgQgsQgIAJAAAQQAAATAIAHQAGAJALAAQAKAAAIgJQAIgHAAgSQgBgRgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_102.setTransform(-143.9,-42.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_103.setTransform(-153.6,-44.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_104.setTransform(-161,-46.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_105.setTransform(-168.6,-44.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_106.setTransform(-175.9,-44.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_107.setTransform(-182,-46.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_108.setTransform(-189.2,-44.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_109.setTransform(-198.6,-44.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_110.setTransform(294.4,-64.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_111.setTransform(287.4,-66.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_112.setTransform(275.4,-64.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_113.setTransform(265.4,-64.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_114.setTransform(250.4,-64.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_115.setTransform(243,-66.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_116.setTransform(236.2,-64.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_117.setTransform(226.4,-64.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_118.setTransform(216.7,-62.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_119.setTransform(203.9,-64.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_120.setTransform(194.4,-66.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_121.setTransform(182.4,-64.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_122.setTransform(172.4,-64.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_123.setTransform(162.4,-64.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_124.setTransform(152.4,-64.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_125.setTransform(145.4,-66.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_126.setTransform(141,-66.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_127.setTransform(128.4,-64.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_128.setTransform(118.4,-64.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_129.setTransform(103.4,-64.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_130.setTransform(96,-66.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_131.setTransform(88.4,-64.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_132.setTransform(78.4,-64.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_133.setTransform(71.4,-66.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAEgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_134.setTransform(64.4,-64.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_135.setTransform(57,-66.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_136.setTransform(44.4,-64.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAACAIgOAAIAAgMQgJAOgRgBQgLABgIgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_137.setTransform(34.1,-66.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_138.setTransform(19.4,-64.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_139.setTransform(9.4,-66.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_140.setTransform(2.4,-66.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_141.setTransform(-2,-66.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_142.setTransform(-9.2,-64.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_143.setTransform(-18.6,-64.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQAAAHAEADQAHAFAKAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAEgLQAGgLAJgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAIgHgBgSQAAgRgIgJQgHgJgLAAQgJAAgIAJg");
	this.shape_144.setTransform(-28.9,-62.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_145.setTransform(-43.6,-64.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgLABgIgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_146.setTransform(-53.9,-66.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_147.setTransform(-68.2,-64.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_148.setTransform(-77.6,-64.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_149.setTransform(-87.2,-64.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_150.setTransform(-96.6,-64.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_151.setTransform(-105.8,-64.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_152.setTransform(-115.6,-64.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_153.setTransform(-122.9,-64.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgHgDQgGgEgEgFIAAAugAgSgrQgIAKAAASQABARAHAIQAHAJALAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_154.setTransform(-131.3,-62.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_155.setTransform(-146.2,-64.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_156.setTransform(-155.6,-64.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AgnBBIAAiAIARAAIAABwIA+AAIAAAQg");
	this.shape_157.setTransform(-165.3,-66.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_158.setTransform(-178,-60.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_159.setTransform(-185.6,-64.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AAhBBIhChkIAABkIgRAAIAAiAIASAAIBDBkIAAhkIAQAAIAACAg");
	this.shape_160.setTransform(-197.2,-66.4);

	this.Mod2T2mc3b3 = new lib.mc_seleccion();
	this.Mod2T2mc3b3.parent = this;
	this.Mod2T2mc3b3.setTransform(458.3,100.4,0.845,0.843,0,0,0,6.9,7);

	this.Mod2T2mc3b2 = new lib.mc_seleccion();
	this.Mod2T2mc3b2.parent = this;
	this.Mod2T2mc3b2.setTransform(457.5,31.3,0.845,0.843,0,0,0,6.9,7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_161.setTransform(-27,145.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_162.setTransform(-34.6,141.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_163.setTransform(-44.6,139.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_164.setTransform(-51.6,139.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_165.setTransform(-57.8,141.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_166.setTransform(-66.8,141.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_167.setTransform(-76.7,141.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMAAgOQAAgOAEgKQAFgMAJgGQAKgGALAAQAHAAAHAEQAGADAFAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgKgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAJAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_168.setTransform(-86.9,139.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_169.setTransform(-96.6,141.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_170.setTransform(-103.9,141.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_171.setTransform(-112.3,143.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_172.setTransform(-127.6,141.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAACAIgOAAIAAgMQgJAOgRgBQgLABgJgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_173.setTransform(-137.9,139.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_174.setTransform(-152.2,141.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_175.setTransform(-161.6,141.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_176.setTransform(-168.6,139.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_177.setTransform(-175.6,141.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_178.setTransform(-185.1,141.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_179.setTransform(-191.6,139.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_180.setTransform(-198.6,141.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AgiBAIgBgPIAJABQAFAAADgCQADgBACgDIAFgMIACgEIgkhdIARAAIAUA2IAFAVIAHgUIAUg3IAQAAIgkBeIgIAWQgEAHgFAEQgGAEgHAAQgFAAgGgCg");
	this.shape_181.setTransform(350,123.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_182.setTransform(335.8,121.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_183.setTransform(326.4,121.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACAOIgMABQgJAAgDgDg");
	this.shape_184.setTransform(319,119.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_185.setTransform(311.4,121.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_186.setTransform(301.4,121.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_187.setTransform(291.9,121.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_188.setTransform(277.8,121.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_189.setTransform(268.3,121.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_190.setTransform(258.8,121.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_191.setTransform(244.4,121.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACAOIgMABQgJAAgDgDg");
	this.shape_192.setTransform(237,119.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_193.setTransform(229.4,121.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_194.setTransform(219.4,121.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_195.setTransform(206.9,121.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_196.setTransform(194.4,121.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACAOIgMABQgJAAgDgDg");
	this.shape_197.setTransform(187,119.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_198.setTransform(179.4,121.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_199.setTransform(169.4,121.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACAOIgMABQgJAAgDgDg");
	this.shape_200.setTransform(162,119.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_201.setTransform(154.8,121.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_202.setTransform(148.4,119.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_203.setTransform(141.8,121.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_204.setTransform(132.4,121.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_205.setTransform(122.4,121.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_206.setTransform(113.2,121.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_207.setTransform(98.4,121.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAFgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_208.setTransform(88.1,119.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_209.setTransform(81.4,119.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_210.setTransform(74.3,121.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_211.setTransform(64.4,121.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_212.setTransform(57.4,119.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_213.setTransform(47.9,121.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_214.setTransform(35.8,121.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_215.setTransform(29.4,119.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAKgGALAAQAIAAAGADQAGAEAFAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgKAAgKgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAJABAIgJQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_216.setTransform(22.1,119.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_217.setTransform(7.4,121.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_218.setTransform(-2.6,121.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AAWBBIAAg7QAAgMgFgFQgFgGgJAAQgHABgGAEQgGADgDAGQgDAGAAALIAAAzIgPAAIAAiBIAPAAIAAAvQAMgNAPAAQALAAAHAEQAJAEACAIQAEAGAAAOIAAA7g");
	this.shape_219.setTransform(-12.6,119.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AgJAPQAFgCADgEQABgFAAgHIgIAAIAAgSIARAAIAAASQAAAJgDAGQgDAGgHAEg");
	this.shape_220.setTransform(-25.1,126.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_221.setTransform(-32.6,121.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_222.setTransform(-39.6,119.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_223.setTransform(-45.8,121.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_224.setTransform(-55.6,121.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQABAHADADQAHAFAKAAQAKAAAGgFQAFgEADgIQABgFAAgPQgKAMgPAAQgTAAgKgOQgLgOAAgSQAAgOAEgLQAGgLAJgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAHgHAAgSQABgRgJgJQgHgJgLAAQgJAAgIAJg");
	this.shape_225.setTransform(-65.9,123.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_226.setTransform(-75.6,121.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_227.setTransform(-85.6,121.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_228.setTransform(-97.6,119.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_229.setTransform(-104.6,121.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgGgLABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAHAAAHADQAGAEAFAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgKAAgKgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQAKABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_230.setTransform(-114.9,119.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_231.setTransform(-129.6,121.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_232.setTransform(-136.6,119.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgbA7QgLgHABgQIAPADQABAHAFADQAFAFALAAQAKAAAGgFQAFgEADgIQABgFAAgPQgLAMgOAAQgTAAgLgOQgKgOAAgSQAAgOAFgLQAEgLAJgHQAKgGAMAAQAQAAALAOIAAgMIAOAAIAABQQAAAWgEAJQgFAJgKAFQgJAGgNAAQgRAAgKgIgAgQgsQgIAJAAAQQAAATAIAHQAGAJALAAQAKAAAIgJQAIgHAAgSQgBgRgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_233.setTransform(-143.9,123.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_234.setTransform(-153.6,121.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACAOIgMABQgJAAgDgDg");
	this.shape_235.setTransform(-161,119.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_236.setTransform(-168.6,121.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_237.setTransform(-175.9,121.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACAOIgMABQgJAAgDgDg");
	this.shape_238.setTransform(-182,119.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_239.setTransform(-189.2,121.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_240.setTransform(-198.6,121.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_241.setTransform(364.4,101.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_242.setTransform(357.4,99.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_243.setTransform(348.1,101.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_244.setTransform(339.4,101.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgKAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_245.setTransform(329.7,103);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_246.setTransform(314.4,101.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQAAgOAGgLQAEgLAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgIgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQALAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_247.setTransform(304.1,99.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_248.setTransform(294.4,101.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_249.setTransform(287,99.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_250.setTransform(282.1,101.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_251.setTransform(273.4,101.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgKAGQgKAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgJAKABASQAAARAHAIQAIAJAKAAQAJAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_252.setTransform(263.7,103);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_253.setTransform(253.4,101.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_254.setTransform(243.8,101.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_255.setTransform(229.4,101.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_256.setTransform(222,99.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_257.setTransform(214.4,101.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_258.setTransform(204.4,101.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_259.setTransform(197.4,99.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_260.setTransform(190.4,101.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_261.setTransform(183,99.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_262.setTransform(170.4,101.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAFgLQAEgLAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgIgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQALAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_263.setTransform(160.1,99.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_264.setTransform(145.4,101.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_265.setTransform(135.4,99.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_266.setTransform(128.4,99.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_267.setTransform(124,99.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_268.setTransform(116.8,101.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_269.setTransform(107.4,101.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQABAHADADQAHAFAKAAQAKAAAGgFQAFgEADgIQABgFAAgPQgKAMgPAAQgTAAgLgOQgKgOAAgSQAAgOAEgLQAGgLAJgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAIgHgBgSQAAgRgIgJQgHgJgLAAQgJAAgIAJg");
	this.shape_270.setTransform(97.1,103.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAANANQALANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_271.setTransform(82.4,101.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMABgOQAAgOAEgLQAFgLAKgGQAJgGALAAQAIAAAGAEQAHADAEAGIAAguIAQAAIAAB/IgPAAIAAgLQgJANgRAAQgLAAgIgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQAKAAAIgIQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_272.setTransform(72.1,99.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAEgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_273.setTransform(57.4,101.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_274.setTransform(44.9,101.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAALANQAMANAAAWIAAAEIhFAAQACAQAHAIQAIAIAKAAQAJAAAHgFQAGgEAEgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgBgMgGgGQgHgJgMAAQgKAAgHAIg");
	this.shape_275.setTransform(32.4,101.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_276.setTransform(25,99.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_277.setTransform(17.8,101.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_278.setTransform(11.4,99.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_279.setTransform(4.8,101.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_280.setTransform(-9.6,101.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_281.setTransform(-19.7,101.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_282.setTransform(-34.6,101.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_283.setTransform(-44.6,101.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_284.setTransform(-53.8,101.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_285.setTransform(-68.2,101.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_286.setTransform(-77.6,101.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_287.setTransform(-87.2,101.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_288.setTransform(-96.6,101.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_289.setTransform(-103.9,101.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAFALABANQgBAPgFAKQgFAMgKAGQgJAGgLAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgHgJgKAAQgKAAgIAJg");
	this.shape_290.setTransform(-112.3,103);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_291.setTransform(-125.1,101.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_292.setTransform(-137.6,101.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_293.setTransform(-152.2,101.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgKAAgGAEQgFAEgDAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgPAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_294.setTransform(-161.6,101.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgnBAIAAh/IARAAIAABxIA+AAIAAAOg");
	this.shape_295.setTransform(-171.3,99.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_296.setTransform(-184,105.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_297.setTransform(-188.3,99.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgYA+QgMgFgHgLQgHgKAAgNIAQgCQABALAEAFQAEAHAJADQAJAFAKAAQAKAAAHgEQAIgDADgEQAEgGAAgGQAAgFgEgFQgDgEgIgEIgWgGQgSgEgHgDQgJgFgFgHQgEgHAAgJQAAgKAFgIQAGgJAKgEQALgFANABQANgBALAFQALAEAGAKQAGAJABALIgRABQgBgMgIgHQgHgFgPgBQgPAAgHAGQgHAGAAAIQAAAHAFAEQAFAFAUAFQAVAEAHAEQAMAEAFAIQAFAHAAALQAAAKgFAJQgGAKgLAFQgLAEgOAAQgRAAgLgEg");
	this.shape_298.setTransform(-197.7,99.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_299.setTransform(249,60.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_300.setTransform(241.4,56.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_301.setTransform(231.4,56.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_302.setTransform(224.1,56.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgiA6QgIgHAAgMQAAgHADgFQADgGAGgDQAFgEAGgCIAOgCQASgCAJgDIAAgFQAAgIgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAXQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADgAgIgoIALgZIAVAAIgTAZg");
	this.shape_303.setTransform(215.4,54.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_304.setTransform(203.4,54.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_305.setTransform(196.4,56.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgJgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAKABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_306.setTransform(186.1,54.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_307.setTransform(171.8,56.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_308.setTransform(162.4,56.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLAAgOQABgOAEgKQAFgMAKgGQAIgGAMAAQAIAAAGADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgKAAgJgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQALABAHgJQAHgJAAgRQAAgSgHgJQgHgJgMAAQgJAAgHAJg");
	this.shape_309.setTransform(152.1,54.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_310.setTransform(142.4,56.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHADQAGAEAFAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgJgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAKABAHgJQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_311.setTransform(132.1,54.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_312.setTransform(125.4,54.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_313.setTransform(118.8,56.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAANANQALANAAAWIAAAEIhEAAQAAAQAIAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_314.setTransform(109.4,56.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_315.setTransform(100.2,56.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_316.setTransform(90.4,56.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_317.setTransform(80.4,56.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_318.setTransform(65.8,56.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_319.setTransform(56.4,56.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_320.setTransform(49.4,54.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_321.setTransform(37.4,56.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgTA7QgKgFgFgMQgGgLABgOQAAgOAEgKQAFgMAKgGQAJgGALAAQAIAAAGADQAHAEAEAGIAAgvIAQAAIAACBIgPAAIAAgNQgJAOgRABQgLAAgIgHgAgQgJQgHAJAAARQAAASAHAIQAIAJAJAAQAKABAIgJQAHgJAAgRQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_322.setTransform(27.1,54.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_323.setTransform(17.4,56.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAGgFQAFgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_324.setTransform(7.4,56.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgTIAPAAIAAATg");
	this.shape_325.setTransform(0.4,54.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_326.setTransform(-3.9,56.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgZA0IAAAMIgOAAIAAiBIAPAAIAAAuQAKgMAPAAQAJAAAHADQAIAEAFAGQAFAGADAJQACAIAAAKQAAAYgLANQgMANgRABQgPAAgKgOgAgRgJQgIAJAAAQQAAARAFAIQAHALANAAQAJAAAIgJQAHgIAAgTQAAgQgHgJQgHgJgKAAQgKAAgHAJg");
	this.shape_327.setTransform(-12.4,54.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgUAtQgHgDgEgFQgDgFgCgHIgBgPIAAg5IAQAAIAAAzQAAANABAEQACAGAEAEQAFADAHAAQAGAAAHgDQAGgEADgGQACgHAAgMIAAgxIAQAAIAABdIgOAAIAAgOQgLAQgSAAQgIAAgHgDg");
	this.shape_328.setTransform(-22.7,56.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_329.setTransform(-31.8,56.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AgIAPQAEgCADgEQABgFAAgHIgIAAIAAgSIARAAIAAASQAAAJgDAGQgEAGgGAEg");
	this.shape_330.setTransform(-44.1,61.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_331.setTransform(-51.6,56.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_332.setTransform(-59,55);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_333.setTransform(-66.6,56.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_334.setTransform(-76.6,56.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_335.setTransform(-83.6,54.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAFgDAFgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAFgGQAEgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgJAIgJADQgHADgJAAQgQAAgIgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_336.setTransform(-90.6,56.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgEAAgPIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJAAgDgDg");
	this.shape_337.setTransform(-98,55);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAJAAAHgFQAFgEAEgKIARACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_338.setTransform(-110.6,56.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgUA7QgJgFgFgMQgFgLgBgOQAAgOAGgKQAEgMAJgGQAKgGALAAQAIAAAGADQAHAEAEAGIAAgvIAPAAIAACBIgOAAIAAgNQgJAOgRABQgLAAgJgHgAgQgJQgHAJAAARQAAASAIAIQAHAJAKAAQAKABAHgJQAHgJAAgRQAAgSgHgJQgIgJgKAAQgKAAgHAJg");
	this.shape_339.setTransform(-120.9,54.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_340.setTransform(-135.2,56.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_341.setTransform(-144.6,56.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_342.setTransform(-154.2,56.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_343.setTransform(-163.6,56.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_344.setTransform(-172.8,56.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_345.setTransform(-182.6,56.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_346.setTransform(-189.9,56.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#333333").s().p("AgoBCIAAiBIAPAAIAAANQAFgIAGgDQAHgEAIAAQAMAAAJAGQAJAHAFALQAEALAAANQAAAPgEAKQgGAMgJAGQgLAGgKAAQgHAAgHgDQgGgEgEgFIAAAugAgRgrQgIAKAAASQgBARAIAIQAIAJAJAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgHAJg");
	this.shape_347.setTransform(-198.3,58.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_348.setTransform(362.8,36.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_349.setTransform(353.4,36.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_350.setTransform(346.4,34.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_351.setTransform(337.1,36.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_352.setTransform(328.4,36.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_353.setTransform(318.4,36.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_354.setTransform(308.4,36.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_355.setTransform(301.4,34.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_356.setTransform(297.4,34.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_357.setTransform(290.4,36.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_358.setTransform(275.4,36.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_359.setTransform(268.1,36.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAGgDQAEgDAHgCIANgCQATgCAJgDIAAgFQAAgJgFgEQgFgGgMAAQgLAAgFAEQgGAEgCAKIgPgCQACgKAEgGQAFgGAJgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgJABgFACQgEACgCADQgCAEAAAEQAAAGAFAEQAFAEAIAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgIADgRADg");
	this.shape_360.setTransform(259.4,36.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_361.setTransform(249.7,38.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_362.setTransform(234.4,36.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_363.setTransform(227.4,34.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_364.setTransform(221.2,36.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_365.setTransform(211.4,36.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAPADQACAHADADQAHAFAKAAQAKAAAGgFQAGgEACgIQABgFAAgPQgLAMgOAAQgTAAgKgOQgLgOAAgSQAAgOAFgLQAFgLAIgHQAKgGAMAAQAQAAALAOIAAgMIAOAAIAABQQAAAWgEAJQgFAJgKAFQgJAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQAMAAAHgJQAHgHABgSQAAgRgJgJQgHgJgLAAQgJAAgIAJg");
	this.shape_366.setTransform(201.1,38.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_367.setTransform(191.4,36.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_368.setTransform(181.4,36.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_369.setTransform(169.4,34.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNASAAQAUAAAMANQALANAAAWIAAAEIhFAAQACAQAHAIQAIAIALAAQAIAAAGgFQAHgEADgKIAQACQgEAOgJAIQgLAIgQAAQgUAAgMgNgAgRgbQgHAHAAAMIAyAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_370.setTransform(162.4,36.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#333333").s().p("AgTA8QgKgHgFgKQgGgMAAgOQABgOAEgLQAFgLAKgGQAIgGAMAAQAIAAAGAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgKAAgJgFgAgQgJQgHAIAAASQAAASAHAIQAIAKAJgBQALAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgMAAQgJAAgHAJg");
	this.shape_371.setTransform(152.1,34.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_372.setTransform(137.8,36.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_373.setTransform(128.4,36.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_374.setTransform(118.9,36.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_375.setTransform(112.4,34.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_376.setTransform(108,34.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_377.setTransform(100.4,36.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_378.setTransform(91.2,36.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_379.setTransform(84.4,34.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#333333").s().p("AgNBBIAAhQIgNAAIAAgMIANAAIAAgKQAAgJACgFQADgGAFgEQAFgDAKAAIAQABIgDAOIgKgBQgGAAgEADQgDADAAAJIAAAIIASAAIAAAMIgSAAIAABQg");
	this.shape_380.setTransform(80.3,34.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_381.setTransform(75.4,34.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_382.setTransform(68.4,36.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#333333").s().p("AgbA7QgKgHAAgQIAQADQABAHADADQAHAFAKAAQAKAAAGgFQAGgEACgIQABgFAAgPQgKAMgPAAQgTAAgKgOQgLgOAAgSQAAgOAFgLQAEgLAKgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAIAJAJAAQALAAAIgJQAHgHAAgSQABgRgJgJQgHgJgLAAQgJAAgIAJg");
	this.shape_383.setTransform(58.1,38.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_384.setTransform(51.4,34.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_385.setTransform(44.8,36.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_386.setTransform(30.8,36.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#333333").s().p("AghA6QgJgHAAgMQAAgHADgFQADgGAFgDQAGgEAFgCIAOgCQATgCAJgDIAAgFQAAgIgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAXQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADgAgIgoIALgZIAUAAIgTAZg");
	this.shape_387.setTransform(21.4,34.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_388.setTransform(8.9,36.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_389.setTransform(-8.2,36.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_390.setTransform(-17.6,36.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_391.setTransform(-27.1,36.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#333333").s().p("AgHBAIAAhcIAPAAIAABcgAgHgtIAAgSIAPAAIAAASg");
	this.shape_392.setTransform(-33.6,34.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#333333").s().p("AgBA9QgFgDgCgEQgCgFAAgOIAAg1IgMAAIAAgMIAMAAIAAgXIAPgKIAAAhIAQAAIAAAMIgQAAIAAA2QAAAHABABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHAAIACANIgMABQgJAAgDgCg");
	this.shape_393.setTransform(-38,34.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAHgEADgKIAQACQgDAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQgBgMgEgGQgIgJgMAAQgKAAgIAIg");
	this.shape_394.setTransform(-45.6,36.5);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#333333").s().p("AgRBRIADgMIAIABQAFAAABgDQADgEAAgNIAAhhIAPAAIAABiQAAARgEAGQgGAJgMAAQgHAAgGgCgAADhAIAAgSIAPAAIAAASg");
	this.shape_395.setTransform(-53.6,36.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#333333").s().p("AgZA0IAAALIgOAAIAAh/IAPAAIAAAtQAKgMAPAAQAJAAAHAEQAIADAFAGQAFAHADAJQACAHAAALQAAAYgLAMQgMANgRAAQgPAAgKgNgAgRgJQgIAJAAAQQAAARAFAIQAHAMANgBQAJABAIgKQAHgJAAgRQAAgSgHgIQgHgJgKAAQgKAAgHAJg");
	this.shape_396.setTransform(-59.4,34.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_397.setTransform(-69.6,36.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_398.setTransform(-84.2,36.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_399.setTransform(-93.6,36.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333333").s().p("AgHBAIAAh/IAPAAIAAB/g");
	this.shape_400.setTransform(-100.6,34.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_401.setTransform(-109.9,36.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_402.setTransform(-118.6,36.5);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#333333").s().p("AgUA8QgJgHgFgKQgFgMgBgOQAAgOAGgLQAEgLAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAAB/IgOAAIAAgLQgJANgRAAQgLAAgJgFgAgQgJQgHAIAAASQAAASAIAIQAHAKAKgBQAKAAAHgIQAHgJAAgRQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_403.setTransform(-128.9,34.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_404.setTransform(-138.6,36.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_405.setTransform(-148.6,36.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_406.setTransform(-155.9,36.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_407.setTransform(-164.3,38.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_408.setTransform(-177.1,36.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_409.setTransform(-189.6,36.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_410.setTransform(-198.8,36.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#333333").s().p("AghA6QgJgHAAgMQAAgHADgFQADgGAFgDQAGgEAFgCIAOgCQATgCAJgDIAAgFQAAgIgEgEQgGgGgMAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAOIAAAVQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAXQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADgAgIgoIALgZIAUAAIgTAZg");
	this.shape_411.setTransform(363.4,14.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_412.setTransform(356.1,16.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_413.setTransform(350.4,14.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_414.setTransform(346,14.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_415.setTransform(341.4,14.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_416.setTransform(331.9,16.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_417.setTransform(322.1,16.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_418.setTransform(313.4,16.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#333333").s().p("AgnBCIAAiBIAOAAIAAANQAFgIAHgDQAFgEAJAAQAMAAAJAGQAJAHAEALQAGALAAANQAAAPgGAKQgFAMgJAGQgLAGgKAAQgHAAgGgDQgHgEgEgFIAAAugAgSgrQgHAKgBASQAAARAIAIQAHAJAKAAQAKAAAIgJQAHgJAAgSQAAgSgHgIQgIgJgJAAQgKAAgIAJg");
	this.shape_419.setTransform(303.7,18.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#333333").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_420.setTransform(288.8,16.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_421.setTransform(279.4,16.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_422.setTransform(269.4,16.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_423.setTransform(254.4,16.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#333333").s().p("AgGAvIgkhdIARAAIAUA3IAFATIAGgSIAUg4IARAAIgkBdg");
	this.shape_424.setTransform(244.9,16.4);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgFgEQgGgGgLAAQgKAAgGAEQgGAEgCAKIgPgCQACgKAFgGQAFgGAIgDQAKgEALAAQAMAAAIADQAGADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgRAAQgCgFgBgHQgJAIgIADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAKAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgIADgRADg");
	this.shape_425.setTransform(235.4,16.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_426.setTransform(228.4,14.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_427.setTransform(222.2,16.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_428.setTransform(207.4,16.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#333333").s().p("AgfA1QgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAVQAAASgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgJQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJgAgIgoIALgZIAVAAIgUAZg");
	this.shape_429.setTransform(197.4,14.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_430.setTransform(190.4,14.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_431.setTransform(184.2,16.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAGgDAFgCIAOgCQATgCAJgDIAAgFQAAgJgEgEQgGgGgMAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgFACgCADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_432.setTransform(174.4,16.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#333333").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_433.setTransform(161.9,16.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_434.setTransform(152.1,16.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_435.setTransform(143.4,16.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#333333").s().p("AgNBCIAAhQIgNAAIAAgNIANAAIAAgKQABgJACgEQABgHAHgDQAEgFAKAAIAQACIgDAOIgJgBQgIAAgCADQgEADAAAJIAAAIIASAAIAAANIgSAAIAABQg");
	this.shape_436.setTransform(136.3,14.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_437.setTransform(128.4,16.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_438.setTransform(121.4,14.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_439.setTransform(109.4,16.4);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_440.setTransform(102.4,14.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_441.setTransform(98.1,16.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_442.setTransform(89.4,16.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_443.setTransform(82,14.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_444.setTransform(77.4,14.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_445.setTransform(73.1,16.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJAAAKIAAAwg");
	this.shape_446.setTransform(67.1,16.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAHgFQAFgEAFgKIAQACQgFAOgJAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_447.setTransform(58.4,16.4);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_448.setTransform(51,14.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#333333").s().p("AgYBCIAliEIAMAAIglCEg");
	this.shape_449.setTransform(45.9,14.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_450.setTransform(38.4,16.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_451.setTransform(31.4,14.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_452.setTransform(25.2,16.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_453.setTransform(15.4,16.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#333333").s().p("AgbA7QgLgHABgQIAQADQABAHADADQAHAFAKAAQAKAAAGgFQAGgEACgIQABgFAAgPQgKAMgPAAQgTAAgKgOQgLgOAAgSQAAgOAEgLQAFgLAKgHQAJgGAMAAQAQAAAKAOIAAgMIAPAAIAABQQAAAWgFAJQgEAJgJAFQgKAGgNAAQgRAAgKgIgAgRgsQgHAJAAAQQAAATAHAHQAHAJAKAAQALAAAIgJQAHgHAAgSQABgRgJgJQgHgJgLAAQgJAAgIAJg");
	this.shape_454.setTransform(5.1,18.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIAKAAQAJAAAHgFQAFgEAFgKIAQACQgFAOgKAIQgKAIgRAAQgTAAgMgNgAgQgbQgIAHgBAMIA0AAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_455.setTransform(-4.6,16.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#333333").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_456.setTransform(-14.6,16.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_457.setTransform(-26.6,14.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAIAAAGgFQAGgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgEgGQgIgJgMAAQgKAAgHAIg");
	this.shape_458.setTransform(-33.6,16.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#333333").s().p("AgTA7QgKgGgFgKQgGgMABgOQAAgOAEgKQAFgMAKgGQAIgGAMAAQAHAAAHAEQAHADAEAGIAAguIAQAAIAACAIgPAAIAAgMQgJAOgRgBQgKABgJgHgAgQgJQgHAJAAARQAAASAHAJQAIAIAJABQAKAAAIgJQAHgIAAgSQAAgSgHgJQgIgJgLAAQgJAAgHAJg");
	this.shape_459.setTransform(-43.9,14.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#333333").s().p("AgYAwIAAhdIAOAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgDAJAAAKIAAAwg");
	this.shape_460.setTransform(-55.9,16.3);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#333333").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_461.setTransform(-64.6,16.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#333333").s().p("AgUA7QgJgGgFgKQgFgMgBgOQAAgOAGgKQAEgMAJgGQAJgGAMAAQAHAAAHAEQAGADAFAGIAAguIAPAAIAACAIgOAAIAAgMQgJAOgRgBQgLABgJgHgAgQgJQgHAJAAARQAAASAIAJQAHAIAKABQAKAAAHgJQAHgIAAgSQAAgSgHgJQgHgJgLAAQgKAAgHAJg");
	this.shape_462.setTransform(-74.9,14.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#333333").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_463.setTransform(-81.3,14.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_464.setTransform(-86.6,14.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_465.setTransform(-95.6,14.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#333333").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAFgDAHgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgLAAgFAEQgGAEgCAKIgQgCQADgKAEgGQAGgGAJgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFAAgHQgKAIgHADQgIADgJAAQgPAAgJgIgAgDAGQgKABgEACQgDACgDADQgCAEAAAEQAAAGAFAEQAEAEAJAAQAJAAAHgDQAHgFADgGQADgGAAgKIAAgGQgJADgQADg");
	this.shape_466.setTransform(-102.6,16.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#333333").s().p("AgZAwIAAhdIAPAAIAAAPQAGgKAEgEQAEgDAFAAQAIAAAJAFIgGAPQgGgDgFAAQgGAAgDADQgEADgCAFQgDAJABAKIAAAwg");
	this.shape_467.setTransform(-114.9,16.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#333333").s().p("AghApQgJgHAAgMQAAgHADgFQADgGAFgDQAFgDAGgCIAPgCQASgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAFgGQAFgGAIgDQAKgEALAAQAMAAAHADQAHADAEAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgJADQgHADgJAAQgQAAgHgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAGAEAJAAQAIAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_468.setTransform(-123.6,16.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#333333").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMAAQgJAAgDgCg");
	this.shape_469.setTransform(-131,14.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_470.setTransform(-135.6,14.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#333333").s().p("AgcAkQgMgMAAgYQAAgOAFgLQAFgLALgGQAKgGALAAQAPAAAKAIQAJAIADAOIgPACQgCgJgGgFQgGgFgIAAQgLAAgHAJQgHAIAAASQAAATAHAIQAHAJALAAQAJAAAGgGQAGgGACgLIAQACQgDAQgKAJQgLAJgPAAQgSAAgMgNg");
	this.shape_471.setTransform(-141.8,16.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#333333").s().p("AgHBBIAAhdIAPAAIAABdgAgHgtIAAgSIAPAAIAAASg");
	this.shape_472.setTransform(-148.6,14.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#333333").s().p("AgHBBIAAiAIAPAAIAACAg");
	this.shape_473.setTransform(-152.6,14.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#333333").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_474.setTransform(-159.6,16.4);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#333333").s().p("AgYA+QgMgFgHgKQgHgLAAgNIAQgCQABAKAEAHQAEAGAJAEQAJADAKAAQAKAAAHgDQAIgCADgGQAEgFAAgGQAAgFgEgFQgDgFgIgCIgWgHQgSgEgHgDQgJgFgFgHQgEgHAAgJQAAgKAFgIQAGgJAKgEQALgFANAAQANAAALAFQALAFAGAIQAGAJABAMIgRABQgBgMgIgGQgHgHgPAAQgPABgHAFQgHAGAAAIQAAAHAFAEQAFAEAUAFQAVAFAHADQAMAFAFAIQAFAIAAAKQAAAKgFAKQgGAJgLAFQgLAEgOAAQgRAAgLgEg");
	this.shape_475.setTransform(-170.7,14.6);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#333333").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_476.setTransform(-184,20.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#333333").s().p("AgOBBIAAhdIAOAAIAABdgAgPgnIAMgZIATAAIgSAZg");
	this.shape_477.setTransform(-188.3,14.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#333333").s().p("AgYA+QgMgFgHgKQgHgLAAgNIAQgCQABAKAEAHQAEAGAJAEQAJADAKAAQAKAAAHgDQAIgCADgGQAEgFAAgGQAAgFgEgFQgDgFgIgCIgWgHQgSgEgHgDQgJgFgFgHQgEgHAAgJQAAgKAFgIQAGgJAKgEQALgFANAAQANAAALAFQALAFAGAIQAGAJABAMIgRABQgBgMgIgGQgHgHgPAAQgPABgHAFQgHAGAAAIQAAAHAFAEQAFAEAUAFQAVAFAHADQAMAFAFAIQAFAIAAAKQAAAKgFAKQgGAJgLAFQgLAEgOAAQgRAAgLgEg");
	this.shape_478.setTransform(-197.7,14.6);

	this.Mod2T2mc3b1 = new lib.mc_seleccion();
	this.Mod2T2mc3b1.parent = this;
	this.Mod2T2mc3b1.setTransform(457.5,-45.4,0.845,0.843,0,0,0,6.9,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Mod2T2mc3b1},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.Mod2T2mc3b2},{t:this.Mod2T2mc3b3},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// numeros
	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgoBNQgQgOgCgWIAhgEQABAMAHAHQAHAHAKAAQAKAAAHgIQAHgIAAgOQAAgNgHgHQgHgIgKAAQgFAAgJADIADgbQANAAAIgGQAHgHAAgKQAAgJgFgGQgGgFgIAAQgIAAgHAGQgGAGgBAMIgggGQADgQAHgJQAHgKAMgGQAMgFAOAAQAZAAAPAQQAMANAAARQAAAXgZAOQAPADAJALQAJALAAARQAAAXgRARQgRAQgZAAQgYAAgQgOg");
	this.shape_479.setTransform(-257.7,118.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#DC686B").s().p("Ah7B8QgzgzAAhJQAAhHAzgzQA0g0BHAAIAGAAQBFADAxAxQAzAzAABHQAABJgzAzQgzAyhJAAQhHAAg0gyg");
	this.shape_480.setTransform(-257.6,117.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("Ag7BaQACgSAKgQQAJgRAdgaQAWgVAGgIQAHgKAAgLQAAgLgGgGQgHgGgKAAQgKAAgHAGQgGAHgBAPIgigEQADgcAQgMQAQgNAXAAQAbAAAPAOQAPAPAAAVQAAAMgEALQgFALgJALQgGAIgQAPIgUATIgHAKIBDAAIAAAgg");
	this.shape_481.setTransform(-257.9,37.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#DC686B").s().p("Ah7B7QgzgyAAhJQAAhHAzgzQA0g0BHAAIAGAAQBFACAxAyQAzAzAABHQAABJgzAyQgzAzhJAAQhHAAg0gzg");
	this.shape_482.setTransform(-257.6,36.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AAFBaIAAiAQgSARgZAJIAAggQANgEAQgMQAOgMAGgRIAcAAIAACzg");
	this.shape_483.setTransform(-259.6,-44.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#DC686B").s().p("Ah7B8QgzgzAAhJQAAhHAzgzQA0gzBHAAIAGAAQBFABAxAyQAzAzAABHQAABJgzAzQgzAyhJAAQhHAAg0gyg");
	this.shape_484.setTransform(-257.6,-45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479}]}).wait(1));

	// fondos
	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#F3F3F3").s().p("EAx1ASzInUAAIhrAAMghFAAAMg/PAAAQggABgagIQhcgZAAh1IAAm/QAAh2BcgZQAZgIAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsABAaAKQBJAeAGBbIABATIAABRIAADPIAABUIAAA4IAAAEIAAAPQAACWiWgBgEAx1AF4InUAAIhrAAMghFAAAMg/PAAAQggAAgagHQhcgaAAh1IAAm+QAAh1BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsAAAaALQBJAdAGBcIABASIAABRIAADPIAABUIAAA4IAAADIAAAPQAACWiWAAgEAx1gHHInUAAIhrAAMghFAAAMg/PAAAQggAAgagIQhcgZAAh2IAAm/QAAh0BcgaQAZgHAhAAMA/PAAAMAhFAAAIBrAAIM+AAQAsgBAaALQBJAeAGBbIABASIAABSIAADPIAABVIAAA3IAAADIAAAPQAACWiWABg");
	this.shape_485.setTransform(141.1,36);

	this.timeline.addTween(cjs.Tween.get(this.shape_485).wait(1));

}).prototype = getMCSymbolPrototype(lib.caja_respuestasM2T2mc3, new cjs.Rectangle(-275.1,-84.3,786.3,240.7), null);


(lib.AS_LG_MOV_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape.setTransform(28.9,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_1.setTransform(28.9,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_2.setTransform(28.9,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.118)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_3.setTransform(28.9,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.059)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_4.setTransform(28.9,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_5.setTransform(28.9,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.039)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_6.setTransform(28.9,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.075)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_7.setTransform(28.9,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.114)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_8.setTransform(28.9,33.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_9.setTransform(28.9,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.188)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_10.setTransform(28.9,33.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.224)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_11.setTransform(28.9,33.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.263)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_12.setTransform(28.9,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(12));

	// Layer 1
	this.instance = new lib.AS_LG_153("single",0);
	this.instance.parent = this;
	this.instance.setTransform(35.9,14.9,1,1,0,0,0,23.9,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_13.setTransform(28.8,32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_14.setTransform(28.9,33.1,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-7.7,81.8,81.8);


(lib.mc3T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// pregunta
	this.instance = new lib.pregunta1tema2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(201.3,80.1,1,1,0,0,0,408.3,44.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:441.3,alpha:1},18,cjs.Ease.get(1)).wait(14));

	// reto
	this.instance_1 = new lib.caja_respuestasM2T2mc3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(855.9,360.8,1,1,0,0,0,257.5,142);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:595.9,alpha:1},24,cjs.Ease.get(1)).wait(8));

	// instrucciones
	this.instance_2 = new lib.instruccionesmc1t2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.2,-3.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(8));

	// info
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeCaQg/AAguguQgtgsAAhAQAAg+AtguQAugtA/AAIA9AAQBAAAAtAtQAtAuAAA+QAABAgtAsQgtAuhAAAg");
	this.shape.setTransform(-48.2,462.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,35.3,1316.6,442.2);


(lib.mc1T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_185 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(185).call(this.frame_185).wait(1));

	// Layer 2
	this.instance = new lib.estrategiadenegocio("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(858.1,-46.9,0.921,0.921,56.9,0,0,165,136.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,rotation:0,x:658.2,y:-47,alpha:1},14,cjs.Ease.get(1)).wait(67));

	// caja larga
	this.instance_1 = new lib.cajagdemc1t2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.5,-75.3,0.454,1,0,0,0,363.4,93);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({scaleX:1,x:363.5,alpha:1},15,cjs.Ease.get(1)).wait(52));

	// caja gris
	this.instance_2 = new lib.cajagrismc1t2m2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(158).to({_off:false},0).to({y:89.6,alpha:1},15,cjs.Ease.get(1)).wait(13));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgxAAhHQAAhGAwgxQAwgyBEAAQBFAAAwAyQAwAxAABGQAABHgwAxQgwAyhFAAQhEAAgwgyg");
	this.shape.setTransform(-191.3,293.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,276.4,33,34);


(lib.mc_infoRecuerda01t2mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Layer 2
	this.instance = new lib.AS_LG_MOV_10();
	this.instance.parent = this;
	this.instance.setTransform(-67.2,-28.7,1,1,0,0,0,30,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-419},23,cjs.Ease.get(1)).wait(4));

	// Layer 3
	this.instance_1 = new lib.barrabcdespliega("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25.2,-27.2,1,1,0,0,0,394.9,43);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.02,x:392.6,alpha:0.5},21,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// Layer 1
	this.instance_2 = new lib.info01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-25.3,alpha:1},23,cjs.Ease.get(1)).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-452.2,-66.4,627,81.8);


(lib.mc12T2M2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_169 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(1));

	// CIRCULO1
	this.instance = new lib.prioridades("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(194.4,188,0.3,0.3,0,0,0,91.4,91.4);
	this.instance.alpha = 0.102;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({scaleX:1,scaleY:1,x:194.3,alpha:1},17,cjs.Ease.get(1)).wait(109));

	// CIRCULO2
	this.instance_1 = new lib.retosactualesfuturos("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(462.8,188,0.3,0.3,0,0,0,91.5,91.5);
	this.instance_1.alpha = 0.23;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73).to({_off:false},0).to({regX:91.4,regY:91.4,scaleX:1,scaleY:1,alpha:1},16,cjs.Ease.get(1)).wait(81));

	// CIRCULO3
	this.instance_2 = new lib.perfolescpacidades("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(731.1,187.9,0.3,0.3,0,0,0,91.4,91.4);
	this.instance_2.alpha = 0.23;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101).to({_off:false},0).to({scaleX:1,scaleY:1,y:188,alpha:1},16,cjs.Ease.get(1)).wait(53));

	// m2t1mc1 txt1
	this.instance_3 = new lib.m2t1mc1txt1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.6,68.4,1,1,0,0,0,187,42.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:215.6,alpha:1},16,cjs.Ease.get(1)).wait(154));

	// TIP
	this.info = new lib.mc_infoRecuerda01t2mc2();
	this.info.parent = this;
	this.info.setTransform(584.2,408.4);
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(120).to({_off:false},0).wait(50));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,6.2,546.1,533.9);


// stage content:
(lib.AC_TMR_M02_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		parent.iniciar_tema(this);
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// PAGINAS
	this.instance = new lib.mc1T2M2TMR();
	this.instance.parent = this;
	this.instance.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_1 = new lib.mc12T2M2TMR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,40.2);

	this.instance_2 = new lib.mc3T2M2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(385,288.1,1,1,0,0,0,365.4,228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// TITULO
	this.instance_3 = new lib.tema_entrada_titulo();
	this.instance_3.parent = this;
	this.instance_3.setTransform(303.6,249.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,218,255,0.6)").ss(1,1,1).p("AhoioIDRAAIAAFRIjRAAg");
	this.shape.setTransform(-123.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhoCpIAAlRIDRAAIAAFRg");
	this.shape_1.setTransform(-123.6,16.9);

	this.instance_4 = new lib.tituloestatico();
	this.instance_4.parent = this;
	this.instance_4.setTransform(303.6,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_3}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,249,603.6,550.1);
// library properties:
lib.properties = {
	width: 950,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;