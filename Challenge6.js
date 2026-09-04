var prompt = require('prompt-sync')();

let n = Number(prompt("Entrez un entier n :"))

function fibonacci(n){
    let resultat = [0, 1];
    for(let i = 2; i < n; i++){
        resultat[i] = resultat[i - 1] + resultat[i - 2];
    }
    let res = Number(resultat[n - 1] + resultat[n - 2])
    return res;
}
let suiteFibonacci = fibonacci(n)
console.log(`Le terme de Fobonacci est : ${suiteFibonacci}`);