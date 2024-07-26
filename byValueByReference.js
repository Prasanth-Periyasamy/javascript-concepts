function modifyValue(value) {
  value = value * 2;
  console.log("Inside function:", value);
}

let num = 10;
console.log("Before function:", num); // Output: Before function: 10
modifyValue(num); // Output: Inside function: 20
console.log("After function:", num); // Output: After function: 10

// In this example, the modifyValue function takes an argument value, doubles it (value = value * 2), and logs the modified value inside the function. However, outside the function, the original variable num remains unchanged (num is still 10), demonstrating that the argument was passed by value.
// This behavior is because primitive data types are immutable in JavaScript. When you pass a primitive value as an argument, you're passing a copy of that value, not a reference to the original variable. Any changes made to the parameter inside the function only affect the local copy of the value, not the original variable outside the function

// Pass by reference
function modifyObject(obj) {
  obj.name = "John Doe";
  obj.age = 30;
}

// let person = { name: "Alice", age: 25 };
console.log("Before function:", person); // Output: Before function: { name: 'Alice', age: 25 }
modifyObject(person);
console.log("After function:", person); // Output: After function: { name: 'John Doe', age: 30 }

// In JavaScript, objects (including arrays, functions, and other non-primitive types) are passed by reference when used as arguments in function calls. This means that when you pass an object to a function, you're passing a reference to the actual object in memory, not a copy of it. Changes made to the object inside the function will affect the original object outside the function. Here's an example to demonstrate pass by reference:

// javascript
// Copy code
function modifyObject(obj) {
  obj.name = "John Doe";
  obj.age = 30;
}

let person = { name: "Alice", age: 25 };
console.log("Before function:", person); // Output: Before function: { name: 'Alice', age: 25 }
modifyObject(person);
console.log("After function:", person); // Output: After function: { name: 'John Doe', age: 30 }
// In this example, the modifyObject function takes an object obj, modifies its properties (name and age), and the changes persist outside the function. When person is logged after calling modifyObject, its properties have been updated based on the modifications made inside the function.

// This behavior occurs because objects in JavaScript are reference types. When an object is passed as an argument, the function receives a reference to the original object. Any modifications made to this object inside the function affect the actual object in memory, not just a copy of it.

// It's important to note that although objects are passed by reference, reassigning the parameter inside the function to a new object (e.g., obj = { ... }) will not affect the original object outside the function. This is because reassigning creates a new reference, disconnecting it from the original object.
