const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mainMenu = document.querySelector(".main-menu");

const menu = function () {
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  mainMenu.classList.toggle("hidden");
};
openMenu.addEventListener("click", menu);

closeMenu.addEventListener("click", menu);
