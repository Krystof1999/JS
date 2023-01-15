// let canvas = document.getElementById("canvas");
// let context = canvas.getContext("2d");
// let xRight = 0;
// let xLeft = 180;
// let y = 0;
// let canvasWidth = 200;
// let canvasheight = 200;
// let cubeWidth = 20;
// let cubeHeight = 20;

// // function move() {
// //   // wall detection - right wall

// //     if (xRight <= 180) {
// //       // 180 <= 200 - 20
// //       context.fillRect(xRight, y, 20, 20);
// //       xRight = xRight + 2;
// //       context.clearRect(xRight - 2, y, cubeWidth, cubeHeight);
// //       context.fillRect(xRight, y, 20, 20);
// //     }
// //     if (xRight >= 180) {
// //       // xLeft = xLeft - 2;
// //       // context.clearRect(xLeft + 2, y, cubeWidth, cubeHeight);
// //       // context.fillRect(xLeft, y, 20, 20);
// //       // console.log(xRight);
// //       // if (xRight == 0) {
// //       //   console.log(xRight);
// //       // }

// //       console.log(xRight);
// //     }
// //     // wall detection - left wall
// //     if (xRight == 182 && xLeft == 0) {
// //       let u = 0;
// //       context.fillRect(0, 0, 20, 20);
// //       for (let i = 0; i < 90; i++) {
// //         u = u + 2;
// //         context.clearRect(u - 2, y, cubeWidth, cubeHeight);
// //         context.fillRect(u, y, 20, 20);
// //       }
// //     }
// //     if (xLeft == 0) {
// //       console.log(`ted ${xLeft}`);
// //       xRight = 0;
// //       console.log(`xRight${xRight}`);
// //       xRight = xRight + 2;
// //       console.log(`xRight${xRight}`);
// //       context.clearRect(xRight - 2, y, cubeWidth, cubeHeight);
// //       context.fillRect(xRight, y, 20, 20);
// //     }

// //   requestAnimationFrame(move);
// // }

// function moveRight() {
//   if (xRight < 180) {
//     // 180 <= 200 - 20
//     context.fillRect(xRight, y, 20, 20);
//     xRight = xRight + 2;
//     context.clearRect(xRight - 2, y, cubeWidth, cubeHeight);
//     context.fillRect(xRight, y, 20, 20);
//     console.log(`xRight${xRight}`);
//   } else {
//     xRight = 180;
//     // console.log(`xRight${xRight}`);
//   }
// }

// function moveLeft() {
//   if (xRight >= 180) {
//     xRight = xRight - 2;
//     context.clearRect(xRight + 2, y, cubeWidth, cubeHeight);
//     context.fillRect(xRight, y, 20, 20);
//   }
// }
// let x = -1;
// let xL = 180;
// let xR = 0;
// let xL2 = 180;
// function right() {
//   if (x < 180) {
//     // 0 -180
//     x++;
//     context.fillRect(x, y, 20, 20);
//     context.clearRect(x - 2, y, cubeWidth, cubeHeight);
//     context.fillRect(x, y, 20, 20);
//   }
//   if (x == 180) {
//     if (xL > 0) {
//       xL--;
//       context.clearRect(xL + 2, y, cubeWidth, cubeHeight);
//       context.fillRect(xL, y, 20, 20);
//     }
//   }
//   if (xL == 0) {
//     xR++;
//     context.fillRect(xR, y, 20, 20);
//     context.clearRect(xR - 2, y, cubeWidth, cubeHeight);
//     context.fillRect(xR, y, 20, 20);
//   }
// //   if (xR == 180) {
// //     console.log("ted");
// //     console.log(`xL2${xL2}`);
// //     if (xL2 > 0) {
// //       xL2--;
// //       context.clearRect(xL2 + 2, y, cubeWidth, cubeHeight);
// //       context.fillRect(xL2, y, 20, 20);
// //     }
// //     // if (xL2 > 0) {
// //     //   xL2--;
// //     //   context.clearRect(xL2 + 2, y, cubeWidth, cubeHeight);
// //     //   context.fillRect(xL2, y, 20, 20);
// //     // }
// //   }
// }

// // let xL = 180;
// // function left() {
// //   if (xL <= 0) {
// //     xL--;
// //     //   console.log(xL);
// //     context.fillRect(xL, y, 20, 20);
// //     context.clearRect(xL - 2, y, cubeWidth, cubeHeight);
// //     context.fillRect(xL, y, 20, 20);
// //   }
// //   console.log("left");
// // }

// move();

// function move() {
//   right();

//   requestAnimationFrame(move);
// }

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// var ballRadius = 10;
var cubeSize = 20;
var x = canvas.width / 2;
var y = canvas.height - 30;
var directionX = 2;
var directionY = -2;

var x2 = canvas.width / 1.5;
var y2 = canvas.height - 20;
var directionX2 = 1;
var directionY2 = -1;

draw();

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.arc();
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawCube1() {
  ctx.fillRect(x, y, 20, 20);
}
function drawCube2() {
  ctx.fillRect(x2, y2, 20, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCube1();
  drawCube2();

  if (x + directionX > canvas.width - cubeSize || x + directionX < 0) {
    directionX = -directionX;
  }
  x += directionX;

  if (y + directionY > canvas.height - cubeSize || y + directionY < 0) {
    directionY = -directionY;
  }
  y += directionY;

  if (x2 + directionX2 > canvas.width - cubeSize || x2 + directionX2 < 0) {
    directionX2 = -directionX2;
  }
  x2 += directionX2;

  if (y2 + directionY2 > canvas.height - cubeSize || y2 + directionY2 < 0) {
    directionY2 = -directionY2;
  }
  y2 += directionY2;
  requestAnimationFrame(draw);
}
