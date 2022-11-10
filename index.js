//https://www.youtube.com/watch?v=8dWL3wF_OMw&t=14856s&ab_channel=BroCode

/*
document.getElementById('p1').innerHTML = 'Hello p1'
document.getElementById('p2').innerHTML = 'Hello p2'
document.getElementById('p3').innerHTML = 'Hello p3'
*/

// Window promt

// let username = window.prompt('Hello how are you?')
// console.log(username)

// let username;

// document.getElementById('myButton').onclick = function() {
//   username = document.getElementById('myText').value;
//   console.log(username)

// }

// TYPE CONVERTION

// let age = window.prompt('how old are you')

// console.log(typeof age)
// age = Number(age)
// age += 1;
// console.log(typeof age)
// console.log('HP', age, "years")

// MATH

// let x = 3.14;

// x = Math.round(x);

// CHECKBOX PROPERTY

// {
//   /* <label for="visa">Visa</label>
// <input type="radio" name="card" id="visa" />
// <label for="masterCard">masterCard</label>
// <input type="radio" name="card" id="masterCard" />
// <label for="applePay">applePay</label>
// <input type="radio" name="card" id="applePay" /> */
// }

// const visa = document.getElementById("visa");
// const masterCard = document.getElementById("masterCard");
// const applePay = document.getElementById("applePay");
// const submitBtn = document.getElementById("btn");

// submitBtn.onclick = function () {
//   if (visa.checked) {
//     console.log("Visa payment");
//   } else if (masterCard.checked) {
//     console.log("Mastercard payment");
//   } else if (applePay.checked) {
//     console.log("Applepay payment");
//   } else {
//     console.log("Please select payment method");
//   }
// };

// NUMBER GUESSING GAME

// const submitButton = document.getElementById('submitButton')


 
// // do{
// //     const guessNumber =1;
// //     const answer = 1;
// // // something
// // // guess number - enter number and press button
// // // do it again and again until the number is = to answer
// // console.log('delam')
// let counter = 0;
// submitButton.onclick = function() {
//     counter +=1;// not working

//     let textField = document.getElementById('input')
//     const answer = Math.floor(Math.random() * 5) + 1;
    

//     console.log(answer)
//     console.log(textField.value)

//     if(answer != textField.value){
//         console.log('Try again')
//         textField.value = "";
//         // counter +=1;
//     }
//     else{
//         // counter +=1;
//         alert(`Congratulation, you are the winner. It took you ${counter} attempts`)
//     }
   
    
// // }while(guessNumber === answer)
// }

// TEMPERATURE CONVERTION
function toCelsius(temperature){
return (temperature - 32) * (5/9)
}

function toFahrenheit(temperature){
return temperature * 9 / 5 + 32
}

let temperature = document.getElementById('textBox')

const submitBtn = document.getElementById('submitButton')

const toCesiusRadio = document.getElementById('cButton')

const toFahrenheitRadio = document.getElementById('fButton')

submitBtn.onclick = function() {
 temperature = temperature.value

 if(toCesiusRadio.checked){
    temperature = toCelsius(temperature)
    console.log(temperature)
 }
 else if(toFahrenheitRadio.checked){
    temperature = toFahrenheit(temperature)
    console.log(temperature)
 }
 else{
    alert('Please choose one of the options.')
 }


}










