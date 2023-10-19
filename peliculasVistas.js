function peliculasVistas(peliculas = []) {
  let result = [];
  peliculas.forEach((pelicula) => {
    if (!pelicula.vista) result.push(pelicula.title);
  });
  return result;
}

const peliculas = [
  {
    vista: true,
    title: "La Pasion",
  },
  {
    vista: false,
    title: "La vida es bella",
  },
  {
    vista: true,
    title: "La vida de Jesus",
  },
  {
    vista: false,
    title: "La vida de Moises",
  },
];
console.log(peliculasVistas(peliculas));
