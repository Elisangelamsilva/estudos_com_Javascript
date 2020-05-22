function fatoriar() {
    var rece2 = window.document.querySelector("input#recebeu")

    for(var i = 1; i < resultado; i++){
        resultado = rece2 * i;
    }

    resultado.innerHTML = `A fatoração do número ${rece2} é <strong>${resultado}</strong>`
}