const fs = require('fs')

const caminho = __dirname + '/dados.txt'

function pegaArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, 'UTF8', (err, conteudo) => resolve(conteudo.toString()))
  })
}

pegaArquivo(caminho).then(conteudo => conteudo.split('\n')).then(linha => linha.join(',')).then(conteudo => `O conteudo final é: ${conteudo}`).then(console.log)

/*
const fs = require('fs')

const caminho = __dirname + '/dados.txt'

function pegaArquivo(caminho) {
  return new Promise(resolve => {
    const conteudo = fs.readFileSync(caminho, 'UTF8')
    resolve(conteudo)
  })
}

pegaArquivo(caminho).then(console.log)*/
