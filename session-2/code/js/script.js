// Array & String Methods

// Arithmetic Operator
let a = 10;
let b = 20;
console.log(a + b); //addition
console.log(a - b); //subtraction
console.log(b / a); //division
console.log(b % a); //modulus
console.log(a * b);
console.log(2 ** 3); // 2 * 2* 2 -> 8
//  incremnet and decrement
a++; //a = a + a
b--; // b = b - 1
console.log(a, b);

// Assignment Operator (=)
let x = 20;
x += 5; //x = x + 5
console.log(x);

// Comparison Operators (return boolean value)
// ==, <=, >=, != , ===, !==, <, >
let y = 9;
let z = "9";
console.log(y == z); //compare values
console.log(y === z); //compare values and datatypes (strict checking)
console.log(y != 9); //compare values
console.log(z !== 9); //(strict checking) compare values and datatypes
console.log(z > 10);
console.log(y < 10);
console.log(z <= 9);

// Logical Operators (|| or && or !)
console.log(y == z && y === z); //if all are true, then it will be true, else false
console.log(y == z || y === z); //either condition has to be true
console.log(!(y === z)); //reverse the condition

// ternery operator ?: (replacement of if else)
let firstName = "Alina";
firstName == "Alina" ? console.log(firstName) : console.log("Not correct!");

// optional chaining (?.)
let user = {
  firstName: "alex",
  contact: {
    email: "admin@gmail.com",
  },
};

console.log(user.location?.city);
console.log(user.contact?.email);

// nullish operator (??)
let c = 20;
let result = c ?? user;
console.log(result);

// numeric: "0909090"
// alpha: "hiejfojef"
// non-numeric: "gduyheid**(("

// string operator (+)
let strOne = "hello";
let strTwo = "world";

// strOne[0] = 'i';//immutable
// console.log(strOne);

let r = strOne + strTwo;
console.log(r);
console.log(strOne + 10); //"hello10"
console.log(10 + 20 + strOne); //
console.log(strOne - 10); //NaN (not a number)

// Implicit coersion (automatic type conversion)
console.log("10" / 2); //5
console.log("20" + 20); //2020

// console.log(typeof(NaN))//number

// operator precendence
// ()
// * /
// + -
// L -> R

// rules:
// 1. check the operator precendence
// 2. Type of operand:
//  a. if it is string and '+' is present, then we will concatenate
//  b. if its a string and + is not present, check if type of string.
//  If it numeric string, convert it to number, else result is NaN

// Explicit coersion
// string to number
console.log(Number("10")); //10
console.log(Number("jdhj"));
console.log(parseFloat(10.89));
console.log(parseInt(90.76));

// number to string
let num = 90;
console.log(num.toString()); //"90"
console.log(num.toFixed(2));

// boolean to string and number
console.log(Number(true)); //
console.log(Number(false)); //

console.log(true.toString()); //"true"
console.log(false.toString()); //"false"

// Practice
console.log(true + false > 2); //false
console.log(false == null); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(null || 1); //return the first truth value
console.log(null || 0 || 1); //1
console.log(undefined || null || 0); //return the last falsy value

console.log(1 && 0 && 2); //return the first falsy value
console.log(null && 5); //null
console.log(1 && 2 && 3); //return the last truth value

console.log(true && "hello");
