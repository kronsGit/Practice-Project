const $figure = document.createElement("figure"), //Creando un figure
      $img = document.createElement("img"),    //Creando una imagen
      $figcaption = document.createElement("figcaption"), //Creando un Figcaption
      $figcaptionText = document.createTextNode("Animals"), //Creando un Text Node
      $cards = document.querySelector(".cards"); //Seleccionando los elementos con la clase .cards


      //Creando imagen y poniendola en el html
      $img.setAttribute("src","https://placeimg.com/350/350/animals");
      $img.setAttribute("alt","Animals");

      //Agregando a figure la clase Card
      $figure.classList.add("card");

      //Agregando el Figcaption
      $figcaption.appendChild($figcaptionText);
      
      //Agregando al figure los elementos necesarios
      