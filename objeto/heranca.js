const ferrari = {
    modelo: 'F40',
    velMax: 350
}

const volvo = {
    modelo: 'V40',
    velMax: 180
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuCarro() {}
console.log(typeof Object, typeof MeuCarro)
console.log(Object.prototype, MeuCarro.prototype)