//é enviado um argumento como parametro
function funacao01(){
    console.log("Oie");
}
funacao01("Valor");
//quando é definido com a palavra function é disponivel uma ariavel chamada arguments sustenta todos os argumentos enviado e "mostra-los". Pode acessar por indices arguments[0]
function funacao02(){
    console.log(arguments[3]);
}
funacao02("Valor", 1,2,3,4,5,6,7,8,9,0);

//funcao para somar todo os valores recebidos
function funacao03(){
    let total = 0
    for(let argumento of arguments){
        total += argumento
    }
}
funacao03(1,2,3,4,5,6,7,8,9,0);

//
function funcao04(a,b){
    b = b || 0;
    console.log(a + b);
}
funcao04(2);
//jeito moderno para resolver esse problema
function funcao04(a,b=2 ){
    console.log(a + b);
}
funcao04(2);