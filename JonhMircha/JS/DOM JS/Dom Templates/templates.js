
const $cards = document.querySelector(".cards"), //Seleecionando el elemento en donde se dibujara el template dinamicamente
      $template = document.getElementById("template-card").content, //Seleccionando elementos del templates
      $fragment = document.createDocumentFragment(),
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

      cardContent.forEach(el=>{
        $template.querySelector("img").setAttribute("src",el.img);
        $template.querySelector("img").setAttribute("alt",el.title);
        $template.querySelector("figcaption").textContent = el.title;

        let $clone = document.importNode($template,true);
        $fragment.appendChild($clone);
      });

      $cards.appendChild($fragment);





