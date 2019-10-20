// /*
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Limpia el contenedor de los contenidos
//  */
// function limpiarContenido() {
// 	console.log("**********************limpiarContenido");
// 	var contenido = document.getElementById("Contenido");
// 	contenido.src = "*";
// 	console.log(contenido.src);
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Limpia el contenedor del menu
//  */
// function limpiarMenu() {
// 	console.log("limpiarMenu");
// 	var menu = document.getElementById("menu");
// 	menu.src = "";
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Limpia el contenedor de la barra
//  */
// function limpiarBarra() {
// 	console.log("limpiarBarra");
// 	var barra = document.getElementById("Barra");
// 	barra.src = "";
// }
// /**
//  * @param valor Canvas del menu
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Obtiene el canvas del menu
//  */
// function getMenu(valor) {
// 	console.log("Obtener Menu");
// 	canvasMenu = valor;
// 	actualizarMenu();
// }
// /**
//  * @param Valor Canvas de la barra
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Obtiene el canvas de la barra
//  */
// function getBarra(valor) {
// 	console.log("Obtener Barra");
// 	canvasBarra = valor;
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Llama la evaluacion en la version 1 del template
//  */
// function llamar_evaluacion() {
// 	$('#div_contenido').fadeOut("slow", function () {
// 		intentoAct++;
// 		if (intentoAct <= oportunidades) {
// 			limpiarContenido();
// 			console.log("Lammar evaluacion start");
// 			ocultar_menu(); // oculta el menu
// 			var iframe = document.getElementById("Contenido");
// 			console.log("temas/" + obj.NombreEval + ".html");
// 			iframe.src = "temas/" + obj.NombreEval + ".html";
// 			terminado = true; // la variable de curso terminado se habilita
// 			iframe.onload = function () {
// 				$('#div_contenido').fadeIn();
// 			};
// 		} else {
// 			/*
// 			            swal({
// 			                    position: 'center',
// 			                    type: 'error',
// 			                    title: '<i>Oops!!</i>',
// 			                    html: '<i>Ya no cuentas con oportunidades para realiazar la Evaluacion</i>',
// 			                    animation: false,
// 			                    customClass: 'animated shake',
// 			                    allowOutsideClick: false,
// 			                    showConfirmButton: true

// 			                })
// 			                .then((result) => {
// 			                    console.log("Sin Oportunidades");
// 			                });
// 			        */
// 		}
// 	});
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Llama el glosario en version 1 del template
//  */
// function llamar_glosario() {
// 	console.log("Llama Glosario");
// 	estadoMenu = false;
// 	visibleMenu = $("#div_menu").is(":visible");
// 	visibleGlosario = $("#div_glosario").is(":visible");
// 	visibleSim = $("#div_sim").is(":visible");
// 	visibleVid = $("#div_vid").is(":visible");
// 	console.log(visibleGlosario, visibleMenu);
// 	if (visibleGlosario == false) {
// 		$('#div_glosario').fadeIn();
// 		if (visibleMenu == true) {
// 			temporalMenuContenido = "menu";
// 			$('#div_menu').hide();
// 		} else if (visibleSim == true) {
// 			temporalMenuContenido = "sim";
// 			$('#div_sim').hide();
// 		} else if (visibleVid == true) {
// 			temporalMenuContenido = "vid";
// 			$('#div_vid').hide();
// 		} else {
// 			temporalMenuContenido = "contenido";
// 			$('#div_contenido').hide();
// 			$('#div_retro').hide();
// 		}
// 	} else {
// 		$('#div_glosario').hide();
// 		if (temporalMenuContenido == "menu") {
// 			$('#div_menu').fadeIn();
// 		} else if (temporalMenuContenido == "sim") {
// 			$('#div_sim').fadeIn();
// 		} else if (temporalMenuContenido == "vid") {
// 			$('#div_vid').fadeIn();
// 		} else {
// 			$('#div_contenido').fadeIn();
// 			$('#div_retro').fadeIn();
// 		}
// 	}
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Muestra / Oculta el menu canvas del template v1
//  */
// function ocultarMostrar_menu() {
// 	console.log("ocultarMostrar_menu();");
// 	if (estadoMenu == true) {
// 		var iframe = document.getElementById("Contenido");
// 		if (iframe.src.indexOf(obj.NombreIntro + ".html") < 1) { //Validación para evitar que cargue la portada
// 			ocultar_menu();
// 			$('#div_contenido').fadeIn();
// 		}
// 	} else {
// 		mostrar_menu();
// 	}
// 	actualizarMenu();
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Oculta la barra canvas v1 del template
//  */
// function HideBar() {
// 	$('#div_barra').hide();
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Oculta el menu canvas en v1 del template
//  */
// function ocultar_menu() {
// 	console.log("oculta menu");
// 	$('#div_loader').hide();
// 	$('#div_menu').hide();
// 	$('#div_glosario').hide();
// 	// $('#div_contenido').fadeIn();
// 	estadoMenu = false;
// 	try {
// 		getEdo_botones();
// 	} catch (e) {
// 		console.log("Barra no disponible", e);
// 	}
// }
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Muestra el menu canvas en v1 del tempalte
//  */
// function mostrar_menu() {
// 	console.log("muestra menu");
// 	$('#div_loader').hide();
// 	$('#div_contenido').hide();
// 	$('#div_retro').hide();
// 	$('#div_sim').hide();
// 	$('#div_vid').hide();
// 	$('#div_glosario').hide();
// 	$('#div_menu').fadeIn();
// 	estadoMenu = true;
// 	limpiarSim();
// 	// setEdo_botones();
// 	// canvasBarra.deshabilitar_atras();
// 	// canvasBarra.deshabilitar_siguiente();
// 	this.habilitar_deshabilitar_btns(getBtnArray(this.btnAtras, this.btnSiguiente), "d", "mostrar_menu");
// }
// //almacena la configuración de los botones atras y siguiente.
// //Indispensable para mostrar botones nuevamente con su última configuración
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Almacena la configuración de los botones atras y siguiente.
//  */
// function setEdo_botones() {
// 	console.log("---setEdo_botones();");
// 	//Almacena el estado del cursor
// 	// edoAtras = canvasBarra.btn_atras.cursor;
// 	// edoSiguiente = canvasBarra.btn_siguiente.cursor;
// 	console.log("Estado de Botones: Siguiente: " + edoSiguiente + " Atras: " + edoAtras);
// }
// //recupera configuracion de botones atras y siguiente y los restablece según la información almacenada en setEdo_botones()
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Recupera estado de botones atras y siguiente y los restablece segun la informacion almacnada en edoBotones. En v1 del template.
//  */
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
// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: Precarga el Glosario en v1 del template
//  */
// function precargar_glosario() {
// 	console.log("precargar_glosario");
// 	var iframe = document.getElementById("glosario");
// 	iframe.src = "temas/template_glosario.html";
// 	console.log(iframe);
// }

