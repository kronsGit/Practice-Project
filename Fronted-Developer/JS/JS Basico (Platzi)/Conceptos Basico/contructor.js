//Lista de autos vacia
let listaAutos = [];

//Funccion constructura
function auto (marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//Funcion para agregar autos
let agregarAuto = (marca,modelo,annio) =>{
    let nuevoAuto = new auto(marca,modelo,annio);
    listaAutos.push(nuevoAuto);
}

//Funcion del nuevo auto con sus parametros
let registroAuto = () =>{
    let marca = prompt(`Ingrese la marca del carro`);
    let modelo = prompt(`Ingrese el modelo del carro`);
    let annio = prompt(`Ingrese el annio de fabricacion del carro`);
    agregarAuto(marca,modelo,annio);
    console.log("Agregaste un nuevo carro con exito");
}

while(listaAutos.length < 2){
    registroAuto();
}

