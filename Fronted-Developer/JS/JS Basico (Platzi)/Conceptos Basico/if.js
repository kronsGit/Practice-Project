// Funcion Votar

let votar = (edad) =>{
    if(edad  === 18){
        console.log("Puedes votar, sera tu 1ra vez");
    }else if(edad > 18){
        console.log("Puedes votar de nuevo");
    }else{
        console.log("Aun no puedes votar");
    }
}

votar(15);
votar(20);
votar(50);
votar(18);
votar(12);


// Operador Ternario
// Sintaxis
// condition ? true:false;

let comne = (num) =>{
    let result = num === 1 ? console.log("Si soy un uno") : console.log(`No soy el numero uno, soy ${num}`);
}

comne(2);
comne(3);
comne(1);
comne(10);
comne(7);