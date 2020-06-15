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

let rand = random(0, 50);
