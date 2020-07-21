class NegociacaoController{

    //Sendo assim, a busca pelos elementos do DOM só serão realizadas uma única vez no constructor, e não mais a cada chamada do método adicionar().
    constructor() {
        // buscando os elementos
        this._inputData = document.querySelector('#data').value;
        this._inputQuantidade = Number(document.querySelector('#quantidade').value);
        this._inputValor = Number(document.querySelector("#valor").value);

    }

    //será chamado toda vez que o usuário submeter o formulário clicando no botão "Incluir"
    adiciona(event) {
        // cancelando a submissão do formulário
        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map(function(item,indice) {
                if(indice == 1) {
                    return item - 1;
                }
                    return item;
            })
        
        )};

}