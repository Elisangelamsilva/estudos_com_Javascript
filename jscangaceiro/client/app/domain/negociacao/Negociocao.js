class Negociacao{
    //definição das propriedades da classe
    constructor(data,quantidade,valor){
        this._data = data; //data atual
        this._quantidade = quantidade;
        this._valor = valor;
    }

    obtemVolume(){
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._quantidade;
        }
        
    getValor() {
        return this._valor;
    }
}