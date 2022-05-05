class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'professor') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor(sobrenome) {
    super(sobrenome, 'pescador')
  }
}

const filho = new Filho('Silveira')
const avo = new Avo('Santos')
console.log(filho.profissao)
console.log(avo)