function multiplos(numero = 0) {
  let result = "";

  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "BossLightyear, ";
      continue;
    } else if (i % 3 === 0) {
      result += "Boss, ";
      continue;
    } else if (i % 5 === 0) {
      result += "LightYear, ";
      continue;
    } else result += `${i}, `;
  }

  return result;
}

console.log(multiplos(28));
