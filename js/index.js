/*jshint esversion: 6 */
/* jslint node: true */
/* jshint browser: true */

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

// ПОКАЗ МЕНЮ===============================================================

    const menu = document.querySelector('.header__menu-1'),
          burger = document.querySelector('.main__burger-wrp'),
          substrate = document.querySelector('.substrate');

    burger.addEventListener('click', () => {
        menu.classList.toggle('header__active');
        substrate.classList.toggle('show');
    });

});

// ПОКАЗ CATALOG===============================================================

const catalog = document.querySelector('.header__catalog-wrp'),
      catalogBtn = document.querySelector('.header__button'),
      catalogClose = document.querySelector('.header__cross');

catalogBtn.addEventListener('click', () => {
    catalog.classList.add('header__active');
});

catalogClose.addEventListener('click', () => {
    catalog.classList.remove('header__active');
});

// ОПОВЕЩЕНИЕ О ДЕМО=======================================

const demoWrp = document.querySelector(".demo-wrp"),
demoClose = document.querySelector(".demo-close");

function openDemo() {
  demoWrp.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

setTimeout(openDemo, 1000);

demoWrp.addEventListener("click", (e) => {
if (e.target === demoWrp) {
  demoWrp.style.display = "none";
  document.body.style.overflow = "";
}
});

demoClose.addEventListener("click", (e) => {
demoWrp.style.display = "none";
document.body.style.overflow = "";
});

//SWIPER =========================

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },



    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
