const express = require('express');
const app = express();

app.get('/',inicio);
app.get('/cursos',cursos);


function inicio(peticion,resultado){
 resultado.send("Este es el <strong>Inicio</strong> <br> Hola mundo");
}

function cursos(peticion,resultado){
    resultado.send("Estos son los <strong>Cursos</strong>");
   }

app.listen(3000)