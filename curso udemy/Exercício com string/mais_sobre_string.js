// String são indexadas/interaveis
let umaString = "Um \"texto\"";

console.log(umaString);
console.log(umaString[4]);
console.log(umaString.charAt(6)); //
console.log(umaString.charCodeAt(6)); //qual código tá nessa posição
console.log(umaString.concat(' em', ' um', ' lindo dia.')); //concatenar
console.log(umaString + 'em um lindo dia.');
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o')); // busca de trás para frente
console.log(umaString.search(/x/)); //encontrar a letra
console.log(umaString.replace('Um', 'Outro')); // Substituir letra
console.log(umaString.replace(/t/g, '#'));
console.log(umaString.length); //tamanho
console.log(umaString.slice(4, 9)); //inicio e fim do que eu quero do texto 
console.log(umaString.split(' ', 3));
console.log(umaString.slice(4, 9));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());