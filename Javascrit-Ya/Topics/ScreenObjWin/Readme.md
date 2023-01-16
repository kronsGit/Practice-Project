#  *Screen Objeto Window*

El objeto screen ofrece información acerca del monitor donde se está ejecutando el navegador.
La propiedades principales del objeto screen son:

availHeight : El alto de la pantalla en pixeles disponible para el navegador.
availWidth : El ancho de la pantalla en pixeles disponible para el navegador.
colorDepth : Representa el número de bits usados para representar los colores.
height : El alto de la pantalla en pixeles.
width : El ancho de la pantalla en pixeles. 

```html

<!DOCTYPE html>
<html>

<head>
    <title>Ejemplo de JavaScript</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        document.write('Valores de las propiedades del objeto screen:<br>');
        document.write('availHeight :' + screen.availHeight + '<br>');
        document.write('availWidth :' + screen.availWidth + '<br>');
        document.write('height :' + screen.height + '<br>');
        document.write('width :' + screen.width + '<br>');
        document.write('colorDepth :' + screen.colorDepth);
    </script>

</body>

</html>

```