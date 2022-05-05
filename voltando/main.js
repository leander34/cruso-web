//Função factory

function criarProduto(nome, preco, desconto) {
  this.preco = preco
  this.desconto = desconto
  function valorProduto() {
    return this.preco - this.desconto
  }
  return { nome, preco, desconto, valorProduto: valorProduto}
}

const lapis = criarProduto('lapis preto', 0.99, 0.1)
const caderno = criarProduto('caderno preto', 10.99, 1)

console.log(lapis.valorProduto())
lapis.preco = 8.1
console.log(lapis.valorProduto())

console.log(caderno.valorProduto())