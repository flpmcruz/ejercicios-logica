// objeto de usuarios con el nombre y las aficciones: { nombre: "Pedro", aficiones: ["cine", "informatica", "deporte", "religion"]}
const usuarios = [
  { nombre: "Pepe", aficiones: ["cine", "informatica"] },
  { nombre: "Juan", aficiones: ["deporte", "informatica", "musica"] },
  { nombre: "Maria", aficiones: ["cine", "musica"] },
  {
    nombre: "Pedro",
    aficiones: ["cine", "informatica", "deporte", "religion"],
  },
  { nombre: "Luis", aficiones: ["cine", "informatica", "deporte", "religion"] },
];

function aficiones(arr = []) {
  let aficiones = {};
  arr.forEach((element) => {
    element.aficiones.forEach((e) => {
      aficiones.hasOwnProperty(e) // es lo mismo que aficiones[e]
        ? aficiones[e]++
        : (aficiones[e] = 1);
    });
  });
  return aficiones;
}

console.log(aficiones(usuarios));
