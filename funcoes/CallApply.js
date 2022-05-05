function Getpreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const Produto = {
    nome: 'pasta',
    preco: 400,
    desc: 0.1,
    Getpreco
}
global.preco = 20
global.desc = 0.1
console.log(Getpreco())
console.log(Produto.Getpreco())

const carro = { preco: 49000, desc: 0.2}
console.log(Getpreco.call(carro))
console.log(Getpreco.apply(carro))

console.log(Getpreco.call(carro, 0.17, '$')) // primeiro o pretexto
console.log(Getpreco.apply(carro, [0.17, '$']))

