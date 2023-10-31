function dibujarTriangulo(num = 0) {
  let cadena = "";
  let asteriscos = 1;
  let espacios = num;

  for (let i = num; i > 0; i--) {
    cadena += " ".repeat(espacios) + "*".repeat(asteriscos * 2 - 1) + "\n";
    asteriscos++;
    espacios--;
  }
  return cadena;
}

console.log(dibujarTriangulo(4));
