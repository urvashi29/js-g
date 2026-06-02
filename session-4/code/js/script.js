// OOPS
// IIFE / self-invoking function

// arrow function/ fat arrow (ES6)
// 1. syntax
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// function expression
// const newFun = () => {};

addArrayValues = (arr) => arr[0];

// same as
addArrayValues = (arr) => {
  return arr[0];
};

console.log(addArrayValues([10, 2, 4, 6]));

// 2. return

// 3. this keyword
let person = {
  details: () => {
    console.log(this); //window
  },
  detail: function () {
    console.log(this); //person
  },
};

person.details();
person.detail();

// 4. arguments (in arrow function, we don't have access to arguments object )
function subtract() {
  console.log(arguments);
  console.log(arguments[0], arguments[1], arguments[2]);
  console.log(arguments.length);
}

subtract(10, 20, 40);

multiply = () => {
  //   console.log(arguments); //error (rest opeartor(...))
};

multiply(10, 20, 30);

// closure function
// var count = 0;//global variable

function increment() {
  let count = 0;
  count += 1;
  console.log(count);
}

increment();
increment();

// using closure function
function incrementCount() {
  let count = 0; //lexical scope
  let colors = ["green", "red", "blue"];

  // return {
  //     getColors: () => {
  //         return colors;
  //     },
  //     incCount: () => {
  //         count += 1;
  //         console.log(count);
  //     }
  // }
  return function () {
    count += 1;
    console.log(count);
  };
}

let innerFunc = incrementCount();
console.log(innerFunc);
innerFunc();
innerFunc();

function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance += amount;
      console.log(balance);
    },
    withdraw: () => {},
    getBalance: () => {
      return balance;
    },
  };
}

let obj = bankAccount(5000);
obj.deposit(2000);
obj.getBalance();

function entertainmentApp() {
  let userType = "Guest";

  function userTypes(type) {
    userType = type;
    console.log(`Welcome ${userType} user! Enjoy the entertainment content.`);
  }

  return userTypes;
}

let closureFun = entertainmentApp();
closureFun("Premium");

//throttling, debouncing

// Array Methods ES6 : map(), filter(), forEach(), some(), every(), reduce(),find()

// map(): iterate over an array. return a new array
let arr = [1, 2, 3, 4, 5];

// callback parameter: (currentValue, index, array)
// const mapResult = arr.map((ele, index, array) => {
//   return ele * 2;
// });

// same as
const mapResult = arr.map((ele, index, array) => ele * 2);
console.log(mapResult); // [2, 4, 6, 8, 10]

// filter(): iterate over an array, return new array filled with all the elemenst that pass the conditions
const filterResult = arr.filter((ele) => ele === 2 || ele === 4);
console.log(filterResult);

// forEach(): iterate over an array. it doesn't return anything
arr.forEach((ele, index, array) => {
  console.log(index, array);
  console.log(ele * 2);
});

// find (): return first array element that pass the test
const findResult = arr.find((ele) => ele > 3);
console.log(findResult); // 4

// some(): return true if atleast 1 elements pass the test/condition
console.log(arr.some((ele) => ele > 3));

// every():  return true all elements pass the test/condition
console.log(arr.every((ele) => ele > 3));

// reduce(): reduce array to a single value
// [1, 2, 3, 4, 5];
const reduceResult = arr.reduce((total, ele) => {
  console.log(total, ele); //
  return total + ele;
}, 0);

console.log(reduceResult);
