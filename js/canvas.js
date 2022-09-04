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