function invertir(cadena = "") {
  let textoInvertido = "";
  for (car of cadena) {
    textoInvertido = car + textoInvertido;
  }
  return textoInvertido;
}

function invertir(cadena = ''){
    return cadena.split('').reverse().join('')
}

console.log(invertir("susana"));
