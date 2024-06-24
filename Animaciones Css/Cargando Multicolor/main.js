
let cargando = [".", ".", "."];

const texto = document.querySelector(".text");
let index = 0;
texto.innerHTML="CARGANDO"

function mostrarCargando() {
    if (index < cargando.length) {
        texto.innerHTML += cargando[index];
        index++;
    }else{
        texto.innerHTML="CARGANDO"
        index=0;
    }
}
const intervalo = setInterval(mostrarCargando, 700);











