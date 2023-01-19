// //* Element styling atributes

// const output = document.querySelector(".output");
// // do konzole v browseru output.syle -> vyjede mi seznam co se da pouzit pro style

// const ele1 = document.querySelector("div.output");

// ele1.setAttribute("style", "");

// const eles = document.querySelectorAll("div");

// eles.forEach((el, index) => {
//   console.log(el);

//   el.style.color = "red";
//   el.classList.add("newClass");
//   el.classList.remove("output");
//   el.classList.toggle("newClass2"); //add or remove a class depending on if it already exist or not
//   el.setAttribute("id", "newId" + index + 1);

//   console.log(el.classList.contains("newClass")); // return true or false

//   if (el.classList.contains("someClass")) {
//     el.innerHTML = "someHTML";
//   }
// });

// //* clicking

// function btnClicked(el) {
//   console.log(el.target); // will console log element that has been clicked

//   el.target.id = "newID";
// }

// //* Event linsteners called only once

// const h1 = document.querySelector("h1");
// const btn = document.querySelector("btn");

// h1.addEventListener("click", func, { once: true });

// function func() {
//   console.log("hello");
// }

// // different example

// btn.addEventListener("click", func2); // click only once and call func2
// btn.addEventListener("click", (e) => {
//   // than click on the same element but do another action
//   console.log("different action on second click");
// });

// function func2(e) {
//   console.log("hello2");
//   const el = e.target;
//   el.removeEventListener("click", func2);
// }

// animation

const output = document.querySelector(".output");
// taky to muzu vytvorit a nemit to v html
// const output = document.createElement('div')
// document.prepend(output)
output.style.width = "100px";
output.style.height = "100px";
output.style.backgroundColor = "red";
output.style.textAlign = "center";
output.style.lineHeight = "100px";
output.style.position = "absolute";

const player = {
  x: 0,
  y: 0,
  animation: window.requestAnimationFrame(moveMe),
  speed: 10,
};

const keyz = {
  ArrowDown: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowLeft: false,
};

window.addEventListener("keydown", (key) => {
  console.log(key.code); // vypise mi to klavesu na kterou budu klikat

  keyz[key.code] = true;
});

window.addEventListener("keyup", (key) => {
  keyz[key.code] = false;
});

function moveMe() {
  if (keyz.ArrowRight) {
    player.x += player.speed;
    console.log(player);
  }
  if (keyz.ArrowLeft) {
    player.x -= player.speed;
    console.log(player);
  }
  if (keyz.ArrowUp) {
    player.y -= player.speed;
    console.log(player);
  }
  if (keyz.ArrowDown) {
    player.y += player.speed;
    console.log(player);
  }
  output.style.left = player.x + "px";
  output.style.top = player.y + "px";
  player.animation = window.requestAnimationFrame(moveMe);
}
