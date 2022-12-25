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

// MAP

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["jacket", 10],
// ]);

// store.get("t-shirt");
// store.set("socks", 40);
// store.delete("socks");
// console.log(store.has("socks"));
// store.forEach((value, key) => console.log(`${key} ${value}`));

// OBJECT

// const car = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log("You drive the car");
//   },
//   breake: function () {
//     console.log("You are braking");
//   },
// };

// console.log(car.log);
// console.log(car.color);
// console.log(car.year);

// car.drive();
// car.breake();

// THIS

// const car1 = {
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// const car2 = {
//   model: "Corvett",
//   color: "red",
//   year: 2023,

//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// car1.drive();
// car2.drive();

// CLASS

// class Player {
//   score = 0;

//   pause() {
//     console.log("You paused the game");
//   }

//   exit() {
//     console.log("You exited the game");
//   }
// }

// const player = new Player();

// console.log(player.score);

// player.pause();

// CONSTRUCTOR

// class Student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }
//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const student = new Student("Petr", 32, 3.2);
// const student2 = new Student("Adam", 12, 31.2);
// console.log(student.name);
// student.study();

// STATIC
// patri ke classe ne k objektu.
// nemusim vytvaret new Object(), ale rovnou static funkci zavolam

// class Car {
//   static numberOfCars = 0;
//   constructor(model) {
//     this.model = model;
//     Car.numberOfCars += 1;
//   }

//   static startRace() {
//     console.log("You have started");
//   }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("BMW");
// const car3 = new Car("Audi");
// const car4 = new Car("Audi");

// console.log(Car.numberOfCars);

// Car.startRace();

// INHERITANCE

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`This${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This${this.name} is sleaping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal {
//   name = "fish";

//   fly() {
//     console.log(`This${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// fish.sleep();
// fish.run(); // fish does not have run function -> this will not work

// SUPER

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 400);

// GET, SET

// class Car {
//   constructor(power) {
//     this._gas = 25;
//     this._power = power;
//   }
//   get power() {
//     return this._power;
//   }
//   get gas() {
//     return this._gas;
//   }
//   set gas(value) {
//     if (value > 50) {
//       value = 50;
//     }
//     this._gas = value;
//   }
// }

// let car = new Car(400);

// console.log(car.power);
// console.log(car.gas);

// Object as argumetn

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Skoda", 2020, "white");
// const car2 = new Car("vw", 2008, "blue");

// changeColor(car1, "red");
// displayCar(car1);

// function changeColor(car, color) {
//   car.color = color;
// }

// function displayCar(car) {
//   console.log(car);
// }

// ARRAY OF OBJECTS

// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Skoda", 2020, "white");
// const car2 = new Car("vw", 2008, "blue");
// const car3 = new Car("vw", 2008, "blue");
// const car4 = new Car("vw", 2008, "blue");

// const cars = [car1, car2, car3, car4];

// // writeArray(cars);
// writeArray2(cars);

// function writeArray(cars) {
//   cars.forEach((car) => {
//     console.log(car);
//   });
// }

// function writeArray2(cars) {
//   for (let car of cars) {
//     console.log(car);
//   }
// }

// ANONYMOUS OBJECT

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }

// // normal way
// let card1 = new Card("A", "Hearts");
// let card2 = new Card("A", "Spades");
// let card3 = new Card("A", "Clubs");
// let card4 = new Card("A", "Clubs");
// let card5 = new Card("A", "Clubs");

// let cards = [card1, card2, card3, card4, card5];

// console.log(card1.value + card1.suit);
// console.log(cards[0].value + cards[0].suit);

// // anonymous way

// let cards2 = [
//   new Card("A", "Hearts"),
//   new Card("A", "Spades"),
//   new Card("A", "Clubs"),
//   new Card("A", "Clubs"),
// ];

// console.log(cards2[0].value + cards2[0].suit);

// // for each method to write the array (not connected to anonymoous)

