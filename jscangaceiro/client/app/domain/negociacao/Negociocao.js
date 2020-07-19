class Negociacao{
    //definição das propriedades da classe
    constructor(data,quantidade,valor){
        this.data = data; //data atual
        this.quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume(){
        return this.quantidade * this.valor;
    }
}