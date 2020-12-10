//global variables

const moveOptions = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let winner;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

//function that randomly chooses one of the options
function computerPlay() {
  let option = Math.floor(Math.random() * 3);
  computerSelection = moveOptions[option];
  return computerSelection;
}

//prompts player to choose
function playerPlay() {
  let choice = prompt(`Round ${roundNumber}. Rock, paper, or scissors?`);
  choice = choice.toLowerCase();
  choice = choice.trim();
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    playerSelection = choice;
    alert(`You chose ${playerSelection}.`);
    return playerSelection;
  } else if (choice !== "rock" || choice !== "paper" || choice!== "scissors") {
    alert("Sorry, input invalid, please type either rock, paper or scissors.");
  } else {
    alert("Sorry, input invalid, please type either rock, paper or scissors.");
  }
}

//Function to play a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock"){
    if (computerSelection == "scissors") {
      alert("You win, rock beats scissors!");
      playerScore++;
    } else if (computerSelection == "rock") {
      alert("You tied! Computer also chose rock.");
    } else if (computerSelection == "paper") {
      alert("You lose, paper beats rock.");
      computerScore++;
    } else {
      alert("Please try again.");
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      alert("You win, scissors beat paper!");
      playerScore++;
    } else if (computerSelection == "scissors") {
      alert("You tied! Computer also chose scissors.");
    } else if (computerSelection == "rock") {
      alert("You lose, rock beats scissors.");
      computerScore++;
    } else {
      alert("Please try again.");
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      alert("You win, paper beats rock!");
      playerScore++;
    } else if (computerSelection == "paper") {
      alert("You tied! Computer also chose paper.");
    } else if (computerSelection == "scissors") {
      alert("You lose, scissors cut paper.");
      computerScore++;
    } else {
      alert("Please try again.");
    } 
  } else {
    alert("Please try again");
  }
}

//function that declares winner
function winnerScore(computerScore, playerScore) {
  if (computerScore > playerScore) {
      alert(`Computer won ${computerScore} out of 5 rounds.`);
      winner = "computer";
    } else if (playerScore > computerScore) {
      alert(`Player won ${playerScore} out of 5 rounds.`);
      winner = "player";
    } else {
      alert(`You tied with computer!`);
    }
}

//repeats round 5 times
function game() {
  for (i=0; i < 5; i++) {
    computerPlay();
    playerPlay();
    playRound(playerSelection, computerSelection);
    roundNumber++;
  } winnerScore(computerScore, playerScore);
}

game();
