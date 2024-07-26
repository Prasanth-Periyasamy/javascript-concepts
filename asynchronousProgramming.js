// Fetch
// 1)The Fetch is an API provided by the browser to make asynchronous network requests, typically to fetch resources from a server. It provides a more powerful and flexible alternative to older methods like XMLHttpRequest (XHR).
// why we needed fetch?
// Simplicity: Fetch provides a simpler and cleaner syntax compared to XHR, making it easier to use and understand.
// Promises: Fetch uses Promises, which simplifies handling asynchronous operations and makes code more readable.
// Streamlined API: Fetch offers a more streamlined API for working with HTTP requests and responses.

// Fetch example
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log("err", err));

// POst method
// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   body: JSON.stringify({
//     id: 11,
//     name: "Uchchiha",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Delete method
// fetch("https://jsonplaceholder.typicode.com/users/1", {
//   method: "DELETE",
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("deleted successfullly");
//     } else {
//       console.log(res.statusText);
//     }
//   })
//   .catch((err) => console.log(err));

//   PUT method
// fetch("https://jsonplaceholder.typicode.com/users/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     name: "Uchchiha",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((res) => res)
//   .catch((err) => console.log(err));

//  Example for xmlhttprequest
// const xhr = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/users";
// xhr.open("GET", url, true);
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response);
//   } else {
//     console.error("Request failed with status:", xhr.status);
//   }
// };
// xhr.onerror = function () {
//   console.error("Request failed");
// };
// xhr.send();

// What is asynchronous ?
// Asynchronous code in programming allows tasks to run independently of the main program flow, enhancing efficiency and responsiveness. Unlike synchronous code, where tasks run sequentially and can block execution, asynchronous operations enable concurrent execution and non-blocking I/O. This is crucial for tasks like fetching data from servers, processing multiple operations concurrently, and building responsive user interfaces. Asynchronous programming is facilitated through mechanisms like callbacks, promises, and async/await in JavaScript, providing structured ways to handle asynchronous tasks and improving code readability and maintainability. Overall, asynchronous code plays a vital role in modern software development, optimizing performance and user experience in various applications.

// Promise.all
// Promise.all is a method in JavaScript that takes an array of promises as input and returns a single promise. This new promise resolves when all the promises in the input array have resolved, or rejects if any of the promises in the array rejects.
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: userId, username: `user${userId}` });
//     }, Math.random() * 1000); // Random delay for simulation
//   });
// }
// function fetchUserPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([`Post 1 by user${userId}`, `Post 2 by user${userId}`]);
//     }, Math.random() * 1000); // Random delay for simulation
//   });
// }
// const userId = 1;
// Promise.all([fetchUserData(userId), fetchUserPosts(userId)])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error fetching user data or posts:", error);
//   });

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

const requests = urls.map((url) => fetch(url));
console.log(requests);
Promise.all(requests)
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then(([data1, data2, data3]) =>
    console.log("Data fetched successfully:", data1)
  )
  .catch((error) => console.error("Error fetching data:", error));
