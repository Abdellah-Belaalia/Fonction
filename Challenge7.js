var prompt = require('prompt-sync')();

let n =(prompt("Entrez un entier positif n : "))
function compteRebours(n){
    console.log(n);
    n--
    if(n<0){
        return;
    }
    return compteRebours(n)
}
compteRebours(n)

