function escalera(numero = 0) {
  let escalera = "";

  function line(cant) {
    for (let i = 1; i <= cant; i++) {
      i === cant ? (escalera += "[-]\n") : (escalera += "[-]");
    }
  }

  for (let i = 1; i <= numero; i++) {
    line(i);
  }

  return escalera;
}

console.log(escalera(9));
