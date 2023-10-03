function caracterMasUsado(candena = "") {
  let result = {};

  for (const letra of candena) {
    if (result[letra] === undefined) result[letra] = 1;
    else result[letra] += 1;
  }

  let res = { letra: "", valor: 0 };

  for (const key in result) {
    if (result[key] > res.valor) {
      (res.letra = key), (res.valor = result[key]);
    }
  }

  return res;
}

console.log(caracterMasUsado("misooootiowebesgrande.com"));
