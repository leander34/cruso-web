function area(largura, altura) {
    const area = largura * altura
    if(area > 20)
    console.log(`Tamanho = ${area}`)
    else{
        return area
    }
}

console.log(area(2,5))
area(10, 10)
console.log(area(10, 10))

const res = area(2, 3)
console.log(res)