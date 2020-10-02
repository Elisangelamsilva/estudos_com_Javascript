let num = [5, 8, 9, 3]

num.push(1)  // tem que vim antes de por em ordem
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num} e tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)


/*
// Acrecentar um valor 
num[3] = 6 //adicionar o valor 6 no índice 3
num.push() //adicionar sem indicar índice
num.length // saber o comprimento, é um atributo
num.sort() //pegar todos os elementos e colocar em ordem crescente
num.indexOf() // buscar um índice dentro da array
*/