function CriarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(CriarProduto('Notebook', 3999.90))
console.log(CriarProduto('Mac book', 7999.90))