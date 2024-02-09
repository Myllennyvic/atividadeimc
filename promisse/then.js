//promisse - solicitação ao sevidor
// toda vez que a promisse 
// resolve algo, sempre vai retorna um certo valor 
const promisse = Promise.resolve(5+5)

console.log('Lógica que foir desenvolvido')
//gera o retorno, primeiro valor 
promisse.then(function(value){
    console.log(`soma ${value}`)
    return value
})
//aplico minha lógica ou função/ tratar informações com base no primeiro resultdo
.then(function(value){
    console.log(`A subtratação - 1 ${value - 1}`)
    return value
})
.then(function(value){
    console.log(`Multiplicação ${value * 50}`)
    return value
})
console.log('Código Extra')
//sempre retorna o que eu estou esperando 