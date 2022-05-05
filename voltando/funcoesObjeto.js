const pessoa = {
  nome: 'leander',
  idade: 19,
  corDoCabelo: 'castanho'
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'DataNascimento', {
  enumerable: true,
  writable: false,
  value: '28/08/2002'
})

const dest = { a: 1}
const o1 = { b: 3}
const o2 = { c: 4, a: 6}
const obj = Object.assign(dest, o1, o2)
console.log(obj, dest)