function checkNumber(n){
    return new Promise((resolve, reject)=>{
       if(n > 20){
         resolve('O número é maior que 20')
       }else{
        reject(new Error('Número inválido'))
       }
    })

}

const num1 = checkNumber(25)
const num2 = checkNumber(10)

num1.then((value)=>{
   console.log(`O resultado é: ${value}`) 
})
.catch((erro)=>{
    console.log(` ${erro}`) 
})

num2.then((value)=>{
    console.log(`O resultado é: ${value}`) 
 })
 .catch((erro)=>{
     console.log(` ${erro}`) 
 })

console.log('teste async')