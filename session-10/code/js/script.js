// async await

// event bubbling
// addEventListener(event name, callback, false )
document.querySelector("#one").addEventListener(
  "click",
  function (e) {
    console.log("one is clicked");
  },
  false,
);

document.querySelector("#two").addEventListener(
  "click",
  function (e) {
    console.log("two is clicked");
    e.stopPropagation();
  },
  false,
);

document.querySelector("#three").addEventListener(
  "click",
  function (e) {
    console.log("three is clicked");
    e.stopPropagation();
  },
  false,
);

// event capturing -> true
// document.querySelector("#one").addEventListener("click", function () {
//   console.log("one is clicked");
// }, true);

// document.querySelector("#two").addEventListener("click", function () {
//   console.log("two is clicked");
// }, true);

// document.querySelector("#three").addEventListener("click", function () {
//   console.log("three is clicked");
// }, true);

// Async programming
// callback

// Application
// Timing events
let sId = setTimeout(() => {
  console.log("Hello");
}, 2000);

// 1000ms = 1second

console.log(1);
console.log(2);

let id = setInterval(() => {
  let d = new Date();
  console.log(d);
}, 1000);

document.querySelector("#btn").addEventListener("click", function () {
  clearInterval(id);
  clearTimeout(sId);
});

// callback hell / Pyramid of Doom
function getData(callback) {
  //api call happen
  let user = {};
  callback(user);
}

// getData(function (user) {
//     getPosts(user.id, function () {
//         // api call
//         getComments(post[0].id, function () {
//             //api call
//         })
//     })
// })

// Promises: in built JS object
let myPromise = new Promise(function (res, rej) {
  //producing code
  let x = 0;
  if (x == 0) {
    res("result");
  } else {
    rej("error");
  }
});

console.log(myPromise);

// consuming code
myPromise
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(1);
  });

//   alternate syntax
myPromise.then(
  (r) => {
    console.log(r);
  },
  (err) => {
    console.log(err);
  },
);

const promise1 = Promise.resolve(20);
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("World");
  }, 1000);
});

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); //arrays
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([promise1, promise2])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

// Task
//  Creating a Simple Promise: Write a function that returns a promise which resolves to a specific object after 1 second.
//  Create an object with a method that returns a promise. The promise should resolve with the object's properties after 2 seconds.
//  Write a function that accepts an object with two promises. Return a new promise that resolves when both resolve (Promise.all).
//  Write a function that takes a promise and a timeout. If the promise exceeds the timeout, reject with an error (Promise.race).

// function add() {
//   let myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res({ id: 1 });
//     }, 1000);
//   });

//   return myPromise;
// }

// let response = add();
// response.then().catch()
