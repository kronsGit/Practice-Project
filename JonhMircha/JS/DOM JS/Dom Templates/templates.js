
const $cards = document.querySelector(".cards"), //Seleecionando el elemento en donde se dibujara el template dinamicamente
      $template = document.getElementById("template-card").content, //Seleccionando elementos del templates
      $fragment = document.createDocumentFragment(),
      //Arreglo donde esta la informacion de las imagenes
      cardContent = [
            {
                title: "Tecnologia",
                img: "https://placeimg.com/350/350/tech",
            },
            {
                title: "Animales",
                img: "https://placeimg.com/350/350/animals",
            },
            {
                title: "Arquitectura",
                img: "https://placeimg.com/350/350/arch",
            },
            {
                title: "Gente",
                img: "https://placeimg.com/350/350/people",
            },
            {
                title: "Naturaleza",
                img: "https://placeimg.com/350/350/nature",
            },
        ];

       //Foreach para recorrer los elementos del arreglo 
      cardContent.forEach(el=>{

        $template.querySelector("img").setAttribute("src",el.img); //Recorriendo los elementos del arreglo en este caso el atributo "src" de las imagenes
        $template.querySelector("img").setAttribute("alt",el.title);//Recorriendo los elementos del arreglo, en este caso el atributo "alt"
        $template.querySelector("figcaption").textContent = el.title; //Recorriendo los elementos del arreglo

        let $clone = document.importNode($template,true); //Clonando el template
        $fragment.appendChild($clone); //Agregando el clone al fragmento
      });

      $cards.appendChild($fragment); //Agregando el fragmento al padre cards





