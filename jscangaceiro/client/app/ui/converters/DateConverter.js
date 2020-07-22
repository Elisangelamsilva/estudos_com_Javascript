class DateConverter{
   static paraTexto(data) {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }

    paraData(texto) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.get
    FullYear()}`;
    }

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

}