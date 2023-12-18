//Funcion de nombre completo

let nombre ="Ivan";
let apellido = "Juarez";

let nombreCompleto = (name,lastName) =>{
   return `${name} ${lastName}`;
}

let saludo = (name,lastName,username) =>{
    const completeName = nombreCompleto(name,lastName);

    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${username}`);
}


//Usando argumentos normales
nombreCompleto('Sofia',"Perez");
nombreCompleto("Juan","Guerrero");

//Usando argumentos de variables ya creadas
nombreCompleto(nombre,apellido);


//Funcion Saludo
saludo("Ivan","Juarez","Kronstharor");