// cards2.forEach((card) => console.log(card.value + card.suit));

// ERROR HANDELING

// try {
//   let x = window.prompt("enter a number");
//   x = Number(x);

//   if (isNaN(x)) throw "That was not a number";
//   if (x == "") throw "That was empty";

//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// }

// finally{
//   console.log("This always executes")
// }

// SET TIMEOUT

// let item = "cryptocurrency";
// let price = 420;

// let timer1 = setTimeout(firstMessage, 4000, item, price);
// let timer2 = setTimeout(secondMessage, 4000);
// let timer3 = setTimeout(thirdMessage, 4000);

// function firstMessage(item, price) {
//   alert(`first${item} ${price}`);
// }
// function secondMessage() {
//   alert("second");
// }
// function thirdMessage() {
//   alert("third");
// }

// document.getElementById("submitButton").onclick = function () {
//   clearTimeout(timer1, timer2, timer3);
//   alert("you have bought the course");
// };

// SET INTERVAL

// let count = 0;
// let max = window.prompt("enter number");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//   count += 1;
//   console.log(count);
//   if (count >= max) {
//     clearInterval(myTimer);
//   }
// }

// DATE OBJECT - CONTINUE
// let date = new Date();
// // let date = new Date(2023, 8, 12, 2, 34, 43, 5);

// // let year = date.getFullYear();
// // let dayOfMonth = date.getDate();
// // let dayOfWeek = date.getDay();
// // let month;
// // let hour;
// // let minutes;
// // let seconds;
// // let miliseconds;

// // date = date.toLocaleString();
// // console.log(date);

// function formatDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   //   console.log(`${month}/${day}/${year}`);
//   return `${month}/${day}/${year}`;
// }
// // formatDate(date);

// function formatTime(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let amOrPm = hours >= 12 ? "pm" : "am";

//   hours = hours % 12 || 12;

//   console.log(`${hours}:${minutes}:${seconds} ${amOrPm}`);
//   return `${hours}:${minutes}:${seconds} ${amOrPm}`;
// }

// formatTime(date);

// // CLOCK PROGRAM

// const label = document.getElementById("clockLabel");

// update();
// setInterval(update, 1000);

// function update() {
//   const date = new Date();
//   label.innerHTML = formatTime(date);

//   function formatTime(date) {
//     hours = date.getHours();
//     minutes = date.getMinutes();
//     seconds = date.getSeconds();

//     return `${hours}:${minutes}:${seconds}`;
//   }
// }

// CONSOLE TIME

// // start
// console.time("response time")

// // something
// setTimeout(() => console.log('hello', 3000))

// //end
// console.timeEnd('response time')

// PROMISE

// Object that encapsulated the result of an asynchronous operation
// let asynchronous methods return values like synchronous methods
// "I promise to return something in the future"

// the STATE is 'pending' then: 'fulfilled' or 'rejected'
// the RESULT is what can be returned
// 2 parts producing and consuming

// first example
// const promise = new Promise((resolve, reject) => {

//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("File loaded")
//     }
//     else(
//         reject("File is NOT loaded")
//     )
// })

// promise.then((value) => console.log(value)) // value is file loaded or file not loaded
//         .catch(error => console.log(error)) //pro rejected

// second example

// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time)
// })

// wait(3000).then(() => console.log("Thanks for waiting"))

// ASYNC
// makes a function return a Promise

// first option
// async function loadFile() {
//   let fileLoaded = true;

//   if (fileLoaded) {
//     return "File loaded";
//   } else {
//     return "File not loaded";
//   }
// }

// loadFile()
//   .then((value) => consolo.log(value))
//   .catch((error) => console.log(error));

// second option

// function loadFile() {
//   let fileLoaded = true;

//   if (fileLoaded) {
//     return Promise.resolve("File loaded");
//   } else {
//     return Promise.reject("File not loaded");
//   }
// }

// loadFile()
//   .then((value) => consolo.log(value))
//   .catch((error) => console.log(error));

