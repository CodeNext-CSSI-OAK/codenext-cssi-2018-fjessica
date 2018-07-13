// Author Jessica Franco'

// function makeSandwich() {
//   console.log('this is my function');
// }
// makeSandwich();
// _____________________________________________________________________________

function subtract(num1, num2) {
  console.log(num1, num2);
  return num1 - num2;
}
//let result = subtract(6, 4);
//console.log('The result is:' + subtract(6,4));  // Both lines 12 & 13 combined

function absoluteDifference(num1, num2) {
  if (num2 > num1) {
    return num2 - num1;
  } else {
  return num1 - num2;
  }
}

console.log(absoluteDifference(6, 4));
console.log(absoluteDifference(4, 6));


// _____________________________________________________________________________
