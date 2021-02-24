'use strict'


// Cuando hago click en "fas" le añado "ver" a "nav"

const fas = document.querySelector(".fas")
const menu = document.querySelector(".menu")
const carct = document.querySelector(".ul")
const subm = document.querySelector(".ul2")


    fas.addEventListener("click",() => {
         menu.classList.toggle("ver")
         
    })
    
    carct.addEventListener("click",function(){
        subm.classList.toggle("ver")
    })