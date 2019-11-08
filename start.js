/*
E-Learning AnimateHTML5 programado por Adrian Ruvalcaba Garcia 
v1.0 salida a produccion: Enero 2019.
v2.0 terminada 20 Octubre 2019
Notas:
-Json (ConfigurationJson.js) generado por EXCEL (configuration.xlsx) con un addin programado en C#
*/
//Variables Globales
window.start = this;
var NombreCurso = "ARCA_CONTINENTAL_TMR_ANIMATECC";
var termino = false;
var banderillas = false;
var Rutas = new Array();
var Pag = new Array();
var TRAK = new Array();
var NombreModulos = new Array();
var Modulos = new Array();
var menu_open = false;
var bussy = false;
var Total;
var TRAKtmp = new Array();
var Evals = new Array();
var ULTIMO = null;
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
// var edoEvaluacion;
// var edoSiguiente;
// var edoAtras;
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
var btnArray = [];
var libre = false;
var tl = new TimelineMax();
var debug = false;
var myVar = setInterval(myTimer, 20);

window.onresize = function () {
	if (debug) {
		console.log("--------------------------------------"); console.log($("#menuHTML").height());	// console.log($("#div_contenido").height());	// console.log("--------------------------------------");
	}
	// $("#menuHTML").height($("#div_contenido").height() - 30);
	$("#menuHTML").height($("#div_contenido").height() - 30);
	$("#temasContainer").height($("#menuHTML").height() - 100);
	$("#barraInferior").width($("#div_contenido").width());
	$("#mensajesHTML").width($("#div_contenido").width());
	$("#ultimoContainer").width($("#div_contenido").width());
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	let diff = h - $("#content").height();
	$("#content").css("margin-top", ((diff / 2).toString() + "px"));
}

/**
 * 
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
	// Agregar Nombre del Curso
	// $("#menuContainer").append("<div id='menuTitle' class='col-xs-12 menuTitle'>Menú del curso </div>");
	let consecutivo = 0;
	for (let index = 0; index < jsonob.Modulos.length; index++) {
		//pintar nombre de modulo1
		if (NombreModulos[index] !== "" && NombreModulos[index] !== null && NombreModulos[index] !== undefined) {
			//
			$("#temasContainer").append("<div id='Modulo" + (index + 1) + "' class='col-xs-12 tituloModulo tituloTemaMenuNoIniciado'>" +
				"<div class='col-xs-1'>" +
				"<a	>" +
				"<i class='fas fa-circle menuIconStyle'></i>" +
				"</a>" +
				"</div>" +
				"<div class='col-xs-8' style='color:white'>" +
				"<p class='reset' style='float: left; padding-top: 3px; padding-left: 0px; pointer-events:none'>" + NombreModulos[index] + "</p>" +
				"</div>" +
				"</div>");
		} //end if Nombre para modulos
		//pintar Nombre del modulo
		for (let j = 0; j < jsonob.Modulos[index]['Mod' + (index + 1)].length; j++) {
			//pintar cada tema del modulo
			id = consecutivo; //onclick='alert('Modulo" + (consecutivo) + "')'
			$("#temasContainer").append("<div id='" + (consecutivo + 1) + "' onclick='llamarTema(" + (consecutivo) + ")' onmouseover='rollover(" + (consecutivo + 1) + ")' onmouseout='rollout(" + (consecutivo + 1) + ")' class='col-xs-12 tituloTemaMenu'>" +
				"<div class='col-xs-1' style='padding-top: 8px'>" +
				"<a>" +
				"<i class='fas fa-circle menuIconStyle'></i>" +
				"</a>" +
				"</div>" +
				"<div class='col-xs-8' style='color:white; margin: 0px;padding-top: 7px;'>" +
				"<p class='reset' style='float: left; padding-top: 3px; padding-left: 0px; pointer-events:none'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
				"</div>" +
				"</div>");
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

	// var myVar = setInterval(myTimer, 30);
	setTimeout(inicializar, 2000);
	setTimeout(function () {
		clearInterval(myVar);
	}, 1999);


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
	//se determina si el curso corre en local o en linea
	if (String(URLactual).indexOf("http://localhost") == 0) {
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

	if (ULTIMO > 0 || (ULTIMO === 0 && TRAK[0] == 2)) {
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
	let completed = 0;
	for (let index = 0; index < TRAK.length; index++) {
		// completed = TRAK[index] > 1 ? completed++ : completed;
		if (TRAK[index] > 1) {
			completed++;
		}
	}
	let text = completed + "/" + TRAK.length;
	return $("#numTemasCompletados").html(text);
}
/**
 * @param NA
 * @returns void
 * @description Actualiza la barra de progreso que se encuentra en la barraHTML basandose en el avance del trak global.
 */
