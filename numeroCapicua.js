function capicua(num = 0) {
  return String(num) === String(num).split("").reverse().join("");
}

console.log(capicua(2002)); //true
console.log(capicua(2014)); //false
