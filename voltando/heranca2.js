const pai = { nome: 'Gilberto', corCabelo: 'preto'}

const filha1 = Object.create(pai) // ja setando o protorype 
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { 
  nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`A filha ${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2) {
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

