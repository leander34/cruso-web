const pessoa = {
    nome: "leander",
    idade: 18,
    endereco: {
        rua: 'gaupore',
        numero: 127
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade:i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {rua, numero, cep} } = pessoa
console.log(rua, numero, cep)

// array

const [n1,n2,n3,n4,n5 = 0] = [3,6,7,4]
console.log(n1,n2,n3,n4,n5)

// funcoes com objetos
/*
function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {
    min: 10,
    max: 20
}

console.log(rand(obj))
console.log(rand({min:900}))
console.log(rand({min: 30, max: 43}))
console.log(rand({}))   */

//funcoes com arrays

function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([40, 50]))
console.log(rand([, 10]))
console.log(rand([]))