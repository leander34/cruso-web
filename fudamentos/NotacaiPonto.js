function obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('uma funcao')
    }
}

const obj2 = new obj('cadeira')
const obj3 = new obj('leander gatao')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
