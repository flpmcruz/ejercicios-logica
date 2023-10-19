function vocales(candena = "") {
  let result = {};
  let vocales = ["a", "e", "i", "o", "u"];
  let total = 0;

  for (const letra of candena) {
    if (vocales.includes(letra)) {
      if (result[letra] === undefined) result[letra] = 1;
      else result[letra] += 1;
    }
  }

  for (let count in result) {
    total += result[count];
  }

  return {
    vocales: result,
    total,
  };
}

console.log(vocales("misooootiowebesgrande.com"));

/**
 * Es otro ejemplo
 */
function matchVocales(cadena = "") {
  let total = 0;
  let expression = /[aeiou]/gi;
  for (let letra of cadena) {
    letra.match(expression) && total++;
  }
  return total;
}
console.log(matchVocales("misooootiowebesgrande.com"));

/**
 * Es otro ejemplo
 */
function optimo(cadena) {
  const result = cadena.match(/[aeiou]/gi);
  return result.length ? result.length : 0;
}
console.log(optimo("misooootiowebesgrande.com"));
