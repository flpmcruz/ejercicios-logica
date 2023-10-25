function operaciones(num1, num2) {
  return {
    Suma: `La suma es ${num1 + num2}`,
    Resta: `La resta es ${num1 - num2}`,
    Multiplicacion: `La multiplicacion es ${num1 * num2}`,
    Division:
      num2 === 0 ? `no puede dividir por 0` : `La division es ${num1 / num2}`,
  };
}

console.log(operaciones(2, 0));
