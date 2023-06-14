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

// Color amarillo
function pintar() {
    this.style.backgroundColor = 'yellow';
}

const ele1 = document.getElementById("ele1");
ele1.addEventListener("click", pintar);



// Color verde 
let ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
    if (ele.style.backgroundColor === 'green') {
        ele.style.backgroundColor = 'yellow';
    } else {
        ele.style.backgroundColor = 'green';
    }
});
