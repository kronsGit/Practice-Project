
//Forma antigua
console.log(document.getElementsByTagName("li")); //Elementos Li
console.log(document.getElementsByClassName("card")); //Clases
console.log(document.getElementsByName("nombre")); //Atributo name en inputs

//Nueva forma
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a")); //Te muesta el primer elemento con dicha clase
console.log(document.querySelectorAll("a"));//Muestra todos los elementos con dicha clase
console.log(document.querySelector(".card"));//Si quieres motrar una clase o un id tiene su indicador correspondiente . o #
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
