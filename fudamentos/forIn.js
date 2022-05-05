const notas = [5, 6.7, 8.9, 10, 2.3]

for(let i in notas){
    if(notas[i] > 8)
    console.log(notas[i])
}

const pessoa = {
    nome: 'leander',
    sobrenome: 'silveira',
    idade: 18,
    peso: 70
}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}

// break e continue
externo: for(let a in notas){
    for(let b in notas){
        if(a==2 && b==3) break externo
        console.log(`Par = ${a},${b}`)
    }
}
