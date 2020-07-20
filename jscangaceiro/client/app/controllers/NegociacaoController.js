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

        let negociacao = new Negociacao(
            this._inputData.value,this._inputQuantidade,this._inputValor
        )

        }
}