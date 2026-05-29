// arrow function/ fat arrow (ES6)
// closure function
// Array Methods ES6

// Array prop & methods
let arr = [10, 2, 4, 5, 10, 200, 600]; //(mutable)

console.log(arr.length);

// push() & pop ()
arr.push(100, 500); // new element in the end
console.log(arr);

arr.pop(); //delete new element
arr.pop();
console.log(arr);

// shift(), unshift ()
arr.unshift(200, 600); //add new element in the start
console.log(arr);

arr.shift();
arr.shift();
console.log(arr);

// splice(): add & delete in the middle of array
// arr.splice(2, 1, 400, 500); //start of the index, count of delete, comma seperated new elements
// console.log(arr);

// delete
// arr.splice(2, 1)

// add
// arr.splice(2, 0, 200)

console.log(arr.slice(1, 4)); //extract array from 1st till 3rd index
console.log(arr.includes(200));
console.log(arr.concat(["green", "pink", "red"], [90, 19, 39])); //returning a new array

arr.reverse();
console.log(arr);

// convert array to string
let nums = [10, 2, 4, 5, 7];
console.log(nums.join("*"));
console.log(nums.join(""));
console.log(nums.join());

// string to array
let str = "hello world";
console.log(str.split(" "));
console.log(str.split(""));

// array of objects
let products = [
  {
    id: 1,
    price: 90,
  },
  {
    id: 2,
    price: 10,
  },
];

// function declaration
add();
function add() {
  console.log(10 + 20);
}
add();

// addToCart(90); //hoisting will not work

// function expression
const addToCart = function (pid) {
  console.log(pid + " added to the cart!");
};

addToCart(90);

// first class function/objects: functions as values (to a variable and callback function)

// pure function(same input -> same output) vs
const total = function (a, b, c, d) {
  console.log(a + b + c + d);
};

total(100, 200, 400, 300);
total(100, 200, 400, 300);

// impure function
let x = 100;
const sum = function (a, b, c) {
  console.log(a + b + c + x);
};

sum(20, 4, 50);

// impure function
console.log(Math);
// Math.random();

// callback function: a function passed as an argument to another function
// Application: Timing events, dom methods, promises
function result(r) {
  console.log(r);
}

function sumNumbers(a, b, c) {
  const r = a + b;
  c(r); //call the callback function
}

// callback parameter
sumNumbers(10, 20, function (result) {
  console.log(result);
});

sumNumbers(20, 40, result);

// high ordered function: any function which takes another function as a arguemnt or return a function
// Application throttling, debouncing, search technique

// this keyword: reserved keyword. points to some object based on where it is sitting my code
console.log(this); //refers to global object

function random() {
  console.log(this); // (window) //this will refer to owner object of function
}

random();

let person = {
  firstName: "alina",
  lastName: "joe",
  age: 20,
  fullName: function () {
    console.log(this.firstName + " " + this.lastName); //person
  },
};

console.log(person.firstName);
person.fullName();

// "use strict"
// console.log(this);//undefined

// String Methods (immutable)
let strVal = "     hello world   hello    ";
strVal[0] = "u";
console.log(strVal);

console.log(strVal.length);
console.log(strVal.toLowerCase());
console.log(strVal.toUpperCase());
console.log(strVal.trim());

// if not found, -1
console.log(strVal.search("world")); //return the indexof specfied word. index of "w"
console.log(strVal.indexOf("world", 15)); //start searching from left
console.log(strVal.lastIndexOf("hello"));

console.log(strVal.slice(1, 6)); //return the string from 1st till 5th index
console.log(strVal.includes("world"));
console.log(strVal.startsWith("     h"));
console.log(strVal.endsWith("o"));

// "Admin@gmailcom".toLowerCase() === "admin@gmail.com".toLowerCase()
