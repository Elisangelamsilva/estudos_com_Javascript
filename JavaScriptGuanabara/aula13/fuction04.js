// 5! = 5 x 4 x .... 
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

// outro jeito de fazer 

function fatori(n){
    if(n ===1){
        return 1
    }else{
        return n * fatori(n-1)
    }
}