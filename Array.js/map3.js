Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // vai chamar a funcao que faz as coisas, nao necessariamente vai usar todos os parametros
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// retornar um array apenas com os preços

const paraObj = json =>  JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado)