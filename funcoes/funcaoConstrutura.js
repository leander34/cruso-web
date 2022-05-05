function Carro(Velmax = 200, delta = 5){
    // atributo privado
    let VelAtual = 0
    // método publido
    this.acelerar = function(){
        if(VelAtual + delta <= Velmax){
            VelAtual += delta
        } else{
            VelAtual = Velmax
        }
    }
    this.GetVelAtual = function (){
        return VelAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.GetVelAtual())

const ferrari = new Carro(400, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.GetVelAtual())

console.log(typeof Carro)
console.log(typeof ferrari)