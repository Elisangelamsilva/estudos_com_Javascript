const numeros = [1,2,3,4,5,6,7,8,9]

for(let numero of numeros){

    if(numero === 2){
        continue; // vai pular o 2
    }

    if(numero === 5){
        console.log("Pulei número 5")
        continue;
    }

    console.log(numero)

    // procurando um número em uma lista
    if(numero === 7){
        console.log("7 encontrado, saindo...")
        break;
    }

  
}

// continue - pula para o próximo laço
//break - finaliza 