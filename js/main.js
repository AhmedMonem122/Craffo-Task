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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },

  loop: true,
  watchSlidesProgress: true,

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
