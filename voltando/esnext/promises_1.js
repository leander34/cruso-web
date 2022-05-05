const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const p = new Promise((resolve) => {
  resolve(['Ana', 'Beatriz', 'Maria', 'Diego'])
})
p.then(primeiroElemento).then(primeiroElemento).then(letraMinuscula).then(console.log)