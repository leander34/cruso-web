Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1 // valorInicial esta setado? se tiver comeca em 0 senao em 1
    let acumulador = valorInicial || this[0] // se valorInicial existir vai ser ele que o acumulador vai pegar
    for( let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, atual) => total + atual
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))