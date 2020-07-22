class NegociacaoController{

    //Sendo assim, a busca pelos elementos do DOM só serão realizadas uma única vez no constructor, e não mais a cada chamada do método adicionar().
    constructor() {
        // buscando os elementos
        this._inputData = document.querySelector('#data').value;
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector("#valor");

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
        let diaMesAno = converter.paraTexto(negociacao.data);
        console.log(diaMesAno);
        }
}

