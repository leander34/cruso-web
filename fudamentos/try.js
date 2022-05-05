function tratarErro(erro){
    //throw new Error('404')
    throw 'MESSAGEM'
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: "leander" }
imprimirNomeGritado(obj)