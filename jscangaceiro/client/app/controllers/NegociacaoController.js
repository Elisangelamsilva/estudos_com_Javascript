class NegociacaoController{

    //Sendo assim, a busca pelos elementos do DOM só serão realizadas uma única vez no constructor, e não mais a cada chamada do método adicionar().
    constructor() {
        // buscando os elementos
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView();

    }

    //será chamado toda vez que o usuário submeter o formulário clicando no botão "Incluir"
    adiciona(event) {
        // cancelando a submissão do formulário
        event.preventDefault();
        // imprime a lista com o novo elemento
        console.log(this._negociacoes.paraArray());
        this._limpaFormulario();

    }

    
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }

    _criaNegociacao() {
        // retorna uma instância de negociação
        return new Negociacao(
        DateConverter.paraData(this._inputData.value),
        parseInt(this._inputQuantidade.value),
        parseFloat(this._inputValor.value)
        );
    }
}

