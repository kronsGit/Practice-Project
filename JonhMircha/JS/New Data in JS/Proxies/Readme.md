# *Proxies*

Es un nuevo mecanismo que tiene JS que te permite crear un objeto basado en un objeto literal inicial, es parecido a las clases en la programacion orientada a Objeto pero usando Objetos literales.

El proxie va a recibir  el objeto literal, va a generar una copia y va a permitir que tu realices ciertas operaciones como por ejemplo validacion de propiedades y tipos de datos dentro de la copia que se esta creando del objeto original es decir que vas a tener un medio de inculacion entre el objeto del cual te basas y la nueva instancia que has generado y todo eso se va a administrar a travez de un objeto especial que tambien recibe el proxie que se  llama Handler o manejador.