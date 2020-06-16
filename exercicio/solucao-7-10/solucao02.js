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