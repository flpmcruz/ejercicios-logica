const arrayConDosPalabras = (arr) => arr.filter((e) => /\w[\s]\w/gi.test(e));

console.log(arrayConDosPalabras(["hola soy", "felipe", "y tengo", "palabras quiero tener"]));
