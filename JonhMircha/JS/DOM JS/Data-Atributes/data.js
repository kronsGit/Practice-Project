console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);//Obteniendo desde una clase
console.log(document.querySelector(".link-dom").getAttribute("href"));


document.documentElement.lang = "en";

//Modificar un atributo
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

//Se usa "$" porque es una buena practica para identificar las variables  que contienen elementos del DOM

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","google.com");
//Remover 
$linkDOM.removeAttribute("rel");


// Data-Attributes
console.log($linkDOM.getAttribute("data-desciption"));
console.log($linkDOM.dataset);//Con la notacion del punto
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto");//Modificar
$linkDOM.daset.description = "Hola mundo"; //Con la notacion del puntoi
console.log($linkDOM.dataset.description);





