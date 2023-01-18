const $linkDOM =document.querySelector(".link-dom"); //Guardando en una vairable la clase de CSS

console.log($linkDOM.style);//Mostrando los css directos y el resto 
console.log($linkDOM.getAttribute("style"));//Mostrando los css en linea
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);//Obteniendo propiedad color
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//Modificando propiedades CSS
//Cuando son propiedades como background-color se elimina el - y se utuliza camelCase es decir backgroundnColor
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.padding = "1rem";
$linkDOM.style.width = "50%";
$linkDOM.style.margin ="0 auto";
$linkDOM.style.borderRadius=".5rem";
$linkDOM.style.textAlign="center";

//Variables CSS - Custom Properties CSS
const $html = document.documentElement, //Html
      $body = document.body; ///Body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.backgroundColor = varDarkColor;
$body.style.color=varYellowColor;

//Modificar Custom Properties CSS

$html.style.setProperty("--dark-color","#000");
varDarkColor =getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);