# *Propiedad Location del Objeto Windows*


El objeto location colabora directamente con el objeto window:

![alt text](https://www.tutorialesprogramacionya.com/javascriptya/imagenes/dibujo01.jpg "Location");


Cuando le asignamos una nueva dirección a la propiedad location del objeto window, el navegador redirecciona a dicha página.

Implementaremos un pequeño ejemplo para ver la utilidad de esta propiedad: Supongamos que tenemos un botón que al ser presionado ingrese al periódico La Nación, pero primero muestre una ventana de confirmación, si queremos ingresar al periódico. En caso que el visitante presione el botón afirmativo, redireccionamos al sitio de La Nación, en caso contrario mostramos un mensaje:

```html

<!DOCTYPE html>
    <html>

    <head>
        <title>Ejemplo de JavaScript</title>
        <meta charset="UTF-8">
    </head>

    <body>

        <button onClick="verificarEntrada()">Ingresar a La Nación</button>

        <script>
            function verificarEntrada() {
                if (window.confirm('Desea salir del sitio e ingresar al periódico La Nación?')) {
                    window.location = 'https://www.lanacion.com.ar';
                } else {
                    window.alert('No hay problema');
                }
            }
        </script>

    </body>

</html>

```
