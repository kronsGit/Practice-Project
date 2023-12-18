// Object.values(user) Covierte un objeto en un arreglo
let imprimierPrimerObject = (obj) =>{
    const arr = Object.values(user); //Primero se conviertet el objeto en un arrerglo
    for(i=0;i<arr.length;i++){     //Luego se itera como un array
        console.log(arr[i]);
    }
}


const user = {
    nombre: 'Ivan',
    edad: 45,
    cargo: 'CTO'
}

imprimierPrimerObject(user);