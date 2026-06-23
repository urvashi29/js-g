// Event propogation

function display() {
  alert("Open website!");
}

function captureName() {
  let firstname = document.querySelector("#firstname").value;

  document.querySelector("#first").textContent = firstname;
}

function captureUserInput() {
  let age = document.querySelector("#age").value;
  let contact = document.querySelector("#contact").value;

  const user = { age, contact }; //restructuring of object
  alert(user);
}

function captureEmail(e) {
  console.log(e);
  const email = e.target.value;

  //   validation
  if (email.length < 3) {
    document.querySelector("#email-error").textContent = "Enter correct age";
    document.querySelector("#email-error").style.color = "red";
  } else {
    document.querySelector("#email-error").textContent = "";
  }

  console.log(email);
}

// attach events from js
// addEventListener(event name, callback function, boolean value)
document.querySelector("#test").addEventListener("click", function (e) {
  console.log(this); //referring to the element on which I have attached event
  console.log(this.textContent);

  console.log(e); //automatically created when event is triggered
  console.log(e.target);
});

document.querySelector("#email").addEventListener("keyup", captureEmail);

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault(); //preventing the default behavior of that event
  console.log("hello");
});

let obj = {
  id: 1,
};

let objTwo = {
  id: 2,
};

// Map is similar object, however we can create key as a any datatype
const map = new Map();

map.set(1, 90);
map.set(2, 100);
map.set("hello", 89);
console.log(map);

map.set(obj, 200);
map.set(objTwo, 100);
map.set(obj, 50); //overriding

console.log(map.get(1));
console.log(map.get("hello"));

map.delete(1);
console.log(map.has(1));
console.log(map.size);
// map.clear();
console.log(map);

const objThree = { ...obj };

// set object: similar to array, without duplicates
const set = new Set([10, 20, 30, 40, 50, 5, 5, obj, objThree]);

set.add(100);
console.log(set.has(100));

set.delete(20);

console.log(set);
console.log(set.size);

// Try form
// name, username, contact, email, password, date, type: add validation (with error)
