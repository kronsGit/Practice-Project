
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 




// let str;
// str = prompt("Ingrese su palabra: ");

function leerCadena(){
    // const str = 'Life, the universe and everything. Answer:';
    console.log(`${str} ${str.length}`);
    document.write(`La cadena de texto tiene <strong>${str.length}</strong> caracteres`);
}

// leerCadena();


// ----------------------------------------------------------------------------------------

//Metodo repeat()
const chorus = 'Because I love you <br>';

// document.write(`Hola Sofia todo es:<br> ${chorus.repeat(200)}`);






//Metodo slice()

const word = 'Prueba de Cadena de Texto';

console.log(word.slice(0,6));

//Funcion con metodo Slice
let words;
let numCortar;

words = prompt('Ingrese su frase');
numCortar = parseInt(prompt("Cuantas letras desea cortar?"));

function cortarPalabras(){
    document.write("Palabra cortada: <br>");
    document.write(words.slice(0,numCortar));
}

cortarPalabras();

