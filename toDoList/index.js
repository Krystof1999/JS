const input = document.getElementById("input");
const button = document.getElementById("button");
const itemLabel = document.getElementById("itemLabel");
const test = document.getElementById("test");

// let ul;
// let li;
// let btnDelete;

// const buttonDelete = document.getElementById("btnDelete");

button.onclick = function () {
  // take input from input and create task with that input
  const task = input.value;
  createTask(task);
  // clear input after crating a task
  clearInput();
};

// btnDelete.onclick = function () {
//   console.log("test");
// };
// buttonDelete.onclick = function () {
//   console.log(click);
// };

function createTask(task) {
  // button
  // let btn = document.createElement("button");
  // btn.id = "btnDelete";
  // btn.innerHTML = "Delete";
  // // btn.style.bacgroundColor = "blue";
  // document.body.appendChild(btn);
  // ul
  // var x = document.createElement("UL");
  // x.setAttribute("id", "itemLabel");
  // document.body.appendChild(x);
  // // li
  // var y = document.createElement("LI");
  // var t = document.createTextNode(task);
  // y.appendChild(t);
  // document.getElementById("itemLabel").appendChild(y);
  // // li button
  // var but = document.createElement("button");
  // but.id = "btnDelete";
  // but.innerHTML = "Delete";
  // document.body.appendChild(but);
  // // const count = document.getElementById("button");
  // // for (let i = 0; i < count.length; i++) {
  // //   console.log("hello");
  // // }

  // var ul = document.getElementById("ul");
  // var li = document.createElement("li");
  // li.setAttribute("id", "li");
  // li.appendChild(document.createTextNode("String"));
  // ul.appendChild(li);

  // var btn = document.createElement("button");
  // btn.id = "btnDelete";
  // btn.innerHTML = "Delete";
  // ul.appendChild(btn);

  // var ul = document.createElement("ul");
  // var li = document.createElement("li");
  // var btnDelete = document.createElement("button");

  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var btnDelete = document.createElement("button");

  ul.setAttribute("id", "ul");
  li.setAttribute("id", "li");

  document.body.appendChild(ul);

  btnDelete.id = "btnDelete";
  btnDelete.innerHTML = "Delete";
  li.appendChild(document.createTextNode(task));
  ul.appendChild(li);
  ul.appendChild(btnDelete);

  // btnDelete.addEventListener("click", function handleClick(event) {
  //   console.log("element clicked 🎉🎉🎉", event);
  // });

  btnDelete.onclick = function () {
    console.log("test");
    ul.style.display = "none";
  };
}

function clearInput() {
  input.value = "";
}

function deleteTask() {}
