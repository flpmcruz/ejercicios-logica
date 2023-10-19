function divisores(numero = 0) {
  let result = [];
  for (let i = 1; i <= numero; i++) {
    if (20 % i === 0) result.push(i);
  }
  return result;
}

console.log(divisores(20));
