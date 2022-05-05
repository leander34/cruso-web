const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))
const deObjParaJSON = JSON.stringify(obj)
console.log(deObjParaJSON)

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))

const deJsonParaObj = JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')

console.log(deJsonParaObj)