const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

addEventListener("scroll", () => {
  header.classList.toggle("navbar-fixed", window.scrollY > 0);
  hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
});

navMenu.addEventListener("click", () => {
  hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
});

document.body.addEventListener("click", function (e) {
  if (!e.target.classList.contains("hamburger-active")) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
