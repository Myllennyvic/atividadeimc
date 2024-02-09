//se a solicitação der errado usamos o catch

Promise.resolve('Olá' * 4)
.then((value) =>{
    if(Number.isNaN(value)){
        //devolver um err para um usuário
        throw new Error('valores inválidos');
    }
})
.catch((error)=>{
    console.log(`Um erro ocorreu ${error}`);
})