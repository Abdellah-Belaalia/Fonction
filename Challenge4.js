const prompt = require('prompt-sync')();

let a = Number(prompt("Entrez le premier nomber :"))
let b = Number(prompt("Entrez le premier nomber :"))

function comparaison(a ,b){
    if (a > b) 
        return console.log(`Le plus petit nombre est ${b}`)
    else
        return console.log(`Le plus petit nombre est ${a}`)
}

comparaison (a, b)

