let recebe = document.getElementById("txt1")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
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

    if(isNumber(recebe.value) && !inLista(recebe.value, valores)){
        valores.push(Number(recebe.value))
        let item = documente.createElement('option')
        item.text = `Valor ${recebe.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert("Por favor, digite um número válido ou já está em lista!")
    }

    recebe.value = ``
    recebe.focus()

}

function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores!")
    } else{
        let tot = valores.length
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
    }

}