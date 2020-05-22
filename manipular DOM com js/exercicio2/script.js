function fatoriar() {
    var rece2 = window.document.querySelector("input#recebeu").value
    var resultado = 1

    for(var i = rece2; i > 1; i--){
        resultado = resultado * i;
    }

    res.innerHTML = `A fatoração do número ${rece2}! é <strong>${resultado}</strong>`
}