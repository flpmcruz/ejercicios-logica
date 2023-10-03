function multiplos(numero = 0, multiplo = 8) {
  let result = `--Del ${numero} al 0--\nno.${numero}\n`;

  while (numero > 0) {
    numero - multiplo > 0
      ? (result += `no. ${numero - multiplo}\n`)
      : (result += "FIN");
    numero -= multiplo;
  }
  return result;
}

console.log(multiplos(20, 2));
