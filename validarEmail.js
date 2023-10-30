function validarEmail(email = ""){
    const reg = /^\w+@\w+\.\w+$/i
    return reg.test(email)
}

console.log(validarEmail("no lo es.com"))
console.log(validarEmail("correo@gmail.com"))