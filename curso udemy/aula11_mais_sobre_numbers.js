let num1 = 1;
let num2 = 2.5;


console.log(num1 + num2);
// virar uma string
console.log(num1.toString() + num2); // concatenação
// para alterar o valor da variavel
//num1 = num1.toString(); 
console.log(typeof num1); // continua como number
console.log(num1.toString(2)) //representação binaria
//console.log(num1.toFixed(2)); // quantas casas decimais eu quero
console.log(Number.isInteger(num1)); //se é um intero ou não

let temp = num1 * 'Ola';
console.log(temp);
console.log(Number.isNaN(temp)); //volta vdd pois não é um inteiro muito menos um number

// IEEE 754-2008 padrão para precisão com casas decimais 
let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4; 

num3 = parseFloat(num3.toFixed(2)); //funcionando de maneira adequada
console.log(num3);
console.log(num3);

num4 = Number(num4.toFixed(2)); //resolve impressisão, mostrando duas casaa decimais