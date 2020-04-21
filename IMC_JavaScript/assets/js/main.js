// capturar evento de submit do formulário 
const form = document.querySelector('#form');

form.addEventListener("submit", function (event){
    event.preventDefault();

});

// função para adicionar HTML dentro da div resultados
function setResultado (msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ""; //div limpa

    //criar um paragrafo e inseir no resultado
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado'); // criação de uma classe
    p.innerHTML = "Qualquer coisa";
    resultado.appendChild(p); // elemento para ser adc na div
}