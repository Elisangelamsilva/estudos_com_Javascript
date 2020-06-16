const elementos = [
    {tag: "p", texto: "Frase 1"}, 
    {tag: "div", texto: "Frase 2"},
    {tag: "footer", texto: "Frase 3"},
    {tag: "section", texto: "Frase4"},
];

const container = document.querySelector(".container");
const div = document.createElement("div") // cria uma div que contém todos os elementos

// percore o array de objetos
for(let i = 0; i < elementos.length; i++){
    // capturar uma tag e o texto utilizando a destreturizaçao de objetos
    let { tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag) // cria os elementos a cada interaçao do laço
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada) // add as tags dentro da div
}

container.appendChild(div); //add a div na classe container