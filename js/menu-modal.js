const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const navigationItems = document.querySelectorAll(".navigation__item");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

// Open/close for button
menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

// Closing menu after clicking on .navigation__item
navigationItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });
});
