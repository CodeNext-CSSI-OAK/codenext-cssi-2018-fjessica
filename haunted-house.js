// Author: Jessica Franco
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by Jessica Franco");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");

let enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log("There are no lights turned on and the place looks abandoned for ages. You stand in the middle of the what seems to be the living room and see an open door.");
   let enterDoor = readline.question("Will you peak in the room? (yes or no) ");
   if( enterDoor == "y" || enterDoor == "yes") {
     console.log("A sudden light begins to flicker. A hand reaches for you across the room.");
     let strangeHand = readline.question("Will you let it pull way? (yes or no)");
      if(strangeHand == "n" || strangeHand == "no") {
        console.log("You force your way out and go home cursed");
      }

} else  {
  console.log("You never find out what was inside");
}
} else {
  console.log("When you leave, you hear your name ");
}
console.log("You Escaped the horror but Died! :)");
}
