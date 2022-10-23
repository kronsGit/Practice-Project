// DEFINIENDO LA CLASE POKEMON
class Pokemon {
    constructor(nombre,vida,ataque,defensa,ataqueEspecial,
      defensaEspecial,velocidad){
      this.imagen = new Image(); /*
      Importante que en esta línea se guarda como atributo
      de la clase pókemon un elemento imagen HTML.*/
      this.nombre = nombre;
      this.vida = vida;
      this.ataque = ataque;
      this.defensa = defensa;
      this.ataqueEspecial = ataqueEspecial;
      this.defensaEspecial = defensaEspecial;
      this.velocidad = velocidad;
      this.imagen.src = imagenes[this.nombre];/*
      En esta línea se guarda la ruta en la propiedad src del
      elemento imagen HTML*/
  }

    hablar (){
    alert (this.nombre);
  }                 


    mostrar(){
      var nuevaDiv= document.createElement('div');/*
      En esta línea se crea una división (etiqueta Div).
      A esta etiqueta por medio del método appendChild()
      agregaré un título, saltos de línea, la imagen, y
      ésta será anexada al body, el tronco principal. Las
      Div´s serían como las ramas.
      */
      var divCabecera = document.createElement('h2')
      divCabecera.innerHTML = this.nombre +'<br> Stats';
      divCabecera.setAttribute("class","cabeceraCajas")

      var saltoLinea = document.createElement('br')


      nuevaDiv.appendChild(this.imagen);
      nuevaDiv.appendChild(saltoLinea);
      nuevaDiv.appendChild(divCabecera);
      document.body.appendChild(nuevaDiv);
  
      
  // creando tabla
      var coleccion = {
          'Vida': this.vida,
          'Ataque': this.ataque,
          'Defensa': this.defensa,
          'Ataque Especial': this.ataqueEspecial,
          'Defensa Especial': this.defensaEspecial,
          'Velocidad': this.velocidad,
        }; /*
        Este array solo sirve para disminuir las líneas de código
        más adelante. Es más fácil utilizar un "for-in" que siete
        líneas de texto añadiendo texto de las celdas "tr" y "td",
        y también es más fácil de leer.
        El método es sencillo:
        a) se crea la etiqueta HTML tabla
        b) se crea la etiqueta HTML tbody
        c) se crean un bucle dónde se crean las etiquetas TR y 
           TD con los datos que necesitamos que presenten,
           auxilíandonos de la CLASE y el Array
        d) Anexar las etiquetas TR y TD al tbody, y el tbody a 
           a la etiqueta tabla.
        */
      var tabla = document.createElement('table');
      var tbody = document.createElement('tbody');
      for (var stat in coleccion) {
        var filaTexto  = '<tr><td> '+stat+' </tr></td><tr><td>\
        '+coleccion[stat]+' </tr></td>';
        var fila = document.createElement('tr');
        fila.innerHTML = filaTexto;
        tbody.appendChild(fila);
      };
      tabla.appendChild(tbody);
      nuevaDiv.appendChild(tabla);
  }
  };
