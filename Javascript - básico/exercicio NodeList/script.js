// selecionar e interra sobre uma coleção de elementos 

const paragrafo = document.querySelector(".paragrafo")
const ps = paragrafo.querySelectorAll("p")

// estilo compu. do css do body
const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor;

for(let p of ps){
    console.log(p)
}