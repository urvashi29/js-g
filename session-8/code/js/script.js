// Map, set object
// Events
// Event propogation

// Selector
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName('p')
// document.getElementsByName('firstname')

// select 1 element
// querySelector(css selectors)
console.log(document.querySelector("#sample"));
console.log(typeof document.querySelector("#sample"));

console.log(document.querySelector(".item"));

// access the element content
console.log(document.querySelector("#sample").innerHTML);
console.log(document.querySelector("#list").innerHTML);
console.log(document.querySelector("#list").textContent);

// update the content
document.querySelector("#sample").textContent = "Hello";
document.querySelector("#sample").innerHTML = "<p>Hello</p> <p>World</p>";

// document.querySelectorAll()
let listItems = document.querySelectorAll(".item");
console.log(listItems);

// for loops for iterating over collections
const arr = [];
listItems.forEach((item) => {
  console.log(item.textContent);
  arr.push(item.textContent);
});
console.log(arr);

// Manipulating CSS
document.querySelector("#sample").style.fontSize = "20px";
document.querySelector("#sample").style.backgroundColor = "pink";

// class
const classes = document.querySelector("#test").classList;
// classes.add("card");
// console.log(classes.contains("card"));
classes.remove("sample");
classes.toggle("card"); //toggle functionality

// creation DOM node
const img = document.createElement("img"); //<img />
img.src = "https://m.media-amazon.com/images/I/818SauychIL._AC_SX679_.jpg"; //<img src="" />
img.alt = "watch"; //<img src=""  alt="" />
img.style.width = "100px";
img.style.height = "100px";
document.body.append(img);
document.body.prepend(img);

const a = document.createElement("a");
a.textContent = "Gigame";
a.setAttribute("href", "https://gigamein.com/Questions");
a.setAttribute("target", "_blank");

// insertAdjacentElement("afterbegin"), "beforeend" " afterend"
document.querySelector("#list").insertAdjacentElement("beforebegin", a);

// insertBefore()

document.querySelector("#list-items").innerHTML =
  "<li>Hello</li> <li>World</li>";

console.log(document.body.children.length);

// delete a node
document.querySelector("li:first-child").remove();

// capture User Input
// const userInput = document.querySelector("#firstname").value;

// Form Validation

// Task
// create a list from JS and insert into DOM
