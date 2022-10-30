// Counter
let buttonDecrease = document.getElementById("btn-decrease");
let buttonReset = document.getElementById("btn-reset");
let buttonIncrease = document.getElementById("btn-increase");

let counterValue = document.getElementById("counterValue");
let counter = 0;

buttonDecrease.addEventListener("click", function clickFunction() {
  counter = counter - 1;
  counterValue.innerHTML = counter;
});
buttonReset.addEventListener("click", function clickFunction() {
  counter = 0;
  counterValue.innerHTML = counter;
  console.log("res");
});
buttonIncrease.addEventListener("click", function clickFunction() {
  counter = counter + 1;
  counterValue.innerHTML = counter;
  console.log("inc");
});
