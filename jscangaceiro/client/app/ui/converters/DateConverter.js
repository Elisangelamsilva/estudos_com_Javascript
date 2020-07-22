class DateConverter{
    static paraTexto(data) {
           return `${data.getDate()}/${data.getMonth()+1}/${data.get
    FullYear()}`;
    }

    static paraData(texto) {
        //só será executada se o if for false
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

}