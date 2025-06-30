// script.js

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const resultDiv = document.getElementById('results');

  if (playerSelection === computerSelection) {
    resultDiv.textContent = `It's a tie! Both chose ${playerSelection}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  updateScore();
}

function updateScore() {
  const scoreDiv = document.getElementById('score');
  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    scoreDiv.textContent += ` 🎉 ${winner}`;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));
