/*
Proyecto
Iniciado por: Adrian Ruvalcaba Garcia.
Continuó con: Salvador Almaraz Montemayor , Julio Martinez.
Terminado para inico de Produccion por: Jesus Martin Gomez Salazar, Raymundo Serrano Cano.

Notas:
-Json (ConfigurationJson.js) generado por EXCEL (configuration.xlsx) con un addin programado en C#
*/
//Variables Globales
window.start = this;
var NombreCurso = "ARCA_CONTINENTAL_TMR_ANIMATECC";
var termino = false;
var Rutas = new Array();
var Pag = new Array();
var TRAK = new Array();
var NombreModulos = new Array();
var NombresTemas = new Array();
var Modulos = new Array();
var menu_open = false;
var bussy = false;
var Total;
var TRAKtmp = new Array();
var Evals = new Array();
var ULTIMO = null;
var ONLINE = false;
var sData;
var xmlConfig = "xml/config.xml";
var xmlGlosario = "xml/glosario.xml"
var OBC;
var Temas = new Array();
var A = 0;
var CNF;
var PROP;
var IDActual = 0;
var LaCookie;
var URLactual = window.location;
var TRKtemp = "";
var regresoLMS;
var obj;
var _root = window.parent;
var timeline = 0;
//Al guardar un canvas puedes acceder a las funciones del archivo animate (en realidad no captas el canvas sino su archivo js)
var canvasContenido;
var canvasBarra;
var canvasMensajes;
var canvasMenu;
var canvasAlertas;
var canvasRetro;
var estadoMenu = false;
var edoEvaluacion;
var edoSiguiente;
var edoAtras;
var terminado = false;
var LastMCVid = false;
var VidLast = false;
var estadoSim = false;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var SCORE;
var OS;
var visibleMenu;
var visibleSim;
var visibleVid;
var temporalMenuContenido;
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
var closeType = 0;
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

window.onresize = function () {

	var menu = document.getElementById("menuHTML");
	var contenido = document.getElementById("div_contenido");

	// console.log("--------------------------------------");
	// console.log($("#menuHTML").height());
	// console.log($("#div_contenido").height());
	// console.log("--------------------------------------");

	$("#menuHTML").height($("#div_contenido").height()-30);
	$("#barraInferior").width($("#div_contenido").width());
	
}

function populateMenu(jsonob) {
	// debugger;
	// Agregar Nombre del Curso
	$("#menuContainer").append("<div id='menuTitle' class='col-xs-12 menuTitle'>Menú del curso </div>");
	let consecutivo = 0;
	for (let index = 0; index < jsonob.Modulos.length; index++) {
		//pintar nombre de modulo1
		if (NombreModulos[index] !== "" && NombreModulos[index] !== null && NombreModulos[index] !== undefined) {
			//
			$("#menuContainer").append("	<div id='Modulo" + (index + 1) + "' class='col-xs-12 tituloModulo'>" +
				"<div class='col-xs-1'>" +
				"<a	>" +
				"<i class='fas fa-circle menuIconStyle'></i>" +
				"</a>" +
				"</div>" +
				"<div class='col-xs-8' style='color:white'>" +
				"<p class='reset' style='float: left;'>" + NombreModulos[index] + "</p>" +
				"</div>" +
				"</div>");
		} //end if Nombre para modulos
		//pintar Nombre del modulo
		for (let j = 0; j < jsonob.Modulos[index]['Mod' + (index + 1)].length; j++) {
			//pintar cada tema del modulo
			id = consecutivo; //onclick='alert('Modulo" + (consecutivo) + "')'
			// $("#menuContainer").append("	<div id='Tema" + (consecutivo+1) + "' class='col-xs-12 tituloTemaMenu'>" + //respaldo
			$("#menuContainer").append("	<div id='" + (consecutivo + 1) + "' onclick='llamarTema(" + (consecutivo) + ")' class='col-xs-12 tituloTemaMenu menuIconStyleDisabled'>" +
				"<div class='col-xs-1' style='padding-top: 8px'>" +
				"<a>" +
				"<i class='fas fa-circle menuIconStyle'></i>" +
				"</a>" +
				"</div>" +
				"<div class='col-xs-8' style='color:white; margin: 0px;padding-top: 7px;'>" +
				"<p class='reset' style='float: left;'>" + jsonob.Modulos[index]['Mod' + (index + 1)][j] + "</p>" +
				"</div>" +
				"</div>");

			// $("#bfCaptchaEntry").on("click", function(){ myFunction(); });
			consecutivo++;
			console.log(jsonob.Modulos[index]['Mod' + (index + 1)][j]);
		}// end for Temas

		//Pintar las evaluaciones
		if (jsonob.Evaluaciones.length > 0) { // Exists evals on object??		
			for (let t = 0; t < jsonob.Evaluaciones.length; t++) {
				if (jsonob.Evaluaciones[t]["Aplica"] && jsonob.Evaluaciones[t]["Modulo"] === (index + 1)) {// Si aplica y es para el modulo que se esta recorriendo se genera 
					let NombreEvaluacionActual = jsonob.Evaluaciones[t]["Nombre"] !== "" &&
						jsonob.Evaluaciones[t]["Nombre"] !== undefined &&
						jsonob.Evaluaciones[t]["Nombre"] !== null &&
						jsonob.Evaluaciones[t]["Nombre"] !== NaN ? Evals[t]["Nombre"] : "Modulo " + index + ": Evaluacion";

					$("#menuContainer").append("	<div id='Evaluacion" + (consecutivo + 1) + "' onclick='llamarEval(" + (jsonob.Evaluaciones[t]["ID"]) + ")' class='col-xs-12 tituloTemaMenu'>" +
						"<div class='col-xs-1' style='padding-top: 8px'>" +
						"<a id='btnHome' class='menuIconStyle'>" +
						"<i class='fas fa-circle menuIconStyl'></i>" +
						"</a>" +
						"</div>" +
						"<div class='col-xs-8' style='color:white; margin: 0px;padding-top: 7px;'>" +
						"<p class='reset' style='float: left;'>" + NombreEvaluacionActual + "</p>" +
						"</div>" +
						"</div>");
				}// if eval apply
			}//end for evals			
		}// end if evals exists


	}//End Main For
}// end PopulateMenu function

/**
 * @param id:Number
 * @returns void
 * @description Carga el tema en el iframe contenido basandose en el id que recibe. 
 */
