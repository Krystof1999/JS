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
// function toCelsius(temperature){
// return (temperature - 32) * (5/9)
// }

// function toFahrenheit(temperature){
// return temperature * 9 / 5 + 32
// }

// let temperature = document.getElementById('textBox')

// const submitBtn = document.getElementById('submitButton')

// const toCesiusRadio = document.getElementById('cButton')

// const toFahrenheitRadio = document.getElementById('fButton')

// let resultLabel = document.getElementById('temperatureLabel')

// submitBtn.onclick = function() {
//  if(toCesiusRadio.checked){
//    temperature = temperature.value
//    temperature = Number(temperature)
//     temperature = toCelsius(temperature)
//     console.log(temperature)
//     resultLabel.innerHTML = temperature
//  }
//  else if(toFahrenheitRadio.checked){
//    temperature = temperature.value
//    temperature = Number(temperature)
//     temperature = toFahrenheit(temperature)
//     console.log(temperature)
//     resultLabel.innerHTML = temperature
//  }
//  else{
//     resultLabel.innerHTML = 'Select a unit'
//  }

// }

// SPREAD OPERATOR ...
// z array dostanu hotony jedotlive
// ze stringu dostanu pismena jednotlive

// let numbers = [1, 2, 3, 4, 5, 6, 7]

// console.log(...numbers)

// REST PARAMETERS ...
// do funkce nedam parametry number1 number2. Vezme to vsechny parametry

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// let f = 5;

// console.log(sum(a,b,c,d,e,f))

// function sum(...numbers){
// let total = 0;

// for(let number of numbers){
//    total += number
// }

// return total;
// }

// CALLBACK FUNCTION

// // sum(2, 3, something)
// sum(2, 5, displayConsole); // udela sum 2 a 5 a az potom udela displayConsole funkci

// function sum(x, y, callBack){
//    let resutl = x + y;
//    callBack(resutl) // to se pak dosadi do displayConsole(sem)
// }

// function displayConsole(output){
//     console.log(output)
// }

// array.forEach(element => {

// });

// // FOR EACH

// let students = ['student1', 'student2', 'student3']

// // students.forEach((student, idx) => {
// //    console.log(student + idx)
// // })

// students.forEach(displayStudents)

// function displayStudents (student, idx) {
// console.log(student + "student index: " + idx)
// }

// ARRAY MAP
// pro kazdy element v array udela callback funkci a vytvori novy array

// let numbers = [1, 2, 3, 4, 5]
// let squares = numbers.map(square);

// // console.log(square(numbers)) // not working

// squares.forEach(print)

// function square(element){
//    return Math.pow(element, 2);
// }

// function print(element){
//    console.log(element)
// }

// ARRAY FILTER METHOD

// let ages = [11, 15, 16, 17, 20, 21 , 35, 89]
// let adults = ages.filter(checkAge)

// adults.forEach(print)

// function checkAge(element){
//    return element > 18
// }

// function print(element){
//    console.log(element)
// }

// ARRAY REDUCE
// z array udela jednu hodnotu

// let prices = [11, 10, 15, 20]
// let total = prices.reduce(totalPrice)

// console.log(total)

// function totalPrice(total, element){
//    return total + element;
// }

// SORTING NUMBERS IN ARRAY

// let grades = [90, 10, 50, 30, 70]
// grades = grades.sort(descendingSort)

// grades.forEach(print)

// function descendingSort(x, y){
//    return y - x;
// }

// function ascendingSort(x, y){
//    return x - y;
// }

// function print(element){
//    console.log(element)
// }

// ARROW FUNCTION

// // original

// const percent = function (x, y) {
//   return (x / y) * 100;
// };

// console.log(`${percent(37, 50)}`);

// // arrow function

// const percent2 = (x, y) => (x / y) * 100;

// console.log(`${percent2(37, 50)}`);

// SHUFFLE ARARY

// const cards = ["A", "2", "3", "4", "5", "6"];

// shuffle(cards);
// console.log(cards);

// function shuffle(array) {
//   let currentIndex = array.length;

//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }

//   return array;
// }

// NESTED FUNCTIONS

// nemam pristup k nested functions primo. musim zavolat hlavni funkci pod kterou jsou nested funkce

// let userName = "KB";
// let userInbox = 0;

// login();

// function login() {
//   displayUserName();
//   displayUserInbox();

//   function displayUserName() {
//     console.log(`Welcome ${userName}`);
//   }
//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new message`);
//   }
// }

// continue 48
