function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano atual com 4 casas
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')

    if(fano.nodeValue.length == 0 || fano.value > 0){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }
}