// const canvas = document.getElementById("canvas");
// let context = canvas.getContext("2d");

// let x = 0;
// let y = 0;
// let z = 0;
// let food = true;
// let step = 0;

// window.addEventListener("keydown", move);

// context.fillRect(x, y, 20, 20);

// function move(event) {
//   //   switch (event.key) {
//   //     case "ArrowRight":
//   //       x += 20;
//   //       if (x == 20) {
//   //         // simulate fruit
//   //         console.log("fruit simulation");
//   //         //* make snake bigger of one cube -> move the cube + create new cube on current position
//   //         context.fillRect(x, 0, 20, 20);

//   //         // context.fillRect(x, 0, 20, 20);
//   //         // context.fillRect(x, 0, 20, 20);
//   //         // x += 20;
//   //         // context.fillRect(x + 20, 0, 20, 20);
//   //       } else {
//   //         //* snake size is the same
//   //         //* move the cube -> delete the current one -> draw it on new position
//   //       }

//   //       //   x += 20;
//   //       context.fillRect(x, 0, 20, 20); // create new on 20
//   //       context.clearRect(x - 20, 0, 20, 20); // delete old on 0

//   //       break;
//   //   }

//   switch (event.key) {
//     case "ArrowRight":
//       drawCube(x, y);
//       x += 20;
//       //   z += 20;
//       if (x == 20) {
//         console.log("20");
//         drawCube(x, y);
//         // eat fruit
//       } else {
//         // dont eat fruit
//       }
//       deleteCube(z, y);
//       z += 20;
//       break;
//   }
// }

// function drawCube(x, y) {
//   context.fillRect(x + 20, y, 20, 20);
//   context.fillRect(x + 20, y, 20, 20);
// }
// function deleteCube(z, y) {
//   context.clearRect(z, 0, 20, 20);
// }

const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let x = 0;
let y = 0;

window.addEventListener("keydown", keyboardKey);
function keyboardKey(event) {
  if (event.key == "ArrowRight") {
    timerID = setInterval(move, 300);
  }
}

function move() {
  if (x >= 250 || y >= 250) {
    clearInterval(timerID);
  } else {
    drawCube(x, y);
    deleteCube(x, y);
    x += 20;
  }
  // move left...
}

function drawCube(x, y) {
  context.fillRect(x, y, 20, 20);
}

function deleteCube(x, y) {
  context.clearRect(x - 20, y, 20, 20);
}
