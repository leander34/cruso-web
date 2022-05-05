console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('leander silveira santos'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([4, 2, 3, 5, 3, 5, 6].first())
console.log(['a', 'b', 'c'].first())

//String.prototype.toString = function () {
 //   return 'lascou tudo'
//}

//console.log('leander'.reverse())