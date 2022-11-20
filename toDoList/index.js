const input = document.getElementById("input");
const button = document.getElementById("button");
const itemLabel = document.getElementById("itemLabel");

button.onclick = function () {
  // take input from input and create task with that input
  const task = input.value;
  createTask(task);
  // clear input after crating a task
  clearInput();
};

function createTask(task) {
  let btn = document.createElement("button");
  btn.id = "btnDelete";
  btn.innerHTML = "Delete";
  //   btn.type = "submit";
  document.body.appendChild(btn);

  var x = document.createElement("UL");
  x.setAttribute("id", "itemLabel");
  document.body.appendChild(x);

  var y = document.createElement("LI");
  var t = document.createTextNode(task);
  y.appendChild(t);
  document.getElementById("itemLabel").appendChild(y);

  const count = document.getElementById("button");

  for (let i = 0; i < count.length; i++) {
    console.log("hello");
  }
}
function clearInput() {
  input.value = "";
}
