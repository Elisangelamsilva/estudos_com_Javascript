// capturar evento de submit do formulário 
const form = document.querySelector('#form');

form.addEventListener("submit", function (event){
    event.preventDefault();

});

// função para adicionar algo nos resultados
function setResultado (msg){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = msg;
}