function actualizarProgressBar() {

	let total = 100 / TRAK.length;
	let progress = 0;
	for (let index = 0; index < TRAK.length; index++) {
		if (TRAK[index] > 1) {
			progress += total;
		}
	}
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
	oportunidades = ob.Evaluaciones[0].MaxIntentos; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	intentoAct = ob.Evaluaciones[0].IntentoActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	SCORE = ob.Evaluaciones[0].CalActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	califMinima = ob.Evaluaciones[0].CalMinima; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	TRAK = ob.Trak;
	Pag = ob.Pag;
	libre = ob.Libre;
	NombreModulos = ob.NombreModulos;
	Modulos = ob.Modulos;
	Evals = ob.Evaluaciones; //New implemented feature multi eval
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
	obj.Pag = Pag;
	obj.Libre = libre;
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
	var contenido = document.getElementById("Contenido");
	contenido.src = "*";
}
/**
 * @param {*}id ID del tema a cargar
 * @returns void
 * @description Carga el contenido especificado por el parametro ID y lo carga en el div contenido del template.
 */
function ir(id) {
	if (menu_open) {
		llamar_menuHTML();
	}
	if (debug) {
		console.log("********", ULTIMO, id, TRAK[id]);
		console.log("**********************IR");
		console.log("ir " + id);
	}
	limpiarContenido();
	var iframe = document.getElementById("Contenido");
	iframe.src = Rutas[id];
	// iframe.onload = function () {
	// 	$('#div_contenido').fadeIn();
	// };
	_root.IDActual = id;
	_root.ULTIMO = id;
	if (debug) { console.log("IDActual: ", _root.IDActual, " ULTIMO: ", _root.ULTIMO); }
	if (canvasContenido) {
		reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
	}
}
/**
 * @param {*}Canvas	Canvas del Tema a iniciar. 
 * @returns void
 * @description Ejecuta las funciones necesarias para registrar el inicio de un tema. Colocar esta funcion en el primer frame de cada tema.
 */
function iniciar_tema(canvasTema) {
	try {
		if (debug) { console.log("inicio_tema", _root.IDActual); }
		getCanvas(canvasTema);
		actualizarNavegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
		//se cambia el estado del tema a 1 lo que significa "tema iniciado"
		if (TRAK[IDActual] < 1) {
			TRAK[IDActual] = 1;
		}
		//si entra desde un tema adelante con el boton de atras o desde la opcion de ultimo tema ...lo manda a la ultima pagina
		if (controlAtras || controlIrUltimo) {
			if (debug) { console.log("entro a control atras"); }
			canvasContenido.gotoAndStop(Pag[IDActual]);
			controlAtras = false;
		}
		//en caso de venir desde la opcion de ultimo tema, va a la ultima pagina visitada
		if (controlIrUltimo) {
			if (debug) { console.log("llendo a la ultima pagina desde reset_navegacion"); }
			canvasContenido.gotoAndStop(Pag[IDActual]);
			controlIrUltimo = false;
		}
		ULTIMO = IDActual;
		guardarDatos();
		if (debug) { console.log("fin inicio tema"); }
	} catch (error) {
		if (debug) { console.warn("Error iniciando tema: " + error); }
	}
	actualizar_menuHTML(TRAK);
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
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
	_root.ULTIMO = _root.IDActual; // se actualiza el ultimo tema
	if (debug) { console.log(_root.ULTIMO, _root.IDActual, TRAK, TRAK[_root.IDActual]); }
	//activar boton siguiente
	habilitar_deshabilitar_btns(getBtnArray(btnSiguiente), "h", "final_tema")
	actualizar_menuHTML(TRAK); // actualizar el menu
	guardarDatos();
	actualizaTemasTerminados();
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
	ir(ULTIMO);
	cerrarUltimo();
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

			// Deshabilitar botones atras y siguiente.
			habilitar_deshabilitar_btns(getBtnArray(btnAtras, btnSiguiente), "d", "llamar_menu");

		} else {
			TweenLite.to($("#menuHTML"), 0.3, { opacity: 0, top: '1400px' });
			bussy = false;// Deshabilitar el boton menu
			setMenuBlur(false);

			// Evaluar la habilitacion de los botones segun el edo.
			let btnArray = new Array();
			if (!EdoBtns.btnAtras && !(IDActual !== 1 && pagActual !== 1)) { btnArray.push(btnAtras); }
			if (!EdoBtns.btnSiguiente) { btnArray.push(btnSiguiente); }
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
	if (event.keyCode == 17) {
		console.log("CONTROL UP");
		validar_control = false;
	}
	if (event.keyCode == 16) {
		console.log("SHIFT UP");
		validar_shift = false;
	}
}

