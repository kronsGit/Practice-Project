//Si quieres crear una varaible con varaibles por dentro usar JSON

// JSON 
let teclas ={
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};



/*Accediendo al Todo de la pagina */
document.addEventListener("keyup",dibujarTeclado); //Aqui le esta diciendo que cuando se toque esa tecla se ejecutara dicha funcion

function dibujarTeclado(evento){
    //  Validacion

    if(evento.keyCode === teclas.UP)console.log("Tecla Arriba");
    if(evento.keyCode === teclas.DOWN)console.log("Tecla Abajo");
    if(evento.keyCode === teclas.LEFT)console.log("Tecla Izquierda");
    if(evento.keyCode === teclas.RIGHT)console.log("Tecla Derecha");

    // Hacerlo con switch

    switch(evento.keyCode){
        case teclas.UP:
            console.log("Arriba");
        break;
        case teclas.DOWN:
            console.log("Abajo");
        break;
        case teclas.LEFT:
            console.log("Izquierda");
        break;
        case teclas.RIGHT:
            console.log("Derecha");
        break;
        default:
            console.log("Otra tecla");
        break;
    }

}