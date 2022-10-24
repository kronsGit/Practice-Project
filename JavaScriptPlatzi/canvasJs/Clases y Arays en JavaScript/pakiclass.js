// Creando clase
class Pakiman{
    //Constructor
    constructor(n,v,a,f){
        this.image = new Image();
        this.nombre=n;
        this.vida=v;
        this.ataque=a;
        this.farmeo=f;

        this.image.src = imagenes[this.nombre];
    }
    hablar(){
        alert(this.nombre);
    }

    show(){
        //Div contenedor principal
        let divmain = document.createElement('div');
        divmain.setAttribute("class","cardMain");//Agregar una clase 
        //H1 con titulo con el nombre del clan
        let cabecera = document.createElement('h2');
        cabecera.innerHTML = this.nombre + '<br> Stats';
        cabecera.setAttribute("class","card");//Agregando una clase a "cabecera"
        let saltoLinea = document.createElement('br');

        let divchild = document.createElement('div');//Agregando pets-detail
        divchild.setAttribute("class","childCard");//Agregando una clase a divChild
        
        let pVida = document.createElement('p');//Creando el elemento p de la Vida
        pVida.innerHTML = 'Vida: '+this.vida + '<br>';
        let pAtaque = document.createElement('p');//Creando el elemento p del ataque
        pAtaque.innerHTML ='Ataque: '+this.ataque + '<br>';
        let pFarmeo = document.createElement('p');//Creando el elemento p del farmeo
        pFarmeo.innerHTML ='Farmeo: '+this.farmeo + '<br>';

        //Agregando los p al divChild
        divchild.appendChild(pVida);
        divchild.appendChild(pAtaque);
        divchild.appendChild(pFarmeo);
        

        
        //Creando la card
        divmain.appendChild(this.image);
        divmain.appendChild(saltoLinea);
        divmain.appendChild(cabecera);
        divmain.appendChild(divchild);
        //Agregando al Body
        document.body.appendChild(divmain);
        
        



        // document.body.appendChild(this.image);
        // document.write("<div class=card>")
        // document.write('<br/>');
        // document.write('<br/> <strong>' + this.nombre + '</strong>');
        // document.write('<br/>');
        // document.write('Vida: ' + this.vida + '<br/>');
        // document.write('<br/>');
        // document.write('Ataque: ' + this.ataque + '<br/>');
        // document.write('<br/>');
        // document.write('Farmeo: ' + this.farmeo + '<br/>');
        // document.write("</div>");
    }
}