//backdoor
//window.onkeydown = teclas(event);
window.onkeydown = function (event) {
	if (event.keyCode == 17) {
		console.log("CONTROL");
		validar_control = true;
	}
	if (event.keyCode == 16 && validar_control == true) {
		console.log("SHIFT");
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
		} else {
			$("#" + arraybtn[index].id.toString()).removeClass(name);
		}
	}
	actualizarEdoBotones();
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
/**
 * @params NA
 * @returns void
 * @description Controola la negacion al siguiente frame del contenido. Si es el ultimo frame salta al siguiente tema excepto si es el ultimo tema.
 * 
 * */
//Función para cambio de frame dentro del div contenido
function siguiente_frame() {

	//Para ocultar o mostrar el canvas de siguiente frame o siguiente tema
	if ($('#div_sim').show()) {
		$('#div_sim').hide();// Esconder el iframe de las evaluaciones
		limpiarSim();// Limpiar el frame de las simulaciones
	}
	if (pagActual < numPags - 1) { paginaSiguiente(); } //  en este caso se avanza a la siguiente pagina 
	else { siguienteTema(); } // en este caso avanza al siguiente tema 
	// habilitar_deshabilitar_btns()
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
}
/**
 * @params NA
 * @returns void
 * @description Controla la navegacion al frame anterior del contenido. Si es el primer frame del tema 2 en delante salta al tema anterior.
 * 
 * *///Función para retroceder frames dentro del div contenido
function anterior_frame() {
	$('#div_sim').hide();
	limpiarSim();
	if (debug) { console.log("Funcion Siguiente(); " + estadoSim) }
	if (pagActual > 0) { canvasContenido.gotoAndStop(pagActual - 1); }// retrocede una pagina 
	else { if (IDActual > 0) { temaAnterior(); } } //retrocede un tema 
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
}
/**
 * @params NA
 * @returns void
 * @description Navega al siguiente frame del contenido.
 * 
 * */
function paginaSiguiente() {
	pagActual += 1;
	canvasContenido.gotoAndStop(pagActual);
	guardarDatos();
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
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
}
/**
 * @params NA
 * @returns void
 * @description Navega al siguiente tema del contenido.
 * 
 * */
function siguienteTema() {
	// $('#div_contenido').fadeOut("slow", function () {
	// 	ir(_root.IDActual + 1);
	// });
	ir(_root.IDActual + 1);
}
/**
 * @params NA
 * @returns void
 * @description Navega al tema anterior del contenido.
 * 
 * */
function temaAnterior() {
	ir(IDActual - 1);
	controlAtras = true; //setear en true para al iniciar tema enviar a ultima pagina
}

function actualizarNavegacion(currentPage, totalPages) {
	pagActual = currentPage; // Pagina Actual
	numPags = totalPages; // Total de paginas del tema en curso
}

//#endregion BARRAHTML
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
//inicia un nuevo archivo 
function reset_navegacion(pagin, cantPag) { // Usandose provisionalmente sera reelevada a legacy--- se validara al cambiar de pag
	console.log("reset navegacion")
	stopAlertas();
	pagActual = pagin; //pagina actual del tema
	numPags = cantPag; //cantidad total de las paginas del tema
	this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "d", "reset_navegacion");
	if (pagActual == 0 && IDActual == 0) {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "d", "reset_navegacion");
	} else {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "h", "reset_navegacion");
	}
	if (ULTIMO > IDActual || Pag[IDActual] > pagin) {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "h", "reset_navegacion");
	}
	if (backdoor) {
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras, this.btnSiguiente), "h", "reset_navegacion");
	}
	if (Pag[IDActual] < pagin) {
		Pag[IDActual] = pagin;
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
	// debugger
	for (let i = 0; i < TrakCurso.length; i++) {
		var element = $("#" + i).find("i");
		var tema = $("#" + (i + 1));
		actualizarIndicadores(tema, TrakCurso[i]);

		if (i > 0 && TrakCurso[i - 1] >= 2 || libre) { //bloquear botones aun no terminados
			if (debug) { console.log("desbloqueo Tema: " + i); }
			desbloquearTema(tema);
		} else {
			if (i > 0) {
				if (debug) { console.log("tema +" + i + "bloqueado"); }
				bloquearTema(tema);
			}
		}//terminan funciones de bloqueo de temas.
		// Actualizar el estatus de los modulos
		actualizarEstatusModulo(i);

		if (TRAK[tema.attr("id") - 1] == 0) {
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
}