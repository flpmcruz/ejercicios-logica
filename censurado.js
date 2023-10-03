function censurado(texto = "", criterio = "") {
  if (texto === "" || criterio === "")
    return "No se puede buscar en una cadena vacía o sin criterios de búsqueda";

  const regex = new RegExp(criterio, "gi"); // "gi" para búsqueda global e insensible a mayúsculas/minúsculas
  return texto.replace(regex, "[-CENSURADO-]");
}

console.log(censurado("hola como estas, hola muy bien", "hola"));
