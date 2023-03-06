function flujoEventos(e){
  console.log(`Hola, te saluda ${this.className},el click lo origino ${e.target.className}`);
}

const $divsEventos = document.querySelectorAll(".eventos-flujo div") 

console.log($divsEventos);



$divsEventos.forEach((div) => {
  //Fase de Burbuja,sigue el flujo como desde adentro
  div.addEventListener("click",flujoEventos);
  div.addEventListener("click",flujoEventos,false);

  //Fase de captura
  // div.addEventListener("click",flujoEventos,true); 
  div.addEventListener("click",flujoEventos,{
    capture:false,
    once:true //Esto permite que el eventos solo se repita una vez en el flujo
  });

});








