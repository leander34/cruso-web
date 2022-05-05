Array.prototype.filter2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const notas = [10, 40, 60, 71, 89, 33, 50, 91]

const aprovados = notas.filter2(nota => nota >= 60)
console.log(aprovados)