class NegociacaoController{

    //Sendo assim, a busca pelos elementos do DOM só serão realizadas uma única vez no constructor, e não mais a cada chamada do método adicionar().
    constructor() {
        // buscando os elementos
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();

    }

    //será chamado toda vez que o usuário submeter o formulário clicando no botão "Incluir"
    adiciona(event) {
        // cancelando a submissão do formulário
        event.preventDefault();
        //chamando o método estático
        let negociacao = new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
            // inclui a negociação
        this._negociacoes.adiciona(negociacao);
        // imprime a lista com o novo elemento
        console.log(this._negociacoes.paraArray());
}

