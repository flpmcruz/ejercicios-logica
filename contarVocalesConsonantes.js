function consonantesVocales(cadena = "") {
  let matchesVocales = cadena.match(/[aeiouáéíóú]/gi);
  let matchesConsonantes = cadena.match(/[bcdfghjklmnpqrstvwxyz]/gi);

  return {
    countVocales: matchesVocales ? matchesVocales.length : 0,
    countConsonantes: matchesConsonantes ? matchesConsonantes.length : 0,
  };
}

console.log(consonantesVocales("maisitiuowebú.com"));
