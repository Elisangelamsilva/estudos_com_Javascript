// For in -> le os indices ou chaves do objeto (indice =  array, vetor, chaves = objeto)

const frutas = ["Pera", "Maça", 'Üva']

for (let indice in frutas){
    console.log(frutas[indice])
}// lendo os indices do array

//
const pessoa ={
    nome: 'Maria',
    sobrenome: 'Silva',
}
for (let key in pessoa){
    console.log(key, pessoa[key]) // melhor metodo
}

// meios de acessar uma variavel dentro do object
console.log(pessoa.nome)
console.log(pessoa['nome']) //pode acessar quando nao se sabe a propriedade vai se pegar
const chaves = 'nome'
console.log(pessoa[chaves])