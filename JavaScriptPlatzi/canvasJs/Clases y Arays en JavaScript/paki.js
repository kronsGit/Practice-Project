//Array asociativo
let imagenes = [];
imagenes["Gurrumincita"] = "img/Bobby.png";
imagenes["Hati"] = "img/Bobby.png";
imagenes["Silvestre"] = "img/Bobby.png";
imagenes["Panzer"] = "img/Bobby.png";
imagenes["Pipiya"] = "img/Bobby.png";



// Creando un array para guardar a todos los elementos
let desk = [];

desk.push(new Pakiman("Gurrumincita",70,80,"Nivel medio"));
desk.push(new Pakiman("Hati",100,150,"Nivel experto"));
desk.push(new Pakiman("Silvestre",90,20,"Nivel Dios"));
desk.push(new Pakiman("Panzer",50,40,"Nivel Dios"));
desk.push(new Pakiman("Pipiya",90,90,"Nivel Dios"));



// Mostrar los elementos de array

for(let allDesk of desk){
    allDesk.show();
}

for(let x of desk){
    console.log(x);
}
