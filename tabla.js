function tablaMultiplicar(number) {
    let tabla = `Tabla de multiplicar del ${number} \n`
    for (let i = 0; i <= 10; i++) {
      tabla += `${i} x ${number} = ${i * number} \n`;
    }
    return tabla;
  }
  console.log(tablaMultiplicar(5));