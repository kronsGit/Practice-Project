function saludar(nombre = "Desconocid@"){
    alert(`Hola mucho gusto ${nombre}`);
}

const $eventMultiple = document.getElementById('evento-multiple');


/*Tenemos que usar una arrow funtion para poder usar parametros en un manejador de eventos multiple, porque primero captura la arrow funtion y luego en la arrow funtion se pueden colocar las funciones con las que trabajaremos*/
$eventMultiple.addEventListener('click',() => {
    saludar();
    saludar("Ivan");
});


//Removiendo eventos, para poder remover un evento es necesario primero crear una funcion expresada o declarada no se puede usar con arrow functions, luego se crea el eventListener y en los paremetros que requierese coloca la nueva funcion que acabamos de crear
const $eventRemove = document.getElementById('evento-remover'); //Guardando el boton en una variable
// Funcion expresada
const removerDobleClick = (e) => {
 alert(`Removiendo el evento de tipo ${e.type}`);
 $eventRemove.removeEventListener("dblclick",removerDobleClick);
 $eventRemove.disabled = true;
};

$eventRemove.addEventListener("dblclick",removerDobleClick);
