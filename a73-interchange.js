var prompt = require('prompt-sync')();

let input = prompt("Enter any 2 words : ");
let c = [];
let output = null;

c = input.split(/ /);

if (c.length == 2){
output = c[1] + " " + c[0];

console.log("Input = " + input);
console.log("Output = " + output);
}
else{
    console.log("Please enter exactly 2 words....");
}