const date = new Date();

const x = date.getTime();

var countDownDate = new Date("2017-11-17T21:30:30Z").getTime();
var distance = countDownDate - x;

// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

console.log(date);
console.log(x);
console.log(countDownDate);
console.log(distance);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

// document.getElementById("hoursLabel").innerHTML = hours + ":";
// document.getElementById("minutesLabel").innerHTML = minutes + ":";
// document.getElementById("secondsLabel").innerHTML = seconds;

// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
