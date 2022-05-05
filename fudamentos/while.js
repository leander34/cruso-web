function gerar(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
let opcao = 0

while(opcao != -1){
    opcao = gerar(-1, 9)
    if(opcao != -1)
    console.log(`A opcao escolhida foi ${opcao}`)
}
console.log('Até a próxima')