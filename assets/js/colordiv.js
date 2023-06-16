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

// Variable global para almacenar el color seleccionado
let selectedColor = '';

// Función para cambiar el color seleccionado según la tecla presionada
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        selectedColor = 'red';
    } else if (event.key === 's') {
        selectedColor = 'blue';
    } else if (event.key === 'd') {
        selectedColor = 'green';
    }
});

// Evento para cambiar el color de fondo al hacer clic en los divs
document.getElementById('div1').addEventListener('click', function () {
    this.style.backgroundColor = selectedColor;
});

document.getElementById('div2').addEventListener('click', function () {
    this.style.backgroundColor = selectedColor;
});

document.getElementById('div3').addEventListener('click', function () {
    this.style.backgroundColor = selectedColor;
});
    document.getElementById('div4').addEventListener('click', function () {
        this.style.backgroundColor = selectedColor;
});