function llamarTema(id) {
	// id = id === 0 || id < 0 ? 1 : id;
	ir(id);
	llamar_menuHTML();
}
/**
 * @param id:Number
 * @returns void
 * @description Carga la evaluacion el iframe contenido basandose en el id que recibe. [Funcion para multi evaluaciones]
 */
function llamarEval(id) {
	if (id === 0) {
		console.log("Parametro para inicializar evaluacion incorrecto.");
		return false;
	}
	alert("Funcionalidad no implementada. ID: " + id);
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

console.log("el navegador usado y la version son");
console.log(getBrowserInfo());
console.log(getBrowserInfo().split(" ")[0]);

/**
 * @param NA
 * @returns void
 * @description Inicializa la aplicacion.
 * Función para iniciarlizar API
 *  */
function InitApi() {
	console.log("------Inicializacion------");
	getAPI(); //Inicializa el API para el uso de las funciones con SCORM que se encuentran en api.JS.
	IdentificarEstado();
	// Setear el height del menu html igual al tamaño del contenido.
	document.getElementById("menuHTML").style.height = (document.getElementById("div_contenido").style.height-30) + 'px';
	$("#menuHTML").height($("#div_contenido").height()-30);
}
/**
 * @param NA
 * @returns void
 * @description Identifica la plataforma de ejecucion del contenido [Local/Online].
 * Función para validar si se navega de manera local o en linea
 *  */
function IdentificarEstado() {
	console.log("------Identificado la Ejecucion del Curso------");
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
	// TweenLite.fromTo($("#menuHTML"), 0.2, {x:0}, {x:-100});
	// TweenMax.to($("#menuHTML"), 0.75, { scaleX: 1.5, scaleY: 1.5, ease: Back.easeOut })
	// TweenMax.to($("#menuHTML"), 2, { x: 100 }, Back.easeOut)

	//el arreglo modulos se trata en dos partes, una de rutas y otra de nombres
	console.log("numero de modulos:" + jsonob.Modulos.length / 2);
	let numModulos = jsonob.Modulos.length;
	let indexRutas = 0; // el index de rutas es el segundo objeto en modulos por eso empieza en 1
	let index = 0; // index general en 0
	// console.log("Las rutas de los archivos leidos son:");	
	// for (var i = 1; i <= numModulos; i += 2) { // for que avanza de 2 en 2 para solo leer los modulos de las rutas
	// 	for (var j = 0; j < jsonob["Modulos"][i]["Rut" + indexRutas].length; j++) { //recorre el objeto por modulo
	// 		Rutas[index] = jsonob["Modulos"][i]["Rut" + indexRutas][j]; // se guardan en un arreglo

	// 		console.log(Rutas[index]);
	// 		index++;
	// 	}
	// 	indexRutas++;
	// }

	for (let i = 0; i < jsonob["Rutas"].length; i++) {//New Rutas obtaining method
		// debugger;
		for (var j = 0; j < (jsonob["Rutas"][i]["Rut" + (i + 1)]).length; j++) { //recorre el objeto por modulo

			Rutas.push((jsonob["Rutas"][i]["Rut" + (i + 1)])[j]); // se guardan en un arreglo
			index++;
		}
		// Rutas[i] = jsonob["Rutas"][i]["Rut" + indexRutas][j];
		// indexRutas++;
	}
	Total = Rutas.length; // total de rutas/temas
	TotalArchivos = Rutas.length; // se guarda el total de los archivos no borrar!  
	console.log("Dato de las rutas: ");
	console.log(Rutas);
	console.log("Nombre de los temas: ");
	console.log(NombresTemas);
	console.log("json trak es:  " + jsonob.Trak);

	initbarra(jsonob);
	// actualizarTotalTemasCompletados();
}

function actualizaTemasTerminados() {
	let completed=0;
	debugger;
	for (let index = 0; index < TRAK.length; index++) {
		// completed = TRAK[index] > 1 ? completed++ : completed;
		if (TRAK[index] > 1) {
			completed++;
		}
	}
	let text = completed+"/"+TRAK.length;
	return $("#numTemasCompletados").html(text);
}

function actualizarProgressBar(){
	
	let total = 100/TRAK.length;
	let progress=0;
	for (let index = 0; index < TRAK.length; index++) {
		// completed = TRAK[index] > 1 ? completed++ : completed;
		if (TRAK[index] > 1) {
			progress+=total;
		}
	}

	$("#progressBar").css("width", progress+"%");
	$("#percent").html(progress.toFixed(0)+"%");
}

//Esta funcion es para la lectura de datos en modo local
function leeLocal() {
	console.log("lee local");
	var localStor = leeLocalStorage();
	//Si el local Storage esta vacio o no existe, entonces crea el json a partir de el excel 'configuration.xlsx'
	if (localStor == undefined || localStor == "") {
		console.log("No existe un Informacion");
		obj = $.parseJSON(ConfigurationJson);
	} else { // en caso de que ya exista algun guardado
		console.log("Ya existe Informacion");
		obj = $.parseJSON(localStor);
	}
	console.log("Asignacion de valores");
	console.log(JSON.stringify(obj));
	setValues(obj);
	initConfig(obj);
	cargarPortada();
}
//esta funcion asigna los valores del JSON  a las variables para ser utilizados
function setValues(ob) {
	ULTIMO = ob.Ultimo;
	oportunidades = ob.Evaluaciones[0].MaxIntentos; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	intentoAct = ob.Evaluaciones[0].IntentoActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	SCORE = ob.Evaluaciones[0].CalActual; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	califMinima = ob.Evaluaciones[0].CalMinima; // Will be deprecated, not functional for multiple evals MUS BE AN ARRAY
	TRAK = ob.Trak;
	Pag = ob.Pag;
	TEMAS = ob.Temas;
	libre = ob.Libre;
	NombreModulos = ob.NombreModulos;
	NombresTemas = ob.NombreTemas;
	Modulos = ob.Modulos;
	Evals = ob.Evaluaciones; //New implemented feature multi eval
}
//esta funcion asigna los valores al json para ser guardado
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

//esta funcion se encarga de leer el localStorage
function leeLocalStorage() {
	var retorno;
	try {
		var nav = getBrowserInfo().split(" ")[0];
		if (nav == "IE") {
			console.log("leyendo cookie");
			retorno = (document.cookie.indexOf('data=') === -1 ? '' : ("; " + document.cookie).split('; data=')[1].split(';')[0]);
		} else {
			console.log("leyendo LocalStorage");
			retorno = window.localStorage.getItem(NombreCurso);
		}
	} catch (e) {
		console.log("error al leer local storage:" + e.text);
	}
	return retorno;
}
//Esta funcion se encarga de Guradar el localStorage
function guardaLocalStorage(clave) {
	try {
		var nav = getBrowserInfo().split(" ")[0];
		if (nav == "IE") {
			console.log("se guarda en cookie");
			var expiration_date = new Date();
			expiration_date.setFullYear(expiration_date.getFullYear() + 1);
			document.cookie = "data=" + JSON.stringify(clave) + "; expires=" + expiration_date.toGMTString();
		} else { //Fixed para chrome
			console.log("se guarda en LocalStorage");
			// window.localStorage.data = JSON.stringify(clave);
			window.localStorage.setItem(NombreCurso, JSON.stringify(clave));
		}
	} catch (e) {
		console.log("no pudo guardar archivos en local storage:" + e.text);
	}
}
//funcion para imprimir el iframe
function imprimirIframe() {
	console.log("imprime");
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
//Funcion encargada de la lectura en ONLINE
function leeOnline() {
	console.log("LEE ONLINE");
	regresoLMS = ComunicacionLMS("leer"); //Recuperar el suspend_data del LMS
	console.log("regresoLMS " + regresoLMS);
	/*
	si es la primera vez que entra al curso el suspenData estara vacio
	de ser asi la informacion que se leera sera la del json generado por excel
	*/
	if (regresoLMS == "" || regresoLMS == undefined) {
		console.log("suspent data vacio, generando json");
		obj = $.parseJSON(ConfigurationJson);
	} else {
		console.log("suspend data diferente a vacio");
		var jsonObj = regresoLMS;
		obj = $.parseJSON(jsonObj);
	}
	console.log(obj);
	//Guardar el contenido recuperado del LMS en las variables locales.
	setValues(obj);
	initConfig(obj);
	cargarPortada();
}
//Funcion encargada de guardar los datos
function guardarDatos() {
	setObject(); // se llama la funcion pára guardar los datos en el Json
	if (ONLINE) {
		console.log("guardando datos online");
		var jsonObj = JSON.stringify(obj);
		console.log("json-generando");
		//Guardar en el suspend data
		ComunicacionLMS("guardar", jsonObj);
	} else { //guarda los datos en local storage
		console.log("guardando datos local");
		guardaLocalStorage(obj);
	}
}
//Función para cargar elementos en el div de contenido. El parámetro es numérico
function ir(id) {
	console.log("********", ULTIMO, id, TRAK[id]);
	console.log("**********************IR");
	limpiarContenido();
	console.log("ir " + id);
	var iframe = document.getElementById("Contenido");
	iframe.src = Rutas[id];
	iframe.onload = function () {
		$('#div_contenido').fadeIn();
	};
	_root.IDActual = id;
	if (ULTIMO < id) {
		_root.ULTIMO = id;
	}
	console.log("IDActual: ", _root.IDActual, " ULTIMO: ", _root.ULTIMO);
}
//funcion para dar inicio a un tema 
function inicio_tema() {
	console.log("inicio_tema", _root.IDActual);
	//se cambia el estado del tema a 1 lo que significa "tema iniciado"
	if (TRAK[IDActual] < 1) {
		TRAK[IDActual] = 1;
		// console.log("se cambio a 1");
		_root.ULTIMO = _root.IDActual;
		console.log("ultimo" + _root.ULTIMO)
		guardarDatos();
		actualizar_menuHTML(TRAK); // actualizar el menu
	}
	//si entra desde un tema adelante con el boton de atras o desde la opcion de ultimo tema ...lo manda a la ultima pagina
	if (controlAtras || controlIrUltimo) {
		console.log("entro a control atras");
		canvasContenido.gotoAndStop(Pag[IDActual]);
		controlAtras = false;
	}
	//en caso de venir desde la opcion de ultimo tema, va a la ultima pagina visitada
	if (controlIrUltimo) {
		console.log("llendo a la ultima pagina desde reset_navegacion");
		canvasContenido.gotoAndStop(Pag[IDActual]);
		controlIrUltimo = false;
	}
	console.log("fin inicio tema");
}
//funcion para dar inicio a un tema 
function _inicio_tema(canvasTema) {
	try {
		console.log("inicio_tema", _root.IDActual);
		getCanvas(canvasTema);
		actualizarNavegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
		//se cambia el estado del tema a 1 lo que significa "tema iniciado"
		if (TRAK[IDActual] < 1) {
			TRAK[IDActual] = 1;
			_root.ULTIMO = _root.IDActual;
			guardarDatos();
		}
		//si entra desde un tema adelante con el boton de atras o desde la opcion de ultimo tema ...lo manda a la ultima pagina
		if (controlAtras || controlIrUltimo) {
			console.log("entro a control atras");
			canvasContenido.gotoAndStop(Pag[IDActual]);
			controlAtras = false;
		}
		//en caso de venir desde la opcion de ultimo tema, va a la ultima pagina visitada
		if (controlIrUltimo) {
			console.log("llendo a la ultima pagina desde reset_navegacion");
			canvasContenido.gotoAndStop(Pag[IDActual]);
			controlIrUltimo = false;
		}
		console.log("fin inicio tema");
	} catch (error) {
		console.warn("Error iniciando tema: " + error);
	}

}
//Funcion para terminar un tema
function final_tema() {
	console.log("*********************FINAL TEMA", _root.IDActual);
	//el estado del tema se cambia a 2 lo que significa "terminado"
	if (TRAK[IDActual] < 2) {
		TRAK[IDActual] = 2;
	}
	_root.ULTIMO = _root.IDActual; // se actualiza el ultimo tema
	console.log(_root.ULTIMO, _root.IDActual, TRAK, TRAK[_root.IDActual]);
	actualizar_menuHTML(TRAK); // actualizar el menu
	guardarDatos();
	actualizaTemasTerminados();
	actualizarProgressBar();
}
//Funcion para el glosario
function glosarioX() {
	var iframe = document.getElementById("glosario");
	iframe.src = "temas/" + obj.NombreIntro + ".html";
	var g = document.getElementById('btnGlos');
	g.click();
}
//funcion que cierra la ventana
function Cierra() {
	$('#Palabra').hide();
}
// //Funcion para cargar simulación
// window.Cargar_Sim = function (URLS, finalizoS, LASTMCS) {
// 	console.log("cargar Sim");
// 	setEdo_botones(); //llama la funcion para guardar el estado de los botones
// 	canvasBarra.deshabilitar_atras();
// 	canvasBarra.deshabilitar_siguiente();
// 	canvasBarra.cambio_cerrar(1);
// 	canvasBarra.deshabilitar_cerrar();
// 	estadoSim = true;
// 	$('#div_contenido').hide();
// 	$('#div_sim').fadeIn();
// 	var simulacion = document.getElementById("sim");
// 	simulacion.src = URLS;
// 	console.log("Fin cargar Sim");
// 	LastMCVid = LASTMCS;
// 	if (finalizoS) { //con esto sabemos si es la ultima simulacion
// 		VidLast = true;
// 	}
// }
//Funcion para cargar simulación
window.Cargar_Sim = function (URLS, finalizoS, LASTMCS) {
	console.log("cargar Sim");
	setEdo_botones(); //llama la funcion para guardar el estado de los botones
	// canvasBarra.deshabilitar_atras();
	// canvasBarra.deshabilitar_siguiente();
	// canvasBarra.cambio_cerrar(1);
	// canvasBarra.deshabilitar_cerrar();

	this.habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnCerrar), "d", "Cargar_Sim");
	estadoSim = true;
	$('#div_contenido').hide();
	$('#div_sim').fadeIn();
	var simulacion = document.getElementById("sim");
	simulacion.src = URLS;
	console.log("Fin cargar Sim");
	LastMCVid = LASTMCS;
	if (finalizoS) { //con esto sabemos si es la ultima simulacion
		VidLast = true;
	}
}

