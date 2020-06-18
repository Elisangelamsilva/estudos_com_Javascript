function solucao18(){
    let numero01 = Number(document.getElementById("numero01").value)
    let solucao18 = document.querySelector("#solucao18")



    if(numero01 <= 0){
        alert("Insira um número válido!")
    }else if(numero01 % 2 == 0){
        let divisores = 0
        let a = 1        
        while(numero01 % a == 0){
            divisores = divisores + a
            a++
        }
        let tag01 = document.createElement("p")
        tag01.innerHTML = `O número ${numero01} é par e existe ${divisores} divisores do número.`
        solucao18.appendChild(tag01)


    }else if(numero01 < 10 && numero01 % 2 !== 0){
        var resultado01 = 1;
        for(var b = numero01; b > 1; b--){
            resultado01 = resultado01 * b;
        }
        let tag01 = document.createElement("p")
        tag01.innerHTML = `O número ${numero01} é ímpar menor de 10, seu fatorial é ${resultado01}`
        solucao18.appendChild(tag01)

    }else{
        let soma01 = 0
        for(let c = 1; c < numero01; c++){
            soma01 = soma01 + c
        }
        let tag01 = document.createElement("p")
        tag01.innerHTML = `O número ${numero01} é ímpar maior/igual a 10. A somatoria dos números anteriores a ele é ${soma01}`
        solucao18.appendChild(tag01)
        
    }
}

function solucao19(){
    let numero02 = document.getElementById("numero02")
    let numero02Number = Number(numero02.value)
     
    if(!window.lista01){
        window.lista01 = []
        }
        window.lista01.push(numero02Number)
    
        numero02.value = ``
        numero02.focus( )
}

function finalizar(){
    let solucao19 = document.querySelector("#solucao19")
    let soma02 = 0
    let pares01 = 0
    let po = 0
    let impares01 = 0
    let ne = 0
    let media01 = 0

    for(let d of window.lista01){
        if(d % 2 == 0){
            pares01 = pares01 + d
            po = po + 1
        }else{
            impares01 = impares01 + d
            ne = ne + 1
        }
    }
    soma02 = pares01 + impares01
    media01 = soma02 / window.lista01.length

    let tag02 = document.createElement("p")
    tag02.innerHTML = ``
    tag02.innerHTML += `A quantidade de números pares é ${po} e os ímpares é ${ne}. A média geral é ${media01} e de pares é ${po/window.lista01.length}.`
    solucao19.appendChild(tag02)
}