// especifico para objetos interraveis

const nome = ['Maria', 'Maria']
// cada letra caso nao seja object ou array
for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}
console.log('#######')

// outro jeito para fazer
for(let j in nome){
    console.log(nome[j])
}
console.log('#######')

// outro jeito, agora nao vem o indice e sim o valor
for(let valor of nome){
    console.log(valor)
}
console.log('#######')

/*
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
});
*/
