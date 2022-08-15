let d = document.getElementById("curvas");
let lienzo = d.getContext("2d");
let lineas = 30;
let l = 0;
let yi,xf;

while(l < lineas){
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("green",0,yi,xf,300);
    console.log("Linea" +1);

    l=l+2;

}

dibujarLinea("green",0,0,10,300);
dibujarLinea("green",0,0,20,300);
dibujarLinea("green",0,0,30,300);
dibujarLinea("green",0,0,40,300);


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