//Object.freeze()
//nao deixa fazer nada com o objeto

const pessoa = {nome: 'leander'}
pessoa.nome = 'joao'

Object.freeze(pessoa)
pessoa.nome = 'leao'
delete pessoa.nome

console.log(pessoa)

const pessoaConst = Object.freeze({nome: 'leander'})
console.log(pessoaConst)