// Author: Jessica Franco
let readline = require('readline-sync');

console.log("****************************************************************");

let centsAsAString = readline.question('Enter cents ');
let cents = Number(centsAsAString);

let quarters = Math.floor(cents / 25);
cents = cents % 25;
let dimes = Math.floor(cents/10);
cents = cents % 10;
let nickels = Math.floor(cents/5);
cents = cents % 5;
let pennies = Math.floor(cents);

console.log( quarters + " quarters");
console.log( dimes + " dimes");
console.log( nickels + " nickels");
console.log( pennies + " pennies");

console.log("BLOop BleEp! i Hope yOU aRE SATiSfieD wITh thiS SerVicE!");
console.log("****************************************************************");
