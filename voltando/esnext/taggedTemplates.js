//tagged templates - processa o templete dentro de uma função
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `o seu aluno ${aluno} está ${situacao} lamentaval isso.`)