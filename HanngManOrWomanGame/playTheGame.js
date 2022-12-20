export function playTheGame() {
  const buttons = document.querySelectorAll("#button");
  const wordDiv = document.getElementById("word");
  var inputWord = prompt("Please enter the word that would be guessed:");
  var word = Array.from(inputWord.toUpperCase());
  var wordLength = word.length;
  let finalLetter;
  let btnLetterHtml;
  var letterArray = [];
  var count = 0;
  var lives = 10;

  word.forEach((w) => {
    var letterDiv = document.createElement("div");
    letterDiv.id = "letterDiv";

    var letter = document.createElement("p");
    letter.id = "letter";
    letter.innerHTML = w;

    letterDiv.appendChild(letter);
    wordDiv.appendChild(letterDiv);
    letterArray.push(letter);
  });
  let correctCount = 0;
  buttons.forEach((btn) => {
    btn.onclick = function () {
      var correct = false;
      btnLetterHtml = btn.innerHTML;
      letterArray.forEach((letter) => {
        finalLetter = letter.innerHTML;
        if (btnLetterHtml == finalLetter) {
          letter.style.visibility = "visible";
          correct = true;
          correctCount += 1;
        }
      });
      if (correctCount == wordLength) {
        setTimeout(youWin, 200);
      } else if (count == 9) {
        wait(200).then(() => {
          setTimeout(youLose(word), 200);
        });
      }
      if (correct != true) {
        lives -= 1;
        count += 1;
        canvas(count);
      }
      setTimeout(btnDesibled(btn), 1000);
      livesLeft(lives);
    };
  });
}

function youWin() {
  alert("You win");
}
function youLose(word) {
  alert(`Game over. The word you were looking for was ${word}`);
}

function livesLeft(livesLeft) {
  const lives = document.getElementById("lives");

  lives.innerHTML = `You have ${livesLeft} lives`;
}

function btnDesibled(btn) {
  btn.disabled = true;
}

function canvas(count) {
  let canvas = document.getElementById("canvas");

  let context = canvas.getContext("2d");
  context.strokeStyle = "purple";
  context.lineWidth = 2;

  // todo
  if (count == 1) {
    context.moveTo(150, 87);
    context.lineTo(12, 87);
    context.stroke();
  }
  if (count == 2) {
    context.lineTo(12, 10);
    context.stroke();
  }
  if (count == 3) {
    context.lineTo(90, 10);
    context.stroke();
  }
  if (count == 4) {
    context.lineTo(90, 25);
    context.stroke();
  }
  if (count == 5) {
    context.beginPath();
    context.arc(90, 31, 7, 0, 2 * Math.PI);
    context.stroke();
  }
  if (count == 6) {
    context.moveTo(90, 39);
    context.lineTo(90, 60);
    context.stroke();
  }
  if (count == 7) {
    context.moveTo(70, 50);
    context.lineTo(90, 40);
    context.stroke();
  }
  if (count == 8) {
    context.moveTo(110, 50);
    context.lineTo(90, 40);
    context.stroke();
  }
  if (count == 9) {
    context.moveTo(70, 80);
    context.lineTo(90, 60);
    context.stroke();
  }
  if (count == 10) {
    context.moveTo(110, 80);
    context.lineTo(90, 60);
    context.stroke();
  }
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
