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

function solucao32(){
    let numero01 = Number(document.getElementById("numero01").value)
    let numero02 = Number(document.getElementById("numero02").value)
    let solucao32 = document.querySelector("#solucao32")
    let pares = []


    for(let i = numero01; i <= numero02; i++){
        if((i % 2) === 0){
            pares.push(i)
        }
    }
    solucao32.innerHTML += `<P>Os números pares são ${pares }</P>`
}

function solucao33(){
    let numero03 = Number(document.getElementById("numero03").value)
    let solucao33 = document.querySelector("#solucao33")

    let num = 0

    for(let i = 1; i <= numero03; i++){
        num = numero03 * i
        solucao33.innerHTML += `<p>${numero03}x${i} = ${num}</p>`
    }
}
