//Lista de autos vacia
let listaAutos = [];
let i = 0;
let conte = 0;

//Funccion constructura
function auto (marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


//Funcion del nuevo auto con sus parametros
let registroAuto = (marca,modelo,annio) =>{
    marca = prompt(`Ingrese la marca del carro`);
    modelo = prompt(`Ingrese el modelo del carro`);
    annio = prompt(`Ingrese el annio de fabricacion del carro`);

    let nuevoAuto = new auto(marca,modelo,annio);
    listaAutos.push(nuevoAuto);
    console.log("Agregaste un nuevo carro con exito");
    conte++;
}

while(listaAutos.length < 2){
    registroAuto();
    console.log(listaAutos[i]);
    i++;
}

