const input = document.getElementById("input");
const button = document.getElementById("button");
const itemLabel = document.getElementById("itemLabel");
const test = document.getElementById("test");
const divBody = document.getElementById("bodyDiv");

button.onclick = function () {
  // take input from input and create task with that input
  const task = input.value;
  createTask(task);
  // clear input after crating a task
  clearInput();
};

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

function createTask(task) {
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var btnDelete = document.createElement("button");
  var btnDone = document.createElement("button");

  ul.setAttribute("id", "ul");
  li.setAttribute("id", "li");

  document.body.appendChild(ul);
  divBody.appendChild(ul);

  btnDelete.id = "btnDelete";
  btnDelete.innerHTML = "Delete";
  btnDone.id = "btnDone";
  btnDone.innerHTML = "Done";
  li.appendChild(document.createTextNode(task));
  ul.appendChild(btnDone);
  ul.appendChild(li);
  ul.appendChild(btnDelete);

  // delete
  btnDelete.onclick = function () {
    ul.style.display = "none";
  };

  // done
  let clickCount = 0;
  btnDone.onclick = function () {
    if (clickCount % 2 == 0) {
      ul.style.opacity = 0.5;
    } else {
      ul.style.opacity = 1;
    }
    clickCount += 1;
    console.log(clickCount);
  };
}

function clearInput() {
  input.value = "";
}

function deleteTask() {}
