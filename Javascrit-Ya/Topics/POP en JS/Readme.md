# *Programacion Orientada a Objetos JS*


El lenguaje JavaScript no es un lenguaje orientado a objetos completo, pero permite definir clases con sus atributos y responsabilidades.
Luego nos permite definir objetos de estas clases.

Pero el otro pilar de la programación orientada a objetos, es decir la herencia, recién se incorporó en las últimas versiones.

Desarrollaremos una clase que represente un cliente de un banco.
La clase Cliente tiene como atributos:

nombre
saldo
y las responsabilidades o métodos de la clase son:

Constructor (inicializamos los atributos del objeto)
depositar
extraer
Luego debemos implementar los siguientes métodos (normalmente el constructor se utiliza el caracter mayúscula):

```javascript
   
   function Cliente(nombre,saldo){
    this.nombre=nombre;
    this.saldo=saldo;
    this.depositar=depositar;
    this.extraer=extraer;
    }

    function depositar(dinero){
    this.saldo=this.saldo+dinero;
    }

    function extraer(dinero){
    this.saldo=this.saldo-dinero;
    }

```

El nombre de la clase coincide con el nombre de la función principal que implementamos (también llamado constructor de la clase):

function Cliente(nombre,saldo)
{
  this.nombre=nombre;
  this.saldo=saldo;
  this.depositar=depositar;
  this.extraer=extraer;
}
A ésta función llegan como parámetro los valores con que queremos inicializar los atributos. Con la palabra clave 'this' diferenciamos los atributos de los parámetros (los atributos deben llevar la palabra clave this)

  this.nombre=nombre;
  this.saldo=saldo;
También en el constructor inicializamos la referencia a todos los métodos que contendrá la clase (esto es muy importante y necesario para entender porque las otras dos funciones pertenecen a esta clase):

  this.depositar=depositar;
  this.extraer=extraer;
Por último, implementamos todos los métodos de la clase:

function depositar(dinero){
  this.saldo=this.saldo+dinero;
}

function extraer(dinero){
  this.saldo=this.saldo-dinero;
}
De nuevo recordemos que diferenciamos los atributos de la clase por la palabra clave this.

Ahora veamos el archivo HTML completo donde además definiremos un objeto de la clase planteada:


```html

<!DOCTYPE html>
<html>

<head>
    <title>Ejemplo de JavaScript</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function Cliente(nombre, saldo) {
            this.nombre = nombre;
            this.saldo = saldo;
            this.depositar = depositar;
            this.extraer = extraer;
        }

        function depositar(dinero) {
            this.saldo = this.saldo + dinero;
        }

        function extraer(dinero) {
            this.saldo = this.saldo - dinero;
        }

        let cliente1;
        cliente1 = new Cliente('diego', 1200);
        document.write('Nombre del cliente:' + cliente1.nombre + '<br>');
        document.write('Saldo actual:' + cliente1.saldo + '<br>');
        cliente1.depositar(120);
        document.write('Saldo luego de depositar $120---->' + cliente1.saldo + '<br>');
        cliente1.extraer(1000);
        document.write('Saldo luego de extraer $1000---->' + cliente1.saldo + '<br>');
    </script>

</body>

</html>

```