// //funciones para obtener 
// function getRetros(valor) {
// 	console.log("Obteniendo Retros");
// 	canvasRetro = valor;
// }

// function getMensajes(valor) {
// 	console.log("Obteniendo mensajes");
// 	canvasMensajes = valor;
// }

// function getAlertas(valor) {
// 	console.log("obteniendo alertas");
// 	canvasAlertas = valor;
// }

// function llamarRetros(valor, text) {
	// console.log("se ejecuto la funcion llamarRetros");
	// var visibleRetros = $("#div_retro").is(":visible");
	// if (visibleRetros) {
	// 	console.log("escondiendo retro");
	// 	canvasRetro.gotoAndStop(0);
	// 	$('#div_retro').hide();
	// } else {
	// 	console.log("mostrando retros");
	// 	console.log(valor);
	// 	if (text == null || text == undefined || text == "") {
	// 		canvasRetro.gotoAndStop(valor);
	// 	} else {
	// 		console.log(text);
	// 		canvasRetro.texto = text;
	// 		if (valor == "bien") {
	// 			canvasRetro.gotoAndStop("retrobien");
	// 		} else if (valor == "mal") {
	// 			canvasRetro.gotoAndStop("retromal");
	// 		} else {
	// 			console.log("el parametro de la funcion 'llamarRetros' esta mal escrito");
	// 		}
	// 	}
	// 	$('#div_retro').fadeIn();
	// }

// }

// function preCargarRetros() {
// 	console.log("precargandoRetros");
// 	var iframe = document.getElementById("retros");
// 	iframe.src = "temas/retrosTemplate.html";
// 	console.log(iframe);
// 	$('#div_retro').hide();
// }

// function preCargarAlertas() {
// 	console.log("precargandoAlertas");
// 	var iframe = document.getElementById("alertas");
// 	iframe.src = "temas/templatesAlerts.html";
// 	console.log(iframe);
// 	$('#div_alerta').hide();
// }

// function preCargarMensajes() {
// 	console.log("precargandoMensajes");
// 	var iframe = document.getElementById("mensajes");
// 	iframe.src = "temas/banderillas_v1.html";
// 	console.log(iframe);
// 	$('#div_mensajes').hide();
// }

// //Función para cargar la barra
// function cargarBarra() {
// 	console.log("cargar Barra");
// 	var iframe = document.getElementById("Barra");
// 	iframe.src = "temas/template_barra_canvas.html";
// 	$('#div_barra').fadeIn();
// 	console.log("termina de cargar barra");
// }

