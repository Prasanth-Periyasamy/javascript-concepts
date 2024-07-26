// hasOwnProperty is a method in JavaScript that is used to check whether an object has a property with a specific name. It returns a boolean value indicating whether the object has the specified property as a direct property of that object.

// hasOwnProperty does not check inheritred propertis and nested properties
// in method checks inherited properties, but not nested

//  hasOwnProperty only checks properties that are immediate descendants of the object, not properties that are deeper in the object's hierarchy.
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zipCode: "10001",
  },
};
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("address")); // true
console.log(person.address.hasOwnProperty("city")); // true
console.log(person.address.hasOwnProperty("zipCode")); // true
console.log(person.address.hasOwnProperty("street")); // false

// Extras
// what is inheritance?
// inherited properties will not be shown in console ,to access inherited properties we should use john.city
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.city = "New York";
console.log(Person);
const john = new Person("John", 30);
console.log(john);

console.log(john.hasOwnProperty("city")); //

// Constructor function
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john2 = new Person("John");
john2.sayHello(); // Hello, my name is John'

// second example
function Animal() {
  this.type = "Animal";
}

Animal.prototype.sound = "Generic Sound";

function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Buddy");

console.log(dog.type); // Inherited property from Animal prototype
console.log(dog.sound); // Inherited property from Animal prototype
