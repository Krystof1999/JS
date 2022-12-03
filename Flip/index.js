var buttons = document.querySelectorAll("#button");
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

const arrayX = ["X", "X", "X", "X", "X", "X", "X", "X"];
let ar3 = [];
let buttonOdd;
let buttonEven;
let icon1;
let icon2;

buttons.forEach((button, i) => {
  button.innerHTML = arrayX[i];

  button.onclick = function () {
    counter += 1;
    button.setAttribute("class", arrayIcons[i]);
    button.innerHTML = "";
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

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
