# *Objeto Windows*

Al objeto window lo hemos estado usando constantemente. Representa la ventana del navegador.
window es un objeto global y tiene los siguienes métodos:

alert: Muestra un diálogo de alerta con un mensaje (a esta responsabilidad la hemos utilizado desde los primeros temas)

prompt: Muestra un diálogo para la entrada de un valor de tipo string 
       (utilizado desde el primer momento)

confirm: Muestra un diálogo de confirmación con los botones Confirmar y Cancelar.

open y close: abre o cierra una ventana del navegador. 
       Podemos especificar el tamaño de la ventana, su contenido, etc.
       [Variable=][window.]open(URL, nombre, propiedades) 
       Permite crear (y abrir) una nueva ventana. Si queremos tener acceso a ella 
       desde la ventana donde la creamos, deberemos asignarle una variable, 
       sino simplemente invocamos el método: el navegador automáticamente sabrá 
       que pertenece al objeto window. 

El parámetro URL es una cadena que contendrá la dirección de la ventana que estamos abriendo: si está en blanco, la ventana se abrirá con una página en blanco. 


 Las propiedades son una lista, separada por comas, de algunos de los siguientes elementos:

•	toolbar[=yes|no] 
•	location[=yes|no] 
•	directories[=yes|no] 
•	status[=yes|no] 
•	menubar[=yes|no] 
•	scrollbars[=yes|no] 
•	resizable[=yes|no] 
•	width=pixels 
•	height=pixels 

Es bueno hacer notar que a todas estas funciones las podemos llamar anteponiéndole el nombre del objeto window, seguida del método o en forma resumida indicando solamente el nombre del método (como lo hemos estado haciendo), esto es posible ya que el objeto window es el objeto de máximo nivel.

Ej:
let nombre=window.prompt("Ingrese nombre");
o 
let nombre=prompt("Ingrese nombre");
Para reducir la cantidad de caracteres que se tipean normalmente encontraremos los programas tipeados de la segunda forma, es decir sin indicar el nombre del objeto window.

## *Acotaciones*

Cuando uno define una variable fuera de cualquier función con la palabra clave 'var', luego dicha variable se transforma en un atributo del objeto window, esto no sucede cuando utilizamos la palabra clave 'let':

    <script>
        var v1 = 10;
        let v2 = 20;
        document.write(window.v1); //muestra un 10
        document.write("<br>")
        document.write(window.v2); //muestra undefined
    </script>
La ejecución de este script tiene como resultado:

10
undefined
Es otra de las diferencias importantes que tienen las variables definidas con var y let.