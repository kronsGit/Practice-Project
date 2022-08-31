let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

let d = document.getElementById("curvas");
let ancho = d.width;
let lienzo = d.getContext("2d");


dibujarLinea("#000",1,1,1,499);
dibujarLinea("#000",1,499,499,499);

// dibujarLinea("green",0,0,10,300);
// dibujarLinea("green",0,0,20,300);
// dibujarLinea("green",0,0,30,300);
// dibujarLinea("green",0,0,40,300);


// lienzo.beginPath();
// lienzo.strokeStyle = "red";
// lienzo.moveTo(180,10);
// lienzo.lineTo(290,200);
// lienzo.stroke();
// lienzo.closePath(); 

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujoPorClick(){
    let optenText = parseInt(texto.value);
    let lineas = optenText;
    let l = 0;
    let yi,xf;
    let space = ancho/lineas; //Ecuacion para pintar las lineas que quiera el cliente


    while(l < lineas){
        yi = space * l;
        xf = space * (l+1);
        dibujarLinea("green",0,yi,xf,500);
        console.log("Linea" +1);

        l=l+1;

    }

}