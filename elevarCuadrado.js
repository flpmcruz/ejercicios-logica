function elevarCuadrado(arr = []) {
  let elevados = [];
  arr.map((item) => {
    if (isNaN(parseInt(item))) return;
    if (typeof item !== "number") return;
    elevados.push(Math.pow(item, 2));
  });

  return elevados;
}

console.log(elevarCuadrado([1, "e", 2, 4, 5, false]));
