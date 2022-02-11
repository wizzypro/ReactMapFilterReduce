var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
let testNumbers = numbers.map((x) => {
  return x > 10;
});

console.log("Map: " + testNumbers);

//Filter - Create a new array by keeping the items that return true.
let anotherTest = numbers.filter((x) => {
  return x > 10;
});

console.log("Filter: " + anotherTest);

//Reduce - Accumulate a value by doing something to each item in an array.
let reduceTest = numbers.reduce((accumulator, currentValue) => {
  console.log("CurrentValue: " + currentValue);
  console.log("Accumulator: " + accumulator);

  return accumulator + currentValue;
});

console.log(reduceTest);

//Find - find the first item that matches from an array.

let findTest = numbers.find((x) => {
  return x > 7;
});

console.log(findTest);

//FindIndex - find the index of the first item that matches.

let findIndexTest = numbers.findIndex((x) => {
  return x == 5;
});

console.log(findIndexTest);
