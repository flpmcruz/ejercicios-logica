function calcularDias(dias = 0) {
  let years = Math.floor(dias / 365);
  let months = Math.floor((dias - years * 365) / 30);
  let days = Math.floor(dias - years * 365 - months * 30);

  return `Years ${years}, Months ${months}, Days ${days} `;
}

console.log(calcularDias(920));
