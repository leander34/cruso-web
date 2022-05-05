const alunos = [
  { nome: 'leander', nota: 10 },
  { nome: 'Ana', nota: 6.7}
]

//declarativa
const total = alunos.map(alunos => alunos.nota).reduce((acumulador, atual) => acumulador + atual)
const media = total/alunos.length
console.log(total, media)

//imperativa

let total2 = 0
for(let i = 0; i < alunos.length; i++) {
  total2 += alunos[i].nota
}

const media2 = total2/alunos.length

console.log(total2, media2)