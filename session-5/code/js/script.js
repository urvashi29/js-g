// call
// apply()
// bind()
// Template strings  (``)
// variable & expression substituition

// IIFE or self-invoking functions
(function (a) {
  let x = 20;
  console.log(x + a);
})(20);

let y = 20;
console.log(10 + y);

// function Object() {
//     this.keys;
//     this.values;
// }

const person = {
  id: 1,
  age: 20,
};

console.log(Object.values(person));
console.log(Object.keys(person));

// prototype (OOPS)
//object function constructor
function Employee(id, firstName, salary) {
  let count = 0; //private member
  this.id = id;
  this.firstName = firstName;
  this.salary = salary;

  this.getCount = function () {
    return count;
  };
}

// id, salary, firstName -> instance member

// to add a new prop or methods later
console.log(Employee.prototype);

// prototype members
Employee.prototype.nationality = "Indian";

const empOne = new Employee(1, "Alina", 9000); //object
console.log(empOne);
console.log(empOne.getCount());

console.log(empOne.constructor);

const empTwo = new Employee(2, "Alex", 8000);
console.log(empTwo);

let arr = [10, 2, 3, 4];
console.log(arr);

// let a = new Array([10, 2, 3, 4]);
// console.log(a);

console.log(Array.prototype);

let strVal = new String("world");
console.log(strVal);

console.log(String.prototype);

String.prototype.Includes = () => {
  return "hello";
};

console.log(String.prototype);

const num = new Number(80);
console.log(num);

console.log(Number.prototype);

// Prototype inheritance
function Programmer(id, firstName, salary, language) {
  Employee.call(this, id, firstName, salary); //equivalent to super
  this.language = language;
}

// Inherit the proptype
Programmer.prototype = Object.create(Employee.prototype);

// manually set the constructor
Programmer.prototype.constructor = Programmer;

const progMember = new Programmer(20, "Alaya", 9000, "javascript");
console.log(progMember);

// Single level
// Employee
// Progranmer

// Multi level
// Object
// Enployee
// Programmer

// heirarichal
// Shape
// Circle
// Traingle
// Sqaure

// ES6 features: class
//template of js ovject
class Shape {
  constructor(id) {
    this.id = id;
  }
}

Shape.prototype.type = "sample";

const s = new Shape(10);
console.log(s);

class Circle extends Shape {
  constructor(id, radius) {
    super(id);
    this.radius = radius;
  }
}

const c = new Circle(2, 5);
console.log(c);

// Interface -> Typescript
