function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('bem vindo', 124)
const aula2 = new Aula('joguei farinha no biscoito e olha no que deu', 13456)
console.log(aula1, aula2)

// simulando o new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula4 = novo(Aula,'bem vindo', 124)
const aula5 = novo(Aula,'joguei farinha no biscoito e olha no que deu', 13456)
console.log(aula4, aula5)

/*
function novo(f, nome, id) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, [nome, id])
    return obj
}
const aula6 = novo(Aula,'bem olhando', 124)
console.log(aula6)
*/