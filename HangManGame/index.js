// const alphabetBtn = document.querySelectorAll("#alphabetButtons");
const alphabetBtns = document.querySelector("#alphabetButtons");
const word = document.getElementById("wordDiv");
import { alphabet } from "./alphabet.js";

const finalWord = ["P", "R", "A", "G", "U", "E"];
let sameLetter;

// buttons creation
alphabet.forEach((alpha) => {
  var alphaBtn = document.createElement("button");
  alphaBtn.id = "alphaBtn";
  alphaBtn.innerHTML = alpha;

  alphabetBtns.appendChild(alphaBtn);

  alphaBtn.onclick = function () {
    // console.log(alpha); // alpha je letter

    finalWord.forEach((letter) => {
      if (letter == alpha) {
        sameLetter = letter;

        console.log(sameLetter);
      }
    });
  };
});

finalWord.forEach((finalLetter) => {
  var letterDiv = document.createElement("div");
  letterDiv.id = "letterDiv";
  var letters = document.createElement("p");
  letters.id = "letter";
  letters.innerHTML = finalLetter;

  letterDiv.style.borderBottom = "2px solid black";
  letterDiv.style.float = "left";
  letterDiv.style.margin = "40px";

  // letters.style.visibility = "hidden";

  letterDiv.append(letters);
  word.appendChild(letterDiv);
});
