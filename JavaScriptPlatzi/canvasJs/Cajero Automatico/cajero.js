//Creando la clase billete 

class Billete{
    constructor(v,c){
        this.valor = v;   //Creando variable en el constructor
        this.cantidad = c; //Creando variable en el constructor
    }
}

//Funciones
const entregarDinero = function(){
    //Obteniendo el dinero desde el input del HTML
    let money = document.getElementById("dinero");
    dinero = parseInt(money.value); // Se le asigna a la variable dinero el valor extraido del input 


    //Este for lo que hara es tomar todos los elementos tipo Billete que estan dentro de la caja y colocarlos en el bi
    for(let bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor); //Dinero se divide entre el valor del billete que en este casi esta en bi.valor
            // console.log(div); 
            /*
             Dinero se dividio entre cada uno de los billetes, como se sultado da el valor en billetes del dinero sin los decimales por el Math.floor es decir 
             dinero = 210 equivalen a 4 billetes de 50 
             dinero = 210 equivalen a 10 billetes de 20 
             dinero = 210 equivalen a 21 billetes de 10
             */

             //Se creara otro if dentro del if para verificar tenes que ver que si el resultado de la division div es mayor que la cantidad de billetes disponibles, para no darle al usuario mas billetes de los que realmente tenesmos, por ejemplo si solo tenemos 3 billetes de 50 no podemos asignarle 4

             if(div > bi.cantidad){
                papeles = bi.cantidad; //Si div es mayor se le asignaran los billetes disponibles
             }else{
                papeles = div;
             }

             entregado.push(new Billete(bi.valor,papeles)); //Los billetes que se entregaran de 50,20,10
             dinero = dinero - (bi.valor * papeles);
            
        }
    }

    let numVali = [1,2,3,4,5,6,7,8,9];

    for(let i=0;i<=9;i++){
        if(dinero == numVali[i]){
            r.innerHTML = "No puedo dar billetes<br>menores a 10";
            return
        }
    }

    
    if(dinero > 0){
        r.innerHTML = "No tengo suficiente dinero"; //Mostrando un valor en HTML
       
    }else{
        for(let e of entregado){
            // document.write(`${e.cantidad} billetes de $${e.valor} <br>`);
            if(e.cantidad > 0){
                r.innerHTML = `${r.innerHTML} ${e.cantidad} billetes de $${e.valor}<br>`; //Mostrando un valor en HTML
            }

        }
    }

    

   
}

//Creando el array donde se guardaran el valor de los billetes y la cantidad

let caja = [];
let entregado = [];
caja.push(new Billete(50,10));//Creando nuevos elementos tipo Billete
caja.push(new Billete(20,20));//Creando nuevos elementos tipo Billete
caja.push(new Billete(10,100));//Creando nuevos elementos tipo Billete

//Dinero
let dinero = 0;
let div = 0; //Resultadop de la division cada vez que iteramos
let papeles = 0; //Cantidad de papeles

let b = document.getElementById("extraer");//Se crea una variable para manipular lo que se ingrese en el boton Extraer
b.addEventListener("click",entregarDinero); //Al escuchar el evento "clcik" se dispara la funcion entregarDinero()

//Motrar en el HTML
let r = document.getElementById("resultado");
