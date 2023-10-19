function permutacion(arr = [], num = 0) {
  if (arr[0] !== 1) return false;
  if (arr.length < num) return false;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      return arr[i] === num;
    } else {
      if (arr[i] !== arr[i + 1] - 1) {
        return false;
      }
    }
  }
  return true;
}

function permutacion2(arr = [], num = 0) {
  let contain = "";
  for (i = 1; i <= num; i++) {
    contain += i;
  }
  return arr.join("").indexOf(contain) === 0 ? true : false;
}

console.log(permutacion2([1, 2, 3, 4, 5, 6, 7], 6));