//#region LegacyFunction
//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
// function habilitar_barra() { // ya no se ocupa
// 	canvasBarra.habilitar_barra();
// }
// function deshabilitar_eval() {
// 	canvasBarra.deshabilitar_eval();
// }
// function llamarMensajes(valor) {
// 	var visibleMensajes = $("#div_mensajes").is(":visible");
// 	if (visibleMensajes) {
// 		console.log("escondiendo mensajes");
// 		$('#div_mensajes').hide();
// 	} else {
// 		//esto para que el mensaje desaparesca al dar siguiente l a funcion se
// 		//manda a llamar desde "siguiente_frame" y al darle valor 0 no hace nada
// 		//pero si los mensajes estaban activos entonces los esconde
// 		if (valor != 0) {
// 			console.log("mostrando mensajes");
// 			console.log(valor);
// 			$('#div_mensajes').fadeIn();
// 			canvasMensajes.gotoAndPlay(valor);
// 		}
// 	}
// }

// function llamarAlertas(valor) {
// 	console.log("se ejecuto la funcion llamar alertas");
// 	var visibleAlertas = $("#div_alerta").is(":visible");
// 	if (visibleAlertas) {
// 		console.log("escondiendo alertas");
// 		$('#div_alerta').hide();
// 		preCargarAlertas();

// 	} else {
// 		if (valor != 0) {
// 			console.log("mostrando alertas");
// 			console.log(valor);
// 			$('#div_alerta').fadeIn();
// 			canvasAlertas.gotoAndPlay(valor);
// 		}
// 	}
// }
// //funcion de comandos para que sea mas facil para DI
// function comando(hacer, objetivo) { // Legacy Function for v2 template
// 	switch (hacer) {
// 		case "iniciar":
// 			try {
// 				console.log("Se inicio el tema");
// 				getCanvas(objetivo);
// 				reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
// 				inicio_tema();
// 			} catch (err) {
// 				console.log("No se pudo iniciar el tema correctamente :", err);
// 			}
// 			break;
// 		case "resetear":
// 			try {
// 				console.log("Se avanzo en el tema");
// 				reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
// 			} catch (err) {
// 				console.log("No se pudo reiniciar la barra :", err);
// 			}
// 			break;
// 		case "terminar":
// 			try {
// 				console.log("Termino el tema");

// 				final_tema();
// 			} catch (err) {
// 				console.log("nose pudo finalizar el tema correctamente :", err);
// 			}
// 			break;
// 		default:
// 			console.log("Asegurate dde escribir la palabra exacta en la funcion 'comando'");
// 			break;
// 	}

// }



// //#endregion LegacyFunction
// //-------------------------------------------------------------------------------------------------------------
// //-------------------------------------------------------------------------------------------------------------

// //--------------------------------------------------------------------------------
// //#region MENU_HTML_FUNCIONES
// //--------------------------------------------------------------------------------

// function llamar_menu() {
// 	console.log("LLAMAR MENU");
// 	$('#div_menu').fadeIn();
// 	$('#div_loader').hide();
// 	$('#div_retro').hide();
// 	$('#div_contenido').hide();
// 	$('#div_sim').hide();
// 	$('#div_vid').hide();
// 	if (canvasBarra != undefined) { //Valida si se ha cargado previamente la barra
// 		canvasBarra.cambio_cerrar(0);
// 	}
// 	//se llama al menu 
// 	var menu = document.getElementById("menu");
// 	console.log("MENU" + menu.src + "|" + menu.src.indexOf("start.html"));
// 	if (menu.src == "" || menu.src == null || menu.src == undefined || menu.src.indexOf("start.html") > 1) {
// 		menu.src = "temas/template_menu.html";
// 	}

// 	limpiarSim(); // se limpia la 
// // 

// /**
//  * @param NA
//  * @returns void
//  * @description FUNCION LEGACY ::|:: DEPRECATED
//  */
// function terminarTema() {
// 	final_tema();
// 	ir(IDActual + 1);
// }

// /**
//  * @params NA
//  * @returns void
//  * @description Muestra en pantalla el mensaje para "TEMA COMPLETADO".
//  * //muestra el mensaje de siquiente verde
//  * */
// function siguiente_verde() { // Renombrar a Tema completado
// 	canvasBarra.habilitar_siguiente();
// 	llamarMensajes("verde");
// 	setEdo_botones();
// }
// /**
//  * @params NA
//  * @returns void
//  * @description Muestra en pantalla el mensaje para "DAR CLICK EN SIGUIENTE PARA CONTINUAR".
//  * //muestra el mensaje de siquiente naranja
//  * */
// function siguiente_naranja() {
// 	reset_navegacion(canvasContenido.timeline.position + 1, canvasContenido.timeline.duration);
// 	reset_navegacion(canvasContenido.timeline.position, canvasContenido.timeline.duration);
// 	canvasBarra.habilitar_siguiente();
// 	llamarMensajes("naranja");
// 	setEdo_botones();
// }
