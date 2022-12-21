# *Symbols*

Es un tipo de dato primitivo que vino con ES6,una vez que nosotros creamos un symbolo su valor se va a mantener privado para uso interno, generalmente los symbols suelen agregarse como caracteristicas de un objeto como una propiedad.

Los Symbols nos permiten crear identificadores unicos identificadores de  referencia.Se usa para evitar coliciones de propiedades en los objeto.

```javascript
let id = Symbol("Hola");
let id2 = Symbol("Hola");

console.log(id===id2); //False
console.log(id,id2); //Symbol(id)Symbol(id2)
console.log(typeof id,typeof id2); //symbol symbol


```

## *Como agregar un Symbol a un objeto?*

```javascript

const NOMBRE = Symbol("Nombre");
const SALUDAR = Symbol("Saludar"); //Metodo

const persona = {
    [NOMBRE]:"Ivan"
}

console.log(persona); //Symbol("Ivan")
persona.NOMBRE = "Ivan Salvador Juares R";
persona[SALUDAR] = function (){
    console.log("Hola");
}

console.log(persona);
persona[SALUDAR](); //Hola

console.log(Object.getOwnPropertySymbols(persona)); //Muesta los simbolos del Objeto persona

```

