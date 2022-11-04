var prompt = require('prompt-sync')();

let input = prompt("Enter any String : ");
let output = null;

output = input.replace(/ /g, '');

console.log("Input String is = " + input);
console.log("Output String is = " + output);
