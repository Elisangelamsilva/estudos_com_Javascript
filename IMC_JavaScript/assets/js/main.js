// capturar evento de submit do formulário 
const form = document.querySelector('#form');

form.addEventListener("submit", function (event){
    event.preventDefault();

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