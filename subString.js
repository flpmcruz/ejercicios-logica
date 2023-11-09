function subString(cadena = "") {
  let result = [];
  for (let l of cadena) {
    result.length === 0
      ? result.push(l)
      : result.push(result[result.length - 1] + l);
  }

  return result;
}

function subString2(cadena = "") {
    let result = [];
  
    for (let i = 1; i <= Math.floor(cadena.length); i++) {
      let reg = new RegExp(`.{${i},${i}}`, "gi");
      result.push(...cadena.match(reg));
    }
  
    return result;
  }
  

console.log(subString2("Felipe"));
