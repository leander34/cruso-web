const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // removo o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir do indice dois(o indice 2 vem tbm)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // comeca no primeiro indice e vai ate o quarto (o quarto não entra no novo array criado, o primeiro sim)
console.log(algunsPilotos2)