function simFinalizada() {
	console.log("termina la simulacion");
	canvasBarra.habilitar_cerrar();
}
//funcion encargada de cargar un video
window.cargar_video = function (URLS, finalizoS, LASTMCS) {
	console.log("cargar video");
	setEdo_botones();
	// canvasBarra.deshabilitar_atras();
	// canvasBarra.deshabilitar_siguiente();
	// canvasBarra.cambio_cerrar(1);
	// canvasBarra.deshabilitar_cerrar();
	this.habilitar_deshabilitar_btns(this.getBtnArray(this.btnAtras, this.btnSiguiente, this.btnCerrar), "d", "cargar_video");
	LastMCVid = LASTMCS;
	estadoSim = true;
	$('#div_contenido').hide();
	$('#div_vid').fadeIn();
	var simulacion = document.getElementById("vid");
	simulacion.src = URLS;
	simulacion.onended = function () {
		console.log("finalizo? desde start " + finalizoS);
		// canvasBarra.habilitar_cerrar();
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnCerrar), "h", "Cargar_Sim");
		if (finalizoS) {
			VidLast = true;
		}
	};
	console.log("Fin cargar video");
}

//Función para el botón Cerrar de la barra. Valída dependiendo si hay simulación activa o no
function Cierra_Sim() {
	if (estadoSim == false) { //esta activa la simulacion?

		llamarAlertas("Exit");


	} else {

		//En caso de haber simulación activa, cierra la simulación
		console.log("cierra sim");
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

function checarTerminacion() {
	//revisar si ya se termino el curso
	var creditosActuales = 0;
	var creditosMinimos = TRAK.length * 2;
	for (var i = 0; i < TRAK.length; i++) {
		creditosActuales += TRAK[i];
	}
	console.log("creditosMinimos: " + creditosMinimos + "\ncreditosActuales: " + creditosActuales + "");
	if ((creditosMinimos == creditosActuales)) {
		console.log("El curso ya fue terminado, Evaluacion Desbloqueada");
		canvasBarra.habilitar_eval();
		termino = true;
	} else {
		if (!backdoor) {
			console.log("un no se ve todo el curso, Evaluacion Bloqueada");
			canvasBarra.deshabilitar_eval();
		}
		console.log("el backdoor esta activo, Evaluacion Desbloqueada");
		canvasBarra.habilitar_eval();
	}
}

//limpia la simulacion y la resetea
function limpiarSim() {
	console.log("limpiarSim");
	estadoSim = false;
	var sim = document.getElementById("sim");
	sim.src = "";
	var vide = document.getElementById("vid");
	vide.src = "";
}
//limpia el contenido
function limpiarContenido() {
	console.log("**********************limpiarContenido");
	var contenido = document.getElementById("Contenido");
	contenido.src = "*";
	console.log(contenido.src);
}
//limpia el menu
function limpiarMenu() {
	console.log("limpiarMenu");
	var menu = document.getElementById("menu");
	menu.src = "";
}
//limpia la barra
function limpiarBarra() {
	console.log("limpiarBarra");
	var barra = document.getElementById("Barra");
	barra.src = "";
}
//Función para obtener el canvas del menú
function getMenu(valor) {
	console.log("Obtener Menu");
	canvasMenu = valor;
	actualizarMenu();
}
//Función para opbtener el canvas de la barra
function getBarra(valor) {
	console.log("Obtener Barra");
	canvasBarra = valor;
}
//Función para obtener el canvas del contenido
function getCanvas(valor) {
	console.log("Obtener Canvas");
	canvasContenido = valor;
}
//Manda llamar el menú y lo muetra en pantalla ocultando los no correspondientes
function llamar_menuHTML() {
	console.log("LLAMAR MENU");
	// $('#div_menu').fadeIn();
	// $('#div_loader').hide();
	// $('#div_retro').hide();
	// $('#div_contenido').hide();
	// $('#div_sim').hide();
	// $('#div_vid').hide();
	// if (canvasBarra != undefined) { //Valida si se ha cargado previamente la barra
	// 	canvasBarra.cambio_cerrar(0);
	// }
	// //se llama al menu 
	// var menu = document.getElementById("menu");
	// console.log("MENU" + menu.src + "|" + menu.src.indexOf("start.html"));
	// if (menu.src == "" || menu.src == null || menu.src == undefined || menu.src.indexOf("start.html") > 1) {
	// 	menu.src = "temas/template_menu.html";
	// }
	if (!bussy) {
		if (!menu_open) {
			// debugger;
			// $("#menuHTML").addClass("menu-open");
			$("#menuHTML").addClass("menu-open");
			TweenLite.from($("#menuHTML"), 0.5, { opacity: 0, left: '-300px' });
			this.menu_open = true;
		} else {
			TweenLite.to($("#menuHTML"), 0.5, { opacity: 0, left: '-300px' });
			bussy = false;// Deshabilitar el boton menu
			// $("#btnMenu").css("pointer-events", "none");
			setTimeout(() => {
				this.menu_open = false;
				$("#menuHTML").removeClass("menu-open");
				$("#btnMenu").css("pointer-events", "all");
				TweenLite.to($("#menuHTML"), 0.01, { opacity: 0.75, left: "0px" });
				bussy = false;
			}, 500);
		}
	}
	actualizar_menuHTML(TRAK); // actualizar el menu
	limpiarSim(); // se limpia la 
}
//Manda llamar la portada ocultando simulaciones y contenido no necesario
function llamar_Portada() {
	$('#div_sim').hide();
	$('#div_retro').hide();
	$('#div_vid').hide();
	$('#div_barra').hide();
	$('#div_menu').hide();
	$('#div_contenido').fadeIn();
	//Carga en el contenido lo que se le esta ordenando
	var portada = document.getElementById("Contenido");
	portada.src = "temas/" + obj.NombreIntro + ".html";
	limpiarSim();
	limpiarBarra();
	limpiarMenu();
}
//llama a la evaluacion
function llamar_evaluacion() {
	$('#div_contenido').fadeOut("slow", function () {
		intentoAct++;
		if (intentoAct <= oportunidades) {
			limpiarContenido();
			console.log("Lammar evaluacion start");
			ocultar_menu(); // oculta el menu
			var iframe = document.getElementById("Contenido");
			console.log("temas/" + obj.NombreEval + ".html");
			iframe.src = "temas/" + obj.NombreEval + ".html";
			terminado = true; // la variable de curso terminado se habilita
			iframe.onload = function () {
				$('#div_contenido').fadeIn();
			};
		} else {
			/*
			            swal({
			                    position: 'center',
			                    type: 'error',
			                    title: '<i>Oops!!</i>',
			                    html: '<i>Ya no cuentas con oportunidades para realiazar la Evaluacion</i>',
			                    animation: false,
			                    customClass: 'animated shake',
			                    allowOutsideClick: false,
			                    showConfirmButton: true

			                })
			                .then((result) => {
			                    console.log("Sin Oportunidades");
			                });
			        */
		}
	});
}
//se llama al glosario
function llamar_glosario() {
	console.log("Llama Glosario");
	estadoMenu = false;
	visibleMenu = $("#div_menu").is(":visible");
	visibleGlosario = $("#div_glosario").is(":visible");
	visibleSim = $("#div_sim").is(":visible");
	visibleVid = $("#div_vid").is(":visible");
	console.log(visibleGlosario, visibleMenu);
	if (visibleGlosario == false) {
		$('#div_glosario').fadeIn();
		if (visibleMenu == true) {
			temporalMenuContenido = "menu";
			$('#div_menu').hide();
		} else if (visibleSim == true) {
			temporalMenuContenido = "sim";
			$('#div_sim').hide();
		} else if (visibleVid == true) {
			temporalMenuContenido = "vid";
			$('#div_vid').hide();
		} else {
			temporalMenuContenido = "contenido";
			$('#div_contenido').hide();
			$('#div_retro').hide();
		}
	} else {
		$('#div_glosario').hide();
		if (temporalMenuContenido == "menu") {
			$('#div_menu').fadeIn();
		} else if (temporalMenuContenido == "sim") {
			$('#div_sim').fadeIn();
		} else if (temporalMenuContenido == "vid") {
			$('#div_vid').fadeIn();
		} else {
			$('#div_contenido').fadeIn();
			$('#div_retro').fadeIn();
		}
	}
}
//Función que valida el momento de mostrar u ocultar el menú
function ocultarMostrar_menu() {
	console.log("ocultarMostrar_menu();");
	if (estadoMenu == true) {
		var iframe = document.getElementById("Contenido");
		if (iframe.src.indexOf(obj.NombreIntro + ".html") < 1) { //Validación para evitar que cargue la portada
			ocultar_menu();
			$('#div_contenido').fadeIn();
		}
	} else {
		mostrar_menu();
	}
	actualizarMenu();
}
//Función para ocultar la barra
function HideBar() {
	$('#div_barra').hide();
}
//Función para ocultar el menú y mostrar el contenido del curso
function ocultar_menu() {
	console.log("oculta menu");
	$('#div_loader').hide();
	$('#div_menu').hide();
	$('#div_glosario').hide();
	// $('#div_contenido').fadeIn();
	estadoMenu = false;
	try {
		getEdo_botones();
	} catch (e) {
		console.log("Barra no disponible", e);
	}
}
//Función que muestra en pantalla el menú y oculta elementos no necesarios
function mostrar_menu() {
	console.log("muestra menu");
	$('#div_loader').hide();
	$('#div_contenido').hide();
	$('#div_retro').hide();
	$('#div_sim').hide();
	$('#div_vid').hide();
	$('#div_glosario').hide();
	$('#div_menu').fadeIn();
	estadoMenu = true;
	limpiarSim();
	// setEdo_botones();
	// canvasBarra.deshabilitar_atras();
	// canvasBarra.deshabilitar_siguiente();
	this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras, this.btnSiguiente), "d", "mostrar_menu");
}
//almacena la configuración de los botones atras y siguiente.
//Indispensable para mostrar botones nuevamente con su última configuración
function setEdo_botones() {
	console.log("---setEdo_botones();");
	//Almacena el estado del cursor
	// edoAtras = canvasBarra.btn_atras.cursor;
	// edoSiguiente = canvasBarra.btn_siguiente.cursor;
	console.log("Estado de Botones: Siguiente: " + edoSiguiente + " Atras: " + edoAtras);
}
//recupera configuracion de botones atras y siguiente y los restablece según la información almacenada en setEdo_botones()
// function getEdo_botones() {
// 	console.log("---getEdo_botones();");
// 	if (edoAtras == false) {
// 		canvasBarra.deshabilitar_atras();
// 	} else {
// 		canvasBarra.habilitar_atras();
// 	}
// 	if (edoSiguiente == false) {
// 		canvasBarra.deshabilitar_siguiente();
// 	} else {
// 		canvasBarra.habilitar_siguiente();
// 	}
// }
//Función para mostrar el preloader mientras carga el contenido
function preload() {
	// $('#div_menu').hide();
	$('#div_loader').fadeIn();
	$('#div_contenido').fadeIn(); //se coemnto porque al momento de dar soguiente se realizaba 
	//un parpadeo
}
//Función para cargar portada y ocultar contenido no indispensable
function cargarPortada() {
	console.log("cargar portada");
	// var iframe = document.getElementById("Barra");
	// iframe.src = "temas/template_barra_canvas.html";
	var iframe = document.getElementById("Contenido");
	console.log("temas/" + obj.NombreIntro + ".html");
	iframe.src = "temas/" + obj.NombreIntro + ".html";
	$('#div_sim').hide();
	$('#div_barra').hide();
	$('#loader-wrapper').html("");
	$('#div_vid').hide();
	$('#div_glosario').hide();
	$('#div_retro').hide();
	$('#div_menu').hide();
	$('#div_alerta').hide();
	limpiarSim();
	precargar_glosario();
	preCargarRetros();
	preCargarAlertas();
	preCargarMensajes();
}

