const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if(this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'f40',
  velMax: 324 //shadowing
}

const volvo = {
  modelo: 'Cx100',
  status() {
    return `${this.modelo}: ${super.status()}` // super referência ao prototype do objeto(pai). this referencia o objeto atual. O obejto volvo ja tem um método status, entao para eu usar o método status do objeto pai do volto, preciso usar o super
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(200)
ferrari.acelerarMais(20)
console.log(ferrari.status())