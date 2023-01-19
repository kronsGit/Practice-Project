function Cliente (nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
        this.depositar = depositar;
        this.extraer = extraer;
}

function depositar(dinero){
    this.saldo = this.saldo + dinero;
}

function extraer(dinero){
    this.saldo = this.saldo - dinero;
}

let cliente1;

cliente1 = new Cliente('Jorge',3500);

document.write(`Nombre del cliente: ${cliente1.nombre} <br>`);
document.write(`Saldo actual: ${cliente1.saldo} <br>`);
//Usando un meotodo
cliente1.depositar(1500);
document.write(`Saldo luego del deposito de: ${cliente1.saldo}<br>`);

//Usando metodo extraer
cliente1.extraer(3000);
document.write(`Saldo luego de extrar: ${cliente1.saldo}<br>`);
