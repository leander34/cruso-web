const _ = require('lodash')

const int = setInterval(() => console.log(_.random(1, 60)), 2000)

//setTimeout(() => clearInterval(int), 9000)

