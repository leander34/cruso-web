const funcionario = {
  nome: 'Maria',
  salario: 13049
}

const pessoa = {
  ativo: true,
  ...funcionario
}

console.log(pessoa)

const grupoA = ['mateus', 'amanda', 'carolina']
const grupoFinal = ['joana', ...grupoA, 'jessica']

console.log(grupoFinal)