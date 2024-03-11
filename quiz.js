const prompt = require("prompt-sync")();
console.log("Welcome to the computer Hardwar Quiz!");
let correct_answer = 0;
const answer1 = prompt("What is the brain of PC? ");
const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
  console.log("You got it Correct!");
  correct_answer++;
} else {
  console.log("You got it wrong...");
}

const answer2 = prompt("what is better a 390ti or a 4060? ");
const correct_answer2 = "390ti";

if (answer2.toLowerCase() === correct_answer2) {
  console.log("You got it Correct!");
  correct_answer++;
} else {
  console.log("You got it wrong...");
}
const answer3 = prompt("what is the recommonded RAM? ");
const correct_answer3 = "16g ram";

if (answer3.toLowerCase() === correct_answer3) {
  console.log("You got it Correct!");
  correct_answer++;
} else {
  console.log("You got it wrong...");
}

console.log("You got", correct_answer, "questions corrects!");
