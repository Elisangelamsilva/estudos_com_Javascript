function solucao31(){
    let numero = document.getElementById("numero")
    let numerosNumber = Number(numero.value)
    console.log(numero)

    if(!window.lista){
        window.lista = []
    }
    window.lista.push(numerosNumber)

    numero.value = ``
    numero.focus()

}

function finalizar(){
    let solucao31 = document.getElementById("solucao31")
    let dentroIntervalo = 0
    let foraIntervalo = 0

    for(let numeros of window.lista){
        if(numeros >= 10 && numeros <= 20){
            dentroIntervalo = dentroIntervalo + 1
        }else{
            foraIntervalo = foraIntervalo + 1
        }

    }
    solucao31.innerHTML += `<p>A quantidade de números dentro do intervalo é ${dentroIntervalo}, a quantidade fora é ${foraIntervalo}.</p>`

}

function solucao32(){
    let numero01 = Number(document.getElementById("numero01").value)
    let numero02 = Number(document.getElementById("numero02").value)
    let solucao32 = document.querySelector("#solucao32")
    let pares = []


    for(let i = numero01; i <= numero02; i++){
        if((i % 2) === 0){
            pares.push(i)
        }
    }
    solucao32.innerHTML += `<P>Os números pares são ${pares }</P>`
}

function solucao33(){
    let numero03 = Number(document.getElementById("numero03").value)
    let solucao33 = document.querySelector("#solucao33")

    let num = 0

    for(let i = 1; i <= numero03; i++){
        num = numero03 * i
        solucao33.innerHTML += `<p>${numero03}x${i} = ${num}</p>`
    }
}

// DANDO ERRO
function solucao34(){
    let solucao34 = document.getElementById("solucao34")
    let fromContainer = Array.from(document.querySelectorAll(".form-container"))
    let alto = 0
    let baixo = 0
    let alunoBaixo = 0
    let alunoAlto = 0
    console.log(fromContainer)

    for(let dados of fromContainer){
        let alunosCodigos = dados.querySelectorAll(".codigo")
        let alunosAlturas = dados.querySelectorAll(".altura")
        console.log(alunosAlturas)
        console.log(alunosCodigos)

        if(alunosAlturas > alto){
            alto = alto
            alunoAlto = alunosCodigos
        }if(alunosAlturas < baixo){
            baixo = baixo
            alunoBaixo = alunoBaixo


        }
        console.log(alunoAlto, alto)
        console.log(alunoBaixo, baixo)
        
    }

}

//FALTA FINALIZAR
function solucao35(){
    let solucao35 = document.getElementById("solucao35")
    let fromContainer = Array.from(document.querySelectorAll(".form-container"))
    let arrayPessoa = []
    let mediaMulheres = 0
    let maiorAltura = 0
    let menorAltura = 0


    for(let dados of fromContainer){
        let sexo = k.querySelector('select[name="sexo"]').value
        let altura = Number(k.querySelector('input[name="altura"]').value)
    
        let pessoa = {
            sexo: sexo,
            altura: altura,
        }
        arrayPessoa.push(pessoa);
    }

    for(let pessoa of arrayPessoa){

    }

}


function solucao36(){
    let numeros = document.querySelector("#numero06")
    let numeroNumber = Number(numeros.value)

        if(!window.lista){
            window.lista = []
        }
        window.lista.push(numeroNumber)

        numeros.value = ``
        numeros.focus( )
}
function finalizar01(){
    let solucao36 = document.querySelector("#solucao36")

    for(dados of window.lista){
        let resultado = 1
        for(var b = dados; b > 1; b--){
            resultado = resultado * b;
        }
        solucao36.innerHTML += `<p>${dados}! = ${resultado} <br></p>`    
    }

}

function solucao37(){
    let numero = Number(document.getElementById("numero07").value)
    let solucao37 = document.querySelector("#solucao37")
    let multiplicacao = 0

    for(let i = 1; i <= 20; i++){
        multiplicacao = numero * i
        solucao37.innerHTML += `<p> ${numero}x${i} = ${multiplicacao}<br></p>`
    }
}


//Não finalizado
function solucao38(){
    let solucao38 = document.querySelector("#solucao38")
    let multiplicacao = 1

    for(let i = 93; i >= 1477; i+2){
        multiplicacao = multiplicacao * i
    }

}

//como mostrar os divisores e o próprio número
function solucao39(){
    let numero = Number(document.getElementById("numero08").value)
    let solucao39 = document.querySelector("#solucao39")
    let soma = 0
    let a = 1
    let arrayDivi = []  


    while((numero % a) == 0){
        arrayDivi.push(a)
        soma = soma + a
        a++
    }
    solucao39.innerHTML += `<p>O número ${numero} tem como divisores ${arrayDivi} e a soma dos divisores é ${soma}</p>`
}




