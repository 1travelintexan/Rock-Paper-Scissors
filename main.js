let arr = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const game = (userChoice, computerChoice) => {
  if (userChoice == "Rock" && computerChoice == "Scissors") {
    return "You win! Rock smashes Scissors!";
  }
  if (userChoice == "Rock" && computerChoice == "Paper") {
    return "You lose! Paper covers Rock!";
  }
  if (userChoice == "Scissors" && computerChoice == "Paper") {
    return "You win! Scissors cuts Paper!";
  }
  if (userChoice == "Scissors" && computerChoice == "Rock") {
    return "You lose! Rock smashes Scissors!";
  }
  if (userChoice == "Paper" && computerChoice == "Rock") {
    return "You win! Paper covers Rock!";
  }
  if (userChoice == "Paper" && computerChoice == "Scissors") {
    return "You lose! Scissors cuts Paper!";
  }
  return `It's a tie! ${userChoice} is the same a ${computerChoice}`;
};
const computerChoice = computerPlay();
const userChoice = "Rock";
console.log(game(userChoice, computerChoice));
