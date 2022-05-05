class Lancamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = [] // vai ser uma array de objetos
  }

  addLancamentos(...lancamentos) { // passando array de objetos
    lancamentos.forEach(elem => this.lancamentos.push(elem))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(elem => {
      valorConsolidado += elem.valor
    })
    return `Total gasto no mes de ${this.mes} do ano de ${this.ano} é ${valorConsolidado}`
  }
}

const salario = new Lancamento('Salário', 60000)
const agua = new Lancamento('Água', -230)

const contaLuz = { nome: 'Luz', valor: -500}

const contas = new CicloFinanceiro('Agosto', 2022)
contas.addLancamentos(salario, agua, contaLuz)
console.log(contas.sumario())

