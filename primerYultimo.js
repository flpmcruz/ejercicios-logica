function primerYultimo(arr = []) {
  //   return [arr[0], arr[arr.length - 1]];
  return [[...arr].shift(), [...arr].pop()];
}

console.log(primerYultimo([1, 2, 3, 45, 6, 9, 8, 78]));