// Propiedades

console.log(window.innerWidth); //Hace referencia al ancho del viewporrt
console.log(window.innerHeight); //Hace referencia a la altura del viewporrt

console.log(window.outerWidth); //Hace referencia al ancho del navegador
console.log(window.outerHeight); //Hace referencia al alto del navegador

window.addEventListener("resize",(e)=>{
  console.clear();
  console.log("****Evento Resize******");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);

});

window.addEventListener("scroll",(e)=>{
    console.clear();
    console.log("****Evento Scroll****");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load",(e)=>{
    console.clear();
    console.log("****Evento Load****");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

//Este evento se ejecuta mas rapido
window.addEventListener("DOMContentLoaded",(e)=>{
    console.clear();
    console.log("****Evento DOMContentLoaded****");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});