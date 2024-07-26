// Factory functions
// A factory function in JavaScript is a function that creates and returns objects. It's called a "factory" because it's like a factory that produces instances of objects based on a template or blueprint defined within the function.

function createUser(name, isAdmin = false) {
  return {
    name: name,
    isAdmin: isAdmin,
    greet: function () {
      console.log(
        `Hello, ${this.name}! You are ${
          this.isAdmin ? "an admin" : "a regular user"
        }.`
      );
    },
  };
}

const user1 = createUser("Alice");
const user2 = createUser("Bob", true);

user1.greet(); // Output: Hello, Alice! You are a regular user.
user2.greet(); // Output: Hello, Bob! You are an admin.

// Example 2 : Prototypal inheritance example
function createEmployee(name, position) {
  let employee = Object.create(createEmployee.prototype);
  employee.name = name;
  employee.position = position;
  return employee;
}

createEmployee.prototype.greet = function () {
  console.log(
    `Hello, my name is ${this.name} and I work as a ${this.position}.`
  );
};

console.log(createEmployee.prototype);

const emp1 = createEmployee("Alice", "Manager");
const emp2 = createEmployee("Bob", "Developer");

emp1.greet(); // Output: Hello, my name is Alice and I work as a Manager.
emp2.greet(); // Output: Hello, my name is Bob and I work as a Developer.

// Freeze
// Freeze methods freezes only shallow, does not goes nested or deeply
let person = {
  name: "sant",
  marital: "unMarried",
  address: {
    state: "Tamilnadu",
    city: "chennai",
    pin: {
      pincode: "6000021",
    },
  },
};
Object.freeze(person);
console.log((person.marital = "married"));
console.log(person);
console.log((person.address.city = "Dharmapuri"));
console.log(person);

// Study about getOwnPropertyNames and enumerable and non-enumerable properties in it 😀😀😀

// Size
// There is no inbuilt method like size in js, get the keys,values or entries array and get the array length
const fruits = {
  name: "apple",
  quantity: 2,
  quality: {
    rotten: 1,
    fresh: 1,
  },
};
console.log(Object.keys(fruits).length);

// Public properties
// Public properties in JavaScript objects are accessible and modifiable from outside the object.
// They are typically defined using the object literal syntax or added dynamically to an object.
// Example of defining a public property:
const person1 = {
  name: "John",
  age: 30,
  // This is a public property
  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  },
};
console.log(person1.name); // Output: John
console.log(person1.greet()); // Output: Hello, my name is John and I'm 30 years old.

// Private properties
// JavaScript doesn't have built-in support for private properties, but you can achieve privacy using closures.
// Private properties are not directly accessible or modifiable from outside the object.
// Example of creating private properties using closures:
function createPerson(name, age) {
  // Private property
  let secretCode = Math.random().toString(36).substring(7);

  // Public methods to access and modify private property
  return {
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
    getSecretCode() {
      return secretCode;
    },
  };
}

const person2 = createPerson("Alice", 25);
console.log(person2.getName()); // Output: Alice
console.log(person2.getAge()); // Output: 25
console.log(person2.secretCode); // Output: undefined (cannot access directly)
console.log((person2.secretCode = 100));
console.log(person2);
console.log(person2.getSecretCode()); // Output: random secret code

// Using sybmol for private properties
// JavaScript Symbols can be used to create "private" properties that are not easily accessible from outside the object. Since Symbols are unique and not exposed through object inspection methods, they can act as pseudo-private properties.
const secretKey = Symbol("secretKey");
console.log(secretKey);
const obj = {
  [secretKey]: "private value",
  getSecret() {
    return this[secretKey];
  },
};

console.log(obj.secretKey); // Output: undefined (Symbol not accessible)
console.log(obj.getSecret()); // Output: private value

// Using WeakMaps for Private Properties:
// WeakMaps can also be used to create private properties in JavaScript objects. WeakMaps allow you to associate private data with an object without exposing it directly.
const privateData = new WeakMap();

class Person3 {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const person4 = new Person3("Alice");
console.log(person4.name); // Output: undefined (private property)
console.log(person4.getName()); // Output: Alice
