let arr = ["Rock", "Paper", "Scissors"];
let playerScore = document.querySelector("#player_score");
let computerScore = document.querySelector("#computer_score");
let startBtn = document.querySelector("#start-button");
let tryAgainBtn = document.querySelector("#again-button");
let score1 = 0;
let score2 = 0;
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let whoWon = document.querySelector("#who_won");
let splashScreen = document.querySelector("#splash");
let gameOverScreen = document.querySelector("#gameOver");
let gameScreen = document.querySelector("#game");
let userBox = document.querySelector("#user_choice");
let computerBox = document.querySelector("#computer_choice");
let winLose = document.querySelector("#final-para");
let final = document.querySelector(".won-lost");
let splashDiv = document.querySelector(".splash-div");
let flex = document.querySelector(".flex");

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
    if (score1 == 5) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      final.innerHTML = "You Won!";
      winLose.innerHTML =
        "The prophecy is true, you are the one. You have defeated Agent smith and saved mankind.";
    }
    return "You win, rock smashes scissors!";
  }
  if (userChoice == "Rock" && computerChoice == "Paper") {
    score2++;
    computerScore.innerHTML = score2.toString();
    whoWon.innerHTML = "You lose! Paper covers Rock!";
    userBox.innerHTML = "&#9994";
    computerBox.innerHTML = "&#9995";
    if (score2 == 5) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      final.innerHTML = "You lose!";
      winLose.innerHTML =
        "Agent Smith says that he knew you were not the one and no match for him.";
    }
    return "You lose! Paper covers Rock!";
  }
  if (userChoice == "Scissors" && computerChoice == "Paper") {
    score1++;
    playerScore.innerHTML = score1.toString();
    whoWon.innerHTML = "You win! Scissors cut paper!";
    userBox.innerHTML = "&#9996";
    computerBox.innerHTML = "&#9995";
    if (score1 == 5) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      final.innerHTML = "You Won!";
      winLose.innerHTML =
        "The prophecy is true, you are the one. You have defeated Agent smith and saved mankind.";
    }
    return "You win! Scissors cuts Paper!";
  }
  if (userChoice == "Scissors" && computerChoice == "Rock") {
    score2++;
    computerScore.innerHTML = score2.toString();
    whoWon.innerHTML = "You lose! Rock smashes scissors!";
    userBox.innerHTML = "&#9996";
    computerBox.innerHTML = "&#9994";
    if (score2 == 5) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      final.innerHTML = "You lose!";
      winLose.innerHTML =
        "Agent Smith says that he knew you were not the one and no match for him.";
    }
    return "You lose! Rock smashes Scissors!";
  }
  if (userChoice == "Paper" && computerChoice == "Rock") {
    score1++;
    playerScore.innerHTML = score1.toString();
    whoWon.innerHTML = "You win! Paper covers rock!";
    userBox.innerHTML = "&#9995";
    computerBox.innerHTML = "&#9994";
    if (score1 == 5) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      flex.style.display = "flex";
      final.innerHTML = "You Won!";
      winLose.innerHTML =
        "The prophecy is true, you are the one. You have defeated Agent smith and saved mankind.";
    }
    return "You win! Paper covers Rock!";
  }
  if (userChoice == "Paper" && computerChoice == "Scissors") {
    score2++;
    computerScore.innerHTML = score2.toString();
    whoWon.innerHTML = "You lose! Scissors cuts paper!";
    userBox.innerHTML = "&#9995";
    computerBox.innerHTML = "&#9996";
    if (score2 == 5) {
      gameScreen.style.display = "none";
      gameOverScreen.style.display = "flex";
      flex.style.display = "flex";
      final.innerHTML = "You lose!";
      winLose.innerHTML =
        "Agent Smith says that he knew you were not the one and no match for him.";
    }
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

startBtn.addEventListener("click", () => {
  splashScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  flex.style.display = "none";
  gameScreen.style.display = "block";
  splashDiv.style.display = "none";
});
tryAgainBtn.addEventListener("click", () => {
  score1 = 0;
  score2 = 0;
  playerScore.innerHTML = "0";
  computerScore.innerHTML = "0";
  whoWon.innerHTML = "";
  winLose.innerHTML = "";
  userBox.innerHTML = "";
  computerBox.innerHTML = "";
  splashDiv.style.display = "none";
  splashScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  flex.style.display = "none";
  gameScreen.style.display = "block";
});

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