function precargar_glosario() {
	console.log("precargar_glosario");
	var iframe = document.getElementById("glosario");
	iframe.src = "temas/template_glosario.html";
	console.log(iframe);
}


function getRetros(valor) {
	console.log("Obteniendo Retros");
	canvasRetro = valor;
}

function getMensajes(valor) {
	console.log("Obteniendo mensajes");
	canvasMensajes = valor;
}

function getAlertas(valor) {
	console.log("obteniendo alertas");
	canvasAlertas = valor;
}

function llamarRetros(valor, text) {
	console.log("se ejecuto la funcion llamarRetros");
	var visibleRetros = $("#div_retro").is(":visible");
	if (visibleRetros) {
		console.log("escondiendo retro");
		canvasRetro.gotoAndStop(0);
		$('#div_retro').hide();
	} else {
		console.log("mostrando retros");
		console.log(valor);
		if (text == null || text == undefined || text == "") {
			canvasRetro.gotoAndStop(valor);
		} else {
			console.log(text);
			canvasRetro.texto = text;
			if (valor == "bien") {
				canvasRetro.gotoAndStop("retrobien");
			} else if (valor == "mal") {
				canvasRetro.gotoAndStop("retromal");
			} else {
				console.log("el parametro de la funcion 'llamarRetros' esta mal escrito");
			}
		}
		$('#div_retro').fadeIn();
	}

}

