// while classico

// exemplo 01
let i = 0

while(i <= 10){
    console.log(i)
    i++
}

// exemplo 02
const nome = 'Maria'
let a = 0

while(a < nome.length){
    console.log(nome[i])
    a++
}

// função que gera numeros aleatorios

function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max); // vai gerar um número aleatorio entre 0 e 50

// achar um número entre os números aleatorios/ fica buscando até achar o número 10
while(rand !== 10){
    rand = random(min, max) //atualizar o valor da váriavel a cada interação do laço
    console.log(rand)
}
