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

    //Lógica para associar o resultado a uma mensagem
    function getNivelImc (imc){
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // pegar as mensagens

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
    }

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