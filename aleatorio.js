function aleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(aleatorio(1, 100));
