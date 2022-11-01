// Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor.

const numeroMayor = function(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    
    a = parseInt(a);
    b = parseInt(b);

    if(a>b){
        alert(`El numero mayor es: ${a}`);
    }else{
        alert(`El numero mayor es: ${b}`);
    }

}
