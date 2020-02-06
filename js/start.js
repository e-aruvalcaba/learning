/*
E-Learning AnimateHTML5 programado por Adrian Ruvalcaba Garcia 
v1.0 salida a produccion: Enero 2019.
v2.0 terminada 20 Octubre 2019

E-Learning Animate HTML5 Template © Copyright and Disclaimer Notice:

Copyright ©2019. Adrian Ruvalcaba Garcia. All Rights Reserved. You do not have permission to use, copy, modify, and distribute this software and its documentation for educational, research, and not-for-profit purposes, without fee and without a signed licensing agreement, is hereby granted, provided that the above copyright notice, this paragraph and the following two paragraphs appear in all copies, modifications, and distributions. Contact Adrian Ruvalcaba Garcia on adrian.ruvalcaba.sistemas@hotmail.com or adrian.ruvalacaba@sistemas.tecsanpedro.edu.mx for commercial licensing opportunities.
IN NO EVENT SHALL REGENTS BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF REGENTS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
REGENTS SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE AND ACCOMPANYING DOCUMENTATION, IF ANY, PROVIDED HEREUNDER IS PROVIDED "AS IS". REGENTS HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.
*Other Notes: In 2020 was first published as well as any subsequent years when a modified version is published. Publication is defined in the U.S. and MX Copyright Act as the distribution or offer of distribution of a work to the public by sale or other transfer of ownership or by rental, lease, or lending. Since some keyboards or fonts cannot reproduce the © symbol, the symbol (c) may be used instead, although the latter will not always be accepted as a substitute for the former. Use of the symbol "©" in combination with certain other requirements affords copyright protection in some foreign countries.

*/
//Variables Globales
window.start = this;
// var NombreCurso = "ARCA_CONTINENTAL_OVERVIEW_ANIMATECC";
var termino = false;
var bloqueoSiguiente = false;
var banderillas = false;
var Rutas = new Array();
var Pag = new Array();
var PagTotal = 0;
var currentPagina = 0;
var TRAK = new Array();
var NombreModulos = new Array();
var Modulos = new Array();
var menu_open = false;
var bussy = false;
var fullscreen = false;
var Total;
var TRAKtmp = new Array();
var Evals = new Array();
var EvalID = 99; //no lleva eval
var EvalInProgress = false;
var ULTIMO = 0;
var Avance = 0;
var ONLINE = false;
var xmlGlosario = "xml/glosario.xml"
var IDActual = 0;
var URLactual = window.location;
var obj;
var _root = window.parent;
var timeline = 0;
var contador = 0;
//Al guardar un canvas puedes acceder a las funciones del archivo animate (en realidad no captas el canvas sino su archivo js)
var canvasContenido;
var estadoMenu = false;
var terminado = false;
var LastMCVid = false;
var VidLast = false;
var estadoSim = false;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var SCORE;
var OS;
var visibleSim;
var visibleVid;
var oportunidades = 0;
var intentoAct = 0;
var califMinima = 0;
//variables para el backdoor
var validar_control;
var validar_shift;
var backdoor = false;
var clave_backdoor = "123";
var clave_TerminarTema = "qwe";
var clave_eval = "asd";
var clave_borrar = "zxc";
//Terminan variables del backdoor
var Glosario_gpo = new Array();
var Glosario_pal = new Array();
var Glosario_desc = new Array();
var pagActual = 0; // pagina actual en la que se esta dentro del tema
var numPags = 0; // numero de paginas totales del tema
var controlAtras = false; // un controlador para retroceder
var NumPreguntas = 0; //se guarda el numero de preguntas de la evaluacion
var checkboxText = ""; //se guardan las eqituetas HTML para backdoor de EVAL
var controlEvalArray = 0; //controla las posiciones del arreglo de preguntas en EVAL (solo desde el start)
var controlIrUltimo = false; // controlador para que te mande a la ultima pagina del ultimo tema que visitaste
var contControlCheckbox = 0; //contador controlador para backdoor de evaluacion
var btnAtras;
var btnSiguiente;
var btnMenu;
var btnEval;
var btnHome;
var btnCerrar;
var EdoBtns = {
	btnAtras: true,
	btnSiguiente: true,
	btnMenu: true,
	btnEval: true,
	btnCerrar: true,
	btnHome: true,
	barra: true
};
var Temaslibre = false;
var btnArray = [];
var libre = false;
var tl = new TimelineMax();
var debug = false;
var myVar = setInterval(myTimer, 20);

window.onresize = function () {
	// Parte para la funcionalidad completa en el fullscreen para todos los navegadores.
	let maxHeight = window.screen.height,
		maxWidth = window.screen.width,
		curHeight = window.innerHeight,
		curWidth = window.innerWidth;

	if (maxWidth == curWidth && maxHeight >= (curHeight - 10) && maxHeight <= (curHeight + 10)) {
		fullscreen = true;
	} else {
		fullscreen = false;
	}

	if (fullscreen) {
		fullscreen = true;
		$(".contenedor").css("width", "100%");
	} else {
		fullscreen = false;
		$(".contenedor").css("width", "75%");
	}

	// Termina Parte para la funcionalidad completa en el fullscreen para todos los navegadores.

	if (debug) {
		console.log("--------------------------------------"); console.log($("#menuHTML").height());	// console.log($("#div_contenido").height());	// console.log("--------------------------------------");
	}
	// $("#menuHTML").height($("#div_contenido").height() - 30);
	// var nav = getBrowserInfo().split(" ")[0];
	var design = 80;
	if(getBrowserInfo().split(" ")[0] == "IE"){
		design = 95;
	}

	$("#menuHTML").height($("#div_contenido").height() - 30);
	$("#temasContainer").height($("#menuHTML").height() - design);
	$("#barraInferior").width($("#div_contenido").width());
	$("#mensajesHTML").width($("#div_contenido").width());
	$("#ultimoContainer").width($("#div_contenido").width());
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let diff = h - $("#content").height();
	$("#content").css("margin-top", (((diff / 2)).toString() + "px"));
}
/**
 * @param NA.
 * @returns boolean
 * @description Regresa true si el curso se esta corriendo en un navegador mobile o tablet.
 */
