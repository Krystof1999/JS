const array = [
  { id: 1, name: "adam" },
  { id: 2, name: "petr" },
];

const arr = Array(array);
console.log(arr);

const mapArr = arr.map((ar) => JSON.stringify(ar));

console.log(mapArr[0]);

// for (let i = 0; i < mapArr.length; i++) {
//   console.log(mapArr[i]);
// }
