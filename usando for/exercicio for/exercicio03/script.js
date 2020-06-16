function solucao07(){
    let notaUm = Number(document.getElementById("num1").value)
    let notaDois = Number(document.getElementById("num2").value)
    let notaTres = Number(document.getElementById("num3").value)
    let codigoAlunos = Number(document.getElementById("codigo").value)
    let soma01 = 0
    let media01 = 0

    if(codigoAlunos == 0){
        alert("Ciclo encerrado!")
    } else{
        soma01 = notaUm + notaDois + notaTres
    }

    media01 = soma01 / 3

    let tagCreat = document.createElement("p")
    tagCreat.innerHTML = ``
    tagCreat.innerHTML += `Média do aluno com o cógigo ${codigoAlunos}`
    tagCreat.innerHTML += `A média é: ${media01}`
    solucao08.appendChild(tagCreat)
}