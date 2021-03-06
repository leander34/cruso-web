function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max]

  return new Promise(resolve => {
    setTimeout(() => {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * fator + min)
      resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(100, 610, 1000),
    gerarNumerosEntre(45, 60, 400),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 10, 2000),
    gerarNumerosEntre(1, 1000, 800)
  ])
}
console.time('promise')
gerarVariosNumeros().then(console.log).then(() => console.timeEnd('promise'))