// AWAIT - makes an async function wait for a Promise

// async function loadFile() {
//   let fileLoaded = false;

//   if (fileLoaded) {
//     return "File loaded";
//   } else {
//     throw "File not loaded";
//   }
// }

// async function startProcess() {
//   try {
//     let message = await loadFile();
//     console.log(message);
//   } catch (error) {
//     console.log(error);
//   }
// }

// startProcess();

// ES6 MODULES
// // in to the html <script type="module" src="index.js"></script>
// import { PI, getCircumference, getArea } from "./math_util.js"; // first option
// // import * as MathUtil from "./math_util.js"; // second option - in the code has to be with MathUtil.PI ...

// console.log(PI);

// let circumference = getCircumference(10);
// console.log(circumference);

// let area = getArea(10);
// console.log(area);
// math_util.js

// DOM - DOCUMENT OBJECT MODEL (API)
// interface for changing the content of the page

// console.log(document);
// console.log(document.title);
// console.log(document.URL);

// document.title = "New TItle";
// // document.location = "https://www.google.com";

// document.body.style.backgroundColor = "skyblue";
// document.getElementById('myDiv').innerHTML = "Hello"

// ELEMENT SELECTORS

//html
{
  /* <h1 id="MyTitle">This is title</h1>

<input type="radio" name="fruits" value="apple" checked="checked" />
<label for="apple">apple</label><br />
<input type="radio" name="fruits" value="orange" />
<label for="orange">orange</label><br />
<input type="radio" name="fruits" value="banana" />
<label for="banana">banana</label><br />

<ul>
  <li>carrots</li>
  <li>onions</li>
  <li>cucumber</li>
</ul>

<div class="desserts">ice cream</div>
<div class="desserts">cake</div>
<div class="desserts">pie</div> */
}

// GETELEMENTBYID
// let element = document.getElementById('MyTitle')
// element.style.backgroundColor = "red"

// GETELEMENTSBYNAME
// let fruits = document.getElementsByName("fruits");

// console.log(fruits[0]); // apple
// console.log(fruits[1]); // orange
// console.log(fruits[2]); // banana

// fruits.forEach((fruit) => {
//   if (fruit.checked) {
//     console.log(fruit.value);
//   } else {
//     console.log(`it is not checked`);
//   }
// });

// GETELEMENTSBYTAGNAME

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "blue";

// GETELEMENTSBYCLASSNAME

// let desserts = document.getElementsByClassName("desserts");
// desserts[0].style.backgroundColor = "red";

// QUERYSELECTOR

// let element = document.querySelector("#MyTitle");
// element.style.backgroundColor = "red";

// let element = document.querySelector(".desserts")
// let element = document.querySelector("li")
// let element = document.querySelector("[for]")

// QUERYSELECTOR ALL

// let elements = document.querySelectorAll("li");

// elements.forEach((element) => {
//   element.style.backgroundColor = "yellow";
// });

// DOM TRAVERSAL

// .firstElementChild
// .lastElementChild    pokud to je document.body.lastElementChild => bude to <script>
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)

// let element = document.querySelector("#vegetables");
// let child = element.parentElement; // the whole body
// let sibling1 = element.nextElementSibling;  //deserts
// let sibling2 = element.previousElementSibling; // fruit
// console.log(child);
// child.style.backgroundColor = "green";

// let element = document.querySelector("#fruit");
// // let child = element.children[0]

// // pro vypsani vsech children bez []
// let children = Array.from(element.children);

// children.forEach((child) => {
//   console.log(child.innerHTML);
// });

// ADD/CHANGE HTML ELEMENTS
// .innerHtmnl (vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1");
// // nameTag.innerHTML = window.prompt("Enter your title");
// nameTag.textContent = window.prompt("Enter your title"); //safer (user can not input virut in to the promt)
// document.body.append(nameTag);

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
// // myList.append(listItem); // at the bottom
// // myList.prepend(listItem); // at the top

// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);

//ADD/CHANGE CSS PROPERTIES

// const title = document.getElementById("title");

// title.style.backgroundColor = "red";

//EVENTS
// const element = document.getElementById('btn')
// element.onclick = doSomething;

// function doSomething() {
//   console.log("hello");
// }

// const element = document.body;
// element.onload = doSomething;

// const element = document.getElementById("textBox");
// element.onchange = doSomething;

// const element = document.getElementById('div')
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething; // nemusim pouzivat button
// element.onmouseup = doSomethingElse;

// . ADD EVENT LISTENER (event, function, useCapture)

// const innerDiv = document.getElementById('innerDiv')
// const outerDiv = document.getElementById('outerDiv')

// innerDiv.addEventListener('mouseover', changeRed);
// innerDiv.addEventListener('mouseout', changeGreen);

// function changeRed(){
//   innerDiv.style.backgroundColor = 'red'
// }

// function changeGreen(){
//   innerDiv.style.backgroundColor = 'green'
// }

// innerDiv.addEventListener('click', changeBlue); // nejprve se zmeni inner div a pak outer div
// outerDiv.addEventListener('click', changeBlue, true); // udela se to naopak

// function changeGreen(){
//   alert(`you selected ${this.id}`)
//   this.style.backgroundColor = 'blue'
// }

// SHOW/HIDE IMAGE

// const img = document.getElementById("img");
// const btn = document.getElementById("myButton");

// btn.addEventListener("click", () => {
//   if (img.style.display == "none") {
//     // img.style.visibility = 'visible' // this will save the space on the page
//     img.style.display = "block";
//   } else {
//     img.style.display = "none";
//   }
// });

// MOVING ELEMENT

// const movingDiv = document.getElementById("movingDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// // window.addEventListener("keydown", (event) => console.log(event.key)); // displays key that is pressed on the keyboard

// function move(event) {
//   switch (event.key) {
//     case "ArrowDown":
//       y += 5;
//       movingDiv.style.top = y + "px";
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
//       movingDiv.style.left = x + "px";
//       break;
//   }
// }

// ANIMATIONS
// const movingDiv = document.getElementById("movingDiv");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", begin);

// function begin() {
//   let timerID = null;
//   let x = 0;
//   let y = 0;
//   let degrees = 0;
//   let scaleX = 1;
//   let scaleY = 1;

//   timerID = setInterval(frame, 5);

//   function frame() {
//     // MOVEMENT
//     // if (x >= 200 || y >= 200) {
//     //   clearInterval(timerID);
//     // } else {
//     //   x += 1;
//     //   y += 1;
//     //   movingDiv.style.left = x + "px";
//     //   movingDiv.style.top = y + "px";
//     // }

//     // ROTATION
//     // if (degrees >= 360) {
//     //   clearInterval(timerID);
//     // } else {
//     //   degrees += 1;
//     //   movingDiv.style.transform = "rotateX(" + degrees + "deg)";
//     //   movingDiv.style.transform = "rotateY(" + degrees + "deg)";
//     //   movingDiv.style.transform = "rotateZ(" + degrees + "deg)";

//     //  ROTATE AND MOVE

//     // if (x >= 200 || y >= 200) {
//     //   clearInterval(timerID);
//     // } else {
//     //   degrees += 5; // make the spinnig faster
//     //   x += 1;
//     //   y += 1;

//     //   movingDiv.style.left = x + "px";
//     //   movingDiv.style.top = y + "px";
//     //   movingDiv.style.transform = "rotateZ(" + degrees + "deg)";
//     // }

//     // SCALE

//     // if (scaleX >= 2 || scaleY >= 2) {
//     if (scaleX <= 0.1 || scaleY <= 0.1) {
//       // shirnk
//       clearInterval(timerID);
//     } else {
//       // scaleX += 0.01;
//       // scaleY += 0.01;
//       scaleX -= 0.01; // shirnk
//       scaleY -= 0.01; // shirnk
//       movingDiv.style.transform = "scale(" + scaleX + ", " + scaleY + ")";
//     }
//   }
// }

