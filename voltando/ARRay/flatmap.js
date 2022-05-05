const escola = [
  {
    nome: 'Turma M1',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 8.1
      },
      {
        nome: 'Ana',
        nota: 9.3
      }
    ]
  },
  {
    nome: 'Turma M2',
    alunos: [
      {
        nome: 'Rebeca',
        nota: 8.9
      },
      {
        nome: 'Roberto',
        nota: 7.3
      }
    ]
  }
]
const getNotasAlunos = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAlunos)
const notas1 = escola.map(getNotasTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)

Array.prototype.flatMap2 = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas3 = escola.flatMap2(getNotasTurma)
console.log(notas3)