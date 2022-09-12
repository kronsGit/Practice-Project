let vp = document.getElementById("villaplatzi");//Contexto
let papel = vp.getContext("2d");//Obteniendo contexto 2D


//JSON
//Se utilizara JSON porque necesitamos controlar el orden de carga de imagenes

//Fondo
let fondo = {
    url: "tile.png",
    cargaOk: false //Inicia en false porque no se sabe si ha cargado
};
fondo.imagen = new Image();//Creacion de un objeto, es la forma en que se carga una imagen en JS, se tiene que crear un objeto,Normalmente se inician con Mayusculas 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);//Dibujar mapa en pantalla

//Vaca
let vaca = {
    url: "vaca.png",
    cargaOk: false //Inicia en false porque no se sabe si ha cargado
};

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

//Cerdo
let cerdo = {
    url: "cerdo.png",
    cargaOk: false //Inicia en false porque no se sabe si ha cargado
};

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

//Pollo
let pollo = {
    url: "pollo.png",
    cargaOk: false //Inicia en false porque no se sabe si ha cargado
};

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);


//Funcion cargar
function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();

}

function cargarVaca(){
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();
  }

function cargarPollo(){
    pollo.cargaOk = true;
    dibujar();
  }
  




//Funciones para dibujar
function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOk){
        for(let v=0;v<5;v++){
            let x = aleatorio(0,420);
            let y = aleatorio(0,420);
            papel.drawImage(vaca.imagen,x,y);
        }
    }

    if(cerdo.cargaOk){
        for(let c=0;c<10;c++){
            let xc = aleatorio(0,480);
            let yc = aleatorio(0,480);
            papel.drawImage(cerdo.imagen,xc,yc);
        }
    }

    if(pollo.cargaOk){
        for(let p=0;p<20;p++){
            let xp = aleatorio(0,400);
            let yp = aleatorio(0,400);
            papel.drawImage(pollo.imagen,xp,yp);
        }
    }
    //Se escribe el nombre del canvas en este caso Papel y luego se pone el .drawImage, en los parametros se obtendra del objeto imagen y sus coordenadas
}

//Nota: Canvas siempre dibuja encima del ultimo objeto

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
