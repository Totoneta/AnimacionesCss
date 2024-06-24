const rojo = document.querySelector(".rojo");
const azul = document.querySelector(".azul");
const gris = document.querySelector(".gris");
const btngris = document.querySelector(".gris-btn");
const btnrojo = document.querySelector(".rojo-btn");
const btnazul = document.querySelector(".azul-btn");

function mostrarGris(){

    gris.style.opacity = '1';
    gris.classList.add('llegando');

    azul.style.opacity = '0';
    azul.classList.remove('llegando');
    
    rojo.style.opacity = '0';
    rojo.classList.remove('llegando');

};

function mostrarAzul(){

    azul.style.opacity = '1';
    azul.classList.add('llegando');

    gris.style.opacity = '0';
    gris.classList.remove('llegando');

    rojo.style.opacity = '0';
    rojo.classList.remove('llegando');

};

function mostrarRojo(){
    rojo.style.opacity = '1';
    rojo.classList.add('llegando')

    gris.style.opacity = '0';
    gris.classList.remove('llegando')

    azul.style.opacity = '0';
    azul.classList.remove('llegando')

};

btngris.addEventListener("click", mostrarGris);
btnrojo.addEventListener("click", mostrarRojo);
btnazul.addEventListener("click", mostrarAzul);


























