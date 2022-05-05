const notas = [2, 4, 5, 6, 3.4, 8, 9, 10]

const notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log (notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)


const notasMenores = nota => nota < 7 
const notasbaixas3 = notas.filter(notasMenores)
console.log(notasbaixas3)