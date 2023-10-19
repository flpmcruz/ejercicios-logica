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
