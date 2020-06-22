// function saudacao(nome){
//     return `Bom dia ${nome}!` ;
// }

// const variavel = saudacao("Maria");
// console.log(variavel);

//
// function soma(x = 1, y = 1){
//     const resultado = x + y;
//     return resultado;
// }
// console.log(soma(2, 2));
// console.log(soma('Maria ', 'Silva'));
// console.log(soma());
// console.log(soma(2));

// UMA FUNCTION DENTRO DE UMA VARIAVEL, CRIANDO UMA FUNCTION ANONIMINA
// const raiz = function (n) {
//     return n ** 0.5;
// };

// console.log(raiz(9));

// arrow function
const raiz = n =>  n ** 0.5;

console.log(raiz(15));