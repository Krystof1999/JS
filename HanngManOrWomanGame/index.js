import { playAgain } from "./playAgain.js";
import { playTheGame } from "./playTheGame.js";

const playAgainBtn = document.getElementById("playAgainBtn");

playTheGame();

playAgainBtn.onclick = function () {
  playAgain();
};

// let canvas = document.getElementById("canvas");

// let context = canvas.getContext("2d");

// context.strokeStyle = "purple";
// context.lineWidth = 2;
// context.moveTo(150, 87);
// context.lineTo(12, 87);
// context.lineTo(12, 10);
// context.lineTo(90, 10);
// context.lineTo(90, 25);
// context.stroke();
// context.beginPath();
// context.arc(90, 31, 7, 0, 2 * Math.PI);
// context.stroke();
// context.moveTo(90, 39);
// context.lineTo(90, 60);
// context.stroke();
// context.moveTo(70, 50);
// context.lineTo(90, 40);
// context.stroke();
// context.moveTo(110, 50);
// context.lineTo(90, 40);
// context.stroke();
// context.moveTo(70, 80);
// context.lineTo(90, 60);
// context.stroke();
// context.moveTo(110, 80);
// context.lineTo(90, 60);
// context.stroke();
