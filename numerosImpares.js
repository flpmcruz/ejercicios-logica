function impares(num1 = 0, num2 = 0) {
  let count = 0;
  for (let i = num1 + 1; i < num2; i++) {
    if (i % 2 === 0) count++;
  }
  return count;
}

console.log(impares(1, 100));
