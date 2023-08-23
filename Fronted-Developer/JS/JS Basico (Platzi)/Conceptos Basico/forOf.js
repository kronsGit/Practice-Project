let estudiantes = ['Maria','Ivan','Luis','Jack','Sonia','Sofia']; //Se crea el array

//Se crea un funcion para mandar a saludar 
let saludar = (alumno) =>{
    console.log(`Hola, ${alumno}`);
}

//El for of es como una manera mas automatizada de recorrer un arreglo tienes que crear una variable  que es donde se guardara la informacion de el arreglo y este terminara hasta recorer todo el arreglo
for(let alumno of estudiantes){
    saludar(alumno); 
}