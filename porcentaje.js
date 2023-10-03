function porcentaje(valor, porcentaje) {
    const result = valor * porcentaje / 100
    return `El ${valor} de ${porcentaje} es ${result}`
}

console.log(porcentaje(20, 200))