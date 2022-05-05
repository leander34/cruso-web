const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
  return acumulador + atual
}, 0) // passar o valor inicial aqui, caso nao seja passado, sera assumido o valor do indece zero do array

console.log(resultado)