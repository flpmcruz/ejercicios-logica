function capitalize(candena = "") {
  return candena
    .split(" ")
    .filter((item) => item !== "")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
}

console.log(capitalize("era     una vez un hombre"));
