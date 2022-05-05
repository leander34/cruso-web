//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Obeject.seal
const pessoa = { nome: 'leander', idade: 18}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silveira'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

//Object.freeze = selado + valores constantes

