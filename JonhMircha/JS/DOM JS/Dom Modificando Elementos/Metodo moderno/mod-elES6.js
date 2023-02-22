
//Forma antigua

const $cards = document.querySelector(".cards"), //Seleccionando el elemento con la clase card
      $newCard = document.createElement("figure"), //Creando un elemento figure
      $cloneCards = $cards.cloneNode(true); //Clonando los elementos creados

      //Agregandole elementos a la nueva variable newCars
      $newCard.innerHTML = `
        <img src="https://placeimg.com/350/350/any" alt="Any">
        <figcaption>Any</figcaption>
      `;
      $newCard.classList.add("card"); //Agregandole una clase a el elemento newCard

    //   $cards.replaceChild($newCard,$cards.children[2]); //Replaza un elemento, primero se selecciona el padre y se usa el metodo, en los parametros del metodo se pone el nuevo elemento por el cual sera remplazado.
    //   $cards.removeChild($cards.lastElementChild); //Aqui este removiendo el ultimo elemento del padre $cards
      $cards.insertBefore($newCard,$cards.firstElementChild); //Aqui se esta agregando el newcard antes del primer elemento
      document.body.appendChild($cloneCards);//Se esta agregando el body el nuevo elemento
      






