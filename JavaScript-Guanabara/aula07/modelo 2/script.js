function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano atual com 4 casas
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')

//caso a ano seja igual a zero ou seja colocado um ano maior que o atual
    if(fano.nodeValue.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{

    }
}