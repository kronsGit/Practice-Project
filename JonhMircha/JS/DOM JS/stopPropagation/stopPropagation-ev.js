function flujoEventos(e){
  console.log(`Hola, te saluda ${this.className},el click lo origino ${e.target.className}`);

  e.stopPropagation();
}

const $divsEventos = document.querySelectorAll(".eventos-flujo div") 

console.log($divsEventos);



$divsEventos.forEach((div) => {
  //Fase de Burbuja,sigue el flujo como desde adentro
  div.addEventListener("click",flujoEventos);
});








