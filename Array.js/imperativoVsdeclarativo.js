const alunos = [
    { nome: 'leander', nota: 10 },
    { nome: 'ricardinho', nota: 7 }
]

// imperativa
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// declarativa

const Getnota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(Getnota).reduce(soma)
console.log(total2 / alunos.length)