function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#img1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 & hora <= 12){
        // BOM DIA
        img.src = "foto-manha.jpg."
    } else if (hora > 12 & hora < 18){
        // BOA TARDE!
        img.src = "foto-tarde.jpg."
    } if (hora <= 18 & hora >= 23) { 
        // BOA NOITE!
        img.src = "foto-noite.jpg."
    } else if (hora >= 1 & hora <= 4) {
        // BOA NOITE!
        img.src = "foto-noite.jpg."
    }
}
