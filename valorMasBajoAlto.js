function valorAltoBajo(arr = []) {
  let valores = {
    bajo: 0,
    alto: 0,
  };

  const ordered = arr.sort((a, b) => a - b);
  if (ordered.length === 0) return "no ha introducido numeros correctos";

  valores.bajo = ordered.at(0);
  valores.alto = ordered.at(ordered.length - 1);
  return valores;
}

console.log(valorAltoBajo([5, 6, 4, 6, 84, 68, 4584, 5, 2, 5]));
