// const alphabetBtn = document.querySelectorAll("#alphabetButtons");
const alphabetBtns = document.querySelector("#alphabetButtons");

const alphabet = ["A", "B", "C", "D", "E"];

alphabet.forEach((alpha) => {
  var alphaBtn = document.createElement("button");
  alphaBtn.id = "alphaBtn";
  alphaBtn.innerHTML = alpha;

  alphabetBtns.appendChild(alphaBtn);

  alphaBtn.onclick = function () {
    console.log(alpha);
  };
});
