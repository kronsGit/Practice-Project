// Solicitar la carga del mail y el curriculum de una persona. Mostrar un mensaje si el curriculum supera los 2000 caracteres.

const controlarCaracteres = ()=>{
    if(document.getElementById("curriculum").value.length > 2000){
        alert("Curriculum muy largo");
    } else{
        alert("Datos correctos");
    }
}