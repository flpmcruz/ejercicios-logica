function calcularAngulo(num = 0) {
  let angulo = parseInt(num);
  // validaciones
  if (isNaN(angulo)) return "Introduzca un numero por favor";
  if (angulo > 360 || angulo < 0) return "El numero debe ser entre 0 y 360";

  // tipos de angulos
  if (angulo === 0) return "Es un angulo nulo";
  if (angulo > 0 && angulo < 90) return "Es un angulo agudo";
  if (angulo === 90) return "Es un angulo agudo";
  if (angulo > 90 && angulo < 180) return "Es un angulo obtuso";
  if (angulo === 180) return "Es un angulo llano";
  if (angulo > 180 && angulo < 360) return "Es un angulo concavo";
  if (angulo === 360) return "Es un angulo completo";
}

console.log(calcularAngulo(190));
