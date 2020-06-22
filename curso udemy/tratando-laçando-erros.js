// try, catch e throw
// try - significa tentar
//catch - quando ocorre um erro, ele recebe e executa caso ocorro esse erro 

/*
try{
    console.log(naoExisto)
} catch(err){
    console.log() //nao é interessante mostrar o erro para o cliente
    console.log(err) //olhar internamente
}
*/

//lançar um erro para visualização interna atual ou futuras 
function soma(x, y){
        if(typeof x !== "number" || typeof y !== "number"){
            throw new Error("x e y precisam ser numeros") // function construtora que mostra o erro quando ele é tratado
    }
    return x + y
}
//tratar o erro, porém não mostra onde tá o erro
try {
    console.log(soma(1, 3))
    console.log(soma("1", 3))
} catch(error){
    console.log(error)
}