function preCargarRetros() {
	console.log("precargandoRetros");
	var iframe = document.getElementById("retros");
	iframe.src = "temas/retrosTemplate.html";
	console.log(iframe);
	$('#div_retro').hide();
}

function preCargarAlertas() {
	console.log("precargandoAlertas");
	var iframe = document.getElementById("alertas");
	iframe.src = "temas/templatesAlerts.html";
	console.log(iframe);
	$('#div_alerta').hide();
}

function preCargarMensajes() {
	console.log("precargandoMensajes");
	var iframe = document.getElementById("mensajes");
	iframe.src = "temas/banderillas_v1.html";
	console.log(iframe);
	$('#div_mensajes').hide();
}

//Función para cargar la barra
function cargarBarra() {
	console.log("cargar Barra");
	var iframe = document.getElementById("Barra");
	iframe.src = "temas/template_barra_canvas.html";
	$('#div_barra').fadeIn();
	console.log("termina de cargar barra");
}

//Función paraactualizar el menu y el estado de los temas
function actualizarMenu() {

	var cont = 0;
	var tema = 0;
	console.log("Actualizar menu " + TRAK);
	for (var i = 0; i < Total; i++) {
		tema = TRAK[i];
		console.log("ESTADO DE TEMAS " + TRAK[i], tema);
		if (tema == 1) {
			console.log(i, 1);
			canvasMenu.cambioEdo(i, 1, true);
		} else {
			if (tema == 2) {
				cont++;
				console.log(i, 2, cont);
				canvasMenu.cambioEdo(i, 2, true);
			} else {
				console.log("no entro a ninguno de los anteriores " + i);
				canvasMenu.cambioEdo(i, 0, false);
			}
		}
		if (tema == 2 && TRAK[i + 1] == 0) {
			canvasMenu.cambioEdo((i + 1), 0, true);
			break;
		}
	}
	// debugger;
	//evalua si terminó el curso o si el backdoor esta activo
	if ((cont >= Total && oportunidades < 3) || backdoor) { //se le reta 2 por: 1 cierre y 1 evaluación
		// habilitar_eval();
		this.habilitar_deshabilitar_btns(getBtnArray(btnEval), "h", "actualizar_menu");
	} else {
		// deshabilitar_eval();
		this.habilitar_deshabilitar_btns(getBtnArray(btnEval), "d", "actualizar_menu");
		// this.btnEval.disabled=true;
		console.log("No se ha completado el curso", cont, Total, terminado);
	}
}

