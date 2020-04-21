// capturar evento de submit do formulário 
const form = document.querySelector('#form');

form.addEventListener("submit", function (event){
    event.preventDefault();
    const inputPeso = form.target.querySelector('#peso'); //Qual elemento que tá recebendo o evento
    const inputAltura = form.target.querySelector('#altura');
});

// função especifica para criação de paragrafos 
function criaP () {
      //criar um paragrafo e inseir no resultado
      const p = document.createElement('p');
     return p;
}

// função para adicionar HTML dentro da div resultados
function setResultado (msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ""; //div limpa

    const p = criaP();
}