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

function solucao20(){
    let numero03 = document.getElementById("numero03")
    let numero03Number = Number(numero03.value)
     
    if(!window.lista02){
        window.lista02 = []
        }
        window.lista02.push(numero03Number)
    
        numero03.value = ``
        numero03.focus( )
}

function finalizar01(){
    let solucao20 = document.querySelector("#solucao20")
    let soma03 = 0

    for(let e of window.lista02){
        if(e < 0){
            soma03 = soma03  + e
        }
    }

    let tag03 = document.createElement("p")
    tag03.innerHTML = ``
    tag03.innerHTML += `A somatória dos números negativos é ${soma03}`
    solucao20.appendChild(tag03)


}

function solucao22(){
    let salario01 = Array.from(document.querySelectorAll(".salario"))
    let idade01 = document.querySelectorAll(".idade")
    let solucao22 = document.getElementById('solucao22')
    let select01 = document.querySelectorAll(".select01")
    let mediaSalarios01 = 0
    let somaSalarios01 = 0
    let menorIdade = Number.POSITIVE_INFINITY
    let maiorIdade = 0
    let ateCem = 0
    let arraySexo = []

    // pecorrer os inputs do DOM de salário e pega o valor de casa um. Foi usado o Array.from() pq funciona assim, antes não estava indentificando os arrays do DOM corretamente.
    for(let h of select01){
        let selectIndex = h.value
        arraySexo.push(selectIndex)
    }


    for(let f in salario01){
        let g = Number(salario01[f].value)
        somaSalarios01 = somaSalarios01 + g

        if( g <= 100 && arraySexo[f] === "F"){
            ateCem = ateCem + 1

        }

    }

    for(let i of idade01){
        let j = Number(i.value)
        if(j < menorIdade){
            menorIdade = j
        }else if(j > maiorIdade){
            maiorIdade = j
        }
    }

    mediaSalarios01 = somaSalarios01 / salario01.length


    let tag04 = document.createElement("p")
    tag04.innerHTML = ``
    tag04.innerHTML += `A média salarial ${mediaSalarios01}. <br>`
    tag04.innerHTML += `A maior idade do grupos ${maiorIdade} e a menor é ${menorIdade}.<br>`
    tag04.innerHTML += `A quantidade de mulheres com salários até R$100 é ${ateCem}.`
    solucao22.appendChild(tag04)
}

function solucao23(){
    let fromContainer = Array.from(document.querySelectorAll(".form-container"))

    for(let k of fromContainer){
        let sexo = k.querySelector('select[name="sexo"]').value
        let corOLhos = k.querySelector('select[name="corOLhos"]').value
        let corCabelo = k.querySelector('select[name="corCabelo"]').value

    }

}