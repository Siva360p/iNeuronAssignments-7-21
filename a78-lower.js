var prompt = require('prompt-sync')();

let input = prompt("Enter any String : ");

let c = input.charAt(0);

if(c == c.toLowerCase()){
    console.log("First character of the String is Lower case");
}
else{
    console.log("First character of the String is Upper case");
}

//Additional conditions for alphabet, number and symbol can be implemented.