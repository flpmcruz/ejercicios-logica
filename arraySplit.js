function dividirArray(array = [], cantidad) {
  let result = [];

  while (array.length > 0) {
    result.push(array.splice(0, cantidad));
  }

  return result;
}

console.log(dividirArray([7, 8, 9, 10, 2, 5, 8], 3));
