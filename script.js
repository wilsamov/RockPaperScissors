//global variables
let options = ['rock', 'paper', 'scissors'];
let winner;
let computerSelection = computerPlay();
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
const div = document.getElementById('results');
div.style.cssText = "font-family: arial; color: #990099";


//Computer's Choice
function computerPlay() {
  let randomOption = Math.floor(Math.random() * options.length);
  return options[randomOption];
}


//Plays a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    winner = "Player";
    playerScore++;
    roundCount++;
    div.textContent = `You win round ${roundCount}: ${playerSelection} beats ${computerSelection}.`;
    container.appendChild(div);
  } else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
    winner = "Computer";
    computerScore++;
    roundCount++;
    div.textContent = `${winner} wins round ${roundCount}: ${computerSelection} beats ${playerSelection}.`;
    container.appendChild(div);
  } else {
    roundCount++;
    div.textContent = `You tied on round ${roundCount}: ${playerSelection} can't beat ${computerSelection}.`;
    container.appendChild(div);
  }
}

//function that declares winner
function winnerScore(computerScore, playerScore) {
  if (computerScore > playerScore) {
      div.textContent = `You lost. Computer won ${computerScore} out of 5 rounds.`;
      winner = "computer";
    } else if (playerScore > computerScore) {
      div.textContent = `You won ${playerScore} out of 5 rounds.`;
      winner = "player";
    } else {
      div.textContent = `You tied with computer!`;
    }
}

//event listeners
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', selectButton));

function selectButton(e) {
  playerSelection = event.target.id;
  console.log(playerSelection);
  if (roundCount < 5) {
    playRound(playerSelection, computerSelection);
  } else {
    winnerScore(computerScore, playerScore);
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
  }
};



//5 round game
/*function game() {
  for (let i = 0; i < 5; i++) {
    playerPlay();
    computerPlay();
    playRound(playerSelection, computerSelection);
  } winnerScore(computerScore, playerScore);
}*/

//no code below. only function calling
