var prompt = require('prompt-sync')();

let input = prompt("Enter any String : ");
let output = null;

if(input.length > 4){
    output = input.slice(0,4) + "...";
}
else{
    output = input;
}

console.log("Input String is = " + input);
console.log("Output String is = " + output);
