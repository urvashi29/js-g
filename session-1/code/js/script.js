// variables
// Primitive datatypes: number, string, boolean, null, undefined
var x = 10; //number
console.log(typeof x);

var firstName = "hid diowid "; //string
console.log(typeof firstName);

var isMarried = false; // T OR F
console.log(typeof isMarried);

var y = null;
console.log(typeof y); //object

var z; //declaration without initialization
console.log(z);
console.log(typeof z); //undefined

// Non-primitive: array, object, function
// indexing starts from 0
var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
console.log(typeof numbers[0]);
console.log(typeof numbers); //object

console.log(Array.isArray(numbers)); //verification of array

console.log(y == null);

// nullish operator (2020)
var result = y ?? "default value";
console.log(result);

// objects : key value pair
var person = {
  firstName: "Alina",
  lastName: "Smith",
  age: 20,
  contact: {
    email: "admin@gmail.com",
  },
  nums: [10, 20, 30],
};

console.log(person);
console.log(typeof person); //object

// arrays of object
var products = [
  {
    name: "laptop",
    price: 1000,
    description: "High-performance laptop",
    id: 1,
  },
  {
    name: "mouse",
    price: 25,
    description: "Wireless mouse",
    id: 2,
  },
];

console.log(products);

// function: first class objects
function addToCart(productId) {
  console.log("Adding product to cart:", productId);
}

var pid = "P-789";
addToCart(pid); //arguments

// let vs const vs var
// global scope(accessibility)
var a = 10; //

test();

// function declartion
function test() {
  var b = 20; //local scope
  console.log(a + b);
}

// console.log(b);//error
test();

// t();//error
// function expression
var t = function () {
  console.log(10 + 100);
};

t();

// let & const are block scoped
// {

// }

// if() {

// }

// for() {

// }

// 1. let are block scoped
var a = 20; //global
{
  let a = 30; //block
  a = 50;
  console.log(a); //
}
console.log(a); //

// 2. re-declaration with let
// let a = 10;
// console.log(a);//error

// 3. hoisting (temporal dead zone)
// i = 100; //initialisation
// console.log(i); //
// let i; //declaration

// const
// 1. const: create constant reference,  are block scoped
var z = 20;
{
  const z = 40;
  // z = 100;//error (can't reassign a value)
  console.log(z);
}

console.log(z);

// 2. re-declaration with const
// const a = 10;
// console.log(a);//error

// 3. hoisting (temporal dead zone)
// i = 100; //initialisation
// console.log(i); //
// const i; //declaration

// hoisting: taking something at the top - declaration
y = 100; //initialisation
console.log(y); //
var y; //declaration

// initialisation is not hoisted
var t;
console.log(t);
t = 100;
