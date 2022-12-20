import { playAgain } from "./playAgain.js";
import { playTheGame } from "./playTheGame.js";

const playAgainBtn = document.getElementById("playAgainBtn");

playTheGame();

playAgainBtn.onclick = function () {
  playAgain();
};
