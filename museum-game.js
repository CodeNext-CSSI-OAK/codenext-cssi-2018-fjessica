// Author: Jessica Franco
let readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                         Tech Art                                ");
console.log("                  A game by Jessica Franco                       ");
console.log("*****************************************************************");
console.log("");


console.log("It doesn't matter how you got there, but you did and it's strange.");
console.log("It's strange to be feel everything artist demonstrate on a white canvas");
console.log("or sculpter. You stand there staring at one piece in particular. It");
console.log("reminds you of the past, but not yours...The white of the room becomes");
console.log("myst as it wraps around you. A hand extends from the painting, 'Come in'");
console.log("");

let enterArt = readline.question("Will you follow? (yes or no) ");
if(enterArt == "y" || enterArt == "yes") {
  console.log("You are sucked in through thousands of colors and taken by wind. The");
  console.log("tunnel drops you off in what seems to be a bridge or dock.");
  // console.log("What do you feel?");
  console.log("");

   let feelings = readline.question("What do you feel? a.Scared b.Amazed  ");
   if(feelings === "a") {
     console.log("Your surroundings turn three dimensional. In front of you a person");
     console.log("turns around to scream.");
     console.log("");
    let paintWork = readline.question ("What paint work is this?  a.Screaming Head by Guy Denning  b.The Scream by Edvard Munch   c.Self-Portrait of Francis Bacon")
     console.log("");
     if(paintWork === "b"){
       console.log("'Correct'. You are taken into town where you sit in a paint");
       console.log("studio. A woman model sits looking at the artist. It is only her");
       console.log("on the canvas.");
     }


   if(feelings === "b") {
     console.log("The sky becomes dark and multiple colors of blue swirl around bright");
     console.log("light. You can see a blury city ahead.");
   }
        let strangeHand = readline.question("What paint work is this? a.   b.  c.");
          if(strangeHand == "n" || strangeHand == "no") {
          console.log("You force your way out and go home cursed");
      }

} else  {
  console.log("You never find out where it would lead");
}
} else {
  console.log("When you leave, you hear your name ");
}
console.log("You Escaped the horror but Died! :)");
