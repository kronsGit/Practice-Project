/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const aleatorio = () => console.info(Math.round((Math.random()*100)+500));

// aleatorio();



/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const capicua = (numero=0)=>{
    if(!numero) return console.warn("No ingresaste un numero");

    if(typeof numero !== "number" )//Si el tipo de dato de numero es diferente de "number" retornar un error
    return console.error(`El valor "${numero}" ingresado.NO es un numero`);

    numero = numero.toString(); //Con este metodo se convierte un numero en una cadena de texto.
    let alReves = numero.split("").reverse().join("");//Divide-Reversa-Une, se almacena en otra variable para comparar

    return(numero === alReves)//Si numero es igual a alReves
        ? console.info(`Si es capicua,Numero original es ${numero},numero al reves ${alReves}`) //Si se cumple la condicion
        : console.info(`No es capicua,Numero original es ${numero},numero al reves ${alReves}`) //No se cumple la condicion
    
}

// capicua();
// capicua("10");
// capicua(2000);
// capicua(2002)


/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/


const factorial=(numero = undefined)=>{   //Funcion expresada va esperar a recibir un numero, si al usuario se le olvida poner un numero marcara undefined

    if(numero===undefined) return console.warn("No ingresaste un numero");
    if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado,No es un numero`)//Si el usuario quiere poner cualquier otro tipo de dato, se valida con esta condicion
    if(numero === 0) return console.error("El numero no pude ser 0")//El numero no puede ser 0
    if(Math.sign(numero) === -1) return console.error("El numero no pude ser negativo"); //Math.sign sirve para verificar si un numero es negativo


    let factorial=1;

    for(let i=numero;i>1;i--){   //Se inicia desde el numero dado y luego va decreciendo
        factorial*=i; //Es igual que tener factorial=factorial * i;

    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
} 


factorial();
factorial(0);
factorial("5");
factorial(-6);
factorial(5);
factorial(2);


