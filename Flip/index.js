var buttons = document.querySelectorAll("#button");
const startButton = document.getElementById("startButon");
let counter = 0;
let cardValue1;
let cardValue2;
const arrayIcons = [
  "fa-solid fa-hippo",
  "fa-solid fa-hippo",
  "fa-solid fa-dog",
  "fa-solid fa-dog",
  "fa-solid fa-cat",
  "fa-solid fa-cat",
  "fa-solid fa-cow",
  "fa-solid fa-cow",
];
let shuffleArray = [];
const arrayX = ["X", "X", "X", "X", "X", "X", "X", "X"];
let ar3 = [];
let buttonOdd;
let buttonEven;
let icon1;
let icon2;

shuffleArray = shuffle(arrayIcons);

hideButtons();

startButton.onclick = () => {
  showButtons();
  play();
};

function play() {
  buttons.forEach((button, i) => {
    button.innerHTML = arrayX[i];

    button.onclick = function () {
      counter += 1;
      button.setAttribute("class", shuffleArray[i]);
      button.innerHTML = " ";
      if (counter % 2 != 0) {
        buttonOdd = button;
        icon1 = button.getAttribute("class");
        ar3[0] = icon1;
      } else {
        icon2 = button.getAttribute("class");
        buttonEven = button;
        ar3[1] = icon2;
        if (ar3[0] == ar3[1]) {
          wait(1000).then(() => {
            buttonEven.style.visibility = "hidden";
            buttonOdd.style.visibility = "hidden";
          });
        } else {
          wait(700).then(() => {
            buttonEven.innerHTML = arrayX[i];
            buttonOdd.innerHTML = arrayX[i];
            buttonOdd.setAttribute("class", "");
            buttonEven.setAttribute("class", "");
          });
        }
      }
    };
  });
}

function hideButtons() {
  buttons.forEach((btn) => {
    btn.style.visibility = "hidden";
  });
}

function showButtons() {
  buttons.forEach((btn) => {
    btn.style.visibility = "visible";
  });
}

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

function x() {
  var fruits = ["A", "A", "B", "B", "C", "C"];
  let filtered = fruits.filter(checkValue);
}
adults.forEach(print);

function checkValue(element) {
  return element != "";
}

function print(element) {
  console.log(element);
}
