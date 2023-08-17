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