function detectarMovil() {
	var check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

/**
 * @param {*} tipo Tipo de alerta. {1} para mensaje siguiente. {2} para mensaje tema terminado.
 * @param {*} texto Texto que contendra la alerta al mostrarse.
 * @returns Void
 * @description Lanza las banderillas con texto para avisar al usuario que el tema/frame termino y hay que presionar siguiente.
 */
function alertas(tipo, texto) {
	switch (tipo) {
		case 1:
			texto = texto === "" || texto === null || texto === undefined || texto === NaN ? "Actividad Completada. Presione Siguiente para continuar..." : texto;
			mostrarSiguiente(texto);
			break;
		case 2:
			texto = texto === "" || texto === null || texto === undefined || texto === NaN ? "Tema Completado. Presione Siguiente para continuar..." : texto;
			mostrarTemaCompletado(texto);
			break;
	}
}

/**
 * @param NA
 * @returns Void
 * @description Inicializa la linea del tiempo de GSAP en el proyecto para el control correcto de las animaciones de las banderillas para presionar siguiente.
 */
function inicializaMensajes() {
	tl = new TimelineMax({ repeat: 0, onComplete: stopAlertas });
	tl.from($("#mensajesHTML"), 1, { opacity: 0, left: '400px' })
	tl.to($("#mensajesHTML"), 1, { opacity: 0, left: '400px', delay: 5 });
	$("#div_contenido").css("min-width", "800px");
	$("#temasContainer").css("padding-bottom", "36px");
}

/**
 * @param NA
 * @returns Void
 * @description Restablece las clases de los contenedores de las alertas y lo oculta.
 */
function stopAlertas() {
	tl.pause()
	if ($("#alertasContainer").hasClass("siguiente")) {
		$("#alertasContainer").removeClass("siguiente");
	}
	if ($("#alertasContainer").hasClass("completado")) {
		$("#alertasContainer").removeClass("completado");
	}
	$("#mensajesHTML").css("display", "none");
}
/**
 * @param {*}texto Texto a mostrar en la alerta
 * @returns void
 * @description Establece los valores para mostrar la alerta para el Siguiente Tema
 */
function mostrarSiguiente(texto) {
	$("#alertasContainer").addClass("siguiente");
	$("#mensajesHTML").css("display", "inline-block");
	$("#alertasContainer").html(texto);
	tl.restart();
}
/**
 * @param {*}texto Texto a mostrar en la alerta
 * @returns void
 * @description Establece los valores para mostrar la alerta para el Tema completado
 */
function mostrarTemaCompletado(texto) {
	$("#alertasContainer").addClass("completado");
	$("#mensajesHTML").css("display", "inline-block");
	$("#alertasContainer").html(texto);
	tl.restart();
}

/**
 * @param {*}jsonob Objeto Json con la configuracion del curso
 * @returns void
 * @description Crea dinamicamente los elementos mostrados en el menuHTML ademas les asigna su evento clic y los elementos como el titulo del curso evaluaciones etc.
 */
function populateMenu(jsonob) {
	let modulosbreak = [0, 1, 2, 7, 11, 17, 21, 26];
	// Agregar Nombre del Curso
	// 
	// $("#menuContainer").append("<div id='menuTitle' class='col-xs-12 menuTitle'>Menú del curso </div>");
	let consecutivo = 0;
	for (let index = 0; index < jsonob.Modulos.length; index++) {
		//pintar nombre de modulo1
		// if (NombreModulos[index] !== "" && NombreModulos[index] !== null && NombreModulos[index] !== undefined) {
		// 	//
		// 	$("#temasContainer").append("<div id='Modulo" + (index + 1) + "' class='col-xs-12 tituloModulo tituloTemaMenuNoIniciado'>" +
		// 		"<div class='col-xs-1'>" +
		// 		"<a	>" +
		// 		"<i class='fas fa-circle menuIconStyle'></i>" +
		// 		"</a>" +
		// 		"</div>" +
		// 		"<div class='col-xs-8' style='color:white'>" +
		// 		"<p class='reset' style='float: left; padding-top: 3px; padding-left: 0px; pointer-events:none'>" + NombreModulos[index] + "</p>" +
		// 		"</div>" +
		// 		"</div>");
		// } //end if Nombre para modulos
		//pintar Nombre del modulo
		for (let j = 0; j < jsonob.Modulos[index]['Mod' + (index + 1)].length; j++) {
			//pintar cada tema del modulo
			id = consecutivo; //onclick='alert('Modulo" + (consecutivo) + "')'
			if (modulosbreak.indexOf(j) !== -1) { //(j === 0) {
				$("#temasContainer").append("<div id='" + (consecutivo + 1) + "' onclick='llamarTema(" + (consecutivo) + ")' onmouseover='rollover(" + (consecutivo + 1) + ")' onmouseout='rollout(" + (consecutivo + 1) + ")' class='col-xs-12 tituloTemaMenu'>" +
					"<div class='col-xs-1' style='padding-top: 8px; padding-left:0px; padding-right:0px;'>" +
					"<a>" +
					"<i class='fas fa-circle menuIconStyle'></i>" +
					"</a>" +
					"</div>" +
					"<div class='col-xs-8' style='color:white; margin: 0px;padding-top: 7px; padding-left:0px;'>" +
					"<p class='reset' style='float: left; padding-top: 3px; padding-left: 0px; pointer-events:none; text-align:left'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
					"</div>" +
					"</div>");

			} else {
				$("#temasContainer").append("<div id='" + (consecutivo + 1) + "' style='padding-left: 30px;' onclick='llamarTema(" + (consecutivo) + ")' onmouseover='rollover(" + (consecutivo + 1) + ")' onmouseout='rollout(" + (consecutivo + 1) + ")' class='col-xs-12 tituloTemaMenu'>" +
					"<div class='col-xs-1' style='padding-top: 8px;'>" +
					"<a>" +
					"<i class='fas fa-circle menuIconStyle'></i>" +
					"</a>" +
					"</div>" +
					"<div class='col-xs-8' style='color:white; margin: 0px;padding-top: 7px; padding-left:0px;'>" +
					"<p class='reset' style='float: left; padding-top: 3px; padding-left: 0px; pointer-events:none; text-align:left'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
					"</div>" +
					"</div>");
			}
			// $("#temasContainer").append("<div id='" + (consecutivo + 1) + "' onclick='llamarTema(" + (consecutivo) + ")' onmouseover='rollover(" + (consecutivo + 1) + ")' onmouseout='rollout(" + (consecutivo + 1) + ")' class='col-xs-12 tituloTemaMenu'>" +
			// 	"<div class='col-xs-1' style='padding-top: 8px'>" +
			// 	"<a>" +
			// 	"<i class='fas fa-circle menuIconStyle'></i>" +
			// 	"</a>" +
			// 	"</div>" +
			// 	"<div class='col-xs-8' style='color:white; margin: 0px;padding-top: 7px;'>" +
			// 	"<p class='reset' style='float: left; padding-top: 3px; padding-left: 0px; pointer-events:none'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
			// 	"</div>" +
			// 	"</div>");
			consecutivo++;
			if (debug) {
				console.log(jsonob.Modulos[index]['Mod' + (index + 1)][j]);
			}
		}// end for Temas

		// Pintar las evaluaciones
		// if (jsonob.Evaluaciones.length > 0) { // Exists evals on object??		
		// 	for (let t = 0; t < jsonob.Evaluaciones.length; t++) {
		// 		if (jsonob.Evaluaciones[t]["Aplica"] === true && jsonob.Evaluaciones[t]["Modulo"] === (index + 1)) {// Si aplica y es para el modulo que se esta recorriendo se genera 
		// 			let NombreEvaluacionActual = jsonob.Evaluaciones[t]["Nombre"] !== "" &&
		// 				jsonob.Evaluaciones[t]["Nombre"] !== undefined &&
		// 				jsonob.Evaluaciones[t]["Nombre"] !== null &&
		// 				jsonob.Evaluaciones[t]["Nombre"] !== NaN ? Evals[t]["Nombre"] : "Modulo " + index + ": Evaluacion";
		// 			let Evalid = jsonob.Evaluaciones[t]["ID"];

		// 			$("#temasContainer").append("	<div id='Evaluacion" + Evalid + "' onclick='llamarEval(" + (jsonob.Evaluaciones[t]["ID"]) + ")' class='col-xs-12 tituloTemaMenu menuTemaDisabled'>" +
		// 				"<div class='col-xs-1' style='padding-top: 8px'>" +
		// 				"<a>" +
		// 				"<i class='fas fa-circle menuIconStyle'></i>" +
		// 				"</a>" +
		// 				"</div>" +
		// 				"<div class='col-xs-8' style='color:white; margin: 0px;padding-top: 7px;'>" +
		// 				"<p class='reset' style='float: left; padding-top: 3px; padding-left: 0px; pointer-events:none'>" + NombreEvaluacionActual + "</p>" +
		// 				"</div>" +
		// 				"</div>");
		// 		}// if eval apply
		// 	}//end for evals			
		// }// end if evals exists
	}//End Main For
}// end PopulateMenu function

/**
 * @param nMod:Number Numero del modulo
 * @returns void
 * @description Habilita las evaluaciones de cada modulo cuando se completa
 */
function habilitarEvals(nMod) {
	for (let index = 0; index < Evals.length; index++) {
		if (Evals[index]["Modulo"] == nMod) {
			if ($("#Evaluacion" + (nMod + 1)).hasClass("menuTemaDisabled")) {
				$("#Evaluacion" + (nMod + 1)).removeClass("menuTemaDisabled").addClass("menuTemaDesbloqueado")
			}
		}
	}
}
/**
 * @param id:Number
 * @returns void
 * @description Crea el rollover en el icono que le pertenece al tema con el id que recibe. 
 */
function rollover(id) {
	// TweenMax.to($("#"+id).find("i"), 0.2, { scaleX: 1.8, scaleY: 1.8, ease: Back.easeOut, delay: 0.35 })
	// $("#" + id).find("i").css("font-size", "9px");
}
/**
 * @param id:Number
 * @returns void
 * @description  Crea el rollout en el icono que le pertenece al tema con el id que recibe.
 */
function rollout(id) {
	// $("#" + id).find("i").css("font-size", "6px");
	// TweenMax.to($("#"+id).find("i"), 0.2, { scaleX: 1, scaleY: 1, ease: Back.easeOut, delay: 0.2 })
}
/**
 * @param id:Number
 * @returns void
 * @description Carga el tema en el iframe contenido basandose en el id que recibe. 
 */
function llamarTema(id) {
	ir(id);
	llamar_menuHTML();
}
/**
 * @param id:Number
 * @returns void
 * @description Carga la evaluacion el iframe contenido basandose en el id que recibe. [Funcion para multi evaluaciones]
 */
function llamarEval(id) {
	var iframe = document.getElementById("Contenido");
	if (debug) {
		console.log("temas/" + obj.NombreEval + ".html");
	}
	iframe.src = "temas/" + obj.NombreEval + ".html";
	terminado = true; // la variable de curso terminado se habilita
	iframe.onload = function () {
		$('#div_contenido').fadeIn();
	};
	llamar_menuHTML();

}
/**
 * @param NA
 * @returns void
 * @description Obtiene la informacion del navegador en el cual esta corriendo el contenido.
 * se confirma en que navegador se esta viendo el curso
 */
var getBrowserInfo = function () {
	var ua = navigator.userAgent,
		tem,
		M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE ' + (tem[1] || '');
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
		if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
	return M.join(' ');
};

if (debug) {
	console.log("el navegador usado y la version son");
	console.log(getBrowserInfo());
	console.log(getBrowserInfo().split(" ")[0]);
}
function initialize() {

	if (!detectarMovil()) { //bloquear curso si se detecta un navegador mobile 
		// var myVar = setInterval(myTimer, 30);
		setTimeout(inicializar, 2000);
		setTimeout(function () {
			clearInterval(myVar);
		}, 1999);
		window.onresize();
	} else {
		//Bloquear curso
		$("#blocked").html("Este curso no es compatible con navegadores moviles, favor de lanzarlo en PC o Laptop. Error code: x00001");
		$("#coursebl").css("display", "block");
	}
}
function myTimer() {
	document.getElementById("loaderText").innerHTML = "Cargando <br /> <br /> " + contador + "%";
	if (contador < 100)
		contador++;
}
function inicializar(myVar) {
	// Ocultar loader
	$("#loader-wrappler").remove();
	window.clearInterval(myVar)
	InitApi();
}
/**
 * @param NA
 * @returns void
 * @description Inicializa la aplicacion.
 * Función para iniciarlizar API
 *  */
function InitApi() {
	if (debug) {
		console.log("------Inicializacion------");
	}
	getAPI(); //Inicializa el API para el uso de las funciones con SCORM que se encuentran en api.JS.
	IdentificarEstado();
	// Setear el height del menu html igual al tamaño del contenido.
	document.getElementById("menuHTML").style.height = (document.getElementById("div_contenido").style.height - 30) + 'px';
	$("#menuHTML").height($("#div_contenido").height() - 30);
	$("#ultimoContainer").width($("#div_contenido").width() + 3);
	// let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let diff = h - $("#content").height();
	$("#content").css("margin-top", ((diff / 2).toString() + "px"));
}
/**
 * @param NA
 * @returns void
 * @description Identifica la plataforma de ejecucion del contenido [Local/Online].
 * Función para validar si se navega de manera local o en linea
 *  */
function IdentificarEstado() {
	if (debug) {
		console.log("------Identificado la Ejecucion del Curso------");
	}
	//se determina si el curso corre en local o en lineahttp://clientes.cdilearning.com/
	if (String(URLactual).indexOf("http://localhost") == 0 || String(URLactual).indexOf("lumicmedia.com") > 0 || String(URLactual).indexOf("clientes.cdilearning.com") > 0) {
		leeLocal();
		ONLINE = false;
	} else {
		if (String(URLactual).indexOf("http") == 0) {
			leeOnline();
			ONLINE = true;
			//Esta funcion esta en el API.JS se llama y llena la variable sData
			new_nswf_DoFSCommand("getParam", "");
		} else {
			leeLocal();
			ONLINE = false;
		}
	}
}
/**
 * @param JSON Config
 * @returns void
 * @description Obtiene y establece los datos contenidos en el archivo de configuraciones para su uso global.
 * @legacy aqui se colocan todos los archivos SWF que se veran en el curso
 *  */
function initConfig(jsonob) {
	if (debug) {
		console.log("numero de modulos:" + jsonob.Modulos.length / 2);
	}
	let numModulos = jsonob.Modulos.length;
	let indexRutas = 0; // el index de rutas es el segundo objeto en modulos por eso empieza en 1
	let index = 0; // index general en 0

	for (let i = 0; i < jsonob["Rutas"].length; i++) {//New Rutas obtaining method
		for (var j = 0; j < (jsonob["Rutas"][i]["Rut" + (i + 1)]).length; j++) { //recorre el objeto por modulo

			Rutas.push((jsonob["Rutas"][i]["Rut" + (i + 1)])[j]); // se guardan en un arreglo
			index++;
		}
		// Rutas[i] = jsonob["Rutas"][i]["Rut" + indexRutas][j];
		// indexRutas++;
	}
	Total = Rutas.length; // total de rutas/temas
	TotalArchivos = Rutas.length; // se guarda el total de los archivos no borrar!  
	if (debug) {
		console.log("Dato de las rutas: ");
		console.log(Rutas);
		console.log("json trak es:  " + jsonob.Trak);
	}
	initbarra(jsonob);
	$("#NombreDelCurso").html(jsonob.NombreCurso);

	if (ULTIMO > 1 || (ULTIMO === 1 && TRAK[0] == 2)) {
		mostrarUltimo();
	}
}

function llamarRetros() {

}
/**
 * @param NA
 * @returns void
 * @description Actualiza el texto de la barraHTML que muestra el total de temas completados / total temas del curso
 */
function actualizaTemasTerminados() {
	let text = currentPagina + "/" + PagTotal;
	actualizarProgressBarCDI();
	return $("#numTemasCompletados").html(text);
}
/**
 * @param NA
 * @returns void
 * @description Actualiza la barra de progreso que se encuentra en la barraHTML basandose en el avance del trak global.
 */
function actualizarProgressBar() {

	// let total = 100 / TRAK.length;
	// let progress = 0;
	// for (let index = 0; index < TRAK.length; index++) {
	// 	if (TRAK[index] > 1) {
	// 		progress += total;
	// 	}
	// }
	// $("#progressBar").css("width", progress + "%");
	// $("#percent").html(progress.toFixed(0) + "%");
}
/**
 * @param NA
 * @returns void
 * @description Actualiza la barra de progreso que se encuentra en la barraHTML basandose en el avance del trak global.
 */
function actualizarProgressBarCDI() {
	let progress = ((currentPagina * 100) / PagTotal);
	$("#progressBar").css("width", progress + "%");
	$("#percent").html(progress.toFixed(0) + "%");
}

/**
 * @param NA
 * @returns void
 * @description Lee los datos del curso almacenados en el LOCAL STORAGE del navegador. Se ejecuta cuando el curso no esta en un servidor web.
 */
function leeLocal() {
	if (debug) {
		console.log("lee local");
	}
	var localStor = leeLocalStorage();
	//Si el local Storage esta vacio o no existe, entonces crea el json a partir de el excel 'configuration.xlsx'
	if (localStor == undefined || localStor == "") {
		if (debug) { console.log("No existe un Informacion"); }
		obj = $.parseJSON(ConfigurationJson);
	} else { // en caso de que ya exista algun guardado
		if (debug) { console.log("Ya existe Informacion"); }
		obj = $.parseJSON(localStor);
	}
	if (debug) {
		console.log("Asignacion de valores");
		console.log(JSON.stringify(obj));
	}
	setValues(obj);
	initConfig(obj);
	cargarPortada();
}
/**
 * @param {*}ob Objeto JSON de configuracion del curso.
 * @returns void
 * @description Establece los valores contenidos en el objeto JSON del curso que fue leido previamente del LocalStorage o el CMI SuspendData del LMS y los asigna a objetos locales para trabajarlos.
 */
function setValues(ob) {
	ULTIMO = ob.Ultimo;
	Avance = ob.Avance;
	oportunidades = ob.Evaluaciones[0].MaxIntentos; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	intentoAct = ob.Evaluaciones[0].IntentoActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	SCORE = ob.Evaluaciones[0].CalActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	califMinima = ob.Evaluaciones[0].CalMinima; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	TRAK = ob.Trak;
	if (TRAK.length === 0 || TRAK === undefined || TRAK === null || TRAK === NaN) {
		for (let i = 0; i < ob.Pag.length; i++) {
			TRAK.push(0);
		}
	}
	Pag = ob.Pag;
	libre = ob.Libre;
	NombreModulos = ob.NombreModulos;
	Modulos = ob.Modulos;
	Evals = ob.Evaluaciones; //New implemented feature multi eval

	for (let i = 0; i < ob.Pag.length; i++) {
		PagTotal += parseInt(ob.Pag[i]);
	}
}
/**
 * @param NA
 * @returns void
 * @description Actualiza los valores al objeto JSON que fue leido al iniciar el curso desde el LOCAL STORAGE o el CMI SUSPEND DATA del LMS para volverlo a almacenar.
 */
function setObject() {

	obj.Trak = TRAK;
	obj.Ultimo = ULTIMO;
	obj.Evaluaciones[0]["CalActual"] = SCORE; //Will be deprecated, not functional for multiple evals::: SCORES MUST BE AN ARRAY
	obj.Evaluaciones[0]["MaxIntentos"] = oportunidades;  //Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	obj.Evaluaciones[0]["IntentoActual"] = intentoAct;  //Will be deprecated, not functional for multiple evals MUST BE AN ARRAY
	obj.Evaluaciones[0].CalMinima = califMinima;  //Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	obj.Libre = libre;
	obj.Avance = Avance;
}

/**
 * @param NA
 * @returns void
 * @description Lee los datos del curso almacenados en el local storage.
 */

function leeLocalStorage() {
	var retorno;
	try {
		var nav = getBrowserInfo().split(" ")[0];
		if (nav == "IE") {
			if (debug) {
				console.log("leyendo cookie");
			}
			retorno = (document.cookie.indexOf('data=') === -1 ? '' : ("; " + document.cookie).split('; data=')[1].split(';')[0]);
		} else {
			if (debug) { console.log("leyendo LocalStorage"); }
			retorno = window.localStorage.getItem(NombreCurso);
		}
	} catch (e) {
		console.log("error al leer local storage:" + e.text);
	}
	return retorno;
}
/**
 * @param NA
 * @returns void
 * @description Establece los datos manejados en el curso a una llave del LOCAL STORAGE del navegador. (Si el navegador usado es Internet Explorer, guarda los datos en una cookie)
 */

function guardaLocalStorage(clave) {
	try {
		var nav = getBrowserInfo().split(" ")[0];
		if (nav == "IE") {
			if (debug) { console.log("se guarda en cookie"); }
			var expiration_date = new Date();
			expiration_date.setFullYear(expiration_date.getFullYear() + 1);
			document.cookie = "data=" + JSON.stringify(clave) + "; expires=" + expiration_date.toGMTString();
		} else { //Fixed para chrome
			if (debug) { console.log("se guarda en LocalStorage"); }
			window.localStorage.setItem(NombreCurso, JSON.stringify(clave));

		}
	} catch (e) {
		console.log("no pudo guardar archivos en local storage:" + e.text);
	}
}
/**
 * @param NA
 * @returns void
 * @description Al parecer es para imprimir un iframe. ESTA FUNCION ES LEGACY NO SE UTILIZARA.
 */

function imprimirIframe() {
	if (debug) { console.log("imprime"); }
	window.frames["Contenido"].focus();
	window.frames["Contenido"].print();
}

/*
//Funcion para mostrar un mensaje, SWAL desde animate
function PopUp(texto, titulo, icono) {
    var efecto = "";
    if (icono == "error") {
        efecto = 'animated shake';
    } else {
        efecto = 'animated zoomIn';
    }
    swal({
            html: '<i>' + texto + '</i>',
            title: '<i>' + titulo + '</i>',
            type: '' + icono + '',
            animation: false,
            customClass: efecto,
            allowOutsideClick: false,
            confirmButtonColor: '#008000',
            confirmButtonText: '<i>OK!</i>',
            reverseButtons: true
        })
        .then((result) => { // result captura el resultado
            /*
            aqui el codigo a realizar al clickear cualquier boton del swal
            adelante habra mas ejemplos menos comentados con respecto al uso de swal
            todo lo que necesitas saber esta en https://sweetalert2.github.io/
            ojo! sweetAlert es diferente a sweetAlert2 que es el que usamos
            */
/*
        });

}
*/

/**
 * @param NA
 * @returns void
 * @description Lee los datos almacenados en el CMI SUSPEND DATA del LMS haciendo uso de la API SCORM 1.2.
 *  */
function leeOnline() {
	if (debug) {
		console.log("LEE ONLINE");
		console.log("regresoLMS " + regresoLMS);
	}
	regresoLMS = ComunicacionLMS("leer"); //Recuperar el suspend_data del LMS
	/*
	si es la primera vez que entra al curso el suspenData estara vacio
	de ser asi la informacion que se leera sera la del json generado por excel
	*/
	if (regresoLMS == "" || regresoLMS == undefined) {
		if (debug) { console.log("suspent data vacio, generando json"); }
		obj = $.parseJSON(ConfigurationJson);
	} else {
		if (debug) { console.log("suspend data diferente a vacio"); }
		var jsonObj = regresoLMS;
		obj = $.parseJSON(jsonObj);
	}
	if (debug) { console.log(obj); }
	//Guardar el contenido recuperado del LMS en las variables locales.
	setValues(obj);
	initConfig(obj);
	cargarPortada();
}
/**
 * @param NA
 * @returns void
 * @description Guarda los datos del curso en el LOCAL STORAGE o el CMI SUSPEN DATA segun sea el caso.
 */
function guardarDatos() {
	setObject(); // se llama la funcion pára guardar los datos en el Json
	if (ONLINE) {
		if (debug) {
			console.log("guardando datos online");
			console.log("json-generando");
		}
		var jsonObj = JSON.stringify(obj);
		//Guardar en el suspend data
		ComunicacionLMS("guardar", jsonObj);
	} else { //guarda los datos en local storage
		if (debug) {
			console.log("guardando datos local");
		}
		guardaLocalStorage(obj);
	}
}
/**
 * @param NA
 * @returns void
 * @description Limpia el iframe del contenido.
 */
function limpiarContenido() {
	if (debug) {
		console.log("**********************limpiarContenido");
		// console.log(contenido.src);
	}
	let contenido = document.getElementById("Contenido");
	contenido.src = "*";
}
/**
 * @param {*}id ID del tema a cargar
 * @returns void
 * @description Carga el contenido especificado por el parametro ID y lo carga en el div contenido del template.
 */
function ir(id) {
	// 
	if (menu_open) {
		llamar_menuHTML();
	}
	if (debug) {
		console.log("********", ULTIMO, id, TRAK[id]);
		console.log("**********************IR");
		console.log("ir " + id);
	}
	limpiarContenido();

	let iframe = document.getElementById("Contenido");
	iframe.src = Rutas[id];
	iframe.onload = function () {
		$('#div_contenido').fadeIn();
	};
	_root.IDActual = id;
	// if(IDActual > 0){
	// 	_root.ULTIMO = id;
	// }

	//calcular la pagina donde esta parado el usuario
	recalcularPaginaActual(id);

	if (debug) { console.log("IDActual: ", _root.IDActual, " ULTIMO: ", _root.ULTIMO); }
	if (canvasContenido) {
		reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
	}
	// else{
	// 	console.log("No se encontro")
	// 	iframe.src = "temas/NoFound.html"
	// }
	actualizaTemasTerminados();
}
/**
 * @param {*}newID	ID del tema que se esta cargando. 
 * @returns void
 * @description Recalcula la pagina actual en la que esta navegando el usuario basandose en el id del tema a cargar.
 */
function recalcularPaginaActual(newID) {
	// 
	let nPag = 1;
	for (let i = 0; i < newID; i++) {
		nPag += parseInt(Pag[i]);
	}
	currentPagina = nPag;
}
/**
 * @param {*}Canvas	Canvas del Tema a iniciar. 
 * @returns void
 * @description Ejecuta las funciones necesarias para registrar el inicio de un tema. Colocar esta funcion en el primer frame de cada tema.
 */
function iniciar_tema(canvasTema) {
	debugger
	let reset = true; //valida si el usuario esta entrando el 
	try {
		let resp = obtenerFramePorPagina(_root.ULTIMO);
		if (debug) { console.log("inicio_tema", _root.IDActual); }

		getCanvas(canvasTema);

		// Parche para entrar desde atras de un tema
		if (canvasContenido.timeline.duration > 1 && resp[1] == canvasContenido.timeline.duration) {
			canvasContenido.gotoAndStop(resp[1] - 1);
		}
		
		//se cambia el estado del tema a 1 lo que significa "tema iniciado"
		if (TRAK[IDActual] < 1) {
			TRAK[IDActual] = 1;
		}
		//en caso de venir desde la opcion de ultimo tema, va a la ultima pagina visitada
		if (controlIrUltimo) {
			if (debug) { console.log("llendo a la ultima pagina desde reset_navegacion"); }
			console.log("Frame al que navegara: " + resp[1])
			// canvasContenido.gotoAndPlay(resp[1]-1); // esto funcionaba para TMR no tengo idea
			if (resp[0] === EvalID) { //25 xk es el id de la evaluacion no la pagina
				EvalInProgress = true;
			}
			if (!EvalInProgress) {
				if (resp[1] > 1) {
					canvasContenido.gotoAndStop(resp[1] - 1);
				}

				reset_navegacion(resp[1] - 1, canvasContenido.timeline.duration);
				reset = false;
			}
			controlIrUltimo = false;
		}
		//si entra desde un tema adelante con el boton de atras o desde la opcion de ultimo tema ...lo manda a la ultima pagina
		// if (controlAtras || controlIrUltimo) {
		if (controlAtras) {

			if (debug) { console.log("entro a control atras"); }
			// canvasContenido.gotoAndStop(Pag[IDActual]);
			// canvasContenido.gotoAndStop(canvasContenido.timeline.duration-1); //esto funcionaba par tmr no tengo idea
			let frame = canvasContenido.timeline.duration;
			if (resp[0] === (EvalID + 1)) {
				EvalInProgress = true;
			}
			if (EvalInProgress == false) {
				if (canvasContenido.timeline.duration > 1) {
					canvasContenido.gotoAndPlay(frame - 1);
				}
			}
			controlAtras = false;
		}
		if (_root.ULTIMO >= _root.currentPagina) {
			habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "h", "iniciar_tema");
		}
		// ULTIMO = IDActual;
		if (IDActual !== 0) {
			// _root.ULTIMO = _root.IDActual; // se actualiza el ultimo tema
			_root.ULTIMO = _root.currentPagina; // se actualiza el ultimo tema			
		}
		_root.Avance = _root.currentPagina > _root.Avance ? _root.currentPagina : _root.Avance;
		// actualizarNavegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
		guardarDatos();
		if (debug) { console.log("fin inicio tema"); }

	} catch (error) {
		if (debug) { console.warn("Error iniciando tema: " + error); }
	}
	actualizar_menuHTML(TRAK);

	if (reset) {
		reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
	}
}
function obtenerFramePorPagina(pagDestino) {
	// 
	let sum = 0;
	let antSum = 0;
	for (let i = 0; i < obj.Pag.length; i++) {
		sum += parseInt(obj.Pag[i]);
		if (pagDestino >= antSum && pagDestino <= sum) {

			let ret = [];
			ret[0] = i;
			ret[1] = pagDestino - antSum;
			return ret;
		}
		antSum = sum;
	}
}
/**
 * @param NA
 * @returns void
 * @description Ejecuta las funciones necesarias para registrar el final de un tema.  
 */
