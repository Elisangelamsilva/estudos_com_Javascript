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
    let num1 = Number(document.getElementById("numero10"))
    let num2 = Number(document.getElementById("numero11"))
    let num3 = Number(document.getElementById("numero12")) 
    let solucao41 = document.querySelector("#solucao41")
    let media = 0

    media = (num1*2 + num2*4 + num3*3)/10

    solucao41.innerHTML += `<p> A média ponderada é ${media} </p>`
}