function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'notebook',
  preco: 2499,
  desc: 0.1,
  getPreco
}
const Gproduto = getPreco.bind(produto)
console.log(Gproduto())

console.log(produto.getPreco())


const carro = {
  preco: 100000,
  desc: 0.1
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.2, '$'))
console.log(getPreco.apply(carro, [0.2, '$']))
