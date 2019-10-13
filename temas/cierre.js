(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._eval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Evaluacion", "36px 'Times New Roman'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 288;
	this.text.parent = this;
	this.text.setTransform(158.2,5.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993333").s().p("A4tD5IAAnxMAxbAAAIAAHxg");
	this.shape.setTransform(158.2,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("A4tD5IAAnxMAxbAAAIAAHxg");
	this.shape_1.setTransform(158.2,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993333").s().p("A4tD5IAAnxMAxbAAAIAAHxg");
	this.shape_2.setTransform(158.2,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.5,49.9);


// stage content:
(lib.cierre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		parent.resetnavegacion();
		parent.final_tema();
		this.stop()
		//Funciones de para el final tema
		
		this.btn_eval.addEventListener("click",llamar_eval);
		function llamar_eval()
		{
			parent.llamar_evaluacion();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Temas
	this.btn_eval = new lib._eval();
	this.btn_eval.parent = this;
	this.btn_eval.setTransform(593.2,360.1,1,1,0,0,0,158.2,24.9);
	new cjs.ButtonHelper(this.btn_eval, 0, 1, 1);

	this.text = new cjs.Text("Te invitamos a que tomes la evaluacion ", "36px 'Times New Roman'", "#0066CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 42;
	this.text.lineWidth = 441;
	this.text.parent = this;
	this.text.setTransform(510.7,26.5,1.693,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text},{t:this.btn_eval}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(624.3,274.5,752.9,360.6);
// library properties:
lib.properties = {
	width: 980,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;