//Si quieres crear una varaible con varaibles por dentro usar JSON

// JSON 

//Se guardan las teclas que se utilizaran en un Objeto JSON
let teclas ={
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ERASE: 69
};




/*Accediendo al Todo de la pagina */

/*Aqui se indica que se utilizara el teclado usando el Keyup y cada vez que eso pase se ejecutara la funcion dibujar teclado*/
document.addEventListener("keyup",dibujarTeclado); //Aqui le esta diciendo que cuando se toque esa tecla se ejecutara dicha funcion

//Aqui se esta mandando a llamar el canvas del html utilizando el id que posee 
let cuadro = document.getElementById("area_de_dibujo");
//Aqui se cree el contexto necesario para canvas, en este caso 2d
let papel = cuadro.getContext("2d");

//Estas variables x e y se utilizaran para determinar el punto inicial del dibujo
let x=1;  //Varaibles para recordar el punto incial en X
let y=500; //Varaibles para recordar el punto inicial en Y

//Funcion para dibujar lineas
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

//Funcion para dibujar por teclado
function dibujarTeclado(evento){
    //  Validacion

    // if(evento.keyCode === teclas.UP)console.log("Tecla Arriba");
    // if(evento.keyCode === teclas.DOWN)console.log("Tecla Abajo");
    // if(evento.keyCode === teclas.LEFT)console.log("Tecla Izquierda");
    // if(evento.keyCode === teclas.RIGHT)console.log("Tecla Derecha");

    // Hacerlo con switch
    let colorFuntion = "blue"; //Color de la linea
    let movimiento = 50; //Distancia a la que se movera la linea
    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorFuntion,x,y,x,y-movimiento,papel); //Movimiento Arriba
            y=y-movimiento; //Recordando variable
        break;
        case teclas.DOWN:
            dibujarLinea(colorFuntion,x,y,x,y+movimiento,papel); //Movimiento Abajo
            y=y+movimiento; //Recordando variable
        break;
        case teclas.LEFT:
            dibujarLinea(colorFuntion,x,y,x-movimiento,y,papel); //Movimiento Arriba
            x=x-movimiento; //Recordando variable
        break;
        case teclas.RIGHT:
            dibujarLinea(colorFuntion,x,y,x+movimiento,y,papel); //Movimiento Arriba
            x=x+movimiento; //Recordando variable
        break;
        case teclas.ERASE:
            dibujarLinea(colorFuntion,x,y,x+movimiento,y,papel); //Movimiento Arriba
            x=x+movimiento; //Recordando variable
        default:
            console.log("Otra tecla");
            console.log(evento.keyCode);
        break;
    }

}


