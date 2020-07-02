function solucao40(){
    let numero = Number(document.getElementById("numero09").value)
    let solucao40 = document.querySelector("#solucao40")
    let fatorial = 1
    let soma = 0


    for(let i = 1; i <= numero; i++){
        soma = soma + i
    }
    solucao40.innerHTML += `<p>O somatório dos números inteiro é ${soma}. </p>`
    
    for(var b = numero; b > 1; b--){
        fatorial = fatorial * b;
    }
    solucao40.innerHTML += `A fotoração do número ${numero} é ${fatorial}.`
}

function solucao41(){
    let num1 = Number(document.getElementById("numero10").value)
    let num2 = Number(document.getElementById("numero11").value)
    let num3 = Number(document.getElementById("numero12").value) 
    let solucao41 = document.querySelector("#solucao41")
    let media = 0

    console.log(num1)
    console.log(num2)
    console.log(num3)
    media = (num1*2 + num2*4 + num3*3)/10
    solucao41.innerHTML += `<p> A média ponderada é ${media} </p>`
}

function solucao42(){
    let numero = Number(document.getElementById("numero").value)
    let solucao42 = document.querySelector("#solucao42")
    soma = 0

    for(let i = 1; i <= numero; i++){
        soma = soma + 10
    }
    solucao42.innerHTML += `<p>A soma é ${soma}</p>`


}

function solucao43(){
    let arrayNumeros = [
        (document.getElementById("num1").value),
        (document.getElementById("num2").value),
        (document.getElementById("num3").value),
        (document.getElementById("num4").value),

    ]

    let solucao43 = document.querySelector("#solucao43")

    solucao43.innerHTML += `<p>Dados de entrada: ${arrayNumeros} e em ordem crescente: ${arrayNumeros.sort()} </p>`
}