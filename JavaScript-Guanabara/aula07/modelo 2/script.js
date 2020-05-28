function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano atual com 4 casas
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')

//caso a ano seja igual a zero ou seja colocado um ano maior que o atual
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        // criar dinamicamente imagem
        // 1 - criação de uma tag img
        var img = document.createElement('img') 
        // 2 - id desse atributo
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){

            }else if (idade >= 10 && idade < 21){

            } else if(idade >= 21 && idade < 50){

            }else{
                //idoso
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"

            if(idade >= 0 && idade < 10){

            }else if (idade >= 10 && idade < 21){

            } else if(idade >= 21 && idade < 50){

            }else{
                //idoso
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}