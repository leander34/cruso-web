const produto = {
  0: {
    nome: 'leander',
    idade: 19
  },

  1: {
    nome: 'Ana',
    idade: 24
  },

  nome: 'lusca',
  idade: 22
}

console.log(Object.values(produto))


const obj = {
  nome: 'leander',
  empresa: 'uma ai',
  num: 1
}

function log(a = 1, b = 1) {
  console.log(this.nome)
  console.log(a + b)
}

const log2 = log.bind(obj)
log2()

log.apply(obj, [2, 4])

log.call(obj, 4, 5)
