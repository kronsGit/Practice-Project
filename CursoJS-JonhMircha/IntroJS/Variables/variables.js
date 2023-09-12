console.log("*****************var***************");
var musica = "Rock";
console.log('Variable musica antes del bloque',musica);
{
    var musica = "Pop";
    console.log('Variable musica dentro del bloque',musica);
}
console.log('Variable musica despues del bloque',musica);

console.log("*****************let***************");
let musica2 = "Rock";
console.log('Variable musica antes del bloque',musica2);
{
    let musica2 = "Pop";
    console.log('Variable musica dentro del bloque',musica2);
}
console.log('Variable musica despues del bloque',musica2);