//  Topic 2 - Looping objects  - ⭐
// for in loop
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let key in obj) {
  console.log(obj[key]);
}

// we can convert obj keys to array and iterate (Object.keys)

// using object.entries
for (let [key, value] of Object.entries(obj)) {
  // Your code here
}

// Using Object.getOwnPropertyNames
Object.getOwnPropertyNames(obj).forEach((key) => {
  let value = obj[key];
  // Your code here
});

// The Object.getOwnPropertyNames(person) method returns an array containing the names of all properties (both enumerable and non-enumerable) of the object.
// Object.keys(object) returns an array of enumerable property names of the object.
// Object.getOwnPropertyNames(object) returns an array of all property names (enumerable and non-enumerable) of the object.
// Enumerable Properties: By default, properties created using object literals ({}) or added to an object using assignment (object.property = value) are enumerable. Enumerable properties are included when iterating over an object's properties using methods like for...in loop, Object.keys(), and Object.values().
// Non-enumerable Properties: These properties are not included when iterating over object properties using for...in loop or methods like Object.keys() and Object.values(). Non-enumerable properties can be created using Object.defineProperty() or Object.defineProperties() with the enumerable property set to false.

let car = {};
// Adding enumerable properties using object literal syntax
car.make = "Toyota";
car.model = "Camry";
// Adding a non-enumerable property using Object.defineProperty
Object.defineProperty(car, "year", {
  value: 2022,
  enumerable: false,
});
console.log(Object.keys(car)); // Output: ['make', 'model']
console.log(Object.getOwnPropertyNames(car)); // Output: ['make', 'model', 'year']
for (let key in car) {
  console.log(key); // Output: 'make' and 'model', but 'year' is not logged
}
