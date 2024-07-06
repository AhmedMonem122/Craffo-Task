"use strict";

// Selectors
const menuSlider = document.querySelector(".menu-slider");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");

burgerIcon.addEventListener("click", () => {
  menuSlider.classList.add("translate-x-0");
});

closeIcon.addEventListener("click", () => {
  menuSlider.classList.remove("translate-x-0");
});
