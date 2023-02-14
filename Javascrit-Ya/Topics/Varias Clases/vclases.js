//Clase numero Quiniela
function NumeroQuiniela(nombre){
    this.nombre = nombre; //Atributo
    this.cargarNumero = function(){
    this.numero = parseInt(prompt("Que numero de Quiniela quiere "+this.nombre+"?"));

    }
    this.verificarGanador = function(num){
        if(this.numero === num)
            return true;
        else
            return false;
    }

}

//Clase Bolillero
function Bolillero(){
    this.numero = -1;
    this.sortear = function(){
        this.numero = parseInt(Math.random()*4)+1; //Numero ramdom hasta el 100
    }
}

//Bloque principal creando participantes
let numeroqui1;
numeroqui1 = new NumeroQuiniela("Juan");
numeroqui1.cargarNumero();

let numeroqui2 = new NumeroQuiniela("Ana");
numeroqui2.cargarNumero();

let numeroqui3 = new NumeroQuiniela("Marcos");
numeroqui3.cargarNumero();

let numeroqui4 = new NumeroQuiniela("Roberto");
numeroqui4.cargarNumero();

let bolillero = new Bolillero();
bolillero.sortear();



document.write('Numero sorteado:' + bolillero.numero + '<br>');
document.write(numeroqui1.nombre + ' eligió ' + numeroqui1.numero + '<br>');
document.write(numeroqui2.nombre + ' eligió ' + numeroqui2.numero + '<br>');
document.write(numeroqui3.nombre + ' eligió ' + numeroqui3.numero + '<br>');
document.write(numeroqui4.nombre + ' eligió ' + numeroqui4.numero + '<br>');

if (numeroqui1.verificarGanador(bolillero.numero)) {
    document.write(numeroqui1.nombre + ' ha ganado <br>');
}
if (numeroqui2.verificarGanador(bolillero.numero)) {
    document.write(numeroqui2.nombre + ' ha ganado <br>');
}

if (numeroqui3.verificarGanador(bolillero.numero)) {
    document.write(numeroqui3.nombre + ' ha ganado <br>');
}

if (numeroqui4.verificarGanador(bolillero.numero)) {
    document.write(numeroqui4.nombre + ' ha ganado <br>');
}