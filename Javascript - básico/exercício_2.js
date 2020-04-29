const nome = 'Silva';
const idade = '22';
const altura = 1.76;
const peso = 85;

let IMC = peso / (altura * altura);
let anoNascimento = (2020 - idade);

console.log(IMC);
console.log(anoNascimento)

console.log(nome, 'nasceu em', anoNascimento, 'tendo assim', idade, 'anos, pesa', peso, 'kg e tem', altura, 'de altura e seu IMC é de',
 IMC);