//NO BORRAR - Función para saltar intro desde consola, USO EXCLUSIVO PARA PRUEBAS 
function saltar_intro() {
	llamar_menu();
	cargarBarra();
	$('#div_contenido').hide();
	$('#div_barra').fadeIn();
	$('#div_menu').fadeIn();
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

function terminarTema() {
	final_tema();
	ir(IDActual + 1);
}

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
}
//Funcion para cargar portada
/**
 * @param NA
 * @returns void
 * @description Lleva el curso al home de la plantilla por determinar si es el menu o la portada!!
 */
function home() {
	$('#div_barra').hide();
	$('#div_menu').hide();
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
	// debugger;
	if (action !== "d" && action !== "h") {
		console.error("Funcion habilitar_deshabilitar_btns:" +
			"No se enviaron los parametros de habilitar o habilitar correctamente." +
			" Llamdo desde funcion: " + functionName);
		return;
	}
	if (arraybtn.length == 0) {
		console.error("Funcion habilitar_deshabilitar_btns:" +
			"Se enviaron 0 elementos en el array de botones. " +
			"Llamdo desde funcion: " + functionName);
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
	console.log("Nuevo edo de botones: ");
	console.log(this.EdoBtns);
}
/**
 * @params NA
 * @returns void
 * @description Actualiza el objeto que controlar el estado de los botones validando la clase disabled.
 * */
function actualizarEdoBotones() {
	// this.EdoBtns.btnAtras = this.btnAtras.className.includes("disabledButton") ? false : true;
	// this.EdoBtns.btnSiguiente = this.btnSiguiente.className.includes("disabledButton") ? false : true;
	// this.EdoBtns.btnCerrar = this.btnCerrar.className.includes("disabledButton") ? false : true;
	// this.EdoBtns.btnHome = this.btnHome.className.includes("disabledButton") ? false : true;
	// this.EdoBtns.btnMenu = this.btnMenu.className.includes("disabledButton") ? false : true;
	// this.EdoBtns.btnEval = this.btnEval.className.includes("disabledButton") ? false : true;

	//implemented indexOf to internet explorer compatibility

	this.EdoBtns.btnAtras = this.btnAtras.className.indexOf("disabledButton") >= 0 ? false : true;
	this.EdoBtns.btnSiguiente = this.btnSiguiente.className.indexOf("disabledButton") >= 0 ? false : true;
	// this.EdoBtns.btnCerrar = this.btnCerrar.className.indexOf("disabledButton") >= 0 ? false : true; //desactivado para la barra cdi
	// this.EdoBtns.btnHome = this.btnHome.className.indexOf("disabledButton") >= 0 ? false : true;//desactivado para la barra cdi
	this.EdoBtns.btnMenu = this.btnMenu.className.indexOf("disabledButton") >= 0 ? false : true;
	// this.EdoBtns.btnEval = this.btnEval.className.indexOf("disabledButton") >= 0 ? false : true;//desactivado para la barra cdi
	// .indexOf("?") >= 0
}
/**
 * @params Botones que formaran parte del arreglo de botones para habilitar/deshabilitar
 * @returns array:htmlElements(botones)
 * @description Recibe hasta 6 botones de la barra HTML y retorna un arreglo con dichos botones para activar/desactivar dinamico.
 * */
function getBtnArray(e1, e2, e3, e4, e5, e6) {
	// debugger;
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
 * @description Muestra en pantalla el mensaje para "TEMA COMPLETADO".
 * //muestra el mensaje de siquiente verde
 * */
function siguiente_verde() { // Renombrar a Tema completado
	canvasBarra.habilitar_siguiente();
	llamarMensajes("verde");
	setEdo_botones();
}
/**
 * @params NA
 * @returns void
 * @description Muestra en pantalla el mensaje para "DAR CLICK EN SIGUIENTE PARA CONTINUAR".
 * //muestra el mensaje de siquiente naranja
 * */
function siguiente_naranja() {
	reset_navegacion(canvasContenido.timeline.position + 1, canvasContenido.timeline.duration);
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
	canvasBarra.habilitar_siguiente();
	llamarMensajes("naranja");
	setEdo_botones();
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
			console.warn("El parametro de entrada para bloquear/Desbloquer barra es incorrecto, " +
				"solo se acepta 'd' para deshabilitar o 'h' para habilitar.");
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

	llamarMensajes(0); //Para ocultar o mostrar el canvas de siguiente frame o siguiente tema
	$('#div_sim').hide();// Esconder el iframe de las evaluaciones
	limpiarSim();// Limpiar el frame de las simulaciones
	console.log("Funcion Siguiente(); " + estadoSim)

	if (estadoSim == false)
		canvasBarra.cambio_cerrar(0);

	if (pagActual < numPags - 1) { paginaSiguiente(); } //  en este caso se avanza a la siguiente pagina 
	else { siguienteTema(); } // en este caso avanza al siguiente tema 
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
	console.log("Funcion Siguiente(); " + estadoSim)
	if (pagActual > 0) { canvasContenido.gotoAndStop(pagActual - 1); }// retrocede una pagina 
	else { if (IDActual > 0) { temaAnterior(); } } //retrocede un tema 

}
/**
 * @params NA
 * @returns void
 * @description Navega al siguiente frame del contenido.
 * 
 * */
function paginaSiguiente() {
	if (this.libre || ULTIMO > IDActual || Pag[IDActual] > pagActual) // Para navegacion del curso || si entro desde ultimo tema
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras, btnSiguiente), "h", "paginaAnterior");

	if ((pagActual + 1) == numPags && IDActual === trak.length) { //deshabilitar el boton si estamos en la ultima pagina del ult tema
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "d", "paginaSiguiente");
	}
	if (Pag[IDActual] < pagActual) { //Actualizar la pagina mas avanzada
		Pag[IDActual] = pagActual;
	}
	pagActual += 1;
	canvasContenido.gotoAndStop(pagActual);
	guardarDatos();
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
}
/**
 * @params NA
 * @returns void
 * @description Navega al siguiente tema del contenido.
 * 
 * */
