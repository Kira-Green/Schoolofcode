const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let computerMove = "paper";
let playerMove = 'scissors';

if (computerMove === ROCK) {
    if (playerMove === SCISSORS) {
        console.log("computer");
    } else if (playerMove === PAPER) {
        console.log("player");
    } else console.log("draw");
} else if (computerMove === SCISSORS) {
    if (playerMove === PAPER) {
        console.log("computer");
    } else if (playerMove === ROCK) {
        console.log("player");
    } else console.log("draw");
} else if (computerMove === PAPER) {
    if (playerMove === ROCK) {
        console.log("computer");
    } else if (playerMove === SCISSORS) {
        console.log("player");
    } else console.log("draw");
}