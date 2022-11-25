# Control SELECT

---

Este otro objeto visual que podemos disponer en un FORM permite realizar la selección de un string de una lista y tener asociado al mismo un valor no visible. El objetivo fundamental en JavaScript es determinar qué elemento está seleccionado y qué valor tiene asociado. Esto lo hacemos cuando ocurre el evento onChange.

Para determinar la posición del índice seleccionado en la lista:

```javascript

document.getElementById('select1').selectedIndex;

```

Considerando que el objeto SELECT se llama select1 accedemos a la propiedad selectedIndex (almacena la posición del string seleccionado de la lista, numerando a partir de cero).

Es decir que el objeto select1 tiene otra propiedad llamada options, a la que accedemos por medio de un subíndice, al string de una determinada posición.

Y por último con esta expresión accedemos al valor asociado al string:

```javascript

  document.getElementById('select1').options[document.getElementById('select1').selectedIndex].value;

```

Un ejemplo completo que muestra el empleo de un control SELECT es:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Ejemplo de JavaScript</title>
    <meta charset="UTF-8">
</head>

<body>

    <form>
        <p><select id="select1" onChange="cambiarColor()">
            <option value="ff0000">Rojo</option>
            <option value="00ff00">Verde</option>
            <option value="0000ff">Azul</option>
        </select></p>
        <p>Número de índice seleccionado del objeto SELECT:<input type="text" id="text1"></p>
        <p>Texto seleccionado:<input type="text" id="text2"></p>
        <p> Valor asociado:<input type="text" id="text3"></p>
    </form>

    <script>
        function cambiarColor() {
            let seleccion = document.getElementById('select1');
            document.getElementById('text1').value = seleccion.selectedIndex;
            document.getElementById('text2').value = seleccion.options[seleccion.selectedIndex].text;
            document.getElementById('text3').value = seleccion.options[seleccion.selectedIndex].value;
        }
    </script>

</body>

</html>

```

Es importante para el objeto SELECT definir qué función llamar cuando ocurra un cambio: onChange="cambiarColor()".

Por cada opción del objeto SELECT tenemos una línea:
```html
    <option value="ff0000">Rojo</option>
```

Donde Rojo es el string que se visualiza en el objeto SELECT y value es el valor asociado a dicho string.

Analizando la función cambiarColor() podemos ver cómo obtenemos los valores fundamentales del objeto SELECT.
