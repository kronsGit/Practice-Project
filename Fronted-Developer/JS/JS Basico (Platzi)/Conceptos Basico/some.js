let compras = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 10000},
    {nombre: "Libro", costo: 250},
    {nombre: "Celular", costo: 1500},
    {nombre: "Laptop", costo: 25000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1500}
];



//Metodo some es una validacion de true o false en caso de que se cumpla la condicion dada

let  articulosBaratos = compras.some(function(articulo){
    return articulo.costo <= 1500;
});

console.log(articulosBaratos);


