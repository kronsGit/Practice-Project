const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const pid = document.getElementById('pid');


h1.innerHTML = 'Agregando texto';
console.log(h1.getAttribute('class')); //Obtener una elemento
h1.setAttribute('class','rojo'); //Asignar un atributo agregar
h1.classList.add('rojo'); //Agrega una clase
h1.classList.remove('verde'); //Remueve una clase
h1.classList.toggle('azul');//Para remover y agregar
h1.classList.contains('yellow'); //Nos devuelve un true o false dependiendo si tiene la clase

input.value = "4563";


//Crear un elemento desde 0

const image = document.createElement('img');

image.setAttribute('src','https://images.unsplash.com/photo-1704098712161-67949aaf0eee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');


//pintar la imagen
pid.innerHTML = "";
pid.append(image);