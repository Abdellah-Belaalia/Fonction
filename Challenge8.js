const prompt = require("prompt-sync")();
let n = parseInt(prompt(`Entrez le nombre n : `))
function pariteVerify(n){
if(n % 2 !== 0) {
  console.log('False');
} 
else {
  console.log('True');
}
return pariteVerify;
}
pariteVerify(n)