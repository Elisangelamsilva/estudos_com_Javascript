class NegociacaoController{
    //será chamado toda vez que o usuário submeter o formulário clicando no botão "Incluir"
    adiciona(event) {
        // cancelando a submissão do formulário
        event.preventDefault();

        // buscando os elementos
        let inputData = document.querySelector('#data');
        let inputQuantidade = Number(document.querySelector('#quantidade').value);
        let inputValor = Number(document.querySelector("#valor").value);

        }
}