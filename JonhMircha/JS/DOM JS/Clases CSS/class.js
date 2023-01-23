//Seleccionando al elemento
const $card =  document.querySelector(".card");

console.log($card);
console.log($card.className);//Nombre de clases
console.log($card.classList);//Lista de clases

//Agregar una clase
$card.classList.add("rotate-45");

//Remover una clase
$card.classList.remove("rotate-45");

//Toggle, quita o pone la clase dependiendo si la tiene o no
$card.classList.remove("rotate-45");

//Reemplazar una clase

$card.classList.replace("rotate-45","rotate-135");

//Poner varias clases

$card.classList.add("rotate-45","sepia","opacity");

