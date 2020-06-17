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