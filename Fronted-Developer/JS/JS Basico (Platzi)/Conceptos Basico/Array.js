let frutas = ["Manzana","Pera","Banano","Cereza","Fresa"];


//Metodos de los arreglos
let addFruta = frutas.push("Uvas");  //Agrega un elemento al final  del arreglo
let lessFruta = frutas.pop(); //Elimina el ultimo elemento del arreglo
let newEle = frutas.unshift("Naranja"); //Agrega un elemento al inicio del arreglo
let deleteEle = frutas.shift(); //Elimina el primer elemento del arreglo


console.log(frutas);
console.log(`La longitud del arrreglo es de ${frutas.length}`);
