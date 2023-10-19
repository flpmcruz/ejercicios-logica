function mayor(a, b) {
  if (isNaN(a) || isNaN(b)) return "Deben ser numeros para comparar";

  return a > b
    ? `El mayor es: ${a} \nEl menor es: ${b}`
    : `El mayor es: ${b} \nEl menor es: ${a}`;
}

console.log(mayor(5, 3));
