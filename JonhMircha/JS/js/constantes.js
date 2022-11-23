export const PI = Math.PI; //Exportando funcion
export let usuario = "Jon";


const hello = ()=>console.log('Hola');


//Cuando se exporte esta funcion se exporta automanticamente
export default function saludar(){
    console.log("Hola Modulo +ES6");
}

export class Saludar{
    constructor(){
        console.log('Hola Clase +ES6');
    }
}