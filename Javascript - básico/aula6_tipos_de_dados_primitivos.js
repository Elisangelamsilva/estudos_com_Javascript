// String 
const nome = 'Maria';
const nome1 = "Maria";
const nome2 = `Maria`;

// number
const num1 = 10;
const num2 = 10.52;

// undefined = indefinido, local nenhum na memória. Definido pela linguagem. 
let nomeAluno;

// null = nulo -> não aponta para lugar nenhum na memória. Utiliza para desconfigurar uma variavél.
let sobrenomeAluno = null;

// boolean -> true or false
const aprovado = true;

//TIPO DE VARIAVÉIS

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

// Valores por referencia
const a = [1, 2];
const b = a;

console.log(a, b);