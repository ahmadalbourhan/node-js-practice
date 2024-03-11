const prompt = require("prompt-sync")();

const answer = prompt("Would you Like to play(y/n)? ");

if (answer.toLowerCase() === "y") {
  const answer2 = prompt(
    "Would you like to go left or go rigth (left/rigth)? "
  );
  if (answer2 === "left") {
    console.log("Oops, you go left and fall of a bridge! you Lost!");
  } else {
    //right
    console.log("Nice, you go rigth and approach a bridge...");
    const answer3 = prompt(
      "Would you like to cross the bridge, or turn around and find another way (cross/turn)? "
    );

    if (answer3 === "cross") {
      console.log("you cross the bridge and reach the end of the game!");
    } else {
      console.log(
        "You turn back and trip on a log and hurt your leg. You lose."
      );
    }
  }
} else {
  console.log("That's too Bad!");
}
