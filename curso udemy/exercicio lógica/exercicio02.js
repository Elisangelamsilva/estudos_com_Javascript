/**
 * Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem.
 */

 function ePaisagem(largura, altura){
     return largura > altura ? true : false;
     // já vai retorna por isso poderia usar return largura > altura;
 }

 console.log(ePaisagem(1920, 1080))

 // converter para array function

 const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080))