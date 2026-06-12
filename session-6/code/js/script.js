// web storages (client storage)

// call()
let common = {
  id: 1,
  details: function (countryOne, countryTwo) {
    console.log(
      this.firstname + " " + this.age + " " + countryOne + " " + countryTwo,
    );
  },

  detail: function () {
    console.log(this.id);
  },
};

common.detail();

let person = {
  firstname: "alina",
  age: 20,
};

common.details.call(person, "India", "USA", "Canada");

// apply()
common.details.apply(person, ["India", "Canada"]);

// Math = {
//     max: function (rest operator/arguments) {
//     }
// }

console.log(Math.max(10, 2, 4, 50, 100));

let nums = [10, 2, 4, 5, 200, 50, 60];
console.log(Math.max.apply(null, nums));

// bind()
let emp = {
  salary: 10,
  id: 1,
  data: function () {
    console.log("EmpId: " + this.id + " is withdrawing " + this.salary);
  },
};

let fun = emp.data.bind(emp);
console.log(fun);
fun();

// ES6 Features
// Template strings  (``)
let str = `hello
world`;

console.log(str);

// variable & expression substitution
firstName = "Alex";
lastName = "Joe";
age = 20;
city = "Pune";

console.log(
  "My name is " + firstName + " " + lastName + " is living in " + city + ".",
);

console.log(
  `My name is ${firstName} ${lastName}, living in ${city} ` + `hello`,
);

// Rest Operator(...): get indefinite number of arguments in an arr (replacement of arguments)
add = (...a) => {
  console.log(a);
};

add(10, 2, 20, 50, 60, 100);
add(10, 293, 48, 48);

// Spread(...): shallow copy
// for object
let obj = {
  a: 10,
  b: 20,
  detail: () => {},
};

// let objTwo = obj;
// objTwo.a = 20;
// console.log(obj, objTwo);

// using spread operator
let objTwo = { ...obj, z: 100, a: 20 };
console.log(obj, objTwo);

// for arrays
let one = [10, 20, 30];
let two = [...one, obj, 100, 200];
console.log(two);

// re-structuring of object & arrays
let first = "alaya";
let last = "joe";
function sample() {}

// property shorthand-> property and variable name is same
const newObj = {
  first,
  last,
  sample,
};

console.log(newObj);

let a = 10,
  b = 20;
let arr = [a, b];
console.log(arr);

// de-structuring of arrays & objects
let employee = {
  id: 1,
  isVerified: true,
  contact: {
    address: {},
  },
};

const { id, isVerified } = employee;
console.log(id, isVerified);

// for arrays
let colors = ["pink", "lavender", "orange", "white", "blue", "black"];
const [x, y, , ...z] = colors; //rest operator
console.log(x, y, z);

// Debugging
// console.log()
// breakpoints

// JSON: javascript object notion
console.log(JSON.stringify(colors));
console.log(typeof JSON.stringify(colors));

console.log(JSON.stringify(employee));

let empObj = JSON.stringify(employee);
console.log(JSON.parse(empObj));

let colorArr = JSON.stringify(colors);
console.log(JSON.parse(colorArr));
