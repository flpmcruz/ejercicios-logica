function coincidencias(array1 = [], array2 = []) {
  let array = [];

  for (ar1 of array1) {
    for (ar2 of array2) {
      if (ar1 === ar2) array.push(ar1);
    }
  }

  return array;
}

let array1 = [1, 2, 3, 4];
let array2 = [2, 3, 6];
console.log(coincidencias(array1, array2));
