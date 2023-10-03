function sortString(palabra = "") {
  let array = palabra.split("");

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Intercambiamos los caracteres en las posiciones i y minIndex
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array.join("");
}

console.log(sortString("unapalabra"));
