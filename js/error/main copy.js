const palabras_secretas = [
  "ORACLE",
  "ALURA",
  "HTML",
  "CSS",
  "JS",
  "DEV",
  "JAKUB",
  "ALURA",
  "ALURA",
];

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "transparent";
pincel.fillRect(0, 0, pantalla.width, pantalla.height);

// Base
function base() {
  pincel.fillStyle = "#0A3871";
  pincel.fillRect(100, 140, 100, 2);
}

// Columna de la Base
function columna_base() {
  pincel.fillStyle = "#0A3871";
  pincel.fillRect(127, 20, 2, 120);
}

// Linea horizontal de la Base
function lina_horizontal_base() {
  pincel.fillStyle = "#0A3871";
  pincel.fillRect(127, 20, 60, 2);
}

// Linea vertical de la Base
function lina_vertical_base() {
  pincel.fillStyle = "#0A3871";
  pincel.fillRect(187, 20, 2, 15);
}

// Cabeza
function cabeza() {
  pincel.strokeStyle = "#0A3871";
  pincel.beginPath();
  pincel.arc(188, 45, 10, 0, 2 * Math.PI, true);
  pincel.lineWidth = 2;
  pincel.closePath();
  pincel.stroke();
}

// Columna de la persona
function columna_persona() {
  pincel.fillStyle = "#0A3871";
  pincel.fillRect(187, 55, 2, 45);
}

// Brazo izquierdo
function brazo_izquiero() {
  pincel.strokeStyle = "#0A3871";
  pincel.beginPath();
  pincel.moveTo(187, 55);
  pincel.lineTo(176, 80);
  pincel.lineWidth = 2;
  pincel.closePath();
  pincel.stroke();
}

// Brazo derecho
function brazo_derecho() {
  pincel.strokeStyle = "#0A3871";
  pincel.beginPath();
  pincel.moveTo(189, 55);
  pincel.lineTo(200, 80);
  pincel.lineWidth = 2;
  pincel.closePath();
  pincel.stroke();
}

// Pie izquierdo
function pie_izquiero() {
  pincel.strokeStyle = "#0A3871";
  pincel.beginPath();
  pincel.moveTo(187, 100);
  pincel.lineTo(176, 125);
  pincel.lineWidth = 2;
  pincel.closePath();
  pincel.stroke();
}

// Pie derecho
function pie_derecho() {
  pincel.strokeStyle = "#0A3871";
  pincel.beginPath();
  pincel.moveTo(189, 100);
  pincel.lineTo(200, 125);
  pincel.lineWidth = 2;
  pincel.closePath();
  pincel.stroke();
}

// base();
// columna_base();
// lina_horizontal_base();
// lina_vertical_base();
// cabeza();
// columna_persona();
// brazo_izquiero();
// brazo_derecho();
// pie_izquiero();
// pie_derecho();

function numero_aleatorio(max) {
  return Math.floor(Math.random() * max);
}

function mostrar_guiones(palabra_elegida) {
  const grupo_lineas = document.getElementById("grupo-lineas");
  let grupo_lineas_html = "";
  for (let i = 0; i < palabra_elegida.length; i++) {
    grupo_lineas_html += '<input type="text" class="text-center" disabled>';
  }
  grupo_lineas.innerHTML = grupo_lineas_html;
}

function cargar_letras(palabra_elegida, array_letras) {
  const ingresar_letras = document.getElementById("ingresar-letras");
  let ingresar_letras_html = ``;
  for (let i = 0; i < palabra_elegida.length; i++) {
    ingresar_letras_html += `<input type="text" class="text-center" id="${array_letras_id[i]}">`;
  }
  ingresar_letras.innerHTML = ingresar_letras_html;
}

base();
const longitud_array = palabras_secretas.length;
const palabra_elegida = palabras_secretas[numero_aleatorio(longitud_array)];
mostrar_guiones(palabra_elegida);

let array_letras = [];
let array_letras_id = [];
array_letras = Array.from(palabra_elegida);
array_letras_id = Array.from(palabra_elegida, (val, index) => val + index);
console.log(array_letras);

cargar_letras(palabra_elegida, array_letras);

function mostrarInformacionCaracter(evObject) {
  let caracter = String.fromCharCode(evObject.which);
  if (evObject.which != 0 && evObject.which != 13) {
    console.log("Tecla pulsada: " + caracter);
  } else {
    console.log("Pulsada tecla especial" + caracter);
  }

  if (palabra_elegida.includes(caracter.toUpperCase())) {
    for (let i = 0; i < array_letras_id.length; i++) {
      let letra_mostrar = document.getElementById(caracter.toUpperCase()+i);
      if(letra_mostrar) {
        let letra_mostrar_ok = document.getElementById(array_letras_id[i]);
        if(letra_mostrar_ok) {
          letra_mostrar_ok.value = array_letras[i]
          array_letras_id[i] = "0";
          break;
        }
      }
    }
    console.log("Ok");
  } else {
    console.log("T-T");
  }
}

window.onload = function () {
  document.onkeypress = mostrarInformacionCaracter;
};