function siguienteTema() {
	$('#div_contenido').fadeOut("slow", function () {
		ir(_root.IDActual + 1);
	});
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


//inicia un nuevo archivo 
function reset_navegacion(pagin, cantPag) { // Usandose provisionalmente sera reelevada a legacy--- se validara al cambiar de pag
	pagActual = pagin; //pagina actual del tema
	numPags = cantPag; //cantidad total de las paginas del tema
	// canvasBarra.deshabilitar_siguiente();
	this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "d", "reset_navegacion");
	if (pagActual == 0 && IDActual == 0) {
		// canvasBarra.deshabilitar_atras();
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "d", "reset_navegacion");
	} else {
		// canvasBarra.habilitar_atras();
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras), "h", "reset_navegacion");
	}
	if (ULTIMO > IDActual || Pag[IDActual] > pagin) {
		canvasBarra.habilitar_siguiente();
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnSiguiente), "h", "reset_navegacion");
	}
	if (backdoor) {
		// canvasBarra.habilitar_siguiente();
		// canvasBarra.habilitar_atras();
		this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras, this.btnSiguiente), "h", "reset_navegacion");
	}
	if (Pag[IDActual] < pagin) {
		Pag[IDActual] = pagin;
	}
	// setEdo_botones();
	guardarDatos();
}



//#endregion BARRAHTML
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------


//#region LegacyFunction
function habilitar_barra() { // ya no se ocupa
	canvasBarra.habilitar_barra();
}
function deshabilitar_eval() {
	canvasBarra.deshabilitar_eval();
}
function llamarMensajes(valor) {
	var visibleMensajes = $("#div_mensajes").is(":visible");
	if (visibleMensajes) {
		console.log("escondiendo mensajes");
		$('#div_mensajes').hide();
	} else {
		//esto para que el mensaje desaparesca al dar siguiente l a funcion se
		//manda a llamar desde "siguiente_frame" y al darle valor 0 no hace nada
		//pero si los mensajes estaban activos entonces los esconde
		if (valor != 0) {
			console.log("mostrando mensajes");
			console.log(valor);
			$('#div_mensajes').fadeIn();
			canvasMensajes.gotoAndPlay(valor);
		}
	}
}

