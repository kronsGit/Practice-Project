let d = document.getElementById("curvas");
let lienzo = d.getContext("2d");
let lineas = 150;
let l = 0;
// let yi,xf;
let xi,yf;


while(l < lineas){
    // yi = 7 * l;
    // xf = 7 * (l+1);
    xi = 7*l;
    yf = 7 * (l+1);
    dibujarLinea("green",xi,0,999,yf);
    console.log("Linea" +1);
    l=l+1;
}

dibujarLinea("#000",1,1,999,1);
dibujarLinea("#000",1,1,999,1);
dibujarLinea("#000",1,1,999,1);

dibujarLinea("#000",999,1,999,999);
dibujarLinea("#000",999,1,999,999);
dibujarLinea("#000",999,1,999,999);




function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}