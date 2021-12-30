let arr = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const playRound = (userChoice, computerChoice) => {
  if (userChoice == "Rock" && computerChoice == "Scissors") {
    playerScore++;
    return "You win! Rock smashes Scissors!";
  }
  if (userChoice == "Rock" && computerChoice == "Paper") {
    computerScore++;
    return "You lose! Paper covers Rock!";
  }
  if (userChoice == "Scissors" && computerChoice == "Paper") {
    playerScore++;
    return "You win! Scissors cuts Paper!";
  }
  if (userChoice == "Scissors" && computerChoice == "Rock") {
    computerScore++;
    return "You lose! Rock smashes Scissors!";
  }
  if (userChoice == "Paper" && computerChoice == "Rock") {
    playerScore++;
    return "You win! Paper covers Rock!";
  }
  if (userChoice == "Paper" && computerChoice == "Scissors") {
    computerScore++;
    return "You lose! Scissors cuts Paper!";
  }
  return `It's a tie! ${userChoice} is the same a ${computerChoice}`;
};
const userChoice = "Rock";

const game = () => {
  for (let i = 0; i < 4; i++) {
    const computerChoice = computerPlay();
    playRound(userChoice, computerChoice);
    console.log(userChoice, computerChoice);
  }
  console.log("user", playerScore, "comp", computerScore);
};
game();
