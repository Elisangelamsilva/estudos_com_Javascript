// utilizando com objetos

const pessoa = {
    nome: "Maria",
    sobrenome: "Silva",
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

// com o of nao executa pois o objeto pessoa nao é um interable
// for classico - geralmente com interáveis
// array ou string)
// for in - retorna o indice ou chaves (string, array ou objetos)
// for of - retorna o valor em si (interáveis, array ou strings)