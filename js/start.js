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
var termino = false;
var Rutas = new Array();
var Pag = new Array();
var TRAK = new Array();
var Total;
var TRAKtmp = new Array();
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
// se confirma en que navegador se esta viendo el curso
//funcion de comandos para que sea mas facil para DI
function comando(hacer, objetivo) {
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

var getBrowserInfo = function() {
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

console.log("el navegador usado y la verison son");
console.log(getBrowserInfo());
console.log(getBrowserInfo().split(" ")[0]);
//Función para iniciarlizar API
function InitApi() {
	console.log("------Paso1------");
	getAPI(); //Inicializa el API para el uso de las funciones con SCORM que se encuentran en api.JS.
	IdentificarEstado();
}
//Función para validar si se navega de manera local o en linea
function IdentificarEstado() {
	console.log("------Paso2------");
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


//aqui se colocan todos los archivos SWF que se veran en el curso
function initConfig(jsonob) {
	//el arreglo modulos se trata en dos partes, una de rutas y otra de nombres
	console.log("numero de modulos:" + jsonob.Modulos.length / 2);
	var numModulos = jsonob.Modulos.length;
	var indexRutas = 1; // el index de rutas es el segundo objeto en modulos por eso empieza en 1
	var index = 0; // index general en 0
	console.log("Las rutas de los archivos leidos son:");
	for (var i = 1; i <= numModulos; i += 2) { // for que avanza de 2 en 2 para solo leer los modulos de las rutas
		for (var j = 0; j < jsonob["Modulos"][i]["Rut" + indexRutas].length; j++) { //recorre el objeto por modulo
			Rutas[index] = jsonob["Modulos"][i]["Rut" + indexRutas][j]; // se guardan en un arreglo
			console.log(Rutas[index]);
			index++;
		}
		indexRutas++;
	}
	Total = Rutas.length; // total de rutas/temas
	TotalArchivos = Rutas.length; // se guarda el total de los archivos no borrar!  
	console.log("json trak es:  " + jsonob.Trak);
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
	oportunidades = ob.Evaluaciones[0].MaxIntentos;
	intentoAct = ob.Evaluaciones[0].IntentoActual;
	SCORE = ob.Evaluaciones[0].CalActual;
	califMinima = ob.Evaluaciones[0].CalMinima;
	TRAK = ob.Trak;
	Pag = ob.Pag;
}
//esta funcion asigna los valores al json para ser guardado
function setObject() {
	obj.Trak = TRAK;
	obj.Ultimo = ULTIMO;
	obj.Evaluaciones[0]["CalActual"] = SCORE;
	obj.Evaluaciones[0]["MaxIntentos"] = oportunidades;
	obj.Evaluaciones[0]["IntentoActual"] = intentoAct;
	obj.Evaluaciones[0].CalMinima = califMinima;
	obj.Pag = Pag;
}

//esta funcion se encarga de leer el localStorage
function leeLocalStorage() {
	var retorno;
	try {
		var nav = getBrowserInfo().split(" ")[0];
		if (nav == "IE") {
			console.log("leyendo cookie");
			retorno = (document.cookie.indexOf('data=') === -1 ? '' : ("; " + document.cookie).split('; data=')[1].split(';')[0]);
		} else if (nav == "Firefox") {
			console.log("leyendo LocalStorage");
			retorno = window.localStorage.data;
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
		} else if (nav == "Firefox") {
			console.log("se guarda en LocalStorage");
			window.localStorage.data = JSON.stringify(clave);
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
	iframe.onload = function() {
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
		console.log("se cambio a 1");
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
	guardarDatos();
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
//Funcion para cargar simulación
window.Cargar_Sim = function(URLS, finalizoS, LASTMCS) {
	console.log("cargar Sim");
	setEdo_botones(); //llama la funcion para guardar el estado de los botones
	canvasBarra.deshabilitar_atras();
	canvasBarra.deshabilitar_siguiente();
	canvasBarra.cambio_cerrar(1);
	canvasBarra.deshabilitar_cerrar();
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
window.cargar_video = function(URLS, finalizoS, LASTMCS) {
	console.log("cargar video");
	setEdo_botones();
	canvasBarra.deshabilitar_atras();
	canvasBarra.deshabilitar_siguiente();
	canvasBarra.cambio_cerrar(1);
	canvasBarra.deshabilitar_cerrar();
	LastMCVid = LASTMCS;
	estadoSim = true;
	$('#div_contenido').hide();
	$('#div_vid').fadeIn();
	var simulacion = document.getElementById("vid");
	simulacion.src = URLS;
	simulacion.onended = function() {
		console.log("finalizo? desde start " + finalizoS);
		canvasBarra.habilitar_cerrar();
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

function checarTerminacion(){
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
	$('#div_contenido').fadeOut("slow", function() {
		intentoAct++;
		if (intentoAct <= oportunidades) {
			limpiarContenido();
			console.log("Lammar evaluacion start");
			ocultar_menu(); // oculta el menu
			var iframe = document.getElementById("Contenido");
			console.log("temas/" + obj.NombreEval + ".html");
			iframe.src = "temas/" + obj.NombreEval + ".html";
			terminado = true; // la variable de curso terminado se habilita
			iframe.onload = function() {
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
	setEdo_botones();
	canvasBarra.deshabilitar_atras();
	canvasBarra.deshabilitar_siguiente();
}
//almacena la configuración de los botones atras y siguiente.
//Indispensable para mostrar botones nuevamente con su última configuración
function setEdo_botones() {
	console.log("---setEdo_botones();");
	//Almacena el estado del cursor
	edoAtras = canvasBarra.btn_atras.cursor;
	edoSiguiente = canvasBarra.btn_siguiente.cursor;
	console.log("Estado de Botones: Siguiente: " + edoSiguiente + " Atras: " + edoAtras);
}
//recupera configuracion de botones atras y siguiente y los restablece según la información almacenada en setEdo_botones()
function getEdo_botones() {
	console.log("---getEdo_botones();");
	if (edoAtras == false) {
		canvasBarra.deshabilitar_atras();
	} else {
		canvasBarra.habilitar_atras();
	}
	if (edoSiguiente == false) {
		canvasBarra.deshabilitar_siguiente();
	} else {
		canvasBarra.habilitar_siguiente();
	}
}
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
//Función para bloquear barra en evaluación
function bloquear_barra() {
	canvasBarra.bloquear_barra();
}

function habilitar_barra() {
	canvasBarra.habilitar_barra();
}

function habilitar_eval() {
	canvasBarra.habilitar_eval();
}

function deshabilitar_eval() {
	canvasBarra.deshabilitar_eval();
}

//Función para cambio de frame dentro del div contenido
function siguiente_frame() {

	llamarMensajes(0);
	$('#div_sim').hide();
	limpiarSim();
	console.log("Funcion Siguiente(); " + estadoSim)
	if (estadoSim == false) {
		canvasBarra.cambio_cerrar(0);
	}
	if (pagActual < numPags - 1) { //  en este caso se avanza a la siguiente pagina
		canvasContenido.gotoAndStop(pagActual + 1);
	} else {
		// en este caso avanza al siguiente tema
		$('#div_contenido').fadeOut("slow", function() {
			ir(_root.IDActual + 1);
		});
	}
}

//Función para retroceder frames dentro del div contenido
function anterior_frame() {
	$('#div_sim').hide();
	limpiarSim();
	console.log("Funcion Siguiente(); " + estadoSim)
	if (estadoSim == false) {
		canvasBarra.cambio_cerrar(0);
	}
	if (pagActual > 0) { // retrocede una pagina
		canvasContenido.gotoAndStop(pagActual - 1);
	} else {
		if (IDActual > 0) { //retrocede un tema
			ir(IDActual - 1);
			controlAtras = true;
		} else { // si estamos en el primer tema deshabilita el boton de retroceder
			console.log("boton deshabilitado");
			canvasBarra.deshabilitar_atras();
		}
	}

}
//inicia un nuevo archivo
function reset_navegacion(pagin, cantPag) {
	pagActual = pagin; //pagina actual del tema
	numPags = cantPag; //cantidad total de las paginas del tema
	canvasBarra.deshabilitar_siguiente();
	if (pagActual == 0 && IDActual == 0) {
		canvasBarra.deshabilitar_atras();
	} else {
		canvasBarra.habilitar_atras();
	}
	if (ULTIMO > IDActual || Pag[IDActual] > pagin) {
		canvasBarra.habilitar_siguiente();
	}
	if (backdoor) {
		canvasBarra.habilitar_siguiente();
		canvasBarra.habilitar_atras();
	}
	if (Pag[IDActual] < pagin) {
		Pag[IDActual] = pagin;
	}
	setEdo_botones();
	guardarDatos();
}
//muestra el mensaje de siquiente verde
function siguiente_verde() {
	canvasBarra.habilitar_siguiente();
	llamarMensajes("verde");
	setEdo_botones();
}
//muestra el mensaje de siquiente naranja
function siguiente_naranja() {
	reset_navegacion(canvasContenido.timeline.position + 1, canvasContenido.timeline.duration);
	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
	canvasBarra.habilitar_siguiente();
	llamarMensajes("naranja");
	setEdo_botones();
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
	//evalua si terminó el curso o si el backdoor esta activo
	if ((cont >= Total && oportunidades < 3) || backdoor) { //se le reta 2 por: 1 cierre y 1 evaluación
		habilitar_eval();
	} else {
		deshabilitar_eval();
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

		/*
		        swal({
		                html: '<i>Deseas ir al Ultimo tema visitado</i> ?',
		                title: '<i>Atajo!!</i>',
		                type: 'question',
		                showCancelButton: true,
		                confirmButtonColor: '#008000',
		                allowOutsideClick: false,
		                cancelButtonColor: '#b20000',
		                confirmButtonText: '<i>Si, Vamos!</i>',
		                cancelButtonText: '<i>No, Aun!</i>',
		                reverseButtons: true
		            })
		            .then((result) => {
		                if (result.value) {
		                    swal({
		                            position: 'center',
		                            type: 'success',
		                            title: '<i>Vamos!!</i>',
		                            animation: false,
		                            customClass: 'animated flipInX',
		                            allowOutsideClick: false,
		                            showConfirmButton: false,
		                            timer: 1500
		                        })
		                        .then((result) => {
		                            ocultar_menu();
		                            if (ULTIMO == TotalArchivos - 1 && oportunidades >= 3) {
		                                ir(ULTIMO - 1);
		                            } else {
		                                console.log("llendo al ultimo tema visitado");
		                                ir(ULTIMO);
		                                console.log("llendo a la ultima pagina visitada");
		                                controlIrUltimo = true;
		                            }
		                        });
		                } else {
		                    swal({
		                            position: 'center',
		                            type: 'success',
		                            title: '<i>Bienvenido!!</i>',
		                            animation: false,
		                            customClass: 'animated flipInX',
		                            allowOutsideClick: false,
		                            showConfirmButton: false,
		                            timer: 1500
		                        })
		                        .then((result) => {
		                            console.log("No avanza");
		                        });
		                }
		            });
		    */
	}
}

/*
//backdoor
window.onkeydown = function(event) {
    if (event.keyCode == 17) {
        console.log("CONTROL");
        validar_control = true;
    }
    if (event.keyCode == 16 && validar_control == true) {
        console.log("SHIFT");
        validar_shift = true;
    }
    if (event.keyCode == 32 && validar_control == true && validar_shift == true) {
        swal({
                title: '<i>Backdoor</i>',
                html: '<i>Ingresa Un Password</i>',
                type: 'info',
                confirmButtonText: '<i>Hackear!!</i>',
                animation: false,
                customClass: 'animated flipInX',
                input: 'password',
                inputPlaceholder: 'Ingresa un password',
                allowOutsideClick: false,
                inputAutoTrim: true,
                inputAttributes: {
                    maxlength: 10,
                    autocapitalize: 'off',
                    autocorrect: 'off'
                }
            })
            .then((result) => {
                switch (result.value) {
                    case clave_backdoor:
                        /*
                        la variable backdoor es leida en el menu, e interpretada en el template del menu
                        para habilitar todo, independientemente del progreso
                        */
/*
                        console.log("el backdoor esta:" + backdoor);
                        if (backdoor == false) {
                            backdoor = true;
                            swal({
                                    position: 'center',
                                    type: 'success',
                                    title: '<i>Menu Desbloqueado!!</i>',
                                    animation: false,
                                    customClass: 'animated flipInX',
                                    allowOutsideClick: false,
                                    showConfirmButton: false,
                                    allowOutsideClick: false,
                                    timer: 1500
                                })
                                .then((result) => {});
                        } else {
                            backdoor = false;
                            swal({
                                    position: 'center',
                                    type: 'success',
                                    title: '<i>Menu Bloqueado!!</i>',
                                    animation: false,
                                    customClass: 'animated flipInX',
                                    allowOutsideClick: false,
                                    showConfirmButton: false,
                                    allowOutsideClick: false,
                                    timer: 1500
                                })
                                .then((result) => {});
                        }
                        console.log("el backdoor esta:" + backdoor);
                        break;
                    case clave_TerminarTema:
                        /*
                        Final_tema() para marcarlo como terminado e
                        ir() para pasar qal siguiente tema
                        estos abajo en el .then
                        */
/*
                        swal({
                                position: 'center',
                                type: 'success',
                                title: '<i>Vamos al siguiente!!</i>',
                                animation: false,
                                customClass: 'animated flipInX',
                                allowOutsideClick: false,
                                showConfirmButton: false,
                                allowOutsideClick: false,
                                timer: 1500
                            })
                            .then((result) => {
                                final_tema();
                                ir(IDActual + 1);
                            });
                        break;
                    case clave_borrar:
                        /*
                         se carga la informacion del config.json,
                         como la primera vez que se entra
                         es un RESET
                         */
/*
                        swal({
                                position: 'center',
                                type: 'success',
                                title: '<i>Progreso Borrado!!</i>',
                                animation: false,
                                customClass: 'animated flipInX',
                                allowOutsideClick: false,
                                showConfirmButton: false,
                                allowOutsideClick: false,
                                timer: 1500
                            })
                            .then((result) => {
                                obj = $.parseJSON(ConfigurationJson); // creamos un objeto Json de el texto leido
                                //Guardar el contenido recuperado del LMS en las variables locales.
                                setValues(obj);
                                initConfig(obj);
                                guardarDatos();
                                limpiarMenu();
                                cargarBarra();
                                llamar_menu();

                            });
                        break;
                    case clave_eval:
                        //codigo  para backdoor de evaluacion
                        console.log("NumPreguntas desde start:" + canvasContenido.mc_eval.timeline.duration);
                        NumPreguntas = canvasContenido.mc_eval.timeline.duration;
                        //for para agregar automaticamente la misma cantidad de checkbox que de preguntas en la EVAL
                        for (var j = 1; j <= NumPreguntas; j++) {
                            checkboxText += '<label><input id="swal-input' + j + '" onchange="toggleCheckbox(this)" class="swal2-input" type="checkbox" value="' + j + '"> Pregunta' + j + '</label>'
                        }
                        console.log(checkboxText);
                        swal({
                            position: 'center',
                            type: 'success',
                            title: '<i>Backdoor para Eval Activado!!</i>',
                            animation: false,
                            customClass: 'animated flipInX',
                            allowOutsideClick: false,
                            showConfirmButton: false,
                            allowOutsideClick: false,
                            timer: 1500
                        }).then((result) => {
                            //Inicia la seleccion de preguntas
                            swal({
                                title: '<i>Backdoor Evaluacion</i>',
                                position: 'center',
                                width: 800,
                                padding: 0,
                                type: 'question',
                                allowOutsideClick: false,
                                animation: false,
                                customClass: 'animated zoomIn',
                                html: checkboxText,
                                focusConfirm: false,
                            }).then((result) => {
                                swal({
                                        position: 'center',
                                        type: 'success',
                                        title: '<i>Modificacion Completa</i>',
                                        animation: false,
                                        customClass: 'animated flipInX',
                                        allowOutsideClick: false,
                                        showConfirmButton: false,
                                        allowOutsideClick: false,
                                        timer: 1500
                                    })
                                    .then((result) => {
                                        console.log("las modificacion se completo");
                                    });
                            });
                        });

                        break;
                    default:
                        swal({
                                position: 'center',
                                type: 'error',
                                title: '<i>Clave No Valida!!</i>',
                                animation: false,
                                customClass: 'animated shake',
                                allowOutsideClick: false,
                                showConfirmButton: false,
                                allowOutsideClick: false,
                                timer: 1500
                            })
                            .then((result) => {
                                console.log("clave incorrecta");
                            });
                        break;
                }
                actualizarMenu();
            });
    }
};

//esta funcion se comiunica con los html de los checkbox para el backdoor de la evaluacion
function toggleCheckbox(element) {
    if (element.checked) { //un switch para los checkbox, agrega o quita al contador
        contControlCheckbox++;
    } else {
        contControlCheckbox--;
    }
    if (contControlCheckbox > 10) { // si ha seleccionado mas de 10 preguntas
        console.log("Ya no es aceptado");
        element.checked = false; // se desSelecciona
        contControlCheckbox--; // y se quita del contador el eleiminado
    }
    controlEvalArray = 0;
    //codigo para modificar el array en la EVAL
    console.log("antes de back:" + canvasContenido.Array);
    for (var i = 1; i <= NumPreguntas; i++) {
        //codigo para checar los check en true
        if (document.getElementById('swal-input' + i + '').checked) {
            canvasContenido.Array[controlEvalArray] = i;
            controlEvalArray++;
        }
    }
    console.log("despues de back:" + canvasContenido.Array);
    console.log(contControlCheckbox);
}
*/
// //Función que limpia la combinación de teclas
//window.onkeyup =tecup(event);
//document.getElementById("content").onkeyup  = tecup(event);


window.onkeyup = function(event) {
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
window.onkeydown = function(event) {
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