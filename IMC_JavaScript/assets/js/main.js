// capturar evento de submit do formulário 
const form = document.querySelector('#form');

form.addEventListener("submit", function (event){
    event.preventDefault();
    const inputPeso = form.target.querySelector('#peso'); //Qual elemento que tá recebendo o evento
    const inputAltura = form.target.querySelector('#altura');

    // conversão para Number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Altura e peso são válidos?
    if (!peso) {
        setResultado("Peso inválido", false);
        return;
    }
    if (!altura) {
        setResultado("Altura inválido", false);
        return;
    }

    // calcular o IMC 
    const imc = getImc(peso, altura);

});

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função especifica para criação de paragrafos 
function criaP () {
      //criar um paragrafo e inseir no resultado
      const p = document.createElement('p');
     return p;
}

// função para adicionar HTML dentro da div resultados
function setResultado (msg, isValid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = ""; //div limpa

    const p = criaP();
    resultado.appendChild(p);
}