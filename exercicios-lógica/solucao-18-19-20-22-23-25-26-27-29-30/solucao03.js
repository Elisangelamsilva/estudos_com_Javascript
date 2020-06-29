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

function solucao21(){
    let numero = document.getElementById("numero05")
    let numeroNumber = Number(numero.value)
     
    if(!window.lista){
        window.lista = []
        }
        window.lista.push(numeroNumber)
    
        numero.value = ``
        numero.focus( )
}

function finalizar05(){
    let solucao21 = document.querySelector("#solucao21")
    let soma = 0

    for(let v of window.lista){
        if(v % 2 === 0){
            soma = soma + v
        }
    }
    let tag03 = document.createElement("p")
    tag03.innerHTML = ``
    tag03.innerHTML += `A somatória dos números pares é ${soma}`
    solucao21.appendChild(tag03)
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
    let solucao23 = document.getElementById("solucao23")
    let fromContainer = Array.from(document.querySelectorAll(".form-container"))
    let arrayPessoa = []
    let mulheres = 0
    let maiorIdade = 0


    for(let k of fromContainer){
        let sexo = k.querySelector('select[name="sexo"]').value
        let corOLhos = k.querySelector('select[name="corOLhos"]').value
        let corCabelo = k.querySelector('select[name="corCabelo"]').value
        let idade = Number(k.querySelector('input[name="idade02"]').value)
    
        let pessoa = {
            sexo: sexo,
            corCabelo: corCabelo,
            corOLhos: corOLhos,
            idade: idade,
        }
        arrayPessoa.push(pessoa);
    }

    for(let pessoa of arrayPessoa){
        if(pessoa.sexo == "F" && pessoa.idade >= 18 && pessoa.idade <= 35 && pessoa.corCabelo == "louro" && pessoa.corOLhos == "verde"){
            mulheres = mulheres + 1
        }

        if(pessoa.idade > maiorIdade){
            maiorIdade = pessoa.idade 

        }
    }

    let tag05 = document.createElement("p")
    tag05.innerHTML = ``
    tag05.innerHTML += `A maior idade é ${maiorIdade}. <br>`
    tag05.innerHTML += `A quantidade de indivíduos do sexo feminino cuja idade está entre 18 e 35 anos e que tenham olhos verdes e cabelos louros é ${mulheres}`
    solucao23.appendChild(tag05)


}


function solucao25(){
    let solucao25 = document.getElementById("solucao25")
    let entradas= Array.from(document.querySelectorAll(".container-roupas"))
    let arrayEntrada = []
    let mediaSem = 0
    let mediaCom = 0

    let tag = document.createElement("p")
    tag.innerHTML = ``
    for(let pecas of entradas){
        let pecasNumber = Number(pecas.value)
        arrayEntrada.push(pecasNumber)

        mediaSem = pecasNumber + mediaSem
        mediaCom = (pecasNumber * 1,2) + mediaCom 


        tag.innerHTML += `O preço antigo é ${pecasNumber}<br>`
        tag.innerHTML += `O novo preço é ${pecasNumber * 1,2}`
        solucao25.appendChild(tag)
        
    }

}


function solucao26(){
    let gerar = Number(document.getElementById("gerar").value)
    let solucao26 = document.getElementById("solucao26")
    let n = 0

    for(let i = 1000; i <= 1999; i++){
        if(n >= gerar){
            break
    }
    
    if((i % 11) === 5){
        let tag = document.createElement("p")
        tag.innerHTML = ` ${i}`
        solucao26.appendChild(tag)
        n+=1
    }
    
    }
}


function solucao27(){
    let numero = document.getElementById("numero04")
    let numeroNumber = Number(numero.value)
     
    if(!window.lista){
        window.lista = []
        }
        window.lista.push(numeroNumber)
    
        numero.value = ``
        numero.focus( )
}

function finalizar04(){
    let solucao27 = document.querySelector("#solucao27")
    let soma = 0
    let maior = 0
    let menor = Number.POSITIVE_INFINITY

    for(let e of window.lista){
        if(e > maior){
            maior = e
        }if(e < menor){
            menor = e
        }

        soma = soma + e
        console.log(soma)

    } 

    let tag = document.createElement("p")
    tag.innerHTML = ``
    tag.innerHTML += `O maior valor é ${maior} e o menor ${menor}. <br>`
    tag.innerHTML += `A média é ${soma/window.lista.length}`
    solucao27.appendChild(tag)


}

function solucao28(){
    let numero = Number(document.getElementById("numero07").value)
    let solucao28 = document.getElementById("solucao28")
    let soma = 0

    for(let i = 1; i < numero; i++){
        soma += 1/i

    }
    let tag = document.createElement("p")
    tag.innerHTML = ``
    tag.innerHTML += `A soma é ${soma}`
    solucao28.appendChild(tag)


}


function solucao29(){
    let numero04 = document.getElementById("numero04")
    let numero04Number = Number(numero04.value)

    if(!window.lista03){
        window.lista03 = []
    }
        window.lista03.push(numero04Number)
    
        numero04.value = ``
        numero04.focus( )
        console.log(window.lista03)
    
}


function finalizar03(){
    let solucao29 = document.getElementById("solucao29")
    let soma04 = 0
    let soma05 = 0
    let media02 = 0

    for(let l of window.lista03){
        if(l >= 13 && l <= 73){
            soma04 = soma04 + l  
            soma05 = soma05 + 1
        }
    }
    console.log(soma05)
    media02 = soma04 / soma05


    let tag04 = document.createElement("p")
    tag04.innerHTML = ``
    tag04.innerHTML += `A média aritmétrica é ${media02}`
    solucao29.appendChild(tag04)


}

function solucao30(){
    let entrada = Number(document.getElementById("entrada").value)
    let solucao30 = document.getElementById("solucao30")
    let n = 0

    
    for(let i = 101; i <= 200; i+=2){
        if(n === entrada){
            break
        }
        n++


    let tag = document.createElement("p")
    tag.innerHTML = ``
    tag.innerHTML += ` ${i}`
    solucao30.appendChild(tag)
    }

}