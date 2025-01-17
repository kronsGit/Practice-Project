/* 
for in ----> Objetos
for of -----> Arrays

for (varaible in objeto){
    codigo
}

*/


const listaDeCompras ={
    manzanas: 5,
    pera: 3,
    naranjas: 2,
    uva: 1
};

for (fruta in listaDeCompras){
    console.log(fruta);
}


for (fruta in listaDeCompras){
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}