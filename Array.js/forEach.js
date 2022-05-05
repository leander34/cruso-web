const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // terceiro parametro é o array
    console.log(`${indice = 1}) ${nome}`)
})

aprovados.forEach(nomes => console.log(nomes))

const NomesAprovados = nome => console.log(nome)

aprovados.forEach(NomesAprovados)

/*for(let i = 0; i < aprovados.length; i++){
    console.log(`${i + 1}) ${aprovados[i]}`)
    console.log(aprovados)
}*/