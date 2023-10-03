function invertirInt(numero = 0) {
  return (
    parseInt(numero.toString().split("").reverse().join("")) * Math.sign(numero)
  );
}

console.log(invertirInt(-345));
