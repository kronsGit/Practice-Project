let compras = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 10000},
    {nombre: "Libro", costo: 250},
    {nombre: "Celular", costo: 1500},
    {nombre: "Laptop", costo: 25000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1500}
];



//Metodo Find
let encuentraArticulo = compras.find(function(articulo){

    return articulo.nombre === "Libro";
});

console.log(encuentraArticulo);