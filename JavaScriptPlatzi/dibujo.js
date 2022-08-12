let d = document.getElementById("Dibujito");
let lienzo = d.getContext("2d");

dibujarLinea("red",10,300,252,15);
dibujarLinea("black",20,300,400,40);
dibujarLinea("green",30,300,550,80);
dibujarLinea("blue",40,300,650,160);

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