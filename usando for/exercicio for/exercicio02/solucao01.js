function solucao01(){
     let dados = document.querySelectorAll(".num")
     let res = document.getElementById("res")
     let soma = 0

     for(let a of dados){
         let i = Number(a.value)
                  
         if(i < 0){
             soma = soma + 1           
         }
         
     }
    res.innerHTML = `Existe ${soma} número negativos.`
}

function solucao03(){
    let salario = document.querySelectorAll(".salario")
    let filhos = document.querySelectorAll(".filhos")
    let solucao3 = document.getElementById('solucao03') 
    let somaSalarios = 0
    let mediaSalarios = 0
    let maiorSalario = 0
    let ateCem = 0
    let somaFilhos = 0
    let mediaFilhos = 0

    for(let b of salario){
        let n = Number(b.value)
        somaSalarios = somaSalarios + n

        if(n > maiorSalario){
            maiorSalario = n 
        }
        if(n <= 100){
            ateCem = ateCem + 1
        }
    }
    mediaSalarios = somaSalarios / salario.length

    let tagCriada = document.createElement('p')
    tagCriada.innerHTML = ``
    tagCriada.innerHTML += `A média do salário da população: ${mediaSalarios}<br>`
    tagCriada.innerHTML += `O maior salário: ${maiorSalario}<br>`
    tagCriada.innerHTML += `Salário até R$100,00: ${(ateCem/salario.length)*100}%<br>`
    solucao3.appendChild(tagCriada)

    for(let c of filhos){
        let f = Number(c.value)
        somaFilhos = somaFilhos + f
    }
    mediaFilhos = somaFilhos / filhos.length 

    let criarTag = document.createElement('p')
    criarTag.innerHTML = ``
    criarTag.innerHTML = `A média de filhos: ${mediaFilhos}.`
    solucao3.appendChild(criarTag)
  
}

function solucao06(){
    let voto = document.querySelector("#voto")
    let votoNumber = Number(voto.value)

    if(votoNumber > 6 || votoNumber <= 0){
        alert("Por favor, insira um número válido!")
    }
    
    if(!window.lista){
    window.lista = []
    }
    window.lista.push(votoNumber)

    voto.value = ``
    voto.focus()

}

function finalizar(){
    let solucao06 = document.querySelector("#solucao06")
    let candidato01 = 0
    let candidato02 = 0
    let candidato03 = 0
    let candidato04 = 0
    let votoNulo = 0
    let votoBranco = 0
    let maisVotado = 0
    let numeroEntrada = 0

    for(let v of window.lista){
        if(v == 1){
            candidato01 = candidato01 + 1
            if(candidato01 > maisVotado){
                maisVotado = candidato01
                numeroEntrada = 1
            }

        } else if(v == 2){
            candidato02 = candidato02 + 1
            if(candidato02 > maisVotado){
                maisVotado = candidato02
                numeroEntrada = 2
            }
        } else if(v == 3){
            candidato03 = candidato03 + 1
            if(candidato03 > maisVotado){
                maisVotado = candidato03
                numeroEntrada = 3
            }
        } else if(v == 4){
            candidato04 = candidato04 + 1
            if(candidato04 > maisVotado){
                maisVotado = candidato04
                numeroEntrada = 4
            }
        } else if(v == 5){
            votoNulo = votoNulo + 1
            if(votoNulo > maisVotado){
                maisVotado = votoNulo
                numeroEntrada = 5
            }
        } else{
            votoBranco = votoBranco + 1
            if(votoBranco > maisVotado){
                maisVotado = votoBranco
                numeroEntrada = 6
            }
        }
    }

    let creatTag = document.createElement("p")
    creatTag.innerHTML = ``
    creatTag.innerHTML += `O candidato mais votado foi o ${numeroEntrada}`
    solucao06.appendChild(creatTag)

}


function solucao08(){
    let mediaOito = document.getElementById("mediaOito")
    let media = Number(mediaOito.value)

        if(media % 2 != 0){
            alert("Por favor, insira um número válido!")
        }
        
        if(!window.listaNumber){
        window.listaNumber = []
        }
        window.listaNumber.push(media)
    
        mediaOito.value = ``
        media.focus()
}

function finalizar02(){
    for()
}


