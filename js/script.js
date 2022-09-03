var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

// pantalla.width = window.innerWidth;
// pantalla.height = window.innerHeight;

pincel.fillStyle = "transparent"; //f3f5fc
pincel.fillRect(0, 0, pantalla.width, pantalla.height);

// Pie derecho
pincel.strokeStyle = "#0A3871";
pincel.beginPath();
pincel.moveTo(189, 100);
pincel.lineTo(200, 125);
pincel.lineWidth = 2;
pincel.closePath();
pincel.stroke();

// Pie izquierdo
pincel.strokeStyle = "#0A3871";
pincel.beginPath();
pincel.moveTo(187, 100);
pincel.lineTo(176, 125);
pincel.lineWidth = 2;
pincel.closePath();
pincel.stroke();

// Brazo derecho
pincel.strokeStyle = "#0A3871";
pincel.beginPath();
pincel.moveTo(189, 55);
pincel.lineTo(200, 80);
pincel.lineWidth = 2;
pincel.closePath();
pincel.stroke();

// Brazo izquierdo
pincel.strokeStyle = "#0A3871";
pincel.beginPath();
pincel.moveTo(187, 55);
pincel.lineTo(176, 80);
pincel.lineWidth = 2;
pincel.closePath();
pincel.stroke();

// Columna de la persona
pincel.fillStyle = "#0A3871";
pincel.fillRect(187, 55, 2, 45);

// Cabeza
pincel.strokeStyle = "#0A3871";
pincel.beginPath();
pincel.arc(188, 45, 10, 0, 2 * Math.PI, true);
pincel.lineWidth = 2;
pincel.closePath();
pincel.stroke();

// pincel.fillStyle = "#0A3871";
// pincel.beginPath();
// pincel.arc(188, 45, 10, 0, 2 * Math.PI, true);
// pincel.lineWidth = 2;
// pincel.closePath();
// pincel.fill();

// Linea vertical
pincel.fillStyle = "#0A3871";
pincel.fillRect(187, 20, 2, 15);

// Linea de la columna de la Base
pincel.fillStyle = "#0A3871";
pincel.fillRect(127, 20, 60, 2);

// Columna de la Base
pincel.fillStyle = "#0A3871";
pincel.fillRect(127, 20, 2, 120);

// Base
pincel.fillStyle = "#0A3871";
pincel.fillRect(100, 140, 100, 2);
