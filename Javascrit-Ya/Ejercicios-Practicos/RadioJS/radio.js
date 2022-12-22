// Mostrar cuatro objetos de tipo RADIO que permitan seleccionar los estudios que tiene un usuario:
const mostrarSeleccionado = () =>{
    if(document.getElementById("radio1").checked)  alert("No tienes estudios");
    if(document.getElementById("radio2").checked)  alert("Tienes estudios primarios");
    if(document.getElementById("radio3").checked)  alert("Tienes estudios secundarios");
    if(document.getElementById("radio4").checked)  alert("Tienes estudios universitarios");

}