function final_tema() {
	if (debug) { console.log("*********************FINAL TEMA", _root.IDActual); }
	//el estado del tema se cambia a 2 lo que significa "terminado"
	if (TRAK[IDActual] < 2) {
		TRAK[IDActual] = 2;
	}
	if (IDActual > 0) {
		_root.ULTIMO = _root.currentPagina; // se actualiza el ultimo tema
	}
	_root.Avance = _root.currentPagina > _root.Avance ? _root.currentPagina : _root.Avance;
	if (debug) { console.log(_root.ULTIMO, _root.IDActual, TRAK, TRAK[_root.IDActual]); }
	//activar boton siguiente
	habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "h", "final_tema")
	actualizar_menuHTML(TRAK); // actualizar el menu
	guardarDatos();
	actualizarProgressBar();
	if (banderillas) {
		alertas(2, "Tema Completo. Haz Clic en Siguiente para continuar.")
	}
	console.log(" Curso Completado " + cursoCompletado());
}
/**
 * @param {*}time Tiempo en segundos para llamar la finalizacion de un tema. 
 * @returns void
 * @description Ejecuta las funciones necesarias para registrar el final de un tema con un retraso en segundos del valor recibido.  
 */
function retrasar_final_tema(seconds) {
	if (debug) { console.log("*********************FINAL TEMA", _root.IDActual + " retrasado por " + seconds); }
	if (typeof seconds === 'number') { return }
	seconds = seconds > 0 ? seconds : 1;
	setTimeout(final_tema, seconds * 1000);
}
/**
 * @param {*}time Tiempo en segundos para llamar la habilitacion del boton siguiente y su banderilla correspondiente. 
 * @returns void
 * @description Ejecuta las funciones necesarias para habilitar el boton siguiente y mostrar la alerta siguiente retrasado en segundos por el numero que se envie .  
 */
