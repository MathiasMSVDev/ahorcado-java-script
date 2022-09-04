const palabras_secretas = [
    "ORACLE",
    "ALURA",
    "HTML",
    "CSS",
    "JS",
    "DEV",
    "JAKUB",
];

const longitud_array = palabras_secretas.length;

let juego_terminado = false;

let array_letras = [];
let array_palabra_verificar = [];
let array_errores = [];
let intentos = 0;

function numero_aleatorio(numero_maximo) {
    return Math.floor(Math.random() * numero_maximo);
}

function elegir_palabra_secreta(longitud_array) {
    return palabras_secretas[numero_aleatorio(longitud_array)];
}

const palabra_elegida = elegir_palabra_secreta(longitud_array);

array_letras = Array.from(palabra_elegida);
array_palabra_verificar = Array.from(palabra_elegida);
console.log(array_letras);
console.log(array_palabra_verificar);

function mostrar_guiones(palabra_elegida) {
    const grupo_lineas = document.getElementById("grupo-lineas");
    let grupo_lineas_html = ``;
    for (let i = 0; i < palabra_elegida.length; i++) {
        grupo_lineas_html += `<input type="text" class="text-center" disabled>`;
    }
    grupo_lineas.innerHTML = grupo_lineas_html;
}

function cargar_input_letras(palabra_elegida) {
    const ingresar_letras = document.getElementById("ingresar-letras");
    let ingresar_letras_html = ``;
    for (let i = 0; i < palabra_elegida.length; i++) {
        ingresar_letras_html += `<input type="text" class="text-center" id="${i}" disabled>`;
    }
    ingresar_letras.innerHTML = ingresar_letras_html;
}

function show_swal_perdiste() {
    Swal.fire({
        icon: "error",
        title: "Perdiste",
        html: `La palabra secreta era: <b>${palabra_elegida}</b> <br><br> ¿Deseas volver a jugar?`,
        showCloseButton: true,
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./game.html";
        } else if (result.isDenied) {
            window.location.href = "./";
        } else if (result.isDismissed) {
            console.log("Cerrado desde la X");
        }
    });
}

function show_swal_ganaste() {
    Swal.fire({
        icon: "success",
        title: "Ganaste!!!",
        text: "¿Deseas volver a jugar?",
        showCloseButton: true,
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./game.html";
        } else if (result.isDenied) {
            window.location.href = "./";
        } else if (result.isDismissed) {
            console.log("Cerrado desde la X");
        }
    });
}

function music_perdedor() {
    let sound_perdedor = new Howl({
        src: [
            "https://github.com/JakubSkraly/ahorcado-java-script/blob/main/sound/perdedor.mp3?raw=true",
        ],
        html5: true,
    });
    sound_perdedor.play();
}

function music_ganador() {
    let sound_ganador = new Howl({
        src: [
            "https://github.com/JakubSkraly/ahorcado-java-script/blob/main/sound/ganador.mp3?raw=true",
        ],
        html5: true,
    });
    sound_ganador.play();
}

function show_confetti() {
    const jsConfetti = new JSConfetti({ pantalla });

    jsConfetti.addConfetti({
        confettiNumber: 2000,
    });
}

function show_toast(icon, message) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: icon,
        title: message,
    });
}

function verificar_intentos(intentos) {
    switch (intentos) {
        case 1:
            columna_base();
            break;
        case 2:
            lina_horizontal_base();
            break;
        case 3:
            lina_vertical_base();
            break;
        case 4:
            cabeza();
            break;
        case 5:
            columna_persona();
            break;
        case 6:
            brazo_izquiero();
            break;
        case 7:
            brazo_derecho();
            break;
        case 8:
            pie_izquiero();
            break;
        case 9:
            pie_derecho();
            juego_terminado = true;
            setTimeout(music_perdedor, 100);
            setTimeout(show_swal_perdiste, 1000);
            break;
        default:
            break;
    }
}

function ejecutar_juego(evObject) {
    const caracter = String.fromCharCode(evObject.which).toUpperCase();

    if (evObject.which != 0 && evObject.which != 13) {
        // Acepta solo letras mayusculas, Ñ, Ä, Ë, Ï, Ö, Ü => PINGÜINO, ÑANDU
        if (/^[A-ZÄËÏÖÜ\u00d1\s]*$/.test(caracter)) {
            const letra_encontrada = array_palabra_verificar.find((element) => element == caracter);
            if (letra_encontrada) {
                const posicion = array_palabra_verificar.indexOf(caracter);
                const letra_mostrar = document.getElementById(posicion);
                if (letra_mostrar) {
                    letra_mostrar.value = array_letras[posicion];
                    array_palabra_verificar[posicion] = "";
                    console.log(array_palabra_verificar);
                    if (array_palabra_verificar.filter((element) => element == "").length == array_letras.length) {
                        juego_terminado = true;
                        setTimeout(music_ganador, 100);
                        setTimeout(show_confetti, 500);
                        setTimeout(show_swal_ganaste, 1000);
                        setTimeout(show_confetti, 2000);
                    }
                }
            } else {
                if (array_errores.find((element) => element == caracter)) {
                    return;
                } else {
                    let error_letras = document.getElementById("error-letras");
                    let error_letras_html = `<input type="text" class="text-center" value="${caracter}">`;
                    error_letras.innerHTML += error_letras_html;
                    array_errores.push(caracter);
                    intentos += 1;
                    verificar_intentos(intentos);
                }
            }
        } else {
            show_toast("info", "Solo se permiten letras")
        }
    } else {
        show_toast("info", "Solo se permiten letras")
    }
}

function jugar(evObject) {
    if (juego_terminado) {
        return;
    } else {
        ejecutar_juego(evObject);
    }
}

window.onload = function () {
    document.onkeypress = jugar;
    base();
    mostrar_guiones(palabra_elegida);
    cargar_input_letras(palabra_elegida);
};