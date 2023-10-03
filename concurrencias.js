function concurrencias(palabra = "", frase = "") {
  let count =
    frase.toLowerCase().split(palabra.trimEnd().toLowerCase()).length - 1;
  return count;
}

function concurrencias2(palabra = '', frase = '') {
  let arrTexto = frase.toLowerCase().split(' ');
  let count = 0;  
  for (let i = 0; i < arrTexto.length; i++) {
      arrTexto[i].includes(palabra.trim().toLowerCase()) && count++;
  }
  return count;
}

function concurrencias3(palabra = '', frase = '') {
    let textoLimpio = frase.toLowerCase().replace(/[-,.!?_]/gi, ' ')
    return textoLimpio;
}
console.log(concurrencias3('palabra', 'frase -, est @ ? es'))

console.log(
  concurrencias(
    "victor",
    "victor es una frase de victor, porque victor es victor"
  )
);
console.log(
  concurrencias2(
    "victor",
    "victor es una frase de victor, porque victor es victor"
  )
);
