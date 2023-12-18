
function holaMundo(){
    alert("Hola mundo");
}


const $eventSemantico = document.getElementById("evento-semantico");
const $eventMultiple = document.getElementById("evento-multiple");


// Cuando tienes un evento como si fuera semantico simplemente iguales el evento semantico al nombre de la funcion pero sin los parentesis, porque con los parentesis significa que al momento que cargue el navegador se cargara la funcion

//Asignacion del evento
$eventSemantico.onclick = holaMundo; // En un evento semantico se tiene que igualar la variable a la funcion pero sin los parentesis para que no se ejecute la funcion al iniciar la carga

// Nota de los eventos semanticos
// No puedes asignar varias funciones a un mismo evento, por ejemplo si le asignamos a la variable $eventSemantico una nueva funcion entonces se va como sobreescribir
$eventSemantico.onclick = function(e){
    alert("Hola mundo Manejador de Eventos semanticos")
}

//Evento multiple eventListener
$eventMultiple.addEventListener("click",holaMundo);
$eventMultiple.addEventListener("click", (e)=>{
    alert("Hola este es un eventos mutiple");
});

