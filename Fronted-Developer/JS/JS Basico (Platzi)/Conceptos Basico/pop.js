//Este metodo eliminar  el ultimo elemento del array
let numArray = [1,2,3,4,5];

//Funcion de proceso elminacion
let procesoPop = ()=>{
    
    for(let i=0;i<numArray.length;i++){
        console.log(`numArray ${numArray}`);
        let numPop = numArray.pop();
        console.log(numPop);
    }
}
procesoPop();