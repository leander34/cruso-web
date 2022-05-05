// primeira estratégia para valores padrao
function somar(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(somar(), somar(3), somar(1, 2), somar(2, 2, 2), somar(0, 0, 0))

// outros métodos

function somar2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(somar2(), somar2(3), somar2(1, 2), somar2(2, 2, 2), somar2(0, 0, 0))

function somar3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(somar3(), somar3(3), somar3(1, 2), somar3(2, 2, 2), somar3(0, 0, 0))