# Arquitecturas CSS

Objetivos
+ Ser predecible: Escribir reglas claras
+ Reutilizable: No escribir codigo redundante
+ Mantenible: Que sea facil de leer y adaptable a los estandares
+ Escalable: Que pueda crecer facilmente sin afectar el rendimiento

Buenas practicas
+ Lineamientos
+ Documentacion
+ Estandares
+ Componentes




## *OOCSS*
La arquitectura OOCSS (Object Oriented CSS) consiste en separar la estructura principal y la piel o mascara.

En otras palabras, consiste en tener objetos que son estructuras principales. Estos objetos estaran unidos en una mascara, donde esta sera la que cambie pero manteniendo la estructura intacta.

![alt text](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/frontend_developer34.png "Img Title Text 1")


## *BEM, Bloque, elemento y modificador*
La arquitectura BEM(Block, element,modifier) es una de las mas utilizadas actualmente.Consiste en manejar los elementos en clases definidas por bloques,elementos y modificadores.

+ Bloque: Es la estructura principal que es contenedora de varios elementos.
+ Elementos: Es el elemento HTML que hace referencia el contenedor.
+ Modicador: Es el estilo especifico para el elemento. Por ejemplo, un boton que tenga un color diferente a los demas, esto tiene relacion a la especificidad.


![alt text](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/frontend_developer35.png "Img Title Text 1")

Ejempplo
``` Html
    <div class="card">
        <img class="card-img" src="imgagen.png" alt="space"/>
        <p class="card-text">Texto</p>
    </div>

```



## *Arquitectura Escalable y modular CSS*

La arquitectura SMACSS (Scalable and Modular Architecture for CSS) indica el orden de componentes que estaran ubicados en carpetas.La union de estos componentes que estaran ubicados en carpetas. La union de estps componentes dara como resultado tu pagina web con estilos.

+ Base: Elementos base, como botones, titulos, enlaces.
+ Layout: Estructura de la pagina, relacionado con el Responsive Design
+ Modulos: Elementos que contienen a los elementos base.
+ Estado:  Estilos relacionados con el comportamiento de elementos, relacionado con las pseudoclases y pseudolementos
+ Temas: Conjuntos de estilos que definen tu pagina web

![alt text](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/frontend_developer36.png "Img Title Text 1")



## *Triangulo Invertido CSS*

La arquitectura ITCSS (Inverted Triangle CSS) consiste en separar los archivos del proyecto; mediante ajustes, herramientas, elementos, entre otros. Todo esto para manejar los detalles de especificidad, claridad y magnitud.


![alt text](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/frontend_developer37.png "Img Title Text 1")


## *Dise;o Atomico*

La arquitectura Atomic Design tambien es una de las herramientas mas utilizadas actualmente. Consiste en manejar los elementos como estructuras minima de la materia, los atomos.

+ Atomos: Estructura minima, como botones, enlaces, titulos, otros.
+ Molecula: Union de atomos.
+ Organismos: Union de moleculas.
+ Plantillas: Union de Organismos.
+ Paginas: Union de plantillas.

![alt text](https://cdn.document360.io/da52b302-22aa-4a71-9908-ba18e68ffee7/Images/Documentation/frontend_developer38.png "Img Title Text 1")

