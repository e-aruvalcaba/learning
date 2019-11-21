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


(lib.cuadrotabla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F8F8").s("#CCCCCC").ss(2,1,1).rr(-55,-24.2,110,48.4,12);
	this.shape.setTransform(55,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrotabla, new cjs.Rectangle(-1,-1,112,50.4), null);


(lib.barratitulotemagr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Reportes de incidentes", "bold 25px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 30;
	this.text.lineWidth = 1049;
	this.text.parent = this;
	this.text.setTransform(27.1,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E71D46").s().p("EhdvAETIAAolMC7fAAAIAAIlg");
	this.shape.setTransform(600,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.barratitulotemagr, new cjs.Rectangle(0,0,1200,58), null);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnFFbIAAAAQgGgGAAgJIAAqXQAAgJAGgGQAGgGAIAAQAJAAAHAGQAGAGAAAJIAAJzQAAAGAEAEQAEAFAGAAINKAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAItuAAIAAAAQgIAAgGgGg");
	this.shape.setTransform(852.5,92.8,0.425,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFHDPIgBAAIiPgTIgCgCIABgDIAAAAIAkglQAFgEAAgGQAAgHgFgEIixiwQgEgEgGAAQgHAAgEAEIhgBgQgGAGgJAAQgJAAgGgGIAAAAIjZjXIAAAAQgGgGABgJQgBgJAGgGIAAAAQAHgGAJAAQAIAAAHAGIC+C/QAEAFAHAAQAGAAAEgFIBhhhIAAAAQAGgGAJAAQAIAAAHAGIgBAAIDKDKQAFAFAGAAQAGAAAFgFIAlglIAAAAIACgBQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIATCPIAAgBQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgBAAIAAAAg");
	this.shape_1.setTransform(853.7,92.8,0.425,0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAOIgUAUIgNgNIAVgVIgVgTIAOgOIATAUIAUgTIANANIgUATIAVAUIgOAOg");
	this.shape_2.setTransform(737.6,96.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhCDDQgKAAgGgGQgIgHAAgJIAAiwQAAgiAXgZQARgWAAgbIAAgaIgEgDQgEgFAAgGIAAgcQAAgGAEgFQAFgEAFAAIBZAAQAFAAAFAEIAAAAQAFAFAAAGIAAAcQAAAGgFAFIAAAAIgEADIAAAaQAAAbASAWQAWAZgBAiIAACwQAAAJgGAHQgGAGgKAAgAhJCtQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABQACACAEAAICGAAQACAAADgCIAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgWIiUAAgAhJCHICUAAIAAhqIiUAAgAgjhvQAAAhgUAaQgTAVABAcIAAARICUAAIAAgRQAAgcgRgVQgXgaAAghIAAgZIhGAAgAgriXIBWAAIAAgcIhWAAg");
	this.shape_3.setTransform(737.3,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAiC2QgDgEADgDIAAgBIAAAAQAJgOABgNQACgNgFgXQgFgWAAgKIAAgCIgCgCIgDAAIgCACQgJAOAAATQAAAEgDACIgBAAQgEACgCgDIgBAAQgSgWAAgiIAAgCIgCgCIgDAAQAAABAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgBAAQgTAkAVAoQACADgCADQgDADgEgBQgWgGgJgaIgCgCIgCAAIgCABIgBACQgIAjAXAcQAEAFgEAEQgDADgEgDIAAAAQg2grgMgtQgKgoAThGIAAAAQARg6gFgaIABgFIABAAQACgCAEABQAhALAHApQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIACABQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQASgYABgiQABgkgRgcIAAAAQgCgEADgDIAAAAQACgDAEABQApAQAWAmQAVAlgBAuIABACIAAAAIACACQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIACgCIgBAAQADgHACgSQACgRAAgOQAAgEAEgBQAEgBACADQA0A+gIBYQgHBdhIArIgDACIgEgCgAA6AxQACAEgDADIAAABQgIAKgBALQAAAKAEAUQAGAagCAOIAAACIACABIACABIABAAIABgBQAqgrAEhCIAAgBQAFg9gdg1IAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAIgCACIgBADIAAABQgFApgZASIAAAAQgDACgDgCQgDgCAAgDQAJgsgNgmQgMgpgggWIgCAAIgCABIgCABIAAADQALAigIAkQgJAkgZATQgDACgEgBQgDgCAAgEQAAgjgTgQIgDgBIAAAAIgCABIgBADQABAQgOA1QgPA1ACAhQADAkAbAfIACABIABAAIACAAIACgBIAAgBIAAgCQgFghAUgjIAAAAQACgEAEABQAFACAAADQAAARACAHIABACIADABIADgBIgBAAIABgDQgBgrAmggIABAAQAEgCADACQAEADgDAEIAAAAQgMAdAJAdIACACIgBAAIADAAIACAAIABgCIAAAAQAKgcAbgJIADAAQADAAACACg");
	this.shape_4.setTransform(619.8,88.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZAIQgDgBgCgBQgDgDAAgDQAAgCADgCQACgDADAAIAzAAQAIAAAAAHQAAAHgIABg");
	this.shape_5.setTransform(410.1,86.3,0.955,0.955);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAWIghggQgCgCAAgEQAAgDACgCQADgCADAAQADAAACACIAhAgQAFAGgFAFQgCACgEAAQgDAAgCgCg");
	this.shape_6.setTransform(409.3,97.3,0.955,0.955);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAXQgCgDAAgDQAAgDACgDIAgggQAGgFAFAFQACACAAADQAAADgCADIghAhQgCACgDAAQgDAAgCgCg");
	this.shape_7.setTransform(407.3,75.5,0.955,0.955);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAIQgIgBAAgHQAAgHAIAAIAzAAQADAAADADQACACAAACQAAADgCADQgDABgDABg");
	this.shape_8.setTransform(378,86.3,0.955,0.955);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAWQgFgFAFgGIAgggQADgCADAAQADAAACACQAFAFgFAGIghAgQgCACgDAAQgDAAgCgCg");
	this.shape_9.setTransform(378.9,97.3,0.955,0.955);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AALAXIggghQgCgDAAgDQAAgDACgCQAFgFAFAFIAhAgQACADAAADQAAADgCADQgCACgDAAQgEAAgCgCg");
	this.shape_10.setTransform(380.9,75.5,0.955,0.955);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVAhQgDgBgBgDQgCgDABgDQAIgaASgRQAJgIAIgDQADgBADABQADABABADQACAHgHADQgGADgIAGQgNANgHAWQgBAGgGAAg");
	this.shape_11.setTransform(388.3,83.4,0.955,0.955);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiNCbQgDAAgDgDQgCgEABgDIALgkQAFgQAVgHIAAiAQAAguAhghQAhghAtAAQAuAAAhAhQAhAhAAAuIAACAQAVAHAFAQIALAjIAAADQAAAIgHAAgACECMIgJgbQgBgFgHgFQgIgEgIAAIjFAAQgIAAgIAEQgHAFgBAFIgJAbIEHAAgAARhAQAHAHAAAKIAACDIBJAAIAAh+QAAgogcgdQgdgcgoAAQgnAAgdAcQgcAdAAAoIAAB+IBJAAIAAiDQAAgKAHgHQAHgIAJABQAKgBAHAIgAgGg1QgCACAAAEIAACDIARAAIAAiDQAAgEgCgCQgDgDgEgBQgDABgDADg");
	this.shape_12.setTransform(394.1,91.2,0.955,0.955);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("ACtCVIlZABICskrg");
	this.shape_13.setTransform(506.2,90.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgJBHIAAgUIATAAIAAAUgAgFAjIgFhpIAVAAIgFBpg");
	this.shape_14.setTransform(505.9,93.6);

	this.text = new cjs.Text("Información", "15px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(277,388);

	this.text_1 = new cjs.Text("Finanzas", "15px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 91;
	this.text_1.parent = this;
	this.text_1.setTransform(277,337.6);

	this.text_2 = new cjs.Text("Personas", "15px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 91;
	this.text_2.parent = this;
	this.text_2.setTransform(277,284.4);

	this.text_3 = new cjs.Text("Infraestructura", "15px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 104;
	this.text_3.parent = this;
	this.text_3.setTransform(278.1,233.1);

	this.text_4 = new cjs.Text("Productos y marcas", "15px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 17;
	this.text_4.lineWidth = 91;
	this.text_4.parent = this;
	this.text_4.setTransform(277,176.1);

	this.instance = new lib.cuadrotabla();
	this.instance.parent = this;
	this.instance.setTransform(856.6,397,1,1,0,0,0,55,24.2);

	this.instance_1 = new lib.cuadrotabla();
	this.instance_1.parent = this;
	this.instance_1.setTransform(856.6,345,1,1,0,0,0,55,24.2);

	this.instance_2 = new lib.cuadrotabla();
	this.instance_2.parent = this;
	this.instance_2.setTransform(856.6,293,1,1,0,0,0,55,24.2);

	this.instance_3 = new lib.cuadrotabla();
	this.instance_3.parent = this;
	this.instance_3.setTransform(856.6,241,1,1,0,0,0,55,24.2);

	this.instance_4 = new lib.cuadrotabla();
	this.instance_4.parent = this;
	this.instance_4.setTransform(856.6,189,1,1,0,0,0,55,24.2);

	this.instance_5 = new lib.cuadrotabla();
	this.instance_5.parent = this;
	this.instance_5.setTransform(740.6,397,1,1,0,0,0,55,24.2);

	this.instance_6 = new lib.cuadrotabla();
	this.instance_6.parent = this;
	this.instance_6.setTransform(740.6,345,1,1,0,0,0,55,24.2);

	this.instance_7 = new lib.cuadrotabla();
	this.instance_7.parent = this;
	this.instance_7.setTransform(740.6,293,1,1,0,0,0,55,24.2);

	this.instance_8 = new lib.cuadrotabla();
	this.instance_8.parent = this;
	this.instance_8.setTransform(740.6,241,1,1,0,0,0,55,24.2);

	this.instance_9 = new lib.cuadrotabla();
	this.instance_9.parent = this;
	this.instance_9.setTransform(740.6,189,1,1,0,0,0,55,24.2);

	this.instance_10 = new lib.cuadrotabla();
	this.instance_10.parent = this;
	this.instance_10.setTransform(624.6,397,1,1,0,0,0,55,24.2);

	this.instance_11 = new lib.cuadrotabla();
	this.instance_11.parent = this;
	this.instance_11.setTransform(624.6,345,1,1,0,0,0,55,24.2);

	this.instance_12 = new lib.cuadrotabla();
	this.instance_12.parent = this;
	this.instance_12.setTransform(624.6,293,1,1,0,0,0,55,24.2);

	this.instance_13 = new lib.cuadrotabla();
	this.instance_13.parent = this;
	this.instance_13.setTransform(624.6,241,1,1,0,0,0,55,24.2);

	this.instance_14 = new lib.cuadrotabla();
	this.instance_14.parent = this;
	this.instance_14.setTransform(624.6,189,1,1,0,0,0,55,24.2);

	this.instance_15 = new lib.cuadrotabla();
	this.instance_15.parent = this;
	this.instance_15.setTransform(508.6,397,1,1,0,0,0,55,24.2);

	this.instance_16 = new lib.cuadrotabla();
	this.instance_16.parent = this;
	this.instance_16.setTransform(508.6,345,1,1,0,0,0,55,24.2);

	this.instance_17 = new lib.cuadrotabla();
	this.instance_17.parent = this;
	this.instance_17.setTransform(508.6,293,1,1,0,0,0,55,24.2);

	this.instance_18 = new lib.cuadrotabla();
	this.instance_18.parent = this;
	this.instance_18.setTransform(508.6,241,1,1,0,0,0,55,24.2);

	this.instance_19 = new lib.cuadrotabla();
	this.instance_19.parent = this;
	this.instance_19.setTransform(508.6,189,1,1,0,0,0,55,24.2);

	this.instance_20 = new lib.cuadrotabla();
	this.instance_20.parent = this;
	this.instance_20.setTransform(392.6,397,1,1,0,0,0,55,24.2);

	this.instance_21 = new lib.cuadrotabla();
	this.instance_21.parent = this;
	this.instance_21.setTransform(392.6,345,1,1,0,0,0,55,24.2);

	this.instance_22 = new lib.cuadrotabla();
	this.instance_22.parent = this;
	this.instance_22.setTransform(392.6,293,1,1,0,0,0,55,24.2);

	this.instance_23 = new lib.cuadrotabla();
	this.instance_23.parent = this;
	this.instance_23.setTransform(392.6,241,1,1,0,0,0,55,24.2);

	this.instance_24 = new lib.cuadrotabla();
	this.instance_24.parent = this;
	this.instance_24.setTransform(392.6,189,1,1,0,0,0,55,24.2);

	this.instance_25 = new lib.cuadrotabla();
	this.instance_25.parent = this;
	this.instance_25.setTransform(276.6,397,1,1,0,0,0,55,24.2);
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_25.cache(-3,-3,116,54);

	this.instance_26 = new lib.cuadrotabla();
	this.instance_26.parent = this;
	this.instance_26.setTransform(276.6,345,1,1,0,0,0,55,24.2);
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_26.cache(-3,-3,116,54);

	this.instance_27 = new lib.cuadrotabla();
	this.instance_27.parent = this;
	this.instance_27.setTransform(276.6,293,1,1,0,0,0,55,24.2);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_27.cache(-3,-3,116,54);

	this.instance_28 = new lib.cuadrotabla();
	this.instance_28.parent = this;
	this.instance_28.setTransform(276.6,241,1,1,0,0,0,55,24.2);
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_28.cache(-3,-3,116,54);

	this.instance_29 = new lib.cuadrotabla();
	this.instance_29.parent = this;
	this.instance_29.setTransform(276.6,189,1,1,0,0,0,55,24.2);
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 204, 204, 204, 0)];
	this.instance_29.cache(-3,-3,116,54);

	this.text_5 = new cjs.Text("Crisis", "16px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 91;
	this.text_5.parent = this;
	this.text_5.setTransform(853.3,126.7);

	this.text_6 = new cjs.Text("Incidente elevado", "16px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 18;
	this.text_6.lineWidth = 91;
	this.text_6.parent = this;
	this.text_6.setTransform(738.3,117.7);

	this.text_7 = new cjs.Text("Incidente", "16px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 20;
	this.text_7.lineWidth = 91;
	this.text_7.parent = this;
	this.text_7.setTransform(624.3,126.7);

	this.text_8 = new cjs.Text("Advertencia", "16px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 91;
	this.text_8.parent = this;
	this.text_8.setTransform(506.3,126.7);

	this.text_9 = new cjs.Text("Alerta", "16px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 20;
	this.text_9.lineWidth = 91;
	this.text_9.parent = this;
	this.text_9.setTransform(392.3,126.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_15.setTransform(854.1,134.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFC000").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_16.setTransform(738.6,134.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_17.setTransform(623.1,134.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AFDA33").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_18.setTransform(507.6,134.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#49C4E8").s().p("AmtDyQh4AAAAh4IAAjzQAAh4B4AAINbAAQB4AAAAB4IAADzQAAB4h4AAg");
	this.shape_19.setTransform(392.1,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text01, new cjs.Rectangle(220.6,68.8,692,353.4), null);


(lib.MC_pag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Capa 3
	this.text = new cjs.Text("Todos los incidentes que caen dentro de la taxonomía se deben reportar.", "18px 'Arial'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 672;
	this.text.parent = this;
	this.text.setTransform(0.2,19.7);

	this.text_1 = new cjs.Text("¿Qué incidentes reportar?", "bold 16px 'Arial'");
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 624;
	this.text_1.parent = this;
	this.text_1.setTransform(1,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text}]},28).wait(1));

	// Capa 1
	this.instance = new lib.text01();
	this.instance.parent = this;
	this.instance.setTransform(257.9,241.3,1.133,1.133,0,0,0,257.9,241.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({x:157.9},0).to({scaleX:1,scaleY:1,x:197.9,alpha:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(215.6,45.9,783.8,400.2);


(lib.barratitulotema = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Capa 1
	this.instance = new lib.barratitulotemagr();
	this.instance.parent = this;
	this.instance.setTransform(600,-28,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:30},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-58,1200,58);


// stage content:
(lib.AC_IMCR_OV_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*Iniciar Tema Primer pagina:
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
		
		//HABILITA EL BOTON SIGUIENTE
		//parent.habilitarSiguiente();
		
		//DESHABILITA EL BOTON SIGUIENTE:
		//parent.deshabilitarSiguiente();
		
		//DESHABILITA EL BOTON ATRAS
		//parent.deshabilitarAtras();
		
		Si necesitas habilitar el siguiente con un retraso en ciertos segundos
		utiliza la siguiente funcion reemplazando seconds en la cantidad de segundos:
		parent.retrasar_habilitar_siguiente(seconds);
		*/
		//parent.habilitarSiguiente();
		
		
		/* PPARA MARCAR TEMA COMPLETADO :
		Esta instruccion tambien habilita el boton siguiente y si estan activadas las
		banderillas tambien muestra la banderilla de final tema.
		*/
		
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

	// barra titulo
	this.instance = new lib.barratitulotema();
	this.instance.parent = this;
	this.instance.setTransform(600,30,1,1,0,0,0,600,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// MC con contenido
	this.instance_1 = new lib.MC_pag1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(602,336.8,1,1,0,0,0,524,241.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,279.5,1200,599.4);
// library properties:
lib.properties = {
	width: 1200,
	height: 675,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;