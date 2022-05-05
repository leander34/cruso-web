function somar() {
    let soma = 0
    for (let i in arguments)
        soma += arguments[i]
    return soma
}

console.log(somar())
console.log(somar(1))
console.log(somar(1, 4, 6))

console.log(somar(1, 2, 'teste'))
console.log(somar('a', 'b', 'c'))