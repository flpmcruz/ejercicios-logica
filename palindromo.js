//palindromo
function isPalindromo(nombre = "") {
  let reverse = nombre.trim().split("").reverse().join("");
  return reverse === nombre.trim();
}

console.log(isPalindromo('otto'))
console.log(isPalindromo('felipe'))

