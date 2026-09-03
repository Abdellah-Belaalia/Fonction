const prompt = require("prompt-sync")();
function produit(a, b){
    return a * b;
}
let a = Number(prompt(`Entrez un nomber a :`))
let b = Number(prompt(`Entrez un nomber b :`))

console.log(`Le produit de a et b equal ${produit(a,b)}`)
