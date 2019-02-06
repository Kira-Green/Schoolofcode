// another comment
console.log("hi");
const title = "Please make your move";
var computerScore = 0;
var playerScore = 0;
var drawScore = 0;

for (i = 0; i < 5; i++) {
	var playerMove = prompt(title, "rock, paper or scissors");
	// var playerMove = "scissors";
	// var computerMove = "rock";

	// function getRandomInt(min, max) {
	// 	return Math.floor(Math.random() * (max - min + 1)) + min;
	// }

	// var computerMN = getRandomInt(0, 2);
	// console.log(computerMN);
	// if (computerMN === 0) {
	// 	var computerMove = "rock";
	// } else if (computerMN === 1) {
	// 	var computerMove = "paper";
	// } else if (computerMN === 2) {
	// 	var computerMove = "scissors";
	// } else {
	// }

	// const choices = ["rock", "paper", "scissors"]

	// function grtcomputermove (random)  - random number 0/1/2

	// computerMove === choices[random]

	const moves = ["rock", "paper", "scissors"];
	var computerMove = moves[Math.floor(Math.random() * moves.length)];

	console.log("your move was " + playerMove);
	console.log(`computer move was ${computerMove}`);

	function compareMoves() {
		if (playerMove === computerMove) {
			alert(`It is a draw`);
			drawScore = drawScore + 1;
		} else if (playerMove === `scissors`) {
			if (computerMove === `rock`) {
				alert(`computer wins`);
				computerScore = computerScore + 1;
			} else {
				alert(`player wins`);
				playerScore = playerScore + 1;
			}
		} else if (playerMove === `rock`) {
			if (computerMove === `paper`) {
				alert(`computer wins`);
				computerScore = computerScore + 1;
			} else {
				alert(`player wins`);
				playerScore = playerScore + 1;
			}
		} else if (playerMove === `paper`) {
			if (computerMove === `scissors`) {
				alert(`computer wins`);
				computerScore = computerScore + 1;
			} else {
				alert(`player wins`);
				playerScore = playerScore + 1;
			}
		} else {
			alert(`That is not a move`);
		}
	}

	compareMoves();
	console.log("computer: " + computerScore);
	console.log("player: " + playerScore);
	console.log("Draws: " + drawScore);
}
alert("Game Over");
alert("you won " + playerScore + " out of 5");

// if (computerMove === "rock") {
// if (playerMove === "paper") {

//             else if (playerMove === "scissors") {
//         console.log("computer wins");
//     }
//             else if (playerMove === "rock") {
//         console.log("draw");
//     }
//             else  {
//         console.log("incorrect input");
//     }
// }

// if (computerMove === "paper") {
//     if (playerMove === "paper") {
//         console.log("draw");
//     }
//     else if (playerMove === "scissors") {
//         console.log("player wins");
//     }
//     else if (playerMove === "rock") {
//         console.log("computer wins");
//     }
//     else {
//         console.log("incorrect input");
//     }
// }

// if (computerMove === "scissors") {
//     if (playerMove === "paper") {
//         console.log("computer wins");
//     }
//     else if (playerMove === "scissors") {
//         console.log("draw");
//     }
//     else if (playerMove === "rock") {
//         console.log("player wns");
//     }
//     else {
//         console.log("incorrect input");
//     }
// }
