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


(lib.vamospag8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.vamos.text = "Vamos!!";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.vamos = new cjs.Text("", "italic bold 40px 'Arial'");
	this.vamos.name = "vamos";
	this.vamos.textAlign = "center";
	this.vamos.lineHeight = 47;
	this.vamos.lineWidth = 198;
	this.vamos.parent = this;
	this.vamos.setTransform(458.4,163.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949494").s().p("A1AN5IAA7xMApPAAAQAyAAAAAyIAAaNQAAAygyAAg");
	this.shape.setTransform(457.9,195.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.vamos}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vamospag8, new cjs.Rectangle(323.4,107.1,269,177.8), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.temafinpag11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.terminado.text ="Tema terminado";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.terminado = new cjs.Text("", "italic bold 40px 'Arial'");
	this.terminado.name = "terminado";
	this.terminado.textAlign = "center";
	this.terminado.lineHeight = 47;
	this.terminado.lineWidth = 180;
	this.terminado.parent = this;
	this.terminado.setTransform(451.9,121.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949494").s().p("A1AN5IAA7xMApPAAAQAyAAAAAyIAAaNQAAAygyAAg");
	this.shape.setTransform(457.9,195.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.terminado}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.temafinpag11, new cjs.Rectangle(323.4,107.1,269,177.8), null);


(lib.radiospreg = function(mode,startPosition,loop) {
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

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DDDDDD").ss(3,1,1).p("ABnAAQAAArgeAeQgeAegrAAQgqAAgegeQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqg");
	this.shape.setTransform(3.1,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_1.setTransform(3.1,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDDDDD").s().p("AhUBYQglgBgYgZQgZgZgBglQABgkAZgZQAYgZAlgBICoAAQAmABAZAZQAZAZAAAkQAAAlgZAZQgZAZgmABg");
	this.shape_2.setTransform(12.3,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C7E0A3").ss(3,1,1).p("AhgAkQgGgRAAgTQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeQgKgKgHgMQgEgHgDgIg");
	this.shape_3.setTransform(17.1,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#339900").s().p("AhIBJQgKgKgHgMQgEgHgDgHQgGgSAAgTQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_4.setTransform(17.1,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C7E0A3").s().p("AhUBYQglgBgYgZQgZgZgBglQABgkAZgZQAYgZAlgBICoAAQAmABAZAZQAZAZAAAkQAAAlgZAZQgZAZgmABg");
	this.shape_5.setTransform(8.8,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,7.2,38.3,23.6);


(lib.proborradopag10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.borrado.text="Progreso borrado";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.borrado = new cjs.Text("", "italic bold 40px 'Arial'");
	this.borrado.name = "borrado";
	this.borrado.textAlign = "center";
	this.borrado.lineHeight = 47;
	this.borrado.lineWidth = 194;
	this.borrado.parent = this;
	this.borrado.setTransform(458.9,149.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949494").s().p("A1AN5IAA7xMApPAAAQAyAAAAAyIAAaNQAAAygyAAg");
	this.shape.setTransform(457.9,195.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.borrado}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.proborradopag10, new cjs.Rectangle(323.4,107.1,269,177.8), null);


(lib.paginamenubloqueado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bloqueado.text = "Menu bloqueado";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.bloqueado = new cjs.Text("", "italic bold 35px 'Arial'");
	this.bloqueado.name = "bloqueado";
	this.bloqueado.textAlign = "center";
	this.bloqueado.lineHeight = 41;
	this.bloqueado.lineWidth = 248;
	this.bloqueado.parent = this;
	this.bloqueado.setTransform(431.9,-259.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949494").s().p("A16N5QgyAAAAgyIAA6NQAAgyAyAAMAr1AAAQAyAAAAAyIAAaNQAAAygyAAg");
	this.shape.setTransform(433.6,-200.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.bloqueado}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paginamenubloqueado, new cjs.Rectangle(288.3,-289.8,290.6,177.8), null);


(lib.pagina1salir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.lblsalir.text = "Saliendo";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.lblsalir = new cjs.Text("", "italic bold 35px 'Arial'");
	this.lblsalir.name = "lblsalir";
	this.lblsalir.textAlign = "center";
	this.lblsalir.lineHeight = 41;
	this.lblsalir.lineWidth = 238;
	this.lblsalir.parent = this;
	this.lblsalir.setTransform(110.3,146.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("A16t4MAr1AAAQAyAAAAAyIAAaNQAAAygyAAMgr1AAAQgyAAAAgyIAA6NQAAgyAyAAg");
	this.shape.setTransform(114.6,184.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#949494").s().p("A16N5QgyAAAAgyIAA6NQAAgyAyAAMAr1AAAQAyAAAAAyIAAaNQAAAygyAAg");
	this.shape_1.setTransform(114.6,184.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.lblsalir}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pagina1salir, new cjs.Rectangle(-31.7,94.7,292.6,179.8), null);


(lib.ClavenoValida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.novalido.text ="Clave no válida!!";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.novalido = new cjs.Text("", "italic bold 35px 'Arial'", "#FF0000");
	this.novalido.name = "novalido";
	this.novalido.textAlign = "center";
	this.novalido.lineHeight = 41;
	this.novalido.lineWidth = 335;
	this.novalido.parent = this;
	this.novalido.setTransform(361.4,-321.1);

	this.text = new cjs.Text("x", "bold 42px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 40;
	this.text.parent = this;
	this.text.setTransform(357.8,-235.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A8CxRMA4FAAAQAtAAAAArMAAAAhNQAAArgtAAMg4FAAAQgtAAAAgrMAAAghNQAAgrAtAAgAFlEOQAACYh0BrQh0BsijAAQikAAh0hsQh0hrAAiYQAAiYB0hrQB0hqCkAAQCjAAB0BqQB0BrAACYg");
	this.shape.setTransform(362,-238.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AkXEDQh0hrAAiYQAAiXB0hsQB0hrCjAAQCkAAB0BrQB0BsAACXQAACYh0BrQh0BsikAAQijAAh0hsg");
	this.shape_1.setTransform(358.1,-211.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("A8CRSQgtAAAAgrMAAAghNQAAgrAtAAMA4FAAAQAtAAAAArMAAAAhNQAAArgtAAgAk+ALQh0BrAACYQAACYB0BrQB0BsCkAAQCjAAB0hsQB0hrAAiYQAAiYh0hrQh0hqijAAQikAAh0Bqg");
	this.shape_2.setTransform(362,-238.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.novalido}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClavenoValida, new cjs.Rectangle(177,-349.8,370.1,223.2), null);


(lib.clavecorrecta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clavecorrecta.text ="Menu desbloqueado";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.clavecorrecta = new cjs.Text("", "italic bold 35px 'Arial'", "#009900");
	this.clavecorrecta.name = "clavecorrecta";
	this.clavecorrecta.textAlign = "center";
	this.clavecorrecta.lineHeight = 41;
	this.clavecorrecta.lineWidth = 283;
	this.clavecorrecta.parent = this;
	this.clavecorrecta.setTransform(434.2,-319.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5.8,1,1).p("AjRAhICCCqIEhmV");
	this.shape.setTransform(439.2,-201);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("A8BxRMA4DAAAQAuAAAAA1MAAAAg5QAAA1guAAMg4DAAAQguAAAAg1MAAAgg5QAAg1AuAAgAHVJjQAACgh4BxQh4BxipAAQipAAh4hxQh4hxAAigQAAigB4hyQB4hxCpAAQCpAAB4BxQB4ByAACgg");
	this.shape_1.setTransform(432.5,-259.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC00").s().p("AkgERQh4hxgBigQABifB4hyQB3hwCpAAQCqAAB4BwQB4BygBCfQABCgh4BxQh4ByiqAAQipAAh3hygAhIC0IEhmUIkhGUIiDiqICDCqg");
	this.shape_2.setTransform(438.5,-198.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#949494").s().p("A8BRSQguAAAAg1MAAAgg5QAAg1AuAAMA4DAAAQAuAAAAA1MAAAAg5QAAA1guAAgAjlFRQh4ByAACgQAACgB4BxQB4BxCpAAQCpAAB4hxQB4hxAAigQAAigh4hyQh4hxipAAQipAAh4Bxg");
	this.shape_3.setTransform(432.5,-259.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.clavecorrecta}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clavecorrecta, new cjs.Rectangle(247.5,-371.4,370,223.2), null);


(lib.btnsalir2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("No", "italic bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.parent = this;
	this.text.setTransform(56.4,-4.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoBC0QgyAAAAgzIAAkBQAAgzAyAAIQDAAQAyAAAAAzIAAEBQAAAzgyAAg");
	this.shape.setTransform(56.4,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.3,112.8,43.1);


(lib.btnsalir1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Sí", "italic bold 35px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 80;
	this.text.parent = this;
	this.text.setTransform(53.9,-2.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#949494").ss(0.1,1,1).p("AoBizIQDAAQAyAAAAAyIAAEDQAAAygyAAIwDAAQgyAAAAgyIAAkDQAAgyAyAAg");
	this.shape.setTransform(56.4,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AoBC0QgyAAAAgzIAAkBQAAgzAyAAIQDAAQAyAAAAAzIAAEBQAAAzgyAAg");
	this.shape_1.setTransform(56.4,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4.6,114.8,43.1);


(lib.btnaceptareval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Aceptar", "34px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(93.2,8.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("As/kNIZ/AAQBkAAAABkIAAFTQAABkhkAAI5/AAQhkAAAAhkIAAlTQAAhkBkAAg");
	this.shape.setTransform(93.2,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("As/EOQhjAAgBhkIAAlTQABhkBjAAIZ/AAQBjAAABBkIAAFTQgBBkhjAAg");
	this.shape_1.setTransform(93.2,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,188.3,56.1);


(lib.btnaceptarback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(1,1,1).p("AkAjfIIBAAQAyAAAAAyIAAFbQAAAygyAAIoBAAQgyAAAAgyIAAlbQAAgyAyAAg");
	this.shape.setTransform(30.7,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AkADgQgyAAAAgzIAAlZQAAgzAyAAIIBAAQAyAAAAAzIAAFZQAAAzgyAAg");
	this.shape_1.setTransform(30.7,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,63.4,46.7);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("No", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 97;
	this.text.parent = this;
	this.text.setTransform(62.5,5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoqDCQgyAAAAgyIAAkfQAAgyAyAAIRVAAQAyAAAAAyIAAEfQAAAygyAAg");
	this.shape.setTransform(60.5,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.1,38.8);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.text = new cjs.Text("Sí", "bold 20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(60.6,6.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("AoqDCQgyAAAAgyIAAkfQAAgyAyAAIRVAAQAyAAAAAyIAAEfQAAAygyAAg");
	this.shape.setTransform(60.5,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.1,38.8);


(lib.btndefondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.498)").s().p("EhKJAnOMAAAhObMCUTAAAMAAABObg");
	this.shape.setTransform(474.6,251);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EhKJAKwIAA1fMCUTAAA");
	this.shape_1.setTransform(474.6,68.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,951.2,503.1);


(lib.ventanabienvenida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.bienvenida.text ="Bienvenido";
		this.indica.text = "Tomar atajo";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btn2 = new lib.btn2();
	this.btn2.parent = this;
	this.btn2.setTransform(154,-315.3,1,1,0,0,0,60.5,19.4);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.btn1 = new lib.btn1();
	this.btn1.parent = this;
	this.btn1.setTransform(-28.8,-315.3,1,1,0,0,0,60.5,19.4);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.indica = new cjs.Text("", "bold 20px 'Arial'");
	this.indica.name = "indica";
	this.indica.textAlign = "center";
	this.indica.lineHeight = 24;
	this.indica.lineWidth = 284;
	this.indica.parent = this;
	this.indica.setTransform(55.9,-400.5);

	this.bienvenida = new cjs.Text("", "bold 30px 'Arial'");
	this.bienvenida.name = "bienvenida";
	this.bienvenida.textAlign = "center";
	this.bienvenida.lineHeight = 36;
	this.bienvenida.lineWidth = 307;
	this.bienvenida.parent = this;
	this.bienvenida.setTransform(59.1,-482.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A8vxRMA5fAAAMAAAAijMg5fAAAg");
	this.shape.setTransform(59.1,-380.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AoqjBIRVAAQAyAAAAAyIAAEfQAAAygyAAIxVAAQgyAAAAgyIAAkfQAAgyAyAAg");
	this.shape_1.setTransform(-28.8,-315.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("A8vRSMAAAgijMA5fAAAMAAAAijgAFXH+IAAEfQAAAyAyAAIRXAAQAyAAAAgyIAAkfQAAgygyAAIxXAAQgyAAAAAygA3MH+IAAEfQAAAyAyAAIRXAAQAyAAAAgyIAAkfQAAgygyAAIxXAAQgyAAAAAyg");
	this.shape_2.setTransform(59.1,-380.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.bienvenida},{t:this.indica},{t:this.btn1},{t:this.btn2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ventanabienvenida, new cjs.Rectangle(-125.9,-492.2,370.1,223.2), null);


(lib.paginaexit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.exit.text="¿Estás seguro de salir?";
		var botones =2;
		var root = this;
		iniciar();
		
		function iniciar() {
		for (var i = 1; i <= botones; i++) {
				console.log("boton llego a:" + i);
				root['b' + i].sel = false;
				root['b' + i].n = i;
				root['b' + i].cursor = "pointer";
		
		
				root['b' + i].on("click", function (event) {
					console.log("dio click");
					if(this.n == 1){
						this.parent.parent.parent.gotoAndPlay(6);
					}else{
						parent.llamarAlertas();
					}
					
				});
				
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.b2 = new lib.btnsalir2();
	this.b2.parent = this;
	this.b2.setTransform(497.8,-130.3,1,1,0,0,0,56.4,17.9);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b1 = new lib.btnsalir1();
	this.b1.parent = this;
	this.b1.setTransform(315.2,-130.3,1,1,0,0,0,56.4,17.9);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.exit = new cjs.Text("", "italic bold 35px 'Arial'");
	this.exit.name = "exit";
	this.exit.textAlign = "center";
	this.exit.lineHeight = 41;
	this.exit.lineWidth = 294;
	this.exit.parent = this;
	this.exit.setTransform(405.2,-294.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#949494").s().p("A70RSQg7AAAAg4MAAAggyQAAg5A7AAMA3pAAAQA7AAAAA5MAAAAgyQAAA4g7AAgAFPJnIAAEDQAAAyAyAAIQEAAQAyAAAAgyIAAkDQAAgygyAAIwEAAQgyAAAAAygA3SJnIAAEDQAAAyAyAAIQEAAQAyAAAAgyIAAkDQAAgygyAAIwEAAQgyAAAAAyg");
	this.shape.setTransform(407.9,-204.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.exit},{t:this.b1},{t:this.b2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paginaexit, new cjs.Rectangle(223.9,-315.3,368,221.2), null);


(lib.pagina10borrado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
		parent.borrarprogreso();
		parent.llamarAlertas();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.proborradopag10();
	this.instance.parent = this;
	this.instance.setTransform(3,387.9,1,1,0,0,0,5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3,y:8},8).to({_off:true},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.4,486.9,269,177.8);


(lib.pagina9vamos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.vamospag8();
	this.instance.parent = this;
	this.instance.setTransform(-293.8,-38,1,1,0,0,0,12,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.5,59.1,269,177.8);


(lib.pagina8menubloqueado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
		parent.backdoor = false;
		console.log("el backdoor esta:" + parent.backdoor);
		parent.actualizarMenu();
		parent.llamarAlertas();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// Layer 1
	this.instance = new lib.paginamenubloqueado();
	this.instance.parent = this;
	this.instance.setTransform(-2.7,-0.9,1,1,0,0,0,14,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:301.9},19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(271.5,-302.8,290.6,177.8);


(lib.pagina7salir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		parent.window.close();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.pagina1salir();
	this.instance.parent = this;
	this.instance.setTransform(-7.7,-0.8,1,1,0,0,0,11.1,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:346.1,y:-0.9},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.6,85.4,290.7,177.9);


(lib.pagina6exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.paginaexit();
	this.instance.parent = this;
	this.instance.setTransform(-651,341.3,1,1,0,0,0,9.8,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.2},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-437,18.2,368.1,221.2);


(lib.pagina3clavevalida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
		parent.llamarAlertas();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// Layer 3
	this.instance = new lib.ClavenoValida();
	this.instance.parent = this;
	this.instance.setTransform(18.3,10.1,1,1,0,0,0,7,7);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:20.3,y:355.8,alpha:1},14).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188.8,-346.2,369,222.2);


(lib.pagina2bienvenidos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 1
	this.instance = new lib.ventanabienvenida();
	this.instance.parent = this;
	this.instance.setTransform(335.3,158.7,1,1,0,0,0,36.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:323.1,y:548.1},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(173.4,-365.2,369,222.2);


(lib.pag12eval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		parent.getPreguntas();
		var cont = 0;
		var OrdenPreguntas = [];
		root.b1.visible = false;
		console.log("este es el array viejo" + parent.canvasContenido.Array);
		for (var i = 1; i <= 25; i++) {
			root['ch' + i].cursor = "";
			root['ch' + i].activo = false;
			root["ch" + i].visible = false;
			root["preg" + i].visible = false;
		
		}
		console.log("Numero de preguntas en la evaluacion: " + parent.NumPreguntas);
		for (var i = 1; i <= parent.NumPreguntas; i++) {
			root["ch" + i].visible = true;
			root["preg" + i].visible = true;
			root['ch' + i].activo = false;
			root['ch' + i].cursor = "pointer";
			root['ch' + i].n = i;
			root['ch' + i].addEventListener("click", cambios);
		}
		// activar el cambio de estado de los checkbox
		function cambios(r) {
			var valor = r.currentTarget.n;
			var pos = OrdenPreguntas.indexOf(r.currentTarget.n);
			if (r.currentTarget.activo == false) {
				r.currentTarget.activo = true;
				r.currentTarget.gotoAndStop(1);
				OrdenPreguntas.push(valor);
				//root.OrdenPreguntas.push();
				console.log(OrdenPreguntas, OrdenPreguntas.length);
				cont++
			} else {
				r.currentTarget.activo = false;
				r.currentTarget.gotoAndStop(0);
				OrdenPreguntas.splice(pos, 1);
				console.log(OrdenPreguntas, OrdenPreguntas.length);
				cont--
			}
			console.log(cont);
			if (cont == 7) {
				root.b1.visible = true;
				for (var l = 1; l <= parent.NumPreguntas; l++) {
					if (root['ch' + l].activo == false) {
						root['ch' + l].mouseEnabled = false;
					}
				}
			} else {
				root.b1.visible = false;
				for (var k = 1; k <= parent.NumPreguntas; k++) {
					root['ch' + k].mouseEnabled = true;
				}
			}
		}
		
		for (var i = 1; i <= 1; i++) {
			console.log("boton llego a:" + i);
			root['b' + i].sel = false;
			root['b' + i].n = i;
			root['b' + i].cursor = "pointer";
		
		
			root['b' + i].on("click", function (event) {
				console.log("dio click");
				if (this.n == 1) {
					parent.canvasContenido.Array = OrdenPreguntas;
					console.log("agrego el nuevo orden de preguntas");
					console.log("este es el array nuevo" + parent.canvasContenido.Array);
					parent.llamarAlertas();
				}
		
			});
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ch21 = new lib.radiospreg();
	this.ch21.parent = this;
	this.ch21.setTransform(737,-8.7);

	this.ch22 = new lib.radiospreg();
	this.ch22.parent = this;
	this.ch22.setTransform(737,69.6);

	this.ch23 = new lib.radiospreg();
	this.ch23.parent = this;
	this.ch23.setTransform(737,153.4);

	this.ch24 = new lib.radiospreg();
	this.ch24.parent = this;
	this.ch24.setTransform(737,237.3);

	this.ch25 = new lib.radiospreg();
	this.ch25.parent = this;
	this.ch25.setTransform(737,337.8);

	this.ch17 = new lib.radiospreg();
	this.ch17.parent = this;
	this.ch17.setTransform(562.2,69.6);

	this.ch18 = new lib.radiospreg();
	this.ch18.parent = this;
	this.ch18.setTransform(562.2,153.4);

	this.ch19 = new lib.radiospreg();
	this.ch19.parent = this;
	this.ch19.setTransform(562.2,243);

	this.ch20 = new lib.radiospreg();
	this.ch20.parent = this;
	this.ch20.setTransform(562.2,337.8);

	this.ch2 = new lib.radiospreg();
	this.ch2.parent = this;
	this.ch2.setTransform(7.2,69.6);

	this.ch3 = new lib.radiospreg();
	this.ch3.parent = this;
	this.ch3.setTransform(7.2,153.4);

	this.ch4 = new lib.radiospreg();
	this.ch4.parent = this;
	this.ch4.setTransform(7.2,241.4);

	this.ch5 = new lib.radiospreg();
	this.ch5.parent = this;
	this.ch5.setTransform(7.2,337.8);

	this.ch6 = new lib.radiospreg();
	this.ch6.parent = this;
	this.ch6.setTransform(194.2,-8.7);

	this.ch7 = new lib.radiospreg();
	this.ch7.parent = this;
	this.ch7.setTransform(194.2,69.6);

	this.ch8 = new lib.radiospreg();
	this.ch8.parent = this;
	this.ch8.setTransform(194.2,153.4);

	this.ch9 = new lib.radiospreg();
	this.ch9.parent = this;
	this.ch9.setTransform(194.2,241.4);

	this.ch10 = new lib.radiospreg();
	this.ch10.parent = this;
	this.ch10.setTransform(194.2,337.8);

	this.ch11 = new lib.radiospreg();
	this.ch11.parent = this;
	this.ch11.setTransform(372.7,-8.7);

	this.ch12 = new lib.radiospreg();
	this.ch12.parent = this;
	this.ch12.setTransform(372.7,69.6);

	this.ch13 = new lib.radiospreg();
	this.ch13.parent = this;
	this.ch13.setTransform(372.7,153.4);

	this.ch14 = new lib.radiospreg();
	this.ch14.parent = this;
	this.ch14.setTransform(372.7,241.4);

	this.ch15 = new lib.radiospreg();
	this.ch15.parent = this;
	this.ch15.setTransform(372.7,337.8);

	this.ch16 = new lib.radiospreg();
	this.ch16.parent = this;
	this.ch16.setTransform(562.2,-8.7);

	this.ch1 = new lib.radiospreg();
	this.ch1.parent = this;
	this.ch1.setTransform(7.2,-8.7);

	this.preg25 = new cjs.Text("Pregunta 25", "20px 'Arial'");
	this.preg25.name = "preg25";
	this.preg25.textAlign = "center";
	this.preg25.lineHeight = 24;
	this.preg25.lineWidth = 113;
	this.preg25.parent = this;
	this.preg25.setTransform(835.5,348.5);

	this.preg24 = new cjs.Text("Pregunta 24", "20px 'Arial'");
	this.preg24.name = "preg24";
	this.preg24.textAlign = "center";
	this.preg24.lineHeight = 24;
	this.preg24.lineWidth = 113;
	this.preg24.parent = this;
	this.preg24.setTransform(835.5,248);

	this.preg23 = new cjs.Text("Pregunta 23", "20px 'Arial'");
	this.preg23.name = "preg23";
	this.preg23.textAlign = "center";
	this.preg23.lineHeight = 24;
	this.preg23.lineWidth = 112;
	this.preg23.parent = this;
	this.preg23.setTransform(834.6,164.1);

	this.preg22 = new cjs.Text("Pregunta 22", "20px 'Arial'");
	this.preg22.name = "preg22";
	this.preg22.textAlign = "center";
	this.preg22.lineHeight = 24;
	this.preg22.lineWidth = 113;
	this.preg22.parent = this;
	this.preg22.setTransform(835.5,80.3);

	this.preg19 = new cjs.Text("Pregunta 19", "20px 'Arial'");
	this.preg19.name = "preg19";
	this.preg19.textAlign = "center";
	this.preg19.lineHeight = 24;
	this.preg19.lineWidth = 115;
	this.preg19.parent = this;
	this.preg19.setTransform(661.3,255.5);

	this.preg20 = new cjs.Text("Pregunta 20", "20px 'Arial'");
	this.preg20.name = "preg20";
	this.preg20.textAlign = "center";
	this.preg20.lineHeight = 24;
	this.preg20.lineWidth = 112;
	this.preg20.parent = this;
	this.preg20.setTransform(659.5,348.5);

	this.preg21 = new cjs.Text("Pregunta 21", "20px 'Arial'");
	this.preg21.name = "preg21";
	this.preg21.textAlign = "center";
	this.preg21.lineHeight = 24;
	this.preg21.lineWidth = 112;
	this.preg21.parent = this;
	this.preg21.setTransform(834.6,2);

	this.preg2 = new cjs.Text("Pregunta 2", "20px 'Arial'");
	this.preg2.name = "preg2";
	this.preg2.textAlign = "center";
	this.preg2.lineHeight = 24;
	this.preg2.lineWidth = 102;
	this.preg2.parent = this;
	this.preg2.setTransform(100.2,80.3);

	this.preg3 = new cjs.Text("Pregunta 3", "20px 'Arial'");
	this.preg3.name = "preg3";
	this.preg3.textAlign = "center";
	this.preg3.lineHeight = 24;
	this.preg3.lineWidth = 102;
	this.preg3.parent = this;
	this.preg3.setTransform(100.2,164.1);

	this.preg4 = new cjs.Text("Pregunta 4", "20px 'Arial'");
	this.preg4.name = "preg4";
	this.preg4.textAlign = "center";
	this.preg4.lineHeight = 24;
	this.preg4.lineWidth = 102;
	this.preg4.parent = this;
	this.preg4.setTransform(100.2,248);

	this.preg5 = new cjs.Text("Pregunta 5", "20px 'Arial'");
	this.preg5.name = "preg5";
	this.preg5.textAlign = "center";
	this.preg5.lineHeight = 24;
	this.preg5.lineWidth = 102;
	this.preg5.parent = this;
	this.preg5.setTransform(100.2,348.5);

	this.preg6 = new cjs.Text("Pregunta 6", "20px 'Arial'");
	this.preg6.name = "preg6";
	this.preg6.textAlign = "center";
	this.preg6.lineHeight = 24;
	this.preg6.lineWidth = 102;
	this.preg6.parent = this;
	this.preg6.setTransform(286,2);

	this.preg7 = new cjs.Text("Pregunta 7", "20px 'Arial'");
	this.preg7.name = "preg7";
	this.preg7.textAlign = "center";
	this.preg7.lineHeight = 24;
	this.preg7.lineWidth = 102;
	this.preg7.parent = this;
	this.preg7.setTransform(286,80.3);

	this.preg8 = new cjs.Text("Pregunta 8", "20px 'Arial'");
	this.preg8.name = "preg8";
	this.preg8.textAlign = "center";
	this.preg8.lineHeight = 24;
	this.preg8.lineWidth = 102;
	this.preg8.parent = this;
	this.preg8.setTransform(286,164.1);

	this.preg9 = new cjs.Text("Pregunta 9", "20px 'Arial'");
	this.preg9.name = "preg9";
	this.preg9.textAlign = "center";
	this.preg9.lineHeight = 24;
	this.preg9.lineWidth = 102;
	this.preg9.parent = this;
	this.preg9.setTransform(286,248);

	this.preg10 = new cjs.Text("Pregunta 10", "20px 'Arial'");
	this.preg10.name = "preg10";
	this.preg10.textAlign = "center";
	this.preg10.lineHeight = 24;
	this.preg10.lineWidth = 114;
	this.preg10.parent = this;
	this.preg10.setTransform(291.5,348.5);

	this.preg11 = new cjs.Text("Pregunta 11", "20px 'Arial'");
	this.preg11.name = "preg11";
	this.preg11.textAlign = "center";
	this.preg11.lineHeight = 24;
	this.preg11.lineWidth = 110;
	this.preg11.parent = this;
	this.preg11.setTransform(474.2,2);

	this.preg12 = new cjs.Text("Pregunta 12", "20px 'Arial'");
	this.preg12.name = "preg12";
	this.preg12.textAlign = "center";
	this.preg12.lineHeight = 24;
	this.preg12.lineWidth = 125;
	this.preg12.parent = this;
	this.preg12.setTransform(481.6,80.3);

	this.preg13 = new cjs.Text("Pregunta 13", "20px 'Arial'");
	this.preg13.name = "preg13";
	this.preg13.textAlign = "center";
	this.preg13.lineHeight = 24;
	this.preg13.lineWidth = 115;
	this.preg13.parent = this;
	this.preg13.setTransform(477,164.1);

	this.preg15 = new cjs.Text("Pregunta 15", "20px 'Arial'");
	this.preg15.name = "preg15";
	this.preg15.textAlign = "center";
	this.preg15.lineHeight = 24;
	this.preg15.lineWidth = 113;
	this.preg15.parent = this;
	this.preg15.setTransform(476,348.5);

	this.preg14 = new cjs.Text("Pregunta 14", "20px 'Arial'");
	this.preg14.name = "preg14";
	this.preg14.textAlign = "center";
	this.preg14.lineHeight = 24;
	this.preg14.lineWidth = 111;
	this.preg14.parent = this;
	this.preg14.setTransform(475.1,248);

	this.preg16 = new cjs.Text("Pregunta 16", "20px 'Arial'");
	this.preg16.name = "preg16";
	this.preg16.textAlign = "center";
	this.preg16.lineHeight = 24;
	this.preg16.lineWidth = 112;
	this.preg16.parent = this;
	this.preg16.setTransform(659.5,2);

	this.preg17 = new cjs.Text("Pregunta 17", "20px 'Arial'");
	this.preg17.name = "preg17";
	this.preg17.textAlign = "center";
	this.preg17.lineHeight = 24;
	this.preg17.lineWidth = 113;
	this.preg17.parent = this;
	this.preg17.setTransform(660.4,80.3);

	this.preg18 = new cjs.Text("Pregunta 18", "20px 'Arial'");
	this.preg18.name = "preg18";
	this.preg18.textAlign = "center";
	this.preg18.lineHeight = 24;
	this.preg18.lineWidth = 110;
	this.preg18.parent = this;
	this.preg18.setTransform(658.6,164.1);

	this.preg1 = new cjs.Text("Pregunta 1", "20px 'Arial'");
	this.preg1.name = "preg1";
	this.preg1.textAlign = "center";
	this.preg1.lineHeight = 24;
	this.preg1.lineWidth = 102;
	this.preg1.parent = this;
	this.preg1.setTransform(100.2,2);

	this.b1 = new lib.btnaceptareval();
	this.b1.parent = this;
	this.b1.setTransform(763.8,466.1,1,1,0,0,0,93.2,27);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhKIgqfMCURAAAMAAABU/MiURAAAg");
	this.shape.setTransform(449.1,236.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.b1},{t:this.preg1},{t:this.preg18},{t:this.preg17},{t:this.preg16},{t:this.preg14},{t:this.preg15},{t:this.preg13},{t:this.preg12},{t:this.preg11},{t:this.preg10},{t:this.preg9},{t:this.preg8},{t:this.preg7},{t:this.preg6},{t:this.preg5},{t:this.preg4},{t:this.preg3},{t:this.preg2},{t:this.preg21},{t:this.preg20},{t:this.preg19},{t:this.preg22},{t:this.preg23},{t:this.preg24},{t:this.preg25},{t:this.ch1},{t:this.ch16},{t:this.ch15},{t:this.ch14},{t:this.ch13},{t:this.ch12},{t:this.ch11},{t:this.ch10},{t:this.ch9},{t:this.ch8},{t:this.ch7},{t:this.ch6},{t:this.ch5},{t:this.ch4},{t:this.ch3},{t:this.ch2},{t:this.ch20},{t:this.ch19},{t:this.ch18},{t:this.ch17},{t:this.ch25},{t:this.ch24},{t:this.ch23},{t:this.ch22},{t:this.ch21}]}).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("EhKIAqvMAAAhVdMCURAAAMAAABVdg");
	this.shape_1.setTransform(446.8,238.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pag12eval, new cjs.Rectangle(-27.7,-36.1,952.4,548), null);


(lib.pag11temafin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_18 = function() {
		this.stop();
		parent.terminarTema();
		parent.llamarAlertas();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(18).call(this.frame_18).wait(1));

	// Layer 1
	this.instance = new lib.temafinpag11();
	this.instance.parent = this;
	this.instance.setTransform(-474.8,-3,1,1,0,0,0,11,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1,y:-1},17).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.4,99.1,269,177.8);


(lib.pag5clavecorr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
		parent.backdoor = true;
		console.log("el backdoor esta:" + parent.backdoor);
		parent.actualizarMenu();
		parent.llamarAlertas();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.instance = new lib.clavecorrecta();
	this.instance.parent = this;
	this.instance.setTransform(-5.3,368.9,1,1,0,0,0,9.9,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-3.1},23).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(232.8,-16,369,222.2);


(lib.alerta1bienvenida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		root.alertabackdoor.text = "Backdoor";
		root.indicacion.text = "ingresa una clave";
		root.btnaceptar.on("click", clic);
		
		function clic() {
			switch (claveBackdoor.value) {
				case "123":
					console.log("entro a 123");
					if (parent.backdoor == true) {
						this.parent.parent.parent.gotoAndPlay(7);
					} else {
						this.parent.parent.parent.gotoAndPlay(3);
					}
					break;
				case "zxc":
					this.parent.parent.parent.gotoAndPlay(9);
					break;
				case "qwe":
					this.parent.parent.parent.gotoAndPlay(10);
					break;
				case "asd":
					this.parent.parent.parent.gotoAndPlay(11);
					break;
				default:
					this.parent.parent.parent.gotoAndPlay(4);
				break;
					
			}
		
			
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.btnaceptar = new lib.btnaceptarback();
	this.btnaceptar.parent = this;
	this.btnaceptar.setTransform(461.2,-135.6,1,1,0,0,0,30.7,22.4);
	new cjs.ButtonHelper(this.btnaceptar, 0, 1, 1);

	this.indicacion = new cjs.Text("", "bold 20px 'Arial'");
	this.indicacion.name = "indicacion";
	this.indicacion.textAlign = "center";
	this.indicacion.lineHeight = 24;
	this.indicacion.lineWidth = 263;
	this.indicacion.parent = this;
	this.indicacion.setTransform(317.2,-228.9);

	this.claveBackdoor = new lib.an_TextInput({'id': 'claveBackdoor', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.claveBackdoor.setTransform(287.2,-141.3,2.614,2.311,0,0,0,50.1,10.9);

	this.alertabackdoor = new cjs.Text("", "bold 30px 'Arial'");
	this.alertabackdoor.name = "alertabackdoor";
	this.alertabackdoor.textAlign = "center";
	this.alertabackdoor.lineHeight = 36;
	this.alertabackdoor.lineWidth = 324;
	this.alertabackdoor.parent = this;
	this.alertabackdoor.setTransform(320.4,-305.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A8vxRMA5fAAAMAAAAijMg5fAAAg");
	this.shape.setTransform(321.2,-212.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("A8vRSMAAAgijMA5fAAAMAAAAijgARFJQIAAFbQAAAyAyAAIICAAQAyAAAAgyIAAlbQAAgygyAAIoCAAQgyAAAAAyg");
	this.shape_1.setTransform(321.2,-212.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.alertabackdoor},{t:this.claveBackdoor},{t:this.indicacion},{t:this.btnaceptar}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.alerta1bienvenida, new cjs.Rectangle(136.2,-323.8,370.1,223.2), null);


(lib.pag12evaluacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.pag12eval();
	this.instance.parent = this;
	this.instance.setTransform(-2.9,5,1,1,0,0,0,9,9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-39.6,951.9,547.5);


(lib.capa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.alerta1bienvenida();
	this.instance.parent = this;
	this.instance.setTransform(184.8,120.3,1,1,0,0,0,16.9,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:178.3,y:451.3},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(304.6,-223.2,369,222.2);


// stage content:
(lib.templatesAlerts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{backdoor:1,bienvenida:2,desbloqueado:3,clavemal:4,Exit:5,saliendo:6,bloqueado:7,vamos:8,borrado:9,terminado:10,preguntas:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		parent.getAlertas(this);
	}
	this.frame_1 = function() {
		this.stop();
		this.btnground.mouseEnabled=true;
		this.btnground.cursor = "";
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// Layer 2
	this.instance = new lib.capa1();
	this.instance.parent = this;
	this.instance.setTransform(5.7,6.5,1,1,0,0,0,16.9,9.7);

	this.instance_1 = new lib.pagina2bienvenidos();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.9,124.3,1,1,0,0,0,37.1,16.1);

	this.instance_2 = new lib.pag5clavecorr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.4,161.4,1,1,0,0,0,13.9,10.9);

	this.instance_3 = new lib.pagina3clavevalida();
	this.instance_3.parent = this;
	this.instance_3.setTransform(146.9,124.3,1,1,0,0,0,37.1,16.1);

	this.instance_4 = new lib.pagina6exit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(66.2,111.2,1,1,0,0,0,12.7,12.7);

	this.instance_5 = new lib.pagina7salir();
	this.instance_5.parent = this;
	this.instance_5.setTransform(102.6,83.9,1,1,0,0,0,15.4,12);

	this.instance_6 = new lib.pagina8menubloqueado();
	this.instance_6.parent = this;
	this.instance_6.setTransform(76.3,128.4,1,1,0,0,0,9.3,9.3);

	this.instance_7 = new lib.pagina9vamos();
	this.instance_7.parent = this;
	this.instance_7.setTransform(57,102,1,1,0,0,0,17,20);

	this.instance_8 = new lib.pagina10borrado();
	this.instance_8.parent = this;
	this.instance_8.setTransform(28.1,36,1,1,0,0,0,2,10);

	this.instance_9 = new lib.pag11temafin();
	this.instance_9.parent = this;
	this.instance_9.setTransform(27.1,31,1,1,0,0,0,7,5);

	this.instance_10 = new lib.pag12evaluacion();
	this.instance_10.parent = this;
	this.instance_10.setTransform(52,61,1,1,0,0,0,12,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

	// fondo
	this.btnground = new lib.btndefondo();
	this.btnground.parent = this;
	this.btnground.setTransform(475.1,270.2,1.001,1.096,0,0,0,474.6,251);
	this.btnground._off = true;
	new cjs.ButtonHelper(this.btnground, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnground).wait(1).to({_off:false},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 950,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.01,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1549381316352", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1549381316353", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1549381316353", id:"an.TextInput"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;