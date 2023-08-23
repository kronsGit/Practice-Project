//Objeto

let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    //Metodo
    detalleDelAuto: function(){
        console.log(`Auto ${this.marca} ${this.modelo} ${this.annio}`);
    }
}

miAuto.detalleDelAuto();