function retrasar_habilitar_siguiente(seconds) {
	if (debug) { console.log("-habilitar siguiente retrasado por " + seconds); }
	if (typeof seconds === 'number') { return }
	if (banderillas) {
		alertas(1, "Da clic en siguiente para continuar.");
	}
	seconds = seconds > 0 ? seconds : 1;
	setTimeout(habilitarSiguiente, seconds * 1000);
}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Lanza el Glosario
 */
function glosarioX() {
	var iframe = document.getElementById("glosario");
	iframe.src = "temas/" + obj.NombreIntro + ".html";
	var g = document.getElementById('btnGlos');
	g.click();
}
/**
 * @param NA
 * @returns void
 * @description Carga el ultimo tema visitado por el usuario
 */
function irUltimo() {
	let resp = obtenerFramePorPagina(ULTIMO);
	ir(resp[0]);
	controlIrUltimo = true;
	cerrarUltimo();
	currentPagina = ULTIMO;
	actualizaTemasTerminados();
}
/**
 * @param NA
 * @returns void
 * @description Oculta el contenedor del mensaje para el punto de retorno (deseas ir al ultimo tema visitado?)
 */
function cerrarUltimo() {
	$("#ultimoContainer").css("display", "none");
}
/**
 * @param NA
 * @returns void
 * @description Muestra el contenedor del mensaje para el punto de retorno (deseas ir al ultimo tema visitado?)
 */
