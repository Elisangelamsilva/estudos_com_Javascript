let recebe = document.getElementById("txt1")
let leva = document.getElementById("seltab")
let res = documento.getElementById("res")
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n) != -1)){
        return true
    }else{
       return false
    }
}

function calcular(){

    if(isNumber(recebe.value && !inLista)){
        
    }else{
        window.alert("Por favor, digite um número válido ou já está em lista!")
    }

}