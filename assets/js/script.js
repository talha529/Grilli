'use strict';






/*Preoad

loading will end after document loaded

*/



const preloader= document.querySelector("[data-preloaded]");

window.addEventListener("load", function(){
preloader.classList.add("loaded");

})