function mostrarUltimo() {
	$("#ultimoContainer").css("display", "block");
	TweenLite.from($("#ultimoContainer"), 1, { opacity: 0 });
}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Cierra el modal de la palabra seleccionada en el glosario
 */
function Cierra() {
	$('#Palabra').hide();
}
/**
 * @param {*}URLS Pendiente
 * @param {*}finalizoS Pendiente
 * @param {*}LASTMCS Pendiente
 * @returns void
 * @description FUNCION LEGACY ::|:: Carga la simulacion en el div contenido.
 */
window.Cargar_Sim = function (URLS, finalizoS, LASTMCS) {
	if (debug) { console.log("cargar Sim"); }
	setEdo_botones(); //llama la funcion para guardar el estado de los botones
	this.habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnCerrar), "d", "Cargar_Sim");
	estadoSim = true;
	$('#div_contenido').hide();
	$('#div_sim').fadeIn();
	var simulacion = document.getElementById("sim");
	simulacion.src = URLS;
	if (debug) { console.log("Fin cargar Sim"); }
	LastMCVid = LASTMCS;
	if (finalizoS) { //con esto sabemos si es la ultima simulacion
		VidLast = true;
	}
}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Habilita el boton cerrar al terminar la simulacion
 */
function simFinalizada() {
	if (debug) { console.log("termina la simulacion"); }
	canvasBarra.habilitar_cerrar();
}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Carga un video en el iframe video
 */
window.cargar_video = function (URLS, finalizoS, LASTMCS) {
	if (debug) { console.log("cargar video"); }
	setEdo_botones();
	this.habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnCerrar), "d", "cargar_video");
	LastMCVid = LASTMCS;
	estadoSim = true;
	$('#div_contenido').hide();
	$('#div_vid').fadeIn();
	var simulacion = document.getElementById("vid");
	simulacion.src = URLS;
	simulacion.onended = function () {
		if (debug) { console.log("finalizo? desde start " + finalizoS); }
		// canvasBarra.habilitar_cerrar();
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnCerrar), "h", "Cargar_Sim");
		if (finalizoS) {
			VidLast = true;
		}
	};
	if (debug) { console.log("Fin cargar video"); }
}

/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Funcion para cerrar evaluacion
 */
function Cierra_Sim() {
	if (estadoSim == false) { //esta activa la simulacion?
		llamarAlertas("Exit");
	} else {
		//En caso de haber simulación activa, cierra la simulación
		if (debug) { console.log("cierra sim"); }
		$('#div_sim').hide();
		$('#div_vid').hide();
		$('#div_contenido').fadeIn();
		limpiarSim();
		//se habilita el boton atras
		canvasBarra.habilitar_atras();
		//el boton regresa a su icono de cerrar
		canvasBarra.cambio_cerrar(0);
		getEdo_botones();

		if (VidLast) {
			if (LastMCVid) {
				//es el ultimo MC por lo tanto manda siguiente verde
				siguiente_verde();
				final_tema();
			} else {
				//no es el ultimo MC por lo tanto manda siguiente naranja
				siguiente_naranja();
			}
		}
		LastMCVid = false;
		VidLast = false;
	}
}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Revisa el curso completado.
 */
function checarTerminacion() {
	//revisar si ya se termino el curso
	var creditosActuales = 0;
	var creditosMinimos = TRAK.length * 2;
	for (var i = 0; i < TRAK.length; i++) {
		creditosActuales += TRAK[i];
	}
	if (debug) { console.log("creditosMinimos: " + creditosMinimos + "\ncreditosActuales: " + creditosActuales + ""); }
	if ((creditosMinimos == creditosActuales)) {
		if (debug) { console.log("El curso ya fue terminado, Evaluacion Desbloqueada"); }
		canvasBarra.habilitar_eval();
		termino = true;
	} else {
		if (!backdoor) {
			if (debug) { console.log("un no se ve todo el curso, Evaluacion Bloqueada"); }
			canvasBarra.deshabilitar_eval();
		}
		if (debug) { console.log("el backdoor esta activo, Evaluacion Desbloqueada"); }
		canvasBarra.habilitar_eval();
	}
}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Limpia el estado de control de las simulaciones y los contenedores de simulaciones y videos
 */
