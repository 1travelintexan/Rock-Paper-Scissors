let arr = ["Rock", "Paper", "Scissors"];
let playerScore = document.querySelector("#player_score");
let computerScore = document.querySelector("#computer_score");
let score1 = 0;
let score2 = 0;
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

const computerPlay = () => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const playRound = (userChoice, computerChoice) => {
  if (userChoice == "Rock" && computerChoice == "Scissors") {
    score1++;
    playerScore.innerHTML = score1.toString();
    console.log("here");
    return "You win! Rock smashes Scissors!";
  }
  if (userChoice == "Rock" && computerChoice == "Paper") {
    score2++;
    computerScore.innerHTML = score2.toString();
    console.log("here2");
    return "You lose! Paper covers Rock!";
  }
  if (userChoice == "Scissors" && computerChoice == "Paper") {
    score1++;
    playerScore.innerHTML = score1;
    return "You win! Scissors cuts Paper!";
  }
  if (userChoice == "Scissors" && computerChoice == "Rock") {
    score2++;
    return "You lose! Rock smashes Scissors!";
  }
  if (userChoice == "Paper" && computerChoice == "Rock") {
    score1++;
    return "You win! Paper covers Rock!";
  }
  if (userChoice == "Paper" && computerChoice == "Scissors") {
    score2++;
    return "You lose! Scissors cuts Paper!";
  }
  return `It's a tie! ${userChoice} is the same a ${computerChoice}`;
};
const userChoice = "Rock";

const game = (playerChoice) => {
  const computerChoice = computerPlay();
  playRound(playerChoice, computerChoice);
};
game();

rockBtn.addEventListener("click", () => {
  let userChoice = "Rock";
  game(userChoice);
});
paperBtn.addEventListener("click", () => {
  console.log("paper was clicked");
});
scissorsBtn.addEventListener("click", () => {
  console.log("scissors was clicked");
});
