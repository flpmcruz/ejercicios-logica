function printCuadrado(number = 0) {
  let lados = "";

  for (let i = 0; i < number; i++) {

    if (i === 0 || i === number - 1) {
      for (let j = 0; j < number; j++) {
        j === number - 1 ? (lados = lados += "*\n") : (lados = lados += "*");
      }
    } else {
      for (let j = 0; j < number; j++) {

        if (j === 0) lados = lados += "*"
        else if (j === number - 1) lados = lados += "*\n"
        else lados = lados += ' '

      }
    }
  }
  return lados;
}
console.log(printCuadrado(20));
