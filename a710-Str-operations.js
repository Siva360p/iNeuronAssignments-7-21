var prompt = require('prompt-sync')();

console.log("Enter any String to perform below operations : ");
console.log("a. Convert the String into upper case.");
console.log("b. Convert only the first character to uppercase.");
console.log("c. Convert the String into lower case.");
console.log("d. Break the string into two halves and swap them.");
console.log("e. Count the repeating characters.");
console.log("f. Reverse the string.");

let input = prompt("Enter any String : ");

console.log("a. "+input.toUpperCase());
console.log("b. "+input.charAt(0).toUpperCase() + input.slice(1));
console.log("c. "+input.toLowerCase());
console.log("d. "+input.substring(input.length/2)+input.substring(0,input.length/2));
let str = input;
const repeatLetter = (str = '') => {
    const strArr = str.split("").sort();
    let count = 1;
    let i = 1;
    let res = '';
    while (i < strArr.length) {
       if (strArr[i - 1] === strArr[i]) { count++; }
       else {
        if(count>1){ res += count + strArr[i - 1];}
          count = 1;
       };
       i++;
    };
    if(count>1){
    res += count + strArr[i - 1];
    }
    return res;
 };
 console.log("e. "+repeatLetter(str));

 let revstr = '';
for (i=input.length ; i>=0 ; i--){
    revstr = revstr.concat(input.charAt(i));
}
console.log("f. "+revstr);