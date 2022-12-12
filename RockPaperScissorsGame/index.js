const result = document.getElementById("result");
const btnRock = document.getElementById("rockBtn");
const btnPaper = document.getElementById("paperBtn");
const btnScissors = document.getElementById("scissorsBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const gameStatus = document.getElementById("gameStatus");
const rules = document.getElementById("rules");
const round = document.getElementById("counter");
const scoreLabel = document.getElementById("score");

var array = ["Rock", "Paper", "Scissors"];
let count = 0;
let userScore = 0;
let pcScore = 0;

// script

btnAction();

playAgainBtn.onclick = function () {
  playAgain();
  btnAction();
};

// end of script

// functions
function playGame(btn) {
  var pcChoice = array[Math.floor(Math.random() * array.length)];
  let userChoice = btn.innerHTML;

  if (userChoice == pcChoice) {
    result.innerHTML = `Result: Draw, play again`;
    setGameStatus(userChoice, pcChoice);
    rules.innerHTML = `${userChoice} and ${pcChoice} are equal => no one wins`;
  } else if (userChoice == "Rock" && pcChoice == "Scissors") {
    userScore += 1;
    console.log(userScore);
    result.innerHTML = `Result: You win`;
    setGameStatus(userChoice, pcChoice);
    rules.innerHTML = `${userChoice} beat ${pcChoice}`;
    endGame();
  } else if (userChoice == "Rock" && pcChoice == "Paper") {
    pcScore += 1;
    result.innerHTML = `Result: You lose`;
    setGameStatus(userChoice, pcChoice);
    rules.innerHTML = `${pcChoice} beat ${userChoice}`;
    endGame();
  } else if (userChoice == "Paper" && pcChoice == "Rock") {
    userScore += 1;
    result.innerHTML = `Result: You win`;
    setGameStatus(userChoice, pcChoice);
    rules.innerHTML = `${userChoice} beat ${pcChoice}`;
    endGame();
  } else if (userChoice == "Scissors" && pcChoice == "Rock") {
    pcScore += 1;
    result.innerHTML = `Result: You lose`;
    setGameStatus(userChoice, pcChoice);
    rules.innerHTML = `${pcChoice} beat ${userChoice}`;
    endGame();
  } else if (userChoice == "Scissors" && pcChoice == "Paper") {
    userScore += 1;
    result.innerHTML = `Result: You win`;
    setGameStatus(userChoice, pcChoice);
    rules.innerHTML = `${userChoice} beat ${pcChoice}`;
    endGame();
  }
  round.innerHTML = `Round: ${count}`;
}

function endGame() {
  btnPaper.onclick = function () {
    alert("Game is over");
  };
  btnRock.onclick = function () {
    alert("Game is over");
  };
  btnScissors.onclick = function () {
    alert("Game is over");
  };
}

function playAgain() {
  rules.innerHTML = "Rules:";
  result.innerHTML = "Result:";
  gameStatus.innerHTML = "Game Status:";
  round.innerHTML = `Round: `;
}

function setGameStatus(userChoice, pcChoice) {
  return (gameStatus.innerHTML = `You played: ${userChoice} <br> PC played: ${pcChoice}`);
}

function btnAction() {
  btnRock.onclick = function () {
    count += 1;
    playGame(btnRock);
    setScore();
  };
  btnPaper.onclick = function () {
    count += 1;
    playGame(btnPaper);
    setScore();
  };

  btnScissors.onclick = function () {
    count += 1;
    playGame(btnScissors);
    setScore();
  };

  round.innerHTML = `Round: ${count}`;
}

function setScore() {
  return (scoreLabel.innerHTML = `Score: You: ${userScore} Pc: ${pcScore}`);
}
