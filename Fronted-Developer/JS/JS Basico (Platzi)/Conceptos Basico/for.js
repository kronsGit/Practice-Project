let estudiantes = ['Maria','Ivan','Luis','Jack','Sonia','Sofia']; //Se crea el array

//Se crea un funcion para mandar a saludar 
let saludar = (alumno) =>{
    console.log(`Hola, ${alumno}`);
}

//Luego creamos un ciclo for para poder utilizar la funcion con un Loop
for(let i=0;i<estudiantes.length;i++){
    saludar(estudiantes[i]); //La funcion se ejecuta la veces que sea necesario en este caso el numero de veces lo determina el tamanio del arreglo
}

