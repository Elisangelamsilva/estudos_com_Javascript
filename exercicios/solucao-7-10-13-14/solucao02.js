function solucao07(){
    let notaUm = Number(document.getElementById("num1").value)
    let notaDois = Number(document.getElementById("num2").value)
    let notaTres = Number(document.getElementById("num3").value)
    let codigoAlunos = Number(document.getElementById("codigo").value)
    let solucao07 = document.querySelector("#solucao07")
    let soma01 = 0
    let media01 = 0

    if(codigoAlunos == 0){
        alert("Ciclo encerrado!")
    }else{
        soma01 = notaUm + notaDois + notaTres
    }
    media01 = soma01 / 3

    let tagCreat = document.createElement("p")
    tagCreat.innerHTML = ``
    tagCreat.innerHTML += `A média do aluno com o código ${codigoAlunos}`
    tagCreat.innerHTML += ` é: ${media01}`
    solucao07.appendChild(tagCreat)
}

function solucao10(){
    let noUm = Number(document.getElementById("num01").value)
    let noDois = Number(document.getElementById("num02").value)
    let noTres = Number(document.getElementById("num03").value)
    let codiAlunos = Number(document.getElementById("codigo02").value)
    let solucao10 = document.querySelector("#solucao10")
    let soma02 = 0
    let media02 = 0

    if(codiAlunos <= 0){
        alert("Insira um número válido!")
    } else{
        soma02 = noUm + noDois + noTres
    }
    media02 = soma02 / 3

    let criarTag = document.createElement("p")
    criarTag.innerHTML = ` `
    criarTag.innerHTML += `A média do aluno com o código ${codiAlunos}`
    criarTag.innerHTML += ` é: ${Math.floor(media02)}<br>`
    criarTag.innerHTML += `Suas notas são: NOTA 1: ${noUm}, NOTA 2: ${noDois}, NOTA 3: ${noTres}<br>`
    solucao10.appendChild(criarTag)

    if(media02 >= 5){
        criarTag.innerHTML += `APROVADO`
    }else{
        criarTag.innerHTML += `REPROVADO`
    }
}

function solucao13(){
    let fatorial = Number(document.getElementById("fatorial").value)
    let solucao13 = document.querySelector("#solucao13")
    res = 1

    for(let i = fatorial; i > 1; i--){
        res = res * i
    }

    let tagCriada = document.createElement("p")
    tagCriada.innerHTML = ` `
    tagCriada.innerHTML += `O número inserido foi ${fatorial}, seu fatorial é ${res}`
    solucao13.appendChild(tagCriada)
    console.log(tagCriada)

}

function solucao14(){
    let quatorze = document.getElementById("quatorze")
    let quatorzeNumber = Number(quatorze.value)
    
    if(!window.lista){
    window.lista = []
    }
    window.lista.push(quatorzeNumber)

    quatorze.value = ``
    quatorze.focus( )
}

function finaliza(){
    let solucao14 = document.querySelector("#solucao14")
    let negativos = 0
    let neg = 0
    let positivos = 0
    let po = 0
    let soma03 = 0
    let media03 = 0

    for(let y of window.lista){
        if(y > 0){
            positivos = positivos + y
            po = po + 1
        }else{
            negativos = negativos + y
            neg = neg + 1
        }
    }
    soma03 = positivos + negativos
    media03 = soma03 / window.lista.length
     
    let tag = document.createElement("p")
    tag.innerHTML = ``
    tag.innerHTML += `A quatidade de valores positivos ${po} e negativos ${neg}.`
    tag.innerHTML += ` A média tota é ${media03} e a porcentagem de negativos é ${neg/window.lista.length} e positivos ${po/window.lista.length}`
    solucao14.appendChild(tag)
}