function limpiarSim() {
	if (debug) { console.log("limpiarSim"); }
	estadoSim = false;
	var sim = document.getElementById("sim");
	sim.src = "";
	var vide = document.getElementById("vid");
	vide.src = "";
}
/**
 * @param Valor Canvas del contenido
 * @returns void
 * @description FUNCION LEGACY ::|:: Obtiene el canvas del contenido
 */
function getCanvas(valor) {
	if (debug) { console.log("Obtener Canvas"); }
	canvasContenido = valor;
}
/**
 * @param Valor Canvas del contenido
 * @returns void
 * @description Muestra / Oculta el menuHTML
 */
function llamar_menuHTML() {
	if (!bussy) {
		if (!menu_open) {
			$("#menuHTML").addClass("menu-open");
			// TweenLite.from($("#menuHTML"), 0.3, { opacity: 0, left: '-400px' });
			TweenLite.from($("#menuHTML"), 0.3, { opacity: 0, top: '1400px' });
			this.menu_open = true;
			setMenuBlur(true);
			let stateBackup = [EdoBtns.btnSiguiente, EdoBtns.btnAtras];

			// Deshabilitar botones atras y siguiente.
			habilitar_deshabilitar_btns(getBtnArray(btnAtras, btnSiguiente), "d", "llamar_menu");
			EdoBtns.btnSiguiente = stateBackup[0];
			EdoBtns.btnAtras = stateBackup[1];
		} else {
			TweenLite.to($("#menuHTML"), 0.3, { opacity: 0, top: '1400px' });
			bussy = false;// Deshabilitar el boton menu
			setMenuBlur(false);

			// Evaluar la habilitacion de los botones segun el edo.
			let btnArray = new Array();
			if (EdoBtns.btnAtras && currentPagina > 1) { btnArray.push(btnAtras); }
			// if (!EdoBtns.btnAtras && !(IDActual !== 1 && pagActual !== 1)) { btnArray.push(btnAtras); }
			if (EdoBtns.btnSiguiente) { btnArray.push(btnSiguiente); }
			habilitar_deshabilitar_btns(btnArray, "h", "llamar_menu");

			setTimeout(function () {
				this.menu_open = false;
				$("#menuHTML").removeClass("menu-open");
				$("#btnMenu").css("pointer-events", "all");
				TweenLite.to($("#menuHTML"), 0.01, { opacity: 1, top: "0px" });
				bussy = false;
			}, 300);
		}
	}

	window.onresize();
	actualizar_menuHTML(TRAK); // actualizar el menu
	limpiarSim(); // se limpia la 
}

function setMenuBlur(action) {
	try {

		let iframe = document.getElementById("Contenido");
		var element = iframe.contentWindow.document.querySelector('canvas');
		let filterVal = 'blur(0px)';

		switch (action) {
			case true:
				filterVal = 'blur(5px)';
				break;
			default:
				filterVal = "";
				break;
		}

		element.style.filter = filterVal;
	} catch (error) {
		console.log("Error tratando de aplicar blur. Error: " + error)
	}

}

/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Llama la portada del curso restableciendo las configuraciones iniciales (ocultar barra, menu, contenido).
 */
function llamar_Portada() {
	$('#div_sim').hide();
	$('#div_vid').hide();
	$('#div_contenido').fadeIn();
	//Carga en el contenido lo que se le esta ordenando
	var portada = document.getElementById("Contenido");
	portada.src = "temas/" + obj.NombreIntro + ".html";
	limpiarSim();
}
//Función para mostrar el preloader mientras carga el contenido
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Muestra el preloader mientras carga el contenido. V1 del Template
 */
function preload() {
	$('#div_loader').fadeIn();
	$('#div_contenido').fadeIn(); //se coemnto porque al momento de dar soguiente se realizaba un parpadeo
}
//Función para cargar portada y ocultar contenido no indispensable
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Carga la portadea del curso en v1 del template
 */
function cargarPortada() {
	if (debug) { console.log("cargar portada"); }
	var iframe = document.getElementById("Contenido");
	if (debug) { console.log("temas/" + obj.NombreIntro + ".html"); }
	// iframe.src = "temas/" + obj.NombreIntro + ".html";
	$('#div_sim').hide();
	// $('#loader-wrapper').html("");
	$('#div_vid').hide();
	limpiarSim();
	ir(0);
}
//Función paraactualizar el menu y el estado de los temas
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Actualiza los indicadores y bloqueos/desbloqueos de botones del menu en V1 del Template.
 */
function actualizarMenu() {

	var cont = 0;
	var tema = 0;
	if (debug) { console.log("Actualizar menu " + TRAK); }
	for (var i = 0; i < Total; i++) {
		tema = TRAK[i];
		if (debug) { console.log("ESTADO DE TEMAS " + TRAK[i], tema); }
		if (tema == 1) {
			if (debug) { console.log(i, 1); }
			canvasMenu.cambioEdo(i, 1, true);
		} else {
			if (tema == 2) {
				cont++;
				if (debug) { console.log(i, 2, cont); }
				canvasMenu.cambioEdo(i, 2, true);
			} else {
				if (debug) { console.log("no entro a ninguno de los anteriores " + i); }
				canvasMenu.cambioEdo(i, 0, false);
			}
		}
		if (tema == 2 && TRAK[i + 1] == 0) {
			canvasMenu.cambioEdo((i + 1), 0, true);
			break;
		}
	}
	//evalua si terminó el curso o si el backdoor esta activo
	if ((cont >= Total && oportunidades < 3) || backdoor) { //se le reta 2 por: 1 cierre y 1 evaluación
		this.habilitar_deshabilitar_btns(getBtnArray(btnEval), "h", "actualizar_menu");
	} else {
		this.habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "actualizar_menu");
		if (debug) { console.log("No se ha completado el curso", cont, Total, terminado); }
	}
}
//NO BORRAR - Función para saltar intro desde consola, USO EXCLUSIVO PARA PRUEBAS 
function saltar_intro() {
	llamar_menu();
	cargarBarra();
	$('#div_contenido').hide();
	if (_root.ULTIMO > 0) {

	}
}

window.onkeyup = function (event) {
	// alert(event);
	if (event.keyCode == 17) {
		console.log("CONTROL UP");
		validar_control = false;
	}
	if (event.keyCode == 16) {
		console.log("SHIFT UP");
		validar_shift = false;
	}
}

window.onkeydown = function (event) {
	if (event.keyCode == 17) {
		// console.log("CONTROL");
		validar_control = true;
	}
	if (event.keyCode == 16 && validar_control == true) {
		// console.log("SHIFT");
		validar_shift = true;
	}
	if (event.keyCode == 32 && validar_control == true && validar_shift == true) {
		llamarAlertas("backdoor");
	}
}

function validarbackdoor() {
	if (backdoor == false) {
		llamarAlertas("desbloqueado");
		console.log("el backdoor esta:" + backdoor);
	} else {
		llamarAlertas("bloqueado");
		console.log("el backdoor esta:" + backdoor);

	}
}

/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Elimina el avance y datos del curso y los resetea al estado inicial.
 */
function borrarprogreso() {
	console.log("borrando");
	obj = $.parseJSON(ConfigurationJson);
	setValues(obj);
	initConfig(obj);
	guardarDatos();
	actualizarMenu();
	cargarBarra();
	llamar_menu();

}
/**
 * @param NA
 * @returns void
 * @description FUNCION LEGACY ::|:: Obtiene total de preguntas de la evaluacion
 */

function getPreguntas() {
	//codigo  para backdoor de evaluacion
	console.log("NumPreguntas desde start:" + canvasContenido.mc_eval.timeline.duration);
	NumPreguntas = canvasContenido.mc_eval.timeline.duration;
	console.log("el numero de preguntas es:" + NumPreguntas);

}


//------------------------------------------------------------------------------------------------------------
// #region BARRAHTML
// NUEVAS FUNCIONES PARA LA BARRA HTML
/**
 * @params 
 * @returns void
 * @description Inicializa la barra HTML, almacenando la instancia de los botones en variables globales 
 * */
function initbarra(jsonob) {
	btnAtras = document.getElementById("btnAtras");
	btnSiguiente = document.getElementById("btnSiguiente");
	btnMenu = document.getElementById("btnMenu");
	btnEval = document.getElementById("btnEval");
	btnHome = document.getElementById("btnHome");
	btnCerrar = document.getElementById("btnCerrar");

	habilitar_deshabilitar_btns(getBtnArray(btnSiguiente, btnAtras), "d", "initbarra");
	if (!cursoCompletado()) {
		// habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "initbarra");
	}
	actualizaTemasTerminados();
	actualizarProgressBar(70);
	populateMenu(jsonob);
	inicializaMensajes();
}
//Funcion para cargar portada
/**
 * @param NA
 * @returns void
 * @description Lleva el curso al home de la plantilla por determinar si es el menu o la portada!!
 */
