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

//FALTA TUDO
function solucao47(){
    let solucao47 = document.getElementById("solucao47")
    let cliente01 = Array.from(document.querySelector(".form-container01"))
    let cliente02 = document.querySelector(".form-container02")
    let cliente03 = document.querySelector(".form-container03")

    console.log(cliente01)


    for(let dados01 of cliente01){
        let nomeCliente1 = dados01.querySelector('input[name="nomeCliente1"]')
        let gastos1 = Number(dados01.querySelector('input[name="gastos1"]').value)
        let media01 = 0
        if(gastos1 > 500.000){
            media01 = (media01 * 1.1)
        }
        console.log(media01)
    
    }

}

function solucao48(){
    let solucao48 = document.querySelector("#solucao48")
    let aluno01 = document.getElementById("aluno1").value
    let aluno02 = document.getElementById("aluno2").value
    let aluno03 = document.getElementById("aluno3").value

    let nota01 = Number(document.getElementById("nota01").value)
    let nota02 = Number(document.getElementById("nota2").value)
    let nota03 = Number(document.getElementById("nota3").value)

    if(nota01 > 0 && nota01 <= 4.9){
        solucao48.innerHTML += `<p>Aluno ${aluno01} sua nota final é ${nota01} conceito final D.</p>`
    } else if(nota01 >= 5 && nota01 <= 6.9){
        solucao48.innerHTML += `<p>Aluno ${aluno01} sua nota ${nota01} seu conceito final C.</p>`    
    } else if(nota01 >= 7 && nota01 <= 8.9){
        solucao48.innerHTML += `<p>Aluno ${aluno01} sua nota ${nota01} seu conceito final B.</p>`
    }else if(nota01 >= 9 && nota01 <= 10){
        solucao48.innerHTML += `<p>Aluno ${aluno01} sua nota ${nota01} seu conceito final A.</p>`
    }

    if(nota02 > 0 && nota02 <= 4.9){
        solucao48.innerHTML += `<p>Aluno ${aluno02} sua nota ${nota02} seu conceito final D.</p>`
    } else if(nota02 >= 5 && nota02 <= 6.9){
        solucao48.innerHTML += `<p>Aluno ${aluno02} sua nota ${nota02} seu conceito final C.</p>`
    } else if(nota02 >= 7 && nota02 <= 8.9){
        solucao48.innerHTML += `<p>Aluno ${aluno02} sua nota ${nota02} seu conceito final B.</p>`
    }else if(nota02 >= 9 && nota02 <= 10){
        solucao48.innerHTML += `<p>Aluno ${aluno02} sua nota ${nota02} seu conceito final A.</p>`
    }

    if(nota03 > 0 && nota03 <= 4.9){
        solucao48.innerHTML += `<p>Aluno ${aluno03} sua nota ${nota03} seu conceito final D.</p>`
    } else if(nota03 >= 5 && nota03 <= 6.9){
        solucao48.innerHTML += `<p>Aluno ${aluno03} sua nota ${nota03} seu conceito final C.</p>`
    } else if(nota03 >= 7 && nota03 <= 8.9){
        solucao48.innerHTML += `<p>Aluno ${aluno03} sua nota ${nota03} seu conceito final B.</p>`
    }else if(nota03 >= 9 && nota03 <= 10){
        solucao48.innerHTML += `<p>Aluno ${aluno01} sua nota ${nota03} seu conceito final A.</p>`
    }

}