function llamarAlertas(valor) {
	console.log("se ejecuto la funcion llamar alertas");
	var visibleAlertas = $("#div_alerta").is(":visible");
	if (visibleAlertas) {
		console.log("escondiendo alertas");
		$('#div_alerta').hide();
		preCargarAlertas();

	} else {
		if (valor != 0) {
			console.log("mostrando alertas");
			console.log(valor);
			$('#div_alerta').fadeIn();
			canvasAlertas.gotoAndPlay(valor);
		}
	}
}
//funcion de comandos para que sea mas facil para DI
function comando(hacer, objetivo) { // Legacy Function for v2 template
	switch (hacer) {
		case "iniciar":
			try {
				console.log("Se inicio el tema");
				getCanvas(objetivo);
				reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
				inicio_tema();
			} catch (err) {
				console.log("No se pudo iniciar el tema correctamente :", err);
			}
			break;
		case "resetear":
			try {
				console.log("Se avanzo en el tema");
				reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
			} catch (err) {
				console.log("No se pudo reiniciar la barra :", err);
			}
			break;
		case "terminar":
			try {
				console.log("Termino el tema");

				final_tema();
			} catch (err) {
				console.log("nose pudo finalizar el tema correctamente :", err);
			}
			break;
		default:
			console.log("Asegurate dde escribir la palabra exacta en la funcion 'comando'");
			break;
	}

}

function llamar_menu() {
	console.log("LLAMAR MENU");
	$('#div_menu').fadeIn();
	$('#div_loader').hide();
	$('#div_retro').hide();
	$('#div_contenido').hide();
	$('#div_sim').hide();
	$('#div_vid').hide();
	if (canvasBarra != undefined) { //Valida si se ha cargado previamente la barra
		canvasBarra.cambio_cerrar(0);
	}
	//se llama al menu 
	var menu = document.getElementById("menu");
	console.log("MENU" + menu.src + "|" + menu.src.indexOf("start.html"));
	if (menu.src == "" || menu.src == null || menu.src == undefined || menu.src.indexOf("start.html") > 1) {
		menu.src = "temas/template_menu.html";
	}

	limpiarSim(); // se limpia la 
}

//#endregion LegacyFunction

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

function actualizar_menuHTML(TrakCurso) {
	// debugger;	
	for (let i = 0; i < TrakCurso.length; i++) {
		// var element = $("#Tema" + (i + 1)).find("i");
		// debugger;
		var element = $("#" + i).find("i");
		var tema = $("#" + (i + 1));

		// menuTemaDisabled
		actualizarIndicadores(tema, TrakCurso[i]);

		if (i > 0 && TrakCurso[i - 1] >= 2) { //bloquear botones aun no terminados
			console.log("desbloqueo Tema: " + i);
			// tema
			// Modulo["b" + i].enabled = true;
			//Modulo["b"+(i+1)].enabled=true;
			desbloquearTema(tema);
		} else {
			if (i > 0) {
				console.log("tema +" + i + "bloqueado");
				bloquearTema(tema);

			}
			// Modulo["b" + (i + 1)].enabled = false;
		}//terminan funciones de bloqueo de temas.

		// Actualizar el estatus de los modulos
		actualizarEstatusModulo();

		// 	// debugger;
		// 	if (TrakCurso[i] === 1) {
		// 		element.removeClass("menuIconStyle");
		// 		element.addClass("menuIconStyleIniciado");
		// 		elementparent.removeClass("menuIconStyleDisabled");
		// 		elementparent.addClass("menuTemaDesbloqueado");
		// 		// if(buscarClase(element, "menuIconStyleCompletado") || buscarClase(element, "menuIconStyle")){}
		// 	} else if (TrakCurso[i] === 2) {
		// 		element.removeClass("menuIconStyleIniciado");
		// 		element.addClass("menuIconStyleCompletado");
		// 		elementparent.removeClass("menuIconStyleDisabled");
		// 		elementparent.addClass("menuIconStyle");
		// 		if(i < TrakCurso.length){
		// 			$("#" + (i+1)).removeClass("menuIconStyleDisabled");
		// 			$("#" + (i+1)).addClass("menuIconStyle");
		// 		}

		// 	} else {
		// 		if (libre) { // Si el curso esta libre
		// 			elementparent.removeClass();
		// 			elementparent.addClass("menuTemaDesbloqueado");
		// 		} else {// Si no esta libre revisamos si es el ultimo
		// 			debugger;
		// 			if (elementparent.attr('id') == (ULTIMO + 1) && ULTIMO === 0) {
		// 				// debugger
		// 				elementparent.removeClass("menuIconStyleDisabled");
		// 				elementparent.addClass("menuTemaDesbloqueado");
		// 			}
		// 		}// end else if
		// 	}// end else
		// }// End main For



	}

	function desbloquearTema(elemento) {
		elemento.removeClass("menuTemaDisabled");
		elemento.addClass("menuTemaDesbloqueado");
	}

	function bloquearTema(elemento) {
		elemento.addClass("menuTemaDisabled")
	}

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
	function actualizarEstatusModulo(tema) {
		let arreglo = [];
		//recibe tema iniciado o terminado
		// debugger;
		for (let index = 1; index <= obj.Modulos.length; index++) {
			let Modulo = getLenghtModulo(index);
			// if (index >= Modulo.inicio && index <= Modulo.final) {
				for (let i = Modulo.inicio; i < Modulo.final; i++) { // Revisar si ya se completo todo el modulo
					arreglo.push(TRAK[i]);
				}

			// }

			if (arreglo.indexOf(0) === -1 && arreglo.indexOf(1) === -1) {
				console.log("Modulo Completado Marcando estado completado");
				// temacompletado($("#Modulo"+index));
				actualizarIndicadores($("#Modulo" + index), 2);
			} else if (arreglo.indexOf(1) !== -1) {
				actualizarIndicadores($("#Modulo" + index), 1);
			}

			arreglo=[];
		}

		function getLenghtModulo(numModulo) {
			debugger;
			let suma = 0;
			for (let t = 0; t <= (numModulo - 1); t++) {
				suma += (obj.Modulos[t]["Mod"+(t+1)].length);
			}
			let resp = [suma, obj.Modulos[numModulo-1]["Mod"+numModulo].length];

			let datos = {
				inicio: (suma - obj.Modulos[numModulo-1]["Mod"+numModulo].length),
				final: suma,
				nModulo: numModulo
			}

			return datos;
		}

	}
}