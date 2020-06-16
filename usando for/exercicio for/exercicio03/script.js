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