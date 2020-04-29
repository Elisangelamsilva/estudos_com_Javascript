const array = [1,2,3];
array.push(4); // colocar mais um elemento na array

// array [], objeto literal {}
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 44,

    fala(){
        //console.log('Olá mundo!')
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome)
//console.log(pessoa2)
pessoa2.fala();
pessoa2.incrementaIdade();

//  ESSA OPÇÃO PODE SER FEITA COM FUNÇÃO
function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome, 
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaPessoa('Luiz', 'Maria', 25); // argumento é o valor que é passado para o paramentro
console.log(pessoa3.nome, pessoa3.sobrenome);