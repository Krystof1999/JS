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
      // count += 1;
      btnLetterHtml = btn.innerHTML; //! btn letter
      letterArray.forEach((letter) => {
        finalLetter = letter.innerHTML; //! P R A G
        if (btnLetterHtml == finalLetter) {
          letter.style.visibility = "visible";
          correct = true;
          correctCount += 1;
          // setTimeout(btnDesibled(btn), 1000);
          console.log(`btnLetterHtml ${btnLetterHtml}`);
          console.log(`finalLetter ${finalLetter}`);
          // console.log(`correctCount ${correctCount}`);
        }
      });
      if (correctCount == wordLength) {
        setTimeout(youWin, 200);
      } else if (count == 9) {
        setTimeout(youLose(word), 200);
      }
      if (correct != true) {
        lives -= 1;
        count += 1;
      }
      setTimeout(btnDesibled(btn), 1000);
      // lives -= 1;
      livesLeft(lives);
      console.log(`correctCount ${correctCount}`);
      console.log(`lives ${lives}`);
      console.log(`count ${count}`);
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
