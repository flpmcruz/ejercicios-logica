function aprobados(arr = []) {
  return arr.filter((a) => a.nota > 70);
}

const lista = [
  {
    nombre: "Felipe",
    nota: 80,
  },
  {
    nombre: "Marcos",
    nota: 70,
  },
  {
    nombre: "Juan",
    nota: 50,
  },
];

console.log(aprobados(lista));