// CANVAS

// DRAW LINES
// let canvas = document.getElementById("canvas");

// let context = canvas.getContext("2d");

// context.strokeStyle = "purple";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

// DRAW TRIANGLE

// context.strokeStyle = "grey";
// context.fillStyle = "yellow";
// context.lineWidth = 10;

// context.beginPath();

// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);

// context.stroke();
// context.fill();

// DRAW RECTANGLE
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "blue";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);

// DRAW CIRCLE
// (x, y, r, sAngle, eAngle, counterclockwise)
// context.fillStyle = "blue";
// context.lineWidth = 10;
// context.strokeStyle = "darkblue";
// context.beginPath();

// context.arc(250, 250, 200, 0, 2 * Math.PI);

// context.stroke();
// context.fill();

// DRAW TEXT
// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("You win", canvas.width / 2, canvas.height / 2);

//! WINDOW
// window is interface to talk to the web browser the DOM is a property of the window

// console.log(window)
// console.log(window.innerWidth)
// console.log(window.innerHeight)
// console.log(window.scrollX)
// console.log(window.scrollY)

// console.log(window .location.href);
// window.location.href = "https://google.com" // redirect to the new http adress
// console.log(window.location.hostname) // local IP adress
// console.log(window.location.pathname)

// with button
// const myBtn = document.querySelector('#myBtn')

// myBtn.addEventListener('click', () => { window.open("https://google.com")})
// myBtn.addEventListener('click', () => { window.close()})
// myBtn.addEventListener('click', () => { window.print()})

// window.alert('hello')
// window.confirm('press ok to continue')
// let age = window.prompt('enter your age')
// if(age < 18){
//   window.alert('you must be 18+ to enter')
//   window.close()
// }

//! Cookies - not finished
// document.cookie =
//   "firstName=SpongeBob; expires=Sunday, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie =
//   "lastnName=SquarePants; expires=Sunday, 1 January 2030 12:00:00 UTC; path=/";
// console.log(document.cookie);

// setCookie("email", "email@cz.cz", 365);
// console.log(document.cookie);

// deleteCookie("firstName");
// deleteCookie("lastnName");
// deleteCookie("email");

// function to create cookie

// function setCookie(name, value, dayToLive) {
//   const date = new Date();
//   date.setTime(date.getTime() + dayToLive * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// function deleteCookie(name) {
//   setCookie(name, null, null);
// }

// setCookie("firstName=SpongeBob", "email@cz.cz", 365);
// setCookie("firstName=blabla", "email2@cz.cz", 365);
// // console.log(document.cookie);

// getCookie("firstName");

// function getCookie(name) {
//   const cDecoded = decodeURIComponent(document.cookie);
//   console.log(cDecoded);
// }

//! Array tutorial
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
//! Filter method
// //? 1. Get characters with mess greater than 100
// const greaterThan100 = characters.filter((character) => {
//   return character.mass > 100;
// });
// console.log(greaterThan100);

// //? 2. Get characters with height less than 200
// const heightLessThen200 = characters.filter((character) => {
//   return character.height < 200;
// });
// // // second option how to write that
// // const heightLessThen200 = characters.filter(
// //   (character) => character.height < 200
// // );

// // console.log(heightLessThen200);
// // s
// //? 3. Get all male characters
// const males = characters.filter((character) => character.gender == "male");

// console.log(males)

// //? 4. Get all famele characters
// const female = characters.filter((character) => character.gender == "female")
// console.log(female)

//! Array Reduce - (height and mass are as numbers not string for this)
// ? 1. Get total mass of all characters
// const totalMass = characters.reduce((acc, cur) => {
//  return acc + cur.mass;
// }, 0);
// // second option how to write this
// const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)
// console.log(totalMass)

