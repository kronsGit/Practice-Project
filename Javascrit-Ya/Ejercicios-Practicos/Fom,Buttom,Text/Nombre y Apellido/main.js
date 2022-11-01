/*Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos en un tercer text (Tener en cuenta que podemos modificar la propiedad value de un objeto TEXT cuando ocurre un evento)*/


const unirCadena = function(){
    let n = document.getElementById("name").value; //Obteniendo datos del input
    let a = document.getElementById("lastname").value; //Obteniendo datos del input
    alert(`${n} ${a}`);
}