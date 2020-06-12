let num = [5, 8, 9, 3, 7, 3, 5]
for(var i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// outro modo de fazer - simplificado - só funciona para array e object

 for(var i in num){
     console.log(`A posição ${i} tem o valor ${num[i]}`)
 }