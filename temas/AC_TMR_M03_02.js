(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.verde1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Colaborador que cuenta con el compromiso y habilidad necesarios para su posición, sin embargo, por el momento no es visto asumiendo un rol diferente o una responsabilidad adicional.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 21;
	this.text.lineWidth = 336;
	this.text.parent = this;
	this.text.setTransform(76.7,55.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE8LlQgwgUgkglQgkglgUgvQgVgxABg2QAAhKAmg+QAmg9A+giIgSgqQgCgDgGgCQgGgCgDgGIgGgQQgFgKgHgGQgEgDADgDQgCgFgFgEQgCgBgGgPIj6FEQgCAIgEAHQAIAPgBARQAAAOgFAMIAIAHQACACAAAHIADADIADACIABgCQABAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAPAIIAAADIgBADQABABAGABIAZAEQAPADADAKQABAGgDAGQgDAEgIAAIgJAFQgIAGgDAAQgCABgFAAIgFgBIAFAJQgPAKgEABQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDIgHAEIgIAEQgCAAgGgFIgGgHIgCgDIAAgBIgCAAIgEgDIgEgEIACgCIABgCQgDgDgFgBIgJgDIgEgCQgWgDgWgGQgLgDgGgEIgxAKQgfBGhBAqQhCAshQgBQg1AAgxgVQgwgUgkglQgkglgUgvQgUgxAAg2QAAg2AVgxQAUgvAlgkQAlglAvgUQAxgUA2AAQAqABAoANQAmAMAhAYQAQgYAFgFQAEgDAKABQAOgTAPgFIAKgCIgCgHIgCgGQgSgHgQgeQgCgBgDgEQgCgEAAgCQACgCAUgIIgBgCQAAgBgIgEQAHgHgBgCQgPgrgGgMQgEgHgPgVIgRgWQgDgDgQgJIgjgQQgSgHgMgOQgLgOgDgRQgBgNADgRIADgQIgGgGIAEgRQAFgWAJgUQgOgKgJgSQgKgUACgUIADgGQADgEAAgCQAAgDgIgeQgHgZAJgJQgCgLAEgJIAKgRIAFgNIAGgKQACgEAKgJQAIgHACgHIgBgEIgBgEIANgMQAHgHAIgEQACAAABAEQABAEACABQADgCADgGQADgGADgCIAKADQAFACAFgDIgFgMQgCgGAAgHQADgIAKgBIATgDQAGgBAIgGQAJgGAEgBQAGAGATgCQATgBAFAJIAKACQANACANABQAqABAcgSQAGgEAJABIAJgPIAEAEQABgSgBgNIgBABQgNgMgLgXQgWgtAKgyQAKg2AigdQAZgUAegEQAOgBAgAJIADABQALgCAHgDIgFAJIABAAIADABIAKAEQAMAAANgEIALgDIgKARIAIADQAOABAOgEIANgEIgLATQAQAFASABQAFAAABABQABABgBAEQgCAIglAhIAAALIgOA5IABADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIACABQABABABAAQAAABABAAQAAABAAAAQAAABAAAAIgCAHQgBAFgBAAIgEAAIAAACQAFAQACAbIAAAEQgCAFgEACQgFABgGgBQgFgBAAABIgDANIAAABQABACgDAFIgCACIgDAFIgGAIQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBABIgBAKQgBAJgCACIgJAGQgGACgIgDIgbgNQgTgKgFAGQgFAEgBATIAAAdIACACIgBANIAAAAIAAABIAAAEIgCAAQAAAIADANQAEANADADIAJALIAPAVQAGAHASAmQASAnAGAJQAIALAQAPIAXAWQALALBTCBIAGAAIAIAJQAIAJACABIAIAAIAGAAIAHACIAHACQAEAAADADQADACACADQACAFgCAGQAAAAAAAAQAAABABAAQAAABAAAAQAAABABABIADAFQABAFADADIACAGIABAEIAFAGIAHAHQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABQAFAKAAANQAAAHgDAIQgDAKgFAPQgGAOgBASQgBAVAHATQAJAWACAkIADABQAEACABAVQAigKAkABQA2AAAxAVQAvAUAkAlQAlAkAUAwQAUAxAAA2QgBA1gVAxQgUAwglAkQgkAkgwAUQgxAVg2AAQg1gBgxgVgAGPJLIgBB/IAVABQAMABAPgCIABh+IgOgYIgKAAIgKAAgAFOK6QAcAMAfAEIAAh1gAHELJQAfgFAagMIg5hjgAm4JHIgBB/IAVABQAOAAANgBIABh/IgDgFIgPgCQgPgCgGgHgAn5K2QAdAMAeADIAAh0gAmDLFQAdgFAcgMIgbgvIgRAIQgFACgBgDIgCgJIgEgngAFgIyIhABtQAUAPAVAKIBAhuIABgcQgKgDgIgHgAHFIvIgBAbIA+BsQAXgLASgPIg9hqIgXgOQgJAHgJAEgAnYIlIgPAIIhABuQATAOAWALIBAhuIABgaIgBgCIgHgEQgFACgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBIgCgBQgGADgFAAgAlhKAIAcAyQAWgLATgPIgUgigADzJwQARAZAYASIA6hkgAIvKZQAWgTARgXIheg3gApUJs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");
	this.shape.setTransform(557.4,135);

	this.text_1 = new cjs.Text("Potencial Básico", "bold 22px 'Arial'", "#333333");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 288;
	this.text_1.parent = this;
	this.text_1.setTransform(468.7,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BAD193").s().p("AyRNUIAA6nMAkjAAAIAAYJQAABBguAuQgvAvhBAAg");
	this.shape_1.setTransform(549.3,136.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#97AF68").s().p("AyRD+IAAn7MAiFAAAQBBAAAvAvQAuAuAABCIAAFcg");
	this.shape_2.setTransform(549.3,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFE1B5").s().p("EgpDARSQhCAAgugvQguguAAhBIAA9mQAAhCAuguQAugvBCAAMBSHAAAQBBAAAuAvQAvAuAABCIAAdmQAABBgvAuQguAvhBAAg");
	this.shape_3.setTransform(387.7,111.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFE1B5").s().p("AnOP0QjPhbibiiQkQkzgKm1QADk3CXj9QCUj9D9iVQD9iWE4gDQDyABDPBcQDQBcCbChQEPEzAKG1QgDE3iWD9QiVD9j+CWQj8CVk4ADQjxgCjQhbg");
	this.shape_4.setTransform(110.7,110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.verde1, new cjs.Rectangle(0,0,758.9,222), null);


(lib.titulot2mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Evaluación de Potencial", "bold 25px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 186;
	this.text.parent = this;
	this.text.setTransform(92.9,38);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,36,189.9,146.7);


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

	this.text = new cjs.Text("Evaluación de Potencial", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tituloestatico, new cjs.Rectangle(-300.2,-243.5,233.7,26.4), null);


(lib.tapakakigeneral = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBUIAAinICVAAIAACng");
	this.shape.setTransform(7.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,16.9);


(lib.pleca1mod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E16F74").s().p("AmQBIIA9g7IC0CzIH1n1IA7A7IowIwg");
	this.shape.setTransform(72.7,175);

	this.text = new cjs.Text("Proceso de valoración de potencial\n", "bold 22px 'Arial'", "#333333");
	this.text.lineHeight = 25;
	this.text.lineWidth = 132;
	this.text.parent = this;
	this.text.setTransform(26.7,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B5E5D9").ss(10).p("Avs10QkMAJixCwQiyCxgHEMIAAX9QAHEMCyCxQCxCyEMAHIVGAAQh2hPh4hjQkhjwg9l0Qg6lzGen6QJjqeIwlIQB2hFBjg7g");
	this.shape_1.setTransform(163.5,139.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7ADDC0").s().p("AuqV0QkLgGixiyQizixgHkMIAA39QAHkMCziwQCxixELgJMAnLAAAIjaCAQovFIpkKeQmeH6A7FzQA8F0EhDwQB4BjB2BOg");
	this.shape_2.setTransform(156.9,139.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,336.9,289.3);


(lib.plecavaloracionlado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhvIfQhtj7gBkkQABkgBtj+QBsj6C+jBIAjAlQi3C5hmDxQhoD1gCEVQACEXBoD0QBmDyC3C4IgjAkQi+i9hsj9g");
	this.shape.setTransform(22.2,98.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,197.1);


(lib.plecapreviamod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Recuerda que se debe ingresar directamente al portal para completar este paso*.\n\n", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 326;
	this.text.parent = this;
	this.text.setTransform(-85.1,39.1);

	this.text_1 = new cjs.Text("Para evaluar el potencial de nuestros colaboradores, el líder de cada área debe completar el “check list de potencial”, en el sistema Success Factors. ", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 297;
	this.text_1.parent = this;
	this.text_1.setTransform(-85.1,-85.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B5E5D9").ss(10).p("EAmhAV1MhNBAAAQkMgJixiwQiyixgHkMIAA39QAHkMCyixQCxiyEMgHMBNBAAAQEMAHCxCyQCyCxAHEMIAAX9QgHEMiyCxQixCwkMAJg");
	this.shape.setTransform(0,-21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F4EC").s().p("EgmfAV1QkNgJixixQiyiwgGkMIAA39QAGkMCyixQCxiyENgHMBM/AAAQENAHCxCyQCyCxAGEMIAAX9QgGEMiyCwQixCxkNAJg");
	this.shape_1.setTransform(0,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.4,-166.6,628.9,328.3);


(lib.pleca2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Recuerda que se debe ingresar directamente al portal para completar este paso*.\n\n", "18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 326;
	this.text.parent = this;
	this.text.setTransform(-85.1,39.1);

	this.text_1 = new cjs.Text("Para evaluar el potencial de nuestros colaboradores, el líder de cada área debe completar el “check list de potencial”, en el sistema SuccessFactors. ", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 297;
	this.text_1.parent = this;
	this.text_1.setTransform(-85.1,-85.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B5E5D9").ss(10).p("EAmhAV1MhNBAAAQkMgJixiwQiyixgHkMIAA39QAHkMCyixQCxiyEMgHMBNBAAAQEMAHCxCyQCyCxAHEMIAAX9QgHEMiyCxQixCwkMAJg");
	this.shape.setTransform(0,-21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F4EC").s().p("EgmfAV1QkNgJixixQiyiwgGkMIAA39QAGkMCyixQCxiyENgHMBM/AAAQENAHCxCyQCyCxAGEMIAAX9QgGEMiyCwQixCxkNAJg");
	this.shape_1.setTransform(0,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.4,-166.6,628.9,328.3);


(lib.numerodetema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Tema", "50px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.parent = this;
	this.text.setTransform(69.1,26.2,0.593,0.593);

	this.text_1 = new cjs.Text("3.2", "50px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 75;
	this.text_1.parent = this;
	this.text_1.setTransform(67.9,56.7,1.094,1.094);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#793A26").s().p("Ag7HKQiJgUhphiIgRgQQhthmgbiMQgaiBAyh/QAyh/BshOQB0hTCVAAIAQAAQC8AACFCFQCGCGAAC8IAAAPQAACQhPByQhKBqh5A1QhZAmhdAAQghAAgigFg");
	this.shape.setTransform(69.8,69.7,1.504,1.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.6,139.3);


(lib.no1perfil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¿Cómo valorar el potencial de nuestros colaboradores?", "bold 18px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 251;
	this.text.parent = this;
	this.text.setTransform(409.5,142);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(227,239,185,0.498)").s().p("A03AzIgUAAIAAplMAqGAAAIAAJiIARAAI1JIDg");
	this.shape.setTransform(409.3,184.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(273.6,128,271.3,112.6);


(lib.mascaratapar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgvWACqIAAlTMBetAAAIAAFTg");
	this.shape.setTransform(303.1,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.2,34);


(lib.M03_TMR_TABLAtodas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Check List de Potencial", "bold 40px 'Arial'", "#333333");
	this.text.lineHeight = 47;
	this.text.lineWidth = 653;
	this.text.parent = this;
	this.text.setTransform(81,-81.9);

	this.text_1 = new cjs.Text("ALTO                   MEDIO                 BAJO", "bold 11px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 304;
	this.text_1.parent = this;
	this.text_1.setTransform(527,386.2,0.779,0.779);

	this.text_2 = new cjs.Text("ALTO / MEDIO / BAJO", "bold 11px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 304;
	this.text_2.parent = this;
	this.text_2.setTransform(522.4,509,0.779,0.779);

	this.text_3 = new cjs.Text("CALIFICACIÓN GENERAL DE LIDERAZGO", "bold 11px 'Arial'");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 289;
	this.text_3.parent = this;
	this.text_3.setTransform(4.1,509.2,0.779,0.779);

	this.text_4 = new cjs.Text("COMPONENTES DE COMPROMISO", "bold 15px 'Arial'");
	this.text_4.lineHeight = 19;
	this.text_4.lineWidth = 544;
	this.text_4.parent = this;
	this.text_4.setTransform(6.4,381.4,0.779,0.779);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AGjhvIAADfItFAAIAAjfg");
	this.shape.setTransform(462.4,445.8,0.777,0.777);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AmiBwIAAjfINEAAIAADfg");
	this.shape_1.setTransform(462.4,445.8,0.777,0.777);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AGjhZIAACyItFAAIAAiyg");
	this.shape_2.setTransform(462.4,401.4,0.777,0.777);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AmiBaIAAiyINEAAIAACyg");
	this.shape_3.setTransform(462.4,401.4,0.777,0.777);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AGjhgIAADBItFAAIAAjBg");
	this.shape_4.setTransform(462.4,429.5,0.777,0.777);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E6").s().p("AmiBhIAAjBINEAAIAADBg");
	this.shape_5.setTransform(462.4,429.5,0.777,0.777);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("AGjhVIAACrItFAAIAAirg");
	this.shape_6.setTransform(462.4,415.1,0.777,0.777);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AmiBWIAAirINEAAIAACrg");
	this.shape_7.setTransform(462.4,415.1,0.777,0.777);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("AGthZIAACyItZAAIAAiyg");
	this.shape_8.setTransform(528.2,401.4,0.777,0.777);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6E6E6").s().p("AmsBaIAAiyINZAAIAACyg");
	this.shape_9.setTransform(528.2,401.4,0.777,0.777);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AGthVIAACrItZAAIAAirg");
	this.shape_10.setTransform(528.2,415.1,0.777,0.777);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E6E6").s().p("AmsBWIAAirINZAAIAACrg");
	this.shape_11.setTransform(528.2,415.1,0.777,0.777);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AGthgIAADBItZAAIAAjBg");
	this.shape_12.setTransform(528.2,429.5,0.777,0.777);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("AmsBhIAAjBINZAAIAADBg");
	this.shape_13.setTransform(528.2,429.5,0.777,0.777);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("AGthvIAADfItZAAIAAjfg");
	this.shape_14.setTransform(528.2,445.8,0.777,0.777);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E6E6").s().p("AmsBwIAAjfINZAAIAADfg");
	this.shape_15.setTransform(528.2,445.8,0.777,0.777);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("EArIgBVIAACrMhWPAAAIAAirg");
	this.shape_16.setTransform(215.5,415.1,0.777,0.777);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E6E6").s().p("EgrGABWIAAirMBWNAAAIAACrg");
	this.shape_17.setTransform(215.5,415.1,0.777,0.777);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("EArIgBZIAACyMhWPAAAIAAiyg");
	this.shape_18.setTransform(215.5,401.4,0.777,0.777);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E6E6").s().p("EgrGABaIAAiyMBWNAAAIAACyg");
	this.shape_19.setTransform(215.5,401.4,0.777,0.777);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("EArIgBvIAADfMhWPAAAIAAjfg");
	this.shape_20.setTransform(215.5,445.8,0.777,0.777);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6E6E6").s().p("EgrGABwIAAjfMBWNAAAIAADfg");
	this.shape_21.setTransform(215.5,445.8,0.777,0.777);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("EArIgBhIAADDMhWPAAAIAAjDg");
	this.shape_22.setTransform(215.5,429.5,0.777,0.777);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E6E6").s().p("EgrGABiIAAjDMBWNAAAIAADDg");
	this.shape_23.setTransform(215.5,429.5,0.777,0.777);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("EArIgBpIAADTMhWPAAAIAAjTg");
	this.shape_24.setTransform(215.5,462.6,0.777,0.777);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E6E6").s().p("EgrGABqIAAjUMBWNAAAIAADUg");
	this.shape_25.setTransform(215.5,462.6,0.777,0.777);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("EArIgDMIAAGaMhWPAAAIAAmag");
	this.shape_26.setTransform(215.5,486.8,0.777,0.777);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E6E6").s().p("EgrGADNIAAmaMBWNAAAIAAGag");
	this.shape_27.setTransform(215.5,486.8,0.777,0.777);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AGIhZIAACyIsPAAIAAiyg");
	this.shape_28.setTransform(592,401.4,0.777,0.777);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E6E6").s().p("AmHBaIAAiyIMPAAIAACyg");
	this.shape_29.setTransform(592,401.4,0.777,0.777);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("AGIhVIAACrIsPAAIAAirg");
	this.shape_30.setTransform(592,415.1,0.777,0.777);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E6E6").s().p("AmHBWIAAirIMPAAIAACrg");
	this.shape_31.setTransform(592,415.1,0.777,0.777);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("AGIhgIAADBIsPAAIAAjBg");
	this.shape_32.setTransform(592,429.5,0.777,0.777);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E6E6").s().p("AmHBhIAAjBIMPAAIAADBg");
	this.shape_33.setTransform(592,429.5,0.777,0.777);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").p("AGIhvIAADfIsPAAIAAjfg");
	this.shape_34.setTransform(592,445.8,0.777,0.777);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E6E6E6").s().p("AmHBwIAAjfIMPAAIAADfg");
	this.shape_35.setTransform(592,445.8,0.777,0.777);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").p("AGIhpIAADTIsPAAIAAjTg");
	this.shape_36.setTransform(592,462.6,0.777,0.777);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6E6E6").s().p("AmHBqIAAjUIMPAAIAADUg");
	this.shape_37.setTransform(592,462.6,0.777,0.777);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").p("AGIjMIAAGaIsPAAIAAmag");
	this.shape_38.setTransform(592,486.8,0.777,0.777);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E6E6E6").s().p("AmHDNIAAmaIMPAAIAAGag");
	this.shape_39.setTransform(592,486.8,0.777,0.777);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").p("AGtjMIAAGaItZAAIAAmag");
	this.shape_40.setTransform(528.2,486.8,0.777,0.777);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6E6E6").s().p("AmsDNIAAmaINZAAIAAGag");
	this.shape_41.setTransform(528.2,486.8,0.777,0.777);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").p("AGthpIAADTItZAAIAAjTg");
	this.shape_42.setTransform(528.2,462.6,0.777,0.777);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E6E6E6").s().p("AmsBqIAAjUINZAAIAADUg");
	this.shape_43.setTransform(528.2,462.6,0.777,0.777);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").p("AGjhpIAADTItFAAIAAjTg");
	this.shape_44.setTransform(462.4,462.6,0.777,0.777);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E6E6E6").s().p("AmiBqIAAjUINEAAIAADUg");
	this.shape_45.setTransform(462.4,462.6,0.777,0.777);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").p("AGjjMIAAGaItFAAIAAmag");
	this.shape_46.setTransform(462.4,486.8,0.777,0.777);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E6E6E6").s().p("AmiDNIAAmaINEAAIAAGag");
	this.shape_47.setTransform(462.4,486.8,0.777,0.777);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").p("EA+fgBuIAADdMh89AAAIAAjdg");
	this.shape_48.setTransform(311.8,511.4,0.777,0.777);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CFE1B5").s().p("Eg+eABvIAAjdMB89AAAIAADdg");
	this.shape_49.setTransform(311.8,511.4,0.777,0.777);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").p("AGIhaIAAC0IsPAAIAAi0g");
	this.shape_50.setTransform(592,387.4,0.777,0.777);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CFE1B5").s().p("AmHBbIAAi0IMPAAIAAC0g");
	this.shape_51.setTransform(592,387.4,0.777,0.777);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").p("AGthaIAAC0ItZAAIAAi0g");
	this.shape_52.setTransform(528.2,387.4,0.777,0.777);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CFE1B5").s().p("AmsBbIAAi0INZAAIAAC0g");
	this.shape_53.setTransform(528.2,387.4,0.777,0.777);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").p("AGjhaIAAC0ItFAAIAAi0g");
	this.shape_54.setTransform(462.4,387.4,0.777,0.777);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CFE1B5").s().p("AmiBbIAAi0INEAAIAAC0g");
	this.shape_55.setTransform(462.4,387.4,0.777,0.777);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").p("EArIgBaIAAC0MhWPAAAIAAi0g");
	this.shape_56.setTransform(215.5,387.4,0.777,0.777);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CFE1B5").s().p("EgrGABbIAAi0MBWNAAAIAAC0g");
	this.shape_57.setTransform(215.5,387.4,0.777,0.777);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").p("AAAhdIAAC6");
	this.shape_58.setTransform(561.6,319.3,0.779,0.779);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").p("AAAhdIAAC6");
	this.shape_59.setTransform(494.8,319.3,0.779,0.779);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").p("AAAhdIAAC6");
	this.shape_60.setTransform(429.6,319.3,0.779,0.779);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").p("EA+fABdMh89AAAIAAi6MB89AAAg");
	this.shape_61.setTransform(311.3,319.3,0.779,0.779);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E6E6E6").s().p("Eg+eABdIAAi6MB89AAAIAAC6g");
	this.shape_62.setTransform(311.3,319.3,0.779,0.779);

	this.text_5 = new cjs.Text("ALTO                   MEDIO                 BAJO", "bold 11px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 300;
	this.text_5.parent = this;
	this.text_5.setTransform(525.6,184.9,0.779,0.779);

	this.text_6 = new cjs.Text("ALTO / MEDIO / BAJO", "bold 11px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 304;
	this.text_6.parent = this;
	this.text_6.setTransform(522.4,332.7,0.779,0.779);

	this.text_7 = new cjs.Text("CALIFICACIÓN GENERAL DE ASPIRACIÓN", "bold 11px 'Arial'");
	this.text_7.lineHeight = 14;
	this.text_7.lineWidth = 289;
	this.text_7.parent = this;
	this.text_7.setTransform(4.1,332.9,0.779,0.779);

	this.text_8 = new cjs.Text("COMPONENTES DE ASPIRACIÓN (Intereses y Motivación)", "bold 15px 'Arial'");
	this.text_8.lineHeight = 19;
	this.text_8.lineWidth = 751;
	this.text_8.parent = this;
	this.text_8.setTransform(4.2,183.8,0.779,0.779);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").p("AGjhvIAADfItFAAIAAjfg");
	this.shape_63.setTransform(462.4,271.3,0.777,0.777);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E6E6E6").s().p("AmiBwIAAjfINEAAIAADfg");
	this.shape_64.setTransform(462.4,271.3,0.777,0.777);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").p("AGjhZIAACyItFAAIAAiyg");
	this.shape_65.setTransform(462.4,204.3,0.777,0.777);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E6E6E6").s().p("AmiBZIAAixINEAAIAACxg");
	this.shape_66.setTransform(462.4,204.3,0.777,0.777);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_67.setTransform(462.4,249.9,0.777,0.777);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E6E6E6").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_68.setTransform(462.4,249.9,0.777,0.777);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").p("AGjimIAAFNItFAAIAAlNg");
	this.shape_69.setTransform(462.4,224.3,0.777,0.777);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E6E6E6").s().p("AmiCnIAAlNINEAAIAAFNg");
	this.shape_70.setTransform(462.4,224.3,0.777,0.777);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").p("AGthZIAACyItZAAIAAiyg");
	this.shape_71.setTransform(528.2,204.3,0.777,0.777);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E6E6E6").s().p("AmsBZIAAixINZAAIAACxg");
	this.shape_72.setTransform(528.2,204.3,0.777,0.777);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").p("AGtimIAAFNItZAAIAAlNg");
	this.shape_73.setTransform(528.2,224.3,0.777,0.777);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E6E6E6").s().p("AmsCnIAAlNINZAAIAAFNg");
	this.shape_74.setTransform(528.2,224.3,0.777,0.777);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_75.setTransform(528.2,249.9,0.777,0.777);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E6E6E6").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_76.setTransform(528.2,249.9,0.777,0.777);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").p("AGthvIAADfItZAAIAAjfg");
	this.shape_77.setTransform(528.2,271.3,0.777,0.777);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E6E6E6").s().p("AmsBwIAAjfINZAAIAADfg");
	this.shape_78.setTransform(528.2,271.3,0.777,0.777);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").p("EArIgCmIAAFNMhWPAAAIAAlNg");
	this.shape_79.setTransform(215.5,224.3,0.777,0.777);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E6E6E6").s().p("EgrGACnIAAlNMBWNAAAIAAFNg");
	this.shape_80.setTransform(215.5,224.3,0.777,0.777);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").p("EArIgBZIAACyMhWPAAAIAAiyg");
	this.shape_81.setTransform(215.5,204.3,0.777,0.777);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E6E6E6").s().p("EgrGABZIAAixMBWNAAAIAACxg");
	this.shape_82.setTransform(215.5,204.3,0.777,0.777);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").p("EArIgBvIAADfMhWPAAAIAAjfg");
	this.shape_83.setTransform(215.5,271.3,0.777,0.777);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E6E6E6").s().p("EgrGABwIAAjfMBWNAAAIAADfg");
	this.shape_84.setTransform(215.5,271.3,0.777,0.777);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_85.setTransform(215.5,249.9,0.777,0.777);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E6E6E6").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_86.setTransform(215.5,249.9,0.777,0.777);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").p("EArIgBqIAADUMhWPAAAIAAjUg");
	this.shape_87.setTransform(215.5,288.1,0.777,0.777);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E6E6E6").s().p("EgrGABqIAAjUMBWNAAAIAADUg");
	this.shape_88.setTransform(215.5,288.1,0.777,0.777);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_89.setTransform(215.5,304.3,0.777,0.777);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E6E6E6").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_90.setTransform(215.5,304.3,0.777,0.777);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").p("AGIhZIAACyIsPAAIAAiyg");
	this.shape_91.setTransform(592,204.3,0.777,0.777);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E6E6E6").s().p("AmHBZIAAixIMPAAIAACxg");
	this.shape_92.setTransform(592,204.3,0.777,0.777);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").p("AGIimIAAFNIsPAAIAAlNg");
	this.shape_93.setTransform(592,224.3,0.777,0.777);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E6E6E6").s().p("AmHCnIAAlNIMPAAIAAFNg");
	this.shape_94.setTransform(592,224.3,0.777,0.777);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_95.setTransform(592,249.9,0.777,0.777);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E6E6E6").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_96.setTransform(592,249.9,0.777,0.777);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").p("AGIhvIAADfIsPAAIAAjfg");
	this.shape_97.setTransform(592,271.3,0.777,0.777);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E6E6E6").s().p("AmHBwIAAjfIMPAAIAADfg");
	this.shape_98.setTransform(592,271.3,0.777,0.777);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").p("AGIhqIAADUIsPAAIAAjUg");
	this.shape_99.setTransform(592,288.1,0.777,0.777);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E6E6E6").s().p("AmHBqIAAjUIMPAAIAADUg");
	this.shape_100.setTransform(592,288.1,0.777,0.777);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_101.setTransform(592,304.3,0.777,0.777);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E6E6E6").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_102.setTransform(592,304.3,0.777,0.777);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").p("AGthlIAADLItZAAIAAjLg");
	this.shape_103.setTransform(528.2,304.3,0.777,0.777);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E6E6E6").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_104.setTransform(528.2,304.3,0.777,0.777);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").p("AGthqIAADUItZAAIAAjUg");
	this.shape_105.setTransform(528.2,288.1,0.777,0.777);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E6E6E6").s().p("AmsBqIAAjUINZAAIAADUg");
	this.shape_106.setTransform(528.2,288.1,0.777,0.777);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").p("AGjhqIAADUItFAAIAAjUg");
	this.shape_107.setTransform(462.4,288.1,0.777,0.777);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E6E6E6").s().p("AmiBqIAAjUINEAAIAADUg");
	this.shape_108.setTransform(462.4,288.1,0.777,0.777);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_109.setTransform(462.4,304.3,0.777,0.777);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E6E6E6").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_110.setTransform(462.4,304.3,0.777,0.777);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").p("EA+fgBuIAADdMh89AAAIAAjdg");
	this.shape_111.setTransform(311.8,335.4,0.777,0.777);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EFEEAE").s().p("Eg+eABvIAAjdMB89AAAIAADdg");
	this.shape_112.setTransform(311.8,335.4,0.777,0.777);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").p("AGIhaIAAC0IsPAAIAAi0g");
	this.shape_113.setTransform(592,190.4,0.777,0.777);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EFEEAE").s().p("AmHBbIAAi1IMPAAIAAC1g");
	this.shape_114.setTransform(592,190.4,0.777,0.777);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").p("AGthaIAAC0ItZAAIAAi0g");
	this.shape_115.setTransform(528.2,190.4,0.777,0.777);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EFEEAE").s().p("AmsBbIAAi1INZAAIAAC1g");
	this.shape_116.setTransform(528.2,190.4,0.777,0.777);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").p("AGjhaIAAC0ItFAAIAAi0g");
	this.shape_117.setTransform(462.4,190.4,0.777,0.777);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EFEEAE").s().p("AmiBbIAAi1INEAAIAAC1g");
	this.shape_118.setTransform(462.4,190.4,0.777,0.777);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").p("EArIgBaIAAC0MhWPAAAIAAi0g");
	this.shape_119.setTransform(215.5,190.4,0.777,0.777);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EFEEAE").s().p("EgrGABbIAAi1MBWNAAAIAAC1g");
	this.shape_120.setTransform(215.5,190.4,0.777,0.777);

	this.text_9 = new cjs.Text("ALTO                   MEDIO                 BAJO", "bold 11px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 14;
	this.text_9.lineWidth = 304;
	this.text_9.parent = this;
	this.text_9.setTransform(527,-16.3,0.779,0.779);

	this.text_10 = new cjs.Text("ALTO / MEDIO / BAJO", "bold 11px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 14;
	this.text_10.lineWidth = 304;
	this.text_10.parent = this;
	this.text_10.setTransform(522.4,132.5,0.779,0.779);

	this.text_11 = new cjs.Text("CALIFICACIÓN GENERAL DE HABILIDAD", "bold 11px 'Arial'");
	this.text_11.lineHeight = 14;
	this.text_11.lineWidth = 288;
	this.text_11.parent = this;
	this.text_11.setTransform(4.1,132.1,0.779,0.779);

	this.text_12 = new cjs.Text("COMPONENTES DE HABILIDAD ( Habilidad Actual y Futuras )", "bold 15px 'Arial'");
	this.text_12.lineHeight = 19;
	this.text_12.lineWidth = 797;
	this.text_12.parent = this;
	this.text_12.setTransform(6.4,-15.5,0.779,0.779);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").p("AGjhZIAACzItFAAIAAizg");
	this.shape_121.setTransform(462.4,3.9,0.777,0.777);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E6E6E6").s().p("AmiBZIAAiyINEAAIAACyg");
	this.shape_122.setTransform(462.4,3.9,0.777,0.777);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_123.setTransform(462.4,49.5,0.777,0.777);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E6E6E6").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_124.setTransform(462.4,49.5,0.777,0.777);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").p("AGjimIAAFNItFAAIAAlNg");
	this.shape_125.setTransform(462.4,23.9,0.777,0.777);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E6E6E6").s().p("AmiCnIAAlNINEAAIAAFNg");
	this.shape_126.setTransform(462.4,23.9,0.777,0.777);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").p("AGthZIAACzItZAAIAAizg");
	this.shape_127.setTransform(528.2,3.9,0.777,0.777);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E6E6E6").s().p("AmsBZIAAiyINZAAIAACyg");
	this.shape_128.setTransform(528.2,3.9,0.777,0.777);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").p("AGtimIAAFNItZAAIAAlNg");
	this.shape_129.setTransform(528.2,23.9,0.777,0.777);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E6E6E6").s().p("AmsCnIAAlNINZAAIAAFNg");
	this.shape_130.setTransform(528.2,23.9,0.777,0.777);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_131.setTransform(528.2,49.5,0.777,0.777);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E6E6E6").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_132.setTransform(528.2,49.5,0.777,0.777);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").p("AGjjeIAAG+ItFAAIAAm+g");
	this.shape_133.setTransform(462.4,79.5,0.777,0.777);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E6E6E6").s().p("AmiDfIAAm+INEAAIAAG+g");
	this.shape_134.setTransform(462.4,79.5,0.777,0.777);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").p("AGtjeIAAG+ItZAAIAAm+g");
	this.shape_135.setTransform(528.2,79.5,0.777,0.777);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E6E6E6").s().p("AmsDfIAAm+INZAAIAAG+g");
	this.shape_136.setTransform(528.2,79.5,0.777,0.777);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").p("EArIgCmIAAFNMhWPAAAIAAlNg");
	this.shape_137.setTransform(215.5,23.9,0.777,0.777);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E6E6E6").s().p("EgrGACnIAAlNMBWNAAAIAAFNg");
	this.shape_138.setTransform(215.5,23.9,0.777,0.777);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").p("EArIgBZIAACzMhWPAAAIAAizg");
	this.shape_139.setTransform(215.5,3.9,0.777,0.777);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E6E6E6").s().p("EgrGABZIAAiyMBWNAAAIAACyg");
	this.shape_140.setTransform(215.5,3.9,0.777,0.777);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").p("EArIgDeIAAG+MhWPAAAIAAm+g");
	this.shape_141.setTransform(215.5,79.5,0.777,0.777);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E6E6E6").s().p("EgrGADfIAAm+MBWNAAAIAAG+g");
	this.shape_142.setTransform(215.5,79.5,0.777,0.777);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_143.setTransform(215.5,49.5,0.777,0.777);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E6E6E6").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_144.setTransform(215.5,49.5,0.777,0.777);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").p("EArIgBpIAADUMhWPAAAIAAjUg");
	this.shape_145.setTransform(215.5,105.2,0.777,0.777);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E6E6E6").s().p("EgrGABrIAAjVMBWNAAAIAADVg");
	this.shape_146.setTransform(215.5,105.2,0.777,0.777);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_147.setTransform(215.5,121.4,0.777,0.777);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E6E6E6").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_148.setTransform(215.5,121.4,0.777,0.777);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").p("AGIhZIAACzIsPAAIAAizg");
	this.shape_149.setTransform(592,3.9,0.777,0.777);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E6E6E6").s().p("AmHBZIAAiyIMPAAIAACyg");
	this.shape_150.setTransform(592,3.9,0.777,0.777);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").p("AGIimIAAFNIsPAAIAAlNg");
	this.shape_151.setTransform(592,23.9,0.777,0.777);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E6E6E6").s().p("AmHCnIAAlNIMPAAIAAFNg");
	this.shape_152.setTransform(592,23.9,0.777,0.777);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_153.setTransform(592,49.5,0.777,0.777);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#E6E6E6").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_154.setTransform(592,49.5,0.777,0.777);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").p("AGIjeIAAG+IsPAAIAAm+g");
	this.shape_155.setTransform(592,79.5,0.777,0.777);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E6E6E6").s().p("AmHDfIAAm+IMPAAIAAG+g");
	this.shape_156.setTransform(592,79.5,0.777,0.777);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").p("AGIhpIAADUIsPAAIAAjUg");
	this.shape_157.setTransform(592,105.2,0.777,0.777);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E6E6E6").s().p("AmHBrIAAjVIMPAAIAADVg");
	this.shape_158.setTransform(592,105.2,0.777,0.777);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_159.setTransform(592,121.4,0.777,0.777);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E6E6E6").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_160.setTransform(592,121.4,0.777,0.777);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").p("AGthlIAADLItZAAIAAjLg");
	this.shape_161.setTransform(528.2,121.4,0.777,0.777);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E6E6E6").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_162.setTransform(528.2,121.4,0.777,0.777);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").p("AGthpIAADUItZAAIAAjUg");
	this.shape_163.setTransform(528.2,105.2,0.777,0.777);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E6E6E6").s().p("AmsBrIAAjVINZAAIAADVg");
	this.shape_164.setTransform(528.2,105.2,0.777,0.777);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").p("AGjhpIAADUItFAAIAAjUg");
	this.shape_165.setTransform(462.4,105.2,0.777,0.777);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E6E6E6").s().p("AmiBrIAAjVINEAAIAADVg");
	this.shape_166.setTransform(462.4,105.2,0.777,0.777);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_167.setTransform(462.4,121.4,0.777,0.777);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E6E6E6").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_168.setTransform(462.4,121.4,0.777,0.777);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").p("EA+fgBuIAADdMh89AAAIAAjdg");
	this.shape_169.setTransform(311.8,137.9,0.777,0.777);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C6DFE9").s().p("Eg+eABvIAAjdMB89AAAIAADdg");
	this.shape_170.setTransform(311.8,137.9,0.777,0.777);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").p("AGIhZIAAC0IsPAAIAAi0g");
	this.shape_171.setTransform(592,-10,0.777,0.777);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C6DFE9").s().p("AmHBaIAAi0IMPAAIAAC0g");
	this.shape_172.setTransform(592,-10,0.777,0.777);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").p("AGthZIAAC0ItZAAIAAi0g");
	this.shape_173.setTransform(528.2,-10,0.777,0.777);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C6DFE9").s().p("AmsBaIAAi0INZAAIAAC0g");
	this.shape_174.setTransform(528.2,-10,0.777,0.777);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").p("AGjhZIAAC0ItFAAIAAi0g");
	this.shape_175.setTransform(462.4,-10,0.777,0.777);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C6DFE9").s().p("AmiBaIAAi0INEAAIAAC0g");
	this.shape_176.setTransform(462.4,-10,0.777,0.777);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").p("EArIgBZIAAC0MhWPAAAIAAi0g");
	this.shape_177.setTransform(215.5,-10,0.777,0.777);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C6DFE9").s().p("EgrGABaIAAi0MBWNAAAIAAC0g");
	this.shape_178.setTransform(215.5,-10,0.777,0.777);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#BDCCD4").ss(1,1,1,3,true).p("Egw0gzZMBhpAAAQB7AABZBYQBYBYAAB8MAAABdbQAAB8hYBYQhZBYh7AAMhhpAAAQh8AAhYhYQhYhYAAh8MAAAhdbQAAh8BYhYQBYhYB8AAg");
	this.shape_179.setTransform(313.1,222.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(227,239,185,0.498)").s().p("EgwzAzaQh9AAhYhYQhXhYgBh8MAAAhdbQABh8BXhYQBYhYB9AAMBhoAAAQB7AABZBYQBXBYAAB8MAAABdbQAAB8hXBYQhZBYh7AAg");
	this.shape_180.setTransform(313.1,222.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_TABLAtodas, new cjs.Rectangle(-30.4,-107.8,766.4,660), null);


(lib.M03_TMR_META = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC686B").s().p("AsoKWQgVAAgQgPQgPgPAAgWIAAhnQAAgbATgTQATgTAbAAIGlAAQAcAAATgUQAUgUgBgcIgBiTQgBgiAYgXQAYgYAhAAIKbAAQAqAAAdgeQAegdAAgpIAAp4QAAggAXgXQAXgXAgAAID0AAIAAC9IhBgCQghgBgYAXQgYAXAAAhIAAKDQAAAqgdAdQgeAegpAAIrGAAQgQAAgMALQgMAMAAAQIAADRQABAdgWAWQgUAVgfAAg");
	this.shape.setTransform(88.2,136.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhrDcQgYgSgGglIAAkaQAAgMgCgKIAAgHQAAgXAJgUQAIgTAPgLQAPgLAQABQAQACAOAMICeCTQAbAaAAAqQAAAsgbAZIidCTQgQAOgSAAQgPAAgNgKg");
	this.shape_1.setTransform(183,74.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AA0BmIiKiiQgDgEAAgFQABgEAEgDIAkgbQAEgDAEABQAEAAADAEIB5CfQAEAFgEAHIgTAfQgDAFgGAAQgFAAgDgEg");
	this.shape_2.setTransform(218,37);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AhEBlIgTgfQgEgHAFgFIB4ifQADgEAEAAQAFgBADADIAlAbQADADABAEQAAAFgDAEIiJCiQgEAEgFAAQgGAAgDgFg");
	this.shape_3.setTransform(260.7,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9BD9C").s().p("AgYgDIAFgcIAZAFIgCAKQgBALAGAHQAJAMAHAEIgZAPg");
	this.shape_4.setTransform(211.6,27.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9BD9C").s().p("AgOAbQgRgSgGgWQgGgXAMgJQAagSAUAlIAMAUQAEAGACgFQABgFABAAIAEADQAEADgGAiIgfAWg");
	this.shape_5.setTransform(208.5,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9BD9C").s().p("AgYATIAEgEQAGgFAGgIQAJgLgGgQIAZgHIAFAdIgZAjg");
	this.shape_6.setTransform(267.7,28.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#41523C").s().p("AAAAKIgFgTIAFgBIAFAVg");
	this.shape_7.setTransform(246.5,67.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#41523C").s().p("AgDAKIADgVIAEABIgDAWg");
	this.shape_8.setTransform(231.3,67.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1A1A").s().p("Ag+ALIgugLIAAgRIAlAKQAqAJAaAAQAlABBJgQIACAOQgxAKgrAGIgRABQgZAAglgHg");
	this.shape_9.setTransform(239.5,67.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9BD9C").s().p("AgkAeIgCgSQgCgSACgBIAEgDQABgBABAFQACAGAEgHIAMgTQAVglAZASQAMAJgGAXQgGAVgRATIgUAZg");
	this.shape_10.setTransform(270.8,22.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D4D4D").s().p("AgcAHIAugbIALAUQgCANgcAIg");
	this.shape_11.setTransform(242,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D4D4D").s().p("AgcgCIAKgVIAvAhIgWAOQgigOgBgMg");
	this.shape_12.setTransform(236.2,29.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#744C28").s().p("AhbA3QgFgBgDgXQgDgWABgRQABgRAlgWQAngWAfACQAdADAgANQAdAMgCADIAAABQAFAEABANQAAALgCAIQgDAOAGAUQABAEgTAaQgGgpgFgEQgEgCgFgSIgFgRQgGAIgJAIQgUAPgWABQglgDgRAAQgdAAgCARQgDAYAFAPQgFgMgFgBg");
	this.shape_13.setTransform(238.8,6.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AAvC/IgvgKIAJhuQABgSgEgzQgDgygBANQgBAMgYAWQgGAEgHAAQgHgBgFgFIhKhhIAcAQQAcANADgPQANhAAJgPIASgMQAWgOAwgDQAagJAYAOQAMAHAHAJIAGC5QADC5gOABIgFABQgQAAgrgIg");
	this.shape_14.setTransform(228.7,48.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AhuDGQgOgBADi5IAGi5IATgQQAYgOAaAJIAbADQAdAFAOAJIASAMQAJAPANBAQAEAPAcgNQAOgHANgJIhKBhQgFAFgHABQgHAAgGgEQgYgXgBgLQgBgNgDAyQgEAzACASIAIBuQhOASgbAAIgGgBg");
	this.shape_15.setTransform(249.9,48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9BD9C").s().p("AgOBxQgKgEgNgJQgagSgOgZIgBgDIAAgQIgBAAIgFgBIgCgCIAAgBIgEgPIgCgTQgCgHAAgFQAAgFACgCQABAAAEADIACADIACgBQgDgNAAgPQAAgjASgIIAAgBIATgOQAXgOAWAAIADAAIAAAAIABAAIAAAAIAAAAIAAAAQAXgBAYAPQAMAHAIAHIAAABQASAIAAAjQAAAPgDANIAAADIACgCQAFgHAEACQADABgCAQIgBABIgDATIgDAPIgBABQgCADgEAAIgBAAIgCAUIgBACQgZAjghARIgBABQgJACgIAAQgHAAgHgCg");
	this.shape_16.setTransform(238.8,14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDAB86").s().p("AgHArQg+gCAQgPQANgOAHgYIAEgXIAdgGQAegEAAAKQABATAbA6IgtABIgUAAg");
	this.shape_17.setTransform(239,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D4D4D").s().p("AA9FRIgegEIgEiuQgEixgCgRIgPicQgbDAAAAHIgVFGIhdAAIANmmIAYj6QAYARBggFQAxgCArgGIAMBSIAGA9QAEAzAAARIgLG9IgWANQgGAEgQAAIgUgCg");
	this.shape_18.setTransform(238.5,99.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1A1A1A").s().p("AAUAgIg0gRQgfACgEgDQgCgCAAgNIAAgNIAFgOIBGgDIAHASIAqAUQARAIgCAKQAAAHgCAAg");
	this.shape_19.setTransform(249.7,135.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1A1A1A").s().p("AgpAVQgDgJALgRQAGgJAGgHIAFgTIA7AAIAAAiQABASgCAFQgGAJgOAHIgKAHIgBABIgjAAQgMgFgFgPg");
	this.shape_20.setTransform(228.5,137);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F6D9B2").s().p("AjaQAQg9AAgrgrQgrgrAAg8IAA7aQAAg9ArgrQArgrA9AAIG2AAQA8AAArArQArArAAA9IAAbaQAAA8grArQgrArg8AAg");
	this.shape_21.setTransform(238.9,243.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9AC9AC").s().p("AjaLbQg9AAgrgqQgrgsAAg8IAAyRQAAg9ArgqQArgsA9ABIG2AAQA8gBArAsQArAqAAA9IAASRQAAA8grAsQgrAqg8AAg");
	this.shape_22.setTransform(137.7,273);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C7C8CA").s().p("AjbHbQg8AAgrgqQgrgsAAg8IAAqRQAAg8ArgsQArgqA8AAIG2AAQA9AAArAqQArAsAAA8IAAKRQAAA9grArQgrAqg9AAg");
	this.shape_23.setTransform(36.6,298.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_META, new cjs.Rectangle(0,0,275.5,346.2), null);


(lib.M03_TMR_BICI3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFE1B5").s().p("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");
	this.shape.setTransform(197.6,216.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_BICI3, new cjs.Rectangle(0,0,395.3,432.9), null);


(lib.M03_TMR_BICI2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFE1B5").s().p("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");
	this.shape.setTransform(275.2,170.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_BICI2, new cjs.Rectangle(0,0,550.5,340.2), null);


(lib.M03_TMR_BICI1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFE1B5").s().p("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");
	this.shape.setTransform(196.5,219);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.M03_TMR_BICI1, new cjs.Rectangle(0,0,393,438.1), null);


(lib.m2t1mc1txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("¿Cómo valorar el potencial de nuestros colaboradores?", "bold 18px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 568;
	this.text.parent = this;
	this.text.setTransform(189.1,18.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5E5D9").s().p("EgnEAEdQh4AAAAh4IAAlJQAAh4B4AAMBOJAAAQB4AAAAB4IAAFJQAAB4h4AAg");
	this.shape.setTransform(441.2,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(179.1,10,580.1,57.1);


(lib.info01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("(*) En el módulo 4 de este curso se encuentra el procedimiento detallado.", "17px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 603;
	this.text.parent = this;
	this.text.setTransform(-332.2,-37.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("EAqDAEWI2gAAMhC9AAAQhkAAAAhkIAAheIAAhjIAAiiQAAhkBkAAMBC9AAAIWgAAIFYAAQBkAAAABkIAACiIAABjIAABeQAABkhkAAg");
	this.shape.setTransform(-76.7,-30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info01, new cjs.Rectangle(-390.2,-58.6,663.3,69.7), null);


(lib.fondobtncerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah2B2QgxgxAAhFQAAhEAxgyQAygxBEAAQBGAAAwAxQAyAyAABEQAABFgyAxQgwAyhGAAQhEAAgygyg");
	this.shape.setTransform(16.8,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondobtncerrar, new cjs.Rectangle(0,0,33.6,33.6), null);


(lib.flechainstrucciones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("ABFBsIhLhNIgYA4QgEAHgHAAQgIgBgCgHIg6i1QgCgHAEgFQAFgEAHACIC1A6QAHACABAIQAAAHgHAEIg3AYIBMBLQADADAAAFQAAAEgDAEIgXAXQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(8.1,9.1,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.5,17.4,17.4);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhpQAFBHAHCN");
	this.shape.setTransform(0.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(-0.7,-1,3.3,23.3), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhmQAFBcAGBx");
	this.shape.setTransform(0.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(-0.7,-0.9,3.3,22.6), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhfQAFBWAGBp");
	this.shape.setTransform(0.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(-0.7,-0.9,3.3,21.2), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhiQAFBXAGBv");
	this.shape.setTransform(0.9,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(-0.7,-0.9,3.3,21.9), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhhQAFBDAGCA");
	this.shape.setTransform(0.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(-0.7,-1,3.2,21.6), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgFhdQAHBoAEBU");
	this.shape.setTransform(0.8,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(-0.7,-1,3.2,20.9), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAHhpQgIB1gEBf");
	this.shape.setTransform(0.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(-0.7,-1,3.3,23.3), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGhmQgGBcgFBx");
	this.shape.setTransform(0.9,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(-0.7,-0.9,3.3,22.6), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGhfQgGBWgFBp");
	this.shape.setTransform(0.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(-0.7,-0.9,3.3,21.2), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGhiQgGBXgFBv");
	this.shape.setTransform(0.9,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(-0.7,-0.9,3.3,21.9), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGhhQgGBZgFBq");
	this.shape.setTransform(0.9,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(-0.7,-1,3.3,21.6), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAGhdQgHBogEBU");
	this.shape.setTransform(0.8,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(-0.7,-1,3.2,20.9), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAZhPIgxCf");
	this.shape.setTransform(2.8,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(-0.7,-0.9,7.1,17.9), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgSA8IAlh3");
	this.shape.setTransform(2.1,6.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(-0.7,-0.9,5.8,14), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AglhRQAhAVATA3QAMAhAJA6");
	this.shape.setTransform(4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(-0.8,-0.8,9.5,18.8), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAmhRQghAVgTA3QgMAhgJA6");
	this.shape.setTransform(3.9,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.7,-0.8,9.5,18.8), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AgOgrIAdBX");
	this.shape.setTransform(1.7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.8,-0.9,5.1,10.8), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6379B7").ss(0.5).p("AAbBLIg1iV");
	this.shape.setTransform(2.9,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-0.7,-0.9,7.4,17), null);


(lib.estrategia1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7DA98").s().p("AgKBXQgDgGgMgFQgJgEgHABIgFABIgNANIgWgVIAMgNQACgFgDgLIgCgGQgEgHgFgDIgEgDIgSABIgBgeIARAAQAHgDAFgLIACgDQACgIgBgGIgBgFIgNgMIAVgXIANAMIAFABQAGAAAHgDIADgBQAMgGABgGIAAgSIAdgBIABARIADAEQADAFAIADIAAAAIADABQAMAEAHgDIAMgNIAWAVIgLANIgBAFQAAAGACAHIABADQAHALAGACIASAAIABAdIgSABIgEACQgEAEgDAHIgDAHQgCALACAFIAOAMIgWAXIgMgMQgHgDgLAEIAAAAQgJAEgEAGIgDAEIAAASIgdABgAgBgvQgTABgOAOQgNAPABASQAAAUAOAOQAPANASgBQAVgBANgOQANgOgBgTQgBgUgNgNQgOgNgTAAIgBAAg");
	this.shape.setTransform(105.7,76.4,0.616,0.616);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3989C").s().p("AAhCpQgJgLgYgCIAAABQgSgBgNAFIgKAFIgOAgIg2gZIAOgfQABgNgNgRIgIgIQgLgLgMgEIgJgCIggAMIgVg4IAggMQALgIACgXIAAgHQAAgQgFgLIgFgIIgggOIAZg3IAfAPIAKgBQAMgEAMgLIAEgDQARgSAAgOIgMggIA3gVIAMAhIAHAFQALAFANACIAIAAQAZAAAKgKIAOgfIA2AYIgOAgIABAJQAEAMAKAMIAEAEQASARANAAIAhgMIAVA4IghALIgFAIQgGAKgBANIgBANQABAWAJAJIAgAOIgZA2IgfgOQgNgBgTAPIABAAQgOAMgFAOQgDAGAAAEIAMAgIg3AVgAgghWQgjAOgQAiQgQAkANAiQAOAlAjAPQAjAQAigOQAkgNAQgjQAQgigNgkQgOgkgjgQQgTgIgTAAQgPAAgRAGg");
	this.shape_1.setTransform(91.6,88.8,0.616,0.616);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6DB5C5").s().p("AlPJGQAwg6AegbQAghGArhTIAlhFIAagHIAIgmIAGgDQANgwAFgbQALgwgJgPQgKgRg2ALQg8APgRABQgWAAgNgJQgJgFgJgOQgGgIAFgXQAEgYgBgCQgBgFABgBIABAAQgGgKgEgPIgCgIIgBgFIgCgGQgFgNACgFIABgEIACgUIAAgPQAAgCgNgBQgQgCgKgFQgLgHgBgNIACgMQAXhAAagoIAAgDQgIgBgDgCQgCgCAAgNIABgTQABgFAJgDQAGgCAEAAQgKADAAAGQgBAHAGAAIAEgHIABgJIACiQIAJgbQhIhuAAgXQAAgJAEgCQAEgCANAEQAtAJAsgCIgPg2IAdATQAjAUAjAHIAWgDIgNg0IAYARQAeASAgAJQAWgEAOAAIADAAIgHgZIALAIQANAJAPAIIALABQBWgDAjANQBLAdAxBGQBEBggLCOQgLCGhWBjQgbAfggAXIgZARIgBgEQgMAjgLArIAPgHIAVBTIARALQAVAPAUAVIgCgMIAGARQA7BAAfBbQAgBcABBxQiSA/ihAAQixAAjEhNg");
	this.shape_2.setTransform(91.3,105.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6D9B2").s().p("AgCAWIgEgDIgFAAIgDADIgGgFIADgDIAAgFIgBgBIgDgDIgEAAIgBgHIAFAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBIAAAAIAAgFIgDgDIAFgGIADADIAFAAIABgBQAAAAABAAQABgBAAAAQABgBAAAAQAAAAAAgBIAAgEIAHgBIAAAFIADADIABAAIAAAAQABAAABABQABAAAAAAQABAAAAAAQABgBAAAAIADgDIAGAFIgDADIAAAFIABABQAAABABAAQAAABAAAAQABABAAAAQAAAAABAAIAEAAIABAHIgFAAIgDADIAAACQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAIADADIgFAGIgEgDIgEAAIgEAEIAAAEIgHABgAgIgHQgDAEAAADQAAAFAEAEQAEADADAAQAFAAAEgEQADgEAAgEQAAgEgEgEQgEgDgEAAQgEAAgEAEg");
	this.shape_3.setTransform(128.3,55,0.911,0.911);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6D9B2").s().p("AAIAqQgCgCgGAAQgEgBgDACIgDABIgDAIIgOgHIAEgHQAAgDgDgFIgCgCQgDgDgDAAIgCgBIgJADIgFgOIAIgEQADgBAAgGIAAAAIABgBQAAgEgCgDIgBgCIgIgEIAGgOIAIAEIADgBQADAAADgDIABgBQAEgFAAgDIgDgIIAOgFIADAIIACACIAFABIACAAQAGAAADgCIAEgIIANAGIgDAIIAAADQABADADACIABABQAEAFADAAIAJgEIAFAOIgIADIgCADIgBAFIgBADQABAGACACIAIAEIgGANIgIgEQgEABgEADQgEADgBADIgBADIAEAIIgPAGgAgHgVQgJADgEAJQgEAJADAIQAEAJAIAEQAJAEAIgDQAJgEAEgJQAEgIgDgJQgDgJgJgDQgFgDgFAAIgHACg");
	this.shape_4.setTransform(123,59.7,0.911,0.911);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DFE5DF").s().p("AlaM0QifhEh7h7Qh7h7hEifQhGimAAi1QAAi0BGilQBEigB7h8QB7h6CfhEQCmhGC0AAQC1AAClBGQCgBEB7B6QB7B8BECgQBGClAAC0QAAC1hGCmQhECfh7B7Qh7B7igBEQilBGi1AAQi0AAimhGg");
	this.shape_5.setTransform(91.5,91.3,0.911,0.911);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFEFEF").s().p("AljNKQikhGh+h+Qh/h+hFikQhIiqAAi6QAAi5BIiqQBFikB/h+QB+h/CkhFQCqhIC5AAQC6AACqBIQCjBFCAB/QB9B+BGCkQBICqAAC5QAAC6hICqQhGCkh9B+QiAB+ijBGQiqBIi6AAQi5AAiqhIg");
	this.shape_6.setTransform(91.4,91.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,182.8);


(lib.escalavaloraciontxt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("A partir de esta valoración, el colaborador será ubicado inicialmente en una de las tres categorías de potencial.", "16px 'Arial'", "#333333");
	this.text.lineHeight = 19;
	this.text.lineWidth = 433;
	this.text.parent = this;
	this.text.setTransform(2,28.1);

	this.text_1 = new cjs.Text("Escala de valoración de Potencial", "bold 19px 'Arial'", "#333333");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 347;
	this.text_1.parent = this;
	this.text_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,436.5,85.8);


(lib.info02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Al momento de evaluar a cada colaborador es muy importante justificar el resultado con ejemplos de comportamientos observables y situaciones específicas.", "16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 245;
	this.text.parent = this;
	this.text.setTransform(-263.4,-10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFB9").s().p("AAwL6Ih8AAIknAAIgVAAIgD3wIAVAAIEoAAIB7AAIClAAIIkgDIIgAAQBkAAAABkIAAAqIAACXIACNfIAAADIAACpIAAABIAABbQAABkhjAAIohAAIojADgApNL6IgmAAIg9AAIiLAAIgsAAImuAAQhkAAAAhkIAAhbIAAgBIAAipIAAgDIgCtfIAAiXIAAgqQAAhkBjAAIGvAAIArAAICMAAIA9AAIAlAAIDFAAIACXwg");
	this.shape.setTransform(-263.7,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info02, new cjs.Rectangle(-404.2,-58.9,280.9,158.4), null);


(lib.barrabcdespliega = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eu28AH9UmJ9gDTAAAgEqUAAAgEqGJ9gDTUGJ+gDTIs+AAAUIs/AAAGJ+ADTUGJ9ADTAAAAEqUAAAAEqmJ9ADTUmJ+ADUos/AAAUos+AAAmJ+gDUg");
	this.shape.setTransform(6978.4,72,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1629,0,17214.9,144.2);


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


(lib.CirculoRojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D73D45").s().p("AoZIYQjejdAAk7QAAk6DejfQDfjeE6AAQE7AADdDeQDgDfAAE6QAAE7jgDdQjdDgk7AAQk6AAjfjgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-76,152,152);


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
	this.shape.setTransform(104.6,9.1,0.895,0.895);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.5,1,16.2,16.2);


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
	this.text = new cjs.Text("(*) Esta dimensión se valora utilizando el check list de potencial.\n", "16px 'Arial'", "#333333");
	this.text.lineHeight = 20;
	this.text.lineWidth = 374;
	this.text.parent = this;
	this.text.setTransform(35.1,223.6);

	this.text_1 = new cjs.Text("Potencial*:", "bold 20px 'Arial'", "#333333");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 573;
	this.text_1.parent = this;
	this.text_1.setTransform(35.1,106.2);

	this.text_2 = new cjs.Text("Se define como la cantidad máxima de contribución que el colaborador es capaz de entregar en el largo plazo.\n", "18px 'Arial'", "#333333");
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 374;
	this.text_2.parent = this;
	this.text_2.setTransform(35.1,139.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(238,239,239,0.498)").s().p("A+lXhQhoAAhKhJQhIhJgBhoMAAAgnNQABhoBIhJQBKhJBoAAMA9LAAAQBoAABJBJQBKBJAABoMAAAAnNQAABohKBJQhJBJhoAAg");
	this.shape.setTransform(220.9,150.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,610.2,323.1);


(lib.cajagdemc1t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("¿Cómo valorar el potencial de nuestros colaboradores?", "bold 22px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 331;
	this.text.parent = this;
	this.text.setTransform(246.6,46.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

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


(lib.T3_Señalar_btn_gr_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.573)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_gr_1_lineaMOD3a, new cjs.Rectangle(0,0,90,96), null);


(lib.T3_movie_rollover_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.114)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_1.setTransform(45,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.192)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_2.setTransform(45,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.259)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_3.setTransform(45,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.318)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_4.setTransform(45,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.369)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_5.setTransform(45,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.408)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_6.setTransform(45,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.443)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_7.setTransform(45,48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.463)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_8.setTransform(45,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_9.setTransform(45,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.482)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_10.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_activo_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_lineaMOD3a, null, null);


(lib.T3_Señalar_btn_gr_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.573)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.T3_Señalar_btn_gr_1_linea, new cjs.Rectangle(0,0,90,96), null);


(lib.T3_movie_rollover_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.027)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.114)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_1.setTransform(45,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.192)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_2.setTransform(45,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.259)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_3.setTransform(45,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.318)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_4.setTransform(45,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.369)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_5.setTransform(45,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.408)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_6.setTransform(45,48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.443)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_7.setTransform(45,48);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.463)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_8.setTransform(45,48);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.478)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_9.setTransform(45,48);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.482)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape_10.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_activo_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.T3_btn_activo_1_linea, null, null);


(lib.t2mc3_cuadrotransicion_mc3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
		this.parent.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGVVQgCAAgCgQQgDADgDABQgQgDgNhvQgOhvgKjJQgSl4AAoaQAAl/AKk3QAJk4ARi2QAQi5AVgEQAEABAEAKIFUAAQAEAAADA5QADA4AABRMAAAAkaQAABQgDA4QgDA6gEAAg");
	this.shape.setTransform(462.7,113.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkoVAQgEAAgFgPQgHADgGABQgigDgehuQgehtgWjGQgmlygCoTQAAl4AWkzQAVkzAki0QAli1AsgEQAKABAKAJILrAAQAJAAAHA4QAGA3AABQMAAAAj3QAABPgGA3QgHA5gJAAg");
	this.shape_1.setTransform(431.8,113);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnJUsQgIAAgHgQQgJAEgLABQg0gDgvhtQgthsgijBQg9lugCoKQABlzAhkuQAhkuA4ixQA4iyBFgFQAPABAOAKISDAAQAOgBAKA4QAKA3AABOMAAAAjUQAABNgKA3QgKA4gOAAg");
	this.shape_2.setTransform(400.8,112.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AprUYQgLAAgJgQQgNAEgOAAQhHgCg+hrQg+hqgujAQhSlngCoCQABltAskqQAtkpBLiuQBMixBdgEQAVABAUAKIYaAAQASAAAOA2QAOA2AABNMAAAAixQAABNgOA1QgOA4gSAAg");
	this.shape_3.setTransform(369.9,111.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AsNUDQgNAAgLgPQgRAEgRAAQhbgChOhqQhOhog6i9QhmligEn5QABloA5kkQA3klBfisQBfitB2gEQAbAAAZAKIexAAQAYAAARA2QASA0AABMMAAAAiPQAABLgSA1QgRA2gYAAg");
	this.shape_4.setTransform(339,111.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AuvTvQgPAAgOgPQgUADgVABQhugChehoQhdhnhGi5Qh8ldgEnxQABliBEkgQBDkgBzipQByirCOgEQAgABAfAJMAlIAAAQAdAAAWA1QAUA0ABBLMAAAAhrQgBBKgUA0QgWA2gdAAg");
	this.shape_5.setTransform(308.1,110.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AxQTbQgSAAgRgPQgXADgZAAQiAgBhvhnQhuhlhSi3QiRlWgEnpQABldBQkbQBPkcCGilQCGioCngFQAlABAkAJMArfAAAQAjAAAZA0QAYAzAABKMAAAAhJQAABIgYA0QgZA1gjAAg");
	this.shape_6.setTransform(277.2,109.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AzyTGQgVAAgSgOQgcADgcABQiSgDh/hkQh+hkheizQimlRgFniQABlWBbkXQBbkXCZijQCbilC+gEQArABApAIMAx3AAAQAnAAAcA0QAcAyAABJMAAAAglQAABIgcAyQgcA0gnAAg");
	this.shape_7.setTransform(246.2,109.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A2TSyQgYAAgVgPQgfAEggAAQilgCiPhjQiOhihqiwQi7lLgGnaQABlRBokSQBmkSCtigQCuijDWgEQAxABAuAJMA4OAAAQAtAAAgAyQAfAyAABHMAAAAgDQAABGgfAxQggA0gtAAg");
	this.shape_8.setTransform(215.3,108.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A41SdQgbAAgWgOQgjAEgjAAQi4gCifhhQifhhh2itQjQlGgHnRQAClLBzkNQBxkODBieQDCifDvgEQA2ABAzAIMA+lAAAQAyAAAkAyQAjAwAABHIAAffQAABFgjAxQgkAygyAAg");
	this.shape_9.setTransform(184.4,107.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A7WSJQgeAAgZgOQgnAEgnAAQjKgCiwhgQiuhfiCiqQjllAgInJQADlFB+kKQB9kIDVicQDVidEHgDQA8AAA4AJMBE9AAAQA2AAAoAxQAmAvABBGIAAe8QgBBEgmAwQgoAyg2AAg");
	this.shape_10.setTransform(153.5,107.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A94R0QghABgbgOQgpADgrAAQjegCi/heQi/hdiNinQj7k6gInBQAClACKkEQCJkEDoiZQDpiaEggDQBBAAA9AJMBLVAAAQA7gBArAwQAqAvAABEIAAeaQAABCgqAwQgrAwg7AAg");
	this.shape_11.setTransform(122.5,106.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EggaARgQgjAAgegOQgtAEguABQjwgDjQhcQjOhbiaikQkQk1gJm6QADk6CWj/QCUj/D8iWQD8iYE4gDQBGAABDAJMBRsAAAQBAAAAvAvQAuAuAABCIAAd4QAABBguAuQgvAwhAAAg");
	this.shape_12.setTransform(91.6,105.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	// Contenidos
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("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");
	this.shape_13.setTransform(304.3,128.5);

	this.text = new cjs.Text("Alto Potencial", "bold 22px 'Arial'", "#333333");
	this.text.lineHeight = 26;
	this.text.lineWidth = 288;
	this.text.parent = this;
	this.text.setTransform(222.2,14.7,0.98,0.943);

	this.text_1 = new cjs.Text("Colaborador con la capacidad (habilidad, aspiración y compromiso) necesaria para asumir un puesto de mayor responsabilidad en el mediano o largo plazo (2 o más niveles organizacionales) y desempeñarlo de forma exitosa.", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 337;
	this.text_1.parent = this;
	this.text_1.setTransform(-165.1,48.1,0.98,0.943);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BAD193").s().p("AyRNUIAA6nMAkjAAAIAAYJQAABBguAuQgvAvhBAAg");
	this.shape_14.setTransform(306.1,132.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#97AF68").s().p("AyRD+IAAn7MAiFAAAQBBAAAvAvQAuAuAABCIAAFcg");
	this.shape_15.setTransform(306.1,22);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CFE1B5").s().p("EgpDARSQhCAAgugvQguguAAhBIAA9mQAAhCAuguQAugvBCAAMBSHAAAQBBAAAuAvQAvAuAABCIAAdmQAABBgvAuQguAvhBAAg");
	this.shape_16.setTransform(144.5,107.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CFE1B5").s().p("AnOP0QjPhbiaiiQkSkzgJm1QADk3CWj9QCWj9D8iVQD9iWE4gDQDyABDPBcQDRBcCaChQEQEzAIG1QgDE3iWD9QiVD9j9CWQj8CVk4ADQjwgCjRhbg");
	this.shape_17.setTransform(-132.6,106.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.text_1},{t:this.text},{t:this.shape_13}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.2,-22.8,749.8,273);


(lib.t2mc3_cuadrotransicion_mc3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
		this.parent.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGUFQgCAAgCgPQgDAEgDAAQgQgDgNhpQgOhpgKi8QgSljAAn6QAAloAKklQAJkmARirQAQiuAVgEQAEABAEAJIFUAAQAEAAADA2QADA1AABMMAAAAiRQAABMgDA0QgDA3gEAAg");
	this.shape.setTransform(488.1,100.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkcUGQgFAAgEgQQgGAEgHABQgggDgdhqQgchogVi9QgmljgBn6QAAloAVklQAUkmAjisQAiiuArgEQAKABAJAJILOAAQAIAAAHA3QAGA0AABNMAAAAiSQAABLgGA1QgHA3gIAAg");
	this.shape_1.setTransform(457,101.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmyUGQgIAAgFgQQgKAEgJABQgzgDgshqQgrhpggi8Qg6ljgBn6QABloAfkmQAfkmA1irQA1iuBBgEQAPABAOAJIRHAAQANAAAKA2QAKA1AABNMAAAAiRQAABMgKA1QgKA3gNAAg");
	this.shape_2.setTransform(425.9,103);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApIUGQgKAAgJgPQgMAEgNAAQhEgCg6hqQg7hpgri8QhNlkgCn6QABlpAqklQApklBHisQBIiuBYgEQAUABASAJIXBAAQATAAANA2QANA1AABMMAAAAiTQAABMgNA0QgNA3gTAAg");
	this.shape_3.setTransform(394.8,104.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AreUHQgMAAgLgQQgQAEgQABQhVgDhKhqQhJhpg2i8QhhljgDn7QABlpA1klQA1kmBZirQBZivBvgEQAZABAXAJIc7AAQAXAAARA3QAQA1AABMMAAAAiTQAABMgQA1QgRA3gXAAg");
	this.shape_4.setTransform(363.7,105.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("At0UHQgPAAgNgPQgTADgUABQhmgDhYhqQhZhphBi8Qh0ljgEn7QABlpBAkmQA/klBsisQBriuCGgEQAdABAdAJMAi1AAAQAbAAAUA2QAUA1AABMMAAAAiUQAABMgUA0QgUA4gbAAg");
	this.shape_5.setTransform(332.6,106.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AwKUIQgSAAgPgQQgVAEgYABQh3gEhohpQhnhphMi9QiJljgEn7QABlpBLkmQBKklB+isQB9ivCdgDQAiAAAhAKMAovAAAQAhAAAXA2QAXA0AABNMAAAAiVQAABMgXA0QgXA3ghABg");
	this.shape_6.setTransform(301.5,107.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AygUIQgUAAgRgQQgaAEgaABQiJgDh2hqQh2hphYi8QiclkgFn7QAClpBVkmQBVklCQisQCQivCygEQAoABAmAJMAupAAAQAlAAAaA3QAbA1AABMMAAAAiVQAABMgbA1QgaA3glAAg");
	this.shape_7.setTransform(270.3,108.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A02UIQgWAAgUgPQgcAEgeAAQiagCiGhqQiEhphki9QivljgGn8QAClpBhkmQBfkmCiirQCiivDJgEQAtABArAJMA0iAAAQAqAAAeA2QAeA1AABMMAAAAiXQAABLgeA1QgeA3gqAAg");
	this.shape_8.setTransform(239.2,109.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A3LUJQgaAAgVgQQghAEghAAQirgCiUhrQiUhohui9QjEljgFn8QABlqBsklQBqkmC0isQC0iuDggFQAyACAvAIMA6dAAAQAuAAAiA2QAgA2ABBMMAAAAiXQgBBLggA1QgiA4guAAg");
	this.shape_9.setTransform(208.1,110.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A5hUJQgcAAgYgQQgjAEglABQi9gDijhqQijhph5i9QjWljgHn8QAClpB2knQB1klDGisQDHivD2gEQA3ABA1AJMBAWAAAQAzAAAkA2QAkA1AABMMAAAAiYQAABMgkA1QgkA3gzAAg");
	this.shape_10.setTransform(177,111.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A73UJQgfAAgagPQgmAEgoAAQjOgCizhqQixhpiEi9QjrlkgHn8QAClqCAklQCAkmDZisQDZivEMgEQA8ABA6AJMBGQAAAQA4AAAoA2QAnA1AABMMAAAAiZQAABLgnA1QgoA3g4AAg");
	this.shape_11.setTransform(145.9,112.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A+NUJQghAAgcgPQgqADgrABQjggCjChrQjAhpiPi8Qj+ljgIn9QAClqCLkmQCMkmDqirQDriwEjgDQBBAAA/AJMBMJAAAQA9AAAsA2QAqA2AABMMAAAAiZQAABLgqA1QgsA3g9AAg");
	this.shape_12.setTransform(114.8,114);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EggKAQ4QgkAAgdgNQgtADgtAAQjugBjPhaQjNhYiYidQkOkrgJmpQACkvCVj2QCTj2D7iQQD5iTE3gDQBFAABDAIMBREAAAQBAAAAvAtQAtAtAABAIAAczQAAA/gtAsQgvAvhAAAg");
	this.shape_13.setTransform(83.6,115.1,1.012,1.194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

	// Contenidos
	this.text = new cjs.Text("Potencial Medio", "bold 22px 'Arial'", "#333333");
	this.text.lineHeight = 26;
	this.text.lineWidth = 288;
	this.text.parent = this;
	this.text.setTransform(215,15.1,0.979,0.955);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AKWI0Qg3gBgxgVQgwgUglgjQgkgjgTgtQgVgvABgyQABhHApg6IiBCSQAFAOAAAOQgBAbgSASQARAAAIAIQAFAFgBAIQgDAQgnAMIgOAEQAAAEgBAEQAAAFgDADQgDAGgGAAQgIABgFgGQgDgDgBgFIgQgBIgKgVIgZgBQgRAAgGAEQgiA0g4AgQg7AghEADQg2ACgygRQgxgQgmggQgnghgWgrQgXgtgCgyQgCgyATguQASgtAjgjQAkgkAvgUQAwgVA3gDQAsgCApALQAoALAkAXQAFgDAEACIAIADIAQgKQAOgJACgIQABgDgDgEQgPgTgLgUQgSgigKgqQgVgCgfgTQgWgOACgJQABgIATgEQgIgKgBgPQgDgZAOgbQAIgPALgPIgNgNQAOgTAQgPQgJgMgCgRQgBgUAIgPIAEgEQAEgCABgCQABgDADgaQACgWAKgFQACgJAHgGIANgLIAJgIIAHgHQAEgCALgEQAIgEAEgEQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAgBgBIABgEIAOgFQAJgDAHgBQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQADgBAEgDQAEgEADgBQACABAGAFQAEADAEgBIAAgLQAAgGACgFQAGgFAJACIAQADQAFABAJgCQAJgCAEABQADAGAQAFQAPAEACAJQAJAIAPAGQAeANAagCIgBATQAqgEAUAJIAGABIAOAPIADgGIgCABQgGgQgCgYQgCgwAbgoQAegsApgMQAfgJAdAJQANADAZAVIADACIANABIAFAAIgIAGIAAABIAKAJQAMAFANABIAKABIgPAMIAGAGQAMAFAPACIAMABIgQANQAMAKAQAHIAFAEQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAABQgGAHguAPIgEAKIggApIgCADIAAADQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBIAAgDIgBgCIACADQABABAAAAQABABAAABQAAAAAAABQAAAAgBABIgEAFIgDAEIgEgCIgBABQgCARgIAYIgCAEQgDADgFAAQgEgBgFgDQgEgCgBAAQgGAIgBADIgBABQAAACgFADIgCABIgBABIgDACIgJAFIABAAIgCACIgEAIQgEAIgEABQgGACgEgBQgGAAgGgFQgFgEgOgSQgOgPgGADQgEABgFAHQAGAQABAQIgXACIgBACIABACIgEAJQgFArgGAGQgDAFABAKIADAJQA4BFAVAVQAAgIAEgGQAGgJANgFQAKgDAMgBIAWACQAMABAFAAQAJAAAEgDQAEgDADgGQAFgGAEgCQAGgCANAEQAMADABAGQACAHgGAIIgIAKQgEAYgFAKIgGARIAAADIgEAAIAAgBIgCAAIgDAAIAAgBIgCAAIgGAAQgFAAgIADIgIAEQgLAQgLADQgLADAAAEQgBAEAIAFQALAGAMABQAQADAOgHQAIgEAGgIIAGgFQADgCAGABQAJABAHAFQAHAEABAFQABAEgEADQgQAMABAGQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABQAEADAAAFIgCAKIgCAKIABAUQBgARA+BGQBABHgCBdQgBAygWAuQgVAsgmAiQgmAigxASQgvASg0AAIgFAAgAKXIBIAMAAIAagDIgiixIAAAAgAJyH+QAQACASABIADi0gAg8IBIAHAAQARgBARgDIgShZIgQgCIgFAAgAhjH+QASADATAAIABhfIgEABQgMABgCgCgALBH+QARgDARgGIhEioIAAAAgAiNHzQATAHAUAEIAfiPQgGgDgDgDgAJJHzQAUAHARADIAmiwIgBAAgAgQH8QARgDAQgGIgehNIgUgCgALmH0QASgGARgJIhliXIgCgBgAixHiQAPAJASAHIA/iNIgBAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCAAIgCAAIAAAAgAImHiQAQAJAQAHIBJilIgBAAgAAUHxQAUgIAQgKIglg3IgcgCgAMMHjQAQgJANgLIh/iBIgCAAgAIEHJQAPANARALIBniUIgCAAgAjVHIQAPANASALIBZh/IgOABgAA7HeQAPgKANgMIgegeIgigCgAKuFNIB+CAQAOgNANgPIiXhlIgCABgAHqGtQAKAPANAMICDh7IgDAAgABZHGQAMgLALgOIAAgBIgygCgAkSFGQABAlAQAhQAPAgAbAZIBrhlIAAAAIABgDIACgFQAGgFACgFIiOBbIgCgDICShdIABgFIAAgCIimBAIgBgDICohAIABgEIizAhIgBgDIC1giIACgDIi5gEIAAAWgAKyFKICXBkQAMgPAIgPIirhIgAHTGJQAIARANARICUhfIgGgCgABxGeQgBgOAJgQIgegMIg9gJIBLAyIAIABIAAAAgABjGdIhMgzIgYgDIgBABIAwAxIA1AEgAApGZIgugvIgLACIAbArIAeACgAAHGXIgagqIgNAAIARAoIAWACgAgTGVIgQgoIgCAAIAAAIIgEAEIACANIABACQAEAEgBAFIgBADIARABgAhMGSIAPgeIgHgDgAKzFEICrBJQAJgSAGgTIi6gmgAHHFjQAEASAHARICig+IgBgDIABgBgAB6F+IAEgFIgYgEgAKyE/IC7AmQAEgSABgTIjAgDgAHCFEQABAPADANIDEgkIjIgDIAAALgAArFVIg0gQIAdAOIAXACgAAKFRIgegNIgCAEIALAHIAVACgAgRFPIgGgEIAAADIAGABgACMFJIgCgRIhfgCIBhATgAKCFBIADAAIAEgBgAKxE4IAAACIDBAEIAAgMQgBgPgCgNgAKJE5IjCgnQgEARgBATIDHADgAKLE2Ii1hMQgJARgFAUIDDAngAKvE1IABABIC+gkQgEgSgHgQgACJE1IgDgTIh3AFIgNACIgDAEIAbAGIBvACgAKLEzIihhqQgLAOgIAQIC0BMgAKuEwIAAABICzhEQgHgSgNgRgAkSEtIC7AEIACgDIi2gkQgFARgCASgAKMEwIgBgBIiDiFQgPAMgNAQICgBqgAKsErIAAACICfhlQgLgPgNgMgAkKEHIC3AlIACgCIiohIQgLASgGATgAKqEmIABADICFh+QgPgNgRgKgAKJEoIgDgHIhfiNQgPAIgOAMIB/CAgAj4DgICpBIIACgBIiWhkQgNAPgIAOgAjhDBICXBkIABAAIh8h+QgPAMgNAOgAjDClIB9B+IABAAIhhiQQgQAJgNAJgAKnEgIABADIBmiRQgQgJgRgGgAhBEiIhAieQgSAGgQAIIBhCQIABAAgAhbB7IAgCmIABgBIADinIgPAAIgVACgAg+EhIggilIggAHIBACegAgVEeIAPAAIADgBIATgYgAg3EeIABgBIAjigQgRgDgQgBgAggEdIAGAAIAxggIA/hKIgBAAgAASEXIgFAGIAwgCIBFgNQgEgRgBgPgAKjEWIACAGIBFiaQgRgGgUgEgABREbIAzgCIgBgIgAgyEZIAFgEIA+iOQgRgGgQgDgAKAETQgUgwgjhEIgNgWIgSAJIBWCBIAAAAgAA2DtIggAmIBmgnIgBgPQgFgKgIgKgAKcEHIAFAKIAgiaQgRgCgRgBgAgnEQIANgMIBMhtQgOgJgQgGgAGjA+IgmAbIgvAhIgNAJQg/AogQAPQALABAIADQANAEABALQACALgFAOQgDAJgFAHIAmATIDCjPIgYgHgAJ1B4IAUBoIAQAhIADiNIgKAAQgNABgQADgAgQD7IBchTIAAAAQgKgIgNgIgAA9DlIAvgeIgLgMgAKEDUIgShcQgMACgMAEIAqBWgACBCRIADAEIADgLgAHfCIQAbgZAigQIgPgMgADuBYQACAIgEANIAYgbgAK8BEIgBgVIgBgLQgBgHgDgCQgCgCgDABQgFAAgCADQgCACAAAEQAJAMABASIAAABIAKACgADkAsQAAADAGASIA1gNIAOgMQANgLAPgFQgigIgSABQgaABgWgFQAAAagBAFgAI4gQQAOANAjAnIAbgDQgCgFgIgEQgFgDgMgFIgUgKQgIgFgCgIQgCgGABgGgAFbisQgKAEgeAKQggAKgUAFIgGABQgfAFgCAFIAAABQAFAGAHADQAGACATACQAZAEAgAMQAmAPAjAWIAPAKQAkAWAIAIQAMAMgEANQgEALgEAHIA/gKQgmgsgJgWQgFgKgKgjIgKggQgFgQgDgBIgRgRQgNgOgCgJgAKrhkQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIACACIADAGQACAFAAAHQACgFABgHQACgJgCgDQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAQgEAAgBACgAoNC9QgegMgRgYQgSgYABgfQAAgjAZgPQAcgPASAXQARAVgIAcQgDANgOgEQgOgEADgNQACgIgBgIQgCgLgHABQgIABgEAKQgEAHAAAKQAAAVANARQAMAQAUAJQAXAKAbgFQAVgEAcgOIA1gcQAfgPAagEQAOgCADAOQAEAOgNACQgfAEg1AdQg1AdgfAEIgQABQgWAAgUgIgAqHgNQglgKgcgVQgigZgGggQgDgPAFgOQAEgPAMgJQAMgMATABQAOAAAUAIQAMAFgDANQgEAOgNgFQgQgGgHgBQgNgBgHAKQgGAIABAKQABAKAGAJQAKAQAUANQAQAMAWAHQAoAOAwgFQAqgEAtgUQAKgEBBgkQAugYAigHQAqgJA0AIQAiAGA5ASQANAEgEAOQgEANgNgEQg+gUgmgEQg4gHgsARQgYAJgzAcQguAagdAJQgwAQgsAAQggAAgegIgAtsijQgUgFgOgPQgbgbADglQAEgnAigUQAbgPAoABQAdACAnAKQAeAIA2AZQA3AZAdAIQAuAMA6ACQAjABBHgDQAOAAAAAOQAAAOgOAAQg9ADghgBQg0gBgqgHQgegGgkgOIhAgcQhQgig1gBQgiAAgVARQgZAUAMAgQAFAPANAKQANAKAQgCQAPgBAMgKQAKgKADgQQACgNAOAEQAOAEgCANQgDAVgOAOQgOANgTAGQgKACgLAAQgJAAgJgBgAqPlGQhRgLgRhBQgDgNANgDQAPgEADANQALAqA0ALQAjAHA3gGQApgFA2gNIBdgZQBrgcBFAAQBmAAA+A2QAKAJgKAKQgLAKgKgJQg2gwhmADQg8AChaAWIhJAUQgsALgeAGQg6AMgsAAQgTAAgQgCg");
	this.shape_14.setTransform(288.4,125.6);

	this.text_1 = new cjs.Text("Colaborador con la aspiración y compromiso adecuados para tomar un puesto de mayor responsabilidad en el corto o mediano plazo (1 nivel organizacional superior) y desempeñarse exitosamente.", "18px 'Arial'", "#333333");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 325;
	this.text_1.parent = this;
	this.text_1.setTransform(-172.3,51.5,0.979,0.955);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BAD193").s().p("AyRNUIAA6nMAkjAAAIAAYJQAABBguAuQgvAvhBAAg");
	this.shape_15.setTransform(300.9,132.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#97AF68").s().p("AyRD+IAAn7MAiFAAAQBBAAAvAvQAuAuAABCIAAFcg");
	this.shape_16.setTransform(300.9,22);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CFE1B5").s().p("EgpDARSQhCAAgugvQguguAAhBIAA9mQAAhCAuguQAugvBCAAMBSHAAAQBBAAAuAvQAvAuAABCIAAdmQAABBgvAuQguAvhBAAg");
	this.shape_17.setTransform(139.3,107.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CFE1B5").s().p("AnOP0QjPhbibiiQkQkzgKm1QADk3CWj9QCVj9D9iVQD9iWE4gDQDyABDPBcQDQBcCbChQEPEzAKG1QgDE3iWD9QiVD9j+CWQj8CVk4ADQjxgCjQhbg");
	this.shape_18.setTransform(-137.7,106.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.text_1},{t:this.shape_14},{t:this.text}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.4,-27.7,758.2,257.1);


(lib.t2mc3_cuadrotransicion_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
		this.parent.m2mc1_Cerrar.visible=true;
		this.parent.fondoCerrar.visible=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/uQLQgiAAgegNQgsADgtABQjqgCjMhVQjKhViXiXQkKkegJmXQADkjCTjrQCRjtD2iKQD3iMEygDQBEABBCAHMBP8AAAQBAAAAtAsQAuAqgBA+IAAbmQABA8guArQgtAshAAAg");
	this.shape.setTransform(84,105.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A/HQMQgiAAgdgNQgsADgrABQjngCjHhVQjGhViUiYQkGkdgHmYQACkjCPjsQCPjtDyiKQDyiMEsgDQBCABBBAHMBObAAAQA/AAAsAsQAsAqAAA+IAAboQAAA8gsArQgsAsg/AAg");
	this.shape_1.setTransform(92.2,105.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A9UQPQgfAAgbgMQgpADgpAAQjZgCi8hVQi7hViLiYQj2kfgImZQADkjCHjtQCGjtDkiLQDkiNEagDQA/ABA8AHMBJ4AAAQA6AAArAsQApArAAA+IAAbtQAAA9gpAqQgrAsg6AAg");
	this.shape_2.setTransform(117,105.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A6SQVQgcAAgZgOQgkADglABQjDgCiohVQiohWh9iZQjckggHmbQACklB5juQB4jvDNiLQDMiND9gDQA5AAA2AHMBCQAAAQA1AAAlAsQAlAsAAA9IAAb3QAAA9glArQglAtg1AAg");
	this.shape_3.setTransform(158.2,106.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A2DQcQgYAAgUgNQgfADgfABQijgCiOhXQiMhVhpiaQi5kjgGmeQACknBmjwQBkjwCsiMQCriPDVgDQAvABAuAHMA3lAAAQAsAAAgAtQAfArAAA+IAAcDQAAA+gfArQggAtgsAAg");
	this.shape_4.setTransform(215.9,106.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AwnQlQgRAAgQgNQgXADgYABQh6gChrhXQhqhXhPibQiMklgEmiQACkqBMjyQBMjyCBiOQCCiPCggDQAkAAAiAIMAp4AAAQAgAAAZAsQAXAsAAA/IAAcTQAAA+gXAsQgZAtggAAg");
	this.shape_5.setTransform(290.2,107.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ap9QxQgLAAgJgNQgOADgOAAQhKgBhAhZQg/hXgvidQhUkogDmnQABktAuj0QAtj1BOiQQBNiRBggDQAWAAAUAIIZIAAQATAAAPAuQAOAsAAA/IAAcnQAABAgOArQgPAugTAAg");
	this.shape_6.setTransform(380.9,108.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiGQ/QgCAAgCgNQgDADgDAAQgQgCgNhZQgOhZgKifQgSksAAmsQAAkxAKj3QAJj4ARiSQAQiTAVgDQAEABAEAHIFUAAQAEAAADAuQADAtAABAIAAc/QAABAgDAsQgDAvgEAAg");
	this.shape_7.setTransform(488.1,109.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241,2.1,649.9,207);


(lib.T1_cuadrotransicion_mccopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		this.parent.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgBhAjtMAAAhHZIDDAAMAAABHZg");
	this.shape.setTransform(716.9,119.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgGwAjqMAAAhHSINhAAMAAABHSg");
	this.shape_1.setTransform(682.5,119.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgL/AjmMAAAhHLIX/AAMAAABHLg");
	this.shape_2.setTransform(648,119.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgRNAjjMAAAhHFMAibAAAMAAABHFg");
	this.shape_3.setTransform(613.6,119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgWcAjgMAAAhG/MAs5AAAMAAABG/g");
	this.shape_4.setTransform(579.2,119.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgbrAjcMAAAhG3MA3XAAAMAAABG3g");
	this.shape_5.setTransform(544.8,119.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Egg5AjZMAAAhGxMBBzAAAMAAABGxg");
	this.shape_6.setTransform(510.4,119.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgmIAjWMAAAhGrMBMRAAAMAAABGrg");
	this.shape_7.setTransform(476,119.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgrXAjTMAAAhGlMBWvAAAMAAABGlg");
	this.shape_8.setTransform(441.6,119.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgwlAjPMAAAhGdMBhLAAAMAAABGdg");
	this.shape_9.setTransform(407.2,119);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Eg10AjMMAAAhGXMBrpAAAMAAABGXg");
	this.shape_10.setTransform(372.8,119);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Eg7DAjJMAAAhGRMB2HAAAMAAABGRg");
	this.shape_11.setTransform(338.3,118.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhARAjFMAAAhGKMCAjAAAMAAABGKg");
	this.shape_12.setTransform(303.9,118.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EhFgAjCMAAAhGDMCLBAAAMAAABGDg");
	this.shape_13.setTransform(269.5,118.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EhKvAhvMAAAhDdMCVeAAAMAAABDdg");
	this.shape_14.setTransform(235.1,118.8,1,1.037);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

	// Contenidos
	this.text = new cjs.Text(" BAJO", "bold 12px 'Arial'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(633.9,-22.8,1.282,1.282);

	this.text_1 = new cjs.Text("MEDIO ", "bold 12px 'Arial'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(573.9,-22.8,1.282,1.282);

	this.text_2 = new cjs.Text("ALTO  ", "bold 12px 'Arial'");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 36;
	this.text_2.parent = this;
	this.text_2.setTransform(515.9,-22.8,1.282,1.282);

	this.text_3 = new cjs.Text("Inspira a otros desempeñarse más allá de los límites.", "13px 'Arial'");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 547;
	this.text_3.parent = this;
	this.text_3.setTransform(-191.1,156.9,1.282,1.282);

	this.text_4 = new cjs.Text("Energiza e inspira a otros; la gente quiere trabajar con/para él.", "13px 'Arial'");
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 547;
	this.text_4.parent = this;
	this.text_4.setTransform(-191.1,112.5,1.282,1.282);

	this.text_5 = new cjs.Text("Demuestra pasión por la compañía.", "13px 'Arial'");
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 547;
	this.text_5.parent = this;
	this.text_5.setTransform(-191.1,65.7,1.282,1.282);

	this.text_6 = new cjs.Text("Demuestra liderazgo de sí mismo y de otros que le permiten ser exitoso en un puesto de mayor responsabilidad ( hasta 2 niveles más altos).", "13px 'Arial'");
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 421;
	this.text_6.parent = this;
	this.text_6.setTransform(-191.1,241.3,1.282,1.282);

	this.text_7 = new cjs.Text("Personifica los Principios Culturales de Arca Continental.", "13px 'Arial'");
	this.text_7.lineHeight = 14;
	this.text_7.lineWidth = 547;
	this.text_7.parent = this;
	this.text_7.setTransform(-191.1,209,1.282,1.282);

	this.text_8 = new cjs.Text("Contribuye más allá de lo descrito en su puesto.", "13px 'Arial'");
	this.text_8.lineHeight = 14;
	this.text_8.lineWidth = 542;
	this.text_8.parent = this;
	this.text_8.setTransform(-191.1,18.6,1.282,1.282);

	this.text_9 = new cjs.Text("ALTO / MEDIO / BAJO", "bold 11px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 14;
	this.text_9.lineWidth = 304;
	this.text_9.parent = this;
	this.text_9.setTransform(594.1,291.4,1.282,1.282);

	this.text_10 = new cjs.Text("CALIFICACIÓN GENERAL DE LIDERAZGO", "bold 13px 'Arial'");
	this.text_10.lineHeight = 17;
	this.text_10.lineWidth = 288;
	this.text_10.parent = this;
	this.text_10.setTransform(-191.1,291.4,1.282,1.282);

	this.text_11 = new cjs.Text("COMPONENTES DE COMPROMISO", "bold 16px 'Arial'");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 547;
	this.text_11.parent = this;
	this.text_11.setTransform(-191.1,-28.1,1.282,1.282);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_15.setTransform(536.1,211.9,0.729,1.42);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_16.setTransform(536.1,211.9,0.729,1.42);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_17.setTransform(597.9,211.9,0.729,1.42);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_18.setTransform(597.9,211.9,0.729,1.42);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_19.setTransform(151.7,211.9,1.282,1.42);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_20.setTransform(151.7,211.9,1.282,1.42);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_21.setTransform(657.8,211.9,0.729,1.42);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_22.setTransform(657.8,211.9,0.729,1.42);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_23.setTransform(536.1,165.7,0.729,1.42);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_24.setTransform(536.1,165.7,0.729,1.42);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_25.setTransform(597.9,165.7,0.729,1.42);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_26.setTransform(597.9,165.7,0.729,1.42);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_27.setTransform(151.7,165.7,1.282,1.42);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_28.setTransform(151.7,165.7,1.282,1.42);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_29.setTransform(657.8,165.7,0.729,1.42);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_30.setTransform(657.8,165.7,0.729,1.42);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_31.setTransform(536.1,119.4,0.729,1.42);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_32.setTransform(536.1,119.4,0.729,1.42);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_33.setTransform(597.9,119.4,0.729,1.42);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_34.setTransform(597.9,119.4,0.729,1.42);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_35.setTransform(151.7,119.4,1.282,1.42);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_36.setTransform(151.7,119.4,1.282,1.42);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_37.setTransform(657.8,119.4,0.729,1.42);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_38.setTransform(657.8,119.4,0.729,1.42);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_39.setTransform(536.1,73.2,0.729,1.42);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_40.setTransform(536.1,73.2,0.729,1.42);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_41.setTransform(597.9,73.2,0.729,1.42);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_42.setTransform(597.9,73.2,0.729,1.42);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_43.setTransform(151.7,73.2,1.282,1.42);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_44.setTransform(151.7,73.2,1.282,1.42);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_45.setTransform(657.8,73.2,0.729,1.42);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_46.setTransform(657.8,73.2,0.729,1.42);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_47.setTransform(536.1,26.9,0.729,1.42);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_48.setTransform(536.1,26.9,0.729,1.42);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_49.setTransform(597.9,26.9,0.729,1.42);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_50.setTransform(597.9,26.9,0.729,1.42);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_51.setTransform(151.7,26.9,1.282,1.42);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_52.setTransform(151.7,26.9,1.282,1.42);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_53.setTransform(657.8,26.9,0.729,1.42);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_54.setTransform(657.8,26.9,0.729,1.42);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_55.setTransform(151.7,251.9,1.282,3.033);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_56.setTransform(151.7,251.9,1.282,3.033);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_57.setTransform(657.8,251.9,0.729,3.033);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_58.setTransform(657.8,251.9,0.729,3.033);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_59.setTransform(597.9,251.9,0.729,3.033);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_60.setTransform(597.9,251.9,0.729,3.033);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_61.setTransform(536.1,251.9,0.729,3.033);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_62.setTransform(536.1,251.9,0.729,3.033);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhZIAAC0IsPAAIAAi0g");
	this.shape_63.setTransform(657.8,-17.7,0.729,2.385);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#98C150").s().p("AmHBaIAAi0IMPAAIAAC0g");
	this.shape_64.setTransform(657.8,-17.7,0.729,2.385);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(102,102,102,0.498)").p("AGthZIAAC0ItZAAIAAi0g");
	this.shape_65.setTransform(597.9,-17.7,0.729,2.385);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#98C150").s().p("AmsBaIAAi0INZAAIAAC0g");
	this.shape_66.setTransform(597.9,-17.7,0.729,2.385);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhZIAAC0ItFAAIAAi0g");
	this.shape_67.setTransform(536.1,-17.7,0.729,2.385);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#98C150").s().p("AmiBaIAAi0INEAAIAAC0g");
	this.shape_68.setTransform(536.1,-17.7,0.729,2.385);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBZIAAC0MhWPAAAIAAi0g");
	this.shape_69.setTransform(151.7,-17.7,1.282,2.385);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#98C150").s().p("EgrGABaIAAi0MBWNAAAIAAC0g");
	this.shape_70.setTransform(151.7,-17.7,1.282,2.385);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(102,102,102,0.498)").p("EBFhgDXIAAGvMiLBAAAIAAmvg");
	this.shape_71.setTransform(242.1,293.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#98C150").s().p("EhFgADYIAAmvMCLBAAAIAAGvg");
	this.shape_72.setTransform(242.1,293.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("Ag0BBQgVgXAAgpQAAgpAWgYQAWgXAiAAQAgAAATASQAMALAGAVIgiAIQgDgNgKgIQgKgIgNAAQgSAAgMAOQgMANAAAfQAAAfAMAOQALAOASAAQAOAAAKgJQAJgJAFgSIAhAKQgIAcgRAOQgSANgcAAQghAAgWgXg");
	this.shape_73.setTransform(-6.8,-77.6);

	this.text_12 = new cjs.Text("Check List de Potencial / Componentes de Compromiso", "bold 35px 'Arial'", "#333333");
	this.text_12.lineHeight = 41;
	this.text_12.lineWidth = 1052;
	this.text_12.parent = this;
	this.text_12.setTransform(45.7,-86,0.518,0.518);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#98C150").s().p("Ah7DIIgKAAQg4gDgpgpQgtgtAAg+IAAj4IImAAIAAGPg");
	this.shape_74.setTransform(-8.3,-76.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CFE0B5").s().p("At+DIIAAmPMA34AAAIAAD3QAAA/gsAtQgtAsg+AAgEgp6ADIIAAmPIb8AAIAAGPg");
	this.shape_75.setTransform(287.5,-76.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EEEFEF").s().p("AKTFKIAAmZQAAhPgqg9IAOAAQAqA9AABPIAAGZgAnijbQgNgTgSgSQhDhDhcgGQBlABBIBIQARASAOATg");
	this.shape_76.setTransform(578.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.text_12},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},15).wait(1));

	// Sólo ventana
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3F3F3").s().p("EhD5AhnQhoAAhJhKQhKhJABhoMAAAg7iIAAAAQAEhgBFhGQBJhJBoAAMAtqAAAIAAAAIBFAAIAAAAICNAAIAAAAIF8AAIAAAAIBkAAIAAAAMBPXAAAQBogBBJBKQBGBGADBgMAAAA7iQAABohJBJQhJBJhoAAMgyyAAAIAAABg");
	this.shape_77.setTransform(239.4,120);

	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.2,-109,1011.5,457);


(lib.T1_cuadrotransicion_mccopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		this.parent.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgBhAjdMAAAhG5IDDAAMAAABG5g");
	this.shape.setTransform(716.9,121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgGwAjbMAAAhG1INhAAMAAABG1g");
	this.shape_1.setTransform(682.5,121.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgL/AjZMAAAhGwIX/AAMAAABGwg");
	this.shape_2.setTransform(648,121.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgRNAjWMAAAhGsMAibAAAMAAABGsg");
	this.shape_3.setTransform(613.6,121.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgWcAjUMAAAhGnMAs5AAAMAAABGng");
	this.shape_4.setTransform(579.2,121.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgbrAjSMAAAhGjMA3XAAAMAAABGjg");
	this.shape_5.setTransform(544.8,121.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Egg5AjQMAAAhGfMBBzAAAMAAABGfg");
	this.shape_6.setTransform(510.4,121.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgmIAjOMAAAhGbMBMRAAAMAAABGbg");
	this.shape_7.setTransform(476,121.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgrXAjMMAAAhGXMBWvAAAMAAABGXg");
	this.shape_8.setTransform(441.6,122);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgwlAjJMAAAhGSMBhLAAAMAAABGSg");
	this.shape_9.setTransform(407.2,122.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Eg10AjHMAAAhGNMBrpAAAMAAABGNg");
	this.shape_10.setTransform(372.8,122.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Eg7DAjFMAAAhGJMB2HAAAMAAABGJg");
	this.shape_11.setTransform(338.3,122.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhARAjDMAAAhGFMCAjAAAMAAABGFg");
	this.shape_12.setTransform(303.9,122.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EhFgAjBMAAAhGBMCLBAAAMAAABGBg");
	this.shape_13.setTransform(269.5,122.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EhKvAi/MAAAhF9MCVeAAAMAAABF9g");
	this.shape_14.setTransform(235.1,122.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

	// Contenidos
	this.text = new cjs.Text(" BAJO", "bold 12px 'Arial'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(633.9,-22.8,1.282,1.282);

	this.text_1 = new cjs.Text("MEDIO ", "bold 12px 'Arial'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(573.9,-22.8,1.282,1.282);

	this.text_2 = new cjs.Text("ALTO  ", "bold 12px 'Arial'");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 36;
	this.text_2.parent = this;
	this.text_2.setTransform(515.9,-22.8,1.282,1.282);

	this.text_3 = new cjs.Text("Ve más allá de lo que se requiere.", "13px 'Arial'");
	this.text_3.lineHeight = 17;
	this.text_3.lineWidth = 547;
	this.text_3.parent = this;
	this.text_3.setTransform(-191.1,258,1.282,1.282);

	this.text_4 = new cjs.Text("Busca constantemente las mejores maneras para mejorarse a sí mismo y a otros. ", "13px 'Arial'");
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 545;
	this.text_4.parent = this;
	this.text_4.setTransform(-191.1,161.1,1.282,1.282);

	this.text_5 = new cjs.Text("Busca constantemente las mejores prácticas ( dentro de la compañía, a través de la industria y en otras industrias) y cuestiona la viabilidad de sus usos en la situación actual.", "13px 'Arial'");
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 546;
	this.text_5.parent = this;
	this.text_5.setTransform(-191.1,110.9,1.282,1.282);

	this.text_6 = new cjs.Text("Dispuesto a hacer concesiones (ejemplo: Trasladarse, trabajar en otro departamento del negocio, tomar un paso atrás para obtener experiencia crítica) para ganar experiencia/habilidades necesarias para roles más altos.", "13px 'Arial'");
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 547;
	this.text_6.parent = this;
	this.text_6.setTransform(-191.1,44,1.282,1.282);

	this.text_7 = new cjs.Text("Demuestra motivación para adquirir experiencias críticas requeridas para un rol más alto. ", "13px 'Arial'");
	this.text_7.lineHeight = 17;
	this.text_7.lineWidth = 544;
	this.text_7.parent = this;
	this.text_7.setTransform(-191.1,227.9,1.282,1.282);

	this.text_8 = new cjs.Text("Identifica nuevas oportunidades y propone nuevos puntos de vista. ", "13px 'Arial'");
	this.text_8.lineHeight = 17;
	this.text_8.lineWidth = 549;
	this.text_8.parent = this;
	this.text_8.setTransform(-191.1,194.2,1.282,1.282);

	this.text_9 = new cjs.Text("Le interesa avanzar a un rol con más alcance, responsabilidad y complejidad.", "13px 'Arial'");
	this.text_9.lineHeight = 17;
	this.text_9.lineWidth = 547;
	this.text_9.parent = this;
	this.text_9.setTransform(-191.1,11.5,1.282,1.282);

	this.text_10 = new cjs.Text("ALTO / MEDIO / BAJO", "bold 11px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 14;
	this.text_10.lineWidth = 304;
	this.text_10.parent = this;
	this.text_10.setTransform(594.1,292.4,1.282,1.282);

	this.text_11 = new cjs.Text("CALIFICACIÓN GENERAL ASPIRACIÓN", "bold 13px 'Arial'");
	this.text_11.lineHeight = 17;
	this.text_11.lineWidth = 288;
	this.text_11.parent = this;
	this.text_11.setTransform(-191.1,292.4,1.282,1.282);

	this.text_12 = new cjs.Text("COMPONENTES DE ASPIRACIÓN (Intereses y Motivación)", "bold 16px 'Arial'");
	this.text_12.lineHeight = 20;
	this.text_12.lineWidth = 547;
	this.text_12.parent = this;
	this.text_12.setTransform(-191.1,-27.1,1.282,1.282);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_15.setTransform(151.7,19,1.282,1.659);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_16.setTransform(151.7,19,1.282,1.659);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_17.setTransform(657.8,19,0.729,1.659);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_18.setTransform(657.8,19,0.729,1.659);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_19.setTransform(597.9,19,0.729,1.659);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_20.setTransform(597.9,19,0.729,1.659);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_21.setTransform(536.1,19,0.729,1.659);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_22.setTransform(536.1,19,0.729,1.659);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_23.setTransform(151.7,168.5,1.282,1.659);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_24.setTransform(151.7,168.5,1.282,1.659);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_25.setTransform(657.8,168.5,0.729,1.659);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_26.setTransform(657.8,168.5,0.729,1.659);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_27.setTransform(597.9,168.5,0.729,1.659);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_28.setTransform(597.9,168.5,0.729,1.659);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_29.setTransform(536.1,168.5,0.729,1.659);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_30.setTransform(536.1,168.5,0.729,1.659);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_31.setTransform(151.7,201.3,1.282,1.659);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_32.setTransform(151.7,201.3,1.282,1.659);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_33.setTransform(657.8,201.3,0.729,1.659);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_34.setTransform(657.8,201.3,0.729,1.659);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_35.setTransform(597.9,201.3,0.729,1.659);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_36.setTransform(597.9,201.3,0.729,1.659);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_37.setTransform(536.1,201.3,0.729,1.659);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_38.setTransform(536.1,201.3,0.729,1.659);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_39.setTransform(151.7,234.1,1.282,1.659);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_40.setTransform(151.7,234.1,1.282,1.659);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_41.setTransform(657.8,234.1,0.729,1.659);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_42.setTransform(657.8,234.1,0.729,1.659);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_43.setTransform(597.9,234.1,0.729,1.659);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_44.setTransform(597.9,234.1,0.729,1.659);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_45.setTransform(536.1,234.1,0.729,1.659);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_46.setTransform(536.1,234.1,0.729,1.659);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_47.setTransform(536.1,68.5,0.729,2.002);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_48.setTransform(536.1,68.5,0.729,2.002);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_49.setTransform(597.9,68.5,0.729,2.002);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_50.setTransform(597.9,68.5,0.729,2.002);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_51.setTransform(151.7,68.5,1.282,2.002);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_52.setTransform(151.7,68.5,1.282,2.002);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_53.setTransform(657.8,68.5,0.729,2.002);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_54.setTransform(657.8,68.5,0.729,2.002);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_55.setTransform(536.1,127,0.729,1.588);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_56.setTransform(536.1,127,0.729,1.588);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_57.setTransform(597.9,127,0.729,1.588);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_58.setTransform(597.9,127,0.729,1.588);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_59.setTransform(151.7,127,1.282,1.588);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_60.setTransform(151.7,127,1.282,1.588);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_61.setTransform(657.8,127,0.729,1.588);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_62.setTransform(657.8,127,0.729,1.588);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_63.setTransform(151.7,266.9,1.282,1.659);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_64.setTransform(151.7,266.9,1.282,1.659);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_65.setTransform(657.8,266.9,0.729,1.659);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_66.setTransform(657.8,266.9,0.729,1.659);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_67.setTransform(597.9,266.9,0.729,1.659);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_68.setTransform(597.9,266.9,0.729,1.659);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_69.setTransform(536.1,266.9,0.729,1.659);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_70.setTransform(536.1,266.9,0.729,1.659);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(102,102,102,0.498)").p("AEejXIAAGvIo7AAIAAmvg");
	this.shape_71.setTransform(657.8,-16.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DBD156").s().p("AkdDYIAAmvII7AAIAAGvg");
	this.shape_72.setTransform(657.8,-16.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(102,102,102,0.498)").p("AGthZIAAC0ItZAAIAAi0g");
	this.shape_73.setTransform(597.9,-16.7,0.729,2.385);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DBD156").s().p("AmsBaIAAi0INZAAIAAC0g");
	this.shape_74.setTransform(597.9,-16.7,0.729,2.385);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhZIAAC0ItFAAIAAi0g");
	this.shape_75.setTransform(536.1,-16.7,0.729,2.385);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DBD156").s().p("AmiBaIAAi0INEAAIAAC0g");
	this.shape_76.setTransform(536.1,-16.7,0.729,2.385);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(102,102,102,0.498)").p("EA3TgDXIAAGvMhulAAAIAAmvg");
	this.shape_77.setTransform(151.7,-16.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DBD156").s().p("Eg3RADYIAAmvMBujAAAIAAGvg");
	this.shape_78.setTransform(151.7,-16.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(102,102,102,0.498)").p("EBFhgDXIAAGvMiLBAAAIAAmvg");
	this.shape_79.setTransform(242.1,294.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DBD156").s().p("EhFgADYIAAmvMCLBAAAIAAGvg");
	this.shape_80.setTransform(242.1,294.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhGBVIAAipIBDAAQAUAAAKABQAKACAIAFQAHAGAGAJQAFAJAAALQAAAMgGAKQgHAKgLAFQAQAEAIAKQAJALAAAPQAAALgGALQgGALgJAHQgJAHgOABQgIABghAAgAgkA5IAgAAQARAAAGgCQAHgBAFgFQAFgGAAgJQAAgIgEgFQgEgFgHgDQgHgCgWAAIgcAAgAgkgRIAXAAIAYAAQAIgBAFgFQAGgFAAgJQgBgHgEgFQgEgFgJgBIgcgBIgUAAg");
	this.shape_81.setTransform(14.5,-76.6);

	this.text_13 = new cjs.Text("Check List de Potencial / Componentes de Aspiración", "bold 35px 'Arial'", "#333333");
	this.text_13.lineHeight = 41;
	this.text_13.lineWidth = 1052;
	this.text_13.parent = this;
	this.text_13.setTransform(56.4,-85,0.518,0.518);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EFEDAD").s().p("EgmyADIIAAmPMBNlAAAIAAD3QAAA/gtAtQgsAshAAAg");
	this.shape_82.setTransform(288.5,-75.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DBD156").s().p("Ah6DIIgLAAQg4gDgpgpQgtgtAAg+IAAj4IImAAIAAGPg");
	this.shape_83.setTransform(12.7,-75.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EEEFEF").s().p("AKTFKIAAmZQAAhPgqg9IAOAAQAqA9AABPIAAGZgAnijbQgNgTgSgSQhDhDhcgGQBlABBIBIQARASAOATg");
	this.shape_84.setTransform(578.1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.text_13},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},15).wait(1));

	// Sólo ventana
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F3F3F3").s().p("EhD5AhnQhoAAhJhKQhKhJABhoMAAAg7iIAAAAQAEhgBFhGQBJhJBoAAMAtqAAAIAAAAIBFAAIAAAAICNAAIAAAAIF8AAIAAAAIBkAAIAAAAMBPXAAAQBogBBJBKQBGBGADBgMAAAA7iQAABohJBJQhJBJhoAAMgyyAAAIAAABg");
	this.shape_85.setTransform(239.4,120);

	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.2,-105.9,1011.5,453.8);


(lib.T1_cuadrotransicion_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
		this.parent.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgBhAjAMAAAhF/IDDAAMAAABF/g");
	this.shape.setTransform(716.9,117.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgGwAjCMAAAhGDINhAAMAAABGDg");
	this.shape_1.setTransform(682.5,118);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgL/AjFMAAAhGJIX/AAMAAABGJg");
	this.shape_2.setTransform(648,118.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgRNAjIMAAAhGPMAibAAAMAAABGPg");
	this.shape_3.setTransform(613.6,118.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgWcAjLMAAAhGVMAs5AAAMAAABGVg");
	this.shape_4.setTransform(579.2,118.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgbrAjOMAAAhGbMA3XAAAMAAABGbg");
	this.shape_5.setTransform(544.8,119);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Egg5AjRMAAAhGhMBBzAAAMAAABGhg");
	this.shape_6.setTransform(510.4,119.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgmIAjTMAAAhGlMBMRAAAMAAABGlg");
	this.shape_7.setTransform(476,119.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgrXAjWMAAAhGrMBWvAAAMAAABGrg");
	this.shape_8.setTransform(441.6,119.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgwlAjZMAAAhGxMBhLAAAMAAABGxg");
	this.shape_9.setTransform(407.2,120);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Eg10AjcMAAAhG3MBrpAAAMAAABG3g");
	this.shape_10.setTransform(372.8,120.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Eg7DAjfMAAAhG9MB2HAAAMAAABG9g");
	this.shape_11.setTransform(338.3,120.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhARAjiMAAAhHCMCAjAAAMAAABHCg");
	this.shape_12.setTransform(303.9,120.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EhFgAjkMAAAhHHMCLBAAAMAAABHHg");
	this.shape_13.setTransform(269.5,121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EhKvAjnMAAAhHNMCVeAAAMAAABHNg");
	this.shape_14.setTransform(235.1,121.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

	// Contenidos
	this.text = new cjs.Text(" BAJO", "bold 12px 'Arial'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(633.9,-22.8,1.282,1.282);

	this.text_1 = new cjs.Text("MEDIO ", "bold 12px 'Arial'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(573.9,-22.8,1.282,1.282);

	this.text_2 = new cjs.Text("ALTO  ", "bold 12px 'Arial'");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 36;
	this.text_2.parent = this;
	this.text_2.setTransform(515.9,-22.8,1.282,1.282);

	this.text_3 = new cjs.Text("ALTO / MEDIO / BAJO", "bold 11px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 304;
	this.text_3.parent = this;
	this.text_3.setTransform(594.1,292.4,1.282,1.282);

	this.text_4 = new cjs.Text("Piensa más allá de los límites actuales: Se enfoca en temas de largo plazo, y de gran esquema; Tiene una mentalidad global; Piensa en las implicaciones interfuncionales de las decisiones.", "13px 'Arial'");
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 496;
	this.text_4.parent = this;
	this.text_4.setTransform(-191.1,145.3,1.282,1.282);

	this.text_5 = new cjs.Text("Demuestra un nivel de inteligencia emocional requerida para ser exitoso en un rol más alto y con mayor responsabilidad. ", "13px 'Arial'");
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 517;
	this.text_5.parent = this;
	this.text_5.setTransform(-191.1,102.8,1.282,1.282);

	this.text_6 = new cjs.Text("Muestra una curiosidad y un afán por aprender nuevas habilidades y maneras de pensar, aplica esas capacidades para impulsar un negocio.", "13px 'Arial'");
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 520;
	this.text_6.parent = this;
	this.text_6.setTransform(-190.2,55.8,1.282,1.282);

	this.text_7 = new cjs.Text("Es flexible y adaptable para manejar los cambios del ambiente del negocio.", "13px 'Arial'");
	this.text_7.lineHeight = 17;
	this.text_7.lineWidth = 547;
	this.text_7.parent = this;
	this.text_7.setTransform(-191.1,257,1.282,1.282);

	this.text_8 = new cjs.Text("Piensa de manera creativa.", "13px 'Arial'");
	this.text_8.lineHeight = 17;
	this.text_8.lineWidth = 545;
	this.text_8.parent = this;
	this.text_8.setTransform(-191.1,215.8,1.282,1.282);

	this.text_9 = new cjs.Text("Demuestra competencias básicas y funcionales que son transferibles a roles más altos.", "13px 'Arial'");
	this.text_9.lineHeight = 14;
	this.text_9.lineWidth = 546;
	this.text_9.parent = this;
	this.text_9.setTransform(-191.1,19.6,1.282,1.282);

	this.text_10 = new cjs.Text("CALIFICACIÓN GENERAL DE HABILIDAD", "bold 13px 'Arial'");
	this.text_10.lineHeight = 17;
	this.text_10.lineWidth = 288;
	this.text_10.parent = this;
	this.text_10.setTransform(-191.1,292.4,1.282,1.282);

	this.text_11 = new cjs.Text("COMPONENTES DE HABILIDAD ( Habilidad Actual y Futura)", "bold 16px 'Arial'");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 547;
	this.text_11.parent = this;
	this.text_11.setTransform(-191.1,-27.1,1.282,1.282);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_15.setTransform(536.1,27,0.729,1.359);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_16.setTransform(536.1,27,0.729,1.359);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_17.setTransform(597.9,27,0.729,1.359);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_18.setTransform(597.9,27,0.729,1.359);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_19.setTransform(151.7,27,1.282,1.359);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_20.setTransform(151.7,27,1.282,1.359);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_21.setTransform(657.8,27,0.729,1.359);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_22.setTransform(657.8,27,0.729,1.359);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_23.setTransform(536.1,72.9,0.729,1.466);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_24.setTransform(536.1,72.9,0.729,1.466);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_25.setTransform(597.9,72.9,0.729,1.466);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_26.setTransform(597.9,72.9,0.729,1.466);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_27.setTransform(151.7,72.9,1.282,1.466);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_28.setTransform(151.7,72.9,1.282,1.466);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_29.setTransform(657.8,72.9,0.729,1.466);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_30.setTransform(657.8,72.9,0.729,1.466);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_31.setTransform(536.1,119.6,0.729,1.466);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_32.setTransform(536.1,119.6,0.729,1.466);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_33.setTransform(597.9,119.6,0.729,1.466);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_34.setTransform(597.9,119.6,0.729,1.466);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(102,102,102,0.498)").p("AExkeIAAI9IphAAIAAo9g");
	this.shape_35.setTransform(536.1,172.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E3EFB9").s().p("AkwEfIAAo9IJhAAIAAI9g");
	this.shape_36.setTransform(536.1,172.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(102,102,102,0.498)").p("AGtjeIAAG+ItZAAIAAm+g");
	this.shape_37.setTransform(597.9,172.1,0.729,1.282);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E3EFB9").s().p("AmsDfIAAm+INZAAIAAG+g");
	this.shape_38.setTransform(597.9,172.1,0.729,1.282);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgDeIAAG+MhWPAAAIAAm+g");
	this.shape_39.setTransform(151.7,172.1,1.282,1.282);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E3EFB9").s().p("EgrGADfIAAm+MBWNAAAIAAG+g");
	this.shape_40.setTransform(151.7,172.1,1.282,1.282);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_41.setTransform(151.7,119.6,1.282,1.466);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_42.setTransform(151.7,119.6,1.282,1.466);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBpIAADUMhWPAAAIAAjUg");
	this.shape_43.setTransform(151.7,221.6,1.282,2.003);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3EFB9").s().p("EgrGABrIAAjVMBWNAAAIAADVg");
	this.shape_44.setTransform(151.7,221.6,1.282,2.003);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_45.setTransform(151.7,263.3,1.282,2.003);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_46.setTransform(151.7,263.3,1.282,2.003);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_47.setTransform(657.8,119.6,0.729,1.466);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_48.setTransform(657.8,119.6,0.729,1.466);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(102,102,102,0.498)").p("AGIjeIAAG+IsPAAIAAm+g");
	this.shape_49.setTransform(657.8,172.1,0.729,1.282);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E3EFB9").s().p("AmHDfIAAm+IMPAAIAAG+g");
	this.shape_50.setTransform(657.8,172.1,0.729,1.282);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhpIAADUIsPAAIAAjUg");
	this.shape_51.setTransform(657.8,221.6,0.729,2.003);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E3EFB9").s().p("AmHBrIAAjVIMPAAIAADVg");
	this.shape_52.setTransform(657.8,221.6,0.729,2.003);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_53.setTransform(657.8,263.3,0.729,2.003);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_54.setTransform(657.8,263.3,0.729,2.003);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_55.setTransform(597.9,263.3,0.729,2.003);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_56.setTransform(597.9,263.3,0.729,2.003);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(102,102,102,0.498)").p("AGthpIAADUItZAAIAAjUg");
	this.shape_57.setTransform(597.9,221.6,0.729,2.003);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E3EFB9").s().p("AmsBrIAAjVINZAAIAADVg");
	this.shape_58.setTransform(597.9,221.6,0.729,2.003);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhpIAADUItFAAIAAjUg");
	this.shape_59.setTransform(536.1,221.6,0.729,2.003);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3EFB9").s().p("AmiBrIAAjVINEAAIAADVg");
	this.shape_60.setTransform(536.1,221.6,0.729,2.003);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_61.setTransform(536.1,263.3,0.729,2.003);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_62.setTransform(536.1,263.3,0.729,2.003);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhZIAAC0IsPAAIAAi0g");
	this.shape_63.setTransform(657.8,-16.7,0.729,2.385);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C6DFE9").s().p("AmHBaIAAi0IMPAAIAAC0g");
	this.shape_64.setTransform(657.8,-16.7,0.729,2.385);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(102,102,102,0.498)").p("AGthZIAAC0ItZAAIAAi0g");
	this.shape_65.setTransform(597.9,-16.7,0.729,2.385);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C6DFE9").s().p("AmsBaIAAi0INZAAIAAC0g");
	this.shape_66.setTransform(597.9,-16.7,0.729,2.385);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhZIAAC0ItFAAIAAi0g");
	this.shape_67.setTransform(536.1,-16.7,0.729,2.385);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C6DFE9").s().p("AmiBaIAAi0INEAAIAAC0g");
	this.shape_68.setTransform(536.1,-16.7,0.729,2.385);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBZIAAC0MhWPAAAIAAi0g");
	this.shape_69.setTransform(151.7,-16.7,1.282,2.385);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C6DFE9").s().p("EgrGABaIAAi0MBWNAAAIAAC0g");
	this.shape_70.setTransform(151.7,-16.7,1.282,2.385);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBZIAAC0MhWPAAAIAAi0g");
	this.shape_71.setTransform(242.1,294.4,1.612,2.385);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C6DFE9").s().p("EgrGABaIAAi0MBWNAAAIAAC0g");
	this.shape_72.setTransform(242.1,294.4,1.612,2.385);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#E3EFB9").ss(1,1,1,3,true).p("AifABQAMgBANAAIEmAA");
	this.shape_73.setTransform(-272,-76.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAwBVIgPgnIhDAAIgOAnIglAAIBDipIAkAAIBDCpgAgYASIAuAAIgWg/g");
	this.shape_74.setTransform(14.2,-76.6);

	this.text_12 = new cjs.Text("Check List de Potencial / Componentes de Habilidad", "bold 35px 'Arial'", "#333333");
	this.text_12.lineHeight = 41;
	this.text_12.lineWidth = 1052;
	this.text_12.parent = this;
	this.text_12.setTransform(58.4,-85,0.518,0.518);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#72B5C9").s().p("Ah6DIIgLAAQg4gDgpgpQgtgtAAg+IAAj4IImAAIAAGPg");
	this.shape_75.setTransform(12.7,-75.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C7DFE9").s().p("EgmyADIIAAmPMBNlAAAIAAD3QAAA/gtAtQgsAshAAAg");
	this.shape_76.setTransform(288.5,-75.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EEEFEF").s().p("AKTFKIAAmZQAAhPgqg9IAOAAQAqA9AABPIAAGZgAnijbQgNgTgSgSQhDhDhcgGQBlABBIBIQARASAOATg");
	this.shape_77.setTransform(578.1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.text_12},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},15).wait(1));

	// Sólo ventana
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F3F3F3").s().p("EhD5AhnQhoAAhJhKQhKhJABhoMAAAg7iIAAAAQAEhgBFhGQBJhJBoAAMAtqAAAIAAAAIBFAAIAAAAICNAAIAAAAIF8AAIAAAAIBkAAIAAAAMBPXAAAQBogBBJBKQBGBGADBgMAAAA7iQAABohJBJQhJBJhoAAMgyyAAAIAAABg");
	this.shape_78.setTransform(239.4,120);

	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289,-106.3,1080.3,448);


(lib.T1_cuadrotransicion_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
		this.parent.m2mc1_Cerrar.visible=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhKvAhvMAAAhDdMCVeAAAMAAABDdg");
	this.shape.setTransform(235.1,128.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhFgAhuMAAAhDbMCLBAAAMAAABDbg");
	this.shape_1.setTransform(269.5,128.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhARAhuMAAAhDbMCAjAAAMAAABDbg");
	this.shape_2.setTransform(303.9,128.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg7DAhtMAAAhDZMB2HAAAMAAABDZg");
	this.shape_3.setTransform(338.3,128.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg10AhsMAAAhDXMBrpAAAMAAABDXg");
	this.shape_4.setTransform(372.8,128.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgwlAhrMAAAhDWMBhLAAAMAAABDWg");
	this.shape_5.setTransform(407.2,128.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgrXAhrMAAAhDVMBWvAAAMAAABDVg");
	this.shape_6.setTransform(441.6,128.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgmIAhqMAAAhDUMBMRAAAMAAABDUg");
	this.shape_7.setTransform(476,128.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Egg5AhqMAAAhDTMBBzAAAMAAABDTg");
	this.shape_8.setTransform(510.4,128.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgbrAhpMAAAhDRMA3XAAAMAAABDRg");
	this.shape_9.setTransform(544.8,128.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgWcAhpMAAAhDRMAs5AAAMAAABDRg");
	this.shape_10.setTransform(579.2,128.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgRNAhoMAAAhDOMAibAAAMAAABDOg");
	this.shape_11.setTransform(613.6,128.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgL/AhnMAAAhDNIX/AAMAAABDNg");
	this.shape_12.setTransform(648,128.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgGwAhmMAAAhDLINhAAMAAABDLg");
	this.shape_13.setTransform(682.5,128);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgBhAhmMAAAhDLIDDAAMAAABDLg");
	this.shape_14.setTransform(716.9,127.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.2,-87.1,956.7,431.8);


(lib.T1_Boton_invisible2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhLJAjjMAAAhHFMCWTAAAMAAABHFg");
	this.shape.setTransform(481,227.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.T1_Boton_invisible = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhLJAjjMAAAhHFMCWTAAAMAAABHFg");
	this.shape.setTransform(481,227.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.barrabcdespliega_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg9tAGuIAAtbMB7bAAAIAANbg");
	this.shape_1.setTransform(395,43);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790,86);


(lib.AS_LG_153_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("ABKhhQAcAeAAAoQAAAVgMAVQgJATgQARQgJAIgDAIQgEAHAAAPIAAATQAAAJgGAGQgGAHgJAAIg3AAQgJAAgGgHQgHgGAAgJIAAgTQAAgPgDgHQgDgIgIgIQgRgRgKgTQgLgVAAgVQAAgpAcgdQAcgdApgCIAKAAQAoACAcAdg");
	this.shape_4.setTransform(16.3,37.3,1.111,1.111);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_5.setTransform(15.8,59.2,0.277,0.356);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AitAjQgRAAgNgKQgNgLAAgOQAAgOANgJQANgLARAAIFbAAQARAAANALQAMAJAAAOQAAAOgMALQgNAKgRAAg");
	this.shape_6.setTransform(15.8,55.7,0.277,0.356);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.067)").s().p("AjRBWIA7gGQA7gFAAgBQgBgBABhvQAUgtAAgCIANgSQAOgQAAgBQgBgCAUg9IgXhKQAEgDDoDkIAWAVQgHAfgMAeQgaA9gwAwQgvAvg+AaQg4AYg/ACg");
	this.shape_7.setTransform(29.3,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).wait(6));

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

	this.text = new cjs.Text("Evaluación de Potencial", "20px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.parent = this;
	this.text.setTransform(-282,-241.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text},{t:this.shape_1},{t:this.shape}]},87).wait(13));

	// txt tit
	this.instance_1 = new lib.titulot2mod3("synched",0);
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


(lib.iconoprocesovaloracionmod3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3231").s().p("AkHDCIgTgFQgDABgFgRQgMghgOhZQgGgqASgiQANgaAZgUQgDgkANgfQATguAygXIgOAVQgPAZgEASQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAAAAABABQAAAAABgBQAAAAABAAQAAAAABgBQAdgjA3gZQBYgpB8gDQgtAHghASQgEACACAEQABADAEAAQA2gGAzAEQBPAIAzAhQgOgDgVABQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBABABAAQAAABAAAAQAAAAAAAAQABABAAAAQAoAQAcAbQAtArAAA8QgQgUgLgLQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQAAAAAAABQARAvgNAvQgBgNgQgOQgCBJgVBhQgVgCgPAXIgKAYQACghgCgpQgEhQgVghQg3hTiXADQgwAAgzAKIgqAJIgSAlQgXArgWAZQgDAMgEBLIgEBIQgDgogUgMg");
	this.shape.setTransform(126.4,117.7,0.666,0.666);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F3231").s().p("ABGAtIgCgBQgMgCgKgIQgNgKAAgQIAAgEQgNgLgOACIgCAAQgNgCgMALIAAAEQAAAQgOAKQgJAIgNACIgCABIhuAAIgDgCQgSgHgIgMQgGgJAAgJIAAgHIggADIgFgVIAogGQAIgPAZgDIABgBIBnAAQAQAAALAHQAJAGAEAIQAQgGANABQAOgBAQAGQAEgIAJgGQALgHAQAAIBnAAIABABQAZADAIAPIAeAEIgDAOIgYAGIAAAHQABAJgHAJQgIAMgSAHIgDACgAAxgWIAAAiQAAAEACAEQAEAIAKAGIB3AAQAOgFAAgQIAAgiQgEgJgMAAIh4AAQgNADAAAFgAi7gWIAAAiQAAAEACAEQAEAIAKAGIB3AAQAOgEAAgRIAAgiQgDgJgNAAIh4AAQgNADAAAFg");
	this.shape_1.setTransform(124.9,130.3,0.666,0.666);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(154.3,166.4,0.666,0.666,0,0,0,5.7,10.4);
	this.instance.alpha = 0.391;

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.4,168.3,0.666,0.666,0,0,0,4.5,7);
	this.instance_1.alpha = 0.391;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.1,165.8,0.666,0.666,0,0,0,6.8,11.3);
	this.instance_2.alpha = 0.391;

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(105.3,165.8,0.666,0.666,0,0,0,6.3,11.3);
	this.instance_3.alpha = 0.391;

	this.instance_4 = new lib.Group_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(104.1,167.5,0.666,0.666,0,0,0,5,9);
	this.instance_4.alpha = 0.391;

	this.instance_5 = new lib.Group_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(101.9,166.2,0.666,0.666,0,0,0,5.5,10.9);
	this.instance_5.alpha = 0.391;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9B3BC").s().p("AhSATICHhOIAeA7QgDAXgsAVIgpAQg");
	this.shape_2.setTransform(131.4,159.3,0.666,0.666);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A9B3BC").s().p("AgdAsQg0gegDgWIAdg8ICMBgIhAApQgZgKgZgPg");
	this.shape_3.setTransform(120.3,158.7,0.666,0.666);

	this.instance_6 = new lib.Group_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(130.5,165.3,0.666,0.666,0,0,0,3.1,12.5);
	this.instance_6.alpha = 0.391;

	this.instance_7 = new lib.Group_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(134.6,165.1,0.666,0.666,0,0,0,3.6,12.7);
	this.instance_7.alpha = 0.391;

	this.instance_8 = new lib.Group_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(138,164.7,0.666,0.666,0,0,0,3.9,12.9);
	this.instance_8.alpha = 0.391;

	this.instance_9 = new lib.Group_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(147.6,165.1,0.666,0.666,0,0,0,3.5,12.7);
	this.instance_9.alpha = 0.391;

	this.instance_10 = new lib.Group_10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(145,164.5,0.666,0.666,0,0,0,3.6,13.3);
	this.instance_10.alpha = 0.391;

	this.instance_11 = new lib.Group_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(141,164.3,0.666,0.666,0,0,0,3.6,13.2);
	this.instance_11.alpha = 0.391;

	this.instance_12 = new lib.Group_12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(126,165.3,0.666,0.666,0,0,0,3.7,12.5);
	this.instance_12.alpha = 0.391;

	this.instance_13 = new lib.Group_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(122.2,165.1,0.666,0.666,0,0,0,3.8,12.7);
	this.instance_13.alpha = 0.391;

	this.instance_14 = new lib.Group_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(118.5,164.7,0.666,0.666,0,0,0,3.6,12.9);
	this.instance_14.alpha = 0.391;

	this.instance_15 = new lib.Group_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(108.6,165.1,0.666,0.666,0,0,0,3.1,12.7);
	this.instance_15.alpha = 0.391;

	this.instance_16 = new lib.Group_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(111.5,164.5,0.666,0.666,0,0,0,3.4,13.3);
	this.instance_16.alpha = 0.391;

	this.instance_17 = new lib.Group_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(115.6,164.3,0.666,0.666,0,0,0,3.4,13.2);
	this.instance_17.alpha = 0.391;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BBCACB").s().p("Aj1CDQA7i3AagRQAogbBXgPQAqgHAjgCQBMgaBFAqQAjAVATAaIADC8g");
	this.shape_4.setTransform(111.8,166.1,0.666,0.666);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCD0D0").s().p("Aj9CDIAIi8IAOgQQATgSAVgNQBFgqBLAaIBOAJQBXAPAoAbQAPAKAaA2QAaA1AdBTg");
	this.shape_5.setTransform(140.8,166.1,0.666,0.666);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8AF93").s().p("AAigBQgJgDgGAAIgIgBIgIAAIgPACIgPADQgQACgPAGQAMgJAQgEQARgGAQgCIASACIAQAFQASAIAEAMQgJgKgQgFg");
	this.shape_6.setTransform(117.2,128.7,0.666,0.666);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1BB93").s().p("AgrFGQgdgMglgaQhKgzgqhIIgCgIIgBguIgDAAQgLgBgHgKIgBgBQgDgFgIgmIgIg4QgFgVAAgQQAAgQAGgDQAEgDALAJQAEAEACAGIAEgBQgIgnAAgsQAAhkA0gZIABAAIA3gqQBCgpBAAAIAHAAIAAAAIAHAAIABAAQBBgCBGAqQAjAVAWAWIABAAQA0AZAABkQAAAsgJAnIgCAJIAHgHQAEgGAHgFQAKgGAEACQALAGgIArIgJA8QgIAogEAEIAAABQgHAKgMABIgCAAIgGA4QAAAEgDAEQgWAfggAhQg2A3g8AfIgDABQgaAHgXAAQgWAAgVgHg");
	this.shape_7.setTransform(125.2,130.1,0.666,0.666);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6AE89").s().p("AgWB8Qi0gHAtgsQAngnAUhIIALhBIBWgSQBWgNABAfQACAhAoBjQATAyAUArQg9AEg5AAIhHgCg");
	this.shape_8.setTransform(125.8,152.2,0.666,0.666);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E16F74").s().p("Ah1AVIASgRIA1A0ICSiSIARARIijCkg");
	this.shape_9.setTransform(73.9,132.7,0.666,0.666);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E16F74").s().p("Ah1AUIASgRIA1A1ICSiSIARASIijCjg");
	this.shape_10.setTransform(73.9,109.9,0.666,0.666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E16F74").s().p("AhNAOIAMgMIAjAkIBhhiIALAMIhsBtg");
	this.shape_11.setTransform(73.9,87);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B0B0B0").s().p("AhBBDIAAiFICDAAIAACFg");
	this.shape_12.setTransform(69.2,89.6,0.666,0.666);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B0B0B0").s().p("AhBBDIAAiEICDAAIAACEg");
	this.shape_13.setTransform(69.2,112.4,0.666,0.666);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B0B0B0").s().p("AhBBDIAAiFICDAAIAACFg");
	this.shape_14.setTransform(69.2,135.4,0.666,0.666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_15.setTransform(69.1,80.6,0.666,0.666);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_16.setTransform(60,80.6,0.666,0.666);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgRIAPAAIAAARgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_17.setTransform(60,89.6,0.666,0.666);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_18.setTransform(60,98.7,0.666,0.666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_19.setTransform(69.1,98.7,0.666,0.666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_20.setTransform(78.2,98.7,0.666,0.666);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgRIAPAAIAAARgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_21.setTransform(78.2,89.6,0.666,0.666);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_22.setTransform(78.2,80.6,0.666,0.666);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_23.setTransform(69.1,103.3,0.666,0.666);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_24.setTransform(60,103.3,0.666,0.666);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgQIAPAAIAAAQgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_25.setTransform(60,112.4,0.666,0.666);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_26.setTransform(60,121.5,0.666,0.666);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_27.setTransform(69.1,121.5,0.666,0.666);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_28.setTransform(78.2,121.5,0.666,0.666);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHArIAAgRIAPAAIAAARgAgHAJIAAgQIAPAAIAAAQgAgHgZIAAgRIAPAAIAAARgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_29.setTransform(78.2,112.4,0.666,0.666);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_30.setTransform(78.2,103.3,0.666,0.666);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_31.setTransform(69.1,126.1,0.666,0.666);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_32.setTransform(60,126.1,0.666,0.666);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHAqIAAgRIAPAAIAAARgAgHAIIAAgQIAPAAIAAAQgAgHgYIAAgSIAPAAIAAASgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_33.setTransform(60,135.2,0.666,0.666);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_34.setTransform(60,144.3,0.666,0.666);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B0B0B0").s().p("ABeAIIAAgPIARAAIAAAPgAA8AIIAAgPIARAAIAAAPgAAaAIIAAgPIARAAIAAAPgAgHAIIAAgPIAQAAIAAAPgAgqAIIAAgPIASAAIAAAPgAhMAIIAAgPIARAAIAAAPgAhuAIIAAgPIARAAIAAAPg");
	this.shape_35.setTransform(69.1,144.3,0.666,0.666);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_36.setTransform(78.2,144.3,0.666,0.666);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B0B0B0").s().p("AgHBvIAAgRIAPAAIAAARgAgHBNIAAgRIAPAAIAAARgAgHAqIAAgRIAPAAIAAARgAgHAIIAAgQIAPAAIAAAQgAgHgYIAAgSIAPAAIAAASgAgHg7IAAgRIAPAAIAAARgAgHhdIAAgRIAPAAIAAARg");
	this.shape_37.setTransform(78.2,135.2,0.666,0.666);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B0B0B0").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_38.setTransform(78.2,126.1,0.666,0.666);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B0B0B0").s().p("ABuEiIhKlWIAGgCQAhgNATgdQAUgdAAgjQAAgvgigiQghghgvAAQguAAgiAhQghAiAAAvQAAAjATAcQAUAdAgANIAGADIhJFWIgPAAIBHlNQgigQgVggQgUgfAAgmQAAg2AmglQAmgmA0AAQA1AAAmAmQAmAlAAA2QAAAmgVAgQgUAfgjAQIBIFNg");
	this.shape_39.setTransform(94.8,42.9,0.666,0.666);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F0A693").s().p("ACLBtIAAgTIkXAAIAAATIhqAAIAAjaIHtAAIAADag");
	this.shape_40.setTransform(94.8,55.7,0.666,0.666);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EBE5EE").s().p("AgNADIgBgGIAdAAIAAAGg");
	this.shape_41.setTransform(103.1,62.3,0.666,0.666);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EBE5EE").s().p("AgPADIAAgGIAfAAIgCAGg");
	this.shape_42.setTransform(86.5,62.3,0.666,0.666);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FEE69D").s().p("AncAjIAAhFIO5AAIAABFg");
	this.shape_43.setTransform(86.8,57.7,0.666,0.666);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_44.setTransform(106.9,142.6,0.666,0.666);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_45.setTransform(106.9,137.6,0.666,0.666);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_46.setTransform(106.9,132.5,0.666,0.666);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_47.setTransform(106.9,127.5,0.666,0.666);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_48.setTransform(106.9,122.4,0.666,0.666);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B0B0B0").s().p("AkgAQIAAgfIJBAAIAAAfg");
	this.shape_49.setTransform(106.9,117.4,0.666,0.666);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_50.setTransform(106.9,112.3,0.666,0.666);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_51.setTransform(106.9,107.2,0.666,0.666);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_52.setTransform(106.9,102.2,0.666,0.666);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_53.setTransform(106.9,97.1,0.666,0.666);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B0B0B0").s().p("AkgARIAAghIJBAAIAAAhg");
	this.shape_54.setTransform(106.9,92,0.666,0.666);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B0B0B0").s().p("AiCARIAAghIEFAAIAAAhg");
	this.shape_55.setTransform(96.3,82.9,0.666,0.666);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ApWL2IAA3rIO5AAIAAD0ID0AAIAAT3g");
	this.shape_56.setTransform(94.9,105.8,0.666,0.666);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E6E7E8").s().p("ApWKdIAA05IO5AAID0D0IAARFg");
	this.shape_57.setTransform(94.9,99.9,0.666,0.666);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ApSLxIAA3hISlAAIAAXhg");
	this.shape_58.setTransform(95,105.6,0.666,0.666);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7F8487").s().p("ApzM4QgKABgHgIQgHgHAAgKIAA4/QAAgKAHgHQAHgIAKABITnAAQAJgBAIAIQAHAHAAAKIAAY/QAAAKgHAHQgIAIgJgBg");
	this.shape_59.setTransform(94.9,105.8,0.666,0.666);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E3EFB9").s().p("AljNJQijhFh/h+Qh+h+hFikQhIiqAAi5QAAi6BIipQBFikB+h+QB/h/CjhGQCrhHC4gBQC6ABCpBHQClBGB+B/QB/B+BFCkQBHCpAAC6QAAC5hHCqQhFCkh/B+Qh+B+ilBFQipBJi6gBQi4ABirhJg");
	this.shape_60.setTransform(104.6,103.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B5E5D9").s().p("AmTO8Qi6hPiQiPQiPiQhPi6QhRjBAAjTQAAjSBRjBQBPi6CPiQQCQiPC6hPQDBhSDSAAQDTAADBBSQC6BPCQCPQCPCQBPC6QBRDBAADSQAADThRDBQhPC6iPCQQiQCPi6BPQjBBSjTAAQjSAAjBhSg");
	this.shape_61.setTransform(103.7,103.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.5,207.6);


(lib.iconoinvisible = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M03_TMR_META();
	this.instance.parent = this;
	this.instance.setTransform(102.8,104.3,0.431,0.431,0,0,0,138.4,173.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE5DF").s().p("AmjOWQi8hSiMiUQj3kWgJmMQADkbCIjlQCHjmDliHQDliIEbgDQDdACC7BTQC9BUCMCSQD2EWAJGMQgDEbiIDlQiHDmjlCIQjlCHkbADQjbgCi9hTg");
	this.shape.setTransform(110.7,110.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFEF").s().p("AnOP0QjPhbibiiQkQkzgKm1QADk3CXj9QCUj9D9iVQD9iWE4gDQDyABDPBcQDQBcCbChQEPEzAKG1QgDE3iWD9QiVD9j+CWQj8CVk4ADQjxgCjQhbg");
	this.shape_1.setTransform(110.7,110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.3,221.1);


(lib.iconoinvisble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 1
	this.instance = new lib.iconoinvisible("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(139.9,139.6,1,1,0,0,0,110.7,110.5);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.2,29.1,221.3,221.1);


(lib.grafica1banderillas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("COMPONENTES\nDE COMPROMISO", "bold 15px 'Arial'");
	this.text.lineHeight = 17;
	this.text.lineWidth = 155;
	this.text.parent = this;
	this.text.setTransform(393.7,271.1,1.03,1.03);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BFQgXgZAAgqQAAgtAXgZQAYgZAlAAQAhAAAVAUQAMAMAGAVIgkAJQgDgOgKgIQgLgIgOAAQgTAAgNAOQgNAPABAgQAAAhAMAPQAMAPAUAAQAOAAALgKQAKgJAEgUIAkALQgIAegTAOQgTAPgdAAQgkAAgXgZg");
	this.shape.setTransform(361.7,287.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFE0B5").s().p("At8DHIAAmNIaXAAIAAAFQAhAKAZAZQAoApAAA4IAAB7QAAA5goAoQgZAZghAKIAAAFg");
	this.shape_1.setTransform(474.3,287.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#98C150").s().p("Ag7DHIjWi4QgOgLAOgLIDdi/IFOAAIAAGNg");
	this.shape_2.setTransform(355,287);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMFNIkUk1QgRgTARgSIEdk/IGsAAIAAKZg");
	this.shape_3.setTransform(356.6,286.8);

	this.text_1 = new cjs.Text("COMPONENTES\nDE ASPIRACIÓN", "bold 15px 'Arial'");
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 143;
	this.text_1.parent = this;
	this.text_1.setTransform(393.7,172.5,1.03,1.03);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLBbIAAi1IBJAAQAUAAAKACQALACAJAGQAIAFAFAKQAGAJAAAMQAAANgGAKQgIALgLAFQAQAFAJALQAJALAAAQQAAANgGALQgFAMgLAHQgJAHgPACQgJABgiAAgAgmA8IAiAAQASAAAFgBQAJgBAFgGQAFgGAAgKQAAgIgEgFQgEgGgHgDQgIgCgYAAIgdAAgAgmgRIAYAAQAUAAAGgBQAIgBAGgGQAFgFABgJQgBgIgEgFQgFgGgJgBIgfAAIgUAAg");
	this.shape_4.setTransform(362.1,190.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFEDAD").s().p("At8DHIAAmNIaXAAIAAAFQAhAJAZAaQAoApAAA5IAAB6QAAA5goAoQgZAZghAKIAAAFg");
	this.shape_5.setTransform(474.3,189);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBD156").s().p("Ag7DHIjWi4QgOgLAOgLIDdi/IFOAAIAAGNg");
	this.shape_6.setTransform(355,188.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMFNIkUk1QgRgTARgSIEdk/IGsAAIAAKZg");
	this.shape_7.setTransform(356.6,188.8);

	this.text_2 = new cjs.Text("COMPONENTES\nDE HABILIDAD", "bold 15px 'Arial'");
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 142;
	this.text_2.parent = this;
	this.text_2.setTransform(393.7,62.9,1.03,1.03);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzBbIgQgpIhHAAIgPApIgnAAIBGi1IAmAAIBJC1gAgZATIAwAAIgYhCg");
	this.shape_8.setTransform(361.7,80.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C7DFE9").s().p("At9DHIAAmNIaZAAIAAAGQAhAJAZAZQAoApAAA5IAAB6QAAA5goAoQgZAZghALIAAAEg");
	this.shape_9.setTransform(474.4,79.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#72B5C9").s().p("Ag7DHIjWi4QgOgMAOgKIDdi/IFOAAIAAGNg");
	this.shape_10.setTransform(355,79.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhMFNIkUk1QgRgTARgSIEdk/IGsAAIAAKZg");
	this.shape_11.setTransform(356.6,78.8);

	this.instance = new lib.M03_TMR_TABLAtodas();
	this.instance.parent = this;
	this.instance.setTransform(164.5,175.4,0.518,0.518,0,0,0,323.1,232);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.text_2},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-0.3,582.2,341.2);


(lib.flechamueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flechainstrucciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.6,22.4);

	this.instance_1 = new lib.circulo1instrucciones("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(24,24.5,1,1,0,0,0,105.2,10.2);

	this.instance_2 = new lib.circulo2instrucciones("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(23.3,23.5,1.651,1.651,0,0,0,14.1,14.2);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.circulo2instrucciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,23.3,1,1,0,0,0,14.2,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.5,43.3,43.3);


(lib.estrategiadenegocio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.estrategia1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(179.9,179.9,1.968,1.968,0,0,0,91.4,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359.9,359.8);


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


(lib.circuloescalavaloracion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE5DF").s().p("ArAS4Qk8i7i5k6Qi8k8gEmHQAEmGC8k6QC5k8E8i5QE6i7GGgFQGHAFE7C7QE7C5C6E8QC7E6AEGGQgEGHi7E8Qi6E6k7C7Qk7C7mHADQmGgDk6i7gAn/zVQj0Bli/C+Qi/C/hlD0QhjDygCENQACEOBjDzQBlDzC/C/QC/C+D0BlQDyBkENACQENgCD1hkQDxhlDAi+QC+i/BljzQBkjzACkOQgCkNhkjyQhlj0i+i/QjAi+jxhlQj1hkkNgCQkNACjyBkg");
	this.shape.setTransform(139.8,139.8);

	this.instance = new lib.M03_TMR_META();
	this.instance.parent = this;
	this.instance.setTransform(131.9,133.4,0.431,0.431,0,0,0,138.4,173.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFE5DF").s().p("AmjOWQi8hSiMiUQj4kWgImMQADkbCIjlQCHjmDliHQDmiIEagDQDdACC7BTQC9BUCMCSQD2EWAJGMQgDEbiIDlQiHDmjmCIQjlCHkbADQjagCi9hTg");
	this.shape_1.setTransform(139.8,139.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFEFEF").s().p("AnOP0QjPhbibiiQkQkzgJm1QADk3CWj9QCUj9D9iVQD9iWE4gDQDyABDPBcQDRBcCaChQEPEzAKG1QgDE3iWD9QiVD9j+CWQj8CVk4ADQjxgCjQhbg");
	this.shape_2.setTransform(139.8,139.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.6,279.6);


(lib.btn_cerrar_v2 = function(mode,startPosition,loop) {
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


(lib.T3_Señalar_btn_mc_1_lineaMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_gr_1_lineaMOD3a();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},12).to({alpha:0},13).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLASMOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// OVER (rollover)
	this.instance = new lib.T3_movie_rollover_1_lineaMOD3a();
	this.instance.parent = this;
	this.instance.setTransform(91,14.5,1,1,0,0,0,91,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// UP (reposo)
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.008)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_Señalar_btn_mc_1_linea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T3_Señalar_btn_gr_1_linea();
	this.instance.parent = this;
	this.instance.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);
	this.instance.alpha = 0.031;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},12).to({alpha:0},13).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// OVER (rollover)
	this.instance = new lib.T3_movie_rollover_1_linea();
	this.instance.parent = this;
	this.instance.setTransform(91,14.5,1,1,0,0,0,91,14.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// UP (reposo)
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.008)").s().p("Al+HgQhDAAAAhDIAAs5QAAhDBDAAIL9AAQBDAAAABDIAAM5QAABDhDAAg");
	this.shape.setTransform(45,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T2Mod3_Ventana_con_sus_contenidos_MC3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(4);
			
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_2 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(5);
			
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}
	this.frame_3 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (d) {
			d.currentTarget.removeAllEventListeners();
			raiz.gotoAndStop(6);
			
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (d) {
			d.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (d) {
			d.currentTarget.gotoAndStop(0);
		});
		
		raiz.m2mc1_Cerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(4));

	// parche, btn invisible y btn cerrar
	this.m2mc1_Cerrar = new lib.btn_cerrar_v2();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(668,-68.9,1.038,1.041,0,0,0,0.1,-0.1);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v2(), 3);

	this.botoninvisible = new lib.T1_Boton_invisible();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisible(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botoninvisible},{t:this.m2mc1_Cerrar}]},1).to({state:[]},3).wait(3));

	// Transicion
	this.cuadrotransicion = new lib.T1_cuadrotransicion_mc();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(317.3,177.5,1.024,1.074,0,0,0,309.8,176);

	this.cuadrotransicion2 = new lib.T1_cuadrotransicion_mccopy();
	this.cuadrotransicion2.parent = this;
	this.cuadrotransicion2.setTransform(310.4,177.4,1.002,1.002,0,0,0,309.9,177.2);

	this.cuadrotransicion2_1 = new lib.T1_cuadrotransicion_mccopy2();
	this.cuadrotransicion2_1.parent = this;
	this.cuadrotransicion2_1.setTransform(310.2,176.8,1,1.004,0,0,0,309.9,176.7);

	this.cuadrotransicion2_2 = new lib.T1_cuadrotransicion_mccopy3();
	this.cuadrotransicion2_2.parent = this;
	this.cuadrotransicion2_2.setTransform(311.7,177.3,0.997,0.999,0,0,0,310.1,176.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cuadrotransicion}]},1).to({state:[{t:this.cuadrotransicion2}]},3).to({state:[{t:this.cuadrotransicion2_1}]},1).to({state:[{t:this.cuadrotransicion2_2}]},1).wait(1));

	// Contenidos
	this.text = new cjs.Text(" BAJO", "bold 12px 'Arial'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(633.9,-22.8,1.282,1.282);

	this.text_1 = new cjs.Text("MEDIO ", "bold 12px 'Arial'");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 42;
	this.text_1.parent = this;
	this.text_1.setTransform(573.9,-22.8,1.282,1.282);

	this.text_2 = new cjs.Text("ALTO  ", "bold 12px 'Arial'");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 36;
	this.text_2.parent = this;
	this.text_2.setTransform(515.9,-22.8,1.282,1.282);

	this.text_3 = new cjs.Text("ALTO / MEDIO / BAJO", "bold 11px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 304;
	this.text_3.parent = this;
	this.text_3.setTransform(594.1,292.4,1.282,1.282);

	this.text_4 = new cjs.Text("Piensa más allá de los límites actuales: Se enfoca en temas de largo plazo, y de gran esquema; Tiene una mentalidad global; Piensa en las implicaciones interfuncionales de las decisiones.", "13px 'Arial'");
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 496;
	this.text_4.parent = this;
	this.text_4.setTransform(-191.1,145.3,1.282,1.282);

	this.text_5 = new cjs.Text("Demuestra un nivel de inteligencia emocional requerida para ser exitoso en un rol más alto y con mayor responsabilidad. ", "13px 'Arial'");
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 517;
	this.text_5.parent = this;
	this.text_5.setTransform(-191.1,102.8,1.282,1.282);

	this.text_6 = new cjs.Text("Muestra una curiosidad y un afán por aprender nuevas habilidades y maneras de pensar, aplica esas capacidades para impulsar un negocio.", "13px 'Arial'");
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 520;
	this.text_6.parent = this;
	this.text_6.setTransform(-190.2,55.8,1.282,1.282);

	this.text_7 = new cjs.Text("Es flexible y adaptable para manejar los cambios del ambiente del negocio.", "13px 'Arial'");
	this.text_7.lineHeight = 17;
	this.text_7.lineWidth = 547;
	this.text_7.parent = this;
	this.text_7.setTransform(-191.1,257,1.282,1.282);

	this.text_8 = new cjs.Text("Piensa de manera creativa.", "13px 'Arial'");
	this.text_8.lineHeight = 17;
	this.text_8.lineWidth = 545;
	this.text_8.parent = this;
	this.text_8.setTransform(-191.1,215.8,1.282,1.282);

	this.text_9 = new cjs.Text("Demuestra competencias básicas y funcionales que son transferibles a roles más altos.", "13px 'Arial'");
	this.text_9.lineHeight = 14;
	this.text_9.lineWidth = 546;
	this.text_9.parent = this;
	this.text_9.setTransform(-191.1,19.6,1.282,1.282);

	this.text_10 = new cjs.Text("CALIFICACIÓN GENERAL DE HABILIDAD", "bold 13px 'Arial'");
	this.text_10.lineHeight = 17;
	this.text_10.lineWidth = 288;
	this.text_10.parent = this;
	this.text_10.setTransform(-191.1,292.4,1.282,1.282);

	this.text_11 = new cjs.Text("COMPONENTES DE HABILIDAD (Habilidad Actual y Futura)", "bold 16px 'Arial'");
	this.text_11.lineHeight = 20;
	this.text_11.lineWidth = 547;
	this.text_11.parent = this;
	this.text_11.setTransform(-191.1,-27.1,1.282,1.282);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape.setTransform(536.1,27,0.729,1.359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_1.setTransform(536.1,27,0.729,1.359);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_2.setTransform(597.9,27,0.729,1.359);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_3.setTransform(597.9,27,0.729,1.359);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_4.setTransform(151.7,27,1.282,1.359);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_5.setTransform(151.7,27,1.282,1.359);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_6.setTransform(657.8,27,0.729,1.359);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_7.setTransform(657.8,27,0.729,1.359);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_8.setTransform(536.1,72.9,0.729,1.466);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_9.setTransform(536.1,72.9,0.729,1.466);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_10.setTransform(597.9,72.9,0.729,1.466);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_11.setTransform(597.9,72.9,0.729,1.466);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_12.setTransform(151.7,72.9,1.282,1.466);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_13.setTransform(151.7,72.9,1.282,1.466);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_14.setTransform(657.8,72.9,0.729,1.466);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_15.setTransform(657.8,72.9,0.729,1.466);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_16.setTransform(536.1,119.6,0.729,1.466);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_17.setTransform(536.1,119.6,0.729,1.466);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_18.setTransform(597.9,119.6,0.729,1.466);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_19.setTransform(597.9,119.6,0.729,1.466);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(102,102,102,0.498)").p("AExkeIAAI9IphAAIAAo9g");
	this.shape_20.setTransform(536.1,172.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E3EFB9").s().p("AkwEfIAAo9IJhAAIAAI9g");
	this.shape_21.setTransform(536.1,172.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(102,102,102,0.498)").p("AGtjeIAAG+ItZAAIAAm+g");
	this.shape_22.setTransform(597.9,172.1,0.729,1.282);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E3EFB9").s().p("AmsDfIAAm+INZAAIAAG+g");
	this.shape_23.setTransform(597.9,172.1,0.729,1.282);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgDeIAAG+MhWPAAAIAAm+g");
	this.shape_24.setTransform(151.7,172.1,1.282,1.282);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E3EFB9").s().p("EgrGADfIAAm+MBWNAAAIAAG+g");
	this.shape_25.setTransform(151.7,172.1,1.282,1.282);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_26.setTransform(151.7,119.6,1.282,1.466);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_27.setTransform(151.7,119.6,1.282,1.466);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBpIAADUMhWPAAAIAAjUg");
	this.shape_28.setTransform(151.7,221.6,1.282,2.003);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E3EFB9").s().p("EgrGABrIAAjVMBWNAAAIAADVg");
	this.shape_29.setTransform(151.7,221.6,1.282,2.003);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_30.setTransform(151.7,263.3,1.282,2.003);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_31.setTransform(151.7,263.3,1.282,2.003);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_32.setTransform(657.8,119.6,0.729,1.466);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_33.setTransform(657.8,119.6,0.729,1.466);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(102,102,102,0.498)").p("AGIjeIAAG+IsPAAIAAm+g");
	this.shape_34.setTransform(657.8,172.1,0.729,1.282);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E3EFB9").s().p("AmHDfIAAm+IMPAAIAAG+g");
	this.shape_35.setTransform(657.8,172.1,0.729,1.282);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhpIAADUIsPAAIAAjUg");
	this.shape_36.setTransform(657.8,221.6,0.729,2.003);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E3EFB9").s().p("AmHBrIAAjVIMPAAIAADVg");
	this.shape_37.setTransform(657.8,221.6,0.729,2.003);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_38.setTransform(657.8,263.3,0.729,2.003);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_39.setTransform(657.8,263.3,0.729,2.003);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_40.setTransform(597.9,263.3,0.729,2.003);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_41.setTransform(597.9,263.3,0.729,2.003);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(102,102,102,0.498)").p("AGthpIAADUItZAAIAAjUg");
	this.shape_42.setTransform(597.9,221.6,0.729,2.003);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E3EFB9").s().p("AmsBrIAAjVINZAAIAADVg");
	this.shape_43.setTransform(597.9,221.6,0.729,2.003);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhpIAADUItFAAIAAjUg");
	this.shape_44.setTransform(536.1,221.6,0.729,2.003);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E3EFB9").s().p("AmiBrIAAjVINEAAIAADVg");
	this.shape_45.setTransform(536.1,221.6,0.729,2.003);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_46.setTransform(536.1,263.3,0.729,2.003);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_47.setTransform(536.1,263.3,0.729,2.003);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhZIAAC0IsPAAIAAi0g");
	this.shape_48.setTransform(657.8,-16.7,0.729,2.385);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C6DFE9").s().p("AmHBaIAAi0IMPAAIAAC0g");
	this.shape_49.setTransform(657.8,-16.7,0.729,2.385);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(102,102,102,0.498)").p("AGthZIAAC0ItZAAIAAi0g");
	this.shape_50.setTransform(597.9,-16.7,0.729,2.385);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C6DFE9").s().p("AmsBaIAAi0INZAAIAAC0g");
	this.shape_51.setTransform(597.9,-16.7,0.729,2.385);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhZIAAC0ItFAAIAAi0g");
	this.shape_52.setTransform(536.1,-16.7,0.729,2.385);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C6DFE9").s().p("AmiBaIAAi0INEAAIAAC0g");
	this.shape_53.setTransform(536.1,-16.7,0.729,2.385);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBZIAAC0MhWPAAAIAAi0g");
	this.shape_54.setTransform(151.7,-16.7,1.282,2.385);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C6DFE9").s().p("EgrGABaIAAi0MBWNAAAIAAC0g");
	this.shape_55.setTransform(151.7,-16.7,1.282,2.385);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBZIAAC0MhWPAAAIAAi0g");
	this.shape_56.setTransform(242.1,294.4,1.612,2.385);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C6DFE9").s().p("EgrGABaIAAi0MBWNAAAIAAC0g");
	this.shape_57.setTransform(242.1,294.4,1.612,2.385);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#E3EFB9").ss(1,1,1,3,true).p("AifABQAMgBANAAIEmAA");
	this.shape_58.setTransform(-272,-76.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAwBVIgPgnIhDAAIgOAnIglAAIBDipIAkAAIBDCpgAgYASIAuAAIgWg/g");
	this.shape_59.setTransform(14.2,-76.6);

	this.text_12 = new cjs.Text("Check List de Potencial / Componentes de Habilidad", "bold 35px 'Arial'", "#333333");
	this.text_12.lineHeight = 41;
	this.text_12.lineWidth = 1052;
	this.text_12.parent = this;
	this.text_12.setTransform(58.4,-85,0.518,0.518);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#72B5C9").s().p("Ah6DIIgLAAQg4gDgpgpQgtgtAAg+IAAj4IImAAIAAGPg");
	this.shape_60.setTransform(12.7,-75.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C7DFE9").s().p("EgmyADIIAAmPMBNlAAAIAAD3QAAA/gtAtQgsAshAAAg");
	this.shape_61.setTransform(288.5,-75.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EEEFEF").s().p("AKTFKIAAmZQAAhPgqg9IAOAAQAqA9AABPIAAGZgAnijbQgNgTgSgSQhDhDhcgGQBlABBIBIQARASAOATg");
	this.shape_62.setTransform(578.1,1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_63.setTransform(151.7,168.5,1.282,1.659);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_64.setTransform(151.7,168.5,1.282,1.659);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_65.setTransform(657.8,168.5,0.729,1.659);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_66.setTransform(657.8,168.5,0.729,1.659);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_67.setTransform(597.9,168.5,0.729,1.659);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_68.setTransform(597.9,168.5,0.729,1.659);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_69.setTransform(536.1,168.5,0.729,1.659);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_70.setTransform(536.1,168.5,0.729,1.659);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_71.setTransform(151.7,201.3,1.282,1.659);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_72.setTransform(151.7,201.3,1.282,1.659);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_73.setTransform(657.8,201.3,0.729,1.659);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_74.setTransform(657.8,201.3,0.729,1.659);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_75.setTransform(597.9,201.3,0.729,1.659);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_76.setTransform(597.9,201.3,0.729,1.659);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_77.setTransform(536.1,201.3,0.729,1.659);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_78.setTransform(536.1,201.3,0.729,1.659);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_79.setTransform(151.7,234.1,1.282,1.659);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_80.setTransform(151.7,234.1,1.282,1.659);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_81.setTransform(657.8,234.1,0.729,1.659);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_82.setTransform(657.8,234.1,0.729,1.659);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_83.setTransform(597.9,234.1,0.729,1.659);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_84.setTransform(597.9,234.1,0.729,1.659);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_85.setTransform(536.1,234.1,0.729,1.659);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_86.setTransform(536.1,234.1,0.729,1.659);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgBlIAADLMhWPAAAIAAjLg");
	this.shape_87.setTransform(151.7,266.9,1.282,1.659);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E3EFB9").s().p("EgrGABmIAAjLMBWNAAAIAADLg");
	this.shape_88.setTransform(151.7,266.9,1.282,1.659);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(102,102,102,0.498)").p("AGIhlIAADLIsPAAIAAjLg");
	this.shape_89.setTransform(657.8,266.9,0.729,1.659);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E3EFB9").s().p("AmHBmIAAjLIMPAAIAADLg");
	this.shape_90.setTransform(657.8,266.9,0.729,1.659);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(102,102,102,0.498)").p("AGthlIAADLItZAAIAAjLg");
	this.shape_91.setTransform(597.9,266.9,0.729,1.659);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E3EFB9").s().p("AmsBmIAAjLINZAAIAADLg");
	this.shape_92.setTransform(597.9,266.9,0.729,1.659);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(102,102,102,0.498)").p("AGjhlIAADLItFAAIAAjLg");
	this.shape_93.setTransform(536.1,266.9,0.729,1.659);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E3EFB9").s().p("AmiBmIAAjLINEAAIAADLg");
	this.shape_94.setTransform(536.1,266.9,0.729,1.659);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(102,102,102,0.498)").p("AEejXIAAGvIo7AAIAAmvg");
	this.shape_95.setTransform(657.8,-16.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DBD156").s().p("AkdDYIAAmvII7AAIAAGvg");
	this.shape_96.setTransform(657.8,-16.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DBD156").s().p("AmsBaIAAi0INZAAIAAC0g");
	this.shape_97.setTransform(597.9,-16.7,0.729,2.385);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DBD156").s().p("AmiBaIAAi0INEAAIAAC0g");
	this.shape_98.setTransform(536.1,-16.7,0.729,2.385);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(102,102,102,0.498)").p("EA3TgDXIAAGvMhulAAAIAAmvg");
	this.shape_99.setTransform(151.7,-16.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#DBD156").s().p("Eg3RADYIAAmvMBujAAAIAAGvg");
	this.shape_100.setTransform(151.7,-16.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(102,102,102,0.498)").p("EBFhgDXIAAGvMiLBAAAIAAmvg");
	this.shape_101.setTransform(242.1,294.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DBD156").s().p("EhFgADYIAAmvMCLBAAAIAAGvg");
	this.shape_102.setTransform(242.1,294.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AhGBVIAAipIBDAAQAUAAAKABQAKACAIAFQAHAGAGAJQAFAJAAALQAAAMgGAKQgHAKgLAFQAQAEAIAKQAJALAAAPQAAALgGALQgGALgJAHQgJAHgOABQgIABghAAgAgkA5IAgAAQARAAAGgCQAHgBAFgFQAFgGAAgJQAAgIgEgFQgEgFgHgDQgHgCgWAAIgcAAgAgkgRIAXAAIAYAAQAIgBAFgFQAGgFAAgJQgBgHgEgFQgEgFgJgBIgcgBIgUAAg");
	this.shape_103.setTransform(14.5,-76.6);

	this.text_13 = new cjs.Text("Check List de Potencial / Componentes de Aspiración", "bold 35px 'Arial'", "#333333");
	this.text_13.lineHeight = 41;
	this.text_13.lineWidth = 1052;
	this.text_13.parent = this;
	this.text_13.setTransform(56.4,-85,0.518,0.518);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EFEDAD").s().p("EgmyADIIAAmPMBNlAAAIAAD3QAAA/gtAtQgsAshAAAg");
	this.shape_104.setTransform(288.5,-75.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#DBD156").s().p("Ah6DIIgLAAQg4gDgpgpQgtgtAAg+IAAj4IImAAIAAGPg");
	this.shape_105.setTransform(12.7,-75.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_106.setTransform(536.1,73.2,0.729,1.42);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_107.setTransform(536.1,73.2,0.729,1.42);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_108.setTransform(597.9,73.2,0.729,1.42);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_109.setTransform(597.9,73.2,0.729,1.42);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_110.setTransform(151.7,73.2,1.282,1.42);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_111.setTransform(151.7,73.2,1.282,1.42);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_112.setTransform(657.8,73.2,0.729,1.42);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_113.setTransform(657.8,73.2,0.729,1.42);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(102,102,102,0.498)").p("AGjiiIAAFFItFAAIAAlFg");
	this.shape_114.setTransform(536.1,26.9,0.729,1.42);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E3EFB9").s().p("AmiCjIAAlFINEAAIAAFFg");
	this.shape_115.setTransform(536.1,26.9,0.729,1.42);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(102,102,102,0.498)").p("AGtiiIAAFFItZAAIAAlFg");
	this.shape_116.setTransform(597.9,26.9,0.729,1.42);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E3EFB9").s().p("AmsCjIAAlFINZAAIAAFFg");
	this.shape_117.setTransform(597.9,26.9,0.729,1.42);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(102,102,102,0.498)").p("EArIgCiIAAFFMhWPAAAIAAlFg");
	this.shape_118.setTransform(151.7,26.9,1.282,1.42);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E3EFB9").s().p("EgrGACjIAAlFMBWNAAAIAAFFg");
	this.shape_119.setTransform(151.7,26.9,1.282,1.42);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(102,102,102,0.498)").p("AGIiiIAAFFIsPAAIAAlFg");
	this.shape_120.setTransform(657.8,26.9,0.729,1.42);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E3EFB9").s().p("AmHCjIAAlFIMPAAIAAFFg");
	this.shape_121.setTransform(657.8,26.9,0.729,1.42);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#98C150").s().p("AmHBaIAAi0IMPAAIAAC0g");
	this.shape_122.setTransform(657.8,-17.7,0.729,2.385);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#98C150").s().p("AmsBaIAAi0INZAAIAAC0g");
	this.shape_123.setTransform(597.9,-17.7,0.729,2.385);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#98C150").s().p("AmiBaIAAi0INEAAIAAC0g");
	this.shape_124.setTransform(536.1,-17.7,0.729,2.385);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#98C150").s().p("EgrGABaIAAi0MBWNAAAIAAC0g");
	this.shape_125.setTransform(151.7,-17.7,1.282,2.385);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#98C150").s().p("EhFgADYIAAmvMCLBAAAIAAGvg");
	this.shape_126.setTransform(242.1,293.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("Ag0BBQgVgXAAgpQAAgpAWgYQAWgXAiAAQAgAAATASQAMALAGAVIgiAIQgDgNgKgIQgKgIgNAAQgSAAgMAOQgMANAAAfQAAAfAMAOQALAOASAAQAOAAAKgJQAJgJAFgSIAhAKQgIAcgRAOQgSANgcAAQghAAgWgXg");
	this.shape_127.setTransform(-6.8,-77.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#98C150").s().p("Ah7DIIgKAAQg4gDgpgpQgtgtAAg+IAAj4IImAAIAAGPg");
	this.shape_128.setTransform(-8.3,-76.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CFE0B5").s().p("At+DIIAAmPMA34AAAIAAD3QAAA/gsAtQgtAsg+AAgEgp6ADIIAAmPIb8AAIAAGPg");
	this.shape_129.setTransform(287.5,-76.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62,p:{y:1}},{t:this.shape_61},{t:this.shape_60},{t:this.text_12,p:{scaleX:0.518,scaleY:0.518,x:58.4,y:-85,text:"Check List de Potencial / Componentes de Habilidad",font:"bold 35px 'Arial'",color:"#333333",lineHeight:41.1,lineWidth:1052}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{y:-16.7}},{t:this.shape_53},{t:this.shape_52,p:{y:-16.7}},{t:this.shape_51},{t:this.shape_50,p:{y:-16.7}},{t:this.shape_49},{t:this.shape_48,p:{y:-16.7}},{t:this.shape_47,p:{scaleY:2.003,y:263.3}},{t:this.shape_46,p:{scaleY:2.003,y:263.3}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{scaleY:2.003,y:263.3}},{t:this.shape_40,p:{scaleY:2.003,y:263.3}},{t:this.shape_39,p:{scaleY:2.003,y:263.3}},{t:this.shape_38,p:{scaleY:2.003,y:263.3}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleY:1.466,y:119.6}},{t:this.shape_32,p:{scaleY:1.466,y:119.6}},{t:this.shape_31,p:{scaleY:2.003,y:263.3}},{t:this.shape_30,p:{scaleY:2.003,y:263.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{scaleY:1.466,y:119.6}},{t:this.shape_26,p:{scaleY:1.466,y:119.6}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{scaleY:1.466,y:119.6}},{t:this.shape_18,p:{scaleY:1.466,y:119.6}},{t:this.shape_17,p:{scaleY:1.466,y:119.6}},{t:this.shape_16,p:{scaleY:1.466,y:119.6}},{t:this.shape_15,p:{scaleY:1.466,y:72.9}},{t:this.shape_14,p:{scaleY:1.466,y:72.9}},{t:this.shape_13,p:{scaleY:1.466,y:72.9}},{t:this.shape_12,p:{scaleY:1.466,y:72.9}},{t:this.shape_11,p:{scaleY:1.466,y:72.9}},{t:this.shape_10,p:{scaleY:1.466,y:72.9}},{t:this.shape_9,p:{scaleY:1.466,y:72.9}},{t:this.shape_8,p:{scaleY:1.466,y:72.9}},{t:this.shape_7,p:{scaleY:1.359,y:27}},{t:this.shape_6,p:{scaleY:1.359,y:27}},{t:this.shape_5,p:{scaleY:1.359,y:27}},{t:this.shape_4,p:{scaleY:1.359,y:27}},{t:this.shape_3,p:{scaleY:1.359,y:27}},{t:this.shape_2,p:{scaleY:1.359,y:27}},{t:this.shape_1,p:{scaleY:1.359,y:27}},{t:this.shape,p:{scaleY:1.359,y:27}},{t:this.text_11,p:{y:-27.1,text:"COMPONENTES DE HABILIDAD (Habilidad Actual y Futura)",font:"bold 16px 'Arial'",lineHeight:20,lineWidth:547}},{t:this.text_10,p:{x:-191.1,text:"CALIFICACIÓN GENERAL DE HABILIDAD",font:"bold 13px 'Arial'",textAlign:"",lineHeight:16.6,lineWidth:288,y:292.4}},{t:this.text_9,p:{y:19.6,text:"Demuestra competencias básicas y funcionales que son transferibles a roles más altos.",lineHeight:13.5,lineWidth:546,x:-191.1,font:"13px 'Arial'",textAlign:""}},{t:this.text_8,p:{y:215.8,text:"Piensa de manera creativa.",lineWidth:545,lineHeight:16.75}},{t:this.text_7,p:{y:257,text:"Es flexible y adaptable para manejar los cambios del ambiente del negocio.",lineWidth:547,lineHeight:16.75}},{t:this.text_6,p:{x:-190.2,y:55.8,text:"Muestra una curiosidad y un afán por aprender nuevas habilidades y maneras de pensar, aplica esas capacidades para impulsar un negocio.",lineWidth:520}},{t:this.text_5,p:{y:102.8,text:"Demuestra un nivel de inteligencia emocional requerida para ser exitoso en un rol más alto y con mayor responsabilidad. ",lineWidth:517}},{t:this.text_4,p:{y:145.3,text:"Piensa más allá de los límites actuales: Se enfoca en temas de largo plazo, y de gran esquema; Tiene una mentalidad global; Piensa en las implicaciones interfuncionales de las decisiones.",lineHeight:13.5,lineWidth:496}},{t:this.text_3,p:{x:594.1,y:292.4,text:"ALTO / MEDIO / BAJO",font:"bold 11px 'Arial'",textAlign:"center",lineHeight:14.25,lineWidth:304}},{t:this.text_2},{t:this.text_1},{t:this.text}]},1).to({state:[{t:this.shape_62,p:{y:1}},{t:this.shape_105},{t:this.shape_104},{t:this.text_13},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{y:294.4}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_52,p:{y:-16.7}},{t:this.shape_97},{t:this.shape_50,p:{y:-16.7}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_15,p:{scaleY:1.588,y:127}},{t:this.shape_14,p:{scaleY:1.588,y:127}},{t:this.shape_13,p:{scaleY:1.588,y:127}},{t:this.shape_12,p:{scaleY:1.588,y:127}},{t:this.shape_11,p:{scaleY:1.588,y:127}},{t:this.shape_10,p:{scaleY:1.588,y:127}},{t:this.shape_9,p:{scaleY:1.588,y:127}},{t:this.shape_8,p:{scaleY:1.588,y:127}},{t:this.shape_7,p:{scaleY:2.002,y:68.5}},{t:this.shape_6,p:{scaleY:2.002,y:68.5}},{t:this.shape_5,p:{scaleY:2.002,y:68.5}},{t:this.shape_4,p:{scaleY:2.002,y:68.5}},{t:this.shape_3,p:{scaleY:2.002,y:68.5}},{t:this.shape_2,p:{scaleY:2.002,y:68.5}},{t:this.shape_1,p:{scaleY:2.002,y:68.5}},{t:this.shape,p:{scaleY:2.002,y:68.5}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_47,p:{scaleY:1.659,y:19}},{t:this.shape_46,p:{scaleY:1.659,y:19}},{t:this.shape_41,p:{scaleY:1.659,y:19}},{t:this.shape_40,p:{scaleY:1.659,y:19}},{t:this.shape_39,p:{scaleY:1.659,y:19}},{t:this.shape_38,p:{scaleY:1.659,y:19}},{t:this.shape_31,p:{scaleY:1.659,y:19}},{t:this.shape_30,p:{scaleY:1.659,y:19}},{t:this.text_12,p:{scaleX:1.282,scaleY:1.282,x:-191.1,y:-27.1,text:"COMPONENTES DE ASPIRACIÓN (Intereses y Motivación)",font:"bold 16px 'Arial'",color:"#000000",lineHeight:20,lineWidth:547}},{t:this.text_11,p:{y:292.4,text:"CALIFICACIÓN GENERAL ASPIRACIÓN",font:"bold 13px 'Arial'",lineHeight:16.6,lineWidth:288}},{t:this.text_10,p:{x:594.1,text:"ALTO / MEDIO / BAJO",font:"bold 11px 'Arial'",textAlign:"center",lineHeight:14.25,lineWidth:304,y:292.4}},{t:this.text_9,p:{y:11.5,text:"Le interesa avanzar a un rol con más alcance, responsabilidad y complejidad.",lineHeight:16.75,lineWidth:547,x:-191.1,font:"13px 'Arial'",textAlign:""}},{t:this.text_8,p:{y:194.2,text:"Identifica nuevas oportunidades y propone nuevos puntos de vista. ",lineWidth:549,lineHeight:16.75}},{t:this.text_7,p:{y:227.9,text:"Demuestra motivación para adquirir experiencias críticas requeridas para un rol más alto. ",lineWidth:544,lineHeight:16.75}},{t:this.text_6,p:{x:-191.1,y:44,text:"Dispuesto a hacer concesiones (ejemplo: Trasladarse, trabajar en otro departamento del negocio, tomar un paso atrás para obtener experiencia crítica) para ganar experiencia/habilidades necesarias para roles más altos.",lineWidth:547}},{t:this.text_5,p:{y:110.9,text:"Busca constantemente las mejores prácticas (dentro de la compañía, a través de la industria y en otras industrias) y cuestiona la viabilidad de sus usos en la situación actual.",lineWidth:532}},{t:this.text_4,p:{y:161.1,text:"Busca constantemente las mejores maneras para mejorarse a sí mismo y a otros. ",lineHeight:16.75,lineWidth:545}},{t:this.text_3,p:{x:-191.1,y:258,text:"Ve más allá de lo que se requiere.",font:"13px 'Arial'",textAlign:"",lineHeight:16.75,lineWidth:547}},{t:this.text_2},{t:this.text_1},{t:this.text}]},1).to({state:[{t:this.shape_62,p:{y:0}},{t:this.shape_129},{t:this.shape_128},{t:this.text_12,p:{scaleX:0.518,scaleY:0.518,x:45.7,y:-86,text:"Check List de Potencial / Componentes de Compromiso",font:"bold 35px 'Arial'",color:"#333333",lineHeight:41.1,lineWidth:1052}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_101,p:{y:293.4}},{t:this.shape_125},{t:this.shape_54,p:{y:-17.7}},{t:this.shape_124},{t:this.shape_52,p:{y:-17.7}},{t:this.shape_123},{t:this.shape_50,p:{y:-17.7}},{t:this.shape_122},{t:this.shape_48,p:{y:-17.7}},{t:this.shape_47,p:{scaleY:3.033,y:251.9}},{t:this.shape_46,p:{scaleY:3.033,y:251.9}},{t:this.shape_41,p:{scaleY:3.033,y:251.9}},{t:this.shape_40,p:{scaleY:3.033,y:251.9}},{t:this.shape_39,p:{scaleY:3.033,y:251.9}},{t:this.shape_38,p:{scaleY:3.033,y:251.9}},{t:this.shape_31,p:{scaleY:3.033,y:251.9}},{t:this.shape_30,p:{scaleY:3.033,y:251.9}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_33,p:{scaleY:1.42,y:119.4}},{t:this.shape_32,p:{scaleY:1.42,y:119.4}},{t:this.shape_27,p:{scaleY:1.42,y:119.4}},{t:this.shape_26,p:{scaleY:1.42,y:119.4}},{t:this.shape_19,p:{scaleY:1.42,y:119.4}},{t:this.shape_18,p:{scaleY:1.42,y:119.4}},{t:this.shape_17,p:{scaleY:1.42,y:119.4}},{t:this.shape_16,p:{scaleY:1.42,y:119.4}},{t:this.shape_15,p:{scaleY:1.42,y:165.7}},{t:this.shape_14,p:{scaleY:1.42,y:165.7}},{t:this.shape_13,p:{scaleY:1.42,y:165.7}},{t:this.shape_12,p:{scaleY:1.42,y:165.7}},{t:this.shape_11,p:{scaleY:1.42,y:165.7}},{t:this.shape_10,p:{scaleY:1.42,y:165.7}},{t:this.shape_9,p:{scaleY:1.42,y:165.7}},{t:this.shape_8,p:{scaleY:1.42,y:165.7}},{t:this.shape_7,p:{scaleY:1.42,y:211.9}},{t:this.shape_6,p:{scaleY:1.42,y:211.9}},{t:this.shape_5,p:{scaleY:1.42,y:211.9}},{t:this.shape_4,p:{scaleY:1.42,y:211.9}},{t:this.shape_3,p:{scaleY:1.42,y:211.9}},{t:this.shape_2,p:{scaleY:1.42,y:211.9}},{t:this.shape_1,p:{scaleY:1.42,y:211.9}},{t:this.shape,p:{scaleY:1.42,y:211.9}},{t:this.text_11,p:{y:-28.1,text:"COMPONENTES DE COMPROMISO",font:"bold 16px 'Arial'",lineHeight:20,lineWidth:547}},{t:this.text_10,p:{x:-191.1,text:"CALIFICACIÓN GENERAL DE LIDERAZGO",font:"bold 13px 'Arial'",textAlign:"",lineHeight:16.6,lineWidth:288,y:291.4}},{t:this.text_9,p:{y:291.4,text:"ALTO / MEDIO / BAJO",lineHeight:14.25,lineWidth:304,x:594.1,font:"bold 11px 'Arial'",textAlign:"center"}},{t:this.text_8,p:{y:18.6,text:"Contribuye más allá de lo descrito en su puesto.",lineWidth:542,lineHeight:13.5}},{t:this.text_7,p:{y:209,text:"Personifica los Principios Culturales de Arca Continental.",lineWidth:547,lineHeight:13.5}},{t:this.text_6,p:{x:-191.1,y:241.3,text:"Demuestra liderazgo de sí mismo y de otros que le permiten ser exitoso en un puesto de mayor responsabilidad (hasta 2 niveles más altos).",lineWidth:421}},{t:this.text_5,p:{y:65.7,text:"Demuestra pasión por la compañía.",lineWidth:547}},{t:this.text_4,p:{y:112.5,text:"Energiza e inspira a otros; la gente quiere trabajar con/para él.",lineHeight:13.5,lineWidth:547}},{t:this.text_3,p:{x:-191.1,y:156.9,text:"Inspira a otros desempeñarse más allá de los límites.",font:"13px 'Arial'",textAlign:"",lineHeight:13.5,lineWidth:547}},{t:this.text_2},{t:this.text_1},{t:this.text}]},1).to({state:[]},1).wait(3));

	// Sólo ventana
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F3F3F3").s().p("EhD5AhnQhoAAhJhKQhKhJABhoMAAAg7iIAAAAQAEhgBFhGQBJhJBoAAMAtqAAAIAAAAIBFAAIAAAAICNAAIAAAAIF8AAIAAAAIBkAAIAAAAMBPXAAAQBogBBJBKQBGBGADBgMAAAA7iQAABohJBJQhJBJhoAAMgyyAAAIAAABg");
	this.shape_130.setTransform(239.4,120);
	this.shape_130._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_130).wait(1).to({_off:false},0).to({_off:true},3).wait(3));

	// ID
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AlMCiQiJhDAAhfQAAheCJhEQCKhDDCAAQDDAACJBDQCKBEAABeQAABfiKBDQiJBEjDAAQjCAAiKhEg");
	this.shape_131.setTransform(-422.1,370.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_131).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.1,347.7,94,46);


(lib.t2mc3_cuadrotransicion_mc3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
		this.parent.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGRWQgCAAgCgOQgDAEgDABQgQgDgNhbQgOhbgKiiQgSkzAAm0QAAk4AKj9QAJj9ARiVQAQiWAVgDQAEABAEAHIFUAAQAEABADAuQADAuAABCIAAdmQAABBgDAuQgDAvgEAAg");
	this.shape.setTransform(437.2,99.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkPRSQgEAAgEgNQgGADgGAAQgggCgbhaQgbhbgUihQgkkygBmzQAAk3AUj8QATj8AhiUQAiiWApgDQAJABAIAHIKtAAQAIABAGAuQAGAtAABCIAAdgQAABBgGAtQgGAvgIAAg");
	this.shape_1.setTransform(412,100.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmYROQgHAAgFgNQgJADgJABQgwgCgphbQgphageiiQg1kvgCmzQABk1Adj7QAdj7AyiTQAxiVA+gEQAOAAANAJIQGAAQAMAAAJAuQAJAtAABBIAAdZQAABBgJAtQgJAvgMAAg");
	this.shape_2.setTransform(386.8,100.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AogRKQgKAAgHgNQgMADgMABQhAgDg2haQg3hZgoihQhHkvgDmxQABk0Aoj6QAmj7BCiSQBDiVBSgDQATAAARAIIVeAAQARAAAMAuQAMAuAABBIAAdSQAABAgMAtQgMAvgRAAg");
	this.shape_3.setTransform(361.5,101);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqpRGQgMAAgKgNQgPADgPABQhPgDhEhZQhEhagyigQhakugDmvQABkzAxj5QAxj6BTiSQBTiUBmgDQAYAAAVAIIa3AAQAVAAAQAuQAPAtAABBIAAdLQAABAgPAtQgQAvgVAAg");
	this.shape_4.setTransform(336.3,101.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AsyRCQgOAAgMgNQgSADgSABQhegChShaQhShZg9ifQhrktgEmuQABkyA7j4QA7j5BjiSQBkiTB7gDQAcAAAaAIMAgQAAAQAZAAATAuQASAtAABBIAAdEQAABAgSAtQgTAugZAAg");
	this.shape_5.setTransform(311,101.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Au7Q+QgQAAgOgNQgVAEgVAAQhugChghZQhghZhGifQh+ksgEmsQACkxBFj3QBDj4B1iRQB0iTCQgDQAhAAAeAIMAloAAAQAeAAAWAuQAUAsABBBIAAc+QgBA/gUAtQgWAugeAAg");
	this.shape_6.setTransform(285.8,102);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AxEQ7QgSAAgQgOQgYADgYABQh+gChuhZQhthZhRieQiPkrgFmqQACkwBPj3QBOj2CEiRQCFiTClgDQAlABAjAIMArBAAAQAiAAAYAtQAZAtAABAIAAc3QAABAgZAsQgYAugiABg");
	this.shape_7.setTransform(260.6,102.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AzNQ3QgVAAgRgNQgbADgbAAQiOgCh8hZQh6hXhbieQihkqgGmpQACkuBZj2QBYj2CViQQCViSC5gEQAqABAnAIMAwaAAAQAnAAAbAtQAcAtAABAIAAcwQAAA/gcAtQgbAugnAAg");
	this.shape_8.setTransform(235.3,102.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A1WQzQgXAAgUgNQgdADgeABQifgDiIhYQiJhYhkidQi0kpgGmnQACktBjj1QBhj1CmiQQCniRDNgEQAuABAsAIMA1zAAAQArAAAeAtQAeAsABBAIAAcqQgBA/geAsQgeAugrAAg");
	this.shape_9.setTransform(210.1,103.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A3fQvQgZAAgWgNQggADghABQiugCiXhZQiWhXhvidQjFkngHmmQACksBtj0QBsj0C2iPQC3iRDigEQAyABAxAIMA7MAAAQAuAAAiAtQAiAsAAA/IAAckQAAA+giAsQgiAuguAAg");
	this.shape_10.setTransform(184.9,103.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A5nQrQgcAAgYgNQgjADglABQi9gCilhYQijhXh5icQjYkngGmkQACkrB2jzQB1jzDHiPQDHiRD3gDQA4ABA1AHMBAkAAAQAzAAAlAuQAkArAABAIAAccQAAA+gkAsQglAugzAAg");
	this.shape_11.setTransform(159.6,103.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A7wQnQgeAAgagNQgmADgoABQjNgCiyhYQixhWiEicQjpklgHmjQACkqCAjyQB/jzDYiOQDYiQELgDQA8AAA5AIMBF9AAAQA4AAAoAtQAnAsAAA/IAAcWQAAA+gnAsQgoAtg4AAg");
	this.shape_12.setTransform(134.4,104.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A95QjQghAAgbgMQgqADgqAAQjdgCjAhYQi+hWiOibQj7kkgImhQACkpCKjxQCJjyDpiOQDoiPEfgDQBBAAA+AIMBLWAAAQA8AAArAtQAqAsAAA+IAAcQQAAA9gqArQgrAug8AAg");
	this.shape_13.setTransform(109.2,104.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EggBAQfQgkAAgdgNQgsAEguAAQjtgCjNhXQjNhWiYibQkNkigImgQADkoCUjwQCSjxD5iNQD5iPE1gDQBFAABCAIMBQuAAAQBBAAAtAsQAuAsAAA/IAAcIQAAA9guAsQgtAthBAAg");
	this.shape_14.setTransform(83.9,104.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// Contenidos
	this.instance = new lib.verde1();
	this.instance.parent = this;
	this.instance.setTransform(126.8,120,0.974,0.942,0,0,0,379.6,127.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.9,-11.1,739,222);


(lib.T1_Ventana_con_sus_contenidos_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(4);
			c.currentTarget.removeAllEventListeners();
		});
		
		raiz.m2mc1_Cerrar.visible=false;
		raiz.fondoCerrar.visible=false;
	}
	this.frame_2 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(5);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		
		raiz.m2mc1_Cerrar.visible=false;
		raiz.fondoCerrar.visible=false;
	}
	this.frame_3 = function() {
		this.stop();
		this.cuadrotransicion.gotoAndPlay(1);
		var raiz = this;
		raiz.m2mc1_Cerrar.addEventListener("click", function (c) {
			raiz.gotoAndStop(6);
			c.currentTarget.removeAllEventListeners();
		});
		raiz.m2mc1_Cerrar.addEventListener("rollover", function (c) {
			c.currentTarget.gotoAndStop(1);
		});
		raiz.m2mc1_Cerrar.addEventListener("rollout", function (c) {
			c.currentTarget.gotoAndStop(0);
		});
		
		raiz.m2mc1_Cerrar.visible=false;
		raiz.fondoCerrar.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(4));

	// parche, btn invisible y btn cerrar
	this.m2mc1_Cerrar = new lib.btn_cerrar_v1();
	this.m2mc1_Cerrar.parent = this;
	this.m2mc1_Cerrar.setTransform(673.3,23.1,1.038,1.041);
	new cjs.ButtonHelper(this.m2mc1_Cerrar, 0, 1, 2, false, new lib.btn_cerrar_v1(), 3);

	this.fondoCerrar = new lib.fondobtncerrar();
	this.fondoCerrar.parent = this;
	this.fondoCerrar.setTransform(673.6,22.8,1,1,0,0,0,16.8,16.8);

	this.botoninvisible = new lib.T1_Boton_invisible2();
	this.botoninvisible.parent = this;
	this.botoninvisible.setTransform(237.5,114.5,0.979,1.011,0,0,0,480.7,227.1);
	new cjs.ButtonHelper(this.botoninvisible, 0, 1, 2, false, new lib.T1_Boton_invisible2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.botoninvisible},{t:this.fondoCerrar},{t:this.m2mc1_Cerrar}]},1).to({state:[]},3).wait(3));

	// bolita  hacer invisible icono
	this.instance = new lib.iconoinvisble();
	this.instance.parent = this;
	this.instance.setTransform(-18.7,-8.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},3).wait(3));

	// Transicion
	this.cuadrotransicion = new lib.t2mc3_cuadrotransicion_mc3();
	this.cuadrotransicion.parent = this;
	this.cuadrotransicion.setTransform(577.2,207,1.024,1.074,0,0,0,309.8,176);

	this.cuadrotransicion3 = new lib.t2mc3_cuadrotransicion_mc3copy3();
	this.cuadrotransicion3.parent = this;
	this.cuadrotransicion3.setTransform(574.2,207,1.024,1.074,0,0,0,309.8,176);

	this.cuadrotransicion3_1 = new lib.t2mc3_cuadrotransicion_mc3copy2();
	this.cuadrotransicion3_1.parent = this;
	this.cuadrotransicion3_1.setTransform(568.8,197.1,0.997,1.015,0,0,0,309.9,177);

	this.cuadrotransicion3_2 = new lib.t2mc3_cuadrotransicion_mc3copy();
	this.cuadrotransicion3_2.parent = this;
	this.cuadrotransicion3_2.setTransform(578.2,209,1.024,1.074,0,0,0,309.8,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cuadrotransicion}]},1).to({state:[{t:this.cuadrotransicion3}]},3).to({state:[{t:this.cuadrotransicion3_1}]},1).to({state:[{t:this.cuadrotransicion3_2}]},1).wait(1));

	// Contenidos
	this.text = new cjs.Text("Colaborador con la capacidad (habilidad, aspiración y compromiso) necesaria para asumir un puesto de mayor responsabilidad en el mediano o largo plazo (2 o más niveles organizacionales) y desempeñarlo de forma exitosa.", "18px 'Arial'", "#333333");
	this.text.lineHeight = 21;
	this.text.lineWidth = 337;
	this.text.parent = this;
	this.text.setTransform(88.9,73.1,0.98,0.943);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(568.9,156.8);

	this.text_1 = new cjs.Text("Alto Potencial", "bold 22px 'Arial'", "#333333");
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 288;
	this.text_1.parent = this;
	this.text_1.setTransform(484.8,37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BAD193").s().p("AyRNUIAA6nMAkjAAAIAAYJQAABBguAuQgvAvhBAAg");
	this.shape_1.setTransform(557.3,157.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#97AF68").s().p("AyRD+IAAn7MAiFAAAQBBAAAvAvQAuAuAABCIAAFcg");
	this.shape_2.setTransform(557.3,47.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFE1B5").s().p("EgpDARSQhCAAgugvQguguAAhBIAA9mQAAhCAuguQAugvBCAAMBSHAAAQBBAAAuAvQAvAuAABCIAAdmQAABBgvAuQguAvhBAAg");
	this.shape_3.setTransform(395.7,132.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFE1B5").s().p("AnOP0QjPhbibiiQkQkzgJm1QADk3CWj9QCUj9D9iVQD9iWE4gDQDyABDPBcQDRBcCaChQEPEzAKG1QgDE3iWD9QiVD9j+CWQj8CVk4ADQjxgCjQhbg");
	this.shape_4.setTransform(118.7,131.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AKkJOQg4gBgygVQgxgVglglQglglgUgvQgVgxABg1QABhKApg9IiDCZQAFAPAAAPQgBAcgSATQARAAAIAIQAFAFgBAIQgDASgnAMIgPAEIgBAIQAAAGgDADQgDAGgGAAQgIABgFgGQgEgEgBgFIgQAAIgKgXIgaAAQgRAAgGADQgjA3g6AhQg8AihFADQg3ADg0gSQgxgSgnghQgogigWguQgYgugCg1QgCg0ATgwQATgvAkglQAkgmAwgVQAygWA3gDQAtgCAqAMQAqALAkAYQAFgDAEACIAIADIARgKQAOgKACgIQABgEgDgDQgPgVgLgUQgTgkgKgsQgWgCgfgUQgXgPACgJQACgIASgFQgHgKgCgQQgDgaAPgcQAIgQALgQIgNgNQAOgUAQgQQgIgNgCgSQgCgUAJgQIAEgEIAEgFQACgCADgcQACgXAKgFQACgJAHgHIANgLIAJgIIAIgIIAPgHQAJgDADgFQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABgEIAOgFQAJgEAHAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgBAEACABQADgBAEgDQAFgFADAAQACAAAFAGQAEADAFgBIAAgLQAAgHACgFQAGgGAJACQALAEAFAAQAFABAKgCQAJgCAEAAQADAHARAFQAPAFACAJQAJAIAQAHQAeANAbgCIgCAUQArgFAVAKIAGABIAPAQIACgHIgBACQgHgRgBgZQgDgyAcgrQAegtArgNQAfgJAdAJQAOADAZAWIADACIAOACIAFAAIgIAGIAAAAIAKAKQAMAFANABIALABIgQANIAHAGQAMAGAPACIANABIgRANQAMALAQAHIAGAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQgFAHgwAQIgDALIghArIgCADIAAADQAAAAAAABQABAAAAAAQABAAAAgBQAAAAABgBIAAgDIgBgCIACADQABABAAABQAAAAAAABQABABAAAAQgBABAAAAIgEAGIgEAEIgEgCIgBABQgBARgIAZIgCAEQgEAEgFAAQgEgBgFgDQgEgDgBABIgHALIgBABQAAADgFACIgCABIgCACIgDACQgDADgFACIAAAAIgBACIgFAJQgEAIgEABQgGACgEgBQgGAAgGgFQgFgEgPgTQgOgQgHADQgDABgFAIQA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");
	this.shape_5.setTransform(554.8,152.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CFE1B5").s().p("AnOP0QjPhbibiiQkQkzgKm1QADk3CWj9QCWj9D8iVQD9iWE4gDQDyABDPBcQDQBcCbChQEPEzAKG1QgDE3iWD9QiVD9j+CWQj8CVk4ADQjwgCjRhbg");
	this.shape_6.setTransform(120.7,130.5);

	this.instance_1 = new lib.verde1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(390.2,148.4,1,1,0,0,0,379.4,127.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:395.7,y:132.5}},{t:this.shape_2,p:{x:557.3,y:47.3}},{t:this.shape_1,p:{x:557.3,y:157.9}},{t:this.text_1,p:{x:484.8,text:"Alto Potencial"}},{t:this.shape},{t:this.text,p:{scaleX:0.98,scaleY:0.943,x:88.9,y:73.1,text:"Colaborador con la capacidad (habilidad, aspiración y compromiso) necesaria para asumir un puesto de mayor responsabilidad en el mediano o largo plazo (2 o más niveles organizacionales) y desempeñarlo de forma exitosa.",lineWidth:337}}]},1).to({state:[{t:this.shape_6},{t:this.shape_3,p:{x:397.7,y:131.4}},{t:this.shape_2,p:{x:559.3,y:46.2}},{t:this.shape_1,p:{x:559.3,y:156.8}},{t:this.shape_5},{t:this.text_1,p:{x:479.5,text:"Potencial Medio"}},{t:this.text,p:{scaleX:0.979,scaleY:0.955,x:87.7,y:74.5,text:"Colaborador con la aspiración y compromiso adecuados para tomar un puesto de mayor responsabilidad en el corto o mediano plazo (1 nivel organizacional superior) y desempeñarse exitosamente.",lineWidth:325}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(3));

	// ID
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606060").s().p("AiwCpQhJhFAAhkQAAhjBJhGQBJhGBnAAQBoAABIBGQBKBGAABjQAABkhKBFQhIBHhoAAQhnAAhJhHg");
	this.shape_7.setTransform(-372.1,352.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-397.1,328.1,50,48);


(lib.bicimedio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Potencial Medio", "bold 16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(56.7,2);

	this.instance = new lib.M03_TMR_BICI2();
	this.instance.parent = this;
	this.instance.setTransform(130.7,53.6,0.159,0.159,0,0,0,275.6,170.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D9DD").s().p("AlPCqQgXgagSgdQB5CiDVAIQCvgFB1h0QB0h2AFitQgChbghhOQAoBSABBkQgFCuh0B0Qh0B1iwAFQi1gFh2h7g");
	this.shape.setTransform(137.1,65.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F7F7F8","#FFFFFF","#FFFFFF"],[0,0.706,0.714],-34.7,-39.4,0,-34.7,-39.4,119.5).s().p("AkvEYQhmhxgCihQAEivB0h1QB1h0CwgFQC0AFB2B6QBkByAFChQgFCvh1B1Qh0B0ivAFQi1gFh2h7g");
	this.shape_1.setTransform(133.9,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkkElQh0h1gFiwQAFivB0h1QB1h0CvgFQCwAFB1B0QB0B1AFCvQgFCwh0B1Qh1B0iwAFQivgFh1h0g");
	this.shape_2.setTransform(133.4,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFE1B5").s().p("AmNFvQiEiVgFjTQAGjlCaiYQCXiZDlgGQDuAGCbChQCDCUAFDUQgGDliZCYQiYCZjnAGQjtgGiZihg");
	this.shape_3.setTransform(134,54.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFE1B5").s().p("AheAAQAIhXBWgIQBXAIAIBXQgIBXhXAJQhWgJgIhXg");
	this.shape_4.setTransform(218,57.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFE1B5").s().p("AkZAXIAAgtIIzAAIAAAtg");
	this.shape_5.setTransform(189.8,57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227.5,108);


(lib.bicibasico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Alto\nPotencial", "bold 16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(39.2,9.9);

	this.instance = new lib.M03_TMR_BICI3();
	this.instance.parent = this;
	this.instance.setTransform(138.5,52.4,0.162,0.162,0,0,0,198.5,217.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D9DD").s().p("AlPCqQgXgagSgdQB5CjDVAHQCvgEB0h1QB1h2AFiuQgBhagjhOQApBTABBjQgFCuh0B0Qh1B1ivAEQi1gEh2h7g");
	this.shape.setTransform(138.4,64.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#F7F7F8","#FFFFFF","#FFFFFF"],[0,0.706,0.714],-34.7,-39.4,0,-34.7,-39.4,119.5).s().p("AkvEYQhlhxgEihQAFivB1h1QB0h0CvgEQC1AEB2B7QBkBxAEChQgECvh0B1Qh1B0iwAEQi0gEh2h7g");
	this.shape_1.setTransform(135.2,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkkElQh0h1gFiwQAFivB0h1QB1h0CvgFQCwAFB1B0QB0B1AFCvQgFCwh0B1Qh1B0iwAFQivgFh1h0g");
	this.shape_2.setTransform(134.7,52.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFE1B5").s().p("AmOFvQiDiVgFjTQAGjlCZiYQCYiZDlgGQDuAGCaChQCECVAFDTQgGDliaCYQiXCZjnAGQjtgGiaihg");
	this.shape_3.setTransform(135.3,53.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFE1B5").s().p("AhDBDQgcgdAAgmQAAgmAcgdQAdgcAmAAQAlAAAeAcQAdAdAAAmQAAAmgdAdQgeAdglAAQgmAAgdgdg");
	this.shape_4.setTransform(194.5,112.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFE1B5").s().p("AjXi3IAgggIGPGOIghAhg");
	this.shape_5.setTransform(174.5,92.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,0,213.7,122.5);


(lib.bicialto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Potencial Básico", "bold 16px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 97;
	this.text.parent = this;
	this.text.setTransform(50.6,27.3);

	this.instance = new lib.M03_TMR_BICI1();
	this.instance.parent = this;
	this.instance.setTransform(146,66.6,0.138,0.138,0,0,0,197.7,219.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFE1B5").s().p("AhDBDQgcgeAAglQAAgmAcgdQAdgcAmAAQAlAAAdAcQAeAdAAAmQAAAlgeAeQgdAdglAAQgmAAgdgdg");
	this.shape.setTransform(204.3,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D9DD").s().p("AlPCqQgXgagSgdQB5CjDVAHQCvgEB1h1QB0h2AFiuQgChaghhOQAoBTABBjQgFCuh0B0Qh1B1ivAEQi1gEh2h7g");
	this.shape_1.setTransform(147.8,79.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#F7F7F8","#FFFFFF","#FFFFFF"],[0,0.706,0.714],-34.7,-39.4,0,-34.7,-39.4,119.5).s().p("AkwEYQhkhxgDihQAEivB0h1QB1h0CvgFQC1AFB2B6QBkByAEChQgECvh1B0Qh0B1iwAFQi0gFh3h7g");
	this.shape_2.setTransform(144.9,68.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkkElQh0h1gFiwQAFivB0h1QB0h0CwgFQCxAFBzB0QB1B1AFCvQgFCwh1B1QhzB0ixAFQiwgFh0h0g");
	this.shape_3.setTransform(144.3,68);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFE1B5").s().p("AmNFvQiEiVgFjTQAGjlCZiYQCYiZDlgGQDuAGCaChQCECVAFDSQgGDmiZCYQiYCZjnAGQjtgGiZihg");
	this.shape_4.setTransform(144.8,68.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFE1B5").s().p("AjXC4IGNmPIAiAgImPGPg");
	this.shape_5.setTransform(184.5,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.9,122);


(lib.AS_LG_MOV_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.298)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_15.setTransform(28.9,33.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.239)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_16.setTransform(28.9,33.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.18)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_17.setTransform(28.9,33.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.118)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_18.setTransform(28.9,33.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.059)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_19.setTransform(28.9,33.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_20.setTransform(28.9,33.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.039)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_21.setTransform(28.9,33.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.075)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_22.setTransform(28.9,33.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.114)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_23.setTransform(28.9,33.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.149)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_24.setTransform(28.9,33.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.188)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_25.setTransform(28.9,33.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.224)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_26.setTransform(28.9,33.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.263)").s().p("AieF5QhKgfg4g5Qg4g5gghJQgghMAAhTQAAhSAghNQAghJA4g4QA4g5BKgfQBMggBSAAQBUAABLAgQBKAfA5A5QA4A4AfBJQAgBNAABSQAABTggBMQgfBJg4A5Qg5A5hKAfQhLAghUAAQhSAAhMggg");
	this.shape_27.setTransform(28.9,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_15}]},1).wait(12));

	// Layer 1
	this.instance_1 = new lib.AS_LG_153_1("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.9,14.9,1,1,0,0,0,23.9,23.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DC6842").s().p("AiEE7Qg9gagwgvQgvgvgag+Qgbg/AAhGQAAhFAbg/QAag+AvgvQAwgvA9gaQBAgbBEAAQBGAAA/AbQA+AaAvAvQAwAvAaA+QAaA/AABFQAABGgaA/QgaA+gwAvQgvAvg+AaQg/AbhGAAQhEAAhAgbg");
	this.shape_28.setTransform(28.8,32.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFEFEF").s().p("AmdPUQi/hRiTiTQiTiThRi/QhUjFAAjZQAAjXBUjGQBRi/CTiTQCTiTC/hRQDGhUDXABQDYgBDGBUQC/BRCTCTQCTCTBRC/QBTDGABDXQgBDZhTDFQhRC/iTCTQiTCTi/BRQjGBUjYgBQjXABjGhUg");
	this.shape_29.setTransform(28.9,33.1,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.instance_1}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-7.7,81.8,81.8);


(lib.Mod3T2mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_161 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(161).call(this.frame_161).wait(1));

	// Layer 2
	this.instance = new lib.estrategiadenegocio("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(858.1,-46.9,0.921,0.921,56.9,0,0,165,136.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(103).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,rotation:0,x:658.2,y:-47,alpha:1},14,cjs.Ease.get(1)).wait(45));

	// caja larga
	this.instance_1 = new lib.cajagdemc1t2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(574.5,-75.3,0.454,1,0,0,0,363.4,93);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(117).to({_off:false},0).to({scaleX:1,x:363.5,alpha:1},15,cjs.Ease.get(1)).wait(30));

	// caja gris
	this.instance_2 = new lib.cajagrismc1t2m2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,-15.4,1,1,0,0,0,220.8,150.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134).to({_off:false},0).to({y:79.6,alpha:1},15,cjs.Ease.get(1)).wait(13));

	// ID
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ah0B4QgwgxAAhHQAAhGAwgxQAwgyBEAAQBFAAAwAyQAwAxAABGQAABHgwAxQgwAyhFAAQhEAAgwgyg");
	this.shape.setTransform(-191.3,293.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.8,276.4,33,34);


(lib.mc_infoRecuerda02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// icono
	this.instance = new lib.AS_LG_MOV_10();
	this.instance.parent = this;
	this.instance.setTransform(-154.4,11.9,1,1,0,0,0,30,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-311.1,y:-80.1},26,cjs.Ease.get(1)).wait(3));

	// Layer 3
	this.instance_1 = new lib.barrabcdespliega("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-484.1,-54.6,0.027,2.591,0,0,0,389.1,39.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0},26,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_2 = new lib.info02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,-62);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-47.3,y:-13,alpha:1},28,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-466.2,-120.9,351.5,177);


(lib.mc_infoRecuerda01t3m03mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.stop();
		parent.habilitarSiguiente();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Layer 2
	this.instance = new lib.AS_LG_MOV_10_1();
	this.instance.parent = this;
	this.instance.setTransform(-67.2,-34.7,1,1,0,0,0,30,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-419},23,cjs.Ease.get(1)).wait(4));

	// Layer 3
	this.instance_1 = new lib.barrabcdespliega_1("synched",0);
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
p.nominalBounds = new cjs.Rectangle(-452.2,-72.4,663.3,83.4);


(lib.instruccionesmc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(1));

	// flecha 
	this.instance = new lib.flechainstrucciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.4,13.9);
	this.instance.alpha = 0.07;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:-9.5,y:13.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(48));

	// circulo1
	this.instance_1 = new lib.circulo1instrucciones("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.9,15.4,0.215,0.215,0,0,0,104.4,10.3);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:105.2,regY:10.2,scaleX:1,scaleY:1,x:-8.1,alpha:1},5,cjs.Ease.get(1)).to({_off:true},20).wait(48));

	// circulo2
	this.instance_2 = new lib.circulo2instrucciones("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,14.3,0.368,0.368,0,0,0,14.3,14.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:14.2,regY:14.2,scaleX:1.26,scaleY:1.26},6,cjs.Ease.get(1)).to({regX:14.1,scaleX:1.65,scaleY:1.65,x:-8.8,y:14.4,alpha:0},4,cjs.Ease.get(1)).to({_off:true},10).wait(48));

	// circulo3
	this.instance_3 = new lib.circulo2instrucciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.8,14.2,1,1,0,0,0,14.2,14.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},14).wait(48));

	// flecha mueve
	this.instance_4 = new lib.flechamueve("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8.7,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(5).to({x:8},0).to({x:406.3},37).wait(6));

	// tapa circulo
	this.instance_5 = new lib.tapakakigeneral("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(3089.6,91.6,29.217,2.053,0,0,0,106.8,44.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({regX:107.1,scaleX:25.01,x:3068.5},42,cjs.Ease.get(1)).wait(1));

	// Instruccion
	this.text = new cjs.Text("Haz clic sobre cada banderilla para conocer más.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(-4.4,4.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(43));

	// ID
	this.text_1 = new cjs.Text("esta es la instruccion", "18px 'Arial'", "#606060");
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(977.2,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-6.6,1089.8,47.4);


(lib.instrucciones1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_72 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(1));

	// flecha 
	this.instance = new lib.flechainstrucciones("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-7.4,13.9);
	this.instance.alpha = 0.07;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:-9.5,y:13.3,alpha:1},8,cjs.Ease.get(1)).to({_off:true},1).wait(48));

	// circulo1
	this.instance_1 = new lib.circulo1instrucciones("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.9,15.4,0.215,0.215,0,0,0,104.4,10.3);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:105.2,regY:10.2,scaleX:1,scaleY:1,x:-8.1,alpha:1},5,cjs.Ease.get(1)).to({_off:true},20).wait(48));

	// circulo2
	this.instance_2 = new lib.circulo2instrucciones("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.7,14.3,0.368,0.368,0,0,0,14.3,14.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:14.2,regY:14.2,scaleX:1.26,scaleY:1.26},6,cjs.Ease.get(1)).to({regX:14.1,scaleX:1.65,scaleY:1.65,x:-8.8,y:14.4,alpha:0},4,cjs.Ease.get(1)).to({_off:true},10).wait(48));

	// circulo3
	this.instance_3 = new lib.circulo2instrucciones("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.8,14.2,1,1,0,0,0,14.2,14.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({_off:true},14).wait(48));

	// flecha mueve
	this.instance_4 = new lib.flechamueve("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-8.7,14.3,1,1,0,0,0,23.4,23.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(5).to({x:8},0).to({x:339.3},37).wait(6));

	// tapa circulo
	this.instance_5 = new lib.tapakakigeneral("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(3089.6,91.6,29.217,2.053,0,0,0,106.8,44.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({scaleX:2.35,x:580.5},42,cjs.Ease.get(1)).wait(1));

	// Instruccion
	this.text = new cjs.Text("Haz clic en cada potencial para conocer más.", "18px 'Arial'", "#606060");
	this.text.lineHeight = 23;
	this.text.lineWidth = 427;
	this.text.parent = this;
	this.text.setTransform(-39.6,4.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(30).to({_off:false},0).wait(43));

	// ID
	this.text_1 = new cjs.Text("esta es la instruccion", "18px 'Arial'", "#606060");
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(476,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-6.6,588.6,47.4);


(lib.T3_btn_mc3MOD3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// visitado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B31F").s().p("AgKCfQgCAAgCgGIgBgFIgRhTQgEgPgBgLIAAgUIABgMIABgFQADgJACABQADABACAFIACAFIANBAIApjSQABgMACgEQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIABACIABANIgBAMIgBAFIgoEUQgEAJgCAAIgBAAg");
	this.shape.setTransform(84.3,43.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_lineaMOD3a();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_lineaMOD3a();
	this.activo.parent = this;
	this.activo.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLASMOD3a();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(64,12.5,1,1,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T3_btn_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// visitado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B31F").s().p("AgKBTQgCAAgCgDIgBgDIgRgrQgEgIgBgFIAAgLIABgGIABgDQADgEACABQADAAACACIACADIANAhIAphsQABgHACgCIADAAIABABIABAHIgBAGIgBACIgoCPQgEAFgCAAIgBAAg");
	this.shape.setTransform(87.4,79.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// señala el boton que se le debe dar clic
	this.resalte = new lib.T3_Señalar_btn_mc_1_linea();
	this.resalte.parent = this;
	this.resalte.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.resalte).wait(2));

	// Señala al boton activo
	this.activo = new lib.T3_btn_activo_1_linea();
	this.activo.parent = this;
	this.activo.setTransform(91.3,13.8,1,1,0,0,0,91.3,13.8);

	this.timeline.addTween(cjs.Tween.get(this.activo).wait(2));

	// boton Up y Over (meterse al mc)
	this.rollo_mc = new lib.T3_btn_mc_Up_y_Over_QUITARLINEASAMARILLAS();
	this.rollo_mc.parent = this;
	this.rollo_mc.setTransform(64,12.5,1,1,0,0,0,64,12.5);

	this.timeline.addTween(cjs.Tween.get(this.rollo_mc).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,96);


(lib.T1_MC_con_todos_los_botones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 3;
		var root = this;
		quitaActivos();
		var Secuencial = true;
		if (parent.IDActual < parent.ULTIMO || parent.backdoor) {
			console.log("es una pagina ya vista, contenido desbloqueado");
			Secuencial = false;
		}
		//Para hacer que los botones sean secuenciales:
		if (Secuencial) {
			EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position < 1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
				//parent.siguiente_verde();
				parent.final_tema();
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T1_Ventana_con_sus_contenidos_MC();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b3 = new lib.T3_btn_mc3();
	this.b3.parent = this;
	this.b3.setTransform(153.3,260.3,2.493,1.24,0,0,0,64,12.8);

	this.b2 = new lib.T3_btn_mc3();
	this.b2.parent = this;
	this.b2.setTransform(108.2,91.8,2.493,1.24,0,0,0,64,12.8);

	this.b1 = new lib.T3_btn_mc3();
	this.b1.parent = this;
	this.b1.setTransform(162.7,-66.2,2.493,1.24,0,0,0,64,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.4,-82,427,465.9);


(lib.mod2t2mc3_con_todos_los_botones = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*
		nota importante:
		Para el correcto funcionamiento del template tomar los dos frames 
		del Timeline, no solo uno
		*/
		
		this.stop();
		this.stage.enableMouseOver();
		//cambiar aqui por el numero de botones totales:
		var NumeroBotones = 3;
		var root = this; 
		quitaActivos();
		var Secuencial = true;
		if (parent.pagActual < parent.Pag[parent.IDActual] || parent.backdoor) {
			console.log("es una pagina ya vista, contenido desbloqueado");
			Secuencial = false;
		}
		//Para hacer que los botones sean secuenciales:
		if (Secuencial) {
			EnSecuencia();
		}
		iniciar();
		//Esta linea lleva directamente a la info del boton 1, y suma la visita
		function EnSecuencia() {
			Secuencial = true;
			for (var i = 2; i <= NumeroBotones; i++) {
				root["b" + i].mouseEnabled = false;
			}
			root.b1.resalte.alpha = 100;
		}
		
		function Resaltes(n) {
			console.log(n);
			SacaResaltes(n);
		}
		
		function SacaResaltes(n) {
			if (n < NumeroBotones && root["b" + (n + 1)].timeline.position <1) {
				root["b" + (n + 1)].resalte.alpha = 100;
				console.log("saca resalte al siguiente");
			}
			console.log("saca resaltes al actual");
			root["b" + n].resalte.alpha = 0;
		}
		
		function TodasVistas() {
			var finalizo = true;
			for (var i = 1; i <= NumeroBotones; i++) {
				if (!root["b" + i].vista) {
					finalizo = false
					break;
				}
			}
			// Qué hacer cuando ya se ve todo el contenido:
			if (finalizo) {
				console.log(" Todo visitado ");
		parent.habilitarSiguiente();
		
		
			}
		}
		
		function quitaActivos() {
			console.log("quita activos");
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].activo.alpha = 0;
			}
		}
		
		function iniciar() {
			///inicia el FOR magico
			for (var i = 1; i <= NumeroBotones; i++) {
				root["b" + i].n = i;
				root['b' + i].cursor = "pointer";
				root["b" + i].resalte.alpha = 0;
				root["b" + i].vista = false;
				//Comportamiento del boton (clic, rollover, rollout) 
				root["b" + i].addEventListener("mousedown", click);
				root["b" + i].addEventListener("pressmove", click);
				root["b" + i].addEventListener("rollover", over);
				root["b" + i].addEventListener("rollout", out);
			}
			//firstClick(root.b1);
		}
		function click(c) {
			c.currentTarget.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(c.currentTarget.n);
			c.currentTarget.vista = true;
			quitaActivos();
			c.currentTarget.activo.alpha = 100;
			if ((c.currentTarget.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (c.currentTarget.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				Resaltes(c.currentTarget.n);
			}
			TodasVistas();
		}
		
		function firstClick(mc) {
			mc.gotoAndStop(1);
			root.mc_contenido.gotoAndStop(mc.n);
			mc.vista = true;
			quitaActivos();
			mc.activo.alpha = 100;
			if ((mc.n + 1) <= NumeroBotones) {
				console.log("habilita siguiente boton");
				root["b" + (mc.n + 1)].mouseEnabled = true;
			}
			if (Secuencial) {
				console.log("entro a secuencial");
				Resaltes(mc.n);
			}
		}
		
		function over(c) {
			c.currentTarget.rollo_mc.gotoAndStop(1);
		}
		
		function out(c) {
			c.currentTarget.rollo_mc.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 3. Ventana con contenidos
	this.mc_contenido = new lib.T2Mod3_Ventana_con_sus_contenidos_MC3();
	this.mc_contenido.parent = this;
	this.mc_contenido.setTransform(197.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_contenido).wait(2));

	// 1. Botones
	this.b3 = new lib.T3_btn_mc3MOD3a();
	this.b3.parent = this;
	this.b3.setTransform(810.6,258.9,2.704,0.532,0,0,0,64,12.8);

	this.b2 = new lib.T3_btn_mc3MOD3a();
	this.b2.parent = this;
	this.b2.setTransform(810.6,161.9,2.704,0.532,0,0,0,64,12.8);

	this.b1 = new lib.T3_btn_mc3MOD3a();
	this.b1.parent = this;
	this.b1.setTransform(810.6,52.5,2.704,0.532,0,0,0,64,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.4,45.7,1152.3,355.8);


(lib.Mod3mc4t2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_130 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(130).call(this.frame_130).wait(1));

	// txt tit
	this.text = new cjs.Text("/ ¿Cómo valorar el potencial de nuestros colaboradores?", "19px 'Arial'", "#333333");
	this.text.lineHeight = 22;
	this.text.lineWidth = 615;
	this.text.parent = this;
	this.text.setTransform(227.5,-31.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(131));

	// escala valoracion txt1
	this.instance = new lib.escalavaloraciontxt1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(687.4,39.3,1,1,0,0,0,218.3,42.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:70.8,alpha:1},18,cjs.Ease.get(1)).wait(113));

	// botones y ventanas  menu
	this.instance_1 = new lib.T1_MC_con_todos_los_botones();
	this.instance_1.parent = this;
	this.instance_1.setTransform(269.9,338.1,1,1,0,0,0,249.9,249.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).wait(43));

	// instruccion
	this.instance_2 = new lib.instrucciones1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(629.3,236.2,1,1,0,0,0,95.7,21.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).wait(22));

	// bici basico
	this.instance_3 = new lib.bicibasico("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.5,127.5,0.225,0.225,0,0,0,102,61.2);
	this.instance_3.alpha = 0.18;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({regX:102.1,scaleX:1.2,scaleY:1.2,x:128.2,y:69.2,alpha:1},14,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:150.2,y:79.7},3,cjs.Ease.get(1)).wait(59));

	// bici medio
	this.instance_4 = new lib.bicimedio("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(169,229.1,0.269,0.269,0,0,0,113.8,54);
	this.instance_4.alpha = 0.18;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(72).to({_off:false},0).to({regY:54.1,scaleX:1.2,scaleY:1.2,x:98,y:227.1,alpha:1},12,cjs.Ease.get(1)).to({regY:54,scaleX:1,scaleY:1,y:227},4).wait(43));

	// bici alto
	this.instance_5 = new lib.bicialto("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(226.6,333,0.24,0.24,0,0,0,113.7,54);
	this.instance_5.alpha = 0.07;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).to({regX:113.8,regY:54.1,scaleX:1.2,scaleY:1.2,x:126.1,y:373.8,alpha:1},12,cjs.Ease.get(1)).to({regY:54,scaleX:1,scaleY:1,x:150.5,y:374},4,cjs.Ease.get(1)).wait(27));

	// pleca valoracion lado
	this.instance_6 = new lib.plecavaloracionlado("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(338.7,227.7,1,1,110,0,0,139.1,98.5);
	this.instance_6.alpha = 0.18;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({rotation:0,y:227.6,alpha:1},14,cjs.Ease.get(1)).wait(83));

	// circulo escala valoracion
	this.instance_7 = new lib.circuloescalavaloracion("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(339.1,227.7,0.254,0.254,0,0,0,139.8,139.8);
	this.instance_7.alpha = 0.18;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,alpha:1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6).wait(97));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CDQgyg3AAhMQAAhMAyg1QAzg2BIAAQBIAAA0A2QAzA1AABMQAABMgzA3Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,-33.5,995.8,498.2);


(lib.Mod3t2mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(85).call(this.frame_85).wait(1));

	// icono proceso valoracion mod3
	this.instance = new lib.iconoprocesovaloracionmod3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(722.8,121,0.248,0.248,0,0,0,103.8,103.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1.07,scaleY:1.07,x:721.9,y:111.1,alpha:1},14,cjs.Ease.get(1)).to({regY:103.9,scaleX:0.9,scaleY:0.9},3).wait(50));

	// pleca1 mod3
	this.instance_1 = new lib.pleca1mod3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.2,218.8,1,1,0,0,0,156.8,148.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:259.2,alpha:1},13,cjs.Ease.get(1)).wait(73));

	// Layer 6
	this.instance_2 = new lib.plecapreviamod3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(911.9,231.8);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.pleca2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(411.9,231.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},13).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:411.9,alpha:1},13,cjs.Ease.get(1)).wait(73));

	// m2t1mc1 txt1
	this.instance_4 = new lib.m2t1mc1txt1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(175.6,78.4,1,1,0,0,0,187,42.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({y:58.4,alpha:1},16,cjs.Ease.get(1)).wait(56));

	// TIP
	this.info = new lib.mc_infoRecuerda01t3m03mc2();
	this.info.parent = this;
	this.info.setTransform(554.2,438.4);
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(36).to({_off:false},0).wait(50));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiwB4QhJgxAAhHQAAhFBJgzQBKgxBmAAQBoAABIAxQBKAzAABFQAABHhKAxQhIAyhoAAQhmAAhKgyg");
	this.shape.setTransform(-222.4,523);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.4,65.2,1473.7,474.9);


(lib.Mod3mc3t2TMR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(1));

	// botones y ventanas  menu
	this.instance = new lib.mod2t2mc3_con_todos_los_botones();
	this.instance.parent = this;
	this.instance.setTransform(259.9,342.5,1,1,0,0,0,249.9,249.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).wait(13));

	// instruccion
	this.instance_1 = new lib.instruccionesmc3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.7,54,1,1,0,0,0,95.7,21.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(42).to({_off:false},0).wait(13));

	// grafica
	this.instance_2 = new lib.grafica1banderillas("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(579.3,250.1,1,1,0,0,0,290.8,170.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(42).to({_off:false},0).to({x:619.3,alpha:1},12,cjs.Ease.get(1)).wait(1));

	// header1
	this.instance_3 = new lib.no1perfil("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.6,33.1,1,1,0,0,0,290.8,73.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:53.1,alpha:1},22,cjs.Ease.get(1)).wait(33));

	// TIP
	this.info = new lib.mc_infoRecuerda02();
	this.info.parent = this;
	this.info.setTransform(454.6,344);
	this.info._off = true;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(22).to({_off:false},0).wait(33));

	// guia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ah7CCQgyg1AAhNQAAhLAyg3QAzg2BIAAQBIAAA0A2QAzA3gBBLQABBNgzA1Qg0A2hIAAQhIAAgzg2g");
	this.shape.setTransform(-72.7,446.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.2,87.9,368.8,376.8);


// stage content:
(lib.AC_TMR_M03_02 = function(mode,startPosition,loop) {
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
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// PAGINAS
	this.instance = new lib.Mod3T2mc1();
	this.instance.parent = this;
	this.instance.setTransform(479.5,431.9,1,1,0,0,0,418.7,193.1);

	this.instance_1 = new lib.Mod3t2mc2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.4,40.2);

	this.instance_2 = new lib.Mod3mc3t2TMR();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.4,40.2);

	this.instance_3 = new lib.Mod3mc4t2TMR();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.4,40.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// TITULO
	this.instance_4 = new lib.tema_entrada_titulo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(303.6,249.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,218,255,0.6)").ss(1,1,1).p("AhoioIDRAAIAAFRIjRAAg");
	this.shape.setTransform(-123.6,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DC686B").s().p("AhoCpIAAlRIDRAAIAAFRg");
	this.shape_1.setTransform(-123.6,16.9);

	this.instance_5 = new lib.tituloestatico();
	this.instance_5.parent = this;
	this.instance_5.setTransform(303.6,249.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(328,249,603.6,550.1);
// library properties:
lib.properties = {
	width: 950,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;