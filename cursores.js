function cursores(arr = [], elemento) {
  let cantidadElementosEncontrados = 0;
  let cantidadDeEjecuciones = 0;
  /*  */
  for (let i = 0; i <= arr.length / 2; i++) {
    if (arr[i] === elemento) cantidadElementosEncontrados++;
    if (arr[i + 1] === elemento) cantidadElementosEncontrados++;

    cantidadDeEjecuciones++;
  }
  if (arr.length % 2 !== 0) {
    if (arr[arr.length - 1] === elemento) cantidadElementosEncontrados++;
  }
  return {
    cantidadElementosEncontrados,
    cantidadDeEjecuciones,
    longitud: arr.length,
  };
}

console.log(cursores([1, 2, 3, 5, 2, 8, 2, 2, 2], 8));
