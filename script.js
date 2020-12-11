//global variables

const moveOptions = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let winner;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
const box = document.getElementById('box');
const results = document.getElementById('results');

//function that randomly chooses one of the options
function computerPlay() {
  let option = Math.floor(Math.random() * 3);
  computerSelection = moveOptions[option];
  return computerSelection;
}

//prompts player to choose
function playerPlay() {
  const rock = document.getElementById('rock');
  const paper = document.getElementById('paper');
  const scissors = document.getElementById('scissors');
  const content = document.createElement('h3');

  content.style.cssText = "font-family: arial; color: #990099";

  rock.addEventListener('click', (e) => {
    playerSelection = moveOptions[0];
    console.log(playerSelection);
    content.textContent = `You choose ${playerSelection}.`;
    box.appendChild(content);
    return playerSelection;
  });  

  paper.addEventListener('click', (e) => {
    playerSelection = moveOptions[1];
    console.log(playerSelection);
    content.textContent = `You choose ${playerSelection}.`;
    box.appendChild(content);
    return playerSelection;
  }); 

  scissors.addEventListener('click', (e) => {
    playerSelection = moveOptions[2];
    console.log(playerSelection);
    content.textContent = `You choose ${playerSelection}.`;
    box.appendChild(content);
    return playerSelection;
  });
}

function playRound(playerSelection, computerSelection) {
  const play = document.getElementById('play');
  const content2 = document.createElement('h3');

  play.addEventListener('click', (e) => {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
      winner = "Player";
      playerScore++;
      content2.textContent = `${winner} wins. You have ${playerScore} points. Computer has ${computerScore} points. Round ${roundNumber} over.`;
      results.appendChild(content2);
      roundNumber++;
    } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
      winner = "Computer";
      computerScore++;
      content2.textContent = `${winner} wins. You have ${playerScore} points. Computer has ${computerScore} points. Round ${roundNumber} over.`;
      results.appendChild(content2);
      roundNumber++;
    } else {
      content2.textContent = `You tied. Round ${roundNumber} over.`;
      results.appendChild(content2);
      roundNumber++;
    }
  });
}

computerPlay();
playerPlay();
playRound(playerSelection, computerSelection);