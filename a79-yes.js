var prompt = require('prompt-sync')();

let input = prompt("Enter your input to continue (yes/no): ");

const pattern = /[y | yes]/i;

if(pattern.test(input)){
    console.log("You have entered Yes");
}
else{
    console.log("You have entered No");
}