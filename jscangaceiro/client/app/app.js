//Ponto de entrada da nossa aplicação, aquele que faz inicialização de todos os objetos necessários para nossa aplicação.

let controller = new NegociacaoController();

    document.querySelector('.form')
    document.addEventListener('submit',controller.adiciona.bind(controller));