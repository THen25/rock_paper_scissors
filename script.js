// Global variables
let humanScore = 0;
let computerScore = 0;

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

// Get human choice
const getHumanChoice = () => {
  let userChoice = prompt("Enter rock, paper, or scissors");
  return userChoice;
};

// Play a single round
// const playRound = (humanChoice, computerChoice) => {
//   humanChoice = humanChoice.toLowerCase();
//   if (humanChoice === computerChoice) {
//     console.log("Draw!");
//   } else if (humanChoice === "rock" && computerChoice === "scissors") {
//     console.log(`You win! Rock beats Scissors`);
//     humanScore++;
//   } else if (humanChoice === "paper" && computerChoice === "rock") {
//     console.log(`You win! Paper beats Rock`);
//     humanScore++;
//   } else if (humanChoice === "scissors" && computerChoice === "paper") {
//     console.log(`You win! Scissors beats Paper`);
//     humanScore++;
//   } else if (humanChoice === "rock" && computerChoice === "paper") {
//     console.log(`You lose! Paper beats Rock`);
//     computerScore++;
//   } else if (humanChoice === "paper" && computerChoice === "scissors") {
//     console.log(`You lose! Scissors beats Paper`);
//     computerScore++;
//   } else if (humanChoice === "scissors" && computerChoice === "rock") {
//     console.log(`You lose! Rock beats Scissors`);
//     computerScore++;
//   }
//   console.log(`Round results:
//     Human Score: ${humanScore}
//     Computer Score: ${computerScore}`);
// };

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

const playGame = () => {
  const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! Rock beats Scissors`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! Paper beats Rock`);
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win! Scissors beats Paper`);
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! Paper beats Rock`);
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(`You lose! Scissors beats Paper`);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(`You lose! Rock beats Scissors`);
      computerScore++;
    }
    console.log(`
    Human Score: ${humanScore}
    Computer Score: ${computerScore}`);
  };

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
};

playGame();
