// Global variables
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const result = document.querySelector(".result");
const score = document.querySelector(".score");
const roundDisplay = document.querySelector(".round");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resetBtn = document.querySelector("#resetBtn");

// Get computer choice
const getComputerChoice = () => {
  let cpuChoice = Math.floor(Math.random() * 3) + 1;

  if (cpuChoice === 1) {
    return `rock`;
  } else if (cpuChoice === 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
};

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  let resultMessage;
  if (humanChoice === computerChoice) {
    resultMessage = "Draw!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    resultMessage = "You win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    resultMessage = "You win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultMessage = "You win! Scissors beats Paper";
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    resultMessage = "You lose! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    resultMessage = "You lose! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    resultMessage = "You lose! Rock beats Scissors";
    computerScore++;
  }
  result.textContent = resultMessage;
  score.textContent = `Human score: ${humanScore}
  Computer score: ${computerScore}`;
};

const compareChoices = (e) => {
  let userChoice = e.target.textContent.toLowerCase();
  let computerChoice = getComputerChoice();

  if (roundCount <= 4) {
    roundDisplay.textContent = `Round ${roundCount + 1} of 5`;
    playRound(userChoice, computerChoice);
    roundCount++;
  } else {
    rockBtn.disabled = true;

    paperBtn.disabled = true;

    scissorsBtn.disabled = true;

    roundDisplay.textContent = "Game Over";
    result.textContent = "Game over";
  }
};

const resetGame = () => {
  result.textContent = "";
  score.textContent = "";
  roundDisplay.textContent = "";

  rockBtn.disabled = false;

  paperBtn.disabled = false;

  scissorsBtn.disabled = false;

  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
};

rockBtn.addEventListener("click", compareChoices);
paperBtn.addEventListener("click", compareChoices);
scissorsBtn.addEventListener("click", compareChoices);
resetBtn.addEventListener("click", resetGame);
