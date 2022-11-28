var buttons = document.querySelectorAll("#button");
let counter = 0;
let cardValue1;
let cardValue2;
cards = ["A", "B", "A", "B", "C", "C"];

buttons.forEach((button, i) => {
  button.onclick = function () {
    counter += 1;
    button.innerHTML = cards[i];

    if (counter % 2 != 0) {
      //(counter == 1)
      cardValue1 = button.innerHTML;
      console.log(`card1: ${cardValue1}`);
    }

    // if match => leave the cards visible

    // flip the card over after 2 tryes
    if (counter % 2 == 0) {
      //(counter == 2)
      cardValue2 = button.innerHTML;
      console.log(`card2: ${cardValue2}`);
      buttons.forEach((button) => {
        if (cardValue1 == cardValue2) {
          console.log(
            `card1: ${cardValue1} is the same as card2: ${cardValue2}`
          );
          //   button.innerHTML = cards[i];
        } else {
          wait(1000).then(() => {
            button.innerHTML = "X";
          });
        }
      });
    }
    // if (cardValue1 == cardValue2) {
    //   console.log(`card1: ${cardValue1} is the same as card2: ${cardValue2}`);
    // //   button.innerHTML = cards[i];
    // }
  };
});

function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// getCards(buttons);
// asyncCall(buttons);
// flipTwoCards(button);

// buttons.forEach((but, i) => {
//   console.log(but.innerHTML);
//   cardArray[i] = but.innerHTML;
//   //   console.log(cardArray);
// });

// buttons.forEach((button) => {
//   //   console.log(button.innerHTML);
//   //   button.onclick = function () {
//   //     counter += 1;
//   //     if (counter <= 2) {
//   //       console.log(button.innerHTML);
//   //       button.innerHTML = "X";
//   //     }
//   //   };
//   flipTwoCards(button);

//   //   flipBack(button);
// });

// function getCards(buttons) {
//   buttons.forEach((but, i) => {
//     // console.log(but.innerHTML);
//     cardArray[i] = but.innerHTML;
//   });
//   console.log(cardArray);
// }

// function flipTwoCards(button) {
//   button.onclick = function () {
//     counter += 1;
//     if (counter <= 2) {
//       console.log(button.innerHTML);
//       button.innerHTML = "X";
//     }
//   };

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// function flipBack(button) {
//   button.innerHTML = "ahoj";
// }

// function call() {
//   //   let x = console.log("calling");
//   //   setTimeout("ahoj", 1000);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("ahoj");
//     }, 2000);
//   });
// }

// async function asyncCall(button) {
//   let firstCall = console.log(`first call ${button}`);
//   const result = await flipTwoCards(button);
//   console.log(result);
// }

// // you can click on button 2 after the first button is clicked
// let array = ["A", "B", "C"];
// clickButton1();

// function clickButton1() {
//   button1.onclick = function () {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(
//           array.forEach((ar) => {
//             console.log("waited");
//           })
//         );
//       }, 2000);
//     });
//   };
// }

// async function clickButton2() {
//   let result = await clickButton1();
//   console.log(result);
// }
