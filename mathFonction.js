const prompt = require('prompt-sync')();
console.log(`=== Menu ===
    1. Somme
    2. Différence
    3. Produit
    4. Division
    5. Quitter`)
    
let operation = Number(prompt("Choisis une option : "))




function somme(){
    let a = Number(prompt("Choisis un nombre a : "));
    let b = Number(prompt("Choisis un nombre b : "));
    return console.log(`La somme est : ${a + b} `);
}
function difference(){
    let a = Number(prompt("Choisis un nombre a : "));
    let b = Number(prompt("Choisis un nombre b : "));
    return console.log(`La différence est : ${a - b} `);
}
function produit(){
    let a = Number(prompt("Choisis un nombre a : "));
    let b = Number(prompt("Choisis un nombre b : "));
    return console.log(`Le produit est : ${a * b} `);
}
function division(){
    let a = Number(prompt("Choisis un nombre a : "));
    let b = Number(prompt("Choisis un nombre b : "));
    return console.log(`La Division est : ${a / b} `);
}

switch (operation) {
    case 1:
        somme();
        break;
    case 2:
        difference();
        break;
    case 3:
        produit();
        break;
    case 4:
        division();
        break;
    case 5:
        console.log("Vous avez quitter")
        break;
    default:
        console.log("Choix invalid");
}












