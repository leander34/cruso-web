module.exports = function(...nomes) {
  return nomes.map(nome => `Boa semana ${nome}!`)
}

/*
module.exports = function(...nomes) {
  return nomes.map(nome => function(re) {
    return `oi, ${nome}, ${re}!`
  })
}
*/