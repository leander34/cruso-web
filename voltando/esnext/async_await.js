function esperarPor(tempo = 2000) {
  return new Promise(resolve => {
    setTimeout(() => resolve('odaojdao'), tempo)
  })
}

/*
esperarPor(2000)
  .then(() => console.log('Executando a promise...'))
  .then(esperarPor)
  .then(() => console.log('Executando a promise...'))
  .then(esperarPor)
  .then(() => console.log('Executando a promise...'))
*/
function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function retornarValorRapido() {
  return 20
}


async function executar() {

  const valor = await retornarValorRapido()

  console.log(`Executando a promise ${valor}...`)
  await esperarPor()

  console.log(`Executando a promise ${valor + 1}...`)
  await esperarPor()

  console.log(`Executando a promise ${valor + 2}...`)

  return valor + 3
}

async function executarDeverdade() {
  const valor = await executar()
  console.log(valor)
}

executarDeverdade()