// //? 2. Get total height of all characters
// const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
// console.log(totalHeight)

// ? 3. Get total number of characters by eye color
// const charactersByEyeColor = characters.reduce((acc, cur) => {
//   const color = cur.eye_color;
//   if (acc[color]) {
//     acc[color]++;
//   } else {
//     acc[color] = 1;
//   }
//   return acc;
// }, {});

// console.log(charactersByEyeColor);

// //? 4. Get total number of characters in all the character names

// const charactersInAllCharactersNames = characters.reduce((acc, cur) => acc + cur.name.length, 0)
// console.log(charactersInAllCharactersNames)

//! Array Map method
// //? 1. Get array of all names
// const allNames = characters.map((char => char.name))
// console.log(allNames)

// //? 2. Get array of all heights
// const allHeights = characters.map((char => char.height))
// console.log(allHeights)

// //? 3. Get array of objects with just name and height properties
// const nameAndHeight = characters.map((char) => char.name + " " + char.height);
// console.log(nameAndHeight);

// const minifiedCharacters = characters.map((char) => ({
//   name: char.name,
//   height: char.height
// }))
// console.log(minifiedCharacters)
//? 4. Get array of all first names
// const nameAndHeight = characters.map((char) => {
//   const names = char.name
//   const space = char.name.indexOf(' ')
//   const final = names.substring(0, space)
//   console.log(final);
// });

// //* second option for split
// const nameAndHeightspitMethod = characters.map((char) => char.name.split(' ')[0]) // [0] first names // [1] last names
// console.log(nameAndHeightspitMethod)

//! Array Sort method - (height and mass are as numbers not string for this)
//? 1. Sort by mass
// // If the result is negative A is sorted before B
// // If the result is positive B is sorted before A
// const sortedByMass = characters.sort((a,b) => {
//   // return a.mass - b.mass // sorted form the lowest
//   return  b.mass - a.mass // sorted from the heighest
// })
// console.log(sortedByMass)
//? 2. Sort by height
// const sortedByHeight = characters.sort((a, b) => a.height - b.height);
// console.log(sortedByHeight);
//? 3. Sort by name
// const sortedByName = characters.sort((a, b) => {
//   // if(a.name < b.name) return -1;         //from A to Z
//   // return 1;
//   if(a.name < b.name) return 1;             //from Z to A
//   return -1;
// });
// console.log(sortedByName)
//? 4. Sort by gender
// const sortedBygender = characters.sort((a, b) => {
//   if (a.gender == "female") return -1;     // female first
//   return 1;
//   // if (a.gender == "female") return 1;   // male first
//   // return -1;
// });
// console.log(sortedBygender);

//! Array Every method
//? 1. Does every character have blue eyes?
// const allBlueEyes = characters.every(
//   (character) => character.eye_color == "blue"
// );  // return false becouse not every character has blue eyes
// console.log(allBlueEyes);

//? 2. Does every character weight more than 40?
// const weightMoreThan40 = characters.every((char) => char.mass > 40)
// console.log(weightMoreThan40)
//? 3. Is every character shorter than 200
// const heightMoreThan200 = characters.every((char) => char.height < 200)
// console.log(heightMoreThan200)
//? 4. is every character male?
// const everymale = characters.every((char) => char.gender == 'male')
// console.log(everymale)

//! Array Some method
//? 1. Is there at least one male character?
// const oneMaleCharacter = characters.some(
//   (character) => character.gender == "male"
// );
// console.log(oneMaleCharacter);

//? 2. Is there at least one character with blue eyes?
// const oneBlueEyes = characters.some((char) => char.eye_color == "blue");
// console.log(oneBlueEyes);
//? 3. Is there at least one character taller than 200?
// const oneTaller = characters.some((char) => char.height > 200)
// console.log(oneTaller)
//? 4. Is there at least one character that has mass less than 50?
// const oneHewier = characters.some((char) => char.mass < 50)
// console.log(oneHewier)
