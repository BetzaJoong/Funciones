// Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función

/* <div id="ele1"> hello </div>
<script>
function pintar(){
ele = document.getElementById("ele1")
ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);}
</script> */
// -----------------------------------------------

// ______Solucion_____

// Color amarillo

function pintar() {
    this.style.backgroundColor = 'yellow';
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);


// Color verde

function pintar(color = 'green') {
    const ele = document.getElementById("ele1");
    ele.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', function () {
    pintar(); // Establecer el color verde por defecto al cargar la página

    const ele = document.getElementById("ele1");
    ele.addEventListener("click", function () {
        pintar('yellow');
    });
});
