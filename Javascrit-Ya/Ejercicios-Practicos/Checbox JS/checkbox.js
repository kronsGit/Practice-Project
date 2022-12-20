// Confeccionar una página que muestre 4 lenguajes de programación que el usuario puede seleccionar si los conoce. Luego mostrar un mensaje indicando la cantidad de lenguajes que ha seleccionado el operador.

// Arrow function funcion expresada
const contarSeleccionados = ()=>{
    let cant = 0;

    if(document.getElementById('checkbox1').checked) cant++;
    if(document.getElementById('checkbox2').checked) cant++;
    if(document.getElementById('checkbox3').checked) cant++;
    if(document.getElementById('checkbox4').checked) cant++;

    alert(`Conoce ${cant} de lenguajes.`);
}