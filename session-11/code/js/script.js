// API
// GET Api's
// https://dummyjson.com/products
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users

// throttling & Debouncing

// async/await (ES7)
async function add() {
  let sum = 10 + 20;
  return sum;
}

let obj = add();
obj
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

function getData() {
  // getting user data
}

console.log(2);

// async function displayData() {
//   try {
//     const user = await getData();
//     const post = await getPosts();
//     const comments = await getComments();
//     return comments;
//   } catch (err) {
//     console.log(err);
//   }
// }

// displayData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log(1);

// API Integration (axios vs fetch: Application of promises)

// HTTP methods: get, post, put, patch, delete
// HTTP status code: 1xx, 2xx, 3xx, 4xx, 5xx

// axios
// API, method

function getProducts() {
  axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      console.log(res.data.products);
      //display in UI (DOM Manipulation)
    })
    .catch((err) => {
      console.log(err);
    });
}

document.addEventListener("DOMContentLoaded", getProducts);

async function getUsers() {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(users);
  } catch (err) {
    // if(err.status === 400) {

    // }
    // if(err.status == 500){

    // }
    console.log(err.status);
  }
}

getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getPosts();

// axios.post()
// axios.put()
// axios.patch()
// axios.delete()

// fetch("", {
//   body: {},
//   method: "POST",
//   headers: {},
// });

// axios.post("", {
//   body: {},
// });

const options = {
  method: "GET",
  url: "https://crypto-news51.p.rapidapi.com/api/v1/crypto/articles",
  params: {
    page: "1",
    limit: "10",
    time_frame: "24h",
    format: "json",
  },
  headers: {
    "x-rapidapi-host": "crypto-news51.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

async function getCrypto() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
// getCrypto();

function addProduct() {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// Go through Document: https://dummyjson.com/docs/products
