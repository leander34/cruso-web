const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]



const allBolsistas = alunos.map(aluno => aluno.bolsista).reduce((acumulador, atual) => {
  return acumulador && atual
})

console.log(allBolsistas)

const someBolsistas = alunos
  .map(aluno => aluno.bolsista)
  .reduce((acumulador, atual) => {
    return acumulador || atual
  })

  console.log(someBolsistas)