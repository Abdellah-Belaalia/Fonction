var prompt = require('prompt-sync')();

let n = Number(prompt("Entrez un entier positif pour la factorielle :"))

function factorielle(n){
  let resultat = 1;
  for(let i = 1; i <= n; i++){
   resultat *= i
    }
   return resultat
  }
let resultat = factorielle(n)

console.log(`Le nombre factorielle de ${n}! est = ${resultat}`);
