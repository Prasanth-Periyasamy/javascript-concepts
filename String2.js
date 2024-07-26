// split a string
// syntax split(separator,limit)

const fullName = "john snow";
console.log(fullName.split(" "));
console.log(fullName.split("", 4));

// join a string
// join is for array , not for string
// join() => joins elements with a comma if seperator not provided
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(nestedArr.join(" ")); // joins inner arrays as normal join method join()
const arr1 = [1, 3, 6];
console.log(arr1.join());

// charAt
// syntax charAt(index) , default value of index is 0
// returns the character at index
// returns empty string if value is not found
const companyName = "numenticaui";
console.log(companyName.charAt());
console.log(companyName.charAt(3));

// charCodeAt
// syntax charAt(index) , default value of index is 0
// returns the character code of a char
// if char not found , it returns Nan
const company = "numenticaui";
console.log(company.charCodeAt(1));
console.log(company.charCodeAt(50));

// concat
// concat returns a new string, does not modifies the original string
const text1 = "Hello";
const text2 = "John";
console.log(text1.concat(" ", text2, "  ", "."));

// string introduction
// string is a collection of characters
// string can be any text inside double or single quotes
// string is also zero based index
// All string methods does not modify original, always returns a new value.

let singleInsideDouble = "John 'snow' is 'my' devil";
let doubleInsideSingle = 'John snow is "my" devil';
let doubleSingleInsideTemplate = `John 'snow' \n is my "devil"`;
console.log(doubleSingleInsideTemplate); // 📝

// Loop through a string
// using for loop
const loopString = "patcummins";
for (let i = 0; i < loopString.length; i++) {
  console.log(loopString[i]);
}
// using for of loop
for (let char of loopString) {
  console.log(char);
}
// using for in loop
for (let i in loopString) {
  console.log(loopString[i]);
}
// convert string to array 📝
console.log(Array.from(loopString));
// we can convert string to array and loop the array using array methods

// Regex - introduction pending ❌
