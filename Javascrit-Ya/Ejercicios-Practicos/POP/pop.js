function Suma(valor1,valor2){
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.primerValor = function(valor1){
        this.valor1 = valor1;
    }
    this.segundoValor = function(valor2){
        this.valor2 = valor2;
    }
    this.returnResultado = function(){
        return this.valor1 + this.valor2;
    }

}

let suma1;
 suma1 = new Suma(5,10);
 document.write('La suma de 5 y 10 es:'+suma1.returnResultado());
 suma1.primerValor(70);
 suma1.segundoValor(30);
 document.write(suma1.returnResultado());