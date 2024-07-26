// keys
let obj = { a: 1, b: 2 };
console.log(Object.keys(obj));
// same for null or undefined
const emptyArray = [];
const keys = Object.keys(emptyArray);
console.log(keys);
let obj2;
// console.log(Object.keys(obj2));

// values
console.log(Object.values(obj));

// entries
console.log(Object.entries(obj));

// Objects Methods
// freeze for object and arrays too can be freezed
// freeze method freezes in shallow so nested obj can be changed after freeze
// isFrozen checks whether it is frozen or not
let obj4 = {
  a: 1,
  c: 3,
  d: {
    e: 3,
    f: 5,
  },
};
obj4.h = "22";
console.log(obj4);
const freezedObj = Object.freeze(obj4);
console.log(freezedObj === obj4);
obj4.i = "21";
console.log(obj4);
obj4.d.e = 33;
console.log(obj4);

const arr = [1, 7, [3, 8]];
arr[3] = 10;
console.log(arr);
Object.freeze(arr);
arr[4] = 20;
console.log(arr);
arr[2][1] = 88; // nested array can be modified as like object
console.log(arr);
