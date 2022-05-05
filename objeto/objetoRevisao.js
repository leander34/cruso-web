const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'leander',
        idade: 18,
        endereco: {
            logradouro: 'Rua abc',
            numero: 127,
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 28
    }, {
        nome: 'ana',
        idade: 30
    }],
    CalcularValorSeguro: function(){
        //..
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'rua guo'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.CalcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)