 let dobrar = function (a){
     return 2 * a
 }

 dobrar = (a) => {
     return 2 * a
 }

 dobrar = a => 2 * a // retorno implícito

 console.log(dobrar(2))

 let ola = function(){
     return 'ola'
 }

 ola = () => 'ola'
 ola = _ => 'ola'

 console.log(ola())