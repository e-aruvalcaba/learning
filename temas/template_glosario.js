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


(lib.mc_glosario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Glosario", "bold 51px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.lineWidth = 594;
	this.text.parent = this;
	this.text.setTransform(463.1,32.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().rr(-461.1,-214.75,922.2,429.5,64.7);
	this.shape.setTransform(461.1,214.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_glosario, new cjs.Rectangle(0,0,922.2,429.5), null);


(lib.fondo_cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.667)").s().p("EhOCAnkMAAAhPHMCcFAAAMAAABPHg");
	this.shape.setTransform(499.5,253.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo_cerrar, new cjs.Rectangle(0,0,999.1,506.3), null);


(lib.btn_cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.808)").s().p("EhM/AnkMAAAhPHMCZ/AAAMAAABPHg");
	this.shape.setTransform(492.8,253.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,985.5,506.3);


// stage content:
(lib.template_glosario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
		var root = this;
		
		//habilitar las funciones de over mouse
		stage.enableMouseOver();
		
		//Actividades que llevar drag and drop etc.
		createjs.Touch.enable(stage);
		
		console.log(root.fondo_cerrar);
		try {
			root.fondo_cerrar.addEventListener("click", parent.llamar_glosario);
		} catch (err) {
			console.log("Sin comunicación con el start.js", err);
		}
		
		root.fondo_cerrar.cursor = "pointer";
		root.mc_glosario.cursor = "false";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// mcps
	this.mc_glosario = new lib.mc_glosario();
	this.mc_glosario.parent = this;
	this.mc_glosario.setTransform(475.8,267.4,1,1,0,0,0,461.1,214.7);
	this.mc_glosario._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_glosario).wait(19).to({_off:false},0).wait(61));

	// Layer 1
	this.instance = new lib.btn_cerrar();
	this.instance.parent = this;
	this.instance.setTransform(1448.8,767.2,1,1,0,0,0,492.8,253.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.fondo_cerrar = new lib.fondo_cerrar();
	this.fondo_cerrar.parent = this;
	this.fondo_cerrar.setTransform(475.1,275.1,0.951,1.086,0,0,0,499.6,253.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fondo_cerrar},{t:this.instance}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(475,275,1941.5,1020.3);
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