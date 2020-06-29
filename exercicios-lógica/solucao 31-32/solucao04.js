function solucao31(){
    let numero = document.getElementById("numero")
    let numerosNumber = Number(numero.value)
    console.log(numero)

    if(!window.lista){
        window.lista = []
    }
    window.lista.push(numerosNumber)

    numero.value = ``
    numero.focus()

}

function finalizar(){
    let solucao31 = document.getElementById("solucao31")
    let dentroIntervalo = 0
    let foraIntervalo = 0

    for(let numeros of window.lista){
        if(numeros >= 10 && numeros <= 20){
            dentroIntervalo = dentroIntervalo + 1
        }else{
            foraIntervalo = foraIntervalo + 1
        }

    }
    solucao31.innerHTML += `<p>A quantidade de números dentro do intervalo é ${dentroIntervalo}, a quantidade fora é ${foraIntervalo}.</p>`

}
