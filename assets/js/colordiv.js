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

// _______Solucion_______

let selectedColor = '';
let isMessageShown = false;

function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

document.addEventListener('keydown', function (event) {
    const lowercaseKey = event.key.toLowerCase();
    const uppercaseKey = event.key.toUpperCase();

    if (event.getModifierState('CapsLock')) {
        showMessage('Solo se aceptan letras minúsculas', 'red');
        isMessageShown = true;
        return;
    }

    isMessageShown = false;

    if (lowercaseKey === 'a') {
        selectedColor = '#dcc6b0';
        showMessage('Has seleccionado la letra "a" y el color es café', 'green');
    } else if (lowercaseKey === 's') {
        selectedColor = '#dbffff';
        showMessage('Has seleccionado la letra "s" y el color es turqueza', 'green');
    } else if (lowercaseKey === 'd') {
        selectedColor = '#fefacc';
        showMessage('Has seleccionado la letra "d" y el color es beige', 'green');
    } else {
        showMessage('No se acepta esa letra, vuelve a intentarlo', 'red');
    }
});

document.getElementById('resetButton').addEventListener('click', function () {
    selectedColor = '';
    document.getElementById('div1').style.backgroundColor = '';
    document.getElementById('div2').style.backgroundColor = '';
    document.getElementById('div3').style.backgroundColor = '';
    document.getElementById('div4').style.backgroundColor = '';
    showMessage('', 'black');
});

document.getElementById('div1').addEventListener('click', function () {
    if (!isMessageShown) {
        this.style.backgroundColor = selectedColor;
    }
});

document.getElementById('div2').addEventListener('click', function () {
    if (!isMessageShown) {
        this.style.backgroundColor = selectedColor;
    }
});

document.getElementById('div3').addEventListener('click', function () {
    if (!isMessageShown) {
        this.style.backgroundColor = selectedColor;
    }
});

document.getElementById('div4').addEventListener('click', function () {
    if (!isMessageShown) {
        this.style.backgroundColor = selectedColor;
    }
});



