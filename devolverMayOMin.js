function devolverMayOMin(cadena = "") {
  let may = 0;
  let min = 0;

  for (let letra of cadena) {
    letra === letra.toUpperCase() ? may++ : min++;
  }

  return may > min ? cadena.toUpperCase() : cadena.toLowerCase();
}

console.log(devolverMayOMin("EstoY"));
