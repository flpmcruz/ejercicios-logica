// function repetirTexto(texto, cantidad) {
//   let cadena = "";
//   let count = cantidad;

//   while (cantidad > 0) {
//     cadena += texto;
//     count--;
//   }

//   return cadena;
// }
// console.log(repetirTexto("felipe", 5));

String.valor = "uno";
String.prototype.repiteme = function (cantidad) {
  let cadena = "";
  let count = cantidad;

  while (count > 0) {
    cadena += this;
    count--;
  }

  return (cadena += String.valor);
};

// Repite 5 veces el string y le a;ade al final el 'uno'
console.log("hola".repiteme(5));

let animals = ["🐠", "🐤", "🐙", "🐝", "🦖"];

console.log(JSON.stringify(animals.entries()));

var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice();
console.log(masculinos);

