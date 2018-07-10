// Author: Jessica Franco

let readline = require('readline-sync');

//let age = readline.question('What is your age?');

let ageAsAString = readline.question('What is your age?');
let age = Number(ageAsAString);

console.log('You are ' + age + ' years old');
console.log('In 2028 you will be ' + (age + 10) + ' years old');
