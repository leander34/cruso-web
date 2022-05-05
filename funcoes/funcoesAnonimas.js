const soma = function(x, y){
    return x + y
}

const imprimirSoma = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirSoma(2, 3)
imprimirSoma(2, 3, soma)
imprimirSoma(2,5, function(x, y){
    return x - y
})
imprimirSoma(3, 3, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('hello')
    },
    falar2(){
        console.log('opaa')
    }
}
pessoa.falar()
pessoa.falar2()
