class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('leander silveira')
p1.falar()





function naame(nome) {
  this.nome = nome
  nome = 'biscoito'
  return this.nome
}

//console.log(naame('leander'))

//Função construtora

/*function Pessoa(nome) {
  this.nome = nome
  this.falar = function() {
    console.log(`meu nome é ${nome}`)
  }
}*/

const p2 = new Pessoa('leander')
///console.log(p2.nome)
//p2.falar()
const p3 = new Pessoa('gab')
//console.log(p3.nome)
//p3.falar()


