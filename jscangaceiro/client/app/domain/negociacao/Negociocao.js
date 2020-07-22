class Negociacao{
    //definição das propriedades da classe
    constructor(_data,_quantidade,_valor){
        Object.assign(this, { _quantidade, _valor });
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }

    obtemVolume(){
        return this._quantidade * this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
        }
    
    get data() {
        return new Date(this._data.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }

    //encapsula o array de negociações. Acesso apenas através dos métodos dessa classe. Criaremos um modelo de negociações.
    constructor(){
        this._negociacoes = [];
    }

    //por usar o prefixo _ a lista só pode acessar pelo método da própria classe. Por isso utilizar o método adiciona, que receberá uma negociação. 
    adiciona(negociacao){
        this.-_negociacoes.push(negociacao)
    }

    //será chamado pela instancia de Negociacoe, retornando uma array interno encapsulado pela classe para leitura
    paraArray(){
        return this._negociacoes;
    }
}