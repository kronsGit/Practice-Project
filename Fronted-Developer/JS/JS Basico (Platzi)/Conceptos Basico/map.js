let compras = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 10000},
    {nombre: "Libro", costo: 250},
    {nombre: "Celular", costo: 1500},
    {nombre: "Laptop", costo: 25000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1500}
];


//Metodo Map
let articulosMap = compras.map(function(articulo){
    return articulo.nombre; //Regresa un nuevo arreglo con la informacion que solicitamos en este caso todos los nombres de los articculos comprados
});

//Map crea un nuevo array mapeando los elementos del array que deseamos filtrar para asi obtener la infomacion que requerimos

for(let i=0;i < articulosMap.length;i++){
    console.log(articulosMap[i]);
}
