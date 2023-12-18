//El metodo push() nos permite agregar un o mas elemenntos al final de un array.from(selector, {duration: 1, fromVars})
let numArray = [1,2,3,4,5];

//funcion
let newNum = ()=>{
    //Agregando elementos
    numArray.push(6,7,"Palabra",[40,50,60]);
    //Verificacion
    console.log(numArray);
}

newNum();