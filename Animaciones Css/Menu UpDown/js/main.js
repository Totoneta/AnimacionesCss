const menulist = document.querySelector(".menu-item");
const submenulist = document.querySelector(".menu-item-sub");

let abierto = false;

menulist.addEventListener("click", () => {
    if (abierto) {
        submenulist.classList.remove("open")
        submenulist.classList.add("closed")
        abierto = false;
    } else {
        submenulist.classList.remove("closed")
        submenulist.classList.add("open")
        abierto = true;
    }
});