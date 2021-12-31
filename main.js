let arr = ["Rock", "Paper", "Scissors"];
let playerScore = document.querySelector("#player_score");
let computerScore = document.querySelector("#computer_score");
let score1 = 0;
let score2 = 0;
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let whoWon = document.querySelector("#who_won");
let gameoverScreen = document.querySelector("#gameover");
let gameScreen = document.querySelector("#game");
let userBox = document.querySelector("#user_choice");
let computerBox = document.querySelector("#computer_choice");

const computerPlay = () => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const playRound = (userChoice, computerChoice) => {
  if (userChoice == "Rock" && computerChoice == "Scissors") {
    score1++;
    playerScore.innerHTML = score1.toString();
    whoWon.innerHTML = "You win! Rock smashes Scissors!";
    userBox.innerHTML = "&#9994";
    computerBox.innerHTML = "&#9996";
    return "You win, rock smashes scissors!";
  }
  if (userChoice == "Rock" && computerChoice == "Paper") {
    score2++;
    computerScore.innerHTML = score2.toString();
    whoWon.innerHTML = "You lose! Paper covers Rock!";
    userBox.innerHTML = "&#9994";
    computerBox.innerHTML = "&#9995";
    return "You lose! Paper covers Rock!";
  }
  if (userChoice == "Scissors" && computerChoice == "Paper") {
    score1++;
    playerScore.innerHTML = score1.toString();
    whoWon.innerHTML = "You win! Scissors cut paper!";
    userBox.innerHTML = "&#9996";
    computerBox.innerHTML = "&#9995";
    return "You win! Scissors cuts Paper!";
  }
  if (userChoice == "Scissors" && computerChoice == "Rock") {
    score2++;
    computerScore.innerHTML = score2.toString();
    whoWon.innerHTML = "You lose! Rock smashes scissors!";
    userBox.innerHTML = "&#9996";
    computerBox.innerHTML = "&#9994";
    return "You lose! Rock smashes Scissors!";
  }
  if (userChoice == "Paper" && computerChoice == "Rock") {
    score1++;
    playerScore.innerHTML = score1.toString();
    whoWon.innerHTML = "You win! Paper covers rock!";
    userBox.innerHTML = "&#9995";
    computerBox.innerHTML = "&#9994";
    return "You win! Paper covers Rock!";
  }
  if (userChoice == "Paper" && computerChoice == "Scissors") {
    score2++;
    computerScore.innerHTML = score2.toString();
    whoWon.innerHTML = "You lose! Scissors cuts paper!";
    userBox.innerHTML = "&#9995";
    computerBox.innerHTML = "&#9996";
    return "You lose! Scissors cuts Paper!";
  } else {
    if (userChoice == "Paper") {
      userBox.innerHTML = "&#9995";
      computerBox.innerHTML = "&#9995";
    }
    if (userChoice == "Rock") {
      userBox.innerHTML = "&#9994";
      computerBox.innerHTML = "&#9994";
    }
    if (userChoice == "Scissors") {
      userBox.innerHTML = "&#9996";
      computerBox.innerHTML = "&#9996";
    }
    whoWon.innerHTML = "It's a tie! Go again!";
    return `It's a tie! ${userChoice} is the same a ${computerChoice}`;
  }
};

const game = (playerChoice) => {
  const computerChoice = computerPlay();
  playRound(playerChoice, computerChoice);
};

rockBtn.addEventListener("click", () => {
  let userChoice = "Rock";
  game(userChoice);
  console.log("rock was clicked");
});
paperBtn.addEventListener("click", () => {
  let userChoice = "Paper";
  game(userChoice);
  console.log("paper was clicked");
});
scissorsBtn.addEventListener("click", () => {
  let userChoice = "Scissors";
  game(userChoice);
  console.log("scissors was clicked");
});
