function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora <= 12){
        // BOM DIA
        img.src = "img/foto-manha.jpg"
        document.body.style.background = ' rgb(211, 212, 153)'
    } else if (hora > 12 && hora < 18){
        // BOA TARDE!
        img.src = "img/foto-tarde.jpg"
        document.body.style.background = ' rgb(194, 182, 141)'
    } if (hora >= 18 && hora <= 23) { 
        // BOA NOITE!
        img.src = "img/foto-noite.jpg"
        document.body.style.background = 'green'
    } else if (hora >= 0 && hora <= 4) {
        // BOA NOITE!
        img.src = "img/foto-noite.jpg"
        document.body.style.background = 'green'
    }
}
