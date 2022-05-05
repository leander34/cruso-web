const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesa = funcionario => funcionario.pais.toLowerCase() === 'china'
const mulher = funcionario => funcionario.genero.toLowerCase() === 'f'
//const somenteSalario = funcionario => funcionario.salario
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  const mulherChinesaComMenorSalario = funcionarios.filter(chinesa).filter(mulher).reduce(menorSalario)
  console.log(mulherChinesaComMenorSalario)
})
