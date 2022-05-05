const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono...
// vai travar a aplicacao até que seja terminada a leitura dos arquivos
//´vai travar o event loop

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
// quando terminar a leitura, a callback será chamada

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})