// Aritmétricos 
// + Adição/ Concanetação(unir dois valores)
// -
// /
// * 
// & resto da divisão
// ** potrnciação
// ++ incrementa

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);
const num3 = '5';
const num4 = 10;
console.log(num3 + num4); // concatenação

console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2); //potenciação
console.log(num1 - num2);
console.log(num1 & num2);
console.log(num1 + num2 + num2 - num1);
console.log(num1 + num2 * num1);
console.log( (num1 + num2) * num1); // primeiro as contas em parenteses

let contador = 1; // não pode usar em constantes 
contador++;
contador++;
++contador;
console.log(contador);
console.log(contador++); // incrementou o valor 
console.log(contador); // mostrou 
console.log(--contador); //decremento


//atribuição
const passo = 4;
let cont = 1;
cont = cont + passo;
console.log(cont);

// realizar uma atribuiçaõ e soma 
cont += passo; // é a mesma coisa de cont = cont +50;
console.log(cont);

// Operadores de atribuição
let viva = 2;
viva **= 10;
console.log(viva);