const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".navegacion");
const items = document.querySelectorAll(".item");

menu.addEventListener("click", () => {
    container.classList.toggle("container-closed");
    menu.classList.add("menu-animation-right");
    setTimeout(() => {
        menu.classList.remove("menu-animation-right");
    }, 1000)
});