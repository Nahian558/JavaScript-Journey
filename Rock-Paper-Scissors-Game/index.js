const guesses = ["Rock", "Paper", "Scissors"];

let result = document.getElementById("result");
let yTurn = document.getElementById("yTurn");
let cTurn = document.getElementById("cTurn");

let yourScore = document.getElementById("yourScore");
yourScore.classList.add("greenText");

let computerScore = document.getElementById("computerScore");
computerScore.classList.add("redText");

let yourPoint = 0;
let computerPoint = 0;

function playGame(guess) {
  let computerGuess = guesses[Math.floor(Math.random() * 3)];

  yTurn.textContent = `Your Turn: ${guess}`;
  cTurn.textContent = `Computer's Turn: ${computerGuess}`;

  if (guess === computerGuess) {
    result.textContent = `It's a Tie!`;
  } else {
    switch (computerGuess) {
      case "Rock":
        result.textContent = guess === "Paper" ? "You Win!" : "You Lose!";
        break;
      case "Paper":
        result.textContent = guess === "Scissors" ? "You Win!" : "You Lose!";
        break;
      case "Scissors":
        result.textContent = guess === "Rock" ? "You Win!" : "You Lose!";
        break;
    }
  }

  result.classList.remove("greenText", "redText");

  switch (result.textContent) {
    case "You Win!":
      yourPoint++;
      yourScore.textContent = yourPoint;
      result.classList.add("greenText");
      break;
    case "You Lose!":
      computerPoint++;
      computerScore.textContent = computerPoint;
      result.classList.add("redText");
      break;
  }
}
