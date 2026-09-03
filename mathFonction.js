const prompt = require('prompt-sync')();
console.log(`=== Menu ===
    1. Somme
    2. Différence
    3. Produit
    4. Division
    5. Quitter`)
    
let operation = Number(prompt("Choisis une option : "))

let a = Number(prompt("Choisis un nombre a : "));
let b = Number(prompt("Choisis un nombre b : "));

function somme(a,b){
    return console.log(`La somme est : ${a + b} `);
}
function difference(a,b){
    return console.log(`La différence est : ${a - b} `);
}
function produit(a,b){
    return console.log(`Le produit est : ${a * b} `);
}
function division(a,b){
    return console.log(`La Division est : ${a / b} `);
}

switch (operation) {
    case 1:
        somme(a,b);
        break;
    case 2:
        difference(a,b);
        break;
    case 3:
        produit(a,b);
        break;
    case 4:
        division(a,b);
        break;
    case 5:
        console.log("Vous avez quitter")
        break;
    default:
        console.log("Choix invalid");
}












