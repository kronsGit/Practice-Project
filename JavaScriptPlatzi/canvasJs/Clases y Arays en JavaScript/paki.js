// Creando clase
class Pakiman{
    //Constructor
    constructor(n,v,a,f){
        this.nombre=n;
        this.vida=v;
        this.ataque=a;
        this.farmeo=f;
    }
}

let gurrumincita = new Pakiman("Gurrumincita",70,80,"Nivel medio");
let hati = new Pakiman("Hati",100,150,"Nivel experto");
let silvestre = new Pakiman("Silvestre",90,20,"Nivel Dios");

console.log(gurrumincita,hati,silvestre);