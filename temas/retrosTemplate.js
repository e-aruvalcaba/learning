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


(lib.ventana_texto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-398.35,-177.55,796.7,355.1,25);
	this.shape.setTransform(398.4,177.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ventana_texto, new cjs.Rectangle(0,0,796.7,355.1), null);


(lib.mano_incorrecto_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("Ah1ADQgxgmgEADIApghIBRhCQArgjAPgIQAQgFAjAmQAjAnAhBAQAhA+AJBHQgDAOgrATQguATgsAOIgwAPQg1iGgzgng");
	this.shape.setTransform(69.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D73D45").s().p("AiiCwQgOgjgegsQgegsgwggIBWhAIDDiQIAggYIAAAIIA0AAIAAAgIBAAAIAAAUIAkAAIAAAoIAcAAIAAAYIAoAAIAABEIAkAAIAAA/IhWAiIjvBdIhtApQABgCgOgig");
	this.shape_1.setTransform(82.6,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC966D").s().p("AiMA3IgFgOQgJgkAhgOIDThGQAjgIAQAhIAFAOQAIAkghAOIjSBGQgHABgHAAQgZAAgMgag");
	this.shape_2.setTransform(14.8,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC966D").s().p("AiRA0IgEgKQgKgqAngRIDPg/QApgKASAmIAEAMQAKAogmASIjQA/QgIACgIAAQgdAAgOgfg");
	this.shape_3.setTransform(21.5,68.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC966D").s().p("AilA6IgDgLQgLgrAogRIDzhKQArgKASAoIAFALQAKArgoARIjzBKQgJACgIAAQgeAAgPggg");
	this.shape_4.setTransform(17.7,47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC966D").s().p("AikA7IgGgQQgJgpAmgPID6hKQAogJAQAmIAFAQQAKApgmAQIj6BKIgNABQgeAAgNgfg");
	this.shape_5.setTransform(20,57.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7AD85").s().p("Ag3HVQgigSgbg2QgmhSgHgyQgGgxACgBIi+AoIg6maIBVgeQBQgbBegSQBdgSAtAYIAJAIQAugHBUg0QBUgzBahCQBCgwAzgoIAAEfIhZAbQhuAhg3AaQg3AZgTATQARBkhQBmQgwBAADBDQADBDAZAvQANAZACAcQAEAcgYAMQgIAEgKAAQgRAAgVgMg");
	this.shape_6.setTransform(47.7,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mano_incorrecto_mc, new cjs.Rectangle(0,0,111.1,99.1), null);


(lib.mano_correcto_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#52941B").s().p("AAKCvQgPgIgrgjIhRhCIgpghQAEADAxgmQAzgnA1iGIAwAPQAsAOAuATQArATADAOQgJBHghA+QghBAgjAnQgfAigQAAIgEgBg");
	this.shape.setTransform(69.5,72);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52941B").s().p("AgDC8IjDiQIhWhAQAwggAegsQAegsAOgjQAOgigBgCIBtApIDvBdIBWAiIAAA/IgkAAIAABEIgoAAIAAAYIgcAAIAAAoIgkAAIAAAUIhAAAIAAAgIg0AAIAAAIIgggYg");
	this.shape_1.setTransform(82.6,77.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC966D").s().p("ABaBQIjThGQghgOAJgkIAFgOQAPghAkAIIDSBGQAhAOgIAkIgFAOQgMAagZAAQgHAAgHgBg");
	this.shape_2.setTransform(14.8,61.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC966D").s().p("ABXBRIjPg/QgngSAKgpIAEgKQASgnApAKIDQA/QAmARgKApIgEAMQgOAegdAAQgHAAgJgCg");
	this.shape_3.setTransform(21.5,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC966D").s().p("ABoBYIjzhKQgogRALgrIADgLQATgoArAKIDzBKQAoARgKArIgFALQgOAggeAAQgIAAgJgCg");
	this.shape_4.setTransform(17.7,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC966D").s().p("ABtBYIj6hKQgmgPAJgpIAGgQQAQgmAoAIID6BKQAmAQgKApIgFAQQgNAfgdAAQgHAAgHgCg");
	this.shape_5.setTransform(20,41.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7AD85").s().p("AEpGJQhahChUgzQhUg0gugHIgJAIQgtAYhdgSQhegShQgbIhVgeIA6maIC+AoQgCgBAGgxQAHgyAmhSQAbg2AigSQAggSAYAKQAYAMgEAcQgCAcgNAZQgZAvgDBDQgDBDAwBAQBQBmgRBkQATATA3AZQA3AaBuAhIBZAbIAAEfQgzgohCgwg");
	this.shape_6.setTransform(47.7,48.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mano_correcto_mc, new cjs.Rectangle(0,0,111.1,99.1), null);


(lib.circuloverdemc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#52941B").ss(22,1,1).p("AOiAAQAAGCkREPQkPERmCAAQmAAAkSkRQkPkPAAmCQAAmBEPkRQESkPGAAAQGCAAEPEPQERERAAGBg");
	this.shape.setTransform(93,93);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqSKRQkPkPAAmCQAAmBEPkQQESkQGAAAQGCAAEPEQQEREQAAGBQAAGCkREPQkPERmCAAQmAAAkSkRg");
	this.shape_1.setTransform(93,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circuloverdemc, new cjs.Rectangle(-11,-11,208.1,208), null);


(lib.circulorojomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D73D45").ss(22,1,1).p("AOiAAQAAGCkREPQkPERmCAAQmAAAkSkRQkPkPAAmCQAAmBEPkRQESkPGAAAQGCAAEPEPQERERAAGBg");
	this.shape.setTransform(93,93);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqSKRQkPkPAAmCQAAmBEPkQQESkQGAAAQGCAAEPEQQEREQAAGBQAAGCkREPQkPERmCAAQmAAAkSkRg");
	this.shape_1.setTransform(93,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.circulorojomc, new cjs.Rectangle(-11,-11,208.1,208), null);


(lib.Circulocerrar4colores = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CE4040").s().p("AhMBNQgfgggBgtQABgtAfgfQAggfAsgBQAtABAgAfQAfAfAAAtQAAAtgfAgQggAfgtAAQgsAAgggfg");
	this.shape.setTransform(10.9,10.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,21.7);


(lib.retroautomaticaincorrectov2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(44).call(this.frame_44).wait(1));

	// Layer 2
	this.instance = new lib.mano_incorrecto_mc();
	this.instance.parent = this;
	this.instance.setTransform(149.8,62.7,0.288,0.288,52.2,0,0,55.6,49.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({regX:55.7,regY:49.7,scaleX:1.24,scaleY:1.24,rotation:0,x:106.6,y:86.2},6,cjs.Ease.get(1)).wait(27));

	// Layer 1
	this.instance_1 = new lib.circulorojomc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,-299.7,1,1,0,0,0,93,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:286.1},9,cjs.Ease.get(-1)).to({y:93},5,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-403.7,208.1,208);


(lib.retroautomaticaincorrectomc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
		parent.llamarRetros();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// Layer 3
	this.text = new cjs.Text("Incorrecto", "bold 30px 'Arial'", "#D73D45");
	this.text.lineHeight = 40;
	this.text.parent = this;
	this.text.setTransform(30.3,110.5,0.86,0.86);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(18).to({_off:false},0).to({_off:true},28).wait(8));

	// Layer 2
	this.instance = new lib.mano_incorrecto_mc();
	this.instance.parent = this;
	this.instance.setTransform(149.8,62.7,0.288,0.288,52.2,0,0,55.6,49.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:100.3,y:62.6},6,cjs.Ease.get(1)).wait(27).to({regX:55.8,regY:50,scaleX:0.12,scaleY:0.12,x:94,y:89.4,alpha:0.039},7).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.circulorojomc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,-299.7,1,1,0,0,0,93,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:286.1},9,cjs.Ease.get(-1)).to({y:93},5,cjs.Ease.get(1)).wait(31).to({scaleX:0.12,scaleY:0.12,x:93.1,y:93.1,alpha:0.039},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-403.7,208.1,208);


(lib.retroautomaticacorrectav2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(41).call(this.frame_41).wait(1));

	// Layer 3
	this.instance = new lib.mano_correcto_mc();
	this.instance.parent = this;
	this.instance.setTransform(86.2,218.9,0.243,0.243,-47.7,0,0,55.8,49.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:55.6,regY:49.5,scaleX:1.2,scaleY:1.2,rotation:0,x:106.4,y:100.5},4,cjs.Ease.get(1)).wait(27));

	// Layer 1
	this.instance_1 = new lib.circuloverdemc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,-296.4,1,1,0,0,0,93,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:282.8},9,cjs.Ease.get(-1)).to({y:93},4,cjs.Ease.get(1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-400.4,208.1,208);


(lib.retroautomaticacorrecta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.stop();
		parent.llamarRetros();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// Layer 2
	this.text = new cjs.Text("¡Correcto!", "bold 30px 'Arial'", "#52941B");
	this.text.lineHeight = 40;
	this.text.parent = this;
	this.text.setTransform(32.8,41,0.86,0.86);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(15).to({_off:false},0).to({_off:true},27).wait(10));

	// Layer 3
	this.instance = new lib.mano_correcto_mc();
	this.instance.parent = this;
	this.instance.setTransform(86.2,218.9,0.243,0.243,-47.7,0,0,55.8,49.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:55.6,regY:49.5,scaleX:1,scaleY:1,rotation:0,x:110.9,y:122.9},4,cjs.Ease.get(1)).wait(27).to({regY:49.4,scaleX:0.13,scaleY:0.13,x:94.4,y:91.6,alpha:0.039},8,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.circuloverdemc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(93,-296.4,1,1,0,0,0,93,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:282.8},9,cjs.Ease.get(-1)).to({y:93},4,cjs.Ease.get(1)).wait(29).to({scaleX:0.12,scaleY:0.12,x:93.1,y:93.1,alpha:0.039},8,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-400.4,208.1,208);


(lib.btn_cerrar_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape.setTransform(0.1,0.2,0.453,0.453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhMBNQggggAAgtQAAgsAgggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtABQgsgBgggfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaBvIhQhGQgEgDgGAAQgFAAgEADIhQBGQgLAJgJgJQgKgKAJgLIBGhQQADgEAAgGQAAgFgDgEIhGhQQgJgLAKgJQAJgKALAJIBQBGQAEADAFAAQAGAAAEgDIBQhGQALgJAKAKQAJAJgJALIhGBQQgDAEAAAFQAAAGADAEIBGBQQAJALgJAKQgFAFgGAAQgFAAgFgFg");
	this.shape_2.setTransform(0.1,0.2,0.453,0.453);

	this.instance = new lib.Circulocerrar4colores("single",1);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.3,1,1,0,0,0,10.9,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.702)").s().p("AjkCzIAAllIHJAAIAAFlg");
	this.shape_3.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.8,21.7,21.7);


(lib.retro_incorrecta_manual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.textomal.text=this.parent.texto;
	}
	this.frame_21 = function() {
		this.stop();
		this.btn_cerrar2.addEventListener("click", clk2);
		this.btn_cerrar2.addEventListener("rollover", ovr2);
		this.btn_cerrar2.addEventListener("rollout", out2);
		function clk2(c) {
			c.currentTarget.removeAllEventListeners();
			parent.llamarRetros();
		}
		
		function ovr2(c) {
			c.currentTarget.gotoAndStop(1);
		}
		
		function out2(c) {
			c.currentTarget.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(4).call(this.frame_21).wait(1));

	// Layer 5
	this.btn_cerrar2 = new lib.btn_cerrar_v1();
	this.btn_cerrar2.parent = this;
	this.btn_cerrar2.setTransform(767.4,286.9);
	this.btn_cerrar2._off = true;
	new cjs.ButtonHelper(this.btn_cerrar2, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cerrar2).wait(21).to({_off:false},0).wait(1));

	// Layer 3
	this.text = new cjs.Text("Incorrecto", "bold 25px 'Arial'", "#D73D45");
	this.text.lineHeight = 34;
	this.text.parent = this;
	this.text.setTransform(320.5,330.9,1.236,1.236);

	this.textomal = new cjs.Text("Respuesta A y C. ¡En efecto! Entre las actividades de esta etapa destacan “validar con el jefe de cada puesto, a los colaboradores identificados como sucesores” y “garantizar que los prospectos cuentan con la experiencia y se les proveerán actividades que les permitan desarrollarse para estar listos para ocupar el puesto”.", "16px 'Arial'", "#606060");
	this.textomal.name = "textomal";
	this.textomal.lineHeight = 24;
	this.textomal.lineWidth = 538;
	this.textomal.parent = this;
	this.textomal.setTransform(131.5,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.textomal},{t:this.text}]},17).wait(5));

	// Layer 2
	this.instance = new lib.retroautomaticaincorrectov2();
	this.instance.parent = this;
	this.instance.setTransform(396.6,268.8,0.553,0.553,0,0,0,93.2,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

	// Layer 1
	this.instance_1 = new lib.ventana_texto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.4,889.2,1,1,0,0,0,398.4,177.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:435.4},6,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339,-6.1,115.2,115.1);


(lib.retro_correcta_manual = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.textobien.text=this.parent.texto;
	}
	this.frame_19 = function() {
		this.stop();
		this.btn_cerrar.addEventListener("click", clk);
		this.btn_cerrar.addEventListener("rollover", ovr);
		this.btn_cerrar.addEventListener("rollout", out);
		function clk(c) {
			c.currentTarget.removeAllEventListeners();
			parent.llamarRetros();
		}
		
		function ovr(c) {
			c.currentTarget.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(3).call(this.frame_19).wait(1));

	// Layer 5
	this.btn_cerrar = new lib.btn_cerrar_v1();
	this.btn_cerrar.parent = this;
	this.btn_cerrar.setTransform(767.4,286.9);
	this.btn_cerrar._off = true;
	new cjs.ButtonHelper(this.btn_cerrar, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_cerrar).wait(19).to({_off:false},0).wait(1));

	// Layer 3
	this.text = new cjs.Text("¡Correcto!", "bold 25px 'Arial'", "#52941B");
	this.text.lineHeight = 34;
	this.text.parent = this;
	this.text.setTransform(320.5,330.9,1.236,1.236);

	this.textobien = new cjs.Text("Respuesta A y C. ¡En efecto! Entre las actividades de esta etapa destacan “validar con el jefe de cada puesto, a los colaboradores identificados como sucesores” y “garantizar que los prospectos cuentan con la experiencia y se les proveerán actividades que les permitan desarrollarse para estar listos para ocupar el puesto”.", "16px 'Arial'", "#606060");
	this.textobien.name = "textobien";
	this.textobien.lineHeight = 24;
	this.textobien.lineWidth = 538;
	this.textobien.parent = this;
	this.textobien.setTransform(131.5,399.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.textobien},{t:this.text}]},16).wait(4));

	// Layer 1
	this.instance = new lib.retroautomaticacorrectav2();
	this.instance.parent = this;
	this.instance.setTransform(396.5,266.9,0.553,0.553,0,0,0,92.9,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 2
	this.instance_1 = new lib.ventana_texto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(398.4,891.3,1,1,0,0,0,398.4,177.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:435.4},6,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339,-6.1,115.2,115.1);


// stage content:
(lib.retrosTemplate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bien:1,mal:2,retrobien:3,retromal:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		parent.getRetros(this);
		this.texto="lolaxo";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.instance = new lib.retroautomaticacorrecta();
	this.instance.parent = this;
	this.instance.setTransform(475,275,1,1,0,0,0,93,93);

	this.instance_1 = new lib.retroautomaticaincorrectomc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(475,277,1,1,0,0,0,93,93);

	this.instance_2 = new lib.retro_correcta_manual();
	this.instance_2.parent = this;
	this.instance_2.setTransform(475.1,143,1,1,0,0,0,398.4,303.4);

	this.instance_3 = new lib.retro_incorrecta_manual();
	this.instance_3.parent = this;
	this.instance_3.setTransform(475.1,143,1,1,0,0,0,398.4,303.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.349)").s().p("EhOSAtVMAAAhapMCclAAAMAAABapg");
	this.shape.setTransform(478.7,282.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 950,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;