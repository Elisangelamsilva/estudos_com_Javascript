class Negociacao{
    //definição das propriedades da classe
    constructor(data,quantidade,valor){
        Object.assign(this, { _data: new Date(data.getTime()), _quantidade: quantidade, _valor: valor});

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
}