function home() {
	// ocultarbarra implementar	 
	$('#div_contenido').fadeIn();
	llamar_Portada();
}

/**
 * @param NA
 * @returns void
 * @description Si hay videos o simulaciones corriendo las cierra, sino lanza disclaimer para cerrar el curso.
 * Funcion para salir de la simulación o cerrar curso
 */
function cerrar() {
	// habilitar_deshabilitar_btns(getBtnArray(this.btnEval),"h","asdasd");
	Cierra_Sim();
	// root.cambio_cerrar(0);
	// cambio_cerrar(0);
}
/**
 * @params botones a controlar: array, accion a realizar: string d | string h, nombre de la funcion donde se llamo functionName:string
 * @returns void (Activa o desactiva los botones)
 * @description Habilita o deshabilita los botones que se le envien, si ocurre algun error lanza un log con la funcion donde ocurrio
 * */
function habilitar_deshabilitar_btns(arraybtn, action, functionName) {
	if (action !== "d" && action !== "h") {
		if (debug) {
			console.error("Funcion habilitar_deshabilitar_btns:" +
				"No se enviaron los parametros de habilitar o habilitar correctamente." +
				" Llamdo desde funcion: " + functionName);
		}
		return;
	}
	if (arraybtn.length == 0) {
		if (debug) {
			console.error("Funcion habilitar_deshabilitar_btns:" +
				"Se enviaron 0 elementos en el array de botones. " +
				"Llamdo desde funcion: " + functionName);
		}
		return;
	}
	name = "disabledButton";
	for (let index = 0; index < arraybtn.length; index++) {
		if (action === "d") {
			$("#" + arraybtn[index].id.toString()).addClass(name);
			EdoBtns[arraybtn[index].id.toString()] = false;
		} else {
			$("#" + arraybtn[index].id.toString()).removeClass(name);
			EdoBtns[arraybtn[index].id.toString()] = true;
		}
	}
	// console.log("Nuevo edo btns")
	// console.log(this.EdoBtns);
	// actualizarEdoBotones();
	if (debug) { console.log("Nuevo edo de botones: "); }
	if (debug) { console.log(this.EdoBtns); }
}
function habilitarSiguiente() {
	habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "h", "habilitarSiguiente");
	if (banderillas) {
		alertas(1, "Da clic en siguiente para continuar.");
	}
}
function habilitarAtras() {
	habilitar_deshabilitar_btns(getBtnArray(btnAtras), "h", "habilitarAtras")
}
function deshabilitarSiguiente() {
	habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "d", "deshabilitarSiguiente");
}
function deshabilitarAtras() {
	habilitar_deshabilitar_btns(getBtnArray(btnAtras), "d", "deshabilitaratras");
}
function habilitar_deshabilitarBarra(action) {
	switch (action) {
		case "d":
			habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnMenu), "d", "habilitar_deshabilitarBarra");
			break;
		case "h":
			habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnMenu), "h", "habilitar_deshabilitarBarra");
			break;

		default:
			habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnMenu), "d", "habilitar_deshabilitarBarra");
			break;
	}
}

/**
 * @params NA
 * @returns void
 * @description Actualiza el objeto que controlar el estado de los botones validando la clase disabled.
 * */
function actualizarEdoBotones() {
	//implemented indexOf to internet explorer compatibility
	this.EdoBtns.btnAtras = this.btnAtras.className.indexOf("disabledButton") >= 0 ? false : true;
	this.EdoBtns.btnSiguiente = this.btnSiguiente.className.indexOf("disabledButton") >= 0 ? false : true;
	// this.EdoBtns.btnCerrar = this.btnCerrar.className.indexOf("disabledButton") >= 0 ? false : true; //desactivado para la barra cdi
	// this.EdoBtns.btnHome = this.btnHome.className.indexOf("disabledButton") >= 0 ? false : true;//desactivado para la barra cdi
	this.EdoBtns.btnMenu = this.btnMenu.className.indexOf("disabledButton") >= 0 ? false : true;
	// this.EdoBtns.btnEval = this.btnEval.className.indexOf("disabledButton") >= 0 ? false : true;//desactivado para la barra cdi
}
/**
 * @params Botones que formaran parte del arreglo de botones para habilitar/deshabilitar
 * @returns array:htmlElements(botones)
 * @description Recibe hasta 6 botones de la barra HTML y retorna un arreglo con dichos botones para activar/desactivar dinamico.
 * */
function getBtnArray(e1, e2, e3, e4, e5, e6) {
	let paramArray = [e1, e2, e3, e4, e5, e6];
	this.btnArray = [];
	for (let i = 0; i < 5; i++) {
		if (paramArray[i] != null && paramArray[i] != undefined) {
			this.btnArray.push(paramArray[i]);
		}
	}
	return this.btnArray;
}
/**
 * @params NA
 * @returns void
 * @description Bloquea todos los botones de accion de la barraHTML (comunmente se usa durante evalucion).
 * //muestra el mensaje de siquiente naranja
 * */
function bloquear_barra(action) {

	switch (action) {
		case "d":
			if (this.EdoBtns.barra === false)
				return;
			habilitar_deshabilitar_btns(
				getBtnArray(this.btnAtras, this.btnSiguiente, this.btnEval, this.btnHome, this.btnCerrar, this.btnMenu),
				action, "bloquear_barra");
			this.EdoBtns.barra = false;
			break;
		case "h":
			if (this.EdoBtns.barra === true)
				return;
			habilitar_deshabilitar_btns(
				getBtnArray(this.btnAtras, this.btnSiguiente, this.btnEval, this.btnHome, this.btnCerrar, this.btnMenu),
				action, "bloquear_barra");
			this.EdoBtns.barra = false;
			this.EdoBtns.barra = true;
			break;
		default:
			if (debug) {
				console.warn("El parametro de entrada para bloquear/Desbloquer barra es incorrecto, " +
					"solo se acepta 'd' para deshabilitar o 'h' para habilitar.");
			}
			return;
	}
}
/**
 * @params action:string | d -> desactivar, h -> activar
 * @returns void
 * @description Habilita el boton evaluacion (comunmente al terminar todos los temas del curso).
 * 
 * */
function habilitar_deshabilitar_eval(action) {
	if (this.libre) {
		habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "habilitar_deshabilitar_eval");
	}
	switch (action) {
		case "d":
			if (this.EdoBtns.btnEval === false)
				return;
			habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "habilitar_deshabilitar_eval");
			break;
		case "d":
			if (this.EdoBtns.btnEval === true)
				return;
			habilitar_deshabilitar_btns(getBtnArray(btnEval), "h", "habilitar_deshabilitar_eval");
			break;
		default:
			break;
	}

}
function partialdisabled(){
	$("#btnSiguiente").attr("disabled") = true;
	setTimeout(function(){
		$("#btnSiguiente").attr("disabled") = false;
	}, 100);
}
/**
 * @params NA
 * @returns void
 * @description Controola la negacion al siguiente frame del contenido. Si es el ultimo frame salta al siguiente tema excepto si es el ultimo tema.
 * 
 * */
//Función para cambio de frame dentro del div contenido
function siguiente_frame() {
	// console.log("estado del bloquepo")
	// console.log(bloqueoSiguiente)
	if(!bloqueoSiguiente){
		bloqueoSiguiente = true;
		habilitar_deshabilitar_btns(getBtnArray(btnSiguiente));
		//Para ocultar o mostrar el canvas de siguiente frame o siguiente tema
		if ($('#div_sim').show()) {
			$('#div_sim').hide();// Esconder el iframe de las evaluaciones
			limpiarSim();// Limpiar el frame de las simulaciones
		}
		if (!EvalInProgress) {
			if (pagActual < numPags - 1) { currentPagina += 1; ULTIMO = currentPagina; paginaSiguiente(); } // Avanza a la siguiente pagina 
			else { siguienteTema(); } // Avanza al siguiente tema 
		} else {
			siguienteTema();
			EvalInProgress = false;
		}
		_root.Avance = _root.currentPagina > _root.Avance ? _root.currentPagina : _root.Avance;
		actualizaTemasTerminados();

		setTimeout(function(){
			bloqueoSiguiente = false;			
		}, 100);
	}
}
/**
 * @params NA
 * @returns void
 * @description Controla la navegacion al frame anterior del contenido. Si es el primer frame del tema 2 en delante salta al tema anterior.
 * 
 * *///Función para retroceder frames dentro del div contenido
