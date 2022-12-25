const movingDiv = document.getElementById("movingDiv");
const movingDiv2 = document.getElementById("movingDiv2");
const movingDivs = document.querySelectorAll("#movingDiv");
const wrapper = document.getElementById("wrapper");
// window.addEventListener("keydown", move);
let x = 0;
let y = 0;

// var letterDiv = document.createElement("div");
// letterDiv.id = "letterDiv";

// var letter = document.createElement("p");
// letter.id = "letter";
// letter.innerHTML = "2";

// letterDiv.appendChild(letter);
// wordDiv.appendChild(letterDiv);
// letterArray.push(letter);

var div = document.createElement("div");
div.id = "movingDiv";
div.innerHTML = "2";

wrapper.appendChild(div);

// function move(event) {
//   switch (event.key) {
//     case "ArrowDown":
//       y += 5;
//       movingDiv.style.top = y + "px";
//       console.log("down");
//       break;
//     case "ArrowUp":
//       y -= 5;
//       movingDiv.style.top = y + "px";
//       break;
//     case "ArrowLeft":
//       x -= 5;
//       movingDiv.style.left = x + "px";
//       break;
//     case "ArrowRight":
//       x += 5;
//       //   movingDiv.style.left = x + "px";
//       //   movingDivs.style.left = x + "px";

//       movingDivs.forEach((div) => {
//         div.style.left = x + "px";
//       });
//       break;
//   }
// }
