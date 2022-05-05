// usando a notação literal
const  obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construturas
function Produto (nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 2, 0.2)
const p2 = new Produto('mac', 6000, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1)

//Funcao factory

function CriarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario('leander', 10000, 3)
const f2 = CriarFuncionario('joao', 5000, 3)
console.log(f1.getSalario(), f2.getSalario())
console.log(f1)

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON" }')
console.log(fromJSON.info)