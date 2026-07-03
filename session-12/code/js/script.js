// Debouncing
// Throttle
// Event loop & BHS
// DOM manipulation Example

function throttle(func, delay) {
  let timeout;

  return () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func();
        timeout = null;
      }, delay);
    }
  };
}

function userInput() {
  // api calls
  console.log("data");
}

const throttleFunc = throttle(userInput, 2000);

document.querySelector("#throttle").addEventListener("input", throttleFunc);

function debounce(func, delay) {
  let timeoutId;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
}

function userData(e) {
  //API calls
  console.log(document.querySelector("#debounce").value);
}

const debounceFunc = debounce(userData, 5000);

document.querySelector("#debounce").addEventListener("input", debounceFunc);

// Event loop & BHS

setTimeout(() => {
  console.log("hello");
}, 0);

console.log("2");
console.log("1");
