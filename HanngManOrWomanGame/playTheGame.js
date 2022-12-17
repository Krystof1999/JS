export function playTheGame() {
  const buttons = document.querySelectorAll("#button");
  const buttonsDiv = document.getElementById("alphabetButtons");
  const wordDiv = document.getElementById("word");
  var inputWord = prompt("Please enter the word that would be guessed:");
  var word = Array.from(inputWord.toUpperCase());
  let finalLetter;
  let btnLetterHtml;
  var btn;
  var letterArray = [];

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

  buttons.forEach((btn) => {
    btn.onclick = function () {
      btnLetterHtml = btn.innerHTML; // btn letter
      // console.log(`btnLetter ${btnLetterHtml}`);
      letterArray.forEach((letter) => {
        finalLetter = letter.innerHTML; // P R A G
        //   console.log(`finalLetter ${finalLetter}`);
        if (btnLetterHtml == finalLetter) {
          letter.style.visibility = "visible";
        }
      });
    };
  });
}
