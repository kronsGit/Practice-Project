let compras = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 10000},
    {nombre: "Libro", costo: 250},
    {nombre: "Celular", costo: 1500},
    {nombre: "Laptop", costo: 25000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1500}
];



//Metodo forEach
compras.forEach(function(articulo){
    console.log(articulo.nombre);
    console.log(articulo.costo);
});

//Con el forEach aplicado en el arreglos "compras" se puede filtrar lo  que deseemos recorriendo todo el arreglo
