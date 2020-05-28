function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#img1')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
}



