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

let age = window.prompt('how old are you')

console.log(typeof age)
age = Number(age)
age += 1;
console.log(typeof age)
console.log('HP', age, "years")