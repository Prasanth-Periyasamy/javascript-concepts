// Using delete keyword
const obj = { a: 1, b: 2, c: 3 };
delete obj.a;
console.log(obj);
delete obj.d;
console.log(obj);
delete obj["b"];
console.log(obj);
console.log(Object.keys(obj).length);

// delete with nested object
let obj2 = { a: { b: 1, c: 2 }, d: 3 };
delete obj2.a.b; // Deletes the 'b' property inside the 'a' object
console.log(obj2);

// deleting properties within an array of objects
let arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
delete arr[0].name;
console.log(arr);

// Using destructing and rest
// creates a new obj
const personDetails = {
  id: 1,
  name: "abc",
  location: "austin",
};
const { location, noKey, ...newPersonDetails } = personDetails;
console.log(newPersonDetails);
console.log(personDetails);
console.log(noKey);

// using Object.assign
let obj3 = { a: 1, b: 2, c: 3 };
let newObj = Object.assign({}, obj3);
delete newObj.a;
console.log(newObj);
console.log(obj3);

// using Reflect delete property
const obj5 = { id: 1, item: "apple", quantity: "3" };
Reflect.deleteProperty(obj5, "id");
console.log(obj5);

// Extras
// fromEntries method
const arr1 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const obj4 = Object.fromEntries(arr1);
console.log(obj4);

// assign creates a new object in the above using Object.assign

// Relfect property
// Reflect is a built-in object in JavaScript introduced in ECMAScript 6 (ES6) that provides methods for performing reflective operations on objects. Reflect methods are designed to be more consistent and flexible than some of the older ways of performing similar operations. They can be used for property manipulation, function invocation, and prototype-related operations.
const obj6 = { name: "John", age: 30 };

// Example 1: Check if a property exists
const hasAgeProperty = Reflect.has(obj6, "age");
console.log(hasAgeProperty); // Output: true

// Example 2: Get a property value
const ageValue = Reflect.get(obj6, "age");
console.log(ageValue); // Output: 30

// Example 3: Set a property value
Reflect.set(obj6, "city", "New York");
console.log(obj6); // Output: { name: 'John', age: 30, city: 'New York' }

// Example 4: Delete a property
Reflect.deleteProperty(obj6, "name");
console.log(obj6); // Output: { age: 30, city: 'New York' }
