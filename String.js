// charAt
// charAt returns the characters at the specified index
let str = "My name is google";
console.log(str.charAt(80)); // returns empty string if not in specified range
console.log(str.charAt(11));

// charCodeAt
// charAt returns the unicode of the specified index
let str2 = "My name is google";
console.log(str.charCodeAt(80)); // returns NAN if not in specified range
console.log(str.charCodeAt(11));

// concat
let str3 = "Hello";
let str4 = "John"
console.log(str3.concat(" ",str4));