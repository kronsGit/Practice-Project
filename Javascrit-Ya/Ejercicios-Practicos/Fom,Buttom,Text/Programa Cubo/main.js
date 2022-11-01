/* Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre dicho valor elevado al cubo (emplear la función alert).*/

const calcularCubo = function(){
    let v = document.getElementById("num").value;
    v = parseInt(v);
    let cubo = v*v*v;
    alert(cubo);
}