const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const fragil = produto => produto.fragil
const preco = produto => produto.preco >= 500

const resultado = produtos.filter(fragil).filter(preco)
console.log(resultado)

// filter trabalha com true e false para adicionar no novo vetor