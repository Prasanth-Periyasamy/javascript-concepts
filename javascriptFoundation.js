// Comparing objects and arrays

// Array
// 1) Arrays are ordered collections of values, indexed by integers starting from 0. They maintain the order of elements you add to them
// 2) Arrays access elements using their numeric index, e.g., array[0] or array[3].
// 3) Arrays have methods like push(), pop(), shift(), and unshift() for adding and removing elements from the beginning or end of the array.
// 4) Arrays are typically iterated using loops like for, forEach, map, filter, etc., or using methods like forEach() or map().
// 5)Arrays are used when you need an ordered collection of elements, such as a list of items or a series of steps.

// Objects
// 1) Objects are unordered collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type. Objects do not guarantee the order of key-value pairs.
// 2) Objects access elements using their keys, e.g., object['key'] or object.key.
// 3) Objects use assignment to add or modify properties: object['key'] = value or object.key = value. You can use the delete keyword to remove a property from an object.
// 4) Objects can be iterated using for...in loop to iterate over keys or Object.keys(), Object.values(), or Object.entries() to iterate over keys, values, or entries respectively.
// 5) Objects are used to store data in key-value pairs, such as representing entities with properties or configurations.
let obj = {
  true: 1,
  1: 2, // numbers can be used as keys but can be accessed in only using this syntax obj[1]
  greet() {}, // simpler or modern syntax
};
console.log(obj[1]);
console.log(obj.greet);

// Type coercion
// 1)Type coercion in JavaScript refers to the process of automatically converting one data type to another when they are used together in an operation, comparison, or expression. JavaScript is a loosely typed language, which means that variables do not have a fixed data type. Type coercion occurs implicitly, meaning the conversion happens automatically by the JavaScript engine.
// 2) There are two types of type coercion in JavaScript:
//     1) Implicit Type Coercion
//     2) Explicit Type Coercion (Type Casting)

// Implicit Type coercion
// 1)This occurs when JavaScript automatically converts the data type of a value during an operation without explicitly specifying it.
// 2) Example :
// let result = 'The answer is ' + 42; // 'The answer is 42'
// if (0) {
//     console.log('This will not be executed');
//   } else {
//     console.log('Falsy value coerced to false');
//   }
//   // Output: Falsy value coerced to false
//   console.log(5 == '5'); // true
//   console.log(0 == false); // true
//   console.log('hello' || 'world'); // 'hello'
// When using the logical OR (||) operator, JavaScript evaluates the expression from left to right and returns the first truthy value it encounters.
let userInput = ""; // Assume this is user input
let username = userInput || false || "Guest"; // If userInput is falsy, use 'Guest' as the default value
console.log(username); // Output: 'Guest'
//   console.log(null && 'world'); // null
// The logical AND (&&) operator works similarly to the logical OR (||) operator, but it returns the first falsy value encountered or the last truthy value if no falsy value is found.
//   console.log('10' - 5); // 5
let userName = "name" && "sant" && "Moscow"; // here it returns the truthy value because no falsy is found
console.log(userName);

// Explicit Type Coercion
// Explicit type coercion, also known as type casting, refers to the intentional conversion of a value from one data type to another using JavaScript built-in functions or operators. Unlike implicit type coercion, which happens automatically, explicit type coercion requires you to explicitly specify the conversion.
// let num = 42;
// let str = String(num); // '42'
// let str = '123';
// let num = Number(str); // 123
// let num = 0;
// let bool = Boolean(num); // false
// let str = '10';
// let num = parseInt(str); // 10
// let str = '42';
// let num = +str; // 42
// let num = 42;
// let str = `The number is ${num}`; // 'The number is 42'
// let obj = { valueOf: () => 42 };
// let num = Number(obj); // 42
// let arr = [1, 2, 3];
// let str = arr.join(','); // '1,2,3'
// let dateString = '2022-01-01';
// let date = new Date(dateString); // Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
