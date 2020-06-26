function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString("pt-BR", {
        hour12:false
    })
}


//consfigurar um intervalo de tempo para que algo seja executado
const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);

// parar a execusão da primeria função
setTimeout(() => {
    clearInterval(timer)
}, 10000);
