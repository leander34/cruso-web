const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //-parametros primeiro o valor/string do elemento, dps o indice dele, dps todos os elementos do array 
fabricantes.forEach(fabricante => console.log(fabricante))



//==========================>

const nums = [1, 2, 4, 5, 6]

nums.forEach((num, a, b) => console.log(b))