
//Forma Moderna

/*
.insertAdjacent...
  .insertAdjacentElement(position,el);
  .insertAdjacentHTML(position,html);
  .insertAdjacentText(position,text);
Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"), //Seleccionando el elemento con la clase card
      $newCard = document.createElement("figure"); //Creando un elemento figure
     
      //Nueva forma de agregar un elemento
      let $contentCard = `
        <img src="https://placeimg.com/350/350/any" alt="Any">
        <figcaption></figcaption>
      `;
      $newCard.classList.add("card"); //Agregandole una clase a el elemento newCard

     
      // $cards.insertAdjacentElement("afterbegin",$newCard); //Agregando la nueva Card
      
      //Otra forma de agregar elementos
      // $cards.prepend($newCard); //Primer hijo de $cards
      // $cards.append($newCard); //Ultimo hijo de $cards
      // $cards.before($newCard);//El elemento se coloca antes de la referencia $cards
      $cards.after($newCard);//El elemento se coloca despues de la referencia $cards



      $newCard.insertAdjacentHTML("beforeend",$contentCard); //Agregando el contenido de la nueva card que en este caso es todo lo que contiene la variable $content Card
      $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Nuevo Texto para Card");

      // $cards.insertAdjacentElement("beforebegin",$newCard); //Inserta un elemento antes de la referencia que este caso es $cards
      // $cards.insertAdjacentElement("afterbegin",$newCard); //Inserta un elemento como primer hijo de la referencia que este caso es $cards
      //  $cards.insertAdjacentElement("beforeend",$newCard);    //Inserta un elemento como ultimo hijo de la referencia que este caso es $cards
      //  $cards.insertAdjacentElement("afterend",$newCard); //Inserta un elemento despues de la referencia que este caso es $cards

      



      






