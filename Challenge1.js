const prompt = require('prompt-sync')();
function somme(a, b){
return a + b;
}
let a = Number(prompt("Choisis un nombre a : "));
let b = Number(prompt("Choisis un nombre b : "));
console.log(`La somme est : ${a + b} `);