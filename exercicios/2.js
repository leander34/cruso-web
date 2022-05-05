const triangulo = (l1, l2, l3) => {
    if(l1 == l2 && l2 == l3){
        console.log('Equilatero')
    }
}

triangulo(2, 2, 2)

const pontos = [30, 40, 50, 0, 73, 85]
let recorde = 0
let ind = 0
let maior = pontos[0]
let menor = 999999
let pior
let aux

for(let i = 0;i < pontos.length;i++){
    if(pontos[i] > maior){
        recorde++
    }
    if(pontos[i] < menor){
        aux = i
        pior = aux
    }
}
console.log(recorde)
console.log(pior)