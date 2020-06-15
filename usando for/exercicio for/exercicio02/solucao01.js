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