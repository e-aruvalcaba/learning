(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 950,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// symbols:

(lib.casilla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E8DCC").s().p("Am4G4Qi3i2AAkCQAAkBC3i3QC3i3EBAAQECAAC2C3QC4C3AAEBQAAECi4C2Qi2C4kCAAQkBAAi3i4g");
	this.shape.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.8,124.8);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Am4G4Qi3i2AAkCQAAkBC3i3QC3i3EBAAQECAAC2C3QC4C3AAEBQAAECi4C2Qi2C4kCAAQkBAAi3i4g");
	this.shape.setTransform(62.4,62.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124.8,124.8);


// stage content:
(lib.dradanddropconmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//se almacena la raiz dentro de una variable
		var root = this;
		parent.inicio_tema();
		parent.canvasBarra.deshabilitar_atras();
		parent.canvasBarra.deshabilitar_siguiente();
		window.parent.setEdo_botones();
		
		var btns = new Array();
		
		//habilitar las funciones de over mouse
		stage.enableMouseOver(10);
		
		
		function deshabilitarElemento(mc) {
			mc.removeAllEventListeners();
			mc.cursor = false;
		
		}
		
		var botones = 3;
		for (var i = 1; i <= botones; i++) {
			this['b' + i].n = i;
			/*btns[i].ejex = btn.x;
			btns[i].ejey = btn.y;*/
			this['b' + i].cursor = "pointer";
			this['b' + i].ejex = this['b' + i].x;
			this['b' + i].ejey = this['b' + i].y;
		
			this['c' + i].n = i;
			console.log(this['c' + i].n);
			this['c' + i].ocupado = false;
		
			this['b' + i].on("pressmove", function (event) {
				event.currentTarget.x = event.stageX;
				event.currentTarget.y = event.stageY;
				stage.update();
			})
		
			this['b' + i].on("pressup", function (event) {
				for (var j = 1; j <= botones; j++) {
					var match = 0;
					console.log(this.n + " " + root['c' + j].n);
					if (((this.x >= root['c' + j].x - 50) && (this.x <= root['c' + j].x + 50)) && ((this.y >= root['c' + j].y - 50) && (this.y <= root['c' + j].y + 50))) {
						if (root['c' + j].ocupado == false) {
							if(root['c'+j].n==this.n){
								alert("correcto");
							}
							//alert("matc");
							this.x = root['c' + j].x;
							this.y = root['c' + j].y;
							match = 1;
							deshabilitarElemento(this);
							root['c' + j].ocupado = true;
							break;
						}
		
					}
		
				}
				if (match == 0) {
					this.x = this.ejex;
					this.y = this.ejey;
				}
			})
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 3
	this.b3 = new lib.btn();
	this.b3.setTransform(86.4,406.8,1,1,0,0,0,62.4,62.4);

	this.b2 = new lib.btn();
	this.b2.setTransform(86.4,253.8,1,1,0,0,0,62.4,62.4);

	this.b1 = new lib.btn();
	this.b1.setTransform(86.4,104.1,1,1,0,0,0,62.4,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(1));

	// Capa 2
	this.c2 = new lib.casilla();
	this.c2.setTransform(854.2,274.2,1,1,0,0,0,62.4,62.4);

	this.c3 = new lib.casilla();
	this.c3.setTransform(854.2,427.2,1,1,0,0,0,62.4,62.4);

	this.c1 = new lib.casilla();
	this.c1.setTransform(854.2,124.5,1,1,0,0,0,62.4,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c1},{t:this.c3},{t:this.c2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499,316.7,892.6,447.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;

 