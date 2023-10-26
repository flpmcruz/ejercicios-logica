function masAparece(cadena) {
  let arr = [];
  let obj = {
    value: "",
    cantidad: 0,
  };

  if (Array.isArray(cadena)) arr = [...cadena];
  if (typeof cadena === "string") arr = cadena.split(" ");
  if (arr.length === 0) return "Debe insertar un array o una cadena de texto";

  for (let value of arr) {
    const reg = new RegExp(value, "gi");
    const cantidad = String(cadena).match(reg).length;

    if (obj.cantidad < cantidad) {
      obj.value = value;
      obj.cantidad = cantidad;
      continue;
    }
    if (
      obj.cantidad === cantidad &&
      !String(obj.value)
        .toLocaleLowerCase()
        .includes(String(value).toLocaleLowerCase())
    )
      obj.value = `${obj.value}, ${value}`;
  }

  return {
    cadena: `El elemento que mas se repite es: ${String(
      obj.value
    ).toLocaleLowerCase()}`,
    cantidad: `${obj["cantidad"]}`,
  };
}

console.log(masAparece(true));
console.log(masAparece("Hola mundo hola mundo mundo hola"));
console.log(masAparece([1, 2, 2, 2, 2, 8, 6, 1, 2, 8, 9, 6, 9, 8, 9, 8]));
