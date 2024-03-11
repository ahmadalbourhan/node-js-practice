const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;
while (true) {
  const playerChoice = prompt(
    "Enter rock, paper of scissors (or q for quit): "
  );
  if (playerChoice.toLowerCase() === "q") {
    break;
  }

  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    console.log("Please Enter a valid choice");
    continue;
  }

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * 2);
  const computerChoice = choices[randomIndex];

  console.log("The Computer Choise: ", computerChoice);

  if (computerChoice === playerChoice) {
    console.log("Draw!");
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "sissors") ||
    (playerChoice === "sissors" && computerChoice === "paper")
  ) {
    console.log("You Won!");
    wins++;
  } else {
    console.log("You Lost!");
    losses++;
  }
}

console.log("Wins: ", wins, "Losses: ", losses, "Ties: ", ties);
