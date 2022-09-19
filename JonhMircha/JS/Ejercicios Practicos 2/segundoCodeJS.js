/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
const invertirCadena=(cadena="")=>
(!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :console.info(cadena.split("").reverse().join(""));


// invertirCadena();
// invertirCadena("Hola mundo");
// invertirCadena("Mundo alreves");


/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

// Metodo include string
const contarCadena = (sentence="",texto="")=>{
    if(!sentence)return console.warn("No ingresaste un texto largo");
    if(!sentence)return console.warn("No ingresaste una palabra a evaluar");

    let i = 0,
        contador = 0;
    
    while(i!==-1){   //Verificando si alguna palabra se repite algunas vez
        i = sentence.indexOf(texto,i);
        if(i!==-1){
            i++;
            contador++;
        }
    }

    return console.info(`La palabra ${texto} se repite ${contador} veces`);

}

// contarCadena();
// contarCadena("Los textos científicos se difunden para compartir con el resto de la comunidad que estudia el mismo tema, los avances o descubrimientos o las hipótesis que se manejan respecto a un objeto de estudio. En ese sentido, pueden hallarse en libros, revistas especializadas y otros tipos de publicaciones académicas, como ponencias, conferencias, papers, etc.","el");






/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palindromo = (palabra = "")=>{
    if(!palabra) return console.warn("No ingresaste una palabra o frase");
    palabra = palabra.toLowerCase(); //Convierte las palabras en Mayuscula.

    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ? console.info(`Si es palindromo, Palabra Original ${palabra},Palabra al reves ${alReves}`)
    : console.info(`No es palindromo, Palabra Original ${palabra},Palabra al reves ${alReves}`);
}


palindromo();
palindromo("Salsa");
palindromo("Aurora");
palindromo("Salas");
palindromo("Salsa");
palindromo("Pollopo");





/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

const eliminarCaracteres = (texto="",patron="")=>    //Arrow funtion con parametros pedira el texto y el patron a elminiar
(!texto) //Evaluando si texto es diferente de texto
    ? console.warn("No ingresaste un texto")
    :(!patron)
        ? console.warn("No ingresaste un patron de caracteres")
        : console.info(texto.replace(new RegExp(patron,"ig"),""));

eliminarCaracteres();
eliminarCaracteres("Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat illo alias maxime voluptatem reprehenderit deserunt beatae ducimus, rerum quam aspernatur iste architecto reiciendis repudiandae a odio, magnam vel assumenda.","m");






