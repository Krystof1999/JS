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
      count += 1;
      btnLetterHtml = btn.innerHTML; //! btn letter
      letterArray.forEach((letter) => {
        finalLetter = letter.innerHTML; //! P R A G
        if (btnLetterHtml == finalLetter) {
          letter.style.visibility = "visible";
          correct = true;
          correctCount += 1;
        }
      });
      if (count == 10) {
        alert("Game over");
      }
      if (correctCount == wordLength) {
        alert("You win");
      }
    };
  });
}
