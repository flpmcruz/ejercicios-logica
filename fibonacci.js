function fibo(num = 0) {
  let serie = [0];

  for (let i = 0; i <= num; i++) {
    if (serie[i] === 0) serie.push(1);
    if (serie[serie.length - 1] + serie[serie.length - 2] > num) break;
    serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
  }

  return `Serie completa: ${serie.join(
    ","
  )}\nResultado de la serie de fibonacci: ${num} `;
}
console.log(fibo(150));


function fibonacci(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    console.log(n)
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log('Result is', fibonacci(10));