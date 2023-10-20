function factorial(n = 0) {
  let result = 1;

  while (n > 0) {
    result = result * n;
    n--;
  }

  return result;
}

console.log(factorial(3));
