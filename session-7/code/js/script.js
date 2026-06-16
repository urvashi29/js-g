// Manipulating CSS
// creation DOM node
// capture User Input

// web storages (client storage) 2014(HTML5)
let cart = [
  { id: 1, price: 120, title: "Product 1" },
  { id: 2, price: 150, title: "Product 2" },
];

// local storage
localStorage.setItem("firstname", "Alex");
localStorage.setItem("cart", JSON.stringify(cart));

console.log(localStorage.getItem("firstname"));

localStorage.removeItem("firstname");

localStorage.clear();

// session storage
sessionStorage.setItem("firstname", "Alex");
sessionStorage.setItem("cart", JSON.stringify(cart));

console.log(sessionStorage.getItem("firstname"));

sessionStorage.removeItem("firstname");

sessionStorage.clear();

const person = {
  id: 10,
  age: 20,
};

const jsonPerson = JSON.stringify(person);

let d = new Date();
console.log(d.getDate());

// cookie
document.cookie =
  "username=Alina; expires=Fri, 19 Jun 2026 23:59:50 GMT, path=/; Secure";

// max-age=3600 (second) or expire =UTC date value
document.cookie = `user_data=${jsonPerson}; max-age=86400, path=/; Secure`;

document.cookie = "productId=20";
document.cookie = "productId=20; max-age=2000; path=/JS-5/session-7/code";

// in css
// # -> id
// . -> class

// selectors
console.log(document.getElementById("sample"));
console.log(typeof document.getElementById("sample"));

let collection = document.getElementsByClassName("item");
console.log(collection);
