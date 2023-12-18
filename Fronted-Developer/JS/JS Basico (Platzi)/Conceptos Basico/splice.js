let bodega = ["Carro","Tv","Ropero","Libro","Maleta"];
console.log(bodega);
//Metodo splice

let elminarElemento = () =>{
    bodega.splice(2,1);
    console.log(bodega);
    //El primer parametro indica el inidice que se desea eleminar y el segundo parametro la candidad de elementos a eliminar
}
let agregarElemento = () =>{
    bodega.splice(2,1,"Laptop");
    bodega.splice(5,1,"Lampara");
    bodega.splice(8,1,"Mouse"); //Si se pasa de la cantidad del indice se coloca como predeterminado el siguiente numero que corresponderia
    console.log(bodega);
    //Se le agregar los mismos parametros como al elminar pero se le agrega el elemento que se desea agregar, ojo se remplaza el elemento si poseen la  misma posicion
}

elminarElemento();
agregarElemento();
