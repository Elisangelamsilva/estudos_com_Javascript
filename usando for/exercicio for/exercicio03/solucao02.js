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

    if(codioAlunos <= 0){
        alert("Insira um número válido!")
    }
    if(){

    }
    
    soma01 = notaUm + notaDois + notaTres
    media01 = soma01 / 3





}