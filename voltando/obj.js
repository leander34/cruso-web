const obj = {
  nome: 'leander',
  falar: function() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

obj.falar()

