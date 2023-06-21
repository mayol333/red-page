const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuArrow = document.querySelector(".mobile-menu-arrow");
const body = document.querySelector(".body");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("show-mobile-menu");
  body.classList.add("no-scroll");
});
mobileMenuArrow.addEventListener("click", () => {
  mobileMenu.classList.remove("show-mobile-menu");
  body.classList.remove("no-scroll");
});
console.log("Hello World");
