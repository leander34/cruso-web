function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {

    try {
      if(Math.random() < chanceErro) {
        reject('Ocorreu um erro')
      } else {
        resolve(valor)
      }

    } catch(err) {
      reject(err)
    }
  })
}


funcionarOuNao('Deu certo!!', 0.5).then(valor => `Valor: ${valor}`)
.then(valor => console.log(valor), err => console.log(`Erro Esp.: ${err} `) )
.then(() => console.log('Quase fim!'))
.catch(err => console.log(`Erro Geral: ${err}`))
.then(() => console.log('Fim!'))