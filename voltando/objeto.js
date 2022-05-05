const carro = {
  ano: {
    mes: 10,
    dia: 8
  }
}



const carros = [
  {
    nome: 'A4',
    ano: {
      fabricacao: 2000,
      modelo: 2001
    }
  },
  {
    nome: 'jetta',
    ano: {
      fabricacao: 2008,
      modelo: 2009
    }
  },
  {
    nome: 'Hilux',
    ano: {
      fabricacao: 2012,
      modelo: 2013
    }
  }
]



for(let i of carros) {
  console.log(i.ano.modelo)
}