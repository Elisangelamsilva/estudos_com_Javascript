// Não se pode criar constantes com palavras resevadas 
// Constantes precisam ter nomes significativos 
// Não pode começar com número
// Não podem conter espaços ou traços
// Não podemos modificar o valor de uma constantes
// Não utilize var, utilize const. 
// Utilizamos cameCase
// Case-sensitive
// se for para modificar utilizar let

const nome = 'Maria';
console.log(nome);

// pegar o valor de uma constante atribuir em outra constante (pode ser entre variáveis)
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoSomado = resultadoDuplicado + 5;

console.log(resultadoSomado)
console.log(resultado);
console.log(resultadoDuplicado);

// para saber qual é o tipo de variável usado 
console.log(typeof primeiroNumero);
console.log(typeof nome)