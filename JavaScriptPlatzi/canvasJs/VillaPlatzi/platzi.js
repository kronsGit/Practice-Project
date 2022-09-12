let vp = document.getElementById(villaplatzi);//Contexto
let papel = vap.getContext("2d");//Obteniendo contexto 2D
let mapa = "title.png"; //Ruta donde se encuentra el mapa

let imagen = new Image();//Creacion de un objeto, es la forma en que se carga una imagen en JS, se tiene que crear un objeto,Normalmente se inician con Mayusculas 
imagen.src = mapa;

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
