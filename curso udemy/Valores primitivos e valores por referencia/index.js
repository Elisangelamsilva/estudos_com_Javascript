/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - valores cópiados
*/


let nome = 'Maria';
console.log(nome[0], nome);
//

let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

// Referencia (mutável) - array, object, function -  passados por refêrencia, apontando para o mesmo lugar na mémoria

let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

// object
const f = {
    nome: 'Maria',
    sobrenome: 'Silva'
};
const e = {...f};

f.nome = 'Elisangela';
console.log(e);
