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


(lib.imagenmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.86,1.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.imagenmc, new cjs.Rectangle(0,0,1201.8,742.3), null);


(lib.Page = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],-86.5,0,86.5,0).s().p("AtgRRMAAAgh6QHthOTUBOMAAAAh6QwKhLq3BLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-110.5,173,221);


(lib.Corner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("ABLCGQgpgbAcgoQAdgngLg0QgGgagIgQIAAAAQgPgHgZgFQgzgMgoAdQgnAcgbgpQgbgnAVgjIEcAAIAAEhQgOAIgQAAQgUAAgWgPg");
	this.shape.setTransform(-0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-14.5,29.4,29.8);


(lib.flechacursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABBtIgbg3IgkAaQgDACgCgBQgDgBAAgEIAAi1QAAgEADgBQADgBADACICDCDQACADgBADQgCACgDAAIgqAAIAaA2QADAFgFACIgpAUIgCABQgDAAgBgDgAgXApQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAbA4IAggQIgcg4QgCgCACgDQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAIAmAAIhyhyIAACfIAggYQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAg");
	this.shape.setTransform(7.1,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flechacursor, new cjs.Rectangle(0,0,14.2,22.4), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AguFcQgBgmAPj9IASkzQgMgHgIgRIgIgYQgEgHAYgeQAKgMAMAAQANAAAKAMQAYAdgEAIIgJAYQgHARgMAHIASEzQAPD9gCAmg");
	mask.setTransform(31.3,52.3);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F3943").s().p("AgTgTIACAAIAlAmIgBABg");
	this.shape.setTransform(41.5,98.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F3943").s().p("ABoBrIjRjUIABgBIDSDVg");
	this.shape_1.setTransform(10.6,66.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F3943").s().p("AgQgQIACAAIAfAfIgBACg");
	this.shape_2.setTransform(42.1,98);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7F3943").s().p("ABqBuIjWjaIABgBIDYDbg");
	this.shape_3.setTransform(11.3,66.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7F3943").s().p("AgWgUIAPAAIAeAfIgFAKg");
	this.shape_4.setTransform(41.6,98.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F3943").s().p("ABhBuIjQjSIAGgJIDZDbg");
	this.shape_5.setTransform(11.2,66.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7F3943").s().p("AB/CCIj/kCIABgCIEAEEg");
	this.shape_6.setTransform(15.1,64.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F3943").s().p("ACCCFIkFkIIABgBIEGEJg");
	this.shape_7.setTransform(15.7,64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7F3943").s().p("AB4CGIj+kBIAGgKIEHELg");
	this.shape_8.setTransform(15.6,64.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7F3943").s().p("ACqCuIlVlaIABgCIFWFcg");
	this.shape_9.setTransform(19.3,60.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7F3943").s().p("ACtCxIlblgIABgBIFcFhg");
	this.shape_10.setTransform(19.9,59.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7F3943").s().p("ACjCyIlUlaIAFgJIFeFjg");
	this.shape_11.setTransform(19.9,59.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7F3943").s().p("ADBDGImEmJIABgCIGGGLg");
	this.shape_12.setTransform(23.8,57.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7F3943").s().p("ADEDJImJmQIABgBIGLGRg");
	this.shape_13.setTransform(24.4,57.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7F3943").s().p("AC6DJImCmIIAFgKIGMGSg");
	this.shape_14.setTransform(24.3,57.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F3943").s().p("AjYjaIABgBIGwG2IgBABg");
	this.shape_15.setTransform(25.9,51.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7F3943").s().p("AjYjaIABgCIGwG3IgBABg");
	this.shape_16.setTransform(26.2,50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7F3943").s().p("AjajWIAFgKIGwG3IgFAKg");
	this.shape_17.setTransform(26,51);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F3943").s().p("AjYjaIABgBIGwG2IgBABg");
	this.shape_18.setTransform(28,46.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F3943").s().p("AjYjaIABgCIGwG3IAAABg");
	this.shape_19.setTransform(28.3,46);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7F3943").s().p("AjajWIAFgKIGwG3IgFAKg");
	this.shape_20.setTransform(28.2,46.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F3943").s().p("AjYjaIAAgBIGxG2IgBABg");
	this.shape_21.setTransform(27.9,37.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7F3943").s().p("AjYjaIABgBIGwG2IAAABg");
	this.shape_22.setTransform(28.2,37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7F3943").s().p("AjajWIAFgKIGxG3IgGAJg");
	this.shape_23.setTransform(28.1,37.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7F3943").s().p("AjYjaIAAgBIGxG2IgBACg");
	this.shape_24.setTransform(30.1,33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7F3943").s().p("AjYjaIABgCIGwG3IgBABg");
	this.shape_25.setTransform(30.4,32.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7F3943").s().p("AjajWIAFgKIGwG3IgFAKg");
	this.shape_26.setTransform(30.2,32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7F3943").s().p("AjYDbIGwm2IABABImwG2g");
	this.shape_27.setTransform(30.1,27.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7F3943").s().p("AjYDbIGwm2IABABImwG3g");
	this.shape_28.setTransform(29.8,26.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7F3943").s().p("AjaDXIGwm3IAFAKImwG3g");
	this.shape_29.setTransform(29.9,27.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7F3943").s().p("AjYDbIGwm2IABABImxG2g");
	this.shape_30.setTransform(28,22.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7F3943").s().p("AjYDbIGwm2IABABImwG2g");
	this.shape_31.setTransform(27.6,22.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7F3943").s().p("AjaDXIGwm3IAFAKImwG3g");
	this.shape_32.setTransform(27.8,22.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7F3943").s().p("AgrEsQAGiRAXlmQgMgHgIgQIgIgYQgEgIAYgdQAKgNAMAAQANAAAKANQAYAcgEAJIgJAYQgHAQgMAHQAWFmAHCRg");
	this.shape_33.setTransform(31.3,47.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7F3943").s().p("AguFcQgBgmAPj9IASkzQgMgHgIgRIgIgYQgEgHAYgeQAKgMAMAAQANAAAKAMQAYAdgEAIIgJAYQgHARgMAHIASEzQAPD9gCAmg");
	this.shape_34.setTransform(31.3,52.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(26.7,17.5,9.3,69.6), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB9C94").s().p("AAAAWIgDgCIgCgCIgCgCIgDgFIgBgHIACgFIACgGIAEgEIAGgHQAFgDAEgBIgMAXIAAAIIABAGIABADIACACIACADg");
	this.shape.setTransform(1.2,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,2.4,4.6), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB9C94").s().p("AARBIQgFgBgNgRQgNgPgKgPQgJgPgDgXQgDgaAIgUQAHgSAPALQAIAFAFAJIAiBzQgLAKgJAAIgBAAg");
	this.shape.setTransform(3.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,7.6,14.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB9C94").s().p("AglA+IAihzQAGgJAHgFQAPgLAHASQAIAUgDAaQgDAXgJAPQgKAPgNAPQgNARgFABIgBAAQgJAAgLgKg");
	this.shape.setTransform(3.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,7.7,14.4), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB9C94").s().p("AgBAXIgHgDIgGgHQgKgMADgNQAAgFADgEIACgDIAHAUIAGAIIADAFIADACIAJAEIALADIgGAEIgFABIgHABg");
	this.shape.setTransform(2.3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,4.6,4.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB9C94").s().p("AADAXIgDgBIgDgCIgCgBIgCgDIgDgFIgBgEIAAgDIABgFIADgGIAEgFIAGgGQAEgDAFgBIgMAYIAAADIAAADIAAAEIAAADIADADIADAFg");
	this.shape_1.setTransform(1.2,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,2.3,4.5), null);


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB9C94").s().p("AARBIQgFgBgNgRQgNgPgKgPQgJgPgDgXQgDgaAIgUQAHgRAPAKQAIAGAFAIIAiBzQgLAKgJAAIgBAAg");
	this.shape_1.setTransform(3.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,7.6,14.4), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB9C94").s().p("AglA+IAihzQAGgIAHgGQAPgKAHARQAIAUgDAaQgDAXgJAPQgKAPgNAPQgNARgFABIgBAAQgJAAgLgKg");
	this.shape_1.setTransform(3.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,7.7,14.4), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB9C94").s().p("AAEAbIgFgCIgGgFIgEgGIgDgIQgDgOAJgLQACgDAFgDIACgBIgBADIgBARIAAAFIABAJIACAFIAFAHIAJAGIgDABg");
	this.shape.setTransform(1.5,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,3.2,5.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB9C94").s().p("AgLAbIgEgBIAJgHIAFgHIACgJIABgJIAAgKIgCgLIACACQAEACADAEQAJALgDAOIgDAIQgBADgDADQgCADgEACIgFACIgFAAg");
	this.shape_1.setTransform(1.6,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,3.1,5.5), null);


(lib.AS_LG_150Botónpaginación = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,153,0,0.549)","rgba(255,153,0,0.008)"],[0,1],18.7,0,-18.6,0).s().p("Ai5RMMAAAgiXIFzAAMAAAAiXg");
	this.shape.setTransform(-15.1,-129.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#793A26").s().p("AqyRYMAAAgivIVlAAMAAAAivg");
	this.shape_1.setTransform(-63.4,-128.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.TurnPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// page
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],86.5,-12.2,-95.5,-12.2).s().p("AKRQ2QrXghsZAtMAABghoIFHgaQLKgnKtBAMAAAAh3g");
	this.shape.setTransform(-86.7,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],87.6,-6.4,-94.4,-6.4).s().p("AKpRiQr0hxsfBZMABQgjGIEpgMQO+AYGeCDMAAAAh2g");
	this.shape_1.setTransform(-87.8,-10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],88.7,0.1,-93.3,0.1).s().p("ALCSVQsRjAsmCEMACfgkiIELAAQSzBYCPDFMgABAh2g");
	this.shape_2.setTransform(-89,-16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],90,10.8,-86.1,1.1).s().p("AJ+SnQr/jJrKAgQC2wkEDw3IC3hrIAagOQJrgHECECQB9ByAfB8IAEekIglAgIipgwg");
	this.shape_3.setTransform(-84.8,-20.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],91.3,21.1,-78.8,1.5).s().p("AsgOdQE/wtICxbQI9hAC5GuMAAKAhxQt2kHrLhQg");
	this.shape_4.setTransform(-80.7,-23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],78.8,16.4,-67.5,1).s().p("Aq+PuQFdwCG9wZQCahnB4g7QDrAxBVEJIAHBAIAKfIQhIAthFAwQqViRpbhRg");
	this.shape_5.setTransform(-70.9,-23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],66.2,9.7,-56.4,-1.4).s().p("ApcQrMAN7gkTQD9ASA2FSMAALAhtg");
	this.shape_6.setTransform(-61.1,-21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],63.4,5.1,-56.9,-29.3).s().p("AuCNvQMUwLL1wlQC1ghBHC1MgJnAj0g");
	this.shape_7.setTransform(-13.1,-18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],60,3.2,-57.9,-54.5).s().p("AytLOQRquNQtvAQBshUBYAZMgTYAl7g");
	this.shape_8.setTransform(35.3,-17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FEE0AF","#FFEFDF"],[0,0.2],60,2.9,-57.9,-54.8).s().p("AytLLMAlbgeIMgTYAl7g");
	this.shape_9.setTransform(35.3,-17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FEE0AF","#FFEDDA"],[0,0.38],34.1,2.2,-32.8,-34.5).s().p("AqSE0QIaltHDlyIAVgLQCbhqCYhrQjkG4jxGzIh3DXIgKARIh+DEIpRlYg");
	this.shape_10.setTransform(95.3,35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FEE0AF","#FFEAD5"],[0,0.561],5.3,3.4,-10.6,-12.4).s().p("AhqC7IgskKQDpg1A/g9IAFAGQhPCwiFCcIgtAxg");
	this.shape_11.setTransform(158.2,85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.1,-114.8,172.8,220.8);


(lib.instruccionclic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Capa 3
	this.text = new cjs.Text("Haz clic en las páginas del libro", "16px 'Arial'");
	this.text.lineHeight = 20;
	this.text.lineWidth = 345;
	this.text.parent = this;
	this.text.setTransform(47.1,10.3);
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


(lib.Pages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Page("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.8,-1.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFCC").ss(1,1,1).p("AgwQqIABAAIBkAcAgvQqIAAgFMgAFghq");
	this.shape.setTransform(85.6,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFEFDF","#FFECD9","#FDDAA2"],[0,0.063,1],0,-2.7,0,4.2).s().p("AuTAqIAAgjQAEgCGrgiQGsgjNmBHIAAAAIBmAcIgCAHg");
	this.shape_1.setTransform(-0.7,107.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFEFDF","#FFECD9","#FDDAA2"],[0,0.063,1],-6,0,6.1,0).s().p("Ag1QpIAAAAIgBAAMgAFghqIAAgFIB2ATIABAAMgAKAh6g");
	this.shape_2.setTransform(86.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.3,-112,184.6,224.4);


(lib.OpenBook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pages
	this.instance = new lib.Pages("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-86.7,-15,1,1,0,0,180);

	this.instance_1 = new lib.Pages("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.3,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Back-Cover
	this.instance_2 = new lib.Corner("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-180,92.4,1,1,180);

	this.instance_3 = new lib.Corner("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-180,-116.6,1,1,0,0,180);

	this.instance_4 = new lib.Corner("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(191,92.4,1,1,0,180,0);

	this.instance_5 = new lib.Corner("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(191,-116.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#743A01","#996633","#743A01"],[0,0.478,1],97.9,116.6,-93.5,-116.6).s().p("AuUScMAAAgk3IcpAAMAAAAk3g");
	this.shape.setTransform(-101.8,-12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AiLSkIAAgGMAAAgk3IAAgKIEXAAIAAAKMAAAAk3IAAAGg");
	this.shape_1.setTransform(4,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#743A01","#996633","#743A01"],[0,0.478,1],94.8,116.6,-96.6,-116.6).s().p("AuhScMAAAgk3IdDAAMAAAAk3g");
	this.shape_2.setTransform(110.9,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.3,-131.1,399.5,238);


(lib.LeftInsideCover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Corner("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-169,92.4,1,1,180);

	this.instance_1 = new lib.Corner("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-169,-116.6,1,1,0,0,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#743A01","#996633","#743A01"],[0,0.478,1],97.9,116.6,-93.5,-116.6).s().p("AuUScMAAAgk3IcpAAMAAAAk3g");
	this.shape.setTransform(-90.8,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.3,-131.1,184.3,238);


(lib.Cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// left-emboss
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#996633","#743A01","#743A01","#996633"],[0,0.518,0.753,1],-3,0,3,0).s().p("AgdSaMAAAgkzIA7AAMAAAAkzg");
	this.shape.setTransform(4.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// title-dark
	this.text = new cjs.Text("", "48px 'ComicSansMS'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 69;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(93.6,-101.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// title-light
	this.text_1 = new cjs.Text("\n\nHabía\nuna vez...", "23px 'Comic Sans MS'", "#CC9966");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 34;
	this.text_1.lineWidth = 130;
	this.text_1.parent = this;
	this.text_1.setTransform(93.6,-103.1);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1));

	// corners
	this.instance = new lib.Corner("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(175,104.4,1,1,0,180,0);

	this.instance_1 = new lib.Corner("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(174.8,-104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// cover
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#743A01","#996633","#743A01"],[0,0.478,1],95.7,116.6,-95.6,-116.6).s().p("AurScMAAAgk3IdXAAMAAAAk3g");
	this.shape_1.setTransform(94,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-118.5,189.2,237.4);


(lib.av02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AngHgQjHjHAAkZQAAkYDHjIQDIjHEYAAQEZAADHDHQDIDIAAEYQAAEZjIDHQjHDIkZAAQkYAAjIjIg");
	mask.setTransform(68,68);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6AUQgSgKgGgJQAnAHAXgCQAygEA0giQgIAWgbATQgdAXgdABIgCAAQgXAAgWgNg");
	this.shape.setTransform(69.5,80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A2742").s().p("AhbgJIAPAFQAUAEAVAAQBDAAA8gwQgVAwgiAbQgZAWgXAAQgpAAgng6g");
	this.shape_1.setTransform(69.6,80.9);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(67.2,70.7,1,1,0,0,0,1.2,2.3);
	this.instance.alpha = 0.602;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#833223").s().p("AA5AfIgbgbQgPgNgSgBQgPAAgWAMIgVANQgJAHgDAAIAJgPIALgNQAMgMAHgEQAJgFASgDQAigFAcAVQAPANADAMQACAKgHAHQgEAEgDAAIgEgBg");
	this.shape_2.setTransform(56.7,48.7);

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(73.3,58.5,1,1,0,0,0,2.3,2.5);
	this.instance_1.alpha = 0.602;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#833223").s().p("AhFAQQgIgJgBgLQgBgGAEgGQAEgFAGAAQAGgBAFAEIADAFIABADIACADIAFABQARABAKgDIAagLQAQgGANACQALACAMAJIARAUQgMgGgQgCQgGgBgSADIgXAHIglALIgPAEIgCAAQgMAAgHgIg");
	this.shape_3.setTransform(81,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#42210B").s().p("AgBAhQgJgBgGgKQgFgKAAgMQABgOAHgJQAGgJAIAAQAJABAGAJQAGAKgBANQAAANgHAKQgGAJgIAAIgBAAg");
	this.shape_4.setTransform(79.7,61);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42210B").s().p("AgOAYQgGgKgBgNQAAgNAGgKQAFgJAKgBQAHAAAHAJQAHAJAAAOQABANgGAKQgGAJgJABIgBAAQgHAAgHgJg");
	this.shape_5.setTransform(59.3,61);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#833223").s().p("AhfgGIAfgDQAhgIAOgaIAiAAQAPAaAhAIQARAEAOgBQg7AoglAKQgkgKg7gog");
	this.shape_6.setTransform(69,92.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#833223").s().p("AhmB8QgsgfgigzQgNgSgPgxQgTg8AAgsIAAgdQABAqASA5QAPAzANARQAiAzAsAeQAzAkA1AAQBiAABRh1QANgSAPgyQASg5ABgqIAAAdQAAAsgTA8QgPAxgNASQhQB1hjAAQg1AAgzgjg");
	this.shape_7.setTransform(68.9,78.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#833223").s().p("AC2ArQgjAhgnAgQhNBAgSgDQgRgDAGgXIALgXQgaASggAHQg+AOgXg1QgEAFgGACQgNAEgKgLQgPAQgUANQgqAcgdgIQgMgKgGgaQgKg0AjhOIgagDQAPg2A5gdQAcgOAZgDQgCgFgHgEQgMgJgTADIAQgNQAVgPAZgJQBSgcBiArIAAgqIASACQAWAFAUAJQBBAcASA+IAgAPQAkAVARAhQAYAugBA1QgBA/goAyg");
	this.shape_8.setTransform(69.6,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD4BA").s().p("AhlERQgsgegjgzQgNgTgPgxQgTg8AAgsQAAhrADgsQAGhWASgjQAZgsBEgKQAQgCBbAAQBcAAAQACQBEAKAZAsQASAjAGBWQADAsAABrQAAArgTA9QgPAxgNATQhQB1hjAAQg1AAgygkg");
	this.shape_9.setTransform(68.9,63.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D1C13").s().p("AgBFoQhmgKhZirQhRidAAiDQAAh2BQhEQBKhAB2ABIADAAQB2gBBKBAQBQBEAAB2QAACDhRCdQhZCrhmAKg");
	this.shape_10.setTransform(69.1,55.4);

	this.instance_2 = new lib.Path_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.9,68.2,1,1,0,0,0,3.8,7.2);
	this.instance_2.alpha = 0.602;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD4BA").s().p("AAaBrQgIAAgUgaQgUgXgOgWQgOgWgEgjQgFgnAMgeQAKgaAXAQQALAIAJANIAzCrQgQAPgOAAIgBAAg");
	this.shape_11.setTransform(44.9,67.9);

	this.instance_3 = new lib.Path();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92.5,68.2,1,1,0,0,0,3.8,7.2);
	this.instance_3.alpha = 0.602;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD4BA").s().p("Ag4BcIAzirIAUgVQAXgQAKAaQAMAegEAnQgFAigOAXQgOAXgTAWQgVAagIAAIgBAAQgOAAgQgPg");
	this.shape_12.setTransform(93.4,67.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#232B53").s().p("AguGsQgWgEgXgIIgUgHQAEgsAfjgQAcjPAFhIQAOiyA6hMQATgYAVgLIARgGIAaElQgJAlgmEQIglEJIgGAAQgjAAghgGg");
	this.shape_13.setTransform(28.1,147.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E6").s().p("AgsAXIgWgKIAIgvQBBAIA8AEIgKA5QhCgDgjgJg");
	this.shape_14.setTransform(23.9,190.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19233F").s().p("AgSAqQgZgZgGgKIADgwIAdARQAjAQAhgCIgNA0QgmgHgSAHg");
	this.shape_15.setTransform(39.2,174.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#19233F").s().p("AgjgOIAfgMQgdghgUgCIAbg9QAcg/AEgGQAJgNAVgIQAKgFAIgBIhCG1g");
	this.shape_16.setTransform(55.2,118.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#232B53").s().p("AgzHaIhFgcQAakaACg8IAIjAQAHiYgBgIQgCgQACivQAqgSBSgTQApgJAigGIg+PSQgMAFgQAAQgfAAgzgSg");
	this.shape_17.setTransform(44.4,148.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#232B53").s().p("AhviMIAZklIASAGQAVALATAYQA6BMAOCyQAFBIAcDPQAfDgAEAsQgeANgjAGQgVAEgcACIgZAAQhFoCgPg8g");
	this.shape_18.setTransform(107.9,147.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AhCgWIAmgDIBWgJIAJAvQgEAFgSAEQgjAKhCADg");
	this.shape_19.setTransform(112.1,190.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#19233F").s().p("AgQAnIgVADIgNg0QAhACAjgQQASgIALgJIADAwQgGAKgZAZQgMgEgXABg");
	this.shape_20.setTransform(96.8,174.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#19233F").s().p("Ag1jaIASAGQAVAIAJANQAEAGAcA/IAbA9QgMACgUARIgRAQIAfAMIgWDpg");
	this.shape_21.setTransform(80.8,118.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#232B53").s().p("Ag6HnIg+vSIBLAPQBTATApASQACCvgCAQQgBAIAHCYIAIDAQACA8AaEaQgfAPgmANQgzASgfAAQgQAAgMgFg");
	this.shape_22.setTransform(91.5,148.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_23.setTransform(68.9,167.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_24.setTransform(68.9,157.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_25.setTransform(68.9,146.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_26.setTransform(68.9,136.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#15162A").s().p("AjtFNIATqWIDlDnIDjjuIgBKhg");
	this.shape_27.setTransform(67.8,142.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E6E6").s().p("AgRANIgkgOQAagEAWgdIASgcQADgDATAXIATAYIglBRQABgdgjgVg");
	this.shape_28.setTransform(74.1,102.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E6E6").s().p("Ag1gSIAQgYQASgYAEAFIATAcQAZAdAZADIgkAOQgjAVACAdg");
	this.shape_29.setTransform(62.4,102.8);

	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(63.4,136.1,1,1,0,0,0,26.1,50.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7F3943").s().p("AAAAgQgfgDgcgxIAPgKIARAUQATATAIACQAQgDAcgnIAQALQgcAxggADg");
	this.shape_30.setTransform(68.5,103.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AhnF8Qg1gGgWgHQgVgGgag8QgdhBAEg3QADgygWjcIgYjTIDMhNIAmAMIA7ASQARAEAugTQAWgKATgKICzAqQAIACgPBQQgSBgABAiQADBaABBkQACCPgGAdQgHAhgYAvQgYAugNAHQgJAFg0gCIhEgDQghADg1ALQgLACgSAAQgXAAgjgDg");
	this.shape_31.setTransform(66.8,137.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCA88D").s().p("AALA1Qg6gSgagiIACg4ICOABIgBAhQgBAlAFAbQgSANgVAAQgLAAgNgDg");
	this.shape_32.setTransform(68.2,94.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFD4BA").s().p("AiGA2IAagGQAbgLAFgcQAFgbABgmIAAggICNAAIAAAgQABAmAFAbQAFAcAbALQANAGANAAIiHAjg");
	this.shape_33.setTransform(68,98.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.instance,this.shape_2,this.instance_1,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.instance_2,this.shape_11,this.instance_3,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.instance_4,this.shape_30,this.shape_31,this.shape_32,this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_4},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_3},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 3
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#99CCFF").s().p("AngHgQjHjHAAkZQAAkYDHjIQDIjHEYAAQEZAADHDHQDIDIAAEYQAAEZjIDHQjHDIkZAAQkYAAjIjIg");
	this.shape_34.setTransform(68,68);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

}).prototype = getMCSymbolPrototype(lib.av02, new cjs.Rectangle(0,0,136,136), null);


(lib.av01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AngHgQjHjHAAkZQAAkYDHjIQDHjHEZAAQEZAADHDHQDIDIAAEYQAAEZjIDHQjHDIkZAAQkZAAjHjIg");
	mask.setTransform(73,68);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A2742").s().p("AgIAUQgEgIgBgMQABgLAEgIQADgJAFAAQAGAAAEAJQADAIAAALQAAAMgDAIQgEAJgGAAQgFAAgDgJg");
	this.shape.setTransform(71.9,82.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB9C94").s().p("AgSAAIgHgEIAJAAIAIAAIAWAAIAEAAIAGAAIACgBIgBACIgFAEIgEACIgFABIgLACQgKgBgIgFg");
	this.shape_1.setTransform(71.8,87);

	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(78.1,52.5,1,1,0,0,0,1.5,2.7);
	this.instance.alpha = 0.602;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#833223").s().p("AABAbQgngHgbgVQgRgNAHgJQAEgFAJgBQAIgBAGAFIAPALIAPALQAQAIAiAKIAeAGIAQADQAAABgMACIgTADIgJAAQgTAAgSgDg");
	this.shape_2.setTransform(86.3,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#42210B").s().p("AAAAfQgJAAgFgJQgGgKAAgMQABgNAHgJQAGgJAIABQAIAAAGAJQAGAKgBAMQgBANgGAJQgGAJgIAAIAAgBg");
	this.shape_3.setTransform(82.9,60.7);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65.6,52.4,1,1,0,0,0,1.6,2.8);
	this.instance_1.alpha = 0.602;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#833223").s().p("AguAeIgTgDIgMgDIAQgDQAUgDAKgDQAigKARgIQAJgGAUgQQAGgFAJABQAIABAEAFQAHAJgRANQgQAMgSAHQgMAFgUAEQgTADgRAAIgKAAg");
	this.shape_4.setTransform(57.4,53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#42210B").s().p("AgMAXQgHgJgBgNQAAgMAGgKQAFgJAJgBQAHAAAHAJQAGAKABAMQABAMgGAJQgGAKgJAAIgBABQgHAAgFgJg");
	this.shape_5.setTransform(60.8,60.4);

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71,70,1,1,0,0,0,1.2,2.3);
	this.instance_2.alpha = 0.602;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#833223").s().p("AhfgGIAfgDQAhgIAOgaIAiAAQAPAaAhAIQARAEAOgBQg7AoglAKQgkgKg7gog");
	this.shape_6.setTransform(72,92.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#833223").s().p("AhmB8QgsgfgigzQgNgSgPgxQgTg8AAgsIAAgdQABAqASA5QAPAzANARQAiAzAsAeQAzAkA1AAQBiAABRh1QANgSAPgyQASg5ABgqIAAAdQAAAsgTA8QgPAxgNASQhQB1hjAAQg1AAgzgjg");
	this.shape_7.setTransform(71.9,78.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#833223").s().p("AC2ArQgjAhgnAgQhNBAgSgDQgRgDAGgXIALgXQgaASggAHQg/AOgXg1QgEAFgGACQgMAEgKgLQgPAQgUANQgqAcgdgIQgMgKgGgaQgKg0AjhOIgagDQAPg2A5gdQAcgOAZgDQgCgFgHgEQgMgJgTADIAQgNQAVgPAZgJQBSgcBiArIAAgqIASACQAWAFAUAJQBAAcATA+IAgAPQAkAVARAhQAYAugBA1QgBA/goAyg");
	this.shape_8.setTransform(72.6,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD4BA").s().p("AhmERQgsgegigzQgNgSgPgyQgTg8AAgsQAAhrADgsQAGhWASgiQAZgtBEgKQAQgCBbAAQBcAAAQACQBEAKAZAtQASAiAGBWQADAsAABrQAAArgTA9QgPAxgNATQhQB0hjABQg1AAgzgkg");
	this.shape_9.setTransform(71.9,63.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5D1C13").s().p("AgBFoQhmgJhZisQhRidAAiEQAAh0BQhEQBKhAB2AAIADAAQB2AABKBAQBQBEAAB0QAACEhRCdQhZCshmAJg");
	this.shape_10.setTransform(72.1,55.4);

	this.instance_3 = new lib.Path_0_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(48.9,68.2,1,1,0,0,0,3.8,7.2);
	this.instance_3.alpha = 0.602;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD4BA").s().p("AAaBrQgIAAgUgaQgUgXgOgWQgOgWgEgjQgFgnAMgeQAKgaAXAQQALAIAJANIAzCrQgQAPgOAAIgBAAg");
	this.shape_11.setTransform(47.9,67.9);

	this.instance_4 = new lib.Path_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(95.5,68.2,1,1,0,0,0,3.8,7.2);
	this.instance_4.alpha = 0.602;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD4BA").s().p("Ag4BcIAzirIAUgVQAXgQAKAaQAMAegFAnQgEAjgOAWQgOAXgTAWQgVAagIAAIgBAAQgOAAgQgPg");
	this.shape_12.setTransform(96.4,67.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#232B53").s().p("AguGsQgWgEgXgIIgUgHQAEgsAfjgQAcjPAFhIQAOiyA6hMQATgYAVgLIARgGIAaElQgJAlgmEQIglEJIgGAAQgjAAghgGg");
	this.shape_13.setTransform(31.1,147.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E6").s().p("AgsAXIgWgKIAIgvQBBAIA8AEIgKA5QhCgDgjgJg");
	this.shape_14.setTransform(26.9,190.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#19233F").s().p("AgSAqQgZgZgGgKIADgwIAdARQAjAQAhgCIgNA0QgmgHgSAHg");
	this.shape_15.setTransform(42.2,174.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#19233F").s().p("AgjgOIAfgMQgdghgUgCIAbg9QAcg/AEgGQAJgNAVgIQAKgFAIgBIhCG1g");
	this.shape_16.setTransform(58.2,118.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#232B53").s().p("AgzHaIhFgcQAakaACg8IAIjAQAHiYgBgIQgCgQACivQAqgSBSgTQApgJAigGIg+PSQgMAFgQAAQgfAAgzgSg");
	this.shape_17.setTransform(47.4,148.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#232B53").s().p("AhviMIAZklIASAGQAVALATAYQA6BMAOCyQAFBIAcDPQAfDgAEAsQgeANgjAGQgVAEgcACIgZAAQhFoCgPg8g");
	this.shape_18.setTransform(110.9,147.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("AhCgWIAmgDIBWgJIAJAvQgEAFgSAEQgjAKhCADg");
	this.shape_19.setTransform(115.1,190.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#19233F").s().p("AgQAnIgVADIgNg0QAhACAjgQQASgIALgJIADAwQgGAKgZAZQgMgEgXABg");
	this.shape_20.setTransform(99.8,174.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#19233F").s().p("Ag1jaIASAGQAVAIAJANQAEAGAcA/IAbA9QgMACgUARIgRAQIAfAMIgWDpg");
	this.shape_21.setTransform(83.8,118.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#232B53").s().p("Ag6HnIg+vSIBLAPQBTATApASQACCvgCAQQgBAIAHCYIAIDAQACA8AaEaQgfAPgmANQgzASgfAAQgQAAgMgFg");
	this.shape_22.setTransform(94.5,148.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_23.setTransform(71.9,167.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_24.setTransform(71.9,157.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_25.setTransform(71.9,146.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#232B53").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_26.setTransform(71.9,136.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#15162A").s().p("AjtFNIATqWIDlDnIDjjuIgBKhg");
	this.shape_27.setTransform(70.8,142.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E6E6E6").s().p("AgRANIgkgOQAagEAWgdIASgcQADgDATAXIATAYIglBRQABgdgjgVg");
	this.shape_28.setTransform(77.1,102.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E6E6").s().p("Ag1gSIAQgYQASgYAEAFIATAcQAZAdAZADIgkAOQgjAVACAdg");
	this.shape_29.setTransform(65.4,102.8);

	this.instance_5 = new lib.ClipGroup();
	this.instance_5.parent = this;
	this.instance_5.setTransform(66.4,136.1,1,1,0,0,0,26.1,50.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7F3943").s().p("AAAAgQgfgDgcgxIAPgKIARAUQATATAIACQAQgDAcgnIAQALQgcAxggADg");
	this.shape_30.setTransform(71.5,103.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2F2F2").s().p("AhnF8Qg1gGgWgHQgVgGgag8QgdhBAEg3QADgygWjcIgYjTIDMhNIAmAMIA7ASQARAEAugTQAWgKATgKICzAqQAIACgPBQQgSBgABAiQADBaABBkQACCPgGAdQgHAhgYAvQgYAugNAHQgJAFg0gCIhEgDQghADg1ALQgLACgSAAQgXAAgjgDg");
	this.shape_31.setTransform(69.8,137.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCA88D").s().p("AALA1Qg6gSgagiIACg4ICOABIgBAhQgBAlAFAbQgSANgVAAQgLAAgNgDg");
	this.shape_32.setTransform(71.2,94.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFD4BA").s().p("AiGA2IAagGQAbgLAFgcQAFgbABgmIAAggICNAAIAAAgQABAmAFAbQAFAcAbALQANAGANAAIiHAjg");
	this.shape_33.setTransform(71,98.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.instance,this.shape_2,this.shape_3,this.instance_1,this.shape_4,this.shape_5,this.instance_2,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.instance_3,this.shape_11,this.instance_4,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.instance_5,this.shape_30,this.shape_31,this.shape_32,this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_5},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_4},{t:this.shape_11},{t:this.instance_3},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_2},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 3
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCFF").s().p("AngHgQjHjHAAkZQAAkYDHjIQDHjHEZAAQEZAADHDHQDIDIAAEYQAAEZjIDHQjHDIkZAAQkZAAjHjIg");
	this.shape_34.setTransform(73,68);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(1));

}).prototype = getMCSymbolPrototype(lib.av01, new cjs.Rectangle(5,0,136,136), null);


(lib.CloseBook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// opening page
	this.instance = new lib.Pages("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-10.3,-37,0.122,1,0,0,-150.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(1).to({scaleX:0.27,skewY:-155.2,x:-22.7,y:-41.3},0).wait(1).to({scaleX:0.41,skewY:-160.2,x:-37.7,y:-42.8},0).wait(1).to({scaleX:0.56,skewY:-165.2,x:-51.3,y:-43.7},0).wait(1).to({scaleX:0.71,skewY:-170.2,x:-65.1,y:-41.4},0).wait(1).to({scaleX:0.85,skewY:-175.2,x:-78.8,y:-37.2},0).wait(1).to({scaleX:1,skewY:-180,x:-92.5,y:-31},0).wait(1));

	// opening book
	this.instance_1 = new lib.Cover("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.9,-28.8);

	this.instance_2 = new lib.LeftInsideCover("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.3,-17.9,0.143,1,0,0,16.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({startPosition:0},0).to({scaleX:0.14,skewY:-15,x:1.9},7).to({_off:true},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({scaleX:1,skewY:0,x:-16.4,y:-15.9},6).wait(1));

	// book marker mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("Ao9F8IAAr3IR7AAIAAL3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:45.5,y:117.3}).wait(6).to({graphics:null,x:0,y:0}).wait(9));

	// book inside mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_24 = new cjs.Graphics().p("Au+SqMAAAglTId9AAMAAAAlTg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AvESqMAAAglTIeJAAMAAAAlTg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AvHSqMAAAglTIePAAMAAAAlTg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AvRSqMAAAglTIejAAMAAAAlTg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AvUSqMAAAglTIepAAMAAAAlTg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AvXSqMAAAglTIevAAMAAAAlTg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AvdSqMAAAglTIe7AAMAAAAlTg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AvhSqMAAAglTIfDAAMAAAAlTg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AvxSqMAAAglTIfjAAMAAAAlTg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AwASqMAAAglTMAgBAAAMAAAAlTg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AwKSqMAAAglTMAgVAAAMAAAAlTg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AwWSqMAAAglTMAgtAAAMAAAAlTg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AwmSqMAAAglTMAhNAAAMAAAAlTg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AwvSqMAAAglTMAhfAAAMAAAAlTg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Aw8SqMAAAglTMAh5AAAMAAAAlTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_1_graphics_24,x:104.8,y:-28.6}).wait(1).to({graphics:mask_1_graphics_25,x:104.2,y:-28.6}).wait(1).to({graphics:mask_1_graphics_26,x:103.9,y:-28.6}).wait(1).to({graphics:mask_1_graphics_27,x:102.9,y:-28.6}).wait(1).to({graphics:mask_1_graphics_28,x:102.6,y:-28.6}).wait(1).to({graphics:mask_1_graphics_29,x:102.3,y:-28.6}).wait(1).to({graphics:mask_1_graphics_30,x:101.7,y:-28.6}).wait(1).to({graphics:mask_1_graphics_31,x:101.3,y:-28.6}).wait(1).to({graphics:mask_1_graphics_32,x:99.7,y:-28.6}).wait(1).to({graphics:mask_1_graphics_33,x:98.2,y:-28.6}).wait(1).to({graphics:mask_1_graphics_34,x:97.2,y:-28.6}).wait(1).to({graphics:mask_1_graphics_35,x:96,y:-28.6}).wait(1).to({graphics:mask_1_graphics_36,x:94.4,y:-28.6}).wait(1).to({graphics:mask_1_graphics_37,x:93.5,y:-28.6}).wait(1).to({graphics:mask_1_graphics_38,x:92.2,y:-28.6}).wait(1));

	// book inside
	this.instance_3 = new lib.OpenBook("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.4,-16);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.9,-147.2,189.2,237.3);


(lib.tcClassicBook = function(mode,startPosition,loop) {
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
		this.btn_siguiente.removeAllEventListeners();
		this.btn_atras.removeAllEventListeners();
		init();
		function init() {
			///FORWARD
			root.btn_siguiente.addEventListener("mousedown", playForwards);
			function playForwards() {
				root.forward = true;
				root.btn_atras.mouseEnabled = false;
				root.btn_siguiente.mouseEnabled = false;
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
			root.btn_atras.addEventListener("click", playReverse);
			function playReverse() {
				root.btn_atras.mouseEnabled = false;
				root.btn_siguiente.mouseEnabled = false;
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
	this.frame_40 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente.mouseEnabled=true;
	}
	this.frame_53 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente.mouseEnabled=true;
		this.btn_atras.mouseEnabled=true;
	}
	this.frame_66 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente.mouseEnabled=true;
		this.btn_atras.mouseEnabled=true;
	}
	this.frame_79 = function() {
		this.stop();
		this.rewind=false;
		this.forward=false;
		this.btn_siguiente.mouseEnabled=true;
		this.btn_atras.mouseEnabled=true;
		
		
		try{
			parent.final_tema();
		}catch(err){
			console.log(" El tema esta corriendo stand alone. FINAL TEMA")
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(13).call(this.frame_53).wait(13).call(this.frame_66).wait(13).call(this.frame_79).wait(14));

	// btn atras
	this.btn_atras = new lib.AS_LG_150Botónpaginación();
	this.btn_atras.parent = this;
	this.btn_atras.setTransform(-172.7,120.7,1,1,0,0,180);
	this.btn_atras._off = true;
	new cjs.ButtonHelper(this.btn_atras, 0, 1, 2, false, new lib.AS_LG_150Botónpaginación(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_atras).wait(53).to({_off:false},0).to({_off:true},39).wait(1));

	// btn next
	this.btn_siguiente = new lib.AS_LG_150Botónpaginación();
	this.btn_siguiente.parent = this;
	this.btn_siguiente.setTransform(186.2,118.6);
	this.btn_siguiente._off = true;
	new cjs.ButtonHelper(this.btn_siguiente, 0, 1, 2, false, new lib.AS_LG_150Botónpaginación(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_siguiente).wait(40).to({_off:false},0).to({_off:true},39).wait(14));

	// page anims
	this.instance = new lib.TurnPage("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.2,-9.7,1,1,0,0,180);
	this.instance.alpha = 0.828;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).wait(13).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(13));

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("Ag1RAMAAAgh/IBrAAMAAAAh/g");
	var mask_graphics_26 = new cjs.Graphics().p("AirRAMAAAgh/IFXAAMAAAAh/g");
	var mask_graphics_27 = new cjs.Graphics().p("AkgRAMAAAgh/IJBAAMAAAAh/g");
	var mask_graphics_28 = new cjs.Graphics().p("AmVRAMAAAgh/IMrAAMAAAAh/g");
	var mask_graphics_29 = new cjs.Graphics().p("AoLRAMAAAgh/IQXAAMAAAAh/g");
	var mask_graphics_30 = new cjs.Graphics().p("AqARAMAAAgh/IUBAAMAAAAh/g");
	var mask_graphics_31 = new cjs.Graphics().p("Ar2RAMAAAgh/IXtAAMAAAAh/g");
	var mask_graphics_32 = new cjs.Graphics().p("AtrRAMAAAgh/IbXAAMAAAAh/g");
	var mask_graphics_33 = new cjs.Graphics().p("AvhRAMAAAgh/IfCAAMAAAAh/g");
	var mask_graphics_34 = new cjs.Graphics().p("AxWRAMAAAgh/MAitAAAMAAAAh/g");
	var mask_graphics_35 = new cjs.Graphics().p("AzLRAMAAAgh/MAmXAAAMAAAAh/g");
	var mask_graphics_36 = new cjs.Graphics().p("A1BRAMAAAgh/MAqDAAAMAAAAh/g");
	var mask_graphics_37 = new cjs.Graphics().p("A22RAMAAAgh/MAttAAAMAAAAh/g");
	var mask_graphics_38 = new cjs.Graphics().p("A4sRAMAAAgh/MAxYAAAMAAAAh/g");
	var mask_graphics_39 = new cjs.Graphics().p("A6hRAMAAAgh/MA1DAAAMAAAAh/g");
	var mask_graphics_40 = new cjs.Graphics().p("A8WRAMAAAgh/MA4tAAAMAAAAh/g");
	var mask_graphics_41 = new cjs.Graphics().p("A6FRAMAAAgh/MA0LAAAMAAAAh/g");
	var mask_graphics_42 = new cjs.Graphics().p("A30RAMAAAgh/MAvpAAAMAAAAh/g");
	var mask_graphics_43 = new cjs.Graphics().p("A1jRAMAAAgh/MArHAAAMAAAAh/g");
	var mask_graphics_44 = new cjs.Graphics().p("AzSRAMAAAgh/MAmlAAAMAAAAh/g");
	var mask_graphics_45 = new cjs.Graphics().p("AxARAMAAAgh/MAiBAAAMAAAAh/g");
	var mask_graphics_46 = new cjs.Graphics().p("AuvRAMAAAgh/IdfAAMAAAAh/g");
	var mask_graphics_47 = new cjs.Graphics().p("AseRAMAAAgh/IY9AAMAAAAh/g");
	var mask_graphics_48 = new cjs.Graphics().p("AqNRAMAAAgh/IUbAAMAAAAh/g");
	var mask_graphics_49 = new cjs.Graphics().p("An8RAMAAAgh/IP4AAMAAAAh/g");
	var mask_graphics_50 = new cjs.Graphics().p("AlrRAMAAAgh/ILWAAMAAAAh/g");
	var mask_graphics_51 = new cjs.Graphics().p("AjZRAMAAAgh/IGzAAMAAAAh/g");
	var mask_graphics_52 = new cjs.Graphics().p("AhIRAMAAAgh/ICRAAMAAAAh/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:184.2,y:-9.2}).wait(1).to({graphics:mask_graphics_26,x:172.5,y:-9.2}).wait(1).to({graphics:mask_graphics_27,x:160.8,y:-9.2}).wait(1).to({graphics:mask_graphics_28,x:149,y:-9.2}).wait(1).to({graphics:mask_graphics_29,x:137.3,y:-9.2}).wait(1).to({graphics:mask_graphics_30,x:125.5,y:-9.2}).wait(1).to({graphics:mask_graphics_31,x:113.8,y:-9.2}).wait(1).to({graphics:mask_graphics_32,x:102.1,y:-9.2}).wait(1).to({graphics:mask_graphics_33,x:90.3,y:-9.2}).wait(1).to({graphics:mask_graphics_34,x:78.6,y:-9.2}).wait(1).to({graphics:mask_graphics_35,x:66.8,y:-9.2}).wait(1).to({graphics:mask_graphics_36,x:55.1,y:-9.2}).wait(1).to({graphics:mask_graphics_37,x:43.4,y:-9.2}).wait(1).to({graphics:mask_graphics_38,x:31.6,y:-9.2}).wait(1).to({graphics:mask_graphics_39,x:19.9,y:-9.2}).wait(1).to({graphics:mask_graphics_40,x:8.1,y:-9.2}).wait(1).to({graphics:mask_graphics_41,x:-6.4,y:-9.2}).wait(1).to({graphics:mask_graphics_42,x:-20.9,y:-9.2}).wait(1).to({graphics:mask_graphics_43,x:-35.4,y:-9.2}).wait(1).to({graphics:mask_graphics_44,x:-49.9,y:-9.2}).wait(1).to({graphics:mask_graphics_45,x:-64.5,y:-9.2}).wait(1).to({graphics:mask_graphics_46,x:-79,y:-9.2}).wait(1).to({graphics:mask_graphics_47,x:-93.5,y:-9.2}).wait(1).to({graphics:mask_graphics_48,x:-108,y:-9.2}).wait(1).to({graphics:mask_graphics_49,x:-122.5,y:-9.2}).wait(1).to({graphics:mask_graphics_50,x:-137,y:-9.2}).wait(1).to({graphics:mask_graphics_51,x:-151.6,y:-9.2}).wait(1).to({graphics:mask_graphics_52,x:-166.1,y:-9.2}).wait(41));

	// pagina 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94602C").s().p("AAcA4QgGgBgDgDIgMgNIAOgPIAHAIQADADADgBIACgCIAVgVIAVAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIAAACIgkAjQgGAHgHAAIgFgBgAgqAwIgigjQgIgJAEgJIAFgIIAlglQAKgIAKADIAHAEIAMAOIgOANIgIgIQgDgCgDACIgdAdQgDADABABIACADIAVAVIAAAVQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgEgBgAgMAwIgBgCIAAgVIAVgVQADgDgCgCIgCgDIAOgOIAHAIQAGAJgDAIQgCAEgDADIggAhIgEACIgCgBgAgUAMQgGgJAEgKIAGgIIAjgjQAJgHAJACIAHAEIAmAkQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgDABIgUABIgVgWQgEgDgCABIgCACIgcAcQgDADADADIABACIgOAPg");
	this.shape.setTransform(98.7,-99.8);

	this.instance_1 = new lib.av01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88.9,0.2,1,1,0,0,0,68,98.8);

	this.text = new cjs.Text("Una visita inesperada", "bold 14px 'Arial'", "#793A26");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(-86.6,54.1);

	this.text_1 = new cjs.Text("Una mañana el gerente de la planta llega y se encuentra con la visita de las autoridades sanitarias que viene a una inspección.\n\nDesde hace meses las autoridades están recibiendo denuncias de algunos consumidores sobre productos contaminados.  \n", "italic 12px 'Arial'", "#793A26");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 165;
	this.text_1.parent = this;
	this.text_1.setTransform(99.5,-77.7);

	var maskedShapeInstanceList = [this.shape,this.instance_1,this.text,this.text_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.shape}]},25).to({state:[]},28).wait(40));

	// Capa 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_41 = new cjs.Graphics().p("Ag1RAMAAAgh/IBrAAMAAAAh/g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjIRAMAAAgh/IGRAAMAAAAh/g");
	var mask_1_graphics_43 = new cjs.Graphics().p("AlbRAMAAAgh/IK3AAMAAAAh/g");
	var mask_1_graphics_44 = new cjs.Graphics().p("AnuRAMAAAgh/IPcAAMAAAAh/g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AqARAMAAAgh/IUBAAMAAAAh/g");
	var mask_1_graphics_46 = new cjs.Graphics().p("AsTRAMAAAgh/IYnAAMAAAAh/g");
	var mask_1_graphics_47 = new cjs.Graphics().p("AumRAMAAAgh/IdNAAMAAAAh/g");
	var mask_1_graphics_48 = new cjs.Graphics().p("Aw4RAMAAAgh/MAhxAAAMAAAAh/g");
	var mask_1_graphics_49 = new cjs.Graphics().p("AzLRAMAAAgh/MAmXAAAMAAAAh/g");
	var mask_1_graphics_50 = new cjs.Graphics().p("A1eRAMAAAgh/MAq9AAAMAAAAh/g");
	var mask_1_graphics_51 = new cjs.Graphics().p("A3xRAMAAAgh/MAvjAAAMAAAAh/g");
	var mask_1_graphics_52 = new cjs.Graphics().p("A6ERAMAAAgh/MA0IAAAMAAAAh/g");
	var mask_1_graphics_53 = new cjs.Graphics().p("A8WRAMAAAgh/MA4tAAAMAAAAh/g");
	var mask_1_graphics_54 = new cjs.Graphics().p("A6FRAMAAAgh/MA0LAAAMAAAAh/g");
	var mask_1_graphics_55 = new cjs.Graphics().p("A30RAMAAAgh/MAvpAAAMAAAAh/g");
	var mask_1_graphics_56 = new cjs.Graphics().p("A1jRAMAAAgh/MArHAAAMAAAAh/g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AzSRAMAAAgh/MAmlAAAMAAAAh/g");
	var mask_1_graphics_58 = new cjs.Graphics().p("AxARAMAAAgh/MAiBAAAMAAAAh/g");
	var mask_1_graphics_59 = new cjs.Graphics().p("AuvRAMAAAgh/IdfAAMAAAAh/g");
	var mask_1_graphics_60 = new cjs.Graphics().p("AseRAMAAAgh/IY9AAMAAAAh/g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AqNRAMAAAgh/IUbAAMAAAAh/g");
	var mask_1_graphics_62 = new cjs.Graphics().p("An8RAMAAAgh/IP4AAMAAAAh/g");
	var mask_1_graphics_63 = new cjs.Graphics().p("AlrRAMAAAgh/ILWAAMAAAAh/g");
	var mask_1_graphics_64 = new cjs.Graphics().p("AjZRAMAAAgh/IGzAAMAAAAh/g");
	var mask_1_graphics_65 = new cjs.Graphics().p("AhIRAMAAAgh/ICRAAMAAAAh/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_1_graphics_41,x:184.2,y:-9.2}).wait(1).to({graphics:mask_1_graphics_42,x:169.6,y:-9.2}).wait(1).to({graphics:mask_1_graphics_43,x:154.9,y:-9.2}).wait(1).to({graphics:mask_1_graphics_44,x:140.2,y:-9.2}).wait(1).to({graphics:mask_1_graphics_45,x:125.5,y:-9.2}).wait(1).to({graphics:mask_1_graphics_46,x:110.9,y:-9.2}).wait(1).to({graphics:mask_1_graphics_47,x:96.2,y:-9.2}).wait(1).to({graphics:mask_1_graphics_48,x:81.5,y:-9.2}).wait(1).to({graphics:mask_1_graphics_49,x:66.8,y:-9.2}).wait(1).to({graphics:mask_1_graphics_50,x:52.2,y:-9.2}).wait(1).to({graphics:mask_1_graphics_51,x:37.5,y:-9.2}).wait(1).to({graphics:mask_1_graphics_52,x:22.8,y:-9.2}).wait(1).to({graphics:mask_1_graphics_53,x:8.1,y:-9.2}).wait(1).to({graphics:mask_1_graphics_54,x:-6.4,y:-9.2}).wait(1).to({graphics:mask_1_graphics_55,x:-20.9,y:-9.2}).wait(1).to({graphics:mask_1_graphics_56,x:-35.4,y:-9.2}).wait(1).to({graphics:mask_1_graphics_57,x:-49.9,y:-9.2}).wait(1).to({graphics:mask_1_graphics_58,x:-64.5,y:-9.2}).wait(1).to({graphics:mask_1_graphics_59,x:-79,y:-9.2}).wait(1).to({graphics:mask_1_graphics_60,x:-93.5,y:-9.2}).wait(1).to({graphics:mask_1_graphics_61,x:-108,y:-9.2}).wait(1).to({graphics:mask_1_graphics_62,x:-122.5,y:-9.2}).wait(1).to({graphics:mask_1_graphics_63,x:-137,y:-9.2}).wait(1).to({graphics:mask_1_graphics_64,x:-151.6,y:-9.2}).wait(1).to({graphics:mask_1_graphics_65,x:-166.1,y:-9.2}).wait(28));

	// pagina 2
	this.instance_2 = new lib.av01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88.9,0.2,1,1,0,0,0,68,98.8);

	this.text_2 = new cjs.Text("Una visita inesperada", "bold 14px 'Arial'", "#793A26");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 140;
	this.text_2.parent = this;
	this.text_2.setTransform(-86.6,54.1);

	this.text_3 = new cjs.Text("El gerente, preocupado pregunta a sus colaboradores si sabían algo de esto.\n\nAlgunos recuerdan que los asesores comerciales han comentado que algunos consumidores de esta bebida se quejan de un sabor extraño.\n\nEl gerente se siente confundido, era algo que no esperaba y no sabe cómo manejar.", "italic 12px 'Arial'", "#793A26");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.lineWidth = 168;
	this.text_3.parent = this;
	this.text_3.setTransform(98,-115.8);

	var maskedShapeInstanceList = [this.instance_2,this.text_2,this.text_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.instance_2}]},41).to({state:[]},25).wait(27));

	// Capa 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_54 = new cjs.Graphics().p("Ag1RAMAAAgh/IBrAAMAAAAh/g");
	var mask_2_graphics_55 = new cjs.Graphics().p("AjIRAMAAAgh/IGRAAMAAAAh/g");
	var mask_2_graphics_56 = new cjs.Graphics().p("AlbRAMAAAgh/IK3AAMAAAAh/g");
	var mask_2_graphics_57 = new cjs.Graphics().p("AnuRAMAAAgh/IPcAAMAAAAh/g");
	var mask_2_graphics_58 = new cjs.Graphics().p("AqARAMAAAgh/IUBAAMAAAAh/g");
	var mask_2_graphics_59 = new cjs.Graphics().p("AsTRAMAAAgh/IYnAAMAAAAh/g");
	var mask_2_graphics_60 = new cjs.Graphics().p("AumRAMAAAgh/IdNAAMAAAAh/g");
	var mask_2_graphics_61 = new cjs.Graphics().p("Aw4RAMAAAgh/MAhxAAAMAAAAh/g");
	var mask_2_graphics_62 = new cjs.Graphics().p("AzLRAMAAAgh/MAmXAAAMAAAAh/g");
	var mask_2_graphics_63 = new cjs.Graphics().p("A1eRAMAAAgh/MAq9AAAMAAAAh/g");
	var mask_2_graphics_64 = new cjs.Graphics().p("A3xRAMAAAgh/MAvjAAAMAAAAh/g");
	var mask_2_graphics_65 = new cjs.Graphics().p("A6ERAMAAAgh/MA0IAAAMAAAAh/g");
	var mask_2_graphics_66 = new cjs.Graphics().p("A8WRAMAAAgh/MA4tAAAMAAAAh/g");
	var mask_2_graphics_67 = new cjs.Graphics().p("A6FRAMAAAgh/MA0LAAAMAAAAh/g");
	var mask_2_graphics_68 = new cjs.Graphics().p("A30RAMAAAgh/MAvpAAAMAAAAh/g");
	var mask_2_graphics_69 = new cjs.Graphics().p("A1jRAMAAAgh/MArHAAAMAAAAh/g");
	var mask_2_graphics_70 = new cjs.Graphics().p("AzSRAMAAAgh/MAmlAAAMAAAAh/g");
	var mask_2_graphics_71 = new cjs.Graphics().p("AxARAMAAAgh/MAiBAAAMAAAAh/g");
	var mask_2_graphics_72 = new cjs.Graphics().p("AuvRAMAAAgh/IdfAAMAAAAh/g");
	var mask_2_graphics_73 = new cjs.Graphics().p("AseRAMAAAgh/IY9AAMAAAAh/g");
	var mask_2_graphics_74 = new cjs.Graphics().p("AqNRAMAAAgh/IUbAAMAAAAh/g");
	var mask_2_graphics_75 = new cjs.Graphics().p("An8RAMAAAgh/IP4AAMAAAAh/g");
	var mask_2_graphics_76 = new cjs.Graphics().p("AlrRAMAAAgh/ILWAAMAAAAh/g");
	var mask_2_graphics_77 = new cjs.Graphics().p("AjZRAMAAAgh/IGzAAMAAAAh/g");
	var mask_2_graphics_78 = new cjs.Graphics().p("AhIRAMAAAgh/ICRAAMAAAAh/g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:184.2,y:-9.2}).wait(1).to({graphics:mask_2_graphics_55,x:169.6,y:-9.2}).wait(1).to({graphics:mask_2_graphics_56,x:154.9,y:-9.2}).wait(1).to({graphics:mask_2_graphics_57,x:140.2,y:-9.2}).wait(1).to({graphics:mask_2_graphics_58,x:125.5,y:-9.2}).wait(1).to({graphics:mask_2_graphics_59,x:110.9,y:-9.2}).wait(1).to({graphics:mask_2_graphics_60,x:96.2,y:-9.2}).wait(1).to({graphics:mask_2_graphics_61,x:81.5,y:-9.2}).wait(1).to({graphics:mask_2_graphics_62,x:66.8,y:-9.2}).wait(1).to({graphics:mask_2_graphics_63,x:52.2,y:-9.2}).wait(1).to({graphics:mask_2_graphics_64,x:37.5,y:-9.2}).wait(1).to({graphics:mask_2_graphics_65,x:22.8,y:-9.2}).wait(1).to({graphics:mask_2_graphics_66,x:8.1,y:-9.2}).wait(1).to({graphics:mask_2_graphics_67,x:-6.4,y:-9.2}).wait(1).to({graphics:mask_2_graphics_68,x:-20.9,y:-9.2}).wait(1).to({graphics:mask_2_graphics_69,x:-35.4,y:-9.2}).wait(1).to({graphics:mask_2_graphics_70,x:-49.9,y:-9.2}).wait(1).to({graphics:mask_2_graphics_71,x:-64.5,y:-9.2}).wait(1).to({graphics:mask_2_graphics_72,x:-79,y:-9.2}).wait(1).to({graphics:mask_2_graphics_73,x:-93.5,y:-9.2}).wait(1).to({graphics:mask_2_graphics_74,x:-108,y:-9.2}).wait(1).to({graphics:mask_2_graphics_75,x:-122.5,y:-9.2}).wait(1).to({graphics:mask_2_graphics_76,x:-137,y:-9.2}).wait(1).to({graphics:mask_2_graphics_77,x:-151.6,y:-9.2}).wait(1).to({graphics:mask_2_graphics_78,x:-166.1,y:-9.2}).wait(15));

	// pagina 3
	this.instance_3 = new lib.av02();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-83.9,0.2,1,1,0,0,0,68,98.8);

	this.text_4 = new cjs.Text("Reflexiona...", "bold 14px 'Arial'", "#793A26");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 140;
	this.text_4.parent = this;
	this.text_4.setTransform(-86.6,54.1);

	this.text_5 = new cjs.Text("¿Cómo es que el gerente no sabía nada de esta situación?\n\n¿En el corporativo están enterados?\n\n¿Este incidente se pudo evitar?", "italic 12px 'Arial'", "#793A26");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.lineWidth = 168;
	this.text_5.parent = this;
	this.text_5.setTransform(98,-72.6);

	var maskedShapeInstanceList = [this.instance_3,this.text_4,this.text_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.instance_3}]},54).to({state:[]},25).wait(14));

	// Capa 8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_67 = new cjs.Graphics().p("Ag1RAMAAAgh/IBrAAMAAAAh/g");
	var mask_3_graphics_68 = new cjs.Graphics().p("AjIRAMAAAgh/IGRAAMAAAAh/g");
	var mask_3_graphics_69 = new cjs.Graphics().p("AlbRAMAAAgh/IK3AAMAAAAh/g");
	var mask_3_graphics_70 = new cjs.Graphics().p("AnuRAMAAAgh/IPcAAMAAAAh/g");
	var mask_3_graphics_71 = new cjs.Graphics().p("AqARAMAAAgh/IUBAAMAAAAh/g");
	var mask_3_graphics_72 = new cjs.Graphics().p("AsTRAMAAAgh/IYnAAMAAAAh/g");
	var mask_3_graphics_73 = new cjs.Graphics().p("AumRAMAAAgh/IdNAAMAAAAh/g");
	var mask_3_graphics_74 = new cjs.Graphics().p("Aw4RAMAAAgh/MAhxAAAMAAAAh/g");
	var mask_3_graphics_75 = new cjs.Graphics().p("AzLRAMAAAgh/MAmXAAAMAAAAh/g");
	var mask_3_graphics_76 = new cjs.Graphics().p("A1eRAMAAAgh/MAq9AAAMAAAAh/g");
	var mask_3_graphics_77 = new cjs.Graphics().p("A3xRAMAAAgh/MAvjAAAMAAAAh/g");
	var mask_3_graphics_78 = new cjs.Graphics().p("A6ERAMAAAgh/MA0IAAAMAAAAh/g");
	var mask_3_graphics_79 = new cjs.Graphics().p("A8WRAMAAAgh/MA4tAAAMAAAAh/g");
	var mask_3_graphics_80 = new cjs.Graphics().p("A6FRAMAAAgh/MA0LAAAMAAAAh/g");
	var mask_3_graphics_81 = new cjs.Graphics().p("A30RAMAAAgh/MAvpAAAMAAAAh/g");
	var mask_3_graphics_82 = new cjs.Graphics().p("A1jRAMAAAgh/MArHAAAMAAAAh/g");
	var mask_3_graphics_83 = new cjs.Graphics().p("AzSRAMAAAgh/MAmlAAAMAAAAh/g");
	var mask_3_graphics_84 = new cjs.Graphics().p("AxARAMAAAgh/MAiBAAAMAAAAh/g");
	var mask_3_graphics_85 = new cjs.Graphics().p("AuvRAMAAAgh/IdfAAMAAAAh/g");
	var mask_3_graphics_86 = new cjs.Graphics().p("AseRAMAAAgh/IY9AAMAAAAh/g");
	var mask_3_graphics_87 = new cjs.Graphics().p("AqNRAMAAAgh/IUbAAMAAAAh/g");
	var mask_3_graphics_88 = new cjs.Graphics().p("An8RAMAAAgh/IP4AAMAAAAh/g");
	var mask_3_graphics_89 = new cjs.Graphics().p("AlrRAMAAAgh/ILWAAMAAAAh/g");
	var mask_3_graphics_90 = new cjs.Graphics().p("AjZRAMAAAgh/IGzAAMAAAAh/g");
	var mask_3_graphics_91 = new cjs.Graphics().p("AhIRAMAAAgh/ICRAAMAAAAh/g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_3_graphics_67,x:184.2,y:-9.2}).wait(1).to({graphics:mask_3_graphics_68,x:169.6,y:-9.2}).wait(1).to({graphics:mask_3_graphics_69,x:154.9,y:-9.2}).wait(1).to({graphics:mask_3_graphics_70,x:140.2,y:-9.2}).wait(1).to({graphics:mask_3_graphics_71,x:125.5,y:-9.2}).wait(1).to({graphics:mask_3_graphics_72,x:110.9,y:-9.2}).wait(1).to({graphics:mask_3_graphics_73,x:96.2,y:-9.2}).wait(1).to({graphics:mask_3_graphics_74,x:81.5,y:-9.2}).wait(1).to({graphics:mask_3_graphics_75,x:66.8,y:-9.2}).wait(1).to({graphics:mask_3_graphics_76,x:52.2,y:-9.2}).wait(1).to({graphics:mask_3_graphics_77,x:37.5,y:-9.2}).wait(1).to({graphics:mask_3_graphics_78,x:22.8,y:-9.2}).wait(1).to({graphics:mask_3_graphics_79,x:8.1,y:-9.2}).wait(1).to({graphics:mask_3_graphics_80,x:-6.4,y:-9.2}).wait(1).to({graphics:mask_3_graphics_81,x:-20.9,y:-9.2}).wait(1).to({graphics:mask_3_graphics_82,x:-35.4,y:-9.2}).wait(1).to({graphics:mask_3_graphics_83,x:-49.9,y:-9.2}).wait(1).to({graphics:mask_3_graphics_84,x:-64.5,y:-9.2}).wait(1).to({graphics:mask_3_graphics_85,x:-79,y:-9.2}).wait(1).to({graphics:mask_3_graphics_86,x:-93.5,y:-9.2}).wait(1).to({graphics:mask_3_graphics_87,x:-108,y:-9.2}).wait(1).to({graphics:mask_3_graphics_88,x:-122.5,y:-9.2}).wait(1).to({graphics:mask_3_graphics_89,x:-137,y:-9.2}).wait(1).to({graphics:mask_3_graphics_90,x:-151.6,y:-9.2}).wait(1).to({graphics:mask_3_graphics_91,x:-166.1,y:-9.2}).wait(2));

	// pagina 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94602C").s().p("AAcA4QgGgBgDgDIgMgNIAOgPIAHAIQADADADgBIACgCIAVgVIAVAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAIAAACIgkAjQgGAHgHAAIgFgBgAgqAwIgigjQgIgJAEgJIAFgIIAlglQAKgIAKADIAHAEIAMAOIgOANIgIgIQgDgCgDACIgdAdQgDADABABIACADIAVAVIAAAVQAAAAgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgEgBgAgMAwIgBgCIAAgVIAVgVQADgDgCgCIgCgDIAOgOIAHAIQAGAJgDAIQgCAEgDADIggAhIgEACIgCgBgAgUAMQgGgJAEgKIAGgIIAjgjQAJgHAJACIAHAEIAmAkQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgDABIgUABIgVgWQgEgDgCABIgCACIgcAcQgDADADADIABACIgOAPg");
	this.shape_1.setTransform(95,85.5);

	this.instance_4 = new lib.av02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-83.9,0.2,1,1,0,0,0,68,98.8);

	this.text_6 = new cjs.Text("Reflexiona...", "bold 14px 'Arial'", "#793A26");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.lineWidth = 140;
	this.text_6.parent = this;
	this.text_6.setTransform(-86.6,54.1);

	this.text_7 = new cjs.Text("En cualquier momento se puede desarrollar un incidente que puede impactar el negocio.\n\nEs responsabilidad de TODOS los que formamos ARCA CONTINENTAL detectar las primeras señales y comunicarlas a los equipos de IMCR para que que les den un manejo adecuado.\n\nDe esta forma protegemos nuestro negocio.", "italic 12px 'Arial'", "#793A26");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.lineWidth = 168;
	this.text_7.parent = this;
	this.text_7.setTransform(98,-115.8);

	var maskedShapeInstanceList = [this.shape_1,this.instance_4,this.text_6,this.text_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.instance_4},{t:this.shape_1}]},67).to({state:[]},25).wait(1));

	// book
	this.instance_5 = new lib.CloseBook("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(4.5,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},92).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,-128.2,189.1,237.3);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Capa 3
	this.instance = new lib.instruccionclic();
	this.instance.parent = this;
	this.instance.setTransform(380.8,472.7,1,1,0,0,0,19.5,19.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).wait(1));

	// Capa 4
	this.Book = new lib.tcClassicBook();
	this.Book.parent = this;
	this.Book.setTransform(350.6,243.1,1.663,1.663,0,0,0,0.1,0.1);
	this.Book.alpha = 0;
	this.Book._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Book).wait(15).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(13).to({x:510.6},14,cjs.Ease.get(1)).wait(1));

	// Capa 5
	this.instance_1 = new lib.imagenmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(524,275.3,1.2,1.2,0,0,0,600.9,371.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:523.9,y:275.2,alpha:1},14).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.1,-170.2,1442.2,890.8);


// stage content:
(lib.AC_IMCR_OV_02 = function(mode,startPosition,loop) {
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
		{src:"images/Mapadebits4.png?1573319987677", id:"Mapadebits4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;