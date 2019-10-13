var canvas, stage, exportRoot;
function init_barra() {

	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	exportRoot = new lib.template_barra_canvas();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	//createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}