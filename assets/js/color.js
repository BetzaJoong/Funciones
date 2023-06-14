// Crea un script que guarde dentro de una variable global un color
// dependiendo de la letra del teclado presionada. (2 Puntos).
// ○ Al presionar la letra a un color a tu elección.
// ○ Al presionar la letra s un segundo color a tu elección.
// ○ Al presionar la letra d un tercer color al presionar la letra d.
// ○ Para guardar el color revisa el tip al final del enunciado.
// Dentro del script agrega el evento que al hacerle click a uno de los divs, este
// cambie de color al color seleccionado. Utiliza addEventListener para agregar
// el evento.

// El siguiente script te ayudará a realizar acciones en función de que se presione una tecla

// document.addEventListener('keydown', function (event) {
// if (event.key === 'a') {
// /* Cambiar a color 1 */
// } else if (event.key === 's') {
// /* Cambiar a color 2 */
// }
// })
// -------------------------------------

// _______Solucion______

// Variable global para almacenar la letra y el color seleccionado
let selectedLetter = '';
let selectedColor = '';

// Obtener la selección de la letra mediante prompt
const letter = prompt("Selecciona la letra que deseas elegir:\na para color rojo,\ns para color azul,\nd para color verde.");

// Asignar el color correspondiente según la letra seleccionada
if (letter === 'a') {
    selectedLetter = 'A';
    selectedColor = 'red';
} else if (letter === 's') {
    selectedLetter = 'S';
    selectedColor = 'blue';
} else if (letter === 'd') {
    selectedLetter = 'D';
    selectedColor = 'green';
} else {
    // Si se ingresó una letra no válida, mostrar un mensaje de error y salir del script
    alert("Letra no válida. Selecciona una letra válida (a, s o d).");
    throw new Error("Letra no válida.");
}

// Evento para cambiar el color de fondo al hacer clic en los divs
document.querySelector('#div1').addEventListener('click', function () {
    this.style.backgroundColor = selectedColor; // cambia el color de fondo del elemento actual al color almacenado en la variable selectedColor.
});

document.querySelector('#div2').addEventListener('click', function () {
    this.style.backgroundColor = selectedColor;
});

document.querySelector('#div3').addEventListener('click', function () {
    this.style.backgroundColor = selectedColor;
});


