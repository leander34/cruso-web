const aprovados = ['leander', 'bianca', 'leticia', 'ana']

aprovados.forEach((nome, indice) => {
  console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const nomesAprovados = nome => console.log(nome)
aprovados.forEach(nomesAprovados)