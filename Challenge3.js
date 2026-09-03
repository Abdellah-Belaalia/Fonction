const prompt = require("prompt-sync")();

let a = Number(prompt("Entrez un nombre a :"));
let b = Number(prompt("Entrez un nombre b :"));

function comparaison(a ,b){
    if (a > b)
        return console.log(`Le plus grand nombre est : ${a}`) 
    else 
        return console.log(`Le plus grand nombre est : ${b}`) 
}

comparaison(a,b)