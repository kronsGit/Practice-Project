// Confeccionar una página que permita seleccionar una pizza y la cantidad de unidades. Luego al presionar un botón calcular el importe a pagar.
// Utilizar un objeto de la clase SELECT para la selección de la pizza, pudiendo ser:
// Queso: $ 4.
// Jamón y queso: $ 6.
// Especial: $ 10.
// A la cantidad de pizzas cargarla en un objeto de la clase TEXT y en otro objeto de la clase TEXT mostrar el importe total a abonar.

let CalculateBill = ()=>{
    let tyPizzas = document.getElementById('pizzas');
    //Options,select type of pizza
    let pizzas = tyPizzas.options[tyPizzas.selectedIndex].value; 
    //How many
    let amount = document.getElementById('amount').value;
    //Convertir string a entere
    pizzas = parseInt(pizzas);
    amount = parseInt(amount);

    let total = pizzas*amount;

    //Write on screen
    document.getElementById('result').value = total;

}