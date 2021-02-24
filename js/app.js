'use strict';
// Cuando hago click en "fas" le añado "ver" a "nav"
var fas = document.querySelector(".fas");
var menu = document.querySelector(".menu");
var carct = document.querySelector(".ul");
var subm = document.querySelector(".ul2");
fas.addEventListener("click", function () {
    menu.classList.toggle("ver");
});
carct.addEventListener("click", function () {
    subm.classList.toggle("ver");
});
