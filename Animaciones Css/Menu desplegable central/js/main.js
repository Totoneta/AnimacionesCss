const body = document.querySelectorAll('.something-index')
const btnmenu = document.querySelector(".img-logo-btn");
const navlist = document.querySelector(".navbar");

function HandleMenu() {
    if (navlist.classList.contains('close')) {

        navlist.classList.remove('close-animation');
        navlist.classList.remove('close');

        navlist.classList.add('open-animation');
        navlist.classList.add('open'); 

        body.forEach((el) => {
            el.style.filter = 'blur(100px)'
        })

    } else {

        navlist.classList.remove('open-animation');
        navlist.classList.remove('open');
        

        navlist.classList.add('close-animation');
        setTimeout(()=>{
            navlist.classList.add('close');
        },850)

        body.forEach((el) => {
            el.style.filter = 'blur(0px)'
        })

    }
};


btnmenu.addEventListener("click", HandleMenu);

/*
1er click para arriba:check
2do click para abajo:
*/