function anterior_frame() {
	if (!EvalInProgress) {
		// if (pagActual > 0) {  currentPagina -= 1; ULTIMO = currentPagina; temaAnterior(IDActual + 1) }// retrocede una pagina 
		if (pagActual > 0) { canvasContenido.gotoAndStop(pagActual - 1); currentPagina -= 1; ULTIMO = currentPagina; }// retrocede una pagina 
		else { if (IDActual > 0) { temaAnterior(); } } //retrocede un tema 	 
	} else { //canvasContenido.gotoAndStop(pagActual - 1);
		temaAnterior();
		EvalInProgress = false;
	}
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
	actualizaTemasTerminados();
}
/**
 * @params NA
 * @returns void
 * @description Navega al siguiente frame del contenido.
 * 
 * */
function paginaSiguiente() {
	pagActual += 1;
	reset_navegacion(pagActual, canvasContenido.timeline.duration);
	canvasContenido.gotoAndStop(pagActual);
	guardarDatos();
	actualizaTemasTerminados();
}
/**
 * @params NA
 * @returns void
 * @description Navega al frame anterior.
 * 
 * */
function paginaAnterior() {

	if (this.libre) // Para navegacion del curso
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras, btnSiguiente), "h", "paginaAnterior");

	if ((pagActual - 1) === 0 && IDActual === 0) { //deshabilitar el boton si estamos en la primer pagina del 1er tema
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "d", "paginaAnterior");
	}
	pagActual -= 1;
	canvasContenido.gotoAndStop(pagActual);
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
	actualizaTemasTerminados();
}
/**
 * @params NA
 * @returns void
 * @description Navega al siguiente tema del contenido.
 * 
 * */
function siguienteTema() {
	ir(_root.IDActual + 1);
}
/**
 * @params NA
 * @returns void
 * @description Navega al tema anterior del contenido.
 * 
 * */
function temaAnterior(id) {

	// if(id){
	// 	// controlAtras = true; //setear en true para al iniciar tema enviar a ultima pagina
	// 	currentPagina = ULTIMO - 1;
	// 	actualizaTemasTerminados();		
	// 	let op = obtenerFramePorPagina(ULTIMO);
	// 	return ir(op[0]);

	// }

	ir(IDActual - 1);
	controlAtras = true; //setear en true para al iniciar tema enviar a ultima pagina
	currentPagina = ULTIMO - 1;
	actualizaTemasTerminados();
}

function actualizarNavegacion(currentPage, totalPages) {
	pagActual = currentPage; // Pagina Actual
	numPags = totalPages; // Total de paginas del tema en curso
}
var sumaPag = 0;
//#endregion BARRAHTML
/**
 * @param {*}Pagina Actual(Frame Actual).
 * @param {*}CantidadPaginas Total de paginas del tema Actual
 * @returns void
 * @description Actualiza la navegacion y lleva a cabo validaciones para botones en cada frame.
 * */
function reset_navegacion(pagin, cantPag) {

	pagin = pagin < 0 ? 0 : pagin;
	stopAlertas();
	pagActual = pagin; //pagina actual del tema
	numPags = cantPag; //cantidad total de las paginas del tema
	this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "d", "reset_navegacion");
	if (pagActual == 0 && IDActual == 0) {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "d", "reset_navegacion");
	} else {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "h", "reset_navegacion");
	}
	if (ULTIMO > currentPagina || libre || Avance > ULTIMO) {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "h", "reset_navegacion");
	}
	if (backdoor) {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras, this.btnSiguiente), "h", "reset_navegacion");
	}
	guardarDatos();
}
/**
 * @param NA
 * @returns Bool
 * @description Valida si el curso ha sido completado
 */
function cursoCompletado() {
	let completo = true;
	for (let index = 0; index < this.TRAK.length; index++) {
		if (TRAK[index] < 2) {
			completo = false;
			break;
		}
	}
	return completo;
}
/**
 * @param {*}TrakCurso: Trak de avance del curso
 * @returns void
 * @description Actualiza los indicadores y desbloquea/bloquea los botones segun el avance del TRAK.
 */
function actualizar_menuHTML(TrakCurso) {
	// 
	for (let i = 0; i < TrakCurso.length; i++) {
		var element = $("#" + i).find("i");
		var tema = $("#" + (i + 1));
		actualizarIndicadores(tema, TrakCurso[i]);

		if (i > 0 && TrakCurso[i - 1] >= 2 || Temaslibre) { //bloquear botones aun no terminados
			if (debug) { console.log("desbloqueo Tema: " + i); }
			desbloquearTema(tema);
		} else {
			if (i > 0) {
				if (debug) { console.log("tema +" + i + "bloqueado"); }
				bloquearTema(tema);
			}
		}//terminan funciones de bloqueo de temas.
		// Actualizar el estatus de los modulos
		// actualizarEstatusModulo(i); // de momento para el template CDI no se usara

		if (TRAK[tema.attr("id") - 1] == 0) { // Manejar el estilo del tema no iniciado
			tema.addClass("tituloTemaMenuNoIniciado")
		} else {
			tema.removeClass("tituloTemaMenuNoIniciado")
		}
	}
	/**
	 * @param {*} Elemento: DOM HTML Element
	 * @returns void
	 * @description Establece los estilos para desbloquear boton al elemento especificado
	 */
	function desbloquearTema(elemento) {
		elemento.removeClass("menuTemaDisabled");
		elemento.addClass("menuTemaDesbloqueado");
	}
	/**
	 * @param {*} Elemento: DOM HTML Element
	 * @returns void
	 * @description Establece los estilos para bloquear boton al elemento especificado
	 */
	function bloquearTema(elemento) {
		elemento.addClass("menuTemaDisabled")
	}
	/**
	 * @param {*} Elemento: DOM HTML Objeto
	 * @param {*} Status: 0 | 1 | 2 : TRAK STATUS
	 * @returns void
	 * @description Actualiza el indicador de avance del tema segun su estatus en el TRAK.
	 */
	function actualizarIndicadores(elemento, status) {
		let i = elemento.find("i");
		switch (status) {
			case 0:
				break;
			case 1:
				i.removeClass("menuIconStyle").addClass("menuIconStyleIniciado");
				break;
			case 2:
				i.removeClass("menuIconStyleIniciado").addClass("menuIconStyleCompletado");
				break;
		}
	}
	/**
	 * @param {*} Tema: id del tema 
	 * @returns void
	 * @description Actualiza el estatus del modulo en base al id del tema recibido.
	 */
	function actualizarEstatusModulo(tema) {
		let arreglo = [];
		//recibe tema iniciado o terminado
		let numModulo = getModuloFromTema(tema);
		let Modulo = getLenghtModulo(numModulo);
		for (let i = Modulo.inicio; i < Modulo.final; i++) { // Revisar si ya se completo todo el modulo
			arreglo.push(TRAK[i]);
		}
		if (arreglo.indexOf(0) === -1 && arreglo.indexOf(1) === -1) {
			if (debug) { console.log("Modulo Completado Marcando estado completado"); }
			actualizarIndicadores($("#Modulo" + numModulo), 2);
			//Habilitar Evals del modulo
			habilitarEvals(numModulo);
			$("#Modulo" + numModulo).removeClass("tituloTemaMenuNoIniciado");
		} else if (arreglo.indexOf(1) !== -1 || arreglo.indexOf(2) !== -1) {
			actualizarIndicadores($("#Modulo" + numModulo), 1);
			$("#Modulo" + numModulo).removeClass("tituloTemaMenuNoIniciado");
		}
		arreglo = [];
	}
	/**
	 * @param {*} numModulo: Numero del modulo 
	 * @returns Object: {inicio: number(numero que representa el inicio del tema), {final: number(numero que representa el final del tema), nModulo: number(representa el numero de modulo)}
	 * @description Obtiene el tamaño del modulo recibido, inicio final y numero de modulo.
	 */
	function getLenghtModulo(numModulo) {
		let suma = 0;
		for (let t = 0; t <= (numModulo - 1); t++) {
			suma += (obj.Modulos[t]["Mod" + (t + 1)].length);
		}
		let resp = [suma, obj.Modulos[numModulo - 1]["Mod" + numModulo].length];
		let datos = {
			inicio: (suma - obj.Modulos[numModulo - 1]["Mod" + numModulo].length),
			final: suma,
			nModulo: numModulo
		}
		return datos;
	}
	/**
	 * @param {*} tema: id tema
	 * @returns number: Numero de modulo
	 * @description Obtiene el numero del modulo basado en el id del tema recibido
	 */
	function getModuloFromTema(tema) {
		let suma = 0;
		let nModulo = 1;
		for (let index = 1; index <= Modulos.length; index++) {
			suma += (Modulos[(index - 1)]["Mod" + index].length);
			if ((tema >= (suma - Modulos[(index - 1)]["Mod" + index].length)) && (tema < suma)) {
				nModulo = index;
				break;
			}
		}
		return nModulo;
	}
}// end of the way 