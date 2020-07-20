class NegociacaoController{
    //será chamado toda vez que o usuário submeter o formulário clicando no botão "Incluir"
    adiciona(event) {
        // cancelando a submissão do formulário
        event.preventDefault();
        alert('Chamei ação no controller');
        }
}