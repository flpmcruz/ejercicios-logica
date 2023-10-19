function limpiar(cadena = "") {
  return cadena.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

function comparar(cadena1 = "", cadena2 = "") {
  let cad1 = limpiar(cadena1);
  let cad2 = limpiar(cadena2);

  return cad1.split("").sort().join("") === cad2.split("").sort().join("");
}

console.log(comparar("Riesgo!", "Sergio"));
