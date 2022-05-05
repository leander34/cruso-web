// forma literal
function fun1(a , b) {
    return a + b
}

// em uma variável
const fun2 = function () {}

// em um array (vetor)
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](3, 3))

// objeto

const obj = {
    falar: function() {return 'opaa'}
}
obj.falar2 = function() {console.log('to aqui, me chama')}

console.log(obj.falar())
obj.falar2()

// funcao como parametro
function run(fun) {
    fun()
}
run(function () { console.log('exec...')})

//---- ex 2

function run2(func) {
    fun3()
}
function fun3() {
    console.log('exec...2')
}
run2(fun3)

// uma funcao pode retornar/conter uma funcao
function somar(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

somar(2, 4)(4)
const res = somar(2,4)
console.log(typeof res) // armazenou a funcao que retornou
res(4)

//-------------
//teste de funcao detro de outra funcao
 // pode ser dentro  
 const nome = 'leander'
function teste() {
    // pode ser aqui
    function escreve(){
        console.log(nome)
    }
    escreve()
}
teste()