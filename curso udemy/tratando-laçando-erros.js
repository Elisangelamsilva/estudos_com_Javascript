// try, catch e throw
// try - significa tentar
//catch - quando ocorre um erro, ele recebe e executa caso ocorro esse erro 

/* //teste 01
try{
    console.log(naoExisto)
} catch(err){
    console.log() //nao é interessante mostrar o erro para o cliente
    console.log(err) //olhar internamente
}
*/

/*
//teste 02
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
   // console.log(error)
   console.log("Alguma coisa mais amigavel para mostrar na tela de erro")
}
*/

/*
//teste 03
try{
    //É executa quando não há erros
} catch(e){
    //É executada qaundo há erros
} finally{
    //Sempre
}
*/

function retornaHora(data){
    //se a data for enviada e caso não seja instancia de data
    if(data && !(data instanceof Date)){ 
        throw new TypeError("Esperando instância de Date.")
    }

    // se não enviar uma hora
    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // tira o PM E AM
    })
}

try{
const data = new Date('01-01-1970 12:58:12') //jeito certo
//const hora1 = retornaHora(11) // errado 
const hora = retornaHora()
console.log(hora);
} catch(e){
    //Tratar erro
} finally{
    console.log("Tenha um bom dia.");
}