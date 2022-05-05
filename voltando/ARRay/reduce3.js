Array.prototype.reduce2 = function(callback, valorIncial) {
  let i = valorIncial ? 0 : 1

  let acumulador = valorIncial || this[0]
  for(i; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador
}


const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos
  .map(aluno => aluno.nota)
  .reduce2((acumulador, atual) => {
    return acumulador + atual
  }) // passar o valor inicial aqui, caso nao seja passado, sera assumido o valor do indece zero do array

console.log(resultado)

const allBolsistas = alunos
  .map(aluno => aluno.bolsista)
  .reduce2((acumulador, atual) => {
    return acumulador && atual
  })

console.log(allBolsistas)

const someBolsistas = alunos
  .map(aluno => aluno.bolsista)
  .reduce2((acumulador, atual) => {
    return acumulador || atual
  })

console.log(someBolsistas)