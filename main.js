const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", function(){
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
});

closeMenu.addEventListener("click", function(){
    this.style.display = "none";
    nav.style.display = "none";
    menu.style.display = "block";
});
