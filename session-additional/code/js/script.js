// Primitive
var num = 10; //declaration
var numTwo = 20.78;
console.log(num);
console.log(numTwo);

console.log(typeof num);
console.log(typeof numTwo);

// string: '' or "" or ``(ES6) (2015)
var firstName = 10;
firstName = 20; //re-assigning a value
console.log(firstName);
console.log(typeof firstName);

//re-initialization re-declare
var firstName = " Javascript is a prog language. ";
console.log(firstName);
console.log(typeof firstName);

// boolean
var isVerified = true;
console.log(isVerified);
console.log(typeof isVerified);

// null
var x = null;
console.log(x); //null
console.log(typeof x); //object

// undefined
var z;
console.log(z); //undefined
console.log(typeof z); //undefined

// Non-primitive
// 1. object literal
var person = {
  id: 1,
  firstName: "Alex",
  age: 20,
  gender: "M",
  contact: {
    email_address: "alex@gmail.com",
  },
};

console.log(person);
console.log(person.age);
console.log(person["age"]); //
console.log(typeof person);

console.log(JSON.stringify(person));

// Arrays
// indexing start with 0
var colors = ["green", "pink", "orange", "white"];
var mix = [null, undefined, "string", 10, {}, []];

console.log(colors);
console.log(typeof mix); //object

console.log(colors[0]); //green
console.log(colors[10]); //undefined

// verfication of arrays
console.log(Array.isArray(colors));

var t = null;
console.log(t == null);

// nullish operator
var result = t ?? "hello";
console.log(result);

console.log(addValues(90, 10));

// Function decalartion
function addValues(a, b) {
  //local scope
  var output = a + b;
  return output;
}

// Scope: accesibility
// console.log(output);//error

// global scope
var r = addValues(10, 20);
console.log(r);
console.log(addValues(20, 40));

// addValues(10, "", {}, [], function() {})

// hoisting (decalartions are hoisted)
y = 10; //assign a value
console.log(y);
var y; //declaration

//intialisation are not hoisted
var i;
console.log(i); //
i = 20;
console.log(i); //

// module.exports = addValues;
// var addValues = require("./filepath")

// variables: let, var, const
// let: declare variable with block scope
// 1.
// {} or for() {} or if() {}
var sample = 20;
{
  let sample = 30;
  sample = 20; //re-assign a value
  console.log(sample);
}

console.log(sample);

// 2. re-declare with the same name
// let sample = 100
// console.log(sample); //error

// 3. hoisting is not working (temporal dead zone)
// y = 10;
// console.log(y);
// let y;

// const: declare variable with block scope (reference will be constant)
var y = 90;
{
  const y = 100;
  //   y = 2000;//re-assign a value is not allowed
  console.log(y);
}
console.log(y);

const arr = [10, 2, 3, 4, 5, 100];
arr[0] = 100;
// arr = [10, 2,10, 20];//error
console.log(arr);

// 2. re-declare with the same name
// const sample = 100
// console.log(sample); //error

// 3. hoisting is not working (temporal dead zone)
// y = 10;
// console.log(y);
// const y;

// Operators
// Arithmatic operator
console.log(10 + 20);
console.log(20 - 10);
console.log(2 * 5);
console.log(2 ** 3);
console.log(100 / 2);
console.log(100 % 2);

// increment & decremement
x++; // x = x + 1
y--; // y = y - 1

// Assignment Operator (=)

// comparison operator (==, <=, >=, <, >, !=, ===, !==) return boolean value
let p = 10;
console.log(9 == "9"); //compare value
console.log(9 === "9"); //compare value & datatype (strict checking)
console.log(p >= 10);
console.log(p != "10"); //compare value
console.log(p !== "10"); //compare value & datatype (strict checking)

// Logical operators (||, &&, !): return boolean value
console.log(9 == "9" && 9 === "9");
console.log(9 == "9" || 9 === "9");
console.log(!(9 == "9"));

// numeric string: "898989"
// alpha: "huyiduidj"

// string opeartor  (+)
let str = "hello";
let strVal = "world";
console.log(str + strVal); //concatenate
console.log(10 + 20 + str);

// Implicit ceorsion (automatic type)
console.log("100" / 2);
console.log("100" - 2);
console.log("20" + 20);
console.log("20" - "hello"); //NaN
console.log([7, 9, 9] + { name: "alina" }); //concatenate
console.log(true + false > 2); //

// operator precedence
// brackets
// * /
// + -
// L -> R

// 1. check the operator precedence
// 2. if type of opearand:
//    a. if string is present and "+", concatenate
//    b. if string is numeric, convert it to number, otherwise NaN

// Explicit coersion

// convert string to number
console.log(Number("79"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("idyeiduo")); //NaN

console.log(parseInt("90.67"));
console.log(parseFloat(90.78));

// convert number to string
let numVal = 20;
console.log(numVal.toString()); //"20"

console.log(true.toString()); //"true"

// Practice
console.log(null == undefined); //true
console.log(null === undefined);

// ||: return first truth value, last falsy value if all are falsy
console.log(null || 1 || 0); //
console.log(null || undefined || 0);

// &&: return the first falsy value, return last truth value
console.log(null && 1);
console.log(1 && 2 && 3);
