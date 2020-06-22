// selecionar e interra sobre uma coleção de elementos 

const paragrafo = document.querySelector(".paragrafo")
const ps = paragrafo.querySelectorAll("p")

// estilo compu. do css do body
const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor;

//cor de fundo dos paragrafos de acordo com a cor de fundo do body
for(let p of ps){
    // não pode background-color
    p.style.backgroundColor = backgroundColorBody
    p.style.color = "#FFFFFF"
}