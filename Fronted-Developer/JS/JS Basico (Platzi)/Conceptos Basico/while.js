let estudiantes = ['Maria','Ivan','Luis','Jack','Sonia','Sofia']; //Se crea el array

//Se crea un funcion para mandar a saludar 
let saludar = (alumno) =>{
    console.log(`Hola, ${alumno}`);
}

while(estudiantes.length > 0){  //Hacer el loop hasta que estudiantes[] llegue a la posicion 0
    // console.log(estudiantes);
    let alumno = estudiantes.shift(); //Se crea la variable estudiante para almacenar el arreglo en cada posicion
    saludar(alumno); //Luego se ejecuta la funcion para saludar
}