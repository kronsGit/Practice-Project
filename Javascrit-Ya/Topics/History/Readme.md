# *Propiedad History obj Window*


El objeto history almacena todas las páginas que visitamos. Luego, con una serie de funciones, podemos extraer de la memoria de la computadora las páginas ya visitadas, sin tener que pedirlas nuevamente al servidor.

Cuenta con las siguientes funciones:

  window.history.back();    //Retrocede a la página anterior
  window.history.forward(); //Avanza a la página siguiente almacenada en la 
                              cache de la máquina.
  window.history.go();  //Avanza o retrocede en la lista de páginas visitadas.

  El siguiente ejemplo nos permite cargar una segunda página y luego retroceder a la primera página sin tener que solicitarla nuevamente al servidor:

  ```html
  
 <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Porpiedad History</title>
</head>
<body>
    <!-- El siguiente ejemplo nos permite cargar una segunda página y luego retroceder a la primera página sin tener que solicitarla nuevamente al servidor: -->

    <a href="pagina2.html">Ir a la página 2</a>
    <br>
    <br>
    <a href="javascript:avanzar()">Extraer del cache la segunda página</a>

    <script>
        function avanzar() {
            window.history.go(1);
        }
    </script>
</body>
</html>
  
  ```


  En la segunda página, mediante el método go y pasándole un valor negativo, retrocedemos a la primera página sin tener la necesidad de recargarla.

Podemos mejorar el ejemplo accediendo al atributo length (almacena la cantidad de páginas de la lista) del objeto history:

  if (window.history.length>0){
    window.history.go(1);
  } else {
    alert('no hay otra página en la cache hacia adelante');
  }
Recordemos que podemos obviar disponer el nombre del objeto window:

            function avanzar() {
                history.go(1);
            }