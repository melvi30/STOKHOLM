// Cuando hago click en "fas" le añado "ver" a "nav"
'use strict'

const fas = document.querySelector(".fas")
const menu = document.querySelector(".menu")

fas.addEventListener("click",function() {
    menu.classList.add("ver")
})

