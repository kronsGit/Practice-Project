let compras = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 10000},
    {nombre: "Libro", costo: 250},
    {nombre: "Celular", costo: 1500},
    {nombre: "Laptop", costo: 25000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1500}
];

//Metodo filer
let articulosFilter = compras.filter(function(articulo){
    return articulo.costo <= 1500;
});

for(let i=0;i < articulosFilter.length;i++){
    console.log(articulosFilter[i]);
}

