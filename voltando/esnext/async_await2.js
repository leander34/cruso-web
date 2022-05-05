function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max]

  return new Promise((resolve, reject) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator + min)

    if(numerosProibidos.includes(aleatorio)) {
      reject('Número repetido!')
    } else {
      resolve(aleatorio)
    }

  })
}

async function gerarMegaSena(qtdenumeros, tentativa = 1) {

  try {
    const numeros = []
    for (let _ of Array(qtdenumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros

  } catch(err) {
    if(tentativa < 10) {
      return gerarMegaSena(qtdenumeros, ++tentativa)
    } else {
      throw new Error('Desculpe, número repetido')
    }

  }
}

gerarMegaSena(30).then(console.log).catch(err => console.log(err.message))

